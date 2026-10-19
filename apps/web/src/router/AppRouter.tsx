import { Skeleton } from 'antd'
import { type ReactNode, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import RouteErrorBoundary from '@/router/components/RouteErrorBoundary'
import HomePage from '@/pages/home'
import { appRoutes } from '@/router/routeRegistry'
import { R_HOME, R_NOT_FOUND } from '@/router/routePaths'
import AppLayout from '@/layouts/AppLayout'
import NotFoundPage from '@/pages/not-found'

/**
 * 懒加载页面的统一加载态。
 *
 * @returns 骨架屏。
 */
function RouteFallback() {
  return (
    <div className="app-content">
      <Skeleton active paragraph={{ rows: 6 }} />
    </div>
  )
}

/**
 * 为懒加载页面统一包裹 Suspense 与错误边界。
 *
 * @param element 页面节点。
 * @returns 带加载态与错误恢复的节点。
 */
function withLazy(element: ReactNode) {
  return (
    <RouteErrorBoundary>
      <Suspense fallback={<RouteFallback />}>{element}</Suspense>
    </RouteErrorBoundary>
  )
}

/**
 * 旧路径兼容：`/pages/<route>/` 重定向到新路径。
 *
 * @returns 重定向节点。
 * @remarks 站点已对外发布过 `/pages/xxx/`，书签与分享链接必须继续可用。
 */
function LegacyRedirect() {
  const location = useLocation()
  const matched = location.pathname.match(/\/pages\/([^/]+)/)
  const route = matched?.[1]
  const target = appRoutes.find((item) => item.name === route)
  if (target) return <Navigate to={target.path} replace />
  return <NotFoundPage />
}

/**
 * 路由表。
 *
 * @returns React Router 路由树。
 */
export default function AppRouter() {
  const sections = appRoutes.map((route) => ({
    path: route.path,
    element: withLazy(<route.component />),
  }))

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        {sections.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
        <Route path="pages/:route/*" element={<LegacyRedirect />} />
        <Route path={R_NOT_FOUND} element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

/** 导出首页路径，供 header 与 404 复用。 */
export { R_HOME }
