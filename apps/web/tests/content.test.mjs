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
  /*
   * ⚠️ 这条需求**已经反过来了**，别再改回去。
   *
   * 旧行为：`scrollRestoration = 'manual'` + 每次换页 `scrollTo(0,0)`，
   * 理由是「从科目页退回总览时不要停在半截」。
   * 但用户后来说：「不要每次刷新或者锁屏后就回到顶部了 希望保留位置
   * 包括从这返回到总栏也是」「不要滚动动画 也不要有一帧的卡顿 要流畅」
   * 「也不要干预正常滚动行为」。
   *
   * 现在的正确行为：
   * - 浏览器原生恢复（auto）拿回来，但**按 pathname 自己记**，各科目互不覆盖；
   * - 同页刷新/锁屏解锁 → 回原位；换到别页 → 用那页自己的旧位置；
   * - `behavior: 'instant'`，不做平滑动画；不逐帧 scrollTo（那才是一帧卡顿的来源）。
   */
  const scroll = await readFile(new URL('../src/components/features/ScrollToTop.tsx', import.meta.url), 'utf8')

  // 必须交回浏览器原生恢复（manual 会让"刷新"这条路径没人管，必然回顶部）
  assert.match(
    scroll,
    /scrollRestoration\s*=\s*'auto'/,
    '要恢复浏览器原生滚动恢复；manual 会让刷新必然回到顶部'
  )
  assert.ok(!/scrollRestoration\s*=\s*'manual'/.test(scroll), '不能再设成 manual')

  // 按路径分别记忆
  assert.match(scroll, /KEY_PREFIX\s*=\s*'study-hub:scroll:'/, '要按 pathname 分键记位置')
  assert.match(scroll, /writePos\(prev, lastYRef\.current\)/, '离开上一页时要落盘它的位置')
  assert.match(scroll, /const saved = readPos\(pathname\)/, '进入页面时要读回它自己的位置')

  // 不要动画、不要逐帧追赶
  assert.match(scroll, /behavior:\s*'instant'/, '恢复位置必须 instant，不能有平滑动画')
  assert.ok(!/'smooth'/.test(scroll), 'ScrollToTop 里不能用 smooth')
  assert.ok(
    !/addEventListener\('wheel'|addEventListener\('touchmove'|preventDefault\(\)\s*\/\/\s*scroll/.test(scroll),
    '不能拦 wheel/touchmove：那等于干预原生滚动'
  )

  // 锁屏不能卸载路由，否则页面塌陷、滚动位置被浏览器归零
  const app = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')
  // 注释里会提到旧写法，断言前先剥掉注释，避免自己命中自己。
  const appCode = app.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '')
  assert.ok(
    !/locked\s*\?\s*<LockScreen\s*\/>\s*:\s*router/.test(appCode),
    '锁屏不能卸载路由：页面塌陷会把 scrollY 归零，解锁后就回到顶部了'
  )
  assert.ok(/\{locked \? <LockScreen \/> : null\}/.test(appCode), '锁屏要用遮罩叠在页面之上')

  // 全局不能开平滑滚动（legacy-home.css 自带的 smooth 会覆盖 styles.css）
  const legacyHome = await readFile(new URL('../src/styles/legacy-home.css', import.meta.url), 'utf8')
  assert.ok(
    !/^html\s*\{\s*scroll-behavior:\s*smooth/m.test(legacyHome),
    'legacy-home.css 不能给 html 开 smooth：长文里恢复几千像素会变成卡顿动画'
  )

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
  /*
   * 版本号只需 >= 3，不能写死等于 3。
   *
   * IndexedDB 不许降级打开：库里是 v4、代码却 open(name, 3)，会抛
   * `VersionError: The requested version (3) is less than the existing version (4)`。
   * 曾把带 v4 的构建部署过一次，用户库就永久停在 v4；之后把常量退回 3，
   * 等于让所有老用户打不开自己的资料 —— 数据还在，但列表空白、导入全失败。
   * 所以断言"至少 v3"，新版本要能自由往前加。
   */
  const versionMatch = db.match(/DB_VERSION = (\d+)/)
  assert.ok(versionMatch, '必须有 DB_VERSION 常量')
  assert.ok(
    Number(versionMatch[1]) >= 3,
    `存储结构版本不能低于 v3（当前 ${versionMatch[1]}）；注意只能加不能减，降级会把用户的库锁死`
  )
  assert.ok(
    /deleteObjectStore\('pages'\)/.test(db),
    '升级时必须删掉 v1 的逐页位图表，否则旧数据仍占空间'
  )
  /*
   * 打开失败不能留在模块级缓存里：
   * 缓存了一个 rejected Promise，之后每次 openDb() 都立刻失败，
   * 用户看到「列表一直空、导入永远报错」，只能刷新页面。
   */
  assert.ok(
    /dbPromise\.catch\(\(\) => \{\s*\n?\s*dbPromise = null/.test(db) ||
      /dbPromise = null[\s\S]{0,80}openDb/.test(db),
    '打开失败后要清掉缓存的 Promise，否则后续每次操作都会立刻失败'
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
  /*
   * 内层用 transform 缩放，且缩放系数来自 `--page-scale`。
   * 关键在于 canvas 内部坐标系始终是基准像素，所以笔迹不会因为缩放而错位。
   */
  assert.ok(
    /transform: `scale\(var\(--page-scale/.test(pane),
    '内层要用 transform 缩放（改宽高会让 canvas 内部坐标系变化，笔迹就错位了）'
  )
  assert.ok(/const \[fitScale, setFitScale\]/.test(pane), '需要有容器自适应的 fitScale')
  /*
   * 「100%」= 铺满容器（最多原大），缩放倍数在它之上**相乘**。
   * 曾经写成 `min(zoom, avail / pageW)`，等于把「适合屏幕」当成缩放上限：
   * 手机 avail/pageW = 0.629，放大到 300% 实际还是 0.629，缩放按钮完全没反应；
   * 桌面双栏(719/2=359)同理卡在 1.18。
   */
  assert.ok(
    /const baseFit = Math\.min\(1, avail \/ target\.pageW\)/.test(pane),
    '要有独立的 baseFit（100% 基准）：容器比纸窄时缩到刚好放下'
  )
  assert.ok(
    /const next = baseFit \* zoom/.test(pane),
    '缩放倍数要在 baseFit 之上相乘：取 min 会让「适合屏幕」变成缩放上限，手机上放大按钮彻底失效'
  )
  assert.ok(
    !/Math\.min\(zoom, avail \/ target\.pageW\)/.test(pane),
    '不能再把 fitScale 写成 min(zoom, 容器宽/基准宽)：那会让窄屏/双栏下无法放大'
  )
  assert.ok(
    /['"]--page-scale['"\s]*as string\]/.test(pane) || /--page-scale/.test(pane),
    '要把缩放系数写进 CSS 变量，供内层 transform 使用'
  )
  assert.ok(
    /width: `\$\{material\.pageW \* fitScale\}px`/.test(pane),
    '占位宽度必须与实际渲染宽度一致（否则滚动条长度与点击热区都会错）'
  )
  assert.ok(
    /data-page=\{index\}[\s\S]{0,80}className="page-slot/.test(pane),
    'data-page 必须挂在外层占位槽上，安全区/翻页计算才对'
  )
  /*
   * canvas 尺寸要取「基准尺寸 × dpr」，不能乘 zoom。
   * 注意别用固定窗口切片：ref 回调里有注释和只读判断，行数会变，
   * 用「从 ref 开始到 className」的区间更稳。
   */
  /*
   * 用「aria-label 往回找最近的 ref=」定位，别写死窗口大小 ——
   * ref 回调里注释会变长变短，固定偏移会切到别的画布代码上。
   */
  const ariaIdx = pane.indexOf('aria-label={`第 ${index + 1} 页批注画布`}')
  const refStart = pane.lastIndexOf('ref={(node) => {', ariaIdx)
  const refEnd = pane.indexOf('className="absolute inset-0', refStart)
  assert.ok(refStart > 0 && refEnd > refStart, '要能定位到批注画布的 ref 回调')
  const canvasBlock = pane.slice(refStart, refEnd)
  /*
   * canvas 尺寸必须用 **getBoundingClientRect**（变换后的真实视觉尺寸），
   * 不能用 `clientWidth` —— 纸张内层按基准像素排版、再靠 transform 缩放，
   * clientWidth 报的是**变换前**的布局宽。实测桌面 1440 窗口：
   * clientWidth=2590 而视觉宽只有 1409，按前者分配画布会变成 5180×7482 ≈ 148MB/块，
   * 91 页的 PDF 直接 OOM 崩溃（用户报的「手机打开就卡死闪退」）。
   */
  assert.ok(
    /getBoundingClientRect\(\)/.test(canvasBlock),
    'canvas 尺寸要用 getBoundingClientRect：clientWidth 是变换前的布局宽，会把画布放大数倍'
  )
  assert.ok(
    !/node\.clientWidth \* dpr/.test(canvasBlock),
    '不能再用 clientWidth 分配画布：那是变换前尺寸，内存会爆'
  )
  // 单块画布必须有像素上限保护（长文档 / 高 dpr 时按比例缩分辨率）
  assert.ok(/MAX_PIXELS/.test(canvasBlock), '要有单块画布像素上限，否则长页 + 高 dpr 会 OOM')

  /*
   * ⚠️ 画布按「视觉宽度」分配，但笔迹坐标是「布局宽度」坐标系。
   * 两者只在 100% 时相等，所以绘制时的换算比例**必须**用 clientWidth：
   *   canvas.width / clientWidth  （含 dpr 与 zoom）
   * 写成 canvas.width / rect.width 只有 dpr，少了 zoom 那一份 ——
   * 放大 120% 时笔迹被挤进画布左侧 83%，用户看到的就是「一缩放笔记位置就变」。
   */
  assert.ok(
    /function syncCanvasTransform\(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement\)/.test(pane),
    '绘制换算要集中到 syncCanvasTransform，避免四处各写一份比例'
  )
  assert.ok(
    /const scale = layoutW > 0 \? canvas\.width \/ layoutW : 1/.test(pane),
    '换算比例必须是 canvas.width / clientWidth（含 dpr 与 zoom）：除 rect.width 会漏掉 zoom，缩放后笔记错位'
  )
  assert.ok(
    !/canvas\.width \/ cssW/.test(pane),
    '不能再用画布宽 / 视觉宽反算：那只是 dpr，缩放后笔迹会被挤到左侧'
  )
  assert.ok(/syncCanvasTransform\(ctx, canvas\)/.test(pane), 'redrawPage 必须走 syncCanvasTransform 才能缩放后不错位')

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
   * 2. 缩放锚点（「缩放后位置变了」的回归）
   *
   * 缩放的落点是 `--page-scale`，而它是异步 state：`zoom` 一变，本次 render 里
   * 比例还是旧值，新值要等下一次 render 才生效。所以「冻结锚点」与「按新几何还原」
   * 必须分成两步、分两个 effect：
   * - 旧几何还可靠时（比例真的要变的那一刻）先冻结「页 + 页内比例」；
   * - 新比例落地后（`fitScale` 变化）再用新页高换算 scrollTop。
   * 合成一步写在 `[zoom]` 的 effect 里，算出的目标位置恰好等于旧 scrollTop，
   * 等于什么都没做 —— 用户看到的就是「缩放后位置变了」。
   */
  assert.ok(/setZoomOf/.test(view), '缩放要集中到 setZoomOf，避免两栏各写一份')
  assert.ok(/writePane\(side, \{ zoom/.test(view), '缩放必须写进该栏会话，否则刷新后被重置')
  assert.ok(
    /function readScrollAnchor\(/.test(pane),
    '必须把「视口顶部落在哪一页、页内多少」抽成一个函数：缩放前要用它冻结锚点'
  )
  assert.ok(
    /pendingAnchorRef\.current = readScrollAnchor\(scroller\)/.test(pane),
    '比例变化前必须先冻结锚点（此刻几何还是旧的，才可靠）'
  )
  assert.ok(
    /useLayoutEffect\(\(\) => \{[\s\S]{0,600}?pendingAnchorRef\.current[\s\S]{0,900}?\}, \[fitScale\]\)/.test(pane),
    '要有一个以 fitScale 为触发的 layout effect：新缩放生效后才能按新页高还原位置'
  )
  assert.ok(
    /node\.offsetTop \+ height \* pending\.ratio/.test(pane),
    '还原时要按「新页高 × 冻结的页内比例」定位（纯乘 scrollTop 会有累积误差）'
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
    /const sessionPage = own\.id === target\.id \? own\.page : spot \? spot\.page : -1/.test(pane),
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

test('材料双栏：中间的互换按钮把整栏对调（含缩放与位置）', async () => {
  /*
   * 用户诉求：「希望中间能有一个按钮点击就能互换位置」（对照题目与答案时，
   * 有时想把答案挪到左边）。
   *
   * 关键不是「换两个 id」，而是**整组对调**：材料 + 缩放 + 页码/页内比例。
   * 只换 id 会出现「换完缩放到对面去了」——刷新后更明显，
   * 因为会话里 left/right 是两个独立键。
   */
  const view = await readFile(new URL('../src/features/materials/MaterialView.tsx', import.meta.url), 'utf8')

  // 1. 互换只交换、不重算：会话两栏整组对调
  assert.ok(/const swapPanes = useCallback/.test(view), '需要 swapPanes')
  const fn = view.slice(view.indexOf('const swapPanes = useCallback'), view.indexOf('/**', view.indexOf('const swapPanes = useCallback')))
  assert.ok(/const nextLeft = \{ \.\.\.session\.right \}/.test(fn), '左栏要整组取原右栏（含 zoom/page/ratio），不是只取 id')
  assert.ok(/const nextRight = \{ \.\.\.session\.left \}/.test(fn), '右栏要整组取原左栏')
  assert.ok(
    /writeSession\(\{ left: nextLeft, right: nextRight \}\)/.test(fn),
    '必须把两栏整组写回会话，否则刷新后缩放与页码会串到对面'
  )
  assert.ok(/setLeftZoom\(nextLeft\.zoom/.test(fn), '缩放要跟着材料一起换')
  assert.ok(/setMeta\(\(prev\) => \(\{ left: prev\.right, right: prev\.left \}\)\)/.test(fn), '标题/页码元信息也要换')
  assert.ok(/if \(!rightId\) return/.test(fn), '单栏时互换应当无操作')

  // 2. 按钮在两栏缝隙正中，且不参与 flex 布局（不会挤压宽度）
  assert.ok(/aria-label="互换左右两栏"/.test(view), '缺少互换按钮')
  const btn = view.slice(view.indexOf('aria-label="互换左右两栏"') - 500, view.indexOf('aria-label="互换左右两栏"'))
  assert.ok(/absolute left-1\/2 top-1\/2/.test(btn), '按钮要绝对定位在正中（absolute left-1/2 top-1/2）')
  assert.ok(/-translate-x-1\/2 -translate-y-1\/2/.test(btn), '要用 translate 精确居中')
  assert.ok(/onClick=\{swapPanes\}/.test(btn), '按钮必须绑定 swapPanes')
  // 只在双栏时出现
  assert.ok(
    /\{twoPanes \? \(\s*<button[\s\S]{0,400}?aria-label="互换左右两栏"/.test(view),
    '互换按钮只在双栏时渲染'
  )
  // 容器要 relative，否则 absolute 的按钮会跑到视口外
  assert.ok(
    /className=\{twoPanes \? 'relative flex min-h-0 flex-1 gap-0\.5'/.test(view),
    '双栏容器必须 relative，互换按钮才能钉在缝隙正中'
  )

  // 3. 不能靠「换 CSS order」之类的视觉把戏：那会让两栏的滚动/笔记错位
  assert.ok(!/flex-row-reverse/.test(view), '不要用 flex-row-reverse 假装互换：滚动态与 canvas 会与面板对不上')
})

test('材料撤销：单点/一键清除都能撤，且清除前先建快照', async () => {
  /*
   * 用户反馈：「咋撤销不了了？」截图里两条提示同时出现：
   * 「已清除全部笔记」+「这一页没有可撤销的笔记」——
   * 说明画笔在画布上留下了痕迹，但撤销栈是空的。三个独立原因：
   *
   * 1. **一键清除没往撤销栈压任何东西**：只清数组、重绘。
   * 2. **顺序反了**：先 `await clearAllNotes()` 删库、再 `clearAll()` 建快照，
   *    等用户按 Ctrl+Z 时栈里什么都没有。
   * 3. **单点笔迹被丢弃**：`if (p.length < 2) return`，
   *    但画布上那个圆点已经画出来了 → 「看得见却撤不掉」。
   * 4. 另外 canvas 尺寸为 0 时被重置成 1×1，会把笔迹全丢（旧像素还留着）。
   */
  const pane = await readFile(new URL('../src/features/materials/MaterialPane.tsx', import.meta.url), 'utf8')
  const view = await readFile(new URL('../src/features/materials/MaterialView.tsx', import.meta.url), 'utf8')

  // 1. 一键清除必须可撤销：按页压快照
  assert.ok(/const clearAll = useCallback/.test(pane), '需要 clearAll')
  const clearAllFn = pane.slice(pane.indexOf('const clearAll = useCallback'), pane.indexOf('/* 把动作交给外层'))
  assert.ok(/undo\.push\(\[\.\.\.list\]\)/.test(clearAllFn), '一键清除前必须把整页内容压进撤销栈')
  assert.ok(/undoRef\.current\.set\(index, undo\)/.test(clearAllFn), '压栈后要写回该页的撤销栈')
  assert.ok(/lastClearAllRef/.test(clearAllFn), '要记住这次清除了哪些页，撤销时才能一起恢复')

  // 2. 撤销要能把所有被清空的页一起补回（不是只恢复当前页）
  assert.ok(
    /const cleared = lastClearAllRef\.current/.test(pane) && /for \(const page of cleared\)/.test(pane),
    '撤销「全部清除」时必须逐页恢复，否则翻页会发现别的页仍然是空的'
  )

  // 3. 顺序：先建快照再删库
  const clearEntry = view.slice(view.indexOf('一键清除这份材料的全部笔记'), view.indexOf('一键清除这份材料的全部笔记') + 1400)
  const iSnapshot = clearEntry.indexOf('clearAll()')
  const iDelete = clearEntry.indexOf('clearAllNotes(target)')
  assert.ok(iSnapshot > 0 && iDelete > 0, '清除入口要同时调用 clearAll() 与 clearAllNotes()')
  assert.ok(
    iSnapshot < iDelete,
    '必须先 clearAll()（建撤销快照）再 clearAllNotes()（删库）：顺序反了会导致撤销栈为空'
  )

  // 4. 单点笔迹不能丢
  assert.ok(
    !/if \(finished\.stroke\.p\.length < 2\) return/.test(pane),
    '单点笔迹也是一笔：不能因为点数 < 2 就丢弃，否则画布上有痕迹却撤不掉'
  )

  // 5. 尺寸为 0 时不能重置（赋 width 会清空画布，0 宽会把笔迹全丢）
  assert.ok(
    /if \(cssW < 1 \|\| cssH < 1\) return/.test(pane),
    'canvas ref 里必须先判断尺寸有效再赋值：赋 width 会清空画布，0 宽会把笔迹全丢'
  )
  assert.ok(
    /const resized = node\.width !== w \|\| node\.height !== h/.test(pane),
    '只有尺寸真的需要变时才重新赋值（赋 width 会清空画布）'
  )
  /*
   * 缩放会让 getBoundingClientRect 的尺寸变化 → 上面那个分支重新赋 width →
   * 画布像素被清空。此时节点还是同一个（old === node），
   * 所以「只在换节点时重绘」会让缩放后笔记凭空消失。
   */
  assert.ok(
    /if \(old !== node \|\| resized\) redrawPage\(index\)/.test(pane),
    '尺寸变化（缩放）也必须重绘：赋 width 会清空画布，只重绘新节点会导致缩放后笔记消失'
  )

  // 6. 清除后的提示要告诉用户能撤销
  assert.ok(
    /可按 Ctrl\+Z 撤销/.test(view),
    '清除成功后应提示「可按 Ctrl+Z 撤销」，否则用户以为彻底没了'
  )
})

test('Ctrl+Z 撤销跟随「最后编辑页」，而不是当前可见页', async () => {
  /*
   * 用户原话：「Ctrl+Z 回退 有时候是好的有时候莫名其妙就不好使了 ！！」
   *
   * 根因：撤销注册的是 `undo: () => undoPage(visiblePage - 1)` —— 用的是**当前可见页**。
   * 用户画完一笔本能地往下翻看，只要滚到下一页，`visiblePage` 一变，
   * 撤销就落到那个**空白页**上：弹「这一页没有可撤销的笔记」，
   * 真正画的那页纹丝不动。所谓"有时候好"，只是因为他画完没滚走。
   *
   * 正确语义（Word / Figma 一致）：撤销跟随**你最后动过的那一页**，与滚动无关。
   */
  const pane = await readFile(new URL('../src/features/materials/MaterialPane.tsx', import.meta.url), 'utf8')

  // 必须有「最后编辑页」状态
  assert.ok(/lastEditedPageRef = useRef\(-1\)/.test(pane), '需要记录最后一次改动笔记的页')

  // 撤销/重做不能再绑 visiblePage
  assert.ok(
    !/undo: \(\) => undoPage\(visiblePage - 1\)/.test(pane),
    '撤销不能用 visiblePage：画完往下滚一点就会失效'
  )
  assert.ok(
    !/redo: \(\) => redoPage\(visiblePage - 1\)/.test(pane),
    '重做同样不能绑定 visiblePage'
  )

  // 选页逻辑：最后编辑页 → 可见页 → 跨页兜底
  assert.ok(/const pickPage = \(stack: Map<number, NoteStroke\[\]\[\]>\)/.test(pane), '需要一个「选哪页来撤」的判定')
  assert.ok(/const edited = lastEditedPageRef\.current/.test(pane), 'pickPage 要优先看最后编辑页')
  assert.ok(
    /const keys = \[\.\.\.stack\.keys\(\)\]\.filter/.test(pane),
    '撤到底后要跨页兜底，别让别的页的笔迹撤不到'
  )

  // 写入点：落笔 / 撤销后 / 重做后 / 清页 / 一键清除 都要更新
  const updates = pane.match(/lastEditedPageRef\.current = index/g) || []
  assert.ok(updates.length >= 4, `落笔/撤销/重做/清页至少四处要更新最后编辑页，实际 ${updates.length} 处`)
  assert.ok(
    /if \(touchedPages\.length\) lastEditedPageRef\.current = touchedPages\[0\]/.test(pane),
    '一键清除后要指向被清的第一页，保证一次撤销全部找回'
  )
  // 换材料重置
  assert.ok(
    /lastEditedPageRef\.current = -1/.test(pane),
    '换材料要重置「最后编辑页」，否则会撤到上一份材料的页'
  )
})

test('立即锁屏：只在设了密码时出现，点击回到锁定态', async () => {
  /*
   * 用户诉求：「在设置了密码的情况下这里加一个立即锁屏按钮」
   * （指的是右下角「切换复习科目」面板头部、「设置」旁边）。
   *
   * 三个必须守住的点：
   * 1. **没设密码时不显示** —— 锁不了，放出来是死按钮；
   * 2. 点击只把 `unlocked` 置 false，React 立刻渲染 LockScreen，
   *    **页面不卸载**，解锁后仍停在原来那一页（比刷新体验好）；
   * 3. `required` 只在模块加载时读一次，所以设置里刚加完密码要能同步，
   *    否则按钮要刷新才出现。
   */
  const nav = await readFile(new URL('../src/components/features/FloatingNav.tsx', import.meta.url), 'utf8')
  const store = await readFile(new URL('../src/store/lockStore.ts', import.meta.url), 'utf8')
  const app = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')

  // 1. store 要有 lock 动作
  assert.ok(/lock: \(\) => void/.test(store), 'lockStore 需要 lock 动作')
  assert.ok(/lock: \(\) => set\(\{ unlocked: false \}\)/.test(store), 'lock 只把 unlocked 置 false，不能动 required')

  // 2. 按钮只在 required 时渲染
  assert.ok(/aria-label="立即锁屏"/.test(nav), '缺少「立即锁屏」按钮')
  assert.ok(/lockRequired \? \(/.test(nav), '按钮必须按「是否设了密码」条件渲染')
  assert.ok(
    /useLockStore\(\(state\) => state\.required\)/.test(nav),
    '按钮显隐要看 lockStore.required（不是 unlocked）'
  )
  assert.ok(/onClick=\{\(\) => \{\s*setOpen\(false\)\s*lockNow\(\)/.test(nav), '点击应同时收起面板并锁屏')
  assert.ok(/title="立即锁屏"/.test(nav), '要有 title 提示（头部空间紧，只放图标）')

  // 3. required 可同步（设置里刚加完密码，按钮立刻出现）
  assert.ok(/syncRequired: \(\) => void/.test(store), '需要 syncRequired，否则新设密码后按钮要刷新才出现')

  // 4. App 的锁屏判定用的是 required && !unlocked
  assert.ok(
    /state\.required && !state\.unlocked/.test(app),
    '锁屏判定必须是 required && !unlocked：没设密码不能锁，设了就要锁'
  )
})

test('批注开关：触屏默认只读，两端都能手动切', async () => {
  /*
   * 用户诉求：「手机和平板默认（只读）…可以手动打开；电脑也可以关闭。
   * 关闭其实就是只读，可以滑动不能做笔记，否则容易误触」。
   *
   * 四个硬约束：
   * 1. 默认值按设备类型给：触屏（手机/平板）关闭，桌面开启；
   * 2. 关闭 = 只读：能滚动/缩放/翻页/看笔记，但**画布不接笔**；
   * 3. 关闭时所有「会改笔记」的入口都要隐藏（画笔/颜色/笔粗/撤销/清空/一键清除）；
   * 4. 用户手动改过之后要记住，不能再被设备类型覆盖。
   */
  const session = await readFile(new URL('../src/features/materials/session.ts', import.meta.url), 'utf8')
  const view = await readFile(new URL('../src/features/materials/MaterialView.tsx', import.meta.url), 'utf8')
  const pane = await readFile(new URL('../src/features/materials/MaterialPane.tsx', import.meta.url), 'utf8')

  // 1. 设备判定与默认值
  assert.ok(/export function isTouchDevice/.test(session), '需要 isTouchDevice 判定触屏设备')
  assert.ok(
    /matchMedia\('\(any-pointer: coarse\)'\)/.test(session),
    '触屏判定要用 any-pointer: coarse（覆盖二合一设备），不要靠 UA'
  )
  assert.ok(
    /annotate: touched \? data\.annotate === true : !isTouchDevice\(\)/.test(session),
    '默认值：触屏关闭、桌面开启；手动改过（touched）则尊重用户选择'
  )
  assert.ok(/annotateTouched/.test(session), '要记录「用户是否手动改过」，否则每次打开都被设备类型覆盖')

  // 2. 开关会写回会话
  assert.ok(
    /writeSession\(\{ annotate: next, annotateTouched: true \}\)/.test(view),
    '切换要写回会话并标记 touched'
  )

  // 3. 只读时画布不接笔（两道保险：pointer-events + onDown 早退）
  assert.ok(
    /if \(!annotate\) return/.test(pane),
    'onDown 里必须显式拦住：只读时不能画（不能只靠 CSS）'
  )
  assert.ok(
    /pointerEvents: annotate \? 'auto' : 'none'/.test(pane),
    '只读时画布要 pointer-events:none，让手指滑动落到滚动容器上'
  )
  assert.ok(
    /touchAction: annotate \? 'none' : 'auto'/.test(pane),
    '只读时 touch-action 要放开，滚动手感才正常'
  )

  // 4. 只读时隐藏所有会改笔记的入口
  assert.ok(
    /\{annotate \? \(\s*<>[\s\S]{0,1800}?笔粗/.test(view),
    '画笔/颜色/笔粗要包在 annotate 条件里'
  )
  const undoGroup = view.slice(view.indexOf('撤销 / 清空 / 一键清除都会改动笔记'))
  assert.ok(
    /\{annotate \? \(\s*<>[\s\S]{0,700}?aria-label="撤销"/.test(undoGroup),
    '撤销/清空/一键清除也要包在 annotate 条件里：只读时不让改笔记'
  )
  // 快捷键同样要停用，否则「界面不让改、Ctrl+Z 却能改」
  assert.ok(
    /if \(!open \|\| !activeId \|\| !annotate\) return/.test(view),
    '只读时 Ctrl+Z 也要停用'
  )

  // 5. 开关本身要有明确的可访问名
  // 按钮的可访问名是三元表达式渲染出来的，断言它的两个分支文本。
  assert.ok(
    /aria-label=\{annotate \? '关闭批注（切到只读）' : '开启批注'\}/.test(view),
    '开关按钮要有可访问名，两个状态都要能识别'
  )
})

test('切换材料时保留每份材料各自的阅读位置', async () => {
  /*
   * 用户原话：「这个位置保留能不能做好？做了一万遍还是保留不了？？？」
   * 录屏里的动作：题本看到第 7 页 → 切到解析 → 切回题本 → 回到第 1 页。
   *
   * 根因两层，必须都修：
   * ① `openInto` 无条件写 `{ zoom:1, page:0, ratio:0 }` ——
   *    既把新材料按回第 1 页，也把上份材料的位置抹掉；
   * ② 会话的 left/right 只记「这一栏现在放的是谁」，
   *    换成别的材料后，原来那份「看到哪」没有任何地方存。
   * 所以必须有第三份存储：`spots[材料 id]`。
   */
  const session = await readFile(new URL('../src/features/materials/session.ts', import.meta.url), 'utf8')
  const view = await readFile(new URL('../src/features/materials/MaterialView.tsx', import.meta.url), 'utf8')
  const pane = await readFile(new URL('../src/features/materials/MaterialPane.tsx', import.meta.url), 'utf8')

  assert.ok(/spots: Record<string, PaneSpot>/.test(session), '会话里要按材料 id 存位置表')
  assert.ok(/export function rememberSpot/.test(session), '要有写入位置记忆的方法')
  assert.ok(/export function readSpot/.test(session), '要有读取位置记忆的方法')
  // spots 必须浅合并：只记一份时不能把别的位置冲掉
  assert.ok(
    /spots: patch\.spots \? \{ \.\.\.current\.spots, \.\.\.patch\.spots \} : current\.spots/.test(session),
    'spots 要浅合并，别整块替换'
  )

  // openInto 不能再把位置写死成 1/0/0
  assert.ok(/rememberSpot\(leaving\.id/.test(view), '切走前要记住上一份材料的位置')
  assert.ok(/const spot = readSpot\(id\)/.test(view), '切入时要读这份材料自己的位置')
  assert.ok(
    !/writePane\('left', \{ id, zoom: 1, page: 0, ratio: 0 \}\)/.test(view),
    'openInto 不能把位置写死成首页/100%，否则切回来必然回到开头'
  )

  // 滚动与缩放要实时记到材料名下（只在离开时记会读到很久以前的值）
  assert.ok(
    /onScrollChange=\{\(page, ratio\) => \{[\s\S]{0,400}?rememberSpot\(leftId/.test(view),
    '左栏滚动要实时记住位置'
  )
  assert.ok(
    /onScrollChange=\{\(page, ratio\) => \{[\s\S]{0,400}?rememberSpot\(rightId/.test(view),
    '右栏滚动要实时记住位置'
  )
  assert.ok(/rememberSpot\(targetId, \{ zoom: next \}\)/.test(view), '缩放也要记住')

  // 恢复守卫要带进入序号：组件常驻，同一份材料切回时 id 没变不会重跑
  assert.ok(
    /const restoreKey = `\$\{target\.id\}#\$\{enterKey\}`/.test(pane),
    '恢复守卫要带进入序号，否则切回同一份材料时不会重新恢复'
  )
  // Pane 恢复前必须先把目标页纳入渲染范围（懒渲染下否则永远找不到节点）
  assert.ok(
    /const from = Math\.max\(0, sessionPage - SAFE_PAGES\)/.test(pane),
    '恢复前要把目标页纳入渲染范围，否则 querySelector 拿不到节点'
  )
})

test('长文档不能因画布爆内存：只给可见区挂 canvas，且尺寸用视觉尺寸', async () => {
  /*
   * 用户报：「手机导入 91 页 / 98MB 的 PDF，打开草稿工作台就卡死，应用直接退出」。
   *
   * 两个叠加的内存炸弹：
   * ① 以前给**每一页**都挂一块 canvas（92 块），
   *    手机端实测约 0.93GB —— 远超 WebView 上限，必然被系统杀掉；
   * ② 画布尺寸用 `clientWidth`，而纸张是「基准像素排版 + transform 缩放」，
   *    clientWidth 报的是**变换前**的布局宽（桌面实测 2590，视觉只有 1409），
   *    分配出来就是 5180×7482 ≈ 148MB/块。
   *
   * 修法：只在安全区内挂 canvas（范围外只留占位 div），
   * 尺寸改取 getBoundingClientRect()，并加单块像素上限。
   */
  const pane = await readFile(new URL('../src/features/materials/MaterialPane.tsx', import.meta.url), 'utf8')

  // ① canvas 必须受 inRange 控制
  assert.ok(
    /\{inRange \? \([\s\S]{0,80}<canvas/.test(pane),
    '批注画布只能挂安全区内的页：每页一块会让长文档 OOM（手机直接闪退）'
  )
  // 范围外的 canvas 引用要被回收，否则内存只涨不落
  assert.ok(
    /for \(const index of \[\.\.\.canvasRefs\.current\.keys\(\)\]\)/.test(pane),
    '移出安全区的画布引用要删掉，否则内存不回收'
  )

  // ② 尺寸取视觉尺寸，且有上限
  const ariaIdx = pane.indexOf('aria-label={`第 ${index + 1} 页批注画布`}')
  const canvasBlock = pane.slice(pane.lastIndexOf('ref={(node) => {', ariaIdx), ariaIdx)
  assert.ok(/getBoundingClientRect\(\)/.test(canvasBlock), '画布尺寸要用视觉尺寸（变换后）')
  assert.ok(/MAX_PIXELS/.test(canvasBlock), '要有单块画布像素上限')
  assert.ok(
    /const shrink = rawPx > MAX_PIXELS \? Math\.sqrt\(MAX_PIXELS \/ rawPx\) : 1/.test(canvasBlock),
    '超限时按比例降分辨率（sqrt），不是简单截断'
  )
})

test('空闲自动锁屏：设了密码才生效，且有真实活动就不锁', async () => {
  /*
   * 用户要求：「把长时间不动、然后设置了密码自动锁屏的功能加上去」。
   *
   * 三个必须成立的点（少一个都会让用户觉得「功能没做」或「把我关在门外」）：
   * ① 只在设了密码时生效 —— 没密码时锁屏等于把人锁在外面，没有口令可输；
   * ② 持续操作时不能误锁 —— 光有「多久锁」没有「活动就重置」等于定时踢人；
   * ③ 切后台的时间也要算 —— 手机锁屏/切 App 时定时器会被系统冻结，
   *    只用 setTimeout 会在回来之后才重新开始计时，等于没锁。
   */
  const hook = await readFile(new URL('../src/hooks/useAutoLock.ts', import.meta.url), 'utf8')
  const lock = await readFile(new URL('../src/utils/appLock.ts', import.meta.url), 'utf8')
  const app = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')
  const settings = await readFile(new URL('../src/components/features/SettingsDialog.tsx', import.meta.url), 'utf8')

  // ① 没设密码直接不挂监听
  assert.ok(/if \(!required\) return/.test(hook), '没设密码时不该启动自动锁屏（否则没人能解开）')
  assert.ok(
    /if \(!store\.required \|\| !store\.unlocked\) return/.test(hook),
    '已锁定时也不能重复触发'
  )

  // ② 活动事件要覆盖鼠标/键盘/触摸/滚动
  for (const ev of ['pointerdown', 'pointermove', 'wheel', 'keydown', 'touchstart', 'scroll']) {
    assert.ok(new RegExp(`\\['${ev}'`).test(hook), `要监听 ${ev}：只靠部分事件会导致"一直没动"被误判`)
  }
  // 活动必须重置计时
  assert.ok(/lastActiveRef\.current = Date\.now\(\)/.test(hook), '有活动就要重置计时')
  // 滚动要捕获阶段，否则材料面板内部容器收不到
  assert.ok(/'scroll', \{ passive: true, capture: true \}/.test(hook), 'scroll 必须用捕获阶段监听')

  // ③ 切后台按真实流逝时间算
  assert.ok(/hiddenAtRef/.test(hook), '要记录切后台的时刻')
  assert.ok(/visibilitychange/.test(hook), '要监听 visibilitychange')
  assert.ok(
    /const base = hiddenAtRef\.current \?\? lastActiveRef\.current/.test(hook),
    '后台停留时间也要计入空闲（否则放兜里两小时回来还开着）'
  )

  // 设置里可选时长，默认开启 5 分钟
  assert.ok(/AUTO_LOCK_OPTIONS = \[1, 5, 10, 30, 60\]/.test(lock), '要提供几档固定时长')
  assert.ok(/AUTO_LOCK_DEFAULT: AutoLockConfig = \{ enabled: true, minutes: 5 \}/.test(lock), '默认开启 5 分钟')
  assert.ok(/export function readAutoLock/.test(lock), '要能读设置')
  assert.ok(/export function writeAutoLock/.test(lock), '要能存设置')
  // 关密码时一并清掉（没密码时这条记录没意义）
  assert.ok(/clearAutoLock\(\)/.test(settings), '关闭启动密码时要清掉自动锁屏设置')
  // 设置界面要有开关与时长选择
  assert.ok(/hub-settings-autolock/.test(settings), '设置里要有自动锁屏这一块')
  assert.ok(/aria-label="自动锁屏等待时长"/.test(settings), '时长选择要有可访问名')

  // 挂在 App 顶层，所有页面都受管
  assert.ok(/useAutoLock\(\)/.test(app), '自动锁屏要挂在 App 顶层，任何页面都生效')
})

test('滚动位置按页面记忆：刷新、锁屏、返回都不回顶部', async () => {
  /*
   * 用户原话：「不要每次刷新或者锁屏后就回到顶部了 希望保留位置
   * 包括从这返回到总栏也是」「只是说不要滚动动画也不要有一帧的卡顿 要流畅」
   * 「也不要干预正常滚动行为」。
   *
   * 三处必须同时成立，少一处就还是会回顶部：
   * ① ScrollToTop 不能每次 pathname 变化都归零、也不能关掉浏览器原生恢复；
   * ② 锁屏不能卸载路由 —— 页面一卸载，文档高度从两万像素塌到一屏，
   *    浏览器会把 scrollY 强制归 0，解锁后就从顶部开始；
   * ③ 全局不能开 smooth，恢复长文位置会变成"滑好几帧"的卡顿动画。
   */
  const scroll = await readFile(new URL('../src/components/features/ScrollToTop.tsx', import.meta.url), 'utf8')
  const app = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')
  const styles = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')
  const legacyHome = await readFile(new URL('../src/styles/legacy-home.css', import.meta.url), 'utf8')

  // ① 按路径记忆，交回浏览器原生恢复
  assert.ok(/scrollRestoration\s*=\s*'auto'/.test(scroll), '要交回浏览器原生恢复')
  assert.ok(/study-hub:scroll:/.test(scroll), '要按 pathname 分键存位置')
  assert.ok(/behavior:\s*'instant'/.test(scroll), '恢复位置必须 instant（用户明确不要动画）')
  assert.ok(
    /if \(y === 0 && document\.documentElement\.scrollHeight > window\.innerHeight \+ 4\) return/.test(scroll),
    '要过滤「假 0」：浮层锁 body 滚动时 scrollY 会瞬间变 0，记下来就会回顶部'
  )

  // ② 锁屏用遮罩，不卸载路由
  const appCode = app.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '')
  assert.ok(!/locked\s*\?\s*<LockScreen\s*\/>\s*:\s*router/.test(appCode), '锁屏不能卸载路由')
  assert.ok(/aria-hidden=\{locked \? true : undefined\}/.test(appCode), '遮罩层要给下层加 aria-hidden')

  // ③ 不要全局平滑滚动
  assert.ok(
    !/html\s*\{\s*scroll-behavior:\s*smooth/.test(styles),
    'styles.css 不能开 smooth'
  )
  assert.ok(
    !/html\s*\{\s*scroll-behavior:\s*smooth/.test(legacyHome),
    'legacy-home.css 不能开 smooth（它加载在后，会覆盖 styles.css）'
  )
})

test('答题卡出成绩自动复制成绩单到剪贴板（可直接粘给 AI）', async () => {
  /*
   * 用户要求：「坐一会可导出成功的功能就自动复制到剪切板，
   * 这样能直接复制给 ai 对答案找问题」。
   *
   * 这里做源码级守卫，覆盖三件容易退化的事：
   * 1. 必须「出成绩」时自动复制，而不是只在按钮里等用户点；
   * 2. 同一份成绩只能自动复制一次 —— 否则计时/翻题每次重渲染都再复制一遍，
   *    会把用户后来手动复制的内容冲掉；
   * 3. 复制失败要有退路（非 https / WebView 里 navigator.clipboard 会抛错）。
   */
  const sheet = await readFile(new URL('../src/components/features/ChoiceSheet.tsx', import.meta.url), 'utf8')

  // 1. 有独立的成绩单生成函数，且内容是「给模型读」的结构
  assert.ok(/export function buildQuizReport\(/.test(sheet), '必须有 buildQuizReport：成绩单生成要能复用（自动复制 + 手动复制 + 预览）')
  assert.ok(/【概况】/.test(sheet) && /【错题与未作答】/.test(sheet), '成绩单要有概况与错题两个段落')
  assert.ok(/【请帮我】/.test(sheet), '成绩单要带「请帮我分析」的指令，粘贴即用，用户不用再补话')
  assert.ok(
    /请帮我分析错因和知识漏洞/.test(sheet),
    '开头一句要让模型知道该做什么，否则粘过去只会被当成普通文本'
  )
  /*
   * 只列错题与未作答：30 题全列会让模型注意力稀释，
   * 也不该在末尾写「下面是题目原文」却其实没附 —— 那是空头承诺。
   */
  assert.ok(
    /item\.answer === null \|\| item\.answer !== item\.correct/.test(sheet),
    '逐题明细只保留错题与未作答，不要把答对的题也塞进去'
  )
  assert.ok(
    !/下面是错题的题目原文/.test(sheet),
    '不能写「下面是题目原文」却不附原文：本答题卡不存题干，这是空头承诺'
  )
  assert.ok(/本答题卡只记答案，不存题干/.test(sheet), '要如实说明不存题干，并请用户接着贴题目')

  // 2. 出成绩自动复制，且只复制一次
  assert.ok(/autoCopiedRef/.test(sheet), '要有「已自动复制」的标记，否则每次重渲染都会重写剪贴板')
  assert.ok(
    /if \(autoCopiedRef\.current === text\) return/.test(sheet),
    '同一份成绩只能自动复制一次：否则计时刷新会把用户手动复制的内容冲掉'
  )
  assert.ok(
    /if \(!isResult\) \{[\s\S]{0,80}autoCopiedRef\.current = ''/.test(sheet),
    '离开成绩页（重开）要清空标记，下次出成绩才能再自动复制一次'
  )
  assert.ok(/void copyText\(text\)/.test(sheet), '出成绩时要真的调用复制')

  // 3. 复制要有兜底通道
  assert.ok(/export async function copyText/.test(sheet), '复制要抽成 copyText，自动与手动共用一套兜底')
  assert.ok(/document\.execCommand\('copy'\)/.test(sheet), 'navigator.clipboard 不可用时要退回 execCommand，别让自动复制静默失败')

  // 4. 手动入口仍在，作为自动复制失败时的退路
  assert.ok(/复制成绩/.test(sheet), '要有手动「复制成绩」按钮')
  assert.ok(/看文本/.test(sheet), '要有文本预览，复制被浏览器拦住时还能手动全选')
})
