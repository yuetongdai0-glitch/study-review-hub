import { App as AntdApp, ConfigProvider, theme as antdTheme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { useEffect, useLayoutEffect, useMemo } from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import AppRouter from '@/router/AppRouter'
import { useAppStore } from '@/store/appStore'
import { applyThemeToDocument } from '@/theme/runtime'
import { themeColorTokens } from '@/theme/tokens'

/**
 * 部署子路径。
 *
 * @remarks 网页挂在 GitHub Pages 的 `/study-review-hub/` 下；
 * App 内 base 为 `/`，且必须用 HashRouter（file:// 下没有服务端路由回退）。
 */
const BASE_URL = import.meta.env.BASE_URL
const BASENAME = BASE_URL.replace(/\/$/, '')
/** 宿主在构建期确定（vite --mode mobile），不依赖运行时探测。 */
const NATIVE = __STUDY_HUB_MOBILE__

/**
 * 应用根组件：主题、Ant Design 令牌、路由容器。
 *
 * @returns 已接入 Provider 的应用根节点。
 */
export default function App() {
  const theme = useAppStore((state) => state.theme)

  useLayoutEffect(() => {
    // 在首帧前落 DOM，避免刷新时先亮后暗。
    applyThemeToDocument(theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = 'zh-CN'
  }, [])

  const tokens = themeColorTokens[theme]

  const themeConfig = useMemo(
    () => ({
      algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
      token: {
        // 与旧站保持同一档圆角，避免弹层看起来「太现代」。
        borderRadius: 8,
        colorPrimary: `rgb(${tokens.brand})`,
        colorText: `rgb(${tokens.ink})`,
        colorTextSecondary: `rgb(${tokens['ink-2']})`,
        colorTextTertiary: `rgb(${tokens['ink-3']})`,
        colorBgBase: `rgb(${tokens.page})`,
        colorBgContainer: `rgb(${tokens.surface})`,
        colorBgElevated: `rgb(${tokens.raised})`,
        colorBorder: `rgb(${tokens.line})`,
        colorBorderSecondary: `rgb(${tokens['line-subtle']})`,
        colorSuccess: `rgb(${tokens.success})`,
        colorWarning: `rgb(${tokens.warning})`,
        colorError: `rgb(${tokens.danger})`,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", ui-sans-serif, system-ui, sans-serif',
        fontSize: 14,
      },
      components: {
        Button: { borderRadius: 8 },
        Card: { borderRadiusLG: 14 },
        Modal: { contentBg: `rgb(${tokens.surface})`, headerBg: `rgb(${tokens.surface})` },
      },
    }),
    [theme, tokens],
  )

  const router = NATIVE ? (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  ) : (
    <BrowserRouter basename={BASENAME}>
      <AppRouter />
    </BrowserRouter>
  )

  return (
    <ConfigProvider locale={zhCN} theme={themeConfig}>
      <AntdApp>{router}</AntdApp>
    </ConfigProvider>
  )
}
