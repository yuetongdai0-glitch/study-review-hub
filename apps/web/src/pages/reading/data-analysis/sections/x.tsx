import type { ReactElement } from 'react'
import { Callout, Example, ExampleAnswer, ExampleBody, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 七、增长量 X
 *
 * @returns 该节正文。
 */
export default function S8(): ReactElement {
  return (
    <>
      <div className="section-lead">
              增长量 X 一共 <b>3 种考法</b>：一般的增量、两期增长量之比（倍数）、各部分增量相加。
              另外还有一个几乎年年出现的「首年增量」陷阱，单列一条。
            </div>
      
            <h4>X ① 一般增长量</h4>
            <Callout variant="formula">
              <div className="formula">X = A × R = B − A = B × R ÷ (1 + R)</div>
              已知 B、R 求 X → 用 415 或假设分配；已知 B、A 求 X → 直接相减。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 1 · 一般增长量｜2022 天津</div>
              <ExampleBody>
                <ExampleQuestion>
                  2021 年 1~9 月，我国机床工具出口额 137.4 亿美元，同比增长 40.8%；其中对美国出口 17.5 亿美元，同比增长 27.4%。
                  问 2021 年 1~9 月我国机床工具对美国出口额同比约增长多少亿美元。
                </ExampleQuestion>
                <ExampleOptions><span>A. 1.9</span><span>B. 2.3</span><span>C. 3.1</span><span>D. 3.8</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 求增长量 X，B = 17.5，R = 27.4% ≈ 25% = 1/4（<b>估小</b>）。<br />
                  份数比 4 : 1 : 5 → 一份量 = 17.5 ÷ 5 = 3.5 → X′ = 3.5。<br />
                  「估小则一份变小」→ 真实值要比 3.5 <b>大</b>一点 → 选 D。<br />
                  精确 X = 17.5 × 0.274 ÷ 1.274 ≈ 3.76 ✓<br />
                  <span className="correct">答案：D. 3.8 亿美元</span>
                  <div className="ex-note">注意问的是「出口」不是「进口」，单位是「额」不是「量」——题干这两个词最容易看错。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>X ② 两期增长量之比（倍数）</h4>
            <SubPoint>
              题目给两组「现期 + 基期」或两组「现期 + 增速」，问「A 的增量是 B 的增量的多少倍 / 几倍」。
              <b>分别把两个增量算出来再相除</b>即可。当两个 R 相差不大（10 个百分点以内）时，可用近似：
              <code>增量倍数 ≈ (A₁ ÷ A₂) × (R₁ ÷ R₂)</code>。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 2 · 两期增长量倍数｜2024 国考</div>
              <ExampleBody>
                <ExampleQuestion>
                  蜂窝物联网终端用户数：2018 年 6.71 亿户、2019 年 10.28 亿户；移动电话用户数：2018 年 15.66 亿户、2019 年 16.01 亿户。
                  问 2019 年蜂窝物联网终端用户数同比增量约是移动电话用户数同比增量的多少倍。
                </ExampleQuestion>
                <ExampleOptions><span>A. 7</span><span>B. 10</span><span>C. 13</span><span>D. 16</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 两个都是「现期 − 基期」，直接作差：<br />
                  X物联网 = 10.28 − 6.71 = 3.57 亿户；X移动电话 = 16.01 − 15.66 = 0.35 亿户。<br />
                  倍数 = 3.57 ÷ 0.35 ≈ <b>10.2</b>。<br />
                  <span className="correct">答案：B. 10</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 3 · 两期增长量倍数（要先用 415）｜2023 浙江</div>
              <ExampleBody>
                <ExampleQuestion>
                  2021 年上半年 S 市批发和零售业零售额 8287.13 亿元，同比增长 28.4%；住宿和餐饮业零售额 761.31 亿元，同比增长 54.0%。
                  问批发和零售业零售额同比增量约是住宿和餐饮业的多少倍。
                </ExampleQuestion>
                <ExampleOptions><span>A. 3</span><span>B. 5</span><span>C. 7</span><span>D. 9</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 两个增量都要自己算：<br />
                  批发零售：28.4% ≈ 2/7 → 份数 7 : 2 : 9 → 一份 = 8287 ÷ 9 ≈ 920.8 → X ≈ 2 × 920.8 = <b>1841.6</b>；<br />
                  住宿餐饮：54% ≈ 1/2 → 份数 2 : 1 : 3 → 一份 = 761.31 ÷ 3 ≈ 253.8 → X ≈ <b>253.8</b>；<br />
                  倍数 = 1841.6 ÷ 253.8 ≈ <b>7.3</b> → 选 C。<br />
                  <span className="correct">答案：C. 7</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>X ③ X = X₁ + X₂ + X₃…（部分增量相加）</h4>
            <SubPoint>
              整体 = 各部分之和，所以 <b>整体增量 = 各部分增量之和</b>。
              题干给了整体和其中几个部分时，用<b>减法</b>反推剩下的那部分：
              <code>X剩余 = X整体 − (X₁ + X₂ + …)</code>。注意<b>负增量要带着负号参与相加</b>。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 4 · 部分增量相加（减法）｜2021 下四川</div>
              <ExampleBody>
                <ExampleQuestion>
                  2016 年全国棉花产量 534.3 万吨，比 2015 年减产 26.0 万吨。其中：黄河流域减产 10.0 万吨，
                  长江流域减产 23.0 万吨，新疆增产 9.1 万吨。
                  问黄河流域、长江流域和新疆三地之外的产棉地区棉花产量比上年：
                </ExampleQuestion>
                <ExampleOptions><span>A. 减少 6.8 万吨</span><span>B. 减少 2.1 万吨</span><span>C. 增加 2.1 万吨</span><span>D. 增加 6.8 万吨</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 整体增量 −26.0 = X黄 + X长 + X新 + X其他：<br />
                  X其他 = −26.0 − (−10.0 − 23.0 + 9.1) = −26.0 − (−23.9) = <b>−2.1</b> 万吨。<br />
                  即「三地之外」减少 2.1 万吨。<br />
                  <span className="correct">答案：B. 减少 2.1 万吨</span>
                  <div className="ex-note">三个已知增量里有两个是负的，符号写错就全反了。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 5 · 部分增量相加｜2018 事业单位</div>
              <ExampleBody>
                <ExampleQuestion>
                  2017 年末我国网民规模 7.72 亿人，全年新增网民 4074 万人；同期手机网民 7.53 亿人，较上年末增加 5734 万人。
                  问 2017 年末我国网民中，非手机网民的人数较上年同期：
                </ExampleQuestion>
                <ExampleOptions><span>A. 减少不到 2000 万</span><span>B. 减少 2000 万以上</span><span>C. 增加不到 2000 万</span><span>D. 增加 2000 万以上</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 「网民 = 手机网民 + 非手机网民」→ X非手机 = X总 − X手机。<br />
                  X非手机 = 4074 − 5734 = <b>−1660</b> 万人 → 减少 1660 万人，不到 2000 万。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>X ④ 首年增量（没有上一年数据）</h4>
            <Callout variant="key">
              <b>第十讲原话提醒：</b>材料第一年没有「上一年」的数据，所以<b>首年不能用 X = B − A</b>；
              首年的增量必须用<b>首年自己的量和增长率</b>来求（415 或 X = B×R÷(1+R)）。后面各年才可以相减。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 6 · 首年增量</div>
              <ExampleBody>
                <ExampleQuestion>
                  某省高新技术产品出口额：2017 年 800 亿元（同比增长 12.5%）、2018 年 990 亿元、2019 年 1100 亿元。
                  求：① 2017 年的同比增长量；② 2018 年、2019 年各自的同比增量。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  <span className="step-label">①</span>2017 年没有 2016 年的数据，只能用 415：R = 12.5% = 1/8 → 份数 8 : 1 : 9<br />
                  　 一份量 = 800 ÷ 9 ≈ 88.9 → X ≈ <b>89</b> 亿元（验证 800 × 12.5% ÷ 1.125 ≈ 88.9 ✓）<br />
                  <span className="step-label">②</span>后面各年直接用减法：2018 年 990 − 800 = <b>190</b> 亿元；2019 年 1100 − 990 = <b>110</b> 亿元。<br />
                  <span className="correct">答案：① 约 89 亿元　② 190 亿元、110 亿元</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>X ⑤ 估算增量：R 很小时用 B × R 代替 A × R</h4>
            <SubPoint>
              R 很小（&lt; 5%）时，A 与 B 相差无几，可以直接 <code>X ≈ B × R</code>，不必再除以 (1+R)。
              在做「增量占比 / 增量之比」的题里，这一步能省掉一个除法。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 7 · 用 B×R 估算增量｜2020 国考</div>
              <ExampleBody>
                <ExampleQuestion>
                  2018 年前三季度 S 省社会物流总额 35357.26 亿元，同比增长 6.4%；其中工业品物流总额 16636.15 亿元，同比增长 0.2%。
                  问工业品物流总额同比增量约为同期社会物流总额同比增量的：
                </ExampleQuestion>
                <ExampleOptions><span>A. 超过 30%</span><span>B. 10%～30%</span><span>C. 5%～10%</span><span>D. 不到 5%</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">①</span>工业品增速只有 0.2%，非常小 → X工业品 ≈ B × R = 16636 × 0.2% ≈ <b>33</b> 亿元；<br />
                  <span className="step-label">②</span>社会物流总额用假设分配：35357 × 6.4% ≈ 2263，÷1.064 ≈ <b>2127</b> 亿元；<br />
                  <span className="step-label">③</span>占比 = 33 ÷ 2127 ≈ 1.6% → 不到 5%。<br />
                  <span className="correct">答案：D. 不到 5%</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
