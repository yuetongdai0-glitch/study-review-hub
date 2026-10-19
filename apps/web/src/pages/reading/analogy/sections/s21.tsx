import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 四 · 5 指代、象征、比喻
 *
 * @returns 该节正文。
 */
export default function S23(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 如何识别</BlockTitle>
              <Callout variant="key"><b>识别：</b>题目中出现<b>很文艺的、平时不用的词</b>（旌旗、巾帼、汗青、桑梓…）—— 第一反应就是<b>指代 / 象征 / 比喻</b>。</Callout>
              <Callout variant="formula">
                <span className="formula">指代</span>　黄发：老人　旌旗：军队　布衣：百姓<br />
                <span className="formula">象征</span>　鸽子：和平　牡丹：高洁　红色：喜庆
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 别称 + 相关节日<span className="src">2022 联考（36%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>月亮：婵娟：中秋</ExampleQuestion>
                <ExampleOptions><span>A. 粽子：艾叶：端午</span><span>B. 菊花：寿客：重阳</span><span>C. 汤圆：元夕：元宵</span><span>D. 巧果：酥糖：七夕</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>婵娟是月亮的别称，中秋是赏月相关的节日 → 本体 + 别称 + 相关节日。<br />
                  B 寿客是菊花的别称，重阳节有赏菊习俗 → 一致；<br />
                  A 艾叶不是粽子的别称；C 元夕是元宵节的别称（不是汤圆的别称）；D 酥糖不是巧果的别称。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 2 · 借代要「同一范畴」<span className="src">2023 江苏（42%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>布衣：百姓</ExampleQuestion>
                <ExampleOptions><span>A. 鸿雁：书信</span><span>B. 枢纽：关键</span><span>C. 须眉：男子</span><span>D. 巾帼：女子</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>四个选项都是借代，属于「横向定不出唯一答案」的典型题，要靠<b>纵向对比同一范畴</b>：<br />
                  布衣是<b>服饰</b>，用它借代百姓；D 巾帼是古代女子的<b>头巾发饰</b>，同属「服饰」范畴 → 与题干最贴合；<br />
                  C 须眉是<b>身体部位</b>（眉毛胡须）；A 鸿雁是动物；B「枢纽 / 关键」本身是同义而非借代。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 指代、象征知识积累（直接背）</BlockTitle>
              <DataTable>
                <tr><th>词</th><th>指代 / 象征</th></tr>
                <tr><td>领头雁（2024 国考）</td><td>领导者</td></tr>
                <tr><td>拓荒牛（2024 国考）</td><td>先驱</td></tr>
                <tr><td>草根（2023 辽宁）</td><td>平民百姓</td></tr>
                <tr><td>鸿毛（2023 辽宁）</td><td>轻微的事物</td></tr>
                <tr><td>旌旗（2023 吉林）</td><td>军队</td></tr>
                <tr><td>牡丹（2022 江苏）</td><td>高洁</td></tr>
                <tr><td>红色（2022 江苏）</td><td>喜庆</td></tr>
                <tr><td>梅花（2021 云南）</td><td>高洁</td></tr>
                <tr><td>优雅（2021 云南）</td><td>天鹅</td></tr>
                <tr><td>红颜 / 娥眉（2019 四川）</td><td>女性</td></tr>
                <tr><td>铁窗（2019 联考）</td><td>监狱</td></tr>
                <tr><td>桃李（2018 吉林、2021 浙江）</td><td>学生</td></tr>
                <tr><td>南冠（2018 联考）</td><td>囚犯</td></tr>
                <tr><td>桑梓（2018 联考）</td><td>家乡</td></tr>
                <tr><td>青衿（2018 联考）</td><td>读书人</td></tr>
                <tr><td>浮屠（2018 联考）</td><td>佛塔</td></tr>
                <tr><td>丝竹（2018 吉林）</td><td>音乐</td></tr>
                <tr><td>花甲 / 耄耋 / 黄发（2018 辽宁）</td><td>老人</td></tr>
                <tr><td>手足（2017 山东）</td><td>兄弟</td></tr>
                <tr><td>鸿雁 / 笺札（2017 联考）</td><td>书信</td></tr>
                <tr><td>干戈 / 烽烟（2015 甘肃）</td><td>战争</td></tr>
                <tr><td>汗青（2015 甘肃）</td><td>史册</td></tr>
                <tr><td>白丁 / 布衣（2014 四川）</td><td>百姓</td></tr>
                <tr><td>总角 / 垂髫（2014 山西）</td><td>小孩</td></tr>
                <tr><td>巾帼 / 娥眉（2019 联考）</td><td>女子</td></tr>
                <tr><td>须眉（2019 联考）</td><td>男子</td></tr>
              </DataTable>
              <Callout variant="key">
                <b>规律：</b>动物 → 人（领头雁 / 拓荒牛）、植物 → 人（桃李 / 草根）、服饰器官 → 人（巾帼 / 须眉 / 蛾眉 / 布衣）、
                器物 → 抽象（干戈 → 战争、丝竹 → 音乐）、自然物 → 品格（牡丹 / 梅花 → 高洁）。
              </Callout>
            </Block>
    </>
  )
}
