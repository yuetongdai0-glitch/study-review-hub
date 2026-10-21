/**
 * 材料浏览会话（刷新后能回到原处）。
 *
 * @remarks
 * 用户要求：「刷新过后 应该还是这个页面 不应该关闭回到了草稿纸」
 * 「包括笔记和这些缩放配置也需要缓存」。
 *
 * 这里记「上次在干什么」，与材料内容本身分开：
 * - 笔记本来就在 IndexedDB 的 `notes` 表里，材料文件在 `materials` 里；
 * - 这个模块只记**会话状态**：开没开、看的是哪份、缩放多少、用的什么笔、第几页。
 *
 * 用 localStorage 而不是 IndexedDB：需要在**首帧同步**读出，
 * 决定了「刷新后是否直接把材料视图拉起来」。异步读会让界面先闪一下草稿纸。
 */

/** 存档键。 */
const KEY = 'materials:session:v1'

/** 会话状态。 */
export type MaterialSession = {
  /** 材料视图是否处于打开状态。 */
  open: boolean
  /** 上次打开的材料 id；空串表示停在材料列表。 */
  id: string
  /** 缩放倍率。 */
  zoom: number
  /** 工具：画笔 / 橡皮。 */
  tool: 'pen' | 'eraser'
  /** 笔色。 */
  color: string
  /** 笔粗。 */
  size: number
  /** 上次看的页（0 基），与 db 里的滚动记录并存，供首帧兜底。 */
  page: number
}

/** 默认会话。 */
const DEFAULT: MaterialSession = {
  open: false,
  id: '',
  zoom: 1,
  tool: 'pen',
  color: '#1f2329',
  size: 3,
  page: 0,
}

/**
 * 读取会话。
 *
 * @returns 会话；损坏或没有时返回默认值。
 */
export function readSession(): MaterialSession {
  try {
    const raw = window.localStorage.getItem(KEY)
    if (!raw) return { ...DEFAULT }
    const data = JSON.parse(raw) as Partial<MaterialSession>
    // 逐字段兜底：旧版本存档可能缺字段，不能让一条坏数据把整个界面锁死。
    return {
      open: typeof data.open === 'boolean' ? data.open : DEFAULT.open,
      id: typeof data.id === 'string' ? data.id : DEFAULT.id,
      zoom: typeof data.zoom === 'number' && data.zoom > 0 ? data.zoom : DEFAULT.zoom,
      tool: data.tool === 'eraser' ? 'eraser' : 'pen',
      color: typeof data.color === 'string' ? data.color : DEFAULT.color,
      size: typeof data.size === 'number' ? data.size : DEFAULT.size,
      page: typeof data.page === 'number' ? data.page : DEFAULT.page,
    }
  } catch {
    return { ...DEFAULT }
  }
}

/**
 * 写入会话（合并式更新）。
 *
 * @param patch 要改的字段。
 * @returns 写入后的完整会话。
 * @remarks 用合并而不是整体覆盖：调用点各自只关心自己的字段，
 * 传完整对象容易把别处刚写进去的值覆盖回旧值。
 */
export function writeSession(patch: Partial<MaterialSession>): MaterialSession {
  const next = { ...readSession(), ...patch }
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    // 存不下就算了：会话只是「体验优化」，不该阻断使用。
  }
  return next
}

/**
 * 清空会话（把材料视图彻底关掉时用）。
 *
 * @returns 无返回。
 */
export function resetSession(): void {
  writeSession({ open: false, id: '' })
}
