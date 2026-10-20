import { useEffect } from 'react'
import ExamSheet from '@/components/features/ExamSheet'
import { useSectionStore } from '@/store/sectionStore'

/**
 * 模拟考试答题纸（独立路由）。
 *
 * @returns 满屏的格纸答题界面。
 * @remarks 主体在 `ExamSheet`：草稿工作台右上角也能全屏打开同一张纸，
 * 两边共用 `exam-grid:v2` 存档。
 */
export default function ExamGridPage() {
  const register = useSectionStore((state) => state.register)
  const clear = useSectionStore((state) => state.clear)

  useEffect(() => {
    register('/tools/exam-grid', [])
    return () => clear('/tools/exam-grid')
  }, [register, clear])

  return (
    <div className="h-[100dvh]">
      <ExamSheet />
    </div>
  )
}
