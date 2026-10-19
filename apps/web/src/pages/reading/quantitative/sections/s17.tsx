import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十七、数字推理（数列推理）
 *
 * @returns 该节正文。
 */
export default function S19(): ReactElement {
  return (
    <>
      <Callout variant="key">
              数字推理是<b>事业单位、江苏等省份的必考题型</b>（国考、多省联考一般不考）。特点：<b>没有公式、纯靠观察</b>，但题型分类极其固定——分好类，就是送分题。
            </Callout>
                  <Block>
                    <BlockTitle>1. 解题优先法则（先看特征，再定方法）</BlockTitle>
                    <DataTable>
                      <tr><th>数列特征</th><th>优先考虑</th></tr>
                      <tr><td>无明显特征、变化幅度<b>小</b></td><td><b>多级数列</b> → 相邻两项做差、做和</td></tr>
                      <tr><td>无明显特征、变化幅度<b>大</b>（倍数级）</td><td><b>多级数列</b> → 做商、做积</td></tr>
                      <tr><td>项数 ≥ 7 项，或有<b>两个括号</b></td><td><b>多重数列</b> → 隔项看、分组看</td></tr>
                      <tr><td>有明显<b>幂次数</b>或紧邻幂次数</td><td><b>幂次数列 / 幂次修正</b></td></tr>
                      <tr><td>相邻数有<b>倍数关系</b></td><td>做商，或<b>递推倍数列</b></td></tr>
                      <tr><td>含<b>分数</b></td><td><b>分数数列</b>（分子分母各成规律 / 反约分）</td></tr>
                      <tr><td>各项位数多（3~4 位）、结构类似</td><td><b>机械分组</b>（各位数字拆开找规律）</td></tr>
                    </DataTable>
                    <Callout variant="tip">前两步都试不出来，再考虑<b>递推数列</b>。方向：数列<b>递增</b> → 想加法、乘法、幂次；数列<b>递减</b> → 想减法、除法。</Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题1 · 解题优先法则</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>数列 3, 5, 9, 17, 33, ( ) 中，括号内的数是多少？</ExampleQuestion>
                <ExampleOptions>A.49　B.65　C.66　D.97</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>先看特征：无明显幂次、无分数，但相邻两项的差 2、4、8、16 呈<b>倍数关系</b>（每次 ×2）。<br />所以下一个差是 32，括号内 = 33 + 32 = <b>65</b>。<br />优先法则第一条：变化幅度小且无特征 → 先做差；做差后呈现倍数/平方规律，就是多级数列。
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>2. 多级数列（考得最多）</BlockTitle>
                    <PointList>
                      <li><b>做差</b>：相邻两项相减得到新数列，再看新数列的规律；一次差不行就<b>做二次差</b>。</li>
                      <li><b>做和</b>：相邻两项相加，或两两相加得新数列。</li>
                      <li><b>做商 / 做积</b>：变化幅度大（几倍几倍地涨）时用。</li>
                      <li>经典模型：差为等差数列、等比数列，或差为质数 / 平方数序列。</li>
                    </PointList>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题2 · 多级数列（做差）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>1，3，6，10，15，（　）</ExampleQuestion>
                      <ExampleOptions>A.18　B.20　C.21　D.24</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>无明显特征、变化幅度小 → 先做差：2，3，4，5（等差）<br />
                        下一个差为 6 → 15 + 6 = <b>21</b><br />
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>3. 多重数列（项数多 / 两个括号）</BlockTitle>
                    <PointList>
                      <li><b>隔项看</b>：奇数项、偶数项各自成一个数列（最常见）。</li>
                      <li><b>分组看</b>：两两一组或三三一组，看组内的运算关系（和、差、积、商）。</li>
                      <li>特征提示：项数 ≥ 7 项，或题目里出现两个"（ ）"。</li>
                    </PointList>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题3 · 多重数列（隔项看）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>2，3，4，9，8，27，（　）</ExampleQuestion>
                      <ExampleOptions>A.16　B.20　C.24　D.81</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>项数 ≥ 7 → 隔项看：<br />
                        奇数项 2，4，8，（　）→ 每次 ×2 → 第 7 项 = <b>16</b><br />
                        （偶数项 3，9，27 也是 ×3，相互印证）<br />
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>4. 幂次数列与幂次修正</BlockTitle>
                    <PointList>
                      <li>把每一项写成 <b>aⁿ</b> 或 <b>aⁿ ± m</b> 的形式，分别找底数、指数的规律。</li>
                      <li>看到 64 要能立刻想到 8²、4³、2⁶；看到 124 要想到 125 − 1 = 5³ − 1。</li>
                      <li>常见的"幂次附近数"：0(1³−1)、7(2³−1)、26(3³−1)、63(4³−1)、124(5³−1)。</li>
                    </PointList>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题4 · 幂次修正</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>0，7，26，63，（　）</ExampleQuestion>
                      <ExampleOptions>A.120　B.124　C.125　D.126</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>各项紧邻立方数 → 写成 n³ − 1：<br />
                        1³−1 = 0，2³−1 = 7，3³−1 = 26，4³−1 = 63 → 下一项 5³ − 1 = <b>124</b><br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>5. 递推数列</BlockTitle>
                    <PointList>
                      <li><b>递推和差</b>：后项 = 前两项之和（如 3, 8, 11, 19, 30, 49）或之差。</li>
                      <li><b>递推倍数</b>：后项 ≈ 前项 × k ± m（如 2, 7, 22, 67, 202 → ×3 + 1）。</li>
                      <li>技巧：先看<b>相邻三项</b>之间的关系，比逐项硬试快得多。</li>
                    </PointList>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题5 · 递推数列（递推倍数）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>2，7，22，67，（　）</ExampleQuestion>
                      <ExampleOptions>A.198　B.201　C.202　D.204</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>变化幅度大且约为 3 倍 → 试递推倍数：<br />
                        2 × 3 + 1 = 7，7 × 3 + 1 = 22，22 × 3 + 1 = 67<br />
                        下一项 = 67 × 3 + 1 = <b>202</b><br />
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>6. 分数数列</BlockTitle>
                    <PointList>
                      <li><b>分子分母各自成规律</b>（分别看两个数列）—— 最常见。</li>
                      <li><b>反约分</b>：把部分分数"反向通分"，让分子分母同时出现规律（如把 1/2 写成 2/4）。</li>
                      <li>只有一个分数、或分子多为 1 → 考虑<b>负幂次</b>（1/4 = 2⁻²）。</li>
                    </PointList>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题6 · 分数数列</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>1/2，3/5，5/8，（　）</ExampleQuestion>
                      <ExampleOptions>A.7/11　B.6/11　C.7/10　D.9/11</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>分子、分母各自成规律：<br />
                        分子 1，3，5 → 下一项 7；分母 2，5，8 → 下一项 11<br />
                        答案为 <b>7/11</b><br />
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>7. 必背数字表（不背就做不快）</BlockTitle>
                    <DataTable>
                      <tr><th>类型</th><th>内容</th></tr>
                      <tr><td>平方数 1~20</td><td>1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400</td></tr>
                      <tr><td>立方数 1~10</td><td>1, 8, 27, 64, 125, 216, 343, 512, 729, 1000</td></tr>
                      <tr><td>2 的幂</td><td>2, 4, 8, 16, 32, 64, 128, 256, 512, 1024</td></tr>
                      <tr><td>质数（20 以内）</td><td>2, 3, 5, 7, 11, 13, 17, 19</td></tr>
                    </DataTable>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题7 · 必背数字表</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>数列 1, 8, 27, 64, ( ) 中，括号内的数是多少？</ExampleQuestion>
                <ExampleOptions>A.100　B.121　C.125　D.216</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>看到 1、8、27、64 立刻反应：这是 <b>1³、2³、3³、4³</b>（必背立方数列）。<br />所以括号内 = 5³ = <b>125</b>。<br />必背表要背到脱口而出：平方 1~20、立方 1~10、2 的幂 2~1024、20 以内质数。
                  <br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
