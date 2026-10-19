import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析十四 · 替代与庆贺
 *
 * @returns 该节正文。
 */
export default function S50(): ReactElement {
  return (
    <>
      <Callout variant="key">
              「<b>代替</b>」的四种错法：李代桃僵（代人受过）／张冠李戴（弄错对象）／冒名顶替（冒用身份）／越俎代庖（越权代办）。<br />「<b>庆贺</b>」的四种味道：弹冠相庆（坏人得势，贬）／额手相庆（众人庆幸，中）／拍手称快（坏人受罚，痛快）／幸灾乐祸（别人遭殃自己高兴，贬）。
            </Callout>
      
            <Block>
              <BlockTitle>21. 李代桃僵 / 张冠李戴 / 冒名顶替</BlockTitle>
              <div className="diff"><b>一句话区别：</b>李代桃僵＝<b>代人受过</b>（替别人承担）；张冠李戴＝<b>弄错了对象或事实</b>（把甲的算到乙头上）；冒名顶替＝<b>冒用他人身份</b>（具体行为，多指考试、入职）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>李代桃僵</td><td>代人受过、互相顶替</td><td>多指承担责任</td></tr>
                <tr><td>张冠李戴</td><td>弄错对象、弄混事实</td><td>多指记述、引用出错</td></tr>
                <tr><td>冒名顶替</td><td>冒用他人名义</td><td>具体身份行为</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>李代桃僵</b>　他替朋友顶了这桩事，是<b>李代桃僵</b>。</div>
                <div><b>张冠李戴</b>　把两件事的年份<b>张冠李戴</b>，闹了笑话。</div>
                <div><b>冒名顶替</b>　查实有人<b>冒名顶替</b>参加考试。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>这篇综述把两位学者的观点____，读者以为是一人所提，实际相隔四十年。</ExampleQuestion>
                <ExampleOptions><span>A. 移花接木</span><span>B. 李代桃僵</span><span>C. 张冠李戴</span><span>D. 冒名顶替</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>把两位学者的观点弄混</b>」是典型的<b>弄错对象</b>，选「张冠李戴」。「李代桃僵」指<b>代人受过</b>，需要「承担后果」；「冒名顶替」指<b>冒用身份</b>，是具体的人的行为；「移花接木」指<b>暗中调换</b>，需要「偷换」的动作和欺骗意图。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>22. 弹冠相庆 / 额手相庆 / 拍手称快 / 幸灾乐祸</BlockTitle>
              <div className="diff"><b>一句话区别：</b>弹冠相庆＝<b>坏人因即将得势而互相庆贺</b>（贬）；额手相庆＝<b>众人把手放额上庆幸</b>（中性，多指渡过难关）；拍手称快＝<b>坏人受罚、正义得伸而痛快</b>（褒）；幸灾乐祸＝<b>别人遭殃自己高兴</b>（贬）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>弹冠相庆</td><td>坏人得势互相庆贺（贬）</td><td>同伙、同党作主语</td></tr>
                <tr><td>额手相庆</td><td>众人庆幸（中性）</td><td>多指灾后、难关后</td></tr>
                <tr><td>拍手称快</td><td>坏人受惩而痛快（褒）</td><td>群众作主语</td></tr>
                <tr><td>幸灾乐祸</td><td>见人遭难而高兴（贬）</td><td>含「心术不正」</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>弹冠相庆</b>　案件尚未了结，几个同伙已在<b>弹冠相庆</b>。</div>
                <div><b>额手相庆</b>　洪水退去，村民<b>额手相庆</b>。</div>
                <div><b>拍手称快</b>　黑恶团伙被端，群众<b>拍手称快</b>。</div>
                <div><b>幸灾乐祸</b>　同事出了纰漏，他却在一边<b>幸灾乐祸</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>专案组收网那天，街坊们站在巷口，看着那伙人一个个被带走，无不____。</ExampleQuestion>
                <ExampleOptions><span>A. 额手相庆</span><span>B. 幸灾乐祸</span><span>C. 弹冠相庆</span><span>D. 拍手称快</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：句中「<b>那伙人被抓</b>」「<b>街坊无不</b>」是<b>坏人受惩、众人痛快</b>，选「拍手称快」。「弹冠相庆」是<b>坏人互相庆贺</b>，主语必须是同伙，感情色彩完全相反——这是最典型的误用；「额手相庆」多指<b>灾难度过后的庆幸</b>，不含「坏人受罚」；「幸灾乐祸」是<b>见人遭殃而高兴</b>，心术不正，不能用于「坏人被抓」正当的痛快。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>23. 越俎代庖 / 包办代替 / 各司其职</BlockTitle>
              <div className="diff"><b>一句话区别：</b>越俎代庖＝<b>越过自己的职权去管别人的事</b>（贬）；包办代替＝<b>一手包揽、不让别人参与</b>（贬）；各司其职＝<b>各自做好分内的事</b>（褒，正面对照）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>越俎代庖</td><td>越权代办（贬）</td><td>强调「越界」</td></tr>
                <tr><td>包办代替</td><td>全部包揽（贬）</td><td>强调「不给别人空间」</td></tr>
                <tr><td>各司其职</td><td>各做分内事（褒）</td><td>常作正面对照</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>越俎代庖</b>　该企业自己决定的事，部门不宜<b>越俎代庖</b>。</div>
                <div><b>包办代替</b>　家长<b>包办代替</b>，孩子永远学不会。</div>
                <div><b>各司其职</b>　各环节<b>各司其职</b>，流程才跑得顺。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>村委会有村集体的事要管，理事会管红白喜事，合作社管生产经营，三者____，谁也不插手别人的事。</ExampleQuestion>
                <ExampleOptions><span>A. 各司其职</span><span>B. 包办代替</span><span>C. 各自为政</span><span>D. 越俎代庖</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中「<b>谁也不插手别人的事</b>」是明确的<b>正面分工</b>，选「各司其职」。「越俎代庖」「包办代替」都是<b>贬义</b>，与「各管一摊」的正面评价相反；「各自为政」虽指各管各的，但含<b>不配合、不协调</b>的贬义，句中强调的是「分工明确」，不是「互不配合」。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>24. 移花接木 / 偷梁换柱 / 改头换面</BlockTitle>
              <div className="diff"><b>一句话区别：</b>移花接木＝<b>暗中换掉人或物</b>（调包，多指具体对象）；偷梁换柱＝<b>暗中改变事物的内容、性质</b>（比前者更重，含欺骗）；改头换面＝<b>只换外表、内容不变</b>（贬，多指文章、做法）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>移花接木</td><td>暗中调换对象</td><td>多指具体的人或物</td></tr>
                <tr><td>偷梁换柱</td><td>暗中改变内容性质</td><td>多指方案、合同、概念</td></tr>
                <tr><td>改头换面</td><td>只换形式、内容照旧</td><td>多指文章、做法</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>移花接木</b>　他把别人的实验数据<b>移花接木</b>到自己论文里。</div>
                <div><b>偷梁换柱</b>　合同里<b>偷梁换柱</b>，把「保修三年」改成「保修三个月」。</div>
                <div><b>改头换面</b>　这份文件<b>改头换面</b>又发了一遍，内容一字未动。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>同一套违规收费的名目，换个「服务费」的名头又出现了，这种____的做法，群众一眼就看穿。</ExampleQuestion>
                <ExampleOptions><span>A. 移花接木</span><span>B. 改头换面</span><span>C. 偷梁换柱</span><span>D. 张冠李戴</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：句中「<b>换个名头又出现</b>」「<b>同一套</b>」正是「改头换面」——<b>只换形式、内容照旧</b>。「移花接木」需要<b>换成另一个对象</b>（把甲的数据换成乙的）；「偷梁换柱」侧重<b>改变事物的性质</b>（把「保修三年」偷换成「三个月」），此处只是改名目，性质没变；「张冠李戴」是<b>弄错对象</b>，不是有意伪装。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
    </>
  )
}
