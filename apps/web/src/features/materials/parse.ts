import type { MaterialKind, PptShape } from './db'

/**
 * 材料解析：只读「元数据 + 可矢量呈现的内容」，**不把文档转成整页位图**。
 *
 * @remarks
 * 三种格式的策略差异：
 * - **PDF**：只读出页数与单页尺寸，保留原始 Blob。真正显示时由渲染层
 *   按「可视区 + 安全区」用 pdfjs 现渲染那几页，离开就丢弃。
 *   这样既不用在导入时把整份文件渲染一遍（几百 MB 峰值），也不占额外存储。
 * - **DOCX**：mammoth 转成语义化 HTML（矢量、可选中），按固定页高切页。
 * - **PPTX**：解 zip 取出每页文字块（位置/字号/文字），以 DOM 排版呈现。
 */

/** PPT 里 EMU → 像素的换算基准（1 英寸 = 914400 EMU，按 96dpi）。 */
const EMU_PER_PX = 9525

/** DOCX 单页基准尺寸（A4 @96dpi）。 */
export const DOCX_PAGE_W = 794
export const DOCX_PAGE_H = 1123
/** DOCX 正文可用宽 = 页宽 - 左右各 48px 内边距，量高度时必须用同一口径。 */
export const DOCX_INNER_W = DOCX_PAGE_W - 96
/** 上下内边距之和，切页时扣掉。 */
export const DOCX_PAD_Y = 96

/** 解析结果：只有元数据与矢量内容，没有位图。 */
export type ParsedMaterial = {
  kind: MaterialKind
  pageCount: number
  pageW: number
  pageH: number
  /** DOCX：整篇正文 HTML（只一份，逐页靠 CSS 偏移裁剪）。 */
  docxHtml?: string
  /** PPTX：每页文字块（矢量）。 */
  pptSlides?: PptShape[][]
}

/**
 * 根据文件名判断格式。
 *
 * @param name 文件名。
 * @returns 格式；不支持返回 null。
 */
export function detectKind(name: string): MaterialKind | null {
  const lower = name.toLowerCase()
  if (lower.endsWith('.pdf')) return 'pdf'
  if (lower.endsWith('.docx')) return 'docx'
  if (lower.endsWith('.pptx')) return 'pptx'
  return null
}

/* ---------------- pdfjs 加载器（供渲染层复用） ---------------- */

/** pdfjs 模块缓存（动态 import，避免首屏加载 400KB）。 */
let pdfjsPromise: Promise<typeof import('pdfjs-dist')> | null = null

/**
 * 载入 pdfjs 并配置 worker。
 *
 * @returns pdfjs 模块。
 * @remarks worker 走 Vite 的 `?url` 内联引用：打包后路径由构建器决定，
 * 手写 `/pdf.worker.js` 在 GitHub Pages 子路径下必然 404。
 */
export async function loadPdfjs() {
  if (pdfjsPromise) return pdfjsPromise
  pdfjsPromise = (async () => {
    const pdfjs = await import('pdfjs-dist')
    const workerUrl = (await import('pdfjs-dist/build/pdf.worker.min.mjs?url')).default
    pdfjs.GlobalWorkerOptions.workerSrc = workerUrl
    return pdfjs
  })()
  return pdfjsPromise
}

/**
 * 打开一份 PDF（按材料 id 缓存，避免每次翻页都重新解析整份文件）。
 *
 * @param id 材料 id。
 * @param file 原始文件。
 * @returns pdfjs 文档代理。
 * @remarks 同一份材料只解析一次；`releasePdfDoc` 负责在离开材料时销毁。
 */
const pdfDocCache = new Map<string, Promise<import('pdfjs-dist').PDFDocumentProxy>>()

export function openPdfDocument(id: string, file: Blob) {
  const cached = pdfDocCache.get(id)
  if (cached) return cached
  const task = (async () => {
    const pdfjs = await loadPdfjs()
    const data = new Uint8Array(await file.arrayBuffer())
    return pdfjs.getDocument({ data, isEvalSupported: false }).promise
  })()
  pdfDocCache.set(id, task)
  return task
}

