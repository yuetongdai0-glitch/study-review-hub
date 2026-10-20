import { App, Button, Progress, Select } from 'antd'
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

/** 存档键。与「选择题答题卡」页共用同一份，两边作答互通。 */
const STORE_KEY = 'choice-quiz:v1'
/** 选项数范围。 */
const OPT_MIN = 2
const OPT_MAX = 6
/** 选项字母。 */
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']
/** 阶段。 */
type Phase = 'answer' | 'check' | 'result'

/** 单题。 */
type Question = {
  optCount: number
  /** 作答选项下标；未作答为 null。 */
  answer: number | null
  /** 正确答案下标；未录入为 null。 */
  correct: number | null
  /** 本题耗时。 */
  timeMs: number
}

/** 整卷状态。 */
type QuizState = {
  v: 1
  phase: Phase
  optCount: number
  questions: Question[]
  cur: number
  checkCur: number
  totalMs: number
  paused: boolean
}

/**
 * 新建一题。
 *
 * @param optCount 选项数。
 * @returns 空题。
 */
function newQuestion(optCount: number): Question {
  return { optCount, answer: null, correct: null, timeMs: 0 }
}

/**
 * 初始状态。
 *
 * @param optCount 选项数。
 * @returns 单题初始状态。
 */
function makeState(optCount: number): QuizState {
  return {
    v: 1,
    phase: 'answer',
    optCount,
    questions: [newQuestion(optCount)],
    cur: 0,
    checkCur: 0,
    totalMs: 0,
    paused: false,
  }
}

/**
 * 毫秒格式化。
 *
 * @param ms 毫秒。
 * @returns `mm:ss`。
 */
export function formatClock(ms: number) {
  const total = Math.floor(ms / 1000)
  const mm = String(Math.floor(total / 60)).padStart(2, '0')
  const ss = String(total % 60).padStart(2, '0')
  return `${mm}:${ss}`
}

/**
 * 读存档。
 *
 * @returns 合法存档；没有或损坏时返回 null。
 */
function loadState(): QuizState | null {
  try {
    const raw = window.localStorage.getItem(STORE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw) as QuizState
    if (!data || !Array.isArray(data.questions) || data.questions.length === 0) return null
    const last = data.questions.length - 1
    return {
      ...data,
      phase: data.phase === 'check' || data.phase === 'result' ? data.phase : 'answer',
      optCount: Math.min(OPT_MAX, Math.max(OPT_MIN, Number(data.optCount) || 4)),
      // 回到上一次停留的题，别每次都弹回第 1 题（抽屉反复开关很常见）。
      cur: Math.max(0, Math.min(last, Number(data.cur) || 0)),
      checkCur: Math.max(0, Math.min(last, Number(data.checkCur) || 0)),
      totalMs: Number(data.totalMs) || 0,
      // 原样保留暂停态：由调用方决定要不要强制暂停。
      paused: Boolean(data.paused),
      questions: data.questions.map((item) => ({
        optCount: Math.min(OPT_MAX, Math.max(OPT_MIN, Number(item.optCount) || 4)),
        answer: typeof item.answer === 'number' ? item.answer : null,
        correct: typeof item.correct === 'number' ? item.correct : null,
        timeMs: Number(item.timeMs) || 0,
      })),
    }
  } catch {
    return null
  }
}

/**
 * 只读取作答摘要（不进入组件、不改状态），给外部做角标用。
 *
 * @returns 已答题数与总题数；没有存档时返回 null。
 */
export function readQuizSummary() {
  const data = loadState()
  if (!data) return null
  const answered = data.questions.filter((item) => item.answer !== null).length
  return { answered, total: data.questions.length }
}

/**
 * 选择题答题卡面板。
 *
 * @param props 组件属性。
 * @returns 计时条 + 统计 + 题面 + 答题卡 + 阶段操作。
 * @remarks 抽成组件是为了「草稿纸里开抽屉」与「独立答题卡页」共用同一套逻辑与同一份存档：
 * 在草稿纸上记的答案，打开独立页能看到；反之亦然。
 *
 * 暂停态**不在这里强制**：两处都沿用存档里的 paused。
 * 曾经让独立页读档后强制 `paused: true`，结果这个值被立刻写回共享存档，
 * 从草稿纸切过去看一眼再回来，计时就被莫名暂停了。
 *
 * 计时按题记：切题时把本段耗时累加到该题，总时间单独累计，
 * 这样「每题用时」与「总用时」不会因为来回翻题而失真。
 */
