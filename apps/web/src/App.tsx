import { App as AntdApp, ConfigProvider, theme as antdTheme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { useEffect, useLayoutEffect, useMemo } from 'react'
import { HashRouter } from 'react-router-dom'
import AppRouter from '@/router/AppRouter'
import LockScreen from '@/components/features/LockScreen'
import { useResolvedTheme } from '@/hooks/useResolvedTheme'
import { useAutoLock } from '@/hooks/useAutoLock'
import { useLockStore } from '@/store/lockStore'
import { applyThemeToDocument } from '@/theme/runtime'
import { themeColorTokens } from '@/theme/tokens'

/**
 * 应用根组件：主题、Ant Design 令牌、路由容器。
 *
 * @returns 已接入 Provider 的应用根节点。
 */
export default function App() {
  // 偏好可能是「跟随系统」，这里拿到实际渲染的明暗。
  const theme = useResolvedTheme()

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

  /*
   * 统一用 **HashRouter**（网页 + App 一致）。
   *
   * 原因：GitHub Pages 会把 `/tools/scratchpad` 301 跳到带斜杠的地址，
   * 而 Service Worker 用「跟随重定向后的响应」回复页面导航时，
   * 浏览器（导航请求的 redirect 模式是 manual）会直接判 ERR_FAILED —— 表现为
   * 「第一次能进，点刷新就崩」。改成 hash 后服务端永远只看到 `/`，
   * 从根上不存在这类路径解析问题，深链接也可以随便刷新。
   */
  const router = (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  )

  /*
   * 启动密码：设了密码就整站先过门禁，除了这一个空白页什么都不渲染。
   * 解锁态只在内存里，刷新即失效（见 store/lockStore.ts）。
   */
  const locked = useLockStore((state) => state.required && !state.unlocked)

  /*
   * 空闲自动锁屏：设了密码后，长时间不动就回到锁定页。
   *
   * 挂在 App 顶层而不是各个页面里：任何页面（材料阅读、草稿台、长文）
   * 都应该有这道门禁，而且它只按「用户有没有在操作」判断，与路由无关。
   */
  useAutoLock()

  return (
    <ConfigProvider locale={zhCN} theme={themeConfig}>
      <AntdApp>{locked ? <LockScreen /> : router}</AntdApp>
    </ConfigProvider>
  )
}
