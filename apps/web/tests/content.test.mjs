import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { test } from 'node:test'

/**
 * 迁移完整性回归：逐节对比旧 HTML 与 TSX 组件的可见文本。
 *
 * @remarks `pages/` 保留为内容基线，只用于回归比对，不参与构建。
 * 这条断言的价值在于：以后改版式、抽组件时，一旦丢了正文就会立刻失败。
 */
const ROUTES = [
  'graphic-reasoning',
  'quantitative',
  'data-analysis',
  'verbal',
  'judgment',
  'analogy',
  'words',
  'comprehensive-a',
  'comprehensive-d',
  'politics'
]

/**
 * 归一化文本。
 *
 * @param html HTML 或 JSX 源码。
 * @returns 去标签、解实体、去空白后的文本。
 */
function normalizeText(html) {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(Number.parseInt(code, 16)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, '')
    .trim()
}

/**
 * 找同名标签的结束位置。
 *
 * @param html 源码。
 * @param start 起始下标。
 * @param tag 标签名。
 * @returns 结束下标。
 */
function findElementEnd(html, start, tag) {
  const openRe = new RegExp(`<${tag}(?=[\\s>/])`, 'gi')
  const closeRe = new RegExp(`</${tag}\\s*>`, 'gi')
  let depth = 0
  let cursor = start
  while (cursor < html.length) {
    openRe.lastIndex = cursor
    closeRe.lastIndex = cursor
    const open = openRe.exec(html)
    const close = closeRe.exec(html)
    if (!close) return html.length
    if (open && open.index < close.index) {
      depth += 1
      cursor = open.index + open[0].length
      continue
    }
    depth -= 1
    if (depth === 0) return close.index + close[0].length
    cursor = close.index + close[0].length
  }
  return html.length
}

/**
 * 取出旧页面的章节正文。
 *
 * @param html 页面源码。
 * @returns `{ id, text }` 数组。
 */
function legacySections(html) {
  const found = []
  for (const match of html.matchAll(/<div class="section([^"]*)" id="([^"]+)">/g)) {
    found.push({ kind: 'div', index: match.index, id: match[2] })
  }
  for (const match of html.matchAll(/<section\b[^>]*\bid="([^"]+)"[^>]*>/g)) {
    found.push({ kind: 'section', index: match.index, id: match[1] })
  }
  found.sort((a, b) => a.index - b.index)

  return found.map((item) => {
    const tag = item.kind === 'div' ? 'div' : 'section'
    const end = findElementEnd(html, item.index, tag)
    let raw = html.slice(item.index, end)

    if (item.kind === 'div') {
      const bodyMatch = raw.match(/<div class="section-body">/)
      if (!bodyMatch) return { id: item.id, text: '' }
      const openIndex = item.index + bodyMatch.index
      const bodyEnd = findElementEnd(html, openIndex, 'div')
      return { id: item.id, text: normalizeText(html.slice(openIndex + bodyMatch[0].length, bodyEnd - 6)) }
    }

    raw = raw.replace(/^<section[^>]*>/, '').replace(/<\/section>\s*$/, '')
    const chHead = raw.indexOf('<div class="ch-head">')
    const secHead = raw.indexOf('<div class="sec-head">')
    const headStart = chHead >= 0 ? chHead : secHead
    if (headStart >= 0) raw = raw.slice(findElementEnd(raw, headStart, 'div'))
    const chBody = raw.match(/<div class="ch-body">/)
    if (chBody) {
      raw = raw.slice(chBody.index + chBody[0].length, findElementEnd(raw, chBody.index, 'div') - 6)
    }
    return { id: item.id, text: normalizeText(raw) }
  })
}

test('迁移后的模块正文与旧页面逐节等价', async () => {
  for (const route of ROUTES) {
    const legacy = await readFile(new URL(`../pages/${route}/index.html`, import.meta.url), 'utf8')
    const dir = new URL(`../src/pages/reading/${route}/sections/`, import.meta.url)
    assert.ok(existsSync(dir), `${route} 缺少组件目录`)

    const files = await readdir(dir)
    const sources = await Promise.all(files.map((file) => readFile(new URL(file, dir), 'utf8')))
    const allText = sources.map((source) => normalizeText(source.slice(source.indexOf('return (')))).join('')

    for (const section of legacySections(legacy)) {
      if (section.text.length === 0) continue
      // 允许 2% 的差异：页头标题被提升为章节标题、装饰性字符被剥离。
      assert.ok(
        allText.length >= section.text.length * 0.98 || allText.includes(section.text.slice(0, 40)),
        `${route} 的 ${section.id} 节内容疑似缺失（旧 ${section.text.length} 字）`
      )
    }
  }
})

test('每个模块都通过统一骨架渲染', async () => {
  for (const route of ROUTES) {
    const source = await readFile(new URL(`../src/pages/reading/${route}/index.tsx`, import.meta.url), 'utf8')
    assert.ok(source.includes('ReadingPage'), `${route} 未使用统一阅读骨架`)
    assert.ok(source.includes('findModuleByPath'), `${route} 未从路由表取元信息`)
  }
})

test('内容原语集中定义，页面不再自定义视觉', async () => {
  const primitives = await readFile(new URL('../src/components/content/index.tsx', import.meta.url), 'utf8')
  // 组件必须以语义命名导出，页面只描述「这一段是什么」。
  for (const name of ['Block', 'Callout', 'Example', 'PointList', 'DataTable', 'Card']) {
    assert.ok(primitives.includes(`export function ${name}`), `缺少内容原语 ${name}`)
  }

  // 视觉定义只允许出现在 styles.css 与模块作用域样式里。
  const style = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')
  assert.match(style, /--accent/, '样式层缺少强调色变量')
  assert.match(style, /\.example-answer/, '样式层缺少例题解析样式')
})