/**
 * 关闭并释放某份 PDF。
 *
 * @param id 材料 id。
 * @returns 无返回。
 */
export async function closePdfDocument(id: string) {
  const cached = pdfDocCache.get(id)
  if (!cached) return
  pdfDocCache.delete(id)
  const doc = await cached.catch(() => null)
  await doc?.destroy().catch(() => undefined)
}

/* ---------------- PDF ---------------- */

/**
 * 解析 PDF 元数据（不渲染任何页面）。
 *
 * @param file 文件。
 * @returns 元数据。
 */
export async function parsePdfMeta(file: File): Promise<ParsedMaterial> {
  const pdfjs = await loadPdfjs()
  const data = new Uint8Array(await file.arrayBuffer())
  const doc = await pdfjs.getDocument({ data, isEvalSupported: false }).promise
  try {
    const first = await doc.getPage(1)
    // 取 1 倍视口：PDF 单位就是点，页面显示时按容器宽度再缩放。
    const box = first.getViewport({ scale: 1 })
    // 统一按第一页的宽高比输出：多页尺寸不一致时翻页不会跳，滚动条也稳。
    return {
      kind: 'pdf',
      pageCount: doc.numPages,
      pageW: Math.round(box.width),
      pageH: Math.round(box.height),
    }
  } finally {
    // 元数据已经拿到，这里销毁；真正显示时由渲染层重新 open。
    await doc.destroy().catch(() => undefined)
  }
}

/* ---------------- PPTX ---------------- */

/**
 * 解析 PPTX 的文字块（矢量）。
 *
 * @param file 文件。
 * @returns 每页的文字块。
 * @remarks PPTX 是 zip：`ppt/slides/slideN.xml` 里拿文本框与位置。
 * **不做完整 Office 排版**（表格/图表/动画不处理），目标是「看得清文字、能写批注」，
 * 而不是像素级还原 —— 但因为是真实文本，可选中、放大不糊、体积只有几 KB。
 */
