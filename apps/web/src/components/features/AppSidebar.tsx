import { Drawer } from 'antd'
import { useLocation } from 'react-router-dom'
import NavContent from '@/components/features/NavContent'
import { findModuleByPath } from '@/router/routeRegistry'
import { useAppStore } from '@/store/appStore'
import type { NavSection } from '@/types/content'

/**
 * 侧栏容器：桌面常驻，移动端抽屉。
 *
 * @param props 当前模块的章节锚点。
 * @returns 侧栏节点。
 */
export default function AppSidebar({ sections }: { sections: NavSection[] }) {
  const location = useLocation()
  const current = findModuleByPath(location.pathname)
  const sidebarOpen = useAppStore((state) => state.sidebarOpen)
  const setSidebarOpen = useAppStore((state) => state.setSidebarOpen)

  return (
    <>
      <aside className="app-sidebar hidden lg:block">
        <NavContent current={current} sections={sections} />
      </aside>

      <Drawer
        open={sidebarOpen}
        placement="left"
        width={288}
        onClose={() => setSidebarOpen(false)}
        styles={{ body: { padding: '12px 10px' }, header: { display: 'none' } }}
      >
        <NavContent current={current} sections={sections} onNavigate={() => setSidebarOpen(false)} />
      </Drawer>
    </>
  )
}
