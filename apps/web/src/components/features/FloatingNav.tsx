import { LayoutGrid, Lock, Settings } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { allModules } from '@/router/routeRegistry'
import { useAppStore } from '@/store/appStore'
import { useLockStore } from '@/store/lockStore'

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
  /* 只有设了启动密码才显示「立即锁屏」；否则按钮点了也没意义。 */
  const lockRequired = useLockStore((state) => state.required)
  const lockNow = useLockStore((state) => state.lock)

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
          {/* 设置与「返回总览」并排在头部：列表有 14 条，放底部要滚到底才看得见。 */}
          <div className="study-hub-panel-actions">
            <button
              type="button"
              className="study-hub-settings"
              onClick={() => {
                setOpen(false)
                setSettingsOpen(true)
              }}
            >
              <Settings size={13} aria-hidden="true" />
              设置
            </button>
            {/*
              立即锁屏：**只在设置了启动密码时才出现** —— 没密码锁不了，放出来是死按钮。
              点击只把 store 的 `unlocked` 置 false，React 立刻渲染 LockScreen；
              页面组件不卸载，解锁后还停在原来那一页（比刷新更省事）。
            */}
            {lockRequired ? (
              <button
                type="button"
                className="study-hub-settings study-hub-lock-now"
                onClick={() => {
                  setOpen(false)
                  lockNow()
                }}
                title="立即锁屏"
                aria-label="立即锁屏"
              >
                <Lock size={13} aria-hidden="true" />
              </button>
            ) : null}
            <Link className="study-hub-home" to="/">
              返回总览
            </Link>
          </div>
        </div>
        <ul className="study-hub-links">
          {/*
            答题纸 / 答题卡已并入草稿工作台（右上角入口），标了 homeHidden。
            这里跟着过滤，保证全站只有「草稿工作台」一个入口，不再出现两个孤立入口；
            路由本身保留，老书签仍可用。
          */}
          {allModules
            .filter((item) => !item.homeHidden)
            .map((item, index) => {
            const active = currentPath === item.path
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="study-hub-link"
                  aria-current={active ? 'page' : undefined}
                >
                  {/* 过滤后序号要按显示顺序重编，否则会出现 11 → 14 的断号 */}
                  <span className="study-hub-link-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="study-hub-link-name">{item.title}</span>
                  <span className="study-hub-link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
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
