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

test('设置入口必须始终可见，不能被长列表挤到末尾', async () => {
  /*
   * 用户反馈：浮动面板里「设置」放在 14 条科目下面，「看都看不到」。
   * 现在设置与「返回总览」并排在面板头部，侧栏底部动作区 sticky 贴底。
   */
  const nav = await readFile(new URL('../src/components/features/FloatingNav.tsx', import.meta.url), 'utf8')
  const headerIndex = nav.indexOf('study-hub-panel-header')
  const settingsIndex = nav.indexOf('study-hub-settings')
  const listIndex = nav.indexOf('study-hub-links')
  assert.ok(headerIndex > 0 && settingsIndex > 0 && listIndex > 0, '浮动面板结构缺失')
  assert.ok(settingsIndex < listIndex, '设置必须在科目列表之前（头部），不能放列表末尾')
  assert.ok(settingsIndex > headerIndex, '设置应在面板头部区域内')

  // 侧栏底部动作区必须 sticky，否则章节多时会滚出可视区。
  const shell = await readFile(new URL('../src/styles/legacy-shell.css', import.meta.url), 'utf8')
  const actions = shell.match(/\.sb-actions\{[^}]*\}/)
  assert.ok(actions, '缺少 .sb-actions 样式')
  assert.match(actions[0], /position:sticky/, '侧栏动作区必须 sticky 固定')
  assert.match(actions[0], /bottom:0/, '侧栏动作区需贴底')
})

