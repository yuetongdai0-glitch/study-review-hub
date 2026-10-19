import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 四、马克思主义基本原理 · 哲学
 *
 * @returns 该节正文。
 */
export default function S5(): ReactElement {
  return (
    <>
      <Callout variant="key">马原哲学只考「概念归属」：<b>这句话属于哪个原理、哪个规律、哪一派</b>。所以学这一节，重点是给每个原理配一个「标志词」。</Callout>
      
            <Block>
              <BlockTitle>1. 马克思主义概述与两大哲学派别</BlockTitle>
              <PointList>
                <li><b>1848 年《共产党宣言》发表</b>，标志马克思主义的诞生（不是《资本论》）。</li>
                <li>三大组成部分：马克思主义哲学、马克思主义政治经济学、科学社会主义。</li>
                <li>三个直接理论来源：<b>德国古典哲学</b>（黑格尔辩证法 + 费尔巴哈唯物主义）、<b>英国古典政治经济学</b>、<b>英法空想社会主义</b>。</li>
                <li>两大发现：<b>唯物史观</b>和<b>剩余价值学说</b>（不是认识论）。</li>
                <li>理论特征：以实践为基础的<b>科学性和革命性的统一</b>；理论品质：<b>与时俱进</b>；活的灵魂：<b>具体问题具体分析</b>。</li>
                <li>学习马克思主义的<b>根本方法</b>：理论联系实际。</li>
                <li>哲学基本问题：<b>思维与存在（意识与物质）的关系问题</b>。</li>
                <li>第一性 → 划分<b>唯物主义 / 唯心主义</b>；同一性 → 划分<b>可知论 / 不可知论</b>。</li>
                <li>唯物主义三形态：古代朴素（归结为具体实物）、近代形而上学（归结为原子）、辩证唯物主义（唯一特性是客观实在性）。</li>
                <li>唯心主义两形态：<b>主观唯心</b>（人的精神是本原，如「心外无物」）、<b>客观唯心</b>（客观精神是本原，如「理」「绝对精神」）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题21 · 马原概述（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于马克思主义，下列说法错误的是：</ExampleQuestion>
                <ExampleOptions>A.1848 年《共产党宣言》的发表标志着马克思主义的诞生<br />B.马克思主义的直接理论来源包括德国古典哲学、英国古典政治经济学、英法空想社会主义<br />C.马克思的两大发现是唯物史观和剩余价值学说<br />D.马克思主义的理论品质是以实践为基础的科学性和革命性的统一</ExampleOptions>
                <ExampleAnswer><b>解析：</b>D 把「理论特征」说成了「理论品质」。<b>理论特征是科学性与革命性的统一，理论品质是与时俱进</b>。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 物质与意识</BlockTitle>
              <PointList>
                <li>物质是标志<b>客观实在</b>的哲学范畴；<b>客观实在性是物质的唯一特性</b>。</li>
                <li><b>运动是物质的根本属性和存在方式</b>；静止是运动的特殊状态。</li>
                <li>运动<b>绝对、无条件、永恒</b>；静止<b>相对、有条件、暂时</b>。世界是绝对运动和相对静止的统一。</li>
                <li>意识的本质：<b>人脑对客观存在的主观映象</b>（不是「人脑的分泌物」）。</li>
                <li>意识对物质具有<b>能动的反作用</b>（不是决定作用）。</li>
                <li>方法论：<b>尊重客观规律是正确发挥主观能动性的前提</b>（顺序不能反）。</li>
                <li>物质和意识的辩证关系：<b>物质决定意识，意识对物质具有能动的反作用</b>——正确的意识促进事物发展，错误的意识阻碍事物发展。</li>
                <li><b>人工智能与意识</b>（新增考点）：① 人工智能是人的意识的<b>延伸和补充</b>，是意识具有主观能动性的体现；② 人的意识是<b>精神活动过程</b>，人工智能是<b>机械物理过程</b>；③ 人工智能<b>无法完全取代</b>人的意识；④ 人工智能不具备意识独有的特点（<b>自觉能动性、揭示规律</b>等）。</li>
              </PointList>
              <Callout variant="key"><b>一句话区分：</b>物质决定意识（唯物论），意识反作用于物质（辩证法）。凡出现「意识决定物质」「意识第一性」，直接判错。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题22 · 物质与意识（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于物质与意识，下列说法错误的是：</ExampleQuestion>
                <ExampleOptions>A.物质的唯一特性是客观实在性<br />B.物质的根本属性和存在方式是运动<br />C.意识对物质起决定作用<br />D.尊重客观规律是正确发挥主观能动性的前提</ExampleOptions>
                <ExampleAnswer><b>解析：</b>C 错。意识对物质是<b>能动的反作用</b>，决定作用是物质对意识。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 唯物辩证法：两大总特征 + 三大规律</BlockTitle>
              <PointList>
                <li>总特征：<b>联系的观点和发展的观点</b>（唯物辩证法是关于<b>普遍联系和永恒发展</b>的科学）。</li>
                <li>联系的特征：<b>客观性、普遍性、多样性、条件性</b>（不是「直接性」——万事万物处于直接联系中是错的）。</li>
                <li>整体与部分：整体居<b>主导</b>地位、统率部分；<b>关键部分</b>的功能及变化甚至对整体起决定作用（不是任何部分）。</li>
                <li>发展的实质：<b>新事物的产生和旧事物的灭亡</b>；区分新旧事物的根本标志是<b>是否符合事物发展的必然趋势</b>。</li>
                <li><b>对立统一规律</b>（矛盾规律）揭示发展的<b>源泉和动力</b>，是唯物辩证法的<b>实质和核心</b>。</li>
                <li>矛盾基本属性：<b>同一性和斗争性</b>（不是普遍性和特殊性）。</li>
                <li>矛盾的<b>普遍性</b> → 用矛盾分析法、全面看问题；<b>特殊性</b> → 具体问题具体分析。</li>
                <li><b>矛盾发展的不平衡性</b>：主要矛盾与次要矛盾、矛盾的主要方面与次要方面；事物性质由<b>主要矛盾的主要方面</b>决定。</li>
                <li><b>两点论与重点论</b>：看问题既要全面（两点），又要善于抓住重点（重点论）；坚持两点论与重点论的统一。</li>
                <li><b>内因是事物发展的根据（第一位原因），外因是事物发展的条件</b>，外因通过内因起作用。</li>
                <li><b>量变质变规律</b>揭示发展的<b>形式和状态</b>；区分量变与质变的根本标志是<b>是否超出度的范围</b>；量变是质变的必要准备，量变达到一定程度必然引起质变。</li>
                <li><b>否定之否定规律</b>揭示发展的<b>方向和道路</b>；辩证否定的实质是<b>「扬弃」</b>；发展表现为<b>螺旋式上升、波浪式前进</b>。</li>
              </PointList>
              <Callout variant="formula"><span className="formula">源泉动力 = 对立统一 ｜ 形式状态 = 量变质变 ｜ 方向道路 = 否定之否定</span><br />这三句是马原最经典的「三对三」连线题。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题23 · 三大规律（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于唯物辩证法的基本规律，下列说法正确的有：<br />①对立统一规律揭示了事物发展的源泉和动力<br />②量变质变规律揭示了事物发展的方向和道路<br />③辩证否定的实质是「扬弃」<br />④矛盾的基本属性是同一性和斗争性</ExampleQuestion>
                <ExampleOptions>A.①②③　B.①③④　C.②③④　D.①②④</ExampleOptions>
                <ExampleAnswer><b>解析：</b>②错，量变质变揭示的是<b>形式和状态</b>，方向和道路是<b>否定之否定</b>规律。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 认识论：实践、认识、真理</BlockTitle>
              <PointList>
                <li>实践是<b>人类能动地改造世界</b>的社会性的客观物质活动；三种基本形式：<b>物质生产实践</b>（最基本、首要）、<b>社会政治实践</b>、<b>科学文化实践</b>。</li>
                <li><b>实践是认识的来源</b>（直接经验与间接经验都来自实践）、动力、目的，也是<b>检验认识真理性的唯一标准</b>。</li>
                <li>认识具有<b>主体差异性</b>（不同主体对同一对象认识可能不同）。</li>
                <li>两次飞跃：<b>由感性认识到理性认识</b>（第一次）、<b>由理性认识到实践</b>（第二次，更重要）。</li>
                <li>感性认识是认识的<b>初级阶段</b>，三种形式：<b>感觉、知觉、表象</b>；理性认识是<b>高级阶段</b>，三种形式：<b>概念、判断、推理</b>。二者是<b>辩证统一</b>：理性认识依赖于感性认识，感性认识有待于发展为理性认识。</li>
                <li>真理：<b>内容客观、形式主观</b>；真理的绝对性与相对性是<b>同一客观真理的两种属性</b>，不是两个真理。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题24 · 认识论（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于认识论，下列说法错误的是：</ExampleQuestion>
                <ExampleOptions>A.物质生产实践是最基本的实践活动<br />B.直接经验是认识的来源<br />C.实践是检验认识真理性的唯一标准<br />D.感性认识有待于发展和深化为理性认识</ExampleOptions>
                <ExampleAnswer><b>解析：</b>B 错。认识的来源是<b>实践</b>，直接经验只是获取认识的途径之一。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>5. 唯物史观</BlockTitle>
              <PointList>
                <li>社会历史观的基本问题：<b>社会存在与社会意识的关系</b>，据此划分<b>唯物史观</b>与<b>唯心史观</b>。</li>
                <li>社会存在包括自然地理环境、人口因素、<b>物质生产方式</b>；<b>物质生产方式是社会存在和发展的基础及决定力量</b>。</li>
                <li>社会意识分<b>意识形态</b>（政治法律思想、道德、艺术、宗教、哲学、大部分社会科学，<b>有阶级性</b>）与<b>非意识形态</b>（自然科学、语言学、逻辑学、心理学等，<b>无阶级性</b>）。</li>
                <li>社会意识具有<b>相对独立性</b>（不是绝对独立）：与社会存在发展不完全同步、不平衡；有历史继承性；对社会存在有能动反作用。</li>
                <li>社会基本矛盾：<b>生产力与生产关系、经济基础与上层建筑</b>；其中<b>生产力与生产关系的矛盾更根本</b>。</li>
                <li>生产力三要素：<b>劳动者（起主导作用）、劳动资料、劳动对象</b>；<b>生产工具</b>是生产力发展水平的客观标志。</li>
                <li>生产关系三要素：<b>生产资料所有制形式（基础、区分社会制度的根本标志）</b>、人们在生产中的地位和相互关系、产品分配形式。</li>
                <li>上层建筑：<b>政治上层建筑居主导地位，国家政权是核心</b>；观念上层建筑包括政治法律思想、道德、艺术、宗教、哲学。</li>
                <li>人民群众：社会历史的主体，是历史的创造者，对社会发展起<b>决定性</b>作用；是社会物质财富、精神财富的创造者，是社会变革的<b>决定力量</b>（不是领导力量）。</li>
                <li><b>两种历史观的对立</b>：<b>英雄史观</b>把历史发展归于少数统治者或社会精英；<b>群众史观</b>认为人民群众起决定作用。</li>
                <li>群众史观<b>承认</b>个人特别是历史人物的作用（不是否认）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题25 · 唯物史观（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于唯物史观，下列说法错误的是：</ExampleQuestion>
                <ExampleOptions>A.物质生产方式是社会存在和发展的决定力量<br />B.生产资料所有制形式是生产关系的基础<br />C.生产工具是衡量生产力水平的标志<br />D.人民群众是社会变革的领导力量</ExampleOptions>
                <ExampleAnswer><b>解析：</b>D 错。人民群众是社会变革的<b>决定力量</b>，领导力量是<b>无产阶级政党</b>。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
