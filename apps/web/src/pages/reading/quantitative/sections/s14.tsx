import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 十四、溶液问题
 *
 * @returns 该节正文。
 */
export default function S16(): ReactElement {
  return (
    <>
      <Block>
                    <BlockTitle>基础公式</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">溶液 = 溶质 + 溶剂</span><br />
                      <span className="formula">浓度 = 溶质 ÷ 溶液 × 100%</span><br />
                      <span className="formula">混合浓度 = (溶质₁+溶质₂) ÷ (溶液₁+溶液₂)</span>
                    </Callout>
                    <Callout variant="key"><b>核心：抓住溶质不变</b></Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题1 · 基础公式（2020 广东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>现有浓度为 4% 的食盐水 250 克，若向该食盐水添加 10 克食盐，再蒸发掉 160 克水，则新获得的食盐水的浓度为（　　）。</ExampleQuestion>
                      <ExampleOptions>A.10%　B.15%　C.20%　D.25%</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>不管怎么折腾，<b>只跟踪"盐"和"溶液"这两个数</b>，别去算浓度中间变化：
                              ① 原有盐 = 250 × 4% = <b>10</b> 克；
                              ② 加 10 克盐 → 盐 = 10 + 10 = <b>20</b> 克（<b>加盐 = 盐和溶液同时增加</b>）；
                              ③ 蒸发 160 克水 → 溶液 = 250 + 10 − 160 = <b>100</b> 克（<b>蒸发只减溶液，盐不变</b>）；
                              ④ 新浓度 = 20 ÷ 100 = <b>20%</b>。
                              要点：「加盐」与「加水 / 蒸发」对分子分母的影响不同 —— <b>加盐两根都涨，加水 / 蒸发只动分母</b>。把这两条分开记，这类题不会错。
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>1. 蒸发稀释类</BlockTitle>
                    <Callout variant="key">
                      常赋值溶质为100<br />
                      蒸发：溶质不变，溶液减少<br />
                      稀释：溶质不变，溶剂（溶液）增加
                    </Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题2 · 蒸发稀释（2024 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一次化学实验中，稀释一定量的盐水，在此盐水中加入 100 g 水后，其浓度变为原来的 80%，则原盐水质量为（　　）。</ExampleQuestion>
                      <ExampleOptions>A.200 g　B.300 g　C.400 g　D.500 g</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>加水前后<b>溶质（盐）不变</b>，这是本题唯一的抓手。
                              设原盐水质量为 m 克、原浓度为 c，则盐 = mc（加水后还是 mc）。
                              加水后：mc ÷ (m + 100) = 80% × c —— 两边 c 直接约掉：
                              m ÷ (m + 100) = 0.8 → m = 0.8m + 80 → 0.2m = 80 → m = <b>400</b>（克）。
                              验证：取 c = 10%（随便设）→ 原盐 40 克；加水后溶液 500 克 → 浓度 40/500 = 8% = 10% × 80% ✓
                              要点：比值型稀释题<b>直接设"盐 = mc"再约掉 c</b>，一步就把浓度消掉，不用真去求浓度。
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>2. 混合溶液</BlockTitle>
      
                  <figure className="fig">
                    <svg viewBox="0 0 460 190" role="img" aria-label="十字交叉法示意">
                      <text x={26} y={56} fontSize={16} fill="#1a1a2e" fontWeight="700">30%</text>
                      <text x={26} y={152} fontSize={16} fill="#1a1a2e" fontWeight="700">10%</text>
                      <text x={146} y={108} fontSize={16} fill="#4f7cff" fontWeight="700">18%</text>
                      <path d="M92 50 L138 100" stroke="#4f7cff" strokeWidth={1.8} />
                      <path d="M92 146 L138 112" stroke="#4f7cff" strokeWidth={1.8} />
                      <text x={172} y={52} fontSize={15} fill="#ff6b6b" fontWeight="700">12</text>
                      <text x={172} y={152} fontSize={15} fill="#ff6b6b" fontWeight="700">8</text>
                      <text x={200} y={52} fontSize={13.5} fill="#6b7280">= 30 − 18，写它旁边的那份是 <b>10%</b></text>
                      <text x={200} y={152} fontSize={13.5} fill="#6b7280">= 18 − 10，写它旁边的那份是 <b>30%</b></text>
                      <text x={200} y={102} fontSize={14} fill="#4f7cff" fontWeight="700">份数比 = 8 ∶ 12 = 2 ∶ 3</text>
                      <text x={26} y={184} fontSize={13.5} fill="#6b7280">200 克 ∶ 300 克 = 2 ∶ 3 ✓ 对上了</text>
                    </svg>
                    <figcaption>交叉相减得到的两个差，之比 = 两边数量的<b>反比</b>。混合后浓度一定夹在两个原浓度之间，所以「离谁远，谁的份数就少」。</figcaption>
                  </figure>
                    <Callout variant="key">
                      <b>线段法（十字交叉法）：</b><br />
                      溶液A浓度a ── (c-b) ── 混合浓度c<br />
                      溶液B浓度b ── (a-c) ──<br />
                      质量比 A∶B = (c-b)∶(a-c)
                    </Callout>
                    <Callout variant="tip">三种溶液混合 → 两两混合计算</Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题3 · 十字交叉法（2020 浙江选调）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>实验室内有浓度分别为 10% 和 25% 的盐酸各 500 毫升，从两种溶液中分别倒出一部分配成浓度为 15% 的盐酸 600 毫升。如果将剩余的盐酸混合，则该溶液的浓度为（　　）。</ExampleQuestion>
                      <ExampleOptions>A.16.5%　B.18.6%　C.20%　D.21.25%</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>两步 —— 先用<b>十字交叉</b>（线段法）求出配 600 毫升时各用了多少，再算剩余部分。
                              <b>① 十字交叉</b>：用 10% 和 25% 配成 15%
                              　 两个浓度到 15% 的"距离"：|10 − 15| = 5、|25 − 15| = 10；
                              　 <b>距离之比 = 另一边用量之比</b> → 10% 的量 ∶ 25% 的量 = 10 ∶ 5 = <b>2 ∶ 1</b>；
                              　 600 毫升按 2∶1 分 → <b>10% 用 400 毫升、25% 用 200 毫升</b>；
                              　 验算：400×10% + 200×25% = 40 + 50 = 90 = 15% × 600 ✓
                              <b>② 剩余部分</b>：10% 剩 500 − 400 = 100 毫升，25% 剩 500 − 200 = 300 毫升；
                              <b>③ 混合浓度</b> = (100×10% + 300×25%) ÷ (100 + 300) = (10 + 75) ÷ 400 = <b>21.25%</b>。
                              要点：十字交叉"<b>距离之比取反</b>"——离目标浓度远的那一边，用量少。这一步方向搞反，答案一定错。
                        <span className="correct">答案：D</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>3. 反复倒出类</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">剩余溶质 = 原溶质 × (1 - 每次倒出比例)ⁿ</span>
                    </Callout>
                    <Callout variant="tip">先约分，后计算！可以灵活转换为浓度</Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题4 · 反复倒出（2024 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>现有一容器，装有 100 克浓度为 75% 的盐水，从中倒出 40 克盐水后，再加入 40 克纯净水，如此反复三次。问此时盐水的浓度是（　　）。</ExampleQuestion>
                      <ExampleOptions>A.16.20%　B.9%　C.1.62%　D.0.90%</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>每次「倒出 + 加满水」，<b>溶质按固定比例流失</b>，所以可以一步乘方：
                              ① 每次倒出的比例 = 40 ÷ 100 = <b>2/5</b>；
                              ② 每次操作后<b>溶质变为原来的</b> 1 − 2/5 = <b>3/5</b>（溶液总量被补回 100 克，所以浓度也乘 3/5）；
                              ③ 反复 3 次：浓度 = 75% × (3/5)³ = 75% × 27/125 = <b>16.2%</b>。
                              验证：75% → 45% → 27% → 16.2%（每步乘 0.6）✓
                              要点：<b>「倒出多少比例、就乘 (1 − 比例) 多少次」</b>，一次乘方搞定，不要一步一步算。
                              注意区分：如果倒出后<b>加的是同浓度的溶液</b>（而不是清水），浓度就不变了。
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>4. 连续稀释</BlockTitle>
                    <SubPoint>每次倒出V，加满水，浓度变为原来的 (1-V/总量) 倍</SubPoint>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题5 · 连续稀释（2018 江西）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>从一瓶浓度为 52% 的酒精溶液中倒出 1/3，加满纯净水，再倒出 1/3，又加满纯净水，此时酒精溶液的浓度是多少？</ExampleQuestion>
                      <ExampleOptions>A.5.8%　B.23.1%　C.17.3%　D.31.5%</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>与"反复倒出"同一模型，只是把倒出量换成了<b>比例</b>：
                              ① 每次倒出 1/3 → 每次操作后浓度变为原来的 1 − 1/3 = <b>2/3</b>；
                              ② 操作 2 次：浓度 = 52% × (2/3)² = 52% × 4/9 ≈ <b>23.11%</b> ≈ 23.1%。
                              要点：<b>倒出比例 × 次数 → 直接乘方</b>。若题目问"再加几次才降到 x%"，就用 <b>(2/3)ⁿ = 目标 ÷ 原浓度</b> 反解 n。
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
    </>
  )
}
