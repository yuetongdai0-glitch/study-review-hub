import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList, SubPoint } from '@/components/content'

/**
 * 三、周期问题
 *
 * @returns 该节正文。
 */
export default function S5(): ReactElement {
  return (
    <>
      <Block>
                    <BlockTitle>1. 周期余数</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">总数 ÷ 周期 = 商 ... 余数</span><br />
                      余数几就是周期中第几个，余0则是最后一个
                    </Callout>
                    <Callout variant="warn">注意审题：看清是"第几天"还是"过几天"！</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题1 · 周期余数</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>"红十字会"四个字按顺序循环排列：红十字会红十字会红……第2025个字是什么？</ExampleQuestion>
                      <ExampleOptions>A.红　B.十　C.字　D.会</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>周期为4（红十字会）<br />
                        2025÷4=506……余1 → 第1个字是"红"<br />
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>2. 周期相遇</BlockTitle>
                    <Callout variant="key"><b>核心：找最小公倍数</b></Callout>
                    <Callout variant="tip">注意审题：每隔n天 = 每n+1天</Callout>
                    <SubPoint>多个主体各有周期，同时出发，下一次同时出现 → 各周期的最小公倍数</SubPoint>
                    <SubPoint>分数求公倍数：①分母通分 ②求分子最小公倍数 ③分子最小公倍数÷分母</SubPoint>
                    <SubPoint><b>「过几加几」（讲义原话）：</b>求出最小公倍数（就是要过的天数）后，
                      <b>从起始日往后加这个天数</b>。例：三人 4 月 1 日同时相遇，周期的最小公倍数是 12 天 → 下次相遇 = 4 月 1 + 12 = <b>4 月 13 日</b>。</SubPoint>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题2 · 周期问题（轮流值班 · 2023 广东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某单位共有 8 名安保队员，并根据序号每天安排 2 名队员轮流值班：第一天由队员 1、2 负责值班；第二天由队员 3、4 负责值班……以此类推。如果队员 3 今天负责了值班，则他将在（　　）天后再次负责值班。</ExampleQuestion>
                  <ExampleOptions>A.4　B.5　C.6　D.7</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>先把「一轮」找出来：每天 2 人、共 8 人 → <b>周期 = 8 ÷ 2 = 4 天</b>（第 1 天 1、2；第 2 天 3、4；第 3 天 5、6；第 4 天 7、8；第 5 天又回到 1、2）。<br />队员 3 排在第 2 天 → 下一次轮到同一批人是在第 2 + 4 = 6 天，<b>相隔 4 天</b>。<br /><span style={{ color: '#6b7280' }}>陷阱：问的是「几天后再次」，要用周期长度 4，而不是组内位置 2。</span>
                    <span className="correct">答案：A</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>3. 星期日期问题</BlockTitle>
                    <PointList>
                      <li><b>平闰年判定</b>：能被4整除为闰年；整百年份需被400整除</li>
                      <li><b>整年推断</b>：过一个平年星期+1，过一个闰年星期+2</li>
                      <li><b>大月小月</b>：一三五七八十腊（12月），31天永不差</li>
                      <li><b>大月余三天</b>：31÷7=4余3</li>
                      <li><b>每连续7天</b>：必有周一到周日各1天</li>
                      <li><b>每连续28天</b>：必有周一到周日各4天</li>
                    </PointList>
                    <Callout variant="key"><b>一句话汇总（讲义原话）：平年 +1，闰年 +2，大月 +3，小月 +2。</b><br />
                      含义是"再过一个这样的时间段，星期数往后推几天" —— 平年 365÷7 余 1、闰年 366÷7 余 2、大月 31÷7 余 3、小月 30÷7 余 2。</Callout>
                    <SubPoint><b>审题两条：</b>① 每个月都必然有 4 周，所以推断日期时<b>取连续 28 天</b>看（28 天里周一到周日各 4 次，位置随起点平移）；
                      ② 遇到「一个自然月内最多有……」，要<b>把这个月按大月 31 天算</b>（月长取最大才谈得上"最多"）。</SubPoint>
                    <SubPoint><b>「圈连续 28 天」到底从哪边圈（讲义原话：求月初圈月末、求月末圈月初）：</b><br />
                      　 · 问<b>月初</b>某天的星期 → 从<b>月末</b>往前圈 28 天（月末的星期通常已知或好推），再往后平移；<br />
                      　 · 问<b>月末</b>某天的星期 → 从<b>月初</b>往后圈 28 天；<br />
                      　 · 圈出的这 28 天里周一到周日各出现 4 次，剩下不满 28 天的那几天再单独分析。</SubPoint>
                    <Callout variant="tip">做题方法：画图 + 枚举；技巧是「<b>前＝后（余数）</b>」—— 同一星期几在月内相隔 7 天、28 天出现，位置可以直接平移。</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题3 · 星期日期问题（闰年推算）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>2024 年 1 月 1 日是星期一，问 2024 年 12 月 31 日是星期几？（2024 是闰年）</ExampleQuestion>
                      <ExampleOptions>A.星期一　B.星期二　C.星期三　D.星期四</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>12 月 31 日是这一年的<b>最后一天</b>，与元旦相隔 <b>365 天</b>（闰年共 366 天，首尾之间差 365）。<br />365 = 52 × 7 + <b>1</b> → 星期数往后推 <b>1</b> 天：星期一 + 1 = <b>星期二</b>。<br /><b>另一种记法（更稳）：</b>闰年 366 = 52 周 + 2 天，多出来的 2 天就是年首的 1 月 1 日、1 月 2 日（星期一、星期二）。最后一天是第 366 天，与第 2 天同星期 → 也是<b>星期二</b>。<br /><span style={{ color: '#6b7280' }}>⚠️ 易错：别把「闰年多 2 天」直接加到年尾 —— 加的是「首尾相隔的天数」，也就是 365 天、余 1 天。</span>
                    <span className="correct">答案：B</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
          
                  <Example>
                    <ExampleHeader>📝 例题4 · 星期日期（53 个星期几 · 2024 吉林）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某一年的元旦是星期二，这一年共有 53 个星期三，则 3 月 27 日这一天为（　　）。</ExampleQuestion>
                      <ExampleOptions>A.星期二　B.星期三　C.星期四　D.星期五</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>平年 365 天 = 52 周 + 1 天，闰年 366 天 = 52 周 + 2 天。
                              52 周里每个星期几都出现 52 次；出现 <b>53 次</b>的星期几，就是"多出来的那 1~2 天"覆盖的星期几。
                              元旦（1 月 1 日）是星期二 → 平年的多出 1 天 = 1 月 1 日 = 星期二；闰年多出 2 天 = 星期二 + 星期三。
                              题目说共有 53 个星期三 → 必须<b>恰好</b>含星期三 → 该年为 <b>闰年</b>（366 天），且元旦星期二 ✓（多出"星期二、星期三"）。
                              1 月 1 日星期二 → 推算到 3 月 27 日的天数：1 月 31 天 + 2 月 29 天（闰年）+ 27 天 = 从 1 月 1 日算起第 87 天，间隔 86 天。
                              86 ÷ 7 = 12 周余 <b>2</b> 天 → 星期二 + 2 = <b>星期四</b>。
                              要点：<b>先由"53 个星期几"反推平/闰年</b>，再用余数定位具体日期，两步都不能省。
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>4. 周期余数的最值</BlockTitle>
                    <Callout variant="key"><b>识别：</b>问「循环周期中，<b>某主体最多</b>」</Callout>
                    <Callout variant="formula"><span className="formula">方法：把该主体放到周期的第一个</span></Callout>
                    <SubPoint>道理：一个完整周期里该主体只出现一次；<b>把它摆在周期开头</b>，就能让「不满一个周期的余数」那一段也落在它身上，从而取到最多。</SubPoint>
                    <SubPoint>引例：一项工程甲、乙交替、每人单独干一天，耗时 11 天完成，问乙最多干几天？<br />
                      → 把乙放在第 1 天：第 1、3、5、7、9、11 天都是乙，共 <b>6 天</b>。<br />
                      （余数按同样思路处理，第一步就排除选项）</SubPoint>
                  </Block>
                    <Example>
                    <ExampleHeader>📝 例题5 · 周期余数的最值（2016 国考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某新建小区计划在小区主干道两侧种植银杏树和梧桐树绿化环境。一侧每隔 3 棵银杏树种 1 棵梧桐树，另一侧每隔 4 棵梧桐树种 1 棵银杏树，最终两侧各种植了 35 棵树。问最多栽种了多少棵银杏树？</ExampleQuestion>
                      <ExampleOptions>A. 33　B. 34　C. 36　D. 37</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>两侧各 35 棵，分别按周期算：<br />· 一侧周期是 <b>4</b>（3 银杏 + 1 梧桐）：35 ÷ 4 = 8 …… 余 3 → 8 个整周期得 8×3 = 24 棵银杏，<b>余下 3 棵也放银杏</b> → 24 + 3 = <b>27</b> 棵。<br />· 另一侧周期是 <b>5</b>（4 梧桐 + 1 银杏）：35 ÷ 5 = 7（整除）→ 7 个整周期得 7 棵银杏 → <b>7</b> 棵。<br />合计 27 + 7 = <b>34</b> 棵。<b>关键就是「把银杏放到周期开头」</b>，余数才算成银杏。<br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
    </>
  )
}
