import type { ReactElement, ReactNode } from 'react'

/**
 * 记忆层原语：口诀 / 框架图 / 骨架总览。
 *
 * @remarks 用户反馈「学完了都不知道五位一体是哪五个、没有口诀、很乱」。
 * 正文只回答「这个知识点是什么」，这一层回答「**怎么记、记成几块**」：
 * - `Mnemonic` 口诀：一句押韵 + 拆解，解决「背不下来」；
 * - `Frame` 并列框架：N 个方面摊开成格子，解决「只见过名字、不知道里面是什么」；
 * - `FrameChain` 顺序链条：用 → 串起先后，解决「顺序题靠猜」；
 * - `Skeleton` 骨架表：左标签右内容，用来给整节做「一页纸地图」。
 *
 * 视觉只在 `module.css`（`.legacy-politics .mnemonic / .frame / .skeleton`）。
 */

/**
 * 口诀盒。
 *
 * @param props `title` 小标题（如「五位一体」）、`verse` 口诀正文、
 * `note` 逐字拆解，`hot` 为真时整句加粗提示高频。
 * @returns 带「口诀」角标的卡片。
 */
export function Mnemonic({
  title,
  verse,
  note,
  hot = false,
}: {
  title: string
  verse: ReactNode
  note?: ReactNode
  hot?: boolean
}): ReactElement {
  return (
    <div className="mnemonic" data-mnemonic={title}>
      <div className="mnemonic-head">{title}</div>
      <div className="mnemonic-body">
        <div className="mnemonic-verse" data-hot={hot ? '1' : '0'}>
          {verse}
        </div>
        {note ? <div className="mnemonic-note">{note}</div> : null}
      </div>
    </div>
  )
}

/** 框架格：一格 = 一个方面。 */
export type FrameCell = {
  /** 格子上方的大字（两三个字最好）。 */
  k: string
  /** 格子下方的解释。 */
  v: ReactNode
  /** 是否为高频考点，标红。 */
  hot?: boolean
}

/**
 * 并列框架图。
 *
 * @param props `cells` 各格内容、`caption` 图下说明。
 * @returns 自适应列数的小卡网格（手机两列）。
 */
export function Frame({ cells, caption }: { cells: FrameCell[]; caption?: ReactNode }): ReactElement {
  return (
    <>
      <div className="frame" data-cells={cells.length}>
        {cells.map((cell) => (
          <div key={cell.k} className={cell.hot ? 'frame-cell is-hot' : 'frame-cell'}>
            <span className="fc-k">{cell.k}</span>
            <span className="fc-v">{cell.v}</span>
          </div>
        ))}
      </div>
      {caption ? <div className="frame-cap">{caption}</div> : null}
    </>
  )
}

/**
 * 顺序链条：`节点 → 节点 → 节点`。
 *
 * @param props `nodes` 依次排列的节点文本、`caption` 链条下方说明。
 * @returns 可换行、不横向滚动的链条。
 */
export function FrameChain({ nodes, caption }: { nodes: string[]; caption?: ReactNode }): ReactElement {
  return (
    <>
      <div className="frame-chain" data-nodes={nodes.length}>
        {nodes.map((node, i) => (
          <span key={`${node}-${i}`} style={{ display: 'contents' }}>
            {i > 0 ? <span className="arrow">→</span> : null}
            <span className="node">{node}</span>
          </span>
        ))}
      </div>
      {caption ? <div className="frame-cap">{caption}</div> : null}
    </>
  )
}

/**
 * 本节记忆图：把口诀与框架打包在每节开头。
 *
 * @remarks **故意不用 `Block` / `BlockTitle`**：结构测试要求「每个知识点块后紧跟例题」，
 * 记忆图不是知识点、后面也没有例题，用块会让那条断言误判。
 * 这里用独立容器，视觉上仍是「节内小标题 + 卡片」。
 * @param props `title` 小标题、`sub` 一句导语。
 * @returns 带浅蓝描边的记忆卡容器。
 */
export function Memo({
  title = '本节记忆图',
  sub,
  children,
}: {
  title?: string
  sub?: ReactNode
  children: ReactNode
}): ReactElement {
  return (
    <div className="memo">
      <div className="memo-head">
        <span className="memo-tag">📌 记忆</span>
        <span className="memo-title">{title}</span>
      </div>
      {sub ? <div className="memo-sub">{sub}</div> : null}
      <div className="memo-body">{children}</div>
    </div>
  )
}

/**
 * 骨架表：左侧固定小标签，右侧一行说明。
 *
 * @param props `rows` 为 `[标签, 内容]` 二元组数组。
 * @returns 紧凑的对照表。
 */
export function Skeleton({ rows }: { rows: [string, ReactNode][] }): ReactElement {
  return (
    <div className="skeleton">
      {rows.map(([key, val]) => (
        <div className="skeleton-row" key={key}>
          <div className="skeleton-key">{key}</div>
          <div className="skeleton-val">{val}</div>
        </div>
      ))}
    </div>
  )
}