export async function parsePptx(file: File): Promise<ParsedMaterial> {
  const JSZip = (await import('jszip')).default
  const zip = await JSZip.loadAsync(await file.arrayBuffer())

  const presXml = await zip.file('ppt/presentation.xml')?.async('string')
  const sizeMatch = presXml?.match(/<p:sldSz[^>]*cx="(\d+)"[^>]*cy="(\d+)"/)
  const slideW = sizeMatch ? Number(sizeMatch[1]) : 12192000
  const slideH = sizeMatch ? Number(sizeMatch[2]) : 6858000
  const pageW = Math.round(slideW / EMU_PER_PX)
  const pageH = Math.round(slideH / EMU_PER_PX)

  // 幻灯片顺序以 presentation.xml 为准（文件名不保证连续）。
  const orderIds = [...(presXml ?? '').matchAll(/<p:sldId[^>]*r:id="(rId\d+)"/g)].map((m) => m[1])
  const relsXml = await zip.file('ppt/_rels/presentation.xml.rels')?.async('string')
  const relMap = new Map<string, string>()
  for (const m of (relsXml ?? '').matchAll(/Id="(rId\d+)"[^>]*Target="([^"]+)"/g)) {
    relMap.set(m[1], m[2])
  }
  const slidePaths = orderIds
    .map((rid) => {
      const target = relMap.get(rid)
      if (!target) return null
      return target.startsWith('/') ? target.slice(1) : `ppt/${target.replace(/^\.\//, '')}`
    })
    .filter((v): v is string => Boolean(v))

  const fallback = Object.keys(zip.files)
    .filter((n) => /^ppt\/slides\/slide\d+\.xml$/.test(n))
    .sort((a, b) => Number(a.match(/slide(\d+)/)![1]) - Number(b.match(/slide(\d+)/)![1]))
  const paths = slidePaths.length ? slidePaths : fallback

  /**
   * 从 XML 里抽「占位符 id → 位置尺寸」的映射。
   *
   * @param xml 版式/母版 XML。
   * @returns id → 几何。
   * @remarks PowerPoint 的标题/正文占位符**不写坐标**，位置继承自 slideLayout，
   * 再往上是 slideMaster。之前只读 slide 本身，导致所有文本框的坐标都是 0、
   * 全部叠在左上角（截图里字糊成一团就是这个原因）。
   */
  function readPlaceholderGeometry(xml: string) {
    const map = new Map<string, { x: number; y: number; w: number; h: number }>()
    for (const sp of xml.matchAll(/<p:sp>([\s\S]*?)<\/p:sp>/g)) {
      const body = sp[1]
      const idx = body.match(/<p:ph[^>]*idx="(\d+)"/) ?? body.match(/<p:ph[^>]*\/?>/)
      const off = body.match(/<a:off x="(-?\d+)" y="(-?\d+)"/)
      const ext = body.match(/<a:ext cx="(\d+)" cy="(\d+)"/)
      if (!off || !ext) continue
      const key = body.match(/<p:ph[^>]*idx="(\d+)"/)?.[1] ?? '0'
      map.set(key, {
        x: Math.round(Number(off[1]) / EMU_PER_PX),
        y: Math.round(Number(off[2]) / EMU_PER_PX),
        w: Math.round(Number(ext[1]) / EMU_PER_PX),
        h: Math.round(Number(ext[2]) / EMU_PER_PX),
      })
      // 无 idx 的占位符（标题）按 '0' 也存一份，便于兜底。
      if (idx) map.set('0', map.get('0') ?? map.get(key)!)
    }
    return map
  }

  /**
   * 取一张幻灯片里的文字块与位置。
   *
   * @param xml 幻灯片 XML。
   * @param inherited 继承来的占位符几何（来自 layout / master）。
   * @returns 文字块列表。
   */
  function readShapes(
    xml: string,
    inherited: Map<string, { x: number; y: number; w: number; h: number }>,
  ): PptShape[] {
    const shapes: PptShape[] = []
    for (const sp of xml.matchAll(/<p:sp>([\s\S]*?)<\/p:sp>/g)) {
      const body = sp[1]
      const off = body.match(/<a:off x="(-?\d+)" y="(-?\d+)"/)
      const ext = body.match(/<a:ext cx="(\d+)" cy="(\d+)"/)
      const texts = [...body.matchAll(/<a:t>([\s\S]*?)<\/a:t>/g)].map((m) => m[1])
      if (!texts.length) continue

      // 自身没坐标就往上找：先按 ph idx，再按「无 idx 占位符」兜底。
      const phIdx = body.match(/<p:ph[^>]*idx="(\d+)"/)?.[1]
      const fallback = (phIdx && inherited.get(phIdx)) || inherited.get('0')
      const x = off ? Math.round(Number(off[1]) / EMU_PER_PX) : (fallback?.x ?? 0)
      const y = off ? Math.round(Number(off[2]) / EMU_PER_PX) : (fallback?.y ?? 0)
      const w = ext ? Math.round(Number(ext[1]) / EMU_PER_PX) : (fallback?.w ?? Math.round(pageW * 0.8))
      const h = ext ? Math.round(Number(ext[2]) / EMU_PER_PX) : (fallback?.h ?? 80)

      const sz = body.match(/sz="(\d+)"/)
      shapes.push({
        x,
        y,
        w,
        h,
        text: texts
          .join('\n')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>'),
        // sz 单位是 1/100 磅，转 CSS px 约 ×1.333。
        size: sz ? Math.round((Number(sz[1]) / 100) * 1.333) : 18,
        bold: /<a:rPr[^>]*b="1"/.test(body),
      })
    }
    return shapes
  }

  /** 版式几何缓存：同一份 PPT 常有多页共用版式，解析一次即可。 */
  const layoutCache = new Map<string, Map<string, { x: number; y: number; w: number; h: number }>>()
  /** 母版几何（所有版式的兜底）。 */
  let masterGeometry: Map<string, { x: number; y: number; w: number; h: number }> | null = null

  /**
   * 取某页对应版式 + 母版的占位符几何。
   *
   * @param slidePath 幻灯片路径。
   * @returns 合并后的几何表（版式优先，母版兜底）。
   */
  async function geometryFor(slidePath: string) {
    const relPath = slidePath.replace(/slides\//, 'slides/_rels/') + '.rels'
    const rels = await zip.file(relPath)?.async('string')
    const layoutTarget = rels?.match(/Target="\.\.\/slideLayouts\/([^"]+)"/)?.[1]
    const layoutPath = layoutTarget ? `ppt/slideLayouts/${layoutTarget}` : ''
    const merged = new Map<string, { x: number; y: number; w: number; h: number }>()

    if (!masterGeometry) {
      const masterPath = 'ppt/slideMasters/slideMaster1.xml'
      const masterXml = (await zip.file(masterPath)?.async('string')) ?? ''
      masterGeometry = readPlaceholderGeometry(masterXml)
    }
    for (const [key, value] of masterGeometry) merged.set(key, value)

    if (layoutPath) {
      let cached = layoutCache.get(layoutPath)
      if (!cached) {
        const layoutXml = (await zip.file(layoutPath)?.async('string')) ?? ''
        cached = readPlaceholderGeometry(layoutXml)
        layoutCache.set(layoutPath, cached)
      }
      // 版式的位置覆盖母版：标题/正文的实际落点基本由版式决定。
      for (const [key, value] of cached) merged.set(key, value)
    }
    return merged
  }

  const slides: PptShape[][] = []
  for (const path of paths) {
    const xml = (await zip.file(path)?.async('string')) ?? ''
    const geometry = await geometryFor(path)
    slides.push(readShapes(xml, geometry))
  }

  return { kind: 'pptx', pageCount: slides.length, pageW, pageH, pptSlides: slides }
}

