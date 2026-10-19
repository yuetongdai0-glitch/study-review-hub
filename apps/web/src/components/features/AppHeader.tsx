import { Button } from 'antd'
import { Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from '@/components/base/ThemeToggle'
import SiteUpdateButton from '@/components/features/SiteUpdateButton'
import { R_HOME } from '@/router/routePaths'
import { findModuleByPath } from '@/router/routeRegistry'
import { useAppStore } from '@/store/appStore'

/**
 * 应用顶栏。
 *
 * @returns 品牌、当前模块面包屑与右侧操作区。
 */
export default function AppHeader() {
  const location = useLocation()
  const current = findModuleByPath(location.pathname)
  const setSidebarOpen = useAppStore((state) => state.setSidebarOpen)

  return (
    <header className="app-header">
      <Button
        type="text"
        size="small"
        className="lg:hidden"
        aria-label="打开模块目录"
        icon={<Menu size={17} />}
        onClick={() => setSidebarOpen(true)}
      />

      <Link to={R_HOME} className="app-header-brand" aria-label="返回总览">
        <span className="app-header-mark" aria-hidden="true">
          复
        </span>
        <span className="hidden xs:inline">备考复习</span>
      </Link>

      {current ? (
        <div className="app-header-crumbs">
          <span aria-hidden="true">/</span>
          <span className="max-w-[16rem] truncate font-medium text-ink">{current.title}</span>
        </div>
      ) : null}

      <div className="app-header-actions">
        <SiteUpdateButton />
        <ThemeToggle />
      </div>
    </header>
  )
}
