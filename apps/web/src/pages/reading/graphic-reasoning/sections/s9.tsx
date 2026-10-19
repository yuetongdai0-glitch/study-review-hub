import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleQuestion, PointList } from '@/components/content'

/**
 * 九、不规则 / 平面拼合 / 折纸
 *
 * @returns 该节正文。
 */
export default function S10(): ReactElement {
  return (
    <>
      <Block>
        <BlockTitle>1. 不规则图形（多面体展开图）：先看选项差异，再抓题干特殊</BlockTitle>
        <p>「不规则」指的是：题干给一个<strong>不规则立体图形</strong>（长方体、多面体、带缺口的立体），要求选它的<strong>外表面展开图</strong>；或者反过来给展开图，问能折成哪个立体。广东、山东、江苏、联考、浙江、四川、上海等地的事业单位和公务员考试都在考，是必须拿分的"技巧题"。</p>
        <p>老师的核心提醒：这类题<strong>别在脑子里把整个立体折一遍</strong>。命题人只在"某一条公共边"或"某一个特殊面"上动手脚，所以只需抓住这两个突破口。</p>
        <Callout variant="key">
          <p><b>技巧一：</b>对比选项找差异，用<strong>公共边</strong>做排除（公共边长度相等）。</p>
          <p><b>技巧二：</b>题干找<strong>特殊</strong>（最大的面、标记物），看它周边。</p>
        </Callout>
        <PointList>
          <li><b>公共边法：</b>立体折好后，相邻两个面共用同一条棱，这条棱在两个面上必须<strong>一样长</strong>。选项之间往往只差"某个面接在哪条棱上"，直接比公共边长度就能排除。</li>
          <li><b>找特殊法：</b>题干立面上必有一块<strong>最大的面</strong>或<strong>带标记的面</strong>（黑块、斜线阴影、记号），它在立体中的位置以及周围四个面的<strong>顺序、朝向</strong>是唯一确定的。</li>
          <li><b>易错点：</b>（1）只看单个面像不像就选；（2）忘了公共边长度必须等于那条棱；（3）只核对一个面，不"看周边"。</li>
        </PointList>
        <Callout variant="tip">考场顺序：① 先横看四个选项，找出差异（通常只有 1～2 处不同）；② 回题干找最大面／标记物；③ 用公共边长度复核一遍。整套流程不需要想象完整的三维折叠。</Callout>
      </Block>
      
      <Block>
        <BlockTitle>2. 不规则 · 用公共边做排除</BlockTitle>
        <p>这一类题型的选项长得都很像，差异集中在"某一块面接在横排的第几格""接着的面边长是多少"。<strong>把相邻两面的公共边长度逐一核对</strong>，不等长的直接排除。</p>
      
        <Example>
          <ExampleHeader>📝 例题1 · 不规则（公共边 · 2023 广东）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>以下平面图形最可能折叠成左图所示长方体的是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 212 149.6" role="img" aria-label="题干左图为长方体">
      <g transform="translate(8,0)">
              <polygon points="34,62 134,62 134,112 34,112" fill="none" stroke="#1f2937" strokeWidth={2} />
              <polygon points="34,62 62,36 162,36 134,62" fill="none" stroke="#1f2937" strokeWidth={2} />
              <polygon points="134,62 162,36 162,86 134,112" fill="none" stroke="#1f2937" strokeWidth={2} />
              <text x={98.0} y={124.6} fill="#6b7280" fontSize={12} textAnchor="middle">长方体（长、宽、高互不相等）</text>
            </g>
      </svg><figcaption>图：题干左图</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 472 153" role="img" aria-label="四个展开图选项">
      <g transform="translate(2,0)">
              
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={20} y={55} width={26} height={22} /><rect x={46} y={55} width={18} height={22} />
                <rect x={64} y={55} width={26} height={22} /><rect x={90} y={55} width={18} height={22} />
                <rect x={46} y={33} width={18} height={22} /><rect x={90} y={77} width={18} height={22} />
              </g>
              <g fill="none" stroke="#f59e0b" strokeWidth={3}>
                <line x1={20} y1={55} x2={64} y2={55} /><line x1={46} y1={33} x2={46} y2={55} />
                <line x1={64} y1={33} x2={64} y2={55} /><line x1={90} y1={77} x2={108} y2={77} />
              </g>
              
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={140} y={55} width={26} height={22} /><rect x={166} y={55} width={18} height={22} />
                <rect x={184} y={55} width={26} height={22} /><rect x={210} y={55} width={18} height={22} />
                <rect x={184} y={29} width={26} height={26} /><rect x={166} y={77} width={18} height={22} />
              </g>
              <g fill="none" stroke="#10b981" strokeWidth={3}>
                <line x1={140} y1={55} x2={166} y2={55} /><line x1={166} y1={77} x2={184} y2={77} />
                <line x1={166} y1={77} x2={166} y2={99} /><polyline points="184,55 184,29 210,29 210,55" />
              </g>
              
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={250} y={55} width={26} height={22} /><rect x={276} y={55} width={18} height={22} />
                <rect x={294} y={55} width={26} height={22} /><rect x={320} y={55} width={18} height={22} />
                <rect x={250} y={22} width={22} height={33} /><rect x={294} y={77} width={26} height={22} />
              </g>
              <g fill="none" stroke="#ef4444" strokeWidth={3}>
                <line x1={250} y1={55} x2={272} y2={55} /><line x1={250} y1={22} x2={272} y2={22} />
              </g>
              
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={360} y={55} width={26} height={22} /><rect x={386} y={55} width={18} height={22} />
                <rect x={404} y={55} width={26} height={22} /><rect x={430} y={55} width={18} height={22} />
                <rect x={386} y={33} width={18} height={22} /><rect x={404} y={77} width={26} height={22} />
              </g>
              <g fill="none" stroke="#7c3aed" strokeWidth={3}>
                <line x1={386} y1={55} x2={404} y2={55} /><line x1={404} y1={77} x2={430} y2={77} />
              </g>
              <text x={64} y={122} fill="#1f2937" fontSize={13} textAnchor="middle">A</text>
              <text x={184} y={122} fill="#ef4444" fontSize={13} textAnchor="middle">B</text>
              <text x={294} y={122} fill="#1f2937" fontSize={13} textAnchor="middle">C</text>
              <text x={404} y={122} fill="#1f2937" fontSize={13} textAnchor="middle">D</text>
              <polyline points="176,126 181,131 194,116" fill="none" stroke="#ef4444" strokeWidth={3} />
            </g>
      </svg><figcaption>图：四个展开图选项</figcaption></figure>
            <ExampleAnswer><b>解析：</b>题干的立体是长方体，三个方向的棱长互不相等，所以展开图里<strong>任意相邻两个面的公共边长度必须与长方体对应的棱长一致</strong>。<br />
            A：竖着接在横排上的那个小面与横排共用的边长度不对（把面接到了不同长度的棱上）；C：左边竖面与横排面的公共边长度不符；D：上下两个小面所接的位置和公共边长度都对不上。<br />
            B：横排四个面依次是"长×高、宽×高、长×高、宽×高"，上下两块是"长×宽"，每一对相邻面的公共边长度都与长方体的棱长一一相等 ⇒ 选 B。<br /><span className="correct">答案：B</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题2 · 不规则（公共边 · 2022 山东）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下面哪一项是给定立体图形的外表面展开图？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 430 122" role="img" aria-label="题干立体图形：带缺口与斜切面的多面体">
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <polygon points="60,46 100,46 100,100 60,100" />
                <polygon points="60,46 78,32 118,32 100,46" />
                <polygon points="100,46 118,32 118,86 100,100" />
                <polygon points="100,72 200,72 200,100 100,100" />
                <polygon points="100,72 118,58 218,58 200,72" />
                <polygon points="200,72 218,58 218,86 200,100" />
              </g>
              <g fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 4">
                <line x1={100} y1={46} x2={100} y2={72} />
                <line x1={100} y1={72} x2={118} y2={58} />
              </g>
              <text x={240} y={70} fill="#6b7280" fontSize={12}>带缺口的立体：左侧一块斜切面</text>
            </svg><figcaption>图：题干立体图形</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 488 143" role="img" aria-label="四个展开图选项">
      <g transform="translate(12,0)">
              
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={26} y={52} width={24} height={16} /><rect x={50} y={52} width={24} height={16} /><rect x={74} y={52} width={24} height={16} />
                <rect x={98} y={68} width={24} height={16} />
                <polygon points="26,52 10,44 24,36 40,44" />
                <polygon points="98,68 114,60 128,68 114,76" />
              </g>
              <g fill="none" stroke="#ef4444" strokeWidth={3}><polygon points="26,52 10,44 24,36 40,44" /></g>
              <g fill="none" stroke="#f59e0b" strokeWidth={3}><line x1={50} y1={52} x2={98} y2={52} /></g>
              <g fill="none" stroke="#10b981" strokeWidth={3}><polyline points="110,42 128,50" /></g>
              
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={146} y={52} width={24} height={16} /><rect x={170} y={52} width={24} height={16} /><rect x={194} y={52} width={24} height={16} />
                <rect x={218} y={68} width={24} height={16} />
                <polygon points="146,52 130,44 144,36 160,44" />
                <polygon points="218,68 234,60 248,68 234,76" />
              </g>
              <g fill="none" stroke="#ef4444" strokeWidth={3}><polygon points="146,52 130,44 144,36 160,44" /></g>
              <g fill="none" stroke="#f59e0b" strokeWidth={3}><line x1={170} y1={52} x2={218} y2={52} /></g>
              <g fill="none" stroke="#10b981" strokeWidth={3}><polyline points="230,42 248,50" /></g>
              
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={266} y={42} width={24} height={16} /><rect x={266} y={58} width={24} height={16} />
                <rect x={290} y={58} width={24} height={16} /><rect x={314} y={58} width={24} height={16} />
                <polygon points="314,42 330,34 344,42 330,50" />
                <polygon points="266,58 250,50 264,42 280,50" />
              </g>
              <g fill="none" stroke="#ef4444" strokeWidth={3}><polygon points="266,58 250,50 264,42 280,50" /></g>
              <g fill="none" stroke="#f59e0b" strokeWidth={3}><polyline points="266,58 314,58" /></g>
              <g fill="none" stroke="#10b981" strokeWidth={3}><polyline points="326,34 344,42" /></g>
              
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={376} y={52} width={24} height={16} /><rect x={400} y={52} width={24} height={16} /><rect x={424} y={52} width={24} height={16} />
                <rect x={376} y={68} width={24} height={16} />
                <polygon points="376,52 360,44 374,36 390,44" />
                <polygon points="424,36 440,28 454,36 440,44" />
              </g>
              <g fill="none" stroke="#ef4444" strokeWidth={3}><polygon points="376,52 360,44 374,36 390,44" /></g>
              <g fill="none" stroke="#f59e0b" strokeWidth={3}><line x1={400} y1={52} x2={448} y2={52} /></g>
              <text x={62} y={112} fill="#1f2937" fontSize={13} textAnchor="middle">A</text>
              <text x={182} y={112} fill="#ef4444" fontSize={13} textAnchor="middle">B</text>
              <text x={302} y={112} fill="#1f2937" fontSize={13} textAnchor="middle">C</text>
              <text x={412} y={112} fill="#1f2937" fontSize={13} textAnchor="middle">D</text>
              <polyline points="174,116 179,121 192,106" fill="none" stroke="#ef4444" strokeWidth={3} />
            </g>
      </svg><figcaption>图：四个展开图选项（示意）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>题干立体的左侧有一块<strong>斜切面（三角形面）</strong>，还横着一条最长的棱，展开图中必须有一块对应的斜切面与它共用等长的边。<br />
            A、C、D：红色标出的斜切面、橙色标出的长棱，二者相接位置或共边长度与题干立体对不上（面被接到了长度不同的棱上）；<br />
            B：红色斜切面 + 橙色长棱 + 绿色小面，三者的公共边长度与题干一一对应 ⇒ 选 B。<br /><span className="correct">答案：B</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Callout variant="tip"><b>「公共边」小结：</b>做这类题只问一句话——<strong>"这两个面共用的那条边，在立体上到底是多长？"</strong>。选项里把面接在同一条棱上、但边长不等，就是命题人埋的坑。</Callout>
      </Block>
      
      <Block>
        <BlockTitle>3. 不规则 · 题干找特殊，看周边</BlockTitle>
        <p>当选项差异不明显（每张展开图都"看起来能折"）时，换第二个突破口：<strong>在题干里找那个最特殊的面</strong>——往往是最大的面、或带黑块/阴影标记的面，然后只看它周围四个面的顺序和朝向。</p>
        <PointList>
          <li><b>最大的面：</b>最大的面折好后周围紧挨着哪四个面，顺序、朝向唯一，选项里对不上的排除。</li>
          <li><b>标记物：</b>带黑块、斜线、记号的面是"身份证"，先定位它在立体上的位置，再看它的邻居。</li>
        </PointList>
      
        <Example>
          <ExampleHeader>📝 例题3 · 不规则（找最大的面 · 2022 联考事业）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>将下面的图形折叠后，将获得的图形是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 330 152" role="img" aria-label="题干展开图，最大面用橙色标出">
      <g transform="translate(16,0)">
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={150} y={42} width={34} height={34} />
                <rect x={184} y={56} width={16} height={20} />
                <rect x={200} y={42} width={58} height={34} />
                <rect x={258} y={42} width={34} height={34} />
                <rect x={120} y={76} width={30} height={34} />
                <rect x={150} y={76} width={50} height={34} />
                <rect x={200} y={76} width={58} height={34} />
                <rect x={100} y={76} width={20} height={34} />
                <rect x={184} y={110} width={16} height={20} />
                <rect x={150} y={110} width={34} height={18} />
              </g>
              <g fill="none" stroke="#f59e0b" strokeWidth={3}><rect x={150} y={76} width={50} height={34} /></g>
              <g fill="none" stroke="#ef4444" strokeWidth={3}><rect x={100} y={76} width={20} height={34} /></g>
              <g fill="none" stroke="#10b981" strokeWidth={3}><line x1={258} y1={76} x2={258} y2={110} /></g>
              <text x={6} y={98.0} fill="#2563eb" fontSize={12} textAnchor="start">最大的面（看它的周边）</text>
            </g>
      </svg><figcaption>图：题干展开图（最大面用橙色标出）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 480 140" role="img" aria-label="四个选项，都是带台阶的立体图形">
              
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <polygon points="26,60 66,60 66,96 26,96" /><polygon points="26,60 38,50 78,50 66,60" />
                <polygon points="66,60 78,50 78,86 66,96" />
                <polygon points="66,44 96,44 96,96 66,96" /><polygon points="66,44 78,34 108,34 96,44" />
                <polygon points="96,44 108,34 108,86 96,96" />
              </g>
              <g fill="none" stroke="#ef4444" strokeWidth={3}><polyline points="66,44 96,44 96,96 66,96" /></g>
              <g fill="none" stroke="#10b981" strokeWidth={3}><line x1={96} y1={44} x2={96} y2={96} /><line x1={66} y1={44} x2={66} y2={96} /></g>
              
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <polygon points="146,62 186,62 186,96 146,96" /><polygon points="146,62 158,52 198,52 186,62" />
                <polygon points="186,62 198,52 198,86 186,96" />
                <polygon points="186,76 216,76 216,96 186,96" /><polygon points="186,76 198,66 228,66 216,76" />
                <polygon points="216,76 228,66 228,86 216,96" />
              </g>
              <g fill="none" stroke="#10b981" strokeWidth={3}><polygon points="186,76 216,76 216,96 186,96" /></g>
              
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <polygon points="266,62 306,62 306,96 266,96" /><polygon points="266,62 278,52 318,52 306,62" />
                <polygon points="306,62 318,52 318,86 306,96" />
                <polygon points="306,82 336,82 336,96 306,96" /><polygon points="306,82 318,72 348,72 336,82" />
                <polygon points="336,82 348,72 348,86 336,96" />
              </g>
              <g fill="none" stroke="#10b981" strokeWidth={3}><polygon points="306,82 336,82 336,96 306,96" /></g>
              
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <polygon points="386,66 426,66 426,96 386,96" /><polygon points="386,66 398,56 438,56 426,66" />
                <polygon points="426,66 438,56 438,86 426,96" />
                <polygon points="426,36 446,36 446,96 426,96" /><polygon points="426,36 438,26 458,26 446,36" />
              </g>
              <g fill="none" stroke="#10b981" strokeWidth={3}><line x1={426} y1={36} x2={426} y2={96} /></g>
              <text x={60} y={115} fill="#1f2937" fontSize={13} textAnchor="middle">A</text>
              <text x={180} y={115} fill="#ef4444" fontSize={13} textAnchor="middle">B</text>
              <text x={300} y={115} fill="#1f2937" fontSize={13} textAnchor="middle">C</text>
              <text x={410} y={115} fill="#1f2937" fontSize={13} textAnchor="middle">D</text>
              <polyline points="172,112 177,117 190,102" fill="none" stroke="#ef4444" strokeWidth={3} />
            </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>先在展开图里锁定<strong>最大的面</strong>（橙色），它的四周紧挨着哪几块面、每块面的长宽是多少，是唯一的。<br />
            折好后这个最大的面就是立体底部那一大块底面，再看台阶（小方块）在底面的哪一侧：B 中底面周围四面的顺序与展开图完全对应；A 把高出来的那一块接在了侧面（红色面方向错了）；C、D 台阶的位置／高度与"最大面的周边"不符 ⇒ 选 B。<br /><span className="correct">答案：B</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题4 · 不规则（找标记物 · 2024 联考）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下列两图分别是从正面和后面观察某个多面体所得的立体图形，下列哪项是其正确的外表面展开图？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 454 137" role="img" aria-label="从正面和后面观察的立体图形，带1、2、3号标记面">
      <g transform="translate(16,13)">
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <polygon points="40,58 70,58 70,102 40,102" /><polygon points="40,58 56,46 86,46 70,58" />
                <polygon points="70,58 86,46 86,90 70,102" />
                <polygon points="86,74 146,74 146,102 86,102" /><polygon points="86,74 102,62 162,62 146,74" />
                <polygon points="146,74 162,62 162,90 146,102" />
                <polygon points="146,40 186,40 186,102 146,102" /><polygon points="146,40 162,28 202,28 186,40" />
                <polygon points="186,40 202,28 202,90 186,102" />
              </g>
              <path d="M146,40 L186,40 L202,28 L162,28 Z" fill="#4b5563" fillOpacity="0.85" stroke="#1f2937" strokeWidth={2} />
              <path d="M86,74 L102,62 L118,62 L102,74 Z" fill="#9ca3af" stroke="#1f2937" strokeWidth={1.6} />
              <g fill="none" stroke="#10b981" strokeWidth={3}><polygon points="86,74 146,74 146,102 86,102" /></g>
              <g fill="none" stroke="#f59e0b" strokeWidth={3}><polyline points="40,102 70,102 86,90 202,90" /></g>
              <text x={160} y={22} fill="#ef4444" fontSize={13}>1</text>
              <text x={94} y={66} fill="#ef4444" fontSize={13}>2</text>
              <text x={108} y={94} fill="#10b981" fontSize={13}>3</text>
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <polygon points="270,58 320,58 320,102 270,102" /><polygon points="270,58 286,46 336,46 320,58" />
                <polygon points="320,58 336,46 336,90 320,102" />
                <polygon points="320,78 350,78 350,102 320,102" /><polygon points="320,78 336,66 366,66 350,78" />
                <polygon points="350,78 366,66 366,90 350,102" />
                <polygon points="350,40 400,40 400,102 350,102" /><polygon points="350,40 366,28 416,28 400,40" />
                <polygon points="400,40 416,28 416,90 400,102" />
              </g>
              <path d="M270,58 L320,58 L336,46 L286,46 Z" fill="#4b5563" fillOpacity="0.85" stroke="#1f2937" strokeWidth={2} />
              <path d="M320,78 L336,66 L352,66 L336,78 Z" fill="#9ca3af" stroke="#1f2937" strokeWidth={1.6} />
              <g fill="none" stroke="#f59e0b" strokeWidth={3}><polyline points="270,102 320,102 336,90 416,90" /></g>
              <text x={286} y={40} fill="#ef4444" fontSize={13}>1</text>
              <text x={328} y={70} fill="#ef4444" fontSize={13}>2</text>
              <text x={342} y={94} fill="#ef4444" fontSize={13}>3</text>
              <text x={6} y={60.0} fill="#f59e0b" fontSize={12} textAnchor="start">标记物</text>
              <text x={6} y={78.0} fill="#2563eb" fontSize={12} textAnchor="start">最大的面</text>
            </g>
      </svg><figcaption>图：题干的两个观察图（1、2、3 为标记面）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 482 137" role="img" aria-label="四个展开图选项">
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={40} y={40} width={30} height={22} /><rect x={70} y={40} width={22} height={22} />
                <rect x={92} y={40} width={30} height={22} />
                <rect x={70} y={62} width={22} height={18} /><rect x={70} y={80} width={22} height={24} />
                <rect x={92} y={62} width={30} height={18} />
                <rect x={122} y={62} width={22} height={18} />
              </g>
              <rect x={70} y={62} width={22} height={18} fill="#111827" />
              <rect x={122} y={62} width={22} height={18} fill="#111827" />
              <rect x={70} y={40} width={22} height={22} fill="#9ca3af" />
              
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={180} y={36} width={26} height={20} /><rect x={206} y={36} width={20} height={20} />
                <rect x={226} y={36} width={26} height={20} />
                <rect x={206} y={56} width={20} height={16} /><rect x={206} y={72} width={20} height={26} />
                <rect x={226} y={56} width={26} height={16} />
                <rect x={252} y={56} width={20} height={16} />
              </g>
              <rect x={206} y={56} width={20} height={16} fill="#111827" />
              <rect x={226} y={36} width={26} height={20} fill="#111827" />
              <rect x={180} y={36} width={26} height={20} fill="#9ca3af" />
              <rect x={206} y={36} width={20} height={20} fill="#9ca3af" />
              <rect x={206} y={36} width={20} height={20} fill="none" stroke="#f59e0b" strokeWidth={3} />
              <polyline points="212,108 217,113 230,98" fill="none" stroke="#ef4444" strokeWidth={3} />
              
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={310} y={36} width={26} height={20} /><rect x={336} y={36} width={20} height={20} />
                <rect x={356} y={36} width={26} height={20} />
                <rect x={336} y={56} width={20} height={16} /><rect x={336} y={72} width={20} height={26} />
                <rect x={356} y={56} width={26} height={16} />
              </g>
              <rect x={310} y={36} width={26} height={20} fill="#111827" />
              <rect x={336} y={72} width={20} height={26} fill="#111827" />
              <rect x={356} y={56} width={26} height={16} fill="#9ca3af" />
              
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={400} y={36} width={24} height={20} /><rect x={424} y={36} width={18} height={20} />
                <rect x={442} y={36} width={18} height={20} />
                <rect x={424} y={56} width={18} height={16} /><rect x={424} y={72} width={18} height={26} />
                <rect x={404} y={56} width={20} height={16} />
              </g>
              <rect x={400} y={36} width={24} height={20} fill="#9ca3af" />
              <rect x={424} y={56} width={18} height={16} fill="#111827" />
              <rect x={426} y={30} width={20} height={20} fill="none" stroke="#2563eb" strokeWidth={3} />
              <text x={80} y={112} fill="#1f2937" fontSize={13} textAnchor="middle">A</text>
              <text x={220} y={112} fill="#1f2937" fontSize={13} textAnchor="middle">B</text>
              <text x={345} y={112} fill="#1f2937" fontSize={13} textAnchor="middle">C</text>
              <text x={425} y={112} fill="#1f2937" fontSize={13} textAnchor="middle">D</text>
            </svg><figcaption>图：选项 A / B / C / D（黑块为标记面）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>题干两个视图里，<strong>1 号（阴影顶面）是标记物，3 号（绿色面）与它相邻</strong>，橙色标出的是"最大的面"（底面）。<br />
            把标记面与其邻居的<strong>相对位置、朝向</strong>拿到四个选项中比对：A 中黑块（1、2 号面）位置与题干相反；C 中黑块换到了另一侧；D 中黑块的方向错误（2、3 号面上下颠倒）。<br />
            B 中"阴影面 + 黑块面 + 相邻的两块窄面"的排列与题干两视图完全一致 ⇒ 选 B。<br /><span className="correct">答案：B</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Callout variant="tip"><b>「找特殊」小结：</b>题干给你的"最大面""黑块""阴影面"就是路标——先把它按回立体里，再看它周边四块的顺序，选项里位置／朝向不对的直接排除。</Callout>
      </Block>
      
      <Block>
        <BlockTitle>4. 平面拼合（平移型）：出题人怎么画，我们就怎么拆</BlockTitle>
        <p><b>出题者怎么出"平面拼合"？</b>先画好一个图形，把它<strong>复制粘贴</strong>，再<strong>切割</strong>成几块。所以反过来做题：就是把几块"拼回去"。</p>
        <Callout variant="key">
          <p><b>基本原则：</b>图形只能通过<strong>上、下、左、右平移</strong>，不能旋转、翻转（多数考试都这么限定，题干里一定会写明）。</p>
          <p><b>解密：</b>① 特殊线条（唯一的长线或横竖线）② 等长的线 ③ 拆分选项</p>
        </Callout>
        <PointList>
          <li><b>特殊线条：</b>四块小图里如果只有一块含"最长的直线段"，选项里也必须出现一条等长的直线段，否则排除。</li>
          <li><b>等长的线：</b>两块的边要拼在一起，必须有一条等长的边；题干中的长边长度在选项里要能一一对上。</li>
          <li><b>拆分选项：</b>反过来把选项按缺口拆成几块，看能不能与题干四块一一对应（题目问"哪个能拼成"时好用）。</li>
          <li><b>易错点：</b>忘了题干"只能平移"的条件，选了需要旋转／翻转才能拼出来的选项。</li>
        </PointList>
      
        <Example>
          <ExampleHeader>📝 例题5 · 平面拼合（平移 · 2022 江苏）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下边四个图形中，只有一个是由上边的四个图形拼合（只能通过上、下、左、右平移）而成的，请把它找出来。</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 474 144" role="img" aria-label="上边四个待拼合的小图形">
      <g transform="translate(12,12)">
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={10} y={10} width={100} height={100} stroke="#9ca3af" strokeWidth={1} />
                <polygon points="35,35 68,42 62,72 32,64 28,48" />
              </g>
              <g fill="none" stroke="#2563eb" strokeWidth={3}><polygon points="35,35 68,42 62,72 32,64 28,48" /></g>
              <text x={22} y={24} fill="#2563eb" fontSize={12}>①</text>
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={120} y={10} width={100} height={100} stroke="#9ca3af" strokeWidth={1} />
                <polygon points="182,40 208,58 190,80 152,62" />
              </g>
              <g fill="none" stroke="#7c3aed" strokeWidth={3}><polygon points="182,40 208,58 190,80 152,62" /></g>
              <text x={132} y={24} fill="#7c3aed" fontSize={12}>②</text>
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={230} y={10} width={100} height={100} stroke="#9ca3af" strokeWidth={1} />
                <polygon points="268,44 292,40 300,60 282,76 262,68" />
              </g>
              <g fill="none" stroke="#10b981" strokeWidth={3}><polygon points="268,44 292,40 300,60 282,76 262,68" /></g>
              <text x={242} y={24} fill="#10b981" fontSize={12}>③</text>
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={340} y={10} width={100} height={100} stroke="#9ca3af" strokeWidth={1} />
                <polygon points="372,38 428,44 424,74 376,72" />
              </g>
              <g fill="none" stroke="#f59e0b" strokeWidth={3}><line x1={376} y1={72} x2={424} y2={74} /></g>
              <text x={352} y={24} fill="#f59e0b" fontSize={12}>④</text>
            </g>
      </svg><figcaption>图：题干四个小图形（④ 有一条唯一的长直边）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 440 159" role="img" aria-label="四个拼合选项">
      <g transform="translate(1,0)">
              <polygon points="66,60 52,42 21,30 34,58 54,72 36,86 24,117 52,104 66,84 80,102 108,117 98,86 78,72 96,58 111,30 80,42" fill="none" stroke="#1f2937" strokeWidth={2} />
              <polygon points="168,60 154,42 123,30 136,58 156,72 138,86 126,117 154,104 168,84 182,102 210,117 200,86 180,72 198,58 213,30 182,42" fill="none" stroke="#1f2937" strokeWidth={2} />
              <g fill="none" stroke="#f59e0b" strokeWidth={3}><line x1={123} y1={30} x2={196} y2={64} /></g>
              <polygon points="270,60 256,42 240,34 246,58 258,72 240,86 228,117 256,104 270,84 284,102 312,117 302,86 282,72 300,58 315,30 284,42" fill="none" stroke="#1f2937" strokeWidth={2} />
              <polygon points="372,60 358,42 327,30 340,58 360,72 352,78 368,86 358,104 372,84 386,102 414,117 404,86 384,72 402,58 417,30 386,42" fill="none" stroke="#1f2937" strokeWidth={2} />
              <text x={66.0} y={124.4} fill="#1f2937" fontSize={13} textAnchor="middle">A</text>
              <text x={168.0} y={124.4} fill="#ef4444" fontSize={13} textAnchor="middle">B</text>
              <text x={270.0} y={124.4} fill="#1f2937" fontSize={13} textAnchor="middle">C</text>
              <text x={372.0} y={124.4} fill="#1f2937" fontSize={13} textAnchor="middle">D</text>
              <polyline points="160,132 165,137 178,122" fill="none" stroke="#ef4444" strokeWidth={3} />
            </g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>四个小图里，<strong>④ 是唯一含"最长直线段"（橙色）的一块</strong>，而题干又限定只能平移、不能旋转，所以这条长直边在正确选项里必须<strong>原方向、原长度</strong>地出现。<br />
            横看选项：A、C、D 的轮廓里都找不到这样一条长直的边（外轮廓全是折线、缺口），只有 <b>B</b> 中保留了这条长直边，其余三块的尖角、等长边也能一一对应 ⇒ 选 B。<br /><span className="correct">答案：B</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题6 · 平面拼合（平移 · 2024 江苏）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下边四个图形中，只有一个是由上边的四个图形拼合（只能通过上、下、左、右平移）而成的，请把它找出来。</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 474 144" role="img" aria-label="上边四个曲线轮廓的小图形">
      <g transform="translate(12,12)">
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={10} y={10} width={100} height={100} /></g>
              <path d="M56,44 L64,74 L46,86 L38,66 L44,48 Z" fill="#fff" stroke="#ef4444" strokeWidth={3} />
              <text x={22} y={24} fill="#ef4444" fontSize={12}>①</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={120} y={10} width={100} height={100} /></g>
              <path d="M158,70 Q152,44 176,42 Q200,44 196,68 Q176,78 158,70 Z" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <text x={132} y={24} fill="#1f2937" fontSize={12}>②</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={230} y={10} width={100} height={100} /></g>
              <path d="M268,36 Q288,42 284,62 Q296,72 288,86 Q272,80 266,72 Q256,58 268,36 Z" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <text x={242} y={24} fill="#1f2937" fontSize={12}>③</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={340} y={10} width={100} height={100} /></g>
              <path d="M362,44 Q396,32 412,48 Q420,72 404,88 Q376,92 362,74 L358,58 Z" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <g fill="none" stroke="#f59e0b" strokeWidth={3}><path d="M358,58 L362,74" /></g>
              <text x={352} y={24} fill="#f59e0b" fontSize={12}>④</text>
            </g>
      </svg><figcaption>图：题干四个小图形（④ 的直边为特殊线条）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 406.0 157" role="img" aria-label="四个拼合选项">
              <path d="M30,44 Q42,32 52,44 Q66,40 66,62 Q78,72 70,88 Q54,96 48,84 Q36,80 34,64 Q26,56 30,44 Z" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <path d="M100,60 Q122,40 142,52 Q158,46 162,70 Q150,80 138,92 Q120,96 106,84 Q94,76 100,60 Z" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <g fill="none" stroke="#ef4444" strokeWidth={3}><path d="M118,54 Q132,48 142,52" /></g>
              <g fill="none" stroke="#f59e0b" strokeWidth={3}><path d="M120,96 Q134,94 146,86" /></g>
              <path d="M230,44 Q248,32 264,44 Q280,40 288,58 Q296,76 284,92 Q262,98 248,88 Q234,80 232,62 Q226,52 230,44 Z" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <g fill="none" stroke="#ef4444" strokeWidth={3}><path d="M258,34 Q274,34 288,58" /></g>
              <g fill="none" stroke="#f59e0b" strokeWidth={3}><path d="M232,62 Q234,80 248,88" /></g>
              <path d="M330,40 Q352,30 368,44 Q382,42 384,60 Q374,74 360,88 Q344,92 336,80 Q322,74 326,56 Z" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <g fill="none" stroke="#f59e0b" strokeWidth={3}><path d="M336,80 Q344,92 360,88" /></g>
              <text x={52.0} y={124.4} fill="#1f2937" fontSize={13} textAnchor="middle">A</text>
              <text x={132.0} y={124.4} fill="#ef4444" fontSize={13} textAnchor="middle">B</text>
              <text x={262.0} y={124.4} fill="#1f2937" fontSize={13} textAnchor="middle">C</text>
              <text x={356.0} y={124.4} fill="#1f2937" fontSize={13} textAnchor="middle">D</text>
              <polyline points="124,130 129,135 142,120" fill="none" stroke="#ef4444" strokeWidth={3} />
            </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>思路同上题：先找<strong>特殊线条</strong>——④ 那块有一条直边，② 那块有一个圆顶，③ 那块有一个向内凹的缺口。<br />
            只有 B 中同时出现了"圆顶（红）＋直边（橙）＋凹口"这三处特征，且方向与题干一致（只能平移）；A、C、D 的圆弧方向、凹口位置对不上（都需要翻转才拼得出）⇒ 选 B。<br /><span className="correct">答案：B</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题7 · 平面拼合（平移 · 2025 四川）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下边四个图形，可以拼合（只能通过上、下、左、右平移）成选项中的哪一个图形？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 474 144" role="img" aria-label="上边四个待拼合的小图形">
      <g transform="translate(12,12)">
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={10} y={10} width={100} height={100} /></g>
              <polygon points="40,34 70,32 74,62 44,64" fill="none" stroke="#ef4444" strokeWidth={3} />
              <text x={22} y={24} fill="#ef4444" fontSize={12}>①</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={120} y={10} width={100} height={100} /></g>
              <polygon points="164,38 194,38 204,64 156,64" fill="none" stroke="#10b981" strokeWidth={3} />
              <text x={132} y={24} fill="#10b981" fontSize={12}>②</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={230} y={10} width={100} height={100} /></g>
              <polygon points="272,40 322,38 314,70 278,68" fill="none" stroke="#2563eb" strokeWidth={3} />
              <text x={242} y={24} fill="#2563eb" fontSize={12}>③</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={340} y={10} width={100} height={100} /></g>
              <polygon points="376,34 416,36 412,74 372,72" fill="none" stroke="#1f2937" strokeWidth={2} />
              <g fill="none" stroke="#f59e0b" strokeWidth={3}><line x1={372} y1={72} x2={412} y2={74} /></g>
              <text x={352} y={24} fill="#f59e0b" fontSize={12}>④</text>
            </g>
      </svg><figcaption>图：题干四个小图形</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 470 145" role="img" aria-label="四个选项">
              <polygon points="26,22 106,22 106,96" fill="none" stroke="#1f2937" strokeWidth={2} />
              <polygon points="140,22 196,22 250,58 250,96 196,96 140,96" fill="none" stroke="#1f2937" strokeWidth={2} />
              <polygon points="276,22 366,22 400,52 400,96 276,96" fill="none" stroke="#1f2937" strokeWidth={2} />
              <g fill="none" stroke="#ef4444" strokeWidth={2}>
                <line x1={276} y1={52} x2={336} y2={52} /><line x1={336} y1={22} x2={336} y2={52} />
                <line x1={276} y1={52} x2={276} y2={86} />
              </g>
              <g fill="none" stroke="#10b981" strokeWidth={2}>
                <line x1={362} y1={22} x2={400} y2={47} /><line x1={276} y1={86} x2={362} y2={86} />
              </g>
              <g fill="none" stroke="#2563eb" strokeWidth={2}><line x1={276} y1={86} x2={276} y2={52} /></g>
              <polygon points="416,26 448,26 448,96 390,96" fill="none" stroke="#1f2937" strokeWidth={2} />
              <text x={60} y={114} fill="#1f2937" fontSize={13} textAnchor="middle">A</text>
              <text x={196} y={114} fill="#1f2937" fontSize={13} textAnchor="middle">B</text>
              <text x={338} y={114} fill="#ef4444" fontSize={13} textAnchor="middle">C</text>
              <text x={418} y={114} fill="#1f2937" fontSize={13} textAnchor="middle">D</text>
              <polyline points="330,118 335,123 348,108" fill="none" stroke="#ef4444" strokeWidth={3} />
            </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>先看哪个"特殊"：<strong>③ 是四块里最宽的一块</strong>（蓝色），<strong>④ 有一条最长的直边</strong>（橙色）。<br />
            选项 C 中正好有一条等长的长直边（底部），且 ① 的正方形、② 的梯形、③ 的宽梯形都能严丝合缝地贴进 C 的右上缺角（红、绿、蓝线示出了拆分位置）——即"把选项按缺口拆开，能与题干四块一一对应"。<br />
            A、B、D 的外轮廓缺角形状／长度与四块对不上（拼不成或需旋转）⇒ 选 C。<br /><span className="correct">答案：C</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题8 · 平面拼合（平移 · 2025 江苏）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>左边给定的图形是由右边哪些图形拼合（只可平移，不可旋转和翻转）而成的？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 259 149" role="img" aria-label="左边给定图形，内部用颜色标出四块的拆分">
      <g transform="translate(0,4)">
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={40} y={18} width={140} height={105} /></g>
              <polygon points="60,30 150,30 150,105 60,105" fill="none" stroke="#1f2937" strokeWidth={2} />
              <g fill="none" stroke="#f59e0b" strokeWidth={3}><polyline points="60,30 150,30 150,68 60,68" /></g>
              <g fill="none" stroke="#ef4444" strokeWidth={3}><polygon points="60,30 60,105 150,105" /></g>
              <g fill="none" stroke="#2563eb" strokeWidth={3}><rect x={150} y={68} width={40} height={37} /></g>
              <g fill="none" stroke="#10b981" strokeWidth={3}><polyline points="150,30 150,68 108,105" /></g>
              <text x={196} y={46} fill="#f59e0b" fontSize={12}>①</text>
              <text x={196} y={66} fill="#2563eb" fontSize={12}>②</text>
              <text x={196} y={86} fill="#10b981" fontSize={12}>③</text>
              <text x={196} y={106} fill="#ef4444" fontSize={12}>④ 或 ⑤</text>
            </g>
      </svg><figcaption>图：题干图形（颜色为四块的位置）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 484 138" role="img" aria-label="右边五个小图形">
      <g transform="translate(16,10)">
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={6} y={12} width={80} height={86} /></g>
              <polygon points="34,36 56,28 58,60 44,76 30,60" fill="none" stroke="#10b981" strokeWidth={3} />
              <text x={46} y={104} fill="#1f2937" fontSize={12} textAnchor="middle">①</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={96} y={12} width={80} height={86} /></g>
              <rect x={126} y={32} width={26} height={46} fill="none" stroke="#2563eb" strokeWidth={3} />
              <text x={136} y={104} fill="#1f2937" fontSize={12} textAnchor="middle">②</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={186} y={12} width={80} height={86} /></g>
              <polygon points="196,32 250,32 250,50 216,78 196,50" fill="none" stroke="#f59e0b" strokeWidth={3} />
              <text x={226} y={104} fill="#1f2937" fontSize={12} textAnchor="middle">③</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={276} y={12} width={80} height={86} /></g>
              <polygon points="286,74 300,40 342,74" fill="none" stroke="#ef4444" strokeWidth={3} />
              <text x={316} y={104} fill="#1f2937" fontSize={12} textAnchor="middle">④</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={366} y={12} width={80} height={86} /></g>
              <polygon points="376,72 392,36 446,72" fill="none" stroke="#ef4444" strokeWidth={3} />
              <text x={406} y={104} fill="#1f2937" fontSize={12} textAnchor="middle">⑤</text>
            </g>
      </svg><figcaption>图：右边 ①～⑤ 五个小图形</figcaption></figure>
            <ExampleAnswer><b>解析：</b>按颜色把题干图形拆开：① 是上面那条"横条"、② 是右侧的竖长方形、③ 是中间的"V 形"、剩下左下大块是一个直角三角形。<br />
            因此只需要一个<strong>直角三角形</strong>。<strong>关注长度问题</strong>：④ 的两条直角边明显比题干左下那块三角形的边短（长度不匹配），只有 ⑤ 的直角边长与题干吻合。<br />
            故 ①②③⑤ 能拼成 ⇒ 选 B。<br /><span className="correct">答案：B</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Callout variant="tip"><b>「平面拼合」小结：</b>解密三件套——①特殊线条（唯一的长线或横竖线）②等长的线 ③拆分选项。记住题干条件（能不能旋转、翻转），这是最容易掉的分。</Callout>
      </Block>
      
      <Block>
        <BlockTitle>5. 平面拼合 · 黑白面：本质是"区分旋转与翻转"</BlockTitle>
        <p><b>出题者怎么出"黑白面"？</b>四张纸片，每张纸片<strong>一面是黑色，另一面是白色</strong>。所以拼合的时候，"翻面"会把颜色翻过来——这就是命题人专门留的判断点。</p>
        <Callout variant="key">
          <p><b>基本原则：</b>可以平移、旋转、翻转（多数考试）。</p>
          <p><b>解密：</b>旋转 → 颜色一致；翻转 → 颜色变化。<strong>本质就是区分旋转和翻转。</strong></p>
        </Callout>
        <p><b>方法回顾 · 时针法：</b>找一块有特征的图形（黑块、尖角、缺口），从"同一起点"沿"同一路径"走到"同一终点"，看三个点在题干和选项中的<strong>顺时针／逆时针方向</strong>是否一致：方向一致 = 只旋转；方向相反 = 被翻转过。</p>
        <Callout variant="tip">注意"三个同一"：<strong>同一起点、同一路径、同一终点</strong>。三个点一旦变了，时针方向就没有可比性。</Callout>
      
        <Example>
          <ExampleHeader>📝 例题9 · 平面拼合·黑白面（时针法 · 2023 江苏 · 选非题）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>上边四张纸片，都是一面为白色、一面为黑色，在允许平移、旋转和翻转的条件下可以拼合成多种图形。下边哪项<b>不能</b>由其拼合而成？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 474 134" role="img" aria-label="上边四张纸片">
      <g transform="translate(12,12)">
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={10} y={10} width={100} height={90} /></g>
              <polygon points="42,36 74,30 76,64 44,66" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <text x={22} y={26} fill="#6b7280" fontSize={12}>①</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={120} y={10} width={100} height={90} /></g>
              <path d="M148,32 L176,44 L166,74 L142,58 Z" fill="#111827" stroke="#1f2937" strokeWidth={2} />
              <path d="M148,32 Q136,42 142,58" fill="none" stroke="#ef4444" strokeWidth={3} />
              <text x={132} y={26} fill="#ef4444" fontSize={12}>②</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={230} y={10} width={100} height={90} /></g>
              <polygon points="262,34 288,30 296,52 278,72 258,58" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <text x={242} y={26} fill="#6b7280" fontSize={12}>③</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={340} y={10} width={100} height={90} /></g>
              <polygon points="372,38 414,50 380,72" fill="#111827" stroke="#1f2937" strokeWidth={2} />
              <text x={352} y={26} fill="#6b7280" fontSize={12}>④</text>
            </g>
      </svg><figcaption>图：上边四张纸片（①③为白色面，②④为黑色面）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 476 143" role="img" aria-label="四个拼合选项">
              
              <polygon points="60,24 68,48 94,49 73,64 81,89 60,74 39,89 47,64 26,49 52,49" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <polygon points="46,64 60,74 39,89 26,49" fill="#111827" />
              <polygon points="73,64 94,49 81,89 60,74" fill="#111827" />
              <path d="M70,30 Q88,36 84,52" fill="none" stroke="#ef4444" strokeWidth={2.5} />
              <polyline points="84,50 78,50 84,44" fill="none" stroke="#ef4444" strokeWidth={2.5} />
              
              <polygon points="180,24 188,48 214,49 193,64 201,89 180,74 159,89 167,64 146,49 172,49" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <polygon points="167,64 180,74 159,89 146,49" fill="#111827" />
              <polygon points="146,49 167,64 180,24 172,49" fill="#111827" />
              <path d="M170,80 Q186,72 190,56" fill="none" stroke="#ef4444" strokeWidth={2.5} />
              <polyline points="188,58 190,64 184,62" fill="none" stroke="#ef4444" strokeWidth={2.5} />
              <polyline points="172,94 177,99 190,84" fill="none" stroke="#ef4444" strokeWidth={3} />
              
              <polygon points="300,24 308,48 334,49 313,64 321,89 300,74 279,89 287,64 266,49 292,49" fill="#111827" stroke="#1f2937" strokeWidth={2} />
              
              <polygon points="420,24 428,48 454,49 433,64 441,89 420,74 399,89 407,64 386,49 412,49" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <polygon points="412,49 433,64 441,89 420,74" fill="#111827" />
              <polygon points="399,89 420,74 441,89" fill="#111827" />
              <path d="M410,30 Q394,38 398,54" fill="none" stroke="#ef4444" strokeWidth={2.5} />
              <text x={60} y={118} fill="#1f2937" fontSize={13} textAnchor="middle">A</text>
              <text x={180} y={118} fill="#ef4444" fontSize={13} textAnchor="middle">B</text>
              <text x={300} y={118} fill="#1f2937" fontSize={13} textAnchor="middle">C</text>
              <text x={420} y={118} fill="#1f2937" fontSize={13} textAnchor="middle">D</text>
            </svg><figcaption>图：选项 A / B / C / D（红色弧线为时针方向示意）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>这是<strong>选非题</strong>（找"不能"的），先注意审题。<br />
            <b>考场思维：</b>先看其他选项——B、C 两个选项里"2、3 号纸片"的结构是一样的（同构），不可能出现"一个能拼、一个不能"，所以答案只能在 A、D 中。<br />
            再用<strong>时针法</strong>核对 A、D 中黑块与白块的<strong>时针方向</strong>：A 与题干一致（只经过旋转）；D 中黑块的时针方向与题干相反，属于必须"翻转"才能得到的情形，与黑白面的颜色关系矛盾（题干的纸片翻面后颜色要变，D 中颜色没有相应变化）⇒ D 不能拼成。<br /><span className="correct">答案：D</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题10 · 平面拼合·黑白面（2025 江苏）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>上边四张纸片，每张纸片一面是黑色、另一面是白色，下边仅有一项能由它们拼合（可以平移、旋转、翻转）而成，请把它找出来。</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 474 134" role="img" aria-label="上边四张纸片">
      <g transform="translate(12,12)">
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={10} y={10} width={100} height={90} /></g>
              <path d="M36,40 L74,44 L52,74 L28,54 Z" fill="#111827" stroke="#1f2937" strokeWidth={2} />
              <path d="M36,40 Q40,52 28,54" fill="none" stroke="#ef4444" strokeWidth={3} />
              <text x={22} y={26} fill="#ef4444" fontSize={12}>①</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={120} y={10} width={100} height={90} /></g>
              <polygon points="152,34 178,26 182,52 158,66" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <text x={132} y={26} fill="#6b7280" fontSize={12}>②</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={230} y={10} width={100} height={90} /></g>
              <polygon points="262,32 288,68 256,70" fill="#111827" stroke="#1f2937" strokeWidth={2} />
              <text x={242} y={26} fill="#6b7280" fontSize={12}>③</text>
              <g fill="none" stroke="#9ca3af" strokeWidth={1}><rect x={340} y={10} width={100} height={90} /></g>
              <polygon points="378,34 400,32 384,70" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <text x={352} y={26} fill="#6b7280" fontSize={12}>④</text>
            </g>
      </svg><figcaption>图：上边四张纸片</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 476 143" role="img" aria-label="四个五角星选项">
              <polygon points="60,24 68.2,48.7 94.2,48.9 73.3,64.3 81.2,89.1 60,74 38.8,89.1 46.7,64.3 25.8,48.9 51.8,48.7" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <polygon points="51.8,48.7 60,24 68.2,48.7 46.7,64.3" fill="#111827" />
              <polygon points="73.3,64.3 94.2,48.9 81.2,89.1" fill="#111827" />
              <path d="M62,30 Q44,40 50,56" fill="none" stroke="#ef4444" strokeWidth={2.5} />
              <polygon points="180,24 188.2,48.7 214.2,48.9 193.3,64.3 201.2,89.1 180,74 158.8,89.1 166.7,64.3 145.8,48.9 171.8,48.7" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <polygon points="166.7,64.3 158.8,89.1 180,74 171.8,48.7" fill="#111827" />
              <polygon points="145.8,48.9 166.7,64.3 180,74 158.8,89.1" fill="#111827" />
              <path d="M182,80 Q200,72 202,56" fill="none" stroke="#ef4444" strokeWidth={2.5} />
              <polyline points="172,94 177,99 190,84" fill="none" stroke="#ef4444" strokeWidth={3} />
              <polygon points="300,24 308.2,48.7 334.2,48.9 313.3,64.3 321.2,89.1 300,74 278.8,89.1 286.7,64.3 265.8,48.9 291.8,48.7" fill="#111827" stroke="#1f2937" strokeWidth={2} />
              <polygon points="420,24 428.2,48.7 454.2,48.9 433.3,64.3 441.2,89.1 420,74 398.8,89.1 406.7,64.3 385.8,48.9 411.8,48.7" fill="#fff" stroke="#1f2937" strokeWidth={2} />
              <polygon points="411.8,48.7 433.3,64.3 441.2,89.1 420,74" fill="#111827" />
              <polygon points="398.8,89.1 420,74 441.2,89.1" fill="#111827" />
              <path d="M414,30 Q396,40 402,56" fill="none" stroke="#ef4444" strokeWidth={2.5} />
              <text x={60} y={118} fill="#1f2937" fontSize={13} textAnchor="middle">A</text>
              <text x={180} y={118} fill="#ef4444" fontSize={13} textAnchor="middle">B</text>
              <text x={300} y={118} fill="#1f2937" fontSize={13} textAnchor="middle">C</text>
              <text x={420} y={118} fill="#1f2937" fontSize={13} textAnchor="middle">D</text>
            </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>选项是一枚五角星："黑色部分"由 ①（黑色燕形）和 ③（黑色小三角形）拼成，"白色轮廓部分"由 ②、④ 拼成。<br />
            用<strong>时针法</strong>定起点→路径→终点，比较黑块在题干与选项中的旋转方向：<br />
            A、D 的黑块方向与题干<strong>相反</strong>（是被"翻转"过去的，但翻转后该块应变白，颜色不符）；C 整颗星几乎全黑，黑白比例与题干（只两块黑）不符。<br />
            只有 B 的黑块方向、位置与题干一致（旋转即可得到），黑白比例也吻合 ⇒ 选 B。<br /><span className="correct">答案：B</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Callout variant="tip"><b>「黑白面」小结：</b>解密就一句话——<strong>时针法</strong>。三块"同一"（同一起点、同一路径、同一终点）定下来以后，方向一致就是旋转、方向相反就是翻转。</Callout>
      </Block>
      
      <Block>
        <BlockTitle>6. 平面拼合 · 俄罗斯方块</BlockTitle>
        <p><b>什么是"俄罗斯方块"？</b>不同形状和个数的方块，拼接在一起。考场上分两种出题形式。</p>
        <Callout variant="key">
          <p><b>出题形式一：拼接成选项。</b>解密：① 优先代入大的 ② 贴边拼。考场思路：优先不旋转（简单）。</p>
          <p><b>出题形式二：拼接成"规则图案"（没有提示）。</b>题干一般问"下列选项中最符合所给图形规律的是"。解密：优先考虑"规则图案"。</p>
        </Callout>
        <PointList>
          <li><b>优先代入大的：</b>先把块数最多、最"长"的那一块放进去，剩下的空位形状就唯一了。</li>
          <li><b>贴边拼：</b>小块尽量贴着大块的边、贴着外轮廓拼，不要悬空。</li>
          <li><b>数方块：</b>先数每块和选项的格子数——总数对不上直接排除，这是最快的排除法。</li>
        </PointList>
      
        <Example>
          <ExampleHeader>📝 例题11 · 俄罗斯方块（顺序规律 · 2022 广东）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下列选项中最符合所给图形规律的是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 493 137" role="img" aria-label="两组图形，右边一组最后一格为问号">
      <g transform="translate(12,8)">
              <g fill="none" stroke="#9ca3af" strokeWidth={1}>
                <rect x={10} y={14} width={73} height={82} /><rect x={83} y={14} width={73} height={82} /><rect x={156} y={14} width={73} height={82} />
                <rect x={240} y={14} width={73} height={82} /><rect x={313} y={14} width={73} height={82} /><rect x={386} y={14} width={73} height={82} />
              </g>
              <g fill="#9ca3af" stroke="#4b5563" strokeWidth={1.4}>
                <rect x={31.5} y={32} width={15} height={15} /><rect x={46.5} y={32} width={15} height={15} />
                <rect x={31.5} y={47} width={15} height={15} /><rect x={46.5} y={47} width={15} height={15} />
                <rect x={31.5} y={62} width={15} height={15} /><rect x={46.5} y={62} width={15} height={15} />
                <rect x={104.5} y={40} width={15} height={15} /><rect x={119.5} y={40} width={15} height={15} />
                <rect x={104.5} y={55} width={15} height={15} />
                <rect x={192.5} y={40} width={15} height={15} />
                <rect x={177.5} y={55} width={15} height={15} /><rect x={192.5} y={55} width={15} height={15} />
                <rect x={235.5} y={25} width={15} height={15} />
                <rect x={235.5} y={40} width={15} height={15} /><rect x={250.5} y={40} width={15} height={15} />
                <rect x={235.5} y={55} width={15} height={15} /><rect x={250.5} y={55} width={15} height={15} /><rect x={265.5} y={55} width={15} height={15} />
                <rect x={235.5} y={70} width={15} height={15} /><rect x={250.5} y={70} width={15} height={15} /><rect x={265.5} y={70} width={15} height={15} /><rect x={280.5} y={70} width={15} height={15} />
                <rect x={338.5} y={32} width={15} height={15} />
                <rect x={323.5} y={47} width={15} height={15} /><rect x={338.5} y={47} width={15} height={15} />
                <rect x={323.5} y={62} width={15} height={15} />
              </g>
              <text x={422} y={66} fill="#1f2937" fontSize={30} textAnchor="middle">?</text>
              <text x={150.0} y={104.9} fill="#6b7280" fontSize={11} textAnchor="middle">①=②+③（6=3+3）</text>
              <text x={340.0} y={104.9} fill="#6b7280" fontSize={11} textAnchor="middle">④=⑤+⑥（10=4+?）</text>
            </g>
      </svg><figcaption>图：题干图形（左一组 3 图，右一组前两图 + 问号）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 469 147" role="img" aria-label="四个选项">
      <g transform="translate(12,8)">
              <g fill="none" stroke="#9ca3af" strokeWidth={1}>
                <rect x={10} y={14} width={95} height={82} /><rect x={120} y={14} width={95} height={82} />
                <rect x={230} y={14} width={95} height={82} /><rect x={340} y={14} width={95} height={82} />
              </g>
              <g fill="#9ca3af" stroke="#4b5563" strokeWidth={1.4}>
                <rect x={27.5} y={40} width={15} height={15} /><rect x={42.5} y={40} width={15} height={15} /><rect x={57.5} y={40} width={15} height={15} /><rect x={72.5} y={40} width={15} height={15} />
                <rect x={27.5} y={55} width={15} height={15} /><rect x={57.5} y={55} width={15} height={15} />
                <rect x={160} y={40} width={15} height={15} /><rect x={175} y={40} width={15} height={15} />
                <rect x={145} y={55} width={15} height={15} /><rect x={160} y={55} width={15} height={15} />
                <rect x={270} y={32} width={15} height={15} />
                <rect x={255} y={47} width={15} height={15} /><rect x={270} y={47} width={15} height={15} />
                <rect x={255} y={62} width={15} height={15} /><rect x={270} y={62} width={15} height={15} /><rect x={285} y={62} width={15} height={15} />
                <rect x={372} y={25} width={15} height={15} /><rect x={387} y={25} width={15} height={15} />
                <rect x={387} y={40} width={15} height={15} /><rect x={387} y={55} width={15} height={15} /><rect x={387} y={70} width={15} height={15} />
              </g>
              <text x={56.0} y={104.4} fill="#ef4444" fontSize={13} textAnchor="middle">A</text>
              <text x={166.0} y={104.4} fill="#1f2937" fontSize={13} textAnchor="middle">B</text>
              <text x={276.0} y={104.4} fill="#1f2937" fontSize={13} textAnchor="middle">C</text>
              <text x={376.0} y={104.4} fill="#1f2937" fontSize={13} textAnchor="middle">D</text>
              <polyline points="48,112 53,117 66,102" fill="none" stroke="#ef4444" strokeWidth={3} />
            </g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>先数方块：<br />
            <b>第一组：</b>图1 是 2×3 的方块（6 格）= 图2（3 格 "L"）+ 图3（3 格 "S"）——<strong>图1 由后两图拼合而成</strong>。<br />
            <b>第二组：</b>图4 是阶梯形，从上到下是 1、2、3、4 格，共 <b>10 格</b>；图5 是 4 格的 "S" 形；所以问号处应该是 <b>6 格</b>。<br />
            四个选项中：B 是 4 格、D 是 5 格、C 是 6 格但形状是"台阶"补不进剩余区域，只有 <b>A</b> 是 6 格（上一行 4 格 + 下面 2 格），正好把图5 填进去后凑成图4 的阶梯形 ⇒ 选 A。<br /><span className="correct">答案：A</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题12 · 俄罗斯方块（拼接成选项 · 2022 江苏）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下边四个图形中，只有一个是由上边的四个图形拼合（只能通过上、下、左、右平移）而成的，请把它找出来。</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 494 131" role="img" aria-label="上边四个方块图形">
      <g transform="translate(12,12)">
              <g fill="none" stroke="#9ca3af" strokeWidth={1}>
                <rect x={10} y={10} width={105} height={80} /><rect x={125} y={10} width={105} height={80} />
                <rect x={240} y={10} width={105} height={80} /><rect x={355} y={10} width={105} height={80} />
              </g>
              <g fill="#9ca3af" stroke="#4b5563" strokeWidth={1.4}>
                <rect x={38} y={28} width={15} height={15} /><rect x={53} y={28} width={15} height={15} />
                <rect x={23} y={43} width={15} height={15} /><rect x={38} y={43} width={15} height={15} />
                <rect x={158} y={28} width={15} height={15} /><rect x={173} y={28} width={15} height={15} />
                <rect x={158} y={43} width={15} height={15} /><rect x={173} y={43} width={15} height={15} />
                <rect x={268} y={28} width={15} height={15} />
                <rect x={268} y={43} width={15} height={15} /><rect x={283} y={43} width={15} height={15} /><rect x={298} y={43} width={15} height={15} />
                <rect x={386} y={20} width={15} height={15} /><rect x={401} y={20} width={15} height={15} />
                <rect x={401} y={35} width={15} height={15} /><rect x={401} y={50} width={15} height={15} /><rect x={401} y={65} width={15} height={15} />
              </g>
              <text x={62.0} y={94.9} fill="#6b7280" fontSize={11} textAnchor="middle">① 4 格</text>
              <text x={177.0} y={94.9} fill="#6b7280" fontSize={11} textAnchor="middle">② 4 格</text>
              <text x={292.0} y={94.9} fill="#6b7280" fontSize={11} textAnchor="middle">③ 4 格</text>
              <text x={407.0} y={94.9} fill="#6b7280" fontSize={11} textAnchor="middle">④ 5 格</text>
            </g>
      </svg><figcaption>图：题干四个方块图形（合计 17 格）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 494 139" role="img" aria-label="四个选项">
      <g transform="translate(12,12)">
              <g fill="none" stroke="#9ca3af" strokeWidth={1}>
                <rect x={10} y={10} width={105} height={80} /><rect x={125} y={10} width={105} height={80} />
                <rect x={240} y={10} width={105} height={80} /><rect x={355} y={10} width={105} height={80} />
              </g>
              <g fill="#9ca3af" stroke="#4b5563" strokeWidth={1.2}>
                <rect x={24} y={18} width={13} height={13} /><rect x={37} y={18} width={13} height={13} /><rect x={50} y={18} width={13} height={13} /><rect x={63} y={18} width={13} height={13} /><rect x={76} y={18} width={13} height={13} />
                <rect x={24} y={31} width={13} height={13} /><rect x={37} y={31} width={13} height={13} /><rect x={50} y={31} width={13} height={13} /><rect x={63} y={31} width={13} height={13} /><rect x={76} y={31} width={13} height={13} />
                <rect x={24} y={44} width={13} height={13} /><rect x={37} y={44} width={13} height={13} /><rect x={50} y={44} width={13} height={13} /><rect x={63} y={44} width={13} height={13} /><rect x={76} y={44} width={13} height={13} />
                <rect x={24} y={57} width={13} height={13} /><rect x={37} y={57} width={13} height={13} />
                <rect x={150} y={20} width={13} height={13} /><rect x={163} y={20} width={13} height={13} /><rect x={176} y={20} width={13} height={13} /><rect x={189} y={20} width={13} height={13} />
                <rect x={150} y={33} width={13} height={13} /><rect x={163} y={33} width={13} height={13} /><rect x={176} y={33} width={13} height={13} />
                <rect x={150} y={46} width={13} height={13} /><rect x={163} y={46} width={13} height={13} />
                <rect x={150} y={59} width={13} height={13} />
                <rect x={265} y={20} width={13} height={13} /><rect x={278} y={20} width={13} height={13} />
                <rect x={291} y={20} width={13} height={13} /><rect x={265} y={33} width={13} height={13} />
                <rect x={265} y={46} width={13} height={13} /><rect x={278} y={46} width={13} height={13} />
                <rect x={265} y={59} width={13} height={13} />
                <rect x={378} y={24} width={13} height={13} /><rect x={391} y={24} width={13} height={13} /><rect x={404} y={24} width={13} height={13} /><rect x={417} y={24} width={13} height={13} />
                <rect x={378} y={37} width={13} height={13} /><rect x={391} y={37} width={13} height={13} /><rect x={404} y={37} width={13} height={13} />
                <rect x={378} y={50} width={13} height={13} /><rect x={391} y={50} width={13} height={13} />
              </g>
              <text x={56.0} y={94.4} fill="#ef4444" fontSize={13} textAnchor="middle">A</text>
              <text x={176.0} y={94.4} fill="#1f2937" fontSize={13} textAnchor="middle">B</text>
              <text x={286.0} y={94.4} fill="#1f2937" fontSize={13} textAnchor="middle">C</text>
              <text x={406.0} y={94.4} fill="#1f2937" fontSize={13} textAnchor="middle">D</text>
              <polyline points="48,100 53,105 66,90" fill="none" stroke="#ef4444" strokeWidth={3} />
            </g>
      </svg><figcaption>图：选项 A / B / C / D（示意）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>四块合计 4+4+4+5 = <b>17 个小方块</b>，所以正确选项的格子总数必须是 17 格。<br />
            <b>优先代入大的：</b>先把 ④（5 格的"7"形）放进去贴边，再依次把 ③（L 形）、①（S 形）、②（2×2）贴着它拼，最后正好铺满，不留空格也不越界。<br />
            B、C、D 的格子总数与缺口形状和这四块对不上（要么少格、要么多出无法用四块填补的突出部分）⇒ 选 A。<br /><span className="correct">答案：A</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题13 · 俄罗斯方块（规则图案 · 2022 广东）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下列选项中最符合所给图形规律的是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 442 271" role="img" aria-label="三行三列共九个格子，每格一个小方块图形，最后一格为问号">
      <g transform="translate(0,2)">
              <g fill="none" stroke="#9ca3af" strokeWidth={1}>
                <rect x={30} y={20} width={130} height={70} /><rect x={160} y={20} width={130} height={70} /><rect x={290} y={20} width={130} height={70} />
                <rect x={30} y={90} width={130} height={70} /><rect x={160} y={90} width={130} height={70} /><rect x={290} y={90} width={130} height={70} />
                <rect x={30} y={160} width={130} height={70} /><rect x={160} y={160} width={130} height={70} /><rect x={290} y={160} width={130} height={70} />
              </g>
              <g fill="#9ca3af" stroke="#4b5563" strokeWidth={1.3}>
                <rect x={50} y={35} width={12} height={12} /><rect x={62} y={35} width={12} height={12} /><rect x={74} y={35} width={12} height={12} /><rect x={86} y={35} width={12} height={12} />
                <rect x={50} y={47} width={12} height={12} /><rect x={50} y={59} width={12} height={12} />
                <rect x={224} y={47} width={12} height={12} />
                <rect x={331} y={47} width={12} height={12} /><rect x={343} y={47} width={12} height={12} /><rect x={355} y={47} width={12} height={12} />
                <rect x={65} y={105} width={12} height={12} /><rect x={77} y={105} width={12} height={12} />
                <rect x={65} y={117} width={12} height={12} /><rect x={65} y={129} width={12} height={12} />
                <rect x={200} y={105} width={12} height={12} /><rect x={212} y={105} width={12} height={12} />
                <rect x={212} y={117} width={12} height={12} /><rect x={212} y={129} width={12} height={12} />
                <rect x={340} y={117} width={12} height={12} /><rect x={352} y={117} width={12} height={12} />
                <rect x={50} y={175} width={12} height={12} /><rect x={62} y={175} width={12} height={12} />
                <rect x={62} y={187} width={12} height={12} /><rect x={62} y={199} width={12} height={12} />
                <rect x={200} y={175} width={12} height={12} /><rect x={212} y={175} width={12} height={12} />
              </g>
              <g fill="#fff" stroke="#4b5563" strokeWidth={1.3}>
                <rect x={200} y={47} width={12} height={12} /><rect x={212} y={47} width={12} height={12} />
                <rect x={340} y={105} width={12} height={12} /><rect x={352} y={105} width={12} height={12} />
                <rect x={50} y={187} width={12} height={12} />
                <rect x={212} y={187} width={12} height={12} />
              </g>
              <text x={355} y={200} fill="#1f2937" fontSize={26} textAnchor="middle">?</text>
              <text x={230} y={245} fill="#6b7280" fontSize={11} textAnchor="middle">每行方块总数：12 格（6+3+3 / 4+4+4 / 5+3+?）</text>
            </g>
      </svg><figcaption>图：题干九宫格图形（示意，白格为原图中的浅色格）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 494 147" role="img" aria-label="四个选项">
      <g transform="translate(12,8)">
              <g fill="none" stroke="#9ca3af" strokeWidth={1}>
                <rect x={10} y={14} width={105} height={82} /><rect x={125} y={14} width={105} height={82} />
                <rect x={240} y={14} width={105} height={82} /><rect x={355} y={14} width={105} height={82} />
              </g>
              <g fill="#9ca3af" stroke="#4b5563" strokeWidth={1.4}>
                <rect x={42} y={30} width={15} height={15} />
                <rect x={42} y={45} width={15} height={15} /><rect x={57} y={45} width={15} height={15} /><rect x={72} y={45} width={15} height={15} />
                <rect x={175} y={30} width={15} height={15} /><rect x={190} y={30} width={15} height={15} />
                <rect x={160} y={45} width={15} height={15} /><rect x={175} y={45} width={15} height={15} />
                <rect x={287} y={30} width={15} height={15} />
                <rect x={272} y={45} width={15} height={15} /><rect x={287} y={45} width={15} height={15} /><rect x={302} y={45} width={15} height={15} />
                <rect x={392} y={30} width={15} height={15} /><rect x={407} y={30} width={15} height={15} />
                <rect x={392} y={45} width={15} height={15} />
                <rect x={412} y={62} width={15} height={15} />
              </g>
              <rect x={407} y={30} width={15} height={15} fill="#fff" />
              <text x={56.0} y={104.4} fill="#ef4444" fontSize={13} textAnchor="middle">A</text>
              <text x={176.0} y={104.4} fill="#1f2937" fontSize={13} textAnchor="middle">B</text>
              <text x={286.0} y={104.4} fill="#1f2937" fontSize={13} textAnchor="middle">C</text>
              <text x={406.0} y={104.4} fill="#1f2937" fontSize={13} textAnchor="middle">D</text>
              <polyline points="48,112 53,117 66,102" fill="none" stroke="#ef4444" strokeWidth={3} />
            </g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>这道题没有提示，按老师的解密——<strong>优先考虑"规则图案"</strong>，最快的是<strong>数方块</strong>：<br />
            第一行：6 + 3 + 3 = 12 格；第二行：4 + 4 + 4 = 12 格；第三行：5 + 3 + <b>?</b> = 12 ⇒ 问号处应为 <b>4 格</b>。<br />
            四个选项都接近 4 格，再看形状：A 是"上面 1 格、下面一横 3 格"的 L 形，与 ③、⑤ 一样能和上一图拼成规则图案；B（S 形）、C（T 形）拼上去会多出突角；D 的两块是分开的（图形不连通），不符合"拼接成规则图案" ⇒ 选 A。<br /><span className="correct">答案：A</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Callout variant="tip"><b>「俄罗斯方块」小结：</b>形式一（拼接成选项）用"优先代入大的 + 贴边拼"，考场优先不旋转；形式二（找规律）先数方块，再往"规则图案"上凑。</Callout>
      </Block>
      
      <Block>
        <BlockTitle>7. 折叠：本质上考查"对称性"</BlockTitle>
        <p><b>折叠题怎么来的？</b>把一张纸对折、再对折，剪一刀，展开后是什么？——纸上的折痕就是<strong>对称轴</strong>，剪口会被"镜像"复制若干次。</p>
        <Callout variant="key"><p><b>解密：</b>本质上考查<strong>对称性</strong>。</p></Callout>
        <PointList>
          <li><b>数清折了几次：</b>折 n 次，剪口就被复制 2ⁿ 份（四折就是 4 份），出现的位置关于折痕对称。</li>
          <li><b>看清剪在哪儿：</b>剪在"纸边"上，展开后缺口就在轮廓上（窗花边缘断开）；剪在"纸中间"，展开后是内部的镂空。（这是选项之间最常见的差异）</li>
          <li><b>对称轴方向：</b>折痕是横的、竖的还是斜的，决定了展开后图案的对称方向。</li>
          <li><b>易错点：</b>只看图的"像不像"，不数折痕／不看剪口是否落在纸边。</li>
        </PointList>
      
        <Example>
          <ExampleHeader>📝 例题14 · 折叠（对称性 · 2020 广东）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下列 4 张纸条，沿折痕能折断出如图所示图形的是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 480 117" role="img" aria-label="目标图形：由若干直线段围成的图形">
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <polygon points="150,25 205,60 150,95 95,60" />
                <polygon points="205,25 260,60 205,95 150,60" />
                <path d="M95,60 L150,25 M150,60 L205,25 M260,60 L205,95 M205,60 L150,95" />
              </g>
              <g fill="none" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 4">
                <line x1={95} y1={60} x2={150} y2={25} /><line x1={150} y1={60} x2={205} y2={25} />
                <line x1={205} y1={95} x2={260} y2={60} /><line x1={205} y1={60} x2={150} y2={95} />
              </g>
              <text x={300} y={46} fill="#ef4444" fontSize={12}>红色虚线 = 折痕（图形的边）</text>
              <text x={300} y={68} fill="#2563eb" fontSize={12}>共 6 段，依次折 5 次</text>
            </svg><figcaption>图：要折断出来的图形</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 466 150" role="img" aria-label="四张纸条，折痕位置不同">
      <g transform="translate(14,8)">
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={30} y={14} width={400} height={16} />
                <line x1={120} y1={14} x2={100} y2={30} /><line x1={210} y1={14} x2={190} y2={30} />
                <line x1={300} y1={14} x2={280} y2={30} /><line x1={390} y1={14} x2={370} y2={30} />
                <rect x={30} y={44} width={400} height={16} />
                <line x1={130} y1={44} x2={118} y2={60} /><line x1={230} y1={44} x2={218} y2={60} />
                <line x1={330} y1={44} x2={318} y2={60} />
                <rect x={30} y={74} width={400} height={16} />
                <line x1={90} y1={74} x2={70} y2={90} /><line x1={150} y1={74} x2={130} y2={90} />
                <line x1={230} y1={74} x2={210} y2={90} /><line x1={300} y1={74} x2={280} y2={90} />
                <line x1={370} y1={74} x2={350} y2={90} />
                <rect x={30} y={104} width={400} height={16} />
                <line x1={180} y1={104} x2={160} y2={120} /><line x1={260} y1={104} x2={240} y2={120} />
                <line x1={340} y1={104} x2={320} y2={120} />
              </g>
              <text x={12} y={26} fill="#1f2937" fontSize={12}>A</text>
              <text x={12} y={56} fill="#1f2937" fontSize={12}>B</text>
              <text x={12} y={86} fill="#ef4444" fontSize={12}>C</text>
              <text x={12} y={116} fill="#1f2937" fontSize={12}>D</text>
              <polyline points="8,88 12,93 24,80" fill="none" stroke="#ef4444" strokeWidth={3} />
            </g>
      </svg><figcaption>图：选项 A / B / C / D 四张纸条</figcaption></figure>
            <ExampleAnswer><b>解析：</b>纸条沿<strong>折痕</strong>折起来折断，每一段折痕就是图形的一条边，所以：<strong>纸条被折痕分成的段数、每段的长度，必须与目标图形的边数和边长一一对应</strong>。<br />
            量下来图形由 6 段组成（含 5 处转角），且各段长短不同；A、B、D 三张纸条的折痕数量／间距与图形边长对不上（有的段过长、有的段数不符）。<br />
            C 的折痕位置与图形的 6 条边一一对应，能依次折出该图形 ⇒ 选 C。<br /><span className="correct">答案：C</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题15 · 折叠（对称性 · 2024 广东）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>如图所示，正方形卡片沿对角线折叠两次后得到一个三角形，沿着虚线裁剪后，再展开卡片，则展开的图形最有可能是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 440 147" role="img" aria-label="折叠过程与裁剪位置">
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <polygon points="30,65 90,25 150,65 90,105" />
                <line x1={30} y1={65} x2={150} y2={65} stroke="#6b7280" strokeDasharray="4 4" />
                <line x1={90} y1={25} x2={90} y2={105} stroke="#6b7280" strokeDasharray="4 4" />
                <polygon points="190,105 190,25 270,105" />
                <line x1={190} y1={25} x2={230} y2={105} stroke="#6b7280" strokeDasharray="4 4" />
                <polygon points="330,105 330,25 410,105" />
                <path d="M330,70 Q342,78 330,88" stroke="#ef4444" strokeDasharray="5 4" />
              </g>
              <text x={90} y={122} fill="#2563eb" fontSize={12} textAnchor="middle">正方形</text>
              <text x={230} y={122} fill="#2563eb" fontSize={12} textAnchor="middle">折一次</text>
              <text x={370} y={122} fill="#2563eb" fontSize={12} textAnchor="middle">折两次后沿虚线剪</text>
            </svg><figcaption>图：折叠两次与裁剪位置</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 424.6 143" role="img" aria-label="四个选项">
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <path d="M36,46 Q30,60 36,74 Q30,86 44,92 Q58,98 72,92 Q86,86 80,74 Q86,60 80,46 Q86,34 72,28 Q58,22 44,28 Q30,34 36,46 Z" />
                <path d="M146,46 Q140,58 148,66 Q140,74 146,86 Q156,94 170,92 Q184,90 186,78 Q192,66 186,56 Q180,44 170,36 Q158,30 148,36 Q142,40 146,46 Z" />
                <path d="M256,42 Q252,60 260,74 Q252,88 266,94 Q282,98 292,88 Q300,76 294,64 Q300,48 292,36 Q280,26 266,30 Q254,34 256,42 Z" />
                <path d="M366,46 Q360,58 368,68 Q360,78 368,90 Q378,98 392,94 Q404,88 400,76 Q406,62 398,50 Q392,36 380,32 Q368,30 366,46 Z" />
              </g>
              <text x={58} y={114} fill="#1f2937" fontSize={13} textAnchor="middle">A</text>
              <text x={168} y={114} fill="#ef4444" fontSize={13} textAnchor="middle">B</text>
              <text x={278} y={114} fill="#1f2937" fontSize={13} textAnchor="middle">C</text>
              <text x={388} y={114} fill="#1f2937" fontSize={13} textAnchor="middle">D</text>
              <polyline points="160,116 165,121 178,106" fill="none" stroke="#ef4444" strokeWidth={3} />
            </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>正方形沿对角线折两次，剩下的是一个小三角形，剪口在<strong>折痕边</strong>上。展开时剪口会被"镜像"复制到正方形的四条边上，位置关于两条对角线<strong>对称</strong>。<br />
            按对称性还原：剪口落在轮廓上，展开后应是四条边中部都出现同样的小缺口，且关于两条对角线对称。<br />
            A：缺口位置不对称（只有两个角有）；C：缺口偏在一侧；D：缺口的形状／数量与剪口不符。<br />
            B：四处缺口的位置、形状关于两条对角线完全对称，与"折两次剪一刀"的结果一致 ⇒ 选 B。<br /><span className="correct">答案：B</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题16 · 折叠（对称性 · 2025 四川）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>将一长方形纸沿左图虚线折叠后，沿右图虚线修剪，得到的窗花是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 444 151.6" role="img" aria-label="长方形纸沿虚线折叠后修剪">
      <g transform="translate(0,2)">
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <polygon points="30,30 40,20 60,20 60,110 40,110 30,100" />
                <polygon points="60,20 70,30 90,30 90,100 70,100 60,110" />
                <polygon points="90,30 100,20 120,20 120,110 100,110 90,100" />
                <polygon points="120,20 130,30 150,30 150,100 130,100 120,110" />
                <polygon points="150,30 160,20 180,20 180,110 160,110 150,100" />
              </g>
              <g stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 4">
                <line x1={60} y1={20} x2={60} y2={110} /><line x1={90} y1={35} x2={90} y2={105} />
                <line x1={120} y1={20} x2={120} y2={110} /><line x1={150} y1={35} x2={150} y2={105} />
              </g>
              <text x={105.0} y={124.6} fill="#2563eb" fontSize={12} textAnchor="middle">沿虚线折叠</text>
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <polygon points="290,20 306,20 306,110 290,110" />
                <path d="M296,40 Q304,56 296,72" stroke="#ef4444" strokeDasharray="5 4" />
                <path d="M296,72 Q304,88 296,100" stroke="#ef4444" strokeDasharray="5 4" />
              </g>
              <text x={298.0} y={124.6} fill="#2563eb" fontSize={12} textAnchor="middle">沿虚线修剪</text>
              <polygon points="400,20 420,20 420,110 400,110" fill="none" stroke="#1f2937" strokeWidth={2} />
              <line x1={410} y1={20} x2={410} y2={110} stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 4" />
              <text x={410.0} y={124.6} fill="#2563eb" fontSize={12} textAnchor="middle">展开</text>
            </g>
      </svg><figcaption>图：折叠与修剪过程</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 454 228" role="img" aria-label="四个窗花选项">
      <g transform="translate(12,8)">
              <g fill="none" stroke="#1f2937" strokeWidth={2}>
                <rect x={30} y={14} width={390} height={14} />
                <path d="M60,28 Q60,44 74,44 Q88,44 88,28" stroke="#ef4444" strokeWidth={2.5} />
                <path d="M130,28 Q130,44 144,44 Q158,44 158,28" stroke="#ef4444" strokeWidth={2.5} />
                <path d="M200,28 Q200,44 214,44 Q228,44 228,28" stroke="#ef4444" strokeWidth={2.5} />
                <path d="M270,28 Q270,44 284,44 Q298,44 298,28" stroke="#ef4444" strokeWidth={2.5} />
                <path d="M340,28 Q340,44 354,44 Q368,44 368,28" stroke="#ef4444" strokeWidth={2.5} />
                <rect x={30} y={66} width={390} height={14} />
                <path d="M60,66 Q60,80 74,80 Q88,80 88,66 M130,66 Q130,80 144,80 Q158,80 158,66 M200,66 Q200,80 214,80 Q228,80 228,66 M270,66 Q270,80 284,80 Q298,80 298,66 M340,66 Q340,80 354,80 Q368,80 368,66" stroke="#ef4444" strokeWidth={2.5} />
                <path d="M46,52 L46,66 M46,80 L46,94" stroke="#ef4444" strokeWidth={2.5} />
                <path d="M404,52 L404,66 M404,80 L404,94" stroke="#ef4444" strokeWidth={2.5} />
                <rect x={30} y={118} width={390} height={14} />
                <path d="M60,132 Q60,146 74,146 Q88,146 88,132 M130,132 Q130,146 144,146 Q158,146 158,132 M200,132 Q200,146 214,146 Q228,146 228,132" stroke="#2563eb" strokeWidth={2.5} />
                <rect x={30} y={170} width={390} height={14} />
                <path d="M120,184 Q120,198 134,198 Q148,198 148,184 M200,184 Q200,198 214,198 Q228,198 228,184 M280,184 Q280,198 294,198 Q308,198 308,184" stroke="#2563eb" strokeWidth={2.5} />
              </g>
              <text x={14} y={26} fill="#1f2937" fontSize={12}>A</text>
              <text x={14} y={78} fill="#ef4444" fontSize={12}>B</text>
              <text x={14} y={130} fill="#1f2937" fontSize={12}>C</text>
              <text x={14} y={182} fill="#1f2937" fontSize={12}>D</text>
              <polyline points="10,80 14,85 26,72" fill="none" stroke="#ef4444" strokeWidth={3} />
            </g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>折叠后剪的这一刀，剪口是<strong>穿到纸边</strong>的（虚线从纸的中部一直连到边上），展开以后这些缺口会对称地出现在<strong>上下两条边上</strong>，把纸边"咬"出豁口，而不是只在中间镂空。<br />
            数折痕：折叠后纸上有 4 条折痕，剪口会被对称复制成多份，位置必须与折痕的间隔一致。<br />
            A：缺口没有连到纸边（只在纸的中间，剪法不符）；C：只有 3 份且方向不对称；D：份数与折痕数不符（少了两组）。<br />
            B：缺口穿过纸边、份数与折痕一致，且左右对称 ⇒ 选 B。<br /><span className="correct">答案：B</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Callout variant="tip"><b>「折叠」小结：</b>解密就是两个字——<strong>对称</strong>。做题三步：①数折了几次（剪口被复制 2ⁿ 份）；②看剪口是在纸边还是纸中间；③按折痕方向做镜像对称。</Callout>
      </Block>
    </>
  )
}
