import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 辨析十五 · 差异与境界
 *
 * @returns 该节正文。
 */
export default function S51(): ReactElement {
  return (
    <>
      <Callout variant="key">
              「<b>差别大</b>」三种：判若云泥（高下悬殊，多指人或境界）／天壤之别（差别极大，最通用）／泾渭分明（界限清楚，不是「差别大」）。<br />「<b>技艺高</b>」三级：巧夺天工（人工胜天然）／鬼斧神工（神奇，多指自然）／炉火纯青（功夫到家）／登峰造极（到极点）。<b>注意「目无全牛」是「技艺纯熟」，不是「没有全局观」。</b>
            </Callout>
      
            <Block>
              <BlockTitle>25. 判若云泥 / 天壤之别 / 泾渭分明</BlockTitle>
              <div className="diff"><b>一句话区别：</b>判若云泥＝<b>像云和泥那样高下悬殊</b>（多指人、境界、水平）；天壤之别＝<b>差别极大</b>（最通用，可指任何事物）；泾渭分明＝<b>界限清楚、不混淆</b>（不是「差别大」）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>判若云泥</td><td>高下悬殊（多指人、境界）</td><td>含「一高一低」</td></tr>
                <tr><td>天壤之别</td><td>差别极大（最通用）</td><td>只讲差别，不讲高下</td></tr>
                <tr><td>泾渭分明</td><td>界限清楚（褒）</td><td>强调「分得清」</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>判若云泥</b>　十年之后，两家企业的境遇已<b>判若云泥</b>。</div>
                <div><b>天壤之别</b>　城乡医疗条件仍有<b>天壤之别</b>。</div>
                <div><b>泾渭分明</b>　公与私的界限必须<b>泾渭分明</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>在他的画里，一笔是工笔的细密，一笔是写意的奔放，两种语言却____，看不出拼接的痕迹。</ExampleQuestion>
                <ExampleOptions><span>A. 相得益彰</span><span>B. 判若云泥</span><span>C. 天壤之别</span><span>D. 泾渭分明</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中「<b>两种语言却看不出拼接痕迹</b>」，说明两者<b>配合之后效果更好</b>，选「相得益彰」。「判若云泥」「天壤之别」都指<b>差别大</b>，与「融合无痕」相反；「泾渭分明」指<b>界限清楚</b>，也与「看不出痕迹」相反。<b>看到「却」这个转折，先判断是「差得远」还是「合得好」——本题是后者。</b></ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>26. 迥然不同 / 截然不同 / 大相径庭</BlockTitle>
              <div className="diff"><b>一句话区别：</b>迥然不同＝<b>差别很大、明显不一样</b>（中性，程度中等）；截然不同＝<b>完全不一样，像被切断一样分明</b>（程度最重，多指性质、结论）；大相径庭＝<b>彼此相差很远、不一致</b>（多指说法、做法、结果）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>迥然不同</td><td>明显不一样（中性）</td><td>风格、气质、面貌</td></tr>
                <tr><td>截然不同</td><td>完全不同（最重）</td><td>性质、结论、态度</td></tr>
                <tr><td>大相径庭</td><td>相差很远、不一致</td><td>说法、做法、结论</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>迥然不同</b>　两代人的审美<b>迥然不同</b>。</div>
                <div><b>截然不同</b>　两份检测报告给出的结论<b>截然相反</b>。</div>
                <div><b>大相径庭</b>　同一份材料，两位学者的解读<b>大相径庭</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>同一位老师，在课堂上是严师，回到家里却像换了个人，耐心得近乎溺爱——两种形象____。</ExampleQuestion>
                <ExampleOptions><span>A. 大相径庭</span><span>B. 判若云泥</span><span>C. 迥然不同</span><span>D. 截然相反</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">C</span></b><br />解析：句中「<b>像换了个人</b>」强调<b>明显不一样</b>，但两种形象并非「正反对立」，选「迥然不同」。「截然相反」程度最重，要求<b>性质完全对立</b>（如「一份合格、一份严重超标」）；「大相径庭」多用于<b>说法、做法、结论</b>的不一致；「判若云泥」含<b>高下之分</b>，句中是两种角色，不分高下。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>27. 目无全牛 / 炉火纯青 / 登峰造极 / 登堂入室</BlockTitle>
              <div className="diff"><b>一句话区别：</b>目无全牛＝<b>技艺纯熟到得心应手</b>（<b>不是「没有全局观」</b>）；炉火纯青＝<b>功夫达到纯熟完美的境界</b>；登峰造极＝<b>达到最高点</b>（可褒可贬）；登堂入室＝<b>由浅入深，进入更高境界</b>（多指学问、技艺刚入门到精深的阶段）。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>目无全牛</td><td>技艺纯熟（不是没有全局）</td><td>多指手艺、刀法</td></tr>
                <tr><td>炉火纯青</td><td>功夫纯熟完美</td><td>可指技艺、修养</td></tr>
                <tr><td>登峰造极</td><td>达到顶点（可褒可贬）</td><td>技艺到极致 / 坏事到极点</td></tr>
                <tr><td>登堂入室</td><td>由浅入深达到高境</td><td>学问、技艺的阶段</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>目无全牛</b>　老师傅刀法纯熟，早已<b>目无全牛</b>。</div>
                <div><b>炉火纯青</b>　他的太极拳已到<b>炉火纯青</b>。</div>
                <div><b>登峰造极</b>　他的篆刻技艺<b>登峰造极</b>。</div>
                <div><b>登堂入室</b>　学琴十年，才算<b>登堂入室</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>他切菜的功夫到了什么地步？闭着眼睛下刀，片薄如纸、丝细如发，真是____。</ExampleQuestion>
                <ExampleOptions><span>A. 炉火纯青</span><span>B. 登峰造极</span><span>C. 巧夺天工</span><span>D. 目无全牛</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句中「<b>闭着眼睛下刀，片薄如纸</b>」形容<b>功夫纯熟到完美的境界</b>，选「炉火纯青」。「目无全牛」虽也指技艺纯熟，但它更强调「<b>看透结构、下刀有据</b>」的认知层面，且多用于解剖、雕刻类；「登峰造极」程度过重（到顶了），且可含贬义；「巧夺天工」只能形容<b>人工制品</b>，不能形容「功夫」。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
      
            <Block>
              <BlockTitle>28. 巧夺天工 / 鬼斧神工 / 精雕细琢 / 匠心独运</BlockTitle>
              <div className="diff"><b>一句话区别：</b>巧夺天工＝<b>人工的精巧胜过天然</b>（<b>只能形容人工制品</b>）；鬼斧神工＝<b>技艺神奇，非人力所能</b>（多指自然景观或非凡技艺）；精雕细琢＝<b>精心细致地加工</b>；匠心独运＝<b>构思独到巧妙</b>。</div>
              <DataTable>
                <tr><th>词语</th><th>核心侧重</th><th>典型搭配</th></tr>
                <tr><td>巧夺天工</td><td>人工胜过天然（只指人工制品）</td><td>玉雕、木雕、刺绣</td></tr>
                <tr><td>鬼斧神工</td><td>神奇非凡（多指自然景观）</td><td>峡谷、石林</td></tr>
                <tr><td>精雕细琢</td><td>精心细致地加工</td><td>也比喻做事细致</td></tr>
                <tr><td>匠心独运</td><td>构思独到（多指艺术）</td><td>布局、设计</td></tr>
              </DataTable>
              <div className="egs">
                <div><b>巧夺天工</b>　这件木雕<b>巧夺天工</b>，连叶脉都清晰可见。</div>
                <div><b>鬼斧神工</b>　峡谷两侧的石柱如<b>鬼斧神工</b>。</div>
                <div><b>精雕细琢</b>　这份方案<b>精雕细琢</b>，连字号都统一过。</div>
                <div><b>匠心独运</b>　整座园林的布局<b>匠心独运</b>。</div>
              </div>
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>张家界的石英砂岩峰林拔地而起，云雾在其间流动，站在观景台上，人人都感叹大自然真是____。</ExampleQuestion>
                <ExampleOptions><span>A. 巧夺天工</span><span>B. 鬼斧神工</span><span>C. 精雕细琢</span><span>D. 匠心独运</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">B</span></b><br />解析：空处主语是「<b>大自然</b>」，形容自然形成的奇景，用「鬼斧神工」。「巧夺天工」的前提是<b>人工制品</b>（人工胜过天然），用来形容自然景物逻辑自相矛盾——这是本题最大的坑；「精雕细琢」「匠心独运」都要求<b>有人工加工或构思</b>，与「自然形成」不符。</ExampleAnswer>
              </ExampleBody>
            </Example>
            </Block>
    </>
  )
}
