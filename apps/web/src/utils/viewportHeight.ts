/**
 * 视口高度同步。
 *
 * 移动端浏览器地址栏收起/展开会改变可用高度，CSS 的 100vh 在 iOS 上不跟随。
 * 这里把真实内高写进 --vh，样式统一用 calc(var(--vh) * 100)。
 */

/** 写入视口高度的变量名。 */
const HEIGHT_PROPERTY = '--vh'

/**
 * 同步一次真实视口高度。
 *
 * @returns 无返回值。
 */
function sync(): void {
  document.documentElement.style.setProperty(HEIGHT_PROPERTY, `${window.innerHeight * 0.01}px`)
}

/**
 * 安装视口高度监听。
 *
 * @returns 卸载函数。
 */
export function installViewportHeightSync(): () => void {
  sync()
  window.addEventListener('resize', sync)
  window.addEventListener('orientationchange', sync)
  return () => {
    window.removeEventListener('resize', sync)
    window.removeEventListener('orientationchange', sync)
  }
}
