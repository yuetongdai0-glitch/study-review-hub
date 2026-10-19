import { Button, Result } from 'antd'
import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { error: Error | null }

/**
 * 路由级错误边界。
 *
 * @remarks 单个模块渲染失败不应该让整站白屏——阅读内容多且结构复杂，
 * 出错时给一个可恢复的出口，比直接崩掉有用。
 */
export default class RouteErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  /**
   * 捕获子树异常。
   *
   * @param error 异常对象。
   * @returns 新的状态。
   */
  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  /**
   * 记录异常，便于本地排查。
   *
   * @param error 异常对象。
   * @param info React 组件栈。
   * @returns 无返回。
   */
  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('[study-hub] 模块渲染失败', error, info.componentStack)
  }

  /**
   * 渲染。
   *
   * @returns 正常内容或错误提示。
   */
  render(): ReactNode {
    if (!this.state.error) return this.props.children
    return (
      <div className="app-content">
        <Result
          status="warning"
          title="这个模块加载失败了"
          subTitle={this.state.error.message}
          extra={[
            <Button key="reload" type="primary" onClick={() => window.location.reload()}>
              刷新页面
            </Button>,
            <Button key="home" onClick={() => window.location.assign(import.meta.env.BASE_URL)}>
              回到总览
            </Button>,
          ]}
        />
      </div>
    )
  }
}
