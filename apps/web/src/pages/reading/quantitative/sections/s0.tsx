import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 零、速解四法（贯穿所有题型的方法）
 *
 * @returns 该节正文。
 */
export default function S2(): ReactElement {
  return (
    <>
      <Callout variant="key">
              数量关系快不快，看的是<b>有没有方法意识</b>。除"两大基石"（倍数特性、方程法）外，最通用的四把刀就是：<b>代入排除、赋值、比例与十字交叉、数字特性</b>。它们不属于某一个题型，而是<b>几乎每个题型都能用</b>——先把这四法练熟，再进后面的章节。
            </Callout>
            <Block>
              <BlockTitle>1. 代入排除法（把选项当已知条件）</BlockTitle>
              <PointList>
                <li><b>什么时候用：</b>① 多位数问题 ② 年龄问题 ③ 不定方程（未知数比方程多）④ <b>选项信息充分</b>（选项里已给出全部未知量的值）⑤ 正面列式特别麻烦的题。</li>
                <li><b>怎么代：</b>从"最好算"的选项开始。问"最大/最多"就从最大的选项开始代，问"最小/最少"就从最小的开始。</li>
                <li><b>代一半就够：</b>只要有一个条件被违反，立刻排除该选项、换下一个——不必把整个式子算完。</li>
              </PointList>
              <Callout variant="tip">数量关系里"没思路"的题，先看选项——很多题目的正确答案就藏在选项的数值特征里。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题1 · 代入排除（多位数）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>一个两位数，各位数字之和为 9；若把十位与个位的数字交换，所得新数比原数大 27。这个两位数是多少？</ExampleQuestion>
                <ExampleOptions>A.36　B.45　C.54　D.63</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>先用"新数比原数<b>大</b>"排除 —— 只有个位 &gt; 十位的数才满足：A、B 符合，C、D 会被算小<br />
                  再看差值：45 → 54 只大 9，36 → 63 大 <b>27</b> ✓（两数的数字之和都是 9）<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 赋值法（把"比例"变成"具体数"）</BlockTitle>
              <PointList>
                <li><b>什么时候用：</b>题目里<b>只给比例、分数、百分数、倍数</b>，或者问的本身就是比例/倍数关系（此时赋什么值都不影响结果）。</li>
                <li><b>工程总量</b> → 赋成各人单独完成时间的<b>最小公倍数</b>（最好算）。</li>
                <li><b>成本 / 原价</b> → 赋 <b>100</b>（百分数题最省事）。</li>
                <li><b>路程</b> → 赋成各速度的最小公倍数；只问"时间比"时也可赋路程为 <b>1</b>。</li>
                <li><b>只出现"某量为 1"</b> → 直接赋 1。</li>
              </PointList>
              <Callout variant="key"><b>什么时候「赋值」、什么时候「列方程」（高照原话，全题型通用）：</b><br />
                · <b>给比例，求比例 → 用赋值</b>（乘除连接的量赋具体值，加减连接的量设未知数）；<br />
                · <b>给具体，或求具体 → 列方程</b>。<br />
                拿不准就问自己一句：题干给的是「几比几 / 百分之几」，还是「多少元 / 多少米」？<b>给比就赋值，给数就列式</b>。</Callout>
              <Callout variant="warn">赋值的唯一原则：<b>不影响所求结果</b>。如果题目给了具体量、又要求具体量，就不能乱赋。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题2 · 赋值法（工程）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>一项工程，甲单独做需 12 天完成，乙单独做需 18 天完成。两人合作需要多少天完成？</ExampleQuestion>
                <ExampleOptions>A.7 天　B.7.2 天　C.7.5 天　D.8 天</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>赋工程总量 = lcm(12, 18) = <b>36</b><br />
                  甲的效率 = 36 ÷ 12 = 3，乙的效率 = 36 ÷ 18 = 2<br />
                  合作效率 = 5 → 36 ÷ 5 = <b>7.2 天</b><br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>3. 比例与十字交叉法（混合类问题的通用武器）</BlockTitle>
              <Callout variant="key">
                <b>原理：</b>两部分混合，混合值 c 一定<b>夹在</b>两个部分值 a、b 之间；两侧的<b>数量比</b>与"到 c 的<b>距离</b>"成<b>反比</b>。<br />
                <b>做法：</b>把 a 写上一行、b 写下一行，混合值 c 写在中间，然后<b>交叉相减</b>——得到的两个差，之比就是两边数量的<b>反比</b>。
              </Callout>
              <Callout variant="formula">
                <span className="formula">(a − c) ∶ (c − b) = m₂ ∶ m₁</span>（m₁ 是取 a 的那部分数量，m₂ 是取 b 的那部分数量）
              </Callout>
              <PointList>
                <li><b>适用：</b>溶液混合（浓度）、平均数混合（平均分）、增长率混合（总体增速）、价格混合（均价）、男女比例（平均年龄）……</li>
                <li><b>注意：</b>两边必须是<b>同一种量</b>（都是浓度、都是平均分），否则会算出荒唐的结果。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题3 · 十字交叉（平均分混合 · 2017 黑龙江）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>甲、乙两队举行智力抢答比赛，两队平均得分为 92 分，其中甲队平均得分为 88 分，乙队平均得分为 94 分，则甲、乙两队人数之和可能是（　　）。</ExampleQuestion>
                <ExampleOptions>A.20　B.21　C.23　D.25</ExampleOptions>
                <ExampleAnswer>
                    <b>解析：</b>十字交叉法不止用于浓度，凡是「<b>两部分混合成一个整体值</b>」的都能用 —— 这里整体平均 92 分，两部分是 88 分和 94 分。<br />把整体值写在中间，两侧相减取绝对值：<br />甲（88）与整体的距离 = 92 − 88 = <b>4</b>；乙（94）与整体的距离 = 94 − 92 = <b>2</b>；<br /><b>距离与数量成反比</b> → 甲 ∶ 乙 = 2 ∶ 4 = <b>1 ∶ 2</b>。<br />人数比 1 ∶ 2 → 总人数必是 <b>3 的倍数</b>。四个选项里只有 21 能被 3 整除 → 答案 21。<br /><span style={{ color: '#6b7280' }}>另一种验证：总人数 = 3k，且各队人数必须是整数 —— 「和是 3 的倍数」就是本题的秒杀口。</span>
                    <span className="correct">答案：B</span>
                  </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>4. 数字特性法（奇偶 / 倍数 / 尾数）</BlockTitle>
              <PointList>
                <li><b>奇偶性：</b>和、差同奇偶；两数之和为奇数 ⟺ 一奇一偶。常用于不定方程"必须取整数"的判定。</li>
                <li><b>倍数（整除）特性：</b>看到"平均分成 n 份""是 n 的倍数""甲 ∶ 乙 = m ∶ n"就想到整除。<br />
                  已互质的比例 a ∶ b → 总量必是 <b>(a + b)</b> 的倍数；"甲是乙的 3/5"→ 甲是 3 的倍数、乙是 5 的倍数。</li>
                <li><b>尾数特性：</b>选项<b>尾数各不相同</b>时，只算尾数就能锁定答案（加减乘都适用）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题4 · 数字特性（倍数筛选）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某班人数在 40 ~ 50 之间，若平均分成 5 组则多 2 人，且人数是 3 的倍数。该班有多少人？</ExampleQuestion>
                <ExampleOptions>A.42　B.45　C.48　D.49</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>先按"3 的倍数"筛：42 ✓、45 ✓、48 ✓（49 排除）<br />
                  再按"除以 5 余 2"筛：42 ＝ 5 × 8 + 2 ✓；45 整除 ✗；48 余 3 ✗<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
