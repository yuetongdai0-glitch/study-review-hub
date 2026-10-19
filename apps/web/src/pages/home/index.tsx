import { Link } from 'react-router-dom'
import { allModules, moduleMetas, toolMetas } from '@/router/routeRegistry'
import type { ModuleMeta } from '@/router/types'
import { accentTokens } from '@/theme/tokens'

/** 下载页地址（与发布仓库一致）。 */
const DOWNLOAD_URL = 'https://yuetongdai0-glitch.github.io/study-hub-releases/'

/** 旧首页每个科目卡片的配色类名，保证观感与旧站一致。 */
const ACCENT_CLASS: Record<string, string> = {
  'graphic-reasoning': 'subject-blue',
  'comprehensive-d': 'subject-violet',
  verbal: 'subject-ochre',
  quantitative: 'subject-cornflower',
  judgment: 'subject-brick',
  analogy: 'subject-grass',
  'data-analysis': 'subject-teal',
  'comprehensive-a': 'subject-a',
  'exam-grid': 'subject-tool',
  'choice-quiz': 'subject-tool subject-quiz',
  vocab: 'subject-tool subject-vocab',
  politics: 'subject-politics',
  scratchpad: 'subject-tool subject-scratch',
  words: 'subject-words',
}

/**
 * 科目卡片。
 *
 * @param props 模块元信息。
 * @returns 旧版 `.subject` 卡片。
 * @remarks 结构与类名与旧站完全一致（`.subject-number` / `.subject-body` / `.subject-action`），
 * 颜色由 home.css 里的 `--subject-color` 决定，这里只负责选对配色类名。
 */
function SubjectCard({ module }: { module: ModuleMeta }) {
  const accent = ACCENT_CLASS[module.name] ?? 'subject-blue'
  const featured = module.name === 'graphic-reasoning' ? ' subject-featured' : ''

  return (
    <Link to={module.path} className={`subject ${accent}${featured}`}>
      <span className="subject-number">{String(module.order).padStart(2, '0')}</span>
      <span className="subject-body">
        <span className="subject-source">{module.source ?? '笔记'}</span>
        <strong>{module.title}</strong>
        <span className="subject-description">{module.description}</span>
      </span>
      <span className="subject-action" aria-hidden="true">
        {module.tool ? '去打草稿' : '去复习'} <span>→</span>
      </span>
    </Link>
  )
}

/**
 * 首页。
 *
 * @returns 总览入口。
 * @remarks 版式沿用旧站 home.css：site-header + intro 双栏 + subject-grid，
 * 内容改为从路由表读取，新增科目自动出现。
 */
export default function HomePage() {
  const accent = accentTokens.blue

  return (
    <div className="home-main" style={{ ['--accent' as string]: accent.color }}>
      <a className="skip-link" href="#subjects">
        跳到复习科目
      </a>

      <header className="site-header">
        <a className="brand" href="./" aria-label="返回备考复习总览首页">
          <span className="brand-mark" aria-hidden="true">
            复
          </span>
          <span>备考复习总览</span>
        </a>
        <div className="note-count">
          {moduleMetas.length} 份笔记 + {toolMetas.length} 个练习工具
        </div>
      </header>

      <main>
        <section className="intro" aria-labelledby="page-title">
          <div className="intro-copy">
            <p className="intro-index" aria-hidden="true">
              STUDY INDEX / 2026
            </p>
            <h1 id="page-title">
              笔记与练习工具，
              <br />
              一个入口随时切换
            </h1>
          </div>
          <p className="intro-note">
            按模块进入原始复习手册。每份资料均完整保留，阅读中可随时返回总览或切换到其他科目；
            判断推理已拆出「图形推理」「类比推理」两个独立页；模拟考试答题纸用于平时限时练笔，
            选择题答题卡用于刷选择题并统计正确率与用时；规范词速查手册可在作答时随时查阅表达。
          </p>
        </section>

        <section className="subjects" id="subjects" aria-labelledby="subjects-title">
          <div className="section-heading">
            <h2 id="subjects-title">复习科目</h2>
            <span>
              01 - {String(allModules.length).padStart(2, '0')}
            </span>
          </div>

          <div className="subject-grid">
            {allModules.map((module) => (
              <SubjectCard key={module.name} module={module} />
            ))}
          </div>
        </section>

        {/* 移动端下载入口：视觉沿用旧首页卡片语言 */}
        <section className="app-download" aria-labelledby="download-title">
          <div className="app-download-copy">
            <p className="app-download-kicker">MOBILE / OFFLINE</p>
            <h2 id="download-title">装到手机上，断网也能翻</h2>
            <p>安卓 APK 与 iOS 安装包与网页端内容同源，装好后可应用内检查更新。</p>
          </div>
          <a className="app-download-action" href={DOWNLOAD_URL} target="_blank" rel="noreferrer">
            <span className="app-download-platform">Android · iOS</span>
            <strong>前往下载页</strong>
            <span className="app-download-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>所有笔记均保留原始完整内容</p>
        <a href="#subjects">
          回到科目列表 <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </div>
  )
}
