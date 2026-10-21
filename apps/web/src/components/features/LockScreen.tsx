import { useEffect, useRef, useState } from 'react'
import { Lock } from 'lucide-react'
import { useLockStore } from '@/store/lockStore'

/**
 * 启动密码门禁。
 *
 * @returns 一整页空白 + 居中的口令输入框。
 * @remarks
 * 按需求「不要给任何提示」：没有标题、没有占位文字、没有错误文案。
 * 输错只用**视觉反馈**（输入框抖动一下 + 清空），不弹任何字；
 * 输对即进入，回车与点按钮都算提交。
 */
export default function LockScreen() {
  const [value, setValue] = useState('')
  const [wrong, setWrong] = useState(0)
  const [busy, setBusy] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const unlock = useLockStore((state) => state.unlock)

  /* 挂载即聚焦，手机端才能直接弹键盘。 */
  useEffect(() => {
    const timer = window.setTimeout(() => inputRef.current?.focus(), 60)
    return () => window.clearTimeout(timer)
  }, [])

  /**
   * 提交口令。
   *
   * @returns 完成后无返回。
   */
  const submit = async () => {
    if (busy || !value) return
    setBusy(true)
    const ok = await unlock(value)
    setBusy(false)
    if (!ok) {
      setValue('')
      setWrong((count) => count + 1)
      inputRef.current?.focus()
    }
  }

  return (
    <div className="hub-lock" role="dialog" aria-modal="true" aria-label="口令">
      <form
        className={wrong ? 'hub-lock-form shake' : 'hub-lock-form'}
        // 用 key 递增重放动画，连续输错也能再抖一次。
        key={wrong}
        onSubmit={(event) => {
          event.preventDefault()
          void submit()
        }}
      >
        <Lock className="hub-lock-icon" size={17} aria-hidden="true" />
        <input
          ref={inputRef}
          className="hub-lock-input"
          type="password"
          value={value}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          inputMode="text"
          aria-label="口令"
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" className="hub-lock-submit" aria-label="进入" disabled={busy || !value} />
      </form>
    </div>
  )
}
