/**
 * 首页栅格验收：逐卡输出 grid-column 计算值与实际位置，定位「一半卡片右边空着」。
 *
 * 用法：node tools/smoke-home-grid.mjs [baseUrl]
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(here, '../.smoke')
const base = process.argv[2] ?? 'http://127.0.0.1:8778/study-review-hub'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const port = 9344
const profile = `/tmp/study-hub-home-${Date.now()}`
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

await send('Page.navigate', { url: `${base}/` }, sessionId)
await sleep(2000)

const cards = await evaluate(
  `(() => {
    const grid = document.querySelector('.subject-grid');
    const gs = getComputedStyle(grid);
    const gw = grid.getBoundingClientRect();
    return {
      columns: gs.gridTemplateColumns,
      gap: gs.columnGap,
      gridWidth: Math.round(gw.width),
      cards: Array.from(document.querySelectorAll('.subject')).map((el, i) => {
        const s = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return {
          i: i + 1,
          order: el.querySelector('.subject-number')?.textContent?.trim(),
          title: el.querySelector('strong')?.textContent?.trim(),
          cls: el.className,
          span: s.gridColumn,
          left: Math.round(r.left),
          width: Math.round(r.width),
          height: Math.round(r.height),
          borderRight: s.borderRightWidth,
        };
      }),
    };
  })()`,
  sessionId,
)

console.log(JSON.stringify(cards, null, 2))

const shot = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
await writeFile(join(outDir, 'home-grid.png'), Buffer.from(shot.data, 'base64'))

await send('Target.closeTarget', { targetId })
ws.close()
chrome.kill('SIGTERM')
await sleep(200)
process.exit(0)
