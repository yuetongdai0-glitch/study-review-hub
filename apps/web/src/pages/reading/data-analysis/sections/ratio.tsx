import type { ReactElement } from 'react'
import { Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 十一、平均倍数类（平均数 · 倍数 · 年均）
 *
 * @returns 该节正文。
 */
export default function S12(): ReactElement {
  return (
    <>
      <div className="section-lead">
              这一块是第八讲（平均数）、第九讲（倍数、年均增长量、年均增长率）的合并。
              年均增长率是资料分析里最「难」的一个点，但<b>考法单一、记住几个倍数尺就能秒</b>。
            </div>
      
            <h4>1. 平均数 · 7 种考法</h4>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">题型</th><th>问法</th><th>方法</th></tr>
                <tr><td className="nowrap">① 求单个平均数</td><td>「平均每月…」「人均…」</td><td>总数 ÷ 个数；时间平均数注意闰年 366 天、季度个数、大小月</td></tr>
                <tr><td className="nowrap">② 两个平均数之差</td><td>「平均…比上年高/低多少」</td><td>即比值差：基期分子 ÷ 现期分母 × (R₁−R₂)，<b>不可秒杀</b></td></tr>
                <tr><td className="nowrap">③ 两个平均数之比</td><td>「A 的平均是 B 的平均的多少倍」</td><td>(A/B) ÷ (C/D) = AD/BC（两边除中间）</td></tr>
                <tr><td className="nowrap">④ 平均数增长率</td><td>「平均…的增长率」</td><td>即比值增长率：(R₁−R₂) ÷ (1+R₂)</td></tr>
                <tr><td className="nowrap">⑤ 基期平均数</td><td>「去年的平均…」</td><td>同比重：现期平均数 × (1+R分母) ÷ (1+R分子)</td></tr>
                <tr><td className="nowrap">⑥ 平均数变化趋势</td><td>「平均…与上年相比上升/下降」</td><td>同比重趋势：只比分子 R₁ 与分母 R₂ 的大小</td></tr>
                <tr><td className="nowrap">⑦ 混合平均数</td><td>「全国人均…」「全班平均分…」</td><td>整体平均必在两部分平均之间，且靠近量大的一侧（盐水思想）</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 1 · 平均数增长率（第④种）</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某省粮食总产量 3500 万吨，同比增长 3.6%；粮食播种面积 5000 万亩，同比增长 1.2%。问 2023 年该省粮食亩产同比增长百分之多少。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 亩产 = 总产量 ÷ 面积 → 比值增长率。<br />
                  R₁ = 分子（产量）增速 = 3.6%，R₂ = 分母（面积）增速 = 1.2%。<br />
                  R = (3.6% − 1.2%) ÷ (1 + 1.2%) = 2.4% ÷ 1.012 ≈ <b>2.4%</b>。<br />
                  <span className="correct">答案：约 2.4%</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>2. 平均数的识别与速算</h4>
            <Callout variant="key">
              <b>识别关键词：</b>「均」「每」「单位」「人均」「亩产」「日均」→ 一律是除法，<b>「均前每后作分母」（后除前）</b>。<br />
              <b>速算公式：</b>(A/B) ÷ (C/D) = AD / BC ——「两边除中间」，先约分再算。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 2 · 两个平均数之比（AD/BC）</div>
              <ExampleBody>
                <ExampleQuestion>甲市 GDP 1.2 万亿元、常住人口 800 万人；乙市 GDP 0.6 万亿元、常住人口 500 万人。问甲市人均 GDP 是乙市的多少倍。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 用「两边除中间」：(12000/800) ÷ (6000/500) = (12000 × 500) ÷ (800 × 6000) = 6000000 / 4800000 = <b>1.25</b> 倍。<br />
                  直接验证：甲人均 = 12000 ÷ 800 = 15 万元；乙人均 = 6000 ÷ 500 = 12 万元；15 ÷ 12 = 1.25 ✓<br />
                  <span className="correct">答案：1.25 倍</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 3 · 基期平均数（第⑤种）</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某企业总产值 8000 万元（增长 10%），员工人数 200 人（增长 5%）。求 2022 年该企业人均产值。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 基期平均数 = 现期平均数 × (1 + R分母) ÷ (1 + R分子)。<br />
                  现期人均 = 8000 ÷ 200 = 40 万元/人。<br />
                  基期人均 = 40 × (1 + 5%) ÷ (1 + 10%) = 40 × 1.05 ÷ 1.10 ≈ <b>38.2</b> 万元/人。<br />
                  合理性：分子（产值）涨得比人数快 → 去年人均应该更低 ✓<br />
                  <span className="correct">答案：约 38.2 万元/人</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 4 · 平均数变化趋势（第⑥种）</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某市居民总收入增长 6.5%，常住人口增长 2.1%。问 2023 年该市居民人均可支配收入与上年相比是上升还是下降。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 人均收入 = 总收入 ÷ 人口 → 分子增速 6.5%，分母增速 2.1%。<br />
                  6.5% &gt; 2.1% → 分子涨得快 → 人均收入<b>上升</b>。<br />
                  <span className="correct">答案：上升 ⬆️</span>
                  <div className="ex-note">纯定性，一秒出答案；只要「总收入增速 &gt; 人口增速」人均就是上升的。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 5 · 混合平均数（第⑦种，盐水）</div>
              <ExampleBody>
                <ExampleQuestion>2023 年全国居民人均可支配收入增长 6.5%，其中城镇居民人均可支配收入增长 5.5%，农村居民人均可支配收入增长 8.0%。判断城镇人口与农村人口哪个更多。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 全国人均 = 城镇、农村两部分混合 → 盐水。<br />
                  6.5% 落在 5.5% 与 8.0% 之间 ✓；它<b>更靠近 5.5%（城镇）</b> → 城镇的量更大 → <b>城镇人口更多</b>。<br />
                  用十字交叉验算：城镇 : 农村 = (6.5−8.0) : (5.5−6.5) = 1.5 : 1.0 = 3 : 2 ✓ 城镇确实更多。<br />
                  <span className="correct">答案：城镇人口更多</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>3. 倍数：是几倍 vs 多几倍</h4>
            <Callout variant="formula">
              <div className="formula">A 是 B 的多少倍 = A ÷ B　　A 比 B 多多少倍 = (A ÷ B) − 1</div>
              <div className="formula">倍数 = 增长率 + 1（1 倍 = 100%）</div>
              例：增长了 1.5 倍 = 增长率 150% = 是原来的 2.5 倍。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 6 · 是几倍 / 多几倍</div>
              <ExampleBody>
                <ExampleQuestion>2023 年 A 省 GDP 60000 亿元，B 省 GDP 15000 亿元。问：① A 省是 B 省的多少倍？② A 省比 B 省多多少倍？</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 是几倍 = 60000 ÷ 15000 = <b>4 倍</b>；<br />
                  ② 多几倍 = 4 − 1 = <b>3 倍</b>。<br />
                  关系：多 N 倍 = 是 (N+1) 倍；增长率 = 多几倍 = 是几倍 − 1。<br />
                  <span className="correct">答案：① 4 倍　② 3 倍</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>4. 倍数的 5 种题型</h4>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">题型</th><th>公式</th><th>说明</th></tr>
                <tr><td className="nowrap">现期倍数</td><td>A ÷ B</td><td>直接除</td></tr>
                <tr><td className="nowrap">基期倍数</td><td>(A ÷ B) × (1+R₁) ÷ (1+R₂)</td><td>与基期比重同一套路：调转两个增速</td></tr>
                <tr><td className="nowrap">两个比值的倍数</td><td>(A/B) ÷ (C/D) = AD / BC</td><td>两边除中间</td></tr>
                <tr><td className="nowrap">比值倍数</td><td>1 + 比值增长率</td><td>由比值增长率转过来</td></tr>
                <tr><td className="nowrap">间隔倍数</td><td>1 + 间隔增长率</td><td>由间隔增长率转过来</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 7 · 基期倍数</div>
              <ExampleBody>
                <ExampleQuestion>2023 年甲市财政收入 1500 亿元（增长 12%），乙市财政收入 900 亿元（增长 20%）。求 2022 年甲市财政收入是乙市的多少倍。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 先求基期：甲 = 1500 ÷ 1.12 ≈ 1339.3 亿元；乙 = 900 ÷ 1.20 = 750 亿元。<br />
                  基期倍数 = 1339.3 ÷ 750 ≈ <b>1.79</b> 倍。<br />
                  套公式验证：(1500/900) × (1.20/1.12) = 1.667 × 1.0714 = 1.786 ✓<br />
                  <span className="correct">答案：约 1.79 倍</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>5. 翻番与成数</h4>
            <Callout variant="formula">
              <div className="formula">翻一番 = 变成 2 倍　→　翻 n 番 = 变成 2ⁿ 倍</div>
              对照：翻 1 番 = 2 倍，翻 2 番 = 4 倍，翻 3 番 = 8 倍，翻 4 番 = 16 倍。<br />
              成数：一成 = 10%，二成 = 20%……「增长三成」= 增长率 30%。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 8 · 翻番</div>
              <ExampleBody>
                <ExampleQuestion>某市 2015 年 GDP 2000 亿元，2023 年 16000 亿元。问 2023 年 GDP 与 2015 年相比翻了几番？</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 倍数 = 16000 ÷ 2000 = 8 倍。<br />
                  8 = 2³ → 翻了 <b>3 番</b>。<br />
                  <span className="correct">答案：翻了 3 番</span>
                  <div className="ex-note">90% 的考生会先算年均增长率再试 —— 其实只要算「倍数」，再对照 2ⁿ 即可。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>6. 年均增长量（注意「基期要推」）</h4>
            <Callout variant="formula">
              <div className="formula">年均增长量 = (末期值 − 初期值) ÷ n　　n = 年份差</div>
            </Callout>
            <div className="tw">
              <DataTable>
                <tr><th>问法</th><th>基期</th><th>算法</th></tr>
                <tr><td>「十三五」（2016~2020）时期年均增长量</td><td><b>要推</b></td><td>(2020 年 − 2015 年) ÷ 5</td></tr>
                <tr><td>「2016 年到 2020 年这五年」年均增长量</td><td><b>要推</b></td><td>(2020 年 − 2015 年) ÷ 5</td></tr>
                <tr><td>图表有第一年（2015），问题从第二年（2016~2020）问起</td><td><b>要推</b></td><td>(2020 年 − 2015 年) ÷ 5</td></tr>
                <tr><td>图表就是 2015~2020，问题也是 2015~2020 年均增长量</td><td>不推</td><td>(2020 年 − 2015 年) ÷ 5</td></tr>
              </DataTable>
            </div>
            <Callout variant="warn">
              <b>为什么「十三五」要往前推一年？</b>因为「十三五」指的是 2016、2017、2018、2019、2020 这五年的平均增量，
              而求 2016 年的增量必然要用 <b>2015 年</b>做基期。所以区间写 2016~2020、基期却取 2015，<b>n 仍然是 5</b>。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 9 · 年均增长量｜2024 江苏</div>
              <ExampleBody>
                <ExampleQuestion>
                  我国集成电路出口额：2015 年 691 亿美元、2016 年 610 亿美元、2017 年 669 亿美元、2018 年 846 亿美元、
                  2019 年 1016 亿美元、2020 年 1166 亿美元。问「十三五」时期我国集成电路出口额的年均增量是：
                </ExampleQuestion>
                <ExampleOptions><span>A. 79 亿美元</span><span>B. 95 亿美元</span><span>C. 111 亿美元</span><span>D. 139 亿美元</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 「十三五」= 2016~2020，基期<b>要往前推一年</b> → 用 2015 与 2020 两个值。<br />
                  年均增量 = (1166 − 691) ÷ 5 = 475 ÷ 5 = <b>95</b> 亿美元。<br />
                  <span className="correct">答案：B. 95 亿美元</span>
                  <div className="ex-note">如果错用 (1166 − 610) ÷ 4 = 139，正好掉进 D 选项的坑里。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>7. 年均增长率 ① 公式与必背数字</h4>
            <Callout variant="formula">
              <div className="formula">(1 + r)ⁿ = 末期 ÷ 基期　→　r = (末期÷基期)^(1/n) − 1</div>
              <b>必须背下来的四个数：</b>1.05⁴ = 1.216　1.1⁴ = 1.46　1.15⁴ = 1.75　1.2⁴ = 2.07（中间数字可平均分段）
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 10 · 年均增长率（n 值陷阱）</div>
              <ExampleBody>
                <ExampleQuestion>某市 2018 年 GDP 8000 亿元，2023 年 12000 亿元。求 2018~2023 年 GDP 的年均增长率。</ExampleQuestion>
                <ExampleOptions><span>A. 8.4%</span><span>B. 8.9%</span><span>C. 9.5%</span><span>D. 10.7%</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">①</span>定 n：2018 → 2023，n = 2023 − 2018 = <b>5</b>（不是 6！）；<br />
                  <span className="step-label">②</span>(1+r)⁵ = 12000 ÷ 8000 = 1.5；<br />
                  <span className="step-label">③</span>试 A（8.4%）：1.084² ≈ 1.175，1.084⁴ ≈ 1.381，×1.084 ≈ 1.497 ≈ 1.5 ✓<br />
                  <span className="correct">答案：A. 8.4%</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>8. 年均增长率 ② 倍数尺（格尺法：选项不同，打法不同）</h4>
            <div className="tw">
              <DataTable>
                <tr><th>选项情况</th><th>打法</th></tr>
                <tr><td>选项较松（5% / 10% / 15% / 20%）</td><td>直接代入验证：先算 (末期 ÷ 基期)，再拿选项去试</td></tr>
                <tr><td>选项稍近（6.1% / 6.9%）</td><td><b>格尺法</b>：背好常用「倍数尺」，直接拿 (末期 ÷ 基期) 去比对</td></tr>
                <tr><td>选项极其近（1.7% / 1.8%）</td><td>用近似式 末期÷基期 ≈ 1 + n·r 反推（反推出的 r 偏大，是<b>上限</b>）</td></tr>
              </DataTable>
            </div>
            <Callout variant="formula">
              <div className="formula">倍数尺　n = 4：(1.05)⁴ = 1.22　(1.10)⁴ = 1.46　(1.15)⁴ = 1.75　(1.20)⁴ = 2.07</div>
              <div className="formula">倍数尺　n = 5：(1.08)⁵ = 1.47　(1.10)⁵ = 1.61　(1.15)⁵ = 2.01</div>
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 11 · 格尺法（n = 4）｜2021 广东</div>
              <ExampleBody>
                <ExampleQuestion>2016 年 G 省社会消费品零售总额 3.32 万亿元，2020 年 4.02 万亿元。求 2016~2020 年该省社零总额年均增长率约为：</ExampleQuestion>
                <ExampleOptions><span>A. 2%</span><span>B. 5%</span><span>C. 8%</span><span>D. 11%</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> n = 2020 − 2016 = 4；倍数 = 4.02 ÷ 3.32 ≈ <b>1.21</b>。<br />
                  查 n = 4 的倍数尺：(1.05)⁴ = 1.22 ≈ 1.21 → r ≈ <b>5%</b>。<br />
                  <span className="correct">答案：B. 5%</span>
                  <div className="ex-note">1.21 落在 1.22 和 1.46 之间，明显更靠近 1.22，不用再试其他选项。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 12 · 格尺法（n = 4、倍数正好落在尺上）</div>
              <ExampleBody>
                <ExampleQuestion>某市 2019 年快递业务收入 500 亿元，2023 年 875 亿元。求 2019~2023 年该市快递业务收入的年均增长率。</ExampleQuestion>
                <ExampleOptions><span>A. 13%</span><span>B. 15%</span><span>C. 17%</span><span>D. 19%</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> n = 2023 − 2019 = 4；倍数 = 875 ÷ 500 = <b>1.75</b>。<br />
                  查 n = 4 的倍数尺：(1.15)⁴ = 1.75 → r = <b>15%</b>。<br />
                  验证：500 × 1.15⁴ = 500 × 1.749 ≈ 874.5 ≈ 875 ✓<br />
                  <span className="correct">答案：B. 15%</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>9. 年均增长率 ③ 近似式判定范围 &amp; 与间隔增长率结合</h4>
            <Callout variant="formula">
              <div className="formula">年均增长率极小时：末期÷基期 ≥ 1 + n·r　→　r ≤ (末期÷基期 − 1) ÷ n</div>
              这个 r 是<b>上限</b>（偏大），用来在「极其接近」的选项里做排除；也可以代入选项用<b>间隔增长率</b>正向验证。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 13 · 用上限排除极近选项｜2023 深圳市考</div>
              <ExampleBody>
                <ExampleQuestion>2019 年珠江口大型底栖生物多样性指数 1.61，2021 年 2.18。求 2019~2021 年该指数年均增长：</ExampleQuestion>
                <ExampleOptions><span>A. 16.4%</span><span>B. 17.7%</span><span>C. 18.1%</span><span>D. 35.3%</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> n = 2 → (1+R)² = 2.18 ÷ 1.61 ≈ <b>1.354</b>。<br />
                  <span className="step-label">方法一（间隔增长率正向验）</span>若 R = 17.7%，两年合计 = 17.7% + 17.7% + 3.1% = 38.5% &gt; 35.4% → 说明 R 应<b>小于</b> 17.7% → 选 A。<br />
                  <span className="step-label">方法二（上限排除）</span>1.354 &lt; 1 + 2R → R &lt; 17.7% → 同样只能选 A。<br />
                  <span className="correct">答案：A. 16.4%</span>（精确 16.36%）
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 14 · 年均增长率与间隔增长率结合</div>
              <ExampleBody>
                <ExampleQuestion>
                  某市 2019 年快递业务量 500 亿件，2019~2023 年年均增长 15%；2023 年同比增长 10%。求 2022 年该市快递业务量。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">①</span>先用年均增长率求 2023 年：(1.15)⁴ = 1.75 → 2023 年 = 500 × 1.75 = 875 亿件；<br />
                  <span className="step-label">②</span>再用 2023 年的同比增速倒推 2022 年：875 ÷ 1.1 ≈ <b>795.5</b> 亿件。<br />
                  验证：795.5 × 1.1 = 875 ✓<br />
                  <span className="correct">答案：约 796 亿件</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>10. 假设年均增速相同求后期</h4>
            <SubPoint>
              题干说「若继续保持相同的年均增速」→ 直接用 (1+r)ᵐ 往后推，m 是<b>后期与现期之间的年份差</b>。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 15 · 假设年均增速相同求后期</div>
              <ExampleBody>
                <ExampleQuestion>接上题：若 2023 年以后该市快递业务量仍按 15% 年均增长，求 2026 年该市快递业务量。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 2023 → 2026 共 3 年，直接用 2023 年的量乘 (1.15)³：<br />
                  875 × 1.15³ = 875 × 1.5209 ≈ <b>1331</b> 亿件。<br />
                  <span className="correct">答案：约 1331 亿件</span>
                  <div className="ex-note">也可以一步到位：500 × (1.15)⁷ = 500 × 2.66 ≈ 1330 亿件，结果一致。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
