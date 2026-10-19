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

// 视口变量必须早于 React 首帧写入，避免移动端先按 100vh 渲染再跳到真实高度。
installViewportHeightSync()

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('未找到站点根节点 #root')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
