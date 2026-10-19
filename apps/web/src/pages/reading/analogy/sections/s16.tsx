import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 三 · 8 依据关系
 *
 * @returns 该节正文。
 */
export default function S18(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义与判断标准</BlockTitle>
              <Callout variant="key"><b>判断标准：</b>一者依据另一者（把某种事物作为<b>依托或根据</b>）→ 能造句「依据 A，做 B」。</Callout>
              <Callout variant="formula"><span className="formula">示例</span>　教案：授课　标准：测量　信息：决策　策略：经营盈亏</Callout>
              <Callout variant="tip"><b>出现「规则、标准、法律、制度、提纲」等词，常考依据关系。</b></Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 依据（括号式）<span className="src">2024 四川（57%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>标准　对于　（　　）　相当于　（　　）　对于　决策</ExampleQuestion>
                <ExampleOptions><span>A. 准则　落实</span><span>B. 提纲　机会</span><span>C. 测量　信息</span><span>D. 制定　正确</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>依据标准进行测量；依据信息做出决策 —— 两段都是「<b>依据 … 做 …</b>」。<br />
                  C 代入后前后两段结构完全对称；<br />
                  A 准则只是标准的近义词；B 提纲与机会无依据关系；D 制定标准只是把标准当对象，不构成「依据 … 做 …」。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 2 · 依据 + 结果评价<span className="src">2022 广东（68%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>法律：诉讼：胜败</ExampleQuestion>
                <ExampleOptions><span>A. 策略：经营：盈亏</span><span>B. 战争：武器：存亡</span><span>C. 判断：事实：对错</span><span>D. 教师：教学：优劣</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>依据法律进行诉讼，诉讼的结果有胜有败 → <b>依据 + 行为 + 结果评价</b>。<br />
                  A 依据策略进行经营，经营的结果有盈有亏 → 结构一致；<br />
                  B 战争不是依据武器进行的（武器是工具）；C 事实是判断的依据，但语序与题干不符；<br />
                  D 教师是行为的<b>主体</b>，不是依据（这是最容易误选的一项）。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 3 · 依据 + 行为 + 主体<span className="src">2024 河北事业单位（62%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>交规：处理违章：交警</ExampleQuestion>
                <ExampleOptions><span>A. 职责：维持秩序：安保员</span><span>B. 教案：备课：教师</span><span>C. 合同：维修电器：维修工</span><span>D. 菜谱：烹饪：厨师</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>交警<b>依据交规</b>去处理违章 → 依据 + 行为 + 主体。<br />
                  D 厨师<b>依据菜谱</b>进行烹饪 → 完全一致；<br />
                  B 看起来像，但教案是备课的<b>产物</b>，不是备课的依据（顺序反了）；<br />
                  A「职责」是抽象概念、且维持秩序不是「依据」；C 维修工维修电器依据的是说明书或经验，而不是合同。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 4 · 以某物为存在标志<span className="src">2025 联考（65%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>宜居带：液态水</ExampleQuestion>
                <ExampleOptions><span>A. 舒适区：页岩气</span><span>B. 生物圈：有机物</span><span>C. 无人区：可燃冰</span><span>D. 地震带：火山岩</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>判断一个区域是否属于「宜居带」，<b>依据就是能不能存在液态水</b> → 依据 / 标志关系。<br />
                  B 判断「生物圈」的依据是有没有有机物（有机物是生命存在的物质基础）→ 一致；<br />
                  A 舒适区与页岩气无关（且「舒适区」是个人心理概念）；<br />
                  C 无人区与可燃冰没有必然联系；D 地震带不必然存在火山岩。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
