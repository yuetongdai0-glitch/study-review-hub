import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 四 · 7 长诗句 : 长诗句
 *
 * @returns 该节正文。
 */
export default function S25(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 六种关系（前三种考得最多）</BlockTitle>
              <DataTable>
                <tr><th>关系</th><th>示例</th></tr>
                <tr><td><b>① 因果</b></td><td>莫愁前路无知己：天下谁人不识君</td></tr>
                <tr><td><b>② 目的</b></td><td>欲穷千里目：更上一层楼</td></tr>
                <tr><td><b>③ 并列</b></td><td>吾生也有涯：而知也无涯</td></tr>
                <tr><td>④ 描述对象一致</td><td>蝉噪林逾静（夏）：石榴开遍透帘明（夏）</td></tr>
                <tr><td>⑤ 以物喻人</td><td>良禽择木而栖：贤臣择主而事</td></tr>
                <tr><td>⑥ 修辞手法</td><td>比喻：大漠沙如雪　拟人：感时花溅泪　夸张：白发三千丈</td></tr>
              </DataTable>
              <Callout variant="tip">这类诗多借助自然界的某种现象，<b>来说明人的处事道理</b>——先读懂两句之间的逻辑，再去找结构一致的选项。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 目的关系<span className="src">2025 联考（53%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>欲穷千里目：更上一层楼</ExampleQuestion>
                <ExampleOptions><span>A. 为唤春来争艳朵：甘将香化育花泥</span><span>B. 不经一番寒彻骨：怎得梅花扑鼻香</span><span>C. 欲上高楼去避愁：愁还随我上高楼</span><span>D. 抛开俗事陪山坐：才得闲心听水歌</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>想要看得更远，所以再上一层楼 → 目的关系（「欲」「为」是提示词）。<br />
                  A 为了春天到来时百花争艳，甘愿化作泥土育花 → 目的关系，一致；<br />
                  B、D 都含「才 / 怎得」，是条件关系；C 是转折（想去避愁，愁却跟上来）。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 2 · 描述对象一致（季节）<span className="src">2024 山东（29%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>蝉噪林逾静　对于　（　　）　相当于　（　　）　对于　满架蔷薇一院香</ExampleQuestion>
                <ExampleOptions><span>A. 菊花从此不须开　谷鸟吟晴日</span><span>B. 蒌蒿满地芦芽短　雁行遥上月</span><span>C. 石榴开遍透帘明　卢橘垂金弹</span><span>D. 千里莺啼绿映红　燕草如碧丝</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「蝉噪林逾静」「满架蔷薇一院香」描写的都是<b>夏季</b>景象，要按「季节一致」配对。<br />
                  C「石榴开遍透帘明」（石榴夏季开花）与「卢橘垂金弹」（卢橘初夏结果）都是夏季 → 前后都成立；<br />
                  A、B、D 中的「菊花」「芦芽」「燕草」多属春、秋，季节不符。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 3 · 因果倒装<span className="src">2024 四川（54%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>柴门闻犬吠：风雪夜归人</ExampleQuestion>
                <ExampleOptions><span>A. 意欲捕鸣蝉：忽然闭口立</span><span>B. 向晚意不适：驱车登古原</span><span>C. 不敢高声语：恐惊天上人</span><span>D. 举头望明月：低头思故乡</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「柴门闻犬吠」是<b>结果</b>（听到狗叫），「风雪夜归人」是<b>原因</b>（有人深夜归来）→ 因果且<b>结果在前、原因在后</b>。<br />
                  C「不敢高声语」是结果（不敢大声说话），「恐惊天上人」是原因（怕惊动天上的人）→ 同样是因果倒装，一致；<br />
                  A、B 都是原因在前、结果在后；D 是先望月、后思乡的顺承。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
