import type { ReactElement } from 'react'
import { Callout, Example, ExampleAnswer, ExampleBody, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 八、增长率 R（考法最多的一节）
 *
 * @returns 该节正文。
 */
export default function S9(): ReactElement {
  return (
    <>
      <div className="section-lead">
              R 一共有 <b>8 种考法</b>：一般增长率、间隔增长率（含逆运用、间隔倍数）、比值增长率（含特殊型、比值倍数）、
              乘积增长率（含「部分 = 整体 × 占比」型）。<b>辨认题型靠「写出表达式」</b>——
              写成 A = B ÷ C 就是比值，写成 A = B × C 就是乘积。
            </div>
      
            <h4>R ① 一般增长率</h4>
            <Callout variant="formula">
              <div className="formula">R = X ÷ A　（和谁相比，谁就是分母）</div>
              材料给增量 X 与基期 A，或给现期与增量，直接套公式。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 1 · 一般增长率｜2024 黑龙江</div>
              <ExampleBody>
                <ExampleQuestion>2022 年末全国蜂窝物联网终端用户 18.45 亿户，比上年末增加 4.47 亿户。问 2022 年末全国蜂窝物联网终端用户的同比增速约为：</ExampleQuestion>
                <ExampleOptions><span>A. 24%</span><span>B. 28%</span><span>C. 32%</span><span>D. 36%</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 已知 B、X → 先求基期：A = 18.45 − 4.47 = 13.98 亿户。<br />
                  R = X ÷ A = 4.47 ÷ 13.98 ≈ <b>32.0%</b>。<br />
                  <span className="correct">答案：C. 32%</span>
                  <div className="ex-note">千万不要写成 4.47 ÷ 18.45 = 24.2%（那是拿现期当分母，D 选项就是给这个准备的陷阱）。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>R ② 间隔增长率</h4>
            <SubPoint>
              <b>题型识别：</b>必须出现<b>三个时间点</b>，且三者是「累计」关系（今年比去年、去年比前年）。
              <br /><b>公式：</b>R间 = R₁ + R₂ + R₁ × R₂（R₁ 是今年较去年的增速，R₂ 是去年较前年的增速）。
            </SubPoint>
            <figure className="fig">
              <svg viewBox="0 0 460 190" role="img" aria-label="间隔增长率时间轴：2021到2022增长R2，2022到2023增长R1，2021到2023的间隔增长率为R1+R2+R1R2">
                <line x1={40} y1={96} x2={424} y2={96} stroke="#c8d4ec" strokeWidth={1.5} />
                <line x1={62} y1={104} x2={62} y2={88} stroke="#9b59b6" strokeWidth={1.5} />
                <line x1={236} y1={104} x2={236} y2={88} stroke="#9b59b6" strokeWidth={1.5} />
                <line x1={404} y1={104} x2={404} y2={88} stroke="#9b59b6" strokeWidth={1.5} />
                <text x={62} y={120} fontSize={13} fontWeight="700" fill="#1a1a2e" textAnchor="middle">2021（前年）</text>
                <text x={236} y={120} fontSize={13} fontWeight="700" fill="#1a1a2e" textAnchor="middle">2022（去年）</text>
                <text x={404} y={120} fontSize={13} fontWeight="700" fill="#1a1a2e" textAnchor="middle">2023（今年）</text>
                <text x={149} y={84} fontSize={12.5} fontWeight="700" fill="#3a5fd9" textAnchor="middle">R₂</text>
                <text x={320} y={84} fontSize={12.5} fontWeight="700" fill="#3a5fd9" textAnchor="middle">R₁</text>
                <path d="M62,70 Q236,26 404,70" fill="none" stroke="#c87f0a" strokeWidth={1.8} strokeDasharray="5 4" />
                <text x={233} y={32} fontSize={12.5} fontWeight="700" fill="#c87f0a" textAnchor="middle">R间 = R₁ + R₂ + R₁ × R₂</text>
                <text x={16} y={152} fontSize={12} fill="#999">三项缺一不可：两个增速相加，再加乘积项。</text>
                <text x={16} y={172} fontSize={12} fill="#999">乘积项常是 1~2 个百分点，正是选对选项的关键。</text>
              </svg>
              <figcaption>图 6｜间隔增长率：三个时间点，两个相邻增速合成一个总增速</figcaption>
            </figure>
            <Example>
              <div className="example-tag">📖 例题 2 · 间隔增长率｜2024 四川</div>
              <ExampleBody>
                <ExampleQuestion>2022 年全国软件和信息技术服务业规模以上企业累计完成软件业务收入 108126 亿元，同比增长 11.2%，增速较上年同期回落 6.5 个百分点。问 2022 年该业务收入约比 2020 年增长了：</ExampleQuestion>
                <ExampleOptions><span>A. 16%</span><span>B. 23%</span><span>C. 29%</span><span>D. 31%</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 「回落 6.5 个百分点」→ 2021 年增速 R₂ = 11.2% + 6.5% = <b>17.7%</b>。<br />
                  乘积项 = 11.2% × 17.7% ≈ 2.0%（约 2 个百分点，不能丢）。<br />
                  R间 = 11.2% + 17.7% + 2.0% ≈ <b>30.9%</b>。<br />
                  <span className="correct">答案：D. 31%</span>
                  <div className="ex-note">若只加两个百分点得 28.9%，就会误选 C —— 乘积项正是区分 29% 和 31% 的关键。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>R ③ 间隔增长率逆运用</h4>
            <SubPoint>
              已知 R间 和其中一个增速，反求另一个：<code>R₁ + R₂ + R₁R₂ = R间</code> →
              <code>R₂ = (R间 − R₁) ÷ (1 + R₁)</code>。注意符号——负增长时除法放缩要格外小心。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 3 · 间隔增长率逆运用</div>
              <ExampleBody>
                <ExampleQuestion>某市 2023 年快递业务量比 2021 年增长 44%，2022 年比 2021 年增长 20%。求 2023 年比 2022 年增长百分之几。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 设 2023 年比 2022 年增长 R₂：<br />
                  20% + R₂ + 20% × R₂ = 44% → 1.2 R₂ = 24% → R₂ = 24% ÷ 1.2 = <b>20%</b>。<br />
                  验证：20% + 20% + 20%×20% = 44% ✓<br />
                  <span className="correct">答案：20%</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>R ④ 间隔倍数</h4>
            <Callout variant="formula">
              <div className="formula">间隔倍数 = 1 + 间隔增长率</div>
              问「今年是前年的多少倍」时，先算 R间 再加 1。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 4 · 间隔倍数</div>
              <ExampleBody>
                <ExampleQuestion>某市 2021 年 GDP 为 8000 亿元，2022 年增长 10%，2023 年增长 15%。问 2023 年 GDP 约为 2021 年的多少倍。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> R间 = 10% + 15% + 1.5% = 26.5% → 间隔倍数 = 1 + 26.5% = <b>1.265</b>。<br />
                  直接验证：8000 × 1.1 × 1.15 = 10120 亿元；10120 ÷ 8000 = 1.265 ✓<br />
                  <span className="correct">答案：约 1.27 倍</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>R ⑤ 比值增长率（一般型）</h4>
            <Callout variant="formula">
              <div className="formula">A = B ÷ C（如均价 = 金额 ÷ 数量）→ R = (R₁ − R₂) ÷ (1 + R₂)</div>
              R₁ = 分子（B）的增速，R₂ = 分母（C）的增速。多以「平均数增长率」的形式出现。
            </Callout>
            <SubPoint>
              <b>做题三步：</b>① 识别「均价 / 单位 / 人均 + 增长率」→ ② 写出表达式（后 ÷ 前）→ ③ 标好 R₁、R₂ 代入。
              速算提示：R₁ 与 R₂ 接近时结果趋近 0；负增长注意符号。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 5 · 比值增长率</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某市商品房销售金额增长 15%，销售面积增长 8%。问 2023 年该市商品房均价同比增长百分之多少。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 均价 = 销售金额 ÷ 销售面积 → 比值增长率。<br />
                  R₁ = 分子（金额）增速 = 15%，R₂ = 分母（面积）增速 = 8%。<br />
                  R = (15% − 8%) ÷ (1 + 8%) = 7% ÷ 1.08 ≈ <b>6.5%</b>。<br />
                  合理性验证：分子涨得比分母快 → 均价上升，为正 ✓<br />
                  <span className="correct">答案：约 6.5%</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>R ⑥ 特殊比值增长率（反求分母增速）</h4>
            <SubPoint>
              题目给的是「某比值（占比 / 率）的变化」+「分子的增速」，要求<b>分母的增速</b>——
              这时把比值增长率公式<b>反着用</b>即可：
              <code>比值 = 分子 ÷ 分母</code>，故 <code>R分母 = (R分子 − R比值) ÷ (1 + R比值)</code>。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 6 · 特殊比值增长率｜2014 北京</div>
              <ExampleBody>
                <ExampleQuestion>
                  2012 年建材行业出口交货值约 2250 亿元，同比增长 7.9%；出口商品离岸价格上涨 9.3%。
                  其中建筑卫生陶瓷出口额同比增长 31.5%。若 2012 年建筑卫生陶瓷商品出口价格同比涨幅与建材行业出口商品离岸价格同比涨幅相同，
                  则 2012 年建筑卫生陶瓷商品出口量与上年相比：
                </ExampleQuestion>
                <ExampleOptions><span>A. 下降 1%</span><span>B. 上升 1%</span><span>C. 下降 17%</span><span>D. 上升 20%</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 出口额 = 出口量 × 单价 → 出口量 = 出口额 ÷ 单价 → 比值增长率。<br />
                  R₁ = 分子（出口额）增速 = 31.5%，R₂ = 分母（单价）增速 = 9.3%。<br />
                  R = (31.5% − 9.3%) ÷ (1 + 9.3%) = 22.2% ÷ 1.093 ≈ <b>20.3%</b>。<br />
                  <span className="correct">答案：D. 上升 20%</span>
                  <div className="ex-note">关键在「认出谁是分子谁是分母」：出口量是被求的那个量，它写出来是「出口额 ÷ 单价」。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>R ⑦ 比值倍数</h4>
            <Callout variant="formula">
              <div className="formula">比值倍数 = 1 + 比值增长率；也可直接算 现期比值的倍数 ÷ 基期比值的倍数</div>
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 7 · 比值倍数｜2023 江苏</div>
              <ExampleBody>
                <ExampleQuestion>
                  2021 年我国移动互联网接入流量 2216 亿 GB，是 2012 年的 252 倍；互联网上网人数 10.3 亿人，比 2012 年增长 83.0%。
                  问 2021 年我国互联网上网者人均移动互联网接入流量是 2012 年的多少倍。
                </ExampleQuestion>
                <ExampleOptions><span>A. 105 倍</span><span>B. 114 倍</span><span>C. 126 倍</span><span>D. 138 倍</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 人均流量 = 总流量 ÷ 上网人数 → 比值的倍数。<br />
                  总流量是 2012 年的 252 倍；人数是 2012 年的 1 + 83.0% = 1.83 倍。<br />
                  人均倍数 = 252 ÷ 1.83 ≈ <b>137.7</b> 倍。<br />
                  <span className="correct">答案：D. 138 倍</span>
                  <div className="ex-note">「比值倍数」比「比值增长率」少一步减 1，别把 138 和 137 弄混（问「是多少倍」不减 1）。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>R ⑧ 乘积增长率 · 实际含义式子</h4>
            <Callout variant="formula">
              <div className="formula">A = B × C（如总产量 = 亩产 × 面积）→ R = R₁ + R₂ + R₁ × R₂</div>
              与间隔增长率<b>公式完全相同</b>，只是这里的 R₁、R₂ 是两个「因子」的增速。常见式子：
              总产量 = 亩产 × 面积；销售额 = 单价 × 销量；出口额 = 出口量 × 单价；月产量 = 日均产量 × 天数。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 8 · 乘积增长率（实际含义式子）</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某产品单价上涨 5%，销量增长 12%。求该产品销售额的增长率。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 销售额 = 单价 × 销量 → 乘积增长率。<br />
                  R = 5% + 12% + 5% × 12% = 17% + 0.6% = <b>17.6%</b>。<br />
                  验证：基数 100 → 105 × 112 = 11760 → 增长 17.6% ✓<br />
                  <span className="correct">答案：约 17.6%</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>R ⑨ 乘积增长率 ·「部分 = 整体 × 占比」</h4>
            <SubPoint>
              材料里出现<b>占比图表</b>时，想到「部分 = 整体 × 占比」→ 直接套乘积增长率：
              <code>R部分 = R整体 + R占比 + R整体 × R占比</code>。
              注意<b>占比的增速要自己先算</b>：R占比 = (现期占比 − 基期占比) ÷ 基期占比。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 9 · 部分 = 整体 × 占比</div>
              <ExampleBody>
                <ExampleQuestion>
                  某年全国网上零售额增长 15%；其中实物商品网上零售额占网上零售额的比重由 82% 提高到 84.5%。
                  求实物商品网上零售额的增长率。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 部分 = 整体 × 占比 → 乘积增长率。<br />
                  <span className="step-label">①</span>R占比 = (84.5% − 82%) ÷ 82% = 2.5% ÷ 82% ≈ <b>3.05%</b>；<br />
                  <span className="step-label">②</span>R部分 = 15% + 3.05% + 15% × 3.05% = 18.05% + 0.46% ≈ <b>18.5%</b>。<br />
                  直接验证：整体 100 → 115；基期部分 82，现期部分 115 × 84.5% = 97.18 → R = 97.18/82 − 1 = 18.5% ✓<br />
                  <span className="correct">答案：约 18.5%</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Callout variant="tip">
              <b>快速判别表：</b>看到「均 / 每 / 单位 / 人均 / 亩产」→ <b>比值</b>（R = (R₁−R₂)/(1+R₂)）；
              看到「总 / 合计 / 额 = 量 × 价」或材料给「占比」→ <b>乘积</b>（R = R₁+R₂+R₁R₂）；
              看到三个时间点 → <b>间隔</b>（同乘积公式）。
            </Callout>
    </>
  )
}
