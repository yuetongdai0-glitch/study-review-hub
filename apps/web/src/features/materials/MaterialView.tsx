import { App, Button, Dropdown, Input, Modal, Tooltip } from 'antd'
import {
  ArrowLeft,
  ArrowLeftRight,
  Eraser,
  FileText,
  FolderOpen,
  FolderPlus,
  ListChecks,
  NotebookPen,
  Pen,
  PenOff,
  Pencil,
  RotateCcw,
  Columns2,
  Trash2,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ChoiceSheet from '@/components/features/ChoiceSheet'
import ExamSheet from '@/components/features/ExamSheet'
import FullScreenLayer from '@/components/features/FullScreenLayer'
import MaterialPane from '@/features/materials/MaterialPane'
import {
  clearAllNotes,
  createFolder,
  deleteFolder,
  deleteMaterial,
  getMaterial,
  listFolders,
  listMaterials,
  moveMaterial,
  putMaterial,
  renameFolder,
  renameMaterial,
  type Folder,
  type Material,
} from '@/features/materials/db'
import { detectKind, parseMaterial } from '@/features/materials/parse'
import { readSession, readSpot, rememberSpot, writePane, writeSession, type PaneSide } from '@/features/materials/session'

/** 预设色板（与草稿纸一致）。 */
const SWATCHES = ['#1f2329', '#c0392b', '#1f5fd6', '#0f766e', '#b45309', '#5b4bd6']
const SIZE_MIN = 1
const SIZE_MAX = 16
const ZOOM_MIN = 0.6
const ZOOM_MAX = 3
const ZOOM_STEP = 0.2

/** 正在内联编辑的目标（材料名 / 文件夹名）。 */
type Editing = { kind: 'material' | 'folder'; id: string; value: string } | null

/**
 * 材料主视图：列表（文件夹树）+ 单/双栏阅读。
 *
 * @param props 组件属性。
 * @returns 材料管理界面。
 * @remarks
 * 对应用户五条反馈：材料可重命名；双材料并排对照（题目+答案）；
 * 文件夹树；列表页滚动错位；提示不挡操作（样式层）。
 *
 * **双栏的关键约束**：左右两栏是**两个独立组件实例**（`MaterialPane`），
 * 各自的滚动容器、canvas 表、笔迹表、缩放、页码互不共享。
 * 用户明确要求「特别是滚动条需要注意」「记住打开两个文件的位置」
 * 「笔记也是对应笔记上的」—— 共享任何一个 ref 都会串味。
 */
export default function MaterialView({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { message, modal } = App.useApp()

  const [materials, setMaterials] = useState<Material[]>([])
  const [folders, setFolders] = useState<Folder[]>([])
  const [pendingFile, setPendingFile] = useState<{ file: File; name: string } | null>(null)
  const [importing, setImporting] = useState(false)
  const [editing, setEditing] = useState<Editing>(null)
  /** 折叠的文件夹 id（与会话共享）。 */
  const [collapsed, setCollapsed] = useState<string[]>(() => readSession().collapsedFolders)
  const fileRef = useRef<HTMLInputElement>(null)

  /* 阅读态（全部落会话，刷新后还原） */
  const initial = useRef(readSession()).current
  /*
   * 初值优先用「这份材料的记忆位置」，其次才是会话里的栏位置。
   *
   * 两层存储各管一件事：left/right 记「这一栏当前放的是谁」，
   * `spots` 按材料 id 记「这份材料上次看到哪」。刷新后要用后者才对得上用户印象。
   */
  const initialLeftSpot = readSpot(initial.left.id)
  const initialRightSpot = readSpot(initial.right.id)
  const [leftId, setLeftId] = useState(initial.left.id)
  const [rightId, setRightId] = useState(initial.right.id)
  const [leftZoom, setLeftZoom] = useState(initialLeftSpot?.zoom || initial.left.zoom || 1)
  const [rightZoom, setRightZoom] = useState(initialRightSpot?.zoom || initial.right.zoom || 1)
  const [activeSide, setActiveSide] = useState<PaneSide>(initial.active)
  /**
   * 每栏的「进入序号」。
   *
   * @remarks
   * 这个组件是常驻的（靠 `open` 开关，不卸载），
   * 所以同一份材料切走再切回时，Pane 内部的 `material.id` 没变、
   * 恢复阅读位置的 effect 不会重跑 —— 位置就丢了。
   * 每次 `openInto` 递增对应栏的序号，逼 Pane 重新恢复一次。
   */
  const [leftEnter, setLeftEnter] = useState(0)
  const [rightEnter, setRightEnter] = useState(0)
  const [tool, setTool] = useState<'pen' | 'eraser'>(initial.tool)
  /**
   * 是否允许手写批注。
   *
   * @remarks 用户要求：「手机和平板默认关闭，可以手动打开；电脑也可以关闭」。
   * 关闭 = **只读**：滚动、缩放、翻页、看笔记都正常，只是画布不接笔，
   * 避免手指划过屏幕就留下笔迹（触屏上尤其容易误触）。
   * 初值来自会话（未手动改过时按设备类型给默认）。
   */
  const [annotate, setAnnotate] = useState(initial.annotate)
  const [color, setColor] = useState(initial.color)
  const [size, setSize] = useState(initial.size)
  /** 两份材料的标题与页码（由 Pane 回报，供工具条显示）。 */
  const [meta, setMeta] = useState<{
    left: { name: string; page: number; total: number }
    right: { name: string; page: number; total: number }
  }>({
    left: { name: '', page: 1, total: 0 },
    right: { name: '', page: 1, total: 0 },
  })
  /** 两栏的撤销动作（快捷键按激活栏分派）。 */
  const actionsRef = useRef<
    Record<PaneSide, { undo: () => void; redo: () => void; clearPage: () => void; clearAll: () => void } | null>
  >({ left: null, right: null })

  const [quizOpen, setQuizOpen] = useState(false)
  const [examOpen, setExamOpen] = useState(false)
  /** 「从已有材料中导入」的选择弹窗，以及要放进哪一栏。 */
  const [pick, setPick] = useState<PaneSide | null>(null)

  const twoPanes = Boolean(rightId)
  const activeId = activeSide === 'right' ? rightId : leftId

  /* ---------------- 列表 ---------------- */

  const refresh = useCallback(async () => {
    const [list, fold] = await Promise.all([listMaterials(), listFolders()])
    setMaterials(list)
    setFolders(fold)
  }, [])

  useEffect(() => {
    if (!open) return
    void refresh()
  }, [open, refresh])

  /* ---------------- 导入 ---------------- */

  const askName = useCallback(
    (file: File) => {
      if (!detectKind(file.name)) {
        message.error('只支持 PDF / DOCX / PPTX 三种格式')
        return
      }
      setPendingFile({ file, name: file.name.replace(/\.(pdf|docx|pptx)$/i, '') })
    },
    [message],
  )

  const confirmImport = useCallback(async () => {
    const pending = pendingFile
    if (!pending) return
    const name = pending.name.trim() || pending.file.name.replace(/\.(pdf|docx|pptx)$/i, '')
    setPendingFile(null)
    setImporting(true)
    /*
     * 大文件在手机上解析要好几秒，必须给出可见反馈 ——
     * 否则用户只看到「点了导入什么都没发生」，以为功能坏了（移动端就是这样被投诉的）。
     * 提示不自动关闭，解析结束后手动收掉。
     */
    const big = pending.file.size > 80 * 1024 * 1024
    const tip = message.loading(
      big
        ? `正在解析《${name}》（${(pending.file.size / 1024 / 1024).toFixed(0)} MB，稍等…）`
        : `正在解析《${name}》…`,
      0,
    )
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
        file: pending.file,
        docxHtml: parsed.docxHtml,
        pptSlides: parsed.pptSlides,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }
      await putMaterial(material)
      await refresh()
      tip()
      message.success(`已导入《${name}》，共 ${parsed.pageCount} 页`)
      // 导入后直接打开到左栏；这里不走 openInto，所以也要记会话。
      setLeftId(material.id)
      setLeftZoom(1)
      // 新导入的材料从第 1 页开始看，同时递增进入序号让 Pane 重新复位。
      setLeftEnter((value) => value + 1)
      writePane('left', { id: material.id, zoom: 1, page: 0, ratio: 0 })
      writeSession({ open: true })
    } catch (error) {
      tip()
      /*
       * 失败一定要说清「为什么」：
       * 手机端最常见的是内存不足（文件太大）或存储配额不足 ——
       * 只写「未知错误」用户完全无从下手。
       */
      const raw = error instanceof Error ? error.message : String(error)
      const hint = /memory|allocation|out of|Array buffer/i.test(raw)
        ? '（文件太大，设备内存不足；试试拆分或压缩后再导入）'
        : /quota|storage|space/i.test(raw)
          ? '（本地存储空间不足，先删掉一些旧材料再试）'
          : ''
      message.error(`导入失败：${raw || '未知错误'}${hint}`, 8)
    } finally {
      setImporting(false)
    }
  }, [pendingFile, refresh, message])

  /* ---------------- 打开 / 切换 ---------------- */

  /**
   * 打开某份材料到指定栏。
   *
   * @param side 哪一栏。
   * @param id 材料 id。
   * @returns 无返回。
   * @remarks
   * 用户原话：「这个位置保留能不能做好？做了一万遍还是保留不了？？？」
   *
   * 以前这里无条件写 `{ id, zoom: 1, page: 0, ratio: 0 }`：
   * ① 新材料总是回到第 1 页（它自己的旧位置被覆盖）；
   * ② 原来那份材料的位置也被这一行抹掉了。
   *
   * 现在两件事分开做：
   * - **离开前**：把当前栏这份材料的位置写进 `spots[id]`（按材料记）；
   * - **进入时**：先查 `spots[id]`，有记录就从那儿接着看，没有才回到首页。
   */
  const openInto = useCallback((side: PaneSide, id: string) => {
    // 1. 把离开的那份材料的位置存下来（用会话里的最新值，不是 React state）。
    const before = readSession()
    const leaving = before[side]
    if (leaving.id && leaving.id !== id) {
      rememberSpot(leaving.id, { page: leaving.page, ratio: leaving.ratio, zoom: leaving.zoom })
    }

    // 2. 新材料若有记忆位置，就从那儿接着看。
    const spot = readSpot(id)
    const next = {
      id,
      zoom: spot?.zoom ?? 1,
      page: spot?.page ?? 0,
      ratio: spot?.ratio ?? 0,
    }

    if (side === 'left') {
      setLeftId(id)
      setLeftZoom(next.zoom)
      // 递增进入序号：让 Pane 重新执行「恢复阅读位置」。
      setLeftEnter((value) => value + 1)
    } else {
      setRightId(id)
      setRightZoom(next.zoom)
      setRightEnter((value) => value + 1)
    }
    writePane(side, next)
    writeSession({ open: true, active: side })
    setActiveSide(side)
  }, [])

  /**
   * 左右两栏互换。
   *
   * @returns 无返回。
   * @remarks 用户要求「中间能有一个按钮点击就能互换位置」。
   * 互换的是**整栏内容**（材料 id + 缩放 + 页码 + 页内比例），不是只换标题：
   * 用户想的是「把答案挪到左边来对着看」，所以连他在这份材料上看到的位置、调过的缩放
   * 都要一起搬过去，否则换完还得重新找地方。
   *
   * 会话里两栏是各自独立的键（left/right），所以这里要**整组对调**，
   * 不能只 setLeftId/setRightId —— 否则刷新后缩放与页码会串到另一边。
   */
  const swapPanes = useCallback(() => {
    if (!rightId) return
    const session = readSession()
    const nextLeft = { ...session.right }
    const nextRight = { ...session.left }
    setLeftId(nextLeft.id)
    setLeftZoom(nextLeft.zoom || 1)
    setRightId(nextRight.id)
    setRightZoom(nextRight.zoom || 1)
    // 元信息（标题/页码）也跟着换，避免工具条显示错位。
    setMeta((prev) => ({ left: prev.right, right: prev.left }))
    // 会话整组对调：这是「位置记忆」正确的关键。
    writeSession({ left: nextLeft, right: nextRight })
    // 两栏内容对调了，各自都要重新落位（用它们自己的记忆位置）。
    setLeftEnter((value) => value + 1)
    setRightEnter((value) => value + 1)
    // 激活栏留在原来那侧会切到另一份材料上，统一回到左栏更符合直觉。
    setActiveSide('left')
    writeSession({ active: 'left' })
  }, [rightId])

  /**
   * 关闭某一栏。
   *
   * @param side 哪一栏。
   * @returns 无返回。
   * @remarks 关左栏时把右栏顶上来，避免出现「左边空、右边满」的怪布局。
   */
  const closePane = useCallback(
    (side: PaneSide) => {
      if (side === 'left') {
        if (rightId) {
          // 右栏顶到左栏：**沿用右栏当时的位置**，不要写死回第 1 页。
          const rightPane = readSession().right
          setLeftId(rightId)
          setLeftZoom(rightZoom)
          setLeftEnter((value) => value + 1)
          writePane('left', {
            id: rightId,
            zoom: rightZoom,
            page: rightPane.page,
            ratio: rightPane.ratio,
          })
        } else {
          setLeftId('')
          writePane('left', { id: '' })
        }
        setRightId('')
        writePane('right', { id: '' })
        setActiveSide('left')
      } else {
        setRightId('')
        writePane('right', { id: '' })
        setActiveSide('left')
      }
    },
    [rightId, rightZoom],
  )

  /* 刷新后自动恢复上次那两份材料：只跑一次，且先判断再置位。 */
  const restoredRef = useRef(false)
  useEffect(() => {
    if (!open || restoredRef.current) return
    const session = readSession()
    if (!session.left.id && !session.right.id) return
    restoredRef.current = true
    void (async () => {
      const [left, right] = await Promise.all([
        session.left.id ? getMaterial(session.left.id) : Promise.resolve(null),
        session.right.id ? getMaterial(session.right.id) : Promise.resolve(null),
      ])
      // 材料可能已被删除：清掉无效引用，不弹错打扰用户。
      if (session.left.id && !left) {
        setLeftId('')
        writePane('left', { id: '' })
      }
      if (session.right.id && !right) {
        setRightId('')
        writePane('right', { id: '' })
      }
    })()
  }, [open])

  /* ---------------- 缩放 / 笔设置 ---------------- */

  const currentZoom = activeSide === 'right' ? rightZoom : leftZoom
  const setZoomOf = useCallback(
    (side: PaneSide, value: number) => {
      const next = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, Math.round(value * 10) / 10))
      const targetId = side === 'left' ? leftId : rightId
      if (side === 'left') setLeftZoom(next)
      else setRightZoom(next)
      writePane(side, { zoom: next })
      /*
       * 缩放也按材料记：切走再切回原来那份时，
       * 用户调过的缩放要跟着回来，而不是被重置成 100%。
       */
      if (targetId) rememberSpot(targetId, { zoom: next })
    },
    [leftId, rightId],
  )
  const changeZoom = (delta: number) => setZoomOf(activeSide, currentZoom + delta)

  /* ---------------- 快捷键（作用在激活栏） ---------------- */

  useEffect(() => {
    /*
     * 只读模式下连快捷键也停用：否则「界面不让改，Ctrl+Z 却能改」，
     * 状态就自相矛盾了（用户也可能误触撤掉别人的笔记）。
     */
    if (!open || !activeId || !annotate) return
    const onKey = (event: KeyboardEvent) => {
      const meta = event.metaKey || event.ctrlKey
      if (!meta) return
      const key = event.key.toLowerCase()
      const isUndo = key === 'z' && !event.shiftKey
      const isRedo = (key === 'z' && event.shiftKey) || key === 'y'
      if (!isUndo && !isRedo) return
      // 输入框里放行给浏览器，别抢用户自己的文本撤销。
      const target = event.target as HTMLElement | null
      const tag = target?.tagName?.toLowerCase()
      if (tag === 'textarea' || tag === 'input' || target?.isContentEditable) return
      event.preventDefault()
      const actions = actionsRef.current[activeSide]
      if (!actions) return
      if (isUndo) actions.undo()
      else actions.redo()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, activeId, activeSide, annotate])

  /* ---------------- 重命名 ---------------- */

  const commitEditing = useCallback(async () => {
    const target = editing
    if (!target) return
    const value = target.value.trim()
    setEditing(null)
    if (!value) return
    if (target.kind === 'material') await renameMaterial(target.id, value)
    else await renameFolder(target.id, value)
    await refresh()
  }, [editing, refresh])

  /* ---------------- 文件夹 ---------------- */

  const addFolder = useCallback(async () => {
    const folder = await createFolder('新建文件夹')
    await refresh()
    // 建完直接进入改名状态，少点一次。
    setEditing({ kind: 'folder', id: folder.id, value: folder.name })
  }, [refresh])

  /** 按文件夹分组；`''` 键表示未分类。 */
  const grouped = useMemo(() => {
    const map = new Map<string, Material[]>()
    for (const item of materials) {
      const key = item.folderId || ''
      const list = map.get(key) ?? []
      list.push(item)
      map.set(key, list)
    }
    return map
  }, [materials])

  const toggleFolder = useCallback((id: string) => {
    setCollapsed((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      writeSession({ collapsedFolders: next })
      return next
    })
  }, [])

  /* ---------------- 渲染：材料行 ---------------- */

  /**
   * 单条材料。
   *
   * @param item 材料。
   * @returns 列表行。
   */
  function renderRow(item: Material) {
    const isEditing = editing?.kind === 'material' && editing.id === item.id
    return (
      <li
        key={item.id}
        className="mb-1.5 flex items-center gap-2.5 rounded-[9px] border border-line bg-white px-2.5 py-2 transition hover:border-line-strong"
      >
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-sunken text-[10.5px] font-semibold uppercase text-ink-2">
          {item.kind}
        </span>
        {isEditing ? (
          <Input
            autoFocus
            size="small"
            value={editing.value}
            maxLength={60}
            onChange={(event) => setEditing({ ...editing, value: event.target.value })}
            onPressEnter={() => void commitEditing()}
            onBlur={() => void commitEditing()}
            aria-label="材料名称"
          />
        ) : (
          <button
            type="button"
            className="min-w-0 flex-1 cursor-pointer border-0 bg-transparent p-0 text-left"
            onClick={() => openInto('left', item.id)}
            onDoubleClick={(event) => {
              event.preventDefault()
              setEditing({ kind: 'material', id: item.id, value: item.name })
            }}
          >
            <b className="block truncate text-[13px] font-semibold text-ink">{item.name}</b>
            <span className="mt-0.5 block truncate text-[11px] text-ink-3">
              {item.pageCount} 页 · {item.fileName}
              {item.file ? ` · ${(item.file.size / 1024 / 1024).toFixed(1)} MB` : ''}
            </span>
          </button>
        )}

        <div className="flex shrink-0 items-center gap-0.5">
          <Tooltip title="重命名">
            <Button
              size="small"
              type="text"
              icon={<Pencil size={12} />}
              aria-label={`重命名 ${item.name}`}
              onClick={() => setEditing({ kind: 'material', id: item.id, value: item.name })}
            />
          </Tooltip>
          <Tooltip title="在右侧打开（对照）">
            <Button
              size="small"
              type="text"
              icon={<Columns2 size={12} />}
              aria-label={`在右侧打开 ${item.name}`}
              onClick={() => openInto('right', item.id)}
            />
          </Tooltip>
          <Dropdown
            trigger={['click']}
            menu={{
              items: [
                { key: '', label: '未分类（移出文件夹）' },
                ...folders.map((f) => ({ key: f.id, label: `移到「${f.name}」` })),
              ],
              onClick: async ({ key }) => {
                await moveMaterial(item.id, key)
                await refresh()
              },
            }}
          >
            <Button size="small" type="text" icon={<FolderOpen size={12} />} aria-label={`移动 ${item.name}`} />
          </Dropdown>
          <Button
            size="small"
            danger
            type="text"
            icon={<Trash2 size={12} />}
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
                  if (leftId === item.id) closePane('left')
                  if (rightId === item.id) closePane('right')
                  await refresh()
                },
              })
            }
          />
        </div>
      </li>
    )
  }

  /**
   * 文件夹树（含未分类）。
   *
   * @returns 分组块。
   */
  function renderTree() {
    const blocks: React.ReactNode[] = []
    for (const folder of folders) {
      const list = grouped.get(folder.id) ?? []
      const isCollapsed = collapsed.includes(folder.id)
      const isEditing = editing?.kind === 'folder' && editing.id === folder.id
      blocks.push(
        <section key={folder.id} className="mb-3">
          <div className="mb-1.5 flex items-center gap-1">
            <button
              type="button"
              className="flex min-w-0 flex-1 cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-left"
              onClick={() => toggleFolder(folder.id)}
              aria-expanded={!isCollapsed}
            >
              <FolderOpen size={14} className="shrink-0 text-ink-2" />
              {isEditing ? (
                <Input
                  autoFocus
                  size="small"
                  value={editing.value}
                  maxLength={40}
                  className="max-w-[220px]"
                  onChange={(event) => setEditing({ ...editing, value: event.target.value })}
                  onPressEnter={() => void commitEditing()}
                  onBlur={() => void commitEditing()}
                  onClick={(event) => event.stopPropagation()}
                  aria-label="文件夹名称"
                />
              ) : (
                <b className="truncate text-[12.5px] font-semibold text-ink-2">{folder.name}</b>
              )}
              <span className="shrink-0 font-num text-[11px] text-ink-3">{list.length}</span>
            </button>
            <Button
              size="small"
              type="text"
              icon={<Pencil size={11} />}
              aria-label={`重命名文件夹 ${folder.name}`}
              onClick={() => setEditing({ kind: 'folder', id: folder.id, value: folder.name })}
            />
            <Button
              size="small"
              danger
              type="text"
              icon={<Trash2 size={11} />}
              aria-label={`删除文件夹 ${folder.name}`}
              onClick={() =>
                modal.confirm({
                  title: `删除文件夹「${folder.name}」？`,
                  content: '夹内材料不会删除，会退回「未分类」。',
                  okText: '删除',
                  cancelText: '取消',
                  okButtonProps: { danger: true },
                  onOk: async () => {
                    await deleteFolder(folder.id)
                    await refresh()
                  },
                })
              }
            />
          </div>
          {isCollapsed ? null : (
            <ul className="m-0 list-none p-0 pl-4">
              {list.length ? list.map(renderRow) : <li className="px-1 py-1 text-[11.5px] text-ink-3">（空文件夹）</li>}
            </ul>
          )}
        </section>,
      )
    }
    const loose = grouped.get('') ?? []
    if (loose.length || !folders.length) {
      blocks.push(
        <section key="__loose" className="mb-3">
          {folders.length ? (
            <div className="mb-1.5 flex items-center gap-1.5 text-[12px] font-semibold text-ink-3">
              <FileText size={13} />
              未分类
              <span className="font-num text-[11px]">{loose.length}</span>
            </div>
          ) : null}
          <ul className="m-0 list-none p-0">{loose.map(renderRow)}</ul>
        </section>,
      )
    }
    return blocks
  }

  /* ---------------- 渲染：列表页 ---------------- */

  if (!activeId) {
    return (
      <div className="flex h-full min-h-0 flex-col bg-surface">
        <div className="flex flex-wrap items-center gap-2 border-b border-line px-3 py-2">
          <Button size="small" icon={<ArrowLeft size={14} />} onClick={onClose}>
            返回草稿
          </Button>
          <div className="ml-auto flex items-center gap-1.5">
            <Tooltip title="新建文件夹，把同类材料收起来">
              <Button size="small" icon={<FolderPlus size={14} />} onClick={() => void addFolder()}>
                新建文件夹
              </Button>
            </Tooltip>
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

        {/*
          列表页只留**这一个**滚动容器。
          之前外面还套了一层 flex 容器，导致内容被整体推到下方、顶部一片空白，
          用户截图里「左侧怎么滚动上去了」就是这个原因。
        */}
        <div className="min-h-0 flex-1 overflow-auto px-4 py-3">
          <div className="mx-auto max-w-[880px]">
            <h2 className="m-0 text-[18px] font-bold">材料</h2>
            <p className="mb-3 mt-1 text-[12px] leading-5 text-ink-3">
              支持 PDF / DOCX / PPTX。只保存原始文件，打开后按可视范围加载。
              双击名称可改名；点「并排」可把另一份材料放到右侧对照。
            </p>
            {materials.length === 0 ? (
              <div className="rounded-[12px] border border-dashed border-line-strong bg-white px-4 py-10 text-center text-[13px] text-ink-3">
                还没有导入材料。点右上角「导入材料」选一份 PDF / DOCX / PPTX。
              </div>
            ) : (
              renderTree()
            )}
          </div>
        </div>

        {/*
          命名弹窗。
          **`zIndex` 必须显式抬高**：材料视图是 `FullScreenLayer`（z-index 1100），
          antd Modal/Drawer 默认 1000 —— 会被压在材料层底下，用户选了文件却什么都看不到，
          表现就是「导入直接没反应」（移动端就是这么被踩到的）。
          这里用 Modal 而不是 Drawer：移动端居中的输入框更醒目，也不会受
          Drawer 那条 translateY 动画的影响。
        */}
        <Modal
          open={Boolean(pendingFile)}
          title="给这份材料起个名字"
          zIndex={1400}
          okText="导入"
          cancelText="取消"
          confirmLoading={importing}
          onOk={() => void confirmImport()}
          onCancel={() => setPendingFile(null)}
          destroyOnHidden
        >
          <p className="mb-2 mt-0 text-[12.5px] text-ink-3">不填就用文件名。导入后也能随时改名。</p>
          <Input
            autoFocus
            value={pendingFile?.name ?? ''}
            maxLength={60}
            placeholder={pendingFile?.file.name ?? ''}
            onChange={(event) => setPendingFile((prev) => (prev ? { ...prev, name: event.target.value } : prev))}
            onPressEnter={() => void confirmImport()}
          />
          {pendingFile ? (
            <p className="mb-0 mt-2 text-[11.5px] text-ink-3">
              {pendingFile.file.name} · {(pendingFile.file.size / 1024 / 1024).toFixed(1)} MB
              {pendingFile.file.size > 80 * 1024 * 1024 ? '（文件较大，解析需要一点时间，请稍候）' : ''}
            </p>
          ) : null}
        </Modal>
      </div>
    )
  }

  /* ---------------- 渲染：阅读页 ---------------- */

  const activeMeta = activeSide === 'right' ? meta.right : meta.left

  return (
    /*
     * `relative` 是必需的：答题卡面板用 `absolute right-0 inset-y-0` 贴在
     * 材料层内部（而不是用 Drawer）。少了它，面板会跑到视口外。
     */
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden bg-sunken">
      {/* 工具条 */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 border-b border-line bg-surface px-2 py-2 sm:px-3">
        <Button
          size="small"
          icon={<ArrowLeft size={14} />}
          onClick={() => {
            setLeftId('')
            setRightId('')
            writePane('left', { id: '' })
            writePane('right', { id: '' })
          }}
        >
          材料列表
        </Button>
        <b className="max-w-[20ch] truncate text-[13px] font-semibold">
          {activeMeta.name || '材料'}
          {twoPanes ? (
            <span className="ml-1 text-[11px] font-normal text-ink-3">（{activeSide === 'left' ? '左' : '右'}栏）</span>
          ) : null}
        </b>
        <span className="font-num text-[11.5px] tabular-nums text-ink-3">
          {activeMeta.page} / {activeMeta.total || 0}
        </span>

        <span className="mx-0.5 hidden h-4 w-px bg-line sm:block" />

        {/*
          批注开关（用户截图里框住的位置）。
          关闭 = 只读：能滚动、缩放、翻页、看已写的笔记，但画布不接笔。
          手机/平板默认关闭（手指一划就误触），电脑默认开启，两端都能手动切换。
          关掉时整个「画笔/橡皮/颜色/笔粗」组一起隐藏 —— 留着但不能用只会让人困惑。
        */}
        <Tooltip
          title={
            annotate
              ? '批注已开启：可以手写。点一下切到只读，避免误触'
              : '只读模式：只能滑动查看，不能写。点一下开启批注'
          }
        >
          <Button
            size="small"
            type={annotate ? 'primary' : 'default'}
            icon={annotate ? <Pen size={13} /> : <PenOff size={13} />}
            onClick={() => {
              const next = !annotate
              setAnnotate(next)
              // 手动改过就记住，之后不再按设备类型覆盖。
              writeSession({ annotate: next, annotateTouched: true })
            }}
            aria-label={annotate ? '关闭批注（切到只读）' : '开启批注'}
            aria-pressed={annotate}
          >
            {annotate ? '批注' : '只读'}
          </Button>
        </Tooltip>

        {annotate ? (
        <>
        <div className="flex items-center gap-1">
          <Tooltip title="画笔">
            <Button
              size="small"
              type={tool === 'pen' ? 'primary' : 'default'}
              icon={<Pen size={13} />}
              aria-label="画笔"
              aria-pressed={tool === 'pen'}
              onClick={() => {
                setTool('pen')
                writeSession({ tool: 'pen' })
              }}
            />
          </Tooltip>
          <Tooltip title="橡皮（只擦笔记，不擦材料）">
            <Button
              size="small"
              type={tool === 'eraser' ? 'primary' : 'default'}
              icon={<Eraser size={13} />}
              aria-label="橡皮"
              aria-pressed={tool === 'eraser'}
              onClick={() => {
                setTool('eraser')
                writeSession({ tool: 'eraser' })
              }}
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
                writeSession({ color: item, tool: 'pen' })
              }}
            />
          ))}
        </div>

        <div className="flex w-[120px] shrink-0 items-center gap-1.5">
          <span className="shrink-0 text-[11px] text-ink-3">笔粗</span>
          <input
            type="range"
            min={SIZE_MIN}
            max={SIZE_MAX}
            value={size}
            aria-label="笔粗"
            className="min-w-0 flex-1"
            onChange={(event) => {
              const next = Number(event.target.value)
              setSize(next)
              writeSession({ size: next })
            }}
          />
          <span className="w-3 shrink-0 text-right font-num text-[11px] text-ink-3">{size}</span>
        </div>
        </>
        ) : null}

        {/* 缩放：作用在当前激活栏 */}
        <div className="flex items-center gap-0.5">
          <Tooltip title="缩小">
            <Button
              size="small"
              icon={<ZoomOut size={13} />}
              disabled={currentZoom <= ZOOM_MIN}
              onClick={() => changeZoom(-ZOOM_STEP)}
              aria-label="缩小"
            />
          </Tooltip>
          <button
            type="button"
            className="min-w-[42px] cursor-pointer border-0 bg-transparent font-num text-[11.5px] tabular-nums text-ink-2"
            onClick={() => setZoomOf(activeSide, 1)}
            title="点击恢复 100%"
          >
            {Math.round(currentZoom * 100)}%
          </button>
          <Tooltip title="放大">
            <Button
              size="small"
              icon={<ZoomIn size={13} />}
              disabled={currentZoom >= ZOOM_MAX}
              onClick={() => changeZoom(ZOOM_STEP)}
              aria-label="放大"
            />
          </Tooltip>
        </div>

        <span className="mx-0.5 hidden h-4 w-px bg-line sm:block" />

        {/*
          双材料对照：单栏时点「并排」从已有材料里挑一份放右边；
          已在双栏时变成「单栏」（关闭右栏）。
        */}
        <div className="flex items-center gap-1">
          <Tooltip title={twoPanes ? '关闭右栏（回到单栏）' : '从已有材料中导入到右侧，左右对照'}>
            <Button
              size="small"
              icon={<Columns2 size={13} />}
              onClick={() => {
                if (twoPanes) closePane('right')
                else setPick('right')
              }}
              aria-label={twoPanes ? '关闭右栏' : '并排打开另一份材料'}
            >
              {twoPanes ? '单栏' : '并排'}
            </Button>
          </Tooltip>
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
          {/*
            撤销 / 清空 / 一键清除都会改动笔记，只读模式下一起隐藏 ——
            否则用户「在只读模式里还能清掉笔记」，语义就乱了。
          */}
          {annotate ? (
          <>
          <Tooltip title="撤销本页最后一笔（Ctrl+Z）">
            <Button
              size="small"
              icon={<RotateCcw size={13} />}
              onClick={() => actionsRef.current[activeSide]?.undo()}
              aria-label="撤销"
            />
          </Tooltip>
          <Tooltip title="清空本页笔记">
            <Button
              size="small"
              icon={<X size={13} />}
              onClick={() => actionsRef.current[activeSide]?.clearPage()}
              aria-label="清空本页笔记"
            />
          </Tooltip>
          <Tooltip title="一键清除这份材料的全部笔记">
            <Button
              size="small"
              danger
              icon={<Eraser size={13} />}
              onClick={() => {
                const target = activeSide === 'right' ? rightId : leftId
                if (!target) return
                modal.confirm({
                  title: '清除这份材料的全部笔记？',
                  content: '材料文件不会删除，只清手写笔记。清除后可以按 Ctrl+Z 撤销。',
                  okText: '全部清除',
                  cancelText: '取消',
                  okButtonProps: { danger: true },
                  onOk: async () => {
                    try {
                      /*
                       * **顺序很重要**：必须先让 Pane 把「清除前的内容」压进撤销栈，
                       * 再删库。
                       * 早先是先 `clearAllNotes` 再 `clearAll()` —— 内存里的快照
                       * 是在删库之后才建的，撤销栈里什么都没有，
                       * 于是按 Ctrl+Z 只会得到「这一页没有可撤销的笔记」。
                       */
                      actionsRef.current[activeSide]?.clearAll()
                      await clearAllNotes(target)
                      message.success('已清除全部笔记，可按 Ctrl+Z 撤销', 4)
                    } catch {
                      message.error('清除失败，请重试')
                    }
                  },
                })
              }}
              aria-label="一键清除全部笔记"
            />
          </Tooltip>
          </>
          ) : null}
          <Button size="small" onClick={onClose}>
            关闭
          </Button>
        </div>
      </div>

      {/*
        阅读区：单栏 or 双栏并排（两栏各自独立滚动）。
        `relative` 给中间那个互换按钮定位用：它要浮在两栏缝隙正中间，
        且 `pointer-events-none` 的容器 + `auto` 的按钮，避免挡住两栏的点击。
      */}
      <div className={twoPanes ? 'relative flex min-h-0 flex-1 gap-0.5' : 'relative flex min-h-0 flex-1'}>
        <div className={twoPanes ? 'min-w-0 flex-1 border-r border-line' : 'min-w-0 flex-1'}>
          <MaterialPane
            id={leftId}
            side="left"
            zoom={leftZoom}
            tool={tool}
            color={color}
            size={size}
            active={twoPanes && activeSide === 'left'}
            annotate={annotate}
            onActivate={() => {
              if (activeSide === 'left') return
              setActiveSide('left')
              writeSession({ active: 'left' })
            }}
            onPageChange={(page, total) =>
              setMeta((prev) =>
                prev.left.page === page && prev.left.total === total
                  ? prev
                  : { ...prev, left: { ...prev.left, page, total } },
              )
            }
            onLoaded={(m) =>
              setMeta((prev) => ({ ...prev, left: { ...prev.left, name: m.name, total: m.pageCount } }))
            }
            onScrollChange={(page, ratio) => {
              /*
               * 实时把位置记到「这份材料」名下。
               * 只在离开时才记是不够的：用户切走时读到的会是这份材料
               * 很久以前的位置（会话里的 left/right 会被别的材料覆盖）。
               */
              if (leftId) rememberSpot(leftId, { page, ratio, zoom: leftZoom })
            }}
            enterKey={leftEnter}
            onRegisterActions={(actions) => {
              actionsRef.current.left = actions
            }}
          />
        </div>
        {/*
          中间互换按钮：点击把左右两栏整份对调（材料 + 缩放 + 页码一起换）。
          用 absolute 钉在容器水平中央、垂直居中，不参与 flex 布局 ——
          这样它不会挤压两栏宽度，也不会引起任何重排。
        */}
        {twoPanes ? (
          <button
            type="button"
            className="absolute left-1/2 top-1/2 z-20 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-line-strong bg-surface text-ink-2 shadow-[0_2px_8px_rgba(16,24,40,.16)] transition hover:border-brand hover:text-brand"
            onClick={swapPanes}
            aria-label="互换左右两栏"
            title="互换左右两栏"
          >
            <ArrowLeftRight size={15} />
          </button>
        ) : null}
        {twoPanes ? (
          <div className="min-w-0 flex-1">
            <MaterialPane
              id={rightId}
              side="right"
              zoom={rightZoom}
              tool={tool}
              color={color}
              size={size}
              active={activeSide === 'right'}
              annotate={annotate}
              onActivate={() => {
                if (activeSide === 'right') return
                setActiveSide('right')
                writeSession({ active: 'right' })
              }}
              onPageChange={(page, total) =>
                setMeta((prev) =>
                  prev.right.page === page && prev.right.total === total
                    ? prev
                    : { ...prev, right: { ...prev.right, page, total } },
                )
              }
              onLoaded={(m) =>
                setMeta((prev) => ({ ...prev, right: { ...prev.right, name: m.name, total: m.pageCount } }))
              }
              onScrollChange={(page, ratio) => {
                // 同左栏：实时记到这份材料名下，切换回来才能接上。
                if (rightId) rememberSpot(rightId, { page, ratio, zoom: rightZoom })
              }}
              enterKey={rightEnter}
              onRegisterActions={(actions) => {
                actionsRef.current.right = actions
              }}
            />
          </div>
        ) : null}
      </div>

      {/*
        选材料面板：同样改自绘固定面板，理由与答题卡一致 ——
        antd Drawer 的展开动画会写 transform，把材料层整体上顶。
      */}
      {pick ? (
        <div className="absolute inset-y-0 right-0 z-40 flex w-[min(420px,86vw)] flex-col border-l border-line bg-surface shadow-[-8px_0_24px_rgba(16,24,40,.08)]">
          <div className="flex shrink-0 items-center gap-2 border-b border-line px-3 py-2">
            <b className="text-[13px] font-semibold">从已有材料中导入</b>
            <span className="text-[11px] text-ink-3">放到右侧对照</span>
            <button
              type="button"
              className="ml-auto grid h-7 w-7 cursor-pointer place-items-center rounded-md border-0 bg-transparent text-ink-2 hover:bg-sunken"
              onClick={() => setPick(null)}
              aria-label="关闭选择材料"
            >
              <X size={15} />
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-auto p-3">
            {materials.filter((m) => m.id !== leftId && m.id !== rightId).length === 0 ? (
              <p className="m-0 text-[12.5px] text-ink-3">没有其它材料了，先导入一份新的。</p>
            ) : (
              <ul className="m-0 list-none p-0">
                {materials
                  .filter((m) => m.id !== leftId && m.id !== rightId)
                  .map((m) => (
                    <li key={m.id} className="mb-1.5">
                      <button
                        type="button"
                        className="w-full cursor-pointer rounded-[9px] border border-line bg-white px-2.5 py-2 text-left transition hover:border-line-strong"
                        onClick={() => {
                          openInto(pick ?? 'right', m.id)
                          setPick(null)
                        }}
                      >
                        <b className="block truncate text-[13px] font-semibold text-ink">{m.name}</b>
                        <span className="mt-0.5 block truncate text-[11px] text-ink-3">
                          {m.pageCount} 页 · {m.fileName}
                        </span>
                      </button>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      ) : null}

      {/*
        答题卡：**自己画一个右侧固定面板**，不用 antd Drawer。
        Drawer 展开时会写 `transform: translateY(-180px)` 把整层内容上移，
        在材料层里这会把左边的正文一起顶上去（用户反复反馈的就是这个）。
        这里用 `absolute right-0 top-0 bottom-0` 贴在材料层内部：
        不改变文档流尺寸、没有位移动画，材料区一点都不会动。
      */}
      {quizOpen ? (
        <div className="absolute inset-y-0 right-0 z-30 flex w-[min(420px,80vw)] flex-col border-l border-line bg-surface shadow-[-8px_0_24px_rgba(16,24,40,.08)]">
          <div className="flex shrink-0 items-center gap-2 border-b border-line px-3 py-2">
            <b className="text-[13px] font-semibold">选择题答题卡</b>
            <span className="text-[11px] text-ink-3">关掉回到材料</span>
            <button
              type="button"
              className="ml-auto grid h-7 w-7 cursor-pointer place-items-center rounded-md border-0 bg-transparent text-ink-2 hover:bg-sunken"
              onClick={() => setQuizOpen(false)}
              aria-label="关闭选择题答题卡"
            >
              <X size={15} />
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-auto p-3">
            <ChoiceSheet compact />
          </div>
        </div>
      ) : null}

      <FullScreenLayer
        open={examOpen}
        title="格纸答题纸"
        extra="关掉回到材料"
        onClose={() => setExamOpen(false)}
        zIndex={1200}
      >
        <ExamSheet />
      </FullScreenLayer>
    </div>
  )
}
