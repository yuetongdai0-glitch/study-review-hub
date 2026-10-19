import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, PointList, SubPoint } from '@/components/content'

/**
 * 总览 · 学习路线（按这个顺序学，别跳）
 *
 * @returns 该节正文。
 */
export default function S1(): ReactElement {
  return (
    <>
      <div className="section-lead">
              资料分析考的是「<b>读懂量 → 定位公式 → 一次速算</b>」三步。所以本页顺序 = 考场顺序：
              先把手练快（速算），再把框架搭稳（ABRX），接着上两大神器（415 / 假设分配），
              最后按考频从高到低过八大考点，收尾防坑。
            </div>
      
            <Block>
              <BlockTitle>六步递进路线（每一步都为下一步铺路）</BlockTitle>
              <div className="tw">
                <DataTable>
                  <tr><th className="nowrap">步</th><th>学什么</th><th>为什么必须放在这一步</th><th className="nowrap">小节</th></tr>
                  <tr><td>1</td><td>加减乘除速算</td><td>后面每个公式最后都要落成「一次乘除」，速算是地基</td><td>一</td></tr>
                  <tr><td>2</td><td>百化分 + 误差修正</td><td>415 的前提是「把 R 认成一个分数」，认不出来就别谈 415</td><td>二</td></tr>
                  <tr><td>3</td><td>ABRX 四量关系</td><td>所有题的「总纲」：先认清 A / B / X / R 和 6 种已知组合</td><td>三</td></tr>
                  <tr><td>4</td><td>415 份数法 + 假设分配法</td><td>已知 B、R 求 A / X 的唯二正解，卷面上出现最多</td><td>四、五</td></tr>
                  <tr><td>5</td><td>八大高频考点</td><td>A / B / X / R → 比重 → 盐水 → 平均倍数 → 比较 → 特殊</td><td>六~十三</td></tr>
                  <tr><td>6</td><td>陷阱 + 速查表</td><td>前面都会了，最后防「会做但选错」</td><td>十四~十六</td></tr>
                </DataTable>
              </div>
              <Callout variant="key">
                <b>一句话总纲：</b>能秒杀绝不硬算，能估绝不精算，能比较绝不算出结果。
              </Callout>
            </Block>
      
            <Block>
              <BlockTitle>全页地图：五问定位法（总结课原表）</BlockTitle>
              <SubPoint>
                拿到任何一道题，先问自己两个问题：<b>①问的是哪个量（哪一行）？②问的是哪种变化（哪一列）？</b>
                行 × 列一交叉，公式自己就跳出来了。
              </SubPoint>
              <div className="tw">
                <DataTable>
                  <tr><th className="nowrap">行 \ 列</th><th className="nowrap">过去</th><th className="nowrap">现在</th><th className="nowrap">相对变化</th><th className="nowrap">绝对变化</th><th className="nowrap">混合</th></tr>
                  <tr><td className="nowrap"><b>量</b></td><td>基期 A</td><td>现期 B</td><td>增长率 R<br />间隔 R₁+R₂+R₁R₂</td><td>增量 X<br />X = X₁+X₂+…</td><td>混合增速<br />（盐水）</td></tr>
                  <tr><td className="nowrap"><b>比重</b></td><td>基期比重</td><td>现期比重</td><td>比重趋势<br />（定性）</td><td>比重差<br />（定量）</td><td>两部分混合比重</td></tr>
                  <tr><td className="nowrap"><b>平均数</b></td><td>基期平均数</td><td>现期平均数</td><td>比值增长率</td><td>比值差</td><td>混合平均数</td></tr>
                  <tr><td className="nowrap"><b>倍数</b></td><td>基期倍数</td><td>现期倍数</td><td>倍数 = 增长率 + 1</td><td>倍数 − 倍数</td><td>比值倍数 / 间隔倍数</td></tr>
                  <tr><td className="nowrap"><b>其他比值</b></td><td>基期比值</td><td>现期比值</td><td>比值增长率</td><td>比值差</td><td>比值混合</td></tr>
                  <tr><td className="nowrap"><b>乘积</b></td><td>a × b（基期）</td><td>a × b（现期）</td><td>乘积增长率<br />R₁+R₂+R₁R₂</td><td>ab − a′b′</td><td>—</td></tr>
                </DataTable>
              </div>
              <Callout variant="tip">
                <b>找不到量，想表达式！</b>写出「A = B ÷ C」→ 比值增长率；写出「A = B × C」→ 乘积增长率。
                看到「均 / 每 / 单位」想除法，看到「总 / 合计」想乘法。
              </Callout>
            </Block>
      
            <Block>
              <BlockTitle>时间不够时的取舍（考场策略）</BlockTitle>
              <PointList>
                <li><b>先做能秒的：</b>比重趋势、增量大小比较、比例法求基期——看一眼就能定答案，30 秒一道。</li>
                <li><b>再做要算的：</b>基期量、增长量、比重差——用 415 / 假设分配，45~60 秒一道。</li>
                <li><b>最后做综合分析题：</b>四个选项逐个验，优先用「单位 / 时间不对应」直接排除。</li>
                <li><b>一篇材料建议 6~7 分钟</b>，四篇控制在 25~28 分钟，剩下的时间留给其他模块。</li>
              </PointList>
            </Block>
    </>
  )
}
