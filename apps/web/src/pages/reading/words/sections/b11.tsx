import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析十一 · 传播与名气
 *
 * @returns 该节正文。
 */
export default function S47(): ReactElement {
  return (
    <>
      <Callout variant="key">
              「<b>传开</b>」的四种路径：不胫而走（消息自己跑，没腿也能跑）；不翼而飞（东西不见了 / 消息传得极快）；风靡一时（一时期流行）；蔚然成风（成了好风气）。<br />「<b>有名</b>」的四种味道：如雷贯耳（客套、早就听说）；闻名遐迩（远近都知道）；名噪一时（一时很响）；炙手可热（权势盛，贬）。
            </Callout>
      
            <Block>
              <BlockTitle>9. 不胫而走 / 不翼而飞</BlockTitle>
              <div className="diff"><b>一句话区别：</b>不胫而走＝<b>没有腿却跑得飞快</b>，专指<b>消息、传闻</b>迅速传开；不翼而飞＝<b>没有翅膀却飞走了</b>，① 指<b>东西突然不见</b> ② 也指言论传得极快。看到「消息、传闻」选前者，看到「财物、物品丢了」选后者。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>不胫而走</td><td>消息、传闻迅速传播</td><td>胫＝小腿，无腿而跑</td></tr>
                <tr><td>不翼而飞</td><td>① 东西突然不见 ② 言论迅速传开</td><td>翼＝翅膀，无翅而飞</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>不胫而走</b>　新政策刚一发布，消息便<b>不胫而走</b>。</div>
                <div><b>不翼而飞</b>　放在办公室的手表，一转眼<b>不翼而飞</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>库里那批钢材一夜之间____，账面上却没有任何出库记录。</ExampleQuestion>
                <ExampleOptions><span>A. 蔚然成风</span><span>B. 不胫而走</span><span>C. 不翼而飞</span><span>D. 风靡一时</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中对象是「<b>钢材</b>」，是<b>实物不见了</b>，选「不翼而飞」。「不胫而走」只能用于<b>消息、传闻</b>的传播，用于实物属对象误用——这是最高频的坑；「风靡一时」指流行；「蔚然成风」指形成风气。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>10. 风靡一时 / 蔚然成风 / 大行其道</BlockTitle>
              <div className="diff"><b>一句话区别：</b>风靡一时＝<b>一个时期内非常流行</b>（中性，可指歌曲、服饰）；蔚然成风＝<b>形成良好风气</b>（褒，只用于好事）；大行其道＝<b>某种风气、做法广泛流行</b>（多含贬义）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>风靡一时</td><td>一时流行（中性）</td><td>歌曲、服饰、游戏</td></tr>
                <tr><td>蔚然成风</td><td>形成良好风气（褒）</td><td>志愿服务、读书</td></tr>
                <tr><td>大行其道</td><td>广泛流行（多贬）</td><td>「流量至上」、投机炒作</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>风靡一时</b>　这首歌曾<b>风靡一时</b>，街头巷尾都在放。</div>
                <div><b>蔚然成风</b>　志愿服务在社区<b>蔚然成风</b>。</div>
                <div><b>大行其道</b>　「流量至上」一度<b>大行其道</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>那几年，「××速成」「七天入门」之类的课程在平台上____，报名的人排到几万号，学完却什么也没剩下。</ExampleQuestion>
                <ExampleOptions><span>A. 风靡一时</span><span>B. 深入人心</span><span>C. 蔚然成风</span><span>D. 大行其道</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：空处对象是「<b>速成课</b>」这类<b>不该被推崇的东西</b>，且后文「学完什么也没剩下」是否定评价，选带贬义的「大行其道」。「蔚然成风」是<b>褒义</b>，只能用于良好风气；「风靡一时」虽中性，但<b>不含贬义</b>，与后文的批判语气不合；「深入人心」是褒义。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>11. 道听途说 / 街谈巷议 / 以讹传讹</BlockTitle>
              <div className="diff"><b>一句话区别：</b>道听途说＝<b>路上听来的（不可靠）</b>，含「不该轻信」；街谈巷议＝<b>大街小巷的议论</b>（中性，只讲「民间在谈」）；以讹传讹＝<b>把错的越传越错</b>（强调「越传越错」的过程）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>道听途说</td><td>传闻没有根据</td><td>贬，含「不可信」</td></tr>
                <tr><td>街谈巷议</td><td>民间的议论</td><td>中性，只讲议论本身</td></tr>
                <tr><td>以讹传讹</td><td>错误信息越传越错</td><td>强调「传」的过程</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>道听途说</b>　<b>道听途说</b>的小道消息，别当依据。</div>
                <div><b>街谈巷议</b>　这项新政成了<b>街谈巷议</b>的话题。</div>
                <div><b>以讹传讹</b>　截图被反复转发，<b>以讹传讹</b>，最后面目全非。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>一条「某地要建垃圾焚烧厂」的截图在群里转了三轮，越传越离谱，最后成了「全城停水」——这就是典型的____。</ExampleQuestion>
                <ExampleOptions><span>A. 以讹传讹</span><span>B. 街谈巷议</span><span>C. 无中生有</span><span>D. 道听途说</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中「<b>转了三轮</b>」「<b>越传越离谱</b>」明确强调<b>传播过程中不断失真</b>，选「以讹传讹」。「道听途说」只说明<b>来源不可靠</b>，不含「越传越错」；「街谈巷议」是中性，只讲「大家在议论」；「无中生有」指<b>凭空捏造</b>，而这里是「有原型、传变形了」。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>12. 名噪一时 / 闻名遐迩 / 如雷贯耳 / 炙手可热</BlockTitle>
              <div className="diff"><b>一句话区别：</b>名噪一时＝<b>一时名声很大</b>（可能已过气）；闻名遐迩＝<b>远近都知道</b>（持续、褒）；如雷贯耳＝<b>早就听说您的大名</b>（多作客套）；炙手可热＝<b>权势大、气焰盛</b>（贬，<b>不是「热门」</b>）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>名噪一时</td><td>一时名声很大</td><td>中性，含「已过去」</td></tr>
                <tr><td>闻名遐迩</td><td>远近闻名（持续）</td><td>褒，多指地方、品牌</td></tr>
                <tr><td>如雷贯耳</td><td>名声极大（多作客套）</td><td>用于当面称呼对方</td></tr>
                <tr><td>炙手可热</td><td>权势大、气焰盛（贬）</td><td>不是「抢手、热门」</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>名噪一时</b>　这部话剧让他<b>名噪一时</b>。</div>
                <div><b>闻名遐迩</b>　这个小镇因一碗面<b>闻名遐迩</b>。</div>
                <div><b>如雷贯耳</b>　您的大名<b>如雷贯耳</b>，今日才得一见。</div>
                <div><b>炙手可热</b>　他当年<b>炙手可热</b>，门前车马不断。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>这款新手机上市即被抢购，黄牛加价两千仍有人买，一时成了市场上最____的机型。</ExampleQuestion>
                <ExampleOptions><span>A. 炙手可热</span><span>B. 名噪一时</span><span>C. 闻名遐迩</span><span>D. 如雷贯耳</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中说的是「<b>抢手、热门、人人想买</b>」，虽然「炙手可热」的本义是「权势大气焰盛」（贬），但在当代用法中「商品抢手」已是很常见的引申，本题四个选项里只有它能表达「热度极高」。「名噪一时」侧重<b>名声大</b>，不指销量；「闻名遐迩」是<b>地方、品牌</b>的持续声誉；「如雷贯耳」是<b>客套语</b>，不能形容商品。<b>提示：考试中若同时出现「炙手可热」与「门庭若市 / 供不应求」，优先选后者——「炙手可热」用于人（权势）更稳。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
    </>
  )
}
