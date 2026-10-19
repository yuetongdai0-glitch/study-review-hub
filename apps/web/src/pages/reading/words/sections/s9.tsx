import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 九、教化 · 言辞
 *
 * @returns 该节正文。
 */
export default function S10(): ReactElement {
  return (
    <>
      <Callout variant="key">
              前半段讲「<b>怎么教</b>」：春风化雨（润物无声，重效果）／循循善诱（一步步引，重方法）／苦口婆心（反复劝，重苦心）／耳提面命（当面叮嘱，重「当面」）／醍醐灌顶（一下子点通，重「顿悟」）。<br />后半段讲「<b>怎么说话</b>」：口若悬河（能说）／夸夸其谈（空说）／巧舌如簧（会说假话）／娓娓道来（慢慢说）／信口雌黄（乱说）。
            </Callout>
      
            <Block>
              <BlockTitle>词群 1（本讲共 40 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>如沐春风</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">感受教益</span></div>
              <div className="wg-d">像沐浴在和暖的春风里，比喻受到良好教益或亲切对待</div>
              <div className="wg-e">听他讲话如沐春风，再难的问题也敢开口。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>润物无声</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">教育影响</span></div>
              <div className="wg-d">滋润万物却不发出声响，比喻潜移默化的影响</div>
              <div className="wg-e">好的教育润物无声，全在日常的一言一行。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>成风化人</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">风气教化</span></div>
              <div className="wg-d">用良好风气感化、培育人</div>
              <div className="wg-e">文明创建不是刷标语，而是成风化人。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>苦口婆心</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">劝说</span></div>
              <div className="wg-d">反复恳切地劝说，重在「苦」与「反复」</div>
              <div className="wg-e">老师苦口婆心劝了半个月，他终于回到课堂。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>循循善诱</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">教学方法</span></div>
              <div className="wg-d">有步骤地引导、启发，重在「方法」</div>
              <div className="wg-e">她循循善诱，从不直接把答案说破。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>诲人不倦</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">教学态度</span></div>
              <div className="wg-d">教导别人不知疲倦，重在「耐心」</div>
              <div className="wg-e">老先生诲人不倦，八十岁还带研究生。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 2（本讲共 40 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>和风细雨</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">方式</span></div>
              <div className="wg-d">微风细雨，比喻方式和缓、不粗暴</div>
              <div className="wg-e">批评要和风细雨，别一上来就扣帽子。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>醍醐灌顶</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">顿悟</span></div>
              <div className="wg-d">纯酥油浇在头上，比喻一下子明白过来（顿悟）</div>
              <div className="wg-e">这一句话让他醍醐灌顶，当场改了方案。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>振聋发聩</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">言论文章</span></div>
              <div className="wg-d">声音大得连聋人也听见，比喻用言论唤醒麻木的人</div>
              <div className="wg-e">鲁迅的文字至今振聋发聩。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>谆谆告诫</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">长辈劝告</span></div>
              <div className="wg-d">恳切耐心地劝告（谆谆＝恳切不倦）</div>
              <div className="wg-e">临行前母亲谆谆告诫：做事先做人。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>现身说法</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">说理方式</span></div>
              <div className="wg-d">以亲身经历为例来说明道理</div>
              <div className="wg-e">他戒酒十年，常现身说法劝年轻人。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>春风化雨</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">教化效果</span></div>
              <div className="wg-d">良好的教育像春风细雨滋润人心，重「教化效果」</div>
              <div className="wg-e">老师的春风化雨，让一个自卑的孩子慢慢抬起了头。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 3（本讲共 40 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>侃侃而谈</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">从容说话</span></div>
              <div className="wg-d">理直气壮、从容不迫地说话（褒）</div>
              <div className="wg-e">面对专家提问，他侃侃而谈，条理清楚。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>高谈阔论</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">空谈</span></div>
              <div className="wg-d">大声议论，空洞不切实际（多含贬义）</div>
              <div className="wg-e">会上他高谈阔论半小时，没一句落到具体办法。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>夸夸其谈</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">浮夸</span></div>
              <div className="wg-d">说话浮夸、不切实际</div>
              <div className="wg-e">方案里全是新概念，细看多是夸夸其谈。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>口若悬河</b><span className="wg-t t-zhong">中偏褒</span><span className="wg-t t-obj">能说</span></div>
              <div className="wg-d">说话像瀑布倾泻，形容能言善辩（中性偏褒）</div>
              <div className="wg-e">他一开口便口若悬河，把来龙去脉讲得清清楚楚。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>巧舌如簧</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">花言巧语</span></div>
              <div className="wg-d">舌头灵巧得像簧片，形容花言巧语（贬）</div>
              <div className="wg-e">推销员巧舌如簧，老人差点签了高价合同。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>巧言令色</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">伪善</span></div>
              <div className="wg-d">花言巧语、伪装和善（贬）</div>
              <div className="wg-e">巧言令色者多不办实事，用人要看实绩。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 4（本讲共 40 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>娓娓道来</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">讲述</span></div>
              <div className="wg-d">连续不倦地、从容地讲述，听着舒服</div>
              <div className="wg-e">老人娓娓道来，把四十年前的往事讲成了故事。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>信口雌黄</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">乱说</span></div>
              <div className="wg-d">不顾事实随口乱说（雌黄＝古代涂改用的颜料）</div>
              <div className="wg-e">没有依据就信口雌黄，最容易误导公众。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>推心置腹</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">真诚</span></div>
              <div className="wg-d">把心掏出来放在对方肚子里，形容真心待人</div>
              <div className="wg-e">两人推心置腹谈了一夜，把误会说开了。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>开诚布公</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">坦诚</span></div>
              <div className="wg-d">敞开胸怀、坦白无私，多指处理问题的态度</div>
              <div className="wg-e">双方开诚布公，把各自的底线摆在桌上。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>披肝沥胆</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">忠诚</span></div>
              <div className="wg-d">剖开肝、滴出胆汁，形容极尽忠诚</div>
              <div className="wg-e">他为这项事业披肝沥胆三十年。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>老调重弹</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">重复</span></div>
              <div className="wg-d">把旧调子再弹一遍，比喻重复旧的主张（贬）</div>
              <div className="wg-e">又是那套老调重弹，听众早已不耐烦。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 5（本讲共 40 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>陈词滥调</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">言论</span></div>
              <div className="wg-d">陈旧空泛的言词（滥＝空泛）</div>
              <div className="wg-e">通篇都是陈词滥调，没有一句新东西。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>老生常谈</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">平常话</span></div>
              <div className="wg-d">老书生常讲的话，指听惯了的平常话（中性）</div>
              <div className="wg-e">虽是老生常谈，但「安全第一」永远不过时。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>绘声绘色</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">叙述生动</span></div>
              <div className="wg-d">叙述、描写生动逼真</div>
              <div className="wg-e">他把抓捕过程讲得绘声绘色，众人听得入神。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>活灵活现</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">描写生动</span></div>
              <div className="wg-d">形容神情逼真、生动，像活的一样</div>
              <div className="wg-e">这段描写把老掌柜写活了，活灵活现。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>惟妙惟肖</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">模仿逼真</span></div>
              <div className="wg-d">模仿或描绘得非常逼真（肖＝像）</div>
              <div className="wg-e">他学各地方言惟妙惟肖，一开口就逗笑全场。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>栩栩如生</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">艺术形象</span></div>
              <div className="wg-d">形象生动逼真，像活的一样（多指艺术形象）</div>
              <div className="wg-e">壁画上的飞天栩栩如生，衣带仿佛还在飘。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 6（本讲共 40 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>有声有色</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">叙述表演</span></div>
              <div className="wg-d">既好听又好看，形容叙述、表演生动精彩</div>
              <div className="wg-e">这堂思政课讲得有声有色，没人打瞌睡。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>一板一眼</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">做事有条理</span></div>
              <div className="wg-d">原指戏曲的节拍，比喻说话做事有条理、合规矩</div>
              <div className="wg-e">他做事一板一眼，交接清单列得清清楚楚。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>同组易混词（这几个也在别处讲过，这里再讲一遍，就地记）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>潜移默化</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">思想性格</span></div>
              <div className="wg-d">人的思想、性格在不知不觉中受到感染而<b>发生变化</b>，重结果，主体可为事或物。</div>
              <div className="wg-e">家风不是写在纸上的规矩，而是在一日三餐里潜移默化地塑造着孩子。</div>
              <div className="wg-cmp">同组区别：重「变了」；「耳濡目染」重「染上了」且主体须是人，「耳闻目睹」只讲「知道」（<a href="#b1">见辨析一</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>耳濡目染</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">技能风气</span></div>
              <div className="wg-d">耳朵经常听到、眼睛经常看到，不知不觉受到影响，<b>主体必须是人</b>。</div>
              <div className="wg-e">他从小在剧场后台长大，耳濡目染，十岁便能登台。</div>
              <div className="wg-cmp">同组区别：重「染上了」；「潜移默化」主体可为事物，「耳闻目睹」不含「受影响」（<a href="#b1">见辨析一</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>耳提面命</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">长辈教导</span></div>
              <div className="wg-d">提着耳朵、当面教导，形容<b>恳切地教导</b>，<b>只能用于上对下</b>。</div>
              <div className="wg-e">临行前父亲耳提面命，叮嘱再三。</div>
              <div className="wg-cmp">同组区别：重「当面叮嘱」；「言传身教」重「说做一致」，「春风化雨」重「润物无声」（<a href="#b8">见辨析八</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>言传身教</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">师长示范</span></div>
              <div className="wg-d">既用言语教导，又以行动示范，<b>强调「说做一致」</b>。</div>
              <div className="wg-e">他从不讲大道理，只是每天最早到实验室、最晚离开，这种言传身教，学生都看在眼里。</div>
              <div className="wg-cmp">同组区别：重「说做一致」；「耳提面命」只有「说」，「身体力行」只讲「自己做」（<a href="#b8">见辨析八</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>人云亦云</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">意见态度</span></div>
              <div className="wg-d">别人怎么说就跟着怎么说，<b>没有主见</b>，对象是「话」。</div>
              <div className="wg-e">会上没人提反对意见，大多是怕出错而人云亦云。</div>
              <div className="wg-cmp">同组区别：重「跟着说」；「随波逐流」重「跟着走」，「拾人牙慧」重「抄人话当自己的」（<a href="#b1">见辨析一</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>拾人牙慧</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">言论文字</span></div>
              <div className="wg-d">拾取别人现成的言论当作自己的话，<b>含抄袭意味</b>。</div>
              <div className="wg-e">这篇文章并无新见，多是拾人牙慧。</div>
              <div className="wg-cmp">同组区别：重「把别人的话当自己的」；「人云亦云」只是附和，不涉及据为己有（<a href="#b1">见辨析一</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>含糊其辞</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">回答表态</span></div>
              <div className="wg-d">话说得<b>内容不明确</b>，有意回避，重在「内容不清」。</div>
              <div className="wg-e">报告里对这一笔支出含糊其辞，只写「其他费用」四个字。</div>
              <div className="wg-cmp">同组区别：重「说不清」；「闪烁其词」重「不敢说」，「语焉不详」重「说得不细」（<a href="#b8">见辨析八</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>闪烁其词</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">追问回避</span></div>
              <div className="wg-d">说话吞吞吐吐、躲躲闪闪，<b>重在「不敢明说」</b>。</div>
              <div className="wg-e">面对追问，他闪烁其词，眼神一直往门口飘。</div>
              <div className="wg-cmp">同组区别：重「躲闪」；「含糊其辞」是「说得模糊」，不强调「躲」（<a href="#b8">见辨析八</a>）</div>
            </div>
            </Block>
      
            <div className="memo">
              怎么教＝春风化雨（效果） / 循循善诱（方法） / 苦口婆心（苦心） / 耳提面命（当面） / 醍醐灌顶（顿悟）；怎么讲＝口若悬河（能说） / 夸夸其谈（空说） / 巧舌如簧（假话） / 娓娓道来（从容） / 信口雌黄（乱说）。
            </div>
      
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>他很少给学生讲大道理，只是每天最早到实验室、最晚一个离开，实验记录一笔一画写得工工整整。这种____，学生们都看在眼里。</ExampleQuestion>
                <ExampleOptions><span>A. 耳提面命</span><span>B. 言传身教</span><span>C. 春风化雨</span><span>D. 潜移默化</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中先否定「讲大道理」（无「言传」），再强调「<b>每天最早到、最晚走</b>」（有「身教」），一正一反正对应「言传身教」。「耳提面命」侧重<b>当面反复叮嘱</b>，与「很少讲大道理」矛盾；「春风化雨」侧重<b>教化滋润的效果</b>，多作定语（春风化雨般的教育），不能直接指「这种行为」；「潜移默化」是<b>方式状语</b>（潜移默化地影响），不能作「这种____」的中心语。</ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
