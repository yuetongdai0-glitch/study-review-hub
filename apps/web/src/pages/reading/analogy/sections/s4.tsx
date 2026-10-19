import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 二 · 4 交叉关系
 *
 * @returns 该节正文。
 */
export default function S6(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义与判断标准（金标准）</BlockTitle>
              <Callout variant="key"><b>判断标准：</b>两个概念<b>有交集</b>——画成两个<b>相交的圆圈</b>，既有「既是 A 又是 B」的，也有「是 A 不是 B」的。</Callout>
              <Callout variant="formula">
                <span className="formula">示例</span>　布鞋：童鞋（既有布做的童鞋，也有非布的童鞋）　男性：护士：男护士
              </Callout>
              <Callout variant="warn"><b>难点在识别。</b>交叉关系不会直接告诉你，要靠下面的三条思路去认。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 交叉关系<span className="src">2025 浙江</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>铁皮桶：油桶</ExampleQuestion>
                <ExampleOptions><span>A. 汤勺：漏勺</span><span>B. 金饰：手镯</span><span>C. 党费：工资</span><span>D. 章鱼：鱿鱼</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「铁皮桶」是按<b>材质</b>说、「油桶」是按<b>用途</b>说，二者<b>尾缀相同（都是「桶」）、从不同角度描述</b> → 交叉（有铁皮的油桶，也有塑料的油桶）。<br />
                  A「汤勺」按用途（盛汤）、「漏勺」按结构（有漏孔），尾缀相同、角度不同 → 交叉，一致；<br />
                  B「金饰」与「手镯」也有交集，但尾缀不同，不符合题干的识别特征；<br />
                  D 章鱼与鱿鱼是并列的不同物种（全异）。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 初步识别思路（三条）</BlockTitle>
              <PointList>
                <li><b>① 尾缀相同，从不同角度描述</b>：酒杯：玻璃杯（功能 / 材质）、素菜：热菜、童鞋：布鞋、铁皮桶：油桶</li>
                <li><b>② 人的不同身份</b>：女性：作家、编剧：博士、专家：教授：博士、学生：顾客</li>
                <li><b>③ 两个概念词，又不是前面几种关系</b>：瓷器：茶杯、果汁：冷饮、金饰：手镯、蛋糕：礼物</li>
              </PointList>
              <Callout variant="tip"><b>时间够就验、不够就凭思路定：</b>前两种大概率就是交叉关系，有时间验证更稳妥、没时间可以不验；<b>第三种必须验证</b>。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 2 · 三个概念两两交叉<span className="src">2023 河北事业单位</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>上市企业：大型企业：民营企业</ExampleQuestion>
                <ExampleOptions><span>A. 专家：教授：博士</span><span>B. 上旬：中旬：下旬</span><span>C. 足球：篮球：排球</span><span>D. 海鱼：淡水鱼：海鲜</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「上市」「大型」「民营」是三个<b>不同的划分角度</b>，三个概念两两都能交叉（有上市的大型民营企业）。<br />
                  A 专家、教授、博士也是三个不同角度：有专家是教授，教授多半是博士 → 两两交叉，一致；<br />
                  B 上中下旬互相排斥（全异）；C 三种球类互相排斥（全异）；D 海鱼与淡水鱼互相排斥（全异）。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 3 · 三个词「两同一异」<span className="src">2024 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>陶瓷杯：玻璃杯：咖啡杯</ExampleQuestion>
                <ExampleOptions><span>A. 摇篮曲：催眠曲：钢琴曲</span><span>B. 柳叶剑：桃木剑：长柄剑</span><span>C. 牡丹园：芍药园：百花园</span><span>D. 羊皮鞋：棉布鞋：儿童鞋</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「陶瓷杯」「玻璃杯」都是按<b>材质</b>说，「咖啡杯」是按<b>用途</b>说 → 尾缀相同、前两个同一维度、第三个换维度。<br />
                  D「羊皮鞋」「棉布鞋」都按材质，「儿童鞋」按使用对象 → 与题干的「两同一异」完全对应；<br />
                  A 三个词分别按场景、功能、演奏形式分，维度各不相同；<br />
                  B「柳叶剑」「长柄剑」都按外形、中间夹一个按材质，顺序不符；C 是种植内容 + 数量特征。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 4 · 尾缀相同的两角度交叉<span className="src">2022 事业单位联考（38%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>民营企业：制造企业</ExampleQuestion>
                <ExampleOptions><span>A. 原生灾害：次生灾害</span><span>B. 遗嘱继承：法定继承</span><span>C. 三元函数：二次函数</span><span>D. 雕版印刷：非物质文化遗产</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「民营企业」按<b>所有制</b>分、「制造企业」按<b>行业</b>分，尾缀都是「企业」，二者有交集 → 交叉。<br />
                  C「三元函数」按变量个数分、「二次函数」按次数分，尾缀都是「函数」，也有交集（如 xyz² 之类）→ 一致；<br />
                  A 原生灾害与次生灾害互不包含（全异）；B 遗嘱继承与法定继承只有两种情况（矛盾全异）；<br />
                  D 尾缀不同，不符合题干的识别特征。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
