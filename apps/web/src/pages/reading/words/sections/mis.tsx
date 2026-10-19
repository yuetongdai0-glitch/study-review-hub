import type { ReactElement } from 'react'
import { Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 望文生义 · 二十四例速查（考前扫一遍）
 *
 * @returns 该节正文。
 */
export default function S57(): ReactElement {
  return (
    <>
      <Callout variant="key">
              这些词<b>只要按字面理解，必错</b>。看的时候别看词，直接看「真实义」那一栏，把错误理解当成「坑」记住。
            </Callout>
            <DataTable>
              <tr><th>词语</th><th>真实含义</th><th>例句</th></tr>
              <tr><td>七月流火</td><td>天气<b>转凉</b>（大火星向西沉）<br /><span className="wrong">✗ 误作：天气炎热</span></td><td>「七月流火，九月授衣」，说的正是暑气渐退。</td></tr>
              <tr><td>差强人意</td><td><b>大体上还能使人满意</b><br /><span className="wrong">✗ 误作：不令人满意</span></td><td>这份初稿虽不完美，但已差强人意，可以往下推进。</td></tr>
              <tr><td>不刊之论</td><td><b>不可改动的言论</b>（刊＝削除）<br /><span className="wrong">✗ 误作：不能刊登的言论</span></td><td>这篇文章被学界誉为不刊之论。</td></tr>
              <tr><td>空穴来风</td><td><b>事出有因</b>（有了洞才有风）<br /><span className="wrong">✗ 误作：毫无根据</span></td><td>此类传闻并非空穴来风，早有人私下提过。</td></tr>
              <tr><td>首当其冲</td><td><b>最先受到冲击</b><br /><span className="wrong">✗ 误作：首先、带头</span></td><td>台风登陆，沿海城市首当其冲。</td></tr>
              <tr><td>屡试不爽</td><td>每次试验都<b>没有差错</b>（爽＝差错）<br /><span className="wrong">✗ 误作：屡次不成功</span></td><td>这个配方屡试不爽，从没失手。</td></tr>
              <tr><td>明日黄花</td><td><b>过时的事物</b><br /><span className="wrong">✗ 误作：未来的希望</span></td><td>这套方案放到今天已是明日黄花。</td></tr>
              <tr><td>无所不至</td><td><b>什么坏事都干得出来</b>（贬）<br /><span className="wrong">✗ 误作：到处都到、关怀周到</span></td><td>这伙人敲诈勒索，无所不至。</td></tr>
              <tr><td>危言危行</td><td>说<b>正直</b>的话、做<b>正直</b>的事（危＝正）<br /><span className="wrong">✗ 误作：危险的言行</span></td><td>他一生危言危行，不肯随人俯仰。</td></tr>
              <tr><td>目无全牛</td><td>技艺<b>纯熟</b>到了得心应手<br /><span className="wrong">✗ 误作：眼里没有全局</span></td><td>老师傅刀法纯熟，早已目无全牛。</td></tr>
              <tr><td>曾几何时</td><td>时间<b>没过多久</b><br /><span className="wrong">✗ 误作：曾经、从前</span></td><td>曾几何时，这里还是一片荒滩。</td></tr>
              <tr><td>久假不归</td><td>长期<b>借用不还</b>（假＝借）<br /><span className="wrong">✗ 误作：长期请假不归</span></td><td>那批档案被他久假不归，至今未还。</td></tr>
              <tr><td>不足为训</td><td>不值得<b>作为准则</b>（训＝准则）<br /><span className="wrong">✗ 误作：不值得作为教训</span></td><td>这种侥幸取胜的做法，不足为训。</td></tr>
              <tr><td>三人成虎</td><td>谣言<b>重复多次</b>就使人信以为真<br /><span className="wrong">✗ 误作：三个人力量大</span></td><td>三人成虎，一条假消息传了三轮就成了「事实」。</td></tr>
              <tr><td>望其项背</td><td><b>赶得上</b>（多用于否定）<br /><span className="wrong">✗ 误作：难以企及</span></td><td>其工艺之精，今人难以望其项背。</td></tr>
              <tr><td>惨淡经营</td><td><b>费尽心力地经营</b>（褒）<br /><span className="wrong">✗ 误作：经营不景气</span></td><td>这家书店惨淡经营二十年，终于有了起色。</td></tr>
              <tr><td>一文不名</td><td><b>一个钱都没有</b>（名＝占有）<br /><span className="wrong">✗ 误作：一文不值</span></td><td>他初到城里时一文不名，靠摆摊起家。</td></tr>
              <tr><td>大方之家</td><td>懂得大道理的<b>内行人</b><br /><span className="wrong">✗ 误作：慷慨大方的人</span></td><td>这点雕虫小技，恐贻笑于大方之家。</td></tr>
              <tr><td>火中取栗</td><td><b>冒险为别人出力，自己吃亏</b><br /><span className="wrong">✗ 误作：冒险获取利益</span></td><td>替人火中取栗，最后落得两手空空。</td></tr>
              <tr><td>弹冠相庆</td><td><b>坏人因即将得势而互相庆贺</b>（贬）<br /><span className="wrong">✗ 误作：互相庆祝好事</span></td><td>案件尚未了结，几个同伙已在弹冠相庆。</td></tr>
              <tr><td>罄竹难书</td><td><b>罪恶多得写不完</b><br /><span className="wrong">✗ 误作：功绩卓著</span></td><td>其罪行罄竹难书，判决书足足念了两个小时。</td></tr>
              <tr><td>炙手可热</td><td><b>权势大、气焰盛</b>（贬）<br /><span className="wrong">✗ 误作：热门抢手</span></td><td>他当年炙手可热，门前车马不断。</td></tr>
              <tr><td>处心积虑</td><td><b>长期谋划（干坏事）</b>（贬）<br /><span className="wrong">✗ 误作：费尽心思（褒）</span></td><td>他处心积虑要挤走对手，手段并不光彩。</td></tr>
              <tr><td>面面相觑</td><td>惊惧或无奈地<b>互相对看</b><br /><span className="wrong">✗ 误作：相视而笑</span></td><td>数据一出，会议室里众人面面相觑。</td></tr>
            </DataTable>
      <Example>
                <ExampleHeader>例题 · 真题改编 · 同考点仿题（望文生义）</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>这份申报材料虽然还有不少粗糙之处，但框架完整、数据扎实，作为初稿已属____，改两轮就能报上去。</ExampleQuestion>
                  <ExampleOptions><span>A. 差强人意</span><span>B. 不尽人意</span><span>C. 大失所望</span><span>D. 无可厚非</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：空后「<b>改两轮就能报上去</b>」说明这份稿子是<b>大体上还能让人满意</b>的，正合「差强人意」——<b>差＝尚、略，是「还算能让人满意」，不是「不令人满意」</b>。这是被误用频率最高的成语之一。<br />·「不尽人意」是「不能尽如人意」，与「改两轮就能报」的肯定语气不符；<br />·「大失所望」程度过重，且与后文矛盾；<br />·「无可厚非」指<b>不必过分责难</b>，是「有情可原」，不是「质量尚可」。</ExampleAnswer>
                </ExampleBody>
              </Example>
      
            <Example>
                <ExampleHeader>例题 · 真题改编 · 同考点仿题（望文生义）</ExampleHeader>
                <ExampleBody>
                  <ExampleQuestion>所谓「____」，说的是火星（心宿二）在农历七月往西沉，暑气渐退、天气转凉，与「天热得像流火」恰好相反。</ExampleQuestion>
                  <ExampleOptions><span>A. 七月流火</span><span>B. 骄阳似火</span><span>C. 赤日炎炎</span><span>D. 流金铄石</span></ExampleOptions>
                  <ExampleAnswer><b>答案：<span className="correct">A</span></b><br />解析：句子后半段已经把意思说透——「<b>暑气渐退、天气转凉</b>，与天热恰好相反」，正是「七月流火」的本义（火＝心宿二，向西下沉）。<br />·「骄阳似火」「赤日炎炎」「流金铄石」都在形容<b>天气炎热</b>，与「转凉」完全相反，恰好是「七月流火」被误用成的那层意思。<b>记住：七月流火＝要凉了。</b></ExampleAnswer>
                </ExampleBody>
              </Example>
    </>
  )
}
