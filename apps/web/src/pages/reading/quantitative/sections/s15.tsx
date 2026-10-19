import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 十五、植树与方阵
 *
 * @returns 该节正文。
 */
export default function S17(): ReactElement {
  return (
    <>
      <Block>
                    <BlockTitle>1. 植树问题</BlockTitle>
      
                  <figure className="fig">
                    <svg viewBox="0 0 460 300" role="img" aria-label="植树问题四种情形">
                      <text x={16} y={52} fontSize={14} fill="#4f7cff" fontWeight="700">两端都植</text>
                      <line x1={122} y1={46} x2={352} y2={46} stroke="#3f4a5f" strokeWidth={1.6} />
                      <circle cx={122} cy={46} r={7} fill="#2ecc71" /><circle cx={180} cy={46} r={7} fill="#2ecc71" />
                      <circle cx={237} cy={46} r={7} fill="#2ecc71" /><circle cx={294} cy={46} r={7} fill="#2ecc71" />
                      <circle cx={352} cy={46} r={7} fill="#2ecc71" />
                      <text x={366} y={52} fontSize={13.5} fill="#6b7280">5 棵 = 4 段 + 1</text>
                      <text x={16} y={132} fontSize={14} fill="#4f7cff" fontWeight="700">只植一端</text>
                      <line x1={122} y1={126} x2={352} y2={126} stroke="#3f4a5f" strokeWidth={1.6} />
                      <circle cx={122} cy={126} r={7} fill="#2ecc71" /><circle cx={180} cy={126} r={7} fill="#2ecc71" />
                      <circle cx={237} cy={126} r={7} fill="#2ecc71" /><circle cx={294} cy={126} r={7} fill="#2ecc71" />
                      <text x={366} y={132} fontSize={13.5} fill="#6b7280">4 棵 = 4 段</text>
                      <text x={16} y={212} fontSize={14} fill="#4f7cff" fontWeight="700">两端都不植</text>
                      <line x1={122} y1={206} x2={352} y2={206} stroke="#3f4a5f" strokeWidth={1.6} />
                      <circle cx={180} cy={206} r={7} fill="#2ecc71" /><circle cx={237} cy={206} r={7} fill="#2ecc71" />
                      <circle cx={294} cy={206} r={7} fill="#2ecc71" />
                      <text x={366} y={212} fontSize={13.5} fill="#6b7280">3 棵 = 4 段 − 1</text>
                      <text x={16} y={286} fontSize={14} fill="#4f7cff" fontWeight="700">环形植树</text>
                      <circle cx={190} cy={264} r={30} fill="none" stroke="#3f4a5f" strokeWidth={1.6} />
                      <circle cx={220} cy={264} r={7} fill="#2ecc71" /><circle cx={205} cy={238} r={7} fill="#2ecc71" />
                      <circle cx={175} cy={238} r={7} fill="#2ecc71" /><circle cx={160} cy={264} r={7} fill="#2ecc71" />
                      <circle cx={175} cy={290} r={7} fill="#2ecc71" /><circle cx={205} cy={290} r={7} fill="#2ecc71" />
                      <text x={262} y={270} fontSize={13.5} fill="#6b7280">6 棵 = 6 段（首尾相接）</text>
                    </svg>
                    <figcaption>先算「段数」= 总长 ÷ 间隔，再按情形加减：<b>两端都植 +1，只植一端不加不减，两端都不植 −1，环形不加不减</b>。</figcaption>
                  </figure>
                    <DataTable>
                      <tr><th>类型</th><th>公式</th></tr>
                      <tr><td>两端植树</td><td>棵数 = 总长÷间隔 + 1</td></tr>
                      <tr><td>一端植树（单端）</td><td>棵数 = 总长÷间隔</td></tr>
                      <tr><td>两端不植（楼间）</td><td>棵数 = 总长÷间隔 - 1</td></tr>
                      <tr><td>环形植树</td><td>棵数 = 总长÷间隔</td></tr>
                    </DataTable>
                    <Callout variant="tip">默认两端植树（结果+1）。注意是否×2（两侧）</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题1 · 植树问题</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一条120米长的道路一侧植树，每隔8米种一棵（两端都种），需要多少棵树？</ExampleQuestion>
                      <ExampleOptions>A.14　B.15　C.16　D.17</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>两端植树 → 棵数=总长÷间隔+1<br />
                        =120÷8+1=15+1=<b>16棵</b><br />
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题2 · 封闭图形植树（直角三角形 · 2025 广东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某单位计划在一块直角三角形的绿地周边栽种树木，先在 3 个顶点各栽种 1 棵，再从顶点开始每隔 4 米栽种 1 棵。如果两条直角边（包含顶点）分别栽种 4 棵和 5 棵，则该绿地周边一共栽种了（　　）棵树。</ExampleQuestion>
                      <ExampleOptions>A.12　B.13　C.14　D.15</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>先由「棵数」反推「边长」，再用封闭图形的办法数树。<br />① 两端都栽 → <b>棵数 = 段数 + 1</b>：<br />　 栽 4 棵 → 3 段 → 3 × 4 = <b>12 米</b>；栽 5 棵 → 4 段 → 4 × 4 = <b>16 米</b>。<br />② 直角边 12、16 → 斜边 = √(12² + 16²) = <b>20 米</b>（12-16-20 就是 3-4-5 放大 4 倍）→ 20 ÷ 4 = 5 段 → <b>6 棵</b>。<br />③ 三边相加：4 + 5 + 6 = 15，但 <b>3 个顶点各被相邻两条边重复数了 1 次</b> → 15 − 3 = <b>12</b> 棵。<br /><span style={{ color: '#6b7280' }}>封闭图形（三角形 / 圆 / 多边形）植树：先按各边「棵数 = 段数 + 1」算，再把重复的顶点减掉。</span>
                    <span className="correct">答案：A</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>2. 不移动植树</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">不移动棵数 = (m-1)与(n-1)的最大公约数 + 1</span>
                    </Callout>
                    <SubPoint>m = 原棵数，n = 新棵数；最小公倍数的位置不移动</SubPoint>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题3 · 不移动植树（2018 广州）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某条道路进行灯光增亮工程，原来间隔 35 米的路灯一共有 21 盏，现要将路灯的间隔缩短为 25 米，那么有几盏路灯无需移动？</ExampleQuestion>
                      <ExampleOptions>A.2　B.3　C.4　D.5</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>不移动植树三步走（讲义原列）：
                              ① <b>先明确总长度</b>：21 盏灯、间隔 35 米 → 总长 = (21 − 1) × 35 = <b>700</b> 米；
                              ② <b>求两个间隔长度的最小公倍数</b>：lcm(35, 25) = <b>175</b> 米 —— 相距 175 米的整数倍处，新旧方案的位置重合；
                              ③ <b>数重合点的个数</b>：0、175、350、525、700，共 <b>5</b> 盏（含两端）。
                              所以有 <b>5</b> 盏无需移动。
                              要点：<b>「无需移动」= 位于两个间隔长度最小公倍数的整数倍位置</b>；别忘了两端各有一盏。
                        <span className="correct">答案：D</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>3. 方阵问题</BlockTitle>
                  <div className="fig-row">
      
                  <figure className="fig">
                    <svg viewBox="0 0 230 200" role="img" aria-label="实心方阵">
                      <text x={20} y={22} fontSize={14} fill="#4f7cff" fontWeight="700">实心方阵（4×4）</text>
                      <g fill="#4f7cff">
                        <circle cx={45} cy={60} r={9} /><circle cx={85} cy={60} r={9} /><circle cx={125} cy={60} r={9} /><circle cx={165} cy={60} r={9} />
                        <circle cx={45} cy={100} r={9} /><circle cx={85} cy={100} r={9} /><circle cx={125} cy={100} r={9} /><circle cx={165} cy={100} r={9} />
                        <circle cx={45} cy={140} r={9} /><circle cx={85} cy={140} r={9} /><circle cx={125} cy={140} r={9} /><circle cx={165} cy={140} r={9} />
                        <circle cx={45} cy={180} r={9} /><circle cx={85} cy={180} r={9} /><circle cx={125} cy={180} r={9} /><circle cx={165} cy={180} r={9} />
                      </g>
                      <text x={60} y={105} fontSize={13} fill="#1a1a2e" fontWeight="700">总人数 = n² = 16</text>
                    </svg>
                  </figure>
                  <figure className="fig">
                    <svg viewBox="0 0 230 218" role="img" aria-label="空心方阵">
                      <text x={20} y={22} fontSize={14} fill="#2ecc71" fontWeight="700">空心方阵最外层</text>
                      <g fill="#2ecc71">
                        <circle cx={45} cy={60} r={9} /><circle cx={85} cy={60} r={9} /><circle cx={125} cy={60} r={9} /><circle cx={165} cy={60} r={9} />
                        <circle cx={45} cy={100} r={9} /><circle cx={165} cy={100} r={9} />
                        <circle cx={45} cy={140} r={9} /><circle cx={165} cy={140} r={9} />
                        <circle cx={45} cy={180} r={9} /><circle cx={85} cy={180} r={9} /><circle cx={125} cy={180} r={9} /><circle cx={165} cy={180} r={9} />
                      </g>
                      <text x={52} y={124} fontSize={13} fill="#6b7280">空心</text>
                      <text x={30} y={205} fontSize={13} fill="#1a1a2e" fontWeight="700">最外层 = 4n − 4 = 12</text>
                    </svg>
                  </figure>
                  </div>
                    <Callout variant="formula">
                      <span className="formula">最外圈人数 = 4N - 4（N为每边人数）</span><br />
                      <span className="formula">总人数 = N²（实心方阵）</span><br />
                      <span className="formula">相邻两层人数差 = 8</span>
                    </Callout>
                    <Callout variant="key">
                      <b>充分利用选项猜平方数：</b><br />
                      猜 6²=36, 8²=64, 10²=100 等
                    </Callout>
                    <SubPoint><b>别把方阵默认成正方形（讲义原话）：</b>方阵<b>可以是正方形，也可以是矩形</b> ——
                      题干只说「排成方阵 / 实心方阵」时，先按能开平方的 N × N 试；若平方数都不合适，就退一步考虑 <b>m × n 的矩形排列</b>，别把自己框死。</SubPoint>
                    <SubPoint>区分实心方阵和空心方阵</SubPoint>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题4 · 方阵问题（2020 浙江）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某学校要将全体运动员排成方阵，老师按人数粗略估计进行第一次排列，发现多出 99 人，于是又将每行和每列多加了 4 人进行排列，发现缺少 37 人。问学校共有运动员多少人？</ExampleQuestion>
                      <ExampleOptions>A.256　B.289　C.324　D.361</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>设第一次排成 n × n 的方阵，用<b>总人数不变</b>列等式：
                              ① 第一次：总人数 = n² <b>+ 99</b>（多出 99 人）；
                              ② 第二次：每行每列都加 4 → 边长 (n + 4)，此时<b>缺 37 人</b> → 总人数 = (n + 4)² <b>− 37</b>；
                              ③ 两边相等：n² + 99 = (n + 4)² − 37 = n² + 8n + 16 − 37 → 99 = 8n − 21 → <b>n = 15</b>；
                              ④ 总人数 = 15² + 99 = 225 + 99 = <b>324</b>（人）。
                              验证：19² = 361，361 − 324 = 37 ✓ 正好缺 37 人。
                              要点：方阵题两种打法 —— <b>①「多出 / 缺少」→ 用总人数不变列等式</b>（本题）；② 直接<b>猜平方数</b>，选项里哪个是完全平方数就是它。
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>4. 容斥原理植树</BlockTitle>
                    <Callout variant="key">
                      特征：两条（或多条）长度不同的路分别植树，问"一共植多少棵"（重合处只算一次）。<br />
                      <b>方法：</b>各自按公式算出棵数，再用两集合容斥减去重叠部分——<br />
                      重叠处就在 <b>两个间隔的最小公倍数的倍数位置</b>上。<br />
                      例：60 米的路每隔 4 米植（16 棵）、每隔 6 米植（11 棵），重合处在每 12 米一处 → 60÷12+1 = 6 棵 → 共用 16 + 11 − 6 = <b>21 棵</b>。
                    </Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题5 · 容斥原理植树（2024 广东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某个障碍跑项目需要在 100 米长的跑道上布置障碍（起点和终点均不布置）。如果从起点开始，每隔 4 米布置一个甲障碍，每隔 6 米布置一个乙障碍，甲、乙障碍的重合点则不布置甲障碍。则跑道上总共布置多少个甲障碍？</ExampleQuestion>
                      <ExampleOptions>A.16　B.17　C.24　D.25</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>先各自算、再减去重合（两集合容斥），注意<b>两端都不布置</b>：
                              ① 甲障碍原本的位置：4、8、12、…、96（<b>不含 0 和 100</b>）→ 100 ÷ 4 = <b>25</b> 个空、两端各去掉一个 → <b>24</b> 个；
                              ② 重合点 = 4 和 6 的公倍数位置 = lcm(4, 6) = <b>12</b> 的倍数 → 12、24、36、48、60、72、84、96，共 <b>8</b> 个；
                              ③ 重合点上<b>不布置甲障碍</b> → 甲的个数 = 24 − 8 = <b>16</b>。
                              要点：<b>「两端都不布置」先各自减 1</b>，再用「公倍数位置」找重合；
                              如果题目改成"重合点只算一次（两种障碍都布）"，那答案就变成 24 + 16 − 8 = 32，审题时要看清"重合点怎么处理"。
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
    </>
  )
}
