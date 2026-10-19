import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 十七、风行 · 传播
 *
 * @returns 该节正文。
 */
export default function S18(): ReactElement {
  return (
    <>
      <Callout variant="key">
              这一讲的「名声」有<b>正反两条线</b>：正线——闻名遐迩（远近闻名）／名噪一时（一时出名）／如雷贯耳（早就听说）／脍炙人口（人人称道）／深入人心（被接受）；反线——<b>甚嚣尘上</b>（坏言论嚣张，贬）／<b>炙手可热</b>（权势盛，贬）／<b>趋之若鹜</b>（争相追逐不好的东西，贬）／<b>过江之鲫</b>（数量多而杂，贬）。
            </Callout>
      
            <Block>
              <BlockTitle>词群 1（本讲共 25 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>蔚然成风</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">良好风气</span></div>
              <div className="wg-d">某事物逐渐发展、盛行，形成良好风气（褒）</div>
              <div className="wg-e">志愿服在社区蔚然成风。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>风靡一时</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">流行一时</span></div>
              <div className="wg-d">在一个时期内非常流行</div>
              <div className="wg-e">这首歌曾风靡一时，街头巷尾都在放。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>如雷贯耳</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">名声大</span></div>
              <div className="wg-d">像雷声穿过耳朵，形容名声极大（多用于客套）</div>
              <div className="wg-e">您的大名如雷贯耳，今日才得一见。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>炙手可热</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">权势盛</span></div>
              <div className="wg-d">手一靠近就觉得烫，比喻<b>权势大、气焰盛</b>（贬）</div>
              <div className="wg-e">他当年炙手可热，门前车马不断。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>名噪一时</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">一时出名</span></div>
              <div className="wg-d">在一个时期内名声很大</div>
              <div className="wg-e">这部话剧让他名噪一时。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>闻名遐迩</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">远近闻名</span></div>
              <div className="wg-d">远近都闻名（遐＝远，迩＝近）</div>
              <div className="wg-e">这个小镇因一碗面闻名遐迩。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 2（本讲共 25 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>大行其道</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">盛行</span></div>
              <div className="wg-d">某种观点、风气广泛流行（多含贬义）</div>
              <div className="wg-e">「流量至上」一度大行其道。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>甚嚣尘上</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">坏言论盛</span></div>
              <div className="wg-d">人声喧哗、尘土飞扬，形容<b>坏言论嚣张</b>（贬）</div>
              <div className="wg-e">「读书无用」的论调一度甚嚣尘上。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>煊赫一时</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">气势盛</span></div>
              <div className="wg-d">在一个时期内名声、气势很盛（煊赫＝声势盛大）</div>
              <div className="wg-e">这个家族曾煊赫一时，如今已无人提起。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>过江之鲫</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">多而杂</span></div>
              <div className="wg-d">像过江的鲫鱼那么多，比喻<b>数量多而杂乱</b>（贬）</div>
              <div className="wg-e">短视频博主多如过江之鲫，能活下来的很少。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>趋之若鹜</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">争相追逐</span></div>
              <div className="wg-d">像鸭子一样成群跑过去，比喻<b>争相追逐不好的事物</b>（贬）</div>
              <div className="wg-e">一些人对此类「速成班」趋之若鹜。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>名声大噪</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">名声传开</span></div>
              <div className="wg-d">名声广泛地传扬开去（噪＝传扬）</div>
              <div className="wg-e">这家小店因一则视频名声大噪。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 3（本讲共 25 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>以讹传讹</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">传错</span></div>
              <div className="wg-d">把本来就不正确的话又错误地传出去，越传越错</div>
              <div className="wg-e">截图被反复转发，以讹传讹，最后面目全非。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>无孔不入</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">渗透</span></div>
              <div className="wg-d">没有孔不钻进去，比喻<b>利用一切机会渗透</b>（贬）</div>
              <div className="wg-e">商业广告无孔不入，连电梯里都不放过。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>铺天盖地</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">来势猛</span></div>
              <div className="wg-d">遮住天、盖住地，形容来势猛、数量多、声势大</div>
              <div className="wg-e">寒潮预警铺天盖地，手机上全是推送。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>道听途说</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">传闻</span></div>
              <div className="wg-d">路上听来、路上传说，指没有根据的传闻</div>
              <div className="wg-e">道听途说的小道消息，别当依据。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>街谈巷议</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">民间议论</span></div>
              <div className="wg-d">大街小巷里人们的谈论，多指民间的议论</div>
              <div className="wg-e">这项新政成了街谈巷议的话题。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>稗官野史</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">非正史</span></div>
              <div className="wg-d">古代小官所记的轶闻，泛指非正史的记载</div>
              <div className="wg-e">这段故事只见于稗官野史，正史无载。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 4（本讲共 25 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>逸闻轶事</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">轶事</span></div>
              <div className="wg-d">散失流传、不见于正式记载的事迹</div>
              <div className="wg-e">书里收了不少名人的逸闻轶事。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>脍炙人口</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">人人称道</span></div>
              <div className="wg-d">像烤肉一样人人爱吃，比喻作品<b>人人称道传诵</b></div>
              <div className="wg-e">「床前明月光」是脍炙人口的名句。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>津津乐道</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">乐于谈论</span></div>
              <div className="wg-d">很有兴趣地谈论，<b>后面多接「于」或直接带宾语</b></div>
              <div className="wg-e">老街坊至今仍津津乐道那场比赛。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>喜闻乐见</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">群众欢迎</span></div>
              <div className="wg-d">喜欢听、乐意看，指深受群众欢迎</div>
              <div className="wg-e">用群众喜闻乐见的形式讲政策。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>深入人心</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">被接受</span></div>
              <div className="wg-d">思想、理论、主张被广泛接受</div>
              <div className="wg-e">绿色低碳理念已深入人心。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>同组易混词（这几个也在别处讲过，这里再讲一遍，就地记）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>家喻户晓</b><span className="wg-t t-bao">褒</span><span className="wg-t t-obj">广为人知</span></div>
              <div className="wg-d">家家户户都知道，指<b>名声、事迹广为人知</b></div>
              <div className="wg-e">这位劳模的事迹家喻户晓。</div>
              <div className="wg-cmp">同组还有：举足轻重 / 无足轻重 / 细枝末节。整组对照见 <a href="#s20">第 20 讲</a>（此处再讲一遍，省得来回翻）。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>妇孺皆知</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">流传广</span></div>
              <div className="wg-d">妇女小孩都知道，形容<b>流传极广</b></div>
              <div className="wg-e">「粒粒皆辛苦」妇孺皆知。</div>
              <div className="wg-cmp">同组还有：举足轻重 / 无足轻重 / 细枝末节。整组对照见 <a href="#s20">第 20 讲</a>（此处再讲一遍，省得来回翻）。</div>
            </div>
            </Block>
      
            <div className="memo">
              名声大＝如雷贯耳 / 闻名遐迩 / 名噪一时；人人称道＝脍炙人口；被接受＝深入人心；贬线四条：甚嚣尘上（坏言论） / 炙手可热（权势） / 趋之若鹜（追坏东西） / 过江之鲫（多而杂）。
            </div>
      
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>那几年，「××速成」「七天入门」之类的课程在平台上____，报名的人排到几万号，学完却什么也没剩下。</ExampleQuestion>
                <ExampleOptions><span>A. 蔚然成风</span><span>B. 大行其道</span><span>C. 脍炙人口</span><span>D. 深入人心</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：空处的对象是「<b>速成课</b>」这类<b>不该被推崇的东西</b>，且后文「学完什么也没剩下」是明显否定，要选带贬义的「大行其道」。「蔚然成风」是<b>褒义</b>，只用于良好风气；「脍炙人口」专指<b>诗文作品人人称道</b>，对象不对；「深入人心」指<b>正确的主张被广泛接受</b>，也是褒义。<b>这一空只要看出「速成课」是负面对象，就能靠感情色彩直接排掉三个。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
