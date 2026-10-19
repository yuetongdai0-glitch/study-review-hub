import type { ReactElement } from 'react'
import { Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 四、415 份数法
 *
 * @returns 该节正文。
 */
export default function S5(): ReactElement {
  return (
    <>
      <div className="section-lead">
              「415」三个数字分别代表<b>基期、变化量、现期</b>的份数。已知现期 B 和增长率 R 求基期 A、
              求增长量 X 时，它是最快的正解——前提是 R 能认成一个分数。
            </div>
      
            <h4>1. 方法原理：把 R 写成分数，量就变成份数</h4>
            <Callout variant="formula">
              若 R = 1/n（n 为正整数）<br />
              设 <b>基期 A = n 份</b>，则 <b>变化量 X = A×R = 1 份</b>，<b>现期 B = n+1 份</b><br />
              → 基期 : 变化量 : 现期 = <b>n : 1 : (n+1)</b>
            </Callout>
            <SubPoint>
              例：R = 25% = 1/4 → 基期 4 份、变化量 1 份、现期 5 份，即「4 : 1 : 5」——
              这就是「415 份数法」名字的由来。
            </SubPoint>
            <figure className="fig">
              <svg viewBox="0 0 460 240" role="img" aria-label="415 份数法示意：正增长时基期4份变化量1份现期5份，负增长时基期5份变化量负1份现期4份">
                <text x={20} y={26} fontSize={13.5} fontWeight="700" fill="#c87f0a">① 正增长 R = 25% = 1/4 → A : X : B = 4 : 1 : 5</text>
                <rect x={70} y={52} width={88} height={26} rx={4} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.2} />
                <text x={114} y={70} fontSize={12.5} fontWeight="700" fill="#3a5fd9" textAnchor="middle">A　4 份</text>
                <rect x={158} y={52} width={22} height={26} rx={4} fill="#fef5e7" stroke="#f39c12" strokeWidth={1.2} />
                <text x={169} y={44} fontSize={11} fill="#c87f0a" textAnchor="middle">X 1 份</text>
                <line x1={70} y1={84} x2={180} y2={84} stroke="#2ecc71" strokeWidth={1.5} />
                <text x={125} y={100} fontSize={12.5} fontWeight="700" fill="#1a7a45" textAnchor="middle">现期 B = 5 份</text>
                <text x={196} y={70} fontSize={12.5} fill="#555">一份量 = B ÷ 5</text>
                <text x={196} y={90} fontSize={12.5} fill="#555">A = 4 × 一份，X = 1 × 一份</text>
                <line x1={20} y1={122} x2={440} y2={122} stroke="#e0e8ff" strokeWidth={1} />
                <text x={20} y={148} fontSize={13.5} fontWeight="700" fill="#c0392b">② 负增长 R = −20% = −1/5 → A : X : B = 5 : (−1) : 4</text>
                <rect x={70} y={170} width={110} height={26} rx={4} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.2} />
                <text x={125} y={188} fontSize={12.5} fontWeight="700" fill="#3a5fd9" textAnchor="middle">A　5 份</text>
                <rect x={158} y={170} width={22} height={26} rx={4} fill="#fff0f0" stroke="#ff6b6b" strokeWidth={1.2} strokeDasharray="4 3" />
                <text x={169} y={162} fontSize={11} fill="#c0392b" textAnchor="middle">X = −1 份</text>
                <line x1={70} y1={202} x2={158} y2={202} stroke="#2ecc71" strokeWidth={1.5} />
                <text x={114} y={218} fontSize={12.5} fontWeight="700" fill="#1a7a45" textAnchor="middle">现期 B = 4 份</text>
                <text x={196} y={188} fontSize={12.5} fill="#555">A 与 B 份数都为正</text>
                <text x={196} y={208} fontSize={12.5} fill="#555">X 为负 → A 反而比 B 大</text>
              </svg>
              <figcaption>图 3｜415 份数条：正增长 4:1:5、负增长 5:(−1):4（X 为负份，A 比 B 大）</figcaption>
            </figure>
            <Example>
              <div className="example-tag">📖 例题 1 · 原理验证（份数比是怎么来的）</div>
              <ExampleBody>
                <ExampleQuestion>已知 R = 20%，把份数比写出来，并用 B = 642 验证一份量是多少。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> R = 20% = 1/5 → n = 5 → A : X : B = 5 : 1 : 6。<br />
                  验证：设 A = 5 份，则 X = A × 20% = 1 份，B = A + X = 6 份 ✓（份数自洽）<br />
                  代入：一份量 = 642 ÷ 6 = 107 → A = 5 × 107 = 535，X = 107。回代 535 × 1.2 = 642 ✓<br />
                  <span className="correct">答案：份数比 5:1:6，一份量 107，A = 535、X = 107</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>2. 四步操作</h4>
            <ul className="points" style={{ listStyle: 'none', padding: '0' }}>
              <li className="sub-point"><b>第一步</b>　把增长率 R 化成相近的分数 a/b（能整除最好）。</li>
              <li className="sub-point"><b>第二步</b>　写出<b>基期 : 变化量 : 现期 = b : a : (a+b)</b>。</li>
              <li className="sub-point"><b>第三步</b>　用现期实际量与对应份数，求出「一份量」= B ÷ (a+b)。</li>
              <li className="sub-point"><b>第四步</b>　按份数还原：A = b × 一份量，X = a × 一份量。</li>
            </ul>
            <Example>
              <div className="example-tag">📖 例题 2 · 415 基本操作</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某企业利润 5000 万元，同比增长 25%。求 2022 年利润与同比增长量。</ExampleQuestion>
                <ExampleOptions><span>A. 3800 / 1000</span><span>B. 4000 / 1000</span><span>C. 4200 / 1050</span><span>D. 4500 / 1200</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">①</span>R = 25% = 1/4 → a = 1，b = 4；<br />
                  <span className="step-label">②</span>份数比 A : X : B = 4 : 1 : 5；<br />
                  <span className="step-label">③</span>现期 5000 对应 5 份 → 一份量 = 5000 ÷ 5 = 1000；<br />
                  <span className="step-label">④</span>A = 4 × 1000 = <b>4000</b> 万元，X = 1 × 1000 = <b>1000</b> 万元。<br />
                  验证 4000 + 1000 = 5000 ✓，1000 ÷ 4000 = 25% ✓<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 3 · R 不整时近似取分数（估小则一份变小）</div>
              <ExampleBody>
                <ExampleQuestion>现期 B = 780，增长率 R = 25.1%，求基期 A 和变化量 X。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 25.1% 最靠近 1/4（25%），把它<b>估小</b>了 → 求出的「一份」会偏小。<br />
                  份数比 4 : 1 : 5 → 一份量 = 780 ÷ 5 = 156 → A = 624，X = 156。<br />
                  精确：X = 780 × 0.251 ÷ 1.251 ≈ 156.5，A ≈ 623.5。<br />
                  <span className="correct">答案：A ≈ 624，X ≈ 156（估小 → 一份仅偏小 0.4%）</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>3. 「除 n+1」一步出口诀</h4>
            <Callout variant="formula">
              <div className="formula">R = 1/n → X = B ÷ (n+1)，A = B − X</div>
              一般式：X ÷ B = R ÷ (1+R)　（R 为负也照样成立）
            </Callout>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">R</th><th className="nowrap">写成 1/n</th><th className="nowrap">X = B÷(n+1)</th><th className="nowrap">X ÷ B</th></tr>
                <tr><td className="nowrap">25%</td><td className="nowrap">1/4</td><td className="nowrap">B ÷ 5</td><td className="nowrap">0.20</td></tr>
                <tr><td className="nowrap">20%</td><td className="nowrap">1/5</td><td className="nowrap">B ÷ 6</td><td className="nowrap">0.167</td></tr>
                <tr><td className="nowrap">16.7%</td><td className="nowrap">1/6</td><td className="nowrap">B ÷ 7</td><td className="nowrap">0.143</td></tr>
                <tr><td className="nowrap">14.3%</td><td className="nowrap">1/7</td><td className="nowrap">B ÷ 8</td><td className="nowrap">0.125</td></tr>
                <tr><td className="nowrap">11.1%</td><td className="nowrap">1/9</td><td className="nowrap">B ÷ 10</td><td className="nowrap">0.10</td></tr>
                <tr><td className="nowrap">33.3%</td><td className="nowrap">1/3</td><td className="nowrap">B ÷ 4</td><td className="nowrap">0.25</td></tr>
                <tr><td className="nowrap">66.6%</td><td className="nowrap">2/3</td><td className="nowrap">B × 0.4</td><td className="nowrap">0.40</td></tr>
                <tr><td className="nowrap">43%</td><td className="nowrap">3/7</td><td className="nowrap">B × 0.3</td><td className="nowrap">0.30</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 4 · 除 n+1 一步出</div>
              <ExampleBody>
                <ExampleQuestion>① 2023 年某市快递业务量 1250 亿件，同比增长 25%，求同比增长量。<br />② 某省 2023 年粮食产量 1430 万吨，同比增长 43%，求 2022 年产量。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① R = 25% = 1/4 → n = 4 → X = 1250 ÷ (4+1) = <b>250</b> 亿件；回代 A = 1250 − 250 = 1000，1000 × 1.25 = 1250 ✓<br />
                  ② R = 43% ≈ 3/7 → X ÷ B ≈ 0.3 → X ≈ 1430 × 0.3 = 429 万吨；A = 1430 − 429 = <b>1001</b> 万吨，1001 × 1.43 ≈ 1431 ✓<br />
                  <span className="correct">答案：① 250 亿件　② 约 1001 万吨</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>4. 负增长：「415」变「4(−1)3」</h4>
            <SubPoint>
              R 为负时，变化量 a 也是负数，份数比变成 <b>b : (−a) : (b−a)</b>。
              <b>A 与 B 的份数都是正的，只有 X 是负的</b>——所以负增长时 A 会比 B 大。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 5 · 负增长的 415</div>
              <ExampleBody>
                <ExampleQuestion>现期 B = 844，增长率 R = −20%，求基期 A 和变化量 X。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> −20% = −1/5 → 份数比 A : X : B = 5 : (−1) : 4。<br />
                  一份量 = 844 ÷ 4 = 211 → A = 5 × 211 = <b>1055</b>，X = −1 × 211 = <b>−211</b>。<br />
                  验证 1055 − 211 = 844 ✓，−211 ÷ 1055 = −20% ✓<br />
                  <span className="correct">答案：A = 1055，X = −211</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 6 · 负增长的 415（第二题）</div>
              <ExampleBody>
                <ExampleQuestion>现期 B = 144，增长率 R = −9.1%，求基期 A 和变化量 X。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> −9.1% = −1/11 → 份数比 A : X : B = 11 : (−1) : 10。<br />
                  一份量 = 144 ÷ 10 = 14.4 → A = 11 × 14.4 = <b>158.4</b>，X = −14.4。<br />
                  <span className="correct">答案：A ≈ 158，X ≈ −14</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>5. 实战：415 + 误差修正</h4>
            <Example>
              <div className="example-tag">📖 例题 7 · 415 + 修正｜2020 云南</div>
              <ExampleBody>
                <ExampleQuestion>2019 年 6 月，全国发行地方政府债券 8996 亿元，同比增长 68.37%。问 2019 年 6 月发行的地方政府债券比 2018 年 6 月多约多少亿元。</ExampleQuestion>
                <ExampleOptions><span>A. 6151</span><span>B. 5953</span><span>C. 3653</span><span>D. 3043</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">①</span>68.37% 落在 60%～80% → 百化分取 <b>66.7% = 2/3</b>，修正系数 0.9。<br />
                  <span className="step-label">②</span>份数比 A : X : B = 3 : 2 : 5 → X′ = 2 × (8996 ÷ 5) = 2 × 1799.2 = 3598.4。<br />
                  <span className="step-label">③</span>R差 = 68.37% − 66.7% ≈ 1.67 个百分点 → R修 = 1.67 × 0.9 ≈ 1.5%。<br />
                  <span className="step-label">④</span>R原式 &gt; 百化分 → 加：X = 3598.4 × 1.015 ≈ <b>3653</b>。<br />
                  精确 X = 8996 × 0.6837 ÷ 1.6837 ≈ 3652.5 ✓<br />
                  <span className="correct">答案：C. 3653</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>6. 使用时机：什么时候用 415，什么时候换假设分配</h4>
            <div className="tw">
              <DataTable>
                <tr><th>条件</th><th>推荐方法</th><th>说明</th></tr>
                <tr><td>R &gt; 10% 且靠近某个分数</td><td><b>415 份数法</b>（+误差修正）</td><td>如 R = 24.8% ≈ 1/4、68.37% ≈ 2/3</td></tr>
                <tr><td>R &lt; 10%</td><td><b>假设分配法</b></td><td>熟练后万能，不受「像不像分数」限制</td></tr>
                <tr><td>R 非常小（&lt; 5%）且选项差距大</td><td>X ≈ B × R</td><td>用现期代替基期，误差可忽略</td></tr>
                <tr><td>R = 1/n 且只求增量</td><td>「除 n+1」一步出</td><td>X = B ÷ (n+1)</td></tr>
              </DataTable>
            </div>
            <Callout variant="warn">
              <b>两个最容易错的点：</b>① 分不清「估大 / 估小」的方向——估大则一份变大，估小则一份变小；
              ② 负增长时忘了 X 是负数，把 A 算成比 B 小。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 8 · 时机选择实战｜2017 联考</div>
              <ExampleBody>
                <ExampleQuestion>
                  2016 年 6 月城镇消费品零售额 23082 亿元，同比增长 10.5%；乡村消费品零售额 3775 亿元，同比增长 11.2%。
                  问 2016 年 6 月城镇消费品零售额比上年同期增加多少亿元。
                </ExampleQuestion>
                <ExampleOptions><span>A. 380</span><span>B. 2169</span><span>C. 1193</span><span>D. 2193</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> B = 23082，R = 10.5%。查表：10.5% 落在 10%～11.8% → 百化分取 11.1% = 1/9，系数 8。<br />
                  <span className="step-label">①</span>X′ = B ÷ 10 = 2308.2（因为 B 对应 n+1 = 10 份）。<br />
                  <span className="step-label">②</span>R差 = 10.5% − 11.1% = −0.6 个百分点 → R修 = 0.6 × 8 = 4.8%。<br />
                  <span className="step-label">③</span>R原式 &lt; 百化分 → <b>减</b>：X = 2308.2 × (1 − 4.8%) ≈ <b>2197</b>。<br />
                  精确 X = 23082 × 0.105 ÷ 1.105 ≈ 2193.3 ✓（选项 C.1193 是把 R 当成了 5%，典型的量级坑）<br />
                  <span className="correct">答案：D. 2193</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
