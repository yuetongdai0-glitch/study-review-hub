/**
 * 设置面板与滚动行为验收。
 *
 * 覆盖：
 * 1. 从科目页返回总览时滚动位置归零（不回到上次位置）。
 * 2. 设置面板能打开，外观三档可切换，深色下正文变量真的变了。
 * 3.「重新加载页面」「重建整个应用」两个入口存在且可点。
 *
 * 用法：node tools/smoke-settings.mjs [baseUrl]
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(here, '../.smoke')
const base = process.argv[2] ?? 'http://127.0.0.1:8775/study-review-hub'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const port = 9340
const profile = `/tmp/study-hub-settings-${Date.now()}`
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

/* ---------- 1. 滚动位置：科目页滚动后返回总览 ---------- */
await send('Page.navigate', { url: `${base}/quantitative` }, sessionId)
await sleep(1800)
await evaluate('window.scrollTo(0, 3000)', sessionId)
await sleep(400)
const beforeBack = await evaluate('Math.round(window.scrollY)', sessionId)

/* 通过应用内链接返回总览（点侧栏「返回总览」），而不是直接改 URL。 */
await evaluate(`(() => {
  const link = document.querySelector('.sb-home');
  if (link) link.click();
  return Boolean(link);
})()`, sessionId)
await sleep(1200)
const homeTop = await evaluate(
  `({ path: location.pathname, scrollY: Math.round(window.scrollY), restoration: history.scrollRestoration })`,
  sessionId,
)
report.scrollBack = { beforeBack, ...homeTop }

/* ---------- 2. 设置面板 ---------- */
/* 首页没有侧栏，从右下角浮动面板进设置。 */
await evaluate(`document.querySelector('.study-hub-trigger')?.click()`, sessionId)
await sleep(400)
await evaluate(`document.querySelector('.study-hub-settings')?.click()`, sessionId)
await sleep(800)

const panel = await evaluate(
  `(() => {
    const modal = document.querySelector('.hub-settings');
    const actions = Array.from(document.querySelectorAll('.hub-settings-action strong')).map((el) => el.textContent.trim());
    const themes = Array.from(document.querySelectorAll('.hub-theme-item')).map((el) => el.textContent.trim());
    return { open: Boolean(modal), actions, themes, version: document.querySelector('.hub-settings-info dd')?.textContent?.trim() };
  })()`,
  sessionId,
)
report.settings = panel

const shotLight = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
await writeFile(join(outDir, 'settings-light.png'), Buffer.from(shotLight.data, 'base64'))

/* ---------- 3. 切到深色，确认变量真的变了 ---------- */
await evaluate(`(() => {
  const items = Array.from(document.querySelectorAll('.hub-theme-item'));
  const dark = items.find((el) => el.textContent.includes('深色'));
  dark?.click();
  return Boolean(dark);
})()`, sessionId)
await sleep(700)

const darkState = await evaluate(
  `(() => {
    const root = document.documentElement;
    return {
      hasDarkClass: root.classList.contains('dark'),
      theme: root.dataset.theme,
      bodyBg: getComputedStyle(document.body).backgroundColor,
      stored: localStorage.getItem('study-hub:theme'),
    };
  })()`,
  sessionId,
)
report.dark = darkState

const shotDark = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
await writeFile(join(outDir, 'settings-dark.png'), Buffer.from(shotDark.data, 'base64'))

/* ---------- 4. 深色下正文变量 ---------- */
await evaluate(`document.querySelector('.ant-modal-close')?.click()`, sessionId)
await sleep(300)
await send('Page.navigate', { url: `${base}/quantitative` }, sessionId)
await sleep(1600)

const articleDark = await evaluate(
  `(() => {
    const scope = document.querySelector('[class*="legacy-"]');
    if (!scope) return null;
    const s = getComputedStyle(scope);
    const sec = document.querySelector('.section');
    return {
      text: s.getPropertyValue('--text').trim(),
      cardBg: s.getPropertyValue('--card-bg').trim(),
      sectionBg: sec ? getComputedStyle(sec).backgroundColor : null,
      sectionColor: sec ? getComputedStyle(sec).color : null,
    };
  })()`,
  sessionId,
)
report.articleDark = articleDark

const shotArticle = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
await writeFile(join(outDir, 'dark-article.png'), Buffer.from(shotArticle.data, 'base64'))

/* 复原浅色，别把偏好留脏。 */
await evaluate(`localStorage.setItem('study-hub:theme','system')`, sessionId)

console.log(JSON.stringify(report, null, 2))

await send('Target.closeTarget', { targetId })
ws.close()
chrome.kill('SIGTERM')
await sleep(200)
process.exit(0)
