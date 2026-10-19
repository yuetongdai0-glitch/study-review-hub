import type { ReactElement } from 'react'
import { Card, Example, ExampleAnswer, ExampleQuestion } from '@/components/content'

/**
 * detail
 *
 * @returns 该节正文。
 */
export default function S8(): ReactElement {
  return (
    <>
      <h2><span className="icon">🔍</span> 细节判断</h2>
          <div className="highlight"><strong>核心：</strong>无普适性解题方法。只需<strong>断句</strong>，不需要分析结构。先看选项，再回文段做对比。</div>
      
          <Card>
            <div className="card-title">错误选项特征</div>
            <table>
              <tr><th>错误类型</th><th>说明</th></tr>
              <tr><td><span className="badge badge-red">偷换概念</span></td><td>替换、混搭概念</td></tr>
              <tr><td><span className="badge badge-red">偷换时态</span></td><td>将来时、完成时、进行时混淆</td></tr>
              <tr><td><span className="badge badge-red">偷换逻辑</span></td><td>强加因果、因果倒置</td></tr>
              <tr><td><span className="badge badge-red">无中生有</span></td><td>选项信息原文未提及</td></tr>
              <tr><td><span className="badge badge-red">绝对化</span></td><td>选项表述过于绝对</td></tr>
              <tr><td><span className="badge badge-red">杂糅</span></td><td>拼凑原文信息</td></tr>
              <tr><td><span className="badge badge-red">本身有误</span></td><td>不符合实际</td></tr>
            </table>
          </Card>
      <Example>
            <div className="example-tag">例题1 · 细节判断 · 偷换概念</div>
            <ExampleQuestion>
              <div className="source">【花生十三随堂笔记】</div>
              <p>文段大意：酒精可以酿酒。可食用酒精和工业酒精在酿造工艺上有区别……</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>下列说法与文段意思相符的是：</p>
              <ul className="example-opts">
                <li>A. 酒精可以酿酒</li>
                <li>B. 可食用酒精和工业酒精都可以酿酒</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 典型的<strong>偷换概念</strong>。原文说"酒精可以酿酒"，B选项把"酒精"偷换为"可食用酒精和工业酒精"——原文并未说工业酒精可以酿酒，B扩大了范围。细节判断题要一一比对，发现概念被替换即排除。
            </div>
          </Example>
      
      <Example>
            <div className="example-tag">例题2 · 细节判断 · 偷换时态</div>
            <ExampleQuestion>
              <div className="source">【花生十三随堂笔记】</div>
              <p>文段大意：目前人脸识别技术已广泛应用于安防领域，未来还将在医疗、教育等领域拓展应用……</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>下列说法与文段意思不相符的是：</p>
              <ul className="example-opts">
                <li>A. 人脸识别技术目前在安防领域已有应用</li>
                <li>B. 人脸识别技术已在医疗和教育领域广泛应用</li>
                <li>C. 人脸识别技术的应用范围将不断扩大</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 典型的<strong>偷换时态</strong>。原文说"未来还将在医疗、教育领域拓展"——是<strong>将来时</strong>。B选项"已在医疗和教育领域广泛应用"——变成了<strong>完成时</strong>。时态偷换是细节判断题的高频考点，要注意"将""已""正在"等时态标志词。
            </div>
          </Example>
      
      
          <Card>
            <div className="card-title">难题处理</div>
            <div className="tip">
              正确率低的细节判断题，选项往往存在瑕疵。此时需<strong>抓住致命问题</strong>，而忽略其他（对比择优）。正确选项多少会有点瑕疵，不会太完美。
            </div>
          </Card>
          <Example>
            <div className="example-tag">例题3 · 细节判断 · 难题处理 · 对比择优</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>研究人员对2000名成年人进行了为期三年的跟踪调查，发现每晚睡眠时间在7小时左右的人，认知能力测试得分最高；睡眠不足6小时或超过9小时的人，得分明显偏低。研究者提醒，这一结论并不意味着睡眠时间越长越好。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>根据这段文字，下列说法正确的是：</p>
              <ul className="example-opts">
                <li>A. 睡眠时间越长，认知能力越强</li>
                <li>B. 睡眠7小时左右的人认知测试得分最高</li>
                <li>C. 睡眠不足6小时的人一定会出现认知障碍</li>
                <li>D. 这一研究结论适用于所有年龄段人群</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> A与文段“并不意味着睡眠时间越长越好”<strong>直接矛盾</strong>；C“一定”“认知障碍”既<strong>绝对化</strong>又<strong>偷换概念</strong>（原文只说得分偏低）；D“所有年龄段”<strong>无中生有</strong>，研究对象是2000名成年人。B与原文第一句完全一致。选项有瑕疵时抓住<strong>致命问题</strong>，B最稳妥。
            </div>
          </Example>
      
      
          <h3 id="ex-detail">实战例题</h3>
      
      
          <Example>
            <div className="example-tag">例题1 · 综合演练 · 细节判断 · 无中生有</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>竹子是生长最快的植物之一，某些品种在生长旺季一天可以长高将近一米。竹子的这种特性与其特殊的维管束结构有关，使其能够在短时间内输送大量水分和养分。不过，竹子的开花周期很长，有的品种甚至几十年才开一次花。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>根据这段文字，下列表述正确的是：</p>
              <ul className="example-opts">
                <li>A. 竹子是所有植物中生长最快的</li>
                <li>B. 竹子的生长速度与其维管束结构有关</li>
                <li>C. 竹子开花之后很快就会枯死</li>
                <li>D. 竹子的水分主要储存在叶片中</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> A把“<strong>生长最快的植物之一</strong>”偷换成“所有植物中最快”，<strong>绝对化</strong>；C文段只说开花周期长，并未提开花后枯死，<strong>无中生有</strong>；D也<strong>无中生有</strong>，原文说的是输送水分和养分，不是储存于叶片。B与原文第二句一致。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题2 · 综合演练 · 细节判断 · 偷换逻辑</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>调查显示，经常参加体育锻炼的青少年，学习成绩普遍优于不锻炼的同龄人。研究者认为，体育锻炼能够促进大脑分泌多巴胺，改善注意力和记忆力，从而提高学习效率。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>根据这段文字，下列表述正确的是：</p>
              <ul className="example-opts">
                <li>A. 学习成绩好都是因为参加了体育锻炼</li>
                <li>B. 体育锻炼有助于提高学习效率</li>
                <li>C. 不锻炼的青少年成绩一定很差</li>
                <li>D. 多巴胺直接决定了学习成绩的高低</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> A<strong>强加因果</strong>，“普遍优于”只是统计上的相关，不等于“都因为”；C“一定很差”<strong>绝对化</strong>；D“直接决定”绝对化且<strong>强加因果</strong>。B是对研究者观点的准确概括（促进多巴胺分泌→改善注意力记忆力→提高学习效率）。
            </div>
          </Example>
    </>
  )
}
