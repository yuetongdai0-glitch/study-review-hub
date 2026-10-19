import type { ReactElement } from 'react'
import { ExerciseCard } from '@/components/content'

/**
 * 考试认知 · 题型与答题模板
 *
 * @returns 该节正文。
 */
export default function S1(): ReactElement {
  return (
    <>
      <div className="kp">
              <div className="kp-t"><span className="dot"></span>考试结构（考情总览）</div>
              <div className="kp-c">
                <ul>
                  <li><b>考查方向</b>：综合运用教育学、心理学等知识分析解决中小学教育教学实际问题的能力，<b>全主观题</b>，满分150分、120分钟。</li>
                  <li><b>三大能力板块</b>：① 师德与职业认知（教育观、职业道德、法律法规）② 教育教学核心能力（学生发展指导、教学设计与实施、教育组织与管理、评价、沟通合作）③ 教师自主发展能力（学习反思、专业规划、心理调适）。</li>
                  <li><b>题型分布</b>：辨析题（约30-40分）、案例分析题（约50-60分）、教育方案设计题（约40-50分）。</li>
                </ul>
                <div className="mk"><b>【时间分配】</b> 辨析题 ≤15分钟 → 案例分析题 每问15分钟（共约40分钟）→ 教育方案设计 留45分钟（含理论依据梳理）。</div>
              </div>
            </div>
      
            <ExerciseCard>
              <div className="ex-h">✏️ 真题示例 · 案例分析题</div>
              <div className="ex-q">材料：某省联考《综合应用能力（D类）》试卷共三道题——第1题给出「安静的课堂不一定是好课堂」的观点要求评析；第2题呈现李老师处理学生矛盾的三段材料，问「请评析李老师的做法」；第3题要求「围绕'劳动最光荣'设计一次主题班会」。<b>问题：</b>这三道题分别属于哪类题型、各考查大纲的哪一能力板块？120 分钟应如何分配时间？</div>
              <div className="ex-a"><b>作答思路：</b>① 第1题为辨析题（师德与职业认知·教育观），第2题为案例分析题（教育组织与管理·沟通合作），第3题为教育方案设计题（教学设计与实施）。② 三题分值约 30～40 / 50～60 / 40～50 分，正好对应「师德与职业认知—教育教学核心能力—教师自主发展」三大板块。③ 时间分配：辨析 ≤15 分钟，案例每问约 15 分钟共约 40 分钟，方案设计留足 45 分钟（含依据梳理），切忌在前两题恋战导致方案设计草草收尾。</div>
            </ExerciseCard>
      
            <figure className="fig">
              <svg viewBox="0 0 640 292" role="img" aria-label="综应D三类主观题的答题骨架对照">
                <text x={320} y={24} textAnchor="middle" fontSize={14} fontWeight="700" fill="#1e293b">三类主观题的答题骨架：先摆框架，再填内容</text>
                <rect x={16} y={40} width={190} height={36} rx={8} fill="#dbeafe" stroke="#2563eb" strokeWidth={1.5}></rect>
                <text x={111} y={63} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#1e3a8a">辨析题 · 280~350 字</text>
                <rect x={225} y={40} width={190} height={36} rx={8} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.5}></rect>
                <text x={320} y={63} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#92400e">案例分析 · 500~600 字/问</text>
                <rect x={434} y={40} width={190} height={36} rx={8} fill="#d1fae5" stroke="#10b981" strokeWidth={1.5}></rect>
                <text x={529} y={63} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#065f46">方案设计 · 800~1000 字</text>
                <rect x={16} y={92} width={190} height={42} rx={7} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.3}></rect>
                <text x={111} y={110} textAnchor="middle" fontSize={11} fontWeight="700" fill="#1d4ed8">① 表态</text>
                <text x={111} y={126} textAnchor="middle" fontSize={10.5} fill="#334155">明确正确 / 错误 / 片面</text>
                <rect x={16} y={142} width={190} height={42} rx={7} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.3}></rect>
                <text x={111} y={160} textAnchor="middle" fontSize={11} fontWeight="700" fill="#1d4ed8">② 论证</text>
                <text x={111} y={176} textAnchor="middle" fontSize={10.5} fill="#334155">说明理由 + 给出正确观点</text>
                <rect x={16} y={192} width={190} height={42} rx={7} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.3}></rect>
                <text x={111} y={210} textAnchor="middle" fontSize={11} fontWeight="700" fill="#1d4ed8">③ 总结</text>
                <text x={111} y={226} textAnchor="middle" fontSize={10.5} fill="#334155">回扣题目 → 教师启示</text>
                <rect x={225} y={92} width={190} height={42} rx={7} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.3}></rect>
                <text x={320} y={110} textAnchor="middle" fontSize={11} fontWeight="700" fill="#b45309">① 总</text>
                <text x={320} y={126} textAnchor="middle" fontSize={10.5} fill="#334155">判断做法合理 / 不合理</text>
                <rect x={225} y={142} width={190} height={42} rx={7} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.3}></rect>
                <text x={320} y={160} textAnchor="middle" fontSize={11} fontWeight="700" fill="#b45309">② 分</text>
                <text x={320} y={176} textAnchor="middle" fontSize={10.5} fill="#334155">理论 + 材料结合（3~4 条）</text>
                <rect x={225} y={192} width={190} height={42} rx={7} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.3}></rect>
                <text x={320} y={210} textAnchor="middle" fontSize={11} fontWeight="700" fill="#b45309">③ 总</text>
                <text x={320} y={226} textAnchor="middle" fontSize={10.5} fill="#334155">综上所述，教师应当……</text>
                <rect x={434} y={92} width={190} height={28} rx={7} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.3}></rect>
                <text x={529} y={111} textAnchor="middle" fontSize={10.5} fill="#334155">① 活动主题</text>
                <rect x={434} y={126} width={190} height={28} rx={7} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.3}></rect>
                <text x={529} y={145} textAnchor="middle" fontSize={10.5} fill="#334155">② 设计依据（学情 + 理论）</text>
                <rect x={434} y={160} width={190} height={28} rx={7} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.3}></rect>
                <text x={529} y={179} textAnchor="middle" fontSize={10.5} fill="#334155">③ 活动目标（三维）</text>
                <rect x={434} y={194} width={190} height={28} rx={7} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.3}></rect>
                <text x={529} y={213} textAnchor="middle" fontSize={10.5} fill="#334155">④ 内容与过程（导入→主体→升华）</text>
                <rect x={434} y={228} width={190} height={28} rx={7} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.3}></rect>
                <text x={529} y={247} textAnchor="middle" fontSize={10.5} fill="#334155">⑤ 预期效果与检验方法</text>
                <text x={320} y={278} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#b45309">共同点：都是「理论 + 材料/学情」结合，分条列点，每个要点只说一次</text>
              </svg>
              <figcaption>图：三类主观题的答题骨架 —— 开考前先在心里搭好这个框架，答题时只往里填内容</figcaption>
            </figure>
      
            <div className="kp">
              <div className="kp-t"><span className="dot"></span>辨析题 · 三步答题模板</div>
              <div className="kp-c">
                <ul>
                  <li><b>第一步 · 表态</b>：明确判断「正确 / 错误 / 片面」，<b>不能模棱两可</b>（如"不全面、有待商榷"等表述慎用）。</li>
                  <li><b>第二步 · 论证</b>：正确观点→指出科学性+深入延伸分析；错误观点→指出错误之处+说明理由（用理论分析）+<b>给出正确观点</b>；双因素→分别论证两者定义与优劣。</li>
                  <li><b>第三步 · 总结</b>：回扣题目，落到教师启示——"作为一名教师应……践行……促进学生全面发展"。</li>
                </ul>
                <div className="kt"><b>⚠️ 字数控制：</b>约 280-350 字，超字数扣分。开头必写"根据××观/××原则"，结尾升华到学生发展。</div>
                <div className="mk"><b>【高频角度】</b> 素质教育内涵、"双减"落实、教师角色定位、学生观辨析（如"容错≠不批评"）、"惩罚就是体罚"、"探究学习比接受学习更有效"。</div>
              </div>
            </div>
      
            <ExerciseCard>
              <div className="ex-h">✏️ 真题示例 · 辨析题</div>
              <div className="ex-q">观点：「学生的成绩是衡量教师教学水平的唯一标准。」<b>问题：</b>请判断该观点正误并说明理由。</div>
              <div className="ex-a"><b>作答思路：</b>① 表态：该观点错误（片面）。② 论证：新课程评价观要求评价目的重在促进发展、内容综合化、方式多样化、主体多元化，仅以成绩衡量教师，既窄化了教学的评价维度，也违背「教书育人」的师德要求——「不以分数作为评价学生的唯一标准」；成绩只反映认知目标的部分达成，无法衡量学生的情感态度、实践能力与教师的育人成效。③ 总结：教师应坚持素质教育观，以多元评价促进学生全面而有个性的发展。</div>
            </ExerciseCard>
      
            <div className="kp">
              <div className="kp-t"><span className="dot"></span>案例分析题 · 总-分-总模板</div>
              <div className="kp-c">
                <ul>
                  <li><b>答题步骤</b>：① 读问题（分析题/概括题/措施题/开放题）→ ② 读材料，找关键行为，判断情境 → ③ 匹配理论（教师行为→职业理念/职业道德/班级管理；学生行为→身心发展特点/学生权利）→ ④ 组织答案分条列点。</li>
                  <li><b>作答结构</b>：<b>总</b>（判断该教师做法合理/不合理，践行/违背了××）+ <b>分</b>（理论点+一句话解释+结合材料，每条独立成点，3-4条）+ <b>总</b>（综上所述，教师应当/不应当……）。</li>
                </ul>
                <div className="kt"><b>⚠️ 避坑：</b>① 杜绝空谈理论，每条必须"理论+材料"结合；② 杜绝口语化大白话；③ 要点全面不重复，每个知识点只说一次；④ 字数 500-600 字/问。</div>
                <div className="mk"><b>【提分关键】</b> 精准抓取案例核心问题本质 → 每个策略 = 理论依据 + 具体实操做法。</div>
              </div>
            </div>
      
            <ExerciseCard>
              <div className="ex-h">✏️ 真题示例 · 案例分析题</div>
              <div className="ex-q">材料：王老师班上小明上课总爱接话、打断别人，作业也常常不交。王老师没有当众训斥，而是课下单独找他聊天，发现小明是想引起同学注意；她于是让小明担任班级「纪律小助手」，并约定「每节课发言先举手一次」。一个月后，小明不仅能守纪律，还成了小组长。<b>问题：</b>请评析王老师的做法。</div>
              <div className="ex-a"><b>作答思路：</b>① 总：王老师的做法合理，践行了「以人为本」的学生观与德育规律。② 分（理论+材料）：她课下个别谈话而非当众批评，体现了尊重学生与严格要求相结合、爱护学生人格尊严；她看到小明「想引起注意」这一积极动机并委以「纪律小助手」，是长善救失、一分为二看待学生；「先举手一次」的约定符合疏导原则与正面教育原则。③ 总：作为教师，应像王老师那样把纪律管理转化为育人契机。</div>
            </ExerciseCard>
      
            <div className="kp">
              <div className="kp-t"><span className="dot"></span>教育方案设计题 · 五要素模板</div>
              <div className="kp-c">
                <ul>
                  <li><b>必备要素</b>：<b>活动主题 → 设计依据 → 活动目标 → 活动内容与过程 → 预计效果与检验方法</b>（总字数800-1000字）。</li>
                  <li><b>常考类型</b>：主题班会（考查最多）、家长会、社会/校园实践活动、课程介绍（书信/短视频脚本）、发言稿、公开信。</li>
                  <li><b>活动目标三维度</b>：情感（价值观）、技能（能力）、认知（知识）——从这三方面写目标。</li>
                  <li><b>活动过程结构</b>：准备（班主任统筹+班委策划+物资）→ 导入（视频/图片/故事引入）→ 主体（案例讲解、讨论、游戏、朗诵、竞赛、表演等互动环节）→ 升华（全班性活动+班主任寄语小结）。</li>
                </ul>
                <div className="kt"><b>⚠️ 易失分点：</b>① 未标明学段；② 方案无针对性/不可操作；③ 缺少互动与评价环节；④ 未设效果检验方法（学生问卷/家长反馈/观察记录）。</div>
                <div className="kw"><b>💡 设计依据怎么写：</b>学生身心发展特点（如××学段学生正处于……时期）+ 班集体状况 + 理论依据（皮亚杰/埃里克森/德育原则等），体现专业性。</div>
              </div>
            </div>
      
            <ExerciseCard>
              <div className="ex-h">✏️ 真题示例 · 方案设计题</div>
              <div className="ex-q">初二（3）班近一个月连续出现 5 起学生因小事动手的冲突，班级关系紧张。<b>问题：</b>请围绕「同学相处」设计一次主题班会方案（须含主题、依据、目标、准备、过程、预期效果与检验方法）。</div>
              <div className="ex-a"><b>作答思路：</b>① 主题：「化解冲突，做彼此的好同学」。② 依据：初二学生处于青春期，情绪两极性明显、自我意识第二次飞跃，易因小事冲动（埃里克森同一性危机）；班级近期冲突多发。③ 目标：认知——理解冲突根源与沟通技巧；情感——体会同学情谊；行为——掌握「冷静—倾听—协商」三步法。④ 过程：冲突视频导入 → 小组讨论「当时可以怎么做」→ 角色扮演演练三步法 → 全班签署「友好相处公约」→ 班主任小结升华。⑤ 检验：一周后同伴冲突记录表、学生匿名问卷、观察记录。</div>
            </ExerciseCard>
      
            <div className="kp">
              <div className="kp-t"><span className="dot"></span>答题总原则 & 高频规范用语</div>
              <div className="kp-c">
                <ul>
                  <li><b>多角度、分条列点</b>，语言精炼、用教育专业术语，避免大白话与模板化套话。</li>
                  <li><b>背诵是前提</b>：主观题靠理论积累，每天反复背诵高频考点，整理个人答题模板。</li>
                  <li><b>关注教育热点</b>：研学旅行、"双减"政策、五项管理、课后服务、教育信息化、教育家精神等常入题。</li>
                </ul>
                <div className="kw"><b>💡 常见升华句：</b>"贯彻素质教育观，促进全体学生全面而有个性的发展""建立民主平等的师生关系""坚持立德树人根本任务""做学生锤炼品格、学习知识、创新思维、奉献祖国的引路人"。</div>
              </div>
            </div>
      
            <ExerciseCard>
              <div className="ex-h">✏️ 真题示例 · 案例分析题</div>
              <div className="ex-q">材料：张老师接手新班后，先花两周「摸底」，把每个学生的性格、兴趣、家庭情况记在随身本上；班里竞选班干部时，她让每个岗位都有「轮值」机会；有学生偷偷抽烟，她没有公开点名，而是联系家长共同拟定戒烟计划。<b>问题：</b>请结合材料，评析张老师的做法。</div>
              <div className="ex-a"><b>作答思路：</b>① 总：张老师的做法值得肯定，体现了正确的学生观与班主任工作规范。② 分（每条「理论+材料」）：了解和研究学生是班主任工作的前提和基础——她两周摸底、记随身本；民主管理、发挥学生主体作用——岗位轮值；尊重学生与严格要求相结合、保护学生隐私——对抽烟学生不公开点名、家校协同。③ 作答提示：分条列点，每条先亮理论关键词、再引材料原话、最后落到「作为教师应当……」，用教育术语，避免「做得挺好」这类大白话。</div>
            </ExerciseCard>
    </>
  )
}
