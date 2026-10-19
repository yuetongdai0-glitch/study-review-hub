import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'
import App from './App'
import './styles.css'
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
