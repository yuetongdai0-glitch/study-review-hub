import type { ReactElement } from 'react'
import { ExerciseCard } from '@/components/content'

/**
 * 第5课 沟通协调
 *
 * @returns 该节正文。
 */
export default function S6(): ReactElement {
  return (
    <>
      <div className="goal"><div>🎯 <b>本课目标：</b>背熟"<b>动之以情 → 晓之以理 → 导之以行</b>"三步沟通法，能针对领导 / 同事 / 群众 / 下属不同对象调整策略。</div></div>
      
        <h3>5.1 题型识别与"答案思路"</h3>
        <div className="chips">
          <span className="chip blue">与××沟通，列出沟通思路</span><span className="chip blue">劝说××，争取理解支持</span>
          <span className="chip blue">如何说服××配合工作</span><span className="chip blue">列出解释沟通的内容要点</span>
        </div>
        <div className="think">
          <div className="think-t">答案思路：沟通＝先让对方"愿意听"，再让对方"听得进"，最后让对方"动起来"</div>
          <p>沟通题不是"吵架"，目的是<b>化解矛盾、达成共识、推进工作</b>。所以答案永远遵循同一条情绪曲线：<b>情 → 理 → 行</b>。</p>
          <div className="line">动之以情（肯定/共情，卸下对立）→ 晓之以理（摆事实讲政策算利害，打消顾虑）→ 导之以行（给路径、给支持、提要求，让对方动起来）</div>
        </div>
        <div className="skill">
          <div className="skill-t">技巧一：三步沟通法</div>
          <ol>
            <li><b>动之以情</b>：先肯定对方的付出/优势，理解对方的处境和顾虑，感谢支持——让对方放下对立情绪。<b>切忌一开口就讲大道理。</b></li>
            <li><b>晓之以理</b>：摆背景意义、讲政策要求、算清利害得失；针对对方的核心顾虑，<b>一条一条回应</b>。</li>
            <li><b>导之以行</b>：给出下一步怎么做、给什么支持、谁来跟进；最后诚挚提出请求或期望。</li>
          </ol>
        </div>
        <table>
          <tr className="thead-row"><th>对象</th><th>对方心理</th><th>关键打法</th></tr>
          <tr><td data-label="对象"><b>对领导</b></td><td data-label="对方心理">看重大局、效率、责任</td><td data-label="关键打法">先汇报事实与方案，讲清利弊得失，请示决策；尊重权威，不越级</td></tr>
          <tr><td data-label="对象"><b>对同事 / 平级</b></td><td data-label="对方心理">怕多干活、怕担责</td><td data-label="关键打法">换位思考、明确分工、讲大局讲协作，必要时请领导协调</td></tr>
          <tr><td data-label="对象"><b>对群众</b></td><td data-label="对方心理">情绪化、诉求具体</td><td data-label="关键打法">耐心倾听、稳定情绪，政策讲透讲细，能办则办、给时限、给路径</td></tr>
          <tr><td data-label="对象"><b>对下属</b></td><td data-label="对方心理">怕批评、需认可</td><td data-label="关键打法">先肯定付出，再指出问题，一起想办法，明确改进要求</td></tr>
          <tr><td data-label="对象"><b>对专家 / 专业方</b></td><td data-label="对方心理">重专业判断、怕被外行指挥</td><td data-label="关键打法">尊重专业意见，讲清需求背景，争取技术支持和可行性建议</td></tr>
        </table>
      
        
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 养老机构食堂整改沟通</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是J区市场监督管理局的工作人员。辖区某养老机构食堂被责令限期整改，负责人不愿配合。领导安排你与负责人沟通，<b>请列出沟通的内容要点</b>。<br />要求：定位准确，策略得当，不超过300字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">J区市场监管局在日常检查中发现，辖区"夕阳红"养老机构食堂存在生熟不分、食品留样不规范、餐具消毒记录缺失、部分从业人员无健康证等问题，已责令其15日内整改完毕。机构负责人刘院长表示不理解："我们开了8年没出过事，整改要停餐改造、还要增加人手，成本太高；老人吃饭不能停，家属也会有意见。"该机构现有入住老人186名，其中失能老人62名。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：动之以情 → 晓之以理 → 导之以行</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题：谁跟谁沟通、目的是什么</b><p><span className="kb">身份</span>市场监管局工作人员 <span className="kb">对象</span>养老机构负责人 <span className="kb">目的</span>推动其配合整改，而不是"处罚对象"<span className="kb">任务</span>列出<b>沟通内容要点</b> <span className="kb">字数</span>不超过300字</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：把材料切成三块</b><p><span className="kb">对方立场</span>经营8年无事故、成本高、老人吃饭不能停、家属有意见 → <b>动之以情用来接住</b>；<br /><span className="kb">我方依据</span>生熟不分、留样不规范、消毒记录缺失、无健康证 → <b>晓之以理逐条讲清危害与依据</b>；<br /><span className="kb">现实条件</span>186名老人、62名失能老人、15日整改期 → <b>导之以行时给过渡方案和支持</b>。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：把对方的顾虑逐条对出答案</b><p>"成本高"→ 协调专业人员上门指导，避免走弯路多花钱；"老人吃饭不能停"→ 帮助制定过渡期供餐方案；"人手不够"→ 指导从业人员集中办理健康证、简化内部流程；"怕反复检查"→ 验收合格后不再重复检查。</p><p className="muted">沟通题的"晓之以理"最容易写空，秘诀是：<b>对方有几个顾虑，就逐条回应几个</b>。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>三段式："一、动之以情。二、晓之以理。三、导之以行。"最后补一句跟进安排。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过300字）</div>
          <p>一、<b>动之以情。</b>肯定刘院长多年来为老年人服务的付出，理解其担心改造成本、影响老人就餐的实际困难。</p>
          <p>二、<b>晓之以理。</b>逐条说明隐患及依据：生熟不分易造成交叉污染；食品留样不规范、餐具消毒记录缺失、从业人员无健康证，均违反食品安全相关规定。入住老人多为高龄、失能人员，抵抗力弱，一旦发生食源性疾病后果严重，机构还要承担法律责任和声誉损失。</p>
          <p>三、<b>导之以行。</b>1.协调专业人员上门指导分区改造，帮助制定过渡期供餐方案，如与周边有资质的助餐点临时配送；2.指导从业人员集中办理健康证；3.明确15日整改时限，验收合格后不再重复检查。</p>
          <p>四、<b>后续跟进。</b>整改期间定期上门指导，整改完成后及时验收反馈，共同守护老人饮食安全。</p>
        </div>
        <h3>5.2 例题精讲①（底层思维）：邀请专家担任兼职调解员</h3>
        <ExerciseCard>
          <div className="ex-head">真题 · 事业单位联考 · A市调解中心</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">假如你是A市调解中心综合办公室主任助理赵佳。根据材料1，为争取张教授担任校园纠纷人民调解委员会兼职调解员，你将与她进行沟通。<b>请列出沟通的内容要点。</b><br />要求：角色定位准确，沟通内容得当，有说服力，不超过300字。（35分）</div></div>
            <div className="ex-m"><span className="ex-label">材料概要（材料1）</span><div className="ex-block">
              行业性专业性矛盾纠纷数量多、占比升至 70%，校园纠纷领域仍<b>存在空白</b>；市里拟组建<b>校园纠纷人民调解委员会</b>，由市司法局牵头，联合法院、公安、卫生、教育等部门，吸纳社会专业人士担任调解员，调解中心负责筹建。<br />
              <b>张教授情况：</b>教育心理学专业，年轻有为、专业知识过硬，在家校关系方面做过多个课题、发表文章、上过电视，<b>颇有知名度</b>。但她<b>犹豫</b>，担心：① 调解涉及法律问题自己不懂，怕说错；② 没怎么做过个体沟通，怕遇难缠的人；③ 担心时间上要"随时待命"，耽误科研教学。她最后表示：<b>愿意支持工作，专业领域问题可随时提供咨询意见。</b>
            </div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：情 → 理 → 行，逐个打消顾虑</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">身份</span>调解中心主任助理，代表单位<b>邀请</b>专家 <span className="kb">对象</span>张教授 <span className="kb">任务</span>列出<b>沟通内容要点</b>（不是"说服技巧"，是"说什么"）<span className="kb">字数</span>300字</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：把材料切成三块</b>
            <table>
              <tr className="thead-row"><th>材料内容</th><th>用途</th></tr>
              <tr><td data-label="材料内容">张教授年轻有为、专业过硬、知名度高（优势）</td><td data-label="用途">动之以情·肯定优势</td></tr>
              <tr><td data-label="材料内容">她担心不懂法律、不善个体沟通、时间冲突（顾虑）</td><td data-label="用途">理解担忧 → 逐条打消</td></tr>
              <tr><td data-label="材料内容">纠纷数量多且上升、校园纠纷是空白、困扰学校管理、影响教学秩序、易产生负面影响、司法局牵头多部门组建</td><td data-label="用途">晓之以理·背景意义</td></tr>
              <tr><td data-label="材料内容">她最后表示"愿意支持工作"</td><td data-label="用途">导之以行·顺势邀请</td></tr>
            </table></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：把"顾虑"逐条对出"答案"</b>
            <table>
              <tr className="thead-row"><th>张教授的顾虑</th><th>沟通内容（打消顾虑）</th></tr>
              <tr><td data-label="张教授的顾虑">不懂法律，怕说错</td><td data-label="沟通内容（打消顾虑）">法律问题由法院、公安等负责，涉法部分由法律专业人士解答</td></tr>
              <tr><td data-label="张教授的顾虑">没做过个体沟通，怕难缠</td><td data-label="沟通内容（打消顾虑）">我们会开展针对性培训，培训纠纷处理流程、沟通技巧等</td></tr>
              <tr><td data-label="张教授的顾虑">怕随时待命，耽误科研</td><td data-label="沟通内容（打消顾虑）">提前预约；时间冲突可调换其他调解员或通过线上方式调解，<b>无需随时待命</b>；纠纷处理还能为科研提供样本</td></tr>
            </table></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>三段式：一、动之以情（肯定优势 + 理解担忧）。二、晓之以理（背景意义 + 逐条打消顾虑）。三、导之以行（恳请再次考虑，诚挚邀请）。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过300字）</div>
          <p>一、<b>动之以情。</b>肯定张教授年轻有为、专业知识过硬、知名度高；理解其不善调解工作的担忧。</p>
          <p>二、<b>晓之以理。</b>1.背景意义：专业领域矛盾纠纷数量多、呈上升趋势；校园矛盾纠纷领域存在空白，困扰学校管理、影响教学秩序，极易产生负面社会影响；市司法局牵头，联合多部门组建校园纠纷调解委员会，吸纳社会人士担任人民调解员。2.打消顾虑：法律方面，法律由法院、公安等负责，涉法部分由法律专业人士解答；沟通方面，我们会开展针对性培训，培训纠纷处理流程、沟通技巧等；时间地点方面，我们会提前预约，时间冲突可通过调换其他调解员或线上方式进行调解，无需随时待命，纠纷处理还可为科研提供样本。</p>
          <p>三、<b>导之以行。</b>恳请再次考虑，诚挚邀请。</p>
        </div>
      
        
        <h3>5.3 例题精讲②（提升进阶）：向不理解的对方做解释沟通</h3>
        <ExerciseCard>
          <div className="ex-head">真题 · 事业单位联考 · S市健康村庄省级示范点初评</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">根据材料4，<b>列出与董书记解释沟通的内容要点。</b><br />要求：定位准确，策略得当，有理有据。不超过350字。（40分）</div></div>
            <div className="ex-m"><span className="ex-label">材料概要（材料4）</span><div className="ex-block">
              白云村申报"健康村庄"省级示范点，初评得分 91 分（95 分以上直接进复评，95 分以下须<b>逐条整改</b>否则取消资格）。整改事项：① 健康信息记录分析不全（需补齐 75 岁以上老人信息）；② 诊疗不规范（规范诊查室流程）；③ 设施不完善（整修药房天花板）；④ 服务项目不健全（健全糖尿病服务项目）；⑤ 村民对传染病和家庭医生不了解（需宣传）；⑥ 活动未按计划举办（需按计划举办、变更公示）。<br />
              <b>董书记的反应：</b>不愿签字，认为"花了大力气、整改太多、没考虑村里实际、时间太紧、担心失去复评资格影响积极性"，希望专家组调整评分和整改事项。
            </div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：先接情绪，再讲道理，最后给路径</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">身份</span>专家组联络员小沈 <span className="kb">对象</span>白云村党支部董书记 <span className="kb">任务</span>解释沟通的<b>内容要点</b> <span className="kb">字数</span>350字</p><p>难点：董书记的诉求（调整评分）<b>不能答应</b>，但要让他签字整改——这就是"策略得当"的考验。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：材料能提供哪些"说服弹药"</b>
            <p><span className="kb">董书记一方</span>付出了很多努力；健康环境建设确实做得不错（健身广场、健康步道、雨污分流、垃圾清运、花草苗木）。<span className="kb">评分一方</span>市里统一标准，评分表指标内容具体，评价方式客观（听取汇报、查阅资料、实地查看）。<span className="kb">规则</span>签字后及时整改，复评成功率高；否则取消资格。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：三步走</b>
            <table>
              <tr className="thead-row"><th>步骤</th><th>沟通内容</th></tr>
              <tr><td data-label="步骤"><b>动之以情</b></td><td data-label="沟通内容">1.付出了很多精力、得分与预想有差距，表示理解；2.91 分是较高分数，且健康环境满分，体现了对白云村工作的肯定；3.市里统一标准，评分表指标内容具体，评价方式包括听取汇报、查阅资料、实地查看，打分客观</td></tr>
              <tr><td data-label="步骤"><b>晓之以理</b></td><td data-label="沟通内容">逐条说明整改事项：健康信息记录分析不全→补齐 75 岁以上老人信息、分析村民信息；诊疗不规范→规范诊查室工作流程；设施不完善→整修药房天花板；服务项目不健全→健全糖尿病服务项目；村民对传染病和家庭医生不了解→多种方式宣传；活动未按计划举办→严格按计划举办、变更需公示通知</td></tr>
              <tr><td data-label="步骤"><b>导之以行</b></td><td data-label="沟通内容">1.签字后及时整改，复评成功率大，否则会被取消资格；2.参评既是为了荣誉，更是为了改善健康服务，要正确看待；3.请配合做好村民动员工作</td></tr>
            </table></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>三段式，注意姿态：<b>先共情、再讲客观标准，最后给"整改就能过"的希望</b>，全程不承诺"调整评分"。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过350字）</div>
          <p>一、<b>动之以情。</b>1.付出了很多精力，得分与预想有差距，表示理解；2.91 分是较高的分数，而且健康环境满分，体现了对白云村工作的肯定；3.市里统一标准，评分表指标、内容具体，评价方式包括听取汇报、查阅资料、实地查看等，打分客观。</p>
          <p>二、<b>晓之以理。</b>1.健康信息记录分析不全，需补齐 75 岁以上老人信息、分析村民信息；2.诊疗不规范，需规范诊查室工作流程；3.设施不完善，需整修药房天花板；4.服务项目不健全，需健全糖尿病服务项目；5.村民对传染病和家庭医生不了解，需多种方式宣传防控常识和服务项目；6.活动未按计划举办，需严格按计划举办、变更需公示通知。</p>
          <p>三、<b>导之以行。</b>1.签字后及时整改，复评成功率大，否则会被取消资格；2.参评既是为了荣誉，更是为了改善健康服务，要正确看待；3.配合做好动员工作。</p>
        </div>
        <div className="callout teal"><b>本课小结：</b>沟通题 ＝ <b>动之以情（共情卸防）→ 晓之以理（讲透道理、逐条回应顾虑）→ 导之以行（给路径、提请求）</b>。三步里"晓之以理"最容易写空，一定要<b>逐条回应对方的每一个顾虑</b>。</div>
    </>
  )
}
