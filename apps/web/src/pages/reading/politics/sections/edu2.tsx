import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'
import { Memo, Mnemonic } from '../mem'

/**
 * 二十五、教育常识（二）教育心理学
 *
 * @remarks 内容整理自「教育常识 1 / 2」讲义：注意、知觉、记忆、思维、情绪、
 * 需要动机、人格、学习理论、迁移策略、发展阶段理论。
 * @returns 该节正文。
 */
export default function Edu2(): ReactElement {
  return (
    <>
      <Callout variant="key">教育心理学在 D 类常识里约 <b>2–3 题</b>，考法几乎全是「<b>给一个生活/课堂场景，问体现了哪个概念</b>」。所以这节的重点不是背定义，而是<b>把概念的「分界线」记住</b>：选择性还是整体性、形成性还是诊断性、正强化还是负强化。</Callout>
      <Memo title="教心：五组最容易混的配对" sub="真题的四个选项常常是同一家族里的四个近亲。下面五组先分清，能挡掉一半的错题。">
        <Mnemonic
          title="正负强化 vs 正负惩罚"
          hot
          verse={<>给好的、撤坏的 → <em>行为变多</em>；给坏的、撤好的 → <em>行为变少</em>。</>}
          note={<>正强化＝给愉悦刺激；负强化＝撤厌恶刺激（都是「行为增加」）；正惩罚＝给厌恶刺激；负惩罚＝撤愉悦刺激（都是「行为减少」）。<b>负强化不是惩罚</b>，这是最高频的坑。</>}
        />
        <Mnemonic
          title="前摄 vs 倒摄抑制"
          verse={<><em>前</em>面的干扰<em>后</em>面的（前摄），<em>后</em>面的干扰<em>前</em>面的（倒摄）。</>}
          note={<>学了汉语拼音再学英语音标，拼音干扰音标＝前摄抑制；学了英语后回头把拼音读错＝倒摄抑制。</>}
        />
        <Mnemonic
          title="皮亚杰四阶段"
          verse={<>「<em>爱奇艺敢签巨星</em>」：0–2 感知运动、2–7 前运算、7–11 具体运算、11 以后形式运算。</>}
          note={<>前运算＝泛灵论 + 自我中心（三山实验）；具体运算＝守恒、可逆、分类（但离不开具体事物）；形式运算＝抽象假设演绎。</>}
        />
        <Mnemonic
          title="耶克斯-多德森"
          verse={<>动机与效率是<em>倒 U 型</em>：<em>难</em>任务要<em>低</em>动机，<em>易</em>任务要<em>高</em>动机。</>}
          note={<>中等难度任务配中等动机。考试越难越要放松，越简单越要绷紧——这条能直接做对「考前心态」类题。</>}
        />
        <Mnemonic
          title="四种迁移理论"
          verse={<>沃尔夫<em>形式训练</em>，桑代克<em>共同要素</em>，苛勒<em>关系转换</em>，贾德<em>经验类化</em>。</>}
          note={<>贾德的「水下击靶」＝概括化理论；苛勒的「小鸡觅食」＝关系转换；桑代克强调两情境有<b>相同要素</b>才迁移。</>}
        />
      </Memo>

      <Block>
        <BlockTitle>1. 注意：三种分类 + 四个品质</BlockTitle>
        <DataTable>
          <tr><th>分类</th><th>有无目的</th><th>是否需要意志努力</th><th>例子</th></tr>
          <tr><td><b>无意注意</b>（不随意）</td><td>无</td><td>不需要</td><td>窗外汽车鸣笛引起注意</td></tr>
          <tr><td><b>有意注意</b>（随意）</td><td>有</td><td><b>需要</b></td><td>硬着头皮听枯燥的课</td></tr>
          <tr><td><b>有意后注意</b>（随意后）</td><td>有</td><td><b>不需要</b></td><td>熟练后边开车边聊天</td></tr>
        </DataTable>
        <PointList>
          <li><b>四个品质</b>：注意的广度（范围）、稳定性（时间）、分配（同时干几件事）、转移（主动换对象）。</li>
          <li><b>注意的分散（分心）不是品质</b>，是被无关事物吸引走的<b>现象</b>，与「转移」的区别是：转移是<b>主动</b>的，分散是<b>被动</b>的。</li>
          <li>「一目十行」＝广度；「一边听课一边记笔记」＝分配；「看完体育课再看数学」＝转移。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题131 · 窗外鸣笛</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>教室外汽车的鸣叫声引起了学生的「注意」。这一注意是（　）。</ExampleQuestion>
          <ExampleOptions>A. 无意注意　B. 有意注意　C. 有意后注意　D. 随意注意</ExampleOptions>
          <ExampleAnswer><b>解析：</b>没有预定目的、不需要意志努力、被动被声音吸引 → <b>无意注意</b>（有意注意＝随意注意，二者是同一个）。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>2. 感觉与知觉：四性 + 四种现象</BlockTitle>
        <DataTable>
          <tr><th>知觉的特性</th><th>一句话</th><th>典型例子</th></tr>
          <tr><td><b>选择性</b></td><td>把对象从背景中挑出来</td><td>用红笔标偏旁，让学生先看这一块</td></tr>
          <tr><td><b>整体性</b></td><td>从整体理解部分</td><td>草书字认得出来、残缺字能补全</td></tr>
          <tr><td><b>理解性</b></td><td>用已有经验解释</td><td>同一张模糊图，不同人看出不同东西</td></tr>
          <tr><td><b>恒常性</b></td><td>条件变了，知觉不变</td><td>晚上看红旗仍觉得是红的</td></tr>
        </DataTable>
        <PointList>
          <li><b>感觉适应</b>：同一刺激持续作用导致感受性变化（进黑屋子慢慢能看见）。</li>
          <li><b>感觉对比</b>：不同刺激作用于同一感官。<b>同时对比</b>＝月明星稀；<b>继时对比</b>＝吃完糖再喝中药更苦。</li>
          <li><b>联觉</b>：一个刺激引发多种感觉（红色让人觉得温暖、声音「甜美」）。</li>
          <li><b>感觉补偿</b>：某方面缺失，其他方面增强（盲人听觉灵敏）。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题132 · 红笔标偏旁</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>为了帮助学生区分「燥」「躁」二字，教师把偏旁部分标成红色，符合（　）。</ExampleQuestion>
          <ExampleOptions>A. 知觉的选择性　B. 知觉的整体性　C. 知觉的理解性　D. 知觉的恒常性</ExampleOptions>
          <ExampleAnswer><b>解析：</b>把偏旁作为「对象」、其余作为「背景」优先感知 → <b>选择性</b>。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>3. 记忆：三个系统 + 两条曲线</BlockTitle>
        <DataTable>
          <tr><th>系统</th><th>时间</th><th>容量</th><th>特点</th></tr>
          <tr><td><b>瞬时记忆</b>（感觉登记）</td><td>0.25–4 秒</td><td>较大</td><td>时间极短、形象鲜明、<b>信息原始、无加工</b></td></tr>
          <tr><td><b>短时记忆</b>（工作记忆）</td><td>＜1 分钟</td><td><b>7±2 组块</b></td><td>意识清晰、<b>可操作</b>、易受干扰</td></tr>
          <tr><td><b>长时记忆</b></td><td>1 分钟以上～终身</td><td><b>无限</b></td><td>容量无限、保持时间长</td></tr>
        </DataTable>
        <PointList>
          <li>按内容分：<b>陈述性记忆</b>（是什么，如「首都是北京」）、<b>程序性记忆</b>（怎么做，如骑车、游泳）。</li>
          <li><b>艾宾浩斯遗忘曲线</b>：先快后慢，所以复习要「<b>及时</b>」。</li>
          <li><b>前摄抑制</b>：前面的学过后面的；<b>倒摄抑制</b>：后面的学过后面的。中间材料记得最差＝双重抑制。</li>
          <li><b>过度学习</b>：学到 150% 效果最好（不是越多越好）。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题133 · 短时记忆的特点</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>（　）<b>不属于</b>短时记忆的特点。</ExampleQuestion>
          <ExampleOptions>A. 容量无限　B. 意识清晰　C. 操作性强　D. 易受干扰</ExampleOptions>
          <ExampleAnswer><b>解析：</b>短时记忆容量有限（7±2 组块），<b>容量无限是长时记忆</b>的特点。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>4. 思维与问题解决：三个「卡住」</BlockTitle>
        <PointList>
          <li><b>聚合思维</b>（求同/集中）：多方向 → 一个答案，标准化考试常用；<b>发散思维</b>（求异）：一个点 → 多种答案，是<b>创造性思维的核心</b>。</li>
          <li><b>功能固着</b>：只看到事物惯常用途（认为砖头只能盖房）；<b>定势</b>：用习惯方式解决问题；<b>酝酿效应</b>：放一放反而想通。</li>
          <li><b>认知冲突</b>：原有认知与新情境矛盾 → 引发思考，是启发性教学的心理依据。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题134 · 哪种提问能引发认知冲突</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>教师提问后，最能引发学生<b>认知冲突</b>的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 「这段话里哪个词最关键？」　B. 「上节课我们学过什么？」　C. 「这个现象的原因是什么？」　D. 「苹果为什么会掉到云里，而不是地上？」</ExampleOptions>
          <ExampleAnswer><b>解析：</b>D 与学生「物体会落地」的已有认知直接矛盾，产生冲突；A、B、C 都只是调取记忆或常规探究。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>5. 情绪、需要与动机</BlockTitle>
        <DataTable>
          <tr><th>情绪状态</th><th>特点</th><th>例子</th></tr>
          <tr><td>心境</td><td>微弱、持久、<b>弥散性</b></td><td>心情好，看什么都顺眼</td></tr>
          <tr><td>激情</td><td>爆发式、强烈、<b>短暂</b></td><td>狂喜、暴怒</td></tr>
          <tr><td>应激</td><td>出乎意料的<b>紧迫</b>情况</td><td>开车突然遇到危险</td></tr>
        </DataTable>
        <PointList>
          <li><b>动机冲突</b>：双趋（两个都想要）、双避（两个都不想要）、趋避（同一个目标又想又怕）、多重趋避。</li>
          <li><b>马斯洛需要层次</b>：生理 → 安全 → 归属与爱 → 尊重 → <b>认知/审美</b> → 自我实现；前四层为<b>缺失性需要</b>，后三层为<b>成长性需要</b>。</li>
          <li><b>动机三功能</b>：激活（让你动起来）、指向（往哪走）、维持和调节（坚持多久）。</li>
          <li><b>内部动机</b>来自活动本身（兴趣、求知欲）；<b>外部动机</b>来自外部诱因（奖励、表扬）。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题135 · 属于成长需要的是</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>下列属于<b>成长需要</b>的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 安全需要　B. 归属与爱的需要　C. 尊重需要　D. 自我实现的需要</ExampleOptions>
          <ExampleAnswer><b>解析：</b>马斯洛把认知、审美、自我实现归为<b>成长性需要</b>；生理、安全、归属与爱、尊重属<b>缺失性需要</b>。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>6. 人格：气质四型 + 人格六性</BlockTitle>
        <DataTable>
          <tr><th>气质类型</th><th>特点</th><th>代表人物说法</th></tr>
          <tr><td><b>胆汁质</b></td><td>精力旺盛、冲动、情绪爆发快</td><td>张飞、李逵</td></tr>
          <tr><td><b>多血质</b></td><td>活泼好动、反应快、兴趣易变</td><td>王熙凤</td></tr>
          <tr><td><b>黏液质</b></td><td>安静稳重、反应慢、耐受性强</td><td>林冲</td></tr>
          <tr><td><b>抑郁质</b></td><td>敏感、细腻、易多愁善感</td><td>林黛玉</td></tr>
        </DataTable>
        <PointList>
          <li><b>气质无好坏</b>，受遗传影响大；<b>性格有优劣</b>，是人格的<b>核心</b>。</li>
          <li><b>人格六性</b>：独特性（人心不同各如其面）、稳定性（江山易改本性难移）、<b>统合性</b>（内在一致性，是心理健康的重要指标）、功能性（性格决定命运）、社会性、可塑性。</li>
          <li><b>自我意识</b>三成分：自我认识、自我体验、自我调控；<b>自我意识</b>在青春期第二次飞跃。</li>
          <li><b>认知风格</b>：场独立（靠自己判断）vs 场依存（靠外部线索）；冲动型（快而错）vs 沉思型（慢而对）。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题136 · 人格的哪一特性</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>「人心不同，各如其面」说明人格具有（　）。</ExampleQuestion>
          <ExampleOptions>A. 稳定性　B. 独特性　C. 统合性　D. 功能性</ExampleOptions>
          <ExampleAnswer><b>解析：</b>强调人与人之间的差异 → <b>独特性</b>。稳定性看「难移」，功能性看「决定命运」，统合性看「内在一致」。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>7. 学习理论：四派一条线</BlockTitle>
        <DataTable>
          <tr><th>流派</th><th>代表人物 / 实验</th><th>核心观点</th></tr>
          <tr><td><b>行为主义</b></td><td>巴甫洛夫（狗唾液）、桑代克（猫开笼）、斯金纳（斯金纳箱）、班杜拉（波波玩偶）</td><td>学习＝刺激与反应的联结；强化决定行为</td></tr>
          <tr><td><b>认知主义</b></td><td>苛勒（黑猩猩取香蕉）、布鲁纳、奥苏贝尔</td><td>学习＝<b>认知结构的重组</b>；布鲁纳主张<b>发现学习</b>，奥苏贝尔主张<b>有意义接受学习</b></td></tr>
          <tr><td><b>建构主义</b></td><td>皮亚杰、维果茨基</td><td>知识是学习者主动<b>建构</b>的；强调情境、协作、会话、意义建构</td></tr>
          <tr><td><b>人本主义</b></td><td>罗杰斯、马斯洛</td><td>学习是<b>自我实现</b>的过程；主张<b>非指导性教学</b>、学生中心</td></tr>
        </DataTable>
        <PointList>
          <li><b>加涅学习水平</b>（由低到高）：信号 → 刺激-反应 → 连锁 → 言语联想 → 辨别 → 概念 → 规则 → 解决问题。</li>
          <li><b>布鲁姆认知目标</b>（由低到高）：知识 → 领会 → 应用 → 分析 → 综合 → 评价。</li>
          <li><b>强化三型</b>（班杜拉）：直接强化、<b>替代强化</b>（看别人受奖自己也学）、自我强化。</li>
          <li><b>观察学习四过程</b>：注意 → 保持 → 再现 → 动机。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题137 · 看到别人被表扬</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>小红看到小绿扶老人过马路被老师表扬，自己也愿意去扶老人。这属于（　）。</ExampleQuestion>
          <ExampleOptions>A. 直接强化　B. 替代强化　C. 自我强化　D. 负强化</ExampleOptions>
          <ExampleAnswer><b>解析：</b>看到<b>榜样</b>受强化而增强自身行为 → <b>替代强化</b>。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>8. 迁移、策略与知识学习</BlockTitle>
        <DataTable>
          <tr><th>分类维度</th><th>类型</th><th>含义</th></tr>
          <tr><td>方向</td><td>顺向 / 逆向</td><td>先前影响后续 / 后续影响先前</td></tr>
          <tr><td>性质</td><td>正 / 负</td><td>促进 / 干扰</td></tr>
          <tr><td>水平</td><td>横向 / 纵向</td><td>同一水平间 / 不同水平间</td></tr>
          <tr><td>内容</td><td>具体 / 一般</td><td>要素重组（木→林→森）/ 原理原则的迁移</td></tr>
        </DataTable>
        <PointList>
          <li><b>学习策略</b>（迈克尔）：<b>认知策略</b>（复述、精加工、组织）＋ <b>元认知策略</b>（计划、监控、调节）＋ <b>资源管理策略</b>（时间、环境、努力管理）。</li>
          <li>列提纲、画思维导图＝<b>组织策略</b>；谐音记忆、编口诀＝<b>精加工策略</b>；划线、反复朗读＝<b>复述策略</b>。</li>
          <li><b>知识学习三阶段</b>：<b>领会</b>（获得）→ 保持（巩固）→ 应用（提取）。</li>
          <li><b>上位学习</b>：从具体到抽象（桌面→面积）；<b>下位学习</b>：从一般到具体（长方形→正方形）；<b>并列结合</b>：面积与体积。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题138 · 从上位到下位</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>学生先学过「长方形的四个角都是直角」，再学「正方形的四个角都是直角」。这属于（　）。</ExampleQuestion>
          <ExampleOptions>A. 上位学习　B. 下位学习　C. 并列结合学习　D. 机械学习</ExampleOptions>
          <ExampleAnswer><b>解析：</b>新知识（正方形）概括水平<b>低于</b>原有知识（长方形），从一般到具体 → <b>下位学习</b>。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>9. 发展阶段理论：三张表背三个人</BlockTitle>
        <DataTable>
          <tr><th>皮亚杰（认知）</th><th>年龄</th><th>标志</th></tr>
          <tr><td>感知运动</td><td>0–2</td><td>客体永久性</td></tr>
          <tr><td>前运算</td><td>2–7</td><td><b>泛灵论、自我中心</b>、不可逆</td></tr>
          <tr><td>具体运算</td><td>7–11</td><td><b>守恒、可逆、分类</b>（需具体事物支持）</td></tr>
          <tr><td>形式运算</td><td>11 以后</td><td>抽象逻辑、假设演绎</td></tr>
        </DataTable>
        <DataTable>
          <tr><th>科尔伯格（道德）</th><th>水平</th><th>阶段关键词</th></tr>
          <tr><td>前习俗（0–9）</td><td>1 / 2</td><td>惩罚与服从 / 相对功利</td></tr>
          <tr><td>习俗（9–15）</td><td>3 / 4</td><td><b>好孩子</b> / 维护权威秩序</td></tr>
          <tr><td>后习俗（16+）</td><td>5 / 6</td><td><b>社会契约</b> / 普遍原则</td></tr>
        </DataTable>
        <PointList>
          <li><b>维果茨基</b>：<b>最近发展区</b>（现有水平与在帮助下可达水平之间的差距）→ 教学应走在发展前面 → <b>支架式教学</b>。</li>
          <li>易混：<b>赞可夫</b>＝发展性教学（五大原则）；<b>洛扎诺夫</b>＝暗示教学法。</li>
          <li><b>埃里克森</b>八阶段：小学阶段的核心冲突是<b>勤奋 vs 自卑</b>；青春期是<b>同一性 vs 角色混乱</b>。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题139 · 最近发展区</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>「学生现有水平与在他人帮助下可能达到的水平之间的差距」是（　）。</ExampleQuestion>
          <ExampleOptions>A. 关键期　B. 最近发展区　C. 学习准备　D. 发展性教学</ExampleOptions>
          <ExampleAnswer><b>解析：</b>维果茨基的<b>最近发展区</b>，教学据此提出「走在发展前面」与支架式教学。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>10. 心理学流派、两种信号系统与似动知觉</BlockTitle>
        <DataTable>
          <tr><th>流派</th><th>代表人物</th><th>一句定位</th></tr>
          <tr><td>构造主义</td><td>冯特、铁钦纳</td><td>心理学独立（1879 莱比锡）；研究<b>意识经验</b>的构成元素</td></tr>
          <tr><td>机能主义</td><td>詹姆斯、杜威</td><td>研究意识的<b>功能与作用</b>（适应环境）</td></tr>
          <tr><td>行为主义</td><td><b>华生</b>、斯金纳</td><td>只研究<b>可观察的行为</b>，反对研究意识</td></tr>
          <tr><td><b>格式塔</b>（完形）</td><td>韦特海默、苛勒、考夫卡</td><td>强调<b>整体大于部分之和</b>，研究直接经验与行为的整体性</td></tr>
          <tr><td>精神分析</td><td>弗洛伊德</td><td><b>潜意识</b>、人格结构（本我/自我/超我）</td></tr>
          <tr><td>人本主义</td><td>马斯洛、罗杰斯</td><td>强调<b>自我实现</b>与人的价值</td></tr>
          <tr><td>认知</td><td>奈瑟、皮亚杰</td><td>把人看作<b>信息加工</b>系统</td></tr>
        </DataTable>
        <PointList>
          <li><b>第一信号系统</b>：以<b>具体刺激</b>为条件（望梅止渴、见风流泪）；<b>第二信号系统</b>：以<b>语言、文字</b>为条件（谈梅生津、听到表扬就高兴）——人类特有。</li>
          <li><b>似动知觉</b>四型：<b>动景运动</b>（电影、动画片＝静止画面连续呈现）、<b>诱发运动</b>（月亮在云中穿行）、<b>自主运动</b>（暗室里的光点似在游动）、<b>运动后效</b>（看完瀑布再看石头觉得石头上飘）。</li>
        </PointList>
        <Callout variant="warn"><b>格式塔＝「整体、组织」，不是「行为」：</b>题干出现「心理是一个整体、一个组织的意义」→ 格式塔；出现「只研究行为、不研究意识」→ 行为主义。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题154 · 动画片与月亮</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>动画片由一张张静止画面连续呈现而成，看上去人物在动。这可以用（　）解释。</ExampleQuestion>
          <ExampleOptions>A. 诱发运动　B. 动景运动　C. 自主运动　D. 运动后效</ExampleOptions>
          <ExampleAnswer><b>解析：</b>静止画面按一定时间间隔连续呈现、产生运动知觉 → <b>动景运动</b>（电影、动画的原理）。「月亮在云中穿行」才是诱发运动。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>11. 学习金字塔、内隐学习与自我意识</BlockTitle>
        <PointList>
          <li><b>学习金字塔</b>（戴尔「经验之塔」的通俗版）：<b>被动学习</b>——听讲 5%、阅读 10%、视听 20%、演示 30%；<b>主动学习</b>——讨论 50%、实践 75%、<b>教别人 90%</b>。结论：<b>留存率随参与度上升</b>。</li>
          <li><b>内隐学习</b>：不知不觉获得经验、改变行为（无意识、潜移默化）；<b>外显学习</b>：有意识、有明确指导。</li>
          <li><b>自我意识三阶段</b>：<b>生理自我</b>（0—3 岁，认自己的身体）→ <b>社会自我</b>（3 岁—青春期，认自己的角色）→ <b>心理自我</b>（青春期以后，认自己的性格与价值观）。</li>
          <li><b>群体规范</b>：群体成员共同认可的行为准则（如「上课不能迟到」「值日生必须扫地」）；<b>舆论</b>是规范的外在压力。</li>
          <li><b>自我防御机制</b>：<b>升华</b>（把冲动转化为社会赞许的行为）、<b>补偿</b>（此路不通换条路）、<b>认同</b>（取他人之长归己）、<b>幽默</b>、合理化（找理由）、投射（把自己的想法安到别人身上）、退行（退回幼稚行为）。</li>
        </PointList>
        <Callout variant="tip"><b>「教别人 90%」这条能直接做题：</b>题目问「哪种方式学习效果最好」，选<b>教授他人 / 实践</b>；问「最差」，选<b>听讲</b>。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题155 · 哪种学习方式留存最高</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>根据学习金字塔理论，下列学习方式中知识留存率<b>最高</b>的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 听老师讲授　B. 阅读教材　C. 观看演示实验　D. 把知识讲给同学听</ExampleOptions>
          <ExampleAnswer><b>解析：</b>「教别人」属于主动学习，留存率约 <b>90%</b>，高于听讲（5%）、阅读（10%）、演示（30%）。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <div className="jingle">
        <div className="jt">教育心理学 · 一句话总结</div>
        <b>看到「给/撤刺激」想强化惩罚，看到「先后干扰」想前后摄，看到「几岁到几岁」想皮亚杰，看到「差距」想最近发展区，看到「榜样受奖」想替代强化。</b>
      </div>
    </>
  )
}
