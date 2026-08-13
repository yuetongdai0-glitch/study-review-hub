import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

/**
 * 该实体用于描述源复习文件与站点路由之间的一一对应关系。
 */
const pages = [
  { source: '刘义恒图推复习手册.html', route: 'graphic-reasoning', title: '图形推理 3+3 体系' },
  { source: '综应D类复习.html', route: 'comprehensive-d', title: '综应 D 类' },
  { source: '花生十三言语理解复习笔记.html', route: 'verbal', title: '言语理解与表达' },
  { source: '高照数量关系知识点复习.html', route: 'quantitative', title: '数量关系' },
  { source: '超格程意判断推理知识图谱.html', route: 'judgment', title: '判断推理知识图谱' },
  { source: '花生十三资料分析知识点复习.html', route: 'data-analysis', title: '资料分析' }
]

/**
 * 读取 UTF-8 文本文件。
 * @param {string} path 文件绝对路径。
 * @returns {Promise<string>} 文件文本。
 */
function readText(path) {
  return readFile(path, 'utf8')
}

test('首页包含全部六份复习资料的有效路由', async () => {
  const home = await readText(new URL('../index.html', import.meta.url))

  for (const page of pages) {
    assert.match(home, new RegExp(`href=["']\\./pages/${page.route}/["']`))
    assert.ok(home.includes(page.title), `首页缺少科目：${page.title}`)
  }
})

test('每个复习页接入共享导航且保留完整源文件内容', async () => {
  for (const page of pages) {
    const sourcePath = `/Users/a1/Desktop/zl/${page.source}`
    const deployedPath = new URL(`../pages/${page.route}/index.html`, import.meta.url)
    const [source, deployed] = await Promise.all([readText(sourcePath), readText(deployedPath)])

    assert.ok(deployed.includes('data-study-hub-style'), `${page.title} 缺少导航样式`)
    assert.ok(deployed.includes('data-study-hub-script'), `${page.title} 缺少导航脚本`)

    // 只剔除两条明确的注入标签，剩余文本必须与源文件逐字相同。
    const restored = deployed
      .replace('  <link data-study-hub-style rel="stylesheet" href="../../assets/hub-nav.css">\n', '')
      .replace('  <script data-study-hub-script src="../../assets/hub-nav.js"></script>\n', '')

    assert.equal(restored, source, `${page.title} 的原始内容发生了变化`)
  }
})

test('共享导航声明六个科目，并支持返回总览', async () => {
  const navigation = await readText(new URL('../assets/hub-nav.js', import.meta.url))

  assert.ok(navigation.includes('../../index.html'), '共享导航缺少返回总览链接')
  for (const page of pages) {
    // 共享导航通过配置数组生成相对链接，因此校验路由配置而非运行时模板结果。
    assert.ok(navigation.includes(`route: '${page.route}'`), `共享导航缺少路由：${page.route}`)
  }
})
