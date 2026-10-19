import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 七、深浅 · 效果
 *
 * @returns 该节正文。
 */
export default function S8(): ReactElement {
  return (
    <>
      <Callout variant="key">
              先分清「<b>不深的四种不深</b>」：浮光掠影（印象浅）／走马观花（看得快）／蜻蜓点水（只碰一下）／浅尝辄止（主动停）。再分清「<b>配合的四种配合</b>」：相辅相成（缺一不可）／相得益彰（1+1 大于 2）／锦上添花（好上加好）／珠联璧合（美好结合）。
            </Callout>
      
            <Block>
              <BlockTitle>本讲词群 1（共 22 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>囫囵吞枣</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">读书学习</span></div>
              <div className="wg-d">把枣整个吞下去，不加分析地笼统接受</div>
              <div className="wg-e">读经典不能囫囵吞枣，一句没读懂就别翻页。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>不求甚解</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">读书理解</span></div>
              <div className="wg-d">只求懂个大概，不在字句上深究（原为褒义）</div>
              <div className="wg-e">他读书不求甚解，却自有会心之处。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>相辅相成</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">两事物</span></div>
              <div className="wg-d">互相补充、互相配合，<b>缺一不可</b></div>
              <div className="wg-e">制度与技术相辅相成，只靠一边都推不动。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>相得益彰</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">两方面</span></div>
              <div className="wg-d">互相配合，<b>各自的长处更加显现</b>（1+1 大于 2）</div>
              <div className="wg-e">水墨与留白相得益彰，画面反而更满。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>锦上添花</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">好事附加</span></div>
              <div className="wg-d">在锦上再绣花，比喻好上加好，<b>含「非必需」意味</b></div>
              <div className="wg-e">这个功能只是锦上添花，不是产品的核心。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>珠联璧合</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">人才作品</span></div>
              <div className="wg-d">珍珠联成串、美玉合在一起，比喻美好的人或事物结合</div>
              <div className="wg-e">两位大师的合作，堪称珠联璧合。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>本讲词群 2（共 22 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>互为表里</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">内外一体</span></div>
              <div className="wg-d">互相为外表和内里，关系密切、内外一体</div>
              <div className="wg-e">形式与内容互为表里，割裂开来谈都是空话。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>交相辉映</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">光景</span></div>
              <div className="wg-d">各种光亮、色彩互相映照，也指美好事物互相衬托</div>
              <div className="wg-e">岸上灯火与江面波光交相辉映。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>相映成趣</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">景物画面</span></div>
              <div className="wg-d">互相衬托，显得更有情趣，多用于景物画面</div>
              <div className="wg-e">白墙黛瓦与远处青山相映成趣。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>双峰并峙</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">并立</span></div>
              <div className="wg-d">两座高峰相对而立，比喻两种事物并立、难分高下</div>
              <div className="wg-e">唐诗与宋词双峰并峙，各有各的江山。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>并行不悖</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">两件事</span></div>
              <div className="wg-d">同时进行而互不冲突，多用于抽象事物</div>
              <div className="wg-e">保护与开发可以并行不悖，关键在怎么定规矩。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>齐头并进</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">工作指标</span></div>
              <div className="wg-d">几个方面同时进行，强调「进度一致」</div>
              <div className="wg-e">经济与民生要齐头并进，不能一条腿长一条腿短。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>本讲词群 3（共 22 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>双管齐下</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">措施手段</span></div>
              <div className="wg-d">两支笔同时下笔，比喻两种办法同时使用</div>
              <div className="wg-e">治超要双管齐下，既查车也查源头。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>并驾齐驱</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">水平实力</span></div>
              <div className="wg-d">几匹马并排拉车，不分先后地前进，强调「水平相当」</div>
              <div className="wg-e">两家企业在新能源赛道上并驾齐驱。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>一马当先</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">人·带头</span></div>
              <div className="wg-d">策马走在最前面，比喻起带头作用</div>
              <div className="wg-e">他在技术攻关中一马当先，连着熬了七个通宵。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>得不偿失</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">得失代价</span></div>
              <div className="wg-d">得到的抵不上失去的，强调算总账不划算</div>
              <div className="wg-e">为省成本偷工减料，最终得不偿失。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>事倍功半</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">效率</span></div>
              <div className="wg-d">费力大而收效小（与「事半功倍」相对）</div>
              <div className="wg-e">方法不对，往往事倍功半。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>事半功倍</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">效率</span></div>
              <div className="wg-d">费力小而收效大</div>
              <div className="wg-e">把流程理顺，往往事半功倍。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>本讲词群 4（共 22 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>徒劳无功</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">成效</span></div>
              <div className="wg-d">白费力气，没有成效</div>
              <div className="wg-e">没有数据支撑的争论，最后徒劳无功。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>卓有成效</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">效果</span></div>
              <div className="wg-d">有突出的效果和成绩</div>
              <div className="wg-e">这项帮扶措施卓有成效，两年内全部脱贫。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>行之有效</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">办法制度</span></div>
              <div className="wg-d">实行起来有成效</div>
              <div className="wg-e">这套值班制度行之有效，沿用至今。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>立竿见影</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">效果快</span></div>
              <div className="wg-d">立刻见到效果，中性，强调效果快（见辨析二）</div>
              <div className="wg-e">这项政策的效果立竿见影，当月投诉量就降了四成。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>已在辨析组详解（点词跳转，不重复说）</BlockTitle>
            <div className="wg wg-ref">
              <div className="wg-h"><b>浮光掠影</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b1">辨析一</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>走马观花</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b1">辨析一</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>蜻蜓点水</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b1">辨析一</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>浅尝辄止</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b1">辨析一</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>举一反三</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b6">辨析六</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>融会贯通</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b6">辨析六</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>触类旁通</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b6">辨析六</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>本末倒置</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b5">辨析五</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>舍本逐末</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b5">辨析五</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>喧宾夺主</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b5">辨析五</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>相辅相成</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b5">辨析五</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            <div className="wg wg-ref">
              <div className="wg-h"><b>相得益彰</b><span className="wg-t t-zhong">已详解</span></div>
              <div className="wg-d">该词已并入 <a href="#b5">辨析五</a>，对照辨析表与例句，此处不再重复。</div>
            </div>
            </Block>
      
            <div className="memo">
              印象浅＝浮光掠影；看得快＝走马观花；只碰一下＝蜻蜓点水；主动停＝浅尝辄止；缺一不可＝相辅相成；1+1&gt;2＝相得益彰；好上加好＝锦上添花；美好结合＝珠联璧合。
            </div>
      
            <Example>
              <ExampleHeader>例题 · 真题改编（相辅相成 / 相得益彰）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>如今的辽河老街，新老建筑____，自然环境舒适宜人，戏院、茶馆、客栈、咖啡馆、古玩店应有尽有，成了营口对外展示形象的最亮丽的名片。</ExampleQuestion>
                <ExampleOptions><span>A. 相伴而生</span><span>B. 相差无几</span><span>C. 相得益彰</span><span>D. 相辅相成</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：空处要表达「新老建筑<b>配合之后效果更好</b>」，正是「相得益彰」（1+1 大于 2）。「相辅相成」只说明<b>互相配合、缺一不可</b>，不体现「结合后更好」的结果；「相伴而生」指一起产生，新建筑和老建筑不可能同时诞生，事实错；「相差无几」指彼此差别不大，与「配合」无关。<b>一句话锁死：相辅相成＝缺一不可，相得益彰＝效果更好。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
