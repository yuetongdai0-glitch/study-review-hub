import { App } from 'antd'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  getAllNotes,
  getMaterial,
  getScrollPage,
  putNotes,
  setScrollPage,
  type Material,
  type NoteStroke,
} from '@/features/materials/db'
import { closePdfDocument, openPdfDocument } from '@/features/materials/parse'
import { DOCX_PAGE_CSS, PptPage, toBasePoint } from '@/features/materials/PageRender'
import { readSession, readSpot, writePane, type PaneSide } from '@/features/materials/session'

/** 撤销上限（按页各存一份）。 */
const UNDO_MAX = 100
/** 相邻采样点最小间距。 */
const MIN_DIST = 0.7
/**
 * 安全区：视口上下各多留一屏。
 *
 * @remarks 用户原话是「可视范围内加安全区这样加载」。
 * 只渲染视口内那几页的话，快速滚动会看到空白；多留一屏既能提前画好，
 * 又不至于把几百页一次全画出来。
 */
const SAFE_PAGES = 1
/** PDF 渲染的目标像素宽。 */
const PDF_RASTER_W = 1400
/** DOCX 页面上下留白合计，切页时扣掉。 */
const DOCX_PAD_Y = 96

/** 页面渲染状态。 */
type PageContent = { kind: 'loading' } | { kind: 'pdf'; url: string }

/** 组件属性。 */
export type MaterialPaneProps = {
  /** 材料 id；空串表示这一栏没有材料。 */
  id: string
  /** 这一栏是哪边（决定滚动位置存哪）。 */
  side: PaneSide
  /** 缩放倍率。 */
  zoom: number
  /** 工具。 */
  tool: 'pen' | 'eraser'
  /** 笔色。 */
  color: string
  /** 笔粗。 */
  size: number
  /** 是否处于激活状态（双栏时高亮，快捷键作用于这里）。 */
  active: boolean
  /**
   * 是否允许手写批注。
   *
   * @remarks 关闭时是**只读**：滚动/缩放/翻页/看笔记都正常，画布不接笔。
   * 触屏设备默认关闭，避免手指划过就留下笔迹。
   */
  annotate: boolean
  /** 点进这一栏时通知外层切换激活。 */
  onActivate: () => void
  /** 页码变化（外层显示「3 / 197」）。 */
  onPageChange: (page: number, total: number) => void
  /** 材料载入完成（外层拿到标题）。 */
  onLoaded: (material: Material) => void
  /** 滚动位置变化（外层写入会话）。 */
  onScrollChange: (page: number, ratio: number) => void
  /** 撤销 / 重做的注册（外层快捷键调用）。 */
  onRegisterActions: (actions: { undo: () => void; redo: () => void; clearPage: () => void; clearAll: () => void }) => void
  /**
   * 进入序号：每次把材料放进这一栏就 +1。
   *
   * @remarks
   * 用来让「恢复阅读位置」的 effect 重新执行。
   * 组件是常驻的（材料视图靠 open 开关，不卸载），
   * 所以同一份材料切走再切回时，光看 `id` 无法察觉「又进了一次」。
   */
  enterKey?: number
}

/**
 * 单份材料的阅读 + 批注面板。
 *
 * @param props 组件属性。
 * @returns 可滚动、可写笔记的材料视图。
 * @remarks
 * 抽成组件是为了双材料并排：题目在左、答案在右，各自独立滚动、各自记位置。
 *
 * 三个必须守住的点：
 * 1. **每栏独立 ref / 独立状态**：滚动容器、canvas 表、笔迹表都不能共享，
 *    否则左右两栏会互相覆盖（滚动条一起动、笔记写到对面去）；
 * 2. **笔迹坐标固定在纸张基准坐标系**，缩放只在外层 transform，见 `toBasePoint`；
 * 3. **安全区按本栏滚动容器算**，不能拿 window 高度。
 */
