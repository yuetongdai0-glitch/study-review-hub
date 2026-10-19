/**
 * 本地静态服务器：只用于自测构建产物，缓存头刻意模仿线上（HTML 不缓存、带版本号资源长缓存），
 * 这样「改了就生效」和「刷新拿新内容」在本地就能验证，不用等 Pages 的 CDN。
 */
import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve, sep } from 'node:path'

/** 常见静态资源 MIME；缺项按二进制流处理。 */
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8'
}

/**
 * 按文件类型给出缓存策略。
 * @param {string} pathname 请求路径。
 * @param {URLSearchParams} search 查询参数。
 * @returns {string} Cache-Control 头。
 */
function cacheControl(pathname, search) {
  if (pathname.endsWith('.html') || pathname.endsWith('/')) return 'no-store, must-revalidate'
  if (pathname.endsWith('/version.json') || pathname.endsWith('/sw.js')) return 'no-store'
  /* 构建时写入了 ?v=，可以安全长缓存；没带版本号的资源退化为短缓存。 */
  return search.has('v') ? 'public, max-age=31536000, immutable' : 'public, max-age=300'
}

/**
 * 启动服务器。
 * @param {string} dir 站点根目录。
 * @param {number} [port] 端口，默认 8770。
 * @returns {Promise<import('node:http').Server>} 已监听的服务实例。
 */
export async function startServer(dir, port = Number(process.env.PORT ?? 8770)) {
  const staticRoot = resolve(dir)

  const server = createServer(async (request, response) => {
    const url = new URL(request.url ?? '/', 'http://127.0.0.1')
    let pathname = decodeURIComponent(url.pathname)
    if (pathname.endsWith('/')) pathname += 'index.html'

    /* 目录穿越保护：解析后必须仍在站点根目录内。 */
    const target = normalize(join(staticRoot, pathname))
    if (!target.startsWith(staticRoot + sep) && target !== staticRoot) {
      response.writeHead(403).end('Forbidden')
      return
    }

    try {
      const info = await stat(target)
      const file = info.isDirectory() ? join(target, 'index.html') : target
      const finalInfo = info.isDirectory() ? await stat(file) : info
      response.writeHead(200, {
        'content-type': MIME[extname(file).toLowerCase()] ?? 'application/octet-stream',
        'content-length': finalInfo.size,
        'cache-control': cacheControl(pathname, url.searchParams),
        'service-worker-allowed': '/'
      })
      if (request.method === 'HEAD') {
        response.end()
        return
      }
      createReadStream(file).pipe(response)
    } catch {
      response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' })
      response.end(`404 ${pathname}`)
    }
  })

  await new Promise((resolveListen) => server.listen(port, '127.0.0.1', resolveListen))
  console.log(`预览地址：http://127.0.0.1:${port}/ （HTML 不缓存，资源长缓存）`)
  return server
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const dir = resolve(process.argv[2] ?? 'dist')
  const server = await startServer(dir)
  const shutdown = () => server.close(() => process.exit(0))
  process.on('SIGINT', shutdown)
  process.on('SIGTERM', shutdown)
}
