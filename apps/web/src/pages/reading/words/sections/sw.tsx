import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 实词辨析 · 十八组（100 个高频实词）
 *
 * @returns 该节正文。
 */
export default function S53(): ReactElement {
  return (
    <>
      <Callout variant="key">
              <b>实词不要背意思，要背搭配。</b>意思往往一样，能接什么词完全不一样。判断口诀：<b>看后面跟的是「人」还是「物」，是「好结果」还是「坏结果」，是「已经发生」还是「将要发生」。</b>
            </Callout>
      
            <Block>
              <BlockTitle>1. 镌刻 / 铭刻 / 雕刻 / 刻画 / 描绘 / 描摹 / 勾勒</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>镌刻</td><td>雕刻（多用于碑石），也比喻<b>深深记在心里</b></td><td>那段经历镌刻在他记忆里。</td></tr>
                <tr><td>铭刻</td><td>刻在器物上，比喻<b>铭记不忘</b>（多用于抽象）</td><td>这份恩情铭刻于心。</td></tr>
                <tr><td>雕刻</td><td>本义，在竹木玉石上刻出形象</td><td>他在竹筒上雕刻出一幅山水。</td></tr>
                <tr><td>刻画</td><td>① 雕刻 ② 用文字<b>描摹人物形象</b>（最常考）</td><td>小说把这个人物刻画得入木三分。</td></tr>
                <tr><td>描绘</td><td>用线条、色彩或文字<b>画出、写出</b>整体图景</td><td>报告描绘了未来五年的蓝图。</td></tr>
                <tr><td>描摹</td><td>照着样子<b>摹写</b>，多指模仿书画或声音</td><td>他描摹各家碑帖，几可乱真。</td></tr>
                <tr><td>勾勒</td><td>用线条勾出轮廓，多指<b>简略地勾出大概</b></td><td>三笔两笔就勾勒出远山的轮廓。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 刻画 / 描绘</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>这部作品没有正面写战争，而是通过一个孩子的眼睛，把战火下的日常____得细致入微。</ExampleQuestion>
                <ExampleOptions><span>A. 描摹</span><span>B. 刻画</span><span>C. 描绘</span><span>D. 勾勒</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：空处搭配「<b>战火下的日常</b>」，且后文是「细致入微」，要表达<b>用文字塑造人物与场景形象</b>，选「刻画」。「描绘」多用于<b>整体图景、蓝图</b>，偏宏观；「勾勒」指<b>简略勾出轮廓</b>，与「细致入微」矛盾；「描摹」指<b>照着样子摹写</b>，对象多是字帖、声音。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>2. 凝聚 / 凝结 / 凝固 / 汇聚 / 聚集</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>凝聚</td><td>把分散的<b>力量、共识、心血</b>聚到一起（多抽象）</td><td>这份方案凝聚了全组的心血。</td></tr>
                <tr><td>凝结</td><td>由液体变成固体，或<b>心血、汗水凝成成果</b></td><td>这座桥凝结着两代人的汗水。</td></tr>
                <tr><td>凝固</td><td>由液体变固体；也指<b>停滞不动</b></td><td>空气仿佛凝固了，谁也不敢出声。</td></tr>
                <tr><td>汇聚</td><td>水流会合，比喻<b>人才、资源向一处集中</b></td><td>全国的高手汇聚于此。</td></tr>
                <tr><td>聚集</td><td>集合、聚在一起（最通用，可指人可指物）</td><td>人群聚集在广场上。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 凝聚 / 汇聚</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>这场大赛____了全国各地的能工巧匠，也____起行业对技能人才的新共识。</ExampleQuestion>
                <ExampleOptions><span>A. 聚集　凝结</span><span>B. 凝结　聚集</span><span>C. 汇聚　凝聚</span><span>D. 凝聚　汇聚</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：第一空对象是「<b>能工巧匠</b>」（人），用「汇聚」；第二空对象是「<b>共识</b>」（抽象），用「凝聚」。「聚集」虽也可指人，但与「全国各地」搭配不如「汇聚」有气势；「凝结」用于「汗水、心血凝成实物」，与「共识」不搭。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>3. 承载 / 载体 / 代表 / 象征 / 标志 / 延伸</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>承载</td><td>托着、担负着（<b>记忆、情感、功能、重量</b>）</td><td>这座老桥承载着几代人的记忆。</td></tr>
                <tr><td>载体</td><td>承载其他事物的<b>具体事物</b>（名词）</td><td>竹简是早期重要的文字载体。</td></tr>
                <tr><td>代表</td><td>① 替人办事 ② <b>体现某种意义</b> ③ 同类中的典型</td><td>这棵树代表着村里最老的一代。</td></tr>
                <tr><td>象征</td><td>用具体事物<b>表现某种抽象意义</b></td><td>橄榄枝象征和平。</td></tr>
                <tr><td>标志</td><td>表明<b>某种特征或阶段的记号</b></td><td>这条铁路的贯通标志着工程进入收尾。</td></tr>
                <tr><td>延伸</td><td>向外延长、扩展（空间、意义）</td><td>产业链向下游延伸。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 承载 / 象征</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>在老一辈人眼里，那口井不只是取水的地方，它____着整个村子的根。</ExampleQuestion>
                <ExampleOptions><span>A. 象征</span><span>B. 标志</span><span>C. 代表</span><span>D. 承载</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：空处是「<b>井 → 村子的根</b>」这种<b>具体事物表现抽象意义</b>的关系，用「象征」。「承载」后面接的是<b>记忆、情感、功能</b>这类可「托住」的东西，说「承载着根」不如「象征」准确；「标志」是<b>阶段的记号</b>；「代表」虽也可，但「象征」更强调<b>意象上的对应</b>。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>4. 反映 / 印证 / 见证 / 折射 / 投射 / 观照</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>反映</td><td>把客观情况<b>表现出来</b>；也指向上级转达意见</td><td>这份数据反映了真实的用工需求。</td></tr>
                <tr><td>印证</td><td>用材料<b>证实</b>某个说法、判断</td><td>考古发现印证了史书的记载。</td></tr>
                <tr><td>见证</td><td>亲眼看到并能作证；也指<b>历史的见证物</b></td><td>这座老站见证了城市的扩张。</td></tr>
                <tr><td>折射</td><td>光线偏折，比喻<b>通过某事物照出本质</b>（最常考）</td><td>一份小小的账单，折射出的是作风问题。</td></tr>
                <tr><td>投射</td><td>把情感、意愿<b>转移到对象上</b>；也指光线投到某处</td><td>他把对故乡的思念投射在这幅画里。</td></tr>
                <tr><td>观照</td><td>以某种眼光<b>审视、映照</b>（多用于文学评论）</td><td>作品观照现实，也观照人心。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 反映 / 折射</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>一张薄薄的报销单，____出的往往不只是财务问题，还有作风上的松懈。</ExampleQuestion>
                <ExampleOptions><span>A. 反映</span><span>B. 折射</span><span>C. 见证</span><span>D. 印证</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：「用<b>小事物照出大问题</b>」是「折射」的典型用法，句中「薄薄一张单子 → 作风问题」正对应这层。「反映」是<b>直接表现</b>，没有「透过现象看本质」的意味；「见证」要求<b>在场经历</b>；「印证」要求<b>先有说法再被证实</b>。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>5. 诠释 / 阐释 / 彰显 / 凸显 / 渲染 / 烘托</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>诠释</td><td>对作品、概念<b>作出解释</b>（可带主观理解）</td><td>他用一生诠释了什么叫「匠人」。</td></tr>
                <tr><td>阐释</td><td>阐明并解释（多用于理论、观点）</td><td>论文系统阐释了这一理论。</td></tr>
                <tr><td>彰显</td><td>鲜明地<b>显示、显露</b>（多指价值、精神）</td><td>这件小事彰显了制度的温度。</td></tr>
                <tr><td>凸显</td><td>清楚地<b>显现出来</b>（多指问题、矛盾）</td><td>这次事故凸显了监管的短板。</td></tr>
                <tr><td>渲染</td><td>用色彩、文字<b>夸大形容</b>以加强效果（可贬）</td><td>媒体过度渲染，反而引发恐慌。</td></tr>
                <tr><td>烘托</td><td>用<b>侧面的描写</b>使主体更鲜明</td><td>用寂静的夜色烘托人物的孤独。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 彰显 / 凸显</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>这次演练____了三方面的问题：预案不细、协同不畅、保障不足。</ExampleQuestion>
                <ExampleOptions><span>A. 诠释</span><span>B. 彰显</span><span>C. 凸显</span><span>D. 渲染</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：空处对象是「<b>问题</b>」，要用「凸显」（使问题清楚地显露）。「彰显」多用于<b>正面价值、精神</b>，与「问题」搭配感情色彩不合；「渲染」是<b>夸大形容</b>，含主观加工；「诠释」是<b>解释含义</b>，对象是作品、概念。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>6. 交融 / 融合 / 融入 / 渗透 / 渗入 / 裹挟</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>交融</td><td>互相<b>交织、融为一体</b>（多指情感、文化双向）</td><td>水乳交融，情感与理智在这里交融。</td></tr>
                <tr><td>融合</td><td>几种事物<b>合成一体</b>（最通用）</td><td>文旅融合，把文化做成体验。</td></tr>
                <tr><td>融入</td><td>一方<b>进入并适应</b>另一方（单向为主）</td><td>新员工很快融入了团队。</td></tr>
                <tr><td>渗透</td><td>液体渗过；比喻<b>逐渐侵入、影响到内部</b>（可贬）</td><td>不良信息正渗透进未成年人的社交圈。</td></tr>
                <tr><td>渗入</td><td>液体<b>慢慢透过</b>；也可指势力、影响进入</td><td>雨水渗入墙体，墙皮开始脱落。</td></tr>
                <tr><td>裹挟</td><td>被卷入、被迫跟着走（多含被动、贬义）</td><td>他被舆论裹挟，仓促作了决定。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 渗透 / 裹挟</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>一些打着「国学」旗号的培训，正悄悄____进校园周边的托管机构。</ExampleQuestion>
                <ExampleOptions><span>A. 交融</span><span>B. 融合</span><span>C. 融入</span><span>D. 渗透</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：句中「<b>打着旗号</b>」「<b>悄悄</b>」说明是<b>隐蔽地侵入</b>，带贬义，选「渗透」。「融入」「融合」都是<b>中性或褒义</b>的结合，不含「不该进来而进来」的意味；「交融」强调<b>双向交织</b>，与「单向进入」不符。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>7. 积淀 / 沉淀 / 积累 / 积聚</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>积淀</td><td>长期积累<b>形成的厚重成果</b>（文化、情感、经验）</td><td>千年文脉的积淀，让这座小城处处有来历。</td></tr>
                <tr><td>沉淀</td><td>比喻<b>沉下来、凝聚下来</b>（思想、情感、心绪）</td><td>喧闹散去，心里才慢慢沉淀出一点想法。</td></tr>
                <tr><td>积累</td><td><b>逐渐聚集</b>（最通用：知识、资金、经验）</td><td>他十几年积累的客户资源，一夜之间归零。</td></tr>
                <tr><td>积聚</td><td>由少到多<b>堆起来</b>（力量、财富、云气）</td><td>乌云积聚，眼看要下暴雨。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 积淀 / 沉淀</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>一座城市的文脉不是几年就能造出来的，它需要几代人的读书声慢慢____下来。</ExampleQuestion>
                <ExampleOptions><span>A. 沉淀</span><span>B. 积聚</span><span>C. 积累</span><span>D. 积淀</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：主语是「<b>文脉</b>」，指一代代累积形成的<b>厚重文化成果</b>，选「积淀」。「沉淀」多指情绪、心绪<b>由浮动到沉静</b>；「积聚」多用于力量、云气，强调物理堆集；「积累」最通用，但搭配「文脉」不如「积淀」有分量。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>8. 滋润 / 浸润 / 滋生 / 涵养 / 滋养 / 腐蚀</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>滋润</td><td>使湿润、不干枯；也指<b>使生活舒坦</b></td><td>一场小雨滋润了整片麦田。</td></tr>
                <tr><td>浸润</td><td>液体<b>渐渐渗入</b>；也指<b>长期熏陶</b></td><td>在传统文化浸润中长大的孩子，气质不同。</td></tr>
                <tr><td>滋生</td><td>繁殖、产生（多指<b>不好的东西</b>）</td><td>管理松懈，腐败就容易滋生。</td></tr>
                <tr><td>涵养</td><td>① 修养 ② <b>蓄积并养护</b>（水源、品格）</td><td>涵养水源，是生态保护的第一课。</td></tr>
                <tr><td>滋养</td><td>供给养分，使成长（多指<b>正面</b>）</td><td>这片土地滋养了一代代读书人。</td></tr>
                <tr><td>腐蚀</td><td>使物体损坏；比喻<b>使人的思想堕落</b></td><td>糖衣炮弹最容易腐蚀意志薄弱者。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 滋生 / 滋养</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>权力一旦失去监督，就容易____腐败；而好的制度，恰恰能____清风正气。</ExampleQuestion>
                <ExampleOptions><span>A. 滋生　涵养</span><span>B. 滋养　滋生</span><span>C. 腐蚀　浸润</span><span>D. 滋生　腐蚀</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：第一空对象是「<b>腐败</b>」（坏东西），用「滋生」；第二空对象是「<b>清风正气</b>」（好东西），用「涵养」。<b>这一组的判据只有一条：后面接的是好是坏。</b>「滋养」只接好的，「滋生」只接坏的，「腐蚀」是「使变坏」。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>9. 培育 / 激发 / 激励 / 引领 / 引导 / 推动</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>培育</td><td>培养使之成长（<b>产业、人才、市场</b>）</td><td>培育壮大县域特色产业。</td></tr>
                <tr><td>激发</td><td><b>刺激使产生</b>（活力、热情、潜能）</td><td>改革激发了市场活力。</td></tr>
                <tr><td>激励</td><td>用物质或精神手段<b>使人努力</b></td><td>用积分制激励村民参与。</td></tr>
                <tr><td>引领</td><td><b>带领、引导</b>方向（多指作用、地位）</td><td>龙头企业引领产业升级。</td></tr>
                <tr><td>引导</td><td>带领、指引（最通用，<b>也可指引导舆论</b>）</td><td>及时引导舆论，避免误读。</td></tr>
                <tr><td>推动</td><td>用力<b>使前进</b>（工作、事业、进程）</td><td>推动政策落地见效。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 激发 / 激励</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>这项改革打破了「大锅饭」，把每个人的干劲都____了出来。</ExampleQuestion>
                <ExampleOptions><span>A. 培育</span><span>B. 激励</span><span>C. 激发</span><span>D. 引导</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：空处搭配「<b>干劲……出来</b>」，是<b>把内在的东西刺激出来</b>，用「激发」。「激励」是<b>用手段使人努力</b>，一般说「激励干部担当」，后面不接「出来」；「引导」是<b>指方向</b>；「培育」是<b>培养成长</b>。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>10. 贯穿 / 贯通 / 重塑 / 重构 / 发扬</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>贯穿</td><td>从头到尾<b>穿过、连通</b>（多指线索、主线）</td><td>这条主线贯穿全书。</td></tr>
                <tr><td>贯通</td><td>① <b>全线连通</b> ② 融会理解（融会贯通）</td><td>隧道全线贯通，比计划提前两个月。</td></tr>
                <tr><td>重塑</td><td>重新<b>塑造</b>（形象、格局、信心）</td><td>这次改革重塑了行业格局。</td></tr>
                <tr><td>重构</td><td>重新<b>构建</b>（结构、体系、逻辑）</td><td>重构业务流程，砍掉三层审批。</td></tr>
                <tr><td>发扬</td><td>把好的<b>进一步发展和提倡</b></td><td>发扬优良传统，接续奋斗。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 贯穿 / 贯通</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>「以人民为中心」这条主线，____了报告的全篇；而基础设施的互联____，则让区域协同有了骨架。</ExampleQuestion>
                <ExampleOptions><span>A. 贯穿　贯穿</span><span>B. 贯通　贯通</span><span>C. 贯穿　贯通</span><span>D. 贯通　贯穿</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：第一空是「<b>主线贯穿全篇</b>」，用「贯穿」（从头到尾穿过）；第二空是「<b>互联贯通</b>」，指线路全线连通，用「贯通」。<b>记法：贯穿＝一条线穿过整体；贯通＝两头接上、全线通了。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>11. 演进 / 演变 / 转化 / 蜕变 / 嬗变 / 催生 / 催化</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>演进</td><td><b>逐渐发展变化</b>（多指制度、技术，含进步意味）</td><td>治理模式在十年间不断演进。</td></tr>
                <tr><td>演变</td><td><b>长时间的发展变化</b>（中性，可好可坏）</td><td>方言的演变有其内在规律。</td></tr>
                <tr><td>转化</td><td><b>转变成另一种形态</b>（成果转化、能量转化）</td><td>把科研成果转化为生产力。</td></tr>
                <tr><td>蜕变</td><td>① 脱壳变化 ② 比喻<b>本质上的改变</b>（可指变好或堕落）</td><td>三年整治，这条河完成了蜕变。</td></tr>
                <tr><td>嬗变</td><td><b>更替、变迁</b>（书面语，多指文化、观念）</td><td>审美观念的嬗变，往往滞后于技术。</td></tr>
                <tr><td>催生</td><td>促使<b>新事物产生</b></td><td>新需求催生了新业态。</td></tr>
                <tr><td>催化</td><td><b>加速</b>变化的发生（催化劑）</td><td>数字化催化了产业分工的细化。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 催生 / 催化</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>线上问诊的需求____了互联网医院这一新业态，而支付方式的打通又____了整个流程的重组。</ExampleQuestion>
                <ExampleOptions><span>A. 催化　催生</span><span>B. 演变　催化</span><span>C. 催生　演变</span><span>D. 催生　催化</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：第一空「<b>需求 → 新业态</b>」是<b>从无到有</b>，用「催生」；第二空「<b>支付打通 → 加速重组</b>」是<b>让已有变化更快</b>，用「催化」。<b>催生＝从无到有；催化＝由慢变快。</b>这一条在真题里反复出现。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>12. 衍生 / 涵盖 / 蕴含 / 蕴藏 / 包蕴</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>衍生</td><td>① <b>演变产生</b>（新事物）② 金融衍生品</td><td>新需求衍生出一批新职业。</td></tr>
                <tr><td>涵盖</td><td><b>包括、覆盖</b>（范围）</td><td>方案涵盖规划、建设、运营全链条。</td></tr>
                <tr><td>蕴含</td><td>内部<b>包含</b>（道理、情感、意义）</td><td>这句话蕴含着深刻的方法论。</td></tr>
                <tr><td>蕴藏</td><td>蓄积<b>尚未显露</b>（资源、潜力）</td><td>这片山区蕴藏着丰富的矿产。</td></tr>
                <tr><td>包蕴</td><td>包含（多用于抽象，书面）</td><td>这首短诗包蕴着巨大的情感张力。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 蕴含 / 蕴藏</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>这片戈壁之下____着丰富的锂矿，而这句朴素的民谚里，也____着同样的道理：好东西往往埋在深处。</ExampleQuestion>
                <ExampleOptions><span>A. 蕴藏　蕴含</span><span>B. 蕴含　蕴藏</span><span>C. 涵盖　蕴含</span><span>D. 蕴藏　涵盖</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：第一空是「<b>地下矿藏</b>」，用「蕴藏」（蓄积未显露的实物资源）；第二空是「<b>谚语里的道理</b>」，用「蕴含」。<b>记法：蕴藏＝藏着实物；蕴含＝含着道理。</b>「涵盖」强调范围覆盖，与「深处」的语义不合。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>13. 桎梏 / 藩篱 / 窠臼 / 羁绊 / 牢笼 / 泥沼</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>桎梏</td><td>脚镣手铐，比喻<b>束缚人的事物</b>（多抽象）</td><td>打破思维的桎梏，才敢想新办法。</td></tr>
                <tr><td>藩篱</td><td><b>篱笆</b>，比喻界限、屏障（多指壁垒）</td><td>拆除数据藩篱，让信息互通。</td></tr>
                <tr><td>窠臼</td><td>旧格式、老套子（<b>不落窠臼</b>）</td><td>这部剧不落窠臼，结局出人意料。</td></tr>
                <tr><td>羁绊</td><td>缠住脚的东西，比喻<b>牵制、拖累</b></td><td>甩掉人情羁绊，才能公正办事。</td></tr>
                <tr><td>牢笼</td><td>关鸟兽的器具，比喻<b>困住人的环境</b></td><td>冲破旧观念的牢笼。</td></tr>
                <tr><td>泥沼</td><td>泥泞的沼泽，比喻<b>难以脱身的困境</b></td><td>越拖越深，终于陷进债务泥沼。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 桎梏 / 藩篱</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>要打通产学研，先得拆掉校门与厂门之间的那道____。</ExampleQuestion>
                <ExampleOptions><span>A. 羁绊</span><span>B. 桎梏</span><span>C. 藩篱</span><span>D. 窠臼</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：空处指<b>两个主体之间的界限、壁垒</b>，且搭配「拆掉」，用「藩篱」（篱笆＝界限）。「桎梏」指<b>加在人身上的束缚</b>，不说「拆掉桎梏」，多说「打破桎梏」；「窠臼」是<b>旧格式</b>，搭配「不落窠臼」；「羁绊」是<b>牵制拖累</b>，多指人情、关系。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>14. 妨碍 / 阻滞 / 制约 / 遏制 / 遏止 / 扼制</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>妨碍</td><td><b>使事情不能顺利进行</b>（多指具体行为）</td><td>占道经营妨碍通行。</td></tr>
                <tr><td>阻滞</td><td><b>使停滞不前</b>（多指流通、进程）</td><td>资金阻滞在中间环节。</td></tr>
                <tr><td>制约</td><td>① <b>限制约束</b> ② 甲事物决定乙事物（哲学术语）</td><td>人才短缺制约了产业升级。</td></tr>
                <tr><td>遏制</td><td><b>控制住不让发展</b>（势头、蔓延）</td><td>坚决遏制房价过快上涨。</td></tr>
                <tr><td>遏止</td><td><b>用力使其中止</b>（趋势、脚步，语气更重）</td><td>任何力量都无法遏止历史前进的脚步。</td></tr>
                <tr><td>扼制</td><td><b>扼守、控制要害</b>（要地、咽喉）</td><td>扼制住交通咽喉，就掌握了主动。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 制约 / 遏制</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关键技术受制于人，已经成为____产业升级的最大瓶颈；当务之急是____低端重复建设的势头。</ExampleQuestion>
                <ExampleOptions><span>A. 妨碍　遏止</span><span>B. 阻滞　扼制</span><span>C. 制约　遏制</span><span>D. 遏制　制约</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：第一空是「甲限制乙」，用「制约」（C 制约 D）；第二空宾语是「<b>势头</b>」，用「遏制」。「遏止」宾语多是「脚步、趋势」，语气更重；「扼制」宾语是「要地、咽喉」；「妨碍」程度太轻。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>15. 徜徉 / 徘徊 / 蔓延 / 秉持 / 沿袭 / 契合</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>徜徉</td><td><b>安闲自在地走动</b>（多指游赏，褒）</td><td>他常在书海里徜徉，一待就是半天。</td></tr>
                <tr><td>徘徊</td><td>① 在一个地方来回走 ② 比喻<b>犹豫不决</b>或「在某数值上下浮动」</td><td>他在门口徘徊了很久，终究没进去。</td></tr>
                <tr><td>蔓延</td><td>像蔓草一样<b>向四周扩展</b>（多指不好的事物）</td><td>火势迅速蔓延到相邻的仓库。</td></tr>
                <tr><td>秉持</td><td><b>坚持、持有</b>（理念、原则）</td><td>始终秉持客观公正的立场。</td></tr>
                <tr><td>沿袭</td><td>照着<b>旧例、旧制</b>继续下去</td><td>这套礼俗沿袭了六百多年。</td></tr>
                <tr><td>契合</td><td><b>符合、吻合</b>（需求、气质）</td><td>这个方案与市场需求高度契合。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 徜徉 / 徘徊</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>他在展厅里____了整整一个下午，一幅一幅看过去，忘了时间。</ExampleQuestion>
                <ExampleOptions><span>A. 徜徉</span><span>B. 蔓延</span><span>C. 沿袭</span><span>D. 徘徊</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中「<b>一幅一幅看过去，忘了时间</b>」是<b>安闲自在地游赏</b>，用「徜徉」。「徘徊」虽也是来回走，但多含<b>犹豫、焦虑</b>的色彩，或用于数值浮动；「蔓延」是<b>向四周扩展</b>；「沿袭」是<b>照旧例</b>。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>16. 肇始 / 发轫 / 滥觞 / 开端 / 孕育 / 式微 / 湮灭</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>肇始</td><td><b>开始</b>（书面，多指事件、时期）</td><td>这项制度肇始于上世纪八十年代。</td></tr>
                <tr><td>发轫</td><td>拿开支住车轮的木头使车前行，比喻<b>事业的开端</b></td><td>中国航天发轫于戈壁滩上的一次试验。</td></tr>
                <tr><td>滥觞</td><td>江河发源处水浅只能浮起酒杯，比喻<b>事物的起源</b></td><td>这种文体滥觞于先秦。</td></tr>
                <tr><td>开端</td><td>开始（最通用）</td><td>这是两国关系的新开端。</td></tr>
                <tr><td>孕育</td><td><b>在内部萌生、培养</b>（多指新生事物）</td><td>这片土壤孕育了独特的民间艺术。</td></tr>
                <tr><td>式微</td><td><b>衰落</b>（式＝语气词，微＝衰微）</td><td>随着纸媒萎缩，传统广告模式日益式微。</td></tr>
                <tr><td>湮灭</td><td><b>埋没、消失</b>（多指痕迹、声音）</td><td>那段历史几乎湮灭在档案里。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 滥觞 / 发轫</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>这种带有说唱元素的民间曲艺，一般认为____于宋元时期的市井勾栏。</ExampleQuestion>
                <ExampleOptions><span>A. 发轫</span><span>B. 滥觞</span><span>C. 肇始</span><span>D. 孕育</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：空处要表达「<b>某种文艺形式的源头</b>」，且为书面语，用「滥觞」。「发轫」多指<b>事业、进程的开端</b>（航天发轫）；「肇始」多指<b>制度、时期开始</b>；「孕育」强调<b>在内部萌生</b>，需有母体作主语。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>17. 甄别 / 鉴别 / 辨别 / 启用 / 起用</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>甄别</td><td><b>审查辨别</b>真伪优劣（多对人、材料，书面）</td><td>招聘时要仔细甄别简历的真伪。</td></tr>
                <tr><td>鉴别</td><td>辨别<b>真假、好坏、年代</b>（多对物品、文物）</td><td>专家正在鉴别这批文物的年代。</td></tr>
                <tr><td>辨别</td><td>分辨<b>方向、声音、是非</b>（最通用）</td><td>光线太暗，很难辨别方向。</td></tr>
                <tr><td>启用</td><td>开始使用<b>事物</b>（设备、印章、新校区）</td><td>新航站楼将于年底启用。</td></tr>
                <tr><td>起用</td><td>重新任用或提拔<b>人</b></td><td>球队起用了三名年轻球员。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 启用 / 起用</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>新落成的市图书馆将于下月正式____，同时____一批年轻馆员担任阅读推广工作。</ExampleQuestion>
                <ExampleOptions><span>A. 起用　起用</span><span>B. 启用　起用</span><span>C. 起用　启用</span><span>D. 启用　启用</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：第一空对象是「<b>图书馆</b>」（物），用「启用」；第二空对象是「<b>年轻馆员</b>」（人），用「起用」。<b>这一组只看后面跟的是人还是物，不用想意思。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>18. 以至 / 以致 / 必需 / 必须 / 表明 / 标明 / 考察 / 考查 / 权利 / 权力</BlockTitle>
              <DataTable>
                <tr><th>词语</th><th>区别</th><th>例句</th></tr>
                <tr><td>以至</td><td>到……的程度（中性，可作「以至于」）</td><td>他读得太投入，以至忘了吃饭。</td></tr>
                <tr><td>以致</td><td>因而造成（<b>多接不好的结果</b>）</td><td>他工作疏忽，以致造成了重大损失。</td></tr>
                <tr><td>必需</td><td><b>形容词</b>，一定要有的（修饰名词）</td><td>水是生命必需的资源。</td></tr>
                <tr><td>必须</td><td><b>副词</b>，一定要（修饰动词）</td><td>你必须今天交稿。</td></tr>
                <tr><td>表明</td><td>把<b>态度、立场、结果</b>表示清楚</td><td>数据表明，政策已初见成效。</td></tr>
                <tr><td>标明</td><td>做出<b>记号或文字</b>让人知道</td><td>货架上标明了产地和价格。</td></tr>
                <tr><td>考察</td><td><b>实地观察调查</b></td><td>代表团赴南方考察产业转型。</td></tr>
                <tr><td>考查</td><td>用标准<b>检查衡量</b>（成绩、能力）</td><td>期末考查以课程论文为主。</td></tr>
                <tr><td>权利</td><td>依法享有的<b>权益</b>（与义务相对）</td><td>消费者有权依法维护自己的权利。</td></tr>
                <tr><td>权力</td><td><b>强制力量、职权</b></td><td>权力必须在阳光下运行。</td></tr>
              </DataTable>
            <Example>
              <ExampleHeader>例题 · 实词 以至 / 以致</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>他读书极投入，常常一坐就是一整天，____忘了吃饭；也正因为长期作息紊乱，____身体每况愈下。</ExampleQuestion>
                <ExampleOptions><span>A. 以至　以至</span><span>B. 以致　以致</span><span>C. 以至　以致</span><span>D. 以致　以至</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：第一空后是「<b>忘了吃饭</b>」，属程度加深带来的<b>自然结果</b>，不含褒贬，用「以至」；第二空后是「<b>身体每况愈下</b>」，是明显<b>坏结果</b>，用「以致」。<b>记法：以至＝到……的程度；以致＝因而造成（多接坏结果）。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
    </>
  )
}
