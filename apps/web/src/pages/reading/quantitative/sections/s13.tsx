import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十三、年龄问题
 *
 * @returns 该节正文。
 */
export default function S15(): ReactElement {
  return (
    <>
      <Block>
                    <BlockTitle>三大核心规律</BlockTitle>
                    <Callout variant="key">
                      1️⃣ 每过N年，每个人都长N岁<br />
                      2️⃣ <b>年龄差永远不变</b>（最重要）<br />
                      3️⃣ 年龄倍数越来越小（随时间推移）
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题1 · 年龄差不变</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>父亲今年 45 岁，儿子今年 15 岁。问几年前父亲的年龄是儿子的 4 倍？</ExampleQuestion>
                      <ExampleOptions>A.3　B.4　C.5　D.6</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>年龄问题的第一把钥匙是<b>年龄差永远不变</b>：<br />父子年龄差 = 45 − 15 = <b>30 岁</b>，无论哪一年都是 30。<br />当父亲年龄是儿子的 4 倍时，两人相差 4 − 1 = 3 份 → 1 份 = 30 ÷ 3 = 10 → <b>儿子当时 10 岁</b>（父亲 40 岁）。<br />儿子现在 15 岁 → 15 − 10 = <b>5 年前</b>（父亲当时 40 岁，40 ÷ 10 = 4 ✓）。<br /><span style={{ color: '#6b7280' }}>要点：先用「年龄差 ÷ 倍数差」求出小的一方当年的年龄，再和现在作差，比列方程更快，也不会算出小数。</span>
                    <span className="correct">答案：C</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>解题方法</BlockTitle>
                    <PointList>
                      <li><b>代入排除</b>：结合常识根据选项猜题</li>
                      <li><b>列表梳理</b>：画表格理清各时间点的年龄</li>
                      <li><b>倍数特性</b>：利用年龄差不变，结合选项排除</li>
                      <li><b>不定方程</b>：奇偶、倍数、尾数代入排除</li>
                      <li><b>方程法</b>：关系能直接列等式时，设<b>最小的那个年龄</b>为 x，一步到位（人数少、关系简单时比代入快）</li>
                      <li><b>常识</b>：年龄必须是<b>非负整数</b>；父子 / 母子年龄差通常在 <b>20～40 岁</b>；「几倍关系」要符合现实 —— 先用常识砍掉离谱选项</li>
                    </PointList>
                    <Callout variant="warn">别列一堆方程解半天，多用代入排除！</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题2 · 列表梳理（表格法）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一家三口，妈妈比儿子大 26 岁，爸爸比儿子大 33 岁。1995 年，一家三口的年龄之和为 62。那么 2018 年儿子、妈妈和爸爸的年龄分别是（　　）。</ExampleQuestion>
                      <ExampleOptions>A.23，49，56　B.24，50，57　C.25，51，58　D.26，52，59</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>用<b>列表梳理</b>把各时间点列清楚（以"儿子"为基准）：
                              设 1995 年儿子 x 岁 → 妈妈 x + 26、爸爸 x + 33。
                              1995 年年龄和：x + (x + 26) + (x + 33) = 62 → 3x + 59 = 62 → 3x = 3 → x = 1。
                              所以 1995 年：儿子 1 岁、妈妈 27 岁、爸爸 34 岁。
                              从 1995 到 2018 过了 <b>23 年</b> → 三人都各加 23：儿子 24、妈妈 50、爸爸 57。
                              也可用<b>代入排除</b>验证：A 项妈妈 49 − 儿子 23 = 26 ✓、爸爸 56 − 23 = 33 ✓，但 1995 年为 0、26、33，和为 59 ≠ 62 ✗ → 排除。
                              要点：<b>年龄差永远不变</b>是列表法的锚点；先把某年的基准人物设出来，再统一平移年数。
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题3 · 多主体年龄（工龄与年龄 · 2025 广东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>小王参加工作时的年龄，和他弟弟现在的年龄相同。小王工作两年后，弟弟也正式参加工作。现在兄弟俩的年龄之和，正好是他们工龄之和的 8 倍。如果弟弟 20 岁正式参加工作，则小王比弟弟大（　　）岁。</ExampleQuestion>
                      <ExampleOptions>A.3　B.4　C.5　D.6</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>这道题的坑在于「年龄」和「工龄」两套量要分开列。设<b>弟弟现在 x 岁</b>：<br />· 弟弟 20 岁参加工作 → 弟弟工龄 = <b>x − 20</b>；<br />· 小王比弟弟早 2 年参加工作 → 小王工龄 = (x − 20) + 2 = <b>x − 18</b>；<br />· 「小王参加工作时的年龄 = 弟弟现在的年龄」→ 小王现在 = 参加工作时年龄 + 工龄 = x + (x − 18) = <b>2x − 18</b>。<br />现在：年龄和 = (2x − 18) + x = <b>3x − 18</b>；工龄和 = (x − 18) + (x − 20) = <b>2x − 38</b>。<br />由「年龄和 = 工龄和 × 8」：3x − 18 = 8(2x − 38) → 3x − 18 = 16x − 304 → 13x = 286 → <b>x = 22</b>。<br />小王现在 = 2 × 22 − 18 = 26，弟弟 22 → 小王比弟弟大 <b>4</b> 岁。<br /><span style={{ color: '#6b7280' }}>验算：年龄和 26 + 22 = 48；工龄和 4 + 2 = 6；48 = 8 × 6 ✓</span>
                    <span className="correct">答案：B</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>必背：年龄和年龄的平方</BlockTitle>
                    <DataTable>
                      <tr><th>出生年份</th><th>年龄</th><th>年龄²</th></tr>
                      <tr><td>1892</td><td>44</td><td>1936</td></tr>
                      <tr><td>1980</td><td>45</td><td>2025</td></tr>
                      <tr><td>2070</td><td>46</td><td>2116</td></tr>
                    </DataTable>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题4 · 必背：年龄和年龄的平方</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>老李 1980 年出生。到哪一年，他的年龄的平方恰好等于那一年的年份？</ExampleQuestion>
                <ExampleOptions>A.2024 年　B.2025 年　C.2026 年　D.2049 年</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>设那一年他的年龄为 x，则 年份 = 出生年 + 年龄 = 1980 + x，同时 年份 = x²。<br />直接查必背表：<b>45² = 2025</b>，而 2025 − 1980 = 45 ✓，恰好吻合。<br />（同理记：44² = 1936（1892 年生）、46² = 2116（2070 年生））
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>属相与本命年</BlockTitle>
                    <PointList>
                      <li>十二生肖<b>循环周期为 12</b> → <b>属相相同的人，年龄差必为 12 的整数倍</b>（一句秒排选项）。</li>
                      <li><b>本命年</b>：与出生年属相相同的年份，每 12 年一次。</li>
                      <li>求出生年份：<b>今年年份 − 年龄</b>，再按属相往前推 12 的倍数调整。</li>
                    </PointList>
                    <Callout variant="tip">记住今年（2026 年）是<b>马年</b>；2014、2002、1990 也都是马年 —— 相差都是 12 岁。</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题5 · 属相问题</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>甲、乙两人属相相同，甲今年 24 岁，则乙今年的年龄可能是：</ExampleQuestion>
                      <ExampleOptions>A.30 岁　B.32 岁　C.36 岁　D.38 岁</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>属相相同 → 年龄差必为 <b>12 的整数倍</b>。<br />
                        24 + 12 = <b>36</b>（其余选项与 24 的差分别为 6、8、14，都不是 12 的倍数）<br />
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
    </>
  )
}
