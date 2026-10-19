import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 九、数列问题
 *
 * @returns 该节正文。
 */
export default function S11(): ReactElement {
  return (
    <>
      <Block>
                    <BlockTitle>1. 等差数列【重点】</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">通项：aₙ = a₁ + (n-1)d　　变体：aₙ = aₘ + (n − m)d（从任意已知项往两边推）</span><br />
                      <span className="formula">求和：Sₙ = n(a₁ + aₙ)/2 = n×a中项</span><br />
                      <span className="formula">中项求和：n为奇数 → Sₙ = n × a(中间项)</span><br />
                      <span className="formula">平均数 = 中位数 = (a₁ + aₙ)/2</span>
                    </Callout>
                    <Callout variant="key">
                      <b>必背：</b>S₉ = 45，S₁₀ = 55（1到n的求和）<br />
                      <b>64 的秘密（编号反复筛除类）：</b>每次把奇数编号拿掉、剩下的重新编号，再拿奇数……<br />
                      　 这样一直筛，最后剩下的必然是 <b>2 的最大幂</b>：100 以内就是 <b>2⁶ = 64</b>。<br />
                      　 道理像剥洋葱 —— 每轮留下的都是"偶中偶"，最内层就是 64。（2024 浙江：100 个零件反复拿掉奇数号，最后剩 64 号）
                    </Callout>
                    <Callout variant="tip">各项成等差数列 → 每个"时间段"的和也成等差数列</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题1 · 等差数列中项求和</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一个等差数列共9项，中间项（第5项）为10，求这9项的和。</ExampleQuestion>
                      <ExampleOptions>A.45　B.80　C.90　D.100</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>n为奇数 → Sₙ = n × 中间项<br />
                        S₉ = 9 × 10 = <b>90</b><br />
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题2 · 等差数列通项与求和</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>等差数列 &#123;aₙ&#125; 中，首项 a₁ = 3，公差 d = 2，则前 10 项之和 S₁₀ = （　　）。</ExampleQuestion>
                  <ExampleOptions>A.100　B.110　C.120　D.130</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>两步走 —— 先求末项，再求和。<br />① 通项：a₁₀ = a₁ + (n − 1)d = 3 + 9 × 2 = <b>21</b>；<br />② 求和：S₁₀ = n × (a₁ + a₁₀) ÷ 2 = 10 × (3 + 21) ÷ 2 = 10 × 24 ÷ 2 = <b>120</b>。<br /><span style={{ color: '#6b7280' }}>也可用中项：10 项的中项是第 5.5 项 =（a₅ + a₆）÷ 2 = (11 + 13) ÷ 2 = 12，S₁₀ = 10 × 12 = 120，少算一步。</span>
                    <span className="correct">答案：C</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>2. 等比数列【考频低】</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">通项：aₙ = a₁ × q^(n-1)</span><br />
                      <span className="formula">求和：Sₙ = a₁(1-qⁿ)/(1-q)（q≠1）</span>
                    </Callout>
                    <Callout variant="tip">等比一般使用枚举法，别浪费精力背公式</Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题3 · 等比数列</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>一个等比数列的首项是 2，公比是 3，它的第 4 项是多少？</ExampleQuestion>
                <ExampleOptions>A.18　B.36　C.54　D.162</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>等比数列通项 aₙ = a₁ × q^(n−1)。<br />a₄ = 2 × 3³ = 2 × 27 = <b>54</b>。<br />（考场上项数很少时直接逐项乘更快：2 → 6 → 18 → 54）
                  <br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>3. 特殊数列</BlockTitle>
                    <PointList>
                      <li><b>星期数列</b>：固定公差为7</li>
                      <li><b>季度数列</b>：固定公差为3</li>
                      <li>不用每次重新推导，直接用等差公式</li>
                    </PointList>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题4 · 特殊数列（逐日递增 · 2022 北京）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一辆车每天都比前一天多开 15 千米，第三天开的距离正好是第一天的 2 倍。则前三天一共开了多少千米？</ExampleQuestion>
                      <ExampleOptions>A.225　B.190　C.135　D.130</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>每天多开固定的 15 千米 → 三天的里程构成<b>公差 d = 15 的等差数列</b>。设第一天 x 千米：第二天 x + 15，第三天 x + 30。<br />「第三天 = 第一天的 2 倍」→ x + 30 = 2x → <b>x = 30</b>。<br />三天依次是 30、45、60（等差数列）→ 合计 <b>30 + 45 + 60 = 135</b> 千米。<br /><span style={{ color: '#6b7280' }}>也可用中项：三天和 = 3 × 中间项 = 3 × 45 = 135，更快。</span>
                    <span className="correct">答案：C</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
              <ExampleHeader>📝 例题5 · 特殊数列（星期数列）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某年的第 3 个星期一是 1 月 16 日，那么这一年的第 8 个星期一是几月几日？</ExampleQuestion>
                <ExampleOptions>A.2 月 13 日　B.2 月 20 日　C.2 月 27 日　D.3 月 2 日</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>星期数列是<b>公差为 7 的等差数列</b>，相邻两个星期一必相隔 7 天。<br />第 3 个到第 8 个相隔 5 个间隔：1 月 16 日 + 5 × 7 = 1 月 16 日 + 35 天。<br />1 月还剩 31 − 16 = 15 天，35 − 15 = 20 → 落到 <b>2 月 20 日</b>。
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>4. 等差数列的两个隐藏性质（省时间）</BlockTitle>
                    <PointList>
                      <li><b>下标和相等 → 对应项之和相等</b>：若 m + n = p + q，则 <b>aₘ + aₙ = aₚ + a_q</b>。<br />
                        例：a₁ + a₉ = a₂ + a₈ = a₃ + a₇ = a₄ + a₆ = 2a₅。</li>
                      <li><b>中项法万能</b>：n 为奇数 → Sₙ = n × a<sub>中</sub>；n 为偶数 → Sₙ = (n/2) × (a<sub>首</sub> + a<sub>末</sub>)。</li>
                      <li><b>巧求两数差</b>：两个等差数列方程相减，可消去公共项，快速求出两数之差。</li>
                    </PointList>
                    <Callout variant="tip">只给"a₃ + a₇ = 20"就要 S₉ → 用 <b>a₃ + a₇ = 2a₅</b> 先求中项，再 S₉ = 9 × a₅，两步出答案。</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题6 · 等差数列性质</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>等差数列 &#123;aₙ&#125; 中，a₃ + a₇ = 20，则该数列前 9 项之和 S₉ = ？</ExampleQuestion>
                      <ExampleOptions>A.60　B.80　C.90　D.100</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>下标和相等 → a₃ + a₇ = 2a₅（3+7 = 5+5）→ a₅ = 10<br />
                        n = 9 为奇数 → S₉ = 9 × 中间项 = 9 × 10 = <b>90</b><br />
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>5. 补充考点 13：等差数列中的倍数特性（页码类）</BlockTitle>
                    <Callout variant="tip">
                      <b>一个认知：</b>等差数列「多数考公式，少数考倍数」。<br />
                      页码、连续整数这类题，靠的是 <b>1 到 n 求和 S = n(n+1)/2</b> 加上<b>整除特性</b>，而不是硬列方程。
                    </Callout>
                    <Callout variant="formula">
                      <span className="formula">① 先估 n：S ≈ n²/2 → n ≈ √(2S)，再算相邻两个 n 的完整和</span><br />
                      <span className="formula">② 多加/漏加：实际和 − 完整和 = ±（那一页的页码）</span><br />
                      <span className="formula">③ 连续 4 页之和 = 4 × 这 4 页的平均数，配合「能被某数整除」定位置</span>
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题7 · 页码多加了一页</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某书的页码从 1 开始连续编号。小莎把全部页码相加时，不小心把其中某一页多加了一次，结果和为 2003，则被多加的页码是多少？</ExampleQuestion>
                      <ExampleOptions>A.45　B.50　C.56　D.62</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>① 先估总页数：S = n(n+1)/2 ≈ 2003 → <b>62</b>×63/2 = 1953，<b>63</b>×64/2 = 2016；<br />
                        ② 因为是<b>多加</b>了一页，实际和一定 ≥ 完整和，所以完整和只能是 1953（n = 62）；<br />
                        ③ 被多加的页码 = 2003 − 1953 = <b>50</b>（50 ≤ 62，位置成立）。
                        <br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题8 · 连续页码 + 整除定位</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>小王读一本 204 页的书，发现书的前半部分有连续的 4 个页码被墨水污染，把其余 200 个页码相加，其和刚好能被 85 整除，则被污染的 4 个页码中最小的数是：</ExampleQuestion>
                      <ExampleOptions>A.100　B.95　C.75　D.41</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>① 全书页码和 = 204×205/2 = <b>20910</b>；<br />
                        ② 设被污染的 4 页为 k、k+1、k+2、k+3，其和 = 4k + 6；<br />
                        ③ 其余 200 页之和 = 20910 − (4k + 6) = 20904 − 4k，要求能被 85 整除；<br />
                        ④ 20904 ÷ 85 余 <b>79</b> → 4k ≡ 79 (mod 85) → 取 4k = 79 + 85 = <b>164</b> → k = <b>41</b>（另一个解 k = 41 + 85/…不满足 4k ≤ 408 与"前半部分"条件）。
                        <br />
                        <span className="correct">答案：D</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
    </>
  )
}
