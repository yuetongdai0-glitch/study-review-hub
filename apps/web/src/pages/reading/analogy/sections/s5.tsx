import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 二 · 5 顺承关系
 *
 * @returns 该节正文。
 */
export default function S7(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义与判断标准</BlockTitle>
              <Callout variant="key"><b>判断标准：</b>题干出现<b>多个有顺序的行为</b>（有先后顺序，缺一不可）。</Callout>
              <Callout variant="formula">
                <span className="formula">示例</span>　提交：审核：批准　支付本币：兑换外币：确认汇率
              </Callout>
              <Callout variant="warn">先验证<b>顺序对不对</b>——顺序错的选项直接排除，这一步就能筛掉大多数。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 顺承关系<span className="src">2025 国考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>群众来访：窗口接访：调查督办</ExampleQuestion>
                <ExampleOptions><span>A. 地面试验：点火飞行：燃料加注</span><span>B. 支付本币：兑换外币：确认汇率</span><span>C. 建造堤坝：潮汐发电：送电入户</span><span>D. 重启谈判：临时休战：边境冲突</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>先有群众来访，再有窗口接访，最后调查督办 → 按时间先后排列。<br />
                  C 先建造堤坝，才能潮汐发电，最后送电入户 → 顺序一致；<br />
                  A 应先「燃料加注」再「点火飞行」；B 应先「确认汇率」再「兑换外币」；D 应先「边境冲突」再「临时休战」「重启谈判」——<b>三项顺序全部颠倒</b>。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 二级辨析 ①：主体是否一致</BlockTitle>
              <SubPoint>各环节的<b>动作发出者是不是同一个人 / 同一方</b>。</SubPoint>
              <Callout variant="formula">
                <span className="formula">主体一致</span>　学习菜谱：下厨烹饪：总结经验　通过安检：车站候车：登上列车<br />
                <span className="formula">主体不同</span>　投寄稿件：编辑排版：读者阅读　发布公告：制作标书：签订合同
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 2 · 主体是否一致<span className="src">2023 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>学习菜谱：下厨烹饪：总结经验</ExampleQuestion>
                <ExampleOptions><span>A. 通过安检：车站候车：登上列车</span><span>B. 投寄稿件：编辑排版：读者阅读</span><span>C. 发布公告：制作标书：签订合同</span><span>D. 撰写邮件：发送邮件：回复邮件</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>学菜谱、烹饪、总结，<b>都是同一个人做的</b>，主体一致，且顺序合理。<br />
                  A 过安检、候车、上车，也全是旅客一个人做的 → 主体一致，一致；<br />
                  B 投寄稿件（作者）、编辑排版（编辑）、读者阅读（读者），主体不同；<br />
                  C 顺序不合理（应先制作标书再发布公告）；D「回复邮件」的通常是对方，主体发生了变化。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>3. 二级辨析 ②：事情是否圆满结束</BlockTitle>
              <SubPoint>整个流程是<b>走完了一个完整闭环</b>，还是<b>中途变卦 / 中断</b>。</SubPoint>
              <Callout variant="formula">
                <span className="formula">圆满结束</span>　预约：核实：兑换　设想：实践：总结<br />
                <span className="formula">未圆满结束</span>　招聘：培训：辞职
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 3 · 事情是否圆满结束<span className="src">2022 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>预约：核实：兑换</ExampleQuestion>
                <ExampleOptions><span>A. 设想：实践：总结</span><span>B. 招聘：培训：辞职</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>预约 → 核实 → 兑换，是一个<b>走到底、有结果</b>的完整流程。<br />
                  A 设想 → 实践 → 总结，同样是完整闭环、有始有终 → 一致；<br />
                  B 招聘 → 培训 → 辞职，最后一步是「离开」，<b>流程没有圆满结束</b>。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 4 · 是否围绕同一对象走完全程<span className="src">2025 事业单位联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>议案提出：审议通过：公布生效</ExampleQuestion>
                <ExampleOptions><span>A. 危险预警：紧急避让：安全驾驶</span><span>B. 按需采购：产品验收：登记入库</span><span>C. 市场监管：执法检查：责令整改</span><span>D. 问卷调查：设计量表：收集数据</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>议案提出 → 审议通过 → 公布生效，是<b>同一个议案</b>从提交到最后落地的完整流程。<br />
                  B 按需采购 → 产品验收 → 登记入库，也是同一批产品从进到入的完整流程 → 一致；<br />
                  A 顺序不当（「安全驾驶」不是流程终点）；C 前两项是监管行为、第三项是处置措施，对象不统一；<br />
                  D 顺序颠倒（应先设计量表再问卷调查）。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 5 · 双方互动的顺承<span className="src">2023 江苏</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>挑战：应战</ExampleQuestion>
                <ExampleOptions><span>A. 报考：录取</span><span>B. 观察：评估</span><span>C. 抚养：扶养</span><span>D. 超速：限速</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>先有人挑战，才有对方应战 → 顺承，且<b>两个动作分属不同主体、互相呼应</b>。<br />
                  A 先报考、后录取，同样是双方（考生 / 学校）彼此呼应的顺承 → 一致；<br />
                  B 观察与评估是同一主体做的；C 抚养（长辈对晚辈）与扶养（同辈之间）是两种相近的养育义务，无先后；<br />
                  D 超速与限速不是先后关系。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
