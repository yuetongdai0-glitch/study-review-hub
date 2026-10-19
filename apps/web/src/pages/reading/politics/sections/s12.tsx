import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十二、生物与医学常识
 *
 * @returns 该节正文。
 */
export default function S13(): ReactElement {
  return (
    <>
      <Callout variant="key">生物医学是「投入产出比」最高的一块：知识点固定、重复率高。重点抓<b>激素—疾病对应</b>、<b>维生素—缺乏症对应</b>、<b>急救顺序</b>。</Callout>
      
            <Block>
              <BlockTitle>1. 遗传物质</BlockTitle>
              <PointList>
                <li>核酸＝DNA + RNA，基本单位是<b>核苷酸</b>（戊糖 + 含氮碱基 + 磷酸）。</li>
                <li>DNA 双螺旋，是<b>主要遗传物质</b>；基因是<b>有遗传信息的 DNA 片段</b>，一个 DNA 上有很多基因。</li>
                <li>基因突变：碱基对的替换、增添、缺失，<b>随机、不定向、低频</b>（说「定向」即错）。</li>
                <li>基因重组：有性生殖过程中控制不同性状的基因重新组合。</li>
                <li>「种瓜得瓜」＝遗传；「一母生九子，九子各不同」＝变异。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题64 · 遗传（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列关于基因突变的叙述，不正确的是：</ExampleQuestion>
                <ExampleOptions>A.基因突变是随机发生的、定向的<br />B.自然状态下基因突变频率很低<br />C.基因突变是新基因产生的途径<br />D.基因突变可能破坏生物与环境的协调关系</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 错。基因突变是<b>不定向</b>的，自然选择才是定向的。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 新陈代谢：光合、呼吸、蒸腾</BlockTitle>
              <PointList>
                <li>新陈代谢是生物区别于非生物<b>最本质的特征</b>，包括同化作用（合成、贮能）与异化作用（分解、放能）。</li>
                <li>光合作用：光能 → 化学能，CO₂ + H₂O → 有机物 + O₂；影响因素：光照、CO₂ 浓度、温度、水分。</li>
                <li>有氧呼吸：产物 CO₂ + H₂O；<b>无氧呼吸</b>：产物<b>乳酸</b>（乳酸菌、动物、马铃薯块茎、玉米胚、甜菜块根）或<b>酒精 + CO₂</b>（酵母菌、绝大多数植物）。</li>
                <li>剧烈运动肌肉酸痛＝乳酸；酿酒＝酒精发酵；泡菜酸奶＝乳酸菌。</li>
                <li>蒸腾作用：水分以水蒸气形式从叶片散失，受光照、温度、湿度、风影响。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题65 · 新陈代谢（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列现象与无氧呼吸直接相关的是：<br />①剧烈运动后肌肉酸痛　②用糯米和酒曲酿米酒　③切开的苹果放久后变褐　④生水果与熟苹果密封后加快成熟</ExampleQuestion>
                <ExampleOptions>A.①②　B.②③　C.③④　D.①④</ExampleOptions>
                <ExampleAnswer><b>解析：</b>①肌细胞无氧呼吸产生<b>乳酸</b>→酸痛；②酵母菌无氧呼吸产生<b>酒精 + CO₂</b>→酿酒。③是<b>氧化（酶促褐变）</b>，与呼吸类型无关；④是<b>乙烯催熟</b>，属植物激素作用。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 人体系统与激素</BlockTitle>
              <PointList>
                <li>消化：<b>小肠</b>是消化吸收主要场所（最长器官 4–6 米）；<b>肝脏</b>是最大消化腺、最大解毒器官、最大内脏器官；牙齿是最坚硬器官。</li>
                <li>三大营养物质的消化起点：<b>淀粉→口腔</b>；<b>蛋白质→胃</b>；<b>脂肪→小肠</b>（唯一只在小肠消化）。</li>
                <li>神经系统基本活动方式＝<b>反射</b>；非条件反射（膝跳、眨眼、吮乳）先天；条件反射后天、需大脑皮层。</li>
                <li>运动系统＝骨、关节、骨骼肌，约占体重 60%。</li>
                <li>激素：<b>胰岛素</b>（胰岛 β 细胞，唯一降血糖；不足→糖尿病，过多→低血糖）；<b>甲状腺素</b>（需碘；不足→呆小症，过多→甲亢）；<b>生长激素</b>（不足→侏儒症，过多→巨人症/肢端肥大）；<b>肾上腺素</b>（应激「急救兵」）。</li>
                <li>免疫器官：骨髓（发源地）、脾（最大淋巴器官）、淋巴结、扁桃体、胸腺、阑尾。</li>
                <li><b>免疫细胞两大类</b>：① <b>固有免疫细胞</b>——反应迅速但<b>无特异性</b>：<b>吞噬细胞</b>（巨噬细胞、中性粒细胞，「吃掉」病原体）、<b>NK 细胞</b>（直接杀伤被病毒感染细胞或肿瘤细胞）；② <b>适应性免疫细胞</b>——反应较慢但<b>精准且能记忆</b>：<b>T 细胞</b>（细胞免疫）、<b>B 细胞</b>（体液免疫，分化为<b>浆细胞</b>后产生<b>抗体</b>）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题66 · 激素（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列疾病中都是由于激素分泌异常导致的是：</ExampleQuestion>
                <ExampleOptions>A.血友病和佝偻病<br />B.夜盲和色盲<br />C.糖尿病和侏儒症<br />D.坏血病和脚气病</ExampleOptions>
                <ExampleAnswer><b>解析：</b>糖尿病＝胰岛素不足，侏儒症＝生长激素不足。A 为遗传/营养；B 为维生素 A 缺乏/遗传；D 为维生素 C/B₁ 缺乏。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 营养物质与维生素</BlockTitle>
              <PointList>
                <li>六大营养素：糖类、脂肪、蛋白质、维生素、无机盐、水；其中<b>糖类是最重要供能物质，脂肪是最重要储能物质，蛋白质是生命活动主要承担者</b>。</li>
                <li>供能顺序（饥饿/冬眠）：<b>糖类 → 脂肪 → 蛋白质</b>。</li>
                <li>维生素 A（脂溶）→ 夜盲症、干眼症；B₁（水溶）→ 脚气病；B₂ → 口腔溃疡、口角炎；C（水溶）→ 坏血病；D（脂溶）→ 佝偻病（儿童）、骨质疏松（成人）；E → 上皮细胞变性；K → 凝血障碍。</li>
                <li>微量元素：碘（智慧元素，缺乏→大脖子病）、铁（血红蛋白，缺乏→缺铁性贫血）、锌（生长发育）、硒（长寿元素、抗癌之王，缺乏→克山病）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题67 · 维生素（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列关于维生素的说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.严重缺乏维生素 D 可导致夜盲症<br />B.严重缺乏维生素 C 可导致坏血病<br />C.维生素 A 可用于脚气病治疗<br />D.维生素 B₁ 可预防与治疗静脉曲张</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 缺 D→佝偻病/骨质疏松；C 脚气病缺 <b>B₁</b>；D 无此作用。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>5. 医学检查（新大纲新增）</BlockTitle>
              <PointList>
                <li><b>血常规</b>不需要严格空腹：红细胞/血红蛋白（贫血）、白细胞（感染）、血小板（凝血）。</li>
                <li>细菌感染：<b>中性粒细胞</b>比例升高、白细胞总数升高；病毒感染：<b>淋巴细胞</b>比例升高、白细胞正常或降低。</li>
                <li>缺铁性贫血：平均红细胞体积＜80 fl；巨幼细胞性贫血：＞100 fl。</li>
                <li><b>生化检查需空腹 8–12 小时</b>：转氨酶（肝细胞损伤）、胆红素（黄疸）、肌酐/尿素氮（肾功能）、血脂四项（低密度脂蛋白是「坏胆固醇」、降脂首要靶点）。</li>
                <li><b>血糖三项</b>：① <b>空腹血糖</b> 3.9–6.1 mmol/L，≥7.0 诊断糖尿病（需空腹）；② <b>口服葡萄糖耐量试验（OGTT）</b>：空腹抽血 → 喝 <b>75 g</b> 无水葡萄糖水 → 2 小时再抽，<b>≥11.1 mmol/L</b> 可诊断，是诊断糖尿病<b>「金标准」</b>；③ <b>糖化血红蛋白</b> ≥6.5%，反映近 <b>8–12 周</b>平均血糖，<b>无需空腹、不受短期波动影响</b>。</li>
                <li>肿瘤标志物：AFP（肝癌）、CEA（消化道/肺腺癌）、CA19-9（胰腺胆管）、CA125（卵巢）。</li>
                <li>幽门螺杆菌：<b>¹³C/¹⁴C 尿素呼气试验</b>是现症感染与复查金标准（需空腹）；<b>血清抗体只能说明曾感染</b>，不能诊断现症。</li>
                <li>影像：X 光（肺、骨折，有辐射）；CT（脑出血、肺结节，辐射高于 X 光）；<b>MRI 无电离辐射</b>、查脑梗/脑肿瘤，体内金属禁忌；B 超无辐射，查肝胆、胎儿、甲状腺。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题68 · 医学检查（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于医学检查，下列说法错误的是：</ExampleQuestion>
                <ExampleOptions>A.单纯血常规检查不需要严格空腹<br />B.磁共振检查没有放射性，适用于孕妇、婴幼儿<br />C.血清幽门螺杆菌抗体检测可判断是否为现症感染<br />D.低密度脂蛋白胆固醇是动脉粥样硬化的主因之一</ExampleOptions>
                <ExampleAnswer><b>解析：</b>C 错。血清抗体只能说明<b>曾经感染</b>，不能区分现症与既往，也不能用于复查。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>6. 急救知识（顺序题）</BlockTitle>
              <PointList>
                <li>烫伤：立即<b>冷水冲洗</b>（约 20℃），不涂药、不挑破水泡、不冰敷。</li>
                <li>触电：<b>先切断电源</b>，再用不导电物体挑开电线，然后抢救并拨 120。</li>
                <li>煤气中毒：<b>先开窗通风</b>、转移患者；禁开灯、禁开排风扇、禁打火。</li>
                <li>骨折：<b>先固定再送医</b>。</li>
                <li>溺水：清除口鼻异物 → 人工呼吸 → 胸外心脏按摩。</li>
                <li>扭伤：<b>48 小时内冷敷</b>，不可热敷/按揉/涂红花油；出血停止后再热敷。</li>
                <li>重金属中毒：<b>补充蛋白质</b>（牛奶、豆浆）。</li>
                <li>气道异物：成人/1 岁以上<b>海姆立克</b>（5 次拍背 + 5 次腹部冲击交替）；<b>1 岁以下婴儿禁用腹部冲击</b>，用「拍背 + 按胸」；孕妇肥胖者用胸部冲击。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题69 · 急救（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列急救措施中错误的是：</ExampleQuestion>
                <ExampleOptions>A.骨折后可用木板作夹板固定再送医<br />B.烫伤后立即用冷水冲洗烫伤部位<br />C.煤气泄漏时立即关闭煤气、开窗通风<br />D.误食重金属后应大量饮水以缓解中毒</ExampleOptions>
                <ExampleAnswer><b>解析：</b>D 错。应补充<b>蛋白质</b>（牛奶、豆浆）使其与重金属结合，单纯大量饮水无效。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
