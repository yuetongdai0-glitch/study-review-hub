/**
 * 手机端验收：390 / 768 两档视口下检查溢出、示意图横向滚动与工具栏换行。
 *
 * 用法：node tools/smoke-mobile.mjs [baseUrl]
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(here, '../.smoke')
const base = process.argv[2] ?? 'http://127.0.0.1:8771/study-review-hub'

const ROUTES = ['/', '/quantitative', '/graphic-reasoning', '/politics', '/vocab', '/tools/scratchpad', '/tools/exam-grid']
const VIEWPORTS = [
  { name: '390x844', width: 390, height: 844 },
  { name: '768x1024', width: 768, height: 1024 },
]

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const port = 9335
const profile = `/tmp/study-hub-mobile-${Date.now()}`
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

await mkdir(outDir, { recursive: true })
const { targetId } = await send('Target.createTarget', { url: 'about:blank' })
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true })
await send('Page.enable', {}, sessionId)
await send('Runtime.enable', {}, sessionId)

const report = []

for (const viewport of VIEWPORTS) {
  await send(
    'Emulation.setDeviceMetricsOverride',
    {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: 2,
      mobile: viewport.width < 500,
    },
    sessionId,
  )

  for (const route of ROUTES) {
    await send('Page.navigate', { url: `${base}${route}` }, sessionId)
    await sleep(1100)

    const state = await send(
      'Runtime.evaluate',
      {
        expression: `(() => {
          const doc = document.documentElement;
          const overflow = doc.scrollWidth - doc.clientWidth;
          // 示意图横向滚动：只认「overflow-x 允许滚动且内容超出」的块，
          // SVG 内部的 viewBox 坐标系不算滚动（它的 scrollWidth 恒大于 clientWidth）。
          const scrollers = Array.from(document.querySelectorAll('.fig, .fig-row, figure, .mini-table, table'))
            .filter((el) => {
              const style = getComputedStyle(el);
              const scrollable = /(auto|scroll)/.test(style.overflowX);
              return scrollable && el.scrollWidth - el.clientWidth > 2;
            })
            .map((el) => el.className || el.tagName);
          // 表格是否溢出
          const tables = Array.from(document.querySelectorAll('table'))
            .filter((el) => el.scrollWidth - el.clientWidth > 2).length;
          const toolbar = document.querySelector('[class*="flex-wrap"]');
          return {
            overflow,
            figScrollers: scrollers.slice(0, 3),
            overflowingTables: tables,
            textLength: (document.getElementById('root')?.innerText || '').length,
            toolbarHeight: toolbar ? Math.round(toolbar.getBoundingClientRect().height) : 0,
          };
        })()`,
        returnByValue: true,
      },
      sessionId,
    )

    const value = state.result.value
    report.push({ viewport: viewport.name, route, ...value })

    if (route === '/' || route === '/tools/scratchpad' || route === '/quantitative') {
      const shot = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
      const name = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-')
      await writeFile(join(outDir, `mobile-${viewport.name}-${name}.png`), Buffer.from(shot.data, 'base64'))
    }
  }
}

const problems = report.filter(
  (item) => item.overflow > 0 || item.figScrollers.length > 0 || item.overflowingTables > 0,
)

console.log(JSON.stringify(report, null, 2))
console.log(`\n溢出问题：${problems.length} 处`)
if (problems.length > 0) console.log(JSON.stringify(problems, null, 2))

await send('Target.closeTarget', { targetId })
ws.close()
chrome.kill('SIGTERM')
await sleep(300)
process.exit(0)
