import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 十六、易拿分小题型
 *
 * @returns 该节正文。
 */
export default function S18(): ReactElement {
  return (
    <>
      <Block>
                    <BlockTitle>1. 空瓶换酒</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">N个空瓶换1瓶酒 → 最多喝 M + M/(N-1) 瓶</span><br />
                      （M为初始酒数，向下取整）
                    </Callout>
                    <SubPoint>本质：借瓶法。M瓶喝完有M个空瓶，每N-1个空瓶相当于1瓶酒</SubPoint>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题1 · 空瓶换酒（2019 山东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某啤酒厂为促销啤酒，开展 6 个空啤酒瓶换 1 瓶啤酒的活动。孙先生去年花钱先后买了 109 瓶该品牌啤酒，期间不断用空啤酒瓶去换啤酒，请问孙先生去年一共喝掉了多少瓶啤酒？</ExampleQuestion>
                      <ExampleOptions>A.127　B.128　C.129　D.130</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>关键理解一句话：<b>每「换 1 瓶」实际只净消耗 (N − 1) 个空瓶</b>。
                              因为用 6 个空瓶换到 1 瓶酒，喝完又得到 1 个空瓶 → 净减少 6 − 1 = <b>5</b> 个空瓶。
                              ① 买 109 瓶 → 喝完得 109 个空瓶；
                              ② 每 5 个空瓶能"净换" 1 瓶 → 额外能喝 109 ÷ 5 = <b>21</b> 瓶（余 4 个空瓶，不够再换）；
                              ③ 总共喝掉 109 + 21 = <b>130</b> 瓶。
                              要点：公式记 <b>x 个空瓶、M 换 1 → 最多再喝 x ÷ (M − 1) 瓶（向下取整）</b>；
                              等价的说法是"借瓶法"：最后剩的几个空瓶可以先借一个凑整，喝完再还 —— 结论与上面的公式一致。
                        <span className="correct">答案：D</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>2. 货物集中 / 统筹运输</BlockTitle>
                    <Callout variant="key">
                      <b>方法：</b>先中间分开，轻的向重的方向移动<br />
                      核心思想：将货物集中在重量最大的一侧<br />（完整解法与例题见 <b>二十、统筹优化</b>）
                    </Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题2 · 货物集中（2018 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>在一条公路上每隔 10 里有一个集散地，共有 5 个集散地，其中一号集散地有旅客 10 人，三号集散地有 25 人，五号集散地有 45 人，其余两个集散地没有人。如果把所有人集中到一个集散地，那么所有旅客所走的总里数最少是（　　）。</ExampleQuestion>
                      <ExampleOptions>A.1100　B.900　C.800　D.700</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>「货物集中」的判据是<b>向重的一侧移动</b>：从一端往另一端走，一旦某一侧的重量超过另一侧，就不再往回走。
                              ① 先看两端：一号 10 人、五号 45 人 → 右边重，所以不会集中到一号，往右走；
                              ② 比较「左边累计」与「右边累计」：走到三号时，左边（一、二号）= 10 人，右边（四、五号）= 45 人 → 还是右边重；
                              ③ 走到五号时不用再比 —— 五号本身就是最重的端点 → <b>最优集中点就是五号集散地</b>。
                              ④ 计算总里数（相邻两站 10 里）：一号的 10 人走 4 段 ×10 = 40 里 → 10 × 40 = 400；
                              　 三号的 25 人走 2 段 ×10 = 20 里 → 25 × 20 = 500；合计 400 + 500 = <b>900</b> 里。
                              要点：<b>先按"重量"判位置，再按"人数 × 距离"算总里数</b>。
                              通用验证法：对每个候选仓库算一遍 Σ(人数 × 距离)，取最小 —— 时间够就两个方法都过一遍，最保险。
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>3. 爬楼问题</BlockTitle>
                    <Callout variant="warn">注意思维误区：从1楼到5楼 = 爬了4层（不是5层）</Callout>
                    <Callout variant="formula">
                      爬的层数 = 目标楼层 - 起始楼层
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题3 · 爬楼问题</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>小明从1楼爬到5楼用了40秒，以同样速度从1楼爬到10楼需要多少秒？</ExampleQuestion>
                      <ExampleOptions>A.80s　B.90s　C.100s　D.110s</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>注意：1楼到5楼爬了4层（不是5层！）<br />
                        每层用时=40÷4=10秒<br />
                        1楼到10楼=爬9层 → 9×10=<b>90秒</b><br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>4. 天平称重</BlockTitle>
                    <Callout variant="key">
                      <b>有3选3：</b>N次称量最多从 3ⁿ 个物品中找次品<br />
                      1次→3个，2次→9个，3次→27个
                    </Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题4 · 天平称重</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>用一架无砝码的天平称量，至少要称几次，才能从 27 个外观相同的小球中找出唯一一个较轻的次品？</ExampleQuestion>
                <ExampleOptions>A.2　B.3　C.4　D.9</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>有 3 选 3：每次称量把球分成 3 组，可以判断出次品落在哪一组。<br />N 次称量最多能从 3ⁿ 个物品中找出次品：1 次 3 个、2 次 9 个、3 次 27 个。<br />27 = 3³，所以需要 <b>3</b> 次。
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>5. 线切面问题</BlockTitle>
                    <Callout variant="key">
                      <b>5刀切面：</b>n刀最多切出 (n²+n+2)/2 块<br />
                      1→2, 2→4, 3→7, 4→11, 5→16
                    </Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题5 · 线切面问题（2020 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一条直线将一个平面分成 2 个部分，两条直线最多将一个平面分成 4 个部分……则 6 条直线最多将一个平面分成的部分为（　　）。</ExampleQuestion>
                      <ExampleOptions>A.20　B.21　C.22　D.23</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>「最多」意味着<b>每条新直线都与此前每条直线都相交，且交点互不重合</b>。
                              记第 n 条直线把已有的部分多分出 (n − 1) 块（n − 1 个交点把新直线切成 n 段，每段多分出 1 块）：
                              ① 部分数依次为 2 → 4 → 7 → 11 → 16 → <b>22</b>（每次加的分别是 2、3、4、5、6）；
                              ② 通项公式：<b>部分数 = (n² + n + 2) ÷ 2</b>，代入 n = 6：(36 + 6 + 2) ÷ 2 = <b>22</b>。
                              要点：n 条直线最多把平面分成 <b>(n²+n+2)/2</b> 块；
                              考场上 <b>记数列更快</b>：2、4、7、11、16、22、29……（差值 2、3、4、5、6、7）。
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>6. 标1法</BlockTitle>
                    <SubPoint>对未知量赋值为1，简化比例计算</SubPoint>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题6 · 标1法</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>甲的工作效率是乙的 1.5 倍，乙单独完成某项工作需 30 天。两人合作需要多少天完成这项工作？</ExampleQuestion>
                <ExampleOptions>A.10　B.12　C.15　D.18</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>题目只给倍数关系 → 用<b>标 1 法</b>：给乙的效率赋值 1，则甲的效率为 1.5，工作总量 = 1 × 30 = 30。<br />合作效率 = 1 + 1.5 = 2.5，所需时间 = 30 ÷ 2.5 = <b>12</b> 天。<br />（也可直接赋值总量为 3，则乙效率 0.1、甲效率 0.15，结果一样）
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>7. 过河问题</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">需要过河次数 = (总人数 - 1) ÷ (船容量 - 1)</span>
                    </Callout>
                    <SubPoint>每次过去需要有人划船回来（最短时间策略见 <b>二十、统筹优化</b>）</SubPoint>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题7 · 过河问题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>37 名战士要过河，河边只有一条能载 5 人的小船，且没有船夫，每次都需要战士们自己划。至少要渡河多少次，才能让全部战士都过河？</ExampleQuestion>
                <ExampleOptions>A.8　B.9　C.10　D.12</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>船能载 5 人，但每次都要留 1 人把船划回来，所以<b>每往返一次实际只送过去 4 人</b>。<br />最后一次不用回来，所以过河次数 = (总人数 − 1) ÷ (船容量 − 1) = (37 − 1) ÷ (5 − 1) = 36 ÷ 4 = <b>9</b> 次。
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>8. 网状图 / 树状图（图解法）</BlockTitle>
                    <Callout variant="key">
                      关系一复杂，<b>画图连线</b>比列式快得多。常用于：<br />
                      ① <b>比赛盘数</b>：几人单循环，已知各自赛过几盘，求某人赛了几盘<br />
                      ② <b>树状图</b>：逐层列出排列组合 / 概率的所有可能<br />
                      ③ <b>时间安排类</b>的对策分析
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题8 · 网状图（比赛盘数）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>A、B、C、D、E 五人进行象棋单循环赛（每两人都赛一盘）。已知 A、B、C、D 已赛过的盘数依次为 4、3、2、1，此时 E 赛了多少盘？</ExampleQuestion>
                      <ExampleOptions>A.2　B.3　C.4　D.5</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>用连线法（网状图）—— 每连一条线 = 赛过一盘，看下图：<br />
                        A 赛了 4 盘 → A 与 B、C、D、E 都赛过<br />
                        D 只赛了 1 盘 → D 只和 A 赛过，与 B、C、E 都没赛<br />
                        B 赛了 3 盘 → 已知有 AB，又不能连 D，故 B 必连 C 和 E<br />
                        C 赛了 2 盘 → 已知有 AC、BC，已达 2 盘，不再连 E<br />
                        于是 E 只连了 A、B 两条线 → <b>2 盘</b>
                  <figure className="fig">
                    <svg viewBox="0 0 460 306" role="img" aria-label="五人单循环赛连线网状图">
                      <path d="M230 44 L362 140 L312 262 L148 262 L98 140 Z" fill="#f7f9ff" stroke="#cbd5e1" strokeWidth={1.2} strokeDasharray="4 4" />
                      <path d="M230 44 L362 140 M230 44 L312 262 M230 44 L148 262 M230 44 L98 140" stroke="#4f7cff" strokeWidth={2.6} />
                      <path d="M362 140 L312 262 M362 140 L98 140 M312 262 L98 140" stroke="#4f7cff" strokeWidth={2.6} />
                      <path d="M362 140 L148 262" stroke="#2ecc71" strokeWidth={2.6} strokeDasharray="7 5" />
                      <path d="M98 140 L312 262" stroke="#f39c12" strokeWidth={2.6} strokeDasharray="7 5" />
                      <circle cx={230} cy={44} r={27} fill="#e8efff" stroke="#4f7cff" strokeWidth={2.2} />
                      <circle cx={362} cy={140} r={27} fill="#eafaf1" stroke="#2ecc71" strokeWidth={2.2} />
                      <circle cx={312} cy={262} r={27} fill="#eafaf1" stroke="#2ecc71" strokeWidth={2.2} />
                      <circle cx={148} cy={262} r={27} fill="#fff5f5" stroke="#ff6b6b" strokeWidth={2.2} />
                      <circle cx={98} cy={140} r={27} fill="#fef5e7" stroke="#f39c12" strokeWidth={2.2} />
                      <text x={230} y={52} textAnchor="middle" fontSize={17} fontWeight="700" fill="#2b4b9b">A</text>
                      <text x={362} y={148} textAnchor="middle" fontSize={17} fontWeight="700" fill="#1a7a45">B</text>
                      <text x={312} y={270} textAnchor="middle" fontSize={17} fontWeight="700" fill="#1a7a45">C</text>
                      <text x={148} y={270} textAnchor="middle" fontSize={17} fontWeight="700" fill="#c0392b">D</text>
                      <text x={98} y={148} textAnchor="middle" fontSize={17} fontWeight="700" fill="#b8730d">E</text>
                      <text x={230} y={18} textAnchor="middle" fontSize={13} fill="#6b7280">A：4 盘（满）</text>
                      <text x={410} y={128} textAnchor="middle" fontSize={13} fill="#6b7280">B：3 盘</text>
                      <text x={368} y={292} textAnchor="middle" fontSize={13} fill="#6b7280">C：2 盘</text>
                      <text x={86} y={292} textAnchor="middle" fontSize={13} fill="#6b7280">D：1 盘</text>
                      <text x={34} y={128} textAnchor="middle" fontSize={13} fill="#6b7280">E：？盘</text>
                      <text x={16} y={40} fontSize={13} fill="#4f7cff" fontWeight="700">实线 = 题干已定的对局</text>
                      <text x={16} y={60} fontSize={13} fill="#2ecc71" fontWeight="700">虚线 = 由盘数反推补上的对局</text>
                    </svg>
                    <figcaption><b>连线法（网状图）</b>：每个点是一个人，连一条线代表赛过一盘。
                      A 满 4 盘 → 与其余四人全连；D 只 1 盘 → 只连 A；B 要凑 3 盘 → 补连 C、E；C 已够 2 盘 → 不再连 E。
                      数 E 身上的线：<b>只连了 A 和 B → 2 盘</b>。</figcaption>
                  </figure>
                        
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
    </>
  )
}
