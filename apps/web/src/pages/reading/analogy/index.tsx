import { type ReactNode } from 'react'
import S1 from './sections/nav'
import S2 from './sections/s0'
import S3 from './sections/s1'
import S4 from './sections/s2'
import S5 from './sections/s3'
import S6 from './sections/s4'
import S7 from './sections/s5'
import S8 from './sections/s6'
import S9 from './sections/s7'
import S10 from './sections/s8'
import S11 from './sections/s9'
import S12 from './sections/s10'
import S13 from './sections/s11'
import S14 from './sections/s12'
import S15 from './sections/s13'
import S16 from './sections/s14'
import S17 from './sections/s15'
import S18 from './sections/s16'
import S19 from './sections/s17'
import S20 from './sections/s18'
import S21 from './sections/s19'
import S22 from './sections/s20'
import S23 from './sections/s21'
import S24 from './sections/s22'
import S25 from './sections/s23'
import S26 from './sections/s24'
import S27 from './sections/strategy'
import ReadingPage from '@/components/features/ReadingPage'
import { findModuleByPath } from '@/router/routeRegistry'
import type { SectionContent } from '@/types/content'
import './module.css'

/** 该模块的元信息，缺失说明路由表与目录不同步。 */
const meta = findModuleByPath('/analogy')

/** 章节内容表：顺序即页面顺序，侧栏锚点由 ReadingPage 自动生成。 */
const sections: SectionContent[] = [
  {
    id: 'nav',
    title: "备考认知 · 考查形式 · 做题流程",
    icon: "📋",
    tag: "总览",
    content: <S1 />,
  },
  {
    id: 's0',
    title: "一、三条核心原则",
    icon: "🎯",
    tag: "先记住",
    content: <S2 />,
  },
  {
    id: 's1',
    title: "二 · 1 全同关系",
    icon: "＝",
    tag: "必背",
    content: <S3 />,
  },
  {
    id: 's2',
    title: "二 · 2 全异关系",
    icon: "⧗",
    tag: "必背",
    content: <S4 />,
  },
  {
    id: 's3',
    title: "二 · 3 种属关系",
    icon: "⊂",
    tag: "必背",
    content: <S5 />,
  },
  {
    id: 's4',
    title: "二 · 4 交叉关系",
    icon: "◎",
    tag: "常考",
    content: <S6 />,
  },
  {
    id: 's5',
    title: "二 · 5 顺承关系",
    icon: "⏭",
    tag: "常考",
    content: <S7 />,
  },
  {
    id: 's6',
    title: "二 · 6 因果关系",
    icon: "↯",
    tag: "必背",
    content: <S8 />,
  },
  {
    id: 's7',
    title: "二 · 7 目的关系",
    icon: "🎯",
    tag: "常考",
    content: <S9 />,
  },
  {
    id: 's8',
    title: "二 · 8 条件关系",
    icon: "⇄",
    tag: "必背",
    content: <S10 />,
  },
  {
    id: 's9',
    title: "三 · 1 功能关系",
    icon: "🔧",
    tag: "必背",
    content: <S11 />,
  },
  {
    id: 's10',
    title: "三 · 2 组成关系",
    icon: "🧩",
    tag: "必背",
    content: <S12 />,
  },
  {
    id: 's11',
    title: "三 · 3 加工关系",
    icon: "⚗️",
    tag: "常考",
    content: <S13 />,
  },
  {
    id: 's12',
    title: "三 · 4 命名方式",
    icon: "🏷️",
    tag: "常考",
    content: <S14 />,
  },
  {
    id: 's13',
    title: "三 · 5 特征（属性）关系",
    icon: "✦",
    tag: "常考",
    content: <S15 />,
  },
  {
    id: 's14',
    title: "三 · 6 职业关系",
    icon: "👷",
    tag: "常考",
    content: <S16 />,
  },
  {
    id: 's15',
    title: "三 · 7 位置关系",
    icon: "📍",
    tag: "常考",
    content: <S17 />,
  },
  {
    id: 's16',
    title: "三 · 8 依据关系",
    icon: "📐",
    tag: "常考",
    content: <S18 />,
  },
  {
    id: 's17',
    title: "四 · 1 近反义关系",
    icon: "⇅",
    tag: "必背",
    content: <S19 />,
  },
  {
    id: 's18',
    title: "四 · 2 结合逻辑关系考查",
    icon: "🔗",
    tag: "常考",
    content: <S20 />,
  },
  {
    id: 's19',
    title: "四 · 3 词句结构",
    icon: "🧱",
    tag: "必背",
    content: <S21 />,
  },
  {
    id: 's20',
    title: "四 · 4 释义关系",
    icon: "📖",
    tag: "常考",
    content: <S22 />,
  },
  {
    id: 's21',
    title: "四 · 5 指代、象征、比喻",
    icon: "🎭",
    tag: "必背",
    content: <S23 />,
  },
  {
    id: 's22',
    title: "四 · 6 成语、诗句被拆分",
    icon: "✂️",
    tag: "常考",
    content: <S24 />,
  },
  {
    id: 's23',
    title: "四 · 7 长诗句 : 长诗句",
    icon: "📜",
    tag: "常考",
    content: <S25 />,
  },
  {
    id: 's24',
    title: "五、造句法（兜底办法）",
    icon: "🪄",
    tag: "必背",
    content: <S26 />,
  },
  {
    id: 'strategy',
    title: "易错点与做题纪律",
    icon: "🧭",
    tag: "考前看",
    content: <S27 />,
  },
]

/**
 * 模块页面。
 *
 * @returns 阅读页骨架。
 */
export default function Page(): ReactNode {
  if (!meta) return null
  return <ReadingPage meta={meta} sections={sections} scopeClass="legacy-analogy" />
}
