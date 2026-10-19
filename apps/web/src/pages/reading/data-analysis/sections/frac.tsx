import type { ReactElement } from 'react'
import { Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 二、百化分与误差修正
 *
 * @returns 该节正文。
 */
export default function S3(): ReactElement {
  return (
    <>
      <div className="section-lead">
              415 份数法的前提是「<b>把增长率 R 认成一个分数</b>」。认不出来，415 就无从下手；
              认出来了但认偏了，就要靠「<b>误差修正</b>」把偏差补回来。这一节就是这两件事。
            </div>
      
            <h4>1. 必背分数表（必须条件反射）</h4>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">50%</th><th className="nowrap">33.3%</th><th className="nowrap">25%</th><th className="nowrap">20%</th><th className="nowrap">16.7%</th><th className="nowrap">14.3%</th></tr>
                <tr><td className="nowrap">1/2</td><td className="nowrap">1/3</td><td className="nowrap">1/4</td><td className="nowrap">1/5</td><td className="nowrap">1/6</td><td className="nowrap">1/7</td></tr>
                <tr><th className="nowrap">28.6%</th><th className="nowrap">42.9%</th><th className="nowrap">12.5%</th><th className="nowrap">11.1%</th><th className="nowrap">9.1%</th><th className="nowrap">8.3%</th></tr>
                <tr><td className="nowrap">2/7</td><td className="nowrap">3/7</td><td className="nowrap">1/8</td><td className="nowrap">1/9</td><td className="nowrap">1/11</td><td className="nowrap">1/12</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 1 · 百化分反应速度</div>
              <ExampleBody>
                <ExampleQuestion>把下面四个百分数各自换成最贴近的分数（分母 ≤ 9）：13.1%、22.2%、37.5%、44.4%。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 全部往「分母 2~9」的分数上靠：<br />
                  13.1% —— 14.3% = 1/7 略大，12.5% = 1/8 略小 → 取 <b>1/7（估大）</b>；<br />
                  22.2% —— 20% = 1/5 略小，25% = 1/4 略大 → 取 <b>1/5（估小）</b>；<br />
                  37.5% —— 33.3% = 1/3 略小，42.9% = 3/7 偏大 → 取 <b>3/8</b> 或 <b>1/3（估小）</b>；<br />
                  44.4% —— 42.9% = 3/7 略小 → 取 <b>3/7（估小）</b>。<br />
                  <span className="correct">答案：1/7、1/5、3/8、3/7</span>
                  <div className="ex-note">「估大 / 估小」这两个字很重要——它决定后面一份量是偏大还是偏小。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>2. 应知分数表（1/11 ~ 1/15）</h4>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">分数</th><td className="nowrap">1/11</td><td className="nowrap">1/12</td><td className="nowrap">1/13</td><td className="nowrap">1/14</td><td className="nowrap">1/15</td><td className="nowrap">1/16</td><td className="nowrap">1/20</td></tr>
                <tr><th className="nowrap">百分数</th><td className="nowrap">9.1%</td><td className="nowrap">8.3%</td><td className="nowrap">7.7%</td><td className="nowrap">7.1%</td><td className="nowrap">6.7%</td><td className="nowrap">6.3%</td><td className="nowrap">5.0%</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 2 · 分母 11 以上的分数也用得上</div>
              <ExampleBody>
                <ExampleQuestion>某市 2023 年快递业务量 1320 亿件，同比增长 9.1%。求同比增长量。</ExampleQuestion>
                <ExampleOptions><span>A. 100</span><span>B. 110</span><span>C. 120</span><span>D. 130</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 9.1% = 1/11，属于「除 n+1」的正规口径：<br />
                  n = 11 → X = B ÷ (n+1) = 1320 ÷ 12 = <b>110</b> 亿件。<br />
                  回代 A = 1320 − 110 = 1210，1210 × 1.091 = 1320.1 ✓<br />
                  <span className="correct">答案：B. 110</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>3. 误差修正：415 的「补丁」</h4>
            <SubPoint>
              <b>使用时机：</b>R &gt; 10%，且选项差距在 2% 以上最为适用。<br />
              <b>核心用法：</b>先按最接近的分数算出一个 X′，再乘上修正系数 ——
              <code>X = X′ × (1 ± R修)</code>。
              <b>R原式 &gt; 百化分 → 用加法；R原式 &lt; 百化分 → 用减法。</b>
            </SubPoint>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">百化分</th><th className="nowrap">适用范围</th><th className="nowrap">X′</th><th className="nowrap">R修</th></tr>
                <tr><td className="nowrap">11.1%</td><td className="nowrap">10%～11.8%</td><td className="nowrap">B/10</td><td className="nowrap">R差×8</td></tr>
                <tr><td className="nowrap">12.5%</td><td className="nowrap">11.8%～13.4%</td><td className="nowrap">B/9</td><td className="nowrap">R差×7</td></tr>
                <tr><td className="nowrap">14.3%</td><td className="nowrap">13.4%～15.5%</td><td className="nowrap">B/8</td><td className="nowrap">R差×6</td></tr>
                <tr><td className="nowrap">16.7%</td><td className="nowrap">15.5%～18.5%</td><td className="nowrap">B/7</td><td className="nowrap">R差×5</td></tr>
                <tr><td className="nowrap">20%</td><td className="nowrap">18.5%～22.5%</td><td className="nowrap">B/6</td><td className="nowrap">R差×4</td></tr>
                <tr><td className="nowrap">25%</td><td className="nowrap">22.5%～30%</td><td className="nowrap">B/5</td><td className="nowrap">R差×3</td></tr>
                <tr><td className="nowrap">33.3%</td><td className="nowrap">30%～40%</td><td className="nowrap">B/4</td><td className="nowrap">R差×2.2</td></tr>
                <tr><td className="nowrap">50%</td><td className="nowrap">40%～60%</td><td className="nowrap">B/3</td><td className="nowrap">R差×1.3</td></tr>
                <tr><td className="nowrap">66.7%</td><td className="nowrap">60%～80%</td><td className="nowrap">B×0.4</td><td className="nowrap">R差×0.9</td></tr>
                <tr><td className="nowrap">100%</td><td className="nowrap">80%～120%</td><td className="nowrap">B/2</td><td className="nowrap">R差×0.5</td></tr>
              </DataTable>
            </div>
            <Callout variant="warn">
              记忆锚点：<b>修正被扔到哪一边</b>——R 比分数大了，真实增量就比你算的 X′ 大，所以要「加」；
              R 比分数小了，真实增量就小，所以要「减」。符号错了结果就反着偏。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 3 · 误差修正（修正系数 ×5）</div>
              <ExampleBody>
                <ExampleQuestion>现期 B = 7432，增长率 R = 17.5%，求变化量 X。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">①</span>定位：17.5% 落在 15.5%～18.5% → 百化分取 <b>16.7% = 1/7</b>，R修系数 = 5。<br />
                  <span className="step-label">②</span>算 X′：X′ = B ÷ 7 = 7432 ÷ 7 ≈ 1061.7。<br />
                  <span className="step-label">③</span>算修正：R差 = 17.5% − 16.7% = 0.8 个百分点 → R修 = 0.8% × 5 = 4%。<br />
                  <span className="step-label">④</span>定符号：R原式(17.5%) &gt; 百化分(16.7%) → <b>加</b>。<br />
                  X = 1061.7 × (1 + 4%) ≈ <b>1104</b>。（精确 X = 7432 × 0.175 ÷ 1.175 ≈ 1107）<br />
                  <span className="correct">答案：约 1104（误差 0.3%，选项差距大时够用）</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 4 · 误差修正（R 比分数小时要减）</div>
              <ExampleBody>
                <ExampleQuestion>现期 B = 1842，增长率 R = 63.5%，求变化量 X。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> <span className="step-label">①</span>63.5% 落在 60%～80% → 百化分取 <b>66.7%</b>，X′ = B × 0.4 = 736.8，R修系数 = 0.9。<br />
                  <span className="step-label">②</span>R差 = 63.5% − 66.7% = −3.2 个百分点（R原式更小）。<br />
                  <span className="step-label">③</span>R修 = 3.2% × 0.9 = 2.88% → <b>减</b>：X = 736.8 × (1 − 2.88%) ≈ <b>715.6</b>。<br />
                  精确 X = 1842 × 0.635 ÷ 1.635 ≈ 715.4 ✓<br />
                  <span className="correct">答案：约 716</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>4. 化除为乘（R &lt; 5% 的近似）</h4>
            <Callout variant="formula">
              <div className="formula">B ÷ (1 + R) ≈ B × (1 − R)　　（R &lt; 5% 时误差可忽略）</div>
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 5 · 化除为乘</div>
              <ExampleBody>
                <ExampleQuestion>计算 856 ÷ 1.04 ≈ ？</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> R = 4% &lt; 5%，可直接化除为乘：<br />
                  856 × (1 − 4%) = 856 − 34.24 = <b>821.8</b>。<br />
                  精确值 856 ÷ 1.04 = 823.08，误差约 0.16%，选项差距大时完全够用。<br />
                  <span className="correct">答案：约 822</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
