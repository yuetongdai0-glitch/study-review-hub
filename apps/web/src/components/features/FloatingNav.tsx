import { LayoutGrid, Settings } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { allModules } from '@/router/routeRegistry'
import { useAppStore } from '@/store/appStore'

/**
 * 右下角模块切换器。
 *
 * @returns 浮动按钮 + 科目面板 + 设置入口。
 * @remarks 复刻旧站 `hub-nav` 的交互与观感：
 * 侧栏只放**当前模块的章节**，全站科目切换放在右下角这个圆钮里。
 * 设置入口也在这里，因为首页与工具页没有侧栏。
 */
export default function FloatingNav() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const shellRef = useRef<HTMLElement>(null)
  const setSettingsOpen = useAppStore((state) => state.setSettingsOpen)

  /* 点外部 / Esc 关闭。 */
  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (shellRef.current && !shellRef.current.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  /* 路由变化自动收起。 */
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const currentPath = location.pathname.replace(/\/+$/, '') || '/'

  return (
    <nav
      ref={shellRef}
      className="study-hub-shell"
      data-open={open ? 'true' : 'false'}
      aria-label="切换复习资料"
    >
      <div className="study-hub-panel" id="study-hub-panel">
        <div className="study-hub-panel-header">
          <strong>切换复习科目</strong>
          <Link className="study-hub-home" to="/">
            返回总览
          </Link>
        </div>
        <ul className="study-hub-links">
          {allModules.map((item) => {
            const active = currentPath === item.path
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="study-hub-link"
                  aria-current={active ? 'page' : undefined}
                >
                  <span className="study-hub-link-index">{String(item.order).padStart(2, '0')}</span>
                  <span className="study-hub-link-name">{item.title}</span>
                  <span className="study-hub-link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* 设置入口：首页与工具页没有侧栏，从这里进。 */}
        <button
          type="button"
          className="study-hub-settings"
          onClick={() => {
            setOpen(false)
            setSettingsOpen(true)
          }}
        >
          <Settings size={14} aria-hidden="true" />
          设置 · 刷新与外观
        </button>
      </div>

      <button
        type="button"
        className="study-hub-trigger"
        aria-label={open ? '关闭复习资料导航' : '打开复习资料导航'}
        aria-controls="study-hub-panel"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <LayoutGrid aria-hidden="true" />
      </button>
    </nav>
  )
}
