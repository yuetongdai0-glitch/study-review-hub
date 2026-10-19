/**
 * 清理构建产物：安装包只应存在于发布仓库，主仓库不留任何可再生的二进制。
 * 单独抽出来，方便手动跑（比如中断了一次打包、或想确认没有残留）。
 */
import { readdir, rm, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/** 构建产物目录：全部可再生，删掉不影响开发。 */
const targets = [
  'apps/web/dist',
  'apps/mobile/dist',
  'apps/mobile/build',
  'apps/mobile/android/app/build',
  'apps/mobile/android/build',
  'apps/mobile/android/.gradle',
  'apps/mobile/ios/App/App/public'
]

/**
 * 递归统计目录体积。
 * @param {string} path 路径。
 * @returns {Promise<number>} 字节数。
 */
async function sizeOf(path) {
  const info = await stat(path).catch(() => null)
  if (!info) return 0
  if (!info.isDirectory()) return info.size
  let total = 0
  for (const entry of await readdir(path, { withFileTypes: true })) total += await sizeOf(join(path, entry.name))
  return total
}

let freed = 0
for (const relative of targets) {
  const path = join(repoRoot, relative)
  if (!existsSync(path)) continue
  freed += await sizeOf(path)
  await rm(path, { recursive: true, force: true })
  console.log(`已删除 ${relative}`)
}

console.log(`共释放 ${(freed / 1048576).toFixed(0)} MiB`)
