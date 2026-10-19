/**
 * 侧栏动作区验收（桌面宽度）：章节很多时，设置是否真的固定在可视区底部。
 *
 * 用法：node tools/smoke-sidebar.mjs [baseUrl]
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(here, '../.smoke')
const base = process.argv[2] ?? 'http://127.0.0.1:8776/study-review-hub'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const port = 9342
const profile = `/tmp/study-hub-side-${Date.now()}`
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

/* 政治 26 节：侧栏很长，正好检验 sticky。 */
await send('Page.navigate', { url: `${base}/politics` }, sessionId)
await sleep(1800)

report.top = await evaluate(
  `(() => {
    const bar = document.querySelector('.sb-actions');
    const sidebar = document.querySelector('.sidebar');
    if (!bar || !sidebar) return { found: false };
    sidebar.scrollTop = 0;
    const b = bar.getBoundingClientRect();
    const s = sidebar.getBoundingClientRect();
    return {
      sections: document.querySelectorAll('.sidebar .nav-link').length,
      sidebarScrollable: sidebar.scrollHeight > sidebar.clientHeight + 4,
      barTop: Math.round(b.top),
      barBottom: Math.round(b.bottom),
      sidebarBottom: Math.round(s.bottom),
      visible: b.bottom <= s.bottom + 1 && b.top >= s.top,
    };
  })()`,
  sessionId,
)

/* 滚到侧栏最底部，确认设置没有被内容挤走。 */
report.scrolled = await evaluate(
  `(() => {
    const bar = document.querySelector('.sb-actions');
    const sidebar = document.querySelector('.sidebar');
    sidebar.scrollTop = sidebar.scrollHeight;
    const b = bar.getBoundingClientRect();
    const s = sidebar.getBoundingClientRect();
    return {
      barTop: Math.round(b.top),
      barBottom: Math.round(b.bottom),
      sidebarBottom: Math.round(s.bottom),
      visible: b.bottom <= s.bottom + 1 && b.top >= s.top,
      // sticky 的关键：滚动前后位置差异应该很小
      drift: Math.round(Math.abs(b.bottom - s.bottom)),
    };
  })()`,
  sessionId,
)

const shot = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
await writeFile(join(outDir, 'sidebar-sticky.png'), Buffer.from(shot.data, 'base64'))

console.log(JSON.stringify(report, null, 2))

await send('Target.closeTarget', { targetId })
ws.close()
chrome.kill('SIGTERM')
await sleep(200)
process.exit(0)
