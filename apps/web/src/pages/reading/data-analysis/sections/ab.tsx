import type { ReactElement } from 'react'
import { Callout, Example, ExampleAnswer, ExampleBody, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 六、A 与 B（基期 · 现期）
 *
 * @returns 该节正文。
 */
export default function S7(): ReactElement {
  return (
    <>
      <div className="section-lead">
              ABRX 里的「A 和 B」在考场上是两个独立题型：<b>求过去的量（基期 A）</b>和
              <b>推未来的量（现期 B）</b>。基期 4 种考法、现期 3 种考法，全部来自第三讲 2.1 / 2.2。
            </div>
      
            <h4>A ① 一般基期</h4>
            <Callout variant="formula">
              <div className="formula">A = B ÷ (1 + R)</div>
              方法：直除法 / 假设分配法（R &lt; 10% 时首选假设分配）。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 1 · 一般基期｜2024 四川</div>
              <ExampleBody>
                <ExampleQuestion>2022 年全国软件和信息技术服务业规模以上企业累计完成软件业务收入 108126 亿元，同比增长 11.2%。求 2021 年该业务收入约为多少亿元。</ExampleQuestion>
                <ExampleOptions><span>A. 92000</span><span>B. 97200</span><span>C. 101000</span><span>D. 104500</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 已知 B、R 求 A → 假设分配法：<br />
                  取 A₁ = 97000 → X₁ = 97000 × 11.2% ≈ 10864 → B₁ ≈ 107864 → 剩余 262 → A₂ ≈ 236。<br />
                  A ≈ 97000 + 236 = <b>97236</b> 亿元。<br />
                  <span className="correct">答案：B. 约 97200 亿元</span>（精确 108126 ÷ 1.112 ≈ 97236）
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>A ② 间隔基期（隔年基期）</h4>
            <SubPoint>
              求「前年」的量：<b>先用间隔增长率把两个增速合成一个，再当普通基期求</b>。
              <br />R间 = R₁ + R₂ + R₁ × R₂　→　A = B ÷ (1 + R间)
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 2 · 间隔基期</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某市快递业务量 52.5 亿件；2023 年比 2022 年增长 20%，2022 年比 2021 年增长 25%。求 2021 年该市快递业务量。</ExampleQuestion>
                <ExampleOptions><span>A. 33</span><span>B. 35</span><span>C. 38</span><span>D. 42</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">①</span>R间 = 20% + 25% + 20% × 25% = 45% + 5% = <b>50%</b>；<br />
                  <span className="step-label">②</span>A = 52.5 ÷ 1.5 = <b>35</b> 亿件。<br />
                  验证 35 × 1.25 = 43.75 → ×1.2 = 52.5 ✓<br />
                  <span className="correct">答案：B. 35 亿件</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>A ③ 基期和 / 基期差</h4>
            <SubPoint>
              求「两年/两个部分基期之和或之差」→ <b>分别做两次假设分配，再加减</b>。
              没有捷径，但两次分配都是心算，比列两个除法快得多。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 3 · 基期和差</div>
              <ExampleBody>
                <ExampleQuestion>
                  2023 年某省福利彩票销售额 1500 亿元（同比增长 10%），体育彩票销售额 2000 亿元（同比增长 15%）。
                  求：① 2022 年两者销售额之和；② 2022 年两者之差。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 两次假设分配：<br />
                  福利基期 A₁ = 1500 ÷ 1.1 ≈ <b>1364</b>（1364 × 1.1 = 1500.4 ✓）<br />
                  体育基期 A₂ = 2000 ÷ 1.15 ≈ <b>1739</b>（1739 × 1.15 = 1999.9 ✓）<br />
                  ① 和 = 1364 + 1739 = <b>3103</b> 亿元；② 差 = 1739 − 1364 = <b>375</b> 亿元。<br />
                  <span className="correct">答案：约 3103 亿元 / 375 亿元</span>
                  <div className="ex-note">易错点：不能先算现期之和再除一个平均增速——两个部分的增速不同，必须分开求基期。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>A ④ 已知变化情况求基期</h4>
            <Callout variant="formula">
              <div className="formula">已知增长量 X 和增长率 R → A = X ÷ R</div>
              材料只给「比上年增加／减少多少」时，别去找 B，直接用 X ÷ R。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 4 · 已知 X 和 R 求 A</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某省新能源发电量比上年增加 96 亿千瓦时，增长率为 12%。求 2022 年该省新能源发电量。</ExampleQuestion>
                <ExampleOptions><span>A. 720</span><span>B. 800</span><span>C. 880</span><span>D. 960</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> A = X ÷ R = 96 ÷ 12% = <b>800</b> 亿千瓦时。<br />
                  验证 800 × 12% = 96 ✓<br />
                  <span className="correct">答案：B. 800 亿千瓦时</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>B ① 假设增量求后期（列不等式）</h4>
            <SubPoint>
              题干说「若每年增量保持某值」→ 现期 B = A + nX，<b>列不等式解 n</b>，取满足条件的最小整数。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 5 · 假设增量求后期</div>
              <ExampleBody>
                <ExampleQuestion>某市 2023 年 GDP 为 5000 亿元，若未来每年 GDP 增量保持 300 亿元，问哪一年 GDP 首次突破 6000 亿元？</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 设需要 n 年：5000 + 300n ≥ 6000 → 300n ≥ 1000 → n ≥ 3.33 → 取 n = <b>4</b>。<br />
                  2023 + 4 = <b>2027 年</b>（2026 年为 5900 亿元，尚未突破）。<br />
                  <span className="correct">答案：2027 年</span>
                  <div className="ex-note">「首次突破」= 取满足不等式的最小整数 n，不能四舍五入。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>B ② 假设增速求后期（一年一年往后推）</h4>
            <SubPoint>
              题干说「若年均增速保持某值」→ B = A × (1+R)ⁿ。考场上<b>只需要算到选项能区分为止</b>，
              不必算出精确值；问「几年后翻番」时要解不等式 (1+R)ⁿ ≥ 2。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 6 · 假设增速求后期</div>
              <ExampleBody>
                <ExampleQuestion>
                  ① 某市 2023 年快递业务量 1000 亿件，若年均增长 20%，求 2026 年约为多少亿件。
                  ② 若年均增长 10%，问大约几年后快递业务量翻一番。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 2026 − 2023 = 3 年 → 1000 × 1.2³ = 1000 × 1.728 = <b>1728</b> 亿件。<br />
                  ② 要 (1.1)ⁿ ≥ 2：1.1⁷ ≈ 1.949 &lt; 2，1.1⁸ ≈ 2.144 &gt; 2 → <b>约 8 年</b>。<br />
                  <span className="correct">答案：① 约 1728 亿件　② 约 8 年</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>B ③ 名义增速 vs 实际增速（按实际增长率求后期）</h4>
            <Callout variant="formula">
              <div className="formula">基期值 A = B ÷ (1 + R₁)　→　按不变价推后期 = A × (1 + R₂)</div>
              R₁ = 名义增长率，R₂ = 实际增长率。先「剥离价格」再「按实际增速还原」，
              两者之差就是价格因素。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 7 · 名义 vs 实际</div>
              <ExampleBody>
                <ExampleQuestion>
                  2023 年某省居民人均消费支出 30000 元，比上年名义增长 5.0%，剔除价格因素后实际增长 3.0%。
                  求：① 2022 年该省居民人均消费支出；② 2023 年按不变价计算的人均消费支出。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 用名义增速求基期：A = 30000 ÷ 1.05 ≈ <b>28571</b> 元。<br />
                  ② 用实际增速从基期还原（可比价）：28571 × 1.03 ≈ <b>29429</b> 元。<br />
                  名义值 30000 元与可比价 29429 元相差约 571 元，就是价格因素带来的部分。<br />
                  <span className="correct">答案：① 约 28571 元　② 约 29429 元</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
