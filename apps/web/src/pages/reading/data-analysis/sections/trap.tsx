import type { ReactElement } from 'react'
import { Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十四、常见陷阱与避坑（第十讲 14 个坑）
 *
 * @returns 该节正文。
 */
export default function S15(): ReactElement {
  return (
    <>
      <div className="section-lead">
              第十讲把「坑」分成两大类：<b>「比较 / 计数类」的 7 个坑</b>和<b>「审题表述类」的 7 个坑</b>。
              这一节按原顺序完整列出，另加时间 / 单位 / 逻辑三组常见陷阱。建议单独准备一个「坑本」。
            </div>
      
            <h4>1. 比较 / 计数类的 7 个坑</h4>
            <PointList>
              <li><b>① 注意起始、结束时间：</b>综合分析题每个选项都要在材料给定区间内判断，别把区间外的年份算进去。</li>
              <li><b>② 注意合计、总计行：</b>表格第一行若是「全国／合计」，数省份时必须先划掉，不能数进去。</li>
              <li><b>③ 注意首年：</b>首年没有上一年的量，增量要用 415 或 X = B×R÷(1+R) 求；后面各年才用 X = B − A。</li>
              <li><b>④ 注意单位：</b>「毫克／微克」（1 毫克 = 1000 微克）、「万吨／亿吨」、「人／万人」、「‰／%」——选项常在此处挖坑。</li>
              <li><b>⑤ 排序顺序坑：</b>做完之后再看一眼是从高到低还是从低到高。</li>
              <li><b>⑥ 图表列举不全：</b>文字说 11 个沿海省市、图表只列 8 个 → 漏掉的 3 个「一定符合题意」，可以当「母题」背下来；稻谷 + 小麦 + 玉米 ≠ 谷物总量，也说明还有未列举项。</li>
              <li><b>⑦ 时间不匹配：</b>材料只有 1～7 月，推不出全年。</li>
            </PointList>
            <Example>
              <div className="example-tag">📖 例题 1 · 计数类三连坑（合计行 / 排序 / 首年）</div>
              <ExampleBody>
                <ExampleQuestion>
                  某表列出各省份 2023 年快递业务量，第一行为「全国合计」，随后是 8 个省份（从高到低排列）。
                  另有材料给出 A 省 2017 年快递业务量 800 亿件、同比增长 12.5%。
                  判断：
                  ① 「业务量超过 300 亿件的省份有 6 个」；
                  ② 「按业务量从低到高排列，第 3 位是 C 省」；
                  ③ 「A 省 2017 年同比增量约 89 亿件」。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 先划掉「全国合计」行再数 → 数量会少 1 个（<b>坑②</b>）；<br />
                  ② 表格是「从高到低」，题目问「从低到高」→ 要倒着数（<b>坑⑤</b>）；<br />
                  ③ 2017 年是首年，没有 2016 年的量 → 只能用 415：12.5% = 1/8 → X = 800 ÷ 9 ≈ <b>89</b> 亿件（<b>坑③</b>）。<br />
                  <span className="correct">答案：三个坑分别对应「合计行 / 排序方向 / 首年增量」</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>2. 审题表述类的 7 个坑</h4>
            <PointList>
              <li><b>⑧ 环比与同比：</b>环比是和上一个相邻统计周期比（如 12 月比 11 月）；同比是和去年同一时期比。问「同比增速」时，一季度要和上一年一季度比，四季度各对各。</li>
              <li><b>⑨ 「是多少倍」与「多多少倍」：</b>「城镇约是乡村的 6.5 倍」→ 城镇比乡村多 6.5 − 1 = 5.5 倍。</li>
              <li><b>⑩ 比重问题的分母：</b>看清问的是「占谁的比重」，隔级比重尤其别搞错分母。</li>
              <li><b>⑪ 进出口主客体颠倒：</b>「欧盟、美国从我国进口」＝「我国对欧盟、美国出口」；另注意问的是出口「量」还是「额」。</li>
              <li><b>⑫ 累计与当期：</b>8 月累计 = 1～8 月，别当成「8 月单月」。</li>
              <li><b>⑬ 不要遗漏月均计算：</b>「1～8 月月均增量」要 ÷ 8；一个季度的「月均」要 ÷ 3；「四星级及以上」要把四星、五星都算上。</li>
              <li><b>⑭ 一二月合并统计：</b>材料常把 1、2 月合并公布，拆不开时用「两种情况」推理——平均分或不平均分，结论往往都指向同一选项。</li>
            </PointList>
            <Example>
              <div className="example-tag">📖 例题 2 · 审题表述三连坑（月均 / 累计 / 多几倍）</div>
              <ExampleBody>
                <ExampleQuestion>
                  材料：某市 2020 年 1～8 月快递业务量累计 24 亿件；8 月当月 3.5 亿件。
                  判断：① 「1～8 月月均业务量 3 亿件」；② 「8 月累计业务量 24 亿件，即 8 月单月业务量 24 亿件」；
                  ③ 「某市快递业务量约是另一市的 6.5 倍，即比另一市多 6.5 倍」。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 月均要 ÷ <b>8</b>（不是 ÷ 7）：24 ÷ 8 = <b>3</b> 亿件/月 ✓；<br />
                  ② 「8 月累计」就是 1～8 月合计，<b>不是</b> 8 月单月（<b>坑⑫</b>）——8 月单月是 3.5 亿件；<br />
                  ③ 「是 6.5 倍」→ 比它多 6.5 − 1 = <b>5.5 倍</b>（<b>坑⑨</b>）。<br />
                  <span className="correct">答案：① 对（÷8）　② 错（累计 ≠ 当期）　③ 错（多 5.5 倍）</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>3. 时间陷阱</h4>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">陷阱</th><th>说明</th></tr>
                <tr><td className="nowrap">时间不匹配</td><td>材料是「1-3 月」，选项问「全年」→ 直接排除</td></tr>
                <tr><td className="nowrap">隔年 vs 当年</td><td>问「2019 年比 2017 年」是隔年，要用间隔增长率</td></tr>
                <tr><td className="nowrap">同比 vs 环比</td><td>同比与去年同期比，环比与上一期比</td></tr>
                <tr><td className="nowrap">累计 vs 当期</td><td>「累计」含之前月份，「当期」只是本月</td></tr>
                <tr><td className="nowrap">年均增长 n 值</td><td>2018→2023，n = 5（年份差）；「十三五」基期往前推一年</td></tr>
                <tr><td className="nowrap">时间平均数</td><td>注意闰年 366 天、季度个数、大小月</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 3 · 时间不匹配 → 直接排除</div>
              <ExampleBody>
                <ExampleQuestion>材料给出「2023 年 1~3 月某省出口额 5000 亿元」。选项：「2023 年全年某省出口额约为 20000 亿元」。这个选项能选吗？</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 材料是 1~3 月（一个季度）的数据，选项说的是全年 → <b>时间不匹配</b>。<br />
                  更不能简单 5000 × 4 = 20000 估算，因为各季度体量并不均等。<br />
                  <span className="correct">答案：不能选，直接排除 ❌</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>4. 单位陷阱</h4>
            <Callout variant="warn">
              <b>常见单位坑：</b><br />
              • 「万吨公里」 vs 「吨公里」→ 差 1000 倍<br />
              • 「万人」 vs 「人」→ 差 10000 倍<br />
              • 「亿元」 vs 「万元」→ 差 10000 倍<br />
              • 「‰」（千分号）vs 「%」（百分号）→ 差 10 倍<br />
              • 「毫克」 vs 「微克」→ 差 1000 倍<br />
              • 注意图表标题与表格标题的单位是否一致
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 4 · 单位换算</div>
              <ExampleBody>
                <ExampleQuestion>
                  材料表格标题为「某省货运量（单位：万吨）」，数据为 38500。
                  选项 A：「该省货运量约为 3.85 亿吨」；选项 B：「该省货运量约为 3850 万吨」。哪个正确？
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 1 亿吨 = 10000 万吨 → 38500 万吨 = 38500 ÷ 10000 = <b>3.85 亿吨</b>。<br />
                  选项 A 正确；选项 B 少了一个 0。<br />
                  <span className="correct">答案：A. 3.85 亿吨</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>5. 逻辑陷阱</h4>
            <PointList>
              <li><b>百分点 ≠ 百分比：</b>百分点是两个百分数的<b>差</b>，百分比是<b>比值</b>。</li>
              <li><b>基期量别把现期当分母：</b>A = B ÷ (1+R)，不是 B ÷ R，也不是 X ÷ B。</li>
              <li><b>增速回落 ≠ 下降：</b>增速回落只代表「涨得慢了」，可能仍在增长。</li>
              <li><b>顺差 / 逆差：</b>出口 − 进口 = 顺差；进口 − 出口 = 逆差。</li>
              <li><b>是几倍 vs 多几倍：</b>「是 B 的 3 倍」= A = 3B；「比 B 多 3 倍」= A = 4B。</li>
              <li><b>超过：</b>「超过 B 的 2 倍」= A &gt; 2B（超过 = 大于，等于不算）。</li>
            </PointList>
            <Example>
              <div className="example-tag">📖 例题 5 · 百分点 vs 百分比</div>
              <ExampleBody>
                <ExampleQuestion>材料：「2023 年某省城镇化率为 65%，比上年提高 1.5 个百分点」。求 2022 年该省城镇化率，以及 2023 年城镇化率的增长率。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  「提高 1.5 个百分点」= 直接相减 → 2022 年城镇化率 = 65% − 1.5% = <b>63.5%</b>；<br />
                  增长率 = (65% − 63.5%) ÷ 63.5% = 1.5% ÷ 63.5% ≈ <b>2.36%</b>。<br />
                  <span className="correct">答案：2022 年 63.5%，增长率约 2.36%</span>
                  <div className="ex-note">「提高 1.5 个百分点」≠「提高 1.5%」——前者是绝对差值，后者是相对增长率，差了一个量级。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 6 · 增速回落 ≠ 下降</div>
              <ExampleBody>
                <ExampleQuestion>材料：「2023 年某市 GDP 增速 7.5%，比上年回落 1.2 个百分点」。判断选项 A「2023 年该市 GDP 下降了」。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 「回落」说的是<b>增速变小</b>，不是 GDP 本身下降。<br />
                  2023 年增速 7.5% &gt; 0 → GDP 仍在<b>增长</b>，只是涨得比 2022 年慢；2022 年增速 = 7.5% + 1.2% = 8.7%。<br />
                  <span className="correct">答案：A 错误，2023 年 GDP 仍在增长 ❌</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
