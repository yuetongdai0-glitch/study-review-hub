/**
 * 导入材料的本地存储（IndexedDB）。
 *
 * @remarks
 * **核心决策：只存原始文件，不存转好的图片。**
 *
 * 早先的实现是「导入时把每页渲染成位图存起来」，两个致命问题：
 * 1. 体积与峰值内存：100 页 PDF 每页 100~200KB 位图，光存储 10~20MB，
 *    导入过程要把整份文件全渲染一遍（几百 MB 瞬时峰值，实测直接把页面跑挂）；
 * 2. 失真：位图不能选中、不能搜索、放大就糊。
 *
 * 现在改成：`file` 存原始 Blob（一份，≈源文件大小），
 * 显示时按**可视区 + 安全区**现渲染，离开安全区就释放。
 * DOCX / PPTX 直接以 DOM 呈现（矢量、可选中），只有 PDF 需要走 canvas，
 * 且只渲染视口附近那几页。
 *
 * store 分工：
 * - `materials` 材料清单 + 原始文件 Blob + DOCX 正文 + PPT 文字块
 * - `notes`     每页笔迹（与草稿纸同一套 Stroke 结构）
 * - `meta`      杂项，例如上次滚动到的页
 */

/** 数据库名。 */
const DB_NAME = 'study-hub-materials'
/**
 * 结构版本。
 *
 * @remarks
 * v2 起不再存逐页位图；v3 增加文件夹；v4 给文件夹加 `parentId` 索引。
 *
 * **只能加不能减**：IndexedDB 不允许用低版本打开已有的库
 * （`VersionError: The requested version (x) is less than the existing version (y)`）。
 * 曾把带 v4 的构建部署过一次，用户的库就永久停在 v4；
 * 之后若把常量改回 3，等于让所有老用户都打不开自己的资料（数据还在，但连不上）。
 * 改这里之前先想清楚：已经在用户机器上的最高版本是多少。
 */
const DB_VERSION = 4

/** 文件夹（只支持一层，够用且不会让树变复杂）。 */
export type Folder = {
  id: string
  name: string
  createdAt: number
}

/** 材料来源格式。 */
export type MaterialKind = 'pdf' | 'docx' | 'pptx'

/** PPT 一页里的一个文字块（矢量，够画一份可读的预览）。 */
export type PptShape = {
  x: number
  y: number
  w: number
  h: number
  text: string
  /** 字号（CSS 像素，已换算）。 */
  size: number
  bold: boolean
}

/** 材料清单项。 */
export type Material = {
  id: string
  /** 用户起的名字（不填则用文件名）。 */
  name: string
  /** 原始文件名，列表里作副标题。 */
  fileName: string
  kind: MaterialKind
  /** 页数。 */
  pageCount: number
  /** 单页基准尺寸（CSS 像素），用于撑占位、保持滚动条稳定。 */
  pageW: number
  pageH: number
  /** 原始文件。只存这一份，显示时按需解析。 */
  file?: Blob
  /** DOCX 专用：整篇正文 HTML（矢量，可选中）。 */
  docxHtml?: string
  /** PPTX 专用：每页的文字块（矢量），解析一次后随清单存下。 */
  pptSlides?: PptShape[][]
  /**
   * 所属文件夹 id。
   *
   * @remarks 空串/未设置表示「未分类」，直接显示在根上。
   * 只做一层，不做嵌套：材料数量级是几十份，一层足够，
   * 嵌套会让拖拽与折叠逻辑成倍复杂而收益很小。
   */
  folderId?: string
  createdAt: number
  updatedAt: number
}

/** 一页上的笔迹；结构与草稿纸一致，便于复用绘制/擦除实现。 */
export type NoteStroke = { t: 'pen' | 'eraser'; c: string; w: number; p: number[] }

/** 打开数据库（懒加载，模块级缓存）。 */
let dbPromise: Promise<IDBDatabase> | null = null

/**
 * 取数据库连接。
 *
 * @returns 数据库实例。
 * @remarks 首次调用负责建表；后续复用同一 Promise，避免并发 open 拿到两份连接。
 */
