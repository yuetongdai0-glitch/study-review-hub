import type { ReactElement } from 'react'
import { Card, ExerciseCard } from '@/components/content'

/**
 * 导学：综应A到底考什么
 *
 * @returns 该节正文。
 */
export default function S1(): ReactElement {
  return (
    <>
      <div className="goal"><div>🎯 <b>本课目标：</b>用最短的时间搞清楚三件事——<b>① 这门考试和申论有什么本质区别；② 2026大纲改了什么；③ 六类题型各自长什么样</b>。看完这一课，你再看题目就不会"抓瞎"。</div></div>
      
        <h3>0.1 科目定位：这门考试为什么存在</h3>
        <p>事业单位公开招聘分类考试中，<b>A类（综合管理类）</b>适用于以<b>行政性、事务性和业务管理为主</b>的岗位。笔试考两科：</p>
        <table>
          <tr className="thead-row"><th>科目</th><th>时长</th><th>满分</th><th>性质</th></tr>
          <tr><td data-label="科目">《职业能力倾向测验》</td><td data-label="时长">90分钟</td><td data-label="满分">150分</td><td data-label="性质">客观题（常识、言语、数量、判断、资料分析）</td></tr>
          <tr><td data-label="科目"><b>《综合应用能力(A类)》</b></td><td data-label="时长"><b>120分钟</b></td><td data-label="满分"><b>150分</b></td><td data-label="性质"><b>主观题（本页讲解对象）</b></td></tr>
        </table>
        <div className="callout blue"><b>一句话本质：</b>综应A不考"文采"，考的是<b>"办事"</b>——给你一个事业单位的真实工作场景，让你代入某个具体岗位（"市图书馆工作人员""街道办办公室主任助理"），完成概括、分析、对策、沟通、办会、写公文等真实工作任务。</div>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 春熙街道宠物扰民</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是F市春熙街道综合办公室的工作人员。根据材料，针对辖区居民反映集中的"宠物扰民"问题，<b>你认为街道办可以采取哪些措施？</b><br />要求：措施具体可行，符合身份权限，不超过300字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">春熙街道辖区居民多次通过12345热线反映宠物扰民问题：小区内大型犬不牵绳随意遛放，老人孩子见了绕道走；夜间犬吠影响休息，有住户凌晨被吵醒；宠物粪便随处排泄，绿化带、电梯间、楼道都有；部分养犬人从不接种疫苗、不办理犬只登记；居民向物业反映，物业说"我们没有执法权，管不了"；报警后民警到场，养犬人态度蛮横，民警只能当场劝导。走访了解到，该街道60个小区中有37个是老小区，无物业或物业力量薄弱。另据了解，犬只登记和免疫由公安、农业农村部门负责，城市管理部门负责查处影响市容环境卫生的养犬行为，街道办没有行政处罚权。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：身份决定措施的"天花板"，不越权才拿分</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题：把"我是谁、我的权限到哪"抠到极致</b><p><span className="kb">身份</span>街道办事处工作人员（有宣传、组织、协调、上报职责，<b>没有立法权和行政处罚权</b>）<span className="kb">对象</span>解决宠物扰民问题<b>街道办可以采取的措施</b> <span className="kb">字数</span>不超过300字 → 5 条</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：问题 → 措施（逐条反推）</b><p>不牵绳、犬吠 → <b>宣传引导＋巡查劝导</b>；粪便污染 → <b>设施＋责任</b>；不登记不免疫 → <b>告知办理渠道、协助组织</b>；物业说管不了、老小区无物业 → <b>协商议事＋补位</b>；民警只能劝导、街道无处罚权 → <b>移交职能部门、向上反映</b>。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：划出"能做"和"不能做"的红线</b><p><b>能做：</b>宣传引导、组织巡查劝导、完善设施、搭建协商平台、协调移交与上报。<br /><b>不能做（越权）：</b>"制定养犬管理办法""对违规养犬者罚款500元""没收犬只""强制免疫"。<br />本题材料已经把部门分工说得清清楚楚，<b>照着材料的职责分工答，就是最稳的答案</b>。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>每条"动词打头＋内容"，如"强化宣传引导""组织巡查劝导"；用"协调""移交""反映"等符合街道身份的动词收尾。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过300字）</div>
          <p>1.<b>强化宣传引导。</b>通过楼道公告栏、业主微信群、社区活动等宣传文明养犬，一并告知犬只登记、免疫的办理渠道和所需材料。</p>
          <p>2.<b>组织巡查劝导。</b>组织社区工作者、网格员、志愿者开展日常巡查，及时劝阻不牵绳、不清理粪便等行为。</p>
          <p>3.<b>完善设施保障。</b>在小区周边增设宠物粪便收集箱和提示标识，协调划定集中遛犬区域。</p>
          <p>4.<b>搭建协商平台。</b>会同业委会、物业召开居民议事会，推动制定小区养犬公约，约定遛犬时间和区域。</p>
          <p>5.<b>协调移交与上报。</b>对经劝导仍拒不改正、涉嫌违规养犬的，及时移交公安、城管等部门依法处理；就老小区无物业、管理力量薄弱问题向区政府和相关职能部门反映，建议加强指导和执法下沉。</p>
        </div>
        <h3>0.2 试卷结构：一份卷子长什么样（2026版已调整）</h3>
        <div className="callout red"><b>2026大纲重要变化：</b>试卷结构由旧版的"<b>注意事项 + 背景材料 + 试题</b>"三部分，调整为"<b>由背景材料和任务组成</b>"（删除"注意事项"表述），命题语言从"试题"改为"<b>任务</b>"——这一字之差，体现的是"这是你岗位上要完成的一项工作"的命题取向。</div>
        <table>
          <tr className="thead-row"><th>组成</th><th>具体内容</th><th>备考要点</th></tr>
          <tr><td data-label="组成"><b>背景材料</b></td><td data-label="具体内容">一般 2~5 则，总量 6000~8000 字；以案例型材料为主，场景化叙事、人物对话多，口语化表达多、规范词少</td><td data-label="备考要点">材料是"答案的唯一来源"——这是全卷最重要的规律</td></tr>
          <tr><td data-label="组成"><b>任务</b></td><td data-label="具体内容">一般 4 道题，每道 30~50 分；围绕<b>同一场景、同一工作主线</b>层层推进</td><td data-label="备考要点">先通读材料把握全局，再逐题作答；把每道题当成"岗位上的一件事"来办</td></tr>
        </table>
        <div className="callout gold"><b>近年趋势：</b>材料字数在增长，且呈现方式更多元——展板内容、组织架构图、项目介绍、会议发言、群众访谈等载体都出现过。<b>速读 + 详读结合</b>是刚需。</div>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 政务大厅"办不成事"反映窗口</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是G市政务服务中心综合科的工作人员。根据以下材料（含展板、网页留言、会议记录、群众访谈、统计数据等多种载体），<b>概括"办不成事"反映窗口运行中存在的主要问题</b>。<br />要求：准确、全面，分条列项，不超过250字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">【展板内容】G市政务服务中心于2024年3月设立"办不成事"反映窗口，受理群众办事中遇到的疑难问题，承诺3个工作日内答复。<br />【网页留言】"我在窗口反映的事，登记完就没了下文，打电话问了两次都说在处理，一个月过去还是没结果。"<br />【会议记录】中心月度例会上，负责人提到：反映窗口设在二楼西北角，很多群众不知道、找不到；窗口只有1名兼职人员，还要兼管一楼导询台；已受理的63件中，涉及多部门的历史遗留问题有41件，单靠中心协调不动。<br />【群众访谈】"我就想解决自己的事，窗口却说这不归他们管，让我去别的部门，来回跑，像踢皮球。"<br />【统计数据】63件中，已办结29件，办结率46%；超期未答复17件。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：多载体材料：把分散在五种载体里的信息"归位"</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">身份</span>政务服务中心工作人员 <span className="kb">对象</span>窗口运行中的<b>问题</b><span className="kb">字数</span>不超过250字 → 5 条</p><p>载体有展板、留言、会议记录、访谈、数据五种，<b>读法一样：每种载体只提供"点"，不提供"段"</b>。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：五类载体各抠出什么</b><p><span className="kb">展板</span>设立时间、承诺3个工作日（背景，不写）<br /><span className="kb">留言</span>登记后无下文、催问无结果 → 答复不及时<br /><span className="kb">会议记录</span>位置偏、群众不知道；仅1名兼职人员还兼导询台；多部门历史遗留问题占41/63 → 宣传告知不足、人员力量不足、协调能力有限<br /><span className="kb">访谈</span>不归自己管就推给别的部门，来回跑 → 职责边界不清、推诿<br /><span className="kb">数据</span>办结率46%、超期未答复17件 → 用数字佐证"答复不及时"</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：数据要给"人话"做证据</b><p>数据本身不是一条独立的问题，而是<b>挂到"答复不及时"这一条下面的证明材料</b>——46%的办结率、17件超期未答复，写进去比"很多没办"有力得多。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>按"知晓—人手—机制—反馈—职责"排序，每条一句，250字内写完。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过250字）</div>
          <p>1.<b>宣传告知不到位。</b>窗口设在二楼西北角，位置偏僻，群众不知晓、找不到。</p>
          <p>2.<b>人员力量不足。</b>窗口仅配备1名兼职人员，还需兼管一楼导询台，服务质量难以保证。</p>
          <p>3.<b>协调能力有限。</b>受理事项中涉及多部门的历史遗留问题占比高，中心单方协调不动。</p>
          <p>4.<b>答复反馈不及时。</b>63件中仅办结29件，办结率46%，超期未答复17件，群众反映"登记后没有下文"。</p>
          <p>5.<b>职责边界不清。</b>对不属职责范围的事项简单推给其他部门，群众来回跑，存在推诿现象。</p>
        </div>
        <h3>0.3 大纲五大能力：命题的底层逻辑（必背）</h3>
        <p>考试大纲规定，综应A主要测查五方面能力。所有题目都是从这个能力框架里"长"出来的，先吃透它，等于拿到了整个考试的说明书：</p>
        <table>
          <tr className="thead-row"><th>能力</th><th>大纲原文（规范表述）</th><th>人话解读</th><th>主要对应题型</th></tr>
          <tr><td data-label="能力"><b>① 管理角色意识</b></td><td data-label="大纲原文（规范表述）">对管理岗位的职责权限有清晰认识，能够从管理者的角度理解、思考和解决问题，具有服务意识</td><td data-label="人话解读">时刻问自己："我是谁？我的权限到哪？"既不能越权，也不能失职</td><td data-label="主要对应题型">所有题目（贯穿全卷）</td></tr>
          <tr><td data-label="能力"><b>② 分析判断能力</b></td><td data-label="大纲原文（规范表述）">面对工作情境，能够发现和界定问题，分析问题原因及影响因素，做出恰当的评估和判断</td><td data-label="人话解读">能从材料里"看穿"问题：有什么问题、什么原因、影响多大、谁的责任</td><td data-label="主要对应题型">归纳概括、综合分析</td></tr>
          <tr><td data-label="能力"><b>③ 计划与控制能力</b></td><td data-label="大纲原文（规范表述）">能够根据岗位职责和工作要求，利用可支配的资源，设想可以解决问题的方式方法，使工作按预想的进程和方向发展</td><td data-label="人话解读">能把事情"办成"：定目标、排步骤、调资源、控进度、防意外</td><td data-label="主要对应题型">提出对策、应急处理、组织协调</td></tr>
          <tr><td data-label="能力"><b>④ 沟通协调能力</b></td><td data-label="大纲原文（规范表述）">能够在管理工作中向有关人员征询意见，传递信息，施加影响，获得支持与配合</td><td data-label="人话解读">会"说话"：能说服别人、化解矛盾、协调各方，把事情往前推</td><td data-label="主要对应题型">沟通协调</td></tr>
          <tr><td data-label="能力"><b>⑤ 文字表达能力</b></td><td data-label="大纲原文（规范表述）">能够根据管理工作需要撰写文稿，准确和清晰地进行书面表达</td><td data-label="人话解读">能"写"：格式规范、内容完整、语言得体</td><td data-label="主要对应题型">公文写作</td></tr>
        </table>
        <div className="callout teal"><b>记忆方法：</b>一句话串起来——<b>"我是谁（角色）→ 看出问题（分析）→ 办成事情（计划）→ 说服别人（沟通）→ 写好东西（表达）"</b>。考的就是一个合格事业单位管理人员的完整工作链路。</div>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 市图书馆无障碍阅读活动</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是H市图书馆办公室的工作人员。为推进无障碍阅读服务，馆里拟组织一次面向视障读者的"有声阅读"体验活动。<b>请你写出活动方案的主要要点（含活动名称、时间地点、参加对象、主要内容和保障措施）。</b><br />要求：紧扣材料，具体可行，不超过350字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">H市图书馆现有持证视障读者约1200人，馆内藏有盲文图书600册、有声读物2800种，但年借阅量不足200次。走访发现：多数视障读者不知道馆里有有声读物，也不清楚怎么借；馆门口的无障碍通道经常被共享单车和杂物占用；馆内没有专门的引导员，视障读者进馆后找不到北；有声读物检索只能靠工作人员人工查找；不少视障读者到馆需要家人陪同。市残联建议图书馆与市盲人协会合作，把有声阅读资源送到社区。经研究，图书馆拟于5月18日上午举办一次体验活动，并以此为起点建立长期服务机制。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：这一题同时考"计划与控制、沟通协调、文字表达"三种能力</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题：题干把"必答要素"列全了</b><p>题干明确要求含<b>活动名称、时间地点、参加对象、主要内容、保障措施</b>五项——这就是方案骨架，缺一项丢一项分。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：材料里的"问题"就是方案要接住的事</b><p>不知道有资源 → 现场讲解与演示；通道被占 → 提前清理、活动期间禁止占用；没有引导员 → 安排专人引导、志愿者结对；人工检索 → 现场教学设备操作；需家人陪同 → 招募志愿者；残联建议送资源到社区 → 建立送书上门机制、活动后跟踪回访。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：把"活动"和"长效机制"分开写</b><p>主要内容解决"当天怎么办"，保障措施解决"长期怎么办"——这正是"计划与控制能力"的落点：<b>既要有现场安排，也要有后续机制</b>。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>五个要素分条列项，语言务实；时间、地点、人数写具体，不写"待定"。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过350字）</div>
          <p>一、<b>活动名称。</b>"听见书香"——视障读者有声阅读体验活动。</p>
          <p>二、<b>时间地点。</b>5月18日上午9:30—11:30，市图书馆一楼多功能厅（提前清理无障碍通道，活动期间禁止占用）。</p>
          <p>三、<b>参加对象。</b>持证视障读者及其家属，邀请市盲人协会、市残联有关人员参加，预计30人。</p>
          <p>四、<b>主要内容。</b>1.讲解有声读物、盲文图书的检索与借阅方法，现场演示设备操作；2.一对一指导使用无障碍阅读设备，发放盲文版服务指南；3.举办"我听你读"有声读物片段分享；4.现场办理借阅证，接受志愿服务报名。</p>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 管理角色意识（岗位权限与职责边界）</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是S市人社局就业促进科的工作人员。一位多年好友找到你，希望你"通融一下"，把他<b>不符合条件</b>的亲属纳入"就业困难人员"认定名单，并说"反正名单是你报的，别人也不会看"。<b>请你写出处理方式，并说明理由。</b><br />要求：立场明确，考虑周全，不超过150字。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：先定角色，再分"人情"与"职责"，最后给出替代方案</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p>我的身份是<b>就业促进科的工作人员</b>；好友的诉求是"把不符合条件的人塞进认定名单"——典型的<b>"人情"与"职责"冲突</b>题。这类题考的不是会不会办事，而是知不知道自己的权限边界在哪。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点</b><p>这件事有三条红线：① <b>认定标准是硬的</b>，条件不符合就不能上报，没有"通融"的空间；② 名单要<b>审核、公示</b>，弄虚作假会被追责；③ <b>拒绝不等于不讲情面</b>——要把政策讲清楚，并给对方指一条正路。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>书写</b><p>按"<b>拒绝 → 释疑 → 指路</b>"三步排序，语气坚定但不生硬；最后一句收在岗位定位上，点明"岗位权力来自制度、不能用于人情"，这正是"管理角色意识"的落点。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过150字）</div>
          <p>一、<b>明确拒绝。</b>认定有明确标准和审核程序，不符合条件不能上报，这是职责底线，不是"通融"能变通的事。</p>
          <p>二、<b>讲清政策。</b>向好友说明认定条件、审核公示环节和违规后果，避免他误以为"你不帮忙"。</p>
          <p>三、<b>指出正路。</b>告知其亲属如确有困难，可申请其它符合条件的社会救助，或按规定提交材料由科室依规审核。</p>
          <p>四、<b>守住边界。</b>岗位权力来自制度、不能用于人情；既不能越权，也不能因人情放弃把关而失职。</p>
        </div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 分析判断能力（概括原因）</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">根据给定材料，<b>概括某街道老年助餐点运营困难的主要原因</b>。<br />要求：分条列出，准确全面，不超过200字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">某街道建成老年助餐点8个，运营半年后已有5个停摆。走访发现：助餐点设在没有电梯的老楼三层，腿脚不便的老人上下楼困难；一顿饭定价10元，食材加人工成本已接近14元，街道补贴按季度拨付、迟迟不到位；多数助餐点由社区工作人员轮班做饭，他们本身事务缠身，常因开会、迎检中断供餐；老人对菜品口味意见较大，但没有意见反馈渠道，做了就吃、不吃也没人说；周边3家社会餐饮店以更低价格送餐上门，助餐点客流进一步减少。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：先从"问题"倒推"原因"，再一句话一层</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p>对象是助餐点运营困难的<b>原因</b>。"原因"要往前找——找那些造成停摆的条件；不是写"困难表现"，而是回答"为什么难"。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点</b><p>材料是"<b>一条问题一句话</b>"的结构，逐句反推即可：设在没电梯的三层 → 选址；定价低于成本 + 补贴拨付滞后 → 资金；社区人员轮班兼顾 → 人员；没有反馈渠道 → 反馈；社会餐饮低价送餐 → 客流。五句话正好对应五个原因。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>书写</b><p>每条写成"<b>总括词 + 一句展开</b>"，总括词要能罩住后面的话（选址不便 / 资金倒挂 / 人员不专 / 反馈缺失 / 客流分流），五条控制在 200 字内。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过200字）</div>
          <p>一、<b>选址不便。</b>助餐点设在无电梯老楼三层，老人上下楼困难。</p>
          <p>二、<b>资金倒挂。</b>定价低于成本，补贴拨付滞后，运营难以为继。</p>
          <p>三、<b>人员不专。</b>由社区工作人员轮班兼顾，常因日常事务中断供餐。</p>
          <p>四、<b>反馈缺失。</b>没有意见收集渠道，菜品口味难以改进。</p>
          <p>五、<b>客流分流。</b>社会餐饮店低价送餐，助餐点客源进一步流失。</p>
        </div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 计划与控制能力（灾后恢复帮扶方案）</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是某县农业农村局工作人员。近期连降暴雨，部分乡镇蔬菜大棚被淹，菜农损失较大。局里拟组织一次<b>灾后生产恢复帮扶行动</b>，<b>请你写出行动的主要要点</b>。<br />要求：要素完整，措施具体可行，不超过250字。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：按"灾情 → 方案 → 执行 → 保障 → 兜底"排一条链</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p>要求写"行动的<b>主要要点</b>"，不是方案全文；身份是农业农村局工作人员，我真正能支配的是<b>农技员、调运物资、帮助申报政策</b>这三类资源。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点</b><p>按工作链路排：核查灾情（先把底数摸清）→ 制定方案（目标、时限、责任人）→ 技术帮扶（具体怎么做）→ 物资保障（拿什么做）→ 政策对接（钱从哪来）→ 防次生与回访（怎么控进度、防意外）。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>书写</b><p>每条"<b>动词打头 + 具体做法</b>"，不写"加强""切实"这类空词；点明责任主体和完成时限——这正是"计划与控制能力"与"提对策"的区别所在。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过250字）</div>
          <p>一、<b>核查灾情。</b>联合乡镇逐棚登记受灾面积、作物与损失，建立到户台账。</p>
          <p>二、<b>制定方案。</b>明确恢复目标、完成时限、责任人和资金来源，报局领导审定。</p>
          <p>三、<b>技术帮扶。</b>组织农技员分片包干，指导排涝清棚、补种速生蔬菜和病虫害防治。</p>
          <p>四、<b>物资保障。</b>协调调运种子、地膜、肥料和抽水设备，对受灾农户优先发放。</p>
          <p>五、<b>政策对接。</b>帮助符合条件农户申报农业保险理赔和救灾补助。</p>
          <p>六、<b>防次生与回访。</b>关注天气预报，提前疏通沟渠、加固棚体防止二次受灾；两周后逐户回访，评估进度、动态调整措施。</p>
        </div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 沟通协调能力（现场协调加装电梯争议）</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是某老旧小区加装电梯项目的工作人员。协调会上，一楼住户认为"我又用不上，还挡光、有噪音"，强烈反对；高层住户要求尽快开工。双方争执不下，<b>请你现场说一段话进行协调</b>。<br />要求：兼顾双方，语气得体，不超过200字。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：先给情绪台阶，再给实体方案，最后给程序出口</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p>场景是<b>现场协调会</b>，"说一段话"意味着要口语化、当面能说出口；对象是利益相反的两方，不能只站一边。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点</b><p>协调的三步套路：① <b>先给情绪台阶</b>——认同一楼住户的采光、噪音是实实在在的损害；② <b>再给实体方案</b>——评估、低噪音设备、调整井道位置、补偿方案共议；③ <b>最后给程序出口</b>——请设计单位带两套方案、各方各推代表共同选型，一致后再施工。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>书写</b><p>先称呼再分点，对每一方各说一句；结尾用<b>具体承诺</b>（施工控时段、完工一周内回访）代替"请大家理解支持"这种空话。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过200字）</div>
          <p>各位邻居，加装电梯是好事，但好事得大家一起商量着办：</p>
          <p>一、<b>先认同一楼住户。</b>你们担心的采光、噪音是实实在在的影响，我们会请设计单位专门评估，采用低噪音设备、调整井道位置，补偿方案也请大家一起议定。</p>
          <p>二、<b>同时请高层住户理解。</b>不能只算自己方便，要体谅邻居的实际损失。</p>
          <p>三、<b>给出下一步。</b>下周请设计单位带两套方案到现场，各方各推一名代表共同选型，达成一致后再施工；施工严控时段，完工一周内回访听取意见。</p>
        </div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 文字表达能力（撰写通知）</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是某镇党政办工作人员。镇里定于6月10日（星期二）上午9:00在镇文化广场举办<b>防汛应急演练</b>，<b>请你撰写一则通知的正文部分</b>。<br />要求：格式规范，要素齐全，语言得体，不超过200字。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：事由 → 事项 → 要求 → 落款，不能乱序</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p>要求撰写通知的<b>正文部分</b>，必备要素 = 事由 + 时间地点 + 参加人员 + 演练内容 + 有关要求 + 落款单位和日期。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点</b><p>通知是<b>下行文</b>：先讲为什么办（提升防汛应急处置能力），再讲谁在什么时候到哪儿做什么，最后提要求——顺序不能颠倒；用"现将有关事项通知如下"作过渡句。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>书写</b><p>要求分条列项，写清到位时间、着装、装备、纪律；落款单位与日期<b>右对齐</b>。语言用"请""须""不得"等公文口吻，通篇不出现口语。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过200字）</div>
          <p>各村（社区）、镇属各单位：</p>
          <p>为提升防汛应急处置能力，经研究，定于6月10日（星期二）上午9:00在镇文化广场举办防汛应急演练。现将有关事项通知如下：</p>
          <p>一、<b>参加人员。</b>各村（社区）负责人、防汛应急队员，卫生院、派出所相关人员。</p>
          <p>二、<b>演练内容。</b>预警发布、人员转移、抢险救援、医疗救护。</p>
          <p>三、<b>有关要求。</b>参加人员8:45前到位签到，统一穿着应急服装；各参演单位自备必要装备，服从现场指挥；演练期间注意安全，不得擅自离队。</p>
          <p>请各单位抓紧落实。</p>
          <p style={{ textAlign: 'right' }}>XX镇人民政府　2026年6月5日</p>
        </div>
          <p>五、<b>保障措施。</b>1.安排专人引导、专人陪同，配备轮椅和饮水；2.安排志愿者与视障读者结对帮扶；3.与市盲人协会合作建立送书上门机制，把有声资源配送到社区服务站；4.活动结束后跟踪回访，收集意见持续改进服务。</p>
        </div>
        <h3>0.4 综应A ≠ 申论（最容易搞混，必须分清）</h3>
        <div className="cols">
          <Card><h4><span className="dot" style={{ background: 'var(--blue)' }}></span>申论（公务员）</h4><ul><li>话题宏观：政策、治理、文化等大主题</li><li>最后大题是<b>议论文</b>，重论证、讲文采</li><li>身份较虚，重"观点表达"</li><li>答案可适当升华、拔高立意</li></ul></Card>
          <Card><h4><span className="dot" style={{ background: 'var(--gold)' }}></span>综应A（事业单位）</h4><ul><li>话题微观：一个单位的具体事务（图书馆预约、街道市集、大喇叭扰民）</li><li>最后大题是<b>应用文/事务文书</b>，重办事、重格式</li><li>身份是<b>具体岗位工作人员</b>，权限清晰</li><li>答案务实落地，措施要"能执行"，忌空话</li></ul></Card>
        </div>
        <div className="callout gold"><b>口诀：</b>申论是"议"，综应是"办"；申论重"理"，综应重"事"。用申论文笔答综应＝严重跑偏。</div>
      
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 夜市管理改进建议</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是J市城市管理局的工作人员。根据材料，就夜市管理提出改进建议。<br />要求：措施具体可行，有明确的责任主体和做法，不超过300字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">J市在城区设置夜市6处、摊位约800个，带动就业2000余人，深受市民欢迎。但问题也不少：烧烤摊油烟直排，附近居民晚上不敢开窗；摊位挤占盲道和人行道，行人被挤到机动车道；收摊后垃圾遍地、油污留在地面，环卫工人凌晨清扫十分吃力；有摊主使用大功率音响招揽顾客，噪声扰民；部分摊位被转租，摊位费被炒到每月3000元；夜市周边没有公厕和排水设施，摊主取水要跑到别处；食品安全无从追溯，有的摊主没有健康证。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：同一件事：申论式空话 vs 综应A式可执行措施</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">身份</span>市城管局工作人员 <span className="kb">对象</span>夜市管理<b>建议</b><span className="kb">字数</span>不超过300字 → 6 条</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：问题清单就是建议清单</b><p>油烟直排｜占压盲道｜垃圾油污｜音响噪声｜摊位转租炒价｜无公厕排水｜无健康证——7 条问题逐条反推，立即得到 7 条建议。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：把"申论话"翻译成"能落地的话"</b><p><b>申论式空话（丢分）：</b>"加强宣传，提高摊主意识""完善管理制度，形成长效机制""加大治理力度，营造良好氛围"。<br /><b>综应A式写法（得分）：</b>把句子写全"<b>主体＋手段＋内容＋目的</b>"——"为烧烤摊统一加装油烟净化装置，划定集中排烟区域，对未安装的责令限期整改"。<br />自检口诀：<b>把这句话念给同事听，对方能照着做→合格；对方追问"怎么做"→空话。</b></p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>每条"动词打头＋具体做法"，控制在50字左右，不喊口号。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过300字）</div>
          <p>1.<b>规范油烟排放。</b>为烧烤摊统一加装油烟净化装置，划定集中排烟区域，对未安装的责令限期整改。</p>
          <p>2.<b>优化摊位布局。</b>重新施划摊位线，预留盲道和人行通道，在夜市周边划定非机动车停放区。</p>
          <p>3.<b>落实卫生责任。</b>实行"摊前三包"，配足垃圾桶和移动公厕，收摊后由摊主自行清理、管理方集中冲洗路面。</p>
          <p>4.<b>严控经营噪声。</b>明确经营时段为18:00—24:00，限定音响音量，安排专人巡查劝导。</p>
          <p>5.<b>规范摊位管理。</b>建立实名登记和转租备案制度，摊位费标准公开公示，防止炒作转租。</p>
          <p>6.<b>保障食品安全。</b>为摊主集中办理健康证，建立进货台账，定期抽检并公示结果。</p>
        </div>
        <h3>0.5 2026年新考情：三大变化（务必先看）</h3>
        <p>2026版考试大纲与近年命题已出现明显转向。<b>命题不再是"考你背没背模板"，而是"考你像不像一个真正在岗位上办事的人"</b>——这恰恰是袁东体系"机关视角、去模板化"的价值所在。</p>
        <table>
          <tr className="thead-row"><th>变化维度</th><th>旧印象</th><th>2026新趋势</th><th>应对策略</th></tr>
          <tr><td data-label="变化维度"><b>主体定位·小而精</b></td><td data-label="旧印象">动辄"某市/某局"的宏观单位</td><td data-label="2026新趋势">越来越多出现<b>职工服务中心、社区驿站、未保中心</b>等"微单元"，身份更具体、权限更精细</td><td data-label="应对策略">审题时把"我是谁、我的权限边界"抠到极致，别越权、别失职</td></tr>
          <tr><td data-label="变化维度"><b>材料场景·活而实</b></td><td data-label="旧印象">单一线性的叙述材料</td><td data-label="2026新趋势"><b>立体化、对话体、多视角</b>：网页留言、会议记录、访谈、图表混排，信息分散且口语化</td><td data-label="应对策略">练"多载体速读"：会从对话/留言里抓问题、从图表里读数据</td></tr>
          <tr><td data-label="变化维度"><b>任务嵌入·深而融</b></td><td data-label="旧印象">各题相对独立</td><td data-label="2026新趋势"><b>角色驱动、全链履职</b>：4道题串成"一件事"的完整流程（调研→决策→沟通→落实）</td><td data-label="应对策略">先读懂"这条工作线"，答案前后呼应、逻辑自洽</td></tr>
        </table>
        <div className="callout blue"><b>2026大纲要点速览：</b><br />
          ① 试卷结构：由"注意事项+背景材料+试题"→ <b>"由背景材料和任务组成"</b>；<br />
          ② 典型任务表述中<b>删除"会务安排"</b>，保留"观点归纳、资料分类、草拟信函、应急处理、联络通知等"；<br />
          ③ 常识判断<b>新增"历史"</b>测查；言语理解明确"词语填空、句子填空、语句排序、主旨概括、标题拟定"等题型；<br />
          ④ 整体导向："<b>突出政治素质和能力导向</b>"。</div>
        <div className="callout gold"><b>备考三转变：</b>从"背模板"转向"练实务对策"；从"只读文字材料"转向"读懂多载体信息"；从"单题作答"转向"整卷当成一件事办"。原"会务安排"已按新大纲调整为"<b>组织协调与活动方案</b>"，考法不变、名称更新（见第6课）。</div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 园区职工服务中心</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是S市某工业园区职工服务中心的工作人员。根据材料，<b>概括该中心服务职工工作中存在的主要问题</b>。<br />要求：准确、全面，分条列项，不超过250字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">S市某工业园区职工服务中心建于2021年，服务园区企业42家、职工1.6万人。中心设职工书屋、劳动争议调解室、心理咨询室、爱心驿站，配备4名工作人员。走访职工发现：中心工作时间是9:00—17:00，与职工上班时间完全重合，倒班职工根本来不了；职工书屋藏书3000册，多为多年前捐赠的技术旧书，职工想看的管理类、心理健康类书籍很少；劳动争议调解室成立两年只受理5起，职工说"不知道有这个室，也怕去了被单位知道"；心理咨询室每周只开放半天，且需提前一周预约；爱心驿站的微波炉、饮水机坏了两个月没人修；中心4名工作人员中有2人被园区抽去搞招商，实际只有2人在岗；园区有7家企业挂了"分中心"的牌子，但没有明确专人负责。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：主体"小而精"：微单元的服务更容易出现"对不上需求"的问题</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">身份</span>职工服务中心工作人员 <span className="kb">对象</span>服务职工工作中的<b>问题</b><span className="kb">字数</span>不超过250字 → 6 条左右</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：一节一个问题，逐条抠出来</b><p>时间重合→服务时间错位；旧书多、缺管理心理类→资源与需求脱节；调解室只受理5起、职工不知情又怕被单位知道→宣传不足且有顾虑；咨询室每周半天、预约一周→服务供给不足；微波炉饮水机坏两个月→设施维护不到位；2人被抽走→人员力量被挤占；7家分中心只挂牌→延伸机构空转。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：合并为 6 条</b><p>把"资源不足"与"开放时间短"合并为<b>服务供给与需求脱节</b>一条；其余各成一条。总括词尽量用材料原词（"没人修""被抽去"）。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>6 条 × 40 字，写到 250 字上限。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过250字）</div>
          <p>1.<b>服务时间与职工作息错位。</b>开放时间与上班时间完全重合，倒班职工无法使用。</p>
          <p>2.<b>资源配置与需求脱节。</b>藏书陈旧、类型单一，心理咨询室每周仅开放半天且需提前一周预约。</p>
          <p>3.<b>宣传引导不足。</b>劳动争议调解室职工不知情，且担心被单位知晓，成立两年仅受理5起。</p>
          <p>4.<b>设施维护不到位。</b>爱心驿站微波炉、饮水机损坏两个月无人维修。</p>
          <p>5.<b>人员力量被挤占。</b>4名工作人员有2人被抽调从事招商，实际在岗仅2人。</p>
          <p>6.<b>延伸机构空转。</b>7家企业分中心只挂牌子，未明确专人负责。</p>
        </div>
    </>
  )
}
