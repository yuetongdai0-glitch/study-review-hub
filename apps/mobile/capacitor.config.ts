import type { CapacitorConfig } from '@capacitor/cli'

/**
 * 移动端直接把构建好的网页打进球里：站点是纯静态内容，离线可用，
 * 内容更新通过「应用内更新（换 APK）」下发，不走远程 URL 加载。
 */
const config: CapacitorConfig = {
  appId: 'app.studyhub.reader',
  appName: '备考复习',
  webDir: '../web/dist',
  loggingBehavior: 'none',
  /* 网页内容随包发布，不需要检查远程 URL；禁止外部导航跳出 WebView。 */
  server: {
    androidScheme: 'https',
    allowNavigation: []
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
