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

test('样式作用域正确：旧样式不得污染应用壳', async () => {
  /*
   * 这两条都是真实事故：
   * 1. 旧首页的 `main { width: min(100% - 32px) }` 把应用壳的 <main> 也命中，
   *    与 .container 的 14px 内边距叠加 → 手机端卡片到屏幕变成 30px（应有 14px）。
   * 2. 侧栏的 body 让位无条件生效 → 首页/工具页在桌面被挤出 268px。
   */
  const home = await readFile(new URL('../src/styles/legacy-home.css', import.meta.url), 'utf8')
  assert.ok(
    !/^main\s*\{/m.test(home),
    'legacy-home.css 不得直接写 `main {}`，必须限定为 `.home-main > main`'
  )
  assert.ok(home.includes('.home-main > main'), '首页宽容器应作用于 .home-main > main')

  const shell = await readFile(new URL('../src/styles/legacy-shell.css', import.meta.url), 'utf8')
  assert.ok(
    !/^\.app-shell\s*\{\s*padding-left/m.test(shell),
    '侧栏让位必须带 [data-shell="true"] 条件，否则首页也被让位'
  )
  assert.ok(shell.includes('.app-shell[data-shell="true"]'), '侧栏让位缺少条件选择器')

  // 不走章节骨架的页面（规范词速查 / 答题卡 / 404）依赖 .app-content 提供内边距。
  const style = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')
  assert.ok(/\.app-content\s*\{/.test(style), 'styles.css 缺少 .app-content 容器')
  assert.ok(/\.container\s*\{/.test(style), 'styles.css 缺少 .container 容器')
})

test('首页不再放安装包下载入口', async () => {
  /*
   * 用户明确要求删掉「装到手机上」这一段与下载链接：
   * 内容已改为 App 直接加载线上网页，首页不需要再导流到下载页。
   */
  const home = await readFile(new URL('../src/pages/home/index.tsx', import.meta.url), 'utf8')
  for (const banned of ['app-download', 'study-hub-releases', '前往下载页', 'APK']) {
    assert.ok(!home.includes(banned), `首页不应出现下载相关文案/类名：${banned}`)
  }
})

test('刷新与滚动行为的关键实现存在', async () => {
  // 返回时不恢复上次位置：靠 scrollRestoration = 'manual' + 路由切换回顶。
  const scroll = await readFile(new URL('../src/components/features/ScrollToTop.tsx', import.meta.url), 'utf8')
  assert.match(scroll, /scrollRestoration\s*=\s*'manual'/, '缺少 scrollRestoration=manual，返回会停在半截')
  assert.match(scroll, /scrollTo\(\{\s*top:\s*0/, '路由切换未回到顶部')

  // 主动刷新必须是「重新加载页面 + 重建整个应用」两级，而不是只重载。
  const update = await readFile(new URL('../src/hooks/useUpdate.ts', import.meta.url), 'utf8')
  assert.match(update, /reloadPage/, '缺少「重新加载页面」')
  assert.match(update, /rebuildApp/, '缺少「重建整个应用」')
  assert.match(update, /purge\(\)/, '重建时未清理缓存')
  assert.match(update, /reloadWeb/, '原生壳未清 WebView 缓存')

  // 设置面板必须同时提供这两级入口与外观三档。
  const settings = await readFile(new URL('../src/components/features/SettingsDialog.tsx', import.meta.url), 'utf8')
  for (const text of ['重新加载页面', '刷新整个应用', '跟随系统', '浅色', '深色']) {
    assert.ok(settings.includes(text), `设置面板缺少：${text}`)
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

  /*
   * 视觉分层（本次修复的核心约定）：
   * - src/styles.css 只放「应用壳 + 旧站没有的新增件」，不得重复定义正文样式；
   * - 正文样式在各模块的 module.css（旧页 CSS 原样保留）。
   * 之前 styles.css 也写了一套 .section/.example，把旧观感盖掉了。
   */
  const style = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')
  assert.match(style, /--accent/, '样式层缺少强调色变量')
  for (const legacyClass of ['.example-answer', '.block-title', '.formula-box']) {
    assert.ok(
      !new RegExp(`\\${legacyClass}\\s*\\{`).test(style),
      `styles.css 不应重复定义 ${legacyClass}（正文样式归 module.css）`
    )
  }

  // 各模块必须保留自己的旧样式文件。
  for (const route of ROUTES) {
    const css = await readFile(new URL(`../src/pages/reading/${route}/module.css`, import.meta.url), 'utf8')
    assert.ok(css.length > 500, `${route} 的 module.css 内容异常（可能被抽空）`)
    assert.match(css, new RegExp(`\\.legacy-${route}`), `${route} 的样式缺少作用域前缀`)
  }
})
