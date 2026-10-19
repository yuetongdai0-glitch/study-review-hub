import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Plugin } from 'vite'

const here = dirname(fileURLToPath(import.meta.url))
const webRoot = resolve(here, '..')

/**
 * 从 routePaths.ts 提取全部业务路由。
 *
 * @returns 形如 ['/quantitative', '/tools/scratchpad'] 的路径数组。
 * @remarks 以源码为唯一事实来源，避免构建脚本另维护一份路由清单后与页面脱节。
 */
function readRoutePaths(): string[] {
  const source = readFileSync(join(webRoot, 'src/router/routePaths.ts'), 'utf8')
  const matches = source.matchAll(/^\s{2}\w+:\s*'([^']+)'/gm)
  const paths = [...matches].map((item) => item[1])
  return paths.filter((path) => path.startsWith('/'))
}

/**
 * 生成 Service Worker 源码。
 *
 * @param buildId 构建号。
 * @returns worker 代码。
 */
function workerSource(buildId: string): string {
  return `/* 由 vite/studyHubBuild.ts 生成，请勿手工修改。build=${buildId} */
const BUILD = ${JSON.stringify(buildId)}
const CACHE = 'study-hub-' + BUILD

self.addEventListener('install', () => {
  // 有新构建立即接管，不让用户停在旧版本上。
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // 缓存桶按构建号命名：换构建 = 换桶，旧桶整体丢弃。
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
  if (url.origin !== self.location.origin) return
  if (url.pathname.endsWith('/sw.js')) return

  const isDocument =
    request.mode === 'navigate' || url.pathname.endsWith('/') || /\\.html?$/i.test(url.pathname)
  const isManifest = url.pathname.endsWith('/version.json') || url.pathname.endsWith('/app-version.json')

  /*
   * HTML 与清单永不落盘。GitHub Pages 会给 HTML 打 max-age=600，
   * 只靠 no-store 不够，这里再拼一个随构建变化的参数，让 CDN 在换构建后必然回源。
   */
  if (isDocument || isManifest) {
    const fresh = new URL(url.href)
    fresh.searchParams.set('_build', BUILD)
    event.respondWith(fetch(fresh.href, { cache: 'no-store', credentials: 'same-origin' }))
    return
  }

  // 其余静态资源：本构建缓存内 cache-first；文件名自带内容哈希，跨构建不会串。
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
 * 站点构建插件。
 *
 * 职责：
 * 1. 构建完成后按产物内容算构建号（内容不变 → 构建号不变）。
 * 2. 产出 version.json 与 sw.js（缓存策略见 worker 源码注释）。
 * 3. 为每个业务路由写一份 index.html，让 GitHub Pages 直接刷新二级路由也返回 200。
 *
 * @returns Vite 插件。
 */
export function studyHubBuild(): Plugin {
  let outDir = 'dist'
  let version = '0.0.0'

  return {
    name: 'study-hub-build',
    apply: 'build',

    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
      const pkg = JSON.parse(readFileSync(join(config.root, 'package.json'), 'utf8')) as { version?: string }
      version = pkg.version ?? '0.0.0'
    },

    async generateBundle(_options, bundle) {
      // 构建号只由产物内容决定：内容没变，指纹就不变，移动端也就不用重打包。
      const hash = createHash('sha256')
      for (const key of Object.keys(bundle).sort()) {
        const item = bundle[key]
        if (item.type === 'chunk') hash.update(item.code)
        else if (item.fileName !== 'version.json' && item.fileName !== 'sw.js') {
          hash.update(typeof item.source === 'string' ? item.source : Buffer.from(item.source))
        }
      }
      const buildId = `${version}-${hash.digest('hex').slice(0, 8)}`

      // 把占位符换成真实构建号，前端用它和 version.json 比对。
      const htmlAsset = bundle['index.html']
      if (htmlAsset && htmlAsset.type === 'asset') {
        htmlAsset.source = String(htmlAsset.source).replace('__BUILD_ID__', buildId)
      }

      this.emitFile({
        type: 'asset',
        fileName: 'version.json',
        source: `${JSON.stringify(
          {
            app: 'study-hub',
            version,
            buildId,
            builtAt: new Date().toISOString(),
            htmlCache: 'no-store',
            assetCache: 'immutable-per-build',
          },
          null,
          2,
        )}\n`,
      })

      this.emitFile({ type: 'asset', fileName: 'sw.js', source: workerSource(buildId) })

      // 路由级 HTML 副本在 writeBundle 阶段落盘（此时资源清单已确定）。
      this.emitFile({
        type: 'asset',
        fileName: '.routes.json',
        source: JSON.stringify({ buildId, routes: readRoutePaths() }),
      })
    },

    async writeBundle() {
      const html = await readFile(join(outDir, 'index.html'), 'utf8')
      const manifest = JSON.parse(await readFile(join(outDir, '.routes.json'), 'utf8')) as { routes: string[] }

      for (const route of manifest.routes) {
        const target = join(outDir, route.replace(/^\//, ''), 'index.html')
        await mkdir(dirname(target), { recursive: true })
        await writeFile(target, html)
      }

      // 旧路径 /pages/<route>/ 也留一份，保证历史书签直达不 404（页面内会做重定向）。
      for (const route of manifest.routes) {
        const name = route.replace('/tools/', '').replace(/^\//, '')
        const target = join(outDir, 'pages', name, 'index.html')
        await mkdir(dirname(target), { recursive: true })
        await writeFile(target, html)
      }

      // .routes.json 只是构建期中间产物，不对外发布。
      const { rm } = await import('node:fs/promises')
      await rm(join(outDir, '.routes.json'), { force: true })
    },
  }
}
