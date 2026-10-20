/**
 * hash 路由下的锚点验收：点侧栏目录不能把路由冲掉。
 *
 * 用法：node tools/smoke-anchor.mjs [baseUrl]
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(here, '../.smoke')
const base = process.argv[2] ?? 'http://127.0.0.1:8779/study-review-hub'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const port = 9346
const profile = `/tmp/study-hub-anchor-${Date.now()}`
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const chrome = spawn(
  CHROME,
  [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    '--window-size=1440,900',
    'about:blank',
  ],
  { stdio: 'ignore' },
)

for (let i = 0; i < 40; i += 1) {
  try {
    if ((await fetch(`http://127.0.0.1:${port}/json/version`)).ok) break
  } catch {
    // 等启动。
  }
  await sleep(250)
}

const info = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json()
const ws = new WebSocket(info.webSocketDebuggerUrl)
await new Promise((r) => ws.addEventListener('open', r, { once: true }))

let id = 0
const pending = new Map()
ws.addEventListener('message', (event) => {
  const data = JSON.parse(event.data)
  if (data.id && pending.has(data.id)) {
    pending.get(data.id)(data)
    pending.delete(data.id)
  }
})

/**
 * 发送 CDP 命令。
 *
 * @param method 方法。
 * @param params 参数。
 * @param sessionId 会话。
 * @returns 结果。
 */
function send(method, params = {}, sessionId) {
  const next = ++id
  return new Promise((resolveSend, reject) => {
    pending.set(next, (data) => (data.error ? reject(new Error(data.error.message)) : resolveSend(data.result)))
    ws.send(JSON.stringify({ id: next, method, params, sessionId }))
  })
}

/**
 * 求值。
 *
 * @param expression 表达式。
 * @param sessionId 会话。
 * @returns 结果值。
 */
async function evaluate(expression, sessionId) {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }, sessionId)
  return result.result.value
}

await mkdir(outDir, { recursive: true })
const { targetId } = await send('Target.createTarget', { url: 'about:blank' })
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true })
await send('Page.enable', {}, sessionId)
await send('Runtime.enable', {}, sessionId)

const report = {}

/* 进入有侧栏目录的阅读页。 */
await send('Page.navigate', { url: `${base}/#/quantitative` }, sessionId)
await sleep(2200)

report.before = await evaluate(
  `({ href: location.href, hash: location.hash, links: document.querySelectorAll('.nav-link').length, scrollY: Math.round(scrollY) })`,
  sessionId,
)

/* 点第 5 个目录项：应滚动，但不改 hash、不跳 404。 */
report.afterClick = await evaluate(
  `(() => {
    const links = Array.from(document.querySelectorAll('.nav-link'));
    const target = links[4];
    if (!target) return { clicked: false };
    const id = target.getAttribute('href').slice(1);
    target.click();
    return { clicked: true, id };
  })()`,
  sessionId,
)
await sleep(1400)

report.after = await evaluate(
  `({
    href: location.href,
    hash: location.hash,
    scrollY: Math.round(scrollY),
    // 精确判断：用 404 页的标题，不能用宽泛的「404」——正文里有题目数字会误报。
    notFound: (document.body?.innerText || '').includes('没有这个页面'),
    heading: document.querySelector('.section-header')?.textContent?.trim().slice(0, 16) ?? null,
  })`,
  sessionId,
)

/* 正文里的纯锚点（词语页 #b1）同样不能冲掉路由。 */
await send('Page.navigate', { url: `${base}/#/words` }, sessionId)
await sleep(2000)
report.wordsBefore = await evaluate(`({ hash: location.hash })`, sessionId)
report.wordsAfter = await evaluate(
  `(() => {
    const a = document.querySelector('a[href="#b1"], a[href^="#b"]');
    if (!a) return { found: false };
    a.click();
    return { found: true, href: a.getAttribute('href') };
  })()`,
  sessionId,
)
await sleep(1200)
report.wordsState = await evaluate(
  `({ hash: location.hash, scrollY: Math.round(scrollY), stillWords: location.href.includes('/words') })`,
  sessionId,
)

/* 刷新后仍在同一路由。 */
await send('Page.reload', {}, sessionId)
await sleep(1800)
report.afterReload = await evaluate(`({ href: location.href, hash: location.hash })`, sessionId)

const shot = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
await writeFile(join(outDir, 'anchor-hash.png'), Buffer.from(shot.data, 'base64'))

console.log(JSON.stringify(report, null, 2))

await send('Target.closeTarget', { targetId })
ws.close()
chrome.kill('SIGTERM')
await sleep(200)
process.exit(0)
