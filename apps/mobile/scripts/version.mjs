/**
 * 版本号单一事实来源：仓库根 package.json → android/app/version.properties。
 * 让「网站版本」和「APK 版本」不会各说各话——应用内更新就是靠 versionCode 判断新旧的。
 */
import { readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))

/**
 * 语义化版本转安卓 versionCode（主*10000 + 次*100 + 修订）。
 * @param {string} version 版本号。
 * @returns {number} versionCode。
 */
export function versionCodeOf(version) {
  const parts = version.split('.').map(Number)
  if (parts.length < 3 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 99)) {
    throw new Error(`版本号必须为 0-99 的 主.次.修订：${version}`)
  }
  const [major, minor, patch] = parts
  return major * 10000 + minor * 100 + patch
}

/**
 * 读取仓库根版本号并同步到安卓工程。
 * @returns {Promise<{version: string, versionCode: number}>} 版本信息。
 */
export async function syncVersion() {
  const pkg = JSON.parse(await readFile(resolve(here, '../../../package.json'), 'utf8'))
  const versionCode = versionCodeOf(pkg.version)
  const target = resolve(here, '../android/app/version.properties')
  await writeFile(
    target,
    `# 由 apps/mobile/scripts/version.mjs 依据仓库根 package.json 生成，勿手改。\nversionCode=${versionCode}\nversionName=${pkg.version}\n`
  )
  return { version: pkg.version, versionCode }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const info = await syncVersion()
  console.log(`版本已同步：${info.version}（versionCode ${info.versionCode}）`)
}
