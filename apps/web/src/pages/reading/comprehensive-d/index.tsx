import { type ReactNode } from 'react'
import S1 from './sections/sec1'
import S2 from './sections/sec2'
import S3 from './sections/sec3'
import S4 from './sections/sec4'
import S5 from './sections/sec5'
import S6 from './sections/sec6'
import S7 from './sections/sec7'
import S8 from './sections/sec8'
import S9 from './sections/sec9'
import S10 from './sections/sec10'
import S11 from './sections/sec11'
import S12 from './sections/sec12'
import S13 from './sections/sec13'
import S14 from './sections/sec14'
import ReadingPage from '@/components/features/ReadingPage'
import { findModuleByPath } from '@/router/routeRegistry'
import type { SectionContent } from '@/types/content'
import './module.css'

/** 该模块的元信息，缺失说明路由表与目录不同步。 */
const meta = findModuleByPath('/comprehensive-d')

/** 章节内容表：顺序即页面顺序，侧栏锚点由 ReadingPage 自动生成。 */
const sections: SectionContent[] = [
  {
    id: 'sec1',
    title: "考试认知 · 题型与答题模板",
    icon: "1",
    tag: "必看 · 决定答题框架",
    content: <S1 />,
  },
  {
    id: 'sec2',
    title: "素质教育与新课程改革",
    icon: "2",
    tag: "辨析、案例分析最高频考点",
    content: <S2 />,
  },
  {
    id: 'sec3',
    title: "教育学基础原理",
    icon: "3",
    tag: "教育本质 · 目的 · 身心发展",
    content: <S3 />,
  },
  {
    id: 'sec4',
    title: "教学原理与教学实施",
    icon: "4",
    tag: "原则 · 方法 · 环节 · 好课标准",
    content: <S4 />,
  },
  {
    id: 'sec5',
    title: "学生心理发展 · 个别差异",
    icon: "5",
    tag: "皮亚杰 · 埃里克森 · 认知过程 · 气质",
    content: <S5 />,
  },
  {
    id: 'sec6',
    title: "学习心理 · 学习理论",
    icon: "6",
    tag: "学习动机 · 迁移 · 策略（案例分析必考）",
    content: <S6 />,
  },
  {
    id: 'sec7',
    title: "德育原理与方法",
    icon: "7",
    tag: "品德结构 · 规律 · 原则 · 方法（高频）",
    content: <S7 />,
  },
  {
    id: 'sec8',
    title: "班级管理与班主任工作",
    icon: "8",
    tag: "班集体培养 · 后进生转化 · 突发事件",
    content: <S8 />,
  },
  {
    id: 'sec9',
    title: "师德与职业认知",
    icon: "9",
    tag: "教师劳动 · 素养 · 职业道德（三爱两人一终身）",
    content: <S9 />,
  },
  {
    id: 'sec10',
    title: "教育法律法规",
    icon: "10",
    tag: "教育法 · 教师法 · 义务教育法 · 未成年人保护",
    content: <S10 />,
  },
  {
    id: 'sec11',
    title: "心理健康教育与沟通合作",
    icon: "11",
    tag: "心理辅导 · 青春期教育 · 家校沟通",
    content: <S11 />,
  },
  {
    id: 'sec12',
    title: "教师自主发展 · 教育热点",
    icon: "12",
    tag: "专业成长 · 双减 · 五项管理 · 教育家精神",
    content: <S12 />,
  },
  {
    id: 'sec13',
    title: "记忆口诀速查总表",
    icon: "13",
    tag: "考前快速过一遍",
    content: <S13 />,
  },
  {
    id: 'sec14',
    title: "典型真题例题精讲",
    icon: "14",
    tag: "三大题型实战演练 · 先自测再对答案",
    content: <S14 />,
  },
]

/**
 * 模块页面。
 *
 * @returns 阅读页骨架。
 */
export default function Page(): ReactNode {
  if (!meta) return null
  return <ReadingPage meta={meta} sections={sections} scopeClass="legacy-comprehensive-d" />
}
