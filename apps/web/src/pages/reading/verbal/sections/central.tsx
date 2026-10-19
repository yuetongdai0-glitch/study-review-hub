import type { ReactElement } from 'react'
import { Card, Example, ExampleAnswer, ExampleQuestion } from '@/components/content'

/**
 * central
 *
 * @returns 该节正文。
 */
export default function S2(): ReactElement {
  return (
    <>
      <h2><span className="icon">🎯</span> 中心理解题</h2>
      
          <div className="highlight">
            <strong>核心口诀：33555 + 264111</strong><br />
            33555 = 3文段 + 3关键信息 + 5引出话题 + 5对策表达 + 5行文结构<br />
            264111 = 2出处 + 6有误 + 4大类 + 1正确 + 1比较 + 1验证
          </div>
      
          
          <h3 id="structure">33555 结构分析</h3>
      
          <div className="num-grid">
            <div className="num-item">
              <div className="num">3</div>
              <div className="label">三类文段</div>
              <div className="desc">说理类 / 科普类 / 新闻类</div>
            </div>
            <div className="num-item">
              <div className="num">3</div>
              <div className="label">三个关键信息</div>
              <div className="desc">高频词 / 主体 / 首句</div>
            </div>
            <div className="num-item">
              <div className="num">5</div>
              <div className="label">五种引出话题</div>
              <div className="desc">开门见山 / 转折对比 / 背景引出 / 由大引小 / 设问引出</div>
            </div>
            <div className="num-item">
              <div className="num">5</div>
              <div className="label">五种对策表达</div>
              <div className="desc">祈使建议 / 禁止型 / 逻辑关联词 / 必要条件 / 语义表对策</div>
            </div>
            <div className="num-item">
              <div className="num">5</div>
              <div className="label">五种行文结构</div>
              <div className="desc">后对策 / 前对策 / 总分分总 / 并列大并列 / 二层结构</div>
            </div>
          </div>
      
          
          <h4>① 三类文段及解题原则</h4>
          <table>
            <tr>
              <th>文段类型</th>
              <th>概念</th>
              <th>常见问法</th>
              <th>解题原则</th>
            </tr>
            <tr>
              <td><span className="badge badge-orange">说理类</span></td>
              <td>阐述作者观点、态度、对策</td>
              <td>主旨是什么、意在说明/强调什么</td>
              <td>原文有对策优先选对策；有观点选观点；有问题要体现问题（概括问题或给对策）</td>
            </tr>
            <tr>
              <td><span className="badge badge-green">科普类</span></td>
              <td>客观介绍现象、事件、知识</td>
              <td>主要介绍/讲了什么、最适合的概括是</td>
              <td>选<strong>中性、客观</strong>的概括选项，不选对策</td>
            </tr>
            <tr>
              <td><span className="badge badge-blue">新闻类</span></td>
              <td>介绍新事件/新突破/新发现</td>
              <td>主要讲了什么、意在强调什么</td>
              <td>突出一个<strong>"新"</strong>：重视新状况、新成绩、新突破</td>
            </tr>
          </table>
      
          <Example>
            <div className="example-tag">例题1 · 中心理解 · 三类文段 · 说理类（有对策优先选对策）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>一些地方在推进政务服务改革时，热衷于开发 APP、上线小程序，却忽视了后台数据的打通。群众办事依然要在多个系统之间反复注册、重复提交材料。这种“指尖上的形式主义”，表面看是技术问题，根子在于部门之间的数据壁垒。要让数字化真正便民，就必须打破部门本位，推动数据共享。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 政务 APP 存在重复注册的问题</li>
                <li>B. 推进政务服务数字化需打破数据壁垒</li>
                <li>C. “指尖上的形式主义”表现多样</li>
                <li>D. 群众对政务服务改革抱有很高期待</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 这是<strong>说理类</strong>文段：前文摆问题（重复注册、数据不通），末句用“<strong>就必须</strong>”给出对策。说理类的解题原则是<strong>原文有对策优先选对策</strong>。A、C 都是“问题”本身，属于出处有误（非重点）；D 无中生有。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题2 · 中心理解 · 三类文段 · 科普类（选中性客观的概括）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>蜜蜂的“8 字舞”是一种独特的交流方式。研究表明，工蜂通过舞蹈的方位角指示蜜源相对于太阳的方向，通过舞蹈持续的时间和摆动频率传递距离信息。在黑暗的蜂巢中，同伴依靠触角和体表感受器接收这些振动信号，从而准确定位蜜源。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字主要介绍的是：</p>
              <ul className="example-opts">
                <li>A. 蜜蜂如何通过舞蹈传递蜜源信息</li>
                <li>B. 蜜蜂应该进一步提高采蜜效率</li>
                <li>C. 蜜蜂的舞蹈是自然界最复杂的语言</li>
                <li>D. 蜂群分工对蜂蜜产量的影响</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 这是<strong>科普类</strong>文段，客观介绍蜜蜂的交流方式，解题原则是<strong>选中性、客观的概括选项，不选对策</strong>。B 是对策项，科普类文段不选；C“最复杂”<strong>绝对化</strong>，原文没有比较；D 无中生有。
            </div>
          </Example>
      
          
          <Example>
            <div className="example-tag">例题3 · 中心理解 · 三类文段 · 新闻类突出新</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>长期以来，深海被视为生命的禁区。近日，我国“奋斗者”号载人潜水器在马里亚纳海沟完成多次下潜，科研人员首次在万米海底发现了多种此前未被记录的深海生物，并成功获取了珍贵的样品。这一发现为研究深海生命的适应机制提供了全新线索。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字主要介绍的是：</p>
              <ul className="example-opts">
                <li>A. 深海生物面临的极端生存环境</li>
                <li>B. 我国深海探测取得的新发现</li>
                <li>C. 深海生命适应极端环境的机制</li>
                <li>D. 马里亚纳海沟的形成原因</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 这是<strong>新闻类</strong>文段，要突出一个<strong>“新”</strong>字：新发现、新突破、新成绩。文段核心是“首次发现”“全新线索”，故选B。A只是背景铺垫；C中“适应机制”是这一发现指向的未来研究方向，文段并未介绍机制本身；D“形成原因”无中生有。
            </div>
          </Example>
      
          <h4>② 三个关键信息</h4>
          <Card>
            <table>
              <tr><th>关键信息</th><th>说明</th><th>作用</th></tr>
              <tr>
                <td><strong>高频词</strong></td>
                <td>文段中反复出现的词语</td>
                <td>确定主题方向，正确选项应贴合高频词</td>
              </tr>
              <tr>
                <td><strong>主体</strong></td>
                <td>主语、对象（讲的是谁、说的是什么事）</td>
                <td>选项主体必须与文段一致</td>
              </tr>
              <tr>
                <td><strong>首句</strong></td>
                <td>讲的是"谁"的"什么事"</td>
                <td>首句往往引出话题，确定全文方向</td>
              </tr>
            </table>
          </Card>
      
          <Example>
            <div className="example-tag">例题4 · 中心理解 · 三个关键信息 · 高频词定主题</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>城市的地下管网被称为“城市的良心”。近年来，多地遭遇暴雨内涝，暴露出管网建设的短板：标准偏低、老化严重、雨污混流。补齐管网短板，需要摸清家底、提高标准，也需要改变“重地上、轻地下”的政绩观。只有把管网真正当成城市的生命线，城市才能在极端天气面前站稳脚跟。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 城市地下管网建设亟待补齐短板</li>
                <li>B. 暴雨内涝是城市面临的普遍问题</li>
                <li>C. 政绩观是影响城市发展的根本因素</li>
                <li>D. “城市生命线”的概念正在发生变化</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>高频词</strong>是“管网”“短板”“城市”，反复出现，直接确定了主题方向。文段末句用“只有……才……”引出对策，A 与高频词和对策都吻合。B 是第一句引出的背景；C“根本因素”<strong>绝对化</strong>，原文只说政绩观需要改变；D 偷换概念。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题5 · 中心理解 · 三个关键信息 · 首句定方向</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>长期以来，人们习惯把“记忆”看作存储在大脑某个区域的静态档案。然而，神经科学的研究显示，每次回忆都是一次重构：大脑会根据当下的情境和信息，重新拼装出这段经历。这意味着记忆并不可靠，目击者证词出现偏差也就并不奇怪。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在说明：</p>
              <ul className="example-opts">
                <li>A. 记忆是一种动态重构的过程</li>
                <li>B. 目击者证词的取证程序存在漏洞</li>
                <li>C. 长期以来的记忆理论已被完全推翻</li>
                <li>D. 大脑不同区域分别承担不同的记忆功能</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>首句</strong>“长期以来，人们习惯把记忆看作……”引出话题并定下“记忆”这一方向，随后用“然而”转折给出新结论：<strong>每次回忆都是一次重构</strong>。B 是结论的延伸推论，非重点；C“完全推翻”<strong>绝对化</strong>；D 与文意相反（文段恰恰否定了“存储在某区域”的旧说）。
            </div>
          </Example>
      
          
          <Example>
            <div className="example-tag">例题6 · 中心理解 · 三个关键信息 · 主体与高频词</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>在数字化浪潮下，许多传统手工艺面临传承困境，一些老手艺甚至后继无人。近年来，不少非遗项目借助短视频平台重新走进大众视野。短视频不仅降低了传播门槛，也让年轻一代参与到非遗的再创作中，这种“活态传承”正在为传统手艺注入新的生命力。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在说明：</p>
              <ul className="example-opts">
                <li>A. 传统手工艺的传承正面临严峻挑战</li>
                <li>B. 短视频平台助力非遗的活态传承</li>
                <li>C. 年轻一代是非遗传承的主要力量</li>
                <li>D. 数字化浪潮改变了大众的审美</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 抓<strong>高频词</strong>“短视频”“非遗”“传承”，文段<strong>主体</strong>是短视频平台对非遗传承的作用。首句的“传承困境”只是引出的<strong>背景</strong>，位于重点之前，属于出处有误，排除A。C偷换主体，年轻人只是“参与”而非“主要力量”；D扩大范围，文段未谈大众审美。
            </div>
          </Example>
      
          <h4>③ 五种引出话题方式</h4>
          <table>
            <tr><th>方式</th><th>特征</th><th>注意</th></tr>
            <tr><td>开门见山</td><td>直接确定话题范围</td><td>注意首句中的关键信息</td></tr>
            <tr><td>转折对比引出</td><td>用转折或对比引出话题</td><td>常直接引出问题、观点、对策（"前对策"结构）</td></tr>
            <tr><td>背景/背景知识引出</td><td>背景铺垫后引出正题</td><td><strong>背景不重要，可略读</strong></td></tr>
            <tr><td>由大引小</td><td>从上级集合引到特定对象</td><td>谈论对象并非例子，是全文主体</td></tr>
            <tr><td>设问引出</td><td>由问题引出话题</td><td>注意下文是否为对该问题的回答，答案需重点关注</td></tr>
          </table>
      
          <Example>
            <div className="example-tag">例题7 · 中心理解 · 引出话题 · 开门见山</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>算法推荐正在重塑人们获取信息的方式。它通过分析用户的浏览记录，把用户可能感兴趣的内容推到眼前，从而大幅降低了信息获取的成本。但与此同时，用户也被困在了由自己偏好编织的“信息茧房”之中。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 算法推荐带来了“信息茧房”问题</li>
                <li>B. 信息获取成本正在不断降低</li>
                <li>C. 用户浏览记录属于个人隐私</li>
                <li>D. 算法技术是信息时代的基础设施</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 首句“算法推荐正在重塑……”是<strong>开门见山</strong>，直接确定话题范围就是“算法推荐”。下文先讲好处，再用“但”转折，重点落在问题：信息茧房。B 是被转折否定的铺垫；C、D 无中生有。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题8 · 中心理解 · 引出话题 · 转折对比引出（“前对策”结构）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>过去，我们评价一座城市，往往看它的高楼大厦和 GDP 增速；而现在，越来越多的城市开始把“15 分钟生活圈”、口袋公园、社区食堂写进规划。这种转变说明，城市发展的评价标尺正在从“规模”转向“人的感受”。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 城市评价标尺正从规模转向人的感受</li>
                <li>B. 高楼大厦不再是城市发展的标志</li>
                <li>C. 口袋公园能满足居民的休闲需求</li>
                <li>D. 城市规划应当避免盲目追求 GDP</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 用“<strong>过去……而现在……</strong>”的<strong>转折对比</strong>引出话题，紧接着“这种转变说明”给出观点——属于“<strong>前对策/前观点</strong>”结构，观点在前、后文只是例证。A 与观点完全对应。B<strong>绝对化</strong>；C 只是例证之一；D 是引申，非文段观点。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题9 · 中心理解 · 引出话题 · 背景知识引出（背景可略读）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>从殷商甲骨到战国简帛，从敦煌写卷到明清方志，中华文明留下了浩如烟海的文献遗产。然而，纸张酸化、虫蛀霉变、战火兵燹，让大量古籍处于损毁边缘。近年来，随着古籍数字化工程的推进，这些脆弱的文明载体正以另一种方式获得新生。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在说明：</p>
              <ul className="example-opts">
                <li>A. 古籍数字化让文献遗产得以重生</li>
                <li>B. 中华文献遗产的数量浩如烟海</li>
                <li>C. 纸质文献很难实现长期保存</li>
                <li>D. 古籍保护应主要依靠物理修复</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 前两句是<strong>背景知识</strong>（文献遗产丰富 + 古籍面临损毁风险），<strong>背景不重要、可略读</strong>；“然而”之后才引出正题，末句“正以另一种方式获得新生”是重点。B、C 都停留在背景层；D 与文意相反，文段讲的是数字化而非物理修复。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题10 · 中心理解 · 引出话题 · 由大引小（谈论对象是全文主体）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>当前，全球能源结构正在经历深刻调整，可再生能源占比持续提升。在这一进程中，光伏产业成为各国竞相布局的重点领域。我国光伏产业从“三头在外”起步，经过十余年攻关，如今在硅片、电池片等环节均占据全球领先地位。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字主要介绍的是：</p>
              <ul className="example-opts">
                <li>A. 我国光伏产业由弱到强的发展历程</li>
                <li>B. 全球能源结构调整的整体趋势</li>
                <li>C. 可再生能源占比持续提升的原因</li>
                <li>D. 各国在光伏领域的竞争格局</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>由大引小</strong>：先从“全球能源结构”这个大背景说起，再引到“我国光伏产业”这一特定对象。<strong>被引出的特定对象才是全文主体</strong>——后文全部在讲我国光伏产业的变化，故选 A。B 只是引子（大背景）；C 无中生有；D 偏离，文段并没有比较各国格局。
            </div>
          </Example>
      
          
          <Example>
            <div className="example-tag">例题11 · 中心理解 · 引出话题 · 设问引出</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>为什么有些人明明睡够了八小时，白天依然昏昏欲睡？睡眠医学研究发现，睡眠质量并不完全取决于时长，还与睡眠周期的完整性密切相关。如果频繁在深睡阶段被打断，即便睡满八小时，大脑也无法得到充分修复。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在说明：</p>
              <ul className="example-opts">
                <li>A. 睡眠时长并非衡量睡眠质量的唯一标准</li>
                <li>B. 现代人普遍存在睡眠周期紊乱的问题</li>
                <li>C. 深睡阶段被打断会直接导致失眠</li>
                <li>D. 睡眠医学研究取得了重要进展</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 首句<strong>设问引出话题</strong>，下文正是对这个问题的回答，因此答案即重点。研究发现“睡眠质量并不完全取决于时长”，A与之完全对应。B“普遍”无中生有；C“直接导致失眠”偷换概念，原文说的是“无法得到充分修复”；D范围过大，非重点。
            </div>
          </Example>
      
          <h4>④ 五种对策表达方式</h4>
          <table>
            <tr><th>类型</th><th>标志词</th><th>举例</th></tr>
            <tr>
              <td><span className="badge badge-red">祈使/建议</span></td>
              <td>应该(应)、需要(要)、必须、要求、可以、不妨</td>
              <td>古典名画、人人讲故事</td>
            </tr>
            <tr>
              <td><span className="badge badge-red">禁止型</span></td>
              <td>不能、禁止、要避免、如果……就不……</td>
              <td>—</td>
            </tr>
            <tr>
              <td><span className="badge badge-red">逻辑关联词</span></td>
              <td>只有…才（只有后为对策重点）、必须…否则（必须后为对策重点）</td>
              <td>交互互动剧</td>
            </tr>
            <tr>
              <td><span className="badge badge-red">必要条件</span></td>
              <td>基础、关键、前提、离不开、必不可少、不可或缺</td>
              <td>宣传适老化改造</td>
            </tr>
            <tr>
              <td><span className="badge badge-red">语义表对策</span></td>
              <td>时代命题、重要议题、负有……义务、长远目标、必经之路、必然趋势、有助于</td>
              <td>农业保险三农</td>
            </tr>
          </table>
          <div className="tip"><strong>注意：</strong>不是有对策标志就一定是对策，只是"有可能是对策"，需结合文段判断。</div>
      
          <Example>
            <div className="example-tag">例题12 · 中心理解 · 对策表达 · 祈使／建议型</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>一些博物馆的展陈方式仍停留在“隔着玻璃看文物”的阶段。对普通观众而言，晦涩的专业术语和冰冷的展柜只会拉开距离。博物馆不妨多用故事化的语言讲述文物背后的生活，用互动装置让观众亲手触摸历史的质感。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 博物馆应改进展陈方式以拉近与观众的距离</li>
                <li>B. 文物背后的故事更值得深入研究</li>
                <li>C. 隔着玻璃观展是博物馆的传统做法</li>
                <li>D. 互动装置是博物馆现代化的标志</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> “<strong>不妨</strong>”是典型的<strong>祈使／建议型</strong>对策标志词（应该、需要、必须、可以、不妨），其后内容（故事化语言 + 互动装置）就是重点，A 正是对这两点的概括。B、C、D 分别是引申、背景、无中生有。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题13 · 中心理解 · 对策表达 · 禁止型</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>近年来，一些地方在校园周边设置“网红打卡点”，吸引大量人流。这固然带动了周边商业，但人流聚集带来的交通拥堵、噪声干扰，已经影响到正常教学秩序。学校周边不宜盲目引入商业性项目，更不能把学生活动空间变成营销场地。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 学校周边不宜盲目引入商业性项目</li>
                <li>B. “网红打卡点”带动了周边商业发展</li>
                <li>C. 交通拥堵是城市治理中的普遍难题</li>
                <li>D. 学生活动空间应当向市民免费开放</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> “<strong>不宜</strong>……<strong>更不能</strong>……”是<strong>禁止型</strong>对策表达（不能、禁止、要避免、不宜），其后是文段重点。B 是被“固然……但……”否定的铺垫；C 扩大范围；D 无中生有。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题14 · 中心理解 · 对策表达 · 逻辑关联词（只有……才）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>基层减负，减的是报表和会议，增的应该是办事的时间和精力。如果只是把纸质表格换成电子表格、把线下会议换成线上会议，负担不减反增。只有真正精简考核指标、厘清权责边界，基层干部才能从文山会海中解脱出来。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 基层减负需精简考核指标、厘清权责边界</li>
                <li>B. 电子表格反而增加了基层的工作量</li>
                <li>C. 线上会议的实际效果优于线下会议</li>
                <li>D. 基层干部的业务能力有待进一步提升</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> “<strong>只有……才……</strong>”属于<strong>逻辑关联词型</strong>对策表达，<strong>“只有”之后是必要条件，也就是对策重点</strong>。B、C 是对“换汤不换药”的具体说明，处在重点之前；D 无中生有。
            </div>
          </Example>
      
          
          <Example>
            <div className="example-tag">例题15 · 中心理解 · 对策表达 · 必要条件</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>农业文化遗产既是先民智慧的结晶，也是当地生态系统的重要组成部分。然而，随着城镇化推进，许多农业文化遗产面临消失的风险。专家指出，保护农业文化遗产，关键在于让当地农民从中获益，这离不开产业支撑和政策扶持。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 农业文化遗产具有重要的生态价值</li>
                <li>B. 城镇化威胁农业文化遗产的存续</li>
                <li>C. 保护农业文化遗产需让农民获益并给予支撑</li>
                <li>D. 应加强对农业文化遗产的普查登记</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】C</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> “<strong>关键在于</strong>……”“<strong>离不开</strong>……”是典型的<strong>必要条件型对策</strong>标志词，其后内容才是重点：让农民获益、有产业和政策支撑。A是并列的第一句、B是“然而”引出的问题，都是对策的铺垫；D“普查登记”文段未提，无中生有。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题16 · 中心理解 · 对策表达 · 语义表对策</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>近年来，我国城市轨道交通里程快速增长，但与之匹配的安全管理能力并未同步提升。随着线网规模扩大、设备老化加剧，运营安全风险日益复杂。构建与线网规模相适应的安全管理体系，已成为城市轨道交通高质量发展的必然趋势。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 城市轨道交通需构建与之匹配的安全管理体系</li>
                <li>B. 我国城市轨道交通的里程增长过快</li>
                <li>C. 设备老化是运营安全的最大威胁</li>
                <li>D. 城市轨道交通应当控制建设规模</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> “成为……<strong>必然趋势</strong>”是<strong>语义表对策</strong>——没有“应该”“必须”这类标志词，但语义上就是对策（时代命题、必然趋势、必经之路、离不开）。A 与之对应。B、C 是问题表述，处在对策之前；D 无中生有。
            </div>
          </Example>
      
          <h4>⑤ 五种行文结构</h4>
      
          <details open>
            <summary>结构一：后对策 / 后观点</summary>
            <p><strong>行文脉络：</strong>引出话题/问题 → 分析论证 → 给出对策/观点</p>
            <p><strong>正确选项：</strong>总结/针对问题的对策（完美选项包含问题和解决措施）</p>
            <p><strong>举例：</strong>区块链基层治理、类型化审判</p>
          </details>
      
      <Example>
            <div className="example-tag">例题17 · 中心理解 · 行文结构 · 后对策</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>在大数据时代之前，人们做出决策和构建制度，大多建立在匮乏的数据基础上。简单地说，在过去网络还不甚普及的时候，人们在做出一些决策行为和数据分析的过程中，更多的是凭借个人经验和直觉。而现在，大数据时代的来临，为人们提供了一种全新的思路，通过大量的数据分析得出的结果将更加现实和准确。<strong>但是</strong>，值得注意的是，过去，我们手头上仅有的一些数据都是相对准确的，有参考价值的。而大数据由于信息量更多更大，<strong>信息品质参差不齐</strong>，并非所有数据都有参考价值，相对过去来说，这些数据更加杂乱。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 大数据使得科学研究更加便捷和准确</li>
                <li>B. 大数据时代人们的决策过程更加科学</li>
                <li>C. 不同时期数据的准确性存在着巨大差别</li>
                <li>D. 应注意信息品质对数据分析结果的影响</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】D</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 前两句说过去决策凭借经验和直觉，第三句说大数据让分析更准确——这是背景铺垫。第四句用"但是"转折，引出<strong>现在的缺陷</strong>：信息品质参差不齐。这是典型的<strong>"引出话题→分析→但是→问题"</strong>结构，转折后是重点。作者意图是提醒注意信息品质，故选D。A、B在"但是"之前，是出处有误；C只概括了表面现象，没体现作者意图。
            </div>
          </Example>
      
          <details open>
            <summary>结构二：前对策 / 前观点</summary>
            <p><strong>行文脉络：</strong>引出话题/问题 → 直接给出对策/观点 → 论证解释说明</p>
            <p><strong>正确选项：</strong>针对问题的对策（完美选项包含问题和解决措施）</p>
            <p><strong>举例：</strong>消费潜力高质量发展、数据重复研究、宣传适老化改造</p>
          </details>
      
      <Example>
            <div className="example-tag">例题18 · 中心理解 · 行文结构 · 前对策</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三系统班】</div>
              <p>目前，我国自主选育品种播种面积占95%以上，良种对粮食增产贡献率已超过45%……<strong>然而</strong>，我国种业自主创新水平与发达国家还有差距，一些品种、领域和环节会影响农业发展速度、质量和效益。<strong>这就要求我们</strong>加强农业种质资源保护利用，加快推进关键核心技术攻关……让一粒粒好种子长成农民的致富希望。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>最适合做这段文字标题的是：</p>
              <ul className="example-opts">
                <li>A. 打造种子这枚农业"芯片"</li>
                <li>B. 要让创新为中国农业赋能</li>
                <li>C. 种出农民致富的新希望</li>
                <li>D. 种业产业化发展的启示</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 转折引出问题→"这就要求我们"给出<strong>后对策</strong>。对策包含多个方面：种质资源保护、核心技术攻关、种源自主可控、打通各环节等。A选项"芯片"双引号选项，概括了种子的核心技术地位，是对策类标题且有力量。B没说种子（主体不一致）；C"种出"偏向果实；D是完成时，与"加快提升"不符。
            </div>
          </Example>
      
          <details open>
            <summary>结构三：总分 / 分总</summary>
            <p><strong>总分：</strong>总概括 → 分论点展开。<strong>"总"重要</strong>，正确选项是总概括/总观点</p>
            <p><strong>分总：</strong>分析介绍 → 总结。提示词有"这些""因此"等，正确选项是总结句</p>
            <p><strong>举例：</strong>虚拟空间侦察情报（总分）、考古发现中华文明起源（分总）</p>
          </details>
      
          <details open>
            <summary>结构四：并列 / 大并列</summary>
            <p><strong>并列（分分）：</strong>关联词"一方面…另一方面、也、还、并且、同时、另外"或相同句式</p>
            <p><strong>大并列（分分分）：</strong>根据时间、地区、人物等分类介绍，无总结性表述</p>
            <p><strong>正确选项：</strong>概括全面！可考虑 A且B 类选项</p>
            <p><strong>分堆法：</strong>找到并列标志词，把内容"分堆"概括</p>
          </details>
      
          <details open>
            <summary>结构五：二层结构（A+B）</summary>
            <table>
              <tr><th>子类型</th><th>说明</th><th>正确选项</th></tr>
              <tr><td>对比</td><td>时间对比、国别对比</td><td>"当今""我国"突出现在改变是重点</td></tr>
              <tr><td>转折</td><td>可能转折后是重点，也可能转折前后均重要</td><td>需具体分析</td></tr>
              <tr><td>因果/果因</td><td>原因类选项，可根据选项逆推</td><td>原因类</td></tr>
              <tr><td>设问回答</td><td>由问题引出，下文为回答</td><td>重点关注答案</td></tr>
              <tr><td>背景+正文</td><td>背景可略读，重点关注正文</td><td>我国+新（新突破、新成绩、新发现）</td></tr>
            </table>
          </details>
      
          <Example>
            <div className="example-tag">例题19 · 中心理解 · 行文结构 · 总分（“总”是重点）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>城市治理的精细化，往往体现在对“小事”的态度上。井盖是否平整、路灯是否明亮、盲道是否通畅，这些看似琐碎的细节直接关系到市民的日常体验；而一处积水、一处破损长期无人处理，也会迅速耗损人们对城市的信任。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 城市治理的精细化体现在对“小事”的态度上</li>
                <li>B. 井盖和路灯的日常维护成本很高</li>
                <li>C. 市民对城市的信任很容易建立起来</li>
                <li>D. 城市治理应当优先解决积水和破损问题</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>总分结构</strong>：首句是“总”，提出观点——治理的精细化体现在对小事的态度上；后文用井盖、路灯、盲道这些“分”来论证。<strong>“总”才是重点</strong>，A 就是总概括。B、D 只是分述里的例子；C 与文意相反。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题20 · 中心理解 · 行文结构 · 分总（“因此”之后是重点）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>在一些农村地区，快递“最后一公里”仍然不畅：网点少、派送慢、取件要跑几公里。电商下乡带来了大量订单，但因为物流成本高，不少网点难以为继。因此，要让农村消费真正“活”起来，必须先把物流网络的“毛细血管”打通。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 农村消费的活力取决于物流网络是否通畅</li>
                <li>B. 农村快递网点的经营普遍困难</li>
                <li>C. 电商下乡为农村带来了大量订单</li>
                <li>D. 农村居民取件不便影响购物体验</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>分总结构</strong>：先分析农村物流不畅的表现和原因，最后用“<strong>因此</strong>”引出总结。<strong>“因此”之后才是重点</strong>，A 与之对应。B、C、D 都停留在“分”的部分，是结论的依据而非结论本身。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题21 · 中心理解 · 行文结构 · 并列（必须概括全面）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>城市绿地的作用是多方面的。它能够调节微气候，缓解城市热岛效应；它为鸟类和昆虫提供栖息地，维护城市生物多样性；它也为市民提供了休憩与社交的场所，有助于缓解心理压力。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字主要说明的是：</p>
              <ul className="example-opts">
                <li>A. 城市绿地具有生态与社会等多重功能</li>
                <li>B. 城市绿地能够有效缓解城市热岛效应</li>
                <li>C. 城市绿地是鸟类和昆虫的重要栖息地</li>
                <li>D. 城市绿地有助于缓解市民的心理压力</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 三个分句用“它能够……；它……；它……”并列铺开，没有总结性表述，是典型的<strong>并列（分分）结构</strong>。并列结构的正确选项必须<strong>概括全面</strong>：A 同时覆盖了生态与社会两方面；B、C、D 各只对应一个分句，属于<strong>片面</strong>，不选。
            </div>
          </Example>
      
          
          <figure className="fig">
            <svg viewBox="0 0 640 326" role="img" aria-label="言语中心理解题的五种行文结构">
              <text x={320} y={24} textAnchor="middle" fontSize={14} fontWeight="700" fill="#1e293b">结构决定重点在哪：★ 标的就是正确答案的来源</text>
              <circle cx={26} cy={72} r={11} fill="#e2e8f0"></circle>
              <text x={26} y={77} textAnchor="middle" fontSize={12} fontWeight="700" fill="#334155">1</text>
              <text x={46} y={77} fontSize={13} fontWeight="700" fill="#1e293b">后对策/后观点</text>
              <rect x={190} y={56} width={124} height={32} rx={7} fill="#eef2ff" stroke="#a5b4fc" strokeWidth={1.2}></rect>
              <text x={252} y={77} textAnchor="middle" fontSize={12.5} fill="#3730a3">引出话题·问题</text>
              <text x={314} y={78} textAnchor="middle" fontSize={14} fill="#94a3b8">→</text>
              <rect x={331} y={56} width={124} height={32} rx={7} fill="#eef2ff" stroke="#a5b4fc" strokeWidth={1.2}></rect>
              <text x={393} y={77} textAnchor="middle" fontSize={12.5} fill="#3730a3">分析论证</text>
              <text x={455} y={78} textAnchor="middle" fontSize={14} fill="#94a3b8">→</text>
              <rect x={472} y={56} width={124} height={32} rx={7} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.6}></rect>
              <text x={534} y={77} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#92400e">对策·观点 ★</text>
              <circle cx={26} cy={124} r={11} fill="#e2e8f0"></circle>
              <text x={26} y={129} textAnchor="middle" fontSize={12} fontWeight="700" fill="#334155">2</text>
              <text x={46} y={129} fontSize={13} fontWeight="700" fill="#1e293b">前对策/前观点</text>
              <rect x={190} y={108} width={124} height={32} rx={7} fill="#eef2ff" stroke="#a5b4fc" strokeWidth={1.2}></rect>
              <text x={252} y={129} textAnchor="middle" fontSize={12.5} fill="#3730a3">引出话题·问题</text>
              <text x={314} y={130} textAnchor="middle" fontSize={14} fill="#94a3b8">→</text>
              <rect x={331} y={108} width={124} height={32} rx={7} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.6}></rect>
              <text x={393} y={129} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#92400e">对策·观点 ★</text>
              <text x={455} y={130} textAnchor="middle" fontSize={14} fill="#94a3b8">→</text>
              <rect x={472} y={108} width={124} height={32} rx={7} fill="#eef2ff" stroke="#a5b4fc" strokeWidth={1.2}></rect>
              <text x={534} y={129} textAnchor="middle" fontSize={12.5} fill="#3730a3">论证解释</text>
              <circle cx={26} cy={176} r={11} fill="#e2e8f0"></circle>
              <text x={26} y={181} textAnchor="middle" fontSize={12} fontWeight="700" fill="#334155">3</text>
              <text x={46} y={181} fontSize={13} fontWeight="700" fill="#1e293b">总分</text>
              <rect x={190} y={160} width={193} height={32} rx={7} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.6}></rect>
              <text x={286} y={181} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#92400e">总概括 ★（总重要）</text>
              <text x={394} y={182} textAnchor="middle" fontSize={14} fill="#94a3b8">→</text>
              <rect x={403} y={160} width={193} height={32} rx={7} fill="#eef2ff" stroke="#a5b4fc" strokeWidth={1.2}></rect>
              <text x={499} y={181} textAnchor="middle" fontSize={12.5} fill="#3730a3">分论点 ① ② ③</text>
              <circle cx={26} cy={228} r={11} fill="#e2e8f0"></circle>
              <text x={26} y={233} textAnchor="middle" fontSize={12} fontWeight="700" fill="#334155">4</text>
              <text x={46} y={233} fontSize={13} fontWeight="700" fill="#1e293b">分总</text>
              <rect x={190} y={212} width={193} height={32} rx={7} fill="#eef2ff" stroke="#a5b4fc" strokeWidth={1.2}></rect>
              <text x={286} y={233} textAnchor="middle" fontSize={12.5} fill="#3730a3">分析介绍</text>
              <text x={394} y={234} textAnchor="middle" fontSize={14} fill="#94a3b8">→</text>
              <rect x={403} y={212} width={193} height={32} rx={7} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.6}></rect>
              <text x={499} y={233} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#92400e">总结 ★（因此/这些）</text>
              <circle cx={26} cy={280} r={11} fill="#e2e8f0"></circle>
              <text x={26} y={285} textAnchor="middle" fontSize={12} fontWeight="700" fill="#334155">5</text>
              <text x={46} y={285} fontSize={13} fontWeight="700" fill="#1e293b">并列/大并列</text>
              <rect x={190} y={264} width={124} height={32} rx={7} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.6}></rect>
              <text x={252} y={285} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#92400e">分论点 ①</text>
              <text x={314} y={286} textAnchor="middle" fontSize={14} fill="#94a3b8">+</text>
              <rect x={331} y={264} width={124} height={32} rx={7} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.6}></rect>
              <text x={393} y={285} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#92400e">分论点 ②</text>
              <text x={455} y={286} textAnchor="middle" fontSize={14} fill="#94a3b8">+</text>
              <rect x={472} y={264} width={124} height={32} rx={7} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.6}></rect>
              <text x={534} y={285} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#92400e">分论点 ③</text>
              <text x={320} y={318} textAnchor="middle" fontSize={12.5} fill="#475569">并列结构没有唯一重点 → 正确选项必须「概括全面」，常见 A 且 B 型</text>
            </svg>
            <figcaption>图：五种行文结构的「重点位置」—— 先套结构，再抓重点，最后才比对选项</figcaption>
          </figure>
      
          <h3 id="option">264111 选项分析</h3>
      
          <div className="num-grid">
            <div className="num-item">
              <div className="num">2</div>
              <div className="label">两出处</div>
              <div className="desc">出处有误的选项不选</div>
            </div>
            <div className="num-item">
              <div className="num">6</div>
              <div className="label">六有误</div>
              <div className="desc">选项本身有错误</div>
            </div>
            <div className="num-item">
              <div className="num">4</div>
              <div className="label">四大类</div>
              <div className="desc">四类正确选项特征</div>
            </div>
            <div className="num-item">
              <div className="num">1</div>
              <div className="label">一正确</div>
              <div className="desc">A且B类概括全面</div>
            </div>
            <div className="num-item">
              <div className="num">1</div>
              <div className="label">一比较</div>
              <div className="desc">具体优于宽泛</div>
            </div>
            <div className="num-item">
              <div className="num">1</div>
              <div className="label">一验证</div>
              <div className="desc">反推文段</div>
            </div>
          </div>
      
          
          <h4>① 两出处（出处有误 → 不选）</h4>
          <div className="danger">
            <p><strong>出处一：</strong>转折/"因此"之前 → 非重点部分提炼的选项</p>
            <p><strong>出处二：</strong>"不是…而是…"的"不是"部分 → 被指代的部分</p>
            <p><strong>出处三：</strong>例子、分析论证、背景中提炼的选项</p>
          </div>
      
          
          <Example>
            <div className="example-tag">例题1 · 选项分析 · 两出处 · 转折之前不选</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>近年来，短视频行业迅猛发展，市场规模不断扩大，用户数量持续攀升。然而，在流量红利见顶之后，内容同质化、低俗化的问题日益突出，如何实现从“流量”到“质量”的转变，成为行业必须回答的课题。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 短视频行业市场规模不断扩大</li>
                <li>B. 短视频行业应实现从流量到质量的转变</li>
                <li>C. 短视频行业的发展速度已明显放缓</li>
                <li>D. 短视频用户数量已经接近饱和</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> A出自“然而”<strong>之前</strong>，是被转折所否定的背景，属于<strong>出处有误</strong>，直接排除。转折后是重点：从“流量”转向“质量”，B与之对应。C“发展速度放缓”、D“接近饱和”均无中生有。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题2 · 选项分析 · 两出处 · 出处二（“不是……而是……”的“不是”）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>城市更新不是把老城区推倒重来，而是要在原有肌理上做“微创手术”。它既包括对危旧房屋的加固修缮，也包括对街巷尺度、业态结构的调整。只有尊重既有生活的连续性，更新才不会变成另一种破坏。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 城市更新应在原有肌理上做“微创手术”</li>
                <li>B. 老城区危旧房屋存在较大安全隐患</li>
                <li>C. 街巷尺度和业态结构决定城市的活力</li>
                <li>D. 推倒重来的更新方式成本更高</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段用“<strong>不是……而是……</strong>”表明态度，<strong>“不是”的部分是被否定的对象，出自这里就是出处有误</strong>。D 正是从“不是”部分（推倒重来）提炼的选项，且“成本更高”属无中生有；B、C 是“而是”之后的并列细节之一，片面。A 才是文段主张。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题3 · 选项分析 · 两出处 · 出处三（例子、论证、背景中提炼的选项）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>近年来，“博物馆热”持续升温。以故宫为例，其文创产品年销售额已超过 15 亿元，带动了“把博物馆带回家”的消费潮流。但这股热潮背后，真正的支撑不是文创的“萌”，而是公众对历史文化日益增长的理解需求。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. “博物馆热”的支撑是公众对历史文化的理解需求</li>
                <li>B. 故宫文创产品的年销售额超过 15 亿元</li>
                <li>C. 文创产品是博物馆商业化的重要路径</li>
                <li>D. “把博物馆带回家”已成为消费潮流</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> B 出自“<strong>以故宫为例</strong>”之后的<strong>举例部分</strong>，C 是从例子中做的<strong>分析论证</strong>，D 是例子带来的<strong>背景现象</strong>——三者都是<strong>出处三</strong>（例子、论证、背景），是重点之前的非重点内容。文段用“不是……而是……”把重点落在“而是”之后，A 与之对应。
            </div>
          </Example>
      
          <h4>② 六有误（选项本身有误 → 不选）</h4>
          <table>
            <tr><th>错误类型</th><th>说明</th><th>识别要点</th></tr>
            <tr>
              <td><span className="badge badge-red">片面</span></td>
              <td>并列结构只说一方面，概括不全面</td>
              <td>对策类选项要宽容，非对策类必须全面</td>
            </tr>
            <tr>
              <td><span className="badge badge-red">杂糅</span></td>
              <td>从原文各句中提炼词语拼凑，非出自同一句</td>
              <td>检查选项信息是否出自同一逻辑层次</td>
            </tr>
            <tr>
              <td><span className="badge badge-red">下定义</span></td>
              <td>中性表达，体现不出文段问题</td>
              <td>说理类文段不选；"A是B"句式正确率低</td>
            </tr>
            <tr>
              <td><span className="badge badge-red">绝对化</span></td>
              <td>"最""首要""越来越"等，原文未说不能选</td>
              <td>最高级、必要条件、比较级需原文支持</td>
            </tr>
            <tr>
              <td><span className="badge badge-red">无中生有</span></td>
              <td>选项关键信息原文未提及</td>
              <td>尤其注意程度较重的词语或成语</td>
            </tr>
            <tr>
              <td><span className="badge badge-red">本身有误</span></td>
              <td>不符合事实，逻辑错误或不符合主流价值</td>
              <td>选项本身就不成立</td>
            </tr>
          </table>
      
          
          <Example>
            <div className="example-tag">例题4 · 选项分析 · 六有误 · 片面与绝对化</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>城市更新既要“面子”，更要“里子”。一方面要改造老旧小区的外立面、道路管网等基础设施，切实改善居民的居住环境；另一方面要保留城市的历史文脉和老街巷的生活气息，避免千城一面。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 城市更新中最重要的是改造基础设施</li>
                <li>B. 城市更新应兼顾设施改善与文脉保留</li>
                <li>C. 老旧小区改造是城市更新的核心任务</li>
                <li>D. 城市更新必须杜绝一切拆建行为</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段是“一方面……另一方面……”的<strong>并列结构</strong>，正确选项必须<strong>概括全面</strong>。A“最重要”既<strong>绝对化</strong>又<strong>片面</strong>；C只对应第一方面，片面；D“杜绝一切”绝对化，且原文只说“避免千城一面”，并未否定拆建。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题5 · 选项分析 · 六有误 · 杂糅（拼凑不同句子的信息）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>某市推行“一网通办”后，企业开办时间从 5 个工作日压缩到 1 个工作日。这得益于后台数据的打通，也离不开窗口人员的业务整合。不过，部分事项仍需线下核验材料原件，企业和群众盼望“最多跑一次”能覆盖更多场景。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字旨在说明：</p>
              <ul className="example-opts">
                <li>A. “一网通办”压缩了开办时间但仍需线下核验材料</li>
                <li>B. “一网通办”改革成效显著但仍有提升空间</li>
                <li>C. 窗口人员进行了繁琐的业务整合</li>
                <li>D. 企业和群众希望办事速度能更快</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> A 是典型的<strong>杂糅</strong>：把第一句的“成效”（压缩时间）和第三句的“不足”（仍需线下核验）各取一块拼成一句，看似全面，实则两个信息不在同一逻辑层次——这是命题人最常设的杂糅陷阱。B 概括准确（成效 + 空间）。C 只是原因之一；D 表述宽泛。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题6 · 选项分析 · 六有误 · 下定义（“A 是 B”句式，中性表达）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>近年来，“陪伴经济”悄然兴起。从陪诊、陪跑，到陪聊、陪学，越来越多人愿意为“有人陪着”这件事付费。这背后既有独居人口增加、社交需求上升的原因，也反映出社会支持网络正在发生结构性变化。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在说明：</p>
              <ul className="example-opts">
                <li>A. “陪伴经济”折射出社会支持网络的结构性变化</li>
                <li>B. “陪伴经济”是一种为陪伴服务付费的商业模式</li>
                <li>C. 独居人口的增加直接催生了陪伴服务</li>
                <li>D. 陪诊、陪跑等服务越来越受到欢迎</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> B 是<strong>下定义</strong>句式（“……是一种……的商业模式”），属于中性表述、体现不出文段要说明的问题；说理类文段中下定义类选项正确率极低。C 只对应并列原因之一，且“直接”<strong>绝对化</strong>；D 停留在现象层。A 与“这背后”引出的分析对应。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题7 · 选项分析 · 六有误 · 无中生有</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>我国是世界上荒漠化面积最大的国家之一。经过几十年治理，全国荒漠化和沙化土地面积连续多年“双缩减”，重点沙区实现了从“沙进人退”到“绿进沙退”的历史性转变。不过，生态系统的稳定性仍然脆弱，已治理的土地一旦管护不到位，很容易再次退化。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 荒漠化治理成果仍需持续巩固</li>
                <li>B. 我国荒漠化面积已经大幅减少</li>
                <li>C. 治沙应当大量引进外来耐旱植物</li>
                <li>D. 生态系统的自我修复能力很强</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段结构是“成绩 + 不过 + 隐患”，重点在转折之后：成果需要持续管护，A 与之对应。C 中的“引进外来耐旱植物”在原文中根本没有提到，是典型的<strong>无中生有</strong>；B 停留在成绩部分；D 与文意相反。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题8 · 选项分析 · 六有误 · 绝对化</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>城市书房在不少城市落地后，成为市民家门口的阅读空间。它们大多依托社区、公园或商圈设立，开放时间长、借阅手续简便。不过也有读者反映，部分书房藏书更新慢、座位偏少，使用体验还有提升空间。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在说明：</p>
              <ul className="example-opts">
                <li>A. 城市书房的使用体验有待提升</li>
                <li>B. 城市书房是最受市民欢迎的阅读方式</li>
                <li>C. 社区应当承担更多公共文化服务职能</li>
                <li>D. 纸质阅读在整个社会中的占比正在回升</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段先讲便利、再用“不过”转折指出不足，重点落在不足。B 的“<strong>最受市民欢迎</strong>”在原文中找不到依据——<strong>最高级、比较级都必须有原文支持</strong>，这是<strong>绝对化</strong>设错；C、D 无中生有。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题9 · 选项分析 · 六有误 · 本身有误（违背事实或主流价值）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>大遗址是不可再生的文化资源。由于占地面积大、保护要求高，很多大遗址长期处于“沉睡”状态。近年来，一些地方探索“国家考古遗址公园”模式，在保护的前提下开放展示，让遗址从“看得见的荒草”变成“读得懂的历史”。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 大遗址可通过遗址公园模式实现保护与展示的统一</li>
                <li>B. 大遗址因为占地面积大而难以有效保护</li>
                <li>C. 保持荒草地状态是大遗址保护的最佳形态</li>
                <li>D. 应当全面开发大遗址的旅游经济价值</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> D 中“<strong>全面开发旅游价值</strong>”与文段“在保护的前提下开放展示”相悖，也与“不可再生资源”的保护要求相冲突——这是<strong>选项本身有误</strong>（不符合事实与主流价值）；C 违背常理。<strong>这类选项不需要回文段比对，读一遍就能排掉。</strong>B 是背景，A 概括了文段主张。
            </div>
          </Example>
      
          <h4>③ 四大类（正确选项特征）</h4>
          <table>
            <tr><th>类型</th><th>文段特征</th><th>选项特点</th></tr>
            <tr>
              <td><span className="badge badge-green">历程类</span></td>
              <td>文段有清晰的时间轴</td>
              <td>常见词语：发展流程、变迁等</td>
            </tr>
            <tr>
              <td><span className="badge badge-green">区别比较联系类</span></td>
              <td>双主语，地位相当、篇幅相当</td>
              <td>选项体现比较或联系</td>
            </tr>
            <tr>
              <td><span className="badge badge-green">原因类</span></td>
              <td>果因/因果结构，原文是选项的原因</td>
              <td>可根据原因类选项逆推文段</td>
            </tr>
            <tr>
              <td><span className="badge badge-green">具体类</span></td>
              <td>可概括出"12345"小点或展开"1→1.1/1.2/1.3"</td>
              <td>选项具体、有层次</td>
            </tr>
          </table>
      
          
          <Example>
            <div className="example-tag">例题10 · 选项分析 · 四大类 · 原因类</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>近年来，我国不少城市的“老字号”重新焕发生机，这并非偶然。随着国潮消费的兴起，年轻消费者对传统文化的认同感不断增强，老字号承载的文化记忆恰好满足了这种需求；与此同时，电商和直播的普及，也让老字号打破了地域限制。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在说明：</p>
              <ul className="example-opts">
                <li>A. 老字号重新焕发生机的原因</li>
                <li>B. 国潮消费兴起的表现</li>
                <li>C. 年轻消费者的消费习惯</li>
                <li>D. 电商直播对传统商业的影响</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段是<strong>果因结构</strong>：先说结果“老字号焕发生机”，再用“这并非偶然”引出原因，属于<strong>原因类</strong>，选项可直接逆推文段。B、C、D都只是原因之一，片面，无法概括并列的两条原因。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题11 · 选项分析 · 四大类 · 历程类（文段有时间轴）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>从二十世纪八十年代的“柜台交易”，到九十年代的连锁超市，再到今天的即时零售，我国零售业态的形态不断演进。每一次变化背后，都是消费需求、技术条件和供应链能力的共同推动。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字主要介绍的是：</p>
              <ul className="example-opts">
                <li>A. 我国零售业态的发展演变</li>
                <li>B. 即时零售模式兴起的原因</li>
                <li>C. 连锁超市的经营模式及其特点</li>
                <li>D. 消费需求对商业形态的影响</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段有清晰的<strong>时间轴</strong>（八十年代 → 九十年代 → 今天），属于<strong>历程类</strong>，正确选项应体现“发展流程、变迁”这类词语。A 与之对应；B、C 只是其中一个阶段；D 只提到推动因素之一，片面。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题12 · 选项分析 · 四大类 · 区别比较联系类（双主语）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>水墨画讲究“计白当黑”，以留白营造意境；油画则通过色彩的层层堆叠塑造体积与光影。两者虽同属视觉艺术，却分别承载着东方“虚实相生”与西方“摹仿自然”的审美传统。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字主要说明的是：</p>
              <ul className="example-opts">
                <li>A. 水墨画与油画在技法与审美传统上的差异</li>
                <li>B. 水墨画比油画更加注重意境的营造</li>
                <li>C. 留白是中国画独有的表现手法</li>
                <li>D. 视觉艺术都应当兼顾色彩与构图</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段是<strong>双主语</strong>（水墨画／油画），地位相当、篇幅相当，属于<strong>区别比较联系类</strong>，正确选项必须体现比较或联系。A 兼顾两者；B 是单向比较且原文没有优劣之分；C、D 无中生有。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题13 · 选项分析 · 四大类 · 具体类（可拆出“12345”小点）</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>一条公交线路的优化，要经过多个步骤：先由大数据分析客流走向，确定调整的必要性；再组织现场踏勘，核查站点周边的道路条件；随后形成方案并向社会公示，收集沿线居民意见；最后经过专家论证与主管部门审批，才正式实施。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字主要介绍的是：</p>
              <ul className="example-opts">
                <li>A. 公交线路优化的完整流程</li>
                <li>B. 大数据分析在交通领域的应用</li>
                <li>C. 公交站点设置应当遵循的原则</li>
                <li>D. 居民意见对公共决策的重要意义</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段可以清晰地拆出“① 分析客流 → ② 现场踏勘 → ③ 公示征求意见 → ④ 论证审批”的<strong>“12345”小点</strong>，属于<strong>具体类</strong>，正确选项应当具体、有层次。A 准确概括；B、C、D 都只对应其中一步，片面。
            </div>
          </Example>
      
          <h4>④ 一正确</h4>
          <div className="tip">
            <strong>A且B类选项：</strong>当文段是A+B类结构（如并列结构）时，正确选项往往同时包含A和B两方面内容，概括全面。
          </div>
      
          
          <Example>
            <div className="example-tag">例题14 · 选项分析 · 一正确 · A且B</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>人工智能的发展，一方面极大提升了生产效率，另一方面也带来了就业结构的深刻变化。它既可能替代部分重复性岗位，也会创造出数据分析、算法维护等新职业。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字主要说明：</p>
              <ul className="example-opts">
                <li>A. 人工智能提升了生产效率</li>
                <li>B. 人工智能带来了就业结构的变化</li>
                <li>C. 人工智能对就业既替代又创造</li>
                <li>D. 人工智能的发展前景十分广阔</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】C</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段是<strong>A+B 并列结构</strong>，正确选项应同时包含两层意思。A、B各说一面，属于<strong>片面</strong>；D无中生有，文段未谈前景。C的“既替代又创造”恰好概括了并列的两方面，是标准的<strong>A且B 类</strong>选项。
            </div>
          </Example>
      
          <h4>⑤ 一比较</h4>
          <div className="tip">
            <strong>具体 VS 宽泛：</strong>当两个选项都能对应文段时，选更<strong>具体</strong>的选项，而非过于宽泛的"万能选项"。
          </div>
      
          
          <Example>
            <div className="example-tag">例题15 · 选项分析 · 一比较 · 具体优于宽泛</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>古籍是中华文明传承的重要载体。然而，由于年代久远，大量古籍出现虫蛀、霉变、破损等问题，传统的修复方式主要依靠人工，效率低、周期长。如今，借助数字化扫描和人工智能辅助识别，古籍修复的效率和精度都得到了显著提升。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在说明：</p>
              <ul className="example-opts">
                <li>A. 古籍修复应当借助科技手段</li>
                <li>B. 数字化与AI助力古籍修复提质增效</li>
                <li>C. 古籍数字化保护是大势所趋</li>
                <li>D. 传统的人工修复方式已被淘汰</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> A、B都能对应文段，但A只说“借助科技手段”，过于<strong>宽泛</strong>；B点明了“数字化与AI”和“提质增效”，与文段高度吻合，<strong>具体优于宽泛</strong>。C把重点偷换成“数字化保护”；D“已被淘汰”绝对化，原文只是说效率低。
            </div>
          </Example>
      
          <h4>⑥ 一验证</h4>
          <div className="tip">
            <strong>反推验证：</strong>两个选项纠结时，根据选项反推文段应该讲什么，看哪个选项反推出的文段与实际文段更吻合。
          </div>
      
          
          <Example>
            <div className="example-tag">例题16 · 选项分析 · 一验证 · 反推文段</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>乡愁是什么？对很多人来说，乡愁是村口的那棵老树，是母亲在灶台前忙碌的身影，是儿时与玩伴奔跑的田埂。留住乡愁，不能只靠情怀，更要保护好这些承载记忆的乡土风貌。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 留住乡愁需要保护好乡土风貌</li>
                <li>B. 乡愁是人们对故乡的情感记忆</li>
                <li>C. 农村的乡土风貌正在逐渐消失</li>
                <li>D. 仅靠情怀无法留住乡愁</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> B只是“乡愁是什么”的回答，是引出话题的部分；D“仅靠情怀无法”只是对“不能只靠情怀”的复述，都不完整。用<strong>一验证</strong>反推：若选A，文段应先解释乡愁是什么，再提出留住乡愁要靠保护乡土风貌，与原文完全吻合。C“正在消失”无中生有。
            </div>
          </Example>
      
          <h3 id="ruidian">疑难点突破</h3>
      
          <Card>
            <div className="card-title">如何抓准对策？</div>
            <ul>
              <li>抓准对策句的<strong>关键做法</strong>（必要条件）："只有努力才能考上"→ 对策是"努力"</li>
              <li>"必须…否则…"→ "必须"后是对策重点</li>
              <li>借助<strong>问题和论证</strong>确定对策：文段提出问题，对策往往是针对该问题的解决方案</li>
            </ul>
          </Card>
          <Example>
            <div className="example-tag">例题1 · 疑难点 · 抓准对策的关键做法</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>古籍修复人才的培养，既要靠师傅的言传身教，也要靠系统的专业教育。但从根本上说，只有建立起稳定的职业发展通道，让修复师有体面的收入和清晰的成长路径，才能让更多年轻人愿意投身其中。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 古籍修复人才的培养需要言传身教</li>
                <li>B. 应为古籍修复师建立稳定的职业发展通道</li>
                <li>C. 古籍修复是一项需要长期积累的工作</li>
                <li>D. 年轻人普遍不愿意从事古籍修复工作</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> “从根本上说，<strong>只有</strong>……<strong>才能</strong>……”是典型的必要条件型对策，<strong>“只有”后面才是对策的重点</strong>：建立稳定的职业发展通道。A是并列的一方面，不是重点；C无中生有；D把“更多年轻人愿意投身”反推成“普遍不愿意”，与文段意思相反。
            </div>
          </Example>
      
      
          <Card>
            <div className="card-title">如何选择"对策"与"问题"？</div>
            <ul className="check">
              <li>原文<strong>有对策</strong> → 选针对性对策</li>
              <li>原文<strong>只有问题</strong> → 概括问题 或 延伸对策（对策要贴合问题）</li>
            </ul>
            <div className="danger"><strong>注意：</strong>"有问题有对策时优先选对策"的说法是<strong>错误的</strong>！同时出现两个，必然有一个存在致命问题。</div>
          </Card>
          <Example>
            <div className="example-tag">例题2 · 疑难点 · 有对策优先选对策</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>校园“小胖墩”现象日益受到关注。数据显示，我国6至17岁儿童青少年超重肥胖率持续上升，这与饮食结构不合理、身体活动不足密切相关。有专家呼吁，学校应保证学生每天在校体育活动时间不少于一小时，并开设营养健康课程。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在说明：</p>
              <ul className="example-opts">
                <li>A. 儿童青少年超重肥胖问题亟待重视</li>
                <li>B. 校园体育活动的开展面临现实困难</li>
                <li>C. 饮食结构不合理是肥胖的主要原因</li>
                <li>D. 学校应保障学生的体育活动时间</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】D</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段结构是“提出问题→分析原因→<strong>给出对策</strong>（专家呼吁）”。<strong>原文有对策时优先选对策</strong>，D正是“应保证体育活动时间”的同义表述。A只概括了问题；C只对应原因之一，片面；B无中生有。
            </div>
          </Example>
      
      
          <Card>
            <div className="card-title">如何体现作者态度？</div>
            <p>文段结构不清晰时，从文段读懂作者态度（正面/负面），选择能体现作者态度的选项。</p>
          </Card>
          <Example>
            <div className="example-tag">例题3 · 疑难点 · 依作者态度定选项</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>打着“养生”旗号的伪科普文章，正在社交平台上大量传播。它们往往披着科学的外衣，用似是而非的说法包装产品，让不少老年人信以为真。对此，平台不能坐视不管，监管部门也应主动出击。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在说明：</p>
              <ul className="example-opts">
                <li>A. 伪科普文章在社交平台上广泛传播</li>
                <li>B. 老年人容易被伪科普文章误导</li>
                <li>C. 平台和监管部门应联手治理伪科普乱象</li>
                <li>D. 提升老年人的科学素养需要长期努力</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】C</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段带有鲜明的<strong>否定态度</strong>：“打着旗号”“似是而非”“不能坐视不管”，作者对伪科普是批判的，因此要选<strong>能体现作者态度</strong>的选项，即C（治理）。A只是客观描述现象，没有态度；B无中生有，文段只说“不少老年人”；D脱离了文段的话题。
            </div>
          </Example>
      
      
          <h3 id="ex-central">实战例题</h3>
      
      
          <Example>
            <div className="example-tag">例题1 · 综合演练 · 中心理解 · 转折+后对策</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>非物质文化遗产的传承，离不开传承人的坚守，也离不开市场的支撑。然而，不少非遗项目长期面临“叫好不叫座”的窘境：有技艺、有情怀，却难以转化为市场认可的产品。近年来，一些地方尝试将非遗与现代设计相结合，开发出兼具文化内涵和实用价值的新产品，让非遗在市场中找到了新的生存空间。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在说明：</p>
              <ul className="example-opts">
                <li>A. 非遗传承正面临市场困境</li>
                <li>B. 非遗保护需要传承人坚守</li>
                <li>C. 非遗与市场相结合是传承的有效路径</li>
                <li>D. 现代设计提升了非遗的文化内涵</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】C</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> “然而”引出问题（叫好不叫座），后文给出做法（与市场结合），是典型的<strong>后对策结构</strong>，重点在转折后的问题与对策。C既包含问题又包含对策，是完美选项。A只讲问题；B是转折前的内容；D偷换，“现代设计”提升的是产品的实用价值和市场认可度，不是“文化内涵”。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题2 · 综合演练 · 中心理解 · 并列概括</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>数字乡村建设正在悄悄改变农村的面貌。在生产端，物联网、大数据被用于精准种植和病虫害预警，让种地更有“数”；在销售端，直播带货打通了农产品出村进城的通道，让好货卖出好价钱；在治理端，“互联网+政务服务”让村民足不出户就能办成事。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字主要说明：</p>
              <ul className="example-opts">
                <li>A. 直播带货帮助农民增收致富</li>
                <li>B. 数字技术正重塑乡村的生产与生活</li>
                <li>C. 农村政务服务已经实现全面数字化</li>
                <li>D. 物联网应用提高了农业种植效率</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段是“生产端／销售端／治理端”的<strong>大并列</strong>结构，正确选项要<strong>概括全面</strong>。A、C、D各只对应其中一个方面，属于<strong>片面</strong>。B以“生产与生活”统摄三个方面，概括最全面。
            </div>
          </Example>
    </>
  )
}
