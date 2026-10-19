import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 二十四、「十五五」规划与 2026 年重要政策
 *
 * @returns 该节正文。
 */
export default function S25(): ReactElement {
  return (
    <>
      <Callout variant="key">这一节是 2026 年新增的<b>政策专题</b>：十五五规划建议 + 2026 政府工作报告 + 中央一号文件 + 农业农村现代化「十五五」规划。考法集中在<b>数字</b>（1.45 万亿斤、67%、4.5%–5%）和<b>定位词</b>（主题 / 根本目的 / 总抓手 / 首要功能）。</Callout>
      
            <Block>
              <BlockTitle>1. 十五五规划建议：一个中心、五个「以」</BlockTitle>
              <PointList>
                <li>文件：《关于制定国民经济和社会发展第十五个五年规划的建议》（2025 年 10 月）。</li>
                <li>五个定位词（<b>每年都会互换</b>）：<b>以经济建设为中心</b>；<b>以推动高质量发展为主题</b>；<b>以满足人民日益增长的美好生活需要为根本目的</b>；<b>以改革创新为根本动力</b>；<b>以全面从严治党为根本保障</b>。</li>
                <li>主要目标：高质量发展取得显著成效、科技自立自强水平大幅提高、进一步全面深化改革取得新突破、社会文明程度明显提升、人民生活品质不断提高、美丽中国建设取得新的重大进展、国家安全屏障更加巩固。</li>
                <li>十五五末：<b>推动人的全面发展、全体人民共同富裕迈出坚实步伐</b>，<b>确保基本实现社会主义现代化取得决定性进展</b>。</li>
                <li><b>人均 GDP 达到中等发达国家水平、进入创新型国家前列，是 2035 年目标</b>，不是十五五目标。</li>
              </PointList>
              <Callout variant="warn"><b>最经典的坑：</b>把「主题」写成「满足人民美好生活需要」（那是<b>根本目的</b>），把「根本目的」写成「推动高质量发展」。<b>主题＝高质量发展，根本目的＝满足美好生活需要。</b></Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题117 · 十五五主线（速练21题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于「十五五」规划建议，下列说法正确的有：<br />①以经济建设为中心<br />②以推动高质量发展为主题<br />③以满足人民日益增长的美好生活需要为根本目的<br />④以改革创新为根本保障</ExampleQuestion>
                <ExampleOptions>A.①②③　B.①②④　C.②③④　D.①③④</ExampleOptions>
                <ExampleAnswer><b>解析：</b>④错，<b>改革创新是根本动力</b>，<b>全面从严治党是根本保障</b>。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 十五五分领域：每条只记一个定位词</BlockTitle>
              <PointList>
                <li><b>第一项战略任务</b>：<b>建设现代化产业体系，巩固壮大实体经济根基</b>（这一点被专门强调「经过深思熟虑」）。</li>
                <li>现代化产业体系是<b>中国式现代化的物质技术基础</b>；<b>以先进制造业为骨干</b>；着力点放在<b>实体经济</b>上；方向是<b>智能化、绿色化、融合化</b>。</li>
                <li>建设<b>制造强国、质量强国、航天强国、交通强国、网络强国</b>；保持制造业<b>合理比重</b>。</li>
                <li>国内市场：坚持<b>扩大内需这个战略基点</b>；<b>惠民生和促消费、投资于物和投资于人</b>紧密结合；<b>以新需求引领新供给、以新供给创造新需求</b>（不是反过来）。</li>
                <li>分配：提高<b>居民收入在国民收入分配中的比重</b>、提高<b>劳动报酬在初次分配中的比重</b>；形成<b>橄榄型</b>分配格局。</li>
                <li>就业：着力解决<b>结构性就业矛盾</b>（不是周期性）；健全<b>终身职业技能培训</b>制度。</li>
                <li>生态：<b>以国家公园为主体</b>的自然保护地体系；<b>碳排放总量和强度「双控」</b>；<b>碳达峰</b>目标如期实现（碳中和是 2060 年）。</li>
                <li>城镇化：推行由<b>常住地</b>登记户口提供基本公共服务；坚持城市<b>内涵式</b>发展（不是外延式）。</li>
                <li>开放：<b>以服务业为重点</b>扩大市场准入和开放领域；<b>缩减</b>外资准入负面清单。</li>
                <li>区域：巩固提升<b>京津冀、长三角、粤港澳大湾区</b>高质量发展动力源作用；加大<b>差异化</b>政策支持革命老区、民族地区、边疆地区。</li>
                <li>安全：把捍卫<b>政治安全</b>摆在首位；公共安全治理向<b>事前预防</b>转型。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题118 · 十五五分领域（速练21题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于「十五五」规划建议的分领域部署，下列说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.构建以现代农业为骨干的现代化产业体系<br />B.把发展经济的着力点放在数字经济上<br />C.以服务业为重点扩大市场准入和开放领域<br />D.坚持城市外延式发展，建设现代化人民城市</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 错，应以<b>先进制造业</b>为骨干；B 错，着力点放在<b>实体经济</b>上；D 错，是<b>内涵式</b>发展。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 2026 政府工作报告：2025 成绩单</BlockTitle>
              <PointList>
                <li>GDP <b>增长 5%</b>，总量 <b>140.19 万亿元</b>（首次超 140 万亿）。</li>
                <li>城镇新增就业 <b>1267 万人</b>，调查失业率平均 <b>5.2%</b>。</li>
                <li>粮食产量 <b>1.43 万亿斤</b>；新能源汽车年产量超 <b>1600 万辆</b>，充电设施突破 <b>2000 万个</b>。</li>
                <li>常住人口城镇化率 <b>67.9%</b>。</li>
                <li>民生：<b>学前一年免费教育</b>惠及 <b>1400 万</b>儿童；<b>育儿补贴</b>惠及 <b>3000 多万</b>婴幼儿。</li>
                <li>科技与工程：<b>福建舰</b>入列（首艘国产电磁弹射型航母）、<b>雅下水电</b>开工、<b>天问二号</b>、国产大模型引领全球开源生态、芯片自主研发新突破。</li>
                <li>十四五收官：<b>制造业增加值连续 16 年全球第一</b>；<b>制造业领域外资准入限制全部取消</b>；<b>货物贸易第一大国</b>；劳动年龄人口平均受教育年限 <b>11.3 年</b>；人均预期寿命 <b>79.25 岁</b>；森林覆盖率 <b>25% 以上</b>；空气质量优良天数比例 <b>89.3%</b>。</li>
              </PointList>
              <Callout variant="warn"><b>三个易错：</b>① 总量是 <b>140.19 万亿</b>（不是「首次超 130 万亿」）；② 制造业增加值连续 <b>16 年</b>全球第一；③ 货物贸易是<b>第一</b>大国（不是第二）。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题119 · 2025 成绩（政府工作报告）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于 2025 年我国发展成果，下列说法正确的有：<br />①国内生产总值增长 5%，总量达到 140.19 万亿元<br />②城镇新增就业 1267 万人，调查失业率平均 5.2%<br />③粮食产量达到 1.43 万亿斤<br />④制造业增加值规模连续 16 年保持全球第一</ExampleQuestion>
                <ExampleOptions>A.①②③　B.①②④　C.②③④　D.①②③④</ExampleOptions>
                <ExampleAnswer><b>解析：</b>四项均正确。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 2026 政府工作报告：目标与政策取向</BlockTitle>
              <DataTable>
                <tr><th>指标</th><th>2026 年目标</th></tr>
                <tr><td><b>经济增长</b></td><td><b>4.5%–5%</b>，实际工作中争取更好结果</td></tr>
                <tr><td>城镇调查失业率 / 新增就业</td><td><b>5.5% 左右</b> / <b>1200 万人以上</b></td></tr>
                <tr><td>居民消费价格涨幅</td><td><b>2% 左右</b></td></tr>
                <tr><td>粮食产量</td><td><b>1.4 万亿斤左右</b></td></tr>
                <tr><td>单位 GDP 二氧化碳排放</td><td>降低 <b>3.8% 左右</b></td></tr>
                <tr><td><b>赤字率</b></td><td><b>4% 左右</b>，赤字规模 <b>5.89 万亿元</b>、比上年增加 2300 亿元</td></tr>
              </DataTable>
              <PointList>
                <li>财政货币：实施<b>更加积极的财政政策</b>和<b>适度宽松的货币政策</b>；<b>下调</b>政策利率和存款准备金率；<b>降低</b>融资中间费用。</li>
                <li>消费：安排<b>超长期特别国债 2500 亿元</b>支持消费品以旧换新；优化<b>入境</b>消费环境、打造「购在中国」品牌；支持有条件地方推广中小学<b>春秋假</b>。</li>
                <li>投资：提高<b>民生类</b>政府投资比重；增强<b>市场主导</b>的有效投资增长动力（不是政府主导）；引导民间投资向高技术、现代服务业拓展。</li>
                <li>产业：未来产业布局<b>未来能源、量子科技、生物制造、具身智能、脑机接口、6G</b>；新兴支柱产业为<b>集成电路、航空航天、生物医药、低空经济</b>；<b>央企国企</b>带头开放应用场景。</li>
                <li>统一大市场：出台地方政府<b>招商引资鼓励和禁止事项清单</b>；公平竞争审查<b>刚性</b>约束；整治<b>「内卷式」竞争</b>。</li>
                <li>财税：提高<b>国有资本收益收取比例</b>；深化<b>零基预算</b>改革；消费税<b>征收环节后移</b>。</li>
                <li>教育：<b>增加</b>普通高中学位供给（不是压缩）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题120 · 2026 目标（政府工作报告）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于 2026 年发展主要预期目标，下列说法正确的有：<br />①经济增长 4.5%–5%<br />②城镇调查失业率 5.5% 左右，城镇新增就业 1200 万人以上<br />③居民消费价格涨幅 2% 左右<br />④赤字率按 4% 左右安排</ExampleQuestion>
                <ExampleOptions>A.①②③　B.②③④　C.①②④　D.①②③④</ExampleOptions>
                <ExampleAnswer><b>解析：</b>四项均正确（赤字规模 5.89 万亿元，比上年增加 2300 亿元）。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>5. 2026 年中央一号文件</BlockTitle>
              <PointList>
                <li>文件：《关于<b>锚定农业农村现代化</b>扎实推进乡村全面振兴的意见》。</li>
                <li>这是<b>党的十八大以来第 14 个</b>指导「三农」工作的一号文件；<b>2004 年</b>是<b>新世纪首个</b>三农主题一号文件。</li>
                <li>成绩底数：<b>连续 9 年</b>粮食产量稳定在 <b>1.3 万亿斤</b>，目前<b>已突破 1.4 万亿斤</b>；以占世界 <b>9% 的耕地</b>养活了世界近 <b>20%</b> 的人口。</li>
                <li>三个定位：<b>总抓手＝推进乡村全面振兴</b>；<b>引领＝学习运用「千万工程」经验</b>；<b>根本动力＝改革创新</b>。</li>
                <li>底线：<b>守牢国家粮食安全底线</b>，持续巩固拓展脱贫攻坚成果。</li>
                <li>产能：加力实施新一轮<b>千亿斤</b>粮食产能提升行动；坚持产量产能、生产生态、增产增收<b>一起抓</b>。</li>
                <li>价格：合理确定稻谷、小麦<b>最低</b>收购价（不是最高）；支持粮食<b>主产区</b>补充财力。</li>
                <li>土地：<b>全面开展</b>第二轮土地承包到期后再延长 <b>三十年整省试点</b>；集体经营性建设用地入市<b>严禁用于建设商品住房</b>。</li>
                <li>人口：推行由<b>常住地</b>登记户口提供基本公共服务（不是户籍地）。</li>
                <li>领导：坚持<b>五级书记</b>抓乡村振兴；公务员招录计划向县乡倾斜，<b>原则上不得从县乡借调</b>工作人员。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题121 · 一号文件（专题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于 2026 年中央一号文件，下列说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.这是党的十八大以来第 12 个指导「三农」工作的一号文件<br />B.以推进乡村全面振兴为总抓手，以学习运用「千万工程」经验为引领，以改革创新为根本动力<br />C.我国已连续 9 年粮食产量稳定在 1.4 万亿斤<br />D.农村集体经营性建设用地入市可优先用于建设商品住房</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 错，是第 <b>14</b> 个；C 错，连续 9 年稳定在 <b>1.3 万亿斤</b>、现已突破 1.4 万亿斤；D 错，入市土地<b>严禁</b>用于建设商品住房。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>6. 加快农业农村现代化「十五五」规划</BlockTitle>
              <PointList>
                <li>2026 年 6 月 2 日国务院印发；思路是「<b>以推进乡村全面振兴为总抓手</b>、以<b>千万工程</b>经验为引领、以<b>改革创新</b>为根本动力」。</li>
                <li><b>到 2030 年四个硬指标</b>：粮食综合生产能力 <b>1.45 万亿斤左右</b>；农业科技进步贡献率 <b>67%</b>；农作物耕种收综合机械化率<b>超过 80%</b>；农产品质量安全例行监测总体合格率 <b>98% 以上</b>。</li>
                <li><b>到 2035 年</b>：乡村全面振兴取得<b>决定性进展</b>，农业现代化<b>基本实现</b>，农村基本具备现代生活条件。</li>
                <li>高标准农田<b>优先建设范围</b>：东北黑土地区、平原地区、具备水利灌溉条件地区、粮食产量高且增产潜力大地区；把 <b>720 个</b>粮食产能提升重点县（场）具备条件的永久基本农田全部建成高标准农田。</li>
                <li>帮扶单元：把<b>乡村振兴重点帮扶县</b>作为欠发达地区的帮扶单元继续集中支持。</li>
                <li>帮扶方式：强化<b>开发式</b>帮扶，发挥<b>社会救助</b>兜底保障作用。</li>
                <li>监测体系：统一规范、精准识别、<b>动态调整</b>；帮扶对象<b>动态调整</b>（不是静态）。</li>
              </PointList>
              <Callout variant="tip"><b>三组数字对比记：</b>2025 实绩 1.43 万亿斤 → 2030 目标 1.45 万亿斤；一号文件「千亿斤」产能提升 → 规划 720 个重点县；2030「重大进展」→ 2035「决定性进展」。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题122 · 农业现代化规划（专题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于《加快农业农村现代化「十五五」规划》，下列说法错误的是：</ExampleQuestion>
                <ExampleOptions>A.到 2030 年粮食综合生产能力达到 1.45 万亿斤左右<br />B.到 2030 年农业科技进步贡献率达到 67%<br />C.到 2035 年乡村全面振兴取得决定性进展、农业现代化基本实现<br />D.高标准农田优先在云贵地区、丘陵地带的梯田建设</ExampleOptions>
                <ExampleAnswer><b>解析：</b>D 错。优先范围是<b>东北黑土地区、平原地区、具备水利灌溉条件地区、粮食产量高且增产潜力大地区</b>。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>7. 四个「2035」与三组数字，别混</BlockTitle>
              <DataTable>
                <tr><th>容易混的表述</th><th>正确归属</th></tr>
                <tr><td>人均 GDP 达到中等发达国家水平</td><td><b>2035 年</b>远景目标（不是十五五）</td></tr>
                <tr><td>进入创新型国家前列</td><td><b>2035 年</b></td></tr>
                <tr><td>建成教育强国、科技强国、人才强国、文化强国、体育强国、健康中国</td><td><b>2035 年</b></td></tr>
                <tr><td>到 <b>2035 年</b>建成健康中国</td><td>健康中国的目标是 2035 年</td></tr>
                <tr><td>共同富裕取得明显的实质性进展</td><td><b>2035 年</b>（本世纪中叶基本实现）</td></tr>
                <tr><td>基本实现社会主义现代化取得<b>决定性</b>进展</td><td><b>十五五末</b></td></tr>
                <tr><td>乡村全面振兴取得<b>决定性</b>进展、农业现代化基本实现</td><td>农业农村现代化规划的 <b>2035 年</b>目标</td></tr>
              </DataTable>
              <Callout variant="warn"><b>一句话防坑：</b>凡是「中等发达国家水平」「创新型国家前列」「建成××强国」，答案都是 <b>2035</b>；凡是「决定性进展」「迈出坚实步伐」，答案都在<b>十五五末</b>。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题123 · 时间点辨析（综合）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列目标与时间节点对应正确的是：</ExampleQuestion>
                <ExampleOptions>A.人均国内生产总值达到中等发达国家水平——「十五五」末<br />B.基本实现社会主义现代化取得决定性进展——2035 年<br />C.进入创新型国家前列——2035 年<br />D.共同富裕基本实现——2035 年</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 错，中等发达国家水平是 <b>2035</b>；B 错，「决定性进展」是<b>十五五末</b>；D 错，共同富裕<b>本世纪中叶</b>才基本实现，2035 只是「明显实质性进展」。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
