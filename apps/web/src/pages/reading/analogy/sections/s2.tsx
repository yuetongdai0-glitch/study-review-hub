import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 二 · 2 全异关系
 *
 * @returns 该节正文。
 */
export default function S4(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义与判断标准</BlockTitle>
              <Callout variant="key"><b>判断标准：</b>针对<b>同一类事物</b>的分类，两个概念<b>没有交集</b>。</Callout>
              <Callout variant="formula">
                <span className="formula">示例</span>　成年人：未成年人　香蕉：苹果　吸尘器：加湿器　土豆：香菜
              </Callout>
              <Callout variant="warn">注意：全异一定要是<b>「同一大类下的分类」</b>——「卫生纸：猫」这种硬凑的两个词，不是全异。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 全异关系<span className="src">2023 安徽事业单位</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>吸尘器：加湿器</ExampleQuestion>
                <ExampleOptions><span>A. 土豆：香菜</span><span>B. 除螨仪：螨虫</span><span>C. 水晶：宝石</span><span>D. 牙签：牙齿</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>吸尘器与加湿器都是<b>家用电器</b>，功能不同、互不包含 → 全异（并列）。<br />
                  A 土豆与香菜都是<b>食材</b>，同属一类、互不包含 → 全异，一致；<br />
                  B 除螨仪用来清理螨虫（对象），D 牙签用来剔牙齿（对象）——都不是并列；<br />
                  C 水晶与宝石有交集（部分水晶属宝石），是交叉。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 矛盾全异 与 反对全异（第一层二级辨析）</BlockTitle>
              <DataTable>
                <tr><th>类型</th><th>判断</th><th>例子</th></tr>
                <tr><td><b>矛盾全异</b></td><td>针对同一类事物的分类<b>只有 2 种</b>情况（非此即彼）</td><td>成年人：未成年人　金属：非金属　男：女　生：死</td></tr>
                <tr><td><b>反对全异</b></td><td>针对同一类事物的分类<b>有第 3 种</b>情况</td><td>细菌：真菌（还有病毒）　蛾眉月：下弦月　苹果：香蕉</td></tr>
              </DataTable>
              <Callout variant="key">
                <b>矛盾全异积累（按类别背）：</b><br />
                <b>【是和非】</b>合法收入：非法收入　合法行为：非法行为　常规问题：非常规问题　盈利：非盈利　金属：非金属<br />
                <b>【有和无】</b>有形损耗：无形损耗　有理数：无理数　有机物：无机物<br />
                <b>【硬和软】</b>软实力：硬实力　软件：硬件<br />
                <b>【阴和阳】</b>阴：阳　阴离子：阳离子<br />
                <b>【真和假】</b>真：伪　真分数：假分数<br />
                <b>【自然和人造】</b>自然光源：人造光源<br />
                <b>【实和虚】</b>实体经济：虚拟经济<br />
                <b>【单字】</b>曲：直　动：静　生：死　男：女
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 2 · 矛盾全异<span className="src">2022 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>非法收入：合法收入</ExampleQuestion>
                <ExampleOptions><span>A. 期货交易：期权交易</span><span>B. 物质资本：人力资本</span><span>C. 国有经济：私营经济</span><span>D. 有偿服务：无偿服务</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「收入」按「是否合法」分类只有两种 → <b>矛盾全异</b>。<br />
                  D「服务」按「是否有偿」分类也只有两种 → 矛盾全异，一致；<br />
                  A、B、C 三项都是并列但还有第三种情况（反对全异）。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 3 · 反对全异<span className="src">2025 联考（24% 正确率）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>细菌：真菌</ExampleQuestion>
                <ExampleOptions><span>A. 鸳：鸯</span><span>B. 地下水：饮用水</span><span>C. 原子：电子</span><span>D. 蛾眉月：下弦月</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>细菌与真菌都是<b>微生物</b>下的不同类群，彼此没有交集，且还有第三种（病毒）→ <b>反对全异</b>。<br />
                  D 蛾眉月与下弦月都是<b>月相</b>下的不同形态，同样没有交集、还有第三种（满月等）→ 一致；<br />
                  A「鸳」与「鸯」是鸳鸯这一种鸟的雌雄个体，不是「同一大类下的两种事物」，构不成分类；<br />
                  B 地下水与饮用水有交集（交叉）；C 电子是原子的组成部分（组成）。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>3. 二级辨析 ①：是否有顺序</BlockTitle>
              <SubPoint>两个（多个）并列概念之间，<b>是否紧密衔接、有没有固定先后顺序</b>。</SubPoint>
              <Callout variant="formula"><span className="formula">示例</span>　锁骨：肋骨：坐骨（同一层级的人体骨骼，无固定顺序）　酉时：戌时：亥时（十二时辰，有固定顺序）</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 4 · 是否为并列的关系<span className="src">2024 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>锁骨：肋骨：坐骨</ExampleQuestion>
                <ExampleOptions><span>A. 头脑：头皮：头发</span><span>B. 腹腔：口腔：鼻腔</span><span>C. 盲肠：大肠：直肠</span><span>D. 颈椎：胸椎：腰椎</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>锁骨、肋骨、坐骨是<b>三种并列的骨</b>，彼此没有包含关系，也没有固定先后。<br />
                  D 颈椎、胸椎、腰椎都是<b>椎骨</b>，并列且无包含 → 一致；<br />
                  A「头皮」在「头脑」上、「头发」长在头皮上 → 层级 / 组成；<br />
                  B 三个「腔」虽并列，但层次上并不统一；C 盲肠、直肠都是大肠的一部分 → 组成关系。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 5 · 有固定顺序的并列<span className="src">2022 联考（50% 正确率）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>酉时：戌时：亥时</ExampleQuestion>
                <ExampleOptions><span>A. 立春：立秋：立冬</span><span>B. 颔联：颈联：尾联</span><span>C. 口琴：古琴：胡琴</span><span>D. 吴语：粤语：软语</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>酉、戌、亥是十二时辰中<b>紧密相连</b>的三个时辰，既有并列、又有固定先后。<br />
                  B 颔联、颈联、尾联是律诗四联中的第二、三、四联，同样紧密相连 → 一致；<br />
                  A 立春、立秋、立冬之间并不相邻（跳过了大量节气）；C 都是乐器、无顺序；D 都是方言 / 语类、无顺序。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 6 · 隐含顺序（天干）<span className="src">2021 联考（53%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>戊：己：庚</ExampleQuestion>
                <ExampleOptions><span>A. 钠：镁：铝</span><span>B. 寅：卯：巳</span><span>C. 牛：虎：龙</span><span>D. 秦：汉：隋</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>戊、己、庚是<b>天干中紧挨着的三个</b>——既有固定顺序，又必须<b>连续</b>。<br />
                  A 钠、镁、铝在元素周期表中正好是紧挨着的三个 → 一致；<br />
                  B 寅、卯、巳中间缺了「辰」；C 牛、虎、龙对应丑、寅、辰，中间缺了「兔」；<br />
                  D 秦、汉、隋之间隔了大量朝代，不连续。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 7 · 同一大类下的并列<span className="src">2024 山西纪委监委（60%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>卧室：书房：客厅</ExampleQuestion>
                <ExampleOptions><span>A. 牙齿：牙龈：牙根</span><span>B. 川剧：蒲剧：锡剧</span><span>C. 桌面：桌布：桌腿</span><span>D. 教室：讲台：课桌</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>卧室、书房、客厅是住宅中<b>功能不同的房间</b>，彼此并列、互不包含。<br />
                  B 川剧、蒲剧、锡剧是并列的不同剧种 → 一致；<br />
                  A 牙龈、牙根是牙齿的组成部分；C 桌面、桌腿是桌子的部件，桌布是附属物；D 讲台、课桌是教室里的陈设。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>4. 二级辨析 ②：不同层级全异</BlockTitle>
              <SubPoint>看着像并列，其实<b>一个概念是「个体 / 子类」，另一个概念是「同一大类下的另一个子类」</b>，二者不在一个层级上。</SubPoint>
              <Callout variant="formula"><span className="formula">示例</span>　青蛙：哺乳动物（青蛙是两栖动物，与哺乳动物同一层级）　狗：植物　中国：发达国家　自行车：机动车　金星：恒星</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 8 · 不同层级全异<span className="src">2023 辽宁事业单位（58%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>青蛙：哺乳动物</ExampleQuestion>
                <ExampleOptions><span>A. 软件：计算机</span><span>B. 钢琴：铜管乐器</span><span>C. 奇数：自然数</span><span>D. 火星：太阳系</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>青蛙是<b>两栖动物</b>，与哺乳动物同属脊椎动物的不同类群，二者全异（青蛙不是哺乳动物）。<br />
                  B 钢琴是<b>键盘乐器</b>，与铜管乐器同属乐器的不同类群，全异 → 一致；<br />
                  A 软件是计算机的组成部分（组成）；C 奇数属于自然数（种属）；D 火星属于太阳系（种属）。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>5. 二级辨析 ③：动力来源</BlockTitle>
              <SubPoint>并列的两个事物，看它们的<b>动力从哪来</b>是否一致（人力 / 非人力）。</SubPoint>
              <Callout variant="formula"><span className="formula">示例</span>　飞机：汽车 → 动力都来自「<b>非人力</b>」</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 9 · 动力来源<span className="src">2020 山东</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>飞机：汽车</ExampleQuestion>
                <ExampleOptions><span>A. 电瓶车：自行车</span><span>B. 高铁：有轨电车</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>飞机与汽车都是交通工具，且动力都来自<b>非人力</b>（发动机 / 燃料）。<br />
                  B 高铁与有轨电车也都是电力驱动的交通工具，动力来源一致；<br />
                  A「电瓶车」靠电力、「自行车」靠人力，<b>动力来源不一致</b>。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>6. 二级辨析 ④：概念之间存在转化</BlockTitle>
              <SubPoint>并列的多个概念其实是<b>同一主体的不同阶段 / 不同身份</b>，可以互相转化。</SubPoint>
              <Callout variant="formula"><span className="formula">示例</span>　孙子：父亲：祖父（同一个人随辈分变化，身份在转化）　昨天：今天：明天（同一维度的推移）</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 10 · 概念之间的转化<span className="src">2020 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>孙子：父亲：祖父</ExampleQuestion>
                <ExampleOptions><span>A. 昨天：今天：明天</span><span>B. 上旬：中旬：下旬</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>孙子、父亲、祖父这三个身份，可以由<b>同一个人</b>在不同阶段依次获得，是<b>同一主体的转化</b>。<br />
                  A 昨天、今天、明天同样是同一时间维度的推移（今天的我会变成明天的我）→ 一致；<br />
                  B 上旬、中旬、下旬是一个月内<b>三个不同的时段</b>，不是同一主体的转化。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
