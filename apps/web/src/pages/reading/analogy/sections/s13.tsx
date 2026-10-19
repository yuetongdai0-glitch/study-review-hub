import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 三 · 5 特征（属性）关系
 *
 * @returns 该节正文。
 */
export default function S15(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义与判断标准</BlockTitle>
              <Callout variant="key"><b>判断标准：</b>后者是事物<b>自身具有的特征</b>；能造句「A 是……的」。</Callout>
              <Callout variant="formula"><span className="formula">示例</span>　盐：咸　汽车：快　花：美</Callout>
              <Callout variant="tip"><b>强烈提示：</b>题干出现 <b>XX 性 / XX 化 / XX 式</b> 这样的词，几乎一定是考特征（属性）关系。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 「XX 性」的特征关系<span className="src">2025 国考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>直观性：即时性：网络直播</ExampleQuestion>
                <ExampleOptions><span>A. 等边性：对称性：等腰梯形</span><span>B. 公开性：权威性：行政法律</span><span>C. 周期性：延展性：机械钟摆</span><span>D. 挥发性：保温性：石棉纤维</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>直观性和即时性都是网络直播<b>本身具备的特征</b>。<br />
                  B 公开性和权威性都是行政法律本身具备的特征 → 一致；<br />
                  A 等腰梯形并不具备「等边性」（只有等腰）；C 机械钟摆不具备「延展性」；<br />
                  D 石棉纤维不具备「挥发性」（石棉的特点是不燃、保温）。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 二级辨析：必然特征 / 或然特征</BlockTitle>
              <Callout variant="formula">
                <span className="formula">必然特征</span>　太阳：东升西落　珠峰：高耸入云（一定成立）<br />
                <span className="formula">或然特征</span>　桃树：花团锦簇　江面：风平浪静　道路：车水马龙（可能成立、也可能不成立）
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 2 · 必然特征<span className="src">2024 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>太阳：东升西落</ExampleQuestion>
                <ExampleOptions><span>A. 珠峰：高耸入云</span><span>B. 桃树：花团锦簇</span><span>C. 江面：风平浪静</span><span>D. 道路：车水马龙</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>东升西落是太阳<b>必然</b>出现的特征。<br />
                  A 高耸入云是珠峰必然具备的特征 → 一致；<br />
                  B 桃树不是常开花、C 江面不会永远平静、D 道路也不会总是车水马龙，都是<b>或然</b>特征。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>3. 易错点：特征 与 功能 的区别</BlockTitle>
              <Callout variant="formula">
                <span className="formula">特征</span>　事物<b>自身具有</b>的特性（汽车：快　灯光：亮）<br />
                <span className="formula">功能</span>　<b>能用来做什么</b>——用「用 X（干）X」检验（汽车：载人　灯光：照明）
              </Callout>
              <Callout variant="tip">活学活用：①花：美（特征）②花：装饰（功能）③灯光：亮（特征）④灯光：照明（功能）。<b>看能不能加「用」字</b>就能分开。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 3 · 特征与功能混在一起考<span className="src">2022 联考（57%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>潮汐能：生物质能：可再生</ExampleQuestion>
                <ExampleOptions><span>A. 洗手液：消毒液：可除菌</span><span>B. 手套：围巾：可防寒</span><span>C. 易拉罐：塑料瓶：可回收</span><span>D. 小米：核桃：可助眠</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「可再生」是潮汐能和生物质能<b>自身的属性</b> → 特征关系。<br />
                  C「可回收」是易拉罐和塑料瓶自身的属性 → 一致；<br />
                  A「可除菌」、B「可防寒」、D「可助眠」都能改写成「用它来除菌 / 防寒 / 助眠」，是<b>功能</b>而非特征。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
