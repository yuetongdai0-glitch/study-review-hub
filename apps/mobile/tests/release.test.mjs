import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  buildAppManifest,
  decideUpdate,
  isAllowedDownloadUrl,
  isDigest,
  readAndroidVersion,
  versionCodeOf
} from '../../../packages/release/src/index.mjs'
import { versionCodeOf as mobileVersionCode } from '../scripts/version.mjs'

test('语义化版本推导 versionCode，主次修订各占两位', () => {
  assert.equal(versionCodeOf('2.0.0'), 20000)
  assert.equal(versionCodeOf('2.0.3'), 20003)
  assert.equal(versionCodeOf('10.11.99'), 101199)
  assert.throws(() => versionCodeOf('2.0'), /主\.次\.修订/)
  assert.throws(() => versionCodeOf('2.0.100'), /不能超过 99/)
})

test('移动端脚本与发布包共用同一套 versionCode 规则', () => {
  for (const version of ['1.0.0', '2.3.4', '9.9.9']) {
    assert.equal(mobileVersionCode(version), versionCodeOf(version), version)
  }
})

test('只有受信 HTTPS 主机可以作为安装包来源', () => {
  assert.ok(isAllowedDownloadUrl('https://yuetongdai0-glitch.github.io/study-hub-releases/releases/android/a.apk'))
  assert.ok(isAllowedDownloadUrl('https://github.com/o/r/releases/download/v1/a.apk'))
  assert.ok(!isAllowedDownloadUrl('http://yuetongdai0-glitch.github.io/a.apk'), '必须是 HTTPS')
  assert.ok(!isAllowedDownloadUrl('https://example.com/a.apk'), '非白名单域名')
  assert.ok(!isAllowedDownloadUrl('https://user:pw@github.com/a.apk'), '不能带账号')
  assert.ok(!isAllowedDownloadUrl('https://github.com:8443/a.apk'), '不能带非标端口')
  assert.ok(!isAllowedDownloadUrl('not-a-url'))
})

test('SHA-256 必须是完整 64 位十六进制', () => {
  assert.ok(isDigest('a'.repeat(64)))
  assert.ok(isDigest('A1'.repeat(32)))
  assert.ok(!isDigest('a'.repeat(63)))
  assert.ok(!isDigest(`${'a'.repeat(64)}z`))
  assert.ok(!isDigest(''))
})

test('版本比对只看 versionCode，且拒绝非法输入', () => {
  assert.equal(decideUpdate(20000, 20001), 'available')
  assert.equal(decideUpdate(20000, 20000), 'current')
  assert.equal(decideUpdate(20000, 19999), 'current')
  assert.equal(decideUpdate(20000, 0), 'invalid')
  assert.equal(decideUpdate(Number.NaN, 20001), 'invalid')
})

test('build.gradle 能解析出版本号', () => {
  const gradle = 'versionCode 20003\nversionName "2.0.3"'
  assert.deepEqual(readAndroidVersion(gradle), { versionCode: 20003, versionName: '2.0.3' })
  assert.throws(() => readAndroidVersion('versionCode 1'), /无法从 build.gradle 解析/)
})

test('清单生成会拒绝非法摘要与不受信地址', () => {
  const base = {
    appVersion: '2.0.1',
    android: { versionCode: 20001, versionName: '2.0.1' },
    apkUrl: 'https://yuetongdai0-glitch.github.io/study-hub-releases/releases/android/a.apk',
    apkSha256: 'b'.repeat(64),
    apkBytes: 100,
    webUrl: 'https://yuetongdai0-glitch.github.io/study-review-hub/',
    webBuildId: '20261019-abcdef12'
  }
  const manifest = buildAppManifest(base)
  assert.equal(manifest.android.versionCode, 20001)
  assert.equal(manifest.android.minSdk, 23)
  assert.equal(manifest.ios, undefined)
  assert.throws(() => buildAppManifest({ ...base, apkSha256: 'short' }), /SHA-256 非法/)
  assert.throws(() => buildAppManifest({ ...base, apkUrl: 'https://evil.example/a.apk' }), /受信主机/)
})
