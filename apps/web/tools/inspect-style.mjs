/**
 * 样式诊断：打印关键元素的计算样式与 DOM，用来定位「字号不对 / 多出元素」这类问题。
 *
 * 用法：node tools/inspect-style.mjs [url]
 */
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const here = dirname(fileURLToPath(import.meta.url))
const target = process.argv[2] ?? 'http://127.0.0.1:8772/study-review-hub/quantitative'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const port = 9336
const profile = `/tmp/study-hub-inspect-${Date.now()}`
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

const { targetId } = await send('Target.createTarget', { url: 'about:blank' })
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true })
await send('Page.enable', {}, sessionId)
await send('Runtime.enable', {}, sessionId)
await send('Page.navigate', { url: target }, sessionId)
await sleep(1800)

const result = await send(
  'Runtime.evaluate',
  {
    expression: `(() => {
      const pick = (el) => {
        if (!el) return null;
        const s = getComputedStyle(el);
        return {
          fontSize: s.fontSize,
          fontWeight: s.fontWeight,
          color: s.color,
          background: s.backgroundColor,
          padding: s.padding,
          borderRadius: s.borderRadius,
          display: s.display,
          width: Math.round(el.getBoundingClientRect().width) + 'px',
        };
      };
      const btn = document.querySelector('.menu-btn');
      const brand = document.querySelector('.sb-brand');
      const title = document.querySelector('.section-title');
      const icon = document.querySelector('.section-icon');
      const section = document.querySelector('.section');
      const shell = document.querySelector('.app-shell');
      return {
        titleText: title?.textContent?.trim().slice(0, 20),
        sectionTitle: pick(title),
        sectionIcon: pick(icon),
        section: pick(section),
        menuBtn: pick(btn),
        menuBtnVisible: btn ? getComputedStyle(btn).display !== 'none' : null,
        shellPadding: shell ? getComputedStyle(shell).paddingLeft : null,
        // 侧栏 accent 变量
        shellAccent: getComputedStyle(document.documentElement).getPropertyValue('--shell-accent'),
        moduleAccent: getComputedStyle(document.querySelector('.container') || document.body).getPropertyValue('--accent'),
        brandHtml: brand ? brand.innerHTML.slice(0, 200) : null,
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
