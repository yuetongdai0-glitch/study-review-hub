import { type ReactNode } from 'react'
import S1 from './sections/overview'
import S2 from './sections/core'
import S3 from './sections/mod1'
import S4 from './sections/mod2'
import S5 from './sections/mod5'
import S6 from './sections/cheat'
import S7 from './sections/workflow'
import S8 from './sections/plan'
import S9 from './sections/progress'
import ReadingPage from '@/components/features/ReadingPage'
import { findModuleByPath } from '@/router/routeRegistry'
import type { SectionContent } from '@/types/content'
import './module.css'

/** 该模块的元信息，缺失说明路由表与目录不同步。 */
const meta = findModuleByPath('/judgment')

/** 章节内容表：顺序即页面顺序，侧栏锚点由 ReadingPage 自动生成。 */
const sections: SectionContent[] = [
  {
    id: 'overview',
    title: "学习地图",
    icon: "0",
    tag: undefined,
    content: <S1 />,
  },
  {
    id: 'core',
    title: "总纲 · 两个要求，一个核心词",
    icon: "★",
    tag: undefined,
    content: <S2 />,
  },
  {
    id: 'mod1',
    title: "模块一 · 必然性推理（逻辑判断）",
    icon: "一",
    tag: undefined,
    content: <S3 />,
  },
  {
    id: 'mod2',
    title: "模块二 · 可能性推理（加强削弱）",
    icon: "二",
    tag: undefined,
    content: <S4 />,
  },
  {
    id: 'mod5',
    title: "模块三 · 定义判断（第 20 次课）",
    icon: "三",
    tag: undefined,
    content: <S5 />,
  },
  {
    id: 'cheat',
    title: "口诀速记卡",
    icon: "⚡",
    tag: undefined,
    content: <S6 />,
  },
  {
    id: 'workflow',
    title: "考场做题流程",
    icon: "⌛",
    tag: undefined,
    content: <S7 />,
  },
  {
    id: 'plan',
    title: "备考节奏建议",
    icon: "📅",
    tag: undefined,
    content: <S8 />,
  },
  {
    id: 'progress',
    title: "我的学习进度",
    icon: "✅",
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
  return <ReadingPage meta={meta} sections={sections} scopeClass="legacy-judgment" />
}
