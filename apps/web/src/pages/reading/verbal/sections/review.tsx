import type { ReactElement } from 'react'
import { Card } from '@/components/content'

/**
 * review
 *
 * @returns 该节正文。
 */
export default function S9(): ReactElement {
  return (
    <>
      <h2><span className="icon">🔁</span> 复盘方法</h2>
      
          <div className="highlight">
            <strong>做题与复盘时间比 = 1:2 ~ 1:3</strong>。不是选对了就行，要研究每道题的思路。
          </div>
      
          <Card>
            <div className="card-title">片段阅读复盘</div>
            <ul>
              <li>分析语段结构，回想做题逻辑，总结</li>
              <li>答案存疑查原文分析</li>
              <li>认为题不好不用过于纠结</li>
              <li>20题 → 30~60分钟</li>
            </ul>
          </Card>
      
          <Card>
            <div className="card-title">逻辑填空复盘</div>
            <ul>
              <li>不能只明白为什么选这个选项，要把<strong>所有选项</strong>都理解透了</li>
              <li>近义词注意对比，完善思维导图</li>
              <li>查阅适用该词的例句，琢磨例句适用于什么常见语境</li>
              <li>20题 → 2小时左右</li>
            </ul>
          </Card>
      
          <Card>
            <div className="card-title">错题总结</div>
            <ul>
              <li>知道为什么错：马虎？知识点不牢？</li>
              <li>经典题目当做<strong>母题</strong>记下来</li>
              <li>对比思维导图，对应到知识点</li>
              <li>正确率低（30%~60%）的题，大家的差距集中在这里，要着重研究</li>
              <li>质量不好的题果断跳过，研究价值不大</li>
            </ul>
          </Card>
      
          <Card>
            <div className="card-title">做题练习方法</div>
            <ul>
              <li>做完第一遍对答案时，<strong>只需要知道哪几道题做错了</strong>，不需要知道正确答案</li>
              <li>将做错的题换一种思路重新选择</li>
              <li>如果第二次选对了，分析两次思路有何不同，为何第一次思路错误</li>
              <li>强化对正确思路的记忆，在以后的练习中多使用</li>
            </ul>
          </Card>
    </>
  )
}
