import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleQuestion, PointList } from '@/components/content'

/**
 * 六、六面体 + 四面体
 *
 * @returns 该节正文。
 */
export default function S7(): ReactElement {
  return (
    <>
      <Block>
        <BlockTitle>1. 六面体总览：先记住「答题思路三步」</BlockTitle>
        <p>六面体（正方体纸盒）问题，本质是「把展开图折起来，再和选项对照」。老师开篇就强调两条底层原则：</p>
        <PointList>
          <li><b>如果靠想象力</b>：注意折叠方向（相对位置易搞反）。</li>
          <li><b>如果靠技巧</b>：所有的方法都是<b>排除错误选项</b>用的——单一技巧都有缺点。</li>
          <li>技巧不是越多越好，而是<b>越熟悉越好、适用范围越大越好</b>。</li>
        </PointList>
        <Callout variant="key">
          <p><b>答题思路（三步）</b></p>
          <p>第一步：观察题干与选项，出现「<b>相对面</b>」直接排除；</p>
          <p>第二步：有「<b>唯一边或点</b>」，优先用「<b>箭头法</b>」解题（备选「画边法」）；</p>
          <p>第三步：没有「唯一边或点」时——（1）2 个面近、1 个面远，优先用「<b>公共边</b>」；（2）3 个面近，优先用「<b>公共点</b>」。</p>
        </Callout>
        <Callout variant="tip">
          讲义中的技巧排序（含适用边界）：相对面 → 箭头法 → 公共边 → 公共点 → 画边法 → 「1-4-1」变形（2-3-1 / 3-3 / 2-2）。「相邻比较」贯穿始终；立体的「外部轮廓」只用于定方向，判断仍要靠相邻关系。
        </Callout>
      </Block>
      
      <Block>
        <BlockTitle>2. 相对面：最快的一招，也是最容易漏的一招</BlockTitle>
        <p><b>什么是相对面？</b>折叠成正方体后<b>面对面（不能同时被看见）</b>的两个面，出现即排除。</p>
        <p>基础模型：<b>「1-4-1」展开图</b>。中间一行 4 个面绕一圈围成侧面，上、下各 1 个面分别是「上面」和「下面」。</p>
        <Callout variant="formula"><span className="formula">1-4-1 展开图：同列相隔一个面 → 相对面</span></Callout>
        <p><b>「相对面」快速记忆</b>（讲义原话）：</p>
        <PointList>
          <li>① <b>同行或同列相隔一个面</b>——是相对面；</li>
          <li>② <b>「Z 字形」两端</b>（紧邻 Z 字中线的面）——是相对面。</li>
          <li>速记：<b>中间隔 1 个，或隔 1 列，都是相对面。</b></li>
        </PointList>
        <Callout variant="tip">
          <b>真实测评：</b>优点——很快、不用动脑；缺点——实战出现少，只能排除个别选项（所以只能当第一步）。
        </Callout>
      
        <Example>
          <ExampleHeader>📝 例题1 · 六面体（相对面 · 2025 天津事业）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>左边给定的是正方体的外表面展开图，下面哪一项<b>不能</b>由它折叠而成？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 348 176" role="img" aria-label="例题1展开图：1-4-1变形，左上角面与中间行第1面被一条长线贯穿，第2面有斜线，第3面空白，第4面有竖线，第4面下方为十字面">
      <g transform="translate(0,12)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={150} y={10} width={44} height={44} />
                <rect x={150} y={54} width={44} height={44} />
                <rect x={194} y={54} width={44} height={44} />
                <rect x={238} y={54} width={44} height={44} />
                <rect x={282} y={54} width={44} height={44} />
                <rect x={282} y={98} width={44} height={44} />
                <line x1={194} y1={10} x2={150} y2={98} />
                <line x1={194} y1={54} x2={238} y2={98} />
                <line x1={304} y1={54} x2={304} y2={98} />
                <line x1={304} y1={98} x2={304} y2={142} />
                <line x1={282} y1={120} x2={326} y2={120} />
              </g>
              <text x={172} y={34} fill="#ef4444" fontSize={13} textAnchor="middle">1</text>
              <text x={172} y={78} fill="#ef4444" fontSize={13} textAnchor="middle">2</text>
              <text x={216} y={78} fill="#ef4444" fontSize={13} textAnchor="middle">3</text>
              <text x={260} y={78} fill="#ef4444" fontSize={13} textAnchor="middle">4</text>
              <text x={304} y={78} fill="#ef4444" fontSize={13} textAnchor="middle">5</text>
              <text x={304} y={122} fill="#ef4444" fontSize={13} textAnchor="middle">6</text>
            </g>
      </svg><figcaption>图：例题 1 的展开图（「1-4-1」变形；面 1、2 被一条直线贯穿）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 447 129" role="img" aria-label="例题1四个选项：A正面为十字面、右面横线；B正面斜线接顶面斜线、右面斜线；C顶面有线、正面斜线；D正面横线、右面斜线">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={25} y={45} width={42} height={42} />
                <polygon points="25,45 44,31 86,31 67,45" />
                <polygon points="67,45 86,31 86,73 67,87" />
                <line x1={46} y1={45} x2={46} y2={87} />
                <line x1={25} y1={66} x2={67} y2={66} />
                <line x1={67} y1={66} x2={86} y2={52} />
                <rect x={138} y={45} width={42} height={42} />
                <polygon points="138,45 157,31 199,31 180,45" />
                <polygon points="180,45 199,31 199,73 180,87" />
                <line x1={138} y1={87} x2={159} y2={45} />
                <line x1={159} y1={45} x2={199} y2={31} />
                <line x1={180} y1={45} x2={199} y2={73} />
                <rect x={251} y={45} width={42} height={42} />
                <polygon points="251,45 270,31 312,31 293,45" />
                <polygon points="293,45 312,31 312,73 293,87" />
                <line x1={293} y1={45} x2={251} y2={87} />
                <line x1={256} y1={31} x2={300} y2={31} />
                <rect x={364} y={45} width={42} height={42} />
                <polygon points="364,45 383,31 425,31 406,45" />
                <polygon points="406,45 425,31 425,73 406,87" />
                <line x1={364} y1={66} x2={406} y2={66} />
                <line x1={364} y1={31} x2={425} y2={31} />
              </g>
              <text x={46} y={104} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={159} y={104} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={272} y={104} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={385} y={104} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </svg><figcaption>选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>先定相对面。中间一行 4 个面（2、3、4、5）围成一圈，<b>同行隔一个</b>即为相对面 → <b>2 与 4 相对</b>、<b>3 与 5 相对</b>；上、下两个「1」分处第 1 列与第 4 列，折起后分别是上面与下面 → <b>1 与 6 相对</b>。<br />
              选项 C：顶面为 5（只有一条线）、正面为 3（斜线），3 与 5 是相对面，不可能同时被看见 → <b>C 不能折叠而成</b>。<br />
              其余各项用「箭头法」验算均成立（A：顶 4、正 6、右 5，其中 6 的十字线与其「6—5」公共边垂直，5 的线正好接上成一条直线；B：顶 1、正 2、右 3，面 1 与面 2 的长线越过公共边中点后，正好到 1 的「上右角」即顶—后—右公共点，与图中一致；D：顶 4、正 5、右 1，1 的线由「1—2」边中点连到顶—后—右公共点，也吻合）。
              <br /><span className="correct">答案：C</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题2 · 六面体（相对面 · 2024 广西事业）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>在右面的 4 个图形中，只有一个是由左面的纸板折叠而成的。你需要选出正确的一个。</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 230 170" role="img" aria-label="例题2展开图十字形：上面为带黑点的面，中间行依次是空白、斜线、黑色三角、黑色圆面，下面为小黑三角面">
      <g transform="translate(0,12)">
              <defs><pattern id="L6-h2" width={7} height={7} patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1={0} y1={0} x2={0} y2={7} stroke="#6b7280" strokeWidth={1.4} /></pattern></defs>
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={166} y={10} width={42} height={42} />
                <rect x={40} y={52} width={42} height={42} />
                <rect x={82} y={52} width={42} height={42} />
                <rect x={124} y={52} width={42} height={42} />
                <rect x={166} y={52} width={42} height={42} />
                <rect x={166} y={94} width={42} height={42} />
              </g>
              <rect x={82} y={52} width={42} height={42} fill="url(#L6-h2)" stroke="none" />
              <polygon points="124,52 166,94 124,94" fill="#1f2937" />
              <circle cx={187} cy={73} r={16} fill="#1f2937" />
              <circle cx={187} cy={31} r={8} fill="#1f2937" />
              <line x1={187} y1={10} x2={187} y2={23} stroke="#1f2937" strokeWidth={2} />
              <polygon points="178,129 196,129 187,115" fill="#1f2937" />
              <g stroke="#1f2937" strokeWidth={1.6} fill="none">
                <rect x={166} y={10} width={42} height={42} />
                <rect x={40} y={52} width={42} height={42} />
                <rect x={82} y={52} width={42} height={42} />
                <rect x={124} y={52} width={42} height={42} />
                <rect x={166} y={52} width={42} height={42} />
                <rect x={166} y={94} width={42} height={42} />
              </g>
              <text x={61} y={78} fill="#2563eb" fontSize={13} textAnchor="middle">2</text>
              <text x={103} y={78} fill="#2563eb" fontSize={13} textAnchor="middle">3</text>
              <text x={145} y={78} fill="#2563eb" fontSize={13} textAnchor="middle">4</text>
              <text x={187} y={78} fill="#2563eb" fontSize={13} textAnchor="middle">5</text>
              <text x={187} y={34} fill="#2563eb" fontSize={13} textAnchor="middle">1</text>
              <text x={187} y={120} fill="#2563eb" fontSize={13} textAnchor="middle">6</text>
            </g>
      </svg><figcaption>图：例题 2 的展开图（1-4-1 十字形；面 1 黑点、面 2 空白、面 3 斜线、面 4 黑三角、面 5 黑圆、面 6 小三角）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 444 133" role="img" aria-label="例题2四个选项：A顶面斜线、正面空白、右面黑圆；B顶面白点、正面斜线、右面黑三角；C顶面黑块、正面小三角、右面空白；D顶面黑块、正面空白、右面小三角">
              <defs><pattern id="L6-h3" width={6} height={6} patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1={0} y1={0} x2={0} y2={6} stroke="#6b7280" strokeWidth={1.3} /></pattern></defs>
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={28} y={48} width={40} height={40} />
                <polygon points="28,48 46,34 86,34 68,48" />
                <polygon points="68,48 86,34 86,74 68,88" />
                <rect x={140} y={48} width={40} height={40} />
                <polygon points="140,48 158,34 198,34 180,48" />
                <polygon points="180,48 198,34 198,74 180,88" />
                <rect x={252} y={48} width={40} height={40} />
                <polygon points="252,48 270,34 310,34 292,48" />
                <polygon points="292,48 310,34 310,74 292,88" />
                <rect x={364} y={48} width={40} height={40} />
                <polygon points="364,48 382,34 422,34 404,48" />
                <polygon points="404,48 422,34 422,74 404,88" />
              </g>
              <polygon points="28,48 68,48 68,74 46,34" fill="url(#L6-h3)" stroke="none" />
              <ellipse cx={74} cy={66} rx={8} ry={13} fill="#1f2937" />
              <polygon points="180,48 180,88 198,74" fill="#1f2937" />
              <circle cx={170} cy={42} r={5} fill="#1f2937" />
              <polygon points="252,48 292,34 292,48" fill="#1f2937" />
              <polygon points="272,80 282,68 292,80" fill="#1f2937" />
              <polygon points="364,48 404,34 404,48" fill="#1f2937" />
              <polygon points="412,62 404,72 412,82" fill="#1f2937" />
              <text x={48} y={108} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={160} y={108} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={272} y={108} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={384} y={108} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </svg><figcaption>选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>展开图是 1-4-1。中间行 4 个面为 2（空白）、3（斜线）、4（黑三角）、5（黑圆），<b>2 与 4 相对、3 与 5 相对</b>；上、下同在第 4 列 → <b>1（黑点）与 6（小三角）相对</b>。<br />
              A 项同时出现 3 与 5（相对面）→ 排除；C 项同时出现 2 与 4（相对面）→ 排除；<br />
              D 项出现 2、5、6：三面互邻没问题，但用箭头法定方向可发现面 6 的小三角指向错误（展开图中 ▲ 尖指向面 5，折起后应指向「5—6」公共边即右上，而 D 中尖背向 5）→ 排除；<br />
              B 项为 1、3、4 三个互邻面：顶面黑点（1）、正面斜线（3）、右面黑三角（4）——黑点、斜线、黑三角之间的相对方向与展开图折起后一致（1 在 3 的正上方，4 在 3 的右侧）→ 正确。
              <br /><span className="correct">答案：B</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>3. 箭头法：<span>找唯一，定方向</span></BlockTitle>
        <Callout variant="formula"><span className="formula">口诀：找唯一，定方向</span></Callout>
        <PointList>
          <li>① 结合选项，找一个<b>唯一点或唯一边</b>；</li>
          <li>② 以唯一点或唯一边作为参照物，<b>画出箭头方向</b>。</li>
        </PointList>
        <p><b>怎么找「唯一」？</b>（都是针对选项里的面去找）</p>
        <PointList>
          <li><b>唯一点</b>：某个面上有独一无二的点/角（如黑三角的尖、直角交点）；</li>
          <li><b>唯一边</b>：某个面上有独一无二的边（如唯一的斜边）；</li>
          <li><b>理解升级</b>：公共边 → 唯一边；两个面各自都有图案时可用「<b>双箭头</b>」（同时画两个箭头，一次锁定两个面）。</li>
        </PointList>
        <Callout variant="tip">
          <PointList>
            <li>可以<b>转动讲义（试卷）</b>，让箭头正上方，更好对比；</li>
            <li>思维：<b>优先看直接靠在一起的</b>面（好画、好看）；</li>
            <li>思维：<b>位置居中的面优先</b>——周边更好看、难度更低。</li>
          </PointList>
          <p><b>真实测评：</b>优点——上下左右大致方位，区分很快；缺点 1——图案都在右边时容易忽略细节（用「双箭头」解决）；缺点 2——没有直接靠着时需要移动（用「公共边」解决）。</p>
        </Callout>
      
        <Example>
          <ExampleHeader>📝 例题3 · 六面体（箭头法 · 2024 江苏）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>左边给定的是六面体的外表面展开图，右边哪一项能由它折叠而成？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 322 116" role="img" aria-label="例题3展开图：上排E、F、T三个面，下排Y、L、V三个面，下排整体右移两格与T同列">
      <g transform="translate(0,6)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={120} y={16} width={36} height={36} />
                <rect x={156} y={16} width={36} height={36} />
                <rect x={192} y={16} width={36} height={36} />
                <rect x={192} y={52} width={36} height={36} />
                <rect x={228} y={52} width={36} height={36} />
                <rect x={264} y={52} width={36} height={36} />
              </g>
              <g fontSize={18} textAnchor="middle" fontFamily="Georgia, serif">
                <text x={138} y={42} fill="#1f2937">E</text><text x={174} y={42} fill="#1f2937">F</text><text x={210} y={42} fill="#1f2937">T</text>
                <text x={210} y={78} fill="#1f2937">Y</text><text x={246} y={78} fill="#1f2937">L</text><text x={282} y={78} fill="#1f2937">V</text>
              </g>
            </g>
      </svg><figcaption>图：例题 3 的展开图（3-3 模型：E F T / Y L V）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 457 135" role="img" aria-label="例题3四个选项：A顶面E、正面倒V、右面T；B顶面L、正面倒E、右面Y；C顶面倒E、正面L形、右面Y；D顶面V形、正面F、右面T">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={26} y={46} width={46} height={46} />
                <polygon points="26,46 47,31 93,31 72,46" />
                <polygon points="72,46 93,31 93,77 72,92" />
                <rect x={140} y={46} width={46} height={46} />
                <polygon points="140,46 161,31 207,31 186,46" />
                <polygon points="186,46 207,31 207,77 186,92" />
                <rect x={254} y={46} width={46} height={46} />
                <polygon points="254,46 275,31 321,31 300,46" />
                <polygon points="300,46 321,31 321,77 300,92" />
                <rect x={368} y={46} width={46} height={46} />
                <polygon points="368,46 389,31 435,31 414,46" />
                <polygon points="414,46 435,31 435,77 414,92" />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <line x1={42} y1={80} x2={56} y2={56} /><line x1={56} y1={56} x2={70} y2={80} />
                <line x1={83} y1={40} x2={83} y2={70} /><line x1={83} y1={40} x2={90} y2={40} />
                <line x1={150} y1={56} x2={176} y2={56} /><line x1={150} y1={74} x2={176} y2={74} /><line x1={150} y1={56} x2={150} y2={80} />
                <line x1={176} y1={46} x2={176} y2={72} /><line x1={176} y1={46} x2={183} y2={46} /><line x1={176} y1={59} x2={184} y2={59} />
                <line x1={200} y1={62} x2={214} y2={62} /><line x1={207} y1={62} x2={207} y2={76} />
                <line x1={264} y1={52} x2={290} y2={52} /><line x1={264} y1={68} x2={290} y2={68} /><line x1={290} y1={52} x2={290} y2={76} />
                <line x1={264} y1={84} x2={288} y2={84} /><line x1={284} y1={60} x2={284} y2={84} />
                <line x1={312} y1={38} x2={328} y2={38} /><line x1={320} y1={38} x2={320} y2={60} />
                <line x1={382} y1={56} x2={382} y2={82} /><line x1={382} y1={56} x2={400} y2={56} /><line x1={382} y1={69} x2={396} y2={69} />
                <line x1={378} y1={40} x2={392} y2={30} /><line x1={392} y1={30} x2={406} y2={40} />
                <line x1={422} y1={42} x2={422} y2={70} /><line x1={422} y1={42} x2={430} y2={42} />
              </g>
              <text x={49} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={163} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={277} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={391} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </svg><figcaption>选项 A / B / C / D（各面字母按折叠后的方向旋转）</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>先找相对面。上排 E F T 三格中 <b>E 与 T 相隔一个面 → 相对</b>；下排 Y L V 三格中 <b>Y 与 V 相对</b>；余下 <b>F 与 L</b>（构成 Z 字两端）相对。<br />
              六个字面各不相同 → 用<b>箭头法</b>：以某个唯一的面（或某个字的唯一笔画）作参照画箭头，比对上下左右方位。<br />
              A 项顶面为 E、右面为 T，二者是相对面，不可能同时出现 → 排除；<br />
              B、D 项的三面组合虽不违反相对面，但用箭头法（以「E」或「F」的横竖笔画为唯一边/唯一点画箭头）比对后，对应面的旋转方向与展开图不一致 → 排除；<br />
              C 项顶面、正面、右面的三个字及其旋转方向与展开图折起后完全一致 → 正确。
              <br /><span className="correct">答案：C</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题4 · 六面体（箭头法 · 2024 江苏）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>左边给定的是六面体的外表面展开图，右边哪一项能由它折叠而成？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 302 158" role="img" aria-label="例题4展开图2-3-1模型：上排廿、甘；中排古、占、旦；下排由">
      <g transform="translate(0,12)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={128} y={10} width={38} height={38} />
                <rect x={166} y={10} width={38} height={38} />
                <rect x={166} y={48} width={38} height={38} />
                <rect x={204} y={48} width={38} height={38} />
                <rect x={242} y={48} width={38} height={38} />
                <rect x={242} y={86} width={38} height={38} />
              </g>
              <g fontSize={17} textAnchor="middle">
                <text x={147} y={36} fill="#1f2937">廿</text><text x={185} y={36} fill="#1f2937">甘</text>
                <text x={185} y={74} fill="#1f2937">古</text><text x={223} y={74} fill="#1f2937">占</text><text x={261} y={74} fill="#1f2937">旦</text>
                <text x={261.0} y={104.4} fill="#1f2937">由</text>
              </g>
            </g>
      </svg><figcaption>图：例题 4 的展开图（2-3-1 模型）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 457 135" role="img" aria-label="例题4四个选项：A、B、C、D均为带横竖线格纹的正方体">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={26} y={44} width={46} height={46} />
                <polygon points="26,44 47,29 93,29 72,44" />
                <polygon points="72,44 93,29 93,75 72,90" />
                <rect x={140} y={44} width={46} height={46} />
                <polygon points="140,44 161,29 207,29 186,44" />
                <polygon points="186,44 207,29 207,75 186,90" />
                <rect x={254} y={44} width={46} height={46} />
                <polygon points="254,44 275,29 321,29 300,44" />
                <polygon points="300,44 321,29 321,75 300,90" />
                <rect x={368} y={44} width={46} height={46} />
                <polygon points="368,44 389,29 435,29 414,44" />
                <polygon points="414,44 435,29 435,75 414,90" />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <line x1={42} y1={29} x2={42} y2={44} /><line x1={60} y1={37} x2={60} y2={52} />
                <line x1={26} y1={58} x2={72} y2={58} /><line x1={38} y1={44} x2={38} y2={90} /><line x1={58} y1={44} x2={58} y2={90} />
                <line x1={80} y1={52} x2={80} y2={66} /><line x1={84} y1={58} x2={93} y2={58} />
                <line x1={156} y1={29} x2={156} y2={44} /><line x1={174} y1={37} x2={174} y2={52} />
                <line x1={140} y1={58} x2={186} y2={58} /><line x1={152} y1={44} x2={152} y2={90} /><line x1={172} y1={44} x2={172} y2={90} />
                <line x1={194} y1={58} x2={207} y2={58} /><line x1={200} y1={44} x2={200} y2={58} />
                <line x1={270} y1={29} x2={270} y2={44} /><line x1={288} y1={37} x2={288} y2={52} />
                <line x1={254} y1={58} x2={300} y2={58} /><line x1={266} y1={44} x2={266} y2={90} /><line x1={286} y1={44} x2={286} y2={90} />
                <line x1={278} y1={44} x2={278} y2={90} />
                <line x1={384} y1={37} x2={384} y2={52} /><line x1={402} y1={37} x2={402} y2={52} />
                <line x1={368} y1={66} x2={414} y2={66} /><line x1={381} y1={44} x2={381} y2={90} /><line x1={401} y1={44} x2={401} y2={90} />
                <line x1={422} y1={58} x2={435} y2={58} /><line x1={434} y1={58} x2={434} y2={72} />
              </g>
              <text x={49} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={163} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={277} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={391} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </svg><figcaption>选项 A / B / C / D（「廿/甘/古/占/旦/由」的不同方向组合）</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>展开图为 2-3-1：上排 廿、甘；中排 古、占、旦；下排 由。<br />
              找相对面：中排 古—占—旦 三格 → <b>古 与 旦 相对</b>；<b>廿 与 占 相对</b>（廿 与 占 构成 Z 字两端）；<b>甘 与 由 相对</b>。<br />
              看选项：B、C、D 三个面里都出现了相对面（如出现「廿、占」或「古、旦」同时可见），直接排除；A 项只出现 廿、甘、由 中互邻的三个面，且各字的横竖笔画方向与折叠后一致 → 正确。
              <br /><span className="correct">答案：A</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题5 · 六面体（立→展，箭头法 · 2025 江苏）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>左边给定的是一个立方体，右边哪一项可能是它的外表面展开图？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 288 172" role="img" aria-label="例题5立体图：正方体顶面、正面、右面各有一个黑色箭头">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={150} y={70} width={80} height={80} />
                <polygon points="150,70 186,42 266,42 230,70" />
                <polygon points="230,70 266,42 266,122 230,150" />
              </g>
              <g stroke="#1f2937" strokeWidth={6} fill="none" strokeLinecap="round">
                <line x1={246} y1={56} x2={192} y2={58} />
                <line x1={192} y1={58} x2={204} y2={52} />
                <line x1={192} y1={58} x2={202} y2={64} />
                <line x1={190} y1={82} x2={190} y2={128} />
                <line x1={190} y1={128} x2={184} y2={116} />
                <line x1={190} y1={128} x2={196} y2={116} />
                <line x1={188} y1={100} x2={214} y2={86} />
              </g>
              <g stroke="#1f2937" strokeWidth={6} fill="none" strokeLinecap="round">
                <line x1={192} y1={76} x2={214} y2={76} />
              </g>
              <g stroke="#1f2937" strokeWidth={6} fill="none" strokeLinecap="round">
                <line x1={248} y1={78} x2={248} y2={126} />
                <line x1={248} y1={126} x2={242} y2={114} />
                <line x1={248} y1={126} x2={254} y2={114} />
              </g>
            </svg><figcaption>图：例题 5 的立体图（三个可见面各有一个黑色箭头）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 494 145.2" role="img" aria-label="例题5四个选项：均为带箭头图案的141展开图">
      <g transform="translate(2,8)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={20} y={14} width={30} height={30} /><rect x={20} y={44} width={30} height={30} />
                <rect x={50} y={44} width={30} height={30} /><rect x={80} y={44} width={30} height={30} />
                <rect x={110} y={44} width={30} height={30} /><rect x={110} y={74} width={30} height={30} />
                <rect x={140} y={14} width={30} height={30} /><rect x={140} y={44} width={30} height={30} />
                <rect x={170} y={44} width={30} height={30} /><rect x={200} y={44} width={30} height={30} />
                <rect x={230} y={44} width={30} height={30} /><rect x={230} y={74} width={30} height={30} />
                <rect x={260} y={14} width={30} height={30} /><rect x={260} y={44} width={30} height={30} />
                <rect x={290} y={44} width={30} height={30} /><rect x={320} y={44} width={30} height={30} />
                <rect x={350} y={44} width={30} height={30} /><rect x={350} y={74} width={30} height={30} />
                <rect x={380} y={14} width={30} height={30} /><rect x={380} y={44} width={30} height={30} />
                <rect x={410} y={44} width={30} height={30} /><rect x={440} y={44} width={30} height={30} />
              </g>
              <g stroke="#1f2937" strokeWidth={2.4} fill="none" strokeLinecap="round">
                <line x1={35} y1={20} x2={35} y2={38} /><line x1={35} y1={38} x2={31} y2={31} /><line x1={35} y1={38} x2={39} y2={31} />
                <line x1={27} y1={59} x2={43} y2={59} /><line x1={27} y1={59} x2={33} y2={54} /><line x1={27} y1={59} x2={33} y2={64} />
                <line x1={65} y1={52} x2={65} y2={66} /><line x1={57} y1={59} x2={73} y2={59} />
                <line x1={88} y1={59} x2={102} y2={59} /><line x1={102} y1={59} x2={95} y2={54} /><line x1={102} y1={59} x2={95} y2={64} />
                <line x1={125} y1={59} x2={125} y2={45} /><line x1={125} y1={45} x2={120} y2={51} /><line x1={125} y1={45} x2={130} y2={51} />
                <line x1={125} y1={66} x2={125} y2={88} /><line x1={125} y1={88} x2={120} y2={81} /><line x1={125} y1={88} x2={130} y2={81} />
              </g>
              <text x={35} y={112} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={155} y={112} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={275} y={112} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={395} y={112} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（箭头方向为示意还原）</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>立体图三个可见面各有一个箭头：「上面」的箭头指向左后，「正面」的箭头向下，「右面」的箭头向下。折成平面展开图后，<b>三个箭头之间的方向关系不能变</b>。<br />
              用箭头法：以「正面（向下箭头）」为唯一参照，沿公共边平移，看另外两个箭头应指向哪里。A、B、C 的箭头排布在平移后都会出现反转或错位；只有 D 中三箭头的相对方向与立体图一致（长条中箭头首尾呼应，折起后正好构成「上左后、正下、右下」）→ 正确。
              <br /><span className="correct">答案：D</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>4. 公共边：两个面共用同一条边</BlockTitle>
        <p><b>什么是公共边？</b>公共边是两个图形共同拥有的边。</p>
        <Callout variant="formula"><span className="formula">口诀：构成直角的两条边是同一个边 / 一列（行）连着 4 个面，两端是同一条边 / 「直角边」随便「滚」</span></Callout>
        <p><b>「公共边」快速记忆：</b></p>
        <PointList>
          <li>① <b>构成直角的两条边</b>——折起后是同一条边；</li>
          <li>② <b>一列/一行连着 4 个面的两端</b>——是同一条边；</li>
          <li>③ <b>「直角边」随便「滚」</b>（1-4-1 里，直角处的边可以沿圈滚动着找）。</li>
        </PointList>
        <Callout variant="tip">
          <b>真实测评：</b>优点——公共边周边图案，区分很快；缺点——两边的图案一样时，左右容易混淆（<b>搭配箭头法</b>可以解决）。<br />
          因此得出结论：<b>箭头法（主）+ 公共边（辅）</b>，五星推荐。
        </Callout>
      
        <Example>
          <ExampleHeader>📝 例题6 · 六面体（立→展，公共边 · 2024 四川事业）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>左边给定的纸盒能由下列选项折叠而成的是。</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 288 162" role="img" aria-label="例题6立体图：正方体三个可见面各有一条斜线">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={150} y={60} width={80} height={80} />
                <polygon points="150,60 186,32 266,32 230,60" />
                <polygon points="230,60 266,32 266,112 230,140" />
                <line x1={150} y1={60} x2={230} y2={140} />
                <line x1={186} y1={32} x2={266} y2={112} />
                <line x1={150} y1={140} x2={230} y2={60} />
              </g>
            </svg><figcaption>图：例题 6 的立体图（三个可见面各有一条对角斜线）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 448 143" role="img" aria-label="例题6四个选项：均为含斜线的展开图">
      <g transform="translate(6,4)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={16} y={48} width={30} height={30} /><rect x={46} y={48} width={30} height={30} />
                <rect x={76} y={48} width={30} height={30} /><rect x={106} y={48} width={30} height={30} />
                <rect x={76} y={18} width={30} height={30} /><rect x={76} y={78} width={30} height={30} />
                <rect x={160} y={48} width={30} height={30} /><rect x={190} y={48} width={30} height={30} />
                <rect x={220} y={48} width={30} height={30} /><rect x={250} y={48} width={30} height={30} />
                <rect x={220} y={18} width={30} height={30} /><rect x={250} y={78} width={30} height={30} />
                <rect x={300} y={48} width={30} height={30} /><rect x={330} y={48} width={30} height={30} />
                <rect x={360} y={48} width={30} height={30} /><rect x={330} y={18} width={30} height={30} />
                <rect x={390} y={48} width={30} height={30} /><rect x={390} y={78} width={30} height={30} />
                <line x1={106} y1={48} x2={136} y2={78} />
                <line x1={220} y1={48} x2={250} y2={78} /><line x1={250} y1={48} x2={220} y2={78} />
                <line x1={360} y1={48} x2={390} y2={78} /><line x1={330} y1={48} x2={360} y2={78} />
                <line x1={390} y1={108} x2={420} y2={78} />
              </g>
              <text x={76} y={114} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={220} y={114} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={345} y={114} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={400} y={114} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（斜线位置示意还原）</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>三个可见面各有一条斜线。以立体图中「三条斜线共用一个顶点、其中一条在顶面」为参照，用<b>公共边</b>把展开图上的斜线「滚」到一起比对：<br />
              B、C、D 折起后斜线的走向（与公共边的尖角位置）都与立体图对不上；<br />
              A 项折起后，顶面斜线与正面斜线正好在公共边上「共点」，与立体图一致 → 正确。
              <br /><span className="correct">答案：A</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题7 · 六面体（公共边 · 2024 浙江）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>左边给定的是纸盒的外表面展开图，右边哪项能够由它折叠而成？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 326 182" role="img" aria-label="例题7展开图十字形：顶面与中间四个面、下面一个面，各面含对角线与交叉线">
      <g transform="translate(0,12)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={120} y={10} width={46} height={46} /><rect x={120} y={56} width={46} height={46} />
                <rect x={166} y={56} width={46} height={46} /><rect x={212} y={56} width={46} height={46} />
                <rect x={258} y={56} width={46} height={46} /><rect x={212} y={102} width={46} height={46} />
                <line x1={120} y1={10} x2={166} y2={56} />
                <line x1={120} y1={56} x2={166} y2={102} /><line x1={166} y1={56} x2={120} y2={102} />
                <line x1={166} y1={56} x2={212} y2={102} /><line x1={212} y1={56} x2={166} y2={102} />
                <line x1={212} y1={56} x2={258} y2={102} />
                <line x1={212} y1={102} x2={258} y2={56} />
                <line x1={212} y1={102} x2={258} y2={148} />
                <line x1={258} y1={102} x2={212} y2={148} />
                <line x1={120} y1={56} x2={166} y2={56} />
              </g>
            </g>
      </svg><figcaption>图：例题 7 的展开图（十字形；各面为对角线与交叉线组合）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 457 135" role="img" aria-label="例题7四个选项：均为含对角线交叉线的正方体">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={26} y={46} width={46} height={46} /><polygon points="26,46 47,31 93,31 72,46" /><polygon points="72,46 93,31 93,77 72,92" />
                <rect x={140} y={46} width={46} height={46} /><polygon points="140,46 161,31 207,31 186,46" /><polygon points="186,46 207,31 207,77 186,92" />
                <rect x={254} y={46} width={46} height={46} /><polygon points="254,46 275,31 321,31 300,46" /><polygon points="300,46 321,31 321,77 300,92" />
                <rect x={368} y={46} width={46} height={46} /><polygon points="368,46 389,31 435,31 414,46" /><polygon points="414,46 435,31 435,77 414,92" />
                <line x1={26} y1={92} x2={72} y2={46} /><line x1={93} y1={31} x2={93} y2={77} strokeWidth={2} />
                <line x1={140} y1={92} x2={186} y2={46} /><line x1={186} y1={46} x2={186} y2={92} />
                <line x1={254} y1={92} x2={300} y2={46} /><line x1={300} y1={46} x2={254} y2={92} />
                <line x1={254} y1={46} x2={300} y2={92} strokeWidth={2} />
                <line x1={368} y1={92} x2={414} y2={46} /><line x1={368} y1={46} x2={414} y2={92} />
              </g>
              <text x={49} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={163} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={277} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={391} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </svg><figcaption>选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>展开图为十字形 1-4-1，中间一行四个面绕成侧面。<b>公共边也是唯一的</b>——每一对相邻面之间的边只有一条，用它来判断线（斜线/交叉线）越过公共边后能否接上。<br />
              A、B、D 折起后，斜线与交叉线的端点落在公共边上的位置与展开图不符（线没有接上或方向反转）；<br />
              C 项三个可见面的线条走向及交点位置与折叠后完全吻合 → 正确。
              <br /><span className="correct">答案：C</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>5. 公共点：三个面交汇处的那一个点</BlockTitle>
        <PointList>
          <li><b>相邻三个面的公共点是唯一的</b>——所以它天然是一个「唯一点」；</li>
          <li><b>折叠前后相邻关系（公共点引出的线或图形）保持不变</b>。</li>
        </PointList>
        <Callout variant="tip">
          <b>真实测评：</b>优点——① 唯一性，不用纠结选哪个公共边；② 图案和线条排除快。<br />
          缺点——三个面的相对位置（顺时针还是逆时针）区分不了，需要靠箭头法/画边法补。
        </Callout>
        <p>适用信号：<b>没有「唯一」，且三个面离得很近</b> → 优先用公共点。</p>
      
        <Example>
          <ExampleHeader>📝 例题8 · 六面体（公共点 · 2025 山东事业）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下列给定的立体图形，其外表面展开图可能是。</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 292 150" role="img" aria-label="例题8立体图：正方体三面各有一条折线，三线在公共点交汇">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={160} y={52} width={76} height={76} />
                <polygon points="160,52 194,26 270,26 236,52" />
                <polygon points="236,52 270,26 270,102 236,128" />
                <line x1={160} y1={52} x2={198} y2={90} />
                <line x1={236} y1={52} x2={198} y2={90} />
                <line x1={236} y1={52} x2={252} y2={68} />
                <line x1={236} y1={52} x2={236} y2={128} />
              </g>
              <circle cx={236} cy={52} r={4} fill="#ef4444" stroke="none" />
            </svg><figcaption>图：例题 8 的立体图（红线处为三面公共点）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 452 147" role="img" aria-label="例题8四个选项：均为含三角、半圆、折线的展开图，橙色框为选定面">
      <g transform="translate(2,2)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={20} y={46} width={26} height={26} /><rect x={46} y={46} width={26} height={26} />
                <rect x={46} y={20} width={26} height={26} /><rect x={72} y={20} width={26} height={26} />
                <rect x={72} y={46} width={26} height={26} /><rect x={46} y={72} width={26} height={26} />
                <rect x={130} y={46} width={26} height={26} /><rect x={156} y={46} width={26} height={26} />
                <rect x={156} y={20} width={26} height={26} /><rect x={182} y={20} width={26} height={26} />
                <rect x={182} y={46} width={26} height={26} /><rect x={156} y={72} width={26} height={26} />
                <rect x={240} y={46} width={26} height={26} /><rect x={266} y={46} width={26} height={26} />
                <rect x={266} y={20} width={26} height={26} /><rect x={266} y={72} width={26} height={26} />
                <rect x={292} y={46} width={26} height={26} /><rect x={292} y={72} width={26} height={26} />
                <rect x={350} y={46} width={26} height={26} /><rect x={376} y={46} width={26} height={26} />
                <rect x={376} y={20} width={26} height={26} /><rect x={402} y={20} width={26} height={26} />
                <rect x={376} y={72} width={26} height={26} /><rect x={402} y={72} width={26} height={26} />
              </g>
              <g stroke="#1f2937" strokeWidth={1.6} fill="none">
                <path d="M72 46 A13 13 0 0 1 72 72" />
                <line x1={46} y1={72} x2={72} y2={46} />
                <path d="M26 46 A13 13 0 0 1 26 72" />
                <line x1={156} y1={20} x2={182} y2={46} />
                <line x1={182} y1={46} x2={156} y2={72} />
                <path d="M130 46 A13 13 0 0 1 130 72" />
                <path d="M266 20 A13 13 0 0 1 266 46" />
                <line x1={240} y1={72} x2={266} y2={46} />
                <line x1={266} y1={46} x2={292} y2={72} />
                <path d="M350 72 A13 13 0 0 1 350 46" />
                <line x1={376} y1={20} x2={402} y2={46} />
                <line x1={402} y1={46} x2={376} y2={72} />
              </g>
              <text x={59} y={120} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={169} y={120} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={279} y={120} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={389} y={120} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（三角、半圆、折线位置示意还原）</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>立体图三面很近、而且没有明显「唯一」的点或边 → 用<b>公共点</b>：三个面交汇的那个点是唯一的，折叠前后「从公共点引出的线」不变。<br />
              把立体图公共点处的三条线（一条走向左前、一条走向右前、一条竖直向下）与各选项展开图对应的三面交点比对：B、C、D 在对应公共点处引出的线数目/方向都对不上；<br />
              A 项在对应公共点处的三条线方向与立体图一致 → 正确。
              <br /><span className="correct">答案：A</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题9 · 六面体（公共点 · 2025 联考事业）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>左图为给定正方体纸盒的外表面展开图，下列选项中哪一个能由其折叠而成？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 324 182" role="img" aria-label="例题9展开图十字形：多面为交叉线，左侧面有黑色三角，下面有灰色三角">
      <g transform="translate(0,14)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={118} y={8} width={46} height={46} /><rect x={118} y={54} width={46} height={46} />
                <rect x={164} y={54} width={46} height={46} /><rect x={210} y={54} width={46} height={46} />
                <rect x={256} y={54} width={46} height={46} /><rect x={164} y={100} width={46} height={46} />
              </g>
              <polygon points="118,54 118,100 164,54" fill="#1f2937" />
              <polygon points="164,100 210,100 164,146" fill="#6b7280" />
              <g stroke="#1f2937" strokeWidth={1.8} fill="none">
                <line x1={118} y1={8} x2={164} y2={54} /><line x1={164} y1={8} x2={118} y2={54} />
                <line x1={164} y1={54} x2={210} y2={100} /><line x1={210} y1={54} x2={164} y2={100} />
                <line x1={210} y1={54} x2={256} y2={100} /><line x1={256} y1={54} x2={210} y2={100} />
                <line x1={118} y1={54} x2={164} y2={100} />
                <line x1={210} y1={100} x2={256} y2={54} />
              </g>
            </g>
      </svg><figcaption>图：例题 9 的展开图（黑色三角在左侧面、灰色三角在下面）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 457 135" role="img" aria-label="例题9四个选项：正方体正面、右面为含黑白三角与交叉线的图形">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={26} y={46} width={46} height={46} /><polygon points="26,46 47,31 93,31 72,46" /><polygon points="72,46 93,31 93,77 72,92" />
                <rect x={140} y={46} width={46} height={46} /><polygon points="140,46 161,31 207,31 186,46" /><polygon points="186,46 207,31 207,77 186,92" />
                <rect x={254} y={46} width={46} height={46} /><polygon points="254,46 275,31 321,31 300,46" /><polygon points="300,46 321,31 321,77 300,92" />
                <rect x={368} y={46} width={46} height={46} /><polygon points="368,46 389,31 435,31 414,46" /><polygon points="414,46 435,31 435,77 414,92" />
              </g>
              <polygon points="26,46 26,92 72,92" fill="#1f2937" />
              <polygon points="140,46 140,92 186,92" fill="#1f2937" />
              <polygon points="254,46 254,92 300,92" fill="#6b7280" />
              <polygon points="368,46 368,92 414,92" fill="#1f2937" />
              <g stroke="#1f2937" strokeWidth={1.8} fill="none">
                <line x1={26} y1={92} x2={72} y2={46} />
                <line x1={140} y1={46} x2={186} y2={92} />
                <line x1={300} y1={31} x2={300} y2={77} />
                <line x1={368} y1={46} x2={414} y2={92} />
                <line x1={72} y1={46} x2={93} y2={66} />
                <line x1={186} y1={46} x2={207} y2={66} />
              </g>
              <text x={49} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={163} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={277} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={391} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </svg><figcaption>选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>展开图中有黑三角（左面）与灰三角（下面）「位置很近」，且面上图案多为交叉线，没有明显唯一 → 用<b>公共点</b>。<br />
              关键点：黑三角、灰三角与某一交叉面的<b>三面公共点</b>只有一个。折叠后从这个公共点引出的线（黑三角的一条边 + 交叉线的一段）必须同时出现，且方向一致。<br />
              A、C、D 在对应公共点处引出的线条数目或方向都不符（C 甚至把灰三角与交叉线的相对位置放反）；B 项黑三角的直角边、交叉线交点与公共点的位置关系与展开图完全一致 → 正确。
              <br /><span className="correct">答案：B</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题10 · 六面体（6 个面都一样 → 找「特殊关系」· 2024 山东）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>左图是给定纸盒的外表面展开图，下面哪一项能由它折叠而成？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 286 170" role="img" aria-label="例题10展开图：阶梯形，各面均为含黑白小三角与线条的面">
      <g transform="translate(0,14)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={96} y={8} width={42} height={42} /><rect x={138} y={8} width={42} height={42} />
                <rect x={138} y={50} width={42} height={42} /><rect x={180} y={50} width={42} height={42} />
                <rect x={222} y={50} width={42} height={42} /><rect x={222} y={92} width={42} height={42} />
              </g>
              <polygon points="96,8 138,8 96,50" fill="#1f2937" />
              <polygon points="180,50 222,50 222,92" fill="#1f2937" />
              <polygon points="222,92 264,92 264,134" fill="#1f2937" />
              <g stroke="#1f2937" strokeWidth={1.8} fill="none">
                <line x1={96} y1={8} x2={138} y2={50} />
                <line x1={138} y1={50} x2={180} y2={92} />
                <line x1={180} y1={8} x2={180} y2={50} />
                <line x1={222} y1={50} x2={264} y2={92} />
                <line x1={96} y1={50} x2={138} y2={50} />
                <line x1={222} y1={50} x2={222} y2={92} />
              </g>
            </g>
      </svg><figcaption>图：例题 10 的展开图（阶梯形；6 个面图案相似 → 必须找「特殊关系」）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 457 135" role="img" aria-label="例题10四个选项：正方体各面为黑白小三角与线条">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={26} y={46} width={46} height={46} /><polygon points="26,46 47,31 93,31 72,46" /><polygon points="72,46 93,31 93,77 72,92" />
                <rect x={140} y={46} width={46} height={46} /><polygon points="140,46 161,31 207,31 186,46" /><polygon points="186,46 207,31 207,77 186,92" />
                <rect x={254} y={46} width={46} height={46} /><polygon points="254,46 275,31 321,31 300,46" /><polygon points="300,46 321,31 321,77 300,92" />
                <rect x={368} y={46} width={46} height={46} /><polygon points="368,46 389,31 435,31 414,46" /><polygon points="414,46 435,31 435,77 414,92" />
              </g>
              <polygon points="26,46 72,46 72,92" fill="#1f2937" opacity="0.85" transform="translate(0,0)" />
              <polygon points="26,92 72,92 26,46" fill="#1f2937" />
              <polygon points="140,46 186,92 186,46" fill="#1f2937" />
              <polygon points="254,92 300,92 300,46" fill="#1f2937" />
              <polygon points="368,46 414,46 414,92" fill="#1f2937" />
              <g stroke="#1f2937" strokeWidth={1.8} fill="none">
                <line x1={26} y1={46} x2={72} y2={92} />
                <line x1={140} y1={46} x2={186} y2={92} />
                <line x1={254} y1={46} x2={300} y2={92} />
                <line x1={368} y1={46} x2={414} y2={92} />
                <line x1={72} y1={46} x2={93} y2={74} />
                <line x1={186} y1={46} x2={207} y2={74} />
                <line x1={300} y1={46} x2={321} y2={74} />
                <line x1={414} y1={46} x2={435} y2={74} />
              </g>
              <text x={49} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={163} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={277} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={391} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </svg><figcaption>选项 A / B / C / D（黑白三角位置示意还原）</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>6 个面长得都差不多（都有黑三角 + 斜线）→ <b>不能看图案本身，要找「特殊关系」</b>：先定相对面，再看相邻面的<b>黑白三角朝向</b>是否与展开图一致。<br />
              A、C、D 折起后，黑三角的「尖」相对公共边的方向都反了；只有 B 项三个可见面的黑三角朝向组合与展开图相符 → 正确。
              <br /><span className="correct">答案：B</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>6. 拔高：图形唯一性、外形轮廓与「特殊关系」</BlockTitle>
        <PointList>
          <li><b>利用图形的唯一性做题（箭头法）</b>：同一个立方体的不同视角题，面与面的位置关系不变，把「唯一的面」当作参照即可代入选项。</li>
          <li><b>外部轮廓定方向</b>：只能帮我们确定「哪个方向是哪个方向」，判断相邻关系时仍要回到箭头法/公共边。</li>
          <li><b>6 个面都一样 → 找「特殊关系」</b>：找那个特殊的角、特殊的尖，或者黑白块拼成的那条唯一的边。</li>
          <li><b>黑白色块粘成的长方体</b>：核心是「<b>公共边两边的颜色保持一致</b>」（两边的格子颜色必须接得上）。</li>
        </PointList>
      
        <Example>
          <ExampleHeader>📝 例题11 · 六面体（同一立方体不同视角 · 2025 上海）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>以下是同一个立方体的不同视角，则「？」处的图形是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 438 112" role="img" aria-label="例题11：四个正方体为同一立方体不同视角，第四个体为问号">
      <g transform="translate(6,0)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={16} y={46} width={44} height={44} /><polygon points="16,46 36,31 80,31 60,46" /><polygon points="60,46 80,31 80,75 60,90" />
                <rect x={126} y={46} width={44} height={44} /><polygon points="126,46 146,31 190,31 170,46" /><polygon points="170,46 190,31 190,75 170,90" />
                <rect x={236} y={46} width={44} height={44} /><polygon points="236,46 256,31 300,31 280,46" /><polygon points="280,46 300,31 300,75 280,90" />
                <rect x={346} y={46} width={44} height={44} /><polygon points="346,46 366,31 410,31 390,46" /><polygon points="390,46 410,31 410,75 390,90" />
              </g>
              <g stroke="#1f2937" strokeWidth={2.2} fill="none">
                <line x1={24} y1={52} x2={24} y2={84} /><line x1={24} y1={52} x2={52} y2={84} />
                <line x1={52} y1={82} x2={52} y2={62} />
                <line x1={134} y1={52} x2={150} y2={80} /><line x1={150} y1={80} x2={166} y2={52} />
                <line x1={174} y1={52} x2={186} y2={84} />
                <line x1={244} y1={52} x2={272} y2={84} /><line x1={272} y1={52} x2={244} y2={84} />
                <line x1={286} y1={52} x2={286} y2={84} />
                <text x={368} y={80} fill="#1f2937" fontSize={30} textAnchor="middle">?</text>
              </g>
            </g>
      </svg><figcaption>图：例题 11 的四个视角（第 4 个为「？」）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 420 111" role="img" aria-label="例题11四个选项：小于号、E、山、V">
      <g transform="translate(0,2)">
              <g stroke="#1f2937" strokeWidth={2.2} fill="none">
                <line x1={58} y1={20} x2={34} y2={44} /><line x1={34} y1={44} x2={58} y2={68} />
                <line x1={160} y1={20} x2={160} y2={68} /><line x1={160} y1={20} x2={188} y2={20} />
                <line x1={160} y1={44} x2={186} y2={44} /><line x1={160} y1={68} x2={188} y2={68} />
                <line x1={270} y1={20} x2={270} y2={44} /><line x1={270} y1={44} x2={296} y2={44} />
                <line x1={296} y1={44} x2={296} y2={20} /><line x1={270} y1={44} x2={270} y2={68} />
                <line x1={296} y1={44} x2={296} y2={68} />
                <line x1={374} y1={20} x2={386} y2={68} /><line x1={386} y1={68} x2={398} y2={20} />
              </g>
              <text x={46} y={84} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={172} y={84} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={283} y={84} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={386} y={84} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </g>
      </svg><figcaption>选项 A（&lt;） / B（E） / C（山） / D（V）</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>同一个立方体的不同视角 → <b>图形位置关系不变</b>，用「<b>代入选项</b>」的办法试。<br />
              由前三个视角可以先锁定各面之间的相邻顺序（例如「N」与「V」相邻、「X」与「N」相邻，且同一个字的斜边始终朝着同一条边，「V」与「X」的开口方向也可互相印证）。<br />
              把 B、C、D 依次代入，都会在某个视角上出现相邻关系矛盾（B 的 E 朝向、C 的「山」缺口方向、D 的 V 开口方向都对不上）；只有 A 项（&lt;）代入后四个视角能同时自洽 → 正确。
              <br /><span className="correct">答案：A</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题12 · 六面体（图形唯一性 · 2024 广东事业）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下列左边给定的是正方体表面展开图，右边哪项能由它折叠而成？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 228 154" role="img" aria-label="例题12展开图：多格构成，每格内有小三角和圆点">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={70} y={30} width={34} height={34} /><rect x={70} y={64} width={34} height={34} />
                <rect x={104} y={64} width={34} height={34} /><rect x={138} y={64} width={34} height={34} />
                <rect x={172} y={64} width={34} height={34} /><rect x={104} y={98} width={34} height={34} />
              </g>
              <g stroke="#1f2937" strokeWidth={1.8} fill="none">
                <polygon points="76,36 96,36 86,52" />
                <polygon points="78,72 98,72 88,88" /><circle cx={94} cy={80} r={5} fill="#1f2937" />
                <polygon points="112,70 132,70 122,86" /><polygon points="146,70 166,70 156,86" />
                <polygon points="180,70 200,70 190,86" /><circle cx={194} cy={90} r={5} fill="#1f2937" />
                <polygon points="112,104 132,104 122,120" />
                <polygon points="180,104 200,104 190,120" />
              </g>
            </svg><figcaption>图：例题 12 的展开图（各面为小三角、圆点的组合）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 460 135" role="img" aria-label="例题12四个选项：正方体每面分成四格，格内为小三角或圆点">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={26} y={44} width={48} height={48} /><polygon points="26,44 48,28 96,28 74,44" /><polygon points="74,44 96,28 96,76 74,92" />
                <rect x={140} y={44} width={48} height={48} /><polygon points="140,44 162,28 210,28 188,44" /><polygon points="188,44 210,28 210,76 188,92" />
                <rect x={254} y={44} width={48} height={48} /><polygon points="254,44 276,28 324,28 302,44" /><polygon points="302,44 324,28 324,76 302,92" />
                <rect x={368} y={44} width={48} height={48} /><polygon points="368,44 390,28 438,28 416,44" /><polygon points="416,44 438,28 438,76 416,92" />
              </g>
              <g stroke="#1f2937" strokeWidth={1.6} fill="none">
                <line x1={50} y1={44} x2={50} y2={92} /><line x1={26} y1={68} x2={74} y2={68} />
                <polygon points="33,50 43,50 38,60" fill="#1f2937" />
                <polygon points="33,74 43,74 38,84" />
                <line x1={164} y1={44} x2={164} y2={92} /><line x1={140} y1={68} x2={188} y2={68} />
                <polygon points="147,50 157,50 152,60" />
                <polygon points="147,74 157,74 152,84" />
                <line x1={278} y1={44} x2={278} y2={92} /><line x1={254} y1={68} x2={302} y2={68} />
                <polygon points="261,50 271,50 266,60" fill="#1f2937" />
                <line x1={392} y1={44} x2={392} y2={92} /><line x1={368} y1={68} x2={416} y2={68} />
              </g>
              <text x={50} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={164} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={278} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={392} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </svg><figcaption>选项 A / B / C / D（面内四格的小三角/圆点示意还原）</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>提示——<b>利用图形的唯一性做题（箭头法）</b>，讲义把这里分成「外部」与「内部」两套标记：先看面与面之间的<b>外部轮廓</b>（哪个角是尖的、哪个方向朝外），再看面内小三角的<b>内部</b>朝向。<br />
              A、B、C 都会出现「小三角的尖朝向错误」或「圆点所在格的位置不对」；只有 D 项两个可见面的内部小三角朝向与外部轮廓方向同时吻合 → 正确。
              <br /><span className="correct">答案：D</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>7. 画边法 与「1-4-1」变形（2-3-1 / 3-3 / 2-2）</BlockTitle>
        <p><b>什么是画边法？</b>（专治方向问题）</p>
        <PointList>
          <li>① 结合选项，找一个唯一点或唯一边；</li>
          <li>② <b>顺时针方向描边标号</b>（描同一个面）；</li>
          <li>③ 题干与选项对应面不一致 → 排除。</li>
        </PointList>
        <Callout variant="tip">
          注意：必须是<b>同一个面、同一个点（或同一条边）、同一方向</b>。<br />
          <b>真实测评：</b>优点——能解决方向问题、细节问题（既可以看点，也可以看边）；缺点——① 速度偏慢；② 左右细节问题需要关注。
        </Callout>
        <p><b>「1-4-1」变形怎么办？</b>先把变形图「滚」回 1-4-1 再判断。四种基础模型：</p>
        <Callout variant="formula"><span className="formula">1-4-1 ｜ 2-3-1 ｜ 3-3 ｜ 2-2</span></Callout>
        <PointList>
          <li><b>2-3-1 模型</b>：上排 2 格、中排 3 格、下排 1 格，逐排错位（由 1-4-1「平移 1 格」变形而来）；</li>
          <li><b>3-3 模型</b>：两排各 3 格，错开 2 格（只共用 1 列）；</li>
          <li><b>2-2 模型</b>：2 格 + 2 格（+2 格）阶梯状，一格一格往上爬；</li>
          <li>变形图判断的核心仍是：<b>相对面（同行/同列隔一个、Z 字两端）+ 公共边（直角边、一列四面的两端）</b>。</li>
        </PointList>
      
        <Example>
          <ExampleHeader>📝 例题13 · 六面体（除哪一项外 · 2025 湖北选调）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>以下除哪一项外，均为同一正方体纸盒的外表面展开图？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 474 137" role="img" aria-label="例题13四个展开图A到D，均由黑白小块拼成">
      <g transform="translate(8,2)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={14} y={20} width={26} height={26} /><rect x={14} y={46} width={26} height={26} />
                <rect x={40} y={46} width={26} height={26} /><rect x={66} y={46} width={26} height={26} />
                <rect x={92} y={46} width={26} height={26} /><rect x={92} y={20} width={26} height={26} />
                <rect x={128} y={30} width={26} height={26} /><rect x={154} y={30} width={26} height={26} />
                <rect x={180} y={30} width={26} height={26} /><rect x={128} y={56} width={26} height={26} />
                <rect x={154} y={56} width={26} height={26} /><rect x={180} y={56} width={26} height={26} />
                <rect x={222} y={20} width={26} height={26} /><rect x={248} y={20} width={26} height={26} />
                <rect x={248} y={46} width={26} height={26} /><rect x={274} y={46} width={26} height={26} />
                <rect x={274} y={72} width={26} height={26} /><rect x={300} y={72} width={26} height={26} />
                <rect x={340} y={46} width={26} height={26} /><rect x={366} y={46} width={26} height={26} />
                <rect x={366} y={20} width={26} height={26} /><rect x={392} y={20} width={26} height={26} />
                <rect x={392} y={46} width={26} height={26} /><rect x={418} y={46} width={26} height={26} />
              </g>
              <g fill="#1f2937" stroke="none">
                <rect x={14} y={20} width={26} height={26} />
                <rect x={66} y={46} width={26} height={26} />
                <rect x={128} y={30} width={26} height={26} />
                <rect x={154} y={56} width={26} height={26} />
                <rect x={248} y={20} width={26} height={26} /><rect x={274} y={46} width={26} height={26} />
                <rect x={366} y={20} width={26} height={26} /><rect x={418} y={46} width={26} height={26} />
                <rect x={392} y={46} width={26} height={26} />
                <rect x={274} y={72} width={13} height={13} /><rect x={378} y={20} width={13} height={13} />
              </g>
              <text x={66} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={167} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={274} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={379} y={110} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </g>
      </svg><figcaption>图：例题 13 的四个展开图 A / B / C / D（黑白块位置示意还原，D 项为答案）</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>「除哪一项外」型，题干的四张图其实是同一个纸盒的不同展开图，规律就是——<b>把每张图都「滚」回 1-4-1</b>，看黑白块的相对位置是否一致。<br />
              A、B、C 三张「滚」回去后黑白块关系和公共边上「颜色一致」都成立；只有 <b>D 项</b>的黑块位置与另外三张不同（黑块与白块的相邻关系发生错位）→ 不是同一纸盒。
              <br /><span className="correct">答案：D</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题14 · 六面体（两块组合成长方体 · 2025 联考）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>左下图为两个正方体组合而成的长方体，这两个正方体的外表面展开图分别可能是：<br />A.①和②　B.③和④　C.①和④　D.②和③</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 342 134" role="img" aria-label="例题14立体图：两个正方体拼成的长方体，上面与右面有黑块和黑圆">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={150} y={56} width={56} height={56} /><rect x={206} y={56} width={56} height={56} />
                <polygon points="150,56 176,34 288,34 262,56" />
                <polygon points="262,56 288,34 288,90 262,112" />
              </g>
              <polygon points="150,56 206,34 234,34 178,56" fill="#1f2937" />
              <polygon points="188,56 214,45 214,67 188,78" fill="#1f2937" />
              <circle cx={196} cy={92} r={14} fill="#1f2937" />
              <polygon points="290,40 320,40 320,66 300,52" fill="#1f2937" opacity="0.0" />
              <line x1={262} y1={112} x2={288} y2={90} stroke="#1f2937" strokeWidth={2} />
              <path d="M262 78 L288 78 L288 90 L262 90 Z" fill="#1f2937" />
            </svg><figcaption>图：例题 14 的立体图（黑块在「上面」，黑圆在「正面」，黑块在「右面」）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 446 133" role="img" aria-label="例题14四个展开图：2-2阶梯形带黑白块">
      <g transform="translate(2,6)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={20} y={16} width={24} height={24} /><rect x={20} y={40} width={24} height={24} />
                <rect x={44} y={40} width={24} height={24} /><rect x={68} y={40} width={24} height={24} />
                <rect x={68} y={64} width={24} height={24} /><rect x={44} y={64} width={24} height={24} />
                <rect x={130} y={16} width={24} height={24} /><rect x={130} y={40} width={24} height={24} />
                <rect x={154} y={40} width={24} height={24} /><rect x={178} y={40} width={24} height={24} />
                <rect x={178} y={64} width={24} height={24} /><rect x={154} y={64} width={24} height={24} />
                <rect x={240} y={16} width={24} height={24} /><rect x={240} y={40} width={24} height={24} />
                <rect x={264} y={40} width={24} height={24} /><rect x={288} y={40} width={24} height={24} />
                <rect x={288} y={64} width={24} height={24} /><rect x={264} y={64} width={24} height={24} />
                <rect x={350} y={16} width={24} height={24} /><rect x={350} y={40} width={24} height={24} />
                <rect x={374} y={40} width={24} height={24} /><rect x={398} y={40} width={24} height={24} />
                <rect x={398} y={64} width={24} height={24} /><rect x={374} y={64} width={24} height={24} />
              </g>
              <g fill="#1f2937" stroke="none">
                <rect x={20} y={40} width={24} height={12} />
                <path d="M68 40 L92 40 L68 64 Z" />
                <circle cx={80} cy={76} r={8} />
                <path d="M130 16 L154 16 L130 40 Z" />
                <path d="M130 40 L154 64 L130 64 Z" />
                <circle cx={166} cy={76} r={8} />
                <path d="M240 16 L252 16 L240 28 Z" />
                <path d="M288 40 L288 64 L264 64 Z" />
                <circle cx={300} cy={76} r={8} />
                <path d="M350 16 L362 16 L350 28 Z" />
                <path d="M398 40 L374 64 L398 64 Z" />
                <circle cx={386} cy={76} r={8} />
              </g>
              <text x={55} y={102} fill="#1f2937" fontSize={14} textAnchor="middle">①</text>
              <text x={165} y={102} fill="#1f2937" fontSize={14} textAnchor="middle">②</text>
              <text x={275} y={102} fill="#1f2937" fontSize={14} textAnchor="middle">③</text>
              <text x={385} y={102} fill="#1f2937" fontSize={14} textAnchor="middle">④</text>
            </g>
      </svg><figcaption>图：例题 14 的四个展开图 ①②③④（2-2 阶梯形，黑白块示意还原）</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>立体图是「<b>1：上面</b>」的黑块 + 黑圆，「<b>2：右边</b>」的黑块。<b>组合题的关键：一定要有「1：上面」</b>——即展开图中必须能折出「黑块在上、黑圆在右」这个面组。<br />
              逐个把 ①②③④ 滚回 1-4-1 检验：① 能折出「上面黑块 + 右边黑圆」，② 能折出「右面黑块」，③、④ 的黑块方向或位置对不上；故两块分别是 ① 和 ②。
              <br /><span className="correct">答案：A（①和②）</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题15 · 六面体（1-4-1 变形，5 个相同纸盒 · 2025 浙江）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>已知 5 个完全相同的纸盒依次摆在一起如下图所示。则与纸盒的面①<b>相对</b>的面为：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 342 190" role="img" aria-label="例题15：五个纸盒依次摆放组成长条，最左侧面①为倒三角图形">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={60} y={60} width={46} height={46} /><rect x={106} y={60} width={46} height={46} />
                <rect x={152} y={60} width={46} height={46} /><rect x={198} y={60} width={46} height={46} />
                <rect x={244} y={60} width={46} height={46} />
                <polygon points="60,60 82,42 320,42 298,60" />
                <polygon points="290,60 312,42 312,88 290,106" />
              </g>
              <polygon points="60,60 106,60 106,106 60,106" fill="#1f2937" opacity="0.0" />
              <line x1={106} y1={60} x2={60} y2={106} stroke="#1f2937" strokeWidth={2} />
              <line x1={106} y1={60} x2={152} y2={106} stroke="#1f2937" strokeWidth={2} />
              <line x1={152} y1={60} x2={198} y2={106} stroke="#1f2937" strokeWidth={2} />
              <line x1={198} y1={60} x2={244} y2={106} stroke="#1f2937" strokeWidth={2} />
              <line x1={244} y1={60} x2={244} y2={106} stroke="#1f2937" strokeWidth={2} />
              <polygon points="70,42 92,42 81,58" fill="#1f2937" />
              <polygon points="162,42 184,42 173,58" fill="#1f2937" />
              <polygon points="254,42 276,42 265,58" fill="#1f2937" />
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={150} y={126} width={42} height={42} />
                <polygon points="152,128 190,128 171,166" fill="#1f2937" />
              </g>
              <text x={171} y={152} fill="#ffffff" fontSize={14} textAnchor="middle" stroke="none">①</text>
            </svg><figcaption>图：例题 15 的五个纸盒（最左侧的面①为「倒三角」）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 458 117" role="img" aria-label="例题15四个选项：黑色三角、小三角、横线、折线">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={30} y={24} width={46} height={46} />
                <rect x={150} y={24} width={46} height={46} />
                <rect x={270} y={24} width={46} height={46} />
                <rect x={390} y={24} width={46} height={46} />
              </g>
              <polygon points="42,30 76,30 42,64" fill="#1f2937" />
              <polygon points="160,30 182,30 160,52" fill="#1f2937" />
              <line x1={160} y1={64} x2={196} y2={30} stroke="#1f2937" strokeWidth={2} />
              <line x1={270} y1={48} x2={316} y2={48} stroke="#1f2937" strokeWidth={2} />
              <polyline points="396,30 418,46 396,62" stroke="#1f2937" strokeWidth={2} fill="none" />
              <text x={53} y={92} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={173} y={92} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={293} y={92} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={413} y={92} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </svg><figcaption>选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>思维：<b>斜线与①相邻，且出现多次</b>——也就是说，①（倒三角面）在长条上会反复出现，只要找到与它相邻的、并且重复出现的那条斜线面，就能锁定它的相邻顺序。<br />
              沿长条依次「滚动」：① 与「斜线面」相邻，「斜线面」与「另一斜线面」相邻……滚动一圈回到起点，即可发现与 ① 相对的是<b>小三角（B 项图形）</b>。
              <br /><span className="correct">答案：B</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题16 · 六面体（两个部分组合成展开图 · 2025 联考）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>左图为正方体纸盒的外表面展开图，以下 4 个部分中，哪两个可以组合成同样正方体的外表面展开图？<br />A.①和②　B.③和④　C.①和④　D.②和③</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 446 164" role="img" aria-label="例题16展开图：由黑白方块组成的展开图，旁边是被切掉的部分">
      <g transform="translate(2,8)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={20} y={14} width={24} height={24} /><rect x={20} y={38} width={24} height={24} />
                <rect x={20} y={62} width={24} height={24} /><rect x={20} y={86} width={24} height={24} />
                <rect x={44} y={38} width={24} height={24} /><rect x={68} y={38} width={24} height={24} />
                <rect x={92} y={38} width={24} height={24} /><rect x={116} y={38} width={24} height={24} />
                <rect x={44} y={62} width={24} height={24} /><rect x={68} y={62} width={24} height={24} />
                <rect x={92} y={62} width={24} height={24} /><rect x={116} y={62} width={24} height={24} />
              </g>
              <g fill="#1f2937" stroke="none">
                <rect x={20} y={14} width={24} height={12} />
                <rect x={44} y={38} width={24} height={24} />
                <rect x={92} y={38} width={24} height={24} />
                <rect x={44} y={62} width={24} height={24} />
                <rect x={116} y={62} width={12} height={24} />
              </g>
              <g stroke="#ef4444" strokeWidth={2} fill="none">
                <rect x={20} y={38} width={24} height={24} />
                <rect x={68} y={62} width={24} height={24} />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={190} y={24} width={34} height={34} /><rect x={224} y={24} width={34} height={34} />
                <rect x={224} y={58} width={34} height={34} /><rect x={258} y={58} width={34} height={34} />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={320} y={24} width={34} height={34} /><rect x={354} y={24} width={34} height={34} />
                <rect x={354} y={58} width={34} height={34} /><rect x={388} y={58} width={34} height={34} />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={190} y={104} width={30} height={30} /><rect x={220} y={104} width={30} height={30} />
                <rect x={250} y={104} width={30} height={30} />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <rect x={330} y={104} width={30} height={30} /><rect x={360} y={104} width={30} height={30} />
                <rect x={390} y={104} width={30} height={30} />
              </g>
            </g>
      </svg><figcaption>图：例题 16 的展开图（左）与四个部分 ①②③④（示意还原，黑块为拼合位置，答案 ③和④）</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>先<b>找「唯一」</b>：展开图里那块「特殊形状的黑块」（黑块只有一格半黑，其余都是整格）是唯一的，抓住它，就能判断两个部分能否拼回原图。<br />
              把 ①②③④ 分别拿去与展开图的空缺处比对：① 拼上后黑白接不上（公共边两边颜色不一致）；② 缺的格子形状与空缺处不吻合，无法补齐六面；③ 与 ④ 拼上后，黑块的位置、黑白相接的公共边颜色都完全吻合 → 只有 ③ 和 ④ 能组合成同一纸盒的展开图。
              <br /><span className="correct">答案：B（③和④）</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
      </Block>
      
      <Block>
        <BlockTitle>8. 四面体：只有 4 个面，比六面体更好「一眼看穿」</BlockTitle>
        <Callout variant="key">
          <p><b>答题思路（两步）</b></p>
          <p>第一步：有「唯一边或点」，优先用「<b>箭头法</b>」解题（备选「画边法」）；</p>
          <p>第二步：没有「唯一边或点」，优先用「<b>公共边</b>」。</p>
        </Callout>
        <PointList>
          <li><b>箭头法（口诀：找唯一，定方向）</b>：① 结合选项找唯一点/唯一边；② 以它作参照物画箭头。</li>
          <li><b>左右混淆怎么办？</b>——四面体最容易出「左右镜像」陷阱，用箭头法/画边法就能区分（画边法：① 找唯一点或唯一边；② 顺时针描边标号（描同一个面）；③ 对应面不一致 → 排除）。</li>
          <li><b>公共边</b>：① <b>展开图中构成一条直线的两条边，折合之后是同一条边</b>；② <b>平行四边形两端的两条边是同一条边</b>。</li>
        </PointList>
        <Callout variant="tip">
          最后回到全课结论：<b>箭头法（主）+ 公共边（辅）</b>，五星推荐——「单一技巧有缺陷」。「箭头法」熟悉之后 = 有了「想象力」。
        </Callout>
      
        <Example>
          <ExampleHeader>📝 例题17 · 四面体（箭头法 + 公共边 · 2024 联考事业）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>左图为给定四面体的外表面展开图，以下哪项可以由它折叠而成？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 242 134" role="img" aria-label="例题18四面体展开图：平行四边形由四个三角形组成，其中两个为黑色三角形">
      <g transform="translate(0,2)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <polygon points="100,20 220,20 220,110 100,110" />
                <rect x={100} y={20} width={120} height={90} stroke="none" />
                <line x1={100} y1={20} x2={160} y2={65} />
                <line x1={160} y1={65} x2={100} y2={110} />
                <line x1={160} y1={65} x2={220} y2={110} />
                <line x1={220} y1={20} x2={160} y2={65} />
              </g>
              <polygon points="100,20 160,20 160,65" fill="#1f2937" opacity="0" />
              <polygon points="100,110 130,65 160,110" fill="#1f2937" opacity="0" />
              <polygon points="100,20 130,65 100,110" fill="#1f2937" />
              <polygon points="160,65 190,110 220,110" fill="#1f2937" />
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <line x1={160} y1={20} x2={160} y2={65} />
              </g>
            </g>
      </svg><figcaption>图：例题 17 的四面体展开图（平行四边形两端的两条边是同一条边）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 446 133" role="img" aria-label="例题18四个选项：四面体立体图，两个可见面含黑三角与线条">
      <g transform="translate(6,0)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <polygon points="46,26 16,88 76,88" />
                <line x1={46} y1={26} x2={46} y2={88} />
                <polygon points="160,26 130,88 190,88" />
                <line x1={160} y1={26} x2={160} y2={88} />
                <polygon points="274,26 244,88 304,88" />
                <line x1={274} y1={26} x2={274} y2={88} />
                <polygon points="388,26 358,88 418,88" />
                <line x1={388} y1={26} x2={388} y2={88} />
              </g>
              <polygon points="46,26 46,88 76,88" fill="#1f2937" />
              <polygon points="130,88 160,26 160,88" fill="#1f2937" />
              <polygon points="274,26 304,88 274,88" fill="#1f2937" />
              <polygon points="358,88 388,26 388,88" fill="#1f2937" />
              <text x={46} y={108} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={160} y={108} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={274} y={108} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={388} y={108} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（例题 17：黑色三角形位置示意还原）</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>先用<b>公共边</b>把展开图折起来：展开图中<b>构成一条直线的两条边折合后是同一条边</b>，<b>平行四边形两端的两条边是同一条边</b>——凭这两条就能定出四个面的相邻顺序（两块黑三角面在折叠后成为相邻面，且黑三角共用同一条公共边）。<br />
              再用<b>箭头法</b>：以黑三角的「尖」为唯一点画箭头，比对左右。<br />
              A、C、D 中黑三角的相对朝向都出现了左右互换；只有 B 项两个可见面上黑三角的位置与朝向与折起的四面体一致 → 正确。
              <br /><span className="correct">答案：B</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题18 · 四面体（公共边 · 2024 联考事业）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>左边给定的是纸盒外表面的展开图，右边哪一项能由它折叠而成？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 352 134" role="img" aria-label="例题19四面体展开图：大三角形分成四个小三角形，上方两个小三角形为灰黑色">
      <g transform="translate(0,2)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <polygon points="230,20 130,110 330,110" />
                <line x1={230} y1={20} x2={230} y2={110} />
                <line x1={130} y1={110} x2={280} y2={65} />
                <line x1={330} y1={110} x2={180} y2={65} />
              </g>
              <polygon points="230,20 180,65 205,42" fill="#1f2937" />
              <polygon points="205,42 230,20 245,42" fill="#6b7280" />
              <line x1={180} y1={65} x2={280} y2={65} stroke="#1f2937" strokeWidth={2} />
            </g>
      </svg><figcaption>图：例题 18 的四面体展开图（大三角形四个小面，上方有黑/灰小三角）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 458 145" role="img" aria-label="例题19四个选项：四面体立体图，两个可见面含黑白小三角">
      <g transform="translate(12,2)">
              <g stroke="#1f2937" strokeWidth={2} fill="none">
                <polygon points="46,20 10,96 82,96" />
                <line x1={46} y1={20} x2={46} y2={96} />
                <polygon points="160,20 124,96 196,96" />
                <line x1={160} y1={20} x2={160} y2={96} />
                <polygon points="274,20 238,96 310,96" />
                <line x1={274} y1={20} x2={274} y2={96} />
                <polygon points="388,20 352,96 424,96" />
                <line x1={388} y1={20} x2={388} y2={96} />
              </g>
              <polygon points="46,20 46,96 82,96" fill="#1f2937" />
              <polygon points="160,20 196,96 160,96" fill="#1f2937" />
              <polygon points="274,20 274,96 238,96" fill="#1f2937" />
              <polygon points="388,20 388,96 352,96" fill="#1f2937" />
              <text x={46} y={118} fill="#1f2937" fontSize={14} textAnchor="middle">A</text>
              <text x={160} y={118} fill="#1f2937" fontSize={14} textAnchor="middle">B</text>
              <text x={274} y={118} fill="#1f2937" fontSize={14} textAnchor="middle">C</text>
              <text x={388} y={118} fill="#1f2937" fontSize={14} textAnchor="middle">D</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（例题 18：黑白三角位置示意还原）</figcaption></figure>
            <ExampleAnswer>
              <b>解析：</b>展开图是「大三角形」（中间 1 个正立小三角 + 周围 3 个倒立小三角），折起后中间那个面与周围三个面分别相邻。<br />
              用<b>公共边</b>：图中<b>构成一条直线的两条边折合后是同一条边</b>，据此把黑三角与灰三角的位置对应到立体图的两个可见面上。<br />
              A、C、D 折起后黑三角与灰三角的相对位置（谁在左、尖朝哪）都与展开图不符；B 项两个可见面上黑/灰三角的位置与朝向完全吻合 → 正确。
              <br /><span className="correct">答案：B</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
          
            <Block>
        <BlockTitle>补充5. 六面体新解法——最大信息法（同一立方体三视图）</BlockTitle>
        <p>夸夸刷（四）第 117 页：给三个"同一立方体"的不同视角，求第四个视角。页面上给的六面体方法都是"相对面 / 箭头法 / 公共边 / 公共点 / 画边法"，而这里的解法是<b>最大信息法</b>——</p>
        <p>① 先数每个数字（或每个图案）<b>出现的次数</b>，挑那个出现次数最多的面；<br />② 把它在三个视角里"看到过"的邻居全部收集起来，这些邻居的<b>对面就是没出现过的那个</b>；<br />③ 用"相对面不能同时出现"秒排选项。</p>
        <Callout variant="key">口诀：<b>谁出现最多，谁就是突破口</b>。<br />出现最多的面 → 找出它的所有邻居 → 剩下的那个就是它的对面。三个视角里各出现 2 次的面最好用。</Callout>
        <Example>
          <ExampleHeader>📝 例题1 · 三个视角判同一立方体（四 · 22广东-73%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>如图所给的 3 个立方体为同一立方体，若不考虑立方体表面数字的大小、方向，下列选项中，最有可能是该立方体的是。</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 413.5 107" role="img" aria-label="题干三个立方体视角">
                <g stroke="#1f2937" strokeWidth={1.5} fill="#fff">
                  <rect x={55} y={55} width={30} height={30} />
                  <polygon points="55,55 70,40 100,40 85,55" />
                  <polygon points="85,55 100,40 100,70 85,85" />
                  <rect x={170} y={55} width={30} height={30} />
                  <polygon points="170,55 185,40 215,40 200,55" />
                  <polygon points="200,55 215,40 215,70 200,85" />
                  <rect x={285} y={55} width={30} height={30} />
                  <polygon points="285,55 300,40 330,40 315,55" />
                  <polygon points="315,55 330,40 330,70 315,85" />
                </g>
                <g fontSize={11} textAnchor="middle" fill="#1f2937">
                  <text fill="#1f2937" x={77.5} y={51}>3</text><text fill="#1f2937" x={70} y={74}>5</text><text fill="#1f2937" x={92} y={66}>1</text>
                  <text fill="#1f2937" x={192.5} y={51}>3</text><text fill="#1f2937" x={185} y={74}>2</text><text fill="#1f2937" x={207} y={66}>4</text>
                  <text fill="#1f2937" x={307.5} y={51}>4</text><text fill="#1f2937" x={300} y={74}>6</text><text fill="#1f2937" x={322} y={66}>5</text>
                </g>
                <text x={385} y={72} fontSize={24} fontWeight="bold" textAnchor="middle" fill="#2563eb">?</text>
              </svg>
              <figcaption>图：题干——三个视角分别为 (上3/前5/右1)、(上3/前2/右4)、(上4/前6/右5)</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 376 131" role="img" aria-label="四个选项立方体">
                <g stroke="#1f2937" strokeWidth={1.4} fill="#fff">
                  <rect x={45} y={55} width={26} height={26} />
                  <polygon points="45,55 58,42 84,42 71,55" />
                  <polygon points="71,55 84,42 84,68 71,81" />
                  <rect x={135} y={55} width={26} height={26} />
                  <polygon points="135,55 148,42 174,42 161,55" />
                  <polygon points="161,55 174,42 174,68 161,81" />
                  <rect x={225} y={55} width={26} height={26} />
                  <polygon points="225,55 238,42 264,42 251,55" />
                  <polygon points="251,55 264,42 264,68 251,81" />
                  <rect x={315} y={55} width={26} height={26} />
                  <polygon points="315,55 328,42 354,42 341,55" />
                  <polygon points="341,55 354,42 354,68 341,81" />
                </g>
                <g fontSize={10.5} textAnchor="middle" fill="#1f2937">
                  <text fill="#1f2937" x={64} y={49}>5</text><text fill="#1f2937" x={58} y={72}>4</text><text fill="#1f2937" x={77} y={64}>1</text>
                  <text fill="#1f2937" x={154} y={49}>3</text><text fill="#1f2937" x={148} y={72}>1</text><text fill="#1f2937" x={167} y={64}>4</text>
                  <text fill="#1f2937" x={244} y={49}>2</text><text fill="#1f2937" x={238} y={72}>3</text><text fill="#1f2937" x={257} y={64}>1</text>
                  <text fill="#1f2937" x={334} y={49}>6</text><text fill="#1f2937" x={328} y={72}>2</text><text fill="#1f2937" x={347} y={64}>3</text>
                </g>
                <g fontSize={12.5} textAnchor="middle" fill="#2563eb">
                  <text fill="#2563eb" x={71} y={106}>A</text><text fill="#2563eb" x={161} y={106}>B</text><text fill="#2563eb" x={251} y={106}>C</text><text fill="#2563eb" x={341} y={106}>D</text>
                </g>
              </svg>
              <figcaption>选项 A / B / C / D（上/前/右 的数字各不相同）</figcaption>
            </figure>
            <ExampleAnswer><b>解析：</b>3 出现于视角①②，5 出现于视角①③，4 出现于视角②③，出现次数并列最多。由视角①（3 邻 5、1）与②（3 邻 2、4）知 3 的四个邻居是 5、1、2、4，故 <b>3 的对面是 6</b>；同理 5 的对面是 2，4 的对面是 1。A 中 4 与 1 相对、B 中 1 与 4 相对、D 中 6 与 3 相对，均不能同时出现，排除，只剩 C。<br /><span className="correct">答案：C</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
            <Block>
        <BlockTitle>补充6. 展开图速记：相对面 + 公共顶点三面数字和</BlockTitle>
        <p>夸夸刷（四）第 18 页、夸夸刷（七）第 118 页反复出现一条速记：<b>中间隔 1 个，或隔 1 列，都是相对面</b>。这条比死记"Z 字型 / 1-4-1"更快：只要两个面之间横着（或竖着）刚好"隔一个"，或中间隔了整整一列/一行，它们就是相对面。</p>
        <p>七 · 第 118 页（24 江苏）把它反过来用：给四个展开图，问"哪个展开图还原成正方体后，存在同一个公共顶点的三个面上的数字之和为 8"——先确定相对面，再把<b>不相对的三面凑成一个顶点</b>去求和。</p>
        <Callout variant="key">速记：<b>隔 1 个 / 隔 1 列 = 相对面</b>。<br />公共顶点上的三个面一定<b>两两相邻</b>（互为邻居），因此挑顶点时要先排掉两两相对的面。</Callout>
        <figure className="fig">
          <svg viewBox="0 0 457 153" role="img" aria-label="相对面速记示意">
            <g stroke="#1f2937" strokeWidth={1.4} fill="#fff">
              <rect x={40} y={40} width={30} height={30} /><rect x={70} y={40} width={30} height={30} /><rect x={100} y={40} width={30} height={30} />
            </g>
            <rect x={70} y={40} width={30} height={30} fill="#10b981" stroke="#10b981" />
            <text x={85} y={92} fontSize={12} textAnchor="middle" fill="#10b981">隔 1 个 → 相对面</text>
            <g stroke="#1f2937" strokeWidth={1.4} fill="#fff">
              <rect x={220} y={26} width={30} height={30} /><rect x={220} y={56} width={30} height={30} /><rect x={250} y={56} width={30} height={30} /><rect x={250} y={86} width={30} height={30} />
            </g>
            <rect x={220} y={26} width={30} height={30} fill="#f59e0b" stroke="#f59e0b" />
            <rect x={250} y={86} width={30} height={30} fill="#f59e0b" stroke="#f59e0b" />
            <text x={250} y={128} fontSize={12} textAnchor="middle" fill="#f59e0b">隔 1 列 → 相对面</text>
            <g stroke="#1f2937" strokeWidth={1.4} fill="#fff">
              <rect x={360} y={26} width={30} height={30} /><rect x={360} y={56} width={30} height={30} /><rect x={390} y={56} width={30} height={30} />
            </g>
            <rect x={360} y={26} width={30} height={30} fill="#2563eb" stroke="#2563eb" />
            <rect x={390} y={56} width={30} height={30} fill="#2563eb" stroke="#2563eb" />
            <text x={390} y={108} fontSize={12} textAnchor="middle" fill="#2563eb">隔 1 列 → 相对面</text>
          </svg>
          <figcaption>图：相对面速记（高亮两格互为相对面）</figcaption>
        </figure>
        <Example>
          <ExampleHeader>📝 例题1 · 公共顶点三面数字和（七 · 24江苏-63%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下列是四个正方体的外表面展开图，其中哪个展开图还原成正方体后，存在同一个公共顶点的三个面上的数字之和为 8？</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 404 147" role="img" aria-label="四个展开图选项">
                <g stroke="#1f2937" strokeWidth={1.3} fill="#fff">
                  <rect x={52} y={26} width={26} height={26} /><rect x={78} y={26} width={26} height={26} />
                  <rect x={78} y={52} width={26} height={26} /><rect x={104} y={52} width={26} height={26} /><rect x={130} y={52} width={26} height={26} />
                  <rect x={130} y={78} width={26} height={26} />
                </g>
                <g fontSize={12} textAnchor="middle" fill="#1f2937">
                  <text fill="#1f2937" x={65} y={44}>1</text><text fill="#1f2937" x={91} y={44}>2</text><text fill="#1f2937" x={91} y={70}>3</text><text fill="#1f2937" x={117} y={70}>4</text><text fill="#1f2937" x={143} y={70}>6</text><text fill="#1f2937" x={143} y={96}>5</text>
                </g>
                <g stroke="#1f2937" strokeWidth={1.3} fill="#fff">
                  <rect x={200} y={26} width={26} height={26} /><rect x={226} y={26} width={26} height={26} /><rect x={252} y={26} width={26} height={26} />
                  <rect x={174} y={52} width={26} height={26} /><rect x={200} y={52} width={26} height={26} /><rect x={226} y={52} width={26} height={26} /><rect x={252} y={52} width={26} height={26} />
                  <rect x={200} y={78} width={26} height={26} />
                </g>
                <g fontSize={12} textAnchor="middle" fill="#1f2937">
                  <text fill="#1f2937" x={213} y={44}>4</text><text fill="#1f2937" x={239} y={44}>3</text><text fill="#1f2937" x={265} y={44}>5</text><text fill="#1f2937" x={187} y={70}>2</text><text fill="#1f2937" x={213} y={70}>2</text><text fill="#1f2937" x={239} y={70}>4</text><text fill="#1f2937" x={265} y={70}>6</text><text fill="#1f2937" x={213} y={96}>1</text>
                </g>
                <g stroke="#1f2937" strokeWidth={1.3} fill="#fff">
                  <rect x={330} y={26} width={26} height={26} /><rect x={356} y={26} width={26} height={26} />
                  <rect x={330} y={52} width={26} height={26} /><rect x={356} y={52} width={26} height={26} />
                  <rect x={304} y={78} width={26} height={26} /><rect x={330} y={78} width={26} height={26} />
                </g>
                <g fontSize={12} textAnchor="middle" fill="#1f2937">
                  <text fill="#1f2937" x={343} y={44}>6</text><text fill="#1f2937" x={369} y={44}>2</text><text fill="#1f2937" x={343} y={70}>3</text><text fill="#1f2937" x={369} y={70}>6</text><text fill="#1f2937" x={317} y={96}>1</text><text fill="#1f2937" x={343} y={96}>4</text>
                </g>
                <g fontSize={12.5} textAnchor="middle" fill="#2563eb">
                  <text fill="#2563eb" x={104} y={122}>A</text><text fill="#2563eb" x={226} y={122}>B</text><text fill="#2563eb" x={343} y={122}>C</text>
                </g>
              </svg>
              <figcaption>选项 A / B / C（D 为另一组，原题共四图）</figcaption>
            </figure>
            <ExampleAnswer><b>解析：</b>先用"隔 1 个 / 隔 1 列"把相对面锁死，再在剩下三三相邻的组合里求和找 8。三个面若能共顶点，必须两两相邻；凡是出现相对面组合的直接排除。按此筛，只有 C 的展开图能找到三面数字和为 8。<br /><span className="correct">答案：C</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
    </>
  )
}
