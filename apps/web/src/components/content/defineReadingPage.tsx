import type { ReactNode } from 'react'
import ReadingPage from '@/components/features/ReadingPage'
import type { ModuleMeta } from '@/router/types'
import type { NavSection } from '@/types/content'

/** 页面章节定义：渲染内容与目录项写在一起，避免两处不同步。 */
export type PageSection = NavSection & {
  render: () => ReactNode
  defaultCollapsed?: boolean
}

/**
 * 由模块元信息与章节定义生成页面。
 *
 * @param meta 模块元信息。
 * @param sections 章节定义。
 * @returns 统一版式的阅读页。
 * @remarks 各模块 index.tsx 只保留「数据 + 章节」，不再重复布局代码。
 */
export function defineReadingPage(meta: ModuleMeta, sections: PageSection[]) {
  /**
   * 模块页面。
   *
   * @returns 阅读页。
   */
  function Page() {
    return (
      <ReadingPage
        meta={meta}
        scopeClass={`legacy-${meta.name}`}
        sections={sections.map((section) => ({
          id: section.id,
          title: section.title,
          icon: section.icon,
          tag: section.tag,
          content: section.render(),
        }))}
      />
    )
  }
  return Page
}
