import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析七 · 状态与关系
 *
 * @returns 该节正文。
 */
export default function S43(): ReactElement {
  return (
    <>
      <Callout variant="key">
              「息息相关 / 休戚与共 / 唇齿相依」三个都表示关系近，区别在<b>有没有感情与利害</b>：
              息息相关＝只是关联紧；休戚与共＝同甘共苦（有祸福）；唇齿相依＝互相依存（多指地理、安全）。
            </Callout>
      
            <Block>
              <BlockTitle>25. 息息相关 / 休戚与共 / 唇齿相依</BlockTitle>
              <div className="diff"><b>一句话区别：</b>息息相关＝<b>关系非常密切</b>（中性，可用于事物）；休戚与共＝<b>同甘共苦、利害一致</b>（多指人、国家，带感情）；唇齿相依＝<b>像嘴唇和牙齿一样互相依存</b>（多指地理、安全上的依存）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>息息相关</td><td>关联紧密</td><td>与……息息相关 / 息息相关的生活</td></tr>
                <tr><td>休戚与共</td><td>祸福相同，利害一致</td><td>休戚与共的命运共同体</td></tr>
                <tr><td>唇齿相依</td><td>互相依存，缺一不可</td><td>唇齿相依，唇亡齿寒</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>息息相关</b>　空气质量与每个人的健康<em>息息相关</em>。</div>
                <div><b>休戚与共</b>　两个村子共守一座山口，一荣俱荣、一损俱损，早已是<em>休戚与共</em>的命运共同体。</div>
                <div><b>唇齿相依</b>　这两座城市隔江相望，产业互补，可谓<em>唇齿相依</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 1 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>上下游同处一条流域，上游污染，下游必然遭殃；下游发展，上游也跟着受益。这种____的关系，决定了治水必须全流域一盘棋。</ExampleQuestion>
                  <ExampleOptions><span>A. 相辅相成</span><span>B. 息息相关</span><span>C. 休戚与共</span><span>D. 唇齿相依</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：句中强调「<b>上游污染下游遭殃，下游发展上游受益</b>」，是<b>地理上互相依存、缺一不可</b>，选「唇齿相依」最贴。「息息相关」只说关联紧密，<b>不含「互相依存」的刚性</b>，力度不够；「休戚与共」侧重<b>同甘共苦的情感与利害一致</b>，多用于人、民族、国家，用于上下游的地理关系偏「情」；「相辅相成」指互相配合、缺一不可，但要求双方<b>互相成全</b>，与「污染遭殃」的负面传导不合。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>26. 琳琅满目 / 汗牛充栋 / 浩如烟海</BlockTitle>
              <div className="diff"><b>一句话区别：</b>琳琅满目＝<b>好东西多而美</b>（多指商品、展品）；汗牛充栋＝<b>书多得搬不动</b>（<b>只指书</b>）；浩如烟海＝<b>文献典籍浩繁</b>（多指典籍、史料，重「读不完」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>琳琅满目</td><td>美好之物多而杂</td><td>商品琳琅满目 / 展品琳琅满目</td></tr>
                <tr><td>汗牛充栋</td><td>书籍极多</td><td>著述汗牛充栋</td></tr>
                <tr><td>浩如烟海</td><td>文献典籍浩繁</td><td>古籍浩如烟海</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>琳琅满目</b>　展柜里的文创产品<em>琳琅满目</em>，几乎每样都想带走。</div>
                <div><b>汗牛充栋</b>　乾嘉学者的著述<em>汗牛充栋</em>，光目录就有十几卷。</div>
                <div><b>浩如烟海</b>　中医古籍<em>浩如烟海</em>，一个人一辈子也读不完。</div>
              </div>
              <Example>
                <ExampleHeader>例题 2 · 真题改编 · 同考点仿题（本组：汗牛充栋 只指书）</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>关于这座城的文献，正史之外还有大量方志、族谱、碑刻与契约文书，仅目录就有七十余卷，真可谓____；若论「一个人一辈子也读不完」，则又当得起「浩如烟海」四个字。</ExampleQuestion>
                  <ExampleOptions><span>A. 汗牛充栋</span><span>B. 琳琅满目</span><span>C. 鳞次栉比</span><span>D. 美轮美奂</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：空处对象是「<b>文献、目录</b>」，是<b>书册</b>，只能选「<b>汗牛充栋</b>」——它只形容书多，连商品、文章数量都不能用。「琳琅满目」多指商品、陈列品多而好看；「鳞次栉比」形容房屋、船只密集整齐地排列；「美轮美奂」只能形容建筑高大华美。<b>对象一错，句子必错——这一组的分全部落在「能不能这么用」上。</b>（原真题 2021 黑龙江 38 中的干扰项正是「汗牛充栋」，用来形容「事例多」，属典型对象误用。）</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>27. 泰然自若 / 安之若素 / 随遇而安</BlockTitle>
              <div className="diff"><b>一句话区别：</b>泰然自若＝<b>遇到紧急情况仍镇定如常</b>（重「临事不乱」）；安之若素＝<b>遇到反常或不利的情况，像平常一样对待</b>（重「不以为意」）；随遇而安＝<b>到哪都能适应</b>（重「适应环境」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>泰然自若</td><td>危急时神色不变</td><td>泰然自若地应对</td></tr>
                <tr><td>安之若素</td><td>对反常、困境毫不在意</td><td>安之若素，处之泰然</td></tr>
                <tr><td>随遇而安</td><td>顺应环境，到哪都能安</td><td>随遇而安的性格</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>泰然自若</b>　检查组的车刚进院，他仍在会客室里<em>泰然自若</em>地泡茶。</div>
                <div><b>安之若素</b>　住在漏雨的宿舍里，他一住三年，<em>安之若素</em>。</div>
                <div><b>随遇而安</b>　他性子淡，调到哪个岗位都<em>随遇而安</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 3 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>暗访组的车已经停在楼下，会议室里的气氛骤然紧张，只有他依旧____，不紧不慢地翻着手里的材料。</ExampleQuestion>
                  <ExampleOptions><span>A. 安之若素</span><span>B. 随遇而安</span><span>C. 无动于衷</span><span>D. 泰然自若</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：句中有明确的<b>突发紧张情境</b>（暗访组到楼下、气氛骤然紧张），要表达<b>临事镇定、神色不变</b>，选「泰然自若」。「安之若素」侧重对<b>反常或不利处境长期不以为意</b>，不强调「当下这一刻的镇定」；「随遇而安」侧重<b>适应不同环境</b>，与「暗访突至」无关；「无动于衷」指<b>心里毫不触动</b>，含冷漠、该有反应却没反应的贬义，与「不紧不慢翻材料」的从容不同。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>28. 顾此失彼 / 捉襟见肘 / 左支右绌</BlockTitle>
              <div className="diff"><b>一句话区别：</b>顾此失彼＝<b>顾了这个丢了那个</b>（重「两头顾不上」）；捉襟见肘＝<b>拉一下衣襟就露胳膊肘</b>（原指衣服破烂，比喻<b>困难重重、穷于应付</b>，多指财力、能力不足）；左支右绌＝<b>应付了这边那边又出问题</b>（重「力量不足、处处漏洞」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>顾此失彼</td><td>照顾不周，丢一头</td><td>顾此失彼，疲于奔命</td></tr>
                <tr><td>捉襟见肘</td><td>资源匮乏，难以应付</td><td>资金捉襟见肘 / 人力捉襟见肘</td></tr>
                <tr><td>左支右绌</td><td>力量不足，处处出问题</td><td>左支右绌，疲于应付</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>顾此失彼</b>　既要抓进度又要抓安全，人手不够就容易<em>顾此失彼</em>。</div>
                <div><b>捉襟见肘</b>　县财政本就<em>捉襟见肘</em>，再上大项目只会雪上加霜。</div>
                <div><b>左支右绌</b>　预算一砍再砍，既要保进度又要保质量，项目组<em>左支右绌</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 4 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>预算一砍再砍，既要保工期，又要保质量，还要应付接连不断的检查，项目组渐渐____，问题一个接一个冒出来。</ExampleQuestion>
                  <ExampleOptions><span>A. 顾此失彼</span><span>B. 捉襟见肘</span><span>C. 左支右绌</span><span>D. 力不从心</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中同时给了「保工期／保质量／应付检查」<b>三头压力</b>，并说「问题一个接一个冒出来」，强调<b>力量不足、处处出漏洞</b>，选「左支右绌」。「顾此失彼」只强调<b>丢了一头</b>，是「二选一」的结构，与三头压力不符；「捉襟见肘」多指<b>财力、物力匮乏</b>，一般作谓语或定语（资金捉襟见肘），很少说「渐渐捉襟见肘」；「力不从心」侧重<b>主观上想干但能力不够</b>，与句中「预算被砍」的客观资源约束不完全对应。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
    </>
  )
}
