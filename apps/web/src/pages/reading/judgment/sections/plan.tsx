import type { ReactElement } from 'react'
import { Card } from '@/components/content'

/**
 * 备考节奏建议
 *
 * @returns 该节正文。
 */
export default function S8(): ReactElement {
  return (
    <>
      <Card>
            <h3><span className="dot" style={{ background: '#1e8449' }}></span>三阶段推进（程意式学习法）</h3>
            <table className="tight">
              <tr><th>阶段</th><th>任务</th><th>目标</th></tr>
              <tr><td><b>基础阶段</b></td><td>跟课 + 背口诀 + 做课后作业；笔记当天整理（思维导图 + 题目解析 + 做题步骤）</td><td>打扎实基础，重点在「学会」</td></tr>
              <tr><td><b>专项提升</b></td><td>按题型分类刷题（夸夸刷）：今天只刷图推位置，明天只刷样式……；错题记录，周末重做</td><td>看到题就能判断考点（不背答案）</td></tr>
              <tr><td><b>套题冲刺</b></td><td>掐时间整套刷，复盘每道题的考点归属；用「知识点复习表 + 默写表」查缺补漏</td><td>固化解题反射，控制时间预算</td></tr>
            </table>
            <h4>每日复习小贴士</h4>
            <ul>
              <li><b>命题部分：</b>每天把翻译口诀默写一遍，直到不用想就写出来；四组矛盾（且↔或、或↔且、A⇒B 与 A 且非 B、所有是↔有些非）张口就来。</li>
              <li><b>综合推理 / 真假话：</b>每天 5 道，先判断「套套路还是走非套路」，练 3 秒定型。</li>
              <li><b>加强削弱：</b>题干只读结构，读完自己先预设一个答案，再去对选项。</li>
              <li><b>定义判断：</b>练习划关键词，训练「一眼抓住主体、方式、结果」。</li>
              <li><b>复盘：</b>错题不是看答案，是回看「我应该用哪个考点/哪一步想错了」。</li>
            </ul>
            <div className="jingle"><div className="jt">✏️ 程意寄语</div>「过程或许有点难，但结果会是好的。」母题二、三、四难，基础阶段学不会很正常——学会多少都是进步，刷题阶段会带你重点攻克。</div>
          </Card>
    </>
  )
}
