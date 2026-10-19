import { ChevronDown } from 'lucide-react'
import { useEffect, useMemo, useRef } from 'react'
import ModuleHero from '@/components/features/ModuleHero'
import { useSectionStore } from '@/store/sectionStore'
import { useAppStore } from '@/store/appStore'
import { accentTokens } from '@/theme/tokens'
import type { ModuleMeta } from '@/router/types'
import type { SectionContent } from '@/types/content'

/**
 * 阅读页通用骨架。
 *
 * @param props 模块元信息与章节内容。
 * @returns banner + 可折叠章节列表。
 * @remarks 版式与旧站一致：`.banner` 通栏渐变 + `.container` 720px 正文，
 * 章节视觉全部来自该模块的 module.css（旧页样式原样保留）。
 * React 只接管「折叠状态」与「侧栏锚点注册」。
 */
export default function ReadingPage({
  meta,
  sections,
  scopeClass,
}: {
  meta: ModuleMeta
  sections: SectionContent[]
  /** 该模块遗留样式的作用域类名（承载旧页 CSS）。 */
  scopeClass?: string
}) {
  const register = useSectionStore((state) => state.register)
  const clear = useSectionStore((state) => state.clear)
  const collapsed = useAppStore((state) => state.collapsed[meta.path])
  const toggleSection = useAppStore((state) => state.toggleSection)
  const expandAll = useAppStore((state) => state.expandAll)

  const navSections = useMemo(
    () => sections.map(({ id, title, icon, tag }) => ({ id, title, icon, tag })),
    [sections],
  )
  const registerRef = useRef(register)
  registerRef.current = register

  useEffect(() => {
    registerRef.current(meta.path, navSections)
    return () => clear(meta.path)
  }, [meta.path, navSections, clear])

  const accent = accentTokens[meta.accent]
  const collapsedSet = new Set(collapsed ?? [])

  /*
   * 模块主色同时写到 :root。
   * 旧站是页面级 <style> 在 :root 上定义 --primary，侧栏的
   * `--shell-accent: var(--primary)` 才能跟着变（高亮条用模块色）。
   * 现在模块样式被作用域化到 .legacy-xxx，侧栏是它的兄弟节点拿不到，
   * 所以这里显式补一份到根节点；卸载时还原，避免串色。
   */
  useEffect(() => {
    const root = document.documentElement
    const previous = root.style.getPropertyValue('--primary')
    root.style.setProperty('--primary', accent.color)
    return () => {
      if (previous) root.style.setProperty('--primary', previous)
      else root.style.removeProperty('--primary')
    }
  }, [accent.color])

  return (
    <div
      style={{
        ['--accent' as string]: accent.color,
        ['--accent-soft' as string]: accent.soft,
        ['--accent-ink' as string]: accent.ink,
      }}
    >
      {/* banner 在作用域容器之外：否则旧页的 h1/body 规则会污染它 */}
      <ModuleHero meta={meta} sectionCount={sections.length} />

      <div className={scopeClass ? `container ${scopeClass}` : 'container'}>
        {sections.map((section) => {
          const isCollapsed = collapsedSet.has(section.id)
          return (
            <section
              key={section.id}
              id={section.id}
              className={isCollapsed ? 'section collapsed' : 'section'}
              aria-labelledby={`${section.id}-title`}
            >
              <div
                className="section-header"
                role="button"
                tabIndex={0}
                aria-expanded={!isCollapsed}
                onClick={() => toggleSection(meta.path, section.id)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    toggleSection(meta.path, section.id)
                  }
                }}
              >
                {section.icon ? (
                  <div className="section-icon" aria-hidden="true">
                    {section.icon}
                  </div>
                ) : null}
                <div className="section-title" id={`${section.id}-title`}>
                  {section.title}
                </div>
                {section.tag ? <span className="section-tag">{section.tag}</span> : null}
                <ChevronDown size={14} className="section-arrow" aria-hidden="true" />
              </div>

              <div className="section-body">{section.content}</div>
            </section>
          )
        })}

        <div className="mt-5 flex items-center justify-between px-1 text-[12px] text-ink-3">
          <span>
            共 {sections.length} 节{collapsedSet.size > 0 ? ` · 已折叠 ${collapsedSet.size} 节` : ''}
          </span>
          <div className="flex items-center gap-3">
            {collapsedSet.size > 0 ? (
              <button type="button" className="text-brand hover:underline" onClick={() => expandAll(meta.path)}>
                展开全部
              </button>
            ) : null}
            <button
              type="button"
              className="hover:text-ink"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              回到顶部 ↑
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
