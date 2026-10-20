import { App, Button, Modal, Select, Slider, Tooltip } from 'antd'
import { Download, Eraser, Pen, RotateCcw, RotateCw, Trash2 } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useSectionStore } from '@/store/sectionStore'
import type { NavSection } from '@/types/content'

/** 笔迹存档键。 */
const STROKE_KEY = 'scratchpad:v1'
/** 工具偏好键（与笔迹分开：笔迹可能被裁剪，偏好不能丢）。 */
const PREF_KEY = 'scratchpad:prefs:v1'
/** 撤销步数上限。 */
const MAX_UNDO = 300
/** 笔迹条数上限。 */
const MAX_STROKES = 1200
/** 相邻采样点最小间距（像素），过滤抖动。 */
const MIN_DIST = 0.7

/** 纸张类型。 */
type Paper = 'none' | 'line' | 'grid' | 'dot'
/** 工具。 */
type Tool = 'pen' | 'eraser'

/** 单条笔迹；`p` 是扁平的 x,y 序列。 */
type Stroke = { t: Tool; c: string; w: number; p: number[] }
/** 撤销命令。 */
type Command = { type: 'add'; s: Stroke } | { type: 'clear'; s: Stroke[] }
/** 工具偏好。 */
type Prefs = { tool: Tool; color: string; custom: boolean; size: number; paper: Paper }

/** 预设颜色。 */
const SWATCHES = ['#1f2329', '#c0392b', '#1f5fd6', '#0f766e', '#b45309', '#5b4bd6']

/** 纸张选项。 */
const PAPER_OPTIONS = [
  { value: 'none', label: '空白' },
  { value: 'line', label: '横线' },
  { value: 'grid', label: '方格' },
  { value: 'dot', label: '点阵' },
]

/** 默认偏好。 */
const DEFAULT_PREFS: Prefs = { tool: 'pen', color: '#1f2329', custom: false, size: 3, paper: 'line' }

/**
 * 判断颜色是否合法。
 *
 * @param value 候选值。
 * @returns 是否可用于 canvas。
 */
function isColor(value: unknown): value is string {
  return typeof value === 'string' && /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value)
}

/**
 * 校验一条笔迹。
 *
 * @param stroke 候选对象。
 * @returns 是否可用。
 */
function isStroke(stroke: unknown): stroke is Stroke {
  if (!stroke || typeof stroke !== 'object') return false
  const item = stroke as Stroke
  if (item.t !== 'pen' && item.t !== 'eraser') return false
  if (!isColor(item.c)) return false
  if (typeof item.w !== 'number' || !Number.isFinite(item.w) || item.w <= 0) return false
  if (!Array.isArray(item.p) || item.p.length < 2 || item.p.length % 2 !== 0) return false
  return item.p.every((value) => typeof value === 'number' && Number.isFinite(value))
}

/**
 * 草稿纸页面。
 *
 * @returns 画布 + 工具栏。
 * @remarks 双层画布是硬约束：纸纹在 #paper，笔迹在 #ink，
 * 橡皮用 destination-out 只擦笔迹层，合层会把纸一起擦掉。
 */
