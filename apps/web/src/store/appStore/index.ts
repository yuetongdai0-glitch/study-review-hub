import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { getInitialTheme, persistTheme } from '@/theme/runtime'
import type { ThemeName } from '@/theme/tokens'

/** 主题缓存键。 */
const THEME_STORAGE_KEY = 'study-hub:theme'

/** 折叠状态缓存键。 */
const COLLAPSE_STORAGE_KEY = 'study-hub:collapsed'

/**
 * 应用级偏好状态。
 *
 * @remarks 只放跨页面共享的轻量配置。页面内部状态（输入内容、画板笔迹）留在各自模块，
 * 否则 store 会变成一个什么都装的口袋。
 */
export type AppStoreState = {
  /** 当前主题。 */
  theme: ThemeName
  /** 移动端侧栏是否展开。 */
  sidebarOpen: boolean
  /** 各模块折叠的章节 id，按模块路径分组。 */
  collapsed: Record<string, string[]>
  /** 切换主题并同步 DOM 与本地缓存。 */
  setTheme: (theme: ThemeName) => void
  /** 在浅色与深色之间切换。 */
  toggleTheme: () => void
  /** 展开或收起移动端侧栏。 */
  setSidebarOpen: (open: boolean) => void
  /** 切换某个章节的折叠状态。 */
  toggleSection: (modulePath: string, sectionId: string) => void
  /** 判断章节是否折叠。 */
  isCollapsed: (modulePath: string, sectionId: string) => boolean
  /** 展开全部章节。 */
  expandAll: (modulePath: string) => void
}

/**
 * 读取折叠状态缓存。
 *
 * @returns 折叠表；读取失败返回空表。
 */
function readCollapsed(): Record<string, string[]> {
  try {
    const raw = window.localStorage.getItem(COLLAPSE_STORAGE_KEY)
    if (!raw) return {}
    const parsed: unknown = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? (parsed as Record<string, string[]>) : {}
  } catch {
    // 缓存损坏时按「全部展开」处理，不阻断阅读。
    return {}
  }
}

/** 应用偏好 store。 */
export const useAppStore = create<AppStoreState>()(
  persist(
    (set, get) => ({
      theme: getInitialTheme(THEME_STORAGE_KEY),
      sidebarOpen: false,
      collapsed: readCollapsed(),

      setTheme: (theme) => {
        persistTheme(THEME_STORAGE_KEY, theme)
        set({ theme })
      },

      toggleTheme: () => {
        const next: ThemeName = get().theme === 'dark' ? 'light' : 'dark'
        persistTheme(THEME_STORAGE_KEY, next)
        set({ theme: next })
      },

      setSidebarOpen: (open) => set({ sidebarOpen: open }),

      toggleSection: (modulePath, sectionId) =>
        set((state) => {
          const current = state.collapsed[modulePath] ?? []
          const exists = current.includes(sectionId)
          const next = exists ? current.filter((id) => id !== sectionId) : [...current, sectionId]
          return { collapsed: { ...state.collapsed, [modulePath]: next } }
        }),

      isCollapsed: (modulePath, sectionId) => (get().collapsed[modulePath] ?? []).includes(sectionId),

      expandAll: (modulePath) =>
        set((state) => ({ collapsed: { ...state.collapsed, [modulePath]: [] } })),
    }),
    {
      name: COLLAPSE_STORAGE_KEY,
      storage: createJSONStorage(() => window.localStorage),
      // 主题单独存一个键（首帧前就要读），这里只持久化折叠状态。
      partialize: (state) => ({ collapsed: state.collapsed }),
    },
  ),
)
