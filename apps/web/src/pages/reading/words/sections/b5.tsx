import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析五 · 强弱与取舍
 *
 * @returns 该节正文。
 */
export default function S41(): ReactElement {
  return (
    <>
      <Callout variant="key">
              「望其项背 / 望尘莫及」是<b>同一道题里的固定双煞</b>：一个只能用于否定（赶得上），一个可用于肯定（追不上）。
              看到「难以____」就选望其项背，看到「只能____」就选望尘莫及。
            </Callout>
      
            <Block>
              <BlockTitle>17. 脱颖而出 / 与众不同 / 出类拔萃 / 卓尔不群</BlockTitle>
              <div className="diff"><b>一句话区别：</b>脱颖而出＝<b>在竞争中冒出来</b>（重「显露」，强调从人群里出头）；与众不同＝<b>跟别人不一样</b>（中性，不一定更好）；出类拔萃＝<b>才能高出同类</b>（褒，重「高出」）；卓尔不群＝<b>才德超群、不随流俗</b>（褒，重「超然独立」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>脱颖而出</td><td>从众人中显露出来</td><td>在……中脱颖而出</td></tr>
                <tr><td>与众不同</td><td>跟别人不一样</td><td>与众不同的设计 / 与众不同的人</td></tr>
                <tr><td>出类拔萃</td><td>才能超过同类</td><td>出类拔萃的人才</td></tr>
                <tr><td>卓尔不群</td><td>才德超群，独立不随</td><td>卓尔不群的品格</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>脱颖而出</b>　她在千人海选中<em>脱颖而出</em>，拿下唯一的名额。</div>
                <div><b>与众不同</b>　这间咖啡馆的<em>与众不同</em>之处，是不放背景音乐。</div>
                <div><b>出类拔萃</b>　他在同期学员中<em>出类拔萃</em>，一毕业就被点名要走。</div>
                <div><b>卓尔不群</b>　他一生不赴宴、不题字，<em>卓尔不群</em>的品格令人敬重。</div>
              </div>
              <Example>
                <ExampleHeader>例题 1 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>在两千多名应聘者中，她凭借扎实的专业功底和出色的临场应变____，成为唯一被录用的应届毕业生。</ExampleQuestion>
                  <ExampleOptions><span>A. 卓尔不群</span><span>B. 脱颖而出</span><span>C. 与众不同</span><span>D. 出类拔萃</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中有明确的<b>竞争场景</b>（两千多名应聘者）和<b>结果</b>（唯一被录用），要表达「从众人中显露出来」，选「脱颖而出」。「与众不同」只说明不一样，<b>不含优劣</b>，与「唯一被录用」的优胜结果不匹配；「出类拔萃」形容<b>才能本身高出同类</b>，多作定语（出类拔萃的人才），不能直接说「她凭借……出类拔萃」；「卓尔不群」侧重<b>品格超然、不随流俗</b>，用于应聘选拔的语境过重。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>18. 相形见绌 / 望尘莫及 / 望其项背</BlockTitle>
              <div className="diff"><b>一句话区别：</b>相形见绌＝<b>和同类一比就下去</b>（后面不能带宾语）；望尘莫及＝<b>远远追不上</b>（<b>可用于肯定句</b>）；望其项背＝<b>赶得上</b>（<b>只用于否定</b>：难以望其项背）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>相形见绌</td><td>与同类相比显得不足</td><td>与……相比相形见绌</td></tr>
                <tr><td>望尘莫及</td><td>落后很远，赶不上</td><td>令人望尘莫及 / 只能望尘莫及</td></tr>
                <tr><td>望其项背</td><td>能赶得上（多否定）</td><td>难以望其项背 / 不能望其项背</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>相形见绌</b>　与新款相比，旧机型<em>相形见绌</em>。</div>
                <div><b>望尘莫及</b>　技术代差之下，后来者只能<em>望尘莫及</em>。</div>
                <div><b>望其项背</b>　其工艺之精，今人<em>难以望其项背</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 2 · 真题 2018 年 421 联考</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>现代传媒尤其是电子传媒有着比传统纸质传媒更宽广的尺度，____更多批判的意识和更多的异端。无数专家、学者在电子传媒会客厅中针对各种社会现象接受访谈，发表意见，甚至不乏____的声音。分析之深、论证之严密、言论之犀利，传统媒体均无法____。</ExampleQuestion>
                  <ExampleOptions><span>A. 鼓励　特立独行　相提并论</span><span>B. 滋生　针锋相对　同日而语</span><span>C. 允许　振聋发聩　一目了然</span><span>D. 容纳　惊世骇俗　望其项背</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：第三空是本题的判分点——传统媒体<b>赶不上</b>电子传媒的深度与犀利，用「无法望其项背」（望其项背＝赶得上，<b>只能用于否定式</b>）。<br />·「相提并论」「同日而语」都是「放在一起谈论」，与「比不上」不完全等同，且「无法相提并论」多用于<b>性质不同不可类比</b>，此处是比较高低，不如「望其项背」准；<br />·「一目了然」形容看得清楚，与「赶不上」毫无关系，A 直接出局。<br />第一空「容纳……批判意识」、第二空「惊世骇俗的声音」（言论惊人、超出常规）均可验证。<b>记住这个句式：无法望其项背＝追不上。</b></ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>19. 独一无二 / 无与伦比 / 不可替代</BlockTitle>
              <div className="diff"><b>一句话区别：</b>独一无二＝<b>只有这一个</b>（唯一性，重「没有第二个」）；无与伦比＝<b>没有能比的</b>（程度最高，重「最好」）；不可替代＝<b>换不了</b>（功能性，重「不可被取代」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>独一无二</td><td>唯一，没有第二个</td><td>独一无二的优势 / 独一无二的存在</td></tr>
                <tr><td>无与伦比</td><td>没有能与之相比的</td><td>无与伦比的价值 / 美得无与伦比</td></tr>
                <tr><td>不可替代</td><td>不能被别的取代</td><td>不可替代的作用 / 不可替代性</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>独一无二</b>　这里的丹霞地貌在全世界都是<em>独一无二</em>的。</div>
                <div><b>无与伦比</b>　敦煌壁画的艺术价值<em>无与伦比</em>。</div>
                <div><b>不可替代</b>　母亲在孩子早期成长中的作用<em>不可替代</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 3 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>这片湿地承担着调蓄洪水、净化水质、维护生物多样性等多重功能，对下游三百万人的饮水安全具有____的作用。</ExampleQuestion>
                  <ExampleOptions><span>A. 无与伦比</span><span>B. 不可替代</span><span>C. 举足轻重</span><span>D. 独一无二</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：空处修饰「<b>作用</b>」，且前文列举的多重功能说明它<b>没法被别的东西顶替</b>，选「不可替代」。「独一无二」强调<b>只有这一个</b>，句中没有与其他湿地比较唯一性；「无与伦比」强调<b>程度最高、没有能比的</b>，多用于价值、美、成就，修饰「作用」不合；「举足轻重」只说明<b>地位重要</b>，不含「换不掉」的意思，与「饮水安全」的刚性需求呼应不足。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>20. 本末倒置 / 舍本逐末 / 喧宾夺主</BlockTitle>
              <div className="diff"><b>一句话区别：</b>本末倒置＝<b>主次弄颠倒了</b>（重「颠倒」，客观上摆错了位置）；舍本逐末＝<b>主动放弃根本去追枝节</b>（重「主动」）；喧宾夺主＝<b>次要的压过主要的</b>（重「抢位」，多指外来者或陪衬）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>本末倒置</td><td>轻重位置颠倒</td><td>重形式轻内容，本末倒置</td></tr>
                <tr><td>舍本逐末</td><td>放弃根本，追求枝节</td><td>舍本逐末的做法</td></tr>
                <tr><td>喧宾夺主</td><td>次要的抢了主要的位置</td><td>配乐喧宾夺主 / 广告喧宾夺主</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>本末倒置</b>　总结会上 PPT 做了八十页，实际工作只讲了五分钟，实在<em>本末倒置</em>。</div>
                <div><b>舍本逐末</b>　只抓流量不抓品质，是典型的<em>舍本逐末</em>。</div>
                <div><b>喧宾夺主</b>　配乐铺得太满，反而<em>喧宾夺主</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 4 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>有的地方搞文明创建，把大量精力放在刷标语、做展板上，对群众真正关心的停车难、买菜难却视而不见，这种____的做法必须纠正。</ExampleQuestion>
                  <ExampleOptions><span>A. 本末倒置</span><span>B. 舍本逐末</span><span>C. 喧宾夺主</span><span>D. 缘木求鱼</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中是「<b>把精力放在刷标语</b>（末）而<b>无视群众疾苦</b>（本）」，属于<b>主动放弃根本、追求枝节</b>，选「舍本逐末」。「本末倒置」只强调主次<b>摆错了位置</b>，不含「明知根本在哪却主动放弃」的意味，语气略轻；「喧宾夺主」要求有一个「宾」抢了「主」的位置，句中没有外来者抢占的意味；「缘木求鱼」指<b>方向方法根本错误、必然徒劳</b>，而刷标语并非毫无效果，只是抓错了重点。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
    </>
  )
}
