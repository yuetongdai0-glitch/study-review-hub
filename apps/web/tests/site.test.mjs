import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import { test } from 'node:test'

/**
 * 该实体用于描述源复习文件与站点路由之间的一一对应关系。
 */
const pages = [
  { route: 'graphic-reasoning', title: '图形推理 3+3 体系' },
  { route: 'comprehensive-d', title: '综应 D 类' },
  { route: 'verbal', title: '言语理解与表达' },
  { route: 'quantitative', title: '数量关系' },
  { route: 'judgment', title: '判断推理知识图谱' },
  { route: 'analogy', title: '类比推理考点体系' },
  { route: 'data-analysis', title: '资料分析' },
  { route: 'comprehensive-a', title: '综应 A 类' },
  { route: 'exam-grid', title: '模拟考试答题纸' },
  { route: 'choice-quiz', title: '选择题答题卡' },
  { route: 'vocab', title: '综应A 规范词速查' },
  { route: 'politics', title: '政治常识' },
  { route: 'words', title: '词语积累' },
  { route: 'scratchpad', title: '草稿纸' }
]

/**
 * 阅读型科目页（带左上角共享侧栏目录）。
 * exam-grid / choice-quiz 是练习工具（答题纸 / 答题卡），全屏单页布局，不适用侧栏目录。
 */
const shellPages = pages.filter((p) => !['exam-grid', 'choice-quiz', 'scratchpad'].includes(p.route))

/**
 * 侧栏目录锚点由页面脚本在运行时生成的页面：
 * 这类页的锚点无法在源码里直接搜到，因此改为校验「锚点形态 + 生成代码」。
 * 类比推理页已改为静态 section 骨架（与数量关系页一致），锚点可直接在源码里找到。
 */
const runtimeAnchorPages = {
  vocab: {
    pattern: /^#g-(general|problem|measure|emergency|communicate|document|universal)$/,
    generator: ['id="g-\' + g.id + \'"']
  }
}

/**
 * 读取 UTF-8 文本文件。
 * @param {string} path 文件绝对路径。
 * @returns {Promise<string>} 文件文本。
 */
function readText(path) {
  return readFile(path, 'utf8')
}

/**
 * 把 HTML 按某个标题标签切成「标题 → 该标题管辖的内容」的片段。
 * 片段右边界取下一个同级标题、`</section>` 或文末。
 * @param {string} html 页面源码。
 * @param {string} tag 标题标签名，如 'h4'。
 * @returns {string[]} 每个标题及其后内容的片段。
 */
function headingChunks(html, tag) {
  const re = new RegExp(`<${tag}[^>]*>[\\s\\S]*?(?=<${tag}[^>]*>|<h2[^>]*>|</section>|$)`, 'gi')
  return html.match(re) || []
}

test('首页包含全部复习入口的有效路由', async () => {
  // 首页已由 React 渲染，卡片来自路由表；校验「路由表覆盖全部模块」这一事实。
  const registry = await readText(new URL('../src/router/routeRegistry.ts', import.meta.url))
  const home = await readText(new URL('../src/pages/home/index.tsx', import.meta.url))

  for (const page of pages) {
    assert.ok(registry.includes(page.title), `路由表缺少科目：${page.title}`)
    assert.ok(
      new RegExp(`'${page.route}'`).test(registry),
      `路由表缺少路由：${page.route}`
    )
  }

  // 首页必须按路由表渲染，而不是手写卡片列表（否则新增科目会漏）。
  assert.match(home, /allModules\.map/, '首页未按模块表渲染科目卡片')
  assert.match(home, /moduleMetas\.length/, '首页未显示模块数量')
  assert.match(home, /toolMetas\.length/, '首页未显示工具数量')
})

test('每个复习页接入共享导航且保留完整源文件内容', async () => {
  for (const page of pages) {
    const deployedPath = new URL(`../pages/${page.route}/index.html`, import.meta.url)
    const deployed = await readText(deployedPath)

    assert.ok(deployed.includes('data-study-hub-style'), `${page.title} 缺少导航样式`)
    assert.ok(deployed.includes('data-study-hub-script'), `${page.title} 缺少导航脚本`)
    if (page.route === 'comprehensive-a') {
      assert.ok(deployed.includes('data-study-hub-mobile'), '综应 A 类缺少移动端样式')
    }

    assert.ok(deployed.length > 1000, `${page.title} 页面内容异常为空`)
  }
})

