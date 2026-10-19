import type { ReactElement } from 'react'
import { Card, ExerciseCard } from '@/components/content'

/**
 * 第2课 归纳概括（要素提炼）
 *
 * @returns 该节正文。
 */
export default function S3(): ReactElement {
  return (
    <>
      <div className="goal"><div>🎯 <b>本课目标：</b>学完能准确判断"概括对象"（问题 / 原因 / 影响成绩 / 变化 / 对策经验 / 意见），并用同一套动作把散乱材料整理成"总括词 + 分述"的答案。<b>这是全卷性价比最高的一题，务必拿满分。</b></div></div>
      
        <h3>2.0 题型识别与"答案思路"总纲</h3>
        <div className="chips">
          <span className="chip blue">概括……问题</span><span className="chip blue">归纳……原因</span><span className="chip blue">总结……成绩/成效</span>
          <span className="chip blue">说明……变化</span><span className="chip blue">归纳……经验做法</span><span className="chip blue">分类整理……意见</span>
          <span className="chip blue">提炼……要点</span><span className="chip blue">分析……特点</span>
          <span className="chip gold">谈谈你对……的理解/认识</span><span className="chip gold">把材料分成……类</span>
        </div>
      
        <div className="think">
          <div className="think-t">归纳概括的"答案思路"只有一句话：按题干的对象，把材料"拆—并—收"</div>
          <p>不管让你概括问题、原因、影响还是变化，<b>动作是完全一样的，变的只是"你要抓的是哪种要素"</b>。所以做概括题永远先问自己三个问题：</p>
          <div className="line">
            ① 我要抓的是哪种要素？（问题△ / 原因☆ / 影响□ / 做法○ / 变化↗ / 意见💬）<br />
            ② 材料里哪些是"点"？（逐条拆出来，宁多勿漏）<br />
            ③ 这些点能并成几类？（合并同类项 → 每类一个总括词）
          </div>
          <p><b>最容易丢分的不是"找不到"，而是"不分类"和"不提炼总括词"。</b>阅卷是按"类 + 点"双轨踩分的：有总括词，先得一个概括分；下面展开的具体表现，再得若干细节分。</p>
        </div>
      
        <div className="skill">
          <div className="skill-t">归纳概括的通用四步（本课所有例题都按它走）</div>
          <ol>
            <li><b>审题定对象</b>：圈出"概括×××"，明确是问题、原因、影响、做法还是变化。</li>
            <li><b>逐条拆点</b>：按句号切分材料，一句一句拆，能摘就摘、不能摘就提炼，<b>宁多勿漏</b>。</li>
            <li><b>合并归类</b>：同义合并 / 同主体合并 / 同层面合并，每类给一个总括词（选大哥 / 选词组合 / 造大哥）。</li>
            <li><b>总括词前置书写</b>：一、总括词。具体表现……（每条 40~60 字，写到字数上限附近）。</li>
          </ol>
          <p><b>两个"非典型"新题型也在本课：</b>2.7 <b>词句理解</b>（"谈谈你对文中某句话的理解/认识"，2021 年秋联考新题型）与 2.8 <b>资料分类</b>（"把材料分成几类"，给定了分类标准，考的是"对号入座"而不是自己归纳）。这两类题干里的动词不是"概括"，但底层动作仍是"拆—并—收"，照本课四步走即可。</p>
        </div>
      
        
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · "一业一证"改革座谈</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是Z市行政审批局的工作人员。根据座谈会记录，<b>对各方就"一业一证"改革提出的意见进行分类整理</b>。<br />要求：分类恰当，条理清晰，不超过300字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">市行政审批局召开"一业一证"改革座谈会，各方发言如下。某餐饮企业负责人说：以前办证要跑5个窗口、交4套材料，现在一次提交、一证准营，时间从20天缩短到3天，确实方便。某连锁药店负责人担心："一证"之后行业专项监管会不会放松，药品经营的特殊要求会不会被简化掉。某小型超市老板说：自己店里只有2名员工，不熟悉线上系统，网上填报弄了两天也没弄成。市场监管所工作人员建议：把"一业一证"的适用范围从餐饮、零售扩展到住宿和娱乐行业，并建立跨部门数据共享机制。某企业代办机构建议：公开各行业的办事指南和材料清单，明确哪些材料可以复用。也有企业代表建议：保留线下窗口，为不会使用智能设备的经营者提供帮办服务。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：对象是"意见"：先分立场，再归类</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题：抓住"意见"这个词</b><p><span className="kb">身份</span>行政审批局工作人员 <span className="kb">对象</span>对改革的<b>意见</b>（分类整理）<span className="kb">字数</span>不超过300字</p><p><b>"意见"类题目的特征：</b>它天生就是"多立场"的——有人肯定、有人担心、有人提建议。<b>第一步永远是分立场</b>（赞同类 / 担忧类 / 建议类），立场就是你的分类骨架。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：一句发言一张标签</b><p><span className="kb">赞同</span>餐饮企业：跑5个窗口→一次提交，时间20天→3天。<br /><span className="kb">担忧</span>连锁药店：专项监管会不会放松、行业特殊要求会不会被简化；小型超市：不会用线上系统，网上填报困难。<br /><span className="kb">建议</span>市场监管所：扩大适用行业、建立跨部门数据共享；代办机构：公开办事指南和材料清单、明确材料复用；企业代表：保留线下窗口、提供帮办服务。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：立场 → 类别 → 总括词</b><p>赞同类压成一条"改革成效"；担忧类拆成"监管弱化担忧"和"线上操作困难"两条；建议类按"扩面＋公开＋兜底"三条。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>三段式："一、改革成效。二、存在担忧。三、意见建议。"每段内分条，300字内完成。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过300字）</div>
          <p><b>一、肯定改革成效。</b>办证窗口和材料大幅精简，实现一次提交、一证准营，办理时限由20天压缩到3天。</p>
          <p><b>二、存在担忧。</b>1.担心"一证"后行业专项监管放松，经营特殊要求被简化；2.部分小微经营者不熟悉线上系统，网上填报困难。</p>
          <p><b>三、意见建议。</b>1.扩大改革适用范围，由餐饮、零售扩展到住宿、娱乐等行业，建立跨部门数据共享机制；2.公开各行业办事指南和材料清单，明确材料复用规则；3.保留线下窗口，为不会使用智能设备的经营者提供帮办服务。</p>
        </div>
        <h3>2.1 概括问题：从"网友的抱怨"到"管理的问题"</h3>
        <div className="think">
          <div className="think-t">答案思路：问题的答案，是"把口语抱怨翻译成管理问题"</div>
          <p>材料里的问题往往是<b>群众的口语抱怨</b>（"车座上都是水""打夜间服务电话没人接"）。你要做两件事：<b>① 把口语翻译成规范问题；② 按题干给定的维度给它打标签</b>，再把同类合并。</p>
          <div className="line">口语线索 → 规范问题（△）→ 打标签（如"使用 / 管理"）→ 合并同类 → 提炼总括词</div>
        </div>
        <div className="skill">
          <div className="skill-t">技巧：先"打标签"，再"合并"</div>
          <ol>
            <li><b>逐条翻译</b>：把每条抱怨压成一个规范短语（"站点没车"→ 借车难；"还不上车"→ 还车难）。</li>
            <li><b>按维度贴标签</b>：题干若给了维度（如"使用"和"管理"），就逐条判断它属于哪一边——<b>这是本题分类的唯一依据</b>。</li>
            <li><b>同类再合并</b>：标签相同的点合并成一类，用"选大哥"的方式给类起名（如"违规使用车辆""体验感差"）。</li>
            <li><b>宁细不粗</b>：合并到"2~6 类"最合适，合并得太粗会丢细节分，太细又显得没概括力。</li>
          </ol>
        </div>
      
        <ExerciseCard>
          <div className="ex-head">真题 · 事业单位联考 · M市公共自行车服务中心</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">假如你是M市公共自行车管理服务中心的一名工作人员，根据背景材料完成下列任务：请你根据材料2中网友的评论，<b>概括本市公共自行车使用和管理方面存在的问题</b>。<br />要求：准确，扼要，分条列项。字数在250字以内。（35分）</div></div>
            <div className="ex-m"><span className="ex-label">材料概要（材料2）</span><div className="ex-block">某网站网友评论合集，共 24 条。有肯定的（便民、环保、免费），大量是吐槽：<b>有人贴小广告、车辆破损无人修、车座有破洞、露天淋雨</b>；<b>车太少、借不到、还不上</b>；<b>站点分布不均、有的走半天遇不到一个</b>；<b>车型单一、车座太高、想要双人车/儿童座椅</b>；<b>有人偷车、有人把公共车租给游客牟利</b>；<b>退卡换卡要跑服务中心、手续繁琐、三区租车卡不通用</b>；<b>夜间服务电话没人接、还车系统故障、动辄多扣费</b>；<b>停车桩被私家车占用、地铁口停车桩太少</b>；<b>非机动车道越来越窄、骑行环境差</b>；<b>未成年人骑车、酒后骑车、闯红灯等不规范骑行</b>。</div></div>
          </div>
        </ExerciseCard>
      
        <div className="derive">
          <div className="derive-t">逐步解析：这道题的答案是这样一步步推出来的</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题：五要素</b>
            <p><span className="kb">身份</span>M市公共自行车管理服务中心工作人员（基层，无立法权）<span className="kb">范围</span>仅材料2 <span className="kb">对象</span>使用和管理两方面<b>问题</b><span className="kb">问数</span>一问 <span className="kb">字数</span>250字以内 → 约 6~8 个小点，合并成 2 大类</p>
            <p><b>关键：题干自己给了分类维度——"使用"和"管理"。这就是你的分类骨架，不用自己另想！</b></p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：逐条翻译 + 贴标签</b>
            <p>把 24 条评论逐条压成"规范问题"，并判断归属（节选）：</p>
            <table>
              <tr className="thead-row"><th>网友原话（线索）</th><th>规范问题（△）</th><th>标签</th></tr>
              <tr><td data-label="网友原话（线索）">"有人往上面粘贴小广告""有人偷车""老板拿公共自行车赚游客20元/小时"</td><td data-label="规范问题（△）">乱贴小广告、车辆被盗、利用公共资源牟利</td><td data-label="标签">使用</td></tr>
              <tr><td data-label="网友原话（线索）">"骑起来咯吱响、车座破洞、露天淋雨""车太重不轻便""车座太高/车型少、想要双人车"</td><td data-label="规范问题（△）">车辆损坏、不轻便、车型少</td><td data-label="标签">使用</td></tr>
              <tr><td data-label="网友原话（线索）">"车太少不早起借不到""有的站点借不到、有的还不上""走半天遇不到站点""退卡换卡跑断腿、三区卡不通用""被多扣费"</td><td data-label="规范问题（△）">借还车难、站点少、办卡退换卡麻烦、多扣费</td><td data-label="标签">使用</td></tr>
              <tr><td data-label="网友原话（线索）">"未成年骑车、酒后骑车、闯红灯上机动车道"</td><td data-label="规范问题（△）">骑行不规范、骑行不安全</td><td data-label="标签">使用</td></tr>
              <tr><td data-label="网友原话（线索）">"小广告没人清理""车铃脚蹬丢了、车闸不灵没人检修""还车系统故障、夜间电话没人接"</td><td data-label="规范问题（△）">维护不到位、系统故障、夜间服务缺位</td><td data-label="标签">管理</td></tr>
              <tr><td data-label="网友原话（线索）">"站点分布不均、覆盖率低""地铁口停车桩太少""停车桩被私家车占用"</td><td data-label="规范问题（△）">站点规划不合理、停车桩被占</td><td data-label="标签">管理</td></tr>
              <tr><td data-label="网友原话（线索）">"退卡手续繁琐""三区卡不能通用""办卡麻烦"</td><td data-label="规范问题（△）">办理流程繁琐、不能一卡通用</td><td data-label="标签">管理</td></tr>
              <tr><td data-label="网友原话（线索）">"偷车没人管""私家车占桩没人管""靠公共资源牟利没人查""缺少骑行过程监督"</td><td data-label="规范问题（△）">监管不足、防盗与防违规使用不到位</td><td data-label="标签">管理</td></tr>
              <tr><td data-label="网友原话（线索）">"马路越修越宽，非机动车道越来越窄，要在人行道上骑"</td><td data-label="规范问题（△）">骑行环境差、非机动车道被挤占</td><td data-label="标签">管理</td></tr>
            </table></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：合并同类 + 提炼总括词</b>
            <p><b>使用（2类）：</b>"违规使用车辆"（乱贴小广告、偷盗、牟利、骑行不规范）｜"体验感差"（车辆损坏、不轻便、车型少、借还车难、退换卡麻烦、多扣费、站点少、骑行不安全）。</p>
            <p><b>管理（5类）：</b>"维护不到位"（清理不及时、系统故障）｜"规划不合理"（停车桩/站点位置、数量、覆盖率、投放量与种类）｜"服务堪忧"（办卡退换卡、不能一卡通、夜间电话缺位）｜"监管不足"（防盗、防违规使用、停车桩被占、缺少骑行监督）｜"骑行环境差"（非机动车道被强占）。</p>
            <p className="muted">注意：使用类问题多、字数紧，就把 2 类写细；管理类 5 个总括词各带一句展开。总字数控制在 250 字内。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写：总括词前置，分条列项</b>
            <p>先说"使用"、再说"管理"（与题干顺序一致），每条"总括词 + 具体表现"，用"1.2.3."分点，不写废话。</p></div></div>
        </div>
      
        <div className="ans">
          <div className="ans-t">参考答案（250字以内）</div>
          <p><span className="no">使用：</span>1.<b>违规使用车辆。</b>乱贴小广告、偷盗车辆、利用公共资源牟利、骑行不规范。2.<b>体验感差。</b>车辆损坏、不轻便、车型少，借还车与退换卡难、多扣费、站点少、骑行不安全、租车卡使用麻烦。</p>
          <p><span className="no">管理：</span>1.<b>维护不到位。</b>未及时清理小广告；还车系统故障导致无法还车或多扣费。2.<b>规划不合理。</b>停车桩与站点位置不合理、数量少、覆盖率低，车辆投放数量和种类少。3.<b>服务堪忧。</b>办卡、退换卡手续复杂，不能一卡通用；夜间服务电话缺位。4.<b>监管不足。</b>车辆防盗与防违规使用差，停车桩被占用，缺少骑行监督。5.<b>骑行环境差。</b>非机动车道被强占。</p>
        </div>
        <div className="callout teal"><b>这道题教给你的通用动作：</b>① <b>题干给的维度就是分类骨架</b>（"使用/管理"）；② 口语必须翻译成规范词；③ 大维度下再合并小类，小类用"总括词 + 表现"落地。</div>
      
        
        <h3>2.2 概括原因：从"为什么办这件事"到"四条理由"</h3>
        <div className="think">
          <div className="think-t">答案思路：原因的答案，是"顺着材料的逻辑，把'为什么要做'拆成几层"</div>
          <p>原因类题目的材料，通常是"<b>背景 + 政策 + 现实问题 + 单位计划</b>"的结构。你要做的是沿着这条逻辑链，把"为什么要办这件事"分层摘出来，每一层给一个总括词。</p>
          <div className="line">政策背景（大势） → 上级文件要求（政策） → 现实困境（问题） → 单位既定计划（落实）</div>
        </div>
        <div className="skill">
          <div className="skill-t">技巧：找"因果链"，别只找"因为"</div>
          <ol>
            <li><b>抓大背景</b>：材料开头的法规、战略、理念，往往就是"第一层理由"（如"公共文化服务体系""文化惠民工程"）。</li>
            <li><b>抓政策要求</b>：上级下发的文件、会议精神，属于"响应号召"。</li>
            <li><b>抓现实问题</b>：某类人反映的困难、瓶颈，属于"解决问题"。</li>
            <li><b>抓既定安排</b>：年初计划、领导交办，属于"落实工作"。</li>
            <li><b>总括词要"能概括"</b>：如"文化强省""响应政策和号召""打破瓶颈""落实计划"——短、准、能罩住下面的话。</li>
          </ol>
        </div>
      
        <ExerciseCard>
          <div className="ex-head">真题 · 事业单位联考 · A省C市Y区文化馆</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">假如你是A省C市Y区文化馆综合办公室的工作人员王晨。根据材料1，现拟起草一份"关于举办加强群众文艺团队建设培训班的请示"，<b>你将从哪些方面阐述举办此次培训班的理由？</b><br />要求：紧扣材料，理由充分，考虑周全，简明扼要；字数在200字以内。（30分）</div></div>
            <div className="ex-m"><span className="ex-label">材料概要（材料1）</span><div className="ex-block">① 十九大报告明确新时代文化建设方略；依据《公共文化服务保障法》，A省文旅厅下发《关于进一步加强全省社会文艺团队建设的意见》。②《意见》强调社会文艺团队是"文化强省建设的一支重要力量"，对<b>完善公共文化服务体系、实施文化惠民工程、丰富群众精神文化生活、保障群众文化权益、对接城乡群众文化需求、激活基层文化资源、动员社会广泛参与</b>有不可替代作用。③ 文化馆召开座谈会，会上<b>团队带头人和街道文化站站长反映</b>：节目编排导演<b>创新不足、节目水平有限、团队管理缺乏经验</b>，希望得到区里指导支持。④ 王晨说"正好<b>年初馆里也有这个培训计划</b>"；馆长明确"规模控制在40人左右"。⑤ 馆长传达省委宣传部通知，号召打造精品、在文艺汇演中取得好成绩。</div></div>
          </div>
        </ExerciseCard>
      
        <div className="derive">
          <div className="derive-t">逐步解析：从材料里"抠"出四条理由</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b>
            <p><span className="kb">身份</span>区文化馆办公室工作人员（写请示）<span className="kb">范围</span>材料1 <span className="kb">对象</span>举办培训班的<b>理由</b>（即原因）<span className="kb">问数</span>一问 <span className="kb">字数</span>200字以内 → 4 条理由，每条 40 字左右</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：把材料拆成"理由素材"</b>
            <table>
              <tr className="thead-row"><th>材料出处</th><th>可用的理由素材</th><th>归到哪条理由</th></tr>
              <tr><td data-label="材料出处">① 法规与《意见》的意义</td><td data-label="可用的理由素材">完善公共文化服务体系、实施文化惠民工程、丰富群众文化生活、保障群众文化权益、对接城乡需求、激活基层资源、动员社会参与</td><td data-label="归到哪条理由">文化强省</td></tr>
              <tr><td data-label="材料出处">② 省委宣传部通知、馆长号召</td><td data-label="可用的理由素材">贯彻落实《意见》精神，提升团队素质；打造精品，在文艺汇演中取得好成绩</td><td data-label="归到哪条理由">响应政策和号召</td></tr>
              <tr><td data-label="材料出处">③ 带头人、站长反映的困难</td><td data-label="可用的理由素材">节目编排导演创新不足、节目水平有限、团队管理缺乏经验，需要区里指导支持</td><td data-label="归到哪条理由">打破瓶颈</td></tr>
              <tr><td data-label="材料出处">④ 王晨"年初有培训计划"</td><td data-label="可用的理由素材">落实年初既定的培训计划</td><td data-label="归到哪条理由">落实计划</td></tr>
            </table></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：四个总括词就位</b>
            <p>"文化强省｜响应政策和号召｜打破瓶颈｜落实计划"——四个总括词，分别罩住上面四组素材。<b>注意"选大哥"：把"完善体系、惠民工程、丰富生活……"用一个"文化强省"罩住。</b></p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>每条"总括词。＋素材展开"，控制在 200 字内，语言用公文口吻（"贯彻落实""夯实基础""提升素质"）。</p></div></div>
        </div>
      
        <div className="ans">
          <div className="ans-t">参考答案（200字以内）</div>
          <p>1.<b>文化强省。</b>完善公共文化服务体系，实施文化惠民工程，丰富群众性文化生活，保障群众文化权益，对接城乡群众文化需求，激活基层文化资源要素，动员社会参与。</p>
          <p>2.<b>响应政策和号召。</b>贯彻落实《意见》精神，提升文艺团队素质；响应省委宣传部通知，打造精品，确保在文艺汇演中取得优秀成绩。</p>
          <p>3.<b>打破瓶颈。</b>加强指导与支持，解决创新不足、节目水平有限和管理经验缺乏等问题。</p>
          <p>4.<b>落实计划。</b>对年初培训计划的落实。</p>
        </div>
      
        <ExerciseCard>
          <div className="ex-head">练习 1 · 综应A风格 · 概括"周末不打烊"推行的原因</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">根据给定材料，<b>概括N市推行"政务服务周末不打烊"的理由</b>。<br />要求：分条列出，每条用总括词引领，不超过150字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">N市多数上班族反映，办事只能请假在工作日来，一年下来要请假十几回；在全市营商环境评价中，企业反映"办事时间与生产时间冲突"是最突出的短板；《优化营商环境条例》要求为市场主体提供便利高效的服务；省政府部署"最多跑一次"改革，明确要求推行延时服务、预约服务；市政务服务局年初工作要点已把"周末不打烊"列为重点任务。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：沿"群众 → 企业 → 法规 → 部署"这条链找理由</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p>对象是推行"政务服务周末不打烊"的<b>理由</b>，要回答"为什么要办"，而不是"怎么办"。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点</b><p>沿着"<b>群众 → 企业 → 法规 → 部署</b>"这条逻辑链拆材料，四组素材正好四层：上班族请假成本高 / 企业反映时间冲突 / 《优化营商环境条例》要求便利高效 / "最多跑一次"改革与年初工作要点。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>书写</b><p>每层配一个能罩住的总括词（回应群众诉求 / 补齐营商短板 / 落实法规要求 / 贯彻既定部署），全篇控制在 150 字以内。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过150字）</div>
          <p>一、<b>回应群众诉求。</b>上班族办事须请假、来回奔波，时间成本高。</p>
          <p>二、<b>补齐营商短板。</b>企业集中反映办事时间与生产时间冲突。</p>
          <p>三、<b>落实法规要求。</b>《优化营商环境条例》要求提供便利高效服务。</p>
          <p>四、<b>贯彻既定部署。</b>落实"最多跑一次"改革要求和年初工作要点安排。</p>
        </div>
        <ExerciseCard>
          <div className="ex-head">练习 2 · 综应A风格 · 概括推进农村"厕所革命"的原因</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">根据给定材料，<b>概括M县推进农村"厕所革命"的理由</b>。<br />要求：分条列出，每条用总括词引领，不超过150字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">M县农村传统旱厕占比高，夏天蚊蝇滋生、气味大，群众意见集中；农村人居环境整治提升行动明确把农村改厕作为重点任务；县卫健部门监测发现，当地肠道传染病发病率高于全省平均水平，与粪便无害化处理率低直接相关；县里在乡村振兴相关规划中，已把"厕所革命"列为年度民生实事。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：诉求、政策、健康、落实——四条理由各归其位</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p>同样是"理由"题：要写"为什么改厕"，不是"怎么改厕"；问的是一件事的<b>必要性</b>。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点</b><p>四组素材分别对应：卫生感受（<b>群众诉求</b>）、人居环境整治提升行动（<b>政策要求</b>）、肠道传染病发病率偏高（<b>群众健康</b>）、乡村振兴规划与年度民生实事（<b>既定安排</b>）——正好四层。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>书写</b><p>把"发病率高于全省平均水平"这类数据<b>留 1 个</b>就够，其余用"偏高"概括；总括词要短、要能罩住后面的展开。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过150字）</div>
          <p>一、<b>回应群众诉求。</b>旱厕卫生差、气味大，群众意见集中。</p>
          <p>二、<b>落实政策要求。</b>人居环境整治提升行动明确改厕为重点任务。</p>
          <p>三、<b>维护群众健康。</b>粪便无害化处理率低，肠道传染病发病率偏高。</p>
          <p>四、<b>落实既定安排。</b>乡村振兴规划与年度民生实事的任务要求。</p>
        </div>
        <ExerciseCard>
          <div className="ex-head">练习 3 · 综应A风格 · 概括打造"15分钟便民生活圈"的原因</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">根据给定材料，<b>概括X区打造"15分钟便民生活圈"的理由</b>。<br />要求：分条列出，每条用总括词引领，不超过150字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">X区多个新建小区周边买菜、修鞋、配钥匙要走两三公里，老年人和上班族都感到不便；商务部等部门印发意见，提出建设一批便民生活圈；区政府工作报告把"便利生活"列为今年重点工作；此前居民议事会上，物业和居民代表多次提出补齐便民网点的诉求。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：客观必要（不便 + 政策）＋ 落到本单位（工作报告 + 议事诉求）</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p>对象是打造便民生活圈的<b>理由</b>；材料给的是"居民不便 + 部门意见 + 政府工作报告 + 议事会诉求"。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点</b><p>前两条是客观必要（<b>网点缺失的现实</b>、<b>上级部门的政策</b>），后两条是"落到本单位"的落实与回应（<b>工作报告的重点工作</b>、<b>居民代表的诉求</b>），四条理由自然成链。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>书写</b><p>不要照抄出处，把"商务部等部门印发意见"写成"<b>落实政策要求</b>"；每条"总括词 + 一句展开"，字数不超 150 字。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过150字）</div>
          <p>一、<b>回应居民不便。</b>新建小区便民网点缺失，买菜维修要走两三公里。</p>
          <p>二、<b>落实政策要求。</b>贯彻商务部等部门建设便民生活圈的意见。</p>
          <p>三、<b>落实既定安排。</b>区政府工作报告已把便利生活列为重点工作。</p>
          <p>四、<b>回应议事诉求。</b>居民议事会上物业和居民代表多次提出诉求。</p>
        </div>
        
        <h3>2.3 概括影响 / 成绩：按"领域维度"切分，把做法+成效拧成一句</h3>
        <div className="think">
          <div className="think-t">答案思路：成绩类题目＝"做了什么事 + 取得了什么结果"，按领域分块</div>
          <p>"成绩""成效""意义"这类题，材料通常是"一项工作一个自然段"，每段都有<b>做法 + 结果</b>。你要做的是按<b>领域维度</b>切块：经济、民生政策、基础设施、产业、社会力量……每块一个总括词。</p>
          <div className="line">经济水平 → 政策落实 → 基础设施 → 产业 → 社会活力（按材料实际调整）</div>
        </div>
        <div className="skill">
          <div className="skill-t">技巧：成绩题最常用的五个领域维度</div>
          <ol>
            <li><b>经济</b>：收入、就业、低保标准等"钱的数字"。</li>
            <li><b>政策/民生</b>：教育、医疗、住房、饮水等"两不愁三保障"式保障。</li>
            <li><b>基础设施</b>：道路、电网、水利、厕所等硬件。</li>
            <li><b>产业</b>：主导产业、电商、销售额等。</li>
            <li><b>活力/队伍</b>：帮扶队伍、社会力量参与等。</li>
          </ol>
          <p className="muted">数据不是装饰：人均收入从 6568 元增到 11271 元、电商销售额 15.6 亿元……这些数字本身就是"成绩"的证明，写进答案能显著提分。</p>
        </div>
      
        <ExerciseCard>
          <div className="ex-head">真题 · 事业单位联考 · A市扶贫工作成绩</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">根据给定材料1，<b>归纳总结A市2020年扶贫的主要工作成绩</b>。<br />要求：逻辑清晰，内容完整；字数在200字以内。（25分）</div></div>
            <div className="ex-m"><span className="ex-label">材料概要（材料1·5段）</span><div className="ex-block">① 贫困人口人均纯收入从 2017 年 6568 元增至 2019 年 11271 元，年均增幅 31%；转移就业 11.83 万人，公益专岗 6262 人；农村低保标准从 3600 元/年提高到 6000 元/年。② 落实"两不愁三保障"：资助学生 11.72 万人次、1.11 亿元，义务教育阶段无一人辍学；基本医保和大病保险全覆盖、一站式结算、大病救治率 95% 以上；农村供水设施 2364 处，饮水安全全覆盖。③ 投资 18 亿元实施村通畅工程、"油返砂"整治；投资 15.76 亿元完成 1784 个农网改造项目；户厕改造率 85% 以上，公厕一村一厕。④ "十百千万"产业扶贫，每个贫困村有主导产业、每个贫困户有增收产品；县镇村三级电商体系，贫困村电商服务站 130 个，上半年销售额 15.6 亿元。⑤ 派出驻村工作队 380 个、队员 1223 人、联户干部 24020 人，"一对一"精准帮扶全覆盖；3000 多家民营企业等社会力量"部门联村""一企帮一村"。</div></div>
          </div>
        </ExerciseCard>
      
        <div className="derive">
          <div className="derive-t">逐步解析：一段一个领域，五段出五点</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">对象</span>"扶贫主要工作<b>成绩</b>"（＝成效型概括）<span className="kb">范围</span>材料1 <span className="kb">字数</span>200字以内 → 5 点，每点约 35 字</p><p>关键：材料正好 5 段，<b>一段一个自然段，往往就是一点</b>——这是最省事的切分线索。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：一句话概括每段</b>
            <table>
              <tr className="thead-row"><th>材料段</th><th>核心事实</th><th>总括词</th></tr>
              <tr><td data-label="材料段">第1段</td><td data-label="核心事实">收入与就业人数增加、低保标准连续提标</td><td data-label="总括词">经济水平提升</td></tr>
              <tr><td data-label="材料段">第2段</td><td data-label="核心事实">义务教育、医疗、饮水全覆盖</td><td data-label="总括词">落实"两不愁三保障"</td></tr>
              <tr><td data-label="材料段">第3段</td><td data-label="核心事实">通村道路改造完成、电网改造提前完成、农厕改造率高</td><td data-label="总括词">基础设施完善</td></tr>
              <tr><td data-label="材料段">第4段</td><td data-label="核心事实">主导产业与增收产品全覆盖、三级电商服务体系、销售额提升</td><td data-label="总括词">产业发展迅速</td></tr>
              <tr><td data-label="材料段">第5段</td><td data-label="核心事实">帮扶队伍精准帮扶全覆盖、社会力量提升硬件、拓宽思路</td><td data-label="总括词">扶贫活力增加</td></tr>
            </table></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：把"做法"压成"成效"</b>
            <p>例如"资助学生11.72万人次、无一人辍学"→ 写"义务教育全覆盖，杜绝辍学"；不必逐字抄数据，保留最有说服力的 1~2 个即可。<b>总括词 + 成效关键词</b>，是成绩题的标准句式。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>按材料顺序（经济→政策→设施→产业→活力）排，逻辑清晰，不用刻意打乱。</p></div></div>
        </div>
      
        <div className="ans">
          <div className="ans-t">参考答案（200字以内）</div>
          <p>1.<b>经济水平提升。</b>人均收入和就业人数增加，低保标准连续提标。</p>
          <p>2.<b>落实"两不愁三保障"政策。</b>义务教育全覆盖；医疗、大病保险即时结算服务全覆盖；饮水全覆盖，水质达标。</p>
          <p>3.<b>基础设施完善。</b>通村道路改造完成，电网改造提前完成；农厕改造率高。</p>
          <p>4.<b>产业发展迅速。</b>主导产业、增收产品全覆盖，形成产业扶贫格局；建立三级电商服务体系，销售额提升。</p>
          <p>5.<b>扶贫活力增加。</b>扶贫队伍精准帮扶全覆盖，社会力量提升硬件、拓宽思路。</p>
        </div>
      
        
        <h3>2.4 概括变化：先定"可比维度"，再做"前后对比"</h3>
        <div className="think">
          <div className="think-t">答案思路：变化题＝找"什么在变" → 按维度做"过去到现在的对比" → 用"变化词"收尾</div>
          <p>材料给的是不同年份的数据罗列，看起来"没得写"。破解办法是：<b>先找可比维度</b>（量、渠道、对象、原因、诉求……），再在每个维度上比较"前→后"，最后用"递增 / 多元 / 增加 / 增多 / 多元"这类<b>变化词</b>作总括词。</p>
          <div className="line">定维度：总量 · 渠道 · 对象 · 原因 · 诉求 → 逐维度对比 → 变化词做总括词</div>
        </div>
        <div className="skill">
          <div className="skill-t">技巧：变化题的两个抓手</div>
          <ol>
            <li><b>抓手一·横向扫"维度词"</b>：把材料里的名词列出来（渠道名、对象名、原因名、诉求名），它们就是维度。</li>
            <li><b>抓手二·纵向比"增减"</b>：同一维度上，后面的年份比前面多了什么？少了什么？"新增了什么"通常是得分点。</li>
            <li><b>总括词用"变化词"</b>：总量<b>递增</b>、渠道<b>多元</b>、对象<b>增加</b>、原因<b>增多</b>、诉求<b>多元</b>——整齐又踩点。</li>
          </ol>
        </div>
      
        <ExerciseCard>
          <div className="ex-head">真题 · 事业单位联考 · C市旅游质监所</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">假如你是C市旅游质监所的工作人员。根据材料1，请你<b>归纳并说明C市2015～2017年旅游投诉在哪些方面发生了变化</b>。<br />要求：分类恰当，说明准确，语言简洁。字数在200字以内。（30分）</div></div>
            <div className="ex-m"><span className="ex-label">材料概要（材料1·三年数据）</span><div className="ex-block">
              <b>2015年：</b>投诉 583 起；渠道＝信函 171、电话 203、现场 191；对象＝旅行社 179、星级酒店 72、景区 56；原因＝经济纠纷虚假宣传 190；诉求＝退款退费经济赔偿 490。<br />
              <b>2016年：</b>投诉 665 起；渠道新增<b>网站 90、市长热线 88</b>；对象仍为旅行社/酒店/景区；诉求新增<b>精神损失赔偿 101</b>。<br />
              <b>2017年：</b>投诉 698 起；渠道新增<b>微博微信 128、110 平台等 98</b>；对象新增<b>民宿及农家乐 44、旅游基础设施 10</b>；原因新增<b>旅游体验差 129</b>；诉求新增<b>公开道歉 67、公益诉讼 6</b>。
            </div></div>
          </div>
        </ExerciseCard>
      
        <div className="derive">
          <div className="derive-t">逐步解析：把"三年数据表"读成"五个变化"</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">对象</span>旅游投诉的<b>变化</b><span className="kb">范围</span>材料1 <span className="kb">字数</span>200字以内 <span className="kb">要求</span>"分类恰当"——必须有维度分类</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：先横向列出所有"维度词"</b>
            <p>把三年的数据按"名目"分组，就得到五个维度：</p>
            <p><span className="kb">总量</span>583→665→698 ｜ <span className="kb">渠道</span>信函/电话/现场 → 网站/市长热线 → 微博微信/110平台 ｜ <span className="kb">对象</span>旅行社/酒店/景区 → 民宿农家乐/基础设施 ｜ <span className="kb">原因</span>经济纠纷虚假宣传 → 旅游体验差 ｜ <span className="kb">诉求</span>退款赔偿 → 精神损失 → 公开道歉/公益诉讼</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：逐维度做"前→后"对比，用变化词收口</b>
            <table>
              <tr className="thead-row"><th>维度</th><th>变化内容</th><th>总括词</th></tr>
              <tr><td data-label="维度">总量</td><td data-label="变化内容">583→665→698，连续三年逐年增加</td><td data-label="总括词">总量递增</td></tr>
              <tr><td data-label="维度">渠道</td><td data-label="变化内容">在信函、电话、现场之上，2016年新增网站、市长热线；2017年又新增微博、微信、110平台</td><td data-label="总括词">渠道多元</td></tr>
              <tr><td data-label="维度">对象</td><td data-label="变化内容">在旅行社、酒店、景区之上，2017年新增民宿、农家乐和旅游基础设施</td><td data-label="总括词">对象增加</td></tr>
              <tr><td data-label="维度">原因</td><td data-label="变化内容">从经济纠纷、虚假宣传，到2017年新增"旅游体验差"</td><td data-label="总括词">原因增多</td></tr>
              <tr><td data-label="维度">诉求</td><td data-label="变化内容">在退款退费、经济赔偿之上，2016年新增精神损失赔偿，2017年新增公开道歉、提起诉讼</td><td data-label="总括词">诉求多元</td></tr>
            </table></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>每点"总括词 + 对比说明"，句式统一（"在……之上，新增……"），读起来整齐、踩点清楚。</p></div></div>
        </div>
      
        <div className="ans">
          <div className="ans-t">参考答案（200字以内）</div>
          <p>1.<b>总量递增。</b>连续三年逐年增加。</p>
          <p>2.<b>渠道多元。</b>在2015年信函、电话、现场投诉之上，2016年新增网站、市长热线，2017年新增微博、微信、110平台。</p>
          <p>3.<b>对象增加。</b>在15、16年旅行社、星级酒店、景区之上，2017年新增民宿、农家乐和旅游基础设施。</p>
          <p>4.<b>原因增多。</b>从15、16年经济纠纷、虚假宣传，到2017年新增旅游体验差。</p>
          <p>5.<b>诉求多元。</b>在2015年退款退费、经济赔偿之上，2016年新增精神损失赔偿，2017年新增公开道歉、提起诉讼。</p>
        </div>
      
        
        <h3>2.5 概括对策 / 经验：动词打头，把"他们怎么做的"摘出来</h3>
        <div className="think">
          <div className="think-t">答案思路：经验做法＝"谁 + 做了什么 + 取得什么效果"，核心是动词短语</div>
          <p>"经验做法"这类题，答案的每一条都应该是一个<b>动宾短语</b>（出台文件、设立机构、联合整治……）。材料里的做法往往散在各段，你要按"阶段"或"层面"把它们串成一条线。</p>
          <div className="line">逐段找动作 → 把动作压成动宾短语 → 按阶段/层面排序 → 每步一个总括词</div>
        </div>
        <div className="skill">
          <div className="skill-t">技巧：经验题的"三步走"</div>
          <ol>
            <li><b>找动词</b>：出台、印发、成立、设立、召开、联合、出台、规范、公示、整合、拓展……动词就是要点。</li>
            <li><b>补对象</b>：动词后面接的"名词"就是内容（出台《……办法》、设立停车办公室）。</li>
            <li><b>加总括词</b>：把同一阶段的动作归到一起，用"选大哥"给个名（高度重视、强化公共属性、回头看整改、规范管理、融合式管理）。</li>
          </ol>
        </div>
      
        <ExerciseCard>
          <div className="ex-head">真题 · 事业单位联考 · S市停车管理中心</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">假如你是S市停车管理中心综合科副科长小赵。根据材料2，<b>归纳S市停车管理工作的成功经验</b>，供中心领导参阅。<br />要求：归纳恰当，概括全面、准确，语言简洁。不超过250字。（30分）</div></div>
            <div className="ex-m"><span className="ex-label">材料概要（材料2·6段）</span><div className="ex-block">① 全市机动车 268 万辆，泊位缺口 41.5 万个且不断扩大（背景）。② 早在 2008 年印发《关于破解机动车"停车难"问题的实施意见》，提出"城市停车是一种公共服务"理念，成立停车办公室，明确"配建为主、公共为辅、路内为补充"思路；2016 年成立停车管理中心，出台系列文件。③ 学苑路早晚高峰拥堵但停车场使用率低，中心会同街道、交管局召开现场办公会，决定对学校周边收费停车场实行<b>特殊时段1小时内免费</b>。④ 定期开展路内泊位<b>"回头看"整改</b>，评估施划合理性、动态调整。⑤ 根据群众投诉，规范指示标识、公示泊位数量，联合发改/财政/公安交管等确定收费标准和通道，收费员统一着装、印制投诉电话。⑥ 针对老旧小区，规划临时泊位，选取 14 个小区做<b>"融合式"管理</b>示范：小区内部清杂物地锁、移僵尸车、施划泊位线；小区外部整合周边道路和公共停车场资源，共拓展泊位约 1480 个。</div></div>
          </div>
        </ExerciseCard>
      
        <div className="derive">
          <div className="derive-t">逐步解析：逐段找动作，五段出五条</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">对象</span>停车管理工作的<b>成功经验</b>（＝做法）<span className="kb">范围</span>材料2（第1段是背景，不写）<span className="kb">字数</span>250字以内 → 5 条</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：逐段抓"动词 + 内容"</b>
            <table>
              <tr className="thead-row"><th>材料段</th><th>抓到的动作</th><th>总括词</th></tr>
              <tr><td data-label="材料段">第2段</td><td data-label="抓到的动作">印发《实施意见》、提出"公共服务"理念、成立停车办公室、明确工作思路、成立管理中心、出台系列文件</td><td data-label="总括词">高度重视停车问题</td></tr>
              <tr><td data-label="材料段">第3段</td><td data-label="抓到的动作">会同街道与交管局召开现场办公会、论证后对学校周边停车场实行特殊时段免费</td><td data-label="总括词">强化停车场公共属性</td></tr>
              <tr><td data-label="材料段">第4段</td><td data-label="抓到的动作">定期开展路内泊位"回头看"、评估施划合理性、动态调整</td><td data-label="总括词">开展"回头看"整改</td></tr>
              <tr><td data-label="材料段">第5段</td><td data-label="抓到的动作">规范指示标识、公示泊位数量、联合多部门定收费标准与通道、收费员统一着装、印制投诉电话</td><td data-label="总括词">规范路边停车管理</td></tr>
              <tr><td data-label="材料段">第6段</td><td data-label="抓到的动作">规划临时泊位、打造示范小区、内部清障施划、外部整合资源</td><td data-label="总括词">实行"融合式"管理</td></tr>
            </table></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工</b><p>五条天然成序（理念→政策→整改→规范→创新），无需打乱；每条"总括词 + 动宾短语串"。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>语言简洁，多用动宾结构；250 字写 5 条，每条 45 字左右。</p></div></div>
        </div>
      
        <div className="ans">
          <div className="ans-t">参考答案（不超过250字）</div>
          <p>一、<b>高度重视停车问题。</b>出台系列文件，树立公共服务理念，设立专门机构，明确工作思路。</p>
          <p>二、<b>强化停车场公共属性。</b>多部门开会论证，对学校周边收费停车场实行特殊时段免费政策。</p>
          <p>三、<b>开展路边泊位"回头看"整改。</b>评估路边泊位施划合理性，对泊位进行动态调整。</p>
          <p>四、<b>规范路边停车管理。</b>规范标识、公示数量，联合多部门确定收费标准和通道，统一收费员着装，印制投诉电话，收集群众咨询和投诉。</p>
          <p>五、<b>实行"融合式"管理。</b>打造示范小区，多部门联合整治停车环境，施划停车泊位线及标识，扩大停车空间；整合周边道路、停车场资源供居民使用。</p>
        </div>
      
        <h3>2.6 归纳概括通用技巧包（背下这一页就够用）</h3>
        <div className="grid">
          <Card><h4><span className="dot" style={{ background: 'var(--blue)' }}></span>对象口诀</h4><p><b>问题</b>找负面词(缺/少/难/差)；<b>原因</b>找因果链；<b>影响</b>找有利于/导致；<b>做法</b>找动词；<b>变化</b>找前后差异；<b>意见</b>先分立场。</p></Card>
          <Card><h4><span className="dot" style={{ background: 'var(--teal)' }}></span>分类三刀</h4><p>同义合并 / 同主体合并（政府·单位·群众）/ 同层面合并（思想·制度·监管·技术·资金·人才）。</p></Card>
          <Card><h4><span className="dot" style={{ background: 'var(--gold)' }}></span>总括词三招</h4><p>选大哥（首选）→ 选词组合 → 造大哥（最后手段）。总括词要短、准、能罩住下面的话。</p></Card>
          <Card><h4><span className="dot" style={{ background: 'var(--purple)' }}></span>书写模式</h4><p>一、总括词。＋具体表现……每条 40~60 字；正文写到字数上限的 95% 左右。</p></Card>
        </div>
        <div className="callout red"><b>四个高频扣分点：</b>① 不分类、堆成一大段；② 没有总括词，直接堆细节；③ 照抄口语不翻译成规范词；④ 过度推断，写了材料里没有的内容。</div>
        <div className="callout teal"><b>本课小结：</b>归纳概括 ＝ <b>对象定准 → 逐条拆点 → 合并归类 → 总括词前置</b>。五种对象共用一套动作，练熟这一课，全卷第一题就稳了。</div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 长期护理保险试点</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是X市医疗保障局的工作人员。根据材料，<b>概括X市长期护理保险试点工作的主要特点</b>。<br />要求：准确、全面，分条列项，不超过250字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">X市2021年启动长期护理保险试点。参保范围方面，职工医保参保人员全部纳入，个人不额外缴费，所需资金从医保基金划转。筹资方面，每人每年120元，其中医保基金划转90元、财政补助30元。服务方式方面，设居家护理、社区日间照料、机构护理三种，由参保人自主选择；重度失能人员可享受上门护理，每周2至3次。评估方面，由医保、卫健、民政三部门联合组建评估队伍，采用统一的失能等级评估标准，评估结果全市互认。支付方面，居家护理按次付费、机构护理按床日付费，不直接向个人发放现金。监管方面，建立护理服务机构准入和退出机制，年度考核不合格的取消定点资格；对虚报服务次数的机构纳入信用记录。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析："特点"题：不讲过程，只讲"共性做法"</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">身份</span>医保局工作人员 <span className="kb">对象</span>试点工作的<b>特点</b><span className="kb">字数</span>不超过250字 → 5 条</p><p><b>"特点"与"做法"的区别：</b>做法答"做了什么"，特点要答"<b>这些做法共同体现出什么特征</b>"——如"覆盖广""多渠道""标准统一""规范严格"。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：按材料的六个"方面"读</b><p>参保、筹资、服务方式、评估、支付、监管——材料已经用小标题式的"××方面"帮你切好了块，<b>一个方面提炼一个特点</b>。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：把"方面"翻译成"特点词"</b><p>参保＋筹资 → <b>参保筹资机制健全</b>（全覆盖、个人不缴费、基金＋财政共同承担）<br />服务方式 → <b>服务方式灵活可选</b>（三种方式自主选择、上门服务）<br />评估 → <b>评估标准统一互认</b>（三部门联合、标准统一、全市互认）<br />支付 → <b>支付方式规范</b>（按次、按床日，不发现金）<br />监管 → <b>机构管理严格</b>（准入退出、考核、信用记录）</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>5 条特点均用"××健全／灵活／统一／规范／严格"式的短语打头，整齐好读。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过250字）</div>
          <p>1.<b>参保筹资机制健全。</b>职工医保参保人员全覆盖，个人不额外缴费，由医保基金划转和财政补助共同筹资。</p>
          <p>2.<b>服务方式灵活可选。</b>设居家护理、社区日间照料、机构护理三种方式，由参保人自主选择，重度失能人员可享受上门护理。</p>
          <p>3.<b>评估标准统一互认。</b>医保、卫健、民政三部门联合组建评估队伍，统一失能等级标准，评估结果全市互认。</p>
          <p>4.<b>支付方式规范。</b>居家护理按次付费、机构护理按床日付费，不直接向个人发放现金。</p>
          <p>5.<b>机构管理严格。</b>建立准入退出机制，年度考核不合格取消定点资格，虚报服务纳入信用记录。</p>
        </div>
    </>
  )
}
