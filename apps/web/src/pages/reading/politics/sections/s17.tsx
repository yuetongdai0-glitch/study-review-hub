import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十七、刑法
 *
 * @returns 该节正文。
 */
export default function S18(): ReactElement {
  return (
    <>
      <Callout variant="key">刑法高频只有四块：<b>责任年龄（12/14/16）、正当防卫与紧急避险、犯罪形态（预备/中止/未遂/既遂）、刑罚数字</b>。把这四块拿下，70% 的题可做。</Callout>
      
            <Block>
              <BlockTitle>1. 基本原则与效力范围</BlockTitle>
              <PointList>
                <li>三原则：<b>罪刑法定</b>、刑法面前人人平等（<b>适用</b>法律上一律平等）、罪责刑相适应。</li>
                <li>属地管辖：领域内犯罪（领陆领水领空 + 我国船舶航空器）；<b>行为或结果有一项</b>发生在我国即可。</li>
                <li>属人管辖：我国公民在境外犯罪适用我国刑法；最高刑 <b>3 年以下</b>可以不予追究；<b>国家工作人员和军人一律追究</b>。</li>
                <li>保护管辖：外国人在境外对我国国家或公民犯罪，<b>最低刑 3 年以上</b>且犯罪地也处罚。</li>
                <li>普遍管辖：我国缔结或参加的国际条约所规定的罪行。</li>
                <li>时间效力：<b>从旧兼从轻</b>。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题97 · 刑法效力（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于刑法的效力，下列说法错误的是：</ExampleQuestion>
                <ExampleOptions>A.我国公民甲教唆美国公民在法国杀害日本人，我国刑法有权追究<br />B.我国公民乙在中欧班列行驶于别国境内时贩售海洛因，应追究刑责<br />C.外国商人在我国领域内犯重婚罪，应适用我国刑法<br />D.法国公民乘坐我国游轮，在船上实施的犯罪行为不适用我国刑法</ExampleOptions>
                <ExampleAnswer><b>解析：</b>D 错。我国<b>船舶、航空器</b>内犯罪适用属地管辖（拟制领土）。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 犯罪构成：年龄与能力</BlockTitle>
              <PointList>
                <li><b>不满 12 周岁</b>：不负刑事责任。</li>
                <li><b>12–14 周岁</b>：仅对故意杀人、故意伤害<b>致人死亡或以特别残忍手段致人重伤造成严重残疾</b>、情节恶劣，且经<b>最高人民检察院核准追诉</b>的，负刑事责任。</li>
                <li><b>14–16 周岁</b>：仅对八种严重犯罪负责——<b>故意杀人、故意伤害致人重伤或死亡、抢劫、强奸、贩卖毒品、放火、爆炸、投放危险物质</b>（<b>不含绑架、盗窃、诈骗、运输毒品</b>）。</li>
                <li><b>已满 16 周岁</b>：完全负刑事责任；不满 18 周岁应当<b>从轻或减轻</b>。</li>
                <li>已满 <b>75 周岁</b>：故意犯罪可从轻或减轻；过失犯罪<b>应当</b>从轻或减轻。</li>
                <li>精神病人：完全无辨认控制能力时不负；间歇性精神病人<b>精神正常时</b>犯罪应负；尚未完全丧失的可以从轻或减轻。</li>
                <li><b>醉酒的人犯罪应当负刑事责任</b>；又聋又哑的人或盲人可以从轻、减轻或免除。</li>
                <li>主观方面：直接故意（希望）、间接故意（放任）、疏忽大意过失（应预见未预见）、过于自信过失（已预见轻信能避免）；<b>不可抗力与意外事件不是犯罪</b>。</li>
                <li><b>犯罪四要件</b>：<b>犯罪主体、犯罪主观方面、犯罪客体、犯罪客观方面</b>。<b>犯罪客体</b>＝刑法所保护而被犯罪行为侵害的<b>社会关系</b>；<b>犯罪客观方面</b>＝危害行为、危害结果、因果关系等客观外在事实。</li>
                <li><b>危害行为</b>是犯罪客观方面的核心：<b>「无行为则无犯罪」</b>；分<b>作为</b>（积极实施禁止行为）与<b>不作为</b>（能履行而不履行）。<b>不作为的义务来源</b>：法律明文规定、职务或业务要求、法律行为（如合同）承担、<b>先行行为</b>引起的义务。</li>
              </PointList>
              <Callout variant="formula"><span className="formula">12 核准 · 14 八罪 · 16 全责 · 18 从轻 · 75 过失应当从轻</span></Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题98 · 责任年龄（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>根据我国《刑法》，下列关于刑事责任能力或年龄的表述，不正确的是：</ExampleQuestion>
                <ExampleOptions>A.已满 14 周岁未满 16 周岁的人贩卖并运送毒品，应当追究刑事责任<br />B.间歇性精神病人在精神正常时候的犯罪，应当追究刑事责任<br />C.已满 14 周岁未满 16 周岁的人绑架他人，应当追究刑事责任<br />D.尚未完全丧失辨认或控制能力的精神病人犯罪，应追究刑责</ExampleOptions>
                <ExampleAnswer><b>解析：</b>C 错。<b>绑架不在八种犯罪之列</b>，14–16 周岁的人绑架不负刑事责任（若撕票则按故意杀人评价）。A 中贩卖毒品在列。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 犯罪排除事由：正当防卫与紧急避险</BlockTitle>
              <DataTable>
                <tr><th></th><th>正当防卫</th><th>紧急避险</th></tr>
                <tr><td>起因</td><td>不法侵害现实存在</td><td>现实危险</td></tr>
                <tr><td>时间</td><td>已开始、未结束</td><td>已发生、未结束</td></tr>
                <tr><td>对象</td><td><b>不法侵害者本人</b></td><td><b>无辜第三人</b>的合法权益</td></tr>
                <tr><td>限度</td><td>未明显超过必要限度造成重大损害</td><td>未超过必要限度造成不应有损害</td></tr>
                <tr><td>过当后果</td><td>应减轻或免除处罚（无「防卫过当罪」）</td><td>应减轻或免除处罚</td></tr>
              </DataTable>
              <PointList>
                <li><b>特殊防卫</b>：对正在进行的行凶、杀人、抢劫、强奸、绑架等严重危及人身安全的暴力犯罪，造成侵害人伤亡的<b>不属于防卫过当</b>。</li>
                <li>防卫时机：侵害人已失去侵害能力（如已昏迷）后再加害，属<b>事后防卫</b>，可能构成故意犯罪。</li>
                <li>紧急避险须<b>迫不得已</b>；避险对象是无辜第三人。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题99 · 正当防卫（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>李某入室盗窃被发现，为抗拒抓捕当场对赵某使用暴力，扭打中李某昏迷倒地。赵某仍捡起铁棍猛击其头部数下致其死亡。赵某的行为属于：</ExampleQuestion>
                <ExampleOptions>A.正当防卫，不负刑事责任<br />B.防卫过当，构成过失致人死亡罪<br />C.防卫过当，构成故意伤害致人死亡罪<br />D.故意杀人，应当负刑事责任</ExampleOptions>
                <ExampleAnswer><b>解析：</b>李某已昏迷、侵害已结束，赵某此时加害属<b>事后防卫</b>，具有杀人故意，构成故意杀人。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 犯罪形态与共同犯罪</BlockTitle>
              <PointList>
                <li><b>犯罪预备</b>：为犯罪准备工具、制造条件，因<b>意志以外</b>原因未着手；可比照既遂从轻、减轻或免除。</li>
                <li><b>犯罪中止</b>：<b>自动</b>放弃或<b>自动有效</b>防止结果；没有造成损害<b>应当免除</b>，造成损害<b>应当减轻</b>。</li>
                <li><b>犯罪未遂</b>：已着手，因<b>意志以外</b>原因未得逞；可比照既遂从轻或减轻。</li>
                <li><b>犯罪既遂</b>：齐备全部分则要件。<b>既遂后返还不成立中止</b>（盗窃后返还仍为既遂）。</li>
                <li>只有<b>直接故意</b>犯罪才有预备/未遂/中止；过失犯罪、间接故意没有。</li>
                <li>共同犯罪＝<b>二人以上共同故意</b>；共同过失、超出共同故意的行为、同时犯、间接正犯<b>不成立</b>共犯。</li>
                <li>分类：主犯、从犯（应当从轻、减轻或免除）、胁从犯（应当减轻或免除）、教唆犯。</li>
                <li>教唆不满 18 周岁的人犯罪<b>应当从重</b>；被教唆人未犯被教唆之罪，教唆犯可以从轻或减轻（<b>无「教唆罪」</b>）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题100 · 犯罪形态（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某男在公交上窃取老人 8000 元，下车后心生悔意，返回将 7500 元塞回老人包中，自留 500 元，后被抓获。其犯罪形态属于：</ExampleQuestion>
                <ExampleOptions>A.犯罪中止　B.犯罪未遂　C.犯罪预备　D.犯罪既遂</ExampleOptions>
                <ExampleAnswer><b>解析：</b>财物已脱离控制、犯罪已<b>既遂</b>；既遂后返还不成立中止（返还数额只影响量刑）。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>5. 刑罚（数字密集）</BlockTitle>
              <DataTable>
                <tr><th>主刑</th><th>期限</th><th>要点</th></tr>
                <tr><td>管制</td><td><b>3 个月–2 年</b>（数罪并罚不超 3 年）</td><td>不关押、社区矫正、<b>同工同酬</b>；羁押 1 日折抵 2 日</td></tr>
                <tr><td>拘役</td><td><b>1–6 个月</b>（并罚不超 1 年）</td><td>公安机关就近执行；每月可回家 1–2 天；羁押 1 日折抵 1 日</td></tr>
                <tr><td>有期徒刑</td><td><b>6 个月–15 年</b>；并罚总和＜35 年最高 20 年，≥35 年最高 25 年</td><td>羁押 1 日折抵 1 日</td></tr>
                <tr><td>无期徒刑</td><td>终身</td><td>羁押<b>不折抵</b>；必须附加剥夺政治权利终身</td></tr>
                <tr><td>死刑</td><td>—</td><td>不满 18 周岁、审判时怀孕妇女不适用；审判时已满 75 周岁原则上不适用（特别残忍致人死亡除外）；死缓 2 年</td></tr>
              </DataTable>
              <PointList>
                <li>附加刑四种：<b>罚金、剥夺政治权利、没收财产、驱逐出境</b>（可独立适用）。</li>
                <li>应当附加剥夺政治权利：<b>危害国家安全</b>的犯罪分子、被判处<b>死刑或无期徒刑</b>者。</li>
                <li>剥夺政治权利内容：选举权与被选举权；言论出版集会结社游行示威自由；担任国家机关职务；担任国有单位领导职务。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题101 · 刑罚（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列描述中，错误的是：</ExampleQuestion>
                <ExampleOptions>A.拘役的期限为一个月以上六个月以下<br />B.拘役的刑期从判决执行之日起计算<br />C.有期徒刑的刑期从判决执行之日起计算<br />D.有期徒刑判决执行以前先行羁押的，羁押一日折抵刑期二日</ExampleOptions>
                <ExampleAnswer><b>解析：</b>D 错。有期徒刑羁押 1 日折抵 <b>1 日</b>；折抵 2 日的是<b>管制</b>。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>6. 量刑与高频罪名</BlockTitle>
              <PointList>
                <li><b>一般累犯</b>：前罪有期徒刑以上、刑罚执行完毕或赦免后 <b>5 年内</b>再犯应判有期徒刑以上之罪。<b>特别累犯</b>：危害国家安全、恐怖活动、黑社会性质组织犯罪，<b>任何时候</b>再犯同类。</li>
                <li>累犯<b>应当从重</b>，<b>不适用缓刑和假释</b>。</li>
                <li><b>自首</b>：自动投案 + 如实供述（含被采取强制措施后供述司法机关未掌握的其他罪行）；可以从轻或减轻，犯罪较轻可免除。<b>被扭送不算自动投案</b>。</li>
                <li>立功：揭发他人犯罪查证属实、提供重要线索破案；可以从轻或减轻，重大立功可减轻或免除。</li>
                <li><b>交通肇事罪</b>：违反交通法规致重大事故；指使强令违章驾驶、指使逃逸致死的以共犯论；<b>肇事后隐藏遗弃被害人致死→故意杀人/伤害</b>。</li>
                <li><b>危险驾驶罪</b>：追逐竞驶情节恶劣；<b>醉驾（血液酒精含量 ≥80 毫克/100 毫升）</b>；严重超员超速；违规运输危险化学品。</li>
                <li><b>妨害安全驾驶罪</b>：对行驶中的公共交通工具驾驶人使用暴力或抢控操纵装置。</li>
                <li><b>间谍罪</b>：参加间谍组织、接受其任务、<b>为敌人指示轰击目标</b>（三种行为）。</li>
                <li><b>为境外窃取、刺探、收买、非法提供国家秘密、情报罪</b>：为<b>境外的机构、组织、个人</b>，以<b>窃取、刺探、收买、非法提供</b>方式获取或提供<b>国家秘密或情报</b>。与间谍罪的分界是<b>是否与间谍组织挂钩</b>。</li>
                <li><b>贪污罪</b>：国家工作人员利用职务便利侵吞窃取骗取公共财物；<b>受赠礼物应交公而不交公</b>数额较大亦以贪污论。</li>
                <li><b>挪用公款罪</b>：非法活动（不限数额与时间）、营利活动（数额较大）、其他使用（数额较大且<b>超 3 个月未还</b>）。</li>
                <li><b>受贿罪</b>：索贿或收受财物并为他人谋利（正当与不正当利益均算）；<b>斡旋受贿</b>以受贿论。</li>
                <li><b>行贿罪</b>：为谋取<b>不正当利益</b>给予财物；被勒索且未获不正当利益<b>不是行贿</b>；为正当利益给予财物<b>不是行贿</b>。</li>
                <li><b>利用影响力受贿罪</b>：近亲属或其他关系密切人，通过国家工作人员职务行为为请托人谋取<b>不正当利益</b>收受财物。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题102 · 量刑（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列哪一情形可以认定为自首？</ExampleQuestion>
                <ExampleOptions>A.小孙因聚众斗殴被捕，讯问时主动交代 1 个月前盗窃 10 部手机<br />B.小马主动投案交代电诈，但审讯时隐瞒同伙罪行<br />C.小张醉驾肇事致人死亡后报案，审讯结束后逃跑<br />D.小沈过失致人重伤，被朋友扭送至公安局后交代案情</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 属「被采取强制措施后如实供述司法机关<b>还未掌握</b>的其他罪行」，以自首论。B 未如实供述；C 未接受审查、逃避；D 被扭送不属自动投案。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
