import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 二十、统筹优化
 *
 * @returns 该节正文。
 */
export default function S22(): ReactElement {
  return (
    <>
      <Callout variant="key">
              统筹问题的本质都是一句话：<b>让"等待"和"空转"最少</b>。事业单位考得比国考多，属于"看着难、其实有口诀"的类型。
            </Callout>
                  <Block>
                          <BlockTitle>1. 排队取水（等待时间最短）</BlockTitle>
      
                        <figure className="fig">
                          <svg viewBox="0 0 460 210" role="img" aria-label="排队取水甘特图">
                            <text x={6} y={66} fontSize={13.5} fill="#1a1a2e" fontWeight="700">甲</text>
                            <text x={6} y={106} fontSize={13.5} fill="#1a1a2e" fontWeight="700">乙</text>
                            <text x={6} y={146} fontSize={13.5} fill="#1a1a2e" fontWeight="700">丙</text>
                            <rect x={40} y={50} width={66} height={24} rx={5} fill="#4f7cff" />
                            <rect x={106} y={90} width={110} height={24} rx={5} fill="#2ecc71" />
                            <rect x={216} y={130} width={176} height={24} rx={5} fill="#f39c12" />
                            <text x={52} y={67} fontSize={12.5} fill="#fff">3 分</text>
                            <text x={140} y={107} fontSize={12.5} fill="#fff">5 分</text>
                            <text x={282} y={147} fontSize={12.5} fill="#fff">8 分</text>
                            <path d="M106 40 L106 166 M216 40 L216 166 M392 40 L392 166" stroke="#9fb2d8" strokeWidth={1.2} strokeDasharray="4 4" />
                            <text x={96} y={184} fontSize={13} fill="#6b7280">3</text>
                            <text x={206} y={184} fontSize={13} fill="#6b7280">8</text>
                            <text x={382} y={184} fontSize={13} fill="#6b7280">16</text>
                            <text x={40} y={206} fontSize={13.5} fill="#1a1a2e" fontWeight="700">总时间 = 3 + 8 + 16 = 27 分钟</text>
                          </svg>
                          <figcaption>一个人打水的时间，要让排在他后面的<b>所有人</b>一起等 —— 所以把<b>用时最短的排最前</b>，让最长的时间影响最少的人。</figcaption>
                        </figure>
                          <Callout variant="formula">
                            <span className="formula">总时间 = Σ (第 i 人用时 × (总人数 − i + 1))</span>
                          </Callout>
                          <Callout variant="key">
                            <b>口诀：用时短的先做。</b>把用时<b>从小到大</b>排列，再按 1、2、3…… 的倍数依次相乘相加。<br />
                            （一个人打水的时间，会让后面所有人都等这么久 —— 所以"短的先上"能让最长的时间影响最少的人。）
                          </Callout>
                        </Block>
                  <Example>
                          <ExampleHeader>📝 例题1 · 排队取水</ExampleHeader>
                          <ExampleBody>
                            <ExampleQuestion>甲、乙、丙三人到只有一个水龙头的地方打水，各自需要 3、5、8 分钟。要使三人等待的总时间最短，应怎样安排顺序？最短总时间是多少？</ExampleQuestion>
                            <ExampleOptions>A.23 分钟　B.25 分钟　C.27 分钟　D.30 分钟</ExampleOptions>
                            <ExampleAnswer>
                              <b>解析：</b>用时短的先打 → 顺序为甲（3）→ 乙（5）→ 丙（8）<br />
                              总时间 = 3 × 3 + 5 × 2 + 8 × 1 = 9 + 10 + 8 = <b>27 分钟</b><br />
                              （一个人打水的时间，要让排在他后面的人都一起等，所以短的先上）<br />
                              <span className="correct">答案：C</span>
                            </ExampleAnswer>
                          </ExampleBody>
                        </Example>
                  <Block>
                          <BlockTitle>2. 货物集中（统筹运输）</BlockTitle>
                          <Callout variant="key">
                            <b>口诀：向重的一侧移动。</b><br />
                            从两端开始比较货物重量：把轻的一端的货<b>搬到重的一端方向去</b>，逐步缩小范围，最终落在"两边重量最接近"的那个点。<br />
                            验证方法：把货物集中到候选仓库，算 <b>Σ(吨数 × 距离)</b>，取最小值。
                          </Callout>
                        </Block>
                  <Example>
                          <ExampleHeader>📝 例题2 · 货物集中</ExampleHeader>
                          <ExampleBody>
                            <ExampleQuestion>5 个仓库沿一条直线等距排列，从左到右存货量分别为 1、2、3、4、5 吨。把所有货物集中到一个仓库，运费最省的是第几个仓库？</ExampleQuestion>
                            <ExampleOptions>A.第 2 个　B.第 3 个　C.第 4 个　D.第 5 个</ExampleOptions>
                            <ExampleAnswer>
                              <b>解析：</b>总重 15 吨，一半为 7.5 吨。从左往右累加：<br />
                              到第 2 个：左 1 + 2 = 3 &lt; 右 12 → 继续右移<br />
                              到第 3 个：左 1 + 2 + 3 = 6 &lt; 右 9 → 继续右移<br />
                              到第 4 个：左 1 + 2 + 3 + 4 = 10 &gt; 右 5 → <b>停在第 4 个</b><br />
                              <span className="correct">答案：C</span>
                            </ExampleAnswer>
                          </ExampleBody>
                        </Example>
                  <Block>
                          <BlockTitle>3. 过桥 / 过河（最短时间）</BlockTitle>
      
                        <figure className="fig">
                          <svg viewBox="0 0 460 160" role="img" aria-label="过桥最短时间步骤">
                            <g>
                              <rect x={8} y={26} width={82} height={76} rx={8} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.6} />
                              <text x={22} y={52} fontSize={13} fill="#2b4b9b" fontWeight="700">① 1、2 过</text>
                              <text x={34} y={84} fontSize={15} fill="#1a1a2e" fontWeight="700">2 分</text>
                            </g>
                            <g>
                              <rect x={98} y={26} width={82} height={76} rx={8} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.6} />
                              <text x={116} y={52} fontSize={13} fill="#2b4b9b" fontWeight="700">② 1 返回</text>
                              <text x={126} y={84} fontSize={15} fill="#1a1a2e" fontWeight="700">1 分</text>
                            </g>
                            <g>
                              <rect x={188} y={26} width={82} height={76} rx={8} fill="#fff0f0" stroke="#ff6b6b" strokeWidth={1.6} />
                              <text x={198} y={52} fontSize={13} fill="#c0392b" fontWeight="700">③ 5、10 过</text>
                              <text x={214} y={84} fontSize={15} fill="#1a1a2e" fontWeight="700">10 分</text>
                            </g>
                            <g>
                              <rect x={278} y={26} width={82} height={76} rx={8} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.6} />
                              <text x={296} y={52} fontSize={13} fill="#2b4b9b" fontWeight="700">④ 2 返回</text>
                              <text x={306} y={84} fontSize={15} fill="#1a1a2e" fontWeight="700">2 分</text>
                            </g>
                            <g>
                              <rect x={368} y={26} width={82} height={76} rx={8} fill="#eafaf1" stroke="#2ecc71" strokeWidth={1.6} />
                              <text x={382} y={52} fontSize={13} fill="#1a7a45" fontWeight="700">⑤ 1、2 过</text>
                              <text x={396} y={84} fontSize={15} fill="#1a1a2e" fontWeight="700">2 分</text>
                            </g>
                            <text x={10} y={130} fontSize={13.5} fill="#1a1a2e" fontWeight="700">合计 2 + 1 + 10 + 2 + 2 = 17 分钟</text>
                            <text x={10} y={149} fontSize={12.5} fill="#6b7280">让最慢的两人一起过，最快的两人当「搬运工」</text>
                          </svg>
                          <figcaption>关键是<b>别让最慢的人拖两次</b>：让最慢的两人一起过（只花一次最慢时间），再让最快的两人负责把手电筒送回来。</figcaption>
                        </figure>
                          <Callout variant="key">
                            特征：一次最多过 2 人、必须有人把工具（手电筒/船）送回来。<br />
                            <b>核心：让"最快的两个人"当搬运工。</b><br />
                            常见策略：① 最快的两人先过，最快的回来 ② 最慢的两人一起过，第二快的回来 ③ 最快的两人再过。
                          </Callout>
                        </Block>
                  <Example>
                          <ExampleHeader>📝 例题3 · 过桥（最短时间）</ExampleHeader>
                          <ExampleBody>
                            <ExampleQuestion>四人夜间过桥，只有一个手电筒，每次最多过 2 人，两人同行按慢者计时。四人单独过桥分别需 1、2、5、10 分钟，全部过桥最少需要多少分钟？</ExampleQuestion>
                            <ExampleOptions>A.15　B.16　C.17　D.19</ExampleOptions>
                            <ExampleAnswer>
                              <b>解析：</b>让最快的两人负责送手电筒，让最慢的两人一起过：<br />
                              ① 1、2 过（2 分）② 1 返回（1 分）③ 5、10 过（10 分）④ 2 返回（2 分）⑤ 1、2 再过（2 分）<br />
                              合计 2 + 1 + 10 + 2 + 2 = <b>17 分钟</b><br />
                              <span className="correct">答案：C</span>
                            </ExampleAnswer>
                          </ExampleBody>
                        </Example>
                  <Block>
                          <BlockTitle>4. 方案比较（田忌赛马型）</BlockTitle>
                          <PointList>
                            <li>把每个方案的<b>总成本 / 总时间</b>都算出来比大小，不要凭感觉。</li>
                            <li>注意"单位成本"陷阱：便宜的不一定总价低，要算<b>单位工作量成本</b>。</li>
                            <li>出现"最多能完成多少""最少需要几个"时，用<b>向上取整</b>。</li>
                          </PointList>
                        </Block>
                  <Example>
              <ExampleHeader>📝 例题4 · 方案比较（田忌赛马型）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>田忌与齐王各出上、中、下三等马比赛，三局两胜。已知同等马相比齐王的马都略强：齐王的三匹马实力值为 9、6、3，田忌的三匹马实力值为 8、5、2（数值大者胜）。田忌最多能赢几局？</ExampleQuestion>
                <ExampleOptions>A.0　B.1　C.2　D.3</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>硬碰硬地比我弱我全输：8 &lt; 9、5 &lt; 6、2 &lt; 3 → 0 胜，所以必须<b>错位比较</b>。<br />田忌的策略：用下等马（2）去对齐王的上等马（9）——主动输掉这一局；<br />再用上等马（8）对齐王的中等马（6）→ 赢；用中等马（5）对齐王的下等马（3）→ 赢。<br />结果 2 胜 1 负，最多赢 <b>2</b> 局。<br />要点：方案比较题不要凭感觉，把每个方案的「总得失」都列出来再比。
                  <br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      <Block>
                    <BlockTitle>5. 时间统筹（煮茶问题）</BlockTitle>
                    <Callout variant="key">
                      <b>识别：</b>题干列出<b>几件要做的事和各自耗时</b>，问「最少需要多少时间」（同时进行多项工作，时间最少）。<br />
                      <b>方法：见缝插针</b> ——<br />
                      ① 先做<b>必须先行</b>的那一步（如泡茶要先洗水壶、要先热锅）；<br />
                      ② 找出其中<b>耗时最长、且不需要人盯着</b>的一步（烧水、烙饼的等待、洗衣机洗衣），把它当成「空档」；<br />
                      ③ 把其余零碎小事<b>塞进这个空档</b>里完成；<br />
                      ④ 总时间 = <b>关键路径</b>上的时间（最长的那条链），而不是所有事情耗时相加。
                    </Callout>
                    <Callout variant="tip">和「排队取水」区分开：排队取水是<b>串联</b>（省的是别人的等待），煮茶是<b>并行</b>（省的是自己的等待）。</Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题5 · 时间统筹（煮茶问题）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>小李要泡茶招待客人，需要做四件事：洗水壶 1 分钟、烧水 8 分钟、洗茶杯 2 分钟、拿茶叶 1 分钟。问最少需要多少分钟才能泡好茶？</ExampleQuestion>
                      <ExampleOptions>A.12 分钟　B.11 分钟　C.9 分钟　D.8 分钟</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>时间统筹的关键是找<b>「不需要人盯着」的空档</b>，把零碎活儿塞进去。
                              ① 洗水壶必须<b>先做</b>（要用水壶烧水），花 1 分钟；
                              ② 烧水要 8 分钟，这 8 分钟里人是<b>空着的</b>—— 正好用来洗茶杯（2 分钟）+ 拿茶叶（1 分钟）= 3 分钟 &lt; 8 分钟，<b>塞得下</b>；
                              ③ 水开后即可泡茶 → 总时间 = 洗水壶 1 + 烧水 8 = <b>9</b>（分钟）。
                              对比：如果一件一件顺着做，就是 1 + 8 + 2 + 1 = 12 分钟，多了 3 分钟。
                              要点：<b>识别「同时进行多项工作，问时间最少」</b>→ 找关键路径，用「见缝插针」把短任务并进长任务的等待时间里。
                    <figure className="fig">
                      <svg viewBox="0 0 460 250" role="img" aria-label="煮茶问题的时间安排：烧水的同时洗茶杯拿茶叶">
                        <text x={14} y={22} fontSize={13.5} fill="#4f7cff" fontWeight="700">见缝插针：等水开的 8 分钟里做别的事</text>
                        <g fontSize={12.5} fill="#6b7280">
                          <text x={14} y={76}>洗水壶</text>
                          <text x={14} y={116}>烧　水</text>
                          <text x={14} y={156}>洗茶杯</text>
                          <text x={14} y={196}>拿茶叶</text>
                        </g>
                        <rect x={88} y={60} width={33} height={22} rx={4} fill="#dbe4ff" stroke="#4f7cff" strokeWidth={1.4} />
                        <rect x={121} y={100} width={267} height={22} rx={4} fill="#ffe8c2" stroke="#f39c12" strokeWidth={1.4} />
                        <rect x={121} y={140} width={67} height={22} rx={4} fill="#eafaf1" stroke="#2ecc71" strokeWidth={1.4} />
                        <rect x={188} y={180} width={33} height={22} rx={4} fill="#eafaf1" stroke="#2ecc71" strokeWidth={1.4} />
                        <text x={94} y={76} fontSize={11.5} fill="#2b4b9b">1 分</text>
                        <text x={200} y={116} fontSize={11.5} fill="#b8730d">8 分（水开）</text>
                        <text x={124} y={156} fontSize={11.5} fill="#1a7a45">2 分</text>
                        <text x={191} y={196} fontSize={11.5} fill="#1a7a45">1 分</text>
                        <line x1={121} y1={52} x2={121} y2={214} stroke="#c0392b" strokeWidth={1.4} strokeDasharray="5 4" />
                        <line x1={388} y1={52} x2={388} y2={214} stroke="#c0392b" strokeWidth={1.4} strokeDasharray="5 4" />
                        <text x={100} y={48} fontSize={12.5} fontWeight="700" fill="#c0392b">洗茶杯 + 拿茶叶塞进烧水的 8 分钟里</text>
                        <text x={14} y={238} fontSize={13} fill="#6b7280">总时间 = 洗水壶 1 分 + 烧水 8 分 = 9 分钟（洗杯子不再额外占时间）</text>
                      </svg>
                      <figcaption>煮茶类时间统筹：先做<b>必须先行</b>的那一步（洗水壶），再让<b>耗时长、不需要人盯着</b>的那步（烧水）
                        当「空档」，把其余零碎工作<b>见缝插针</b>塞进去。总时间 = 关键路径上的时间，而不是所有事相加。</figcaption>
                    </figure>
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                          <ExampleHeader>📝 例题6 · 时间统筹（烙饼）</ExampleHeader>
                          <ExampleBody>
                            <ExampleQuestion>一个平底锅一次最多能放 2 张饼，每张饼两面都要烙，每面需 3 分钟。现在要烙 5 张饼，最少需要多少分钟？</ExampleQuestion>
                            <ExampleOptions>A.15　B.18　C.21　D.30</ExampleOptions>
                            <ExampleAnswer>
                              <b>解析：</b>5 张饼共 10 个"面"，锅每 3 分钟能烙 2 个面 → (10 ÷ 2) × 3 = <b>15 分钟</b><br />
                              口诀：锅一次 2 张、n 张饼（n ≥ 2）→ 最少 = n × 每面时间 = 5 × 3 = 15<br />
                              <span className="correct">答案：A</span>
                            </ExampleAnswer>
                          </ExampleBody>
                        </Example>
    </>
  )
}
