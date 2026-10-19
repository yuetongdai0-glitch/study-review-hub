/**
 * App 产物验收：在「包根目录」下起服务，模拟 Capacitor 的 https://localhost。
 *
 * 这是本次事故的核心检查点：网页版 dist 的资源路径带 `/study-review-hub/` 前缀，
 * 放进 App 后全部 404，表现为样式丢失、内容不更新。
 * 这里逐个断言 CSS/JS 能加载、关键样式生效、HashRouter 能跳模块。
 *
 * 用法：node tools/smoke-app.mjs [baseUrl]
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(here, '../.smoke')
const base = process.argv[2] ?? 'http://127.0.0.1:8773'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const port = 9337
const profile = `/tmp/study-hub-app-${Date.now()}`
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const chrome = spawn(
  CHROME,
  [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    '--window-size=390,844',
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
const events = []
ws.addEventListener('message', (event) => {
  const data = JSON.parse(event.data)
  if (data.id && pending.has(data.id)) {
    pending.get(data.id)(data)
    pending.delete(data.id)
    return
  }
  events.push(data)
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
await send('Network.enable', {}, sessionId)

const report = {}

/* ---------- 首页 ---------- */
events.length = 0
await send('Page.navigate', { url: `${base}/index.html` }, sessionId)
await sleep(1800)

const home = await send(
  'Runtime.evaluate',
  {
    expression: `(() => {
      const sheet = document.querySelector('.sheet, .subject');
      const s = sheet ? getComputedStyle(sheet) : null;
      return {
        // 关键：CSS 有没有真正生效（侧栏深色底 / 卡片边框）
        bodyBg: getComputedStyle(document.body).backgroundColor,
        hasSubjectGrid: Boolean(document.querySelector('.subject-grid')),
        subjectCount: document.querySelectorAll('.subject').length,
        firstSubjectBg: s ? s.backgroundColor : null,
        rootHtmlLength: document.getElementById('root')?.innerHTML.length ?? 0,
        styleSheets: document.styleSheets.length,
      };
    })()`,
    returnByValue: true,
  },
  sessionId,
)
report.home = home.result.value
report.homeFailedRequests = events
  .filter((item) => item.method === 'Network.loadingFailed')
  .map((item) => item.params?.errorText)
report.home404 = events
  .filter((item) => item.method === 'Network.responseReceived' && item.params?.response?.status >= 400)
  .map((item) => `${item.params.response.status} ${item.params.response.url}`)

/* ---------- HashRouter 进入模块 ---------- */
events.length = 0
await send('Page.navigate', { url: `${base}/index.html#/quantitative` }, sessionId)
await sleep(1800)

const module = await send(
  'Runtime.evaluate',
  {
    expression: `(() => {
      const title = document.querySelector('.section-title');
      const sidebar = document.querySelector('.sidebar');
      const banner = document.querySelector('.banner');
      return {
        sectionCount: document.querySelectorAll('.section').length,
        firstTitle: title?.textContent?.trim().slice(0, 20) ?? null,
        sectionTitleFontSize: title ? getComputedStyle(title).fontSize : null,
        sidebarBg: sidebar ? getComputedStyle(sidebar).backgroundColor : null,
        bannerHeight: banner ? Math.round(banner.getBoundingClientRect().height) : 0,
        subLinks: document.querySelectorAll('.nav-link.sub').length,
      };
    })()`,
    returnByValue: true,
  },
  sessionId,
)
report.module = module.result.value
report.moduleFailedRequests = events
  .filter((item) => item.method === 'Network.loadingFailed')
  .map((item) => item.params?.errorText)
report.module404 = events
  .filter((item) => item.method === 'Network.responseReceived' && item.params?.response?.status >= 400)
  .map((item) => `${item.params.response.status} ${item.params.response.url}`)

const shot = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
await writeFile(join(outDir, 'app-module.png'), Buffer.from(shot.data, 'base64'))

/* ---------- 底部刷新按钮（App 内应走应用内更新） ---------- */
const refreshButton = await send(
  'Runtime.evaluate',
  {
    expression: `(() => {
      const btn = document.querySelector('.sb-actions button');
      return { text: btn?.textContent?.trim() ?? null, hasActions: Boolean(document.querySelector('.sb-actions')) };
    })()`,
    returnByValue: true,
  },
  sessionId,
)
report.refreshButton = refreshButton.result.value

console.log(JSON.stringify(report, null, 2))

await send('Target.closeTarget', { targetId })
ws.close()
chrome.kill('SIGTERM')
await sleep(200)
process.exit(0)
