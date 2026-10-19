import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 二十二、考场策略与 21 天计划
 *
 * @returns 该节正文。
 */
export default function S23(): ReactElement {
  return (
    <>
      <Callout variant="key">常识的正确率不是「知识量」决定的，而是<b>做题节奏 + 排除能力</b>决定的。20 题常识，建议 <b>10–12 分钟</b>做完，平均 30–35 秒一题。</Callout>
      
            <Block>
              <BlockTitle>1. 考场四条纪律</BlockTitle>
              <PointList>
                <li><b>先做会做的</b>：一轮扫过去，30 秒内没思路的直接标记跳过，不要在一道题上耗 2 分钟。</li>
                <li><b>「绝对化」多半错</b>：出现「唯一」「全部」「都」「必须」「一律」时提高警惕（但法律条文里的「应当」是真的）。</li>
                <li><b>「偷换主体」最常见</b>：把「党」换成「政府」、把「人大」换成「政协」、把「司法」换成「执法」，都是标准错项。</li>
                <li><b>「本省/本地」优先</b>：省考常考本省地理、历史人物、非遗；考前 1 天专门看本省概况。</li>
                <li><b>不会就选「最像政策原文」的</b>：政治理论题里，表述最规范、最接近文件语言的选项正确率最高。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题110 · 综合判断（小黑母题风格）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某题选项：A.「党的领导制度是我国的根本政治制度」B.「人民代表大会制度是我国的根本政治制度」C.「政协是我国的国家机关」D.「法治社会是全面依法治国的重点任务和主体工程」。正确答案是：</ExampleQuestion>
                <ExampleOptions>A　B　C　D</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 混了「根本领导制度」；C 政协不是国家机关；D 法治政府才是重点任务和主体工程。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 21 天计划（可直接照做）</BlockTitle>
              <DataTable>
                <tr><th>阶段</th><th>天数</th><th>任务</th></tr>
                <tr><td>搭框架</td><td>D1–D3</td><td>本页 一～三（政治理论）+ 二十、数字速记，每天 1 个模块，只记加粗结论</td></tr>
                <tr><td>攻法律</td><td>D4–D7</td><td>十六～十九（民法/刑法/行政法/宪法），每天 1 节 + 当天例题全做</td></tr>
                <tr><td>补文史</td><td>D8–D11</td><td>六～九（古代史/近现代史/文学/文化），用表格横向对比记</td></tr>
                <tr><td>补科技</td><td>D12–D14</td><td>十～十三（物理/化学/生物医学/生活高新），只记「一句话原理」</td></tr>
                <tr><td>补经济地理</td><td>D15–D16</td><td>十四～十五，重点 GDP、通胀、汇率、秦岭淮河、中国之最</td></tr>
                <tr><td>排坑</td><td>D17–D19</td><td>只看二十一（四张表），错一题回填一处；配合《排坑手册》原书</td></tr>
                <tr><td>套卷</td><td>D20</td><td>限时 12 分钟做 20 题常识，统计错题类型（知识型 / 排除型 / 粗心型）</td></tr>
                <tr><td>考前</td><td>D21</td><td>只看二十（数字）+ 二十一（排坑），不做新题</td></tr>
              </DataTable>
              <Callout variant="tip"><b>每天 40 分钟的结构：</b>15 分钟看本页 → 15 分钟做例题 → 10 分钟口述复述（合上页面，把这一节的 5 个关键词说出来）。口述比默读有效得多。</Callout>
            </Block>
    </>
  )
}