export default function MaterialPane(props: MaterialPaneProps) {
  const {
    id,
    side,
    zoom,
    tool,
    color,
    size,
    active,
    annotate,
    onActivate,
    onPageChange,
    onLoaded,
    onScrollChange,
    onRegisterActions,
    enterKey = 0,
  } = props
  const { message } = App.useApp()

  const [material, setMaterial] = useState<Material | null>(null)
  const [pages, setPages] = useState<Record<number, PageContent>>({})
  const [visiblePage, setVisiblePage] = useState(1)
  const [range, setRange] = useState<[number, number]>([0, 0])
  /**
   * 实际生效的缩放 = min(zoom, 容器宽 / 基准宽)。
   *
   * @remarks 手机屏幕（390）比 A4 基准（595）窄，若只用 zoom 会把纸张画到屏幕外，
   * 表现为右侧被裁、还能横向拖动。这里让纸**至少完整放进容器**：
   * - 桌面宽屏：容器宽 ≥ 基准宽 × zoom → 用 zoom；
   * - 手机窄屏：容器宽不够 → 用「容器宽 / 基准宽」把它缩到刚好放下。
   * canvas 内部坐标系仍是基准像素，所以笔迹不会因此错位。
   */
  const [fitScale, setFitScale] = useState(1)
  /** 加载失败原因（材料被删、文件损坏）。 */
  const [error, setError] = useState('')

  const scrollRef = useRef<HTMLDivElement>(null)
  const notesRef = useRef<Map<number, NoteStroke[]>>(new Map())
  const undoRef = useRef<Map<number, NoteStroke[][]>>(new Map())
  const redoRef = useRef<Map<number, NoteStroke[][]>>(new Map())
  const canvasRefs = useRef<Map<number, HTMLCanvasElement>>(new Map())
  const currentRef = useRef<{ page: number; stroke: NoteStroke } | null>(null)
  const activeIdRef = useRef<number | null>(null)
  /**
   * 最后一次**改动笔记**的页（0 基）。
   *
   * @remarks
   * 用户反馈「Ctrl+Z 有时候是好的，有时候莫名其妙就不好使了」。
   *
   * 根因：撤销用的是 `visiblePage - 1`（当前可见页）。
   * 只要画完往下滚一点（哪怕只是翻到下一页看了眼），
   * 撤销就会作用到那个**没有笔迹的页**上，于是提示「这一页没有可撤销的笔记」，
   * 而真正画的那页纹丝不动 —— 用户感受就是"莫名其妙失效"。
   *
   * 正确语义：撤销跟随**你最后动过的那一页**，与滚动位置无关
   * （Word / Figma 等编辑器都是这样）。只有从没编辑过时才退回可见页。
   */
  const lastEditedPageRef = useRef(-1)
  const scrollTimerRef = useRef(0)
  const lastSavedPageRef = useRef(-1)
  const urlsRef = useRef<Map<number, string>>(new Map())
  const renderingRef = useRef<Set<number>>(new Set())
  /** 本栏已应用过「恢复位置」的 id，避免重复跳。 */
  const restoredForRef = useRef('')
  /** 上次写进会话的页码与比例（避免每帧都写 localStorage）。 */
  const lastSessionRef = useRef({ page: -1, ratio: -1 })
  /**
   * 上一次「一键清除全部」影响了哪些页。
   *
   * @remarks 撤销时需要把这些页一起补回来，否则只恢复当前页、
   * 其它页仍是空的（用户翻页就发现笔迹丢了）。
   */
  const lastClearAllRef = useRef<number[]>([])

  /* ---------------- 载入材料 ---------------- */

  useEffect(() => {
    if (!id) {
      setMaterial(null)
      setPages({})
      setError('')
      return
    }
    let cancelled = false
    void (async () => {
      const full = await getMaterial(id)
      if (cancelled) return
      if (!full) {
        setError('这份材料已被删除')
        return
      }
      const notes = await getAllNotes(id)
      if (cancelled) return
      notesRef.current = notes
      undoRef.current = new Map()
      redoRef.current = new Map()
      // 换材料：上一份的「最后编辑页」对新材料没有意义，必须清掉。
      lastEditedPageRef.current = -1
      canvasRefs.current.clear()
      renderingRef.current.clear()
      for (const url of urlsRef.current.values()) URL.revokeObjectURL(url)
      urlsRef.current.clear()
      setPages({})
      setRange([0, 0])
      setVisiblePage(1)
      setError('')
      setMaterial(full)
      onLoaded(full)
    })()
    return () => {
      cancelled = true
      // 换材料/卸载时释放这份 PDF 的文档缓存。
      void closePdfDocument(id)
      for (const url of urlsRef.current.values()) URL.revokeObjectURL(url)
      urlsRef.current.clear()
    }
    // onLoaded 每次渲染都是新函数，列进依赖会导致反复重载材料。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  /* ---------------- PDF 按安全区渲染 ---------------- */

  const renderPdfPage = useCallback(
    async (index: number) => {
      const target = material
      if (!target || target.kind !== 'pdf' || !target.file) return
      if (renderingRef.current.has(index) || urlsRef.current.has(index)) return
      renderingRef.current.add(index)
      setPages((prev) => ({ ...prev, [index]: { kind: 'loading' } }))
      try {
        const doc = await openPdfDocument(target.id, target.file)
        const page = await doc.getPage(index + 1)
        const base = page.getViewport({ scale: 1 })
        const scale = Math.min(2.6, PDF_RASTER_W / base.width)
        const viewport = page.getViewport({ scale })
        const canvas = document.createElement('canvas')
        canvas.width = Math.round(viewport.width)
        canvas.height = Math.round(viewport.height)
        const ctx = canvas.getContext('2d')
        if (!ctx) throw new Error('无法创建画布')
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        await page.render({ canvasContext: ctx, viewport }).promise
        const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/webp', 0.85))
        page.cleanup()
        canvas.width = 0
        canvas.height = 0
        if (!blob) throw new Error('页面渲染失败')
        const url = URL.createObjectURL(blob)
        urlsRef.current.set(index, url)
        setPages((prev) => ({ ...prev, [index]: { kind: 'pdf', url } }))
      } catch {
        setPages((prev) => {
          const next = { ...prev }
          delete next[index]
          return next
        })
      } finally {
        renderingRef.current.delete(index)
      }
    },
    [material],
  )

  /**
   * 释放安全区之外的页。
   *
   * @param from 起始页（含）。
   * @param to 结束页（含）。
   * @returns 无返回。
   */
  const pruneOutside = useCallback((from: number, to: number) => {
    for (const [index, url] of [...urlsRef.current.entries()]) {
      if (index >= from && index <= to) continue
      URL.revokeObjectURL(url)
      urlsRef.current.delete(index)
    }
    setPages((prev) => {
      const next: Record<number, PageContent> = {}
      let changed = false
      for (const [key, value] of Object.entries(prev)) {
        const index = Number(key)
        if (index >= from && index <= to) next[index] = value
        else changed = true
      }
      return changed ? next : prev
    })
  }, [])

  /* ---------------- 滚动 / 安全区 ---------------- */

  const syncRange = useCallback(() => {
    const target = material
    const scroller = scrollRef.current
    if (!target || !scroller) return
    const nodes = [...scroller.querySelectorAll<HTMLElement>('[data-page]')]
    if (!nodes.length) return
    const top = scroller.scrollTop
    const bottom = top + scroller.clientHeight

    /*
     * **页码与偏移必须用同一个基准（视口顶部）**，否则必然对不上：
     * 曾用「视口上方 1/3 处」判页码、用「视口顶部」算偏移 ——
     * 滚到 800px 时 1/3 线（1067）已经进了第 2 页（页顶 870），
     * 于是 visible=1，而偏移 (800-870)/842 是负数夹成 0，
     * 记下来就是「第 2 页的最顶上」，还原回 870px 而不是 800px。
     * 现在统一按视口顶部：`top - pageTop` 永远是 [0, 页高) 内。
     */
    let visible = 0
    let visibleRatio = 0
    for (const node of nodes) {
      const index = Number(node.dataset.page)
      if (node.offsetTop <= top + 1) {
        visible = index
        visibleRatio = Math.max(0, Math.min(1, (top - node.offsetTop) / (node.offsetHeight || 1)))
      } else break
    }
    setVisiblePage(visible + 1)
    onPageChange(visible + 1, target.pageCount)

    let first = visible
    let last = visible
    for (const node of nodes) {
      const index = Number(node.dataset.page)
      const nodeTop = node.offsetTop
      const nodeBottom = nodeTop + node.offsetHeight
      if (nodeBottom >= top && nodeTop <= bottom) {
        first = Math.min(first, index)
        last = Math.max(last, index)
      }
    }
    const from = Math.max(0, first - SAFE_PAGES)
    const to = Math.min(target.pageCount - 1, last + SAFE_PAGES)
    setRange((prev) => (prev[0] === from && prev[1] === to ? prev : [from, to]))

    /*
     * 页码与页内比例：**每次都写**，不能只在页码变化时写。
     * 早先只在 `visible !== lastSavedPageRef.current` 时写会话，
     * 于是在同一页里滚动（比如右栏 400px 仍在第 1 页）时 ratio 永远是 0，
     * 刷新后就被定位到这一页的最顶上 —— 用户看到的是「位置没记住」。
     * 这里只在**值真的变了**时落盘，避免每帧都写 localStorage。
     */
    const ratio = Math.max(0, Math.min(1, visibleRatio))
    if (visible !== lastSavedPageRef.current) {
      lastSavedPageRef.current = visible
      void setScrollPage(target.id, visible)
    }
    if (visible !== lastSessionRef.current.page || Math.abs(ratio - lastSessionRef.current.ratio) > 0.002) {
      lastSessionRef.current = { page: visible, ratio }
      writePane(side, { page: visible, ratio })
      onScrollChange(visible, ratio)
    }
  }, [material, onPageChange, onScrollChange, side])

  /* 容器宽度变化时重算 fitScale（旋转屏、双栏切换都会触发）。 */
  useEffect(() => {
    const scroller = scrollRef.current
    const target = material
    if (!scroller || !target) return
    const compute = () => {
      const pad = parseFloat(getComputedStyle(scroller).paddingLeft) + parseFloat(getComputedStyle(scroller).paddingRight)
      const avail = Math.max(80, scroller.clientWidth - pad)
      // 容器比「基准宽 × zoom」窄时，缩到刚好放下；否则用 zoom。
      const next = Math.min(zoom, avail / target.pageW)
      setFitScale(Math.round(next * 1000) / 1000)
    }
    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(scroller)
    return () => ro.disconnect()
  }, [material, zoom])

  const onScroll = useCallback(() => {
    window.clearTimeout(scrollTimerRef.current)
    scrollTimerRef.current = window.setTimeout(syncRange, 120)
  }, [syncRange])

  useEffect(() => {
    if (!material) return
    const [from, to] = range
    if (material.kind === 'pdf') {
      for (let i = from; i <= to; i += 1) void renderPdfPage(i)
    }
    pruneOutside(from, to)
  }, [range, material, renderPdfPage, pruneOutside])

  /*
   * 打开材料后恢复上次位置（会话优先，库里值校正）。
   *
   * ⚠️ 这个 effect **不能**依赖 `syncRange`：它依赖父组件传进来的
   * `onPageChange` / `onScrollChange`，而父组件每次渲染都会传新函数 →
   * effect 反复重建 → cleanup 里的 `cancelled = true` 把重试定时器全清掉，
   * 恢复永远跑不完（双栏时左栏尤其明显：先窄后宽会多次重排）。
   * 所以这里只依赖「材料 id + 哪一栏」，需要用到的最新函数放进 ref。
   */
  const syncRangeRef = useRef(syncRange)
  syncRangeRef.current = syncRange
  useEffect(() => {
    const target = material
    if (!target) return
    /*
     * 恢复守卫的键要带「进入序号」。
     *
     * 只用 `target.id` 不够：本组件是常驻的（靠 open 开关，不卸载），
     * 用户切走再切回**同一份材料**时组件没卸载、id 也没变，
     * 守卫直接 return，恢复就被永久跳过 —— 表现正是「切回来位置没保留」。
     * 所以外层每次 openInto 都要递增 enterKey，让这里重新跑一次。
     */
    const restoreKey = `${target.id}#${enterKey}`
    if (restoredForRef.current === restoreKey) return
    restoredForRef.current = restoreKey
    /*
     * 恢复位置必须**等到布局真的稳定**再跳。
     * 双栏时右栏是后挂载的，且页面占位高度依赖 aspect-ratio 与外层宽度，
     * 90ms 时 offsetTop 往往还是 0 / 旧值 —— 直接 scrollTo 会被夹到很小，
     * 表现就是「刷新后两栏都回到顶部」。
     * 这里轮询：直到目标页的 offsetHeight 连续两次一致，才认为布局稳定。
     */
    let cancelled = false
    const session = readSession()
    const own = session[side]
    const tryRestore = (attempt: number, lastH: number) => {
      if (cancelled) return
      const scroller = scrollRef.current
      if (!scroller) {
        if (attempt < 40) window.setTimeout(() => tryRestore(attempt + 1, lastH), 100)
        return
      }
      /*
       * 位置来源优先级：
       * ① `spots[本材料 id]` —— 按材料记的位置（切换材料再回来时靠它）；
       * ② 会话里本栏的记录 —— 仅当这一栏现在放的就是这份材料；
       * ③ `-1` 表示「没有记录」。
       *
       * 注意第 1 页的 page 就是 0，**不能拿 0 当「没记录」**：
       * 早先写成 `if (sessionPage > 0) jump(...)`，
       * 于是停在第一页中部（page=0, ratio=0.93）时永远不恢复，刷新必然回到顶部。
       */
      const spot = readSpot(target.id)
      const sessionPage = own.id === target.id ? own.page : spot ? spot.page : -1
      const sessionRatio = own.id === target.id ? own.ratio : spot ? spot.ratio : 0

      /*
       * ⚠️ 必须**先把目标页纳入渲染范围**，否则永远找不到它。
       *
       * 页面是懒渲染的：`range` 初值是 [0,0]，只渲染第 1 页。
       * 这里直接 querySelector('[data-page="6"]') 拿不到节点 ——
       * node 恒为 null，于是每 100ms 重试一次、40 次后放弃，静默回到顶部。
       */
      if (sessionPage >= 0) {
        const from = Math.max(0, sessionPage - SAFE_PAGES)
        const to = Math.min((target.pageCount || 1) - 1, sessionPage + SAFE_PAGES)
        setRange((prev) => (prev[0] === from && prev[1] === to ? prev : [from, to]))
      }

      const wantPage = sessionPage >= 0 ? sessionPage : 0
      const node = scroller.querySelector<HTMLElement>(`[data-page="${wantPage}"]`)
      const height = node?.offsetHeight ?? 0
      // 高度还没稳定（0 或变了）就再等一帧。
      if (!node || height === 0 || height !== lastH) {
        if (attempt < 40) window.setTimeout(() => tryRestore(attempt + 1, height), 100)
        return
      }
      const jump = (page: number, ratio: number) => {
        const el = scroller.querySelector<HTMLElement>(`[data-page="${page}"]`)
        if (!el) return false
        // 用户要求「不要过渡效果，直接定位」。
        scroller.scrollTo({ top: el.offsetTop + el.offsetHeight * ratio, behavior: 'instant' as ScrollBehavior })
        setVisiblePage(page + 1)
        return true
      }
      if (sessionPage >= 0) {
        lastSavedPageRef.current = sessionPage
        jump(sessionPage, sessionRatio)
        /*
         * 再补两次：跳转后 PDF 位图陆续到位、滚动条出现/消失都会改变
         * 容器的可用宽度 → 页高变化 → 浏览器可能把 scrollTop 夹回去。
         * 双栏时左栏更明显（先窄后宽），只跳一次会出现「右栏恢复了、左栏还在顶部」。
         */
        for (const delay of [180, 520, 1000]) {
          window.setTimeout(() => {
            if (cancelled) return
            const scroller2 = scrollRef.current
            const el = scroller2?.querySelector<HTMLElement>(`[data-page="${sessionPage}"]`)
            if (!scroller2 || !el) return
            const want = el.offsetTop + el.offsetHeight * sessionRatio
            // 只有在「明显偏离」时才重设，避免用户已经开始滚动后被拽回去。
            if (Math.abs(scroller2.scrollTop - want) > 24) {
              scroller2.scrollTo({ top: want, behavior: 'instant' as ScrollBehavior })
            }
          }, delay)
        }
      }
      void (async () => {
        const saved = await getScrollPage(target.id)
        if (cancelled) return
        lastSavedPageRef.current = saved
        // 会话里没记（首次升级/旧数据）时才用库里值兜底。
        if (saved > 0 && sessionPage < 0) jump(saved, 0)
        syncRangeRef.current()
      })()
    }
    const timer = window.setTimeout(() => tryRestore(0, -1), 80)
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [material, side, enterKey])

  /**
   * 缩放变化后重新锚定滚动位置。
   *
   * @remarks
   * 用户反馈「缩放后位置变了」。
   * 缩放只改 CSS transform，页高随之变化（基准高 × zoom），
   * 但 `scrollTop` 还是旧像素值 —— 同一个数字对应了不同内容，视口就漂了。
   * 这里在 zoom 变化后：先记下「当前页 + 页内比例」，等布局生效再按新页高还原。
   *
   * 用 `lastSessionRef` 的 page/ratio 作为锚点，因为它就是「用户当前看的位置」，
   * 不必再去读一遍 DOM（也避免缩放瞬间 DOM 正在重排、读到中间态）。
   */
  const zoomRef = useRef(zoom)
  useEffect(() => {
    const prev = zoomRef.current
    zoomRef.current = zoom
    if (prev === zoom) return
    /*
     * 锚点必须在**缩放生效前**冻结，而且不能直接读 `lastSessionRef`：
     * 缩放会改变页高 → 触发 onScroll → syncRange 立刻把 lastSessionRef 更新成
     * 「新布局下的当前位置」，等于锚点被覆盖，还原时反而跳走。
     * 这里在 zoom 变化的同一帧里，从 DOM 现算一次真实位置作为冻结锚点。
     */
    const anchor = (() => {
      const scroller = scrollRef.current
      if (!scroller) return { ...lastSessionRef.current }
      const top = scroller.scrollTop
      const nodes = [...scroller.querySelectorAll<HTMLElement>('[data-page]')]
      let page = 0
      let ratio = 0
      for (const node of nodes) {
        const index = Number(node.dataset.page)
        if (node.offsetTop <= top + 1) {
          page = index
          ratio = Math.max(0, Math.min(1, (top - node.offsetTop) / (node.offsetHeight || 1)))
        } else break
      }
      return { page, ratio }
    })()
    if (anchor.page < 0) return
    let cancelled = false
    const restore = (attempt: number) => {
      if (cancelled) return
      const scroller = scrollRef.current
      const node = scroller?.querySelector<HTMLElement>(`[data-page="${anchor.page}"]`)
      const height = node?.offsetHeight ?? 0
      // 等新布局（页高 = 基准 × 新 zoom）真正生效，再算目标位置。
      if (!scroller || !node || height === 0) {
        if (attempt < 20) window.setTimeout(() => restore(attempt + 1), 60)
        return
      }
      const want = node.offsetTop + height * anchor.ratio
      if (Math.abs(scroller.scrollTop - want) > 6) {
        scroller.scrollTo({ top: want, behavior: 'instant' as ScrollBehavior })
      }
    }
    restore(0)
    return () => {
      cancelled = true
    }
  }, [zoom])

  /* ---------------- 批注 ---------------- */

  function applyStyle(ctx: CanvasRenderingContext2D, stroke: NoteStroke) {
    ctx.save()
    ctx.globalCompositeOperation = stroke.t === 'eraser' ? 'destination-out' : 'source-over'
    ctx.strokeStyle = stroke.c
    ctx.fillStyle = stroke.c
    /*
     * 用原值：canvas 内部分辨率是「基准尺寸 × dpr」，与外层 zoom 无关，
     * 缩放由 CSS transform 在显示层完成，放大时整幅（含笔画）一起变粗才符合直觉。
     */
    ctx.lineWidth = stroke.w
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
  }

  function drawStroke(ctx: CanvasRenderingContext2D, stroke: NoteStroke) {
    const p = stroke.p
    if (p.length < 2) return
    applyStyle(ctx, stroke)
    if (p.length === 2) {
      ctx.beginPath()
      ctx.arc(p[0], p[1], stroke.w / 2, 0, Math.PI * 2)
      ctx.fill()
    } else {
      ctx.beginPath()
      ctx.moveTo(p[0], p[1])
      for (let i = 2; i < p.length; i += 2) ctx.lineTo(p[i], p[i + 1])
      ctx.stroke()
    }
    ctx.restore()
  }

  const redrawPage = useCallback((index: number) => {
    const canvas = canvasRefs.current.get(index)
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const dpr = canvas.width / (canvas.clientWidth || 1)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    for (const stroke of notesRef.current.get(index) ?? []) drawStroke(ctx, stroke)
  }, [])

  function onDown(event: React.PointerEvent<HTMLCanvasElement>, index: number) {
    onActivate()
    /*
     * 只读模式：**必须在最前面拦住**。
     * 不能只靠 CSS 的 pointer-events:none —— 那样画布不接收事件，
     * 手指滑动会被上层滚动容器接管，但这里仍要显式 return，
     * 保证「即使有残余指针事件也不会画出笔迹」。
     */
    if (!annotate) return
    if (event.pointerType === 'mouse' && event.button !== 0) return
    if (activeIdRef.current !== null) return
    activeIdRef.current = event.pointerId
    const canvas = event.currentTarget
    const start = toBasePoint(event, canvas)
    const stroke: NoteStroke = {
      t: tool,
      c: color,
      // 笔宽按缩放折算，否则放大后屏幕上的笔画会越来越粗。
      w: (tool === 'eraser' ? Math.max(16, size * 4) : size) / (zoom || 1),
      p: [start.x, start.y],
    }
    currentRef.current = { page: index, stroke }
    const ctx = canvas.getContext('2d')
    if (ctx) drawStroke(ctx, stroke)
    try {
      canvas.setPointerCapture(event.pointerId)
    } catch {
      // 指针已失效。
    }
  }

  function onMove(event: React.PointerEvent<HTMLCanvasElement>) {
    const activeStroke = currentRef.current
    if (!activeStroke || event.pointerId !== activeIdRef.current) return
    const canvas = event.currentTarget
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const native = event.nativeEvent
    const coalesced = typeof native.getCoalescedEvents === 'function' ? native.getCoalescedEvents() : []
    const list = coalesced.length ? coalesced : [native]
    const stroke = activeStroke.stroke
    applyStyle(ctx, stroke)
    for (const item of list) {
      const point = toBasePoint(item, canvas)
      const x = point.x
      const y = point.y
      const lx = stroke.p[stroke.p.length - 2]
      const ly = stroke.p[stroke.p.length - 1]
      if ((x - lx) ** 2 + (y - ly) ** 2 < MIN_DIST * MIN_DIST) continue
      ctx.beginPath()
      ctx.moveTo(lx, ly)
      ctx.lineTo(x, y)
      ctx.stroke()
      stroke.p.push(x, y)
    }
    ctx.restore()
  }

  function onUp(event: React.PointerEvent<HTMLCanvasElement>) {
    const finished = currentRef.current
    if (!finished || event.pointerId !== activeIdRef.current) return
    activeIdRef.current = null
    currentRef.current = null
    /*
     * 只点一下（没有移动）时 `p` 只有一个点。早先这里 `if (p.length < 2) return`
     * 直接丢弃，但画布上那个圆点已经画出来了 ——
     * 于是出现「明明有笔迹，撤销却说没有可撤销的笔记」。
     * 单点也是用户看得见的一笔，必须进栈；`drawStroke` 已支持单点绘制。
     */
    const index = finished.page
    const list = notesRef.current.get(index) ?? []
    list.push(finished.stroke)
    notesRef.current.set(index, list)
    const undo = undoRef.current.get(index) ?? []
    undo.push(list.slice(0, -1))
    if (undo.length > UNDO_MAX) undo.shift()
    undoRef.current.set(index, undo)
    // 画了新的一笔，之前的「重做」分支就作废了。
    redoRef.current.delete(index)
    // 记下「最后动的是这一页」，撤销跟着它走，而不是跟着滚动位置。
    lastEditedPageRef.current = index
    void persistNotes(index)
  }

  async function persistNotes(index: number) {
    const target = material
    if (!target) return
    try {
      await putNotes(target.id, index, notesRef.current.get(index) ?? [])
    } catch {
      message.error('笔记保存失败（本地空间可能已满）')
    }
  }

  const undoPage = useCallback(
    (index: number) => {
      const undo = undoRef.current.get(index) ?? []
      const previous = undo.pop()
      if (!previous) {
        message.info('这一页没有可撤销的笔记')
        return
      }
      undoRef.current.set(index, undo)
      /*
       * 撤销后「最后编辑页」落到这一页：
       * 否则连续按 Ctrl+Z 时，pickPage 每次都先问那页还有没有，
       * 一旦撤空又会跳去看别处，感觉像"撤销在页间乱跳"。
       */
      lastEditedPageRef.current = index
      const redo = redoRef.current.get(index) ?? []
      redo.push(notesRef.current.get(index) ?? [])
      if (redo.length > UNDO_MAX) redo.shift()
      redoRef.current.set(index, redo)
      notesRef.current.set(index, previous)
      redrawPage(index)
      void persistNotes(index)
      /*
       * 如果这次撤销正好对应「一键清除全部」，把所有被清空的页一起补回来。
       * `lastClearAllRef` 里记录了那次清除涉及的页；只要当前页在其中，
       * 就说明用户撤的是那次「全部清除」，其余页也要恢复。
       */
      const cleared = lastClearAllRef.current
      if (cleared.includes(index)) {
        lastClearAllRef.current = []
        for (const page of cleared) {
          if (page === index) continue
          const stack = undoRef.current.get(page) ?? []
          const snap = stack.pop()
          if (!snap) continue
          undoRef.current.set(page, stack)
          notesRef.current.set(page, snap)
          redrawPage(page)
          void persistNotes(page)
        }
      }
    },
    // persistNotes 依赖 material，这里跟着重建即可。
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [material, message, redrawPage],
  )

  const redoPage = useCallback(
    (index: number) => {
      const redo = redoRef.current.get(index) ?? []
      const next = redo.pop()
      if (!next) {
        message.info('这一页没有可重做的笔记')
        return
      }
      redoRef.current.set(index, redo)
      // 重做同理：之后继续按 Ctrl+Z 应该还作用在这一页。
      lastEditedPageRef.current = index
      const undo = undoRef.current.get(index) ?? []
      undo.push(notesRef.current.get(index) ?? [])
      if (undo.length > UNDO_MAX) undo.shift()
      undoRef.current.set(index, undo)
      notesRef.current.set(index, next)
      redrawPage(index)
      void persistNotes(index)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [material, message, redrawPage],
  )

  const clearPage = useCallback(
    (index: number) => {
      const before = notesRef.current.get(index) ?? []
      if (!before.length) {
        message.info('这一页还没有笔记')
        return
      }
      const undo = undoRef.current.get(index) ?? []
      undo.push(before)
      undoRef.current.set(index, undo)
      // 清空也是一次「改动」，撤销要回到这一页。
      lastEditedPageRef.current = index
      notesRef.current.set(index, [])
      redrawPage(index)
      void persistNotes(index)
      message.success('已清空本页笔记，可用撤销找回')
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [material, message, redrawPage],
  )

  /**
   * 清空本材料全部页的笔记（可撤销）。
   *
   * @returns 无返回。
   * @remarks
   * 用户投诉「一键清除之后 Ctrl+Z 撤不回来，还提示没有可撤销的笔记」。
   * 原因：这里只把数组清空、重绘，**根本没往撤销栈里压任何东西**。
   * 现在按页把「清除前的内容」压进各自的撤销栈，Ctrl+Z 就能一页页退回去。
   * 单个 Page 的撤销栈上限是 UNDO_MAX，这里只压一份快照，不会爆。
   */
  const clearAll = useCallback(() => {
    const touchedPages: number[] = []
    for (const [index, list] of notesRef.current.entries()) {
      if (!list.length) continue
      const undo = undoRef.current.get(index) ?? []
      // 压入「清除前」的完整快照。
      undo.push([...list])
      if (undo.length > UNDO_MAX) undo.shift()
      undoRef.current.set(index, undo)
      // 有内容被清掉的页，之前的重做分支作废。
      redoRef.current.delete(index)
      list.length = 0
      touchedPages.push(index)
    }
    for (const index of canvasRefs.current.keys()) redrawPage(index)
    /*
     * 记住这次「一键清除」影响了哪些页。
     * 撤销时要把**所有被清空的页**一起补回去 —— 否则只恢复当前页，
     * 别的页仍是已删状态，数据就不一致了（用户一翻页发现笔迹没了）。
     */
    lastClearAllRef.current = touchedPages
    /*
     * 「最后编辑页」指向被清的第一页：
     * 这样紧接着按 Ctrl+Z 时 pickPage 会选中它，从而走进
     * 「把其余被清页一起补回来」的分支。不设的话撤销可能落到别的页上，
     * 一键清除就只恢复一页，看起来像"撤不干净"。
     */
    if (touchedPages.length) lastEditedPageRef.current = touchedPages[0]
    return touchedPages
  }, [redrawPage])

  /* 把动作交给外层（快捷键在 View 层统一处理，双栏时才不会各抢一次）。 */
  useEffect(() => {
    /*
     * 撤销作用在哪一页？
     *
     * ① 优先「最后编辑过的那页」（`lastEditedPageRef`）—— 编辑器的通用语义，
     *    与当前滚到哪里无关；
     * ② 没编辑过才退回可见页；
     * ③ 万一那页的栈空了（刚撤到底），再**跨页**找有栈可撤的页兜底 ——
     *    否则用户撤到某页尽头后，明明别的页还有笔迹，却提示「没有可撤销的笔记」。
     */
    const pickPage = (stack: Map<number, NoteStroke[][]>): number => {
      const edited = lastEditedPageRef.current
      if (edited >= 0 && (stack.get(edited)?.length ?? 0) > 0) return edited
      const visible = visiblePage - 1
      if ((stack.get(visible)?.length ?? 0) > 0) return visible
      // 兜底：从后往前找第一个还有记录的页（新画的通常在靠后的地方）。
      const keys = [...stack.keys()].filter((key) => (stack.get(key)?.length ?? 0) > 0)
      if (!keys.length) return edited >= 0 ? edited : visible
      return Math.max(...keys)
    }

    onRegisterActions({
      undo: () => undoPage(pickPage(undoRef.current)),
      redo: () => redoPage(pickPage(redoRef.current)),
      clearPage: () => clearPage(visiblePage - 1),
      clearAll,
    })
  })

  const [rangeFrom, rangeTo] = range
  const totalPages = material?.pageCount ?? 0

  if (!id) {
    return (
      <div className="grid h-full place-items-center bg-sunken text-[12.5px] text-ink-3">
        <div className="text-center">
          <p className="m-0">这一栏还没有材料</p>
          <p className="mt-1">点右上角「打开材料」选一份</p>
        </div>
      </div>
    )
  }

  if (error) {
    return <div className="grid h-full place-items-center bg-sunken text-[12.5px] text-ink-3">{error}</div>
  }

  return (
    <div
      className="relative flex h-full min-h-0 flex-col bg-sunken"
      /*
       * 点击整个面板就激活这一栏（双栏时边框高亮、快捷键归它）。
       * 用 onPointerDown 而不是 onClick：画布已经 preventDefault，
       * click 在画布上不一定冒泡上来，指针按下更可靠。
       */
      onPointerDown={onActivate}
    >
      <style>{DOCX_PAGE_CSS}</style>
      {material ? (
        <div
          ref={scrollRef}
          className="material-scroll min-h-0 flex-1 overflow-auto px-2 py-3"
          style={{ ['--page-scale' as string]: fitScale } as React.CSSProperties}
          onScroll={onScroll}
        >
          <div className="mx-auto flex max-w-[980px] flex-col gap-4">
            {Array.from({ length: totalPages }, (_, index) => {
              const inRange = index >= rangeFrom && index <= rangeTo
              const content = pages[index]
              return (
                <div
                  key={index}
                  data-page={index}
                  className="page-slot relative mx-auto"
                  style={{
                    // 占位宽度必须与实际渲染宽度一致，否则滚动条长度和点按热区都会错。
                    width: `${material.pageW * fitScale}px`,
                    maxWidth: '100%',
                    aspectRatio: `${material.pageW} / ${material.pageH}`,
                  }}
                >
                  {/*
                    内层按**基准像素**排版，再整体 scale 到目标宽度。
                    `--fit` 是「容器可用宽度 / 基准宽度」，移动端屏幕比 A4 窄时它 < 1，
                    这样纸张会缩到刚好放下（不会溢出到屏幕外）；
                    桌面端 `--fit` = 1，缩放完全由 zoom 控制。
                    两者相乘就是最终 scale，canvas 内部坐标系始终是基准像素，笔迹不错位。
                  */}
                  <div
                    className="page-sheet relative h-full w-full origin-top-left overflow-hidden rounded-[6px] border border-line-strong bg-white shadow-[0_1px_2px_rgba(16,24,40,.08),0_8px_22px_rgba(16,24,40,.09)]"
                    style={{
                      width: material.pageW,
                      height: material.pageH,
                      transform: `scale(var(--page-scale, ${zoom}))`,
                      transformOrigin: 'top left',
                    }}
                  >
                    <div className="pointer-events-none absolute -left-9 top-0 z-10 hidden select-none font-num text-[11px] tabular-nums text-ink-3 sm:block">
                      {index + 1}
                    </div>

                    {material.kind === 'pdf' ? (
                      content?.kind === 'pdf' ? (
                        <img
                          src={content.url}
                          alt={`第 ${index + 1} 页`}
                          className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain"
                          draggable={false}
                          onLoad={() => redrawPage(index)}
                        />
                      ) : (
                        <div className="grid h-full place-items-center text-[12px] text-ink-3">
                          {inRange ? '正在渲染…' : '滚动到这一页时再渲染'}
                        </div>
                      )
                    ) : material.kind === 'docx' ? (
                      <div className="docx-page absolute inset-0 overflow-hidden bg-white">
                        <div
                          className="docx-viewport"
                          style={{ ['--docx-offset' as string]: `${index * (material.pageH - DOCX_PAD_Y)}px` }}
                          dangerouslySetInnerHTML={{ __html: material.docxHtml ?? '' }}
                        />
                      </div>
                    ) : (
                      <PptPage slides={material.pptSlides?.[index] ?? []} pageW={material.pageW} />
                    )}

                    <canvas
                      ref={(node) => {
                        if (!node) return
                        const old = canvasRefs.current.get(index)
                        canvasRefs.current.set(index, node)
                        /*
                         * 注意：给 canvas.width 赋值**会清空整块画布**。
                         * 所以只在「尺寸真的需要变」时才设，并且绝不能把 0 宽算进去 ——
                         * 切页/缩放瞬间 clientWidth 可能还是 0，
                         * 那时设成 1×1 会把笔迹全丢掉，但界面上的旧像素还留着，
                         * 于是出现「看得见笔迹、却怎么都撤不掉」的假象。
                         */
                        const dpr = Math.min(window.devicePixelRatio || 1, 2)
                        const w = Math.max(1, Math.round(node.clientWidth * dpr))
                        const h = Math.max(1, Math.round(node.clientHeight * dpr))
                        const invalid = node.clientWidth === 0 || node.clientHeight === 0
                        if (!invalid && (node.width !== w || node.height !== h)) {
                          node.width = w
                          node.height = h
                          const ctx = node.getContext('2d')
                          if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
                        }
                        // 无论尺寸有没有变，都重绘一次：新挂载的 canvas 是空白的。
                        if (old !== node) redrawPage(index)
                      }}
                      className="absolute inset-0 h-full w-full"
                      style={{
                        // 只读时不吃指针：让手指滑动直接落到滚动容器上（滚动手感更顺）。
                        pointerEvents: annotate ? 'auto' : 'none',
                        touchAction: annotate ? 'none' : 'auto',
                        cursor: annotate ? (tool === 'eraser' ? 'cell' : 'crosshair') : 'default',
                      }}
                      aria-label={`第 ${index + 1} 页批注画布`}
                      onPointerDown={(event) => onDown(event, index)}
                      onPointerMove={onMove}
                      onPointerUp={onUp}
                      onPointerCancel={onUp}
                    />
                  </div>
                </div>
              )
            })}
            <div className="py-6 text-center text-[12px] text-ink-3">已是最后一页（共 {totalPages} 页）</div>
          </div>
        </div>
      ) : (
        <div className="grid h-full place-items-center text-[12.5px] text-ink-3">正在打开材料…</div>
      )}

      {/* 激活态指示：双栏时能一眼看出快捷键作用在哪一栏 */}
      {active ? <div className="pointer-events-none absolute inset-0 border-2 border-brand/35" /> : null}
    </div>
  )
}
