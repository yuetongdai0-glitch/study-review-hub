/**
 * 发布签名材料：首次构建时自动生成一个长期有效的 keystore，并把口令写进本地的
 * android/app/keystore.properties（已 gitignore，不入库）。
 *
 * 为什么必须固定：应用内更新要求「新包签名 == 已装包签名」，换钥匙就再也装不上去。
 * 所以 keystore 目录请自己备份一份（比如放到私有网盘），丢了只能卸载重装。
 */
import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { randomBytes } from 'node:crypto'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { javaHome } from './android-env.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const androidDir = resolve(here, '../android')
const keystoreDir = resolve(androidDir, 'keystore')
const keystoreFile = resolve(keystoreDir, 'study-hub.jks')
const propsFile = resolve(androidDir, 'app/keystore.properties')
const passwordFile = resolve(keystoreDir, 'password.txt')

const ALIAS = 'studyhub'

/**
 * 确保签名材料可用。
 * @returns {Promise<{created: boolean, keystoreFile: string}>} 结果。
 */
export async function ensureKeystore() {
  await mkdir(keystoreDir, { recursive: true })

  if (!existsSync(keystoreFile)) {
    const password = existsSync(passwordFile)
      ? (await readFile(passwordFile, 'utf8')).trim()
      : randomBytes(18).toString('base64').replace(/[^A-Za-z0-9]/g, '').slice(0, 22)
    await writeFile(passwordFile, `${password}\n`, { mode: 0o600 })

    const keytool = resolve(javaHome(), 'bin/keytool')
    execFileSync(
      keytool,
      [
        '-genkeypair',
        '-noprompt',
        '-keystore', keystoreFile,
        '-alias', ALIAS,
        '-keyalg', 'RSA',
        '-keysize', '2048',
        '-validity', '10000',
        '-storepass', password,
        '-keypass', password,
        '-dname', 'CN=Study Hub, OU=Personal, O=Study Hub, L=Local, ST=Local, C=CN'
      ],
      { stdio: ['ignore', 'pipe', 'pipe'] }
    )
  }

  const password = (await readFile(passwordFile, 'utf8')).trim()
  await writeFile(
    propsFile,
    [
      '# 由 scripts/keystore.mjs 生成，勿入库（含口令）',
      `storeFile=../keystore/study-hub.jks`,
      `storePassword=${password}`,
      `keyAlias=${ALIAS}`,
      `keyPassword=${password}`,
      ''
    ].join('\n')
  )

  return { created: !existsSync(keystoreFile), keystoreFile }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const info = await ensureKeystore()
  console.log(`签名材料就绪：${info.keystoreFile}`)
}
