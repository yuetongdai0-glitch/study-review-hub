/**
 * 发布：一条命令完成「建站 → 判断要不要重打包 → 打安卓/iOS → 只保留最新产物 →
 * 生成 app-version.json 与下载页 → 推送 → 清理本地构建垃圾」。
 *
 * 三条硬规则（都是为了避免白干活和占空间）：
 * 1. 打包指纹没变就跳过打包：指纹 = 版本号 + 网页内容摘要 + 原生工程源码摘要。
 *    网页里任何一个字没改、原生代码没改，就直接复用发布仓库里已有的安装包。
 * 2. 发布仓库只留最新：每次发布后删掉 releases/ 下不属于当前清单的旧包。
 * 3. 打完就清：主仓库的 dist / build / Gradle 产物全部删除，只留下源码。
 *    （Pods 与 Gradle 的全局缓存在 ~/，那是依赖不是产物，保留以加速下次构建。）
 *
 * 用法：
 *   pnpm release             完整发布
 *   pnpm release --force     忽略指纹，强制重打包
 *   pnpm release --android   只打安卓
 *   pnpm release --ios       只打 iOS
 *   pnpm release --web-only  只重建网页与下载页（不碰安装包）
 *   pnpm release --dry-run   出包并生成文件，但不提交推送、不清理
 */
import { copyFile, mkdir, readFile, readdir, rm, stat, unlink, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildAppManifest, sha256File, versionCodeOf } from '../packages/release/src/index.mjs'
import { renderPage } from './release-page.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(here, '..')
const mobileRoot = resolve(repoRoot, 'apps/mobile')
const webRoot = resolve(repoRoot, 'apps/web')
const releaseRepo = process.env.RELEASE_REPO_DIR ?? resolve(repoRoot, '../zl-study-hub-releases')

const cargo = process.argv.slice(2)
const dryRun = cargo.includes('--dry-run')
const force = cargo.includes('--force')
const onlyAndroid = cargo.includes('--android')
const onlyIos = cargo.includes('--ios')
const webOnly = cargo.includes('--web-only')

const OWNER = 'yuetongdai0-glitch'
const WEB_URL = `https://${OWNER}.github.io/study-review-hub/`
const RELEASE_URL = `https://${OWNER}.github.io/study-hub-releases/`
const STATE_FILE = join(releaseRepo, '.release-state.json')

/**
 * 同步执行命令并返回标准输出。
 * @param {string} command 可执行文件。
 * @param {string[]} args 参数。
 * @param {string} cwd 工作目录。
 * @param {object} [env] 附加环境变量。
 * @returns {string} 标准输出。
 */
function run(command, args, cwd, env = {}) {
  return execFileSync(command, args, {
    cwd,
    env: { ...process.env, ...env },
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe']
  })
}

/**
 * 递归收集文件内容摘要，用于判断原生工程是否真的改过。
 * @param {string[]} roots 目录或文件列表。
 * @param {RegExp} include 只统计匹配的文件。
 * @returns {Promise<string>} 十六进制摘要。
 */
async function hashTree(roots, include) {
  const hash = createHash('sha256')
  const walk = async (path) => {
    const info = await stat(path).catch(() => null)
    if (!info) return
    if (info.isDirectory()) {
      const entries = await readdir(path, { withFileTypes: true })
      for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
        /* 跳过生成目录与依赖，只算真正的源码。 */
        if (/^(build|dist|Pods|node_modules|\.gradle|public)$/.test(entry.name)) continue
        await walk(join(path, entry.name))
      }
      return
    }
    if (!include.test(path)) return
    hash.update(path.slice(repoRoot.length))
    hash.update(await readFile(path))
  }
  for (const root of roots) await walk(root)
  return hash.digest('hex')
}

/**
 * 计算本次打包的指纹：只要它没变，安装包就一定和上次一样。
 * @param {{buildId: string, version: string}} web 网页构建信息。
 * @returns {Promise<string>} 指纹摘要。
 */
async function fingerprint(web) {
  const native = await hashTree(
    [
      join(mobileRoot, 'android/app/src'),
      join(mobileRoot, 'android/app/build.gradle'),
      join(mobileRoot, 'android/variables.gradle'),
      join(mobileRoot, 'android/build.gradle'),
      join(mobileRoot, 'android/settings.gradle'),
      join(mobileRoot, 'ios/App/App'),
      join(mobileRoot, 'ios/App/Podfile'),
      join(mobileRoot, 'capacitor.config.ts'),
      join(mobileRoot, 'scripts'),
      join(mobileRoot, 'package.json')
    ],
    /\.(java|kt|xml|gradle|properties|swift|plist|pbxproj|xcconfig|mjs|ts|json|storyboard)$/
  )
  return createHash('sha256')
    .update(`${web.version}\n${web.buildId}\n${native}`)
    .digest('hex')
}

