import { type ReactNode } from 'react'
import S0 from './sections/s0'
import S1 from './sections/s1'
import S2 from './sections/s2'
import S3 from './sections/s3'
import ReadingPage from '@/components/features/ReadingPage'
import { findModuleByPath } from '@/router/routeRegistry'
import type { SectionContent } from '@/types/content'
import './module.css'

/** 该模块的元信息，缺失说明路由表与目录不同步。 */
const meta = findModuleByPath('/current-affairs')

/** 章节内容表：顺序即页面顺序，侧栏锚点由 ReadingPage 自动生成。 */
const sections: SectionContent[] = [
  {
    id: 's0',
    title: '一、「十五五」规划与 2026 年重要政策',
    icon: '🗂️',
    tag: '文件题必考',
    content: <S0 />,
  },
  {
    id: 's1',
    title: '二、2026 时政热点（1–8 月）',
    icon: '📰',
    tag: '按主题背',
    content: <S1 />,
  },
  {
    id: 's2',
    title: '三、2026 时政 · 9—10 月',
    icon: '🗓️',
    tag: '最新',
    content: <S2 />,
  },
  {
    id: 's3',
    title: '四、重大专题速览（会议 · 文件 · 周年）',
    icon: '🏷️',
    tag: '防串台',
    content: <S3 />,
  },
]

/**
 * 模块页面。
 *
 * @returns 阅读页骨架。
 */
export default function Page(): ReactNode {
  if (!meta) return null
  return <ReadingPage meta={meta} sections={sections} scopeClass="legacy-current-affairs" />
}
