import { create } from 'zustand'
import { hasLock, verifyLock } from '@/utils/appLock'

/**
 * 启动密码的会话状态。
 *
 * @remarks
 * `unlocked` **只存在于内存**，刻意不持久化：刷新、重开标签页、
 * 从手机 App 冷启动都会回到锁定态，这正是需求要的效果。
 * 一旦写进 localStorage / sessionStorage 就等于「记住密码」，不如不做。
 */
export type LockStoreState = {
  /** 本会话是否已通过口令校验。 */
  unlocked: boolean
  /** 是否设置了启动密码（挂载时读一次）。 */
  required: boolean
  /** 校验口令并更新解锁状态。 */
  unlock: (password: string) => Promise<boolean>
  /** 重新读取锁配置（设置面板增删密码后调用）。 */
  refresh: () => void
  /**
   * 仅同步 `required`（不改解锁状态）。
   *
   * @returns 无返回。
   * @remarks 「立即锁屏」按钮的显隐依赖 `required`，而它只在模块加载时读一次，
   * 用户在设置里刚加完密码时按钮不会立刻出现（要刷新）。
   * 这个动作供设置面板在增删密码后调用，让按钮立即出现/消失。
   */
  syncRequired: () => void
  /**
   * 立即锁屏（把当前会话打回未解锁）。
   *
   * @returns 无返回。
   * @remarks 与「刷新页面」效果相同但**不丢失当前页面状态**（React 不卸载），
   * 用户明确要求「在设置了密码的情况下加一个立即锁屏按钮」。
   * 只在 `required` 为真时有意义；没设密码时不该出现这个入口。
   */
  lock: () => void
}

/** 启动密码 store。 */
export const useLockStore = create<LockStoreState>((set) => ({
  unlocked: false,
  required: hasLock(),

  unlock: async (password) => {
    const ok = await verifyLock(password)
    /*
     * 只翻 `unlocked`，**不动 `required`** —— 后者表示「本机是否设了密码」，
     * 是设置面板判断「已开启 / 未开启」的依据。早先在这里顺手把 required 置 false，
     * 结果解锁后进设置看到的是「未开启」，用户会以为密码丢了。
     */
    if (ok) set({ unlocked: true })
    return ok
  },

  syncRequired: () => set({ required: hasLock() }),

  lock: () => set({ unlocked: false }),

  refresh: () => {
    const required = hasLock()
    /*
     * 能走到这里说明用户刚在设置里亲手改过密码（还输了两次），
     * 所以当前会话直接视为已解锁 —— 否则点「开启」的瞬间就被自己关在门外。
     * 下次打开 / 刷新才需要输入。
     */
    set({ required, unlocked: true })
  },
}))
