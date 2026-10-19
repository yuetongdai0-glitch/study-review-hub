import type { ReactElement } from 'react'
import { Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十三、特殊考点（拉动 · 贡献率 · 容斥 · 进出口）
 *
 * @returns 该节正文。
 */
export default function S14(): ReactElement {
  return (
    <>
      <div className="section-lead">
              第九讲第七章的「拉动增长 / 贡献率 / 容斥」加上进出口、图表查找和综合分析题防坑，
              都是「公式简单但极易混」的考点。这一节每个公式都给一道对照例题。
            </div>
      
            <h4>1. 拉动增长率</h4>
            <Callout variant="formula">
              <div className="formula">拉动增长率 = 部分增量 ÷ 整体基期</div>
              问法特征：「拉动…增长多少<b>个百分点</b>」。分母是<b>整体基期</b>。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 1 · 拉动增长率</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某省 GDP 基期 20000 亿元，其中信息产业增量为 600 亿元。求信息产业拉动 GDP 增长多少个百分点。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 拉动增长率 = 部分增量 ÷ 整体基期 = 600 ÷ 20000 = 3.0%，即拉动 <b>3.0 个百分点</b>。<br />
                  <span className="correct">答案：拉动 3.0 个百分点</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>2. 增量贡献率</h4>
            <Callout variant="formula">
              <div className="formula">增量贡献率 = 部分增量 ÷ 整体增量</div>
              问法特征：「贡献率」「对…增长的贡献率」。分母是<b>整体增量</b>。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 2 · 增量贡献率</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某省 GDP 基期 20000 亿元、增长 6%，其中信息产业增量为 600 亿元。求信息产业对 GDP 增长的贡献率。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 整体增量 = 20000 × 6% = 1200 亿元。<br />
                  贡献率 = 600 ÷ 1200 = <b>50%</b>。<br />
                  交叉验证：拉动 3% = 贡献率 50% × 整体增速 6% ✓<br />
                  <span className="correct">答案：50%</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>3. 拉动 vs 贡献率：只差一个分母</h4>
            <Callout variant="warn">
              <b>最易混淆的一点：</b>拉动增长率的分母是「<b>整体基期</b>」，
              增量贡献率的分母是「<b>整体增量</b>」。同一个部分增量，除以两个不同的数，答案可能差好几倍。
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 3 · 拉动 vs 贡献率（同题两问）</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某省 GDP 基期 10000 亿元、增量 800 亿元，其中制造业增量 280 亿元。求：① 制造业拉动 GDP 增长多少个百分点；② 制造业对 GDP 增长的贡献率。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 拉动 = 部分增量 ÷ <b>整体基期</b> = 280 ÷ 10000 = <b>2.8%</b>（即 2.8 个百分点）；<br />
                  ② 贡献率 = 部分增量 ÷ <b>整体增量</b> = 280 ÷ 800 = <b>35%</b>。<br />
                  关系式：拉动 2.8% = 贡献率 35% × 整体增速 8% ✓<br />
                  <span className="correct">答案：① 2.8 个百分点　② 35%</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <div className="example-tag">📖 例题 4 · 贡献率大小比较（秒杀）</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某省 GDP 增量 800 亿元，其中甲产业增量 240 亿元、乙产业增量 200 亿元、丙产业增量 160 亿元。问哪个产业贡献率最大。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 比较不同部分对<b>同一个整体</b>的贡献率时，整体增量相同 → <b>只需要比部分增量</b>。<br />
                  240 &gt; 200 &gt; 160 → 甲产业贡献率最大（240/800 = 30%）。<br />
                  <span className="correct">答案：甲产业（30%）</span>
                  <div className="ex-note">注意「虚假繁荣」：某新品类贡献 35% 销售额但只拉动 8.2% 增长——贡献率高 ≠ 拉动大，两者分母不同。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>5. 容斥：有无交集 / 至少 / 至多</h4>
            <div className="tw">
              <DataTable>
                <tr><th className="nowrap">问法</th><th>思路</th><th>公式</th></tr>
                <tr><td className="nowrap">有无交集</td><td>占比之和超过 100% → 一定有交集</td><td>a + b &gt; 100%</td></tr>
                <tr><td className="nowrap">至少</td><td>考虑「尽量相斥」「重合尽量少」</td><td><b>至少 = a + b − 100%</b></td></tr>
                <tr><td className="nowrap">至多</td><td>考虑「包含」关系</td><td>至多 = <b>占比较少项的比重</b></td></tr>
                <tr><td className="nowrap">既 A 又 B 的范围</td><td>介于「至少」与「至多」之间</td><td>a + b − 100% ≤ x ≤ min(a, b)</td></tr>
              </DataTable>
            </div>
            <Example>
              <div className="example-tag">📖 例题 5 · 容斥最小交集</div>
              <ExampleBody>
                <ExampleQuestion>
                  某次调查共 110 人，其中「很满意」的占 60%，「很重视」的占 85%。
                  问既「很满意」又「很重视」的受访居民至少有多少人。
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 求最小交集 → 用公式 至少 = a + b − 100%。<br />
                  60% + 85% − 100% = <b>45%</b> → 45% × 110 = 49.5 ≈ <b>50</b> 人。<br />
                  <span className="correct">答案：至少约 50 人</span>
                  <div className="ex-note">典型问法识别：「有『餐饮消费』的受访居民中，一定有人……」→ 只要看到「一定有人」，就是求最小交集。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Callout variant="tip">
              <b>补充（两集合标准型）：</b>A + B − A∩B = 总数 − 都不满足。虽然资料分析里直接考标准型的少，
              但它是理解「至少」公式的来源：都不满足为 0 时，A∩B 最小就是 A + B − 总数。
            </Callout>
      
            <h4>6. 进出口：总额 / 顺差 / 逆差</h4>
            <Callout variant="formula">
              <div className="formula">进出口总额 = 进口额 + 出口额</div>
              <div className="formula">贸易顺差 = 出口额 − 进口额（出口 &gt; 进口）　　贸易逆差 = 进口额 − 出口额（进口 &gt; 出口）</div>
              <div className="formula">出口额 = 贸易顺差 + 进口额</div>
            </Callout>
            <Example>
              <div className="example-tag">📖 例题 6 · 进出口基本计算</div>
              <ExampleBody>
                <ExampleQuestion>2023 年某国出口额 2.2 万亿美元，进口额 1.8 万亿美元。求：① 进出口总额；② 是顺差还是逆差，金额多少。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  ① 进出口总额 = 2.2 + 1.8 = <b>4.0 万亿美元</b>；<br />
                  ② 出口（2.2）&gt; 进口（1.8）→ <b>贸易顺差</b>，顺差 = 2.2 − 1.8 = <b>0.4 万亿美元</b>。<br />
                  <span className="correct">答案：① 4.0 万亿美元　② 顺差 0.4 万亿美元</span>
                  <div className="ex-note">第十讲提醒：注意「主客体颠倒」——「欧盟、美国从我国进口」= 「我国对欧盟、美国出口」，方向别反；
                  还要看清问的是出口「量」还是「额」。</div>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>7. 图表查找类（折线 / 饼图 / 柱状 / 表格）</h4>
            <PointList>
              <li><b>折线图：</b>算出对应数值后，看点的高低、上升下降趋势。</li>
              <li><b>饼图：</b>比重 × 360° = 扇形圆心角；也可看部分之间的倍数关系。</li>
              <li><b>柱状图：</b>直接看高低，<b>注意纵轴起始值是否为 0</b>。</li>
              <li><b>表格：</b>注意行列对应关系；跨表查找时确认指标定义是否一致。</li>
            </PointList>
            <Example>
              <div className="example-tag">📖 例题 7 · 饼图圆心角反推比重</div>
              <ExampleBody>
                <ExampleQuestion>某饼图中某部分对应的圆心角约为 108°，问该部分占比约为多少。</ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b> 比重 = 圆心角 ÷ 360° = 108 ÷ 360 = <b>30%</b>。<br />
                  反着用：若某部分占 45%，则它的圆心角 = 45% × 360° = 162°。<br />
                  <span className="correct">答案：约 30%</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <h4>8. 综合分析题：四个排除法</h4>
            <PointList>
              <li><b>时间不对应 → 直接排除</b>（材料是 1~3 月，选项说全年）。</li>
              <li><b>对象不匹配 → 排除</b>（材料是「规模以上企业」，选项说「所有企业」）。</li>
              <li><b>单位不匹配 → 排除</b>（万吨 / 亿吨、人 / 万人、‰ / %）。</li>
              <li><b>注意「约 / 近 / 超 / 超过」的精确含义</b>：「超过」= 严格大于；「近」= 略小于。</li>
              <li><b>多个数求和是否超过某值</b> → 以平均数为基准，只算偏离部分。</li>
            </PointList>
            <Example>
              <div className="example-tag">📖 例题 8 · 综合分析题逐项排除</div>
              <ExampleBody>
                <ExampleQuestion>
                  材料：「2023 年 1~3 月某省规模以上工业企业营业收入 5000 亿元，同比增长 6.0%。」
                  判断下列选项：
                  A. 2023 年全年该省规上工业企业营业收入超过 2 万亿元
                  B. 2023 年 1~3 月该省所有工业企业营业收入超 5000 亿元
                  C. 2022 年同期该省规上工业企业营业收入约 4717 亿元
                  D. 2023 年 1~3 月该省规上工业企业营业收入同比增长 600 亿元
                </ExampleQuestion>
                <ExampleAnswer>
                  <b>解</b><br />
                  <b>A ×</b>：材料只有 1~3 月，<b>时间不对应</b>，推不出全年（各季度不均等）。<br />
                  <b>B ×</b>：材料说的是「规模以上」，选项扩大成「所有工业企业」，<b>对象不匹配</b>。<br />
                  <b>C ✓</b>：5000 ÷ 1.06 ≈ 4717 亿元，正确。<br />
                  <b>D ×</b>：增量 = 5000 × 6% ÷ 1.06 ≈ 283 亿元，不是 600 亿元（600 是把「5000 的 12%」当成了增量，量级口号错了）。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
