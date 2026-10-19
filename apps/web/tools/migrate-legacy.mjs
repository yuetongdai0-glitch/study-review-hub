/**
 * 旧静态页 → React 模块的一次性迁移器。
 *
 * 为什么需要它：原站是 14 个手写 HTML（合计约 4.3MB），内容经过大量校对，
 * 逐字手抄成 JSX 只会引入错字与漏段。这里做的是**无损转换**：
 * 结构、类名、文字全部保留，只把语法换成 JSX，并把每节拆成独立组件。
 * 之后要改某一节，直接改对应的 `<节>.tsx` 即可，不再整页找。
 *
 * 用法：node tools/migrate-legacy.mjs [route...]
 *   node tools/migrate-legacy.mjs               迁移全部页面
 *   node tools/migrate-legacy.mjs quantitative  只迁一页
 */
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const webRoot = resolve(here, '..')
const legacyDir = join(webRoot, 'pages')
const pagesDir = join(webRoot, 'src/pages')

/** 需要迁移的页面（与 routeRegistry 对应）。 */
const ALL_ROUTES = [
  'graphic-reasoning',
  'quantitative',
  'data-analysis',
  'verbal',
  'judgment',
  'analogy',
  'words',
  'comprehensive-a',
  'comprehensive-d',
  'politics',
]

/**
 * 手写页：旧版是内联 JS 动态渲染，静态抽取会丢交互，因此保持 React 手写实现。
 *
 * @remarks 迁移器必须跳过它们，否则会覆盖手写代码。
 */
const HAND_WRITTEN = new Set(['vocab'])

/** 需要补齐自闭合的标签。 */
const VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
])

/** JSX 里必须写成驼峰命名（含 SVG）的属性。 */
const CAMEL_PROPS = {
  'accept-charset': 'acceptCharset',
  'clip-path': 'clipPath',
  'clip-rule': 'clipRule',
  'color-interpolation-filters': 'colorInterpolationFilters',
  'dominant-baseline': 'dominantBaseline',
  'fill-opacity': 'fillOpacity',
  'fill-rule': 'fillRule',
  'flood-color': 'floodColor',
  'flood-opacity': 'floodOpacity',
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'font-style': 'fontStyle',
  'font-weight': 'fontWeight',
  'letter-spacing': 'letterSpacing',
  'marker-end': 'markerEnd',
  'marker-mid': 'markerMid',
  'marker-start': 'markerStart',
  'paint-order': 'paintOrder',
  'pointer-events': 'pointerEvents',
  'shape-rendering': 'shapeRendering',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-opacity': 'strokeOpacity',
  'stroke-width': 'strokeWidth',
  'text-anchor': 'textAnchor',
  'text-decoration': 'textDecoration',
  'transform-origin': 'transformOrigin',
  'vector-effect': 'vectorEffect',
  'word-break': 'wordBreak',
  'white-space': 'whiteSpace',
  class: 'className',
  for: 'htmlFor',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  spellcheck: 'spellCheck',
  contenteditable: 'contentEditable',
  crossorigin: 'crossOrigin',
  'xlink:href': 'xlinkHref',
}

/**
 * 把 CSS 声明串转成 React style 对象字面量。
 *
 * @param css 形如 `color:#333; padding:0 4px` 的声明串。
 * @returns JSX style 属性值。
 */
function styleToObject(css) {
  const entries = css
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => {
      const index = item.indexOf(':')
      if (index < 0) return null
      const rawName = item.slice(0, index).trim()
      const value = item.slice(index + 1).trim()
      if (!rawName || !value) return null
      const name = rawName.startsWith('--')
        ? `'${rawName}'`
        : rawName.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
      return `${name}: '${value.replace(/'/g, "\\'")}'`
    })
    .filter(Boolean)

  return `{ ${entries.join(', ')} }`
}

/**
 * 转义 JSX 属性值里的双引号。
 *
 * @param value 原始值。
 * @returns 可安全放进双引号的值。
 */
