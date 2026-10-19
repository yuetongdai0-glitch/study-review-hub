import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'
import { R_HOME } from '@/router/routePaths'

/**
 * 404 页。
 *
 * @returns 未匹配路径的提示。
 */
export default function NotFoundPage() {
  return (
    <div className="app-content grid min-h-[60vh] place-items-center">
      <Result
        status="404"
        title="没有这个页面"
        subTitle="链接可能已更新，回总览重新选一个科目。"
        extra={
          <Link to={R_HOME}>
            <Button type="primary">回到总览</Button>
          </Link>
        }
      />
    </div>
  )
}
