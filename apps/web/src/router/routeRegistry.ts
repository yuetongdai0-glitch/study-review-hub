import { lazy } from 'react'
import { R, R_TOOL } from '@/router/routePaths'
import type { AppRoute, ModuleMeta } from '@/router/types'

/**
 * 全部阅读型模块的元信息。
 *
 * @remarks 顺序即首页卡片顺序与侧栏序号；改顺序只动这一个数组。
 */
export const moduleMetas: ModuleMeta[] = [
  {
    name: 'graphic-reasoning',
    path: R.graphicReasoning,
    title: '图形推理 3+3 体系',
    description: '位置、样式、数量、属性、立体五大规律，配 120+ 道真题与示意图',
    group: 'quant',
    accent: 'violet',
    source: '小黑体系',
    order: 1,
  },
  {
    name: 'quantitative',
    path: R.quantitative,
    title: '数量关系',
    description: '两大基石 + 通用四法 + 十八类题型，含几何、行程、经济利润等高频考点',
    group: 'quant',
    accent: 'cornflower',
    source: '超大杯',
    order: 2,
  },
  {
    name: 'data-analysis',
    path: R.dataAnalysis,
    title: '资料分析',
    description: '速算技巧、增长率与比重、平均数与倍数，按题型拆解解题步骤',
    group: 'quant',
    accent: 'ochre',
    source: '讲义',
    order: 3,
  },
  {
    name: 'verbal',
    path: R.verbal,
    title: '言语理解与表达',
    description: '逻辑填空、片段阅读、语句表达三大板块的解题模型与真题演练',
    group: 'reasoning',
    accent: 'blue',
    source: '讲义',
    order: 4,
  },
  {
    name: 'judgment',
    path: R.judgment,
    title: '判断推理知识图谱',
    description: '3+2 六大母题：假言、综合、真假话、朴素、知假求真、直言确定',
    group: 'reasoning',
    accent: 'teal',
    source: '判断推理',
    order: 5,
  },
  {
    name: 'analogy',
    path: R.analogy,
    title: '类比推理考点体系',
    description: '语义、逻辑、语法三大关系与 24 节拆分，每题都有干扰项解析',
    group: 'reasoning',
    accent: 'grass',
    source: '讲义',
    order: 6,
  },
  {
    name: 'words',
    path: R.words,
    title: '词语积累',
    description: '高频成语重排：分讲攒词、易混辨析、实词辨析与望文生义速查',
    group: 'reasoning',
    accent: 'grass',
    source: '雨菲',
    order: 7,
  },
  {
    name: 'comprehensive-a',
    path: R.comprehensiveA,
    title: '综应 A 类',
    description: '五件套解题结构：思维、方法、例题、推导、答题步骤逐层拆解',
    group: 'essay',
    accent: 'brick',
    source: '综应 A',
    order: 8,
  },
  {
    name: 'comprehensive-d',
    path: R.comprehensiveD,
    title: '综应 D 类',
    description: '教育类综合应用的答题框架、案例分析与规范表达',
    group: 'essay',
    accent: 'violet',
    source: '综应 D',
    order: 9,
  },
  {
    name: 'vocab',
    path: R.vocab,
    title: '综应A 规范词速查',
    description: '作答时随时查阅的规范表达，按问题、对策、意义等六类归集',
    group: 'essay',
    accent: 'teal',
    source: '速查手册',
    order: 10,
  },
  {
    name: 'politics',
    path: R.politics,
    title: '政治常识',
    description: '政治理论 + 常识判断全考点：先搭框架、再排坑、最后背数字',
    group: 'common',
    accent: 'brick',
    source: '小黑体系',
    order: 11,
  },
]

/**
 * 练习工具模块的元信息。
 *
 * @remarks 工具页是全屏交互页，不套阅读页的侧栏目录。
 * 答题纸与答题卡已并入「草稿工作台」的右上角入口（全屏打开），
 * 所以标 `homeHidden`：首页不再各占一张卡，但路由保留，书签/深链照旧。
 */
export const toolMetas: ModuleMeta[] = [
  {
    name: 'exam-grid',
    path: R_TOOL.examGrid,
    title: '模拟考试答题纸',
    description: '按考试格纸排版的作文与简答练习纸，支持自动保存与导出',
    group: 'tools',
    accent: 'blue',
    source: '练习',
    order: 12,
    tool: true,
    homeHidden: true,
  },
  {
    name: 'choice-quiz',
    path: R_TOOL.choiceQuiz,
    title: '选择题答题卡',
    description: '刷选择题并统计正确率与用时，支持标记与回看',
    group: 'tools',
    accent: 'teal',
    source: '练习',
    order: 13,
    tool: true,
    homeHidden: true,
  },
  {
    name: 'scratchpad',
    path: R_TOOL.scratchpad,
    title: '草稿工作台',
    description:
      '一站式答题草稿：白板手写与局部擦除 · 粘贴题目截图在图上画 · 右上角随时开选择题答题卡与格纸答题纸 · 自动保存与导出',
    group: 'tools',
    accent: 'ochre',
    source: '练习',
    order: 14,
    tool: true,
  },
]

/** 全部模块（阅读 + 工具），供首页与侧栏统一取用。 */
export const allModules: ModuleMeta[] = [...moduleMetas, ...toolMetas]

/** 全部路由项，组件按模块懒加载。 */
export const appRoutes: AppRoute[] = [
  {
    ...moduleMetas[0],
    component: lazy(() => import('@/pages/reading/graphic-reasoning')),
  },
  {
    ...moduleMetas[1],
    component: lazy(() => import('@/pages/reading/quantitative')),
  },
  {
    ...moduleMetas[2],
    component: lazy(() => import('@/pages/reading/data-analysis')),
  },
  {
    ...moduleMetas[3],
    component: lazy(() => import('@/pages/reading/verbal')),
  },
  {
    ...moduleMetas[4],
    component: lazy(() => import('@/pages/reading/judgment')),
  },
  {
    ...moduleMetas[5],
    component: lazy(() => import('@/pages/reading/analogy')),
  },
  {
    ...moduleMetas[6],
    component: lazy(() => import('@/pages/reading/words')),
  },
  {
    ...moduleMetas[7],
    component: lazy(() => import('@/pages/reading/comprehensive-a')),
  },
  {
    ...moduleMetas[8],
    component: lazy(() => import('@/pages/reading/comprehensive-d')),
  },
  {
    ...moduleMetas[9],
    component: lazy(() => import('@/pages/reading/vocab')),
  },
  {
    ...moduleMetas[10],
    component: lazy(() => import('@/pages/reading/politics')),
  },
  {
    ...toolMetas[0],
    component: lazy(() => import('@/pages/tools/exam-grid')),
  },
  {
    ...toolMetas[1],
    component: lazy(() => import('@/pages/tools/choice-quiz')),
  },
  {
    ...toolMetas[2],
    component: lazy(() => import('@/pages/tools/scratchpad')),
  },
]

/**
 * 按路径查模块元信息。
 *
 * @param path 当前路径。
 * @returns 匹配的模块；未匹配返回 undefined。
 */
export function findModuleByPath(path: string): ModuleMeta | undefined {
  const normalized = path.replace(/\/+$/, '') || '/'
  return allModules.find((item) => item.path === normalized)
}
