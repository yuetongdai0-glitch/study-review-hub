import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList, SubPoint } from '@/components/content'

/**
 * 六、经济利润问题
 *
 * @returns 该节正文。
 */
export default function S8(): ReactElement {
  return (
    <>
      <Block>
                    <BlockTitle>1. 基础公式</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">利润 = 售价 - 成本（进价）</span><br />
                      <span className="formula">利润率 = 利润 ÷ 成本</span><br />
                      <span className="formula">售价 = 成本 × (1 + 利润率) = 进价 + 利润</span><br />
                      <span className="formula">总利润 = 单利润 × 销量 = 总收入 - 总成本</span><br />
                      <span className="formula">总价 = 单价 × 数量</span><br />
                      <span className="formula">定价 × 折扣 = 售价</span>
                    </Callout>
                    <Callout variant="tip">
                      <b>注意区分：</b>数量关系中利润率 = 利润/成本；资料分析中利润率 = 利润/收入
                    </Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题1 · 基础经济利润（2025 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>小明在网络二手交易平台按照每张 150 元的价格转手了两张珍藏版 CD，其中一张盈利 25%，另一张亏损 25%，则小明转手这两张 CD 总的盈亏情况是（　　）。</ExampleQuestion>
                      <ExampleOptions>A.不盈不亏　B.盈利 20 元　C.亏损 20 元　D.亏损 25 元</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>150 元是<b>售价</b>，要先用「售价 = 成本 ×(1 ± 利润率)」分别反求两张的成本：
                              ① 盈利 25% 的那张：成本 = 150 ÷ 1.25 = <b>120</b> 元 → 盈利 150 − 120 = <b>30</b> 元；
                              ② 亏损 25% 的那张：成本 = 150 ÷ 0.75 = <b>200</b> 元 → 亏损 200 − 150 = <b>50</b> 元；
                              ③ 合计：+30 − 50 = <b>−20</b> 元，即总共<b>亏损 20 元</b>。
                              要点：「一张赚 25%、一张亏 25%」<b>绝不是"不盈不亏"</b> —— 同样的售价下，亏损的那张成本更高，亏的绝对额一定更大。
                              把两个成本都算出来再相加，是这类"一盈一亏"题的固定动作。
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>2. 三种解法</BlockTitle>
                    <PointList>
                      <li><b>资料分析法</b>：结合资料分析公式解决</li>
                      <li><b>方程法</b>：有具体钱数，根据等量关系设未知数</li>
                      <li><b>赋值法</b>：常赋值成本为100，减小计算量</li>
                    </PointList>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题2 · 三种解法（乘积关系 · 2022 北京）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>农户张某今年年初将一块长方形农田扩建为正方形农田，使得正方形边长与长方形的长相同，今年的农作物产量是去年的 1.5 倍。已知今年农作物亩产量比去年高 20%，则原来长方形农田的长是宽的多少倍？</ExampleQuestion>
                      <ExampleOptions>A.1.2　B.1.25　C.1.5　D.1.6</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>核心是<b>乘积关系 A = B × C</b>：<b>总产量 = 面积 × 亩产量</b>。<br />今年的量都化成「去年的倍数」：总产量 = 1.5 倍，亩产 = 1 + 20% = 1.2 倍 →<br />面积 = 1.5 ÷ 1.2 = <b>1.25 倍</b>（一个因子放大几倍，另一个因子就缩小几倍，直接相除）。<br />再看图形：正方形边长 = 长方形的<b>长</b>。<br />正方形面积 = 长²，长方形面积 = 长 × 宽 → 面积比 1.25 = 长² ÷ (长 × 宽) = 长 ÷ 宽。<br />所以长是宽的 <b>1.25</b> 倍。
                    <span className="correct">答案：B</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                              <Example>
                    <ExampleHeader>📝 例题3 · 三种解法（赋值法 · 2023 广东事业单位）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>五一节期间，某商场开展促销活动，将一款冰箱的价格下调 20% 销售。促销结束后，这款冰箱计划恢复原价销售，那么此时该商品的价格应上调（　　）。</ExampleQuestion>
                      <ExampleOptions>A.10%　B.15%　C.20%　D.25%</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>题目只给百分数、没给具体钱数 → <b>赋值法</b>，赋原价 = 100 元。
                              ① 下调 20% 后售价 = 100 × (1 − 20%) = <b>80</b> 元；
                              ② 要从 80 元涨回 100 元，涨的金额 = 20 元；
                              ③ <b>上涨率要以"当前价"为基数</b>（不是原价）：20 ÷ 80 = <b>25%</b>。
                              对照三种解法：<br />· <b>赋值法</b>：本例 —— 赋 100 最快；<br />· <b>方程法</b>：设原价 P，P(1−20%)(1+x) = P → 0.8(1+x) = 1 → x = 25%；<br />· <b>资料分析法</b>：把"下调 20%"看作反向的增长率，用基期现期关系直接反推，同样得 25%。
                              要点：<b>"先降后涨"永远比"先涨后降"的百分数大</b> —— 因为涨的基数变小了。这是本类题的经典陷阱。
                        <span className="correct">答案：D</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>3. 分段计费</BlockTitle>
                    <Callout variant="key">方法：边读边画，找准分段临界点，分区间讨论计算</Callout>
                    <SubPoint>涉及水电、资费、提成等</SubPoint>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题4 · 分段计费（2021 河北 · 稿费纳税）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>假设个人出版著作所得稿费纳税方法如下：（1）稿费不超过 800 元不纳税；（2）超过 800 元但不超过 4000 元的部分纳税 10%；（3）超过 4000 元的部分纳税 15%。已知张教授出版一部著作，纳税 620 元，则张教授的这笔稿费是多少元？</ExampleQuestion>
                      <ExampleOptions>A.9000　B.8000　C.7000　D.6000</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>分段计费的固定做法 —— <b>先算各段的"封顶税额"，判断落在哪一段，再回代</b>：
                              ① 第一段（0～800）：不纳税；
                              ② 第二段（800～4000）：最多纳税 (4000 − 800) × 10% = <b>320</b> 元；
                              ③ 已知纳税 620 元 &gt; 320 元 → 说明<b>稿费一定超过 4000 元</b>，第三段也纳了税；
                              ④ 第三段纳税额 = 620 − 320 = <b>300</b> 元；
                              ⑤ 第三段税率 15% → 超过 4000 的部分 = 300 ÷ 15% = <b>2000</b> 元；
                              ⑥ 稿费 = 4000 + 2000 = <b>6000</b> 元。
                              要点：<b>别设未知数硬解</b> —— 先把每段的封顶额算出来（320 元），一步就定位到"超过 4000"这一段，再倒推超出部分。
                              水电费、出租车费、个税、医保自付比例，全都是同一套路。
                        <span className="correct">答案：D</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>4. 函数最值（利润最值）</BlockTitle>
                    <Callout variant="key">
                      单价↑ → 销量↓ → 二者的乘积 → <b>利润是一条开口向下的抛物线，有最大值</b><br />
                      <b>核心方法（抛物线原理）：</b>令利润 y = 0，解出 <b>两个根 x₁、x₂</b>（即"卖多少钱都是白干"的两个临界价），<br />
                      由抛物线的对称性，最大值一定在两个根的<b>正中间</b> → 最优点 x = <b>(x₁ + x₂) ÷ 2</b><br />
                      <b>两点式：</b>y = (a − x)(b + x) 在 x = (x₁ + x₂) ÷ 2 处取最值 —— 不用展开、不用背 −b/(2a)
                    </Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题5 · 利润最值（2020 江苏 · 抛物线两点式）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某商品的进货单价为 80 元，销售单价为 100 元，每天可售出 120 件。已知销售单价每降低 1 元，每天可多售出 20 件。若要实现该商品的销售利润最大化，则销售单价应降低的金额是（　　）。</ExampleQuestion>
                      <ExampleOptions>A.5 元　B.6 元　C.7 元　D.8 元</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>设单价降低 x 元，则单件利润 = 20 − x，销量 = 120 + 20x。
                              利润 y = (20 − x)(120 + 20x) —— 这是一条开口向下的<b>抛物线</b>。
                              <b>① 令 y = 0（抛物线原理）：</b>
                              　 · (20 − x) = 0 → x₁ = <b>20</b>（降到进价，单件不赚钱）；
                              　 · (120 + 20x) = 0 → x₂ = <b>−6</b>（涨 6 元，销量掉到 0）；
                              <b>② 取中点求对称轴：</b>x = (x₁ + x₂) ÷ 2 = (20 + (−6)) ÷ 2 = <b>7</b>；
                              <b>③ 结论：</b>单价降低 <b>7 元</b>时利润最大。
                              验证：降 7 元 → 单利 13 元、销量 260 件 → 利润 3380 元；降 6 元 → 14 × 240 = 3360 元；降 8 元 → 12 × 280 = 3360 元 —— 确实 7 元最大。
                              要点：<b>不展开二次函数、不背 −b/(2a)</b>，令 y = 0 解出两个根再取中点，两步出答案。
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
          
      <Block>
                    <BlockTitle>5. 经济函数图形（看图象，用排除法）</BlockTitle>
                    <Callout variant="key">
                      <b>识别：</b>题干给出<b>利润 y 与售价（或销量）x 的函数图象</b>，问最值点、递增区间、某个点对应多少。<br />
                      <b>方法：排除法 —— 不去算解析式，直接读图：</b><br />
                      · <b>与横轴的两个交点</b> = 利润为 0 的两个临界值（例如不赚钱的两个售价）；<br />
                      · <b>顶点 = 两个交点的中点</b>（抛物线对称）→ 这就是最值点的横坐标；<br />
                      · <b>左右对称</b>：关于顶点对称的两个 x，函数值相等，据此直接排除选项；<br />
                      · 开口向下 → 顶点处取<b>最大</b>值；开口向上 → 顶点处取<b>最小</b>值。
                    </Callout>
                    <Callout variant="tip">图形题核心是<b>读图</b>而不是算：先标出交点，再取中点，通常 10 秒内就能锁定答案。</Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题6 · 经济函数图形（读图）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某商品的日利润 y（元）与售价 x（元）的关系如下图所示的抛物线，图象与 x 轴交于（20，0）和（60，0）两点。问日利润达到最大值时的售价是多少元？</ExampleQuestion>
                      <ExampleOptions>A.30　B.40　C.45　D.50</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>图象题不用求解析式，<b>看两个交点就够</b>：
                              ① 图象与 x 轴交于 x = 20 和 x = 60 —— 这是利润为 0 的两个临界售价；
                              ② 抛物线关于对称轴对称，<b>顶点（利润最大值）必在两个交点的正中间</b>：
                              　 售价 = (20 + 60) ÷ 2 = <b>40</b>（元）。
                              验证：售价 30 元与 50 元关于 40 对称，两者利润必然相等；只有 40 元处在顶点。
                              要点（图形类方法：排除法）：<b>先读交点、再取中点</b>，比硬算解析式快得多；
                              遇到「哪段利润递增 / 哪个点利润为负」这类问法，也是靠<b>左右两侧的对称性</b>直接排除选项。
                    <figure className="fig">
                      <svg viewBox="0 0 460 250" role="img" aria-label="利润随售价变化的抛物线，与横轴交于20和60">
                        <text x={14} y={22} fontSize={13.5} fill="#4f7cff" fontWeight="700">利润 y 与售价 x 的图象：开口向下的抛物线</text>
                        <line x1={50} y1={210} x2={418} y2={210} stroke="#3f4a5f" strokeWidth={1.8} />
                        <line x1={70} y1={240} x2={70} y2={76} stroke="#3f4a5f" strokeWidth={1.8} />
                        <text x={414} y={228} fontSize={13} fill="#6b7280">x</text>
                        <text x={76} y={72} fontSize={13} fill="#6b7280">y</text>
                        <path d="M70 210 Q220 10 370 210" fill="none" stroke="#4f7cff" strokeWidth={3} />
                        <line x1={220} y1={110} x2={220} y2={210} stroke="#ff6b6b" strokeWidth={1.4} strokeDasharray="5 4" />
                        <circle cx={70} cy={210} r={4.6} fill="#4f7cff" />
                        <circle cx={370} cy={210} r={4.6} fill="#4f7cff" />
                        <circle cx={220} cy={110} r={5} fill="#ff6b6b" />
                        <text x={62} y={228} fontSize={12.5} fill="#6b7280">20</text>
                        <text x={214} y={228} fontSize={12.5} fill="#6b7280">40</text>
                        <text x={362} y={228} fontSize={12.5} fill="#6b7280">60</text>
                        <text x={226} y={106} fontSize={12.5} fontWeight="700" fill="#ff6b6b">顶点：x = 40 时利润最大</text>
                        <text x={88} y={150} fontSize={12.5} fill="#2b4b9b">与 x 轴交于 20 和 60（利润为 0 的两个临界价）</text>
                        <text x={14} y={242} fontSize={13} fill="#6b7280">对称轴 = 两根中点 =（20 + 60）÷ 2 = 40</text>
                      </svg>
                      <figcaption>图象题的通用读法：<b>与 x 轴的两个交点</b>就是「利润为 0」的两个临界售价，
                        顶点（最值点）一定在两个交点的<b>正中间</b>。看到抛物线先找交点，中点就是最优售价。</figcaption>
                    </figure>
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>6. 补充考点 8：合并付费（省多少钱）</BlockTitle>
                    <Callout variant="key"><b>识别：</b>分段优惠（如「300 元及以下九折；300 元以上，其中 300 元九折、超出部分八折」），问「<b>合并结账比分开结账省多少</b>」</Callout>
                    <SubPoint><b>① 穷 + 富：</b>省的是「穷的那部分<b>原价</b>」在折扣上的差 —— 原价本来落在高折扣区，合并后被前面的大额吃掉了。</SubPoint>
                    <SubPoint><b>② 富 + 富：</b>省的是「<b>临界值那一段</b>」的折扣差。</SubPoint>
                    <Callout variant="tip">做法固定：<b>先把每笔的实付换回原价 → 再把总原价按分段规则算出合并实付 → 与分开实付相减</b>。</Callout>
                  </Block>
                    <Example>
                    <ExampleHeader>📝 例题7 · 合并付费（2013 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某商场开展购物优惠活动：一次购买 300 元及以下的商品九折优惠；一次购买 300 元以上的商品，其中 300 元九折优惠，超过的部分八折优惠。小王购物第一次付款 144 元，第二次又付款 310 元。如果他一次购买并付款，可以节省多少元？</ExampleQuestion>
                      <ExampleOptions>A. 16　B. 22.4　C. 30.6　D. 48</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>先换回原价：<br />· 第一次 144 元 &lt; 300×0.9 = 270 → 打的是九折 → 原价 = 144 ÷ 0.9 = <b>160</b>。<br />· 第二次 310 元 &gt; 270 → 原价 = 300 + (310 − 270) ÷ 0.8 = 300 + 50 = <b>350</b>（验证：270 + 50×0.8 = 310 ✓）。<br />合并原价 = 160 + 350 = 510 → 合并实付 = 270 + (510 − 300)×0.8 = 270 + 168 = <b>438</b>。<br />分开实付 = 144 + 310 = 454 → 节省 = 454 − 438 = <b>16</b>（元）。<br />
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
    </>
  )
}
