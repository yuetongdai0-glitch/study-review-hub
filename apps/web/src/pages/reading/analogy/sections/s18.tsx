import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 四 · 2 结合逻辑关系考查
 *
 * @returns 该节正文。
 */
export default function S20(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 四种叠加（词语之间，先按逻辑关系判）</BlockTitle>
              <Callout variant="formula">
                <span className="formula">① 因果</span>　言之无文：行之不远　一叶障目：不见泰山　其身不正：虽令不从<br />
                <span className="formula">② 目的</span>　静以修身：俭以养德　藏诸名山：传之其人　嘤其鸣矣：求其友声<br />
                <span className="formula">③ 条件</span>　不经一事：不长一智<br />
                <span className="formula">④ 顺承</span>　先礼后兵：先斩后奏
              </Callout>
              <Callout variant="tip">古文中出现「<b>以、求、欲、为</b>」优先考虑<b>目的关系</b>：缘木求鱼、欲穷千里目：更上一层楼、为唤春来争艳朵：甘将香化育花泥。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 因果关系<span className="src">2025 联考（48%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>言之无文：行之不远</ExampleQuestion>
                <ExampleOptions><span>A. 一叶障目：不见泰山</span><span>B. 宁为玉碎：不为瓦全</span><span>C. 藏诸名山：传之其人</span><span>D. 取之不尽：用之不竭</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>言之无文（语言没有文采）导致行之不远（流传不广）→ 因果。<br />
                  A 一叶障目（被叶子挡住）导致不见泰山 → 因果，一致；<br />
                  B 是选择关系；C 藏诸名山是为了传给后人（目的）；D 是并列。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 2 · 目的关系（含「以」）<span className="src">2025 国考（37%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>嘤其鸣矣：求其友声</ExampleQuestion>
                <ExampleOptions><span>A. 遏其生气：以求重价</span><span>B. 求之其本：经旬必得</span><span>C. 道不拾遗：夜不闭户</span><span>D. 避其锐气：击其惰归</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>鸟嘤嘤鸣叫，是为了寻求伙伴 → 目的关系（「求」字是关键提示）。<br />
                  A 遏其生气（阻碍梅花的生机）是<b>为了</b>求得高价（「以」表目的）→ 一致；<br />
                  B 是条件 / 因果；C 是并列（治安好的两种表现）；D 是先避后击的顺承。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 3 · 三个成语都是因果<span className="src">2023 陕西事业单位（57%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>水滴石穿：唇亡齿寒：人去楼空</ExampleQuestion>
                <ExampleOptions><span>A. 凿壁偷光：杀鸡取卵：刻舟求剑</span><span>B. 狼心狗肺：虎背熊腰：金枝玉叶</span><span>C. 得陇望蜀：返老还童：按部就班</span><span>D. 源清流清：春华秋实：物腐虫生</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>三个成语内部都是「原因 → 结果」：水滴→石穿、唇亡→齿寒、人去→楼空，且都是自然 / 生活现象。<br />
                  D 源清→流清、春华→秋实、物腐→虫生，同为因果且同为自然现象 → 一致；<br />
                  A 三个都是目的关系（凿壁偷光、杀鸡取卵、刻舟求剑）；<br />
                  B 三个都是比喻式并列；C 混合了递进、并列等关系。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
