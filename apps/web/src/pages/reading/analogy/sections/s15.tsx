import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 三 · 7 位置关系
 *
 * @returns 该节正文。
 */
export default function S17(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义与判断标准</BlockTitle>
              <Callout variant="key"><b>判断标准：</b>题干能体现<b>位置信息</b>（在哪、朝向哪、在什么里）。</Callout>
              <Callout variant="formula">
                <span className="formula">示例</span>　鱼：海洋　老鹰：天空　首饰：首饰盒　胸针：衣服　碗：桌子　领头羊：羊群
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 内外层层嵌套<span className="src">2024 湖北选调</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>药片：药盒：药箱</ExampleQuestion>
                <ExampleOptions><span>A. 冰棒：保鲜盒：冰箱</span><span>B. 文具：文具盒：书包</span><span>C. 衣服：挂衣架：衣柜</span><span>D. 信息：计算机：网络</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>药片装进药盒、药盒再放进药箱 → <b>由小到大的收纳容器层层嵌套</b>，且都是随身 / 家用收纳器具。<br />
                  B 文具放进文具盒、文具盒再放进书包 → 结构完全一致；<br />
                  A 保鲜盒与冰箱都是冷藏类器具，但「冰箱」是家电而非收纳器具；<br />
                  C 挂衣架不是容器（衣服只是挂着）；D 三者不是层层收纳关系。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 二级辨析 ①：动 / 静</BlockTitle>
              <SubPoint>老鹰：天空（在飞 → <b>动</b>）　老鹰：树枝（停着 → <b>静</b>）</SubPoint>
            </Block>
            <Block>
              <BlockTitle>3. 二级辨析 ②：具体位置（内外、上下、首尾）</BlockTitle>
              <Callout variant="formula">
                <span className="formula">内外</span>　药片：药盒：药箱　文具：文具盒：书包<br />
                <span className="formula">上下</span>　衣服：晾衣架　帆船：海面<br />
                <span className="formula">首尾</span>　霜降：秋季（秋季最后一个节气）　大暑：夏季（夏季最后一个节气）　立春：春季（春季第一个节气）
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 2 · 首尾位置（节气）<span className="src">2023 联考（55%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>霜降：秋季</ExampleQuestion>
                <ExampleOptions><span>A. 雨水：春季</span><span>B. 大暑：夏季</span><span>C. 清明：秋季</span><span>D. 冬至：冬季</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>霜降是秋季的<b>最后一个</b>节气（位在季末）。<br />
                  B 大暑是夏季的<b>最后一个</b>节气 → 位置一致；<br />
                  A 雨水是春季的第 2 个节气（不是季末）；C 清明属春季，不属秋季；<br />
                  D 冬至是冬季第 4 个节气，冬季最后一个是大寒。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>4. 二级辨析 ③：是否接触</BlockTitle>
              <SubPoint>台历：桌子（放在桌面上 → <b>接触</b>）　台历：客厅（只在客厅里 → <b>不接触</b>）</SubPoint>
            </Block>
            <Block>
              <BlockTitle>5. 二级辨析 ④：是否为唯一位置</BlockTitle>
              <Callout variant="formula">
                <span className="formula">位置唯一</span>　质证：法庭　监考：考场（只能在这里发生）<br />
                <span className="formula">位置不唯一</span>　缴费：窗口（可现在也能网上缴）　采访：现场
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 3 · 唯一位置<span className="src">2024 国考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>质证：法庭</ExampleQuestion>
                <ExampleOptions><span>A. 缴费：窗口</span><span>B. 监狱：拘役</span><span>C. 监考：考场</span><span>D. 采访：现场</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>质证只能在法庭上进行 → 位置<b>唯一</b>。<br />
                  C 监考只能在考场进行 → 位置唯一，一致；<br />
                  A 缴费现在还能在网上办理（位置不唯一）；B 语序颠倒（应是「拘役：监狱」）；<br />
                  D 采访可以在任何现场进行（不唯一）。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 4 · 项目 + 装备 + 场地<span className="src">2024 事业单位联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>高尔夫：高尔夫球杆：高尔夫球场</ExampleQuestion>
                <ExampleOptions><span>A. 马术：马鞍：马厩</span><span>B. 瑜伽：瑜伽服：瑜伽馆</span><span>C. 滑冰：冰刀鞋：滑冰场</span><span>D. 斗牛：斗牛士：斗牛场</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>高尔夫球杆是打球必需的<b>装备</b>、高尔夫球场是专属<b>场地</b>，三者词根也统一。<br />
                  C 冰刀鞋是滑冰必需的装备，滑冰场是滑冰的专属场地 → 一致；<br />
                  A 马厩是养马的地方，不是马术的场地（马术场地是马场）；<br />
                  B 瑜伽服不是练瑜伽的必需装备（穿普通衣服也能练）；D 斗牛士是<b>人</b>而不是装备。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
