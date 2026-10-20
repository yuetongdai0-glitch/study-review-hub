/**
 * 原生壳桥接：Capacitor 环境检测与「应用内更新」调用。
 *
 * @remarks 参考 codex-pocket 的更新闭环：
 * 检查清单 → 比对 versionCode → 下载 APK → 校验 SHA-256 与签名 → 调系统安装器。
 * Web 端没有这些能力（浏览器不允许静默装包），所以只有原生壳走这条路径。
 * 之前重构把这段逻辑丢了，导致 App 里点刷新只是重载旧页面。
 */

/** 原生更新插件暴露的方法。 */
type NativeUpdater = {
  status: () => Promise<UpdateStatus>
  check: (options: { manifestUrl: string }) => Promise<UpdateStatus>
  download: () => Promise<UpdateStatus>
  install: () => Promise<UpdateStatus>
  /** 清 WebView 缓存并重新加载线上网页（壳加载远程页面时用）。 */
  reloadWeb: (options: { url: string }) => Promise<void>
}

/** 更新状态。 */
export type UpdateStatus = {
  state?: 'idle' | 'checking' | 'available' | 'current' | 'downloading' | 'ready' | 'error'
  versionName?: string
  versionCode?: number
  installedVersionName?: string
  installedVersionCode?: number
  progress?: number
  error?: string
}

/** Capacitor 全局对象的最小类型。 */
type CapacitorGlobal = {
  isNativePlatform?: () => boolean
  getPlatform?: () => string
  Plugins?: Record<string, NativeUpdater>
}

/**
 * 取 Capacitor 全局对象。
 *
 * @returns 全局对象；浏览器环境返回 undefined。
 */
function capacitor(): CapacitorGlobal | undefined {
  return (window as unknown as { Capacitor?: CapacitorGlobal }).Capacitor
}

/**
 * 是否运行在原生壳（安卓 / iOS）里。
 *
 * @returns 原生环境为 true。
 */
export function isNativeApp(): boolean {
  const cap = capacitor()
  return Boolean(cap?.isNativePlatform?.())
}

/**
 * 取更新插件。
 *
 * @returns 插件实例；不可用时返回 null。
 */
function updater(): NativeUpdater | null {
  const cap = capacitor()
  const plugin = cap?.Plugins?.StudyHubUpdater
  return plugin ?? null
}

/**
 * 应用更新清单地址。
 *
 * @returns 发布仓库上的 app-version.json。
 * @remarks 必须走 https 且是受信主机（插件内部也有白名单校验）。
 */
export function manifestUrl(): string {
  return (
    (window as unknown as { STUDY_HUB_MANIFEST?: string }).STUDY_HUB_MANIFEST ??
    'https://yuetongdai0-glitch.github.io/study-hub-releases/app-version.json'
  )
}

/**
 * 清缓存并重新加载网页。
 *
 * @returns 原生环境返回 true（由原生接管），网页环境返回 false（调用方自行重载）。
 * @remarks 壳加载的是远程网页，所以「刷新」= 真的回服务器取最新 HTML/JS/CSS。
 * 关键是要清 **WebView 的 HTTP 缓存**：浏览器的 `cache: 'no-store'` 管不到它，
 * 这正是之前点了刷新还是旧内容的原因。
 * 只清网络缓存，**不动 localStorage**——草稿、答题记录、主题偏好都在里面。
 */
export async function reloadWeb(): Promise<boolean> {
  const plugin = updater()
  if (!plugin || typeof plugin.reloadWeb !== 'function') return false
  // 必须带 hash：hash 模式下载荷全在 `#/xxx` 里，剥掉 hash 会被带回首页。
  const url = new URL(window.location.href)
  url.searchParams.delete('_r')
  await plugin.reloadWeb({ url: url.toString() })
  return true
}

/**
 * 检查应用更新。
 *
 * @returns 更新状态；插件不可用时返回 null。
 */
export async function checkAppUpdate(): Promise<UpdateStatus | null> {
  const plugin = updater()
  if (!plugin) return null
  return plugin.check({ manifestUrl: manifestUrl() })
}

/**
 * 下载并安装新版本。
 *
 * @param onProgress 下载进度回调。
 * @returns 最终状态。
 */
export async function downloadAndInstall(onProgress?: (percent: number) => void): Promise<UpdateStatus> {
  const plugin = updater()
  if (!plugin) throw new Error('当前容器不支持应用内更新')

  await plugin.download()

  // 插件在后台线程下载，这里轮询进度；最多等 5 分钟。
  const deadline = Date.now() + 5 * 60 * 1000
  for (;;) {
    if (Date.now() > deadline) throw new Error('下载超时，请重试')
    const status = await plugin.status()
    if (status.state === 'downloading') {
      onProgress?.(status.progress ?? 0)
    } else if (status.state === 'ready') {
      onProgress?.(100)
      return plugin.install()
    } else if (status.state === 'error') {
      throw new Error(status.error || '下载失败')
    }
    await new Promise((resolve) => window.setTimeout(resolve, 600))
  }
}
