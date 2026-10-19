import { App, Button, Modal, Progress, Select } from 'antd'
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSectionStore } from '@/store/sectionStore'

/** 存档键。 */
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

/** 整页状态。 */
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
function fmt(ms: number) {
  const total = Math.floor(ms / 1000)
  const mm = String(Math.floor(total / 60)).padStart(2, '0')
  const ss = String(total % 60).padStart(2, '0')
  return `${mm}:${ss}`
}

/**
 * 选择题答题卡。
 *
 * @returns 作答 / 对答案 / 成绩三阶段。
 * @remarks 计时按题记：切题时把本段耗时累加到该题，总时间单独累计，
 * 这样「每题用时」与「总用时」不会因为来回翻题而失真。
 */
export default function ChoiceQuizPage() {
  const { message, modal } = App.useApp()
  const register = useSectionStore((state) => state.register)
  const clear = useSectionStore((state) => state.clear)

  const [state, setState] = useState<QuizState>(() => makeState(4))
  const tickRef = useRef(0)
  const lastRef = useRef(Date.now())

  useEffect(() => {
    register('/tools/choice-quiz', [])
    return () => clear('/tools/choice-quiz')
  }, [register, clear])

  /* 读档。 */
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORE_KEY)
      if (!raw) return
      const data = JSON.parse(raw) as QuizState
      if (!data || !Array.isArray(data.questions) || data.questions.length === 0) return
      setState({
        ...data,
        paused: true,
        questions: data.questions.map((item) => ({
          optCount: Math.min(OPT_MAX, Math.max(OPT_MIN, Number(item.optCount) || 4)),
          answer: typeof item.answer === 'number' ? item.answer : null,
          correct: typeof item.correct === 'number' ? item.correct : null,
          timeMs: Number(item.timeMs) || 0,
        })),
      })
    } catch {
      // 存档损坏按新卷开始。
    }
  }, [])

  /* 存盘。 */
  const persist = useCallback((next: QuizState) => {
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify(next))
    } catch {
      // 空间不足只影响下次打开，不影响当前作答。
    }
  }, [])

  /* 计时：暂停时不累加。 */
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

  /* 每次状态变化落盘（节流交给浏览器，数据量很小）。 */
  useEffect(() => {
    persist(state)
  }, [state, persist])

  const isCheck = state.phase === 'check'
  const isResult = state.phase === 'result'
  const index = isCheck ? state.checkCur : state.cur
  const question = state.questions[index]

  const answered = state.questions.filter((item) => item.answer !== null).length
  const correct = state.questions.filter((item) => item.answer !== null && item.answer === item.correct).length
  const wrong = useMemo(
    () =>
      state.questions.filter(
        (item) => item.correct !== null && item.answer !== null && item.answer !== item.correct,
      ).length,
    [state.questions],
  )
  const accuracy = state.questions.length > 0 ? Math.round((correct / state.questions.length) * 100) : 0

  /**
   * 设置当前题目的选项数。
   *
   * @param value 选项数。
   * @returns 无返回。
   */
  function setOptCount(value: number) {
    setState((current) => {
      const questions = current.questions.map((item, i) => {
        if (i !== (current.phase === 'check' ? current.checkCur : current.cur)) return item
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
      const questions = current.questions.map((item, i) => {
        if (i !== index) return item
        return current.phase === 'check' ? { ...item, correct: option } : { ...item, answer: option }
      })
      return { ...current, questions }
    })
  }

  /**
   * 切题。
   *
   * @param target 目标下标；越界时新增一题（作答阶段）。
   * @returns 无返回。
   */
  function go(target: number) {
    setState((current) => {
      if (current.phase === 'check') {
        return { ...current, checkCur: Math.max(0, Math.min(current.questions.length - 1, target)) }
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

  return (
    <div className="app-content">
      <header className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mb-1 font-num text-[11px] uppercase tracking-[0.24em] text-ink-3">PRACTICE SHEET</p>
          <h1 className="m-0 text-[24px] font-bold tracking-tight">选择题答题卡</h1>
          <p className="mt-1.5 text-[13px] text-ink-3">
            逐题点选即可记录，随时跳到任意题修改；交卷后录入正确答案自动统计正确率与用时。
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-num text-[13px] tabular-nums text-ink-2">{fmt(state.totalMs)}</span>
          <Button
            size="small"
            icon={state.paused ? <Play size={13} /> : <Pause size={13} />}
            onClick={() => setState((current) => ({ ...current, paused: !current.paused }))}
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
      </header>

      {/* 统计 */}
      <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { label: '总题数', value: state.questions.length },
          { label: '已作答', value: answered },
          { label: isResult || isCheck ? '答对' : '待批改', value: isResult ? correct : state.questions.length - answered },
          { label: isResult ? '正确率' : '错题', value: isResult ? `${accuracy}%` : wrong },
        ].map((item) => (
          <div key={item.label} className="rounded-[12px] border border-line bg-surface px-3 py-2.5">
            <b className="block font-num text-[19px] leading-tight tabular-nums">{item.value}</b>
            <span className="text-[11.5px] text-ink-3">{item.label}</span>
          </div>
        ))}
      </div>

      {/* 题面 */}
      <section className="rounded-[14px] border border-line bg-surface p-4">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="font-num text-[13px] tabular-nums text-ink-2">
            第 <b className="text-ink">{index + 1}</b> 题 / 共 {state.questions.length} 题
          </span>
          <span className="rounded-md bg-sunken px-2 py-0.5 text-[11.5px] text-ink-2">
            {isCheck
              ? question.correct === null
                ? '待录入正确答案'
                : `已录入 ${LETTERS[question.correct]}`
              : question.answer === null
                ? '未作答'
                : `已选 ${LETTERS[question.answer]}`}
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="text-[11.5px] text-ink-3">选项数</span>
            <Select
              size="small"
              value={question.optCount}
              style={{ width: 64 }}
              options={Array.from({ length: OPT_MAX - OPT_MIN + 1 }, (_, i) => ({
                value: OPT_MIN + i,
                label: String(OPT_MIN + i),
              }))}
              onChange={setOptCount}
              disabled={isCheck}
            />
          </div>
        </div>

        {/* 选项 */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
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
                  'flex h-12 items-center gap-2 rounded-[10px] border px-3 text-left transition',
                  picked ? 'border-brand bg-brand-soft text-brand' : 'border-line hover:border-line-strong',
                  ok ? 'border-success bg-[#eafaf1] text-success' : '',
                  bad ? 'border-danger bg-[#fdeeee] text-danger' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <span className="font-num text-[15px] font-semibold">{LETTERS[option]}</span>
                <span className="h-4 flex-1 rounded bg-current opacity-10" />
                {isYour ? <span className="text-[10.5px] text-ink-3">你的答案</span> : null}
              </button>
            )
          })}
        </div>

        <p className="mt-3 text-[12.5px] text-ink-3">
          {isCheck
            ? question.answer === null
              ? '这题没作答，仍可录入正确答案，结果里会记为未作答。'
              : `你选的是 ${LETTERS[question.answer]}，请选择正确答案。`
            : index >= state.questions.length - 1
              ? '已是最后一题，点「下一题」会新增一题，题量不限。'
              : '点选项即记录，可用下方答题卡跳回任意题修改。'}
        </p>

        <div className="mt-3 flex items-center justify-between gap-2">
          <Button icon={<ChevronLeft size={14} />} onClick={() => go(index - 1)} disabled={index === 0}>
            上一题
          </Button>
          <Button type="primary" icon={<ChevronRight size={14} />} onClick={() => go(index + 1)}>
            {index >= state.questions.length - 1 ? '新增一题' : '下一题'}
          </Button>
        </div>
      </section>

      {/* 答题卡 */}
      <section className="mt-4 rounded-[14px] border border-line bg-surface p-4">
        <div className="mb-2 flex items-center justify-between">
          <b className="text-[13.5px]">答题卡</b>
          <span className="text-[11.5px] text-ink-3">
            {isResult ? `答对 ${correct} / 共 ${state.questions.length}` : `已答 ${answered} / ${state.questions.length}`}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {state.questions.map((item, i) => {
            const done = isCheck ? item.correct !== null : item.answer !== null
            const ok = isResult && item.correct !== null && item.answer === item.correct
            const bad = isResult && (item.answer === null || (item.correct !== null && item.answer !== item.correct))
            return (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                className={[
                  'grid h-8 w-8 place-items-center rounded-md border font-num text-[12.5px] tabular-nums transition',
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
          <div className="mt-3">
            <div className="mb-1 flex items-center justify-between text-[12px] text-ink-3">
              <span>正确率</span>
              <span className="font-num tabular-nums">{accuracy}%</span>
            </div>
            <Progress percent={accuracy} showInfo={false} size="small" />
          </div>
        ) : null}

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {state.phase === 'answer' ? (
            <Button
              type="primary"
              danger
              onClick={() =>
                modal.confirm({
                  title: '交卷并进入对答案？',
                  content: `已答 ${answered} / ${state.questions.length} 题，未作答的题会记为未作答。`,
                  okText: '交卷',
                  cancelText: '再看看',
                  onOk: () => setState((current) => ({ ...current, phase: 'check', checkCur: 0, paused: true })),
                })
              }
            >
              交卷
            </Button>
          ) : null}

          {isCheck ? (
            <>
              <Button
                onClick={() => setState((current) => ({ ...current, phase: 'answer', paused: false }))}
              >
                返回修改
              </Button>
              <Button
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
            <Button onClick={() => setState((current) => ({ ...current, phase: 'check', paused: true }))}>
              返回对答案
            </Button>
          ) : null}
        </div>
      </section>

      {/* 结果明细 */}
      {isResult ? (
        <section className="mt-4 rounded-[14px] border border-line bg-surface p-4">
          <b className="text-[13.5px]">逐题明细</b>
          <ul className="mt-2 mb-0 list-none p-0">
            {state.questions.map((item, i) => {
              const ok = item.answer !== null && item.answer === item.correct
              return (
                <li key={i} className="flex items-center gap-2 border-t border-line-subtle py-1.5 text-[12.5px] first:border-t-0">
                  <span className="w-7 shrink-0 font-num text-ink-3">{i + 1}</span>
                  <span className={ok ? 'text-success' : 'text-danger'}>
                    {ok ? '✓' : item.answer === null ? '未作答' : '✗'}
                  </span>
                  <span className="text-ink-2">
                    你的 {item.answer === null ? '—' : LETTERS[item.answer]} · 正确{' '}
                    {item.correct === null ? '—' : LETTERS[item.correct]}
                  </span>
                  <span className="ml-auto font-num tabular-nums text-ink-3">{fmt(item.timeMs)}</span>
                </li>
              )
            })}
          </ul>
        </section>
      ) : null}

      <p className="mt-4 text-[12px] text-ink-3">作答与计时自动保存在本机，换设备不会同步。</p>

      <Modal open={false} footer={null} onCancel={() => undefined} />
    </div>
  )
}
