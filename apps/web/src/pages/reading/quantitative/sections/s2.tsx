import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList, SubPoint } from '@/components/content'

/**
 * 二、方程法
 *
 * @returns 该节正文。
 */
export default function S4(): ReactElement {
  return (
    <>
      <Block>
                    <BlockTitle>1. 普通方程（一个未知数x）</BlockTitle>
                    <PointList>
                      <li><b>设小不设大</b>：高照是你(x)的两倍 → 设"你"为x</li>
                      <li><b>出现比例设份数</b>：高照∶上岸 = 3∶2 → 设3x、2x</li>
                      <li><b>设中间量</b>：ta →(+10)高(-20)←你</li>
                    </PointList>
                    <Callout variant="key"><b>做题步骤三步走：</b>① <b>设未知数</b>（按上面三种技巧挑最好的设法）→ ② <b>找等量关系</b>（题目里那句"一共/相等/是几倍"就是）→ ③ <b>约分</b>（列完先约分再算，数字小一半）。</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题1 · 普通方程（出现比例设份数 · 2023 北京）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>张、王、李三人总共有 120 本书，张、王的书分别是李的 2 倍和 5 倍，则王有多少本书？</ExampleQuestion>
                      <ExampleOptions>A.65　B.70　C.75　D.80</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>三人的书都跟「李」有倍数关系 → <b>设李为 x 最省事</b>（出现比例就设份数，设最小的那个）。<br />张 = 2x，王 = 5x，列式：<b>2x + 5x + x = 120</b> → 8x = 120 → x = 15。<br />题目问王 → 王 = 5x = <b>75</b>。
                    <span className="correct">答案：C</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题2 · 普通方程（设中间量 · 2024 北京）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>小张和小王都想买一套原版外文书籍，该书费用比小张预算高 600 元，比小王预算高 580 元。如两人合买一套该外文书籍轮流看，则两人预算合计剩余 100 元。问该书价格为多少元？</ExampleQuestion>
                      <ExampleOptions>A.1080　B.1180　C.1280　D.1380</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>两人的预算都跟「书价」挂钩 → <b>设书价为 x</b>（这就是设中间量）：<br />小张预算 = x − 600，小王预算 = x − 580，两人合计 = (x − 600) + (x − 580) = 2x − 1180。<br />合买后剩 100 元 → <b>(2x − 1180) − x = 100</b> → x − 1180 = 100 → x = <b>1280</b>（元）。<br /><span style={{ color: '#6b7280' }}>验算：小张预算 680、小王 700，合计 1380；买书花 1280 → 剩 100 ✓</span>
                    <span className="correct">答案：C</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>2. 普通方程组（多个未知数）</BlockTitle>
                    <PointList>
                      <li>设XYZ，抓住问题消元求解</li>
                      <li>只用留下要的，消好消的</li>
                    </PointList>
                    <Callout variant="tip"><b>A与非A技巧：</b>问谁非谁。A = (非B + 非C - 非A) / 2</Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题3 · 普通方程组（多个未知数 · 2023 北京）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某公司去年的营业额比前年高 20%，今年的营业额比去年高 360 万元，比前年高 600 万元。这 3 年的营业额一共是多少万元？</ExampleQuestion>
                <ExampleOptions>A.4200　B.4440　C.4680　D.4920</ExampleOptions>
                <ExampleAnswer>
                    <b>解析：</b>出现「多主体（前年 / 去年 / 今年）+ 多时间」→ <b>设前年为 x</b>，其余全部用 x 表示：<br />· 去年 = 1.2x（比前年高 20%）；<br />· 今年有两种说法：① 去年 + 360 = <b>1.2x + 360</b>；② 前年 + 600 = <b>x + 600</b>。<br />两条都指今年 → 列方程：1.2x + 360 = x + 600 → 0.2x = 240 → <b>x = 1200</b>。<br />于是前年 1200、去年 1440、今年 1800，三年合计 = <b>4440</b> 万元。
                    <span className="correct">答案：B</span>
                  </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>3. 不定方程</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">ax + by = c（a,b,c已知，x,y为正整数）</span>
                    </Callout>
                    <PointList>
                      <li><b>奇偶性</b>：3x(奇)+4y(偶)=25 → x必为奇数</li>
                      <li><b>倍数（公因子）</b>：7x+3y=60 → 60和3y都是3的倍数 → x是3的倍数</li>
                      <li><b>尾数法</b>：看尾数特征排除</li>
                      <li><b>代入法</b>：选项代入验证</li>
                    </PointList>
                    <Callout variant="key"><b>什么时候用哪一招（判据，讲义原话）：</b><br />
                      · <b>倍数</b> —— 当 a 或 b 与 M <b>有公因子</b>时用（如 7x+3y=60，3 与 60 有公因子 3）；<br />
                      · <b>尾数</b> —— 当 a 或 b 的<b>尾数是 0</b>时用（如 37x+20y=271，20y 尾数必为 0，只看 37x 定尾数）；<br />
                      · <b>奇偶</b> —— 两个系数一奇一偶时用；<b>代入</b> —— 前面几招都不灵时的兜底。</Callout>
                    <Callout variant="key"><b>多个未知数的不定方程 ax + by + cz = M：</b>
                      未知数更多、方程只有一个 → 同样靠 <b>倍数特性、代入</b>两招（把三项的系数和常数放一起看有没有公因子，没有就代选项）。</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题4 · 不定方程（人数定值 · 2024 山东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某科技创新项目有 6 人投资，共筹资 110 万元。投资额度有 10 万元、20 万元和 30 万元三种。已知投资 10 万元的比投资 20 万元的多 2 人，问投资 30 万元的有多少人？</ExampleQuestion>
                      <ExampleOptions>A.2　B.3　C.4　D.5</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>设投资 20 万元的有 b 人 → 投资 10 万元的有 (b + 2) 人，投资 30 万元的有 c 人。两个方程，三个未知数（不定方程），靠「人数必须是整数」定值。<br />① <b>人数</b>：(b + 2) + b + c = 6 → <b>2b + c = 4</b>；<br />② <b>金额</b>：10(b + 2) + 20b + 30c = 110 → 30b + 30c = 90 → <b>b + c = 3</b>。<br />两式相减：b = 1 → c = 3 − 1 = <b>2</b>。<br />验算：10 万 3 人 + 20 万 1 人 + 30 万 2 人 = 6 人 ✓，金额 = 30 + 20 + 60 = 110 ✓
                    <span className="correct">答案：A</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题5 · 不定方程（奇偶法）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>3x + 4y = 25，x、y均为正整数，求 y 的值。</ExampleQuestion>
                      <ExampleOptions>A.1　B.2　C.4　D.5</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>4y是偶数，25是奇数 → <b>3x必为奇数</b> → x为奇数<br />
                        x=1时 y=(25-3)/4=5.5✗；x=3时 y=(25-9)/4=4 ✓<br />
                        <span className="correct">答案：C（y=4）</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>4. 不定方程组</BlockTitle>
                    <PointList>
                      <li><b>整数型</b>：消元时注意问啥设啥；提速用约分列式</li>
                      <li><b>整数型提速口诀（讲义原话）：消元要消「系数小的」</b> —— 两式相减消元时，挑<b>系数小、好算</b>的那个未知数消掉，剩下的数字更小、更好约，能省掉一大截计算</li>
                      <li><b>非整数型（如求总和）</b>：大胆用<b>赋0法</b>，设某个未知数为0简化计算</li>
                    </PointList>
                    <Callout variant="key">
                      <b>两种解法：</b>① <b>凑系数</b>（高中考法，不好想）；② <b>赋零法</b>（首选）。<br />
                      <b>赋谁为零（讲义原话）：赋「大的数、不好算的数」为 0</b> —— 系数大、计算麻烦的那个未知数直接归零，剩下两个方程两步就能解出来。<br />
                      前提仍然是：<b>题目问的是"整体"（总和 / 差 / 某个线性组合）</b>，与具体取值无关，才能赋 0。
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题6 · 不定方程组（非整数型 · 赋0法）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>甲、乙、丙三种货物，如果购买甲 3 件、乙 7 件、丙 1 件需花 3.15 元；如果购买甲 4 件、乙 10 件、丙 1 件需花 4.20 元。那么购买甲、乙、丙各 1 件需花多少钱？</ExampleQuestion>
                      <ExampleOptions>A.1.05 元　B.1.40 元　C.1.85 元　D.2.10 元</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>设甲 x 元、乙 y 元、丙 z 元：
                              3x + 7y + z = 3.15 ①　　4x + 10y + z = 4.20 ②
                              两式相减：x + 3y = 1.05 ③
                              <b>赋 0 法：</b>问的是 <b>x + y + z 这个整体</b>（不是某一个未知数），所以取值与结果无关 —— 大胆设 <b>y = 0</b>。
                              代入③：x = 1.05；再代入①：z = 3.15 − 3×1.05 − 0 = 0。
                              所以 x + y + z = 1.05 + 0 + 0 = <b>1.05</b>（元）。
                              要点：<b>只有问「整体」才能赋 0</b>；赋 0 后三元方程立刻退化成一元一次方程，两步就算完。
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题7 · 不定方程组（整体替换）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>买 3 支铅笔、7 支圆珠笔、1 支钢笔共 32 元；买 4 支铅笔、10 支圆珠笔、1 支钢笔共 43 元。问买 1 支铅笔、1 支圆珠笔、1 支钢笔共需多少元？</ExampleQuestion>
                      <ExampleOptions>A.10 元　B.11 元　C.12 元　D.13 元</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>设铅笔 x、圆珠笔 y、钢笔 z。<br />
                        两式相减：(4x+10y+z) − (3x+7y+z) = 43 − 32 → <b>x + 3y = 11</b><br />
                        再回代 3x + 7y + z = 32，得 z = 2y − 1<br />
                        x + y + z = (11 − 3y) + y + (2y − 1) = <b>10</b>（y 被消掉了 —— 这就是"整体替换"）<br />
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
          
                  <Block>
                    <BlockTitle>5. 补充考点 2：A 和非 A 思想（普通方程）</BlockTitle>
                    <Callout variant="key"><b>识别：</b>题目给的是「<b>不是甲</b> / 不是乙 / 不是丙」的数量，却问「甲（某一个主体）有多少」</Callout>
                    <Callout variant="formula">
                      <span className="formula">A = (非B + 非C − 非A) ÷ 2</span>
                    </Callout>
                    <SubPoint>推导：总量 T = A + B + C。<br />
                      「不是甲的」= B + C；「不是乙的」= A + C；「不是丙的」= A + B。<br />
                      三式相加 = 2(A+B+C) = 2T；又 T = 非A + A，代入化简即得上式。</SubPoint>
                    <Callout variant="tip">别硬解三元方程 —— <b>把「不是另外两个的」加起来，减去「不是自己的」，再除以 2</b>。</Callout>
                  </Block>
                    <Example>
                    <ExampleHeader>📝 例题8 · A 和非 A 思想（2020 深圳）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某快递集散点有一批包裹，由甲、乙、丙三名快递员各自独立完成送达。其中有 93 件不是甲派送的，92 件不是乙派送的，91 件不是丙派送的，则甲派送了多少件？</ExampleQuestion>
                      <ExampleOptions>A. 44　B. 45　C. 46　D. 47</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>套公式：甲 = (非乙 + 非丙 − 非甲) ÷ 2<br />= (92 + 91 − 93) ÷ 2 = 90 ÷ 2 = <b>45</b>（件）。<br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>6. 补充考点 3：方程中的排比句</BlockTitle>
                    <Callout variant="key"><b>特征：</b>「余数的表述」——多了、少了；<b>总量相同，不同的分配方案</b></Callout>
                    <Callout variant="formula">
                      <span className="formula">人数 = 余数差 ÷ 平均数差</span><br />
                      同向作差、反向作和
                    </Callout>
                    <SubPoint><b>同向</b>（两次都多、或两次都少）→ 两个余数<b>相减</b>；<br />
                      <b>反向</b>（一次多、一次少）→ 两个余数<b>相加</b>。</SubPoint>
                    <Callout variant="tip">口诀：<b>先按同向/反向把余数合成一个「总差」，再除以两次每人分的差</b>。</Callout>
                  </Block>
                    <Example>
                    <ExampleHeader>📝 例题9 · 排比句（2018 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>老师拿来一箱笔记本让班长负责给同学们分发，如果每人发 2 本，还剩 22 本；如果每人发 3 本，就少 15 本。该班共有多少学生？</ExampleQuestion>
                      <ExampleOptions>A. 37　B. 34　C. 23　D. 20</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>一次「还剩」、一次「少」→ <b>反向作和</b>：22 + 15 = 37。<br />两次每人分的差：3 − 2 = 1。<br />人数 = 37 ÷ 1 = <b>37</b>（人）。<br />
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
    </>
  )
}
