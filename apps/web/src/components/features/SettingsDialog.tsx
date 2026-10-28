import { Check, KeyRound, Lock, Monitor, Moon, RefreshCw, RotateCcw, Sun, Trash2, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Modal } from 'antd'
import { useUpdate } from '@/hooks/useUpdate'
import { useAppStore } from '@/store/appStore'
import { useLockStore } from '@/store/lockStore'
import { AUTO_LOCK_OPTIONS, clearAutoLock, clearLock, readAutoLock, setLock, writeAutoLock, type AutoLockMinutes } from '@/utils/appLock'
import { useResolvedTheme } from '@/hooks/useResolvedTheme'
import { allModules } from '@/router/routeRegistry'
import type { ThemePreference } from '@/theme/tokens'

/** 口令最短长度。 */
const MIN_PASSWORD = 4

/** 外观选项。 */
const THEMES: { value: ThemePreference; label: string; icon: typeof Sun }[] = [
  { value: 'system', label: '跟随系统', icon: Monitor },
  { value: 'light', label: '浅色', icon: Sun },
  { value: 'dark', label: '深色', icon: Moon },
]

/**
 * 设置弹层。
 *
 * @returns 外观 + 刷新 + 版本信息。
 * @remarks 刷新分两级，解决「网页更新被缓存挡住」：
 * - **重新加载页面**：只重取 HTML 与资源，保留本地偏好与草稿；
 * - **重建整个应用**：清空 Service Worker、Cache Storage 与 WebView 缓存后重载。
 * 两者都不需要重启 App，比等系统回收进程快得多。
 */
