import type { ReactElement } from 'react'
import { Card, Example, ExampleAnswer, ExampleQuestion } from '@/components/content'

/**
 * overview
 *
 * @returns 该节正文。
 */
export default function S1(): ReactElement {
  return (
    <>
      <h2><span className="icon">📋</span> 整体概述</h2>
      
          <Card>
            <div className="card-title">做题顺序</div>
            <div className="flow">
              <span className="flow-step">先读问题</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step">再读文段</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step">分析选项</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-light)', marginTop: '8px' }}>先读问题分辨题型和文段可能类型 → 再读文段分析结构和预想答案 → 分析选项利用选项提升做题速度与准确度</p>
          </Card>
          <Example>
            <div className="example-tag">例题1 · 综合演练 · 做题顺序 · 先看问题定题型</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>城市公园是市民休闲的重要场所。近年来，许多城市在公园建设中大量铺设草坪，却忽视了遮阴乔木的种植。夏季高温时段，缺少树木遮阴的公园几乎无人问津。可见，公园建设不能只追求视觉上的开阔，还要考虑市民的实际使用体验。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 城市公园是市民休闲的重要场所</li>
                <li>B. 公园建设应兼顾视觉美观与使用体验</li>
                <li>C. 夏季高温时段城市公园游人稀少</li>
                <li>D. 城市公园应大量种植遮阴乔木</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>先读问题：</strong>“意在强调”→说理类，重点找观点或对策。<strong>再读文段：</strong>先陈述现象（多铺草坪、少种乔木），再用“可见”引出观点。<strong>分析选项：</strong>A只是背景；C是支撑观点的论据（例子），出处有误；D只针对“遮阴乔木”一点，片面。B与“不能只追求开阔，还要考虑使用体验”对应。
            </div>
          </Example>
      
      
          <Card>
            <div className="card-title">阅读文段方法</div>
            <p>在<strong>句号处划斜线</strong>，再分层，<strong>宏观把握结构</strong>，不能"只见树木不见森林"。</p>
          </Card>
          <Example>
            <div className="example-tag">例题2 · 综合演练 · 阅读文段方法 · 句号划斜线分层</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>在句号处划斜线有助于分层，请体会下面文段的结构：“①人工智能的训练需要海量数据。②数据的数量固然重要，质量同样不可忽视。③低质量的数据会让模型学到错误的规律。④因此，构建人工智能模型，必须建立严格的数据清洗机制。”</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 人工智能的训练需要海量数据</li>
                <li>B. 数据质量对人工智能模型同样重要</li>
                <li>C. 构建人工智能模型必须建立数据清洗机制</li>
                <li>D. 低质量的数据会影响模型判断</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】C</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 在<strong>句号处划斜线</strong>：①②③是分析论证（数据量→质量→低质量的后果），④用“因此”<strong>总结</strong>。分层之后，重点落在“因此”之后的对策上，C与之对应。A、B、D都出自“因此”之前，属于出处有误或片面。
            </div>
          </Example>
      
      
          <Card>
            <div className="card-title">三大解题方法</div>
            <table>
              <tr><th>方法</th><th>说明</th></tr>
              <tr><td><strong>结构分析</strong></td><td>套入五种文段结构，找文段主旨或重点</td></tr>
              <tr><td><strong>选项分析</strong></td><td>264111，根据选项提示辅助做题</td></tr>
              <tr><td><strong>抓关键信息</strong></td><td>秒杀或避免出现低级失误</td></tr>
            </table>
          </Card>
          <Example>
            <div className="example-tag">例题3 · 综合演练 · 三大解题方法 · 结构分析+选项分析</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>“共享办公空间”曾被视为办公方式的革新。它通过整合资源，降低了初创企业的办公成本。然而，随着入驻企业增多，噪音、隐私等问题日益突出，一些团队开始重新选择独立办公。可见，共享办公要想持续发展，就必须在开放与私密之间找到平衡。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在说明：</p>
              <ul className="example-opts">
                <li>A. 共享办公空间降低了企业的办公成本</li>
                <li>B. 共享办公需要平衡开放与私密</li>
                <li>C. 独立办公重新受到了团队青睐</li>
                <li>D. 共享办公空间的经营面临倒闭风险</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>结构分析：</strong>“然而”转折引出问题，“可见”后给出观点，套入“后对策”结构，重点在最后一句。<strong>选项分析：</strong>A出自转折之前，出处有误；C是问题带来的现象，非重点；D“面临倒闭风险”无中生有。B与“必须找到平衡”对应。
            </div>
          </Example>
      
      
          <Card>
            <div className="card-title">三大做题原则</div>
            <ul className="check">
              <li>抓住关键信息或确定文段类型，选项干扰力度不强，则<strong>直接确定答案</strong></li>
              <li>套入常见结构，找到文段主旨或重点，<strong>锁定正确选项</strong></li>
              <li>二选一纠结时，利用选项分析，排除错误选项，让正确选项<strong>"跳出来"</strong></li>
            </ul>
          </Card>
          <Example>
            <div className="example-tag">例题4 · 综合演练 · 方法示范 · 先读问题再读文段</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>传统村落是农耕文明的重要载体，承载着丰富的历史信息和文化景观。然而，随着城镇化进程加快，大量传统村落面临空心化、无人居住的困境。保护传统村落，既要改善基础设施留住村民，也要发展特色产业，让村落具备持续自我发展的能力。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字意在强调：</p>
              <ul className="example-opts">
                <li>A. 传统村落承载着丰富的历史信息</li>
                <li>B. 城镇化使传统村落走向衰败</li>
                <li>C. 保护传统村落需留人兴业以增强内生动力</li>
                <li>D. 应加大对传统村落的资金投入</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】C</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>先读问题：</strong>“意在强调”→说理类，有对策就选对策。<strong>再读文段：</strong>“然而”引出问题，后文用“既要……也要……”给出对策。<strong>分析选项：</strong>A是背景铺垫，出自转折之前；B只讲问题；D“资金投入”无中生有。C把“留住村民+发展产业+自我发展能力”概括为“留人兴业、增强内生动力”，与文段对策吻合。
            </div>
          </Example>
    </>
  )
}
