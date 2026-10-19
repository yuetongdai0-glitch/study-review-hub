/**
 * 窄屏间距测量：打印卡片链路各层的 padding / margin，定位「内间距过大」的来源。
 *
 * 用法：node tools/measure-spacing.mjs [url]
 */
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const here = dirname(fileURLToPath(import.meta.url))
const target = process.argv[2] ?? 'http://127.0.0.1:8774/study-review-hub/politics'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const port = 9339
const profile = `/tmp/study-hub-space-${Date.now()}`
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const chrome = spawn(
  CHROME,
  [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
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

const { targetId } = await send('Target.createTarget', { url: 'about:blank' })
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true })
await send('Page.enable', {}, sessionId)
await send('Runtime.enable', {}, sessionId)
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true }, sessionId)
await send('Page.navigate', { url: target }, sessionId)
await sleep(1800)

const result = await send(
  'Runtime.evaluate',
  {
    expression: `(() => {
      const read = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const s = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return {
          padding: s.padding,
          margin: s.margin,
          width: Math.round(r.width),
          left: Math.round(r.left),
          right: Math.round(window.innerWidth - r.right),
        };
      };
      const box = document.querySelector('.key-box');
      const body = document.querySelector('.section-body');
      const sec = document.querySelector('.section');
      const bb = box ? box.getBoundingClientRect() : null;
      const sb = sec ? sec.getBoundingClientRect() : null;
      return {
        viewport: window.innerWidth,
        shell: read('.app-shell'),
        main: read('.shell-main'),
        container: read('.container'),
        scope: read('.legacy-politics'),
        section: read('.section'),
        sectionBody: read('.section-body'),
        keyBox: read('.key-box'),
        block: read('.block'),
        /* 内容到卡片边缘 / 卡片到屏幕边缘的实际像素 */
        textLeftGap: bb && sb ? Math.round(bb.left - sb.left) : null,
        cardToScreen: sb ? Math.round(sb.left) : null,
      };
    })()`,
    returnByValue: true,
  },
  sessionId,
)

console.log(JSON.stringify(result.result.value, null, 2))

await send('Target.closeTarget', { targetId })
ws.close()
chrome.kill('SIGTERM')
await sleep(200)
process.exit(0)
