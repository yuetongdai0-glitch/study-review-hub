import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析十 · 数量与混杂
 *
 * @returns 该节正文。
 */
export default function S46(): ReactElement {
  return (
    <>
      <Callout variant="key">
              对象锁死 + 程度排序。四个「杂」按「<b>谁不齐</b>」分：参差不齐＝<b>水平</b>不齐；良莠不齐＝<b>好人坏人</b>混；鱼龙混杂＝<b>好坏</b>混杂；鱼目混珠＝<b>以假充真</b>（有冒充动作）。四个「少」按「<b>少的原因</b>」分：凤毛麟角＝少而<b>贵</b>；屈指可数＝少得<b>能数</b>；寥若晨星＝少得<b>稀疏</b>；吉光片羽＝少而<b>残</b>。
            </Callout>
      
            <Block>
              <BlockTitle>5. 鱼目混珠 / 鱼龙混杂 / 良莠不齐 / 参差不齐</BlockTitle>
              <div className="diff"><b>一句话区别：</b>鱼目混珠＝<b>拿假的冒充真的</b>（有「冒充」动作）；鱼龙混杂＝<b>好人坏人混在一起</b>（人）；良莠不齐＝<b>好的坏的都有</b>（人、事物质量）；参差不齐＝<b>水平高低不一</b>（只讲不齐，不讲好坏）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>鱼目混珠</td><td>以假充真</td><td>有冒充动作，贬</td></tr>
                <tr><td>鱼龙混杂</td><td>好人坏人混杂</td><td>对象是人（也指成分复杂）</td></tr>
                <tr><td>良莠不齐</td><td>好坏人、好坏货都有</td><td>对象是人或质量</td></tr>
                <tr><td>参差不齐</td><td>长短高低不齐</td><td>只讲不整齐，程度最轻</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>鱼目混珠</b>　用普通玉石<b>鱼目混珠</b>，被鉴定师一眼看穿。</div>
                <div><b>鱼龙混杂</b>　这个圈子<b>鱼龙混杂</b>，年轻人要留个心眼。</div>
                <div><b>良莠不齐</b>　从业人员<b>良莠不齐</b>，亟需规范。</div>
                <div><b>参差不齐</b>　各地服务水平<b>参差不齐</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题 2021 黑龙江 第 38 题（改）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>跨境电商刚兴起那几年，平台上既有正规品牌，也有大量小作坊，商品质量____，消费者维权十分困难。</ExampleQuestion>
                <ExampleOptions><span>A. 如数家珍　星罗棋布　代表</span><span>B. 举不胜举　不乏其人　典型</span><span>C. 汗牛充栋　不胜枚举　标杆</span><span>D. 多如牛毛　凤毛麟角　范例</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中「<b>既有正规品牌，也有大量小作坊</b>」是明确的<b>好坏混杂</b>，且落点在「质量」，选「良莠不齐」。「参差不齐」只说<b>水平不一致</b>，不含「好坏」判断，语气最轻；「鱼龙混杂」多指<b>人</b>的成分复杂；「鱼目混珠」要求有<b>「拿甲冒充乙」的具体动作</b>，句中只是并存。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>6. 泥沙俱下 / 江河日下 / 每况愈下</BlockTitle>
              <div className="diff"><b>一句话区别：</b>泥沙俱下＝<b>好坏一起涌来</b>（重在「同时出现」，常配「市场放开、潮流涌来」）；江河日下＝<b>一天天坏下去</b>（多指风气、局面）；每况愈下＝<b>越来越坏</b>（最通用，身体状况也能用）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>泥沙俱下</td><td>好坏混杂着一起出现</td><td>常与「鱼龙混杂」连用</td></tr>
                <tr><td>江河日下</td><td>情况一天天坏下去</td><td>多指风气、国势、局面</td></tr>
                <tr><td>每况愈下</td><td>情况越来越坏</td><td>适用范围最广，可指身体</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>泥沙俱下</b>　市场一放开，<b>泥沙俱下</b>，监管必须跟上。</div>
                <div><b>江河日下</b>　若不加约束，行业风气将<b>江河日下</b>。</div>
                <div><b>每况愈下</b>　停药之后，他的身体状况<b>每况愈下</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>短视频刚兴起时，优质内容和低俗内容____，平台几乎来不及审核。</ExampleQuestion>
                <ExampleOptions><span>A. 每况愈下</span><span>B. 鱼目混珠</span><span>C. 泥沙俱下</span><span>D. 江河日下</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>优质内容和低俗内容</b>」同时出现，强调的是<b>好坏一起涌来</b>，选「泥沙俱下」。「江河日下」「每况愈下」都只讲<b>越来越坏</b>，不含「好坏同时存在」；「鱼目混珠」需要「冒充」的动作。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>7. 鳞次栉比 / 星罗棋布 / 错落有致</BlockTitle>
              <div className="diff"><b>一句话区别：</b>鳞次栉比＝<b>密集整齐地排列</b>（多指房屋、船只，强调「一排排」）；星罗棋布＝<b>分布广而散</b>（强调「到处都有」）；错落有致＝<b>高低大小交错、有美感</b>（强调「好看」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>鳞次栉比</td><td>像鱼鳞梳齿一样密集排列</td><td>多指建筑、船只</td></tr>
                <tr><td>星罗棋布</td><td>像星星棋子一样散布</td><td>强调数量多、分布广</td></tr>
                <tr><td>错落有致</td><td>交错分布而有情趣</td><td>强调布局美</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>鳞次栉比</b>　江边高楼<b>鳞次栉比</b>，十年前这里还是滩涂。</div>
                <div><b>星罗棋布</b>　山间民宿<b>星罗棋布</b>，几乎每个村都有。</div>
                <div><b>错落有致</b>　白墙黛瓦<b>错落有致</b>，顺着山势一层层铺开。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>从观景台望下去，几十座夯土小屋顺着山势____，高低错落，像从山坡上长出来的。</ExampleQuestion>
                <ExampleOptions><span>A. 星罗棋布</span><span>B. 错落有致</span><span>C. 井然有序</span><span>D. 鳞次栉比</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中「<b>顺着山势</b>」「<b>高低错落</b>」「<b>像长出来的</b>」都在强调<b>布局有致、有美感</b>，选「错落有致」。「鳞次栉比」强调<b>密集整齐、成排</b>，与「顺着山势」的错落感相反；「星罗棋布」只讲<b>分布广</b>，不含「高低错落」；「井然有序」只讲<b>有秩序</b>，与「美感」无关。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>8. 凤毛麟角 / 屈指可数 / 寥若晨星 / 吉光片羽</BlockTitle>
              <div className="diff"><b>一句话区别：</b>凤毛麟角＝<b>稀少而珍贵</b>（褒，多指人才）；屈指可数＝<b>少得能数出来</b>（中性）；寥若晨星＝<b>稀疏得像晨星</b>（中性偏文）；吉光片羽＝<b>残存的珍贵材料</b>（强调「残」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>凤毛麟角</td><td>稀少而珍贵</td><td>多指人才、珍稀事物</td></tr>
                <tr><td>屈指可数</td><td>扳手指就能数清</td><td>中性，只讲数量少</td></tr>
                <tr><td>寥若晨星</td><td>稀疏得像早晨的星星</td><td>书面，强调稀疏</td></tr>
                <tr><td>吉光片羽</td><td>残存的珍贵文物或零星材料</td><td>必须含「残」义</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>凤毛麟角</b>　能贯通文史的大家，如今已是<b>凤毛麟角</b>。</div>
                <div><b>屈指可数</b>　真正读完这部书的人<b>屈指可数</b>。</div>
                <div><b>寥若晨星</b>　获此殊荣者<b>寥若晨星</b>。</div>
                <div><b>吉光片羽</b>　敦煌残卷虽只<b>吉光片羽</b>，却价值连城。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>这一批出土的楚简虽只有残断的三十余枚，却记载了失传已久的乐律，被学界称为____。</ExampleQuestion>
                <ExampleOptions><span>A. 吉光片羽</span><span>B. 凤毛麟角</span><span>C. 屈指可数</span><span>D. 寥若晨星</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中同时有「<b>残断的三十余枚</b>」与「<b>价值极高</b>」，正是「吉光片羽」——<b>残存的、极珍贵的零星材料</b>。「凤毛麟角」「屈指可数」「寥若晨星」都只讲<b>数量少</b>，不含「残缺」这层关键信息。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
    </>
  )
}
