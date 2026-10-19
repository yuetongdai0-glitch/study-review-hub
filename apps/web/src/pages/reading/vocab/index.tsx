import { Input, Segmented } from 'antd'
import { ChevronRight, Search } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { findModuleByPath } from '@/router/routeRegistry'
import { useSectionStore } from '@/store/sectionStore'
import { accentTokens } from '@/theme/tokens'
import type { NavSection } from '@/types/content'
import rawGroups from './vocabData.json'

/** 词条（entry 型）。 */
type EntryItem = { t: string; use: string; eg: string }

/** 状态词（suffix 型）。 */
type SuffixItem = { k: string; v: string }

/** 万能句（tag 型，三元组：类别、内容、色调）。 */
type TagItem = [string, string, string?]

/** 分组。 */
type Group = {
  id: string
  color: string
  title: string
  sub: string
  kind: 'entry' | 'suffix' | 'tag'
  items?: EntryItem[]
  head?: string[]
  tags?: TagItem[]
  note?: string
}

const groups = rawGroups as Group[]

/**
 * 高亮命中关键词的片段。
 *
 * @param text 原文。
 * @param keyword 关键词。
 * @returns 带 `<mark>` 的节点数组。
 */
function highlight(text: string, keyword: string) {
  const query = keyword.trim()
  if (!query) return text
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'))
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? <mark key={`${part}-${index}`}>{part}</mark> : part,
  )
}

/**
 * 规范词速查页。
 *
 * @returns 搜索 + 题型筛选 + 分组折叠列表。
 * @remarks 这页信息密度最高，主交互是全文搜索与题型筛选，
 * 因此不复用阅读页骨架，但仍复用同一套颜色令牌与排版。
 */
