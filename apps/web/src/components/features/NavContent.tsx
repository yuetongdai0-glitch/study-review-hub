import { Input } from 'antd'
import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { allModules } from '@/router/routeRegistry'
import { groupTitles, type ModuleMeta, type RouteGroup } from '@/router/types'

/** 侧栏分组顺序。 */
const GROUP_ORDER: RouteGroup[] = ['quant', 'reasoning', 'essay', 'common', 'tools']

type NavSection = { id: string; title: string }

/**
 * 模块目录内容。
 *
 * @param props 当前模块、章节锚点、跳转回调。
 * @returns 搜索框 + 分组模块列表 + 当前模块的章节锚点。
 * @remarks 章节锚点只对当前模块展开，避免目录过长。
 */
export default function NavContent({
  current,
  sections,
  onNavigate,
}: {
  current?: ModuleMeta
  sections: NavSection[]
  onNavigate?: () => void
}) {
  const [keyword, setKeyword] = useState('')

  const groups = useMemo(() => {
    const query = keyword.trim().toLowerCase()
    return GROUP_ORDER.map((group) => ({
      group,
      items: allModules.filter(
        (item) => item.group === group && (!query || item.title.toLowerCase().includes(query)),
      ),
    })).filter((entry) => entry.items.length > 0)
  }, [keyword])

  const visibleSections = useMemo(() => {
    const query = keyword.trim().toLowerCase()
    if (!query) return sections
    return sections.filter((item) => item.title.toLowerCase().includes(query))
  }, [keyword, sections])

  return (
    <div className="flex h-full flex-col">
      <div className="px-1 pb-2">
        <Input
          allowClear
          size="small"
          prefix={<Search size={13} className="text-ink-3" />}
          placeholder="搜索科目或章节"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
      </div>

      <nav className="flex-1 overflow-y-auto pb-6" aria-label="模块目录">
        {groups.map(({ group, items }) => (
          <div key={group}>
            <p className="app-sidebar-group-title">{groupTitles[group]}</p>
            <ul className="m-0 list-none p-0">
              {items.map((item) => {
                const active = current?.path === item.path
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="app-nav-link"
                      data-active={active ? 'true' : 'false'}
                      onClick={onNavigate}
                    >
                      <span className="app-nav-link-index">{String(item.order).padStart(2, '0')}</span>
                      <span>{item.title}</span>
                    </Link>

                    {active && visibleSections.length > 0 ? (
                      <ul className="mb-1 ml-[1.15rem] mt-0.5 list-none border-l border-line-subtle pl-2">
                        {visibleSections.map((section) => (
                          <li key={section.id}>
                            <a
                              href={`#${section.id}`}
                              className="block truncate rounded px-1.5 py-1 text-[12.5px] text-ink-3 transition-colors hover:bg-sunken hover:text-ink"
                              onClick={onNavigate}
                              title={section.title}
                            >
                              {section.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}

        {groups.length === 0 ? (
          <p className="px-2 py-6 text-center text-[12.5px] text-ink-3">没有匹配的科目</p>
        ) : null}
      </nav>
    </div>
  )
}
