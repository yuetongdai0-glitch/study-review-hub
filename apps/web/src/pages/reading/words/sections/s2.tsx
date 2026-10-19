import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 二、独特 · 守旧
 *
 * @returns 该节正文。
 */
export default function S3(): ReactElement {
  return (
    <>
      <Callout variant="key">
              这一讲是<b>正反一对</b>：前一半说「有自己的东西」（别开生面、自成一家、匠心独运），后一半说「只有旧的东西」（因循守旧、食古不化、照本宣科）。<b>中性词只有按部就班、循规蹈矩</b>，其余带「守、固、旧」的几乎都是贬义，考场上靠感情色彩就能排掉一半。
            </Callout>
      
            <Block>
              <BlockTitle>词群 1（本讲共 18 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>因循守旧</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">制度作风</span></div>
              <div className="wg-d">沿袭旧例、不求改进，多指工作作风</div>
              <div className="wg-e">因循守旧的考核办法，早已不适应新形势。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>食古不化</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">读书治学</span></div>
              <div className="wg-d">学了古代的东西却不善于运用，专指「学古不会用」</div>
              <div className="wg-e">读古书最怕食古不化，句句照搬却不解其意。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>按图索骥</b><span className="wg-t t-bian">中偏贬</span><span className="wg-t t-obj">查找办事</span></div>
              <div className="wg-d">① 按线索寻找（中性）② 拘泥成法、不知变通（贬）</div>
              <div className="wg-e">按图索骥式的招商，往往招不来真正合适的企业。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>按部就班</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">工作学习</span></div>
              <div className="wg-d">按一定条理、步骤进行，强调「有序」</div>
              <div className="wg-e">基础研究必须按部就班，急不得。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>循规蹈矩</b><span className="wg-t t-bian">中偏贬</span><span className="wg-t t-obj">人·做事</span></div>
              <div className="wg-d">遵守规矩、不敢稍有逾越；说人没创造力时带贬义</div>
              <div className="wg-e">他做事循规蹈矩，从不出错，也少有惊喜。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>照本宣科</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">讲课宣讲</span></div>
              <div className="wg-d">照着本子念，专指讲话、讲课死板照搬</div>
              <div className="wg-e">宣讲不能照本宣科，要讲群众听得懂的话。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 2（本讲共 18 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>胶柱鼓瑟</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">做事用兵</span></div>
              <div className="wg-d">把瑟上的柱粘住再弹，比喻拘泥固执、不知变通</div>
              <div className="wg-e">情况已变，仍胶柱鼓瑟地照老方案执行，只会越做越僵。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>别开生面</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">局面形式</span></div>
              <div className="wg-d">另外开创新的局面或形式，重在「焕然一新」</div>
              <div className="wg-e">这档节目用说唱讲文物，可谓别开生面。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>独具匠心</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">设计制作</span></div>
              <div className="wg-d">在构思上独有巧妙之处，多指设计、制作</div>
              <div className="wg-e">这枚印章的边款独具匠心，把落款刻成了山形。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>自出机杼</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">诗文创作</span></div>
              <div className="wg-d">比喻诗文的构思、布局独创一格（机杼＝织布机）</div>
              <div className="wg-e">他的散文自出机杼，从不套用现成的章法。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>同组易混词（这几个也在别处讲过，这里再讲一遍，就地记）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>墨守成规</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">办法流程</span></div>
              <div className="wg-d">守着老规矩不肯改变，<b>重在「不知变通」</b>。</div>
              <div className="wg-e">审批流程一味墨守成规，就会拖慢创新。</div>
              <div className="wg-cmp">同组区别：重「不变通」；「抱残守缺」重「守残缺」，「因循守旧」重「照旧例」（<a href="#b6">见辨析六</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>抱残守缺</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">旧说旧学</span></div>
              <div className="wg-d">守着残缺陈旧的东西不放，对象多是思想、学说、旧物。</div>
              <div className="wg-e">对旧说抱残守缺，是学术停滞的根源。</div>
              <div className="wg-cmp">同组区别：重「残缺还当宝」；「墨守成规」不要求「残缺」（<a href="#b6">见辨析六</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>固步自封</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">地区企业</span></div>
              <div className="wg-d">自己把自己限制在旧圈子里，不求进步，<b>重在自我封闭</b>。</div>
              <div className="wg-e">越是开放的城市，越不会固步自封。</div>
              <div className="wg-cmp">同组区别：重「封闭」；「墨守成规」重「守规矩」，「夜郎自大」重「自大」（<a href="#b6">见辨析六</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>陈陈相因</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">文风制度</span></div>
              <div className="wg-d">沿袭老一套、没有改进，多指文风、做法。</div>
              <div className="wg-e">若只是陈陈相因，学术便难有真正的突破。</div>
              <div className="wg-cmp">同组区别：重「一代代沿袭无改进」；「墨守成规」重「死守规矩」（<a href="#b6">见辨析六</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>不落窠臼</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">文章艺术</span></div>
              <div className="wg-d">不落俗套（窠臼＝旧格式），多用于文章、艺术作品。</div>
              <div className="wg-e">这部小说的叙事不落窠臼，读来毫不腻味。</div>
              <div className="wg-cmp">同组区别：重「不俗套」；「别具一格」重「有独特风格」，二者常可互换但对象略有别（<a href="#b3">见辨析三</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>别具一格</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">设计文风</span></div>
              <div className="wg-d">另有一种独特的风格，多指设计、建筑、文风。</div>
              <div className="wg-e">这座美术馆的设计别具一格，把整面外墙做成了书架。</div>
              <div className="wg-cmp">同组区别：重「风格新」；「不落窠臼」重「不落旧格」，程度略轻（<a href="#b3">见辨析三</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>自成一家</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">学问技艺</span></div>
              <div className="wg-d">在学问、技艺上有独到之处，<b>能自成体系</b>，重在「成了体系」。</div>
              <div className="wg-e">他浸淫篆刻四十年，刀法已自成一家。</div>
              <div className="wg-cmp">同组区别：重「成体系」；「独树一帜」重「旗帜独立」，「不落窠臼」只要求「不俗套」（<a href="#b3">见辨析三</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>独树一帜</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">风格流派</span></div>
              <div className="wg-d">单独树起一面旗帜，比喻<b>自成一家、风格独特</b>，重在「旗帜鲜明地独立」。</div>
              <div className="wg-e">他的山水画独树一帜，苍茫中见温润。</div>
              <div className="wg-cmp">同组区别：重「风格独立」；「自成一家」重「成了体系」，「别出心裁」重「构思巧」（<a href="#b3">见辨析三</a>）</div>
            </div>
            </Block>
      
            <div className="memo">
              守<b>规矩</b>＝墨守成规，守<b>残缺</b>＝抱残守缺，守<b>小圈子</b>＝固步自封，守<b>旧例</b>＝因循守旧，学<b>古人不用</b>＝食古不化，照着<b>本子念</b>＝照本宣科。
            </div>
      
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>有的非遗项目只剩下几位老人会做，年轻人不愿学；若只是把它们供进博物馆，看着是保护，实则是____——护住了壳，丢掉了活的那部分。</ExampleQuestion>
                <ExampleOptions><span>A. 因循守旧</span><span>B. 墨守成规</span><span>C. 抱残守缺</span><span>D. 固步自封</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：「护住了壳，丢掉了活的那部分」说明守着的是<b>残缺的旧东西</b>，选「抱残守缺」。「墨守成规」侧重<b>死守规矩不知变通</b>，对象是办法、流程；「固步自封」侧重<b>自我封闭、不与外界交流</b>；「因循守旧」侧重<b>照旧例办事</b>，多用于工作作风。三者都不含「守着残缺之物」的意思。</ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
