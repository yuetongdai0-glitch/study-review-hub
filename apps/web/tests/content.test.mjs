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

test('路由必须是 hash 模式（否则刷新会 ERR_FAILED）', async () => {
  /*
   * 事故复盘：路径式路由下 `/tools/scratchpad` 会被 Pages 301 到带斜杠地址，
   * 而 SW 用「跟随重定向后的响应」回复页面导航时，浏览器（导航的 redirect 模式是
   * manual）会判 ERR_FAILED —— 表现为「第一次能进，点刷新就崩」。
   * 改成 HashRouter 后服务端永远只看到 `/`，从根上不会出现。
   */
  const app = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')
  assert.ok(app.includes('<HashRouter>'), '必须使用 HashRouter')
  assert.ok(!app.includes('BrowserRouter'), '不得再使用 BrowserRouter（刷新会 ERR_FAILED）')

  // 旧路径式书签要被改写成 hash，否则会直接落到首页。
  const legacy = await readFile(new URL('../src/router/legacyPath.ts', import.meta.url), 'utf8')
  assert.match(legacy, /replaceState/, '缺少旧路径改写成 hash 的逻辑')
  assert.match(legacy, /#\$\{candidate\}/, '改写目标应为 `#/<路由>`')

  // 入口必须在渲染前完成改写。
  const main = await readFile(new URL('../src/main.tsx', import.meta.url), 'utf8')
  const callAt = main.indexOf('normalizeLegacyPath()')
  const renderAt = main.indexOf('createRoot')
  assert.ok(callAt > 0, '入口未调用 normalizeLegacyPath')
  assert.ok(callAt < renderAt, '路径改写必须早于 React 渲染，否则会先闪首页')
})

test('启动密码：整站门禁、无提示、配置持久但解锁态只存内存', async () => {
  /*
   * 用户要求的三个硬约束：
   * 1. 设了密码后访问站点必须先输口令，否则看不到任何内容；
   * 2. 锁定页「就一个空白页面加输入框居中，不要给任何提示」；
   * 3. 密码配置要有缓存（刷新不丢），但每次刷新都要重新输入。
   */
  const lock = await readFile(new URL('../src/utils/appLock.ts', import.meta.url), 'utf8')
  assert.ok(lock.includes("'study-hub:lock'"), '密码配置需存在 localStorage 固定键里')
  assert.match(lock, /subtle\.deriveBits|deriveBits\(/, '口令必须走 PBKDF2 派生')
  assert.ok(!/localStorage\.setItem\([^)]*password/i.test(lock), '不得把明文口令写进本地存储')

  // 解锁态只存内存：store 里不能出现任何持久化中间件。
  const store = await readFile(new URL('../src/store/lockStore.ts', import.meta.url), 'utf8')
  assert.ok(!store.includes('persist('), '解锁态不能被持久化（否则刷新就不用再输了）')
  assert.ok(!/sessionStorage\s*\./.test(store), '解锁态不能写 sessionStorage（那也算记住密码）')

  // 门禁必须在 App 根上拦住整个路由，而不是某个页面内部。
  const app = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')
  assert.ok(app.includes('LockScreen'), 'App 根节点必须接上启动密码门禁')
  assert.match(app, /locked\s*\?\s*<LockScreen\s*\/>\s*:\s*router/, '锁定时不得渲染路由（连首页都不能出现）')

  // 锁定页不许有任何文字提示：不能有 placeholder / 标题 / 错误文案。
  // 先剥注释，否则注释里写的「输错只抖一下」会被当成界面文案。
  const screen = (await readFile(new URL('../src/components/features/LockScreen.tsx', import.meta.url), 'utf8'))
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/[^\n]*/g, '')
  assert.ok(!/placeholder=/.test(screen), '锁定页输入框不得有 placeholder')
  assert.ok(!/输错|口令错误|请重新|密码错误/.test(screen), '锁定页不得有错误提示文案')
  assert.ok(screen.includes('type="password"'), '锁定页输入框必须遮蔽字符')

  // 设置面板里要能开启 / 关闭。
  const settings = await readFile(new URL('../src/components/features/SettingsDialog.tsx', import.meta.url), 'utf8')
  for (const text of ['启动密码', '开启启动密码', '关闭启动密码']) {
    assert.ok(settings.includes(text), `设置面板缺少：${text}`)
  }
})

test('hash 模式下页内锚点不能冲掉路由', async () => {
  /*
   * HashRouter 的路由就存在 `#/xxx` 里。正文里大量 `<a href="#b1">`、
   * 侧栏 `href="#s3"`，若走浏览器默认行为会把 hash 改成 `#s3` → 直接 404。
   * 统一用事件委托拦成平滑滚动，只放行 `#/` 开头的路由型 hash。
   */
  const anchors = await readFile(new URL('../src/utils/inPageAnchors.ts', import.meta.url), 'utf8')
  assert.match(anchors, /closest\('a\[href\^="#"\]'\)/, '缺少锚点事件委托')
  assert.match(anchors, /href\.startsWith\('#\/'\)/, '必须放行路由型 hash（#/xxx）')
  assert.match(anchors, /scrollIntoView/, '锚点应改为滚动定位')

  const main = await readFile(new URL('../src/main.tsx', import.meta.url), 'utf8')
  assert.ok(main.includes('installInPageAnchors()'), '入口未安装锚点拦截')
})

test('原生刷新必须保留 hash', async () => {
  // 剥掉 hash 会让 WebView 刷新后回到首页，用户以为「刷新把我踢出去了」。
  const updater = await readFile(new URL('../src/utils/nativeUpdater.ts', import.meta.url), 'utf8')
  const fn = updater.slice(updater.indexOf('export async function reloadWeb'))
  assert.ok(!/split\('#'\)/.test(fn), 'reloadWeb 不能剥掉 hash')
  assert.match(fn, /location\.href/, '应基于完整地址（含 hash）重载')
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

test('草稿纸页不能出现滚动条，浮层不能把文档撑宽', async () => {
  /*
   * 用户反馈（原话）：「哪里来的多余滚动条整页面都在抖动」「鼠标移动到右上就会」。
   *
   * 真实成因链条（两个 bug 叠加）：
   * 1. 右上角「清空」的 Tooltip 默认 top 居中，宽 156px 以按钮中心为轴向右展开，
   *    右边缘越出视口 19px → 文档 scrollWidth 变大 → 出现横向滚动条；
   * 2. 滚动条把 clientWidth 挤小 15px → 布局重排 → antd 重算浮层位置 → 不再越界
   *    → 滚动条消失 → 又越界……每秒反复若干次，整页看起来在抖。
   *
   * 修复两道：
   * - 靠边按钮的 Tooltip 必须朝内侧对齐（不再以中心为轴向外溢出）；
   * - 工具页本身锁死文档滚动（整屏应用，本就不该有页面滚动条）。
   * 断言盯住这两点，避免以后有人把 placement 删掉或改回默认顶部居中。
   */
  const page = await readFile(new URL('../src/pages/tools/scratchpad/index.tsx', import.meta.url), 'utf8')

  // 1. 工具页整屏，不允许文档滚动
  assert.ok(
    /documentElement[\s\S]{0,200}style\.overflow = 'hidden'/.test(page),
    '草稿纸页必须锁死 documentElement 滚动，否则浮层越界会拉出滚动条并引发抖动'
  )
  assert.ok(
    /body\.style\.overflow = 'hidden'/.test(page),
    '草稿纸页必须同时锁住 body 滚动'
  )
  // 卸载时要还原，别把其他页也锁死
  assert.ok(/return \(\) => \{[\s\S]{0,200}root\.style\.overflow = prev/.test(page), '离开页面必须还原 html 的 overflow')

  // 2. 右侧工具按钮的浮层必须右对齐；左侧的必须左对齐
  const tail = page.slice(page.indexOf('ml-auto flex items-center gap-1'))
  const actionTools = [...tail.matchAll(/<Tooltip title=[^\n]*?placement="([^"]+)"/g)].map((m) => m[1])
  assert.ok(actionTools.length >= 5, `右侧动作组应至少有 5 个带 placement 的 Tooltip，实际 ${actionTools.length} 个`)
  assert.ok(
    actionTools.every((p) => p === 'bottomRight'),
    `右侧动作组浮层必须统一 bottomRight，实际：${actionTools.join(',')}`
  )
  const zoomStart = page.indexOf('flex items-center gap-1')
  const zoomBlock = page.slice(zoomStart, zoomStart + 700)
  assert.ok(zoomBlock.includes('placement="bottomLeft"'), '最左侧画笔/橡皮浮层必须 bottomLeft，避免向左越出视口')

  // 3. 越长的提示文案不再挂在贴边按钮上（156px 宽是当初溢出的直接原因）
  assert.ok(!page.includes('清空（连图片一起清）'), '贴边的清空按钮不要挂长文案，说明应放进弹窗')
})

test('草稿纸可以只清笔记、保留题图（重做同一道题）', async () => {
  /*
   * 用户诉求（原话）：「应该有只清除这些笔记的操作，有时候想重新做一下这道题」。
   *
   * 语义上要分清两件事，不能合并成一个按钮：
   * - 粘贴的图片 = 题目本身，是作答的前提；
   * - 笔迹 = 作答痕迹，才是要擦掉的东西。
   * 所以「清除笔记」只清 strokes、photos 原样保留；
   * 「清空」才是全清（这是用户上一轮明确要求的：清空要把图片一起清空）。
   */
  const page = await readFile(new URL('../src/pages/tools/scratchpad/index.tsx', import.meta.url), 'utf8')

  // 1. 有独立的 clearInk，且只动 strokes
  assert.ok(/function clearInk\s*\(/.test(page), '缺少「只清笔记」的实现')
  // 切片必须止于下一个函数，否则会把 clearAll 的 photosRef 赋值也算进来（误判）。
  const clearInkBody = page.slice(
    page.indexOf('function clearInk'),
    page.indexOf('function clearAll')
  )
  assert.ok(/strokesRef\.current = \[\]/.test(clearInkBody), '清除笔记必须把笔迹清空')
  assert.ok(!/photosRef\.current\s*=/.test(clearInkBody), '清除笔记绝不能动图片')
  assert.ok(clearInkBody.includes('redrawInk'), '清除笔记后要重绘笔迹层')

  // 2. 撤销栈要有独立的 ink 命令（不能复用 clear，否则撤销会连图片一起回滚）
  assert.ok(page.includes("type: 'ink'"), '撤销栈缺少只针对笔迹的命令类型')
  assert.ok(/command\.type === 'ink'/.test(page), '撤销/重做未处理 ink 命令')
  assert.ok(/type: 'ink', prev, next: \[\]/.test(page), '清除笔记未写入撤销记录（应当可撤销）')

  // 3. 工具栏有独立按钮，且与「清空」是两个按钮
  assert.ok(page.includes('aria-label="清除笔记（保留图片）"'), '缺少「清除笔记」按钮')
  assert.ok(page.includes('PenOff'), '「清除笔记」应使用 PenOff 图标，与「清空」的垃圾桶区分')
  const toolCount = (page.match(/<Tooltip title=/g) || []).length
  assert.ok(toolCount >= 7, `工具栏按钮数量异常（${toolCount}），清除笔记与清空应各自独立`)

  // 4. 没有笔记时按钮禁用（避免空点）
  assert.ok(/disabled=\{!hasInk\}/.test(page), '无笔记时应禁用「清除笔记」')
  assert.ok(/const hasInk = strokesRef\.current\.length > 0/.test(page), '缺少 hasInk 派生状态')

  // 5. 清空弹窗要按「有没有图」换措辞，并把用户引向正确的按钮
  assert.ok(/photoCount > 0 \? '全部清空（笔记 \+ 图片）？' : '清空笔记？'/.test(page), '清空弹窗标题未区分是否有图片')
  assert.ok(page.includes('请用工具栏的「清除笔记」'), '清空弹窗应提示「只想重做这道题就用清除笔记」')

  // 6. 清除笔记保留图片位置尺寸（看图作答的前提）
  assert.ok(!/clearInk[\s\S]{0,600}shiftIntoView/.test(page), '清除笔记不应触发图片平移')
})

test('草稿纸能开答题卡抽屉，边打草稿边记答案，关掉不销毁草稿', async () => {
  /*
   * 用户诉求（原话）：「希望这个右上角再加一个按钮，点击就是弹窗，
   * 其实就是做选择题，不要销毁哈关闭弹窗了，方便我边打草稿边记录答案，
   * 其实也就是现在的已有功能中的那个选择题」。
   *
   * 三条硬要求：
   * 1. 右上角一个按钮 → 打开答题卡（复用已有的选择题功能，不另造一套）；
   * 2. 关掉不能销毁草稿（草稿在画布上，不在抽屉里，抽屉只卸载自身）；
   * 3. 要能「边打草稿边记答案」→ 不能有遮罩挡住画布，手机端也不能铺满。
   *
   * 关键设计：答题卡主体抽到 components/features/ChoiceSheet，
   * 与独立页共用 `choice-quiz:v1` 存档，两边数据互通。
   */
  const pad = await readFile(new URL('../src/pages/tools/scratchpad/index.tsx', import.meta.url), 'utf8')
  const sheet = await readFile(new URL('../src/components/features/ChoiceSheet.tsx', import.meta.url), 'utf8')
  const quizPage = await readFile(new URL('../src/pages/tools/choice-quiz/index.tsx', import.meta.url), 'utf8')

  // 1. 复用同一份实现与同一份存档
  assert.ok(pad.includes("from '@/components/features/ChoiceSheet'"), '草稿纸应复用 ChoiceSheet 组件，而不是另写一套答题卡')
  assert.ok(quizPage.includes("from '@/components/features/ChoiceSheet'"), '独立答题卡页也应使用同一组件')
  assert.ok(sheet.includes("const STORE_KEY = 'choice-quiz:v1'"), '答题卡存档键必须与独立页一致，否则两边数据不通')
  assert.ok(!pad.includes('choice-quiz:v2'), '不要给草稿纸另开一份存档')
  // 存档键只允许出现在 ChoiceSheet 一处定义
  assert.equal(
    (quizPage + pad).includes("'choice-quiz:v1'"),
    false,
    '存档键只应在 ChoiceSheet 里定义，其他页面不要重复声明'
  )

  // 2. 右上角按钮 + 抽屉
  assert.ok(pad.includes('aria-label="打开选择题答题卡"'), '缺少答题卡按钮')
  assert.ok(pad.includes('<Drawer'), '点击应打开抽屉面板')
  assert.ok(/mask=\{false\}/.test(pad), '抽屉必须去掉遮罩，否则挡住画布就没法边打草稿边记答案')
  assert.ok(/destroyOnHidden/.test(pad), '抽屉关闭应卸载面板，避免开关时状态残留')
  assert.ok(/onClose=\{\(\) => setQuizOpen\(false\)\}/.test(pad), '抽屉必须能正常关闭')

  // 3. 手机端不能铺满，要留出可落笔区
  assert.ok(
    /width="min\(420px, 80vw\)"/.test(pad),
    '手机端抽屉宽度必须留白（80vw），铺满 100vw 会挡住整块画布'
  )

  // 4. 关掉不销毁草稿：抽屉只碰 quizOpen / quizSummary，不碰笔迹与图片
  const drawerBlock = pad.slice(pad.indexOf('<Drawer'), pad.indexOf('</Drawer>'))
  assert.ok(!/strokesRef\.current\s*=/.test(drawerBlock), '抽屉不得改动笔迹数据（关闭会销毁草稿）')
  assert.ok(!/photosRef\.current\s*=/.test(drawerBlock), '抽屉不得改动图片数据')
  assert.ok(!/localStorage\.removeItem/.test(drawerBlock), '抽屉不得清除草稿存档')

  // 5. 摘要角标 + F2 快捷键
  assert.ok(pad.includes('readQuizSummary'), '按钮应显示已答/总题数摘要')
  assert.ok(/event\.key === 'F2'/.test(pad), '缺少 F2 快速开合答题卡')

  // 6. 组件必须保留原有能力（做题 / 交卷 / 对答案 / 成绩）
  for (const [marker, label] of [
    ["phase: 'check'", '交卷进入对答案'],
    ["phase: 'result'", '出成绩'],
    ['正确率', '正确率统计'],
    ['逐题明细', '逐题明细'],
    ['新增一题', '题量不限'],
  ]) {
    assert.ok(sheet.includes(marker), `ChoiceSheet 缺少${label}`)
  }
  assert.ok(/autoResume/.test(sheet) === false, '暂停态不应由参数强制，两处统一沿用存档值')
})

test('答题纸与答题卡并入草稿工作台，首页不再单列', async () => {
  /*
   * 用户诉求（原话）：「所以直接把外面的那个单独的（答题卡）去掉，然后这个草稿纸可以改个好点的名字，
   * 毕竟功能很多；（答题纸）这个也去掉，也是展示到右上角，点击就全屏可以关闭，
   * 然后又打草稿，理解吗，相当于都提供打草稿的过程」。
   *
   * 设计：
   * - 首页只留「草稿工作台」一张卡，答题纸 / 答题卡标 homeHidden（路由保留，老书签可用）；
   * - 两者都从右上角进：答题卡走右侧抽屉（不遮画布），答题纸走全屏浮层（可关闭）；
   * - 三个工具共用各自的既有存档键，数据互通，关掉都不销毁草稿。
   */
  const pad = await readFile(new URL('../src/pages/tools/scratchpad/index.tsx', import.meta.url), 'utf8')
  const registry = await readFile(new URL('../src/router/routeRegistry.ts', import.meta.url), 'utf8')
  const home = await readFile(new URL('../src/pages/home/index.tsx', import.meta.url), 'utf8')
  const exam = await readFile(new URL('../src/components/features/ExamSheet.tsx', import.meta.url), 'utf8')

  // 1. 改名
  assert.ok(registry.includes("title: '草稿工作台'"), '草稿纸应改名为「草稿工作台」')
  assert.ok(!registry.includes("title: '草稿纸'"), '旧名「草稿纸」不应再出现')

  // 2. 首页不再单列两个工具，但路由保留
  for (const name of ['exam-grid', 'choice-quiz']) {
    const at = registry.indexOf(`name: '${name}'`)
    assert.ok(at > 0, `路由表缺少 ${name}`)
    assert.ok(registry.slice(at, at + 420).includes('homeHidden: true'), `${name} 应标 homeHidden`)
  }
  assert.match(home, /\.filter\(\(module\) => !module\.homeHidden\)/, '首页应过滤 homeHidden')
  assert.match(home, /order: index \+ 1/, '首页过滤后必须重编序号（否则 11 → 14 断号）')

  // 3. 草稿工作台右上角两个入口
  assert.ok(pad.includes('aria-label="打开选择题答题卡"'), '缺少答题卡入口')
  assert.ok(pad.includes('aria-label="打开格纸答题纸"'), '缺少答题纸入口')

  /*
   * 4. 答题纸：全屏、可关闭、不碰草稿
   * 已从 antd Drawer 改成自绘全屏层（FullScreenLayer）：Drawer 展开会写
   * transform 把整层内容上移（用户反复反馈「抽屉影响布局」）。
   */
  // 从 `<FullScreenLayer` 起切到闭合标签：title 在开标签里，不能拿 title 当起点。
  const examStart = pad.lastIndexOf('<FullScreenLayer', pad.indexOf('title="格纸答题纸"'))
  const examBlock = pad.slice(examStart, pad.indexOf('</FullScreenLayer>', examStart))
  assert.ok(examBlock.length > 0 && /title="格纸答题纸"/.test(examBlock), '答题纸要用自绘全屏层（Drawer 会写 transform 影响布局）')
  assert.ok(/onClose=\{\(\) => setExamOpen\(false\)\}/.test(examBlock), '答题纸必须能关闭')
  assert.ok(!/strokesRef\.current\s*=/.test(examBlock), '答题纸不得改动笔迹（关闭会销毁草稿）')
  assert.ok(!/photosRef\.current\s*=/.test(examBlock), '答题纸不得改动图片')

  // 5. 答题纸复用同一份实现与存档
  assert.ok(pad.includes("from '@/components/features/ExamSheet'"), '草稿工作台应复用 ExamSheet')
  const examPage = await readFile(new URL('../src/pages/tools/exam-grid/index.tsx', import.meta.url), 'utf8')
  assert.ok(examPage.includes("from '@/components/features/ExamSheet'"), '独立答题纸页也应使用同一组件')
  assert.ok(exam.includes("const DRAFT_KEY = 'exam-grid:v2'"), '答题纸存档键必须保持 exam-grid:v2（数据互通）')

  // 6. 格纸列宽必须按纸张内容区算，否则窄屏会裁掉右侧
  assert.ok(exam.includes('paperRef'), '答题纸需要纸张容器 ref')
  assert.ok(
    /paper\.clientWidth[\s\S]{0,160}paddingLeft/.test(exam),
    '列宽必须扣除纸张自身的左右内边距，否则整行会超出纸张、右侧字被裁'
  )
  assert.ok(/wrap\.clientHeight/.test(exam), '行数应基于容器高度（浮层里 window.innerHeight 不等于可用高度）')

  // 7. 快捷键 F2 / F3
  assert.ok(/event\.key === 'F2'/.test(pad), '缺少 F2 开合答题卡')
  assert.ok(/event\.key === 'F3'/.test(pad), '缺少 F3 开合答题纸')
})

test('答题纸能点格定位、光标可见、纸张封边；答题卡点周边可关闭', async () => {
  /*
   * 用户三条反馈（原话）：
   * 1. 「光标怎么都看不到呢」
   * 2. 「最外层也应该封边啊 也没办法选择格子！！」
   * 3. 「弹窗出来了 点击周边也应该关闭撒」
   *
   * 成因（都实测过）：
   * - 透明 textarea 用 inset-0 铺满整块纸且可点，把所有 pointerdown 吃掉，
   *   格子的 onPointerDown 永不触发 → 光标永远停在 0,0，且那个框还是 absolute 未定位的静态位置，
   *   于是被画到网格下方、看着像跑出纸外；
   * - 行数只扣 12px，没算外层 py 与纸张 padding/border，多算一行 → 纸比可视区高，
   *   底边框被推到折叠线以下 → 看起来「没封边」。
   *
   * 修复要点如下，任何一条被改回去都会复发。
   */
  const exam = await readFile(new URL('../src/components/features/ExamSheet.tsx', import.meta.url), 'utf8')
  const pad = await readFile(new URL('../src/pages/tools/scratchpad/index.tsx', import.meta.url), 'utf8')

  // 1. 输入层必须让开指针，否则吞掉所有点击
  assert.ok(
    /pointerEvents: 'none'/.test(exam),
    '透明 textarea 必须 pointerEvents:none，否则会吞掉所有点击、点格子永远没反应'
  )
  assert.ok(
    !/className="absolute inset-0 h-full w-full resize-none border-0 bg-transparent p-0 text-transparent caret-transparent outline-none"[\s\S]{0,80}onPointerDown/.test(exam),
    '输入层不应自己处理指针'
  )

  // 2. 光标框必须显式定位到左上角，否则 absolute 会落在静态位置（网格下方）
  assert.ok(
    /absolute left-0 top-0[^"]*border-2 border-brand/.test(exam),
    '光标框必须 left-0 top-0，否则会被画到网格下方、看起来像跑出纸外'
  )
  assert.ok(/bg-brand\/15/.test(exam), '光标框应有半透明底色，浅色格纸上才看得见')

  // 3. 行数必须把外层与纸张的内边距/边框都扣掉，四条边才在可视区内（封边）
  assert.ok(
    /parseFloat\(wrapStyle\.paddingTop/.test(exam) && /parseFloat\(paperStyle\.borderBottomWidth/.test(exam),
    '行数计算必须扣除外层 padding 与纸张 padding/border，否则纸会超出可视区、底边看不见'
  )

  // 4. 点周边关闭：不能靠 mask（会挡住画布），要用「按下→抬起几乎无位移」判定
  assert.ok(/from\.inside/.test(pad) && /moved > 6/.test(pad), '点周边关闭需要区分「点击」与「画一笔」')
  assert.ok(
    /if \(moved > 6 \|\| elapsed > 500\) return/.test(pad),
    '画草稿（有位移/长按）时不能关闭抽屉，否则边打草稿边记答案就失效了'
  )
  assert.ok(/closest\('\.ant-drawer'\)/.test(pad), '点在抽屉内部不应关闭')
  assert.ok(/aria-label="打开选择题答题卡"/.test(pad), '开合按钮本身要排除，避免关了又开')

  // 5. 答题卡仍不能加 mask（加了就没法边画边记）
  const quizDrawer = pad.slice(pad.indexOf('title="选择题答题卡"'), pad.indexOf('</Drawer>', pad.indexOf('title="选择题答题卡"')))
  assert.ok(/mask=\{false\}/.test(quizDrawer), '答题卡抽屉不能加 mask（会挡住画布）')
})

test('格纸：方向键按网格走、拼音组合期间不上屏、外框闭合', async () => {
  /*
   * 用户三条反馈（原话）：「键盘的上下左右也应该能控制光标」
   * 「在打拼音阶段最好不写上去」「最外层的线呢」。
   *
   * 三个真 bug：
   * 1. 方向键交给原生 textarea 处理 → 换行按像素宽度算，与 cols 列网格无关：
   *    实测 → 原地不动、↓ 不换行、↑ 直接跳到 0；
   * 2. 拼音组合期间 onChange 把 `nihao` 当成 5 个字写进格子（实测字数 0 → 5）；
   * 3. 格子只画 border-b + border-r，第一行没有上边、第一列没有左边，
   *    纸张边框又只有 1px 浅灰 → 看起来「最外层没有线」。
   */
  const exam = await readFile(new URL('../src/components/features/ExamSheet.tsx', import.meta.url), 'utf8')

  // 1. 方向键 / Home / End 自己接管，按 cols 计算行列
  assert.ok(/function moveCaret\s*\(key: string\)/.test(exam), '方向键必须自己实现 moveCaret（原生按像素换行，与网格不符）')
  for (const key of ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End']) {
    assert.ok(exam.includes(`event.key === '${key}'`), `缺少 ${key} 的接管`)
  }
  assert.ok(/next = pos - cols/.test(exam) && /next = pos \+ cols/.test(exam), '上下键必须按列数移动（±cols），不是 ±1')
  assert.ok(/next = Math\.max\(0, Math\.min\(limit, next\)\)/.test(exam), '方向键必须夹在合法范围内，避免越界')
  // 首行按 ↑ / 末行按 ↓ 必须原地不动；clamp 到 0 会「跳到第一格」，是用户报过的观感问题
  assert.ok(
    /if \(pos - cols < 0\) return true/.test(exam),
    '第一行按 ↑ 必须原地不动（直接 clamp 会跳到第一格）'
  )
  assert.ok(
    /if \(pos \+ cols > limit\) return true/.test(exam),
    '末行按 ↓ 必须原地不动'
  )
  // 只允许一个光标：选区一律折叠，且隐藏输入层的 ::selection 涂透明
  assert.ok(/function collapseSelection/.test(exam), '需要 collapseSelection，否则残留选区会显示成「第二个光标」')
  assert.ok(/if \(editor\.selectionStart !== editor\.selectionEnd\)/.test(exam), 'collapseSelection 应只在有选区时折叠')
  assert.ok(/data-exam-editor="true"/.test(exam), '隐藏输入层需要标记，供 ::selection 规则命中')

  // 2. 拼音组合期间不上屏
  assert.ok(/composingRef/.test(exam), '缺少输入法组合状态标记')
  assert.ok(/onCompositionStart=/.test(exam) && /onCompositionEnd=/.test(exam), '必须监听 compositionstart/end')
  const changeBlock = exam.slice(exam.indexOf('onChange={(event) => {'), exam.indexOf('onChange={(event) => {') + 400)
  assert.ok(/composingRef\.current\)\s*return/.test(changeBlock), 'onChange 在组合期间必须直接返回，否则拼音会被当成正文')
  const keyBlock = exam.slice(exam.indexOf('onKeyDown={(event) => {'), exam.indexOf('onKeyDown={(event) => {') + 300)
  assert.ok(/if \(composingRef\.current\) return/.test(keyBlock), '输入法选词时方向键要归输入法，不能抢')

  // 3. 外框闭合：第一行补上边、第一列补左边，纸张边框加粗
  assert.ok(/firstRow \? 'border-t-\[1\.5px\]'/.test(exam), '第一行格子必须补上边框，否则格子区顶部没有线')
  assert.ok(/firstCol \? 'border-l-\[1\.5px\]'/.test(exam), '第一列格子必须补左边框，否则格子区左侧没有线')
  assert.ok(/const firstRow = index < cols/.test(exam) && /const firstCol = index % cols === 0/.test(exam), '首行/首列判定缺失')
  assert.ok(/border-2 border-\[#aeb6c4\]/.test(exam), '纸张边框应加粗并加深，否则「最外层」看不出封边')
})

test('格纸隐藏输入层的选区必须透明（否则像多了个第二光标）', async () => {
  /*
   * 用户反馈：「我按下键怎么跑到左下角了」「我按上键盘跑到上面第一个了」。
   * 其中一半原因就是那个红框——它不是一个独立的光标元素，
   * 而是隐藏 textarea 里的**选区**被系统强调色涂出来的一块（macOS 强调色偏红时最明显），
   * 尺寸恰好是一个格子，位置却跟着原生 textarea 的像素换行走（按 ↓ 到文本末尾、按 ↑ 到 0）。
   *
   * 修复：格纸只做单点插入，选区没有意义 —— 一是统一折叠选区，
   * 二是把 `::selection` 涂透明，杜绝任何「第二个光标」的视觉。
   */
  const style = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')
  assert.match(
    style,
    /\[data-exam-editor='true'\]::selection\s*\{[^}]*background:\s*transparent/,
    '隐藏输入层的 ::selection 必须涂透明，否则选区会被系统强调色画成一个假光标'
  )
  assert.match(
    style,
    /\[data-exam-editor='true'\]::-moz-selection\s*\{[^}]*background:\s*transparent/,
    'Firefox 需要 ::-moz-selection'
  )
})

test('材料：只存原始文件、按安全区懒渲染、DOCX/PPT 走矢量', async () => {
  /*
   * 用户诉求（原话）：「应该还是可视范围内加安全区这样加载哦，不然一次性加载几百兆
   * 还是太离谱了，而且尽量不转成图片，而是预览啊，然后可做草稿标注」。
   *
   * 上一版把每页都渲染成位图存进 IndexedDB，两个后果都踩到了：
   * 4 页 PDF 就把页面跑到 OOM（浏览器进程被系统杀掉）；而且位图不能选中、放大就糊。
   *
   * 现在三条硬约束，任何一条被改回去都会复发：
   * 1. 导入只存原始 Blob，不存逐页位图（体积 ≈ 源文件）；
   * 2. 渲染按「视口 + 上下各一屏安全区」决定，离开安全区立即释放；
   * 3. DOCX / PPTX 用真实 DOM 文本（矢量、可选中），只有 PDF 需要位图。
   */
  const db = await readFile(new URL('../src/features/materials/db.ts', import.meta.url), 'utf8')
  const parse = await readFile(new URL('../src/features/materials/parse.ts', import.meta.url), 'utf8')
  /*
   * 渲染逻辑已抽到 MaterialPane（以便双栏并排时左右两栏各一个实例）。
   * 断言要跟着走，否则测的是已经不存在的实现。
   */
  const pane = await readFile(new URL('../src/features/materials/MaterialPane.tsx', import.meta.url), 'utf8')
  const render = await readFile(new URL('../src/features/materials/PageRender.tsx', import.meta.url), 'utf8')

  // 1. 存储层：只存原件
  assert.ok(/file\?: Blob/.test(db), '材料清单必须保存原始文件 Blob')
  assert.ok(/DB_VERSION = 3/.test(db), '存储结构应升级到 v3（删除逐页位图表 + 增加 folders）')
  assert.ok(
    /deleteObjectStore\('pages'\)/.test(db),
    '升级时必须删掉 v1 的逐页位图表，否则旧数据仍占空间'
  )
  assert.ok(!/putPage|getPage|MaterialPage/.test(db), '不应再有「逐页内容」的读写接口')
  for (const fn of ['openPdfDocument', 'closePdfDocument']) {
    assert.ok(parse.includes(fn), `缺少 ${fn}：PDF 必须按需打开并显式关闭，不然 worker 里那份文件一直驻留`)
  }

  // 2. 解析层：不产出位图
  assert.ok(!/canvasToBlob|toBlob/.test(parse), '解析阶段不应把页面转成位图（这正是体积爆炸的来源）')
  assert.ok(/parsePdfMeta/.test(parse), 'PDF 只解析元数据，页面交给渲染层按需画')
  assert.ok(/docxHtml/.test(parse), 'DOCX 必须以 HTML（矢量）保存')
  assert.ok(/pptSlides/.test(parse), 'PPTX 必须保存文字块（矢量）')
  assert.ok(
    /readPlaceholderGeometry/.test(parse) && /slideLayouts|slideMasters/.test(parse),
    'PPT 占位符坐标要继承 layout/master，否则所有文本框坐标都是 0、叠在左上角'
  )

  // 3. 渲染层：安全区 + 释放
  assert.ok(/const SAFE_PAGES = 1/.test(pane), '必须有安全区常量（视口上下各一屏）')
  assert.ok(/setRange/.test(pane), '需要按滚动位置算出安全区范围')
  assert.ok(/pruneOutside/.test(pane), '离开安全区的页必须释放，否则等于全量加载')
  assert.ok(/URL\.revokeObjectURL/.test(pane), '位图 objectURL 必须回收，否则滚动几十页就吃满内存')
  assert.ok(/behavior: 'instant'/.test(pane), '恢复滚动位置必须 instant（用户要求「不要过渡效果，直接定位」）')
  assert.ok(/getScrollPage/.test(pane) && /setScrollPage/.test(pane), '要记录并恢复上次滚动到的页')

  // 4. DOCX / PPT 必须是 DOM，不是 img
  assert.ok(/docx-viewport/.test(pane), 'DOCX 要用 DOM 排版（可选中、放大不糊）')
  assert.ok(/PptPage/.test(render), 'PPT 要用矢量文字块渲染')
  const pptBlock = render.slice(render.indexOf('export function PptPage'), render.indexOf('export const DOCX_PAGE_CSS'))
  assert.ok(!/<img/.test(pptBlock), 'PPT 预览不能用图片')
})

test('材料：缩放不错位、一键清除笔记、材料内做题不跳走', async () => {
  /*
   * 用户三条反馈：
   * 1.「也需要提供一键清除笔记的功能」
   * 2.「最好还能提供放大缩小的功能」
   * 3.「然后大刷不要回到草稿纸界面，包括选择题、网格题打开的时候相当于需要做一下缓存」
   *
   * 第 3 条最容易被做错：早了把答题卡/答题纸挂到草稿工作台那一层，
   * 从材料里点开就会把材料卸载、回到草稿纸，用户正看的页也丢了。
   */
  const view = await readFile(new URL('../src/features/materials/MaterialView.tsx', import.meta.url), 'utf8')
  const pane = await readFile(new URL('../src/features/materials/MaterialPane.tsx', import.meta.url), 'utf8')
  const db = await readFile(new URL('../src/features/materials/db.ts', import.meta.url), 'utf8')
  const pad = await readFile(new URL('../src/pages/tools/scratchpad/index.tsx', import.meta.url), 'utf8')

  // 1. 一键清除：库层 + 界面层
  assert.ok(/export async function clearAllNotes/.test(db), '缺少 clearAllNotes：整份材料的笔记要能一次删掉')
  assert.ok(/一键清除这份材料的全部笔记/.test(view), '缺少一键清除入口')
  assert.ok(
    /材料文件不会删除，只清手写笔记/.test(view),
    '确认框必须说清「只清笔记、不删材料」，否则用户不敢点'
  )

  // 2. 缩放：笔迹坐标必须与缩放解耦（结构在 MaterialPane）
  assert.ok(/const ZOOM_MIN = 0\.6/.test(view) && /const ZOOM_MAX = 3/.test(view), '缩放范围缺失')
  assert.ok(/className="page-slot/.test(pane) && /className="page-sheet/.test(pane), '缩放需要「外层占位 + 内层 transform」两层结构')
  assert.ok(
    /transform: `scale\(\$\{zoom\}\)`/.test(pane),
    '内层用 transform 缩放（改宽高会让 canvas 内部坐标系变化，笔迹就错位了）'
  )
  assert.ok(
    /data-page=\{index\}[\s\S]{0,80}className="page-slot/.test(pane),
    'data-page 必须挂在外层占位槽上，安全区/翻页计算才对'
  )
  const canvasBlock = pane.slice(pane.indexOf('aria-label={`第 ${index + 1} 页批注画布`}') - 900, pane.indexOf('aria-label={`第 ${index + 1} 页批注画布`}'))
  assert.ok(/clientWidth \* dpr/.test(canvasBlock), 'canvas 尺寸应取「基准尺寸 × dpr」，不能把 zoom 乘进去')

  // 3. 材料内做题：浮层必须挂在材料视图里，而不是草稿工作台
  assert.ok(/const \[quizOpen, setQuizOpen\]/.test(view), '材料视图内要有自己的答题卡开关')
  assert.ok(/const \[examOpen, setExamOpen\]/.test(view), '材料视图内要有自己的答题纸开关')
  assert.ok(
    /aria-label="在材料里打开选择题答题卡"/.test(view) && /aria-label="在材料里打开格纸答题纸"/.test(view),
    '材料工具栏要提供答题卡/答题纸入口'
  )
  const sheets = view.slice(view.indexOf('选择题答题卡'))
  assert.ok(/<ChoiceSheet compact \/>/.test(sheets), '材料内的答题卡要复用 ChoiceSheet（共享 choice-quiz:v1 存档）')
  assert.ok(/<ExamSheet \/>/.test(sheets), '材料内的答题纸要复用 ExamSheet（共享 exam-grid:v2 存档）')

  /*
   * 4. **材料层与内部面板全部不用 antd Drawer**。
   * Drawer 展开时会写 `transform: translateY(-180px)`，整层内容被上移 ——
   * 这就是「打开答题卡，左边正文滚上去了」的根因。
   */
  assert.ok(
    /<FullScreenLayer[\s\S]{0,900}?title="材料 · 写笔记"/.test(pad),
    '材料层要用自绘全屏层：antd Drawer 会写 transform 导致内容上移'
  )
  assert.ok(!/<Drawer[\s\S]{0,400}title="材料 · 写笔记"/.test(pad), '材料层不能再退回 antd Drawer')
  assert.ok(/inset-y-0 right-0/.test(view), '材料内的答题卡/选材料面板要用 absolute 固定面板，不参与布局')
  assert.ok(!/<Drawer[\s\S]{0,200}title="选择题答题卡"/.test(view), '材料内答题卡不能再用 Drawer（会推走上层内容）')
})

test('材料：缩放坐标换算、缩放保住宿主位置、Ctrl+Z 撤销', async () => {
  /*
   * 用户反馈：「缩放后笔记位置偏移并且 ctrl+z 没用」「而且缩放后 位置变了」。
   *
   * 两个都是真 bug，且都能被这两条断言挡住：
   * 1. `getBoundingClientRect()` 返回的是 **transform 缩放后**的尺寸，
   *    直接 `clientX - rect.left` 得到屏幕像素，被当成 canvas 基准像素 →
   *    放大 140% 时坐标整体放大 1.4 倍，笔迹偏向右下。
   * 2. 缩放只改 zoom 不改 scrollTop：页高按比例变化，同一个 scrollTop
   *    对应了不同内容，正在看的那页就跑出视口。
   */
  const view = await readFile(new URL('../src/features/materials/MaterialView.tsx', import.meta.url), 'utf8')
  const pane = await readFile(new URL('../src/features/materials/MaterialPane.tsx', import.meta.url), 'utf8')
  const render = await readFile(new URL('../src/features/materials/PageRender.tsx', import.meta.url), 'utf8')

  // 1. 坐标必须按 rect.width / clientWidth 还原（工具已抽到 PageRender）
  assert.ok(/export function toBasePoint/.test(render), '必须有 toBasePoint：屏幕坐标要换算回纸张基准坐标')
  assert.ok(
    /rect\.width \/ canvas\.clientWidth/.test(render),
    '换算比例必须取 rect.width / clientWidth（clientWidth 不受 transform 影响）'
  )
  assert.ok(
    /\(event\.clientX - rect\.left\) \/ \(scale \|\| 1\)/.test(render),
    '横坐标必须除以缩放比例，否则放大后笔迹偏移'
  )
  // 落笔与拖动都要用换算函数，不能留着裸 clientX - rect.left
  assert.ok(!/p: \[event\.clientX - rect\.left/.test(pane), '落笔点不能用裸屏幕坐标')
  assert.ok(!/const x = item\.clientX - rect\.left/.test(pane), '拖动采样点不能用裸屏幕坐标')
  assert.ok(/toBasePoint\(event, canvas\)/.test(pane), '落笔必须走 toBasePoint')

  // 笔宽也要按缩放折算，否则放大后屏幕上笔画越来越粗
  assert.ok(
    /w: \(tool === 'eraser' \? Math\.max\(16, size \* 4\) : size\) \/ \(zoom \|\| 1\)/.test(pane),
    '笔宽必须除以 zoom：存的是屏幕粗细就会随缩放变化'
  )

  /*
   * 2. 缩放锚点
   * 重构后缩放是「改变 pane 的 zoom prop」→ 由 CSS transform 完成，
   * 不再在 View 里手算 scrollTop；位置保持改由 `writePane` 记 ratio +
   * Pane 的 tryRestore 还原。这里改测「有没有把 ratio 记进会话」。
   */
  assert.ok(/setZoomOf/.test(view), '缩放要集中到 setZoomOf，避免两栏各写一份')
  assert.ok(/writePane\(side, \{ zoom/.test(view), '缩放必须写进该栏会话，否则刷新后被重置')
  assert.ok(
    /node\.offsetHeight \* anchor\.ratio|el\.offsetHeight \* own\.ratio/.test(pane),
    '恢复时要按「新页高 × 页内比例」定位（纯乘 scrollTop 会有累积误差）'
  )
  assert.ok(
    /data-page=\{index\}[\s\S]{0,80}className="page-slot/.test(pane),
    'data-page 必须挂外层占位槽：锚点按 offsetHeight 算，挂被缩放的 sheet 上会算错'
  )

  // 3. Ctrl+Z / Ctrl+Shift+Z（双栏时按激活栏分派）
  assert.ok(/document\.addEventListener\('keydown', onKey\)/.test(view), '撤销快捷键要挂在 document 上（canvas 拿不到焦点）')
  assert.ok(/const isUndo = key === 'z' && !event\.shiftKey/.test(view), '缺少 Ctrl+Z 撤销')
  assert.ok(/const isRedo = \(key === 'z' && event\.shiftKey\) \|\| key === 'y'/.test(view), '缺少 Ctrl+Shift+Z / Ctrl+Y 重做')
  assert.ok(/actionsRef\.current\[activeSide\]/.test(view), '快捷键必须作用在「激活栏」，双栏时不能两栏一起撤')
  for (const tag of ['textarea', 'input']) {
    assert.ok(
      new RegExp(`tag === '${tag}'`).test(view),
      `在 ${tag} 里按 Ctrl+Z 要放行给浏览器，不能抢用户输入框的撤销`
    )
  }
})

test('材料：刷新后仍在原页（会话持久化缩放/笔设置/页码）', async () => {
  /*
   * 用户反馈：「刷新过后 应该还是这个页面 不应该关闭回到了草稿纸」
   * 「包括笔记和这些缩放配置也需要缓存」。
   *
   * 两个容易漏的点，都会导致「刷新后不是原来那个页面」：
   * 1. 材料视图的 open 状态只存在内存里 → 刷新后默认 false，退回草稿纸；
   * 2. 「关闭」按钮直接调 onClose，不经过 Drawer 的 onClose →
   *    写完 open:false 的那处逻辑被绕开，关掉之后刷新又被材料顶起来。
   */
  const pad = await readFile(new URL('../src/pages/tools/scratchpad/index.tsx', import.meta.url), 'utf8')
  const view = await readFile(new URL('../src/features/materials/MaterialView.tsx', import.meta.url), 'utf8')
  const pane = await readFile(new URL('../src/features/materials/MaterialPane.tsx', import.meta.url), 'utf8')
  const session = await readFile(new URL('../src/features/materials/session.ts', import.meta.url), 'utf8')

  // 1. 会话模块（双栏后升级为 left/right 两栏）
  assert.ok(/export function readSession/.test(session), '需要 readSession')
  assert.ok(/export function writeSession/.test(session), '需要 writeSession')
  assert.ok(/export function writePane/.test(session), '需要 writePane：只改某一栏，不能整体覆盖另一栏')
  assert.ok(
    /const next: MaterialSession = \{[\s\S]{0,200}?\.\.\.patch/.test(session),
    'writeSession 必须做合并：整体覆盖会把别处刚写的字段冲掉'
  )
  assert.ok(
    /left: patch\.left \? \{ \.\.\.current\.left, \.\.\.patch\.left \} : current\.left/.test(session),
    '栏状态要浅合并到栏：只改 zoom 不能把 id 冲掉'
  )
  assert.ok(/legacyId/.test(session), '要兼容旧版单栏存档，否则升级后用户「上次看到哪」全丢')
  assert.ok(codesSafeJson(session), '读会话必须 try/catch，坏存档不能让整个界面打不开')

  // 2. open 状态初值同步读会话（不能等 useEffect，否则先闪一帧草稿纸）
  assert.ok(
    /useState\(\(\) => readSession\(\)\.open\)/.test(pad),
    'materialOpen 初值必须同步读会话，否则刷新先渲染草稿纸再跳'
  )
  /*
   * 材料层用自绘全屏层：antd Drawer 的 transform 会把内容顶上去（用户反复反馈过）。
   * 注意 `<FullScreenLayer` 与 `title=` 之间夹着 `open`/`extra`/`onClose` 等多行属性，
   * 用较宽的窗口匹配，避免因为新增属性就让断言失效。
   */
  assert.ok(
    /<FullScreenLayer[\s\S]{0,900}?title="材料 · 写笔记"/.test(pad),
    '材料层必须用 FullScreenLayer（Drawer 会把整层内容上移）'
  )
  // 3. 关闭走统一函数，保证按钮/遮罩/ESC 都会写 open:false
  assert.ok(/const closeMaterial = /.test(pad), '需要统一的 closeMaterial')
  assert.ok(
    /const closeMaterial = \(\) => \{[\s\S]{0,200}?writeSession\(\{ open: false \}\)/.test(pad),
    'closeMaterial 必须写 open:false'
  )
  // MaterialView 的属性可能分多行写，用非贪婪窗口匹配即可。
  assert.ok(
    /<MaterialView[\s\S]{0,200}?onClose=\{closeMaterial\}/.test(pad),
    'MaterialView 的 onClose 必须指向 closeMaterial（点「关闭」按钮走的是这条）'
  )

  // 4. 缩放/笔设置/页码写回会话（zoom 与 page 分栏记录）
  for (const key of ['color', 'size', 'tool']) {
    assert.ok(
      new RegExp(`writeSession\\(\\{[^}]*${key}`).test(view),
      `${key} 必须写回会话，否则刷新后被重置`
    )
  }
  assert.ok(/writePane\(side, \{ zoom/.test(view), '缩放必须按栏写回会话')
  assert.ok(/writePane\(side, \{ page: visible, ratio \}/.test(pane), '页码与页内比例必须按栏写回会话')
  /*
   * 只在「页码变化」时写 ratio 是错的：在同一页里滚动时 ratio 永远不更新，
   * 刷新后会被定位到该页最顶上（用户看到「位置没记住」）。
   */
  assert.ok(
    /lastSessionRef/.test(pane),
    '要有 lastSessionRef 去重，才能做到「每次都写但不每帧都写」'
  )
  // 5. 刷新后自动恢复（两栏各查一次材料是否还存在）
  assert.ok(/const restoredRef = useRef\(false\)/.test(view), '需要「只恢复一次」的保护，避免把用户手动切走的材料又拉回来')
  assert.ok(/getMaterial\(session\.left\.id\)/.test(view) && /getMaterial\(session\.right\.id\)/.test(view), '两栏都要校验材料是否还在')
  // 6. 导入后也要记 id（导入走的是 setLeftId，不经过 openInto）
  assert.ok(
    /writePane\('left', \{ id: material\.id, zoom: 1, page: 0, ratio: 0 \}\)/.test(view),
    '导入完成后必须写入 id：导入走 setLeftId，不写就会刷新掉回列表'
  )
  /*
   * 7. page=0 陷阱：第 1 页的页码就是 0，不能拿 0 当「没有记录」。
   * 早写成 `if (sessionPage > 0) jump(...)`，停在第一页中部时永远不恢复。
   */
  assert.ok(
    /const sessionPage = own\.id === target\.id \? own\.page : -1/.test(pane),
    '要用 -1 表示「无记录」，0 是合法的第一页'
  )
  assert.ok(/if \(sessionPage >= 0\)/.test(pane), '恢复判断必须允许 page=0')
  /*
   * 8. 恢复 effect 不能依赖父组件传进来的回调：
   * 它们每次渲染都是新函数，会让 effect 反复重建、cleanup 把重试定时器清掉。
   */
  assert.ok(
    /const syncRangeRef = useRef\(syncRange\)/.test(pane),
    'syncRange 要收进 ref：它依赖父组件回调，列进依赖会让恢复 effect 反复重建'
  )
})

/**
 * 判断文本里是否出现 try/catch（粗略但够用）。
 *
 * @param text 源码。
 * @returns 是否含 try/catch。
 */
function codesSafeJson(text) {
  return /catch\s*\{/.test(text)
}
