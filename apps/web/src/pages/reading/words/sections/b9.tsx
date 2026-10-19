import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析九 · 虚词与否定
 *
 * @returns 该节正文。
 */
export default function S45(): ReactElement {
  return (
    <>
      <Callout variant="key">
              这一组全是「<b>一字之差</b>」的虚词与否定结构，是逻辑填空里最容易「看着都对」的地方。判据不是意思，而是<b>后面接什么</b>：不以为然接「看法」，不以为意接「事情」；从而接「结果」，进而接「进一步」；不止接「数量」，不只接「范围」。
            </Callout>
      
            <Block>
              <BlockTitle>1. 不以为然 / 不以为意 / 不以为奇</BlockTitle>
              <div className="diff"><b>一句话区别：</b>不以为然＝<b>不认为对</b>（针对观点）；不以为意＝<b>不放在心上</b>（针对事情的重要性）；不以为奇＝<b>不觉得奇怪</b>（针对现象的稀奇度）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>不以为然</td><td>不认为是对的，含轻视</td><td>针对「观点、建议」</td></tr>
                <tr><td>不以为意</td><td>不把它放在心上，不重视</td><td>针对「风险、提醒」</td></tr>
                <tr><td>不以为奇</td><td>不觉得奇怪，见惯了</td><td>针对「怪现象」</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>不以为然</b>　他对「加班就是敬业」的说法<b>不以为然</b>。</div>
                <div><b>不以为意</b>　安全员三次提醒，他都<b>不以为意</b>，最终酿成事故。</div>
                <div><b>不以为奇</b>　在牧区，孩子七八岁就会骑马，大家<b>不以为奇</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>安全员前后提醒了三次，他都____，觉得「哪有那么巧」，结果脚手架真的塌了。</ExampleQuestion>
                <ExampleOptions><span>A. 不屑一顾</span><span>B. 不以为然</span><span>C. 不以为意</span><span>D. 不以为奇</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中是「<b>提醒了三次</b>」而<b>没当回事</b>，落点在「不重视」，选「不以为意」。「不以为然」要求有<b>一个明确的观点</b>被否定（如「他觉得加班就是敬业」这种说法）；「不以为奇」是「不觉得奇怪」，句中并无「奇怪」的判断；「不屑一顾」程度过重，含<b>轻蔑</b>。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>2. 不厌其烦 / 不胜其烦 / 乐此不疲</BlockTitle>
              <div className="diff"><b>一句话区别：</b>不厌其烦＝<b>不嫌麻烦</b>（褒，主语是做事的人）；不胜其烦＝<b>烦得受不了</b>（贬，主语是被烦的人）；乐此不疲＝<b>乐在其中不知疲倦</b>（褒，强调兴趣）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>不厌其烦</td><td>不嫌烦琐，耐心地做</td><td>多作状语，褒</td></tr>
                <tr><td>不胜其烦</td><td>烦琐得使人受不了</td><td>多作谓语，贬</td></tr>
                <tr><td>乐此不疲</td><td>乐于做某事而不觉疲倦</td><td>强调兴趣驱动</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>不厌其烦</b>　她<b>不厌其烦</b>地一遍遍教老人用手机。</div>
                <div><b>不胜其烦</b>　推销电话一天七八个，他不<b>胜其烦</b>，索性换了号。</div>
                <div><b>乐此不疲</b>　他修了三十年钟表，至今<b>乐此不疲</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>这档节目把同样的知识点讲了五遍，观众早已____，弹幕里全是「快进」。</ExampleQuestion>
                <ExampleOptions><span>A. 乐此不疲</span><span>B. 不厌其详</span><span>C. 不厌其烦</span><span>D. 不胜其烦</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：句中「<b>讲了五遍</b>」「<b>弹幕全是快进</b>」说明观众<b>已经烦得受不了</b>，选「不胜其烦」。「不厌其烦」是<b>褒义</b>，主语应是「耐心讲解的人」，不能形容观众的反应；「乐此不疲」指<b>自己乐在其中</b>，与「快进」矛盾。<b>这一组看主语：讲的人不厌其烦，听的人不胜其烦。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>3. 从而 / 进而 / 因而</BlockTitle>
              <div className="diff"><b>一句话区别：</b>从而＝<b>因此（引出结果）</b>；进而＝<b>进一步（在前一步基础上再往前）</b>；因而＝<b>因为这样所以（纯因果）</b>。「进而」必须<b>有两步动作</b>，「从而 / 因而」只需一个结果。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>从而</td><td>上文是条件/手段，下文是结果</td><td>常与「通过……」「以……」呼应</td></tr>
                <tr><td>进而</td><td>在前一动作基础上更进一步</td><td>前后必须是两个递进的动作</td></tr>
                <tr><td>因而</td><td>纯因果，相当于「因此」</td><td>可单独用于句首</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>从而</b>　通过技能培训，<b>从而</b>提高了就业率。</div>
                <div><b>进而</b>　先摸清底数，<b>进而</b>制定分类方案。</div>
                <div><b>因而</b>　数据缺失，<b>因而</b>结论并不可靠。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>先把全村的闲置宅基地登记造册，____引入设计团队做整体规划，最后才谈招商。</ExampleQuestion>
                <ExampleOptions><span>A. 进而</span><span>B. 因而</span><span>C. 反而</span><span>D. 从而</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中明确有<b>三个先后步骤</b>（登记造册 → 引入团队 → 谈招商），空处要表达「<b>在此基础上更进一步</b>」，选「进而」。「从而」后面接的是<b>结果</b>，不是下一步动作；「因而」是纯因果，不含「递进」；「反而」表转折，语义相反。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>4. 不只 / 不止 / 不但</BlockTitle>
              <div className="diff"><b>一句话区别：</b>不只＝<b>不仅是（范围）</b>；不止＝<b>不止这个数目（数量）</b>；不但＝<b>不仅（常与「而且」搭配）</b>。「不止」后面<b>必须能数出数量</b>，「不只 / 不但」后面接的是<b>性质或范围</b>。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>不只</td><td>不仅是（可接名词、短语）</td><td>不只一个原因 / 不只学生</td></tr>
                <tr><td>不止</td><td>数目超过（后接数量词）</td><td>不止三次 / 不止百人</td></tr>
                <tr><td>不但</td><td>不仅（多与「而且、还」呼应）</td><td>不但快，而且稳</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>不只</b>　问题<b>不只</b>出在设备上，人也有责任。</div>
                <div><b>不止</b>　这样的投诉<b>不止</b>三次。</div>
                <div><b>不但</b>　这套系统<b>不但</b>快，而且稳。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>类似的事故在省内已经发生____三起，暴露出的问题____是设备老化那么简单。</ExampleQuestion>
                <ExampleOptions><span>A. 不止　不只</span><span>B. 不只　不止</span><span>C. 不止　不止</span><span>D. 不只　不只</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：第一空后有「<b>三起</b>」，是数量，用「不止」；第二空后是「<b>是设备老化那么简单</b>」，说的是范围，用「不只」。<b>判据只有一条：后面能不能数出数。能数＝不止。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
    </>
  )
}
