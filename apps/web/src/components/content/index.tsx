import { ChevronDown } from 'lucide-react'
import { createContext, useContext, useState, type KeyboardEvent, type ReactNode } from 'react'

/**
 * 内容原语：整站阅读正文的唯一渲染层。
 *
 * @remarks 旧站每个页面各自复制一套 `.block/.example/.key-box`，细节逐渐分叉。
 * 这里把它们收敛成组件，页面只描述「这一段是什么」，不描述「长什么样」。
 * 样式表在 styles.css 的 components 层，类名与旧站保持一致，迁移期可直接替换。
 */

type ChildrenProps = {
  children: ReactNode
  className?: string
}

/**
 * 内容块：一个知识点 + 它的说明。
 *
 * @param props 子节点。
 * @returns 块容器。
 */
export function Block({ children, className }: ChildrenProps) {
  return <div className={className ? `block ${className}` : 'block'}>{children}</div>
}

/**
 * 块标题。
 *
 * @param props 标题文本。
 * @returns 带强调竖线的标题。
 */
export function BlockTitle({ children }: ChildrenProps) {
  return <div className="block-title">{children}</div>
}

/** 强调盒的语气。 */
export type CalloutVariant = 'formula' | 'key' | 'tip' | 'warn' | 'note'

/** 各语气对应的类名。 */
const CALLOUT_CLASS: Record<CalloutVariant, string> = {
  formula: 'formula-box',
  key: 'key-box',
  tip: 'tip-box',
  warn: 'warn-box',
  note: 'note-box',
}

/**
 * 强调盒。
 *
 * @param props 语气与内容。
 * @returns 左侧色条的提示块。
 */
export function Callout({ variant = 'note', children }: { variant?: CalloutVariant; children: ReactNode }) {
  return <div className={CALLOUT_CLASS[variant]}>{children}</div>
}

/**
 * 公式行。
 *
 * @param props 公式内容。
 * @returns 加大加粗的公式。
 */
export function Formula({ children }: ChildrenProps) {
  return <span className="formula">{children}</span>
}

/**
 * 要点列表。
 *
 * @param props `<li>` 子节点。
 * @returns 圆点列表。
 */
export function PointList({ children }: ChildrenProps) {
  return <ul className="point-list">{children}</ul>
}

/**
 * 次级说明。
 *
 * @param props 内容。
 * @returns 左侧虚线的补充说明。
 */
export function SubPoint({ children }: ChildrenProps) {
  return <div className="sub-point">{children}</div>
}

/**
 * 数据表。
 *
 * @param props 表格行；`compact` 为真时启用等宽数字。
 * @returns 与正文同宽的小表格。
 */
export function DataTable({
  children,
  className,
  numeric = false,
}: ChildrenProps & { numeric?: boolean }) {
  return <table className={['mini-table', numeric ? 'trig-table' : '', className ?? ''].filter(Boolean).join(' ')}>{children}</table>
}

/**
 * 例题「默认折叠」开关。
 *
 * @remarks 只有声明了这一层的页面才会折叠，其余页面的例题行为保持不变。
 * 用 Context 而不是给 `Example` 加属性，是因为全站有 170+ 处 `<Example>`，
 * 逐处加属性既容易漏，也让正文源码被样式细节污染。
 */
const CollapsibleContext = createContext(false)

/**
 * 单道例题的展开状态，供 `ExampleHeader` 读取。
 *
 * @remarks 为 `null` 时说明这道题不折叠，头部就是普通标题栏。
 */
const ToggleContext = createContext<{ open: boolean; toggle: () => void } | null>(null)

/**
 * 打开「例题默认折叠」。
 *
 * @param props 页面内容。
 * @returns 带折叠能力的子树。
 */
export function ExampleCollapsible({ children }: { children: ReactNode }) {
  return <CollapsibleContext.Provider value={true}>{children}</CollapsibleContext.Provider>
}

/**
 * 例题容器。
 *
 * @param props 例题各段。
 * @returns 带渐变标题栏的例题卡片；页面开启折叠时，默认只显示标题栏。
 */
export function Example({ children }: ChildrenProps) {
  const collapsible = useContext(CollapsibleContext)
  const [open, setOpen] = useState(false)
  if (!collapsible) return <div className="example">{children}</div>
  return (
    <ToggleContext.Provider value={{ open, toggle: () => setOpen((value) => !value) }}>
      <div className={open ? 'example example-fold is-open' : 'example example-fold'}>{children}</div>
    </ToggleContext.Provider>
  )
}

