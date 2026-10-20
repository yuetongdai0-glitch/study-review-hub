import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十一、化学常识
 *
 * @returns 该节正文。
 */
export default function S12(): ReactElement {
  return (
    <>
      <Callout variant="key">化学只考两件事：<b>元素之「最」</b>与<b>物质俗称 / 用途</b>。把下面两张表背下来，化学常识基本满分。</Callout>
      
            <Block>
              <BlockTitle>1. 非金属元素：五组「最」</BlockTitle>
              <PointList>
                <li><b>氢</b>：宇宙中含量最多的元素，元素周期表第一个；氢气密度最小、极易燃烧。</li>
                <li><b>碳</b>：形成化合物种类最多的元素，构成细胞最基本的元素；CO 与血红蛋白结合致煤气中毒；干冰（固态 CO₂）用于制冷、人工降雨、舞台烟雾。</li>
                <li><b>氮</b>：空气中含量最多的元素（空气 78% 氮气、21% 氧气）；氮气化学性质不活泼，用作防腐剂、安全气囊；液氮汽化吸热可作制冷剂。</li>
                <li><b>氧</b>：<b>人体、海洋、地壳中含量最多的元素</b>；臭氧（O₃）强氧化性，可杀菌消毒，臭氧层吸收紫外线。</li>
                <li><b>硫</b>：SO₂ 是酸雨主因（pH＜5.6），有漂白性。</li>
                <li><b>硅</b>：半导体材料，用于芯片、太阳能电池；SiO₂ 用于玻璃、光导纤维。</li>
                <li>含量排序：人体 O＞C＞H＞N＞Ca；地壳 O＞Si＞Al＞Fe；海洋 O＞H＞Cl＞Na。</li>
                <li>非真空食品袋内的气体通常是二氧化碳或氮气。液氮由液体变为气体时，汽化过程会吸收热量，可作用制冷剂。</li>
                <li>酸雨的形成是自然因素与人为因素共同作用的结果，其中人为因素是主导。主要污染物为二氧化硫（SO₂）和氮氧化物（如NO、NO₂）。</li>
              </PointList>
              <Callout variant="tip"><b>「最多的元素」三连问：</b>宇宙最多＝氢；地壳/人体/海洋最多＝氧；空气最多＝氮。三个答案各不相同，每年都考。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题60 · 非金属（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列关于非金属物质的说法，错误的是：</ExampleQuestion>
                <ExampleOptions>A.氢是宇宙中含量最多的元素，也是周期表第一个元素<br />B.碳是形成化合物种类最多的元素<br />C.氮是人体、海洋和地壳中含量最多的元素<br />D.除金外的所有金属都能和氧反应生成金属氧化物</ExampleOptions>
                <ExampleAnswer><b>解析：</b>C 错。人体、海洋、地壳中含量最多的元素是<b>氧</b>，氮是<b>空气</b>中最多的元素。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 金属元素</BlockTitle>
              <PointList>
                <li><b>钛</b>：耐高温低温、抗酸碱、高强度低密度，「<b>太空金属</b>」；钛合金用于人造骨骼、飞机火箭结构件。</li>
                <li><b>铁</b>：应用最广；生铁含碳 2.11%–4.3%（硬脆），钢含碳 0.02%–2.11%（韧）；不锈钢含铬 12%–30%；铁粉可作「双吸剂」（吸氧吸水）。</li>
                <li><b>铜</b>：纯铜紫红色，导电导热极佳，人类最早使用的金属；黄铜（锌）、白铜（镍）、<b>青铜（锡/铝，最早出现的合金）</b>。</li>
                <li><b>钙</b>：人体内含量最多的金属元素（骨骼牙齿）。</li>
                <li><b>汞</b>：俗称水银，常温唯一液态金属，熔点最低。</li>
                <li><b>铝</b>：地壳中含量最多的金属元素；纯铝导热好、强度低、耐磨差。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题61 · 金属（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列关于金属材料的说法，错误的是：</ExampleQuestion>
                <ExampleOptions>A.钛合金可用于制造飞机、火箭结构件<br />B.青铜是金属冶铸史上最早出现的合金<br />C.汞是常温常压下唯一呈液态的金属<br />D.人体中含量最高的金属元素是铁</ExampleOptions>
                <ExampleAnswer><b>解析：</b>D 错。人体中含量最高的金属元素是<b>钙</b>，铁是微量元素。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 酸、碱、盐（俗称必背）</BlockTitle>
              <DataTable>
                <tr><th>物质</th><th>化学式</th><th>俗称 / 用途</th></tr>
                <tr><td>氢氧化钠</td><td>NaOH</td><td><b>火碱、烧碱、苛性钠</b>；干燥中性/碱性气体</td></tr>
                <tr><td>氢氧化钙</td><td>Ca(OH)₂</td><td><b>熟石灰、消石灰</b>；澄清石灰水检验 CO₂；改良酸性土壤、波尔多液</td></tr>
                <tr><td>碳酸钠</td><td>Na₂CO₃</td><td><b>苏打、纯碱</b>（是盐不是碱）</td></tr>
                <tr><td>碳酸氢钠</td><td>NaHCO₃</td><td><b>小苏打</b>；膨松剂、治胃酸过多</td></tr>
                <tr><td>氯化钠</td><td>NaCl</td><td>食盐主要成分</td></tr>
                <tr><td>亚硝酸钠</td><td>NaNO₂</td><td>腌制食品，过量有毒，可生成致癌的亚硝胺</td></tr>
                <tr><td>碳酸镁</td><td>MgCO₃</td><td>耐火保温材料、干燥剂；运动员防滑粉</td></tr>
              </DataTable>
              <PointList>
                <li>pH＜7 酸性（越小越酸）；pH＞7 碱性；pH＝7 中性。</li>
                <li>酸的通性：使石蕊变红、与碱/碱性氧化物反应、与活泼金属反应放出氢气。</li>
                <li>碱的通性：使石蕊变蓝、酚酞变红、与酸/酸性氧化物反应。</li>
                <li>浓硫酸稀释：<b>把浓硫酸沿器壁缓缓注入水中</b>并搅拌（不能反向）。</li>
                <li>酸盐酸（HCl）：胃酸的主要成分。常用于家居清洁、除锈、皮革加工等。硝酸（HNO3）：具有较强的氧化性，浓硝酸几乎能溶解所有的金属及其合金。浓硫酸（H2SO4）：纯硫酸一般为无色油状液体。</li>
                <li>碱氢氧化钠（NaOH）：俗称火碱、烧碱、苛性钠。可用于干燥中性或碱性气体、炼油、造纸、炼铝、炼钨、人造丝、人造棉和肥皂制造业等。氢氧化钙（Ca(OH)2）：俗称熟石灰、消石灰。</li>
                <li>其水溶液俗称澄清石灰水（检验CO2 气体的专用试剂）。可以用于中和酸性土壤、配制农药波尔多液、树木防冻等。</li>
                <li>盐碳酸钠（Na2CO3）：俗称苏打、纯碱。主要用于玻璃制品和陶瓷釉的生产，还广泛用于生活洗涤、酸类中和、食品加工等。碳酸氢钠（NaHCO3）：俗称小苏打。</li>
                <li>可作为食品制作过程中的膨松剂，在作用后会残留碳酸钠，使用过多会使成品有碱味。也可用于果蔬的清洗、治疗胃酸过多等。氯化钠（NaCl）：食盐的主要成分。亚硝酸钠（NaNO2）：在腌渍和熏制食品中含量较高，过量使用时有毒。</li>
                <li>在烹调和消化过程中，会和氨基酸反应，产生致癌物质亚硝胺类化合物。碳酸镁（MgCO3）：可用作耐火材料、保温材料、干燥剂。举重、体操或攀岩运动员运动前抓一些碳酸镁，能够吸干手心的汗液，增大手掌与器械之间的摩擦力。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题62 · 酸碱盐（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列化学物质与俗称对应错误的是：</ExampleQuestion>
                <ExampleOptions>A.碳酸钠——苏打<br />B.碳酸氢钠——小苏打<br />C.氢氧化钠——火碱<br />D.氧化钠——苛性钠</ExampleOptions>
                <ExampleAnswer><b>解析：</b>D 错。苛性钠是<b>氢氧化钠（NaOH）</b>，氧化钠是 Na₂O。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 有机化合物</BlockTitle>
              <PointList>
                <li><b>甲烷（CH₄）</b>：最简单的有机物，天然气、沼气、瓦斯的主要成分。</li>
                <li><b>乙烯（C₂H₄）</b>：植物激素，<b>催熟</b>水果。</li>
                <li><b>乙醇（C₂H₅OH）</b>：医用酒精体积浓度约 <b>75%</b>（95% 用于器械消毒）；工业酒精含甲醇，有毒；酒越陈越香是因为生成<b>乙酸乙酯</b>。</li>
                <li><b>甲醛（HCHO）</b>：强烈刺激性，装修污染；福尔马林＝35%–40% 甲醛水溶液，用于防腐消毒。</li>
                <li>新制的酒存放期间，酒里的醛不断氧化为羧酸，而羧酸再和酒精发生酯化反应，生成具有芳香气味的乙酸乙酯。时间越久，就有越多的乙酸乙酯生成，因此酒越陈越香。</li>
              </PointList>
              <Callout variant="warn">「放盆水除甲醛」是错的——甲醛虽溶于水，但室内浓度极低、接触面积小，实际无效；正确做法是<b>通风</b>。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题63 · 有机物（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于酒精的说法，不正确的是：</ExampleQuestion>
                <ExampleOptions>A.酒精能与水以任意比互溶<br />B.医疗上常用体积分数 70%–75% 的乙醇作消毒剂<br />C.工业酒精的成分以甲醇为主，含有少量乙醇<br />D.酒精按生产方法可分为发酵法酒精和合成法酒精</ExampleOptions>
                <ExampleAnswer><b>解析：</b>C 把主次说反了。工业酒精<b>以乙醇为主</b>，含少量甲醇等杂质。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
