import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList, SubPoint } from '@/components/content'

/**
 * 四、工程问题
 *
 * @returns 该节正文。
 */
export default function S6(): ReactElement {
  return (
    <>
      <Callout variant="formula">
              <span className="formula">工作总量 = 工作效率 × 工作时间（W = P × T）</span>
            </Callout>
                  <Block>
                    <BlockTitle>1. 具体单位型</BlockTitle>
                    <PointList>
                      <li>特征：有具体的效率或总量，有单位</li>
                      <li>方法：列方程，根据问题求解</li>
                      <li>选项尾数不同时，只用看尾数</li>
                    </PointList>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题1 · 具体单位型（提前完成 · 2024 广东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>档案室需要整理 300 份档案，要求每天整理的档案数量相同，且规定了完成的期限。如果要提前一天完成，那么每天需要多整理 10 份档案。则规定的期限为（　　）天。</ExampleQuestion>
                      <ExampleOptions>A.6　B.7　C.8　D.9</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>给了具体总量（300 份），属于<b>具体单位型</b>；又只有「期限」一个未知数，直接列方程或代入都能做。<br /><b>代入法（更快）：</b>原计划 d 天、每天 300 ÷ d 份 →<br />· d = 6 → 每天 50 份；提前一天变成 5 天，需每天 60 份 = 50 + 10 ✓<br />· d = 7 / 8 / 9 → 300 ÷ d 不是整数，直接排除。<br /><b>列方程：</b>(300 ÷ d + 10) × (d − 1) = 300 → 10d² − 10d − 300 = 0 → d² − d − 30 = 0 → d = 6。<br /><span style={{ color: '#6b7280' }}>提示：这道题「选项信息充分」，先代再列式往往更快 —— 这正是赋值 / 代入的用武之地。</span>
                    <span className="correct">答案：A</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
              <ExampleHeader>📝 例题2 · 具体单位型（列方程）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>一项加工任务共 1200 个零件。甲车间每天加工 45 个，乙车间每天加工 35 个。两车间同时开工，多少天可以完成？</ExampleQuestion>
                <ExampleOptions>A.12　B.14　C.15　D.16</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>题目给了具体总量和具体效率，属于<b>具体单位型</b>，直接列方程。合作效率 = 45 + 35 = 80 个/天，所需时间 = 1200 ÷ 80 = <b>15</b> 天。
                  <br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>2. 完工时间型【考频最高】</BlockTitle>
                    <Callout variant="key">
                      <b>三步走：</b><br />
                      第一步：赋值总量为各完工时间的<b>最小公倍数</b><br />
                      第二步：求各主体效率 = 总量 ÷ 时间<br />
                      第三步：列表或列方程求解
                    </Callout>
                    <SubPoint>复杂方程型：不会解就代入选项</SubPoint>
                    <SubPoint>变形：工程费用、周期循环工程、多个工程的完工时间型</SubPoint>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题3 · 完工时间型（2024 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>有一批零件，如果甲车间单独完成需要 50 小时，乙车间单独完成需要 30 小时。在甲车间单独完成若干小时后，由于要承担其他紧急任务，剩余的任务由乙车间继续完成，这样一共用了 42 小时。问乙车间完成的零件量占这批零件总量的（　　）。</ExampleQuestion>
                      <ExampleOptions>A. 3/4　B. 3/5　C. 2/5　D. 1/3</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>完工时间型三步走 ——
                              ① <b>赋值总量 = 50 与 30 的最小公倍数 = 150</b>；
                              ② 求效率：甲 = 150 ÷ 50 = <b>3</b>，乙 = 150 ÷ 30 = <b>5</b>；
                              ③ 设甲做了 x 小时，则乙做了 (42 − x) 小时，由「总量守恒」列式：
                              　 3x + 5(42 − x) = 150 → 3x + 210 − 5x = 150 → −2x = −60 → <b>x = 30</b>；
                              ④ 乙做 42 − 30 = 12 小时 → 乙完成 5 × 12 = 60，占总量 60 ÷ 150 = <b>2/5</b>。
                              要点：<b>「谁做了几天」直接写成总量方程</b>，不要去逐段推算每种情形用了多久，那是最容易算错的地方。
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>3. 效率比例型</BlockTitle>
                    <Callout variant="key">
                      <b>一、直接给效率比</b> → 按比例<b>赋值效率</b>（效率比的一份设为 1）：甲∶乙 = 3∶4 就赋 3、4；<br />
                      「甲的效率是乙的 2.5 倍」「甲比乙高 25%」也属于这一类，先化成比。
                    </Callout>
                    <SubPoint><b>二、间接给：以工作量推效率关系</b> —— <br />
                      　 · 甲 4 天的工作量 = 乙 3 天的工作量 → 4甲 = 3乙 → 甲∶乙 = <b>3∶4</b>（反比）；<br />
                      　 · 甲先做 10 天、剩下两队合作 30 天完成 → 把两种方案的总量分别列出来，时间比即效率的反比。</SubPoint>
                    <SubPoint><b>三、给具体人数或机器数</b>（50 个工人修路、80 台挖掘机）→ <b>直接赋值每个人（台）的效率为 1</b>，总量就是"人数 × 天数"。</SubPoint>
                    <SubPoint>另外还有：<b>给定总量比与时间比，求效率比</b>（效率 = 总量 ÷ 时间）。</SubPoint>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题4 · 效率比例型（2025 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>甲、乙、丙合作完成一项工程。如甲 8 天、乙 6 天、丙 4 天依次工作刚好可完工；现甲、乙合作 6 天后，剩下的工程丙恰好单独 5 天完工。已知甲的效率是乙的 1.5 倍，问丙单独完成需要多少天？</ExampleQuestion>
                      <ExampleOptions>A.10　B.15　C.20　D.30</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>题目给的是「甲是乙的 1.5 倍」——属于<b>间接给效率比</b>，先把它化成最简比：
                              甲∶乙 = 1.5∶1 = 3∶2 → <b>赋甲效率 = 3、乙效率 = 2</b>（设丙效率为 c）。
                              ① 方案一（13 天依次工作）的总量：(3×8) + (2×6) + (4×c) = 24 + 12 + 4c = <b>36 + 4c</b>；
                              ② 方案二（甲乙合作 6 天 + 丙单独 5 天）的总量：(3+2)×6 + 5c = 30 + 5c = <b>30 + 5c</b>；
                              ③ 两个方案是同一项工程 → 总量相等：36 + 4c = 30 + 5c → <b>c = 6</b>；
                              ④ 总量 = 30 + 5×6 = 60 → 丙单独完成需 60 ÷ 6 = <b>10</b>（天）。
                              要点：<b>「两种不同干法完成同一项工程」→ 两个总量表达式相等</b>，一步就能把未知效率解出来。
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>4. 牛吃草问题</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">普通型：y = (N - x) × T</span><br />
                      <span className="formula">变形型：y = (N + x) × T</span>
                    </Callout>
                    <PointList>
                      <li>y = 原有草量，N = 牛的数量，x = 草生长速度，T = 时间</li>
                      <li>列两个方程，消去y，求x，再求所需量</li>
                    </PointList>
                    <Callout variant="key"><b>四种常见变形（讲义原列，识别比计算重要）：</b><br />
                      <b>变形 1 · 牛羊吃草</b>：先按头数把"羊"换算成"牛"（如 1 牛 = 4 羊），统一成一个主体再套公式。<br />
                      <b>变形 2 · 给单个牛的效率</b>：效率就是 n × 单个效率，把 N 换成"N × 每头每天吃草量"。<br />
                      <b>变形 3 · 氧气瓶漏气 / 池子进水又排水</b>：消耗与增长<b>同向</b>时公式变成 <b>y = (n + x) × T</b>（漏气加速消耗）。<br />
                      <b>变形 4 · 牛的效率变化</b>：不同阶段牛的数量（或效率）不一样 → <b>分阶段</b>列式，每段用一次 y = (N−x)T。</Callout>
                    <Callout variant="warn">别漏了消长量 x！先判断 x 是"帮着增加"还是"跟着消耗"，再决定括号里是 N−x 还是 N+x。</Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题5 · 牛吃草（2023 广东 · 变形 1 牛羊吃草）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某牧场的草匀速生长。如果 20 头牛来吃，20 天可将草吃光；如果 10 头牛和 10 只羊来吃，30 天可以恰好吃光。已知一头牛每天的吃草量是一只羊的 2 倍，则 30 只羊吃该牧场的草，多少天可以吃光？</ExampleQuestion>
                      <ExampleOptions>A.10　B.20　C.30　D.40</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>先做<b>变形 1 的换算</b>：一头牛 = 两只羊 → <b>30 只羊 = 15 头牛</b>，「10 牛 + 10 羊」= 10 + 5 = <b>15 头牛</b>。
                              统一成"头牛"后，设每头牛每天吃 1 份，草每天长 x 份、原有 y 份：
                              ① 20 头吃 20 天：y + 20x = 20 × 20 = 400；
                              ② 15 头吃 30 天：y + 30x = 15 × 30 = 450；
                              ③ 两式相减：10x = 50 → <b>x = 5</b>；回代得 y = 400 − 100 = <b>300</b>；
                              ④ 30 只羊 = 15 头牛：设吃 T 天，300 + 5T = 15T → 10T = 300 → T = <b>30</b>（天）。
                              要点：<b>牛羊混着出现，第一步必须换算成同一主体</b>；换算完就是标准的两方程消 y 求 x。
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>5. 统筹工程 & 工程图形</BlockTitle>
                    <PointList>
                      <li><b>统筹工程</b>：<b>擅长的人，干擅长的事</b> —— 先比较各队的「单位工作量成本 / 单位时间产出」，<br />
                        把每项任务派给相对最擅长的一方，再排序求解。</li>
                      <li><b>工程图形</b>：看图的<b>时间关系、效率关系</b>；<b>做题方法是排除法</b> —— 图里能直接读出的量先定死，<br />
                        剩下的选项逐个排除，不要去硬算每段的精确值。</li>
                    </PointList>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题6 · 统筹工程（中途增加工作量 · 2025 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某单位接到一项任务，探访所在辖区的商户了解相关信息。原计划由 5 人 10 天完成探访 200 家商户的工作任务，工作 5 天后，由于工作调整，需要增加探访辖区的 300 家商户。假定所有人工作效率相同，若仍要求在原计划时间之内完成，则需要增加的人数为（　　）。</ExampleQuestion>
                      <ExampleOptions>A.10 人　B.15 人　C.20 人　D.25 人</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>先求<b>单人效率</b>（题目说"效率相同"，这是关键）：
                              ① 单人效率 = 200 ÷ (5 人 × 10 天) = <b>4</b>（家/人·天）；
                              ② 前 5 天完成 200 × 5/10 = 100 家 → 原任务只剩 100 家；
                              ③ 又新增 300 家 → 剩下共 100 + 300 = <b>400</b> 家；
                              ④ 剩下时间 = 10 − 5 = 5 天 → 需要 400 ÷ (4 × 5) = <b>20</b> 人；
                              ⑤ 原来只有 5 人 → 需增加 20 − 5 = <b>15</b> 人。
                              要点：统筹工程题先<b>算出"单人单位时间的产出"</b>，再把"剩余工作量 ÷ 剩余时间 ÷ 单人产出"就是所需人数。<br />特别注意<b>剩下的时间只有 5 天</b>（不是 10 天），这一步错了答案会翻倍。
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>6. 周期循环工程（确定周期型）</BlockTitle>
                    <Callout variant="key">
                      特征：甲做一天歇一天、乙做两天歇一天…… 问"第几天完成"。<br />
                      <b>方法：</b>① 找出各主体的工作周期（如 3 天一轮）<br />
                      ② 算出一个完整周期的总工作量　③ 看需要几个完整周期　④ 剩余部分再单独算
                    </Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题7 · 周期循环工程（2021 四川下）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某项工程，甲、乙、丙三个工程队如单独施工，分别需要 12 小时、10 小时和 8 小时完成。现按「甲—乙—丙—甲……」的顺序让三个工程队轮班，每队施工 1 小时后换班，问该工程完成时，甲工程队的施工时间共计（　　）。</ExampleQuestion>
                      <ExampleOptions>A.2 小时 54 分　B.3 小时　C.3 小时 54 分　D.4 小时</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>这是"确定周期型"的周期循环工程，四步走：
                              ① 求各队效率：甲 1/12、乙 1/10、丙 1/8（也可以赋总量 120，则效率为 10、12、15）；
                              ② 一个完整周期（3 小时，甲乙丙各 1 小时）完成 1/12 + 1/10 + 1/8 = 37/120；
                              ③ 3 个完整周期（9 小时）完成 3 × 37/120 = 111/120，剩余 1 − 111/120 = <b>3/40</b>；
                              ④ 第 10 小时轮到甲：甲 1 小时能做 1/12 = 10/120 &gt; 3/40 = 9/120，做不满 1 小时 →
                              　 所需时间 = (3/40) ÷ (1/12) = <b>9/10 小时 = 54 分钟</b>。
                              所以甲共施工 1 + 1 + 1（前三个周期各 1 小时）+ 54 分 = <b>3 小时 54 分</b>。
                              要点：<b>先把"整个周期"做完再处理尾巴</b>；尾巴落在谁身上，就只算那一个人的时间，别把整个周期都算进去。
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>7. 多个工程与工程费用</BlockTitle>
                    <PointList>
                      <li><b>多个工程</b>：分别赋值（或统一赋值），把各工程的工作量方程联立求解。</li>
                      <li><b>工程费用（最省钱）</b>：先算各队单独完成的效率与单价，再用<b>每天费用 ÷ 每天效率</b>得到<b>单位工作量成本</b>，优先用成本低的队。</li>
                    </PointList>
                    <Callout variant="tip">工程题的"性价比"比法：<b>不是比每天谁便宜，而是比"干同样的活谁花钱少"</b>——很多同学在这里丢分。</Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题8 · 多个工程与工程费用</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某工程若由甲队单独做需 24 天，每天施工费 1.2 万元；若由乙队单独做需 36 天，每天施工费 0.8 万元。现两队同时施工，完工时的总施工费是多少万元？</ExampleQuestion>
                <ExampleOptions>A.27.2　B.28.8　C.30　D.32</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>赋值总量 = lcm(24, 36) = 72，则甲效率 = 3，乙效率 = 2，合作效率 = 5。<br />合作工期 = 72 ÷ 5 = 14.4 天。<br />总费用 = 14.4 × (1.2 + 0.8) = 14.4 × 2 = <b>28.8</b> 万元。<br />提醒：比较两队谁更省，要算 <b>每天费用 ÷ 每天效率 = 单位工作量成本</b>，而不是直接比每天的报价。
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
          
                  <Block>
                    <BlockTitle>8. 补充考点 5：暑假作业型</BlockTitle>
                    <Callout variant="key"><b>情景：</b>「开始乖、中间玩，最后把所有<b>未完成的工作量</b>在更短时间里加班加点赶完」</Callout>
                    <SubPoint>方法：把「正常效率干了一段」和「剩余工作量突击完成」<b>分成两段</b>，用<b>总量守恒</b>列式。</SubPoint>
                    <Callout variant="tip">计算技巧：<b>约分</b> —— 把工作总量设成效率的公倍数，数字会小很多、算得快。</Callout>
                  </Block>
                    <Example>
                    <ExampleHeader>📝 例题9 · 暑假作业型（2018 国考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>工程队接到一项工程，投入 80 台挖掘机。如连续施工 30 天，每天工作 10 小时，正好按期完成。但施工过程中遭遇大暴雨，有 10 天时间无法施工，工期还剩 8 天时，工程队增派 70 台挖掘机并加班施工。问工程队若想按期完成，平均每天需多工作多少个小时？</ExampleQuestion>
                      <ExampleOptions>A. 2.5　B. 3　C. 1.5　D. 2</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>总量 = 80 × 30 × 10 = 24000（台·小时）。<br />实际前期正常施工：30 − 10（暴雨）− 8（最后突击）= <b>12 天</b> → 完成 80 × 12 × 10 = 9600。<br />剩余 = 24000 − 9600 = 14400。<br />最后 8 天有 80 + 70 = 150 台，设每天工作 h 小时：150 × 8 × h = 14400 → h = 12。<br />原来每天 10 小时 → 需<b>多工作 12 − 10 = 2 小时</b>。<br />
                        <span className="correct">答案：D</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>9. 补充考点 6：同时开始同时结束</BlockTitle>
                    <Callout variant="key"><b>题型特征：</b>N 个人完成 (N−1) 项工作，有一个人「<b>打游击</b>」帮工，<b>同时开始、同时结束</b></Callout>
                    <Callout variant="formula"><span className="formula">完工时间 = 工作总量 ÷ 效率和</span></Callout>
                    <SubPoint><b>套路 ① 整体分析：</b>把几项工程合起来当总量，除以所有参与者的效率和 → 得到总时长。</SubPoint>
                    <SubPoint><b>套路 ② 抓住问题：</b>只看被问的那项工程，用「它自己的量 = 固定人 × 总时长 + 打游击的人 × 帮工天数」反求帮工天数。</SubPoint>
                    <Callout variant="tip">例：甲（效率 7）负责 A、乙（9）负责 B、丙（8）机动，两项同时开工、8 天同时结束 → 单项工程量 = 8 × (7+9+8) ÷ 2 = 96。</Callout>
                  </Block>
                    <Example>
                    <ExampleHeader>📝 例题10 · 同时开始同时结束（2018 江西）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>甲、乙、丙三人工作的效率比为 7∶9∶8，现将 A、B 两项工作量相同的工程交给这三个人，甲负责 A 工程，乙负责 B 工程，丙作为机动参与 A 工程若干天后转而参与 B 工程，两项工程同时开工，耗时 8 天同时结束，问丙在 A 工程中参与施工多少天？</ExampleQuestion>
                      <ExampleOptions>A. 3　B. 4　C. 5　D. 6</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>设效率为 7、9、8，总时长 8 天 → 总工作量 = 8 × (7+9+8) = 192。<br />A、B 工作量相同 → 每项 = 192 ÷ 2 = <b>96</b>。<br />设丙在 A 工程参与 x 天：A 的量 = 甲做满 8 天 + 丙帮 x 天 → 7×8 + 8x = 96 → 8x = 40 → x = <b>5</b>（天）。<br />
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
    </>
  )
}
