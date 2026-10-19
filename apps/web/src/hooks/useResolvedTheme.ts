import { useEffect, useState } from 'react'
import { useAppStore } from '@/store/appStore'
import { resolveTheme } from '@/theme/runtime'
import type { ThemeName } from '@/theme/tokens'

/**
 * 解析出当前实际渲染的主题。
 *
 * @returns `light` 或 `dark`。
 * @remarks 偏好为「跟随系统」时订阅 `prefers-color-scheme`，系统切换主题立即生效。
 */
export function useResolvedTheme(): ThemeName {
  const themeMode = useAppStore((state) => state.themeMode)
  const [resolved, setResolved] = useState<ThemeName>(() => resolveTheme(themeMode))

  useEffect(() => {
    setResolved(resolveTheme(themeMode))
    if (themeMode !== 'system') return

    let query: MediaQueryList
    try {
      query = window.matchMedia('(prefers-color-scheme: dark)')
    } catch {
      return
    }
    const onChange = () => setResolved(resolveTheme('system'))
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [themeMode])

  return resolved
}
