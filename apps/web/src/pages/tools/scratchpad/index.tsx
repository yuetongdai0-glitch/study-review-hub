import { App, Button, Modal, Select, Slider, Tooltip } from 'antd'
import { Download, Eraser, ImageOff, ImagePlus, Pen, RotateCcw, RotateCw, Trash2 } from 'lucide-react'
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
/** 粘贴图片与画布边缘的最小留白。 */
const PHOTO_PAD = 14
/** 单张图片转成 dataURL 后的体积上限（字符数，约 660KB 二进制）。 */
const MAX_PHOTO_CHARS = 900_000
/** 图片编码时最长边的像素上限，避免超大截图把存档撑爆。 */
const MAX_PHOTO_SIDE = 2400

/** 纸张类型。 */
type Paper = 'none' | 'line' | 'grid' | 'dot'
/** 工具。 */
type Tool = 'pen' | 'eraser'

/** 单条笔迹；`p` 是扁平的 x,y 序列。 */
type Stroke = { t: Tool; c: string; w: number; p: number[] }
/**
 * 贴在纸上的图片。
 *
 * @remarks `nw/nh` 是原始像素尺寸，`x/y/w/h` 是落纸后的最终位置与显示尺寸。
 * 位置与尺寸在粘贴那一刻算好并固定：窗口缩放时图片不动，笔迹才不会与图片错位。
 */
type Photo = { id: string; src: string; nw: number; nh: number; x: number; y: number; w: number; h: number }
/** 撤销命令。 */
type Command =
  | { type: 'add'; s: Stroke }
  | { type: 'clear'; s: Stroke[]; photos: Photo[] }
  | { type: 'photos'; prev: Photo[]; next: Photo[] }
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
 * 校验一张存档里的图片。
 *
 * @param photo 候选对象。
 * @returns 是否可用。
 * @remarks 只信任 data: 开头的内联图，避免存档被塞进外链。
 */
function isPhoto(photo: unknown): photo is Photo {
  if (!photo || typeof photo !== 'object') return false
  const item = photo as Photo
  if (typeof item.id !== 'string' || !item.id) return false
  if (typeof item.src !== 'string' || !item.src.startsWith('data:image/')) return false
  for (const value of [item.nw, item.nh, item.x, item.y, item.w, item.h]) {
    if (typeof value !== 'number' || !Number.isFinite(value)) return false
  }
  return item.w > 0 && item.h > 0
}

/**
 * 把图片文件读成可绘制的 Image。
 *
 * @param src 图片地址（dataURL 或 objectURL）。
 * @returns 已解码的图片。
 */
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error('图片解码失败'))
    image.src = src
  })
}

/**
 * 把图片重编码成 dataURL，顺便把超大截图压到可存进 localStorage 的体积。
 *
 * @param image 已解码的图片。
 * @param limitW 编码目标宽度（显示尺寸的 2 倍，够清晰又不浪费）。
 * @returns dataURL。
 * @remarks 截图多为白底但常带透明通道，直接转 JPEG 会把透明处变黑，
 * 所以先铺一层白再转；PNG 体积超标时才降级为 JPEG。
 */