export default function ScratchpadPage() {
  const { message } = App.useApp()
  const register = useSectionStore((state) => state.register)
  const clear = useSectionStore((state) => state.clear)

  const wrapRef = useRef<HTMLDivElement>(null)
  const paperRef = useRef<HTMLCanvasElement>(null)
  const inkRef = useRef<HTMLCanvasElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const strokesRef = useRef<Stroke[]>([])
  const undoRef = useRef<Command[]>([])
  const redoRef = useRef<Command[]>([])
  const currentRef = useRef<Stroke | null>(null)
  const activeIdRef = useRef<number | null>(null)
  const penActiveRef = useRef(false)
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 })
  const saveTimerRef = useRef(0)
  const prefTimerRef = useRef(0)

  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS)
  const prefsRef = useRef(prefs)
  prefsRef.current = prefs
  const [historyVersion, setHistoryVersion] = useState(0)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [ready, setReady] = useState(false)

  const navSections: NavSection[] = []

  useEffect(() => {
    register('/scratchpad', navSections)
    return () => clear('/scratchpad')
  }, [register, clear])

  /* ---------------- 画布尺寸与纸纹 ---------------- */

  /**
   * 重绘纸张层。
   *
   * @param paper 纸张类型。
   * @returns 无返回。
   */
  const paintPaper = useCallback((paper: Paper) => {
    const canvas = paperRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const { w, h, dpr } = sizeRef.current
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, w, h)
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, w, h)
    if (paper === 'none') return

    const step = paper === 'dot' ? 26 : 30
    if (paper === 'line') {
      ctx.strokeStyle = '#e4ebf7'
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let y = step; y < h; y += step) {
        ctx.moveTo(0, Math.round(y) + 0.5)
        ctx.lineTo(w, Math.round(y) + 0.5)
      }
      ctx.stroke()
      return
    }
    if (paper === 'grid') {
      ctx.strokeStyle = '#e9eef8'
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let x = step; x < w; x += step) {
        ctx.moveTo(Math.round(x) + 0.5, 0)
        ctx.lineTo(Math.round(x) + 0.5, h)
      }
      for (let y = step; y < h; y += step) {
        ctx.moveTo(0, Math.round(y) + 0.5)
        ctx.lineTo(w, Math.round(y) + 0.5)
      }
      ctx.stroke()
      return
    }
    ctx.fillStyle = '#d9e2f3'
    for (let x = step; x < w; x += step) {
      for (let y = step; y < h; y += step) {
        ctx.beginPath()
        ctx.arc(x, y, 1.1, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  }, [])

  /**
   * 给绘图上下文套上笔迹样式。
   *
   * @param ctx 上下文。
   * @param stroke 笔迹。
   * @returns 无返回。
   */
  function applyStrokeStyle(ctx: CanvasRenderingContext2D, stroke: Stroke) {
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
  function drawStroke(ctx: CanvasRenderingContext2D, stroke: Stroke) {
    const p = stroke.p
    if (p.length < 2) return
    applyStrokeStyle(ctx, stroke)
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
   * 只绘制新增的那一段，避免每次移动都全量重绘。
   *
   * @param stroke 当前笔迹。
   * @param from 起始点索引（扁平数组下标）。
   * @returns 无返回。
   */
  function drawSegment(stroke: Stroke, from: number) {
    const ctx = inkRef.current?.getContext('2d')
    if (!ctx) return
    if (stroke.p.length === 2) {
      drawStroke(ctx, stroke)
      return
    }
    applyStrokeStyle(ctx, stroke)
    for (let i = Math.max(2, from); i < stroke.p.length; i += 2) {
      ctx.beginPath()
      ctx.moveTo(stroke.p[i - 2], stroke.p[i - 1])
      ctx.lineTo(stroke.p[i], stroke.p[i + 1])
      ctx.stroke()
    }
    ctx.restore()
  }

  /**
   * 全量重绘笔迹层。
   *
   * @returns 无返回。
   */
  const redrawInk = useCallback(() => {
    const canvas = inkRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const { dpr } = sizeRef.current
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    for (const stroke of strokesRef.current) drawStroke(ctx, stroke)
  }, [])

  /**
   * 按容器尺寸重置两块画布。
   *
   * @returns 是否发生了尺寸变化。
   */
  const fitCanvas = useCallback(() => {
    const wrap = wrapRef.current
    const paper = paperRef.current
    const ink = inkRef.current
    if (!wrap || !paper || !ink) return false
    const rect = wrap.getBoundingClientRect()
    const w = Math.max(1, Math.round(rect.width))
    const h = Math.max(1, Math.round(rect.height))
    const dpr = Math.min(window.devicePixelRatio || 1, 3)
    const { w: pw, h: ph, dpr: pdpr } = sizeRef.current
    if (w === pw && h === ph && dpr === pdpr) return false

    sizeRef.current = { w, h, dpr }
    for (const canvas of [paper, ink]) {
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
    }
    return true
  }, [])

  /* ---------------- 存档与偏好 ---------------- */

  /**
   * 序列化草稿；体积超标时只对存档副本按 2 的幂抽稀，画面保持完整。
   *
   * @returns JSON 字符串。
   */
  function payload() {
    const data = { v: 1, paper: prefsRef.current.paper, strokes: strokesRef.current, saved: Date.now() }
    let text = JSON.stringify(data)
    let step = 1
    while (text.length > 1800000 && step < 64) {
      step *= 2
      const copies = strokesRef.current.map((stroke) => {
        if (stroke.p.length <= 4) return stroke
        const p: number[] = []
        for (let i = 0; i < stroke.p.length; i += 2 * step) p.push(stroke.p[i], stroke.p[i + 1])
        if (p.length <= 2) p.push(stroke.p[stroke.p.length - 2], stroke.p[stroke.p.length - 1])
        return { t: stroke.t, c: stroke.c, w: stroke.w, p }
      })
      text = JSON.stringify({ ...data, strokes: copies })
    }
    return text
  }

  /**
   * 写盘；空间不足时只保留最近 60 笔。
   *
   * @returns 无返回。
   */
  const save = useCallback(() => {
    window.clearTimeout(saveTimerRef.current)
    try {
      window.localStorage.setItem(STROKE_KEY, payload())
      return
    } catch {
      // 存储超限：历史已不可靠，连撤销栈一起清，避免撤销错位。
      if (strokesRef.current.length > 60) {
        strokesRef.current = strokesRef.current.slice(-60)
        undoRef.current = []
        redoRef.current = []
        redrawInk()
        try {
          window.localStorage.setItem(STROKE_KEY, payload())
          message.warning('本地空间将满，只保留最近笔迹')
          return
        } catch {
          // 继续走失败分支。
        }
      }
      message.error('本地保存失败（空间不足）')
    }
  }, [message, redrawInk])

  /**
   * 延迟保存，避免每落一笔都写盘。
   *
   * @returns 无返回。
   */
  function scheduleSave() {
    window.clearTimeout(saveTimerRef.current)
    saveTimerRef.current = window.setTimeout(save, 700)
  }

  /**
   * 写入工具偏好（立即）。
   *
   * @returns 无返回。
   */
  const writePrefs = useCallback(() => {
    const { tool, color, custom, size, paper } = prefsRef.current
    try {
      window.localStorage.setItem(PREF_KEY, JSON.stringify({ v: 1, tool, color, custom, size, paper }))
    } catch {
      // 偏好写入失败只影响下次启动默认值。
    }
  }, [])

  /**
   * 延迟写入偏好。
   *
   * @returns 无返回。
   */
  function schedulePrefs() {
    window.clearTimeout(prefTimerRef.current)
    prefTimerRef.current = window.setTimeout(writePrefs, 200)
  }

  /* ---------------- 撤销 / 重做 ---------------- */

  /**
   * 记录一条命令。
   *
   * @param command 命令。
   * @returns 无返回。
   */
  function pushUndo(command: Command) {
    undoRef.current.push(command)
    if (undoRef.current.length > MAX_UNDO) undoRef.current.shift()
    redoRef.current = []
    setHistoryVersion((value) => value + 1)
    scheduleSave()
  }

  /**
   * 笔迹超限时丢最旧的，并同步清掉撤销栈里对应的 add，否则撤销会错位。
   *
   * @returns 是否发生了裁剪。
   */
  function trimStrokes() {
    if (strokesRef.current.length <= MAX_STROKES) return false
    const drop = strokesRef.current.length - MAX_STROKES
    const removed = new Set(strokesRef.current.slice(0, drop))
    strokesRef.current = strokesRef.current.slice(drop)
    undoRef.current = undoRef.current.filter((cmd) => cmd.type !== 'add' || !removed.has(cmd.s))
    return true
  }

  /**
   * 撤销。
   *
   * @returns 无返回。
   */
  function undo() {
    const command = undoRef.current.pop()
    if (!command) return
    if (command.type === 'add') {
      const index = strokesRef.current.lastIndexOf(command.s)
      if (index >= 0) strokesRef.current.splice(index, 1)
      redoRef.current.push(command)
    } else {
      strokesRef.current = command.s
      redoRef.current.push({ type: 'clear', s: command.s })
    }
    redrawInk()
    setHistoryVersion((value) => value + 1)
    scheduleSave()
  }

  /**
   * 重做。
   *
   * @returns 无返回。
   */
  function redo() {
    const command = redoRef.current.pop()
    if (!command) return
    if (command.type === 'add') {
      strokesRef.current.push(command.s)
      undoRef.current.push(command)
    } else {
      const snapshot = strokesRef.current
      strokesRef.current = []
      undoRef.current.push({ type: 'clear', s: snapshot })
    }
    redrawInk()
    setHistoryVersion((value) => value + 1)
    scheduleSave()
  }

  /**
   * 清空全部笔迹（保留纸张）。
   *
   * @returns 无返回。
   */
  function clearAll() {
    const snapshot = strokesRef.current
    strokesRef.current = []
    undoRef.current.push({ type: 'clear', s: snapshot })
    if (undoRef.current.length > MAX_UNDO) undoRef.current.shift()
    redoRef.current = []
    redrawInk()
    setHistoryVersion((value) => value + 1)
    scheduleSave()
  }

  /* ---------------- 指针输入 ---------------- */

  /**
   * 取相对画布的位置。
   *
   * @param event 指针事件。
   * @returns [x, y]。
   */
  function pointOf(event: { clientX: number; clientY: number }): [number, number] {
    const rect = inkRef.current?.getBoundingClientRect()
    if (!rect) return [0, 0]
    return [event.clientX - rect.left, event.clientY - rect.top]
  }

  /**
   * 橡皮直径独立于笔粗：细笔配小橡皮在手机上几乎擦不动。
   *
   * @returns 直径。
   */
  function eraserWidth() {
    return Math.max(16, prefsRef.current.size * 4)
  }

  /**
   * 移动橡皮光标圈。
   *
   * @param event 指针事件。
   * @returns 无返回。
   */
  function moveRing(event: PointerEvent) {
    const ring = ringRef.current
    const wrap = wrapRef.current
    if (!ring || !wrap) return
    if (prefsRef.current.tool !== 'eraser' || event.pointerType === 'touch') {
      ring.hidden = true
      return
    }
    const rect = wrap.getBoundingClientRect()
    const size = eraserWidth()
    ring.hidden = false
    ring.style.width = `${size}px`
    ring.style.height = `${size}px`
    ring.style.left = `${event.clientX - rect.left}px`
    ring.style.top = `${event.clientY - rect.top}px`
  }

  /**
   * 落笔。
   *
   * @param event 指针事件。
   * @returns 无返回。
   */
  function onDown(event: PointerEvent) {
    // 只认鼠标左键；右键留给上下文菜单。
    if (event.pointerType === 'mouse' && event.button !== 0) return
    if (activeIdRef.current !== null) {
      // 手掌误触：手写笔书写中忽略手指。
      if (penActiveRef.current && event.pointerType === 'touch') return
      return
    }
    activeIdRef.current = event.pointerId
    if (event.pointerType === 'pen') penActiveRef.current = true

    const tool = prefsRef.current.tool
    const width = tool === 'eraser' ? eraserWidth() : prefsRef.current.size
    const stroke: Stroke = { t: tool, c: prefsRef.current.color, w: Math.max(1, width), p: [] }
    const [x, y] = pointOf(event)
    stroke.p.push(x, y)
    currentRef.current = stroke
    const ctx = inkRef.current?.getContext('2d')
    if (ctx) drawStroke(ctx, stroke)

    try {
      inkRef.current?.setPointerCapture(event.pointerId)
    } catch {
      // 指针已失效（拖出画布）时忽略。
    }
    moveRing(event)
    if (event.pointerType !== 'mouse') event.preventDefault()
  }

  /**
   * 移动：用合并事件补齐高频采样，否则快速手写会画成折线。
   *
   * @param event 指针事件。
   * @returns 无返回。
   */
  function onMove(event: PointerEvent) {
    moveRing(event)
    const stroke = currentRef.current
    if (!stroke || event.pointerId !== activeIdRef.current) return

    const coalesced =
      typeof event.getCoalescedEvents === 'function' ? event.getCoalescedEvents() : []
    const events = coalesced.length > 0 ? coalesced : [event]
    const start = stroke.p.length
    for (const item of events) {
      const [x, y] = pointOf(item)
      const lx = stroke.p[stroke.p.length - 2]
      const ly = stroke.p[stroke.p.length - 1]
      const dx = x - lx
      const dy = y - ly
      if (dx * dx + dy * dy < MIN_DIST * MIN_DIST) continue
      stroke.p.push(x, y)
    }
    if (stroke.p.length > start) drawSegment(stroke, start)
    if (event.cancelable && event.pointerType !== 'mouse') event.preventDefault()
  }

  /**
   * 收笔。
   *
   * @param id 指针 id。
   * @param cancelled 是否被系统取消。
   * @returns 无返回。
   */
  function finishStroke(id: number, cancelled: boolean) {
    const stroke = currentRef.current
    if (!stroke || id !== activeIdRef.current) return
    currentRef.current = null
    if (!cancelled && stroke.p.length >= 2) {
      strokesRef.current.push(stroke)
      pushUndo({ type: 'add', s: stroke })
      trimStrokes()
    } else {
      redrawInk()
    }
    setHistoryVersion((value) => value + 1)
  }

  /* ---------------- 生命周期 ---------------- */

  /* 初始化：读偏好与笔迹，再按顺序套用（顺序错会让记住的橡皮状态被颜色初始化冲掉）。 */
  useEffect(() => {
    let paperFromArchive: Paper | null = null
    let tool: Tool = DEFAULT_PREFS.tool
    let color = DEFAULT_PREFS.color
    let custom = false
    let size = DEFAULT_PREFS.size
    let paper = DEFAULT_PREFS.paper

    try {
      const rawStrokes = window.localStorage.getItem(STROKE_KEY)
      if (rawStrokes) {
        const data = JSON.parse(rawStrokes) as { strokes?: unknown; paper?: Paper }
        if (Array.isArray(data.strokes)) {
          strokesRef.current = data.strokes.filter(isStroke).slice(-MAX_STROKES)
        }
        if (data.paper === 'none' || data.paper === 'line' || data.paper === 'grid' || data.paper === 'dot') {
          paperFromArchive = data.paper
        }
      }
    } catch {
      // 存档损坏按空画布处理。
    }

    let prefsState: 'ok' | 'missing' | 'bad' = 'missing'
    try {
      const raw = window.localStorage.getItem(PREF_KEY)
      if (raw) {
        const data = JSON.parse(raw) as Partial<Prefs>
        if (data && typeof data === 'object') {
          prefsState = 'ok'
          if (data.tool === 'pen' || data.tool === 'eraser') tool = data.tool
          if (isColor(data.color)) color = data.color
          custom = Boolean(data.custom) && isColor(data.color)
          if (typeof data.size === 'number' && Number.isFinite(data.size)) {
            size = Math.min(24, Math.max(1, Math.round(data.size)))
          }
          if (data.paper === 'none' || data.paper === 'line' || data.paper === 'grid' || data.paper === 'dot') {
            paper = data.paper
          }
        }
      }
    } catch {
      prefsState = 'bad'
    }

    // 只有「从没存过偏好」才用旧存档里的纸张兜底。
    if (prefsState === 'missing' && paperFromArchive) paper = paperFromArchive

    setPrefs({ tool, color, custom, size, paper })
    setReady(true)
  }, [])

  /* 尺寸变化：重设画布并重绘两层。 */
  useEffect(() => {
    if (!ready) return
    const resize = () => {
      if (fitCanvas()) {
        paintPaper(prefsRef.current.paper)
        redrawInk()
      }
    }
    resize()
    const observer = new ResizeObserver(resize)
    if (wrapRef.current) observer.observe(wrapRef.current)
    window.addEventListener('orientationchange', resize)
    return () => {
      observer.disconnect()
      window.removeEventListener('orientationchange', resize)
    }
  }, [ready, fitCanvas, paintPaper, redrawInk])

  /* 纸张切换时重绘纸纹。 */
  useEffect(() => {
    if (!ready) return
    paintPaper(prefs.paper)
  }, [ready, prefs.paper, paintPaper])

  /* 指针事件绑定到画布（用原生监听，才能拿到 coalesced events）。 */
  useEffect(() => {
    const ink = inkRef.current
    if (!ink) return
    const up = (event: PointerEvent) => {
      if (event.pointerId !== activeIdRef.current) return
      finishStroke(event.pointerId, false)
      activeIdRef.current = null
      penActiveRef.current = false
      if (ringRef.current) ringRef.current.hidden = true
      try {
        ink.releasePointerCapture(event.pointerId)
      } catch {
        // 已释放。
      }
      scheduleSave()
    }
    const cancel = (event: PointerEvent) => {
      if (event.pointerId !== activeIdRef.current) return
      finishStroke(event.pointerId, true)
      activeIdRef.current = null
      penActiveRef.current = false
      if (ringRef.current) ringRef.current.hidden = true
    }
    const leave = () => {
      if (ringRef.current) ringRef.current.hidden = true
    }
    const enter = (event: PointerEvent) => {
      if (prefsRef.current.tool === 'eraser') moveRing(event)
    }
    const contextMenu = (event: Event) => event.preventDefault()

    ink.addEventListener('pointerdown', onDown)
    ink.addEventListener('pointermove', onMove)
    ink.addEventListener('pointerup', up)
    ink.addEventListener('pointercancel', cancel)
    ink.addEventListener('pointerleave', leave)
    ink.addEventListener('pointerenter', enter)
    ink.addEventListener('contextmenu', contextMenu)
    return () => {
      ink.removeEventListener('pointerdown', onDown)
      ink.removeEventListener('pointermove', onMove)
      ink.removeEventListener('pointerup', up)
      ink.removeEventListener('pointercancel', cancel)
      ink.removeEventListener('pointerleave', leave)
      ink.removeEventListener('pointerenter', enter)
      ink.removeEventListener('contextmenu', contextMenu)
    }
  })

  /* 切走前落盘：200ms 防抖窗口里的最后一笔不能丢。 */
  useEffect(() => {
    const flush = () => {
      writePrefs()
      save()
    }
    window.addEventListener('pagehide', flush)
    document.addEventListener('visibilitychange', flush)
    return () => {
      window.removeEventListener('pagehide', flush)
      document.removeEventListener('visibilitychange', flush)
    }
  }, [writePrefs, save])

  /* 快捷键：Cmd/Ctrl+Z 撤销，Shift 加它重做，B/E 切工具。 */
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return
      const meta = event.metaKey || event.ctrlKey
      if (meta && event.key.toLowerCase() === 'z') {
        event.preventDefault()
        if (event.shiftKey) redo()
        else undo()
        return
      }
      if (meta || event.altKey) return
      if (event.key.toLowerCase() === 'b') setPrefs((p) => ({ ...p, tool: 'pen' }))
      if (event.key.toLowerCase() === 'e') setPrefs((p) => ({ ...p, tool: 'eraser' }))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  /**
   * 导出 PNG：把纸纹与笔迹合到一张离屏画布。
   *
   * @returns 无返回。
   */
  function exportPng() {
    const paper = paperRef.current
    const ink = inkRef.current
    if (!paper || !ink || !sizeRef.current.w) {
      message.warning('画布还没准备好')
      return
    }
    const out = document.createElement('canvas')
    out.width = paper.width
    out.height = paper.height
    const ctx = out.getContext('2d')
    if (!ctx) return
    ctx.drawImage(paper, 0, 0)
    ctx.drawImage(ink, 0, 0)
    const now = new Date()
    const pad = (value: number) => String(value).padStart(2, '0')
    const name = `草稿-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}.png`
    const link = document.createElement('a')
    link.href = out.toDataURL('image/png')
    link.download = name
    link.click()
    message.success('已导出图片')
  }

  /**
   * 更新偏好并持久化。
   *
   * @param patch 变更项。
   * @returns 无返回。
   */
  function updatePrefs(patch: Partial<Prefs>) {
    setPrefs((current) => {
      const next = { ...current, ...patch }
      prefsRef.current = next
      schedulePrefs()
      return next
    })
    if (ringRef.current) ringRef.current.hidden = true
  }

  const canUndo = undoRef.current.length > 0 || historyVersion < 0
  const canRedo = redoRef.current.length > 0

  return (
    <div className="flex h-[100dvh] flex-col">
      {/* 工具栏 */}
      <div className="flex flex-wrap items-center gap-2 border-b border-line bg-surface px-3 py-2">
        <div className="flex items-center gap-1">
          <Tooltip title="画笔（B）">
            <Button
              size="small"
              type={prefs.tool === 'pen' ? 'primary' : 'default'}
              icon={<Pen size={14} />}
              onClick={() => updatePrefs({ tool: 'pen' })}
            />
          </Tooltip>
          <Tooltip title="橡皮（E）">
            <Button
              size="small"
              type={prefs.tool === 'eraser' ? 'primary' : 'default'}
              icon={<Eraser size={14} />}
              onClick={() => updatePrefs({ tool: 'eraser' })}
            />
          </Tooltip>
        </div>

        <span className="mx-0.5 hidden h-5 w-px bg-line sm:block" />

        <div className="flex items-center gap-1">
          {SWATCHES.map((color) => (
            <button
              key={color}
              type="button"
              aria-label={`颜色 ${color}`}
              className="h-6 w-6 rounded-full ring-2 ring-offset-1 transition"
              style={{
                background: color,
                boxShadow: prefs.color === color && !prefs.custom ? '0 0 0 2px var(--accent)' : undefined,
                ['--tw-ring-color' as string]: prefs.color === color && !prefs.custom ? color : 'transparent',
              }}
              onClick={() => updatePrefs({ color, custom: false, tool: 'pen' })}
            />
          ))}
          <label className="relative grid h-6 w-6 cursor-pointer place-items-center rounded-full border border-line text-[10px] text-ink-3">
            自
            <input
              type="color"
              className="absolute inset-0 cursor-pointer opacity-0"
              value={prefs.color}
              onChange={(event) => updatePrefs({ color: event.target.value, custom: true, tool: 'pen' })}
            />
          </label>
        </div>

        <span className="mx-0.5 hidden h-5 w-px bg-line sm:block" />

        {/*
          笔宽滑块：外层必须给足宽度且让 Slider 自己撑满（flex-1 + min-w-0）。
          之前写成固定 w-[104px] 且 Slider 未设 flex，实测滑块根元素宽度被压成 0，
          表现为「拖不动、也没有轨道」。
        */}
        <div className="flex w-[168px] shrink-0 items-center gap-2">
          <span className="shrink-0 text-[11.5px] text-ink-3">笔粗</span>
          <Slider
            className="m-0 min-w-0 flex-1"
            min={1}
            max={24}
            value={prefs.size}
            tooltip={{ open: false }}
            onChange={(value) => updatePrefs({ size: value })}
          />
          <span className="w-4 shrink-0 text-right font-num text-[11.5px] text-ink-3">{prefs.size}</span>
        </div>

        <Select
          size="small"
          value={prefs.paper}
          options={PAPER_OPTIONS}
          style={{ width: 84 }}
          onChange={(value) => updatePrefs({ paper: value })}
        />

        <div className="ml-auto flex items-center gap-1">
          <Tooltip title="撤销（Cmd/Ctrl+Z）">
            <Button size="small" icon={<RotateCcw size={14} />} disabled={!canUndo} onClick={undo} />
          </Tooltip>
          <Tooltip title="重做（Shift+Cmd/Ctrl+Z）">
            <Button size="small" icon={<RotateCw size={14} />} disabled={!canRedo} onClick={redo} />
          </Tooltip>
          <Tooltip title="导出图片">
            <Button size="small" icon={<Download size={14} />} onClick={exportPng} />
          </Tooltip>
          <Tooltip title="清空">
            <Button size="small" danger icon={<Trash2 size={14} />} onClick={() => setConfirmOpen(true)} />
          </Tooltip>
        </div>
      </div>

      {/* 画布：纸与墨分层，橡皮只擦笔迹层 */}
      <div ref={wrapRef} className="relative min-h-0 flex-1 select-none overflow-hidden bg-white">
        <canvas ref={paperRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
        <canvas
          ref={inkRef}
          className="absolute inset-0 h-full w-full touch-none"
          data-tool={prefs.tool}
          style={{ cursor: prefs.tool === 'eraser' ? 'cell' : 'crosshair' }}
          aria-label="草稿纸画布"
        />
        <div
          ref={ringRef}
          hidden
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink-3/60"
        />
      </div>

      <Modal
        open={confirmOpen}
        title="清空草稿？"
        onCancel={() => setConfirmOpen(false)}
        okText="清空"
        cancelText="取消"
        okButtonProps={{ danger: true }}
        onOk={() => {
          setConfirmOpen(false)
          clearAll()
          message.success('已清空，可用撤销恢复')
        }}
      >
        <p className="m-0 text-[13.5px] text-ink-2">清空后仍可用撤销（Cmd/Ctrl+Z）恢复，但关闭页面后不可找回。</p>
      </Modal>
    </div>
  )
}
