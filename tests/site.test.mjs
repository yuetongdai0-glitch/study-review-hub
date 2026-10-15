import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
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
  { route: 'vocab', title: '综应A 规范词速查' }
]

/**
 * 阅读型科目页（带左上角共享侧栏目录）。
 * exam-grid / choice-quiz 是练习工具（答题纸 / 答题卡），全屏单页布局，不适用侧栏目录。
 */
const shellPages = pages.filter((p) => !['exam-grid', 'choice-quiz'].includes(p.route))

/**
 * 侧栏目录锚点由页面脚本在运行时生成的页面：
 * 这类页的锚点无法在源码里直接搜到，因此改为校验「锚点形态 + 生成代码」。
 */
const runtimeAnchorPages = {
  analogy: {
    pattern: /^#(hero|g-(principle|logic|common|language|sentence)|e-(principle|logic|common|language|sentence)-\d+)$/,
    generator: ['id="g-\' + g.id + \'"', "'e-' + g.id + '-' + i"]
  },
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
  const home = await readText(new URL('../index.html', import.meta.url))

  for (const page of pages) {
    assert.match(home, new RegExp(`href=["']\\./pages/${page.route}/["']`))
    assert.ok(home.includes(page.title), `首页缺少科目：${page.title}`)
  }
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

test('全站所有页面的标签页标题统一为「测试」', async () => {
  // 首页 + 全部子页面
  const files = ['../index.html', ...pages.map((p) => `../pages/${p.route}/index.html`)]

  for (const rel of files) {
    const page = await readText(new URL(rel, import.meta.url))

    assert.ok(
      page.includes('<title>测试</title>'),
      `${rel} 的标签页标题不是「测试」`
    )
    // 页面内不得动态改写 document.title，否则切换分类/视图时标题会变
    assert.ok(
      !/document\.title\s*=/.test(page),
      `${rel} 存在改写 document.title 的代码，标签页标题会变化`
    )
  }
})

test('类比推理页具备考点体系、板块筛选与文字化积累', async () => {
  const page = await readText(new URL('../pages/analogy/index.html', import.meta.url))

  // 四大板块与核心内容标记
  for (const marker of [
    '核心原则', '先横后纵', '先整体后局部', '常态思维',
    '全同关系', '全异关系', '种属关系', '交叉关系', '顺承关系', '因果关系', '目的关系', '条件关系',
    '功能关系', '组成关系', '加工关系', '命名方式', '特征关系', '职业关系', '位置关系', '依据关系',
    '释义关系', '指代', '词句结构', '造句法', '近反义'
  ]) {
    assert.ok(page.includes(marker), `类比推理页缺少考点：${marker}`)
  }

  // 五个板块分组（核心原则 / 逻辑关系 / 经验常识 / 言语关系 / 造句法）
  const groups = page.match(/id:'(principle|logic|common|language|sentence)'/g) || []
  assert.ok(groups.length === 5, `类比推理页分组应为 5 组，实际 ${groups.length} 组`)

  // 类比推理全程用文字呈现（无复杂图案，截图反而看不清）——
  // 因此不应再引用任何例题截图
  assert.ok(
    !page.includes('note-img/analogy'),
    '类比推理页仍在引用截图，应全部转为文字'
  )
  assert.ok(!page.includes('<img'), '类比推理页不应包含图片')
  // 关键常识积累必须落到文字
  for (const kw of ['属相 : 生肖', '岳父 : 泰山', '领头雁 : 领导者', '巾帼', '干戈', '矛盾全异积累']) {
    assert.ok(page.includes(kw), `类比推理页缺少文字化积累：${kw}`)
  }

  // 搜索：搜索框已并入共享页壳侧栏，并同时过滤正文考点
  assert.ok(page.includes('id="navSearch"'), '类比推理页缺少（侧栏）搜索框')
  assert.ok(
    page.includes('window.pageShellContentFilter'),
    '类比推理页未把侧栏搜索接到正文过滤'
  )
  // 跳到「默认收起」的分组内的考点前，应先自动展开该分组
  assert.ok(
    page.includes("g.dataset.open = 'true'"),
    '类比推理页缺少「跳转前自动展开分组」的处理'
  )

  // 禁用原生弹窗（内嵌环境会阻塞主线程）
  assert.ok(!/\bconfirm\s*\(/.test(page), '类比推理页使用了原生 confirm')
  assert.ok(!/\balert\s*\(/.test(page), '类比推理页使用了原生 alert')

  // 相对路径引用共享样式
  assert.ok(page.includes('href="../../assets/hub-nav.css"'), '类比推理页共享样式未使用相对路径')
})

test('图形推理页已按 91 页笔记补全三视图 / 立体拼合等内容', async () => {
  const page = await readText(new URL('../pages/graphic-reasoning/index.html', import.meta.url))

  // 补齐的内容（按 91 页笔记逐节核对后新增）
  for (const marker of [
    '三视图', '截面', '立体拼合', '相邻比较', '出题形式', '俄罗斯方块', '公共边',
    '旋转', '翻转', '时针法', '箭头法', '宫格', '走到头', '平面拼合', '黑白面',
    '外部轮廓定方向', '优先考虑不旋转', '找最大或最抽象',
    '加减同异', '黑白运算', '标记', '对称性', '曲直性', '图形间关系',
    '面数量', '线数量', '点数量', '角数量', '元素', '笔画',
    '折纸', '思维导图串讲'
  ]) {
    assert.ok(page.includes(marker), `图形推理页缺少补充内容：${marker}`)
  }

  // 全部 11 个章节锚点（对应笔记 8 必修 + 2 选修 + 思维导图）
  for (const sec of [
    'sec-position', 'sec-style', 'sec-marker', 'sec-property', 'sec-quantity',
    'sec-relation', 'sec-blackwhite', 'sec-space', 'sec-view', 'sec-solid',
    'sec-xuanxiu', 'sec-daotu', 'sec-strategy'
  ]) {
    assert.ok(page.includes(`id="${sec}"`), `图形推理页缺少章节：${sec}`)
  }

  // ★ 每个章节都必须有例题（用户明确要求"全面"）
  const secs = page.split(/<section id="/).slice(1)
  for (const chunk of secs) {
    const id = chunk.slice(0, chunk.indexOf('"'))
    if (!/^sec-(style|marker|property|quantity|relation|blackwhite|space|view|solid|xuanxiu|daotu|position)$/.test(id)) continue
    const figures = (chunk.split('data-zoom').length - 1)
    assert.ok(figures > 0, `章节 ${id} 没有例题`)
  }

  // ★ 全页例题必须统统是「自绘图」，不得残留笔记截图
  //   （用户 2026-10-15 明确要求：不用截图，风格要统一）
  assert.ok(
    !page.includes('note-img/graph/'),
    '图形推理页仍引用笔记截图，应全部换成自绘 SVG'
  )
  assert.ok(!/<img[^>]*src="[^"]*\.webp"/.test(page), '图形推理页仍存在 webp 截图')

  const figs = (page.match(/class="ex-figure"/g) || []).length
  assert.ok(figs >= 80, `图形推理页自绘图偏少，仅 ${figs} 张`)

  // ★ 每一张知识点卡都必须至少配一张自绘图（讲解用文字，图只画图形）
  const cards = page.split('<div class="card" data-id="').slice(1)
  assert.ok(cards.length >= 55, `图形推理页卡片偏少：${cards.length}`)
  cards.forEach((c, i) => {
    const id = c.slice(0, c.indexOf('"'))
    assert.ok(c.includes('class="ex-figure"'), `卡片 ${id} 没有自绘图`)
  })

  // ★ 例题必须是静态 HTML（含题干 / 选项 / 解析），不能再靠 JS 生成
  assert.ok(!page.includes('var EXAMPLES'), '图形推理页仍在使用 JS 生成例题')
  assert.ok(!page.includes('class="ex-fig"'), '图形推理页仍残留 ASCII 字符画图框')
  assert.ok((page.match(/class="ex-a"/g) || []).length >= 30, '图形推理页例题的「解析」偏少')

  // 每张自绘图都必须带 viewBox（等比缩放）、aria-label（可访问）与 SVG 显式着色的文字
  const svgBlocks = page.split('<svg ').slice(1)
  assert.ok(svgBlocks.length >= 80, `自绘 SVG 数量偏少：${svgBlocks.length}`)
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

test('判断推理页补充了「论证评价」模块（综应 C 类）', async () => {
  const page = await readText(new URL('../pages/judgment/index.html', import.meta.url))

  // 模块锚点与七节
  assert.ok(page.includes('id="argue"'), '判断推理页缺少论证评价模块')
  for (const sec of ['arg-intro', 'arg-struct', 'arg-4', 'arg-12', 'arg-3type', 'arg-diff', 'arg-real']) {
    assert.ok(page.includes(`id="${sec}"`), `论证评价缺少小节：${sec}`)
  }

  // 四大官方错误类型
  for (const t of ['概念不明确', '判断不准确', '推理不严密', '论据不充分']) {
    assert.ok(page.includes(t), `论证评价缺少错误类型：${t}`)
  }

  // 12 类逻辑谬误
  for (const f of [
    '以偏概全', '不当类比', '滑坡谬误', '偷换概念', '转移话题', '诉诸无知',
    '诉诸权威', '自相矛盾', '强加因果', '因果倒置', '绝对表述', '非黑即白'
  ]) {
    assert.ok(page.includes(f), `论证评价缺少谬误：${f}`)
  }

  // 三大题型
  for (const k of ['考查逻辑错误', '两面验证', '论证过程的理解']) {
    assert.ok(page.includes(k), `论证评价缺少题型：${k}`)
  }

  // 真题与 A/B 作答格式
  assert.ok(page.includes('历年真题演练'), '论证评价缺少真题演练')
  assert.ok((page.match(/存在论证错误/g) || []).length >= 3, '论证评价真题缺少 A 处作答')
  assert.ok(page.includes('再生水') && page.includes('转基因'), '论证评价缺少真题素材')

  // 谬误卡片与侧栏
  assert.ok((page.match(/class="flaw"/g) || []).length >= 12, '谬误卡片不足 12 张')
  assert.ok(page.includes('模块四 · 论证评价'), '缺少模块四标题')

  // 论证评价模块内部不得使用表格（用户明确要求改卡片式）
  const m4 = page.slice(page.indexOf('<section id="argue">'), page.indexOf('<!-- ============ 口诀速记卡'))
  assert.ok(!m4.includes('<table'), '论证评价模块内不应使用表格')

  // 每个小类都必须有定义 + 例子（15 个小类）
  for (const cls of [
    '偷换概念', '转移论题', '稻草人谬误',
    '过度推断', '可能推必然', '自相矛盾',
    '强加因果', '因果倒置', '单因谬误', '类比谬误', '选择性论证', '平均数谬误',
    '论据错误', '以偏概全', '诉诸情感'
  ]) {
    assert.ok(m4.includes(cls), `论证评价缺少小类：${cls}`)
  }
  const subs = (m4.match(/class="sub-item"/g) || []).length
  assert.ok(subs >= 15, `小类条目不足（${subs}），每个小类都应有定义和例子`)
  const evids = (m4.match(/class="si-e"/g) || []).length
  assert.ok(evids >= 15, `小类例子不足（${evids}）`)
  assert.ok(m4.includes('class="bigcat"'), '四大类应使用卡片容器')

  // 4.3 开头概述必须直接点名四类 + 给出「四大类速览」，省得读者往下翻
  const leadIdx = m4.indexOf('题干若给出错误类型提示')
  assert.ok(leadIdx > 0, '4.3 缺少开头概述')
  const lead = m4.slice(leadIdx, leadIdx + 260)
  for (const n of ['概念不明确', '判断不准确', '推理不严谨', '论据不充分']) {
    assert.ok(lead.includes(n), `4.3 开头概述未点出四类之一：${n}`)
  }
  assert.ok(m4.includes('class="bc-overview"'), '4.3 开头应有「四大类速览」')
  assert.equal((m4.match(/class="bc-ov"/g) || []).length, 4, '四大类速览应为 4 张卡')
  // 速览里要能看到小类归属（不用往下翻就知道 15 小类各属哪类）
  const ov = m4.slice(m4.indexOf('class="bc-overview"'), m4.indexOf('class="bigcat"'))
  for (const s of ['偷换概念', '自相矛盾', '平均数谬误', '以偏概全']) {
    assert.ok(ov.includes(s), `四大类速览未列出小类：${s}`)
  }
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
  assert.equal(geoBlocks.length, 16, `几何模块应有 16 个知识点，实为 ${geoBlocks.length}`)
  geoBlocks.forEach((t, i) => assert.ok(t.startsWith(`${i + 1}. `), `几何模块第 ${i + 1} 块编号错乱：${t}`))
  for (const k of [
    '30°–60°–90°', '1 ∶ √3 ∶ 2', '45°–45°–90°', '1 ∶ 1 ∶ √2',
    '相似三角形', '蝴蝶定理', '正六边形', '正方体'
  ]) {
    assert.ok(geo.includes(k), `几何模块缺少知识点：${k}`)
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

  // 硬要求：每个模块都配有例题
  assert.equal((slice('s17').match(/class="example"/g) || []).length, 7, '数字推理应有 7 道例题')
  assert.equal((slice('s18').match(/class="example"/g) || []).length, 4, '时钟问题应有 4 道例题')
  assert.equal((slice('s19').match(/class="example"/g) || []).length, 4, '抽屉盈亏应有 4 道例题')
  assert.equal((slice('s20').match(/class="example"/g) || []).length, 5, '统筹优化应有 5 道例题')
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
  assert.ok(grandB >= 126, `知识点总数偏少：${grandB}`)
  assert.ok(grandE >= 134, `例题总数偏少：${grandE}`)
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

test('类比推理页：每个考点后面紧挨示例（知识点自带 eg）', async () => {
  const page = await readText(new URL('../pages/analogy/index.html', import.meta.url))

  // 顶层考点共 28 个（核心原则 3 + 逻辑关系 8 + 经验常识 8 + 言语关系 7 + 造句法 2），
  // 每个都必须在同一条目内自带 eg（示例），不能再有"只讲关系不给例子"的考点
  const groups = page.match(/id:'(principle|logic|common|language|sentence)'/g) || []
  assert.equal(groups.length, 5, `类比推理页分组应为 5 组，实际 ${groups.length} 组`)

  const eg = (page.match(/\beg:/g) || []).length
  assert.ok(eg >= 28, `类比推理页带示例的考点不足：${eg} < 28`)

  // 每个 eg 都必须带「示例」标签，方便读者一眼看到例子
  const labelled = (page.match(/eg:'<span class="lbl">示例<\/span>/g) || []).length
  assert.ok(labelled >= 20, `带「示例」标签的考点偏少：${labelled}`)
})

test('全站示意图：接入共用图样式、每图都有 viewBox 与图注', async () => {
  const routes = ['data-analysis', 'verbal', 'judgment', 'comprehensive-a', 'comprehensive-d', 'analogy']
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

  assert.ok(figures >= 18, `全站示意图数量偏少：${figures} < 18`)
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
  { route: 'graphic-reasoning', ex: /data-zoom/g }
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
