import type { ReactElement } from 'react'
import { Card } from '@/components/content'

/**
 * 考场做题流程
 *
 * @returns 该节正文。
 */
export default function S7(): ReactElement {
  return (
    <>
      <Card>
            <h3><span className="dot" style={{ background: '#b7791f' }}></span>判断推理整体做题节奏</h3>
            <div className="flow">
              <div className="node q"><b>图形推理</b><small>开头做 · 进入状态<br />每题≤50秒 · 30秒无思路先蒙</small></div>
              <div className="arrow">→</div>
              <div className="node s"><b>定义判断</b><small>稳拿分 · 抓关键词<br />每题≤60秒</small></div>
              <div className="arrow">→</div>
              <div className="node s"><b>类比推理</b><small>最快 · 先横后纵<br />每题≤40秒</small></div>
              <div className="arrow">→</div>
              <div className="node s"><b>逻辑判断</b><small>最耗时间 · 放最后<br />必然性：翻译-套规则<br />可能性：理结构-预设</small></div>
            </div>
            <div className="steps">
              <div className="step"><div className="no">1</div><div className="bd"><b>先图推后逻辑：</b>图推不费脑，用来进入状态；逻辑判断放最后，用最清醒的脑子啃最难的。</div></div>
              <div className="step"><div className="no">2</div><div className="bd"><b>一拖N 的取舍：</b>一拖二 2-3 分钟（保 3 争 4），一拖五 5 分钟（保 4 争 5）——超时果断放弃剩余小题，蒙猜技巧顶上。</div></div>
              <div className="step"><div className="no">3</div><div className="bd"><b>标准化流程：</b>每类题按固定步骤走（见各模块），练成反射，不边做边回忆考点。</div></div>
              <div className="step"><div className="no">4</div><div className="bd"><b>不恋战：</b>超过时间预算先蒙一个并标记，全部做完后统一回看；改答案前想清楚，相信第一感觉。</div></div>
            </div>
          </Card>
    </>
  )
}
