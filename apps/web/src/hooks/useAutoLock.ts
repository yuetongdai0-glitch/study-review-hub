import { useEffect, useRef } from 'react'
import { readAutoLock } from '@/utils/appLock'
import { useLockStore } from '@/store/lockStore'

/**
 * 空闲多久算「长时间不动」之后自动锁屏。
 *
 * @returns 无返回。
 * @remarks
 * 用户要求：「把长时间不动、然后设置了密码自动锁屏的功能加上去」。
 *
 * 三条设计取舍：
 *
 * ① **只在设了密码时生效**。没密码时锁屏等于把用户关在门外（没有口令可输），
 *    所以 `required` 为假时直接不挂监听。
 *
 * ② **计时挂在用户「最后一次动」上，不是定时轮询**。
 *    每次活动（指针、按键、滚动、触摸）只是刷新时间戳，
 *    真正的检查用一个低频 interval 做 —— 这样既不用为每个事件建定时器，
 *    也不会因为鼠标悬停不动就永远不锁。
 *
 * ③ **切到后台再回来，按真实流逝时间算**。
 *    手机上「锁屏 / 切到别的 App」时定时器会被系统降频甚至冻结，
 *    只用 `setTimeout` 会在回来之后才开始计 5 分钟 —— 那等于没锁。
 *    所以额外记 `hiddenAt`，`visibilitychange` 回到前台时先比对实际间隔。
 *
 * 用户明确不要「动一下就重置」以外的任何打扰：这里**不弹任何提示**，
 * 时间到就是直接回锁定页（与启动密码是同一个界面）。
 */
export function useAutoLock(): void {
  /** 最后一次活动的时间戳（ms）。 */
  const lastActiveRef = useRef(Date.now())
  /** 页面转入后台的时刻；在前台时为 null。 */
  const hiddenAtRef = useRef<number | null>(null)
  /*
   * 订阅「是否设了密码」。
   *
   * 必须在组件顶层拿到它（不能在 useEffect 里读后再当依赖 ——
   * 那样依赖数组里就不能写 hook 调用，也不会有重渲染）。
   * 用户在设置里刚开密码时要立刻开始计时；关掉密码则立刻停。
   */
  const required = useLockStore((state) => state.required)

  useEffect(() => {
    if (!required) return

    /**
     * 检查是否该锁屏。
     *
     * @returns 无返回。
     * @remarks 每次都重新读一次设置：用户在设置面板里改了时长/关掉开关，
     * 不需要刷新页面就能生效（这是最容易漏的一处）。
     */
    const check = () => {
      const store = useLockStore.getState()
      // 没设密码、或已经锁上了：无事可做。
      if (!store.required || !store.unlocked) return
      const config = readAutoLock()
      if (!config.enabled) return

      const limit = config.minutes * 60_000
      /*
       * 若刚从后台回来，用「后台进入时刻」作为基准 ——
       * 后台停留的时间也要算进空闲里，否则「放兜里两小时」回来还是开着。
       */
      const base = hiddenAtRef.current ?? lastActiveRef.current
      if (Date.now() - base < limit) return
      store.lock()
    }

    /** 记录一次活动。 */
    const touch = () => {
      lastActiveRef.current = Date.now()
      // 回到前台后的第一次活动，把隐藏标记清掉，之后按正常节奏算。
      hiddenAtRef.current = null
    }

    /** 页面可见性变化。 */
    const onVisibility = () => {
      if (document.hidden) {
        hiddenAtRef.current = Date.now()
        return
      }
      /*
       * 回到前台：先判断这次后台是否已经超过阈值。
       * 超了就立刻锁；没超就把基准顺延到现在（别让后台那几秒算进"不动"）。
       */
      check()
      const store = useLockStore.getState()
      if (store.required && store.unlocked) {
        const config = readAutoLock()
        if (!config.enabled) hiddenAtRef.current = null
        else if (Date.now() - (hiddenAtRef.current ?? Date.now()) < config.minutes * 60_000) {
          lastActiveRef.current = Date.now()
          hiddenAtRef.current = null
        }
      }
    }

    /*
     * 监听哪些事件：只用「真的在操作」的信号。
     * `mousemove` 也收 —— 只滚鼠标不动键也算在看；
     * `scroll` 用捕获阶段，否则材料面板内部的滚动容器收不到。
     */
    const events: Array<[string, AddEventListenerOptions]> = [
      ['pointerdown', { passive: true, capture: true }],
      ['pointermove', { passive: true, capture: true }],
      ['wheel', { passive: true, capture: true }],
      ['keydown', { passive: true, capture: true }],
      ['touchstart', { passive: true, capture: true }],
      ['scroll', { passive: true, capture: true }],
    ]
    for (const [name, options] of events) window.addEventListener(name, touch, options)
    document.addEventListener('visibilitychange', onVisibility)

    /*
     * 检查频率：10 秒一次足够。
     * 秒级定时器在手机上费电，而且用户也不会在意"差 10 秒"。
     */
    const timer = window.setInterval(check, 10_000)
    // 挂载时先跑一次：可能刚从别的页面回来就超时了。
    check()

    return () => {
      for (const [name, options] of events) window.removeEventListener(name, touch, options)
      document.removeEventListener('visibilitychange', onVisibility)
      window.clearInterval(timer)
    }
  }, [required])
}
