/**
 * 移动端同步：先构建网页，再把 dist 灌进原生工程。
 * 全程命令行，不打开 Xcode / Android Studio，不弹任何窗口。
 */
import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
export const mobileRoot = resolve(here, '..')
export const repoRoot = resolve(mobileRoot, '../..')
export const webRoot = resolve(repoRoot, 'apps/web')

/**
 * 同步执行命令，失败即抛出，避免后续步骤在坏产物上继续跑。
 * @param {string} command 可执行文件。
 * @param {string[]} args 参数。
 * @param {object} [options] spawnSync 选项。
 * @returns {void}
 */
export function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: false,
    ...options
  })
  if (result.error) throw result.error
  if (result.status !== 0) throw new Error(`命令失败（${result.status}）：${command} ${args.join(' ')}`)
}

/**
 * 确保网页产物存在；带 --force 时强制重建。
 * @param {boolean} force 是否强制重建。
 * @returns {void}
 */
export function ensureWebDist(force = false) {
  const index = resolve(webRoot, 'dist/index.html')
  if (!force && existsSync(index)) return
  // 走 package 脚本：类型检查 + Vite 构建，与网页发布用的是同一条链路。
  run('pnpm', ['--filter', '@study-hub/web', 'build'], { cwd: repoRoot })
}

if (import.meta.url === `file://${process.argv[1]}`) {
  ensureWebDist(process.argv.includes('--force'))
  const cli = resolve(mobileRoot, 'node_modules/@capacitor/cli/bin/capacitor')
  if (!existsSync(cli)) throw new Error('缺少 Capacitor CLI，请先在仓库根目录执行 pnpm install')
  run(process.execPath, [cli, 'sync'], { cwd: mobileRoot })
  console.log('移动工程已同步（网页产物已灌入 android / ios）。')
}
