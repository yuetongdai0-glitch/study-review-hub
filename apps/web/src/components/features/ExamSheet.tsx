import { App, Button, Drawer, Input, Modal } from 'antd'
import { ClipboardCopy, Download, Eraser, FileDown, RotateCcw, Save } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

/** 存档键：当前草稿。 */
const DRAFT_KEY = 'exam-grid:v2'
/** 存档键：草稿箱。 */
const BOX_KEY = 'exam-grid:box:v2'
/** 撤销步数上限。 */
const UNDO_MAX = 20
/** 每格理想宽度。 */
const CELL_IDEAL_MOBILE = 24
const CELL_IDEAL_DESKTOP = 30
const COLS_MIN = 12
const COLS_MAX = 32

/** 草稿箱条目。 */
type DraftItem = { id: string; title: string; text: string; brief: string; savedAt: number }

/**
 * 去掉 Markdown 标记与紧贴中文的多余空格。
 *
 * @param text 原始文本。
 * @returns 干净文本。
 */
function cleanText(text: string) {
  return text
    .replace(/\*\*/g, '')
    .replace(/^>\s?/gm, '')
    .replace(/([\u4e00-\u9fa5])\s+([\u4e00-\u9fa5])/g, '$1$2')
    .replace(/\r\n?/g, '\n')
}

/**
 * 模拟考试答题纸面板。
 *
 * @returns 单 textarea + 纯渲染网格。
 * @remarks 关键约束：**绝不要改回每格一个 input**。
 * 输入法（拼音）在逐格 input 里会丢字，这里用一块 1px 透明的 textarea 承载输入，
 * 网格只负责显示，格子里的空格是位置数据，删除时会被智能跳过。
 *
 * 抽成组件是为了「草稿工作台右上角全屏打开」与独立路由页共用同一套实现、
 * 同一份存档（`exam-grid:v2`）：在草稿里写的作文，独立页打开能看到。
 */
