import type { ReactElement } from 'react'
import { Card, Example, ExampleAnswer, ExampleQuestion } from '@/components/content'

/**
 * title
 *
 * @returns 该节正文。
 */
export default function S4(): ReactElement {
  return (
    <>
      <h2><span className="icon">📰</span> 标题拟定</h2>
          <div className="highlight"><strong>核心：</strong>主旨"标题化"——标题是主旨的精炼表达。</div>
      
          <Card>
            <div className="card-title">正确选项特征</div>
            <ul className="check">
              <li>标题中需包含<strong>关键词</strong>（少见情况可做适当同义替换）</li>
              <li><strong>主语正确</strong>（与文段主体一致）</li>
              <li>体现作者<strong>观点或对策</strong></li>
              <li>标题要有<strong>可读性、趣味性</strong>；对策类标题要有力量</li>
              <li>特别关注<strong>带"双引号"</strong>的选项，正确概率很高</li>
            </ul>
          </Card>
      <Example>
            <div className="example-tag">例题1 · 标题拟定 · 双引号选项</div>
            <ExampleQuestion>
              <div className="source">【2023辽宁省考 · 花生十三随堂笔记】</div>
              <p>近年来，踏足荒野、悠然自得的露营生活受到追捧……其中露营过程中的一些不文明现象，也引发了大家的关注，一些资深的户外爱好者呼吁，要文明出游，露营结束后应把垃圾带走，做到<strong>"无痕露营"</strong>。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>最适合作这段文字标题的是：</p>
              <ul className="example-opts">
                <li>A. 游客出游请带上文明的行囊</li>
                <li>B. 莫给自然环境再添"负担"</li>
                <li>C. 践行"无痕露营"，做环保达人</li>
                <li>D. "无痕露营"，当成文明出游标配</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】D</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段结构：引出话题→提出问题→后对策。好的标题=问题+对策。D选项"无痕露营"是对策关键词，带双引号（正确概率高），"当成文明出游标配"有力量感。A、B没体现"露营"主题词；C"环保达人"文段没体现，无中生有。
            </div>
          </Example>
      
      
          <Card>
            <div className="card-title">注意事项</div>
            <ul>
              <li>有些文段是"标题党"——开头引出问题吸引你，最后缩小范围提出相关对策</li>
              <li>有并列结构的文段，标题要概括全面</li>
              <li>读题要看整体，不能只盯某一段</li>
            </ul>
          </Card>
      <Example>
            <div className="example-tag">例题2 · 标题拟定 · 并列结构概括</div>
            <ExampleQuestion>
              <div className="source">【2022国考 · 花生十三随堂笔记】</div>
              <p>对于生活在浅海的硬骨鱼类来说，鱼鳔非常重要……但是对于深海鱼来说，充满气的鱼鳔像是脆弱的气球……很多深海鱼"舍弃"了鱼鳔（分1）。相比于浅海中的鱼，深海鱼的骨骼和肌肉含量都比较少，脂质和胶质相对较多（分2）。此外，深海鱼骨骼中软骨的比例也远高于浅海鱼（分3）。对于深海鱼来说，这些都是为了适应深海生活所作出的必要的"妥协"（总）。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>最适合做这段文字标题的是：</p>
              <ul className="example-opts">
                <li>A. 深海鱼竟是"软骨头"</li>
                <li>B. 抗压，从鱼鳔的"断舍离"开始</li>
                <li>C. 精通以柔克刚的深海鱼</li>
                <li>D. 深海压力，无法承受之痛</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段是分总结构，分1讲舍弃鱼鳔，分2讲骨骼肌肉少，分3讲软骨多，总结是"适应深海生活的妥协"。A只对应分3（片面）；C"以柔克刚"无中生有；D只说问题没说对策。B"鱼鳔的断舍离"双引号选项，对应分1的核心内容，有可读性和趣味性，概括了深海鱼适应压力的关键做法。
            </div>
          </Example>
      
      
          <h3 id="ex-title">实战例题</h3>
      
      
          <Example>
            <div className="example-tag">例题1 · 综合演练 · 标题拟定 · 对策类标题</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>近年来，随着城市养宠人数增加，宠物遗弃、流浪动物伤人等事件日益凸显，引发社会关注。有专家指出，治理流浪动物问题，不能只靠爱心救助，更需要从源头规范养宠行为，完善登记、免疫、绝育等制度。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>最适合做这段文字标题的是：</p>
              <ul className="example-opts">
                <li>A. 流浪动物之痛何时了</li>
                <li>B. 规范养宠，从源头治理流浪动物</li>
                <li>C. 爱心救助还能走多远</li>
                <li>D. 城市养宠人数持续增加</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 文段结构是“背景→问题→后对策”，好标题应当包含<strong>关键词+对策</strong>。B点明了“规范养宠”“从源头治理”这一对策，且包含“流浪动物”这一关键词，最有力量。A只提出问题、没有对策；C无中生有；D只是背景，不能概括主旨。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题2 · 综合演练 · 标题拟定 · 现象+对策</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>从共享单车到共享充电宝，共享经济在便利生活的同时，也带来了押金难退、过度投放等问题。业内人士认为，共享经济的健康发展，关键不在于“共享”这个概念本身，而在于建立与之匹配的信用体系和监管规则。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>最适合做这段文字标题的是：</p>
              <ul className="example-opts">
                <li>A. 共享经济遭遇成长的烦恼</li>
                <li>B. 共享经济亟需完善信用体系与监管规则</li>
                <li>C. 共享单车的前世今生</li>
                <li>D. 押金难退为何屡禁不止</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> “<strong>关键在于</strong>”引出对策，标题应体现这一对策。B包含了信用体系、监管规则这一核心对策，概括准确。A只讲问题；C主体过窄，把“共享经济”缩小成了“共享单车”；D只问不答，且只涉及“押金”一个方面。
            </div>
          </Example>
    </>
  )
}