/* ---------------- DOCX ---------------- */

/**
 * 解析 DOCX 为语义化 HTML（矢量）。
 *
 * @param file 文件。
 * @returns 元数据 + 整篇正文。
 * @remarks 用 mammoth 转换后按固定页高切页。
 * 不做真实分页（浏览器排版结果不可控），好处是每页高度稳定、批注坐标永不漂移。
 */
export async function parseDocx(file: File): Promise<ParsedMaterial> {
  const mammoth = await import('mammoth')
  const result = await mammoth.convertToHtml({ arrayBuffer: await file.arrayBuffer() })
  const html = result.value || '<p>（文档没有可显示的正文）</p>'

  // 离屏量一次总高，再按页高切成 N 页。量的时候必须用「页面内宽」，
  // 否则和渲染时的换行位置不一致，跨页处会出现断字或重复。
  const measure = document.createElement('div')
  measure.style.cssText = `position:absolute;left:-99999px;top:0;width:${DOCX_INNER_W}px;font:16px/1.85 "PingFang SC",system-ui,sans-serif;`
  measure.innerHTML = html
  document.body.appendChild(measure)
  const totalH = measure.scrollHeight
  document.body.removeChild(measure)

  const perPage = DOCX_PAGE_H - DOCX_PAD_Y
  return {
    kind: 'docx',
    pageCount: Math.max(1, Math.ceil(totalH / perPage)),
    pageW: DOCX_PAGE_W,
    pageH: DOCX_PAGE_H,
    docxHtml: html,
  }
}

/**
 * 按格式分派解析（只出元数据与矢量内容）。
 *
 * @param file 文件。
 * @returns 解析结果。
 */
export async function parseMaterial(file: File): Promise<ParsedMaterial> {
  const kind = detectKind(file.name)
  if (kind === 'pdf') return parsePdfMeta(file)
  if (kind === 'pptx') return parsePptx(file)
  if (kind === 'docx') return parseDocx(file)
  throw new Error('只支持 PDF / DOCX / PPTX')
}
