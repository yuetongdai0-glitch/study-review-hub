import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 一、习近平新时代中国特色社会主义思想 · 总论
 *
 * @returns 该节正文。
 */
export default function S2(): ReactElement {
  return (
    <>
      <Callout variant="key">总论只有四件事：<b>核心要义是什么、为什么叫「两个结合」、科学体系由哪四块组成、中国式现代化怎么考</b>。这四件事几乎每年都出题，且全部考「关键词对不对」。</Callout>
      
            <Block>
              <BlockTitle>1. 核心要义与「新时代」</BlockTitle>
              <PointList>
                <li><b>核心要义：坚持和发展中国特色社会主义</b>（这是改革开放以来党全部理论和实践的鲜明主题）。</li>
                <li>1982 年<b>党的十二大</b>，邓小平提出「走自己的道路，建设有中国特色的社会主义」。</li>
                <li><b>党的十八大以来</b>开创了中国特色社会主义新时代；<b>党的十九大</b>作出「中国特色社会主义进入新时代」的重大政治论断。</li>
                <li>新时代内涵五句：夺取新胜利、决胜全面小康进而全面建设社会主义现代化强国、创造美好生活逐步实现共同富裕、实现民族复兴中国梦、为人类作出更大贡献。</li>
                <li><b>进入新时代的依据：我国社会主要矛盾的变化</b>；但<b>我国仍处于并将长期处于社会主义初级阶段的基本国情没有变，我国是世界最大发展中国家的国际地位没有变</b>。</li>
                <li>主要矛盾：<b>人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾</b>。</li>
                <li>「四个自信」中，<b>文化自信是更基础、更广泛、更深厚的自信</b>，是最基本、最深沉、最持久的力量。</li>
              </PointList>
              <Callout variant="warn"><b>三个高频偷换：</b>「十八大开创 / 十九大论断」不能互换；「主要矛盾变」不等于「基本国情变」；「最大国情」是<b>党的领导</b>，不是初级阶段。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题1 · 总论（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于习近平新时代中国特色社会主义思想，下列说法正确的有几项？<br />①核心要义是坚持和发展中国特色社会主义<br />②作出「中国特色社会主义进入新时代」重大政治论断的是党的十九大<br />③新时代我国社会主要矛盾和基本国情都发生了根本变化<br />④文化自信是更基础、更广泛、更深厚的自信</ExampleQuestion>
                <ExampleOptions>A.1 项　B.2 项　C.3 项　D.4 项</ExampleOptions>
                <ExampleAnswer><b>解析：</b>①对；②对（十八大「开创」、十九大「论断」）；③错，<b>基本国情与国际地位没有变</b>；④对。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 「两个结合」：最大法宝</BlockTitle>
              <PointList>
                <li>内容：把马克思主义基本原理<b>同中国具体实际相结合、同中华优秀传统文化相结合</b>。</li>
                <li>地位：<b>「两个结合」是我们取得成功的最大法宝</b>。</li>
                <li>「结合」是深刻的<b>化学反应</b>，造就了新的文化生命体（不是物理反应）。</li>
                <li>「第二个结合」是<b>新时代首次提出</b>的（第一个结合此前早已提出）。</li>
                <li>比喻：用<b>马克思主义之「矢」</b>去射<b>新时代中国之「的」</b>——方向不能倒。</li>
                <li><b>马克思主义是「魂脉」，中华优秀传统文化是「根脉」</b>，二者内在贯通、相互成就。</li>
              </PointList>
              <Callout variant="key"><b>记忆钩子：</b>魂脉＝马克思主义（魂是理论）、根脉＝传统文化（根在本土）。这两个词每年都有人写反。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题2 · 两个结合（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于「两个结合」，下列说法错误的是：</ExampleQuestion>
                <ExampleOptions>A.「两个结合」是我们取得成功的最大法宝<br />B.「结合」是深刻的化学反应，造就了新的文化生命体<br />C.马克思主义是根脉，中华优秀传统文化是魂脉<br />D.新时代首次提出把马克思主义基本原理同中华优秀传统文化相结合</ExampleOptions>
                <ExampleAnswer><b>解析：</b>C 把魂脉与根脉写反了：<b>马克思主义是魂脉，中华优秀传统文化是根脉</b>。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 科学体系：四个板块各管什么</BlockTitle>
              <DataTable>
                <tr><th>板块</th><th>定位（必背）</th></tr>
                <tr><td><b>十个明确</b></td><td>主体内容，集中体现主要观点和基本精神，发挥<b>统摄</b>作用</td></tr>
                <tr><td><b>十四个坚持</b></td><td>基本方略（实践要求层面）</td></tr>
                <tr><td><b>十三个方面成就</b></td><td>实践成果</td></tr>
                <tr><td><b>六个必须坚持</b></td><td><b>世界观、方法论</b>（人民至上、自信自立、守正创新、问题导向、系统观念、胸怀天下）</td></tr>
              </DataTable>
              <PointList>
                <li>「六个必须坚持」中，<b>守正创新</b>体现的是<b>问题导向</b>要求的变与不变？（易错点：守正创新对应「变与不变」，<b>问题导向</b>对应「回答时代之问」）</li>
                <li><b>系统观念</b>体现辩证唯物主义<b>普遍联系</b>的原理——这一条常考「对应是否正确」。</li>
                <li>「十个明确」中的硬结论：<b>中国特色社会主义最本质的特征是中国共产党领导</b>；<b>中国特色社会主义制度的最大优势是中国共产党领导</b>。</li>
                <li>总任务：<b>实现社会主义现代化和中华民族伟大复兴</b>（不是「全面建成小康社会」，那是阶段性目标）。</li>
                <li>布局不能颠倒：<b>总体布局是「五位一体」（经济、政治、文化、社会、生态文明建设）</b>；<b>战略布局是「四个全面」</b>——全面建设社会主义现代化国家、全面深化改革、全面依法治国、全面从严治党。</li>
                <li>「十四个坚持」速记：坚持党对一切工作的领导、坚持以人民为中心、坚持全面深化改革、坚持新发展理念、坚持人民当家作主、坚持全面依法治国、坚持社会主义核心价值体系、坚持在发展中保障和改善民生、坚持人与自然和谐共生、坚持总体国家安全观、坚持党对人民军队的绝对领导、坚持「一国两制」和推进祖国统一、坚持推动构建人类命运共同体、坚持全面从严治党。</li>
                <li>基本经济制度中，<b>市场在资源配置中起决定性作用，政府更好发挥作用</b>。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题3 · 科学体系（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于习近平新时代中国特色社会主义思想的科学体系，下列说法错误的是：</ExampleQuestion>
                <ExampleOptions>A.「十个明确」是主体内容，发挥统摄作用<br />B.「六个必须坚持」是这一思想的世界观、方法论<br />C.中国特色社会主义事业的总体布局是「四个全面」<br />D.坚持系统观念体现了普遍联系的原理</ExampleOptions>
                <ExampleAnswer><b>解析：</b>C 颠倒：<b>总体布局是「五位一体」，战略布局是「四个全面」</b>。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 中华民族伟大复兴的中国梦</BlockTitle>
              <PointList>
                <li>2012 年，习近平总书记在参观<b>《复兴之路》展览</b>时提出：实现中华民族伟大复兴，就是中华民族近代以来最伟大的梦想。</li>
                <li><b>中国梦的内涵本质：国家富强、民族振兴、人民幸福</b>（顺序固定）。</li>
                <li><b>实现途径：走中国道路、弘扬中国精神、凝聚中国力量</b>。<br />
                  <span className="sub-point">中国道路＝中国特色社会主义道路；中国精神＝以<b>爱国主义</b>为核心的民族精神 + 以<b>改革创新</b>为核心的时代精神；中国力量＝全国各族人民大团结的力量。</span></li>
                <li>中国共产党一经成立，就把<b>实现共产主义</b>作为党的最高理想和最终目标；实现中华民族伟大复兴是党百年奋斗的<b>主题</b>。</li>
                <li>「两个一百年」：建党一百年全面建成小康社会（已实现）；新中国成立一百年建成富强民主文明和谐美丽的社会主义现代化强国。</li>
              </PointList>
              <Callout variant="warn"><b>三个偷换：</b>民族精神的核心是<b>爱国主义</b>、时代精神的核心是<b>改革创新</b>（不能互换）；中国梦的本质是「国家富强、民族振兴、人民幸福」，不是「富强民主文明和谐」。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题4 · 中国梦（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于中华民族伟大复兴的中国梦，下列说法正确的有：<br />①本质是国家富强、民族振兴、人民幸福<br />②实现途径是走中国道路、弘扬中国精神、凝聚中国力量<br />③中国精神以改革创新为核心<br />④党的最高理想和最终目标是实现中华民族伟大复兴</ExampleQuestion>
                <ExampleOptions>A.①②③　B.①②④　C.②③④　D.①③④</ExampleOptions>
                <ExampleAnswer><b>解析：</b>③ 只说了时代精神的核心，中国精神还应包括以<b>爱国主义</b>为核心的民族精神，表述不完整；④ 错，党的最高理想和最终目标是<b>实现共产主义</b>。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>5. 中国式现代化（最高频）</BlockTitle>
              <PointList>
                <li><b>五个中国特色</b>：人口规模巨大、全体人民共同富裕、物质文明和精神文明相协调、人与自然和谐共生、走和平发展道路。</li>
                <li><b>本质要求（9 句）</b>：坚持中国共产党领导，坚持中国特色社会主义，实现高质量发展，发展全过程人民民主，丰富人民精神世界，实现全体人民共同富裕，促进人与自然和谐共生，推动构建人类命运共同体，创造人类文明新形态。</li>
                <li><b>五条重大原则</b>：坚持和加强党的全面领导、坚持中国特色社会主义道路、坚持以人民为中心的发展思想、坚持深化改革开放、坚持发扬斗争精神。</li>
                <li><b>两步走</b>：2020→2035 <b>基本实现社会主义现代化</b>；2035→本世纪中叶把我国<b>建成</b>富强民主文明和谐美丽社会主义现代化强国。</li>
                <li><b>党的领导直接关系中国式现代化的根本方向、前途命运、最终成败</b>——不是「高质量发展」。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题5 · 中国式现代化（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于中国式现代化，下列说法正确的有：<br />①是人口规模巨大的现代化<br />②是全体人民同等富裕的现代化<br />③本质要求包括促进人与自然和谐共生<br />④坚持发扬斗争精神是必须牢牢把握的重大原则</ExampleQuestion>
                <ExampleOptions>A.①②③　B.①③④　C.②③④　D.①②④</ExampleOptions>
                <ExampleAnswer><b>解析：</b>②错，应为<b>全体人民共同富裕</b>（共同富裕≠同等富裕、同步富裕）；①③④均正确。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>6. 2035 年总体目标（按二十大原文逐条背）</BlockTitle>
              <PointList>
                <li><b>经济</b>：人均国内生产总值迈上新的大台阶，达到<b>中等发达国家水平</b>；<b>建成现代化经济体系</b>，形成新发展格局；<b>基本实现新型工业化、信息化、城镇化、农业现代化</b>。</li>
                <li><b>科技</b>：实现<b>高水平科技自立自强</b>，进入<b>创新型国家前列</b>。</li>
                <li><b>六大强国 + 健康中国（用「建成」）</b>：<b>建成</b>教育强国、科技强国、人才强国、文化强国、体育强国、健康中国，国家文化软实力显著增强。</li>
                <li><b>治理</b>：<b>基本实现</b>国家治理体系和治理能力现代化，全过程人民民主制度更加健全；<b>基本建成</b>法治国家、法治政府、法治社会。</li>
                <li><b>生态</b>：碳排放达峰后稳中有降，生态环境根本好转，<b>美丽中国目标基本实现</b>。</li>
                <li><b>安全与国防</b>：国家安全体系和能力全面加强，<b>基本实现</b>国防和军队现代化。</li>
                <li><b>民生</b>：人民生活更加幸福美好，人的全面发展、全体人民共同富裕取得<b>更为明显的实质性进展</b>。</li>
              </PointList>
              <DataTable className="k1">
                <tr><th>表述</th><th>2035 年到底怎么用</th></tr>
                <tr><td><b>基本实现</b></td><td>社会主义现代化、新型工业化信息化城镇化农业现代化、国家治理体系和治理能力现代化、国防和军队现代化、美丽中国目标</td></tr>
                <tr><td><b>基本建成</b></td><td><b>法治国家、法治政府、法治社会</b>（只有这三项是「基本建成」）</td></tr>
                <tr><td><b>建成</b></td><td><b>现代化经济体系</b>；<b>教育强国、科技强国、人才强国、文化强国、体育强国、健康中国</b>（六项，全部是「建成」，不带「基本」）</td></tr>
                <tr><td><b>进入</b></td><td>创新型国家<b>前列</b></td></tr>
              </DataTable>
              <Callout variant="warn"><b>两个必错点：</b>① 六个强国是<b>「建成」</b>，不能写「基本建成」——只有法治三项才是「基本建成」；② 六个强国里是<b>科技强国</b>，不是「经济强国」（经济那条对应的是「建成现代化经济体系」）。</Callout>
              <Callout variant="tip"><b>易错句式：</b>「中国式现代化是全体人民<b>同等</b>富裕的现代化」×；「是物质文明<b>超越</b>西方国家的现代化」×。正确表述是「共同富裕」「物质文明和精神文明相协调」。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题6 · 2035 年目标（建成 or 基本建成）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于 2035 年我国发展的总体目标，下列说法正确的有：<br />①基本建成法治国家、法治政府、法治社会<br />②建成教育强国、科技强国、人才强国、文化强国、体育强国、健康中国<br />③基本实现国防和军队现代化<br />④建成经济强国、科技强国、人才强国</ExampleQuestion>
                <ExampleOptions>A.①②③　B.①②④　C.②③④　D.①③④</ExampleOptions>
                <ExampleAnswer><b>解析：</b>④错，六个强国里没有「经济强国」，且「建成教育强国」等六项<b>不带「基本」</b>；①法治三项是<b>基本建成</b>；②③与原文一致。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
