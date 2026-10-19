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
import S12 from './sections/s11'
import S13 from './sections/s12'
import S14 from './sections/s13'
import S15 from './sections/s14'
import S16 from './sections/s15'
import S17 from './sections/s16'
import S18 from './sections/s17'
import S19 from './sections/s18'
import S20 from './sections/s19'
import S21 from './sections/s20'
import S22 from './sections/s21'
import S23 from './sections/s22'
import S24 from './sections/s23'
import S25 from './sections/s24'
import S26 from './sections/s25'
import ReadingPage from '@/components/features/ReadingPage'
import { findModuleByPath } from '@/router/routeRegistry'
import type { SectionContent } from '@/types/content'
import './module.css'

/** 该模块的元信息，缺失说明路由表与目录不同步。 */
const meta = findModuleByPath('/politics')

/** 章节内容表：顺序即页面顺序，侧栏锚点由 ReadingPage 自动生成。 */
const sections: SectionContent[] = [
  {
    id: 'nav',
    title: "资料地图 + 考情 + 三遍法",
    icon: "📋",
    tag: "总览",
    content: <S1 />,
  },
  {
    id: 's1',
    title: "一、习近平新时代中国特色社会主义思想 · 总论",
    icon: "🚩",
    tag: "政治理论必考",
    content: <S2 />,
  },
  {
    id: 's2',
    title: "二、分论（上）：党的领导 · 人民 · 高质量发展 · 民主 · 文化民生",
    icon: "🏛️",
    tag: "高频",
    content: <S3 />,
  },
  {
    id: 's3',
    title: "三、分论（下）：生态 · 改革 · 法治 · 治党 · 科教 · 安全 · 国防 · 统一 · 外交",
    icon: "🌏",
    tag: "高频",
    content: <S4 />,
  },
  {
    id: 's4',
    title: "四、马克思主义基本原理 · 哲学",
    icon: "🧠",
    tag: "概念题重灾区",
    content: <S5 />,
  },
  {
    id: 's5',
    title: "五、马克思主义政治经济学",
    icon: "💰",
    tag: "记住「谁决定谁」",
    content: <S6 />,
  },
  {
    id: 's6',
    title: "六、历史常识 · 古代",
    icon: "🏺",
    tag: "顺序 + 对应",
    content: <S7 />,
  },
  {
    id: 's7',
    title: "七、历史常识 · 近现代与党史",
    icon: "📜",
    tag: "党史必考",
    content: <S8 />,
  },
  {
    id: 's8',
    title: "八、文学常识",
    icon: "📖",
    tag: "人物—作品—名句",
    content: <S9 />,
  },
  {
    id: 's9',
    title: "九、文化常识：诸子 · 科技 · 医学 · 称谓 · 建筑书画 · 戏曲节日",
    icon: "🏮",
    tag: "量最大",
    content: <S10 />,
  },
  {
    id: 's10',
    title: "十、物理常识",
    icon: "⚛️",
    tag: "生活解释题",
    content: <S11 />,
  },
  {
    id: 's11',
    title: "十一、化学常识",
    icon: "🧪",
    tag: "记元素与俗称",
    content: <S12 />,
  },
  {
    id: 's12',
    title: "十二、生物与医学常识",
    icon: "🧬",
    tag: "性价比高",
    content: <S13 />,
  },
  {
    id: 's13',
    title: "十三、生活常识与高新技术",
    icon: "🚀",
    tag: "航天必考",
    content: <S14 />,
  },
  {
    id: 's14',
    title: "十四、经济常识",
    icon: "📈",
    tag: "概念 + 反向推理",
    content: <S15 />,
  },
  {
    id: 's15',
    title: "十五、地理常识",
    icon: "🌍",
    tag: "「最」与「线」",
    content: <S16 />,
  },
  {
    id: 's16',
    title: "十六、民法（民法典）",
    icon: "⚖️",
    tag: "数字最多",
    content: <S17 />,
  },
  {
    id: 's17',
    title: "十七、刑法",
    icon: "🚔",
    tag: "年龄 + 形态",
    content: <S18 />,
  },
  {
    id: 's18',
    title: "十八、行政法",
    icon: "🏢",
    tag: "期限 + 主体",
    content: <S19 />,
  },
  {
    id: 's19',
    title: "十九、宪法与法理学",
    icon: "📕",
    tag: "职位 + 比例",
    content: <S20 />,
  },
  {
    id: 's20',
    title: "二十、数字与「第一 / 最」速记（考前 30 分钟）",
    icon: "🔢",
    tag: "冲刺专用",
    content: <S21 />,
  },
  {
    id: 's21',
    title: "二十一、易混排坑对照表（小黑排坑手册精华）",
    icon: "🕳️",
    tag: "错题本",
    content: <S22 />,
  },
  {
    id: 's22',
    title: "二十二、考场策略与 21 天计划",
    icon: "🎯",
    tag: "收尾",
    content: <S23 />,
  },
  {
    id: 's23',
    title: "二十三、专项提升补漏（提升课独有的高频考点）",
    icon: "🧩",
    tag: "查漏",
    content: <S24 />,
  },
  {
    id: 's24',
    title: "二十四、「十五五」规划与 2026 年重要政策",
    icon: "🗂️",
    tag: "今年必考",
    content: <S25 />,
  },
  {
    id: 's25',
    title: "二十五、2026 时政热点盘点（1–8 月）",
    icon: "📰",
    tag: "时政",
    content: <S26 />,
  },
]

/**
 * 模块页面。
 *
 * @returns 阅读页骨架。
 */
export default function Page(): ReactNode {
  if (!meta) return null
  return <ReadingPage meta={meta} sections={sections} scopeClass="legacy-politics" />
}
