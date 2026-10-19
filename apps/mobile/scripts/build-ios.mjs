/**
 * iOS 本地打包：同步网页 → xcodebuild 出真机 Release 包 → 组装未签名 IPA。
 *
 * 说明：
 * - 未签名 IPA 不能用「文件」直接装，需要用 AltStore / Sideloadly / Xcode 用你自己的
 *   Apple ID 重签（免费账号 7 天有效，付费开发者 1 年）。
 * - 若本机已装 iOS 开发者证书与描述文件，传 --signed 可让 xcodebuild 直接签好。
 * - 全程命令行，不打开 Xcode 界面。
 *
 * 用法：
 *   pnpm mobile:ios                 未签名 IPA（可自行重签）
 *   pnpm mobile:ios --signed        用本机证书签名
 *   pnpm mobile:ios --simulator     只出模拟器产物（快速验证能否编译）
 */
import { copyFile, cp, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ensureWebDist, mobileRoot, run } from './sync.mjs'
import { syncVersion } from './version.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const cargo = process.argv.slice(2)
const signed = cargo.includes('--signed')
const simulator = cargo.includes('--simulator')

if (process.platform !== 'darwin') throw new Error('iOS 打包只能在 macOS 上执行')

const { version: appVersion } = await syncVersion()
ensureWebDist(!simulator)

const cli = resolve(mobileRoot, 'node_modules/@capacitor/cli/bin/capacitor')
run(process.execPath, [cli, 'sync', 'ios'], { cwd: mobileRoot })

const appDir = resolve(mobileRoot, 'ios/App')
const buildDir = resolve(mobileRoot, 'build/ios')
await mkdir(buildDir, { recursive: true })

const shared = [
  '-workspace', 'App.xcworkspace',
  '-scheme', 'App',
  '-configuration', 'Release',
  '-derivedDataPath', buildDir,
  '-skipPackageUpdates'
]

if (simulator) {
  run('xcodebuild', [
    ...shared,
    '-sdk', 'iphonesimulator',
    '-destination', 'generic/platform=iOS Simulator',
    'CODE_SIGNING_ALLOWED=NO',
    'build'
  ], { cwd: appDir })
  console.log(`iOS 模拟器构建完成：${join(buildDir, 'Build/Products/Release-iphonesimulator/App.app')}`)
  process.exit(0)
}

/* 未签名时显式关掉签名，否则 xcodebuild 会因为找不到描述文件直接失败。 */
const signFlags = signed
  ? ['-allowProvisioningUpdates']
  : ['CODE_SIGNING_ALLOWED=NO', 'CODE_SIGNING_REQUIRED=NO', 'CODE_SIGN_IDENTITY=""']

run('xcodebuild', [...shared, '-sdk', 'iphoneos', ...signFlags, 'build'], { cwd: appDir })

const builtApp = join(buildDir, 'Build/Products/Release-iphoneos/App.app')
if (!existsSync(builtApp)) throw new Error(`未找到 .app 产物：${builtApp}`)

/* 组装 IPA：Payload/App.app 再整体 zip，这是 iTunes/AltStore 认的结构。 */
const stage = join(buildDir, 'ipa')
await rm(stage, { recursive: true, force: true })
await mkdir(join(stage, 'Payload'), { recursive: true })
await cp(builtApp, join(stage, 'Payload/App.app'), { recursive: true })

const outDir = resolve(mobileRoot, 'dist')
await mkdir(outDir, { recursive: true })
const suffix = signed ? 'signed' : 'unsigned'
const ipaPath = join(outDir, `study-hub-${appVersion}-${suffix}.ipa`)
await rm(ipaPath, { force: true })

/* ditto 打包能保留符号链接与扩展属性，zip 命令会丢 __extensions__。 */
run('ditto', ['-c', '-k', '--sequesterRsrc', '--keepParent', join(stage, 'Payload'), ipaPath])

const info = await stat(ipaPath)
const hash = createHash('sha256')
hash.update(await readFile(ipaPath))
console.log(
  [
    'iOS 包制作完成',
    `  文件：${ipaPath}`,
    `  体积：${(info.size / 1024 / 1024).toFixed(2)} MiB`,
    `  sha256：${hash.digest('hex')}`,
    signed ? '  已签名，可直接安装' : '  未签名：需用 AltStore / Sideloadly / Xcode 用自己 Apple ID 重签后安装'
  ].join('\n')
)
