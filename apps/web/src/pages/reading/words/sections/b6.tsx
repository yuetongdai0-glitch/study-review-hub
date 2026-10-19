import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析六 · 方法与路径
 *
 * @returns 该节正文。
 */
export default function S42(): ReactElement {
  return (
    <>
      <Callout variant="key">
              「缘木求鱼 / 竭泽而渔 / 寅吃卯粮 / 杀鸡取卵」四个都是贬义且都带比喻，靠<b>喻体</b>区分：
              上树找鱼（方向错）／放干水捉鱼（耗尽资源）／吃明天的粮（透支）／杀鸡取蛋（毁掉根基）。
            </Callout>
      
            <Block>
              <BlockTitle>21. 水到渠成 / 顺理成章 / 听之任之 / 顺其自然</BlockTitle>
              <div className="diff"><b>一句话区别：</b>水到渠成＝<b>条件成熟，结果自然来</b>（褒，重「功到自然成」）；顺理成章＝<b>合乎条理，自然推出</b>（中性，多指文章、逻辑）；听之任之＝<b>放任不管</b>（贬）；顺其自然＝<b>不刻意干预</b>（中性，顺应规律）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>水到渠成</td><td>条件具备，自然成功</td><td>功到自然成、水到渠成</td></tr>
                <tr><td>顺理成章</td><td>合乎逻辑，自然发展</td><td>顺理成章地成为 / 顺理成章的结论</td></tr>
                <tr><td>听之任之</td><td>放任不管（贬）</td><td>不能听之任之</td></tr>
                <tr><td>顺其自然</td><td>顺应规律，不强求</td><td>顺其自然，不必强求</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>水到渠成</b>　把基础打牢，能力提升是<em>水到渠成</em>的事。</div>
                <div><b>顺理成章</b>　前期论证做扎实了，结论便<em>顺理成章</em>。</div>
                <div><b>听之任之</b>　对网络谣言不能<em>听之任之</em>。</div>
                <div><b>顺其自然</b>　孩子的发展有其节奏，不妨<em>顺其自然</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 1 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>基本功练到一定程度，成绩的提高便是____的事，急也急不来。</ExampleQuestion>
                  <ExampleOptions><span>A. 顺其自然</span><span>B. 水到渠成</span><span>C. 顺理成章</span><span>D. 听之任之</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：前文「<b>基本功练到一定程度</b>」是条件，「成绩提高」是结果，正是「条件成熟、结果自然到来」的比喻，选「水到渠成」，且与「急也急不来」呼应。「顺理成章」侧重<b>合乎逻辑、顺乎条理</b>，多用于文章结构、论证推导；「听之任之」是贬义，指放任错误发展，感情色彩不合；「顺其自然」侧重<b>不刻意强求的心态</b>，与「练到一定程度」这种主动积累不搭。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>22. 缘木求鱼 / 竭泽而渔 / 寅吃卯粮 / 杀鸡取卵</BlockTitle>
              <div className="diff"><b>一句话区别：</b>缘木求鱼＝<b>方向方法错，必然徒劳</b>；竭泽而渔＝<b>耗尽资源换眼前</b>（重「把资源用光」）；寅吃卯粮＝<b>提前支用未来的钱粮</b>（重「透支」）；杀鸡取卵＝<b>贪眼前小利，毁掉根本</b>（重「自断生路」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>缘木求鱼</td><td>方向错，白费力气</td><td>无异于缘木求鱼</td></tr>
                <tr><td>竭泽而渔</td><td>耗尽资源，不顾长远</td><td>竭泽而渔式开发</td></tr>
                <tr><td>寅吃卯粮</td><td>透支未来收入</td><td>寅吃卯粮，入不敷出</td></tr>
                <tr><td>杀鸡取卵</td><td>贪小利而毁根本</td><td>杀鸡取卵的做法</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>缘木求鱼</b>　想靠加印钞票解决结构性问题，无异于<em>缘木求鱼</em>。</div>
                <div><b>竭泽而渔</b>　为了短期税收放干湖水搞养殖，是<em>竭泽而渔</em>。</div>
                <div><b>寅吃卯粮</b>　靠借新债还旧息，本质是<em>寅吃卯粮</em>。</div>
                <div><b>杀鸡取卵</b>　为省成本砍掉研发，等于<em>杀鸡取卵</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 2 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>为了完成今年的营收指标，个别企业把明年的订单提前确认收入，账面上好看了，实则是____，风险全压到了下一年。</ExampleQuestion>
                  <ExampleOptions><span>A. 寅吃卯粮</span><span>B. 杀鸡取卵</span><span>C. 缘木求鱼</span><span>D. 竭泽而渔</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中「<b>把明年的订单提前确认</b>」「风险全压到下一年」是典型的<b>提前支用未来</b>，选「寅吃卯粮」。「缘木求鱼」强调<b>方向方法错误</b>，而提前确认收入确实能做出账面利润，方法并非无效；「竭泽而渔」强调<b>把资源耗尽</b>，侧重「用光」而不是「预支」；「杀鸡取卵」强调<b>毁掉根本</b>，语气过重，且「鸡」与「订单」的喻体不贴。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>23. 墨守成规 / 抱残守缺 / 固步自封 / 陈陈相因</BlockTitle>
              <div className="diff"><b>一句话区别：</b>墨守成规＝<b>守老规矩不变通</b>（重「不变通」）；抱残守缺＝<b>守着残缺旧物旧说</b>（重「残缺还当宝」）；固步自封＝<b>自我封闭不求进</b>（重「封闭」）；陈陈相因＝<b>一代代沿袭老一套</b>（重「因袭、无改进」，多指文风、做法）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>墨守成规</td><td>死守旧规，不知变通</td><td>墨守成规，不敢越雷池</td></tr>
                <tr><td>抱残守缺</td><td>守着残缺的旧东西</td><td>对旧说抱残守缺</td></tr>
                <tr><td>固步自封</td><td>自我封闭，不求进步</td><td>固步自封，夜郎自大</td></tr>
                <tr><td>陈陈相因</td><td>沿袭老一套，没有改进</td><td>文风陈陈相因</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>墨守成规</b>　审批流程一味<em>墨守成规</em>，就会拖慢创新。</div>
                <div><b>抱残守缺</b>　对旧说<em>抱残守缺</em>，是学术停滞的根源。</div>
                <div><b>固步自封</b>　越是开放的城市，越不会<em>固步自封</em>。</div>
                <div><b>陈陈相因</b>　若只是<em>陈陈相因</em>，学术便难有真正的突破。</div>
              </div>
              <Example>
                <ExampleHeader>例题 3 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>学术研究若只在前人搭好的框架里打转，题目、方法、结论都照着旧例来，____，就很难产生真正有原创性的成果。</ExampleQuestion>
                  <ExampleOptions><span>A. 抱残守缺</span><span>B. 固步自封</span><span>C. 陈陈相因</span><span>D. 墨守成规</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>题目、方法、结论都照着旧例来</b>」强调的是一代代<b>沿袭、因袭而无改进</b>，选「陈陈相因」。「墨守成规」侧重<b>守着规矩不肯变通</b>，多指办事流程、制度，不针对学术沿袭；「抱残守缺」侧重<b>守着残缺的旧东西</b>，前提是「残缺」，句中并未说前人框架有缺陷；「固步自封」侧重<b>自我封闭、不与外界交流</b>，句中并无「封闭」的表述。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>24. 融会贯通 / 举一反三 / 触类旁通</BlockTitle>
              <div className="diff"><b>一句话区别：</b>融会贯通＝<b>把各块知识打通</b>（重「融合」，由散到整）；举一反三＝<b>由一件事推知许多</b>（重「推得多」）；触类旁通＝<b>掌握一类规律，推知同类</b>（重「横向类推」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>融会贯通</td><td>融合各方面，透彻理解</td><td>把……融会贯通</td></tr>
                <tr><td>举一反三</td><td>由一推多</td><td>举一反三的能力</td></tr>
                <tr><td>触类旁通</td><td>由此类推知同类</td><td>触类旁通，一通百通</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>融会贯通</b>　把文史哲打通，才能真正<em>融会贯通</em>。</div>
                <div><b>举一反三</b>　好老师教的不是答案，是<em>举一反三</em>的能力。</div>
                <div><b>触类旁通</b>　学会一门乐器，再学别的往往<em>触类旁通</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 4 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>学古文不能只背注释。字词、句式、篇章、典章制度，各块都要串起来看，串通了才能____，读出文字背后的意思。</ExampleQuestion>
                  <ExampleOptions><span>A. 融会贯通</span><span>B. 举一反三</span><span>C. 触类旁通</span><span>D. 学以致用</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：前文列举「字词、句式、篇章、典章制度」并强调「<b>串起来看、串通了</b>」，正是把分散的知识<b>融合成整体</b>，选「融会贯通」。「举一反三」侧重<b>由一件事推出许多事</b>，句中没有「推」的动作；「触类旁通」侧重<b>由一类推知同类</b>，强调横向迁移，与「各块串起来」的纵向整合不同；「学以致用」指把学到的用到实践中，句中没有「用」的语境。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
    </>
  )
}
