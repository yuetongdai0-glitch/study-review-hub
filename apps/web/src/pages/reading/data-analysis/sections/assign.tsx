import type { ReactElement } from 'react'
import { Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 五、假设分配法
 *
 * @returns 该节正文。
 */
export default function S6(): ReactElement {
  return (
    <>
      <div className="section-lead">
              假设分配和拆分一样，都是「<b>抓大放小</b>」——把「大数」分完，「小数」差一点完全不影响结果。
              它不受「R 像不像分数」的限制，所以<b>熟练之后是万能解</b>。
            </div>
      
            <h4>1. 核心思想：先想 A，再想 X，画一棵分配树</h4>
            <Callout variant="formula">
              <div className="formula">X = A × R　且　B = A + X = A × (1 + R)</div>
              假设一个接近的整数 A₁ → 算出 X₁ = A₁ × R → 得到 B₁ = A₁ + X₁ → 与真实现期 B 比较，剩下的继续分。
            </Callout>
            <Callout variant="key">
              <b>为什么要画树？</b>因为一次分不完，要「分两轮」。树上一眼就能看出：
              每一轮的 Aᵢ 与 Xᵢ 是并列关系，<b>A = ΣAᵢ，X = ΣXᵢ</b>，而「剩余量」是下一轮的被分配数。
            </Callout>
            <figure className="fig">
              <svg viewBox="0 0 460 300" role="img" aria-label="假设分配法分配树：现期38650先分出基期35000和增量2800，剩余850再分出787和63">
                <text x={230} y={24} fontSize={14} fontWeight="700" fill="#c87f0a" textAnchor="middle">现期 B = 38650（被分配数）　R = 7.8%</text>
                <line x1={230} y1={32} x2={120} y2={66} stroke="#f39c12" strokeWidth={1.5} />
                <line x1={230} y1={32} x2={340} y2={66} stroke="#f39c12" strokeWidth={1.5} />
                <rect x={56} y={66} width={128} height={34} rx={8} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.2} />
                <text x={120} y={88} fontSize={13} fontWeight="700" fill="#3a5fd9" textAnchor="middle">第一步 A₁ = 35000</text>
                <rect x={276} y={66} width={128} height={34} rx={8} fill="#fef5e7" stroke="#f39c12" strokeWidth={1.2} />
                <text x={340} y={88} fontSize={13} fontWeight="700" fill="#c87f0a" textAnchor="middle">X₁ = 2800</text>
                <text x={120} y={114} fontSize={11.5} fill="#999" textAnchor="middle">取一个整百（R 为正 → 往下取）</text>
                <text x={340} y={114} fontSize={11.5} fill="#999" textAnchor="middle">X₁ = A₁ × R = 35000×8%</text>
                <line x1={120} y1={118} x2={222} y2={146} stroke="#bbb" strokeWidth={1.2} />
                <line x1={340} y1={118} x2={238} y2={146} stroke="#bbb" strokeWidth={1.2} />
                <rect x={160} y={146} width={140} height={30} rx={8} fill="#f5eef8" stroke="#9b59b6" strokeWidth={1.2} />
                <text x={230} y={166} fontSize={12.5} fontWeight="700" fill="#7d3c98" textAnchor="middle">剩余 B₂ = 38650 − (35000+2800)</text>
                <text x={400} y={166} fontSize={13} fontWeight="700" fill="#7d3c98" textAnchor="middle">= 850</text>
                <line x1={230} y1={176} x2={120} y2={206} stroke="#9b59b6" strokeWidth={1.5} />
                <line x1={230} y1={176} x2={340} y2={206} stroke="#9b59b6" strokeWidth={1.5} />
                <rect x={56} y={206} width={128} height={32} rx={8} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.2} />
                <text x={120} y={227} fontSize={13} fontWeight="700" fill="#3a5fd9" textAnchor="middle">第二步 A₂ ≈ 787</text>
                <rect x={276} y={206} width={128} height={32} rx={8} fill="#fef5e7" stroke="#f39c12" strokeWidth={1.2} />
                <text x={340} y={227} fontSize={13} fontWeight="700" fill="#c87f0a" textAnchor="middle">X₂ ≈ 63</text>
                <text x={120} y={252} fontSize={11.5} fill="#999" textAnchor="middle">A₂ ≈ B₂ ÷ (1+R) ≈ 787</text>
                <text x={340} y={252} fontSize={11.5} fill="#999" textAnchor="middle">B₂ − A₂ ≈ 63</text>
                <line x1={20} y1={262} x2={440} y2={262} stroke="#e0e8ff" strokeWidth={1} />
                <text x={230} y={284} fontSize={13.5} fontWeight="700" fill="#1a7a45" textAnchor="middle">A = 35000+787 = 35787　　　X = 2800+63 = 2863</text>
              </svg>
              <figcaption>图 4｜假设分配「分配树」：现期先分出一大块（A₁、X₁），剩下的零头再分一次</figcaption>
            </figure>
            <Example>
              <div className="example-tag">📖 例题 1 · 假设分配基本操作</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某地区社会消费品零售总额 38650 亿元，同比增长 7.8%。求 2022 年该地区社零总额。</ExampleQuestion>
                <ExampleOptions><span>A. 35200</span><span>B. 35600</span><span>C. 35850</span><span>D. 36100</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">①</span>R = 7.8% ≈ 8%，R 为正 → A₁ 往<b>下</b>取整百：A₁ = 35000。<br />
                  <span className="step-label">②</span>X₁ = 35000 × 8% = 2800 → B₁ = 35000 + 2800 = 37800。<br />
                  <span className="step-label">③</span>剩余 B₂ = 38650 − 37800 = 850 → A₂ ≈ 850 ÷ 1.08 ≈ 787。<br />
                  <span className="step-label">④</span>A = 35000 + 787 ≈ <b>35787</b>。（精确 38650 ÷ 1.078 ≈ 35853）<br />
                  <span className="correct">答案：C. 35850</span>
                  <div className="ex-note">想让结果更准：把 R 用 7.8% 而不是 8% 重算一轮，B₂ 变成 920，A₂ ≈ 854，A ≈ 35854。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>2. 第二步怎么分：R ≤ 25% 用 10% / 20% 修正，R &gt; 25% 用 415</h4>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">R 的大小</th><th>第二步（对剩余量的分配）方法</th></tr>
                <tr><td className="nowrap">R 在 30% 以下</td><td>用此时被分配数的 10%、20% 上下修正（最常用）</td></tr>
                <tr><td className="nowrap">R 在 33% 左右</td><td>X = B ÷ 4</td></tr>
                <tr><td className="nowrap">R = 42.9% 左右</td><td>X = 0.3 B</td></tr>
                <tr><td className="nowrap">R 在 50% 左右</td><td>X = B ÷ 3</td></tr>
                <tr><td className="nowrap">R 在 66% 左右</td><td>X = 0.4 B</td></tr>
                <tr><td className="nowrap">R 在 80%～100% 以上</td><td>X = B ÷ 2</td></tr>
              </DataTable>
            </div>
            <Callout variant="key">
              <b>小总结（花生原话）：</b>假设分配第二步时——<b>0 &lt; R ≤ 25%</b> 时用 10% 和 20% 修正；
              <b>R &gt; 25%</b> 时第二步改用「415」。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 2 · 第二步用 415（R &gt; 25%）</div>
              <ExampleBody>
                <ExampleQuestion>现期 B = 685，增长率 R = 22.2%，求基期 A 和变化量 X。（再做 B = 445、R = 34.2%）</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 第一组：R = 22.2% ≈ 1/5 → 份数比 5 : 1 : 6 → 一份量 = 685 ÷ 6 ≈ 114<br />
                  → A = 5 × 114 = <b>560</b>，X = 114 → 精确 A = 685 ÷ 1.222 ≈ 560.6，X ≈ 124.4。<br />
                  第二组：R = 34.2% &gt; 25% → 第二步走 415。34.2% ≈ 1/3 → 份数比 3 : 1 : 4 → 一份 = 445 ÷ 4 = 111.25<br />
                  → A = 3 × 111.25 = <b>334</b>，X = 111；精确 A = 445 ÷ 1.342 ≈ 331.6，X ≈ 113.4。<br />
                  <span className="correct">答案：A≈560 / X≈124；A≈332 / X≈113</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>3. R 与 X 的快速参考（估增量时先想这张表）</h4>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">增长率 R 范围</th><th>X 的快速估值</th><th>说明</th></tr>
                <tr><td className="nowrap">0 ~ 20%</td><td>用 10%、20% 上下修正</td><td>最常用区间</td></tr>
                <tr><td className="nowrap">25% 左右</td><td>X ≈ B ÷ 5</td><td>即 415 份数法</td></tr>
                <tr><td className="nowrap">33% 左右</td><td>X ≈ B ÷ 4</td><td>≈ 1/3</td></tr>
                <tr><td className="nowrap">42.9% 左右</td><td>X ≈ 0.3 B</td><td>≈ 3/7</td></tr>
                <tr><td className="nowrap">50% 左右</td><td>X ≈ B ÷ 3</td><td>≈ 1/2</td></tr>
                <tr><td className="nowrap">66% 左右</td><td>X ≈ 0.4 B</td><td>≈ 2/3</td></tr>
                <tr><td className="nowrap">80% ~ 100% 以上</td><td>X ≈ B ÷ 2</td><td>接近翻倍</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 3 · 假设分配求增量｜2023 联考</div>
              <ExampleBody>
                <ExampleQuestion>2021 年全国城市供水管道长度 105.99 万公里，同比增长 5.26%。问 2021 年供水管道长度比 2020 年增长约多少万公里。</ExampleQuestion>
                <ExampleOptions><span>A. 5 万公里</span><span>B. 5.3 万公里</span><span>C. 5.6 万公里</span><span>D. 6 万公里</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> R = 5.26% &lt; 10%，用假设分配：取整 A₁ = 100 万公里 → X₁ = 100 × 5.26% = 5.26。<br />
                  剩余 B₂ = 105.99 − 105.26 = 0.73 → X₂ ≈ 0.04 → X = 5.26 + 0.04 ≈ <b>5.3</b> 万公里。<br />
                  <span className="correct">答案：B. 5.3 万公里</span>（精确 X = 105.99 × 5.26% ÷ 1.0526 ≈ 5.30）
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 4 · 假设分配求基期｜2023 联考</div>
              <ExampleBody>
                <ExampleQuestion>2021 年全国城市供水总量 673.34 亿立方米，同比增长 6.96%。问 2020 年全国城市供水总量约为：</ExampleQuestion>
                <ExampleOptions><span>A. 600</span><span>B. 620</span><span>C. 630</span><span>D. 724</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 取整百 A₁ = 630 → X₁ = 630 × 6.96% ≈ 44 → B₁ = 630 + 44 = 674，已经非常接近 673.34。<br />
                  A ≈ <b>629</b>，与 630 最接近。<br />
                  <span className="correct">答案：C. 630 亿立方米</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>4. 负增长的假设分配：A、B 同号，X 异号</h4>
            <Callout variant="key">
              <b>三条符号规则：</b>① <b>A 和 B 符号一致</b>（都是正的）；② <b>X 和 A 符号相反</b>（R 为负 → X 为负）；
              ③ 于是 <b>X 和 B 也相反</b>。<br />
              落到操作上就是两句话：<b>负增长时 A 要比 B 大，所以第一步 A₁ 要「往上」给</b>；
              <b>X₁ 记得带负号</b>。
            </Callout>
            <figure className="fig">
              <svg viewBox="0 0 460 270" role="img" aria-label="负增长的假设分配树：现期826，假设基期900、增量为负65，剩余负9回补到基期得891">
                <text x={230} y={22} fontSize={14} fontWeight="700" fill="#c0392b" textAnchor="middle">现期 B = 826（下降 7.2%，R = −7.2%）</text>
                <line x1={230} y1={30} x2={120} y2={62} stroke="#ff6b6b" strokeWidth={1.5} />
                <line x1={230} y1={30} x2={340} y2={62} stroke="#ff6b6b" strokeWidth={1.5} />
                <rect x={56} y={62} width={128} height={34} rx={8} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.2} />
                <text x={120} y={84} fontSize={13} fontWeight="700" fill="#3a5fd9" textAnchor="middle">第一步 A₁ = 900</text>
                <rect x={276} y={62} width={128} height={34} rx={8} fill="#fff0f0" stroke="#ff6b6b" strokeWidth={1.2} />
                <text x={340} y={84} fontSize={13} fontWeight="700" fill="#c0392b" textAnchor="middle">X₁ = −65</text>
                <text x={120} y={110} fontSize={11.5} fill="#999" textAnchor="middle">A 要比 B 大 → 往上给（取 900）</text>
                <text x={340} y={110} fontSize={11.5} fill="#999" textAnchor="middle">X₁ = 900 × (−7.2%) = −65</text>
                <line x1={120} y1={114} x2={222} y2={142} stroke="#bbb" strokeWidth={1.2} />
                <line x1={340} y1={114} x2={238} y2={142} stroke="#bbb" strokeWidth={1.2} />
                <rect x={150} y={142} width={160} height={30} rx={8} fill="#f5eef8" stroke="#9b59b6" strokeWidth={1.2} />
                <text x={230} y={162} fontSize={12.5} fontWeight="700" fill="#7d3c98" textAnchor="middle">剩余 B₂ = 826 − (900 − 65) = −9</text>
                <line x1={230} y1={172} x2={230} y2={196} stroke="#9b59b6" strokeWidth={1.5} />
                <polygon points="230,200 225,190 235,190" fill="#9b59b6" />
                <text x={248} y={190} fontSize={12} fill="#7d3c98">剩余是负数 → 从 A 里「减掉」</text>
                <line x1={20} y1={212} x2={440} y2={212} stroke="#e0e8ff" strokeWidth={1} />
                <text x={230} y={236} fontSize={13.5} fontWeight="700" fill="#1a7a45" textAnchor="middle">A = 900 − 9 = 891　　　X = −65</text>
                <text x={230} y={258} fontSize={12} fill="#999" textAnchor="middle">验证：891 × (−7.2%) ≈ −64，891 − 64 = 827 ≈ 826 ✓</text>
              </svg>
              <figcaption>图 5｜负增长的分配树：A₁ 往大给、X 带负号、剩余量回补到 A 上</figcaption>
            </figure>
            <Example>
              <div className="example-tag">📖 例题 5 · 负增长的假设分配（分配树演练）</div>
              <ExampleBody>
                <ExampleQuestion>用假设分配求下列各题的基期 A 与增量 X：<br />① B = 687，R = −3.4%　② B = 528，R = −5.2%　③ B = 728，R = −13%</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 假设 A₁ = 700 → X₁ = 700 × (−3.4%) = −24 → B₁ = 700 − 24 = 676 → 剩余 B₂ = 687 − 676 = <b>+11</b><br />
                  　 A = 700 + 11 = <b>711</b>，X = <b>−24</b>（711 × (−3.4%) ≈ −24 ✓）<br />
                  ② 假设 A₁ = 600 → X₁ = 600 × (−5.2%) = −31 → B₁ = 569 → 剩余 B₂ = 528 − 569 = <b>−41</b><br />
                  　 再对 −41 分配：A₂ ≈ −41 ÷ 0.948 ≈ −43 → A = 600 − 43 = <b>557</b>，X = −31 + 2 = <b>−29</b><br />
                  ③ 假设 A₁ = 800 → X₁ = 800 × (−13%) = −104 → B₁ = 696 → 剩余 B₂ = 728 − 696 = <b>+32</b><br />
                  　 A₂ ≈ 32 ÷ 0.87 ≈ 37 → A = 800 + 37 = <b>837</b>，X = −104 − 4 = <b>−108</b><br />
                  <span className="correct">答案：① 711 / −24　② 557 / −29　③ 837 / −108</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>5. 选项极近时：反手拿选项代进去算</h4>
            <SubPoint>
              选项极其相近（只差一两个数）时，<b>正向算反而更慢</b>。这时把选项当已知量，
              用 <code>A′ = B − X′</code> 反推基期，再验 <code>X = A′ × R</code> 是否等于选项给的 X′——
              一步就能锁定答案。误差只有「选项之差 × R」，可以忽略。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 6 · 选项极近｜2018 重庆</div>
              <ExampleBody>
                <ExampleQuestion>2018 年 1~5 月粮油、食品类商品零售额 5505 亿元，同比增长 9.2%。问同比增加多少亿元。</ExampleQuestion>
                <ExampleOptions><span>A. 70</span><span>B. 70.6</span><span>C. 463.8</span><span>D. 465</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 先用数量级排除 A、B：5500 的 10% 是 550，增量不可能只有 70。<br />
                  再用选项反代：设 X′ = 465 → A′ = 5505 − 465 = 5040 → X = A′ × 9.2% = 5040 × 9.2% = <b>463.7</b>。<br />
                  与 C（463.8）几乎相等。<br />
                  <span className="correct">答案：C. 463.8</span>
                  <div className="ex-note">C、D 只差 1.2，1.2 × 9.2% ≈ 0.11，所以代 C 还是代 D，验出来的增量都指向 C。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 7 · 选项极近 · 负增长｜2024 河北</div>
              <ExampleBody>
                <ExampleQuestion>2022 年十个品种再生资源回收总金额约 13140.6 亿元，同比下降 4.05%。问相比 2021 年，回收总金额同比下降了约多少亿元。</ExampleQuestion>
                <ExampleOptions><span>A. 511</span><span>B. 532</span><span>C. 555</span><span>D. 578</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 这是<b>负增长</b>：A = B ÷ (1 − 4.05%)，所以 A 比 B 大，下降量也更大。<br />
                  取选项中间的 560 反代：A′ = 13140 + 560 = 13700 → X = A′ × 4.05% = 13700 × 4.05% ≈ <b>555</b>。<br />
                  <span className="correct">答案：C. 555</span>（精确 A = 13140.6 ÷ 0.9595 ≈ 13695，下降 554.6）
                  <div className="ex-note">负增长时反代要用 <b>A′ = B + X′</b>（加号！），这是最容易写错的一步。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>6. 两次假设分配：求「某一段」的基期</h4>
            <Example>
              <div className="example-tag">📖 例题 8 · 两次假设分配｜2023 联考</div>
              <ExampleBody>
                <ExampleQuestion>
                  2022 年 1~7 月全社会用电量累计 49303 亿千瓦时，同比增长 3.4%；其中 7 月当月 8324 亿千瓦时，同比增长 6.3%。
                  问 2021 年 1~6 月全社会用电量累计约多少亿千瓦时。
                </ExampleQuestion>
                <ExampleOptions><span>A. 38258</span><span>B. 39851</span><span>C. 40472</span><span>D. 41279</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 「1~6 月的基期」= 「1~7 月的基期」−「7 月的基期」，所以要分配两次：<br />
                  <span className="step-label">①</span>求 2021 年 1~7 月：A₁ = 49303 ÷ 1.034 ≈ 47700 → 假设 A = 47700，X = 47700 × 3.4% ≈ 1622，47700 + 1622 = 49322 ≈ 49303 ✓<br />
                  <span className="step-label">②</span>求 2021 年 7 月：A₂ = 8324 ÷ 1.063 ≈ 7830（7830 × 1.063 ≈ 8323 ✓）<br />
                  <span className="step-label">③</span>相减：47700 − 7830 = <b>39870</b>，落在 39851 附近。<br />
                  <span className="correct">答案：B. 39851</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>7. 三种方法怎么选：直除 / 415 / 假设分配</h4>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">方法</th><th>适合场景</th><th>优点</th><th>缺点</th></tr>
                <tr><td className="nowrap">直除</td><td>选项差距大、只求量级</td><td>不需要判断，机械执行</td><td>慢，且容易在中间步骤出错</td></tr>
                <tr><td className="nowrap">415 份数法</td><td>R 靠近某个分数</td><td>一步出 A 和 X，最快</td><td>R 不像分数就用不了</td></tr>
                <tr><td className="nowrap">假设分配</td><td>任意 R（尤其 R &lt; 10%）</td><td>万能，心算即可</td><td>要多分一轮，需要练</td></tr>
              </DataTable>
            </div>
            <Callout variant="tip">
              <b>实战取舍：</b>R 像分数（25%、16.7%、33.3%、66.7%…）→ 先试 415；
              不像 → 直接假设分配；R &lt; 3% 且选项差距大 → 直接 B × R。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 9 · 三种方法对比（同一道题三种做法）</div>
              <ExampleBody>
                <ExampleQuestion>已知现期 B = 12500，增长率 R = 6.3%，求增长量 X。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解法 A（直除）</b>：X = 12500 ÷ 1.063 × 6.3% ≈ 11759 × 6.3% ≈ <b>741</b> —— 两步除法，最慢。<br />
                  <b>解法 B（415）</b>：6.3% 不像任何常用分数，硬凑 1/16 = 6.25% 误差不大但别扭 —— 不推荐。<br />
                  <b>解法 C（假设分配）</b>：取 A₁ = 12000 → X₁ = 12000 × 6.3% = 756 → B₁ = 12756，已超过 12500。<br />
                  　　改取 A₁ = 11800 → X₁ = 743 → B₁ = 12543 → 剩余 −43 → A₂ ≈ −40。<br />
                  　　X ≈ 743 − 2 ≈ <b>741</b> —— 一次心算，最快。<br />
                  <span className="correct">答案：X ≈ 741（R &lt; 10% → 假设分配最优）</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
