import type { ReactElement } from 'react'
import { Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleOptions, ExampleQuestion, PointList, SubPoint } from '@/components/content'

/**
 * 九、比重类
 *
 * @returns 该节正文。
 */
export default function S10(): ReactElement {
  return (
    <>
      <div className="section-lead">
              比重 = 部分 ÷ 整体。它有 <b>10 个小考法</b>：现期 / 基期 / 隔级比重、部分比重和差、饼状图、
              比重趋势（定性）、比重趋势多一步 / 逆运用、比重差（定量），最后还有一张和「比值差、比值增长率」的区分表。
            </div>
      
            <h4>1. 现期比重</h4>
            <Callout variant="formula">
              <div className="formula">比重 = 部分 ÷ 整体 × 100%　　整体 = 部分 ÷ 比重　　部分 = 整体 × 比重</div>
              <b>「均前每后作分母」</b>：「均」字前面的量做分子，「每」字后面的量做分母，记成「后除前」。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 1 · 现期比重｜2017 浙江事业单位</div>
              <ExampleBody>
                <ExampleQuestion>2016 年 H 市实现货物进出口总额 4485.97 亿元，其中出口总额 3313.80 亿元。问 2016 年 H 市货物出口总额占进出口总额的比重约为：</ExampleQuestion>
                <ExampleOptions><span>A. 74%</span><span>B. 76%</span><span>C. 78%</span><span>D. 80%</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 分子分母同时拆分（「王者荣耀」法）：<br />
                  3313 / 4485 = (3300 + 13) / (4400 + 85)。<br />
                  3300 / 4400 = 75%；"一小勺" 13/85 ≈ 15.3% &lt; 75% → 真值要<b>小于</b> 75%。<br />
                  <span className="correct">答案：A. 74%</span>（精确 73.87%）
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>2. 基期比重（去年的比重）</h4>
            <Callout variant="formula">
              <div className="formula">基期比重 = 现期比重 × (1 + R整体) ÷ (1 + R部分)</div>
              <b>记忆口诀（花生原话）：</b>「基期比重 = 现期比重 × 1 + 增长率<b>反过来</b>」——
              分母的增速放分子，分子的增速放分母。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 2 · 基期比重</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某市税收收入 2400 亿元，占财政收入 60%（即财政收入 4000 亿元）。税收收入增长 8%，财政收入增长 5%。求 2022 年税收收入占财政收入的比重约为多少。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 现有比重 60%，分子（税收）增长 8%，分母（财政收入）增长 5%。<br />
                  基期比重 = 60% × (1 + 5%) ÷ (1 + 8%) = 60% × 1.05 ÷ 1.08 ≈ <b>58.3%</b>。<br />
                  合理性验证：分子涨得比分母快（8% &gt; 5%）→ 去年占比应该<b>更低</b> ✓<br />
                  <span className="correct">答案：约 58.3%</span>
                  <div className="ex-note">「以坑治坑」：选项里通常会给出 60% 让你直接选，记住「分子涨得快 → 基期比重比现期小」就能排掉。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>3. 隔级比重（大集合 → 中集合 → 小集合）</h4>
            <Callout variant="formula">
              <div className="formula">小占大 = (小 ÷ 中) × (中 ÷ 大)　　小占中 = (小 ÷ 大) ÷ (中 ÷ 大)</div>
              两个比例相乘或相除即可，不必去求任何绝对量。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 3 · 隔级比重（正反两问）</div>
              <ExampleBody>
                <ExampleQuestion>
                  某集团下设 A、B 两个事业部。A 事业部产值占集团的 40%，A 事业部中核心业务占 A 事业部的 25%。
                  问：① 核心业务占集团总产值的比重是多少？② 若核心业务占集团 10%，A 事业部占集团 40%，则核心业务占 A 事业部的比重是多少？
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 小占大 = (小÷中) × (中÷大) = 25% × 40% = <b>10%</b>；<br />
                  ② 反着除：小占中 = (小÷大) ÷ (中÷大) = 10% ÷ 40% = <b>25%</b>。<br />
                  <span className="correct">答案：① 10%　② 25%</span>
                  <div className="ex-note">第十讲原话提醒：隔级比重最容易错的不是算，而是<b>分母认错</b>——先看清问的是「占谁的比重」。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>4. 部分比重和 / 差</h4>
            <Callout variant="formula">
              <div className="formula">比重和（比重差）＝ 部分和（部分差）÷ 整体</div>
              <b>先加/减分子，再除以同一个整体</b>——不必把每个比重都算完再加。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 4 · 部分比重和｜2022 辽宁</div>
              <ExampleBody>
                <ExampleQuestion>2021 年全国公共充电桩总数 114.7 万台；分地区看，广东省 181846 台、上海市 103249 台、北京市 96840 台。问 2021 年这三地公共充电桩数量之和占全国的比重约为：</ExampleQuestion>
                <ExampleOptions><span>A. 28.7%</span><span>B. 33.3%</span><span>C. 39.8%</span><span>D. 46.7%</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 选项差距较大 → 先把三个数近似相加：18.2 + 10.3 + 9.7 = 38.2（万台）。<br />
                  比重 = 38.2 ÷ 114.7 ≈ <b>33.3%</b>。<br />
                  <span className="correct">答案：B. 33.3%</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>5. 饼状图技巧</h4>
            <PointList>
              <li>先抓 <b>25%、50%</b> 这类特殊占比（1/4、1/2 一眼看出）。</li>
              <li>多利用两部分之间的<b>倍数关系</b>（是 2 倍？1/3？）。</li>
              <li>饼图各部分一般从 <b>12 点钟方向起、顺时针</b>依次排列。</li>
              <li><b>比重 × 360° = 扇形圆心角</b>，用角度反推比重也很快。</li>
            </PointList>
            <Example>
              <div className="example-tag">📖 例题 5 · 饼状图（巧用 25% + 1%）｜2023 青海</div>
              <ExampleBody>
                <ExampleQuestion>2021 年我国母婴商品消费规模 34591 亿元，其中服装鞋帽占比 26.0%（占比最高）。问 2021 年我国消费最多的母婴商品金额约为：</ExampleQuestion>
                <ExampleOptions><span>A. 9638 亿元</span><span>B. 8994 亿元</span><span>C. 7852 亿元</span><span>D. 4186 亿元</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 占比最高的是服装鞋帽 26% → 求 34591 × 26%。<br />
                  345 × 26% = 345 × (25% + 1%) = 86.25 + 3.45 = 89.7 → 换算回原量级 ≈ <b>8994</b> 亿元。<br />
                  <span className="correct">答案：B. 8994 亿元</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>6. 比重趋势（定性判断上升 / 下降）</h4>
            <Callout variant="formula">
              <div className="formula">分子增速 R₂ &gt; 分母增速 R₁ → 比重上升 ⬆️　　R₂ &lt; R₁ → 比重下降 ⬇️　　R₂ = R₁ → 比重不变 ➡️</div>
              口诀：<b>分子涨得快，分数变大，比重变大。</b>纯数值比较：10% &gt; 5% &gt; −5% &gt; −10%。
            </Callout>
            <figure className="fig">
              <svg viewBox="0 0 460 190" role="img" aria-label="比重趋势判断：分子增速大于分母增速则比重上升">
                <text x={20} y={24} fontSize={13.5} fontWeight="700" fill="#3a5fd9">比重 = 部分（分子） ÷ 整体（分母）</text>
                <text x={20} y={62} fontSize={12.5} fill="#555">分子增速 R₂</text>
                <text x={20} y={86} fontSize={12.5} fill="#555">分母增速 R₁</text>
                <rect x={110} y={48} width={212} height={18} rx={4} fill="#4f7cff" />
                <text x={332} y={62} fontSize={12.5} fontWeight="700" fill="#3a5fd9">10.6%　涨得快</text>
                <rect x={110} y={72} width={154} height={18} rx={4} fill="#9bb4f5" />
                <text x={274} y={86} fontSize={12.5} fontWeight="700" fill="#7b8fb5">7.7%　涨得慢</text>
                <line x1={20} y1={106} x2={440} y2={106} stroke="#e0e8ff" strokeWidth={1} />
                <text x={20} y={134} fontSize={13} fill="#1a1a2e">R₂ &gt; R₁ → 分子涨得比分母快 → 分数变大 →</text>
                <text x={20} y={162} fontSize={15} fontWeight="700" fill="#16a34a">比重上升 ⬆️　（纯定性，一秒判断，不用算！）</text>
              </svg>
              <figcaption>图 7｜比重趋势：只比两个增速的大小，不看绝对量</figcaption>
            </figure>
            <Example>
              <div className="example-tag">📖 例题 6 · 比重趋势定性</div>
              <ExampleBody>
                <ExampleQuestion>2023 年全国货物出口额增长 10.6%，进口额增长 4.3%，进出口总额增长 7.7%。问 2023 年出口额占进出口总额的比重与上年相比是上升还是下降。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 部分 = 出口额，整体 = 进出口总额。<br />
                  R₂（出口） = 10.6%，R₁（总额） = 7.7% → R₂ &gt; R₁ → <b>比重上升</b>。<br />
                  合理性验证：出口涨得比总额快，出口的占比自然越来越大 ✓<br />
                  <span className="correct">答案：比重上升 ⬆️</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>7. 比重趋势「多一步」（先自己算增速）</h4>
            <SubPoint>
              题目<b>不直接给增速</b>，只给现期和基期 → 先用 R = (B − A) ÷ A 把两个增速算出来，再比大小。
              这一步通常只用前三位心算。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 7 · 比重趋势多一步</div>
              <ExampleBody>
                <ExampleQuestion>
                  2023 年某市货物出口额 6600 亿元（2022 年 6000 亿元），进出口总额 10000 亿元（2022 年 9500 亿元）。
                  问 2023 年出口额占进出口总额的比重与上年相比是上升还是下降。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">①</span>出口增速 R₂ = 600 ÷ 6000 = <b>10%</b>；<br />
                  <span className="step-label">②</span>总额增速 R₁ = 500 ÷ 9500 ≈ <b>5.3%</b>；<br />
                  <span className="step-label">③</span>10% &gt; 5.3% → 分子涨得快 → <b>比重上升</b>。<br />
                  <span className="correct">答案：上升</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>8. 比重趋势逆运用（已知比重变化，反推增速关系）</h4>
            <SubPoint>
              比重上升 = 分子涨得快 = <b>部分的增速 &gt; 整体的增速</b>；比重下降反之。
              所以只要知道「比重往哪变」，就能定出「部分增速比整体增速大还是小」，不必算出来。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 8 · 比重趋势逆运用</div>
              <ExampleBody>
                <ExampleQuestion>
                  2023 年某省中部地区 GDP 占全省的比重由 22.0% 上升到 22.5%，若全省 GDP 同比增长 7.0%，
                  则中部地区 GDP 的同比增速：
                </ExampleQuestion>
                <ExampleOptions><span>A. 低于 7%</span><span>B. 等于 7%</span><span>C. 高于 7%</span><span>D. 无法判断</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 比重<b>上升</b> → 分子（中部地区）涨得比分母（全省）快。<br />
                  全省增速 7% 就是分母增速 → 中部地区增速 <b>&gt; 7%</b>。<br />
                  <span className="correct">答案：C. 高于 7%</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>9. 比重差（定量算变化了几个百分点）</h4>
            <Callout variant="formula">
              <div className="formula">比重差 = (基期部分 ÷ 现期整体) × (R₂ − R₁)</div>
              口诀：<b>今年的整体分之去年的部分，乘以增长率之差。</b>
            </Callout>
            <Callout variant="key">
              <b>秒杀计：|比重差| &lt; |增速差|</b> —— 比重差的绝对值一定<b>小于</b>增长率之差的绝对值。
              先算出增速差，就能立刻排掉所有不小于它的选项。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 9 · 比重差（定量 + 秒杀）</div>
              <ExampleBody>
                <ExampleQuestion>
                  2023 年某省高新技术产品出口额 1800 亿元，占全省出口总额的 36%。全省出口总额增长 10%，高新技术产品出口额增长 15%。
                  问 2023 年高新技术产品出口额占全省出口总额的比重比上年变化了多少个百分点。
                </ExampleQuestion>
                <ExampleOptions><span>A. 上升 1.2</span><span>B. 上升 1.5</span><span>C. 上升 1.8</span><span>D. 上升 2.0</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">秒杀</span>增速差 = 15% − 10% = 5 个百分点 → |比重差| &lt; 5，四个选项都满足，只能排除「≥5」的错项。<br />
                  <span className="step-label">计算</span>现期整体 = 1800 ÷ 36% = 5000 亿元；基期部分 = 1800 ÷ 1.15 ≈ 1565.2。<br />
                  比重差 = (1565.2 ÷ 5000) × (15% − 10%) = 0.313 × 5% ≈ <b>1.57</b> 个百分点。<br />
                  <span className="correct">答案：B. 上升 1.5 个百分点</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>10. 比重差 vs 比值差 vs 比值增长率（最容易混的三兄弟）</h4>
            <div className="tw">
              <DataTable>
                <tr><th>对比项</th><th>比重差</th><th>比值差</th><th>比值增长率</th></tr>
                <tr><td>分子分母单位</td><td>相同</td><td>一般不同</td><td>一般不同</td></tr>
                <tr><td>选项单位</td><td>百分点</td><td>实际量（元 / 人、元 / 吨）</td><td>%</td></tr>
                <tr><td>问法特征</td><td>「…比重，与上年相比」</td><td>「人均收入比上年增加多少元」</td><td>「平均…的增长率」</td></tr>
                <tr><td>公式</td><td>(A基÷B现) × (R₂−R₁)</td><td>(A基÷B现) × (R₁−R₂)</td><td>(R₁−R₂) ÷ (1+R₂)</td></tr>
                <tr><td>能否秒杀</td><td><b>✅ |比重差| &lt; |增速差|</b></td><td>❌ 需代入算</td><td>❌ 需代入算</td></tr>
              </DataTable>
            </div>
            <Callout variant="warn">
              核心区别：比重差和比值差<b>公式形式相同</b>，但比重差的分子分母<b>单位相同</b>（所以能秒杀）；
              比值差单位不同（不能秒杀）。比值增长率求的是「<b>增速</b>」而不是「<b>差值</b>」。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 10 · 比值差（注意不可秒杀）</div>
              <ExampleBody>
                <ExampleQuestion>
                  2023 年某市城镇居民人均可支配收入 55000 元，增长 6.5%；城镇常住人口 800 万人，增长 2.1%。
                  问 2023 年该市城镇居民人均可支配收入比上年增加了多少元。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 选项单位是「元」→ 这是<b>比值差</b>（若问「增长率」才是比值增长率）。<br />
                  公式：比值差 = 基期分子 ÷ 现期分母 × (R₁ − R₂)<br />
                  = 55000 ÷ 1.065 × (6.5% − 2.1%) = 51643 × 4.4% ≈ <b>2272</b> 元。<br />
                  验证：基期人均 = 55000 × 1.021 ÷ 1.065 ≈ 52728 → 差 = 55000 − 52728 = 2272 ✓<br />
                  <span className="correct">答案：约 2272 元</span>
                  <div className="ex-note">易错：直接用「现期平均 × 增速差」= 55000 × 4.4% = 2420 元 —— 偏大，老师用的是<b>基期量</b>。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
