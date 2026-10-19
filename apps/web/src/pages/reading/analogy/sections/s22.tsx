import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 四 · 6 成语、诗句被拆分
 *
 * @returns 该节正文。
 */
export default function S24(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 优先看这两个考点</BlockTitle>
              <Callout variant="key"><b>① 因果关系　② 目的关系</b>——拆开后绝大多数落在两者之一。</Callout>
              <Callout variant="formula">
                <span className="formula">示例</span>　风吹：草低：见牛羊（因果）　人去：楼空（因果）　直挂：云帆：济沧海（目的）　刻舟：求剑（目的）
              </Callout>
            </Block>
            <Block>
              <BlockTitle>2. 近年的「因果清单」（背下来）</BlockTitle>
              <div className="pair">
                <span>水涨：船高</span><span>风吹：草动</span><span>水落：石出</span>
                <span>天寒：地冻</span><span>水滴：石穿</span><span>理屈：词穷</span>
                <span>有备：无患</span><span>人去：楼空</span><span>鸟尽：弓藏</span>
                <span>唇亡：齿寒</span>
              </div>
              <Callout variant="tip"><b>涉及自然现象的，多考因果关系</b>（水涨船高、风吹草动、天寒地冻…）；冒号前后两词<b>多为主谓结构</b>。</Callout>
            </Block>
            <Block>
              <BlockTitle>3. 近年的「目的清单」（背下来）</BlockTitle>
              <div className="pair">
                <span>守株：待兔</span><span>刻舟：求剑</span><span>削足：适履</span>
                <span>凿壁：偷光</span><span>缘木：求鱼</span><span>掩耳：盗铃</span>
                <span>拔苗：助长</span><span>格物：致知</span><span>杀鸡：取卵</span>
                <span>画饼：充饥</span>
              </div>
              <Callout variant="tip">
                <b>出现「欲、求、为」等词，多考目的关系</b>；出现<b>政府提倡的行为</b>也多考目的（低碳排放、轮作休耕、灾害预警）；<br />
                冒号前后两词<b>多为动词或动宾结构</b>。
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 拆分后的因果<span className="src">2024 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>风吹：草低：见牛羊</ExampleQuestion>
                <ExampleOptions><span>A. 浪打：船摇：靠舵手</span><span>B. 光照：叶肥：促生长</span><span>C. 游人：如织：显道窄</span><span>D. 雨淋：花落：闻余香</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>风吹 → 草低 → 见牛羊，是自然现象引出的连锁结果，属因果关系。<br />
                  D 雨淋 → 花落 → 闻余香，同样是自然现象 + 因果 → 一致；<br />
                  A「靠舵手」与前两步无关；B「光照：叶肥」是因果，但「促生长」语义重复且结构不齐；<br />
                  C「游人如织」是主谓结构、非因果。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 2 · 拆分后的目的（含夸夸刷）<span className="src">2023 广东（65%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>舍身：取义</ExampleQuestion>
                <ExampleOptions><span>A. 摩拳：擦掌</span><span>B. 含苞：欲放</span><span>C. 得陇：望蜀</span><span>D. 格物：致知</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>舍身是为了取义 → 目的关系，且「取」是目的提示词。<br />
                  D 格物致知：通过格物来获得知识 → 同样是目的关系（「致」表达到 / 求得）→ 一致；<br />
                  A 摩拳擦掌是并列近义；B 含苞欲放是顺承；C 得陇望蜀是递进（得到还想再得）。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
