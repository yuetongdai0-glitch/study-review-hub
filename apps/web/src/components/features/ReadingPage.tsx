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
 * @returns hero + 可折叠章节列表。
 * @remarks 所有阅读型模块共用这一个骨架。差异只在「章节内容」，
 * 版式、折叠、锚点、强调色全部统一，新增科目不用再抄一遍页面结构。
 */
export default function ReadingPage({
  meta,
  sections,
  scopeClass,
}: {
  meta: ModuleMeta
  sections: SectionContent[]
  /** 该模块遗留样式的作用域类名（迁移期用于承载模块专属 CSS）。 */
  scopeClass?: string
}) {
  const register = useSectionStore((state) => state.register)
  const clear = useSectionStore((state) => state.clear)
  const collapsed = useAppStore((state) => state.collapsed[meta.path])
  const toggleSection = useAppStore((state) => state.toggleSection)
  const expandAll = useAppStore((state) => state.expandAll)

  const navSections = useMemo(() => sections.map(({ id, title, icon, tag }) => ({ id, title, icon, tag })), [sections])
  const registerRef = useRef(register)
  registerRef.current = register

  useEffect(() => {
    registerRef.current(meta.path, navSections)
    return () => clear(meta.path)
  }, [meta.path, navSections, clear])

  const accent = accentTokens[meta.accent]
  const collapsedSet = new Set(collapsed ?? [])

  return (
    <div
      style={{ ['--accent' as string]: accent.color, ['--accent-soft' as string]: accent.soft, ['--accent-ink' as string]: accent.ink }}
    >
      <ModuleHero meta={meta} sectionCount={sections.length} />

      <div className="app-content">
        {/*
          旧页面样式统一收在这个作用域容器里：它只包正文，不包 hero。
          否则旧页的 `h1 { color: var(--text) }` 会把 hero 标题染成深色。
        */}
        <div className={`prose mx-auto w-full ${scopeClass ?? ''}`} style={{ maxWidth: 'var(--prose-width)' }}>
          {sections.map((section, index) => {
            const isCollapsed = collapsedSet.has(section.id)
            return (
              <section
                key={section.id}
                id={section.id}
                className="section"
                data-collapsed={isCollapsed ? 'true' : 'false'}
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
                  <div className="section-icon" aria-hidden="true">
                    {section.icon ?? String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="section-title" id={`${section.id}-title`}>
                    {section.title}
                  </div>
                  {section.tag ? <span className="section-tag">{section.tag}</span> : null}
                  <ChevronDown size={15} className="section-arrow" aria-hidden="true" />
                </div>

                <div className="section-body">{section.content}</div>
              </section>
            )
          })}
        </div>

        <div className="mx-auto mt-6 flex w-full items-center justify-between px-1 text-[12.5px] text-ink-3" style={{ maxWidth: 'var(--prose-width)' }}>
          <span>
            共 {sections.length} 节 · 已折叠 {collapsedSet.size} 节
          </span>
          <div className="flex items-center gap-3">
            {collapsedSet.size > 0 ? (
              <button type="button" className="text-brand hover:underline" onClick={() => expandAll(meta.path)}>
                展开全部
              </button>
            ) : null}
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-ink"
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
