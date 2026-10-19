import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十九、宪法与法理学
 *
 * @returns 该节正文。
 */
export default function S20(): ReactElement {
  return (
    <>
      <Callout variant="key">宪法考「谁有权做什么」，法理考「这句话体现哪个作用」。前者背职权表，后者背五个「作用对象」。</Callout>
      
            <Block>
              <BlockTitle>1. 宪法的特点与修改</BlockTitle>
              <PointList>
                <li>三大特点：内容最根本、<b>具有最高法律效力</b>、制定修改程序最严格。</li>
                <li>效力最高三层：普通法律的依据；不得与宪法原则相违背；一切机关团体公民的<b>最高行为准则</b>。</li>
                <li>修改：<b>全国人大常委会或 1/5 以上全国人大代表提议</b>，<b>全国人大全体代表 2/3 以上</b>通过（普通法律为过半数）。</li>
                <li>历史：1949《共同纲领》（临时宪法）→ 1954 宪法（<b>第一部社会主义类型宪法</b>）→ 1975、1978 → <b>1982 现行宪法</b>。</li>
                <li>五次修正：<b>1988、1993、1999、2004、2018</b>。</li>
                <li>2018 修正要点：确立习近平新时代中国特色社会主义思想；<b>中国共产党领导是中国特色社会主义最本质的特征</b>写入宪法；增加<b>监察委员会</b>；国家工作人员<b>宪法宣誓</b>；主席副主席任期同全国人大每届任期相同（删去「连续任职不得超过两届」）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题106 · 宪法修改（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>有权提出宪法修改有效议案的主体是：</ExampleQuestion>
                <ExampleOptions>A.全国人民代表大会常务委员会<br />B.全国人民代表大会的一个代表团<br />C.十分之一以上的全国人大代表<br />D.全国人民代表大会主席团</ExampleOptions>
                <ExampleAnswer><b>解析：</b>宪法修改由<b>全国人大常委会或 1/5 以上全国人大代表</b>提议。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 国家机构（职权对照）</BlockTitle>
              <DataTable>
                <tr><th>机关</th><th>性质</th><th>关键职权</th></tr>
                <tr><td><b>全国人大</b></td><td>最高国家权力机关、最高立法机关</td><td>修改宪法、制定基本法律；选举主席/副主席、军委主席、监委主任、最高法院长、最高检检察长；<b>批准省自治区直辖市建置</b>、决定特别行政区设立、决定战争与和平</td></tr>
                <tr><td><b>全国人大常委会</b></td><td>全国人大的常设机关</td><td><b>解释宪法和法律</b>；制定非基本法律；决定<b>特赦</b>、宣布战争状态、决定动员、决定紧急状态；任免其他国家机关副职</td></tr>
                <tr><td><b>国家主席</b></td><td>国家元首，独立机关</td><td>公布法律、发布命令、任免国务院组成人员与驻外全权代表、外交权、荣典权（<b>与常委会共同行使</b>）</td></tr>
                <tr><td><b>国务院</b></td><td>最高权力机关的执行机关、最高行政机关</td><td>制定行政法规；<b>批准省级区域划分、自治州县的建置与区域划分</b>；决定省级范围内部分地区紧急状态</td></tr>
                <tr><td><b>监察委</b></td><td>最高监察机关</td><td>领导地方各级监委；主任连续任职不得超过两届</td></tr>
                <tr><td><b>法院 / 检察院</b></td><td>审判机关 / 法律监督机关</td><td>上级法院<b>监督</b>下级；上级检察院<b>领导</b>下级</td></tr>
              </DataTable>
              <Callout variant="warn"><b>最易错：</b>批准省级建置＝<b>全国人大</b>；批准省级<b>区域划分</b>＝<b>国务院</b>；特赦＝<b>全国人大常委会</b>决定、<b>国家主席</b>发布特赦令。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题107 · 国家机构（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>根据我国《宪法》，有权发布特赦令的是：</ExampleQuestion>
                <ExampleOptions>A.全国人民代表大会　B.最高人民法院　C.国家主席　D.国务院</ExampleOptions>
                <ExampleAnswer><b>解析：</b><b>全国人大常委会决定特赦</b>，<b>国家主席发布特赦令</b>。题干问「发布」，故选国家主席。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 公民权利与选举制度</BlockTitle>
              <PointList>
                <li>平等权：<b>法律面前一律平等</b>，<b>不包括立法平等</b>。</li>
                <li>政治权利与自由：选举权与被选举权；言论、出版、集会、结社、游行、示威自由（<b>没有迁徙权</b>）。</li>
                <li>人身自由：人身、人格尊严、住宅、通信自由与通信秘密。</li>
                <li>社会经济权利：劳动权（既是权利也是义务）、休息权、物质帮助权；受教育权（既是权利也是义务）。</li>
                <li><b>公民的基本义务</b>：维护国家统一和民族团结；遵守宪法法律、保守国家秘密、爱护公共财产、遵守劳动纪律与公共秩序、尊重社会公德；维护祖国安全、荣誉和利益；保卫祖国、抵抗侵略，<b>依法服兵役</b>和参加民兵组织；<b>依法纳税</b>。</li>
                <li>选举权条件：<b>年满 18 周岁、中国公民、未被剥夺政治权利</b>。</li>
                <li>直接选举：<b>不设区的市、市辖区、县、自治县、乡、民族乡、镇</b>（县级及以下）；间接选举：全国、省、设区的市、自治州。</li>
                <li>直接选举：<b>过半数选民参加投票有效</b>，候选人获<b>参加投票选民过半数</b>当选；间接选举：候选人须获<b>全体代表过半数</b>当选。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题108 · 公民权利（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>根据宪法规定，下列不属于我国公民政治权利和自由的是：</ExampleQuestion>
                <ExampleOptions>A.选举权和被选举权　B.言论、出版、结社自由　C.集会、游行、示威自由　D.迁徙权</ExampleOptions>
                <ExampleAnswer><b>解析：</b>我国宪法<b>未规定迁徙自由</b>为基本权利。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 法理学：作用、渊源与效力</BlockTitle>
              <PointList>
                <li>五个规范作用（看<b>对象</b>）：<b>指引</b>——自己的行为；<b>评价</b>——他人的行为；<b>预测</b>——人们相互间的行为；<b>教育</b>——一般人的行为；<b>强制</b>——违法犯罪者的行为。</li>
                <li><b>指引作用是最首要的作用</b>。</li>
                <li>正式渊源：宪法（制宪机关＝第一届全国人大第一次会议）、法律（基本法律/非基本法律）、行政法规（国务院）、地方性法规（省级/设区的市，市级须报批准）、规章（部门规章/地方政府规章）、自治法规（须报批准）、经济特区法规、特区法律、国际条约惯例。</li>
                <li>效力层次：<b>宪法 ＞ 法律 ＞ 行政法规 ＞ 地方性法规/规章</b>；地方性法规与部门规章<b>同等效力</b>，冲突时由国务院提出意见，若适用部门规章须提请<b>全国人大常委会裁决</b>。</li>
                <li>同一位阶：<b>特别法优于一般法、新法优于旧法</b>。</li>
                <li>法的实施：<b>守法</b>（一切组织和个人）、<b>执法</b>（行政机关）、<b>司法</b>（法院检察院）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题109 · 法理（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>法律能够为人们提供既定的行为模式，使人们在法律范围内活动。法律最首要的作用是：</ExampleQuestion>
                <ExampleOptions>A.教育作用　B.评价作用　C.预测作用　D.指引作用</ExampleOptions>
                <ExampleAnswer><b>解析：</b>为行为人本人提供行为模式，是<b>指引作用</b>，也是法最首要的作用。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
