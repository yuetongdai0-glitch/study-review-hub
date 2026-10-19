import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 二十六、品行 · 是非
 *
 * @returns 该节正文。
 */
export default function S27(): ReactElement {
  return (
    <>
      <Callout variant="key">
              四对最易混：<b>耸人听闻 / 骇人听闻</b>（前者「故意夸大吓人」，后者「事实本身惊人」）；<b>不容置喙 / 不容置疑</b>（前者「不许插嘴」，后者「不许怀疑」）；<b>李代桃僵 / 张冠李戴</b>（前者「代人受过」，后者「弄错对象」）；<b>弹冠相庆 / 额手相庆</b>（前者「坏人得势互相庆贺」，贬；后者「众人庆幸」，中性）。
            </Callout>
      
            <Block>
              <BlockTitle>词群 1（本讲共 45 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>肆无忌惮</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">妄为</span></div>
              <div className="wg-d">毫无顾忌、任意妄为（惮＝怕）</div>
              <div className="wg-e">有人肆无忌惮地往河里排污水。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>肆意妄为</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">妄为</span></div>
              <div className="wg-d">毫无顾忌地胡作非为</div>
              <div className="wg-e">权力一旦失去监督，就容易肆意妄为。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>刨根问底</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">追问</span></div>
              <div className="wg-d">追问根源、追究到底</div>
              <div className="wg-e">孩子爱刨根问底，是好事。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>顺藤摸瓜</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">追查</span></div>
              <div className="wg-d">顺着藤蔓找瓜，比喻<b>顺着线索追查</b></div>
              <div className="wg-e">警方顺藤摸瓜，端掉了整个窝点。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>披沙拣金</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">筛选</span></div>
              <div className="wg-d">拨开沙子挑金子，比喻<b>从大量材料中挑选精华</b></div>
              <div className="wg-e">从三千份档案里披沙拣金，找出十七条线索。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>捕风捉影</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">无根据</span></div>
              <div className="wg-d">捕风、捉影子，比喻<b>说话做事没有事实根据</b></div>
              <div className="wg-e">捕风捉影的爆料，伤了无辜者。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 2（本讲共 45 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>妄自菲薄</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">看轻自己</span></div>
              <div className="wg-d">过分看轻自己（菲薄＝轻视）</div>
              <div className="wg-e">不必妄自菲薄，我们的基础并不差。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>自惭形秽</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">惭愧</span></div>
              <div className="wg-d">因不如别人而感到惭愧（形秽＝容貌丑陋）</div>
              <div className="wg-e">站在这些大家面前，他不免自惭形秽。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>自暴自弃</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">放弃自己</span></div>
              <div className="wg-d">自己糟蹋自己、自己放弃自己</div>
              <div className="wg-e">一次失败就自暴自弃，太可惜。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>自怨自艾</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">埋怨自己</span></div>
              <div className="wg-d">原指悔恨自己的错误并改正，现多指<b>一味埋怨自己</b></div>
              <div className="wg-e">事已至此，自怨自艾没有用。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>怨天尤人</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">推责</span></div>
              <div className="wg-d">抱怨天、责怪别人（尤＝责怪）</div>
              <div className="wg-e">出了问题先怨天尤人，从不反思自己。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>夜郎自大</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">自大</span></div>
              <div className="wg-d">夜郎国君主自以为大，比喻<b>妄自尊大</b></div>
              <div className="wg-e">稍有成绩就夜郎自大，迟早栽跟头。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 3（本讲共 45 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>盛气凌人</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">骄横</span></div>
              <div className="wg-d">以骄横的气势压人</div>
              <div className="wg-e">他说话盛气凌人，谁都不愿配合。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>弹冠相庆</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">坏人庆贺</span></div>
              <div className="wg-d">弹去帽子上的灰互相庆贺，指<b>坏人因即将得势而庆贺</b>（贬）</div>
              <div className="wg-e">案件尚未了结，几个同伙已在弹冠相庆。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>额手相庆</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">众人庆幸</span></div>
              <div className="wg-d">把手放在额上表示庆幸，指<b>众人庆幸</b>（中性）</div>
              <div className="wg-e">洪水退去，村民额手相庆。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>优胜劣汰</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">竞争规律</span></div>
              <div className="wg-d">优秀的胜出、低劣的被淘汰</div>
              <div className="wg-e">市场竞争优胜劣汰，本就残酷。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>弱肉强食</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">丛林法则</span></div>
              <div className="wg-d">弱者被强者吞食，形容<b>弱肉强食的丛林法则</b></div>
              <div className="wg-e">把国际关系看成弱肉强食，是危险的误判。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>百家争鸣</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">学术繁荣</span></div>
              <div className="wg-d">各家学派自由争论，比喻<b>学术、艺术上不同派别自由争论</b></div>
              <div className="wg-e">春秋战国百家争鸣，思想空前活跃。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 4（本讲共 45 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>百花齐放</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">文艺繁荣</span></div>
              <div className="wg-d">各种花同时开放，比喻<b>不同风格、形式自由发展</b></div>
              <div className="wg-e">文艺创作要百花齐放。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>耸人听闻</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">故意夸大</span></div>
              <div className="wg-d">故意说夸大或惊奇的话使人震惊（<b>多指「故意夸大」</b>）</div>
              <div className="wg-e">标题耸人听闻，内容却站不住脚。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>骇人听闻</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">事实惊人</span></div>
              <div className="wg-d">使人听了非常吃惊（<b>多指事实本身惊人、恶劣</b>）</div>
              <div className="wg-e">这起案件的细节骇人听闻。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>不易之论</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">不可改</span></div>
              <div className="wg-d">不可更改的言论（易＝更改）</div>
              <div className="wg-e">「实践出真知」是不易之论。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>不刊之论</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">精当</span></div>
              <div className="wg-d">不可删改的言论（刊＝削除），形容<b>言论精当</b></div>
              <div className="wg-e">这篇文章被学界誉为不刊之论。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>朝乾夕惕</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">勤谨</span></div>
              <div className="wg-d">从早到晚勤奋谨慎、不敢懈怠</div>
              <div className="wg-e">他为这项工程朝乾夕惕，三年没休过假。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 5（本讲共 45 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>夕惕若厉</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">戒惧</span></div>
              <div className="wg-d">到了晚上仍警惕戒惧，像有危险一样</div>
              <div className="wg-e">身处要位，当夕惕若厉。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>戎马倥偬</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">军务忙</span></div>
              <div className="wg-d">军务繁忙、战事紧迫（倥偬＝事多）</div>
              <div className="wg-e">他戎马倥偬半生，很少回家。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>厉兵秣马</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">备战</span></div>
              <div className="wg-d">磨好兵器、喂饱战马，比喻<b>做好战斗准备</b></div>
              <div className="wg-e">大赛在即，各队都在厉兵秣马。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>不容置喙</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">不许插嘴</span></div>
              <div className="wg-d">不允许插嘴（喙＝嘴）</div>
              <div className="wg-e">这是专业判断，外行不容置喙。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>不容置疑</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">不许怀疑</span></div>
              <div className="wg-d">不允许怀疑，形容<b>绝对可信</b></div>
              <div className="wg-e">证据链完整，结论不容置疑。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>李代桃僵</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">代人受过</span></div>
              <div className="wg-d">李树代替桃树受虫蛀，比喻<b>代人受过</b>或互相顶替</div>
              <div className="wg-e">他替朋友顶了这桩事，是李代桃僵。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 6（本讲共 45 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>张冠李戴</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">弄错对象</span></div>
              <div className="wg-d">把张家的帽子戴到李家头上，比喻<b>弄错了对象或事实</b></div>
              <div className="wg-e">把两件事的年份张冠李戴，闹了笑话。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>渊渟岳峙</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">沉稳</span></div>
              <div className="wg-d">像深潭一样沉静、像高山一样耸立，形容<b>人沉稳庄重</b></div>
              <div className="wg-e">他站在那里渊渟岳峙，一句话就稳住了场面。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>不分畛域</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">不分界限</span></div>
              <div className="wg-d">不分界限、不分彼此（畛域＝界限）</div>
              <div className="wg-e">两地协作不分畛域，数据互通。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>毛举细故</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">烦琐</span></div>
              <div className="wg-d">烦琐地列举细小的事情（毛举＝列举细微）</div>
              <div className="wg-e">汇报毛举细故，反而看不清重点。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>吉光片羽</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">残而珍贵</span></div>
              <div className="wg-d">神兽吉光身上的一片羽毛，比喻<b>残存的珍贵文物或零星材料</b></div>
              <div className="wg-e">敦煌残卷虽只吉光片羽，却价值连城。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>钟灵毓秀</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">地灵人杰</span></div>
              <div className="wg-d">聚集天地灵气、孕育优秀人才（毓＝养育）</div>
              <div className="wg-e">这片钟灵毓秀之地，出了不少学者。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 7（本讲共 45 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>瑕瑜互见</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">优劣并存</span></div>
              <div className="wg-d">优点和缺点同时存在（瑕＝玉上斑点，瑜＝美玉）</div>
              <div className="wg-e">这部作品瑕瑜互见，但方向值得肯定。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>沉吟章句</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">推敲字句</span></div>
              <div className="wg-d">原指推敲诗文的字句，后多指<b>写作时斟酌字句</b></div>
              <div className="wg-e">他沉吟章句，一句话改了半小时。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>太阿倒持</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">授人以柄</span></div>
              <div className="wg-d">倒拿着宝剑，把剑柄交给别人，比喻<b>把权力交给别人、反受其害</b></div>
              <div className="wg-e">把核心数据交给外部平台，无异于太阿倒持。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>同组易混词（这几个也在别处讲过，这里再讲一遍，就地记）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>粉墨登场</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">坏人上台</span></div>
              <div className="wg-d">化好妆上台演戏，比喻<b>坏人登上政治舞台</b>，或含讥讽。</div>
              <div className="wg-e">每逢选举，各种投机政客便粉墨登场。</div>
              <div className="wg-cmp">同组区别：重「乔装上台」（贬）；「横空出世」是褒义，「应运而生」是顺应需要（<a href="#b2">见辨析二</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>曲高和寡</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">艺术作品</span></div>
              <div className="wg-d">曲调越高深，能跟着唱的人越少，比喻作品高深、懂的人少</div>
              <div className="wg-e">这档人文节目曲高和寡，收视不高但口碑极佳。</div>
              <div className="wg-cmp">同组还有：层出不穷 / 风起云涌 / 雨后春笋。整组对照见 <a href="#s5">第 5 讲</a>（此处再讲一遍，省得来回翻）。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>阳春白雪</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">文艺作品</span></div>
              <div className="wg-d">古代楚国的高雅乐曲，比喻高深的文艺作品（与「下里巴人」相对）</div>
              <div className="wg-e">这些诗作属阳春白雪，普通读者读来吃力。</div>
              <div className="wg-cmp">同组还有：层出不穷 / 风起云涌 / 雨后春笋。整组对照见 <a href="#s5">第 5 讲</a>（此处再讲一遍，省得来回翻）。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>移花接木</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">见辨析</span></div>
              <div className="wg-d">暗中调换对象</div>
              <div className="wg-e">他把别人的实验数据移花接木到自己论文里，很快被查了出来。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>偷梁换柱</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">合同方案</span></div>
              <div className="wg-d">暗中改变事物的内容、性质，比「移花接木」更重，含欺骗。</div>
              <div className="wg-e">合同里偷梁换柱，把「保修三年」改成了「保修三个月」。</div>
              <div className="wg-cmp">同组区别：重「改内容性质」；「移花接木」重「换对象」，「改头换面」只换外表（<a href="#b3">见辨析三</a>）</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>咎由自取</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">自招</span></div>
              <div className="wg-d">罪过、灾祸是自己招来的</div>
              <div className="wg-e">被骗的钱追不回来，也算咎由自取。</div>
              <div className="wg-cmp">同组还有：沽名钓誉 / 附庸风雅 / 独善其身。整组对照见 <a href="#s12">第 12 讲</a>（此处再讲一遍，省得来回翻）。</div>
            </div>
            </Block>
      
            <div className="memo">
              故意夸大＝耸人听闻；事实惊人＝骇人听闻；不许插嘴＝不容置喙；不许怀疑＝不容置疑；代人受过＝李代桃僵；弄错对象＝张冠李戴；坏人庆贺＝弹冠相庆（贬）；众人庆幸＝额手相庆（中）。
            </div>
      
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某自媒体把一起普通的食物中毒说成「全城饭店都在投毒」，这种____的标题，造成了严重的社会恐慌。</ExampleQuestion>
                <ExampleOptions><span>A. 毛骨悚然</span><span>B. 骇人听闻</span><span>C. 耸人听闻</span><span>D. 危言耸听</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>把普通的说成「全城投毒」</b>」是明显的<b>故意夸大</b>，选「耸人听闻」。「骇人听闻」指<b>事实本身惊人、恶劣</b>，不含「故意夸大」这层；「危言耸听」虽也指夸大吓人，但多作谓语（危言耸听），修饰「标题」不如「耸人听闻」常用；「毛骨悚然」形容<b>人的恐惧感受</b>，不能修饰标题。<b>一句话锁死：故意编的＝耸人听闻，真发生的＝骇人听闻。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
