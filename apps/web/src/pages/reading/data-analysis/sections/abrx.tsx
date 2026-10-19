import type { ReactElement } from 'react'
import { Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleQuestion, PointList } from '@/components/content'

/**
 * 三、ABRX 四量关系（全科总纲）
 *
 * @returns 该节正文。
 */
export default function S4(): ReactElement {
  return (
    <>
      <div className="section-lead">
              资料分析所有的「量」类问题，本质都是 <b>A、B、X、R 四个量里已知两个、求另外两个</b>。
              先把这四个量认准，后面 415、假设分配、八大考点全部是它们的展开。
            </div>
      
            <h4>1. 名词解释：四个量分别是什么</h4>
            <PointList>
              <li><b>基期 A</b>：用来做比较的「基准值」那个时期。<b>与谁相比，谁就是基期。</b></li>
              <li><b>现期 B</b>：相对于基期而言，当前所处的那个时期。</li>
              <li><b>增长量 X</b>：现期与基期之间的<b>绝对差</b>，是一个绝对量，带单位。</li>
              <li><b>增长率 R</b>：现期与基期之间的<b>相对差异</b>，是一个相对量，用 % 表示（增长速度 = 增速 = 增长幅度 = 增幅）。</li>
            </PointList>
            <figure className="fig">
              <svg viewBox="0 0 460 210" role="img" aria-label="ABRX 四量关系图：基期加增长量等于现期，增长率等于增长量除以基期">
                <rect x={34} y={58} width={120} height={52} rx={10} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.5} />
                <text x={94} y={80} fontSize={14} fontWeight="700" fill="#3a5fd9" textAnchor="middle">基期 A</text>
                <text x={94} y={99} fontSize={12} fill="#555" textAnchor="middle">（与谁相比谁是基期）</text>
                <rect x={306} y={58} width={120} height={52} rx={10} fill="#eafaf1" stroke="#2ecc71" strokeWidth={1.5} />
                <text x={366} y={80} fontSize={14} fontWeight="700" fill="#1a7a45" textAnchor="middle">现期 B</text>
                <text x={366} y={99} fontSize={12} fill="#555" textAnchor="middle">（当前时期）</text>
                <line x1={158} y1={84} x2={300} y2={84} stroke="#f39c12" strokeWidth={2} />
                <polygon points="300,84 290,79 290,89" fill="#f39c12" />
                <text x={229} y={74} fontSize={13} fontWeight="700" fill="#c87f0a" textAnchor="middle">X = A × R</text>
                <text x={229} y={104} fontSize={12} fill="#999" textAnchor="middle">增长量（绝对量）</text>
                <line x1={34} y1={150} x2={426} y2={150} stroke="#e0e8ff" strokeWidth={1} />
                <text x={40} y={174} fontSize={13.5} fontWeight="700" fill="#3a5fd9">B = A × (1+R)</text>
                <text x={180} y={174} fontSize={13.5} fontWeight="700" fill="#3a5fd9">A = B ÷ (1+R)</text>
                <text x={330} y={174} fontSize={13.5} fontWeight="700" fill="#3a5fd9">R = X ÷ A</text>
                <text x={40} y={196} fontSize={12.5} fill="#999">四个量知道任意两个，就能求出另外两个 —— 这就是资料分析的「总纲」</text>
              </svg>
              <figcaption>图 2｜ABRX 四量关系：A + X = B，R = X ÷ A，四个量知二求二</figcaption>
            </figure>
            <Example>
              <div className="example-tag">📖 例题 1 · 从材料里认出四个量</div>
              <ExampleBody>
                <ExampleQuestion>
                  2019 年 11 月份，社会消费品零售总额 38094 亿元，比 2018 年 11 月份增长 8.0%。
                  其中，城镇消费品零售额 32345 亿元，比 2018 年 11 月份增长 2355 亿元。
                  请指出这段材料里的基期、现期、增长量、增长率。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 逐句拆：<br />
                  「2019 年 11 月 …… 38094 亿元」→ <b>现期 B = 38094</b>（2019 年 11 月）；<br />
                  「比 2018 年 11 月」→ <b>基期 A 对应 2018 年 11 月</b>（与谁相比谁是基期）；<br />
                  「增长 8.0%」→ 带 % → <b>增长率 R = 8.0%</b>；<br />
                  「增长 2355 亿元」→ 带单位「亿元」→ <b>增长量 X = 2355</b>，此时 32345 亿元是现期 B。<br />
                  <span className="correct">答案：现期 38094 / 32345，基期是 2018 年 11 月，R = 8.0%，X = 2355 亿元</span>
                  <div className="ex-note">判别口诀：带「%」的是 R，带「单位」的是 X，句子主语是 B，「比」后面的时间是 A。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>2. 六种已知组合（考频「4334」）</h4>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">已知</th><th>求</th><th>做法</th><th className="nowrap">出现场合</th></tr>
                <tr><td className="nowrap">A、B</td><td>X、R</td><td>X = B − A；R = X/A（分子小分母大，用拆分法）</td><td className="nowrap">图表型材料</td></tr>
                <tr><td className="nowrap">A、X</td><td>B、R</td><td>B = A + X；R = X/A</td><td className="nowrap">文字材料</td></tr>
                <tr><td className="nowrap">B、X</td><td>A、R</td><td>A = B − X；R = X/A</td><td className="nowrap">文字材料</td></tr>
                <tr><td className="nowrap">B、R</td><td>A、X</td><td><b>用 415 或假设分配</b>（直除也可，但慢）</td><td className="nowrap">最高频</td></tr>
                <tr><td className="nowrap">A、R</td><td>X、B</td><td>X = A × R；B = A + X</td><td className="nowrap">文字材料</td></tr>
                <tr><td className="nowrap">X、R</td><td>A、B</td><td>A = X ÷ R；B = A + X</td><td className="nowrap">特殊情况，记住即可</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 2 · 六种组合各走一遍</div>
              <ExampleBody>
                <ExampleQuestion>
                  某厂产量：① 去年 100 件、今年 120 件，求增量与增速；② 去年 100 件、今年涨了 20 件，求现期与增速；
                  ③ 今年 120 件、比去年涨了 20 件，求去年与增速；④ 今年 120 件、增速 20%，求去年与增量；
                  ⑤ 去年 100 件、增速 20%，求增量与今年；⑥ 增量 20 件、增速 20%，求去年与今年。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① X = 120 − 100 = 20，R = 20/100 = 20%；<br />
                  ② B = 100 + 20 = 120，R = 20/100 = 20%；<br />
                  ③ A = 120 − 20 = 100，R = 20/100 = 20%；<br />
                  ④ R = 20% → 份数 1:5:6 → A = 120 ÷ 6 × 5 = 100，X = 20；<br />
                  ⑤ X = 100 × 20% = 20，B = 120；<br />
                  ⑥ A = X ÷ R = 20 ÷ 20% = 100，B = 120。<br />
                  <span className="correct">答案：六种组合都是「20 件 / 20%」，但入手式完全不同</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>3. 同比与环比（最容易看错的时间口径）</h4>
            <PointList>
              <li><b>同比：</b>和<b>去年同一时期</b>比。如「2024 年一季度同比」= 和 2023 年一季度比。</li>
              <li><b>环比：</b>和<b>上一个相邻统计周期</b>比。如「12 月环比」= 和 11 月比；「二季度环比」= 和一季度比。</li>
              <li><b>易错点：</b>问「某年各季度同比增速」时，<b>每个季度各对各年</b>——一季度与上一年一季度比，四季度与上一年四季度比。</li>
            </PointList>
            <Example>
              <div className="example-tag">📖 例题 3 · 同比与环比</div>
              <ExampleBody>
                <ExampleQuestion>
                  某市 2023 年 11 月社零总额 1000 亿元，2023 年 12 月 1200 亿元，2022 年 12 月 1000 亿元。
                  求 2023 年 12 月的同比增速和环比增速。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 先认清分母是谁：<br />
                  <b>同比</b>：与去年同一时期（2022 年 12 月）比 → 分母 1000 → (1200−1000)/1000 = <b>20%</b>；<br />
                  <b>环比</b>：与上一个相邻周期（2023 年 11 月）比 → 分母 1000 → (1200−1000)/1000 = <b>20%</b>。<br />
                  本题两者恰好都是 20%，但换成不同月份就不等了 —— 一定要看清「和谁比」。<br />
                  <span className="correct">答案：同比 20%，环比 20%</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>4. 倍数与增长率的换算（1 倍 = 100%）</h4>
            <Callout variant="formula">
              <div className="formula">倍数 = 增长率 + 1　　（1 倍 = 100%）</div>
              增长了 1.5 倍 = 增长率 150% = 是原来的 2.5 倍；增长了 2.5 倍 = 增长率 250%。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 4 · 倍数 ⇄ 增长率</div>
              <ExampleBody>
                <ExampleQuestion>① 某地 2023 年 GDP 是 2018 年的 2.5 倍，问六年间增长了百分之几？② 某指标增长率为 180%，问是原来的多少倍？</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 倍数 2.5 → 增长率 = 2.5 − 1 = 1.5 → <b>150%</b>；<br />
                  ② 增长率 180% → 倍数 = 180% + 1 = <b>2.8 倍</b>。<br />
                  <span className="correct">答案：150%、2.8 倍</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>5. 「最值」类问法的三种口径</h4>
            <div className="tw">
              <DataTable>
                <tr><th>题干怎么写</th><th>比什么</th></tr>
                <tr><td>增加（长）<b>最多</b> / 增量最大</td><td>比 <b>增长量 X</b>（绝对值，「多少」）</td></tr>
                <tr><td>增加（长）<b>最快</b> / 增速最高</td><td>比 <b>增长率 R</b> 的实际值（「快慢」）</td></tr>
                <tr><td><b>变化幅度</b>最大</td><td>比增长率 R 的 <b>绝对值 |R|</b></td></tr>
                <tr><td><b>增长幅度</b>最大</td><td>比增长率 R 的 <b>实际值</b></td></tr>
                <tr><td>降幅最大</td><td>只看负值里 R 最小的那个</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 5 · 「最值」口径辨析</div>
              <ExampleBody>
                <ExampleQuestion>四行业产值增长率：农业 +3.2%、工业 +7.5%、建筑业 −2.1%、服务业 +5.8%。① 增长最快的是？② 变化幅度最大的是？③ 降幅最大的是？</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 「增长最快」比 R 实际值 → <b>工业 +7.5%</b>；<br />
                  ② 「变化幅度」比 |R| → 3.2 / 7.5 / 2.1 / 5.8 → <b>工业 7.5%</b>；<br />
                  ③ 「降幅」只看负值 → 只有建筑业为负 → <b>建筑业 −2.1%</b>。<br />
                  <span className="correct">答案：工业、工业、建筑业</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
