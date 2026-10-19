import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析八 · 表达与评议
 *
 * @returns 该节正文。
 */
export default function S44(): ReactElement {
  return (
    <>
      <Callout variant="key">
              「猝不及防 / 始料不及 / 出其不意 / 措手不及」四个常同题出现，抓一个点：
              <b>猝不及防</b>＝事来得突然（客观）；<b>始料不及</b>＝没想到（主观预判）；<b>出其不意</b>＝主动袭击对方（战术）；<b>措手不及</b>＝被弄得手忙脚乱（结果）。
            </Callout>
      
            <Block>
              <BlockTitle>29. 含糊其辞 / 闪烁其词</BlockTitle>
              <div className="diff"><b>一句话区别：</b>含糊其辞＝<b>话说得内容不清</b>（有意模糊，重「不清」）；闪烁其词＝<b>说话吞吞吐吐、躲躲闪闪</b>（重「不敢明说」，常伴「回避」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>含糊其辞</td><td>表达模糊，不明确</td><td>含糊其辞，语焉不详</td></tr>
                <tr><td>闪烁其词</td><td>躲闪回避，不肯明说</td><td>闪烁其词，避而不答</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>含糊其辞</b>　报告里对这一笔支出<em>含糊其辞</em>，只写「其他费用」四个字。</div>
                <div><b>闪烁其词</b>　面对追问，他<em>闪烁其词</em>，眼神一直往门口飘。</div>
              </div>
              <Example>
                <ExampleHeader>例题 1 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>记者三次追问资金的具体去向，负责人始终不肯正面回答，____，最后只说了一句「都按程序办了」。</ExampleQuestion>
                  <ExampleOptions><span>A. 语焉不详</span><span>B. 含糊其辞</span><span>C. 闪烁其词</span><span>D. 讳莫如深</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>不肯正面回答</b>」「只说了一句」强调的是<b>躲闪、回避</b>，选「闪烁其词」。「含糊其辞」侧重<b>说出来的话本身模糊</b>，而这里是「不肯说」，不是「说不清」；「讳莫如深」指<b>隐瞒得很紧、绝口不谈</b>，程度更重，且后面一般不接「最后只说了一句」这种「还是说了点」的表述；「语焉不详」指<b>说得不详细</b>，侧重「简略」而非「躲闪」。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>30. 猝不及防 / 始料不及 / 出其不意 / 措手不及</BlockTitle>
              <div className="diff"><b>一句话区别：</b>猝不及防＝<b>事来得太突然，来不及防</b>（客观突发）；始料不及＝<b>事先没料到</b>（主观预判落空）；出其不意＝<b>趁对方不注意出手</b>（主动战术，多指一方对另一方）；措手不及＝<b>被弄得手忙脚乱</b>（重「应对不上」的结果）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>猝不及防</td><td>突然发生，来不及防</td><td>令人猝不及防 / 猝不及防的打击</td></tr>
                <tr><td>始料不及</td><td>事先没料到</td><td>结果始料不及</td></tr>
                <tr><td>出其不意</td><td>趁人不备，主动出手</td><td>出其不意，攻其不备</td></tr>
                <tr><td>措手不及</td><td>临时应付不了</td><td>打得措手不及</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>猝不及防</b>　暴雨在凌晨突袭，山洪来得<em>猝不及防</em>，村民们还在睡梦中。</div>
                <div><b>始料不及</b>　谁也没想到，一场小感冒会拖成肺炎，结果<em>始料不及</em>。</div>
                <div><b>出其不意</b>　球队下半场突然改打高位逼抢，<em>出其不意</em>，连进两球。</div>
                <div><b>措手不及</b>　政策突然收紧，不少企业被打了个<em>措手不及</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 2 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>暴雨在凌晨突袭山谷，山洪裹着碎石冲下来，来得____，村里不少人还在睡梦中。</ExampleQuestion>
                  <ExampleOptions><span>A. 出其不意</span><span>B. 措手不及</span><span>C. 猝不及防</span><span>D. 始料不及</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>凌晨突袭</b>」「还在睡梦中」强调<b>事发突然、来不及防备</b>，选「猝不及防」。「始料不及」侧重<b>事先没料到</b>，是个判断性评价，不强调「来不及防」的紧迫；「出其不意」是<b>主动的一方用战术</b>，山洪没有「主动设计」；「措手不及」侧重<b>被弄得手忙脚乱</b>，是人的应对结果，而句中人们还在睡觉，谈不上「应对」。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>31. 众望所归 / 实至名归</BlockTitle>
              <div className="diff"><b>一句话区别：</b>众望所归＝<b>大家一致期望他得到</b>（重「人心所向」，多指担任某职）；实至名归＝<b>有了真本事，名誉自然来</b>（重「名副其实」，多指获奖、称号）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>众望所归</td><td>众人期望，人心所向</td><td>当选是众望所归</td></tr>
                <tr><td>实至名归</td><td>名副其实，荣誉配得上</td><td>获此殊荣，实至名归</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>众望所归</b>　他德高望重，出任理事长是<em>众望所归</em>。</div>
                <div><b>实至名归</b>　他深耕小麦育种四十年，这次获颁国家最高科学技术奖，可谓<em>实至名归</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 3 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>他把大半辈子交给了小麦育种，育成的品种累计推广三亿多亩。这次获颁国家最高科学技术奖，可谓____。</ExampleQuestion>
                  <ExampleOptions><span>A. 实至名归</span><span>B. 名副其实</span><span>C. 当之无愧</span><span>D. 众望所归</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中强调的是「<b>贡献实在，奖项配得上</b>」，选「实至名归」。「众望所归」侧重<b>众人的期望</b>，多用于担任某个职位，句中没有「大家盼着他得奖」这层信息；「名副其实」只说明名与实相符，<b>不含「因贡献而获誉」的褒扬过程</b>，且多作定语；「当之无愧」虽也合适，但它侧重「承担得起、不惭愧」，与「实至名归」相比少了「荣誉自然到来」的意味，在「可谓」后搭配「实至名归」更定式。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>32. 耳提面命 / 言传身教 / 春风化雨</BlockTitle>
              <div className="diff"><b>一句话区别：</b>耳提面命＝<b>当面恳切教导</b>（重「说」，上对下）；言传身教＝<b>既讲道理又做示范</b>（重「说做一致」）；春风化雨＝<b>良好的教育像春风细雨滋润人心</b>（重「潜移默化的教化」，多作定语或宾语）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>耳提面命</td><td>当面教诲，恳切叮嘱</td><td>耳提面命，谆谆告诫</td></tr>
                <tr><td>言传身教</td><td>言语教导＋行动示范</td><td>言传身教，以身作则</td></tr>
                <tr><td>春风化雨</td><td>教化滋润，润物无声</td><td>春风化雨般的教育</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>耳提面命</b>　临行前父亲<em>耳提面命</em>，叮嘱再三。</div>
                <div><b>言传身教</b>　他从不讲大道理，只是每天最早到实验室、最晚离开，这种<em>言传身教</em>，学生都看在眼里。</div>
                <div><b>春风化雨</b>　老师的<em>春风化雨</em>，让一个原本自卑的孩子慢慢抬起了头。</div>
              </div>
              <Example>
                <ExampleHeader>例题 4 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>他很少给学生讲大道理，只是每天最早到实验室、最晚一个离开，实验记录一笔一画写得工工整整。这种____，学生们都看在眼里。</ExampleQuestion>
                  <ExampleOptions><span>A. 耳提面命</span><span>B. 言传身教</span><span>C. 春风化雨</span><span>D. 潜移默化</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中先否定「讲大道理」（无「言传」），再强调「<b>每天最早到、最晚走</b>」（有「身教」），一正一反正对应「言传身教」。「耳提面命」侧重<b>当面反复叮嘱</b>，与「很少讲大道理」矛盾；「春风化雨」侧重<b>教化滋润、润物无声的效果</b>，多作定语（春风化雨般的教育），不能直接指「这种行为」；「潜移默化」是<b>方式状语</b>（潜移默化地影响），不能作「这种____」的中心语。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
    </>
  )
}
