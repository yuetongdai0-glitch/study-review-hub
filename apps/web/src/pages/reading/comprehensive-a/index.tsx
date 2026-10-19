import { type ReactNode } from 'react'
import S1 from './sections/s0'
import S2 from './sections/s1'
import S3 from './sections/s2'
import S4 from './sections/s3'
import S5 from './sections/s4'
import S6 from './sections/s5'
import S7 from './sections/s6'
import S8 from './sections/s7'
import S9 from './sections/s8'
import ReadingPage from '@/components/features/ReadingPage'
import { findModuleByPath } from '@/router/routeRegistry'
import type { SectionContent } from '@/types/content'
import './module.css'

/** 该模块的元信息，缺失说明路由表与目录不同步。 */
const meta = findModuleByPath('/comprehensive-a')

/** 章节内容表：顺序即页面顺序，侧栏锚点由 ReadingPage 自动生成。 */
const sections: SectionContent[] = [
  {
    id: 's0',
    title: "导学：综应A到底考什么",
    icon: "0",
    tag: undefined,
    content: <S1 />,
  },
  {
    id: 's1',
    title: "底层方法：答案是怎么\"长\"出来的",
    icon: "1",
    tag: undefined,
    content: <S2 />,
  },
  {
    id: 's2',
    title: "第2课 归纳概括（要素提炼）",
    icon: "2",
    tag: undefined,
    content: <S3 />,
  },
  {
    id: 's3',
    title: "第3课 提出对策（解决问题）",
    icon: "3",
    tag: undefined,
    content: <S4 />,
  },
  {
    id: 's4',
    title: "第4课 应急处理",
    icon: "4",
    tag: undefined,
    content: <S5 />,
  },
  {
    id: 's5',
    title: "第5课 沟通协调",
    icon: "5",
    tag: undefined,
    content: <S6 />,
  },
  {
    id: 's6',
    title: "第6课 公文写作（应用文）",
    icon: "6",
    tag: undefined,
    content: <S7 />,
  },
  {
    id: 's7',
    title: "第7课 规范表达素材库",
    icon: "7",
    tag: undefined,
    content: <S8 />,
  },
  {
    id: 's8',
    title: "第8课 考场实战",
    icon: "8",
    tag: undefined,
    content: <S9 />,
  },
]

/**
 * 模块页面。
 *
 * @returns 阅读页骨架。
 */
export default function Page(): ReactNode {
  if (!meta) return null
  return <ReadingPage meta={meta} sections={sections} scopeClass="legacy-comprehensive-a" />
}
