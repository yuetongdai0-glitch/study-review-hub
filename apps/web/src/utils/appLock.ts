/**
 * 站点启动密码。
 *
 * @remarks
 * 纯静态站只能在浏览器这一层做门禁：密码经 PBKDF2 派生后存 localStorage，
 * **本地不存明文**。
 *
 * 解锁状态**只活在 React 内存里**，不写任何存储 —— 所以刷新、重开标签页、
 * 从 App 冷启动都必须重新输入。这就是需求里说的「刷新也不行」。
 *
 * 局限（如实记录）：能打开开发者工具清站点数据的人可以删掉 `study-hub:lock` 绕过。
 * 真正的门禁只能靠服务端，静态页面做不到；这里挡的是「随手点开链接的人」。
 */

/** 锁配置缓存键。 */
const LOCK_STORAGE_KEY = 'study-hub:lock'

/** PBKDF2 迭代次数：桌面约 60ms，手机约 150ms，打开时无感。 */
const PBKDF2_ROUNDS = 120_000

/** 兜底哈希迭代次数（非 https 且非 localhost 时没有 Web Crypto）。 */
const FALLBACK_ROUNDS = 2_000

/** 口令派生算法。 */
type LockAlgo = 'pbkdf2' | 'fnv'

/** 锁配置。 */
export type LockRecord = {
  /** 版本号，将来换算法时用来识别。 */
  v: 1
  /** 派生算法。 */
  algo: LockAlgo
  /** 迭代次数。 */
  rounds: number
  /** 盐（hex）。 */
  salt: string
  /** 派生结果（hex）。 */
  hash: string
}

/**
 * 字节数组转 hex。
 *
 * @param bytes 字节数组。
 * @returns 小写 hex 字符串。
 */
function toHex(bytes: Uint8Array): string {
  let out = ''
  for (const byte of bytes) out += byte.toString(16).padStart(2, '0')
  return out
}

/**
 * hex 转字节数组。
 *
 * @param hex hex 字符串。
 * @returns 字节数组；长度非法时返回空数组。
 */
function fromHex(hex: string): Uint8Array {
  if (hex.length % 2 !== 0) return new Uint8Array(0)
  const bytes = new Uint8Array(hex.length / 2)
  for (let i = 0; i < bytes.length; i += 1) {
    const value = Number.parseInt(hex.slice(i * 2, i * 2 + 2), 16)
    if (Number.isNaN(value)) return new Uint8Array(0)
    bytes[i] = value
  }
  return bytes
}

/**
 * 生成盐。
 *
 * @returns 16 字节随机盐。
 */
function createSalt(): Uint8Array {
  const bytes = new Uint8Array(16)
  try {
    window.crypto.getRandomValues(bytes)
  } catch {
    // 极端环境（老 WebView）没有随机源：退化成时间戳，安全性下降但功能可用。
    const seed = String(Date.now() + Math.random())
    for (let i = 0; i < bytes.length; i += 1) bytes[i] = seed.charCodeAt(i % seed.length) & 0xff
  }
  return bytes
}

/**
 * 判断 Web Crypto 是否可用。
 *
 * @returns 可用为 true。
 * @remarks `crypto.subtle` 只在 https 或 localhost 下存在，
 * 手机直连局域网 http 调试时会没有，需要兜底算法。
 */
function subtleAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.crypto?.subtle?.deriveBits === 'function'
}

/**
 * 无 Web Crypto 时的兜底哈希（FNV-1a 双通道 + 多轮）。
 *
 * @param password 明文口令。
 * @param saltHex 盐（hex）。
 * @param rounds 轮数。
 * @returns hex 摘要。
 */
