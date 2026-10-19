import type { ReactElement } from 'react'
import { Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 高频 62 题专练（每组一题 · 覆盖 200 组索引）
 *
 * @returns 该节正文。
 */
export default function S54(): ReactElement {
  return (
    <>
      <Callout variant="key">
              这 62 道题从 200 组里挑出<b>最高频、最容易被同一道题同时考到</b>的组，每题只考一个判据（侧重 / 对象 / 褒贬 / 搭配 / 语法），做完能立刻知道自己的错在哪一维。<br />        <b>做题顺序建议：</b>先做辨析精讲区的 64 题，再来刷这一组；错题只记一句「我把 A 当成了 B」，不要抄整题。
            </Callout>
            <Example>
              <ExampleHeader>真题改编 · 潜移默化 / 耳濡目染</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>1.</b> 孩子对书法的兴趣，不是靠报班逼出来的。爷爷每天清晨磨墨写字，他在旁边看，看久了，____，握笔的姿势自然就对了。</ExampleQuestion>
                <ExampleOptions><span>A. 耳濡目染</span><span>B. 耳闻目睹</span><span>C. 言传身教</span><span>D. 春风化雨</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：「<b>在旁边看，看久了</b>」是长期用眼看，结果是「握笔姿势自然就对了」——<b>技能上身</b>，正是「耳濡目染」。「耳闻目睹」只说明知道，不含「学到手」；「言传身教」主语须是施教者本人，此处空格是在说孩子受影响的过程；「春风化雨」形容教化滋润的效果，多作定语（春风化雨般的教育）。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 此消彼长 / 此起彼伏</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>2.</b> 县城里的实体书店少了，咖啡馆却多了起来；老电影院关门的同时，小剧场开到了第三家。这种____的变化，正在重塑年轻人的周末。</ExampleQuestion>
                <ExampleOptions><span>A. 此起彼伏</span><span>B. 此消彼长</span><span>C. 层出不穷</span><span>D. 日新月异</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中给了三组「一减一增」（书店少→咖啡馆多、影院关→剧场开），是典型的<b>一方下去一方上来</b>，选「此消彼长」。「此起彼伏」强调<b>交替、轮流</b>出现，多用于声音、浪潮；「层出不穷」只说不断出现新的，不含「一减一增」；「日新月异」强调变化快而多，没有「谁取代谁」的意思。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 南辕北辙 / 背道而驰</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>3.</b> 为了让学生少做题，有的学校把教辅全部清出校园，却把练习改成了「每日线上打卡」，负担一分没少。这种做法与减负的初衷____。</ExampleQuestion>
                <ExampleOptions><span>A. 南辕北辙</span><span>B. 分道扬镳</span><span>C. 背道而驰</span><span>D. 适得其反</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：空处要表达「<b>做法与初衷方向相反</b>」，且句中已给出「与……初衷」这个搭配，选「背道而驰」。「南辕北辙」虽也指行动与目的相反，但它更强调「<b>越努力离目标越远</b>」的荒谬感，多单独作谓语，不与「与……初衷」直接搭配；「分道扬镳」指各走各路；「适得其反」指结果与预期相反，侧重<b>结果</b>而非「做法」。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 未雨绸缪 / 防患未然</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>4.</b> 汛期还没到，水利部门已经把全市的泵站逐一试机、把低洼片区的排水管网清了一遍。这种____的做法，在今年的暴雨里救了急。</ExampleQuestion>
                <ExampleOptions><span>A. 临渴掘井</span><span>B. 亡羊补牢</span><span>C. 江心补漏</span><span>D. 未雨绸缪</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：「<b>汛期还没到就先把事办了</b>」正是「未雨绸缪」（还没下雨先修门窗）。「临渴掘井」是渴了才挖井、「江心补漏」是船到江心才补漏，都是<b>临时抱佛脚</b>，与句意相反；「亡羊补牢」是<b>已经丢了羊之后</b>的补救，与「救了急」的预防义不符。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 不言而喻 / 显而易见</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>5.</b> 在缺水地区，节水的重要性____；但对不少城市居民来说，拧开水龙头就有水，这份「理所当然」恰恰是节水的最大障碍。</ExampleQuestion>
                <ExampleOptions><span>A. 不言而喻</span><span>B. 有目共睹</span><span>C. 一目了然</span><span>D. 昭然若揭</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：空处是「重要性」＋「不用说也明白」的判断，选「不言而喻」。「有目共睹」要求<b>有可见的事实、成绩</b>（变化有目共睹），不能修饰「重要性」；「一目了然」形容<b>看得清楚</b>，多指图表、布局；「昭然若揭」是<b>贬义</b>，指坏事暴露无遗。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 司空见惯 / 屡见不鲜</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>6.</b> 在短视频平台上，一条视频火了之后，模仿者几天内就能刷出上百条同款。这种「一阵风」式的跟拍，网友早已____。</ExampleQuestion>
                <ExampleOptions><span>A. 屡见不鲜</span><span>B. 司空见惯</span><span>C. 习以为常</span><span>D. 见怪不怪</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：空处是「早已____」作谓语，主语是「网友」，指<b>见得太多、已经不觉得奇怪</b>，选「司空见惯」。「屡见不鲜」侧重<b>同类事情出现频率高</b>（此类投诉屡见不鲜），主语多是「事情」；「习以为常」强调「当成平常」，与「跟拍」的负面评价不够贴合；「见怪不怪」与「早已」语义重复，且口语化过重。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 不可或缺 / 举足轻重</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>7.</b> 在芯片产业链上，光刻胶虽然只占成本的百分之一，却是____的一环——少了它，整条线都得停。</ExampleQuestion>
                <ExampleOptions><span>A. 举足轻重</span><span>B. 至关重要</span><span>C. 不可或缺</span><span>D. 无足轻重</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：空后「<b>少了它整条线都得停</b>」是对空处的解释，强调<b>不能缺</b>，选「不可或缺」。「举足轻重」指<b>地位重要、一举一动影响全局</b>，侧重「影响力」，与「只占百分之一」的对比不合；「至关重要」指极重要，但不含「缺了不行」；「无足轻重」意思相反。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 一蹴而就 / 一劳永逸</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>8.</b> 基层减负不可能____：今天砍掉了报表，明天可能又冒出个「小程序打卡」。</ExampleQuestion>
                <ExampleOptions><span>A. 一劳永逸</span><span>B. 立竿见影</span><span>C. 轻而易举</span><span>D. 一蹴而就</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：冒号后「<b>今天砍掉、明天又冒出</b>」说明<b>不可能一下子做成</b>，选「一蹴而就」。「一劳永逸」指<b>干一次永久省事</b>，与「反复冒头」也相关，但句中强调的是「做成的时间」而非「是否永久」；「立竿见影」指效果快；「轻而易举」指容易，都落不到「反复」这一层。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 独树一帜 / 别出心裁</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>9.</b> 这部纪录片不按时间线讲，而是用十二件器物串起一百年，叙事上____，播出后引来不少模仿。</ExampleQuestion>
                <ExampleOptions><span>A. 别出心裁</span><span>B. 独树一帜</span><span>C. 不拘一格</span><span>D. 别开生面</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：空处修饰「<b>叙事</b>」，且强调「<b>用十二件器物串百年</b>」的构思巧妙，选「别出心裁」。「独树一帜」侧重<b>风格自成一家</b>，多指画风、流派、学派；「不拘一格」指<b>不限一种规格</b>，多用于选人用人；「别开生面」指开创新局面，多用于活动、场面。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 如火如荼 / 风起云涌</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>10.</b> 那几年，共享单车、社区团购、直播电商轮番登场，新赛道____，几乎每个月都有新玩家带着融资入场。</ExampleQuestion>
                <ExampleOptions><span>A. 如火如荼</span><span>B. 风起云涌</span><span>C. 方兴未艾</span><span>D. 高歌猛进</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中「<b>轮番登场</b>」「<b>每月都有新玩家入场</b>」强调的是<b>新事物迅猛兴起、声势浩大</b>，选「风起云涌」。「如火如荼」形容<b>正在进行的活动气势旺盛、气氛热烈</b>（春耕如火如荼），不用于「新赛道不断出现」；「方兴未艾」指某个事物势头正盛、远未停止，是<b>单数</b>；「高歌猛进」指推进势头猛，多指队伍、事业。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 难以为继 / 后继无人</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>11.</b> 这家百年老厂的技术骨干平均年龄五十四岁，五年内要退掉一多半，年轻人又不愿来，手艺面临____。</ExampleQuestion>
                <ExampleOptions><span>A. 难以为继</span><span>B. 青黄不接</span><span>C. 后继无人</span><span>D. 岌岌可危</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>骨干要退掉一多半、年轻人不愿来</b>」是明确的<b>缺接班人</b>，选「后继无人」。「难以为继」指<b>撑不下去</b>，多用于模式、经费、局面；「青黄不接」指<b>暂时接不上</b>，含「过渡期」意味，而句中说的是长期无人；「岌岌可危」指快要倾覆，多指政权、建筑，程度与对象都不合。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 比比皆是 / 不一而足</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>12.</b> 招牌挂得歪、路灯三年不亮、健身器材缺了螺丝……这些看似不起眼的小毛病____，群众却天天要面对。</ExampleQuestion>
                <ExampleOptions><span>A. 不一而足</span><span>B. 数不胜数</span><span>C. 俯拾皆是</span><span>D. 比比皆是</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：空处前是<b>三项具体毛病的列举</b>，后说「群众天天要面对」，强调<b>到处都是</b>，选「比比皆是」。「不一而足」虽也用于列举之后，但它强调「<b>不止一种、很多</b>」，多作收尾，不作「到处都是」的谓语；「数不胜数」只讲数量多；「俯拾皆是」强调<b>容易得到</b>，多用于素材、例子。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 不谋而合 / 不约而同</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>13.</b> 两个课题组互不知情，却在同一年提出了几乎相同的模型；更巧的是，他们在论文致谢里____地感谢了同一位中学老师。</ExampleQuestion>
                <ExampleOptions><span>A. 不约而同</span><span>B. 不谋而合</span><span>C. 殊途同归</span><span>D. 如出一辙</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：第二空修饰「<b>感谢</b>」这个<b>动作</b>，且是「互不知情却做了同样的事」，选「不约而同」。「不谋而合」侧重<b>见解、想法相同</b>（两人的方案不谋而合），不修饰具体动作；「殊途同归」指方法不同结果相同；「如出一辙」指几乎一样，多含贬义。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 置若罔闻 / 充耳不闻</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>14.</b> 工地夜间施工的投诉，居民打了三十多次热线，城管部门每次都说「已转办」，实际一次也没到现场，对这种____的态度，督察组提出了严肃批评。</ExampleQuestion>
                <ExampleOptions><span>A. 视而不见</span><span>B. 置若罔闻</span><span>C. 熟视无睹</span><span>D. 置之不理</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中「<b>打了三十多次</b>」「<b>说已转办</b>」说明<b>听见了、也回应了，就是不办</b>，选「置若罔闻」。「视而不见」要求有「看」的动作；「熟视无睹」强调<b>长期看惯了</b>；「置之不理」只讲不理睬，不含「明知而不为」的失职意味，力度偏轻。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 因噎废食 / 矫枉过正</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>15.</b> 某地为了整治「过度留痕」，干脆把所有工作台账一律取消，结果年底考核时连基本过程都说不清。这属于____。</ExampleQuestion>
                <ExampleOptions><span>A. 因噎废食</span><span>B. 过犹不及</span><span>C. 矫枉过正</span><span>D. 因小失大</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>为了整治「过度留痕」</b>」说明原本有偏差，「<b>一律取消</b>」说明<b>纠偏超过了限度</b>，选「矫枉过正」。「因噎废食」强调<b>因一次挫折而不敢做</b>，不含「纠正偏差」的前提；「过犹不及」只讲笼统的分寸；「因小失大」指为小利失大利，动机不符。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 束之高阁 / 无人问津</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>16.</b> 这份两万字的技术方案写得极扎实，可提交之后就被____，三年里没人翻开过。</ExampleQuestion>
                <ExampleOptions><span>A. 无人问津</span><span>B. 置之不理</span><span>C. 弃如敝屣</span><span>D. 束之高阁</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：空处是「被____」的被动结构，且「<b>三年没人翻开</b>」对应「<b>捆起来放在高架上</b>」，选「束之高阁」。「无人问津」是不及物的，不能说「被无人问津」；「置之不理」的对象多是<b>意见、请求、投诉</b>，不用于「文件被搁置」；「弃如敝屣」指当作破烂扔掉，程度过重。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 层出不穷 / 屡见不鲜</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>17.</b> 从「量子波动速读」到「蒙眼识字」，各种神童培训____，家长一边质疑一边掏钱。</ExampleQuestion>
                <ExampleOptions><span>A. 层出不穷</span><span>B. 屡见不鲜</span><span>C. 五花八门</span><span>D. 比比皆是</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中「<b>从……到……</b>」举出两个例子，句末没有收尾，要表达<b>新的名目不断冒出来</b>，选「层出不穷」。「屡见不鲜」需有「多次见到」的语境，一般说「此类现象屡见不鲜」，句中是「名目翻新」而非「同类反复」；「五花八门」强调花样多，但它形容「同一类事物的样式」，与「不断冒新的」不同；「比比皆是」强调密度高。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 各有千秋 / 平分秋色</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>18.</b> 苏绣重在水墨意境，湘绣长于狮虎毛发，两者____，很难说谁更高明。</ExampleQuestion>
                <ExampleOptions><span>A. 平分秋色</span><span>B. 各有千秋</span><span>C. 不相上下</span><span>D. 伯仲之间</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中「<b>一个重意境、一个长毛发</b>」是各自的长处，且「<b>很难说谁更高明</b>」，选「各有千秋」（各有各的长处）。「平分秋色」「不相上下」「伯仲之间」都只讲<b>水平相当、分不出高低</b>，不含「各有所长」这层关键信息——<b>句中出现「各有各的什么」，就要选「各有千秋」。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 判若云泥 / 天壤之别</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>19.</b> 同样是做社区团购，有的平台把菜送到楼下还顺手带走垃圾，有的连烂菜都照送。服务态度之差别，用户感受____。</ExampleQuestion>
                <ExampleOptions><span>A. 天壤之别</span><span>B. 泾渭分明</span><span>C. 判若云泥</span><span>D. 大相径庭</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：空处作「用户感受」的谓语，「<b>之差别</b>」已提示差别极大，且含明显的<b>高下之分</b>（一个贴心、一个敷衍），选「判若云泥」。「天壤之别」只讲差别极大，<b>不含高下</b>；「泾渭分明」指<b>界限清楚</b>，不是「差别大」；「大相径庭」多指说法、做法不一致。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 目无全牛 / 炉火纯青</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>20.</b> 老师傅修了四十年钟表，如今闭着一只眼也能把游丝装回去，这份手艺已是____。</ExampleQuestion>
                <ExampleOptions><span>A. 目无全牛</span><span>B. 巧夺天工</span><span>C. 登峰造极</span><span>D. 炉火纯青</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：空处要表达「<b>功夫纯熟到完美的境界</b>」，选「炉火纯青」。「目无全牛」虽也指技艺纯熟，但它强调「<b>看透结构、下刀有据</b>」的认知层面，多用于解剖、雕刻类；「巧夺天工」只能形容<b>人工制品</b>，不能形容「手艺」；「登峰造极」程度过重，且可含贬义。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 半途而废 / 一曝十寒</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>21.</b> 学书法最怕的不是没天赋，而是____——兴致来了写一整夜，兴致走了三个月不碰笔。</ExampleQuestion>
                <ExampleOptions><span>A. 一曝十寒</span><span>B. 半途而废</span><span>C. 浅尝辄止</span><span>D. 三天打鱼</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：破折号后「<b>兴致来了写一整夜，兴致走了三个月不碰</b>」是典型的<b>做一天歇十天</b>，选「一曝十寒」。「半途而废」指<b>中途彻底停止</b>，而这里是「反复开始又停下」；「浅尝辄止」指<b>不深入</b>；「三天打鱼」是俗语，与「两天晒网」连用，单用不合规范。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 事与愿违 / 适得其反</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>22.</b> 本想通过延长工时提高产量，结果工人疲劳出错、返工率上升，产量反而降了。这真是____。</ExampleQuestion>
                <ExampleOptions><span>A. 事与愿违</span><span>B. 适得其反</span><span>C. 南辕北辙</span><span>D. 得不偿失</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中「<b>想提高产量 → 产量反而降了</b>」是<b>结果与预期正好相反</b>，选「适得其反」。「事与愿违」只讲<b>不如愿</b>，不含「反向」的强度；「南辕北辙」强调<b>方向性错误</b>（做法与目的背道而驰），本句做法方向上没错，只是产生了反效果；「得不偿失」是算总账不划算。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 融会贯通 / 举一反三</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>23.</b> 只背公式不会用，是学不好物理的。把力、热、电、光的底层逻辑打通，才能____，见一道新题就知道该用哪条规律。</ExampleQuestion>
                <ExampleOptions><span>A. 举一反三</span><span>B. 触类旁通</span><span>C. 融会贯通</span><span>D. 学以致用</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：空处前是「<b>把力热电光的底层逻辑打通</b>」，正是<b>把各块知识融合成整体</b>，选「融会贯通」。「举一反三」侧重<b>由一件事推知许多</b>；「触类旁通」侧重<b>由一类推知同类</b>（横向迁移）；「学以致用」指把学到的用于实践，句中没有「用」的语境。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 无所不至 / 无微不至</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>24.</b> 这位驻村书记把全村六十八户的情况记在本子上，谁家老人吃什么药、谁家孩子几点放学，照顾得____。</ExampleQuestion>
                <ExampleOptions><span>A. 无所不至</span><span>B. 无所不为</span><span>C. 细致入微</span><span>D. 无微不至</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：句中是<b>正面褒扬</b>，且「<b>吃什么药、几点放学</b>」正对应「没有一处细节不到」，选「无微不至」。「无所不至」「无所不为」都是<b>贬义</b>（什么坏事都干），用在褒扬语境里是致命的感情色彩错误——<b>这是本题最大的坑</b>；「细致入微」虽意思接近，但「照顾得无微不至」是固定搭配。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 举足轻重 / 至关重要</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>25.</b> 在县域经济里，这个产业园贡献了近四成税收、带动两万人就业，地位____。</ExampleQuestion>
                <ExampleOptions><span>A. 举足轻重</span><span>B. 至关重要</span><span>C. 不可或缺</span><span>D. 无足轻重</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：空处作「<b>地位</b>」的谓语，「<b>四成税收、两万就业</b>」说明它<b>一动就影响全局</b>，选「举足轻重」。「至关重要」后面一般接「作用、意义、环节」，不直接作「地位」的谓语；「不可或缺」指不能缺少，不修饰「地位」；「无足轻重」意思相反。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 脱颖而出 / 崭露头角</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>26.</b> 在三百多人的集训队里，这个十九岁的小将连赢七场，最终____，拿到了唯一的名额。</ExampleQuestion>
                <ExampleOptions><span>A. 崭露头角</span><span>B. 脱颖而出</span><span>C. 出类拔萃</span><span>D. 大显身手</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中有明确<b>竞争场景</b>（三百多人、连赢七场）与<b>结果</b>（唯一名额），要表达「从众人中显露出来」，选「脱颖而出」。「崭露头角」侧重<b>初次显露</b>，不强调「压倒众人」；「出类拔萃」形容<b>才能本身高出同类</b>，多作定语；「大显身手」指充分施展本领，与「拿到名额」的结果不对应。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 相形见绌 / 自惭形秽</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>27.</b> 见过真正的大师之作，再看自己那幅临摹，不免____。</ExampleQuestion>
                <ExampleOptions><span>A. 相形见绌</span><span>B. 望尘莫及</span><span>C. 自惭形秽</span><span>D. 自愧弗如</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：空处的主语是「<b>自己</b>」，说的是<b>因不如别人而感到惭愧</b>，选「自惭形秽」。「相形见绌」是<b>两个事物相比，一个显得不足</b>，主语应是「作品」而非「我」，且后面不能带宾语；「望尘莫及」「自愧弗如」都只说「比不上」，不含「羞愧」的情绪。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 高屋建瓴 / 高瞻远瞩</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>28.</b> 这份报告不从单个项目说起，而是站在全国产业格局的高度，把未来十年的技术路线一次讲透，可谓____。</ExampleQuestion>
                <ExampleOptions><span>A. 高瞻远瞩</span><span>B. 深谋远虑</span><span>C. 运筹帷幄</span><span>D. 高屋建瓴</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：句中「<b>站在全国格局的高度</b>」「<b>一次讲透</b>」强调的是<b>居高临下、统摄全局的气势</b>，正是「高屋建瓴」。「高瞻远瞩」侧重<b>看得远</b>（时间维度）；「深谋远虑」侧重<b>谋划周密</b>，多形容决策；「运筹帷幄」特指<b>在后方指挥调度</b>，主语应是指挥者。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 危在旦夕 / 岌岌可危</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>29.</b> 堤防出现三处管涌，下游两个村庄随时可能被淹，情况____，抢险队连夜封堵。</ExampleQuestion>
                <ExampleOptions><span>A. 危在旦夕</span><span>B. 岌岌可危</span><span>C. 危如累卵</span><span>D. 命悬一线</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中「<b>随时可能被淹</b>」「<b>连夜封堵</b>」强调的是<b>危险就在眼前、时间上最近</b>，选「危在旦夕」。「岌岌可危」侧重<b>快要倾覆</b>，多指地位、政权、建筑；「危如累卵」侧重<b>随时会塌</b>的结构性危险；「命悬一线」<b>只能指人</b>的性命，不能指「情况」。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 分崩离析 / 土崩瓦解</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>30.</b> 几个合伙人为了股权争了半年，核心团队走了大半，公司虽还挂着牌子，实则已经____。</ExampleQuestion>
                <ExampleOptions><span>A. 土崩瓦解</span><span>B. 分崩离析</span><span>C. 一盘散沙</span><span>D. 危如累卵</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中「<b>为了股权争了半年、核心团队走了大半</b>」是明确的<b>内部分裂、人心离散</b>，选「分崩离析」。「土崩瓦解」侧重<b>彻底崩溃</b>（制度、政权垮掉），而句中公司「还挂着牌子」，尚未完全垮；「一盘散沙」强调<b>没有组织、人心不齐</b>，不含「分裂」；「危如累卵」指危险，不指「散」。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 一视同仁 / 不偏不倚</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>31.</b> 窗口办事，不管来的是熟人还是生人，都按同一套流程、同一个时限办理，这才叫____。</ExampleQuestion>
                <ExampleOptions><span>A. 不偏不倚</span><span>B. 等量齐观</span><span>C. 一视同仁</span><span>D. 一概而论</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>熟人还是生人都一样</b>」是<b>对人同等对待</b>，选「一视同仁」。「不偏不倚」侧重<b>立场中立、不偏袒任何一方</b>，多用于裁判、调解；「等量齐观」「一概而论」都是「把不同的事物同等看待」，且多用于<b>否定句</b>（不能等量齐观），与「这才叫」的肯定语气不合。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 一目了然 / 一览无余</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>32.</b> 这张流程图把审批的六个环节、每个环节的时限都标得清清楚楚，群众一看就明白，真正做到了____。</ExampleQuestion>
                <ExampleOptions><span>A. 一览无余</span><span>B. 了如指掌</span><span>C. 洞若观火</span><span>D. 一目了然</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：句中「<b>一看就明白</b>」是对空处的直接解释，选「一目了然」。「一览无余」指<b>一眼望去全都看到</b>，多用于视野开阔或内容浅露，不含「明白」；「了如指掌」指<b>了解透彻</b>，主语应是人；「洞若观火」指<b>观察透彻</b>，多指对局势的判断。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 力不从心 / 无能为力</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>33.</b> 他很想再带一届毕业班，可身体已经不允许，只好____地办了退休。</ExampleQuestion>
                <ExampleOptions><span>A. 力不从心</span><span>B. 无能为力</span><span>C. 鞭长莫及</span><span>D. 爱莫能助</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中「<b>很想再带</b>」与「<b>身体不允许</b>」相对，正是「<b>心里想做，力量达不到</b>」，选「力不从心」。「无能为力」指<b>没有能力去做</b>，不含「心想做」的前提；「鞭长莫及」指<b>力量达不到远处</b>（管辖范围外）；「爱莫能助」指<b>想帮别人却帮不上</b>，需有「帮助对象」。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 视而不见 / 听而不闻</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>34.</b> 对群众反映的问题，有的干部不是不知道，而是知道了也____，能拖就拖。</ExampleQuestion>
                <ExampleOptions><span>A. 视而不见</span><span>B. 听而不闻</span><span>C. 置之不理</span><span>D. 熟视无睹</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中「<b>反映的问题</b>」「<b>不是不知道</b>」提示是<b>听见了装没听见</b>，选「听而不闻」。「视而不见」要求有「看」的动作，与「反映」的听觉线索不符；「置之不理」只讲不理睬，不含「明知」；「熟视无睹」强调<b>长期看惯了</b>。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 曲突徙薪 / 亡羊补牢</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>35.</b> 与其等事故发生了再追责、再整改，不如把功夫下在平时，把隐患一个个排查掉——这就是____的道理。</ExampleQuestion>
                <ExampleOptions><span>A. 亡羊补牢</span><span>B. 江心补漏</span><span>C. 曲突徙薪</span><span>D. 临渴掘井</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>与其等事故发生了再……不如把功夫下在平时</b>」明确否定「事后」，肯定「事前」，选「曲突徙薪」（把烟囱改弯、柴草搬开，事先防患）。「亡羊补牢」是<b>事后补救</b>，虽「为时未晚」，但与「与其……不如」的取舍相反；「江心补漏」「临渴掘井」都是<b>来不及</b>的贬义。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 泾渭分明 / 水火不容</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>36.</b> 公与私的界限必须____：公家的钱一分不能动，私人的事一点不能沾。</ExampleQuestion>
                <ExampleOptions><span>A. 水火不容</span><span>B. 针锋相对</span><span>C. 势不两立</span><span>D. 泾渭分明</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：空处修饰「<b>界限</b>」并搭配「必须」，要表达<b>界限清楚、不混淆</b>，选「泾渭分明」。「水火不容」「势不两立」都指<b>双方对立、不能共存</b>，是「关系」而非「界限」；「针锋相对」指<b>观点尖锐对立</b>。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 势如破竹 / 势不可挡</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>37.</b> 新产品上市三个月拿下三成份额，第四个月又攻下两个省，一路____，团队士气高涨。</ExampleQuestion>
                <ExampleOptions><span>A. 势如破竹</span><span>B. 势不可挡</span><span>C. 高歌猛进</span><span>D. 所向披靡</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中「<b>三个月三成、第四个月又攻下两省</b>」是<b>节节推进、毫无阻碍</b>的过程，选「势如破竹」（劈竹子顺节而裂）。「势不可挡」侧重<b>力量大、挡不住</b>，是静态判断；「高歌猛进」多指<b>整体事业</b>的推进势头；「所向披靡」多指<b>军队所到之处无人能敌</b>，用于市场略显夸张。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 脱颖而出 / 独当一面</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>38.</b> 他从实习生做起，两年就能____，独自负责整个华东区的客户。</ExampleQuestion>
                <ExampleOptions><span>A. 脱颖而出</span><span>B. 独当一面</span><span>C. 大显身手</span><span>D. 崭露头角</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：空后「<b>独自负责整个华东区</b>」是对空处的解释，选「独当一面」（单独负责一个方面）。「脱颖而出」指<b>从众人中显露</b>，需有竞争场景；「大显身手」指<b>充分施展本领</b>，需有「舞台」；「崭露头角」指<b>初次显露</b>，与「两年就能负责全区」的能力层级不符。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 不以为然 / 不以为意</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>39.</b> 他对「加班就是敬业」的说法____，觉得效率比时长更重要。</ExampleQuestion>
                <ExampleOptions><span>A. 不以为意</span><span>B. 不屑一顾</span><span>C. 不以为然</span><span>D. 嗤之以鼻</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>「加班就是敬业」的说法</b>」是一个<b>观点</b>，且后文「觉得效率比时长更重要」是否定它，选「不以为然」（不认为对）。「不以为意」是<b>不放在心上</b>，针对风险、提醒；「不屑一顾」「嗤之以鼻」程度过重，含<b>轻蔑</b>。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 不容置疑 / 不容置喙</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>40.</b> 这是董事会依据章程作出的决议，程序合法、依据充分，个别股东再不满也____。</ExampleQuestion>
                <ExampleOptions><span>A. 不容置疑</span><span>B. 毋庸置疑</span><span>C. 无可厚非</span><span>D. 不容置喙</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：句中「<b>个别股东再不满也没资格说</b>」落点在「不许插嘴」，选「不容置喙」（喙＝嘴）。「不容置疑」指<b>结论绝对可信</b>，不涉及「谁有资格说」；「毋庸置疑」多作插入语；「无可厚非」指<b>不必过分责难</b>。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 不负众望 / 不孚众望</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>41.</b> 上任一年，他带团队把三个亏损项目全部扭亏，这次续任可谓____。</ExampleQuestion>
                <ExampleOptions><span>A. 不负众望</span><span>B. 不孚众望</span><span>C. 众望所归</span><span>D. 深孚众望</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中是「<b>做出成绩</b>」，要表达「<b>没有辜负期望</b>」，选「不负众望」。「不孚众望」意为<b>不能使人信服</b>，与「扭亏为盈」正相反——<b>「孚」与「负」一字之差，感情色彩完全相反</b>；「深孚众望」意思正确，但它是谓语性短语（他深孚众望），不能作「可谓」的宾语。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 泰然自若 / 随遇而安</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>42.</b> 暗访组的车已停在楼下，会议室气氛骤紧，只有他依旧____，不紧不慢地翻着材料。</ExampleQuestion>
                <ExampleOptions><span>A. 随遇而安</span><span>B. 泰然自若</span><span>C. 安之若素</span><span>D. 无动于衷</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中有<b>突发紧张情境</b>（暗访组到楼下、气氛骤紧），要表达<b>临事镇定、神色不变</b>，选「泰然自若」。「安之若素」侧重对<b>长期不利处境</b>不以为意；「随遇而安」侧重<b>适应环境</b>；「无动于衷」含<b>冷漠、该有反应却没反应</b>的贬义。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 众望所归 / 实至名归</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>43.</b> 他深耕小麦育种四十年，育成的品种累计推广三亿多亩，这次获颁国家最高科学技术奖，可谓____。</ExampleQuestion>
                <ExampleOptions><span>A. 众望所归</span><span>B. 名副其实</span><span>C. 实至名归</span><span>D. 当之无愧</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中强调「<b>贡献实在、奖项配得上</b>」，选「实至名归」。「众望所归」侧重<b>众人期望</b>，多用于<b>担任某职</b>，句中没有「大家都盼着他得奖」；「名副其实」只说明名实相符，不含「因贡献获誉」；「当之无愧」侧重「承担得起、不惭愧」。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 无微不至 / 面面俱到</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>44.</b> 这份方案把预算、进度、风险、验收都考虑到了，可谓____，但恰恰漏掉了最关键的「谁来做」。</ExampleQuestion>
                <ExampleOptions><span>A. 无微不至</span><span>B. 滴水不漏</span><span>C. 尽善尽美</span><span>D. 面面俱到</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：空处列举的是「<b>预算、进度、风险、验收</b>」等<b>方面</b>，且后文用「<b>但</b>」转折说仍有遗漏，选「面面俱到」（各方面都照顾到，也含「平均用力」的中性偏贬）。「无微不至」只用于<b>关怀、照顾</b>；「滴水不漏」指<b>严密无漏洞</b>，与「恰恰漏掉」矛盾；「尽善尽美」指完美，转折后自相矛盾。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 耳提面命 / 循循善诱</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>45.</b> 带徒弟时，他很少直接给答案，而是一步步追问、一层层引导，让学生自己把结论说出来，这种____的教法，比灌输管用得多。</ExampleQuestion>
                <ExampleOptions><span>A. 循循善诱</span><span>B. 耳提面命</span><span>C. 诲人不倦</span><span>D. 苦口婆心</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中「<b>一步步追问、一层层引导</b>」正是「循循善诱」（有步骤地引导）。「耳提面命」侧重<b>当面反复叮嘱</b>；「诲人不倦」侧重<b>耐心不倦</b>，不强调「方法」；「苦口婆心」侧重<b>反复恳切劝说</b>，用于劝导而非教学引导。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 息息相关 / 休戚相关</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>46.</b> 这条河的上下游____：上游一排污，下游的自来水厂就得停水。</ExampleQuestion>
                <ExampleOptions><span>A. 休戚相关</span><span>B. 息息相关</span><span>C. 唇齿相依</span><span>D. 同舟共济</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：空处要表达「<b>关系非常密切</b>」，且后文用冒号解释「上游排污、下游停水」这一<b>因果关联</b>，选「息息相关」。「休戚相关」侧重<b>忧喜祸福相连、利害一致</b>，多指人、民族；「唇齿相依」侧重<b>互相依存</b>，多指地理、安全；「同舟共济」指<b>共渡难关</b>，需要「共同行动」。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 鱼目混珠 / 滥竽充数</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>47.</b> 这支乐队招人只看简历，结果混进两个连五线谱都不识的，演出时只好在台上比划——典型的____。</ExampleQuestion>
                <ExampleOptions><span>A. 鱼目混珠</span><span>B. 良莠不齐</span><span>C. 滥竽充数</span><span>D. 鱼龙混杂</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>不识五线谱</b>」「<b>在台上比划</b>」是<b>没有真本事而充数</b>，正是「滥竽充数」的典故场景。「鱼目混珠」指<b>拿假的冒充真的</b>（有「冒充」动作）；「良莠不齐」「鱼龙混杂」只讲<b>好坏混杂</b>，不涉及「充数」。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 相映成趣 / 交相辉映</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>48.</b> 白墙黛瓦的民居依山而建，远处是层层叠叠的梯田，近处有几株老樟，几者____，构成一幅水墨长卷。</ExampleQuestion>
                <ExampleOptions><span>A. 交相辉映</span><span>B. 相得益彰</span><span>C. 双峰并峙</span><span>D. 相映成趣</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：句中是<b>景物互相衬托、显得有情趣</b>，且构成「水墨长卷」，选「相映成趣」。「交相辉映」强调<b>光亮、色彩互相映照</b>，多用于灯火、波光；「相得益彰」强调<b>配合后各自长处更显</b>；「双峰并峙」指两种事物并立、难分高下，对象是成就、流派。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 门可罗雀 / 无人问津</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>49.</b> 景区一过旺季，摊位撤了大半，售票窗口前____，商户们盼着下一个假期。</ExampleQuestion>
                <ExampleOptions><span>A. 门可罗雀</span><span>B. 无人问津</span><span>C. 门庭冷落</span><span>D. 人迹罕至</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：空处描述「<b>售票窗口前</b>」这个<b>场所</b>的冷清，选「门可罗雀」（门前可以张网捕雀）。「无人问津」侧重<b>没人过问、没人尝试</b>，多指商品、事情，不能直接描述「窗口前」；「门庭冷落」也表示冷清，但多指<b>曾经热闹的地方如今来客稀少</b>，与「一过旺季」的周期性不符；「人迹罕至」指<b>荒僻少见人</b>，程度过重。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 望其项背 / 望尘莫及</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>50.</b> 在高端光刻机领域，国产设备与国际顶尖水平仍有明显差距，短期内难以____。</ExampleQuestion>
                <ExampleOptions><span>A. 望尘莫及</span><span>B. 望其项背</span><span>C. 相形见绌</span><span>D. 同日而语</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：空处前有「<b>难以</b>」。「望其项背」＝赶得上，<b>本身多用于否定</b>，「难以望其项背」＝赶不上，与「仍有明显差距」吻合。「望尘莫及」本身已是「追不上」，说「难以望尘莫及」变成<b>双重否定</b>，意思反了——<b>这是本题最大的坑</b>；「相形见绌」不能带宾语；「同日而语」虽也可否定，但它是「放在一起谈」。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 弄巧成拙 / 画蛇添足</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>51.</b> 这份材料本来已经说清楚了，作者又加了一段「理论阐释」，结果前后矛盾，反而____。</ExampleQuestion>
                <ExampleOptions><span>A. 画蛇添足</span><span>B. 多此一举</span><span>C. 弄巧成拙</span><span>D. 适得其反</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>本来已经说清楚</b>」「<b>加了反而前后矛盾</b>」是<b>本想做好、结果做坏</b>，选「弄巧成拙」。「画蛇添足」只指<b>多做了不必要的事</b>，不含「弄巧」的意图与「成拙」的结果；「多此一举」程度更轻；「适得其反」指结果与预期相反，但句中已用「反而」，再用会<b>语义重复</b>。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 相提并论 / 混为一谈</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>52.</b> 「网络文学」与「网络段子」不是一回事，把两者____，是对前者的误解。</ExampleQuestion>
                <ExampleOptions><span>A. 一视同仁</span><span>B. 等量齐观</span><span>C. 相提并论</span><span>D. 混为一谈</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：句中「<b>不是一回事</b>」直接提示「<b>把不同的事物当成一回事</b>」，选「混为一谈」。「相提并论」「等量齐观」都是「放在一起谈论／同等看待」，侧重<b>比较时不分高下</b>；「一视同仁」是<b>对人同样对待</b>，含褒义。<b>句中若出现「不是一回事」「本是两码事」，优先「混为一谈」。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 无所不为 / 为所欲为</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>53.</b> 这伙人打着「代办」的旗号，伪造材料、冒名签字、威胁举报人，可谓____。</ExampleQuestion>
                <ExampleOptions><span>A. 无所不为</span><span>B. 为所欲为</span><span>C. 肆无忌惮</span><span>D. 无法无天</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：空处前连举<b>三项具体坏事</b>（伪造、冒名、威胁），要表达「<b>什么坏事都干</b>」，选「无所不为」。「为所欲为」指<b>想干什么就干什么</b>，强调「不受约束」，不强调「干尽坏事」；「肆无忌惮」只讲「毫无顾忌」；「无法无天」多形容<b>人胆大妄为、不守法纪</b>，口语化，与「可谓」的书面语体略不合。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 不胫而走 / 沸沸扬扬</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>54.</b> 招聘名单还没公示，内部消息就____，几个候选人的电话当天就被打爆了。</ExampleQuestion>
                <ExampleOptions><span>A. 沸沸扬扬</span><span>B. 不胫而走</span><span>C. 满城风雨</span><span>D. 家喻户晓</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中「<b>内部消息</b>」「<b>还没公示就传开</b>」正是<b>消息迅速传播</b>，选「不胫而走」。「沸沸扬扬」形容<b>议论纷纷、传得很热闹</b>，多作谓语（此事传得沸沸扬扬），不直接接「消息」作主语；「满城风雨」指<b>坏事传得到处都是</b>，含贬义；「家喻户晓」指<b>人人都知道</b>，程度过重。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 愈演愈烈 / 变本加厉</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>55.</b> 被约谈之后，这家平台不但没有整改，反而____，把违规的付费项目换了个名字继续上线。</ExampleQuestion>
                <ExampleOptions><span>A. 愈演愈烈</span><span>B. 雪上加霜</span><span>C. 变本加厉</span><span>D. 得寸进尺</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>被约谈之后不但没改，反而更凶</b>」是<b>不良行为比原来更严重</b>，选「变本加厉」。「愈演愈烈」指<b>事态、趋势越来越严重</b>，主语多是「冲突、风波」，不用于「具体主体继续作恶」；「雪上加霜」要求<b>外部灾祸接连而来</b>；「得寸进尺」指<b>贪得无厌、逐步索取</b>。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 微乎其微 / 微乎其微</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>56.</b> 这类药物的副作用发生率____，说明书上却写得极为醒目，患者看了难免紧张。</ExampleQuestion>
                <ExampleOptions><span>A. 微不足道</span><span>B. 无关紧要</span><span>C. 九牛一毛</span><span>D. 微乎其微</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：空处修饰「<b>发生率</b>」，要表达<b>极小</b>，选「微乎其微」。「微不足道」指<b>小到不值一提</b>，多指价值、意义；「无关紧要」指<b>不重要</b>，不指概率；「九牛一毛」比喻<b>极大数量中的极小部分</b>，需有「整体」作参照。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 大相径庭 / 迥然不同</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>57.</b> 同一位老师，课堂上是严师，回到家里却耐心得近乎溺爱，两种形象____。</ExampleQuestion>
                <ExampleOptions><span>A. 迥然不同</span><span>B. 截然相反</span><span>C. 大相径庭</span><span>D. 判若云泥</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中「<b>像换了个人</b>」强调<b>明显不一样</b>，但两种形象并非「正反对立」，选「迥然不同」。「截然相反」程度最重，要求<b>性质完全对立</b>；「大相径庭」多用于<b>说法、做法、结论</b>的不一致；「判若云泥」含<b>高下之分</b>，句中是两种角色，不分高下。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 防微杜渐 / 防患未然</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>58.</b> 对苗头性、倾向性问题，不能等它坐大了再处理，而要____，把问题解决在萌芽状态。</ExampleQuestion>
                <ExampleOptions><span>A. 防患未然</span><span>B. 防微杜渐</span><span>C. 未雨绸缪</span><span>D. 曲突徙薪</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中「<b>苗头性、倾向性</b>」「<b>解决在萌芽状态</b>」直接对应「防微杜渐」（刚冒头就制止）。「防患未然」「未雨绸缪」「曲突徙薪」都是<b>还没发生就准备</b>，不含「已经冒头」；<b>「萌芽状态」＝防微杜渐，这是唯一判据。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 一以贯之 / 始终如一</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>59.</b> 他对质量的坚持，从学徒到总工，三十年____，厂里的老师傅都服他。</ExampleQuestion>
                <ExampleOptions><span>A. 始终如一</span><span>B. 一如既往</span><span>C. 一以贯之</span><span>D. 持之以恒</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：空处要表达「<b>用一个原则贯穿始终</b>」，且与前文「对质量的坚持」构成「原则—贯彻」关系，选「一以贯之」。「始终如一」只讲<b>从头到尾一个样</b>，不强调「有原则贯穿」；「一如既往」指<b>跟过去一样</b>，需有对比对象；「持之以恒」指<b>长期坚持</b>，多指行为，不指「原则」。</ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 首当其冲 / 一马当先</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>60.</b> 台风「海葵」正面登陆，沿海三个县市____，转移安置群众两万余人。</ExampleQuestion>
                <ExampleOptions><span>A. 一马当先</span><span>B. 身先士卒</span><span>C. 当仁不让</span><span>D. 首当其冲</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：空处要表达「<b>最先受到冲击</b>」，选「首当其冲」。「一马当先」指<b>带头、走在最前</b>，含褒义；「身先士卒」指<b>领导带头</b>；「当仁不让」指<b>该做就承担</b>。<b>「首当其冲」绝不能当「首先、第一个做」用——这是最高频误用。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 望文生义 · 七月流火</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>61.</b> 「____」说的并不是天热，而是大火星西沉、暑气渐退。</ExampleQuestion>
                <ExampleOptions><span>A. 七月流火</span><span>B. 骄阳似火</span><span>C. 赤日炎炎</span><span>D. 流金铄石</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：空处后「<b>并不是天热，而是大火星西沉、暑气渐退</b>」是本义解释，只有「七月流火」符合。「骄阳似火」「赤日炎炎」「流金铄石」都在形容<b>天气炎热</b>，正与「暑气渐退」相反——<b>记住：七月流火＝要凉了。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>真题改编 · 望文生义 · 差强人意</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion><b>62.</b> 这份申报材料还有不少粗糙之处，但框架完整、数据扎实，作为初稿已属____。</ExampleQuestion>
                <ExampleOptions><span>A. 不尽人意</span><span>B. 差强人意</span><span>C. 大失所望</span><span>D. 无可厚非</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：空后「<b>框架完整、数据扎实</b>」说明<b>大体上还能让人满意</b>，选「差强人意」（差＝尚、略）。「不尽人意」＝不能尽如人意；「大失所望」程度过重；「无可厚非」指<b>不必过分责难</b>，是「情有可原」。<b>差强人意是「还算满意」，不是「不满意」——被误用最多的成语之一。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
