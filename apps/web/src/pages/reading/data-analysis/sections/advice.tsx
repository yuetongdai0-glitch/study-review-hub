import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, PointList } from '@/components/content'

/**
 * 十六、备考训练建议
 *
 * @returns 该节正文。
 */
export default function S17(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>每日训练计划（30 分钟速算 + 一套真题）</BlockTitle>
              <PointList>
                <li><b>速算专项（30 分钟）：</b>除法拆分 × 5 题、假设分配 × 3 题、415 份数法 × 2 题，外加「三位数除法 / 分数小数互化」各 1 组。</li>
                <li><b>真题实战：</b>标注近 5 年真题的公式频次；限时训练每篇 6~7 分钟；综合分析题单独做专项。</li>
                <li><b>复盘：</b>错题按四色分类，第二天重做一遍。</li>
              </PointList>
            </Block>
            <Block>
              <BlockTitle>错题本四色分类法</BlockTitle>
              <div className="tw">
                <DataTable>
                  <tr><th className="nowrap">颜色</th><th className="nowrap">类型</th><th>对策</th></tr>
                  <tr><td className="nowrap">🔴 红色</td><td className="nowrap">计算错误</td><td>回去练速算，把 415 / 假设分配练到不用想</td></tr>
                  <tr><td className="nowrap">🟡 黄色</td><td className="nowrap">思维错误</td><td>重读对应考点，重点看「公式用错」还是「题型认错」</td></tr>
                  <tr><td className="nowrap">🔵 蓝色</td><td className="nowrap">知识盲区</td><td>补本页对应小节，抄一遍公式再练 3 题</td></tr>
                  <tr><td className="nowrap">🟢 绿色</td><td className="nowrap">心态问题</td><td>限时训练，把「看错 / 赶时间」这类问题暴露出来</td></tr>
                </DataTable>
              </div>
            </Block>
            <Block>
              <BlockTitle>四步检验防翻车（做完每题花 5 秒）</BlockTitle>
              <PointList>
                <li><b>一验量级：</b>结果在不在选项的合理区间内（基期比现期大还是小？）。</li>
                <li><b>二验尾数：</b>能用尾数法校验的，尾数对不上就是算错了。</li>
                <li><b>三验方向：</b>比重/均价该升还是该降？符号对不对？</li>
                <li><b>四验极端：</b>把结果代回原式（或用极端值试）看能不能还原。</li>
              </PointList>
            </Block>
            <Block>
              <BlockTitle>三句心法收尾（花生原话精神）</BlockTitle>
              <Callout variant="key">
                ① <b>保留原始数据 · 不刻意截位 · 让误差抵消。</b><br />
                ② <b>抓主要矛盾 · 大数分完 · 小数有误差不影响结果。</b><br />
                ③ <b>把方法练成本能 · 考场才能脱离「只会直除」。</b>
              </Callout>
              <Callout variant="tip">
                目标：把本页体系走通，资料分析正确率可稳定在 <b>90% 以上</b>。
                公式背熟 + 刻意练习 = 考场秒杀。
              </Callout>
            </Block>
    </>
  )
}
