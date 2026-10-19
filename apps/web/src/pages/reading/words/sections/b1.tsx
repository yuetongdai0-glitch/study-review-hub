import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析一 · 影响与感知
 *
 * @returns 该节正文。
 */
export default function S37(): ReactElement {
  return (
    <>
      <Callout variant="key">
              这一组全在考「<b>影响的方式与结果</b>」。先问自己三句话：是<b>变了</b>、是<b>染上了</b>、还是<b>只是知道</b>？
              是<b>没主见</b>、是<b>跟潮流</b>、还是<b>抄别人</b>？
            </Callout>
      
            <Block>
              <BlockTitle>1. 潜移默化 / 耳濡目染 / 耳闻目睹</BlockTitle>
              <div className="diff"><b>一句话区别：</b>潜移默化＝<b>变了</b>（性格思想无形中改变，重结果）；耳濡目染＝<b>染上了</b>（长期用眼看耳听，技能风气上身，重过程）；耳闻目睹＝<b>知道了</b>（只是听见看见，不一定受影响）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>潜移默化</td><td>无形、缓慢的影响 → <b>结果变了</b></td><td>潜移默化地影响 / 熏陶 / 塑造</td></tr>
                <tr><td>耳濡目染</td><td>长期用耳听、用眼看 → <b>染上了</b></td><td>从小耳濡目染 / 耳濡目染，深受影响</td></tr>
                <tr><td>耳闻目睹</td><td>只是听到、看到 → <b>知情</b></td><td>耳闻目睹了这一切 / 亲历亲见</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>潜移默化</b>　家风不是写在纸上的规矩，而是在一日三餐里<em>潜移默化</em>地塑造着孩子。</div>
                <div><b>耳濡目染</b>　他从小在剧场后台长大，<em>耳濡目染</em>，十岁便能登台。</div>
                <div><b>耳闻目睹</b>　驻村两年，他<em>耳闻目睹</em>了乡村最真实的变化。</div>
              </div>
              <Example>
                <ExampleHeader>例题 1 · 真题 2020 国考（副省级）第 35 题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>千百年来，乡村承担着对村民行为的引导、规训与教育功能，让人们____、明辨是非善恶。农事活动、节日庆典、民俗习惯、村规民约等，都是维系村落价值取向和有序运行的重要____，它们以____的形式不断强化人们的行为规范，并使之内化为人们的道德准则。</ExampleQuestion>
                  <ExampleOptions><span>A. 循规蹈矩　途径　喜闻乐见</span><span>B. 与人为善　方式　言传身教</span><span>C. 通情达理　载体　潜移默化</span><span>D. 奉公守法　手段　耳濡目染</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：突破口在第三空。代词「<b>它们</b>」指「农事活动、节日庆典、民俗习惯、村规民约」，这些是<b>事与物</b>，不是人。<br />·「潜移默化」的主体可以是事或物 → 成立；<br />·「耳濡目染」的主体<b>必须是人</b>（谁濡染了谁）→ 与「它们」搭配不当，<b>D 项</b>排除；<br />·「言传身教」同样要求主语是人 → <b>B 项</b>排除；<br />·「喜闻乐见」指群众喜欢听、乐意看，与「它们」不搭 → <b>A 项</b>排除。<br />第二空「载体」与「承载价值取向」呼应，第一空「通情达理」与「明辨是非善恶」并列，全部吻合。<b>这道题把「主体是人是物」这一条考到了极致。</b></ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>2. 人云亦云 / 随波逐流 / 亦步亦趋 / 拾人牙慧</BlockTitle>
              <div className="diff"><b>一句话区别：</b>人云亦云＝<b>别人怎么说我就怎么说</b>（没主见，针对「话」）；随波逐流＝<b>大家怎么做我就怎么做</b>（没立场，针对「潮流」）；亦步亦趋＝<b>别人怎么做我就照着做</b>（处处模仿，针对「做法」）；拾人牙慧＝<b>把别人的话当自己的话</b>（抄袭，针对「言论」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>人云亦云</td><td>没主见，跟着别人<b>说</b></td><td>人云亦云，毫无己见</td></tr>
                <tr><td>随波逐流</td><td>没立场，跟着<b>潮流走</b></td><td>随波逐流，随大流</td></tr>
                <tr><td>亦步亦趋</td><td>处处<b>模仿、追随</b></td><td>亦步亦趋地模仿 / 跟在后面亦步亦趋</td></tr>
                <tr><td>拾人牙慧</td><td>把别人现成的言论<b>当自己的</b></td><td>拾人牙慧，了无新意</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>人云亦云</b>　会上没人提反对意见，大多是怕出错而<em>人云亦云</em>。</div>
                <div><b>随波逐流</b>　他不愿<em>随波逐流</em>，索性把社交账号全关了。</div>
                <div><b>亦步亦趋</b>　跟在行业龙头后面<em>亦步亦趋</em>，很难做出自己的品牌。</div>
                <div><b>拾人牙慧</b>　这篇文章并无新见，多是<em>拾人牙慧</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 2 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>他的论文看似洋洋万言，实则只是把国外学者的观点换个说法，通篇____，读不出一句自己的判断。</ExampleQuestion>
                  <ExampleOptions><span>A. 亦步亦趋</span><span>B. 拾人牙慧</span><span>C. 人云亦云</span><span>D. 随波逐流</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：空处与「把国外学者的观点换个说法」「读不出自己的判断」形成解释关系，强调的是<b>把别人现成的言论拿来当自己的</b>，只有「拾人牙慧」对得上。「人云亦云」侧重别人怎么说自己怎么说，对象是「意见、态度」，不指抄袭；「随波逐流」侧重跟着潮流走，对象是「立场、行为」；「亦步亦趋」侧重步步模仿做法，不针对文字言论。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>3. 浮光掠影 / 走马观花 / 蜻蜓点水 / 浅尝辄止</BlockTitle>
              <div className="diff"><b>一句话区别：</b>浮光掠影＝<b>印象浅</b>（重结果，常作定语）；走马观花＝<b>看得快</b>（重过程，常作状语）；蜻蜓点水＝<b>只碰一下</b>（重程度，多指工作作风）；浅尝辄止＝<b>主动停下</b>（重态度，多指学习研究）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>浮光掠影</td><td>印象不深（结果）</td><td>浮光掠影的印象 / 只留下浮光掠影</td></tr>
                <tr><td>走马观花</td><td>粗略地看（过程快）</td><td>走马观花地看 / 难免走马观花</td></tr>
                <tr><td>蜻蜓点水</td><td>接触一下即止（不深入）</td><td>蜻蜓点水式的调研 / 帮扶蜻蜓点水</td></tr>
                <tr><td>浅尝辄止</td><td>尝试一下就放弃（主动）</td><td>浅尝辄止，不肯深入</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>浮光掠影</b>　走马观花式的调研，只能留下<em>浮光掠影</em>的印象。</div>
                <div><b>走马观花</b>　三天跑五个县，难免<em>走马观花</em>。</div>
                <div><b>蜻蜓点水</b>　帮扶不能<em>蜻蜓点水</em>，要一竿子插到底。</div>
                <div><b>浅尝辄止</b>　做学问最忌<em>浅尝辄止</em>，半途而废等于没做。</div>
              </div>
              <Example>
                <ExampleHeader>例题 3 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>这次调研只用了半天，跑了三个点、听了两场汇报，____，回来后写的材料里全是「高度重视」「成效明显」一类套话。</ExampleQuestion>
                  <ExampleOptions><span>A. 走马观花</span><span>B. 蜻蜓点水</span><span>C. 浅尝辄止</span><span>D. 浮光掠影</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：前文「只用了半天，跑了三个点」强调的是<b>行程赶、看得粗</b>，对应「走马观花」。「浮光掠影」指印象浅，多作定语（浮光掠影的印象），此处需一个概括<b>行为过程</b>的词；「蜻蜓点水」多指工作作风浮在表面，与「跑点、听汇报」这种<b>看</b>的动作不贴；「浅尝辄止」强调主动放弃深入，主语应是人面对学问、尝试，而不是「调研」这个行为本身。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>4. 眼花缭乱 / 扑朔迷离 / 目不暇接</BlockTitle>
              <div className="diff"><b>一句话区别：</b>眼花缭乱＝<b>看乱了</b>（主观感受，对象多而杂）；扑朔迷离＝<b>看不清真相</b>（客观复杂，多指案情、局势）；目不暇接＝<b>来不及看</b>（客观太多太快，来不及，含赞叹）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>眼花缭乱</td><td>看着迷乱，<b>分不清</b></td><td>令人眼花缭乱 / 看得眼花缭乱</td></tr>
                <tr><td>扑朔迷离</td><td>错综复杂，<b>真相难明</b></td><td>案情扑朔迷离 / 局势扑朔迷离</td></tr>
                <tr><td>目不暇接</td><td>东西太多太快，<b>看不过来</b></td><td>美景令人目不暇接 / 新品目不暇接</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>眼花缭乱</b>　直播间里灯光闪烁、话术翻飞，看得人<em>眼花缭乱</em>。</div>
                <div><b>扑朔迷离</b>　案情三次反转，证词又互相矛盾，真相愈发<em>扑朔迷离</em>。</div>
                <div><b>目不暇接</b>　车过峡谷，两侧奇峰一个接一个，令人<em>目不暇接</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 4 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>这起案件的经过前后三次反转，几名证人的说法又彼此矛盾，原本清晰的真相变得____。</ExampleQuestion>
                  <ExampleOptions><span>A. 眼花缭乱</span><span>B. 扑朔迷离</span><span>C. 目不暇接</span><span>D. 错综复杂</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：空处要与「真相」搭配，强调<b>看不清、辨不明</b>，选「扑朔迷离」。「眼花缭乱」的主语应是<b>人的眼睛</b>或令人迷乱的事物，不能说「真相变得眼花缭乱」；「目不暇接」强调<b>看不过来</b>，对象是数量多、变化快的美好事物，与「真相」不搭；「错综复杂」只讲关系复杂，不含「真相难明」这层意思，且与「真相变得」搭配生硬。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
    </>
  )
}
