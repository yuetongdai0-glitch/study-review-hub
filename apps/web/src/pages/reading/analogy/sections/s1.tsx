import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 二 · 1 全同关系
 *
 * @returns 该节正文。
 */
export default function S3(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义与判断标准</BlockTitle>
              <Callout variant="key"><b>判断标准：</b>两个概念<b>完全相同</b>——同一个事物、只是叫法不同。</Callout>
              <Callout variant="formula">
                <span className="formula">示例</span>　麦克风：话筒　西红柿：番茄　纸鸢：风筝　芝麻：脂麻
              </Callout>
              <SubPoint>脂麻就是芝麻，又称胡麻、油麻。这类「一眼看是两种东西、其实是一个东西」的题，几乎每年都考。</SubPoint>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 全同关系<span className="src">2025 天津事业单位</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>纸鸢：风筝</ExampleQuestion>
                <ExampleOptions><span>A. 芝麻：脂麻</span><span>B. 竹筏：竹子</span><span>C. 骨架：木头</span><span>D. 白酒：酒精</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>纸鸢是风筝的旧称，二者<b>全同</b>。<br />
                  A 脂麻即芝麻（又称胡麻、油麻），也是全同；<br />
                  B 竹筏由竹子做成（加工 / 组成）；C 骨架可以由木头做成（材料）；D 白酒是含酒精的饮品，酒精只是成分之一（组成）。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 全同关系知识积累（直接背）</BlockTitle>
              <DataTable>
                <tr><th>词对</th><th>词对</th></tr>
                <tr><td>属相：生肖（2024 国考）</td><td>刘彻：汉武帝（2021 重庆）</td></tr>
                <tr><td>朱棣：明成祖（2021 重庆）</td><td>赵匡胤：宋太祖（2021 重庆）</td></tr>
                <tr><td>纸鸢：风筝（2023 湖北）</td><td>镇江：京口（2024 河南）</td></tr>
                <tr><td>江南话：江浙话（2023 福建）</td><td>广州：羊城（2021 辽宁）</td></tr>
                <tr><td>成都：蓉城（2021 辽宁）</td><td>南京：金陵（2022 福建）</td></tr>
                <tr><td>合肥：庐州（2021 重庆）</td><td>桂：广西（2021 山东）</td></tr>
                <tr><td>西红柿：番茄（2020 安徽）</td><td>马达：发动机（2020 安徽）</td></tr>
                <tr><td>引擎：发动机（2024 河南）</td><td>分母：除数（2019 国考）</td></tr>
                <tr><td>百分比：百分率（2024 重庆）</td><td>牙婆：人贩子（2024 河北）</td></tr>
                <tr><td>益母草：红花艾（2023 内蒙古）</td><td>银杏：公孙木（2022 青海）</td></tr>
                <tr><td>夜宵：宵夜（2022 福建）</td><td>生日：生辰（2022 福建）</td></tr>
                <tr><td>岳父：泰山（2022 浙江）</td><td>考拉：树袋熊（2022 浙江）</td></tr>
                <tr><td>杜鹃花：映山红（2021 山东）</td><td>牵牛花：喇叭花（2020 联考）</td></tr>
                <tr><td>荷花：芙蕖（2019 四川）</td><td>荷花：菡萏（2019 四川）</td></tr>
                <tr><td>乞巧节：七夕节（2020 联考）</td><td>矮瓜：茄子（2016 四川）</td></tr>
                <tr><td>犬子：儿子（2015 江西）</td><td>芝麻：脂麻（2015 吉林）</td></tr>
              </DataTable>
              <Callout variant="key">
                <b>规律：</b>地名别称（羊城 / 蓉城 / 金陵 / 京口 / 庐州）、历史人物庙号与本名、学名俗名（西红柿 / 番茄、考拉 / 树袋熊）、
                外来语音译（马达 / 引擎）、拆字合称（桂：广西）—— 这五类就是全同关系的高频来源。
              </Callout>
            </Block>
    </>
  )
}
