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
import S27 from './sections/s26'
import S28 from './sections/s27'
import S29 from './sections/s28'
import S30 from './sections/s29'
import S31 from './sections/e1'
import S32 from './sections/e2'
import S33 from './sections/e3'
import S34 from './sections/e4'
import S35 from './sections/e5'
import S36 from './sections/e6'
import S37 from './sections/b1'
import S38 from './sections/b2'
import S39 from './sections/b3'
import S40 from './sections/b4'
import S41 from './sections/b5'
import S42 from './sections/b6'
import S43 from './sections/b7'
import S44 from './sections/b8'
import S45 from './sections/b9'
import S46 from './sections/b10'
import S47 from './sections/b11'
import S48 from './sections/b12'
import S49 from './sections/b13'
import S50 from './sections/b14'
import S51 from './sections/b15'
import S52 from './sections/b16'
import S53 from './sections/sw'
import S54 from './sections/q62'
import S55 from './sections/idx'
import S56 from './sections/sidx'
import S57 from './sections/mis'
import S58 from './sections/strategy'
import ReadingPage from '@/components/features/ReadingPage'
import { findModuleByPath } from '@/router/routeRegistry'
import type { SectionContent } from '@/types/content'
import './module.css'

/** 该模块的元信息，缺失说明路由表与目录不同步。 */
const meta = findModuleByPath('/words')