export default function ChoiceSheet({
  compact = false,
}: {
  /** 紧凑布局：弹窗 / 抽屉里用，间距更小、去掉大段说明。 */
  compact?: boolean
}) {
  const { message, modal } = App.useApp()

  const [state, setState] = useState<QuizState>(() => loadState() ?? makeState(4))
  const tickRef = useRef(0)
  const lastRef = useRef(Date.now())

  /* 存盘：每次状态变化都落盘（数据量很小，不必节流）。 */
  const persist = useCallback((next: QuizState) => {
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify(next))
    } catch {
      // 空间不足只影响下次打开，不影响当前作答。
    }
  }, [])

  useEffect(() => {
    persist(state)
  }, [state, persist])

  /* 计时：暂停 / 出成绩时不累加。 */
  useEffect(() => {
    if (state.paused || state.phase === 'result') {
      window.clearInterval(tickRef.current)
      return
    }
    lastRef.current = Date.now()
    tickRef.current = window.setInterval(() => {
      const now = Date.now()
      const delta = now - lastRef.current
      lastRef.current = now
      setState((current) => {
        if (current.paused || current.phase === 'result') return current
        const index = current.phase === 'check' ? current.checkCur : current.cur
        const questions = current.questions.map((item, i) =>
          i === index ? { ...item, timeMs: item.timeMs + delta } : item,
        )
        return { ...current, questions, totalMs: current.totalMs + delta }
      })
    }, 1000)
    return () => window.clearInterval(tickRef.current)
  }, [state.paused, state.phase])

  const isCheck = state.phase === 'check'
  const isResult = state.phase === 'result'
  const index = isCheck ? state.checkCur : state.cur
  const question = state.questions[Math.min(index, state.questions.length - 1)]

  const answered = state.questions.filter((item) => item.answer !== null).length
  const correct = state.questions.filter(
    (item) => item.answer !== null && item.answer === item.correct,
  ).length
  const wrong = useMemo(
    () =>
      state.questions.filter(
        (item) => item.correct !== null && item.answer !== null && item.answer !== item.correct,
      ).length,
    [state.questions],
  )
  const accuracy =
    state.questions.length > 0 ? Math.round((correct / state.questions.length) * 100) : 0

  /**
   * 设置当前题目的选项数。
   *
   * @param value 选项数。
   * @returns 无返回。
   */
  function setOptCount(value: number) {
    setState((current) => {
      const at = current.phase === 'check' ? current.checkCur : current.cur
      const questions = current.questions.map((item, i) => {
        if (i !== at) return item
        const max = value - 1
        return {
          ...item,
          optCount: value,
          answer: item.answer !== null && item.answer > max ? null : item.answer,
          correct: item.correct !== null && item.correct > max ? null : item.correct,
        }
      })
      return { ...current, questions, optCount: value }
    })
  }

  /**
   * 记录选择。
   *
   * @param option 选项下标。
   * @returns 无返回。
   */
  function pick(option: number) {
    setState((current) => {
      const at = current.phase === 'check' ? current.checkCur : current.cur
      const questions = current.questions.map((item, i) => {
        if (i !== at) return item
        return current.phase === 'check' ? { ...item, correct: option } : { ...item, answer: option }
      })
      return { ...current, questions }
    })
  }

  /**
   * 切题。
   *
   * @param target 目标下标；作答阶段超出末题时新增一题。
   * @returns 无返回。
   */
  function go(target: number) {
    setState((current) => {
      if (current.phase === 'check') {
        return {
          ...current,
          checkCur: Math.max(0, Math.min(current.questions.length - 1, target)),
        }
      }
      if (target >= current.questions.length) {
        return {
          ...current,
          questions: [...current.questions, newQuestion(current.optCount)],
          cur: current.questions.length,
        }
      }
      return { ...current, cur: Math.max(0, target) }
    })
  }

  const pad = compact ? '' : ''
  const gap = compact ? 'gap-2' : 'gap-3'

  return (
    <div className={`flex flex-col ${compact ? 'gap-2.5' : 'gap-4'} ${pad}`}>
      {/* 计时与整卷操作 */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-num text-[13px] tabular-nums text-ink-2">
          {formatClock(state.totalMs)}
        </span>
        <span className="rounded-md bg-sunken px-1.5 py-0.5 text-[11px] text-ink-2">
          {isResult ? '已出成绩' : isCheck ? '对答案' : state.paused ? '已暂停' : '计时中'}
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <Button
            size="small"
            icon={state.paused ? <Play size={13} /> : <Pause size={13} />}
            onClick={() => setState((current) => ({ ...current, paused: !current.paused }))}
            disabled={isResult}
          >
            {state.paused ? '继续' : '暂停'}
          </Button>
          <Button
            size="small"
            icon={<RotateCcw size={13} />}
            onClick={() =>
              modal.confirm({
                title: '重开一份？',
                content: '当前作答与计时会被清空。',
                okText: '重开',
                cancelText: '取消',
                okButtonProps: { danger: true },
                onOk: () => {
                  setState(makeState(state.optCount))
                  window.localStorage.removeItem(STORE_KEY)
                },
              })
            }
          >
            重开
          </Button>
        </div>
      </div>

      {/* 统计 */}
      <div className={`grid grid-cols-4 ${compact ? 'gap-1.5' : 'gap-2'}`}>
        {[
          { label: '总题数', value: state.questions.length },
          { label: '已作答', value: answered },
          { label: isResult || isCheck ? '答对' : '待批改', value: isResult ? correct : state.questions.length - answered },
          { label: isResult ? '正确率' : '错题', value: isResult ? `${accuracy}%` : wrong },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-[10px] border border-line bg-surface px-2 py-1.5 text-center"
          >
            <b className={`block font-num ${compact ? 'text-[16px]' : 'text-[19px]'} leading-tight tabular-nums`}>
              {item.value}
            </b>
            <span className="text-[11px] text-ink-3">{item.label}</span>
          </div>
        ))}
      </div>

      {/* 题面 */}
      <section className="rounded-[12px] border border-line bg-surface p-3">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="font-num text-[12.5px] tabular-nums text-ink-2">
            第 <b className="text-ink">{Math.min(index, state.questions.length - 1) + 1}</b> 题 / 共{' '}
            {state.questions.length} 题
          </span>
          <span className="rounded-md bg-sunken px-1.5 py-0.5 text-[11px] text-ink-2">
            {isCheck
              ? question.correct === null
                ? '待录入正确答案'
                : `已录入 ${LETTERS[question.correct]}`
              : question.answer === null
                ? '未作答'
                : `已选 ${LETTERS[question.answer]}`}
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="text-[11px] text-ink-3">选项</span>
            <Select
              size="small"
              value={question.optCount}
              style={{ width: 56 }}
              options={Array.from({ length: OPT_MAX - OPT_MIN + 1 }, (_, i) => ({
                value: OPT_MIN + i,
                label: String(OPT_MIN + i),
              }))}
              onChange={setOptCount}
              disabled={isCheck}
            />
          </div>
        </div>

        {/* 选项：紧凑模式两列，宽版三列 */}
        <div className={`grid grid-cols-2 ${compact ? '' : 'sm:grid-cols-3'} ${gap}`}>
          {Array.from({ length: question.optCount }, (_, option) => {
            const picked = isCheck ? question.correct === option : question.answer === option
            const isYour = isCheck && question.answer === option
            const showResult = isResult && question.correct !== null
            const ok = showResult && question.correct === option
            const bad = showResult && question.answer === option && question.answer !== question.correct
            return (
              <button
                key={option}
                type="button"
                aria-pressed={picked}
                onClick={() => pick(option)}
                className={[
                  `flex ${compact ? 'h-10' : 'h-12'} items-center gap-2 rounded-[10px] border px-3 text-left transition`,
                  picked ? 'border-brand bg-brand-soft text-brand' : 'border-line hover:border-line-strong',
                  ok ? 'border-success bg-[#eafaf1] text-success' : '',
                  bad ? 'border-danger bg-[#fdeeee] text-danger' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <span className={`font-num ${compact ? 'text-[14px]' : 'text-[15px]'} font-semibold`}>
                  {LETTERS[option]}
                </span>
                <span className="h-3.5 flex-1 rounded bg-current opacity-10" />
                {isYour ? <span className="text-[10.5px] text-ink-3">你的</span> : null}
              </button>
            )
          })}
        </div>

        {compact ? null : (
          <p className="mt-3 text-[12.5px] text-ink-3">
            {isCheck
              ? question.answer === null
                ? '这题没作答，仍可录入正确答案，结果里会记为未作答。'
                : `你选的是 ${LETTERS[question.answer]}，请选择正确答案。`
              : index >= state.questions.length - 1
                ? '已是最后一题，点「下一题」会新增一题，题量不限。'
                : '点选项即记录，可用下方答题卡跳回任意题修改。'}
          </p>
        )}

        <div className="mt-2.5 flex items-center justify-between gap-2">
          <Button
            size={compact ? 'small' : 'middle'}
            icon={<ChevronLeft size={14} />}
            onClick={() => go(index - 1)}
            disabled={index === 0}
          >
            上一题
          </Button>
          <Button
            size={compact ? 'small' : 'middle'}
            type="primary"
            icon={<ChevronRight size={14} />}
            onClick={() => go(index + 1)}
          >
            {index >= state.questions.length - 1 ? '新增一题' : '下一题'}
          </Button>
        </div>
      </section>

      {/* 答题卡 */}
      <section className="rounded-[12px] border border-line bg-surface p-3">
        <div className="mb-2 flex items-center justify-between">
          <b className="text-[13px]">答题卡</b>
          <span className="text-[11px] text-ink-3">
            {isResult
              ? `答对 ${correct} / 共 ${state.questions.length}`
              : `已答 ${answered} / ${state.questions.length}`}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {state.questions.map((item, i) => {
            const done = isCheck ? item.correct !== null : item.answer !== null
            const ok = isResult && item.correct !== null && item.answer === item.correct
            const bad =
              isResult && (item.answer === null || (item.correct !== null && item.answer !== item.correct))
            return (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                className={[
                  `grid ${compact ? 'h-7 w-7' : 'h-8 w-8'} place-items-center rounded-md border font-num text-[12.5px] tabular-nums transition`,
                  'border-line text-ink-2 hover:border-line-strong',
                  done && !isResult ? 'border-brand bg-brand-soft text-brand' : '',
                  ok ? 'border-success bg-[#eafaf1] text-success' : '',
                  bad ? 'border-danger bg-[#fdeeee] text-danger' : '',
                  i === index && !isResult ? 'ring-2 ring-brand/40' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {i + 1}
              </button>
            )
          })}
        </div>

        {isResult ? (
          <div className="mt-2.5">
            <div className="mb-1 flex items-center justify-between text-[12px] text-ink-3">
              <span>正确率</span>
              <span className="font-num tabular-nums">{accuracy}%</span>
            </div>
            <Progress percent={accuracy} showInfo={false} size="small" />
          </div>
        ) : null}

        <div className="mt-2.5 flex flex-wrap items-center gap-2">
          {state.phase === 'answer' ? (
            <Button
              size={compact ? 'small' : 'middle'}
              type="primary"
              danger
              onClick={() =>
                modal.confirm({
                  title: '交卷并进入对答案？',
                  content: `已答 ${answered} / ${state.questions.length} 题，未作答的题会记为未作答。`,
                  okText: '交卷',
                  cancelText: '再看看',
                  onOk: () =>
                    setState((current) => ({ ...current, phase: 'check', checkCur: 0, paused: true })),
                })
              }
            >
              交卷
            </Button>
          ) : null}

          {isCheck ? (
            <>
              <Button
                size={compact ? 'small' : 'middle'}
                onClick={() => setState((current) => ({ ...current, phase: 'answer', paused: false }))}
              >
                返回修改
              </Button>
              <Button
                size={compact ? 'small' : 'middle'}
                type="primary"
                onClick={() => {
                  const missing = state.questions.filter((item) => item.correct === null).length
                  if (missing > 0) {
                    message.warning(`还有 ${missing} 题的正确答案未录入`)
                    return
                  }
                  setState((current) => ({ ...current, phase: 'result', paused: true }))
                }}
              >
                查看成绩
              </Button>
            </>
          ) : null}

          {isResult ? (
            <Button
              size={compact ? 'small' : 'middle'}
              onClick={() => setState((current) => ({ ...current, phase: 'check', paused: true }))}
            >
              返回对答案
            </Button>
          ) : null}
        </div>
      </section>

      {/* 结果明细 */}
      {isResult ? (
        <section className="rounded-[12px] border border-line bg-surface p-3">
          <b className="text-[13px]">逐题明细</b>
          <ul className="mb-0 mt-2 list-none p-0">
            {state.questions.map((item, i) => {
              const ok = item.answer !== null && item.answer === item.correct
              return (
                <li
                  key={i}
                  className="flex items-center gap-2 border-t border-line-subtle py-1.5 text-[12.5px] first:border-t-0"
                >
                  <span className="w-6 shrink-0 font-num text-ink-3">{i + 1}</span>
                  <span className={ok ? 'text-success' : 'text-danger'}>
                    {ok ? '✓' : item.answer === null ? '未作答' : '✗'}
                  </span>
                  <span className="text-ink-2">
                    你的 {item.answer === null ? '—' : LETTERS[item.answer]} · 正确{' '}
                    {item.correct === null ? '—' : LETTERS[item.correct]}
                  </span>
                  <span className="ml-auto font-num tabular-nums text-ink-3">
                    {formatClock(item.timeMs)}
                  </span>
                </li>
              )
            })}
          </ul>
        </section>
      ) : null}

      <p className="m-0 text-[11.5px] text-ink-3">
        作答与计时自动保存在本机，和「选择题答题卡」页共用同一份记录。
      </p>
    </div>
  )
}
