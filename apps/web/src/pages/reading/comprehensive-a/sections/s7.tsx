import type { ReactElement } from 'react'
import { Card, ExerciseCard } from '@/components/content'

/**
 * 第7课 规范表达素材库
 *
 * @returns 该节正文。
 */
export default function S8(): ReactElement {
  return (
    <>
      <h3>7.1 问题类规范词（概括题直接用）</h3>
        <div className="chips">
          <span className="chip">责任落实不到位</span><span className="chip">监管存在盲区/缺位</span><span className="chip">制度不健全</span><span className="chip">基础设施薄弱</span><span className="chip">服务意识欠缺</span><span className="chip">宣传引导不足</span><span className="chip">群众参与度低</span><span className="chip">信息不透明</span><span className="chip">资源分配不均</span><span className="chip">人才队伍短缺</span><span className="chip">部门协调不畅</span><span className="chip">长效机制缺失</span><span className="chip">流程繁琐</span><span className="chip">知晓率低</span><span className="chip">安全隐患突出</span><span className="chip">管理粗放</span>
        </div>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 物业服务群众诉求</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是N区12345市民热线督办科的工作人员。根据近期群众来电记录，<b>概括群众反映集中的物业服务类问题（要求使用规范表达）</b>。<br />要求：准确、全面，分条列项，不超过250字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">群众来电（节选）："我们小区电梯坏了一个月，物业说没钱修。""楼道的灯三分之二不亮，晚上回来黑漆漆的。""交房时承诺的绿化带现在成了停车位，物业一直没给说法。""垃圾三天才清一次，夏天臭得不敢开窗。""停车费一年涨两次，涨之前也不问问我们。""物业费收得挺积极，报修半个月没人来看。""业委会想成立，物业不配合，连业主名单都不给。""监控坏了三年，去年我家丢了电动车，报警也查不出来。"</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：把大白话一句一句翻译成规范表达</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">身份</span>热线督办科工作人员 <span className="kb">对象</span>物业服务类<b>问题</b>（要求规范表达）<span className="kb">字数</span>不超过250字 → 6 条左右</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：一句来电翻译成一个规范短语</b><p>电梯坏一个月没人修 → 设施维护不及时；楼道灯大面积不亮 → 公共照明缺失；绿化带变停车位且无说法 → 公共空间被擅自改变用途；垃圾三天一清 → 环境卫生管理不到位；停车费随意上涨 → 收费不规范、程序不透明；报修半个月无人处理 → 服务响应滞后、质价不符；物业不配合业委会成立 → 自治机制受阻；监控瘫痪三年 → 安防设施失效、隐患突出。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：同一层面的合并</b><p>"设施维护不及时"把电梯、照明、监控三件事收口（同层面法）；"收费与服务不匹配"把涨价与响应慢合并（同义法）；其余各成一条。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>6 条，全部使用规范表达——<b>面试／阅卷时，"设施维护不及时"和"电梯坏了没人修"是两个分数</b>。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过250字）</div>
          <p>1.<b>设施维护不及时。</b>电梯损坏长期未修，楼道公共照明大面积失效，监控设备瘫痪多年。</p>
          <p>2.<b>环境卫生管理不到位。</b>垃圾清运频次低，异味扰民。</p>
          <p>3.<b>服务响应滞后、质价不符。</b>报修长时间无人处理，物业费收取与服务提供不对等。</p>
          <p>4.<b>收费不规范、程序不透明。</b>停车费频繁上调且未征求业主意见，收支情况不公开。</p>
          <p>5.<b>公共空间被擅自改变用途。</b>承诺的绿化带被改为停车位，物业未作说明。</p>
          <p>6.<b>自治机制不畅。</b>物业不配合业主委员会成立，拒不提供业主名单等相关资料。</p>
        </div>
        <h3>7.2 对策十层面速查（提对策直接对号入座）</h3>
        <table>
          <tr className="thead-row"><th>层面</th><th>示例表述</th></tr>
          <tr><td data-label="层面"><b>思想</b></td><td data-label="示例表述">加强宣传引导（横幅海报、三微一端、宣讲会、知识竞赛）；开展专题教育</td></tr>
          <tr><td data-label="层面"><b>制度</b></td><td data-label="示例表述">建章立制、细化规则；出台管理办法，明确责任分工；完善考核机制</td></tr>
          <tr><td data-label="层面"><b>监管</b></td><td data-label="示例表述">内部：加大检查巡查、明察暗访、建长效机制；外部：拓宽投诉渠道、设举报电话、媒体监督</td></tr>
          <tr><td data-label="层面"><b>执法/惩处</b></td><td data-label="示例表述">依法查处、专项整治、通报批评、纳入信用记录、提高违法成本</td></tr>
          <tr><td data-label="层面"><b>管理</b></td><td data-label="示例表述">对干部：绩效考核、量化考核、培训学习；对群众：宣传引导、严格执法、专项整顿</td></tr>
          <tr><td data-label="层面"><b>技术</b></td><td data-label="示例表述">数字化平台、智能管理系统、线上预约、大数据分析、政务App、追溯系统</td></tr>
          <tr><td data-label="层面"><b>资金</b></td><td data-label="示例表述">加大财政投入、申请专项资金、政策补贴、减免费用、社会资本参与</td></tr>
          <tr><td data-label="层面"><b>人才</b></td><td data-label="示例表述">引进专业人才、加强业务培训、提高福利待遇、拓宽晋升通道、校企合作</td></tr>
          <tr><td data-label="层面"><b>设施</b></td><td data-label="示例表述">完善基础设施、合理规划布局、增加便民设施、无障碍改造、资源下沉</td></tr>
          <tr><td data-label="层面"><b>服务</b></td><td data-label="示例表述">优化办事流程、一窗受理、集成服务、上门服务、延时服务、满意度回访</td></tr>
        </table>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 共享单车治理</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是P市城市管理局的工作人员。针对P市城区共享单车乱停放问题，<b>提出解决建议</b>。<br />要求：措施具体可行，不超过300字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">P市城区有共享单车运营企业4家、投放车辆约9万辆，而城区实际需求量约5万辆。问题主要有：地铁口、公交站、商场周边人行道上车辆堆积，盲道被占，行人绕行机动车道；老旧小区门口车辆倒伏、损坏，长期无人清理；部分路段没有划定停放区，也没有电子围栏；早晚高峰运维人员不足，车辆堆积三四个小时无人整理；三家企业各建平台，数据不互通、调度各自为政；个别未成年人骑行，家长扫码后孩子骑走；车辆损坏率高，故障车与正常车混停。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：对策十层面：一条一条对号入座，不漏层</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">身份</span>市城管局工作人员 <span className="kb">对象</span>共享单车乱停放的<b>建议</b>（一问）<span className="kb">字数</span>不超过300字 → 6 条</p><p>材料第一句就给了关键数据：<b>投放9万辆 vs 需求5万辆</b>——总量过剩，这一条对应对策中的"总量调控"，是很多考生会漏的"大点"。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点 → 对策：逐条翻面</b><p>总量9万＞需求5万 → 总量调控；无停放区、无电子围栏 → 完善停放设施；堆积三四小时无人整理 → 加强运维；各建平台、数据不通 → 技术手段与数据共享；未成年人骑行 → 宣传教育；故障车混停、损坏率高 → 监管执法与企业考核。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：用"十层面"复核一遍</b><p><span className="kb">制度</span>总量核定与考核 → 有<br /><span className="kb">设施</span>停放区、电子围栏 → 有<br /><span className="kb">技术</span>数据接入、统一调度 → 有<br /><span className="kb">管理</span>运维人员配比、清运时限 → 有<br /><span className="kb">思想</span>文明骑行宣传 → 有<br /><span className="kb">执法</span>考核排名与退出、依法查处 → 有<br />六个层面齐备，答案就"立得住"。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>每条"总括词＋具体做法"，主体、手段、内容写清，300字内完成。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过300字）</div>
          <p>1.<b>实施总量调控。</b>科学测算城区实际需求，合理核定各企业投放规模，建立动态调整机制。</p>
          <p>2.<b>完善停放设施。</b>在商圈、地铁口、公交站等区域科学划设停放区，设置电子围栏和引导标识，保护盲道畅通。</p>
          <p>3.<b>强化技术手段。</b>推动企业运营数据接入城市管理平台，统一调度车辆，对淤积点位及时预警。</p>
          <p>4.<b>加强运维管理。</b>督促企业按投放量配足运维人员，明确30分钟内清运堆积车辆、及时清理故障车。</p>
          <p>5.<b>深化宣传教育。</b>宣传文明骑行、规范停放，明确禁止未成年人骑行。</p>
          <p>6.<b>加强监管执法。</b>建立企业考核排名和退出机制，对乱停乱放、损坏车辆不及时处置的依法查处。</p>
        </div>
        <h3>7.3 公文常用语（写不出来时的兜底弹药）</h3>
        <div className="tpl">
          <span className="hl">开头万能句：</span>为进一步××××，切实××××，现就有关事项通知如下：<br />
          <span className="hl">结尾万能句：</span>请各单位高度重视，认真组织落实，确保取得实效。/ 让我们携手共进，为××××贡献力量！/ 以上请示妥否，请批示。/ 特此报告。<br />
          <span className="hl">高频热词：</span>精细化治理、共建共治共享、以人为本、源头治理、标本兼治、资源下沉、网格化管理、放管服改革、数字政府、长效机制、举一反三、问计于民、急难愁盼、幸福感获得感安全感、靠前服务
        </div>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 防汛物资资金请示</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是Q市水利局办公室的工作人员。为应对今年汛期，市水利局拟采购一批防汛物资并向市财政局申请专项资金。<b>请你拟写一份请示</b>。<br />要求：格式规范，要素齐全，不超过350字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">Q市地处两条河流交汇处，汛期集中在6月至8月。全市现有防汛物资储备库3座，储备编织袋12万条、抽水泵36台、救生衣800件。经测算，按今年预测的水位和降雨量，现有物资缺口较大：尚缺编织袋18万条、抽水泵24台、救生衣2200件，另需移动照明设备20套，市场询价合计约需资金186万元。市水利局年度部门预算中防汛物资购置经费仅安排40万元，缺口146万元。按照《Q市防汛物资储备管理办法》，物资采购需经市财政局审批。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：请示："一事一请"，结尾句式必须背下来</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题：请示的三个硬规矩</b><p>① <b>一文一事</b>：只请示"申请防汛物资专项资金"这一件事；② <b>必须有主送机关</b>：市财政局；③ <b>结尾固定</b>："以上请示妥否，请批示。"</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：把材料拆成"缘由—事项—请求"</b><p>两河交汇、汛期6—8月（背景）→ 现有储备数量（现状）→ 缺口数量＋询价186万元（必要性）→ 预算仅40万元、缺口146万元（资金需求）→ 依据管理办法需报批（依据）。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：开门见山，把"钱"和"缺什么"写清</b><p>请示最忌讳"绕"。<b>开头一句交代缘由，中间把缺口和金额写具体，结尾提请求＋一句承诺（专款专用）</b>，公文的分量就出来了。注意落款写"Q市水利局"，日期用××代替。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>标题→主送机关→缘由与依据→请示事项→结尾语→落款日期，350字内完成。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过350字）</div>
          <p><b>关于申请防汛物资专项资金的请示</b></p>
          <p>市财政局：</p>
          <p>Q市地处两条河流交汇处，汛期集中在6月至8月。经测算，我市现有防汛物资缺口较大，尚缺编织袋18万条、抽水泵24台、救生衣2200件及移动照明设备20套，市场询价约需资金186万元；而年度部门预算中防汛物资购置经费仅安排40万元，缺口146万元。</p>
          <p>为保障今年安全度汛，依据《Q市防汛物资储备管理办法》，现申请市级财政专项资金146万元，用于补充上述防汛物资。我局将严格按规定组织采购，专款专用，汛前完成入库并建立管理台账。</p>
          <p>以上请示妥否，请批示。</p>
          <p>Q市水利局<br />××年××月××日</p>
        </div>
        <h3>7.4 应急 / 沟通类高频表达</h3>
        <div className="cols">
          <Card><h4><span className="dot" style={{ background: 'var(--red)' }}></span>应急高频动作词</h4><ul><li>第一时间、迅速、立即、马上</li><li>安抚情绪、稳定局面、控制现场</li><li>调查核实、摸清情况、了解诉求</li><li>分级处置、限期办结、跟踪回访</li><li>举一反三、排查隐患、建章立制</li></ul></Card>
          <Card><h4><span className="dot" style={{ background: 'var(--teal)' }}></span>沟通高频表达</h4><ul><li>表示理解、深表歉意、感谢支持</li><li>动之以情、晓之以理、导之以行</li><li>换位思考、将心比心、诚恳交流</li><li>讲清政策、说明利害、打消顾虑</li><li>提供帮助、明确时限、持续跟进</li></ul></Card>
        </div>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 农民工欠薪沟通</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是R县人力资源和社会保障局劳动保障监察大队的工作人员。李某等12名农民工到县人社局反映某建筑工地拖欠工资，情绪激动，表示"再不给钱就去堵路"。领导安排你负责沟通处理，<b>请列出沟通的内容要点</b>。<br />要求：定位准确，策略得当，不超过300字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">R县某建筑工地因开发商资金链紧张，总包方将部分工程款挪作他用，导致40余名农民工3个月工资共28万元未发。李某等12人代表到县人社局反映情况，情绪激动："干完活拿不到钱，家里孩子等着交学费"，并表示"再拖就堵路、去政府门口静坐"。经初步核查，该工地用工管理混乱，部分农民工未签订劳动合同、没有考勤记录，工资台账缺失。总包方负责人表示："甲方没给钱，我也没办法。"</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：应急＋沟通：先接情绪，再讲法理，最后给路径</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题：两个对象、一个隐性风险</b><p><span className="kb">身份</span>劳动保障监察大队工作人员 <span className="kb">对象</span>讨薪农民工（情绪激动）＋ 总包方（推责）<span className="kb">隐性风险</span>"堵路、静坐"的过激倾向 <span className="kb">字数</span>不超过300字</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：材料能提供哪些"说服弹药"</b><p><span className="kb">对我方</span>法定职责、快速处置程序、维权渠道可以给；<br /><span className="kb">对民工</span>辛苦付出要肯定、工资受法律保护是硬话；堵路静坐涉嫌违法，要讲清后果；<br /><span className="kb">对总包方</span>《保障农民工工资支付条例》明确总包方清偿责任，"甲方没给钱"不能免责；<br /><span className="kb">难点</span>证据不足（无合同、无考勤、无台账）——必须指导民工补证据。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：三步走＋一个跟进</b><p><b>动之以情</b>：稳住情绪、表示理解；<b>晓之以理</b>：讲政策、讲法律责任、说明过激行为的后果；<b>导之以行</b>：登记受理、指导收集证据、约谈总包方和开发商、告知维权渠道与反馈方式；<b>跟进</b>：明确办理时限、及时通报进展，防止矛盾升级。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>三段式＋跟进一条；用"安抚""登记""约谈""告知""反馈"等机关动词。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过300字）</div>
          <p>一、<b>动之以情。</b>安抚李某等人情绪，理解其辛苦付出和家庭实际困难，明确表示人社部门将依法维护其合法权益。</p>
          <p>二、<b>晓之以理。</b>讲清《保障农民工工资支付条例》等规定，明确工资受法律保护、总包单位负有清偿责任；同时说明堵路、静坐等行为涉嫌违法，会影响问题解决，引导其依法理性维权。</p>
          <p>三、<b>导之以行。</b>现场登记欠薪情况，指导其收集工资条、聊天记录、考勤等证据；启动欠薪案件快速处置程序，及时约谈总包方和开发单位；告知维权渠道、办理时限和反馈方式。</p>
          <p>四、<b>及时跟进。</b>按时限通报处理进展，必要时联合住建等部门联合处置，防止矛盾升级。</p>
        </div>
        <h3>7.5 服务意识金句（结尾升华用）</h3>
        <div className="chips">
          <span className="chip teal">群众利益无小事</span><span className="chip teal">把群众的事当自己的事</span>
          <span className="chip teal">让数据多跑路、群众少跑腿</span><span className="chip teal">民有所呼、我有所应</span>
          <span className="chip teal">小窗口、大服务</span><span className="chip teal">民生无小事，枝叶总关情</span>
        </div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 自来水浑浊公开回应</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是S市自来水公司客服中心的工作人员。近日城区多个小区自来水出现浑浊、水压不足，市民在本地论坛发帖质疑水质安全。公司拟通过官方公众号作出公开回应，<b>请你撰写公开回应的内容</b>。<br />要求：定位准确，语言得体，条理清晰，不超过350字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">8月12日至14日，城区东部5个小区居民反映自来水发黄、有异味，高层住户水压不足。经核查，8月11日晚该片区DN600供水主管道发生爆管，抢修恢复供水后，管道内壁沉积物被水流冲刷，导致短时浑浊；抢修期间关闭部分阀门，造成东部片区水压波动。经检测，8月12日6时至12时部分时段浑浊度超出国家标准限值，其余指标均符合《生活饮用水卫生标准》，14日18时复测全部合格。公司已采取措施：连续36小时冲洗管道、清洗二次供水水箱、为受影响住户上门送水，并减免受影响住户8月份5%的水费。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：公开回应：不回避、不狡辩，结尾用服务意识收束</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">身份</span>自来水公司客服中心工作人员（代表企业）<span className="kb">载体</span>公众号公开回应 <span className="kb">目的</span>回应质疑、消除影响 <span className="kb">字数</span>不超过350字</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：把材料理成"三层事实"</b><p><span className="kb">发生了什么</span>爆管抢修→沉积物冲刷→短时浑浊；关阀→水压波动。<br /><span className="kb">错在哪</span>8月12日6—12时部分时段浑浊度超标——<b>要如实承认，不能回避</b>。<br /><span className="kb">已经做了什么</span>36小时冲洗、清洗水箱、上门送水、减免5%水费。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：三段式＋结尾升华</b><p>① 情况说明（原因＋检测结果）；② 处置措施（已做的四件事）＋致歉；③ 改进承诺＋结尾金句（如"群众利益无小事"）。<b>回应类公文最忌"喊话"式辩解，也最忌只道歉不说做了什么。</b></p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>标题"关于××的说明"；称谓"各位市民朋友："；正文分段；落款"自来水公司"＋日期，350字内完成。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过350字）</div>
          <p><b>关于城区东部部分小区自来水出现浑浊情况的说明</b></p>
          <p>各位市民朋友：</p>
          <p>8月12日至14日，城区东部部分小区自来水出现发黄、异味及高层水压不足。经核查，系8月11日晚该片区DN600供水主管道爆管抢修后，管道内壁沉积物被水流冲刷所致，抢修关阀也造成水压波动。8月12日6时至12时部分时段浑浊度超出国家标准限值，其余指标均符合《生活饮用水卫生标准》，14日18时复测全部合格。</p>
          <p>我公司已连续36小时冲洗管道，清洗二次供水水箱，为受影响住户上门送水，并减免受影响住户8月份5%的水费。对此次事件给市民生活带来的不便，我们深表歉意。</p>
          <p>群众利益无小事。我们将举一反三，加强管网巡查和老化管道更新，完善水质监测和应急响应机制，让市民喝上放心水。欢迎广大市民继续监督。</p>
          <p>S市自来水公司<br />××年××月××日</p>
        </div>
    </>
  )
}
