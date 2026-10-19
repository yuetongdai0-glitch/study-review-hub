import { create } from 'zustand'
import type { NavSection } from '@/types/content'

/**
 * 当前模块的章节锚点。
 *
 * @remarks 侧栏在 Layout 里、章节在懒加载页面里，两者不在同一棵子树。
 * 用这个 store 做单向注册：页面挂载时写入，卸载时清空，Layout 只读。
 */
type SectionStoreState = {
  /** 当前模块路径。 */
  modulePath: string
  /** 当前模块的章节锚点。 */
  sections: NavSection[]
  /** 写入某个模块的章节锚点。 */
  register: (modulePath: string, sections: NavSection[]) => void
  /** 清空（仅当清空的确实是当前模块时生效，避免切换竞态）。 */
  clear: (modulePath: string) => void
}

export const useSectionStore = create<SectionStoreState>((set, get) => ({
  modulePath: '',
  sections: [],

  register: (modulePath, sections) => {
    const current = get()
    // 同一模块重复注册会产生无意义的重渲染，先做一次浅比较。
    if (
      current.modulePath === modulePath &&
      current.sections.length === sections.length &&
      current.sections.every((item, index) => item.id === sections[index].id && item.title === sections[index].title)
    ) {
      return
    }
    set({ modulePath, sections })
  },

  clear: (modulePath) => {
    if (get().modulePath !== modulePath) return
    set({ modulePath: '', sections: [] })
  },
}))
