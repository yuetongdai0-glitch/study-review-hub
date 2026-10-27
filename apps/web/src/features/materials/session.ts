/**
 * 材料浏览会话（刷新后能回到原处）。
 *
 * @remarks
 * 用户要求：「刷新过后 应该还是这个页面 不应该关闭回到了草稿纸」
 * 「包括笔记和这些缩放配置也需要缓存」，以及双材料并排时「需要记住打开两个文件的位置」。
 *
 * 这里记「上次在干什么」，与材料内容本身分开：
 * - 笔记本来就在 IndexedDB 的 `notes` 表里，材料文件在 `materials` 里；
 * - 这个模块只记**会话状态**：开没开、左右各看的是哪份、各自缩放/页码/滚动、笔设置。
 *
 * 用 localStorage 而不是 IndexedDB：需要在**首帧同步**读出，
 * 决定了「刷新后是否直接把材料视图拉起来」。异步读会让界面先闪一下草稿纸。
 */

/** 存档键。 */
const KEY = 'materials:session:v1'

/** 左右两栏（也兼容单栏：只有 left 有值）。 */
export type PaneSide = 'left' | 'right'

/** 单栏的阅读状态。 */
export type PaneState = {
  /** 材料 id；空串表示这一栏是空的。 */
  id: string
  /** 缩放倍率。 */
  zoom: number
  /** 上次看的页（0 基），用于首帧立即定位。 */
  page: number
  /** 页内偏移比例（0~1），配合 page 精确定位到行。 */
  ratio: number
}

/** 会话状态。 */
export type MaterialSession = {
  /** 材料视图是否处于打开状态。 */
  open: boolean
  /** 左栏（主栏）。 */
  left: PaneState
  /** 右栏（对照栏）；id 为空表示只开一栏。 */
  right: PaneState
  /** 工具：画笔 / 橡皮。 */
  tool: 'pen' | 'eraser'
  /** 笔色。 */
  color: string
  /** 笔粗。 */
  size: number
  /** 当前激活的栏（决定快捷键与页码归谁）。 */
  active: PaneSide
  /**
   * 是否允许手写批注。
   *
   * @remarks 用户要求：「手机和平板默认关闭（只读、可滑动、不能做笔记，否则容易误触）；
   * 电脑也可以关闭」—— 关掉后是**只读**：仍能滚动、缩放、翻页，只是画布不接笔。
   * 默认值按设备类型给（触屏设备关闭），一旦用户手动改过就记住他的选择。
   */
  annotate: boolean
  /** 用户是否手动改过 annotate（改过之后就不再按设备类型覆盖）。 */
  annotateTouched: boolean
  /** 文件夹折叠状态（存 id 数组，避免存 Map）。 */
  collapsedFolders: string[]
  /**
   * 每份材料各自记住的阅读位置（材料 id → 页码/页内偏移/缩放）。
   *
   * @remarks
   * 用户原话：「这个位置保留能不能做好？做了一万遍还是保留不了？？？」
   *
   * 光有 left/right 不够：栏里换成另一份材料时，left 就被新材料的页码覆盖，
   * 原来那份「看到哪」就没了。所以位置必须**按材料 id** 单独存一份，
   * left/right 只表示「现在这一栏放的是哪份、当前在哪」。
   *
   * 只存 page/ratio/zoom 三个数，不存笔记（笔记本来就在 IndexedDB）。
   */
  spots: Record<string, PaneSpot>
}

/** 一份材料的阅读位置。 */
export type PaneSpot = {
  /** 页码（0 基）。 */
  page: number
  /** 页内偏移比例（0~1）。 */
  ratio: number
  /** 缩放倍率。 */
  zoom: number
}

/**
 * 是否为触屏设备（手机 / 平板）。
 *
 * @param 无。
 * @returns 是触屏设备返回 true。
 * @remarks 用「有没有粗指针」判断而不是看 UA：
 * 带触摸屏的笔记本也常报 `pointer: coarse` 之外的值，UA 更不可靠。
 * 这里同时接受 `any-pointer: coarse`，覆盖「触屏 + 鼠标」的二合一设备。
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(any-pointer: coarse)').matches
}

/** 空栏。 */
const EMPTY_PANE: PaneState = { id: '', zoom: 1, page: 0, ratio: 0 }

