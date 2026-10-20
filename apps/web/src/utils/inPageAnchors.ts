/**
 * 拦截页内锚点，改成平滑滚动。
 *
 * @remarks
 * 站点用 **HashRouter**，路由信息就存在 `#/xxx` 里。
 * 如果放任 `<a href="#s3">` 走浏览器默认行为，点击会直接把 hash 改成 `#s3`，
 * 路由被覆盖 → 页面跳到 404。正文里有大量这种锚点（例如词语页的 `#b1`），
 * 逐个改写不现实，所以在 document 上做一次事件委托统一拦截。
 *
 * 只拦「纯锚点」（`#foo`），`#/route` 这种交给路由器。
 */
export function installInPageAnchors(): void {
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented) return
    // 只处理左键单击，组合键（新标签打开）保持浏览器默认行为。
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

    const target = event.target
    const anchor = target instanceof Element ? target.closest('a[href^="#"]') : null
    if (!anchor) return

    const href = anchor.getAttribute('href') ?? ''
    // 路由型 hash 交给 HashRouter。
    if (href.startsWith('#/')) return

    const id = decodeURIComponent(href.slice(1))
    if (!id) return

    const node = document.getElementById(id)
    if (!node) return

    event.preventDefault()
    node.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // 焦点跟过去，键盘用户接着能用 Tab 继续。
    if (!node.hasAttribute('tabindex')) node.setAttribute('tabindex', '-1')
    node.focus({ preventScroll: true })
  })
}
