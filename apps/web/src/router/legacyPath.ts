import { R, R_HOME, R_TOOL } from '@/router/routePaths'

/** 部署子路径，例如 `/study-review-hub/`；App 内为 `/`。 */
const BASE = import.meta.env.BASE_URL

/** 所有合法业务路径。 */
const KNOWN = new Set<string>([...Object.values(R), ...Object.values(R_TOOL)])

/**
 * 把路径式旧链接改写成 hash 形式。
 *
 * @returns 是否发生了改写。
 * @remarks
 * 站点已统一为 **HashRouter**：深链接形如 `/#/tools/scratchpad`，
 * 服务端永远只看到 `/`，因此不会再触发「目录 301 跳转」，
 * 刷新也不会再出现 `ERR_FAILED`。
 *
 * 但历史书签、外部分享链接仍是 `/tools/scratchpad` 这种路径式写法，
 * 这里同步改写成 `#/tools/scratchpad`，避免直接落到首页。
 * 必须在 React 渲染前调用，否则会先闪一下首页再跳。
 */
export function normalizeLegacyPath(): boolean {
  const { pathname, search, hash } = window.location
  // 已经是 hash 模式，交给路由器。
  if (hash) return false

  // 去掉部署子路径，得到站内相对路径。
  let rest = pathname
  if (BASE !== '/' && rest.startsWith(BASE)) rest = rest.slice(BASE.length - 1)
  else rest = rest.replace(/^\/+/, '/')

  // 去掉尾部斜杠：`/tools/scratchpad/` 与 `/tools/scratchpad` 等价。
  rest = rest.replace(/\/+$/, '')
  if (!rest) return false

  // 旧站 `/pages/<name>/` 直接映射到同名业务路径。
  const legacy = rest.match(/^\/pages\/([^/]+)$/)
  const candidate = legacy ? `/${legacy[1]}` : rest
  if (!KNOWN.has(candidate)) return false

  // query 必须在 `#` 之前，否则会被当成 hash 的一部分。
  const next = `${BASE === '/' ? '/' : BASE}${search}#${candidate}`
  window.history.replaceState(null, '', next)
  return true
}

/**
 * 当前页面的完整地址（含 hash）。
 *
 * @returns 可直接用于重载的绝对地址。
 * @remarks 刷新前必须保留 hash，否则会被带回首页。
 */
export function currentUrl(): string {
  return window.location.href
}

/** 首页地址（含 base）。 */
export const HOME_PATH = BASE === '/' ? '/' : R_HOME === '/' ? BASE : `${BASE}#${R_HOME}`
