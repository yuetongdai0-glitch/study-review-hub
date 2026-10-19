import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 四 · 1 近反义关系
 *
 * @returns 该节正文。
 */
export default function S19(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 基础考点</BlockTitle>
              <Callout variant="key"><b>基础考点：</b>近义词、反义词。</Callout>
              <Callout variant="formula">
                <span className="formula">近义</span>　天荒地老：海枯石烂　不由自主：情不自禁　近水楼台：向阳花木<br />
                <span className="formula">反义</span>　寥寥无几：数不胜数　打破砂锅问到底：不求甚解
              </Callout>
              <Callout variant="tip">近反义题<b>几乎一定要走二级辨析</b>，四个选项往往都「沾边」。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 近义<span className="src">2025 全国事业单位联考（54%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>不由自主：情不自禁</ExampleQuestion>
                <ExampleOptions><span>A. 别有洞天：峰回路转</span><span>B. 近水楼台：向阳花木</span><span>C. 瓜田李下：指鹿为马</span><span>D. 徒劳无功：水到渠成</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>不由自主与情不自禁都是「控制不住自己」→ 近义。<br />
                  B 近水楼台（因地利先得好处）与向阳花木（因光照好而先发育）都比喻「因占有便利条件而先获益」→ 近义，一致；<br />
                  A 别有洞天（境界奇特）与峰回路转（路径曲折）不同义；C 瓜田李下（避嫌）与指鹿为马（混淆是非）不同义；<br />
                  D 徒劳无功与「水到渠成」意思相反。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 二级辨析 ①：感情色彩（褒 / 贬 / 中）</BlockTitle>
              <SubPoint>近义也要看<b>色彩是否一致</b>；不一样时，「褒贬相反的两个近义词」往往是正确答案。</SubPoint>
              <Callout variant="formula"><span className="formula">示例</span>　成果：恶果：结果（褒 / 贬 / 中）</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 2 · 感情色彩相反<span className="src">2025 国考（60%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>殚精竭虑：费尽心机</ExampleQuestion>
                <ExampleOptions><span>A. 狐假虎威：虚张声势</span><span>B. 舍生忘死：死里逃生</span><span>C. 侃侃而谈：喋喋不休</span><span>D. 光怪陆离：五光十色</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>殚精竭虑是<b>褒义</b>（用尽心思做正事），费尽心机是<b>贬义</b>（费尽心思算计）→ 近义但色彩相反。<br />
                  C 侃侃而谈（褒：从容不迫地谈）与喋喋不休（贬：唠叨不停）也是近义但色彩相反 → 一致；<br />
                  A 狐假虎威与虚张声势都是贬义；B 两者不是近义；D 光怪陆离与五光十色色彩接近。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 3 · 同为贬义<span className="src">2025 天津事业单位（56%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>围湖造田：饮鸩止渴</ExampleQuestion>
                <ExampleOptions><span>A. 卧薪尝胆：学以致用</span><span>B. 忍辱偷生：削足适履</span><span>C. 兢兢业业：刻苦奋进</span><span>D. 山穷水尽：柳暗花明</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>围湖造田（为眼前利益破坏长远）和饮鸩止渴（用有害办法应急）都是<b>贬义</b>，且都是「动宾 + 动宾」结构。<br />
                  B 忍辱偷生与削足适履同为贬义，结构也一致 → 一致；<br />
                  A、C 都是褒义；D 山穷水尽（贬 / 困境）与柳暗花明（褒 / 转机）色彩相反。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>3. 二级辨析 ②：语义轻重</BlockTitle>
              <SubPoint>意思相近，但<b>程度有轻重</b>。</SubPoint>
              <Callout variant="formula"><span className="formula">示例</span>　恪守：遵守（恪守更重）　机密：绝密　希望：渴望　失望：绝望</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 4 · 语义轻重<span className="src">2021 广东</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>恳求：要求</ExampleQuestion>
                <ExampleOptions><span>A. 复杂：嘈杂</span><span>B. 恪守：遵守</span><span>C. 动机：动力</span><span>D. 妥协：协调</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>恳求与要求意思相近，但<b>恳求的程度更重</b>（更恳切、更迫切）。<br />
                  B 恪守与遵守也是近义，恪守的程度更重（严格遵守、坚守）→ 一致；<br />
                  A、C 不是近义；D 妥协与协调语境不同、也不是程度轻重关系。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>4. 二级辨析 ③：描述对象是否一致</BlockTitle>
              <SubPoint>两个词的意思都「对」，但<b>说的不是同一类对象</b>（男 / 女、人或物、内或外）。</SubPoint>
              <Callout variant="formula"><span className="formula">示例</span>　国色天香（形容女子）：玉树临风（形容男子）→ 描述对象<b>不一致</b>，正是考点</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 5 · 描述对象（括号式）<span className="src">2022 国考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>国色天香　对于　（　　）　相当于　（　　）　对于　玉树临风</ExampleQuestion>
                <ExampleOptions><span>A. 面如冠玉　螓首蛾眉</span><span>B. 倾国倾城　明眸皓齿</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>国色天香形容<b>女子</b>之美，玉树临风形容<b>男子</b>之美。<br />
                  代入 A：「国色天香（女子）→ 面如冠玉（男子）」与「螓首蛾眉（女子）→ 玉树临风（男子）」都是「女子 → 男子」，关系对称；<br />
                  代入 B：国色天香与倾国倾城都形容女子（同义），而后半段「明眸皓齿（多形容女子）→ 玉树临风（男子）」关系不对称。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>5. 二级辨析 ④：词性、范围大小</BlockTitle>
              <SubPoint>
                词性是否一致（动词对动词、名词对名词）；<br />
                范围大小（「战争」＞「战役」）。
              </SubPoint>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 6 · 完整同义<span className="src">2022 联考（48%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>化险为夷：转危为安</ExampleQuestion>
                <ExampleOptions><span>A. 异曲同工：深入浅出</span><span>B. 承前启后：继往开来</span><span>C. 除旧布新：空前绝后</span><span>D. 畏首畏尾：瞻前顾后</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>化险为夷与转危为安是<b>可以互换的同义成语</b>，且内部结构都是「动宾 + 动宾」（险 / 夷、危 / 安互为反义）。<br />
                  B 承前启后与继往开来也可互换（前 / 后、往 / 来互为反义）→ 一致；<br />
                  A 异曲同工与深入浅出含义完全不同；C 除旧布新与空前绝后不同义；<br />
                  D 畏首畏尾（纯粹贬义）与瞻前顾后（还含「考虑周密」的中性义）语义并不完全重合。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 7 · 拆字后的反义<span className="src">2025 内蒙</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>是古：非今</ExampleQuestion>
                <ExampleOptions><span>A. 品头：论足</span><span>B. 挑肥：拣瘦</span><span>C. 拾遗：补缺</span><span>D. 抓大：放小</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「是古非今」= 肯定古代、否定现代，拆开后「是 / 非」相反、「古 / 今」相反 → 内部反义。<br />
                  D「抓大放小」中「抓 / 放」相反、「大 / 小」相反 → 一致；<br />
                  A 品头论足、B 挑肥拣瘦、C 拾遗补缺内部都是近义。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 8 · 反义（括号式）<span className="src">2025 山东事业单位</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>打破砂锅问到底　对于　（　　）　相当于　（　　）　对于　拐弯抹角</ExampleQuestion>
                <ExampleOptions><span>A. 分崩离析　众人拾柴火焰高</span><span>B. 善罢甘休　不到黄河不死心</span><span>C. 每况愈下　芝麻开花节节高</span><span>D. 不求甚解　打开天窗说亮话</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>前空要与「打破砂锅问到底」（追根究底）构成反义，后空要与「拐弯抹角」（不直说）构成反义。<br />
                  D「不求甚解」（不深究）与「打破砂锅问到底」反义；「打开天窗说亮话」（直说）与「拐弯抹角」反义 → 前后都成立；<br />
                  A、B、C 三组代入后都无法同时构成反义。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
