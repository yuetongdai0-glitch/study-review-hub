import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十九、抽屉原理与盈亏问题
 *
 * @returns 该节正文。
 */
export default function S21(): ReactElement {
  return (
    <>
      <Callout variant="key">
              这几个题型（抽屉、鸡兔同笼、盈亏）都有<b>固定的口算套路</b>，认出来就是 30 秒一题，属于"性价比最高"的一类。
            </Callout>
                  <Block>
                    <BlockTitle>1. 抽屉原理（最不利原则）</BlockTitle>
      
                  <figure className="fig">
                    <svg viewBox="0 0 460 200" role="img" aria-label="抽屉原理示意">
                      <rect x={26} y={44} width={118} height={104} rx={8} fill="#fff0f0" stroke="#ff6b6b" strokeWidth={1.8} />
                      <rect x={171} y={44} width={118} height={104} rx={8} fill="#fef5e7" stroke="#f39c12" strokeWidth={1.8} />
                      <rect x={316} y={44} width={118} height={104} rx={8} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.8} />
                      <text x={70} y={32} fontSize={14} fill="#ff6b6b" fontWeight="700">红</text>
                      <text x={215} y={32} fontSize={14} fill="#f39c12" fontWeight="700">黄</text>
                      <text x={360} y={32} fontSize={14} fill="#4f7cff" fontWeight="700">蓝</text>
                      <g fill="#ff6b6b"><circle cx={58} cy={96} r={12} /><circle cx={85} cy={96} r={12} /><circle cx={112} cy={96} r={12} /></g>
                      <g fill="#f39c12"><circle cx={203} cy={96} r={12} /><circle cx={230} cy={96} r={12} /><circle cx={257} cy={96} r={12} /></g>
                      <g fill="#4f7cff"><circle cx={348} cy={96} r={12} /><circle cx={375} cy={96} r={12} /><circle cx={402} cy={96} r={12} /></g>
                      <text x={26} y={166} fontSize={13.5} fill="#6b7280">最不利：每种颜色各 3 个，共 9 个 —— 此时还没有 4 个同色；</text>
                      <text x={26} y={188} fontSize={13.5} fill="#6b7280">再取第 10 个，无论什么颜色，都会凑满 4 个同色 → 答案 10</text>
                    </svg>
                    <figcaption>「至少取几个才能<b>保证</b>……」→ 先故意让自己最不成功：每种颜色都取到「差一点」的个数，最后 <b>+1</b>。</figcaption>
                  </figure>
                    <Callout variant="formula">
                      <span className="formula">答案 = 最不利情况 + 1</span>
                    </Callout>
                    <PointList>
                      <li>特征："至少……才能<b>保证</b>……"。</li>
                      <li>思路：<b>故意让你不成功</b>——先算"差一点就满足"时最多能取多少个，再 +1。</li>
                      <li>进阶：把 n 个物体放进 m 个抽屉，若 n &gt; m × k，则至少有一个抽屉里有 ≥ k+1 个物体。</li>
                    </PointList>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题1 · 抽屉原理（最不利）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一个盒子里有红、黄、蓝三种颜色的小球各 10 个。至少取出多少个球，才能保证其中有 4 个同色？</ExampleQuestion>
                      <ExampleOptions>A.9　B.10　C.11　D.12</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>最不利情况 —— 每种颜色各取 3 个，共 9 个，此时仍没有 4 个同色<br />
                        再取 1 个，必然使某种颜色达到 4 个 → 9 + 1 = <b>10 个</b><br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>2. 鸡兔同笼</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">兔 = (总脚数 − 2 × 总只数) ÷ 2</span><br />
                      <span className="formula">鸡 = 总只数 − 兔</span>
                    </Callout>
                    <Callout variant="key">
                      <b>本质是"假设法"：</b>假设全是鸡 → 脚数为 2 × 总只数 → 与实际脚数的差，就是"被少算的兔脚"，每只兔少算 2 只脚，所以除以 2。
                    </Callout>
                    <Callout variant="tip">这类"两个量混在一起、已知两个总数"的题（鸡兔、得分/失分、晴天雨天、大盒小盒）<b>全是同一个模型</b>，直接套假设法。</Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题2 · 鸡兔同笼 / 假设法（2022 北京）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某测试共有 100 道题，答对一道题得 3 分，不答或答错一道题扣 2 分，小张测试成绩为 285 分，则他一共答对了多少道题？</ExampleQuestion>
                      <ExampleOptions>A.85　B.90　C.95　D.97</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>这是鸡兔同笼的典型变形（<b>得分 / 失分</b>模型），用<b>假设法</b>：
                              ① 假设 100 道<b>全部答对</b>，应得 100 × 3 = <b>300</b> 分；
                              ② 实际得 285 分 → 比满分少了 300 − 285 = <b>15</b> 分；
                              ③ 每把一道"答对"换成"答错"，得分的变化 = 3 + 2 = <b>5</b> 分（<b>从 +3 变成 −2，相差 5</b>）；
                              ④ 答错的题数 = 15 ÷ 5 = <b>3</b> 道 → 答对 = 100 − 3 = <b>97</b> 道。
                              验证：97 × 3 − 3 × 2 = 291 − 6 = 285 ✓
                              要点：鸡兔同笼只有一个模型 —— <b>「两个量混在一起、已知两个总数」</b>（鸡兔、得分失分、晴天雨天、大盒小盒）。
                              假设全是 A，算出的差 ÷「单个差」= 另一个量的个数。<b>别忘了一正一负要相加</b>（3 和 −2 相差 5，不是 1）。
                        <span className="correct">答案：D</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>3. 盈亏问题</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">一盈一亏：份数 = (盈 + 亏) ÷ 两次每份之差</span><br />
                      <span className="formula">双盈（双亏）：份数 = (大盈 − 小盈) ÷ 两次每份之差</span>
                    </Callout>
                    <Callout variant="key">
                      特征："如果每人分 3 个则多 8 个，如果每人分 5 个则少 6 个"——<b>先求人数（份数），再求物品总数</b>。
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题3 · 盈亏问题（不等式型 · 2024 广东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某社区计划组织志愿者为社区内的独居老人提供服务。按已有志愿者的数量，如果每位志愿者服务 10 位老人，则有 5 位老人无人提供服务；如果增加 2 位志愿者，则每位志愿者最多服务 8 位老人就能为所有老人提供服务。那么该社区可能有多少名独居老人？</ExampleQuestion>
                      <ExampleOptions>A.50　B.55　C.60　D.65</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>这题是「盈亏 + 不等式」，关键在第二句的「<b>最多</b>服务 8 位」——它给的是不等式而不是等式。<br />设志愿者 v 人、老人 n 人：<br />· 每人服务 10 位还差 5 位 → <b>n = 10v + 5</b>；<br />· 增加 2 位后每人最多服务 8 位就够 → <b>8(v + 2) ≥ n</b>。<br />代入消 n：8v + 16 ≥ 10v + 5 → 11 ≥ 2v → v ≤ 5.5 → 取最大整数 <b>v = 5</b> → n = 10 × 5 + 5 = <b>55</b>。<br />验算：5 人 → 增到 7 人，7 × 8 = 56 ≥ 55 ✓<br /><span style={{ color: '#6b7280' }}>选项代入更快：50 ÷ 10 得 v = 4.5 非整数 ✗；60 → v = 5.5 ✗；65 → v = 6，但 8 × 8 = 64 &lt; 65 ✗。只有 55 成立。</span>
                    <span className="correct">答案：B</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>4. 平均数问题</BlockTitle>
                    <PointList>
                      <li><b>总数 = 平均数 × 份数</b>（万变不离其宗，先求总数再倒推）。</li>
                      <li><b>基准数法</b>：取一个基准值，各数记成"基准 ± 差"，只算偏差的平均值再加回基准。</li>
                      <li><b>混合平均</b>：两部分混合 → 用十字交叉求数量比（见第零节）。</li>
                      <li>注意：<b>平均数会被极端值拉偏</b>，出现"平均数"时先问"这个平均数到底代表谁"。</li>
                    </PointList>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题4 · 平均数问题（2025 广东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某服务大厅设有若干个服务窗口，其中 1 个是快捷服务窗口。某日服务窗口的平均业务量为 29 单，其中快捷服务窗口的业务量为 41 单，其余窗口的平均业务量为 28 单，则服务大厅共有（　　）个窗口。</ExampleQuestion>
                      <ExampleOptions>A.13　B.14　C.15　D.16</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>核心是<b>「总量 = 平均 × 个数」</b>这个恒等式，把总量用两种方式表示出来即可。<br />设共有 n 个窗口 → 总业务量 = <b>29n</b>。<br />又：快捷窗口 41 单 + 其余 (n − 1) 个窗口 × 28 单 = <b>41 + 28(n − 1)</b>。<br />两边相等：41 + 28n − 28 = 29n → <b>13 = n</b> → 共 <b>13</b> 个窗口。<br />验算：总数 = 29 × 13 = 377；另一算法 = 41 + 28 × 12 = 41 + 336 = 377 ✓<br /><span style={{ color: '#6b7280' }}>提示：这类「一部分是特殊值、其余是平均」的题，不要用基准数法，直接用「总量 = 平均 × 个数」列等式最快。</span>
                    <span className="correct">答案：A</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
    </>
  )
}
