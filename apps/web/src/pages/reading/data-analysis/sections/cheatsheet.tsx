import type { ReactElement } from 'react'
import { DataTable, Example, ExampleAnswer, ExampleBody, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 十五、公式速查总表
 *
 * @returns 该节正文。
 */
export default function S16(): ReactElement {
  return (
    <>
      <h4>1. 五问定位法（总结课原表）</h4>
            <SubPoint>
              每个小问先定位「它在哪一行（考什么量）」「在哪一列（问什么变化）」，公式自然就出来了。
            </SubPoint>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">行 \ 列</th><th className="nowrap">过去</th><th className="nowrap">现在</th><th className="nowrap">相对变化</th><th className="nowrap">绝对变化</th><th className="nowrap">混合</th></tr>
                <tr><td className="nowrap"><b>量</b></td><td>基期 A</td><td>现期 B</td><td>增长率 R<br />间隔 R₁+R₂+R₁R₂</td><td>增量 X<br />X = X₁+X₂+…</td><td>混合增速（盐水）</td></tr>
                <tr><td className="nowrap"><b>比重</b></td><td>基期比重</td><td>现期比重</td><td>比重趋势（定性）</td><td>比重差（定量）</td><td>两部分混合比重</td></tr>
                <tr><td className="nowrap"><b>平均数</b></td><td>基期平均数</td><td>现期平均数</td><td>比值增长率</td><td>比值差</td><td>混合平均数</td></tr>
                <tr><td className="nowrap"><b>倍数</b></td><td>基期倍数</td><td>现期倍数</td><td>倍数 = 增长率 + 1</td><td>倍数 − 倍数</td><td>比值倍数 / 间隔倍数</td></tr>
                <tr><td className="nowrap"><b>其他比值</b></td><td>基期比值</td><td>现期比值</td><td>比值增长率</td><td>比值差</td><td>比值混合</td></tr>
                <tr><td className="nowrap"><b>乘积</b></td><td>a × b（基期）</td><td>a × b（现期）</td><td>乘积增长率 R₁+R₂+R₁R₂</td><td>ab − a′b′</td><td>—</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 1 · 用五问定位法找公式</div>
              <ExampleBody>
                <ExampleQuestion>
                  2023 年某省出口额 2400 亿元（增长 12%），出口量 3000 万吨（增长 5%）。求：
                  ① 2022 年出口额；② 出口单价同比上涨了百分之几；③ 出口单价比上年上升/下降了多少元/吨。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  <span className="step-label">①</span>定位「<b>量</b>行 × <b>过去</b>列」→ 基期 A = 2400 ÷ 1.12 ≈ <b>2143</b> 亿元。<br />
                  <span className="step-label">②</span>单价 = 出口额 ÷ 出口量 → 定位「<b>其他比值</b>行 × <b>相对变化</b>列」→ 比值增长率<br />
                  　 R = (12% − 5%) ÷ (1 + 5%) = 7% ÷ 1.05 ≈ <b>6.7%</b>。<br />
                  <span className="step-label">③</span>同一行 × <b>绝对变化</b>列 → 比值差<br />
                  　 现期单价 = 2400 ÷ 3000 = 0.8 亿元/万吨 = 8000 元/吨；<br />
                  　 比值差 = 8000 ÷ 1.12 × 7% ≈ <b>500</b> 元/吨（上升）。<br />
                  <span className="correct">答案：① 约 2143 亿元　② 约 6.7%　③ 上升约 500 元/吨</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>2. 全公式速查表（30 条）</h4>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">知识点</th><th>公式</th><th className="nowrap">适用场景</th></tr>
                <tr><td className="nowrap">基期量</td><td>A = B ÷ (1+R)</td><td className="nowrap">已知现期和增速</td></tr>
                <tr><td className="nowrap">现期量</td><td>B = A × (1+R)</td><td className="nowrap">已知基期和增速</td></tr>
                <tr><td className="nowrap">增长量</td><td>X = A × R = B − A = B×R÷(1+R)</td><td className="nowrap">求增量</td></tr>
                <tr><td className="nowrap">增长率</td><td>R = X ÷ A</td><td className="nowrap">求增速</td></tr>
                <tr><td className="nowrap">间隔增长率</td><td>R = R₁ + R₂ + R₁R₂</td><td className="nowrap">隔年 / 隔月</td></tr>
                <tr><td className="nowrap">比值增长率</td><td>R = (R₁ − R₂) ÷ (1+R₂)</td><td className="nowrap">平均数、均价、人均</td></tr>
                <tr><td className="nowrap">乘积增长率</td><td>R = R₁ + R₂ + R₁R₂</td><td className="nowrap">总额 = 量 × 价、部分 = 整体 × 占比</td></tr>
                <tr><td className="nowrap">间隔倍数</td><td>1 + 间隔增长率</td><td className="nowrap">隔年倍数</td></tr>
                <tr><td className="nowrap">比值倍数</td><td>1 + 比值增长率</td><td className="nowrap">平均数倍数</td></tr>
                <tr><td className="nowrap">基期比重 / 基期倍数</td><td>现期 × (1+R分母) ÷ (1+R分子)</td><td className="nowrap">求去年占比 / 倍数</td></tr>
                <tr><td className="nowrap">隔级比重</td><td>小占大 = (小÷中) × (中÷大)</td><td className="nowrap">大 → 中 → 小</td></tr>
                <tr><td className="nowrap">部分比重和 / 差</td><td>(部分和 / 部分差) ÷ 整体</td><td className="nowrap">先加减分子再除</td></tr>
                <tr><td className="nowrap">比重趋势</td><td>比 R分子 与 R分母 的大小</td><td className="nowrap">定性判断升降</td></tr>
                <tr><td className="nowrap">比重差</td><td>(基期部分 ÷ 现期整体) × (R₂ − R₁)</td><td className="nowrap">比重变化量</td></tr>
                <tr><td className="nowrap">比重差秒杀</td><td>|比重差| &lt; |增速差|</td><td className="nowrap">快速排除选项</td></tr>
                <tr><td className="nowrap">比值差</td><td>基期分子 ÷ 现期分母 × (R₁ − R₂)</td><td className="nowrap">平均数变化量（不可秒杀）</td></tr>
                <tr><td className="nowrap">拉动增长率</td><td>部分增量 ÷ 整体基期</td><td className="nowrap">拉动几个百分点</td></tr>
                <tr><td className="nowrap">增量贡献率</td><td>部分增量 ÷ 整体增量</td><td className="nowrap">贡献率</td></tr>
                <tr><td className="nowrap">年均增长率</td><td>r = (B÷A)^(1/n) − 1，n = 年份差</td><td className="nowrap">年均增速</td></tr>
                <tr><td className="nowrap">年均增长率上限</td><td>B÷A ≥ 1 + n·r → r ≤ (B÷A − 1) ÷ n</td><td className="nowrap">选项极近时排除</td></tr>
                <tr><td className="nowrap">年均增长量</td><td>(末期 − 初期) ÷ n；「十三五」基期往前推一年</td><td className="nowrap">年均增量</td></tr>
                <tr><td className="nowrap">化除为乘</td><td>B ÷ (1+R) ≈ B × (1 − R)</td><td className="nowrap">R &lt; 5%</td></tr>
                <tr><td className="nowrap">415 份数法</td><td>R = 1/n → A:X:B = n : 1 : (n+1)</td><td className="nowrap">R 靠近分数</td></tr>
                <tr><td className="nowrap">除 n+1</td><td>X = B ÷ (n+1)，A = B − X</td><td className="nowrap">一步出增量</td></tr>
                <tr><td className="nowrap">误差修正</td><td>X = X′ × (1 ± R修)，R大则加、R小则减</td><td className="nowrap">R &gt; 10%，选项差 2% 以上</td></tr>
                <tr><td className="nowrap">假设分配</td><td>X = A × R；B = A(1+R)，分两轮求和</td><td className="nowrap">任意 R，尤其 R &lt; 10%</td></tr>
                <tr><td className="nowrap">十字交叉法</td><td>M₁ : M₂ = (r − b) : (a − r)</td><td className="nowrap">盐水求量之比</td></tr>
                <tr><td className="nowrap">线段法</td><td>量之比 = 距离反比</td><td className="nowrap">盐水求第三个 R</td></tr>
                <tr><td className="nowrap">翻番</td><td>现期 ÷ 基期 = 2ⁿ → 翻了 n 番</td><td className="nowrap">翻了几番</td></tr>
                <tr><td className="nowrap">容斥最小交集</td><td>至少 = a + b − 100%</td><td className="nowrap">一定有人 / 至少多少</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 2 · 用速查表 30 秒定位</div>
              <ExampleBody>
                <ExampleQuestion>
                  材料：2023 年某市商品房销售金额 12000 亿元，同比增长 8%；销售面积 1500 万平方米，同比下降 2%。
                  求：① 2022 年销售金额；② 2023 年售价比上年上涨百分之几。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 查表「基期量」：A = 12000 ÷ 1.08 ≈ <b>11111</b> 亿元；<br />
                  ② 售价 = 金额 ÷ 面积 → 查表「比值增长率」：R = (8% − (−2%)) ÷ (1 + (−2%)) = 10% ÷ 0.98 ≈ <b>10.2%</b>。<br />
                  <span className="correct">答案：① 约 11111 亿元　② 约 10.2%</span>
                  <div className="ex-note">注意面积是<b>下降</b> 2%，代入时 R₂ = −2%，符号错了结果会跑偏很多。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
