import { App as AntdApp, ConfigProvider, theme as antdTheme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { useEffect, useLayoutEffect, useMemo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from '@/router/AppRouter'
import { useAppStore } from '@/store/appStore'
import { applyThemeToDocument } from '@/theme/runtime'
import { themeColorTokens } from '@/theme/tokens'

/** 部署子路径；GitHub Pages 下必须与 vite base 一致。 */
const BASENAME = import.meta.env.BASE_URL.replace(/\/$/, '')

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
        // 阅读为主，按钮与卡片不需要 antd 默认那么大的圆角。
        Button: { borderRadius: 8 },
        Card: { borderRadiusLG: 14 },
        Modal: { contentBg: `rgb(${tokens.surface})`, headerBg: `rgb(${tokens.surface})` },
      },
    }),
    [theme, tokens],
  )

  return (
    <ConfigProvider locale={zhCN} theme={themeConfig}>
      <AntdApp>
        <BrowserRouter basename={BASENAME}>
          <AppRouter />
        </BrowserRouter>
      </AntdApp>
    </ConfigProvider>
  )
}
