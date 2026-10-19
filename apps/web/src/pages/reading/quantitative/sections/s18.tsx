import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十八、时钟问题
 *
 * @returns 该节正文。
 */
export default function S20(): ReactElement {
  return (
    <>
      <Callout variant="key">
              时钟问题的本质是<b>"环形跑道上的追及问题"</b>——分针追时针。记住两个速度和一条时间线，这类题全部变成套公式。
            </Callout>
                  <Block>
                    <BlockTitle>1. 三个必背数据</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">分针每分钟走 6°　（360° ÷ 60）</span><br />
                      <span className="formula">时针每分钟走 0.5°　（30° ÷ 60）</span><br />
                      <span className="formula">速度差 = 5.5° / 分钟</span>
                    </Callout>
                    <PointList>
                      <li>钟面一圈 360°，分成 12 大格（每格 30°）、60 小格。</li>
                      <li>时针 1 小时走 30°，分针 1 小时走 360°（比时针多走 330°）。</li>
                    </PointList>
                  </Block>
                              <Example>
                    <ExampleHeader>📝 例题1 · 三个必背数据（2021 联考）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>张爷爷早晨 5 点多外出晨练，出门时钟表上的时针和分针的夹角是 110 度，不到 6 点进门时，钟表上的时针和分针的夹角还是 110 度，则张爷爷外出时间是多少分钟？</ExampleQuestion>
                      <ExampleOptions>A.30　B.35　C.40　D.45</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>时钟问题就是<b>分针追时针的环形跑道</b>：分针 6°/分、时针 0.5°/分，<b>速度差恒为 5.5°/分钟</b>。
                              ① 出门时夹角 110°：此时分针<b>落在时针后面</b> 110°；
                              ② 进门时夹角还是 110°：分针已经<b>追上并超过</b>时针 110°；
                              ③ 所以这期间分针相对时针多走了 110 + 110 = <b>220°</b>；
                              ④ 时间 = 220 ÷ 5.5 = <b>40</b>（分钟）。
                              要点：<b>「两次夹角相同」→ 相对多转的角度 = 两个夹角之和</b>（一个在追上前，一个在追上后）。
                              三个必背数据要脱口而出：分针 <b>6°/分</b>、时针 <b>0.5°/分</b>、速度差 <b>5.5°/分</b>。
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>2. 钟面追及（重合 / 垂直 / 成直线）</BlockTitle>
      
                  <figure className="fig">
                    <svg viewBox="0 0 460 270" role="img" aria-label="钟面追及示意">
                      <circle cx={110} cy={110} r={88} fill="#fbfcff" stroke="#3f4a5f" strokeWidth={1.8} />
                      <g stroke="#9fb2d8" strokeWidth={1.6}>
                        <path d="M110 22 L110 32" /><path d="M154 33.8 L149 42.5" /><path d="M186.2 66 L177.6 71" />
                        <path d="M198 110 L188 110" /><path d="M186.2 154 L177.6 149" /><path d="M154 186.2 L149 177.6" />
                        <path d="M110 198 L110 188" /><path d="M66 186.2 L71 177.6" /><path d="M33.8 154 L42.4 149" />
                        <path d="M22 110 L32 110" /><path d="M33.8 66 L42.4 71" /><path d="M66 33.8 L71 42.5" />
                      </g>
                      <text x={104} y={52} fontSize={13} fill="#6b7280">12</text>
                      <text x={170} y={115} fontSize={13} fill="#6b7280">3</text>
                      <text x={104} y={180} fontSize={13} fill="#6b7280">6</text>
                      <text x={38} y={115} fontSize={13} fill="#6b7280">9</text>
                      <path d="M110 110 L164 120" stroke="#1a1a2e" strokeWidth={3.4} strokeLinecap="round" />
                      <path d="M110 110 L179 150" stroke="#4f7cff" strokeWidth={2.6} strokeLinecap="round" />
                      <path d="M143.5 115.9 A34 34 0 0 1 139.4 127" fill="none" stroke="#ff6b6b" strokeWidth={1.8} />
                      <text x={150} y={134} fontSize={13.5} fill="#ff6b6b" fontWeight="700">20°</text>
                      <text x={222} y={60} fontSize={15} fill="#4f7cff" fontWeight="700">3:20 时两针夹角</text>
                      <text x={222} y={92} fontSize={13.5} fill="#6b7280">分针：20 分 × 6° = 120°</text>
                      <text x={222} y={118} fontSize={13.5} fill="#6b7280">时针：3×30° + 20×0.5° = 100°</text>
                      <text x={222} y={144} fontSize={13.5} fill="#6b7280">夹角 = 120° − 100° = 20°</text>
                      <text x={222} y={180} fontSize={14} fill="#1a1a2e" fontWeight="700">分针 6°/分，时针 0.5°/分</text>
                      <text x={222} y={206} fontSize={14} fill="#1a1a2e" fontWeight="700">速度差 = 5.5°/分</text>
                    </svg>
                    <figcaption>把钟面当成「环形跑道」：分针每分走 6°，时针每分走 0.5°，<b>分针追时针的速度差恒为 5.5°/分钟</b>。求重合 / 垂直 / 成直线，都是「追及角度 ÷ 5.5」。</figcaption>
                  </figure>
                    <DataTable>
                      <tr><th>问法</th><th>追及角度</th><th>公式</th></tr>
                      <tr><td>两针<b>重合</b></td><td>追 360° 的整数倍</td><td>t = 追及角度 ÷ 5.5</td></tr>
                      <tr><td>两针<b>垂直</b>（成 90°）</td><td>追 90° 或 270°</td><td>t = (90 + 360k) ÷ 5.5</td></tr>
                      <tr><td>两针<b>成直线</b>（成 180°）</td><td>追 180° 或 540°</td><td>t = (180 + 360k) ÷ 5.5</td></tr>
                    </DataTable>
                    <Callout variant="key">
                      <b>必背结论：</b>每 12 小时，时针与分针<b>重合 11 次</b>、<b>成直线 11 次</b>、<b>垂直 22 次</b>；<br />
                      一昼夜（24 小时）→ 重合 <b>22 次</b>、成直线 22 次、垂直 44 次。
                    </Callout>
                    <Callout variant="tip">解题模板：① 先算出起点时两针的夹角 ② 用 夹角 ÷ 5.5 得到还需的分钟数 ③ 别忘了起点本身可能已经满足条件。</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题2 · 钟面夹角</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>3 点 20 分时，时针与分针的夹角是多少度？</ExampleQuestion>
                      <ExampleOptions>A.15°　B.20°　C.25°　D.30°</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>分针 20 分 → 20 × 6° = <b>120°</b><br />
                        时针 3 点 20 分 → 3 × 30° + 20 × 0.5° = 90° + 10° = <b>100°</b><br />
                        夹角 = 120° − 100° = <b>20°</b><br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题3 · 两针重合次数</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>在一昼夜（24 小时）内，时针与分针重合多少次？</ExampleQuestion>
                      <ExampleOptions>A.11　B.12　C.22　D.24</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>每 12 小时，分针比时针多走一圈（360°），追上（重合）<b>11 次</b>（不是 12 次）<br />
                        一昼夜 = 2 × 12 小时 → 重合 <b>22 次</b><br />
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>3. 坏钟问题（比例法）</BlockTitle>
                    <Callout variant="key">
                      "每小时快/慢 m 分钟" → <b>标准钟走 60 分钟，该钟走 (60 ± m) 分钟</b>。<br />
                      用比例列式：<b>该钟显示时间 ∶ 标准时间 = (60 ± m) ∶ 60</b><br />
                      问"显示几点"→ 标准时间 × (60±m)/60；问"实际几点"→ 用比例反解。
                    </Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题4 · 坏钟问题（比例法）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一只钟每小时慢 5 分钟。某日中午 12:00 将它校准，当它显示下午 5:30 时，标准时间是几点？</ExampleQuestion>
                      <ExampleOptions>A.下午 5:30　B.下午 6:00　C.下午 6:30　D.下午 7:00</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>该钟走 (60 − 5) = 55 分钟，相当于标准钟走 60 分钟。<br />
                        该钟从 12:00 显示走到 17:30，共走了 5.5 小时 = 330 分钟<br />
                        标准时间实际经过 = 330 ÷ 55 × 60 = <b>360 分钟 = 6 小时</b><br />
                        标准时间 = 12:00 + 6 小时 = <b>下午 6:00</b><br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
    </>
  )
}