/**
 * 例题标题栏。
 *
 * @param props 标题与可选来源标签。
 * @returns 例题头部；所在例题可折叠时，整条标题栏即开关。
 */
export function ExampleHeader({ children, source }: { children: ReactNode; source?: ReactNode }) {
  const toggle = useContext(ToggleContext)

  if (!toggle) {
    return (
      <div className="example-header">
        <span>{children}</span>
        {source ? <span>{source}</span> : null}
      </div>
    )
  }

  /** 键盘可达：Enter / 空格 与点击等价。 */
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggle.toggle()
    }
  }

  return (
    <div
      className="example-header example-toggle"
      role="button"
      tabIndex={0}
      aria-expanded={toggle.open}
      onClick={toggle.toggle}
      onKeyDown={handleKeyDown}
    >
      <span>{children}</span>
      {source ? <span>{source}</span> : null}
      <span className="example-hint">{toggle.open ? '收起' : '展开'}</span>
      <ChevronDown size={14} className="example-caret" aria-hidden="true" />
    </div>
  )
}

/**
 * 例题正文容器。
 *
 * @param props 题干、选项与解析。
 * @returns 例题主体。
 */
export function ExampleBody({ children }: ChildrenProps) {
  return <div className="example-body">{children}</div>
}

/**
 * 题干。
 *
 * @param props 题面。
 * @returns 题干段落。
 */
export function ExampleQuestion({ children }: ChildrenProps) {
  return <div className="example-q">{children}</div>
}

/**
 * 选项行。
 *
 * @param props 选项文本。
 * @returns 自动换行的选项区。
 */
export function ExampleOptions({ children }: ChildrenProps) {
  return <div className="example-opts">{children}</div>
}

/**
 * 解析与答案。
 *
 * @param props 解析内容。
 * @returns 蓝底解析块。
 */
export function ExampleAnswer({ children }: ChildrenProps) {
  return <div className="example-answer">{children}</div>
}

/**
 * 答案高亮。
 *
 * @param props 答案文本。
 * @returns 绿色加粗文本。
 */
export function Correct({ children }: ChildrenProps) {
  return <span className="correct">{children}</span>
}

/**
 * 通用卡片（判断推理、综应页使用）。
 *
 * @param props 卡片内容与锚点 id。
 * @returns 白底卡片。
 */
export function Card({ children, id, className }: ChildrenProps & { id?: string }) {
  return (
    <div className={className ? `card ${className}` : 'card'} id={id}>
      {children}
    </div>
  )
}

/**
 * 练习卡（判断推理 `.ex` 系列）。
 *
 * @param props 卡片内容。
 * @returns 浅底练习块。
 */
export function ExerciseCard({ children, id }: ChildrenProps & { id?: string }) {
  return (
    <div className="ex" id={id}>
      {children}
    </div>
  )
}

/**
 * 练习卡标题。
 *
 * @param props 标题。
 * @returns 强调色小标题。
 */
export function ExerciseTitle({ children }: ChildrenProps) {
  return <div className="ex-t">{children}</div>
}

/**
 * 练习卡题干。
 *
 * @param props 题干。
 * @returns 题干段落。
 */
export function ExerciseQuestion({ children }: ChildrenProps) {
  return <div className="q">{children}</div>
}

/**
 * 练习卡答案。
 *
 * @param props 解析。
 * @returns 分隔线之上的解析。
 */
export function ExerciseAnswer({ children }: ChildrenProps) {
  return <div className="a">{children}</div>
}

/**
 * 示意图容器。
 *
 * @param props SVG 与图注。
 * @returns 浅蓝底图示块。
 */
export function Figure({ children, caption }: { children: ReactNode; caption?: ReactNode }) {
  return (
    <figure className="fig">
      {children}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

/**
 * 并排图示。
 *
 * @param props 多个 `Figure`。
 * @returns 可换行的图示行。
 */
export function FigureRow({ children }: ChildrenProps) {
  return <div className="fig-row">{children}</div>
}

/**
 * 行内标签。
 *
 * @param props 文本与色调。
 * @returns 小圆角标签。
 */
export function Badge({ children, tone = 'brand' }: { children: ReactNode; tone?: 'brand' | 'muted' }) {
  return <span className={tone === 'brand' ? 'badge' : 'badge bg-sunken text-ink-3'}>{children}</span>
}