export default function VocabPage() {
  const meta = findModuleByPath('/vocab')
  const register = useSectionStore((state) => state.register)
  const clear = useSectionStore((state) => state.clear)
  const [keyword, setKeyword] = useState('')
  const [filter, setFilter] = useState('all')
  const [closed, setClosed] = useState<Record<string, boolean>>({})

  const navSections = useMemo<NavSection[]>(
    () => groups.map((group) => ({ id: `g-${group.id}`, title: group.title })),
    [],
  )

  useEffect(() => {
    register('/vocab', navSections)
    return () => clear('/vocab')
  }, [navSections, register, clear])

  /* 搜索时强制展开，避免用户以为没搜到。 */
  const searching = keyword.trim().length > 0

  const visible = useMemo(() => {
    const query = keyword.trim().toLowerCase()
    return groups
      .filter((group) => filter === 'all' || group.id === filter)
      .map((group) => {
        const hit = (values: Array<string | undefined>) =>
          !query || values.some((value) => (value ?? '').toLowerCase().includes(query))

        if (group.kind === 'suffix') {
          const suffixes = (group.items as unknown as SuffixItem[]).filter((item) => hit([item.k, item.v]))
          return { group, items: [] as EntryItem[], suffixes, tags: [] as TagItem[], count: suffixes.length }
        }
        if (group.kind === 'tag') {
          const tags = (group.tags ?? []).filter((item) => hit([item[0], item[1]]))
          return { group, items: [] as EntryItem[], suffixes: [] as SuffixItem[], tags, count: tags.length }
        }
        const items = (group.items ?? []).filter((item) => hit([item.t, item.use, item.eg]))
        return { group, items, suffixes: [] as SuffixItem[], tags: [] as TagItem[], count: items.length }
      })
      .filter((entry) => !query || entry.count > 0)
  }, [filter, keyword])

  const total = visible.reduce((sum, entry) => sum + entry.count, 0)
  const accent = meta ? accentTokens[meta.accent] : accentTokens.teal

  return (
    <div
      className="app-content"
      style={{
        ['--accent' as string]: accent.color,
        ['--accent-soft' as string]: accent.soft,
        ['--accent-ink' as string]: accent.ink,
      }}
    >
      <header className="mb-4">
        <p className="mb-1.5 font-num text-[11px] uppercase tracking-[0.24em] text-ink-3">QUICK REFERENCE</p>
        <h1 className="m-0 text-[24px] font-bold tracking-tight">{meta?.title ?? '综应A 规范词速查'}</h1>
        <p className="mt-1.5 text-[13px] text-ink-3">
          作答时随手查：先按题型筛，再搜关键词。共 {groups.length} 组 · 当前命中 {total} 条
        </p>
      </header>

      <div className="sticky top-[var(--header-height)] z-10 -mx-1 mb-4 bg-page/95 px-1 py-2 backdrop-blur">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Input
            allowClear
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            prefix={<Search size={14} className="text-ink-3" />}
            placeholder="搜索：宣传 / 监管 / 队伍 / 应急…"
          />
          <div className="shrink-0 overflow-x-auto scrollbar-none">
            <Segmented
              size="small"
              value={filter}
              onChange={(value) => setFilter(String(value))}
              options={[
                { label: '全部', value: 'all' },
                ...groups.map((group) => ({
                  label: group.title.replace(/^[一二三四五六七]、/, '').split('·')[0].slice(0, 6),
                  value: group.id,
                })),
              ]}
            />
          </div>
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="py-12 text-center text-[13.5px] text-ink-3">没有找到匹配的词条，换个关键词试试</p>
      ) : null}

      <div className="flex flex-col gap-3">
        {visible.map(({ group, items, suffixes, tags, count }) => {
          const open = searching || !closed[group.id]
          return (
            <section
              key={group.id}
              id={`g-${group.id}`}
              className="overflow-hidden rounded-[14px] border border-line bg-surface"
              style={{ ['--c' as string]: group.color }}
            >
              <button
                type="button"
                className="flex w-full items-center gap-2.5 px-4 py-3 text-left"
                aria-expanded={open}
                onClick={() => setClosed((state) => ({ ...state, [group.id]: !state[group.id] }))}
              >
                <span className="h-8 w-2 shrink-0 rounded" style={{ background: group.color }} aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <b className="block text-[14.5px] tracking-tight">{group.title}</b>
                  <span className="block text-[12px] text-ink-3">{group.sub}</span>
                </span>
                <span className="shrink-0 font-num text-[12px] text-ink-3">{count}</span>
                <ChevronRight
                  size={14}
                  className="shrink-0 text-ink-3 transition-transform"
                  style={{ transform: open ? 'rotate(90deg)' : undefined }}
                />
              </button>

              {open ? (
                <div className="px-4 pb-3">
                  {group.kind === 'suffix' ? (
                    <dl className="m-0">
                      {suffixes.map((item) => (
                        <div
                          key={item.k}
                          className="grid grid-cols-[5.6rem_1fr] gap-x-3 border-t border-line-subtle py-1.5 first:border-t-0"
                        >
                          <dt className="font-semibold text-danger">{highlight(item.k, keyword)}</dt>
                          <dd className="m-0 text-[13px] text-ink-2">{highlight(item.v, keyword)}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  {group.kind === 'tag' ? (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {tags.map((tag) => (
                        <span
                          key={tag[0]}
                          className="rounded-md bg-sunken px-2 py-1 text-[12.5px] text-ink-2"
                          title={tag[1]}
                        >
                          <b className="font-semibold text-ink">{highlight(tag[0], keyword)}</b>：
                          {highlight(tag[1], keyword)}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {group.kind === 'entry' ? (
                    <div className="pt-0.5">
                      {items.map((item) => (
                        <article key={item.t} className="border-t border-line-subtle py-2.5 first:border-t-0">
                          <h3 className="m-0 text-[14.5px] font-bold tracking-tight">{highlight(item.t, keyword)}</h3>
                          <p className="mt-0.5 text-[12.5px] text-ink-2">
                            <span className="text-ink-3">适用：</span>
                            {highlight(item.use, keyword)}
                          </p>
                          <p
                            className="mt-1.5 rounded-md border-l-[3px] bg-sunken px-2.5 py-1.5 text-[12.5px] leading-relaxed text-ink-2"
                            style={{ borderColor: group.color }}
                          >
                            {highlight(item.eg, keyword)}
                          </p>
                        </article>
                      ))}
                    </div>
                  ) : null}

                  {group.note ? (
                    <p className="mt-2 rounded-md bg-[#fdf5e3] px-2.5 py-2 text-[12.5px] leading-relaxed text-[#7a530f]">
                      {group.note}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </section>
          )
        })}
      </div>
    </div>
  )
}
