import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 七、容斥原理
 *
 * @returns 该节正文。
 */
export default function S9(): ReactElement {
  return (
    <>
      <Block>
                    <BlockTitle>1. 两集合标准型</BlockTitle>
      
                  <figure className="fig">
                    <svg viewBox="0 0 420 210" role="img" aria-label="两集合容斥文氏图">
                      <circle cx={150} cy={95} r={72} fill="#4f7cff" fillOpacity="0.22" stroke="#4f7cff" strokeWidth={1.8} />
                      <circle cx={240} cy={95} r={72} fill="#2ecc71" fillOpacity="0.22" stroke="#2ecc71" strokeWidth={1.8} />
                      <text x={100} y={100} fontSize={15} fill="#2b4b9b" fontWeight="700">A</text>
                      <text x={286} y={100} fontSize={15} fill="#1a7a45" fontWeight="700">B</text>
                      <text x={182} y={100} fontSize={13.5} fill="#1a1a2e" fontWeight="700">A∩B</text>
                      <text x={60} y={188} fontSize={14} fill="#6b7280">A 的人数</text>
                      <text x={176} y={188} fontSize={14} fill="#6b7280">两样都的人数</text>
                      <text x={316} y={188} fontSize={14} fill="#6b7280">B 的人数</text>
                      <text x={90} y={24} fontSize={15} fill="#4f7cff" fontWeight="700">A + B − A∩B = 总数 − 都不满足</text>
                    </svg>
                    <figcaption>把「属于 A 的」和「属于 B 的」直接相加，<b>两样都属于的那部分被数了两次</b>，所以要减掉一次。</figcaption>
                  </figure>
                    <Callout variant="formula">
                      <span className="formula">A + B - A∩B = 总数 - 都不满足</span>
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题1 · 两集合容斥</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某班38名学生参加两次测试，第一次12人得A，第二次16人得A，两次都没得A的有15人。两次都得A的有多少人？</ExampleQuestion>
                      <ExampleOptions>A.5　B.6　C.8　D.10</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>套公式 A+B-A∩B=总数-都不满足<br />
                        12+16-x=38-15 → 28-x=23 → x=<b>5</b><br />
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>2. 三集合标准型</BlockTitle>
      
                  <figure className="fig">
                    <svg viewBox="0 0 420 230" role="img" aria-label="三集合容斥文氏图">
                      <circle cx={160} cy={85} r={62} fill="#4f7cff" fillOpacity="0.2" stroke="#4f7cff" strokeWidth={1.6} />
                      <circle cx={260} cy={85} r={62} fill="#2ecc71" fillOpacity="0.2" stroke="#2ecc71" strokeWidth={1.6} />
                      <circle cx={210} cy={160} r={62} fill="#f39c12" fillOpacity="0.2" stroke="#f39c12" strokeWidth={1.6} />
                      <text x={112} y={80} fontSize={15} fill="#2b4b9b" fontWeight="700">A</text>
                      <text x={298} y={80} fontSize={15} fill="#1a7a45" fontWeight="700">B</text>
                      <text x={204} y={212} fontSize={15} fill="#b8730d" fontWeight="700">C</text>
                      <text x={196} y={128} fontSize={12.5} fill="#1a1a2e">三样都</text>
                      <text x={60} y={24} fontSize={14} fill="#4f7cff" fontWeight="700">A+B+C − AB − AC − BC + ABC = 总数 − 都不</text>
                    </svg>
                    <figcaption>三集合同理：三块单独相加时，<b>两两重叠的被多算、三样都的又被减多</b>，所以要「减两两、加三样都」。</figcaption>
                  </figure>
                    <Callout variant="formula">
                      <span className="formula">A + B + C - A∩B - A∩C - B∩C + A∩B∩C = 总数 - 都不满足</span>
                    </Callout>
                    <Callout variant="tip">适用：题目给出"满足AB""满足AC""满足BC"的数值</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题2 · 三集合标准型</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>对 39 种食物进行调查：含甲成分的 17 种、含乙的 18 种、含丙的 15 种，其中同时含甲、乙的 7 种，同时含甲、丙的 6 种，同时含乙、丙的 9 种，三种成分都不含的 7 种。问三种成分都含的有多少种？</ExampleQuestion>
                      <ExampleOptions>A.4　B.6　C.7　D.9</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>「三种都含」就是三集合标准型公式里的交叠项，直接套公式：<br />A + B + C − AB − AC − BC + ABC = 总数 − 都不<br />17 + 18 + 15 − 7 − 6 − 9 + x = 39 − 7<br />50 − 22 + x = 32 → 28 + x = 32 → <b>x = 4</b>。<br /><span style={{ color: '#6b7280' }}>验证：4 种三者都含，落在总数 39 − 7 = 32 之内，合理。</span>
                    <span className="correct">答案：A</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>3. 三集合非标准型</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">A + B + C - 只满足两项 - 2×满足三项 = 总数 - 都不满足</span>
                    </Callout>
                    <Callout variant="tip">适用：题目给出"只满足两个条件""三个都满足"的表述</Callout>
                    <Callout variant="key"><b>非标准型的变形（讲义 p21）：</b>当题干给的是「<b>至少满足两个条件</b>」时，<br />
                      先用 <b>至少满足两个 = 满足两个 + 满足三个</b> 把它拆开，再代公式：<br />
                      <b>A + B + C −（满足两项 + 满足三项）− 满足三项 = 总 − 都不</b>。<br />
                      <b>标准型 / 非标准型怎么分：</b>标准型是分别给出「既 A 又 B、既 A 又 C、既 B 又 C」三个两两交集；<br />
                      非标准型只给「满足两种/只满足两种」的总数 —— 看题干给的是"分开的三个交集"还是"合在一起的两项数"即可。</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题3 · 三集合非标准型</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某企业调查用户获取信息的习惯：179 人使用搜索引擎，146 人使用官网，246 人使用社交网站，其中同时使用三种的有 115 人，只使用两种的有 24 人，三种都不使用的有 52 人。问本次共调查了多少人？</ExampleQuestion>
                      <ExampleOptions>A.310　B.369　C.390　D.410</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>题干给的是「<b>只</b>使用两种」和「三种都用」，这正是<b>非标准型</b>的特征，用只两项的形式：<br />A + B + C − <b>只两项</b> − 2 × <b>三项</b> = 总数 − 都不<br />179 + 146 + 246 − 24 − 2 × 115 = 571 − 24 − 230 = <b>317</b><br />317 = 总数 − 52 → 总数 = <b>369</b>。<br /><span style={{ color: '#6b7280' }}>⚠️ 记牢两个公式的区别：标准型减的是「两两交集」，非标准型减的是「只满足两项」，且三项要减两次。</span>
                    <span className="correct">答案：B</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>4. 画图法</BlockTitle>
                    <Callout variant="key">
                      出现"只A"等非标准表述 → 立刻画韦恩图<br />
                      数据往圈里填，从内向外填（先填最里面的交集，再填各部分，最后填都不满足的）
                    </Callout>
                    <Callout variant="tip">选项尾数不同时，只看尾数快速判断</Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题4 · 画图法（韦恩图）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某班学生中，会下象棋的有 22 人，会下围棋的有 18 人，两种棋都不会下的有 6 人，两种棋都会下的有 8 人。这个班共有多少人？</ExampleQuestion>
                <ExampleOptions>A.36　B.38　C.40　D.42</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>出现「都会 / 都不会」这类非标准表述 → 先画韦恩图，从里往外填（见下图）。<br />会至少一种棋的人数 = 22 + 18 − 8 = 32 人。<br />全班人数 = 会下棋的 + 都不会下的 = 32 + 6 = <b>38</b> 人。
                  <figure className="fig">
                    <svg viewBox="0 0 460 250" role="img" aria-label="例题韦恩图：只象棋14、都会8、只围棋10、都不会6">
                      <rect x={26} y={20} width={408} height={196} rx={12} fill="#f7f9ff" stroke="#9fb2d8" strokeWidth={1.6} strokeDasharray="6 5" />
                      <text x={36} y={40} fontSize={13.5} fill="#6b7280" fontWeight="700">全班（= ？人）</text>
                      <circle cx={170} cy={118} r={82} fill="#4f7cff" fillOpacity="0.18" stroke="#4f7cff" strokeWidth={1.8} />
                      <circle cx={290} cy={118} r={82} fill="#2ecc71" fillOpacity="0.18" stroke="#2ecc71" strokeWidth={1.8} />
                      <text x={86} y={76} fontSize={14} fill="#2b4b9b" fontWeight="700">象棋 22</text>
                      <text x={292} y={76} fontSize={14} fill="#1a7a45" fontWeight="700">围棋 18</text>
                      <text x={112} y={124} fontSize={16} fill="#1a1a2e" fontWeight="700">14</text>
                      <text x={214} y={124} fontSize={16} fill="#ff6b6b" fontWeight="700">8</text>
                      <text x={306} y={124} fontSize={16} fill="#1a1a2e" fontWeight="700">10</text>
                      <text x={140} y={152} fontSize={12} fill="#6b7280">只象棋</text>
                      <text x={204} y={152} fontSize={12} fill="#6b7280">都会</text>
                      <text x={316} y={152} fontSize={12} fill="#6b7280">只围棋</text>
                      <text x={352} y={200} fontSize={15} fill="#6b7280" fontWeight="700">都不会 6</text>
                      <text x={34} y={240} fontSize={12.5} fill="#4f7cff" fontWeight="700">从里往外填：8 → 14 / 10 → 6</text>
                    </svg>
                    <figcaption><b>从内向外填</b>：① 都会 = <b>8</b>；② 只象棋 = 22 − 8 = <b>14</b>，只围棋 = 18 − 8 = <b>10</b>；
                      ③ 圈外什么都不满足的 = <b>6</b>。全部相加 14 + 8 + 10 + 6 = <b>38 人</b>。</figcaption>
                  </figure>
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      <Block>
                    <BlockTitle>5. 容斥的方法选择（公式法 vs 画图法）</BlockTitle>
                    <Callout variant="key">
                      <b>第一步先判断用哪种方法（这一步比套公式更重要）：</b><br />
                      <b>① 公式法</b> —— 题干给的、题目问的，<b>都是公式里的量</b>（总数、A、B、C、A∩B、都不……）：<b>直接套，快准狠</b>。<br />
                      <b>② 画图法</b> —— 题干给的或所求在公式里没有，或者缺少代公式必需的数据。典型特征：<br />
                      　 出现「<b>只参加 A</b>」「<b>参加 A 但不参加 B</b>」这类「只……」的表述。<br />
                      <b>画图三步走：</b>① 画圈圈（每类画一个圈，圈外留位置表示都不满足）；<br />
                      　 ② 标数字（<b>从里到外</b>，最里层是最多条件同时满足的交集，<b>注意去重</b>）；③ 列算式。
                    </Callout>
                    <Callout variant="tip">口诀：<b>能套公式就套公式，看见「只」字就画图</b>；标数字必须从最里层往外填，否则一定重复计数。</Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题5 · 方法选择（三步走画图法）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某单位共有 37 人，其中会英语的有 25 人，会日语的有 18 人。已知<b>只会其中一种语言</b>的有 21 人，问两种语言都会的有多少人？</ExampleQuestion>
                      <ExampleOptions>A.9　B.10　C.11　D.12</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>题干给的是「<b>只会其中一种</b>」—— 这是公式里没有的量，属于典型该<b>画图</b>的题。
                              <b>第一步 画圈圈：</b>画两个相交的圈（英语 A、日语 B），圈外留一块表示两种都不会。
                              <b>第二步 标数字（从里到外，注意去重）：</b>设两样都会的为 x，
                              　 则「只会英语」= 25 − x、「只会日语」= 18 − x（<b>都要减掉交集，否则重复计数</b>）；
                              <b>第三步 列算式：</b>只会一种 = (25 − x) + (18 − x) = 43 − 2x = 21 → 2x = 22 → x = <b>11</b>。
                              回代验证：只会英语 14 + 只会日语 7 = 21 ✓；至少会一种 = 14 + 11 + 7 = 32；两种都不会 = 37 − 32 = 5，数据自洽 ✓
                              要点：<b>「只……」一出现就画图</b>；画图三步走固定为 <b>画圈圈 → 标数字（从里到外，注意去重）→ 列算式</b>，
                              其中「标数字」是最容易错的一步 —— 每个「只参加某个」都必须在总数里<b>减去交集</b>。
                    <figure className="fig">
                      <svg viewBox="0 0 460 250" role="img" aria-label="容斥方法的判断流程：先看能否套公式，不能则画图三步走">
                        <text x={14} y={22} fontSize={13.5} fill="#4f7cff" fontWeight="700">容斥：先判断用哪种方法</text>
                        <rect x={120} y={40} width={220} height={42} rx={10} fill="#e8efff" stroke="#4f7cff" strokeWidth={1.8} />
                        <text x={230} y={67} textAnchor="middle" fontSize={13.5} fontWeight="700" fill="#2b4b9b">已知与所求都是公式里的量？</text>
                        <path d="M230 82 L230 104" stroke="#3f4a5f" strokeWidth={1.6} />
                        <path d="M230 104 l-6 -9 h12 z" fill="#3f4a5f" />
                        <rect x={34} y={110} width={176} height={52} rx={10} fill="#eafaf1" stroke="#2ecc71" strokeWidth={1.8} />
                        <text x={122} y={132} textAnchor="middle" fontSize={13} fontWeight="700" fill="#1a7a45">是 → 公式法</text>
                        <text x={122} y={152} textAnchor="middle" fontSize={12} fill="#6b7280">清晰明了，快准狠</text>
                        <rect x={250} y={110} width={176} height={52} rx={10} fill="#fff5f5" stroke="#ff6b6b" strokeWidth={1.8} />
                        <text x={338} y={132} textAnchor="middle" fontSize={13} fontWeight="700" fill="#c0392b">否 → 画图法</text>
                        <text x={338} y={152} textAnchor="middle" fontSize={12} fill="#6b7280">出现「只A」/ 缺数据</text>
                        <rect x={70} y={180} width={320} height={52} rx={10} fill="#fbfcff" stroke="#9fb2d8" strokeWidth={1.6} strokeDasharray="6 4" />
                        <text x={230} y={200} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#4f7cff">画图三步走</text>
                        <text x={230} y={220} textAnchor="middle" fontSize={12.5} fill="#6b7280">① 画圈圈　② 标数字（从里到外，注意去重）　③ 列算式</text>
                      </svg>
                      <figcaption>判断题干的<b>「已知」和「所求」是不是公式里的量</b>：都是 → 直接套公式；
                        出现<b>「只参加 A」「参加 A 但不参加 B」</b>，或缺少代公式必需的数据 → 改用画图法。</figcaption>
                    </figure>
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>6. 多集合反向构造</BlockTitle>
                    <Callout variant="key">
                      <b>特征：</b>"都……至少……" / "至少……都……"<br />
                      <b>方法：</b>反向 → 加和 → 作差<br />
                      A∩B最小 = a + b - 总数<br />
                      A∩B∩C最小 = a + b + c - 2×总数<br />
                      A∩B∩C∩D最小 = a + b + c + d - 3×总数<br />
                      <b>通式：n 个集合 → 加和 − (n − 1) × 总数</b>
                    </Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题6 · 多集合反向构造</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某班有 50 名学生，其中喜欢篮球的有 40 人，喜欢足球的有 38 人，喜欢排球的有 35 人。三种球类都喜欢的最少有多少人？</ExampleQuestion>
                <ExampleOptions>A.10　B.13　C.15　D.18</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「都……至少……」→ 用<b>反向 → 加和 → 作差</b>。<br />不喜欢篮球、足球、排球的人数分别为 10、12、15 人。<br />至少一种不喜欢的至多 10 + 12 + 15 = 37 人，所以三种都喜欢的至少 50 − 37 = <b>13</b> 人。<br />（公式速算：40 + 38 + 35 − 2 × 50 = 13）
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>7. 容斥结合不定方程（最值）</BlockTitle>
                    <Callout variant="tip">问法：求最值；方法：此消彼长</Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题7 · 容斥结合不定方程（最值）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某班有 50 人，参加数学兴趣小组的有 30 人，参加英语兴趣小组的有 26 人。若两个小组都不参加的人数不超过 8 人，则两个小组都参加的人数最多是多少？</ExampleQuestion>
                <ExampleOptions>A.10　B.12　C.14　D.16</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>设两个小组都参加的有 x 人，则至少参加一个小组的有 30 + 26 − x = 56 − x 人。<br />两个都不参加的人数 = 50 − (56 − x) = x − 6，由题意 x − 6 ≤ 8 → x ≤ <b>14</b>。<br />此消彼长：想让「都参加」的人多，「都不参加」的人就要取到上限 8。
                  <br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>8. 容斥与周期结合</BlockTitle>
                    <Callout variant="key">
                      特征：问"既能被 3 整除又能被 4 整除"这类<b>既是某周期又是某周期</b>的个数。<br />
                      <b>方法：</b>分别求出各自在总数中的个数，再用两集合容斥<br />
                      <b>A + B − A∩B = 总数 − 都不满足</b><br />
                      其中 <b>A∩B 的周期 = 两个周期的最小公倍数</b>（3 和 4 → 12）。
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题8 · 容斥与周期结合</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>在 1 到 100 这 100 个整数中，能被 3 整除或能被 4 整除的数共有多少个？</ExampleQuestion>
                      <ExampleOptions>A.50　B.55　C.58　D.60</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>被 3 整除：100÷3 = 33 个；被 4 整除：100÷4 = 25 个<br />
                        两者交集 = 被 12 整除（lcm(3,4)=12）：100÷12 = 8 个<br />
                        容斥：33 + 25 − 8 = <b>50 个</b><br />
                        <span className="correct">答案：A</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>9. 补充考点 14：容斥的两个「常识公式」（夸夸刷）</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">常识1（分层次）：全部 = 只一 + 只二 + 只三 + 都不</span><br />
                      <span className="formula">常识2（按集合加）：A + B + C = 只一 + 2 × 只二 + 3 × 只三</span>
                    </Callout>
                    <Callout variant="tip">
                      作用：题干只给「只满足一种／两种／三种」和「都不」时，用这两条把「集合之和」与「分层人数」互相翻译。<br />
                      看到「至少一项」「都不」先想它们，比硬套标准公式更快。<b>常识2 的来源</b>：只满足一种的人被算 1 次，只两种的被算 2 次，三种的都满足的被算 3 次。
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题9 · 两个常识公式互推</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某班 40 人参加数学、语文、英语兴趣小组的情况为：只参加一项的 18 人，只参加两项的 7 人，三项都参加的 3 人，三项都没参加的 12 人。问参加至少一个小组的有多少人？</ExampleQuestion>
                  <ExampleOptions>A.25　B.28　C.30　D.33</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>先用第一个常识公式<b>验数据</b>：<br />全部 = 只一项 + 只两项 + 三项 + 都不 = 18 + 7 + 3 + 12 = 40 ✓ 与全班人数相符，数据自洽。<br />至少参加一项 = 只一项 + 只两项 + 三项 = 18 + 7 + 3 = <b>28</b> 人（也可用 40 − 12 = 28，更快）。<br /><b>顺带记住第二个常识公式：</b>三个小组的<b>参加人次之和</b> = 只一项 + 2 × 只两项 + 3 × 三项= 18 + 14 + 9 = 41 人次。这两个式子互为验证：人次之和一定 ≥ 人数。
                    <span className="correct">答案：B</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
    </>
  )
}
