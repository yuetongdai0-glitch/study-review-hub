/**
 * 解析本机可用的 JDK：Capacitor 7 / AGP 8 需要 JDK 21，系统默认的 24 会让 Gradle 直接拒绝执行。
 */
import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'

/** 候选 JDK 首页，按优先级排列。 */
const CANDIDATES = [
  '/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home',
  `${process.env.HOME}/Library/Java/JavaVirtualMachines/temurin-21.jdk/Contents/Home`,
  '/Library/Java/JavaVirtualMachines/temurin-21.jdk/Contents/Home',
  '/Library/Java/JavaVirtualMachines/zulu-21.jdk/Contents/Home',
  '/usr/local/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home'
]

/**
 * 找出可用的 JDK 21 根目录。
 * @returns {string} JDK 路径。
 */
export function javaHome() {
  for (const candidate of CANDIDATES) {
    if (existsSync(candidate)) return candidate
  }
  if (process.env.JAVA_HOME && existsSync(process.env.JAVA_HOME)) {
    const version = execFileSync(`${process.env.JAVA_HOME}/bin/java`, ['-version'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe']
    })
    if (version.includes('"21')) return process.env.JAVA_HOME
  }
  try {
    const detected = execFileSync('/usr/libexec/java_home', ['-v', '21'], { encoding: 'utf8' }).trim()
    if (detected) return detected
  } catch {
    /* 没装 21 就走下面的报错。 */
  }
  throw new Error('未找到 JDK 21，请先执行：brew install openjdk@21')
}

/**
 * 安卓构建环境：在继承当前环境的前提下固定 JAVA_HOME 与 SDK 路径。
 * @returns {NodeJS.ProcessEnv} 环境变量。
 */
export function androidEnv() {
  const sdk =
    process.env.ANDROID_HOME ||
    process.env.ANDROID_SDK_ROOT ||
    `${process.env.HOME}/Library/Android/sdk`
  if (!existsSync(sdk)) throw new Error(`找不到 Android SDK：${sdk}`)
  return {
    ...process.env,
    JAVA_HOME: javaHome(),
    ANDROID_HOME: sdk,
    ANDROID_SDK_ROOT: sdk,
    /* 避免 Gradle 争抢内存，也让日志里不出现彩色控制符。 */
    GRADLE_OPTS: process.env.GRADLE_OPTS ?? '-Dorg.gradle.daemon=false'
  }
}
