import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'
import { Memo, Mnemonic } from '../mem'

/**
 * 二十七、教育常识（四）策略选择（D 类特色题）
 *
 * @remarks 内容整理自「策略选择 1 / 2」讲义：这类题没有标准对错，只有「相对更优」。
 * 本节把评分逻辑拆成五条判断标准和一张禁区清单，考场直接套。
 * @returns 该节正文。
 */
export default function Edu4(): ReactElement {
  return (
    <>
      <Callout variant="key">策略选择是 D 类的<b>特色题型</b>（约 10 题）：给一段课堂 / 家校 / 突发的真实情境，问「最合适的做法」「最不合适的做法」。它<b>不考知识，考的是「你像不像一个老师」</b>——正确答案永远是「最符合教育规律、最解决当下问题、副作用最小」的那一个。</Callout>
      <Memo title="策略选择：一句话 + 五把尺" sub="四个选项往往都「不算错」，所以要选「最优」。拿五把尺去量，量到最后只剩一个。">
        <Mnemonic
          title="总原则"
          hot
          verse={<>没有对错，只有<em>相对更优</em>：先保<em>安全</em>，再护<em>自尊</em>，再讲<em>道理</em>，最后才谈<em>处理</em>。</>}
          note={<>顺序很重要：学生情绪没下来就讲道理，一定不是最优解；人身安全有风险时，一切让位于安全（地震先疏散、不坐电梯）。</>}
        />
        <Mnemonic
          title="过程优于结果"
          verse={<>治<em>习惯</em>，不补<em>结果</em>。</>}
          note={<>「马虎粗心」类题：选「养成仔细认真的习惯」，不选「把这次错题改一遍」。前者治过程，后者只是事后补救。</>}
        />
        <Mnemonic
          title="个别化优于泛化"
          verse={<>能<em>私下</em>就不<em>当众</em>，能<em>个别</em>就不<em>开班会</em>。</>}
          note={<>针对某个学生的问题，开班会属于「泛化处理」，针对性弱；但如果是<b>全班共性</b>问题（如班风、普遍抄作业），开班会才是最优。</>}
        />
        <Mnemonic
          title="先修关系，再谈教育"
          verse={<>学生<em>抵触</em>时，先<em>道歉 / 安抚</em>，再<em>讲道理</em>。</>}
          note={<>老师说话伤了学生自尊（如「哪像个女孩子」），最优解是「道歉 + 说明问题危害」，两件事一起做；只道歉不教育、或只教育不道歉，都不完整。</>}
        />
        <Mnemonic
          title="不推责、不越位"
          verse={<>家校<em>合作</em>，不<em>指责</em>；学校<em>协助</em>，不<em>包办</em>。</>}
          note={<>「责怪家长、袒护孩子、把责任推给对方」永远是最错的那一项。反过来，「把教育责任全部推给学校」也错。</>}
        />
      </Memo>

      <Block>
        <BlockTitle>1. 禁区清单：选项里出现这些词，先划掉</BlockTitle>
        <DataTable>
          <tr><th>禁区</th><th>为什么错</th></tr>
          <tr><td>体罚、变相体罚、罚站示众、罚抄一百遍</td><td>违反《义务教育法》《未成年人保护法》，一票否决</td></tr>
          <tr><td>讽刺、挖苦、当众羞辱、贴标签（「你就是笨」）</td><td>侵犯人格尊严，且激化对抗</td></tr>
          <tr><td>停课、劝退、开除、叫家长领回家</td><td>义务教育阶段学校<b>无权</b>开除，停课也属侵权</td></tr>
          <tr><td>置之不理、不闻不问、等他自己想通</td><td>教师未尽职责，属于放任</td></tr>
          <tr><td>公开宣读成绩排名、翻看日记、搜书包</td><td>侵犯隐私权</td></tr>
          <tr><td>把责任推给家长 / 推给前任老师 / 推给学校</td><td>违背家校合作与教师职责</td></tr>
          <tr><td>为息事宁人而「各打五十大板」</td><td>不讲事实、不讲原则，副作用大</td></tr>
        </DataTable>
        <Callout variant="warn">拿不准时用<b>「副作用最小」</b>这一条筛：同样能解决问题的两个选项，选那个<b>伤害面更小、更保护学生自尊</b>的。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题146 · 哪个做法踩了禁区</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>学生上课屡次讲话，提醒无效。下列做法中<b>最不恰当</b>的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 课后单独找他谈，了解讲话的原因　B. 让他站到教室后面，站满一节课反省　C. 用眼神或走近的方式提示　D. 与家长沟通，共同约定课堂规则</ExampleOptions>
          <ExampleAnswer><b>解析：</b>B 属于<b>变相体罚</b>（罚站示众），侵犯人格尊严，踩了禁区；A、C、D 都是先控场、再沟通的常规做法。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>2. 九类高频情境：一步到位的应对</BlockTitle>
        <DataTable>
          <tr><th>情境</th><th>最优做法</th><th>别选</th></tr>
          <tr><td><b>课堂违纪</b>（说话、玩手机、睡觉）</td><td>先用<b>眼神 / 走近 / 轻敲桌面</b>等无声提示，课后再单独谈</td><td>当众训斥、赶出教室、没收不还</td></tr>
          <tr><td><b>学生顶撞老师</b></td><td>先<b>降温</b>（不接火、不当场分胜负），课后单独沟通，先听他说</td><td>当场压制、请家长来「压」、记过处分</td></tr>
          <tr><td><b>学生之间冲突 / 欺凌</b></td><td>先<b>制止并保护受欺负方</b>，再分别了解事实，最后双方+家长共同处理</td><td>各打五十大板、当众对质、让受害者和解了事</td></tr>
          <tr><td><b>家长不配合 / 指责老师</b></td><td>先<b>倾听 + 共情</b>，再摆事实，最后给<b>具体可执行的建议</b></td><td>责怪家长、争辩谁对谁错、挂电话</td></tr>
          <tr><td><b>突发安全事件</b>（地震、受伤、走失）</td><td><b>生命安全第一</b>：有序疏散、不乘电梯、及时上报与送医</td><td>先清点财物、先追责、让学生自行回家</td></tr>
          <tr><td><b>特殊学生</b>（多动、适应不良、学习障碍）</td><td><b>个别化方案</b> + 温和提示（走近轻抚肩膀）+ 必要时建议专业评估</td><td>公开点名、与其他学生同样要求、劝其转学</td></tr>
          <tr><td><b>新生 / 转学生适应不良</b></td><td><b>渐进式适应</b>：先安排 <b>结对帮扶</b>、明确作息与规则，给展示机会建立归属感</td><td>一上来就加压、当众比较、放任不管</td></tr>
          <tr><td><b>班干部选拔与轮换</b></td><td><b>民主推荐 + 轮流任职 + 明确职责</b>；班干部是<b>服务者</b>不是「告密者」</td><td>老师直接指定、只让成绩好的当、让班干部打小报告</td></tr>
          <tr><td><b>座位安排</b></td><td>按<b>身高、视力</b>等生理条件 + <b>定期轮换</b> + 兼顾性格互补</td><td><b>按成绩排座</b>（歧视）、成绩差的永远坐后排、一成不变</td></tr>
        </DataTable>
      </Block>
      <Example>
        <ExampleHeader>📝 例题147 · 多动学生敲桌子</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>上课时，一名患注意力缺陷的学生不停敲桌子，影响周围同学。老师最合适的做法是（　）。</ExampleQuestion>
          <ExampleOptions>A. 当众点名批评，制止其行为　B. 悄声走到他身旁，轻抚其肩膀提醒　C. 让他站到教室后面反省　D. 请家长立即到校把人接走</ExampleOptions>
          <ExampleAnswer><b>解析：</b>特殊学生要用<b>温和、不伤自尊</b>的方式提示。A、C 属当众惩罚，D 属变相停课，都踩了禁区。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      <Example>
        <ExampleHeader>📝 例题148 · 老师说话伤了学生</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>笑笑做错题，老师批评时说「哪像个女孩子」。笑笑很郁闷。要解决笑笑的问题，最有效的对策是（　）。</ExampleQuestion>
          <ExampleOptions>A. 找笑笑谈心并道歉　B. 找笑笑分析出错的原因及危害　C. 给笑笑道歉，并说明粗心的危害　D. 召开班会，希望全班养成仔细认真的习惯</ExampleOptions>
          <ExampleAnswer><b>解析：</b>问题有两层——<b>自尊受伤</b>（要道歉修复关系）＋<b>粗心</b>（要教育引导）。C 两件事都做了；A 只修复不教育，B 只教育不修复，D 是泛化处理。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>3. 三步解题法：先定性，再排序，最后比副作用</BlockTitle>
        <PointList>
          <li><b>第一步 · 定性</b>：这是<b>安全事件</b>、<b>学习问题</b>、<b>品行问题</b>还是<b>关系问题</b>？性质定错，后面全错（安全事件里「先讲道理」直接出局）。</li>
          <li><b>第二步 · 排序</b>：按「安全 ＞ 自尊 ＞ 关系 ＞ 规则 ＞ 成绩」排优先级。学生自尊已经受伤时，先修复关系再谈学习。</li>
          <li><b>第三步 · 比副作用</b>：两个选项都能解决问题时，选<b>波及面小</b>的（私下 &gt; 当众，个别 &gt; 全班，口头 &gt; 处分）。</li>
        </PointList>
        <Callout variant="tip"><b>审题只差一个字：</b>问「最合适」选最优解；问「<b>不应该</b>」「<b>不恰当</b>」就选那个最离谱的（通常是放任不管或推卸责任）。每年都有人把「不应该」看成「应该」。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题149 · 马虎粗心该怎么治</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>笑笑作业总是马虎粗心。为了纠正这个问题，她最需要的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 注意所有生活和学习细节，养成仔细认真的好习惯　B. 针对每次作业中的错误仔细改正　C. 翻看各科课本，发现错误及时改正　D. 出错后懊悔并不断反省</ExampleOptions>
          <ExampleAnswer><b>解析：</b>马虎发生在<b>过程中</b>，只能靠<b>过程管理 + 习惯养成</b>解决；B、C 是事后补救，D 只是情绪反应。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>4. 三个「听起来很对」的陷阱</BlockTitle>
        <PointList>
          <li><b>「开班会统一教育」</b>：只有问题是<b>全班共性</b>时才最优；针对某一个学生的问题，开班会＝泛化处理，针对性弱。</li>
          <li><b>「请家长来学校」</b>：家长是<b>合作者</b>不是「执行工具」。动不动请家长、让家长「领回去」，属于推责 + 变相停课。</li>
          <li><b>「严厉处理以儆效尤」</b>：处理个别学生来「震慑全班」，副作用最大——伤了当事学生的自尊，也让全班恐惧，通常是最错项。</li>
          <li><b>「按成绩排座位 / 只让成绩好的当班干部」</b>：本质是把教育资源和荣誉当成奖惩工具，属于歧视性做法，一定不是最优解。</li>
        </PointList>
        <Callout variant="warn"><b>一句话判据：</b>选项里只要出现「当众」「公开」「全班面前」「让大家都知道」，先警惕；出现「私下」「单独」「课后」「先听他说」，通常是正解。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题150 · 该不该开班会</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>班里最近出现多名学生抄作业的现象，还有人在群里互相传答案。老师最合适的做法是（　）。</ExampleQuestion>
          <ExampleOptions>A. 把抄作业的学生逐个叫到办公室写检查　B. 召开主题班会，全班共同讨论作业的意义并约定规则　C. 在班级群里点名批评传答案的学生　D. 把情况告诉家长，请家长自行管教</ExampleOptions>
          <ExampleAnswer><b>解析：</b>抄作业、传答案是<b>全班共性</b>问题，正属于「开班会」适用的情形（共性才开班会，个别问题才私下谈）。A、C 针对个别且 C 当众羞辱，D 推责给家长。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <div className="jingle">
        <div className="jt">策略选择 · 一句话总结</div>
        <b>安全第一、自尊第二、道理第三；能私下不当众、能个别不开班会、能合作不推责；问「不应该」就挑最离谱的那个。</b>
      </div>
    </>
  )
}
