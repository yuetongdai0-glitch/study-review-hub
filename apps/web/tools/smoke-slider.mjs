/**
 * 草稿纸笔宽控件验收：测量滑块的几何尺寸，并真实拖拽验证联动。
 *
 * 用法：node tools/smoke-slider.mjs [baseUrl]
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(here, '../.smoke')
const base = process.argv[2] ?? 'http://127.0.0.1:8778/study-review-hub'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const port = 9343
const profile = `/tmp/study-hub-slider-${Date.now()}`
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
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text)
  return result.result.value
}

await mkdir(outDir, { recursive: true })
const { targetId } = await send('Target.createTarget', { url: 'about:blank' })
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true })
await send('Page.enable', {}, sessionId)
await send('Runtime.enable', {}, sessionId)

const report = {}

await send('Page.navigate', { url: `${base}/tools/scratchpad` }, sessionId)
await sleep(2000)

/* 量滑块几何：轨道宽度、手柄尺寸、是否可见。 */
report.slider = await evaluate(
  `(() => {
    const root = document.querySelector('.ant-slider');
    const rail = document.querySelector('.ant-slider-rail');
    const handle = document.querySelector('.ant-slider-handle');
    const label = Array.from(document.querySelectorAll('span')).find((el) => /笔粗|粗细/.test(el.textContent));
    if (!root) return { found: false, label: label?.textContent ?? null };
    const r = root.getBoundingClientRect();
    const ra = rail ? rail.getBoundingClientRect() : null;
    const h = handle ? handle.getBoundingClientRect() : null;
    return {
      found: true,
      label: label?.textContent ?? null,
      rootWidth: Math.round(r.width),
      rootHeight: Math.round(r.height),
      railWidth: ra ? Math.round(ra.width) : null,
      railBg: rail ? getComputedStyle(rail).backgroundColor : null,
      handleSize: h ? [Math.round(h.width), Math.round(h.height)] : null,
      handleLeft: h ? Math.round(h.left) : null,
    };
  })()`,
  sessionId,
)

/* 真实拖拽：从手柄位置拖到轨道右端。 */
if (report.slider?.found) {
  const start = await evaluate(
    `(() => {
      const h = document.querySelector('.ant-slider-handle').getBoundingClientRect();
      const r = document.querySelector('.ant-slider-rail').getBoundingClientRect();
      return { x: Math.round(h.left + h.width / 2), y: Math.round(h.top + h.height / 2), railRight: Math.round(r.right) };
    })()`,
    sessionId,
  )

  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: start.x, y: start.y }, sessionId)
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: start.x, y: start.y, button: 'left', clickCount: 1 }, sessionId)
  await sleep(80)
  const targetX = start.railRight - 2
  for (let step = 1; step <= 6; step += 1) {
    await send(
      'Input.dispatchMouseEvent',
      { type: 'mouseMoved', x: Math.round(start.x + ((targetX - start.x) * step) / 6), y: start.y, button: 'left', buttons: 1 },
      sessionId,
    )
    await sleep(40)
  }
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: targetX, y: start.y, button: 'left', clickCount: 1 }, sessionId)
  await sleep(500)

  report.afterDrag = await evaluate(
    `(() => {
      const h = document.querySelector('.ant-slider-handle');
      const stored = JSON.parse(localStorage.getItem('scratchpad:prefs:v1') || 'null');
      return { handleLeft: Math.round(h.getBoundingClientRect().left), ariaValue: h.getAttribute('aria-valuenow'), storedSize: stored?.size ?? null };
    })()`,
    sessionId,
  )
}

const shot = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
await writeFile(join(outDir, 'scratchpad-slider.png'), Buffer.from(shot.data, 'base64'))

console.log(JSON.stringify(report, null, 2))

await send('Target.closeTarget', { targetId })
ws.close()
chrome.kill('SIGTERM')
await sleep(200)
process.exit(0)
