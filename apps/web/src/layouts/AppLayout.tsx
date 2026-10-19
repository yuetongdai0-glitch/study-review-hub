import { Outlet, useLocation } from 'react-router-dom'
import AppHeader from '@/components/features/AppHeader'
import AppSidebar from '@/components/features/AppSidebar'
import { findModuleByPath } from '@/router/routeRegistry'
import { useSectionStore } from '@/store/sectionStore'

/**
 * 应用壳。
 *
 * @returns 顶栏 + 目录 + 内容区。
 * @remarks 工具页是全屏交互页，不挂目录栏，也不给主区留边距。
 */
export default function AppLayout() {
  const location = useLocation()
  const current = findModuleByPath(location.pathname)
  const sections = useSectionStore((state) => state.sections)
  // 首页与工具页都不需要目录栏：首页是卡片总览，工具页是全屏交互。
  const isHome = location.pathname === '/' || location.pathname === ''
  const isTool = Boolean(current?.tool)
  const showSidebar = !isHome && !isTool

  return (
    <div className="app-shell">
      <AppHeader />
      {showSidebar ? <AppSidebar sections={sections} /> : null}
      <main className={showSidebar ? 'app-main' : 'min-h-screen pt-[var(--header-height)]'}>
        <Outlet />
      </main>
    </div>
  )
}
