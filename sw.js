/* 由 vite/studyHubBuild.ts 生成，请勿手工修改。build=2.0.4-60379f28 */
const BUILD = "2.0.4-60379f28"
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
    request.mode === 'navigate' || url.pathname.endsWith('/') || /\.html?$/i.test(url.pathname)
  const isManifest = url.pathname.endsWith('/version.json') || url.pathname.endsWith('/app-version.json')

  /*
   * HTML 与清单永不落盘。GitHub Pages 会给 HTML 打 max-age=600，
   * 只靠 no-store 不够，这里再拼一个随构建变化的参数，让 CDN 在换构建后必然回源。
   *
   * 关键坑：目录路径（如 /tools/scratchpad）会被 Pages 301 跳到带斜杠的地址，
   * fetch 跟随重定向后拿到的是 redirected 响应；而页面导航请求的 redirect 模式是
   * manual，**用 redirected 响应回复导航会被浏览器判成 ERR_FAILED**（表现为
   * 「第一次能进、点刷新就崩」）。所以这里必须把重定向响应重建成干净的 Response。
   */
  if (isDocument || isManifest) {
    const fresh = new URL(url.href)
    fresh.searchParams.set('_build', BUILD)
    event.respondWith(
      (async () => {
        const response = await fetch(fresh.href, { cache: 'no-store', credentials: 'same-origin' })
        if (!response.redirected) return response
        // redirected 响应不能再直接回给导航请求：克隆正文并丢弃重定向标记。
        const body = await response.blob()
        return new Response(body, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        })
      })()
    )
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
