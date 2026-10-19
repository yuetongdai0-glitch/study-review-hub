import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 一、文明 · 传承
 *
 * @returns 该节正文。
 */
export default function S2(): ReactElement {
  return (
    <>
      <Callout variant="key">
              这组的分水岭是「<b>长</b>」还是「<b>传</b>」。「源远流长」说<b>历史悠久</b>，「一脉相承 / 薪火相传」说<b>往下传</b>，「后继无人 / 难以为继」说<b>传不下去</b>。再往下走一层：「推陈出新 / 革故鼎新 / 除旧布新」都是<b>破旧立新</b>，区别只在<b>对象</b>——文化用推陈，制度用革故，风气用激浊扬清。
            </Callout>
      
            <Block>
              <BlockTitle>词群 1（本讲共 31 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>源远流长</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">历史文明</span></div>
              <div className="wg-d">源头远、水流长，形容历史悠久、根底深厚</div>
              <div className="wg-e">中华文明源远流长，五千多年从未中断。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>连绵不绝</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">山脉雨丝</span></div>
              <div className="wg-d">接连不断，多指具体事物</div>
              <div className="wg-e">秦岭山脉连绵不绝，横亘千里。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>博大精深</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">学说理论</span></div>
              <div className="wg-d">广博又高深，只形容抽象的知识体系</div>
              <div className="wg-e">《黄帝内经》所蕴含的养生思想博大精深。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>历久弥新</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">经典精神</span></div>
              <div className="wg-d">经历的年代越久，越显出新意与价值</div>
              <div className="wg-e">这些经典之所以历久弥新，是因为触及了人性的共通处。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>兼容并蓄</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">文化胸怀</span></div>
              <div className="wg-d">把不同的人、事物、学说都吸收容纳进来</div>
              <div className="wg-e">盛唐气象的底色，正是兼容并蓄的文化自信。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>一脉相承</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">思想传统</span></div>
              <div className="wg-d">由同一血统、派系递相承接，重在「不断线」</div>
              <div className="wg-e">从《诗经》到现代诗，现实主义的传统一脉相承。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 2（本讲共 31 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>血脉相通</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">亲属民族</span></div>
              <div className="wg-d">血统相连，比喻关系极亲近</div>
              <div className="wg-e">两岸同胞血脉相通，文化同根。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>薪火相传</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">技艺学问</span></div>
              <div className="wg-d">前代把火种交给后代，重在「传的动作」</div>
              <div className="wg-e">这门手艺靠师徒薪火相传，已延续六代。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>不绝如缕</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">声音气息</span></div>
              <div className="wg-d">像细线一样连着，① 声音微弱悠长 ② 仅存一线</div>
              <div className="wg-e">深夜的琴声不绝如缕，一直飘到巷口。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>口耳相传</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">传说技艺</span></div>
              <div className="wg-d">口说耳听地传下来，多指无文字时代的传说、技艺</div>
              <div className="wg-e">在没有文字的年代，史诗全靠口耳相传保存。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>衣钵相传</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">师承关系</span></div>
              <div className="wg-d">原指佛教师徒传法，泛指思想、技艺的继承</div>
              <div className="wg-e">他的书法得自父亲衣钵相传，一笔一画都有来历。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>后继无人</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">事业技艺</span></div>
              <div className="wg-d">没有后来人接续，强调「缺人」</div>
              <div className="wg-e">老匠人年事已高，这门手艺面临后继无人的困境。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 3（本讲共 31 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>难以为继</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">模式局面</span></div>
              <div className="wg-d">难以继续下去，强调「撑不住」</div>
              <div className="wg-e">靠补贴维持的运营模式已难以为继。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>继往开来</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">事业学术</span></div>
              <div className="wg-d">继承前人的事业，开辟未来的道路</div>
              <div className="wg-e">新一代学者当继往开来，把冷门绝学接住。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>承上启下</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">文章结构</span></div>
              <div className="wg-d">承接上面的、引出下面的，多用于文章结构</div>
              <div className="wg-e">这一段在全文结构中起承上启下的作用。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>推陈出新</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">文艺技艺</span></div>
              <div className="wg-d">去掉旧的糟粕，推出新的，对象是文化、技艺</div>
              <div className="wg-e">老字号要活下去，就得在工艺上推陈出新。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>吐故纳新</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">组织队伍</span></div>
              <div className="wg-d">扬弃旧的、吸收新的，多指组织、队伍的新陈代谢</div>
              <div className="wg-e">一个健康的肌体需要不断吐故纳新。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>革故鼎新</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">制度政治</span></div>
              <div className="wg-d">破除旧的、建立新的，用于制度层面的重大变革</div>
              <div className="wg-e">商鞅变法革故鼎新，奠定了秦国的强盛。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 4（本讲共 31 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>弃旧图新</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">人·道路</span></div>
              <div className="wg-d">抛弃旧的、谋求新的，多指走过错路的人改过</div>
              <div className="wg-e">他决心弃旧图新，把过去那段彻底翻篇。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>去芜存菁</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">文献资料</span></div>
              <div className="wg-d">去掉杂质、保留精华，多用于整理材料</div>
              <div className="wg-e">整理古籍要去芜存菁，不能泥沙俱下。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>除旧布新</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">风俗气象</span></div>
              <div className="wg-d">清除旧的、建立新的，不强调精华糟粕的判断</div>
              <div className="wg-e">岁末除旧布新，家家扫尘贴联。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>激浊扬清</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">风气舆论</span></div>
              <div className="wg-d">冲去浊水、扬起清水，对象是社会风气</div>
              <div className="wg-e">舆论监督的意义，正在于激浊扬清。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>另辟蹊径</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">方法路径</span></div>
              <div className="wg-d">另外开辟一条路，比喻另找方法或风格</div>
              <div className="wg-e">他没有跟着做短视频，而是另辟蹊径做起了音频课。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>与时俱进</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">理念制度</span></div>
              <div className="wg-d">随着时代一起前进，强调「跟上时代」</div>
              <div className="wg-e">教材必须与时俱进，及时吸收新的研究成果。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 5（本讲共 31 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>剑走偏锋</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">策略</span></div>
              <div className="wg-d">不走常规路子，另找冷门角度（多含冒险意味）</div>
              <div className="wg-e">这家小厂剑走偏锋，专做别人不愿接的小批量订单。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>匠心独运</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">艺术构思</span></div>
              <div className="wg-d">独创性地运用巧妙心思，多指艺术构思</div>
              <div className="wg-e">整座园林的布局匠心独运，一步一景。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>同组易混词（这几个也在别处讲过，这里再讲一遍，就地记）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>标新立异</b><span className="wg-t t-bian">中偏贬</span><span className="wg-t t-obj">主张设计</span></div>
              <div className="wg-d">提出新奇的主张，表示与众不同。看语境：讲创新时中性，为博眼球时带贬。</div>
              <div className="wg-e">为了流量而刻意标新立异，往往很快被观众看穿。</div>
              <div className="wg-cmp">同组区别：重「提新主张」；与「独树一帜」（风格独立）、「别出心裁」（构思巧）分工不同（<a href="#b3">见辨析三</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>别出心裁</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">构思设计</span></div>
              <div className="wg-d">另有一种独特的构思，重在<b>心思巧</b>，多指具体的做法、设计、布局。</div>
              <div className="wg-e">这场展览的布展方式别出心裁，观众要打着手电看。</div>
              <div className="wg-cmp">同组区别：重「巧」；「独树一帜」重「独立成家」，「标新立异」重「提主张」（<a href="#b3">见辨析三</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>独树一帜</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">风格流派</span></div>
              <div className="wg-d">单独树起一面旗帜，比喻<b>自成一家、风格独特</b>，重在「旗帜鲜明地独立」。</div>
              <div className="wg-e">他的山水画独树一帜，苍茫中见温润。</div>
              <div className="wg-cmp">同组区别：重「风格独立」；「自成一家」重「成了体系」，「别出心裁」重「构思巧」（<a href="#b3">见辨析三</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>不拘一格</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">选人用人</span></div>
              <div className="wg-d">不局限于一种规格、方式，多指打破常规<b>选拔人才</b>。</div>
              <div className="wg-e">选拔人才要不拘一格，不能只盯着学历和出身。</div>
              <div className="wg-cmp">同组区别：只用于「规格、方式不限」；不能像「别出心裁」那样形容构思（<a href="#b3">见辨析三</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>自成一家</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">学问技艺</span></div>
              <div className="wg-d">在学问、技艺上有独到之处，<b>能自成体系</b>，重在「成了体系」。</div>
              <div className="wg-e">他浸淫篆刻四十年，刀法已自成一家。</div>
              <div className="wg-cmp">同组区别：重「成体系」；「独树一帜」重「旗帜独立」，「不落窠臼」只要求「不俗套」（<a href="#b3">见辨析三</a>）</div>
            </div>
            </Block>
      
            <div className="memo">
              源远流长看<b>年头</b>，一脉相承看<b>源头</b>，薪火相传看<b>火种</b>，后继无人看<b>缺人</b>，难以为继看<b>撑不住</b>；文化推陈出新，制度革故鼎新，风气激浊扬清，材料去芜存菁。
            </div>
      
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题（本讲词群：推陈出新 / 革故鼎新）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>老字号要活下来，靠的不是把招牌供起来，而是在工艺上不断____，让老味道跟上新口味；而要让这类手艺真正值钱，还得在产权制度上____，把老师傅的手艺变成可入股、可分红的资产。</ExampleQuestion>
                <ExampleOptions><span>A. 推陈出新　革故鼎新</span><span>B. 革故鼎新　推陈出新</span><span>C. 吐故纳新　除旧布新</span><span>D. 与时俱进　激浊扬清</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：第一空的对象是「<b>工艺、老味道</b>」，属于文化技艺层面 → 用「<b>推陈出新</b>」（去糟粕、出新意）；第二空的对象是「<b>产权制度</b>」，属于制度层面 → 用「<b>革故鼎新</b>」（破除旧制、建立新制）。「吐故纳新」多指组织、队伍的新陈代谢，不用于工艺改良；「除旧布新」只讲新旧更替，不强调「扬弃糟粕」；「激浊扬清」的对象是风气、舆论，与产权制度不搭。<b>一句话锁死：文化用推陈，制度用革故。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