function encodeImage(image: HTMLImageElement, limitW: number): string {
  const ratio = Math.min(1, MAX_PHOTO_SIDE / image.naturalWidth, MAX_PHOTO_SIDE / image.naturalHeight)
  const targetW = Math.max(1, Math.round(Math.min(image.naturalWidth * ratio, limitW * 2)))
  const scale = targetW / image.naturalWidth
  const targetH = Math.max(1, Math.round(image.naturalHeight * scale))

  const canvas = document.createElement('canvas')
  canvas.width = targetW
  canvas.height = targetH
  const ctx = canvas.getContext('2d')
  if (!ctx) return ''
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, targetW, targetH)
  ctx.drawImage(image, 0, 0, targetW, targetH)

  let data = canvas.toDataURL('image/png')
  if (data.length <= MAX_PHOTO_CHARS) return data
  for (const quality of [0.92, 0.85, 0.75, 0.62]) {
    data = canvas.toDataURL('image/jpeg', quality)
    if (data.length <= MAX_PHOTO_CHARS) break
  }
  return data
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
  const photoRef = useRef<HTMLCanvasElement>(null)
  const inkRef = useRef<HTMLCanvasElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const strokesRef = useRef<Stroke[]>([])
  const photosRef = useRef<Photo[]>([])
  /** 已解码图片缓存，src → Image，避免每帧重复解码。 */
  const imageCacheRef = useRef(new Map<string, HTMLImageElement>())
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
  /** 图片列表变化（增删 / 解码完成）时自增，用来触发重绘与按钮态刷新。 */
  const [photoVersion, setPhotoVersion] = useState(0)
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
   * 窗口变窄时把「跑出可视区」的内容整体平移回来。
   *
   * @returns 是否发生了平移。
   * @remarks 必须**图片与笔迹同吃一个位移**：只挪图片会让用户在图上画的
   * 辅助线错位（比看不见更糟）。位移只作用于数据，几何关系完全保持。
   * 只在有图片时才做，避免纯笔迹（用户本来就画在边缘）被莫名拖走。
   */
  const shiftIntoView = useCallback(() => {
    const { w, h } = sizeRef.current
    const photos = photosRef.current
    if (!photos.length) return false

    const right = Math.max(...photos.map((item) => item.x + item.w))
    const bottom = Math.max(...photos.map((item) => item.y + item.h))
    const left = Math.min(...photos.map((item) => item.x))
    const top = Math.min(...photos.map((item) => item.y))

    let dx = 0
    let dy = 0
    if (right > w - PHOTO_PAD) dx = w - PHOTO_PAD - right
    else if (left < PHOTO_PAD) dx = PHOTO_PAD - left
    if (bottom > h - PHOTO_PAD) dy = h - PHOTO_PAD - bottom
    else if (top < PHOTO_PAD) dy = PHOTO_PAD - top
    if (!dx && !dy) return false

    // 平移到边界后可能又顶到另一侧，这里夹一次，保证整体仍落在纸内。
    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))
    dx = clamp(dx, -Math.min(...photos.map((item) => item.x)) + PHOTO_PAD, Math.max(0, w - PHOTO_PAD - right))
    dy = clamp(dy, -Math.min(...photos.map((item) => item.y)) + PHOTO_PAD, Math.max(0, h - PHOTO_PAD - bottom))

    photosRef.current = photos.map((item) => ({ ...item, x: item.x + dx, y: item.y + dy }))
    for (const stroke of strokesRef.current) {
      for (let i = 0; i < stroke.p.length; i += 2) {
        stroke.p[i] += dx
        stroke.p[i + 1] += dy
      }
    }
    return true
  }, [])

  /**
   * 全量重绘图片层。
   *
   * @returns 无返回。
   * @remarks 图片层夹在纸与笔迹之间：笔迹盖在图上，橡皮（destination-out）
   * 只作用笔迹层，不会把题图擦出洞。图片按粘贴时固定的坐标与尺寸绘制，
   * 窗口缩放不重排，保证与笔迹永远对齐。
   */
  const redrawPhotos = useCallback(() => {
    const canvas = photoRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const { dpr } = sizeRef.current
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    for (const photo of photosRef.current) {
      let image = imageCacheRef.current.get(photo.src)
      if (!image) {
        image = new Image()
        image.onload = () => setPhotoVersion((value) => value + 1)
        image.src = photo.src
        imageCacheRef.current.set(photo.src, image)
      }
      if (image.complete && image.naturalWidth > 0) {
        ctx.drawImage(image, photo.x, photo.y, photo.w, photo.h)
      }
    }
  }, [])

  /**
   * 按容器尺寸重置三块画布。
   *
   * @returns 是否发生了尺寸变化。
   */
  const fitCanvas = useCallback(() => {
    const wrap = wrapRef.current
    const paper = paperRef.current
    const photo = photoRef.current
    const ink = inkRef.current
    if (!wrap || !paper || !photo || !ink) return false
    const rect = wrap.getBoundingClientRect()
    const w = Math.max(1, Math.round(rect.width))
    const h = Math.max(1, Math.round(rect.height))
    const dpr = Math.min(window.devicePixelRatio || 1, 3)
    const { w: pw, h: ph, dpr: pdpr } = sizeRef.current
    if (w === pw && h === ph && dpr === pdpr) return false

    sizeRef.current = { w, h, dpr }
    for (const canvas of [paper, photo, ink]) {
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
    }
    return true
  }, [])

  /* ---------------- 存档与偏好 ---------------- */

  /**
   * 序列化草稿；体积超标时只对存档副本按 2 的幂抽稀，画面保持完整。
   *
   * @param strokeList 要写入的笔迹（默认当前笔迹）。
   * @param photoList 要写入的图片（默认当前图片）。
   * @returns JSON 字符串。
   */
  function payload(strokeList = strokesRef.current, photoList = photosRef.current) {
    const data = { v: 2, paper: prefsRef.current.paper, strokes: strokeList, photos: photoList, saved: Date.now() }
    let text = JSON.stringify(data)
    let step = 1
    while (text.length > 1800000 && step < 64) {
      step *= 2
      const copies = strokeList.map((stroke) => {
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
   * 写盘；空间不足时依次降级，尽量保住内容。
   *
   * @returns 无返回。
   * @remarks 图片比笔迹占地方得多，所以降级顺序是：抽稀笔迹（payload 内）
   * → 只留最近 60 笔 → 只留最近 1 张图 + 60 笔。
   */
  const save = useCallback(() => {
    window.clearTimeout(saveTimerRef.current)
    try {
      window.localStorage.setItem(STROKE_KEY, payload())
      return
    } catch {
      // 第一层降级：历史已不可靠，连撤销栈一起清，避免撤销错位。
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
          // 继续降级。
        }
      }
      // 第二层降级：图片只留最后一张。
      if (photosRef.current.length > 1) {
        photosRef.current = photosRef.current.slice(-1)
        undoRef.current = []
        redoRef.current = []
        redrawPhotos()
        try {
          window.localStorage.setItem(STROKE_KEY, payload())
          message.warning('本地空间将满，图片只保留最近一张')
          return
        } catch {
          // 落到底。
        }
      }
      message.error('本地保存失败（空间不足）')
    }
  }, [message, redrawInk, redrawPhotos])

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
      redrawInk()
    } else if (command.type === 'clear') {
      strokesRef.current = command.s
      photosRef.current = command.photos
      redoRef.current.push({ type: 'clear', s: command.s, photos: command.photos })
      redrawInk()
      redrawPhotos()
      setPhotoVersion((value) => value + 1)
    } else {
      photosRef.current = command.prev
      redoRef.current.push({ type: 'photos', prev: command.prev, next: command.next })
      redrawPhotos()
      setPhotoVersion((value) => value + 1)
    }
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
      redrawInk()
    } else if (command.type === 'clear') {
      const snapshot = strokesRef.current
      const photos = photosRef.current
      strokesRef.current = []
      photosRef.current = []
      undoRef.current.push({ type: 'clear', s: snapshot, photos })
      redrawInk()
      redrawPhotos()
      setPhotoVersion((value) => value + 1)
    } else {
      photosRef.current = command.next
      undoRef.current.push({ type: 'photos', prev: command.prev, next: command.next })
      redrawPhotos()
      setPhotoVersion((value) => value + 1)
    }
    setHistoryVersion((value) => value + 1)
    scheduleSave()
  }

  /**
   * 清空全部笔迹与图片（保留纸张）。
   *
   * @returns 无返回。
   */
  function clearAll() {
    const snapshot = strokesRef.current
    const photos = photosRef.current
    strokesRef.current = []
    photosRef.current = []
    undoRef.current.push({ type: 'clear', s: snapshot, photos })
    if (undoRef.current.length > MAX_UNDO) undoRef.current.shift()
    redoRef.current = []
    redrawInk()
    redrawPhotos()
    setPhotoVersion((value) => value + 1)
    setHistoryVersion((value) => value + 1)
    scheduleSave()
  }

  /* ---------------- 图片 ---------------- */

  /**
   * 计算图片落纸后的显示尺寸。
   *
   * @param nw 原始宽。
   * @param nh 原始高。
   * @returns 显示宽高与缩放比例。
   * @remarks 默认 **1:1 原样大小**；只有图片比画布还大时才等比缩小到能放下，
   * 否则会被裁掉一半看不到题干。缩小比例会回传，由调用方提示用户。
   */
  function fitPhoto(nw: number, nh: number) {
    const { w, h } = sizeRef.current
    const maxW = Math.max(60, w - PHOTO_PAD * 2)
    const maxH = Math.max(60, h - PHOTO_PAD * 2)
    const scale = Math.min(1, maxW / nw, maxH / nh)
    return { w: Math.max(1, Math.round(nw * scale)), h: Math.max(1, Math.round(nh * scale)), scale }
  }

  /**
   * 给新图片找落点：水平居中，竖直方向接在已有图片下方。
   *
   * @param w 显示宽。
   * @param h 显示高。
   * @returns 左上角坐标。
   */
  function placePhoto(w: number, h: number) {
    const { w: cw, h: ch } = sizeRef.current
    const list = photosRef.current
    const bottom = list.length ? Math.max(...list.map((item) => item.y + item.h)) + 12 : NaN
    let y = Number.isFinite(bottom) ? bottom : Math.round((ch - h) / 2)
    // 放不下就回到顶部，宁可叠着也别把新图扔到看不见的地方。
    if (y + h > ch - PHOTO_PAD) y = PHOTO_PAD
    y = Math.max(PHOTO_PAD, y)
    const x = Math.max(PHOTO_PAD, Math.round((cw - w) / 2))
    return { x, y }
  }

  /**
   * 把一张图片贴到草稿纸上。
   *
   * @param file 剪贴板 / 文件选择器 / 拖拽得到的图片。
   * @returns 无返回。
   */
  const addPhoto = useCallback(
    async (file: File | Blob) => {
      if (!sizeRef.current.w) {
        message.warning('画布还没准备好，请稍后再粘贴')
        return
      }
      const objectUrl = URL.createObjectURL(file)
      try {
        const image = await loadImage(objectUrl)
        if (!image.naturalWidth || !image.naturalHeight) throw new Error('图片尺寸无效')
        const { w, h, scale } = fitPhoto(image.naturalWidth, image.naturalHeight)
        const src = encodeImage(image, w)
        if (!src) throw new Error('图片编码失败')
        const { x, y } = placePhoto(w, h)
        const before = photosRef.current
        const photo: Photo = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          src,
          nw: image.naturalWidth,
          nh: image.naturalHeight,
          x,
          y,
          w,
          h,
        }
        photosRef.current = [...before, photo]
        pushUndo({ type: 'photos', prev: before, next: photosRef.current })
        redrawPhotos()
        setPhotoVersion((value) => value + 1)
        if (scale < 1) {
          message.info(
            `图片 ${image.naturalWidth}×${image.naturalHeight} 放不下，已缩到 ${Math.round(scale * 100)}% 显示（可先放宽窗口再重新粘贴）`
          )
        } else {
          message.success(`已粘贴图片 ${image.naturalWidth}×${image.naturalHeight}（原样大小）`)
        }
      } catch {
        message.error('这张图片读不出来，换一张试试')
      } finally {
        URL.revokeObjectURL(objectUrl)
      }
    },
    [message, redrawPhotos]
  )

  /**
   * 移除全部图片（可撤销）。
   *
   * @returns 无返回。
   */
  function removePhotos() {
    if (!photosRef.current.length) return
    const before = photosRef.current
    photosRef.current = []
    undoRef.current.push({ type: 'photos', prev: before, next: [] })
    if (undoRef.current.length > MAX_UNDO) undoRef.current.shift()
    redoRef.current = []
    redrawPhotos()
    setPhotoVersion((value) => value + 1)
    setHistoryVersion((value) => value + 1)
    scheduleSave()
    message.success('已移除图片，可用撤销找回')
  }

  /**
   * 从文件列表里挑出图片并逐张贴上。
   *
   * @param files 文件列表。
   * @returns 无返回。
   */
  const addPhotoFiles = useCallback(
    async (files: FileList | File[] | null) => {
      const list = files ? Array.from(files) : []
      const images = list.filter((file) => file.type.startsWith('image/'))
      if (!images.length) {
        if (list.length) message.warning('只支持图片文件')
        return
      }
      for (const file of images) await addPhoto(file)
    },
    [addPhoto, message]
  )

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
        const data = JSON.parse(rawStrokes) as { strokes?: unknown; photos?: unknown; paper?: Paper }
        if (Array.isArray(data.strokes)) {
          strokesRef.current = data.strokes.filter(isStroke).slice(-MAX_STROKES)
        }
        if (Array.isArray(data.photos)) {
          photosRef.current = data.photos.filter(isPhoto).slice(-6)
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

  /* 尺寸变化：重设画布并重绘三层。 */
  useEffect(() => {
    if (!ready) return
    const resize = () => {
      if (fitCanvas()) {
        paintPaper(prefsRef.current.paper)
        if (shiftIntoView()) scheduleSave()
        redrawPhotos()
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
  }, [ready, fitCanvas, paintPaper, redrawInk, redrawPhotos, shiftIntoView])

  /* 纸张切换时重绘纸纹。 */
  useEffect(() => {
    if (!ready) return
    paintPaper(prefs.paper)
  }, [ready, prefs.paper, paintPaper])

  /* 图片变化（粘贴 / 删除 / 撤销 / 解码完成）时重绘图片层。 */
  useEffect(() => {
    if (!ready) return
    redrawPhotos()
  }, [ready, photoVersion, redrawPhotos])

  /* 粘贴图片：Ctrl/⌘+V，也兼容从截图工具直接粘进来。 */
  useEffect(() => {
    const onPaste = (event: ClipboardEvent) => {
      const data = event.clipboardData
      const files = data ? Array.from(data.files) : []
      if (!files.length) {
        // 纯文本剪贴板静默忽略：用户很可能只是习惯性按了 Cmd+V，
        // 每次都弹「只支持图片」会很吵。
        return
      }
      event.preventDefault()
      void addPhotoFiles(files)
    }
    window.addEventListener('paste', onPaste)
    return () => window.removeEventListener('paste', onPaste)
  }, [addPhotoFiles])

  /* 拖拽图片进画布也能贴。 */
  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const onDragOver = (event: DragEvent) => {
      if (!event.dataTransfer) return
      event.preventDefault()
      event.dataTransfer.dropEffect = 'copy'
    }
    const onDrop = (event: DragEvent) => {
      const files = event.dataTransfer?.files
      if (!files || !files.length) return
      event.preventDefault()
      void addPhotoFiles(files)
    }
    wrap.addEventListener('dragover', onDragOver)
    wrap.addEventListener('drop', onDrop)
    return () => {
      wrap.removeEventListener('dragover', onDragOver)
      wrap.removeEventListener('drop', onDrop)
    }
  }, [addPhotoFiles])

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
   * 导出 PNG：把纸纹、图片与笔迹按显示顺序合到一张离屏画布。
   *
   * @returns 无返回。
   */
  function exportPng() {
    const paper = paperRef.current
    const photo = photoRef.current
    const ink = inkRef.current
    if (!paper || !photo || !ink || !sizeRef.current.w) {
      message.warning('画布还没准备好')
      return
    }
    const out = document.createElement('canvas')
    out.width = paper.width
    out.height = paper.height
    const ctx = out.getContext('2d')
    if (!ctx) return
    // 顺序必须与屏幕一致：纸 → 图片 → 笔迹，否则导出的图会少一层。
    ctx.drawImage(paper, 0, 0)
    ctx.drawImage(photo, 0, 0)
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
  const photoCount = photosRef.current.length
  const isEmpty = historyVersion >= 0 && strokesRef.current.length === 0 && photoCount === 0

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
          <Tooltip title="插入图片（也可直接 Ctrl/⌘+V 粘贴，或把图拖进来）">
            <Button size="small" icon={<ImagePlus size={14} />} onClick={() => fileRef.current?.click()} aria-label="插入图片" />
          </Tooltip>
          {photoCount > 0 && (
            <Tooltip title={`移除图片（${photoCount} 张，橡皮不会擦图，避免擦辅助线时把题图擦花）`}>
              <Button size="small" icon={<ImageOff size={14} />} onClick={removePhotos} aria-label="移除图片" />
            </Tooltip>
          )}
          <Tooltip title="撤销（Cmd/Ctrl+Z）">
            <Button size="small" icon={<RotateCcw size={14} />} disabled={!canUndo} onClick={undo} />
          </Tooltip>
          <Tooltip title="重做（Shift+Cmd/Ctrl+Z）">
            <Button size="small" icon={<RotateCw size={14} />} disabled={!canRedo} onClick={redo} />
          </Tooltip>
          <Tooltip title="导出图片">
            <Button size="small" icon={<Download size={14} />} onClick={exportPng} />
          </Tooltip>
          <Tooltip title="清空（连图片一起清）">
            <Button size="small" danger icon={<Trash2 size={14} />} onClick={() => setConfirmOpen(true)} />
          </Tooltip>
        </div>

        {/* 隐藏的文件选择器：手机上没有 Ctrl+V，靠它选相册/文件里的题图。 */}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={(event) => {
            void addPhotoFiles(event.target.files)
            event.target.value = ''
          }}
        />
      </div>

      {/*
        画布三层：纸纹 → 图片 → 笔迹。
        图片夹在中间是刻意的：笔迹画在图上，而橡皮（destination-out）只清笔迹层，
        擦辅助线时不会把题图擦出洞。
      */}
      <div ref={wrapRef} className="relative min-h-0 flex-1 select-none overflow-hidden bg-white">
        <canvas ref={paperRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
        <canvas ref={photoRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />
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
        {/* 空画布时给一句可发现性提示；画了东西就消失。 */}
        {isEmpty && (
          <div className="pointer-events-none absolute inset-0 grid place-items-center px-6 text-center text-[12.5px] leading-7 text-ink-3">
            <div>
              按住鼠标左键（或手指）就能打草稿
              <br />
              <span className="text-ink-2">Ctrl/⌘ + V 可以直接粘贴题目截图，然后在图上画辅助线</span>
            </div>
          </div>
        )}
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