export function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise
  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains('materials')) {
        const store = db.createObjectStore('materials', { keyPath: 'id' })
        store.createIndex('createdAt', 'createdAt')
      }
      if (!db.objectStoreNames.contains('folders')) {
        const store = db.createObjectStore('folders', { keyPath: 'id' })
        store.createIndex('createdAt', 'createdAt')
        store.createIndex('parentId', 'parentId')
      }
      /*
       * v3 → v4：文件夹加 `parentId` 索引（树形）。
       *
       * ⚠️ 版本号**不能低于**浏览器里已有的库。
       * IndexedDB 不允许降级打开：库里是 v4、代码却 `open(name, 3)`，
       * 会直接抛 `VersionError: The requested version (3) is less than the existing version (4)`，
       * 表现是「材料列表空白 + 导入失败」，但**数据一条都没丢**，只是连不上。
       * 之前把带 v4 的版本部署过一次，用户的库就停在 v4 了；
       * 代码必须跟上，否则退回旧版代码等于把库锁死。
       *
       * 旧记录没有 parentId，读取时按空串（= 根目录）处理，所以不必回填。
       */
      if (request.transaction && request.transaction.objectStoreNames.contains('folders')) {
        const store = request.transaction.objectStore('folders')
        if (!store.indexNames.contains('parentId')) store.createIndex('parentId', 'parentId')
      }
      if (!db.objectStoreNames.contains('notes')) {
        db.createObjectStore('notes', { keyPath: ['materialId', 'index'] })
      }
      if (!db.objectStoreNames.contains('meta')) {
        db.createObjectStore('meta', { keyPath: 'key' })
      }
      // v1 的「逐页位图」表已废弃：升级时删掉，既省空间也防误读旧数据。
      if (db.objectStoreNames.contains('pages')) {
        db.deleteObjectStore('pages')
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error ?? new Error('无法打开本地材料库'))
  })
  /*
   * 失败不要留在缓存里。
   *
   * `dbPromise` 是模块级缓存：一旦缓存了一个 rejected Promise，
   * 之后所有 `openDb()` 都会立刻失败 —— 用户看到的是「列表一直空、
   * 导入永远报错」，除了刷新页面没有任何出路。
   * 清掉缓存，下一次操作会重新尝试打开（比如另一个标签页降级关掉了连接后）。
   */
  dbPromise.catch(() => {
    dbPromise = null
  })
  return dbPromise
}

/**
 * 把一次读写包成 Promise。
 *
 * @param store 仓库名。
 * @param mode 读写模式。
 * @param run 具体操作。
 * @returns 操作结果。
 */
async function withStore<T>(
  store: 'materials' | 'notes' | 'meta' | 'folders',
  mode: IDBTransactionMode,
  /*
   * 写入类请求是 `IDBRequest<IDBValidKey>`，读取类才是 `IDBRequest<T>`。
   * `IDBRequest` 的泛型在 `onerror` 上不协变，用 `unknown` 收窄反而报错，
   * 所以这里只能用 any 兜住，由调用方各自断言关心的结果类型。
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  run: (store: IDBObjectStore) => IDBRequest<any> | void,
): Promise<T | undefined> {
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, mode)
    const target = tx.objectStore(store)
    let result: T | undefined
    const request = run(target)
    if (request) request.onsuccess = () => (result = request.result as T)
    tx.oncomplete = () => resolve(result)
    tx.onerror = () => reject(tx.error ?? new Error('本地读写失败'))
    tx.onabort = () => reject(tx.error ?? new Error('本地读写被中断'))
  })
}

/** 列出全部材料，按导入时间倒序。 */
export function listMaterials(): Promise<Material[]> {
  return withStore<Material[]>('materials', 'readonly', (store) => store.getAll() as IDBRequest<Material[]>).then(
    (items) => (items ?? []).sort((a, b) => b.createdAt - a.createdAt),
  )
}

/**
 * 取单份材料。
 *
 * @param id 材料 id。
 * @returns 材料；不存在返回 null。
 */
export async function getMaterial(id: string): Promise<Material | null> {
  const row = await withStore<Material>('materials', 'readonly', (store) => store.get(id) as IDBRequest<Material>)
  return row ?? null
}

/**
 * 新增或更新材料清单。
 *
 * @param material 材料。
 * @returns 无返回。
 */
export function putMaterial(material: Material): Promise<void> {
  return withStore<void>('materials', 'readwrite', (store) => store.put(material)).then(() => undefined)
}

/**
 * 删除一份材料连同它的笔记。
 *
 * @param id 材料 id。
 * @returns 无返回。
 */
export async function deleteMaterial(id: string): Promise<void> {
  const db = await openDb()
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(['materials', 'notes', 'meta'], 'readwrite')
    tx.objectStore('materials').delete(id)
    const notes = tx.objectStore('notes')
    const cursor = notes.openKeyCursor()
    cursor.onsuccess = () => {
      const c = cursor.result
      if (!c) return
      if (Array.isArray(c.key) && c.key[0] === id) notes.delete(c.key)
      c.continue()
    }
    tx.objectStore('meta').delete(`scroll:${id}`)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error ?? new Error('删除失败'))
  })
}

/* ---------------- 文件夹 ---------------- */

/**
 * 列出全部文件夹。
 *
 * @returns 文件夹数组（按创建时间正序）。
 */
export async function listFolders(): Promise<Folder[]> {
  const items = await withStore<Folder[]>('folders', 'readonly', (store) =>
    store.getAll() as IDBRequest<Folder[]>,
  )
  return (items ?? []).sort((a, b) => a.createdAt - b.createdAt)
}

/**
 * 新建文件夹。
 *
 * @param name 文件夹名。
 * @returns 新建的文件夹。
 */
