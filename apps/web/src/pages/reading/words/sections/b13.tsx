import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析十三 · 确定与评议
 *
 * @returns 该节正文。
 */
export default function S49(): ReactElement {
  return (
    <>
      <Callout variant="key">
              「<b>不容置疑 / 不容置喙</b>」一字之差：置疑＝怀疑，置喙＝插嘴。「<b>无可厚非 / 无可非议</b>」一字之差：厚非＝过分责难（可谅解），非议＝指责（完全正当）。「<b>不孚众望 / 不负众望</b>」一字之差：孚＝使人信服（没服众），负＝辜负（没辜负）。<b>这三对几乎年年考。</b>
            </Callout>
      
            <Block>
              <BlockTitle>17. 不容置疑 / 不容置喙 / 毋庸置疑</BlockTitle>
              <div className="diff"><b>一句话区别：</b>不容置疑＝<b>不允许怀疑</b>（强调「确定」）；不容置喙＝<b>不允许插嘴</b>（喙＝嘴，强调「没资格说话」）；毋庸置疑＝<b>不必怀疑</b>（用于句首或插入语，语气稍缓）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>不容置疑</td><td>不允许怀疑，绝对可信</td><td>作谓语、定语</td></tr>
                <tr><td>不容置喙</td><td>不允许插嘴</td><td>强调「轮不到你说」</td></tr>
                <tr><td>毋庸置疑</td><td>不必怀疑</td><td>多作插入语，句首用</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>不容置疑</b>　证据链完整，结论<b>不容置疑</b>。</div>
                <div><b>不容置喙</b>　这是专业判断，外行<b>不容置喙</b>。</div>
                <div><b>毋庸置疑</b>　<b>毋庸置疑</b>，这项技术将重塑行业。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>这是董事会依据章程作出的决议，程序合法、依据充分，个别股东再不满也____。</ExampleQuestion>
                <ExampleOptions><span>A. 无可厚非</span><span>B. 不容置疑</span><span>C. 不容置喙</span><span>D. 毋庸置疑</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中是「<b>个别股东再不满也没资格说</b>」，落点在「不许插嘴」，选「不容置喙」。「不容置疑」指<b>结论绝对可信</b>，不涉及「谁有资格说话」；「毋庸置疑」多作<b>插入语</b>，且语气更缓；「无可厚非」指<b>不必过分责难</b>，意思完全不同。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>18. 无可厚非 / 无可非议 / 差强人意</BlockTitle>
              <div className="diff"><b>一句话区别：</b>无可厚非＝<b>虽有缺点但可以谅解，不必过分责难</b>；无可非议＝<b>完全正当，没什么可指责</b>（比前者更正面）；差强人意＝<b>大体上还能使人满意</b>（<b>不是「不满意」</b>）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>无可厚非</td><td>可以谅解（有缺点但情有可原）</td><td>常与「虽然……但」呼应</td></tr>
                <tr><td>无可非议</td><td>完全正当，无可指责</td><td>比前者更肯定</td></tr>
                <tr><td>差强人意</td><td>勉强令人满意</td><td>差＝尚、略</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>无可厚非</b>　年轻人想多挣点钱，<b>无可厚非</b>。</div>
                <div><b>无可非议</b>　他按规定办事，<b>无可非议</b>。</div>
                <div><b>差强人意</b>　初稿虽粗糙，但已<b>差强人意</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>这份申报材料虽然还有不少粗糙之处，但框架完整、数据扎实，作为初稿已属____，改两轮就能报上去。</ExampleQuestion>
                <ExampleOptions><span>A. 无可非议</span><span>B. 大失所望</span><span>C. 差强人意</span><span>D. 无可厚非</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：空后「<b>改两轮就能报上去</b>」说明这份稿子<b>大体上还能让人满意</b>，正合「差强人意」——<b>差＝尚、略，是「还算能让人满意」</b>，不是「不令人满意」，这是被误用频率最高的成语之一。「无可厚非」指<b>不必过分责难</b>，是「情有可原」，不是「质量尚可」；「无可非议」指<b>完全正当</b>，与「还有不少粗糙之处」矛盾；「大失所望」程度过重且与后文相反。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>19. 不孚众望 / 不负众望 / 众望所归</BlockTitle>
              <div className="diff"><b>一句话区别：</b>不孚众望＝<b>不能使大家信服</b>（孚＝信服，<b>贬</b>）；不负众望＝<b>没有辜负大家的期望</b>（<b>褒</b>）；众望所归＝<b>大家一致期望他得到某位置</b>（褒，多指任职）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>不孚众望</td><td>不能使人信服（贬）</td><td>孚＝信服</td></tr>
                <tr><td>不负众望</td><td>没辜负期望（褒）</td><td>负＝辜负</td></tr>
                <tr><td>众望所归</td><td>众人期望所归</td><td>多指担任某职</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>不孚众望</b>　这位负责人<b>不孚众望</b>，半年就被调整。</div>
                <div><b>不负众望</b>　他<b>不负众望</b>，决赛最后一球定胜负。</div>
                <div><b>众望所归</b>　他德高望重，出任理事长是<b>众望所归</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>上任一年，他带着团队把连续亏损的三个项目全部扭亏，这次续任可谓____。</ExampleQuestion>
                <ExampleOptions><span>A. 不负众望</span><span>B. 不孚人望</span><span>C. 深孚众望</span><span>D. 不孚众望</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中是「<b>做出了成绩</b>」，要表达「<b>没有辜负期望</b>」，选「不负众望」。「不孚众望」意思是<b>不能使人信服</b>，与「扭亏为盈」正相反——<b>「孚」和「负」只差一个字，感情色彩完全相反</b>，这是最阴的坑；「深孚众望」意思正确（很使人信服），但它是<b>动词性短语作谓语</b>（他深孚众望），不能说「可谓深孚众望」；「不孚人望」为生造搭配。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>20. 无可比拟 / 无与伦比 / 不可同日而语</BlockTitle>
              <div className="diff"><b>一句话区别：</b>无可比拟＝<b>没有可以相比的</b>（多指水平、价值）；无与伦比＝<b>没有能与之相比的</b>（程度最重，褒）；不可同日而语＝<b>不能放在同一时间谈论，前后差距大</b>（用于今昔对比）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>无可比拟</td><td>没有可与之相比的</td><td>多指优势、价值</td></tr>
                <tr><td>无与伦比</td><td>没有能比的（程度最重）</td><td>多指美、成就</td></tr>
                <tr><td>不可同日而语</td><td>前后差距大，不能相提并论</td><td>必须有一前一后两个时点</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>无可比拟</b>　这项技术带来的效率提升<b>无可比拟</b>。</div>
                <div><b>无与伦比</b>　敦煌壁画的艺术价值<b>无与伦比</b>。</div>
                <div><b>不可同日而语</b>　如今的小城，与十年前已<b>不可同日而语</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>十年前这条街还是土路，如今咖啡馆、书店、剧场一应俱全，与当年已____。</ExampleQuestion>
                <ExampleOptions><span>A. 无可比拟</span><span>B. 无与伦比</span><span>C. 不可同日而语</span><span>D. 大相径庭</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中明确有「<b>十年前</b>」与「<b>如今</b>」两个时点，要表达<b>前后差距巨大</b>，选「不可同日而语」。「无可比拟」「无与伦比」都只讲「<b>没有能比的</b>」，不含「今昔对比」的结构；「大相径庭」指<b>彼此差别大</b>，可用于两个事物，但没有「时间跨度」的意味。<b>看到「十年前 / 如今」这类双时点，优先「不可同日而语」。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
    </>
  )
}
