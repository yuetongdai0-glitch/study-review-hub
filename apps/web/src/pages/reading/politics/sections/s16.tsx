import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十六、民法（民法典）
 *
 * @returns 该节正文。
 */
export default function S17(): ReactElement {
  return (
    <>
      <Callout variant="key">民法是「数字 + 主体」的考试：<b>8 岁、18 岁、16 岁、3 年、20 年、30 日、20%</b>。每个数字后面都要能说出一件事，否则等于没背。</Callout>
      
            <Block>
              <BlockTitle>1. 民事权利能力与行为能力（数字核心）</BlockTitle>
              <PointList>
                <li>权利能力：<b>始于出生、终于死亡</b>；涉及遗产继承、接受赠与，<b>胎儿视为具有</b>权利能力，但娩出时为死体的自始不存在。</li>
                <li><b>完全</b>民事行为能力：已满 <b>18 周岁</b>；或 <b>16 周岁以上</b>并以自己的劳动收入为主要生活来源（视为完全）。</li>
                <li><b>限制</b>民事行为能力：<b>8 周岁以上不满 18 周岁</b>；不能完全辨认自己行为的成年人。</li>
                <li><b>无</b>民事行为能力：<b>不满 8 周岁</b>；不能辨认自己行为的成年人及 8 周岁以上不能辨认的未成年人。</li>
                <li>考点延伸：6 岁儿童获奖，奖金归<b>其本人</b>（权利能力自出生即有），父母代为管理。</li>
              </PointList>
              <Callout variant="formula"><span className="formula">＜8 无 ｜ 8–18 限制 ｜ ≥18 完全 ｜ 16–18 且以劳动收入为主＝视为完全</span></Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题91 · 民事行为能力（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>张强今年 17 岁，辍学打工，每月收入 3000 元。根据《民法典》，张强：</ExampleQuestion>
                <ExampleOptions>A.属于无民事行为能力人<br />B.属于限制民事行为能力人<br />C.可视为完全民事行为能力人<br />D.属于部分民事行为能力人</ExampleOptions>
                <ExampleAnswer><b>解析：</b>16 周岁以上、以自己的劳动收入为主要生活来源的，<b>视为完全民事行为能力人</b>。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 民事法律行为的效力（四分类）</BlockTitle>
              <PointList>
                <li><b>有效</b>三要件：有相应行为能力、意思表示真实、不违反强制性规定与公序良俗。</li>
                <li><b>无效</b>：无行为能力人实施；虚假意思表示；违反强制性规定；违背公序良俗；<b>恶意串通损害他人</b>。</li>
                <li><b>效力待定</b>：限制行为能力人超越能力范围；无权代理。相对人可催告，<b>30 日内</b>未表示视为拒绝追认；善意相对人可撤销。</li>
                <li><b>可撤销</b>：重大误解（90 日）、欺诈（1 年）、显失公平（1 年）、胁迫（自胁迫终止起 1 年）；<b>最长 5 年</b>（自行为发生起）。</li>
                <li>欺诈签订的合同<b>可撤销而非当然无效</b>；已过户的，善意取得制度可能保护受让人。</li>
              </PointList>
              <Callout variant="tip"><b>一句话分「无效 / 可撤销」：</b>违法背俗、虚假串通、无能力 → <b>无效</b>；被坑被骗被胁迫、自己搞错 → <b>可撤销</b>。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题92 · 行为效力（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>甲（10 岁）开发出一套游戏软件，以 1000 元卖给某软件公司。下列说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.该买卖行为有效<br />B.该买卖行为效力待定<br />C.未签署书面合同，行为无效<br />D.甲为限制民事行为能力人，行为无效</ExampleOptions>
                <ExampleAnswer><b>解析：</b>10 岁属限制行为能力人，出卖软件超越其能力范围，属<b>效力待定</b>，经法定代理人追认后有效。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 诉讼时效</BlockTitle>
              <PointList>
                <li>普通诉讼时效：<b>3 年</b>，自知道或应当知道权利受损害<b>及义务人</b>之日起算。</li>
                <li>最长保护期间：<b>20 年</b>，自权利受损害之日起算，特殊情况可申请延长。</li>
                <li>特殊起算：分期履行的自<b>最后一期</b>届满起算；对法定代理人的请求权自<b>代理终止</b>起算；未成年人遭性侵的损害赔偿自<b>年满 18 周岁</b>起算。</li>
                <li><b>不适用</b>诉讼时效：停止侵害/排除妨碍/消除危险；<b>不动产物权和登记的动产物权</b>请求返还财产；请求支付抚养费、赡养费、扶养费。</li>
                <li>中止与中断：中止＝障碍（不可抗力）消除后满 6 个月届满；中断＝重新起算 3 年（主张权利、起诉、对方同意履行）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题93 · 诉讼时效（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列情形不适用诉讼时效的是：①要求邻居拆除妨碍通行的围墙 ②要求物业修复可能致儿童坠落的下水道 ③要求长期占用其房屋的人搬离 ④要求某公司支付专利使用费</ExampleQuestion>
                <ExampleOptions>A.①③④　B.②③④　C.①②③　D.①②④</ExampleOptions>
                <ExampleAnswer><b>解析：</b>①②属停止侵害、排除妨碍、消除危险；③属不动产物权请求返还财产；④是债权请求权，<b>适用</b>诉讼时效。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 物权与债权</BlockTitle>
              <PointList>
                <li>物权变动：<b>不动产登记生效</b>；<b>动产交付生效</b>；船舶、航空器、机动车未经登记<b>不得对抗善意第三人</b>。</li>
                <li><b>善意取得</b>四要件：出让人无处分权、受让人善意、合理价格、已登记或已交付；<b>遗失物、盗赃物、埋藏物不适用</b>。</li>
                <li>拾得遗失物应返还；招领公告之日起<b>1 年</b>无人认领归<b>国家</b>。</li>
                <li>共有：分<b>按份共有</b>（按份额享有，无约定按出资额，不能确定视为等额）与<b>共同共有</b>（基于共同关系，平等享有，对外连带）；无约定且无家庭/继承/夫妻关系，<b>视为按份共有</b>；转让份额时其他共有人有<b>优先购买权</b>。</li>
                <li>抵押：不动产<b>登记设立</b>；动产<b>合同生效设立</b>，未登记不得对抗善意第三人。质押：<b>交付/登记设立</b>。留置：<b>法定担保物权</b>（修车不给钱可留置）。</li>
                <li>定金：不得超过主合同标的额 <b>20%</b>；<b>定金与违约金不能并用</b>；收定金方违约<b>双倍返还</b>。</li>
                <li>债的发生：合同、侵权、<b>不当得利</b>、<b>无因管理</b>。</li>
                <li>不当得利：无合法根据获利、他人受损、有因果、无依据；返还利益。</li>
                <li>无因管理：无法定或约定义务、为他人谋利、管理他人事务；管理人可请求<b>必要费用</b>与<b>适当补偿</b>（<b>不能要报酬</b>）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题94 · 物权与债（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>甲将汽车送乙维修厂维修，甲拒付维修费时，乙可以行使什么权利，继续占有汽车并拍卖变卖优先受偿？</ExampleQuestion>
                <ExampleOptions>A.保证债权　B.抵押权　C.质权　D.留置权</ExampleOptions>
                <ExampleAnswer><b>解析：</b>债权人合法占有债务人财产、债务已届清偿期而未获清偿，可<b>留置</b>该财产并优先受偿，属法定担保物权。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>5. 婚姻与继承</BlockTitle>
              <PointList>
                <li>结婚年龄：<b>男不得早于 22 周岁，女不得早于 20 周岁</b>；直系血亲和<b>三代以内旁系血亲</b>禁止结婚。</li>
                <li>无效婚姻：重婚、有禁止结婚的亲属关系、未到法定婚龄。</li>
                <li>可撤销婚姻：胁迫（自胁迫终止起 1 年；被限制人身自由的自恢复自由起 1 年）；隐瞒重大疾病（自知道起 1 年）。</li>
                <li>协议离婚：<b>30 日冷静期</b>；期满后 30 日内双方亲自申请发证，未申请视为撤回。</li>
                <li>夫妻共同财产：工资奖金劳务报酬、生产经营投资收益、知识产权收益、继承或受赠（未指明归一方的）。</li>
                <li>个人财产：婚前财产、人身损害赔偿、遗嘱/赠与指明只归一方、专用生活用品。</li>
                <li>法定继承顺序：<b>第一顺序＝配偶、子女、父母</b>；第二顺序＝兄弟姐妹、祖父母、外祖父母；<b>丧偶儿媳/女婿尽主要赡养义务的，为第一顺序</b>。</li>
                <li><b>代位继承</b>：被继承人子女<b>先于</b>被继承人死亡，由其直系晚辈血亲代位（兄弟姐妹先死，由其子女代位）。</li>
                <li><b>转继承</b>：继承人在被继承人死亡<b>后、遗产分割前</b>死亡，其应继份额转由其合法继承人继承。</li>
              </PointList>
              <Callout variant="warn"><b>代位 vs 转继承</b>：一个「死在前面」（代位），一个「死在后面」（转）。这是继承题唯一的难点。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题95 · 继承（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>老张去世未留遗嘱，其妻李某健在，有次子、女儿各一；长子早年去世，留有一子小张。下列属于本案第一顺序继承人的是：</ExampleQuestion>
                <ExampleOptions>A.李某、次子、女儿、小张<br />B.李某、次子、女儿<br />C.次子、女儿、小张<br />D.李某、次子、女儿、小张的母亲</ExampleOptions>
                <ExampleAnswer><b>解析：</b>第一顺序为<b>配偶、子女、父母</b>。长子先于被继承人死亡，其子小张<b>代位继承</b>，仍在第一顺序内；小张的母亲不是老张的继承人（她只能通过转继承取得长子的份额，且本案长子先死、不适用）。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>6. 侵权责任（归责原则是题眼）</BlockTitle>
              <PointList>
                <li>监护人责任：无/限制行为能力人致害，由监护人承担（尽到监护职责可减轻）。</li>
                <li>职务侵权：用人单位承担；可向<b>故意或重大过失</b>的工作人员追偿。</li>
                <li>产品责任：<b>无过错责任</b>，可向生产者或销售者索赔，内部可追偿。</li>
                <li>机动车：机动车之间<b>过错责任</b>；机动车与非机动车/行人<b>无过错责任</b>。</li>
                <li>饲养动物：一般<b>无过错</b>；<b>动物园过错推定</b>（能证明尽到管理职责则免责）；第三人过错可双向索赔。</li>
                <li>教育机构：<b>无行为能力人</b>在校受伤→<b>过错推定</b>；<b>限制行为能力人</b>→<b>过错责任</b>；第三人致害→第三人承担，机构未尽管理职责承担<b>补充责任</b>。</li>
                <li>高空抛物：难以确定侵权人时，由<b>可能加害的建筑物使用人补偿</b>（能证明自己不是的除外），物业未尽安全保障义务承担相应责任。</li>
                <li>公共场所施工：不能证明设置明显标志和采取安全措施的，承担侵权责任；窨井管理人不能证明尽到管理职责的，承担责任。</li>
                <li>经营场所/群众性活动：未尽安全保障义务承担责任；第三人致害的承担<b>补充责任</b>。</li>
                <li>环境污染：<b>无过错责任</b>，故意污染造成严重后果可适用<b>惩罚性赔偿</b>。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题96 · 侵权责任（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>甲到商场购买项链，试戴后在协商价格时因地面湿滑摔倒骨折。下列说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.损失全部由甲自行承担<br />B.售货员承担赔偿责任，商场不承担<br />C.甲为完全民事行为能力人，商场不承担<br />D.商场应承担侵权责任</ExampleOptions>
                <ExampleAnswer><b>解析：</b>商场未尽<b>安全保障义务</b>（地面湿滑未处理），应承担侵权责任。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
