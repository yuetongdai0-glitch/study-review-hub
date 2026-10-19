import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 二 · 7 目的关系
 *
 * @returns 该节正文。
 */
export default function S9(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义与判断标准</BlockTitle>
              <Callout variant="key"><b>判断标准：</b>出现明显的<b>目的</b>，能用「<b>为了</b>」造句 —— 前者（行为 / 方法）是为了后者（目的）。</Callout>
              <Callout variant="formula">
                <span className="formula">示例</span>　拍照：留念　促销：提高销量　种树：改善生态　精准脱贫：共同富裕
              </Callout>
              <Callout variant="tip"><b>出现「政府提倡的行为」，多考目的关系</b>（低碳排放、轮作休耕、灾害预警…）。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 目的关系<span className="src">2025 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>低碳排放：保护环境</ExampleQuestion>
                <ExampleOptions><span>A. 候鸟迁徙：气候变化</span><span>B. 昆虫叮咬：过敏反应</span><span>C. 收集数据：调查研究</span><span>D. 滴水成冰：热胀冷缩</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>低碳排放是为了保护环境 → 目的关系。<br />
                  C 收集数据是为了调查研究 → 目的关系，一致；<br />
                  A、D 无因果也无目的；B 昆虫叮咬导致过敏反应，是因果关系。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 2 · 三项式里的手段与目的<span className="src">2024 国考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>轮作休耕：耕地保护：严禁占用</ExampleQuestion>
                <ExampleOptions><span>A. 植树造林：碳中和：节能减排</span><span>B. 登月计划：空间站：太空探索</span><span>C. 商品交换：国际贸易：技术服务</span><span>D. 观众评选：荣获大奖：出类拔萃</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「轮作休耕」是为了「耕地保护」；而「严禁占用」是另一个<b>并列的手段</b>，同样指向耕地保护。<br />
                  A「植树造林」和「节能减排」都是实现「碳中和」的手段，碳中和是目的 → 一致；<br />
                  B 登月计划与空间站是并列事项，不是手段；C、D 均无手段与目的的关系。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 二级辨析：目的能否实现</BlockTitle>
              <SubPoint>行为本身<b>能不能达到</b>它想要的目的。</SubPoint>
              <Callout variant="formula">
                <span className="formula">不可实现</span>　刻舟：求剑　缘木：求鱼<br />
                <span className="formula">可实现</span>　围魏：救赵
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 3 · 目的能否实现<span className="src">2023 河北事业单位（51%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>刻舟：求剑</ExampleQuestion>
                <ExampleOptions><span>A. 杯水：车薪</span><span>B. 缘木：求鱼</span><span>C. 画蛇：添足</span><span>D. 围魏：救赵</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「刻舟」是想「求剑」，但在船上刻记号根本找不到剑 → 目的<b>不可能实现</b>。<br />
                  B 爬到树上去找鱼，目的同样不可能实现 → 一致（缘木求鱼 / 刻舟求剑是同一类成语）；<br />
                  D 围魏救赵能达成目的（袭击敌人后方迫使撤退），与题干相反；<br />
                  A「杯水车薪」是力量太小、C「画蛇添足」是多此一举，都不是目的关系。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
