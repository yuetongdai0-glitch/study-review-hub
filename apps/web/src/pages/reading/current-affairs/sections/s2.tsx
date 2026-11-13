import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'
import { Memo, Mnemonic } from '../mem'

/**
 * 三、2026 时政 · 9—10 月
 *
 * @remarks 内容整理自「2026 年 9 月 / 10 月时政（上、下）」四份讲义。
 * 每月按「学习类（讲话/文章）→ 会议类 → 工程科技类」归类，只留「事件 + 一个关键词」。
 * @returns 该节正文。
 */
export default function Sz2(): ReactElement {
  return (
    <>
      <Callout variant="key">9—10 月是<b>《求是》文章 + 主场外交 + 民生健康</b>三条线：每月一期《求是》必考「文章标题 + 一个核心定位」，上合与金砖考「会议名称 + 中国主张」，10 月还要加<b>全国卫生与健康大会</b>和<b>中朝新鸭绿江大桥</b>。</Callout>
      <Memo title="9—10 月：四条线、八个关键词" sub="这一段的题几乎都在问「哪个文件 / 哪次会议 / 哪个提法」，所以只背「名字 + 定位」，不要背整段。">
        <Mnemonic
          title="四期《求是》一条线"
          hot
          verse={<>17 期<em>管党治党</em>、18 期<em>基础研究</em>、19 期<em>民生建设</em>、20 期<em>从严治党</em>。</>}
          note={<>四期文章标题：17《坚持落实管党治党政治责任》；18《在加强基础研究座谈会上的讲话》；19《加强普惠性、基础性、兜底性民生建设》；20《以更高标准、更实举措推进全面从严治党》。</>}
        />
        <Mnemonic
          title="两场多边 + 一场双边"
          verse={<>上合<em>成员国元首理事会</em> ＋ <em>上合＋</em>会议；金砖<em>第十八次</em>会晤（两阶段）；中美<em>元首会谈</em>。</>}
          note={<>上合与金砖都在 9 月上半月；金砖第十八次会晤分<b>两个阶段</b>，两次讲话都要能对上号。9 月下旬是中美两国元首会谈。</>}
        />
        <Mnemonic
          title="10 月三件事"
          verse={<>卫生与健康大会（<em>健康中国</em>）、第 <em>140</em> 届广交会、中朝<em>新鸭绿江大桥</em>。</>}
          note={<>卫生大会 10 月 12—13 日在北京召开，关键词「医疗服务水平 / 强基工程 / 分级诊疗」；广交会 10 月 14 日贺信，创办 <b>70 年</b>；大桥 10 月 15 日开通，丹东—新义州。</>}
        />
      </Memo>

      <Block>
        <BlockTitle>1. 9 月（上）：一期《求是》+ 两场主场外交</BlockTitle>
        <DataTable>
          <tr><th>事件</th><th>必背关键词</th></tr>
          <tr><td>第 17 期《求是》发表重要文章<b>《坚持落实管党治党政治责任》</b></td><td>党建工作格局：<b>党委抓、书记抓、各有关部门抓、一级抓一级、层层抓落实</b>；树立正确政绩观，<b>从巩固党的执政地位的大局看问题</b></td></tr>
          <tr><td>上合组织<b>成员国元首理事会</b>会议讲话</td><td>「上海精神」；安危共担、合作共赢</td></tr>
          <tr><td><b>「上海合作组织＋」</b>会议讲话</td><td>「上合＋」是<b>扩大合作圈</b>的平台，不是正式成员国机制</td></tr>
          <tr><td>金砖国家领导人<b>第十八次</b>会晤（第一、第二阶段）</td><td>两次讲话分别对应<b>大会发言</b>与<b>专题讨论</b>，别记成「一次会晤一篇讲话」</td></tr>
        </DataTable>
        <Callout variant="warn"><b>易错：</b>「管党治党」的责任主体是<b>党委（党组）</b>，不是纪委；纪委是<b>监督责任</b>。选项常把「主体责任」和「监督责任」对调。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题 1 · 管党治党的责任</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>关于落实管党治党政治责任，下列说法正确的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 党委（党组）负监督责任，纪委负主体责任　B. 党委（党组）负主体责任，纪委负监督责任　C. 责任全部由党委书记个人承担　D. 只要经济工作搞上去，党建可以放一放</ExampleOptions>
          <ExampleAnswer><b>解析：</b>党委（党组）抓<b>主体责任</b>，纪委抓<b>监督责任</b>；且要树立正确政绩观，从巩固党的执政地位的大局看问题，不能用经济指标替代党建。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>2. 9 月（下）：基础研究 + 先进制造 + 平安中国</BlockTitle>
        <PointList>
          <li>第 18 期《求是》文章<b>《在加强基础研究座谈会上的讲话》</b>：<b>基础研究是整个科学体系的源头</b>，是所有技术问题的总机关。</li>
          <li>习近平就<b>发展先进制造业</b>作出重要指示：制造业是立国之本、强国之基。</li>
          <li><b>中共中央政治局会议</b>（9 月）：审议文件、部署下一阶段经济工作。</li>
          <li>习近平同<b>美国总统特朗普</b>举行会谈：管控分歧、拓展合作。</li>
          <li>习近平就<b>建设更高水平平安中国</b>作出重要指示：贯彻<b>总体国家安全观</b>，坚持党的全面领导，统筹发展和安全，<b>惩防并举、标本兼治</b>，强化法治支撑、科技赋能。</li>
          <li><b>全球发展倡议 5 周年</b>高级别对话会（9 月 25 日，纽约联合国总部）贺信：倡议提出 5 年，合作项目已超 <b>120 个</b>，助力落实联合国 <b>2030 年可持续发展议程</b>。</li>
        </PointList>
        <Callout variant="warn"><b>「平安中国」的四个词别记串：</b>统筹<b>发展和安全</b>；<b>惩防并举、标本兼治</b>；<b>法治支撑、科技赋能</b>；提高公共安全治理水平、完善社会治理体系。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题 2 · 基础研究的定位</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>关于基础研究，下列表述与重要文章精神一致的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 基础研究是整个科学体系的源头　B. 基础研究应以短期经济效益为唯一标准　C. 基础研究可以完全由市场自发投入　D. 基础研究与应用研究相互替代</ExampleOptions>
          <ExampleAnswer><b>解析：</b>文章强调基础研究是<b>整个科学体系的源头</b>、所有技术问题的总机关，需要稳定支持、长期投入，不能以短期效益衡量。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>3. 10 月（上）：民生 · 健康 · 开放</BlockTitle>
        <DataTable>
          <tr><th>事件</th><th>必背关键词</th></tr>
          <tr><td>第 19 期《求是》文章<b>《加强普惠性、基础性、兜底性民生建设》</b></td><td><b>坚守底线、突出重点、完善制度、引导预期</b>；统筹教育、收入分配、就业、社保、医疗卫生、住房；<b>「中国式现代化，民生为大」</b></td></tr>
          <tr><td><b>全国卫生与健康大会</b>（10 月 12—13 日，北京）</td><td>全面提高<b>医疗服务水平</b>是建成<b>健康中国</b>的重点任务；实施<b>医疗卫生强基工程</b>，优化机构功能定位和结构布局，促进<b>分级诊疗</b>，让群众就近看得上病、看得好病</td></tr>
          <tr><td>第 <b>140</b> 届中国进出口商品交易会（广交会）贺信（10 月 14 日）</td><td>广交会创办 <b>70 年</b>；是中国<b>扩大高水平对外开放</b>、推动建设<b>开放型世界经济</b>的有效平台；维护<b>多边贸易体制</b>，保障<b>全球产业链供应链</b>稳定畅通</td></tr>
          <tr><td><b>中朝新鸭绿江大桥</b>正式开通（10 月 15 日）</td><td>连接辽宁<b>丹东</b>与朝鲜<b>新义州</b>；<b>公路桥</b>，双向四车道，桥面宽 <b>28.5 米</b>，双塔双索面斜拉桥；航道 <b>3000 吨级</b>；丹东口岸是我国最大的对朝边境贸易口岸</td></tr>
        </DataTable>
        <Callout variant="tip">「民生」这块最爱考「七个有所」：幼有所育、学有所教、劳有所得、病有所医、老有所养、住有所居、弱有所扶。<b>注意是「弱有所扶」，不是「残有所助」</b>。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题 3 · 广交会与大桥</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>关于 2026 年 10 月的时政，下列说法<b>不正确</b>的是（　）。</ExampleQuestion>
          <ExampleOptions>A. 第 140 届广交会是中国扩大高水平对外开放、推动建设开放型世界经济的有效平台　B. 广交会创办至今 70 年　C. 新鸭绿江大桥连接丹东与新义州，为铁路桥　D. 全国卫生与健康大会提出实施医疗卫生强基工程，促进分级诊疗</ExampleOptions>
          <ExampleAnswer><b>解析：</b>C 错在「铁路桥」——新鸭绿江大桥是<b>公路桥</b>（双向四车道，双塔双索面斜拉桥）。A、B、D 均与讲义一致。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>4. 10 月（下）：从严治党 + 科技创新融合</BlockTitle>
        <PointList>
          <li>第 20 期《求是》文章<b>《以更高标准、更实举措推进全面从严治党》</b>：标准更高、举措更实。</li>
          <li>习近平在<b>内蒙古自治区乌兰察布市</b>考察：看产业、看民生、看生态。</li>
          <li>文件<b>《关于推动科技创新和产业创新深度融合的意见》</b>：<b>科技创新</b>与<b>产业创新</b>深度融合，破解「两张皮」。</li>
          <li>习近平在<b>党外人士座谈会</b>上的讲话：听取对经济形势和下一阶段工作的意见。</li>
        </PointList>
        <Callout variant="warn"><b>三对「融合」别混：</b>「科技创新和产业创新深度融合」＝这份意见；「数字经济和实体经济深度融合」＝数字经济提法；「城乡融合发展」＝乡村振兴/新型城镇化。选项常把三个「融合」的对象互换。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题 4 · 哪个「融合」</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>2026 年 10 月印发《关于推动科技创新和产业创新深度融合的意见》，其核心是推动（　）深度融合。</ExampleQuestion>
          <ExampleOptions>A. 数字经济与实体经济　B. 科技创新与产业创新　C. 城乡要素与公共资源　D. 文化与旅游</ExampleOptions>
          <ExampleAnswer><b>解析：</b>文件名已经点明：<b>科技创新和产业创新</b>深度融合，解决科技成果转化「两张皮」问题。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <div className="jingle">
        <div className="jt">9—10 月 · 一句话总结</div>
        <b>四期《求是》看标题（管党治党 / 基础研究 / 民生建设 / 从严治党），两场多边看名称（上合、金砖十八），十月三件事（卫生大会、140 届广交会、鸭绿江公路桥）。</b>
      </div>
    </>
  )
}
