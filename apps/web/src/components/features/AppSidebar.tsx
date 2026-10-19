import { Menu, Moon, RefreshCw, Sun } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { findModuleByPath } from '@/router/routeRegistry'
import { groupTitles } from '@/router/types'
import { useAppStore } from '@/store/appStore'
import { useSectionStore } from '@/store/sectionStore'
import { useUpdate } from '@/hooks/useUpdate'
import type { NavSection } from '@/types/content'

/**
 * 侧栏底部动作区。
 *
 * @returns 刷新网页、安装新版本（有更新时）、主题切换、回到总览。
 * @remarks 「刷新网页」与「更新 App」是两件事：
 * - 改内容 → 刷新网页即可，壳会重新向服务器取最新 HTML/JS；
 * - 改原生代码 → 才会出现「更新 App」按钮，走应用内更新装新包。
 */
function SidebarActions() {
  const theme = useAppStore((state) => state.theme)
  const toggleTheme = useAppStore((state) => state.toggleTheme)
  const { label, busy, pendingBuild, nativeAvailable, nativeVersion, run, upgrade } = useUpdate()

  return (
    <div className="sb-actions">
      <button
        type="button"
        onClick={() => void run()}
        disabled={busy}
        data-pending={pendingBuild ? 'true' : 'false'}
      >
        <span className="inline-flex items-center justify-center gap-1.5">
          <RefreshCw size={13} className={busy ? 'animate-spin' : ''} />
          {label}
        </span>
      </button>

      {nativeAvailable ? (
        <button type="button" style={{ marginTop: 8 }} onClick={() => void upgrade()} disabled={busy}>
          <span className="inline-flex items-center justify-center gap-1.5">
            更新 App {nativeVersion ? `v${nativeVersion}` : ''}
          </span>
        </button>
      ) : null}

      <button
        type="button"
        style={{ marginTop: 8 }}
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? '切换到浅色' : '切换到深色'}
      >
        <span className="inline-flex items-center justify-center gap-1.5">
          {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
          {theme === 'dark' ? '浅色' : '深色'}
        </span>
      </button>
      <Link to="/" className="sb-home" style={{ marginTop: 8, display: 'block', textAlign: 'center' }}>
        返回总览
      </Link>
    </div>
  )
}

/**
 * 当前模块的知识点目录。
 *
 * @returns 品牌 + 搜索 + 章节锚点 + 动作区。
 * @remarks **只放当前模块的章节**，与旧站一致。
 * 全站科目切换在右下角浮动按钮（FloatingNav）里，不塞进侧栏——
 * 否则点进一页后目录会「什么都有、很乱」。
 */
export default function AppSidebar() {
  const location = useLocation()
  const current = findModuleByPath(location.pathname)
  const sections = useSectionStore((state) => state.sections)
  const menuOpen = useAppStore((state) => state.sidebarOpen)
  const setMenuOpen = useAppStore((state) => state.setSidebarOpen)
  const [keyword, setKeyword] = useState('')
  const [activeAnchor, setActiveAnchor] = useState('')

  const visibleSections = useMemo<NavSection[]>(() => {
    const query = keyword.trim().toLowerCase()
    if (!query) return sections
    return sections.filter((item) => item.title.toLowerCase().includes(query))
  }, [keyword, sections])

  /* 滚动高亮：取视口内最靠上的章节。 */
  useEffect(() => {
    if (sections.length === 0) return
    const onScroll = () => {
      let found = ''
      for (const section of sections) {
        const node = document.getElementById(section.id)
        if (!node) continue
        if (node.getBoundingClientRect().top <= 120) found = section.id
      }
      setActiveAnchor(found)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  return (
    <>
      <button
        className="menu-btn"
        id="menuBtn"
        type="button"
        aria-label="打开知识点目录"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu size={19} />
      </button>
      <div className="mask" id="mask" onClick={() => setMenuOpen(false)} aria-hidden="true" />

      <aside className="sidebar" id="sidebar" aria-label="知识点目录">
        <div className="sb-brand">
          <div className="t">
            {current?.source ? `${current.source} · ` : ''}
            {current?.title ?? '备考复习'}
          </div>
          <div className="s">
            {sections.length > 0 ? `共 ${sections.length} 节` : '笔记与练习工具'}
            {current ? ` · ${groupTitles[current.group]}` : ''}
          </div>
        </div>

        <div className="sb-search">
          <input
            type="text"
            id="navSearch"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="搜索知识点…"
            aria-label="搜索知识点"
          />
        </div>

        <div className="nav-group">
          <div className="g-title">本页目录</div>
          {visibleSections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeAnchor === section.id ? 'nav-link active' : 'nav-link'}
              data-kw={section.title}
              onClick={() => setMenuOpen(false)}
            >
              <span className="no">{String(index + 1).padStart(2, '0')}</span>
              {section.title}
            </a>
          ))}
          {visibleSections.length === 0 ? (
            <div className="sb-empty">{keyword ? '没有匹配的知识点' : '本页暂无目录'}</div>
          ) : null}
        </div>

        <SidebarActions />
      </aside>
    </>
  )
}
