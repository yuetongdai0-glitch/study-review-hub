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

  // 搜索与交互
  assert.ok(page.includes('id="q"'), '类比推理页缺少搜索框')

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

  // ★ 每个章节都必须有例题截图（用户明确要求"全面"）
  const secs = page.split(/<section id="/).slice(1)
  for (const chunk of secs) {
    const id = chunk.slice(0, chunk.indexOf('"'))
    if (!/^sec-(style|marker|property|quantity|relation|blackwhite|space|view|solid|xuanxiu|daotu|position)$/.test(id)) continue
    const figures = (chunk.split('data-zoom').length - 1)
    assert.ok(figures > 0, `章节 ${id} 没有例题截图`)
  }

  // 例题截图总量应达到全面覆盖
  const imgs = page.match(/note-img\/graph\/[\w.-]+\.webp/g) || []
  assert.ok(imgs.length >= 60, `图形推理页例题截图偏少，仅 ${imgs.length} 张`)
  assert.ok(page.includes('assets/note-img/graph/'), '图形推理页未引用笔记例题截图')

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
})
