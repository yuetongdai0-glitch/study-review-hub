import type { ReactElement } from 'react'
import { Card, Example, ExampleAnswer, ExampleQuestion } from '@/components/content'

/**
 * fill-in
 *
 * @returns 该节正文。
 */
export default function S6(): ReactElement {
  return (
    <>
      <h2><span className="icon">📝</span> 语句填入</h2>
          <div className="highlight"><strong>核心：</strong>既要关注细节，更要宏观把握。填入语句应为全文服务，承担该起到的作用。</div>
      
          <Card>
            <div className="card-title">按位置判断作用</div>
            <table>
              <tr><th>位置</th><th>作用</th><th>解题重点</th></tr>
              <tr>
                <td><strong>在开头</strong></td>
                <td>总起 / 概括 / 引出话题（含主题词）/ 转折引出观点或对策</td>
                <td>后文是什么 → 前文应与之衔接</td>
              </tr>
              <tr>
                <td><strong>在中间</strong></td>
                <td>承上启下 / 前对策（后文为论证）/ 提出问题（尾句为对策）</td>
                <td>前后句关系正确，语法结构正确</td>
              </tr>
              <tr>
                <td><strong>在结尾</strong></td>
                <td>总结 / 概括 / 对策句</td>
                <td>概括被总结部分，和首句呼应</td>
              </tr>
            </table>
          </Card>
          <figure className="fig">
            <svg viewBox="0 0 640 272" role="img" aria-label="填入句在开头、中间、结尾分别承担的作用">
              <text x={320} y={24} textAnchor="middle" fontSize={14} fontWeight="700" fill="#1e293b">填入句的作用由「它站在哪个位置」决定</text>
              <text x={115} y={56} textAnchor="middle" fontSize={14} fontWeight="700" fill="#92400e">填在开头</text>
              <text x={320} y={56} textAnchor="middle" fontSize={14} fontWeight="700" fill="#92400e">填在中间</text>
              <text x={525} y={56} textAnchor="middle" fontSize={14} fontWeight="700" fill="#92400e">填在结尾</text>
              <rect x={30} y={74} width={170} height={18} rx={5} fill="#fde68a" stroke="#f59e0b" strokeWidth={1.2}></rect>
              <rect x={235} y={74} width={170} height={18} rx={5} fill="#e2e8f0"></rect>
              <rect x={440} y={74} width={170} height={18} rx={5} fill="#e2e8f0"></rect>
              <rect x={30} y={98} width={170} height={18} rx={5} fill="#e2e8f0"></rect>
              <rect x={235} y={98} width={170} height={18} rx={5} fill="#fde68a" stroke="#f59e0b" strokeWidth={1.2}></rect>
              <rect x={440} y={98} width={170} height={18} rx={5} fill="#e2e8f0"></rect>
              <rect x={30} y={122} width={170} height={18} rx={5} fill="#e2e8f0"></rect>
              <rect x={235} y={122} width={170} height={18} rx={5} fill="#e2e8f0"></rect>
              <rect x={440} y={122} width={170} height={18} rx={5} fill="#e2e8f0"></rect>
              <rect x={30} y={146} width={170} height={18} rx={5} fill="#e2e8f0"></rect>
              <rect x={235} y={146} width={170} height={18} rx={5} fill="#e2e8f0"></rect>
              <rect x={440} y={146} width={170} height={18} rx={5} fill="#fde68a" stroke="#f59e0b" strokeWidth={1.2}></rect>
              <text x={115} y={186} textAnchor="middle" fontSize={12.5} fill="#334155">总起 · 概括 · 引出话题</text>
              <text x={115} y={205} textAnchor="middle" fontSize={12.5} fill="#334155">（含主题词）</text>
              <text x={320} y={186} textAnchor="middle" fontSize={12.5} fill="#334155">承上启下</text>
              <text x={320} y={205} textAnchor="middle" fontSize={12.5} fill="#334155">前后句逻辑/语法要通</text>
              <text x={525} y={186} textAnchor="middle" fontSize={12.5} fill="#334155">总结 · 概括 · 对策句</text>
              <text x={525} y={205} textAnchor="middle" fontSize={12.5} fill="#334155">与首句呼应</text>
              <text x={320} y={240} textAnchor="middle" fontSize={13} fontWeight="700" fill="#b45309">宏观：空缺在哪 → 前文/后文讲了什么</text>
              <text x={320} y={262} textAnchor="middle" fontSize={13} fontWeight="700" fill="#b45309">微观：语法结构 · 关联词搭配 · 主语一致 · 代词指代</text>
            </svg>
            <figcaption>图：黄色条 = 空缺句的位置；同一句话放在开头、中间、结尾，承担的作用完全不同</figcaption>
          </figure>
      <Example>
            <div className="example-tag">例题1 · 语句填入 · 填在开头（总起句）</div>
            <ExampleQuestion>
              <div className="source">【2023国考 · 花生十三随堂笔记】</div>
              <p>______。我们要结合我国发展需要和可能，做好我国数字经济发展顶层设计和体制机制建设。要加强形势研判，抓住机遇，赢得主动。各级领导干部要提高数字经济思维能力和专业素质……要提高全民全社会数字素养和技能，夯实我国数字经济发展社会基础。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>填入文中画横线部分最恰当的一项是：</p>
              <ul className="example-opts">
                <li>A. 数字经济事关国家发展大局</li>
                <li>B. 要把发展数字经济自主权牢牢掌握在自己手中</li>
                <li>C. 数字经济影响程度之深前所未有</li>
                <li>D. 数字经济有利于推动各级资源要素快速流动</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 填入句在段首，后文是<strong>具体做法</strong>（前对策结构）。首句应是<strong>总起/引出话题</strong>，包含主题词"数字经济"。A"事关国家发展大局"是意义/重要性表述，后文讲怎么做，衔接得当。B是对策句，侧重点在"自主权"，后文应讲怎么掌握主动权，不匹配；C侧重"影响"，后文该讲怎么影响；D侧重"资源流动"，后文该讲怎么让资源流动——均与后文不衔接。
            </div>
          </Example>
      
      <Example>
            <div className="example-tag">例题2 · 语句填入 · 填在结尾（总结句）</div>
            <ExampleQuestion>
              <div className="source">【2020江苏 · 花生十三随堂笔记】</div>
              <p>群体免疫力是一种保护整个社区免受疾病侵害的手段……但是，这个模式要真正起作用，社区中接种疫苗的人必须足够多。接种疫苗的人数必须高于一个最小的百分值（学术界称之为"阈值"），群体免疫才会生效。<strong>接种的社区成员越多，______。</strong></p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>填入文中画横线部分最恰当的一项是：</p>
              <ul className="example-opts">
                <li>A. 整个社区就越能够避免疾病的爆发</li>
                <li>B. 才能有效阻断疾病源感染整个社区</li>
                <li>C. 越能保护少数拒绝接种疫苗的人群</li>
                <li>D. 整个社区的免疫模式才能发生作用</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>逻辑关联词：</strong>"越来……越……"表正相关。前文"接种的社区成员越多"，后面必须是"越……"。A"越能够避免"搭配正确。B"越……才能"不搭配（越和才矛盾）；D同样"越……才能"不搭配。C"保护少数拒绝接种的人群"——文段主体是<strong>保护整个社区</strong>，不是保护少数人，主体不一致。
            </div>
          </Example>
      
      
          <Card>
            <div className="card-title">微观盯细节</div>
            <ul className="check">
              <li><strong>语法结构正确：</strong>主谓宾搭配得当</li>
              <li><strong>逻辑关联词运用得当：</strong>如果…那么、越来越…越、只有…才、只要…就、除非…否则</li>
              <li><strong>全文主语一致：</strong>填入语句的主语要与文段一致</li>
              <li><strong>后文指示代词指代正确：</strong>确保代词有明确指代对象</li>
              <li>两个选项都可以时，考虑<strong>句式一致</strong></li>
              <li>前句、后句未找到提示时，要关注<strong>首句</strong></li>
            </ul>
          </Card>
      <Example>
            <div className="example-tag">例题3 · 语句填入 · 填在中间（承上启下）</div>
            <ExampleQuestion>
              <div className="source">【2022国考 · 花生十三随堂笔记】</div>
              <p>依托数字文化资源进行新文旅业态和产品的开发，是文物古迹焕发新活力、增强吸引力的重要手段。但科技应用应有边界，即______。一旦两者有冲突，理应遵循<strong>保护优先原则</strong>。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>填入文中画横线部分最恰当的一项是：</p>
              <ul className="example-opts">
                <li>A. 需坚持适度开发和可持续性发展策略</li>
                <li>B. 要把握好真实性和娱乐性之间的尺度</li>
                <li>C. 不能过度强调沉浸式体验而忽略文化内涵</li>
                <li>D. 不能对资源本身及其价值造成破坏或产生不良影响</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】D</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> "即"后面是解释"科技应用应有边界"。后文说"一旦两者有冲突，遵循保护优先"——"两者"指<strong>开发和保护</strong>。D"不能对资源本身造成破坏"正是"保护"的含义，与后文"保护优先"呼应。A"适度开发"在转折前已说完；B"娱乐性"无中生有；C"文化内涵"与后文"保护优先"不匹配。
            </div>
          </Example>
      
      
          <h3 id="ex-fill-in">实战例题</h3>
      
      
      
          <Example>
            <div className="example-tag">例题1 · 综合演练 · 语句填入 · 中间承上启下</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>地图不仅是地理信息的载体，也是一种文化符号。______。一张老地图上，街道的名称、建筑的布局，往往记录着一座城市的变迁，承载着几代人的集体记忆。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>填入文中画横线部分最恰当的一项是：</p>
              <ul className="example-opts">
                <li>A. 它见证了一座城市的发展历程</li>
                <li>B. 现代地图的功能则发生了转变</li>
                <li>C. 古代地图的绘制技术十分落后</li>
                <li>D. 人们对地图的依赖程度不断加深</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 填入句在<strong>中间</strong>，要<strong>承上启下</strong>。上文说地图是“文化符号”，下文说老地图记录城市变迁、承载集体记忆，A“见证城市发展历程”正好承接两者。B把话题转向“现代地图”，与下文“老地图”不一致；C无中生有；D与下文没有逻辑关联。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题2 · 综合演练 · 语句填入 · 开头总起</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>______。从敦煌莫高窟的飞天壁画，到景德镇瓷器上的青花纹样，再到江南园林的漏窗景致，这些传统元素被不断提取、重组，融入现代生活用品的设计之中。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>填入文中画横线部分最恰当的一项是：</p>
              <ul className="example-opts">
                <li>A. 传统文化正以新的形式走进现代生活</li>
                <li>B. 中国传统艺术与西方艺术存在显著差异</li>
                <li>C. 文化遗产保护需要法律的有力保障</li>
                <li>D. 古代工匠的精湛技艺如今已经失传</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 填入句在<strong>段首</strong>，后文列举的是传统元素融入现代设计的例子，首句应<strong>总起</strong>，包含“传统文化+现代生活”这一主题词，A与之完全契合。B话题不符；C“法律保障”下文未提；D与后文“融入现代设计”直接矛盾。
            </div>
          </Example>
    </>
  )
}
