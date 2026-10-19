import { type ReactNode } from 'react'
import S1 from './sections/nav'
import S2 from './sections/speed'
import S3 from './sections/frac'
import S4 from './sections/abrx'
import S5 from './sections/method415'
import S6 from './sections/assign'
import S7 from './sections/ab'
import S8 from './sections/x'
import S9 from './sections/r'
import S10 from './sections/proportion'
import S11 from './sections/saltwater'
import S12 from './sections/ratio'
import S13 from './sections/compare'
import S14 from './sections/special'
import S15 from './sections/trap'
import S16 from './sections/cheatsheet'
import S17 from './sections/advice'
import ReadingPage from '@/components/features/ReadingPage'
import { findModuleByPath } from '@/router/routeRegistry'
import type { SectionContent } from '@/types/content'
import './module.css'

/** 该模块的元信息，缺失说明路由表与目录不同步。 */
const meta = findModuleByPath('/data-analysis')

/** 章节内容表：顺序即页面顺序，侧栏锚点由 ReadingPage 自动生成。 */
const sections: SectionContent[] = [
  {
    id: 'nav',
    title: "总览 · 学习路线（按这个顺序学，别跳）",
    icon: "🗺️",
    tag: "先看这个",
    content: <S1 />,
  },
  {
    id: 'speed',
    title: "一、加减乘除速算",
    icon: "⚡",
    tag: "第一步 · 地基",
    content: <S2 />,
  },
  {
    id: 'frac',
    title: "二、百化分与误差修正",
    icon: "½",
    tag: "第一步 · 地基",
    content: <S3 />,
  },
  {
    id: 'abrx',
    title: "三、ABRX 四量关系（全科总纲）",
    icon: "🔗",
    tag: "第二步 · 框架",
    content: <S4 />,
  },
  {
    id: 'method415',
    title: "四、415 份数法",
    icon: "4·1·5",
    tag: "第二步 · 神器①",
    content: <S5 />,
  },
  {
    id: 'assign',
    title: "五、假设分配法",
    icon: "🌳",
    tag: "第二步 · 神器②",
    content: <S6 />,
  },
  {
    id: 'ab',
    title: "六、A 与 B（基期 · 现期）",
    icon: "🅰️",
    tag: "考点 · 高频",
    content: <S7 />,
  },
  {
    id: 'x',
    title: "七、增长量 X",
    icon: "📊",
    tag: "考点 · 高频",
    content: <S8 />,
  },
  {
    id: 'r',
    title: "八、增长率 R（考法最多的一节）",
    icon: "📈",
    tag: "考点 · 超高频",
    content: <S9 />,
  },
  {
    id: 'proportion',
    title: "九、比重类",
    icon: "🥧",
    tag: "考点 · 超高频",
    content: <S10 />,
  },
  {
    id: 'saltwater',
    title: "十、盐水类（混合思维）",
    icon: "🌊",
    tag: "考点 · 超高频",
    content: <S11 />,
  },
  {
    id: 'ratio',
    title: "十一、平均倍数类（平均数 · 倍数 · 年均）",
    icon: "📐",
    tag: "考点 · 高频",
    content: <S12 />,
  },
  {
    id: 'compare',
    title: "十二、比较类",
    icon: "⚖️",
    tag: "考点 · 超高频",
    content: <S13 />,
  },
  {
    id: 'special',
    title: "十三、特殊考点（拉动 · 贡献率 · 容斥 · 进出口）",
    icon: "🧩",
    tag: "考点 · 高频",
    content: <S14 />,
  },
  {
    id: 'trap',
    title: "十四、常见陷阱与避坑（第十讲 14 个坑）",
    icon: "⚠️",
    tag: "最容易丢分",
    content: <S15 />,
  },
  {
    id: 'cheatsheet',
    title: "十五、公式速查总表",
    icon: "🗺️",
    tag: "考前翻",
    content: <S16 />,
  },
  {
    id: 'advice',
    title: "十六、备考训练建议",
    icon: "🎯",
    tag: "收尾",
    content: <S17 />,
  },
]

/**
 * 模块页面。
 *
 * @returns 阅读页骨架。
 */
export default function Page(): ReactNode {
  if (!meta) return null
  return <ReadingPage meta={meta} sections={sections} scopeClass="legacy-data-analysis" />
}
