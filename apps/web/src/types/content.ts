import type { ReactNode } from 'react'

/**
 * 内容契约。
 *
 * 每个模块把自己的章节声明成「标题 + 锚点 + 渲染内容」，
 * 侧栏锚点、滚动高亮、折叠状态全部由这份数据驱动，
 * 页面不再手写 `<a href="#s3">` 这种容易和正文脱节的导航。
 */

/** 章节锚点。 */
export type NavSection = {
  /** 章节 id，同时作为 DOM id 与锚点。 */
  id: string
  /** 侧栏显示名。 */
  title: string
  /** 章节图标（emoji 或单字）。 */
  icon?: string
  /** 右上角标签，如「超高频」「总览」。 */
  tag?: string
}

/** 带渲染内容的章节。 */
export type SectionContent = NavSection & {
  /** 章节正文。 */
  content: ReactNode
  /** 默认折叠（用于超长页面的次要章节）。 */
  defaultCollapsed?: boolean
}

/** 一个模块的完整内容。 */
export type ModuleContent = {
  /** 章节列表，顺序即页面顺序。 */
  sections: SectionContent[]
}
