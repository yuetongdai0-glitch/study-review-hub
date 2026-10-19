import type { ReactElement } from 'react'
import { Card, ExerciseCard, ExerciseTitle } from '@/components/content'

/**
 * 模块一 · 必然性推理（逻辑判断）
 *
 * @returns 该节正文。
 */
export default function S3(): ReactElement {
  return (
    <>
      <div className="sec-desc">特点：侧重知识点的记忆、识别、使用；难易度中等，个别内容偏上。学会了用熟了，正确率和速度都能明显提升。通用流程：<b>识别题型 → 翻译符号 → 套用规则 → 选出答案</b>。</div>
      
          
          <Card>
            <h3><span className="dot" style={{ background: '#1f6f8b' }}></span>1.1 直言命题（第 1 次课）</h3>
            <p><b>含义：</b>直言命题就是含有一个断定的语句，类似汉语的单句。如「所有中国运动员都赢得了奖牌」。</p>
      
            <h4>六种分类（量项 × 联项）</h4>
            <table className="tight">
              <tr><th className="k1">量项</th><th className="k1">联项</th><th>形式</th><th>示例</th></tr>
              <tr><td rowSpan={2}>所有（全称）</td><td>是</td><td>所有A是B</td><td>所有学生都是党员</td></tr>
              <tr><td>非</td><td>所有A非B</td><td>所有学生都不是党员</td></tr>
              <tr><td rowSpan={2}>有些（特称）</td><td>是</td><td>有些A是B</td><td>有些学生是党员</td></tr>
              <tr><td>非</td><td>有些A非B</td><td>有些学生不是党员</td></tr>
              <tr><td rowSpan={2}>某个（单称）</td><td>是</td><td>某个A是B</td><td>张三（这个学生）是党员</td></tr>
              <tr><td>非</td><td>某个A非B</td><td>张三（这个学生）不是党员</td></tr>
            </table>
            <p><span className="pill pill-key">注意</span>「凡、都」都是「所有」的意思；「至少有一个」是「有些」的意思。</p>
      
            <ExerciseCard>
              <ExerciseTitle>例 1 · 全称肯定「所有A是B」</ExerciseTitle>
              <div className="q">下列句子中，属于「所有A是B」形式的是：<br />A. 有些党员是教师　B. 凡是笔试合格者都能参加面试　C. 并非所有学生都及格　D. 小李是党员</div>
              <div className="a"><b>思路：</b>「凡、都」就是「所有」→ B = 「所有笔试合格者<b>是</b>能参加面试的人」。A 是特称，C 是带「并非」的否定式，D 是单称，都不是全称肯定。</div>
            </ExerciseCard>
            <ExerciseCard>
              <ExerciseTitle>例 2 · 全称否定「所有A非B」</ExerciseTitle>
              <div className="q">「所有与会代表都不是外地人」的命题形式是：<br />A. 所有A是B　B. 所有A非B　C. 有些A非B　D. 某个A非B</div>
              <div className="a"><b>思路：</b>量项是「所有」（全称），联项是「非」→ 全称否定「所有A非B」，选 B。这里的「不」只否定联项，<b>不能把「所有」误读成「有些」</b>。</div>
            </ExerciseCard>
            <ExerciseCard>
              <ExerciseTitle>例 3 · 特称肯定「有些A是B」</ExerciseTitle>
              <div className="q">「至少有一个科室完成了整改」翻译成命题形式是：<br />A. 所有A是B　B. 有些A非B　C. 有些A是B　D. 某个A是B</div>
              <div className="a"><b>思路：</b>「至少有一个」= 「有些」（特称），「完成了整改」= 联项「是」→ 特称肯定「有些A是B」，选 C。</div>
            </ExerciseCard>
            <ExerciseCard>
              <ExerciseTitle>例 4 · 特称否定「有些A非B」</ExerciseTitle>
              <div className="q">已知「有的方案没有经过论证」为真，则它的<b>矛盾命题</b>是：<br />A. 有的方案经过论证　B. 所有方案都经过论证　C. 所有方案都没经过论证　D. 某个方案没经过论证</div>
              <div className="a"><b>思路：</b>「有些A非B」的矛盾 = 量项「有些 ↔ 所有」、联项「是 ↔ 非」同时互换 → 「所有A是B」，即「所有方案都经过论证」，选 B。C 与本句是<b>下反对</b>（可同真、不可同假），不是矛盾。</div>
            </ExerciseCard>
            <ExerciseCard>
              <ExerciseTitle>例 5 · 单称肯定「某个A是B」</ExerciseTitle>
              <div className="q">「张三（这个学生）是党员」属于哪一类命题？<br />A. 全称肯定　B. 特称肯定　C. 单称肯定　D. 单称否定</div>
              <div className="a"><b>思路：</b>主语是<b>确定的一个对象</b>（张三），量项是「某个」（单称），联项是「是」→ 单称肯定，选 C。单称命题范围最小，但同样能找矛盾、同样参与真假推理。</div>
            </ExerciseCard>
            <ExerciseCard>
              <ExerciseTitle>例 6 · 单称否定「某个A非B」</ExerciseTitle>
              <div className="q">「张三（这个学生）不是党员」的矛盾命题是：<br />A. 张三（这个学生）是党员　B. 有些学生不是党员　C. 所有学生都不是党员　D. 张三（这个学生）可能是党员</div>
              <div className="a"><b>思路：</b>单称命题找矛盾<b>只变联项、量项「某个」不动</b> → 「某个A是B」，选 A。B、C 把量项也改了，属于「扩大矛盾范围」的常见错项。</div>
            </ExerciseCard>
      
            <h4>矛盾关系（重点）</h4>
            <p>矛盾关系 = 针对相同事物的两个命题<b>永远满足一真一假</b>。</p>
            <ul>
              <li>找矛盾<b>方式一：加「并非」</b>（了解即可，考得少）。</li>
              <li>找矛盾<b>方式二：变形式</b>——「所有 ↔ 有些」「是 ↔ 非」互换，<b>「某个」不变</b>。</li>
            </ul>
            <table className="tight">
              <tr><th>原命题</th><th>矛盾命题</th></tr>
              <tr><td>所有A是B</td><td><b>有些A非B</b></td></tr>
              <tr><td>所有A非B</td><td><b>有些A是B</b></td></tr>
              <tr><td>某个A是B</td><td><b>某个A非B</b></td></tr>
            </table>
      
            <figure className="fig">
              <svg viewBox="0 0 640 322" role="img" aria-label="直言命题对当关系方阵（AEIO）">
                <defs>
                  <marker id="jgA1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill="#94a3b8"></path>
                  </marker>
                </defs>
                <text x={320} y={24} textAnchor="middle" fontSize={14} fontWeight="700" fill="#1e293b">直言命题对当关系方阵（A · E · I · O）</text>
                <rect x={110} y={40} width={180} height={54} rx={9} fill="#dbeafe" stroke="#2563eb" strokeWidth={1.6}></rect>
                <text x={200} y={66} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1e3a8a">所有 A 是 B</text>
                <text x={200} y={85} textAnchor="middle" fontSize={11.5} fill="#1d4ed8">全称肯定 · A</text>
                <rect x={360} y={40} width={180} height={54} rx={9} fill="#dbeafe" stroke="#2563eb" strokeWidth={1.6}></rect>
                <text x={450} y={66} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1e3a8a">所有 A 非 B</text>
                <text x={450} y={85} textAnchor="middle" fontSize={11.5} fill="#1d4ed8">全称否定 · E</text>
                <rect x={110} y={200} width={180} height={54} rx={9} fill="#d1fae5" stroke="#10b981" strokeWidth={1.6}></rect>
                <text x={200} y={226} textAnchor="middle" fontSize={15} fontWeight="700" fill="#065f46">有些 A 是 B</text>
                <text x={200} y={245} textAnchor="middle" fontSize={11.5} fill="#047857">特称肯定 · I</text>
                <rect x={360} y={200} width={180} height={54} rx={9} fill="#d1fae5" stroke="#10b981" strokeWidth={1.6}></rect>
                <text x={450} y={226} textAnchor="middle" fontSize={15} fontWeight="700" fill="#065f46">有些 A 非 B</text>
                <text x={450} y={245} textAnchor="middle" fontSize={11.5} fill="#047857">特称否定 · O</text>
                <line x1={292} y1={67} x2={358} y2={67} stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="5 4"></line>
                <text x={325} y={58} textAnchor="middle" fontSize={11.5} fontWeight="700" fill="#334155">上反对</text>
                <text x={325} y={84} textAnchor="middle" fontSize={11.5} fill="#475569">不能同真</text>
                <line x1={292} y1={227} x2={358} y2={227} stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="5 4"></line>
                <text x={325} y={218} textAnchor="middle" fontSize={11.5} fontWeight="700" fill="#334155">下反对</text>
                <text x={325} y={244} textAnchor="middle" fontSize={11.5} fill="#475569">可以同真</text>
                <line x1={290} y1={96} x2={358} y2={198} stroke="#8b5cf6" strokeWidth={1.6}></line>
                <line x1={360} y1={96} x2={292} y2={198} stroke="#8b5cf6" strokeWidth={1.6}></line>
                <rect x={292} y={134} width={66} height={26} rx={7} fill="#ffffff" stroke="#c4b5fd" strokeWidth={1.2}></rect>
                <text x={325} y={152} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#6d28d9">矛盾</text>
                <line x1={140} y1={98} x2={140} y2={196} stroke="#94a3b8" strokeWidth={1.5} markerEnd="url(#jgA1)"></line>
                <text x={132} y={153} textAnchor="end" fontSize={11.5} fill="#475569">从属</text>
                <line x1={510} y1={98} x2={510} y2={196} stroke="#94a3b8" strokeWidth={1.5} markerEnd="url(#jgA1)"></line>
                <text x={518} y={153} textAnchor="start" fontSize={11.5} fill="#475569">从属</text>
                <text x={320} y={288} textAnchor="middle" fontSize={12.5} fill="#334155">矛盾=一真一假 ｜ 上反对=不能同真 ｜ 下反对=不能同假 ｜ 从属=全称真则特称真</text>
                <text x={320} y={310} textAnchor="middle" fontSize={12} fontWeight="700" fill="#b45309">变形式找矛盾：「所有 ↔ 有些」「是 ↔ 非」互换，「某个」不变</text>
              </svg>
              <figcaption>图：AEIO 逻辑方阵 —— 对角线是矛盾（知真求假、真假话问题的突破口），上下两条是反对关系，两侧竖箭头是从属</figcaption>
            </figure>
      
            <h4>对当关系（补充：上反对 / 下反对 / 从属）</h4>
            <table className="tight">
              <tr><th className="k1">关系</th><th>双方</th><th>性质</th></tr>
              <tr><td>矛盾</td><td>所有是 ↔ 有些非；所有非 ↔ 有些是；某个是 ↔ 某个非</td><td>一真一假，<b>必有一真一假</b></td></tr>
              <tr><td>上反对</td><td>所有是 ↔ 所有非</td><td><b>不能同真，可以同假</b></td></tr>
              <tr><td>下反对</td><td>有些是 ↔ 有些非</td><td><b>可以同真，不能同假</b></td></tr>
              <tr><td>从属</td><td>所有是 → 某个是 → 有些是；所有非 → 某个非 → 有些非</td><td>全称真则单称/特称真；特称假则单称/全称假</td></tr>
            </table>
      
            <h4>反对关系 · 秒杀技（真假话的高频套路）</h4>
            <p>真假话题里，<b>「所有是 / 所有非」「有些是 / 有些非」同时出现时，多半就是反对关系的套路题</b>，可以直接套下面的秒杀技，省掉一步步推理。</p>
            <table className="tight">
              <tr><th>题干特征</th><th>给定条件</th><th>秒杀技</th><th>得到什么</th></tr>
              <tr><td>3 句话里出现<br /><b>所有是 + 所有非</b></td><td>限只有<b>一假</b></td><td><b>顺着第三句，变所有</b></td><td>第三句说「某个是」→ 得「<b>所有是</b>」；说「某个非」→ 得「<b>所有非</b>」</td></tr>
              <tr><td>3 句话里出现<br /><b>有些是 + 有些非</b></td><td>限只有<b>一真</b></td><td><b>反着第三句，变所有</b></td><td>第三句说「某个非」→ 取反得「<b>所有是</b>」；说「某个是」→ 得「<b>所有非</b>」</td></tr>
            </table>
            <p><span className="pill pill-key">原理</span>上反对「不能同真」→ 唯一的那句假话必在其中，<b>第三句一定是真话</b>；下反对「不能同假」→ 唯一的那句真话必在其中，<b>第三句一定是假话</b>（所以要把第三句反过来）。用「来上课」想最清楚：全来了 / 全没来 / 来了几个 —— 上反对（所有是 vs 所有非）只在「来几个」时同时为假，下反对（有些是 vs 有些非）也只在「来几个」时同时为真。</p>
      
            <ExerciseCard>
              <ExerciseTitle>例 7 · 秒杀技 1（上反对：所有是 + 所有非，限只有一假）</ExerciseTitle>
              <div className="q">下列三句话中只有一句是假的：<br />① 咱们班所有人逻辑思维都很好。<br />② 咱们班小张逻辑思维很好。<br />③ 咱们班所有人逻辑思维都不好。<br />由此可见：<br />A. 咱们班所有人逻辑思维都很好　B. 咱们班所有人逻辑思维都不好　C. 咱们班小张逻辑思维不好　D. 咱们班只有小张逻辑思维好</div>
              <div className="a"><b>思路（程意秒杀）：</b>①「所有是」与③「所有非」是上反对，必有 1 假；题目说只有 1 假 → 假话就在①③里，<b>②必真</b>（小张逻辑思维很好）。再由②真可知③「所有人都不好」是假 → ①为真。<b>顺着第三句（③说的是「所有非」）直接得「所有是」</b>，即所有人都很好 → 选 A。</div>
            </ExerciseCard>
      
            <ExerciseCard>
              <ExerciseTitle>例 8 · 秒杀技 2（下反对：有些是 + 有些非，限只有一真）</ExerciseTitle>
              <div className="q">某社区居委会开展工作满意度调查，该社区包括张某在内有 3679 位居民。有关这 3679 位居民，以下三个断定中只有一个是真的：<br />（1）有人填写了调查问卷；<br />（2）有人未填写调查问卷；<br />（3）张某未填写调查问卷。<br />根据这段文字，以下为真的是：<br />A. 3679 位居民都填写了调查问卷　B. 3679 位居民都未填写调查问卷　C. 有一位居民未填写调查问卷　D. 无法确定该社区填写调查问卷的人数</div>
              <div className="a"><b>思路（程意秒杀）：</b>（1）「有些是」与（2）「有些非」是下反对，必有 1 真；题目说只有 1 真 → 真话在（1）（2）里，<b>（3）必假</b> → 张某<b>填写了</b>。再由（2）「有人未填写」为假 → 它的矛盾「所有人都填写了」为真。<b>反着第三句（（3）是「张某未填」的否定式）变所有 → 所有人都填了</b> → 选 A。</div>
            </ExerciseCard>
      
            <ExerciseCard>
              <ExerciseTitle>例 9 · 秒杀技 2（再练一道）</ExerciseTitle>
              <div className="q">某会计师事务所共有 10 名工作人员，已知：<br />（1）有人持有注册会计师证；<br />（2）有人不持有注册会计师证；<br />（3）该事务所员工小龙不持有注册会计师证。<br />上述三个判断中，只有一个是真的。关于该事务所员工的注册会计师证持有情况，下列说法正确的是：<br />A. 10 人都持有　B. 10 人都不持有　C. 仅小龙不持有　D. 仅 1 人持有</div>
              <div className="a"><b>思路（程意秒杀）：</b>（1）「有些是」+（2）「有些非」= 下反对，必有 1 真 → 唯一真话在其中 → <b>（3）必假</b> → 小龙<b>持有</b>。再由（2）为假 → 「有人不持有」为假 → 所有人<b>都持有</b> → 选 A。</div>
            </ExerciseCard>
      
            <ExerciseCard>
              <ExerciseTitle>例 10 · 上反对 + 一找二绕三回</ExerciseTitle>
              <div className="q">甲、乙、丙、丁是某研究科的同事，针对党员情况有如下讨论：<br />甲：我们单位同事都是党员。<br />乙：丁不是党员。<br />丙：我们单位都不是党员。<br />丁：乙不是党员。<br />已知一个人说假话，则可以推出：<br />A. 说假话的是乙，丙不是党员　B. 说假话的是甲，乙不是党员　C. 说假话的是丁，乙不是党员　D. 说假话的是丙，甲不是党员</div>
              <div className="a"><b>思路（程意一找二绕三回）：</b>① <b>一找</b>：甲「所有是」与丙「所有非」是上反对，必有 1 假（题目说只有 1 个人说假话）→ 假话必在甲、丙之间；② <b>二绕</b>：绕开甲丙，乙、丁都是<b>真话</b> → 「丁不是党员」「乙不是党员」；③ <b>三回</b>：丁不是党员 → 甲的「所有人都是党员」为假 → 说假话的是甲，丙「所有人都不是党员」为真 → 选 B。</div>
            </ExerciseCard>
      
            <ExerciseCard>
              <ExerciseTitle>例 11 · 下反对（三项判断只有一项正确）</ExerciseTitle>
              <div className="q">某市地震监控部门购买了甲、乙、丙三种型号的地震检测仪各一台。关于它们的性能，该部门负责人老李在不同场合有三种不同的说法：<br />（1）甲型检测仪能预测到 350 公里以内将可能发生的地震。<br />（2）有的型号的检测仪不能预测到 350 公里以内将可能发生的地震。<br />（3）有的型号的检测仪能预测到 350 公里以内将可能发生的地震。<br />事后证实，这三种说法中只有一种是真的。根据上述信息，可以得出以下哪项？<br />A. 乙能预测，而丙不能　B. 甲能预测，而乙不能　C. 乙和丙都不能预测　D. 丙能预测，而甲不能</div>
              <div className="a"><b>思路（程意秒杀）：</b>（2）「有些非」与（3）「有些是」是下反对，必有 1 真 → 唯一真话在其中 → <b>（1）必假</b> → 甲型<b>不能</b>预测。又因为只有一真，（3）「有的能预测」为假 → 它的矛盾「<b>所有型号都不能预测</b>」为真 → 甲、乙、丙都不能预测。<br />甲已不能、乙丙也都不能 → 选 <b>C</b>（题目问「能得出哪项」，C 说乙和丙都不能，与「全都不能」一致）。</div>
            </ExerciseCard>
      
            <ExerciseCard>
              <ExerciseTitle>例 · 直言矛盾应用（知真求假）</ExerciseTitle>
              <div className="q">「有的运动员竞技状态不好。」根据上述断定为真，以下断定可以确定为假的是：<br />A. 有的运动员竞技状态好　B. 运动员甲竞技状态好　C. 所有运动员竞技状态都不好　D. 所有运动员竞技状态都好</div>
              <div className="a"><b>思路（程意式）：</b>知真求假 → 直接找矛盾。「有些A非B」的矛盾是「所有A是B」→ 选 D。注意 A、B、C 都是「不确定真假」，不能选。</div>
            </ExerciseCard>
      
            <div className="steps">
              <div className="step"><div className="no">1</div><div className="bd"><b>真假话问题四步走（找矛盾 → 定位置 → 变假为真 → 筛选答案）：</b>① 在题干几句话里找矛盾关系，确定真话/假话必在其中；② 由题目给的真话/假话数量，推出其余句子的真假；③ 把假的变真（取其矛盾/反面）；④ 代入选项选出答案。</div></div>
            </div>
            <h4>母题六 · 题干「直言」+ 问法「确定真假 / 不确定真假」</h4>
            <p><b>识别：</b>题干只给一句（或几句）<b>直言命题</b>，问「由此可以推出 / 可以确定真假的是」——注意问法分两种：<b>确定真假</b>与<b>不确定真假</b>。这是 3+2 六大高频母题里难度最低的一类，但每年都有，别丢。</p>
            <p><b>解题：</b>把选项逐条与<b>推出关系 + 矛盾关系 + 冲突关系</b>对一遍。</p>
            <table className="tight">
              <tr><th>选项与原句的关系</th><th>结论</th></tr>
              <tr><td>与原句<b>一致</b>；或属于推出关系（所有是 ⇒ 某个是 ⇒ 有些是；所有非 ⇒ 某个非 ⇒ 有些非）</td><td><b>必为真</b></td></tr>
              <tr><td>与原句<b>矛盾</b>（所有是 ↔ 有些非；所有非 ↔ 有些是；某个是 ↔ 某个非）</td><td><b>必为假</b></td></tr>
              <tr><td>与原句<b>冲突</b>：「某个是」为真 → 「所有非」必假；「某个非」为真 → 「所有是」必假</td><td><b>必为假</b></td></tr>
              <tr><td>只说「有些非 / 某个非」，但<b>主体是否重合不确定</b></td><td><b>不确定真假</b></td></tr>
            </table>
            <p><span className="pill pill-key">一句话记</span><b>为真</b>＝与原句一致或符合推出关系；<b>为假</b>＝矛盾或冲突；<b>其余都不确定</b>。</p>
            <ExerciseCard>
              <ExerciseTitle>例 · 母题六（确定/不确定真假）｜2022 福建事业单位</ExerciseTitle>
              <div className="q">「有些受欢迎的电视剧以乡村振兴为题材。」根据以上断定，下列哪项可以断定真假？<br />Ⅰ. 并非所有受欢迎的电视剧都不以乡村振兴为题材<br />Ⅱ. 有些受欢迎的电视剧不以乡村振兴为题材<br />Ⅲ. 凡受欢迎的电视剧都不以乡村振兴为题材<br />Ⅳ. 某电视剧不以乡村振兴为题材<br />A. 仅 Ⅰ　B. Ⅰ 和 Ⅱ　C. Ⅰ 和 Ⅲ　D. Ⅱ 和 Ⅲ</div>
              <div className="a"><b>思路（逐条对表）：</b>原句为「<b>有些 A 是 B</b>」且为真（A＝受欢迎的电视剧，B＝以乡村振兴为题材）。<br /><b>Ⅰ</b>「并非所有 A 都不 B」＝ 否定「所有 A 非 B」→ 其矛盾就是「有些 A 是 B」，与原句一致 → <b>定为真</b> ✔<br /><b>Ⅱ</b>「有些 A 非 B」——与原句可以同真，也可以一真一假 → <b>不确定</b> ✗<br /><b>Ⅲ</b>「凡 A 都不 B」＝所有 A 非 B —— 与原句是<b>矛盾关系</b> → <b>定为假</b> ✔<br /><b>Ⅳ</b>「某电视剧不以 B 为题材」——主语是另一部剧，与原句<b>主体不一致</b> → <b>不确定</b> ✗<br />能断定真假的是 Ⅰ（真）和 Ⅲ（假）→ 选 <b>C</b>。</div>
            </ExerciseCard>
      
            <ExerciseCard>
              <ExerciseTitle>例 · 真假话问题（四步走）</ExerciseTitle>
              <div className="q">某次税务检查后，四个工商管理人员有如下结论：<br />甲说：所有个体户都没纳税。　乙说：服装个体户陈老板没纳税。<br />丙说：个体户不都没纳税。　丁说：有的个体户没纳税。<br />如果四人中只有一人断定属实，则以下哪项为真？</div>
              <div className="a"><b>思路（程意四步走）：</b>① 找矛盾：甲「所有个体户都没纳税」（所有非）与丙「个体户不都没纳税」=「有些个体户纳税了」（有些是）是矛盾关系，真话必在甲、丙之间；② 定位置：只有一真 → 乙、丁必假；③ 变假为真：丁假 →「有的个体户没纳税」为假 → 其矛盾「所有个体户都纳税了」为真；④ 筛选答案：所有人都纳税 → 陈老板纳税、甲假、丙真。答案选「个体户陈老板纳税了」。</div>
            </ExerciseCard>
          </Card>
      
          
          <Card>
            <h3><span className="dot" style={{ background: '#1f6f8b' }}></span>1.2 联言命题：p 且 q（第 2 次课）</h3>
            <p><b>含义：</b>断定多种情况<b>同时为真</b>的命题，表达为 p 且 q。</p>
      
            <h4>提示信息（识别）</h4>
            <table className="tight">
              <tr><th>类型</th><th>连接词</th><th>例句</th></tr>
              <tr><td>并列词</td><td>且、和、与、既……又……</td><td>小李学了资料和判断</td></tr>
              <tr><td>递进词</td><td>而且</td><td>小李不但上课认真听讲，而且下课做作业</td></tr>
              <tr><td>转折词</td><td>但是、然而、却</td><td>虽然学习很辛苦，但一定会有收获</td></tr>
            </table>
      
            <h4>真假性：全真才真，有假则假</h4>
            <table className="tight">
              <tr><th>p（米饭）</th><th>q（馒头）</th><th>p 且 q</th></tr>
              <tr><td>✓</td><td>✓</td><td><b>✓</b></td></tr>
              <tr><td>✓</td><td>✗</td><td>✗</td></tr>
              <tr><td>✗</td><td>✓</td><td>✗</td></tr>
              <tr><td>✗</td><td>✗</td><td>✗</td></tr>
            </table>
      
            <h4>推理规则</h4>
            <ul>
              <li>已知 p 且 q 为真 → <b>p 真，q 真</b>（分解）。</li>
              <li>已知 p 且 q 为假 → <b>肯一推否一</b>：补充「p 真」可推出「q 假」；补充「q 真」可推出「p 假」。</li>
            </ul>
      
            <h4>矛盾命题（知真求假 / 知假求真直接找它）</h4>
            <div className="formula">p 且 q 的矛盾 = 非p 或 非q</div>
            <ExerciseCard>
              <ExerciseTitle>例 · 推理规则</ExerciseTitle>
              <div className="q">「小王是足球明星并且小李是网球明星。」如果上述判断为假，并且小李确实是网球明星，则以下哪项为真？</div>
              <div className="a"><b>思路：</b>p 且 q 为假 + q 真 → 肯一推否一 → p 假，即「小王不是足球明星」。</div>
            </ExerciseCard>
            <ExerciseCard>
              <ExerciseTitle>例 · 联言矛盾（知假求真）</ExerciseTitle>
              <div className="q">「小王既会唱歌又会跳舞」这一判断为假。据此，以下哪项一定为真？</div>
              <div className="a"><b>思路：</b>p 且 q 为假 → 找矛盾「非p 或 非q」→ 一定为真的是「小王不会唱歌 <b>或</b> 不会跳舞」。注意：不能推出「小王一定不会唱歌」或「一定不会跳舞」，只能推出「至少有一个不会」。</div>
            </ExerciseCard>
            <div className="jingle"><div className="jt">✏️ 口诀</div>联言「且」：<b>全真才真，有假则假；整体为假，肯一推否一</b>；找矛盾：<b>且变或、各加非</b>。</div>
          </Card>
      
          
          <Card>
            <h3><span className="dot" style={{ background: '#1f6f8b' }}></span>1.3 选言命题：p 或 q（第 2 次课）</h3>
      
            <h4>（一）相容选言命题（重点）</h4>
            <ul>
              <li><b>含义：</b>断定多种情况<b>至少有一真，可以同真</b>，表达为 p 或 q。</li>
              <li><b>提示信息：</b>……或……；或者……或者……；至少有一种。</li>
            </ul>
            <table className="tight">
              <tr><th>p（米饭）</th><th>q（馒头）</th><th>p 或 q</th></tr>
              <tr><td>✓</td><td>✓</td><td>✓</td></tr>
              <tr><td>✓</td><td>✗</td><td>✓</td></tr>
              <tr><td>✗</td><td>✓</td><td>✓</td></tr>
              <tr><td>✗</td><td>✗</td><td><b>✗</b></td></tr>
            </table>
            <ul>
              <li>已知 p、q 独立情况 → 整体：<b>有真则真，全假才假</b>。</li>
              <li>已知 p 或 q 整体为真 → p、q：<b>否一推肯一</b>（否定一个能推出另一个真，即「或」命题否定一个支命题，可以推出另一个支命题成立）。</li>
            </ul>
            <div className="formula">p 或 q 的矛盾 = 非p 且 非q　　等价转换：p 或 q = 非p → q = 非q → p</div>
      
            <h4>（二）选言的「下反对关系」（夸夸刷补充 · 真假话题直接套）</h4>
            <p>真假话题里除了直言的上下反对，<b>选言也有「必有 1 真」的下反对</b>。这两组背下来，遇到「只有一句是真的」就能直接锁定范围：</p>
            <table className="tight">
              <tr><th>下反对（必有 1 真 · 可同真）</th><th>为什么不能同假</th></tr>
              <tr><td><b>A 或 X</b>　↔　<b>非 A</b></td><td>「A 或 X」若为假 → A 假、X 假 → 那么「非 A」必真</td></tr>
              <tr><td><b>A 或 X</b>　↔　<b>非 A 或 X</b></td><td>两句都假 → 第一句要求「A 假且 X 假」，第二句要求「A 真且 X 假」，自相矛盾</td></tr>
            </table>
            <div className="jingle"><div className="jt">✏️ 反对关系总表（夸夸刷「知识回顾」原表）</div>
              <b>必有 1 假（上反对）：</b>所有是 ↔ 所有非。<br />
              <b>必有 1 真（下反对）：</b>有些是 ↔ 有些非；<b>A 或 X ↔ 非 A</b>；<b>A 或 X ↔ 非 A 或 X</b>。
            </div>
            <p><span className="pill pill-key">怎么套</span>题干限「<b>只有一句是真</b>」→ 找必有 1 真的那一组；题干限「<b>只有一句是假</b>」→ 找必有 1 假的那一组。真（假）话既然锁在这两句里，<b>其余句子必假（必真）</b>，先拿它们推出事实即可。<br />题干给的是「p ⇒ q」、找不到矛盾时，<b>先把它翻译成「非 p 或 q」</b>，再按上表找 —— 这一步是 2023 广东、2025 浙江那几道真题的题眼。</p>
      
            <ExerciseCard>
              <ExerciseTitle>例 · 下反对（A 或 X 与 非 A）｜2023 广东事业单位</ExerciseTitle>
              <div className="q">某写作大赛「最佳侦探小说」作者获奖名单已经公布，已知：<br />（1）只要甲获奖，乙就不获奖；<br />（2）只要乙不获奖，甲就获奖；<br />（3）甲获奖。<br />已知这三个判断只有一个真、两个假。由此推出：<br />A. 甲、乙都获奖　B. 甲、乙都未获奖　C. 甲获奖，乙未获奖　D. 甲未获奖，乙获奖</div>
              <div className="a"><b>思路（程意式）：</b>（1）「只要甲获奖乙就不获奖」＝ <b>非甲 或 非乙</b>。它的第一个支命题是「甲不获奖」，正好与（3）「甲获奖」互为<b>下反对（A 或 X 与 非 A）→ 必有 1 真</b>。<br />只有 1 真 → 真话锁在（1）（3）里 → <b>（2）必假</b>。（2）假 ＝「非乙 ⇒ 甲」为假 ＝ <b>乙不获奖 且 甲不获奖</b>。<br />甲不获奖 →（3）假 →（1）真，正好一真 ✔ → 选 <b>B</b>。</div>
            </ExerciseCard>
      
            <ExerciseCard>
              <ExerciseTitle>例 · 下反对（A 或 X 与 非 A 或 X）｜2025 浙江</ExerciseTitle>
              <div className="q">一场歌唱比赛，甲、乙、丙、丁 4 人包揽前四名。关于排名情况，4 名观众的猜测如下：<br />观众 1：只要乙获得亚军，甲就能获得季军；<br />观众 2：丙获得冠军，或者丁不是第四名；<br />观众 3：甲未获得季军；<br />观众 4：丙获得亚军。<br />结果发现只有 1 名观众的猜测为真，由此可以推出：<br />A. 甲获得冠军　B. 乙获得第四名　C. 丙获得亚军　D. 丁获得季军</div>
              <div className="a"><b>思路（程意式）：</b>观众 1 ＝「非乙亚军 或 甲季军」＝ <b>A 或 X</b>（取 A ＝「甲获得季军」），而观众 3「甲未获季军」正是 <b>非 A</b> → 两句互为<b>下反对，必有 1 真</b>。<br />只有 1 真 → 真话锁在观众 1、3 里 → <b>观众 2、4 必假</b>。<br />观众 4 假 → 丙不是亚军；观众 2 假 ＝「丙冠军 或 非丁第四」为假 ＝ <b>丙不是冠军 且 丁是第四</b>。<br />丙既不是冠也不是亚、丁第四 → 丙第三，甲、乙占冠亚。观众 3「甲未获季军」为真（甲只可能是冠或亚）→ 观众 1 必须为假 → 乙不是亚军 且 甲不是季军 → <b>甲冠军、乙亚军</b> → 选 <b>A</b>。</div>
            </ExerciseCard>
      
            <h4>（三）不相容选言命题（低频，了解即可）</h4>
            <ul>
              <li>要么 p，要么 q：<b>有且只有一个真</b>。</li>
              <li>矛盾：要么 p 且 q，要么非p 且非q。</li>
            </ul>
            <ExerciseCard>
              <ExerciseTitle>例 · 相容选言推理（否一推肯一）</ExerciseTitle>
              <div className="q">已知「小明去 <b>或</b> 小红去参加志愿活动」为真，且小明不去。由此可以推出：</div>
              <div className="a"><b>思路：</b>p 或 q 整体为真 + 否定 p → 否一推肯一 → q 真，即<b>小红一定去</b>。若题干把「或」换成「要么……要么……」（不相容），结论相同也是小红去，但推理依据是「有且只有一个真」。</div>
            </ExerciseCard>
            <div className="jingle"><div className="jt">✏️ 口诀</div>选言「或」：<b>有真则真，全假才假；整体为真，否一推肯一</b>；找矛盾：<b>或变且、各加非</b>。要么A要么B：<b>一真一假；同真同假才是矛盾</b>。</div>
          </Card>
      
          
          <Card>
            <h3><span className="dot" style={{ background: '#1f6f8b' }}></span>1.4 假言命题（第 2 次课 · 重中之重）</h3>
            <p>翻译推理是整套逻辑的地基，后面的综合推理、朴素逻辑全都要用到。核心就两步：<b>先翻译，后推理</b>。</p>
      
            <h4>第一步 · 翻译（背熟对应关系）</h4>
            <table className="tight">
              <tr><th>关联词</th><th>翻译</th><th>口诀</th></tr>
              <tr><td>如果A，那么B；只要A，就B；A是B的充分条件</td><td><b>A → B</b></td><td>如果就，前推后</td></tr>
              <tr><td>只有A，才B；除非A，否则不B；A是B的必要条件</td><td><b>B → A</b></td><td>只有才，后推前</td></tr>
              <tr><td>除非A，否则B</td><td><b>非A → B</b></td><td>除非否则，否前推后</td></tr>
              <tr><td>A当且仅当B</td><td>A ↔ B</td><td>充要互推</td></tr>
            </table>
            <div className="jingle"><div className="jt">✏️ 翻译口诀</div>「<b>如果就，前推后</b>；<b>只有才，后推前</b>；<b>除非否则不，后推前</b>；<b>除非否则，否前推后</b>；充分必要别搞混，<b>充前必后</b>记心间。」</div>
      
            <h4>第二步 · 推理（三大规则）</h4>
            <div className="formula">① 逆否等价：A → B = 非B → 非A（王道规则）</div>
            <div className="formula">② 递推（传递性）：A → B，B → C，可得 A → C</div>
            <p><span className="pill pill-key">传递性怎么用</span>已知 p ⇒ q、q ⇒ r、r ⇒ s → 直接串成 <b>p ⇒ q ⇒ r ⇒ s</b>。<br /><b>注意：两句推理里有相同概念时，先考虑能不能串联；有时需要先把某一句逆否，才能接上。</b>例如 p ⇒ q、非 r ⇒ 非 q、r ⇒ s —— 先把「非 r ⇒ 非 q」逆否成「q ⇒ r」，就能接成 p ⇒ q ⇒ r ⇒ s。</p>
            <div className="formula">③ 有效形式：肯前必肯后，否后必否前；<span className="hl">否前、肯后推不出确定性结论</span></div>
            <ExerciseCard>
              <ExerciseTitle>例 · 逆否等价</ExerciseTitle>
              <div className="q">古人云：「不到长城非好汉。」以下哪项与古人表达的意思一致？<br />① 到了长城的人就一定是好汉　② 如果是好汉，他一定到过长城　③ 只有好汉，才到过长城</div>
              <div className="a"><b>思路：</b>翻译：「非长城 → 非好汉」。逆否等价 → 「好汉 → 长城」，即②。①③都翻译成「长城 → 好汉」，错了。选②。</div>
            </ExerciseCard>
      
            <figure className="fig">
              <svg viewBox="0 0 640 258" role="img" aria-label="假言命题 A 推出 B 的四种推理方向">
                <text x={320} y={26} textAnchor="middle" fontSize={14} fontWeight="700" fill="#1e293b">A → B 的四种推理方向：只有「肯前」「否后」两种有效</text>
                <rect x={36} y={48} width={274} height={64} rx={9} fill="#d1fae5" stroke="#10b981" strokeWidth={1.6}></rect>
                <text x={173} y={74} textAnchor="middle" fontSize={14.5} fontWeight="700" fill="#065f46">肯前必肯后 ✅</text>
                <text x={173} y={96} textAnchor="middle" fontSize={12.5} fill="#047857">A 真 ⇒ B 真（有效）</text>
                <rect x={330} y={48} width={274} height={64} rx={9} fill="#d1fae5" stroke="#10b981" strokeWidth={1.6}></rect>
                <text x={467} y={74} textAnchor="middle" fontSize={14.5} fontWeight="700" fill="#065f46">否后必否前 ✅</text>
                <text x={467} y={96} textAnchor="middle" fontSize={12.5} fill="#047857">B 假 ⇒ A 假（有效）</text>
                <rect x={36} y={124} width={274} height={64} rx={9} fill="#f1f5f9" stroke="#cbd5e1" strokeWidth={1.6}></rect>
                <text x={173} y={150} textAnchor="middle" fontSize={14.5} fontWeight="700" fill="#475569">否前 ❌</text>
                <text x={173} y={172} textAnchor="middle" fontSize={12.5} fill="#64748b">A 假 ⇒ 推不出任何确定结论</text>
                <rect x={330} y={124} width={274} height={64} rx={9} fill="#f1f5f9" stroke="#cbd5e1" strokeWidth={1.6}></rect>
                <text x={467} y={150} textAnchor="middle" fontSize={14.5} fontWeight="700" fill="#475569">肯后 ❌</text>
                <text x={467} y={172} textAnchor="middle" fontSize={12.5} fill="#64748b">B 真 ⇒ 推不出任何确定结论</text>
                <text x={320} y={218} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#b45309">逆否等价（王道）：A → B ≡ 非 B → 非 A　｜　矛盾：A → B 的矛盾 = A 且 非 B</text>
                <text x={320} y={242} textAnchor="middle" fontSize={12} fill="#334155">递推：A → B，B → C ⇒ A → C　｜　A → B 等价于「非 A 或 B」（或与推互转，综合推理的地基）</text>
              </svg>
              <figcaption>图：假言推理的四种方向 —— 「否前」「肯后」都推不出确定结论，是命题人最常设的陷阱</figcaption>
            </figure>
      
            <h4>矛盾与等价（连接命题部分的关键）</h4>
            <div className="formula">A → B 的矛盾 = A 且 非B（最强否定，反驳它直接找这个）</div>
            <div className="formula">A → B 等价于 非A 或 B（「或」与「推」互转，为综合推理奠基）</div>
            <ExerciseCard>
              <ExerciseTitle>例 · 假言矛盾（知假求真）</ExerciseTitle>
              <div className="q">「如果明天下雨，那么运动会取消」为假。据此可以推出：</div>
              <div className="a"><b>思路：</b>A → B 的矛盾 = <b>A 且 非B</b> → 推出「明天下雨 <b>且</b> 运动会没有取消」。注意别选「明天不下雨」——那是「否前」，从假言为假推不出。</div>
            </ExerciseCard>
      
            <h4>知真求假 / 知假求真类：直接找矛盾（汇总）</h4>
            <table className="tight">
              <tr><th>命题</th><th>矛盾命题</th></tr>
              <tr><td>联言：p 且 q</td><td>非p 或 非q</td></tr>
              <tr><td>相容选言：p 或 q</td><td>非p 且 非q</td></tr>
              <tr><td>不相容选言：要么p，要么q</td><td>要么p且q，要么非p且非q</td></tr>
              <tr><td>假言：p → q</td><td><b>p 且 非q</b></td></tr>
            </table>
            <div className="jingle"><div className="jt">✏️ 口诀</div>「<b>逆否等价是王道，否后必否前</b>牢牢记」；「<b>真假判断看矛盾，A且非B一招毙</b>」；「<b>或且转化德摩根</b>，去括号时分负号」。德摩根：非(A且B) = 非A或非B；非(A或B) = 非A且非B。</div>
          </Card>
      
          
          <Card>
            <h3><span className="dot" style={{ background: '#1f6f8b' }}></span>1.5 综合推理（第 3 次课 · 母题二）</h3>
            <p><b>识别（三个特征一起看）：</b>① 题干<b>涉及假言命题</b>（有「→」）；② 选项<b>多为事实判断</b>——几乎没有假言，或只有很少假言；③ 问法多为<b>「知真求真」</b>，题干没提真假时一律<b>默认为真</b>。</p>
            <p><b>三档递进（对应 3+2 的母题二 → 三 → 四）：</b>① 有确定信息 → 从确定信息破题；② 有数量限定 → 用数量限定破题；③ 两者都推不动 → 假设法 + 二难推理。<b>按这个顺序试，前一档走得通就不用下一档。</b></p>
      
            <h4>母题二 · 先看题目让你推哪一头（方向错了白推）</h4>
            <table className="tight">
              <tr><th>方向</th><th>题干长什么样</th><th>怎么下手</th></tr>
              <tr><td><b>给前提推结论</b></td><td>给若干条件 + 确定事实，问「由此可以推出」</td><td>顺着条件往下推，推到底再看选项</td></tr>
              <tr><td><b>给结论推前提</b></td><td>问「需要补充哪项前提 / 哪项为真，才能推出……」</td><td>把结论当已知往回倒推（或直接代入选项验证）</td></tr>
            </table>
            <p><span className="pill pill-key">选前提的秒杀长相</span>正确选项往往<b>箭头后跟结论完全一致、箭头前跟已知条件完全一致</b>——看到这种长相的先留一个心眼。</p>
      
            <h4>母题三 · 一、有确定信息 → 从确定信息破题</h4>
            <div className="steps">
              <div className="step"><div className="no">1</div><div className="bd">找出题干里的<b>确定事实</b>（直接给的事实，或一眼能算出的事实），把它当推理起点。</div></div>
              <div className="step"><div className="no">2</div><div className="bd">沿与它<b>相关</b>的条件往下推：找相关 ＝ 找跟它出现在<b>同一句假言</b>里的那个概念。</div></div>
              <div className="step"><div className="no">3</div><div className="bd">能一路推到答案的，就<b>不必逐个选项去验</b>。</div></div>
            </div>
            <ExerciseCard>
              <ExerciseTitle>例 · 有确定信息（顺推）｜2024 陕西事业单位</ExerciseTitle>
              <div className="q">小乔这个冬天如果去哈尔滨，就要去冰雪大世界和中央大街，否则就不去；只有和小刘同游，小乔才会去冰雪大世界或圣·索菲亚大教堂；如果和小刘同游，小乔一定要和小刘做约定；如果小乔和小刘做约定，则小刘这个冬天一定要有时间。遗憾的是，这个冬天，小刘的公司来了一项紧急任务，相关人员一律不得请假，小刘也不例外。<br />由此可以推出：<br />A. 小乔这个冬天去中央大街　B. 小乔这个冬天去冰雪大世界　C. 小乔这个冬天没有去哈尔滨　D. 小乔这个冬天去圣·索菲亚大教堂</div>
              <div className="a"><b>思路（从确定信息出发，一路逆否）：</b>确定信息 ＝「<b>小刘这个冬天没有时间</b>」。<br />④ 做约定 ⇒ 小刘有时间；小刘没时间 → <b>否后否前</b> → 没做约定；<br />③ 同游 ⇒ 做约定；没做约定 → <b>否后否前</b> → 没同游；<br />②「只有和小刘同游，才会去冰雪大世界或圣·索菲亚」＝ 去（冰雪 <b>或</b> 索菲亚）⇒ 同游；没同游 → <b>否后否前</b> → 冰雪、索菲亚都不去；<br />① 去哈尔滨 ⇒ 去冰雪 <b>且</b> 去中央大街；「且」有一假则整体假 → 不去冰雪 → ① 的否后 → <b>不去哈尔滨</b> → 选 <b>C</b>。</div>
            </ExerciseCard>
            <ExerciseCard>
              <ExerciseTitle>例 · 有确定信息（用「否后否前」连锁）｜2023 安徽事业单位</ExerciseTitle>
              <div className="q">谢某举办生日派对，邀请了云、苏、潘、葛、奚五个人参加，实际参加情况如下：<br />（1）只有云参加，苏、潘、葛才会都跟着参加；<br />（2）如果苏不参加，则潘也不参加；<br />（3）如果潘不参加，则奚也不参加；<br />（4）云没参加；<br />（5）奚参加了。<br />由此可以推出：<br />A. 苏、潘、葛都参加了　B. 苏和潘都参加了　C. 潘和葛都参加了　D. 苏和葛都参加了</div>
              <div className="a"><b>思路（两条确定信息，一人一条链）：</b>（5）<b>奚参加了</b> → 由（3）「非潘 ⇒ 非奚」否后否前 → <b>潘参加</b>；由（2）「非苏 ⇒ 非潘」否后否前 → <b>苏参加</b>。<br />（4）<b>云没参加</b> → 由（1）「苏且潘且葛参加 ⇒ 云参加」，否后否前 → 并非「苏且潘且葛都参加」＝至少一人没参加；苏、潘都已参加 → <b>葛没参加</b>。<br />所以苏、潘参加，葛没参加 → 选 <b>B</b>。</div>
            </ExerciseCard>
      
            <h4>母题三 · 二、有数量限定 → 用数量限定破题</h4>
            <div className="steps">
              <div className="step"><div className="no">1</div><div className="bd">题干出现数量限定（如「只有 3 盏灯亮」「每个小区 1–2 人」「3 人中选 2 人」）→ <b>先把数量算出来</b>，往往直接就是选项。</div></div>
              <div className="step"><div className="no">2</div><div className="bd">把算出的数量当作<b>确定信息</b>，代进假言命题作「<b>肯前</b>」或「<b>否后</b>」触发推理。</div></div>
            </div>
            <div className="jingle"><div className="jt">⚡ 提速指南（3+2 与夸夸刷原话 · 正确率约 90%）</div>
              <b>① 3 选 2，则 2 至少选 1。</b>——「从 3 个人里挑 2 个人」等价于「这 2 个人每个都至少被挑中一次」，可直接把「至少选 2」翻成「两个都必选」。<br />
              <b>②</b> 题干里同时出现「<b>3 选至少 1</b>」和「<b>3 选至少 2</b>」两句时，<b>直接找这两句里的共同信息</b>——那个共同信息往往就是答案。有时间再回头验证。</div>
            <ExerciseCard>
              <ExerciseTitle>例 · 数量限定｜2023 全国事业单位</ExerciseTitle>
              <div className="q">某小区一路段安装有甲、乙、丙、丁、戊 5 盏路灯，夜里某一时间段亮灯规则为：<br />① 甲、乙、丙 3 灯至少有一盏亮；<br />② 如果甲灯亮，则丁灯亮；<br />③ 如果丁灯亮，则戊灯亮；<br />④ 乙灯、戊灯至少有一盏不亮；<br />⑤ 丙灯、戊灯至少有一盏不亮。<br />若只有 3 盏灯亮，则下列哪项中的两盏灯一定亮？<br />A. 甲、乙　B. 乙、丙　C. 丙、丁　D. 丁、戊</div>
              <div className="a"><b>思路（先算数量，再代假言）：</b>先假设<b>戊不亮</b>：由③「丁亮 ⇒ 戊亮」否后否前 → <b>丁不亮</b>；由②「甲亮 ⇒ 丁亮」否后否前 → <b>甲不亮</b>。此时能亮的只剩乙、丙两盏，凑不满「3 盏亮」→ <b>假设不成立</b>，所以 <b>戊一定亮</b>。<br />戊亮 → ④「乙、戊至少一盏不亮」→ <b>乙不亮</b>；戊亮 → ⑤「丙、戊至少一盏不亮」→ <b>丙不亮</b>。<br />于是亮的正好是甲、丁、戊 3 盏（① 甲、乙、丙至少一盏亮，甲亮已满足）→ 一定亮的两盏是 <b>丁、戊</b> → 选 <b>D</b>。</div>
            </ExerciseCard>
      
            <h4>母题四 · 三、确定信息、数量限定都用不上 → 假设法 + 二难推理</h4>
            <div className="steps">
              <div className="step"><div className="no">1</div><div className="bd"><b>先验二难结构：</b>题干里出现明显的「<b>A ⇒ …</b>」又出现「<b>非A ⇒ …</b>」时，先往二难上想。</div></div>
              <div className="step"><div className="no">2</div><div className="bd">不是二难，就<b>假设找冲突</b>：假设后推演，看是否 ① 与题干已有信息冲突（尤其是数量限定）② 推出两句互相冲突的话 —— 冲突则假设被推翻；一路顺下去无冲突且恒成立，则假设成立。</div></div>
            </div>
            <div className="formula">二难推理：A → B；非A → B　⇒　B 恒真</div>
            <p><b>二难的两种用法</b>（3+2 原话）：<br />① <b>假设情况①后产生冲突 → 说明情况①不成立 → 情况②成立</b>；<br />② <b>假设情况①可得 B，假设情况②也可得 B → B 恒成立</b>（就是上面那条公式）。</p>
            <h5>假设法的「起点」怎么选（别乱假设）</h5>
            <table className="tight">
              <tr><th>题干形态</th><th>假设起点</th></tr>
              <tr><td><b>连锁假言</b>（A ⇒ B ⇒ C 串成一条链）</td><td>从<b>假言的头或尾</b>假设</td></tr>
              <tr><td><b>非连锁假言</b></td><td>① 先试<b>假言的头 / 尾</b>；② 再试<b>出现次数最多的元素</b></td></tr>
            </table>
            <ExerciseCard>
              <ExerciseTitle>例 · 二难推理｜2023 北京</ExerciseTitle>
              <div className="q">小刘是某大学计算机科学专业的大四学生。<br />小张说：如果小刘喜欢离散数学，那么他会报考计算机科学专业的研究生。<br />小王说：如果小刘不喜欢离散数学，那么他会成为算法程序员。<br />小赵说：如果小刘不报考计算机科学专业的研究生，那么他不能成为算法程序员。<br />如果小张、小王、小赵的论断均为真，那么以下哪项一定为真？<br />A. 小刘报考了计算机科学专业的研究生　B. 小刘没有报考计算机科学专业的研究生　C. 小刘喜欢离散数学　D. 小刘不喜欢离散数学</div>
              <div className="a"><b>思路（认出二难结构）：</b>① 喜欢 ⇒ 报计算机；② 不喜欢 ⇒ 算法程序员；③ 不报计算机 ⇒ 不能成为算法程序员（逆否：<b>成为算法程序员 ⇒ 报计算机</b>）。<br />「喜欢」与「不喜欢」涵盖全部情况，<b>两者却都能推出「报计算机」</b>（② 推出算法程序员，再由 ③ 的逆否推出报计算机）→ <b>报计算机恒真</b> → 选 <b>A</b>。</div>
            </ExerciseCard>
            <ExerciseCard>
              <ExerciseTitle>例 · 假设找冲突｜2024 河南事业单位</ExerciseTitle>
              <div className="q">某高校需派 2 名左右的学生到乡村支教，学校将人选集中在甲、乙、丙三人身上，并达成一致意见：<br />① 如果甲去，那么乙也去；<br />② 只有丙去，甲才不会去；<br />③ 如果乙去，那么丙就去；<br />④ 甲和丙不可能都去。<br />据此可知：<br />A. 甲会去，而丙不会去　B. 乙会去，而甲不会去　C. 丙会去，而甲不会去　D. 丙会去，而乙不会去</div>
              <div className="a"><b>思路（假设甲去，找冲突）：</b>假设<b>甲去</b> → ① 肯前 → 乙去 → ③ 肯前 → 丙去；但 ④ 甲和丙不可能都去，甲去则丙不能去 → <b>自相矛盾</b>，假设推翻 → <b>甲不去</b>。<br />甲不去 → ②「非甲 ⇒ 丙」肯前 → <b>丙去</b>。乙去不去推不出（①③ 只能正推，不能反推）→ 只能确定「丙去、甲不去」→ 选 <b>C</b>。</div>
            </ExerciseCard>
      
            <h5>考场应急策略（夸夸刷原话 · 正确率约 90%）</h5>
            <div className="jingle"><div className="jt">⚡ 「给结论推前提」题型的兜底两招</div><b>① 出现 2 次的概念全部消除；② 剩下 2 个选项代入验证。</b>——题干里出现过两次的概念，一般就是被「消掉」的中转站，不会是答案要补的前提。</div>
            <ExerciseCard>
              <ExerciseTitle>例 · 应急策略｜2025 江苏</ExerciseTitle>
              <div className="q">滨海大学选派小赵、小钱、小孙、小李、小周组成辩论队，参加大学生辩论赛。已知：<br />（1）如果小赵是哲学专业的，那么小周就不是经济学专业的；<br />（2）或者小钱是法医专业的，或者小赵是哲学专业的；<br />（3）小李和小孙至少有一人是计算机专业的；<br />（4）如果小孙是计算机专业的，那么小钱不是法医专业的。<br />增加以下哪项作为前提，可以推出「小李是计算机专业的」？<br />A. 小钱不是法医专业的　B. 小孙是计算机专业的　C. 小赵是哲学专业的　D. 小周是经济学专业的</div>
              <div className="a"><b>思路（先消 2 次，再代 2 项）：</b>出现两次的概念是「<b>小赵是哲学</b>」（1、2 句）和「<b>小孙是计算机</b>」（3、4 句）→ 先把<b>选项 B、C 消掉</b>，只剩 A、D 两个再验。<br />验 <b>D</b>：小周是经济 →（1）否后否前 → <b>小赵不是哲学</b> →（2）否一推肯一 → <b>小钱是法医</b> →（4）否后否前 → <b>小孙不是计算机</b> →（3）否一推肯一 → <b>小李是计算机</b> ✔<br />验 A：小钱不是法医，与（2）（4）都不冲突，推不出小孙的确定情况，也就定不下小李 ✗<br />→ 选 <b>D</b>。</div>
            </ExerciseCard>
      
            <h5>两个高频「拓展 / 避坑」公式</h5>
            <table className="tight">
              <tr><th>公式</th><th>怎么用</th></tr>
              <tr><td><b>拓展：</b>A ⇒ B；C ⇒ D　⇒　<b>A 或 C ⇒ B 或 D</b></td><td>题干只有「或」的关系（推不出单个），但两个箭头可以<b>打包一起带走</b>——结论也写成「或」，往往就是答案</td></tr>
              <tr><td><b>避坑：</b>「A、B 不能都有」＝「A、B <b>至多选一个</b>」＝ <b>¬A 或 ¬B</b></td><td>「不能都有」不是「都不能有」，翻译成「或」，别翻成「且非」</td></tr>
            </table>
            <ExerciseCard>
              <ExerciseTitle>例 · 拓展公式（A 或 C ⇒ B 或 D）｜2021 安徽事业单位</ExerciseTitle>
              <div className="q">某中学举办主题晚会，筹办教师遵循以下原则：<br />① 如果有歌舞表演，那么也要有传统乐器表演；<br />② 如果没有诗歌朗诵表演，那么必须有魔术表演；<br />③ 水彩画表演和沙画表演不能都有；<br />④ 如果没有歌舞表演而有诗歌朗诵表演，则需要有水彩画表演。<br />假定晚会中有沙画表演，下列哪项一定是真的？<br />A. 晚会中有歌舞表演　B. 晚会中有诗歌朗诵表演　C. 晚会中有传统乐器表演或魔术表演　D. 晚会中没有传统乐器表演和魔术表演</div>
              <div className="a"><b>思路（拓展公式一步到位）：</b>有沙画 → ③「水彩、沙画不能都有」＝ ¬水彩 或 ¬沙画 → 沙画有 → <b>没有水彩画</b>。<br />④「没有歌舞 <b>且</b> 有诗歌 ⇒ 有水彩」，现在没有水彩 → ④ 的<b>否后否前</b> → 并非「没有歌舞且有诗歌」＝ <b>有歌舞 或 没有诗歌</b>。<br />套拓展公式：① 歌舞 ⇒ 传统乐器；② 非诗歌 ⇒ 魔术 →「歌舞 或 非诗歌」⇒ <b>传统乐器 或 魔术</b> → 选 <b>C</b>。</div>
            </ExerciseCard>
            <div className="warn"><div className="wt">⚠️ 易错点（综合推理三连）</div>
              <ul>
                <li><b>肯后推不出</b>：「收入得到保障 → 资源良性循环」是「收入保障 ⇒ 良性循环」的肯后，推不出。</li>
                <li><b>否前推不出</b>：「禁止捕鱼 → 收入有保障」是「非禁止 ⇒ 枯竭」之外的否前形式，推不出。</li>
                <li>整体顺序永远是：<b>先整句翻译 → 找确定信息 → 算数量限定 → 最后才假设 / 二难</b>。</li>
              </ul>
            </div>
          </Card>
      
            <Card>
            <h3><span className="dot" style={{ background: '#1f6f8b' }}></span>1.6 真假话（母题三 · 题干信息有真有假）</h3>
            <h4>母题三 · 真假话（题干信息有真有假）</h4>
            <p><b>识别：</b>题干给出几句话，并明确「有真有假 / 只有一句是真的 / 只有一句是假的 / 两真两假」。</p>
            <p><b>顺序：先看能不能套套路，套不上再走非套路。</b></p>
      
            <h5>套路零 · 先把「矛盾 / 反对」背熟（夸夸刷「知识回顾」原表，一找时照着扫）</h5>
            <table className="tight">
              <tr><th>原判断</th><th>矛盾（必一真一假）</th></tr>
              <tr><td>p 且 q</td><td>非p <b>或</b> 非q</td></tr>
              <tr><td>p 或 q</td><td>非p <b>且</b> 非q</td></tr>
              <tr><td>p ⇒ q</td><td><b>p 且 非q</b></td></tr>
              <tr><td>要么 p，要么 q</td><td>要么「p 且 q」，要么「非p 且 非q」</td></tr>
              <tr><td>某个是</td><td>某个非</td></tr>
              <tr><td>所有是</td><td>有些非</td></tr>
              <tr><td>所有非</td><td>有些是</td></tr>
            </table>
            <p><b>共同方式：在整句前面加「并非」。</b>记住这一条，上表不用死背。</p>
            <table className="tight">
              <tr><th>反对关系</th><th>性质</th><th>题干怎么限就用它</th></tr>
              <tr><td>所有是 ↔ 所有非</td><td><b>必有 1 假</b>（可同假、不可同真）</td><td>「只有一句是假的」</td></tr>
              <tr><td>有些是 ↔ 有些非</td><td><b>必有 1 真</b>（可同真、不可同假）</td><td>「只有一句是真的」</td></tr>
              <tr><td><b>A 或 X ↔ 非 A</b></td><td><b>必有 1 真</b></td><td>同上（选言的下反对，见 1.3）</td></tr>
              <tr><td><b>A 或 X ↔ 非 A 或 X</b></td><td><b>必有 1 真</b></td><td>同上</td></tr>
            </table>
      
            <h5>套路一 · 反对关系题目（最高频，见 1.1 秒杀技）</h5>
            <table className="tight">
              <tr><th>题干特点（3 句话）</th><th>限定</th><th>秒杀技</th></tr>
              <tr><td>出现「所有是 + 所有非」</td><td>只有<b>一假</b></td><td><b>顺着第三句，变所有</b></td></tr>
              <tr><td>出现「有些是 + 有些非」</td><td>只有<b>一真</b></td><td><b>反着第三句，变所有</b></td></tr>
            </table>
      
            <h5>套路二 · 冠军模型（限定只有一人被选）</h5>
            <div className="jingle">
              <div className="jt">冠军模型口诀</div>
              <b>题干有几真，就选出现几次的人。</b>
            </div>
            <p><span className="pill pill-key">关键一步</span>先把每个人的话都<b>转化成「谁可以是冠军」</b>（把「或者」展开成候选名单、把「绝不是」转成剩余名单），再数每个候选人被提到几次。</p>
            <ExerciseCard>
              <ExerciseTitle>例 · 冠军模型</ExerciseTitle>
              <div className="q">甲、乙、丙、丁、戊、己 6 人争夺一场比赛的冠军。张明、王刚和李伟对比赛结果进行了预判：<br />张明：冠军不是甲，就是乙。<br />王刚：冠军或者是丙，或者是丁。<br />李伟：丙、戊、己绝不可能是冠军。<br />事后得知，只有一人的预判是正确的。根据以上陈述，可以推出冠军是：<br />A. 甲　B. 乙　C. 丙　D. 丁</div>
              <div className="a"><b>思路（先转化再数数）：</b>把三句话都转成「谁可以是冠军」——<br />张明 → 甲 / 乙；王刚 → 丙 / 丁；李伟 → 甲 / 乙 / 丁（剩下三个）。<br />数每个候选人被提到几次：甲 2 次、乙 2 次、丙 1 次、丁 2 次、戊 0 次、己 0 次。<br />题干说<b>只有一真</b>，就选被提到 <b>1 次</b> 的人 → <b>丙</b> → 选 C。<br />（验证：冠军为丙时，只有王刚说对，符合「只有一人预判正确」。）</div>
            </ExerciseCard>
      
            <h5>套路三 · 每人的话半对半错（人数 = 物数）</h5>
            <table className="tight">
              <tr><th>题干是否限定「每个 X 都有人猜对」</th><th>解法</th></tr>
              <tr><td><b>限定了</b>（每个对象都至少被猜对一次）</td><td><b>只出现一次的信息一定为真</b> —— 哪个组合在所有猜测里只出现一次，它就是对的</td></tr>
              <tr><td><b>没限定</b></td><td><b>找关联</b>：某个人的一句话里有两个元素，分别去关联另一人的两句话</td></tr>
            </table>
            <p><span className="pill pill-key">兜底</span>上面两招都推不动时，就<b>假设「只出现一次的信息为真」，或假设「第一个人后半句为真」</b>，代入验证。</p>
            <ExerciseCard>
              <ExerciseTitle>例 · 半对半错（每个柜子都有人猜对）</ExerciseTitle>
              <div className="q">档案室有五个柜子，分别放着教育学院、体育学院、人文学院、管理学院和信息学院的资料。五位同学的猜测如下：<br />甲：第二个柜子是教育学院的，第三个柜子是体育学院的。<br />乙：第二个柜子是人文学院的，第四个柜子是管理学院的。<br />丙：第一个柜子是管理学院的，第五个柜子是信息学院的。<br />丁：第三个柜子是人文学院的，第四个柜子是信息学院的。<br />戊：第二个柜子是体育学院的，第五个柜子是教育学院的。<br />打开柜子后发现，每个人都只猜对了一半，而且每个柜子都有一个人猜对。由此可以推出：<br />A. 第一个柜子里放着人文学院的资料　B. 第二个柜子里放着教育学院的资料　C. 第三个柜子里放着管理学院的资料　D. 第四个柜子里放着信息学院的资料</div>
              <div className="a"><b>思路：</b>5 个人共猜对 5 个（每人一半），而 5 个柜子都要被猜对一次 → <b>每个柜子恰好被猜中一次</b>。<br />先看柜子 1：只有丙猜了「1 = 管理」→ 它<b>必然正确</b>（否则柜子 1 没人猜对）→ 1 = 管理，同时丙的后半句「5 = 信息」为错。<br />再看柜子 4：只有乙（4 = 管理）和丁（4 = 信息）猜过。管理已被柜子 1 占用 → 乙的「4 = 管理」错 → 乙的「<b>2 = 人文</b>」对。<br />顺下去：2 = 人文 → 甲的「2 = 教育」错 → 甲的「3 = 体育」对 → 3 = 体育；丁的「3 = 人文」错 → 丁的「<b>4 = 信息</b>」对；戊的「2 = 体育」错 → 戊的「5 = 教育」对。<br />结果：1 管理、2 人文、3 体育、4 信息、5 教育 → 选 <b>D</b>。</div>
            </ExerciseCard>
      
            <h5>套路四 · 对同一对象的猜测（一人全对、一人全错、一人一对一错）</h5>
            <p><b>解题：先定位「提到次数最多的信息」并定为真，再代入验证。</b></p>
      
            <h5>非套路 · 一找二绕三回</h5>
            <div className="steps">
              <div className="step"><div className="no">1</div><div className="bd"><b>一找</b>：找<b>矛盾</b>（一真一假）或<b>反对</b>（必有 1 真 / 必有 1 假）的两句话 —— 真话假话必在其中。找矛盾时，<b>先定位「讨论主体一致」的两句话</b>。</div></div>
              <div className="step"><div className="no">2</div><div className="bd"><b>二绕</b>：绕开这对关系，看其余句子的真假，推出真实情况。<b>二绕后要及时找答案</b>，别急着回头。</div></div>
              <div className="step"><div className="no">3</div><div className="bd"><b>三回</b>：带着已知的真实情况回到矛盾里，判断这对关系谁真谁假。<b>优先带回「非假言句」</b>。</div></div>
            </div>
            <p><span className="pill pill-key">提速</span>两真两假题：二绕时会剩下一真一假，此时「<b>有些 / 至少有一个 / 或</b>」表述的那句<b>一定是真</b>。</p>
            <p><span className="pill pill-key">注意</span><b>如果题干是「两真两假」，在二绕处一般需要假设</b>——因为剩下的两句谁真谁假还不能直接定，要假设一种情况代进去看是否冲突。</p>
            <p><span className="pill pill-key">避坑</span>题干出现「p ⇒ q」却找不到矛盾时，把它<b>转化成「非 p 或 q」</b>再去找 —— 这样往往就能和另一句凑成矛盾。</p>
            <ExerciseCard>
              <ExerciseTitle>例 · 一找二绕三回</ExerciseTitle>
              <div className="q">某公司颁奖活动现场，最后特等奖获得者将在甲、乙、丙、丁四个员工中产生。主持人现场让他们四人猜结果：<br />甲说：「我猜是丙得奖。」<br />乙说：「不可能是我得奖。」<br />丙说：「不是我的名字。」<br />丁说：「绝对是甲得奖啦！」<br />结果只有一人猜对。由此可知，特等奖获得者是：<br />A. 甲　B. 乙　C. 丙　D. 丁</div>
              <div className="a"><b>思路：</b>① <b>一找</b>：甲「是丙」与丙「不是丙」是<b>矛盾</b>（必有一真一假）→ 唯一的那句真话就在甲、丙之间；② <b>二绕</b>：乙、丁都是假话 → 乙「不是我」为假 → <b>得奖者是乙</b>；丁「是甲」为假 → 不是甲；③ <b>三回</b>：得奖者是乙 → 甲说「是丙」为假、丙说「不是丙」为真，恰好一真一假 ✔ → 选 <b>B</b>。</div>
            </ExerciseCard>
      
            <h5>非套路 · 假设法（重点考「假设找冲突」）</h5>
            <p><b>假设起点：</b>基础起点是<b>确定信息（较少的时候）</b>和<b>出现次数最多的信息</b>；思维拔高则是看<b>推出关系</b>。<br /><b>怎么做：</b>假设后去<b>找冲突</b>（与题干已知信息冲突、或推出两句相互冲突的话）→ 该假设被推翻；若假设后一路顺下去无冲突且恒成立，则假设成立。</p>
          </Card>
      
              
          <Card>
            <h3><span className="dot" style={{ background: '#1f6f8b' }}></span>1.7 三段论（第 4 次课）</h3>
            <p><b>识别：</b>题干出现<b>多句「所有」「有些」</b>的句子 → 直接往三段论上想。</p>
            <p><b>什么是三段论：</b>由两个含共同项的性质判断作前提，推出一个新的性质判断作结论。标准形式：<b>所有 A 是 B，所有 B 是 C ⇒ 所有 A 是 C</b>。这里的 B 是连接 A 与 C 的桥梁，叫<b>中项</b>（前提里出现两次、结论里不出现）。</p>
      
            <h4>一、两种题型（先看问法再动手）</h4>
            <table className="tight">
              <tr><th>题型</th><th>问法</th><th>解法</th></tr>
              <tr><td><b>结论型</b></td><td>「可以得出 / 由此可以推出 / 一定为真」</td><td><b>画图法</b></td></tr>
              <tr><td><b>前提型</b></td><td>「需要补充哪项作为前提 / 最能加强上述论断」</td><td><b>排除法</b>（＋拆分结论法）</td></tr>
            </table>
      
            <h4>二、结论型 · 画图法（程意口诀）</h4>
            <div className="jingle">
              <div className="jt">画图口诀</div>
              <b>先画所有，再画有些；所有画圈，有些画点；圆环可空，点可放大。</b>
            </div>
            <table className="tight">
              <tr><th>命题</th><th>怎么画</th></tr>
              <tr><td>所有 A 是 B</td><td>画一个 A 圈，<b>整个塞进 B 圈里</b></td></tr>
              <tr><td>所有 A 非 B</td><td>画 A、B 两个圈，<b>完全不挨着</b></td></tr>
              <tr><td>有些 A 是 B</td><td>A、B <b>必须有重叠</b>，在重叠处点一个点</td></tr>
              <tr><td>有些 A 非 B</td><td>在 A 圈内、B 圈外点一个点</td></tr>
            </table>
            <div className="jingle"><div className="jt">✏️ 画图的两个前提</div><b>圆环可空：</b>圈里可以什么都没有 ——「所有」不承诺「存在」。<br /><b>点可放大：</b>需要时把点放大成圈（有些 A 是 B ⇔ 有些 B 是 A）。</div>
      
            <figure className="fig fig-narrow">
              <svg viewBox="0 0 300 620" role="img" aria-label="三段论画图法：四种命题的画法">
                <text x={150} y={18} textAnchor="middle" fontSize={13} fontWeight="700" fill="#1e293b">三段论画图法：四种命题怎么画</text>
      
                <text x={12} y={46} fontSize={12.5} fontWeight="700" fill="#1e3a8a">① 所有 A 是 B —— A 圈塞进 B 圈</text>
                <circle cx={150} cy={123} r={52} fill="#dbeafe" stroke="#2563eb" strokeWidth={1.6} />
                <circle cx={150} cy={109} r={25} fill="#93c5fd" stroke="#1d4ed8" strokeWidth={1.5} />
                <text x={150} y={114} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#0c2d6b">A</text>
                <text x={150} y={157} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#1d4ed8">B</text>
      
                <text x={12} y={204} fontSize={12.5} fontWeight="700" fill="#1e3a8a">② 所有 A 非 B —— 两个圈分离</text>
                <circle cx={105} cy={280} r={44} fill="#dbeafe" stroke="#2563eb" strokeWidth={1.6} />
                <text x={105} y={285} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#0c2d6b">A</text>
                <circle cx={205} cy={280} r={44} fill="#e2e8f0" stroke="#64748b" strokeWidth={1.6} />
                <text x={205} y={285} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#334155">B</text>
      
                <text x={12} y={362} fontSize={12.5} fontWeight="700" fill="#065f46">③ 有些 A 是 B —— 两圈相交、重叠处打点</text>
                <circle cx={128} cy={438} r={46} fill="#d1fae5" stroke="#10b981" strokeWidth={1.6} />
                <circle cx={182} cy={438} r={46} fill="#a7f3d0" stroke="#059669" strokeWidth={1.6} />
                <circle cx={155} cy={438} r={5.5} fill="#065f46" />
                <text x={106} y={443} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#065f46">A</text>
                <text x={206} y={443} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#065f46">B</text>
      
                <text x={12} y={520} fontSize={12.5} fontWeight="700" fill="#065f46">④ 有些 A 非 B —— 点在 A 圈内、B 圈外</text>
                <circle cx={112} cy={572} r={44} fill="#d1fae5" stroke="#10b981" strokeWidth={1.6} />
                <circle cx={212} cy={572} r={44} fill="#f1f5f9" stroke="#94a3b8" strokeWidth={1.6} />
                <circle cx={112} cy={572} r={5.5} fill="#065f46" />
                <text x={132} y={577} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#065f46">A</text>
                <text x={212} y={577} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#334155">B</text>
              </svg>
              <figcaption>图：三段论结论型的画图法 —— ① 圈套圈　② 圈分离　③ 两圈相交打点　④ 点在 A 圈内、B 圈外；先画所有（圈）再画有些（点），圈内可空、点可放大</figcaption>
            </figure>
      
            <h4>三、前提型 · 排除法（4 条排除原则）</h4>
            <table className="tight">
              <tr><th>#</th><th>排除原则</th><th>怎么用</th></tr>
              <tr><td>①</td><td><b>三种概念各出现两次</b></td><td>前提 + 结论里，A、B、C 三个概念每个都应出现两次；只出现一次的，就是该补的</td></tr>
              <tr><td>②</td><td><b>所有 + 所有 = 所有；有些 + 所有 = 有些</b></td><td>结论是「所有」→ 前提里不能有「有些」；结论是「有些」→ 前提里必须有「有些」</td></tr>
              <tr><td>③</td><td><b>前提和结论否定词的奇偶性一致</b></td><td>前提里有奇数个「非」→ 结论是否定；偶数个 → 结论是肯定（1 负 = 负，2 负 = 正）</td></tr>
              <tr><td>④</td><td><b>前提中有「____ 是 B ＋ 所有 B ____」结构</b></td><td>这个 B 就是<b>结论里没有出现的那个概念</b>（中项），靠它把两句话串成「所有 A 是 B」的形式</td></tr>
            </table>
            <p><span className="pill pill-key">记住这四个组合</span>三段论的前提型，四种有效组合就这四行，背下来能直接选：</p>
            <table className="tight">
              <tr><th>前提组合</th><th>必然结论</th></tr>
              <tr><td>所有 A 是 B　＋　所有 B 是 C</td><td><b>所有 A 是 C</b></td></tr>
              <tr><td>所有 A 是 B　＋　所有 B 非 C</td><td><b>所有 A 非 C</b></td></tr>
              <tr><td>有些 A 是 B　＋　所有 B 是 C</td><td><b>有些 A 是 C</b></td></tr>
              <tr><td>有些 A 是 B　＋　所有 B 非 C</td><td><b>有些 A 非 C</b></td></tr>
            </table>
      
            <h4>四、前提型的两种考法</h4>
            <p><b>考法一：题干只给 1 个前提 + 1 个结论</b> → 直接用上面四条排除原则。</p>
            <p><b>考法二：题干给了 2 个前提</b>，分两种情况：</p>
            <ul>
              <li>2 个前提中<b>有</b>「____ 是 X ＋ 所有 X ____」结构 → 把这两句<b>合成一句</b>当作大前提，题目就变回考法一。</li>
              <li>2 个前提中<b>没有</b>这种结构 → 说明两个前提里<b>有一个是无用的</b>，用结论分别与每个前提对比，就能定位该补的那一项。</li>
            </ul>
      
            <h4>五、拆分结论法（前提型的第二条路）</h4>
            <p>1. 从<b>结论</b>入手，在「是 / 非」<b>前面拆开</b>，补成「是 X ＋ 所有 X ____」。<br />2. 拿拆分后的句子去和已有前提比，哪个更相近就锁定 X，需要补充的前提也就出来了。</p>
      
            <h4>六、句式转换（核心公式，非三段论题目也能用）</h4>
            <table className="tight">
              <tr><th>原句</th><th>等价转换</th></tr>
              <tr><td>有些 A 是 B</td><td>= <b>有些 B 是 A</b>（互换即可）</td></tr>
              <tr><td>所有 A 是 B</td><td>= <b>所有非 B 是非 A</b>（逆否等价）</td></tr>
              <tr><td>所有 A 非 B</td><td>= <b>所有 B 非 A</b>（主谓互换，联项不动）</td></tr>
              <tr><td>没有（一个）A 是 B</td><td>= 所有 A 不是 B</td></tr>
              <tr><td>没有（一个）A 不是 B</td><td>= 所有 A 是 B</td></tr>
              <tr><td>A 不都是 B</td><td>= 有些 A 不是 B</td></tr>
              <tr><td>「并非」开头</td><td>去掉「并非」，<b>量项与联项同时取反</b>（所有 ↔ 有些、是 ↔ 非）</td></tr>
            </table>
      
            <h4>七、例题 · 结论型</h4>
            <ExerciseCard>
              <ExerciseTitle>例 1 · 画图法（链条串联）</ExerciseTitle>
              <div className="q">某机关举行职工秋季田径运动会。已知：所有报名参加短跑比赛的职工都报名参加铅球比赛，所有报名参加跳远比赛的职工都没有报名参加铅球比赛，报名参加跳高比赛的职工也都报名参加了跳远比赛，而没有报名参加跳高比赛的职工也没有报名参加长跑比赛。<br />根据以上陈述，可以得出以下哪项？<br />A. 有的报名参加铅球比赛的职工没有报名参加短跑比赛　B. 有的报名参加跳高比赛的职工没有参加长跑比赛　C. 所有报名参加跳远比赛的职工都报名参加长跑比赛　D. 所有报名参加短跑比赛的职工都没有报名参加长跑比赛</div>
              <div className="a"><b>思路（先串链条）：</b>「没有报名跳高的也没有报名长跑」= <b>长跑 ⇒ 跳高</b>（逆否）。于是把已知条件串成一条链：<br /><b>短跑 ⇒ 铅球 ⇒ 非跳远 ⇒ 非跳高 ⇒ 非长跑</b>。<br />所以「所有短跑者都没参加长跑」必然成立 → 选 <b>D</b>。<br />A 说铅球者里有没短跑的：铅球只说明「非跳远」，推不出与短跑的关系；B 说跳高者里有人没长跑：跳高 ⇒ 跳远 ⇒ 非铅球，但长跑 ⊆ 跳高，不能反推有人在长跑外；C 方向与题干相反。</div>
            </ExerciseCard>
      
            <ExerciseCard>
              <ExerciseTitle>例 2 · 逆否串联（三个概念两两咬合）</ExerciseTitle>
              <div className="q">某中学的教师都很有爱心。有些经常志愿献血的教师免费为学习困难学生补课，凡是资助了贫困生的教师都和困难家庭结成了帮困对子，但所有免费为学习困难学生补课的教师都没有和困难家庭结成帮困对子。<br />根据以上前提，下列哪项一定为真？<br />A. 有些经常志愿献血的教师没有资助贫困生　B. 有些资助了贫困生的教师没有志愿献血　C. 有些资助了贫困生的教师经常志愿献血　D. 有些经常志愿献血的教师跟困难家庭结成了帮困对子</div>
              <div className="a"><b>思路（先做句式转换）：</b>「免费补课 ⇒ 非结对子」；「资助 ⇒ 结对子」的逆否是「<b>非结对子 ⇒ 非资助</b>」。两句一接：<br /><b>志愿献血（有些）⇒ 免费补课 ⇒ 非结对子 ⇒ 非资助贫困生</b>。<br />所以「有些经常志愿献血的教师没有资助贫困生」成立 → 选 <b>A</b>。<br />B、C 把方向反了（「有些」不能倒着推全程）；D 与「非结对子」直接冲突。</div>
            </ExerciseCard>
      
            <ExerciseCard>
              <ExerciseTitle>例 3 · 问「不能推出」</ExerciseTitle>
              <div className="q">所有电竞专业的毕业生都支持举办电竞赛事，所有支持举办电竞赛事的人都喜欢打游戏。有的电竞专业的毕业生在电视台体育频道工作，电视台体育频道有 50 岁以上的工作人员。所有 50 岁以上的人都不喜欢打游戏。<br />由此<b>不能</b>推出的结论是：<br />A. 没有一个 50 岁以上的人支持举办电竞赛事　B. 电视台体育频道中有工作人员喜欢打游戏　C. 有的电竞专业的毕业生年龄在 50 岁以上　D. 所有电竞专业的毕业生都喜欢打游戏</div>
              <div className="a"><b>思路：</b>先串链：<b>电竞 ⇒ 支持赛事 ⇒ 打游戏</b>；又有<b>50 岁以上 ⇒ 非打游戏</b>（逆否：打游戏 ⇒ 非 50 岁以上）。<br />所以电竞专业毕业生 ⇒ 打游戏 ⇒ <b>非 50 岁以上</b> → C 与题干<b>直接冲突</b>，推不出来 → 选 <b>C</b>。<br />A：50 岁以上 ⇒ 非打游戏 ⇒ 非支持赛事 ✔；B：有的电竞毕业生在电视台 ⇒ 这些人打游戏 ✔；D：就是链条本身 ✔。</div>
            </ExerciseCard>
      
            <ExerciseCard>
              <ExerciseTitle>例 4 · 问「一定为假」</ExerciseTitle>
              <div className="q">所有法学专业的学生，都获得了法律职业资格证书；所有获得法律职业资格证书的学生，都获得了教师资格证书；有些法学专业的学生成为了公务员；有些逻辑学专业的学生也成为了公务员；所有逻辑学专业的学生都未获得教师资格证。<br />如果以上判定为真，以下哪种说法一定为假？<br />A. 一个人获得了教师资格证书，但并非是逻辑学专业的学生　B. 一个公务员，既没有获得法律职业资格证书，又不是逻辑学专业的学生　C. 一个人获得了法律职业资格证书，但并非是法学专业的学生　D. 一个人是逻辑学专业的学生，并且获得了法律职业资格证书</div>
              <div className="a"><b>思路：</b>链条是 <b>法学 ⇒ 法律资格 ⇒ 教师资格</b>，而 <b>逻辑学 ⇒ 非教师资格</b>。<br />两边一撞：法律资格 ⇒ 教师资格 ⇒ <b>非逻辑学</b>。所以「是逻辑学 且 获得法律资格」不可能同时成立 → <b>D 一定为假</b>。<br />A、C 都是「后件推前件」的常见错法，题干只给单向，所以它们可能为真；B 里「公务员」只由「有些」推出，不排除存在不符合法学的人。</div>
            </ExerciseCard>
      
            <ExerciseCard>
              <ExerciseTitle>例 5 · 只能推出「可能」</ExerciseTitle>
              <div className="q">某兴趣小组成员都是艺术特长生，有的艺术特长生体育很好，小明体育很好。<br />由此可以推出：<br />A. 小明是艺术特长生　B. 小明不是艺术特长生　C. 该兴趣小组成员体育都很好　D. 该兴趣小组成员可能体育都不好</div>
              <div className="a"><b>思路：</b>「有的艺术特长生体育很好」只说明<b>有一部分</b>特长生体育好，剩下的可以不好。兴趣小组成员都是特长生，但成员完全可能都落在「体育不好」的那部分里 → 选 <b>D</b>（「可能」表述最稳）。<br />A、B 都是拿「体育好」去肯定后件，推不出；C 是典型的「有些 ⇒ 所有」放大错误。</div>
            </ExerciseCard>
      
            <h4>八、例题 · 前提型</h4>
            <ExerciseCard>
              <ExerciseTitle>例 6 · 考法一（1 个前提 + 1 个结论）</ExerciseTitle>
              <div className="q">有些通信网络维护涉及个人信息安全问题，因而，不是所有通信网络的维护都可以外包。<br />最能加强上述论断的是：<br />A. 通信网络维护不涉及个人信息安全问题　B. 所有涉及个人信息安全问题的都不可以外包　C. 不是所有涉及个人信息安全问题的都可以外包　D. 不是所有的通信网络维护都涉及个人信息安全问题</div>
              <div className="a"><b>思路（四条排除原则）：</b>先翻译结论：「不是所有通信网络维护都可以外包」= <b>有些通信网络维护不可以外包</b>。<br />已知前提：有些 A（通信维护）是 B（涉及信息安全）；要得结论：有些 A 非 C（不可以外包）。<br />按「有些 A 是 B ＋ 所有 B 非 C ⇒ 有些 A 非 C」，缺的是 <b>所有 B 非 C</b> → 选 <b>B</b>。<br />用排除原则验：结论是「有些」，前提已有「有些」✔；结论有 1 个否定，前提需有 1 个否定 ✔。</div>
            </ExerciseCard>
      
            <ExerciseCard>
              <ExerciseTitle>例 7 · 考法一（换个概念）</ExerciseTitle>
              <div className="q">有些德国啤酒是纯生的，因此，有些纯生啤酒口感好。<br />要推出上述结论，需要的前提是：<br />A. 不是所有纯生啤酒口感都好　B. 所有口感好的啤酒都是德国啤酒　C. 有些德国啤酒口感好　D. 所有德国啤酒口感都好</div>
              <div className="a"><b>思路：</b>前提「有些德国啤酒是纯生的」= 有些 A 是 B（A 德国啤酒、B 纯生）；结论「有些纯生啤酒口感好」= 有些 B 是 C。<br />要串起来必须补 <b>所有 A 是 C</b>（所有德国啤酒口感都好）→ 选 <b>D</b>。<br />验证：有些 A 是 B ＋ 所有 A 是 C ⇒ 有些 B 是 C ✔。B 是「C ⇒ A」方向反了；C 只是把「有些」重复了一遍，串不上。</div>
            </ExerciseCard>
      
            <ExerciseCard>
              <ExerciseTitle>例 8 · 考法二（题干给 2 个前提）</ExerciseTitle>
              <div className="q">有些导演留大胡子，因此，有些留大胡子的人是大嗓门。<br />要使上述推理成立，必须补充以下哪项作为前提？<br />A. 有些大嗓门的人留大胡子　B. 所有导演都是大嗓门　C. 所有大嗓门的人都是导演　D. 有些导演不留大胡子</div>
              <div className="a"><b>思路（找中项）：</b>中项 = 前提出现、结论不出现的概念 = <b>导演</b>。结论「有些留大胡子的人是大嗓门」= 有些 B 是 C；已知「有些导演留大胡子」= 有些 A 是 B。<br />要接上，必须补「<b>所有 A 是 C</b>」= 所有导演都是大嗓门 → 选 <b>B</b>。<br />口诀验证：中项「导演」要在前提中周延一次，只能靠「所有」提供。A 是把结论换了个说法、C 方向反了。</div>
            </ExerciseCard>
      
            <div className="jingle">
              <div className="jt">三段论 · 一句话总结</div>
              <b>问结论就画圈（先所有后有些，圈可空、点可放大）；问前提就排除（概念各两次、所有配所有、否定看奇偶、中项配「所有」）。</b>
            </div>
          </Card>
      
          <Card>
            <h3><span className="dot" style={{ background: '#1f6f8b' }}></span>1.8 朴素逻辑（第 5 次课 · 母题四 · 解题思路及秒杀技巧）</h3>
      
            <p><b>识别：</b>题干整体是日常生活信息，<b>不考公式</b>，而且题干给出的信息<b>全部为真话</b>（这一点跟真假话正好相反——看到「有真有假」就别往朴素逻辑上想）。</p>
            <p><b>总思路：</b>先分是<b>常规题型</b>还是<b>套路题型</b>——套路题直接套公式最快；常规题找突破口，永远两个词：<b>确定性</b>（从比较确定的信息入手，结合相关信息推理）、<b>关联性</b>（从出现次数最多的元素入手）。</p>
      
            <table className="tight">
              <tr><th>看到这种题干</th><th>就找它</th></tr>
              <tr><td>常规 · 元素匹配：人 ↔ 项目 / 职业 / 乐器 / 时间（谁是谁）</td><td><b>列表法</b></td></tr>
              <tr><td>常规 · 两层对应：人 ↔ 籍贯 ↔ 专业（三类元素一一匹配）</td><td><b>连线法</b></td></tr>
              <tr><td>常规 · 位置关系：方位、围坐、排排坐、赛道</td><td><b>画图法</b></td></tr>
              <tr><td>常规 · 推不动、无法直接推出信息</td><td><b>假设法</b></td></tr>
              <tr><td>套路 · 每行每列（每个特殊区间）都不重不漏</td><td><b>数独题型</b></td></tr>
              <tr><td>套路 · 同一批人按两个角度分成「3+2」或「4+3」</td><td><b>3+2 题型</b></td></tr>
              <tr><td>套路 · 4 个人，按两个角度分成「3+2+1」或「4+3+2」</td><td><b>4（3+2+1）题型</b></td></tr>
              <tr><td>套路 · 问「最多 / 最少可能是多少」</td><td><b>最多最少题型</b></td></tr>
              <tr><td>套路 · A＞B、C＞D，且 A 与 B、C 与 D 各是矛盾的两类</td><td><b>多多少少题型</b></td></tr>
              <tr><td>套路 · 给一堆分类人数，问某一部分与总数的关系</td><td><b>数量差值题型</b></td></tr>
            </table>
      
            
            <h4>一、列表法 · 用在「元素匹配」的题上</h4>
            <p><b>怎么用：</b>把一类元素排成<b>行</b>、另一类排成<b>列</b>，画一张表；题干每给一条否定条件就打一个<b>叉</b>，叉完一圈剩下的空格就是答案。表一画出来，「谁不会什么」一眼可见，比在脑子里绕快得多。</p>
            <table className="tight">
              <tr><th>人 ＼ 乐器</th><th>钢琴</th><th>小提琴</th><th>二胡</th><th>古筝</th></tr>
              <tr><td><b>甲</b></td><td>×</td><td></td><td></td><td></td></tr>
              <tr><td><b>乙</b></td><td></td><td></td><td></td><td></td></tr>
              <tr><td><b>丙</b></td><td>×</td><td>×</td><td></td><td></td></tr>
              <tr><td><b>丁</b></td><td></td><td></td><td></td><td>×</td></tr>
            </table>
            <p><b>表格就是打叉表：</b>每一行代表一个人、每一列代表一种乐器，条件说「甲不会钢琴」就在甲那一行的钢琴格打个 ×。<b>一个人会 2 种</b>→ 这一行最后只会剩 2 个空格；<b>一种乐器 2 人会</b>→ 这一列最后只会剩 2 个空格。</p>
            <ExerciseCard>
              <ExerciseTitle>例 · 列表法｜2024 广东</ExerciseTitle>
              <div className="q">甲、乙、丙、丁 4 人每人都会演奏钢琴、小提琴、二胡和古筝 4 种乐器中的 2 种，且每种乐器都有 2 人会演奏。已知：<br />① 甲不会演奏钢琴；② 丁不会演奏古筝；③ 丙不会演奏钢琴和小提琴；④ 乙和丙会演奏的乐器中有且仅有 1 种相同。<br />由此可以推出：<br />A. 甲会演奏小提琴　B. 甲不会演奏二胡　C. 乙会演奏古筝　D. 甲和丁会演奏的乐器完全不同</div>
              <div className="a"><b>思路（先打叉，再用数量条件补）：</b>把①②③先填进上表（甲×钢琴、丙×钢琴且×小提琴、丁×古筝）。<br />钢琴：甲、丙都不会 → 钢琴只能是<b>乙、丁</b>（正好 2 人 ✔）。<br />丙只会二胡 / 古筝，且 ④ 说乙与丙<b>只有 1 种相同</b> → 乙在二胡、古筝里只占一个，乙的另一项就是钢琴。<br />小提琴：丙不会、乙不占 → 小提琴必须是<b>甲和丁</b>（正好 2 人 ✔）→ <b>甲会演奏小提琴</b> → 选 <b>A</b>。<br />（B 甲会不会二胡、C 乙会不会古筝都推不出来；D 甲与丁都含小提琴，必然有交集，所以 D 错。）</div>
            </ExerciseCard>
      
            
            <h4>二、连线法 · 用在「两层对应」的题上</h4>
            <p><b>怎么用：</b>三类元素各画一排，条件用线连起来 —— <b>实线 ＝ 确定</b>，<b>虚线 ＝ 否定</b>。两个细节千万别忘：<br />① <b>不要跨列相连</b>：人只能连到籍贯、籍贯只能连到专业，中间隔着的那一排不能跳过去连；<br />② <b>从虚线多的元素入手</b>：哪一个元素被否掉的线最多，就先定它。</p>
            <figure className="fig fig-narrow">
              <svg viewBox="0 0 300 392" role="img" aria-label="连线法示意图：三类元素各一排，实线表示确定、虚线表示否定">
                <text x={150} y={17} textAnchor="middle" fontSize={12} fontWeight="700" fill="#1e293b">连线法：三排元素，实线＝确定，虚线＝否定</text>
      
                <g fill="#dbeafe" stroke="#2563eb" strokeWidth={1.4}>
                  <rect x={21} y={40} width={62} height={30} rx={8} />
                  <rect x={119} y={40} width={62} height={30} rx={8} />
                  <rect x={217} y={40} width={62} height={30} rx={8} />
                </g>
                <g fill="#0c2d6b" fontSize={12.5} fontWeight="700" textAnchor="middle">
                  <text x={52} y={60}>芳芳</text><text x={150} y={60}>楠楠</text><text x={248} y={60}>木木</text>
                </g>
      
                <g fill="#fef3c7" stroke="#d97706" strokeWidth={1.4}>
                  <rect x={21} y={182} width={62} height={30} rx={8} />
                  <rect x={119} y={182} width={62} height={30} rx={8} />
                  <rect x={217} y={182} width={62} height={30} rx={8} />
                </g>
                <g fill="#7c4a03" fontSize={12.5} fontWeight="700" textAnchor="middle">
                  <text x={52} y={202}>汕头</text><text x={150} y={202}>河源</text><text x={248} y={202}>成都</text>
                </g>
      
                <g fill="#d1fae5" stroke="#059669" strokeWidth={1.4}>
                  <rect x={21} y={324} width={62} height={30} rx={8} />
                  <rect x={119} y={324} width={62} height={30} rx={8} />
                  <rect x={217} y={324} width={62} height={30} rx={8} />
                </g>
                <g fill="#065f46" fontSize={12.5} fontWeight="700" textAnchor="middle">
                  <text x={52} y={344}>外语</text><text x={150} y={344}>管理</text><text x={248} y={344}>金融</text>
                </g>
      
                <g stroke="#ef4444" strokeWidth={1.4} strokeDasharray="5 4" fill="none">
                  <line x1={150} y1={70} x2={248} y2={182} />
                  <line x1={248} y1={70} x2={52} y2={182} />
                  <line x1={248} y1={324} x2={150} y2={212} />
                </g>
                <g stroke="#2563eb" strokeWidth={2.4} fill="none">
                  <line x1={52} y1={70} x2={52} y2={182} />
                  <line x1={150} y1={70} x2={150} y2={182} />
                  <line x1={248} y1={70} x2={248} y2={182} />
                  <line x1={52} y1={212} x2={52} y2={324} />
                  <line x1={150} y1={212} x2={150} y2={324} />
                  <line x1={248} y1={212} x2={248} y2={324} />
                </g>
                <text x={150} y={382} textAnchor="middle" fontSize={11.5} fill="#475569">蓝实线＝确定　红虚线＝否定（不能相连）</text>
              </svg>
              <figcaption>图：连线法示意 —— 红色虚线是「否掉的组合」，蓝实线是「定下来的对应」；虚线最多的那个元素先定</figcaption>
            </figure>
            <ExerciseCard>
              <ExerciseTitle>例 · 连线法｜2023 深圳事业单位</ExerciseTitle>
              <div className="q">芳芳、楠楠、木木是某公司新入职员工，三人中有汕头人、河源人、成都人，所学专业包括金融、管理、外语专业。已知：<br />（1）楠楠不是学外语的，也不是成都人；<br />（2）木木不是汕头人；<br />（3）学习金融的不是河源人；<br />（4）学习外语的是汕头人。<br />由此可推知，芳芳所学的专业是：<br />A. 金融或管理　B. 管理　C. 金融　D. 外语</div>
              <div className="a"><b>思路（照着上图连线）：</b>① 楠楠被否了两条（不是外语、不是成都）→ 从虚线最多的<b>楠楠</b>入手。<br />② 由（4）外语＝汕头，而楠楠不是外语 → <b>楠楠不是汕头</b>；又已排除成都 → <b>楠楠＝河源</b>。<br />③ 由（3）金融≠河源 → 楠楠不是金融 → <b>楠楠＝管理</b>。<br />④ 由（2）木木不是汕头、楠楠已是河源 → <b>木木＝成都</b>，剩下 <b>芳芳＝汕头</b> → 由（4）<b>芳芳＝外语</b>。<br />⑤ 剩下木木＝金融。<br />→ 选 <b>D</b>。</div>
            </ExerciseCard>
      
            
            <h4>三、画图法 · 用在「位置关系」的题上</h4>
            <p><b>怎么用：</b>先把方位（东南西北）或座位／赛道／柜台顺序排好，再把条件一条条往里填。凡是看到「A 在 B 的 ×× 方」「紧挨着」「中间隔着几个」，一律<b>先画图再推</b>——在脑子里转方位十题错三题，画出来就成了送分题。</p>
            <figure className="fig fig-narrow">
              <svg viewBox="0 0 300 366" role="img" aria-label="画图法示意图：十字路口的东南西北四个方向">
                <text x={150} y={17} textAnchor="middle" fontSize={12} fontWeight="700" fill="#1e293b">画图法：先把四个正方向摆出来，再填条件</text>
      
                <text x={272} y={34} textAnchor="middle" fontSize={11.5} fontWeight="700" fill="#475569">北</text>
                <polygon points="272,40 268,52 276,52" fill="#94a3b8" />
                <line x1={272} y1={52} x2={272} y2={80} stroke="#94a3b8" strokeWidth={1.6} />
                <line x1={258} y1={66} x2={286} y2={66} stroke="#94a3b8" strokeWidth={1.2} />
      
                <line x1={150} y1={115} x2={150} y2={275} stroke="#cbd5e1" strokeWidth={10} />
                <line x1={73} y1={195} x2={227} y2={195} stroke="#cbd5e1" strokeWidth={10} />
      
                <rect x={119} y={85} width={62} height={30} rx={8} fill="#dbeafe" stroke="#2563eb" strokeWidth={1.5} />
                <text x={150} y={105} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#0c2d6b">书店</text>
      
                <rect x={119} y={275} width={62} height={30} rx={8} fill="#fee2e2" stroke="#dc2626" strokeWidth={1.5} />
                <text x={150} y={295} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#991b1b">火车站</text>
      
                <rect x={11} y={180} width={62} height={30} rx={8} fill="#fef3c7" stroke="#d97706" strokeWidth={1.5} />
                <text x={42} y={200} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#7c4a03">饭店</text>
      
                <rect x={227} y={180} width={62} height={30} rx={8} fill="#d1fae5" stroke="#059669" strokeWidth={1.5} />
                <text x={258} y={200} textAnchor="middle" fontSize={12.5} fontWeight="700" fill="#065f46">旅馆</text>
      
                <text x={150} y={326} textAnchor="middle" fontSize={11.5} fill="#475569">「书店在饭店东北」→ 书店在北、饭店在西</text>
                <text x={150} y={345} textAnchor="middle" fontSize={11.5} fill="#475569">「饭店在火车站西北」→ 火车站只能在南</text>
              </svg>
              <figcaption>图：画图法示意 —— 十字路口四个正方向各放一个地点，「书店在饭店东北、饭店在火车站西北」逐条试放</figcaption>
            </figure>
            <ExerciseCard>
              <ExerciseTitle>例 · 画图法（方位）</ExerciseTitle>
              <div className="q">一个旅行者要去火车站，早上从旅馆出发，到达一个十字路口。十字路口分别通向东南西北四个方向，四个方向上分别有饭店、旅馆、书店和火车站。书店在饭店的东北方，饭店在火车站的西北方。<br />该旅行者要去火车站，应当往哪个方向走？<br />A. 往东　B. 往南　C. 往西　D. 往北</div>
              <div className="a"><b>思路（画好十字再试放）：</b>先把十字的四个正方向摆好（如右上图）。<br />「书店在饭店的东北方」→ 只有「<b>书店在北、饭店在西</b>」成立（西点的东北正好落在北点）。<br />「饭店在火车站的西北方」→ 饭店在西 →「西的西北」没有正方向可取，所以要看饭店能不能取南：饭店在南时，它的西北就是西——但西已被饭店自己占，冲突；再验第一种：饭店在西时，火车站在饭店的东南 → 西的东南是<b>南</b> ✔。<br />于是 饭店＝西、书店＝北、火车站＝南、旅馆＝东 → <b>火车站在南边，应往南走</b> → 选 <b>B</b>。</div>
            </ExerciseCard>
            <ExerciseCard>
              <ExerciseTitle>例 · 画图法（排座 / 画数轴）｜2024 甘肃事业单位</ExerciseTitle>
              <div className="q">某单位组建了 7 个读书学习小组：书香致远、智慧起航、墨韵心语、博识悦读、思辩笃行、文脉相承、书海泛舟，并在大讲堂从前往后就座。已知：<br />（1）博识悦读组与书香致远组间隔 1 组；<br />（2）墨韵心语组后面紧挨着思辩笃行组，且墨韵心语组不与博识悦读组相邻；<br />（3）书海泛舟组坐在文脉相承组之前；<br />（4）智慧起航组在博识悦读组之前，且中间间隔 3 组。<br />如果智慧起航组坐在第一排，一定可以得出：<br />A. 书海泛舟组坐在第四排　B. 书香致远组坐在第三排　C. 文脉相承组坐在第六排　D. 墨韵心语组坐在第二排</div>
              <div className="a"><b>思路（画一条 1–7 的数轴）：</b>由（4）＋智慧起航＝第 1 排 → 博识悦读＝<b>第 5 排</b>。<br />由（1）「博识与书香间隔 1 组」→ 书香 ＝ 第 3 或第 7 排。<br />若书香＝第 3 排：墨韵、思辩这对紧挨的只能放第 2／3 或第 3／4，但第 3 被书香占、且墨韵不能与博识（第 5）相邻 → 无处可放 ✗。所以<b>书香＝第 7 排</b>。<br />于是剩余 2、3、4、6 排给墨韵＋思辩、书海、文脉。墨韵紧挨思辩只能取 2／3 或 3／4；而不论哪种，<b>文脉都被挤到第 6 排</b>（书海必须在文脉之前）→ <b>文脉相承组坐在第六排</b> → 选 <b>C</b>。</div>
            </ExerciseCard>
      
            
            <h4>四、假设法 · 推不动的时候用</h4>
            <p><b>怎么用：</b>题目无法直接推出信息时，<b>先假设某个元素成立</b>再往下推：推出<b>冲突</b>（与题干冲突、或推出两句互相冲突的话）→ 假设被推翻；一路顺下去无冲突 → 假设成立。假设的起点同样看<b>确定性 + 关联性</b>（通常选出现次数最多的元素）。</p>
            <ExerciseCard>
              <ExerciseTitle>例 · 假设法（三种可能逐一验证）</ExerciseTitle>
              <div className="q">甲、乙、丙 3 人同时申请某个课题项目，最终通过了其中 1 人的申请。专家们最初的预测如下：<br />① 专家一：甲的申请没有通过。<br />② 专家二：乙的申请通过了。<br />③ 专家三：丙的申请没有通过。<br />如果只有 1 名专家预测正确，则下列推论必然错误的是：<br />A. 专家一预测正确　B. 专家三预测正确　C. 甲的申请通过了　D. 乙的申请通过了</div>
              <div className="a"><b>思路（信息少、只有 3 种可能，直接穷举）：</b>只有 1 人通过，把三种情况各代一遍 ——<br />通过的是<b>甲</b>：①错、②错、③对 → 恰好 1 真 ✔<br />通过的是<b>乙</b>：①对、②对、③对 → 3 真 ✗<br />通过的是<b>丙</b>：①对、②错、③错 → 恰好 1 真 ✔<br />所以「<b>乙通过了</b>」不可能成立 → 选 <b>D</b>。</div>
            </ExerciseCard>
      
            
            <h4>五、套路题型 · 套上直接算</h4>
            <p><span className="pill pill-key">先说一条通用的</span>3+2 把「<b>排除法 / 代入法 / 从选项共性入手</b>」单列为<b>推理型题目通用解题方法（综合推理、朴素逻辑、真假话都能用）</b>，夸夸刷叫它<b>「万金油」</b>——详见 <a href="#wjy">1.11 万金油</a>。下面 6 个套路是「题长成这样就直接套」的专项技巧。</p>
      
            <h5>套路 1 · 数独题型（每行每列不重不漏）</h5>
            <p><b>题型判定：</b>题干说「每一行、每一列（有时还加「每个特殊区间」）都要用到某几种元素，不能重复也不能遗漏」。<br /><b>解题：① 先排除；② 从行、列（特殊区间）交集最多的格子入手。</b></p>
            <figure className="fig fig-narrow">
              <svg viewBox="0 0 260 280" role="img" aria-label="数独题型示意图：4×4 的盘面，填入后、起、之、秀四个字">
                <text x={130} y={16} textAnchor="middle" fontSize={12} fontWeight="700" fill="#1e293b">4×4 数独：每行每列都要有「后起之秀」</text>
                <rect x={18} y={36} width={216} height={216} fill="#ffffff" stroke="#1e293b" strokeWidth={2.4} />
                <g stroke="#94a3b8" strokeWidth={1}>
                  <line x1={72} y1={36} x2={72} y2={252} /><line x1={126} y1={36} x2={126} y2={252} /><line x1={180} y1={36} x2={180} y2={252} />
                  <line x1={18} y1={90} x2={234} y2={90} /><line x1={18} y1={144} x2={234} y2={144} /><line x1={18} y1={198} x2={234} y2={198} />
                </g>
                <g fontSize={19} fontWeight="700" textAnchor="middle" fill="#0c2d6b">
                  <text x={153} y={70}>之</text>
                  <text x={45} y={124}>秀</text>
                  <text x={45} y={178}>后</text>
                  <text x={207} y={178}>秀</text>
                  <text x={99} y={178}>后</text>
                </g>
                <g fontSize={17} fontWeight="700" textAnchor="middle" fill="#dc2626">
                  <text x={207} y={70}>①</text>
                  <text x={153} y={124}>②</text>
                  <text x={45} y={232}>③</text>
                  <text x={153} y={232}>④</text>
                </g>
              </svg>
              <figcaption>图：2024 辽宁事业单位数独题盘面 —— 已知「之、秀、后」，求 ①②③④ 四个空格</figcaption>
            </figure>
            <ExerciseCard>
              <ExerciseTitle>例 · 数独题型｜2024 辽宁事业单位</ExerciseTitle>
              <div className="q">以下是一个 4×4 的图形，共有 16 个小方格，每个小方格中均可填入一个字，要求图形的每行、每列均填入「后」「起」「之」「秀」4 个字，不能重复，也不能遗漏（如右上图，已知第 1 行第 3 格为「之」、第 2 行第 1 格为「秀」、第 3 行第 2 格为「后」、第 3 行第 4 格为「秀」）。<br />根据以上信息，依次填入图形中 ①②③④ 处的 4 个字正确的是：<br />A. 起，后，起，秀　B. 起，之，之，秀　C. 后，之，之，秀　D. 后，后，之，秀</div>
              <div className="a"><b>思路（先排除，从交集最多处入手）：</b>① 在第 1 行第 4 格，这一行已有「之」，第 4 列有「秀」（第 3 行第 4 格）→ ① 只能是「后」或「起」。<br />② 在第 2 行第 3 格，第 3 列已有「之」→ ② 不能是「之」。<br />③ 在第 3 行第 1 格，这一行已有「后、秀」→ ③ 只能是「起」或「之」。<br />④ 在第 4 行第 3 格，第 3 列已有「之」→ ④ 不能是「之」。<br />四个选项里，只有 <b>D</b> 同时满足「①∈&#123;后,起&#125;、②≠之、③∈&#123;起,之&#125;、④≠之」→ 逐个代入验证，D（后，后，之，秀）能补成完整的数独 → 选 <b>D</b>。</div>
            </ExerciseCard>
      
            <h5>套路 2 · 3+2 题型（含 4+3 变形）</h5>
            <p><b>题型判定：</b>把同一批人<b>按两个角度各分成「3+2」</b>（或「4+3」「3+4」）两组，题干另外给「谁和谁同类 / 谁和谁不同类」，最后问「符合全部特征的某个人是谁」。<br /><b>解题：相同归大，去排除。</b>——「相同」的两个人要归到<b>人多的那一组</b>去，然后<b>把不可能的人排掉</b>。</p>
            <ExerciseCard>
              <ExerciseTitle>例 · 3+2 题型｜2024 山东</ExerciseTitle>
              <div className="q">学生小赵、小钱、小孙、小李和小周都想选某老师作指导老师，已知：<br />（1）5 名学生中有 3 名属于 20 岁以下年龄段，2 名属于 20 岁及以上年龄段；<br />（2）有 2 名学生的专业是哲学，其他 3 名学生的专业是文学；<br />（3）小赵和小孙的年龄段相同，小李和小周的年龄段不同；<br />（4）小钱和小周的专业相同，小孙和小李的专业不同；<br />（5）最终该老师选择了一名年龄大于 20 岁的哲学专业学生。<br />由此可以推出，这名学生是：<br />A. 小赵　B. 小钱　C. 小孙　D. 小李</div>
              <div className="a"><b>思路（相同归大，去排除）：</b>年龄这一维是「3 小 + 2 大」。小赵和小孙<b>相同</b>，若他们都在「大」这一组，那 2 个大就被占满，剩下小李、小周、小钱都得在「小」组——可（3）又要求小李和小周<b>不同</b>，矛盾；所以<b>小赵、小孙都在「小」组</b>，「大」组是小钱 ＋ 小李/小周中的一个。<br />专业这一维是「2 哲学 + 3 文学」。小钱和小周<b>相同</b>，若他们是哲学，则哲学两个占满，小孙与小李就都成了文学，与（4）「小孙和小李专业不同」矛盾；所以<b>小钱、小周都是文学</b>，哲学在小赵 ＋ 小孙/小李中的一个。<br />现在要找「年龄大于 20 岁（＝大组）且学哲学」的人：大组里的小钱是文学 ✗，只能是小李或小周；哲学里的小赵（小组成员）✗，只能是小孙或小李。两边取交集 → <b>小李</b> → 选 <b>D</b>。</div>
            </ExerciseCard>
      
            <h5>套路 3 · 4（3+2+1）题型（含 4（4+3+2）变形）</h5>
            <p><b>题型判定：</b>4 个人，按两个角度分成「<b>3+2+1</b>」（3 个人有某特征、2 个人有另一特征、1 个人有第三特征），或变形为「<b>4+3+2</b>」。<br /><b>解题：① 找 3 人条件里被「孤立」的那个人；② 再找他在 2 人条件里的「伙伴」。</b></p>
            <ExerciseCard>
              <ExerciseTitle>例 · 4（3+2+1）题型｜2022 江苏</ExerciseTitle>
              <div className="q">某高校选派甲、乙、丙、丁 4 位专家组成乡村振兴调研小组，担任组长的专家为男性、党员、教授。已知这 4 位专家中：<br />（1）每位专家都至少具有组长的一个特征；<br />（2）有党员 3 人，男性 2 人，教授 1 人；<br />（3）甲和乙性别相同；<br />（4）乙是党员当且仅当丙是党员；<br />（5）丙和丁不全是党员。<br />由此推出，担任组长的是：<br />A. 甲　B. 乙　C. 丙　D. 丁</div>
              <div className="a"><b>思路（先定人数，再找被孤立的那一个）：</b>① 由（5）丙、丁不全是党员 → 至少有一个人不是党员。若丙不是党员，由（4）「乙是党员当且仅当丙是党员」→ 乙也不是党员，那么非党员就是丙、乙两人，甲、丁是党员。<br />此时看性别：（3）甲、乙同性。若甲、乙都是男 → 甲、乙占满 2 个男性，丙、丁都是女性；丙（非党员）就只能靠「教授」这一项立足，教授被丙占掉 → 而组长要「男＋党员＋教授」，男性是甲/乙但都不是教授，丙是教授却是女性 → <b>没人能满足</b>，矛盾。若甲、乙都是女 → 男性是丙、丁，丁是党员且是男 → 丁还需是教授，但教授给了丁的话，非党员的丙就没有任何特征，违背（1）→ 矛盾。<br />→ 所以「丙不是党员」不成立，<b>丙是党员</b>，由（4）<b>乙也是党员</b>，再由（5）→ <b>丁不是党员</b>。<br />② 丁（非党员）要满足（1），只能靠男性或教授；结合（3）甲、乙同性别，可推出甲、乙为女性、丙、丁为男性；③ 组长要「男＋党员＋教授」→ 男性丙、丁里，丁不是党员 → 只能是<b>丙</b>，教授也就是丙 → 选 <b>C</b>。</div>
            </ExerciseCard>
      
            <h5>套路 4 · 最多最少题型</h5>
            <p><b>题型判定：</b>题干给出一堆分类的人数（如「1 个吉林人、3 个北方人、2 个湖南人」「2 人只做大豆生意、4 人只做房地产生意」），问这群人<b>最多 / 最少</b>可能是多少。<br /><b>解题：最多 ＝ 两个分类做加和；最少 ＝ 两个分类里取数大的那个。注意去除「包含」的数量</b>（比如「吉林人」本身属于「北方人」，不要再加一遍）。</p>
            <ExerciseCard>
              <ExerciseTitle>例 · 最多最少题型｜2022 四川事业单位</ExerciseTitle>
              <div className="q">某茶楼内一群人正在谈生意，其中一个人是吉林人，三个人是北方人，两个人是湖南人。这群人中两个人只做大豆生意，四个人只做房地产生意。如果以上介绍已涉及该群所有人，那么这群人的人数是：<br />A. 最少可能是 4 人，最多可能是 8 人　B. 最少可能是 6 人，最多可能是 11 人　C. 最少可能是 4 人，最多可能是 11 人　D. 最少可能是 5 人，最多可能是 8 人</div>
              <div className="a"><b>思路（先归并两个分类，再加/取大）：</b>地域这一类的总数 ＝ 北方 3 人（含那 1 个吉林人，<b>不再另加</b>）＋ 湖南 2 人 ＝ <b>5 人</b>；生意这一类的总数 ＝ 大豆 2 人 ＋ 房地产 4 人 ＝ <b>6 人</b>（「只做」说明两两不重叠）。<br /><b>最多</b> ＝ 两类完全不重合 ＝ 5 ＋ 6 ＝ <b>11 人</b>；<b>最少</b> ＝ 两类尽量重合 ＝ 取数大的那个 ＝ <b>6 人</b>。<br />→ 选 <b>B</b>。</div>
            </ExerciseCard>
      
            <h5>套路 5 · 多多少少题型</h5>
            <p><b>题型判定：</b>题干给两个「多」的关系，比如「A＞B；C＞D」，而 A 与 B 是<b>矛盾的两类</b>、C 与 D 也是<b>矛盾的两类</b>。<br /><b>解题：题干若没有别的条件，就只能得出「AC ＞ BD」</b>——两个「多」放到一边相乘、两个「少」放到另一边相乘，交叉比大小。</p>
            <ExerciseCard>
              <ExerciseTitle>例 · 多多少少题型｜2019 山东事业单位</ExerciseTitle>
              <div className="q">根据人事部门的数据，某单位的女性员工多于男性员工，中共党员员工多于政治面貌为群众的员工（该单位员工政治面貌只有中共党员和群众两种情况）。下列判断一定正确的是：<br />A. 政治面貌为群众的女性员工多于政治面貌为群众的男性员工<br />B. 政治面貌为中共党员的男性员工多于政治面貌为中共党员的女性员工<br />C. 政治面貌为中共党员的女性员工多于政治面貌为群众的男性员工<br />D. 政治面貌为群众的男性员工多于政治面貌为中共党员的男性员工</div>
              <div className="a"><b>思路（交叉相乘比大小）：</b>记 女党员＝a、女群众＝b、男党员＝c、男群众＝d。<br />题干说 女 ＞ 男，即 a＋b ＞ c＋d；党员 ＞ 群众，即 a＋c ＞ b＋d。<br />两式相加：(a＋b)＋(a＋c) ＞ (c＋d)＋(b＋d) → 2a ＞ 2d → <b>a ＞ d</b>，也就是「<b>党员女性 ＞ 群众男性</b>」必然成立。<br />换用口诀：两个「多」交叉得「党员女性」，两个「少」交叉得「群众男性」→ 党员女性 ＞ 群众男性 → 选 <b>C</b>。（A、B、D 都不能由题干推出。）</div>
            </ExerciseCard>
      
            <h5>套路 6 · 数量差值题型</h5>
            <p><b>题型判定：</b>题干给一堆<b>带数字的分类</b>（如各省人数、某两类合起来几个），问某一部分与总数（或另一部分）的关系。<br /><b>解题：找「不重合的那几项加和」与总值的关系</b>——把互不重叠的几项加起来跟总数比大小，就能锁定范围。</p>
            <ExerciseCard>
              <ExerciseTitle>例 · 数量差值题型｜2024 江苏</ExerciseTitle>
              <div className="q">某车间共有 18 人，他们分别来自山东、江苏、浙江、安徽和福建 5 省。在 18 人中，每省至少有 1 人，且来自各省的人数均不相同。已知：来自山东和江苏的共有 5 人；来自江苏和浙江的共有 6 人；来自浙江和福建的共有 7 人。<br />根据上述信息，可以推出以下哪项？<br />A. 18 人中来自山东的有 1 人　B. 18 人中来自浙江的有 2 人　C. 18 人中来自福建的有 5 人　D. 18 人中来自安徽的有 6 人</div>
              <div className="a"><b>思路（找不重合的几项与总数的关系）：</b>「山东＋江苏」＝5，「浙江＋福建」＝7，这两组<b>互不重合</b>，加起来正好是 12 人。<br />总人数 18，剩下的就是没被这两组覆盖的那一省 —— <b>安徽 ＝ 18 − 12 ＝ 6 人</b>。<br />（山东、江苏、浙江、福建各自的人数虽然还能推出范围，但都被「人数均不相同」等条件限制得不是唯一值，只有安徽是唯一的。）→ 选 <b>D</b>。</div>
            </ExerciseCard>
          </Card>
      
            
            <Card>
            <h3><span className="dot" style={{ background: '#1f6f8b' }}></span>1.9 直接找矛盾（母题五 · 知假求真 / 知真求假）</h3>
            <h4>母题五 · 直接找矛盾（知假求真 / 知真求假）</h4>
            <p><b>识别：</b>题干是「假言」，问法却是「知假求真、知真求假」。典型问法（不穷尽）：</p>
            <ul>
              <li>已知上述信息为假，请问哪项为真 / 能推出哪项？</li>
              <li>某人反对 / 否认题干的信息，问某人的真实意思。</li>
              <li>题干为真，以下哪项为假 / 不可能为真？</li>
              <li>哪项为真，说明没有兑现承诺？</li>
            </ul>
            <p><b>解题就一句话：找矛盾。</b>核心公式：<b>p ⇒ q 的矛盾是「p 且非 q」</b>；把「并非」加在整句上，再按规则取反即可。</p>
            <p><span className="pill pill-key">3+2 原话的两个细节</span><b>单句：</b>直接找矛盾。<b>多句：先串联，再找矛盾，优先关注头尾的概念词</b>（易考）——把几条假言串成一条链（甲 ⇒ 乙 ⇒ 丙 ⇒ 非丁），问「不可能为真」时直接看哪个选项违反这条链。</p>
            <ExerciseCard>
              <ExerciseTitle>例 · 多句串联（问「不可能为真」）｜2024 江苏</ExerciseTitle>
              <div className="q">某学校拟派出骨干教师指导山区教师人才培训项目。甲、乙、丙、丁四位教师积极报名，派出人员要符合以下要求：<br />① 只有乙参加，甲才参加；<br />② 如果丙参加，那么丁不参加；<br />③ 如果乙参加，那么丙也参加。<br />根据以上信息，以下哪项不可能为真？<br />A. 甲和丙参加　B. 丁参加，乙不参加　C. 甲和丁参加　D. 甲参加，丁不参加</div>
              <div className="a"><b>思路（先串联再找矛盾）：</b>翻译 ① 甲 ⇒ 乙；② 丙 ⇒ 非丁；③ 乙 ⇒ 丙。<br />把三条<b>串成一条链</b>：<b>甲 ⇒ 乙 ⇒ 丙 ⇒ 非丁</b>——也就是「甲参加」蕴含「丁不参加」。<br />逐项看：A 甲、丙参加，与链一致（丁不参加）✔可能；B 丁参加、乙不参加——丙参加才要求丁不参加，丁参加则丙不参加，乙不参加也没违反 ③ ✔可能；<b>C 甲和丁参加</b>——甲参加就推出「丁不参加」，与「丁参加」直接冲突 → <b>不可能为真</b> ✔；D 甲参加、丁不参加，正好与链一致 ✔可能。<br />→ 选 <b>C</b>。</div>
            </ExerciseCard>
            <ExerciseCard>
              <ExerciseTitle>例 · 找矛盾（p ⇒ q 的否定）</ExerciseTitle>
              <div className="q">某单位计划从陈、姜、曾、丁 4 人中选出参赛人员，4 人进行了猜测：<br />陈：「我不会入选。」<br />姜：「如果我入选，则小曾会入选。」<br />曾：「除非小丁入选，否则小姜不入选。」<br />丁：「小姜会入选但小曾不会入选。」<br />如果 4 人中只有 1 人猜对了，则下列判断中必然为真的是：<br />A. 小陈、小姜会入选　B. 小陈、小丁会入选　C. 小姜、小曾会入选　D. 小姜、小丁会入选</div>
              <div className="a"><b>思路：</b>先翻译 —— 曾的话「除非丁，否则非姜」= <b>姜 ⇒ 丁</b>。<br />于是 <b>姜的话（姜 ⇒ 曾）与丁的话（姜 且 非曾）正好是矛盾</b>（p⇒q 与 p且非q）→ 唯一真话在他俩之间 → 陈、曾都假。<br />陈假 → <b>小陈入选</b>；曾假 → 其矛盾成立 → <b>小姜入选、小丁不入选</b>。<br />所以「小陈、小姜会入选」必然为真 → 选 <b>A</b>。</div>
            </ExerciseCard>
          </Card>
      
              
          <Card>
            <h3><span className="dot" style={{ background: '#1f6f8b' }}></span>1.10 一拖N（第 6 次课）</h3>
            <p><b>介绍：</b>一般由一个题干 + 多个小题组成，题干整体类似朴素逻辑。<b>用时目标：</b>一拖二 2-3 分钟（保 3 争 4）；一拖五 5 分钟（7-8 分钟内，保 4 争 5）。</p>
      
            <h4>第一步 · 分析题干信息（一拖五约 1-2 分钟）</h4>
            <div className="steps">
              <div className="step"><div className="no">1</div><div className="bd"><b>分析背景：</b>明确题干属于<b>有序型</b>还是<b>无序型（分组型）</b>，有几类元素、每类几种。</div></div>
              <div className="step"><div className="no">2</div><div className="bd"><b>题干信息整合：</b>突破口 = 确定性、关联性。排序中注意：占位多的条件、捆绑元素、相对先后顺序、间隔占位信息、数量限制。</div></div>
              <div className="step"><div className="no">3</div><div className="bd"><b>符号表达：</b>形成自己的符号系统（见下），把文字翻译成符号。</div></div>
            </div>
            <table className="tight">
              <tr><th>符号</th><th>含义</th></tr>
              <tr><td><b>AB</b></td><td>A 在 B 左，且紧挨着</td></tr>
              <tr><td><b>A B</b></td><td>A 在 B 左边，不确定是否紧挨</td></tr>
              <tr><td><b>A□B</b></td><td>A 在 B 左，且 AB 之间有一个东西</td></tr>
              <tr><td><b>⇄</b></td><td>位置可互换（箭头）</td></tr>
            </table>
      
            <h4>第二步 · 解题与代入判断</h4>
            <ul>
              <li>通过整合题干得到的信息，<b>可用于所有题目</b>（一拖N的第一价值）。</li>
              <li><b>有补充条件：</b>从补充条件入手，结合已知条件推理，推完排除选项，不行再代入。</li>
              <li><b>「二选一」原则：</b>分析题干时要盯住<b>排序中体现间隔的占位信息、相对先后顺序、捆绑元素、数量限制、二选一原则</b>——「A 在 B 前还是后只有两种情况」这类二选一条件，是代入和假设的最佳起点。</li>
              <li><b>代入的先后顺序：</b><b>优先从「能结合已知信息进行推理」的选项代入</b>，别从最孤立的选项开始试。</li>
              <li><b>通过问法判断是否适合代入：</b>
                <table className="tight">
                  <tr><th>问法</th><th>处理</th></tr>
                  <tr><td>可能为真</td><td><b>可以代入</b>：代入选项，若能满足题目所有已知信息，可选</td></tr>
                  <tr><td>不可能真</td><td><b>可以代入</b>：代入选项，若与题干已知确定信息冲突，可选</td></tr>
                  <tr><td>一定为真 / 可以推出</td><td><b>建议正推，不适合代入</b>；如必须代入，注意是「一定真」还是「可能真」</td></tr>
                </table>
              </li>
            </ul>
      
            <h4>秒解技巧 &amp; 蒙猜技巧</h4>
            <div className="grid2">
              <Card>
                <h4 style={{ marginTop: '0' }}>⚡ 秒解</h4>
                <ul>
                  <li><b>关注选项信息异同</b>：选项全面的（直接列出完整安排），直接排除/验证。</li>
                  <li>最后 2 个题可能直接<b>运用之前题目的结论</b>。</li>
                  <li>代入时优先代入<b>能结合已知信息推理</b>的选项。</li>
                  <li>排序题：前有 N 个人，则不能在前 N；后有 N 个人，则不能在后 N。</li>
                </ul>
              </Card>
              <Card>
                <h4 style={{ marginTop: '0' }}>🎲 蒙猜（时间不够用）</h4>
                <ul>
                  <li>问「<b>可能</b>」→ 优先选含有「题干限制信息中<b>未提及的元素</b>」的选项。</li>
                  <li>问「<b>不可能</b>」→ 排除出现「同质元素」的选项。</li>
                  <li>问 A 和 B <b>最多</b>隔几排 → 优先验证选项中的<b>最大数字</b>。</li>
                  <li>问 A 和 B <b>最少</b>隔几排 → 优先验证选项中的<b>最小数字</b>。</li>
                </ul>
              </Card>
            </div>
      
            <ExerciseCard>
              <ExerciseTitle>例 · 排序型（2025 天津事业单位改编）</ExerciseTitle>
              <div className="q">某边防哨卡每日必须有士兵站岗，每天从 A、B、C、D、E、F、G 七位士兵中选择一位站岗，每位士兵每周只站岗一次。已知：① B 必须在周二，E 必须在周四；② A 在 D 前面站岗，且中间恰好隔一位；③ F 和 G 在相邻两天站岗。问：C 排在周一，则以下哪项一定为真？</div>
              <div className="a"><b>思路（程意式）：</b>有补充条件（C 周一）→ 从补充条件入手。画 1-7 位置：周一C，周二B，周四E；A□D 占位 + F、G 相邻 → 逐步排除，推出结论。</div>
            </ExerciseCard>
            <ExerciseCard>
              <ExerciseTitle>例 · 代入判断（可能为真）</ExerciseTitle>
              <div className="q">某次会议有 5 位代表，分别来自浙江、江苏、山东、广东、四川。已知：① 浙江代表不在第 1 位；② 江苏和山东代表相邻；③ 广东代表在四川代表之前且中间恰好隔一位。问：以下哪项<b>可能</b>是五位代表的正确顺序？<br />A. 浙江 江苏 山东 广东 四川　B. 山东 江苏 广东 四川 浙江　C. 四川 广东 江苏 山东 浙江</div>
              <div className="a"><b>思路（程意式）：</b>问「可能为真」→ 直接代入验证。A：浙在第 1 位，违反① ✗；B：苏鲁相邻 ✓、粤川中间隔一位 ✓、浙不在第 1 ✓ → <b>选 B</b>；C：粤在川前但紧挨（没隔一位），违反③ ✗。注意「可能为真」只找一个能满足所有条件的即可，不必是唯一排列。</div>
            </ExerciseCard>
          </Card>
      
          
          <Card>
            <h3><span className="dot" style={{ background: '#1f6f8b' }}></span>1.11 万金油：排除法 &amp; 代入法（夸夸刷补充）</h3>
            <div className="jingle"><div className="jt">📌 这是夸夸刷单独列出的一个「母题类型」</div>适用环境：<b>朴素逻辑、综合推理、真假话都能用。</b>这两招不需要你完全读懂题目，只要题干或选项满足条件就能直接上手——实在推不动的时候，先想它。</div>
            <table className="tight">
              <tr><th>方法</th><th>什么时候能用</th><th>怎么做</th></tr>
              <tr><td><b>排除法</b></td><td>题干信息<b>均为真</b>，且<b>选项全面</b>（每个选项都把所有人的情况说全）</td><td>拿每个选项去对题干，<b>只要有一处对不上就直接排除</b>，排到只剩一个</td></tr>
              <tr><td><b>代入法</b></td><td>① 题干特殊 + 选项特殊；② 题干信息<b>有真有假</b>但选项信息全面；③ 题干复杂、但<b>选项有共性</b>；④ 问「补充哪项前提」推结论</td><td>把选项<b>代回题干</b>去验证</td></tr>
            </table>
            <div className="jingle"><div className="jt">✏️ 代入法的两种问法（方向别记反）</div>
              <b>问「可能为真」：</b>代入某个选项后<b>能满足题干的全部已知信息</b> → 该选项就能选（只找到一个就够，不必是唯一解）。<br />
              <b>问「不可能为真 / 一定为假」：</b>代入某个选项后<b>与题干的确定信息冲突</b> → 该选项就能选。
            </div>
            <ExerciseCard>
              <ExerciseTitle>例 · 排除法（题干全真 + 选项全面）｜2022 北京</ExerciseTitle>
              <div className="q">某校辩论队的小赵、小钱、小孙和小李分别是哲学、中文、历史和英语专业的，他们也都爱好下围棋。还知道如下情况：<br />（1）小孙和历史专业的下过围棋，并且各有输赢；<br />（2）哲学专业的只和中文专业的下过围棋，而且从没赢过；<br />（3）小钱和小孙二人曾和哲学专业的同学一起爬过山；<br />（4）某日小李、小赵下围棋，且小赵取胜。<br />据此，可以推出：<br />A. 小赵是学英语的，小钱是学历史的　B. 小钱是学历史的，小孙是学中文的　C. 小赵是学历史的，小孙是学英语的　D. 小李是学哲学的，小钱是学历史的</div>
              <div className="a"><b>思路（题干全真、选项全面 → 排除法）：</b>① 由（3）小钱、小孙都和「哲学专业」一起爬过山 → 小钱、小孙<b>都不是哲学</b>；由（1）小孙和历史下过棋 → <b>小孙不是历史</b>。<br />② 由（2）哲学专业「只和中文专业下过棋」＋（4）小李、小赵下棋 → 小李、小赵这两人正好占掉<b>哲学与中文</b>（一方是哲学、另一方是中文）。<br />③ 再由（2）「哲学从没赢过」＋（4）小赵取胜 → <b>小赵不能是哲学</b> → <b>小赵＝中文，小李＝哲学</b>。<br />④ 于是小孙不是历史、不是哲学、不是中文（中文是小赵）→ <b>小孙＝英语</b>；剩下<b>小钱＝历史</b>。<br />逐个排除选项，只有 <b>D</b> 与推论一致 → 选 <b>D</b>。</div>
            </ExerciseCard>
            <ExerciseCard>
              <ExerciseTitle>例 · 代入法（问「判断错误」＝把选项代回题干）｜2025 广东</ExerciseTitle>
              <div className="q">在一次技能竞赛中，甲、乙、丙、丁 4 人排名前四且无人并列。已知：甲和第三名是好友且名次比该好友高；丁和甲不是好友，但和第一名是好友；乙的名次比丙高。<br />根据上述信息，以下判断错误的是：<br />A. 丙的名次不高于第三名　B. 甲的名次一定高于丙　C. 乙和丁是好友　D. 乙不可能是第一名</div>
              <div className="a"><b>思路（把选项代回题干验证）：</b>先由题干定框架：甲「比第三名高」且自己不是第三名 → <b>甲只能是第 1 或第 2</b>。<br />若甲＝第 1，则「丁和第一名是好友」即丁和甲是好友，与「丁和甲不是好友」矛盾 → <b>甲＝第 2</b>。<br />甲＝第 2 后，第三名是甲的好友，而丁不是甲的好友 → 第三名不是丁。<br />剩下的第 1、3、4 名给乙、丙、丁，且乙比丙高 → 只能是 <b>乙＝第 1、丙＝第 3、丁＝第 4</b>。<br />代选项：A 丙第 3，「不高于第三名」✔；B 甲第 2 高于丙第 3 ✔；C 乙是第一名，丁和第一名是好友 ✔；D「乙不可能是第一名」—— 但乙<b>正是</b>第一名 → <b>D 错误</b> → 选 <b>D</b>。</div>
            </ExerciseCard>
          </Card>
    </>
  )
}