/**
 * 读取上次发布留下的状态。
 * @returns {Promise<object|null>} 状态对象。
 */
async function readState() {
  if (!existsSync(STATE_FILE)) return null
  try {
    return JSON.parse(await readFile(STATE_FILE, 'utf8'))
  } catch {
    return null
  }
}

/* ---------- ① 建站 ---------- */
console.log('① 构建网页站点…')
run(process.execPath, [join(webRoot, 'scripts/build.mjs')], repoRoot)
const webVersion = JSON.parse(await readFile(join(webRoot, 'dist/version.json'), 'utf8'))
const version = webVersion.version
console.log(`   版本 ${version} · 构建号 ${webVersion.buildId}`)

/* ---------- ② 判断要不要打包 ---------- */
const print = await fingerprint(webVersion)
const state = await readState()
const apkName = `study-hub-${version}.apk`
const ipaName = `study-hub-${version}-unsigned.ipa`
const apkPath = join(releaseRepo, 'releases/android', apkName)
const ipaPath = join(releaseRepo, 'releases/ios', ipaName)

const fingerprintMatched = !force && state?.fingerprint === print
const androidReady = existsSync(apkPath)
const iosReady = existsSync(ipaPath)

const needAndroid = !webOnly && !onlyIos && !(fingerprintMatched && androidReady)
const needIos = !webOnly && !onlyAndroid && !(fingerprintMatched && iosReady)

if (webOnly) {
  console.log('② 仅重建网页，跳过打包')
} else if (!needAndroid && !needIos) {
  console.log(`② 安装包无改动（指纹 ${print.slice(0, 12)}… 与上次一致），跳过打包`)
} else {
  console.log(
    `② 需要打包：${[needAndroid && 'Android', needIos && 'iOS'].filter(Boolean).join(' + ')}${
      force ? '（--force 强制重建）' : ''
    }`
  )
}

/* ---------- ③ 打包 ---------- */
if (needAndroid) {
  console.log('   打安卓 release…')
  run(process.execPath, [join(mobileRoot, 'scripts/build-android.mjs')], mobileRoot)
  await mkdir(dirname(apkPath), { recursive: true })
  await copyFile(join(mobileRoot, 'dist', `study-hub-${version}-release.apk`), apkPath)
}

if (needIos) {
  console.log('   打 iOS（未签名）…')
  run(process.execPath, [join(mobileRoot, 'scripts/build-ios.mjs')], mobileRoot)
  await mkdir(dirname(ipaPath), { recursive: true })
  await copyFile(join(mobileRoot, 'dist', `study-hub-${version}-unsigned.ipa`), ipaPath)
}

/* ---------- ④ 只保留最新安装包 ---------- */
const previousPath = join(releaseRepo, 'app-version.json')
const previous = existsSync(previousPath) ? JSON.parse(await readFile(previousPath, 'utf8')) : null

/**
 * 删掉 releases/ 下不属于当前版本的文件：下载仓库只提供最新版，旧包不再堆积。
 * @param {string} dir 目录。
 * @param {string} keep 需要保留的文件名。
 * @param {number} maxAgeDays 保险：只清 7 天以上的文件，避免误删刚写入的产物。
 * @returns {Promise<string[]>} 被删除的文件名。
 */
async function prune(dir, keep, maxAgeDays = 0) {
  if (!existsSync(dir)) return []
  const removed = []
  const now = Date.now()
  for (const name of await readdir(dir)) {
    if (name === keep || name.startsWith('.')) continue
    const path = join(dir, name)
    const info = await stat(path)
    if (maxAgeDays && now - info.mtimeMs < maxAgeDays * 86400000) continue
    await unlink(path)
    removed.push(name)
  }
  return removed
}

const removed = [...(await prune(join(releaseRepo, 'releases/android'), apkName)), ...(await prune(join(releaseRepo, 'releases/ios'), ipaName))]
if (removed.length) console.log(`④ 清理旧安装包 ${removed.length} 个：${removed.join('、')}`)

/* ---------- ⑤ 生成清单与下载页 ---------- */
/**
 * 描述一个已落盘的产物；以磁盘实际文件为准算摘要，保证清单与文件一致。
 * @param {string} path 产物路径。
 * @param {string} url 对外地址。
 * @returns {Promise<{size: number, sha256: string, url: string}|null>} 产物信息。
 */
async function describe(path, url) {
  if (!existsSync(path)) return null
  const info = await stat(path)
  return { size: info.size, sha256: await sha256File(path), url }
}

