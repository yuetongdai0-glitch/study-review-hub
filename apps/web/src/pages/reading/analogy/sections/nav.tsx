import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList, SubPoint } from '@/components/content'

/**
 * 备考认知 · 考查形式 · 做题流程
 *
 * @returns 该节正文。
 */
export default function S1(): ReactElement {
  return (
    <>
      <Callout variant="key">
              <b>这门题的特点：</b>题目短小、非常易读、做得也快。但<b>考点碎、常结合常识考查</b>，所以实际做题难度并不低。
            </Callout>
            <Block>
              <BlockTitle>要提分必须突破的 3 件事</BlockTitle>
              <PointList>
                <li><b>务必明确做题核心原则</b>——常态思维、先横后纵、先整体后局部。</li>
                <li><b>弱化主观性想法，强化常考考点的记忆和使用</b>——不要凭语感，先认准「关系类型」。</li>
                <li><b>边做题边积累常识</b>——地名别称、历史人物、成语典故、动植物分类，积累得越多越稳。</li>
              </PointList>
            </Block>
            <Block>
              <BlockTitle>考查形式（三种出题壳子）</BlockTitle>
              <DataTable>
                <tr><th>形式</th><th>样子</th><th>要点</th></tr>
                <tr><td><b>两项式</b></td><td>龋齿 : 嗜食甜品</td><td>最常见，两个词直接比</td></tr>
                <tr><td><b>三项式</b></td><td>路由器 : 连接 : 网络</td><td>三个词要两两看，先定 A 与 B、再看 B 与 C</td></tr>
                <tr><td><b>括号式</b></td><td>桌子 之于（　）相当于 车轮 之于（　）</td><td>把选项代进去，变成两个两项式</td></tr>
              </DataTable>
              <Callout variant="tip">三项式与括号式本质都是「两项式的组合」—— 拆成两两的配对逐个验证即可。</Callout>
            </Block>
            <Block>
              <BlockTitle>做题流程（顺序固定，别乱）</BlockTitle>
              <Callout variant="formula">
                <span className="formula">① 先用常考关系解题</span>（直接定关系 ／ 通过造句辅助定关系）<br />
                <span className="formula">② 无关系、或判断不出关系 → 再用造句法</span><br />
                <span className="formula">③ 关系定下来后 → 才轮到二级辨析</span>
              </Callout>
              <Callout variant="warn">
                <b>两条纪律（最容易踩坑）：</b><br />
                ① <b>做题不能直接用二级辨析</b>—— 一定要先用基础考点解题，<b>无唯一项</b>时再考虑二级辨析。<br />
                ② <b>条件关系有优先级</b>—— 题干出现明显的条件关系提示词（则、就、必、不…不、才），<b>优先</b>考虑条件关系；<br />
                题干没有明显提示词时，<b>不要去硬找隐含条件</b>，看出什么关系就用什么关系。
              </Callout>
            </Block>
            <Block>
              <BlockTitle>考点家族速览</BlockTitle>
              <DataTable>
                <tr><th>家族</th><th>包含</th></tr>
                <tr><td><b>核心原则</b></td><td>常态思维 · 先横后纵 · 先整体后局部</td></tr>
                <tr><td><b>逻辑关系</b>（8 类）</td><td>全同 · 全异 · 种属 · 交叉 · 顺承 · 因果 · 目的 · 条件</td></tr>
                <tr><td><b>经验常识</b>（8 类）</td><td>功能 · 组成 · 加工 · 命名 · 特征 · 职业 · 位置 · 依据</td></tr>
                <tr><td><b>言语关系</b></td><td>近反义 · 结合逻辑关系 · 词句结构 · 释义 · 指代象征 · 成语拆分 · 长诗句</td></tr>
                <tr><td><b>造句法</b></td><td>看不出常考关系时的兜底办法</td></tr>
              </DataTable>
              <Callout variant="key"><b>这 4 个关系有个共同特征：题干出现多个名词</b> → 全同、全异、种属、交叉。看到一组名词，先往这四个里想。</Callout>
              <Callout variant="tip">初学时导图的记忆负担确实有点大——<b>理解着记、频繁回看</b>，熟练度会自然上来。</Callout>
            </Block>
            <Block>
              <BlockTitle>还有一类：纯常识（公式类）</BlockTitle>
              <SubPoint>题干看不出关系、也不靠背诵，而是考<b>初高中的常识公式</b>（物理、经济、数学）。先想公式，再比对公式的结构（积 / 差 / 商）。</SubPoint>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 纯常识（公式）<span className="src">2024 浙江事业单位</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>质量：密度：体积</ExampleQuestion>
                <ExampleOptions><span>A. 利润：售价：进价</span><span>B. 位移：速度：时间</span><span>C. 浓度：溶液：溶质</span><span>D. 集合：子集：元素</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>质量 = 密度 × 体积（中间量 = 两侧量<b>相乘</b>）。<br />
                  B 位移 = 速度 × 时间 → 同样是「中间量等于两侧量之积」，一致；<br />
                  A 利润 = 售价 − 进价（是<b>差</b>）；C 浓度 = 溶质 ÷ 溶液（是<b>商</b>）；D 是包含关系、没有公式。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
