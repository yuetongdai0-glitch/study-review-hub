/**
 * 静态站点构建：把手写 HTML 原样搬到 dist，并统一做「缓存键 + 更新清单 + Service Worker」三件事。
 *
 * 设计要点：
 * - 源文件保持零构建、可直接阅读；所有改写只发生在 dist，不污染源码与测试断言。
 * - 资源 URL 追加 ?v=<buildId>，配合按构建号命名的 SW 缓存，换构建 = 换缓存桶，天然不会读到旧资源。
 * - HTML 永不缓存：SW 用 cache: 'no-store' 拿导航请求，dist 里同时写入 meta 头兜底。
 * - 每个页面注入 site-update.js（版本轮询 + 全局刷新），新增页面不用手工加脚本。
 */
import { createHash } from 'node:crypto'
import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const serve = process.argv.includes('--serve')

/** 需要逐字节搬运的源文件/目录（顺序不影响结果）。 */
const COPY = ['index.html', 'favicon.ico', 'pages', 'assets']

/** 可以带版本号的静态资源后缀；HTML 不在其中，避免把导航链接写成带 query 的形式。 */
const VERSIONED = /\.(?:css|js|webp|png|jpe?g|gif|svg|ico|woff2?|json)$/i

/**
 * 收集目录下的全部文件。
 * @param {string} dir 起始目录。
 * @returns {Promise<string[]>} 文件绝对路径。
 */
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await walk(full)))
    else files.push(full)
  }
  return files
}

/**
 * 生成构建号：只由内容决定，与时间无关。
 * 这样「内容没变 → 构建号不变 → 移动端不用重打包」，避免每次发布都白跑一遍。
 * @param {string[]} files dist 下的文件。
 * @param {string} version 站点版本号。
 * @returns {Promise<string>} 形如 2.0.0-a1b2c3d4 的标识。
 */
async function createBuildId(files, version) {
  const hash = createHash('sha256')
  for (const file of files.sort()) {
    if (!VERSIONED.test(file)) continue
    hash.update(relative(dist, file))
    hash.update(await readFile(file))
  }
  return `${version}-${hash.digest('hex').slice(0, 8)}`
}

/**
 * 给 HTML 里的静态资源引用补版本号，并注入构建标记与更新脚本。
 * @param {string} html 原始 HTML。
 * @param {string} buildId 构建号。
 * @param {string} assetPrefix 该页面到站点根的相对前缀（如 './' 或 '../../'）。
 * @returns {string} 处理后的 HTML。
 */
function transformHtml(html, buildId, assetPrefix) {
  const withVersion = html.replace(
    /(href|src)="((?:\.{1,2}\/)+(?:assets|pages)\/[^"?#]+)"/g,
    (match, attr, target) => (VERSIONED.test(target) ? `${attr}="${target}?v=${buildId}"` : match)
  )

  const head = [
    `<meta name="study-hub-build" content="${buildId}">`,
    '<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">',
    '<meta http-equiv="Pragma" content="no-cache">',
    '<meta http-equiv="Expires" content="0">'
  ].join('\n  ')

  const script = `  <script defer src="${assetPrefix}assets/site-update.js?v=${buildId}"></script>\n</body>`

  return withVersion
    .replace(/<meta charset="[^"]*">/i, (match) => `${match}\n  ${head}`)
    .replace(/<\/body>/i, script)
}

/**
 * Service Worker 源码：构建号注入后写到 dist/sw.js。
 * @param {string} buildId 构建号。
 * @returns {string} worker 代码。
 */
