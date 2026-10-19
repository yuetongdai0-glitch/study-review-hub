/**
 * 浮动导航验收：确认右下角按钮能展开面板、能跳到别的模块。
 *
 * 用法：node tools/smoke-nav.mjs [baseUrl]
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(here, '../.smoke')
const base = process.argv[2] ?? 'http://127.0.0.1:8772/study-review-hub'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const port = 9338
const profile = `/tmp/study-hub-nav-${Date.now()}`
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

await mkdir(outDir, { recursive: true })
const { targetId } = await send('Target.createTarget', { url: 'about:blank' })
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true })
await send('Page.enable', {}, sessionId)
await send('Runtime.enable', {}, sessionId)

const report = {}

await send('Page.navigate', { url: `${base}/quantitative` }, sessionId)
await sleep(1600)

/* 侧栏只应有当前模块的章节链接，不含别的科目。 */
const sidebarState = await send(
  'Runtime.evaluate',
  {
    expression: `(() => {
      const links = Array.from(document.querySelectorAll('.sidebar .nav-link'));
      return {
        count: links.length,
        titles: links.slice(0, 4).map((a) => a.textContent.trim().slice(0, 16)),
        hasOtherModules: links.some((a) => /图形推理|政治常识|词语积累/.test(a.textContent)),
        brand: document.querySelector('.sb-brand .t')?.textContent?.trim(),
      };
    })()`,
    returnByValue: true,
  },
  sessionId,
)
report.sidebar = sidebarState.result.value

/* 点右下角按钮，检查面板展开。 */
const trigger = await send(
  'Runtime.evaluate',
  {
    expression: `(() => {
      const btn = document.querySelector('.study-hub-trigger');
      if (!btn) return { found: false };
      const r = btn.getBoundingClientRect();
      return { found: true, x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), count: document.querySelectorAll('.study-hub-link').length };
    })()`,
    returnByValue: true,
  },
  sessionId,
)
report.trigger = trigger.result.value

if (trigger.result.value?.found) {
  await send(
    'Input.dispatchMouseEvent',
    { type: 'mousePressed', x: trigger.result.value.x, y: trigger.result.value.y, button: 'left', clickCount: 1 },
    sessionId,
  )
  await send(
    'Input.dispatchMouseEvent',
    { type: 'mouseReleased', x: trigger.result.value.x, y: trigger.result.value.y, button: 'left', clickCount: 1 },
    sessionId,
  )
  await sleep(500)

  const panel = await send(
    'Runtime.evaluate',
    {
      expression: `(() => {
        const shell = document.querySelector('.study-hub-shell');
        const list = document.querySelectorAll('.study-hub-link');
        const visible = list.length > 0 && getComputedStyle(document.querySelector('.study-hub-panel')).visibility !== 'hidden';
        return { open: shell?.dataset.open, linkCount: list.length, panelVisible: visible };
      })()`,
      returnByValue: true,
    },
    sessionId,
  )
  report.panel = panel.result.value

  const shot = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
  await writeFile(join(outDir, 'nav-open.png'), Buffer.from(shot.data, 'base64'))
}

console.log(JSON.stringify(report, null, 2))

await send('Target.closeTarget', { targetId })
ws.close()
chrome.kill('SIGTERM')
await sleep(200)
process.exit(0)