function fallbackHash(password: string, saltHex: string, rounds: number): string {
  const input = `${saltHex}:${password}`
  let h1 = 0x811c9dc5
  let h2 = 0x01000193
  for (let round = 0; round < rounds; round += 1) {
    for (let i = 0; i < input.length; i += 1) {
      const code = input.charCodeAt(i)
      h1 = Math.imul(h1 ^ (code + round), 0x01000193) >>> 0
      h2 = Math.imul(h2 ^ (code ^ round), 0x85ebca6b) >>> 0
    }
  }
  return `${h1.toString(16).padStart(8, '0')}${h2.toString(16).padStart(8, '0')}`
}

/**
 * 按指定算法派生根口令。
 *
 * @param password 明文口令。
 * @param saltHex 盐（hex）。
 * @param algo 算法。
 * @param rounds 迭代次数。
 * @returns hex 摘要。
 */
async function derive(
  password: string,
  saltHex: string,
  algo: LockAlgo,
  rounds: number,
): Promise<string> {
  if (algo === 'pbkdf2' && subtleAvailable()) {
    const encoder = new TextEncoder()
    const baseKey = await window.crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, [
      'deriveBits',
    ])
    const bits = await window.crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: fromHex(saltHex) as unknown as BufferSource,
        iterations: rounds,
        hash: 'SHA-256',
      },
      baseKey,
      256,
    )
    return toHex(new Uint8Array(bits))
  }
  return fallbackHash(password, saltHex, algo === 'pbkdf2' ? FALLBACK_ROUNDS : rounds)
}

/**
 * 读取锁配置。
 *
 * @returns 锁配置；未设置或数据损坏时返回 null。
 */
export function readLock(): LockRecord | null {
  try {
    const raw = window.localStorage.getItem(LOCK_STORAGE_KEY)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return null
    const record = parsed as Partial<LockRecord>
    const valid =
      record.v === 1 &&
      (record.algo === 'pbkdf2' || record.algo === 'fnv') &&
      typeof record.rounds === 'number' &&
      record.rounds > 0 &&
      typeof record.salt === 'string' &&
      record.salt.length > 0 &&
      typeof record.hash === 'string' &&
      record.hash.length > 0
    if (!valid) return null
    return record as LockRecord
  } catch {
    // 读取失败按「没设密码」处理，不能把用户关在门外。
    return null
  }
}

/**
 * 是否已设置启动密码。
 *
 * @returns 已设置为 true。
 */
export function hasLock(): boolean {
  return readLock() !== null
}

/**
 * 设置（或修改）启动密码。
 *
 * @param password 新口令。
 * @returns 完成后无返回。
 * @remarks 只覆盖配置，不影响当前会话的解锁状态 —— 本次已经进来了就让人看完，
 * 下次打开才生效。
 */
export async function setLock(password: string): Promise<void> {
  const saltBytes = createSalt()
  const salt = toHex(saltBytes)
  const algo: LockAlgo = subtleAvailable() ? 'pbkdf2' : 'fnv'
  const rounds = algo === 'pbkdf2' ? PBKDF2_ROUNDS : FALLBACK_ROUNDS
  const hash = await derive(password, salt, algo, rounds)
  const record: LockRecord = { v: 1, algo, rounds, salt, hash }
  window.localStorage.setItem(LOCK_STORAGE_KEY, JSON.stringify(record))
}

/**
 * 关闭启动密码。
 *
 * @returns 完成后无返回。
 */
export function clearLock(): void {
  try {
    window.localStorage.removeItem(LOCK_STORAGE_KEY)
  } catch {
    // 清理失败不阻断界面，最坏结果是下次仍要求输入。
  }
}

/**
 * 校验口令。
 *
 * @param password 待校验口令。
 * @returns 正确为 true。
 */
export async function verifyLock(password: string): Promise<boolean> {
  const record = readLock()
  if (!record) return true
  const actual = await derive(password, record.salt, record.algo, record.rounds)
  // 定长比较，避免按字符提前返回泄露长度信息。
  if (actual.length !== record.hash.length) return false
  let diff = 0
  for (let i = 0; i < actual.length; i += 1) diff |= actual.charCodeAt(i) ^ record.hash.charCodeAt(i)
  return diff === 0
}
