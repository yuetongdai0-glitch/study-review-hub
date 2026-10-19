import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { studyHubBuild } from './vite/studyHubBuild'

/**
 * 站点构建配置。
 *
 * @param ctx Vite 的命令上下文（读取 mode）。
 * @returns Vite 开发与构建配置。
 * @remarks 必须区分宿主，否则 App 里资源全 404：
 * - 网页（GitHub Pages）挂在 `/study-review-hub/` 子路径下；
 * - Capacitor 打包后资源在包内根目录 `/`。
 * 用 `vite build --mode mobile` 切换，避免依赖 shell 环境变量（跨平台不稳）。
 */
export default defineConfig(({ mode }) => {
  const mobile = mode === 'mobile'
  const base = mobile ? '/' : '/study-review-hub/'

  return {
    base,
    define: {
      // 构建期决定宿主，避免运行时探测失败就悄悄退回错误的 router。
      __STUDY_HUB_MOBILE__: JSON.stringify(mobile),
    },
    plugins: [react(), studyHubBuild({ base, mobile })],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: '127.0.0.1',
      port: 8770,
      strictPort: true,
    },
    build: {
      outDir: mobile ? 'dist-mobile' : 'dist',
      emptyOutDir: true,
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            antd: ['antd', '@ant-design/icons'],
          },
        },
      },
    },
  }
})
