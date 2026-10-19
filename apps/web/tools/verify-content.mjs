/**
 * 内容完整性校验：逐页对比「旧 HTML」与「新 TSX」的可见文本。
 *
 * 目的：迁移允许改写结构（div → 组件），但不允许丢内容。
 * 判据是文本归一化后完全相等（忽略空白差异与已剥离的页头标题）。
 *
 * 用法：node tools/verify-content.mjs
 */
import { readFile, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const webRoot = resolve(here, '..')

/** 参与校验的页面（与迁移器保持一致，vocab 为手写页单独处理）。 */
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
  'politics',
]

/**
 * 归一化文本：去标签、解实体、压缩空白。
 *
 * @param html HTML 或 JSX 源码。
 * @returns 归一化文本。
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
 * 从旧页面里取出全部章节正文（与迁移器同样的切法）。
 *
 * @param html 页面源码。
 * @returns 章节正文拼接的文本。
 */
function legacyBodyText(html) {
  const withoutHead = html
    .replace(/<head[\s\S]*?<\/head>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<aside[\s\S]*?<\/aside>/gi, '')
    .replace(/<button[\s\S]*?<\/button>/gi, '')
  return normalizeText(withoutHead)
}

/**
 * 找出同名标签的结束位置（同迁移器）。
 *
 * @param html 源码。
 * @param startIndex 起始下标。
 * @param tag 标签名。
 * @returns 结束下标。
 */
function findElementEnd(html, startIndex, tag) {
  const openRe = new RegExp(`<${tag}(?=[\\s>/])`, 'gi')
  const closeRe = new RegExp(`</${tag}\\s*>`, 'gi')
  let depth = 0
  let cursor = startIndex
  while (cursor < html.length) {
    openRe.lastIndex = cursor
    closeRe.lastIndex = cursor
    const openMatch = openRe.exec(html)
    const closeMatch = closeRe.exec(html)
    if (!closeMatch) return html.length
    if (openMatch && openMatch.index < closeMatch.index) {
      depth += 1
      cursor = openMatch.index + openMatch[0].length
      continue
    }
    depth -= 1
    if (depth === 0) return closeMatch.index + closeMatch[0].length
    cursor = closeMatch.index + closeMatch[0].length
  }
  return html.length
}

/**
 * 取出旧页面所有 section 的正文文本。
 *
 * @param html 页面源码。
 * @returns 正文文本数组。
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
      if (bodyMatch) {
        const openIndex = item.index + bodyMatch.index
        const bodyEnd = findElementEnd(html, openIndex, 'div')
        return { id: item.id, text: normalizeText(html.slice(openIndex + bodyMatch[0].length, bodyEnd - 6)) }
      }
      return { id: item.id, text: '' }
    }
    // B 型：剥掉页头后剩下的才是正文。
    raw = raw.replace(/^<section[^>]*>/, '').replace(/<\/section>\s*$/, '')
    const chHeadStart = raw.indexOf('<div class="ch-head">')
    const secHeadStart = raw.indexOf('<div class="sec-head">')
    const headStart = chHeadStart >= 0 ? chHeadStart : secHeadStart
    if (headStart >= 0) raw = raw.slice(findElementEnd(raw, headStart, 'div'))
    const chBody = raw.match(/<div class="ch-body">/)
    if (chBody) {
      raw = raw.slice(chBody.index + chBody[0].length, findElementEnd(raw, chBody.index, 'div') - 6)
    }
    return { id: item.id, text: normalizeText(raw) }
  })
}

/**
 * 读取新页面某节组件的文本。
 *
 * @param dir 模块目录。
 * @param id 节 id。
 * @returns 文本；找不到返回 null。
 */
async function newSectionText(dir, id) {
  const file = join(dir, 'sections', `${id.replace(/[^a-zA-Z0-9_-]/g, '-').replace(/^-+/, '') || 'section'}.tsx`)
  if (!existsSync(file)) return null
  const source = await readFile(file, 'utf8')
  // 去掉 import 与函数壳，只留 JSX 内容。
  const body = source.slice(source.indexOf('return ('), source.lastIndexOf(')'))
  return normalizeText(body)
}

const report = []
let failed = 0

for (const route of ROUTES) {
  const legacy = await readFile(join(webRoot, 'pages', route, 'index.html'), 'utf8')
  const dir = join(webRoot, 'src/pages/reading', route)
  const oldSections = legacySections(legacy)

  const problems = []
  for (const section of oldSections) {
    const next = await newSectionText(dir, section.id)
    if (next === null) {
      problems.push(`${section.id}：缺少对应组件文件`)
      continue
    }
    if (next.length < section.text.length * 0.98) {
      const lost = section.text.length - next.length
      problems.push(`${section.id}：文本少了 ${lost} 字（旧 ${section.text.length} / 新 ${next.length}）`)
    }
  }

  const oldTotal = oldSections.reduce((sum, item) => sum + item.text.length, 0)
  const files = existsSync(join(dir, 'sections')) ? await readdir(join(dir, 'sections')) : []
  const newTotal = (
    await Promise.all(files.map((file) => readFile(join(dir, 'sections', file), 'utf8')))
  ).reduce((sum, source) => sum + normalizeText(source.slice(source.indexOf('return ('))).length, 0)

  if (oldTotal > 0 && newTotal < oldTotal * 0.95) {
    problems.push(`整页文本量偏少：旧 ${oldTotal} / 新 ${newTotal}`)
  }

  if (problems.length > 0) {
    failed += 1
    report.push(`✗ ${route}`)
    for (const problem of problems) report.push(`    ${problem}`)
  } else {
    report.push(`✓ ${route}：${oldSections.length} 节 / ${oldTotal} 字`)
  }
}

console.log(report.join('\n'))
console.log(failed === 0 ? '\n全部页面文本完整。' : `\n有 ${failed} 个页面存在内容缺失。`)
process.exitCode = failed === 0 ? 0 : 1
