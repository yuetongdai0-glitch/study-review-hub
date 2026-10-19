import { ChevronDown } from 'lucide-react'
import { createContext, useContext, useState, type ReactNode } from 'react'

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
 * 「答案与解析默认收起」开关。
 *
 * @remarks 只有声明了这一层的页面才收起答案，其余页面照常显示。
 * 用 Context 而不是给 `ExampleAnswer` 加属性，是因为全站有 170+ 处例题，
 * 逐处加属性既容易漏，也让正文源码被交互细节污染。
 *
 * **收起的只能是答案与解析**：题干和选项必须一直显示，否则就没法先自己做一遍。
 */
const AnswerCollapsibleContext = createContext(false)

/**
 * 打开「答案与解析默认收起」。
 *
 * @param props 页面内容。
 * @returns 带收起能力的子树。
 */
export function AnswerCollapsible({ children }: { children: ReactNode }) {
  return <AnswerCollapsibleContext.Provider value={true}>{children}</AnswerCollapsibleContext.Provider>
}

/**
 * 例题容器。
 *
 * @param props 例题各段。
 * @returns 带渐变标题栏的例题卡片。
 */
export function Example({ children }: ChildrenProps) {
  return <div className="example">{children}</div>
}

/**
 * 例题标题栏。
 *
 * @param props 标题与可选来源标签。
 * @returns 例题头部。
 */
export function ExampleHeader({ children, source }: { children: ReactNode; source?: ReactNode }) {
  return (
    <div className="example-header">
      <span>{children}</span>
      {source ? <span>{source}</span> : null}
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
 * @returns 蓝底解析块；页面开启收起时，默认换成「查看答案与解析」一行按钮。
 * @remarks 题干与选项不受影响，永远可见——先做再看，才有练的意义。
 */
export function ExampleAnswer({ children }: ChildrenProps) {
  const collapsible = useContext(AnswerCollapsibleContext)
  const [open, setOpen] = useState(false)

  if (!collapsible) return <div className="example-answer">{children}</div>

  return (
    <div className={open ? 'answer-fold is-open' : 'answer-fold'}>
      <button
        type="button"
        className="answer-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? '收起答案与解析' : '查看答案与解析'}</span>
        <ChevronDown size={13} className="answer-caret" aria-hidden="true" />
      </button>
      {open ? <div className="example-answer">{children}</div> : null}
    </div>
  )
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
