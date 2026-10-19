import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 二 · 8 条件关系
 *
 * @returns 该节正文。
 */
export default function S10(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义（充分 / 必要）</BlockTitle>
              <DataTable>
                <tr><th>类型</th><th>一句话理解</th><th>例子</th></tr>
                <tr><td><b>充分条件</b></td><td><b>有它就行</b>——有 A 一定有 B</td><td>考试：试题　拔罐：杯罐</td></tr>
                <tr><td><b>必要条件</b></td><td><b>没它不行</b>——没 A 一定没 B</td><td>氧气：生命　水：生命</td></tr>
              </DataTable>
              <Callout variant="warn">
                <b>做题纪律（优先级）：</b>题干出现明显的条件关系提示词 → <b>优先</b>考虑条件关系；<br />
                没有明显提示词时<b>不要硬找隐含条件</b>，看出什么关系就用什么关系。选项里也要先找有明确条件关系的。
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 必要条件<span className="src">2024 成都事业单位</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>水：生命</ExampleQuestion>
                <ExampleOptions><span>A. 玩耍：海豚</span><span>B. 空气：人</span><span>C. 动物：食物</span><span>D. 咖喱：西方人</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>没有水就没有生命 → 水是生命的<b>必要条件</b>。<br />
                  B 没有空气就没有人 → 空气是人的必要条件，一致；<br />
                  A 玩耍不是海豚存活的条件；C 食物并非「动物」的条件（且方向不对）；D 无逻辑关联。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 2 · 充分条件<span className="src">2025 山东事业单位（46%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>考试：试题</ExampleQuestion>
                <ExampleOptions><span>A. 办公：电脑</span><span>B. 拔罐：杯罐</span><span>C. 航海：帆船</span><span>D. 治疗：药品</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>有考试就一定有试题 → 试题是必不可少的，属条件关系。<br />
                  B 有拔罐就一定有杯罐 → 条件关系，一致；<br />
                  A 办公不一定要电脑；C 航海不一定要帆船（现代用轮船）；D 治疗不一定要药品（还能手术）。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 常见考查形式 ①：成语俗语</BlockTitle>
              <Callout variant="formula">
                <span className="formula">充分条件（出现「必 / 则 / 就 / 便」）</span><br />
                受人滴水之恩：必当涌泉相报　小不忍：则乱大谋　锲而舍之：朽木不折　水至清：则无鱼<br />
                <span className="formula">必要条件（出现「不…不」「…才」）</span><br />
                不入虎穴：焉得虎子　无风：不起浪　知己知彼：百战百胜　不经一事：不长一智
              </Callout>
              <Callout variant="tip">看到「则、就、必」先想充分条件；看到「不…不」「才」先想必要条件。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 3 · 含「则」的充分条件<span className="src">2023 联考（28%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>小不忍：则乱大谋</ExampleQuestion>
                <ExampleOptions><span>A. 不鸣则已：一鸣惊人</span><span>B. 知己知彼：百战百胜</span><span>C. 锲而舍之：朽木不折</span><span>D. 未雨绸缪：临渴掘井</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「小不忍则乱大谋」= 如果不能忍耐小事，就会扰乱大计划 → <b>假设 / 条件关系</b>。<br />
                  C「锲而舍之，朽木不折」= 如果刻一下就放弃，即使朽木也折不断 → 同样是条件关系，一致；<br />
                  A「不鸣则已，一鸣惊人」是「要么不鸣、一鸣就惊人」的对比，不是条件；<br />
                  B 是必要条件（前面没有「不…不」的结构特征）；D 是反义。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 4 · 「不…不」的必要条件<span className="src">2022 联考（52%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>不经一事：不长一智</ExampleQuestion>
                <ExampleOptions><span>A. 宁为玉碎：不为瓦全</span><span>B. 不入虎穴：安得虎子</span><span>C. 桃李不言：下自成蹊</span><span>D. 有福同享：有难同当</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「不经历一事，就不能增长一智」→ 必要条件（不 A 不 B）。<br />
                  B「不入虎穴，焉得虎子」同样是不 A 就不 B → 一致；<br />
                  A 是选择关系（宁…不…）；C 是因果（桃李不言，自然有人来）；D 是并列。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>3. 常见考查形式 ②：日常生活事件</BlockTitle>
              <Callout variant="formula">
                <span className="formula">必要条件</span>　水：生命　空气：人<br />
                <span className="formula">充分条件</span>　考试：试题　拔罐：杯罐　移动：跑步
              </Callout>
              <SubPoint>「有前者就一定有后者」→ 充分；「没有前者就一定没有后者」→ 必要。判断时先把方向想清楚。</SubPoint>
            </Block>
    </>
  )
}
