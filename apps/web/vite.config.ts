import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { studyHubBuild } from './vite/studyHubBuild'

/**
 * 站点构建配置。
 *
 * @returns Vite 开发与构建配置。
 * @remarks base 必须与 GitHub Pages 子路径一致；否则刷新二级路由会 404。
 */
export default defineConfig({
  base: '/study-review-hub/',
  plugins: [react(), studyHubBuild()],
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
    outDir: 'dist',
    emptyOutDir: true,
    // 页面内容较大，关闭体积告警噪音；实际控制靠路由级 code split。
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        // 把框架与 UI 库拆成长期缓存块，内容页改动不会让用户重下 antd。
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          antd: ['antd', '@ant-design/icons'],
        },
      },
    },
  },
})
