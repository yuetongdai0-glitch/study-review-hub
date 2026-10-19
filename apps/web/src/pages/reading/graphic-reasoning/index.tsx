import { type ReactNode } from 'react'
import S1 from './sections/nav'
import S2 from './sections/s1'
import S3 from './sections/s2'
import S4 from './sections/s3'
import S5 from './sections/s4'
import S6 from './sections/s5'
import S7 from './sections/s6'
import S8 from './sections/s7'
import S9 from './sections/s8'
import S10 from './sections/s9'
import S11 from './sections/s10'
import ReadingPage from '@/components/features/ReadingPage'
import { findModuleByPath } from '@/router/routeRegistry'
import type { SectionContent } from '@/types/content'
import './module.css'

/** 该模块的元信息，缺失说明路由表与目录不同步。 */
const meta = findModuleByPath('/graphic-reasoning')

/** 章节内容表：顺序即页面顺序，侧栏锚点由 ReadingPage 自动生成。 */
const sections: SectionContent[] = [
  {
    id: 'nav',
    title: "总览 · 学习地图（3+3 体系）",
    icon: "🧭",
    tag: "必看",
    content: <S1 />,
  },
  {
    id: 's1',
    title: "一、位置规律 + 相邻比较",
    icon: "↔️",
    tag: "第一组 · 图形「像」",
    content: <S2 />,
  },
  {
    id: 's2',
    title: "二、样式规律 + 标记",
    icon: "🔀",
    tag: "第一组 · 图形「像」",
    content: <S3 />,
  },
  {
    id: 's3',
    title: "三、属性规律 + 图形关系",
    icon: "🔷",
    tag: "第二组 · 图形「不像」",
    content: <S4 />,
  },
  {
    id: 's4',
    title: "四、数量 · 面 / 线 / 点",
    icon: "🔢",
    tag: "第二组 · 图形「不像」",
    content: <S5 />,
  },
  {
    id: 's5',
    title: "五、数量 · 笔画 / 元素 / 直角",
    icon: "✏️",
    tag: "第二组 · 图形「不像」",
    content: <S6 />,
  },
  {
    id: 's6',
    title: "六、六面体 + 四面体",
    icon: "🧊",
    tag: "第三组 · 立体图形",
    content: <S7 />,
  },
  {
    id: 's7',
    title: "七、三视图 + 截面",
    icon: "📐",
    tag: "第三组 · 立体图形",
    content: <S8 />,
  },
  {
    id: 's8',
    title: "八、立体拼合",
    icon: "🧱",
    tag: "第三组 · 立体图形",
    content: <S9 />,
  },
  {
    id: 's9',
    title: "九、不规则 / 平面拼合 / 折纸",
    icon: "🧩",
    tag: "第四组 · 综合",
    content: <S10 />,
  },
  {
    id: 's10',
    title: "十、思维导图串讲（总纲）",
    icon: "🗺️",
    tag: "第四组 · 综合",
    content: <S11 />,
  },
]

/**
 * 模块页面。
 *
 * @returns 阅读页骨架。
 */
export default function Page(): ReactNode {
  if (!meta) return null
  return <ReadingPage meta={meta} sections={sections} scopeClass="legacy-graphic-reasoning" />
}
