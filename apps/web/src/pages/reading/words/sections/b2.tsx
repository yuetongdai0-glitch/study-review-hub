import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析二 · 变化与兴衰
 *
 * @returns 该节正文。
 */
export default function S38(): ReactElement {
  return (
    <>
      <Callout variant="key">
              这一组的关键是「<b>变化的方向与速度</b>」。此消彼长（<b>一涨一落</b>）、此起彼伏（<b>轮着来</b>）、层出不穷（<b>不断出现新的</b>）——
              三个词常在同一道题里当干扰项，一定要分清「谁在变」。
            </Callout>
      
            <Block>
              <BlockTitle>5. 层出不穷 / 此消彼长 / 此起彼伏</BlockTitle>
              <div className="diff"><b>一句话区别：</b>层出不穷＝<b>新的不断出现</b>（数量，越出越多）；此消彼长＝<b>这个下去那个上来</b>（总量不变，一方减少一方增加）；此起彼伏＝<b>这边停那边起</b>（轮流出现，多指声音、事件、浪潮）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>层出不穷</td><td>新事物不断出现</td><td>问题层出不穷 / 花样层出不穷</td></tr>
                <tr><td>此消彼长</td><td>一方减少、一方增加</td><td>两者此消彼长 / 此消彼长之势</td></tr>
                <tr><td>此起彼伏</td><td>交替出现、连续不断</td><td>呼声此起彼伏 / 掌声此起彼伏</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>层出不穷</b>　技术迭代加快，新的应用场景<em>层出不穷</em>。</div>
                <div><b>此消彼长</b>　线上消费上升，线下客流下降，两者呈<em>此消彼长</em>之势。</div>
                <div><b>此起彼伏</b>　发布会现场，掌声与欢呼<em>此起彼伏</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 1 · 真题 2021 山东 第 19 题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>当前，以数字化的知识和信息作为关键生产要素的数字经济蓬勃发展，新技术、新业态、新模式____。各国纷纷将发展数字经济作为推动实体经济提质增效、____核心竞争力的重要举措，推动数字经济取得的创新成果____于实体经济各个领域，围绕新一轮科技和产业制高点展开积极竞合。</ExampleQuestion>
                  <ExampleOptions><span>A. 纷至沓来　培育　落实</span><span>B. 层出不穷　重塑　融合</span><span>C. 乏善可陈　形成　应用</span><span>D. 方兴未艾　提升　实践</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：第一空前是「<b>新技术、新业态、新模式</b>」这组<b>不断冒出新东西</b>的并列短语，要表达「一个接一个出现」，选「层出不穷」。<br />·「方兴未艾」指<b>整体势头正盛、还没停</b>，是形容「某个事业」，不能说「新模式方兴未艾」（三个新事物各自「方兴未艾」不合逻辑）；<br />·「纷至沓来」多指<b>人、消息</b>接连而来，对象不当；<br />·「乏善可陈」是贬义，与「蓬勃发展」矛盾。<br />第二空「重塑核心竞争力」、第三空「融合于各领域」均可验证。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>6. 方兴未艾 / 悄然兴起</BlockTitle>
              <div className="diff"><b>一句话区别：</b>方兴未艾＝<b>正兴盛、远没到头</b>（褒，强调势头；常与「产业、事业、潮流」搭配）；悄然兴起＝<b>不知不觉地出现</b>（中性，强调「没人注意」，常与「风气、方式、现象」搭配）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>方兴未艾</td><td>势头正盛、还在发展</td><td>产业方兴未艾 / 建设方兴未艾</td></tr>
                <tr><td>悄然兴起</td><td>无声无息地开始流行</td><td>悄然兴起的新风尚 / 正在悄然兴起</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>方兴未艾</b>　低空经济<em>方兴未艾</em>，各地都在抢先布局。</div>
                <div><b>悄然兴起</b>　一种「周末去县城」的旅行方式，正在年轻人中<em>悄然兴起</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 2 · 真题 2021 广西（联考）</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>近年来，商业赞助越来越多地____体育运动，在体育市场化、职业化____的当下，如何在追求个人商业价值与体育管理机构利益间取得平衡，是运动员和体育管理机构不能回避的问题。</ExampleQuestion>
                  <ExampleOptions><span>A. 热衷　欣欣向荣</span><span>B. 垂青　方兴未艾</span><span>C. 觊觎　如日中天</span><span>D. 追逐　高歌猛进</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：第一空「觊觎」是<b>贬义</b>（非分地希望得到），与「商业赞助」的中性色彩不符，排除 C；「热衷」后须带「于」（热衷于……），用法错误，排除 A。<br />第二空形容「体育市场化、职业化」的<b>发展势头</b>，选「方兴未艾」（正兴盛、远未到头）。「高歌猛进」指前进路上充满乐观精神，文段没有「乐观情绪」这层意思；「如日中天」是<b>已到顶峰</b>，而市场化还在推进中，不合。<br /><b>提示：</b>「方兴未艾」只修饰「事业、产业、潮流」这类整体态势，不修饰「一个具体的新模式」。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>7. 应运而生 / 横空出世 / 粉墨登场</BlockTitle>
              <div className="diff"><b>一句话区别：</b>应运而生＝<b>有需要才有它</b>（褒，强调顺应时势）；横空出世＝<b>突然出现且气势非凡</b>（褒，强调震撼）；粉墨登场＝<b>化好妆上台</b>（贬，指坏人登上政治舞台，或含讥讽）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>应运而生</td><td>顺应需要、时势而出现</td><td>……应运而生 / 行业应运而生</td></tr>
                <tr><td>横空出世</td><td>突然出现，气势宏大</td><td>横空出世的杰作 / 横空出世的天才</td></tr>
                <tr><td>粉墨登场</td><td>乔装打扮后登台（贬）</td><td>反派粉墨登场 / 各种论调粉墨登场</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>应运而生</b>　城市通勤距离拉长，共享单车<b>应运而生</b>。</div>
                <div><b>横空出世</b>　这部小说<b>横空出世</b>，一时洛阳纸贵。</div>
                <div><b>粉墨登场</b>　每逢选举，各种投机政客便<b>粉墨登场</b>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 3 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>随着老龄人口快速增加，陪诊、助浴、适老化改造等新服务____，短短三年就形成了完整的产业链。</ExampleQuestion>
                  <ExampleOptions><span>A. 横空出世</span><span>B. 粉墨登场</span><span>C. 异军突起</span><span>D. 应运而生</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：前半句「<b>随着老龄人口快速增加</b>」是明确的原因，说明这些服务是<b>顺应需求而出现</b>的，选「应运而生」。「横空出世」强调突然出现、气势宏大，多用于杰出的作品或人物，不用于「一类服务」；「粉墨登场」是贬义，指坏人上台，感情色彩不合；「异军突起」指<b>新的一支力量</b>崛起，前提是原本已有多支力量，此处是从无到有，不贴。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
      
            <Block>
              <BlockTitle>8. 一蹴而就 / 一劳永逸 / 立竿见影 / 轻而易举</BlockTitle>
              <div className="diff"><b>一句话区别：</b>一蹴而就＝<b>一步就成</b>（多用于否定：不能一蹴而就）；一劳永逸＝<b>干一次永远省事</b>（多用于否定：没有一劳永逸的办法）；立竿见影＝<b>立刻见效</b>（中性，强调效果快）；轻而易举＝<b>毫不费力</b>（中性，强调容易）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>一蹴而就</td><td>一下子成功（重「快」）</td><td>不可能一蹴而就 / 非一蹴而就</td></tr>
                <tr><td>一劳永逸</td><td>一次付出，永久省事</td><td>没有一劳永逸的办法</td></tr>
                <tr><td>立竿见影</td><td>立刻见到效果</td><td>效果立竿见影 / 立竿见影之效</td></tr>
                <tr><td>轻而易举</td><td>做起来毫不费力</td><td>轻而易举地完成 / 并非轻而易举</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>一蹴而就</b>　能力建设不可能<em>一蹴而就</em>，得靠一次次实战磨出来。</div>
                <div><b>一劳永逸</b>　世上没有<em>一劳永逸</em>的改革，问题总会以新形态出现。</div>
                <div><b>立竿见影</b>　这项政策的效果<em>立竿见影</em>，当月投诉量就降了四成。</div>
                <div><b>轻而易举</b>　把实验室成果变成量产产品，绝非<em>轻而易举</em>。</div>
              </div>
              <Example>
                <ExampleHeader>例题 4 · 真题改编 · 同考点仿题</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>作风问题具有反复性和顽固性，抓一抓就好转、松一松就反弹，指望一次整治就____，是不现实的。</ExampleQuestion>
                  <ExampleOptions><span>A. 一蹴而就</span><span>B. 一劳永逸</span><span>C. 立竿见影</span><span>D. 轻而易举</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：空处要与「抓一抓就好转、松一松就反弹」形成对照，说的是<b>想靠一次整治换来永久太平</b>，选「一劳永逸」。「一蹴而就」强调<b>一下子成功</b>，重心在「快」，与「反复性、顽固性」的呼应不如「一劳永逸」贴切；「立竿见影」是说效果快，本身并不含贬义，用「不现实」来否定它，语义上变成「效果不可能快」，与「反弹」不呼应；「轻而易举」只讲容易，与「一次整治」的时间维度无关。</ExampleAnswer>
                </ExampleBody>
              </Example>
            </Block>
    </>
  )
}
