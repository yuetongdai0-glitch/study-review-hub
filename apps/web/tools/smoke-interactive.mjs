/**
 * 交互验收：草稿纸能否真正画出笔迹、答题纸能否输入并在格子里显示。
 *
 * 用法：node tools/smoke-interactive.mjs [baseUrl]
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(here, '../.smoke')
const base = process.argv[2] ?? 'http://127.0.0.1:8771/study-review-hub'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const port = 9334
const profile = `/tmp/study-hub-interactive-${Date.now()}`

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const chrome = spawn(
  CHROME,
  [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    '--window-size=1440,1000',
    'about:blank',
  ],
  { stdio: 'ignore' },
)

for (let i = 0; i < 40; i += 1) {
  try {
    const response = await fetch(`http://127.0.0.1:${port}/json/version`)
    if (response.ok) break
  } catch {
    // 等待启动。
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

await mkdir(outDir, { recursive: true })
const { targetId } = await send('Target.createTarget', { url: 'about:blank' })
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true })
await send('Page.enable', {}, sessionId)
await send('Runtime.enable', {}, sessionId)

const report = {}

/* ---------- 草稿纸：真实指针画一笔 ---------- */
await send('Page.navigate', { url: `${base}/tools/scratchpad` }, sessionId)
await sleep(1600)

const inkBox = await send(
  'Runtime.evaluate',
  {
    expression: `(() => { const c = document.querySelectorAll('canvas')[1]; const r = c.getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height }; })()`,
    returnByValue: true,
  },
  sessionId,
)
const box = inkBox.result.value

await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: box.x + 200, y: box.y + 200, button: 'left', clickCount: 1 }, sessionId)
for (let i = 0; i < 24; i += 1) {
  await send(
    'Input.dispatchMouseEvent',
    { type: 'mouseMoved', x: box.x + 200 + i * 12, y: box.y + 200 + Math.sin(i / 3) * 40, button: 'left' },
    sessionId,
  )
  await sleep(16)
}
await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: box.x + 200 + 23 * 12, y: box.y + 200, button: 'left', clickCount: 1 }, sessionId)
await sleep(900)

const inkState = await send(
  'Runtime.evaluate',
  {
    expression: `(() => {
      const ink = document.querySelectorAll('canvas')[1];
      const ctx = ink.getContext('2d');
      const { width, height } = ink;
      const data = ctx.getImageData(0, 0, width, height).data;
      let painted = 0;
      for (let i = 3; i < data.length; i += 4) if (data[i] > 8) painted += 1;
      const raw = localStorage.getItem('scratchpad:v1');
      let strokes = 0;
      try { strokes = JSON.parse(raw).strokes.length } catch {}
      return { painted, strokes, hasArchive: Boolean(raw) };
    })()`,
    returnByValue: true,
  },
  sessionId,
)
report.scratchpad = inkState.result.value

const shotA = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
await writeFile(join(outDir, 'interactive-scratchpad.png'), Buffer.from(shotA.data, 'base64'))

/* 撤销一次，确认笔迹被清掉。 */
await send(
  'Input.dispatchKeyEvent',
  { type: 'keyDown', key: 'z', code: 'KeyZ', modifiers: 4, windowsVirtualKeyCode: 90 },
  sessionId,
)
await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'z', code: 'KeyZ', modifiers: 4, windowsVirtualKeyCode: 90 }, sessionId)
await sleep(600)

const afterUndo = await send(
  'Runtime.evaluate',
  {
    expression: `(() => {
      const ink = document.querySelectorAll('canvas')[1];
      const ctx = ink.getContext('2d');
      const data = ctx.getImageData(0, 0, ink.width, ink.height).data;
      let painted = 0;
      for (let i = 3; i < data.length; i += 4) if (data[i] > 8) painted += 1;
      return { painted };
    })()`,
    returnByValue: true,
  },
  sessionId,
)
report.scratchpadUndo = afterUndo.result.value

/* ---------- 答题纸：输入中文，检查格子渲染 ---------- */
await send('Page.navigate', { url: `${base}/tools/exam-grid` }, sessionId)
await sleep(1500)

await send(
  'Runtime.evaluate',
  {
    expression: `(() => {
      const ta = document.querySelector('textarea');
      ta.focus();
      const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set;
      setter.call(ta, '一、动之以情，拉近距离。二、晓之以理，讲清实情。');
      ta.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    })()`,
  },
  sessionId,
)
await sleep(700)

const gridState = await send(
  'Runtime.evaluate',
  {
    expression: `(() => {
      const cells = document.querySelectorAll('[aria-hidden="true"] > div');
      const visible = Array.from(cells).map((c) => c.textContent).filter(Boolean).join('');
      const raw = localStorage.getItem('exam-grid:v2');
      return { cellCount: cells.length, renderedText: visible.slice(0, 40), saved: Boolean(raw) };
    })()`,
    returnByValue: true,
  },
  sessionId,
)
report.examGrid = gridState.result.value

const shotB = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
await writeFile(join(outDir, 'interactive-exam-grid.png'), Buffer.from(shotB.data, 'base64'))

console.log(JSON.stringify(report, null, 2))

await send('Target.closeTarget', { targetId })
ws.close()
chrome.kill('SIGTERM')
await sleep(300)
process.exit(0)
