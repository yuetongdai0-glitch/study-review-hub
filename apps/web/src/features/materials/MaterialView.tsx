import { App, Button, Drawer, Input, Tooltip } from 'antd'
import {
  ArrowLeft,
  Eraser,
  FileText,
  ListChecks,
  NotebookPen,
  Pen,
  RotateCcw,
  Trash2,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import ChoiceSheet from '@/components/features/ChoiceSheet'
import ExamSheet from '@/components/features/ExamSheet'
import {
  clearAllNotes,
  deleteMaterial,
  getAllNotes,
  getMaterial,
  getScrollPage,
  listMaterials,
  putMaterial,
  putNotes,
  setScrollPage,
  type Material,
  type NoteStroke,
  type PptShape,
} from '@/features/materials/db'
import { closePdfDocument, detectKind, openPdfDocument, parseMaterial } from '@/features/materials/parse'

/** 预设色板（与草稿纸一致）。 */
const SWATCHES = ['#1f2329', '#c0392b', '#1f5fd6', '#0f766e', '#b45309', '#5b4bd6']
/** 笔宽范围。 */
const SIZE_MIN = 1
const SIZE_MAX = 16
/** 撤销上限（按页各存一份）。 */
const UNDO_MAX = 100
/** 相邻采样点最小间距。 */
const MIN_DIST = 0.7
/**
 * 安全区：视口上下各多留一屏的页数。
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
/**
 * 缩放范围与步进。
 *
 * @remarks 用户要「放大缩小」。上限只到 3 倍：
 * 再大 PDF 位图就会明显变糊（我们只按 1400px 宽渲染），不如不加。
 */
const ZOOM_MIN = 0.6
const ZOOM_MAX = 3
const ZOOM_STEP = 0.2

/** 工具。 */
type Tool = 'pen' | 'eraser'

/** 页面渲染状态：只有进入安全区的页才会被填内容。 */
type PageContent = { kind: 'loading' } | { kind: 'pdf'; url: string }

/**
 * 材料阅读 + 批注视图。
 *
 * @param props 组件属性。
 * @returns 材料列表，或某份材料的长条滚动阅读区。
 * @remarks
 * **与草稿纸的区别**：草稿纸只有一张无限画布；材料是多页且要跟随滚动。
 *
 * **渲染策略**：
 * 1. 导入时**不转位图**，只存原始文件 + 矢量内容（DOCX 的 HTML / PPTX 的文字块）；
 * 2. 打开时按「视口 + 上下各一屏安全区」决定渲染哪几页，离开安全区立即释放；
 * 3. 只有 PDF 需要位图，且只把安全区内的页画出来；
 * 4. DOCX / PPTX 是真实 DOM 文本，可选中、放大不糊，体积与页数几乎无关。
 *
 * 这样几百页的 PDF 也只常驻 3~5 页位图，内存可控。
 */
export default function MaterialView({
  open,
  onClose,
}: {
  /** 是否显示（外层用全屏 Drawer 承载）。 */
  open: boolean
  /** 关闭回调。 */
  onClose: () => void
}) {
  const { message, modal } = App.useApp()

  const [materials, setMaterials] = useState<Material[]>([])
  const [current, setCurrent] = useState<Material | null>(null)
  const [pendingFile, setPendingFile] = useState<{ file: File; name: string } | null>(null)
  const [importing, setImporting] = useState(false)

  /* 阅读态 */
  const [tool, setTool] = useState<Tool>('pen')
  const [color, setColor] = useState(SWATCHES[0])
  const [size, setSize] = useState(3)
  const [pages, setPages] = useState<Record<number, PageContent>>({})
  const [visiblePage, setVisiblePage] = useState(1)
  /** 安全区范围（含端点）。 */
  const [range, setRange] = useState<[number, number]>([0, 0])
  /** 缩放倍率（只影响显示，笔迹坐标永远在纸张基准坐标系里）。 */
  const [zoom, setZoom] = useState(1)
  /**
   * 材料内打开的答题卡 / 答题纸。
   *
   * @remarks 用户要求「大刷不要回到草稿纸界面，包括选择题、网格题打开的时候」——
   * 所以这两个浮层必须开在材料视图**内部**，关掉仍停在当前材料，
   * 绝不能让用户跳回草稿工作台。它们与草稿工作台共用同一份存档
   * （`choice-quiz:v1` / `exam-grid:v2`），只是显示位置不同。
   */
  const [quizOpen, setQuizOpen] = useState(false)
  const [examOpen, setExamOpen] = useState(false)

  const scrollRef = useRef<HTMLDivElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  /** 每页笔迹（页序 → 笔迹数组）。 */
  const notesRef = useRef<Map<number, NoteStroke[]>>(new Map())
  /** 每页撤销栈。 */
  const undoRef = useRef<Map<number, NoteStroke[][]>>(new Map())
  /** 每页批注画布引用。 */
  const canvasRefs = useRef<Map<number, HTMLCanvasElement>>(new Map())
  /** 正在画的笔。 */
  const currentRef = useRef<{ page: number; stroke: NoteStroke } | null>(null)
  const activeIdRef = useRef<number | null>(null)
  const scrollTimerRef = useRef(0)
  const lastSavedPageRef = useRef(0)
  /** 当前材料 id，用于异步回调里判断「还是不是同一份」。 */
  const currentIdRef = useRef('')
  /** 已创建但未释放的位图 URL（离开安全区时回收）。 */
  const urlsRef = useRef<Map<number, string>>(new Map())
  /** 已渲染中的页，防重复渲染。 */
  const renderingRef = useRef<Set<number>>(new Set())

  /* ---------------- 列表 ---------------- */

  const refresh = useCallback(async () => {
    setMaterials(await listMaterials())
  }, [])

  useEffect(() => {
    if (!open) return
    void refresh()
  }, [open, refresh])

  /* ---------------- 导入 ---------------- */

  /**
   * 选完文件先问名字。
   *
   * @param file 文件。
   * @returns 无返回。
   */
  const askName = useCallback(
    (file: File) => {
      if (!detectKind(file.name)) {
        message.error('只支持 PDF / DOCX / PPTX 三种格式')
        return
      }
      // 默认名 = 文件名去掉扩展名；用户可直接改，不改就用它。
      setPendingFile({ file, name: file.name.replace(/\.(pdf|docx|pptx)$/i, '') })
    },
    [message],
  )

  /**
   * 确认导入：只解析元数据 + 存原始文件（不转位图）。
   *
   * @returns 无返回。
   */
  const confirmImport = useCallback(async () => {
    const pending = pendingFile
    if (!pending) return
    const name = pending.name.trim() || pending.file.name.replace(/\.(pdf|docx|pptx)$/i, '')
    setPendingFile(null)
    setImporting(true)
    try {
      const parsed = await parseMaterial(pending.file)
      const material: Material = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name,
        fileName: pending.file.name,
        kind: parsed.kind,
        pageCount: parsed.pageCount,
        pageW: parsed.pageW,
        pageH: parsed.pageH,
        // 只存原始文件：体积 ≈ 源文件，不再随页数膨胀。
        file: pending.file,
        docxHtml: parsed.docxHtml,
        pptSlides: parsed.pptSlides,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }
      await putMaterial(material)
      await refresh()
      message.success(`已导入《${name}》，共 ${parsed.pageCount} 页`)
      setCurrent(material)
    } catch (error) {
      message.error(`导入失败：${error instanceof Error ? error.message : '未知错误'}`)
    } finally {
      setImporting(false)
    }
  }, [pendingFile, refresh, message])

  /* ---------------- 打开 / 关闭材料 ---------------- */

  /**
   * 打开一份材料。
   *
   * @param item 材料清单项。
   * @returns 无返回。
   */
  const openMaterial = useCallback(
    async (item: Material) => {
      // 列表里的项可能不含 file（早期数据），补一次完整读取。
      const full = item.file ? item : await getMaterial(item.id)
      if (!full) {
        message.error('这份材料的数据已丢失')
        return
      }
      const notes = await getAllNotes(full.id)
      notesRef.current = notes
      undoRef.current = new Map()
      canvasRefs.current.clear()
      currentRef.current = null
      renderingRef.current.clear()
      for (const url of urlsRef.current.values()) URL.revokeObjectURL(url)
      urlsRef.current.clear()
      currentIdRef.current = full.id
      setPages({})
      setRange([0, 0])
      setVisiblePage(1)
      setCurrent(full)
    },
    [message],
  )

  /* 离开材料时释放 PDF 文档与全部位图 URL。 */
  useEffect(
    () => () => {
      const id = currentIdRef.current
      if (id) void closePdfDocument(id)
      for (const url of urlsRef.current.values()) URL.revokeObjectURL(url)
      urlsRef.current.clear()
    },
    [],
  )

  /* ---------------- 按安全区渲染 ---------------- */

  /**
   * 渲染一页 PDF（只在安全区内调用）。
   *
   * @param index 页序。
   * @returns 无返回。
   */
  const renderPdfPage = useCallback(
    async (index: number) => {
      const material = current
      if (!material || material.kind !== 'pdf' || !material.file) return
      if (renderingRef.current.has(index) || urlsRef.current.has(index)) return
      renderingRef.current.add(index)
      const id = material.id
      setPages((prev) => ({ ...prev, [index]: { kind: 'loading' } }))
      try {
        const doc = await openPdfDocument(id, material.file)
        if (currentIdRef.current !== id) return
        const page = await doc.getPage(index + 1)
        const base = page.getViewport({ scale: 1 })
        // 按「目标像素宽」缩放，不按 PDF 原始点数 ×dpr：
        // A4 宽 595pt，×2.35 ≈1400px，看小字够清楚，也不至于每页几 MB。
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
        // 立刻释放位图与页面缓存，别让 canvas 占着几十 MB。
        page.cleanup()
        canvas.width = 0
        canvas.height = 0
        if (!blob) throw new Error('页面渲染失败')
        if (currentIdRef.current !== id) return
        const url = URL.createObjectURL(blob)
        urlsRef.current.set(index, url)
        setPages((prev) => ({ ...prev, [index]: { kind: 'pdf', url } }))
      } catch {
        // 渲染失败就留空，滚动重试时会再次尝试。
        setPages((prev) => {
          const next = { ...prev }
          delete next[index]
          return next
        })
      } finally {
        renderingRef.current.delete(index)
      }
    },
    [current],
  )

  /**
   * 释放安全区之外的页（回收位图 URL 与状态）。
   *
   * @param from 安全区起始页（含）。
   * @param to 安全区结束页（含）。
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

  /**
   * 按滚动位置更新「可视页 / 安全区」。
   *
   * @returns 无返回。
   */
  const syncRange = useCallback(() => {
    const material = current
    const scroller = scrollRef.current
    if (!material || !scroller) return
    const nodes = [...scroller.querySelectorAll<HTMLElement>('[data-page]')]
    if (!nodes.length) return
    const top = scroller.scrollTop
    const bottom = top + scroller.clientHeight

    // 可视页：取视口上方 1/3 处所在的页，比「完全可见的第一页」更符合阅读直觉。
    const line = top + scroller.clientHeight / 3
    let visible = 0
    for (const node of nodes) {
      if (node.offsetTop <= line) visible = Number(node.dataset.page) || 0
      else break
    }
    setVisiblePage(visible + 1)

    // 安全区：与视口相交的页再上下各扩 SAFE_PAGES 页。
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
    const to = Math.min(material.pageCount - 1, last + SAFE_PAGES)
    setRange((prev) => (prev[0] === from && prev[1] === to ? prev : [from, to]))

    if (visible !== lastSavedPageRef.current) {
      lastSavedPageRef.current = visible
      void setScrollPage(material.id, visible)
    }
  }, [current])

  /**
   * 滚动处理（节流 120ms）。
   *
   * @returns 无返回。
   */
  const onScroll = useCallback(() => {
    window.clearTimeout(scrollTimerRef.current)
    scrollTimerRef.current = window.setTimeout(syncRange, 120)
  }, [syncRange])

  /* 安全区变化：渲染进来的页，释放出去的页。 */
  useEffect(() => {
    const material = current
    if (!material) return
    const [from, to] = range
    if (material.kind === 'pdf') {
      for (let i = from; i <= to; i += 1) void renderPdfPage(i)
    }
    pruneOutside(from, to)
  }, [range, current, renderPdfPage, pruneOutside])

  /* 打开材料后：先同步安全区，再恢复上次滚动位置。 */
  useEffect(() => {
    const material = current
    if (!material) return
    const id = material.id
    // 等占位撑好高度（aspect-ratio 已定），再算安全区与恢复滚动。
    const timer = window.setTimeout(async () => {
      const scroller = scrollRef.current
      if (!scroller) return
      const saved = await getScrollPage(id)
      lastSavedPageRef.current = saved
      if (currentIdRef.current !== id) return
      if (saved > 0) {
        const target = scroller.querySelector<HTMLElement>(`[data-page="${saved}"]`)
        if (target) {
          /*
           * 必须 `behavior: 'instant'`：用户明确要求「不要过渡效果，直接定位」。
           * 用 smooth 会从顶部滑一大段，看起来像页面在乱跳。
           */
          scroller.scrollTo({ top: target.offsetTop, behavior: 'instant' as ScrollBehavior })
          setVisiblePage(saved + 1)
        }
      }
      syncRange()
    }, 80)
    return () => window.clearTimeout(timer)
  }, [current, syncRange])

  /* ---------------- 批注绘制 ---------------- */

  /**
   * 给上下文套上笔迹样式。
   *
   * @param ctx 上下文。
   * @param stroke 笔迹。
   * @returns 无返回。
   */
  function applyStyle(ctx: CanvasRenderingContext2D, stroke: NoteStroke) {
    ctx.save()
    ctx.globalCompositeOperation = stroke.t === 'eraser' ? 'destination-out' : 'source-over'
    ctx.strokeStyle = stroke.c
    ctx.fillStyle = stroke.c
    ctx.lineWidth = stroke.w
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
  }

  /**
   * 完整绘制一条笔迹。
   *
   * @param ctx 上下文。
   * @param stroke 笔迹。
   * @returns 无返回。
   */
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

  /**
   * 重绘某页全部批注。
   *
   * @param index 页序。
   * @returns 无返回。
   */
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

  /**
   * 落笔。
   *
   * @param event 指针事件。
   * @param index 页序。
   * @returns 无返回。
   */
  function onDown(event: React.PointerEvent<HTMLCanvasElement>, index: number) {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    if (activeIdRef.current !== null) return
    activeIdRef.current = event.pointerId
    const rect = event.currentTarget.getBoundingClientRect()
    const stroke: NoteStroke = {
      t: tool,
      c: color,
      w: tool === 'eraser' ? Math.max(16, size * 4) : size,
      p: [event.clientX - rect.left, event.clientY - rect.top],
    }
    currentRef.current = { page: index, stroke }
    const ctx = event.currentTarget.getContext('2d')
    if (ctx) drawStroke(ctx, stroke)
    try {
      event.currentTarget.setPointerCapture(event.pointerId)
    } catch {
      // 指针已失效。
    }
  }

  /**
   * 移动。
   *
   * @param event 指针事件。
   * @returns 无返回。
   */
  function onMove(event: React.PointerEvent<HTMLCanvasElement>) {
    const active = currentRef.current
    if (!active || event.pointerId !== activeIdRef.current) return
    const rect = event.currentTarget.getBoundingClientRect()
    const ctx = event.currentTarget.getContext('2d')
    if (!ctx) return
    const native = event.nativeEvent
    const coalesced = typeof native.getCoalescedEvents === 'function' ? native.getCoalescedEvents() : []
    const list = coalesced.length ? coalesced : [native]
    const stroke = active.stroke
    applyStyle(ctx, stroke)
    for (const item of list) {
      const x = item.clientX - rect.left
      const y = item.clientY - rect.top
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

  /**
   * 收笔并写库。
   *
   * @param event 指针事件。
   * @returns 无返回。
   */
  function onUp(event: React.PointerEvent<HTMLCanvasElement>) {
    const finished = currentRef.current
    if (!finished || event.pointerId !== activeIdRef.current) return
    activeIdRef.current = null
    currentRef.current = null
    if (finished.stroke.p.length < 2) return
    const index = finished.page
    const list = notesRef.current.get(index) ?? []
    list.push(finished.stroke)
    notesRef.current.set(index, list)
    const undo = undoRef.current.get(index) ?? []
    undo.push(list.slice(0, -1))
    if (undo.length > UNDO_MAX) undo.shift()
    undoRef.current.set(index, undo)
    void persistNotes(index)
  }

  /**
   * 把某页笔迹写入 IndexedDB。
   *
   * @param index 页序。
   * @returns 无返回。
   */
  async function persistNotes(index: number) {
    const material = current
    if (!material) return
    try {
      await putNotes(material.id, index, notesRef.current.get(index) ?? [])
    } catch {
      message.error('笔记保存失败（本地空间可能已满）')
    }
  }

  /**
   * 撤销某页最后一笔。
   *
   * @param index 页序。
   * @returns 无返回。
   */
  function undoPage(index: number) {
    const undo = undoRef.current.get(index) ?? []
    const previous = undo.pop()
    if (!previous) {
      message.info('这一页没有可撤销的笔记')
      return
    }
    undoRef.current.set(index, undo)
    notesRef.current.set(index, previous)
    redrawPage(index)
    void persistNotes(index)
  }

  /**
   * 清空某页笔记（可撤销）。
   *
   * @param index 页序。
   * @returns 无返回。
   */
  function clearPage(index: number) {
    const before = notesRef.current.get(index) ?? []
    if (!before.length) {
      message.info('这一页还没有笔记')
      return
    }
    const undo = undoRef.current.get(index) ?? []
    undo.push(before)
    undoRef.current.set(index, undo)
    notesRef.current.set(index, [])
    redrawPage(index)
    void persistNotes(index)
    message.success('已清空本页笔记，可用撤销找回')
  }

  /**
   * 一键清除**整份材料**的笔记（所有页）。
   *
   * @returns 无返回。
   * @remarks 与「清空本页」区分开：整份材料几百页时逐页清很折磨，
   * 用户明确要求一键清。材料文件本身绝不动，只清笔迹。
   */
  function clearEveryNote() {
    const material = current
    if (!material) return
    let total = 0
    for (const list of notesRef.current.values()) total += list.length
    if (!total) {
      message.info('这份材料还没有任何笔记')
      return
    }
    modal.confirm({
      title: '清除这份材料的全部笔记？',
      content: `共 ${notesRef.current.size} 页、${total} 笔。材料文件不会删除，只清手写笔记，且无法恢复。`,
      okText: '全部清除',
      cancelText: '取消',
      okButtonProps: { danger: true },
      onOk: async () => {
        try {
          await clearAllNotes(material.id)
          notesRef.current = new Map()
          undoRef.current = new Map()
          // 已挂载的画布要立刻擦干净，否则界面上还留着旧墨。
          for (const index of canvasRefs.current.keys()) redrawPage(index)
          message.success('已清除全部笔记')
        } catch {
          message.error('清除失败，请重试')
        }
      },
    })
  }

  /**
   * 调整缩放。
   *
   * @param delta 增量（正数放大）。
   * @returns 无返回。
   */
  function changeZoom(delta: number) {
    setZoom((prev) => {
      const next = Math.round((prev + delta) * 10) / 10
      return Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, next))
    })
  }

  /**
   * 跳到指定页。
   *
   * @param page 从 1 开始的页号。
   * @returns 无返回。
   */
  const jumpTo = useCallback((page: number) => {
    const scroller = scrollRef.current
    const target = scroller?.querySelector<HTMLElement>(`[data-page="${page - 1}"]`)
    if (!scroller || !target) return
    scroller.scrollTo({ top: target.offsetTop - 8, behavior: 'smooth' })
  }, [])

  const totalPages = current?.pageCount ?? 0

  /* ---------------- 列表视图 ---------------- */

  if (!current) {
    return (
      <div className="flex h-full flex-col bg-surface">
        <div className="flex flex-wrap items-center gap-2 border-b border-line px-3 py-2">
          <Button size="small" icon={<ArrowLeft size={14} />} onClick={onClose}>
            返回草稿
          </Button>
          <div className="ml-auto">
            <Button
              size="small"
              type="primary"
              icon={<FileText size={14} />}
              onClick={() => fileRef.current?.click()}
              loading={importing}
            >
              导入材料
            </Button>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept=".pdf,.docx,.pptx"
            hidden
            onChange={(event) => {
              const file = event.target.files?.[0]
              event.target.value = ''
              if (file) askName(file)
            }}
          />
        </div>

        <div className="min-h-0 flex-1 overflow-auto p-4">
          <div className="mx-auto max-w-[880px]">
            <h2 className="m-0 text-[19px] font-bold">导入材料</h2>
            <p className="mb-4 mt-1 text-[12.5px] leading-6 text-ink-3">
              支持 PDF / DOCX / PPTX。只保存原始文件、不预先转成图片：
              打开后按可视范围加载，滚到哪渲染到哪，几百页也不吃内存。
              可以直接在上面写笔记，下次打开回到上次那一页。
            </p>

            {materials.length === 0 ? (
              <div className="rounded-[12px] border border-dashed border-line-strong bg-white px-4 py-10 text-center text-[13px] text-ink-3">
                还没有导入材料。点右上角「导入材料」选一份 PDF / DOCX / PPTX。
              </div>
            ) : (
              <ul className="m-0 list-none p-0">
                {materials.map((item) => (
                  <li
                    key={item.id}
                    className="mb-2 flex items-center gap-3 rounded-[10px] border border-line bg-white px-3 py-2.5 transition hover:border-line-strong"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-sunken text-[11px] font-semibold uppercase text-ink-2">
                      {item.kind}
                    </span>
                    <button
                      type="button"
                      className="min-w-0 flex-1 cursor-pointer border-0 bg-transparent p-0 text-left"
                      onClick={() => void openMaterial(item)}
                    >
                      <b className="block truncate text-[13.5px] font-semibold text-ink">{item.name}</b>
                      <span className="mt-0.5 block truncate text-[11.5px] text-ink-3">
                        {item.pageCount} 页 · {item.fileName}
                        {item.file ? ` · ${(item.file.size / 1024 / 1024).toFixed(1)} MB` : ''}
                      </span>
                    </button>
                    <Button
                      size="small"
                      danger
                      type="text"
                      icon={<Trash2 size={13} />}
                      aria-label={`删除 ${item.name}`}
                      onClick={() =>
                        modal.confirm({
                          title: `删除《${item.name}》？`,
                          content: '材料文件与上面的笔记都会删除，无法恢复。',
                          okText: '删除',
                          cancelText: '取消',
                          okButtonProps: { danger: true },
                          onOk: async () => {
                            await deleteMaterial(item.id)
                            await refresh()
                          },
                        })
                      }
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* 命名弹窗 */}
        <Drawer
          open={Boolean(pendingFile)}
          placement="bottom"
          height={260}
          title="给这份材料起个名字"
          onClose={() => setPendingFile(null)}
          footer={
            <div className="flex justify-end gap-2">
              <Button onClick={() => setPendingFile(null)}>取消</Button>
              <Button type="primary" onClick={() => void confirmImport()} loading={importing}>
                导入
              </Button>
            </div>
          }
        >
          <p className="mb-2 mt-0 text-[12.5px] text-ink-3">
            不填就用文件名。名字只影响列表显示，原始文件名会作为副标题保留。
          </p>
          <Input
            autoFocus
            value={pendingFile?.name ?? ''}
            maxLength={60}
            placeholder={pendingFile?.file.name ?? ''}
            onChange={(event) =>
              setPendingFile((prev) => (prev ? { ...prev, name: event.target.value } : prev))
            }
            onPressEnter={() => void confirmImport()}
          />
          {pendingFile ? (
            <p className="mb-0 mt-2 text-[11.5px] text-ink-3">
              已选：{pendingFile.file.name}（{(pendingFile.file.size / 1024 / 1024).toFixed(1)} MB）
            </p>
          ) : null}
        </Drawer>
      </div>
    )
  }

  /* ---------------- 阅读 + 批注 ---------------- */

  const [rangeFrom, rangeTo] = range

  return (
    <div className="flex h-full flex-col bg-sunken">
      <style>{DOCX_PAGE_CSS}</style>
      {/* 工具条 */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 border-b border-line bg-surface px-2 py-2 sm:px-3">
        <Button size="small" icon={<ArrowLeft size={14} />} onClick={() => setCurrent(null)}>
          材料列表
        </Button>
        <b className="max-w-[22ch] truncate text-[13px] font-semibold">{current.name}</b>
        <span className="font-num text-[11.5px] tabular-nums text-ink-3">
          {visiblePage} / {totalPages}
        </span>
        <span className="hidden text-[11px] text-ink-3 sm:inline">
          安全区 {rangeFrom + 1}–{rangeTo + 1} 页
        </span>

        <span className="mx-0.5 hidden h-4 w-px bg-line sm:block" />

        <div className="flex items-center gap-1">
          <Tooltip title="画笔">
            <Button
              size="small"
              type={tool === 'pen' ? 'primary' : 'default'}
              icon={<Pen size={13} />}
              onClick={() => setTool('pen')}
            />
          </Tooltip>
          <Tooltip title="橡皮（只擦笔记，不擦材料）">
            <Button
              size="small"
              type={tool === 'eraser' ? 'primary' : 'default'}
              icon={<Eraser size={13} />}
              onClick={() => setTool('eraser')}
            />
          </Tooltip>
        </div>

        <div className="flex items-center gap-1">
          {SWATCHES.map((item) => (
            <button
              key={item}
              type="button"
              aria-label={`颜色 ${item}`}
              className="h-5 w-5 rounded-full"
              style={{ background: item, boxShadow: color === item ? '0 0 0 2px var(--accent)' : undefined }}
              onClick={() => {
                setColor(item)
                setTool('pen')
              }}
            />
          ))}
        </div>

        <div className="flex w-[132px] shrink-0 items-center gap-1.5">
          <span className="shrink-0 text-[11px] text-ink-3">笔粗</span>
          <input
            type="range"
            min={SIZE_MIN}
            max={SIZE_MAX}
            value={size}
            aria-label="笔粗"
            className="min-w-0 flex-1"
            onChange={(event) => setSize(Number(event.target.value))}
          />
          <span className="w-3 shrink-0 text-right font-num text-[11px] text-ink-3">{size}</span>
        </div>

        {/* 缩放：只影响显示，笔迹坐标始终在纸张基准坐标系里，缩放后不会错位 */}
        <div className="flex items-center gap-0.5">
          <Tooltip title="缩小">
            <Button
              size="small"
              icon={<ZoomOut size={13} />}
              disabled={zoom <= ZOOM_MIN}
              onClick={() => changeZoom(-ZOOM_STEP)}
              aria-label="缩小"
            />
          </Tooltip>
          <button
            type="button"
            className="min-w-[42px] cursor-pointer border-0 bg-transparent font-num text-[11.5px] tabular-nums text-ink-2"
            onClick={() => setZoom(1)}
            title="点击恢复 100%"
          >
            {Math.round(zoom * 100)}%
          </button>
          <Tooltip title="放大">
            <Button
              size="small"
              icon={<ZoomIn size={13} />}
              disabled={zoom >= ZOOM_MAX}
              onClick={() => changeZoom(ZOOM_STEP)}
              aria-label="放大"
            />
          </Tooltip>
        </div>

        <span className="mx-0.5 hidden h-4 w-px bg-line sm:block" />

        {/*
          答题卡 / 答题纸：直接开在材料视图内部，关掉仍停在这份材料。
          用户明确要求「大刷不要回到草稿纸界面」；两者与草稿工作台共用同一份存档。
        */}
        <div className="flex items-center gap-1">
          <Tooltip title="选择题答题卡（边看材料边记答案）">
            <Button
              size="small"
              icon={<ListChecks size={13} />}
              onClick={() => setQuizOpen(true)}
              aria-label="在材料里打开选择题答题卡"
            />
          </Tooltip>
          <Tooltip title="格纸答题纸（写申论/简答）">
            <Button
              size="small"
              icon={<NotebookPen size={13} />}
              onClick={() => setExamOpen(true)}
              aria-label="在材料里打开格纸答题纸"
            />
          </Tooltip>
        </div>

        <div className="ml-auto flex items-center gap-1">
          <Tooltip title="撤销本页最后一笔">
            <Button size="small" icon={<RotateCcw size={13} />} onClick={() => undoPage(visiblePage - 1)} />
          </Tooltip>
          <Tooltip title="清空本页笔记">
            <Button size="small" icon={<X size={13} />} onClick={() => clearPage(visiblePage - 1)} />
          </Tooltip>
          <Tooltip title="一键清除这份材料的全部笔记">
            <Button
              size="small"
              danger
              icon={<Eraser size={13} />}
              onClick={clearEveryNote}
              aria-label="一键清除全部笔记"
            />
          </Tooltip>
          <Button size="small" onClick={onClose}>
            关闭
          </Button>
        </div>
      </div>

      {/* 长条滚动阅读区 */}
      <div ref={scrollRef} className="min-h-0 flex-1 overflow-auto px-2 py-3 sm:px-4" onScroll={onScroll}>
        <div className="mx-auto flex max-w-[980px] flex-col gap-4">
          {Array.from({ length: totalPages }, (_, index) => {
            const inRange = index >= rangeFrom && index <= rangeTo
            const content = pages[index]
            return (
              /*
               * 缩放的两层结构（关键）：
               * - 外层 `.page-slot` 只负责占位：宽高 = 基准尺寸 × zoom，
               *   这样滚动条长度、安全区计算都跟着缩放走；
               * - 内层 `.page-sheet` 保持**基准尺寸**不动，用 transform 缩放。
               * 批注 canvas 的宽高始终等于基准尺寸，笔迹坐标因此在缩放前后完全一致，
               * 放大写字、缩小回看都不会错位。
               */
              <div
                key={index}
                data-page={index}
                className="page-slot relative mx-auto"
                style={{ width: `min(100%, ${current.pageW * zoom}px)`, aspectRatio: `${current.pageW} / ${current.pageH}` }}
              >
              <div
                className="page-sheet relative h-full w-full origin-top-left overflow-hidden rounded-[6px] border border-line-strong bg-white shadow-[0_1px_2px_rgba(16,24,40,.08),0_8px_22px_rgba(16,24,40,.09)]"
                style={{
                  // 内层按基准像素排版再整体缩放：canvas 内部坐标不变，笔迹才不会错位。
                  width: current.pageW,
                  height: current.pageH,
                  transform: `scale(${zoom})`,
                  transformOrigin: 'top left',
                }}
              >
                {/*
                  页码放纸张外侧（负 margin 的小标签），不压在材料内容上 ——
                  之前它在左上角盖住了 PPT 标题的第一个字。
                */}
                <div className="pointer-events-none absolute -left-9 top-0 z-10 hidden select-none font-num text-[11px] tabular-nums text-ink-3 sm:block">
                  {index + 1}
                </div>

                {/*
                  内容按格式分派：
                  - PDF 只有安全区内的页才有位图，其余显示占位，滚到再画；
                  - DOCX / PPTX 是真实 DOM 文本（矢量、可选中），才真正是「预览」。
                */}
                {current.kind === 'pdf' ? (
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
                ) : current.kind === 'docx' ? (
                  <div className="docx-page absolute inset-0 overflow-hidden bg-white">
                    <div
                      className="docx-viewport"
                      style={{ ['--docx-offset' as string]: `${index * (current.pageH - DOCX_PAD_Y)}px` }}
                      /* 内容来自用户自己的文档，且已由 mammoth 转成语义标签 */
                      dangerouslySetInnerHTML={{ __html: current.docxHtml ?? '' }}
                    />
                  </div>
                ) : (
                  <PptPage slides={current.pptSlides?.[index] ?? []} pageW={current.pageW} pageH={current.pageH} />
                )}

                {/* 批注层：笔迹只画这一层，橡皮只清这一层，材料永远不被擦掉 */}
                <canvas
                  ref={(node) => {
                    if (!node) return
                    const old = canvasRefs.current.get(index)
                    canvasRefs.current.set(index, node)
                    if (old === node) return
                    const dpr = Math.min(window.devicePixelRatio || 1, 2)
                    node.width = Math.max(1, Math.round(node.clientWidth * dpr))
                    node.height = Math.max(1, Math.round(node.clientHeight * dpr))
                    const ctx = node.getContext('2d')
                    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
                    redrawPage(index)
                  }}
                  className="absolute inset-0 h-full w-full touch-none"
                  style={{ cursor: tool === 'eraser' ? 'cell' : 'crosshair' }}
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

      {/* 快速跳页 */}
      <div className="flex items-center justify-center gap-2 border-t border-line bg-surface px-3 py-1.5">
        <span className="text-[11.5px] text-ink-3">跳到</span>
        <Input
          size="small"
          className="w-14 text-center"
          value={String(visiblePage)}
          onChange={(event) => {
            const next = Number(event.target.value.replace(/\D/g, ''))
            if (next >= 1 && next <= totalPages) jumpTo(next)
          }}
          aria-label="跳转到指定页"
        />
        <span className="text-[11.5px] text-ink-3">/ {totalPages} 页</span>
      </div>

      {/*
        材料内的答题卡与答题纸。
        **必须挂在材料视图内部**：用户明确要求「大刷不要回到草稿纸界面」——
        从材料点开做题，关掉后应该还在这份材料、这一页，而不是被弹回草稿工作台。
        两者与草稿工作台共用同一份存档（choice-quiz:v1 / exam-grid:v2），
        所以在哪边记的答案、写的作文，切过去都能看到。
      */}
      <Drawer
        title="选择题答题卡"
        placement="right"
        open={quizOpen}
        onClose={() => setQuizOpen(false)}
        mask={false}
        width="min(420px, 80vw)"
        destroyOnHidden
        styles={{ body: { padding: 12 } }}
        extra={<span className="text-[11.5px] text-ink-3">关掉回到材料</span>}
      >
        <ChoiceSheet compact />
      </Drawer>

      <Drawer
        title="格纸答题纸"
        placement="bottom"
        height="100dvh"
        open={examOpen}
        onClose={() => setExamOpen(false)}
        destroyOnHidden
        styles={{ body: { padding: 0, overflow: 'hidden' } }}
        extra={<span className="text-[11.5px] text-ink-3">关掉回到材料</span>}
      >
        <ExamSheet />
      </Drawer>
    </div>
  )
}

/**
 * PPT 单页预览。
 *
 * @param props 组件属性。
 * @returns 矢量排版的单页。
 * @remarks PPT 本质就是「坐标 + 文字」，直接按坐标摆回原位：
 * 比转位图清晰、可选中，体积也只有几 KB。
 */
function PptPage({ slides, pageW, pageH }: { slides: PptShape[]; pageW: number; pageH: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      <div
        className="absolute left-0 top-0 h-full w-full"
        style={{ containerType: 'size' } as React.CSSProperties}
      >
        {slides.map((shape, i) => (
          <div
            key={i}
            className="absolute text-[#1f2329]"
            style={{
              left: `${(shape.x / pageW) * 100}%`,
              top: `${(shape.y / pageH) * 100}%`,
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
const DOCX_PAGE_CSS = `
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
