import type { ReactElement } from 'react'
import { Card, Example, ExampleAnswer, ExampleQuestion } from '@/components/content'

/**
 * sort
 *
 * @returns 该节正文。
 */
export default function S7(): ReactElement {
  return (
    <>
      <h2><span className="icon">🔀</span> 语句排序</h2>
          <div className="highlight"><strong>核心：</strong>整体把握 → 套入5种结构 → 判断首尾句 → 捆绑组合。</div>
      
          <Card>
            <div className="card-title">解题三步法</div>
            <div className="flow">
              <span className="flow-step">整体把握套结构</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step">判断首尾句</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step">捆绑组合</span>
            </div>
          </Card>
          <figure className="fig">
            <svg viewBox="0 0 640 268" role="img" aria-label="语句排序的三步法与首句捆绑尾句装配示意">
              <text x={320} y={24} textAnchor="middle" fontSize={14} fontWeight="700" fill="#1e293b">语句排序：先定骨架，再拼细节</text>
              <rect x={16} y={40} width={190} height={46} rx={9} fill="#eef2ff" stroke="#6366f1" strokeWidth={1.4}></rect>
              <text x={111} y={62} textAnchor="middle" fontSize={13} fontWeight="700" fill="#3730a3">第一步 · 整体把握</text>
              <text x={111} y={80} textAnchor="middle" fontSize={12} fill="#4338ca">套 5 种行文结构</text>
              <text x={215} y={66} textAnchor="middle" fontSize={15} fill="#94a3b8">→</text>
              <rect x={225} y={40} width={190} height={46} rx={9} fill="#eef2ff" stroke="#6366f1" strokeWidth={1.4}></rect>
              <text x={320} y={62} textAnchor="middle" fontSize={13} fontWeight="700" fill="#3730a3">第二步 · 判首尾句</text>
              <text x={320} y={80} textAnchor="middle" fontSize={12} fill="#4338ca">下定义做首句</text>
              <text x={424} y={66} textAnchor="middle" fontSize={15} fill="#94a3b8">→</text>
              <rect x={434} y={40} width={190} height={46} rx={9} fill="#eef2ff" stroke="#6366f1" strokeWidth={1.4}></rect>
              <text x={529} y={62} textAnchor="middle" fontSize={13} fontWeight="700" fill="#3730a3">第三步 · 捆绑组合</text>
              <text x={529} y={80} textAnchor="middle" fontSize={12} fill="#4338ca">指代 · 关联词 · 句式</text>
              <line x1={16} y1={112} x2={624} y2={112} stroke="#e2e8f0" strokeWidth={1.4}></line>
              <rect x={16} y={140} width={190} height={56} rx={9} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.6}></rect>
              <text x={111} y={162} textAnchor="middle" fontSize={13} fontWeight="700" fill="#92400e">首句候选</text>
              <text x={111} y={182} textAnchor="middle" fontSize={12} fill="#b45309">下定义 · 总起 · 引出话题</text>
              <text x={215} y={174} textAnchor="middle" fontSize={15} fill="#94a3b8">→</text>
              <rect x={225} y={140} width={190} height={56} rx={9} fill="#d1fae5" stroke="#10b981" strokeWidth={1.6}></rect>
              <text x={320} y={162} textAnchor="middle" fontSize={13} fontWeight="700" fill="#065f46">捆绑块（中段）</text>
              <text x={320} y={182} textAnchor="middle" fontSize={12} fill="#047857">这/其/该 · 因为所以 · 句式一致</text>
              <text x={424} y={174} textAnchor="middle" fontSize={15} fill="#94a3b8">→</text>
              <rect x={434} y={140} width={190} height={56} rx={9} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.6}></rect>
              <text x={529} y={162} textAnchor="middle" fontSize={13} fontWeight="700" fill="#92400e">尾句候选</text>
              <text x={529} y={182} textAnchor="middle" fontSize={12} fill="#b45309">因此 · 总之 · 总结对策</text>
              <text x={320} y={228} textAnchor="middle" fontSize={13} fontWeight="700" fill="#b45309">排除法优先：含指代词/关联词「半截」的句子绝不能做首句</text>
              <text x={320} y={252} textAnchor="middle" fontSize={12.5} fill="#475569">「因此、总之、可见」引导的句子通常做尾句；先排掉一片选项，再验证捆绑是否自洽</text>
            </svg>
            <figcaption>图：语句排序的三步骨架 + 「首句—捆绑块—尾句」的装配示意</figcaption>
          </figure>
          <Example>
            <div className="example-tag">例题1 · 语句排序 · 解题三步法 · 尾句判断</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>将以下四个句子重新排列：</p>
              <p>①因此，合理安排学习时间至关重要</p>
              <p>②研究表明，人的注意力存在明显的节律波动</p>
              <p>③在注意力低谷期强行学习，往往事倍功半</p>
              <p>④上午和傍晚通常是注意力相对集中的时段</p>
              <ul className="example-opts">
                <li>A. ②④③①</li>
                <li>B. ④②③①</li>
                <li>C. ②③④①</li>
                <li>D. ④③②①</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>第一步·定首尾：</strong>②是总起（研究表明注意力有节律），适合做首句，排除B、D。<strong>第二步·比顺序：</strong>④先正面说明“注意力集中的时段”，③再反面说明“低谷期强行学习”的后果，④在③前更顺。①由“因此”引导，是<strong>尾句</strong>。故选A。
            </div>
          </Example>
      
      
          <Card>
            <div className="card-title">第一步：整体把握</div>
            <p>套入五种行文结构（后对策/前对策/总分分总/并列大并列/二层结构），判断文段可能是什么结构。</p>
          </Card>
          <Example>
            <div className="example-tag">例题2 · 语句排序 · 第一步 · 套行文结构</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>将以下四个句子重新排列：</p>
              <p>①这些新技术的应用，为传统制造业转型升级提供了有力支撑</p>
              <p>②近年来，工业互联网、人工智能等新技术不断涌现</p>
              <p>③越来越多的企业开始将其融入生产流程</p>
              <p>④因此，推动制造业高质量发展，离不开技术的持续赋能</p>
              <ul className="example-opts">
                <li>A. ②③①④</li>
                <li>B. ④②③①</li>
                <li>C. ②①③④</li>
                <li>D. ④③②①</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 先<strong>整体把握</strong>：④以“因此”引导，是总结性<strong>尾句</strong>，排除B、D。<strong>指代捆绑：</strong>①的“这些新技术”指代②，③的“其”也指代②，故②在①③之前；且先说企业应用（③）再说作用（①）更顺。故选A。
            </div>
          </Example>
      
      
          <Card>
            <div className="card-title">第二步：判断首尾句</div>
            <table>
              <tr><th></th><th>特征</th><th>说明</th></tr>
              <tr>
                <td><strong>首句特征</strong></td>
                <td>"下定义"做首句（范围由大到小）</td>
                <td>如"XX是指……""XX是……"适合做首句</td>
              </tr>
              <tr>
                <td><strong>非首句特征</strong></td>
                <td>有指代词的不会是首句</td>
                <td>这、那、他、其、该、此等</td>
              </tr>
              <tr>
                <td><strong>尾句特征</strong></td>
                <td>总结、对策做尾句</td>
                <td>因此、所以、总之等引导</td>
              </tr>
            </table>
          </Card>
      <Example>
            <div className="example-tag">例题3 · 语句排序 · 首句判断+捆绑组合</div>
            <ExampleQuestion>
              <div className="source">【花生十三随堂笔记】</div>
              <p>将以下6个句子重新排列：</p>
              <p>①缺少书籍的滋养，我们的精神世界会是一片荒芜和狼藉</p>
              <p>②读书是门槛最低的高贵举动</p>
              <p>③我们的文化也会缺乏不断向前发展的动力</p>
              <p>④读书不仅仅是为了生存，更是为了充实我们的精神世界，提升我们的生命质量</p>
              <p>⑤我想，这是对读书意义的深刻体悟和精辟总结</p>
              <p>⑥我们的社会难以传承深邃的智慧、伟大的精神</p>
              <ul className="example-opts" style={{ marginTop: '8px' }}>
                <li>A. ①⑥③④②⑤</li>
                <li>B. ②④⑤①③⑥</li>
                <li>C. ②⑤④①⑥③</li>
                <li>D. ④⑤②①③⑥</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】C</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>第一步·捆绑：</strong>①③⑥是并列的论证句（都说缺少书籍的后果），其中只有③有"也"字，并列中"也"一般放最后，所以③在⑥之后→排除B、D。<strong>第二步·判断首句：</strong>①是反面论证，②是<strong>下定义</strong>（"读书是……"），下定义适合做首句。⑤"这是对读书意义的精辟总结"，"这"指代②更合适。所以②⑤在前→答案C。
            </div>
          </Example>
      
      
          <Card>
            <div className="card-title">第三步：捆绑组合</div>
            <p>通过以下线索找到必须捆绑在一起的"组合句"：</p>
            <ul className="check">
              <li><strong>转折词：</strong>根据转折关系寻找上句（如"但是"前必有与之相对的内容）</li>
              <li><strong>指代词：</strong>根据指示代词寻找上句（"这个""其""该"指代什么）</li>
              <li><strong>相同词语：</strong>上下句有相同的关键词，可能需要相邻</li>
              <li><strong>时间轴：</strong>按时间顺序排列</li>
              <li><strong>逻辑顺序：</strong>观点+解释说明、提出问题+解决问题、A和B</li>
            </ul>
            <div className="tip"><strong>注意：</strong>选结尾句时要对比其他选项，确定不纠结了再选择！</div>
          </Card>
      <Example>
            <div className="example-tag">例题4 · 语句排序 · 指代捆绑+逻辑顺序</div>
            <ExampleQuestion>
              <div className="source">【花生十三随堂笔记】</div>
              <p>关于航空母舰的6个句子排序（摘要）：</p>
              <p>④……航空母舰作为海上作战平台……</p>
              <p>②它不仅能够……还能……</p>
              <p>⑤因此，许多国家都在发展航母</p>
              <p>⑥众多大国的实例，都已充分证明了这一点</p>
              <p style={{ marginTop: '8px' }}>A. ④②⑤⑥①③　B. ⑤④②⑥①③　C. ⑤⑥④②①③　D. ④②⑥⑤①③</p>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>指代捆绑：</strong>②有"它"，"它"指代④末尾的"航空母舰"→④②必须相连，排除B、D。<strong>验证指代：</strong>⑥"证明了这一点"，C选项⑤⑥相连，但⑤中没有明确指代对象，"这一点"无处可指→C排除。A选项④②（介绍航母）→⑤（因此发展航母）→⑥（大国实例证明），逻辑通顺。
            </div>
          </Example>
      
      
          <h3 id="ex-sort">实战例题</h3>
      
      
          <Example>
            <div className="example-tag">例题1 · 综合演练 · 语句排序 · 首句+指代捆绑</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>将以下四个句子重新排列：</p>
              <p>①数字技术正在深刻改变博物馆的展陈方式</p>
              <p>②借助AR、VR等设备，静态的文物被赋予了动态的生命</p>
              <p>③这种“沉浸式”体验，让观众仿佛置身于历史现场</p>
              <p>④观众不再只是隔着玻璃观看，而是可以“走进”文物背后的故事</p>
              <ul className="example-opts">
                <li>A. ①②④③</li>
                <li>B. ①④②③</li>
                <li>C. ②①③④</li>
                <li>D. ①②③④</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>判断首句：</strong>①是对全段的总起（数字技术改变展陈方式），适合做首句，排除C。<strong>指代捆绑：</strong>③中的“这种‘沉浸式’体验”需要前文有具体依据，②④正是具体描述，③应在②④之后，排除D。再看②④，②先讲技术手段、④再讲观众感受的变化，顺序更自然。故选A。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题2 · 综合演练 · 语句排序 · 时间逻辑顺序</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>将以下五个句子重新排列：</p>
              <p>①19世纪末，电影传入中国</p>
              <p>②20世纪初，中国出现了第一家电影制片公司</p>
              <p>③此后，中国电影逐渐形成了自己的民族风格</p>
              <p>④近年来，中国电影在技术与叙事上不断取得新突破</p>
              <p>⑤可以说，中国电影的发展史，也是一部民族文化的探索史</p>
              <ul className="example-opts">
                <li>A. ①②③④⑤</li>
                <li>B. ②①③④⑤</li>
                <li>C. ①②④③⑤</li>
                <li>D. ⑤①②③④</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>时间轴：</strong>①“19世纪末”→②“20世纪初”→③“此后”→④“近年来”，时间线索清晰，排除B、C。⑤由“可以说”引导，是对全段的<strong>总结</strong>，应放在<strong>尾句</strong>，排除D。故选A。
            </div>
          </Example>
    </>
  )
}
