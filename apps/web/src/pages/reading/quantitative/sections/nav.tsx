import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, PointList } from '@/components/content'

/**
 * 两大基石 + 通用四法 + 十八类题型
 *
 * @returns 该节正文。
 */
export default function S1(): ReactElement {
  return (
    <>
      <Callout variant="key">
              <b>核心思路：</b>能秒杀绝不列式，能猜题绝不硬刚。看见比例、分数、百分数，第一反应不是设x，而是看选项。
            </Callout>
            <Block>
              <BlockTitle>两大基石（先入脑，后动手）</BlockTitle>
              <PointList>
                <li><b>倍数特性</b>（首选武器）— 整除、余数、比例、增长率，本质都是"约分后的倍数"</li>
                <li><b>方程法</b>（兜底手段）— 普通方程求谁设谁；不定方程用奇偶/倍数/尾数锁定</li>
              </PointList>
            </Block>
            <Block>
              <BlockTitle>通用四法（不属于某个题型，但所有题型都能用）</BlockTitle>
              <PointList>
                <li><b>代入排除法</b>——把选项当已知条件往回验，是"多位数、年龄、不定方程"的首选</li>
                <li><b>赋值法</b>——只给比例/倍数、不给具体量时，直接给总量赋一个好算的数</li>
                <li><b>比例与十字交叉</b>——溶液混合、平均数混合、增长率混合的通用武器</li>
                <li><b>数字特性法</b>——奇偶、倍数（整除）、尾数，先排除再代入</li>
              </PointList>
              <Callout variant="tip">这四法的适用特征与例题，见 <b>「零、速解四法」</b> 模块。</Callout>
            </Block>
            <Block>
              <BlockTitle>十八类高频题型（按考频排序）</BlockTitle>
              <DataTable>
                <tr><th>题型</th><th>考频</th><th>核心</th></tr>
                <tr><td>周期问题</td><td><span className="section-tag tag-high">高</span></td><td>余数+最小公倍数</td></tr>
                <tr><td>工程问题</td><td><span className="section-tag tag-hot">超高频</span></td><td>W=P×T 赋值法</td></tr>
                <tr><td>几何问题</td><td><span className="section-tag tag-hot">超高频</span></td><td>公式+缩放规则</td></tr>
                <tr><td>经济利润</td><td><span className="section-tag tag-hot">超高频</span></td><td>利润=售价-成本</td></tr>
                <tr><td>容斥原理</td><td><span className="section-tag tag-high">高</span></td><td>标准型套公式</td></tr>
                <tr><td>最值问题</td><td><span className="section-tag tag-high">高</span></td><td>最不利+1</td></tr>
                <tr><td>数列问题</td><td><span className="section-tag tag-mid">中</span></td><td>等差中项秒求和</td></tr>
                <tr><td>行程问题</td><td><span className="section-tag tag-high">高</span></td><td>S=VT</td></tr>
                <tr><td>排列组合</td><td><span className="section-tag tag-high">高</span></td><td>有序A无序C</td></tr>
                <tr><td>概率问题</td><td><span className="section-tag tag-mid">中</span></td><td>满足/总数</td></tr>
                <tr><td>年龄问题</td><td><span className="section-tag tag-mid">中</span></td><td>年龄差不变</td></tr>
                <tr><td>溶液问题</td><td><span className="section-tag tag-mid">中</span></td><td>溶质不变</td></tr>
                <tr><td>植树方阵</td><td><span className="section-tag tag-low">低</span></td><td>两端/环形</td></tr>
                <tr><td>小题型</td><td><span className="section-tag tag-low">低</span></td><td>空瓶换酒等</td></tr>
                <tr><td>数字推理</td><td><span className="section-tag tag-hot">事业编必考</span></td><td>多级/多重/幂次</td></tr>
                <tr><td>时钟问题</td><td><span className="section-tag tag-mid">中</span></td><td>追及 5.5°/分钟</td></tr>
                <tr><td>抽屉盈亏</td><td><span className="section-tag tag-mid">中</span></td><td>最不利+1 / 假设法</td></tr>
                <tr><td>统筹优化</td><td><span className="section-tag tag-mid">中</span></td><td>让等待与空转最少</td></tr>
              </DataTable>
            </Block>
            <Block>
              <BlockTitle>🎯 夸夸刷「补充考点」17 条全对照（查漏用）</BlockTitle>
              <Callout variant="tip">
                牟立志《数量夸夸刷》共 17 个补充考点，本页已全部落地，逐条核对如下（括号内为本页所在模块）。
              </Callout>
              <ul className="key-box" style={{ lineHeight: '2' }}>
                <li><b>考点 1</b> 神奇的 1764（五位数字连乘之积）—— <i>一、倍数特性</i></li>
                <li><b>考点 2</b> 普通方程：A 和非 A 思想 —— <i>二、方程法</i></li>
                <li><b>考点 3</b> 方程中的排比句 —— <i>二、方程法</i></li>
                <li><b>考点 4</b> 鸡兔同笼（假设法，与得分/晴雨天/大小盒同一模型）—— <i>十九、抽屉原理与盈亏</i></li>
                <li><b>考点 5</b> 暑假作业型 —— <i>四、工程问题</i></li>
                <li><b>考点 6</b> 同时开始同时结束 —— <i>四、工程问题</i></li>
                <li><b>考点 7</b> 切长最短（秒杀技巧）—— <i>五、几何问题</i></li>
                <li><b>考点 8</b> 合并付费（省多少钱）—— <i>六、经济利润</i></li>
                <li><b>考点 9</b> 等距离平均速度（做猜）—— <i>十、行程问题</i></li>
                <li><b>考点 10</b> 多次相遇：每人都有事做 —— <i>十、行程问题</i></li>
                <li><b>考点 11</b> 多次相遇比例类比 —— <i>十、行程问题</i></li>
                <li><b>考点 12</b> 漂流瓶 —— <i>十、行程问题</i></li>
                <li><b>考点 13</b> 等差数列中的倍数特性（页码类）—— <i>九、数列问题</i></li>
                <li><b>考点 14</b> 容斥的两个常识公式 —— <i>七、容斥原理</i></li>
                <li><b>考点 15</b> 最值思维（设未知数 → 代公式 → 分析最值）—— <i>八、最值问题</i></li>
                <li><b>考点 16</b> 平均分组（组无编号要除以 n!）—— <i>十一、排列组合</i></li>
                <li><b>考点 17</b> 描点法（枚举先描点，防漏防重）—— <i>十二、概率问题</i></li>
              </ul>
            </Block>
    </>
  )
}
