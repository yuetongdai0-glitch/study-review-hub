import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析十六 · 方法与成败
 *
 * @returns 该节正文。
 */
export default function S52(): ReactElement {
  return (
    <>
      <Callout variant="key">
              「<b>没坚持</b>」三种：半途而废（中途放弃，重「停止」）／浅尝辄止（稍试即止，重「不深入」）／一曝十寒（做一天歇十天，重「不持续」）。<br />「<b>太极端</b>」三种：因噎废食（因小挫折否定全盘）／矫枉过正（纠偏过头）／过犹不及（做过头等于没做）。<br />「<b>差一点</b>」三种：功亏一篑（差最后一筐土）／功败垂成（快成时失败）／前功尽弃（以前的努力全白费）。
            </Callout>
      
            <Block>
              <BlockTitle>29. 半途而废 / 浅尝辄止 / 一曝十寒</BlockTitle>
              <div className="diff"><b>一句话区别：</b>半途而废＝<b>事情做到一半就停下</b>（重「停止」，事情本来能做）；浅尝辄止＝<b>稍微尝试就放弃深入</b>（重「不深入」，多指学习研究）；一曝十寒＝<b>做一天歇十天，不能坚持</b>（重「不持续」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>半途而废</td><td>中途停止（事情没做完）</td><td>多指工程、计划、学业</td></tr>
                <tr><td>浅尝辄止</td><td>稍试即止（不深入）</td><td>多指学习、研究、尝试</td></tr>
                <tr><td>一曝十寒</td><td>勤奋一天、懈怠十天</td><td>强调「间断」</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>半途而废</b>　修渠修到一半停了，<b>半途而废</b>最伤民心。</div>
                <div><b>浅尝辄止</b>　做学问最忌<b>浅尝辄止</b>。</div>
                <div><b>一曝十寒</b>　健身最怕<b>一曝十寒</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>背单词这事，他每年都下决心，可是三天打鱼两天晒网，____，十年也没过线。</ExampleQuestion>
                <ExampleOptions><span>A. 功亏一篑</span><span>B. 半途而废</span><span>C. 浅尝辄止</span><span>D. 一曝十寒</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：句中「<b>三天打鱼两天晒网</b>」「<b>十年也没过线</b>」强调<b>断断续续、不能持续</b>，选「一曝十寒」。「半途而废」指<b>中途彻底停止</b>，而这里是「反复开始又停下」；「浅尝辄止」指<b>不深入</b>，不强调「间断」；「功亏一篑」指<b>差最后一步没成</b>，与「十年没过线」不符。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>30. 因噎废食 / 矫枉过正 / 过犹不及</BlockTitle>
              <div className="diff"><b>一句话区别：</b>因噎废食＝<b>因为一次小挫折就否定整件事</b>（重「不敢做了」）；矫枉过正＝<b>纠正偏差时超过了限度</b>（重「纠过头」）；过犹不及＝<b>做过头跟不做一样不好</b>（重「分寸」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>因噎废食</td><td>因小挫折否定全盘（贬）</td><td>多指「不敢再做」</td></tr>
                <tr><td>矫枉过正</td><td>纠偏超过限度</td><td>前提是「原来有偏差」</td></tr>
                <tr><td>过犹不及</td><td>做过头与不做一样不好</td><td>讲「分寸」</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>因噎废食</b>　一次失败就停掉全部试点，无异于<b>因噎废食</b>。</div>
                <div><b>矫枉过正</b>　整治形式主义也要防<b>矫枉过正</b>。</div>
                <div><b>过犹不及</b>　批评<b>过犹不及</b>，说重了反而激起对立。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>为了纠正「唯分数」，有的学校干脆取消所有考试，连期中检测也不做了，这就是____。</ExampleQuestion>
                <ExampleOptions><span>A. 过犹不及</span><span>B. 因小失大</span><span>C. 因噎废食</span><span>D. 矫枉过正</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：句中「<b>为了纠正「唯分数」</b>」说明原本有偏差，「<b>干脆取消所有考试</b>」说明<b>纠偏超过了限度</b>，选「矫枉过正」。「因噎废食」强调<b>因一次挫折而不敢做</b>，不含「纠正偏差」的前提；「过犹不及」只讲<b>分寸</b>，抽象度更高，不如「矫枉过正」贴切；「因小失大」指为小利失大利，与「取消考试」的动机不符。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>31. 功亏一篑 / 功败垂成 / 前功尽弃</BlockTitle>
              <div className="diff"><b>一句话区别：</b>功亏一篑＝<b>只差最后一点而失败</b>（篑＝一筐土）；功败垂成＝<b>快要成功时失败</b>（垂成＝将近成功）；前功尽弃＝<b>以前的努力全部白费</b>（重「之前全白」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>功亏一篑</td><td>差最后一点没成</td><td>含「只差一步」</td></tr>
                <tr><td>功败垂成</td><td>将要成功时失败</td><td>含「几乎成功」</td></tr>
                <tr><td>前功尽弃</td><td>以前的努力全白费</td><td>含「全部」</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>功亏一篑</b>　工程扫尾时出了事故，<b>功亏一篑</b>。</div>
                <div><b>功败垂成</b>　决赛最后一球失误，<b>功败垂成</b>。</div>
                <div><b>前功尽弃</b>　最后一步偷工减料，<b>前功尽弃</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>这项试验做了七年，就在最后一组数据快要跑完的时候，设备烧了，七年的积累____。</ExampleQuestion>
                <ExampleOptions><span>A. 功败垂成</span><span>B. 前功尽弃</span><span>C. 付诸东流</span><span>D. 功亏一篑</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中「<b>七年积累</b>」「<b>全部</b>」是核心，强调<b>之前的努力全白费</b>，选「前功尽弃」。「功亏一篑」强调<b>差最后一筐土</b>（差一点点），「功败垂成」强调<b>将成而败</b>，两者都偏「时间点」，没有「七年积累全废」的「总量」感；「付诸东流」也指落空，但多用于希望、心血<b>随水漂走</b>，与「积累」搭配不如「前功尽弃」定式。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>32. 事与愿违 / 适得其反 / 南辕北辙</BlockTitle>
              <div className="diff"><b>一句话区别：</b>事与愿违＝<b>事情发展与愿望相反</b>（中性，只讲「不如意」）；适得其反＝<b>结果与预期正好相反</b>（强调「反了」）；南辕北辙＝<b>行动和目的完全相反</b>（<b>做法把事情推向反面</b>，程度最重，多指方向性错误）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>事与愿违</td><td>发展不如所愿（中性）</td><td>不强调「反向」</td></tr>
                <tr><td>适得其反</td><td>结果与预期相反</td><td>强调「反了」</td></tr>
                <tr><td>南辕北辙</td><td>行动与目的相反（最重）</td><td>含「越努力越远」</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>事与愿违</b>　管得越细，<b>事与愿违</b>，基层更不敢干。</div>
                <div><b>适得其反</b>　过度保护反而<b>适得其反</b>。</div>
                <div><b>南辕北辙</b>　想给学生减负却层层加码，无异于<b>南辕北辙</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>想通过延长工时来提高产量，结果工人疲劳出错、返工率上升，产量反而降了，实在是____。</ExampleQuestion>
                <ExampleOptions><span>A. 事与愿违</span><span>B. 适得其反</span><span>C. 南辕北辙</span><span>D. 得不偿失</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中「<b>想提高产量 → 产量反而降了</b>」是<b>结果与预期正好相反</b>，选「适得其反」。「事与愿违」只讲<b>不如愿</b>，不含「反向」的强度；「南辕北辙」强调<b>方向性错误</b>（做法与目的背道而驰），本句的做法（延长工时）方向上没错，只是产生了反效果；「得不偿失」是<b>算总账不划算</b>，侧重得失比较，不强调「反」。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
    </>
  )
}
