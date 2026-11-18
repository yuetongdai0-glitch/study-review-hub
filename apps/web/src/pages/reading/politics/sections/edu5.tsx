import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'
import { Memo, Mnemonic } from '../mem'

/**
 * 二十八、综应 D · 理论背诵（上）：职业理念 · 师德 · 学生发展
 *
 * @remarks 内容来自《2026 明哥综应理论背诵册》第一、二部分，按「记忆口诀 + 要点 + 辨析常考」重排。
 * 开头的「三维速记」是全册的记忆总纲：任何一「育」的任务都拆成知识 / 能力 / 情感三层。
 * @returns 该节正文。
 */
export default function Edu5(): ReactElement {
  return (
    <>
      <Callout variant="key">这一节来自 <b>明哥《综应理论背诵册》</b>，和前面四节是<b>互补关系</b>：前面按「考点」拆，这里按「<b>怎么背、怎么答辨析题</b>」重排。全册只有一个记忆总纲——<b>任何一育的任务，都拆成「知识 · 能力 · 情感」三层</b>。</Callout>

      <Block>
        <BlockTitle>1. 【记忆总纲】三维速记：知识 — 能力 — 情感</BlockTitle>
        <p>德智体美劳五育的任务，看上去五套说法，其实<b>一个模子</b>：<b>① 教什么知识 ② 练什么能力 ③ 养什么情感</b>。背的时候先记住这三层，再往里填具体词，比死记五段话快十倍。</p>
        <DataTable>
          <tr><th>育</th><th>① 知识 / 技能</th><th>② 能力</th><th>③ 情感 / 品质</th></tr>
          <tr><td><b>德育</b></td><td>正确的人生观世界观、政治方向、道德规范</td><td>道德判断与践行能力</td><td>道德情操、良好道德行为习惯、良好心理品质</td></tr>
          <tr><td><b>智育</b></td><td>系统的文化科学基础知识、基本技能技巧</td><td><b>智力才能</b></td><td>良好学习品质、<b>热爱科学的精神</b></td></tr>
          <tr><td><b>体育</b></td><td>体育运动的基本知识和技能技巧</td><td>增强体质、运动能力</td><td>关心集体、团结协作、遵纪守法、<b>顽强拼搏</b></td></tr>
          <tr><td><b>美育</b></td><td>正确的<b>审美观点</b></td><td>审美能力、<b>表现美和创造美</b>的能力</td><td><b>健康的审美情趣</b>、对美的热爱和追求</td></tr>
          <tr><td><b>劳育</b></td><td>基本生产知识、劳动技能</td><td><b>创新精神和创新能力</b></td><td><b>劳动观念、劳动态度、劳动习惯</b></td></tr>
        </DataTable>
        <Callout variant="tip"><b>怎么用这张表：</b>辨析题说「某育就是让学生学会××知识」→ 你立刻能回「只做到了第一层，还缺能力层和情感层」。案例分析要写「该教师落实了××育」→ 按三层各写一句，答案立刻饱满。<br /><b>五育关系一句话：</b>不可分割（相互联系、相互促进）、不能相互代替（各有特定任务与价值）；全面发展 ≠ 平均发展。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题164 · 三维拆解五育任务</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>下列任务中，属于<b>美育</b>「情感层」的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 帮助学生树立正确的审美观点　B. 发展学生表现美和创造美的能力　C. 培养学生健康的审美情趣，激发对美的热爱　D. 配齐配好美育教师，开齐开足美育课</ExampleOptions>
          <ExampleAnswer><b>解析：</b>按三维拆：A 是知识层（审美观点），B 是能力层（表现美、创造美），<b>C 是情感层（审美情趣）</b>，D 是实施途径不是任务。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>2. 素质教育：五内涵「提素个性创两全」+ 七个误区</BlockTitle>
        <Memo title="素质教育五内涵" sub="口诀：提素个性创两全。">
          <Mnemonic
            title="提素个性创两全"
            hot
            verse={<>提高<em>国民素质</em>为根本宗旨；面向<em>全体</em>学生；促进<em>全面</em>发展；促进<em>个性</em>发展；以培养<em>创新精神</em>和<em>实践能力</em>为重点。</>}
            note={<>「两全」＝面向全体 + 全面发展；「创」＝创新精神与实践能力<b>是重点</b>，不是「全部」。</>}
          />
        </Memo>
        <DataTable>
          <tr><th>误区（辨析题原题就是这么出的）</th><th>错在哪</th></tr>
          <tr><td>素质教育就是不要尖子生</td><td>误读「面向全体」——是让<b>每个学生得到与其潜能相一致的发展</b>，不是取消优秀</td></tr>
          <tr><td>素质教育就是什么都学、什么都学好</td><td>误读「全面发展」——是<b>合格 + 特长</b>，必修打基础、选修扬个性</td></tr>
          <tr><td>素质教育就是不要刻苦学习、减负＝不留作业</td><td>减负减的是<b>不必要、过重的负担</b>；作业有巩固检测作用，要<b>适量、有训练价值</b></td></tr>
          <tr><td>素质教育就是教师要当合作者、服务者</td><td>忽略了教师<b>主导作用</b>：教师首先是知识的传播者、智慧的启迪者、潜能的开发者</td></tr>
          <tr><td>素质教育就是多搞课外活动、多上文体课</td><td>素质教育的<b>主渠道是教学、主阵地是课堂</b>，课外活动只是补充</td></tr>
          <tr><td>素质教育就是不要考试</td><td>考试是评价手段之一，错的是「唯考试论」，不是考试本身</td></tr>
          <tr><td>素质教育会影响升学率</td><td>升学率只是质量指标之一；科学地学、刻苦地学反而有助升学</td></tr>
        </DataTable>
        <Callout variant="warn"><b>辨析题万能结构：</b>① 亮明观点（这个说法是错的）→ ② 解释概念真义 → ③ 分析题干错在哪（漏了哪一层）→ ④ 给出正确做法。七个误区的小标题<b>就是出题方向</b>，上面「错在哪」那列就是答题话术。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题165 · 「素质教育就是多搞活动」</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>有人主张「素质教育就是多开展课外活动、多上文体课」。这一观点的主要错误在于（　）。</ExampleQuestion>
          <ExampleOptions>A. 忽视了课外活动的作用　B. 误解了素质教育的实施途径，忽略了课堂教学才是主渠道　C. 否认了学生个性的发展　D. 混淆了素质教育与应试教育的评价标准</ExampleOptions>
          <ExampleAnswer><b>解析：</b>素质教育的主渠道是<b>教学</b>、主阵地是<b>课堂</b>；课外活动是补充和辅助。该观点把补充手段当成主渠道，属于形式化误解。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>3. 新课改：目标六条 + 三观口诀</BlockTitle>
        <PointList>
          <li><b>具体目标六条</b>：① 课程功能的转变（<b>核心目标</b>）；② 课程结构的<b>均衡性、综合性、选择性</b>；③ 密切课程内容与生活和时代的联系；④ 改善学生的学习方式；⑤ 建立与素质教育一致的评价与考试制度（<b>发展性评价</b>）；⑥ 实行<b>三级课程管理</b>。</li>
          <li><b>均衡 ≠ 平均</b>；<b>选择性 ≠ 学生自由选择</b>（学生发展不成熟，需要教师引导）。</li>
        </PointList>
        <DataTable>
          <tr><th>三观</th><th>口诀</th><th>内容</th></tr>
          <tr><td><b>学生观</b></td><td><b>两独一发</b></td><td>学生是<b>发展</b>的人（有规律、有潜能、在发展中／容错）· <b>独特</b>的人（完整的人、有独特性、与成人有差异）· 具有<b>独立意义</b>的人（不以教师意志为转移、是学习主体、是责权主体）</td></tr>
          <tr><td><b>教师观</b></td><td><b>建研放促</b></td><td>课程的建设者与开发者 · 教育教学的<b>研究者</b> · 社区型<b>开放</b>教师 · 学生学习的<b>促进</b>者</td></tr>
          <tr><td><b>教学观</b></td><td><b>学习过人</b></td><td>从教育者中心转向<b>学习者</b>中心 · 从教会知识转向教会学生<b>学习</b> · 从重结论转向重结论更重<b>过程</b> · 从关注学科转向关注<b>人</b></td></tr>
        </DataTable>
        <PointList>
          <li><b>教师行为四个转变</b>：师生关系——尊重、赞赏；教学关系——帮助、引导；对待自我——<b>反思</b>；对待其他教育者——<b>合作</b>。</li>
          <li><b>学习方式</b>：自主（≠自学，需教师指导）· 合作（<b>组间同质、组内异质</b>）· 探究（问题性、实践性、开放性）。</li>
          <li><b>评价六化</b>：功能发展化、内容综合化、标准分层化、方式多样化（定性+定量）、主体多元化（自评互评师评家长评）、重心过程化。</li>
        </PointList>
        <Callout variant="warn"><b>「容错教育」的辨析陷阱：</b>学生是发展的人 → 要容错，<b>但容错 ≠ 不批评、不惩戒</b>。学生屡教不改时仍要批评教育；批评有助于认识错误、唤起改正勇气，只是<b>切忌体罚或变相体罚</b>。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题166 · 教师是研究者</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>新课改要求教师从「教书匠」转变为「教育教学的研究者」，其主要意义不包括（　）。</ExampleQuestion>
          <ExampleOptions>A. 是教师由「教书匠」转变为「教育家」的前提条件　B. 是教师持续进步的基础、提高教学水平的关键　C. 可以保证教师的科研成果直接转化为学校收入　D. 是创造性实施新课程的保证</ExampleOptions>
          <ExampleAnswer><b>解析：</b>A、B、D 是教材原话；C 把「研究」功利化，与教师作为研究者的意义无关。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>4. 师德六条「三爱两人一终身」+ 教育家精神</BlockTitle>
        <DataTable>
          <tr><th>条目</th><th>定位</th><th>关键做法</th></tr>
          <tr><td>爱国守法</td><td>教师职业的<b>基本要求</b></td><td>贯彻国家教育方针，自觉遵守教育法律法规</td></tr>
          <tr><td>爱岗敬业</td><td>教师职业的<b>本质要求</b></td><td>备课、上课、辅导学生认真负责</td></tr>
          <tr><td><b>关爱学生</b></td><td><b>师德的灵魂</b></td><td>尊重人格、平等对待、严慈相济；<b>不讽刺挖苦、不歧视、不体罚或变相体罚</b></td></tr>
          <tr><td>教书育人</td><td>教师<b>天职</b></td><td>循循善诱、因材施教；成绩与品德<b>全面</b>关注</td></tr>
          <tr><td>为人师表</td><td>教师职业的<b>内在要求</b></td><td>以身作则；尊重同事与家长；<b>廉洁从教</b></td></tr>
          <tr><td>终身学习</td><td>教师专业发展的<b>不竭动力</b></td><td>钻研业务，不断提高专业素养与教育教学水平</td></tr>
        </DataTable>
        <PointList>
          <li><b>教育家精神六条</b>：心有大我、至诚报国的<b>理想信念</b>；言为士则、行为世范的<b>道德情操</b>；启智润心、因材施教的<b>育人智慧</b>；勤学笃行、求是创新的<b>躬耕态度</b>；乐教爱生、甘于奉献的<b>仁爱之心</b>；胸怀天下、以文化人的<b>弘道追求</b>。</li>
          <li><b>记忆法</b>：理想—情操—智慧—态度—仁心—追求，六个词按「信念往前走」的顺序串。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题167 · 师德的灵魂</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>在教师职业道德规范中，被称为「师德的灵魂」的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 爱国守法　B. 爱岗敬业　C. 关爱学生　D. 终身学习</ExampleOptions>
          <ExampleAnswer><b>解析：</b>关爱学生＝<b>师德的灵魂</b>；爱岗敬业＝本质要求，教书育人＝天职，为人师表＝内在要求，终身学习＝不竭动力。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>5. 时政三件套：双减 · 五项管理 · 教育惩戒</BlockTitle>
        <DataTable>
          <tr><th>政策</th><th>必背数字 / 要点</th></tr>
          <tr><td><b>双减</b>（作业与校外培训）</td><td>小学一二年级<b>不布置家庭书面作业</b>；三至六年级书面作业<b>不超过 60 分钟</b>；初中<b>不超过 90 分钟</b>；<b>不得利用课后服务时间讲新课</b>；考试成绩<b>等级制</b>呈现</td></tr>
          <tr><td><b>五项管理</b></td><td>作业、<b>睡眠</b>、手机、读物、体质。睡眠：小学 <b>10 小时</b>、初中 <b>9 小时</b>、高中 <b>8 小时</b>；手机「<b>有限带入</b>校园、禁入课堂」；体质：小学一二年级每周 <b>4 课时</b>体育，三至六年级与初中 <b>3 课时</b>，高中 <b>2 课时</b>，每天校内外各 <b>1 小时</b>体育活动</td></tr>
          <tr><td><b>教育惩戒</b></td><td>轻微：点名批评、赔礼道歉、口头或书面检讨、<b>一节课内教室站立</b>、适当增加教学或<b>班级公益服务</b>任务、课后教导｜较重：德育负责人训导、校内公益服务、专门校规教育、暂停校外集体活动｜严重：<b>不超过一周</b>的停课停学、法治副校长训诫、专门心理辅导与行为干预</td></tr>
        </DataTable>
        <Callout variant="warn"><b>告知家长的三档别混：</b>情节<b>轻微</b>→「以适当方式告知」；情节<b>较重或拒不改正</b>→「<b>及时</b>告知」；违纪<b>严重或影响恶劣</b>→「<b>事先</b>告知」。纪律处分：警告、严重警告、记过、留校察看；<b>只有高中阶段</b>才可开除学籍。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题168 · 停课最多几天</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>依据《中小学教育惩戒规则（试行）》，对违纪情节严重的学生给予停课、停学惩戒，一般不超过（　）。</ExampleQuestion>
          <ExampleOptions>A. 三天　B. 一周　C. 两周　D. 一个月</ExampleOptions>
          <ExampleAnswer><b>解析：</b>严重惩戒为「不超过<b>一周</b>的停课或停学」，且须<b>事先告知家长</b>，要求家长在家教育、管教。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>6. 学生身心发展：五规律 + 四因素 + 两个理论</BlockTitle>
        <DataTable>
          <tr><th>规律</th><th>含义</th><th>教育启示</th></tr>
          <tr><td>顺序性</td><td>由低到高、方向不可逆</td><td><b>不陵节而施</b>、不拔苗助长、循序渐进</td></tr>
          <tr><td>阶段性</td><td>不同年龄段有不同特征</td><td>分阶段教育，不搞一刀切</td></tr>
          <tr><td>不平衡性</td><td>同一方面不同速、不同方面不同步</td><td><b>抓关键期</b></td></tr>
          <tr><td>互补性</td><td>生理与生理、生理与心理互补</td><td>扬长避短</td></tr>
          <tr><td>个别差异性</td><td>个体之间、群体之间存在差异</td><td><b>因材施教</b></td></tr>
        </DataTable>
        <PointList>
          <li><b>四因素</b>：遗传＝物质基础（作用随年龄<b>减弱</b>）；环境＝现实基础（人不是被动接受）；<b>学校教育＝主导</b>；<b>主观能动性＝决定因素、内在动力</b>。</li>
          <li><b>维果茨基最近发展区</b>：现有水平与「在帮助下可达到的水平」之间的差距 → <b>教学应走在发展前面</b>。</li>
          <li><b>埃里克森</b>：学龄期（6、7—12 岁）＝<b>勤奋感 vs 自卑感</b>；青年期（12—18 岁）＝<b>同一性 vs 角色混乱</b>。</li>
        </PointList>
        <Callout variant="warn"><b>「超过现有水平就是拔苗助长」这个辨析题：</b>错。要分两种——超出<b>最近发展区</b>（怎么帮都达不到）才是拔苗助长；落在最近发展区内、需要帮助才能达到的，正是<b>教学应该做的</b>。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题169 · 「抓关键期」对应哪条规律</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>教育要抓住学生发展的关键期，「过了这个村就没这个店」，这体现了个体身心发展的（　）。</ExampleQuestion>
          <ExampleOptions>A. 顺序性　B. 阶段性　C. 不平衡性　D. 个别差异性</ExampleOptions>
          <ExampleAnswer><b>解析：</b>不平衡性表现为同一方面在不同时期速度不同，因此存在发展的<b>关键期</b>；顺序性对应循序渐进，阶段性对应不搞一刀切。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>7. 学生差异：气质四型 + 两种认知风格</BlockTitle>
        <DataTable>
          <tr><th>气质</th><th>特点</th><th>教育方式</th></tr>
          <tr><td><b>胆汁质</b></td><td>直率热情、精力旺盛、好冲动、暴躁易怒</td><td>可以有<b>说服力的严厉批评</b>，但<b>不能激怒</b>；锻炼自制力</td></tr>
          <tr><td><b>多血质</b></td><td>活泼好动、反应迅速、善交际、粗枝大叶</td><td>多给任务、多参加活动，磨炼<b>坚韧性</b>与情绪稳定性</td></tr>
          <tr><td><b>黏液质</b></td><td>安静稳重、反应性低、自制力强、可塑性差</td><td>更耐心，批评时<b>多给思考时间</b>；培养独立性</td></tr>
          <tr><td><b>抑郁质</b></td><td>行为孤僻、多愁善感、反应迟缓、适应差</td><td>多关怀照顾，<b>不宜公开场合批评</b>，鼓励参加公开活动</td></tr>
        </DataTable>
        <PointList>
          <li><b>场独立</b>：靠内部参照，偏爱自然科学与数学，善独立思考，内部动机；缺点是社会技能弱。<b>场依存</b>：靠外部参照，偏爱社会人文，善合作，外部动机；缺点是缺独立判断。</li>
          <li><b>沉思型</b>：慢而准，擅长<b>细节分析</b>；<b>冲动型</b>：快而糙，擅长<b>整体解释</b>。</li>
          <li><b>共同结论</b>：气质与认知风格<b>都没有好坏之分</b>，只影响方式与效率。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题170 · 抑郁质的批评方式</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>某学生行为孤僻、多愁善感、反应迟缓，自尊心强且容易受挫。对这名学生，教师最恰当的做法是（　）。</ExampleQuestion>
          <ExampleOptions>A. 在班会上公开指出其问题，督促改正　B. 给予更多关怀，避免在公开场合批评，鼓励其参加集体活动　C. 用严厉批评激发其斗志　D. 与胆汁质学生同等要求，锻炼其抗压能力</ExampleOptions>
          <ExampleAnswer><b>解析：</b>该生属典型<b>抑郁质</b>，敏感、易受挫，应多关怀、<b>不当众批评</b>、渐进鼓励参与活动。A、C 会加重心理负担，D 忽视了气质差异。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>8. 小学生 / 中学生特点 + 三类心理健康问题</BlockTitle>
        <PointList>
          <li><b>小学生四特点</b>（口诀：快协开可）：<b>快速性</b>、<b>协调性</b>、<b>开放性</b>、<b>可塑性</b>。注意发展：<b>无意注意占优势</b>、直观形象的事物更易吸引、注意有明显情绪色彩、品质仍在发展。</li>
          <li><b>中学生思维</b>：创造性与批判性日益明显，但<b>片面性与表面性</b>依然存在；<b>自我中心</b>（假想观众、独特自我）。</li>
          <li><b>中学生情绪</b>：强烈狂暴与温和细腻共存、可变性与固执性共存、内向性与表现性共存。</li>
          <li><b>中学生自我意识「超限性」</b>：过度敏感、过度独立、过分自尊、过分自责、过分自我表现、过分自我掩饰、强烈的无能体验。</li>
        </PointList>
        <DataTable>
          <tr><th>心理健康问题</th><th>成因（答「分析原因」用）</th><th>矫正（答「提措施」用）</th></tr>
          <tr><td><b>考试焦虑</b></td><td>主观：期望过高、知识技能准备不足、自信不足／自尊过强、身体状态差；客观：父母压力、教师压力、同学竞争</td><td>调整期望值、端正考试动机、做好充分准备形成良好状态</td></tr>
          <tr><td><b>网络成瘾</b></td><td>网络诱惑、监管不力、家庭环境（缺关心／专制／父母示范）、自身因素（内向敏感、认知偏差、意志薄弱）、同伴与媒体影响</td><td>丰富课外活动、家校共育、沟通引导、心理老师配合（强化干预／厌恶干预／转移注意／延迟满足）、召开班会</td></tr>
          <tr><td><b>入学适应</b></td><td>环境陌生、规则变化、学业难度陡增、人际重建</td><td>幼小衔接：了解情况→积极情感体验→规则与习惯→指导家长；小初衔接：熟悉校园→自主管理→主动交往→学习方法；高一：熟悉环境→人际关系→学业适应→同一性发展</td></tr>
        </DataTable>
        <Callout variant="warn"><b>校园欺凌的答题框架：</b>预防＝教常识（结伴、不自暴自弃、临危不乱、及时报告）+ 营造反欺凌班级氛围（相互尊重、班级规范、同伴互助、一视同仁）。<br />干预＝<b>被欺凌者</b>（了解事态+心理疏导、鼓励求助、教自护方法、多方援助、关注长远）＋<b>欺凌者</b>（惩戒并讲明危害、了解心理找原因、教合理交往策略如角色互换共情）。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题171 · 校园欺凌干预的重点</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>处理校园欺凌事件时，下列做法<b>不恰当</b>的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 先了解事件经过与被欺凌者的感受，提供情感支持　B. 让双方当众对质，辨明谁对谁错　C. 对欺凌者讲明行为危害，并了解其行为背后的原因　D. 通过角色互换、共情等方式引导欺凌者采用非攻击性的解决方式</ExampleOptions>
          <ExampleAnswer><b>解析：</b>B 错在「当众对质」——会让被欺凌者二次受伤，也容易激化对抗。A、C、D 都符合「先保护、再教育、分别处理」的原则。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <div className="jingle">
        <div className="jt">背诵（上）· 一句话串起来</div>
        <b>五育都按「知识—能力—情感」三层背；素质五内涵「提素个性创两全」；三观「两独一发、建研放促、学习过人」；师德「三爱两人一终身」；惩戒三档「轻微—较重—严重」，停课不超过一周。</b>
      </div>
    </>
  )
}
