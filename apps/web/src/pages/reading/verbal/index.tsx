import { type ReactNode } from 'react'
import S1 from './sections/overview'
import S2 from './sections/central'
import S3 from './sections/logic-fill'
import S4 from './sections/title'
import S5 from './sections/next'
import S6 from './sections/fill-in'
import S7 from './sections/sort'
import S8 from './sections/detail'
import S9 from './sections/review'
import S10 from './sections/summary'
import ReadingPage from '@/components/features/ReadingPage'
import { findModuleByPath } from '@/router/routeRegistry'
import type { SectionContent } from '@/types/content'
import './module.css'

/** 该模块的元信息，缺失说明路由表与目录不同步。 */
const meta = findModuleByPath('/verbal')

/** 章节内容表：顺序即页面顺序，侧栏锚点由 ReadingPage 自动生成。 */
const sections: SectionContent[] = [
  {
    id: 'overview',
    title: "overview",
    icon: undefined,
    tag: undefined,
    content: <S1 />,
  },
  {
    id: 'central',
    title: "central",
    icon: undefined,
    tag: undefined,
    content: <S2 />,
  },
  {
    id: 'logic-fill',
    title: "logic-fill",
    icon: undefined,
    tag: undefined,
    content: <S3 />,
  },
  {
    id: 'title',
    title: "title",
    icon: undefined,
    tag: undefined,
    content: <S4 />,
  },
  {
    id: 'next',
    title: "next",
    icon: undefined,
    tag: undefined,
    content: <S5 />,
  },
  {
    id: 'fill-in',
    title: "fill-in",
    icon: undefined,
    tag: undefined,
    content: <S6 />,
  },
  {
    id: 'sort',
    title: "sort",
    icon: undefined,
    tag: undefined,
    content: <S7 />,
  },
  {
    id: 'detail',
    title: "detail",
    icon: undefined,
    tag: undefined,
    content: <S8 />,
  },
  {
    id: 'review',
    title: "review",
    icon: undefined,
    tag: undefined,
    content: <S9 />,
  },
  {
    id: 'summary',
    title: "summary",
    icon: undefined,
    tag: undefined,
    content: <S10 />,
  },
]

/**
 * 模块页面。
 *
 * @returns 阅读页骨架。
 */
export default function Page(): ReactNode {
  if (!meta) return null
  return <ReadingPage meta={meta} sections={sections} scopeClass="legacy-verbal" />
}
