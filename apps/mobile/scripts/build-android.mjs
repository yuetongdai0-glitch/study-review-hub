/**
 * 安卓本地打包：同步版本 → 灌网页 → Gradle assembleRelease → 产出到 apps/mobile/dist。
 * 全程命令行，不启动 Android Studio，不弹窗口，可直接在后台跑。
 *
 * 用法：
 *   pnpm mobile:android            正式包（release，带签名）
 *   pnpm mobile:android --debug    debug 包（快速验证）
 *   pnpm mobile:android --skip-web 复用现有 dist
 */
import { copyFile, mkdir, readFile, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { androidEnv } from './android-env.mjs'
import { ensureWebDist, mobileRoot, run } from './sync.mjs'
import { ensureKeystore } from './keystore.mjs'
import { syncVersion } from './version.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const cargo = process.argv.slice(2)
const mode = cargo.includes('--debug') ? 'debug' : 'release'
const skipWeb = cargo.includes('--skip-web')

await syncVersion()
ensureWebDist(!skipWeb)

/* Capacitor sync 会把 dist 复制进 android/app/src/main/assets/public */
const cli = resolve(mobileRoot, 'node_modules/@capacitor/cli/bin/capacitor')
run(process.execPath, [cli, 'sync', 'android'], { cwd: mobileRoot })

if (mode === 'release') await ensureKeystore()

const env = androidEnv()
const gradleTask = mode === 'release' ? 'assembleRelease' : 'assembleDebug'
run('./gradlew', [gradleTask, '--console=plain', '--no-daemon', '-q'], {
  cwd: resolve(mobileRoot, 'android'),
  env
})

const apkPath = resolve(
  mobileRoot,
  `android/app/build/outputs/apk/${mode}/app-${mode}.apk`
)
if (!existsSync(apkPath)) throw new Error(`未找到 APK 产物：${apkPath}`)

const version = JSON.parse(await readFile(resolve(here, '../../../package.json'), 'utf8')).version
const outDir = resolve(mobileRoot, 'dist')
await mkdir(outDir, { recursive: true })
const target = join(outDir, `study-hub-${version}-${mode}.apk`)
await copyFile(apkPath, target)

const info = await stat(target)
const hash = createHash('sha256')
hash.update(await readFile(target))

console.log(
  [
    '安卓打包完成',
    `  文件：${target}`,
    `  体积：${(info.size / 1024 / 1024).toFixed(2)} MiB`,
    `  sha256：${hash.digest('hex')}`,
    `  版本：${version}（${mode}）`
  ].join('\n')
)
