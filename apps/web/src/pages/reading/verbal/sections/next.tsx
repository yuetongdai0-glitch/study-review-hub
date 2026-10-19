import type { ReactElement } from 'react'
import { Card, Example, ExampleAnswer, ExampleQuestion } from '@/components/content'

/**
 * next
 *
 * @returns 该节正文。
 */
export default function S5(): ReactElement {
  return (
    <>
      <h2><span className="icon">⏭️</span> 下文推断</h2>
          <div className="highlight"><strong>核心：</strong>把上文和下文看作一个整体，套入常见行文结构。</div>
      
          <Card>
            <div className="card-title">三种尾句模式</div>
            <table>
              <tr><th>模式</th><th>尾句特征</th><th>下文内容</th></tr>
              <tr>
                <td>尾句有新内容</td>
                <td>文末提出新概念/新话题</td>
                <td>下文重点解释新内容（尾句起承上启下作用）</td>
              </tr>
              <tr>
                <td>尾句提出问题</td>
                <td>文末抛出问题</td>
                <td>下文分析问题（原因）→ 解决问题（若同时存在，先分析再解决）</td>
              </tr>
              <tr>
                <td>尾句给出宏观对策</td>
                <td>文末给出大的方向/原因/问题</td>
                <td>下文具体展开</td>
              </tr>
            </table>
          </Card>
          <figure className="fig">
            <svg viewBox="0 0 640 268" role="img" aria-label="下文推断的三种尾句模式及下文走向">
              <text x={320} y={24} textAnchor="middle" fontSize={14} fontWeight="700" fill="#1e293b">把「上文 + 下文」当成一个整体，套进行文结构</text>
              <rect x={16} y={48} width={176} height={44} rx={9} fill="#eef2ff" stroke="#a5b4fc" strokeWidth={1.4}></rect>
              <text x={104} y={68} textAnchor="middle" fontSize={12.5} fill="#3730a3">尾句出现</text>
              <text x={104} y={86} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#3730a3">新概念 / 新话题</text>
              <text x={216} y={75} textAnchor="middle" fontSize={15} fill="#94a3b8">→</text>
              <rect x={256} y={48} width={368} height={44} rx={9} fill="#d1fae5" stroke="#10b981" strokeWidth={1.4}></rect>
              <text x={440} y={75} textAnchor="middle" fontSize={13} fontWeight="700" fill="#065f46">下文重点解释这个新内容（承上启下）</text>
              <rect x={16} y={112} width={176} height={44} rx={9} fill="#eef2ff" stroke="#a5b4fc" strokeWidth={1.4}></rect>
              <text x={104} y={132} textAnchor="middle" fontSize={12.5} fill="#3730a3">尾句</text>
              <text x={104} y={150} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#3730a3">提出问题</text>
              <text x={216} y={139} textAnchor="middle" fontSize={15} fill="#94a3b8">→</text>
              <rect x={256} y={112} width={176} height={44} rx={9} fill="#d1fae5" stroke="#10b981" strokeWidth={1.4}></rect>
              <text x={344} y={139} textAnchor="middle" fontSize={13} fontWeight="700" fill="#065f46">① 分析原因</text>
              <text x={444} y={140} textAnchor="middle" fontSize={15} fill="#94a3b8">→</text>
              <rect x={464} y={112} width={160} height={44} rx={9} fill="#d1fae5" stroke="#10b981" strokeWidth={1.4}></rect>
              <text x={544} y={139} textAnchor="middle" fontSize={13} fontWeight="700" fill="#065f46">② 解决问题</text>
              <rect x={16} y={176} width={176} height={44} rx={9} fill="#eef2ff" stroke="#a5b4fc" strokeWidth={1.4}></rect>
              <text x={104} y={196} textAnchor="middle" fontSize={12.5} fill="#3730a3">尾句给出</text>
              <text x={104} y={214} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#3730a3">宏观对策 / 方向</text>
              <text x={216} y={203} textAnchor="middle" fontSize={15} fill="#94a3b8">→</text>
              <rect x={256} y={176} width={368} height={44} rx={9} fill="#d1fae5" stroke="#10b981" strokeWidth={1.4}></rect>
              <text x={440} y={203} textAnchor="middle" fontSize={13} fontWeight="700" fill="#065f46">下文具体展开（怎么做）</text>
              <text x={320} y={246} textAnchor="middle" fontSize={13} fontWeight="700" fill="#b45309">「分析原因」与「解决问题」同时出现 → 先分析、后解决，不能跳步</text>
              <text x={320} y={264} textAnchor="middle" fontSize={12.5} fill="#475569">切忌只盯尾句：有时要回看首句，甚至要理解整个文段</text>
            </svg>
            <figcaption>图：三种尾句模式各自「接下去该讲什么」，是下文推断题唯一的判断依据</figcaption>
          </figure>
      <Example>
            <div className="example-tag">例题1 · 下文推断 · 提出问题→分析原因</div>
            <ExampleQuestion>
              <div className="source">【花生十三随堂笔记】</div>
              <p>据统计数据显示，因心血管疾病死亡事件中约15.8%与天气寒冷相关，而仅有1.3%与天气炎热相关。心力衰竭、心肌梗死和脑卒中在寒冷季节的发病率和死亡率均高于温暖季节。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字接下来最有可能讲的是：</p>
              <ul className="example-opts">
                <li>A. 心血管疾病为何冬季高发</li>
                <li>B. 心血管疾病的症状有哪些</li>
                <li>C. 如何有效治疗心血管疾病</li>
                <li>D. 如何预防冬季心血管疾病</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段<strong>提出问题</strong>：冬季心血管疾病高发。套入行文逻辑：提出问题→分析问题（原因）→解决问题。下文应先<strong>分析原因</strong>（A），再谈解决（D）。B选项"症状"上文已说完（不会再谈）；C"治疗"跳跃太大，应先分析再解决；D"预防"是解决问题，顺序应在分析原因之后。
            </div>
          </Example>
      
      
          <Card>
            <div className="card-title">注意事项</div>
            <ul className="cross">
              <li>切忌只盯尾句！有时需看首句或理解整个文段</li>
              <li>上文已谈过的内容，下文一般不再介绍</li>
              <li>如果几个选项下文均可能谈论，注意<strong>顺序</strong>（先分析问题再解决）</li>
            </ul>
            <div className="tip">
              <strong>不易识别的三种二层结构：</strong>
              <ul>
                <li>现在与过去对比：过去不行 → 现在有了新突破</li>
                <li>总分：总+分1 → 下文是分2</li>
                <li>转折：本身很好 → 问题（欲抑先扬）</li>
              </ul>
            </div>
          </Card>
      <Example>
            <div className="example-tag">例题2 · 下文推断 · 尾句新内容</div>
            <ExampleQuestion>
              <div className="source">【2022四川省考 · 花生十三随堂笔记】</div>
              <p>我们在阅读时，大脑左右半球的分工不同：左脑先理解后记忆……右脑则会将语言变成图像……因此，语言对大脑会有更进一步的刺激，所以<strong>听书有时比阅读还多出了一道工序——声音的符号化</strong>。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字接下来最可能讲的是：</p>
              <ul className="example-opts">
                <li>A. 听书比阅读对大脑的要求更高</li>
                <li>B. 听书没有阅读容易集中注意力</li>
                <li>C. 听书和阅读都是对信息的处理</li>
                <li>D. 听书时大脑会将语言变成图像</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 尾句引出<strong>新内容</strong>："听书比阅读多一道工序——声音的符号化"。下文应重点解释这个新内容。A"对大脑要求更高"正是"多一道工序"的展开。B"无中生有"且违背常识；C、D说的是听书和阅读<strong>相同</strong>之处，但文段强调的是<strong>不同</strong>（多了一道工序），方向相反。
            </div>
          </Example>
      
      
          <h3 id="ex-next">实战例题</h3>
      
      
          <Example>
            <div className="example-tag">例题1 · 综合演练 · 下文推断 · 总+分1 → 下文分2</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>传统戏曲的传承，需要做好“传”与“承”两篇文章。所谓“传”，是指老艺术家把技艺原原本本地教给年轻人；而“承”，则是年轻一代在掌握技艺的基础上，结合时代审美进行创新。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字接下来最可能讲的是：</p>
              <ul className="example-opts">
                <li>A. 老艺术家如何系统地传授技艺</li>
                <li>B. 年轻人如何对传统戏曲进行创新</li>
                <li>C. 传统戏曲当前面临的发展困境</li>
                <li>D. 戏曲观众群体正在发生的变化</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段是“<strong>总+分1</strong>”结构：总说“传”与“承”两篇文章，接着只讲了“传”，因此下文应接着讲“承”，即B。A是已经讲完的内容，下文一般不再重复；C、D无中生有。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题2 · 综合演练 · 下文推断 · 尾句问题先分析</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>近年来，“轻食”成为许多年轻人的饮食新选择。所谓轻食，通常指低油、低糖、低盐、高纤维的食物。但营养专家提醒，市面上不少所谓“轻食”其实并不健康，有的甚至存在营养不均衡的问题。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>这段文字接下来最可能讲的是：</p>
              <ul className="example-opts">
                <li>A. 轻食为什么会被认为健康</li>
                <li>B. 这些不健康的“轻食”问题出在哪里</li>
                <li>C. 如何挑选适合自己的轻食</li>
                <li>D. 轻食行业的市场规模有多大</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 尾句用“但”<strong>抛出问题</strong>：“不少轻食并不健康”。按“提出问题→分析原因→解决问题”的顺序，下文应先<strong>分析原因</strong>，即B，之后才是C（解决）。A与尾句方向相反；D无中生有。
            </div>
          </Example>
    </>
  )
}
