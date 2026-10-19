import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 五、马克思主义政治经济学
 *
 * @returns 该节正文。
 */
export default function S6(): ReactElement {
  return (
    <>
      <Callout variant="key">政经的题几乎都围绕一句：<b>具体劳动创造使用价值，抽象劳动形成价值；价值量由社会必要劳动时间决定</b>。把这条主链记住，其余都是分支。</Callout>
      
            <Block>
              <BlockTitle>1. 商品二因素与劳动二重性</BlockTitle>
              <PointList>
                <li>商品是<b>用来交换的、能满足人的某种需要的劳动产品</b>；二因素＝<b>使用价值 + 价值</b>。</li>
                <li>使用价值：商品的有用性，是<b>自然属性</b>；价值：凝结在商品中的<b>无差别的一般人类劳动</b>，是<b>社会属性</b>，是商品最本质的因素。</li>
                <li>二者关系：<b>使用价值是价值的物质承担者</b>，没有合格的使用价值，价值不能实现。</li>
                <li>劳动二重性：<b>具体劳动</b>创造使用价值，<b>抽象劳动</b>形成价值；二者是<b>同一劳动过程中不可分割的两个方面</b>（不是两种劳动）。</li>
                <li>逻辑顺序：<b>生产商品的劳动二重性决定商品的二因素</b>（不是反过来）。</li>
                <li>劳动二重性学说是理解马克思主义政治经济学的<b>枢纽</b>。</li>
              </PointList>
              <Callout variant="warn">「有使用价值的东西就是商品」× —— 自给自足的粮食有使用价值但不是商品；商品必须同时是<b>劳动产品 + 用于交换</b>。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题23 · 商品二因素（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于商品二因素与劳动二重性，下列说法错误的是：</ExampleQuestion>
                <ExampleOptions>A.使用价值是商品的自然属性<br />B.具体劳动创造商品的使用价值，抽象劳动形成商品的价值<br />C.商品的二因素决定生产商品的劳动二重性<br />D.劳动二重性学说是理解马克思主义政治经济学的枢纽</ExampleOptions>
                <ExampleAnswer><b>解析：</b>C 因果颠倒。是<b>劳动二重性决定商品二因素</b>。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 价值量与价值规律</BlockTitle>
              <PointList>
                <li>价值量由生产商品的<b>社会必要劳动时间</b>决定（不是个别劳动时间）。</li>
                <li>单位商品价值量与<b>社会劳动生产率成反比</b>；与个别劳动生产率无关（个别企业提高效率获得超额剩余价值）。</li>
                <li>价值规律：<b>价值决定价格，价格围绕价值上下波动</b>（不是价值围绕价格）。</li>
                <li>价值规律的作用：调节资源配置、刺激技术进步、促进优胜劣汰。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题24 · 价值量（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于商品价值量，下列说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.由生产该商品的个别劳动时间决定<br />B.与社会劳动生产率成正比<br />C.由社会必要劳动时间决定<br />D.价值围绕价格上下波动</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 错，由<b>社会必要劳动时间</b>决定；B 错，成<b>反比</b>；D 错，是<b>价格围绕价值</b>波动。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 货币的本质与职能</BlockTitle>
              <PointList>
                <li>货币是<b>固定地充当一般等价物的商品</b>；本质是<b>一般等价物</b>。</li>
                <li>五大职能：价值尺度、流通手段、贮藏手段、支付手段、世界货币。</li>
                <li><b>两个最基本职能：价值尺度 + 流通手段</b>。</li>
                <li>价值尺度：<b>只需要观念上的货币</b>；流通手段：<b>必须是现实的货币</b>。</li>
                <li>贮藏手段：必须是<b>足值的金属货币</b>；支付手段：赊购赊销、租金、税金、工资。</li>
                <li>货币产生后，商品交换从「物物交换」变为「商品—货币—商品」，<b>买和卖在时间与空间上分离</b>，产生了经济危机的可能性。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题25 · 货币职能（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于货币职能，下列说法错误的是：</ExampleQuestion>
                <ExampleOptions>A.价值尺度和流通手段是货币的两个最基本职能<br />B.货币履行价值尺度职能时必须是现实的货币<br />C.货币的本质是一般等价物<br />D.支付手段可用于缴纳租金、税金和发放工资</ExampleOptions>
                <ExampleAnswer><b>解析：</b>B 错。价值尺度<b>只需观念上的货币</b>，流通手段才必须是现实货币。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 剩余价值与资本</BlockTitle>
              <PointList>
                <li>剩余价值是雇佣工人创造的、被资本家<b>无偿占有</b>的超过劳动力价值的那部分价值；体现<b>剥削与被剥削</b>关系。</li>
                <li><b>剩余价值规律是资本主义的基本规律</b>。</li>
                <li>绝对剩余价值：<b>必要劳动时间不变，延长劳动日</b>。</li>
                <li>相对剩余价值：<b>工作日不变，缩短必要劳动时间</b>，靠<b>全社会劳动生产率提高</b>实现。</li>
                <li>不变资本（c）＝生产资料；可变资本（v）＝劳动力；划分依据是<b>在剩余价值生产中的不同作用</b>，目的是揭示<b>剩余价值的来源</b>和计算<b>剥削程度</b>（m/v）。</li>
                <li><b>剩余价值率</b> m′＝m ÷ v（剩余价值 ÷ 可变资本），反映资本家对工人的<b>剥削程度</b>；利润率 p′＝m ÷ (c + v)，掩盖了剥削来源。</li>
                <li>资本有机构成＝由<b>技术构成决定</b>并反映技术构成变化的<b>价值构成</b>（c∶v）。</li>
                <li>资本积累 → 资本有机构成提高 → 相对过剩人口 → 两极分化。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题26 · 剩余价值（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于剩余价值，下列说法正确的有：<br />①剩余价值规律是资本主义的基本规律<br />②相对剩余价值以提高全社会劳动生产率为前提<br />③不变资本是以劳动力形态存在的那部分资本<br />④划分不变资本与可变资本为确定剥削程度提供了依据</ExampleQuestion>
                <ExampleOptions>A.①②③　B.①②④　C.②③④　D.①③④</ExampleOptions>
                <ExampleAnswer><b>解析：</b>③错，<b>不变资本是生产资料</b>，可变资本才是劳动力。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