function escapeAttr(value) {
  return value.replace(/&(?!(?:[a-zA-Z]+|#\d+|#x[0-9a-fA-F]+);)/g, '&amp;').replace(/"/g, '&quot;')
}

/**
 * 需要写成数字表达式的属性。
 *
 * @remarks `rowSpan="3"` 在 JSX 里是字符串，React 会直接报类型错误。
 */
const NUMERIC_PROPS = new Set([
  'rowSpan',
  'colSpan',
  'tabIndex',
  'maxLength',
  'size',
  'span',
  'start',
  'offset',
  'strokeWidth',
  'fontSize',
  'width',
  'height',
  'x',
  'y',
  'x1',
  'x2',
  'y1',
  'y2',
  'cx',
  'cy',
  'r',
  'rx',
  'ry',
  'dx',
  'dy',
])

/**
 * 重写单个开始标签：转驼峰、去重复、数值属性转表达式、style 转对象、void 补自闭合。
 *
 * @param raw 原始标签文本。
 * @returns 规范化后的标签。
 * @remarks 全部属性处理都收在标签内部完成：之前的全局正则版本会误伤正文里的
 * `a = b` 之类文本，也会把 `style={{...}}` 的嵌套大括号截断。
 */
function normalizeTag(raw) {
  const match = raw.match(/^<(\/?)([a-zA-Z][\w-]*)([\s\S]*?)(\/?)>$/)
  if (!match) return raw
  const [, closing, tag, attrText, selfClose] = match
  if (closing) return raw

  const seen = new Set()
  const attrs = []
  // 支持 `name`、`name="v"`、`name='v'`、`name={expr}`；值内允许嵌套大括号。
  const attrRe = /\s*([a-zA-Z][\w:-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|\{([\s\S]*?)\}))?/g
  let item
  while ((item = attrRe.exec(attrText)) !== null) {
    const [, rawName, doubleQuoted, singleQuoted, expression] = item
    const name = CAMEL_PROPS[rawName.toLowerCase()] ?? rawName
    if (seen.has(name)) continue
    seen.add(name)

    if (expression !== undefined) {
      attrs.push(`${name}={${expression}}`)
      continue
    }
    const value = doubleQuoted ?? singleQuoted
    if (value === undefined) {
      attrs.push(name)
      continue
    }
    if (name === 'style') {
      attrs.push(`style={${styleToObject(value)}}`)
      continue
    }
    if (NUMERIC_PROPS.has(name) && /^\d+(\.\d+)?$/.test(value)) {
      attrs.push(`${name}={${value}}`)
      continue
    }
    attrs.push(`${name}="${escapeAttr(value)}"`)
  }

  const isVoid = VOID_TAGS.has(tag.toLowerCase())
  const needClose = isVoid || selfClose === '/'
  return `<${tag}${attrs.length ? ` ${attrs.join(' ')}` : ''}${needClose ? ' /' : ''}>`
}

/**
 * 逐个标签做规范化。
 *
 * @param html HTML 片段。
 * @returns 规范化后的片段。
 */
function normalizeTags(html) {
  let output = ''
  let index = 0
  while (index < html.length) {
    if (html[index] === '<' && /[a-zA-Z/]/.test(html[index + 1] ?? '')) {
      let cursor = index + 1
      let quote = ''
      while (cursor < html.length) {
        const char = html[cursor]
        if (quote) {
          if (char === quote) quote = ''
        } else if (char === '"' || char === "'") {
          quote = char
        } else if (char === '>') {
          cursor += 1
          break
        }
        cursor += 1
      }
      output += normalizeTag(html.slice(index, cursor))
      index = cursor
      continue
    }
    output += html[index]
    index += 1
  }
  return output
}

/**
 * 转义文本节点里的 JSX 危险字符。
 *
 * @param html 已完成的 JSX 片段。
 * @returns 转义后的片段。
 * @remarks 必须用状态机而不是正则：正文里有大量 `R > 10%`、`144 元 < 300` 这类比较符，
 * 正则无法区分「小于号」与「标签开始」，会把 `< 300×0.9` 当成标签吞掉。
 * 判定规则：`<` 后紧跟 `/`、字母、`!` 或 `?` 才是标签，否则是文本。
 */
function escapeTextNodes(html) {
  let output = ''
  let index = 0

  while (index < html.length) {
    const char = html[index]

    if (char === '<' && /[a-zA-Z/!?]/.test(html[index + 1] ?? '')) {
      // 标签：整段原样拷贝，但要跳过属性值里的引号内容。
      let cursor = index
      let quote = ''
      while (cursor < html.length) {
        const current = html[cursor]
        if (quote) {
          if (current === quote) quote = ''
        } else if (current === '"' || current === "'") {
          quote = current
        } else if (current === '>') {
          cursor += 1
          break
        }
        cursor += 1
      }
      output += html.slice(index, cursor)
      index = cursor
      continue
    }

    if (char === '<') {
      output += '&lt;'
      index += 1
      continue
    }

    if (char === '>') {
      output += '&gt;'
      index += 1
      continue
    }

    if (char === '{') {
      // `style={{...}}` 是 JSX 表达式，必须整段保留，不能当文本转义。
      const previous = html[index - 1]
      if (previous === '=') {
        let depth = 0
        let cursor = index
        while (cursor < html.length) {
          if (html[cursor] === '{') depth += 1
          else if (html[cursor] === '}') {
            depth -= 1
            if (depth === 0) {
              cursor += 1
              break
            }
          }
          cursor += 1
        }
        output += html.slice(index, cursor)
        index = cursor
        continue
      }
      output += '&#123;'
      index += 1
      continue
    }

    if (char === '}') {
      output += '&#125;'
      index += 1
      continue
    }

    output += char
    index += 1
  }

  return output
}

/**
 * HTML 片段转 JSX。
 *
 * @param html 原始 HTML。
 * @returns JSX 片段（不含外层包裹）。
 */
export function htmlToJsx(html) {
  let source = html

  // 1. 去掉 HTML 注释（React 里保留注释没有意义，还可能夹带过期标注）。
  source = source.replace(/<!--[\s\S]*?-->/g, '')

  // 2. 去掉内联事件：折叠与交互改由 React 接管，留着会变成无效属性。
  source = source.replace(/\s+on[a-z]+\s*=\s*"[^"]*"/gi, '')

  // 3. 标签级规范化：转驼峰、去重复、数值转表达式、style 转对象、void 自闭合。
  //    必须在文本转义之前做，否则 `style={{...}}` 会被当成正文处理。
  source = normalizeTags(source)

  // 4. 文本节点转义（`<` `>` `{` `}`）。
  source = escapeTextNodes(source)

  return source.trim()
}

/**
 * HTML 类名 → 公共组件的映射。
 *
 * @remarks 迁移的落点：旧站的每个 `.block` / `.example` / `.key-box` 都变成
 * `<Block>` / `<Example>` / `<Callout variant="key">`。页面从此只描述语义，
 * 视觉由 styles.css 单点控制，改一次全站生效。
 * `tag` 是组件名，`attrs` 是固定属性，`classKey` 用于定位旧类名。
 */
const COMPONENT_MAP = [
  { classKey: 'block-title', tag: 'BlockTitle' },
  { classKey: 'block', tag: 'Block' },
  { classKey: 'example-header', tag: 'ExampleHeader' },
  { classKey: 'example-body', tag: 'ExampleBody' },
  { classKey: 'example-q', tag: 'ExampleQuestion' },
  { classKey: 'example-opts', tag: 'ExampleOptions' },
  { classKey: 'example-answer', tag: 'ExampleAnswer' },
  { classKey: 'example', tag: 'Example' },
  { classKey: 'formula-box', tag: 'Callout', attrs: ' variant="formula"' },
  { classKey: 'key-box', tag: 'Callout', attrs: ' variant="key"' },
  { classKey: 'tip-box', tag: 'Callout', attrs: ' variant="tip"' },
  { classKey: 'warn-box', tag: 'Callout', attrs: ' variant="warn"' },
  { classKey: 'note-box', tag: 'Callout', attrs: ' variant="note"' },
  { classKey: 'sub-point', tag: 'SubPoint' },
  { classKey: 'point-list', tag: 'PointList', htmlTag: 'ul' },
  { classKey: 'mini-table', tag: 'DataTable', htmlTag: 'table' },
  { classKey: 'ex-t', tag: 'ExerciseTitle' },
  { classKey: 'ex', tag: 'ExerciseCard' },
  { classKey: 'card', tag: 'Card' },
]

/**
 * 扫描 HTML 中所有可转换元素的位置。
 *
 * @param html HTML 片段。
 * @returns 元素位置列表（含 inner 区间）。
 * @remarks 必须按 class token 精确匹配：`\bblock\b` 会把 `block-title` 也算成 `block`，
 * 导致把标题误包进块容器、产生错位标签。
 */
function scanConvertible(html) {
  const results = []
  const seen = new Set()

  for (const mapping of COMPONENT_MAP) {
    const htmlTag = mapping.htmlTag ?? 'div'
    const openRe = new RegExp(`<${htmlTag}\\b[^>]*>`, 'g')

    for (const match of html.matchAll(openRe)) {
      const start = match.index
      if (seen.has(start)) continue
      const classMatch = match[0].match(/class="([^"]*)"/)
      if (!classMatch) continue
      const tokens = classMatch[1].split(/\s+/).filter(Boolean)
      if (!tokens.includes(mapping.classKey)) continue

      const openEnd = start + match[0].length
      const end = findElementEnd(html, start, htmlTag)
      seen.add(start)
      results.push({
        start,
        end,
        innerStart: openEnd,
        innerEnd: end - `</${htmlTag}>`.length,
        className: tokens,
        tag: mapping.tag,
        attrs: mapping.attrs ?? '',
        mapping,
      })
    }
  }

  return results.sort((a, b) => a.start - b.start)
}

/**
 * 把已知结构替换成公共组件（由内向外，正确处理嵌套）。
 *
 * @param html 原始 HTML 片段。
 * @returns 含组件标签的片段。
 * @remarks 必须由内向外替换：外层组件的 inner 里若还有内层组件，
 * 先换内层再换外层，才能保证每次替换都作用在已经稳定的文本上。
 */
function toComponents(html) {
  let current = html

  for (let round = 0; round < 80; round += 1) {
    const items = scanConvertible(current)
    if (items.length === 0) break

    // 只处理「内部没有其它可转换元素」的最内层。
    const innermost = items.filter(
      (item) => !items.some((other) => other !== item && other.start > item.start && other.end <= item.end),
    )
    if (innermost.length === 0) break

    // 从后往前替换，保证前面的下标仍然有效。
    for (const item of [...innermost].sort((a, b) => b.start - a.start)) {
      const inner = current.slice(item.innerStart, item.innerEnd)
      const replacement = `<${item.tag}${item.attrs}>${inner}</${item.tag}>`
      current = current.slice(0, item.start) + replacement + current.slice(item.end)
    }
  }

  return current
}

/**
 * 从起始位置匹配同名标签的结束位置。
 *
 * @param html 页面源码。
 * @param startIndex 起始标签的 `<` 位置。
 * @param tag 标签名。
 * @returns 结束标签之后的下标。
 */
function findElementEnd(html, startIndex, tag) {
  const openRe = new RegExp(`<${tag}(?=[\\s>/])`, 'gi')
  const closeRe = new RegExp(`</${tag}\\s*>`, 'gi')
  let depth = 0
  let cursor = startIndex

  while (cursor < html.length) {
    openRe.lastIndex = cursor
    closeRe.lastIndex = cursor
    const openMatch = openRe.exec(html)
    const closeMatch = closeRe.exec(html)

    if (!closeMatch) return html.length
    if (openMatch && openMatch.index < closeMatch.index) {
      depth += 1
      cursor = openMatch.index + openMatch[0].length
      continue
    }

    depth -= 1
    if (depth === 0) return closeMatch.index + closeMatch[0].length
    cursor = closeMatch.index + closeMatch[0].length
  }

  return html.length
}

/**
 * 去掉标签但保留内部文本，用于生成侧栏标题。
 *
 * @param html 片段。
 * @returns 纯文本。
 */
function textOf(html) {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * 抽取一个 section 的元信息与正文。
 *
 * @param html 页面源码。
 * @returns 章节数组。
 */
function extractSections(html) {
  const sections = []

  // A 型：<div class="section c-xxx" id="sN">，标题在 .section-header 里。
  const divRe = /<div class="section([^"]*)" id="([^"]+)">/g
  // B 型：<section id="xxx"> 或 <section class="ch" id="xxx">，标题在 .ch-head / .sec-head 里。
  const secRe = /<section\b[^>]*\bid="([^"]+)"[^>]*>/g

  const found = []
  for (const match of html.matchAll(divRe)) found.push({ kind: 'div', index: match.index, id: match[2], cls: match[1] })
  for (const match of html.matchAll(secRe)) found.push({ kind: 'section', index: match.index, id: match[1], cls: '' })
  found.sort((a, b) => a.index - b.index)

  for (const item of found) {
    const end = findElementEnd(html, item.index, item.kind === 'div' ? 'div' : 'section')
    const raw = html.slice(item.index, end)

    if (item.kind === 'div') {
      const icon = raw.match(/<div class="section-icon"[^>]*>([\s\S]*?)<\/div>/)?.[1] ?? ''
      const titleHtml = raw.match(/<div class="section-title"[^>]*>([\s\S]*?)<\/div>/)?.[1] ?? ''
      const tag = textOf(raw.match(/<span class="section-tag[^"]*"[^>]*>([\s\S]*?)<\/span>/)?.[1] ?? '')
      const bodyMatch = raw.match(/<div class="section-body">/)
      let body = ''
      if (bodyMatch) {
        // 用标签配对定位 .section-body 的真实闭合位置，避免多切/少切一层 div。
        const bodyOpenIndex = item.index + bodyMatch.index
        const bodyEnd = findElementEnd(html, bodyOpenIndex, 'div')
        const bodyOpenEnd = bodyOpenIndex + bodyMatch[0].length
        body = html.slice(bodyOpenEnd, bodyEnd - '</div>'.length)
      }
      sections.push({
        id: item.id,
        icon: textOf(icon),
        title: textOf(titleHtml) || item.id,
        tag,
        extraClass: item.cls.trim(),
        body,
      })
      continue
    }

    // B 型：页头有三种写法（.ch-head / .sec-head / 裸 h2）。
    // 统一用标签配对取出页头整段，再从片段里读标题；不要用贪婪/懒惰正则切 div（会切错层）。
    let body = raw.replace(/^<section[^>]*>/, '').replace(/<\/section>\s*$/, '')

    const chHeadStart = body.indexOf('<div class="ch-head">')
    const secHeadStart = body.indexOf('<div class="sec-head">')
    let headStart = chHeadStart >= 0 ? chHeadStart : secHeadStart
    let headHtml = ''
    if (headStart >= 0) {
      const headEnd = findElementEnd(body, headStart, 'div')
      headHtml = body.slice(headStart, headEnd)
      body = body.slice(headEnd)
    }

    const chTitleBlock = headHtml.match(/<div class="ch-title">([\s\S]*?)<\/div>/)?.[1] ?? ''
    const chNo = textOf(headHtml.match(/<div class="ch-no"[^>]*>([\s\S]*?)<\/div>/)?.[1] ?? '')
    const secNum = textOf(headHtml.match(/<div class="sec-num"[^>]*>([\s\S]*?)<\/div>/)?.[1] ?? '')
    const h2 = headHtml.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1] ?? ''
    // .ch-title 里的 <b> 是主标题、<span> 是副标签。
    const chMain = textOf(chTitleBlock.match(/<b>([\s\S]*?)<\/b>/)?.[1] ?? '')
    const chSub = textOf(chTitleBlock.match(/<span>([\s\S]*?)<\/span>/)?.[1] ?? '')

    const title = chMain || textOf(h2) || item.id
    const icon = chNo || secNum
    // `.sec-desc` 是章节导语，属于正文内容，必须原样保留。
    const desc = ''

    // 正文若被 .ch-body 包裹，剥掉这层外壳。
    const chBodyMatch = body.match(/<div class="ch-body">/)
    if (chBodyMatch) {
      const innerEnd = findElementEnd(body, chBodyMatch.index, 'div')
      body = body.slice(chBodyMatch.index + chBodyMatch[0].length, innerEnd - '</div>'.length)
    }

    sections.push({
      id: item.id,
      icon,
      title,
      tag: chSub,
      extraClass: '',
      body,
      desc,
    })
  }

  return sections
}

/**
 * 给 CSS 选择器加上作用域前缀。
 *
 * @param selector 原始选择器（可能是逗号分隔的列表）。
 * @param scope 作用域选择器，如 `.legacy-quantitative`。
 * @returns 加前缀后的选择器。
 * @remarks 旧页面的 `:root` / `body` / `*` 必须映射到作用域根，否则变量不会生效。
 */
function scopeSelector(selector, scope) {
  return selector
    .split(',')
    .map((part) => {
      const item = part.trim()
      if (!item) return ''
      // 根级选择器与通配直接落到作用域容器上。
      if (/^(:root|html|body)$/.test(item)) return scope
      if (item === '*') return `${scope} *`
      if (item.startsWith('*')) return `${scope} ${item}`
      // 伪元素/伪类挂在容器自身，如 `::selection`。
      if (item.startsWith('::')) return `${scope}${item}`
      return `${scope} ${item}`
    })
    .filter(Boolean)
    .join(',\n')
}

/**
 * 只丢弃「由新应用壳接管」的选择器。
 *
 * @remarks 旧页面的 `body` / `main` / `.container` / `.sidebar` 等是页面级骨架，
 * 现在由 AppLayout 统一负责；其余**全部保留**——包括 `.section`、`.example` 这些公共类，
 * 因为各页在细节上做过手工微调，丢掉就会改变现有观感。
 */
const SHELL_SELECTORS = new Set([
  'html',
  'body',
  'main',
  '.container',
  '.sidebar',
  '.menu-btn',
  '.mask',
  '.back-top',
  '.banner',
  '.study-hub-shell',
  '.study-hub-panel',
  '.study-hub-trigger',
  '.progress-bar',
  '.progress-fill',
])

/**
 * 判断一条规则是否属于「已由应用壳接管」的骨架规则。
 *
 * @param selector 选择器（可能含逗号）。
 * @returns 是否需要丢弃。
 */
function isShellSelector(selector) {
  return selector.split(',').every((part) => SHELL_SELECTORS.has(part.trim().split(/\s+/)[0]))
}

/**
 * 把整段 CSS 作用域化。
 *
 * @param css 原始 CSS。
 * @param scope 作用域选择器。
 * @returns 作用域化后的 CSS。
 * @remarks 只处理一层大括号结构；嵌套的 @media / @supports 递归处理，
 * @keyframes 与 @font-face 原样保留（它们没有选择器概念）。
 * 命中公共类的规则直接丢弃，公共视觉由新样式层唯一负责。
 */
function scopeCss(css, scope) {
  const output = []
  let index = 0

  while (index < css.length) {
    const braceIndex = css.indexOf('{', index)
    if (braceIndex < 0) {
      const tail = css.slice(index).trim()
      if (tail) output.push(tail)
      break
    }

    const head = css.slice(index, braceIndex).trim()
    // 找到与当前 { 匹配的 }
    let depth = 0
    let cursor = braceIndex
    let closeIndex = css.length
    while (cursor < css.length) {
      const char = css[cursor]
      if (char === '{') depth += 1
      else if (char === '}') {
        depth -= 1
        if (depth === 0) {
          closeIndex = cursor
          break
        }
      }
      cursor += 1
    }

    const inner = css.slice(braceIndex + 1, closeIndex)

    if (/^@(media|supports|layer|container)/i.test(head)) {
      const nested = scopeCss(inner, scope)
      if (nested.trim()) output.push(`${head} {\n${nested}\n}`)
    } else if (/^@(keyframes|-webkit-keyframes|font-face|page|charset|import)/i.test(head)) {
      // 关键帧与字体声明没有选择器，不能加前缀。
      output.push(`${head} {${inner}}`)
    } else if (head && /^:root$/.test(head.trim())) {
      // :root 里只有 CSS 变量，原样落到作用域容器上即可。
      output.push(`${scope} {${inner}}`)
    } else if (head && !isShellSelector(head)) {
      output.push(`${scopeSelector(head, scope)} {${inner}}`)
    }

    index = closeIndex + 1
  }

  return output.join('\n')
}

/**
 * 把页面内联样式抽出并作用域化。
 *
 * @param html 页面源码。
 * @param scopeClass 作用域类名。
 * @returns 处理后的 CSS；没有内联样式时返回空串。
 */
function extractScopedCss(html, scopeClass) {
  const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((item) => item[1])
  if (styles.length === 0) return ''

  let css = styles.join('\n')

  // 去掉旧页面的「统一风格覆盖段」：新样式层已用统一令牌表达，留着会与新规则打架。
  const unifyIndex = css.indexOf('统一为数量关系页风格')
  if (unifyIndex > 0) {
    const commentStart = css.lastIndexOf('/*', unifyIndex)
    if (commentStart > 0) css = css.slice(0, commentStart)
  }

  // 去掉注释，避免干扰选择器解析。
  css = css.replace(/\/\*[\s\S]*?\*\//g, '')

  return `/* 由 tools/migrate-legacy.mjs 从旧页面抽取，选择器已加作用域前缀。 */\n${scopeCss(css, `.${scopeClass}`)}\n`
}

/**
 * 生成节组件文件名。
 *
 * @param id 节 id。
 * @returns 安全的文件名（不含扩展名）。
 */
function sectionFileOf(id) {
  return id.replace(/[^a-zA-Z0-9_-]/g, '-').replace(/^-+/, '') || 'section'
}

/**
 * 迁移单个页面。
 *
 * @param route 路由名。
 * @returns 迁移摘要。
 */
async function migrate(route) {
  const sourcePath = join(legacyDir, route, 'index.html')
  if (!existsSync(sourcePath)) throw new Error(`缺少源页面：${sourcePath}`)

  const html = await readFile(sourcePath, 'utf8')
  const sections = extractSections(html)
  if (sections.length === 0) throw new Error(`${route} 未解析到任何 section`)

  const targetDir = join(pagesDir, 'reading', route)
  await rm(targetDir, { recursive: true, force: true })
  await mkdir(join(targetDir, 'sections'), { recursive: true })

  const scopeClass = `legacy-${route}`
  const css = extractScopedCss(html, scopeClass)

  const imports = []
  const entries = []
  const usedNames = new Set()
  const usedComponents = new Set()

  sections.forEach((section, index) => {
    let base = sectionFileOf(section.id)
    while (usedNames.has(base)) base = `${base}_${index}`
    usedNames.add(base)

    const componentName = `S${index + 1}`
    // 两步转换：先换成公共组件（语义化），再转 JSX 语法。
    const jsx = htmlToJsx(toComponents(section.body))
    const localComponents = new Set()
    for (const match of jsx.matchAll(/<([A-Z]\w+)/g)) {
      localComponents.add(match[1])
      usedComponents.add(match[1])
    }

    const localImport = localComponents.size
      ? `import { ${[...localComponents].sort().join(', ')} } from '@/components/content'\n`
      : ''

    const file = `import type { ReactElement } from 'react'
${localImport}
/**
 * ${section.title}
 *
 * @returns 该节正文。
 */
export default function ${componentName}(): ReactElement {
  return (
    <>
${jsx
  .split('\n')
  .map((line) => `      ${line}`)
  .join('\n')}
    </>
  )
}
`
    imports.push(`import ${componentName} from './sections/${base}'`)
    entries.push({
      id: section.id,
      title: section.title,
      icon: section.icon,
      tag: section.tag,
      component: componentName,
    })
    return writeFile(join(targetDir, 'sections', `${base}.tsx`), file)
  })

  if (css) await writeFile(join(targetDir, 'module.css'), css)

  const body = `import { type ReactNode } from 'react'
${imports.join('\n')}
import ReadingPage from '@/components/features/ReadingPage'
import { findModuleByPath } from '@/router/routeRegistry'
import type { SectionContent } from '@/types/content'
${css ? `import './module.css'` : ''}

/** 该模块的元信息，缺失说明路由表与目录不同步。 */
const meta = findModuleByPath('/${route}')

/** 章节内容表：顺序即页面顺序，侧栏锚点由 ReadingPage 自动生成。 */
const sections: SectionContent[] = [
${entries
  .map(
    (entry) => `  {
    id: '${entry.id}',
    title: ${JSON.stringify(entry.title)},
    icon: ${entry.icon ? JSON.stringify(entry.icon) : 'undefined'},
    tag: ${entry.tag ? JSON.stringify(entry.tag) : 'undefined'},
    content: <${entry.component} />,
  },`,
  )
  .join('\n')}
]

/**
 * 模块页面。
 *
 * @returns 阅读页骨架。
 */
export default function Page(): ReactNode {
  if (!meta) return null
  return <ReadingPage meta={meta} sections={sections} scopeClass="${scopeClass}" />
}
`
  await writeFile(join(targetDir, 'index.tsx'), body)

  return { route, sections: sections.length, cssBytes: css.length, components: usedComponents.size }
}

const targets = process.argv.slice(2).filter((item) => !item.startsWith('-'))
const isCli = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]

if (isCli) {
  const routes = (targets.length > 0 ? targets : ALL_ROUTES).filter((route) => !HAND_WRITTEN.has(route))
  const results = []

  for (const route of routes) {
    const result = await migrate(route)
    results.push(result)
    console.log(
      `✓ ${result.route}：${result.sections} 节，${result.components} 类公共组件，样式 ${(result.cssBytes / 1024).toFixed(1)} KB`,
    )
  }

  console.log(`\n完成 ${results.length} 个页面，共 ${results.reduce((sum, item) => sum + item.sections, 0)} 节。`)
}
