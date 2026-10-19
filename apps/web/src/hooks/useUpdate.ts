/**
 * 站点 / 应用更新。
 *
 * 两条完全不同的路径：
 * - **网页**：HTML 不缓存、资源按构建号缓存，靠轮询 version.json 发现新构建，
 *   再清 Service Worker 缓存重载。
 * - **原生壳**：网页内容随包发布，必须换安装包才能更新。调 Android 原生插件
 *   走「清单 → 下载 APK → 校验 → 系统安装器」，与 codex-pocket 同一套闭环。
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import { checkAppUpdate, downloadAndInstall, isNativeApp, reloadWeb } from '@/utils/nativeUpdater'

/** 轮询间隔：五分钟。 */
const POLL_INTERVAL = 5 * 60 * 1000

/** 页面重新可见时的最短重查间隔。 */
const MIN_RECHECK = 2 * 60 * 1000

/** 当前构建号，构建时由 vite 插件注入 meta。 */
export const currentBuild: string =
  document.querySelector<HTMLMetaElement>('meta[name="study-hub-build"]')?.content ?? ''

/** 版本清单地址（仅网页用）。 */
const VERSION_URL = `${import.meta.env.BASE_URL}version.json`

export type UpdateState = {
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
  /** 状态文案，供按钮直接显示。 */
  label: string
  /** 刷新网页：清缓存后重新拉取最新内容。 */
  run: () => Promise<void>
  /** 检查并安装新的应用版本（仅原生壳，改了原生代码才需要）。 */
  upgrade: () => Promise<void>
  /** 清理缓存并重载（仅网页）。 */
  clearCache: () => Promise<void>
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
 * 带时间戳重载，绕开浏览器与 CDN 对 HTML 的任何残留。
 *
 * @returns 无返回。
 */
function hardReload(): void {
  const url = new URL(window.location.href)
  url.searchParams.set('_r', String(Date.now()))
  window.location.replace(url.toString())
}

/**
 * 更新中枢 hook。
 *
 * @returns 当前状态与动作。
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
   * 网页：查一次版本清单。
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

  const clearCache = useCallback(async () => {
    setBusy(true)
    await purge()
    hardReload()
  }, [])

  /**
   * 刷新网页：真正回到服务器取最新内容。
   *
   * @returns 完成后无返回。
   * @remarks 原生壳加载的是远程网页，所以 App 内点刷新应当**刷新网页**而不是重装 APK。
   * 浏览器的 `no-store` 管不到 WebView 的 HTTP 缓存，必须让原生先清缓存再 loadUrl。
   */
  const run = useCallback(async () => {
    if (busy) return
    setBusy(true)
    try {
      // 先清 SW 与 Cache Storage（网页环境有效），再交给原生清 WebView 缓存。
      await purge()
      if (await reloadWeb()) return
      hardReload()
    } catch (error) {
      console.warn('[study-hub] 刷新失败，直接重载', error)
      hardReload()
    } finally {
      setBusy(false)
    }
  }, [busy])

  /**
   * 检查并安装新的应用版本（仅原生壳有意义）。
   *
   * @returns 完成后无返回。
   * @remarks 与「刷新网页」分开：改内容只需刷新网页，改原生代码才需要装包。
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

  const label = (() => {
    if (busy) return progress > 0 ? `下载中 ${progress}%` : '正在刷新…'
    return pendingBuild ? '有新内容 · 刷新' : '刷新网页'
  })()

  return { nativeAvailable, nativeVersion, progress, pendingBuild, busy, label, run, upgrade, clearCache }
}
