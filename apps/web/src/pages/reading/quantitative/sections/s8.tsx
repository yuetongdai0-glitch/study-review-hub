import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList, SubPoint } from '@/components/content'

/**
 * 八、最值问题
 *
 * @returns 该节正文。
 */
export default function S10(): ReactElement {
  return (
    <>
      <Block>
                          <BlockTitle>1. 最不利构造【常考】</BlockTitle>
                          <Callout variant="formula">
                            <span className="formula">答案 = 最不利（最倒霉）情况 + 1</span>
                          </Callout>
                          <Callout variant="key">
                            <b>题型特征：</b>"至少……才能保证……"<br />
                            <b>核心：</b>考虑最差的情况（差一点就满足），然后+1
                          </Callout>
                          <Callout variant="tip">结合选项看+1的情况</Callout>
                        </Block>
                  <Example>
                          <ExampleHeader>📝 例题1 · 最不利构造（2025 广东）</ExampleHeader>
                          <ExampleBody>
                            <ExampleQuestion>箱子里装有红、蓝、绿、白、黑五种颜色的小球各 20 个。如果从箱子里取出若干个小球，且确保其中有 10 个小球颜色相同，则至少要取出（　　）个小球。</ExampleQuestion>
                            <ExampleOptions>A.56　B.51　C.50　D.46</ExampleOptions>
                            <ExampleAnswer>
                    <b>解析：</b>「至少……确保（保证）……」→ <b>最不利构造</b>：先想「最倒霉能到哪一步」。<br />最不利情况 = 每种颜色都只差 1 个就凑满 10 个 → 每种颜色各取 <b>9</b> 个，共 5 × 9 = <b>45</b> 个，此时仍然凑不出 10 个同色。<br />再多取 1 个，无论拿到哪种颜色，都会让该颜色达到 10 个 → <b>45 + 1 = 46</b> 个。<br /><span style={{ color: '#6b7280' }}>秒杀口径：<b>保证数 = 最不利 + 1</b>。注意「每种 20 个」只是保证干扰项够取，不影响计算 —— 只要每种都不少于 9 个就够了。</span>
                    <span className="correct">答案：D</span>
                  </ExampleAnswer>
                          </ExampleBody>
                        </Example>
                  <Example>
                          <ExampleHeader>📝 例题2 · 最不利构造</ExampleHeader>
                          <ExampleBody>
                            <ExampleQuestion>袋中有红、黄、蓝、白 4 种颜色的球，每种颜色的球都足够多。至少要取出多少个球，才能保证取出的球中有 3 个颜色相同？</ExampleQuestion>
                            <ExampleOptions>A.7　B.9　C.11　D.13</ExampleOptions>
                            <ExampleAnswer>
                              <b>解析：</b>最不利情况 = 每种颜色各取 2 个 → 4 × 2 = 8 个，仍不满足"3 个同色"<br />
                              再取 1 个，无论什么颜色都会凑齐 3 个同色 → 8 + 1 = <b>9 个</b><br />
                              <span className="correct">答案：B</span>
                            </ExampleAnswer>
                          </ExampleBody>
                        </Example>
                  <Block>
                          <BlockTitle>2. 构造数列</BlockTitle>
                          <Callout variant="formula">
                            <span className="formula">排序 → 定位 → 构造 → 求和</span>
                          </Callout>
                          <PointList>
                            <li><b>求最大值的最大值</b>：让其余尽量小</li>
                            <li><b>求最小值的最大值</b>：让其余尽量大</li>
                            <li><b>非整数处理</b>：问"至少"→向上取整；问"最多"→向下取整</li>
                            <li><b>带入选项</b>：至少→从小数字入手；至多→从大数字入手</li>
                          </PointList>
                          <Callout variant="warn">注意：主体个数是否可以相同！设未知数时求谁设谁</Callout>
                          <SubPoint>变形：总量未知，构造数列</SubPoint>
                        </Block>
                  <Example>
                    <ExampleHeader>📝 例题3 · 构造数列（求最小值的最大值 · 2022 上海）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某单位进行了一次绩效考评打分，满分为 100 分。有 5 位员工的平均分为 90 分，而且他们的分数各不相同，其中分数最低的员工得分为 77 分，那么排第二名的员工至少得（　　）分（分数取整数）。</ExampleQuestion>
                      <ExampleOptions>A.90　B.92　C.94　D.96</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>总分 = 5 × 90 = 450 分。已知最低 77 分，求<b>第二名的最小值</b>。
                              按要求"最小值的最大值"反向操作 —— <b>求谁的最小值，就让其余人尽量大</b>（此消彼长）。
                              设第二名得 x 分。为了使 x 尽量小，第一名要尽量大（满分 100）。
                              第三、四名必须严格小于 x 且严格大于 77，还要尽量大：取 x − 1、x − 2。
                              求和：100 + x + (x − 1) + (x − 2) + 77 = 450 → 3x + 174 = 450 → 3x = 276 → x = <b>92</b>。
                              验证：100、92、91、90、77 → 各不相同 ✓，总和 450 ✓。
                              要点：<b>先"定位"再"反向"最后"求和"</b>；"反向"就是让不要求的那些量往反方向顶到边界。
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                          <ExampleHeader>📝 例题4 · 构造数列</ExampleHeader>
                          <ExampleBody>
                            <ExampleQuestion>5名学生平均分80分，每人分数不同且为整数，得分最少的人最多可能是多少分？</ExampleQuestion>
                            <ExampleOptions>A.78　B.79　C.80　D.81</ExampleOptions>
                            <ExampleAnswer>
                              <b>解析：</b>总分=5×80=400分<br />
                              设最少的人得x分，其余尽量小：x+1, x+2, x+3, x+4<br />
                              → 5x+10=400 → x=<b>78</b><br />
                              <span className="correct">答案：A</span>
                            </ExampleAnswer>
                          </ExampleBody>
                        </Example>
                  <Block>
                          <BlockTitle>3. 多集合反向构造</BlockTitle>
                          <Callout variant="key">
                            <b>方法：</b>反向 → 加和 → 作差<br />
                            （与容斥原理的多集合反向构造相同）
                          </Callout>
                          <Callout variant="formula">
                            <span className="formula">A∩B 最小 = A + B − 全部</span><br />
                            <span className="formula">A∩B∩C 最小 = A + B + C − 2 × 全部</span><br />
                            <span className="formula">A∩B∩C∩D 最小 = A + B + C + D − 3 × 全部</span><br />
                            <span className="formula">通式：n 个集合 →（加和）− (n − 1) × 全部</span>
                          </Callout>
                          <SubPoint>为什么是「减 (n−1) 个全部」：每个集合都按"反向"取自己<b>没覆盖</b>的那部分，
                            n 个集合反向加起来的总量 = n × 全部 − (A + B + C + …)；要挤进 1 个"全部"里，
                            多出来的 (n − 1) 个全部就得减掉。</SubPoint>
                          <Callout variant="tip">考场直接记：<b>加和 −（集合数 − 1）× 全部</b>；2 个集合减 1 个、3 个集合减 2 个、4 个集合减 3 个。</Callout>
                        </Block>
                  <Example>
                    <ExampleHeader>📝 例题5 · 多集合反向构造</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某单位 100 名员工中，会开车的有 80 人，会用电脑的有 85 人，会外语的有 75 人。三种技能都会的至少有多少人？</ExampleQuestion>
                      <ExampleOptions>A.30　B.35　C.40　D.45</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>反向：不会开车 20 人、不会用电脑 15 人、不会外语 25 人，合计 60 人。<br />即使这 60 人互不重叠，也至少有 100 − 60 = <b>40</b> 人三项都会。<br />公式速算：80 + 85 + 75 − 2 × 100 = 40。
                        <br />
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                          <BlockTitle>4. 和定最值（均值不等式）</BlockTitle>
                          <Callout variant="formula">
                            <span className="formula">和一定：a + b = S → a·b 最大 = S²/4（a = b 时取到）</span><br />
                            <span className="formula">积一定：a·b = P → a + b 最小 = 2√P（a = b 时取到）</span>
                          </Callout>
                          <PointList>
                            <li>特征："周长一定求最大面积""两数之和固定求乘积最大""总价一定求最大利润"。</li>
                            <li>口诀：<b>和定差小积最大，积定差小和最小</b>。</li>
                            <li>若要求结果必须是<b>整数</b>，取最接近的两个整数（如和为 21 → 10 和 11）。</li>
                          </PointList>
                        </Block>
                  <Example>
                          <ExampleHeader>📝 例题6 · 和定最值</ExampleHeader>
                          <ExampleBody>
                            <ExampleQuestion>两个正整数的和为 20，则这两个数的乘积最大是多少？</ExampleQuestion>
                            <ExampleOptions>A.96　B.99　C.100　D.104</ExampleOptions>
                            <ExampleAnswer>
                              <b>解析：</b>和一定 → 越接近，乘积越大。20 ÷ 2 = 10 → 10 × 10 = <b>100</b><br />
                              <span className="correct">答案：C</span>
                            </ExampleAnswer>
                          </ExampleBody>
                        </Example>
                  <Block>
                          <BlockTitle>5. 最不利构造 × 排列组合</BlockTitle>
                          <Callout variant="key">
                            特征："至少取出多少个才能保证……"，而取法本身要用排列组合算。<br />
                            <b>方法：</b>先算<b>最不利情况</b>（差一点就满足、最多能取多少个还没达标），再 <b>+1</b>。<br />
                            例：4 种颜色各取 2 个 = 8 个仍不满足"3 个同色"，再取 1 个必成 → 9 个。
                          </Callout>
                        </Block>
                  <Example>
              <ExampleHeader>📝 例题7 · 最不利构造 × 排列组合（配对计数）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>从 1、2、3、…、12 这 12 个整数中任意取出若干个，至少要取出多少个，才能保证其中一定有两个数的差等于 6？</ExampleQuestion>
                <ExampleOptions>A.5　B.6　C.7　D.8</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>先别急着"+1"，要先把<b>取法本身</b>数清楚：差等于 6 的数对一共 6 对 ——（1,7）(2,8）(3,9）(4,10）(5,11）(6,12）。<br />最不利情况 = 每对里只取 1 个数，此时取 6 个数仍找不到差为 6 的两个数；<br />再取第 7 个数，它必然落在某一对里，与已取的搭档凑成差 6 → 6 + 1 = <b>7</b>。（这类题的关键是先把"配对"数出来，配对次数错了答案必错）
                  <br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>6. 补充考点 15：最值思维（设未知数 → 代公式 → 分析最值）</BlockTitle>
              <Callout variant="tip">
                <b>识别：</b>题目涉及最值，但不是「最不利（至少…才能保证…）」，也不是「和定最值」。<br />
                <b>三步：</b>① 设未知数；② 代入公式（容斥／平均数／方程）；③ 分析未知量的最值情况（谁最小取 0、谁最大不能超过整体）。<br />
                夸夸刷原话：「涉及最值，设未知数，代公式，分析未知量的最值情况即可」。
              </Callout>
              <Callout variant="key">
                常见落点：<b>「都不」≥ 0</b> 卡出交集最小值；<b>「只满足一种」≥ 0</b> 卡出交集最大值。
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题8 · 最值思维（两集合）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某调查发现，受访居民中 60% 使用手机支付，75% 使用银行卡支付。问两种方式<b>都使用</b>的受访居民占比最少是多少？</ExampleQuestion>
                <ExampleOptions>A.15%　B.35%　C.45%　D.60%</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>① 设两种都使用的占比为 x，两种都不使用的占比为 y；<br />
                  ② 代两集合公式：100% = 60% + 75% − x + y → x = 35% + y；<br />
                  ③ 分析最值：x 要最小 → 取 y 的最小可能值 y = 0 → x = <b>35%</b>。<br />
                  （即多集合反向构造的结论：A∩B 最小 = A + B − 全部 = 60% + 75% − 100% = 35%）
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
