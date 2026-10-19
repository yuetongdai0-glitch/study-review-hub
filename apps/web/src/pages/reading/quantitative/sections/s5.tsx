import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList, SubPoint } from '@/components/content'

/**
 * 五、几何问题
 *
 * @returns 该节正文。
 */
export default function S7(): ReactElement {
  return (
    <>
      <Block>
                    <BlockTitle>1. 常用周长公式</BlockTitle>
                    <DataTable>
                      <tr><th>图形</th><th>周长</th></tr>
                      <tr><td>正方形</td><td>4a</td></tr>
                      <tr><td>长方形</td><td>2(a+b)</td></tr>
                      <tr><td>圆形</td><td>2πr</td></tr>
                      <tr><td>扇形弧长</td><td>nπr/180（n 为圆心角）</td></tr>
                      <tr><td>扇形周长</td><td>弧长 + 2r</td></tr>
                      <tr><td>正 n 边形内角和</td><td>(n − 2) × 180°</td></tr>
                    </DataTable>
                    <Callout variant="tip">弧长题关键：<b>两条切线的夹角 α 与所夹弧的圆心角互补</b>（四边形内角和 360°，两个切点处各 90°）→ 圆心角 = <b>180° − α</b>。看到「切线」先标 90°。</Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题1 · 常用周长公式</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>一个长方形操场的周长是 200 米，长比宽多 20 米。操场的宽是多少米？</ExampleQuestion>
                <ExampleOptions>A.35　B.40　C.45　D.50</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>长方形周长 = 2(长 + 宽)，所以 长 + 宽 = 200 ÷ 2 = 100。又长 = 宽 + 20，代入得 (宽 + 20) + 宽 = 100 → 2 宽 = 80 → 宽 = <b>40</b> 米。
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                              <Example>
                    <ExampleHeader>📝 例题2 · 弧长 + 切线（2025 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>高速公路某路段转向处靠近居民楼，为减少噪声需设置隔音板。安装隔音板范围为公路转向处的一段圆曲线（即从点 A 至点 B 的圆弧），测控人员在过点 A、B 的两条切线的交点 C 处，测得从 A 到 B 的转角 α 为 60°，若此圆曲线的半径 OA = 1 km，则这段隔音板的安装长度为（　　）。</ExampleQuestion>
                      <ExampleOptions>A. π/4 km　B. π/2 km　C. 2π/3 km　D. 3π/4 km</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>题目给的是<b>两条切线的夹角 α = 60°</b>，不是圆心角，先换算：
                              切线 ⊥ 半径 → ∠OAC = ∠OBC = 90°；四边形 OACB 内角和 = 360°，
                              所以圆心角 ∠AOB = 360° − 90° − 90° − 60° = <b>120°</b>（即 180° − α）。
                              弧长 = (120° ÷ 360°) × 2πr = ⅓ × 2π × 1 = <b>2π/3</b>（km）。
                              要点：<b>出现「切线」先标两个 90°</b>，圆心角 = 180° − 切线夹角，这一步是本类题的固定动作。
                    <figure className="fig">
                      <svg viewBox="0 0 460 250" role="img" aria-label="圆曲线与两条切线，切线夹角60度对应圆心角120度">
                        <text x={14} y={22} fontSize={13.5} fill="#4f7cff" fontWeight="700">切线夹角 60° → 圆心角 = 180° − 60° = 120°</text>
                        <circle cx={160} cy={140} r={72} fill="#fbfcff" stroke="#cbd5e1" strokeWidth={1.2} strokeDasharray="5 4" />
                        <path d="M196 77.6 A72 72 0 0 1 196 202.4" fill="none" stroke="#4f7cff" strokeWidth={3.6} />
                        <path d="M304 140 L196 77.6 M304 140 L196 202.4" stroke="#3f4a5f" strokeWidth={2} />
                        <path d="M160 140 L196 77.6 M160 140 L196 202.4" stroke="#9fb2d8" strokeWidth={1.4} strokeDasharray="5 4" />
                        <circle cx={160} cy={140} r={3.4} fill="#1a1a2e" />
                        <circle cx={196} cy={77.6} r={4} fill="#4f7cff" />
                        <circle cx={196} cy={202.4} r={4} fill="#4f7cff" />
                        <circle cx={304} cy={140} r={4} fill="#ff6b6b" />
                        <text x={144} y={158} fontSize={14} fontWeight="700" fill="#1a1a2e">O</text>
                        <text x={312} y={146} fontSize={14} fontWeight="700" fill="#ff6b6b">C</text>
                        <text x={184} y={68} fontSize={13.5} fontWeight="700" fill="#4f7cff">A</text>
                        <text x={184} y={222} fontSize={13.5} fontWeight="700" fill="#4f7cff">B</text>
                        <text x={274} y={132} fontSize={13} fontWeight="700" fill="#ff6b6b">60°</text>
                        <text x={172} y={136} fontSize={12.5} fontWeight="700" fill="#1a1a2e">120°</text>
                        <text x={126} y={106} fontSize={12.5} fill="#6b7280">r = 1 km</text>
                        <text x={236} y={128} fontSize={12.5} fill="#4f7cff" fontWeight="700">弧 AB</text>
                        <text x={14} y={242} fontSize={13} fill="#6b7280">弧长 = 120°/360° × 2πr = ⅓ × 2π × 1 = 2π/3 km</text>
                      </svg>
                      <figcaption>切线 ⊥ 半径 → △OAC、△OBC 各有一个 90°，四边形 OACB 内角和 360°，
                        所以 <b>圆心角 ∠AOB = 180° − 60° = 120°</b>。弧长只跟圆心角有关：
                        <b>弧长 = (圆心角 ÷ 360°) × 2πr</b>。</figcaption>
                    </figure>
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
      <Block>
                    <BlockTitle>2. 常用面积公式</BlockTitle>
                    <DataTable>
                      <tr><th>图形</th><th>面积</th></tr>
                      <tr><td>正方形</td><td>a²</td></tr>
                      <tr><td>长方形</td><td>ab</td></tr>
                      <tr><td>三角形</td><td>½ah</td></tr>
                      <tr><td>平行四边形</td><td>ah</td></tr>
                      <tr><td>梯形</td><td>½(a+b)h</td></tr>
                      <tr><td>圆形</td><td>πr²</td></tr>
                      <tr><td>扇形</td><td>nπr²/360</td></tr>
                      <tr><td>菱形</td><td>对角线乘积÷2</td></tr>
                      <tr><td><b>圆环 / 月牙</b></td><td><b>π(R² − r²)</b></td></tr>
                      <tr><td><b>等边三角形</b></td><td><b>(√3/4)a²</b>（＝½a·(√3/2)a）</td></tr>
                      <tr><td>正六边形</td><td>6 × (√3/4)a² ＝ <b>(3√3/2)a²</b></td></tr>
                    </DataTable>
                    <Callout variant="tip">圆环类（月牙形、环形跑道、锚环）一律用 <b>大圆减小圆</b>：面积 = πR² − πr² = <b>π(R² − r²)</b>，不要分开算再相减，容易漏 π。</Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题3 · 常用面积公式（扇形）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>一个扇形的半径为 6，圆心角为 120°，它的面积是多少？</ExampleQuestion>
                <ExampleOptions>A.6π　B.12π　C.18π　D.24π</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>扇形面积 = nπr² / 360 = 120 × π × 36 ÷ 360 = 12π。（也可用比例：120° 是一圈的 1/3，圆面积 πr² = 36π，取 1/3 得 12π）
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                              <Example>
                    <ExampleHeader>📝 例题4 · 圆环 / 月牙形面积（2025 上海）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>公园打算修建一个横截面为月牙形（如图所示）的柱体水池养观赏鱼，其中大圆的半径为 4 米，小圆内部为休息区、其半径为 2 米，水池深 2 米。等到水池修建好，需要注入大约（　　）立方米的水。</ExampleQuestion>
                      <ExampleOptions>A.57　B.64　C.76　D.88</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>月牙形横截面 = <b>大圆面积 − 小圆面积</b>（小圆是休息区，不装水）：
                              面积 = πR² − πr² = π(R² − r²) = π × (4² − 2²) = π × 12 = <b>12π</b>（平方米）。
                              这是柱体水池 → 体积 = 底面积 × 高 = 12π × 2 = <b>24π</b>（立方米）。
                              取 π ≈ 3.14：24 × 3.14 = 75.36 ≈ <b>76</b>。
                              要点：<b>环形一律「大减小」，写成 π(R² − r²) 一步到位</b>，别分成两次乘再相减。
                    <figure className="fig">
                      <svg viewBox="0 0 460 252" role="img" aria-label="月牙形水池由大圆减小圆构成">
                        <text x={14} y={22} fontSize={13.5} fill="#4f7cff" fontWeight="700">月牙形 = 大圆 − 小圆（小圆是休息区）</text>
                        <circle cx={170} cy={128} r={80} fill="#cfe0ff" stroke="#4f7cff" strokeWidth={2} />
                        <circle cx={210} cy={128} r={40} fill="#fbfcff" stroke="#2ecc71" strokeWidth={2} />
                        <path d="M170 128 L170 48 M210 128 L250 128" stroke="#3f4a5f" strokeWidth={1.4} />
                        <text x={118} y={96} fontSize={13.5} fontWeight="700" fill="#2b4b9b">R = 4</text>
                        <text x={214} y={120} fontSize={13} fontWeight="700" fill="#1a7a45">r = 2</text>
                        <text x={60} y={146} fontSize={13} fill="#2b4b9b" fontWeight="700">水池（月牙）</text>
                        <text x={258} y={170} fontSize={12.5} fill="#6b7280">休息区</text>
                        <text x={300} y={88} fontSize={13} fill="#6b7280">深 = 2 米</text>
                        <text x={14} y={238} fontSize={13} fill="#6b7280">面积 = π(R² − r²) = π(16 − 4) = 12π　→　体积 = 12π × 2 = 24π ≈ 75.4 ≈ 76</text>
                      </svg>
                      <figcaption>月牙形（环形）面积一律用 <b>大圆减小圆</b>：<b>π(R² − r²)</b> = π(4² − 2²) = <b>12π</b>；
                        再按柱体「底面积 × 高」求体积：12π × 2 = 24π ≈ <b>75.4 立方米 ≈ 76</b>。</figcaption>
                    </figure>
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
      <Block>
                    <BlockTitle>3. 表面积 & 体积公式</BlockTitle>
                    <DataTable>
                      <tr><th>图形</th><th>表面积</th><th>体积</th></tr>
                      <tr><td>正方体</td><td>6a²</td><td>a³</td></tr>
                      <tr><td>长方体</td><td>2ab+2bc+2ac</td><td>abc</td></tr>
                      <tr><td>柱体</td><td>—</td><td>Sh（底面积×高）</td></tr>
                      <tr><td>锥体</td><td>—</td><td>⅓Sh</td></tr>
                      <tr><td>球体</td><td>4πr²</td><td>4/3 πr³</td></tr>
                      <tr><td>圆柱</td><td>2πr²+2πrh（侧面积 2πrh）</td><td>πr²h</td></tr>
                      <tr><td>圆锥</td><td>—</td><td>⅓πr²h（是等底等高圆柱的 ⅓）</td></tr>
                      <tr><td>圆台</td><td>π(r₁+r₂)L（侧面积）+ πr₁² + πr₂²</td><td>⅓πh(r₁² + r₁r₂ + r₂²)</td></tr>
                    </DataTable>
                    <Callout variant="tip"><b>圆台</b>＝圆锥切掉尖儿，所以公式都是「大圆锥 − 小圆锥」化简来的。
                      <b>侧面积 = π(上半径 + 下半径) × 母线 L</b>，L 是<b>斜边长</b>不是高 h —— 代错就把 h 当 L 了，这是最常见的失分点。</Callout>
                    <Callout variant="tip"><b>长方体</b>：三对面的面积分别是 ab、bc、ac（a≥b≥c 时对应 最大面 / 次大面 / 最小面）；<b>体对角线 = √(a² + b² + c²)</b>。</Callout>
                    <Callout variant="key">
                      <b>补充考点：体对角线（空间对角线）—— 长方体内部的「最长距离」</b><br />
                      · <b>公式：</b>长方体三边 a、b、c → 体对角线 <b>L = √(a² + b² + c²)</b>；底面正方形边长 a、高 h → <b>L = √(2a² + h²)</b>；正方体棱长 a → <b>L = √3·a</b>（注意：√2·a 只是<b>底面对角线</b>，2a 是错的）。<br />
                      · <b>什么时候用：</b>「一根细杆 / 吸管 / 铁丝插进盒里，最长能插多长」「盒内两点最远」——答案就是体对角线：一端抵住一个<b>底角</b>，另一端斜对到<b>上顶面的对角顶点</b>。无盖盒顶面是通的，那一点能穿出去，所以<b>能取到</b>体对角线；有盖且只能从小孔插入时，长度会被孔的位置卡短。<br />
                      · <b>反向求边长：</b>给 L 和 h → <b>a = √((L² − h²) ÷ 2)</b>；这类题的数字常按平方数凑好（27² = 729、23² = 529），一眼看出差 200 就能整除开方，不必估算。
                    </Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题5 · 表面积 & 体积公式</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>一个正方体的表面积是 96 平方厘米，它的体积是多少立方厘米？</ExampleQuestion>
                <ExampleOptions>A.48　B.56　C.64　D.96</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>正方体表面积 = 6a² = 96 → a² = 16 → 棱长 a = 4。<br />体积 = a³ = 4³ = <b>64</b> 立方厘米。
                  <br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Example>
                    <ExampleHeader>📝 例题6 · 圆柱外表面（2025 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某三层高的露天平台每层可视作圆柱体（如图所示）。已知每层高 5 米，下层直径 100 米，中层直径 80 米，上层直径 68 米，现要对平台的外表面进行清洁维护，共需要维护多少平方米？</ExampleQuestion>
                      <ExampleOptions>A.3740π　B.5256π　C.6240π　D.6496π</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>「外表面」= 三层<b>侧面</b> + 最上面的<b>顶面</b> + 两圈<b>露出来的环形台面</b>（下层露出中层的环、中层露出上层的环）。
                              ① 侧面：2πr×h，三层分别是 2π×50×5 = 500π、2π×40×5 = 400π、2π×34×5 = 340π → 合计 <b>1240π</b>
                              ② 顶面：π × 34² = <b>1156π</b>
                              ③ 环面：π(50² − 40²) = π(2500 − 1600) = 900π；π(40² − 34²) = π(1600 − 1156) = 444π → 合计 <b>1344π</b>
                              总计 = 1240π + 1156π + 900π + 444π = <b>3740π</b>（平方米）。
                              要点：<b>一层一层列，别漏掉「露出来的环面」</b>—— 这是本类题最容易漏的一块。
                    <figure className="fig">
                      <svg viewBox="0 0 460 302" role="img" aria-label="三层圆柱平台，自上而下直径68、80、100米，每层高5米">
                        <text x={14} y={22} fontSize={13.5} fill="#4f7cff" fontWeight="700">三层露天平台（每层高 5 米）</text>
                        <rect x={159} y={50} width={82} height={50} fill="#fef5e7" stroke="#3f4a5f" strokeWidth={1.6} />
                        <ellipse cx={200} cy={50} rx={41} ry={10} fill="#fdeccd" stroke="#3f4a5f" strokeWidth={1.6} />
                        <rect x={152} y={100} width={96} height={50} fill="#eafaf1" stroke="#3f4a5f" strokeWidth={1.6} />
                        <ellipse cx={200} cy={100} rx={48} ry={11} fill="#d9f2e3" stroke="#3f4a5f" strokeWidth={1.6} />
                        <rect x={140} y={150} width={120} height={50} fill="#e8efff" stroke="#3f4a5f" strokeWidth={1.6} />
                        <ellipse cx={200} cy={150} rx={60} ry={12} fill="#dbe4ff" stroke="#3f4a5f" strokeWidth={1.6} />
                        <path d="M159 50 L140 150 M241 50 L260 150" stroke="#c0392b" strokeWidth={1} strokeDasharray="4 3" />
                        <text x={250} y={46} fontSize={13} fill="#6b7280">上层 φ68</text>
                        <text x={256} y={96} fontSize={13} fill="#6b7280">中层 φ80</text>
                        <text x={268} y={146} fontSize={13} fill="#6b7280">下层 φ100</text>
                        <text x={60} y={122} fontSize={13} fill="#b8730d" fontWeight="700">露出的环面</text>
                        <text x={60} y={140} fontSize={12} fill="#b8730d">（要维护）</text>
                        <text x={268} y={200} fontSize={12.5} fill="#6b7280">每层高 5 米</text>
                        <text x={14} y={240} fontSize={13} fill="#6b7280">3 层侧面 = 2π(50+40+34)×5 = 1240π</text>
                        <text x={14} y={260} fontSize={13} fill="#6b7280">顶面 = π·34² = 1156π</text>
                        <text x={14} y={280} fontSize={13} fill="#6b7280">露出环面 = π(50²−40²) + π(40²−34²) = 900π + 444π</text>
                      </svg>
                      <figcaption>「维护外表面」＝ <b>所有底面露出来的部分 + 所有侧面 + 最上面的顶面</b>。
                        本题：侧面 2π(50+40+34)×5 = 1240π，顶面 1156π，两圈环面 900π + 444π，
                        合计 1240π + 1156π + 900π + 444π = <b>3740π</b>。</figcaption>
                    </figure>
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题7 · 长方体三个面（2025 国考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一个长方体零件最大面的面积是最小面的 3 倍，次大面的面积是最大、最小面面积平均值的 9/16。问该零件<b>最小面的长是其宽的多少倍</b>？</ExampleQuestion>
                      <ExampleOptions>A. 7/3　B. 7/6　C. 8/3　D. 4/3</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>设三条棱 a ≥ b ≥ c，则三个面的面积是 <b>ab（最大）、ac（次大）、bc（最小）</b>。
                              ① 最大面是最小面的 3 倍：ab = 3 × bc → <b>a = 3c</b>。
                              ② 次大面 = 最大面与最小面面积平均值的 9/16：
                              　 ac = (9/16) × (ab + bc) ÷ 2 = (9/16) × (3bc + bc) ÷ 2 = (9/16) × 2bc = 9bc/8 → <b>a = 9b/8</b>。
                              ③ 联立 a = 3c 与 a = 9b/8：3c = 9b/8 → <b>c = 3b/8</b>。
                              ④ 最小面是 bc 面，其「长 ÷ 宽」= b ÷ c = b ÷ (3b/8) = <b>8/3</b>。
                              要点：这类题<b>一定要先画长方体</b>（老师原话：得会画啊），把「最大面 ab / 次大面 ac / 最小面 bc」标到图上，三种面积的关系就不会张冠李戴。
                    <figure className="fig">
                      <svg viewBox="0 0 460 290" role="img" aria-label="长方体的三个面：最大面ab、次大面ac、最小面bc">
                        <text x={14} y={24} fontSize={13.5} fill="#4f7cff" fontWeight="700">长方体三组面：ab（最大）、ac（次大）、bc（最小）</text>
                        <polygon points="90,160 230,160 230,260 90,260" fill="#e8efff" stroke="#3f4a5f" strokeWidth={1.8} />
                        <polygon points="90,160 230,160 270,120 130,120" fill="#dbe4ff" stroke="#3f4a5f" strokeWidth={1.8} />
                        <polygon points="230,160 270,120 270,220 230,260" fill="#f2f6ff" stroke="#3f4a5f" strokeWidth={1.8} />
                        <text x={146} y={215} fontSize={14} fontWeight="700" fill="#2b4b9b">ab 最大面</text>
                        <text x={146} y={147} fontSize={12.5} fontWeight="700" fill="#1a7a45">ac 次大面</text>
                        <path d="M286 190 L262 190" stroke="#b8730d" strokeWidth={1.4} />
                        <text x={292} y={195} fontSize={12.5} fontWeight="700" fill="#b8730d">bc 最小面</text>
                        <text x={155} y={278} fontSize={13.5} fontWeight="700" fill="#1a1a2e">a</text>
                        <text x={74} y={216} fontSize={13.5} fontWeight="700" fill="#1a1a2e">b</text>
                        <text x={256} y={132} fontSize={13.5} fontWeight="700" fill="#1a1a2e">c</text>
                        <text x={292} y={240} fontSize={12.5} fill="#6b7280">三边 a ≥ b ≥ c</text>
                      </svg>
                      <figcaption>长方体的三组对面，面积分别是 <b>ab、ac、bc</b>（设 a ≥ b ≥ c）→ 分别是最小面的 3 倍关系里
                        对应的「最大面 / 次大面 / 最小面」。<b>列式前先把图画出来</b>，三个面的对应关系才不容易搞混。</figcaption>
                    </figure>
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题8 · 体对角线（无盖盒插吸管 · 2020 国考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一个无盖长方体饮料盒如图所示，其底面为正方形，高为 23 厘米。若插入一根足够细的不可弯折的吸管与底部接触，已知插入饮料盒内的吸管长度最大为 27 厘米，问饮料盒底面边长为多少厘米？</ExampleQuestion>
                      <ExampleOptions>A. 5√2　B. 8　C. 10　D. 10√2</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>「插入盒内的吸管最长能有多长」＝ <b>盒内两点间的最长距离</b> ＝ <b>体对角线</b>。吸管一端抵住底面的一个角，另一端斜对到<b>开口（无盖）的对角顶点</b>——那一点是通的，所以这段长度能取到体对角线。<br />
                              ① 底面正方形边长 a、高 23 → 体对角线 L = √(a² + a² + 23²) = <b>√(2a² + 529)</b>。<br />
                              ② 27 = √(2a² + 529) → 2a² = 729 − 529 = <b>200</b> → a² = 100 → <b>a = 10</b> 厘米。<br />
                              要点：27² = 729 要能一眼认出（3 的 6 次方），减 23² = 529 得 200，再除以 2 正好 100 —— <b>命题人是按平方数凑的数据</b>，别去估根号。
                              <figure className="fig">
                                <svg viewBox="0 0 460 300" role="img" aria-label="无盖长方体饮料盒：底面正方形边长 a、高 23 厘米，吸管沿体对角线从底角伸到开口对角顶点，盒内最长 27 厘米">
                                  <text x={14} y={22} fontSize={13.5} fill="#4f7cff" fontWeight="700">无盖饮料盒：吸管 ＝ 体对角线（底面 a×a，高 23）</text>
                                  <polygon points="110,110 250,110 290,70 150,70" fill="#f7faff" stroke="#3f4a5f" strokeWidth={1.6} />
                                  <polygon points="110,110 250,110 250,230 110,230" fill="#e8efff" stroke="#3f4a5f" strokeWidth={1.6} />
                                  <polygon points="250,110 290,70 290,190 250,230" fill="#f2f6ff" stroke="#3f4a5f" strokeWidth={1.6} />
                                  <path d="M110 230 L150 190 M150 190 L290 190 M150 190 L150 70" fill="none" stroke="#9aa4b5" strokeWidth={1.3} strokeDasharray="5 4" />
                                  <path d="M110 230 L322 38" fill="none" stroke="#c0392b" strokeWidth={4.5} strokeLinecap="round" />
                                  <circle cx={110} cy={230} r={3.4} fill="#c0392b" />
                                  <text x={330} y={46} fontSize={12.5} fontWeight="700" fill="#c0392b">吸管 27</text>
                                  <text x={332} y={64} fontSize={11.5} fill="#8b3a2e">（盒内最长）</text>
                                  <path d="M306 72 L306 188" fill="none" stroke="#b8730d" strokeWidth={1.4} />
                                  <path d="M302 78 L306 70 L310 78 M302 182 L306 190 L310 182" fill="none" stroke="#b8730d" strokeWidth={1.4} />
                                  <text x={314} y={126} fontSize={12.5} fontWeight="700" fill="#b8730d">高 23</text>
                                  <path d="M110 242 L250 242" fill="none" stroke="#1a7a45" strokeWidth={1.4} />
                                  <path d="M116 238 L108 242 L116 246 M244 238 L252 242 L244 246" fill="none" stroke="#1a7a45" strokeWidth={1.4} />
                                  <text x={168} y={260} fontSize={12.5} fontWeight="700" fill="#1a7a45">a（正方形）</text>
                                  <text x={112} y={66} fontSize={11.5} fill="#6b7280">开口（无盖）</text>
                                  <text x={14} y={284} fontSize={13} fill="#4a5568">√(a² + a² + 23²) = 27 → 2a² = 729 − 529 = 200 → a = 10</text>
                                </svg>
                                <figcaption>吸管一端抵住<b>底角</b>，另一端从<b>开口的斜对角顶点</b>穿出 → 盒内那段就是<b>体对角线</b>：L = √(a² + a² + 23²)。</figcaption>
                              </figure>
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
      <Block>
                    <BlockTitle>4. 圆的常用结论 & 多边形内角和</BlockTitle>
                    <Callout variant="key">
                      <b>① 切线 ⊥ 过切点的半径</b>：题干出现「切线」，先在那一点标出 <b>90°</b>；<br />
                      两条切线夹角 α 与所夹弧的圆心角互补 → <b>圆心角 = 180° − α</b>。<br />
                      <b>② 直径所对的圆周角 = 90°</b>：看到「直径 / 半圆」就找直角，能直接造出直角三角形。<br />
                      <b>③ 不在同一直线上的三个点确定一个圆</b>（求过三点的圆、找圆心先连两条中垂线）。<br />
                      <b>④ 两圆相切：外切 → 圆心距 = r₁ + r₂；内切 → 圆心距 = |r₁ − r₂|</b>（别把外切写成相减）。圆与直线相切 → <b>圆心到直线的距离 = 半径</b>。<br />
                      　　⇒ 两圆外切、且<b>都贴同一条边</b>（或同一条水平线）时，连心线能造出直角三角形：<b>斜边 = r₁ + r₂、竖直直角边 = r₁ − r₂</b>，另一条直角边（水平差）= √((r₁+r₂)² − (r₁−r₂)²) = <b>2√(r₁r₂)</b>（r₁=3、r₂=1 时正好是 2√3）。<br />
                      <b>⑤ 多边形内角和 = (n − 2) × 180°</b>；正 n 边形每个内角 = (n − 2) × 180° ÷ n。
                      <b>⑥ 垂径定理（弦长公式，「航海 / 雷达探测」必用）</b>：过圆心作弦的垂线必<b>平分</b>弦 → <b>弦长 = 2√(r² − d²)</b>，d 是圆心到这条弦的距离（题目里就是<b>圆心到航线的垂直距离</b>）。<br />
                      　　⇒ <b>d 怎么求：</b>d = 起点到圆心的距离 × sin(航线偏离「起点—圆心」连线的夹角)。本题 240 × sin30° = 120。<br />
                      　　⇒ <b>先比 d 和 r：</b>d &gt; r → 航线压根进不了圆，0 小时；d = r → 只擦过一个点；d &lt; r → 有进出两点，<b>时长 = 2√(r² − d²) ÷ 速度</b>。<br />
                      　　⇒ <b>「向东偏南 30°」= 从正东方向往南转 30°</b>（与正东的夹角是 30°），不是与正南夹角 30° —— 方向角读错，这题必错。<br />
                      　　⇒ <b>坑：</b>「起点距 A 240、雷达半径 200，所以先进 40」→ 错！航线斜着走，<b>离 A 最近只有 120</b>，别把 240 − 200 当成能探测的那一段。
                    </Callout>
                  </Block>
                                          <Example>
                    <ExampleHeader>📝 例题9 · 圆的切线（切线 ⊥ 半径）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>PA、PB 分别与圆 O 相切于 A、B 两点，∠APB = 60°，圆 O 的半径为 3。则切线长 PA 是多少？</ExampleQuestion>
                      <ExampleOptions>A.3　B.3√3　C.6　D.6√3</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>切线 ⊥ 过切点的半径 → <b>∠OAP = 90°</b>，于是 △OAP 是直角三角形。
                              由对称性，OP 平分 ∠APB → ∠APO = 60° ÷ 2 = <b>30°</b>（即切线夹角的一半）。
                              在 Rt△OAP 中：tan∠APO = OA / PA → tan30° = 3 / PA = √3/3 → PA = <b>3√3</b>。
                              要点：本块两条结论配合用 ——
                              · <b>切线 ⊥ 半径</b>：把「切线长」变成直角三角形里的边；
                              · <b>直径所对的圆周角 = 90°</b>：看到直径就找直角，同样是为了「造直角三角形」。
                    <figure className="fig">
                      <svg viewBox="0 0 460 252" role="img" aria-label="过圆外一点作两条切线，切线垂直于半径">
                        <text x={14} y={22} fontSize={13.5} fill="#4f7cff" fontWeight="700">切线 ⊥ 过切点的半径 → 造出直角三角形</text>
                        <circle cx={160} cy={132} r={70} fill="#fbfcff" stroke="#cbd5e1" strokeWidth={1.2} strokeDasharray="5 4" />
                        <path d="M310 132 L205 71 M310 132 L205 193" stroke="#3f4a5f" strokeWidth={2} />
                        <path d="M160 132 L205 71 M160 132 L205 193 M160 132 L310 132" stroke="#4f7cff" strokeWidth={1.6} />
                        <path d="M198 78 L204 84 L210 78" fill="none" stroke="#ff6b6b" strokeWidth={1.6} />
                        <circle cx={160} cy={132} r={3.4} fill="#1a1a2e" />
                        <circle cx={205} cy={71} r={4} fill="#4f7cff" />
                        <circle cx={310} cy={132} r={4} fill="#ff6b6b" />
                        <text x={144} y={150} fontSize={14} fontWeight="700" fill="#1a1a2e">O</text>
                        <text x={318} y={138} fontSize={14} fontWeight="700" fill="#ff6b6b">P</text>
                        <text x={212} y={66} fontSize={13.5} fontWeight="700" fill="#4f7cff">A</text>
                        <text x={212} y={212} fontSize={13.5} fontWeight="700" fill="#4f7cff">B</text>
                        <text x={272} y={124} fontSize={12.5} fontWeight="700" fill="#ff6b6b">30°</text>
                        <text x={176} y={140} fontSize={12.5} fontWeight="700" fill="#1a1a2e">60°</text>
                        <text x={106} y={104} fontSize={12.5} fill="#6b7280">r = 3</text>
                        <text x={240} y={90} fontSize={12.5} fill="#6b7280">PA = ?</text>
                        <text x={14} y={240} fontSize={13} fill="#6b7280">Rt△OAP 中 tan30° = OA / PA → PA = 3 ÷ (√3/3) = 3√3</text>
                      </svg>
                      <figcaption>过圆外一点 P 作两条切线，<b>PA ⊥ OA、PB ⊥ OB</b>（切线垂直于过切点的半径）；
                        连 OP 后由对称性<b>平分 ∠APB</b>，于是得到一个含 30° 的直角三角形，长度就能算。</figcaption>
                    </figure>
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题10 · 两圆相切 + 三边相切（矩形围栏 · 2023 浙江）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某地打算在绿地上建两个圆形花坛，如图所示：大圆的直径为 6 米，小圆的直径为 2 米。修建期间暂时在外围设置围栏，已知围栏呈矩形，<b>大圆与围栏的三条边相切，小圆与围栏的两条边相切</b>，且<b>两圆相切</b>，那么矩形围栏的面积是多少平方米？</ExampleQuestion>
                      <ExampleOptions>A. 12(2+√3)　B. 12(1+2√3)　C. 12√13　D. 6(3+√13)</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>大圆 r₁ = 3、小圆 r₂ = 1，两圆<b>外切</b> → <b>圆心距 O₁O₂ = 3 + 1 = 4</b>。<br />
                              ① <b>矩形的高</b>：大圆同时与上、下两条边相切 → 高 = 2r₁ = <b>6</b>（这条最稳，先把「定值」抓下来）。<br />
                              ② <b>竖直差</b>：大圆圆心到上边是 3，小圆圆心到上边是 1 → 两圆心的高度差 = 3 − 1 = <b>2</b>。<br />
                              ③ <b>水平差</b>：连心线是斜边 4、竖直边 2 → 水平边 = √(4² − 2²) = √12 = <b>2√3</b>。<br />
                              ④ <b>矩形的宽</b> = 3（左边到大圆圆心）+ 2√3（圆心水平差）+ 1（小圆圆心到右边）= <b>4 + 2√3</b>。<br />
                              ⑤ 面积 = 6 × (4 + 2√3) = 24 + 12√3 = <b>12(2 + √3)</b>。<br />
                              要点：这类题只有<b>三个动作</b> —— ① 用「同侧两条切线」定死一边（高 = 2r₁）；② 用「外切」得斜边 = r₁ + r₂；③ 用「各自到上边的距离」得竖直差 = r₁ − r₂，勾股求水平差。中间那步的中间量 2√3 不能丢，宽是 3 + 2√3 + 1，不是 3 + 2√3。
                              <figure className="fig">
                                <svg viewBox="0 0 356 306" role="img" aria-label="矩形围栏内大圆直径6与上左下三边相切、小圆直径2与上右两边相切、两圆外切；圆心距4、竖直差2、水平差2根号3">
                                  <text x={14} y={22} fontSize={13.5} fill="#4f7cff" fontWeight="700">大圆 r₁=3 贴上/下/左，小圆 r₂=1 贴上/右，两圆外切</text>
                                  <rect x={66} y={54} width={209} height={168} fill="#f2f7ec" stroke="#1a7a45" strokeWidth={1.8} />
                                  <circle cx={150} cy={138} r={84} fill="#e8efff" stroke="#3f4a5f" strokeWidth={1.6} opacity="0.95" />
                                  <circle cx={247} cy={82} r={28} fill="#eafaf1" stroke="#1a7a45" strokeWidth={1.6} />
                                  <path d="M150 138 L247 82" stroke="#c0392b" strokeWidth={2.2} />
                                  <path d="M150 138 L247 138" stroke="#1a7a45" strokeWidth={1.3} strokeDasharray="5 4" />
                                  <path d="M150 138 L150 54" stroke="#b8730d" strokeWidth={1.2} strokeDasharray="4 3" />
                                  <path d="M247 82 L247 54" stroke="#1a7a45" strokeWidth={1.2} strokeDasharray="4 3" />
                                  <path d="M234 138 L280 138" stroke="#9aa4b5" strokeWidth={1} strokeDasharray="3 3" />
                                  <circle cx={150} cy={138} r={3.2} fill="#1a1a2e" />
                                  <circle cx={247} cy={82} r={3.2} fill="#1a1a2e" />
                                  <text x={132} y={132} fontSize={12.5} fontWeight="700" fill="#1a1a2e">O₁</text>
                                  <text x={252} y={80} fontSize={12.5} fontWeight="700" fill="#1a1a2e">O₂</text>
                                  <text x={128} y={98} fontSize={12.5} fontWeight="700" fill="#b8730d">3</text>
                                  <text x={232} y={72} fontSize={12} fontWeight="700" fill="#1a7a45">1</text>
                                  <text x={196} y={122} fontSize={12.5} fontWeight="700" fill="#c0392b">4</text>
                                  <text x={182} y={154} fontSize={12} fontWeight="700" fill="#1a7a45">2√3</text>
                                  <path d="M48 58 L48 218" fill="none" stroke="#8b3a2e" strokeWidth={1.3} />
                                  <path d="M44 64 L48 54 L52 64 M44 212 L48 222 L52 212" fill="none" stroke="#8b3a2e" strokeWidth={1.3} />
                                  <text x={20} y={144} fontSize={12.5} fontWeight="700" fill="#8b3a2e">6</text>
                                  <text x={300} y={100} fontSize={12} fontWeight="700" fill="#c0392b">2</text>
                                  <text x={296} y={120} fontSize={11} fill="#8b3a2e">3−1</text>
                                  <path d="M294 84 L294 136" fill="none" stroke="#c0392b" strokeWidth={1.3} />
                                  <path d="M290 90 L294 80 L298 90 M290 130 L294 140 L298 130" fill="none" stroke="#c0392b" strokeWidth={1.3} />
                                  <text x={284} y={176} fontSize={11.5} fill="#6b7280">4 = 3 + 1</text>
                                  <text x={284} y={192} fontSize={11.5} fill="#6b7280">（外切）</text>
                                  <text x={10} y={246} fontSize={12.5} fill="#4a5568">高 = 2r₁ = 6　宽 = 3 + 2√3 + 1 = 4 + 2√3</text>
                                  <text x={10} y={268} fontSize={12.5} fill="#4a5568">水平差 = √(4² − 2²) = 2√3</text>
                                  <text x={10} y={292} fontSize={12.5} fontWeight="700" fill="#c0392b">面积 = 6 × (4 + 2√3) = 12(2 + √3)</text>
                                </svg>
                                <figcaption>大圆与上、下、左三边相切 → <b>高 = 2r₁ = 6</b>；两圆外切 → <b>连心线 = r₁ + r₂ = 4</b>；
                                  两圆心到上边的距离分别是 3 和 1 → <b>竖直差 = 2</b>，于是水平差 = √(4² − 2²) = 2√3。</figcaption>
                              </figure>
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题11 · 垂径定理 / 弦长（雷达探测时长 · 2025 浙江事业单位）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一艘科考船从钻井平台 A 的<b>正西方向 240 千米</b>处出发，以 <b>50 千米/小时</b> 的速度向<b>东偏南 30°</b> 方向匀速航行。已知科考船上配备的雷达可以探测 <b>200 千米</b> 范围内的海上建筑，那么科考船在航行过程中，可以探测到 A 的时长在以下哪个范围内？</ExampleQuestion>
                      <ExampleOptions>A. 小于 4 小时　B. 4–5 小时　C. 5–6 小时　D. 大于 6 小时</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>把「雷达可探测 200 千米」看成一个<b>以 A 为圆心、r = 200 的圆</b>，船在圆内航行的时间就是要问的时长。<br />
                              ① <b>判位置关系</b>：作 A 到航线的垂线，垂距 d = 240 × sin30° = <b>120 &lt; 200</b> → 航线穿过圆，有进、出两个交点。<br />
                              ② <b>求弦长</b>（＝能探测到的航程）：2√(200² − 120²) = 2 × 160 = <b>320</b> 千米（120、160、200 就是 3-4-5 的 40 倍，不用硬开根号）。<br />
                              ③ <b>求时长</b>：320 ÷ 50 = <b>6.4 小时</b> → 大于 6 小时。<br />
                              （换个算法验证：垂足在上游 240 × cos30° ≈ 208 千米处，半弦 160 → 进圆在 48 千米、出圆在 368 千米 → 0.96 h 进、7.36 h 出，相减仍是 6.4 h。题目只问时长，第 ③ 步一步到位就行，不用算两个时刻。）<br />
                              要点：<b>弦的两端关于垂足对称</b>，所以时长只跟 d、r、速度有关，与起点在圆外多远没关系（只要起点确实在圆外）。最容易错的：把 <b>240 − 200 = 40</b> 当成能探测的航程 —— 航线是斜的，最近点只有 120。
                              <figure className="fig">
                                <svg viewBox="0 0 380 302" role="img" aria-label="科考船从 A 正西 240 千米处向东偏南 30 度航行，雷达半径 200 的圆截航线得弦长 320 千米">
                                  <text x={8} y={20} fontSize={12.5} fill="#4f7cff" fontWeight="700">d = 240·sin30° = 120 &lt; 200 → 航线穿过探测圆</text>
                                  <circle cx={250} cy={130} r={110} fill="#f2f7ff" stroke="#4f7cff" strokeWidth={1.3} strokeDasharray="6 4" />
                                  <path d="M118 130 L250 130" fill="none" stroke="#9aa4b5" strokeWidth={1.2} strokeDasharray="5 4" />
                                  <path d="M118 130 L322 247" fill="none" stroke="#3f4a5f" strokeWidth={1.8} />
                                  <path d="M141 143 L293 231" fill="none" stroke="#c0392b" strokeWidth={5.5} strokeLinecap="round" />
                                  <path d="M250 130 L217 187" fill="none" stroke="#b8730d" strokeWidth={1.6} strokeDasharray="4 3" />
                                  <path d="M224 191 L228 184 L221 180" fill="none" stroke="#b8730d" strokeWidth={1.3} />
                                  <path d="M158 130 A40 40 0 0 1 152.6 150" fill="none" stroke="#ff6b6b" strokeWidth={1.4} />
                                  <circle cx={118} cy={130} r={3.4} fill="#1a1a2e" />
                                  <circle cx={250} cy={130} r={3.6} fill="#4f7cff" />
                                  <circle cx={141} cy={143} r={3.2} fill="#c0392b" />
                                  <circle cx={293} cy={231} r={3.2} fill="#c0392b" />
                                  <text x={100} y={124} fontSize={12.5} fontWeight="700" fill="#1a1a2e">出发点</text>
                                  <text x={256} y={126} fontSize={13} fontWeight="700" fill="#4f7cff">A</text>
                                  <text x={212} y={176} fontSize={11.5} fill="#8b3a2e">120</text>
                                  <text x={164} y={126} fontSize={12.5} fontWeight="700" fill="#1a7a45">240</text>
                                  <text x={136} y={158} fontSize={12} fontWeight="700" fill="#ff6b6b">30°</text>
                                  <text x={8} y={212} fontSize={12} fontWeight="700" fill="#c0392b">弦长 320</text>
                                  <text x={8} y={228} fontSize={12} fontWeight="700" fill="#c0392b">（可探测段）</text>
                                  <text x={300} y={184} fontSize={11.5} fill="#6b7280">r=200</text>
                                  <text x={8} y={254} fontSize={12.5} fill="#4a5568">d = 240 × sin30° = 120（千米）</text>
                                  <text x={8} y={274} fontSize={12.5} fill="#4a5568">弦长 = 2√(200² − 120²) = 2 × 160 = 320</text>
                                  <text x={8} y={294} fontSize={12.5} fontWeight="700" fill="#c0392b">t = 320 ÷ 50 = 6.4 小时 ＞ 6 小时</text>
                                </svg>
                                <figcaption>船的航线是一条<b>直线</b>，雷达范围是<b>圆</b>；两者相交的部分就是<b>弦</b>。
                                  先求 A 到航线的垂距 d，再套 <b>弦长 = 2√(r² − d²)</b>，最后除以速度。</figcaption>
                              </figure>
                        <span className="correct">答案：D</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
      <Block>
                    <BlockTitle>5. 勾股定理 & 必背勾股数</BlockTitle>
      
                  <figure className="fig">
                    <svg viewBox="0 0 460 190" role="img" aria-label="直角三角形勾股定理">
                      <polygon points="70,160 70,45 223,160" fill="#e8efff" stroke="#3f4a5f" strokeWidth={1.8} />
                      <path d="M70 146 L84 146 L84 160" fill="none" stroke="#ff6b6b" strokeWidth={1.6} />
                      <text x={46} y={108} fontSize={15} fill="#1a1a2e" fontWeight="700">b</text>
                      <text x={140} y={182} fontSize={15} fill="#1a1a2e" fontWeight="700">a</text>
                      <text x={158} y={92} fontSize={15} fill="#4f7cff" fontWeight="700">c</text>
                      <text x={252} y={58} fontSize={16} fill="#1a1a2e" fontWeight="700">a² + b² = c²</text>
                      <text x={252} y={88} fontSize={13.5} fill="#6b7280">c 是斜边（最长的那条）</text>
                      <text x={252} y={114} fontSize={13.5} fill="#6b7280">看到直角边 6 和 8 → 斜边必是 10</text>
                      <text x={252} y={140} fontSize={13.5} fill="#6b7280">常用勾股数：(3,4,5) (5,12,13)</text>
                      <text x={252} y={166} fontSize={13.5} fill="#6b7280">(8,15,17) (7,24,25) 及它们的倍数</text>
                    </svg>
                    <figcaption>两条直角边的平方和 = 斜边的平方。三条边都是整数的那几组叫「勾股数」，背下来可以直接秒。</figcaption>
                  </figure>
                    <Callout variant="formula">
                      <span className="formula">a² + b² = c²</span>（c 为斜边）
                    </Callout>
                    <Callout variant="key">
                      <b>必背勾股数（含倍数）：</b><br />
                      (3, 4, 5) · (6, 8, 10) · (9, 12, 15) · (12, 16, 20)<br />
                      (5, 12, 13) · (10, 24, 26) · (7, 24, 25) · (8, 15, 17) · (9, 40, 41) · (20, 21, 29)
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题12 · 勾股定理</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一个直角三角形的两条直角边分别为 6 和 8，则斜边长为（　　）。</ExampleQuestion>
                  <ExampleOptions>A.10　B.12　C.14　D.16</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>勾股定理 a² + b² = c²：斜边 = √(6² + 8²) = √100 = <b>10</b>。<br />(6, 8, 10) 是必背勾股数（3-4-5 放大 2 倍），看到 6 和 8 应立刻反应出 10，不用现算。<br /><span style={{ color: '#6b7280' }}>顺带记：面积 = ½ × 6 × 8 = 24。</span>
                    <span className="correct">答案：A</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>6. 特殊角直角三角形（★必背，最容易漏）</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">30°–60°–90°：1 ∶ √3 ∶ 2</span><br />
                      <span className="formula">45°–45°–90°：1 ∶ 1 ∶ √2</span>
                    </Callout>
                    <figure className="fig">
                      <svg viewBox="0 0 460 218" role="img" aria-label="30-60-90 与 45-45-90 直角三角形三边比例">
                        <text x={56} y={26} fontSize={15} fill="#4f7cff" fontWeight="700">30°–60°–90°</text>
                        <polygon points="58,175 136,175 136,130" fill="#e8efff" stroke="#3f4a5f" strokeWidth={1.8} />
                        <path d="M122 175 L122 161 L136 161" fill="none" stroke="#ff6b6b" strokeWidth={1.6} />
                        <text x={34} y={170} fontSize={14} fill="#ff6b6b" fontWeight="700">30°</text>
                        <text x={106} y={126} fontSize={14} fill="#ff6b6b" fontWeight="700">60°</text>
                        <text x={140} y={158} fontSize={15} fill="#1a1a2e" fontWeight="700">1</text>
                        <text x={84} y={196} fontSize={15} fill="#1a1a2e" fontWeight="700">√3</text>
                        <text x={72} y={142} fontSize={15} fill="#4f7cff" fontWeight="700">2</text>
                        <text x={46} y={214} fontSize={13} fill="#6b7280">1 ∶ √3 ∶ 2（30° 对边＝斜边一半）</text>
                        <text x={276} y={26} fontSize={15} fill="#4f7cff" fontWeight="700">45°–45°–90°</text>
                        <polygon points="276,175 354,175 354,97" fill="#eafaf1" stroke="#3f4a5f" strokeWidth={1.8} />
                        <path d="M340 175 L340 161 L354 161" fill="none" stroke="#ff6b6b" strokeWidth={1.6} />
                        <text x={252} y={170} fontSize={14} fill="#ff6b6b" fontWeight="700">45°</text>
                        <text x={320} y={92} fontSize={14} fill="#ff6b6b" fontWeight="700">45°</text>
                        <text x={358} y={142} fontSize={15} fill="#1a1a2e" fontWeight="700">1</text>
                        <text x={306} y={196} fontSize={15} fill="#1a1a2e" fontWeight="700">1</text>
                        <text x={288} y={128} fontSize={15} fill="#4f7cff" fontWeight="700">√2</text>
                        <text x={274} y={214} fontSize={13} fill="#6b7280">1 ∶ 1 ∶ √2（斜边＝直角边×√2）</text>
                      </svg>
                      <figcaption>30°–60°–90° → <b>1 ∶ √3 ∶ 2</b>：30° 所对的直角边 = <b>斜边的一半</b>，三边依次为 a、√3a、2a；<br />45°–45°–90° → <b>1 ∶ 1 ∶ √2</b>：等腰直角三角形。<br />正三角形（边长 a）：高 = <b>(√3/2)a</b>，面积 = <b>(√3/4)a²</b>。</figcaption>
                    </figure>
                    <Callout variant="key">
                      <b>怎么用：</b>已知任意一边，另外两边直接按比例写出来，<b>不用再算勾股定理</b>。<br />
                      例：30° 所对的边为 5 → 斜边 = 10，另一直角边 = 5√3。
                    </Callout>
                    <Callout variant="key">
                      <b>★ 三角函数 sin / cos / tan —— 仰角、俯角题的唯一入口（不会这三条就真的做不了题）</b><br />
                      直角三角形里取一个锐角 θ，三条边分别是 θ 的<b>对边</b>（θ 正对着的那条）、<b>邻边</b>（挨着 θ 的直角边）、<b>斜边</b>：<br />
                      · <b>sin θ = 对边 ÷ 斜边</b>　· <b>cos θ = 邻边 ÷ 斜边</b>　· <b>tan θ = 对边 ÷ 邻边</b><br />
                      记忆：<b>「正对余邻」</b>——sin 用<b>对</b>边、cos 用<b>邻</b>边，<b>两者分母都是斜边</b>；只有 <b>tan 不碰斜边</b>（就是两条直角边相除）。
                    </Callout>
                    <DataTable>
                      <tr><th>θ</th><th>sin θ</th><th>cos θ</th><th>tan θ</th></tr>
                      <tr><td>30°</td><td>0.5</td><td>0.87</td><td>0.58</td></tr>
                      <tr><td>45°</td><td>0.71</td><td>0.71</td><td><b>1</b></td></tr>
                      <tr><td>60°</td><td>0.87</td><td>0.5</td><td>1.73</td></tr>
                      <tr><td>37°</td><td><b>0.6</b></td><td><b>0.8</b></td><td><b>0.75</b></td></tr>
                      <tr><td>53°</td><td><b>0.8</b></td><td><b>0.6</b></td><td>1.33</td></tr>
                    </DataTable>
                    <Callout variant="tip"><b>sin = 对边 ÷ 斜边，cos = 邻边 ÷ 斜边，tan = 对边 ÷ 邻边</b>。精确值：30° → ½、√3/2、√3/3；45° → √2/2、√2/2、1；60° → √3/2、½、√3；37°/53° 来自 3-4-5 直角三角形（对边 3、邻边 4、斜边 5）。考卷一般直接给小数，按上表记就够。</Callout>
                    <Callout variant="key">
                      <b>仰角 / 俯角 / 坡度（题干关键词 → 用哪个比）</b><br />
                      · <b>仰角</b>＝从<b>低处</b>往上看，视线与<b>水平线</b>的夹角；<b>俯角</b>＝从<b>高处</b>往下看，视线与水平线的夹角。两者都标在<b>视点</b>上；同一个坡，<b>高处的俯角 = 低处的仰角</b>（内错角）。<br />
                      · <b>看到「仰角 / 俯角」→ 一律先用 tan</b>：竖直的<b>高</b>是对边、水平的<b>距离</b>是邻边，所以 <b>tan θ = 高 ÷ 水平距离</b>，即 <b>高 = 水平距离 × tan θ</b>。全程用不到斜边 —— 题目附带的 sin、cos 参考值多半是<b>干扰项</b>。<br />
                      · <b>两步题（同一水平距离用两次）</b>：先用<b>低处</b>那个角求出水平距离，再用<b>高处</b>那个角求高，最后<b>相减</b>。心里默念一句「<b>AD 共用</b>」，顺序就不会乱。<br />
                      · <b>什么时候才用 sin / cos：</b>已知的是<b>斜边</b>（绳长、坡长、梯长）时才用 —— 坡长 100、坡角 30° → 升高 = 100 × sin30° = 50，水平前进 = 100 × cos30° = 50√3。 <b>坡度 i = 高 ÷ 水平距离 = tan θ</b>（不是 sin！）。
                    </Callout>
                    <Callout variant="tip"><b>一句话决策：</b>题目给的是<b>水平距离 / 求高</b> → <b>tan</b>；给的是<b>斜边长</b> → <b>sin / cos</b>。看到 45° 先想到 <b>tan45° = 1</b>（高 = 水平距离，白送一个等量关系）。</Callout>
                    <Callout variant="tip">看到 30°／45°／60°／120°／135° 这些角度，或选项里出现 √2、√3，第一反应就是去找特殊直角三角形。</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题13 · 特殊角直角三角形（30°-60°-90°）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一个直角三角形中，30° 角所对的直角边长为 5，则斜边长与另一条直角边分别是？</ExampleQuestion>
                      <ExampleOptions>A.10 和 5√3　B.10 和 5√2　C.5√3 和 10　D.15 和 5√3</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>30°–60°–90° 三边比为 <b>1 ∶ √3 ∶ 2</b>，30° 所对的直角边 = 斜边的一半。<br />
                        30° 对边 = 5 → 斜边 = 5 × 2 = <b>10</b>；60° 对边 = 5 × √3 = <b>5√3</b><br />
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                              <Example>
                    <ExampleHeader>📝 例题14 · 仰角（两次 tan 共用水平距离 · 2023 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>「厦门鼓浪屿郑成功雕像」——测量点 A 与覆鼎岩底部 D 在同一水平线上。已知覆鼎岩高 CD = 24 米，在 A 处测得石像顶部 B 的仰角为 45°、石像底部 C 的仰角为 31°（参考数据：sin31° ≈ 0.52，cos31° ≈ 0.86，tan31° ≈ 0.60）。问石像 BC 的高度约为多少米？</ExampleQuestion>
                      <ExampleOptions>A. 20 米　B. 18 米　C. 16 米　D. 14 米</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>看到「<b>仰角</b>」→ 竖直线是对边、水平线 AD 是邻边 → <b>只用 tan</b>；题里给的 sin31°、cos31° 是干扰项，一个都用不上。<br />
                              ① <b>先求水平距离</b>（用低处的 C）：tan31° = CD ÷ AD → AD = 24 ÷ 0.60 = <b>40</b> 米。<br />
                              ② <b>再求到顶部的高</b>（用高处的 B）：tan45° = BD ÷ AD = 1 → BD = AD = <b>40</b> 米。<br />
                              ③ <b>相减得雕像</b>：BC = BD − CD = 40 − 24 = <b>16</b> 米。<br />
                              要点：两段<b>共用同一个 AD</b>，所以先算 AD 一次、用两遍；<b>tan45° = 1</b> 意味着「45° 时高 = 水平距离」，这一步是命题人白送的。
                              <figure className="fig">
                                <svg viewBox="0 0 380 330" role="img" aria-label="郑成功雕像仰角示意：A 点测得底部 C 的仰角 31 度、顶部 B 的仰角 45 度，CD 为 24 米，AD 水平，求 BC">
                                  <text x={10} y={20} fontSize={12.5} fill="#4f7cff" fontWeight="700">看 C：31°　看 B：45°　→ 两段共用同一个 AD</text>
                                  <polygon points="70,240 246,240 246,64" fill="#eef4ff" stroke="#3f4a5f" strokeWidth={1.7} />
                                  <path d="M70 240 L246 134" fill="none" stroke="#c0392b" strokeWidth={1.9} />
                                  <path d="M232 240 L232 226 L246 226" fill="none" stroke="#ff6b6b" strokeWidth={1.4} />
                                  <path d="M125 240 A55 55 0 0 0 108.9 201.1" fill="none" stroke="#4f7cff" strokeWidth={1.3} />
                                  <path d="M160 240 A90 90 0 0 0 147.1 193.6" fill="none" stroke="#c0392b" strokeWidth={1.3} />
                                  <text x={118} y={200} fontSize={12} fontWeight="700" fill="#4f7cff">45°</text>
                                  <text x={150} y={228} fontSize={12} fontWeight="700" fill="#c0392b">31°</text>
                                  <circle cx={70} cy={240} r={3} fill="#1a1a2e" />
                                  <circle cx={246} cy={240} r={3} fill="#1a1a2e" />
                                  <circle cx={246} cy={64} r={3} fill="#1a1a2e" />
                                  <circle cx={246} cy={134} r={3} fill="#c0392b" />
                                  <text x={56} y={256} fontSize={13} fontWeight="700" fill="#1a1a2e">A</text>
                                  <text x={250} y={256} fontSize={13} fontWeight="700" fill="#1a1a2e">D</text>
                                  <text x={250} y={58} fontSize={13} fontWeight="700" fill="#1a1a2e">B</text>
                                  <text x={250} y={130} fontSize={13} fontWeight="700" fill="#c0392b">C</text>
                                  <path d="M266 70 L266 128" fill="none" stroke="#4f7cff" strokeWidth={1.3} />
                                  <path d="M262 76 L266 66 L270 76 M262 122 L266 132 L270 122" fill="none" stroke="#4f7cff" strokeWidth={1.3} />
                                  <text x={274} y={104} fontSize={12.5} fontWeight="700" fill="#4f7cff">BC = ?</text>
                                  <path d="M266 140 L266 234" fill="none" stroke="#b8730d" strokeWidth={1.3} />
                                  <path d="M262 146 L266 136 L270 146 M262 228 L266 238 L270 228" fill="none" stroke="#b8730d" strokeWidth={1.3} />
                                  <text x={274} y={192} fontSize={12.5} fontWeight="700" fill="#b8730d">24</text>
                                  <path d="M74 268 L242 268" fill="none" stroke="#1a7a45" strokeWidth={1.3} />
                                  <path d="M80 264 L70 268 L80 272 M236 264 L246 268 L236 272" fill="none" stroke="#1a7a45" strokeWidth={1.3} />
                                  <text x={96} y={286} fontSize={12.5} fontWeight="700" fill="#1a7a45">AD（共用）</text>
                                  <text x={10} y={308} fontSize={12.5} fill="#4a5568">AD = 24 ÷ tan31° = 24 ÷ 0.6 = 40 米</text>
                                  <text x={10} y={326} fontSize={12.5} fontWeight="700" fill="#c0392b">BC = 40 − 24 = 16 米（tan45° = 1）</text>
                                </svg>
                                <figcaption>仰角在<b>水平线</b>上量：<b>C 的仰角 31°</b> 定出水平距离 AD，<b>B 的仰角 45°</b> 定出总高 BD，
                                  相减就是雕像 BC。全程只用 <b>tan</b>。</figcaption>
                              </figure>
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
      <Block>
                    <BlockTitle>7. 直角三角形的三个常用结论</BlockTitle>
                    <PointList>
                      <li><b>斜边中线定理</b>：斜边上的中线 = 斜边的一半（斜边中点到三个顶点距离相等）。</li>
                      <li><b>30° 对边定理</b>：直角三角形中，30° 所对的直角边 = 斜边的一半（反之亦然）。</li>
                      <li><b>三边关系</b>：任意两边之和 &gt; 第三边，任意两边之差 &lt; 第三边（判断能否构成三角形）。</li>
                    </PointList>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题15 · 直角三角形的三个常用结论</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>直角三角形 ABC 中，∠C = 90°，∠A = 30°，斜边 AB = 12。BC 边长是多少？</ExampleQuestion>
                <ExampleOptions>A.4　B.6　C.6√3　D.8</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>用 <b>30° 对边定理</b>：直角三角形中 30° 角所对的直角边等于斜边的一半。∠A = 30° 所对的是 BC 边，所以 BC = AB ÷ 2 = 12 ÷ 2 = <b>6</b>。<br />（顺带记住：另一条直角边 AC = 6√3，即 1 ∶ √3 ∶ 2）
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>8. 相似三角形（核心考点）</BlockTitle>
      
                  <figure className="fig">
                    <svg viewBox="0 0 486 200" role="img" aria-label="相似三角形">
                      <polygon points="60,175 300,175 180,35" fill="#eef3ff" stroke="#3f4a5f" strokeWidth={1.8} />
                      <polygon points="120,105 240,105 180,35" fill="#c9dbff" stroke="#4f7cff" strokeWidth={1.8} />
                      <text x={168} y={86} fontSize={15} fill="#1a1a2e">小</text>
                      <text x={170} y={152} fontSize={15} fill="#1a1a2e">大</text>
                      <text x={316} y={76} fontSize={15} fill="#4f7cff" fontWeight="700">小 ∶ 大 = 1 ∶ 2</text>
                      <text x={316} y={104} fontSize={13.5} fill="#6b7280">边长比 1 ∶ 2</text>
                      <text x={316} y={130} fontSize={13.5} fill="#6b7280">面积比 1 ∶ 4（1² ∶ 2²）</text>
                      <text x={316} y={156} fontSize={13.5} fill="#6b7280">平行线一截就出一组相似</text>
                    </svg>
                    <figcaption>两条平行线（或一个公共角）就能造出一组相似三角形：<b>边长成比例 → 周长同比例 → 面积成比例的平方</b>。树高、塔高、影长问题全靠它。</figcaption>
                  </figure>
                    <Callout variant="formula">
                      <span className="formula">对应边成比例 · 周长比 = 相似比 · 面积比 = 相似比²</span>
                    </Callout>
                    <PointList>
                      <li><b>AA 判定</b>：两个角对应相等 → 两三角形相似。考场最常见的是"平行线 + 公共角"造出来的相似。</li>
                      <li><b>面积比 = 相似比的平方</b>：边长放大 2 倍，面积放大 4 倍（这就是"同比例放缩"的来源）。</li>
                      <li><b>用途</b>：求不方便直接量的长度（树高、塔高、影长问题）、求面积比。</li>
                    </PointList>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题16 · 相似三角形（灯下影子 · 2022 广东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>楼道上方有一盏灯，小刘径直走向这盏灯。一开始，他发现自己影子的长度为 3.2 米；前进 1 米后，发现影子缩短为 1.6 米。已知小刘身高为 1.6 米，则这盏灯的高度约为（　　）米。</ExampleQuestion>
                      <ExampleOptions>A.2.6　B.2.8　C.3.2　D.3.4</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>灯、人、影子构成两组相似三角形（灯顶—人头顶—影子端点）。<br />由相似关系可推出：<b>影长与人到灯正下方的距离成正比</b>（因为人高和灯高都没变）。<br />影长从 3.2 变成 1.6，正好减半 → <b>人到灯下的距离也减半</b>。<br />设初始距离为 d → 前进 1 米后距离变成 d − 1，由「减半」得 <b>d − 1 = d ÷ 2 → d = 2 米</b>（此时距灯 1 米）。<br />再用相似比求灯高：影子 3.2 ÷ 人高 1.6 = 2 → 说明「影长 + 人到灯距离」是灯高的 2 倍？更直接地用「人高 ∶ 灯高 = 影长 ∶（影长 + 距离）」：<br />1.6 ∶ H = 3.2 ∶ (2 + 3.2) = 3.2 ∶ 5.2 → H = 1.6 × 5.2 ÷ 3.2 = <b>2.6</b> 米。<br /><span style={{ color: '#6b7280' }}>考场提醒：这类题只要记住「影长 ∝ 人到光源正下方的距离」，先做比例求出距离，再代相似比求高，两步就够。</span>
                    <span className="correct">答案：A</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>9. 同底 / 同高三角形的面积比（秒算神器）</BlockTitle>
                  <Callout variant="key"><b>「拉窗帘」（讲义原话）：</b>同底等高 → 面积相等。把三角形的顶点沿着<b>与底边平行的直线</b>任意滑动
                    （像拉窗帘一样），底不变、高不变，<b>面积永远相等</b>。复杂图形里只要看到一组平行线，就先用它把难算的面积「搬」到好算的位置再算。</Callout>
                  <div className="fig-row">
      
                  <figure className="fig">
                    <svg viewBox="0 0 340 160" role="img" aria-label="等底三角形面积比等于高之比">
                      <polygon points="30,120 150,120 95,40" fill="#e8efff" stroke="#4f7cff" strokeWidth={1.8} />
                      <polygon points="190,120 310,120 240,85" fill="#eafaf1" stroke="#2ecc71" strokeWidth={1.8} />
                      <path d="M95 120 L95 40" stroke="#ff6b6b" strokeWidth={1.4} strokeDasharray="4 3" />
                      <path d="M240 120 L240 85" stroke="#ff6b6b" strokeWidth={1.4} strokeDasharray="4 3" />
                      <text x={101} y={84} fontSize={14} fill="#ff6b6b" fontWeight="700">h₁</text>
                      <text x={246} y={108} fontSize={14} fill="#ff6b6b" fontWeight="700">h₂</text>
                      <text x={42} y={140} fontSize={13.5} fill="#6b7280">底相同（都 120）</text>
                      <text x={200} y={140} fontSize={13.5} fill="#6b7280">底相同（都 120）</text>
                      <text x={30} y={18} fontSize={14} fill="#4f7cff" fontWeight="700">等底 → 面积比 = 高之比</text>
                      <text x={110} y={158} fontSize={13} fill="#6b7280">S₁ ∶ S₂ = h₁ ∶ h₂</text>
                    </svg>
                  </figure>
                  <figure className="fig">
                    <svg viewBox="0 0 340 160" role="img" aria-label="等高三角形面积比等于底之比">
                      <polygon points="30,120 120,120 75,45" fill="#e8efff" stroke="#4f7cff" strokeWidth={1.8} />
                      <polygon points="170,120 320,120 245,45" fill="#eafaf1" stroke="#2ecc71" strokeWidth={1.8} />
                      <path d="M75 120 L75 45" stroke="#ff6b6b" strokeWidth={1.4} strokeDasharray="4 3" />
                      <path d="M245 120 L245 45" stroke="#ff6b6b" strokeWidth={1.4} strokeDasharray="4 3" />
                      <text x={30} y={38} fontSize={14} fill="#ff6b6b" fontWeight="700">h</text>
                      <text x={200} y={38} fontSize={14} fill="#ff6b6b" fontWeight="700">h</text>
                      <text x={62} y={138} fontSize={13.5} fill="#6b7280">底 90</text>
                      <text x={222} y={138} fontSize={13.5} fill="#6b7280">底 150</text>
                      <text x={30} y={18} fontSize={14} fill="#2ecc71" fontWeight="700">等高 → 面积比 = 底之比</text>
                      <text x={100} y={158} fontSize={13} fill="#6b7280">S₁ ∶ S₂ = a ∶ b</text>
                    </svg>
                  </figure>
                  </div>
                    <Callout variant="key">
                      <b>同底（等底）</b>的两个三角形 → <b>面积比 = 高之比</b><br />
                      <b>同高（等高）</b>的两个三角形 → <b>面积比 = 底之比</b><br />
                      <b>等底等高必等面积</b>——这是求不规则图形面积最常用的突破口
                    </Callout>
                    <Callout variant="key">
                      <b>★ 四边形对角线四块（给两块求另外两块，几乎年年考）</b><br />
                      两条对角线 AC、BD 交于 O，切出 4 块：<b>左 △ABO、上 △BCO、右 △CDO、下 △ADO</b>。<br />
                      <b>① 共用一小段的两块，比值相同</b>：△ABO 与 △BCO 共用底 <b>BO</b>，高分别是 A、C 到 BD 的距离，而 ∠AOB 与 ∠COB 互补（正弦相等）→ 高之比 = <b>AO : CO</b>；<br />
                      　　同理 △ADO 与 △CDO 共用底 <b>DO</b>，高之比也是 <b>AO : CO</b>。<br />
                      　　所以 <b>ABO : BCO = ADO : CDO = AO : CO</b>（两对的比一模一样，比值会“传染”）。<br />
                      <b>② 左右两对同理</b>：<b>ABO : ADO = BCO : CDO = BO : DO</b>。<br />
                      <b>③ 推论（最好记）：</b>对角两块之积相等 → <b>S₁ × S₃ = S₂ × S₄</b>。<br />
                      <b>怎么用：</b>已知相邻两块（如 70、90）→ 它们的比 = 另一条对角线上两段之比（7 : 9）→ <b>与它们"并排"的另一对也是 7 : 9</b>；
                      设成 7x、9x，用「<b>16x + 已知两块 = 总面积</b>」解出 x。<br />
                      <b>坑：</b>① 只能是<b>并排（共用 O 那一小段）</b>的两块互传比值，别拿"斜对角"的两块去设 x；
                      ② 对角两块之积相等 ≠ 对角两块相等。
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题17 · 同高三角形面积比</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>在三角形 ABC 中，D 是边 BC 上一点，且 BD ∶ DC = 2 ∶ 3。若 S△ABD = 8，则 S△ADC 为：</ExampleQuestion>
                      <ExampleOptions>A.10　B.12　C.14.4　D.16</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>△ABD 与 △ADC <b>同高</b>（都是从 A 向 BC 作的高）→ 面积比 = 底之比。<br />
                        S△ADC = 8 × (3 ÷ 2) = <b>12</b><br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                              <Example>
                    <ExampleHeader>📝 例题18 · 同底同高（四边形对角线 · 2025 浙江）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一块四边形田地 ABCD 如下图所示，已知 △AOD、△AOB 和 △COD 的面积分别为 9 平方千米、15 平方千米和 12 平方千米，CD 长 8 千米。问 B 点到 CD 的距离为多少千米？</ExampleQuestion>
                      <ExampleOptions>A.6　B.7　C.8　D.9</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>O 是对角线交点。反复用<b>「同底（同高）的两个三角形，面积比 = 底边比」</b>：
                              ① △AOB 与 △AOD 共用以 A 为顶点、落到 BD 上的同一条高 → S△AOB : S△AOD = <b>BO : DO</b> = 15 : 9 = 5 : 3；
                              ② △AOD 与 △COD 共用以 D 为顶点、落到 AC 上的同一条高 → S△AOD : S△COD = <b>AO : CO</b> = 9 : 12 = 3 : 4；
                              ③ 把两次比例相乘，可得 △BOC 与 △AOD 的比：S△BOC = S△AOD × (BO/DO) × (CO/AO) = 9 × 5/3 × 4/3 = <b>20</b>；
                              ④ △BCD 的面积 = S△BOC + S△COD = 20 + 12 = <b>32</b>；
                              ⑤ 又 S△BCD = ½ × CD × h → 32 = ½ × 8 × h → h = <b>8</b>（千米）。
                              要点：看到「对角线交点 + 几块面积」就条件反射用<b>共高比</b>，两次就够了。
                    <figure className="fig">
                      <svg viewBox="0 0 460 312" role="img" aria-label="四边形对角线分出的四块面积关系">
                        <text x={14} y={22} fontSize={13.5} fill="#4f7cff" fontWeight="700">对角线把四边形切成 4 块，面积之间有比例关系</text>
                        <polygon points="110,55 300,75 345,225 85,235" fill="#f7f9ff" stroke="#3f4a5f" strokeWidth={1.8} />
                        <path d="M110 55 L345 225 M300 75 L85 235" stroke="#4f7cff" strokeWidth={1.8} />
                        <path d="M300 75 L305.8 226.5" stroke="#ff6b6b" strokeWidth={1.8} strokeDasharray="6 4" />
                        <circle cx={220} cy={134.6} r={4} fill="#1a1a2e" />
                        <text x={226} y={130} fontSize={13.5} fontWeight="700" fill="#1a1a2e">O</text>
                        <text x={98} y={48} fontSize={13.5} fontWeight="700" fill="#1a1a2e">A</text>
                        <text x={306} y={68} fontSize={13.5} fontWeight="700" fill="#1a1a2e">B</text>
                        <text x={352} y={236} fontSize={13.5} fontWeight="700" fill="#1a1a2e">C</text>
                        <text x={66} y={244} fontSize={13.5} fontWeight="700" fill="#1a1a2e">D</text>
                        <text x={196} y={88} fontSize={14} fontWeight="700" fill="#2b4b9b">15</text>
                        <text x={128} y={150} fontSize={14} fontWeight="700" fill="#2b4b9b">9</text>
                        <text x={204} y={204} fontSize={14} fontWeight="700" fill="#2b4b9b">12</text>
                        <text x={286} y={150} fontSize={15} fontWeight="700" fill="#ff6b6b">?</text>
                        <text x={196} y={252} fontSize={13} fontWeight="700" fill="#6b7280">CD = 8</text>
                        <text x={316} y={158} fontSize={13} fontWeight="700" fill="#ff6b6b">h</text>
                        <text x={14} y={278} fontSize={13} fill="#6b7280">BO : DO = 15 : 9 = 5 : 3　　AO : CO = 9 : 12 = 3 : 4</text>
                        <text x={14} y={298} fontSize={13} fill="#6b7280">→　S△BOC = 9 × 5/3 × 4/3 = 20</text>
                      </svg>
                      <figcaption>同底同高的升级玩法：△AOB 与 △AOD 共高 → 面积比 = <b>BO : DO</b>；
                        △AOD 与 △COD 共高 → 面积比 = <b>AO : CO</b>。两次套用即可推出第四块面积，
                        进而把 △BCD 的面积算出来，用「½ × 底 × 高」反推 B 到 CD 的距离。</figcaption>
                    </figure>
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题19 · 四边形对角线四块（7 : 9 传比 · 2017 广东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>公园有一块四边形的草坪，由四块三角形的小草坪组成（如图所示）。已知四边形草坪的面积为 480 平方米，其中两个小三角形草坪的面积分别为 70 平方米和 90 平方米，则四块三角形小草坪中<b>最大的一块</b>面积为多少平方米？</ExampleQuestion>
                      <ExampleOptions>A. 120　B. 150　C. 180　D. 210</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>70 与 90 是<b>并排的两块</b>（共用 CO 这一段），都以 CO 为底；高分别是 B、D 到 AC 的距离，而 ∠BOC 与 ∠DOC 互补（正弦相等），所以<br />
                              　　S△BCO : S△CDO = <b>BO : DO</b> = 70 : 90 = <b>7 : 9</b>。<br />
                              ① <b>同理传染到另一对</b>：△ABO 与 △ADO 共用 AO，高也是 B、D 到 AC 的距离 → 面积比同样是 <b>BO : DO = 7 : 9</b>，设成 <b>7x、9x</b>。<br />
                              ② <b>总数</b>：70 + 90 + 7x + 9x = 480 → 160 + 16x = 480 → 16x = 320 → <b>x = 20</b>。<br />
                              ③ 两块分别是 <b>140</b>、<b>180</b> → 四块为 70、90、140、180，<b>最大 180</b>。<br />
                              （验算：140 × 90 = 12600 = 70 × 180，对角之积相等 ✓）<br />
                              要点：比只传一次 —— 7 : 9 从「共用 CO 的那对」搬到「共用 AO 的那对」，<b>16x 是这两块之和的系数（7 + 9）</b>，用总面积减掉已知两块就是 16x。
                              <figure className="fig">
                                <svg viewBox="0 0 380 306" role="img" aria-label="四边形 ABCD 两条对角线交于 O，四块草坪中并排两块为 70 与 90，另两块面积比为 7 比 9，分别为 140 与 180">
                                  <text x={8} y={20} fontSize={12.5} fill="#4f7cff" fontWeight="700">70 : 90 = 7 : 9　→　并排的另一对也是 7x : 9x</text>
                                  <polygon points="40,196 176,42 340,92 300,244" fill="#f7faff" stroke="#3f4a5f" strokeWidth={1.8} />
                                  <path d="M40 196 L340 92 M176 42 L300 244" fill="none" stroke="#4f7cff" strokeWidth={1.6} />
                                  <circle cx={230} cy={130} r={3.4} fill="#1a1a2e" />
                                  <text x={236} y={126} fontSize={12} fontWeight="700" fill="#1a1a2e">O</text>
                                  <text x={24} y={206} fontSize={13} fontWeight="700" fill="#1a1a2e">A</text>
                                  <text x={172} y={36} fontSize={13} fontWeight="700" fill="#1a1a2e">B</text>
                                  <text x={346} y={94} fontSize={13} fontWeight="700" fill="#1a1a2e">C</text>
                                  <text x={300} y={260} fontSize={13} fontWeight="700" fill="#1a1a2e">D</text>
                                  <text x={118} y={122} fontSize={13.5} fontWeight="700" fill="#1a7a45">7x</text>
                                  <text x={238} y={86} fontSize={13.5} fontWeight="700" fill="#2b4b9b">70</text>
                                  <text x={284} y={152} fontSize={13.5} fontWeight="700" fill="#2b4b9b">90</text>
                                  <text x={186} y={202} fontSize={13.5} fontWeight="700" fill="#1a7a45">9x</text>
                                  <text x={8} y={256} fontSize={12.5} fill="#4a5568">70 + 90 + 7x + 9x = 480 → 16x = 320 → x = 20</text>
                                  <text x={8} y={278} fontSize={12.5} fill="#4a5568">两块 = 140、180　→　四块：70 / 90 / 140 / 180</text>
                                  <text x={8} y={300} fontSize={12.5} fontWeight="700" fill="#c0392b">最大 180 平方米（140 × 90 = 70 × 180 验算 ✓）</text>
                                </svg>
                                <figcaption>两条对角线切出四块。<b>并排的两块</b>（共用 O 那一小段）面积比 = <b>另一条对角线上两段之比</b>：
                                  70 : 90 = BO : DO = 7 : 9，另一对（共用 AO）也是 7 : 9。</figcaption>
                              </figure>
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
      <Block>
                    <BlockTitle>10. 正六边形与正多边形</BlockTitle>
      
                  <figure className="fig">
                    <svg viewBox="0 0 460 240" role="img" aria-label="正六边形分成六个正三角形">
                      <polygon points="230,120 190,50.7 110,50.7 70,120 110,189.3 190,189.3" fill="#eef3ff" stroke="#3f4a5f" strokeWidth={1.8} />
                      <path d="M150 120 L230 120 M150 120 L190 50.7 M150 120 L110 50.7 M150 120 L70 120 M150 120 L110 189.3 M150 120 L190 189.3" stroke="#4f7cff" strokeWidth={1.2} strokeDasharray="5 4" />
                      <circle cx={150} cy={120} r={3.2} fill="#ff6b6b" />
                      <text x={176} y={112} fontSize={14} fill="#ff6b6b" fontWeight="700">r</text>
                      <text x={96} y={82} fontSize={14} fill="#1a1a2e" fontWeight="700">a</text>
                      <text x={262} y={86} fontSize={14} fill="#4f7cff" fontWeight="700">6 个正三角形拼成</text>
                      <text x={262} y={112} fontSize={13.5} fill="#6b7280">边长 a = 外接圆半径 r</text>
                      <text x={262} y={138} fontSize={13.5} fill="#6b7280">周长 = 6a</text>
                      <text x={262} y={164} fontSize={13.5} fill="#6b7280">面积 = 6 × (√3/4)a²</text>
                      <text x={262} y={190} fontSize={13.5} fill="#6b7280">= (3√3/2) a²</text>
                    </svg>
                    <figcaption>正六边形 = 6 个全等的正三角形：<b>边长就等于外接圆的半径</b>，所以面积可以直接写成 (3√3/2)a²。</figcaption>
                  </figure>
                    <PointList>
                      <li><b>正六边形</b>：边长 = 外接圆半径 r，可分成 <b>6 个全等的正三角形</b>。<br />
                        周长 = 6r，面积 = 6 × (√3/4)r² = <b>(3√3/2) r²</b>。</li>
                      <li><b>内角和</b> = (n − 2) × 180°；每个内角 = (n − 2) × 180° ÷ n。</li>
                      <li><b>密铺</b>：正三角形、正方形、正六边形能无缝铺满平面；圆、正五边形不能。</li>
                    </PointList>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题20 · 正六边形面积</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>正六边形的边长为 2，则其面积为：</ExampleQuestion>
                      <ExampleOptions>A.6√3　B.8√3　C.12　D.12√3</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>正六边形可分成 6 个边长 2 的正三角形。<br />
                        每个正三角形面积 = (√3/4) × 2² = √3 → 总面积 = 6√3<br />
                        （公式：(3√3/2) × r² = (3√3/2) × 4 = 6√3）<br />
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>11. 蝴蝶定理（梯形对角线）</BlockTitle>
      
                  <figure className="fig">
                    <svg viewBox="0 0 492 210" role="img" aria-label="梯形对角线四块面积关系">
                      <polygon points="120,45 250,45 330,170 40,170" fill="#f7faff" stroke="#3f4a5f" strokeWidth={1.8} />
                      <path d="M120 45 L330 170 M250 45 L40 170" stroke="#4f7cff" strokeWidth={1.5} />
                      <circle cx={185} cy={82} r={3.2} fill="#ff6b6b" />
                      <text x={190} y={76} fontSize={13} fill="#ff6b6b" fontWeight="700">O</text>
                      <text x={112} y={44} fontSize={12.5} fill="#6b7280">A</text>
                      <text x={254} y={42} fontSize={12.5} fill="#6b7280">B</text>
                      <text x={30} y={186} fontSize={12.5} fill="#6b7280">D</text>
                      <text x={334} y={186} fontSize={12.5} fill="#6b7280">C</text>
                      <text x={126} y={122} fontSize={14} fill="#4f7cff" fontWeight="700">S₁</text>
                      <text x={240} y={122} fontSize={14} fill="#4f7cff" fontWeight="700">S₂</text>
                      <text x={176} y={68} fontSize={14} fill="#2ecc71" fontWeight="700">S₃</text>
                      <text x={176} y={142} fontSize={14} fill="#ff6b6b" fontWeight="700">S₄</text>
                      <text x={352} y={70} fontSize={14} fill="#4f7cff" fontWeight="700">左右相等</text>
                      <text x={352} y={92} fontSize={13.5} fill="#6b7280">S₁ = S₂</text>
                      <text x={352} y={126} fontSize={14} fill="#2ecc71" fontWeight="700">上下成平方比</text>
                      <text x={352} y={148} fontSize={13.5} fill="#6b7280">S₃ ∶ S₄ = AB² ∶ CD²</text>
                    </svg>
                    <figcaption>梯形对角线把图形切成 4 块：<b>左右两块面积一定相等</b>；<b>上下两块面积比 = 上底² ∶ 下底²</b>。看到梯形画对角线，先记这两条。</figcaption>
                  </figure>
                    <Callout variant="key">
                      梯形 ABCD（AB ∥ CD）对角线交于 O，则：<br />
                      <b>① 左右两个三角形面积相等</b>：S△AOD = S△BOC<br />
                      <b>② 上下两个三角形面积比 = 上下底的平方比</b>：S△AOB ∶ S△COD = AB² ∶ CD²
                    </Callout>
                    <Callout variant="key">
                      <b>★ 蝴蝶定理的一般形式（任意四边形都成立，不限梯形）</b><br />                对角线的四块里，<b>对角两块之积相等</b>：<b>S₁ × S₃ = S₂ × S₄</b>（左上 × 右下 = 右上 × 左下）。<br />                道理很朴素：△ABO、△BCO 共用 BO，高之比 = AO : CO；△CDO、△ADO 共用 DO，高之比也是 AO : CO → 两组"对角块"的乘积里 AO·CO、BO·DO 各出现一次，约掉就相等。<br />                <b>怎么用（给三块求第四块，一条式子结束）：</b>第四块 = <b>对角两块之积 ÷ 已知的第三块</b>。<br />                <b>梯形为什么是特例：</b>AB ∥ CD 时左右两块相等（都等于 S），于是 S_top × S_bottom = S²，而 S_top : S_bottom 又等于 AB² : CD² —— 两条结论天然对得上。<br />                <b>坑：</b>① 是<b>相乘</b>不是相加；② 两条对角线必须真的相交于一点（凸四边形），凹四边形/自交的图不能直接套；③ 别和"并排两块之比 = 对角线上两段之比"混用，两条都能用，但别串。
                    </Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题21 · 蝴蝶定理（梯形对角线）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>梯形 ABCD 中 AB ∥ CD，对角线交于点 O。已知 AB = 4，CD = 8，S△AOB = 6，则 S△COD 是多少？</ExampleQuestion>
                <ExampleOptions>A.12　B.24　C.36　D.48</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>蝴蝶定理：上下两个三角形的面积比 = 上下底的平方比，即 S△AOB ∶ S△COD = AB² ∶ CD² = 16 ∶ 64 = 1 ∶ 4。<br />所以 S△COD = 6 × 4 = <b>24</b>。<br />（另一条别忘了：左右两块面积一定相等）
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                              <Example>
                    <ExampleHeader>📝 例题22 · 蝴蝶定理一般形式（对角之积 · 2019 江苏）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某民营企业新建一个四边形的厂区，按对角线将整个厂区分为四个功能区（如图所示）。已知<b>生产、仓储和营销</b>三个功能区的面积分别为 <b>26 亩、18 亩和 13 亩</b>，若保留休闲区的 <b>12 亩天然小湖泊</b>，则休闲区可利用的<b>陆地</b>面积是多少亩？</ExampleQuestion>
                      <ExampleOptions>A. 36 亩　B. 26 亩　C. 24 亩　D. 23 亩</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>四块里<b>仓储（18）与生产（26）正好是对角</b>，<b>营销（13）与休闲</b>也是对角 → 直接套蝴蝶定理：<br />
                              　　18 × 26 = 休闲 × 13 → 休闲 = 468 ÷ 13 = <b>36</b> 亩。<br />
                              ① 休闲区<b>总面积</b> 36 亩；<br />
                              ② 其中 12 亩是天然小湖泊，<b>可利用陆地 = 36 − 12 = 24</b> 亩。<br />
                              要点：这题设了<b>两层</b> —— 第一层"对角之积"求出休闲区总面积，第二层别忘了<b>减掉湖面</b>（选项里 36 就是没减湖的陷阱）。对角怎么认：<b>不共用同一个顶点的两块</b>就是对角；共用顶点（共用 18 与 13 之间的那条边）的是"并排"，并排用的是比例不是乘积。
                              <figure className="fig">
                                <svg viewBox="0 0 380 296" role="img" aria-label="四边形厂区被两条对角线分成四块：仓储18、营销13、生产26、休闲36（其中含12亩小湖），对角两块之积相等">
                                  <text x={8} y={20} fontSize={12.5} fill="#4f7cff" fontWeight="700">对角之积相等：18 × 26 = 36 × 13</text>
                                  <polygon points="40,140 180,56 340,112 190,216" fill="#f9fbff" stroke="#3f4a5f" strokeWidth={1.8} />
                                  <path d="M40 140 L340 112" fill="none" stroke="#4f7cff" strokeWidth={1.6} />
                                  <path d="M180 56 L190 216" fill="none" stroke="#4f7cff" strokeWidth={1.6} />
                                  <circle cx={184} cy={126} r={3} fill="#1a1a2e" />
                                  <text x={168} y={122} fontSize={11} fontWeight="700" fill="#1a1a2e">O</text>
                                  <text x={26} y={146} fontSize={12} fontWeight="700" fill="#1a1a2e">A</text>
                                  <text x={176} y={50} fontSize={12} fontWeight="700" fill="#1a1a2e">B</text>
                                  <text x={346} y={114} fontSize={12} fontWeight="700" fill="#1a1a2e">C</text>
                                  <text x={192} y={232} fontSize={12} fontWeight="700" fill="#1a1a2e">D</text>
                                  <text x={104} y={104} fontSize={12.5} fontWeight="700" fill="#1a7a45">仓储 18</text>
                                  <text x={104} y={172} fontSize={12.5} fontWeight="700" fill="#7a4fa0">营销 13</text>
                                  <text x={203} y={168} fontSize={12} fontWeight="700" fill="#2b4b9b">生产 26</text>
                                  <text x={212} y={118} fontSize={12.5} fontWeight="700" fill="#c0392b">休闲 36</text>
                                  <ellipse cx={290} cy={99} rx={14} ry={7.5} fill="#dff1fb" stroke="#5aa9d6" strokeWidth={1.2} strokeDasharray="3 2" />
                                  <path d="M302 152 L292 107" fill="none" stroke="#5aa9d6" strokeWidth={1} />
                                  <text x={296} y={166} fontSize={11.5} fill="#2a7ea8">小湖 12</text>
                                  <text x={8} y={256} fontSize={12.5} fill="#4a5568">18 × 26 = 468 → 休闲 = 468 ÷ 13 = 36（亩）</text>
                                  <text x={8} y={278} fontSize={12.5} fontWeight="700" fill="#c0392b">陆地 = 36 − 12 = 24 亩</text>
                                </svg>
                                <figcaption>四个功能区里，<b>仓储与生产是对角、营销与休闲是对角</b>；对角两块之积相等，一步求出休闲区总面积，
                                  再减掉湖面才是「可利用陆地」。</figcaption>
                              </figure>
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
      <Block>
                    <BlockTitle>12. 坐标构造（两点间距离）</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">AB = √[ (x₁−x₂)² + (y₁−y₂)² ]</span>
                    </Callout>
                    <Callout variant="tip">几何没思路时的万能兜底：<b>建坐标系把图形代数化</b>——把关键点放到格点上，用距离公式硬算。</Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题23 · 坐标构造（方位角 · 2024 广东）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>甲、乙、丙三艘船在海上航行。某一时刻，甲观测到乙位于它的北偏西 30° 方向，甲、乙相距 6 千米；甲观测到丙位于它的正西方向，甲、丙相距 6 千米。则乙与丙之间的距离为（　　）千米。</ExampleQuestion>
                <ExampleOptions>A.3　B.4　C.5　D.6</ExampleOptions>
                <ExampleAnswer>
                    <b>解析：</b>「方位角 + 两点距离」→ <b>建坐标系</b>，把方位角翻译成坐标。<br />以甲为原点、正东为 x 轴、正北为 y 轴：<br />· 丙在甲正西 6 千米 → 丙 <b>(−6, 0)</b>；<br />· 乙在甲北偏西 30°、距 6 千米 → 向北的分量 = 6cos30° = 3√3，向西的分量 = 6sin30° = 3 → 乙 <b>(−3, 3√3)</b>。<br />乙丙距离 = √[(−6 + 3)² + (0 − 3√3)²] = √(9 + 27) = √36 = <b>6</b> 千米。<br /><span style={{ color: '#6b7280' }}>要点：北偏西 30° 意味着「先向北、再向西偏 30°」，所以 x 取 −6sin30°、y 取 6cos30°，两者别记反。</span>
                    <figure className="fig">
                    <svg viewBox="0 0 460 300" role="img" aria-label="三船方位图：甲为原点，乙在北偏西30度距6千米，丙在正西距6千米，求乙丙距离">
                      <path d="M250 250 L250 150" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="5 4" fill="none" />
                      <path d="M250 150 l-5 9 h10 z" fill="#6b7280" />
                      <text x={257} y={154} fontSize={12.5} fill="#6b7280">正北</text>
                      <path d="M250 200 A50 50 0 0 0 225 207" stroke="#f59e0b" strokeWidth={1.8} fill="none" />
                      <text x={231} y={188} fontSize={12.5} fontWeight="700" fill="#b8730d">30°</text>
                      <path d="M250 250 L118 250" stroke="#6b7280" strokeWidth={1.8} strokeDasharray="6 4" fill="none" />
                      <path d="M250 250 L184 136" stroke="#4f7cff" strokeWidth={2} fill="none" />
                      <path d="M184 136 L118 250" stroke="#b91c1c" strokeWidth={2.2} fill="none" />
                      <circle cx={250} cy={250} r={6} fill="#4f7cff" />
                      <circle cx={184} cy={136} r={6} fill="#2ecc71" />
                      <circle cx={118} cy={250} r={6} fill="#ff6b6b" />
                      <text x={258} y={272} fontSize={13.5} fontWeight="700" fill="#2b4b9b">甲</text>
                      <text x={172} y={126} fontSize={13.5} fontWeight="700" fill="#1a7a45">乙</text>
                      <text x={94} y={272} fontSize={13.5} fontWeight="700" fill="#b91c1c">丙</text>
                      <text x={150} y={242} fontSize={12.5} fill="#6b7280">6 千米</text>
                      <text x={196} y={228} fontSize={12.5} fill="#2b4b9b">6 千米</text>
                      <text x={100} y={196} fontSize={12.5} fontWeight="700" fill="#b91c1c">? 千米</text>
                    </svg>
                    <figcaption>图：以甲为原点建系 —— 丙在正西 6 千米处、乙在<b>北偏西 30°</b> 距甲 6 千米处，
                      所求为乙、丙之间的直线距离（红色）。两边都是 6 千米、夹角 60°，构成等边三角形。</figcaption>
                  </figure>
                  <span className="correct">答案：D</span>
                  </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>13. 立体几何：切割、涂色、拼合</BlockTitle>
      
                  <figure className="fig">
                    <svg viewBox="0 0 460 290" role="img" aria-label="正方体涂色分块">
                      <polygon points="115,55 265,55 210,110 60,110" fill="#e6ecff" stroke="#3f4a5f" strokeWidth={1.6} />
                      <polygon points="265,55 265,205 210,260 210,110" fill="#dbe4ff" stroke="#3f4a5f" strokeWidth={1.6} />
                      <polygon points="60,110 210,110 210,260 60,260" fill="#ffffff" stroke="#3f4a5f" strokeWidth={1.6} />
                      <path d="M110 110 L110 260 M160 110 L160 260 M60 160 L210 160 M60 210 L210 210" stroke="#9fb2d8" strokeWidth={1} />
                      <rect x={60} y={110} width={50} height={50} fill="#ffd6d6" />
                      <rect x={110} y={110} width={50} height={50} fill="#ffe8c2" />
                      <rect x={110} y={160} width={50} height={50} fill="#c9dbff" />
                      <path d="M60 110 L60 260 M60 110 L110 110" fill="none" stroke="#3f4a5f" strokeWidth={1.6} />
                      <circle cx={60} cy={110} r={4} fill="#ff4757" />
                      <text x={248} y={118} fontSize={14} fill="#ff4757" fontWeight="700">① 三面 ← 8 个顶点</text>
                      <text x={248} y={152} fontSize={14} fill="#e08b1a" fontWeight="700">② 两面 ← 每条棱上</text>
                      <text x={248} y={186} fontSize={14} fill="#4f7cff" fontWeight="700">③ 一面 ← 每个面中间</text>
                      <text x={248} y={220} fontSize={14} fill="#6b7280" fontWeight="700">④ 零面 ← 藏在内部</text>
                      <text x={248} y={252} fontSize={13} fill="#6b7280">棱长 n，切成 n³ 块</text>
                    </svg>
                    <figcaption>棱长 n 的正方体，表面涂色后切成 n³ 个小方块：① 三面涂色 = <b>8</b>；② 两面涂色 = <b>(n−2)×12</b>；③ 一面涂色 = <b>(n−2)²×6</b>；④ 零面（内部）= <b>(n−2)³</b>。</figcaption>
                  </figure>
                    <DataTable>
                      <tr><th>考法</th><th>结论</th></tr>
                      <tr><td>正方体切成两块</td><td>表面积<b>增加 2 个切面</b>（多出来的是两个截面）</td></tr>
                      <tr><td>棱长 n 的正方体表面涂色后切成 n³ 个小正方体</td><td>三面涂色 = <b>8</b>（8 个顶点）<br />两面涂色 = <b>(n−2)×12</b>（棱上非顶点）<br />一面涂色 = <b>(n−2)²×6</b>（面内非棱）<br />零面涂色 = <b>(n−2)³</b>（内部）</td></tr>
                      <tr><td>同底同高的锥体与柱体</td><td>圆锥体积 = 圆柱体积的 <b>⅓</b></td></tr>
                      <tr><td>容器注水 / 水深变化</td><td>抓住<b>水的体积不变</b>，用「底面积 × 高」列式</td></tr>
                    </DataTable>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题24 · 正方体涂色</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>棱长为 5 的正方体表面全部涂上红漆，再切成 125 个棱长 1 的小正方体。其中恰好两面涂色的有多少个？</ExampleQuestion>
                      <ExampleOptions>A.36　B.48　C.54　D.60</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>n = 5 → 两面涂色 = <b>(n−2) × 12</b> = 3 × 12 = <b>36</b><br />
                        （对照：三面 = 8；一面 = (5−2)²×6 = 54；零面 = 3³ = 27。合计 8+36+54+27 = 125 ✅）<br />
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>14. 同比例放缩（核心考点）</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">长度 × N → 面积 × N² → 体积 × N³</span><br />
                      <span className="formula">角度不变</span>
                    </Callout>
                    <Callout variant="key"><b>四条分开记（讲义原列 ——「变成几倍」和「增长几倍」差 1）：</b><br />
                      ① <b>对应角度不变</b>（相似图形角度永远不变）；<br />
                      ② 周长<b>变为</b> N 倍，<b>增长了 (N − 1) 倍</b>；<br />
                      ③ 面积<b>变为</b> N² 倍，<b>增长了 (N² − 1) 倍</b>；<br />
                      ④ 体积<b>变为</b> N³ 倍，<b>增长了 (N³ − 1) 倍</b>。
                    </Callout>
                    <Callout variant="tip">看题干用词：问「<b>是</b>原来的几倍」→ 直接用 N / N² / N³；问「<b>比原来多了 / 增长了</b>几倍」→ <b>再减 1</b>。这一步看错，整题白算。</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题25 · 同比例放缩</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一个正方体的棱长扩大为原来的2倍，则表面积扩大为原来的几倍？体积扩大为原来的几倍？</ExampleQuestion>
                      <ExampleOptions>A.2倍、4倍　B.4倍、8倍　C.4倍、6倍　D.8倍、12倍</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>长度×2 → 面积×2²=<b>4倍</b> → 体积×2³=<b>8倍</b><br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                              <Example>
                    <ExampleHeader>📝 例题26 · 同比例放缩（圆锥倒置 · 2025 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一个空的倒置的圆锥形容器，倒入 1 瓶固定容量的水后，水的高度恰好为容器高度的一半。若要使容器盛满水，则需要再倒入水的瓶数为（　　）。</ExampleQuestion>
                      <ExampleOptions>A.5 瓶　B.7 瓶　C.8 瓶　D.10 瓶</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>倒置圆锥（尖朝下）里装水，水面下是一个<b>与容器相似的小圆锥</b>。
                              ① 求相似比：小圆锥高 : 容器高 = (h/2) : h = <b>1 : 2</b>；
                              ② <b>同比例放缩：体积比 = 相似比的立方</b> → V水 : V容器 = (1/2)³ = <b>1/8</b>；
                              ③ 所以 1 瓶水 = 容器的 ⅛ → 盛满共需 8 瓶 → 还需 <b>8 − 1 = 7</b> 瓶。
                              要点：<b>长度比 → 面积比平方、体积比立方</b>，这是「同比例放缩」的核心；
                              反过来，由「体积是 ⅛」也能推出「高是一半」，两个方向都要会。
                    <figure className="fig">
                      <svg viewBox="0 0 460 312" role="img" aria-label="倒置圆锥容器中水高为容器高一半">
                        <text x={14} y={22} fontSize={13.5} fill="#4f7cff" fontWeight="700">水高 = 容器高的一半 → 相似比 1 : 2 → 体积比 1 : 8</text>
                        <polygon points="230,245 140,60 320,60" fill="#f2f6ff" stroke="#3f4a5f" strokeWidth={1.8} />
                        <polygon points="230,245 185,152.5 275,152.5" fill="#cfe0ff" stroke="#4f7cff" strokeWidth={1.6} />
                        <line x1={185} y1={152.5} x2={275} y2={152.5} stroke="#4f7cff" strokeWidth={2} />
                        <line x1={350} y1={60} x2={350} y2={245} stroke="#6b7280" strokeWidth={1.2} />
                        <line x1={344} y1={60} x2={356} y2={60} stroke="#6b7280" strokeWidth={1.2} />
                        <line x1={344} y1={245} x2={356} y2={245} stroke="#6b7280" strokeWidth={1.2} />
                        <text x={358} y={158} fontSize={13} fill="#6b7280">h</text>
                        <line x1={300} y1={152.5} x2={300} y2={245} stroke="#ff6b6b" strokeWidth={1.2} />
                        <line x1={294} y1={152.5} x2={306} y2={152.5} stroke="#ff6b6b" strokeWidth={1.2} />
                        <line x1={294} y1={245} x2={306} y2={245} stroke="#ff6b6b" strokeWidth={1.2} />
                        <text x={306} y={204} fontSize={13} fill="#ff6b6b" fontWeight="700">h/2</text>
                        <text x={196} y={214} fontSize={13} fill="#4f7cff" fontWeight="700">1 瓶水</text>
                        <text x={14} y={278} fontSize={13} fill="#6b7280">V水 : V容器 = (h/2 : h)³ = (1/2)³ = 1/8</text>
                        <text x={14} y={298} fontSize={13} fill="#6b7280">容器共能装 8 瓶　→　还需 7 瓶</text>
                      </svg>
                      <figcaption>倒置圆锥里装水，水面始终是一个<b>与容器相似的小圆锥</b>：相似比 = 高之比 = 1 : 2；
                        体积比 = 相似比的<b>立方</b> = 1 : 8。所以 1 瓶水只占容器的 ⅛。</figcaption>
                    </figure>
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
      <Block>
                    <BlockTitle>15. 几何最值理论</BlockTitle>
                    <PointList>
                      <li>周长一定 → 越接近圆，面积越大</li>
                      <li>面积一定 → 越接近圆，周长越小</li>
                      <li>表面积一定 → 越接近球，体积越大</li>
                      <li>体积一定 → 越接近球，表面积越小</li>
                    </PointList>
                    <Callout variant="key"><b>常考的「特殊矩形」（讲义原列）：</b><br />
                      · 四边形<b>周长一定</b>时，<b>正方形</b>的面积最大；<br />
                      · 四边形<b>面积一定</b>时，<b>正方形</b>的周长最小。
                    </Callout>
                    <SubPoint>道理同上：所有四边形里<b>正方形最接近圆</b>。所以题目把范围收窄到"四边形"时，答案基本都是正方形。</SubPoint>
                    <Callout variant="key"><b>两条「跳出圆的直觉」的结论（讲义原列）：</b><br />
                      · <b>椭圆</b>（长半轴 a、短半轴 b）的<b>内接矩形</b>，最大面积 = <b>2ab</b>；<br />
                      · 记忆锚点：椭圆的面积是 πab，内接矩形的上限就是 2ab（比椭圆小、比正方形大），看到"内接矩形 + 最值"直接写 2ab。</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题27 · 几何最值</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>用一根长12米的铁丝围成一个平面图形，围成什么图形面积最大？</ExampleQuestion>
                      <ExampleOptions>A.正方形　B.长方形　C.圆形　D.三角形</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>周长一定，越接近圆面积越大<br />
                        <span className="correct">答案：C（圆形面积最大）</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题28 · 几何最值（体积一定求表面积最小）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>用同样体积的材料做成一个立体，做成下面哪种形状时<b>表面积最小</b>（最省材料）？</ExampleQuestion>
                      <ExampleOptions>A.正方体　B.长宽高不等的长方体　C.球体　D.圆柱体</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>四句口诀成对记：
                              周长一定 → 越接近圆，面积越大；面积一定 → 越接近圆，周长越小。
                              <b>表面积一定 → 越接近球，体积越大；体积一定 → 越接近球，表面积越小。</b>
                              本题是"体积一定求表面积最小" → 直接用第三对 → 越接近球越好 → 选 <b>球体</b>。
                              把四句当成两个"方向相反的极端"记：平面图形里极值是<b>圆</b>，立体图形里极值是<b>球</b>，
                              问"最大/最小"时，先判断量恒定的是哪一个，再往"圆/球"方向靠。
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>16. 最短路径</BlockTitle>
      
                  <figure className="fig">
                    <svg viewBox="0 0 460 250" role="img" aria-label="镜面反射求最短路径">
                      <line x1={30} y1={140} x2={430} y2={140} stroke="#3f4a5f" strokeWidth={1.8} />
                      <text x={436} y={145} fontSize={13} fill="#6b7280">l</text>
                      <path d="M195 140 L300 64" stroke="#9fb2d8" strokeWidth={1.4} strokeDasharray="5 4" />
                      <path d="M90 70 L195 140 L300 90" stroke="#4f7cff" strokeWidth={2.2} fill="none" />
                      <path d="M195 140 L300 210" stroke="#ff6b6b" strokeWidth={1.6} strokeDasharray="5 4" />
                      <circle cx={90} cy={70} r={5} fill="#4f7cff" />
                      <circle cx={300} cy={90} r={5} fill="#4f7cff" />
                      <circle cx={300} cy={210} r={5} fill="#ff6b6b" />
                      <circle cx={195} cy={140} r={5} fill="#2ecc71" />
                      <text x={66} y={64} fontSize={15} fill="#1a1a2e" fontWeight="700">A</text>
                      <text x={308} y={86} fontSize={15} fill="#1a1a2e" fontWeight="700">B</text>
                      <text x={308} y={218} fontSize={15} fill="#ff6b6b" fontWeight="700">B′</text>
                      <text x={182} y={132} fontSize={15} fill="#2ecc71" fontWeight="700">P</text>
                      <text x={30} y={30} fontSize={14} fill="#4f7cff" fontWeight="700">把 B 翻折成 B′，连 AB′ 交 l 于 P，AP + PB 最短</text>
                    </svg>
                    <figcaption>两点在直线<b>同侧</b>：把其中一点沿直线「镜像翻折」到另一侧，再直接连线，与直线的交点就是最短路径的落脚点（AP + PB = AB′）。两点<b>异侧</b>时直接连线即可。</figcaption>
                  </figure>
                    <Callout variant="key">
                      <b>两点同侧</b>：利用镜像对称，做其中一个点的镜像，连线下最短<br />
                      <b>两点异侧</b>：直接连线（两点之间线段最短）
                    </Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题29 · 最短路径（镜像翻折）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>在公路 l 的同侧有 A、B 两个村庄，A 到公路的距离为 3 千米，B 到公路的距离为 5 千米，两村在公路上的投影相距 6 千米。要在公路上建一个车站 P，使 PA + PB 最短，最短距离是多少千米？</ExampleQuestion>
                <ExampleOptions>A.8　B.9　C.10　D.12</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>两点在直线<b>同侧</b> → 把 B 沿公路翻折到另一侧得 B′。此时 PA + PB = PA + PB′，当 A、P、B′ 三点共线时最短，最短距离就是 <b>AB′</b>。<br />作直角三角形：水平方向 = 6 千米，竖直方向 = 3 + 5 = 8 千米，则 AB′ = √(6² + 8²) = √100 = <b>10</b> 千米。
                  <br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>17. 常用根号（背）</BlockTitle>
                    <DataTable>
                      <tr><td>√2 ≈ 1.414</td><td>√3 ≈ 1.732</td></tr>
                      <tr><td>√5 ≈ 2.236</td><td>√6 ≈ 2.449</td></tr>
                      <tr><td>√7 ≈ 2.646</td><td>√8 ≈ 2.828</td></tr>
                      <tr><td>√10 ≈ 3.162</td><td>π ≈ 3.14</td></tr>
                    </DataTable>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题30 · 常用根号（估算）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>一个直角三角形的两条直角边分别为 2 和 3，则斜边长约为多少？（√13 ≈ 3.61）</ExampleQuestion>
                <ExampleOptions>A.3.4　B.3.6　C.3.9　D.4.2</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>斜边 = √(2² + 3²) = √13。背过的常用根号里没有 √13，就用邻近的数估：3.6² = 12.96，3.7² = 13.69，可知 √13 ≈ 3.61，选 <b>3.6</b>。<br />考场上根号题常常只需要估到一位小数，背熟 √2 ≈ 1.414、√3 ≈ 1.732、√5 ≈ 2.236 就够了。
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Callout variant="tip">考试时如果时间够，几何题90%的概率选<b>居中</b>的选项。可带尺子（或用身份证）测量比例。</Callout>
          
      <Block>
                    <BlockTitle>18. 几何最优构造（手工操作题）</BlockTitle>
                    <Callout variant="key">
                      <b>识别：</b>「铺 / 裁 / 贴 / 覆盖 / 摆放」类，问最多能放几个、最少要几个 —— 纯几何拼摆，考的是<b>动手能力</b>。<br />
                      <b>两类模型：</b><br />
                      · <b>覆盖型</b>（几个圆盖住一块地）：把圆形能盖住的最大正方形抠出来 —— 半径 R 的圆，内接正方形边长 = <b>R√2</b>；然后看大地块能切成几块。<br />
                      · <b>裁剪型</b>（大板上裁小片，有间隔）：<b>一行一行地排</b>，先算每行能排几片（n 片占 nb + (n−1)×间隔 ≤ 板长），<br />
                      　 再算能排几行；<b>务必试一次「横竖混排」</b>，往往比单一方向多出好几片。
                    </Callout>
                    <Callout variant="tip">间隔类裁剪的死穴：只按一个方向排。先按「小边对大边」和「大边对大边」各算一遍，取大的。</Callout>
                  </Block>
                                          <Example>
                    <ExampleHeader>📝 例题31 · 几何最优构造（覆盖型 · 2025 江苏）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某单位在边长为 200 米的正方形广场上组织一场招聘会，计划安排若干名工作人员提供咨询服务，每名工作人员入场后将分别随机站在一个位置上，其服务半径不超过 50√2 米。若要确保咨询服务全覆盖，则至少需要安排工作人员（　　）。</ExampleQuestion>
                      <ExampleOptions>A.4 名　B.5 名　C.6 名　D.7 名</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>把广场切成 4 块 <b>100 米 × 100 米</b> 的正方形，每组把 1 个人放在该块的正中心。
                              检查这个圆能不能盖住一整块：圆心到正方形<b>顶点</b>的距离最远，
                              距离 = 半对角线 = √(50² + 50²) = 50√2（米）—— 恰好等于服务半径，<b>刚好够</b>。
                              所以 1 个人恰好负责一块 100 × 100，200 × 200 的广场需要 2 × 2 = <b>4</b> 名。
                              要点（覆盖型模板）：<b>半径 R 的圆能盖住的最大正方形，边长 = R√2</b>（正方形对角线的一半即 R）。
                              先算出「一个人能管多大」，再拿总面积去除 —— 别一上来就凭感觉数人。
                    <figure className="fig">
                      <svg viewBox="0 0 460 300" role="img" aria-label="边长200的正方形广场用4个半径50根号2的圆覆盖">
                        <text x={14} y={22} fontSize={13.5} fill="#4f7cff" fontWeight="700">半径 50√2 的圆 → 恰好盖住一块 100 × 100 的正方形</text>
                        <rect x={130} y={60} width={200} height={200} fill="#fbfcff" stroke="#3f4a5f" strokeWidth={2} />
                        <path d="M230 60 L230 260 M130 160 L330 160" stroke="#cbd5e1" strokeWidth={1.4} strokeDasharray="5 4" />
                        <circle cx={180} cy={110} r={70.7} fill="#4f7cff" fillOpacity="0.12" stroke="#4f7cff" strokeWidth={1.6} />
                        <circle cx={280} cy={110} r={70.7} fill="#2ecc71" fillOpacity="0.12" stroke="#2ecc71" strokeWidth={1.6} />
                        <circle cx={180} cy={210} r={70.7} fill="#f39c12" fillOpacity="0.12" stroke="#f39c12" strokeWidth={1.6} />
                        <circle cx={280} cy={210} r={70.7} fill="#ff6b6b" fillOpacity="0.12" stroke="#ff6b6b" strokeWidth={1.6} />
                        <circle cx={180} cy={110} r={3.4} fill="#4f7cff" />
                        <circle cx={280} cy={110} r={3.4} fill="#2ecc71" />
                        <circle cx={180} cy={210} r={3.4} fill="#f39c12" />
                        <circle cx={280} cy={210} r={3.4} fill="#ff6b6b" />
                        <text x={344} y={112} fontSize={13} fill="#6b7280">圆心即各块</text>
                        <text x={344} y={130} fontSize={13} fill="#6b7280">中心位置</text>
                        <text x={120} y={282} fontSize={12.5} fill="#6b7280">200×200 的广场 → 恰需 4 块</text>
                      </svg>
                      <figcaption>覆盖型模板：人站在圆心，服务半径 R。这个圆能盖住的<b>最大正方形边长 = R√2</b>
                        （因为正方形对角线的一半就是 R）。本题 R = 50√2 → 边长 100 米 → 边长 200 米的广场只要
                        <b>2 × 2 = 4</b> 块。</figcaption>
                    </figure>
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题32 · 几何最优构造（裁剪型 · 2025 四川）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某工匠计划在 700 × 115 厘米的钢板上裁剪若干大小为 70 × 40 厘米的钢片，且在裁剪时，每块钢片之间还应保留至少 5 厘米的间隔。问最多能裁剪出多少块？</ExampleQuestion>
                      <ExampleOptions>A.23　B.24　C.25　D.26</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>先按<b>单一方向</b>排（长边 70 沿 700 方向）：
                              每片占 70 厘米、片间 5 厘米 → n 片占 70n + 5(n−1) ≤ 700 → n ≤ 9.4 → 9 片；
                              宽度方向：每片占 40 厘米，40m + 5(m−1) ≤ 115 → m ≤ 2.6 → 2 排 → 共 9 × 2 = 18 片（余宽 30 厘米浪费了）。
                              再试<b>横竖混排</b>（这是本题的关键）：
                              · 一排<b>竖放</b>（40 宽 × 70 高）：40n + 5(n−1) ≤ 700 → n = <b>15</b> 片，占高 70 厘米；
                              · 剩下 115 − 70 − 5 = 40 厘米，正好再排一排<b>横放</b>（70 宽 × 40 高）：70m + 5(m−1) ≤ 700 → m = <b>9</b> 片。
                              合计 15 + 9 = <b>24</b> 片，且高度刚好卡满 70 + 5 + 40 = 115。
                              要点：裁剪型题目<b>一定要试一次横竖混排</b>，单一方向排出来的往往不是最多。
                    <figure className="fig">
                      <svg viewBox="0 0 482 180" role="img" aria-label="700乘115钢板上横竖混排裁出24片">
                        <text x={14} y={26} fontSize={13.5} fill="#4f7cff" fontWeight="700">700 × 115 的钢板，裁 70 × 40 的钢片，片间留 5 厘米</text>
                        <rect x={20} y={60} width={380} height={62.4} fill="#fbfcff" stroke="#3f4a5f" strokeWidth={1.8} />
                        <g fill="#dbe4ff" stroke="#4f7cff" strokeWidth={1}>
                          <rect x={20} y={60} width={38} height={21.7} /><rect x={60.71} y={60} width={38} height={21.7} />
                          <rect x={101.42} y={60} width={38} height={21.7} /><rect x={142.13} y={60} width={38} height={21.7} />
                          <rect x={182.84} y={60} width={38} height={21.7} /><rect x={223.55} y={60} width={38} height={21.7} />
                          <rect x={264.26} y={60} width={38} height={21.7} /><rect x={304.97} y={60} width={38} height={21.7} />
                          <rect x={345.68} y={60} width={38} height={21.7} />
                        </g>
                        <g fill="#d9f2e3" stroke="#2ecc71" strokeWidth={1}>
                          <rect x={20} y={84.4} width={21.7} height={38} /><rect x={44.41} y={84.4} width={21.7} height={38} />
                          <rect x={68.82} y={84.4} width={21.7} height={38} /><rect x={93.23} y={84.4} width={21.7} height={38} />
                          <rect x={117.64} y={84.4} width={21.7} height={38} /><rect x={142.05} y={84.4} width={21.7} height={38} />
                          <rect x={166.46} y={84.4} width={21.7} height={38} /><rect x={190.87} y={84.4} width={21.7} height={38} />
                          <rect x={215.28} y={84.4} width={21.7} height={38} /><rect x={239.69} y={84.4} width={21.7} height={38} />
                          <rect x={264.1} y={84.4} width={21.7} height={38} /><rect x={288.51} y={84.4} width={21.7} height={38} />
                          <rect x={312.92} y={84.4} width={21.7} height={38} /><rect x={337.33} y={84.4} width={21.7} height={38} />
                          <rect x={361.74} y={84.4} width={21.7} height={38} />
                        </g>
                        <text x={406} y={76} fontSize={12.5} fill="#4f7cff" fontWeight="700">上排 9 片</text>
                        <text x={406} y={108} fontSize={12.5} fill="#1a7a45" fontWeight="700">下排 15 片</text>
                        <text x={20} y={146} fontSize={13} fill="#6b7280">只按一个方向排：最多 18 片；<b>横竖混排</b>：15 + 9 = 24 片（高度 70 + 5 + 40 = 115 刚好卡满）</text>
                      </svg>
                      <figcaption>裁剪型模板：<b>一行一行地算</b>——n 片占 <b>n × 边长 + (n−1) × 间隔 ≤ 板长</b>。
                        本题竖放 15 片（占高 70）+ 横放 9 片（占高 40），加中间 5 厘米间隔正好 115 厘米，
                        比单一方向多出 6 片。</figcaption>
                    </figure>
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
      <Block>
                    <BlockTitle>19. 补充考点 7：切长最短（秒杀技巧）</BlockTitle>
                    <Callout variant="key"><b>特征：</b>「<b>对角顶点</b>、沿<b>表面</b>行走」——问最短距离</Callout>
                    <Callout variant="formula">
                      <span className="formula">最短距离 = √( a² + (b + c)² )</span><br />
                      注：<b>长不变，两个短边相加组成另一条边</b>
                    </Callout>
                    <SubPoint>原理：把长方体表面<b>展开成平面</b>，最短路就是一条直线。展开方式有三种：</SubPoint>
                    <SubPoint>· √( a² + (b+c)² )　· √( b² + (a+c)² )　· √( c² + (a+b)² )　→ <b>取最小</b>。</SubPoint>
                    <Callout variant="tip">秒杀：<b>把最长的那条棱当 a，另外两条棱相加当 (b+c)</b>，就是三种展开里最小的那一种。<br />
                      例（5,4,3）：√(3²+9²)=√90、√(5²+7²)=√74、√(4²+8²)=√80 → 最短 = √74。</Callout>
                  </Block>
                    <Example>
                    <ExampleHeader>📝 例题33 · 切长最短（2006 江西）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>右图为长、宽、高分别是 4cm、3cm、5cm 的长方体，如果一只小虫从顶点 A 爬到顶点 B（对角顶点），其爬行的最短距离为：</ExampleQuestion>
                      <ExampleOptions>A. 4√5　B. √74　C. 3√10　D. √70</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>三种展开各算一次：√(3² + (5+4)²) = √90；√(5² + (4+3)²) = √74；√(4² + (5+3)²) = √80。<br />取最小 → <b>√74</b>。<br />用秒杀公式：最长棱是 5，另两条 4 + 3 = 7 → √(5² + 7²) = √74。<br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
    </>
  )
}
