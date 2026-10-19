import type { ReactElement } from 'react'
import { Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 一、加减乘除速算
 *
 * @returns 该节正文。
 */
export default function S2(): ReactElement {
  return (
    <>
      <div className="section-lead">
              资料分析里每一道题最后都要落成「<b>一次加减乘除</b>」。这一步不快，后面所有方法都白搭。
              本节的四则速算全部取自花生十三第一讲，按「加 → 减 → 乘 → 除」顺序排。
            </div>
      
            <h4>1. 加法 · 尾数法</h4>
            <SubPoint>
              <b>做法：</b>多个数字精确求和或求差时，从「尾数」入手，为保证精确与速度，<b>一般观察末两位</b>。
              <br /><b>前提：</b>题干与选项的数据都<b>非常精确</b>。选项写成「4.9 万 / 2.1 万」这种近似值时不能用尾数法，
              因为 4.9 万很可能实际是 4.94 万，尾数早被约掉了。选项末位都是 5 时，必须用<b>两位</b>尾数。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 1 · 尾数法</div>
              <ExampleBody>
                <ExampleQuestion>2014~2017 年各年末全国残疾人康复机构数量分别为 6914、7111、7858、8334 个。求这四年之和。</ExampleQuestion>
                <ExampleOptions><span>A. 29576</span><span>B. 30217</span><span>C. 33418</span><span>D. 36439</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 题干与选项都是精确值 → 只看末位：4+1+8+4 = 17，末位是 <b>7</b>，
                  四个选项里只有 B 的末位是 7。<br />
                  <span className="correct">答案：B. 30217</span>（精确求和 6914+7111+7858+8334 = 30217 ✓）
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 2 · 尾数法（两位尾数）｜2019 安徽特岗</div>
              <ExampleBody>
                <ExampleQuestion>
                  2011 年外国来华商标申请量排名前 10 的国家或地区申请量分别为：26060、19715、6318、5588、3796、3461、3243、2865、2124、2085 件。求这 10 个之和。
                </ExampleQuestion>
                <ExampleOptions><span>A. 75255</span><span>B. 75525</span><span>C. 76215</span><span>D. 79585</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 选项末位<b>全是 5</b> → 只看末一位不够，用两位尾数，两两相加：<br />
                  60+15 = 75　18+88 = 106　96+61 = 157　43+65 = 108　24+85 = 109<br />
                  五个结果取末两位：75、06、57、08、09 → 相加 75+06+57+08+09 = 155，末两位是 <b>55</b>。<br />
                  <span className="correct">答案：A. 75255</span>（精确值 75255 ✓）
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>2. 加法 · 高位叠加法</h4>
            <SubPoint>
              <b>做法：</b>和我们熟悉的列竖式顺序<b>正好相反</b>——从高位加起，错位书写（像下楼梯）。
              <br /><b>使用时机：</b>非精确求和，或<b>没有选项可以参考</b>时。抓住主要矛盾，随时可以停。
            </SubPoint>
            <figure className="fig">
              <svg viewBox="0 0 460 250" role="img" aria-label="高位叠加法示意：六个数从千位开始逐位相加，再组合成总和">
                <text x={20} y={26} fontSize={14} fontWeight="700" fill="#3a5fd9">高位叠加：从高位加起，错位书写</text>
                <text x={30} y={60} fontSize={15} fill="#1a1a2e" fontFamily="monospace">809</text>
                <text x={30} y={82} fontSize={15} fill="#1a1a2e" fontFamily="monospace">497</text>
                <text x={30} y={104} fontSize={15} fill="#1a1a2e" fontFamily="monospace">754</text>
                <text x={30} y={126} fontSize={15} fill="#1a1a2e" fontFamily="monospace">759</text>
                <text x={30} y={148} fontSize={15} fill="#1a1a2e" fontFamily="monospace">666</text>
                <text x={30} y={170} fontSize={15} fill="#1a1a2e" fontFamily="monospace">861</text>
                <line x1={26} y1={180} x2={120} y2={180} stroke="#4f7cff" strokeWidth={1.5} />
                <text x={150} y={60} fontSize={13.5} fill="#555">百位：8+4+7+7+6+8 = 40</text>
                <text x={150} y={84} fontSize={13.5} fill="#555">十位：0+9+5+5+6+6 = 31</text>
                <text x={150} y={108} fontSize={13.5} fill="#555">个位：9+7+4+9+6+1 = 36</text>
                <line x1={146} y1={120} x2={430} y2={120} stroke="#e0e8ff" strokeWidth={1} />
                <text x={150} y={146} fontSize={13.5} fill="#555">千位没有 → 只叠三层</text>
                <text x={150} y={176} fontSize={15} fontWeight="700" fill="#16a34a">0×1000 + 40×100 + 31×10 + 36</text>
                <text x={150} y={204} fontSize={15} fontWeight="700" fill="#16a34a">= 4000 + 310 + 36 = 4346</text>
                <text x={20} y={234} fontSize={12.5} fill="#999">每一次只做一位加法，心算量最小；算到哪一层都能停</text>
              </svg>
              <figcaption>图 1｜高位叠加法：从千位/百位开始逐位叠，最后按位权组合（例：4346）</figcaption>
            </figure>
            <Example>
              <div className="example-tag">📖 例题 3 · 高位叠加｜2025 湖北选调</div>
              <ExampleBody>
                <ExampleQuestion>
                  2023 年 11 月～2024 年 11 月某类资管产品月度备案数量（支）：809、497、754、759、666、861……问 2024 年上半年共备案多少支。
                </ExampleQuestion>
                <ExampleOptions><span>A. 不到 4400 支</span><span>B. 4400～4500 支</span><span>C. 4500～4600 支</span><span>D. 超过 4600 支</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 1~6 月 = 809+497+754+759+666+861，选项是区间不是精确数 → 用高位叠加：<br />
                  百位 8+4+7+7+6+8 = 40；十位 0+9+5+5+6+6 = 31；个位 9+7+4+9+6+1 = 36。<br />
                  合计 4000+310+36 = <b>4346</b> 支 → 落在「不到 4400 支」。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>3. 减法 · 分段法与基准值法</h4>
            <SubPoint>
              <b>分段法：</b>把三位/四位减法<b>分成两段</b>，尽量保证不用借位；实在要借位，就用<b>负数代替借位</b>。<br />
              <b>基准值法：</b>被减数与减数都靠近某个整数时，绕开整数算——
              <code>721 − 688 = (721 − 700) + (700 − 688) = 21 + 12 = 33</code>。<br />
              <b>实战用法（最常用）：</b>比较「增量是否超过某个数」时，<b>只看前三位</b>——
              前三位相减已大于目标值 → 一定超过；小于 → 一定不到；正好相等，再看后两位够不够减。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 4 · 分段法｜2023 国考</div>
              <ExampleBody>
                <ExampleQuestion>
                  2021 年 2～12 月各月末光纤用户数（万户）：6 月 47968、7 月 48416、8 月 48921、9 月 49643、10 月 50077、11 月 50466、12 月 50551。
                  问 2021 年下半年光纤用户数增量超过 500 万户的月份有几个。
                </ExampleQuestion>
                <ExampleOptions><span>A. 2</span><span>B. 3</span><span>C. 4</span><span>D. 5</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 只用前三位做减法，末两位判断是否够减：<br />
                  7 月−6 月 → 484−479 = 5，再看后两位 16−68 <b>不够减</b> → 不足 500；<br />
                  8 月−7 月 → 489−484 = 5，后两位 21−16 <b>够减</b> → 超过 500 ✓；<br />
                  9 月−8 月 → 496−489 = 7 &gt; 5 → 超过 500 ✓；10~12 月前三位差都不到 5 → 不足。<br />
                  <span className="correct">答案：A. 2 个（8 月、9 月）</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 5 · 基准值法 + 分段法</div>
              <ExampleBody>
                <ExampleQuestion>口算下列各式：① 743 − 268　② 1723 − 494　③ 622 − 478</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 分段：(74 − 26) 与 (3 − 8) → 48 与 −5 → 480 − 5 = <b>475</b>；<br />
                  ② 基准：1723 − 500 = 1223，再补回多减的 6 → 1223 + 6 = <b>1229</b>；<br />
                  ③ 基准：622 − 500 = 122，再补回 22 → 122 + 22 = <b>144</b>。<br />
                  <span className="correct">答案：475、1229、144</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>4. 乘法 · 小分互换法（变乘为除）</h4>
            <SubPoint>
              乘法里若某个乘数能近似化成<b>常见分数</b>，就把「多位数乘法」换成「简单除法」。
              另外：<b>一个数乘 5、25、125 = 除 2、4、8</b>。
            </SubPoint>
            <Callout variant="formula">
              <div className="formula">50% = 1/2　33.3% = 1/3　25% = 1/4　20% = 1/5　16.7% = 1/6</div>
              14.3% = 1/7　28.6% = 2/7　42.9% = 3/7　12.5% = 1/8　11.1% = 1/9　9.1% = 1/11
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 6 · 小分互换</div>
              <ExampleBody>
                <ExampleQuestion>口算：① 784 × 25%　② 632 × 12.5%　③ 727 × 16.7%　④ 981 × 33.3%　⑤ 20% × 455</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 全部换成除法：<br />
                  ① 784 × 1/4 = 784 ÷ 4 = <b>196</b>；② 632 × 1/8 = 632 ÷ 8 = <b>79</b>；<br />
                  ③ 727 × 1/6 = 727 ÷ 6 ≈ <b>121</b>；④ 981 × 1/3 = 981 ÷ 3 = <b>327</b>；<br />
                  ⑤ 1/5 × 455 = 455 ÷ 5 = <b>91</b>。<br />
                  <span className="correct">答案：196、79、121、327、91</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>5. 乘法 · 拆分法（包子法，巧用「1%」）</h4>
            <SubPoint>
              百分数能拆成两个简单数（50%、10%、5%、1%）时，拆开分别乘再相加。
              <b>「1%」就是一个包子</b>：任何数 ×1% 只要把小数点往前挪两位。
            </SubPoint>
            <Callout variant="formula">
              45% = 50% − 5%　55% = 50% + 5%　48% = 50% − 2%　15% = 10% + 5%　60% = 50% + 10%　95% = 1 − 5%　90% = 1 − 10%　103% = 100% + 3%
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 7 · 乘法拆分</div>
              <ExampleBody>
                <ExampleQuestion>计算：① 382 × 55%　② 936 × 45%　③ 1228 × 95%　④ 766 × 103%</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 382 × (50%+5%) = 191 + 19.1 ≈ <b>210</b>；<br />
                  ② 936 × (50%−5%) = 468 − 46.8 ≈ <b>421</b>；<br />
                  ③ 1228 × (1 − 5%) = 1228 − 61.4 ≈ <b>1167</b>；<br />
                  ④ 766 × (1 + 3%) = 766 + 23 = <b>789</b>。<br />
                  <span className="correct">答案：210、421、1167、789</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 8 · 乘法拆分（真题尺度）</div>
              <ExampleBody>
                <ExampleQuestion>62851 × 97.2% ＝ ？</ExampleQuestion>
                <ExampleOptions><span>A. 60671</span><span>B. 61091</span><span>C. 61692</span><span>D. 62052</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 先丢掉位数（只留三位有效数字），再拆：<br />
                  628 × (100% − 2.8%) ≈ 628 − 628 × 3% = 628 − 18.8 ≈ <b>610</b>（千元级）→ 61091。<br />
                  <span className="correct">答案：B. 61091</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>6. 乘法 · 放缩法</h4>
            <SubPoint>
              某个乘数能拆成「<b>整百 × (1 ± 10% 以内)</b>」时，先乘整百，再按百分比调整——
              一次就把大数乘法变成「乘整百 + 加一点点」。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 9 · 乘法放缩</div>
              <ExampleBody>
                <ExampleQuestion>计算：① 212 × 332　② 782 × 617　③ 568 × 330</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 212 × (300+32) = 212 × 300 × (1+10%) ≈ 63600 × 1.1 = <b>约 70000</b>（精确 70384）；<br />
                  ② 782 × (600+17) = 782 × 600 × (1+3%) ≈ 469200 × 1.03 ≈ <b>483300</b>（精确 482494）；<br />
                  ③ 568 × (300+30) = 568 × 300 × (1+10%) = 170400 × 1.1 ≈ <b>187400</b>（精确 187440）。<br />
                  <span className="correct">答案：约 7.0 万、48.3 万、18.7 万</span>
                  <div className="ex-note">放缩法只求量级对、前两三位对，选项差距大时足够用。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>7. 除法 · 拆分法</h4>
            <SubPoint>
              拆分法是<b>对直除的优化</b>：借助选项「猜」出答案，尤其适合分子位数 ≤ 分母位数的除法（比重、占比）。
              三类拆法各有触发条件：
            </SubPoint>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">分子所在的区间</th><th>拆法</th><th>例子</th></tr>
                <tr><td className="nowrap">分母的 50% 附近</td><td>先拆出 50%</td><td>250÷484 = (242+8)/484 = 50%+2% ≈ 52%</td></tr>
                <tr><td className="nowrap">分数约等于 1</td><td>先拆出 100%</td><td>450÷484 = (484−34)/484 = 100%−7% = 93%</td></tr>
                <tr><td className="nowrap">分子很小</td><td>拆 10% / 5% / 1%</td><td>50÷484 = (48+2)/484 = 10%+0.5% ≈ 10.5%</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 10 · 除法拆分（三类各一题）</div>
              <ExampleBody>
                <ExampleQuestion>口算：① 488÷912　② 261÷292　③ 41÷292</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 50% 附近：456/912 = 50%，余 32 → 32÷912 ≈ 3.5% → 50%+3.5% = <b>53.5%</b>；<br />
                  ② 接近 1：292−31 = 261 → 100% − 31/292 = 100% − 10.6% ≈ <b>89.4%</b>；<br />
                  ③ 分子很小：29.2/292 = 10%，余 11.8 → ≈ 4% → 10%+4% = <b>约 14%</b>。<br />
                  <span className="correct">答案：53.5%、89.4%、14%</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 11 · 除法拆分（真题尺度）</div>
              <ExampleBody>
                <ExampleQuestion>47598 ÷ 89894 ＝ ？</ExampleQuestion>
                <ExampleOptions><span>A. 54.9%</span><span>B. 56.5%</span><span>C. 52.9%</span><span>D. 51.2%</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 留三位有效数字：475 ÷ 898，分母在 50% 附近？不，分子接近分母一半多 → 先拆 50%：<br />
                  449/898 = 50%，余 26 → 26÷898 ≈ 2.9% → 合计 <b>52.9%</b>。<br />
                  <span className="correct">答案：C. 52.9%</span>（精确 52.94%）
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>8. 除法 · 放缩法（同进同舍）</h4>
            <SubPoint>
              <b>原理：</b>分子分母同时扩大或缩小<b>相同幅度</b>，分式值不变。
              <br /><b>适用范围：</b>① 分母接近整百；② 多个数乘除时，分子分母接近整数倍。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 12 · 除法放缩</div>
              <ExampleBody>
                <ExampleQuestion>口算：① 858÷981　② 356÷986　③ 850÷1031</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 把分母凑成 1000，分子同增/同减：<br />
                  ① (858+17) / (981+19) = 875/1000 = <b>87.5%</b>；<br />
                  ② (356+5) / (986+14) = 361/1000 = <b>36.1%</b>；<br />
                  ③ (850−25) / (1031−31) = 825/1000 = <b>82.5%</b>。<br />
                  <span className="correct">答案：87.5%、36.1%、82.5%</span>
                  <div className="ex-note">关键：分母要凑整百（尽量是偶数），分子要按<b>同样的比例</b>进出。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>9. 加法 · 削峰填谷（相近数求和）</h4>
            <SubPoint>
              几个数都很接近时，先取一个<b>基准值</b>，再单独算「偏离总和」。若这些数本身构成等差数列，直接套等差数列求和更快。
            </SubPoint>
            <Example>
              <div className="example-tag">📖 例题 13 · 削峰填谷</div>
              <ExampleBody>
                <ExampleQuestion>求 2015～2019 年某市快递业务量之和：29.17、30.99、34.11、37.02、39.85（亿件）。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 取基准 30：偏离 5 项为 −0.83、+0.99、+4.11、+7.02、+9.85，偏离和 = 21.14。<br />
                  合计 = 30 × 5 + 21.14 = 150 + 21.14 = <b>171.14</b> 亿件。<br />
                  <span className="correct">答案：约 171 亿件</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>10. 速算总口诀与「除法分类」</h4>
            <Callout variant="key">
              <b>四则速算对应：</b>加法 → 尾数法 / 高位叠加；减法 → 分段法 / 基准值法；
              乘法 → 小分互换 / 拆分 / 放缩；除法 → 拆分 / 放缩。
            </Callout>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">遇到什么</th><th>用什么</th><th>说明</th></tr>
                <tr><td className="nowrap">求 A、X（基期 / 增量）</td><td>415 修正 · 假设分配</td><td>R 靠近某个分数走 415；R 很小或很整走假设分配</td></tr>
                <tr><td className="nowrap">比重（部分小 ÷ 整体大）</td><td>拆分（50% / 100% 起步）</td><td>分子分母可拆成「一大杯 + 一小勺」</td></tr>
                <tr><td className="nowrap">比重（要靠范围夹）</td><td>放缩（同进同舍）</td><td>分子往小看、分母往大看（或反之），夹出真值区间</td></tr>
                <tr><td className="nowrap">平均数、倍数</td><td>直接直除</td><td>分子位数常大于分母，拆不动就直接除</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 14 · 组合技：先用放缩夹范围</div>
              <ExampleBody>
                <ExampleQuestion>4860 ÷ 12300 约为多少？</ExampleQuestion>
                <ExampleOptions><span>A. 32.5%</span><span>B. 39.5%</span><span>C. 46.2%</span><span>D. 52.8%</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解</b> 上下各取一个「小看」和一个「大看」，夹出区间：<br />
                  小分子 ÷ 大分母：4800 ÷ 12400 ≈ 38.7%；大分子 ÷ 小分母：4900 ÷ 12200 ≈ 40.2%。<br />
                  真值必在 38.7%～40.2% 之间 → 只有 39.5% 符合。<br />
                  <span className="correct">答案：B. 39.5%</span>（精确 39.51%）
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
