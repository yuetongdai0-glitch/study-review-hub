/**
 * Tailwind 配置。
 *
 * 颜色全部走 CSS 变量（见 src/theme/tokens.ts），这样 Ant Design 令牌与 Tailwind 类名
 * 共享同一套值——改主题只需要动一处，不会出现「卡片用 Tailwind、弹层用 antd」两种白。
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  darkMode: 'class',
  future: {
    // 触屏 Safari 会把第一次轻触保留为 :hover，只为精细指针生成 hover 规则。
    hoverOnlyWhenSupported: true,
  },
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        page: 'rgb(var(--c-page) / <alpha-value>)',
        sunken: 'rgb(var(--c-sunken) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        raised: 'rgb(var(--c-raised) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        'ink-2': 'rgb(var(--c-ink-2) / <alpha-value>)',
        'ink-3': 'rgb(var(--c-ink-3) / <alpha-value>)',
        'ink-inverse': 'rgb(var(--c-ink-inverse) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        'line-subtle': 'rgb(var(--c-line-subtle) / <alpha-value>)',
        'line-strong': 'rgb(var(--c-line-strong) / <alpha-value>)',
        brand: 'rgb(var(--c-brand) / <alpha-value>)',
        'brand-soft': 'rgb(var(--c-brand-soft) / <alpha-value>)',
        danger: 'rgb(var(--c-danger) / <alpha-value>)',
        success: 'rgb(var(--c-success) / <alpha-value>)',
        warning: 'rgb(var(--c-warning) / <alpha-value>)',
      },
      borderRadius: {
        card: '16px',
        control: '10px',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'PingFang SC',
          'Microsoft YaHei',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        num: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        prose: '78ch',
        content: '1180px',
      },
      boxShadow: {
        card: '0 1px 2px rgb(16 24 40 / 0.04)',
        float: '0 10px 30px rgb(16 24 40 / 0.12)',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0, 1)',
      },
    },
  },
  corePlugins: {
    // 站点需要自己的排版基线，preflight 保留但对正文样式做了覆写。
    preflight: true,
  },
  plugins: [],
}
