import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 十、勤勉 · 治学
 *
 * @returns 该节正文。
 */
export default function S11(): ReactElement {
  return (
    <>
      <Callout variant="key">
              两组最容易混：<b>殚精竭虑 / 呕心沥血 / 苦心孤诣</b>——都是「费尽心力」，但呕心沥血多指创作，苦心孤诣指「独到境地」；<b>孜孜不倦 / 孜孜以求 / 孜孜矻矻</b>——都是「勤奋不倦」，但孜孜以求后面要带宾语（求什么）。治学六法：条分缕析（拆细）／抽丝剥茧（层层深入）／深入浅出（讲得浅）／纲举目张（抓总纲）／提纲挈领（抓要点）／以一持万（抓根本）。
            </Callout>
      
            <Block>
              <BlockTitle>词群 1（本讲共 32 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>如履薄冰</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">谨慎戒惧</span></div>
              <div className="wg-d">像走在薄冰上，比喻处境极谨慎、心存戒惧</div>
              <div className="wg-e">审批大额资金，他一向如履薄冰。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>兢兢业业</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">工作态度</span></div>
              <div className="wg-d">小心谨慎、认真负责，多指工作态度</div>
              <div className="wg-e">他在档案室兢兢业业干了三十年。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>专心致志</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">专注</span></div>
              <div className="wg-d">一心一意、集中精神</div>
              <div className="wg-e">他关掉手机，专心致志地把报告写完。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>殚精竭虑</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">费心力</span></div>
              <div className="wg-d">用尽精力、绞尽脑汁，强调「思虑之苦」</div>
              <div className="wg-e">为了这套方案，团队殚精竭虑了三个月。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>呕心沥血</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">创作教育</span></div>
              <div className="wg-d">费尽心思，多指文艺创作、教育事业</div>
              <div className="wg-e">他呕心沥血十年，写成这部地方志。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>苦心孤诣</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">独到境界</span></div>
              <div className="wg-d">费尽心思达到别人达不到的<b>独到境地</b></div>
              <div className="wg-e">他在古琴打谱上苦心孤诣，复原了多首失传曲目。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 2（本讲共 32 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>废寝忘食</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">投入</span></div>
              <div className="wg-d">顾不上睡觉吃饭，形容非常专心努力</div>
              <div className="wg-e">攻关那阵子，他废寝忘食，人瘦了一圈。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>皓首穷经</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">治学一生</span></div>
              <div className="wg-d">直到年老白头还在钻研经书，形容一生治学</div>
              <div className="wg-e">老先生皓首穷经，把这部书校了四遍。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>心无旁骛</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">专注</span></div>
              <div className="wg-d">心里没有别的杂念，专注一件事</div>
              <div className="wg-e">他心无旁骛地练了三年基本功。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>聚精会神</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">专注</span></div>
              <div className="wg-d">集中精神，多形容当下这一刻的专注</div>
              <div className="wg-e">孩子们聚精会神地看演示，没人说话。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>挖空心思</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">费心机</span></div>
              <div className="wg-d">费尽心机（多含贬义）</div>
              <div className="wg-e">他挖空心思找制度漏洞，最后被查了出来。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>夜以继日</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">日夜赶工</span></div>
              <div className="wg-d">晚上接着白天，形容日夜不停</div>
              <div className="wg-e">抢险队夜以继日，三天打通了生命通道。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 3（本讲共 32 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>焚膏继晷</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">勤学</span></div>
              <div className="wg-d">点上油灯接续白天，形容夜以继日地学习工作</div>
              <div className="wg-e">他焚膏继晷读了三年书，终于考中。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>夙兴夜寐</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">勤劳</span></div>
              <div className="wg-d">早起晚睡，形容勤劳不懈</div>
              <div className="wg-e">为了这条水渠，全村夙兴夜寐干了两个冬天。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>目不窥园</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">专心读书</span></div>
              <div className="wg-d">三年不往园子里看一眼，形容专心读书</div>
              <div className="wg-e">备考那年他目不窥园，连院里的花开了都不知道。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>风餐露宿</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">艰苦</span></div>
              <div className="wg-d">在风里吃饭、在露天睡觉，形容旅途或野外艰苦</div>
              <div className="wg-e">地质队风餐露宿，在无人区待了四个月。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>筚路蓝缕</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">创业艰难</span></div>
              <div className="wg-d">驾着柴车、穿着破衣去开辟山林，形容创业艰难</div>
              <div className="wg-e">这家企业筚路蓝缕三十年，从三间平房做到上市。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>披星戴月</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">早出晚归</span></div>
              <div className="wg-d">顶着星星出去、戴着月亮回来，形容早出晚归</div>
              <div className="wg-e">环卫工人披星戴月，凌晨四点就上街。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 4（本讲共 32 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>栉风沐雨</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">奔波劳碌</span></div>
              <div className="wg-d">用风梳头、用雨洗头，形容奔波劳碌</div>
              <div className="wg-e">测量队栉风沐雨，把每个界桩都复核了一遍。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>摩顶放踵</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">舍己</span></div>
              <div className="wg-d">从头顶到脚跟都磨伤，形容不辞劳苦、舍己为人</div>
              <div className="wg-e">他摩顶放踵为乡民奔走，从不言苦。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>胼手胝足</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">辛劳</span></div>
              <div className="wg-d">手掌脚底磨出老茧，形容长期辛苦劳作</div>
              <div className="wg-e">祖辈胼手胝足开出的这片田，如今成了示范园。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>孜孜矻矻</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">勤勉</span></div>
              <div className="wg-d">勤勉不懈的样子（矻矻＝勤劳不息）</div>
              <div className="wg-e">他孜孜矻矻大半生，只做成一件事。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>孜孜不倦</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">勤奋</span></div>
              <div className="wg-d">勤奋努力、不知疲倦，可单独作谓语</div>
              <div className="wg-e">她孜孜不倦地学了四门外语。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>孜孜以求</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">追求</span></div>
              <div className="wg-d">不懈地追求，<b>后面要带宾语</b>（求什么）</div>
              <div className="wg-e">他一生孜孜以求的，就是把冷门绝学传下去。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 5（本讲共 32 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>条分缕析</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">分析细致</span></div>
              <div className="wg-d">一条条、一缕缕地分析，形容分析细致有条理</div>
              <div className="wg-e">报告条分缕析，把三个成因拆得清清楚楚。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>抽丝剥茧</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">层层深入</span></div>
              <div className="wg-d">一根根抽丝、一层层剥茧，比喻层层深入追查</div>
              <div className="wg-e">专案组抽丝剥茧，终于查到了资金源头。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>深入浅出</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">讲解</span></div>
              <div className="wg-d">把深奥的道理用浅显的话讲出来</div>
              <div className="wg-e">他讲课深入浅出，外行也听得懂。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>纲举目张</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">抓总纲</span></div>
              <div className="wg-d">提起鱼网的总绳，所有网眼都张开，比喻抓住总纲带动全局</div>
              <div className="wg-e">抓住考核这个纲，纲举目张，各项工作都动起来了。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>提纲挈领</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">抓要点</span></div>
              <div className="wg-d">提起衣领、抓住网绳，比喻抓住要点、简明扼要</div>
              <div className="wg-e">汇报要提纲挈领，别念稿子。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>以一持万</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">抓根本</span></div>
              <div className="wg-d">用少数关键统驭众多，形容抓住根本</div>
              <div className="wg-e">制度设计要以一持万，不能事事靠人盯。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 6（本讲共 32 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>博采众长</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">学习吸收</span></div>
              <div className="wg-d">广泛吸取各家的长处</div>
              <div className="wg-e">这部剧博采众长，把几种地方戏的腔调都用上了。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>见贤思齐</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">自我要求</span></div>
              <div className="wg-d">看到有德才的人就想向他看齐</div>
              <div className="wg-e">见贤思齐，别一见人强就先找借口。</div>
            </div>
            </Block>
      
            <div className="memo">
              费心力＝殚精竭虑（思虑） / 呕心沥血（创作教育） / 苦心孤诣（独到境界）；勤＝孜孜不倦（谓语） / 孜孜以求（带宾语） / 孜孜矻矻（状态）；治学＝条分缕析（拆细） / 抽丝剥茧（层层深入） / 深入浅出（讲得浅） / 纲举目张（抓总纲） / 提纲挈领（抓要点）。
            </div>
      
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>为了把这门失传的技艺复原出来，他翻遍了三省的地方志，走访了四十多位老人，前后____二十余年，终于让整套工序重新跑通。</ExampleQuestion>
                <ExampleOptions><span>A. 废寝忘食</span><span>B. 殚精竭虑</span><span>C. 呕心沥血</span><span>D. 苦心孤诣</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：句子强调「<b>翻遍三省志书、走访四十多位老人、二十年</b>」，落点在「<b>达到别人达不到的独到境地</b>」，选「苦心孤诣」。「殚精竭虑」偏<b>思虑之苦</b>，多用于谋划方案；「呕心沥血」多用于<b>文艺创作、教育事业</b>，与「复原工序」不完全对应；「废寝忘食」只讲<b>一时投入</b>，撑不起「二十余年」这个时间跨度。</ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
