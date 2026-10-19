import { accentTokens } from '@/theme/tokens'
import type { ModuleMeta } from '@/router/types'

/**
 * 模块页头。
 *
 * @param props 模块元信息与章节数。
 * @returns 通栏渐变 banner。
 * @remarks 沿用旧版 `.banner` 观感：蓝紫渐变、居中标题、底部 20px 圆角。
 * 强调色按模块区分，但保持同一套渐变结构，避免各页视觉割裂。
 */
export default function ModuleHero({ meta, sectionCount }: { meta: ModuleMeta; sectionCount: number }) {
  const accent = accentTokens[meta.accent]

  return (
    <div
      className="banner"
      style={{
        background: `linear-gradient(135deg, ${accent.color} 0%, ${accent.ink} 100%)`,
      }}
    >
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>
      <div className="banner-meta">
        <span className="banner-chip">{sectionCount} 个章节</span>
        {meta.source ? <span className="banner-chip">{meta.source}</span> : null}
        {meta.tool ? <span className="banner-chip">交互工具</span> : null}
      </div>
    </div>
  )
}
