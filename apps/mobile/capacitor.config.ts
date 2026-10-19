import type { CapacitorConfig } from '@capacitor/cli'

/**
 * 线上站点入口。
 *
 * @remarks 与参考项目（codex-pocket）同一套思路：**壳加载远程网页**。
 * 这样内容更新只要重新部署网页，用户在 App 里点刷新就能拿到最新，
 * 不需要为了改一段笔记重新打包安装包。
 * 当初把网页打进包里，导致「改完内容必须发 APK，点刷新也只是重载包内旧资源」。
 */
const SITE_URL = 'https://yuetongdai0-glitch.github.io/study-review-hub/'
const SITE_HOST = 'yuetongdai0-glitch.github.io'

/**
 * 移动端配置。
 *
 * @remarks
 * - `server.url` 让 WebView 启动即加载线上站点；
 * - `webDir` 仍保留本地产物，作为 Capacitor 的必需目录与离线兜底；
 * - `allowNavigation` 只放行本站域，禁止跳出到任意地址；
 * - 正片内容走远程，所以不要在 App 内注册 Service Worker（见 vite 构建目标）。
 */
const config: CapacitorConfig = {
  appId: 'app.studyhub.reader',
  appName: '备考复习',
  webDir: '../web/dist-mobile',
  loggingBehavior: 'none',
  server: {
    url: SITE_URL,
    androidScheme: 'https',
    // 站内跳转（同一 origin 的绝对/相对链接）都留在 WebView 内。
    allowNavigation: [SITE_HOST]
  },
  android: {
    allowMixedContent: false,
    adjustMarginsForEdgeToEdge: 'auto'
  },
  ios: {
    contentInset: 'never',
    limitsNavigationsToAppBoundDomains: false
  }
}

export default config
