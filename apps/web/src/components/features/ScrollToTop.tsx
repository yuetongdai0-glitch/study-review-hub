import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * 路由切换时回到顶部。
 *
 * @returns 不渲染任何内容。
 * @remarks 两个要点：
 * 1. `history.scrollRestoration = 'manual'` —— 否则浏览器会「恢复」上次滚动位置，
 *    从科目页退回总览时会停在半截，看起来像跳错了地方。
 * 2. 只在 **pathname 变化** 时重置；页面内点章节锚点（`#s3`）不能抢滚动，
 *    那种情况交给浏览器自己定位。
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    // 带锚点时保留浏览器定位，只在切换页面时回顶。
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}
