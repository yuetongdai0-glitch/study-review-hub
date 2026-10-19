/**
 * 全站更新与刷新中枢（由构建脚本注入到每个页面，无需逐页引用）。
 *
 * 职责：
 * 1. 注册 Service Worker：HTML 走网络、静态资源按构建号缓存（策略在 sw.js 里）。
 * 2. 轮询 version.json 发现新构建，左下角浮出「有新内容」提示，一点即换到最新版本。
 * 3. 提供全局刷新按钮：普通刷新 / 长按清理缓存后刷新。
 * 4. 原生壳内（安卓）走应用内更新：检查版本 → 下载 APK → 校验 → 调起系统安装。
 */
;(() => {
  if (window.__studyHubUpdateMounted) return
  window.__studyHubUpdateMounted = true

  /* 允许用 window.STUDY_HUB_MANIFEST 覆盖（调试旧版本时很有用）。 */
  const DEFAULT_MANIFEST = 'https://yuetongdai0-glitch.github.io/study-hub-releases/app-version.json'
  const POLL_INTERVAL = 5 * 60 * 1000
  const MIN_RECHECK = 2 * 60 * 1000

  const scriptUrl = document.currentScript && document.currentScript.src
  const siteBase = scriptUrl ? new URL('../', scriptUrl) : new URL('./', location.href)
  const versionUrl = new URL('version.json', siteBase)
  const buildMeta = document.querySelector('meta[name="study-hub-build"]')
  const currentBuild = buildMeta ? buildMeta.content : ''
  const capacitor = window.Capacitor
  const isNative = Boolean(capacitor && typeof capacitor.isNativePlatform === 'function' && capacitor.isNativePlatform())
  const updater = capacitor && capacitor.Plugins ? capacitor.Plugins.StudyHubUpdater : null

  const state = {
    pendingBuild: '',
    lastCheck: 0,
    busy: false,
    native: { phase: 'idle', progress: 0, version: '', error: '' }
  }

  let refs = null

  /**
   * 创建元素并挂类名。
   * @param {string} tag 标签名。
   * @param {string} className 类名。
   * @param {string} [text] 文本。
   * @returns {HTMLElement} 创建结果。
   */
  function el(tag, className, text) {
    const node = document.createElement(tag)
    node.className = className
    if (text) node.textContent = text
    return node
  }

  const ICON_REFRESH =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.34-5.66"/><path d="M20 4v5h-5"/></svg>'

  /**
   * 注入最小样式，避免为了一个按钮让 14 个页面各自改 CSS。
   * @returns {void}
   */
  function mountStyles() {
    if (document.getElementById('sh-update-style')) return
    const style = document.createElement('style')
    style.id = 'sh-update-style'
    style.textContent = `
.sh-update{position:fixed;left:14px;bottom:14px;z-index:2147483000;display:flex;flex-direction:column;align-items:flex-start;gap:8px;font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif}
.sh-update-btn{width:38px;height:38px;padding:0;display:grid;place-items:center;border:1px solid rgba(15,23,42,.12);border-radius:50%;background:rgba(255,255,255,.92);color:#3b4048;box-shadow:0 6px 18px rgba(15,23,42,.14);cursor:pointer;opacity:.62;transition:opacity .18s ease,transform .18s ease}
.sh-update-btn:hover,.sh-update-btn:focus-visible{opacity:1;outline:3px solid rgba(37,99,235,.28);outline-offset:2px}
.sh-update-btn svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.sh-update[data-busy="true"] .sh-update-btn svg{animation:sh-spin 1s linear infinite}
@keyframes sh-spin{to{transform:rotate(360deg)}}
.sh-update[data-fresh="true"] .sh-update-btn{opacity:1;border-color:rgba(37,99,235,.5);color:#1d4ed8}
.sh-update-pill{max-width:min(300px,calc(100vw - 88px));padding:9px 13px;border:1px solid rgba(37,99,235,.22);border-radius:999px;background:#1d4ed8;color:#fff;font-size:13px;line-height:1.45;box-shadow:0 10px 26px rgba(29,78,216,.28);cursor:pointer;display:none}
.sh-update-pill[data-show="true"]{display:block}
.sh-update-pill[data-tone="muted"]{background:#3b4048;border-color:rgba(15,23,42,.2);box-shadow:0 8px 20px rgba(15,23,42,.2);cursor:default}
@media(max-width:560px){.sh-update{left:10px;bottom:10px}.sh-update-btn{width:34px;height:34px}}
@media print{.sh-update{display:none}}`
    document.head.append(style)
  }

  /**
   * 构建浮动按钮与提示条。
   * @returns {{root: HTMLElement, button: HTMLElement, pill: HTMLElement}} 组件引用。
   */
  function mountUi() {
    mountStyles()
    const root = el('div', 'sh-update')
    root.dataset.busy = 'false'
    root.dataset.fresh = 'false'

    const button = el('button', 'sh-update-btn')
    button.type = 'button'
    button.innerHTML = ICON_REFRESH
    button.setAttribute('aria-label', isNative ? '检查应用更新' : '刷新到最新内容')
    button.title = `${isNative ? '检查应用更新' : '刷新到最新内容'}（长按可清理缓存）`

    const pill = el('div', 'sh-update-pill')
    pill.setAttribute('role', 'status')
    pill.setAttribute('aria-live', 'polite')

    root.append(pill, button)
    document.body.append(root)
    return { root, button, pill }
  }

  /**
   * 显示提示条。
   * @param {string} message 文案。
   * @param {'action'|'muted'} tone action 表示可点击执行更新。
   * @returns {void}
   */
  function showPill(message, tone = 'action') {
    if (!refs) return
    refs.pill.textContent = message
    refs.pill.dataset.tone = tone
    refs.pill.dataset.show = 'true'
  }

  /**
   * 收起提示条。
   * @returns {void}
   */
  function hidePill() {
    if (!refs) return
    refs.pill.dataset.show = 'false'
  }

  /**
   * 短暂提示后自动收起。
   * @param {string} message 文案。
   * @param {number} [duration] 毫秒。
   * @returns {void}
   */
  function toast(message, duration = 2200) {
    showPill(message, 'muted')
    window.setTimeout(() => {
      if (state.pendingBuild && !state.busy) showPill('有新内容 · 点此立即更新')
      else hidePill()
    }, duration)
  }

  /**
   * 清掉 Service Worker 与全部缓存后重新加载，用于「怎么刷都是旧页面」的兜底。
   * @returns {Promise<void>} 完成后跳转。
   */
  async function clearAndReload() {
    try {
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations()
        await Promise.all(registrations.map((registration) => registration.unregister()))
      }
      if (window.caches) {
        const keys = await window.caches.keys()
        await Promise.all(keys.map((key) => window.caches.delete(key)))
      }
    } catch (error) {
      console.warn('[study-hub] 清理缓存失败，直接重载', error)
    }
    hardReload()
  }

  /**
   * 带时间戳重新加载：绕开浏览器与中间层对 HTML 的任何残留缓存。
   * @returns {void}
   */
  function hardReload() {
    const url = new URL(location.href)
    url.searchParams.set('_r', String(Date.now()))
    location.replace(url.toString())
  }

  /**
   * 普通刷新：先让浏览器检查 worker 是否有新版本，再重载页面（HTML 本身不缓存）。
   * @returns {Promise<void>} 完成后重载。
   */
  async function softReload() {
    state.busy = true
    if (refs) refs.root.dataset.busy = 'true'
    try {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration()
        if (registration) {
          await registration.update().catch(() => {})
          if (registration.waiting) {
            /* 等新 worker 接管后再重载，否则可能读到旧缓存桶。 */
            navigator.serviceWorker.addEventListener('controllerchange', () => location.reload(), { once: true })
            registration.waiting.postMessage({ type: 'STUDY_HUB_SKIP_WAITING' })
            return
          }
        }
      }
    } catch {
      /* 换成硬重载兜底。 */
    }
    location.reload()
  }

  /**
   * 应用可用的新构建。
   * @returns {Promise<void>} 完成后跳转。
   */
  async function applyUpdate() {
    if (state.busy) return
    state.busy = true
    if (refs) refs.root.dataset.busy = 'true'
    showPill('正在更新…', 'muted')
    await clearAndReload()
  }

  /**
   * 拉取构建清单，判断是否有更新的站点版本。
   * @param {boolean} [silent] 静默检查（不打扰用户）。
   * @returns {Promise<boolean>} 是否存在新构建。
   */
  async function checkWebVersion(silent = true) {
    if (isNative) return false
    try {
      const response = await fetch(`${versionUrl.href}?_=${Date.now()}`, { cache: 'no-store' })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const latest = await response.json()
      state.lastCheck = Date.now()
      const changed = Boolean(latest.buildId) && Boolean(currentBuild) && latest.buildId !== currentBuild
      state.pendingBuild = changed ? latest.buildId : ''
      if (refs) refs.root.dataset.fresh = String(changed)
      if (changed) showPill(`有新内容 · 立即更新到 ${latest.version ?? latest.buildId}`, 'action')
      else if (!silent) toast('已是最新版本')
      return changed
    } catch (error) {
      if (!silent) toast('检查更新失败，请检查网络')
      console.warn('[study-hub] 版本检查失败', error)
      return false
    }
  }

  /**
   * 原生壳内检查应用版本（走安卓插件读远端清单）。
   * @returns {Promise<void>} 完成后更新 UI。
   */
  async function checkNative() {
    if (!updater) {
      toast('当前容器的更新能力不可用')
      return
    }
    state.busy = true
    if (refs) refs.root.dataset.busy = 'true'
    showPill('正在检查更新…', 'muted')
    try {
      const manifestUrl = window.STUDY_HUB_MANIFEST || DEFAULT_MANIFEST
      const result = await updater.check({ manifestUrl })
      state.native = { phase: result.state || 'idle', progress: 0, version: result.versionName || '', error: '' }
      if (result.state === 'available') {
        state.pendingBuild = String(result.versionCode || 'new')
        showPill(`发现新版本 ${result.versionName} · 点此下载`, 'action')
      } else if (result.state === 'current') {
        toast(`已是最新版本 ${result.installedVersionName || ''}`.trim())
      } else {
        toast(result.message || '检查完成')
      }
    } catch (error) {
      toast(`检查更新失败：${(error && error.message) || '未知错误'}`)
    } finally {
      state.busy = false
      if (refs) refs.root.dataset.busy = 'false'
    }
  }

  /**
   * 原生壳内下载并安装新版本，下载进度回填到提示条。
   * @returns {Promise<void>} 完成后调起系统安装器。
   */
  async function downloadNative() {
    if (!updater) return
    state.busy = true
    if (refs) refs.root.dataset.busy = 'true'
    showPill('正在下载安装包… 0%', 'muted')
    try {
      await updater.download()
      /* 插件把下载放到后台线程，这里以轮询方式展示进度。 */
      const timer = window.setInterval(async () => {
        try {
          const status = await updater.status()
          if (status.state === 'downloading') {
            showPill(`正在下载安装包… ${status.progress || 0}%`, 'muted')
          } else if (status.state === 'ready') {
            window.clearInterval(timer)
            showPill('下载完成，正在调起安装…', 'muted')
            await updater.install()
            state.busy = false
            if (refs) refs.root.dataset.busy = 'false'
            hidePill()
          } else if (status.state === 'error') {
            window.clearInterval(timer)
            state.busy = false
            if (refs) refs.root.dataset.busy = 'false'
            showPill(`更新失败：${status.error || '下载中断'}`, 'muted')
          }
        } catch {
          window.clearInterval(timer)
          state.busy = false
          if (refs) refs.root.dataset.busy = 'false'
        }
      }, 600)
    } catch (error) {
      state.busy = false
      if (refs) refs.root.dataset.busy = 'false'
      showPill(`更新失败：${(error && error.message) || '未知错误'}`, 'muted')
    }
  }

  /**
   * 点击主按钮：按环境分流到「应用更新」或「网页刷新」。
   * @returns {void}
   */
  function onPrimary() {
    if (state.busy) return
    if (isNative) {
      if (state.native.phase === 'available') {
        downloadNative()
        return
      }
      checkNative()
      return
    }
    if (state.pendingBuild) {
      applyUpdate()
      return
    }
    softReload()
  }

  /**
   * 注册 worker（仅 http/https；原生容器与 file:// 直接跳过）。
   * @returns {void}
   */
  function registerWorker() {
    if (!('serviceWorker' in navigator)) return
    if (!/^https?:$/.test(location.protocol)) return
    navigator.serviceWorker
      .register(new URL('sw.js', siteBase).href, { scope: siteBase.pathname, updateViaCache: 'none' })
      .then((registration) => {
        /* 页面停留期间也可能发布新构建，切回前台时再探一次。 */
        registration.addEventListener('updatefound', () => {
          const worker = registration.installing
          if (!worker) return
          worker.addEventListener('statechange', () => {
            if (worker.state === 'installed' && navigator.serviceWorker.controller) {
              checkWebVersion(true)
            }
          })
        })
      })
      .catch((error) => console.warn('[study-hub] Service Worker 注册失败', error))

    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'STUDY_HUB_CLEARED') hardReload()
    })
  }

  /**
   * 去掉刷新时留下的 _r 参数，保持地址栏干净。
   * @returns {void}
   */
  function cleanReloadParam() {
    const url = new URL(location.href)
    if (!url.searchParams.has('_r')) return
    url.searchParams.delete('_r')
    history.replaceState(null, '', url.pathname + (url.search || '') + url.hash)
  }

  /**
   * 绑定按钮与提示条交互，含长按清理缓存。
   * @returns {void}
   */
  function bindUi() {
    let timer = 0
    let longPressed = false

    refs.button.addEventListener('pointerdown', () => {
      longPressed = false
      timer = window.setTimeout(() => {
        longPressed = true
        if (isNative) return
        showPill('正在清理缓存…', 'muted')
        clearAndReload()
      }, 700)
    })
    const cancel = () => window.clearTimeout(timer)
    refs.button.addEventListener('pointerup', cancel)
    refs.button.addEventListener('pointerleave', cancel)
    refs.button.addEventListener('pointercancel', cancel)
    refs.button.addEventListener('click', (event) => {
      if (longPressed) {
        event.preventDefault()
        longPressed = false
        return
      }
      onPrimary()
    })
    refs.button.addEventListener('contextmenu', (event) => {
      event.preventDefault()
      if (!isNative) clearAndReload()
    })

    refs.pill.addEventListener('click', () => {
      if (refs.pill.dataset.tone === 'muted') return
      if (isNative) downloadNative()
      else applyUpdate()
    })
  }

  /**
   * 启动：挂 UI、注册 worker、首次与定时检查版本。
   * @returns {void}
   */
  function boot() {
    cleanReloadParam()
    refs = mountUi()
    bindUi()
    registerWorker()

    if (isNative) {
      /* 原生壳内内容随包发布，不需要轮询 web 版本；启动时静默看一眼应用版本。 */
      updater &&
        updater
          .check({ manifestUrl: window.STUDY_HUB_MANIFEST || DEFAULT_MANIFEST })
          .then((result) => {
            if (result.state === 'available') {
              state.native = { phase: 'available', progress: 0, version: result.versionName || '', error: '' }
              showPill(`发现新版本 ${result.versionName} · 点此下载`, 'action')
            }
          })
          .catch(() => {})
      return
    }

    window.setTimeout(() => checkWebVersion(true), 1500)
    window.setInterval(() => checkWebVersion(true), POLL_INTERVAL)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && Date.now() - state.lastCheck > MIN_RECHECK) {
        checkWebVersion(true)
      }
    })
    window.addEventListener('online', () => checkWebVersion(true))
  }

  window.StudyHubUpdate = {
    check: () => (isNative ? checkNative() : checkWebVersion(false)),
    apply: () => (isNative ? downloadNative() : applyUpdate()),
    clearCache: () => clearAndReload(),
    get build() {
      return currentBuild
    },
    get pending() {
      return state.pendingBuild
    }
  }

  if (document.body) boot()
  else document.addEventListener('DOMContentLoaded', boot, { once: true })
})()
