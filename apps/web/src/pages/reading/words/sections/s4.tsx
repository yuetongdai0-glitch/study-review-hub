import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 四、危局 · 困顿
 *
 * @returns 该节正文。
 */
export default function S5(): ReactElement {
  return (
    <>
      <Callout variant="key">
              这一讲按「<b>危险到哪一步</b>」排：随时会垮（岌岌可危 / 危如累卵）→ 只剩一口气（命悬一线 / 奄奄一息）→ 马上就到（危在旦夕）→ 很快消失（危若朝露）→ 局势不稳（风雨飘摇）。后一半转到「<b>使不上劲</b>」：力不从心、力有未逮、鞭长莫及、望洋兴叹、爱莫能助、独木难支、回天乏术——七个词全是「做不到」，差别只在<b>为什么做不到</b>。
            </Callout>
      
            <Block>
              <BlockTitle>词群 1（本讲共 19 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>岌岌可危</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">地位政权</span></div>
              <div className="wg-d">十分危险、快要倾覆，多指地位、政权、建筑</div>
              <div className="wg-e">这座千年木塔倾斜严重，已岌岌可危。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>危如累卵</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">局势处境</span></div>
              <div className="wg-d">危险得像堆起来的蛋，强调「随时会塌」</div>
              <div className="wg-e">资金链一旦断裂，公司处境危如累卵。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>命悬一线</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">人·生命</span></div>
              <div className="wg-d">性命悬在一根线上，只能指人</div>
              <div className="wg-e">洪水中的被困者命悬一线，救援队连夜突入。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>奄奄一息</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">人·企业</span></div>
              <div className="wg-d">只剩一口气，可用于人，也可用于濒亡的事物</div>
              <div className="wg-e">这家老厂订单锐减，已奄奄一息。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>风雨飘摇</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">政权局势</span></div>
              <div className="wg-d">在风雨中飘荡不定，比喻局势动荡不安</div>
              <div className="wg-e">那个政权内外交困，已是风雨飘摇。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>危在旦夕</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">生命防线</span></div>
              <div className="wg-d">危险就在早晚之间，时间上最近</div>
              <div className="wg-e">堤防出现管涌，下游村庄危在旦夕。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 2（本讲共 19 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>危若朝露</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">繁荣局面</span></div>
              <div className="wg-d">危险得像早晨的露水，太阳一晒就消失</div>
              <div className="wg-e">靠高杠杆撑起的繁荣，危若朝露。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>积重难返</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">问题风气</span></div>
              <div className="wg-d">长期形成的不良风气、问题很难改变，只用于「坏东西」</div>
              <div className="wg-e">形式主义积重难返，必须久久为功。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>尾大不掉</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">机构下属</span></div>
              <div className="wg-d">尾巴太大摇不动，比喻机构庞大或下属势大、指挥不动</div>
              <div className="wg-e">机构层层叠叠，早已尾大不掉。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>一盘散沙</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">队伍人心</span></div>
              <div className="wg-d">像一盘散开的沙子，强调没有组织、人心不齐</div>
              <div className="wg-e">没有共同目标，队伍就是一盘散沙。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>桀骜不驯</b><span className="wg-t t-bian">贬</span><span className="wg-t t-obj">人性情</span></div>
              <div className="wg-d">性情倔强、不驯服，多指人</div>
              <div className="wg-e">这匹野马桀骜不驯，换了三个骑手都压不住。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>四面楚歌</b><span className="wg-t t-bian">中偏贬</span><span className="wg-t t-obj">处境</span></div>
              <div className="wg-d">陷入孤立无援的困境，重在「被包围、没人帮」</div>
              <div className="wg-e">失去盟友之后，他陷入四面楚歌的境地。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 3（本讲共 19 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>独木难支</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">力量</span></div>
              <div className="wg-d">一根木头支不住大厦，比喻一个人的力量撑不起全局</div>
              <div className="wg-e">这么大的摊子，只靠他一个人独木难支。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>回天乏术</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">病情败局</span></div>
              <div className="wg-d">用尽办法也无法挽回，多指病情、败局</div>
              <div className="wg-e">等专家赶到时，已是回天乏术。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>力不从心</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">能力</span></div>
              <div className="wg-d">心里想做，力量却达不到</div>
              <div className="wg-e">他本想再带一届毕业班，无奈力不从心。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>力有未逮</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">谦·能力</span></div>
              <div className="wg-d">能力达不到，可用于自谦</div>
              <div className="wg-e">此事千头万绪，恐力有未逮，还请另请高明。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>爱莫能助</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">帮助援手</span></div>
              <div className="wg-d">心里同情却无力帮助，含情感色彩</div>
              <div className="wg-e">我很想替他分担，可惜爱莫能助。</div>
            </div>
            <div className="wg">
              <div className="wg-h"><b>鞭长莫及</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">管辖监管</span></div>
              <div className="wg-d">力量达不到，多指管辖范围之外</div>
              <div className="wg-e">异地维权，本地监管往往鞭长莫及。</div>
            </div>
            </Block>
            <Block>
              <BlockTitle>词群 4（本讲共 19 词）</BlockTitle>
            <div className="wg">
              <div className="wg-h"><b>望洋兴叹</b><span className="wg-t t-zhong">中</span><span className="wg-t t-obj">面对宏大</span></div>
              <div className="wg-d">面对宏大的事物感叹自己渺小，重在「感叹」</div>
              <div className="wg-e">面对浩如烟海的典籍，初学者常望洋兴叹。</div>
            </div>
            </Block>
      
            <div className="memo">
              要垮＝岌岌可危 / 危如累卵；要死＝命悬一线（人） / 奄奄一息（可指事物）；快到＝危在旦夕；快没＝危若朝露；不稳＝风雨飘摇。使不上劲＝力不从心（能力） / 力有未逮（可自谦） / 鞭长莫及（够不着） / 望洋兴叹（感叹） / 爱莫能助（想帮帮不上） / 独木难支（人手少） / 回天乏术（救不回）。
            </div>
      
            <Example>
              <ExampleHeader>例题 · 真题改编 · 同考点仿题</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>会开了三个小时，方案改了七稿，各部门都说「原则上同意」，具体落实却无人牵头。这种____的作风，比公开反对更难整治。</ExampleQuestion>
                <ExampleOptions><span>A. 尾大不掉</span><span>B. 一盘散沙</span><span>C. 风雨飘摇</span><span>D. 积重难返</span></ExampleOptions>
                <ExampleAnswer><b>答案：<span className="correct">D</span></b><br />解析：空处修饰「<b>作风</b>」，且后文有「比公开反对更难整治」，说明这是一种<b>长期形成、难以改变的不良风气</b>，选「积重难返」——它<b>只用于坏的、积久的问题</b>。「尾大不掉」指<b>机构庞大或下属势大，指挥不动</b>，与「作风」不搭；「一盘散沙」强调<b>没有组织、人心不齐</b>，句中是「有人开会、有人同意」，不是没人管；「风雨飘摇」形容<b>局势动荡</b>，程度和对象都不对。</ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