/**
 * 把清单里的 URL 映射回仓库内路径，供「只跑单平台」时沿用另一个平台的产物。
 * @param {string} url 对外地址。
 * @returns {string} 本地路径。
 */
function localPathOf(url) {
  return join(releaseRepo, url.replace(RELEASE_URL, ''))
}

const androidArtifact =
  (await describe(apkPath, `${RELEASE_URL}releases/android/${apkName}`)) ??
  (previous?.android?.apkUrl ? await describe(localPathOf(previous.android.apkUrl), previous.android.apkUrl) : null)

const iosArtifact =
  (await describe(ipaPath, `${RELEASE_URL}releases/ios/${ipaName}`)) ??
  (previous?.ios?.url ? await describe(localPathOf(previous.ios.url), previous.ios.url) : null)

if (!androidArtifact) throw new Error('缺少安卓安装包，无法生成清单（先跑一次不带 --web-only 的发布）')

const manifest = buildAppManifest({
  appVersion: version,
  android: { versionCode: versionCodeOf(version), versionName: version },
  apkUrl: androidArtifact.url,
  apkSha256: androidArtifact.sha256,
  apkBytes: androidArtifact.size,
  minSdk: 23,
  webUrl: WEB_URL,
  webBuildId: webVersion.buildId,
  webVersion: version,
  iosUrl: iosArtifact?.url,
  iosSha256: iosArtifact?.sha256,
  iosNote: '未签名包，需用 AltStore / Sideloadly / Xcode 用自己 Apple ID 重签后安装'
})

await writeFile(previousPath, `${JSON.stringify(manifest, null, 2)}\n`)
await writeFile(
  join(releaseRepo, 'index.html'),
  renderPage({
    version,
    webVersion,
    android: androidArtifact,
    ios: iosArtifact,
    apkName,
    ipaName
  })
)
await writeFile(
  STATE_FILE,
  `${JSON.stringify({ fingerprint: print, buildId: webVersion.buildId, version, at: new Date().toISOString() }, null, 2)}\n`
)
console.log(`   APK ${(androidArtifact.size / 1048576).toFixed(2)} MiB · SHA ${androidArtifact.sha256.slice(0, 16)}…`)
if (iosArtifact) console.log(`   IPA ${(iosArtifact.size / 1048576).toFixed(2)} MiB`)

/* ---------- ⑥ 提交推送 ---------- */
if (dryRun) {
  console.log('\n--dry-run：已跳过提交、推送与清理。')
} else {
  console.log('⑥ 推送发布仓库…')
  run('git', ['add', '-A'], releaseRepo)
  if (run('git', ['status', '--porcelain'], releaseRepo).trim()) {
    run('git', ['commit', '-m', `release: v${version}（${needAndroid || needIos ? '重新打包' : '仅更新清单'}）`], releaseRepo)
    run(
      'git',
      ['-c', 'credential.helper=osxkeychain', '-c', 'http.version=HTTP/1.1', 'push', 'origin', 'main'],
      releaseRepo,
      { GIT_TERMINAL_PROMPT: '0' }
    )
    console.log('   已推送')
  } else {
    console.log('   无变更，跳过提交')
  }

  /* ---------- ⑦ 清理本地构建产物 ---------- */
  const junk = [
    join(webRoot, 'dist'),
    join(mobileRoot, 'dist'),
    join(mobileRoot, 'build'),
    join(mobileRoot, 'android/app/build'),
    join(mobileRoot, 'android/build'),
    join(mobileRoot, 'android/.gradle'),
    join(mobileRoot, 'ios/App/App/public')
  ]
  let freed = 0
  for (const path of junk) {
    const info = await stat(path).catch(() => null)
    if (!info) continue
    freed += await dirSize(path)
    /* 用 fs 删除而非 shell，避免把「构建产物」误当项目文件。 */
    await rm(path, { recursive: true, force: true })
  }
  console.log(`⑦ 已清理本地构建产物 ${(freed / 1048576).toFixed(0)} MiB（apps/web/dist、apps/mobile/{dist,build}、Gradle 输出）`)
  console.log(`\n下载页：${RELEASE_URL}`)
  console.log(`网页版：${WEB_URL}`)
}

/**
 * 递归统计目录体积。
 * @param {string} path 目录。
 * @returns {Promise<number>} 字节数。
 */
async function dirSize(path) {
  const info = await stat(path).catch(() => null)
  if (!info) return 0
  if (!info.isDirectory()) return info.size
  let total = 0
  for (const entry of await readdir(path, { withFileTypes: true })) {
    total += await dirSize(join(path, entry.name))
  }
  return total
}
