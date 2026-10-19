import type { ReactElement } from 'react'
import { Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 十二、比较类
 *
 * @returns 该节正文。
 */
export default function S13(): ReactElement {
  return (
    <>
      <div className="section-lead">
              比较类的核心思想只有一句：<b>能比就不算</b>。本章把花生第七讲里的方法按「比分数 → 比增量 → 比数值」三类排开，
              每个方法都配一道能直接照做的例题。
            </div>
      
            <h4>1. 趋势法（借比重趋势比两个分数）</h4>
            <Callout variant="formula">
              <div className="formula">分子增速（倍数） &gt; 分母增速 → 分数变大；分子增速 &lt; 分母增速 → 分数变小</div>
              看到「比值 / 占比 / 平均数」逐年变化，第一反应就是趋势法：只比两个增速。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 1 · 趋势法</div>
              <ExampleBody>
                <ExampleQuestion>
                  某市 2022 年高新技术产品出口额 350 亿元、出口总额 1150 亿元；2023 年高新技术产品出口额 380 亿元、出口总额 1200 亿元。
                  问 2023 年高新技术产品出口额占出口总额的比重与上年相比：
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 分子增速 = 30 ÷ 350 ≈ 8.6%；分母增速 = 50 ÷ 1150 ≈ 4.3%。<br />
                  分子增速 &gt; 分母增速 → 分数变大 → <b>比重上升</b>。<br />
                  <span className="correct">答案：比重上升 ⬆️</span>
                  <div className="ex-note">不需要算出 30.4% 和 31.7%，只比两个增速就够了。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>2. 通分法</h4>
            <SubPoint>
              把要比较的两个分数的<b>分子或分母换算成同样大小</b>，再比较另一部分。两条基本规律：
              <br />❉ 分母相同比分子，分子大的分数大；　❉ 分子相同比分母，分母小的分数大。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 2 · 通分法</div>
              <ExampleBody>
                <ExampleQuestion>比较 3/7 与 4/9 的大小。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 通分母（7 × 9 = 63）：3/7 = 27/63，4/9 = 28/63。<br />
                  分母相同比分子：27 &lt; 28 → <b>3/7 &lt; 4/9</b>。<br />
                  <span className="correct">答案：3/7 &lt; 4/9</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>3. 「王者荣耀」法（分子分母同时拆分）</h4>
            <SubPoint>
              利用盐水思想，把分子分母同时拆成「<b>一大杯 + 一小勺</b>」，判断这个分数是大于还是小于某个目标值。
              <br />例：判断 2701/5412 是否超过 50% → 写成 (2700 + 1) / (5400 + 12)：
              2700/5400 = 50%，而「一小勺」1/12 ≈ 8.3% &lt; 50% → 真值<b>小于</b> 50%。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 3 · 王者荣耀法｜2023 联考</div>
              <ExampleBody>
                <ExampleQuestion>
                  2016~2020 年城镇人口 / 年末总人口（万人）：2016 年 81924/139232，2017 年 84343/140011，2018 年 86433/140541，
                  2019 年 88426/141008，2020 年 90220/141212。问「十三五」期间人口城镇化率超过 60% 的年份共有几个。
                </ExampleQuestion>
                <ExampleOptions><span>A. 2 个</span><span>B. 3 个</span><span>C. 4 个</span><span>D. 5 个</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 把年末总人口一律看作 140000，则「超过 60%」等价于城镇人口 &gt; 84000。<br />
                  这样就不用真做除法了，只比分子：<br />
                  2016 年 81924 &lt; 84000 ✗　2017 年 84343 ✓　2018 年 86433 ✓　2019 年 88426 ✓　2020 年 90220 ✓<br />
                  共 <b>4 个</b>年份。<br />
                  <span className="correct">答案：C. 4 个</span>
                  <div className="ex-note">2020 年要单独看一眼：90220/141212 = (84 + 6.2)/(140 + 1.2)，分子相对涨得更快 → 稳超 60%。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>4. 双线法（增速大小比较专用）</h4>
            <SubPoint>
              增长率 R = 增量 X ÷ 基期 A。把「分子」和「分母」各自的变化画成<b>上下两条线</b>：
              <br />① 先求各年增量 X = B − A，标在上面一条线上（记 x₁、x₂、x₃…）；
              <br />② 把各年基期 A 标在下面一条线上；
              <br />③ 两两比较分数 X/A：分子涨得比分母快 → 增速变大；分母一直上升时，<b>直接比分子大小即可</b>。
              <br /><b>技巧：</b>只求选项里出现的那几年的增量，其余年份直接跳过。
            </SubPoint>
            <figure className="fig">
              <svg viewBox="0 0 460 210" role="img" aria-label="双线法示意：上面一条线标各年增量，下面一条线标各年基期，两两比较">
                <text x={14} y={52} fontSize={12.5} fontWeight="700" fill="#c87f0a">增量 X</text>
                <line x1={96} y1={46} x2={440} y2={46} stroke="#f39c12" strokeWidth={1.5} />
                <circle cx={130} cy={46} r={4} fill="#f39c12" /><text x={130} y={32} fontSize={12} fill="#c87f0a" textAnchor="middle">3.2</text>
                <circle cx={222} cy={46} r={4} fill="#f39c12" /><text x={222} y={32} fontSize={12} fill="#c87f0a" textAnchor="middle">1.8</text>
                <circle cx={314} cy={46} r={4} fill="#f39c12" /><text x={314} y={32} fontSize={12} fill="#c87f0a" textAnchor="middle">3.1</text>
                <circle cx={406} cy={46} r={4} fill="#f39c12" /><text x={406} y={32} fontSize={12} fill="#c87f0a" textAnchor="middle">2.9</text>
                <text x={14} y={132} fontSize={12.5} fontWeight="700" fill="#4f7cff">基期 A</text>
                <line x1={96} y1={126} x2={440} y2={126} stroke="#4f7cff" strokeWidth={1.5} />
                <circle cx={130} cy={126} r={4} fill="#4f7cff" /><text x={130} y={146} fontSize={12} fill="#3a5fd9" textAnchor="middle">25.94</text>
                <circle cx={222} cy={126} r={4} fill="#4f7cff" /><text x={222} y={146} fontSize={12} fill="#3a5fd9" textAnchor="middle">29.17</text>
                <circle cx={314} cy={126} r={4} fill="#4f7cff" /><text x={314} y={146} fontSize={12} fill="#3a5fd9" textAnchor="middle">30.99</text>
                <circle cx={406} cy={126} r={4} fill="#4f7cff" /><text x={406} y={146} fontSize={12} fill="#3a5fd9" textAnchor="middle">34.11</text>
                <line x1={14} y1={166} x2={440} y2={166} stroke="#e0e8ff" strokeWidth={1} />
                <text x={14} y={188} fontSize={12.5} fill="#1a1a2e">2019 与 2020 比：分子 3.2 &gt; 1.8，分母 25.94 &lt; 29.17 → R₁₉ 一定大</text>
                <text x={14} y={206} fontSize={12.5} fill="#1a1a2e">2019 与 2021 比：分子都是 3.2，分母 25.94 &lt; 30.99 → R₁₉ 仍然大</text>
              </svg>
              <figcaption>图 10｜双线法：上下两条线一摆，增速大小一眼看出，几乎不用算</figcaption>
            </figure>
            <Example>
              <div className="example-tag">📖 例题 4 · 双线法｜2024 联考</div>
              <ExampleBody>
                <ExampleQuestion>2018～2022 年全国体育场地面积分别为 25.94、29.17、30.99、34.11、37.02 亿平方米。问 2019～2022 年全国体育场地面积增长最快的年份是：</ExampleQuestion>
                <ExampleOptions><span>A. 2019 年</span><span>B. 2020 年</span><span>C. 2021 年</span><span>D. 2022 年</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">①</span>先求增量：X₁₉ ≈ 3.2、X₂₀ ≈ 1.8、X₂₁ ≈ 3.1、X₂₂ ≈ 2.9；<br />
                  <span className="step-label">②</span>基期分别为 25.94、29.17、30.99、34.11；<br />
                  <span className="step-label">③</span>分母逐年上升，所以分母只用来看「同分子时谁更小」：<br />
                  　 2019 vs 2020：分子 3.2 &gt; 1.8，分母 25.94 &lt; 29.17 → 2019 大；<br />
                  　 2019 vs 2021：分子 3.2 略大于 3.1，分母 25.94 &lt; 30.99 → 2019 大；<br />
                  　 2019 vs 2022：分子 3.2 &gt; 2.9，分母 25.94 &lt; 34.11 → 2019 大。<br />
                  <span className="correct">答案：A. 2019 年</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>5. 替代比较（换个式子比，顺序不变但更好算）</h4>
            <div className="tw">
              <DataTable>
                <tr><th>原本要比</th><th>可以替代成</th><th>为什么能替代</th></tr>
                <tr><td>年均增长率</td><td>末期 ÷ 基期（B ÷ A）</td><td>年份差 n 相同时，B/A 越大年均增长率越大</td></tr>
                <tr><td>增速 R = X ÷ A</td><td>B ÷ A</td><td>B/A = 1 + R，随 R 单调递增</td></tr>
                <tr><td>增速 R = X ÷ A</td><td>X ÷ B</td><td>X/B = R ÷ (1+R)，同样单调递增；<b>现期量最好找</b></td></tr>
                <tr><td>比重 A ÷ 整体</td><td>A ÷ 非A</td><td>A/非A = 比重 ÷ (1 − 比重)，随比重单调递增</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 5 · 替代比较（用 X÷B 代替 X÷A）</div>
              <ExampleBody>
                <ExampleQuestion>甲市现期财政收入 1200 亿元、基期 1000 亿元；乙市现期 1500 亿元、基期 1300 亿元。哪市财政收入增速更快？</ExampleQuestion>
                <ExampleAnswer>
                  <b>常规做法</b>：R甲 = 200 ÷ 1000 = 20.0%，R乙 = 200 ÷ 1300 ≈ 15.4% → 甲快。<br />
                  <b>替代比较</b>：改用 X ÷ B —— 甲 200 ÷ 1200 ≈ 16.7%，乙 200 ÷ 1500 ≈ 13.3% → <b>仍是甲快</b>（顺序完全一致）。<br />
                  好处：基期 A 往往要自己求，现期 B 直接读材料 → 替代后少一次除法、少一次出错。<br />
                  <span className="correct">答案：甲市更快</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>6. 增量大小比较（大大则大 / 一大一小看倍数）</h4>
            <Callout variant="key">
              <b>规则一（大大则大）：</b>B 越大、R 也越大 → X 一定越大。<br />
              <b>规则二（一大一小看倍数）：</b>若 B 是你的 N 倍，则 R 也要是你的 N 倍以上，X 才可能相等；
              B 是 N 倍但 R 不到 N 倍 → X 更小。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 6 · 增量比较（大大则大 + 看倍数）</div>
              <ExampleBody>
                <ExampleQuestion>
                  四城市 2023 年 GDP 现期量与增速：甲 8000 亿 / 6.0%，乙 6000 亿 / 9.5%，丙 5000 亿 / 8.0%，丁 9000 亿 / 4.5%。
                  问哪个城市 GDP 增长量最大。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">①</span>甲 vs 乙：甲 B 是乙的 8000/6000 ≈ 1.33 倍，甲 R 是乙的 6.0/9.5 ≈ 0.63 倍 → 一大一小，R 的倍数远小于 1 → <b>乙增量更大</b>；<br />
                  <span className="step-label">②</span>乙 vs 丁：丁 B 是乙的 1.5 倍，丁 R 是乙的 4.5/9.5 ≈ 0.47 倍 → <b>乙增量更大</b>；<br />
                  <span className="step-label">③</span>验证：X甲 ≈ 8000×6.0%÷1.06 ≈ 453；X乙 ≈ 6000×9.5%÷1.095 ≈ 520；X丙 ≈ 5000×8%÷1.08 ≈ 370；X丁 ≈ 9000×4.5%÷1.045 ≈ 387。<br />
                  乙 &gt; 甲 &gt; 丁 &gt; 丙。<br />
                  <span className="correct">答案：乙城市（≈520 亿元）</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>7. 追及问题（利用增量大小判断差值变化）</h4>
            <SubPoint>
              「A 比 B 的差额是扩大还是缩小」→ <b>只看两边的增量谁大</b>：
              A 的增量 &gt; B 的增量 → 差额扩大；反之缩小。完全不需要算出两期的绝对差。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 7 · 追及问题</div>
              <ExampleBody>
                <ExampleQuestion>
                  2021 年某国出口额 1.9 万亿元，同比增长 15.7%；进口额 1.53 万亿元，同比增长 28.6%。
                  问 2021 年该国货物进出口差额（出口 − 进口）比上年是扩大还是缩小。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 差额 = 出口 − 进口，只需比两边的增量：<br />
                  出口增量 = 1.9 × 15.7% ÷ 1.157 ≈ <b>0.258</b> 万亿元；<br />
                  进口增量 = 1.53 × 28.6% ÷ 1.286 ≈ <b>0.340</b> 万亿元。<br />
                  进口增量更大 → 差额被「追上」→ <b>差额缩小</b>。<br />
                  验证：2020 年顺差 ≈ 1.642 − 1.190 = 0.452；2021 年顺差 = 1.9 − 1.53 = 0.37 → 缩小 ✓<br />
                  <span className="correct">答案：缩小</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>8. 查找 + 比较两步走</h4>
            <Callout variant="key">
              <b>解题原则（花生原话）：</b>读题分两步——先〈<b>查找</b>〉把要用到的数<b>一次性抄出来</b>，
              再〈<b>计算或比较</b>〉。<b>不要边查边比</b>，那是最容易看错行的做法。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 8 · 先摘数再比较</div>
              <ExampleBody>
                <ExampleQuestion>
                  五个地区 2023 年快递业务量（亿件）与同比增速：A 区 320 / 18%、B 区 280 / 22%、C 区 410 / 12%、D 区 260 / 26%、E 区 350 / 15%。
                  问哪两个区增速都高于 C 区且业务量都低于 C 区。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">①</span>先把数抄出来（照上表即可，不用回头）；<br />
                  <span className="step-label">②</span>锁定基准 C 区：业务量 410、增速 12%；<br />
                  <span className="step-label">③</span>逐条筛：A（320 &lt; 410 ✓，18% &gt; 12% ✓）、B（280 ✓，22% ✓）、D（260 ✓，26% ✓）、E（350 ✓，15% ✓）。<br />
                  符合的共有 4 个区。<br />
                  <span className="correct">答案：A、B、D、E 四个区</span>
                  <div className="ex-note">第十讲提醒：数「几个省份」时，别忘了先把表格里的「全国 / 合计」行划掉。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>9. 特殊比较（超过某数值、折线图）</h4>
            <Example>
              <div className="example-tag">📖 例题 9 · 折线图上看「超过某数值」</div>
              <ExampleBody>
                <ExampleQuestion>
                  某指标 2022 年 1~12 月的月度数值（亿元）依次为：88、95、102、110、98、120、135、128、142、150、138、160。
                  问全年月度数值超过 120 亿元的月份有几个。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 折线图上「超过 120」就是线在 120 刻度以上的点数：<br />
                  6 月 120（不是「超过」）、7 月 135 ✓、8 月 128 ✓、9 月 142 ✓、10 月 150 ✓、11 月 138 ✓、12 月 160 ✓ → 共 <b>6 个</b>。<br />
                  <span className="correct">答案：6 个</span>
                  <div className="ex-note">两个高频坑：①「超过」是严格大于，等于不算；②先确认纵轴起点是不是 0，否则高度判断会错。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>10. 基期量比较与「最值」问法关键词</h4>
            <div className="tw">
              <DataTable>
                <tr><th>题干怎么写</th><th>比什么</th></tr>
                <tr><td>增加（长）最多</td><td>增长量 X</td></tr>
                <tr><td>增加（长）最快</td><td>增长率 R 的实际值</td></tr>
                <tr><td><b>变化幅度</b>最大</td><td>增长率 R 的<b>绝对值</b></td></tr>
                <tr><td><b>增长幅度</b>最大</td><td>增长率 R 的<b>实际值</b></td></tr>
                <tr><td>降幅最大</td><td>负值里 R 最小的</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 10 · 基期量比较｜最值口径</div>
              <ExampleBody>
                <ExampleQuestion>
                  四城市 2023 年 GDP 现期量与增速：甲 8500 亿 / 8.5%，乙 8200 亿 / 3.0%，丙 8800 亿 / 12.0%，丁 8100 亿 / 1.5%。
                  问哪个城市 2022 年 GDP 最大。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 基期 A = B ÷ (1+R)，逐个估算：<br />
                  甲 8500 ÷ 1.085 ≈ 7834；乙 8200 ÷ 1.03 ≈ 7961；丙 8800 ÷ 1.12 ≈ 7857；丁 8100 ÷ 1.015 ≈ 7980。<br />
                  注意：丙现期最大但增速也最大（12%），基期被「稀释」了；丁现期最小但增速最小（1.5%），基期几乎不变 → 丁反而最大。<br />
                  <span className="correct">答案：丁城市（≈7980 亿元）</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
