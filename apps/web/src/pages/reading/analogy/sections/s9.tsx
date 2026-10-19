import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 三 · 1 功能关系
 *
 * @returns 该节正文。
 */
export default function S11(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义与判断标准</BlockTitle>
              <Callout variant="key"><b>判断标准：</b>工具及其<b>功能用途</b>。能造句「用 X 来（干）…」。</Callout>
              <Callout variant="formula">
                <span className="formula">示例</span>　碘伏：消毒　灯：照明　台灯：装饰　棉签：碘伏：消毒
              </Callout>
              <Callout variant="tip">题干里<b>出现人造产物</b>时，很可能考的就是经验常识。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 正向功能<span className="src">2025 浙江</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>消毒水：消毒</ExampleQuestion>
                <ExampleOptions><span>A. 部队锅：部队</span><span>B. 橄榄球：橄榄</span><span>C. 葡萄酒：葡萄</span><span>D. 减脂餐：减脂</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>消毒水的功能是消毒 → 功能关系。<br />
                  D 减脂餐的功能是减脂 → 一致；<br />
                  A 部队锅名字里有「部队」但与部队无关；B 橄榄球不是橄榄做的；C 葡萄是葡萄酒的原材料（加工关系）。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 二级辨析 ①：主要功能 / 次要功能</BlockTitle>
              <SubPoint>一个事物身兼数职时，看题干用的是<b>主要用途还是衍生出来的次要用途</b>。</SubPoint>
              <Callout variant="formula"><span className="formula">示例</span>　台灯：装饰（主要功能是照明，装饰是次要功能）　食醋：除垢（主要功能是调味，除垢是次要功能）</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 2 · 主要功能 / 次要功能<span className="src">2025 浙江（68%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>台灯：装饰</ExampleQuestion>
                <ExampleOptions><span>A. 脸盆：洗漱</span><span>B. 空调：风扇</span><span>C. 食醋：除垢</span><span>D. 蜡烛：氛围</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>台灯的<b>主要功能是照明</b>，「装饰」是衍生出来的次要功能。<br />
                  C 食醋的主要功能是调味，「除垢」是次要功能 → 一致；<br />
                  A 洗漱就是脸盆的本职功能（主要功能）；B 空调与风扇是并列的两种电器，不是功能关系；<br />
                  D 蜡烛的主要功能本就是照明 / 烘托氛围，与题干「本职之外衍生出的新用途」不完全对应。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 3 · 次要功能的经典考法<span className="src">2017 国考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>白醋：消毒</ExampleQuestion>
                <ExampleOptions><span>A. 热水器：加热</span><span>B. 汽油：去渍</span><span>C. 白糖：调味</span><span>D. 人参：滋补</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>白醋的主要用途是调味，「消毒」是从中衍生出的<b>次要功能</b>。<br />
                  B 汽油的主要用途是燃料，「去渍」是衍生出的次要功能 → 一致；<br />
                  A「加热」是热水器的本职功能；C「调味」是白糖的主要功能；D「滋补」是人参的主要功能。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>3. 二级辨析 ②：反向功能（不明说功能，要反推）</BlockTitle>
              <SubPoint>题干给的不是「功能」本身，而是这个工具要<b>对付的对象 / 消除的东西</b>，需要自己反推。</SubPoint>
              <Callout variant="formula"><span className="formula">示例</span>　灯：黑暗 → 灯的功能是驱散黑暗　耳塞：噪音　肥皂：污渍</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 4 · 反向功能<span className="src">2022 广东</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>耳塞：噪音</ExampleQuestion>
                <ExampleOptions><span>A. 书籍：知识</span><span>B. 蜡烛：光明</span><span>C. 肥皂：污渍</span><span>D. 风扇：低温</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>耳塞的功能是<b>阻隔噪音</b>——题干给的是「要消除的东西」。<br />
                  C 肥皂的功能是<b>去除污渍</b>，同样是给「要消除的东西」→ 一致；<br />
                  B 蜡烛带来光明、A 书籍带来知识，都是「带来什么」而非「消除什么」；<br />
                  D 风扇只能加速空气流动，并不能产生「低温」，功能与对象不成立。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>4. 形式二：多个工具配套使用</BlockTitle>
              <SubPoint>几个工具<b>组合在一起</b>共同完成一个用途。</SubPoint>
              <Callout variant="formula"><span className="formula">示例</span>　棉签：碘伏：消毒　眼镜框：眼镜片　炭火：烤架：烧烤</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 5 · 配套使用<span className="src">2025 四川</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>炭火：烤架：烧烤</ExampleQuestion>
                <ExampleOptions><span>A. 扳手：电钻：修理</span><span>B. 鞋柜：皮鞋：收纳</span><span>C. 酒精：棉签：消毒</span><span>D. 手枪：子弹：击发</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>炭火放在烤架上，两者配套完成「烧烤」→ 两个工具配套实现同一功能。<br />
                  C 酒精配合棉签完成「消毒」→ 与题干结构一致；<br />
                  A 扳手与电钻是各自独立的工具，不构成配套；B「皮鞋」是被收纳的对象，不是工具；<br />
                  D 子弹要装进手枪才能击发，但「击发」是动作而非用途，且二者是组成 / 使用关系。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>5. 形式三：多个工具功能相似 + 出现时间有先后</BlockTitle>
              <SubPoint>两个东西功能差不多，但<b>一个古、一个今</b>。</SubPoint>
              <Callout variant="formula"><span className="formula">示例</span>　马车：汽车　刻漏（水钟）：钟表　煤：石油　青铜：黄金　刺绣：缂丝</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 6 · 功能相似、古今先后<span className="src">2022 黑龙江</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>马车：汽车</ExampleQuestion>
                <ExampleOptions><span>A. 煤：石油</span><span>B. 刻漏：钟表</span><span>C. 青铜：黄金</span><span>D. 刺绣：缂丝</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>马车与汽车都是代步工具，功能相同，且<b>马车在前、汽车在后</b>（时代先后）。<br />
                  B 刻漏（水钟，古代计时器）与钟表功能相同，也是前古后今 → 一致；<br />
                  A 煤与石油同为化石能源，孰先孰后不明确；C 青铜与黄金是两种材料；<br />
                  D 刺绣与缂丝都是传统丝织工艺，缂丝其实更古老，与题干的先后方向不符。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>6. 形式四：多个工具功能相反 / 功能多重与单一</BlockTitle>
              <Callout variant="formula">
                <span className="formula">功能相反</span>　电风扇：电暖机　火炉：蒲扇　油门：刹车<br />
                <span className="formula">功能单一</span>　火炉：蒲扇　油门：刹车<br />
                <span className="formula">功能多重</span>　伞：雨衣（伞可遮雨也可遮阳，雨衣只能防雨）　斗笠：蓑衣（斗笠可遮雨遮阳，蓑衣只能防雨）　暖气：空调（空调可制暖可制冷）
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 7 · 功能相反<span className="src">2025 四川（50%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>火炉：蒲扇</ExampleQuestion>
                <ExampleOptions><span>A. 斗笠：蓑衣</span><span>B. 暖气：空调</span><span>C. 油门：刹车</span><span>D. 出租车：私家车</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>火炉用来取暖、蒲扇用来纳凉，<b>功能相反</b>，且各自只有单一功能。<br />
                  C 油门加速、刹车减速，功能相反且单一 → 一致；<br />
                  A 斗笠与蓑衣都是防雨用具（功能相似，斗笠还多一项遮阳）；<br />
                  B 暖气制热、空调既能制热又能制冷（功能并非相反）；D 两者功能相同、只是运营性质不同。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 8 · 功能多重 vs 功能单一<span className="src">超格 3+2 拓展</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>伞：雨衣</ExampleQuestion>
                <ExampleOptions><span>A. 空调：暖气</span><span>B. 蚊香：蚊帐</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>伞既能遮雨、也能遮阳（<b>功能多重</b>）；雨衣只能防雨（<b>功能单一</b>）。<br />
                  A 空调既能制冷又能制热（多重）、暖气只能制热（单一）→ 结构一致；<br />
                  B 蚊香与蚊帐都是防蚊用具，功能基本重合，没有「多重与单一」的对照。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 9 · 种属 + 功能（三项式）<span className="src">2025 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>车辆：货车：运输</ExampleQuestion>
                <ExampleOptions><span>A. 温室气体：甲烷：二氧化碳</span><span>B. 未来产业：量子信息：研究监管</span><span>C. 自我意识：人格：心理调节</span><span>D. 绿色能源：太阳能：发电</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>货车是车辆的一种（种属），运输是货车的功能 → 种属 + 功能。<br />
                  D 太阳能是绿色能源的一种，发电是太阳能的功能 → 结构一致；<br />
                  A 甲烷是温室气体的一种，但「二氧化碳」不是甲烷的功能；<br />
                  B 量子信息是未来产业的一种，但「研究监管」不是它的功能；C 三者不构成种属 + 功能。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
