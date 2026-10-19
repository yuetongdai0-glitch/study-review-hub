import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析十二 · 程度与极端
 *
 * @returns 该节正文。
 */
export default function S48(): ReactElement {
  return (
    <>
      <Callout variant="key">
              「<b>无所不至 ≠ 无微不至</b>」是这一讲的第一考点：前者是「什么坏事都干得出来」（贬），后者是「关怀细致到每个细节」（褒）。「<b>耸人听闻 ≠ 骇人听闻</b>」是第二考点：前者「故意夸大」，后者「事实本身惊人」。「<b>变本加厉 ≠ 雪上加霜</b>」是第三考点：前者「主观上更凶」，后者「客观上更糟」。
            </Callout>
      
            <Block>
              <BlockTitle>13. 无所不至 / 无微不至 / 无所不为</BlockTitle>
              <div className="diff"><b>一句话区别：</b>无所不至＝<b>什么坏事都干得出来</b>（贬）；无微不至＝<b>关怀细致到没有一处不到</b>（褒）；无所不为＝<b>什么坏事都做</b>（贬，与无所不至近义，更强调「做」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>无所不至</td><td>坏事做绝（贬）</td><td>常与「敲诈、陷害」搭配</td></tr>
                <tr><td>无微不至</td><td>关怀细致周到（褒）</td><td>只用于关心、照顾</td></tr>
                <tr><td>无所不为</td><td>什么坏事都干（贬）</td><td>强调行为</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>无所不至</b>　这伙人敲诈勒索，<b>无所不至</b>。</div>
                <div><b>无微不至</b>　护士对老人照顾得<b>无微不至</b>。</div>
                <div><b>无所不为</b>　这帮人<b>无所不为</b>，终于被一网打尽。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>驻村两年，她把每家老人的用药时间都记在本子上，照顾得____。</ExampleQuestion>
                <ExampleOptions><span>A. 细致入微</span><span>B. 无所不至</span><span>C. 无微不至</span><span>D. 无所不为</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中是<b>正面的照顾</b>，且「<b>每家老人的用药时间都记在本子上</b>」正对应「没有一处细节不到」，选「无微不至」。「无所不至」「无所不为」都是<b>贬义</b>（什么坏事都干），用在褒扬语境里是致命的感情色彩错误——这是本题最大的坑；「细致入微」虽意思接近，但一般说「描写细致入微」，与「照顾得」搭配不如「无微不至」定式。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>14. 变本加厉 / 雪上加霜 / 火上浇油</BlockTitle>
              <div className="diff"><b>一句话区别：</b>变本加厉＝<b>情况比原来更严重（主观上更凶）</b>；雪上加霜＝<b>接连遭受打击（客观上更糟）</b>；火上浇油＝<b>用言行使事态更激化</b>（多指人为刺激情绪）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>变本加厉</td><td>比原来更加严重（贬）</td><td>主语多是不良行为</td></tr>
                <tr><td>雪上加霜</td><td>灾祸之上再添灾祸</td><td>强调「接连」</td></tr>
                <tr><td>火上浇油</td><td>使人更加愤怒、事态更激化</td><td>强调「人为激化」</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>变本加厉</b>　制止之后，他反而<b>变本加厉</b>。</div>
                <div><b>雪上加霜</b>　刚失业，家里又有人住院，真是<b>雪上加霜</b>。</div>
                <div><b>火上浇油</b>　这时候公布处罚结果，只会<b>火上浇油</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>被约谈之后，这家平台不但没有整改，反而____，把违规的付费项目换了个名字继续上线。</ExampleQuestion>
                <ExampleOptions><span>A. 火上浇油</span><span>B. 得寸进尺</span><span>C. 变本加厉</span><span>D. 雪上加霜</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>被约谈之后不但没整改，反而更凶</b>」正是「变本加厉」——<b>不良行为比原来更严重</b>。「雪上加霜」要求<b>外部灾祸接连而来</b>，此处是自己作恶，不是遭灾；「火上浇油」强调<b>激化别人的情绪</b>，需要一个「被激怒的对方」；「得寸进尺」指<b>贪得无厌、一步步索取</b>，与「换个名字继续违规」的具体行为不完全对应。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>15. 耸人听闻 / 骇人听闻 / 危言耸听</BlockTitle>
              <div className="diff"><b>一句话区别：</b>耸人听闻＝<b>故意夸大使人震惊</b>（多指言论、标题）；骇人听闻＝<b>事实本身惊人、恶劣到让人害怕</b>；危言耸听＝<b>故意说吓人的话</b>（多作谓语，主语是人）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>耸人听闻</td><td>故意夸大（贬）</td><td>修饰标题、说法</td></tr>
                <tr><td>骇人听闻</td><td>事实惊人恶劣（贬）</td><td>修饰事件、罪行</td></tr>
                <tr><td>危言耸听</td><td>故意说吓人的话</td><td>多作谓语（有人危言耸听）</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>耸人听闻</b>　标题<b>耸人听闻</b>，内容却站不住脚。</div>
                <div><b>骇人听闻</b>　这起案件的细节<b>骇人听闻</b>。</div>
                <div><b>危言耸听</b>　有人<b>危言耸听</b>，说「行业要完」。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某自媒体把一起普通的食物中毒说成「全城饭店都在投毒」，这种____的标题，造成了严重的社会恐慌。</ExampleQuestion>
                <ExampleOptions><span>A. 耸人听闻</span><span>B. 危言耸听</span><span>C. 毛骨悚然</span><span>D. 骇人听闻</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中「<b>把普通的说成「全城投毒」</b>」是明显的<b>故意夸大</b>，且修饰「<b>标题</b>」，选「耸人听闻」。「骇人听闻」指<b>事实本身惊人恶劣</b>，不含「故意夸大」；「危言耸听」虽也指夸大吓人，但多作<b>谓语</b>（有人危言耸听），修饰「标题」不如「耸人听闻」常用；「毛骨悚然」形容<b>人的恐惧感受</b>，不能修饰标题。<b>一句话锁死：故意编的＝耸人听闻，真发生的＝骇人听闻。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>16. 大惊小怪 / 少见多怪 / 见怪不怪</BlockTitle>
              <div className="diff"><b>一句话区别：</b>大惊小怪＝<b>对小事过分惊讶</b>（含「不必如此」）；少见多怪＝<b>见得太少，所以觉得奇怪</b>（含「见识少」）；见怪不怪＝<b>怪事见多了就不觉得怪</b>（中性，多含无奈）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>大惊小怪</td><td>对小事过分惊讶</td><td>贬，含「不必」</td></tr>
                <tr><td>少见多怪</td><td>见识少，觉得什么都新鲜</td><td>贬，含「见识少」</td></tr>
                <tr><td>见怪不怪</td><td>见多了就不觉奇怪</td><td>中性，含「习惯」</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>大惊小怪</b>　不过是忘带工牌，何必<b>大惊小怪</b>。</div>
                <div><b>少见多怪</b>　第一次见无人机喷药，别<b>少见多怪</b>。</div>
                <div><b>见怪不怪</b>　这类操作他早<b>见怪不怪</b>了。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>在牧区，七八岁的孩子骑马放羊是常事，外地游客却常常____。</ExampleQuestion>
                <ExampleOptions><span>A. 大惊小怪</span><span>B. 少见多怪</span><span>C. 见怪不怪</span><span>D. 不以为意</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中「<b>外地游客</b>」与「<b>牧区常事</b>」形成对比，强调的是<b>因为见得少才觉得奇怪</b>，选「少见多怪」。「大惊小怪」侧重<b>反应过度</b>，但不含「见识少」的原因；「见怪不怪」意思正相反（习惯了）；「不以为意」指<b>不放在心上</b>，与「惊讶」无关。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
    </>
  )
}
