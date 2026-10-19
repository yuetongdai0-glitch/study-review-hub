import { ArrowRight, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { allModules, moduleMetas, toolMetas } from '@/router/routeRegistry'
import { accentTokens } from '@/theme/tokens'

/** 下载页地址。 */
const DOWNLOAD_URL = 'https://yuetongdai0-glitch.github.io/study-hub-releases/'

/**
 * 首页科目卡片。
 *
 * @param props 模块元信息。
 * @returns 单张卡片。
 */
function ModuleCard({ name }: { name: (typeof allModules)[number]['name'] }) {
  const module = allModules.find((item) => item.name === name)
  if (!module) return null
  const accent = accentTokens[module.accent]

  return (
    <Link
      to={module.path}
      className="group relative flex flex-col gap-2 overflow-hidden rounded-[14px] border border-line bg-surface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:shadow-float"
      style={{ borderTopColor: accent.color, borderTopWidth: 2 }}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-num text-[11px] tabular-nums text-ink-3">
          {String(module.order).padStart(2, '0')}
        </span>
        {module.source ? (
          <span
            className="rounded-md px-1.5 py-0.5 text-[10.5px] font-medium"
            style={{ background: accent.soft, color: accent.ink }}
          >
            {module.source}
          </span>
        ) : null}
      </div>

      <h3 className="m-0 text-[15.5px] font-bold leading-snug tracking-tight text-ink">{module.title}</h3>
      <p className="m-0 line-clamp-2 text-[12.5px] leading-relaxed text-ink-3">{module.description}</p>

      <span className="mt-auto inline-flex items-center gap-1 pt-1 text-[12.5px] font-medium text-ink-3 transition-colors group-hover:text-ink">
        {module.tool ? '去打草稿' : '去复习'}
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}

/**
 * 首页。
 *
 * @returns 总览入口与移动端下载入口。
 */
export default function HomePage() {
  return (
    <div className="app-content">
      {/* 标题区 */}
      <section className="mx-auto max-w-[var(--content-width)] py-8 sm:py-12">
        <p className="mb-3 font-num text-[11px] uppercase tracking-[0.26em] text-ink-3">STUDY INDEX / 2026</p>
        <h1 className="m-0 max-w-[18ch] text-[30px] font-bold leading-[1.18] tracking-tight sm:text-[38px]">
          笔记与练习工具，
          <br />
          一个入口随时切换
        </h1>
        <p className="mt-4 max-w-[62ch] text-[13.5px] leading-relaxed text-ink-3">
          按模块进入复习手册。每份资料的完整内容都在这里，阅读中可随时切换科目；
          判断推理已拆出「图形推理」「类比推理」两个独立页；答题纸与答题卡用于限时练笔；草稿纸可以随时随地打草稿。
        </p>
      </section>

      {/* 阅读模块 */}
      <section aria-labelledby="reading-title" className="mb-10">
        <div className="mb-3 flex items-baseline justify-between border-b border-line pb-2">
          <h2 id="reading-title" className="m-0 text-[15px] font-bold tracking-tight">
            复习科目
          </h2>
          <span className="font-num text-[11px] text-ink-3">
            01 - {String(moduleMetas.length).padStart(2, '0')}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {moduleMetas.map((module) => (
            <ModuleCard key={module.name} name={module.name} />
          ))}
        </div>
      </section>

      {/* 工具 */}
      <section aria-labelledby="tools-title" className="mb-10">
        <div className="mb-3 flex items-baseline justify-between border-b border-line pb-2">
          <h2 id="tools-title" className="m-0 text-[15px] font-bold tracking-tight">
            练习工具
          </h2>
          <span className="font-num text-[11px] text-ink-3">全屏交互 · 自动保存</span>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {toolMetas.map((module) => (
            <ModuleCard key={module.name} name={module.name} />
          ))}
        </div>
      </section>

      {/* 移动端下载 */}
      <section className="flex flex-col items-start justify-between gap-5 rounded-[14px] border border-line bg-surface p-6 sm:flex-row sm:items-center">
        <div className="max-w-[58ch]">
          <p className="mb-2 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-ink-3">
            <Smartphone size={12} /> MOBILE / OFFLINE
          </p>
          <h2 className="m-0 mb-2 text-[19px] font-bold tracking-tight">装到手机上，断网也能翻</h2>
          <p className="m-0 text-[13px] leading-relaxed text-ink-3">
            安卓 APK 与 iOS 安装包与网页端内容同源，装好后可应用内检查更新；网页端本身 HTML 不缓存，随时刷新拿最新。
          </p>
        </div>
        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full shrink-0 items-center justify-between gap-3 rounded-[10px] bg-ink px-4 py-3 text-white transition hover:opacity-90 sm:w-auto"
        >
          <span className="flex flex-col text-left leading-tight">
            <span className="text-[10.5px] tracking-wide text-white/60">Android · iOS</span>
            <strong className="text-[13.5px] font-semibold">前往下载页</strong>
          </span>
          <ArrowRight size={15} />
        </a>
      </section>

      <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-[12.5px] text-ink-3">
        <span>所有笔记均保留原始完整内容</span>
        <a href="#top" className="hover:text-ink" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          回到顶部 ↑
        </a>
      </footer>
    </div>
  )
}