/** 默认会话。 */
const DEFAULT: MaterialSession = {
  open: false,
  left: { ...EMPTY_PANE },
  right: { ...EMPTY_PANE },
  tool: 'pen',
  color: '#1f2329',
  size: 3,
  active: 'left',
  collapsedFolders: [],
  annotate: true,
  annotateTouched: false,
  spots: {},
}

/** 位置记忆最多保留多少份材料（防止 localStorage 无限增长）。 */
const MAX_SPOTS = 200

/**
 * 规整「位置记忆」表。
 *
 * @param raw 原始数据。
 * @returns 只保留字段合法的条目。
 * @remarks 坏数据不能让它把整份会话读崩 —— 位置记忆只是体验优化。
 */
function normalizeSpots(raw: unknown): Record<string, PaneSpot> {
  if (!raw || typeof raw !== 'object') return {}
  const out: Record<string, PaneSpot> = {}
  for (const [id, value] of Object.entries(raw as Record<string, unknown>)) {
    if (!id) continue
    const spot = (value ?? {}) as Partial<PaneSpot>
    out[id] = {
      page: typeof spot.page === 'number' && spot.page >= 0 ? spot.page : 0,
      ratio: typeof spot.ratio === 'number' && spot.ratio >= 0 ? spot.ratio : 0,
      zoom: typeof spot.zoom === 'number' && spot.zoom > 0 ? spot.zoom : 1,
    }
  }
  return out
}

/**
 * 规整一栏的数据（逐字段兜底）。
 *
 * @param raw 原始数据。
 * @returns 安全的栏状态。
 */
function normalizePane(raw: unknown): PaneState {
  const data = (raw ?? {}) as Partial<PaneState>
  return {
    id: typeof data.id === 'string' ? data.id : '',
    zoom: typeof data.zoom === 'number' && data.zoom > 0 ? data.zoom : 1,
    page: typeof data.page === 'number' && data.page >= 0 ? data.page : 0,
    ratio: typeof data.ratio === 'number' && data.ratio >= 0 ? data.ratio : 0,
  }
}

/**
 * 读取会话。
 *
 * @returns 会话；损坏或没有时返回默认值。
 * @remarks 兼容旧版（v1 只有单个 `id`/`page`）：旧字段迁移到左栏，
 * 避免升级后用户「上次看到哪」全丢。
 */
export function readSession(): MaterialSession {
  try {
    const raw = window.localStorage.getItem(KEY)
    if (!raw) return { ...DEFAULT, left: { ...EMPTY_PANE }, right: { ...EMPTY_PANE }, spots: {} }
    const data = JSON.parse(raw) as Partial<MaterialSession> & { id?: string; page?: number }
    const legacyId = typeof data.id === 'string' ? data.id : ''
    const touched = data.annotateTouched === true
    const legacyPage = typeof data.page === 'number' ? data.page : 0
    return {
      open: typeof data.open === 'boolean' ? data.open : DEFAULT.open,
      left: data.left ? normalizePane(data.left) : { ...EMPTY_PANE, id: legacyId, page: legacyPage },
      right: normalizePane(data.right),
      tool: data.tool === 'eraser' ? 'eraser' : 'pen',
      color: typeof data.color === 'string' ? data.color : DEFAULT.color,
      size: typeof data.size === 'number' ? data.size : DEFAULT.size,
      active: data.active === 'right' ? 'right' : 'left',
      collapsedFolders: Array.isArray(data.collapsedFolders)
        ? data.collapsedFolders.filter((x): x is string => typeof x === 'string')
        : [],
      /*
       * 没手动改过时按设备类型给默认值：
       * 触屏设备（手机/平板）默认**不允许批注** —— 手一滑就画到材料上，很容易误触。
       * 这里放在读取时计算而不是模块加载时，是为了能响应屏幕尺寸变化（旋屏、外接键盘）。
       */
      annotate: touched ? data.annotate === true : !isTouchDevice(),
      annotateTouched: touched,
      spots: normalizeSpots(data.spots),
    }
  } catch {
    return { ...DEFAULT, left: { ...EMPTY_PANE }, right: { ...EMPTY_PANE }, spots: {} }
  }
}

