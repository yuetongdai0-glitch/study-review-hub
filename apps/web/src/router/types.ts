import type { ComponentType, LazyExoticComponent } from 'react'
import type { AccentName } from '@/theme/tokens'

/** 侧栏分组标识。 */
export type RouteGroup = 'reasoning' | 'quant' | 'essay' | 'common' | 'tools'

/**
 * 模块元信息。
 *
 * @remarks 侧栏、首页卡片、页面标题全部读这一份数据，避免三处各写一遍标题。
 */
export type ModuleMeta = {
  /** 稳定标识，用于埋点与 React key。 */
  name: string
  /** 绝对路径。 */
  path: string
  /** 菜单与卡片上显示的名称。 */
  title: string
  /** 一句话说明。 */
  description: string
  /** 侧栏分组。 */
  group: RouteGroup
  /** 科目强调色。 */
  accent: AccentName
  /** 首页卡片上的来源标签。 */
  source?: string
  /** 侧栏序号，首页按此排序。 */
  order: number
  /** 是否为练习工具（首页单独归类，不进侧栏阅读分组）。 */
  tool?: boolean
  /**
   * 首页不单独出卡片。
   *
   * @remarks 答题纸 / 答题卡已并入「草稿工作台」右上角入口，
   * 首页不必再各占一张卡；路由本身保留，书签与深链照旧可用。
   */
  homeHidden?: boolean
  /** 侧栏锚点列表；运行时从内容里读，静态页可留空。 */
  sections?: Array<{ id: string; title: string }>
}

/** 带懒加载组件的路由项。 */
export type AppRoute = ModuleMeta & {
  component: LazyExoticComponent<ComponentType>
}

/** 侧栏分组的中文标题。 */
export const groupTitles: Record<RouteGroup, string> = {
  reasoning: '行测 · 文科',
  quant: '行测 · 理科',
  essay: '综应',
  common: '常识',
  tools: '练习工具',
}
