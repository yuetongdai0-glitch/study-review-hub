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
  { route: 'data-analysis', title: '资料分析' },
  { route: 'comprehensive-a', title: '综应 A 类' },
  { route: 'exam-grid', title: '模拟考试答题纸' },
  { route: 'choice-quiz', title: '选择题答题卡' },
  { route: 'vocab', title: '综应A 规范词速查' }
]

/**
 * 读取 UTF-8 文本文件。
 * @param {string} path 文件绝对路径。
 * @returns {Promise<string>} 文件文本。
 */
function readText(path) {
  return readFile(path, 'utf8')
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

  // 搜索与复制两条交互路径
  assert.ok(page.includes('id="q"'), '规范词速查页缺少搜索框')
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