/**
 * 写入会话（合并式更新）。
 *
 * @param patch 要改的字段。
 * @returns 写入后的完整会话。
 * @remarks 用合并而不是整体覆盖：调用点各自只关心自己的字段，
 * 传完整对象容易把别处刚写进去的值覆盖回旧值。
 * 栏状态是嵌套对象，这里也做**浅合并到栏**，避免「只改 zoom 把 id 冲掉」。
 */
export function writeSession(patch: Partial<MaterialSession>): MaterialSession {
  const current = readSession()
  const next: MaterialSession = {
    ...current,
    ...patch,
    left: patch.left ? { ...current.left, ...patch.left } : current.left,
    right: patch.right ? { ...current.right, ...patch.right } : current.right,
    /*
     * `spots` 也是**合并**而不是整块替换：
     * 只记一份材料的位置时，不能把其它材料的位置一起冲掉。
     */
    spots: patch.spots ? { ...current.spots, ...patch.spots } : current.spots,
  }
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    // 存不下就算了：会话只是「体验优化」，不该阻断使用。
  }
  return next
}

/**
 * 只更新某一栏。
 *
 * @param side 哪一栏。
 * @param patch 该栏要改的字段。
 * @returns 写入后的完整会话。
 */
export function writePane(side: PaneSide, patch: Partial<PaneState>): MaterialSession {
  return writeSession({ [side]: patch } as Partial<MaterialSession>)
}

/**
 * 记住某份材料的阅读位置。
 *
 * @param materialId 材料 id。
 * @param spot 位置（可只给部分字段，其余沿用上次）。
 * @returns 无返回。
 * @remarks
 * 用户要求「切换材料时上个材料的位置要保留」，这份记录就是那件事的载体。
 *
 * 空 id 直接忽略：没有材料的空栏不该产生垃圾条目。
 * 超过 `MAX_SPOTS` 时按插入顺序丢掉最早的（对象键序即插入序），
 * 避免 localStorage 被几百份材料的历史位置撑爆。
 */
export function rememberSpot(materialId: string, spot: Partial<PaneSpot>): void {
  if (!materialId) return
  const current = readSession()
  const prev = current.spots[materialId] ?? { page: 0, ratio: 0, zoom: 1 }
  const merged: PaneSpot = {
    page: typeof spot.page === 'number' && spot.page >= 0 ? spot.page : prev.page,
    ratio: typeof spot.ratio === 'number' && spot.ratio >= 0 ? spot.ratio : prev.ratio,
    zoom: typeof spot.zoom === 'number' && spot.zoom > 0 ? spot.zoom : prev.zoom,
  }

  const keys = Object.keys(current.spots)
  let spots = { ...current.spots, [materialId]: merged }
  if (keys.length >= MAX_SPOTS && !(materialId in current.spots)) {
    const oldest = keys[0]
    if (oldest) {
      const { [oldest]: _dropped, ...rest } = spots
      spots = rest
    }
  }
  // 已经存在时只更新值，位置保持不变（不因为"刚看过"就跳到队尾）。
  writeSession({ spots })
}

/**
 * 取某份材料上次看到的位置。
 *
 * @param materialId 材料 id。
 * @returns 位置；没有记录时返回 null（调用方据此决定用默认值）。
 */
export function readSpot(materialId: string): PaneSpot | null {
  if (!materialId) return null
  return readSession().spots[materialId] ?? null
}

/**
 * 清空会话（把材料视图彻底关掉时用）。
 *
 * @returns 无返回。
 * @remarks 只把 `open` 置 false，保留左右栏与笔设置：
 * 下次再打开仍回到上次看的那两份材料。
 */
export function resetSession(): void {
  writeSession({ open: false })
}
