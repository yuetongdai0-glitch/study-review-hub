import { type ReactNode } from 'react'
import Cd1 from './sections/cd1'
import Cd2 from './sections/cd2'
import Cd3 from './sections/cd3'
import Cd4 from './sections/cd4'
import Cd5 from './sections/cd5'
import Cd6 from './sections/cd6'
import Cd7 from './sections/cd7'
import Cd8 from './sections/cd8'
import Cd9 from './sections/cd9'
import Cd10 from './sections/cd10'
import Cd11 from './sections/cd11'
import ReadingPage from '@/components/features/ReadingPage'
import { findModuleByPath } from '@/router/routeRegistry'
import type { SectionContent } from '@/types/content'
import './module.css'

/** 该模块的元信息，缺失说明路由表与目录不同步。 */
const meta = findModuleByPath('/comprehensive-d')

/**
 * 章节内容表：顺序即页面顺序，侧栏锚点由 ReadingPage 自动生成。
 *
 * @remarks 一至七节严格按《2026 明哥综应理论背诵册》七部分顺序；
 * 八至十一节是配套的教育常识（教育学 / 教育心理学 / 教育法规 / 策略选择）。
 * 原有的 14 节已于 2026-11 整体替换，不要再加回来。
 */
const sections: SectionContent[] = [
  {
    id: 'cd1',
    title: '一、师德与职业理念',
    icon: '①',
    tag: '素质教育 · 新课改 · 师德 · 惩戒',
    content: <Cd1 />,
  },
  {
    id: 'cd2',
    title: '二、学生心理发展与教育',
    icon: '②',
    tag: '发展规律 · 差异 · 心理健康',
    content: <Cd2 />,
  },
  {
    id: 'cd3',
    title: '三、教学',
    icon: '③',
    tag: '概念 · 规律 · 原则 · 方法 · 环节',
    content: <Cd3 />,
  },
  {
    id: 'cd4',
    title: '四、德育',
    icon: '④',
    tag: '规律 · 原则 · 方法 · 品德不良',
    content: <Cd4 />,
  },
  {
    id: 'cd5',
    title: '五、班主任与班级管理',
    icon: '⑤',
    tag: '八项工作 · 班集体 · 突发事件',
    content: <Cd5 />,
  },
  {
    id: 'cd6',
    title: '六、家庭教育指导',
    icon: '⑥',
    tag: '家校沟通',
    content: <Cd6 />,
  },
  {
    id: 'cd7',
    title: '七、教师自主发展',
    icon: '⑦',
    tag: '三阶段 · 素养结构 · 调适',
    content: <Cd7 />,
  },
  {
    id: 'cd8',
    title: '八、教育常识 · 教育学',
    icon: '🎓',
    tag: '补充',
    content: <Cd8 />,
  },
  {
    id: 'cd9',
    title: '九、教育常识 · 教育心理学',
    icon: '🧠',
    tag: '补充',
    content: <Cd9 />,
  },
  {
    id: 'cd10',
    title: '十、教育常识 · 教育法律法规',
    icon: '📕',
    tag: '补充',
    content: <Cd10 />,
  },
  {
    id: 'cd11',
    title: '十一、教育常识 · 策略选择',
    icon: '🧩',
    tag: 'D 类特色题',
    content: <Cd11 />,
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
