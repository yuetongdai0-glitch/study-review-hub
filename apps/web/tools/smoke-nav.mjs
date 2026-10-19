/**
 * 导航入口验收：设置必须在头部/底部固定可见，不用滚到列表末尾。
 *
 * 覆盖：
 * 1. 浮动面板：设置与「返回总览」同一行，且点在面板顶部附近。
 * 2. 点设置能打开弹层。
 * 3. 侧栏：章节很多时（政治 26 节），底部动作区仍固定可见。
 *
 * 用法：node tools/smoke-nav.mjs [baseUrl]
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(here, '../.smoke')
const base = process.argv[2] ?? 'http://127.0.0.1:8776/study-review-hub'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const port = 9341
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
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true }, sessionId)

const report = {}

/* ---------- 浮动面板 ---------- */
await send('Page.navigate', { url: `${base}/` }, sessionId)
await sleep(1600)
await evaluate(`document.querySelector('.study-hub-trigger')?.click()`, sessionId)
await sleep(500)

report.floating = await evaluate(
  `(() => {
    const panel = document.querySelector('.study-hub-panel');
    const settings = document.querySelector('.study-hub-settings');
    const home = document.querySelector('.study-hub-home');
    if (!panel || !settings) return { found: false };
    const p = panel.getBoundingClientRect();
    const s = settings.getBoundingClientRect();
    return {
      found: true,
      sameRowAsHome: Math.abs(s.top - home.getBoundingClientRect().top) < 6,
      settingsTopGap: Math.round(s.top - p.top),
      insideViewport: s.top >= 0 && s.bottom <= window.innerHeight,
      panelScrollTop: Math.round(panel.scrollTop),
      settingsText: settings.textContent.trim(),
    };
  })()`,
  sessionId,
)

const shot = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
await writeFile(join(outDir, 'nav-settings-header.png'), Buffer.from(shot.data, 'base64'))

/* ---------- 点设置打开弹层 ---------- */
await evaluate(`document.querySelector('.study-hub-settings')?.click()`, sessionId)
await sleep(700)
report.settingsOpens = await evaluate(
  `({ open: Boolean(document.querySelector('.hub-settings')), panelClosed: document.querySelector('.study-hub-shell')?.dataset.open })`,
  sessionId,
)
await evaluate(`document.querySelector('.ant-modal-close')?.click()`, sessionId)
await sleep(300)

/* ---------- 侧栏底部动作区 ---------- */
await send('Page.navigate', { url: `${base}/politics` }, sessionId)
await sleep(1700)

report.sidebar = await evaluate(
  `(() => {
    const bar = document.querySelector('.sb-actions');
    const sidebar = document.querySelector('.sidebar');
    if (!bar || !sidebar) return { found: false };
    sidebar.scrollTop = 0;
    const b = bar.getBoundingClientRect();
    const s = sidebar.getBoundingClientRect();
    return {
      found: true,
      sections: document.querySelectorAll('.sidebar .nav-link').length,
      visibleWithoutScroll: b.top < window.innerHeight && b.bottom <= window.innerHeight + 1,
      insideSidebar: b.bottom <= s.bottom + 1,
      position: getComputedStyle(bar).position,
      buttons: Array.from(bar.querySelectorAll('button, a')).map((el) => el.textContent.trim()),
    };
  })()`,
  sessionId,
)

const shot2 = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
await writeFile(join(outDir, 'sidebar-actions.png'), Buffer.from(shot2.data, 'base64'))

console.log(JSON.stringify(report, null, 2))

await send('Target.closeTarget', { targetId })
ws.close()
chrome.kill('SIGTERM')
await sleep(200)
process.exit(0)
