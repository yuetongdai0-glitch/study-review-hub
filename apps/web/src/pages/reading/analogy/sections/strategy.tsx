import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 易错点与做题纪律
 *
 * @returns 该节正文。
 */
export default function S27(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 固定流程（照做就行）</BlockTitle>
              <Callout variant="formula">
                <b>第一步</b>　先横后纵：横向定关系（题干两个词之间）<br />
                <b>第二步</b>　无唯一答案 → 用二级辨析（人为/天然、必然/或然、核心/非核心…）<br />
                <b>第三步</b>　基础考点 + 二级辨析都定不出来 → <b>纵向对比</b><br />
                <b>兜底</b>　看不出任何常考关系 → 造句法
              </Callout>
              <Callout variant="warn"><b>纪律：不能一上来就用二级辨析。</b>一定要先用基础考点解题，没有唯一项时再往下走。</Callout>
            </Block>
            <Block>
              <BlockTitle>2. 纵向对比怎么比（横向无解时）</BlockTitle>
              <DataTable>
                <tr><th>对比维度</th><th>说明</th></tr>
                <tr><td><b>同一范畴</b></td><td>抽象 / 具体；同一领域；内 / 外；积极 / 消极</td></tr>
                <tr><td><b>人工 / 自然</b></td><td>花：牡丹：玫瑰（都是自然物）</td></tr>
                <tr><td><b>词性、结构</b></td><td>道路：桥梁：市政设施（都是名词 + 名词 + 名词性总称）</td></tr>
              </DataTable>
              <Callout variant="formula">
                <span className="formula">示例</span>　峰：山峰：碳达峰 → 要先在 B「潮：海潮：移民潮」与 D「羊：山羊：领头羊」之间纵向对比，<br />
                看「单字在本词中的含义是否发生同方向的引申」，再选同一范畴的那一个。
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 靠纵向对比收口<span className="src">2022 江苏（67%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>峰：山峰：碳达峰</ExampleQuestion>
                <ExampleOptions><span>A. 界：世界：思想界</span><span>B. 潮：海潮：移民潮</span><span>C. 子：儿子：菜篮子</span><span>D. 羊：山羊：领头羊</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>横向看：「山峰」的「峰」是本义（山的尖顶），「碳达峰」的「峰」是<b>引申义</b>（峰值）——由自然实体引申为抽象数值。<br />
                  纵向对比：B「海潮」的「潮」是本义（潮汐），「移民潮」的「潮」引申为抽象的「趋势」→ 引申机制完全一致；<br />
                  D「领头羊」的「羊」仍是本义（只是整体成为比喻）；A 的「界」两处含义相近；C「菜篮子」的「子」是无实义后缀。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>3. 考前检查清单</BlockTitle>
              <PointList>
                <li><b>常识积累先过一遍</b>：全同（地名别称 / 庙号本名）、矛盾全异、指代象征、成语拆分清单。</li>
                <li><b>条件关系有优先级</b>：见到「则 / 就 / 必 / 不…不 / 才」先往条件上想；没有提示词就别硬找隐含条件。</li>
                <li><b>先看顺序</b>：顺承题、并列题先验顺序，能筛掉大半干扰项。</li>
                <li><b>种属先于组成</b>：先问「A 是 B 的一种」，再问「A 是 B 的一部分」。</li>
                <li><b>特征 vs 功能</b>：能加「用」字的是功能，不能加的是特征。</li>
                <li><b>造句不加字</b>：能不加就不加，加就要两边加一样的字。</li>
              </PointList>
            </Block>
    </>
  )
}
