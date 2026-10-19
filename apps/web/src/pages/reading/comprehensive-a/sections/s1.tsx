import type { ReactElement } from 'react'
import { Card, ExerciseCard } from '@/components/content'

/**
 * 底层方法：答案是怎么"长"出来的
 *
 * @returns 该节正文。
 */
export default function S2(): ReactElement {
  return (
    <>
      <div className="goal"><div>🎯 <b>本课目标：</b>把"做题"这件事拆成四个可复制的动作：<b>审题 → 析点 → 加工 → 书写</b>。学完这一课，你拿到任何一道题，都知道第一步该干什么、第二步该干什么，而不是"看着材料发呆"。</div></div>
      
        <div className="think">
          <div className="think-t">先看"答案思路"：综应A的答案不是想出来的，是"从材料里拆出来再拼回去"的</div>
          <p>很多同学做综应A的方式是：读一遍材料 → 凭感觉写几句 → 抄几句原文。这是最典型的低分打法。袁东体系给你的是相反的路径：</p>
          <div className="line">
            材料（散乱的信息） → <b>审题</b>（问的是什么） → <b>析点</b>（逐条拆出小要点） → <b>加工</b>（合并同类项、提炼总括词） → <b>书写</b>（总括词 + 分述）
          </div>
          <p><b>关键认知：</b>答案的"骨架"是题干给的，"血肉"是材料给的，你的工作只有一件事——<b>把材料的散点，按题干的骨架重新排列组合</b>。所以"材料为王"不是口号，是操作手册。</p>
        </div>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 朝阳街道老旧小区改造</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是A市H区朝阳街道综合办公室的工作人员。根据材料，<b>概括该街道老旧小区改造后仍存在的主要问题</b>。<br />要求：准确、全面，分条列项，不超过250字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">2021年起，朝阳街道对辖区6个老旧小区实施改造，完成了外墙保温、屋面防水、管网更换，新增路灯120盏、停车位430个，改造后小区面貌焕然一新。但改造完成半年后，居民陆续反映：新装路灯已有11盏不亮，反映多次无人维修；新增停车位大量被外来车辆和"僵尸车"占用，本小区车主依旧一位难求；6号楼加装电梯一事，一楼住户认为影响采光、不愿分摊费用，楼上住户认为"不能再拖"，社区组织调解5次仍未谈拢；改造后引入的物业公司因物业费收缴率不足四成，进驻半年即撤出，小区重回无人管理状态；健身器材周边没有照明，晚上没人敢去；改造时拆掉的社区小卖部和菜摊至今没有恢复，居民买菜要多走两公里；部分楼道重新堆起杂物，消防通道被占，社区劝导多次但反复回潮。有居民直言："改造前什么样，改造后还是什么样。"</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：把材料拆—并—收，四步走完就出答案</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题（约30秒）</b><p><span className="kb">身份</span>街道办综合办工作人员（基层，无执法权、无资金审批权）<span className="kb">范围</span>本题材料 <span className="kb">对象</span>改造后仍存在的<b>问题</b>（不是成绩，也不是对策）<span className="kb">问数</span>一问 <span className="kb">字数</span>不超过250字 → 约 4 类、每类 55 字左右</p><p><b>先定调：</b>材料前半段的"完成改造、面貌焕然一新"是干扰项，属于成绩，<b>不写进答案</b>。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点（逐句拆，宁多勿漏）</b><p>按句号切分，逐条拆出散点（每条后面标上符号△）：</p><p><span className="kb">△</span>路灯损坏无人维修｜<span className="kb">△</span>停车位被外来车辆和"僵尸车"占用｜<span className="kb">△</span>加装电梯高低层意见分歧、调解5次未果｜<span className="kb">△</span>物业费收缴率低、物业撤出｜<span className="kb">△</span>健身区无照明｜<span className="kb">△</span>原有小卖部、菜摊拆除后未恢复、买菜远｜<span className="kb">△</span>楼道堆物、消防通道被占、反复回潮｜<span className="kb">△</span>群众评价"和改造前一样"。</p><p className="muted">共拆出 8 条散点，暂时不分顺序、不讲究措辞——这一步只求"不漏"。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工（合并同类项 + 提炼总括词）</b><p><b>合并同类项：</b>把 8 条按"同层面法"归并——</p><p>① 路灯不亮＋健身区无照明＋消防通道堆物回潮 → 都属"建好之后没人管"，合并为<b>设施维护不到位</b>；<br />② 停车位被占＋小卖部菜摊未恢复 → 都属"配套没配好"，合并为<b>配套规划不合理</b>；<br />③ 加装电梯高低层分歧、调解未果 → 单独一类，总括词选材料原词<b>群众意见不统一</b>；<br />④ 物业费收缴率低＋物业撤出＋"和改造前一样" → 都指向"改造成果守不住"，用"造大哥"概括为<b>后期管理缺位</b>。</p><p><b>提炼总括词三招：</b>①"维护不到位"用<b>选大哥</b>（材料原词"没人维修"的反面）；②"配套规划不合理"用<b>选词组合</b>（配套＋规划）；③"后期管理缺位"用<b>造大哥</b>（把物业费、物业撤出、无人管理收口）。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写（总括词前置，分条列项）</b><p>每条写成"<b>总括词。＋具体表现</b>"，四条排列，"一、二、三、四"标号，正文控制在 250 字内，写到上限附近。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过250字）</div>
          <p>1.<b>设施维护不到位。</b>路灯损坏长期无人维修，健身区缺少照明，楼道堆物、消防通道被占且反复回潮。</p>
          <p>2.<b>配套规划不合理。</b>新增停车位被外来车辆和"僵尸车"占用，原有小卖部、菜摊拆除后未恢复，居民买菜不便。</p>
          <p>3.<b>群众意见不统一。</b>加装电梯中一楼与楼上住户在采光、费用分摊上分歧大，多次调解未达成一致。</p>
          <p>4.<b>后期管理缺位。</b>物业费收缴率低、物业公司撤出，小区重归无人管理，改造成果难以维持，群众满意度低。</p>
        </div>
        <figure className="fig">
          <svg viewBox="0 0 640 240" role="img" aria-label="综应A万能四步：审题、析点、加工、书写">
            <defs>
              <marker id="caA1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#94a3b8"></path>
              </marker>
            </defs>
            <text x={320} y={26} textAnchor="middle" fontSize={14} fontWeight="700" fill="#1e293b">万能四步：每一道题都按这四步走，一步都不能跳</text>
            <rect x={16} y={44} width={136} height={54} rx={9} fill="#eef2ff" stroke="#6366f1" strokeWidth={1.5}></rect>
            <text x={84} y={68} textAnchor="middle" fontSize={14.5} fontWeight="700" fill="#3730a3">① 审题</text>
            <text x={84} y={88} textAnchor="middle" fontSize={11.5} fill="#4338ca">30 秒 · 圈五要素</text>
            <text x={162} y={76} textAnchor="middle" fontSize={15} fill="#94a3b8" markerEnd="url(#caA1)">→</text>
            <rect x={172} y={44} width={136} height={54} rx={9} fill="#eef2ff" stroke="#6366f1" strokeWidth={1.5}></rect>
            <text x={240} y={68} textAnchor="middle" fontSize={14.5} fontWeight="700" fill="#3730a3">② 析点</text>
            <text x={240} y={88} textAnchor="middle" fontSize={11.5} fill="#4338ca">宁多勿漏 · 边读边标</text>
            <text x={318} y={76} textAnchor="middle" fontSize={15} fill="#94a3b8">→</text>
            <rect x={328} y={44} width={136} height={54} rx={9} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.6}></rect>
            <text x={396} y={68} textAnchor="middle" fontSize={14.5} fontWeight="700" fill="#92400e">③ 加工</text>
            <text x={396} y={88} textAnchor="middle" fontSize={11.5} fill="#b45309">合并同类项 + 总括词</text>
            <text x={474} y={76} textAnchor="middle" fontSize={15} fill="#94a3b8">→</text>
            <rect x={484} y={44} width={136} height={54} rx={9} fill="#eef2ff" stroke="#6366f1" strokeWidth={1.5}></rect>
            <text x={552} y={68} textAnchor="middle" fontSize={14.5} fontWeight="700" fill="#3730a3">④ 书写</text>
            <text x={552} y={88} textAnchor="middle" fontSize={11.5} fill="#4338ca">总括词 + 分条列项</text>
            <text x={84} y={124} textAnchor="middle" fontSize={11.5} fontWeight="700" fill="#64748b">产出：定下要什么</text>
            <text x={84} y={144} textAnchor="middle" fontSize={11.5} fill="#64748b">几问 · 多少字</text>
            <text x={240} y={124} textAnchor="middle" fontSize={11.5} fontWeight="700" fill="#64748b">产出：一堆散点</text>
            <text x={240} y={144} textAnchor="middle" fontSize={11.5} fill="#64748b">△ ☆ □ ○ 分堆</text>
            <text x={396} y={124} textAnchor="middle" fontSize={11.5} fontWeight="700" fill="#64748b">产出：几个大类</text>
            <text x={396} y={144} textAnchor="middle" fontSize={11.5} fill="#64748b">每类配一个总括词</text>
            <text x={552} y={124} textAnchor="middle" fontSize={11.5} fontWeight="700" fill="#64748b">产出：分条列项</text>
            <text x={552} y={144} textAnchor="middle" fontSize={11.5} fill="#64748b">总括词 + 具体展开</text>
            <line x1={16} y1={168} x2={624} y2={168} stroke="#e2e8f0" strokeWidth={1.4}></line>
            <text x={320} y={194} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#b45309">最常见的两种跳步：不审题就下笔（答偏 = 0 分）· 不加工就誊抄（一堆话没层次）</text>
            <text x={320} y={220} textAnchor="middle" fontSize={12.5} fill="#334155">审题口诀：我是谁 · 看哪几则 · 答什么 · 几问 · 多少字（30 秒内完成）</text>
          </svg>
          <figcaption>图：万能四步与每步的「产出」—— 分数主要丢在跳过③加工、或①审题答偏</figcaption>
        </figure>
      
        <h3>1.1 万能四步：审题 → 析点 → 加工 → 书写</h3>
        <div className="steps">
          <div className="step"><div className="no">1</div><div><b>审题（约30秒，但决定成败）</b><p>逐字划出题干五要素：<b>身份、范围、对象、问数、字数</b>。审题错，全盘皆输——把"概括做法"答成"概括意义"，这一题就是0分。</p></div></div>
          <div className="step"><div className="no">2</div><div><b>析点（找点，宁多勿漏）</b><p>带着"题干要什么"回材料，一个自然段一个自然段地拆。用符号边读边标（△问题 ○做法 ☆原因 □影响）。<b>能直接摘的摘，不能摘的用自己的话提炼</b>。这一阶段不必考虑文采和顺序。</p></div></div>
          <div className="step"><div className="no">3</div><div><b>加工（这一步决定档次）</b><p>把散乱的小点<b>合并同类项</b>（意思相近的合成一类），再给每一类提炼一个<b>总括词</b>（段旨句），最后按逻辑排序。加工得好，答案就"有层次"；不加工，答案就是"一堆话"。</p></div></div>
          <div className="step"><div className="no">4</div><div><b>书写（让阅卷人一眼看到分）</b><p>分条列项（一、二、三 / 1.2.3.），每条"总括词 + 具体展开"；关键词尽量用材料原词；字迹工整、卷面干净；字数贴近上限但不超格。</p></div></div>
        </div>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · "双随机、一公开"监管改革</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是S市市场监督管理局办公室的工作人员。根据材料，<b>概括S市"双随机、一公开"监管改革的主要做法，并说明取得的成效</b>。<br />要求：准确、全面，分条列项，不超过300字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">S市市场监督管理局推行"双随机、一公开"监管改革。改革前，各科室按条线各自检查，同一家企业一年最多被查11次，企业疲于应付。改革后，市局建立市场主体名录库和执法人员名录库，制定27项抽查事项清单，随机抽取检查对象、随机选派执法人员，抽查结果及时公开。具体做法还包括：按信用风险分级分类，对信用良好的企业降低抽查比例，对失信企业提高抽查比例；组织跨部门联合抽查，与生态环境、应急管理等部门"一次进门、多项检查"；依托"互联网+监管"平台随机抽取、全程留痕，检查结果7个工作日内在门户网站公示。改革以来，全市年度检查次数比改革前下降46%，企业合规率由78%上升到89%，全年未发生系统性风险事件，企业满意度测评达92%。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：题干出现"和"＝两问，先判问数再动笔</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题：先把五要素圈出来</b><p><span className="kb">身份</span>市监局办公室工作人员 <span className="kb">对象</span><b>做法＋成效</b>（两问！）<span className="kb">范围</span>本题材料 <span className="kb">问数</span><b>两问</b> <span className="kb">字数</span>不超过300字</p><p><b>判断依据：</b>题干出现"概括……<b>并</b>说明……"，且出现"说明"。<b>两问就必须答两块</b>，只答做法会直接丢掉一半分。下一步马上反推字数：做法占 2/3（约200字），成效占 1/3（约100字）。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：按"做法（○）"和"成效（□）"两种符号分堆</b><p><span className="kb">○做法</span>建立两个名录库｜制定27项抽查事项清单｜随机抽取对象、随机选派人员｜结果及时公开｜按信用风险分级分类、信用好的降比例｜跨部门联合抽查、一次进门多项检查｜依托"互联网+监管"平台随机抽取、全程留痕｜结果7个工作日内公示。</p><p><span className="kb">□成效</span>检查次数下降46%｜企业合规率78%→89%｜未发生系统性风险事件｜企业满意度92%。</p><p className="muted">"改革前同一家企业一年被查11次"是背景对比，不写进答案，但可以用来给成效作注解。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：做法合并成 4 类，成效压成 1 条</b><p><b>做法合并：</b>两个名录库＋随机抽取＋结果公开 → <b>清单化、随机化抽查</b>；信用分级 → <b>分级分类监管</b>；跨部门联合 → <b>部门联合抽查</b>；平台留痕、7个工作日公示 → <b>平台化留痕与公示</b>。<br /><b>成效合并：</b>四个数据同属"改革见效"，压成一条，<b>数据必须保留</b>——数字就是成效最硬的证据。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>两段式：先"做法："4 条，再"成效："1 条。每条总括词前置，篇幅按 2:1 分配。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过300字）</div>
          <p><b>做法：</b>1.<b>清单化随机抽查。</b>建立市场主体名录库和执法人员名录库，制定27项抽查事项清单，随机抽取检查对象、随机选派执法人员，结果及时公开。2.<b>分级分类监管。</b>按信用风险分级分类，降低信用良好企业抽查比例。3.<b>部门联合抽查。</b>与生态环境、应急管理等部门开展联合检查，"一次进门、多项检查"。4.<b>平台化留痕公示。</b>依托"互联网+监管"平台随机抽取、全程留痕，结果7个工作日内公示。</p>
          <p><b>成效：</b>检查次数下降46%，企业合规率由78%上升至89%，未发生系统性风险事件，企业满意度达92%。</p>
        </div>
        <h3>1.2 审题五要素：把这五样圈出来，题就不会答偏</h3>
        <table>
          <tr className="thead-row"><th>要素</th><th>看什么</th><th>答偏的典型表现</th></tr>
          <tr><td data-label="要素"><b>身份</b></td><td data-label="看什么">"你是谁"（街道办助理 / 图书馆工作人员 / 文化馆职员）——决定你的权限和口吻</td><td data-label="答偏的典型表现">社区工作人员却写"建议修改《××法》"（越权）</td></tr>
          <tr><td data-label="要素"><b>范围</b></td><td data-label="看什么">"根据材料2"就只在材料2找；"结合给定材料"就全卷找</td><td data-label="答偏的典型表现">把材料3、4的内容写进"根据材料2"的题，白写还扣分</td></tr>
          <tr><td data-label="要素"><b>对象</b></td><td data-label="看什么">到底让你概括什么/解决什么：问题、原因、影响、做法、变化、意见……</td><td data-label="答偏的典型表现">要"做法"答成"意义"；要"问题"答成"对策"</td></tr>
          <tr><td data-label="要素"><b>问数</b></td><td data-label="看什么">一问还是两问？出现"和/及/并"或"概括准确""问题明确"多为两问</td><td data-label="答偏的典型表现">两问只答一问，直接丢一半分</td></tr>
          <tr><td data-label="要素"><b>字数</b></td><td data-label="看什么">上限是多少？反推要写几个点（一般每点 40~60 字）</td><td data-label="答偏的典型表现">250字写8个点，每点一句半，全部展不开</td></tr>
        </table>
        <div className="callout gold"><b>审题口诀：</b><b>"我是谁、看哪几则、答什么、几问、多少字"</b>——五个问题各用笔圈一个字，30秒内必须完成。</div>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 马路市场整治</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是N市城市管理局综合科的工作人员。根据材料，<b>概括当前该市"马路市场"整治工作中存在的主要问题</b>。<br />要求：准确、全面，分条列项，不超过250字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">N市对城区5处马路市场开展整治。整治前，早市摊贩沿街摆放、占道经营，早晚高峰人车混行。市城管局在城区划定3处临时便民市场，引导摊贩入场经营；发放宣传单3000份，制作宣传展板12块；在重点路段设置早晚高峰岗。整治后，主干道通行速度提升约20%。但记者走访发现：部分摊贩认为临时市场位置偏远、客流少，交了摊位费却赚不回成本，又偷偷回到原处摆摊；临时市场没有遮阳棚、没有上下水，夏天菜叶腐烂发臭；垃圾清运每天只有一次，收市后地上一片烂菜；部门之间"各管一段"，占道经营归城管、食品安全归市场监管、噪声油烟归生态环境，群众投诉被推来推去；执法队员小李说"劝走了又来，一天要跑七八趟，人手实在不够"；附近居民张女士说"路是通了，但我买菜要多走二十分钟"；还有摊贩反映，摊位分配不够公开，靠关系才能拿到好位置。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：对象是"问题"，材料里的成绩是干扰项</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题：两处最容易答偏的地方</b><p><span className="kb">身份</span>城管局综合科工作人员 <span className="kb">范围</span>本题材料 <span className="kb">对象</span><b>问题</b>（不是做法、不是成效）<span className="kb">问数</span>一问 <span className="kb">字数</span>不超过250字 → 5 条</p><p><b>陷阱一（对象）：</b>材料开头大段写"划定3处市场、发3000份宣传单、通行速度提升20%"，这些都是<b>做法和成效，属于干扰信息</b>，一旦写进"问题"里就答偏了。<br /><b>陷阱二（身份）：</b>身份是城管局工作人员，可以提"加强部门协同"，但不宜写"修改相关法规"。<b>不过本题只要求概括问题，不要求对策，所以问题之外的都不要写。</b></p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：把"成绩"划掉，只在问题句上标△</b><p>用转折词定位：材料从"<b>但</b>记者走访发现"开始，后面全是问题。<br /><span className="kb">△</span>市场位置偏、客流少、摊位费高于收益、摊贩回流｜<span className="kb">△</span>无遮阳棚、无上下水、菜叶腐烂｜<span className="kb">△</span>垃圾清运不及时、收市后脏乱｜<span className="kb">△</span>部门各管一段、投诉被推诿｜<span className="kb">△</span>执法人手不足、反复劝导效果差｜<span className="kb">△</span>居民买菜多走二十分钟｜<span className="kb">△</span>摊位分配不公开、靠关系拿好位置。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：7 条合并为 5 类</b><p>① 位置偏＋客流少＋摊位费高＋摊贩回流 → <b>引导安置不到位</b>；<br />② 无遮阳棚、上下水＋垃圾清运不及时 → <b>市场配套与管理不足</b>；<br />③ 各管一段＋投诉推诿 → <b>部门协同不畅</b>；<br />④ 人手不足＋反复劝导 → <b>一线执法力量不足</b>；<br />⑤ 分配不公开＋靠关系 → <b>摊位分配不透明</b>；居民买菜多走二十分钟并入②或单独作"便民性不足"，本题并入①更紧凑。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>5 条，每条"总括词＋具体表现"，250字内写完。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过250字）</div>
          <p>1.<b>引导安置不到位。</b>临时市场位置偏远、客流少，摊位费高于经营收益，摊贩回流原处摆摊，占道问题反弹，居民买菜也不方便。</p>
          <p>2.<b>市场配套与管理不足。</b>临时市场无遮阳棚、无上下水，垃圾每日仅清运一次，收市后环境脏乱、异味扰民。</p>
          <p>3.<b>部门协同不畅。</b>占道、食品、噪声分属不同部门，各管一段，群众投诉被相互推诿。</p>
          <p>4.<b>一线执法力量不足。</b>执法人手少，摊贩"劝走又来"，一天反复巡查七八趟，整治效果难以保持。</p>
          <p>5.<b>摊位分配不透明。</b>摊位分配规则不公开，存在靠关系获取好位置的现象。</p>
        </div>
        <h3>1.3 材料阅读的底层思维：粗读三维 + 精读二维</h3>
        <p>袁东体系读材料讲究"先粗后精"。粗读是为了<b>找话题、找总括词、划文段</b>；精读是为了<b>把点抠细、对着题目组答案</b>。</p>
        <table>
          <tr className="thead-row"><th>阶段</th><th>维度</th><th>具体看什么</th></tr>
          <tr><td rowSpan={3} data-label="阶段" data-group="粗读（找骨架）"><b>粗读三维</b></td><td data-label="维度">首尾句</td><td data-label="具体看什么">段落的开头句和结尾句，往往是一段的"总起"或"总结"，可直接作为总括词的来源</td></tr>
          <tr><td data-label="维度">关联词 / 关键词 / 高频词</td><td data-label="具体看什么">转折词（但是/然而/却）后面常是"问题"；并列词（同时/此外/一方面）前后都是要点；反复出现的词≈得分词</td></tr>
          <tr><td data-label="维度">主体内容</td><td data-label="具体看什么">这一段到底在讲"谁、干了什么、结果如何"，据此判断文段划分</td></tr>
          <tr><td rowSpan={2} data-label="阶段" data-group="精读（抠细节）"><b>精读二维</b></td><td data-label="维度">化大为小</td><td data-label="具体看什么">以<b>句号</b>为单位把长段落切开，一句一句看，避免"一大段只提炼出一句废话"</td></tr>
          <tr><td data-label="维度">目标导向</td><td data-label="具体看什么">始终盯着题干要的"对象"去找，跟题目无关的内容果断跳过（材料里一定有干扰信息）</td></tr>
        </table>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 返乡青年创业</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是P县人力资源和社会保障局的工作人员。根据材料，<b>概括P县返乡青年创业面临的主要困难</b>。<br />要求：准确、全面，分条列项，不超过250字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">P县是劳务输出大县，近三年返乡创业青年累计1200余人，主要投向电商、种养殖和乡村旅游。创业路上并不轻松。返乡青年王磊2022年开始做农产品电商，第一年就因为冷链不完善，3000斤猕猴桃烂在路上，损失近4万元；他跑遍县里几家银行，因没有房产抵押，贷款被一次次拒绝。做民宿的李娜说，从提交材料到拿到营业执照和消防许可，前后跑了6个部门、花了近两个月，等手续齐备时旺季已经过去。养羊的赵鹏想请县里的兽医站做技术指导，可全县兽医只有3个人，一个月才来一次。此外，多名返乡青年反映，县里的创业孵化基地虽已挂牌，但场地小、设备旧、没有创业导师，入驻后基本"自生自灭"；还有人提到，村里年轻人都外出打工，招不到熟练工人，只能自己既当老板又当工人。县农业农村局一位工作人员坦言，各部门的扶持政策分散在不同文件里，青年们"不知道找谁、不知道能补贴多少"。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：粗读抓骨架＋精读抠细节：长段落要按句号切开看</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">身份</span>县人社局工作人员 <span className="kb">对象</span>返乡青年创业的<b>困难</b>（＝问题）<span className="kb">字数</span>不超过250字 → 5 条</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>粗读三维：先找骨架</b><p><span className="kb">首句</span>"P县是劳务输出大县……返乡创业青年累计1200余人"——总起句，交代背景，不写进答案。<br /><span className="kb">关联词</span>"<b>并</b>不轻松""<b>然而</b>"式的转折（"并不轻松"）提示后面全是困难；"<b>此外</b>""<b>还</b>有人提到"提示并列要点。<br /><span className="kb">高频词</span>反复出现"跑""缺""没有""不够"——这些就是得分词的信号灯。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>精读二维：化大为小，一句一个点</b><p>把这一大段按<b>句号</b>切开，一句一句抠：</p><p>冷链不完善损失4万元 → <b>基础设施薄弱</b>；无抵押被银行拒绝 → <b>融资难</b>；跑6个部门、耗时近两个月 → <b>审批流程繁琐</b>；全县兽医仅3人、一个月来一次 → <b>技术服务不足</b>；孵化基地场地小、设备旧、无导师 → <b>孵化服务缺位</b>；招不到熟练工人 → <b>用工短缺</b>；政策分散在不同文件、不知道找谁 → <b>政策信息不集中</b>。</p><p className="muted">一句一个点，先拆出 7 条再说——这一步宁可拆细。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>加工：7 条并成 5 类</b><p>冷链＋孵化基地场地设备 → <b>基础设施与服务支撑薄弱</b>；无抵押贷款难 → <b>融资渠道不畅</b>；审批跑6个部门 → <b>审批流程繁琐</b>；兽医少＋熟练工少 → <b>专业人才和用工短缺</b>；政策分散、不知找谁 → <b>政策指导缺位</b>。</p></div></div>
          <div className="dstep"><div className="dn">5</div><div className="db"><b>书写</b><p>每条"总括词＋具体表现"，把"4万元""6个部门""两个月""3个人"等关键数字保留一两个作证。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过250字）</div>
          <p>1.<b>基础设施与服务支撑薄弱。</b>冷链设施不完善导致产品损耗大；创业孵化基地场地小、设备旧、缺少创业导师。</p>
          <p>2.<b>融资渠道不畅。</b>青年缺少抵押物，银行贷款难以获批，创业资金紧张。</p>
          <p>3.<b>审批流程繁琐。</b>办理营业执照、消防许可等需跑多个部门，耗时近两个月，错过经营旺季。</p>
          <p>4.<b>专业人才和用工短缺。</b>全县兽医仅3人，技术指导频次低；农村熟练工人少，招工困难。</p>
          <p>5.<b>政策指导缺位。</b>扶持政策分散在不同文件中，青年不清楚申报渠道和补贴标准。</p>
        </div>
        <h3>1.4 边读边标：一套符号走完全卷</h3>
        <div className="kp"><div className="kp-t"><span className="no">标</span>四大要素，四种符号</div>
          <ul>
            <li><b>△ 问题</b>：缺、少、难、差、慢、乱、不到位、没人管……（负面词）</li>
            <li><b>☆ 原因</b>：因为、由于、根源在于、归因于……</li>
            <li><b>□ 影响</b>：有利于、推动了、促进了 / 不利于、导致、危害了……</li>
            <li><b>○ 做法（对策）</b>：动词打头——出台、设立、建立、开展、联合、优化……</li>
          </ul>
          <p><b>为什么必须标：</b>材料一大堆信息，不改造成"结构化"的，加工那一步就会乱成一锅粥。标注的本质，是<b>把"读"变成"拆"</b>。</p>
        </div>
      
        <figure className="fig">
          <svg viewBox="0 0 640 268" role="img" aria-label="边读边标：材料的四种信息与四种符号">
            <defs>
              <marker id="caA2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#94a3b8"></path>
              </marker>
            </defs>
            <text x={320} y={24} textAnchor="middle" fontSize={14} fontWeight="700" fill="#1e293b">边读边标：材料里混着四种信息，先「拆」再挑</text>
            <rect x={16} y={42} width={250} height={186} rx={10} fill="#f8fafc" stroke="#cbd5e1" strokeWidth={1.4}></rect>
            <text x={141} y={62} textAnchor="middle" fontSize={12} fontWeight="700" fill="#475569">给定材料</text>
            <text x={30} y={88} fontSize={13} fontWeight="700" fill="#b45309">☆</text>
            <rect x={48} y={76} width={200} height={16} rx={4} fill="#fef3c7"></rect>
            <text x={30} y={118} fontSize={13} fontWeight="700" fill="#b91c1c">△</text>
            <rect x={48} y={106} width={170} height={16} rx={4} fill="#fee2e2"></rect>
            <text x={30} y={148} fontSize={13} fontWeight="700" fill="#1d4ed8">○</text>
            <rect x={48} y={136} width={210} height={16} rx={4} fill="#dbeafe"></rect>
            <text x={30} y={178} fontSize={13} fontWeight="700" fill="#047857">□</text>
            <rect x={48} y={166} width={190} height={16} rx={4} fill="#d1fae5"></rect>
            <text x={30} y={208} fontSize={13} fontWeight="700" fill="#1d4ed8">○</text>
            <rect x={48} y={196} width={160} height={16} rx={4} fill="#dbeafe"></rect>
            <line x1={278} y1={135} x2={330} y2={135} stroke="#94a3b8" strokeWidth={1.6} markerEnd="url(#caA2)"></line>
            <text x={304} y={124} textAnchor="middle" fontSize={12} fontWeight="700" fill="#475569">边读边标</text>
            <rect x={344} y={44} width={280} height={40} rx={8} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.4}></rect>
            <text x={358} y={69} fontSize={12.5} fontWeight="700" fill="#92400e">☆ 原因　多为背景铺垫，题目不要就不写</text>
            <rect x={344} y={92} width={280} height={40} rx={8} fill="#fee2e2" stroke="#ef4444" strokeWidth={1.4}></rect>
            <text x={358} y={117} fontSize={12.5} fontWeight="700" fill="#991b1b">△ 问题　只在问「问题 / 困难」时才写</text>
            <rect x={344} y={140} width={280} height={40} rx={8} fill="#dbeafe" stroke="#2563eb" strokeWidth={1.4}></rect>
            <text x={358} y={165} fontSize={12.5} fontWeight="700" fill="#1e3a8a">○ 做法　动词打头，做法 / 对策题的主角</text>
            <rect x={344} y={188} width={280} height={40} rx={8} fill="#d1fae5" stroke="#10b981" strokeWidth={1.4}></rect>
            <text x={358} y={213} fontSize={12.5} fontWeight="700" fill="#065f46">□ 影响　只在问「成效 / 影响」时才写</text>
            <text x={320} y={252} textAnchor="middle" fontSize={12.5} fill="#334155">标注的意义：标完之后，「题干要哪一个符号」一眼就能挑出来，不会把成效当做法抄上去</text>
          </svg>
          <figcaption>图：四种符号对应四类信息 —— 符号标注的本质是「把读变成拆」，避免答非所问</figcaption>
        </figure>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 口袋公园建设</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是Q市城市管理局的工作人员。根据材料，<b>概括Q市"口袋公园"建设的主要做法</b>。<br />要求：准确、全面，分条列项，不超过250字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">Q市老城区绿地少，人均公园绿地面积仅7.2平方米，低于国家园林城市标准；主要原因是老城区寸土寸金，缺少成片可用地。2022年起，Q市启动"口袋公园"建设，把街头边角地、闲置地、拆违腾退地"见缝插绿"。市里组织规划、园林、街道三方联合踏勘，梳理出46处可利用地块；通过"微改造"建成口袋公园38个，每个公园都配备座椅、健身器材、儿童游乐设施；推行"公园＋认养"，鼓励周边商户和居民认管绿地；出台《Q市口袋公园建设管理导则》，明确建设标准和养护责任；还把居民议事会搬进公园，就功能布局现场征求周边居民意见。建设后新增绿地12万平方米，人均公园绿地面积提高到9.1平方米，周边居民步行5分钟内可进入公园的比例由43%提高到78%，相关投诉明显减少。也有居民反映，部分公园座椅偏少、夜间照明不足。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：边读边标：四种符号让"哪些能写进答案"一目了然</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">身份</span>市城管局工作人员 <span className="kb">对象</span>口袋公园建设的<b>做法</b>（＝○）<span className="kb">字数</span>不超过250字 → 5 条</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>边读边标：四种符号各归各位</b><p><span className="kb">☆原因</span>老城区绿地少、寸土寸金、缺少成片用地 → <b>背景，不写</b><br /><span className="kb">○做法</span>联合踏勘46处地块｜微改造建成38个、配齐座椅器材｜"公园＋认养"｜出台导则明确标准与养护责任｜居民议事会进公园征求意见<br /><span className="kb">□影响</span>新增绿地12万平方米｜人均绿地7.2→9.1｜5分钟可达率43%→78%｜投诉减少 → <b>属于成效，本题不需要，不写</b><br /><span className="kb">△问题</span>座椅偏少、夜间照明不足 → <b>是问题，本题不写</b></p><p><b>标注的意义就在这里：</b>一段材料里混着原因、做法、影响、问题四种东西，标完之后，题干要的"○"一眼就能挑出来，不会把成效当做法抄上去。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：动词打头，把做法压成动宾短语</b><p>联合踏勘→<b>联合踏勘选址</b>；微改造建成→<b>盘活边角空间</b>；认养→<b>推行绿地认养</b>；出台导则→<b>完善制度标准</b>；议事会进公园→<b>问计于民</b>。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>5 条，每条动词打头，总括词前置，250字内完成。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过250字）</div>
          <p>1.<b>联合踏勘选址。</b>组织规划、园林、街道三方联合踏勘，梳理出46处可利用地块。</p>
          <p>2.<b>盘活边角空间。</b>利用街头边角地、闲置地和拆违腾退地"见缝插绿"，通过微改造建成口袋公园38个，配齐座椅、健身器材和儿童游乐设施。</p>
          <p>3.<b>推行绿地认养。</b>开展"公园＋认养"，鼓励周边商户和居民认管绿地。</p>
          <p>4.<b>完善制度标准。</b>出台《口袋公园建设管理导则》，明确建设标准和养护责任。</p>
          <p>5.<b>问计于民。</b>把居民议事会搬进公园，就功能布局现场征求周边居民意见。</p>
        </div>
        <h3>1.5 加工的核心：合并同类项 + 提炼总括词</h3>
        <div className="skill">
          <div className="skill-t">技巧一：合并同类项——同义合并、同主体合并、同层面合并</div>
          <ol>
            <li><b>同义法</b>：意思相近或语意色彩相近的要点合并（"停车难""还车难"都属"体验感差"）。</li>
            <li><b>同主体法</b>：谁的问题归谁——政府 / 单位 / 工作人员 / 群众 / 社会 / 媒体。</li>
            <li><b>同层面法</b>：思想观念 / 制度机制 / 监督管理 / 设施设备 / 队伍人才 / 技术手段 / 资金保障 / 宣传服务。</li>
            <li><b>时间线法</b>：事前—事中—事后（适用于流程类、变化类、应急类）。</li>
          </ol>
        </div>
        <div className="skill">
          <div className="skill-t">技巧二：总括词三招——"选大哥 / 选词组合 / 造大哥"</div>
          <ol>
            <li><b>选大哥</b>：一类要点里，挑一个最能涵盖其余各点的词当总括词（如"维护不到位""规划不合理"）。<b>能用就用它，最省事也最稳。</b></li>
            <li><b>选词组合</b>：没有现成的"大哥"时，把两个高频词拼起来（如"处罚监督不到位"＝"处罚不到位"＋"监督不到位"）。</li>
            <li><b>造大哥</b>：实在没有现成词，自己概括一个规范的（如把"坐着挤、排队久、办证慢"概括为"服务效能低"）。<b>这是最后手段，尽量少用</b>，因为容易脱离材料原词。</li>
          </ol>
          <p className="muted">小提示：<b>并列关系</b>的句子，往往可以用"选词组合"或"造大哥"来收口；<b>问题反推</b>时，问题的反面常常就是现成的总括词。</p>
        </div>
        <div className="skill">
          <div className="skill-t">技巧三：答案的逻辑骨架只有五种</div>
          <ol>
            <li><b>总分</b>：先总括一句，再分条展开（概括题最常用）。</li>
            <li><b>分总</b>：先分条，最后收一句总结（公文结尾常用）。</li>
            <li><b>总分总</b>：总起—分述—收束（讲话稿、宣传稿常用）。</li>
            <li><b>并列</b>：几个层面平铺（如"使用 / 管理"两大类）。</li>
            <li><b>递进</b>：由浅入深、由急到缓（应急题、对策题常用）。</li>
          </ol>
        </div>
        <div className="callout blue"><b>加工的标准是"三不"：</b>不交叉、不重合、不遗漏。两条要点说的是同一件事，就要合并；合并后剩下的，才是"互相独立"的要点。阅卷是按"点"给分的，独立的点越多，越容易踩中。</div>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 乡村旅游发展</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是R市文化和旅游局的工作人员。根据材料，<b>概括R市乡村旅游发展中存在的主要问题</b>。<br />要求：准确、全面，分条列项，不超过300字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">R市依托山水资源发展乡村旅游，三年建成农家乐、民宿420家。但经营中暴露出不少问题。青石村的老支书说，村里民宿大多是村民自发改建，房子格局雷同、饭菜都是柴火鸡和土鸡蛋，客人来了住一晚就走，留不住人；有的为了揽客把价格压到成本线以下，你降我也降。游客李女士反映，进村道路只有3.5米宽，会车困难，节假日堵一个多小时；停车场没有硬化，下雨天全是泥；村里的公共厕所还是旱厕，气味大。桃花峪景区负责人说，民宿没有开展专业培训，服务员上菜时手直接抓着盘子边，卫生意识差；全村没有一名会讲普通话的导游，遇到外国游客只能尴尬摇头。此外，多家民宿反映，营业执照、食品经营许可、消防验收分属不同部门，材料反复交、来回跑；旺季用电高峰电压不稳，空调一开就跳闸；旺季游客多、淡季没人来，一年只有三四个月有收入，资金压力大。市文旅局张科长坦言，全市没有统一的乡村旅游品牌，各家各户自己发朋友圈，"养在深闺人未识"。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：加工的核心：把十几个散点合并成 5 类，每类提炼一个总括词</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">身份</span>市文旅局工作人员 <span className="kb">对象</span>乡村旅游发展中的<b>问题</b><span className="kb">字数</span>不超过300字 → 5 条，每条约 55 字</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：先把散点一条条摊开（这一步不合并）</b><p>① 民宿格局雷同；② 菜品都是柴火鸡、土鸡蛋；③ 客人住一晚就走、留不住人；④ 互相压价、低于成本线；⑤ 进村道路只有3.5米、会车难、节假日拥堵；⑥ 停车场未硬化、雨天全是泥；⑦ 公厕是旱厕、气味大；⑧ 无专业培训、卫生意识差；⑨ 没有会讲普通话的导游；⑩ 营业执照、食品许可、消防验收分属不同部门、材料反复交、来回跑；⑪ 旺季电压不稳、跳闸；⑫ 淡旺季失衡、一年只有三四个月收入、资金压力大；⑬ 无统一品牌、各自发朋友圈、知名度低。</p><p className="muted">13 条散点，如果直接抄进 300 字的答案，就是一锅粥——所以下一步必须合并。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>合并同类项：三把刀切下去</b><p><b>① 同义法：</b>① ＋ ② ＋ ③ ＋ ④ 说的都是"东西太像、只能靠降价"，并为一类。<br /><b>② 同层面法：</b>⑤ ＋ ⑥ ＋ ⑦ ＋ ⑪ 都属硬件条件，归入"设施"；⑧ ＋ ⑨ 都属"人"的问题，归入"人员服务"。<br /><b>③ 同主体法：</b>⑩ 的责任主体是"多个部门"，单独成类；⑫ ＋ ⑬ 都属产业支撑层面，合为一类。<br /><b>合并结果：</b>13 条 → <b>5 类</b>。不交叉、不重合、不遗漏。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>提炼总括词：三招各用一次</b><p><span className="kb">选大哥</span>①类用材料现成的"雷同""压价"→ <b>产品同质化，低价竞争</b>；<br /><span className="kb">选词组合</span>②类把两个高频词拼起来 → "基础设施"＋"薄弱"→ <b>基础设施薄弱</b>；<br /><span className="kb">造大哥</span>④类没有现成词，自己概括一个规范的 → 季节性、资金、品牌合并为一个上位概念 → <b>发展支撑不足</b>。<br />总括词标准：短、准、能罩住下面所有的话。</p></div></div>
          <div className="dstep"><div className="dn">5</div><div className="db"><b>书写</b><p>5 条，每条"总括词。＋具体表现（合并后的关键词）"，300字内完成。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过300字）</div>
          <p>1.<b>产品同质化，低价竞争。</b>民宿多为村民自发改建，格局雷同、菜品单一，留不住客人；经营者相互压价，甚至低于成本线揽客。</p>
          <p>2.<b>基础设施薄弱。</b>进村道路狭窄、会车困难，节假日拥堵；停车场未硬化，公共厕所为旱厕，旺季用电高峰电压不稳。</p>
          <p>3.<b>服务能力不足。</b>从业人员未接受专业培训，卫生和服务意识差；缺少导游力量，无法接待外国游客。</p>
          <p>4.<b>办事流程繁琐。</b>营业执照、食品经营许可、消防验收分属不同部门，材料反复提交，来回跑。</p>
          <p>5.<b>发展支撑不足。</b>淡旺季失衡、经营时间短、资金压力大；缺少统一品牌，宣传各自为战，知名度低。</p>
        </div>
        <h3>1.6 书写的三条铁律</h3>
        <div className="grid">
          <Card><h4><span className="dot" style={{ background: 'var(--blue)' }}></span>铁律一 · 答案源于材料</h4><p>90%以上的要点在材料里。抛弃"我认为/我觉得"，忠于原文、不主观臆断、不过度推断。材料没提的（罚款、上法院），不要自己加戏。</p></Card>
          <Card><h4><span className="dot" style={{ background: 'var(--teal)' }}></span>铁律二 · 时刻代入身份</h4><p>审清"你是谁"。街道办助理 vs 政府工作人员，权限完全不同。权限不足就先"请示汇报、协调上级"，再谈"落实"。</p></Card>
          <Card><h4><span className="dot" style={{ background: 'var(--gold)' }}></span>铁律三 · 总括词前置</h4><p>每条以"总括词"打头，再展开具体内容。阅卷人30秒一题，第一眼看到的就是每条开头那四个字。</p></Card>
        </div>
        <div className="callout teal"><b>本课小结：</b>审题（五要素）→ 析点（粗读三维/精读二维/四符号）→ 加工（合并同类项 + 总括词三招 + 五种骨架）→ 书写（总括词前置 + 分条列项）。<b>后面每一类题型，都是这套动作的"参数化变体"</b>。</div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 社区食堂停业</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是W区民政局养老服务科的工作人员。根据材料，<b>概括W区5家社区食堂相继停业的主要原因</b>。<br />要求：准确、全面，分条列项，不超过250字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">W区2022年起在6个社区开办社区食堂，为老年人提供助餐服务：60岁以上老人两荤两素12元，80岁以上免费。运行两年后，5家食堂陆续停业。走访发现：食堂大多选址在社区边缘，老人步行要二十多分钟，腿脚不便的干脆不去；日均供餐量从120份降到40份，收入覆盖不了房租、水电和人工；厨师老周说，自己月薪4500元，每天要买菜、做饭、收拾，干满12个小时，年轻人不愿来，招不到人；街道补贴只在开办时一次性发放，运营过程中没有持续支持；有的老人反映饭菜偏咸偏硬、口味单一，来了几次就不来了；还有社区把食堂场地另作他用，改成了老年活动室；区民政局工作人员说，此前没有明确食堂的运营标准和考核办法，出了问题"不知道该管到哪一步"。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：书写三条铁律：答案源于材料、代入身份、总括词前置</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">身份</span>区民政局养老服务科工作人员 <span className="kb">对象</span>社区食堂停业的<b>原因</b>（＝☆）<span className="kb">字数</span>不超过250字 → 6 条左右</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：逐句抠"原因"，一个都别漏</b><p>选址在社区边缘、老人不愿去｜供餐量120→40份｜收入覆盖不了房租水电人工｜厨师月薪4500、工时12小时、招不到人｜补贴仅一次性、运营中无持续支持｜饭菜偏咸偏硬、口味单一｜场地被挪作他用｜无运营标准和考核办法。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>三条铁律现场体检</b><p><b>铁律一·答案源于材料</b>：最常见的失分是"自己加戏"——写"因为疫情""因为老年人消费观念保守""因为物价上涨"。这些材料里<b>一个字都没有</b>，写上去不算点，还占字数。<b>本解只写材料提到的原因。</b><br /><b>铁律二·时刻代入身份</b>：身份是区民政局养老服务科工作人员，本题只要求概括原因、不要求对策，所以不写"建议出台文件"之类的越权内容。<br /><b>铁律三·总括词前置</b>：把同类合并后再动笔，不要按材料顺序流水账式照抄。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>加工与书写</b><p>8 条并成 6 类，各配一个总括词；每条"总括词。＋具体表现"，动词或名词短语打头，250字内完成。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过250字）</div>
          <p>1.<b>选址不合理。</b>食堂设在社区边缘，老人步行距离远，行动不便者不愿前往。</p>
          <p>2.<b>供需不匹配。</b>饭菜偏咸偏硬、口味单一，老人就餐意愿低，日均供餐量由120份降至40份。</p>
          <p>3.<b>经营难以为继。</b>收入无法覆盖房租、水电和人工成本，收支倒挂。</p>
          <p>4.<b>补贴不可持续。</b>仅发放一次性开办补贴，运营过程中缺乏持续资金支持。</p>
          <p>5.<b>从业人员短缺。</b>工资偏低、工时长，招不到人、留不住人。</p>
          <p>6.<b>管理不规范。</b>场地被挪作他用，且缺乏运营标准和考核办法，管理责任不清。</p>
        </div>
    </>
  )
}
