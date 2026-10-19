import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 三 · 3 加工关系
 *
 * @returns 该节正文。
 */
export default function S13(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义与判断标准</BlockTitle>
              <Callout variant="key"><b>判断标准：</b>原材料与成品的关系 —— <b>原材料本身被加工成了成品</b>。</Callout>
              <Callout variant="formula"><span className="formula">示例</span>　树木：纸张　布：衣服　粮食：酒　面团：馒头</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 原材料与成品<span className="src">2021 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>布：衣服</ExampleQuestion>
                <ExampleOptions><span>A. 牛奶：酸奶</span><span>B. 粮食：酒</span><span>C. 木材：餐桌</span><span>D. 朱古力：巧克力</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>布经过剪裁做成衣服，属于<b>物理变化</b>（没有生成新物质）。<br />
                  C 木材经过加工做成餐桌，同样是物理变化 → 一致；<br />
                  A 牛奶变酸奶、B 粮食酿酒都要经过发酵，是<b>化学变化</b>；D 朱古力就是巧克力（全同）。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 二级辨析 ①：物理变化 / 化学变化</BlockTitle>
              <Callout variant="formula">
                <span className="formula">物理变化（无新物质生成）</span>　雕刻、研磨、组装、拆解、剪裁、织造<br />
                <span className="formula">化学变化（有新物质生成）</span>　燃烧、发酵、酿造、氧化、冶炼、生锈
              </Callout>
            </Block>
            <Block>
              <BlockTitle>3. 二级辨析 ②：是否为必要原材料</BlockTitle>
              <SubPoint>没有它能不能做出成品。例如面团是馒头的必要原材料、棉纱是棉布的必要原材料。</SubPoint>
            </Block>
            <Block>
              <BlockTitle>4. 二级辨析 ③：是否可以为唯一原材料</BlockTitle>
              <SubPoint>成品可以只用这一种材料做，还是<b>左右两种材料都是做它的原料之一</b>。</SubPoint>
              <Callout variant="formula"><span className="formula">示例</span>　塑料：盘子：陶瓷　皮革：鞋子：布料 → 左右两者都是中间成品的原材料之一</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 2 · 都不是唯一原材料<span className="src">2024 四川</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>塑料：盘子：陶瓷</ExampleQuestion>
                <ExampleOptions><span>A. 面粉：馅饼：肉馅</span><span>B. 皮革：鞋子：布料</span><span>C. 纸张：证书：印章</span><span>D. 简答：试题：论述</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>塑料和陶瓷都能做盘子，<b>两者是同一成品的可选原材料</b>。<br />
                  B 皮革和布料都能做鞋子 → 一致；<br />
                  A 面粉是饼皮原料、肉馅是馅料（两者不是同一成品的备选原料）；<br />
                  C 印章不是证书的原料；D 三者是并列的题型。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 3 · 两种材料造同一个成品<span className="src">2025 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>石料：木材：印章</ExampleQuestion>
                <ExampleOptions><span>A. 毛笔：墨水：书法</span><span>B. 湘绣：蜀绣：刺绣</span><span>C. 宣纸：年画：国画</span><span>D. 搪瓷：塑料：脸盆</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>石料和木材都可以用来刻制印章 → 中间是成品、左右是可选原材料。<br />
                  D 搪瓷和塑料都可以用来制作脸盆 → 一致；<br />
                  A 毛笔与墨水是工具、书法是成品；B 湘绣、蜀绣都是刺绣的一种（种属）；            C 宣纸是国画的材料，年画不是。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 4 · 脱水晒干型加工<span className="src">2025 江苏</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>柿子：柿饼</ExampleQuestion>
                <ExampleOptions><span>A. 土豆：土豆泥</span><span>B. 花生：花生糖</span><span>C. 椰子：椰子汁</span><span>D. 葡萄：葡萄干</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>柿子经<b>晾晒脱水</b>制成柿饼，是形态与水分的变化（物理变化），成品仍保留原物主体。<br />
                  D 葡萄经晾晒（或烘干）制成葡萄干 → 完全一致；<br />
                  A 土豆泥是捣碎、C 椰子汁是榨取，都不是「脱水成干」；B 花生糖是加入糖等做成的新制品（配方加工）。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
