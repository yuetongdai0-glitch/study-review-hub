import type { ReactElement } from 'react'
import { Card, ExerciseCard } from '@/components/content'

/**
 * 第8课 考场实战
 *
 * @returns 该节正文。
 */
export default function S9(): ReactElement {
  return (
    <>
      <h3>8.1 时间分配（120分钟参考节奏）</h3>
        <table>
          <tr className="thead-row"><th>任务</th><th>用时</th><th>说明</th></tr>
          <tr><td data-label="任务">通读背景材料（把握全局）</td><td data-label="用时">15~20分钟</td><td data-label="说明">先读题再读材料：带着第1题去读，边读边圈</td></tr>
          <tr><td data-label="任务">第1题 概括/要素提炼</td><td data-label="用时">20~25分钟</td><td data-label="说明">点全、分条、总括词前置</td></tr>
          <tr><td data-label="任务">第2题 对策/常态处理</td><td data-label="用时">20~25分钟</td><td data-label="说明">问题—对策对照，四要素写实</td></tr>
          <tr><td data-label="任务">第3题 沟通/应急/公文</td><td data-label="用时">20~30分钟</td><td data-label="说明">按框架展开，别恋战</td></tr>
          <tr><td data-label="任务">第4题 公文写作</td><td data-label="用时">30~40分钟</td><td data-label="说明">分值最高，留足时间；先定格式再写内容</td></tr>
          <tr><td data-label="任务">检查</td><td data-label="用时">5分钟</td><td data-label="说明">补漏点、改错别字、查格式</td></tr>
        </table>
        <div className="callout red"><b>重要提醒：</b>材料字数逐年增加，平时必须练"速读+详读"结合，<b>15分钟内完成通读是硬指标</b>。</div>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 无障碍环境建设（材料1）</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是Q市残联的工作人员。根据材料1，<b>概括Q市无障碍环境建设存在的主要问题</b>。<br />要求：准确、全面，分条列项，不超过250字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">【材料1】Q市有持证残疾人12.8万人、60岁以上老年人93万人。近年来，Q市推进无障碍环境建设，新建道路铺设了盲道，部分公共场所增设无障碍电梯和坡道。但走访发现：老城区约60%的人行道盲道被车辆、摊位占用，或中途"断头"；新建的公交站台与地面高差超过15厘米，轮椅无法上下；全市仅12%的公共停车场设有无障碍车位，且常被社会车辆占用；无障碍电梯数量不足且维修不及时，有的电梯按钮没有盲文、没有语音报层；政务大厅未设低位服务台，听障人士办事缺乏手语翻译；官方网站和政务App未做信息无障碍改造，读屏软件无法正常读取；无障碍设施建成后由谁管、怎么维护，没有明确规定，损坏后长期无人维修；有市民反映，向有关部门反映问题后"不知道该找哪个部门"。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：考场节奏：先读题再读材料，通读15~20分钟是硬指标</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>先做时间预算，再动笔</b><p>全卷 120 分钟，参考节奏是：<b>通读背景材料 15~20 分钟 → 第1题 20~25 分钟 → 第2题 20~25 分钟 → 第3题 20~30 分钟 → 第4题 30~40 分钟 → 检查 5 分钟</b>。<br />本题是第1题，<b>限时20~25分钟</b>：读材料找出6条问题约8分钟，加工与书写约10分钟，留2分钟检查总分条是否齐全。<b>绝不能恋战</b>，第1题多花10分钟，第4题公文就要少写10分钟，那是拿小分换大分。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>带着第1题去读材料</b><p>题干要"问题"，读材料时就用△只圈负面表述：盲道被占用、断头｜站台高差15厘米、轮椅上不去｜无障碍车位仅12%且被占｜电梯不足、维修不及时、无盲文无语音｜无低位服务台、无手语翻译｜网站和App未做无障碍改造、读屏读不了｜管护责任不明、长期无人维修｜反映问题不知道找谁。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：8 条并成 5 类</b><p>盲道被占＋断头 → <b>既有设施被占用、不连续</b>；站台高差＋车位少且被占 → <b>设施与需求不匹配</b>；电梯少、无盲文语音＋无低位台、无手语 → <b>设施功能不完善</b>；网站和App未改造 → <b>信息无障碍滞后</b>；管护责任不明＋反映无门 → <b>管理维护责任不清</b>。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写与检查</b><p>5 条写满 250 字；最后 2 分钟检查：分条是否清晰、有没有把"成绩"（铺盲道、增设坡道）误写进问题里。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过250字）</div>
          <p>1.<b>既有设施被占用、不连续。</b>老城区多数人行道盲道被车辆、摊位占用或中途断头。</p>
          <p>2.<b>设施与需求不匹配。</b>公交站台与地面高差过大，轮椅无法上下；无障碍车位数量少且常被社会车辆占用。</p>
          <p>3.<b>设施功能不完善。</b>无障碍电梯数量不足、维修不及时，缺少盲文按钮和语音报层；政务大厅未设低位服务台，缺少手语翻译。</p>
          <p>4.<b>信息无障碍滞后。</b>官方网站和政务App未作无障碍改造，读屏软件无法正常读取。</p>
          <p>5.<b>管理维护责任不清。</b>建成后管护主体和标准不明确，设施损坏长期无人维修，群众反映问题不知该找哪个部门。</p>
        </div>
        <h3>8.2 卷面与答题技巧</h3>
        <div className="grid">
          <Card><h4><span className="dot" style={{ background: 'var(--blue)' }}></span>卷面</h4><p>字迹工整不求书法；分条列项；段首不空格（顶格写）；修改用单线划掉，不用涂黑。</p></Card>
          <Card><h4><span className="dot" style={{ background: 'var(--teal)' }}></span>字数</h4><p>贴近上限不超格；按"每点字数＝总字数÷要点数"倒推；写不满时优先补"怎么做"的细节。</p></Card>
          <Card><h4><span className="dot" style={{ background: 'var(--gold)' }}></span>关键词</h4><p>核心词用材料原词；每条首句放总括词；阅卷人30秒一题，第一眼看到的就是分数。</p></Card>
          <Card><h4><span className="dot" style={{ background: 'var(--purple)' }}></span>心态</h4><p>不会的题按框架写满不空；公文格式拿不准就写最保险的"标题+称谓+正文+落款"。</p></Card>
        </div>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 非遗工坊助力乡村振兴</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是V县文化和旅游局的工作人员。根据材料，<b>概括V县非遗工坊助力乡村振兴的主要做法和成效</b>。<br />要求：准确、全面，分条列项，不超过300字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">V县现有非遗工坊23家，涵盖藤编、蜡染、银饰、竹编等12个门类。做法上：依托非遗工坊开展"订单式"培训，累计培训绣娘、编织艺人2600人次，其中脱贫人口480人；与电商平台合作开设非遗专区，工坊产品线上销售额从2021年的860万元增长到2023年的3400万元；推行"工坊＋农户"模式，农户在家完成初加工，由工坊统一收购、统一标准、统一品牌；把非遗工坊与研学旅游结合，2023年接待研学团队210批、4.6万人次；出台《V县非遗工坊认定和管理办法》，对认定为县级工坊的给予5万至10万元奖励。成效上：带动就业3800余人，其中妇女占72%；藤编产品出口到3个国家；3个村集体经济收入由不足5万元增加到20万元以上。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：卷面与字数：每点写多少字，是"算"出来的</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题：先判问数，再算字数</b><p>题干出现"做法<b>和</b>成效"＝两问。总字数300字，<b>按"做法占2/3、成效占1/3"分配</b>：做法5条、每条约40字（共200字）；成效压成一段约60字。写完大致就是300字，不会前松后紧。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：○ 和 □ 分两堆</b><p><span className="kb">○做法</span>订单式培训2600人次｜电商专区销售额860万→3400万｜"工坊＋农户"统一收购标准品牌｜研学旅游210批4.6万人次｜出台认定办法、奖励5万~10万元。<br /><span className="kb">□成效</span>带动就业3800余人、妇女占72%｜产品出口3个国家｜3个村集体收入由不足5万增至20万元以上。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：数字要"留"，形容词要"删"</b><p>把"高度重视、大力推进"这类形容词全部删掉，<b>数字必须保留</b>——阅卷人扫一眼数字就知道你读懂了材料。总括词统一用"动词打头"：开展、拓展、推行、发展、完善。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写与自查</b><p>分条列项、段首顶格、字迹工整；正文写到字数上限的95%左右；最后检查有无错别字和漏问。本次答案是"做法5条＋成效1条"，两问都答了。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过300字）</div>
          <p><b>做法：</b>1.<b>开展订单式培训。</b>累计培训绣娘、编织艺人2600人次，其中脱贫人口480人。2.<b>拓展线上销售。</b>与电商平台合作开设非遗专区，线上销售额由860万元增长到3400万元。3.<b>推行"工坊＋农户"模式。</b>农户在家完成初加工，工坊统一收购、统一标准、统一品牌。4.<b>发展研学旅游。</b>把非遗工坊与研学旅游结合，2023年接待研学团队210批、4.6万人次。5.<b>完善政策保障。</b>出台认定和管理办法，对县级工坊给予5万至10万元奖励。</p>
          <p><b>成效：</b>带动就业3800余人，其中妇女占72%；藤编产品出口3个国家；3个村集体经济收入由不足5万元增加到20万元以上。</p>
        </div>
        <h3>8.3 考前急救卡（一页纸速记）</h3>
        <div className="tpl">
          <span className="tag">① 万能四步</span> 审题（身份/范围/对象/问数/字数）→ 析点（粗读三维+精读二维，逐条拆）→ 加工（合并同类项+总括词）→ 书写（总括词前置+分条）<br /><br />
          <span className="tag">② 归纳概括</span> 忠于原文 · 宁多勿漏 · 合并同类 · 总括词前置 · 写到上限<br /><br />
          <span className="tag">③ 提出对策</span> 判问数 → 身份定边界 → 直接对策+问题反推+经验借鉴 → 主体+手段+内容+目的<br /><br />
          <span className="tag">④ 应急处理</span> 控场（安抚/疏散/上报）→ 调研 → 短对（分对象）→ 长对（长效机制）<br /><br />
          <span className="tag">⑤ 沟通协调</span> 动之以情 → 晓之以理（逐条打消顾虑）→ 导之以行<br /><br />
          <span className="tag">⑥ 公文格式</span> 标题居中 · 称谓顶格 · 正文凭事断 · 落款日期右下；讲话稿/短评不落款<br /><br />
          <span className="tag">⑦ 对策十层面</span> 思想 · 制度 · 监管 · 执法 · 管理 · 技术 · 资金 · 人才 · 设施 · 服务<br /><br />
          <span className="tag">⑧ 总括词三招</span> 选大哥（首选）→ 选词组合 → 造大哥（最后手段）<br /><br />
          <span className="tag">⑨ 时间</span> 通读15~20 + 25 + 25 + 30 + 35~40 + 检查5 ≈ 120分钟<br /><br />
          <span className="tag">⑩ 三铁律</span> 答案源于材料 · 时刻代入身份 · 分类清晰不堆砌<br /><br />
          <span className="tag">⑪ 2026提醒</span> 试卷＝"背景材料+任务" · 删"会务安排" · 常识增"历史" · 突出政治素质 · <b>重实务、反模板</b><br /><br />
          <span className="tag">⑫ 检查清单</span> 格式对不对 · 错别字有没有 · 标点规范不 · 字数超没超 · 每问都答了没
        </div>
        <div className="callout blue"><b>最后一句话：</b>综应A不考天赋，考"方法＋熟练度"。方法这份讲义已经完整给你，剩下就是<b>拿起真题动笔</b>。每写完一题，用本课采分点框架自评一遍，你的分数就会一节一节往上涨。</div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 城市书房简介</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是W市城市书房运营中心的工作人员。W市首批10家"城市书房"将于下月开放，拟在官方公众号发布一段书房简介，向市民介绍书房情况。<b>请你撰写这段简介</b>。<br />要求：内容具体，条理清晰，语言得体，不超过400字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">W市首批10家城市书房由市文化和旅游局牵头，利用社区闲置用房、公园配套用房和商业综合体空间建设，总面积4800平方米，藏书12万册，配备自助借还机、电子阅读屏和无障碍通道。开放时间为每日9:00至21:00，全年无休。服务对象为全体市民，凭身份证或社保卡即可免费办理借阅证、免费借阅，一次可借5册、借期30天，可续借一次。书房设有少儿阅读区、自习区、老年阅览区和创客空间，每月举办读书会、亲子故事会、公益讲座等活动不少于4场。书房提供免费WiFi、饮水、充电和雨伞借用服务，可预约团体活动场地，并与市图书馆及各分馆实现图书通借通还，同时接受市民捐赠图书和志愿服务报名。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：考场上遇到陌生文种：用"骨架"救场，格式判断要准</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>急救思路：没见过"简介"也不慌</b><p>"简介"属于近年新考文种，但结构就是老骨架：<b>设立背景与定位 → 服务对象与办理方式 → 功能分区与活动 → 服务承诺与展望</b>。遇到没背过的文种，先问一句"它是给谁看、要告诉对方什么"，骨架自然就出来了。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>格式判断：简介一般无称谓、不落款</b><p>这是最容易丢分也最容易拿分的一步——<b>简介／前言类不用写"××（单位）："的称谓，也一般不写落款和日期</b>，直接以标题＋正文呈现即可。写错了反而显得不懂文种。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>析点：把材料按"四问"归位</b><p>谁建的、怎么来的、多大、多少书 → 背景与定位；几点开门 → 开放时间；谁能用、怎么借 → 服务对象与规则；有哪些区、办什么活动 → 功能与内容；免费WiFi、团体场地、通借通还、捐赠与志愿 → 服务与参与方式。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>标题＋开头缘由＋四个小序号＋一句欢迎语，400字内完成。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过400字）</div>
          <p><b>W市"城市书房"简介</b></p>
          <p>为满足市民就近阅读需求，W市首批10家城市书房将于下月正式开放。书房由市文化和旅游局牵头，利用社区闲置用房、公园配套用房和商业综合体空间建设，总面积4800平方米，藏书12万册。</p>
          <p>一、<b>开放时间。</b>每日9:00至21:00，全年无休。</p>
          <p>二、<b>服务对象与借阅规则。</b>面向全体市民免费开放，凭身份证或社保卡即可办理借阅证，一次可借5册、借期30天，可续借一次。</p>
          <p>三、<b>功能分区。</b>设有少儿阅读区、自习区、老年阅览区和创客空间，配备自助借还机、电子阅读屏和无障碍通道。</p>
          <p>四、<b>活动与服务。</b>每月举办读书会、亲子故事会、公益讲座等活动不少于4场；提供免费WiFi、饮水、充电和雨伞借用服务，可预约团体活动场地；书房与市图书馆、各分馆实现图书通借通还。</p>
          <p>书房同时接受市民捐赠图书和志愿服务报名。欢迎广大市民走进书房，共享书香。</p>
        </div>
    </>
  )
}
