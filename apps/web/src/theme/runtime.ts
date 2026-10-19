import { accentTokens, themeColorTokens, type AccentName, type ThemeName } from './tokens'

/** 科目强调色的 CSS 变量前缀。 */
const ACCENT_PROPERTY = '--accent'
const ACCENT_SOFT_PROPERTY = '--accent-soft'
const ACCENT_INK_PROPERTY = '--accent-ink'

/**
 * 把主题语义色写入根元素 CSS 变量。
 *
 * @param theme 主题名。
 * @returns 无返回值。
 * @remarks 只在 App 根 effect 里调用一次，页面组件不允许各写一套变量。
 */
export function applyThemeToDocument(theme: ThemeName): void {
  const tokens = themeColorTokens[theme]
  const root = document.documentElement
  for (const [name, value] of Object.entries(tokens)) root.style.setProperty(`--c-${name}`, value)
  root.classList.toggle('dark', theme === 'dark')
  root.dataset.theme = theme
}

/**
 * 把子树的强调色写成 CSS 变量。
 *
 * @param element 目标元素，为 null 时无操作。
 * @param accent 强调色名。
 * @returns 无返回值。
 */
export function applyAccentToElement(element: HTMLElement | null, accent: AccentName): void {
  if (!element) return
  const tokens = accentTokens[accent]
  element.style.setProperty(ACCENT_PROPERTY, tokens.color)
  element.style.setProperty(ACCENT_SOFT_PROPERTY, tokens.soft)
  element.style.setProperty(ACCENT_INK_PROPERTY, tokens.ink)
}

/**
 * 读取本地缓存的主题名，非法值回退浅色。
 *
 * @param storageKey 缓存键。
 * @returns 主题名。
 */
export function getInitialTheme(storageKey: string): ThemeName {
  try {
    const stored = window.localStorage.getItem(storageKey)
    return stored === 'dark' ? 'dark' : 'light'
  } catch {
    // 隐私模式禁用存储时按浅色渲染，不影响阅读。
    return 'light'
  }
}

/**
 * 持久化主题名。
 *
 * @param storageKey 缓存键。
 * @param theme 主题名。
 * @returns 无返回值。
 */
export function persistTheme(storageKey: string, theme: ThemeName): void {
  try {
    window.localStorage.setItem(storageKey, theme)
  } catch {
    // 写入失败只影响下次启动的默认值，不阻断当前交互。
  }
}