export default function SettingsDialog() {
  const open = useAppStore((state) => state.settingsOpen)
  const setOpen = useAppStore((state) => state.setSettingsOpen)
  const themeMode = useAppStore((state) => state.themeMode)
  const setThemeMode = useAppStore((state) => state.setThemeMode)
  const resolved = useResolvedTheme()
  const { currentBuild, reloadPage, rebuildApp, nativeAvailable, nativeVersion, upgrade, busy, progress } = useUpdate()
  const [status, setStatus] = useState('')
  const locked = useLockStore((state) => state.required)
  const refreshLock = useLockStore((state) => state.refresh)
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [lockStatus, setLockStatus] = useState('')
  const [saving, setSaving] = useState(false)
  /**
   * 自动锁屏设置。
   *
   * @remarks 初值读一次本地存储；改动即时落盘（不需要「保存」按钮）——
   * 这个设置只有两个字段，多一步确认反而烦。
   */
  const [autoLock, setAutoLock] = useState(() => readAutoLock())

  /**
   * 更新自动锁屏设置并立即保存。
   *
   * @param patch 要改的字段。
   * @returns 无返回。
   */
  const updateAutoLock = (patch: Partial<typeof autoLock>) => {
    setAutoLock((prev) => {
      const next = { ...prev, ...patch }
      writeAutoLock(next)
      return next
    })
  }

  /* 关闭时清掉临时提示，避免下次打开看到旧文案。 */
  useEffect(() => {
    if (!open) {
      setStatus('')
      setLockStatus('')
      setPassword('')
      setConfirm('')
    }
  }, [open])

  /**
   * 保存启动密码。
   *
   * @returns 完成后无返回。
   * @remarks 只校验「非空 + 两次一致」，不限制字符种类：
   * 这是给自己用的门禁，越简单越不容易忘。
   */
  const savePassword = async () => {
    if (saving) return
    if (password.length < MIN_PASSWORD) {
      setLockStatus(`至少 ${MIN_PASSWORD} 位`)
      return
    }
    if (password !== confirm) {
      setLockStatus('两次输入不一致')
      return
    }
    setSaving(true)
    try {
      await setLock(password)
      refreshLock()
      setPassword('')
      setConfirm('')
      setLockStatus('已开启，下次打开需要输入')
    } catch {
      setLockStatus('保存失败，请重试')
    } finally {
      setSaving(false)
    }
  }

  /**
   * 关闭启动密码。
   *
   * @returns 完成后无返回。
   */
  const removePassword = () => {
    clearLock()
    /*
     * 一并清掉自动锁屏设置。
     *
     * 没密码时锁屏等于把用户自己关在门外（没有口令可输），
     * 所以那条记录留着没有意义，反而会让下次重开密码后
     * 用户以为「时长是新设的」，其实是他上次的残值。
     */
    clearAutoLock()
    setAutoLock(readAutoLock())
    refreshLock()
    setPassword('')
    setConfirm('')
    setLockStatus('已关闭')
  }

  /**
   * 执行一个带提示的刷新动作。
   *
   * @param label 动作名。
   * @param action 动作。
   * @returns 无返回值。
   */
  const runAction = async (label: string, action: () => Promise<void>) => {
    setStatus(`${label}…`)
    try {
      await action()
      // 重载会中断执行，走到这里说明是同类操作，给一个兜底提示。
      setStatus(`${label}完成`)
    } catch (error) {
      setStatus(error instanceof Error ? `失败：${error.message}` : '失败')
    }
  }

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      centered
      width={420}
      closeIcon={<X size={18} />}
      title="设置"
      className="hub-settings"
      destroyOnHidden
    >
      <div className="hub-settings-body">
        {/* ---------- 外观 ---------- */}
        <section className="hub-settings-section">
          <h4>外观</h4>
          <div className="hub-theme-row" role="radiogroup" aria-label="外观">
            {THEMES.map((item) => {
              const Icon = item.icon
              const active = themeMode === item.value
              return (
                <button
                  key={item.value}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  className={active ? 'hub-theme-item active' : 'hub-theme-item'}
                  onClick={() => setThemeMode(item.value)}
                >
                  <Icon size={16} aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>
          <p className="hub-settings-hint">
            当前渲染为{resolved === 'dark' ? '深色' : '浅色'}
            {themeMode === 'system' ? '（随系统自动切换）' : ''}
          </p>
        </section>

        {/* ---------- 启动密码 ---------- */}
        <section className="hub-settings-section">
          <h4>启动密码</h4>
          <p className="hub-settings-hint">
            开启后，打开本站先要输入口令；<strong>刷新也要重新输入</strong>。
            口令只保存在本机，忘了只能清除站点数据重设。
          </p>

          {locked ? (
            <>
              <p className="hub-settings-state">
                <Lock size={13} aria-hidden="true" /> 已开启
              </p>
              <button type="button" className="hub-settings-action" onClick={removePassword}>
                <Trash2 size={16} aria-hidden="true" />
                <span>
                  <strong>关闭启动密码</strong>
                  <em>以后打开不再要求输入</em>
                </span>
              </button>

              <details className="hub-settings-details">
                <summary>修改口令</summary>
                <div className="hub-settings-fields">
                  <input
                    className="hub-settings-field"
                    type="password"
                    value={password}
                    placeholder="新口令"
                    autoComplete="new-password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <input
                    className="hub-settings-field"
                    type="password"
                    value={confirm}
                    placeholder="再输一次"
                    autoComplete="new-password"
                    onChange={(event) => setConfirm(event.target.value)}
                  />
                  <button type="button" className="hub-settings-primary" disabled={saving} onClick={() => void savePassword()}>
                    <KeyRound size={14} aria-hidden="true" /> 保存新口令
                  </button>
                </div>
              </details>
            </>
          ) : (
            <div className="hub-settings-fields">
              <input
                className="hub-settings-field"
                type="password"
                value={password}
                placeholder={`口令（至少 ${MIN_PASSWORD} 位）`}
                autoComplete="new-password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <input
                className="hub-settings-field"
                type="password"
                value={confirm}
                placeholder="再输一次"
                autoComplete="new-password"
                onChange={(event) => setConfirm(event.target.value)}
              />
              <button
                type="button"
                className="hub-settings-primary"
                disabled={saving || !password || !confirm}
                onClick={() => void savePassword()}
              >
                <KeyRound size={14} aria-hidden="true" /> 开启启动密码
              </button>
            </div>
          )}

          {lockStatus ? <p className="hub-settings-status">{lockStatus}</p> : null}

          {/* ---------- 空闲自动锁屏（只有设了密码才有意义） ---------- */}
          {locked ? (
            <div className="hub-settings-autolock">
              <label className="hub-settings-check">
                <input
                  type="checkbox"
                  checked={autoLock.enabled}
                  onChange={(event) => updateAutoLock({ enabled: event.target.checked })}
                />
                <span>
                  <strong>长时间不动自动锁屏</strong>
                  <em>放下手机、电脑走开一会儿，回来要重新输口令</em>
                </span>
              </label>

              {autoLock.enabled ? (
                <div className="hub-settings-autolock-time">
                  <span>空闲</span>
                  <select
                    className="hub-settings-select"
                    value={autoLock.minutes}
                    aria-label="自动锁屏等待时长"
                    onChange={(event) =>
                      updateAutoLock({ minutes: Number(event.target.value) as AutoLockMinutes })
                    }
                  >
                    {AUTO_LOCK_OPTIONS.map((minutes) => (
                      <option key={minutes} value={minutes}>
                        {minutes} 分钟
                      </option>
                    ))}
                  </select>
                  <span>后锁屏</span>
                </div>
              ) : null}
            </div>
          ) : null}
        </section>

        {/* ---------- 刷新 ---------- */}
        <section className="hub-settings-section">
          <h4>刷新</h4>
          <p className="hub-settings-hint">
            网页更新常被缓存挡住。两项都只清网页缓存，<strong>不会动你的草稿和答题记录</strong>。
          </p>

          <button
            type="button"
            className="hub-settings-action"
            disabled={busy}
            onClick={() => void runAction('正在重新加载', reloadPage)}
          >
            <RefreshCw size={16} className={busy ? 'animate-spin' : ''} aria-hidden="true" />
            <span>
              <strong>重新加载页面</strong>
              <em>只重取当前页面，最快拿到最新内容</em>
            </span>
          </button>

          <button
            type="button"
            className="hub-settings-action"
            disabled={busy}
            onClick={() => void runAction('正在刷新整个应用', rebuildApp)}
          >
            <RotateCcw size={16} aria-hidden="true" />
            <span>
              <strong>刷新整个应用</strong>
              <em>清空网页缓存后重取全部资源，内容一定是最新</em>
            </span>
          </button>

          {status ? <p className="hub-settings-status">{status}</p> : null}
        </section>

        {/* ---------- 版本 ---------- */}
        <section className="hub-settings-section">
          <h4>版本</h4>
          <dl className="hub-settings-info">
            <div>
              <dt>内容版本</dt>
              <dd>{currentBuild || '开发模式'}</dd>
            </div>
            <div>
              <dt>资料</dt>
              <dd>{allModules.length} 个模块</dd>
            </div>
            <div>
              <dt>运行环境</dt>
              <dd>{nativeAvailable || nativeVersion ? '手机应用' : '浏览器'}</dd>
            </div>
          </dl>

          {nativeAvailable ? (
            <button type="button" className="hub-settings-action" disabled={busy} onClick={() => void upgrade()}>
              <RefreshCw size={16} className={progress > 0 ? 'animate-spin' : ''} aria-hidden="true" />
              <span>
                <strong>更新到 {nativeVersion}</strong>
                <em>{progress > 0 ? `下载中 ${progress}%` : '安装新版本的应用本体'}</em>
              </span>
            </button>
          ) : null}
        </section>

        <p className="hub-settings-foot">
          <Check size={13} aria-hidden="true" /> 所有改动都会自动保存在本机
        </p>
      </div>
    </Modal>
  )
}
