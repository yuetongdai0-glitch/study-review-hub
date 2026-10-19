import { accentTokens } from '@/theme/tokens'
import type { ModuleMeta } from '@/router/types'

/**
 * 模块页头。
 *
 * @param props 模块元信息与章节数。
 * @returns 通栏渐变 hero。
 * @remarks 通栏效果由 Layout 负责（hero 是主区第一个元素），这里只管内容。
 */
export default function ModuleHero({ meta, sectionCount }: { meta: ModuleMeta; sectionCount: number }) {
  const accent = accentTokens[meta.accent]

  return (
    <div
      className="module-hero"
      style={{
        background: `linear-gradient(135deg, ${accent.color} 0%, ${accent.ink} 100%)`,
      }}
    >
      <p className="module-hero-kicker">
        {meta.source ? `${meta.source} · ` : ''}
        STUDY NOTE
      </p>
      <h1 className="module-hero-title">{meta.title}</h1>
      <p className="module-hero-desc">{meta.description}</p>
      <div className="module-hero-meta">
        <span className="module-hero-chip">{sectionCount} 个章节</span>
        {meta.tool ? <span className="module-hero-chip">交互工具</span> : null}
        <span className="module-hero-chip">离线可用</span>
      </div>
    </div>
  )
}
