import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 五、兴起 · 衰落
 *
 * @returns 该节正文。
 */
export default function S6(): ReactElement {
  return (
    <>
      <Callout variant="key">
              一条完整的兴衰曲线：<b>怎么起来的</b>（雨后春笋 / 异军突起 / 应运而生）→ <b>起来之后多旺</b>（如火如荼 / 如日中天 / 方兴未艾）→ <b>怎么落的</b>（明日黄花 / 强弩之末 / 日薄西山 / 江河日下）。考场上先判断句子停在哪一段，答案基本就定了。
            </Callout>
      
            <Block>
              <BlockTitle>本讲词群 1（共 28 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>层出不穷</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">新事物</span></div>
              <div className="wg-d">接连不断地出现，没有穷尽，重在「不断出新的」</div>
              <div className="wg-e">技术迭代加快，新的应用场景层出不穷。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>风起云涌</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">形势潮流</span></div>
              <div className="wg-d">大风刮起、云涛涌动，比喻事物迅猛兴起、声势浩大</div>
              <div className="wg-e">那几年新能源赛道风起云涌，几乎每月都有新玩家入场。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>雨后春笋</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">新生事物</span></div>
              <div className="wg-d">春天下雨后竹笋长得又多又快，比喻新事物大量涌现</div>
              <div className="wg-e">乡村民宿如雨后春笋般冒出来，一年翻了两倍。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>异军突起</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">力量流派</span></div>
              <div className="wg-d">另一支力量突然崛起，重在「原本不在主流视野」</div>
              <div className="wg-e">短视频平台异军突起，改变了整个内容生态。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>高歌猛进</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">队伍事业</span></div>
              <div className="wg-d">情绪高涨、勇猛前进，多指整体推进势头</div>
              <div className="wg-e">球队一路高歌猛进，闯入决赛。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>如火如荼</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">活动建设</span></div>
              <div className="wg-d">像火那样红、像荼那样白，形容气势旺盛、气氛热烈</div>
              <div className="wg-e">春耕生产如火如荼，田间处处是农机。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>本讲词群 2（共 28 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>蒸蒸日上</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">事业生意</span></div>
              <div className="wg-d">一天天向上发展，强调「持续变好」</div>
              <div className="wg-e">小店的生意蒸蒸日上，去年又开了分店。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>如日中天</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">事业声望</span></div>
              <div className="wg-d">像太阳正当正午，正处在最兴盛的阶段，已是顶点</div>
              <div className="wg-e">那时的他如日中天，片约不断。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>势如破竹</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">进攻推进</span></div>
              <div className="wg-d">劈竹子顺着头几节剖开，下面都跟着裂开，比喻节节胜利</div>
              <div className="wg-e">新产品上市后势如破竹，三个月拿下三成份额。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>突飞猛进</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">技术成绩</span></div>
              <div className="wg-d">进步、发展极其迅速，重在「快」</div>
              <div className="wg-e">人工智能近十年突飞猛进，边界一再被推开。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>一日千里</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">进展形势</span></div>
              <div className="wg-d">一天能走一千里，形容进展极快，偏「形势变化」</div>
              <div className="wg-e">高铁技术一日千里，十年前不敢想的速度已成日常。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>日新月异</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">面貌科技</span></div>
              <div className="wg-d">每天每月都有新变化，强调「不断出现新东西」</div>
              <div className="wg-e">这座城市的面貌日新月异，三年不回就认不出路。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>本讲词群 3（共 28 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>阪上走丸</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">形势</span></div>
              <div className="wg-d">在斜坡上滚弹丸，比喻形势发展极快（多指顺利推进）</div>
              <div className="wg-e">政策一放开，项目推进便如阪上走丸。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>日益式微</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">事物</span></div>
              <div className="wg-d">一天天衰落下去（式微＝衰落）</div>
              <div className="wg-e">随着纸媒萎缩，传统广告代理模式日益式微。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>每况愈下</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">身体状况</span></div>
              <div className="wg-d">情况越来越坏，适用范围最广</div>
              <div className="wg-e">停药之后，他的身体状况每况愈下。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>江河日下</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">风气局面</span></div>
              <div className="wg-d">像江水一天天往下流，多指风气、局面</div>
              <div className="wg-e">若不加约束，行业风气将江河日下。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>水涨船高</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">随基础提高</span></div>
              <div className="wg-d">水位涨了船也跟着高，比喻基础提高，相关事物随之提高</div>
              <div className="wg-e">观众审美提高了，作品的制作水准也水涨船高。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>波澜壮阔</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">事业历史</span></div>
              <div className="wg-d">水面辽阔、波涛汹涌，比喻声势雄壮或规模宏大</div>
              <div className="wg-e">改革开放四十余年，是一部波澜壮阔的历史。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>本讲词群 4（共 28 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>柳暗花明</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">转机</span></div>
              <div className="wg-d">绿柳成荫、繁花似锦，比喻在困境中出现转机</div>
              <div className="wg-e">几度想放弃，最后柳暗花明，拿到了关键投资。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>拨云见日</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">真相疑团</span></div>
              <div className="wg-d">拨开云雾见到太阳，比喻疑团消除、真相大白</div>
              <div className="wg-e">关键证人一出现，案情立刻拨云见日。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>明日黄花</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">过时事物</span></div>
              <div className="wg-d">重阳节后的菊花，比喻过时的事物（<b>不是「明天的希望」</b>）</div>
              <div className="wg-e">这套方案放到今天已是明日黄花，没人再提。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>强弩之末</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">力量攻势</span></div>
              <div className="wg-d">强弩射出的箭到了末程，连薄绢都穿不透，比喻力量已衰竭</div>
              <div className="wg-e">对手的攻势已是强弩之末，撑不过这个季度。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>门可罗雀</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">场所门店</span></div>
              <div className="wg-d">门前可以张网捕雀，形容来客稀少、十分冷落</div>
              <div className="wg-e">景区一过旺季便门可罗雀，商户纷纷关门。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>无人问津</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">商品作品</span></div>
              <div className="wg-d">没人过问、没人尝试，重在「没人理」</div>
              <div className="wg-e">好书若无人推介，也可能长期无人问津。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>本讲词群 5（共 28 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>惨淡经营</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">事业店铺</span></div>
              <div className="wg-d">费尽心力地谋划、经营，<b>是褒义</b></div>
              <div className="wg-e">这家书店惨淡经营二十年，终于有了起色。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>曲高和寡</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">艺术作品</span></div>
              <div className="wg-d">曲调越高深，能跟着唱的人越少，比喻作品高深、懂的人少</div>
              <div className="wg-e">这档人文节目曲高和寡，收视不高但口碑极佳。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>昙花一现</b><span className="wg-t t-bian">中偏贬</span><span className="wg-t t-obj">现象人物</span></div>
              <div className="wg-d">昙花开放时间极短，比喻美好事物出现不久就消失</div>
              <div className="wg-e">网红店若只靠流量，多半昙花一现。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>阳春白雪</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">文艺作品</span></div>
              <div className="wg-d">古代楚国的高雅乐曲，比喻高深的文艺作品（与「下里巴人」相对）</div>
              <div className="wg-e">这些诗作属阳春白雪，普通读者读来吃力。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>已在辨析组详解（点词跳转，不重复说）</BlockTitle>
            <div className="wg wg-ref">
              <div className="wg-h"><b>方兴未艾</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b2">辨析二</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>横空出世</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b2">辨析二</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>应运而生</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b2">辨析二</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>此消彼长</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b2">辨析二</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>悄然兴起</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b2">辨析二</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>粉墨登场</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b5">辨析五</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>一落千丈</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b5">辨析五</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            </Block>
      
            <div className="memo">
              多而快＝雨后春笋；突然冒出＝横空出世 / 异军突起；顺需要＝应运而生；势头正盛＝方兴未艾；到顶了＝如日中天；要落了＝明日黄花 / 强弩之末 / 日薄西山；越来越坏＝江河日下 / 每况愈下。
            </div>
      
            <Example>
              <ExampleHeader>例题 · 真题 2021 黑龙江 第 35 题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>在讨论疫情会给经济社会带来什么变化时，有人认为一些企业会____，一些行业会破茧成蝶。比如，远程协同办公软件迎来新机遇，网络视频步入发展的黄金时期，医疗健康网络应用____，因此，可以说危机与风险中也蕴含着机遇。</ExampleQuestion>
                <ExampleOptions><span>A. 振翅高飞　方兴未艾</span><span>B. 浴火重生　蓬勃发展</span><span>C. 脱胎换骨　欣欣向荣</span><span>D. 凤凰涅槃　愈挫愈勇</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：第一空与「<b>破茧成蝶</b>」并列，要表达「从困境里重生」，只有「浴火重生」贴切；「振翅高飞」只讲飞得高，不含「从难中脱出」；「脱胎换骨」侧重彻底改造，方向不对。第二空形容医疗健康网络应用在疫情中<b>旺盛发展</b>，用「蓬勃发展」。<br /><b>注意 A 项：</b>「方兴未艾」本身形容势头正盛，放在这里语义不算错，但第一空「振翅高飞」与「破茧成蝶」的「重生」语义断层——<b>双空题里两个空都要成立才叫对，一个空勉强不算赢。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
