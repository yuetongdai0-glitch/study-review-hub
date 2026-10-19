import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 一、三条核心原则
 *
 * @returns 该节正文。
 */
export default function S2(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 三条原则（做题前先入脑）</BlockTitle>
              <PointList>
                <li><b>① 常态思维</b> —— 不要考虑极端情况，<b>按常态思维做题就行</b>。<br />
                  <span className="sub-point">考「苹果：水果」这种常识关系时，不要去纠结「苹果也可以是品牌名」这类极端理解。</span></li>
                <li><b>② 先横后纵</b> —— 先看<b>横向</b>（题干两个词之间）的关系；横向找不出答案时，再对比<b>纵向</b>（题干与选项之间）。<br />
                  <span className="sub-point">题干「西瓜：水果」先定横向是种属关系，再去选项里找同为种属关系的一项；若多项都符合，再用纵向的词性 / 色彩区分。</span></li>
                <li><b>③ 先整体后局部</b> —— 先把题干<b>冒号前后当成两个主体</b>对比、观察关系；整体看不出再<b>拆开看</b>（拆字 / 拆词）。<br />
                  <span className="sub-point">「铁路：公路」先整体看（并列）；整体无解时，再把「铁 / 公」这类字拆开比。</span></li>
              </PointList>
              <Callout variant="tip">
                <b>横向一直定不出唯一答案怎么办？</b>→ 走「<b>纵向对比</b>」：比同一范畴（抽象 / 具体、同一领域、内 / 外、积极 / 消极）、
                比人工与自然、比词性与结构。<b>具体用法与例题见文末「易错点与做题纪律」。</b>
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 先横后纵（反义）<span className="src">超格 3+2 核心原则</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>吝啬：大方</ExampleQuestion>
                <ExampleOptions><span>A. 贪婪：善良</span><span>B. 节约：浪费</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>横向看，题干是<b>反义关系</b>，且两个词都在描述「对财物 / 用度的态度」这同一个维度。<br />
                  A「贪婪」讲的是对财物的贪求，「善良」讲的是品德，<b>不是同一维度</b>，构不成反义；<br />
                  B「节约」与「浪费」正是同一维度上的反义。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 2 · 先整体后局部<span className="src">超格 3+2 核心原则</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>声东：击西</ExampleQuestion>
                <ExampleOptions><span>A. 围魏：救赵</span><span>B. 说东：道西</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>先整体：「声东」是制造假象、「击西」是真实攻击，<b>前者是手段、后者是目的</b>。<br />
                  A「围魏」是手段、「救赵」是目的，整体关系一致；<br />
                  B「说东」「道西」是两个并列的动作（说三道四），没有手段与目的之分。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
