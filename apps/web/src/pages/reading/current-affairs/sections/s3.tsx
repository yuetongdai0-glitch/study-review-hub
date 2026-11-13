import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'
import { Memo, Mnemonic } from '../mem'

/**
 * 四、重大专题速览（会议 · 文件 · 周年）
 *
 * @remarks 把「2026 两会 / 中央经济工作会议 / 中央农村工作会议 / 一号文件 /
 * 十五五建议 / 新质生产力 / 党建思想 / 抗战 80 · 长征 90 · 建党 105」按三类归档。
 * 这一节只做「哪个专题对应哪个关键词」，具体数字看相应专题页与常识页。
 * @returns 该节正文。
 */
export default function Sz3(): ReactElement {
  return (
    <>
      <Callout variant="key">专题题的错误选项<b>几乎全是「串台」</b>：把一号文件的词安到经济工作会议上，把「长征 90」安到「抗战 80」上。这一节不背段落，只做一件事——<b>把专题名和它的专属关键词焊死</b>。</Callout>
      <Memo title="专题速览：三类归档，一眼定位" sub="看到题干里的专题名，先在脑子里跳出它属于哪一类，再从那一类里找关键词。">
        <Mnemonic
          title="三个会议各管一年"
          hot
          verse={<>中央经济工作会议管<em>明年经济</em>，中央农村工作会议管<em>三农</em>，两会管<em>年度目标</em>。</>}
          note={<>经济工作会议在<b>年底</b>开、定<b>次年</b>基调（财政/货币政策取向就在这句）；农村工作会议定三农重点；两会审议<b>政府工作报告</b>，出 GDP、CPI、就业三个数。</>}
        />
        <Mnemonic
          title="三份文件各管一域"
          verse={<>一号文件管<em>三农</em>，十五五建议管<em>五年</em>，新质生产力意见管<em>产业</em>。</>}
          note={<>一号文件连续多年聚焦三农，标题年年变、主题不变；十五五建议是<b>规划建议</b>（不是规划纲要）；新质生产力对应「科技创新和产业创新深度融合」。</>}
        />
        <Mnemonic
          title="三个周年别串"
          verse={<>抗战 <em>80</em>（2025）、长征 <em>90</em>（2026）、建党 <em>105</em>（2026）。</>}
          note={<>算法：1945+80、1936+90、1921+105。周年题最爱把「90」和「80」对调，或者把长征写成「胜利 80 周年」。</>}
        />
      </Memo>

      <Block>
        <BlockTitle>1. 会议类：经济工作会议 · 农村工作会议 · 两会</BlockTitle>
        <DataTable>
          <tr><th>专题</th><th>定位</th><th>专属关键词</th></tr>
          <tr><td><b>中央经济工作会议</b></td><td>年底召开，部署<b>次年</b>经济工作</td><td>宏观调控取向（财政政策 / 货币政策）、扩大内需、新质生产力、防范化解重点领域风险</td></tr>
          <tr><td><b>中央农村工作会议</b></td><td>年底召开，部署次年<b>三农</b>工作</td><td>粮食安全、耕地保护、乡村振兴、农民增收、学习运用「千万工程」经验</td></tr>
          <tr><td><b>2026 年全国两会</b></td><td>3 月，审议<b>政府工作报告</b></td><td>GDP 增速目标、CPI 目标、城镇新增就业、赤字率；「十五五」开局之年</td></tr>
        </DataTable>
        <Callout variant="warn"><b>「两会」不等于「党代会」：</b>两会＝<b>全国人大</b>＋<b>全国政协</b>；政府工作报告由<b>国务院总理</b>作，不是总书记作。选项常写「总书记作政府工作报告」，一读就能排除。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题 1 · 谁作政府工作报告</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>关于 2026 年全国两会，下列说法正确的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 政府工作报告由国务院总理向全国人大作　B. 政府工作报告由全国政协主席作　C. 两会即党的全国代表大会　D. 两会每年 10 月召开</ExampleOptions>
          <ExampleAnswer><b>解析：</b>两会＝全国人大 + 全国政协，每年 <b>3 月</b>召开；政府工作报告由<b>国务院总理</b>作。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>2. 文件类：一号文件 · 十五五 · 新质生产力 · 党建思想</BlockTitle>
        <PointList>
          <li><b>中央一号文件</b>：连续聚焦<b>三农</b>；核心永远是<b>粮食安全 + 乡村振兴 + 农民增收</b>。看到「三农」「耕地」「种业」先想它。</li>
          <li><b>「十五五」规划建议</b>：<b>建议</b>不是<b>纲要</b>——建议由党的全会通过，纲要由人大批准。这一条最容易设错。</li>
          <li><b>《加快农业农村现代化「十五五」规划》</b>：农业农村领域的五年专项规划，与一号文件互为表里。</li>
          <li><b>新质生产力</b>：特点是<b>创新</b>，关键在<b>质优</b>，本质是<b>先进生产力</b>；对应「科技创新和产业创新深度融合」。</li>
          <li><b>习近平党建思想</b>：管党治党的指导思想，与《求是》「管党治党」系列文章同源。</li>
        </PointList>
        <Callout variant="tip"><b>「建议 / 纲要 / 规划」三级别：</b>党的全会 → <b>建议</b>；国务院 → <b>纲要</b>；部委/地方 → <b>规划</b>。题目问「由谁通过」，按这个顺序对号。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题 2 · 建议与纲要</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>关于「十五五」规划，下列说法正确的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 《建议》由全国人民代表大会审议通过　B. 《建议》由党的中央全会通过，《纲要》由全国人大批准　C. 《建议》就是《纲要》　D. 五年规划由国务院单独决定，无需人大批准</ExampleOptions>
          <ExampleAnswer><b>解析：</b>先有党的全会通过的<b>《建议》</b>，再由国务院编制<b>《纲要》</b>并提请<b>全国人大</b>批准。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>3. 周年类：抗战 80 · 长征 90 · 建党 105</BlockTitle>
        <DataTable>
          <tr><th>周年</th><th>时间</th><th>必背事实</th></tr>
          <tr><td><b>抗战胜利 80 周年</b></td><td>2025 年 9 月 3 日</td><td><b>14 年</b>抗战（1931—1945）；<b>九一八</b>是起点、<b>七七事变</b>是全民族抗战起点；<b>9 月 3 日</b>为胜利纪念日</td></tr>
          <tr><td><b>长征胜利 90 周年</b></td><td>2026 年 10 月</td><td>1936 年 10 月<b>三大主力会师</b>（甘肃会宁）；1934 年 10 月出发；<b>遵义会议</b>是生死攸关的转折点</td></tr>
          <tr><td><b>建党 105 周年</b></td><td>2026 年 7 月 1 日</td><td>1921 年<b>中共一大</b>（上海→嘉兴南湖）；<b>伟大建党精神</b>：坚持真理、坚守理想，践行初心、担当使命，不怕牺牲、英勇斗争，对党忠诚、不负人民</td></tr>
        </DataTable>
        <Callout variant="warn"><b>两个「起点」别混：</b>九一八事变＝<b>中国局部抗战</b>的开始，也是 14 年抗战的<b>起点</b>；七七事变＝<b>全民族抗战</b>的起点。选项常把「全民族抗战开始」安到九一八上。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题 3 · 长征与抗战</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>下列关于党史事件的表述，正确的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 长征胜利 90 周年对应的标志性事件是三大主力会师　B. 九一八事变标志着全民族抗战的开始　C. 遵义会议是长征的起点　D. 建党 105 周年对应 2025 年</ExampleOptions>
          <ExampleAnswer><b>解析：</b>A 正确（1936 年 10 月三大主力会师，至 2026 年为 90 周年）；B 错，九一八是<b>局部抗战</b>起点、14 年抗战起点，全民族抗战起点是七七事变；C 错，长征起点是 1934 年 10 月出发；D 错，1921+105＝<b>2026</b>。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>4. 新年贺词：只记「年度关键词」</BlockTitle>
        <PointList>
          <li>贺词每年必考<b>一句金句 + 一个年度定位</b>，形式是「填空/对应」，不是大段默写。</li>
          <li>复习方法：把<b>题目里出现过的金句</b>抄成一行，标注「年份 + 场合」，考前只看这张表。</li>
          <li>新年贺词 ≠ 政府工作报告：贺词讲<b>成绩与信心</b>，报告讲<b>指标与任务</b>。选项常把两者的话互换。</li>
        </PointList>
        <Callout variant="tip"><b>专题题的通用解法：</b>先认<b>场合</b>（哪个会/哪份文件），再认<b>对象</b>（三农/经济/党建/外交），最后才看细节。前两步就能排掉两个错项。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题 4 · 场合与对象要对应</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>下列「场合—内容」对应<b>不正确</b>的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 中央一号文件——三农工作　B. 中央经济工作会议——次年经济工作基调　C. 新年贺词——公布 GDP 增速目标　D. 全国卫生与健康大会——健康中国建设</ExampleOptions>
          <ExampleAnswer><b>解析：</b>C 错，GDP 增速目标在<b>政府工作报告</b>里公布，新年贺词只讲成绩与展望。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <div className="jingle">
        <div className="jt">专题速览 · 一句话总结</div>
        <b>会议看「管什么」、文件看「谁通过」、周年看「加多少」；先认场合再认对象，最后才看细节。</b>
      </div>
    </>
  )
}
