/**
 * 站点刷新与应用更新。
 *
 * 三个层级，用途不同：
 * 1. **重新加载页面**：只重取 HTML 与静态资源，保留主题、草稿等本地状态。
 * 2. **重建整个应用**：清空 Service Worker、Cache Storage 与 WebView 缓存后重载，
 *    内容一定是服务器上最新的。网页更新常被缓存挡住，这一项就是解法。
 * 3. **更新应用本体**（仅原生壳）：改的是原生代码才需要，走清单 → 下载 → 安装。
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import { checkAppUpdate, downloadAndInstall, isNativeApp, reloadWeb } from '@/utils/nativeUpdater'

/** 轮询间隔：五分钟。 */
const POLL_INTERVAL = 5 * 60 * 1000

/** 页面重新可见时的最短重查间隔。 */
const MIN_RECHECK = 2 * 60 * 1000

/** 站点根地址（重建时回到首页，避免停留在已删除的旧路径上）。 */
const HOME_URL = import.meta.env.BASE_URL

/** 当前构建号，构建时由 vite 插件注入 meta。 */
export const currentBuild: string =
  document.querySelector<HTMLMetaElement>('meta[name="study-hub-build"]')?.content ?? ''

/** 版本清单地址（仅网页用）。 */
const VERSION_URL = `${import.meta.env.BASE_URL}version.json`

export type UpdateState = {
  /** 当前构建号。 */
  currentBuild: string
  /** 原生：是否发现新版本。 */
  nativeAvailable: boolean
  /** 原生：新版本号。 */
  nativeVersion: string
  /** 原生：下载进度。 */
  progress: number
  /** 网页：是否有新构建。 */
  pendingBuild: string
  /** 是否正在处理。 */
  busy: boolean
  /** 重新加载页面（保留本地状态）。 */
  reloadPage: () => Promise<void>
  /** 清空全部缓存后重建应用。 */
  rebuildApp: () => Promise<void>
  /** 检查并安装新的应用版本（仅原生壳）。 */
  upgrade: () => Promise<void>
}

/**
 * 清空 Service Worker 与全部缓存。
 *
 * @returns 完成后无返回。
 */
async function purge(): Promise<void> {
  try {
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations()
      await Promise.all(registrations.map((item) => item.unregister()))
    }
    if (window.caches) {
      const keys = await window.caches.keys()
      await Promise.all(keys.map((key) => window.caches.delete(key)))
    }
  } catch (error) {
    // 清理失败也要继续重载，否则用户会卡在旧页面上。
    console.warn('[study-hub] 清理缓存失败，直接重载', error)
  }
}

/**
 * 带时间戳重载指定地址，绕开浏览器与 CDN 对 HTML 的任何残留。
 *
 * @param target 目标地址。
 * @returns 无返回。
 */
function hardReload(target = window.location.href): void {
  const url = new URL(target, window.location.origin)
  url.searchParams.set('_r', String(Date.now()))
  window.location.replace(url.toString())
}

/**
 * 刷新与更新中枢。
 *
 * @returns 状态与三个动作。
 */
export function useUpdate(): UpdateState {
  const native = isNativeApp() || __STUDY_HUB_MOBILE__
  const [nativeAvailable, setNativeAvailable] = useState(false)
  const [nativeVersion, setNativeVersion] = useState('')
  const [progress, setProgress] = useState(0)
  const [pendingBuild, setPendingBuild] = useState('')
  const [busy, setBusy] = useState(false)
  const lastCheck = useRef(0)

  /**
   * 网页：查一次版本清单，用于提示「有新内容」。
   *
   * @returns 是否有新构建。
   */
  const checkWeb = useCallback(async () => {
    if (!currentBuild) return false
    try {
      const response = await fetch(`${VERSION_URL}?_=${Date.now()}`, { cache: 'no-store' })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const latest: { buildId?: string } = await response.json()
      lastCheck.current = Date.now()
      const changed = Boolean(latest.buildId) && latest.buildId !== currentBuild
      setPendingBuild(changed ? (latest.buildId ?? '') : '')
      return changed
    } catch {
      return false
    }
  }, [])

  /**
   * 原生：查一次更新清单。
   *
   * @returns 是否发现新版本。
   */
  const checkNative = useCallback(async () => {
    try {
      const result = await checkAppUpdate()
      if (!result) return false
      const available = result.state === 'available'
      setNativeAvailable(available)
      setNativeVersion(available ? (result.versionName ?? '') : '')
      return available
    } catch (error) {
      console.warn('[study-hub] 应用更新检查失败', error)
      return false
    }
  }, [])

  /**
   * 重新加载当前页面。
   *
   * @returns 完成后无返回。
   * @remarks 保留 localStorage（主题、折叠、草稿都在里面），只重取网络资源。
   */
  const reloadPage = useCallback(async () => {
    if (busy) return
    setBusy(true)
    try {
      // 原生壳先清 WebView 的 HTTP 缓存；浏览器的 no-store 管不到它。
      if (await reloadWeb()) return
      hardReload()
    } catch (error) {
      console.warn('[study-hub] 重新加载失败，直接重载', error)
      hardReload()
    } finally {
      setBusy(false)
    }
  }, [busy])

  /**
   * 清空全部缓存并重建应用。
   *
   * @returns 完成后无返回。
   * @remarks 比「重新加载页面」更彻底：连 SW 与 Cache Storage 一起清掉，
   * 并回到首页，避免停在旧路径。用来解决「更新了但看到的还是旧页面」。
   */
  const rebuildApp = useCallback(async () => {
    if (busy) return
    setBusy(true)
    try {
      await purge()
      // 只清网络缓存并重取 HTML，localStorage 原样保留（草稿不会丢）。
      if (native && (await reloadWeb())) return
      hardReload(HOME_URL)
    } catch (error) {
      console.warn('[study-hub] 重建失败，直接重载', error)
      hardReload(HOME_URL)
    } finally {
      setBusy(false)
    }
  }, [busy, native])

  /**
   * 检查并安装新的应用版本（仅原生壳有意义）。
   *
   * @returns 完成后无返回。
   */
  const upgrade = useCallback(async () => {
    if (busy || !native) return
    setBusy(true)
    try {
      const available = nativeAvailable || (await checkNative())
      if (!available) return
      setProgress(0)
      await downloadAndInstall(setProgress)
    } catch (error) {
      console.warn('[study-hub] 安装更新失败', error)
    } finally {
      setBusy(false)
    }
  }, [busy, native, nativeAvailable, checkNative])

  /* 网页轮询；原生只在启动时静默查一次，不打扰阅读。 */
  useEffect(() => {
    if (native) {
      const timer = window.setTimeout(() => void checkNative(), 1200)
      return () => window.clearTimeout(timer)
    }
    const timer = window.setTimeout(() => void checkWeb(), 1500)
    const interval = window.setInterval(() => void checkWeb(), POLL_INTERVAL)
    const onVisible = () => {
      if (document.visibilityState === 'visible' && Date.now() - lastCheck.current > MIN_RECHECK) {
        void checkWeb()
      }
    }
    const onOnline = () => void checkWeb()
    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('online', onOnline)
    return () => {
      window.clearTimeout(timer)
      window.clearInterval(interval)
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('online', onOnline)
    }
  }, [native, checkWeb, checkNative])

  return {
    currentBuild,
    nativeAvailable,
    nativeVersion,
    progress,
    pendingBuild,
    busy,
    reloadPage,
    rebuildApp,
    upgrade,
  }
}
