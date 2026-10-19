import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 二 · 3 种属关系
 *
 * @returns 该节正文。
 */
export default function S5(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义与判断标准</BlockTitle>
              <Callout variant="key">
                <b>含义：</b>一个小概念<b>完全属于</b>另一个大概念。<br />
                <b>判断标准：</b>能造句「<b>A 是 B（的一种 / 一个）</b>」。
              </Callout>
              <Callout variant="formula">
                <span className="formula">示例</span>　单人床：床　狗：动物　劳动者：工人：瓦工　车：机动车：货车
              </Callout>
              <Callout variant="tip">三个词时，通常要<b>逐级</b>判断：后一个包含前一个，一层套一层。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 逐级种属<span className="src">2025 山东事业单位</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>劳动者：工人：瓦工</ExampleQuestion>
                <ExampleOptions><span>A. 动物：老虎：猫</span><span>B. 车：机动车：卡车</span><span>C. 新闻：报社：新华社</span><span>D. 语言：英语：听力</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>瓦工是工人的一种，工人是劳动者的一种 → <b>逐级种属</b>。<br />
                  B 卡车是机动车的一种，机动车是车的一种 → 一致；<br />
                  A「猫」不是老虎的一种；C 报社、新华社是机构，与新闻不是种属；D 听力不是英语的一种。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 二级辨析 ①：小概念是特指还是泛指</BlockTitle>
              <SubPoint>
                <b>特指</b>：一说这个词就知道是具体哪一个（唯一、专有名词）→ 长白山：火山、巢湖：淡水湖。<br />
                <b>泛指</b>：这一类事物太多，不知道具体是哪一个 → 皇陵：古建筑。
              </SubPoint>
              <Callout variant="key"><b>常见特指概念：山名、河流名、名人、名胜古迹、地名、国名。</b></Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 2 · 特指 / 泛指<span className="src">2023 浙江</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>长白山：火山</ExampleQuestion>
                <ExampleOptions><span>A. 皇陵：古建筑</span><span>B. 巢湖：淡水湖</span><span>C. 连衣裙：丝绸</span><span>D. 火箭军：军人</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>长白山是<b>特指</b>的一座山（一说就知道是哪一座），且长白山是火山。<br />
                  B 巢湖也是<b>特指</b>的一个湖（位于安徽），且巢湖是淡水湖 → 一致；<br />
                  A 皇陵是<b>泛指</b>（皇陵有很多座，不知道指哪一座）；<br />
                  C 丝绸是连衣裙的材料（加工 / 材料）；D 是组成关系（火箭军由军人组成）。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>3. 二级辨析 ②：叠加修饰词</BlockTitle>
              <SubPoint>题干在同一核心词上<b>一层一层加修饰语</b>，做题时盯住「加的是什么维度的修饰」。</SubPoint>
              <Callout variant="formula"><span className="formula">示例</span>　制造 → 中国制造 → 智能化中国制造（先加地域，再加特征）<br /><span className="formula">示例</span>　批评 → 自我批评 → 剖析式自我批评（先加对象，再加方式）</Callout>
            </Block>
            <Block>
              <BlockTitle>4. 三项式技巧：先看是「层层套」还是「两并列」</BlockTitle>
              <SubPoint>
                <b>层层套</b>：第三词 ⊂ 第二词 ⊂ 第一词（古代小说 ⊂ 古代文学 ⊂ 文学）<br />
                <b>两并列</b>：第二、三词都是第一词下的不同类别（①②③、甲乙丙 都是「编号」）
              </SubPoint>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 3 · 层层套的逐级种属<span className="src">2023 山东（61%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>文学：古代文学：古代小说</ExampleQuestion>
                <ExampleOptions><span>A. 花：花苞：花蕊</span><span>B. 科学：基础科学：数学</span><span>C. 地球：亚洲：中国</span><span>D. 全日制大学生：大学生：学生</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>古代文学是文学的一种，古代小说是古代文学的一种 → <b>层层种属</b>。<br />
                  B 基础科学是科学的一种，数学是基础科学的一门 → 一致；<br />
                  A 花苞、花蕊是花的组成部分（组成）；C 亚洲、中国是组成（且方向反了）；D 语序是「小 → 大」，与题干相反。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 4 · 两并列（都是第一词的类别）<span className="src">2024 联考（51%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>编号：①②③：甲乙丙</ExampleQuestion>
                <ExampleOptions><span>A. 热水器：进水管：出水管</span><span>B. 定价：生产成本：营销成本</span><span>C. 字母：大写字母：小写字母</span><span>D. 防晒：室内躲避：涂防晒霜</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>①②③和甲乙丙都是「编号」的具体形式，二者并列、都从属于第一词 → 种属 + 并列。<br />
                  C 大写字母、小写字母都是「字母」的形式，并列且从属 → 一致；<br />
                  A 进水管、出水管是热水器的组成部件；B 生产成本、营销成本不是「定价」的类别；<br />
                  D 室内躲避、涂防晒霜是防晒的手段。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 5 · 尾缀相同的两并列<span className="src">2025 联考（60%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>购票：自助购票：窗口购票</ExampleQuestion>
                <ExampleOptions><span>A. 卖货：寄卖货物：赊卖货物</span><span>B. 灾害：抵御灾害：躲避灾害</span><span>C. 救助：提供现金：发放实物</span><span>D. 公司：银行贷款：股票筹资</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>自助购票、窗口购票都是「购票」的方式，且<b>都保留「购票」二字</b>（尾缀相同）。<br />
                  A 寄卖货物、赊卖货物都保留「卖货」二字，且都是卖货的方式 → 一致；<br />
                  B 抵御灾害、躲避灾害是<b>对付</b>灾害的方式，不是灾害的种类（关系方向不同）；<br />
                  C、D 的第二、三词都不含第一词，不符合「尾缀相同」。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