/** 章节内容表：顺序即页面顺序，侧栏锚点由 ReadingPage 自动生成。 */
const sections: SectionContent[] = [
  {
    id: 'nav',
    title: "三步记词法 + 六大误用陷阱",
    icon: "📋",
    tag: "先看这页",
    content: <S1 />,
  },
  {
    id: 's1',
    title: "一、文明 · 传承",
    icon: "🏛️",
    tag: "最高频",
    content: <S2 />,
  },
  {
    id: 's2',
    title: "二、独特 · 守旧",
    icon: "🧱",
    tag: "高频",
    content: <S3 />,
  },
  {
    id: 's3',
    title: "三、秩序 · 推进",
    icon: "📐",
    tag: "高频",
    content: <S4 />,
  },
  {
    id: 's4',
    title: "四、危局 · 困顿",
    icon: "⚠️",
    tag: "高频",
    content: <S5 />,
  },
  {
    id: 's5',
    title: "五、兴起 · 衰落",
    icon: "🌱",
    tag: "超高频",
    content: <S6 />,
  },
  {
    id: 's6',
    title: "六、比较 · 地位",
    icon: "⚖️",
    tag: "超高频",
    content: <S7 />,
  },
  {
    id: 's7',
    title: "七、深浅 · 效果",
    icon: "👁️",
    tag: "高频",
    content: <S8 />,
  },
  {
    id: 's8',
    title: "八、方法 · 目的",
    icon: "🧭",
    tag: "超高频",
    content: <S9 />,
  },
  {
    id: 's9',
    title: "九、教化 · 言辞",
    icon: "🗣️",
    tag: "高频",
    content: <S10 />,
  },
  {
    id: 's10',
    title: "十、勤勉 · 治学",
    icon: "📚",
    tag: "高频",
    content: <S11 />,
  },
  {
    id: 's11',
    title: "十一、处世 · 担当",
    icon: "🤝",
    tag: "高频",
    content: <S12 />,
  },
  {
    id: 's12',
    title: "十二、反面 · 作风",
    icon: "🚩",
    tag: "高频",
    content: <S13 />,
  },
  {
    id: 's13',
    title: "十三、改过 · 变化",
    icon: "🔄",
    tag: "高频",
    content: <S14 />,
  },
  {
    id: 's14',
    title: "十四、趋势 · 顺逆",
    icon: "🌊",
    tag: "高频",
    content: <S15 />,
  },
  {
    id: 's15',
    title: "十五、人群 · 状态",
    icon: "🏙️",
    tag: "高频",
    content: <S16 />,
  },
  {
    id: 's16',
    title: "十六、热闹 · 混杂",
    icon: "👥",
    tag: "高频",
    content: <S17 />,
  },
  {
    id: 's17',
    title: "十七、风行 · 传播",
    icon: "📣",
    tag: "高频",
    content: <S18 />,
  },
  {
    id: 's18',
    title: "十八、消退 · 瓦解",
    icon: "🌫️",
    tag: "高频",
    content: <S19 />,
  },
  {
    id: 's19',
    title: "十九、显隐 · 态度",
    icon: "🔍",
    tag: "高频",
    content: <S20 />,
  },
  {
    id: 's20',
    title: "二十、轻重 · 知悉",
    icon: "📌",
    tag: "高频",
    content: <S21 />,
  },
  {
    id: 's21',
    title: "二十一、争论 · 评价",
    icon: "💬",
    tag: "超高频",
    content: <S22 />,
  },
  {
    id: 's22',
    title: "二十二、数量 · 比较",
    icon: "🔢",
    tag: "超高频",
    content: <S23 />,
  },
  {
    id: 's23',
    title: "二十三、技艺 · 观感",
    icon: "🎨",
    tag: "高频",
    content: <S24 />,
  },
  {
    id: 's24',
    title: "二十四、言辞 · 文风",
    icon: "✍️",
    tag: "高频",
    content: <S25 />,
  },
  {
    id: 's25',
    title: "二十五、家境 · 心境",
    icon: "🫧",
    tag: "高频",
    content: <S26 />,
  },
  {
    id: 's26',
    title: "二十六、品行 · 是非",
    icon: "⚔️",
    tag: "高频",
    content: <S27 />,
  },
  {
    id: 's27',
    title: "二十七、民生 · 关系",
    icon: "🏘️",
    tag: "高频",
    content: <S28 />,
  },
  {
    id: 's28',
    title: "二十八、对策 · 效果",
    icon: "🛠️",
    tag: "高频",
    content: <S29 />,
  },
  {
    id: 's29',
    title: "二十九、谋略 · 胆识",
    icon: "♟️",
    tag: "高频",
    content: <S30 />,
  },
  {
    id: 'e1',
    title: "补遗一 · 学习与认知（40 词）",
    icon: "🧠",
    tag: "高频",
    content: <S31 />,
  },
  {
    id: 'e2',
    title: "补遗二 · 数量与变化（31 词）",
    icon: "🔢",
    tag: "高频",
    content: <S32 />,
  },
  {
    id: 'e3',
    title: "补遗三 · 处境与对错（65 词）",
    icon: "⚖️",
    tag: "高频",
    content: <S33 />,
  },
  {
    id: 'e4',
    title: "补遗四 · 实词与比喻词（91 词）",
    icon: "🔤",
    tag: "易错",
    content: <S34 />,
  },
  {
    id: 'e5',
    title: "补遗五 · 成语剩余（66 词）",
    icon: "🧩",
    tag: "高频",
    content: <S35 />,
  },
  {
    id: 'e6',
    title: "补遗六 · 实词剩余组（48 组）",
    icon: "🔡",
    tag: "易错",
    content: <S36 />,
  },
  {
    id: 'b1',
    title: "辨析一 · 影响与感知",
    icon: "🔍",
    tag: "必考",
    content: <S37 />,
  },
  {
    id: 'b2',
    title: "辨析二 · 变化与兴衰",
    icon: "📈",
    tag: "必考",
    content: <S38 />,
  },
  {
    id: 'b3',
    title: "辨析三 · 差异与独特",
    icon: "🧩",
    tag: "必考",
    content: <S39 />,
  },
  {
    id: 'b4',
    title: "辨析四 · 紧迫与时机",
    icon: "⏰",
    tag: "必考",
    content: <S40 />,
  },
  {
    id: 'b5',
    title: "辨析五 · 强弱与取舍",
    icon: "🏆",
    tag: "必考",
    content: <S41 />,
  },
  {
    id: 'b6',
    title: "辨析六 · 方法与路径",
    icon: "🛠️",
    tag: "必考",
    content: <S42 />,
  },
  {
    id: 'b7',
    title: "辨析七 · 状态与关系",
    icon: "🔗",
    tag: "高频",
    content: <S43 />,
  },
  {
    id: 'b8',
    title: "辨析八 · 表达与评议",
    icon: "💬",
    tag: "高频",
    content: <S44 />,
  },
  {
    id: 'b9',
    title: "辨析九 · 虚词与否定",
    icon: "🔤",
    tag: "高频",
    content: <S45 />,
  },
  {
    id: 'b10',
    title: "辨析十 · 数量与混杂",
    icon: "🧮",
    tag: "超高频",
    content: <S46 />,
  },
  {
    id: 'b11',
    title: "辨析十一 · 传播与名气",
    icon: "📡",
    tag: "高频",
    content: <S47 />,
  },
  {
    id: 'b12',
    title: "辨析十二 · 程度与极端",
    icon: "🔥",
    tag: "高频",
    content: <S48 />,
  },
  {
    id: 'b13',
    title: "辨析十三 · 确定与评议",
    icon: "✅",
    tag: "高频",
    content: <S49 />,
  },
  {
    id: 'b14',
    title: "辨析十四 · 替代与庆贺",
    icon: "🎭",
    tag: "高频",
    content: <S50 />,
  },
  {
    id: 'b15',
    title: "辨析十五 · 差异与境界",
    icon: "🎯",
    tag: "高频",
    content: <S51 />,
  },
  {
    id: 'b16',
    title: "辨析十六 · 方法与成败",
    icon: "🧩",
    tag: "超高频",
    content: <S52 />,
  },
  {
    id: 'sw',
    title: "实词辨析 · 十八组（100 个高频实词）",
    icon: "🔤",
    tag: "易错",
    content: <S53 />,
  },
  {
    id: 'q62',
    title: "高频 62 题专练（每组一题 · 覆盖 200 组索引）",
    icon: "✍️",
    tag: "刷题区",
    content: <S54 />,
  },
  {
    id: 'idx',
    title: "成语辨析 200 组总索引（一句话锁死）",
    icon: "🗂️",
    tag: "全书目录",
    content: <S55 />,
  },
  {
    id: 'sidx',
    title: "实词 60 组 + 比喻类词语 10 组（一句话锁死）",
    icon: "📐",
    tag: "易错",
    content: <S56 />,
  },
  {
    id: 'mis',
    title: "望文生义 · 二十四例速查（考前扫一遍）",
    icon: "🕳️",
    tag: "必背",
    content: <S57 />,
  },
  {
    id: 'strategy',
    title: "考场三步辨词法（逻辑填空落笔前的 30 秒）",
    icon: "🎯",
    tag: "冲刺",
    content: <S58 />,
  },
]

/**
 * 模块页面。
 *
 * @returns 阅读页骨架。
 */
export default function Page(): ReactNode {
  if (!meta) return null
  return <ReadingPage meta={meta} sections={sections} scopeClass="legacy-words" />
}
