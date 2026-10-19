/**
 * 路由路径常量。
 *
 * 所有跳转必须引用这里的常量，禁止在组件里手写字符串——
 * 否则改一次路径要在十几个文件里找。
 */

/** 首页。 */
export const R_HOME = '/'

/** 阅读型模块路径。 */
export const R = {
  graphicReasoning: '/graphic-reasoning',
  comprehensiveD: '/comprehensive-d',
  verbal: '/verbal',
  quantitative: '/quantitative',
  judgment: '/judgment',
  analogy: '/analogy',
  dataAnalysis: '/data-analysis',
  comprehensiveA: '/comprehensive-a',
  vocab: '/vocab',
  politics: '/politics',
  words: '/words',
} as const

/** 工具型模块路径。 */
export const R_TOOL = {
  examGrid: '/tools/exam-grid',
  choiceQuiz: '/tools/choice-quiz',
  scratchpad: '/tools/scratchpad',
} as const

/** 未匹配路径。 */
export const R_NOT_FOUND = '/404'

/**
 * 生成侧栏锚点链接（保留在当前章节内跳转）。
 *
 * @param anchor 章节或内容块 id。
 * @returns 形如 `#s3` 的锚点。
 */
export function anchor(anchorId: string): string {
  return `#${anchorId}`
}

/**
 * 去掉前导斜杠，供 React Router 嵌套路由使用。
 *
 * @param path 绝对路径。
 * @returns 相对路径。
 */
export function rel(path: string): string {
  return path.replace(/^\//, '')
}
