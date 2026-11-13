import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'
import { Memo, Mnemonic } from '../mem'

/**
 * 二十四、教育常识（一）教育学
 *
 * @remarks 内容整理自「教育常识 1」讲义：教育目的、发展规律、学制、课程、
 * 教学、德育、班级管理、教师与学生八块。D 类常识判断最后几道题基本从这里出。
 * @returns 该节正文。
 */
export default function Edu1(): ReactElement {
  return (
    <>
      <Callout variant="key">D 类（教师岗）的常识判断，<b>5 道左右</b>固定给教育常识：教育学 + 教育心理学 + 教育法规，<b>识记类占三分之二</b>。所以这四节的目标不是「懂」，而是<b>把定位词和数字背准</b>——考场上四个选项往往只差一个词。</Callout>
      <Memo title="教育学：先记这四组口诀" sub="教育学最容易失分的不是不会，而是「张冠李戴」：把 A 的称号安到 B 头上。四组口诀先立住，其余细节往上挂。">
        <Mnemonic
          title="教育学独立四步"
          hot
          verse={<>培根<em>首提出</em>，纽斯<em>来实现</em>，康德<em>首讲授</em>，巴特<em>来规范</em>。</>}
          note={<>培根《论科学的价值与发展》首次提出把教育学独立；夸美纽斯《大教学论》实现独立（教育学之父）；康德首次在大学讲授教育学；赫尔巴特《普通教育学》标志规范（现代教育学之父）。</>}
        />
        <Mnemonic
          title="四大学制"
          verse={<>壬寅<em>颁布</em>、癸卯<em>实施</em>、壬子癸丑<em>资本</em>、壬戌<em>六三三</em>。</>}
          note={<>1902 壬寅首颁未行；1904 癸卯首施（中学为体、西学为用）；1912–13 壬子癸丑第一个资本主义性质、首次男女同校；1922 壬戌学美、六三三、沿用最久。</>}
        />
        <Mnemonic
          title="影响发展的四因素"
          verse={<>遗传给<em>可能</em>，环境给<em>条件</em>，学校起<em>主导</em>，能动性<em>决定</em>。</>}
          note={<>四个词的顺序年年考：可能性≠现实性，主导≠决定。看到「决定性作用」只能选主观能动性。</>}
        />
        <Mnemonic
          title="德育知情意行"
          verse={<>知是<em>核心</em>，情是<em>催化剂</em>，意是<em>凝固剂</em>，行是<em>标志</em>。</>}
          note={<>「衡量品德的重要标志」永远选「行」；「品德发展的基础/核心」选「知」。活动和交往是品德形成的<b>基础</b>。</>}
        />
      </Memo>

      <Block>
        <BlockTitle>1. 教育学是什么：三个「起点」别混</BlockTitle>
        <DataTable>
          <tr><th>问法</th><th>答案</th></tr>
          <tr><td>教育学研究的<b>对象</b></td><td>教育现象 + 教育问题</td></tr>
          <tr><td>教育学研究的<b>逻辑起点</b></td><td><b>教育问题</b></td></tr>
          <tr><td>教育学的<b>主要任务</b></td><td>对教育问题给出超越习俗认识和传统理论认识的<b>新解释</b></td></tr>
          <tr><td>教育的<b>最早独立形态</b></td><td><b>社会教育</b>（原始社会）→ 家庭教育 → 学校教育</td></tr>
        </DataTable>
        <Callout variant="warn">「研究对象是教育现象」和「主要任务是揭示教育规律」都对，但问到<b>主要任务</b>时，标准答案是「提供新解释」（源自教育学的定义：研究教育现象和教育问题、揭示教育规律的科学）。真题里四个选项常把「教育规律 / 教育现象 / 教育事实 / 教育问题」摆在一起，正确项是<b>教育问题</b>。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题120 · 教育学的研究任务</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>教育学研究的主要任务是（　）。</ExampleQuestion>
          <ExampleOptions>A. 教育规律　B. 教育现象　C. 教育事实　D. 教育问题</ExampleOptions>
          <ExampleAnswer><b>解析：</b>教育学以<b>教育问题</b>为逻辑起点和对象，主要任务是对教育问题提供新解释。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>2. 教育家谱系：一句话一个人</BlockTitle>
        <DataTable>
          <tr><th>人物</th><th>一句定位</th></tr>
          <tr><td>孔子</td><td>「有教无类」——朴素的教育平等，<b>不等于</b>「无差别对待」（不否认因材施教）</td></tr>
          <tr><td>荀子</td><td>《劝学》「积土成山…」→ <b>循序渐进原则</b>；性恶论、外铄</td></tr>
          <tr><td>夸美纽斯</td><td><b>教育学之父</b>；《大教学论》＝近代第一本教育学著作；<b>泛智教育</b>；系统论述班级授课制；直观性等教学原则</td></tr>
          <tr><td>赫尔巴特</td><td><b>现代教育学之父</b>；《普通教育学》＝规范科学标志；传统三中心（教师、教材、课堂）</td></tr>
          <tr><td>杜威</td><td>新三中心（儿童、经验、活动）；<b>教育无目的论</b>；「教育即生活」</td></tr>
          <tr><td>卢梭</td><td><b>自然主义</b>；培养「自然人」；《爱弥儿》</td></tr>
          <tr><td>洛克</td><td><b>白板说</b>（外铄论）+ <b>绅士教育</b>；《教育漫话》</td></tr>
          <tr><td>陶行知</td><td>生活即教育、社会即学校、教学做合一；晓庄师范、山海工学团、<b>小先生制</b></td></tr>
          <tr><td>苏霍姆林斯基</td><td>培养<b>全面和谐发展的人</b>；《给教师的一百条建议》；「活的教育学」</td></tr>
          <tr><td>布鲁纳 / 布鲁姆</td><td>布鲁纳＝结构主义 + <b>发现学习</b>；布鲁姆＝<b>教育目标分类</b>（认知/情感/动作技能）</td></tr>
        </DataTable>
        <Callout variant="warn"><b>名言陷阱：</b>「捧着一颗心来，不带半根草去」＝陶行知；「教是为了达到不需要教」＝叶圣陶；「一辈子做教师，一辈子学做教师」＝<b>于漪</b>（不是苏霍姆林斯基）；「教师是太阳底下最光辉的职业」＝夸美纽斯。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题121 · 名言与教育家对应</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>下列教育名言与教育家对应<b>不正确</b>的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 捧着一颗心来，不带半根草去。——陶行知　B. 教是为了达到不需要教。——叶圣陶　C. 一辈子做教师，一辈子学做教师。——苏霍姆林斯基　D. 教师，太阳底下最光辉的职业。——夸美纽斯</ExampleOptions>
          <ExampleAnswer><b>解析：</b>C 是<b>于漪</b>的话，不是苏霍姆林斯基。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>3. 教育目的：四大理论 + 三个层次</BlockTitle>
        <DataTable>
          <tr><th>理论</th><th>核心主张</th><th>代表人物</th></tr>
          <tr><td><b>社会本位论</b></td><td>从社会需要出发，培养合格公民，教育是国家事业</td><td>荀子、柏拉图、涂尔干、赫尔巴特、凯兴斯泰纳、孔德、纳托普</td></tr>
          <tr><td><b>个人本位论</b></td><td>从个体本能需要出发，注重教育对个人的价值</td><td>卢梭、福禄贝尔、裴斯泰洛齐、罗杰斯、马斯洛</td></tr>
          <tr><td><b>生活本位论</b></td><td>教育为未来生活做准备 / 教育即生活</td><td>斯宾塞</td></tr>
          <tr><td><b>教育无目的论</b></td><td>教育本身就是目的，没有抽象的外部目的</td><td>杜威</td></tr>
        </DataTable>
        <PointList>
          <li>层次结构（<b>只有三层</b>）：<b>国家教育目的 → 学校培养目标 → 教师教学目标</b>。「学生的个人目标」<b>不属于</b>这三层。</li>
          <li>记忆：社会本位＝「<b>黑社会恐吓柏拉图</b>」（赫尔巴特、社会本位、凯兴斯泰纳、柏拉图）。</li>
          <li>我国教育目的的理论基础：<b>马克思主义关于人的全面发展学说</b>。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题122 · 卢梭属于哪一派</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>卢梭认为，儿童不需要成人的灌输、压制、强迫，应该在自身的教育和成长中取得主动地位。他的这种教育思想属于（　）。</ExampleQuestion>
          <ExampleOptions>A. 要素主义　B. 实证主义　C. 自然主义　D. 永恒主义</ExampleOptions>
          <ExampleAnswer><b>解析：</b>以「儿童天性」为中心、培养自然人、反对灌输 → <b>自然主义</b>。要素主义是巴格莱，永恒主义是赫钦斯。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>4. 个体发展：四条规律 + 四因素</BlockTitle>
        <DataTable>
          <tr><th>规律</th><th>关键词</th><th>典型例子</th></tr>
          <tr><td><b>顺序性</b></td><td>由低到高、由简到繁，<b>不可逆、不可躐等</b></td><td>先抓→再站→后走</td></tr>
          <tr><td><b>阶段性</b></td><td>不同年龄不同特征，<b>不能一刀切</b></td><td>童年期 vs 少年期</td></tr>
          <tr><td><b>不平衡性</b></td><td>同一方面不同速、不同方面不同步</td><td>身高突增期；<b>关键期</b></td></tr>
          <tr><td><b>互补性</b></td><td>生理与生理、生理与心理互相补偿</td><td>盲人听觉灵敏</td></tr>
          <tr><td><b>个别差异性</b></td><td>人与人不同 → 因材施教</td><td>「一把钥匙开一把锁」</td></tr>
        </DataTable>
        <PointList>
          <li><b>遗传</b>：提供<b>可能性</b>与物质前提；<b>环境</b>：提供现实条件；<b>学校教育</b>：起<b>主导</b>作用；<b>主观能动性</b>：起<b>决定</b>作用（内因）。</li>
          <li>看到「顺序」不要选「阶段性」：<b>顺序性强调的是「方向不可逆」，阶段性强调的是「年龄分期」</b>。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题123 · 先抓再站后走</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>小孩从出生开始，总是先学会用手抓东西，然后才学会站立，最后学会走路。这体现了个体发展的（　）特征。</ExampleQuestion>
          <ExampleOptions>A. 顺序性　B. 阶段性　C. 不平衡性　D. 互补性</ExampleOptions>
          <ExampleAnswer><b>解析：</b>从抓→站→走，方向固定、由低到高，是<b>顺序性</b>。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>5. 学制演变：四个学制一张表</BlockTitle>
        <DataTable>
          <tr><th>学制</th><th>时间</th><th>颁布者</th><th>蓝本</th><th>地位</th></tr>
          <tr><td><b>壬寅学制</b></td><td>1902</td><td>清政府</td><td>日本</td><td><b>首次颁布，未实行</b></td></tr>
          <tr><td><b>癸卯学制</b></td><td>1904</td><td>清政府</td><td>日本</td><td><b>首次实施</b>，新学制开端；「中学为体、西学为用」</td></tr>
          <tr><td><b>壬子癸丑学制</b></td><td>1912–1913</td><td>南京临时政府</td><td>日本</td><td>第一个<b>资本主义性质</b>；首次规定<b>男女同校</b></td></tr>
          <tr><td><b>壬戌学制</b></td><td>1922</td><td>北洋政府</td><td><b>美国</b></td><td><b>六三三</b>；沿用时间最长、影响最大</td></tr>
        </DataTable>
        <Callout variant="warn"><b>最容易错的一处：</b>壬寅学制对应《<b>钦定</b>学堂章程》，癸卯学制对应《<b>奏定</b>学堂章程》——两本章程的名字经常被故意颠倒。记：「<b>寅</b>＝钦（先钦定、后才奏定）」。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题124 · 六三三学制</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>采用「六三三」结构、以美国学制为蓝本的学制是（　）。</ExampleQuestion>
          <ExampleOptions>A. 壬寅学制　B. 癸卯学制　C. 壬子癸丑学制　D. 壬戌学制</ExampleOptions>
          <ExampleAnswer><b>解析：</b>1922 年壬戌学制（六三三），学美、沿用最久。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>6. 课程：看「谁开发」定性质</BlockTitle>
        <PointList>
          <li><b>三级管理</b>：国家课程（教育部统一开发，<b>强制性</b>）→ 地方课程（省级教育行政部门，体现地方特色）→ 校本课程（<b>学校自主开发</b>）。</li>
          <li>判定技巧：<b>看开发主体，不看内容来源</b>。一所小学用本地陶瓷文化开课，只要开发主体是学校，就是<b>校本课程</b>。</li>
          <li><b>显性课程</b>：有计划、有组织、有目的；<b>隐性课程</b>：校风、班风、师生关系、校园环境（<b>非计划</b>）。两个班同一老师、班风不同 → 隐性课程差异。</li>
          <li><b>综合实践活动</b>：<b>国家规定的必修课</b>（不是选修），含研究性学习、社区服务与社会实践、劳动与技术教育、信息技术教育。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题125 · 校本课程的判定</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>某小学以地方特色为立足点，把乡村教育融入乡村生活，打造了一批精品课程。这些课程属于（　）。</ExampleQuestion>
          <ExampleOptions>A. 国家课程　B. 地方课程　C. 校本课程　D. 隐性课程</ExampleOptions>
          <ExampleAnswer><b>解析：</b>题干写明「某小学…打造」，开发主体是<b>学校</b>，故为校本课程。内容带地方色彩不改变性质。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>7. 教学：原则、方法、组织形式、评价</BlockTitle>
        <DataTable>
          <tr><th>组别</th><th>内容</th></tr>
          <tr><td><b>八大原则</b></td><td>直观性、启发性、循序渐进、巩固性、因材施教、理论联系实际、量力性、科学性与思想性统一</td></tr>
          <tr><td><b>讲授法四式</b></td><td><b>讲述</b>（讲事实情境）、<b>讲解</b>（讲原理逻辑）、<b>讲读</b>（讲读结合）、<b>讲演</b>（系统深入）</td></tr>
          <tr><td><b>演示法 vs 实验法</b></td><td>演示法＝<b>教师做、学生看</b>；实验法＝<b>学生亲手做</b>、教师指导</td></tr>
          <tr><td><b>实习作业法 vs 实践探究法</b></td><td>实习作业法＝<b>已知结果去应用</b>（学过面积去量教室）；实践探究法＝<b>结果未知去探索</b></td></tr>
          <tr><td><b>组织形式</b></td><td>班级授课制（夸美纽斯系统论述）为基本形式；另有分组教学、<b>特朗普制</b>（灵活的课程表）</td></tr>
        </DataTable>
        <Callout variant="warn"><b>「天宫课堂」这类题的坑：</b>宇航员讲原理＝讲解法，宇航员操作实验给学生看＝演示法。<b>只要学生没动手，就不是实验法</b>。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题126 · 演示法还是实验法</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>宇航员在中国空间站「天宫课堂」中边讲边做太空「冰雪」实验、液桥实验，供地面学生观察。这里用到的教学方法是（　）。</ExampleQuestion>
          <ExampleOptions>A. 实验法、演示法　B. 讨论法、演示法　C. 讲解法、演示法　D. 讲解法、讨论法</ExampleOptions>
          <ExampleAnswer><b>解析：</b>口头讲原理＝<b>讲解法</b>；教师操作、学生观察＝<b>演示法</b>。学生没动手，排除实验法；没有生生讨论，排除讨论法。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>8. 教学评价：三个时间点 + 三种参照</BlockTitle>
        <DataTable>
          <tr><th>按时间</th><th>什么时候</th><th>目的</th></tr>
          <tr><td><b>诊断性评价</b></td><td>教学<b>之前</b></td><td>摸清基础与准备情况，安排教学</td></tr>
          <tr><td><b>形成性评价</b></td><td>教学<b>过程中</b></td><td>过程性评价，提供反馈、及时调整</td></tr>
          <tr><td><b>终结性评价</b></td><td>教学<b>之后</b></td><td>评定学习成果，判断是否达标</td></tr>
        </DataTable>
        <DataTable>
          <tr><th>按参照</th><th>怎么比</th></tr>
          <tr><td>相对性评价（常模参照）</td><td>和别人比，<b>区分优良中差</b></td></tr>
          <tr><td>绝对性评价（标准参照）</td><td>和<b>既定标准</b>比，看是否达标</td></tr>
          <tr><td>个体内差异评价</td><td>和自己比（过去 vs 现在）</td></tr>
        </DataTable>
        <Callout variant="tip">档案袋评价属于<b>过程性（形成性）评价</b>，不是终结性；「区分水平」的是<b>相对性评价</b>，不是终结性评价的主要目的。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题127 · 单元开始前的评价</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>在单元开始之前，教师对学生的掌握程度进行评价，了解学生的基础，这是（　）。</ExampleQuestion>
          <ExampleOptions>A. 诊断性评价　B. 形成性评价　C. 终结性评价　D. 问题性评价</ExampleOptions>
          <ExampleAnswer><b>解析：</b>教学<b>之前</b>、目的是摸基础 → 诊断性评价。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>9. 德育：要素、原则、方法、途径</BlockTitle>
        <PointList>
          <li><b>四要素</b>：知（核心/基础）、情（催化剂）、意（凝固剂）、行（<b>衡量品德的重要标志</b>）。</li>
          <li><b>德育过程的基本矛盾</b>：社会道德要求与学生现有品德水平之间的矛盾。</li>
          <li><b>基本规律</b>：① 知情的培养与行的养成；② <b>活动和交往是品德形成的基础</b>；③ 内部矛盾转化；④ 长期、反复、逐步提高。</li>
          <li><b>原则</b>：导向性、疏导性、尊重信任与严格要求相结合、知行统一、正面教育与纪律约束相结合、<b>依靠积极因素克服消极因素（长善救失）</b>、教育影响一致性与连贯性、因材施教。</li>
          <li><b>方法</b>：说服教育法、<b>榜样示范法</b>、实际锻炼法、<b>陶冶教育法</b>、品德评价法、道德修养法。「论学取友」「择其善者而从之」→ 榜样示范。</li>
          <li><b>途径</b>：<b>思想品德课与其他学科教学是最基本、最经常</b>的途径。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题128 · 「唯仁者能好人」</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>古人云「唯仁者能好人，能恶人」，这属于德育过程中的（　）。</ExampleQuestion>
          <ExampleOptions>A. 道德认识　B. 道德情感　C. 道德意志　D. 道德行为</ExampleOptions>
          <ExampleAnswer><b>解析：</b>「好（hào）」「恶（wù）」是内心的喜爱与憎恶 → <b>道德情感</b>。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>10. 班主任与班级管理：四种模式 + 两个「最」</BlockTitle>
        <DataTable>
          <tr><th>模式</th><th>关键词</th><th>提出者</th></tr>
          <tr><td>常规管理</td><td>靠规章制度管日常</td><td>—</td></tr>
          <tr><td><b>平行管理</b></td><td>通过集体影响个人，又通过个人影响集体</td><td><b>马卡连柯</b></td></tr>
          <tr><td><b>民主管理</b></td><td>人人参与，<b>班干部轮换制</b></td><td>—</td></tr>
          <tr><td><b>目标管理</b></td><td>师生共同定目标、层层分解</td><td><b>德鲁克</b></td></tr>
        </DataTable>
        <PointList>
          <li>班主任<b>中心工作</b>：组织和培养<b>班集体</b>；<b>前提和基础</b>：了解和研究学生。</li>
          <li>了解学生<b>最基本的方法</b>：<b>观察法</b>；通过周记、作文了解 → <b>研究书面材料法</b>。</li>
          <li>新组建班级第一件事：<b>建立班集体的正常秩序</b>（先有秩序，再谈习惯、活动、班风）。</li>
          <li>班级管理的根本目的：<b>促进学生的发展</b>。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题129 · 班干部轮换属于哪种管理</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>班干部轮换制度属于班级管理中的（　）管理模式。</ExampleQuestion>
          <ExampleOptions>A. 常规　B. 平行　C. 民主　D. 目标</ExampleOptions>
          <ExampleAnswer><b>解析：</b>轮换＝人人有机会参与、做班级主人 → <b>民主管理</b>。平行管理是马卡连柯的「集体与个人互相影响」。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>11. 教师与学生：角色、成长公式、权利</BlockTitle>
        <PointList>
          <li><b>教师角色</b>：传道授业解惑者、<b>示范者</b>（为人师表）、管理者、研究者。「经师易求，人师难得」→ 教师职业的<b>示范性</b>。</li>
          <li><b>教师成长公式</b>（波斯纳）：<b>成长 ＝ 经验 ＋ 反思</b>。布鲁巴奇四种反思方法：反思日记、详细描述、交流讨论、行动研究。</li>
          <li><b>教师专业发展三阶段</b>：关注生存 → 关注情境 → 关注学生。</li>
          <li><b>学生权利</b>：受教育权（含参加教育教学活动、使用设施、获得奖助贷）；人身权（生命健康、人身自由、<b>人格尊严</b>、<b>隐私权</b>）；财产权。</li>
          <li><b>新型师生关系</b>：尊师爱生、民主平等、<b>教学相长</b>、心理相容。<b>不包括</b>「师道尊严」。</li>
        </PointList>
        <Callout variant="warn"><b>权利辨析高频：</b>停课、不让上课、停发作业 → <b>受教育权</b>；翻看日记、公开成绩排名、泄露隐私 → <b>隐私权</b>；当众辱骂、罚站示众 → <b>人格尊严权</b>；没收不归还 → <b>财产权</b>。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题130 · 停课侵犯了什么权</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>小苏因一时冲动犯错，学校以「安全不能保证」为由对其停课两日，并停发布置作业的短信。学校侵犯了小苏的（　）。</ExampleQuestion>
          <ExampleOptions>A. 人身自由权　B. 人格尊严权　C. 隐私权　D. 参加教育教学活动的权利</ExampleOptions>
          <ExampleAnswer><b>解析：</b>停课＝剥夺上课机会，停发作业＝阻断学习资料获取，属于<b>受教育权</b>中的「参加教育教学活动、使用教育教学设施」的权利。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <div className="jingle">
        <div className="jt">教育学 · 一句话总结</div>
        <b>人物看「首」字，学制看「寅卯丑戌」，课程看「谁开发」，评价看「时间点」，德育看「知情意行」，管理看「谁提出」。</b>
      </div>
    </>
  )
}
