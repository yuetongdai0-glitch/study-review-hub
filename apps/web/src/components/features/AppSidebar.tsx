import { Menu, Settings } from 'lucide-react'
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
 * @returns 设置入口、返回总览。
 * @remarks 刷新（重新加载 / 重建应用）与外观都收进设置弹层，
 * 底部只留两个入口，不再堆一排按钮。
 */
function SidebarActions() {
  const setSettingsOpen = useAppStore((state) => state.setSettingsOpen)
  const { pendingBuild, nativeAvailable } = useUpdate()
  const hasUpdate = Boolean(pendingBuild) || nativeAvailable

  return (
    <div className="sb-actions">
      <button type="button" onClick={() => setSettingsOpen(true)} data-pending={hasUpdate ? 'true' : 'false'}>
        <span className="inline-flex items-center justify-center gap-1.5">
          <Settings size={13} />
          设置{hasUpdate ? ' · 有新内容' : ''}
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
