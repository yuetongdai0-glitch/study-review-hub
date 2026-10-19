import { App, Dropdown, Tooltip } from 'antd'
import { RefreshCw } from 'lucide-react'
import type { MenuProps } from 'antd'
import { useSiteVersion } from '@/hooks/useSiteVersion'

/**
 * 全局刷新入口。
 *
 * @returns 刷新按钮；发现新构建时高亮，长按或右键可清缓存。
 * @remarks 站点存在 Service Worker，普通刷新不一定能换掉旧资源，
 * 因此必须同时提供「清缓存重载」这条兜底路径。
 */
export default function SiteUpdateButton() {
  const { pendingBuild, busy, check, clearCache, reload } = useSiteVersion()
  const { message } = App.useApp()

  const items: MenuProps['items'] = [
    {
      key: 'check',
      label: '检查更新',
    },
    {
      key: 'reload',
      label: '刷新页面',
    },
    {
      key: 'purge',
      label: '清理缓存并刷新',
    },
  ]

  const onMenuClick: MenuProps['onClick'] = async ({ key }) => {
    if (key === 'check') {
      const changed = await check()
      void message.info(changed ? '发现新版本，点刷新按钮即可更新' : '已是最新版本')
      return
    }
    if (key === 'reload') {
      await reload()
      return
    }
    void message.loading({ content: '正在清理缓存…', key: 'purge', duration: 0 })
    await clearCache()
  }

  const onClick = async () => {
    if (busy) return
    if (pendingBuild) {
      await clearCache()
      return
    }
    await reload()
  }

  const label = pendingBuild ? '有新内容 · 点击更新' : '刷新到最新内容'

  return (
    <Dropdown menu={{ items, onClick: onMenuClick }} trigger={['contextMenu']} placement="bottomRight">
      <Tooltip title={label} placement="bottomRight">
        <button
          type="button"
          aria-label={label}
          onClick={onClick}
          data-pending={pendingBuild ? 'true' : 'false'}
          className={[
            'relative grid h-8 w-8 place-items-center rounded-lg transition',
            'text-ink-2 hover:bg-sunken hover:text-ink',
            pendingBuild ? 'bg-brand-soft text-brand' : '',
            busy ? 'pointer-events-none opacity-60' : '',
          ].join(' ')}
        >
          <RefreshCw size={16} className={busy ? 'animate-spin' : pendingBuild ? 'text-brand' : ''} />
          {pendingBuild ? (
            <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
          ) : null}
        </button>
      </Tooltip>
    </Dropdown>
  )
}
