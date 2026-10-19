/**
 * 网页部署：本地构建 → 把 dist 推到 gh-pages 分支。
 *
 * 为什么不用 GitHub Actions：站点是纯静态文件，本地一条命令就能出成品，
 * 推到 gh-pages 后 Pages 直接生效，也不用在仓库里存构建缓存。
 *
 * 用法：pnpm deploy:web [--dry-run]
 */
import { cp, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { tmpdir } from 'node:os'

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(here, '..')
const dryRun = process.argv.includes('--dry-run')

/**
 * 跑命令并返回输出。
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

const remote = run('git', ['remote', 'get-url', 'origin'], repoRoot).trim()
const version = JSON.parse(run('cat', ['package.json'], repoRoot)).version

console.log('① 构建站点…')
run('pnpm', ['--filter', '@study-hub/web', 'build'], repoRoot)

const dist = resolve(repoRoot, 'apps/web/dist')
const stage = await mkdtemp(join(tmpdir(), 'study-hub-pages-'))
await cp(dist, stage, { recursive: true })
await writeFile(join(stage, '.nojekyll'), '')

const commitMessage = `deploy: v${version} ${new Date().toISOString().slice(0, 16).replace('T', ' ')}`
run('git', ['init', '-q', '-b', 'gh-pages'], stage)
run('git', ['add', '-A'], stage)
run(
  'git',
  ['-c', 'user.name=study-hub', '-c', 'user.email=study-hub@local', 'commit', '-q', '-m', commitMessage],
  stage
)
run('git', ['remote', 'add', 'origin', remote], stage)

if (dryRun) {
  console.log(`--dry-run：产物已就绪但未推送：${stage}`)
} else {
  console.log('② 推送到 gh-pages…')
  run(
    'git',
    ['-c', 'credential.helper=osxkeychain', '-c', 'http.version=HTTP/1.1', 'push', '-f', 'origin', 'gh-pages'],
    stage,
    { GIT_TERMINAL_PROMPT: '0' }
  )
  await rm(stage, { recursive: true, force: true })
  console.log('已部署。Pages 约 10~20 秒生效（CDN 缓存 10 分钟，验证时加 ?v=时间戳）。')
}
