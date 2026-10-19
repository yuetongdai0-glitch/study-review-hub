/**
 * 设计令牌：颜色、圆角、字号、科目强调色。
 *
 * 单一事实来源：这里的值会同时写入 CSS 变量（供 Tailwind 类名消费）和
 * Ant Design 的 ConfigProvider token（供弹层、按钮、抽屉消费），
 * 避免出现两套白色和两种圆角。
 */

/** 单个主题的语义色，值为 `R G B` 三元组，便于 Tailwind 做透明度修饰。 */
export type ThemeColorTokens = {
  page: string
  sunken: string
  surface: string
  raised: string
  ink: string
  'ink-2': string
  'ink-3': string
  'ink-inverse': string
  line: string
  'line-subtle': string
  'line-strong': string
  brand: string
  'brand-soft': string
  danger: string
  success: string
  warning: string
}

/** 浅色主题（站点当前唯一主题，深色留出扩展位）。 */
export const themeColorTokens: Record<'light' | 'dark', ThemeColorTokens> = {
  light: {
    page: '246 247 249',
    sunken: '240 242 245',
    surface: '255 255 255',
    raised: '255 255 255',
    ink: '23 25 29',
    'ink-2': '59 64 72',
    'ink-3': '108 113 121',
    'ink-inverse': '255 255 255',
    line: '223 226 231',
    'line-subtle': '234 236 240',
    'line-strong': '201 206 214',
    brand: '37 99 235',
    'brand-soft': '238 242 255',
    danger: '179 58 50',
    success: '47 133 90',
    warning: '200 121 45',
  },
  dark: {
    page: '16 18 22',
    sunken: '11 13 16',
    surface: '24 27 32',
    raised: '31 35 41',
    ink: '240 242 245',
    'ink-2': '200 205 213',
    'ink-3': '148 155 165',
    'ink-inverse': '16 18 22',
    line: '48 53 61',
    'line-subtle': '38 42 49',
    'line-strong': '66 72 82',
    brand: '99 132 255',
    'brand-soft': '32 38 56',
    danger: '226 106 98',
    success: '92 168 128',
    warning: '214 154 90',
  },
}

/** 科目强调色：每个模块一套，用于 hero 渐变、侧栏高亮与编号底色。 */
export type AccentName = 'blue' | 'violet' | 'cornflower' | 'ochre' | 'brick' | 'teal' | 'grass'

export const accentTokens: Record<AccentName, { color: string; soft: string; ink: string }> = {
  blue: { color: '#1f5fd6', soft: '#eef2ff', ink: '#1e40af' },
  violet: { color: '#5b4bd6', soft: '#f1efff', ink: '#4338ca' },
  cornflower: { color: '#4f7cff', soft: '#eff4ff', ink: '#1d4ed8' },
  ochre: { color: '#b45309', soft: '#fff7ec', ink: '#92400e' },
  brick: { color: '#c0392b', soft: '#fdf0ee', ink: '#991b1b' },
  teal: { color: '#0f766e', soft: '#ecfdf5', ink: '#115e59' },
  grass: { color: '#2f855a', soft: '#effaf3', ink: '#276749' },
}

/** 主题色名（供设置项与 Ant Design 主色映射）。 */
export type ThemeName = keyof typeof themeColorTokens

/**
 * 主题偏好（设置项可选项）。
 *
 * @remarks `system` 跟随系统深色模式，实际渲染时再解析成 {@link ThemeName}。
 */
export type ThemePreference = ThemeName | 'system'

/**
 * 把 `R G B` 三元组写成 CSS 变量声明块。
 *
 * @param tokens 语义色表。
 * @returns 形如 `--c-page: 246 247 249;` 的多行字符串。
 */
export function toCssVariables(tokens: ThemeColorTokens): string {
  return Object.entries(tokens)
    .map(([name, value]) => `--c-${name}: ${value};`)
    .join('\n')
}
