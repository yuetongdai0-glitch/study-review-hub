import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 十一、排列组合
 *
 * @returns 该节正文。
 */
export default function S13(): ReactElement {
  return (
    <>
      <Block>
                    <BlockTitle>1. 基础概念</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">排列 A(n,m) = n! / (n-m)!（有序）</span><br />
                      <span className="formula">组合 C(n,m) = n! / [m! × (n-m)!]（无序）</span>
                    </Callout>
                    <Callout variant="key">
                      <b>判断标准：</b>有序（排队）用A，无序（组队）用C<br />
                      <b>分步用乘法</b>（先…再…），<b>分类用加法</b>（要么…要么…）
                    </Callout>
                    <Callout variant="key"><b>排列组合思维逻辑三步走（讲义原话）：</b><br />
                      <b>① 目标是什么？</b>（要选出/排出什么）→ <b>② 如何完成目标？</b>（一步到位就是分类，分几步就是分步）→ <b>③ 排列还是组合？</b><br />
                      　 判断标准：<b>打乱顺序对结果有影响 → 排列 A；无影响 → 组合 C</b>。<br />
                      灵魂三问：<b>谁？干什么？怎么办？</b>（主体 → 问题 → 分类/分步）—— 排列组合就是"生活里怎么做事"，把它还原成一件具体的事，就不容易乱。</Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题1 · 基础概念（2024 广东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某高校中文系计划从 3 名男生和 3 名女生中选派 4 名学生参加暑期支教活动。如果选派的女生不少于 2 名，则选派方案共有（　　）种。</ExampleQuestion>
                      <ExampleOptions>A.4　B.8　C.12　D.16</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>「女生不少于 2 名」要<b>分类讨论</b>（分类用加法）：
                              ① 女生 2 名 + 男生 2 名：从 3 女中选 2、从 3 男中选 2 →
                              　 <b>分步用乘法</b>：C(3,2) × C(3,2) = 3 × 3 = <b>9</b> 种；
                              ② 女生 3 名 + 男生 1 名：C(3,3) × C(3,1) = 1 × 3 = <b>3</b> 种；
                              ③ 合计 9 + 3 = <b>12</b> 种。
                              要点：<b>选派（组队）不排顺序 → 用组合 C</b>；先按条件"分类"，每一类内部再"分步相乘"，最后把各类相加。
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>2. 捆绑法（相邻问题）</BlockTitle>
                    <Callout variant="key">
                      "必须挨着" → 先捆绑为一个整体参与全排列，再内部排列<br />
                      步骤：①将相邻元素看作一个整体 ②整体全排列 ③内部排列
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题2 · 捆绑法</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>5人排成一排照相，其中甲乙必须相邻，有多少种排法？</ExampleQuestion>
                      <ExampleOptions>A.24　B.36　C.48　D.60</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>①甲乙捆绑为1个整体 → 4个元素全排列 A(4,4)=24<br />
                        ②甲乙内部排列 A(2,2)=2<br />
                        ③总计=24×2=<b>48种</b><br />
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>3. 插空法（不相邻问题）</BlockTitle>
                    <Callout variant="key">
                      "不能挨着" → 先排无要求元素，再将不相邻元素插入空隙<br />
                      n个元素排好产生n+1个空（含两端）
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题3 · 插空法（车位不相邻 · 2023 北京）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某车库有 10 个并排的车位，有 3 辆不同的车要停进这 10 个车位之中，而且彼此不能相邻，则有多少种不同的停放方法？</ExampleQuestion>
                      <ExampleOptions>A.336　B.246　C.156　D.66</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>「互不相邻」是<b>插空法</b>的标志词。关键在于：<b>空车位之间没有区别</b>，所以先只安排「哪几个位置停车」，再给车排序。<br />① 10 个车位里去掉 3 辆车的 3 个位置，剩下 <b>7 个空车位</b>排成一行；<br />② 7 个空车位之间（含两端）共形成 <b>8 个空档</b>，从里面选 3 个放车：C(8,3) = 56 种；<br />③ 3 辆车互不相同 → 在选定的 3 个位置上排列：A(3,3) = 3! = 6。<br />总数 = 56 × 6 = <b>336</b> 种。<br /><span style={{ color: '#6b7280' }}>易错：别直接用 C(10,3) —— 那样会把「相邻停车」也算进去。</span>
                    <span className="correct">答案：A</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>4. 插板法（每人至少1个）</BlockTitle>
      
                  <figure className="fig">
                    <svg viewBox="0 0 460 175" role="img" aria-label="插板法示意">
                      <circle cx={70} cy={70} r={17} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.8} />
                      <circle cx={140} cy={70} r={17} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.8} />
                      <circle cx={210} cy={70} r={17} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.8} />
                      <circle cx={280} cy={70} r={17} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.8} />
                      <circle cx={350} cy={70} r={17} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.8} />
                      <path d="M105 34 L105 106 M245 34 L245 106" stroke="#ff6b6b" strokeWidth={3.4} />
                      <text x={30} y={24} fontSize={13.5} fill="#6b7280">4 个空</text>
                      <text x={96} y={126} fontSize={13} fill="#ff6b6b" fontWeight="700">插板①</text>
                      <text x={236} y={126} fontSize={13} fill="#ff6b6b" fontWeight="700">插板②</text>
                      <text x={30} y={158} fontSize={13.5} fill="#6b7280">分成 3 组：第1组 1 个 ｜ 第2组 2 个 ｜ 第3组 2 个</text>
                      <text x={252} y={24} fontSize={14} fill="#4f7cff" fontWeight="700">C(4, 2) = 6 种</text>
                      <text x={252} y={52} fontSize={13.5} fill="#6b7280">n 个相同元素分 m 组</text>
                      <text x={252} y={74} fontSize={13.5} fill="#6b7280">（每组至少 1 个）</text>
                      <text x={252} y={96} fontSize={13.5} fill="#6b7280">→ C(n−1, m−1)</text>
                    </svg>
                    <figcaption>把 n 个<b>相同</b>元素分给 m 组、每组至少 1 个：想象 n 个元素排成一排，中间有 n−1 个空，从中挑 m−1 个空插板即可。</figcaption>
                  </figure>
                    <Callout variant="formula">
                      <span className="formula">n个相同元素分给m人，每人至少1个 → C(n-1, m-1)</span>
                    </Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题4 · 插板法（2020 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某城市一条道路上有 4 个十字路口，每个十字路口至少有 1 名交通协管员，现将 8 个协管员名额分配到这 4 个路口，则每个路口协管员名额的分配方案有（　　）。</ExampleQuestion>
                      <ExampleOptions>A.35 种　B.70 种　C.96 种　D.114 种</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>「8 个<b>相同的</b>名额分给 4 个<b>不同的</b>路口、每个至少 1 个」—— 标准的<b>插板法</b>。
                              ① 8 个名额排成一排，它们之间产生 8 − 1 = <b>7 个空</b>；
                              ② 从中挑 4 − 1 = <b>3 个空</b>插板，就分成 4 组（每组至少 1 个，正好对应"每路口至少 1 名"）；
                              ③ 方案数 = C(7, 3) = 7 × 6 × 5 ÷ (3 × 2 × 1) = <b>35</b> 种。
                              要点：记忆公式 <b>n 个相同元素分给 m 组、每组至少 1 个 → C(n−1, m−1)</b>；
                              若问「可以有空组」，先"借" m 个名额补上再用公式（见下一块同素分堆）。
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>5. 错位排列（直接背）</BlockTitle>
                    <DataTable>
                      <tr><th>n</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr>
                      <tr><th>Dₙ</th><td>0</td><td>1</td><td>2</td><td>9</td><td>44</td><td>265</td></tr>
                    </DataTable>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题5 · 错位排列</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>4个人各写了一张贺卡放在一起，然后每人随机拿一张，恰好所有人都没拿到自己写的贺卡的情况有多少种？</ExampleQuestion>
                      <ExampleOptions>A.6　B.9　C.12　D.24</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>4个元素的错位排列 D₄=<b>9</b>（直接背：0,1,2,9,44...）<br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>6. 环形排列</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">n个人环形排列 = (n-1)!</span>
                    </Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题6 · 环形排列</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>5 个人围成一圈就座，共有多少种不同的坐法？</ExampleQuestion>
                <ExampleOptions>A.24　B.60　C.120　D.16</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>环形排列：n 个人围成一圈有 <b>(n − 1)!</b> 种坐法。<br />(5 − 1)! = 4! = 4 × 3 × 2 × 1 = <b>24</b> 种。<br />原理：围成一圈时，整体旋转不算新排列，所以要除以 n。
                  <br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>7. 补充考点 16：平均分组（组无编号要除以 n!）</BlockTitle>
                    <Callout variant="tip">注意除以组数的全排列，消除重复计数</Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题7 · 平均分组</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>将 6 名同学平均分成 3 组，每组 2 人，共有多少种不同的分法？</ExampleQuestion>
                <ExampleOptions>A.15　B.30　C.90　D.720</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>先按组分：C(6,2) × C(4,2) × C(2,2) = 15 × 6 × 1 = 90。<br />三组人数相同且<b>组与组之间没有编号</b>，重复计数为 3! = 6 种，所以要除掉：90 ÷ 6 = <b>15</b> 种。<br />口诀：平均分成 n 组，就要除以 n!；若组有编号（如分到甲、乙、丙三个车间）则不除。
                  <br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>8. 枚举法</BlockTitle>
                    <Callout variant="tip">限制条件多、选项数据小 → 逐一枚举，别硬套公式</Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题8 · 枚举法（2025 国考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某竞赛由 5 道次序固定的判断题组成，参赛者起始为 0 分，每答对 1 题加 1 分，每答错 1 题扣 1 分。小王作答了所有试题，答完每道题时当前的得分都不低于 1 分。问他的答题情况有多少种不同的可能？</ExampleQuestion>
                      <ExampleOptions>A.7　B.6　C.4　D.3</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>只有 5 题、限制条件又很"紧"，直接<b>枚举</b>最快（用 + 表示答对、− 表示答错）。
                              ① 第 1 题后分数必须 ≥ 1 → 第 1 题<b>只能答对</b>，此时得 1 分；
                              ② 剩下 4 题从 1 分出发，要求每一步后仍 ≥ 1（即<b>中途不能掉回 0</b>）：
                              　 + + + + ：1→2→3→4→5 ✓<br />　 + + + − ：1→2→3→4→3 ✓<br />　 + + − + ：1→2→3→2→3 ✓<br />　 + + − − ：1→2→3→2→1 ✓<br />　 + − + + ：1→2→1→2→3 ✓<br />　 + − + − ：1→2→1→2→1 ✓<br />　 + − − … ：1→2→1→<b>0</b> ✗（后面全部排除）<br />　 − 开头 ：1 分也保不住 ✗
                              ③ 逐条数下来共 <b>6</b> 种。
                              要点：<b>限制条件越多、数据越小，越要枚举</b>；枚举时按字典序（先 + 后 −）排着写，不容易漏也不会重。
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>9. 顺序固定（归一法）</BlockTitle>
                    <SubPoint>全排列后除以顺序不变的排列数</SubPoint>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题9 · 顺序固定（归一法）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>甲、乙、丙、丁 4 人排成一排照相，要求甲必须站在乙的左边（不一定相邻），共有多少种不同的排法？</ExampleQuestion>
                <ExampleOptions>A.6　B.12　C.18　D.24</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>不考虑限制共有 4! = 24 种排法。<br />其中「甲在乙左边」与「甲在乙右边」各占一半（两者地位完全对称），所以合法排法 = 24 ÷ 2 = <b>12</b> 种。<br />归一法：全排列 ÷ 被固定顺序的那几个元素的全排列数。
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>10. 优限法（指定位置 / 指定元素）</BlockTitle>
                    <Callout variant="key">
                      有"特殊位置"或"特殊元素"时，<b>先安排特殊的，再排其余的</b>。<br />
                      例：5 人排队，甲不站排头 → 先给排头选人（4 种），剩下 4 人全排列（A₄⁴ = 24）→ 4 × 24 = <b>96 种</b>。
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题10 · 优限法</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>5 名同学排成一排照相，其中甲不能站在两端，共有多少种排法？</ExampleQuestion>
                      <ExampleOptions>A.48　B.72　C.96　D.120</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>先安排"特殊元素"甲 —— 5 个位置去掉两端，甲有 <b>3</b> 个位置可选<br />
                        剩下 4 人任意排列：A₄⁴ = 24<br />
                        共 3 × 24 = <b>72 种</b><br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>11. 同素分堆（插板法的三种变形）</BlockTitle>
                    <DataTable>
                      <tr><th>分配要求</th><th>公式</th></tr>
                      <tr><td>n 个相同元素分给 m 组，<b>每组至少 1 个</b></td><td>C(n−1, m−1)</td></tr>
                      <tr><td>n 个相同元素分给 m 组，<b>每组至少 0 个（允许空组）</b></td><td>C(n+m−1, m−1)</td></tr>
                      <tr><td>n 个相同元素分给 m 组，<b>每组至少 k 个</b></td><td>先给每组预分 k−1 个，余下的用"至少 1 个"公式</td></tr>
                    </DataTable>
                    <Callout variant="tip">判断三件事：<b>元素是否相同、组是否相同、是否允许空组</b>。组不同 → 用插板；组相同 → 还要除以组数的全排列（那就是"平均分组"）。</Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题11 · 同素分堆 · 情况一「每组至少 1 个」（3+2 第 11 章 · 例3）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>7 个相同的苹果分给唐僧、悟空、八戒、沙和尚 4 人，每人至少分 1 个，有多少种不同的分法？</ExampleQuestion>
                      <ExampleOptions>A.15　B.20　C.35　D.56</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>先做三连判断：<b>元素相同</b>（7 个苹果完全一样）、<b>组不相同</b>（4 个人）、<b>不允许空组</b>（每人至少 1 个）→ 正好落在 <b>情况一</b>，直接套标准公式。<br />
                        ① 7 个苹果排成一排，它们之间产生 7 − 1 = <b>6</b> 个空；<br />
                        ② 从中挑 4 − 1 = <b>3</b> 个空插板，就分成 4 组，且每组至少 1 个；<br />
                        ③ 方案数 = <b>C(6, 3) = 6 × 5 × 4 ÷ (3 × 2 × 1) = 20</b> 种。<br />
                        <span style={{ color: '#6b7280' }}>公式：n 个相同元素分给 m 组、每组至少 1 个 → <b>C(n − 1, m − 1)</b>。
                        这一题是同素分堆的「原形」，另外两种情况都是在它的基础上变形。</span>
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题12 · 同素分堆 · 情况二「允许空组」（2025 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>甲、乙、丙三个科室分别有 3 名、5 名和 2 名党员。现有 4 个去党校学习的名额，要求至少分配给 2 个科室。问有多少种不同的名额分配方式？</ExampleQuestion>
                      <ExampleOptions>A.9　B.10　C.11　D.12</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>4 个名额是<b>相同元素</b>，分给 3 个<b>不同的科室</b>，且题目只说"至少分给 2 个科室"——意味着<b>允许有科室一个都分不到</b>（空组）。<br />
                        ① <b>先按「允许空组」算总数</b>：把"空组"看成先给每个科室"预分 0 个"，用情况二的公式 C(n + m − 1, m − 1)：<br />
                        　 C(4 + 3 − 1, 3 − 1) = C(6, 2) = <b>15</b> 种；<br />
                        ② <b>再去掉不合题意的</b>：这 15 种里包含了"4 个名额全给同一个科室"的情况，共 <b>3</b> 种（给甲 / 给乙 / 给丙），它们只分了 1 个科室，不符合"至少 2 个科室"；<br />
                        ③ 15 − 3 = <b>12</b> 种。<br />
                        <span style={{ color: '#6b7280' }}>要点：遇到"至少分给 k 个科室""不能有空组"这类附加条件，先按<b>允许空组</b>算出总数，再减掉不满足条件的部分，比硬套公式快。</span>
                        <span className="correct">答案：D</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题13 · 同素分堆 · 情况三「每组至少 k 个」（2024 全国事业单位联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某单位将 11 本《党员学习手册》分发给甲、乙、丙共 3 个党支部。已知甲支部至少分得 3 本，乙支部至少分得 2 本，丙支部至少分得 4 本，问一共有多少种不同的分配方式？</ExampleQuestion>
                      <ExampleOptions>A.3　B.4　C.5　D.6</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>这是插板法的<b>变形三（每组至少 k 个）</b>：先"预分"，把下限削平，再套标准公式。
                              ① <b>预分</b>：先给甲 3 本、乙 2 本、丙 4 本（满足各自下限），共用去 3 + 2 + 4 = <b>9</b> 本；
                              ② 剩下 11 − 9 = <b>2</b> 本，可以任意分给 3 个支部，<b>允许某支部一本也拿不到</b>（因为下限已经满足）；
                              ③ 套「分给 m 组、每组至少 0 个」的公式 <b>C(n + m − 1, m − 1)</b>：C(2 + 3 − 1, 3 − 1) = C(4, 2) = <b>6</b> 种。
                              要点：<b>「每组至少 k 个」= 先给每组预分 (k − 1) 个，余下的用"至少 1 个"（或"至少 0 个"）公式</b>。
                              本类题判断三件事：元素是否相同、组是否相同、是否允许空组。<br />
                              <span style={{ color: '#6b7280' }}>另一种等价解法：先给每组预分 <b>k − 1</b> 个（甲 2、乙 1、丙 3，共 6 本），剩下 5 本分给 3 组且<b>每组至少 1 个</b> → C(5 − 1, 3 − 1) = C(4, 2) = 6，结果一样。两种算法都对，挑顺手的用。</span>
                        <span className="correct">答案：D</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>12. 传球问题</BlockTitle>
                    <Callout variant="key">
                      m 个人传球，从甲开始传 n 次后球回到甲手中，方法数为<br />
                      <b>[(m−1)ⁿ + (m−1) × (−1)ⁿ] ÷ m</b><br />
                      考场更实用的做法：<b>画树状图逐次递推</b>（n 通常很小，手算比套公式快且不容易错）。
                    </Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题14 · 传球问题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>甲、乙、丙 3 个人互相传球，从甲开始传 4 次后球回到甲手中，共有多少种不同的传球方法？</ExampleQuestion>
                <ExampleOptions>A.4　B.6　C.8　D.10</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>考场做法：<b>逐次递推</b>，记 f(n) 为传 n 次后球在甲手中的方法数。<br />传 1 次球必不在甲 → 甲 0 种，乙、丙各 1 种；<br />传 2 次：甲 2 种；传 3 次：甲 2 种；传 4 次：甲 = 传 3 次后乙 + 传 3 次后丙 = 3 + 3 = <b>6</b> 种。<br />（公式验证：[(m−1)ⁿ + (m−1)(−1)ⁿ] ÷ m = [2⁴ + 2] ÷ 3 = 6 ✓）
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
