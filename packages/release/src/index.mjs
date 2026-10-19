/**
 * 发布清单：网页端、安卓端、iOS 端、发布脚本共用的一层纯函数。
 * 规则集中在这里，避免「构建时写一套、检查更新时又写一套」导致版本比对口径不一致。
 */
import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs'

/** 清单只接受这些主机上的安装包地址，防止把用户引到任意域名。 */
export const ALLOWED_DOWNLOAD_HOSTS = [
  'github.com',
  'objects.githubusercontent.com',
  'release-assets.githubusercontent.com',
  'raw.githubusercontent.com'
]

/**
 * 计算文件 SHA-256。
 * @param {string} path 文件路径。
 * @returns {Promise<string>} 十六进制摘要。
 */
export async function sha256File(path) {
  const hash = createHash('sha256')
  await new Promise((resolve, reject) => {
    createReadStream(path)
      .on('data', (chunk) => hash.update(chunk))
      .on('error', reject)
      .on('end', resolve)
  })
  return hash.digest('hex')
}

/**
 * 校验 SHA-256 形态：必须完整 64 位，不接受截断或模糊匹配。
 * @param {string} digest 候选摘要。
 * @returns {boolean} 是否合法。
 */
export function isDigest(digest) {
  return typeof digest === 'string' && /^[0-9a-f]{64}$/i.test(digest)
}

/**
 * 从 android/app/build.gradle 里读出版本号，作为安卓清单的唯一事实来源。
 * @param {string} gradle 构建脚本内容。
 * @returns {{versionCode: number, versionName: string}} 版本信息。
 */
export function readAndroidVersion(gradle) {
  const code = gradle.match(/versionCode\s+(\d+)/)
  const name = gradle.match(/versionName\s+["']([^"']+)["']/)
  if (!code || !name) throw new Error('无法从 build.gradle 解析 versionCode / versionName')
  return { versionCode: Number(code[1]), versionName: name[1] }
}

/**
 * 用语义化版本段推导安卓 versionCode，避免手工维护两个版本号时错位。
 * 规则：主 * 10000 + 次 * 100 + 修订，够用到 99.99.99。
 * @param {string} version 形如 2.0.3 的版本号。
 * @returns {number} versionCode。
 */
export function versionCodeOf(version) {
  const parts = version.split('.').map((part) => Number(part))
  if (parts.length < 3 || parts.some((part) => !Number.isInteger(part) || part < 0)) {
    throw new Error(`版本号必须为 主.次.修订 形式：${version}`)
  }
  const [major, minor, patch] = parts
  if (major > 99 || minor > 99 || patch > 99) throw new Error(`版本段不能超过 99：${version}`)
  return major * 10000 + minor * 100 + patch
}

/**
 * 校验安装包地址：必须是受信 HTTPS 主机，且不带账号、端口、片段。
 * @param {string} url 候选地址。
 * @returns {boolean} 是否可对外发布。
 */
export function isAllowedDownloadUrl(url) {
  let parsed
  try {
    parsed = new URL(url)
  } catch {
    return false
  }
  if (parsed.protocol !== 'https:') return false
  if (parsed.username || parsed.password || parsed.hash) return false
  if (parsed.port && parsed.port !== '443') return false
  const host = parsed.hostname.toLowerCase()
  if (ALLOWED_DOWNLOAD_HOSTS.includes(host)) return true
  /* GitHub Pages 的静态直链都落在 <owner>.github.io 下。 */
  return host.startsWith('yuetongdai0-glitch.github.io')
}

/**
 * 生成一份完整的应用清单（同时服务安卓应用内更新与下载页）。
 * @param {object} input 入参。
 * @param {string} input.appVersion 应用版本号。
 * @param {{versionCode: number, versionName: string}} input.android 安卓版本。
 * @param {string} input.apkUrl APK 直链。
 * @param {string} input.apkSha256 APK 摘要。
 * @param {number} input.apkBytes APK 字节数。
 * @param {number} [input.minSdk] 最低系统版本。
 * @param {string} input.webUrl 网页版地址。
 * @param {string} input.webBuildId 网页构建号。
 * @param {string} [input.webVersion] 网页版本号。
 * @param {string} [input.iosUrl] iOS 安装包地址（可缺省）。
 * @param {string} [input.iosSha256] iOS 包摘要。
 * @param {string} [input.iosNote] iOS 签名说明。
 * @returns {object} 清单对象。
 */
export function buildAppManifest(input) {
  if (!isDigest(input.apkSha256)) throw new Error('APK SHA-256 非法')
  if (!isAllowedDownloadUrl(input.apkUrl)) throw new Error(`APK 地址不在受信主机：${input.apkUrl}`)
  if (!Number.isInteger(input.android.versionCode) || input.android.versionCode < 1) {
    throw new Error('versionCode 必须为正整数')
  }
  const manifest = {
    schema: 1,
    app: 'study-hub',
    appId: 'app.studyhub.reader',
    appVersion: input.appVersion,
    publishedAt: new Date().toISOString(),
    android: {
      versionCode: input.android.versionCode,
      versionName: input.android.versionName,
      minSdk: input.minSdk ?? 23,
      apkUrl: input.apkUrl,
      sha256: input.apkSha256,
      sizeBytes: input.apkBytes
    },
    web: {
      url: input.webUrl,
      buildId: input.webBuildId,
      version: input.webVersion ?? input.appVersion
    }
  }
  if (input.iosUrl) {
    manifest.ios = {
      url: input.iosUrl,
      sha256: input.iosSha256 ?? '',
      signed: false,
      note: input.iosNote ?? '未签名包，需自行签名后安装'
    }
  }
  return manifest
}

/**
 * 判断客户端是否需要更新，口径与安卓插件一致（仅比 versionCode）。
 * @param {number} installed 已安装 versionCode。
 * @param {number} latest 清单 versionCode。
 * @returns {'available'|'current'|'invalid'} 结论。
 */
export function decideUpdate(installed, latest) {
  if (!Number.isInteger(installed) || !Number.isInteger(latest) || latest < 1) return 'invalid'
  return latest > installed ? 'available' : 'current'
}
