import type { ReactElement } from 'react'
import { Card, Example, ExampleAnswer, ExampleQuestion } from '@/components/content'

/**
 * logic-fill
 *
 * @returns 该节正文。
 */
export default function S3(): ReactElement {
  return (
    <>
      <h2><span className="icon">✏️</span> 逻辑填空</h2>
      
          <div className="highlight">
            <strong>核心原则：</strong>"技巧"为法，"词语积累"才是根本！做逻辑填空题，不建议看解析，要去<strong>查</strong>！这个词什么意思？怎么用？
          </div>
      
          <h3 id="lf-dims">四大解题维度</h3>
      
          <div className="framework-box" data-label="维度一">
            <div className="card-title">词义辨析</div>
            <table>
              <tr><th>辨析角度</th><th>说明</th></tr>
              <tr><td>固定用法</td><td>某些词语有固定的搭配习惯</td></tr>
              <tr><td>程度轻重</td><td>近义词之间的程度差异，需与文段语境匹配</td></tr>
              <tr><td>感情色彩</td><td>褒义/中性/贬义，要与文段感情色彩一致</td></tr>
              <tr><td>语法正确</td><td>主谓宾搭配得当，缺少主语、主动/被动、使用主体是否正确</td></tr>
              <tr><td>近义/反义</td><td>注意近义词的细微区别</td></tr>
              <tr><td>成语主体数量</td><td>一个主体还是两个主体</td></tr>
            </table>
          </div>
      <Example>
            <div className="example-tag">例题1 · 逻辑填空 · 词义辨析+语境</div>
            <ExampleQuestion>
              <div className="source">【2012国考真题 · 花生十三解析】</div>
              <p>怀特海说：科学研究的概率是999个想法会没有任何结果，可是，第1000个想法也许会改变世界。可见，好想法的产生不是______的。</p>
              <ul className="example-opts">
                <li>A. 随心所欲</li>
                <li>B. 轻而易举</li>
                <li>C. 一蹴而就</li>
                <li>D. 信手拈来</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】C</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>感情色彩排除：</strong>"随心所欲"带贬义，"信手拈来"多形容写作诗文时驾驭语言随意自如，AD排除。<strong>揣摩意图：</strong>前面说999个想法没有结果，说明好想法的产生前面必然有大量挫折和积累，不是一下子就能成功的。"一蹴而就"强调踏一步就成功，与语境最匹配。B"轻而易举"程度太轻，没有体现"经过漫长过程"的含义。
            </div>
          </Example>
      
      
          <div className="framework-box" data-label="维度二">
            <div className="card-title">词句对应（逻辑对应）</div>
            <ul>
              <li><strong>词语之间的逻辑对应：</strong>关联词提示（"甚至"表递进，顿号表并列）</li>
              <li><strong>词句之间的对应：</strong>填空处与前后的句子、成语形成逻辑关系</li>
              <li><strong>词与全文的对应：</strong>不要只在文章里找字面对应！一定是<strong>深刻的逻辑对应</strong>，而不是字面对应</li>
            </ul>
          </div>
      <Example>
            <div className="example-tag">例题2 · 逻辑填空 · 程度轻重+递进关系</div>
            <ExampleQuestion>
              <div className="source">【2012国考真题 · 花生十三解析】</div>
              <p>持之以恒的精神固然可贵，但如果我们所坚持，所固守的是______甚至错误的，那坚持到底的结果只能是一错再错。人生允许______，敢于放弃不切实际的理想，也是一种生存智慧。</p>
              <ul className="example-opts">
                <li>A. 消极 无功而返</li>
                <li>B. 盲目 知错就改</li>
                <li>C. 反面 偃旗息鼓</li>
                <li>D. 偏颇 改弦易辙</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】D</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>从第二空入手：</strong>"敢于放弃不切实际的理想"是一种改变。"无功而返""偃旗息鼓"不合语境；"知错就改"语义过重（不切实际的理想不算错误）。"改弦易辙"比喻改变方向做法，最合适。<strong>验证第一空：</strong>"偏颇"语义弱于"错误"，"偏颇甚至错误"形成<strong>递进关系</strong>，"甚至"前后程度递进，D完美匹配。
            </div>
          </Example>
      
      
          <div className="framework-box" data-label="维度三">
            <div className="card-title">揣摩意图与对象特征</div>
            <ul>
              <li><strong>揣摩作者意图：</strong>想表达什么思想？如果是你会怎么写？</li>
              <li><strong>对象特征：</strong>作者描述的对象本身有什么属性与特征？选项要符合对象的本质属性</li>
              <li><strong>跳出文段，高度把握：</strong>不能仅凭语感做题，重在理解而非读得顺不顺</li>
              <li><strong>符合客观实际：</strong>选项填入要符合常识</li>
            </ul>
            <div className="tip"><strong>例：</strong>"中国文化是博大精深的"，不能说"推陈出新的"——因为"博大精深"表状态，"推陈出新"表动作。</div>
          </div>
      <Example>
            <div className="example-tag">例题3 · 逻辑填空 · 对象特征+固定搭配</div>
            <ExampleQuestion>
              <div className="source">【2012国考真题 · 花生十三解析】</div>
              <p>语言在代代相传的过程中会发生改变。在人口众多的族群中，语言倾向于保持______，原因很简单，因为有更多的人能记住上一辈说话的方式，然而在规模较小的族群中，语言有可能更快地发生变化，在世代交替中有些音素将会______。</p>
              <ul className="example-opts">
                <li>A. 稳定 流失</li>
                <li>B. 传统 异化</li>
                <li>C. 活力 消亡</li>
                <li>D. 原貌 式微</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>逻辑对应：</strong>前后对比——小族群"更快发生变化"，大族群则相反，即"不变化"→"稳定"。<strong>固定搭配：</strong>第二空"音素将会xx"，"流失"搭配最合适（音素流失是语言学常见表达）。"异化""式微"程度和语境不符，"消亡"太绝对。
            </div>
          </Example>
      
      
          <div className="framework-box" data-label="维度四">
            <div className="card-title">实用技巧</div>
            <ul>
              <li><strong>比喻一致：</strong>文段用比喻时，选项的喻体要与文段一致</li>
              <li><strong>政治觉悟：</strong>涉及领导、干部等文段，注意使用积极类词汇，不要口语化</li>
              <li><strong>成语提示：</strong>注意选词填空前后的成语提示、句子、对象、逻辑</li>
              <li><strong>语法结构：</strong>注意这句话表一个状态还是一个动作</li>
            </ul>
          </div>
          <Example>
            <div className="example-tag">例题4 · 逻辑填空 · 实用技巧 · 语境搭配</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>基础研究是整个科学体系的源头。它不像应用研究那样______，往往需要数十年甚至几代人的持续投入，才能结出硕果。因此，对基础研究的支持，不能______，而应当着眼长远。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>依次填入画横线部分最恰当的一项是：</p>
              <ul className="example-opts">
                <li>A. 立竿见影 急功近利</li>
                <li>B. 一蹴而就 立竿见影</li>
                <li>C. 事半功倍 急于求成</li>
                <li>D. 行之有效 一劳永逸</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>从容易的第二空入手：</strong>“不能……而应当着眼长远”，“着眼长远”的反面正是<strong>急功近利</strong>，贬义色彩与语境吻合。再看第一空，“不像应用研究那样……”讲的是<strong>见效快慢</strong>，“立竿见影”最贴切；“事半功倍”是褒义，与“不像……那样”矛盾；“一蹴而就”强调过程一次性完成，不如“立竿见影”对应“见效快”。
            </div>
          </Example>
      
      
          <h3 id="lf-skill">做题技巧总结</h3>
          <Card>
            <ul className="check">
              <li>多个空时，从<strong>容易看得出的空</strong>入手</li>
              <li>不能简单通过搭不搭配来排除选项，要联系全文</li>
              <li>两个意思相近的选项，往往考你怎么<strong>区别</strong>这两个词</li>
              <li>要看正确选项<strong>为什么对</strong>，不要看错误选项怎么错</li>
              <li>记词不单是记住意思，还要记住用词所符合的<strong>语境</strong></li>
              <li>做一道题不是选对了就行，不会的词<strong>一定要查</strong></li>
            </ul>
          </Card>
      
          <Example>
            <div className="example-tag">例题1 · 逻辑填空 · 做题技巧 · 从易空入手</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>珊瑚礁虽然只占海洋面积不到1%，却养育了全球约四分之一的海洋生物。然而，随着海水温度升高，珊瑚大规模白化，这片“海洋中的热带雨林”正面临______的危机。保护珊瑚礁，需要全球______。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>依次填入画横线部分最恰当的一项是：</p>
              <ul className="example-opts">
                <li>A. 前所未有 齐心协力</li>
                <li>B. 空前绝后 团结一心</li>
                <li>C. 无与伦比 众志成城</li>
                <li>D. 刻不容缓 同心同德</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> <strong>从第二空入手最快：</strong>“全球齐心协力”是最自然的搭配，其他三项与“全球”组合都显得生硬。再验证第一空，“空前绝后”多形容成就独一无二、带褒义，“无与伦比”也是褒义，都不能修饰“危机”；“刻不容缓”应修饰行动而非“危机”。“前所未有的危机”搭配得当。
            </div>
          </Example>
      
          <h3 id="lf-syn">常考近义词辨析（口诀速记）</h3>
          <Card>
            <table>
              <tr><th>口诀</th><th>词组</th><th>辨析</th></tr>
              <tr><td>主观要求用必须，客观需要用必需</td><td>必须 / 必需</td><td>主观要求 / 客观需要</td></tr>
              <tr><td>没有尽力用不力，无益不顺用不利</td><td>不利 / 不力</td><td>没有尽力 / 无益不顺</td></tr>
              <tr><td>不愿提及用不齿，不以为耻用不耻</td><td>不耻 / 不齿</td><td>不愿提及 / 不以为耻</td></tr>
              <tr><td>品行不好用不肖，不敬父母用不孝</td><td>不肖 / 不孝</td><td>品行不好 / 不敬父母</td></tr>
              <tr><td>考虑决定用裁决，法律判决用裁定</td><td>裁定 / 裁决</td><td>考虑决定 / 法律判决</td></tr>
              <tr><td>管理财产用财务，钱财物资用财物</td><td>财务 / 财物</td><td>管理财产 / 钱财物资</td></tr>
              <tr><td>调查案情用查访，公开访问用察访</td><td>查访 / 察访</td><td>调查案情 / 公开访问</td></tr>
              <tr><td>人事交往用处世，处理事务用处事</td><td>处世 / 处事</td><td>人事交往 / 处理事务</td></tr>
              <tr><td>独到见解用创见，创立建造用创建</td><td>创建 / 创见</td><td>独到见解 / 创立建造</td></tr>
              <tr><td>参加会议用出席，无发言权用列席</td><td>列席 / 出席</td><td>参加会议 / 无发言权</td></tr>
              <tr><td>一年到头用长年，经常终年用常年</td><td>长年 / 常年</td><td>一年到头 / 经常终年</td></tr>
              <tr><td>过时规章用陈规，行之已久用成规</td><td>成规 / 陈规</td><td>过时规章 / 行之已久</td></tr>
              <tr><td>恭敬送上用呈献，显露出来用呈现</td><td>呈献 / 呈现</td><td>恭敬送上 / 显露出来</td></tr>
              <tr><td>先后顺序用次序，不规则用秩序</td><td>次序 / 秩序</td><td>先后顺序 / 不规则</td></tr>
              <tr><td>四季叶绿用常青，生命旺盛用长青</td><td>长青 / 常青</td><td>生命旺盛 / 四季叶绿</td></tr>
            </table>
            <p style={{ fontSize: '13px', color: 'var(--text-light)', marginTop: '8px' }}>💡 更多近义词辨析建议平时积累，每天复盘，形成自己的词语库。</p>
          </Card>
      
          <Example>
            <div className="example-tag">例题1 · 逻辑填空 · 近义词辨析 · 必须与必需</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>做好基层工作，既要有“功成不必在我”的境界，也要有“功成必定有我”的担当。面对群众的急难愁盼，干部______第一时间回应；同时也要认识到，制度的健全是解决问题的______条件。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>依次填入画横线部分最恰当的一项是：</p>
              <ul className="example-opts">
                <li>A. 必须 必需</li>
                <li>B. 必需 必须</li>
                <li>C. 必要 必须</li>
                <li>D. 必需 必要</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】A</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 口诀是“<strong>主观要求用必须，客观需要用必需</strong>”。“干部第一时间回应”是主观上的要求，故第一空用“必须”；“制度的健全是……条件”是客观上的需要，故第二空用“必需”。只有A两项都符合，其余选项均混淆了二者。
            </div>
          </Example>
      
          <h3 id="ex-logic-fill">实战例题</h3>
      
      
      
          <Example>
            <div className="example-tag">例题1 · 综合演练 · 逻辑填空 · 语境+成语</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>考古工作是一项重要的文化事业。它需要研究者耐得住寂寞，在______的田野中寻找历史的蛛丝马迹。许多重大发现，往往不是______的结果，而是源于数十年如一日的坚守。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>依次填入画横线部分最恰当的一项是：</p>
              <ul className="example-opts">
                <li>A. 广袤 灵光一现</li>
                <li>B. 浩瀚 守株待兔</li>
                <li>C. 广阔 一蹴而就</li>
                <li>D. 浩大 投机取巧</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】C</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> 第一空修饰“田野”，“浩瀚”多形容水势、书海，“浩大”多形容工程，均不搭配，排除B、D。第二空与“数十年如一日的坚守”相对，“<strong>一蹴而就</strong>”表示一下子成功，最能形成对比；A的“灵光一现”指突然有了灵感，与“重大发现的结果”不构成直接对立。故选C。
            </div>
          </Example>
      
          <Example>
            <div className="example-tag">例题2 · 综合演练 · 逻辑填空 · 逻辑对应</div>
            <ExampleQuestion>
              <div className="source">【来源：花生十三技巧课】</div>
              <p>任何一项改革都不可能______，也不可能一劳永逸。改革越是向纵深推进，越会触及深层次的利益格局，遇到的阻力也就越______。唯有迎难而上，才能不断打开新局面。</p>
              <p style={{ marginTop: '8px', fontWeight: '600' }}>依次填入画横线部分最恰当的一项是：</p>
              <ul className="example-opts">
                <li>A. 顺风顺水 强大</li>
                <li>B. 一帆风顺 巨大</li>
                <li>C. 轻而易举 沉重</li>
                <li>D. 一蹴而就 微弱</li>
              </ul>
            </ExampleQuestion>
            <ExampleAnswer>
              <span className="ans-label">【答案】B</span>
            </ExampleAnswer>
            <div className="example-analysis">
              <span className="ana-label">【花生解析】</span> “不可能……也不可能一劳永逸”是常见搭配，第一空填“<strong>一帆风顺</strong>”最自然。第二空与“越……越……”的正相关逻辑对应，“阻力巨大”搭配得当；“阻力强大”动宾搭配生硬，“阻力微弱”与“越向纵深推进”逻辑相反。故选B。
            </div>
          </Example>
    </>
  )
}