export default function ExamSheet() {
  const { message, modal } = App.useApp()

  const wrapRef = useRef<HTMLDivElement>(null)
  /** 纸张本体：列宽要按它的「内容宽度」算，不能按外层滚动容器算。 */
  const paperRef = useRef<HTMLDivElement>(null)
  const editorRef = useRef<HTMLTextAreaElement>(null)
  const caretRef = useRef<HTMLDivElement>(null)
  const undoRef = useRef<Array<{ text: string; start: number }>>([])
  const saveTimerRef = useRef(0)
  /**
   * 输入法组合中标记。
   *
   * @remarks 打拼音时 DOM 里会先出现 `nihao` 这类字母，组合结束才换成「你好」。
   * 如果不拦，这些字母会被当成 5 个字写进格子（用户看到的「拼音也上屏了」）。
   */
  const composingRef = useRef(false)

  const [text, setText] = useState('')
  const [cols, setCols] = useState(25)
  const [cell, setCell] = useState(CELL_IDEAL_DESKTOP)
  const [rows, setRows] = useState(20)
  const [focused, setFocused] = useState(false)
  const [caret, setCaret] = useState<{ row: number; col: number } | null>(null)

  const [nameOpen, setNameOpen] = useState(false)
  const [draftName, setDraftName] = useState('')
  const [boxOpen, setBoxOpen] = useState(false)
  const [box, setBox] = useState<DraftItem[]>([])
  const [exportOpen, setExportOpen] = useState(false)
  const [brief, setBrief] = useState('')
  const [importOpen, setImportOpen] = useState(false)
  const [importText, setImportText] = useState('')

  /* ---------------- 布局 ---------------- */

  /**
   * 依据容器宽度决定列数与格宽，让格子正好铺满一行。
   *
   * @returns 无返回。
   */
  const layout = useCallback(() => {
    const wrap = wrapRef.current
    const paper = paperRef.current
    if (!wrap || !paper) return

    /*
     * 可用宽度必须取「纸张内容区」而不是外层滚动容器：
     * 外层有 px-1/py-2 内边距，纸张自己还有 p-1.5 与 1px 边框。
     * 以前直接用 wrap.clientWidth 减去拍脑袋的 16/24，手机端算出来比实际宽 6px，
     * 整张格纸被裁掉右侧（最后几个字看不见），还会冒出横向滚动条。
     */
    const paperStyle = getComputedStyle(paper)
    const inner =
      paper.clientWidth -
      parseFloat(paperStyle.paddingLeft || '0') -
      parseFloat(paperStyle.paddingRight || '0')
    const avail = Math.max(120, Math.floor(inner))
    const mobile = window.innerWidth <= 640
    let next = Math.round(avail / (mobile ? CELL_IDEAL_MOBILE : CELL_IDEAL_DESKTOP))
    next = Math.min(COLS_MAX, Math.max(COLS_MIN, next))
    const cellSize = Math.floor((avail / next) * 100) / 100
    setCols(next)
    setCell(cellSize)

    /*
     * 行数要让整张纸的四条边都落在可视区内（用户说的「最外层也要封边」）。
     * 只扣 12px 是不够的：外层滚动容器自己有 py 内边距、纸张自己还有 p 和 1px 边框，
     * 漏算就会多出一行 → 纸比可视区高十几像素 → 底边框被推到折叠线以下，看起来「没封边」。
     */
    const wrapStyle = getComputedStyle(wrap)
    const availHeight =
      wrap.clientHeight -
      parseFloat(wrapStyle.paddingTop || '0') -
      parseFloat(wrapStyle.paddingBottom || '0') -
      parseFloat(paperStyle.paddingTop || '0') -
      parseFloat(paperStyle.paddingBottom || '0') -
      parseFloat(paperStyle.borderTopWidth || '0') -
      parseFloat(paperStyle.borderBottomWidth || '0') -
      // 留 6px 余量：响应式下 0.5px 的偏差不该把最后一行挤出去
      6
    const byHeight = Math.floor(Math.max(0, availHeight) / cellSize)
    setRows(Math.max(8, byHeight, Math.ceil(text.length / next) + 2))
  }, [text.length])

  useEffect(() => {
    layout()
    const observer = new ResizeObserver(layout)
    if (wrapRef.current) observer.observe(wrapRef.current)
    window.addEventListener('resize', layout)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', layout)
    }
  }, [layout])

  /* ---------------- 存档 ---------------- */

  /**
   * 写盘（当前草稿 + 简要）。
   *
   * @returns 无返回。
   */
  const save = useCallback(
    (value: string, briefValue: string) => {
      try {
        window.localStorage.setItem(DRAFT_KEY, JSON.stringify({ v: 2, text: value, brief: briefValue, savedAt: Date.now() }))
      } catch {
        message.error('本地保存失败（空间不足）')
      }
    },
    [message],
  )

  /**
   * 延迟保存。
   *
   * @param value 文本。
   * @param briefValue 作答要求。
   * @returns 无返回。
   */
  function scheduleSave(value: string, briefValue: string) {
    window.clearTimeout(saveTimerRef.current)
    saveTimerRef.current = window.setTimeout(() => save(value, briefValue), 500)
  }

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(DRAFT_KEY)
      if (raw) {
        const data = JSON.parse(raw) as { text?: string; brief?: string }
        if (typeof data.text === 'string') setText(data.text)
        if (typeof data.brief === 'string') setBrief(data.brief)
      }
      const boxRaw = window.localStorage.getItem(BOX_KEY)
      if (boxRaw) {
        const list = JSON.parse(boxRaw) as DraftItem[]
        if (Array.isArray(list)) setBox(list)
      }
    } catch {
      // 存档损坏按空白处理。
    }
  }, [])

  /* ---------------- 光标与网格 ---------------- */

  /**
   * 把光标放到指定格子；点到空白格子时用空格补齐，保证「点哪写哪」。
   *
   * @param index 字符下标。
   * @returns 无返回。
   */
  function placeCaret(index: number) {
    const editor = editorRef.current
    if (!editor) return
    let next = text
    if (index > next.length) {
      // 占位空格是位置数据，不能省。
      next = next + ' '.repeat(index - next.length)
      setText(next)
      editor.value = next
    }
    editor.focus()
    editor.setSelectionRange(index, index)
    setFocused(true)
    setCaret({ row: Math.floor(index / cols), col: index % cols })
    requestAnimationFrame(() => {
      const target = editorRef.current
      if (!target) return
      if (document.activeElement !== target) target.focus()
      try {
        target.setSelectionRange(index, index)
      } catch {
        // 选区越界时忽略。
      }
      updateCaret()
    })
  }

  /**
   * 按当前选区更新光标位置指示。
   *
   * @returns 无返回。
   */
  function updateCaret() {
    const editor = editorRef.current
    if (!editor) return
    const index = editor.selectionStart ?? 0
    const row = Math.floor(index / cols)
    const col = index % cols
    setCaret({ row, col })
    const node = caretRef.current
    if (node) {
      node.style.transform = `translate(${col * cell}px, ${row * cell}px)`
      node.style.width = `${cell}px`
      node.style.height = `${cell}px`
    }
  }

  /**
   * 折叠可能残留的选区。
   *
   * @returns 无返回。
   * @remarks 格纸只做单点插入（`deleteSmart` 也只处理折叠态），
   * 一旦留下选区，浏览器会用系统强调色把那个格子涂成一块——
   * 用户会以为「出现了第二个光标」。这里统一折叠到末端。
   */
  function collapseSelection() {
    const editor = editorRef.current
    if (!editor) return
    if (editor.selectionStart !== editor.selectionEnd) {
      const pos = editor.selectionEnd ?? 0
      editor.setSelectionRange(pos, pos)
    }
  }

  /**
   * 按「网格行列」移动光标（不是按 textarea 的像素换行）。
   *
   * @param key 方向键或 Home/End。
   * @returns 是否已处理。
   * @remarks 原生 textarea 的换行取决于容器像素宽度，
   * 与格纸的 `cols` 列毫无关系：实测按 ↓ 不会下一行、按 ↑ 会直接跳到 0。
   * 所以四个方向键 + Home/End 全部自己算，`placeCaret` 负责必要时补占位空格。
   */
  function moveCaret(key: string) {
    const editor = editorRef.current
    if (!editor) return false
    const pos = editor.selectionStart ?? 0
    const lineStart = Math.floor(pos / cols) * cols
    // 向下/End 允许走到「已写内容之后一点」，但不让存档被大片空格撑爆。
    const limit = Math.min(rows * cols - 1, Math.max(text.length + cols * 2, text.length))
    let next = pos
    if (key === 'ArrowLeft') {
      // 行首按 ← 退回上一行末，符合线性文本的直觉。
      next = pos - 1
    } else if (key === 'ArrowRight') {
      next = pos + 1
    } else if (key === 'ArrowUp') {
      // 已经在第一行就原地不动： clamp 到 0 会「跳到第一格」，是错的。
      if (pos - cols < 0) return true
      next = pos - cols
    } else if (key === 'ArrowDown') {
      if (pos + cols > limit) return true
      next = pos + cols
    } else if (key === 'Home') {
      next = lineStart
    } else if (key === 'End') {
      next = Math.min(lineStart + cols - 1, Math.max(text.length, lineStart))
    }
    next = Math.max(0, Math.min(limit, next))
    placeCaret(next)
    collapseSelection()
    return true
  }

  /**
   * 撤销。
   *
   * @returns 无返回。
   */
  function undo() {
    const previous = undoRef.current.pop()
    if (!previous) return
    setText(previous.text)
    if (editorRef.current) editorRef.current.value = previous.text
    placeCaret(previous.start)
    scheduleSave(previous.text, brief)
  }

  /**
   * 记录一次可撤销的快照。
   *
   * @param value 变更前文本。
   * @returns 无返回。
   */
  function pushUndo(value: string) {
    undoRef.current.push({ text: value, start: editorRef.current?.selectionStart ?? 0 })
    if (undoRef.current.length > UNDO_MAX) undoRef.current.shift()
  }

  /**
   * 带回跳的删除：一次按键跨过整段占位空格。
   *
   * @param dir -1 退格，1 删除键。
   * @returns 是否已处理。
   */
  function deleteSmart(dir: -1 | 1) {
    const editor = editorRef.current
    if (!editor) return false
    const pos = editor.selectionStart ?? 0
    if (pos !== (editor.selectionEnd ?? 0)) return false
    let target = pos
    if (dir === -1) {
      if (pos === 0) return false
      target = pos - 1
      // 跳过占位空格（但不删除它本身）
      while (target > 0 && text[target] === ' ') target -= 1
      if (text[target] === ' ') return false
    } else {
      if (pos >= text.length) return false
      target = pos
      if (text[target] === ' ') return false
    }
    pushUndo(text)
    const next = text.slice(0, target) + text.slice(target + 1)
    setText(next)
    editor.value = next
    const caretIndex = dir === -1 ? target : pos
    setTimeout(() => placeCaret(caretIndex), 0)
    scheduleSave(next, brief)
    return true
  }

  /**
   * 把纯文本按列宽铺到格子里。
   *
   * @param value 原始文本。
   * @param replace 是否替换全部。
   * @returns 无返回。
   */
  function fillFromText(value: string, replace: boolean) {
    const cleaned = cleanText(value)
    const base = replace ? '' : text
    const next = base + (base && !base.endsWith('\n') ? '\n' : '') + cleaned
    pushUndo(text)
    setText(next)
    if (editorRef.current) editorRef.current.value = next
    scheduleSave(next, brief)
    placeCaret(next.length)
    message.success(replace ? '已替换全部内容' : '已追加到末尾')
  }

  /**
   * 生成导出文本。
   *
   * @returns 带作答要求的纯文本。
   */
  const exportText = useMemo(() => {
    const body = text.replace(/[ \t]+$/gm, '').trim()
    const head = brief.trim() ? `【作答要求】${brief.trim()}\n\n` : ''
    return `${head}${body}`
  }, [text, brief])

  /**
   * 复制到剪贴板。
   *
   * @param value 文本。
   * @returns 无返回。
   */
  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value)
      message.success('已复制到剪贴板')
    } catch {
      message.error('复制失败，请手动选择文本')
    }
  }

  /**
   * 下载文本文件。
   *
   * @param value 内容。
   * @param ext 扩展名。
   * @returns 无返回。
   */
  function download(value: string, ext: 'txt' | 'md') {
    const blob = new Blob([value], { type: 'text/plain;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `答题-${new Date().toISOString().slice(0, 10)}.${ext}`
    link.click()
    URL.revokeObjectURL(link.href)
  }

  /**
   * 保存到草稿箱。
   *
   * @returns 无返回。
   */
  function saveToBox() {
    const title = draftName.trim() || `未命名 ${new Date().toLocaleString('zh-CN')}`
    const item: DraftItem = { id: String(Date.now()), title, text, brief, savedAt: Date.now() }
    const next = [item, ...box].slice(0, 30)
    setBox(next)
    try {
      window.localStorage.setItem(BOX_KEY, JSON.stringify(next))
    } catch {
      message.error('草稿箱已满')
    }
    setNameOpen(false)
    setDraftName('')
    message.success('已存入草稿箱')
  }

  /**
   * 从草稿箱恢复。
   *
   * @param item 草稿。
   * @returns 无返回。
   */
  function restoreDraft(item: DraftItem) {
    setText(item.text)
    setBrief(item.brief)
    if (editorRef.current) editorRef.current.value = item.text
    setBoxOpen(false)
    scheduleSave(item.text, item.brief)
    message.success(`已载入「${item.title}」`)
  }

  const cellCount = text.replace(/\s/g, '').length

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-sunken">
      {/* 工具条：手机端必须换行，横向滚动会挡住右侧按钮 */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 border-b border-line bg-surface px-2 py-2 text-[12.5px] sm:px-3">
        <span className="font-num tabular-nums text-ink-3">
          已写 <b className="text-ink">{cellCount}</b> 字
        </span>
        <span className="hidden text-ink-3 sm:inline">每行 {cols} 格</span>
        <div className="ml-auto flex flex-wrap items-center gap-1.5">
          <Button size="small" icon={<RotateCcw size={13} />} onClick={undo}>
            撤销
          </Button>
          <Button size="small" icon={<ClipboardCopy size={13} />} onClick={() => setExportOpen(true)}>
            复制
          </Button>
          <Button size="small" icon={<FileDown size={13} />} onClick={() => setImportOpen(true)}>
            导入
          </Button>
          <Button size="small" icon={<Save size={13} />} onClick={() => setNameOpen(true)}>
            保存
          </Button>
          <Button size="small" onClick={() => setBoxOpen(true)}>
            草稿箱 ({box.length})
          </Button>
          <Button
            size="small"
            danger
            icon={<Eraser size={13} />}
            onClick={() =>
              modal.confirm({
                title: '抹除全部内容？',
                content: '抹除后无法恢复，建议先保存到草稿箱。',
                okText: '抹除',
                cancelText: '取消',
                okButtonProps: { danger: true },
                onOk: () => {
                  pushUndo(text)
                  setText('')
                  if (editorRef.current) editorRef.current.value = ''
                  scheduleSave('', brief)
                },
              })
            }
          >
            抹除
          </Button>
        </div>
      </div>

      {/* 答题纸 */}
      <div ref={wrapRef} className="min-h-0 flex-1 overflow-auto px-2 py-3 sm:px-4">
        {/* 网格总宽 = 列数 × 格宽，用 max-w-full 限住，避免窄屏被撑出横向滚动 */}
        <div
          ref={paperRef}
          className="relative mx-auto w-full max-w-full overflow-hidden rounded-[8px] border-2 border-[#aeb6c4] bg-white p-1.5 shadow-[0_1px_2px_rgba(16,24,40,.08),0_10px_28px_rgba(16,24,40,.10)] sm:max-w-[920px] sm:p-3"
        >
          <div className="relative" data-focus={focused ? 'true' : 'false'}>
            {/* 网格：纯展示，不接收输入 */}
            <div
              className="relative grid select-none"
              style={{
                gridTemplateColumns: `repeat(${cols}, ${cell}px)`,
                fontSize: Math.max(10, cell * 0.5),
              }}
              aria-hidden="true"
            >
              {Array.from({ length: rows * cols }, (_, index) => {
                const char = text[index]
                const isNewline = char === '\n'
                /*
                 * 每个格子只画右下两条边，靠第一行/第一列补上另一侧，
                 * 整块格纸才是闭合的矩形（用户说的「最外层的线」）。
                 * 用 box-border 下的固定宽高，加边不会改变列宽。
                 */
                const firstRow = index < cols
                const firstCol = index % cols === 0
                return (
                  <div
                    key={index}
                    className={[
                      'grid place-items-center border-b border-r border-line text-ink',
                      firstRow ? 'border-t-[1.5px]' : '',
                      firstCol ? 'border-l-[1.5px]' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    style={{ height: cell, width: cell }}
                    onPointerDown={(event) => {
                      event.preventDefault()
                      placeCaret(index)
                    }}
                  >
                    {isNewline ? '' : (char ?? '')}
                  </div>
                )
              })}
            </div>

            {/*
              输入层：透明 textarea，承载全部输入（IME 只在单一 textarea 里才不丢字）。

              `pointerEvents: 'none'` 是关键：它铺满整块纸，如果可点，
              所有点击都会被它吃掉，格子的 onPointerDown 永远不触发，
              表现为「点格子没反应、字只会加在开头」。键盘输入不受影响——
              焦点由格子的 placeCaret 主动 focus() 给到它。

              另外两条也是硬约束：
              · 输入法（拼音）组合期间**绝不能上屏**：DOM 里会依次出现 n/i/h/a/o，
                组合结束才换成「你好」。组合中不 setText → React 不重渲染 →
                拼音留在 DOM 里由输入法自己管，compositionEnd 再一次性提交；
              · 方向键/Home/End 必须自己接管：textarea 的换行按像素宽度算，
                与 cols 列网格毫无关系（实测按 ↑ 会直接跳到 0）。
            */}
            <textarea
              ref={editorRef}
              value={text}
              spellCheck={false}
              autoCorrect="off"
              autoCapitalize="off"
              className="absolute inset-0 h-full w-full resize-none border-0 bg-transparent p-0 text-transparent caret-transparent outline-none"
              style={{ fontSize: cell * 0.5, lineHeight: 1, pointerEvents: 'none' }}
              aria-label="答题纸输入区"
              data-exam-editor="true"
              onCompositionStart={() => {
                composingRef.current = true
              }}
              onCompositionEnd={(event) => {
                composingRef.current = false
                const next = event.currentTarget.value
                if (next === text) {
                  updateCaret()
                  return
                }
                pushUndo(text)
                setText(next)
                setRows((value) => Math.max(value, Math.ceil(next.length / cols) + 2))
                scheduleSave(next, brief)
                requestAnimationFrame(() => {
                  collapseSelection()
                  updateCaret()
                })
              }}
              onChange={(event) => {
                // 组合中的插入事件一律忽略，否则拼音会被当成正文写进格子。
                if (composingRef.current) return
                pushUndo(text)
                const next = event.target.value
                setText(next)
                setRows((value) => Math.max(value, Math.ceil(next.length / cols) + 2))
                updateCaret()
                scheduleSave(next, brief)
              }}
              onSelect={() => {
                // 组合期间光标位置在拼音里跳，别拿它当格子位置。
                if (composingRef.current) return
                // 有选区就折起来：格纸只做单点插入，留着选区会显示成「第二个光标」。
                collapseSelection()
                updateCaret()
              }}
              onClick={() => {
                if (!composingRef.current) updateCaret()
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={(event) => {
                // 输入法正在选词：方向键/空格/回车都归输入法，不能抢。
                if (composingRef.current) return
                const meta = event.metaKey || event.ctrlKey
                if (meta && event.key.toLowerCase() === 'z') {
                  event.preventDefault()
                  undo()
                  return
                }
                if (meta) return
                if (
                  event.key === 'ArrowLeft' ||
                  event.key === 'ArrowRight' ||
                  event.key === 'ArrowUp' ||
                  event.key === 'ArrowDown' ||
                  event.key === 'Home' ||
                  event.key === 'End'
                ) {
                  event.preventDefault()
                  moveCaret(event.key)
                  return
                }
                if (event.key === 'Backspace' && deleteSmart(-1)) {
                  event.preventDefault()
                  return
                }
                if (event.key === 'Delete' && deleteSmart(1)) {
                  event.preventDefault()
                }
              }}
            />

            {/*
              光标框。
              - 必须写死 `left/top: 0`：absolute 元素不定位时用的是「静态位置」，
                会落到网格下方，看上去就像光标跑出纸外。
              - 除了边框再铺一层半透明底色，浅色格纸上也能一眼看到。
              - `animate-pulse` 让它有呼吸感，一眼能认出这是「下一个字会写在这里」。
            */}
            {caret && focused ? (
              <div
                ref={caretRef}
                className="pointer-events-none absolute left-0 top-0 z-10 animate-pulse border-2 border-brand bg-brand/15"
                style={{
                  transform: `translate(${caret.col * cell}px, ${caret.row * cell}px)`,
                  width: cell,
                  height: cell,
                  boxShadow: '0 0 0 1px rgba(255,255,255,.9) inset',
                }}
              />
            ) : null}
          </div>
        </div>
      </div>

      {/* 保存命名 */}
      <Modal
        open={nameOpen}
        title="保存草稿"
        onCancel={() => setNameOpen(false)}
        onOk={saveToBox}
        okText="保存"
        cancelText="取消"
      >
        <p className="mb-2 mt-0 text-[13px] text-ink-3">给这份练习起个名字，方便在草稿箱里找到。</p>
        <Input
          value={draftName}
          maxLength={60}
          placeholder="例：2024年11月联考·第3题"
          onChange={(event) => setDraftName(event.target.value)}
        />
      </Modal>

      {/* 草稿箱 */}
      <Drawer open={boxOpen} title="草稿箱" width={380} onClose={() => setBoxOpen(false)}>
        {box.length === 0 ? (
          <p className="text-[13px] text-ink-3">还没有草稿。答题后点「保存」即可存进来。</p>
        ) : (
          <ul className="m-0 list-none p-0">
            {box.map((item) => (
              <li key={item.id} className="mb-2 rounded-lg border border-line p-2.5">
                <div className="flex items-start justify-between gap-2">
                  <b className="text-[13.5px]">{item.title}</b>
                  <span className="shrink-0 font-num text-[11px] text-ink-3">
                    {new Date(item.savedAt).toLocaleDateString('zh-CN')}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-[12.5px] text-ink-3">{item.text.slice(0, 60) || '（空）'}</p>
                <div className="mt-1.5 flex gap-1.5">
                  <Button size="small" type="primary" onClick={() => restoreDraft(item)}>
                    载入
                  </Button>
                  <Button
                    size="small"
                    danger
                    onClick={() => {
                      const next = box.filter((entry) => entry.id !== item.id)
                      setBox(next)
                      window.localStorage.setItem(BOX_KEY, JSON.stringify(next))
                    }}
                  >
                    删除
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Drawer>

      {/* 导出 */}
      <Modal
        open={exportOpen}
        title="导出预览"
        width={640}
        onCancel={() => setExportOpen(false)}
        footer={[
          <Button key="md" icon={<Download size={13} />} onClick={() => download(exportText, 'md')}>
            下载 .md
          </Button>,
          <Button key="txt" icon={<Download size={13} />} onClick={() => download(exportText, 'txt')}>
            下载 .txt
          </Button>,
          <Button key="copy" type="primary" onClick={() => copy(exportText)}>
            复制全文
          </Button>,
        ]}
      >
        <p className="mb-1.5 mt-0 text-[12.5px] text-ink-3">作答要求（选填，会写进导出文本）</p>
        <Input.TextArea
          value={brief}
          autoSize={{ minRows: 2, maxRows: 4 }}
          placeholder="例：内容全面，条理清晰，不超过 350 字。"
          onChange={(event) => {
            setBrief(event.target.value)
            scheduleSave(text, event.target.value)
          }}
        />
        <p className="mb-1.5 mt-3 text-[12.5px] text-ink-3">导出内容</p>
        <Input.TextArea value={exportText} autoSize={{ minRows: 8, maxRows: 18 }} readOnly />
      </Modal>

      {/* 导入 */}
      <Modal
        open={importOpen}
        title="导入文本"
        width={600}
        onCancel={() => setImportOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setImportOpen(false)}>
            取消
          </Button>,
          <Button
            key="append"
            onClick={() => {
              fillFromText(importText, false)
              setImportOpen(false)
              setImportText('')
            }}
          >
            追加到末尾
          </Button>,
          <Button
            key="replace"
            type="primary"
            onClick={() => {
              fillFromText(importText, true)
              setImportOpen(false)
              setImportText('')
            }}
          >
            替换全部
          </Button>,
        ]}
      >
        <p className="mb-2 mt-0 text-[12.5px] text-ink-3">
          粘贴答案后选择替换或追加。换行会保留，Markdown 标记会自动去掉。
        </p>
        <Input.TextArea
          value={importText}
          autoSize={{ minRows: 8, maxRows: 16 }}
          placeholder={'一、动之以情，拉近距离……\n二、晓之以理，讲清实情……'}
          onChange={(event) => setImportText(event.target.value)}
        />
        <p className="mt-2 text-[12px] text-ink-3">
          已输入 {importText.length} 字（去换行后 {importText.replace(/\n/g, '').length} 格）
        </p>
      </Modal>
    </div>
  )
}
