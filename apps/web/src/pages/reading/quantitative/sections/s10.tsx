import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList, SubPoint } from '@/components/content'

/**
 * 十、行程问题
 *
 * @returns 该节正文。
 */
export default function S12(): ReactElement {
  return (
    <>
      <Callout variant="formula">
              <span className="formula">路程 = 速度 × 时间（S = V × T）</span>
            </Callout>
                  <Block>
                    <BlockTitle>1. 基础行程</BlockTitle>
                    <PointList>
                      <li><b>普通行程</b>：直接套S=VT，类似工程问题</li>
                      <li><b>火车过桥</b>：
                        <Callout variant="formula">
                          <span className="formula">路程 = 桥长 + 车长</span>
                        </Callout>
                        <SubPoint>给出两种情况时间 → 列两个等式求关系</SubPoint>
                      </li>
                      <li><b>匀加速 / 匀减速</b>（新型热门考法）：<b>平均速度 =（初速 + 末速）÷ 2</b>，即"平均速度就是两头速度的算术平均"，不要想复杂 —— 详见本模块 <b>第 6 块</b>。</li>
                      <li><b>等距离平均速度</b>：
                        <Callout variant="formula">
                          <span className="formula">V平均 = 2V₁V₂ / (V₁ + V₂)</span>
                        </Callout>
                        <SubPoint>即调和平均速度，适用于往返等距问题</SubPoint>
                      </li>
                    </PointList>
                    <Callout variant="tip">背：3.6 km/h = 1 m/s；288 km/h = 80 m/s</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题1 · 火车过桥</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一列长200米的火车以20m/s的速度通过一座长800米的桥，需要多少秒？</ExampleQuestion>
                      <ExampleOptions>A.30s　B.40s　C.50s　D.60s</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>路程=桥长+车长=800+200=1000米<br />
                        时间=1000÷20=<b>50秒</b><br />
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题2 · 等距离平均速度</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一辆车上坡速度40km/h，下坡速度60km/h（同一条路往返），求平均速度。</ExampleQuestion>
                      <ExampleOptions>A.50　B.48　C.46　D.52</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>等距离平均速度=2V₁V₂/(V₁+V₂)<br />
                        =2×40×60/(40+60)=4800/100=<b>48km/h</b><br />
                        <Callout variant="warn">不是简单的(40+60)/2=50！这是调和平均，不是算术平均</Callout>
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>2. 相遇与追及</BlockTitle>
                  <Callout variant="key"><b>相向而行的「假设法」（讲义原话）：</b>假设其中<b>一人不动</b>，另一人的相对速度就是<b>两人速度之和</b>
                    —— 相遇时间 = 总路程 ÷（v₁ + v₂）。同向追及同理：假设前者不动，相对速度 = 速度之差。这一招把「两人同时动」变成「一人动」，
                    画不出图时是急救办法。</Callout>
                  <div className="fig-row">
      
                  <figure className="fig">
                    <svg viewBox="0 0 340 140" role="img" aria-label="相遇问题示意">
                      <line x1={24} y1={95} x2={316} y2={95} stroke="#3f4a5f" strokeWidth={1.6} />
                      <circle cx={60} cy={95} r={13} fill="#4f7cff" />
                      <circle cx={280} cy={95} r={13} fill="#2ecc71" />
                      <path d="M84 95 L146 95 M256 95 L196 95" stroke="#1a1a2e" strokeWidth={2} />
                      <path d="M146 95 l-9 -5 v10 z M196 95 l9 -5 v10 z" fill="#1a1a2e" />
                      <circle cx={170} cy={95} r={4} fill="#ff6b6b" />
                      <text x={150} y={126} fontSize={13} fill="#ff6b6b" fontWeight="700">相遇点</text>
                      <text x={46} y={76} fontSize={13} fill="#2b4b9b" fontWeight="700">甲 v₁</text>
                      <text x={262} y={76} fontSize={13} fill="#1a7a45" fontWeight="700">乙 v₂</text>
                      <text x={70} y={22} fontSize={14} fill="#4f7cff" fontWeight="700">相向而行</text>
                      <text x={70} y={44} fontSize={13} fill="#6b7280">S = (v₁ + v₂) × t</text>
                    </svg>
                  </figure>
                  <figure className="fig">
                    <svg viewBox="0 0 340 140" role="img" aria-label="追及问题示意">
                      <line x1={24} y1={95} x2={316} y2={95} stroke="#3f4a5f" strokeWidth={1.6} />
                      <circle cx={60} cy={95} r={13} fill="#4f7cff" />
                      <circle cx={200} cy={95} r={13} fill="#2ecc71" />
                      <path d="M84 95 L150 95 M224 95 L268 95" stroke="#1a1a2e" strokeWidth={2} />
                      <path d="M150 95 l-9 -5 v10 z M268 95 l9 -5 v10 z" fill="#1a1a2e" />
                      <text x={98} y={86} fontSize={12.5} fill="#ff6b6b" fontWeight="700">原来相距 S</text>
                      <text x={34} y={60} fontSize={13} fill="#2b4b9b" fontWeight="700">甲 v₁（快）</text>
                      <text x={196} y={60} fontSize={13} fill="#1a7a45" fontWeight="700">乙 v₂（慢）</text>
                      <text x={70} y={22} fontSize={14} fill="#4f7cff" fontWeight="700">同向追及</text>
                      <text x={70} y={132} fontSize={13} fill="#6b7280">S差 = (v₁ − v₂) × t</text>
                    </svg>
                  </figure>
                  </div>
                    <Callout variant="formula">
                      <span className="formula">直线相遇：S = (V₁ + V₂) × T</span><br />
                      <span className="formula">直线追及：S = (V快 - V慢) × T</span><br />
                      <span className="formula">环形相遇（反向）：周长 × N = (V₁+V₂) × T</span><br />
                      <span className="formula">环形追及（同向）：周长 × N = (V快-V慢) × T</span>
                    </Callout>
                  <figure className="fig">
                    <svg viewBox="0 0 460 232" role="img" aria-label="环形相遇与环形追及示意">
                      <circle cx={120} cy={110} r={66} fill="none" stroke="#cbd5e1" strokeWidth={1.6} strokeDasharray="5 4" />
                      <path d="M120,44 A66,66 0 0 0 120,176" fill="none" stroke="#4f7cff" strokeWidth={2.6} />
                      <path d="M120,44 A66,66 0 0 1 120,176" fill="none" stroke="#2ecc71" strokeWidth={2.6} />
                      <path d="M47,104 L57,104 L52,114 Z" fill="#4f7cff" />
                      <path d="M183,104 L193,104 L188,114 Z" fill="#2ecc71" />
                      <circle cx={120} cy={44} r={5} fill="#ff6b6b" />
                      <circle cx={120} cy={176} r={5} fill="#ff6b6b" />
                      <text x={120} y={30} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#b91c1c">同一点反向出发</text>
                      <text x={132} y={181} fontSize={12} fontWeight="700" fill="#b91c1c">相遇点</text>
                      <text x={120} y={100} textAnchor="middle" fontSize={12.5} fill="#475569">周长 × N</text>
                      <text x={120} y={120} textAnchor="middle" fontSize={12.5} fill="#475569">= (v₁ + v₂) × T</text>
                      <text x={120} y={200} textAnchor="middle" fontSize={12} fill="#6b7280">两人合跑 N 圈后相遇</text>
                      <text x={120} y={221} textAnchor="middle" fontSize={13} fontWeight="700" fill="#4f7cff">环形相遇（反向）</text>
                      <circle cx={340} cy={110} r={66} fill="none" stroke="#cbd5e1" strokeWidth={1.6} />
                      <path d="M268,118 L280,118 L274,106 Z" fill="#94a3b8" />
                      <path d="M348,170 L348,182 L336,176 Z" fill="#94a3b8" />
                      <circle cx={340} cy={44} r={7} fill="#4f7cff" />
                      <circle cx={406} cy={110} r={7} fill="#2ecc71" />
                      <text x={340} y={100} textAnchor="middle" fontSize={12.5} fill="#475569">周长 × N</text>
                      <text x={340} y={120} textAnchor="middle" fontSize={12.5} fill="#475569">= (v快 − v慢) × T</text>
                      <text x={340} y={200} textAnchor="middle" fontSize={12} fill="#6b7280">快者比慢者多跑 N 圈</text>
                      <text x={340} y={221} textAnchor="middle" fontSize={13} fontWeight="700" fill="#4f7cff">环形追及（同向）</text>
                    </svg>
                  </figure>
      
                    <Block>
                      <b>多次相遇：</b>
                      <SubPoint>左右点出发第N次迎面相遇：路程和 = (2N-1)×全程</SubPoint>
                      <SubPoint>同一点出发第N次迎面相遇：路程和 = 2N×全程</SubPoint>
                      <SubPoint>第二次相遇：各走的路程 = 第一次的2倍</SubPoint>
                    </Block>
                  <figure className="fig">
                    <svg viewBox="0 0 460 224" role="img" aria-label="多次相遇往返路径示意">
                      <line x1={50} y1={66} x2={398} y2={66} stroke="#4f7cff" strokeWidth={2} />
                      <path d="M398,60 L410,66 L398,72 Z" fill="#4f7cff" />
                      <line x1={410} y1={88} x2={134} y2={88} stroke="#4f7cff" strokeWidth={2} strokeDasharray="7 4" />
                      <path d="M146,82 L134,88 L146,94 Z" fill="#4f7cff" />
                      <path d="M410,66 Q419,77 410,88" fill="none" stroke="#4f7cff" strokeWidth={1.6} />
                      <line x1={410} y1={142} x2={62} y2={142} stroke="#2ecc71" strokeWidth={2} />
                      <path d="M74,136 L62,142 L74,148 Z" fill="#2ecc71" />
                      <line x1={50} y1={164} x2={122} y2={164} stroke="#2ecc71" strokeWidth={2} strokeDasharray="7 4" />
                      <path d="M110,158 L122,164 L110,170 Z" fill="#2ecc71" />
                      <path d="M50,142 Q41,153 50,164" fill="none" stroke="#2ecc71" strokeWidth={1.6} />
                      <line x1={266} y1={52} x2={266} y2={152} stroke="#f0a0a0" strokeWidth={1.3} strokeDasharray="4 3" />
                      <line x1={122} y1={64} x2={122} y2={176} stroke="#f0a0a0" strokeWidth={1.3} strokeDasharray="4 3" />
                      <circle cx={266} cy={66} r={5} fill="#ff6b6b" />
                      <circle cx={266} cy={142} r={5} fill="#ff6b6b" />
                      <circle cx={122} cy={88} r={5} fill="#ff6b6b" />
                      <circle cx={122} cy={164} r={5} fill="#ff6b6b" />
                      <text x={266} y={44} textAnchor="middle" fontSize={12} fontWeight="700" fill="#b91c1c">第 1 次相遇</text>
                      <text x={122} y={62} textAnchor="middle" fontSize={12} fontWeight="700" fill="#b91c1c">第 2 次相遇</text>
                      <text x={50} y={56} textAnchor="middle" fontSize={12} fontWeight="700" fill="#2b4b9b">甲</text>
                      <text x={410} y={132} textAnchor="middle" fontSize={12} fontWeight="700" fill="#1a7a45">乙</text>
                      <text x={50} y={190} textAnchor="middle" fontSize={13} fontWeight="700" fill="#334155">A 地</text>
                      <text x={410} y={190} textAnchor="middle" fontSize={13} fontWeight="700" fill="#334155">B 地</text>
                      <text x={230} y={198} textAnchor="middle" fontSize={12} fontWeight="700" fill="#b45309">第 1 次相遇：路程和 = 1 个全程</text>
                      <text x={230} y={216} textAnchor="middle" fontSize={12} fontWeight="700" fill="#b45309">第 2 次相遇：路程和 = 3 个全程（各走的路程 = 第一次的 2 倍）</text>
                    </svg>
                  </figure>
      
                    <Callout variant="warn">相遇追及与水流速度无关！</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题3 · 相遇（折返相遇 · 2025 广东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>父子两人在百米赛道上匀速跑步，两人从赛道起点同时出发，父亲跑到终点时，儿子距离终点还有 40 米。若父亲立即折返跑向赛道起点，则两人相遇时，儿子距离终点还有（　　）米。</ExampleQuestion>
                      <ExampleOptions>A.35　B.30　C.25　D.15</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>先用「同时出发、时间相同」求速度比：父亲跑完 100 米时，儿子跑 100 − 40 = 60 米，所以 <b>v父 ∶ v子 = 100 ∶ 60 = 5 ∶ 3</b>。<br />父亲折返的瞬间：父亲在终点（100 米处），儿子在 60 米处，两人相距 <b>40 米</b>，此时变成相向而行。<br />相遇时两人合走这 40 米，按速度比分摊：儿子走 40 × 3 ÷ (5 + 3) = <b>15</b> 米。<br />儿子此时共跑了 60 + 15 = 75 米 → 离终点还有 100 − 75 = <b>25</b> 米。<br /><span style={{ color: '#6b7280' }}>关键：折返后是「相距 40 米的相向相遇」，不是重新跑全程。</span>
                    <span className="correct">答案：C</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>3. 流水行船</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">V顺 = V船 + V水</span><br />
                      <span className="formula">V逆 = V船 - V水</span><br />
                      <span className="formula">V船 = (V顺 + V逆) / 2</span><br />
                      <span className="formula">V水 = (V顺 - V逆) / 2</span>
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题4 · 流水行船</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一艘船顺水航行的速度是 30 km/h，逆水航行的速度是 20 km/h，则船在静水中的速度是多少 km/h？</ExampleQuestion>
                  <ExampleOptions>A.20　B.22　C.25　D.28</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>两个基本式：<b>V顺 = V船 + V水</b>、<b>V逆 = V船 − V水</b>。<br />· 两式<b>相加</b>：V顺 + V逆 = 2V船 → V船 = (30 + 20) ÷ 2 = <b>25</b>；<br />· 两式<b>相减</b>：V顺 − V逆 = 2V水 → V水 = (30 − 20) ÷ 2 = <b>5</b>。<br /><span style={{ color: '#6b7280' }}>口诀：船速取「和的一半」、水速取「差的一半」，别记反。</span>
                    <span className="correct">答案：C</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>4. 队伍行进</BlockTitle>
                    <Callout variant="formula">
                      队首→队尾：队伍长度 = (人速 + 队伍速度) × 时间<br />
                      队尾→队首：队伍长度 = (人速 - 队伍速度) × 时间
                    </Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题5 · 队伍行进</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>一行队伍长 100 米，以 1 米/秒的速度前进。通讯员从队尾以 3 米/秒的速度跑到队首，需要多少秒？</ExampleQuestion>
                <ExampleOptions>A.25　B.33.3　C.50　D.100</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>从队尾追到队首是<b>同向追及</b>，队伍长度 = (人速 − 队伍速度) × 时间。<br />100 = (3 − 1) × t → t = <b>50</b> 秒。<br />（反向记：从队首跑回队尾是相向而行，用 人速 + 队伍速度）
                  <br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Block>
                    <BlockTitle>5. 比例行程</BlockTitle>
                    <Callout variant="key">
                      <b>核心：</b>找相等的量，看比例，找份数<br />
                      时间相同 → S₁/S₂ = V₁/V₂（路程比 = 速度比）<br />
                      路程相同 → V₁/V₂ = T₂/T₁（速度比 = 时间的<b>反</b>比）<br />
                      速度相同 → S₁/S₂ = T₁/T₂
                    </Callout>
                    <Callout variant="tip">看到"速度提高了 1/5""时间比是 3∶4"这类表述，<b>别设未知数列方程</b>——直接找份数，往往两步就出答案。</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题6 · 比例行程（提速省时 · 2023 广东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>小明骑车从甲镇前往乙镇。如果骑车的速度为每小时 20 千米，那么将准时到达；如果骑车的速度为每小时 24 千米，那么将提早 5 分钟到达。则甲镇到乙镇的距离为（　　）千米。</ExampleQuestion>
                      <ExampleOptions>A.8　B.10　C.12　D.16</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>路程一定 → <b>速度与时间成反比</b>：v₁ ∶ v₂ = 20 ∶ 24 = 5 ∶ 6，则 t₁ ∶ t₂ = 6 ∶ 5。两种速度的时间差 1 份。<br />已知时间差 = 5 分钟 → 1 份对应 5 分钟 → 原时间 t₁ = 6 份 = <b>30 分钟 = 0.5 小时</b>。<br />距离 = 20 × 0.5 = <b>10</b> 千米。<br /><span style={{ color: '#6b7280' }}>列方程也对：S/20 − S/24 = 5/60 → S × (1/120) = 1/12 → S = 10。但比例法不用通分，考场更快。</span>
                    <span className="correct">答案：B</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
          
      <Block>
                    <BlockTitle>6. 匀加速（新型热门考法）</BlockTitle>
                    <Callout variant="key">
                      <b>识别：</b>题干出现「<b>匀加速 / 匀减速 / 均匀加速 / 均匀减速</b>」，或描述「从静止起步、速度均匀变化」。<br />
                      <b>唯一核心公式：</b>匀变速运动的平均速度 <b>V =（V初速度 + V末速度）÷ 2</b><br />
                      <b>解题两步：</b>① 先用「路程 ÷ 时间」求平均速度；② 代入公式，用已知的一头求另一头。<br />
                      <b>提醒：</b>匀变速不考位移公式，别去背 s = v₀t + ½at²，用平均速度一步到位。
                    </Callout>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题7 · 匀加速追赶（2025 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>甲、乙两辆车相距 200 米，同向同时沿直线出发。乙保持 5 米/秒的速度匀速前行，甲从速度为零起步做匀加速运动追赶乙，10 秒后恰好追上乙，则甲在追上乙时的速度为（　　）。</ExampleQuestion>
                      <ExampleOptions>A.10 米/秒　B.30 米/秒　C.50 米/秒　D.70 米/秒</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>10 秒内甲追上乙，说明甲比乙多走了原来相距的 200 米。
                              ① 乙 10 秒走的路程 = 5 × 10 = 50 米 → 甲 10 秒走的路程 = 50 + 200 = <b>250 米</b>；
                              ② 甲的平均速度 = 路程 ÷ 时间 = 250 ÷ 10 = <b>25</b>（米/秒）；
                              ③ 甲是匀加速，套<b>匀变速平均速度公式</b>：平均速度 =（初速 + 末速）÷ 2
                              　 → 25 = (0 + v末) ÷ 2 → v末 = <b>50</b>（米/秒）。
                              要点：<b>「匀加速 / 匀减速」就用这一个公式</b> —— 平均速度是初速和末速的算术平均；
                              题目通常先用「路程 ÷ 时间」把平均速度算出来，再反推另一个速度。
                    <figure className="fig">
                      <svg viewBox="0 0 460 264" role="img" aria-label="匀加速追赶：初速0、末速v、平均速度v/2">
                        <text x={14} y={22} fontSize={13.5} fill="#4f7cff" fontWeight="700">匀变速：平均速度 =（初速 + 末速）÷ 2</text>
                        <line x1={40} y1={170} x2={420} y2={170} stroke="#3f4a5f" strokeWidth={1.8} />
                        <circle cx={80} cy={170} r={12} fill="#4f7cff" />
                        <circle cx={330} cy={170} r={12} fill="#2ecc71" />
                        <text x={58} y={200} fontSize={13} fontWeight="700" fill="#2b4b9b">甲：v初 = 0</text>
                        <text x={300} y={200} fontSize={13} fontWeight="700" fill="#1a7a45">乙：5 m/s</text>
                        <path d="M92 150 L318 150" stroke="#c0392b" strokeWidth={2} />
                        <path d="M318 150 l-9 -5 v10 z" fill="#c0392b" />
                        <text x={176} y={142} fontSize={12.5} fontWeight="700" fill="#c0392b">甲 10 秒追上</text>
                        <rect x={40} y={96} width={290} height={6} fill="#dbe4ff" stroke="#4f7cff" />
                        <text x={60} y={88} fontSize={12.5} fill="#2b4b9b">甲走的路程 = 50 + 200 = 250 米</text>
                        <text x={14} y={234} fontSize={13} fill="#6b7280">甲的平均速度 = 250 ÷ 10 = 25 m/s</text>
                        <text x={14} y={252} fontSize={13} fill="#6b7280">（0 + v末）÷ 2 = 25　→　v末 = 50 m/s</text>
                      </svg>
                      <figcaption>匀加速（匀减速）只有一个核心公式：<b>平均速度 =（初速 + 末速）÷ 2</b>。
                        先用「路程 ÷ 时间」求出平均速度，再反推初速或末速，不用记位移公式。</figcaption>
                    </figure>
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>7. 补充考点 9：等距离平均速度（做猜）</BlockTitle>
                    <Callout variant="key"><b>特征：</b>题目给出「<b>上坡、下坡、平路</b>」三个速度</Callout>
                    <Callout variant="formula"><span className="formula">等距离平均速度 = 2v₁v₂ ÷ (v₁ + v₂)</span></Callout>
                    <SubPoint>「邪修」：当上坡与下坡的<b>距离相等</b>时，这段的平均速度就等于<b>平路速度</b>（出题人就是这么设计的）→ <b>全程平均速度 = 平路速度</b>，直接选。</SubPoint>
                    <Callout variant="tip">例：上坡 15、下坡 35 → 2×15×35 ÷ (15+35) = 21，正好等于平路速度 21 → 全程平均就是 <b>21</b>。</Callout>
                  </Block>
                    <Example>
                    <ExampleHeader>📝 例题8 · 等距离平均速度（2024 天津河西）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>从甲地到乙地 539 千米，其中有 4/7 是平路，2/7 是上坡路，1/7 是下坡路。假定一辆车在平路的速度是 21 千米/小时，上坡的速度是 15 千米/小时，下坡的速度是 35 千米/小时。则该车由甲地到乙地往返一趟的平均速度是多少千米/小时？</ExampleQuestion>
                      <ExampleOptions>A. 20　B. 21　C. 23.75　D. 25.25</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>去程上坡占 2/7、下坡占 1/7；<b>回程正好反过来</b>（原上坡变下坡）→ 一往一返合计，<b>上坡总距离 = 下坡总距离</b>（都是 3/7）。<br />等距离上下坡的平均速度 = 2×15×35 ÷ (15+35) = 1050 ÷ 50 = <b>21</b>，恰好等于平路速度 21。<br />所以整段往返的平均速度就是 <b>21</b> 千米/小时（不用算总路程）。<br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>8. 补充考点 10 &amp; 11：多次相遇</BlockTitle>
                    <Callout variant="key"><b>考点 10「每人都有事做」：</b>行走时间相同、做事时间相同、<b>总时间也相同</b> —— 用「时间等量」列式最省事。</Callout>
                    <Callout variant="formula">
                      <span className="formula">两端出发的多次相遇：第 1 次相遇两人合走 1 个全程 S；第 2 次合走 3S；第 n 次合走 (2n−1)S</span>
                    </Callout>
                    <SubPoint><b>考点 11 比例类比：</b>速度恒定 → 各人走的路程与「两人合走的总量」<b>成正比</b>。<br />
                      例：第一次相遇两人合走 S、甲走 100 → 第二次相遇两人合走 3S，甲就走 3 × 100 = <b>300</b>。</SubPoint>
                    <Callout variant="tip">口诀：<b>合走的总量翻几倍，各人走的路程就翻几倍</b>（1S→3S→5S 对应 1 倍→3 倍→5 倍）。</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题9 · 多次相遇比例类比</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>甲、乙两人同时从 A、B 两端相向出发，在距 A 端 100 米处第一次相遇。相遇后两人继续前进，到达对方出发点后立即原路返回。问：第二次相遇时，甲一共走了多少米？</ExampleQuestion>
                      <ExampleOptions>A. 200 米　B. 300 米　C. 400 米　D. 500 米</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>两端出发的多次相遇中，<b>两人合走的总路程</b>是：第 1 次相遇合走 1 个全程 S，第 2 次相遇合走 3S。<br />
                        两人速度不变 → 各自走的路程与「合走总量」成正比：合走总量变成原来的 <b>3 倍</b>，甲走的路程也变成 3 倍。<br />
                        甲第一次走了 100 米 → 第二次相遇时甲共走 <b>3 × 100 = 300 米</b>。
                      </ExampleAnswer>
                      <span className="correct">答案：B</span>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>9. 补充考点 12：漂流瓶</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">漂 流 时 间 T = 2T₁T₂ ÷ (T₁ − T₂)</span><br />
                      T₁ = 逆流（慢）所需时间，T₂ = 顺流（快）所需时间
                    </Callout>
                    <SubPoint>推导：设水速 v、船速 V、距离 S。<br />
                      顺流 S = (V + v)·T₂，逆流 S = (V − v)·T₁ → 由两式解出 V、v 与 S 的关系，<br />
                      漂流时间 T = S ÷ v，化简即得 T = 2T₁T₂ / (T₁ − T₂)。</SubPoint>
                    <Callout variant="tip">注意：<b>T₁ 必须大于 T₂</b>（逆流慢、顺流快），否则公式无意义。</Callout>
                  </Block>
                    <Example>
                    <ExampleHeader>📝 例题10 · 漂流瓶（2005 浙江）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一艘游轮逆流而行，从 A 地到 B 地需 6 天；顺流而行，从 B 地到 A 地需 4 天。问若不考虑其他因素，一块塑料漂浮物从 B 地漂流到 A 地需要多少天？</ExampleQuestion>
                      <ExampleOptions>A. 12　B. 16　C. 18　D. 24</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>逆流 T₁ = 6 天，顺流 T₂ = 4 天，代入漂流公式：<br />T = 2 × 6 × 4 ÷ (6 − 4) = 48 ÷ 2 = <b>24</b>（天）。<br />（漂流物顺水而下，从 B 到 A 正是顺水方向，所以用这个时间。）<br />
                        <span className="correct">答案：D</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
    </>
  )
}