export async function createFolder(name: string): Promise<Folder> {
  const folder: Folder = {
    id: `f-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    name: name.trim() || '新建文件夹',
    createdAt: Date.now(),
  }
  await withStore<void>('folders', 'readwrite', (store) => store.put(folder))
  return folder
}

/**
 * 重命名文件夹。
 *
 * @param id 文件夹 id。
 * @param name 新名字。
 * @returns 无返回。
 */
export function renameFolder(id: string, name: string): Promise<void> {
  // 回调里再 put：同一个事务内先 get 后 put 是安全的，不会被别的写入插队。
  return withStore<void>('folders', 'readwrite', (store) => {
    const get = store.get(id) as IDBRequest<Folder>
    get.onsuccess = () => {
      const row = get.result
      if (row) store.put({ ...row, name: name.trim() || row.name })
    }
    return undefined
  }).then(() => undefined)
}

/**
 * 删除文件夹（夹内材料不删，退回未分类）。
 *
 * @param id 文件夹 id。
 * @returns 无返回。
 */
export async function deleteFolder(id: string): Promise<void> {
  const all = await listMaterials()
  const db = await openDb()
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(['folders', 'materials'], 'readwrite')
    tx.objectStore('folders').delete(id)
    const store = tx.objectStore('materials')
    // 把夹内材料挪到未分类，避免「删了文件夹材料也跟着消失」这种数据丢失。
    for (const item of all.filter((m) => m.folderId === id)) {
      store.put({ ...item, folderId: '' })
    }
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error ?? new Error('删除文件夹失败'))
  })
}

/**
 * 把材料移到某个文件夹（空串 = 未分类）。
 *
 * @param materialId 材料 id。
 * @param folderId 目标文件夹 id。
 * @returns 无返回。
 */
export async function moveMaterial(materialId: string, folderId: string): Promise<void> {
  const material = await getMaterial(materialId)
  if (!material) return
  await putMaterial({ ...material, folderId, updatedAt: Date.now() })
}

/**
 * 重命名材料。
 *
 * @param materialId 材料 id。
 * @param name 新名字。
 * @returns 无返回。
 */
export async function renameMaterial(materialId: string, name: string): Promise<void> {
  const material = await getMaterial(materialId)
  if (!material) return
  const next = name.trim()
  if (!next) return
  await putMaterial({ ...material, name: next, updatedAt: Date.now() })
}

/**
 * 写入某页的笔迹。
 *
 * @param materialId 材料 id。
 * @param index 页序。
 * @param strokes 笔迹数组；空数组表示该页没有笔记。
 * @returns 无返回。
 */
export function putNotes(materialId: string, index: number, strokes: NoteStroke[]): Promise<void> {
  return withStore<void>('notes', 'readwrite', (store) => store.put({ materialId, index, strokes })).then(
    () => undefined,
  )
}

/**
 * 一次取出整份材料的所有笔迹（打开材料时批量载入，避免逐页异步闪烁）。
 *
 * @param materialId 材料 id。
 * @returns 以页序为键的笔迹表。
 */
export async function getAllNotes(materialId: string): Promise<Map<number, NoteStroke[]>> {
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction('notes', 'readonly')
    const store = tx.objectStore('notes')
    const cursor = store.openCursor()
    const map = new Map<number, NoteStroke[]>()
    cursor.onsuccess = () => {
      const c = cursor.result
      if (!c) return
      const key = c.key
      if (Array.isArray(key) && key[0] === materialId) map.set(Number(key[1]), c.value.strokes ?? [])
      c.continue()
    }
    tx.oncomplete = () => resolve(map)
    tx.onerror = () => reject(tx.error ?? new Error('读取笔记失败'))
  })
}

/**
 * 清空某份材料的全部笔迹（一键清除笔记）。
 *
 * @param materialId 材料 id。
 * @returns 被清掉的页数。
 * @remarks 逐条按复合键删；同时把 `updatedAt` 之外的东西都保留，
 * 材料文件本身绝不动 —— 只清笔记。
 */
export async function clearAllNotes(materialId: string): Promise<number> {
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction('notes', 'readwrite')
    const store = tx.objectStore('notes')
    const cursor = store.openKeyCursor()
    let removed = 0
    cursor.onsuccess = () => {
      const c = cursor.result
      if (!c) return
      if (Array.isArray(c.key) && c.key[0] === materialId) {
        store.delete(c.key)
        removed += 1
      }
      c.continue()
    }
    tx.oncomplete = () => resolve(removed)
    tx.onerror = () => reject(tx.error ?? new Error('清除笔记失败'))
  })
}

/**
 * 记录上次滚动到的页。
 *
 * @param materialId 材料 id。
 * @param page 页序。
 * @returns 无返回。
 */
export function setScrollPage(materialId: string, page: number): Promise<void> {
  return withStore<void>('meta', 'readwrite', (store) =>
    store.put({ key: `scroll:${materialId}`, value: page }),
  ).then(() => undefined)
}

/**
 * 读取上次滚动到的页。
 *
 * @param materialId 材料 id。
 * @returns 页序；没记录返回 0。
 */
export async function getScrollPage(materialId: string): Promise<number> {
  const row = await withStore<{ value: number }>('meta', 'readonly', (store) =>
    store.get(`scroll:${materialId}`) as IDBRequest<{ value: number }>,
  )
  return typeof row?.value === 'number' ? row.value : 0
}
