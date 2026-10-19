/**
 * 站点版本检查。
 *
 * 站点是纯静态托管，HTML 不缓存、资源按构建号缓存。
 * 这里轮询 version.json 发现新构建，交给刷新组件提示用户。
 */
import { useCallback, useEffect, useRef, useState } from 'react'

/** 轮询间隔：五分钟一次，足够及时又不打扰。 */
const POLL_INTERVAL = 5 * 60 * 1000

/** 页面重新可见时的最短重查间隔，避免频繁切页触发请求。 */
const MIN_RECHECK = 2 * 60 * 1000

/** 当前构建号，构建时由 vite 插件注入 index.html 的 meta。 */
export const currentBuild: string =
  document.querySelector<HTMLMetaElement>('meta[name="study-hub-build"]')?.content ?? ''

/** 版本清单地址（相对站点根，跨子路径都正确）。 */
const VERSION_URL = `${import.meta.env.BASE_URL}version.json`

export type SiteVersionState = {
  /** 是否存在比当前更新的构建。 */
  pendingBuild: string
  /** 正在检查或清理。 */
  busy: boolean
  /** 立即检查一次，返回是否有更新。 */
  check: () => Promise<boolean>
  /** 清空全部缓存并强制重载。 */
  clearCache: () => Promise<void>
  /** 普通重载：先更新 worker，再刷新页面。 */
  reload: () => Promise<void>
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
 * 站点版本轮询 hook。
 *
 * @returns 版本状态与操作。
 */
export function useSiteVersion(): SiteVersionState {
  const [pendingBuild, setPendingBuild] = useState('')
  const [busy, setBusy] = useState(false)
  const lastCheck = useRef(0)

  const check = useCallback(async () => {
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
      // 离线或清单一时不稳：静默失败，下一次轮询继续。
      return false
    }
  }, [])

  const clearCache = useCallback(async () => {
    setBusy(true)
    await purge()
    hardReload()
  }, [])

  const reload = useCallback(async () => {
    setBusy(true)
    try {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration()
        if (registration) {
          await registration.update().catch(() => undefined)
          if (registration.waiting) {
            // 等新 worker 接管后再刷新，否则可能读到旧缓存桶。
            navigator.serviceWorker.addEventListener('controllerchange', () => window.location.reload(), {
              once: true,
            })
            registration.waiting.postMessage({ type: 'STUDY_HUB_SKIP_WAITING' })
            return
          }
        }
      }
    } catch {
      // 走普通刷新兜底。
    }
    window.location.reload()
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => void check(), 1500)
    const interval = window.setInterval(() => void check(), POLL_INTERVAL)

    const onVisible = () => {
      if (document.visibilityState === 'visible' && Date.now() - lastCheck.current > MIN_RECHECK) {
        void check()
      }
    }
    const onOnline = () => void check()

    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('online', onOnline)
    return () => {
      window.clearTimeout(timer)
      window.clearInterval(interval)
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('online', onOnline)
    }
  }, [check])

  return { pendingBuild, busy, check, clearCache, reload }
}
