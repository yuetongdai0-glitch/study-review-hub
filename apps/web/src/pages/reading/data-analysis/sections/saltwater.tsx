import type { ReactElement } from 'react'
import { Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleOptions, ExampleQuestion, PointList, SubPoint } from '@/components/content'

/**
 * 十、盐水类（混合思维）
 *
 * @returns 该节正文。
 */
export default function S11(): ReactElement {
  return (
    <>
      <div className="section-lead">
              「盐水」是花生体系里最好用的一招：把<b>混合增长率</b>当成<b>混合浓度</b>。
              它的三种考法依次是：定性判断（一眼出）、求量之比（十字交叉）、求第三个 R（十字交叉或线段法）。
            </div>
      
            <h4>1. 盐水思想原理</h4>
            <Callout variant="formula">
              <div className="formula">浓度 = 溶质 ÷ 溶液　　⇔　　增长率 = 增长量 ÷ 基期</div>
              两者<b>数学形式完全相同</b>，所以浓度的所有规律（混合在中间、靠近量大的、距离与量成反比）
              都能直接搬到增长率上。平均数 = 总数 ÷ 个数 也是同一形式。
            </Callout>
            <Callout variant="warn">
              <b>必须记住的一点：</b>增长率 R 是针对<b>基期 A</b> 而言的，
              所以十字交叉法里「溶液质量」对应的是<b>基期值</b>（选项差距大时可用现期值近似代替）。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 1 · 认出「这就是盐水」</div>
              <ExampleBody>
                <ExampleQuestion>判断下面四组数据能否用盐水思想：① 进出口总额增速 vs 进口、出口增速；② 1-12 月累计增速 vs 1-11 月、12 月增速；③ 全国人均收入增速 vs 城镇、农村人均收入增速；④ 某市 GDP 增速 vs 该市人口增速。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 判断标准只有一条：<b>「整体 = 部分 A + 部分 B」，且整体与部分都能写成「A = B ÷ C」的比值形式</b>。<br />
                  ① 进出口总额 = 进口 + 出口，且都是「额」→ ✅ 可以；<br />
                  ② 1-12 月累计 = 1-11 月 + 12 月 → ✅ 可以；<br />
                  ③ 全国人均 = 总收入 ÷ 总人数，由城镇、农村两部分合成 → ✅ 可以；<br />
                  ④ GDP 与人口不是「两部分相加」的关系 → ❌ 不能用盐水。<br />
                  <span className="correct">答案：①②③ 可用，④ 不可用</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>2. 适用场景识别（见到这些立刻想盐水）</h4>
            <div className="tw">
              <DataTable>
                <tr><th>类型</th><th>示例</th></tr>
                <tr><td>整体增长率 vs 两部分增长率</td><td>进出口额增速 vs 进口额、出口额增速</td></tr>
                <tr><td>累计增速 vs 两部分增速</td><td>1-12 月增速 vs 1-11 月、12 月增速</td></tr>
                <tr><td>整体时间增速 vs 两部分时间增速</td><td>上半年增速 vs 一季度、二季度增速</td></tr>
                <tr><td>主体相加关系的增速</td><td>出口额增速 vs 贸易顺差、进口额增速（出口 = 顺差 + 进口）</td></tr>
                <tr><td>整体平均数 vs 两部分平均数</td><td>全国人均收入 vs 城镇、农村人均收入</td></tr>
                <tr><td>整体比重 vs 两部分比重</td><td>全国城镇化率 vs 东部、西部城镇化率</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 2 · 场景识别（顺差也是盐水）</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某国出口额同比增长 10%，进口额同比增长 4%，贸易顺差同比增长 30%。这三者能不能构成盐水关系？</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 能。因为 <b>出口额 = 贸易顺差 + 进口额</b>——「整体 = 部分 A + 部分 B」成立。<br />
                  此时整体是「出口额」（10%），两个部分是「顺差」（30%）与「进口额」（4%）。<br />
                  检验：10% 确实在 4% 与 30% 之间 ✓，且更靠近进口额（4%）→ 说明进口额的基期量远大于顺差。<br />
                  <span className="correct">答案：能，整体是出口额</span>
                  <div className="ex-note">这类题的关键是先把「谁 = 谁 + 谁」写出来，整体就是那个被加出来的量。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>3. 定性判断：在中间，不在正中间</h4>
            <PointList>
              <li>① 混合浓度一定<b>在两个部分浓度之间</b>。</li>
              <li>② 混合浓度一定<b>靠近溶液质量（基期值）大的那一边</b>。</li>
              <li>③ 一句话记牢：<b>「在中间，不在正中间」</b>。</li>
              <li>④ 由此得到<b>三浓度排序</b>：部分A &gt; 整体 &gt; 部分B（当部分 A 的量小于 B 时）。</li>
            </PointList>
            <Callout variant="key">
              形象理解：把 300ml 的浓水杯倒进大海，大海的浓度几乎不变 —— <b>质量大的那部分起决定作用</b>。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 3 · 三浓度排序</div>
              <ExampleBody>
                <ExampleQuestion>2023 年上半年某省进出口总额增长 8.5%，其中一季度增长 12.3%，二季度增长 5.1%。问一季度进出口额占上半年的比重与上年同期相比是上升还是下降。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 上半年 = 一季度 + 二季度 → 盐水。<br />
                  验证：整体 8.5% 确实落在 12.3% 与 5.1% 之间 ✓（在中间，不在正中间）<br />
                  一季度的增速 12.3% &gt; 整体增速 8.5% → 分子涨得快 → <b>一季度占上半年比重上升</b>。<br />
                  <span className="correct">答案：上升 ⬆️</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>4. 十字交叉法（已知 3 个 R 求量之比）</h4>
            <Callout variant="formula">
              <div className="formula">部分A（量 M₁，浓度 a）　←→　|r − b| 　这部分属于 M₁</div>
              <div className="formula">部分B（量 M₂，浓度 b）　←→　|a − r| 　这部分属于 M₂</div>
              <div className="formula">M₁ : M₂ = (r − b) : (a − r)</div>
              <b>口诀：求人数，想盐水。</b>交叉相减，差值给对面。
            </Callout>
            <figure className="fig">
              <svg viewBox="0 0 460 190" role="img" aria-label="十字交叉法示意：出口10%与进口4%混合成7%，量之比等于交叉相减的差值之比">
                <text x={20} y={66} fontSize={13} fontWeight="700" fill="#3a5fd9">出口 a = 10%</text>
                <text x={20} y={146} fontSize={13} fontWeight="700" fill="#3a5fd9">进口 b = 4%</text>
                <line x1={122} y1={60} x2={176} y2={96} stroke="#c8d4ec" strokeWidth={1.5} />
                <line x1={122} y1={146} x2={176} y2={110} stroke="#c8d4ec" strokeWidth={1.5} />
                <rect x={176} y={86} width={96} height={34} rx={8} fill="#f5eef8" stroke="#9b59b6" strokeWidth={1.4} />
                <text x={224} y={108} fontSize={13} fontWeight="700" fill="#7d3c98" textAnchor="middle">混合 r = 7%</text>
                <line x1={272} y1={96} x2={300} y2={76} stroke="#2ecc71" strokeWidth={1.5} />
                <line x1={272} y1={110} x2={300} y2={130} stroke="#2ecc71" strokeWidth={1.5} />
                <text x={306} y={72} fontSize={12.5} fill="#1a7a45">r − b = 7 − 4 = 3</text>
                <text x={306} y={90} fontSize={12} fill="#999">→ 记在「出口」这一侧</text>
                <text x={306} y={130} fontSize={12.5} fill="#1a7a45">a − r = 10 − 7 = 3</text>
                <text x={306} y={148} fontSize={12} fill="#999">→ 记在「进口」这一侧</text>
                <line x1={20} y1={164} x2={440} y2={164} stroke="#e0e8ff" strokeWidth={1} />
                <text x={20} y={184} fontSize={13.5} fontWeight="700" fill="#3a5fb9">出口基期 : 进口基期 = (r−b) : (a−r) = 3 : 3 = 1 : 1</text>
              </svg>
              <figcaption>图 8｜十字交叉法：交叉相减，差值之比就是两侧基期量之比</figcaption>
            </figure>
            <Example>
              <div className="example-tag">📖 例题 4 · 十字交叉求量之比（正中间）</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某市出口额增长 10%，进口额增长 4%，进出口总额增长 7%。求出口额与进口额的基期之比。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 交叉相减：<br />
                  r − b = 7% − 4% = 3%（这一侧记给「出口」）；<br />
                  a − r = 10% − 7% = 3%（这一侧记给「进口」）。<br />
                  出口基期 : 进口基期 = 3 : 3 = <b>1 : 1</b>。<br />
                  验证：7% 恰好是 10% 与 4% 的正中间 → 两侧量相等 ✓<br />
                  <span className="correct">答案：1 : 1</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 5 · 十字交叉求量之比（不在正中间）</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某省城镇居民人均消费增长 8%，农村居民人均消费增长 12%，全省人均消费增长 9%。求城镇与农村居民人数的基期之比。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 交叉相减（差值取绝对值）：<br />
                  城镇一侧：r − b = 9% − 12% = −3 → 取 <b>3</b>；<br />
                  农村一侧：a − r = 8% − 9% = −1 → 取 <b>1</b>。<br />
                  城镇 : 农村 = <b>3 : 1</b>。<br />
                  验证：整体 9% 更靠近 8%（城镇）→ 城镇人数更多 ✓；加权检验 (8%×3 + 12%×1) ÷ 4 = 9% ✓<br />
                  <span className="correct">答案：3 : 1</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>5. 线段法（已知 2 个 R + 量之比，求第三个 R）</h4>
            <SubPoint>
              <b>原理：量与距离成反比。</b>操作四步：① 画线标点（混合前写两边、混合后写中间）；
              ② 按比例分段；③ 按量选点；④ 几何计算。
              <br /><b>记忆：</b>量大 → 距离短（靠得近）；量小 → 距离长（离得远）。
            </SubPoint>
            <figure className="fig">
              <svg viewBox="0 0 460 196" role="img" aria-label="线段法示意：一季度6%与二季度9%，量比45比55，混合点在7.65%">
                <line x1={50} y1={80} x2={404} y2={80} stroke="#c8d4ec" strokeWidth={1.5} />
                <line x1={50} y1={88} x2={50} y2={72} stroke="#4f7cff" strokeWidth={2} />
                <line x1={404} y1={88} x2={404} y2={72} stroke="#4f7cff" strokeWidth={2} />
                <circle cx={242} cy={80} r={6} fill="#9b59b6" />
                <line x1={242} y1={74} x2={242} y2={46} stroke="#9b59b6" strokeWidth={1.2} strokeDasharray="3 3" />
                <text x={50} y={108} fontSize={13} fontWeight="700" fill="#3a5fd9" textAnchor="middle">一季度 6%</text>
                <text x={404} y={108} fontSize={13} fontWeight="700" fill="#3a5fd9" textAnchor="middle">二季度 9%</text>
                <text x={242} y={40} fontSize={13} fontWeight="700" fill="#7d3c98" textAnchor="middle">混合 7.65%</text>
                <text x={146} y={130} fontSize={12} fill="#999" textAnchor="middle">距 6% 有 1.65</text>
                <text x={323} y={130} fontSize={12} fill="#999" textAnchor="middle">距 9% 有 1.35</text>
                <line x1={20} y1={148} x2={440} y2={148} stroke="#e0e8ff" strokeWidth={1} />
                <text x={16} y={170} fontSize={12.5} fill="#1a1a2e">量比 45 : 55 → 距离比取反 = 55 : 45 = 11 : 9</text>
                <text x={16} y={190} fontSize={12.5} fill="#1a1a2e">总距离 3 个百分点分 20 份，距 6% 的那段占 11 份</text>
              </svg>
              <figcaption>图 9｜线段法：量之比与距离之比成反比，按比例定位混合点</figcaption>
            </figure>
            <Example>
              <div className="example-tag">📖 例题 6 · 线段法求混合增速</div>
              <ExampleBody>
                <ExampleQuestion>已知某省一季度 GDP 增长 6%，二季度增长 9%；上半年 GDP 中一季度约占 45%、二季度约占 55%。求上半年 GDP 的增长率。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">①</span>画线标点：6% ──── 混合 ──── 9%；<br />
                  <span className="step-label">②</span>量比 45 : 55 → 距离比取<b>反比</b> = 55 : 45 = <b>11 : 9</b>；<br />
                  <span className="step-label">③</span>总距离 = 9% − 6% = 3 个百分点，分 11 + 9 = 20 份；<br />
                  <span className="step-label">④</span>混合点距 6% 的距离 = 3 × (11/20) = 1.65 → 混合增速 = 6% + 1.65% = <b>7.65%</b>。<br />
                  验证：6% × 0.45 + 9% × 0.55 = 2.7% + 4.95% = 7.65% ✓<br />
                  <span className="correct">答案：约 7.65%（≈7.7%）</span>
                  <div className="ex-note">算完记得回头看一眼：混合值必须落在 6%~9% 之间，且靠近量大的一侧（二季度）——不进区间就说明距离比取反了。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>6. 时间分段的盐水（累计 vs 当期）</h4>
            <SubPoint>
              把 1~7 月分成 1~6 月与 7 月，则 <b>累计量 = 上月累计 + 当月量</b>，同样适用盐水思维：
              累计增速一定在「上月累计增速」与「当月增速」之间。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 7 · 累计 vs 当期</div>
              <ExampleBody>
                <ExampleQuestion>
                  2022 年 1~7 月全社会用电量累计同比增长 3.4%，其中 7 月当月同比增长 6.3%。
                  问 2022 年 1~6 月全社会用电量累计同比增速：
                </ExampleQuestion>
                <ExampleOptions><span>A. 高于 3.4%</span><span>B. 等于 3.4%</span><span>C. 低于 3.4%</span><span>D. 无法判断</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 1~7 月（累计）= 1~6 月（累计）+ 7 月（当月）→ 盐水。<br />
                  混合值 3.4% 必须落在两个部分之间；7 月是 6.3%，<b>高于</b> 3.4% → 1~6 月必须<b>低于</b> 3.4%，才能把整体拉下来到 3.4%。<br />
                  <span className="correct">答案：C. 低于 3.4%</span>
                  <div className="ex-note">第十讲提醒：8 月累计 = 1~8 月，别当成「8 月单月」——这是最常见的看错。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>7. 盐水三大考法总结</h4>
            <div className="tw">
              <DataTable>
                <tr><th>考法</th><th>已知</th><th>方法</th><th>口诀</th></tr>
                <tr><td>定性判断</td><td>2 个 R + 量的大小</td><td>在中间不在正中间</td><td>靠近量大的</td></tr>
                <tr><td>求量之比</td><td>3 个 R</td><td>十字交叉法</td><td>求人数，想盐水</td></tr>
                <tr><td>求另一个 R</td><td>2 个 R + 量之比</td><td>十字交叉法 / 线段法</td><td>画线标点，按比例分段</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 8 · 进出口盐水综合</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某国出口额 2200 亿美元（增长 10%），进口额 1800 亿美元（增长 5%）。求：① 进出口总额的增长率；② 2022 年的贸易顺差。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">①</span>先求基期：出口 2200 ÷ 1.1 = 2000；进口 1800 ÷ 1.05 ≈ 1714。<br />
                  　　进出口基期 = 2000 + 1714 = 3714；增量 = 200 + 86 = 286。<br />
                  　　R = 286 ÷ 3714 ≈ <b>7.7%</b>（落在 5%~10% 之间，且靠近出口侧 ✓）<br />
                  <span className="step-label">②</span>基期顺差 = 基期出口 − 基期进口 = 2000 − 1714 = <b>286</b> 亿美元。<br />
                  <span className="correct">答案：① 约 7.7%　② 约 286 亿美元</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
