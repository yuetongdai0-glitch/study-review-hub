import { useEffect } from 'react'
import ChoiceSheet from '@/components/features/ChoiceSheet'
import { useSectionStore } from '@/store/sectionStore'

/**
 * 选择题答题卡。
 *
 * @returns 作答 / 对答案 / 成绩三阶段。
 * @remarks 主体抽到 `ChoiceSheet`，这样草稿纸里也能以抽屉形式打开同一张卡，
 * 两边共用 `choice-quiz:v1` 存档：在草稿纸上记的答案，这里打开就能看到。
 */
export default function ChoiceQuizPage() {
  const register = useSectionStore((state) => state.register)
  const clear = useSectionStore((state) => state.clear)

  useEffect(() => {
    register('/tools/choice-quiz', [])
    return () => clear('/tools/choice-quiz')
  }, [register, clear])

  return (
    <div className="app-content">
      <header className="mb-4">
        <p className="mb-1 font-num text-[11px] uppercase tracking-[0.24em] text-ink-3">
          PRACTICE SHEET
        </p>
        <h1 className="m-0 text-[24px] font-bold tracking-tight">选择题答题卡</h1>
        <p className="mt-1.5 text-[13px] text-ink-3">
          逐题点选即可记录，随时跳到任意题修改；交卷后录入正确答案自动统计正确率与用时。
        </p>
      </header>

      <ChoiceSheet />
    </div>
  )
}
