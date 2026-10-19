import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 二 · 6 因果关系
 *
 * @returns 该节正文。
 */
export default function S8(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义与判断标准</BlockTitle>
              <Callout variant="key"><b>判断标准：</b>能用「<b>导致</b>」「<b>所以</b>」造句 —— 前者导致后者。</Callout>
              <DataTable>
                <tr><th>形态</th><th>结构</th><th>示例</th></tr>
                <tr><td><b>普通因果</b></td><td>一因一果</td><td>下雨：地湿　发炎：发烧</td></tr>
                <tr><td><b>连锁因果</b></td><td>一因一果再一果</td><td>饮酒：神志不清：车祸</td></tr>
                <tr><td><b>多因一果</b></td><td>几个原因都能导致同一个结果</td><td>工业排放：滥用农药：水质污染</td></tr>
              </DataTable>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 普通因果<span className="src">2025 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>发炎：发烧</ExampleQuestion>
                <ExampleOptions><span>A. 饥饿：烧烤</span><span>B. 学习：考试</span><span>C. 祭祀：缅怀</span><span>D. 缺铁：贫血</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>发炎会导致发烧 → 因果。<br />
                  D 缺铁会导致贫血 → 因果，一致；<br />
                  A 饥饿与烧烤无因果；B 学习不是考试的原因（顺序相反）；C 祭祀是为了缅怀（目的关系）。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 2 · 结果状态在前、原因在后<span className="src">2025 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>衰弱：噪声：听力</ExampleQuestion>
                <ExampleOptions><span>A. 锻炼：饮食：健康</span><span>B. 杠杆：重力：质量</span><span>C. 降低：摩擦：速度</span><span>D. 气候变暖：冰层融化：环境</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>噪声导致听力衰弱 —— 语序是「<b>结果状态 + 原因 + 对象</b>」。<br />
                  C 摩擦导致速度降低 → 「降低（结果状态）+ 摩擦（原因）+ 速度（对象）」，结构完全一致；<br />
                  A 是「两个原因 + 结果」；B 杠杆、重力、质量之间没有因果；D 气候变暖导致冰层融化、进而影响环境，语序不符。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 二级辨析 ①：多因一果</BlockTitle>
              <SubPoint>三个词时，前两个都是原因，<b>各自都能导致</b>第三个结果；注意区别于「连锁因果」。</SubPoint>
              <Callout variant="formula"><span className="formula">示例</span>　放养过密：饲喂不当：鱼病发生　发生地基下沉：结构老化：房屋倾斜</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 3 · 多因一果<span className="src">2024 国考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>放养过密：饲喂不当：鱼病发生</ExampleQuestion>
                <ExampleOptions><span>A. 任务繁重：临时加班：积劳成疾</span><span>B. 材料审核：实地考核：评估通过</span><span>C. 地基下沉：结构老化：房屋倾斜</span><span>D. 市场饱和：利润下降：分红减少</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「放养过密」和「饲喂不当」<b>各自都能导致</b>鱼病发生 → 多因一果。<br />
                  C 地基下沉、结构老化都能导致房屋倾斜 → 多因一果，一致；<br />
                  A「任务繁重」导致「临时加班」、再导致「积劳成疾」是一因接一果（连锁）；<br />
                  B 三者为流程顺序（顺承）；D 市场饱和 → 利润下降 → 分红减少也是连锁因果。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>3. 二级辨析 ②：原因是人为还是天然</BlockTitle>
              <SubPoint>起因是<b>人的行为</b>，还是<b>自然现象</b>。涉及自然现象的多考因果。</SubPoint>
              <Callout variant="formula">
                <span className="formula">天然</span>　温室效应：冰山融化：海面上升　连日降雪：道路结冰：出行困难<br />
                <span className="formula">人为</span>　博览群书：视野开阔：见解深刻　刻苦训练：技能提高：获得金牌
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 4 · 原因是人为还是天然<span className="src">2025 江苏</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>温室效应：冰山融化：海面上升</ExampleQuestion>
                <ExampleOptions><span>A. 博览群书：视野开阔：见解深刻</span><span>B. 连日降雪：道路结冰：出行困难</span><span>C. 电闪雷鸣：狂风大作：沙尘肆虐</span><span>D. 刻苦训练：技能提高：获得金牌</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>温室效应 → 冰山融化 → 海面上升，环环相扣，且成因都是<b>自然 / 天然因素</b>。<br />
                  B 连日降雪 → 道路结冰 → 出行困难，同为天然因素的连锁因果 → 一致；<br />
                  A、D 的起点都是人的行为（博览群书、刻苦训练）；C 三者是并列现象，不成因果链。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>4. 二级辨析 ③：结果是好的还是坏的</BlockTitle>
              <SubPoint>同一类因果里，再看<b>结果的性质</b>是不是同一个方向。</SubPoint>
              <Callout variant="formula">
                <span className="formula">坏结果</span>　酒后驾车：交通事故<br />
                <span className="formula">好结果</span>　春雨绵绵：五谷丰登
              </Callout>
              <Callout variant="warn">这一条经常被忽略：一路看下来「确实是因果」就选了，其实还要看<b>结果好坏是否与题干一致</b>。</Callout>
            </Block>
            <Block>
              <BlockTitle>5. 二级辨析 ④：结果是否必然发生</BlockTitle>
              <SubPoint>前者出现后，后者是<b>一定发生</b>，还是<b>可能发生</b>。</SubPoint>
              <Callout variant="formula">
                <span className="formula">结果必然</span>　摩擦物体：产生热量　嗜烟酗酒：损害健康　春天播种：秋天收获　刻苦勤奋：成绩优秀<br />
                <span className="formula">结果非必然</span>　认识错误：改正缺点
              </Callout>
            </Block>
    </>
  )
}
