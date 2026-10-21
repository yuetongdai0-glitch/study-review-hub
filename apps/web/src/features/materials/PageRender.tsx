import type { PptShape } from '@/features/materials/db'

/**
 * 材料页渲染的共用件。
 *
 * @remarks 单栏与双栏并排都用这一套，避免两处各写一份导致「一边能选中、一边不能」。
 */

/**
 * PPT 单页预览。
 *
 * @param props 组件属性。
 * @returns 矢量排版的单页。
 * @remarks PPT 本质就是「坐标 + 文字」，直接按坐标摆回原位：
 * 比转位图清晰、可选中，体积也只有几 KB。
 */
export function PptPage({ slides, pageW }: { slides: PptShape[]; pageW: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      <div className="absolute left-0 top-0 h-full w-full" style={{ containerType: 'size' } as React.CSSProperties}>
        {slides.map((shape, i) => (
          <div
            key={i}
            className="absolute text-[#1f2329]"
            style={{
              left: `${(shape.x / pageW) * 100}%`,
              top: `${(shape.y / pageW) * 100}%`,
              width: `${Math.max(10, (shape.w / pageW) * 100)}%`,
              fontSize: `${(Math.max(9, shape.size) / pageW) * 100}cqw`,
              lineHeight: 1.45,
              fontWeight: shape.bold ? 600 : 400,
            }}
          >
            {/* 每个段落单独一行：PowerPoint 的换行是 a:p 分组，直接拼会糊成一片。 */}
            {shape.text.split('\n').map((line, li) => (
              <div key={li}>{line}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * DOCX 分页样式。
 *
 * @remarks 每页把同一份正文按页号做垂直偏移，只显示自己那一屏。
 * `left/right: 48px` 必须与 parse.ts 量高度时的可用宽度（页宽 - 96）一致，
 * 否则换行位置不同，跨页处会出现断字或重复。
 */
export const DOCX_PAGE_CSS = `
.docx-page .docx-viewport {
  position: absolute;
  top: 24px;
  left: 48px;
  right: 48px;
  transform: translateY(calc(-1 * var(--docx-offset, 0px)));
  font-size: 16px;
  line-height: 1.85;
}
.docx-page .docx-viewport h1 { font-size: 22px; font-weight: 700; margin: 0 0 12px; }
.docx-page .docx-viewport h2 { font-size: 18px; font-weight: 700; margin: 18px 0 10px; }
.docx-page .docx-viewport p { margin: 0 0 10px; }
.docx-page .docx-viewport table { border-collapse: collapse; width: 100%; }
.docx-page .docx-viewport td, .docx-page .docx-viewport th { border: 1px solid #d8dde5; padding: 6px 8px; }
.docx-page .docx-viewport img { max-width: 100%; height: auto; }
`.trim()

/**
 * 把指针的屏幕坐标换算成「纸张基准坐标系」里的坐标。
 *
 * @param event 指针事件（或原生事件）。
 * @param canvas 目标画布。
 * @returns `{ x, y }`，已还原缩放。
 * @remarks
 * **缩放后笔记错位的根因就在这里**：页面被 `transform: scale(zoom)` 缩放过，
 * `getBoundingClientRect()` 返回的是**屏幕上**的尺寸，而 canvas 内部坐标系
 * 始终是基准像素（A4 就是 595×842）。直接 `clientX - rect.left` 得到的是屏幕像素，
 * 放大 140% 时坐标就变成 1.4 倍，落笔位置整体偏向右下。
 *
 * 用 `rect.width / canvas.clientWidth` 反推比例（而不是引用 zoom 变量）：
 * `clientWidth` 不受 transform 影响，这个比值天然包含缩放、dpr、以及将来任何变换，
 * 除一下就能把屏幕坐标还原回基准坐标。
 */
export function toBasePoint(
  event: { clientX: number; clientY: number },
  canvas: HTMLCanvasElement,
): { x: number; y: number } {
  const rect = canvas.getBoundingClientRect()
  const scale = canvas.clientWidth > 0 ? rect.width / canvas.clientWidth : 1
  return {
    x: (event.clientX - rect.left) / (scale || 1),
    y: (event.clientY - rect.top) / (scale || 1),
  }
}