test('首页栅格：只有真·练习工具能整行通栏', async () => {
  /*
   * 两个真实事故：
   * 1. 规范词速查被标成 subject-tool，而该类的样式是 grid-column: 1 / -1，
   *    导致它在两列栅格里提前换行、把上一张卡右侧留空，整页看着很乱。
   * 2. 右边框用 nth-child(odd) 判断，但第 1 张卡跨两列，奇偶从此错位，
   *    竖线全跑到左列卡片上。
   */
  const home = await readFile(new URL('../src/pages/home/index.tsx', import.meta.url), 'utf8')
  const start = home.indexOf('ACCENT_CLASS')
  const end = home.indexOf('function SubjectCard')
  assert.ok(start > 0 && end > start, '未找到 ACCENT_CLASS 配置块')
  const map = home.slice(start, end)
  /* 键名只有含连字符时才加引号（'choice-quiz'），标识符写法是裸的（scratchpad）：\n     两种都要能匹配，否则断言会静默取不到行。 */
  const findEntry = (text, key) =>
    text.split('\n').find((item) => item.includes(`'${key}':`) || new RegExp(`\\b${key}:`).test(item))
  for (const tool of ['exam-grid', 'choice-quiz', 'scratchpad']) {
    const line = findEntry(map, tool)
    assert.ok(line, `缺少 ${tool} 的配色配置`)
    assert.ok(line.includes('subject-tool'), `${tool} 应为通栏工具卡`)
  }
  // 笔记类一律不能带 subject-tool（否则通栏）。
  for (const note of ['vocab', 'politics', 'words', 'comprehensive-a']) {
    const line = findEntry(map, note)
    assert.ok(line, `缺少 ${note} 的配色配置`)
    assert.ok(!line.includes('subject-tool'), `${note} 是笔记类，不能标成通栏的 subject-tool`)
  }

  const css = await readFile(new URL('../src/styles/legacy-home.css', import.meta.url), 'utf8')
  assert.ok(
    !/\.subject:nth-child\(odd\)\s*\{/.test(css),
    '右边框不能用 nth-child(odd)：首卡跨两列会让奇偶错位'
  )
  assert.match(css, /\.subject:nth-child\(even\)/, '右边框应使用 nth-child(even)')

  // 每个被引用的配色类都必须真的有定义，否则会静默落回默认色。
  for (const name of ['vocab', 'politics', 'words', 'paper', 'scratch']) {
    assert.match(css, new RegExp(`\\.subject-${name}\\s*\\{`), `缺少 .subject-${name} 的颜色定义`)
  }
})

test('草稿纸笔宽滑块必须有可用宽度', async () => {
  /*
   * 事故：Slider 放在固定 w-[104px] 的 flex 容器里、自身没设 flex，
   * 实测根元素宽度被压成 0 —— 用户看到的是「拖不动、也没进度条」。
   * 现在要求：外层给足宽度，Slider 自身 flex-1 + min-w-0，并显示当前数值。
   */
  const page = await readFile(new URL('../src/pages/tools/scratchpad/index.tsx', import.meta.url), 'utf8')
  // 「笔粗」在文件里出现两次（注释 + JSX），必须定位到 JSX 那一处。
  const anchor = page.indexOf('>笔粗</span>')
  assert.ok(anchor > 0, '未找到笔粗控件的 JSX 标记')
  const block = page.slice(anchor - 400, anchor + 700)
  assert.ok(block.includes('flex-1'), 'Slider 必须 flex-1 撑满可用宽度')
  assert.ok(block.includes('min-w-0'), 'Slider 需 min-w-0，避免被 flex 压成 0 宽')
  assert.ok(/w-\[1[0-9]{2}px\]/.test(block), '滑块容器宽度不能小于 140px')
  assert.ok(block.includes('{prefs.size}'), '应显示当前笔粗数值')
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

test('草稿纸可以粘贴图片，并在图上画图、擦除笔迹而不擦图', async () => {
  /*
   * 用户诉求（原话）：粘贴出来的图片保持原样大小，可以在图上画图，
   * 也可以擦除，清空时把图片一起清空。
   *
   * 实现上有两条不能改的约束：
   * 1. 图片必须是独立一层，夹在纸与笔迹之间 —— 橡皮走 destination-out，
   *    只清笔迹层；如果图与笔迹同层，擦辅助线会把题图擦出洞。
   * 2. 尺寸在粘贴那一刻算好并固定（1:1 原样大小），之后窗口缩放不再重排，
   *    否则用户画在图上辅助线会与图错位。
   */
  const page = await readFile(new URL('../src/pages/tools/scratchpad/index.tsx', import.meta.url), 'utf8')

  // 三层画布：纸 / 图片 / 笔迹
  assert.ok(page.includes('photoRef'), '草稿纸缺少图片层画布引用')
  assert.ok(/ref=\{photoRef\}/.test(page), '图片层 canvas 未挂到 photoRef')
  const photoCanvas = page.indexOf('ref={photoRef}')
  const inkCanvas = page.indexOf('ref={inkRef}')
  assert.ok(photoCanvas > 0 && inkCanvas > photoCanvas, '图片层必须排在笔迹层之前（笔迹盖在图上）')

  // 粘贴入口：paste 事件 + 文件选择 + 拖拽
  assert.ok(/addEventListener\('paste'/.test(page), '草稿纸未监听 paste 事件')
  assert.ok(page.includes('clipboardData'), '粘贴处理未读剪贴板')
  assert.ok(page.includes("data.files"), '粘贴时应读 clipboardData.files')
  assert.ok(page.includes("file.type.startsWith('image/')"), '粘贴时未按 image/* 过滤')
  assert.ok(page.includes('type="file"'), '缺少文件选择入口（手机上没有 Ctrl+V）')
  assert.ok(/addEventListener\('drop'/.test(page), '缺少拖拽图片入口')

  // 原样大小：只有放不下才缩，且保持等比
  assert.ok(/function fitPhoto/.test(page), '缺少图片尺寸计算')
  assert.ok(/Math\.min\(1,/.test(page), '图片尺寸必须「最多 1 倍」，不允许放大')
  assert.ok(page.includes('原样大小'), '粘贴后应提示原样大小')
  assert.ok(page.includes('缩到'), '图片放不下时应提示已缩放')

  // 图片上可画、橡皮不擦图：靠图层顺序 + destination-out 保证
  assert.ok(page.includes('destination-out'), '橡皮必须用 destination-out 只清笔迹层')
  assert.ok(!/globalCompositeOperation\s*=\s*'destination-out'[\s\S]{0,400}redrawPhotos/.test(page), '橡皮不应触发图片层重绘')

  // 撤销 / 清空必须连图片一起处理
  assert.ok(page.includes("type: 'photos'"), '撤销栈缺少图片操作类型')
  assert.ok(/clearAll[\s\S]{0,400}photosRef\.current = \[\]/.test(page), '清空时未同时清掉图片')
  assert.ok(/type: 'clear'[\s\S]{0,80}photos/.test(page), '清空命令必须记住图片以支持撤销')

  // 存档：图片随草稿保存并恢复，且做合法性校验
  assert.ok(/function isPhoto/.test(page), '恢复图片时未校验数据')
  assert.ok(page.includes("item.src.startsWith('data:image/')"), '只允许内联 data: 图片，避免存档注入外链')
  assert.ok(/photos: photoList/.test(page) || /photos: photosRef\.current/.test(page), '存档未包含图片')

  // 导出：三层都要合成，否则导出的图会少一层
  assert.ok(/drawImage\(paper[\s\S]{0,200}drawImage\(photo[\s\S]{0,200}drawImage\(ink/.test(page), '导出时必须按 纸→图→笔迹 合成')

  // 窗口尺寸变化时图片与笔迹必须同吃一个位移，否则辅助线会与图错位
  assert.ok(/const shiftIntoView = useCallback/.test(page), '缺少「图片跑出可视区」的纠正逻辑')
  assert.ok(/stroke\.p\[i\] \+= dx/.test(page) && /stroke\.p\[i \+ 1\] \+= dy/.test(page), '平移图片时必须同步平移笔迹')
})
