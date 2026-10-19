import { Outlet, useLocation } from 'react-router-dom'
import AppSidebar from '@/components/features/AppSidebar'
import FloatingNav from '@/components/features/FloatingNav'
import ScrollToTop from '@/components/features/ScrollToTop'
import SettingsDialog from '@/components/features/SettingsDialog'
import { findModuleByPath } from '@/router/routeRegistry'
import { useAppStore } from '@/store/appStore'

/**
 * 应用壳。
 *
 * @returns 深色侧栏 + 内容区 + 右下角科目切换 + 设置弹层。
 * @remarks
 * - 阅读页：`<main class="shell-main">` + 侧栏让位（旧版骨架）。
 * - 首页 / 工具页：**不用 main 元素、不让位**，因为首页自己带 `<main>`，
 *   嵌套 main 既不合规范，也会让首页被挤出 268px。
 */
export default function AppLayout() {
  const location = useLocation()
  const current = findModuleByPath(location.pathname)
  const menuOpen = useAppStore((state) => state.sidebarOpen)
  const isHome = location.pathname === '/' || location.pathname === ''
  const isTool = Boolean(current?.tool)
  const showSidebar = !isHome && !isTool

  return (
    <div className="app-shell" data-menu={menuOpen ? 'open' : 'closed'} data-shell={showSidebar ? 'true' : 'false'}>
      <ScrollToTop />
      {showSidebar ? <AppSidebar /> : null}

      {showSidebar ? (
        <main className="shell-main">
          <Outlet />
        </main>
      ) : (
        <div className="shell-plain">
          <Outlet />
        </div>
      )}

      <FloatingNav />
      <SettingsDialog />
    </div>
  )
}
