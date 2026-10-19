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
import S23 from './sections/strategy'
import ReadingPage from '@/components/features/ReadingPage'
import { findModuleByPath } from '@/router/routeRegistry'
import type { SectionContent } from '@/types/content'
import './module.css'

/** 该模块的元信息，缺失说明路由表与目录不同步。 */
const meta = findModuleByPath('/quantitative')

/** 章节内容表：顺序即页面顺序，侧栏锚点由 ReadingPage 自动生成。 */
const sections: SectionContent[] = [
  {
    id: 'nav',
    title: "两大基石 + 通用四法 + 十八类题型",
    icon: "📋",
    tag: "总览",
    content: <S1 />,
  },
  {
    id: 's0',
    title: "零、速解四法（贯穿所有题型的方法）",
    icon: "⚡",
    tag: "先学这个",
    content: <S2 />,
  },
  {
    id: 's1',
    title: "一、倍数特性",
    icon: "🔢",
    tag: "首选武器",
    content: <S3 />,
  },
  {
    id: 's2',
    title: "二、方程法",
    icon: "✖️",
    tag: "兜底手段",
    content: <S4 />,
  },
  {
    id: 's3',
    title: "三、周期问题",
    icon: "🔄",
    tag: "高频",
    content: <S5 />,
  },
  {
    id: 's4',
    title: "四、工程问题",
    icon: "🏗️",
    tag: "超高频·易拿分",
    content: <S6 />,
  },
  {
    id: 's5',
    title: "五、几何问题",
    icon: "📐",
    tag: "超高频",
    content: <S7 />,
  },
  {
    id: 's6',
    title: "六、经济利润问题",
    icon: "💰",
    tag: "超高频",
    content: <S8 />,
  },
  {
    id: 's7',
    title: "七、容斥原理",
    icon: "⭕",
    tag: "高频",
    content: <S9 />,
  },
  {
    id: 's8',
    title: "八、最值问题",
    icon: "📊",
    tag: "高频",
    content: <S10 />,
  },
  {
    id: 's9',
    title: "九、数列问题",
    icon: "📈",
    tag: "中频",
    content: <S11 />,
  },
  {
    id: 's10',
    title: "十、行程问题",
    icon: "🚗",
    tag: "高频",
    content: <S12 />,
  },
  {
    id: 's11',
    title: "十一、排列组合",
    icon: "🎲",
    tag: "高频",
    content: <S13 />,
  },
  {
    id: 's12',
    title: "十二、概率问题",
    icon: "🎰",
    tag: "中频",
    content: <S14 />,
  },
  {
    id: 's13',
    title: "十三、年龄问题",
    icon: "👤",
    tag: "中频",
    content: <S15 />,
  },
  {
    id: 's14',
    title: "十四、溶液问题",
    icon: "🧪",
    tag: "中频",
    content: <S16 />,
  },
  {
    id: 's15',
    title: "十五、植树与方阵",
    icon: "🌳",
    tag: "低频",
    content: <S17 />,
  },
  {
    id: 's16',
    title: "十六、易拿分小题型",
    icon: "⚡",
    tag: "低频·秒杀",
    content: <S18 />,
  },
  {
    id: 's17',
    title: "十七、数字推理（数列推理）",
    icon: "🔎",
    tag: "事业编必考",
    content: <S19 />,
  },
  {
    id: 's18',
    title: "十八、时钟问题",
    icon: "🕰️",
    tag: "中频",
    content: <S20 />,
  },
  {
    id: 's19',
    title: "十九、抽屉原理与盈亏问题",
    icon: "🗄️",
    tag: "中频",
    content: <S21 />,
  },
  {
    id: 's20',
    title: "二十、统筹优化",
    icon: "⚙️",
    tag: "中频",
    content: <S22 />,
  },
  {
    id: 'strategy',
    title: "考场策略 & 猜题技巧",
    icon: "🎯",
    tag: "必看",
    content: <S23 />,
  },
]

/**
 * 模块页面。
 *
 * @returns 阅读页骨架。
 */
export default function Page(): ReactNode {
  if (!meta) return null
  return <ReadingPage meta={meta} sections={sections} scopeClass="legacy-quantitative" />
}
