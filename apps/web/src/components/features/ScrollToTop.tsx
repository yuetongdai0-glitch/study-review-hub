import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * 每个页面路径记住自己的滚动位置。
 *
 * @remarks
 * 用户原话：「不要每次刷新或者锁屏后就回到顶部了 希望保留位置
 * 包括从这返回到总栏也是」「只是说不要滚动动画也不要有一帧的卡顿 要流畅」
 * 「也不要干预正常滚动行为」。
 *
 * 拆成三条互不干扰的规则：
 *
 * ① **同一个页面**（刷新、锁屏解锁、从别的页回来）→ 回到你刚才看的地方；
 * ② **换到另一个页面**（去总览、进另一个科目）→ 那个页面用自己的旧位置，
 *    它要是没看过就从顶部开始；
 * ③ **完全不碰浏览器自身的滚动**：不拦 wheel / touchmove、不改 `overflow`、
 *    不加 `scroll-behavior: smooth`。只有「确实需要换位置」时才 `scrollTo` 一次。
 *
 * 位置存在 sessionStorage（关掉标签页就清），按 `pathname` 分键 ——
 * 不同科目各记各的，互不覆盖。
 */

/** 存储键前缀。 */
const KEY_PREFIX = 'study-hub:scroll:'

/**
 * 读某路径上次的滚动位置。
 *
 * @param pathname 路由路径。
 * @returns 像素位置；没有记录时返回 -1（注意 0 是合法值）。
 */
function readPos(pathname: string): number {
  try {
    const raw = window.sessionStorage.getItem(KEY_PREFIX + pathname)
    if (raw === null) return -1
    const value = Number(raw)
    return Number.isFinite(value) && value >= 0 ? value : -1
  } catch {
    return -1
  }
}

/**
 * 写某路径的滚动位置。
 *
 * @param pathname 路由路径。
 * @param y 像素位置。
 * @returns 无返回。
 */
function writePos(pathname: string, y: number): void {
  try {
    window.sessionStorage.setItem(KEY_PREFIX + pathname, String(Math.round(y)))
  } catch {
    // 存不下就不记，最多是下次回到顶部，不值得打断。
  }
}

/**
 * 路由切换与刷新时保留滚动位置。
 *
 * @returns 不渲染任何内容。
 * @remarks
 * 以前这里在**每次 pathname 变化时无条件 `scrollTo(0,0)`**，
 * 还把 `history.scrollRestoration` 设成 `manual`（关掉浏览器自带的恢复），
 * 于是刷新、锁屏解锁、从科目页退回总览再进来，全都回到顶部 ——
 * 用户在政治常识这种长文里刚看到一半，一切换就白找了。
 *
 * 现在的行为：
 * - 首次进入（含刷新）→ 用该路径记录的位置；
 * - 路径变化 → 先存旧路径位置，再取新路径位置；
 * - 原地换锚点（`#s3`）→ **完全不插手**，交给浏览器的锚点定位；
 * - 全程 `behavior: 'instant'`，不做平滑动画，也不逐帧监听滚动
 *   （逐帧 `scrollTo` 才是"有一帧卡顿"的来源）。
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  /** 上一次的路径，用来判断"是原地锚点跳转"还是"真的换页了"。 */
  const lastPathRef = useRef<string | null>(null)
  /** 本页最近一次已知位置，用来在离开时落盘（避免逐帧写存储）。 */
  const lastYRef = useRef(0)

  /*
   * 恢复浏览器自带的滚动恢复。
   *
   * `manual` 是我们自己写的：它让浏览器不再按历史记录还原位置，
   * 而代码又只在 pathname 变化时归零 —— 「刷新」这条路径就没人管，必然回顶部。
   * 交回浏览器 + 自己按路径补记，两条路才都通。
   */
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'auto'
  }, [])

  /*
   * 记录滚动位置。
   *
   * 只在 `scroll` 里更新一个变量：**不写存储、不调用 scrollTo**。
   * 真正落盘发生在离开这一页时 —— 滚动过程零额外开销，不干扰正常滚动。
   *
   * ⚠️ 必须忽略「假 0」：
   * 草稿工作台、答题卡抽屉等浮层会给 `body` 加 `overflow: hidden`，
   * 那一刻 `window.scrollY` 会瞬间变成 0（页面暂时不可滚）。
   * 如果把这个 0 记下来，用户解锁/关闭浮层后回到正文就被扔回顶部 ——
   * 这正是「锁屏后就回到顶部」的另一条成因。
   * 判据：`scrollY === 0` 但文档其实很长（能滚）时，视为"不是用户滚到顶了"。
   */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y > 0) {
        lastYRef.current = y
        return
      }
      // y === 0：只有当页面本来就滚不动（内容比视口短）才算真的在顶部。
      const scrollable = document.documentElement.scrollHeight > window.innerHeight + 4
      if (!scrollable) lastYRef.current = 0
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const prev = lastPathRef.current
    lastPathRef.current = pathname

    // 离开上一页：把它的位置存下来。
    if (prev !== null && prev !== pathname) writePos(prev, lastYRef.current)

    /*
     * 带锚点：完全交给浏览器。
     * 用户点的是「跳到第 3 节」，我们再去 scrollTo 等于抢它的定位。
     */
    if (hash) return

    const saved = readPos(pathname)
    /*
     * 关键：**一次性**设到位，`behavior: 'instant'`。
     * 不用 `smooth`（用户明确说不要动画），也不做常驻 rAF 追赶 ——
     * 那会在首帧后再滚动一次，看起来就是一帧卡顿。
     */
    const target = saved > 0 ? saved : 0
    if (Math.abs(window.scrollY - target) > 1) {
      window.scrollTo({ top: target, left: 0, behavior: 'instant' as ScrollBehavior })
    }
    lastYRef.current = target

    /*
     * 长文内容可能还没渲染完，此时 scrollHeight 不够，scrollTo 会被夹小。
     * 补几次「内容够高了就重设」，最多 10 帧，且每帧只在确实偏离时才动手。
     * 这不是常驻轮询：到 10 帧或到位就停。
     */
    if (target > 0) {
      let tries = 0
      const settle = () => {
        if (tries >= 10) return
        tries += 1
        if (Math.abs(window.scrollY - target) <= 1) return
        if (document.documentElement.scrollHeight >= target + window.innerHeight) {
          window.scrollTo({ top: target, left: 0, behavior: 'instant' as ScrollBehavior })
        }
        requestAnimationFrame(settle)
      }
      requestAnimationFrame(settle)
    }
  }, [pathname, hash])

  /*
   * 刷新 / 关闭前落盘。
   *
   * `beforeunload` + `pagehide` 比单纯依赖 scroll 事件可靠：
   * 手机上滚动事件会被节流，最后一段位置容易丢。
   * 同样要过滤「假 0」（见上面 scroll 监听里的说明）。
   */
  useEffect(() => {
    const flush = () => {
      if (!lastPathRef.current) return
      const y = window.scrollY
      if (y === 0 && document.documentElement.scrollHeight > window.innerHeight + 4) return
      writePos(lastPathRef.current, y)
    }
    window.addEventListener('beforeunload', flush)
    window.addEventListener('pagehide', flush)
    return () => {
      window.removeEventListener('beforeunload', flush)
      window.removeEventListener('pagehide', flush)
    }
  }, [])

  /*
   * 锁屏（自动锁屏 / 立即锁屏）只是盖了一层 fixed 遮罩，页面没有卸载，
   * `window.scrollY` 不会变 —— 解锁后位置天然还在，不需要额外处理。
   */

  return null
}
