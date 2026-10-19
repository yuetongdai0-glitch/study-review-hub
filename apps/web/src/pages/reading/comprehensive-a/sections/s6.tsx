import type { ReactElement } from 'react'
import { ExerciseCard } from '@/components/content'

/**
 * 第6课 公文写作（应用文）
 *
 * @returns 该节正文。
 */
export default function S7(): ReactElement {
  return (
    <>
      <div className="goal"><div>🎯 <b>本课目标：</b>背熟格式五要素与"凭—事—断"正文结构，逐个吃透高频文种（含近年新文种），每个文种都能"见题就会搭骨架"。</div></div>
      
        <h3>6.0 近五年联考真题文种全景（先看清考什么）</h3>
        <div className="callout red"><b>先看清"考什么"：</b>公文写作（应用文）是综应A的<b>100% 必考题型</b>，每场 1~2 题、约占全卷 1/3 分值。下表文种都在近六年联考真题里真考过——<b>文种是"轮换出题"的，冷门文种迟早轮到</b>，每个都要会。</div>
        <table>
          <tr className="thead-row"><th>考试时间</th><th>事业单位主体</th><th>应用文文种</th><th>一句话要点</th></tr>
          <tr><td data-label="考试时间" data-card-lead><b>2026.3.28</b></td><td data-label="事业单位主体">职工服务中心</td><td data-label="应用文文种"><b>视频解说词</b>（高新样本"工匠成长计划"）</td><td data-label="一句话要点">无称谓、无落款，重画面感与感染力；45 分</td></tr>
          <tr><td data-label="考试时间" data-card-lead>2025.10.25</td><td data-label="事业单位主体">中小企业服务中心</td><td data-label="应用文文种">发言稿<b>提纲</b> ＋ 宣传稿</td><td data-label="一句话要点">"提纲"只列骨架；宣传稿题目已定</td></tr>
          <tr><td data-label="考试时间" data-card-lead>2025.3.29</td><td data-label="事业单位主体">未成年人保护中心</td><td data-label="应用文文种"><b>致家长的一封信</b></td><td data-label="一句话要点">属公开信，对象特定、目的在"引导依法履责"</td></tr>
          <tr><td data-label="考试时间" data-card-lead>2024.11.2</td><td data-label="事业单位主体">街道综合服务中心</td><td data-label="应用文文种">专窗<b>简介</b> ＋ 学习<b>小结</b></td><td data-label="一句话要点">简介＝告知类；小结＝经验总结类</td></tr>
          <tr><td data-label="考试时间" data-card-lead>2024.3.30</td><td data-label="事业单位主体">融媒体中心</td><td data-label="应用文文种"><b>讲述稿</b>（Y融媒助力基层治理）</td><td data-label="一句话要点">第一人称、有故事线、面向评委</td></tr>
          <tr><td data-label="考试时间" data-card-lead>2023.8.26</td><td data-label="事业单位主体">疾病预防控制中心</td><td data-label="应用文文种"><b>健康提示</b> ＋ 宣传稿</td><td data-label="一句话要点">提示类＝短平快、条目化、无落款</td></tr>
          <tr><td data-label="考试时间" data-card-lead>2023.5.7</td><td data-label="事业单位主体">图书馆</td><td data-label="应用文文种">发言稿 ＋ <b>前言</b></td><td data-label="一句话要点">前言＝引入语，一般无称谓落款</td></tr>
          <tr><td data-label="考试时间" data-card-lead>2022.9.17</td><td data-label="事业单位主体">中小学卫生保健所</td><td data-label="应用文文种">发言稿 ＋ <b>推荐材料</b></td><td data-label="一句话要点">推荐材料＝基本情况＋先进事迹（分条）</td></tr>
          <tr><td data-label="考试时间" data-card-lead>2022.5.21</td><td data-label="事业单位主体">停车管理中心</td><td data-label="应用文文种">调研报告 ＋ 简报</td><td data-label="一句话要点">报告重分析，简报重动态</td></tr>
          <tr><td data-label="考试时间" data-card-lead>2021.10.23</td><td data-label="事业单位主体">公园管理中心</td><td data-label="应用文文种">发言稿 ＋ <b>注意事项</b> ＋ 报告</td><td data-label="一句话要点">注意事项＝提示类；另考"谈谈对某句话的认识"</td></tr>
          <tr><td data-label="考试时间" data-card-lead>2021.5.22</td><td data-label="事业单位主体">调解中心</td><td data-label="应用文文种">宣传稿</td><td data-label="一句话要点">面向群众、通俗易懂</td></tr>
          <tr><td data-label="考试时间" data-card-lead>2020.10.24</td><td data-label="事业单位主体">博物馆</td><td data-label="应用文文种">报告</td><td data-label="一句话要点">基本情况＋做法＋成效＋下一步</td></tr>
          <tr><td data-label="考试时间" data-card-lead>2020.7.25</td><td data-label="事业单位主体">文化馆</td><td data-label="应用文文种">请示 ＋ 公开信 ＋ <b>方案／计划</b></td><td data-label="一句话要点">请示一事一请；方案＝指导＋目标＋任务＋步骤＋保障</td></tr>
        </table>
        <div className="callout gold"><b>三条规律（背下来就能预判）：</b><br />
        ① <b>高频五霸</b>：发言稿／讲话稿（5 次）、报告（3 次）、宣传稿（3 次）、简介／前言／小结（3 次）、方案计划（2 次）；<br />
        ② <b>冷门轮换</b>：注意事项、健康提示、推荐材料、讲述稿、学习小结、视频解说词、函——都只出现过 1 次，但<b>都出现过</b>；<br />
        ③ <b>老结构新马甲</b>：无论文种多新，正文逃不出两套骨架——「<b>缘由 → 事项 → 号召／希望</b>」或「<b>情况 → 做法 → 成效 → 下一步</b>」。</div>
        <div className="callout blue"><b>本课结构：</b>6.0 全景图（先看考什么）→ 6.1~6.6 六大主力文种 → <b>6.7~6.15 补齐真题里出现过的冷门文种</b>（通知／函／法定公文／解说词／推荐材料／讲述稿／总结／注意事项／杂项）→ 6.16 高频文种模板库（考场速用）。</div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 判断文种与格式骨架</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">下列 4 个题干片段出自近年联考真题，请分别判断各是什么任务、该写成什么文种、格式骨架是什么。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block"><b>①</b>（2024 上半年·融媒体中心）"你将作为讲述人，代表Y县融媒体中心参加"善治新力量"大赛决赛……根据材料5，撰写这份讲述稿。"<br /><b>②</b>（2025 下半年·中小企业服务中心）"近日，中心要向《A市日报》送交宣传稿件。根据材料五，以《创新服务，共筑发展梦——A市中小企业服务中心为企服务的经验做法》为题目，撰写这篇宣传稿。"<br /><b>③</b>（2025 下半年·中小企业服务中心）"中心李主任将在会上发言。根据材料四，撰写发言稿提纲供其参考。"<br /><b>④</b>（2026 上半年·职工服务中心）"根据材料，为该短片撰写一篇解说词。"要求"以文章形式呈现，紧扣主题、内容全面、重点突出、结构完整、语言有感染力"，不超过700字。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：识题型：先抓"动词＋文种名"，再看"要不要写格式"</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p>题干里的文种信号有两类：① <b>"撰写／拟写／草拟／代拟＋文种名"</b>——直接告诉你文种；② <b>"列出……思路／要点／提纲"</b>——只写骨架，不写全文。这两类的篇幅和写法完全不同。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：4 个片段各自落到哪个文种</b><p><span className="kb">①</span>"撰写这份讲述稿"→ <b>讲述稿</b>，第一人称、面向评委。<br /><span className="kb">②</span>"以《××》为题目，撰写这篇宣传稿"→ <b>宣传稿</b>，题目已给死，直接当标题用。<br /><span className="kb">③</span>"撰写发言稿<b>提纲</b>"→ <b>发言提纲</b>，只写分点标题与要点，不是整篇发言稿。<br /><span className="kb">④</span>"为该短片撰写解说词""以文章形式呈现"→ <b>视频解说词</b>，无称谓无落款，重画面感。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：判完文种，接着定"格式四件套"要不要写</b><p><b>法定公文</b>（通知／通报／请示／报告／函／意见／纪要）→ 标题＋主送机关＋正文＋落款（发文机关＋日期），<b>四件套必写</b>；<br /><b>讲话类</b>（发言稿／讲话稿／讲述稿／宣讲稿）→ 标题＋称谓＋正文，<b>不写落款</b>；<br /><b>宣传／告知类</b>（宣传稿／前言／简介／提示／解说词）→ 一般只写标题，格式分很轻，<b>内容分才重</b>。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>无论哪类，都先把骨架默写出来，再把材料要点填进去——<b>格式分先拿到手，再去抢内容分</b>。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点</div>
          <p><b>① 讲述稿。</b>骨架＝标题（可自拟，如《Y融媒：激活基层社会治理新动能》）＋称谓（尊敬的各位评委：）＋开头（问候＋身份介绍＋讲述事由）＋主体（做法与作用，分条，带事例）＋结尾（总结展望、致谢）。<b>不写落款</b>，约 700 字。</p>
          <p><b>② 宣传稿。</b>题目已定，直接作标题；正文＝开头（单位概况／工作缘起）＋主体（经验做法分条，每条"做法＋成效"）＋结尾（展望）。面向社会读者，语言通俗、可适度生动，不超过 600 字；<b>题目已定就不要另起标题</b>。</p>
          <p><b>③ 发言稿提纲。</b>只写"标题＋称谓＋一、二、三 的分点标题及要点"，每点 2~3 句话，把逻辑层次交待清楚即可，<b>不铺陈整篇发言稿</b>，不超过 400 字。这是 2025 年下半年的新问法，"提纲"就是只搭骨架。</p>
          <p><b>④ 视频解说词。</b>标题已定为《高新样本："工匠成长计划"破局育人》；<b>无称谓、无落款</b>；正文按"开篇背景 → 问题导入 → 核心做法 → 典型场景 → 服务保障 → 成效展望"六段推进，多用短句与镜头引导语，数据要出现，不超过 700 字。</p>
        </div>
      
        <h3>6.1 格式总纲与"答案思路"</h3>
        <div className="think">
          <div className="think-t">答案思路：公文＝"格式分 + 结构分 + 内容分"三层叠加</div>
          <p>公文题是"最容易通过练习拿满分"的一类，因为它的<b>格式和结构是固定的，内容全部来自材料</b>。你要做的就是把材料要点"填"进固定骨架里。</p>
          <div className="line">格式五要素（拿稳格式分）＋ 凭—事—断（拿稳结构分）＋ 材料要点全填进去（拿稳内容分）</div>
        </div>
        <div className="tpl">
          <span className="hl">标题</span>（居中）<br />
          <span className="hl">称谓</span>（顶格 + 冒号）<br />
          <span className="hl">正文</span>（开头缘由 → 主体事项 → 结尾）<br />
          <span className="hl">落款</span>（发文单位，右下）<br />
          <span className="hl">日期</span>（落款下方，右空4格；不写真名，用××代替）
        </div>
        <div className="chips">
          <span className="chip gold">讲话稿/演讲稿 → 不写落款</span>
          <span className="chip gold">短评/编者按 → 不写落款</span>
          <span className="chip gold">回帖 → 不需要格式</span>
          <span className="chip gold">纪要 → 日期写会议当天</span>
          <span className="chip gold">前言/简介 → 一般无称谓落款</span>
        </div>
        <table>
          <tr className="thead-row"><th>正文结构</th><th>写什么</th><th>常用句式</th></tr>
          <tr><td data-label="正文结构"><b>凭（开头）</b></td><td data-label="写什么">发文背景 / 缘由 / 目的 / 依据</td><td data-label="常用句式">"为进一步××××，切实××××……""根据××××要求……"</td></tr>
          <tr><td data-label="正文结构"><b>事（主体）</b></td><td data-label="写什么">主要内容：做法 / 要求 / 倡议 / 进展（分条列项）</td><td data-label="常用句式">"一、××××　二、××××　三、××××"</td></tr>
          <tr><td data-label="正文结构"><b>断（结尾）</b></td><td data-label="写什么">总结、呼吁、号召、请示语</td><td data-label="常用句式">"以上请示妥否，请批示""让我们携手共进……"</td></tr>
        </table>
        <div className="callout red"><b>铁律：</b>骨架是死的，血肉必须来自材料——先把材料要点找全填进框架，<b>切忌脱离材料自编</b>。</div>
      
        
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 图书馆读书日活动通知</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是K市图书馆办公室的工作人员。为配合4月23日"世界读书日"，市图书馆拟举办系列阅读活动，<b>请以K市图书馆名义，向各分馆、各科室拟写一份通知</b>。<br />要求：格式规范，内容具体，不超过400字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">K市图书馆现有中心馆1个、分馆7个。今年"世界读书日"期间拟开展"你选书我买单"读者荐购、经典诵读比赛、"图书漂流"换书集市、名家讲座，以及面向少儿和老年人的专场故事会。活动时间为4月20日至4月26日。中心馆负责统筹协调和宣传物料制作；各分馆负责本馆场地布置和读者组织；各科室按职责承担相应任务。活动方案需提前3天报送，活动结束后3个工作日内报送总结和图片资料。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：公文三层得分：格式分 ＋ 结构分 ＋ 内容分</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>格式：五要素一个都不能少</b><p>标题（居中）→ 称谓（顶格＋冒号）→ 正文（缘由→事项→要求）→ 落款（发文单位，右下）→ 日期（落款下方，不写真名，用××代替）。<b>通知必须写落款和日期。</b></p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>结构：凭—事—断</b><p><span className="kb">凭</span>为迎接"世界读书日"、推动全民阅读、丰富市民精神文化生活 → 开头缘由；<br /><span className="kb">事</span>活动内容、任务分工、有关要求 → 分条列项；<br /><span className="kb">断</span>"确保活动安全有序、取得实效" → 收束。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>内容：全部来自材料</b><p>活动名称、时间（4月20日—26日）、分工（中心馆统筹／分馆场地与读者组织／科室按职责）、时限（提前3天报方案、结束3个工作日内报总结和图片）——<b>逐项填进骨架，不脱离材料自编</b>。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>标题用"关于××的通知"；正文分三条；400字内完成。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过400字）</div>
          <p><b>关于举办2026年"世界读书日"系列阅读活动的通知</b></p>
          <p>各分馆、各科室：</p>
          <p>为迎接4月23日"世界读书日"，进一步推动全民阅读、丰富市民精神文化生活，经研究，我馆定于4月20日至26日举办系列阅读活动。现将有关事项通知如下：</p>
          <p>一、<b>活动内容。</b>开展"你选书我买单"读者荐购、经典诵读比赛、"图书漂流"换书集市、名家讲座，以及面向少儿和老年人的专场故事会。</p>
          <p>二、<b>任务分工。</b>中心馆负责统筹协调和宣传物料制作；各分馆负责本馆场地布置和读者组织；各科室结合职责承担相应任务。</p>
          <p>三、<b>有关要求。</b>请各单位于活动开始前3天报送活动方案，活动结束后3个工作日内报送活动总结和图片资料，确保活动安全有序、取得实效。</p>
          <p>K市图书馆<br />××年××月××日</p>
        </div>
        <h3>6.2 报告：向上汇报一件事的"处理全过程"</h3>
        <div className="think">
          <div className="think-t">答案思路：把材料里的"时间线"整理成"处理线"</div>
          <p>报告类材料往往是"<b>某天接到投诉 → 某天联系当事人 → 某天实地调研 → 某天整改 → 某天反馈</b>"的流水账。你要按"<b>了解情况 → 实地调研 → 整改反馈</b>"三段，把流水账合并成有层次的报告。</p>
        </div>
        <ExerciseCard>
          <div className="ex-head">真题 · 事业单位联考 · B市公园管理中心</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">假如你是B市公园管理中心服务管理科的工作人员小刘。现场会结束后，中心拟就杨先生投诉问题的处理与整改情况向市园林绿化局作书面汇报。请你根据材料1，<b>拟写这份书面报告。</b><br />要求：定位准确，考虑周全，层次分明，语言得当，不超过650字。（45分）</div></div>
            <div className="ex-m"><span className="ex-label">材料概要（材料1·时间线）</span><div className="ex-block">
              10月18日上午接到转来的杨先生投诉信（投诉：禁止私人自行车入园却出租双人自行车、儿童驾驶迷你电瓶车横冲直撞、停车场混乱、车闸故障、租车点未联网押金退还不便、巡逻车速度快不礼让）。<br />
              10月18日15:30 电话联系杨先生了解详情。<br />
              10月19日8:30 到北门实地查看（停车混乱、无人管理、儿童驾驶违规）。<br />
              9:00 访管理处范主任（说明禁止私车入园的依据是《B市公园管理条例》《游园须知》；双人车限量 50 辆、限速 10 公里、限定区域路线、有赔偿机制；停车场地紧张短期内难扩建，将增配专人维护秩序；会加强电瓶车与巡逻车管理）。<br />
              10:00 访经营单位周先生（决定增加检修次数；联网设备本周内实现通借通还）。<br />
              10:30 电话向杨先生回应解释，杨先生表示理解。<br />
              15:00 中心领导带队召开南山公园现场会，通报情况、要求立行立改。
            </div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：时间线 → 处理线</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">文种</span>书面报告（向市园林绿化局）<span className="kb">内容</span>处理与整改情况 <span className="kb">字数</span>650字</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：按时间线把材料分成三块</b>
            <table>
              <tr className="thead-row"><th>时间段</th><th>做了什么</th><th>归入</th></tr>
              <tr><td data-label="时间段">18日 上午~15:30</td><td data-label="做了什么">接投诉信、电话联系杨先生，弄清 6 个具体问题</td><td data-label="归入">一、联系了解情况</td></tr>
              <tr><td data-label="时间段">19日 8:30~10:00</td><td data-label="做了什么">实地查看；访范主任（依据、限速限量、赔偿机制、停车整改）；访周先生（增检修、通借通还）</td><td data-label="归入">二、实地调研</td></tr>
              <tr><td data-label="时间段">19日 10:30~15:00</td><td data-label="做了什么">向杨先生反馈；召开现场会，要求立行立改</td><td data-label="归入">三、整改反馈 / 结尾</td></tr>
            </table></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：六大问题 → 三条整改</b>
            <p>杨先生反映的问题归纳成 6 点（禁私车却出租、儿童驾驶危险、停车混乱、车闸故障、押金退还不便、车速快不礼让）；整改措施归成 3 条：<b>规范停车秩序</b>（增配专人，远期扩建）、<b>加大巡查力度</b>（禁违规驾驶，巡逻车接驳车限速 10 公里）、<b>加强租车管理</b>（增检修、联网通借通还）。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>标题+称谓+缘由+三段主体+结尾+落款，格式齐全。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过650字）</div>
          <p><b>关于杨先生投诉问题处理与整改情况的报告</b></p>
          <p>市园林绿化局：</p>
          <p>10月18日上午，我中心接到转来的市民杨先生关于南山公园管理问题的投诉信后，单位立即安排专人处理，并开展系统化整改。现将具体处理与整改情况报告如下：</p>
          <p>一、<b>联系杨先生了解情况。</b>据杨先生反映，公园存在禁止私人自行车进入却出租双人自行车、儿童驾驶迷你电瓶车横冲直撞存在危险、停车场管理混乱、租用自行车存在故障、车辆未联网押金退还不方便、巡逻车和接驳电瓶车速度快不礼让游人等问题。</p>
          <p>二、<b>展开实地调研。</b>安排服务管理科业务骨干前往公园，经调研，问题属实。同时了解到南山公园禁止私人自行车进入的原因：为保障游客安全，依据《B市公园管理条例》《南山公园游园须知》执行；园内双人自行车实行限量限速管理，安装了限速装置，限定了行驶区域与路线，明确了赔偿责任。</p>
          <p>三、<b>系统整改并向杨先生反馈。</b>1.规范停车秩序，增配专人协助保安，远期实施扩建；2.加大巡查力度，禁止违规驾驶，加强巡逻车和接驳车司机管理，时速控制在 10 公里以内；3.加强租车管理，增加检修次数，确保车况良好，安装并调试联网设备，本周实现园内租车点通借通还。随后将调研情况和整改思路向杨先生进行了电话说明，杨先生表示理解。</p>
          <p>19日下午，我中心召开南山公园全体工作人员现场会，通报本起投诉调查处理情况，并要求梳理管理中存在的问题，立行立改，为广大游客提供安全、舒适的游园环境。</p>
          <p>B市公园管理中心<br />××年××月××日</p>
        </div>
      
        
        <h3>6.3 宣传稿：面向群众的"告知式"公文</h3>
        <div className="think">
          <div className="think-t">答案思路：题干给的"三个方面"就是天然的三个小标题</div>
          <p>本题题干已经明确要求"从防疫工作的重要性、目标任务、告知事项三个方面"写——<b>这就是你的三段骨架，不用自己另编</b>。这种"题干给出结构"的题，写起来最稳。</p>
        </div>
        <ExerciseCard>
          <div className="ex-head">真题 · 事业单位联考 · A乡动物防疫站</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">假设你是A乡动物防疫站的工作人员王华。以A乡动物防疫站的名义，从"<b>防疫工作的重要性</b>""<b>目标任务</b>""<b>告知事项</b>"三个方面为各村宣传栏撰写一份宣传稿，进一步提高村民对动物防疫工作的认识。<br />要求：内容具体、针对性强、用语恰当、通俗易懂，字数500字以内。（40分）</div></div>
            <div className="ex-m"><span className="ex-label">材料概要</span><div className="ex-block">
              A乡是山区乡，农户收入主要靠生猪、黄牛和鸡鸭养殖，<b>2016 年畜牧业总收入占农业总收入的 63.9%</b>；春季是动物疫病多发季节。<br />
              <b>目标任务：</b>第一阶段 3月2日—20日完成口蹄疫猪瘟和散户禽流感免疫；第二阶段 3月21日—4月10日完成高致病性猪蓝耳病和养殖大户禽流感免疫；第三阶段 4月中旬—5月上旬完成蓝耳病强化免疫。<br />
              <b>告知事项：</b>防疫人员持证上岗、规范操作、做好免疫档案；集中免疫期间上门免费服务；使用无害化处理池、按规定处置动物尸体，私自处理依法依规处理；逃避检疫、经营加工病死动物严厉打击；参加培训、提高操作能力。
            </div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：题干给骨架，材料填内容</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">文种</span>宣传稿（贴各村宣传栏）<span className="kb">对象</span>广大村民（要通俗易懂）<span className="kb">结构</span>题干给定三方面 <span className="kb">字数</span>500字</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：按题干三方面回材料找料</b>
            <table>
              <tr className="thead-row"><th>题干要求</th><th>材料对应内容</th></tr>
              <tr><td data-label="题干要求">防疫工作的重要性</td><td data-label="材料对应内容">农户主要靠养殖为生，畜牧业占总收入 63.9%；春季是疫病多发季，集中防疫十分重要</td></tr>
              <tr><td data-label="题干要求">目标任务</td><td data-label="材料对应内容">三阶段免疫任务的时间与对象</td></tr>
              <tr><td data-label="题干要求">告知事项</td><td data-label="材料对应内容">配合防疫员、持证上岗免费服务、无害化处理池与尸体处置、打击逃避检疫、参加培训</td></tr>
            </table></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工</b><p>标题拟成文章式（如"提高认识 扎实推进动物防疫工作"）；开头一句交代缘由与目的；主体就是题干给的三个方面；结尾呼吁村民配合。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>语言通俗、面向村民，避免生硬术语；分条列项；落款写"A乡动物防疫站"。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（500字以内·结构示范）</div>
          <p><b>提高认识 扎实推进动物防疫工作</b></p>
          <p>广大村民朋友：</p>
          <p>为贯彻相关法规，切实做好A乡动物防疫工作，夯实动物免疫基础，确保畜牧业健康发展，维护公共卫生安全，提高大家对动物防疫工作的认识，特作如下宣传：</p>
          <p>一、<b>防疫工作的重要性。</b>我乡农户主要靠生猪、黄牛和鸡鸭养殖为生，2016 年畜牧业总收入占农业总收入的 63.9%。春季是动物疫病多发季节，开展集中防疫十分重要。</p>
          <p>二、<b>目标任务。</b>3月2日至20日全面完成口蹄疫、猪瘟和散户禽流感的免疫任务；3月21日至4月10日全面完成高致病性猪蓝耳病和养殖大户禽流感的免疫任务；4月中旬至5月上旬完成高致病性猪蓝耳病的强化免疫。</p>
          <p>三、<b>告知事项。</b>1.全程配合防疫员做好防疫工作；2.防疫人员持证上岗，免费服务；3.积极使用无害化处理池，按规定处置动物尸体，对私自处理动物尸体的依法依规处理；4.对逃避检疫、瞒报谎报重大动物疫情的依法追责；5.参加培训，学习防疫知识，提高操作能力，强化规范操作。</p>
          <p>望广大村民朋友相互转告，积极配合。</p>
          <p>A乡动物防疫站<br />××年××月××日</p>
        </div>
      
        
        <h3>6.4 公开回应 / 情况说明：舆情题的标准写法</h3>
        <div className="think">
          <div className="think-t">答案思路：不回避、不狡辩——"说明情况 + 表明处理 + 承诺改进"</div>
          <p>舆情回应类公文的材料，通常是"<b>事件的来龙去脉 + 各方说了什么</b>"。你要做的是：先把事实讲清楚（不夸大、不隐瞒），再讲已经怎么处理（该道歉道歉、该处理处理），最后承诺改进。<b>关键是"找准我方到底错在哪"</b>——本题导医确实存在态度问题，但并未还手，这两点都要写清。</p>
        </div>
        <ExerciseCard>
          <div className="ex-head">真题 · 事业单位联考 · B市人民医院</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">假如你是B市人民医院医务科新入职的工作人员小吴。现场有人拍照并以"B市人民医院歧视外地患者"为题在朋友圈发布，引发部分网友对新挂号制度的质疑。院领导要求医务科尽快在本院微信公众号平台<b>作出公开回应，消除不良影响。请你撰写公开回应的内容。</b><br />作答要求：定位准确，目的明确、语言得体、条理清晰，字数在400字以内。（35分）</div></div>
            <div className="ex-m"><span className="ex-label">材料概要（材料2）</span><div className="ex-block">
              医院开通微信预约挂号一个多月，成效明显（挂号量增加、窗口排队减少、管理成本降低），也增设自助挂号机、招募志愿者帮助老年人。<br />
              但咨询服务台压力大：病患家属因不懂办卡流程，与导医小张反复问答，双方情绪失控。小张说出"<b>外地人就是没素质</b>"等不当言论；家属辱骂并<b>动手打人</b>，小张<b>并未还手</b>，捂脸大哭，现场秩序混乱。
            </div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：先厘清事实，再决定"说什么、不说什么"</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">身份</span>医院医务科工作人员（代表医院）<span className="kb">载体</span>微信公众号公开回应 <span className="kb">目的</span>消除不良影响 <span className="kb">字数</span>400字</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：把材料理成"五条事实"</b>
            <table>
              <tr className="thead-row"><th>事实</th><th>在回应中的用途</th></tr>
              <tr><td data-label="事实">新挂号制度提高了效率、减少了排队</td><td data-label="在回应中的用途">说明改革初衷是好的（背景）</td></tr>
              <tr><td data-label="事实">挂号方式改变导致咨询台服务紧张</td><td data-label="在回应中的用途">客观原因</td></tr>
              <tr><td data-label="事实">家属咨询过程中与导医发生言语冲突</td><td data-label="在回应中的用途">说明事件性质</td></tr>
              <tr><td data-label="事实">导医确有失耐心、态度不好、言辞不当</td><td data-label="在回应中的用途">承认错误、道歉</td></tr>
              <tr><td data-label="事实">家属辱骂并动手，导医并未还手打人</td><td data-label="在回应中的用途">澄清"歧视外地人"的不实定性</td></tr>
            </table></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：三段式</b>
            <p>① 情况说明（发生了什么、错在哪）；② 处理措施（道歉、安排就诊、批评教育停职检查）；③ 改进承诺（加强培训、招募志愿者、简化流程、扩大告知范围）。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>标题"关于××的情况说明"；称谓"各位患者及家属、网友"；语言诚恳、得体；落款"B市人民医院"。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（400字以内）</div>
          <p><b>关于我院门诊大厅医患纠纷的情况说明</b></p>
          <p>各位患者及家属、网友：</p>
          <p>近期，我院门诊大厅发生一起服务纠纷，此事是患者家属咨询过程中与导医发生言语冲突所致。经核实，我院导医确实存在有失耐心、态度不好、表达不当的问题，但面对患者家属谩骂和肢体侵犯，并未还手打人。虽然新挂号制度的实施提高了患者及家属的挂号效率，但此事也反映出我院在管理上还存在各种不足。</p>
          <p>对此，我院已向患者及其家属诚挚道歉并安排就诊，对相关人员进行批评教育并停职检查。同时，我院也将以公平周到为目标，加强培训，提升工作人员职业素养和业务水平，招募志愿者，简化工作流程，扩大告知范围，为患者及家属提供更好的咨询指引服务，希望我们共同打造文明和谐的诊疗环境。</p>
          <p>B市人民医院<br />××年××月××日</p>
        </div>
      
        
        <h3>6.5 活动策划 / 组织协调与活动方案</h3>
        <div className="callout red"><b>2026大纲提示：</b>新版大纲在"典型工作任务"中<b>删除了"会务安排"表述</b>，但"计划与控制能力"没有取消——组织协调、活动方案、工作安排仍会<b>融入公文写作（方案类）或对策类题目</b>考查。本课把原"会务安排"更新为"<b>组织协调与活动方案</b>"，考法不变、名称更新。</div>
        <div className="think">
          <div className="think-t">答案思路：活动类题目 = "给谁办（对象）＋ 办什么（形式内容）＋ 怎么办（做法）"</div>
          <p>题干若限定"包括活动名称、活动对象、主要形式和内容"，就老老实实按这三样逐项写；每个活动一个模块，做法要具体到"能落地"。</p>
        </div>
        <ExerciseCard>
          <div className="ex-head">真题 · 事业单位联考 · C市Y区文化馆</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">假如你是A省C市Y区文化馆综合办公室的工作人员王晨。为解决代表2提出的"宣传工作没做到位、宣传范围与对象需进一步扩大"这一问题，<b>请你策划设计两个主题活动（包括活动名称、活动对象、主要形式和内容）。</b><br />要求：活动紧扣主题，目标明确、形式新颖、合理可行；字数在300字以内。（35分）</div></div>
            <div className="ex-m"><span className="ex-label">材料概要（材料1）</span><div className="ex-block">
              非遗传承面临"青黄不接"：老版被毁、样式失传、作坊粗制滥造、弟子不多。陈先生主动与院校合作、把文化馆作为实践基地义务授课、带作品出国展出。<br />
              <b>代表1：</b>对传承技能和传承人的培训较少；应从精神物质上支持，出台荣誉评定办法、划拨专项资金；保护传承人的生存环境与生活方式。<br />
              <b>代表2：</b>很多人对非遗概念模糊、保护意识弱，说明<b>宣传没做到位、宣传范围和对象要扩大</b>；应做好数字化保护，把成果通过网络、光盘免费传播；对每个项目设置岗位、形成职业化。
            </div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：先定"扩大宣传"这个目标，再设计两个活动</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">任务</span>策划<b>两个</b>主题活动 <span className="kb">必须项</span>活动名称 + 活动对象 + 主要形式和内容 <span className="kb">方向</span>扩大宣传范围与对象 <span className="kb">字数</span>300字</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：从材料里找"可借用的做法"</b>
            <p>陈先生"与院校合作、把文化馆作实践基地、义务为学生授课"→ <b>可设计"非遗进校园"</b>；<br />代表2"数字化保护、通过网络免费传播"→ <b>可设计"数字技术带你走进非遗"</b>。</p>
            <p className="muted">注意：设计活动不是凭空想，<b>材料里其实已经给了两个方向</b>（走进学校、数字化传播），这就是"紧扣材料"。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：每个活动补全三要素</b>
            <table>
              <tr className="thead-row"><th>活动</th><th>对象</th><th>主要形式和内容</th></tr>
              <tr><td data-label="活动">非遗进校园</td><td data-label="对象">各大专院校师生</td><td data-label="主要形式和内容">1.通过云课堂讲解非遗传承的意义、问题与成果；2.线上线下结合讲解教授非遗技艺，带学生实操；3.介绍传承人选拔标准及职业发展</td></tr>
              <tr><td data-label="活动">数字技术带你走进非遗</td><td data-label="对象">社会大众</td><td data-label="主要形式和内容">1.用科技手段将非遗数字化，制成图片、视频免费传播；2.把优秀传承人的事迹、生存环境、生活方式拍成视频，在各大网站循环展播</td></tr>
            </table></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>两个活动分两块写，每块三行：活动名称 / 活动对象 / 主要形式和内容（分点）。300 字内写得清楚利落。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（300字以内）</div>
          <p><b>活动一：</b>活动名称：非遗进校园。活动对象：各大专院校师生。主要形式和内容：1.通过云课堂向广大师生讲解非遗传承的意义及传承的问题和成果；2.通过线上、线下相结合的形式讲解教授非遗技艺，带领学生实际操作；3.介绍传承人的选拔标准及职业发展。</p>
          <p><b>活动二：</b>活动名称：数字技术带你走进非遗。活动对象：社会大众。主要形式和内容：1.利用科技手段将非物质文化遗产数字化，制成图片、视频等，并免费传播；2.将优秀传承人的事迹、生存环境、生活方式等拍成视频，在各大网站循环展播。</p>
        </div>
      
        
        <h3>6.6 招募启事：要素齐全，就是满分</h3>
        <div className="think">
          <div className="think-t">答案思路：启事＝"为什么招 + 招什么人 + 干什么 + 怎么报名"</div>
          <p>招募启事是"要素型"文种，<b>把该有的要素列全，就是高分</b>。材料里通常藏有岗位职责（维护秩序、劝导、协助）与背景（为什么需要），直接取用。</p>
        </div>
        <ExerciseCard>
          <div className="ex-head">真题 · 事业单位联考 · 和平小学</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">假如你是和平小学办公室工作人员。为缓解学校高峰期交通拥堵的问题，保障学生安全，学校决定面向家长招募一批志愿者组建"护学队"，<b>请拟写一份招募启事。</b>（50分，450字）</div></div>
            <div className="ex-m"><span className="ex-label">材料概要</span><div className="ex-block">
              和平小学是重点小学，40 多个教学班、2000 多名学生；位于建设西路主干道交叉口，上下学（上午 7:20—7:50、下午 4:20—5:10）时段校门口严重拥堵，存在安全隐患。曾发生摊贩与家长争执、保安处置不当的混乱场面。<br />
              座谈会上各方建议：整治流动摊贩、家长当志愿者协助维持秩序、机动车非机动车有序停放、接送孩子<b>即停即走</b>、及时疏导分散、拼车上学、增派交警等。
            </div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：六大要素逐项落地</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">文种</span>招募启事 <span className="kb">主体</span>和平小学校长办公室 <span className="kb">对象</span>本校学生家长 <span className="kb">字数</span>450字</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：启事该有的要素</b>
            <table>
              <tr className="thead-row"><th>要素</th><th>本启事怎么写</th></tr>
              <tr><td data-label="要素">缘由目的</td><td data-label="本启事怎么写">为缓解校门口高峰期交通拥堵、保障学生上下学安全，组建"护学队"</td></tr>
              <tr><td data-label="要素">招募范围与人数</td><td data-label="本启事怎么写">本校在籍学生家长 50 名</td></tr>
              <tr><td data-label="要素">报名条件</td><td data-label="本启事怎么写">自愿、有责任心、遵纪守法、了解基本交通法规者优先、年龄 30—50 周岁、身体健康无不良嗜好</td></tr>
              <tr><td data-label="要素">主要职责</td><td data-label="本启事怎么写">上下学时段轮流执勤；规范车辆进出、维护停靠秩序；宣传劝导家长与摊贩遵守交通法规；遇到争执及时劝阻</td></tr>
              <tr><td data-label="要素">报名方式</td><td data-label="本启事怎么写">报名时间、到校办填表、校办确定名单并公示、联系电话</td></tr>
              <tr><td data-label="要素">落款</td><td data-label="本启事怎么写">和平小学校长办公室 + 日期</td></tr>
            </table></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工</b><p>把"职责"从材料座谈会建议里取（维护秩序、劝导家长摊贩、即停即走、遇争执劝阻）；时间用材料给的拥堵时段。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>标题"和平小学文明交通志愿者招募启事"；开头缘由；四个编号要素；落款。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（450字以内·结构示范）</div>
          <p><b>和平小学文明交通志愿者招募启事</b></p>
          <p>为缓解学校门口高峰期交通拥堵的问题，保证学生上下学时段安全，本校拟组建一支"护学队"协助学校和交警维护秩序，现面向广大家长招募志愿者，具体如下：</p>
          <p>一、<b>招募范围和人数：</b>本校在籍学生家长 50 名。</p>
          <p>二、<b>报名条件：</b>1.自愿从事文明交通服务，有责任心；2.遵纪守法，了解基本交通法规者优先；3.年龄 30—50 周岁，性别不限；4.身体健康，无不良嗜好。</p>
          <p>三、<b>主要职责：</b>1.周一至周五 7:00—8:00、16:00—17:30 在学校门口轮流执勤；2.规范车辆进出和维护停靠秩序；3.宣传劝导广大家长、流动小贩遵守交通法规；4.遇到争执，及时劝阻。</p>
          <p>四、<b>招募方式：</b>1.报名时间：即日起接受报名，报名截止时间××月××日；2.请有意者本人到校办报名，填写报名表；3.由校办确定"护学队"家长名单并公示；4.联系电话：××××××。</p>
          <p>和平小学校长办公室<br />××××年××月××日</p>
        </div>
      
        <h3>6.7 通知 / 联络通知（含会务安排）</h3>
        <div className="think">
          <div className="think-t">通知是机关用得最多的下行文；考"通知"其实就是在考"会不会安排一件事"</div>
          <p>大纲典型任务里的"<b>联络通知</b>"就指它。通知分两类：① <b>布置工作型</b>（关于××工作的通知）；② <b>告知事项型</b>（会议通知、放假通知、启用通知）。</p>
          <div className="line">事由（为什么办） → 时间地点 → 参加人员 → 事项内容 / 议程 → 有关要求 → 落款</div>
        </div>
        <div className="skill">
          <div className="skill-t">技巧：会议通知＝会务安排，五要素一个都不能少</div>
          <ol>
            <li><b>时间</b>：写清"日期＋时刻＋报到时间"（如"9月20日（星期日）9:00，8:40前报到"）。</li>
            <li><b>地点</b>：写到具体楼栋会议室，不写"另行通知"。</li>
            <li><b>人员</b>：写到职务层级（如"分管负责人、食品监管科科长"），必要时注明"不得代会"。</li>
            <li><b>内容 / 议程</b>：分条列议程；要准备材料的，写明材料名称与提交时限。</li>
            <li><b>要求与保障</b>：回执、着装、纪律、交通与食宿安排。</li>
            <li><b>语气</b>：通知是下行文，<b>不写"各位领导"</b>，直接写"各县（市、区）××局："。</li>
          </ol>
        </div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 校园食品安全专项整治推进会通知</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是D市市场监督管理局办公室的工作人员。市局定于9月20日召开全市校园食品安全专项整治工作推进会，参会人员为各县（市、区）市场监管局分管负责人和食品监管科科长。请撰写一份会议通知。<br />要求：要素齐全，格式规范，不超过400字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">会议目的：贯彻落实省局校园食品安全专项整治部署，压实责任、交流经验。<br />时间地点：9月20日（星期日）9:00，D市市场监管局十二楼第一会议室；8:40前报到。<br />议程：① 传达省局专项整治工作部署；② 通报上半年全市校园食品安全检查情况；③ 部分县（区）交流发言，每单位不超过8分钟；④ 市局领导讲话。<br />会前材料：各单位须提交《专项整治进展及问题清单》电子版。<br />要求：参会人员不得由他人代会；会议期间手机静音；9月17日前将参会人员名单报市局办公室；交通、食宿费用自理。联系人：王××，电话××××。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：通知＝事由 + 五要素，会议通知就是一份会务安排</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">文种</span>会议通知（联络通知）<span className="kb">身份</span>市局办公室工作人员 <span className="kb">对象</span>各县（市、区）局分管负责人与科长 <span className="kb">字数</span>400字。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：材料逐条抠进五要素</b><p><span className="kb">事由</span>落实省局部署、压实责任、交流经验<br /><span className="kb">时间地点</span>9月20日9:00，十二楼第一会议室，8:40报到<br /><span className="kb">参加人员</span>分管负责人＋食品监管科科长，不得代会<br /><span className="kb">议程</span>传达部署→通报情况→交流发言→领导讲话（四项）<br /><span className="kb">会前材料</span>《专项整治进展及问题清单》，9月17日前<br /><span className="kb">要求保障</span>回执、静音、食宿自理、联系人电话</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：按"为什么开会→谁来→干什么→准备什么→有什么要求"排序</b><p>注意两个细节：① <b>议程与会前材料要分开写</b>，混在一起阅卷人找不到分点；② 交流发言要写<b>时长限制</b>（不超过8分钟），这是会务安排的"专业性"分。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>标题《关于召开全市校园食品安全专项整治工作推进会的通知》；主送"各县（市、区）市场监督管理局："；结尾布置回执；落款单位＋日期。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过400字）</div>
          <p><b>关于召开全市校园食品安全专项整治工作推进会的通知</b></p>
          <p>各县（市、区）市场监督管理局：</p>
          <p>为贯彻落实省局校园食品安全专项整治部署，进一步压实责任、交流经验，经研究，决定召开全市校园食品安全专项整治工作推进会。现将有关事项通知如下：</p>
          <p><b>一、会议时间。</b>9月20日（星期日）9:00，8:40前报到。</p>
          <p><b>二、会议地点。</b>D市市场监督管理局十二楼第一会议室。</p>
          <p><b>三、参加人员。</b>各县（市、区）市场监管局分管负责人、食品监管科科长各 1 名，不得由他人代会。</p>
          <p><b>四、会议议程。</b>1.传达省局专项整治工作部署；2.通报上半年全市校园食品安全检查情况；3.部分县（区）交流发言（每单位不超过 8 分钟）；4.市局领导讲话。</p>
          <p><b>五、有关要求。</b>1.请各单位于9月17日前将《专项整治进展及问题清单》电子版和参会人员名单报市局办公室；2.参会人员提前 15 分钟入场，会议期间手机调至静音；3.交通、食宿费用由各单位自理。</p>
          <p>联系人：王××，联系电话：××××。</p>
          <p>D市市场监督管理局<br />××年××月××日</p>
        </div>
      
        <h3>6.8 函：平级、不相隶属单位之间怎么"打交道"</h3>
        <div className="think">
          <div className="think-t">函是"平级之间说话"的公文，考的是"分寸感"</div>
          <p>大纲任务表述里有"<b>草拟信函</b>"。函适用于<b>不相隶属机关之间</b>商洽工作、询问和答复问题、请求批准和答复审批事项。三个要点：<b>一函一事</b>、<b>语气平等客气</b>、<b>结尾有专用语</b>。</p>
          <div className="line">标题（关于××的函） → 主送机关 → 缘由（为什么发函） → 事项（请求对方做什么，分条） → 结尾语（敬请函复 / 盼予支持 / 特此函达） → 落款</div>
        </div>
        <div className="skill">
          <div className="skill-t">技巧：函与通知、请示的三句对比</div>
          <ol>
            <li><b>对下用通知</b>："请各部门务必……"；<b>对不相隶属用函</b>："拟商请贵单位……"；<b>对上有求用请示</b>："以上请示妥否，请批示。"</li>
            <li><b>结尾语不能混用</b>：函用"特此函达""敬请函复""盼予支持"；请示才用"妥否，请批示"；通知用"请遵照执行"。</li>
            <li><b>一函一事</b>：一封信只求一件事，两件事就发两份函。</li>
            <li><b>称谓要规范</b>：主送写全称（如"D市公交集团有限公司"），正文里称"贵公司／贵单位"。</li>
          </ol>
        </div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 商洽开通"书香专线"的函</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是D市图书馆办公室的工作人员。为方便市民在通勤途中阅读，市图书馆拟与市公交集团有限公司合作，在一批公交线路上开通"书香专线"。请以市图书馆名义向市公交集团有限公司发一份函。<br />要求：格式规范，事项具体，语气得体，不超过400字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">拟开通线路：1路、6路、23路，共 42 台公交车先行试点。<br />图书馆承担：在车厢内配置图书漂流书架；首批投放图书 1200 册；此后每月轮换补充；安排专人定期巡检维护。<br />需公交集团支持：协调确定书架在车厢内的安装位置；明确安装时间并组织施工；请驾驶员协助日常看护，发现图书破损、缺失及时告知。<br />时间安排：拟于 10 月签订合作协议，11 月 1 日正式运行。联系人：李××，电话××××。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：定错文种就全错：不相隶属单位之间只能用"函"</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">发文机关</span>D市图书馆 <span className="kb">主送</span>D市公交集团有限公司<span className="kb">关键</span>两者<b>不相隶属</b>→ 只能用<b>函</b>，不能用通知（对下）、不能用请示（对上）。<span className="kb">事项</span>商洽合作。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：缘由 + 事项 + 希望，三段齐</b><p><span className="kb">缘由</span>为深化全民阅读、方便市民通勤阅读<br /><span className="kb">事项</span>三块：我方承担什么（书架、图书、维护）／商请对方支持什么（安装位置、施工时间、驾驶员看护）／时间安排（10月签约、11月1日运行）<br /><span className="kb">希望</span>以上事项，盼予支持，敬请函复</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：把"我方做"和"请对方做"分开写</b><p>这是函最容易丢分的地方——把双方责任混在一起写，对方看不出要配合什么。分开写，责任清晰，也显得专业。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>标题《关于商洽开通"书香专线"的函》；正文称"贵公司"；结尾用"以上事项，盼予支持，敬请函复"；落款"D市图书馆＋日期"。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过400字）</div>
          <p><b>关于商洽开通"书香专线"的函</b></p>
          <p>D市公交集团有限公司：</p>
          <p>为深化全民阅读、方便市民在通勤途中阅读，我馆拟与贵公司合作，在一批公交线路上开通"书香专线"。现将有关合作事项函告如下：</p>
          <p><b>一、线路范围。</b>拟在 1 路、6 路、23 路共 42 台公交车上先行试点。</p>
          <p><b>二、我馆承担事项。</b>1.在车厢内配置图书漂流书架；2.首批投放图书 1200 册，此后每月轮换补充；3.安排专人定期巡检维护。</p>
          <p><b>三、商请贵公司支持事项。</b>1.协调确定书架在车厢内的安装位置；2.明确安装时间并组织施工；3.请驾驶员协助日常看护，发现图书破损、缺失及时告知。</p>
          <p><b>四、时间安排。</b>拟于 10 月签订合作协议，11 月 1 日正式运行。</p>
          <p>以上事项，盼予支持，敬请函复。</p>
          <p>联系人：李××，联系电话：××××。</p>
          <p>D市图书馆<br />××年××月××日</p>
        </div>
      
        <h3>6.9 法定公文补全：通报 / 公告 / 通告 / 纪要 / 意见</h3>
        <div className="think">
          <div className="think-t">五个"冷门法定公文"一次讲清：通报、公告、通告、纪要、意见</div>
          <p>综应A 考法定公文的次数不多，但<b>通报考过多次</b>；剩下四个属于"考到就是送分或送命"的常识题。用一句话记住各自的适用场景即可。</p>
        </div>
        <table>
          <tr className="thead-row"><th>文种</th><th>什么时候用</th><th>关键要求</th></tr>
          <tr><td data-label="文种" data-card-lead><b>通报</b></td><td data-label="什么时候用">表彰先进、批评错误、传达重要精神或情况</td><td data-label="关键要求">表彰类＝情况＋决定＋号召；事迹要有名有姓有数字，批评类要点名讲清问题</td></tr>
          <tr><td data-label="文种" data-card-lead><b>公告</b></td><td data-label="什么时候用">向国内外宣布重要事项或法定事项</td><td data-label="关键要求">级别高（一般县级以上政府和法定机关），<b>不能拿来发日常通知</b></td></tr>
          <tr><td data-label="文种" data-card-lead><b>通告</b></td><td data-label="什么时候用">在一定范围内公布应当遵守或周知的事项</td><td data-label="关键要求">面向社会、<b>有约束力</b>，常配"特此通告"</td></tr>
          <tr><td data-label="文种" data-card-lead><b>纪要</b></td><td data-label="什么时候用">记载会议主要情况和议定事项</td><td data-label="关键要求">按"议定事项"写，用"会议决定""会议要求"，<b>不写发言人个人观点</b></td></tr>
          <tr><td data-label="文种" data-card-lead><b>意见</b></td><td data-label="什么时候用">对重要问题提出见解和处理办法</td><td data-label="关键要求">可对上、对下、对平行；正文＝现状＋问题＋办法</td></tr>
        </table>
        <div className="callout gold"><b>最容易混的一组：公告 ／ 通告 ／ 通知。</b>公告＝对外宣布重要或法定事项（级别最高）；通告＝一定范围内应当遵守或周知的事项（有约束力）；通知＝机关内部或系统内布置工作、告知事项（最日常）。<b>把日常开会写成"公告"，是典型的不懂公文。</b></div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 防汛抢险先进集体和个人通报表扬</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">D市水利局拟对在"7·18"防汛抢险中表现突出的集体和个人予以通报表扬。请以D市水利局名义撰写这份通报。<br />要求：格式规范，内容具体，语言得体，不超过400字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">7月18日，D市遭遇强降雨，岷江水位超警戒线 1.2 米。城区排涝站站长赵××连续值守 38 小时，组织转移沿河群众 326 人，排除险情 7 处；抢险突击队 23 名队员连续作业 14 小时，抢通被淹主干道 2 条；另有 2 名同志在巡查中负伤。经局党组研究，决定对排涝站等 3 个集体、赵××等 17 名同志予以通报表扬，并号召全体干部职工学习他们不畏艰险、连续作战的作风。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：表彰通报＝情况 + 决定 + 号召，三段走</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">文种</span>通报（表彰类）<span className="kb">发文机关</span>D市水利局 <span className="kb">主送</span>局属各单位、机关各科室 <span className="kb">字数</span>400字。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：三段结构</b><p><span className="kb">情况</span>7月18日强降雨、水位超警戒 1.2 米，以及两类先进事迹（排涝站站长值守 38 小时、转移 326 人、排除险情 7 处；突击队 23 人连续作业 14 小时抢通主干道 2 条、2 人负伤）<br /><span className="kb">决定</span>经局党组研究，对 3 个集体、17 名同志予以通报表扬<br /><span className="kb">号召</span>号召全体干部职工学习不畏艰险、连续作战的作风</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：事迹要写"实"</b><p>通报最忌写"某某同志表现突出"这种空话。<b>挑 1~2 个最有代表性的写实</b>——38 小时、326 人、7 处险情、14 小时、2 条主干道，有数字才有说服力，其余可概括。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>标题《关于表扬"7·18"防汛抢险先进集体和先进个人的通报》；主送"局属各单位、机关各科室："；先叙述情况与事迹，再宣布表扬决定，最后提号召；落款单位＋日期。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过400字）</div>
          <p><b>关于表扬"7·18"防汛抢险先进集体和先进个人的通报</b></p>
          <p>局属各单位、机关各科室：</p>
          <p>7月18日，我市遭遇强降雨，岷江水位超警戒线 1.2 米，防汛形势严峻。面对险情，全局干部职工迅速响应、冲锋在前。城区排涝站站长赵××连续值守 38 小时，组织转移沿河群众 326 人，排除险情 7 处；抢险突击队 23 名队员连续作业 14 小时，抢通被淹主干道 2 条；另有 2 名同志在巡查中负伤。他们以实际行动诠释了水利人的责任担当。</p>
          <p>为肯定成绩、激励先进，经局党组研究，决定对排涝站等 3 个集体、赵××等 17 名同志予以通报表扬。</p>
          <p>希望受表扬的集体和个人珍惜荣誉、再接再厉。全局干部职工要以先进为榜样，学习他们不畏艰险、连续作战的优良作风，扎实做好防汛减灾各项工作。</p>
          <p>D市水利局<br />××年××月××日</p>
        </div>
      
        <h3>6.10 解说词 / 讲解词：把"看"变成"听得懂"</h3>
        <div className="callout red"><b>2026 年 3 月 28 日联考真题（45 分）：</b>题干"根据材料，为该短片撰写一篇解说词"，题目已定为《高新样本："工匠成长计划"破局育人》，要求"以文章形式呈现，紧扣主题、内容全面、重点突出、结构完整、语言有感染力，不超过 700 字"。</div>
        <div className="think">
          <div className="think-t">解说词不是公文，是"配着画面讲出来的话"</div>
          <p>它没有称谓、不写落款、不写单位和日期——这些格式分它都不要。<b>它只要三样东西：画面感、感染力、起承转合。</b></p>
          <div className="line">开篇（背景＋缘起） → 问题（为什么要做） → 做法（分条，是主体） → 场景（典型人物 / 细节） → 保障 → 成效（数据） → 展望</div>
        </div>
        <div className="skill">
          <div className="skill-t">技巧：三条写法 + 三个避坑</div>
          <ol>
            <li><b>多用短句</b>："产业工人，是制造强国的脊梁。"短句有节奏，念出来就像旁白。</li>
            <li><b>加"镜头引导语"</b>："镜头里……""画面中……""随着镜头推近……"，把抽象内容画面化。</li>
            <li><b>数据必须出现</b>："30 万名""近千名""提升 18%"——数据是解说词最有说服力的部分。</li>
            <li>⚠️ <b>别写成工作总结</b>（1、2、3、4 干巴巴列条），这是最常见的丢分方式。</li>
            <li>⚠️ <b>别只写做法不写成效</b>：做法说"做了什么"，成效说"带来了什么"，两条腿缺一不可。</li>
            <li>⚠️ <b>别丢起承转合</b>：从背景到问题、从做法到成效要有一条推进线，不能是素材堆砌。</li>
          </ol>
        </div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 视频解说词《高新样本："工匠成长计划"破局育人》</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">为宣传高新区产业工人队伍建设改革成效，高新区拟拍摄专题短片《高新样本："工匠成长计划"破局育人》。请根据材料，为该短片撰写一篇解说词。<br />要求：紧扣主题，内容全面，重点突出，结构完整，语言有感染力，不超过700字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">高新区集聚产业工人 30 万人，是全市产业发展的核心承载阵地。调研发现四个突出问题：技能人才结构性缺口大，高技能人才仅占 12%；成长通道窄，一线工人晋升路径单一；队伍不稳定，年均流失率 18%；服务保障有短板，子女入学、住房、权益维护等诉求集中。<br />为此，高新区推出"1+N"政策体系：出台《产业工人队伍建设改革实施方案》及配套细则；实施阶梯式技能补贴，取得高级工、技师、高级技师的分别补贴 5000 元、1 万元、2 万元；设立"工匠奖学金"；联合 5 所职业院校组建校企合作联盟，订单式培养；推出"工匠激励十条"；设立千万元创新基金。<br />园区开设"工匠大讲堂"，请全国劳模赵师傅分享"多问一句、多练一遍、多记一笔"三大秘诀；青年工人说"听了赵师傅的课，才知道手上的活儿也能干出名堂"。园区还设法律服务站和劳动关系调解室，累计调解纠纷 217 件。<br />两年下来，累计培育高技能人才近千名，产业工人劳动生产率提升 18%，改革做法获评全市优秀案例。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：六段式：背景 → 问题 → 破局 → 育人 → 保障 → 成效</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">文种</span>视频解说词 <span className="kb">标题</span>题目已定，直接作标题 <span className="kb">格式</span><b>无称谓、无落款</b> <span className="kb">字数</span>不超过 700 字。<br /><b>核心主题是"破局育人"</b>，所以主线必须是"发现人才困境 → 用政策破局 → 育出人才成效"，不能写成"工作成绩罗列"。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：材料切成六块</b><p><span className="kb">背景</span>30 万产业工人、核心承载阵地<br /><span className="kb">问题</span>四大痛点（缺口大／通道窄／队伍不稳／保障短板）<br /><span className="kb">做法</span>"1+N"政策体系 5 项（方案细则、阶梯补贴、工匠奖学金、校企联盟、激励十条＋创新基金）<br /><span className="kb">场景</span>工匠大讲堂＋赵师傅三句秘诀＋青年工人感悟<br /><span className="kb">保障</span>法律服务站＋调解 217 件<br /><span className="kb">成效</span>近千名高技能人才、劳动生产率＋18%、市级优秀案例</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：给每个板块配一个"镜头"和一句短标题</b><p>开篇＝园区全景（引出 30 万产业工人）；问题＝座谈会上的面孔（四大痛点）；破局＝政策文件与补贴发放；育人＝大讲堂讲台；保障＝法律服务站；成效＝工人笑脸＋数据。<b>篇幅上"破局＋育人"要占一半以上</b>，因为题目就叫"破局育人"。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>多用短句与镜头引导语；每个板块开头给一句总起句；结尾落回"样本"二字；控制在 700 字内。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过700字）</div>
          <p><b>高新样本："工匠成长计划"破局育人</b></p>
          <p>镜头里，是高新区连绵的厂房和清晨进厂的人流。这里集聚着 30 万名产业工人，是全市产业发展最厚重的底盘。怎样让这支队伍既留得住、又长得高？高新区把这道题，摆在了最前面。</p>
          <p>镜头一转，是调研座谈会上的几张面孔。技能人才结构性缺口大，高技能人才占比只有 12%；晋升通道窄，一线工人干到中年，常常看不到下一步；队伍不稳定，年均流失率 18%；子女入学、住房、权益维护的诉求，一件件堆在桌上。四大痛点，指向同一个问题——育人机制，到了非破不可的时候。</p>
          <p>破局，靠制度。高新区推出"1+N"政策体系：一份《产业工人队伍建设改革实施方案》，配上一整套细则。取得高级工、技师、高级技师，分别补贴 5000 元、1 万元、2 万元；设立"工匠奖学金"，让学技术的人有钱赚、有脸面。高新区还联合 5 所职业院校组建校企合作联盟，订单式培养——企业要什么人，学校就教什么人；"工匠激励十条"和千万元创新基金，给了技改攻关最实在的底气。</p>
          <p>镜头推近，是"工匠大讲堂"的讲台。全国劳模赵师傅把自己的经验总结成三句话：多问一句、多练一遍、多记一笔。台下的青年工人说，听了赵师傅的课，才知道手上的活儿也能干出名堂。传帮带，让技术有了传承的温度。</p>
          <p>镜头再转，是园区的法律服务站。两年来，这里累计调解劳动关系纠纷 217 件。权益有人管、难处有人问，工人才能安心把活干好。</p>
          <p>两年时间，高新区累计培育高技能人才近千名，产业工人劳动生产率提升 18%，改革做法获评全市优秀案例。镜头最后，是工人脸上的笑和车间里亮起的灯。产业工人，是制造强国的脊梁——高新样本，正在把这句话，一锤一锤敲进现实。</p>
        </div>
      
        <h3>6.11 推荐材料 / 推荐信：为"人"和"事"背书</h3>
        <div className="think">
          <div className="think-t">推荐材料 = 基本情况 + 推荐理由（先进事迹，分条） + 结论</div>
          <p>2022 年 9 月联考考过"为 B 市教育局代拟一份推荐材料，报送省教育厅"。它的结构比多数文种都固定，属于"背下来就能拿分"的文种。</p>
          <div className="line">标题 → 主送机关（可省） → 开头（被推荐对象的基本情况与特色） → 主体（推荐理由＝先进事迹，分条） → 结尾（总结肯定、建议推荐） → 发文机关＋日期</div>
        </div>
        <div className="skill">
          <div className="skill-t">技巧：推荐理由要"分维度、带例子、有成效"</div>
          <ol>
            <li><b>分维度</b>：把材料里的做法按方面归并（如"机制贯通、能力提升、服务延伸、辐射带动"），每个维度一个小标题。</li>
            <li><b>带例子</b>：每个维度至少给一个具体做法或细节，不能只有形容词。</li>
            <li><b>有成效</b>：数字、荣誉、测评结果——有成效才有"推荐"的说服力。</li>
            <li><b>结尾三句走</b>：回顾现实（做了什么）＋肯定成就（取得了什么）＋展望或建议（同意推荐）。</li>
          </ol>
        </div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 推荐"医养结合"服务模式为省级典型案例</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是D市卫生健康委员会办公室的工作人员。省卫生健康委正在征集"医养结合"典型案例，市卫生健康委拟推荐市中心医院"医养结合"服务模式。请根据材料，代市卫生健康委拟写一份推荐材料，报送省卫生健康委。<br />要求：内容全面，结构完整，层次清楚，不超过600字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">市中心医院 2021 年起试点"医养结合"服务模式。<br /><b>机制贯通：</b>与 3 家养老机构签订双向转介协议，老人突发急病 48 小时内可转住院，病情稳定后转回养老机构康复。<br /><b>能力提升：</b>开设老年医学科，配备 12 名医生、28 名护士，设认知障碍照护单元；开设"安宁疗护"病区，累计服务临终患者 186 人。<br /><b>服务延伸：</b>推行"互联网＋护理服务"，护士上门为失能老人换药、导尿、留置胃管，两年累计上门服务 3200 人次。<br /><b>辐射带动：</b>为养老机构培训护理员 460 名，考核合格后发证上岗。<br /><b>成效：</b>老人平均住院日从 14.2 天降至 9.6 天，压疮发生率下降 62%，家属满意度 98%；2024 年获评省级"医养结合示范单位"。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：四个维度＋一组成效数据，结尾"三句走"</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">文种</span>推荐材料 <span className="kb">发文机关</span>D市卫生健康委 <span className="kb">主送</span>省卫生健康委（有主送机关就要写）<span className="kb">对象</span>市中心医院"医养结合"服务模式 <span className="kb">字数</span>600字。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：材料切成四类做法＋成效</b><p><span className="kb">机制</span>双向转介（48 小时住院、稳定后转回）<br /><span className="kb">能力</span>老年医学科（12 医 28 护、认知障碍照护单元）、安宁疗护（186 人）<br /><span className="kb">服务</span>"互联网＋护理服务"上门 3200 人次<br /><span className="kb">带动</span>培训养老机构护理员 460 名<br /><span className="kb">成效</span>住院日 14.2→9.6 天、压疮率降 62%、满意度 98%、省级示范单位</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：给四个维度起小标题，把成效挂到对应维度下</b><p>不要把所有成效堆到最后一段——<b>能挂到某个维度下的就挂过去</b>（如"住院日缩短"挂在"机制贯通"下），最后一段只留最高级别的荣誉与总评。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>标题《关于推荐市中心医院"医养结合"服务模式为省级典型案例的材料》；开头交代基本情况与特色；主体四条推荐理由；结尾"回顾—肯定—建议推荐"三句走；落款单位＋日期。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过600字）</div>
          <p><b>关于推荐市中心医院"医养结合"服务模式为省级典型案例的材料</b></p>
          <p>省卫生健康委：</p>
          <p>D市中心医院自 2021 年起探索"医养结合"服务模式，将医疗资源与养老服务打通，形成了可复制、可推广的做法。现将有关情况推荐如下：</p>
          <p><b>一、机制贯通，医养无缝衔接。</b>与 3 家养老机构签订双向转介协议，老人突发急病 48 小时内可转住院，病情稳定后转回养老机构康复，老人平均住院日由 14.2 天降至 9.6 天。</p>
          <p><b>二、能力提升，专科支撑有力。</b>开设老年医学科，配备 12 名医生、28 名护士，设置认知障碍照护单元；开设"安宁疗护"病区，累计服务临终患者 186 人，压疮发生率下降 62%。</p>
          <p><b>三、服务延伸，专业送到床前。</b>推行"互联网＋护理服务"，护士上门为失能老人换药、导尿、留置胃管，两年累计上门服务 3200 人次，家属满意度达 98%。</p>
          <p><b>四、辐射带动，人才同步培养。</b>为养老机构培训护理员 460 名，考核合格后持证上岗，带动区域养老照护水平整体提升。</p>
          <p>该模式运行以来成效明显，2024 年获评省级"医养结合示范单位"。鉴于其在医养衔接、专业照护、人才培养等方面的示范价值，我委建议将其列为我省"医养结合"典型案例予以推广。</p>
          <p>D市卫生健康委员会<br />××年××月××日</p>
        </div>
      
        <h3>6.12 讲述稿 / 演讲稿：用第一人称"讲"出故事</h3>
        <div className="think">
          <div className="think-t">讲述稿 = 用"我"的口吻，把一件事讲成一个故事</div>
          <p>2024 年 3 月联考真题：<b>"你将作为讲述人，代表 Y 县融媒体中心参加'善治新力量'大赛决赛……根据材料5，撰写这份讲述稿。"</b>它和发言稿的差别是：发言稿重在"表态与部署"，讲述稿重在"<b>讲事实、讲故事、讲作用</b>"。</p>
          <div className="line">标题（可自拟） → 称谓（尊敬的各位评委：） → 开头（问候＋身份＋讲述事由） → 主体（做法＋作用，带事例） → 结尾（总结＋展望＋致谢）</div>
        </div>
        <div className="skill">
          <div className="skill-t">技巧：讲述稿的"三个必须有"</div>
          <ol>
            <li><b>必须有事例</b>：一段真实的小故事，胜过三段抽象概括。材料里的具体人物、具体细节要搬进来。</li>
            <li><b>必须有"作用"</b>：题干常问"发挥了哪些积极作用、是如何发挥的"——<b>做法与作用要成对写</b>。</li>
            <li><b>必须讲得出口</b>：写完默读一遍，拗口的句子改短。讲述稿最终是要"讲"的。</li>
            <li><b>"提纲"问法要注意</b>：题干说"撰写发言稿<b>提纲</b>"（2025 下半年真题），就只写分点标题与要点，不铺陈全文。</li>
          </ol>
        </div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 讲述"Y融媒"APP助力基层社会治理</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你将作为讲述人，代表Y县融媒体中心参加"善治新力量——县级融媒体助力基层社会治理优秀案例"大赛决赛，讲述"Y融媒"APP在助力基层社会治理中发挥了哪些积极作用、是如何发挥作用的。请根据材料，撰写这份讲述稿。<br />要求：紧扣材料，内容全面，结构完整，语言流畅，不超过700字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block"><b>「暖融融」公益栏目：</b>记者分赴各乡镇搜集素材，帮残疾人小韩实现"想要一辆新轮椅"的愿望，报道《集爱心送轮椅，为妈妈省点力》被大量转发，几天集齐 5000 份爱心值；一张残疾人笑脸照片登上热搜，APP 下载量暴增；栏目开设以来已有 400 余人实现心愿。<br /><b>「政策直通车」直播：</b>邀请医保、社保、教育部门负责人进直播间解读政策，单场最高在线 12 万人次；把政策要点剪成 1 分钟短视频，累计播放 860 万次。<br /><b>「随手拍」报料：</b>居民上传问题照片，平台自动派单到相关部门，48 小时内反馈处理结果，累计受理报料 2.1 万条，办结率 94%。<br /><b>「乡音调解」：</b>把本地调解能人的调解过程录成短视频，配上方言字幕用于普法宣传，单条最高播放 210 万次。<br /><b>数据：</b>APP 注册用户从 8 万增长到 46 万，覆盖全县 78% 的常住人口；2024 年群众安全感测评同比提升 6 个百分点。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：四个抓手各配一个故事，每个故事后面紧跟"作用"</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">文种</span>讲述稿 <span className="kb">场景</span>大赛决赛，听众＝评审团（职能部门负责人、资深媒体记者、专家学者、群众代表）<span className="kb">核心问题</span>"发挥了哪些作用、怎么发挥的" <span className="kb">字数</span>不超过 700 字。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：四个抓手 ＋ 一组数据</b><p><span className="kb">暖融融</span>公益服务（小韩的轮椅、400 余人实现心愿、笑脸照上热搜）<br /><span className="kb">政策直通车</span>政务解读（直播间 12 万人、短视频播放 860 万次）<br /><span className="kb">随手拍</span>诉求响应（2.1 万条报料、办结率 94%）<br /><span className="kb">乡音调解</span>普法治理（单条播放 210 万次）<br /><span className="kb">成效</span>注册用户 8 万→46 万、覆盖 78%、安全感＋6 个百分点</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：给每个抓手配"一个故事＋一句作用"</b><p>题干问的是"作用"，所以每讲完一个故事，必须紧跟一句"这件事的意义"——比如小韩的轮椅后面接"一块小屏幕，能把社会的善意汇聚到一个人身上"。<b>只有故事没有作用，等于没答题干。</b></p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>开头用一句设问立主题（如"一块小屏幕，能撬动多大的治理能量？"）；中间四段各讲一个抓手；结尾回到设问并致谢；全文 700 字内。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过700字）</div>
          <p><b>Y融媒：激活基层社会治理新动能</b></p>
          <p>尊敬的各位评委：</p>
          <p>大家好！我是Y县融媒体中心的讲述人。今天我想回答一个问题：一块小屏幕，能撬动多大的治理能量？</p>
          <p>第一件事，关于一辆轮椅。残疾人小韩在高中时因病瘫痪，靠手工制作小工艺品维持生计。她在我们开设的公益栏目"暖融融"里说出了自己的愿望——"我的轮椅太旧了，想换个新的，妈妈推着我能省点力"。记者写下《集爱心送轮椅，为妈妈省点力》，几天时间集齐 5000 份爱心值。轮椅送到那天，小韩笑得特别亮，那张照片登上了热搜，也让"Y融媒"APP 的下载量暴增。栏目开设以来，已有 400 余人实现了心愿。一块小屏幕，能把社会的善意汇聚到一个人身上。</p>
          <p>第二件事，关于一场直播。我们把医保、社保、教育部门的负责人请进"政策直通车"直播间，单场最高在线 12 万人次；听不懂的，我们剪成 1 分钟短视频，累计播放 860 万次。政策不再挂在墙上，而是说到耳边。</p>
          <p>第三件事，关于一张照片。居民把问题拍下来上传"随手拍"，平台自动派单到部门，48 小时内反馈结果。两年累计受理报料 2.1 万条，办结率 94%。群众的每一次"随手拍"，都是一次有效的诉求表达。</p>
          <p>第四件事，关于一口方言。我们把本地调解能人的调解过程录成短视频，配上方言字幕用于普法，单条最高播放 210 万次。讲的都是身边事、说的都是家乡话，法条就活了。</p>
          <p>两年时间，APP 注册用户从 8 万增长到 46 万，覆盖全县 78% 的常住人口，群众安全感测评同比提升 6 个百分点。</p>
          <p>一块小屏幕，连接的是群众的心。谢谢大家！</p>
        </div>
      
        <h3>6.13 工作总结 / 学习小结 / 汇报材料</h3>
        <div className="think">
          <div className="think-t">总结类 = "做了什么事 → 有哪些成效 → 还有什么问题 → 下一步怎么办"</div>
          <p>2024 年 11 月联考考过"撰写一份关于'孵化培育社区社会组织'的学习小结，与同事交流"。它和<b>报告</b>的区别：报告是对上汇报、格式齐全；小结／总结可内部交流、可用第一人称、格式更轻。</p>
          <div className="line">标题 → 称谓（可省） → 基本情况 → 主要做法与成效（分条，是主体） → 存在问题 → 下一步打算</div>
        </div>
        <div className="skill">
          <div className="skill-t">技巧：三个"别"</div>
          <ol>
            <li><b>别写成"流水账"</b>：只写做了什么、不写成效，等于没干。每条必须是"<b>做法＋成效</b>"。</li>
            <li><b>别只报喜不报忧</b>：题干要求"层次分明"时，问题与下一步往往是隐藏采分点。</li>
            <li><b>别丢"交流感"</b>：小结是给同事看的，可用"我们在观摩中发现""有三点体会最深"这类过渡句。</li>
            <li><b>数字是总结的骨头</b>：68 家、94 个项目、5000 元——有数字才叫总结，没数字那叫感想。</li>
          </ol>
        </div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · "社区社会组织孵化培育"观摩学习小结</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是D市朝阳街道社会事务办的工作人员。近日你参加了区民政局组织的"社区社会组织孵化培育"专题观摩学习。请根据材料，撰写一份学习小结，与同事交流。<br />要求：紧扣材料，内容全面，层次分明，语言流畅，不超过600字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block"><b>区级社会组织孵化基地：</b>为初创社会组织提供免费办公场地、注册指导、财务托管、能力培训"四件套"，已孵化社会组织 68 家。<br /><b>某社区"微公益"项目：</b>居民自荐项目、居民投票定项目、居民组队做项目，街道按每个项目最高 5000 元配资，两年落地项目 94 个，其中"四点半课堂""老人手机课堂"等实现长期运营。<br /><b>街道"社创中心"：</b>引入专业社工机构做"陪伴式督导"，每月一次项目复盘。<br /><b>观摩中发现的问题：</b>部分社区社会组织过度依赖财政资金，一旦配资停止活动即停摆；骨干以退休老人为主，年轻力量少；有的组织财务不规范、票据不全。<br /><b>一句体会：</b>孵化不是"给钱"，而是"给能力、给陪伴"。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：四段走：基本情况 → 主要做法 → 存在问题 → 下一步打算</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">文种</span>学习小结（总结类）<span className="kb">对象</span>"孵化培育社区社会组织"的观摩学习 <span className="kb">读者</span>同事 <span className="kb">字数</span>600 字。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：三个观摩点 → 三条做法，三条问题，一句体会</b><p><span className="kb">做法一</span>区级基地"四件套"服务，孵化 68 家<br /><span className="kb">做法二</span>社区"微公益"项目——居民自荐、投票、组队，街道最高配资 5000 元／项目，两年 94 个项目<br /><span className="kb">做法三</span>街道"社创中心"引入专业机构做陪伴式督导，每月复盘<br /><span className="kb">问题</span>依赖财政资金、骨干老化、财务不规范<br /><span className="kb">体会</span>孵化不是"给钱"，而是"给能力、给陪伴"</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：每条做法都要带上成效数字</b><p>68 家、94 个项目、5000 元、每月一次复盘——这些数字就是"做法有效"的证据。<b>小结不怕条少，就怕条空</b>；三条做法各带数字，比五条空话得分高。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>开头用一句点明结构（"我用两天时间观摩 3 个点，有三条做法、三个问题值得带回街道"）；中间按"做法—问题—打算"推进；结尾把材料那句体会转化为街道的下一步打算。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过600字）</div>
          <p><b>关于"社区社会组织孵化培育"观摩学习的小结</b></p>
          <p>各位同事：</p>
          <p>我随区民政局参加了为期两天的"社区社会组织孵化培育"专题观摩，先后看了区级孵化基地、一个社区"微公益"项目和街道"社创中心"3 个点。有三条做法、三个问题值得带回街道，现与大家交流。</p>
          <p><b>一、主要做法</b></p>
          <p>1.<b>区级基地提供"四件套"服务。</b>为初创社会组织提供免费办公场地、注册指导、财务托管、能力培训，已孵化社会组织 68 家，把"注册难、没人教"的问题一次性解决。</p>
          <p>2.<b>社区"微公益"项目让居民当主角。</b>居民自荐项目、居民投票定项目、居民组队做项目，街道按每个项目最高 5000 元配资。两年落地项目 94 个，"四点半课堂""老人手机课堂"等实现长期运营。</p>
          <p>3.<b>街道"社创中心"做陪伴式督导。</b>引入专业社工机构，每月组织一次项目复盘，及时纠偏。</p>
          <p><b>二、存在的问题</b></p>
          <p>一是部分组织过度依赖财政资金，配资一停、活动即停；二是骨干以退休老人为主，年轻力量参与不足；三是有的组织财务不规范、票据不全，存在管理风险。</p>
          <p><b>三、下一步打算</b></p>
          <p>一是把"陪伴式督导"引入街道，重点帮组织建制度、理财务；二是设计青年参与的激励办法，把年轻人拉进来；三是逐步提高组织自我造血能力——孵化不是"给钱"，而是"给能力、给陪伴"。</p>
        </div>
      
        <h3>6.14 注意事项 / 温馨提示 / 健康提示</h3>
        <div className="think">
          <div className="think-t">提示类文种：短、平、快，条目化，几乎没有格式分</div>
          <p>2021 年 10 月联考考过"注意事项"（公园管理中心），2023 年 8 月联考考过"健康提示"（疾控中心）。它们的共同特点是：<b>面向参与者 / 公众、条目化、多用祈使句、一般无落款</b>。</p>
          <div className="line">标题（关于××的注意事项 / 温馨提示） → 一句总起（时间、场合） → 分条（按时间轴或类别轴） → 结尾（祝愿 / 联系渠道）</div>
        </div>
        <div className="skill">
          <div className="skill-t">技巧：用"时间轴"或"类别轴"切条目，绝不乱堆</div>
          <ol>
            <li><b>切分方式二选一</b>：按<b>时间轴</b>（行前—入园—游览—离园）或按<b>类别轴</b>（安全—文明—健康—服务）。</li>
            <li><b>每条一个祈使句</b>："请……""严禁……""建议……"，一句话一件事，不写成段落。</li>
            <li><b>该严的必须严</b>：安全、消防、禁烟用"严禁"；倡导类用"请""建议"——力度不一样，阅卷人看得出来。</li>
            <li><b>结尾留出口</b>：加一句"如需帮助请联系现场工作人员／咨询电话××××"，或一句祝福。</li>
          </ol>
        </div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 金秋菊花文化节游园注意事项</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是D市人民公园管理处的工作人员。公园拟于10月1日至11月15日举办"金秋菊花文化节"。请撰写一份面向游客的游园注意事项。<br />要求：内容全面，条理清晰，语言得体，不超过400字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">开放时间 6:00—21:30，21:00 停止入园。每天 10:00、15:00 各一场菊花科普讲解，在菊展区集合。<br />展区菊花禁止采摘、触摸，禁止使用闪光灯拍摄盆景；园区禁止携带宠物、禁止吸烟、禁止使用明火；湖边无护栏区域禁止下水、垂钓。<br />周末客流大，建议错峰游览；停车场车位有限，建议乘公交（3 路、17 路直达）。<br />园内设 3 个医疗点和便民服务点，急救电话××××；雨天部分展区关闭，请留意园区广播和公众号通知。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：按"时间游览—文明观赏—安全—便民"四条切分，力度分级</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">文种</span>注意事项（提示类）<span className="kb">对象</span>游客 <span className="kb">场景</span>菊花文化节（有明确时段）<span className="kb">字数</span>400 字。<b>无落款</b>。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：按类别轴切四块</b><p><span className="kb">时间与游览</span>开放时间、两场讲解、周末错峰、雨天调整<br /><span className="kb">文明观赏</span>不采摘不触摸、禁用闪光灯<br /><span className="kb">安全</span>禁烟禁火、湖边禁止下水垂钓、医疗点与急救电话<br /><span className="kb">便民服务</span>公交线路、停车场、服务点、广播与公众号通知</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：安全排前、力度分级</b><p>把涉及安全与消防的条目<b>放在最前面</b>（游客最先要看到的是"什么不能做"）；用词上"严禁"配安全条目，"请／建议"配倡导条目——力度差一层，专业度差一档。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>标题《金秋菊花文化节游园注意事项》；开头一句交代时段；分 6~7 条祈使句；结尾一句"祝您游园愉快"＋咨询电话。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过400字）</div>
          <p><b>金秋菊花文化节游园注意事项</b></p>
          <p>本届菊花文化节于10月1日至11月15日举办，园区开放时间为 6:00—21:30（21:00 停止入园）。为保障您的游园安全与观赏体验，请注意以下事项：</p>
          <p><b>一、注意安全。</b>园区严禁吸烟、严禁使用明火；湖边无护栏区域严禁下水、垂钓；请照看好随行老人和儿童。</p>
          <p><b>二、文明观赏。</b>展区菊花严禁采摘、触摸；拍摄盆景请勿使用闪光灯，以免损伤花木。</p>
          <p><b>三、合理安排时间。</b>每天 10:00、15:00 各有一场菊花科普讲解，在菊展区集合；周末客流较大，建议错峰游览。</p>
          <p><b>四、注意出行方式。</b>园区停车位有限，建议乘坐 3 路、17 路公交直达。</p>
          <p><b>五、其他提示。</b>园区禁止携带宠物入园；雨天部分展区将临时关闭，请留意园区广播及官方公众号通知。</p>
          <p>园内设 3 个医疗点和便民服务点，如需帮助请咨询现场工作人员或拨打急救电话××××。祝您游园愉快！</p>
        </div>
      
        <h3>6.15 事务文书杂项：新闻稿 / 主持词 / 感谢信 / 慰问信 / 致××的一封信 / 宣传标语</h3>
        <div className="callout blue"><b>六个"冷门但可能考"的事务文书，用一张表过一遍。</b>它们的共同点是：格式极简（多数只有标题＋正文），胜负全在"内容是否对题、语言是否得体"。</div>
        <table>
          <tr className="thead-row"><th>文种</th><th>什么时候用</th><th>结构骨架</th></tr>
          <tr><td data-label="文种" data-card-lead><b>新闻稿</b></td><td data-label="什么时候用">活动／成效要向媒体或公众号投稿</td><td data-label="结构骨架">标题＋导语（时间地点人物事件）＋主体（做法、场面、数据）＋背景与意义</td></tr>
          <tr><td data-label="文种" data-card-lead><b>主持词</b></td><td data-label="什么时候用">会议、活动、晚会的主持串场</td><td data-label="结构骨架">开场（问候＋介绍背景）＋分环节串词（介绍发言／节目＋过渡）＋结束（总结＋致谢）</td></tr>
          <tr><td data-label="文种" data-card-lead><b>感谢信</b></td><td data-label="什么时候用">对帮助过本单位的单位或个人表示感谢</td><td data-label="结构骨架">标题＋称谓＋事由（受到什么帮助）＋表达感谢与意义＋再次致谢＋落款</td></tr>
          <tr><td data-label="文种" data-card-lead><b>慰问信</b></td><td data-label="什么时候用">节日、灾情、高温等对特定群体表达关心</td><td data-label="结构骨架">标题＋称谓＋缘由（时节／情况）＋肯定与关心＋鼓励与希望＋落款</td></tr>
          <tr><td data-label="文种" data-card-lead><b>致××的一封信</b></td><td data-label="什么时候用">面向某一特定群体做引导、告知（2025.3 真题）</td><td data-label="结构骨架">标题＋称谓＋开场（为什么写这封信）＋主体（分条讲清要求 / 道理）＋结尾（期待与祝愿）＋落款</td></tr>
          <tr><td data-label="文种" data-card-lead><b>宣传标语 / 口号</b></td><td data-label="什么时候用">为活动、专项行动做氛围营造</td><td data-label="结构骨架">一句一主题，对仗、押韵、口语化；一般 8~16 字，成组出现（3~5 条）</td></tr>
        </table>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 社区首届"邻里节"新闻稿</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">为增进邻里感情，D市朝阳街道幸福里社区于9月12日举办了首届"邻里节"，活动包括百家宴、旧物置换、家庭才艺展示、志愿者表彰等。请你以社区名义撰写一篇新闻稿，向街道微信公众号投稿。<br />要求：要素齐全，内容具体，语言流畅，不超过400字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">共 320 户居民参加，摆出 86 道家常菜；旧物置换区交换物品 400 余件；12 个家庭登台展示才艺，最小的表演者 6 岁、最大的 71 岁；表彰了 15 名社区志愿者，其中王阿姨连续 8 年参与社区志愿服务；居民李先生说："住这栋楼 5 年，今天第一次认识了对面邻居。"社区负责人表示，今后将每季度举办一次邻里活动，并推动成立楼栋互助小组。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：新闻稿＝导语（五要素）+ 主体（场面、数据、人物引语）+ 背景意义</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">文种</span>新闻稿（投稿公众号）<span className="kb">主体</span>幸福里社区首届"邻里节" <span className="kb">字数</span>400 字。<b>无落款</b>（投稿由平台处理）。</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：把材料切成"五要素＋场面＋人物＋表态"</b><p><span className="kb">五要素</span>9月12日、幸福里社区、首届"邻里节"、320 户居民参加、社区主办<br /><span className="kb">场面与数据</span>86 道家常菜、400 余件置换物品、12 个家庭登台、6 岁到 71 岁、表彰 15 名志愿者<br /><span className="kb">人物引语</span>李先生"住了5年第一次认识对面邻居"<br /><span className="kb">表态与展望</span>每季度办一次、推动成立楼栋互助小组</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：导语要把"五要素"一次讲完；引语是新闻稿的"活气"</b><p>导语不用太长，一句话把时间、地点、人物、事件说清；<b>最有价值的是那句居民引语</b>——它把"增进邻里感情"这个抽象目的变得可信，一定要用。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>标题《两百多道家常菜摆上桌，幸福里社区办起首届"邻里节"》（可加副标题）；导语一段；主体按"场面—数据—人物—表态"推进；不写落款。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">答案要点（不超过400字）</div>
          <p><b>320 户居民、86 道家常菜：幸福里社区办起首届"邻里节"</b></p>
          <p>9月12日，D市朝阳街道幸福里社区举办首届"邻里节"，320 户居民参加，百家宴、旧物置换、家庭才艺展示、志愿者表彰等活动轮番登场。</p>
          <p>活动现场，居民端出自家的拿手菜，86 道家常菜摆成一条长桌；旧物置换区交换物品 400 余件；12 个家庭登台展示才艺，最小的表演者 6 岁，最大的 71 岁。社区还表彰了 15 名志愿者，其中王阿姨已连续 8 年参与社区志愿服务。</p>
          <p>"住这栋楼 5 年，今天第一次认识了对面邻居。"居民李先生的这句话，说出了不少人的感受。</p>
          <p>社区负责人表示，今后将每季度举办一次邻里活动，并推动成立楼栋互助小组，让"熟人社区"从一场活动变成一种日常。</p>
        </div>
      
        <h3>6.16 高频文种模板库（考场速用，含冷门文种）</h3>
        <div className="tpl"><span className="tag">① 通知</span><br />
      关于××××的通知<br />
      各部门、各单位：<br />
      为进一步××××，切实××××，经研究，现就有关事项通知如下：<br />
      一、××××　二、××××　三、××××<br />
      请各部门高度重视，认真组织落实，确保取得实效。<br />
      <span className="cm">（落款）××单位　××××年××月××日</span></div>
      
        <div className="tpl"><span className="tag">② 请示（一事一请，必背结尾）</span><br />
      关于××××的请示<br />
      ××××（主送机关）：<br />
      为××××，现需××××，理由如下：一、××××　二、××××<br />
      以上请示妥否，请批示。<br />
      <span className="cm">（落款）××单位　××××年××月××日</span></div>
      
        <div className="tpl"><span className="tag">③ 倡议书</span><br />
      关于××××的倡议书<br />
      广大市民朋友们：<br />
      当前××××问题凸显，为进一步××××，我们倡议：<br />
      一、提高认识，××××　二、积极行动，××××　三、从我做起，××××<br />
      让我们从现在做起、从身边做起，共同营造××××的良好氛围！<br />
      <span className="cm">（落款）××单位　××××年××月××日</span></div>
      
        <div className="tpl"><span className="tag">④ 公开信 / 回应</span><br />
      致××××的公开信<br />
      ××××（称呼）：<br />
      首先感谢您对××××工作的关注与监督。针对您反映的××××问题，现将有关情况回复如下：<br />
      一、情况说明　二、处理进展　三、下一步安排<br />
      再次感谢您对我们工作的理解与支持！<br />
      <span className="cm">（落款）××单位　××××年××月××日</span></div>
      
        <div className="tpl"><span className="tag">⑤ 讲话稿 / 发言稿（不写落款）</span><br />
      在××××会议上的讲话<br />
      各位领导、同志们：<br />
      大家好！今天，我们召开××××会议，主要目的是××××。<br />
      一、统一思想，充分认识××××的重要意义<br />
      二、突出重点，扎实推进××××各项工作<br />
      三、强化保障，确保××××取得实效<br />
      谢谢大家！</div>
      
        <div className="tpl"><span className="tag">⑥ 工作方案 / 计划（组织协调类）</span><br />
      关于开展××××的工作方案<br />
      为××××，进一步××××，制定本方案。<br />
      一、指导思想　二、工作目标　三、主要任务　四、实施步骤（动员部署→集中推进→总结提升）　五、保障措施（组织领导、责任落实、督导考核、宣传引导）</div>
      
        <div className="tpl"><span className="tag">⑦ 简报 / 工作动态</span><br />
      ××××工作简报<br />
      开头：背景介绍；主体：按材料分条概括进展/做法/成效；结尾：总结或下一步安排。</div>
      
        <div className="tpl"><span className="tag">⑧ 调研报告</span><br />
      关于××××的调研报告<br />
      一、调研背景　二、调研方式及对象（实地走访、问卷调查、座谈）　三、现状与问题　四、原因分析　五、对策建议</div>
      
        <div className="tpl"><span className="tag">⑨ 前言 / 简介（近年新考）</span><br />
      <b>前言：</b>缘起（为什么办）→ 内容（有什么，分条）→ 意义与邀请（有感染力收尾）；一般无称谓落款。<br />
      <b>简介：</b>设立背景与定位 → 受理范围 / 服务对象 / 办理流程 / 申请方式（分条）→ 承诺与展望。</div>
      
        <div className="tpl"><span className="tag">⑩ 短评 / 编者按（不写落款）</span><br />
      （自拟观点式标题）<br />
      第一段：引出话题，亮明观点（是什么）；第二段：分析原因/意义/危害（为什么）；第三段：提出对策/呼吁（怎么办）。</div>
      
        <div className="tpl"><span className="tag">⑪ 解说词 / 讲解词（无称谓、无落款）</span><br />
      标题（常由题目给定）<br />
      开篇：镜头引导（如"镜头里……"）＋背景与缘起，一句话点题<br />
      问题：为什么非做不可<br />
      做法：分块展开，每块一个短句标题（这是主体）<br />
      场景：一个典型人物或一处细节，把做法"讲活"<br />
      保障：制度 / 服务 / 队伍<br />
      成效与展望：数据＋一句有感染力的话收尾
      <span className="cm">⚠️ 别写成工作总结；别只写做法不写成效；多用短句与镜头引导语</span></div>
      
        <div className="tpl"><span className="tag">⑫ 推荐材料 / 推荐信</span><br />
      关于推荐××为××的材料<br />
      ××××（主送机关）：<br />
      开头：被推荐对象的基本情况与特色<br />
      主体：推荐理由（分维度，每维度"做法＋例子＋成效"）<br />
      结尾：回顾现实 → 肯定成就 → 建议推荐<br />
      <span className="cm">（落款）××单位　××××年××月××日</span></div>
      
        <div className="tpl"><span className="tag">⑬ 讲述稿 / 演讲稿（不写落款）</span><br />
      （自拟标题，如"Y融媒：激活基层社会治理新动能"）<br />
      尊敬的各位评委（各位领导、同志们）：<br />
      开头：问候＋身份介绍＋讲述事由（可设问立题）<br />
      主体：抓几个"抓手"，每个抓手配一个故事＋一句作用<br />
      结尾：回到设问／总结展望＋致谢</div>
      
        <div className="tpl"><span className="tag">⑭ 工作总结 / 学习小结 / 汇报材料</span><br />
      关于××××的工作总结（学习小结）<br />
      一、基本情况：时间、范围、做了什么<br />
      二、主要做法与成效：分条，"做法＋成效（数字）"<br />
      三、存在问题：不回避、分条写<br />
      四、下一步打算：与问题一一对应</div>
      
        <div className="tpl"><span className="tag">⑮ 函（商洽 / 请求 / 答复，不相隶属机关之间）</span><br />
      关于××××的函<br />
      ××××（主送机关）：<br />
      缘由：为××××，现将有关事宜函告如下<br />
      事项：一、我单位承担……　二、商请贵单位支持……　三、时间安排……<br />
      以上事项，盼予支持，敬请函复。<br />
      <span className="cm">（落款）××单位　××××年××月××日　|　一函一事；不用"妥否，请批示"</span></div>
      
        <div className="tpl"><span className="tag">⑯ 注意事项 / 温馨提示（一般无落款）</span><br />
      关于××××的注意事项<br />
      开头一句：××活动于××月××日至××月××日举办／开放时间为××<br />
      一、注意安全。严禁……　二、文明参与。请勿……<br />
      三、时间安排。建议错峰……　四、出行提示。建议乘坐……<br />
      如需帮助请联系现场工作人员或拨打××××。祝您××愉快！</div>
      
        <div className="tpl"><span className="tag">⑰ 通报（表彰 / 批评 / 情况通报）</span><br />
      关于××××的通报<br />
      ××××（主送机关）：<br />
      情况：××时间发生××事，××同志做了××（有名有姓有数字）<br />
      决定：为××××，经研究，决定对××予以通报表扬（批评）<br />
      号召（要求）：希望××××，全体××要以××为榜样（要引以为戒）<br />
      <span className="cm">（落款）××单位　××××年××月××日</span></div>
      
        <div className="tpl"><span className="tag">⑱ 公告 / 通告</span><br />
      <b>公告：</b>向国内外宣布重要事项或法定事项，级别高。<br />
      关于××××的公告<br />
      ××××（事项内容，分条）<br />
      特此公告。　<span className="cm">（落款）××（县级以上政府或法定机关）　××××年××月××日</span><br />
      <b>通告：</b>一定范围内应当遵守或周知的事项，有约束力。<br />
      关于××××的通告<br />
      （事项与要求，分条）<br />
      特此通告。　<span className="cm">（落款）××单位　××××年××月××日</span></div>
      
        <div className="tpl"><span className="tag">⑲ 会议纪要</span><br />
      ××××会议纪要<br />
      时间：××××年××月××日××时　地点：××××　主持人：×××<br />
      参加人员：××××<br />
      一、会议听取了……（情况）<br />
      二、会议决定（要求）……（议定事项，逐条）<br />
      <span className="cm">按"议定事项"写，用"会议决定""会议要求"，不写发言人个人观点</span></div>
      
        <div className="tpl"><span className="tag">⑳ 新闻稿 / 通讯（不写落款）</span><br />
      （标题：可主副标题结合，力求醒目）<br />
      导语：××月××日，××单位在××开展××活动，××参加（五要素一句话说完）<br />
      主体：场面与数据 → 人物引语 → 做法与成效<br />
      背景与意义：为什么要办、下一步怎么办</div>
      
        <div className="tpl"><span className="tag">㉑ 主持词</span><br />
      ××××活动主持词<br />
      开场：尊敬的各位领导、各位来宾，大家好！××活动现在开始<br />
      环节串词：下面进行第一项……（介绍发言人或节目）<br />
      过渡：感谢××的精彩发言，下面进行第二项……<br />
      结束：本次活动到此结束，感谢大家的参与！</div>
      
        <div className="tpl"><span className="tag">㉒ 感谢信 / 慰问信</span><br />
      <b>感谢信：</b>××××（称呼）：××日××事中，贵单位（您）××××，使我们××××，特此致谢！<br />
      <b>慰问信：</b>××××（称呼）：值此××之际，谨向××致以诚挚的问候！××××（肯定与关心）……祝愿××××！<br />
      <span className="cm">（落款）××单位　××××年××月××日</span></div>
      
        <div className="tpl"><span className="tag">㉓ 宣传标语 / 口号（成组出现）</span><br />
      一句一主题，对仗、押韵、口语化，一般 8~16 字，一次写 3~5 条。<br />
      示例：<span className="cm">邻里一家亲，守望更暖心 / 小事不出楼，难事不出社区 / 人人参与，人人受益</span></div>
        <div className="callout teal"><b>本课小结：</b>公文题 ＝ <b>格式分（五要素）＋ 结构分（凭事断）＋ 内容分（材料要点）</b>。先默写格式，再背"凭—事—断"，最后把材料要点填进去——三者齐备，就是一类卷。<b>近年新文种都是"老结构、新马甲"，见一个会一个即可。</b></div>
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 移风易俗倡议书</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是L县精神文明建设指导委员会办公室的工作人员。为治理婚丧嫁娶大操大办、高价彩礼等问题，<b>请以L县文明办名义，向全县群众拟写一份"移风易俗"倡议书</b>。<br />要求：格式规范，内容具体，语言得体，不超过450字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">L县农村婚丧嫁娶大操大办现象突出：彩礼普遍在18万至30万元，个别超过40万元；婚礼酒席动辄三四十桌，随礼从200元涨到1000元；丧事请歌舞团、放烟花，办一场要花七八万元；有的家庭为办婚礼借高利贷，婚后长期负债。群众反映"面子撑不住，里子受不住"。县里已出台《关于推进移风易俗工作的实施意见》，倡导婚事新办、丧事简办、余事不办，明确彩礼不超过6万元、酒席不超过20桌、随礼不超过200元的倡导标准；各村成立红白理事会，村民办事需提前报备。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：倡议书：模板③，要素齐、号召有力</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题：先定文种特征</b><p>倡议书＝标题＋称谓（广大××朋友们：）＋背景缘由＋分条倡议＋号召性结尾＋落款日期。<b>与通知的区别在于：对象是群众，语气是"倡议"而非"要求"。</b></p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：材料里的"问题"是缘由，"标准"是倡议内容</b><p>高价彩礼、大操大办、酒后负债 → <b>危害与缘由</b>；彩礼6万、酒席20桌、随礼200元、婚事新办丧事简办余事不办、红白理事会报备 → <b>倡议条款</b>。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：倡议条款"动词打头＋对仗"</b><p>把三条标准包装成"提高认识，革除陋习／婚事新办，不慕奢华／丧事简办，厚养薄葬／主动配合，接受监督"，读起来有节奏感，也方便群众记住。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>结尾用"让我们从现在做起、从自家做起，共同营造××的良好氛围！"号召；450字内完成。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过450字）</div>
          <p><b>关于推进移风易俗的倡议书</b></p>
          <p>广大村民朋友们：</p>
          <p>近年来，我县婚丧嫁娶大操大办、高价彩礼等问题较为突出，加重了家庭负担，也影响了乡风文明。为倡导文明新风，特发出如下倡议：</p>
          <p>一、<b>提高认识，革除陋习。</b>认清高价彩礼、大操大办的危害，不盲目攀比、不举债办席，让"面子工程"回归生活本意。</p>
          <p>二、<b>婚事新办，不慕奢华。</b>自觉执行彩礼不超过6万元、酒席不超过20桌、随礼不超过200元的倡导标准，提倡集体婚礼、旅行结婚。</p>
          <p>三、<b>丧事简办，厚养薄葬。</b>不请歌舞团、不燃放烟花，简化治丧流程，把孝心尽在平时。</p>
          <p>四、<b>主动配合，接受监督。</b>办事前向村红白理事会报备，党员干部带头示范，主动接受群众监督。</p>
          <p>让我们从现在做起、从自家做起，共同营造文明节俭的良好氛围！</p>
          <p>L县精神文明建设指导委员会办公室<br />××年××月××日</p>
        </div>
    </>
  )
}
