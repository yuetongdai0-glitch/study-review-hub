import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'
import App from './App'
// 顺序很重要：先 Tailwind（含 base reset），再旧站样式（覆盖 reset 与骨架），
// 最后才是各模块懒加载进来的 module.css（旧页正文样式，特异性最高）。
import './styles.css'
import './styles/legacy-home.css'
import './styles/legacy-shell.css'
import './styles/legacy-hub-nav.css'
import { installViewportHeightSync } from './utils/viewportHeight'
import { installInPageAnchors } from './utils/inPageAnchors'
import { normalizeLegacyPath } from './router/legacyPath'

// 视口变量必须早于 React 首帧写入，避免移动端先按 100vh 渲染再跳到真实高度。
installViewportHeightSync()

/*
 * hash 路由下，页内 `<a href="#s3">` 会把路由 hash 覆盖成 `#s3`（直接 404）。
 * 用事件委托统一拦成平滑滚动，正文里成百上千个锚点就不用逐个改。
 */
installInPageAnchors()

/*
 * 必须早于 React 渲染：把 `/tools/scratchpad` 这类旧路径式链接
 * 改写成 `#/tools/scratchpad`，否则会先渲染首页再跳，闪一下。
 */
normalizeLegacyPath()

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('未找到站点根节点 #root')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
