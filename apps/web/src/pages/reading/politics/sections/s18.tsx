import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十八、行政法
 *
 * @returns 该节正文。
 */
export default function S19(): ReactElement {
  return (
    <>
      <Callout variant="key">行政法只考两件事：<b>这件事归谁管</b>、<b>多少天之内</b>。把「60 日申请复议 / 5 日受理 / 60 日决定 / 6 个月起诉」这条链背顺，行政法就稳了。</Callout>
      
            <Block>
              <BlockTitle>1. 概述与六大原则</BlockTitle>
              <PointList>
                <li>抽象行政行为＝制定行政法规、规章、有普遍约束力的决定命令（<b>不可直接起诉</b>）；具体行政行为＝对特定人特定事项作出的单方行为（<b>可诉</b>）。</li>
                <li>效力：<b>拘束力</b>（必须遵守）、<b>确定力</b>（非经法定程序不得随意变更）、<b>执行力</b>（可强制执行）。</li>
                <li>合法行政：法律优先（法已规定不可违）、法律保留（法无规定不可为）。</li>
                <li>合理行政：公平公正、考虑相关因素、<b>比例原则</b>（合目的、适当、损害最小）。</li>
                <li>程序正当：公开、公众参与、回避。</li>
                <li>其他：高效便民、诚实守信（信赖保护）、权责统一。</li>
              </PointList>
              <Callout variant="tip"><b>比例原则考法：</b>能用「轻手段」就不用「重手段」。拆一层违建却要求拆整栋楼＝违反比例原则。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题100 · 行政法原则（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列做法符合比例原则的是：</ExampleQuestion>
                <ExampleOptions>A.打击盗窃时表示要让盗窃者倾家荡产<br />B.因口角即以扰乱社会秩序为由拘留 15 天<br />C.担心核辐射污染，放弃核电改建成本更低的风电<br />D.私自加建两层，房管局要求拆除整栋楼</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A、B 属过度处罚；D 手段明显超过必要限度。C 选择了损害更小的方式。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 行政处罚</BlockTitle>
              <PointList>
                <li>种类：<b>警告</b>（精神罚）；<b>罚款、没收违法所得与非法财物</b>（财产罚）；<b>责令停产停业、暂扣或吊销许可证执照</b>（行为罚）；<b>行政拘留</b>（人身自由罚，只能由公安机关决定执行，1–15 日）。</li>
                <li><b>一事不再罚</b>：同一违法行为不得给予两次以上<b>罚款</b>；违反多个规范应按罚款数额高的规定处罚。</li>
                <li>设定权：法律可设各种；行政法规除<b>限制人身自由</b>外；地方性法规除<b>限制人身自由、吊销营业执照</b>外；规章只能设<b>警告、通报批评、一定数额罚款</b>。</li>
                <li>不予处罚：<b>不满 14 周岁</b>、精神病人发病时；违法行为轻微 + 及时纠正 + 无危害后果；无主观过错（法律另有规定除外）。</li>
                <li>追责时效：<b>2 年</b>内未被发现不再处罚（涉及公民生命健康安全、金融安全且有危害后果的为 <b>5 年</b>）。</li>
                <li>简易程序：<b>一人执法、当场决定、当场送达</b>；公民罚款 <b>200 元以下</b>、法人或其他组织 <b>3000 元以下</b>。</li>
                <li>听证：当事人应在被告知后 <b>5 日内</b>提出；行政机关应在听证 <b>7 日前</b>通知；听证<b>公开</b>举行（涉密除外）；<b>听证费用由行政机关承担</b>。</li>
                <li>执行：罚缴分离；当场收缴限 <b>100 元以下</b>罚款或不当场收缴事后难以执行。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题101 · 行政处罚（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于行政处罚的设定及听证，下列说法错误的是：</ExampleQuestion>
                <ExampleOptions>A.地方性法规可以设定责令停产停业的处罚<br />B.行政法规可以设定吊销营业执照的处罚<br />C.限制人身自由的处罚只能由法律设定<br />D.当事人要求听证的，由当事人承担行政机关组织听证的费用</ExampleOptions>
                <ExampleAnswer><b>解析：</b>D 错。听证费用由<b>行政机关</b>承担，申请人不付费。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 治安管理处罚</BlockTitle>
              <PointList>
                <li>主罚：<b>警告、罚款、行政拘留、吊销公安机关发放的许可证</b>；附加罚：<b>限期出境或驱逐出境</b>（仅限外国人）。</li>
                <li><b>不满 14 周岁</b>不予处罚，责令监护人严加管教；<b>14–18 周岁从轻或减轻</b>。</li>
                <li>从重情形：有较严重后果；教唆胁迫诱骗他人；打击报复报案人举报人证人；<b>一年内曾受过治安管理处罚</b>。</li>
                <li><b>应当给予拘留但不执行</b>：14–16 周岁；16–18 周岁<b>初次</b>违反；<b>70 周岁以上</b>；怀孕或哺乳自己不满 1 周岁婴儿。</li>
                <li>追究时效：<b>6 个月</b>内未被发现不再处罚。</li>
                <li>因民间纠纷引起的，公安机关<b>可以</b>调解（不是必须）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题102 · 治安处罚（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>根据《治安管理处罚法》，下列说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.15 周岁张某初次殴打他人致轻微伤，应作出拘留处罚并实际执行<br />B.李某 1 月赌博、3 月被发现，因超过 1 个月追究时效不再处罚<br />C.美国游客汤姆在我国扰乱公共场所秩序，可罚款并处限期出境<br />D.邻里纠纷致轻微伤，公安机关必须先调解再处罚</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 错，14–16 周岁<b>应当给予拘留但不执行</b>；B 错，治安处罚追究时效是<b>6 个月</b>，不是 1 个月；D 错，调解是「<b>可以</b>」不是「必须」。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 行政许可与行政强制</BlockTitle>
              <PointList>
                <li>许可决定：受理之日起 <b>20 日内</b>作出，经批准可延长 <b>10 日</b>。</li>
                <li>许可听证：当事人被告知后 <b>5 日内</b>申请，行政机关 <b>20 日内</b>组织。</li>
                <li>许可撤销：机关违法（滥用职权、超越职权、违反程序等）<b>可以撤销</b>；申请人欺骗贿赂取得<b>应当撤销</b>，涉及公共安全/人身健康/生命财产的 <b>3 年内不得再申请</b>；撤销可能重大损害公共利益的<b>不予撤销</b>。</li>
                <li>行政强制措施：限制人身自由、查封、扣押、冻结（<b>暂时性控制</b>）；不得查封扣押生活必需品；不得重复冻结。</li>
                <li>行政强制执行：加处罚款/滞纳金、划拨存款、拍卖、排除妨碍恢复原状、代履行；<b>不得在夜间或法定节假日实施</b>（紧急除外）；<b>不得停水停电停热停气</b>迫使履行。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题103 · 许可与强制（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于行政许可与行政强制，下列说法错误的是：</ExampleQuestion>
                <ExampleOptions>A.行政许可一般应自受理之日起 20 日内作出决定<br />B.以欺骗、贿赂手段取得的许可应当撤销<br />C.行政机关可在夜间实施强制执行，无需任何限制<br />D.不得对居民采取停止供水供电方式迫使履行</ExampleOptions>
                <ExampleAnswer><b>解析：</b>C 错。除情况紧急外，<b>不得在夜间或法定节假日</b>实施行政强制执行。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>5. 行政复议与行政诉讼</BlockTitle>
              <PointList>
                <li>复议范围：具体行为、不作为、行政协议、政府信息公开；<b>附带审查</b>部分抽象行为（<b>不含规章</b>）；<b>不审查</b>抽象行为、国防外交、<b>行政处分</b>、行政调解。</li>
                <li>复议期限：知道行为之日起 <b>60 日</b>内申请；机关 <b>5 日</b>内决定是否受理；受理后 <b>60 日</b>内作出决定。</li>
                <li><b>复议前置</b>五种：当场作出的处罚、侵犯已取得自然资源所有权/使用权的决定、未履行法定职责、政府信息公开不予公开、法律行政法规规定的其他情形。</li>
                <li>诉讼被告：复议<b>改变</b>→复议机关；复议<b>维持</b>→原机关与复议机关<b>共同被告</b>；复议机关不作为→按起诉对象确定。</li>
                <li>委托组织行为→<b>委托的行政机关</b>为被告；授权组织→<b>该组织</b>；经上级批准→<b>署名机关</b>；共同行为→共同被告。</li>
                <li>管辖：对国务院部门或县级以上地方政府提起诉讼、海关案件→<b>中级人民法院</b>；不动产→不动产所在地；限制人身自由→被告所在地或原告所在地。</li>
                <li>行政机关负责人应<b>出庭应诉</b>（告官要见官）；不能出庭的应委托相应工作人员出庭。</li>
                <li><b>举证责任倒置</b>：被告（行政机关）对作出的行政行为负举证责任，应提供证据和所依据的规范性文件。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题104 · 行政复议（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列行为不服，但不能提起行政复议的是：</ExampleQuestion>
                <ExampleOptions>A.生态环境局吊销排污许可证<br />B.公安局扣押企业全部生产设备<br />C.派出所调解达成医疗费赔偿协议<br />D.镇政府命令解除农场承包合同</ExampleOptions>
                <ExampleAnswer><b>解析：</b>C 属<b>行政调解</b>，不在复议范围（调解靠自愿履行/民事诉讼）。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>6. 行政赔偿</BlockTitle>
              <PointList>
                <li>国家承担：行使职权侵犯人身权、财产权；不履行或拖延履行法定职责。</li>
                <li>国家不承担：<b>与行使职权无关的个人行为</b>；因当事人自己行为致害；法律规定的其他情形。</li>
                <li>赔偿义务机关：谁侵权找谁；<b>受委托组织/个人侵权→委托的行政机关</b>；派出机构侵权→派出它的机关；共同侵权→共同赔偿。</li>
                <li>复议情形：未加重→原机关；<b>加重→原机关赔、复议机关对加重部分赔</b>。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题105 · 行政赔偿（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列属于国家不承担赔偿责任情形的是：</ExampleQuestion>
                <ExampleOptions>A.违法征收征用财物<br />B.违法吊销许可证致害<br />C.行政机关工作人员实施的与行使职权无关的个人行为<br />D.行政机关采取暴力致害</ExampleOptions>
                <ExampleAnswer><b>解析：</b>与职权无关的个人行为由个人承担，国家不赔。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
