import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析四 · 紧迫与时机
 *
 * @returns 该节正文。
 */
export default function S40(): ReactElement {
  return (
    <>
      <Callout variant="key">
              「迫在眉睫 / 当务之急」是最经典的一对：前者形容<b>事情紧迫</b>（可作定语、谓语），后者是<b>名词</b>（「是/成为/作为」的宾语）。
              句中只要有「已成为」「是」，答案基本锁定「当务之急」。
            </Callout>
      
            <Block>
              <BlockTitle>13. 迫在眉睫 / 当务之急 / 时不我待 / 迫不及待</BlockTitle>
              <div className="diff"><b>一句话区别：</b>迫在眉睫＝<b>事情已逼到眼前</b>（形容词性，形容「事」）；当务之急＝<b>当前最急要办的事</b>（名词性，作宾语）；时不我待＝<b>时间不等人</b>（多用于勉励、抓紧）；迫不及待＝<b>急得等不了</b>（主语是人，形容心情）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>迫在眉睫</td><td>事情紧迫，就在眼前</td><td>形势迫在眉睫 / 迫在眉睫的任务</td></tr>
                <tr><td>当务之急</td><td>当前最急迫的事（名词）</td><td>当务之急是…… / 成为当务之急</td></tr>
                <tr><td>时不我待</td><td>时间不等人</td><td>时不我待，只争朝夕</td></tr>
                <tr><td>迫不及待</td><td>心情急切，等不了</td><td>迫不及待地打开 / 迫不及待想知道</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>迫在眉睫</b>　汛期将至，加固堤防已是<em>迫在眉睫</em>的任务。</div>
                <div><b>当务之急</b>　灾后重建千头万绪，<em>当务之急</em>是让群众有房住、有水喝。</div>
                <div><b>时不我待</b>　技术窗口期只有两三年，<em>时不我待</em>，必须马上动手。</div>
                <div><b>迫不及待</b>　新书刚到家，他就<em>迫不及待</em>地拆了封。</div>
              </div>
              <Example>
                <ExampleHeader>例题 1 · 真题 2019 吉林（0420 乙级）第 37 题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>维护网络在线教育市场的正常秩序____。首先需要加强监管，网络在线教育是一个新生事物，是「互联网 + 教育」的新生产业，怎么管、谁来管、管什么等一系列问题，尚待厘清。____是在立法等制度设计层面划定相关准入门槛。</ExampleQuestion>
                  <ExampleOptions><span>A. 责无旁贷　重中之重</span><span>B. 迫在眉睫　当务之急</span><span>C. 至关重要　燃眉之急</span><span>D. 刻不容缓　首当其冲</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：第一空作「正常秩序」的谓语，要说<b>形势紧迫</b>，「迫在眉睫」「刻不容缓」都对；「至关重要」强调重要性而非紧迫性，「责无旁贷」强调责任不可推卸，均不合。<br />第二空需要一个<b>名词</b>，直接充当「是……」的主语，只有「当务之急」是名词性（当前最急需办的事）；「首当其冲」意为最先受冲击，与文意无关，D 排除。「燃眉之急」「重中之重」虽为名词，但分别侧重「危急程度」「重要性」，与「当前要办的事」不合。<br /><b>这题就是「迫在眉睫作谓语、当务之急作主语」的标准双空考法。</b></ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>14. 急功近利 / 好高骛远 / 好大喜功 / 贪大求全</BlockTitle>
              <div className="diff"><b>一句话区别：</b>急功近利＝<b>急于要眼前的好处</b>（重「快」）；好高骛远＝<b>目标定得不切实际</b>（重「高」，多指个人）；好大喜功＝<b>喜欢做大事、立大功</b>（重「显绩」，多指当政者）；贪大求全＝<b>贪规模大、门类全</b>（重「大而全」，多指项目、规划）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>急功近利</td><td>急于求成，图眼前</td><td>急功近利的做法 / 短视而急功近利</td></tr>
                <tr><td>好高骛远</td><td>目标过高，不切实际</td><td>好高骛远，不切实际</td></tr>
                <tr><td>好大喜功</td><td>爱做大事、立大功</td><td>好大喜功的政绩工程</td></tr>
                <tr><td>贪大求全</td><td>贪图规模大、门类全</td><td>贪大求全的产业园</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>急功近利</b>　基础研究最忌<em>急功近利</em>，出成果往往要十年。</div>
                <div><b>好高骛远</b>　刚入行就想做总导演，未免<em>好高骛远</em>。</div>
                <div><b>好大喜功</b>　有的地方热衷上大项目、铺大摊子，<em>好大喜功</em>的心态一目了然。</div>
                <div><b>贪大求全</b>　县城也规划千亿级产业园，这种<em>贪大求全</em>的毛病该改改了。</div>
              </div>
              <Example>
                <ExampleHeader>例题 2 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>有的地方主政者热衷于上大项目、铺大摊子，追求任期内看得见、数得着的显性政绩，这种____的心态，往往留下一堆烂尾工程。</ExampleQuestion>
                  <ExampleOptions><span>A. 好大喜功</span><span>B. 贪大求全</span><span>C. 急功近利</span><span>D. 好高骛远</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中「<b>上大项目、铺大摊子</b>」「追求任期内显性政绩」正是「好大喜功」的典型表现——爱做大事、爱立大功，且主语是「主政者」。「急功近利」侧重<b>图眼前利益</b>，不强调「大」；「好高骛远」侧重<b>目标定得不切实际</b>，多指个人志向，与「政绩工程」不贴；「贪大求全」侧重<b>规模大、门类全</b>，适合形容产业园、规划，不适合概括「心态」。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>15. 有的放矢 / 一针见血 / 对症下药 / 量体裁衣</BlockTitle>
              <div className="diff"><b>一句话区别：</b>有的放矢＝<b>有目标才射箭</b>（办事、措施有针对性）；一针见血＝<b>话说到要害</b>（评论、批评）；对症下药＝<b>针对问题开方子</b>（解决具体毛病）；量体裁衣＝<b>照身材做衣服</b>（按实际情况定方案）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>有的放矢</td><td>有目标、有针对性</td><td>有的放矢地开展工作</td></tr>
                <tr><td>一针见血</td><td>说话直击要害</td><td>批评一针见血 / 指出得一针见血</td></tr>
                <tr><td>对症下药</td><td>针对病症给方案</td><td>对症下药，精准施策</td></tr>
                <tr><td>量体裁衣</td><td>按实际条件量身定制</td><td>量体裁衣式的帮扶</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>有的放矢</b>　只有把问题摸清，调研才能<em>有的放矢</em>。</div>
                <div><b>一针见血</b>　他的点评<em>一针见血</em>，直接点出了方案的逻辑漏洞。</div>
                <div><b>对症下药</b>　治理城市内涝要<em>对症下药</em>，先查清是管网问题还是地势问题。</div>
                <div><b>量体裁衣</b>　帮扶要<em>量体裁衣</em>，有的户缺技术，有的户缺销路。</div>
              </div>
              <Example>
                <ExampleHeader>例题 3 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>批评不能泛泛而谈，更不能隔靴搔痒，而要____，指出问题的症结在哪里、责任在谁身上。</ExampleQuestion>
                  <ExampleOptions><span>A. 一针见血</span><span>B. 对症下药</span><span>C. 量体裁衣</span><span>D. 有的放矢</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：空处与「泛泛而谈」「隔靴搔痒」相反，且后文「指出症结在哪里」直接对应<b>说话直击要害</b>，选「一针见血」。「有的放矢」强调<b>有目标、有准备</b>，重心在「不盲目」，与「指出症结」的锋利感不合；「对症下药」强调<b>给出解决方案</b>，而句中只要求「指出问题」，还没有开方；「量体裁衣」强调按对象定制方案，与「批评」这个言语行为不搭。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>16. 因地制宜 / 因势利导 / 因时制宜</BlockTitle>
              <div className="diff"><b>一句话区别：</b>因地制宜＝<b>按地点条件</b>办（空间）；因势利导＝<b>顺着趋势引导</b>（方向）；因时制宜＝<b>按时期不同</b>办（时间）。三个词的差别只在「因」的那个字后面——<b>地 / 势 / 时</b>。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>因地制宜</td><td>依各地条件不同而变</td><td>因地制宜，宜林则林</td></tr>
                <tr><td>因势利导</td><td>顺着趋势加以引导</td><td>因势利导，化危为机</td></tr>
                <tr><td>因时制宜</td><td>依时期不同而调整</td><td>因时制宜，动态调整</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>因地制宜</b>　山区发展产业要<em>因地制宜</em>，宜林则林、宜牧则牧。</div>
                <div><b>因势利导</b>　面对直播带货的热潮，与其一味禁止，不如<em>因势利导</em>，把它纳入规范。</div>
                <div><b>因时制宜</b>　调控政策要<em>因时制宜</em>，过热时收紧、下行时托底。</div>
              </div>
              <Example>
                <ExampleHeader>例题 4 · 真题 2018 广东</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>开展国土绿化行动，既要注重数量，更要注重质量，坚持科学绿化、规划引导、____，走科学、生态、借鉴的绿化发展之路，久久为功，善做善成，不断____森林面积，不断____森林质量，不断提升生态系统质量和稳定性。</ExampleQuestion>
                  <ExampleOptions><span>A. 因地制宜　扩大　提高</span><span>B. 因势利导　加大　增强</span><span>C. 因地制宜　扩充　强化</span><span>D. 因势利导　增加　改善</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：第一空与「科学绿化、规划引导」并列，讲的是<b>按各地不同条件定办法</b>（南方宜阔叶、北方宜针叶、干旱区宜灌木），选「因地制宜」。「因势利导」是<b>顺着趋势去引导</b>，对象是「势头、潮流」，用于「绿化」不合。<br />第二空「扩大面积」、第三空「提高质量」是固定搭配；「扩充」多用于编制、队伍，「强化」多用于意识、管理，「加大」多与力度、投入搭配——B、C、D 的组合都有一处搭配错。<br /><b>提示：</b>「因地制宜」后面常接「宜林则林、宜牧则牧」这类按条件分类的表达。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
    </>
  )
}
