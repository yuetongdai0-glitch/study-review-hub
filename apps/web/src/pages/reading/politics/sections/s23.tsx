import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 二十三、专项提升补漏（提升课独有的高频考点）
 *
 * @returns 该节正文。
 */
export default function S24(): ReactElement {
  return (
    <>
      <Callout variant="key">这一节收的是<b>《理论讲练》没细讲、但专项提升课反复强调</b>的考点：做题方法、党史冷门会议、宪法细节、许可四分、财产犯罪四分。国省考里这些点「不讲不会、一讲就懂」，属于纯捡分。</Callout>
      
            <Block>
              <BlockTitle>1. 政治理论做题法（比多背 10 条更有用）</BlockTitle>
              <PointList>
                <li>政治理论题的主流问法是<b>「下列说法正确 / 错误的是」</b>，命题人靠<b>替换关键词</b>和<b>颠倒两个关键词顺序</b>挖坑。</li>
                <li>所以做题时<b>不要找正确，要「找错误 / 找坑排除」</b>：能判定错就打 × 排除；<b>不能判定错，哪怕模棱两可，也按默认正确处理</b>。</li>
                <li>选项里出现「唯一」「全部」「都」「一律」「根本」「最」时，逐字核对；出现两个近义定位词（根本/基本、核心/关键、前提/基础）时，先怀疑被换位。</li>
                <li>四个选项都不确定时，选<b>表述最规范、最像文件原文</b>的那一项。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题111 · 做题法（提升课）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于政治理论题的作答策略，下列说法最恰当的是：</ExampleQuestion>
                <ExampleOptions>A.先找表述最「正能量」的选项<br />B.以「找错误」为主，能判定错误就排除，不能判定则视为正确<br />C.四个选项都不确定时应空着<br />D.凡出现「根本」的选项一律判错</ExampleOptions>
                <ExampleAnswer><b>解析：</b>命题靠替换与颠倒关键词挖坑，因此应<b>找错误排除</b>；无法判定即默认正确，避免误杀。B 正确。A 无依据；C 不能空题；D 绝对化（「根本」本身常用于正确表述）。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 党史与 2035 指标补漏</BlockTitle>
              <PointList>
                <li><b>中共六大</b>（1928，莫斯科）：<b>唯一一次在国外召开</b>的党代会。</li>
                <li><b>中共七大</b>（1945，延安）：把<b>毛泽东思想</b>确立为党的指导思想并写入党章。</li>
                <li>「两个维护」：坚决维护习近平总书记党中央的核心、全党的核心地位，坚决维护党中央权威和集中统一领导。</li>
                <li>「四个意识」：<b>政治意识、大局意识、核心意识、看齐意识</b>。</li>
                <li><b>2035 年远景目标</b>：人均 GDP 达到<b>中等发达国家水平</b>；进入<b>创新型国家前列</b>；共同富裕取得<b>明显的实质性进展</b>；建成经济强国、人才强国、文化强国、教育强国、体育强国、健康中国。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题112 · 党史（提升课）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于党的全国代表大会，下列说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.中共六大是唯一一次在国外召开的党代会<br />B.中共七大提出了彻底的反帝反封建民主革命纲领<br />C.中共二大把毛泽东思想写入党章<br />D.中共五大确立了「联俄、联共、扶助农工」三大政策</ExampleOptions>
                <ExampleAnswer><b>解析：</b>B 是<b>二大</b>；C 颠倒，七大才把毛泽东思想写入党章；D 是<b>国民党一大</b>。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 宪法细节：国旗国徽、国籍、自治权、选举</BlockTitle>
              <PointList>
                <li><b>国旗</b>：五星红旗。大星代表中国共产党，四颗小星代表人民；<b>黄色</b>象征「红地上显现光明」；四颗小星各有一个角<b>正对大星中心</b>，象征围绕中心团结。</li>
                <li><b>国徽</b>：国旗、天安门、<b>齿轮和谷穗</b>、五星；<b>国歌</b>：《义勇军进行曲》。</li>
                <li><b>国籍</b>：取得方式有<b>出生国籍</b>（父母一方为中国公民等）与<b>继有国籍</b>（申请批准加入）；<b>不承认双重国籍</b>。</li>
                <li><b>民族区域自治权</b>：① 制定<b>自治条例和单行条例</b>（自治区报全国人大常委会批准，州、县报省级人大常委会批准）；② <b>变通执行权</b>；③ 自主安排地方财政、经济建设；④ 自主管理科教文卫体，<b>组织公安部队须经国务院批准</b>；⑤ 使用和发展本民族语言文字。</li>
                <li><b>选举细节</b>：<b>直接选举＝县、乡两级</b>（选举委员会主持）；<b>间接选举＝全国、省、设区的市三级</b>；<b>秘密投票</b>（无记名）；<b>一人一票、同票同权</b>；选举权是「享有」与「行使」两个层面。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题113 · 宪法细节（提升课）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于我国宪法与选举制度，下列说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.直接选举适用于县、乡两级，由选举委员会主持<br />B.民族自治地方组织公安部队无需任何批准<br />C.我国公民可以同时拥有中国和外国国籍<br />D.国徽由国旗、天安门、镰刀锤头和谷穗组成</ExampleOptions>
                <ExampleAnswer><b>解析：</b>B 错，须经<b>国务院批准</b>；C 错，<b>不承认双重国籍</b>；D 错，国徽是国旗、天安门、<b>齿轮</b>和谷穗、五星。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 行政许可「四分」与复议管辖口诀</BlockTitle>
              <DataTable>
                <tr><th>情形</th><th>含义</th></tr>
                <tr><td><b>撤销</b></td><td><b>证有问题</b>——取得许可的过程中存在违法（滥用职权、欺骗贿赂等）</td></tr>
                <tr><td><b>吊销</b></td><td><b>证没问题、行为有问题</b>——实施许可过程中严重违法</td></tr>
                <tr><td><b>撤回</b></td><td><b>客观情况变化</b>——许可所依据的法律、法规、规章修改或废止，或客观情况发生重大变化</td></tr>
                <tr><td><b>注销</b></td><td><b>无法继续其效力</b>——许可有效期届满未延续、主体终止等</td></tr>
              </DataTable>
              <PointList>
                <li>行政强制措施种类：<b>限制公民人身自由、查封场所设施财物、扣押财物、冻结存款汇款</b>（都是<b>暂时性</b>控制）。</li>
                <li>复议管辖口诀：<b>「复议找上级，省部找自己」</b>——对县级以上政府部门不服找本级政府或上一级主管部门；对省部级机关不服找本机关（原机关复议）。</li>
                <li>海关、金融、外汇、税务、国家安全机关：<b>垂直领导，只找上一级主管部门</b>。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题114 · 许可四分（提升课）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某企业以虚假材料骗得施工许可，后被查实。行政机关收回该许可的行为属于：</ExampleQuestion>
                <ExampleOptions>A.吊销　B.撤回　C.撤销　D.注销</ExampleOptions>
                <ExampleAnswer><b>解析：</b>「证有问题」——取得许可过程中存在违法（欺骗），应<b>撤销</b>。吊销是证合法但实施中违法；撤回是客观情况变化；注销是效力无法继续。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>5. 刑法：财产犯罪四分与职务犯罪辨析</BlockTitle>
              <DataTable>
                <tr><th>罪名</th><th>行为结构</th></tr>
                <tr><td><b>盗窃</b></td><td>他人<b>占有</b> → <b>平和手段</b> → 转移为自己占有</td></tr>
                <tr><td><b>诈骗</b></td><td>虚构/隐瞒 → 对方<b>产生认识错误</b> → 基于错误<b>处分财产</b> → 行为人取得</td></tr>
                <tr><td><b>侵占</b></td><td>他人所有、<b>自己合法占有</b> → 变自己所有（拒不退还）</td></tr>
                <tr><td><b>抢夺</b></td><td>他人占有 → <b>趁人不备、公然夺取</b>（对物暴力，不对人）</td></tr>
              </DataTable>
              <PointList>
                <li><b>信用卡诈骗</b>：使用伪造的、作废的信用卡，或<b>冒用他人信用卡</b>，或恶意透支。</li>
                <li><b>挪用公款罪</b>（国家工作人员 + 利用职务便利 + 挪公款归个人使用）vs <b>职务侵占罪</b>（普通公司企业人员 + 利用职务便利 + 占本单位财物）。主体身份是分水岭。</li>
                <li><b>自诉案件</b>（告诉才处理）：侮辱、诽谤、暴力干涉婚姻自由、虐待、侵占（五类，一般需被害人告诉）。</li>
                <li>刑事责任年龄速记：<b>12–14「两故」</b>（故意杀人、故意伤害致重伤死亡）；<b>14–16「两故两抢两毒两爆」</b>——故意杀人/故意伤害致重伤死亡、抢劫/强奸、贩卖毒品、放火/爆炸/投放危险物质。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题115 · 财产犯罪（提升课）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>甲谎称能帮乙办理入学，乙信以为真交付 5 万元，甲收款后并未办理。甲的行为构成：</ExampleQuestion>
                <ExampleOptions>A.盗窃罪　B.诈骗罪　C.侵占罪　D.抢夺罪</ExampleOptions>
                <ExampleAnswer><b>解析：</b>甲虚构事实 → 乙产生认识错误 → 乙基于错误<b>主动处分</b>财产 → 甲取得，符合<b>诈骗</b>的行为结构。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>6. 民法补漏：区分所有、遗失物、离婚、定金</BlockTitle>
              <PointList>
                <li><b>建筑物区分所有权</b>＝<b>专有权</b>（专有部分）＋<b>共有权</b>（道路、绿地、公共场所与设施、物业服务用房）＋<b>管理权</b>（共同管理）。</li>
                <li><b>拾得遗失物</b>：拾得人有<b>通知义务</b>与<b>保管义务</b>，可请求<b>必要费用</b>；失主<b>悬赏</b>的应按承诺支付报酬；公告后 <b>1 年</b>无人认领归国家。</li>
                <li>民事权利能力：<b>始于出生（胎儿在继承、受赠时视为有）</b>，终于死亡；<b>死者的人格利益</b>（姓名、肖像、名誉、隐私、遗体）由<b>近亲属</b>保护。</li>
                <li><b>诉讼离婚</b>法定情形：重婚或与他人同居、家庭暴力或虐待遗弃、赌博吸毒屡教不改、<b>分居满二年</b>、其他导致感情破裂的情形。</li>
                <li><b>定金合同是实践合同</b>——<b>交付定金时才成立</b>；定金与违约金只能二选一（非违约方择一主张）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题116 · 民法补漏（提升课）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于民法制度，下列说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.小区内的道路、绿地、物业服务用房属于业主共有<br />B.拾得遗失物只能请求必要费用，不能请求悬赏报酬<br />C.定金合同自双方签字时成立<br />D.死者的人格利益不受法律保护</ExampleOptions>
                <ExampleAnswer><b>解析：</b>B 错，失主悬赏的应按承诺支付报酬；C 错，定金合同为<b>实践合同</b>，交付时成立；D 错，死者人格利益由<b>近亲属</b>保护。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