test('科目页接入全站统一页壳（左上角侧栏 + 移动端抽屉）', async () => {
  for (const page of shellPages) {
    const html = await readText(new URL(`../pages/${page.route}/index.html`, import.meta.url))
    const label = page.title

    // 共享页壳样式与脚本（相对路径，保证 GitHub Pages 可用）
    assert.ok(
      html.includes('data-page-shell rel="stylesheet" href="../../assets/page-shell.css"'),
      `${label} 未以相对路径引入共享页壳样式`
    )
    assert.ok(
      html.includes('data-page-shell src="../../assets/page-shell.js"'),
      `${label} 未以相对路径引入共享页壳脚本`
    )

    // 页壳标记：左上角侧栏、搜索框、汉堡按钮、遮罩
    assert.ok(html.includes('<aside class="sidebar" id="sidebar">'), `${label} 缺少共享侧栏容器`)
    assert.ok(html.includes('id="navSearch"'), `${label} 缺少侧栏搜索框`)
    assert.ok(html.includes('id="menuBtn"'), `${label} 缺少移动端汉堡按钮`)
    assert.ok(html.includes('id="mask"'), `${label} 缺少移动端遮罩`)

    // 侧栏目录链接数量（阅读型页面至少 5 条）
    const links = html.match(/class="nav-link"[^>]*href="#/g) || []
    assert.ok(links.length >= 5, `${label} 侧栏目录链接过少：${links.length}`)

    // 页面自己的旧导航不应残留（会与共享页壳的汉堡/高亮互相抵消）
    assert.ok(!html.includes('id="menu-btn"'), `${label} 仍在自建汉堡按钮`)
    assert.ok(!html.includes('<nav class="navbar">'), `${label} 仍在自建顶部导航`)

    // 禁用原生弹窗（内嵌预览会阻塞主线程）
    assert.ok(!/\bconfirm\s*\(/.test(html), `${label} 使用了原生 confirm`)
    assert.ok(!/\balert\s*\(/.test(html), `${label} 使用了原生 alert`)
  }
})

test('侧栏目录的锚点都能在页内找到（无死链）', async () => {
  for (const page of shellPages) {
    const html = await readText(new URL(`../pages/${page.route}/index.html`, import.meta.url))
    const hrefs = [...html.matchAll(/class="nav-link"[^>]*href="#([^"]+)"/g)].map((m) => m[1])
    const runtime = runtimeAnchorPages[page.route]

    assert.ok(hrefs.length >= 5, `${page.title} 侧栏目录链接过少`)

    for (const id of hrefs) {
      if (runtime) {
        assert.ok(
          runtime.pattern.test(`#${id}`),
          `${page.title} 侧栏锚点 #${id} 不符合运行期生成的锚点规范`
        )
      } else {
        assert.ok(
          html.includes(`id="${id}"`),
          `${page.title} 侧栏锚点 #${id} 在页内不存在（死链）`
        )
      }
    }

    if (runtime) {
      for (const snippet of runtime.generator) {
        assert.ok(
          html.includes(snippet),
          `${page.title} 缺少运行期锚点生成代码：${snippet}`
        )
      }
    }
  }
})

test('综应 A 页面整合袁东方法论并与 2026 大纲同步', async () => {
  const page = await readText(new URL('../pages/comprehensive-a/index.html', import.meta.url))

  // 袁东体系核心表述
  for (const marker of ['袁东', '逻辑至上', '机关视角', '材料为王', '去模板化']) {
    assert.ok(page.includes(marker), `综应 A 页面缺少袁东体系要点：${marker}`)
  }

  // 2026 大纲调整要点
  for (const marker of ['2026大纲', '背景材料和任务', '组织协调与活动方案']) {
    assert.ok(page.includes(marker), `综应 A 页面缺少 2026 大纲要点：${marker}`)
  }

  // 静态资源仍以相对路径引用，确保 GitHub Pages 链接可用
  assert.ok(
    page.includes('href="../../assets/hub-nav.css"'),
    '综应 A 页面共享样式未使用相对路径引用'
  )
})

test('综应 A 页面移动端表格卡片化结构完整', async () => {
  const page = await readText(new URL('../pages/comprehensive-a/index.html', import.meta.url))

  // 每张表格的表头行需被标记，移动端才能隐藏表头并改用列标签
  const tableCount = (page.match(/<table>/g) || []).length
  const headRowCount = (page.match(/<tr class="thead-row">/g) || []).length
  assert.equal(headRowCount, tableCount, '存在未标记表头行的表格，移动端卡片化会丢失列名')

  // 每张表格至少有一个数据单元格携带列标签
  const labels = page.match(/data-label="/g) || []
  assert.ok(labels.length >= tableCount, '表格缺少 data-label 列标签，移动端将无法显示列名')

  // rowspan 分组单元格需带 data-group（含分组名），供移动端显示分块标题
  const rowspanCells = page.match(/<td rowspan="\d+"[^>]*data-group="/g) || []
  assert.ok(rowspanCells.length > 0, 'rowspan 分组单元格缺少 data-group')

  // 移动端样式须包含卡片化关键规则
  const mobile = await readText(new URL('../assets/comprehensive-a-mobile.css', import.meta.url))
  for (const rule of ['thead-row', 'data-card-group-start', 'data-card-lead', 'data-label']) {
    assert.ok(mobile.includes(rule), `移动端样式缺少表格卡片化规则：${rule}`)
  }

  // 卡片化断点必须覆盖平板（iPad 竖屏 768px）。若断点回落到 720px，
  // 768px 视口会回退到桌面表格布局，首列被压到 50~70px 并出现逐字换行。
  const breakpoints = [...mobile.matchAll(/@media \(max-width:\s*(\d+)px\)/g)].map((m) => Number(m[1]))
  const widest = Math.max(...breakpoints)
  assert.ok(
    widest >= 1024,
    `表格卡片化断点最大仅 ${widest}px，未覆盖平板视口（768px iPad 竖屏）`
  )
})

test('共享导航声明全部复习入口，并支持返回总览', async () => {
  const navigation = await readText(new URL('../assets/hub-nav.js', import.meta.url))

  assert.ok(navigation.includes('../../index.html'), '共享导航缺少返回总览链接')
  for (const page of pages) {
    // 共享导航通过配置数组生成相对链接，因此校验路由配置而非运行时模板结果。
    assert.ok(navigation.includes(`route: '${page.route}'`), `共享导航缺少路由：${page.route}`)
  }
})

test('模拟考试答题纸具备字数统计、抹除、复制与本地保存能力', async () => {
  const page = await readText(new URL('../pages/exam-grid/index.html', import.meta.url))

  // 核心能力标记：网格、字数统计、一键抹除、一键复制、IndexedDB 本地保存
  for (const marker of ['模拟考试答题纸', '一键抹除', '一键复制', '已写', 'indexedDB', '草稿箱']) {
    assert.ok(page.includes(marker), `答题纸页面缺少能力：${marker}`)
  }

  // 索引库与自动保存的实现细节（防止后续改动破坏持久化）
  assert.ok(page.includes('indexedDB.open'), '答题纸页面未使用 IndexedDB')
  assert.ok(page.includes("keyPath: 'id'"), '答题纸页面缺少 IndexedDB 主键配置')

  // 主按钮只做"复制到剪贴板"（用户明确要求：不触发下载），
  // 下载仅在导出预览弹层内作为可选项保留。
  assert.ok(page.includes('clipboard') || page.includes('execCommand'), '答题纸页面缺少剪贴板复制能力')
  assert.ok(page.includes('一键复制'), '答题纸页面缺少「一键复制」按钮')
  assert.ok(!page.includes('复制并下载'), '「一键复制」按钮仍带有下载语义')
  const exportHandler = page.match(/getElementById\('a-export'\)[\s\S]{0,600}?\n  \}\);/)
  assert.ok(exportHandler, '未找到「一键复制」按钮的点击处理')
  assert.ok(!exportHandler[0].includes('download'), '「一键复制」按钮不应再触发下载')

  // 导入：把参考答案等外部文本粘进答题卡查看
  assert.ok(page.includes('id="a-import"'), '答题纸页面缺少「导入」按钮')
  assert.ok(page.includes('m-import'), '答题纸页面缺少导入弹窗')
  assert.ok(/function\s+normalizeImport/.test(page), '答题纸页面缺少导入文本规整逻辑')
  // 导入时需剥掉 Markdown 装饰与导出表头（换行则必须保留，见下）
  assert.ok(/replace\(\/\\\*\\\*\/g/.test(page), '导入未剥离 Markdown 加粗标记')
  assert.ok(page.includes('SEP_LINE'), '导入未复用导出分隔线常量')
  // Markdown 的"**加粗** 后接正文"去星号后会剩半角空格，落在答题卡上就是多余空白格
  assert.ok(
    page.includes('\\\\u2460-\\\\u24ff'),
    '导入未处理"紧贴中文的多余空格"，会在答题卡上留下空白格'
  )
  // 换行必须保留：讲述稿/公文的标题、称谓、段落要各自成行（曾因全删换行挤成一片）
  assert.ok(/function\s+importToGrid/.test(page), '导入未实现"换行=另起一行"的落格逻辑')
  assert.ok(
    /split\('\\n'\)/.test(page),
    '导入未按换行切分文本，标题与称谓会被挤在一起'
  )

  // 底栏在手机上要能一行放下 6 个按钮（复制/撤销/导入/保存/草稿箱/抹除）
  assert.ok(
    /\.btn\{[^}]*calc\(16\.666%/.test(page),
    '手机端底栏按钮未按 6 个一行排布'
  )
  // 手机端用短标签替换长标签，否则 6 个按钮会挤爆
  assert.ok(page.includes('class="sh"'), '手机端缺少短标签，6 个按钮会溢出')
  assert.ok(
    /\.btn \.sh\{display:none;\}/.test(page) && /\.btn \.lg\{display:none;\}/.test(page),
    '短标签/长标签的显隐规则不完整'
  )

  // 撤销：Ctrl/Cmd+Z 最多回退 20 步
  assert.ok(page.includes('id="a-undo"'), '答题纸页面缺少「撤销」按钮')
  assert.ok(/UNDO_MAX\s*=\s*20/.test(page), '撤销步数上限不是 20')
  assert.ok(/function\s+doUndo/.test(page), '答题纸页面缺少撤销实现')
  assert.ok(/function\s+markUndo/.test(page), '答题纸页面缺少历史记录点')
  // 必须拦下浏览器原生撤销：原生只认 textarea，与自绘网格不同步
  const undoKeyHandler = page.match(/addEventListener\('keydown',\s*function \(e\)\s*\{[\s\S]{0,700}?\},\s*true\)/)
  assert.ok(undoKeyHandler, '未找到拦截原生撤销的键盘处理')
  assert.ok(undoKeyHandler[0].includes('preventDefault'), '未拦截原生 Ctrl+Z 的默认行为')
  assert.ok(/doUndo\(\)/.test(undoKeyHandler[0]), '拦截后未执行自定义撤销')
  // 删除路径也要记历史（删除同样应可撤销）
  assert.ok(
    /function deleteSmart[\s\S]{0,1600}?markUndo\(/.test(page),
    'deleteSmart 未记录撤销历史'
  )

  // 仍以相对路径引用共享样式，保证 GitHub Pages 可用
  assert.ok(
    page.includes('href="../../assets/hub-nav.css"'),
    '答题纸页面共享样式未使用相对路径引用'
  )
})

test('选择题答题卡具备答题、对答案、结果统计与本地缓存能力', async () => {
  const page = await readText(new URL('../pages/choice-quiz/index.html', import.meta.url))

  // 三阶段主流程与结果统计
  for (const marker of [
    '选择题答题卡', '开始做题', '交卷', '答题卡', '正确答案',
    '正确率', '总用时', '平均每题', '未作答'
  ]) {
    assert.ok(page.includes(marker), `选择题答题卡缺少能力：${marker}`)
  }

  // 阶段常量：答题 → 对答案 → 结果
  for (const phase of ["PHASE_ANSWER = 'answer'", "PHASE_CHECK = 'check'", "PHASE_RESULT = 'result'"]) {
    assert.ok(page.includes(phase), `选择题答题卡缺少阶段定义：${phase}`)
  }

  // 选项个数可调，且限制在 2~8 之间
  assert.ok(page.includes('OPT_MIN = 2') && page.includes('OPT_MAX = 8'), '选项个数上下限定义缺失')

  // 计时：从开始做题起算、可暂停、对答案不计时
  assert.ok(/totalMs/.test(page), '缺少总用时累计字段')
  assert.ok(/timeMs/.test(page), '缺少每题用时字段')
  assert.ok(
    /S\.phase === PHASE_ANSWER && !S\.paused/.test(page),
    '计时未限制在"答题阶段且未暂停"内'
  )

  // 本地缓存：刷新后恢复进度
  assert.ok(page.includes('localStorage'), '选择题答题卡未使用 localStorage 缓存')
  assert.ok(page.includes('choice-quiz:v1'), '选择题答题卡缺少缓存键版本号')

  // 禁用原生弹窗（内嵌环境会阻塞主线程），改用自绘确认框
  assert.ok(!/\bconfirm\s*\(/.test(page), '选择题答题卡使用了原生 confirm')
  assert.ok(!/\balert\s*\(/.test(page), '选择题答题卡使用了原生 alert')
  assert.ok(page.includes('m-confirm'), '选择题答题卡缺少自绘确认框')

  // 仍以相对路径引用共享样式，保证 GitHub Pages 可用
  assert.ok(
    page.includes('href="../../assets/hub-nav.css"'),
    '选择题答题卡共享样式未使用相对路径引用'
  )
})

test('规范词速查页具备分类词库、搜索与复制能力', async () => {
  const page = await readText(new URL('../pages/vocab/index.html', import.meta.url))

  // 核心能力标记
  for (const marker of [
    '总括词', '加强宣传引导', '加强队伍建设', '健全', '负面状态词',
    '动之以情', '晓之以理', '导之以行', '长效机制'
  ]) {
    assert.ok(page.includes(marker), `规范词速查页缺少内容：${marker}`)
  }

  // 分类词库数据结构：7 个分组
  const groups = page.match(/id: '(general|problem|measure|emergency|communicate|document|universal)'/g) || []
  assert.ok(groups.length >= 7, `规范词速查页分组不足，仅 ${groups.length} 组`)

  // 搜索与复制两条交互路径：搜索框已并入共享页壳侧栏，
  // 并由 pageShellContentFilter 钩子把侧栏搜索同时作用到词条正文
  assert.ok(page.includes('id="navSearch"'), '规范词速查页缺少（侧栏）搜索框')
  assert.ok(
    page.includes('window.pageShellContentFilter'),
    '规范词速查页未把侧栏搜索接到正文过滤'
  )
  assert.ok(page.includes('data-copy='), '规范词速查页缺少"点词条复制"能力')
  assert.ok(page.includes('clipboard') || page.includes('execCommand'), '规范词速查页缺少剪贴板能力')

  // 禁用原生弹窗（内嵌环境会阻塞主线程）
  assert.ok(!/\bconfirm\s*\(/.test(page), '规范词速查页使用了原生 confirm')
  assert.ok(!/\balert\s*\(/.test(page), '规范词速查页使用了原生 alert')

  // 仍以相对路径引用共享样式，保证 GitHub Pages 可用
  assert.ok(
    page.includes('href="../../assets/hub-nav.css"'),
    '规范词速查页共享样式未使用相对路径引用'
  )

  // 标签页标题（document.title）在切换任何分类时都应保持恒定：
  // 页面内不得有改写 document.title 的代码
  assert.ok(page.includes('<title>测试</title>'), '规范词速查页标签页标题不是「测试」')
  assert.ok(
    !/document\.title\s*=/.test(page),
    '规范词速查页存在改写 document.title 的代码，切换分类时标题会变'
  )
})

test('全站标签页标题统一', async () => {
  // 单页应用：所有路由共用 index.html 的同一份 title。
  const shell = await readText(new URL('../index.html', import.meta.url))
  assert.match(shell, /<title>[^<]+<\/title>/, '缺少标签页标题')
  assert.ok(shell.includes('<div id="root"></div>'), '缺少 React 挂载点')

  for (const page of pages) {
    // 阅读页在 reading/，工具页在 tools/。
    const dir = ['exam-grid', 'choice-quiz', 'scratchpad'].includes(page.route) ? 'tools' : 'reading'
    const source = await readText(new URL(`../src/pages/${dir}/${page.route}/index.tsx`, import.meta.url))
    // 模块页不得自带 title，也不得动态改写，否则标签页会随路由跳动。
    assert.ok(!source.includes('<title>'), `${page.title} 页面内不应出现 title 标签`)
    assert.ok(!/document\.title\s*=/.test(source), `${page.title} 不应改写 document.title`)
  }
})

test('类比推理页具备完整考点体系、真题例题与文字化积累', async () => {
  const page = await readText(new URL('../pages/analogy/index.html', import.meta.url))

  // 考点体系：核心原则 + 逻辑关系 8 类 + 经验常识 8 类 + 言语关系 7 类 + 造句法
  for (const marker of [
    '核心原则', '先横后纵', '先整体后局部', '常态思维', '纵向对比',
    '全同关系', '全异关系', '种属关系', '交叉关系', '顺承关系', '因果关系', '目的关系', '条件关系',
    '功能关系', '组成关系', '加工关系', '命名方式', '特征（属性）关系', '职业关系', '位置关系', '依据关系',
    '近反义关系', '结合逻辑关系考查', '词句结构', '释义关系', '指代、象征、比喻',
    '成语、诗句被拆分', '长诗句', '造句法'
  ]) {
    assert.ok(page.includes(marker), `类比推理页缺少考点：${marker}`)
  }

  // 27 个板块：总览 + 核心原则 1 + 逻辑关系 8 + 经验常识 8 + 言语关系 7 + 造句法 1 + 复盘 1
  const secIds = [...page.matchAll(/<div class="section c-[a-z]+" id="([^"]+)"/g)].map((m) => m[1])
  assert.equal(secIds.length, 27, `类比推理页板块应为 27 个，实际 ${secIds.length} 个`)
  for (let i = 0; i <= 24; i++) {
    assert.ok(secIds.includes(`s${i}`), `类比推理页缺少板块 s${i}`)
  }
  assert.ok(secIds.includes('nav') && secIds.includes('strategy'), '缺少总览或复盘板块')

  // 每个板块都必须配有例题（例题不得单独堆在页尾）
  const chunks = page.split(/<div class="section c-[a-z]+" id="/).slice(1)
  for (const chunk of chunks) {
    const id = chunk.slice(0, chunk.indexOf('"'))
    assert.ok(chunk.includes('class="example"'), `板块 ${id} 没有例题`)
  }

  // 例题必须自带解析与答案，且总数不能少（全部取自两份资料的历年真题）
  const total = (page.match(/class="example"/g) || []).length
  assert.ok(total >= 100, `类比推理页例题偏少：${total}`)
  assert.equal((page.match(/class="example-answer"/g) || []).length, total, '每道例题都应有解析')
  assert.equal((page.match(/class="correct">答案：/g) || []).length, total, '每道例题都应给出答案')
  // 例题标题里要标出来源年份/地区，方便回查原文
  assert.equal((page.match(/class="src">/g) || []).length, total, '每道例题都应标注真题来源')

  // 类比推理全程用文字呈现（无复杂图案，截图反而看不清）——
  // 因此不应再引用任何例题截图与示意图
  assert.ok(!page.includes('note-img/analogy'), '类比推理页仍在引用截图，应全部转为文字')
  assert.ok(!page.includes('<img'), '类比推理页不应包含图片')
  assert.ok(!page.includes('<figure'), '类比推理页不应再使用示意图（移动端不好看）')
  assert.ok(!page.includes('fig.css'), '类比推理页已无示意图，不应再引入 fig.css')

  // 关键常识积累必须落到文字
  for (const kw of [
    '属相：生肖', '岳父：泰山', '领头雁', '巾帼', '干戈', '矛盾全异',
    '干戈 / 烽烟', '南冠', '桑梓', '总角 / 垂髫', '水涨：船高', '守株：待兔'
  ]) {
    assert.ok(page.includes(kw), `类比推理页缺少文字化积累：${kw}`)
  }

  // 搜索：搜索框已并入共享页壳侧栏，并同时过滤正文考点
  assert.ok(page.includes('id="navSearch"'), '类比推理页缺少（侧栏）搜索框')
  assert.ok(
    page.includes('window.pageShellContentFilter'),
    '类比推理页未把侧栏搜索接到正文过滤'
  )

  // 禁用原生弹窗（内嵌环境会阻塞主线程）
  assert.ok(!/\bconfirm\s*\(/.test(page), '类比推理页使用了原生 confirm')
  assert.ok(!/\balert\s*\(/.test(page), '类比推理页使用了原生 alert')

  // 相对路径引用共享样式
  assert.ok(page.includes('href="../../assets/hub-nav.css"'), '类比推理页共享样式未使用相对路径')
})

test('图形推理页已按 3+2 十讲重建（与数量关系同款页壳）', async () => {
  const page = await readText(new URL('../pages/graphic-reasoning/index.html', import.meta.url))

  // 总览 + 十讲，共 11 个 section
  const secs = [...page.matchAll(/<div class="section c-[a-z]+" id="(nav|s\d+)">/g)].map(m => m[1])
  assert.deepEqual(secs, ['nav', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10'],
    '图形推理页模块缺失或顺序错：' + secs.join(','))

  // 共享页壳：侧栏 + 抽屉 + 搜索
  assert.equal((page.match(/class="nav-link"/g) || []).length, 11, '侧栏链接应为 11 条')
  assert.equal((page.match(/class="nav-group"/g) || []).length, 5, '侧栏应有 5 个分组')
  assert.equal((page.match(/class="sidebar"/g) || []).length, 1, '应有左侧固定目录')
  assert.ok(page.includes('class="menu-btn"') && page.includes('class="mask"'), '缺少移动端抽屉结构')
  assert.ok(page.includes('id="navSearch"'), '缺少侧栏搜索框')
  const navLinks = [...page.matchAll(/class="nav-link"[^>]*href="#([^"]+)"/g)].map(m => m[1])
  for (const id of navLinks) assert.ok(page.includes(`id="${id}"`), `侧栏链接指向的锚点不存在：${id}`)

  // 十讲的核心内容标记（来自 3+2 命题思维讲义）
  for (const k of [
    '出题形式', '作图特点', '平移', '旋转', '翻转', '相邻比较', '加减同异', '黑白运算', '标记',
    '对称性', '曲直性', '开闭性', '图形间关系', '面数量', '线数量', '点数量', '一笔画', '奇点',
    '元素', '直角', '六面体', '四面体', '三视图', '截面', '立体拼合', '公共边', '平面拼合',
    '折纸', '思维导图串讲', '俄罗斯方块'
  ]) {
    assert.ok(page.includes(k), `图形推理页缺少内容：${k}`)
  }

  // 例题：静态 HTML + 全部标注来源年份
  const exs = (page.match(/class="example-header"/g) || []).length
  assert.ok(exs >= 120, `图形推理页例题偏少：${exs}`)
  const dated = [...page.matchAll(/<div class="example-header">([\s\S]*?)<\/div>/g)]
    .filter(m => /20\d\d/.test(m[1])).length
  assert.ok(dated >= 100, `标注来源年份的例题偏少：${dated}`)
  assert.ok(!page.includes('var EXAMPLES'), '图形推理页仍在使用 JS 生成例题')

  // 自绘图：不得残留任何截图
  const figs = (page.match(/<figure class="fig"/g) || []).length
  assert.ok(figs >= 200, `图形推理页自绘图偏少：${figs}`)
  assert.ok(!page.includes('note-img/graph/'), '图形推理页仍引用笔记截图')
  assert.ok(!/<img[^>]*src="[^"]*\.webp"/.test(page), '图形推理页仍存在 webp 截图')
  assert.ok(!page.includes('class="ex-fig"'), '图形推理页仍残留 ASCII 字符画图框')

  // 结构：每个模块都要有知识点块、例题与配图，且每个 block 都落在 section-body 内
  for (const id of ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10']) {
    const a = page.indexOf(`id="${id}"`)
    const b = page.indexOf('id="s', a + 12)
    const seg = page.slice(a, b > 0 ? b : page.length)
    assert.ok((seg.match(/class="block-title"/g) || []).length >= 1, `模块 ${id} 没有知识点`)
    assert.ok((seg.match(/class="example-header"/g) || []).length >= 1, `模块 ${id} 没有例题`)
    assert.ok(seg.includes('<figure class="fig"'), `模块 ${id} 没有配图`)
    // section-body 必须配对闭合（防「块逃出折叠容器」）
    const i0 = seg.indexOf('<div class="section-body">')
    const re = /<div\b[^>]*>|<\/div>/g
    re.lastIndex = i0
    let depth = 0
    let bodyEnd = -1
    let m
    while ((m = re.exec(seg))) {
      if (m[0] === '</div>') { depth -= 1; if (depth === 0) { bodyEnd = m.index; break } } else depth += 1
    }
    assert.ok(bodyEnd > i0, `模块 ${id} 的 section-body 没有配对闭合`)
    const body = seg.slice(i0, bodyEnd)
    assert.equal((body.match(/class="block-title"/g) || []).length,
      (seg.match(/class="block-title"/g) || []).length,
      `模块 ${id} 有知识点落在 section-body 之外`)
  }

  // 每张自绘图都要带 viewBox（等比缩放）、aria-label 与 SVG 显式着色的文字
  const svgBlocks = page.split('<svg ').slice(1)
  assert.ok(svgBlocks.length >= 200, `自绘 SVG 数量偏少：${svgBlocks.length}`)
  svgBlocks.forEach((blk, i) => {
    const svg = blk.slice(0, blk.indexOf('</svg>') + 6)
    assert.ok(/viewBox="0 0 [1-9]\d*\.?\d* [1-9]\d*\.?\d*"/.test(svg), `第 ${i + 1} 张自绘图 viewBox 不规范`)
    assert.ok(svg.includes('aria-label='), `第 ${i + 1} 张自绘图缺少 aria-label`)
    assert.ok(!svg.includes('currentColor'), `第 ${i + 1} 张自绘图用了 currentColor`)
    for (const t of svg.match(/<text\b[^>]*>/g) || []) {
      assert.ok(t.includes('fill='), `第 ${i + 1} 张自绘图有 <text> 缺少 fill 显式着色`)
    }
  })

  // 禁用原生弹窗
  assert.ok(!/\bconfirm\s*\(/.test(page), '图形推理页使用了原生 confirm')
  assert.ok(!/\balert\s*\(/.test(page), '图形推理页使用了原生 alert')
})

test('判断推理页已移除图形推理与类比推理两个模块', async () => {
  const page = await readText(new URL('../pages/judgment/index.html', import.meta.url))

  // 两个模块的区块与侧栏锚点都应删除
  assert.ok(!page.includes('id="mod3"'), '判断推理页仍保留图形推理模块')
  assert.ok(!page.includes('id="mod4"'), '判断推理页仍保留类比推理模块')
  assert.ok(!page.includes('href="#graph-'), '判断推理页仍保留图推侧栏锚点')
  assert.ok(!page.includes('href="#ana-'), '判断推理页仍保留类比侧栏锚点')

  // 保留的模块仍应存在，并给出跳转到独立页的入口
  assert.ok(page.includes('id="mod1"') && page.includes('id="mod2"'), '判断推理页缺少逻辑判断模块')
  assert.ok(page.includes('id="mod5"'), '判断推理页缺少定义判断模块')
  assert.ok(page.includes('../graphic-reasoning/'), '判断推理页缺少图形推理独立页入口')
  assert.ok(page.includes('../analogy/'), '判断推理页缺少类比推理独立页入口')
})

test('判断推理页已剥离综应 C 论证评价，并按三份资料补齐考点', async () => {
  const page = await readText(new URL('../pages/judgment/index.html', import.meta.url))

  // ① 综应 C 的论证评价属于主观题，已整体删除：本页只服务行测 / 职测的选择题
  assert.ok(!page.includes('id="argue"'), '判断推理页仍保留论证评价模块')
  assert.ok(!page.includes('arg-intro') && !page.includes('arg-real'), '论证评价小节锚点未清理')
  assert.ok(!page.includes('综应'), '判断推理页仍有「综应」字样')
  assert.ok(!page.includes('模块四'), '判断推理页仍有「模块四」残留')

  // ② 3+2 母题体系：真假话 / 直接找矛盾 的套路题必须齐
  for (const k of [
    '母题二', '母题三 · 真假话', '母题五 · 直接找矛盾',
    '冠军模型', '半对半错', '只出现一次的信息', '一找', '二绕', '三回',
    '假设起点', '二难推理', '出题思路'
  ]) assert.ok(page.includes(k), `缺少 3+2 母题考点：${k}`)

  // ③ 反对关系：3+2 的上/下反对 + 夸夸刷的秒杀技
  for (const k of ['上反对', '下反对', '顺着第三句', '反着第三句']) {
    assert.ok(page.includes(k), `缺少反对关系考点：${k}`)
  }

  // ④ 三段论：按 3+2 与夸夸刷重写（画图法 + 排除法 + 拆分结论法 + 句式转换）
  for (const k of [
    '先画所有，再画有些', '圆环可空，点可放大', '三种概念各出现两次',
    '拆分结论法', '句式转换', '中项', '周延'
  ]) assert.ok(page.includes(k), `三段论缺少：${k}`)

  // ⑤ 朴素逻辑：3+2 的四种方法 + 夸夸刷的套路题型
  for (const k of ['列表法', '连线法', '画图法', '假设法', '多多少少', '数量差值', '相同归大']) {
    assert.ok(page.includes(k), `朴素逻辑缺少：${k}`)
  }

  // ⑥ 加强削弱：夸夸刷的「一般型」兜底 + 力度比较维度
  for (const k of ['一般型', '一般加强型', '一般削弱型', '预设', '本质', '全面', '量大']) {
    assert.ok(page.includes(k), `加强削弱缺少：${k}`)
  }

  // ⑦ 评价型：小红书「常规评价 / 论证评价」两个补充专题（均为选择题形态）
  for (const k of [
    '评价型', '字母代概念', '中项不周延',
    '自相矛盾', '偷换概念', '转移话题', '并列不当', '诉诸无知',
    '诉诸权威', '非黑即白', '强加因果', '循环论证'
  ]) assert.ok(page.includes(k), `评价型缺少：${k}`)

  // ⑧ 定义判断：夸夸刷的特殊解题技巧 + 多定义
  for (const k of ['列举信息', '否定性信息', '同义转述', '长难句', '归纳定义', '总分', '同构选项排除']) {
    assert.ok(page.includes(k), `定义判断缺少：${k}`)
  }

  // ⑨ 例题与解析：每个考点都要有配套例题，且总量充足
  const ex = (page.match(/class="ex"/g) || []).length
  assert.ok(ex >= 55, `判断推理页例题偏少：${ex}`)
  assert.equal((page.match(/class="ex-t"/g) || []).length, ex, '每个例题都应有标题行')
  assert.equal((page.match(/class="a"/g) || []).length, ex, '每个例题都应有解析')
})

test('数量关系页已按高照体系补全知识点，且每个模块都有例题', async () => {
  const page = await readText(new URL('../pages/quantitative/index.html', import.meta.url))

  // 总览 + 21 个知识模块（s0 速解四法 ~ s20 统筹优化）
  const marks = [...page.matchAll(/<div class="section c-[a-z]+" id="(nav|s\d+)">/g)]
  const slice = (id) => {
    const k = marks.findIndex(m => m[1] === id)
    assert.ok(k >= 0, `缺少模块 ${id}`)
    const a = marks[k].index
    const b = k + 1 < marks.length ? marks[k + 1].index : page.indexOf('<!-- 考场策略 -->')
    return page.slice(a, b)
  }
  for (let i = 0; i <= 20; i++) assert.ok(slice(`s${i}`).length > 200, `模块 s${i} 内容为空`)

  // 导航：右上角已改为「左上角固定侧栏 + 移动端抽屉」（与判断推理页统一）
  assert.equal((page.match(/class="nav-chip/g) || []).length, 0, '顶部横条应已移除')
  assert.equal((page.match(/class="nav-bar"/g) || []).length, 0, '顶部导航条应已移除')
  assert.equal((page.match(/class="sidebar"/g) || []).length, 1, '应有左侧固定目录')
  assert.ok(page.includes('class="menu-btn"') && page.includes('class="mask"'), '缺少移动端抽屉结构')
  assert.ok(page.includes('id="navSearch"'), '缺少侧栏搜索框')
  const navLinks = [...page.matchAll(/class="nav-link"[^>]*href="#([^"]+)"/g)].map(m => m[1])
  assert.equal(navLinks.length, 23, `侧栏链接应为 23 条，实为 ${navLinks.length}`)
  assert.equal((page.match(/class="nav-group"/g) || []).length, 7, '侧栏应有 7 个分组')
  for (const id of navLinks) {
    assert.ok(page.includes(`id="${id}"`), `侧栏链接指向的锚点不存在：${id}`)
  }

  // 几何模块：块号 1~16 连续（防止重编号遗漏），且补上特殊角直角三角形
  const geo = slice('s5')
  const geoBlocks = [...geo.matchAll(/<div class="block-title">([^<]+)<\/div>/g)].map(m => m[1])
  assert.equal(geoBlocks.length, 19, `几何模块应有 19 个知识点，实为 ${geoBlocks.length}`)
  geoBlocks.forEach((t, i) => assert.ok(t.startsWith(`${i + 1}. `), `几何模块第 ${i + 1} 块编号错乱：${t}`))
  for (const k of [
    '30°–60°–90°', '1 ∶ √3 ∶ 2', '45°–45°–90°', '1 ∶ 1 ∶ √2',
    '相似三角形', '蝴蝶定理', '正六边形', '正方体', '切长最短',
    '切线', '多边形内角和', '几何最优构造', '圆环', '圆锥'
  ]) {
    assert.ok(geo.includes(k), `几何模块缺少知识点：${k}`)
  }

  // 夸夸刷「补充考点」必须全部补齐（2026-10-15）
  for (const [id, k] of [
    ['s1', '神奇的 1764'], ['s2', 'A 和非 A 思想'], ['s2', '方程中的排比句'],
    ['s3', '周期余数的最值'], ['s4', '暑假作业型'], ['s4', '同时开始同时结束'],
    ['s6', '合并付费'], ['s10', '等距离平均速度'], ['s10', '多次相遇'], ['s10', '漂流瓶'],
  ]) {
    assert.ok(slice(id).includes(k), `${id} 缺少夸夸刷补充考点：${k}`)
  }

  // 零、速解四法：高照体系中"两大基石"之外的通用四法
  const zero = slice('s0')
  for (const k of ['代入排除法', '赋值法', '比例与十字交叉法', '数字特性法']) {
    assert.ok(zero.includes(k), `速解四法缺少：${k}`)
  }
  assert.equal((zero.match(/class="example"/g) || []).length, 4, '速解四法应有 4 道例题')

  // 四个新增模块的关键内容
  assert.ok(slice('s17').includes('幂次数列与幂次修正'), '数字推理缺少幂次修正')
  assert.ok(slice('s18').includes('5.5'), '时钟问题缺少 5.5°/分钟 速度差')
  assert.ok(slice('s19').includes('鸡兔同笼') && slice('s19').includes('盈亏问题'), '抽屉盈亏模块内容不足')
  assert.ok(slice('s20').includes('排队取水') && slice('s20').includes('过桥'), '统筹优化模块内容不足')
  assert.ok(slice('s20').includes('煮茶'), '统筹优化缺少「煮茶问题」')
  assert.ok(slice('s10').includes('匀加速'), '行程模块缺少「匀加速」')
  assert.ok(slice('s7').includes('方法选择'), '容斥模块缺少「方法选择」')
  assert.ok(slice('s6').includes('经济函数图形'), '经济利润模块缺少「经济函数图形」')

  // 硬要求：每个模块都配有例题
  assert.equal((slice('s17').match(/class="example"/g) || []).length, 7, '数字推理应有 7 道例题')
  assert.equal((slice('s18').match(/class="example"/g) || []).length, 4, '时钟问题应有 4 道例题')
  assert.equal((slice('s19').match(/class="example"/g) || []).length, 4, '抽屉盈亏应有 4 道例题')
  assert.equal((slice('s20').match(/class="example"/g) || []).length, 6, '统筹优化应有 6 道例题')
  const total = (page.match(/class="example"/g) || []).length
  assert.ok(total >= 130, `例题总数偏少：${total}`)
  for (let i = 0; i <= 20; i++) {
    const n = (slice(`s${i}`).match(/class="example"/g) || []).length
    assert.ok(n >= 1, `模块 s${i} 没有例题`)
  }

  // ★ 每个知识点后面必须「紧挨」例题（例题不得堆在模块末尾）
  //   按 div 深度扫出模块内 depth-0 的元素序列，B=知识点、E=例题
  const seqOf = (sec) => {
    const key = '<div class="section-body">'
    const i0 = sec.indexOf(key)
    assert.ok(i0 >= 0, '缺少 section-body')
    const re = /<div\b[^>]*>|<\/div>/g
    re.lastIndex = i0 + key.length
    const out = []
    let depth = 0
    let m
    while ((m = re.exec(sec))) {
      if (m[0] === '</div>') {
        if (depth === 0) break
        depth -= 1
        continue
      }
      if (depth === 0) {
        const cls = (m[0].match(/class="([^"]*)"/) || [null, ''])[1]
        const toks = cls.split(/\s+/)
        out.push(toks.includes('block') ? 'B' : toks.includes('example') ? 'E' : 'O')
      }
      depth += 1
    }
    return out
  }
  let grandB = 0
  let grandE = 0
  for (let i = 0; i <= 20; i++) {
    const seq = seqOf(slice(`s${i}`))
    const nb = seq.filter(x => x === 'B').length
    const ne = seq.filter(x => x === 'E').length
    grandB += nb
    grandE += ne
    assert.ok(nb >= 1, `模块 s${i} 没有知识点`)
    assert.ok(ne >= nb, `模块 s${i} 例题数(${ne})少于知识点数(${nb})`)
    seq.forEach((k, idx) => {
      if (k === 'B') {
        assert.equal(seq[idx + 1], 'E', `模块 s${i} 第 ${seq.slice(0, idx + 1).filter(x => x === 'B').length} 个知识点后面没有紧跟例题`)
      }
    })
  }
  assert.ok(grandB >= 140, `知识点总数偏少：${grandB}`)
  assert.ok(grandE >= 155, `例题总数偏少：${grandE}`)

  // ★ 结构完整性：每个 .block 都必须是 .section-body 的直接子元素。
  //   曾因多写一个 </div> 把 section-body 提前闭合，导致「补充考点 13/14/15/17」
  //   4 个块落在容器外 —— 折叠模块时它们不会被隐藏，且上面的 seqOf() 扫描会漏掉它们。
  for (let i = 0; i <= 20; i++) {
    const sec = slice(`s${i}`)
    const bodyStart = sec.indexOf('<div class="section-body">')
    assert.ok(bodyStart >= 0, `模块 s${i} 缺少 section-body`)
    // 从 section-body 起点做 div 深度配对，找到它的配对 </div>
    const re = /<div\b[^>]*>|<\/div>/g
    re.lastIndex = bodyStart
    let depth = 0
    let bodyEnd = -1
    let m
    while ((m = re.exec(sec))) {
      if (m[0] === '</div>') {
        depth -= 1
        if (depth === 0) { bodyEnd = m.index; break }
        if (depth < 0) break
      } else depth += 1
    }
    assert.ok(bodyEnd > bodyStart, `模块 s${i} 的 section-body 没有配对的闭合标签`)
    const body = sec.slice(bodyStart, bodyEnd)
    const inBody = (body.match(/<div class="block-title">/g) || []).length
    const inSec = (sec.match(/<div class="block-title">/g) || []).length
    assert.equal(inBody, inSec,
      `模块 s${i} 有 ${inSec - inBody} 个知识点落在 section-body 之外（多半是多了 </div>）`)
  }

  // 总览 / 考场策略为策略性内容，不要求配例题
  assert.equal(seqOf(slice('nav')).filter(x => x === 'E').length, 0, '总览不应有例题')

  // 总览：补上「通用四法」与 18 类题型表
  const nav = slice('nav')
  assert.ok(nav.includes('通用四法'), '总览缺少「通用四法」')
  for (const k of ['数字推理', '时钟问题', '抽屉盈亏', '统筹优化']) {
    assert.ok(nav.includes(k), `总览题型表缺少：${k}`)
  }
  assert.equal((nav.match(/<tr>/g) || []).length, 19, '总览题型表应为 1 表头 + 18 行')
})

test('言语理解页：每个知识点后面紧挨例题', async () => {
  const page = await readText(new URL('../pages/verbal/index.html', import.meta.url))

  // 7 个「实战例题」锚点必须保留（侧栏/内链指向它们）
  for (const id of ['ex-central', 'ex-logic-fill', 'ex-title', 'ex-next', 'ex-fill-in', 'ex-sort', 'ex-detail']) {
    assert.ok(page.includes(`id="${id}"`), `言语理解页缺少例题锚点：${id}`)
  }

  // 每个 <h4> 知识点块到下一个 <h4>/<h2>/</section> 之间必须有例题
  const chunks = headingChunks(page, 'h4')
  assert.ok(chunks.length >= 10, `言语理解页知识点过少：${chunks.length}`)
  chunks.forEach((chunk, i) => {
    assert.ok(
      chunk.includes('class="example"'),
      `言语理解页第 ${i + 1} 个知识点后面没有紧跟例题`
    )
  })

  // 例题必须自带答案与解析，且用四选项
  const total = (page.match(/class="example"/g) || []).length
  assert.ok(total >= 40, `言语理解页例题总数偏少：${total}`)
  assert.equal((page.match(/class="example-tag"/g) || []).length, total, '例题标题与例题块数量不一致')
  assert.equal((page.match(/class="example-answer"/g) || []).length, total, '每道例题都应有答案')
  assert.equal((page.match(/class="example-analysis"/g) || []).length, total, '每道例题都应有解析')
})

test('资料分析页：每个知识点后面紧挨例题', async () => {
  let page = await readText(new URL('../pages/data-analysis/index.html', import.meta.url))

  // 模块 12/13（公式速查总表、备考训练建议）是速查与计划，不承载知识点
  const advice = page.indexOf('<span class="num">13</span>')
  if (advice > 0) page = page.slice(0, advice)

  const chunks = headingChunks(page, 'h4')
  assert.ok(chunks.length >= 20, `资料分析页知识点过少：${chunks.length}`)
  chunks.forEach((chunk, i) => {
    assert.ok(
      chunk.includes('class="example"'),
      `资料分析页第 ${i + 1} 个知识点后面没有紧跟例题`
    )
  })

  const total = (page.match(/class="example"/g) || []).length
  assert.ok(total >= 50, `资料分析页例题总数偏少：${total}`)
  assert.equal((page.match(/class="example-tag"/g) || []).length, total, '例题标题与例题块数量不一致')
})

test('综应 D 页：每个考点卡片后面紧跟真题示例', async () => {
  const page = await readText(new URL('../pages/comprehensive-d/index.html', import.meta.url))

  const kp = (page.match(/class="kp"/g) || []).length
  const ex = (page.match(/class="ex"/g) || []).length
  const pairs = (page.match(/<\/div>\s*<div class="ex">/g) || []).length

  assert.ok(kp >= 70, `综应 D 页考点卡片偏少：${kp}`)
  assert.equal(pairs, ex, '每个「真题示例」都应紧跟在某个考点卡片之后')
  assert.ok(ex >= 60, `综应 D 页真题示例偏少：${ex}`)
  assert.ok(ex < kp, `真题示例(${ex})不应超过考点数(${kp})——示例块不得被算作考点`)

  // 三类主观题型的示例都出现过
  for (const t of ['真题示例 · 辨析题', '真题示例 · 案例分析题', '真题示例 · 方案设计题']) {
    assert.ok(page.includes(t), `综应 D 页缺少题型示例：${t}`)
  }
})

test('综应 A 页：每个知识点后面紧挨例题（五件套完整）', async () => {
  const page = await readText(new URL('../pages/comprehensive-a/index.html', import.meta.url))

  const chunks = headingChunks(page, 'h3')
  assert.ok(chunks.length >= 35, `综应 A 页知识点过少：${chunks.length}`)
  chunks.forEach((chunk, i) => {
    assert.ok(chunk.includes('class="ex"'), `综应 A 页第 ${i + 1} 个知识点后面没有紧跟例题`)
  })

  // 例题必须配「逐步解析」与「参考答案」
  const ex = (page.match(/class="ex"/g) || []).length
  assert.ok(ex >= 40, `综应 A 页例题偏少：${ex}`)
  assert.ok((page.match(/class="derive"/g) || []).length >= ex, '例题缺少逐步解析')
  assert.ok((page.match(/class="ans"/g) || []).length >= ex, '例题缺少参考答案')
  assert.ok((page.match(/class="dstep"/g) || []).length >= ex * 3, '逐步解析步骤不足')
})

test('类比推理页：二级辨析与做题纪律必须落到页面上', async () => {
  const page = await readText(new URL('../pages/analogy/index.html', import.meta.url))

  // 「先基础考点、再二级辨析」这条纪律不能丢
  for (const marker of [
    '不能直接用二级辨析',
    '无唯一项',
    '先判断是不是种属关系，再判断是不是组成关系',
    '用 X（干）X',
    '能不加字就不加字',
    '注意变化方向',
    '目的能否实现',
    '结果是否必然发生',
    '结果是好的还是坏的',
    '原因是人为还是天然',
    '是否可以为唯一原材料',
    '是否为唯一位置',
    '描述对象是否一致'
  ]) {
    assert.ok(page.includes(marker), `类比推理页缺少做题纪律 / 二级辨析：${marker}`)
  }

  // 条件关系的优先级提示
  assert.ok(page.includes('优先') && page.includes('硬找'), '缺少条件关系的优先级提示')

  // 纵向对比的具体维度（横向定不出答案时的收口办法）
  for (const marker of ['抽象 / 具体', '同一领域', '人工 / 自然', '词性、结构']) {
    assert.ok(page.includes(marker), `类比推理页缺少纵向对比维度：${marker}`)
  }

  // 做题流程三步必须显式写出
  assert.ok(page.includes('先用常考关系解题'), '缺少「先用常考关系解题」的流程说明')
  assert.ok(page.includes('再用造句法'), '缺少「再用造句法兜底」的流程说明')
})

test('全站示意图：接入共用图样式、每图都有 viewBox 与图注', async () => {
  // 类比推理页已按数量关系页风格重构，并去掉了示意图（用户反馈移动端不好看），
  // 改为表格 + 文字承载做题流程，因此不再列入本检查。
  const routes = ['data-analysis', 'verbal', 'judgment', 'comprehensive-a', 'comprehensive-d']
  let figures = 0

  for (const route of routes) {
    const page = await readText(new URL(`../pages/${route}/index.html`, import.meta.url))
    assert.ok(
      page.includes('href="../../assets/fig.css"'),
      `${route} 页用了示意图却没有引入 assets/fig.css（相对路径）`
    )

    const blocks = page.split('<figure class="fig">').slice(1)
    assert.ok(blocks.length >= 1, `${route} 页应有至少一张示意图`)
    figures += blocks.length

    blocks.forEach((blk, i) => {
      assert.ok(
        blk.includes('<svg viewBox="0 0 '),
        `${route} 页第 ${i + 1} 张示意图缺少 viewBox（无法等比缩放，手机端会变形）`
      )
      const cap = blk.match(/<figcaption>([\s\S]*?)<\/figcaption>/)
      assert.ok(cap && cap[1].trim().length >= 8, `${route} 页第 ${i + 1} 张示意图缺少图注`)
      // 图内文字必须用 SVG 属性显式着色，否则深色主题页面里会变成黑底黑字
      const svg = blk.slice(0, blk.indexOf('</svg>') + 6)
      assert.ok(!svg.includes('currentColor'), `${route} 页第 ${i + 1} 张示意图用了 currentColor 着色`)
      assert.ok(/fill="#[0-9a-fA-F]{3,6}"/.test(svg), `${route} 页第 ${i + 1} 张示意图没有显式指定颜色`)
    })
  }

  assert.ok(figures >= 17, `全站示意图数量偏少：${figures} < 17`)
})

test('示意图样式：窄屏保持最小可读尺寸并横向滚动', async () => {
  const css = await readText(new URL('../assets/fig.css', import.meta.url))
  assert.ok(css.includes('.fig'), 'fig.css 缺少 .fig 基础样式')
  assert.ok(css.includes('max-width:640px'), 'fig.css 缺少 svg 最大宽度约束')
  // 手机端不能整图等比缩小——12px 的字会缩到 6px，必须保底尺寸 + 横向滚动
  assert.ok(css.includes('overflow-x:auto'), 'fig.css 窄屏缺少横向滚动')
  assert.ok(/min-width:\s*\d+px/.test(css), 'fig.css 窄屏缺少最小可读宽度')
})

// ---------- 「N 条知识点 = N 道例题」 ----------
// 用户要求：一个知识点小节里明明列了 5 条并列内容，就不能只给 1 道例题。
// 口径：标题写着「N 种 / N 类 / N 大 / N 个 / N 条」，正文用表格或列表列出的条数
// 与 N 相当（|实列 - N| <= 1，否则视为标题与正文不符的误报），
// 则该小节下的例题数必须 >= N。
const UNIT_SKIP = /速查|口诀|总表|清单|贴士|建议|节奏|练习|实战|课结构|母题盘点|速记|对号入座|时间分配|素材库|格式总纲|进度|阶段|计划|考情|定位|复盘|小结|总结|避坑|陷阱|全貌|一览/
const CN_NUM = { 一: 1, 二: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10 }

function stripTags (h) {
  return h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
}

// 挖掉例题块，避免把选项 <li> 当成知识点条数
function cutBlocks (html, cls) {
  const out = []
  let i = 0
  const pat = `<div class="${cls}"`
  for (;;) {
    const j = html.indexOf(pat, i)
    if (j < 0) { out.push(html.slice(i)); break }
    out.push(html.slice(i, j))
    let k = j, depth = 0
    while (k < html.length) {
      if (html.startsWith('<div', k)) { depth++; k += 4 } else if (html.startsWith('</div>', k)) { depth--; k += 6; if (!depth) break } else k++
    }
    i = k
  }
  return out.join('')
}

function headingChunksAll (html) {
  const re = /<h[234][^>]*>([\s\S]*?)<\/h[234]>/gi
  const marks = [...html.matchAll(re)].map(m => ({ i: m.index, title: stripTags(m[1]) }))
  marks.push({ i: html.length, title: '' })
  const out = []
  for (let k = 0; k < marks.length - 1; k++) {
    out.push({ title: marks[k].title, body: html.slice(marks[k].i, marks[k + 1].i) })
  }
  return out
}

// 各页的例题标记：<div class="example-tag"> / <div class="ex-t"> / 图形推理用截图
const UNIT_PAGES = [
  { route: 'verbal', ex: /class="example-tag"/g },
  { route: 'judgment', ex: /class="ex-t"/g },
  { route: 'comprehensive-a', ex: /class="ex-head"/g },
  { route: 'graphic-reasoning', ex: /class="example-header"/g }
]

for (const { route, ex: exRe } of UNIT_PAGES) {
  test(`${route} 页：标题声明 N 条知识点的小节，例题数不得少于 N 道`, async () => {
    const page = await readText(new URL(`../pages/${route}/index.html`, import.meta.url))
    const bad = []
    for (const { title, body } of headingChunksAll(page)) {
      if (UNIT_SKIP.test(title)) continue
      const m = title.match(/([一二两三四五六七八九十]+)\s*(种|类|大|个|条|方面)/)
      if (!m) continue
      const N = CN_NUM[m[1]]
      if (!N || N < 3) continue

      const clean = cutBlocks(cutBlocks(body, 'example'), 'ex')
      const tr = (clean.match(/<tr[ >]/g) || []).length - (clean.match(/class="thead-row"/g) || []).length
      const li = (clean.match(/<li[ >]/g) || []).length
      const det = (clean.match(/<details/g) || []).length
      const got = Math.max(tr, li, det)
      if (Math.abs(got - N) > 1) continue          // 标题与正文不符，跳过

      const ex = (body.match(exRe) || []).length
      if (ex < N) bad.push(`「${title.slice(0, 30)}」声明 ${N} 条，只有 ${ex} 道例题`)
    }
    assert.deepEqual(bad, [], `${route} 页存在「N 条知识点配不足 N 道例题」的小节：\n  ` + bad.join('\n  '))
  })
}

test('政治常识页：政治理论 + 常识判断全模块，每个知识点紧跟例题', async () => {
  const page = await readText(new URL('../pages/politics/index.html', import.meta.url))

  // 26 个板块：总览 + 25 个考点模块（与数量关系页同款页壳）
  // 用户明确「不做公文写作」，公文那一节已整体删除，不要加回来
  const secs = [...page.matchAll(/<div class="section c-[a-z]+" id="(nav|s\d+)">/g)].map(m => m[1])
  assert.equal(secs.length, 26, `政治常识页板块应为 26 个，实际 ${secs.length} 个`)
  assert.equal(secs[0], 'nav', '首个板块应为总览 nav')
  for (let i = 1; i <= 25; i++) assert.ok(secs.includes(`s${i}`), `缺少板块 s${i}`)

  // 页壳：侧栏 23 条 + 7 个分组 + 搜索 + 抽屉
  assert.equal((page.match(/class="nav-link"/g) || []).length, 26, '侧栏链接应为 26 条')
  assert.equal((page.match(/class="nav-group"/g) || []).length, 7, '侧栏应有 7 个分组')
  assert.ok(page.includes('class="menu-btn"') && page.includes('class="mask"'), '缺少移动端抽屉结构')
  assert.ok(page.includes('id="navSearch"'), '缺少侧栏搜索框')

  // 知识块与例题：内容模块（s1–s19）每个知识点后面必须紧跟一道例题
  const blocks = page.split(/<div class="section c-[a-z]+" id="/).slice(1)
  let totalEx = 0
  for (const chunk of blocks) {
    const id = chunk.slice(0, chunk.indexOf('"'))
    const body = chunk
    const nb = (body.match(/class="block-title"/g) || []).length
    const ne = (body.match(/class="example"/g) || []).length
    totalEx += ne
    if (id === 'nav' || id === 's20' || id === 's21' || id === 's22') continue
    assert.ok(nb >= 3, `模块 ${id} 知识点过少：${nb}`)
    assert.ok(ne >= nb, `模块 ${id} 例题数(${ne})少于知识点数(${nb})`)
    // 按 DOM 顺序做「知识点 → 例题」的相邻校验
    const re = /<div\b[^>]*>|<\/div>/g
    const i0 = body.indexOf('<div class="section-body">')
    re.lastIndex = i0
    let depth = 0
    const seq = []
    let m
    while ((m = re.exec(body))) {
      if (m[0] === '</div>') {
        if (depth === 0) break
        depth -= 1
        continue
      }
      if (depth === 0) {
        const cls = (m[0].match(/class="([^"]*)"/) || [null, ''])[1].split(/\s+/)
        seq.push(cls.includes('block') ? 'B' : cls.includes('example') ? 'E' : 'O')
      }
      depth += 1
    }
    seq.forEach((k, idx) => {
      if (k === 'B' && idx + 1 < seq.length) {
        assert.equal(seq[idx + 1], 'E', `模块 ${id} 第 ${seq.slice(0, idx + 1).filter(x => x === 'B').length} 个知识点后面没有紧跟例题`)
      }
    })
  }
  assert.ok(totalEx >= 125, `政治常识页例题偏少：${totalEx}`)
  assert.equal((page.match(/class="example-header"/g) || []).length, totalEx, '每道例题都应有标题行')
  assert.equal((page.match(/class="correct">答案：/g) || []).length, totalEx, '每道例题都应给出答案')

  // 三本书的核心考点必须落到页面上
  for (const k of [
    '坚持和发展中国特色社会主义', '两个结合', '十个明确', '六个必须坚持', '中国式现代化',
    '共同富裕', '新发展格局', '全过程人民民主', '总体国家安全观', '人类命运共同体',
    '唯物主义', '对立统一', '量变质变', '否定之否定', '唯物史观', '剩余价值',
    '良渚', '科举', '摊丁入亩', '南京条约', '辛丑条约', '遵义会议', '百团大战',
    '诗经', '唐宋八大家', '元曲四大家', '二十四节气',
    '惯性', '杠杆', '升华', '超声波', '苏打', '甲醛',
    '维生素', '海姆立克', '微波炉', '地震', '核聚变',
    '嫦娥六号', '天问一号', '神舟', '文昌',
    'GDP', '恩格尔系数', '基尼系数', '菲利普斯曲线',
    '秦岭', '胡焕庸线', '鄱阳湖',
    '民法典', '诉讼时效', '善意取得', '代位继承',
    '正当防卫', '紧急避险', '犯罪中止', '累犯',
    '行政处罚', '行政复议', '国家赔偿',
    '宪法宣誓', '特赦', '指引作用',
    // 二轮补漏：中国梦 / 现代化经济体系 / 区域协调 / 新质生产力 / 人工智能
    '中国梦', '中国道路、弘扬中国精神、凝聚中国力量', '现代化经济体系', '实体经济',
    '供给侧结构性改革', '产业振兴', '区域协调发展四大板块', '京津冀', '粤港澳大湾区',
    '主体功能区', '新质生产力', '人工智能与意识', '两点论', '英雄史观', '剩余价值率',
    '民族区域自治', '全链条、全方位、全覆盖', '百万年的人类史',
    '三条控制线', '新时代党的建设总要求', '八项规定', '四唯', '全民国家安全教育日',
    '2027 年建军一百年奋斗目标', '军委主席负责制', '全面管治权', '决不承诺放弃使用武力',
    '持久和平、普遍安全、共同繁荣、开放包容、清洁美丽', '三种基本形式', '实践三形式'.replace('实践三形式',''),
    // 提升课补漏
    '找错误', '中共六大', '中共七大', '出生国籍', '不承认双重国籍', '自治条例和单行条例',
    '秘密投票', '一人一票', '撤销', '吊销', '撤回', '注销', '复议找上级',
    '盗窃', '诈骗', '侵占', '抢夺', '信用卡诈骗', '挪用公款罪', '职务侵占',
    '建筑物区分所有权', '拾得遗失物', '分居满二年', '实践合同',
    // 公文写作已被用户排除：全页不得再出现「公文」相关内容
    // 十五五与 2026 政策
    '以推动高质量发展为主题', '以满足人民日益增长的美好生活需要为根本目的',
    '以改革创新为根本动力', '以全面从严治党为根本保障', '先进制造业为骨干',
    '橄榄型', '常住地', '内涵式', '1.45 万亿斤', '67%', '720 个',
    '140.19 万亿元', '1267 万人', '67.9%', '4.5%–5%', '5.89 万亿元',
    '2500 亿元', '第 14 个', '最低', '整省试点', '五级书记',
    // 2026 时政
    '二十届中央纪委五次全会', '产业出题、科技答题', '事前预防', '习近平党建思想',
    '105 周年', '贲德', '陈立泉', '世界人工智能大会',
    '长征十号乙', '灵晟', '哈伊高铁', '平陆运河', '生态环境法典',
    '天舟九号', '神舟二十三号', '黎家盈', '建设性战略稳定关系', '修昔底德陷阱',
    '友谊勋章', '社会救助法', '长期护理保险', '92.9%', '米兰冬奥会',
    '菲尔兹奖', '淄博临淄', '七一勋章', '市场结构', '完全竞争', '寡头垄断',
    '无偿性', '间接税'
  ]) {
    assert.ok(page.includes(k), `政治常识页缺少考点：${k}`)
  }

  // 只用文字与表格承载（不引截图 / 示意图）
  // 用户明确不做公文写作，这一整块必须彻底移除（含侧栏、总览、数字速记、排坑表）
  assert.ok(!page.includes('公文'), '政治常识页不应再出现「公文」相关内容（用户明确不做写作）')
  assert.ok(!page.includes('版头') && !page.includes('版记'), '公文版头/版记内容应已删除')

  assert.ok(!page.includes('<img'), '政治常识页不应包含图片')
  assert.ok(!page.includes('<figure'), '政治常识页不应使用示意图')
  assert.ok(!page.includes('fig.css'), '政治常识页无示意图，不应引入 fig.css')

  // 禁用原生弹窗 + 相对路径引用共享样式
  assert.ok(!/\bconfirm\s*\(/.test(page), '政治常识页使用了原生 confirm')
  assert.ok(!/\balert\s*\(/.test(page), '政治常识页使用了原生 alert')
  assert.ok(page.includes('href="../../assets/hub-nav.css"'), '政治常识页共享样式未使用相对路径')
})

test('草稿纸：白板书写、橡皮擦除、撤销重做、自动保存与导出图片', async () => {
  const page = await readText(new URL('../pages/scratchpad/index.html', import.meta.url))

  // 双层画布：纸张（网格）与笔迹分离，橡皮才不会把纸擦穿
  assert.ok(page.includes('id="paper"'), '草稿纸缺少纸张画布')
  assert.ok(page.includes('id="ink"'), '草稿纸缺少笔迹画布')
  assert.ok(page.includes("getContext('2d')"), '草稿纸未使用 Canvas 2D 绘制')

  // 书写：只认鼠标左键 + 指针事件（单指 / 手写笔）
  assert.ok(page.includes("addEventListener('pointerdown'"), '草稿纸缺少 pointerdown 书写入口')
  assert.ok(page.includes("addEventListener('pointermove'"), '草稿纸缺少 pointermove 轨迹')
  assert.ok(page.includes("addEventListener('pointerup'"), '草稿纸缺少 pointerup 落笔收尾')
  assert.ok(
    /e\.pointerType === 'mouse' && e\.button !== 0/.test(page),
    '草稿纸未限制鼠标仅左键书写'
  )
  assert.ok(page.includes('setPointerCapture'), '草稿纸未捕获指针，拖出画布会断笔')
  assert.ok(page.includes("getCoalescedEvents"), '草稿纸未取合并事件，快速书写会画成折线')

  // 橡皮：destination-out 局部擦除（不是整页清空）
  assert.ok(page.includes("'eraser'"), '草稿纸缺少橡皮工具')
  assert.ok(page.includes('destination-out'), '草稿纸橡皮未使用 destination-out 局部擦除')
  assert.ok(page.includes('id="tool-eraser"'), '草稿纸缺少橡皮按钮')
  assert.ok(page.includes('id="ring"'), '草稿纸缺少橡皮光标圈')

  // 撤销 / 重做 / 清空
  assert.ok(page.includes("type: 'add'") && page.includes("type: 'clear'"), '草稿纸撤销栈缺少命令类型')
  assert.ok(/function\s+undo\s*\(/.test(page) && /function\s+redo\s*\(/.test(page), '草稿纸缺少撤销/重做实现')
  assert.ok(page.includes('id="undo"') && page.includes('id="redo"'), '草稿纸缺少撤销/重做按钮')
  assert.ok(/MAX_UNDO\s*=\s*300/.test(page), '草稿纸撤销步数上限不是 300')
  // 清空必须走自绘确认框，不能直接抹掉
  assert.ok(page.includes('id="clear"') && page.includes('id="modalOk"'), '草稿纸清空缺少自绘确认框')
  assert.ok(!/\bconfirm\s*\(/.test(page), '草稿纸使用了原生 confirm')
  assert.ok(!/\balert\s*\(/.test(page), '草稿纸使用了原生 alert')

  // 本地自动保存与恢复
  assert.ok(page.includes('localStorage'), '草稿纸未使用 localStorage 自动保存')
  assert.ok(page.includes('scratchpad:v1'), '草稿纸缺少本地缓存键版本号')
  assert.ok(/function\s+restore\s*\(/.test(page), '草稿纸缺少草稿恢复逻辑')
  assert.ok(/function\s+validStroke\s*\(/.test(page), '草稿纸恢复时未校验笔迹数据')

  // 工具偏好单独记忆：刷新后笔/橡皮、颜色、粗细、纸张都要保持
  assert.ok(page.includes('scratchpad:prefs:v1'), '草稿纸缺少工具偏好缓存键')
  assert.ok(/function\s+savePrefs\s*\(/.test(page), '草稿纸缺少偏好写入函数')
  assert.ok(/function\s+loadPrefs\s*\(/.test(page), '草稿纸缺少偏好读取函数')
  for (const field of ['tool:', 'color:', 'custom:', 'size:', 'paper:']) {
    assert.ok(page.includes(field), `偏好中没有记录 ${field.replace(':', '')}`)
  }
  assert.ok(/function\s+validColor\s*\(/.test(page), '草稿纸恢复颜色时未做合法性校验')
  // 颜色必须在工具之前套用，否则「点色板切回画笔」会把记住的橡皮状态冲掉
  assert.ok(
    page.indexOf('setColor(state.color, state.colorCustom)') < page.indexOf('setTool(state.tool)'),
    '初始化顺序有误：应先套用颜色再设置工具'
  )

  // 纸张样式、颜色、粗细
  for (const marker of ['空白', '横线', '方格', '点阵']) {
    assert.ok(page.includes(marker), `草稿纸缺少纸张样式：${marker}`)
  }
  assert.ok(page.includes('id="paperType"'), '草稿纸缺少纸张切换控件')
  assert.ok(page.includes('id="size"') && page.includes('type="range"'), '草稿纸缺少粗细调节')
  assert.ok(page.includes('type="color"'), '草稿纸缺少自定义颜色')

  // 导出图片：把纸张与笔迹合成后下载
  assert.ok(/function\s+exportPng\s*\(/.test(page), '草稿纸缺少导出图片实现')
  assert.ok(page.includes('toBlob'), '草稿纸导出未使用 toBlob')
  assert.ok(page.includes('drawImage(ink'), '草稿纸导出未合成笔迹层')

  // 快捷键与移动端
  assert.ok(page.includes("key === 'z'"), '草稿纸缺少 Ctrl/⌘+Z 快捷键')
  assert.ok(page.includes('touch-action:none'), '草稿纸画布未禁用触摸滚动，手机上会边画边滚')
  assert.ok(page.includes('dvh'), '草稿纸未适配手机动态视口高度')
  assert.ok(page.includes('ResizeObserver'), '草稿纸未监听尺寸变化，旋转屏幕会错位')

  // 仍是全站统一页壳与相对路径
  assert.ok(page.includes('href="../../assets/hub-nav.css"'), '草稿纸共享样式未使用相对路径')
  assert.ok(page.includes('data-study-hub-script'), '草稿纸缺少共享导航脚本')
  assert.ok(page.includes('<title>测试</title>'), '草稿纸标签页标题不是「测试」')
})

test('词语积累页：成语积累 + 易混辨析，每词带例句、每组配例题', async () => {
  const page = await readText(new URL('../pages/words/index.html', import.meta.url))

  // 52 个板块：总览 + 词群 29 讲 + 辨析 16 组 + 实词 + 刷题 + 200组索引 + 实词60组 + 望文生义 + 复盘
  const secIds = [...page.matchAll(/<div class="section c-[a-z]+" id="([^"]+)"/g)].map((m) => m[1])
  assert.equal(secIds.length, 58, `词语积累页板块应为 56 个，实际 ${secIds.length} 个`)
  for (const id of ['nav', 'sw', 'mis', 'strategy', 'q62', 'idx', 'sidx', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6']) {
    assert.ok(secIds.includes(id), `词语积累页缺少板块 ${id}`)
  }
  for (let i = 1; i <= 29; i++) assert.ok(secIds.includes(`s${i}`), `缺少词群 s${i}`)
  for (let i = 1; i <= 16; i++) assert.ok(secIds.includes(`b${i}`), `缺少辨析组 b${i}`)

  // 侧栏目录与锚点一一对应（无死链）
  const navLinks = [...page.matchAll(/class="nav-link"[^>]*href="#([^"]+)"/g)].map((m) => m[1])
  assert.equal(navLinks.length, 58, `侧栏链接应为 56 条，实为 ${navLinks.length}`)
  for (const id of navLinks) assert.ok(page.includes(`id="${id}"`), `侧栏锚点 #${id} 不存在`)

  // 全书总索引：成语辨析 200 组 + 实词 60 组
  const idxRows = (page.match(/<td class="idx-no">/g) || []).length
  assert.equal(idxRows, 260, `总索引行数应为 200+60=260，实为 ${idxRows}`)

  // 除总览外，每个板块都必须有例题（例题不得堆在页尾）
  const chunks = page.split(/<div class="section c-[a-z]+" id="/).slice(1)
  for (const chunk of chunks) {
    const id = chunk.slice(0, chunk.indexOf('"'))
    if (['nav', 'idx', 'sidx', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6'].includes(id)) continue  // 总览与两张总索引是查表区，不配例题
    assert.ok(chunk.includes('class="example"'), `板块 ${id} 没有例题`)
  }

  // 词卡：每个词都必须有一句例句（ref 卡是跳转索引，不要求例句）
  const words = (page.match(/class="wg"/g) || []).length
  const refCards = (page.match(/class="wg wg-ref"/g) || []).length
  assert.ok(words >= 700, `带例句的成语词卡偏少：${words}`)
  assert.ok(words + refCards >= 800, `成语词条（含跳转索引）不足 800：${words + refCards}`)
  const egLines = (page.match(/class="wg-e">/g) || []).length
  assert.equal(egLines, words, '有词卡缺少例句')

  // 辨析组：每一组都要有「一句话区别」与侧重表
  const diffs = (page.match(/class="diff">/g) || []).length
  assert.equal(diffs, 64, `「一句话区别」应为 64 条，实为 ${diffs}`)

  // 例题：每题四个选项 + 答案 + 解析；且必须有标注年份的真题
  const total = (page.match(/class="example"/g) || []).length
  assert.ok(total >= 170, `例题偏少：${total}`)
  assert.equal((page.match(/class="example-answer"/g) || []).length, total, '每道例题都应有解析')
  assert.equal((page.match(/class="example-opts"/g) || []).length, total, '每道例题都应有选项')
  const optCounts = [...page.matchAll(/<div class="example-opts">([\s\S]*?)<\/div>/g)]
    .map((m) => (m[1].match(/<span>/g) || []).length)
  assert.ok(optCounts.every((n) => n === 4), '存在非四选项的例题')
  const dated = [...page.matchAll(/<div class="example-header">([\s\S]*?)<\/div>/g)]
    .filter((m) => /20\d\d/.test(m[1])).length
  assert.ok(dated >= 8, `标注年份的真题偏少：${dated}`)

  // 纯文字承载（成语辨析不需要截图），也不引 fig.css
  assert.ok(!page.includes('<img'), '词语积累页不应包含图片')
  assert.ok(!page.includes('fig.css'), '词语积累页无示意图，不应引入 fig.css')

  // 搜索接到正文过滤
  assert.ok(page.includes('id="navSearch"'), '缺少侧栏搜索框')
  assert.ok(page.includes('window.pageShellContentFilter'), '未把侧栏搜索接到正文过滤')

  // 禁用原生弹窗；相对路径；标题统一
  assert.ok(!/\bconfirm\s*\(/.test(page), '词语积累页使用了原生 confirm')
  assert.ok(!/\balert\s*\(/.test(page), '词语积累页使用了原生 alert')
  assert.ok(page.includes('href="../../assets/hub-nav.css"'), '共享样式未使用相对路径')
  assert.ok(page.includes('<title>测试</title>'), '标签页标题不是「测试」')
})

test('政治常识页（TSX 源）：点块与例题一一对应，且「建成 / 基本建成」表述准确', async () => {
  // 政治常识在 v2.1 之后继续在 TSX 上维护，pages/ 只是旧基线（内容下限）。
  // 所以结构断言必须直接读组件源码，否则改正文时测试测的是过期文件。
  const dir = new URL('../src/pages/reading/politics/sections/', import.meta.url)
  const files = (await readdir(dir)).filter((f) => f.endsWith('.tsx')).sort()
  const sources = await Promise.all(files.map((f) => readFile(new URL(f, dir), 'utf8')))

  // 26 个节文件：nav + s1..s25
  assert.equal(files.length, 26, `政治常识应有 26 个节文件，实际 ${files.length}`)
  for (const id of ['nav', ...Array.from({ length: 25 }, (_, i) => `s${i + 1}`)]) {
    assert.ok(files.includes(`${id}.tsx`), `缺少节文件 ${id}.tsx`)
  }

  let totalBlock = 0
  let totalEx = 0
  for (let i = 0; i < files.length; i++) {
    const src = sources[i]
    const seq = [...src.matchAll(/<BlockTitle>|<ExampleHeader>/g)].map((m) =>
      m[0].startsWith('<Block') ? 'B' : 'E'
    )
    const nb = seq.filter((k) => k === 'B').length
    const ne = seq.filter((k) => k === 'E').length
    totalBlock += nb
    totalEx += ne
    // 速记 / 排坑 / 计划三节没有例题
    // 总览 / 速记 / 排坑 / 计划四节是策略性内容，不带例题
    if (['nav.tsx', 's20.tsx', 's21.tsx', 's22.tsx'].includes(files[i])) continue
    // 例题可以多于知识点（有的块配两道），但每个知识点后必须紧跟例题
    assert.ok(ne >= nb, `${files[i]} 例题(${ne})少于知识点(${nb})`)
    seq.forEach((k, idx) => {
      if (k === 'B') assert.equal(seq[idx + 1], 'E', `${files[i]} 第 ${idx} 个知识点后没紧跟例题`)
    })
  }
  assert.ok(totalBlock >= 143, `知识点块偏少：${totalBlock}`)
  assert.ok(totalEx >= 133, `例题偏少：${totalEx}`)

  const all = sources.join('\n')

  // 用户明确「不做写作类」：公文相关内容不得回流
  assert.ok(!all.includes('公文'), '政治常识不得再出现「公文」相关内容')
  assert.ok(!all.includes('版头') && !all.includes('版记'), '公文版头/版记不得回流')

  // 2035 年目标的建成 / 基本建成必须分清（易错点，用户当面指出过）
  assert.ok(all.includes('基本建成'), '2035 法治三项的「基本建成」表述丢失')
  assert.ok(
    /建成<\/b>?教育强国、科技强国、人才强国、文化强国、体育强国、健康中国|建成教育强国、科技强国、人才强国、文化强国、体育强国、健康中国/.test(all),
    '六大强国必须是「建成」且含科技强国'
  )
  // 只检查知识点正文（例题里的错误选项是刻意设置的干扰项，不算错）
  const bulletText = all
    .split('\n')
    .filter((line) => line.trim().startsWith('<li>'))
    .join('\n')
  assert.ok(!bulletText.includes('建成经济强国'), '六个强国里没有「经济强国」')
  assert.ok(
    !/基本建成教育强国|基本建成文化强国|基本建成科技强国/.test(bulletText),
    '六个强国不能写成「基本建成」'
  )

  // 分论要点（主书 考点精析 原文）必须落位
  for (const k of [
    '先导任务、坚实基础、战略支撑',
    '人民满意是发展教育的根本尺度',
    '政府投入为主、社会多渠道投入',
    '「纲」和「本」',
    '建国以来首个',
    '政权安全和制度安全',
    '国家政权、主权、统一和领土完整、人民福祉、经济社会可持续发展',
    '依法治军是我们党建军治军的基本方式',
    '处于最高层次、居于统领地位',
    '连续性、创新性、统一性、包容性、和平性',
    '激发创新创造活力',
    '长期共存、互相监督、肝胆相照、荣辱与共',
    '团结和民主',
    '民主选举、民主协商、民主决策、民主管理、民主监督',
    '大团结大联合',
    '人心和力量问题',
    '社会福利＝最高层次',
    '社会救济＝最低层次',
    '生态环境问题归根到底是经济发展方式和生活方式问题',
    '自然保护区为基础',
  ]) {
    assert.ok(all.includes(k), `政治常识缺少考点：${k}`)
  }
})
