import { X } from 'lucide-react'
import { useEffect, type ReactNode } from 'react'

/**
 * 全屏浮层（固定定位，不参与任何布局）。
 *
 * @param props 组件属性。
 * @returns 覆盖视口的浮层。
 * @remarks
 * **为什么不用 antd Drawer**：
 * 用户多次反馈「抽屉不要影响布局」—— 打开材料视图/答题卡时，左边的内容会被顶上去。
 * 实测根因是 Drawer 的 `.ant-drawer-content-wrapper` 在展开动画里被写入
 * `transform: translateY(-180px)`（`height: 100dvh` 时垂直居中换算出的偏移），
 * 整层内容跟着上移；`scrollTop` 没变、宽度也没变，但**视口整体错位了**。
 *
 * 这个组件用 `position: fixed; inset: 0` 直接铺满视口：
 * - 不脱离文档流的尺寸计算，不改变任何祖先的滚动/布局；
 * - 没有 transform 动画，不会有位移漂移；
 * - 开关只是挂载/卸载，`overflow: hidden` 也不会去动 body 的滚动位置。
 *
 * 层级用 1000+，确保盖在草稿画布与其它抽屉之上。
 */
export default function FullScreenLayer({
  open,
  title,
  extra,
  onClose,
  children,
  /** z-index；同一时间叠多层时用。 */
  zIndex = 1000,
}: {
  /** 是否显示。 */
  open: boolean
  /** 顶部标题。 */
  title: string
  /** 标题右侧的说明文字。 */
  extra?: ReactNode
  /** 关闭回调。 */
  onClose: () => void
  /** 内容。 */
  children: ReactNode
  /** 层级。 */
  zIndex?: number
}) {
  /* Esc 关闭：浮层是全屏的，用户直觉上会按 Esc 退出。 */
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 flex flex-col bg-surface"
      style={{ zIndex }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="flex shrink-0 items-center gap-3 border-b border-line px-3 py-2">
        <b className="text-[13.5px] font-semibold text-ink">{title}</b>
        <span className="text-[11.5px] text-ink-3">{extra}</span>
        <button
          type="button"
          className="ml-auto grid h-7 w-7 cursor-pointer place-items-center rounded-md border-0 bg-transparent text-ink-2 hover:bg-sunken"
          onClick={onClose}
          aria-label="关闭"
        >
          <X size={15} />
        </button>
      </div>
      {/* 内容区自己管滚动：这里只限制高度，不引入第二层滚动。 */}
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </div>
  )
}
