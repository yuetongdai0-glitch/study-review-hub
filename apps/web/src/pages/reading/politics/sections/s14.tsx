import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十四、经济常识
 *
 * @returns 该节正文。
 */
export default function S15(): ReactElement {
  return (
    <>
      <Callout variant="key">经济常识只有两类题：<b>概念归属</b>（这个现象叫哪个效应）和<b>政策方向</b>（通胀该加息还是降息）。把「通胀—紧缩、通缩—扩张」这一条主线抓住，一半题直接出答案。</Callout>
      
            <Block>
              <BlockTitle>1. 市场结构类型（四类，看厂商数量与产品差别）</BlockTitle>
              <PointList>
                <li><b>完全竞争</b>：厂商<b>无数</b>、产品<b>无差别</b>；<b>无定价权</b>、进出<b>很容易</b>——典型是部分农产品（小麦）。</li>
                <li><b>垄断竞争</b>：厂商<b>大量</b>、产品<b>有差别</b>（口味、装修、品牌）；<b>部分</b>定价权、进出<b>比较容易</b>——轻工品、零售、连锁咖啡。</li>
                <li><b>寡头垄断</b>：厂商<b>几家</b>、有/无差别；<b>相当程度</b>定价权、进出<b>比较困难</b>——钢铁、汽车、石油、航空。</li>
                <li><b>完全垄断</b>：厂商<b>唯一一家</b>、产品唯一；<b>很大程度</b>定价权、进出<b>很困难</b>——公共事业（居民供水）。</li>
              </PointList>
              <Callout variant="tip"><b>一句话判型：</b>看「有几家」＋「产品有没有差别」。无数且同质＝完全竞争；几家＝寡头；一家＝完全垄断；大量但有差别＝垄断竞争。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题76 · 市场结构（冲刺班）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列关于市场结构的判断，正确的是：</ExampleQuestion>
                <ExampleOptions>A.小麦种植市场——完全竞争，农户可自主定价且产品差异显著<br />B.城市连锁咖啡市场——垄断竞争，企业数量较多、产品有口味与装修差异、新品牌易进入<br />C.某国民用航空市场——寡头垄断，仅 1 家航空公司运营<br />D.某城市居民供水——完全垄断，多家企业竞争、政府价格管制</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 错，农产品<b>同质</b>、单个农户<b>无法定价</b>；C 错，仅 1 家是<b>完全垄断</b>；D 错，「多家竞争」与完全垄断矛盾。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 税收</BlockTitle>
              <PointList>
                <li>税收是国家<b>凭借政治权力</b>、无偿征收实物或货币以取得财政收入的工具。</li>
                <li><b>三性</b>：<b>无偿性</b>（核心和基础）、<b>强制性</b>（无偿性的必然要求）、<b>固定性</b>（强制性的必然结果）。</li>
                <li>按征税对象：<b>流转税</b>（增值税、消费税、关税）、<b>所得税</b>（企业所得税、个人所得税）、<b>财产税</b>、<b>资源税</b>、<b>行为税</b>。</li>
                <li>按税负能否转嫁：<b>直接税</b>（所得税、财产税，不能转嫁）、<b>间接税</b>（流转税，可转嫁）。</li>
                <li>按管理权限：<b>中央税</b>（消费税、关税）、<b>地方税</b>、<b>中央与地方共享税</b>（增值税、所得税）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题77 · 税收（冲刺班）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于税收，下列说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.税收的无偿性以强制性为基础，固定性是强制性的必然结果<br />B.增值税、消费税属于流转税，也属于间接税，税负可以转嫁<br />C.个人所得税属于间接税，可以通过提高价格转嫁给消费者<br />D.关税属于地方税，由地方政府征收管理</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 错，<b>无偿性是核心和基础</b>，强制性是无偿性的必然要求；C 错，所得税是<b>直接税</b>；D 错，关税是<b>中央税</b>。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 需求与成本</BlockTitle>
              <PointList>
                <li>需求影响因素：自身价格（<b>反比</b>）、收入（正比）、<b>替代品价格（正比）</b>、<b>互补品价格（反比）</b>、偏好（正比）、预期（正比）。</li>
                <li>替代品：洗衣粉与洗衣液、猪肉与鸭肉；互补品：羽毛球与球拍、汽车与汽油。</li>
                <li><b>机会成本</b>：为做某事而放弃的其他选择中的<b>最大收益</b>。</li>
                <li><b>沉没成本</b>：已付出且不可收回（「来都来了」）。</li>
                <li><b>显性成本</b>＝实际货币支出；<b>隐性成本</b>＝自有要素的价格。</li>
                <li><b>边际成本</b>＝每多生产一单位所增加的成本；平均成本＝总成本 ÷ 产量。</li>
                <li>需求的含义需求是指在其他条件不变的情况下，消费者在一定时期内在各种可能的价格水平愿意而且能够购买的该商品的数量。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题78 · 成本（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列表示机会成本的是：</ExampleQuestion>
                <ExampleOptions>A.雇佣李某每月支付工资 3000 元<br />B.购买原材料支付 10 万元<br />C.自有原料可生产货车或价值 10 万元的小客车，选择生产货车<br />D.银行贷款 10 万元每月付息 1000 元</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A、B、D 都是实际货币支出（显性成本）；C 是<b>放弃的最大收益</b>，即机会成本。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 经济增长与 GDP</BlockTitle>
              <PointList>
                <li>经济增长的含义经济增长是指一国一定时期内生产的产品和提供的劳务总量的扩大，表现为经济总量（GDP）或人均量的增加。</li>
                <li>三驾马车：<b>投资、消费、出口</b>；投资 + 消费＝内需，出口＝外需。</li>
                <li><b>GDP 是地域概念</b>（一国范围内生产的最终产品市场价值）；<b>GNP 是国民概念</b>（本国常住居民的生产要素所生产）。</li>
                <li>GDP 只算<b>当期、最终产品</b>：二手房买卖、政府转移支付、赌博收益、中间产品<b>不计入</b>；劳动者工资性收入<b>计入</b>。</li>
                <li>GDP 是<b>流量</b>不是存量。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题79 · GDP（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列可以计入当年 GDP 的有：</ExampleQuestion>
                <ExampleOptions>A.二手车买卖　B.政府转移支付　C.赌博收益　D.劳动者工资性收入</ExampleOptions>
                <ExampleAnswer><b>解析：</b>二手车不是当期生产；转移支付无对等生产；赌博非生产性活动。工资是提供劳务的报酬，计入 GDP。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>5. 通货膨胀</BlockTitle>
              <PointList>
                <li>实质：<b>社会总需求大于社会总供给</b>；原因：货币供给大于实际需求；表现：物价<b>持续普遍上涨</b>、货币贬值。</li>
                <li>衡量：<b>CPI</b>（居民消费价格指数，反映居民生活相关产品与劳务价格）；<b>PPI</b>（工业生产者出厂价格指数，反映生产领域价格变动）；<b>CPI 同比涨幅超过 3% 即判定为通货膨胀，超过 5% 属于严重通货膨胀</b>；低于 1% 且持续则有通缩风险。</li>
                <li>影响：不利于<b>固定收入者、债权人、工人</b>；有利于<b>变动收入者、债务人、雇主</b>。</li>
                <li><b>菲利普斯曲线</b>：通胀率与失业率<b>反向</b>变动，只在短期有效、长期无效。</li>
                <li>按国际惯例，当CPI增幅连续超过3%时，就意味着发生了通货膨胀；当CPI增幅低于1%且持续一段时间，预示着通货紧缩的风险。</li>
              </PointList>
              <Callout variant="tip"><b>一句话记影响：</b>「钱毛了」→ 拿固定工资的亏、欠钱的赚、存钱的亏、借钱的赚。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题80 · 通货膨胀（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列关于通货膨胀的说法，错误的是：</ExampleQuestion>
                <ExampleOptions>A.实质是社会总供给小于社会总需求<br />B.原因是流通中的纸币量多于所需货币量<br />C.会直接引起物价下跌，失业率上升<br />D.对策是实行紧缩性货币政策，控制信贷规模</ExampleOptions>
                <ExampleAnswer><b>解析：</b>C 错。通胀引起物价<b>上涨</b>；「物价下跌、失业率上升」是通缩的特征。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>6. 财政政策、货币政策与收入分配</BlockTitle>
              <DataTable>
                <tr><th>形势 · 政策</th><th>财政手段</th><th>货币手段</th></tr>
                <tr><td><b>通胀</b><br />紧缩</td><td>增税、减发国债、减少支出</td><td>提高存款准备金率、提高再贴现率、提高利率、<b>卖出</b>有价证券</td></tr>
                <tr><td><b>通缩</b><br />扩张</td><td>减税、增发国债、增加支出</td><td>降低存款准备金率、降低再贴现率、降低利率、<b>买入</b>有价证券</td></tr>
              </DataTable>
              <PointList>
                <li>财政政策工具：税收、国债、政府购买、转移支付；货币政策工具：<b>存款准备金率、再贴现率、公开市场业务、基准利率</b>。</li>
                <li>收入分配：<b>初次分配</b>（市场，工资/最低工资/企业缴税）→ <b>再分配</b>（政府，个税/社保/转移支付/公务员工资）→ <b>第三次分配</b>（自愿，慈善公益）。</li>
                <li>财政政策和货币政策（1）财政政策和货币政策的内涵财政政策是指政府通过变动财政收入和财政支出以保持社会总供给和社会总需求平衡的一种经济政策。主要工具包括收入部分的税收和国债以及支出部分的政府购买和转移支付。</li>
                <li>货币政策是指中央银行通过控制和调节货币供应量以保持社会总供给和社会总需求平衡的一种经济政策。主要工具包括法定存款准备金率、再贴现率、公开市场业务、基准利率。</li>
                <li>法定存款准备金率、再贴现率、公开市场业务、基准利率法定存款准备金率：中央银行规定的商业银行对于存款所必须保持的准备金的比例。再贴现率：商业银行将其贴现的未到期票据向中央银行申请再贴现时的预扣利率。</li>
                <li>公开市场业务：中央银行通过买进或卖出有价证券，吞吐基础货币，调节货币供应量的活动。基准利率：中央银行规定的存贷款利率。</li>
                <li>（2）财政政策和货币政策的运用经济形势政策性质政策类型目标具体措施通货膨胀紧缩性财政政策增加财政收入、减少财政支出，抑制总需求增加税收、减发国债、减少支出（政府购买和转移支付）货币政策降低货币供应量，提高利率，抑制总需求提高法定存款准备金率、提高再贴现率、提高利率、卖出有价证券通货紧缩扩张性财政政策减少财政收入、增加财政支出，刺激总需求减少税收、增发国债、增加支出（政府购买和转移支付）货币政策增加货币供应量，降低利率，刺激总需求降低法定存款准备金率、降低再贴现率、降低利率、买入有价证券</li>
                <li>第三次分配建立在志愿性的基础上，以慈善公益方式进行。</li>
                <li>灰犀牛事件：明显的、高概率的、早已存在，但却被人们有意或无意忽视，最终可能酿成重大危机的事件。流动性偏好：人们在心理上更偏好持有现金或能快速变现的资产，而非收益较高但难以快速、无损失变现的资产的倾向。</li>
                <li>流动性陷阱：当利率降至零或接近零的极低水平时，人们宁愿以现金或储蓄的形式持有货币，而不愿进行投资或消费，导致中央银行通过增加货币供应量、降低利率来刺激经济的货币政策完全无效的状态。</li>
                <li>边际效用递减：在一定时间内，在其他商品的消费数量保持不变的条件下，当一个人连续消费某种物品时，随着所消费的该物品的数量增加，其所带来的效用的增加量有递减的趋势。</li>
                <li>拉弗曲线：当税率在一定的限度以下时，提高税率能增加政府税收收入，但超过这一限度时，再提高税率反而导致政府税收收入减少。公共物品：满足社会公众需要的商品。</li>
                <li>一般具有两大特征：（1）非竞争性：消费者对某种物品的消费并不会影响其他人对该物品的消费。（2）非排他性：消费者对某种物品的消费并不会阻止其他人对该物品的消费。恩格尔系数：表示食品支出总额占个人消费支出总额的比重。</li>
                <li>通常将其作为衡量家庭或国家富裕程度的指标，恩格尔系数越大，一个国家或家庭生活越贫困；反之，恩格尔系数越小，生活越富裕。基尼系数：在全部居民收入中，用于进行不平均分配的那部分收入占总收入的百分比。</li>
                <li>它是用来综合考察居民内部收入分配差异状况的指标。基尼系数介于0-1 之间，基尼系数越大，表示收入分配差距越大、越不公平；基尼系数越接近0，表示收入分配差距越小、越公平。国际上通常把0.4 作为“警戒线”。</li>
                <li>赤字率：财政赤字与同期国内生产总值（GDP）之比。这是衡量一个国家财政政策力度和风险水平的重要指标。国际上通常将3%作为赤字率的警戒线。</li>
                <li>狭义货币（M1）：包含流通中货币（M0）、单位活期存款、个人活期存款、非银行支付机构客户备付金。代表“随时能花的钱”，反映现实购买力。</li>
                <li>广义货币（M2）：包含M1 以及单位定期和其他存款、个人存款、非存款类金融机构存款、非存款机构部门持有的货币市场基金份额。代表“所有的钱”，反映潜在购买力。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题81 · 宏观调控（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某国面临通货紧缩，下列不可能属于其政策措施的是：</ExampleQuestion>
                <ExampleOptions>A.降低存款准备金率　B.增加货币供给　C.增加政府支出　D.提高存款准备金率</ExampleOptions>
                <ExampleAnswer><b>解析：</b>通缩要用<b>扩张性</b>政策；提高存款准备金率是<b>紧缩</b>手段，会进一步减少货币供给。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>7. 汇率</BlockTitle>
              <PointList>
                <li>汇率＝两种货币的兑换比率；标价法分直接标价（1 单位外币＝多少本币）与间接标价。</li>
                <li><b>本币贬值</b>：有利于出口、不利于进口；进口商品物价<b>上涨</b>；资本<b>外流</b>。</li>
                <li><b>本币升值</b>：有利于进口、不利于出口；进口商品物价<b>下降</b>；资本<b>内流</b>。</li>
                <li>记忆：<b>贬值利于卖（出口），升值利于买（进口）</b>。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题82 · 汇率（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>1 欧元兑人民币由 7.9748 变为 8.0314。若不考虑其他因素，下列推导正确的是：</ExampleQuestion>
                <ExampleOptions>A.人民币升值→中国企业赴欧投资成本下降→有利于扩大进口欧盟商品<br />B.人民币贬值→中国企业赴欧投资成本上升→不利于中国企业在欧盟投资<br />C.欧元升值→中国商品在欧盟市场价格下降→不利于中国商品出口欧盟<br />D.欧元贬值→欧盟商品在中国市场价格上升→有利于中国进口欧盟商品</ExampleOptions>
                <ExampleAnswer><b>解析：</b>1 欧元可换更多人民币 → <b>欧元升值、人民币贬值</b>。人民币贬值使赴欧投资成本上升，不利于对外投资。C 中欧元升值应使中国商品在欧盟<b>更便宜</b>、利于出口，后半句矛盾；D 方向错。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>8. 经济名词与经济效应</BlockTitle>
              <DataTable>
                <tr><th>名词</th><th>含义 / 警戒线</th></tr>
                <tr><td>恩格尔系数</td><td>食品支出 ÷ 消费总支出；<b>越大越穷</b>（衡量富裕程度）</td></tr>
                <tr><td>基尼系数</td><td>衡量<b>收入分配差距</b>，0–1，<b>0.4 为警戒线</b></td></tr>
                <tr><td>赤字率</td><td>财政赤字 ÷ GDP，<b>3% 为警戒线</b></td></tr>
                <tr><td>M1 / M2</td><td>M1 是「随时能花的钱」（现实购买力）；M2 是「所有的钱」（潜在购买力）</td></tr>
                <tr><td>黑天鹅</td><td>罕见、难预测、影响颠覆</td></tr>
                <tr><td>灰犀牛</td><td>明显、高概率、被忽视的大危机</td></tr>
                <tr><td>流动性陷阱</td><td>利率近零，货币政策失效</td></tr>
                <tr><td>拉弗曲线</td><td>税率过高反而使税收减少</td></tr>
                <tr><td>公共物品</td><td><b>非竞争性 + 非排他性</b></td></tr>
              </DataTable>
              <PointList>
                <li><b>挤出效应</b>：政府支出增加→利率上升→私人投资减少。</li>
                <li><b>口红效应</b>：经济萧条时廉价「放松消费」反而热卖。</li>
                <li><b>棘轮效应</b>：消费习惯易上难下（由俭入奢易，由奢入俭难）。</li>
                <li><b>马太效应</b>：强者愈强、弱者愈弱。</li>
                <li><b>凡勃伦效应</b>：越贵越买（炫耀性消费）。</li>
                <li><b>羊群效应</b>：从众跟风。</li>
                <li><b>外部效应</b>：行为使无关第三方受益（正）或受损（负）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题83 · 经济效应（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列经济效应匹配不正确的是：</ExampleQuestion>
                <ExampleOptions>A.由俭入奢易，由奢入俭难——棘轮效应<br />B.强者愈强、弱者愈弱——马太效应<br />C.商品定价越低越受青睐——凡勃伦效应<br />D.投资喜欢从众跟风——羊群效应</ExampleOptions>
                <ExampleAnswer><b>解析：</b>C 错。凡勃伦效应是<b>定价越高反而越受青睐</b>（炫耀性消费）。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