function workerSource(buildId) {
  return `/* 由 apps/web/scripts/build.mjs 生成，请勿手工修改。build=${buildId} */
const BUILD = ${JSON.stringify(buildId)}
const CACHE = 'study-hub-' + BUILD

self.addEventListener('install', (event) => {
  /* 有新构建立即接管，不让用户停在旧版本上。 */
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      /* 缓存桶按构建号命名：换构建 = 换桶，旧桶整体丢弃，天然不会串内容。 */
      const names = await caches.keys()
      await Promise.all(
        names.filter((name) => name.startsWith('study-hub-') && name !== CACHE).map((name) => caches.delete(name))
      )
      await self.clients.claim()
    })()
  )
})

self.addEventListener('message', (event) => {
  const data = event.data || {}
  if (data.type === 'STUDY_HUB_SKIP_WAITING') {
    event.waitUntil(self.skipWaiting())
    return
  }
  if (data.type === 'STUDY_HUB_CLEAR') {
    event.waitUntil(
      (async () => {
        const names = await caches.keys()
        await Promise.all(names.map((name) => caches.delete(name)))
        if (event.source) event.source.postMessage({ type: 'STUDY_HUB_CLEARED' })
      })()
    )
  }
})

self.addEventListener('fetch', (event) => {
  const request = event.request
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  /* 跨域请求（字体、外链）不接管，避免破坏第三方缓存策略。 */
  if (url.origin !== self.location.origin) return
  if (url.pathname.endsWith('/sw.js')) return

  const isDocument =
    request.mode === 'navigate' || url.pathname.endsWith('/') || /\\.html?$/i.test(url.pathname)
  const isManifest = url.pathname.endsWith('/version.json')

  /*
   * HTML 与清单永不落盘。GitHub Pages 会给 HTML 打 max-age=600，只看请求头不够，
   * 这里再拼一个随构建变化的查询串，让 CDN 在换构建后必然回源；
   * 同一构建内仍可命中 CDN 缓存，等于「内容一致就复用、内容一变就最新」。
   */
  if (isDocument || isManifest) {
    const fresh = new URL(url.href)
    fresh.searchParams.set('_build', BUILD)
    event.respondWith(fetch(fresh.href, { cache: 'no-store', credentials: 'same-origin' }))
    return
  }

  /* 其余静态资源：本构建缓存内 cache-first；URL 带 ?v=build，跨构建不会串内容。 */
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE)
      const hit = await cache.match(request)
      if (hit) return hit
      const response = await fetch(request)
      if (response.ok && response.type === 'basic') await cache.put(request, response.clone())
      return response
    })()
  )
})
`
}

/**
 * 执行一次完整构建。
 * @returns {Promise<{buildId: string, files: number, bytes: number}>} 构建摘要。
 */
async function build() {
  await rm(dist, { recursive: true, force: true })
  await mkdir(dist, { recursive: true })

  for (const entry of COPY) {
    const from = join(root, entry)
    if (!existsSync(from)) throw new Error(`缺少构建输入：${entry}`)
    await cp(from, join(dist, entry), { recursive: true })
  }

  /* 先把页面搬完再算构建号，保证哈希覆盖 HTML 之外的产物。 */
  const pkg = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'))
  const all = await walk(dist)
  const buildId = await createBuildId(all, pkg.version)

  for (const file of all.filter((item) => item.endsWith('.html'))) {
    const rel = relative(dist, file).split(sep).join('/')
    const depth = rel.split('/').length - 1
    const assetPrefix = depth === 0 ? './' : '../'.repeat(depth)
    const html = await readFile(file, 'utf8')
    await writeFile(file, transformHtml(html, buildId, assetPrefix))
  }

  await writeFile(join(dist, 'sw.js'), workerSource(buildId))
  await writeFile(
    join(dist, 'version.json'),
    `${JSON.stringify(
      {
        app: 'study-hub',
        version: pkg.version,
        buildId,
        builtAt: new Date().toISOString(),
        htmlCache: 'no-store',
        assetCache: 'immutable-per-build'
      },
      null,
      2
    )}\n`
  )
  /* GitHub Pages 靠这个空文件关掉 Jekyll，避免下划线目录被吃掉。 */
  await writeFile(join(dist, '.nojekyll'), '')

  const files = await walk(dist)
  let bytes = 0
  for (const file of files) bytes += (await stat(file)).size
  return { buildId, files: files.length, bytes }
}

const summary = await build()
console.log(
  `构建完成：${summary.files} 个文件 / ${(summary.bytes / 1024 / 1024).toFixed(2)} MiB，构建号 ${summary.buildId}`
)

if (serve) {
  const { startServer } = await import('./serve.mjs')
  await startServer(dist)
}
