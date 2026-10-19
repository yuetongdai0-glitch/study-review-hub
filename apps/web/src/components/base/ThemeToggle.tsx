import { Button, Tooltip } from 'antd'
import { Moon, Sun } from 'lucide-react'
import { useAppStore } from '@/store/appStore'

/**
 * 主题切换。
 *
 * @returns 浅色/深色切换按钮。
 */
export default function ThemeToggle() {
  const theme = useAppStore((state) => state.theme)
  const toggleTheme = useAppStore((state) => state.toggleTheme)
  const nextLabel = theme === 'dark' ? '切换到浅色' : '切换到深色'

  return (
    <Tooltip title={nextLabel}>
      <Button
        type="text"
        size="small"
        aria-label={nextLabel}
        icon={theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        onClick={toggleTheme}
      />
    </Tooltip>
  )
}
