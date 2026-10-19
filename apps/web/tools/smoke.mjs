/**
 * 渲染验收：用 CDP 打开每个路由，收集控制台错误与布局溢出，并截图。
 *
 * 用法：node tools/smoke.mjs [baseUrl]
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(here, '../.smoke')
const base = process.argv[2] ?? 'http://127.0.0.1:8771/study-review-hub'

/** 需要检查的路由。 */
const ROUTES = [
  '/',
  '/quantitative',
  '/graphic-reasoning',
  '/judgment',
  '/vocab',
  '/politics',
  '/words',
  '/tools/exam-grid',
  '/tools/choice-quiz',
  '/tools/scratchpad',
]

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

/**
 * 等一段时间。
 *
 * @param ms 毫秒。
 * @returns Promise。
 */
const sleep = (ms) => new Promise((resolveSleep) => setTimeout(resolveSleep, ms))

const port = 9333
const profile = `/tmp/study-hub-smoke-${Date.now()}`
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
  { stdio: 'ignore', detached: false },
)

/**
 * 等待调试端口就绪。
 *
 * @returns Promise<boolean>。
 */
async function waitForPort() {
  for (let i = 0; i < 40; i += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`)
      if (response.ok) return true
    } catch {
      // 还没起来。
    }
    await sleep(250)
  }
  return false
}

await waitForPort()
const versionInfo = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json()
const ws = new WebSocket(versionInfo.webSocketDebuggerUrl)
await new Promise((resolveOpen) => ws.addEventListener('open', resolveOpen, { once: true }))

let messageId = 0
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
 * @param method 方法名。
 * @param params 参数。
 * @param sessionId 会话 id。
 * @returns 结果。
 */
function send(method, params = {}, sessionId) {
  const id = ++messageId
  return new Promise((resolveSend, reject) => {
    pending.set(id, (data) => (data.error ? reject(new Error(data.error.message)) : resolveSend(data.result)))
    ws.send(JSON.stringify({ id, method, params, sessionId }))
  })
}

await mkdir(outDir, { recursive: true })

/* 新建一个页面并挂上调试会话。 */
const { targetId } = await send('Target.createTarget', { url: 'about:blank' })
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true })
await send('Page.enable', {}, sessionId)
await send('Runtime.enable', {}, sessionId)
await send('Network.enable', {}, sessionId)
await send('Network.setCacheDisabled', { cacheDisabled: true }, sessionId)

const results = []

for (const route of ROUTES) {
  events.length = 0
  await send('Page.navigate', { url: `${base}${route}` }, sessionId)
  await sleep(1400)

  // 读取页面状态：标题、文本长度、是否横向溢出、是否有 React 错误。
  const evaluated = await send(
    'Runtime.evaluate',
    {
      expression: `(() => {
        const errors = [];
        const root = document.getElementById('root');
        const overflow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
        return {
          title: document.title,
          textLength: (root?.innerText || '').length,
          overflow,
          h1: document.querySelector('h1')?.innerText || '',
          sections: document.querySelectorAll('.section, .card, .group').length,
          hasShell: Boolean(document.querySelector('.app-header')),
          rootChildren: root?.children.length ?? 0,
        };
      })()`,
      returnByValue: true,
    },
    sessionId,
  )

  const consoleErrors = events
    .filter((item) => item.method === 'Runtime.exceptionThrown')
    .map((item) => item.params?.exceptionDetails?.exception?.description?.slice(0, 200) ?? 'unknown')
  const networkFails = events
    .filter((item) => item.method === 'Network.loadingFailed')
    .map((item) => item.params?.errorText)

  const value = evaluated.result.value ?? {}
  results.push({ route, ...value, consoleErrors, networkFails: networkFails.slice(0, 3) })

  const shot = await send('Page.captureScreenshot', { format: 'png' }, sessionId)
  const name = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-')
  await writeFile(join(outDir, `${name}.png`), Buffer.from(shot.data, 'base64'))
}

console.log(JSON.stringify(results, null, 2))

await send('Target.closeTarget', { targetId })
ws.close()
chrome.kill('SIGTERM')
await sleep(300)
process.exit(0)
