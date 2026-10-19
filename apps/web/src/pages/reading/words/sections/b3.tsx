import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析三 · 差异与独特
 *
 * @returns 该节正文。
 */
export default function S39(): ReactElement {
  return (
    <>
      <Callout variant="key">
              这一组的分水岭是「<b>差得远</b>」还是「<b>反着来</b>」，以及「独特」到底独特在<b>风格、构思还是体系</b>。
              大相径庭（差得远）≠ 截然相反（正相反），这一对几乎年年出现。
            </Callout>
      
            <Block>
              <BlockTitle>9. 大相径庭 / 相去甚远 / 截然相反</BlockTitle>
              <div className="diff"><b>一句话区别：</b>大相径庭＝<b>大不相同</b>（多指说法、做法、结果彼此差得远）；相去甚远＝<b>差距很大</b>（多指数量、水平、程度）；截然相反＝<b>完全对立</b>（多指观点、方向、性质正相反）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>大相径庭</td><td>彼此差别很大（不一致）</td><td>说法大相径庭 / 结论大相径庭</td></tr>
                <tr><td>相去甚远</td><td>距离、差距很大（有刻度）</td><td>与目标相去甚远 / 水平相去甚远</td></tr>
                <tr><td>截然相反</td><td>完全对立（正相反）</td><td>结论截然相反 / 态度截然相反</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>大相径庭</b>　同一份材料，两位学者的解读<em>大相径庭</em>，一个看到衰退，一个看到转型。</div>
                <div><b>相去甚远</b>　项目实际投入不到预算的三成，与最初的设想<em>相去甚远</em>。</div>
                <div><b>截然相反</b>　两份检测报告给出的结论<em>截然相反</em>，一份合格，一份严重超标。</div>
              </div>
              <Example>
                <ExampleHeader>例题 1 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>两种方案的预算____：一种需要三千万元，另一种不到一千万元，差距之大远超预期。</ExampleQuestion>
                  <ExampleOptions><span>A. 天壤之别</span><span>B. 大相径庭</span><span>C. 相去甚远</span><span>D. 截然相反</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：空后直接给出「三千万」与「一千万」两个<b>具体数字</b>，是在<b>数量上拉开差距</b>，选「相去甚远」。「大相径庭」强调彼此<b>不一致、不一样</b>，多用于说法、做法、结论，不适合直接量化比较；「截然相反」指<b>正相反</b>，数字之间不存在「相反」；「天壤之别」程度过重，多用于性质、境遇的极端差别，且与后文「差距之大远超预期」语义重复。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>10. 独树一帜 / 标新立异 / 别出心裁 / 不拘一格</BlockTitle>
              <div className="diff"><b>一句话区别：</b>独树一帜＝<b>风格自成一家</b>（画风、流派、学派）；标新立异＝<b>提出新奇主张</b>（可褒可贬，看语境）；别出心裁＝<b>构思巧妙独特</b>（设计、办法、布局）；不拘一格＝<b>不局限于一种规格</b>（多指选拔人才、用人）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>独树一帜</td><td>风格独立，自成一家</td><td>画风独树一帜 / 独树一帜的流派</td></tr>
                <tr><td>标新立异</td><td>提出新奇主张以示不同</td><td>刻意标新立异 / 标新立异的提法</td></tr>
                <tr><td>别出心裁</td><td>构思、设计与众不同</td><td>别出心裁的设计 / 别出心裁的布置</td></tr>
                <tr><td>不拘一格</td><td>打破规格，不限一种</td><td>不拘一格降人才 / 不拘一格选人</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>独树一帜</b>　他的山水画<em>独树一帜</em>，苍茫中见温润。</div>
                <div><b>标新立异</b>　为了流量而刻意<em>标新立异</em>，往往很快被观众看穿。</div>
                <div><b>别出心裁</b>　这场展览的布展方式<em>别出心裁</em>，观众要打着手电看。</div>
                <div><b>不拘一格</b>　选拔人才要<em>不拘一格</em>，不能只盯着学历和出身。</div>
              </div>
              <Example>
                <ExampleHeader>例题 2 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>「我劝天公重抖擞，____降人才。」龚自珍这句诗，道出了用人当打破常规、唯才是举的道理。</ExampleQuestion>
                  <ExampleOptions><span>A. 别出心裁</span><span>B. 不拘一格</span><span>C. 独树一帜</span><span>D. 标新立异</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：后文「<b>打破常规、唯才是举</b>」是对空处的直接解释，说的是用人<b>不限于一种规格</b>，选「不拘一格」。「独树一帜」指风格自成一家，对象是画风、流派；「标新立异」指提出新奇主张，含贬义风险，与「唯才是举」的正面语气不合；「别出心裁」指构思巧妙，对象是设计、办法，不能修饰「降人才」。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>11. 不落窠臼 / 别具一格 / 自成一家</BlockTitle>
              <div className="diff"><b>一句话区别：</b>不落窠臼＝<b>不落旧格式</b>（多指文章、艺术，重「不俗套」）；别具一格＝<b>另有一种风格</b>（多指设计、建筑、文风，重「风格新」）；自成一家＝<b>形成了自己的体系</b>（多指学问、技艺，重「成体系」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>不落窠臼</td><td>不落俗套、跳出旧格</td><td>构思不落窠臼 / 叙事不落窠臼</td></tr>
                <tr><td>别具一格</td><td>另有一种独特风格</td><td>设计别具一格 / 建筑别具一格</td></tr>
                <tr><td>自成一家</td><td>学问技艺形成体系</td><td>书法自成一家 / 画风自成一家</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>不落窠臼</b>　这部小说的叙事<em>不落窠臼</em>，读来毫不腻味。</div>
                <div><b>别具一格</b>　这座美术馆的设计<em>别具一格</em>，把整面外墙做成了书架。</div>
                <div><b>自成一家</b>　他浸淫篆刻四十年，刀法已<em>自成一家</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 3 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>这座山地美术馆____：整面外墙被做成巨大的书架，展厅顺着山势层层跌落，参观路线本身就是一条溪谷。</ExampleQuestion>
                  <ExampleOptions><span>A. 别具一格</span><span>B. 自成一家</span><span>C. 别开生面</span><span>D. 不落窠臼</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：冒号后的内容全在描述这座建筑的<b>独特外观与空间风格</b>，选「别具一格」最贴。「不落窠臼」侧重不落<b>旧格式、俗套</b>，多用于文章、叙事，用来概括建筑外观不如「别具一格」准确；「自成一家」指<b>学问、技艺形成体系</b>，主语应是人或其学问，不能是一座建筑；「别开生面」指开创一种新局面、新形式，多用于活动、场面。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>12. 移花接木 / 偷梁换柱 / 混淆是非 / 牵强附会</BlockTitle>
              <div className="diff"><b>一句话区别：</b>移花接木＝<b>暗中换掉人或物</b>（调包，贬）；偷梁换柱＝<b>暗中改变事物的内容性质</b>（比移花接木更重，含欺骗）；混淆是非＝<b>把对的说成错的</b>（搅乱判断）；牵强附会＝<b>把不相干的硬拉到一起</b>（多指解释、论证）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>移花接木</td><td>暗中调换对象</td><td>移花接木，偷换概念</td></tr>
                <tr><td>偷梁换柱</td><td>暗中改变内容、性质</td><td>偷梁换柱，以次充好</td></tr>
                <tr><td>混淆是非</td><td>搅乱对错界限</td><td>混淆是非，颠倒黑白</td></tr>
                <tr><td>牵强附会</td><td>硬把无关的说成有关</td><td>解释牵强附会 / 论证牵强附会</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>移花接木</b>　他把别人的实验数据<em>移花接木</em>到自己论文里，很快被查了出来。</div>
                <div><b>偷梁换柱</b>　合同里<em>偷梁换柱</em>，把「保修三年」改成了「保修三个月」。</div>
                <div><b>混淆是非</b>　故意<em>混淆是非</em>，把正当维权说成无理取闹。</div>
                <div><b>牵强附会</b>　把两千年前的一句话硬套到今天的经济现象上，未免<em>牵强附会</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 4 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>有人为了证明「古人早已预见全球化」，把《史记》里一句关于货物流通的记载，硬解释成世界市场的雏形，这种论证未免____。</ExampleQuestion>
                  <ExampleOptions><span>A. 移花接木</span><span>B. 偷梁换柱</span><span>C. 混淆是非</span><span>D. 牵强附会</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：句中「<b>硬解释成</b>」「硬套」是关键提示，说的是<b>把本来不相干的东西强行拉到一起</b>，选「牵强附会」。「移花接木」指暗中<b>调换对象</b>，这里并没有替换，只是曲解；「偷梁换柱」指暗中<b>改变内容性质</b>，多用于合同、方案等实体对象；「混淆是非」指故意搅乱<b>对错</b>，而本句的问题是「论证不成立」，不是「颠倒是非」。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
    </>
  )
}
