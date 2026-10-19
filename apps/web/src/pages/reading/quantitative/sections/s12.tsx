import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList, SubPoint } from '@/components/content'

/**
 * 十二、概率问题
 *
 * @returns 该节正文。
 */
export default function S14(): ReactElement {
  return (
    <>
      <Block>
                    <BlockTitle>1. 基础公式</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">P(A) = 满足条件的情况数 ÷ 总情况数</span>
                    </Callout>
                    <Callout variant="tip">选项中和为1的正确率比较大</Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题1 · 基础概率（2018 国考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某单位的会议室有 5 排共 40 个座位，每排座位数相同。小张和小李随机入座，则他们坐在同一排的概率（　　）。</ExampleQuestion>
                      <ExampleOptions>A.不高于 15%　B.高于 15% 但低于 20%　C.正好为 20%　D.高于 20%</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>「两个人坐同一排 / 同一列 / 同一辆车」有固定套路 —— <b>让一个人先坐好，再看另一个人的可选位置</b>：
                              ① 每排座位数 = 40 ÷ 5 = <b>8</b> 个；
                              ② 小张随便坐（40 个位置对称，先坐不影响结果），坐定后还剩 <b>39</b> 个空位；
                              ③ 其中与小张<b>同一排</b>的空位 = 8 − 1 = <b>7</b> 个；
                              ④ 概率 = 7 ÷ 39 ≈ <b>17.9%</b> → 落在「高于 15% 但低于 20%」区间。
                              要点：<b>「先放一个，再放另一个」</b>，分母是"剩下的位置数"，分子是"符合条件的剩下位置数"。
                              易错点：分母是 <b>39</b> 不是 40 —— 两个人的位置不能重合。
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>2. 分类与分步</BlockTitle>
                    <PointList>
                      <li><b>分类（加法）</b>：多种情况满足，概率相加</li>
                      <li><b>分步（乘法）</b>：多个步骤依次满足，概率相乘</li>
                    </PointList>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题2 · 分步概率</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>袋中有 3 个红球、2 个白球，不放回地依次摸出 2 个球，则摸出的两个球都是红球的概率是（　　）。</ExampleQuestion>
                  <ExampleOptions>A.1/5　B.3/10　C.2/5　D.1/2</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>「依次摸出、两个都要红」→ <b>分步相乘</b>：<br />· 第 1 个摸到红球：3 ÷ 5 = 3/5；<br />· <b>不放回</b>，袋里还剩 2 红 2 白 → 第 2 个再摸到红球：2 ÷ 4 = 1/2。<br />P = 3/5 × 1/2 = <b>3/10</b>。<br /><span style={{ color: '#6b7280' }}>⚠️ 不放回时，第二次的分母和分子都要减 1 —— 这是最常错的一步。若题目改成「有放回」，第二次仍是 3/5，答案就变成 9/25。</span>
                    <span className="correct">答案：B</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>3. 反向概率</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">P(A) = 1 - P(不A)</span>
                    </Callout>
                    <Callout variant="key">正面复杂就求反："正难则反"</Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题3 · 反向概率（2021 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>两个大人带四个孩子去坐只有六个位置的圆型旋转木马，那么两个大人不相邻的概率为（　　）。</ExampleQuestion>
                      <ExampleOptions>A.2/5　B.3/5　C.1/3　D.2/3</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>求「<b>不相邻</b>」正面很麻烦 → <b>正难则反</b>，先算"相邻"再相减。
                              ① 6 个人<b>环形排列</b>的总数 = (6 − 1)! = <b>120</b> 种；
                              ② 两大人<b>相邻</b>：把两人捆成一个整体参与环形排列 → (5 − 1)! = 24，再乘内部顺序 2! = 2 → <b>48</b> 种；
                              ③ 相邻的概率 = 48 ÷ 120 = 2/5；
                              ④ 不相邻的概率 = 1 − 2/5 = <b>3/5</b>。
                              要点：看到「<b>不</b>相邻 / <b>不</b>在同一天 / <b>不</b>全对」这类否定问法，先想 <b>1 − P(反面)</b>。
                              环形排列公式：n 个人围一圈 = <b>(n − 1)!</b>（固定一个人消除旋转重复）。捆成整体后，"人数"要少 1 个再环形排列。
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>4. 给概率求概率</BlockTitle>
                    <SubPoint>已知各步概率，分步相乘求总概率</SubPoint>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题4 · 给概率求概率（分步相乘）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某产品需要经过两道独立工序，第一道工序的合格率为 0.9，第二道为 0.8。该产品的最终合格率是多少？</ExampleQuestion>
                <ExampleOptions>A.0.70　B.0.72　C.0.74　D.0.85</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>两道工序相互独立，且<b>必须同时合格</b> → 分步相乘：0.9 × 0.8 = <b>0.72</b>。<br />若题目问的是「至少有一道合格」，则用反向：1 − 0.1 × 0.2 = 0.98。
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>5. 比赛类概率</BlockTitle>
                    <Callout variant="key">方法：枚举所有可能比分情况，分类计算概率再相加</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题5 · 比赛类概率（枚举法）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>甲、乙两人进行比赛，每局甲获胜的概率为 2/3，先赢 2 局者获胜。则甲最终获胜的概率是多少？</ExampleQuestion>
                      <ExampleOptions>A.4/9　B.2/3　C.20/27　D.8/9</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>枚举甲的获胜路径：<br />
                        ① 连胜两局：2/3 × 2/3 = 4/9 = 12/27<br />
                        ② 胜负胜：2/3 × 1/3 × 2/3 = 4/27<br />
                        ③ 负胜胜：1/3 × 2/3 × 2/3 = 4/27<br />
                        合计 = 12/27 + 4/27 + 4/27 = <b>20/27</b><br />
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>6. 抓阄密码类</BlockTitle>
                    <Callout variant="key">
                      <b>等可能概率：</b>每次概率相同，与先后顺序无关<br />
                      <b>猜题技巧：</b>正确答案选项的分母比较规整
                    </Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题6 · 抓阄密码类（2020 山东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>在 ATM 机上输入银行卡密码时，若连续三次输入错误则会吞卡。老李忘了银行卡密码的末两位数，只记得是两个不相同的奇数，若他在末两位上随意输入两个不同奇数，能在吞卡前猜中正确密码的概率是（　　）。</ExampleQuestion>
                      <ExampleOptions>A.3/20　B.1/5　C.1/9　D.2/9</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>先<b>数清一共有多少种可能的密码</b>，再看有几次机会。
                              ① 两位是「不相同的奇数」→ 从 1、3、5、7、9 这 5 个奇数中<b>选出 2 个并排顺序</b>（十位、个位不同）：
                              　 A(5, 2) = 5 × 4 = <b>20</b> 种；
                              ② 连续三次输错才吞卡 → 吞卡前有 <b>3</b> 次尝试机会；
                              ③ 猜中的概率 = 3 ÷ 20 = <b>3/20</b>。
                              要点：<b>「密码 / 抓阄类」= 等可能概率</b>，只与"总情况数"和"机会数"有关，<b>与先后顺序无关</b>。
                              本题的关键在"总情况数"：末两位<b>有序</b>（12 和 21 是两个不同密码），所以用排列 A(5,2) 而不是组合。
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>7. 跟屁虫问题</BlockTitle>
                    <SubPoint>不放回抽样，前面抽到后面就不抽了</SubPoint>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题7 · 跟屁虫问题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>袋中有 2 个红球、3 个白球，依次不放回地摸出 2 个球。第 2 次摸到红球的概率是多少？</ExampleQuestion>
                <ExampleOptions>A.2/5　B.1/2　C.3/5　D.1/5</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>这是「不放回抽样」——前面摸走的球就不再放回。<br />但要注意：<b>第 k 次摸到红球的概率恒等于红球总数 ÷ 球总数</b>，因为每次抽完后剩余球的颜色比例在期望意义下不变。<br />所以第 2 次摸到红球的概率 = 2 ÷ 5 = <b>2/5</b>。
                  <br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>8. 骰子问题</BlockTitle>
                    <Callout variant="tip">画图辅助，列出所有可能组合</Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题8 · 骰子问题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>同时掷两枚均匀骰子，两枚点数之和为 8 的概率是多少？</ExampleQuestion>
                <ExampleOptions>A.1/9　B.5/36　C.1/6　D.7/36</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>总情况数 = 6 × 6 = 36 种。<br />列出点数和为 8 的组合：(2,6)(3,5)(4,4)(5,3)(6,2)，共 5 种。<br />概率 = <b>5/36</b>。（骰子题一定要按〈第 1 枚，第 2 枚〉有序列举，别漏掉「反过来」的情况）
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>9. 独立重复试验（伯努利模型）</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">P(恰好成功 k 次) = C(n, k) × pᵏ × (1−p)<sup>n−k</sup></span>
                    </Callout>
                    <Callout variant="key">
                      特征：<b>同一件事重复做 n 次，每次成功概率都是 p，各次互不影响</b>。<br />
                      三步走：① 选出哪 k 次成功（组合数 C(n,k)）② 成功的 k 次乘起来（pᵏ）<br />
                      ③ 失败的 n−k 次乘起来（(1−p)<sup>n−k</sup>）。
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题9 · 独立重复试验</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某球员投篮命中率为 0.6，连续投篮 3 次（各次互不影响），恰好命中 2 次的概率是多少？</ExampleQuestion>
                      <ExampleOptions>A.0.288　B.0.36　C.0.432　D.0.5</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>独立重复试验 → P = C(3,2) × 0.6² × 0.4¹<br />
                        = 3 × 0.36 × 0.4 = <b>0.432</b><br />
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>10. 几何概型（面积比 / 长度比）</BlockTitle>
      
                  <figure className="fig">
                    <svg viewBox="0 0 440 250" role="img" aria-label="几何概型面积比">
                      <rect x={60} y={20} width={200} height={200} fill="#eef3ff" stroke="#3f4a5f" strokeWidth={1.8} />
                      <circle cx={160} cy={120} r={100} fill="#2ecc71" fillOpacity="0.28" stroke="#2ecc71" strokeWidth={1.8} />
                      <circle cx={160} cy={120} r={4} fill="#ff6b6b" />
                      <text x={166} y={136} fontSize={13} fill="#ff6b6b" fontWeight="700">中心</text>
                      <text x={292} y={70} fontSize={14} fill="#2ecc71" fontWeight="700">满足条件的区域</text>
                      <text x={292} y={98} fontSize={13.5} fill="#6b7280">（半径 1 的圆）</text>
                      <text x={292} y={140} fontSize={14} fill="#4f7cff" fontWeight="700">全部可能的区域</text>
                      <text x={292} y={168} fontSize={13.5} fill="#6b7280">（边长 2 的正方形）</text>
                      <text x={292} y={206} fontSize={13.5} fill="#1a1a2e" fontWeight="700">P = π÷4</text>
                    </svg>
                    <figcaption>几何概型不看「数」，看「占地盘」：<b>概率 = 满足条件的区域 ÷ 全部可能的区域</b>（面积比，一维时就是长度比）。</figcaption>
                  </figure>
                    <Callout variant="key">
                      特征：结果有<b>无穷多个</b>、且"均匀分布"（随机投点、随机取数）。<br />
                      <b>方法：P = 满足条件的区域 ÷ 总区域</b>（一维用长度比，二维用面积比，三维用体积比）。<br />
                      注意：几何概型<b>不看点数，只看"面积/长度"</b>——这是它和古典概型的根本区别。
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题10 · 几何概型（面积比）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>在边长为 2 的正方形内随机取一点，则该点到正方形中心的距离小于 1 的概率是多少？</ExampleQuestion>
                      <ExampleOptions>A.π/4　B.π/2　C.1/4　D.π/8</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>几何概型 → 看面积比（半径 1 的圆完全落在正方形内）。<br />
                        圆的面积 = π × 1² = π；正方形面积 = 2² = 4<br />
                        P = π ÷ 4 = <b>π/4</b><br />
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
            <Block>
              <BlockTitle>11. 补充考点 17：描点法（枚举先描点，防漏防重）</BlockTitle>
              <Callout variant="tip">
                排列组合／概率里<b>套不出公式、只能数</b>的时候用描点法：<br />
                ① 把每个对象画成一个点（一排点、一圈点、一列格子）；<br />
                ② 固定一个有特殊条件的点"消掉旋转/对称"（例如固定甲坐在 1 号点）；<br />
                ③ 按题目条件在点上逐一"描"出可行排列，描完再回头查有没有漏点、有没有重复数。
              </Callout>
              <Callout variant="key">
                描点法的价值不在"快"，而在<b>让枚举看得见</b>：手上有图，就不会漏数，也方便用奇偶、对称去检验。
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题11 · 描点法枚举（环形相邻）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>甲、乙、丙、丁 4 人围坐在一张圆桌旁，若甲必须与乙相邻，共有多少种不同的坐法？</ExampleQuestion>
                <ExampleOptions>A.4　B.6　C.8　D.12</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>把 4 个座位描成一圈的 4 个点。<br />
                  ① 固定甲在 1 号点（消掉旋转带来的重复）→ 乙必须相邻，只能在 2 号或 4 号点，共 <b>2</b> 种；<br />
                  ② 剩下的两个点给丙、丁，可互换 → <b>2</b> 种；<br />
                  ③ 相乘：2 × 2 = <b>4</b> 种。<br />
                  用公式复核：4 人环形排列 (4−1)! = 6 种；把甲乙捆成一体 → 2 × (3−1)! = 4 种，一致。
                  <br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
