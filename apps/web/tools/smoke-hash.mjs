/**
 * Hash 路由验收：旧路径改写、深链接刷新、刷新后位置不漂移。
 *
 * 覆盖用户反馈的「进来一次、再点刷新就 ERR_FAILED」：
 * 现在地址应是 `/#/tools/scratchpad`，反复刷新都停在同一页。
 *
 * 用法：node tools/smoke-hash.mjs [baseUrl]
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(here, '../.smoke')
const base = process.argv[2] ?? 'http://127.0.0.1:8779/study-review-hub'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const port = 9345
const profile = `/tmp/study-hub-hash-${Date.now()}`
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

/* ---------- 1. 旧路径式链接应被改写成 hash ---------- */
await send('Page.navigate', { url: `${base}/tools/scratchpad` }, sessionId)
await sleep(2000)
report.legacyRewrite = await evaluate(
  `({
    href: location.href,
    hash: location.hash,
    hasCanvas: Boolean(document.querySelector('canvas')),
  })`,
  sessionId,
)

/* ---------- 2. 直接访问 hash 深链接 ---------- */
await send('Page.navigate', { url: `${base}/#/tools/scratchpad` }, sessionId)
await sleep(2000)
report.deepLink = await evaluate(
  `({ href: location.href, hasCanvas: Boolean(document.querySelector('canvas')), title: document.title })`,
  sessionId,
)

/* ---------- 3. 反复刷新 3 次，都应停在同一页且不报错 ---------- */
const refreshes = []
for (let round = 1; round <= 3; round += 1) {
  await send('Page.reload', { ignoreCache: false }, sessionId)
  await sleep(1800)
  const state = await evaluate(
    `({
      round: ${round},
      href: location.href,
      hash: location.hash,
      hasCanvas: Boolean(document.querySelector('canvas')),
      rootText: (document.getElementById('root')?.textContent || '').slice(0, 20),
      failed: /无法访问此网站|ERR_FAILED/.test(document.body?.innerText || ''),
    })`,
    sessionId,
  )
  refreshes.push(state)
}
report.refreshes = refreshes

/* ---------- 4. 从首页点进工具页，地址应是 hash ---------- */
await send('Page.navigate', { url: `${base}/` }, sessionId)
await sleep(1800)
await evaluate(
  `(() => {
    const link = Array.from(document.querySelectorAll('.subject')).find((el) => el.textContent.includes('草稿纸'));
    link?.click();
    return Boolean(link);
  })()`,
  sessionId,
)
await sleep(1600)
report.clickThrough = await evaluate(
  `({ href: location.href, hash: location.hash, hasCanvas: Boolean(document.querySelector('canvas')) })`,
  sessionId,
)

const shot = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
await writeFile(join(outDir, 'hash-scratchpad.png'), Buffer.from(shot.data, 'base64'))

console.log(JSON.stringify(report, null, 2))

await send('Target.closeTarget', { targetId })
ws.close()
chrome.kill('SIGTERM')
await sleep(200)
process.exit(0)
