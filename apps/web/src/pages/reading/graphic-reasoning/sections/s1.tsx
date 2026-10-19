import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleQuestion, PointList } from '@/components/content'

/**
 * 一、位置规律 + 相邻比较
 *
 * @returns 该节正文。
 */
export default function S2(): ReactElement {
  return (
    <>
      <Block>
      <BlockTitle>1. 了解“出题形式”——不同形式，不同的观察角度</BlockTitle>
      
      <p>拿到一道图推题，先别急着找规律，要先看<b>题干是怎么出的</b>。不同的出题形式，有不同的观察角度，也藏着出题者不同的偏好。</p>
      <PointList>
        <li><b>一组图</b>：一串图形从头看到尾。出题者喜好是"各图有<b>共同的特点</b>"，规律多和<b>数量</b>有关——<b>恒定、等差、周期</b>。</li>
        <li><b>两组图</b>：左边一组、右边一组，<b>左右可以分开看</b>。第一组给出规律，第二组照搬推问号；同样是"共同的特点 + 数量有关（恒定、等差、运算）"。</li>
        <li><b>九宫格</b>：<b>每排或每列可以分开看</b>。九宫格最喜欢考"<b>运算</b>"（一排三个，第三个由前两个算出来）。</li>
        <li><b>分组分类</b>：把六个图形分成两类，每类图形都有各自的共同特征或规律。出题者喜好——①<b>两种规律</b>（优先考虑，例如①③④各有某特征、②⑤⑥各有另一特征）；②<b>有规律和没规律</b>（这是新趋势，属性规律出现得多）。</li>
        <li><b>空间类</b>：立体拼合，以及四面体、多面体、三视图、截面图、平面拼合等。</li>
      </PointList>
      <p>数量中的数字规律也要先过一遍，因为图形里的"数量"本质就是这几种数列：</p>
      <PointList>
        <li><b>恒定</b>：1、1、1、1、1 —— 最常见，优先看。</li>
        <li><b>等差</b>：1、2、3、4、5（递增）；1、2、3 / 1、2、3 / 1、2、? —— 优先。</li>
        <li><b>周期</b>：1、2、1、2、1 —— 其次。</li>
        <li><b>运算</b>：1、5、6（1+5=6）；5、1、6 / 2、3、5 / 3、1、? —— 出现较少，但九宫格里"运算"很爱考，且经常是"难"的那一档。</li>
      </PointList>
      <Callout variant="key">数量规律的优先级：<b>等差 &gt; 恒定 &gt; 周期 &gt; 运算</b>。<br />但九宫格是例外——九宫格最喜欢考"<b>运算</b>"。</Callout>
      <Callout variant="tip">出题者喜好速记：<br />
      ① <b>平移、相邻比较不出"分组分类"</b>；<br />
      ② <b>样式规律以"两组图""九宫格"为主</b>；<br />
      ③ <b>九宫格喜欢"运算"</b>；<br />
      ④ 九宫格的观察方向：<b>横向为主，纵向难，交叉（斜着看）较少出现</b>。</Callout>
      <Callout variant="formula"><span className="formula">出题形式四类：一组图 / 两组图 / 九宫格 / 分组分类（另加空间类）</span></Callout>
      
      
      </Block>
      
      <Block>
      <BlockTitle>2. 了解“作图特点”——作图特点决定大方向（3+2 体系）</BlockTitle>
      
      <p>这一节的核心是刘义恒老师"图推 3+2"体系的判断口径：<b>先看图与图之间有没有"一样的图案"，这一步决定往哪个方向找规律。</b></p>
      <PointList>
        <li><b>有一样的图案（3 类）</b>
          <PointList>
            <li><b>完全一样</b> → 考<b>位置</b>：平移、旋转/翻转；位置里再细分出"<b>相邻比较</b>"。</li>
            <li><b>部分一样</b> → 考<b>样式（运算）</b>：黑白运算、加减同异。</li>
            <li><b>标记</b>。</li>
          </PointList>
        </li>
        <li><b>没有一样的图案（3 类）</b>
          <PointList>
            <li><b>属性</b>：对称性、曲直性、开闭性。</li>
            <li><b>数量</b>：面（所有/大小/相同，一般看内部）；笔画；点（曲直交点、切点、端点）；线（曲直、横竖、框、平行线、贪吃蛇）；元素；直角。</li>
            <li><b>图形间位置</b>。</li>
          </PointList>
        </li>
      </PointList>
      <Callout variant="key">口诀：<b>有相同 → 位置 / 样式 / 标记；无相同 → 属性 / 数量 / 图形间位置。</b></Callout>
      <Callout variant="tip">位置规律内部还有一层"看图特点"，务必分清：<br />
      · <b>图案都在动</b> → 平移、旋转翻转；<br />
      · <b>有图案不动</b> → <b>相邻比较</b>（这是本讲的第三个考点）。</Callout>
      
      
      </Block>
      
      <Block>
      <BlockTitle>3. 考点一：平移（基础）</BlockTitle>
      
      <p><b>命题者的作图特点：每幅图的图案完全相同。</b>一组黑点、一组小方块反复出现，只是位置在变。要特别注意一个"特殊情况"：</p>
      <Callout variant="key">图案在移动的过程中，<b>一旦发生重合，图案的数量就会减少</b>（少了不是消失了，是被盖住了）。所以"数量对不上"恰恰是平移的一个信号。</Callout>
      <p>平移看两个要素：</p>
      <PointList>
        <li><b>1. 方向</b>：① <b>直线</b>——上、下、左、右、斜对角线；② <b>绕圈</b>——顺时针 / 逆时针。</li>
        <li><b>2. 步数</b>：<b>恒定（高频）</b>、<b>递增</b>。</li>
      </PointList>
      <p><b>【出题形式】</b>除了"分组分类"以外，一组图、两组图、九宫格都可以出。</p>
      <p>出题者的"小心思"就是<b>加密</b>：把同一道题换成九宫格黑点、16 宫格、蜂窝、内外圆环……本质都是"图案在动"。破解靠<b>"解密"</b>：</p>
      <PointList>
        <li><b>拆分思维</b>：先把图拆成几个部分（内部 / 外部、这个图案 / 那个图案），分开看。</li>
        <li><b>就近假设</b>：判断某个图案上一步在哪，优先假设"离它最近的那个位置"——因为出题者不会让它一步跳很远。</li>
      </PointList>
      <Callout variant="formula"><span className="formula">平移三问：谁在动？往哪走（直线 / 绕圈）？走几步（恒定 / 递增）？</span></Callout>
      
      <Example>
        <ExampleHeader>📝 例题1 · 平移（步长恒定 · 分开看 · 2025 国考）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 451.7 102" role="img" aria-label="题干图形：一组正方形，内含小圆与缺口">
      <g transform="translate(6,12)">
      <rect x={16} y={10} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={45} cy={17.54} r={6.67} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={60.08} y={54.08} width={11.6} height={11.6} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={90} y={10} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={139.88} cy={59.88} r={6.67} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={113.2} y={11.74} width={11.6} height={11.6} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={164} y={10} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={171.54} cy={39} r={6.67} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={166.32} y={54.08} width={11.6} height={11.6} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={238} y={10} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={287.88} cy={18.12} r={6.67} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={282.66} y={33.2} width={11.6} height={11.6} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={312} y={10} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={341} cy={60.46} r={6.67} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={314.32} y={12.32} width={11.6} height={11.6} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <text x={415} y={41} fontSize={32} fill="#1f2937" textAnchor="middle" fontWeight="bold">?</text>
      </g>
      </svg>
            <figcaption>图：题干图形</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 436.4 102" role="img" aria-label="题干图形：一组正方形，内含小圆与缺口">
      <g transform="translate(0,12)">
      <rect x={45.6} y={10} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={95.48} cy={18.12} r={6.67} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={68.8} y={54.66} width={11.6} height={11.6} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={149.2} y={10} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={199.08} cy={18.12} r={6.67} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={193.86} y={33.2} width={11.6} height={11.6} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={252.8} y={10} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={260.92} cy={18.12} r={6.67} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={297.46} y={33.2} width={11.6} height={11.6} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={356.4} y={10} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={364.52} cy={18.12} r={6.67} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={379.6} y={54.66} width={11.6} height={11.6} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      </g>
      </svg>
            <figcaption>选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>每幅图都是"一个大正方形 + 一个小圆 + 一个缺口（小方块）"，两个图案都在沿正方形的边框移动。边框上一共有 8 个位置：四个角 + 四条边的中点。把两个图案<b>分开看</b>：<br />① <b>小圆</b>：每次沿边框<b>顺时针走 3 步</b>。图1在上边中点 → 图2在右下角 → 图3在左边中点 → 图4在右上角 → 图5在下边中点。所以第 6 幅，小圆应该落在<b>左上角</b>。<br />② <b>缺口（小方块）</b>：每次沿边框<b>逆时针走 3 步</b>。图1在右下角 → 图2在上边中点 → 图3在左下角 → 图4在右边中点 → 图5在左上角。所以第 6 幅，缺口应该落在<b>下边中点</b>。<br />对照四个选项：A 是"圆在右上角、缺口在下边"，B 是"圆在右上角、缺口在右边"，C 是"圆在左上角、缺口在右边"，只有 <b>D（圆在左上角、缺口在下边中点）</b>同时满足两条。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      
      </Block>
      
      <Callout variant="tip"><b>易错提醒：</b>两个图案一个顺时针、一个逆时针，千万别当成"整体一起动"。另外，数步数时不要只盯着"相邻两幅"硬数——像这道题，圆的步长是 3 步，如果只按"每次挪一格"去试，很容易被绕晕；此时用<b>"跳着看"</b>（隔一幅看）反而更快。</Callout>
      <Example>
        <ExampleHeader>📝 例题2 · 平移（16 宫格 · 内外分开看 · 2025 广东）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 449.9 122" role="img" aria-label="题干图形：一组四乘四方格，方格内分布黑色方块">
      <g transform="translate(10.3,12)">
      <rect x={11.6667} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={31.6667} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={51.6667} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={71.6667} y={10} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={11.6667} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={31.6667} y={30} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={51.6667} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={71.6667} y={30} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={11.6667} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={31.6667} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={51.6667} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={71.6667} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={11.6667} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={31.6667} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={51.6667} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={71.6667} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={101.333} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={121.333} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={141.333} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={161.333} y={10} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={101.333} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={121.333} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={141.333} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={161.333} y={30} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={101.333} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={121.333} y={50} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={141.333} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={161.333} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={101.333} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={121.333} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={141.333} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={161.333} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={191} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={211} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={231} y={10} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={251} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={191} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={211} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={231} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={251} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={191} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={211} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={231} y={50} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={251} y={50} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={191} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={211} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={231} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={251} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={280.667} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={300.667} y={10} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={320.667} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={340.667} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={280.667} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={300.667} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={320.667} y={30} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={340.667} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={280.667} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={300.667} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={320.667} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={340.667} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={280.667} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={300.667} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={320.667} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={340.667} y={70} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <text x={409.333} y={57} fontSize={30} fill="#1f2937" textAnchor="middle" fontWeight="bold">?</text>
      </g>
      </svg>
            <figcaption>图：题干图形</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 475.2 141" role="img" aria-label="题干图形：一组四乘四方格，方格内分布黑色方块">
      <g transform="translate(7.6,12)">
      <rect x={14.4} y={10} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={39.4} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={64.4} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={89.4} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={14.4} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={39.4} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={64.4} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={89.4} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={14.4} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={39.4} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={64.4} y={60} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={89.4} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={14.4} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={39.4} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={64.4} y={85} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={89.4} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={125.8} y={10} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={150.8} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={175.8} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={200.8} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={125.8} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={150.8} y={35} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={175.8} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={200.8} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={125.8} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={150.8} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={175.8} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={200.8} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={125.8} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={150.8} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={175.8} y={85} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={200.8} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={237.2} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={262.2} y={10} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={287.2} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={312.2} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={237.2} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={262.2} y={35} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={287.2} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={312.2} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={237.2} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={262.2} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={287.2} y={60} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={312.2} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={237.2} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={262.2} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={287.2} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={312.2} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={348.6} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={373.6} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={398.6} y={10} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={423.6} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={348.6} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={373.6} y={35} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={398.6} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={423.6} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={348.6} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={373.6} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={398.6} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={423.6} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={348.6} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={373.6} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={398.6} y={85} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={423.6} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      </g>
      </svg>
            <figcaption>选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>16 宫格里只有黑块在动，直接数步数看不出规律。此时按"<b>先看内部</b>"的顺序：把中间 2×2 的四格看成"<b>内部</b>"，外面一圈 12 格看成"<b>外部</b>"，<b>内外分开看</b>。<br />① <b>内部黑块</b>：每次<b>逆时针走 1 步</b>——(2,2)→(3,2)→(3,3)→(2,3)，所以第 5 幅回到 (2,2)；<br />② <b>外部黑块有两个</b>：一个沿右边外框<b>顺时针</b>每次走 1 步——(1,4)→(2,4)→(3,4)→(4,4)，下一步走到 (4,3)；另一个沿上边外框<b>逆时针</b>每次走 1 步——(2,4)→(1,4)→(1,3)→(1,2)，下一步走到 (1,1)。<br />所以第 5 幅的三个黑块应该在 <b>(1,1)、(2,2)、(4,3)</b>，对照选项选 <b>B</b>。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      
      <Callout variant="tip"><b>易错提醒：</b>"内外分开看"是 16 宫格和蜂窝类的"第一反应"。内部那 2×2 一般是绕圈走（顺/逆时针），外部那一圈也是绕圈走，但<b>内外方向可以相反</b>；判断方向时用"就近原则"，别把内部的顺时针当成外部的顺时针。</Callout>
      <Callout variant="key">小结：16 宫格的标准流程是——<b>① 先看内部 2×2；② 有规律就内外分开；③ 内部没规律再按常规平移（直线、斜线，方向可变）。</b></Callout>
      <Block>
      <BlockTitle>4. 平移（拔高）：内外分开看 · 定方向 · 走到头 · 隐藏线条</BlockTitle>
      
      <p>确定是"平移"之后，不要急着数步数。按下面的顺序走，效率最高：</p>
      <PointList>
        <li><b>第一步：先观察内部是否有规律。</b></li>
        <li><b>内部有规律</b> → 考虑<b>"内外分开看"</b>。运动方向：<b>绕圈（顺 / 逆时针）</b>。'
        '典型结构是 16 宫格——内部 4 格自己绕圈、外部 12 格自己绕圈；蜂窝类同理（把蜂窝看成"内部 + 外圈"）。</li>
        <li><b>内部无规律</b> → 考虑<b>常规平移</b>。运动方向：<b>直线</b>（上下、左右、斜对角线），'
        '<b>而且方向是可变的</b>——不必一直朝一个方向走。</li>
      </PointList>
      <Callout variant="key">"定方向"两大技巧：<br />
      ① <b>找特殊图案（大区域）</b>——那块面积最大、最显眼的黑块，通常就是突破口，盯住它看它怎么走；<br />
      ② <b>数个数</b>——如果<b>横向</b>每行的黑块数量相同，说明是<b>横向运动</b>；如果<b>纵向</b>每列的黑块数量相同，说明是<b>纵向运动</b>。</Callout>
      <Callout variant="tip"><b>"走到头"了怎么办？</b>出题者只有两种出法：<br />
      ① <b>循环走</b>——从头开始，回到起点；<br />
      ② <b>反弹走</b>——撞到头直接弹回来。</Callout>
      <Callout variant="tip"><b>隐藏图形 / 隐藏线条：</b>线条类题目要留意图里"藏"着的高频图形（三角形、正方形、菱形、六边形、箭头……）'
      '以及<b>特殊线条</b>——尤其是"<b>虚线</b>"，它往往就是出题者埋的那个"特殊图案"。</Callout>
      <Callout variant="formula"><span className="formula">定方向：特殊图案（大区域）+ 数个数；走到头：循环走 / 反弹走</span></Callout>
      
      
      
      <p>拔高题的特征是：<b>图形更密、动的东西更多</b>，这时候"套路"比"眼力"更重要。</p>
      <PointList>
        <li><b>16 宫格（4×4）</b>：先看中间 2×2 那四格有没有规律。有，就<b>内外分开</b>各自绕圈；没有，就按常规平移看。</li>
        <li><b>蜂窝类</b>：蜂窝可以看成"内部 + 外圈"两层；先看内部的几个点，再看外圈怎么转。</li>
        <li><b>大面积图案 / 特殊图案</b>：一堆黑块里，那个连成"大区域"的往往是最好追的目标。</li>
        <li><b>斜着运动</b>：五宫格、更密的格子里，黑块经常是<b>斜着走</b>的（方向可变）。</li>
        <li><b>隐藏线条</b>：图形里藏着虚线、长线等特殊线条，或者藏着高频图形（三角形、正方形、菱形、六边形）。</li>
      </PointList>
      <Callout variant="tip"><b>答题心态：</b>拔高题不要一上来就"数格子"。先<b>找那块最大的黑块</b>——它的移动方向往往最容易被看清；然后用"<b>就近假设</b>"把其余黑块对上号。</Callout>
      
      <Example>
        <ExampleHeader>📝 例题3 · 平移（拔高 · 特殊图案“大区域” · 2025 四川）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 493 122" role="img" aria-label="题干图形：一组四乘四方格，方格内分布黑色方块">
      <g transform="translate(14,12)">
      <rect x={8} y={10} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={28} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={48} y={10} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={68} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={8} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={28} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={48} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={68} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={8} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={28} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={48} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={68} y={50} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={8} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={28} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={48} y={70} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={68} y={70} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={94} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={114} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={134} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={154} y={10} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={94} y={30} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={114} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={134} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={154} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={94} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={114} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={134} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={154} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={94} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={114} y={70} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={134} y={70} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={154} y={70} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={180} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={200} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={220} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={240} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={180} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={200} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={220} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={240} y={30} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={180} y={50} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={200} y={50} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={220} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={240} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={180} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={200} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={220} y={70} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={240} y={70} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={266} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={286} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={306} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={326} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={266} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={286} y={30} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={306} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={326} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={266} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={286} y={50} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={306} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={326} y={50} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={266} y={70} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={286} y={70} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={306} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={326} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={352} y={10} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={372} y={10} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={392} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={412} y={10} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={352} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={372} y={30} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={392} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={412} y={30} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={352} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={372} y={50} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={392} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={412} y={50} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={352} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={372} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={392} y={70} width={18} height={18} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={412} y={70} width={18} height={18} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <text x={440.6} y={57} fontSize={30} fill="#1f2937" textAnchor="start" fontWeight="bold">?</text>
      </g>
      </svg>
            <figcaption>图：题干图形</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 475.2 141" role="img" aria-label="题干图形：一组四乘四方格，方格内分布黑色方块">
      <g transform="translate(7.6,12)">
      <rect x={14.4} y={10} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={39.4} y={10} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={64.4} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={89.4} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={14.4} y={35} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={39.4} y={35} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={64.4} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={89.4} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={14.4} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={39.4} y={60} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={64.4} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={89.4} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={14.4} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={39.4} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={64.4} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={89.4} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={125.8} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={150.8} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={175.8} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={200.8} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={125.8} y={35} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={150.8} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={175.8} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={200.8} y={35} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={125.8} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={150.8} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={175.8} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={200.8} y={60} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={125.8} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={150.8} y={85} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={175.8} y={85} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={200.8} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={237.2} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={262.2} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={287.2} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={312.2} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={237.2} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={262.2} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={287.2} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={312.2} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={237.2} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={262.2} y={60} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={287.2} y={60} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={312.2} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={237.2} y={85} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={262.2} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={287.2} y={85} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={312.2} y={85} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={348.6} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={373.6} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={398.6} y={10} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={423.6} y={10} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={348.6} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={373.6} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={398.6} y={35} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={423.6} y={35} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={348.6} y={60} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={373.6} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={398.6} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={423.6} y={60} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={348.6} y={85} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={373.6} y={85} width={22} height={22} fill="#1f2937" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={398.6} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={423.6} y={85} width={22} height={22} fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      </g>
      </svg>
            <figcaption>选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>4×4 网格里有 5 个黑块，一块一块去追很容易乱，此时用"<b>特殊图案（大区域）</b>"——找出连在一起、面积最大的那块黑块（成排/成块的那几格），把它当作参照物，看它每幅图整体移动的方向；其余黑块按<b>就近假设</b>（离得最近的格子才是它的上一步）依次对上号。5 个黑块整体按同一节奏推进，<b>走到头之后循环回到起点</b>。<br />对照四个选项，只有 <b>A</b> 的黑块位置符合这一移动规律（A 中那 5 个黑块标注 4、3、1、5、2，正好对应它们在图中依次推进的顺序）。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      
      
      <p>线条类的平移题，出题者会在图里"藏"东西，破解的口诀是<b>"隐藏图形 + 特殊线条"</b>：</p>
      <PointList>
        <li><b>隐藏图形高频</b>：三角形、正方形、菱形、虚线、六边形、箭头……看到一堆线段，先问"它们拼成了什么？"</li>
        <li><b>特殊线条</b>：如果整幅图都是实线，突然出现一段<b>虚线</b>，那这段虚线就是"特殊图案"，一定是突破口。</li>
      </PointList>
      <Callout variant="key">遇到"既有实线又有虚线"的题：<b>把虚线当作被标记的那一段</b>，看它在图形轮廓上一格一格地走到哪里；实线的框架通常是不动的。</Callout>
      
      <Example>
        <ExampleHeader>📝 例题4 · 平移（隐藏线条 / 特殊线条 · 2024 联考）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 452.6 95.3" role="img" aria-label="题干图形：由实线段和虚线段组成的图形">
      <g transform="translate(4.7,7)">
      <g transform="translate(10.8571,10)"><line x1={6.4} y1={7.68} x2={32} y2={7.68} stroke="#1f2937" strokeWidth={2} />
      <line x1={32} y1={7.68} x2={56.32} y2={7.68} stroke="#1f2937" strokeWidth={2} strokeDasharray="6 5" />
      <line x1={6.4} y1={7.68} x2={6.4} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={32} y1={7.68} x2={32} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={56.32} y1={7.68} x2={56.32} y2={33.28} stroke="#1f2937" strokeWidth={2} strokeDasharray="6 5" />
      <line x1={6.4} y1={56.32} x2={56.32} y2={56.32} stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(85.7143,10)"><line x1={5.76} y1={8.32} x2={5.76} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={5.76} y1={8.32} x2={33.28} y2={8.32} stroke="#1f2937" strokeWidth={2} />
      <line x1={5.76} y1={33.28} x2={57.6} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={57.6} y1={33.28} x2={57.6} y2={42.24} stroke="#1f2937" strokeWidth={2} strokeDasharray="6 5" /></g>
      <g transform="translate(160.571,10)"><line x1={5.12} y1={7.04} x2={5.12} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={5.12} y1={33.28} x2={33.28} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={33.28} y1={56.32} x2={51.2} y2={56.32} stroke="#1f2937" strokeWidth={2} strokeDasharray="6 5" />
      <line x1={57.6} y1={38.4} x2={57.6} y2={42.24} stroke="#1f2937" strokeWidth={2} strokeDasharray="6 5" />
      <line x1={57.6} y1={49.92} x2={57.6} y2={56.32} stroke="#1f2937" strokeWidth={2} strokeDasharray="6 5" /></g>
      <g transform="translate(235.429,10)"><line x1={7.68} y1={7.68} x2={33.28} y2={7.68} stroke="#1f2937" strokeWidth={2} />
      <line x1={7.68} y1={7.68} x2={7.68} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={7.68} y1={33.28} x2={33.28} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={8.96} y1={56.32} x2={56.32} y2={56.32} stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(310.286,10)"><line x1={7.68} y1={37.12} x2={7.68} y2={42.24} stroke="#1f2937" strokeWidth={2} strokeDasharray="6 5" />
      <line x1={7.68} y1={48.64} x2={7.68} y2={56.32} stroke="#1f2937" strokeWidth={2} strokeDasharray="6 5" />
      <line x1={7.68} y1={56.32} x2={29.44} y2={56.32} stroke="#1f2937" strokeWidth={2} strokeDasharray="6 5" />
      <line x1={38.4} y1={56.32} x2={55.04} y2={56.32} stroke="#1f2937" strokeWidth={2} strokeDasharray="6 5" />
      <line x1={7.68} y1={38.4} x2={29.44} y2={38.4} stroke="#1f2937" strokeWidth={2} />
      <line x1={29.44} y1={38.4} x2={29.44} y2={56.32} stroke="#1f2937" strokeWidth={2} /></g>
      <text x={417.143} y={46} fontSize={32} fill="#1f2937" textAnchor="middle" fontWeight="bold">?</text>
      </g>
      </svg>
            <figcaption>图：题干图形</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 433.5 92.6" role="img" aria-label="题干图形：由实线段和虚线段组成的图形">
      <g transform="translate(0,4.3)">
      <g transform="translate(40.8,10)"><line x1={7.68} y1={7.68} x2={7.68} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={7.68} y1={7.68} x2={33.28} y2={7.68} stroke="#1f2937" strokeWidth={2} />
      <line x1={7.68} y1={33.28} x2={33.28} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={8.96} y1={56.32} x2={56.32} y2={56.32} stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(145.6,10)"><line x1={7.68} y1={7.68} x2={33.28} y2={7.68} stroke="#1f2937" strokeWidth={2} />
      <line x1={7.68} y1={7.68} x2={7.68} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={7.68} y1={33.28} x2={33.28} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={8.96} y1={56.32} x2={56.32} y2={56.32} stroke="#1f2937" strokeWidth={2} />
      <line x1={56.32} y1={7.68} x2={56.32} y2={25.6} stroke="#1f2937" strokeWidth={2} strokeDasharray="6 5" /></g>
      <g transform="translate(250.4,10)"><line x1={6.4} y1={7.68} x2={6.4} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={6.4} y1={7.68} x2={32} y2={7.68} stroke="#1f2937" strokeWidth={2} />
      <line x1={6.4} y1={33.28} x2={32} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={8.96} y1={56.32} x2={56.32} y2={56.32} stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(355.2,10)"><line x1={6.4} y1={7.68} x2={32} y2={7.68} stroke="#1f2937" strokeWidth={2} />
      <line x1={32} y1={7.68} x2={32} y2={25.6} stroke="#1f2937" strokeWidth={2} strokeDasharray="6 5" />
      <line x1={6.4} y1={33.28} x2={32} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={6.4} y1={7.68} x2={6.4} y2={33.28} stroke="#1f2937" strokeWidth={2} />
      <line x1={8.96} y1={56.32} x2={56.32} y2={56.32} stroke="#1f2937" strokeWidth={2} /></g>
      </g>
      </svg>
            <figcaption>选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>图形由<b>实线段 + 虚线段</b>拼成。观察相邻两幅图：实线搭出来的"框架"始终不变，真正在动的是那段<b>虚线</b>——它沿着图形的轮廓<b>一格一格地移动</b>，走到头之后循环回到起点。把虚线当作"被标记的图案"，按"就近原则"对上它的上一步，就能顺出下一幅虚线应该出现的位置。<br />对照四个选项，只有 <b>A</b> 的虚线位置符合这条移动规律。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      
      </Block>
      
      <Callout variant="tip"><b>易错提醒：</b>线段题最怕"整体看"。一定要先<b>把虚线单独拎出来</b>（这是"特殊线条"），再用"对比选项"验证：四个选项往往只差虚线的位置，一眼就能排除掉两三个。</Callout>
      <Block>
      <BlockTitle>5. 考点二：旋转、翻转</BlockTitle>
      
      <p>位置规律的第二个考点。<b>命题者作图特点同样是"每幅图图案相同"</b>，但图案不是平移，而是"转"或"翻"。</p>
      <PointList>
        <li><b>1. 旋转</b>
          <PointList>
            <li><b>方向</b>：顺时针、逆时针。</li>
            <li><b>角度（步数）</b>：30°、45°、60°、90°、180° 等常见角度。</li>
          </PointList>
        </li>
        <li><b>2. 翻转</b>
          <PointList>
            <li><b>左右翻转</b>：图形沿<b>竖轴</b>对称。</li>
            <li><b>上下翻转</b>：图形沿<b>横轴</b>对称。</li>
          </PointList>
        </li>
      </PointList>
      <p>怎么区分"旋转"和"翻转"？只看一件事：<b>变的是什么方向。</b></p>
      <Callout variant="key">
      · <b>左右翻转：只变左右</b>（上下不动）；<br />
      · <b>上下翻转：只变上下</b>（左右不动）；<br />
      · <b>180° 旋转：上、下、左、右都变</b>——口诀"<b>怎么变，怎么翻，全变就是 180°</b>"。
      </Callout>
      <PointList>
        <li><b>技巧①特殊图案（大区域）</b>：先盯住最大、最特殊的那一块，看它是转还是翻。</li>
        <li><b>技巧②时针法</b>：注意"<b>三个同一</b>"——<b>同一起点、同一路径、同一终点</b>。三点连成一条闭环，'
        '看它是顺时针还是逆时针，翻转一定会改变时针方向。</li>
        <li><b>技巧③箭头法</b>：找图中唯一的、有指向性的图案来定方向。常见指向性较强的图形：'
        '<b>A、T、↑、△、▲、梯形</b>。</li>
      </PointList>
      <Callout variant="tip"><b>当四个图案都在动、看不出谁不动时：别硬推，直接"对比选项"</b>——'
      '用选项之间的差别反推规律，往往比从头推更快。</Callout>
      <Callout variant="formula"><span className="formula">只变左右 = 左右翻转；只变上下 = 上下翻转；全变 = 180° 旋转</span></Callout>
      
      <Example>
        <ExampleHeader>📝 例题5 · 旋转、翻转（内外分开看 · 2025 山东事业单位）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 447.2 91.5" role="img" aria-label="题干图形：内外同心圆环，各有一个缺口">
      <g transform="translate(0,8)">
      <g transform="translate(12.5714,10)"><g transform="translate(31,31)"><path d="M 18.9702 -7.66445 A 20.46 20.46 0 1 1 7.66445 -18.9702" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M 4.87738 12.0719 A 13.02 13.02 0 1 1 12.0719 4.87738" fill="none" stroke="#1f2937" strokeWidth={2} /></g></g>
      <g transform="translate(87.1429,10)"><g transform="translate(31,31)"><path d="M 7.66445 18.9702 A 20.46 20.46 0 1 1 18.9702 7.66445" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M -12.0719 4.87738 A 13.02 13.02 0 1 1 -4.87738 12.0719" fill="none" stroke="#1f2937" strokeWidth={2} /></g></g>
      <g transform="translate(161.714,10)"><g transform="translate(31,31)"><path d="M -18.9702 7.66445 A 20.46 20.46 0 1 1 -7.66445 18.9702" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M 4.87738 12.0719 A 13.02 13.02 0 1 1 12.0719 4.87738" fill="none" stroke="#1f2937" strokeWidth={2} /></g></g>
      <g transform="translate(236.286,10)"><g transform="translate(31,31)"><path d="M -7.66445 -18.9702 A 20.46 20.46 0 1 1 -18.9702 -7.66445" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M -12.0719 4.87738 A 13.02 13.02 0 1 1 -4.87738 12.0719" fill="none" stroke="#1f2937" strokeWidth={2} /></g></g>
      <g transform="translate(310.857,10)"><g transform="translate(31,31)"><path d="M 18.9702 -7.66445 A 20.46 20.46 0 1 1 7.66445 -18.9702" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M 4.87738 12.0719 A 13.02 13.02 0 1 1 12.0719 4.87738" fill="none" stroke="#1f2937" strokeWidth={2} /></g></g>
      <text x={416.429} y={45} fontSize={32} fill="#1f2937" textAnchor="middle" fontWeight="bold">?</text>
      </g>
      </svg>
            <figcaption>图：题干图形</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 429.0 84.9" role="img" aria-label="题干图形：内外同心圆环，各有一个缺口">
      <g transform="translate(0,1.5)">
      <g transform="translate(42.4,10)"><g transform="translate(31,31)"><path d="M 18.9702 -7.66445 A 20.46 20.46 0 1 1 7.66445 -18.9702" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M -4.87738 -12.0719 A 13.02 13.02 0 1 1 -12.0719 -4.87738" fill="none" stroke="#1f2937" strokeWidth={2} /></g></g>
      <g transform="translate(146.8,10)"><g transform="translate(31,31)"><path d="M 7.66445 18.9702 A 20.46 20.46 0 1 1 18.9702 7.66445" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M 12.0719 -4.87738 A 13.02 13.02 0 1 1 4.87738 -12.0719" fill="none" stroke="#1f2937" strokeWidth={2} /></g></g>
      <g transform="translate(251.2,10)"><g transform="translate(31,31)"><path d="M 18.9702 -7.66445 A 20.46 20.46 0 1 1 7.66445 -18.9702" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M -12.0719 4.87738 A 13.02 13.02 0 1 1 -4.87738 12.0719" fill="none" stroke="#1f2937" strokeWidth={2} /></g></g>
      <g transform="translate(355.6,10)"><g transform="translate(31,31)"><path d="M 7.66445 18.9702 A 20.46 20.46 0 1 1 18.9702 7.66445" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M -12.0719 4.87738 A 13.02 13.02 0 1 1 -4.87738 12.0719" fill="none" stroke="#1f2937" strokeWidth={2} /></g></g>
      </g>
      </svg>
            <figcaption>选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>每幅图都是"内、外两个圆环"，每个圆环上都有一个缺口，缺口的位置在变。把内外分开看：<br />① <b>外圈缺口</b>：每次<b>顺时针转 90°</b>（1 点半方向 → 4 点半 → 7 点半 → 10 点半 → 又回到 1 点半），所以下一幅应停在<b>4 点半方向</b>；<br />② <b>内圈缺口</b>：每一幅相对前一幅作<b>左右翻转</b>（关于竖直轴镜像）。<br />对照四个选项，只有 <b>D</b> 的内外缺口位置同时满足这两条规律。<br />技巧提示：外圈缺口按 90° 走，是"特殊图案（大区域）"的思路——<b>先抓住外圈看</b>，内圈再用"左右翻转"验证，比内外一起数快得多。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      
      
      <p>拔高阶段的旋转/翻转题，最常见的形态是：<b>图里被涂色的块有好几块，而且它们都在动</b>（这也是为什么位置规律里要记"图案都在动"这个特征）。</p>
      <PointList>
        <li><b>先分组</b>：两组图先按"左右分开看"，第一组找规律、第二组照搬。</li>
        <li><b>先找唯一</b>：如果有一块是"唯一的"（例如涂色只剩一块、或形状最特殊），用"箭头法"盯着它定方向。</li>
        <li><b>四个都动就对比选项</b>：不要企图把四块全部推出来，只要推出"关键的那一块"，就能把选项筛到只剩一个。</li>
        <li><b>正难则反</b>：当"旋转"推不出时，试试"翻转"；当"位置"推不出时，看看是不是"整体结构在转"。</li>
      </PointList>
      <Callout variant="tip"><b>易错点：</b>旋转和翻转经常在同一个图里"混着考"。判断的口径永远是"<b>变的是左右还是上下</b>"，'
      '而不是"看起来像不像"。拿不准就用<b>时针法</b>：任取三个特征点，看顺时针还是逆时针，'
      '翻转一定会把时针方向反过来。</Callout>
      
      <Example>
        <ExampleHeader>📝 例题6 · 旋转、翻转（四个都动 · 对比选项 · 2025 联考）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>每道题包含两套图形和可供选择的 4 个图形。这两套图形具有某种相似性，也存在某种差异。要求你从四个选项中选择最适合取代问号的一个。正确的答案应不仅使两套图形表现出最大的相似性，而且使第二套图形也表现出自己的特征。</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 451.7 102" role="img" aria-label="题干图形：正方形被对角线分成若干三角形，部分涂灰">
      <g transform="translate(6,12)">
      <g transform="translate(16,10)"><rect x={0} y={0} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="29,29 29,0 0,0" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,0 29,0" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,29 58,0" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,58 58,29" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 29,58 58,58" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,58 29,58" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,29 0,58" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,0 0,29" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <line x1={0} y1={0} x2={58} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={58} y1={0} x2={0} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={0} y1={29} x2={58} y2={29} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={29} y1={0} x2={29} y2={58} stroke="#1f2937" strokeWidth={1.6} /></g>
      <g transform="translate(90,10)"><rect x={0} y={0} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="29,29 29,0 0,0" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,0 29,0" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,29 58,0" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,58 58,29" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 29,58 58,58" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,58 29,58" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,29 0,58" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,0 0,29" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <line x1={0} y1={0} x2={58} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={58} y1={0} x2={0} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={0} y1={29} x2={58} y2={29} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={29} y1={0} x2={29} y2={58} stroke="#1f2937" strokeWidth={1.6} /></g>
      <g transform="translate(164,10)"><rect x={0} y={0} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="29,29 29,0 0,0" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,0 29,0" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,29 58,0" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,58 58,29" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 29,58 58,58" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,58 29,58" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,29 0,58" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,0 0,29" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <line x1={0} y1={0} x2={58} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={58} y1={0} x2={0} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={0} y1={29} x2={58} y2={29} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={29} y1={0} x2={29} y2={58} stroke="#1f2937" strokeWidth={1.6} /></g>
      <g transform="translate(248,10)"><rect x={0} y={0} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="29,29 29,0 0,0" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,0 29,0" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,29 58,0" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,58 58,29" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 29,58 58,58" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,58 29,58" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,29 0,58" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,0 0,29" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <line x1={0} y1={0} x2={58} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={58} y1={0} x2={0} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={0} y1={29} x2={58} y2={29} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={29} y1={0} x2={29} y2={58} stroke="#1f2937" strokeWidth={1.6} /></g>
      <g transform="translate(312,10)"><rect x={0} y={0} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="29,29 29,0 0,0" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,0 29,0" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,29 58,0" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,58 58,29" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 29,58 58,58" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,58 29,58" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,29 0,58" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,0 0,29" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <line x1={0} y1={0} x2={58} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={58} y1={0} x2={0} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={0} y1={29} x2={58} y2={29} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={29} y1={0} x2={29} y2={58} stroke="#1f2937" strokeWidth={1.6} /></g>
      <text x={415} y={43} fontSize={32} fill="#1f2937" textAnchor="middle" fontWeight="bold">?</text>
      </g>
      </svg>
            <figcaption>图：题干图形</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 436.4 102" role="img" aria-label="题干图形：正方形被对角线分成若干三角形，部分涂灰">
      <g transform="translate(0,12)">
      <g transform="translate(45.6,10)"><rect x={0} y={0} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="29,29 29,0 0,0" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,0 29,0" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,29 58,0" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,58 58,29" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 29,58 58,58" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,58 29,58" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,29 0,58" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,0 0,29" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <line x1={0} y1={0} x2={58} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={58} y1={0} x2={0} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={0} y1={29} x2={58} y2={29} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={29} y1={0} x2={29} y2={58} stroke="#1f2937" strokeWidth={1.6} /></g>
      <g transform="translate(149.2,10)"><rect x={0} y={0} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="29,29 29,0 0,0" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,0 29,0" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,29 58,0" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,58 58,29" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 29,58 58,58" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,58 29,58" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,29 0,58" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,0 0,29" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <line x1={0} y1={0} x2={58} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={58} y1={0} x2={0} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={0} y1={29} x2={58} y2={29} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={29} y1={0} x2={29} y2={58} stroke="#1f2937" strokeWidth={1.6} /></g>
      <g transform="translate(252.8,10)"><rect x={0} y={0} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="29,29 29,0 0,0" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,0 29,0" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,29 58,0" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,58 58,29" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 29,58 58,58" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,58 29,58" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,29 0,58" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,0 0,29" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <line x1={0} y1={0} x2={58} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={58} y1={0} x2={0} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={0} y1={29} x2={58} y2={29} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={29} y1={0} x2={29} y2={58} stroke="#1f2937" strokeWidth={1.6} /></g>
      <g transform="translate(356.4,10)"><rect x={0} y={0} width={58} height={58} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="29,29 29,0 0,0" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,0 29,0" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,29 58,0" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 58,58 58,29" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 29,58 58,58" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,58 29,58" fill="#6b7280" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,29 0,58" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="29,29 0,0 0,29" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <line x1={0} y1={0} x2={58} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={58} y1={0} x2={0} y2={58} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={0} y1={29} x2={58} y2={29} stroke="#1f2937" strokeWidth={1.6} />
      <line x1={29} y1={0} x2={29} y2={58} stroke="#1f2937" strokeWidth={1.6} /></g>
      </g>
      </svg>
            <figcaption>选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>正方形被两条对角线（以及中线）分成若干个小三角形，其中一部分被涂成灰色。四个三角形都在动，硬推容易出错，这时用"<b>对比选项</b>"：<br />① 先看第一组图：灰块整体绕中心<b>每次旋转 1 步</b>（即 45°），三幅图连起来就能确定转动方向；<br />② 把这条规律照搬到第二组，推出问号处灰块应该在哪些三角形上；<br />③ 四个选项的差别集中在"哪几个三角形被涂灰"，只要关键的两块对上了，答案就唯一。<br />按上述规律推下来，<b>B</b> 的涂色位置正确。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      
      </Block>
      
      <Block>
      <BlockTitle>6. 考点三：相邻比较</BlockTitle>
      
      <p>相邻比较是位置规律里"另一种作图特点"，也是近几年的高频考法。先把两种作图特点摆在一起对比：</p>
      <PointList>
        <li>位置规律（平移、旋转翻转）的作图特点：<b>图案都在动</b>。</li>
        <li><b>相邻比较</b>的作图特点：<b>① 有黑块（图案）不动；② 平移没规律。</b></li>
      </PointList>
      <p>所以，当你发现"图与图长得很像"，可数步数又怎么都对不上时，就该换思路了——<b>比较相邻两幅图，先找出"不动的图案"。</b></p>
      <Callout variant="key"><b>实战思维（完整版）：</b><br />
      平移 → （内部有规律）内外分开看 /（内部无规律）常规平移（上下左右、斜着运动，方向可变）→ 技巧：特殊图案、数个数；<br />
      如果<b>有黑块不动</b>或者<b>平移没规律</b> → 走<b>相邻比较</b>。</Callout>
      <Callout variant="tip"><b>"有图案不动（很像）"最常见的四种：</b><b>黑块</b>-相邻比较、<b>矩形</b>-相邻比较、'
      '<b>小球</b>-相邻比较、<b>线条</b>-相邻比较。<br />
      做题顺序建议：<b>先看不动的</b> → 再看"不动的图案之间的间隔" → 最后看"动的图案往哪走"。<br />
      特别提醒：相邻比较题里"<b>可以没有规律</b>"——只要能把不动的找出来，剩下的部分哪怕看起来"没规律"也不影响做题。</Callout>
      <Callout variant="formula"><span className="formula">相邻比较：先找"不动的" → 再看"动的"（相邻两图对比，而不是从头推）</span></Callout>
      
      <Example>
        <ExampleHeader>📝 例题7 · 相邻比较（黑块 · 有黑块不动 · 2025 国考）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 446.3 107" role="img" aria-label="题干图形：蜂窝状排列的方块，黑色方块在变化">
      <g transform="translate(2.6,12)">
      <g transform="translate(19.4286,10)"><g><rect x={13.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={9} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={0} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={45} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} /></g></g>
      <g transform="translate(92.8571,10)"><g><rect x={13.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={9} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={0} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={45} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} /></g></g>
      <g transform="translate(166.286,10)"><g><rect x={13.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={9} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={0} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={45} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} /></g></g>
      <g transform="translate(239.714,10)"><g><rect x={13.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={9} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={0} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={45} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} /></g></g>
      <g transform="translate(313.143,10)"><g><rect x={13.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={9} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={0} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={45} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} /></g></g>
      <text x={413.571} y={43.5} fontSize={30} fill="#1f2937" textAnchor="middle" fontWeight="bold">?</text>
      </g>
      </svg>
            <figcaption>图：题干图形</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 433.2 107" role="img" aria-label="题干图形：蜂窝状排列的方块，黑色方块在变化">
      <g transform="translate(0,12)">
      <g transform="translate(48.8,10)"><g><rect x={13.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={9} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={0} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={45} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} /></g></g>
      <g transform="translate(151.6,10)"><g><rect x={13.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={0} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={9} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={0} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={45} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} /></g></g>
      <g transform="translate(254.4,10)"><g><rect x={13.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={9} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={0} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={45} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} /></g></g>
      <g transform="translate(357.2,10)"><g><rect x={13.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={0} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={9} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={9} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={18} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={18} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={0} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={27} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={45} y={27} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={4.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={36} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={40.5} y={36} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={9} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={18} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={27} y={45} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={36} y={45} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={13.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={22.5} y={54} width={9} height={9} fill="#ffffff" stroke="#1f2937" strokeWidth={0.9} />
      <rect x={31.5} y={54} width={9} height={9} fill="#1f2937" stroke="#1f2937" strokeWidth={0.9} /></g></g>
      </g>
      </svg>
            <figcaption>选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>蜂窝状排列的方块阵里，黑块在变化，但去数步数总是对不上，这就是典型的"<b>相邻比较</b>"：① <b>先看不动的</b>——大部分黑块在相邻两幅图里是<b>原地不动</b>的；<br />② 再比较相邻两幅图，会发现每次<b>只有"一排"不一样</b>：把图案拆成横着的几排来看，黑块在<b>一排一排地推进</b>（第 1→2 幅变第 2 排，第 2→3 幅变第 3 排，依次往下）；<br />③ 注意老师强调的点：<b>"只有一排不一样"就够了，不必要求每一排都有规律</b>——相邻比较的题"可以没有规律"。<br />据此推出第 6 幅：在上一幅的基础上<b>再变化一排</b>，对照选项，只有 <b>C</b> 符合。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      
      </Block>
      
      <Example>
        <ExampleHeader>📝 例题8 · 相邻比较（矩形 · 有图案不动 · 2025 广东事业单位）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 457.8 108" role="img" aria-label="题干图形：不同高度的竖条">
      <g transform="translate(0,12)">
      <g transform="translate(23.0476,0)"><rect x={0} y={10} width={21.3333} height={64} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={21.3333} y={31.3333} width={21.3333} height={42.6667} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={42.6667} y={52.6667} width={21.3333} height={21.3333} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(110.095,0)"><rect x={0} y={31.3333} width={21.3333} height={42.6667} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <line x1={0} y1={52.6667} x2={21.3333} y2={52.6667} stroke="#1f2937" strokeWidth={2} />
      <rect x={21.3333} y={52.6667} width={21.3333} height={21.3333} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(175.81,0)"><rect x={0} y={52.6667} width={21.3333} height={21.3333} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={21.3333} y={31.3333} width={21.3333} height={42.6667} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <line x1={21.3333} y1={52.6667} x2={42.6667} y2={52.6667} stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(241.524,0)"><rect x={0} y={52.6667} width={21.3333} height={21.3333} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={21.3333} y={31.3333} width={21.3333} height={42.6667} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={42.6667} y={31.3333} width={21.3333} height={42.6667} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(328.571,0)"><rect x={0} y={31.3333} width={21.3333} height={42.6667} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <line x1={0} y1={52.6667} x2={21.3333} y2={52.6667} stroke="#1f2937" strokeWidth={2} />
      <rect x={21.3333} y={31.3333} width={21.3333} height={42.6667} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      <text x={427.619} y={54} fontSize={30} fill="#1f2937" textAnchor="middle" fontWeight="bold">?</text>
      </g>
      </svg>
            <figcaption>图：题干图形</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 428.4 96.0" role="img" aria-label="题干图形：不同高度的竖条">
      <g transform="translate(53.6,0)"><rect x={0} y={31.3333} width={21.3333} height={42.6667} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <line x1={0} y1={52.6667} x2={21.3333} y2={52.6667} stroke="#1f2937" strokeWidth={2} />
      <rect x={21.3333} y={31.3333} width={21.3333} height={42.6667} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(149.867,0)"><rect x={0} y={31.3333} width={21.3333} height={42.6667} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <line x1={0} y1={52.6667} x2={21.3333} y2={52.6667} stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(224.8,0)"><rect x={0} y={31.3333} width={21.3333} height={42.6667} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={21.3333} y={31.3333} width={21.3333} height={42.6667} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={42.6667} y={52.6667} width={21.3333} height={21.3333} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(342.4,0)"><rect x={0} y={52.6667} width={21.3333} height={21.3333} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={21.3333} y={31.3333} width={21.3333} height={42.6667} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <rect x={42.6667} y={31.3333} width={21.3333} height={42.6667} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      </svg>
            <figcaption>选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>图形由几根竖条拼成，竖条的高低位置在变。按"相邻比较"的顺序走：<br />① <b>先看不动的</b>——比较相邻两幅图，发现有两根竖条（那两根高条）始终没有变；<br />② 再看不动的图案之间的<b>间隔</b>，以及那个动的小方块<b>每次移动的方向</b>；<br />③ 规律很清楚：<b>最左边那个小方块，一格一格地从最左边运动到最右边</b>，走到头之后循环回到最左边。<br />第二组最后停在"方块在中部"，下一幅它应该走到<b>最右端</b>。对照选项，<b>A</b> 正确。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      
      <Example>
        <ExampleHeader>📝 例题9 · 相邻比较（小球 · 先看不动的 · 2025 联考）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 456.6 106" role="img" aria-label="题干图形：田字格内分布若干小球">
      <g transform="translate(9.4,12)">
      <g transform="translate(12.5714,10)"><rect x={0} y={0} width={62} height={62} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <line x1={31} y1={0} x2={31} y2={62} stroke="#1f2937" strokeWidth={2} />
      <line x1={0} y1={31} x2={62} y2={31} stroke="#1f2937" strokeWidth={2} />
      <circle cx={8.06} cy={54.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={23.56} cy={23.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={39.06} cy={39.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={54.56} cy={23.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(87.1429,10)"><rect x={0} y={0} width={62} height={62} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <line x1={31} y1={0} x2={31} y2={62} stroke="#1f2937" strokeWidth={2} />
      <line x1={0} y1={31} x2={62} y2={31} stroke="#1f2937" strokeWidth={2} />
      <circle cx={8.06} cy={54.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={23.56} cy={39.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={39.06} cy={23.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={39.06} cy={39.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(161.714,10)"><rect x={0} y={0} width={62} height={62} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <line x1={31} y1={0} x2={31} y2={62} stroke="#1f2937" strokeWidth={2} />
      <line x1={0} y1={31} x2={62} y2={31} stroke="#1f2937" strokeWidth={2} />
      <circle cx={8.06} cy={54.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={23.56} cy={39.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={39.06} cy={8.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={54.56} cy={39.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(236.286,10)"><rect x={0} y={0} width={62} height={62} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <line x1={31} y1={0} x2={31} y2={62} stroke="#1f2937" strokeWidth={2} />
      <line x1={0} y1={31} x2={62} y2={31} stroke="#1f2937" strokeWidth={2} />
      <circle cx={8.06} cy={39.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={23.56} cy={39.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={39.06} cy={8.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={54.56} cy={54.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(310.857,10)"><rect x={0} y={0} width={62} height={62} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <line x1={31} y1={0} x2={31} y2={62} stroke="#1f2937" strokeWidth={2} />
      <line x1={0} y1={31} x2={62} y2={31} stroke="#1f2937" strokeWidth={2} />
      <circle cx={8.06} cy={23.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={23.56} cy={8.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={39.06} cy={39.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={54.56} cy={54.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      <text x={416.429} y={45} fontSize={32} fill="#1f2937" textAnchor="middle" fontWeight="bold">?</text>
      </g>
      </svg>
            <figcaption>图：题干图形</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 439.6 106" role="img" aria-label="题干图形：田字格内分布若干小球">
      <g transform="translate(0,12)">
      <g transform="translate(42.4,10)"><rect x={0} y={0} width={62} height={62} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <line x1={31} y1={0} x2={31} y2={62} stroke="#1f2937" strokeWidth={2} />
      <line x1={0} y1={31} x2={62} y2={31} stroke="#1f2937" strokeWidth={2} />
      <circle cx={8.06} cy={23.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={23.56} cy={39.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={39.06} cy={39.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={54.56} cy={54.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(146.8,10)"><rect x={0} y={0} width={62} height={62} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <line x1={31} y1={0} x2={31} y2={62} stroke="#1f2937" strokeWidth={2} />
      <line x1={0} y1={31} x2={62} y2={31} stroke="#1f2937" strokeWidth={2} />
      <circle cx={8.06} cy={8.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={23.56} cy={39.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={39.06} cy={23.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={54.56} cy={54.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(251.2,10)"><rect x={0} y={0} width={62} height={62} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <line x1={31} y1={0} x2={31} y2={62} stroke="#1f2937" strokeWidth={2} />
      <line x1={0} y1={31} x2={62} y2={31} stroke="#1f2937" strokeWidth={2} />
      <circle cx={23.56} cy={39.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={23.56} cy={39.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={39.06} cy={8.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={54.56} cy={54.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      <g transform="translate(355.6,10)"><rect x={0} y={0} width={62} height={62} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <line x1={31} y1={0} x2={31} y2={62} stroke="#1f2937" strokeWidth={2} />
      <line x1={0} y1={31} x2={62} y2={31} stroke="#1f2937" strokeWidth={2} />
      <circle cx={8.06} cy={8.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={23.56} cy={23.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={39.06} cy={39.06} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <circle cx={54.56} cy={54.56} r={7.13} fill="#ffffff" stroke="#1f2937" strokeWidth={2} /></g>
      </g>
      </svg>
            <figcaption>选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>每幅图都是"田字格 + 四个小球"。这题的关键就是老师反复强调的那句——<b>先看不动的</b>：<br />① 相邻两幅图对比，有<b>两颗小球在原位置不动</b>，可以先用它们把图"对齐"；<br />② 再看剩下的小球：它<b>每次沿顺时针方向移动 1 步</b>；<br />③ 用第 5 幅图往后推一步，就能确定问号处四颗小球的位置。<br />对照四个选项，只有 <b>A</b> 符合"两颗不动球位置正确 + 动球顺时针 1 步"。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      
      <Example>
        <ExampleHeader>📝 例题10 · 相邻比较（线条 · 有图案不动 · 2024 联考）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 482.9 82.0" role="img" aria-label="题干图形：四个斜置方块连成一排">
      <g transform="translate(11.1,6.8)">
      <g transform="translate(10.8571,10)"><polygon points="8.32,23.68 16.64,32 8.32,40.32 0,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2.4} />
      <polygon points="8.32,27.84 12.48,32 8.32,36.16 4.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="24.32,23.68 32.64,32 24.32,40.32 16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="24.32,27.84 28.48,32 24.32,36.16 20.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="40.32,23.68 48.64,32 40.32,40.32 32,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="40.32,27.84 44.48,32 40.32,36.16 36.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="56.32,23.68 64.64,32 56.32,40.32 48,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="56.32,27.84 60.48,32 56.32,36.16 52.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} /></g>
      <g transform="translate(85.7143,10)"><polygon points="8.32,23.68 16.64,32 8.32,40.32 0,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="8.32,27.84 12.48,32 8.32,36.16 4.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="24.32,23.68 32.64,32 24.32,40.32 16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2.4} />
      <polygon points="24.32,27.84 28.48,32 24.32,36.16 20.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="40.32,23.68 48.64,32 40.32,40.32 32,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="40.32,27.84 44.48,32 40.32,36.16 36.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="56.32,23.68 64.64,32 56.32,40.32 48,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="56.32,27.84 60.48,32 56.32,36.16 52.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} /></g>
      <g transform="translate(160.571,10)"><polygon points="8.32,23.68 16.64,32 8.32,40.32 0,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="8.32,27.84 12.48,32 8.32,36.16 4.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="24.32,23.68 32.64,32 24.32,40.32 16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="24.32,27.84 28.48,32 24.32,36.16 20.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="40.32,23.68 48.64,32 40.32,40.32 32,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2.4} />
      <polygon points="40.32,27.84 44.48,32 40.32,36.16 36.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="56.32,23.68 64.64,32 56.32,40.32 48,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="56.32,27.84 60.48,32 56.32,36.16 52.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} /></g>
      <g transform="translate(235.429,10)"><polygon points="8.32,23.68 16.64,32 8.32,40.32 0,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="8.32,27.84 12.48,32 8.32,36.16 4.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="24.32,23.68 32.64,32 24.32,40.32 16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="24.32,27.84 28.48,32 24.32,36.16 20.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="40.32,23.68 48.64,32 40.32,40.32 32,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="40.32,27.84 44.48,32 40.32,36.16 36.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="56.32,23.68 64.64,32 56.32,40.32 48,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2.4} />
      <polygon points="56.32,27.84 60.48,32 56.32,36.16 52.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} /></g>
      <text x={342.286} y={46} fontSize={32} fill="#1f2937" textAnchor="middle" fontWeight="bold">?</text>
      <g transform="translate(385.143,10)"><polygon points="8.32,23.68 16.64,32 8.32,40.32 0,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="8.32,27.84 12.48,32 8.32,36.16 4.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="24.32,23.68 32.64,32 24.32,40.32 16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2.4} />
      <polygon points="24.32,27.84 28.48,32 24.32,36.16 20.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="40.32,23.68 48.64,32 40.32,40.32 32,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="40.32,27.84 44.48,32 40.32,36.16 36.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="56.32,23.68 64.64,32 56.32,40.32 48,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="56.32,27.84 60.48,32 56.32,36.16 52.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} /></g>
      </g>
      </svg>
            <figcaption>图：题干图形</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 441.8 72.3" role="img" aria-label="题干图形：四个斜置方块连成一排">
      <g transform="translate(40.8,10)"><polygon points="8.32,23.68 16.64,32 8.32,40.32 0,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="8.32,27.84 12.48,32 8.32,36.16 4.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="24.32,23.68 32.64,32 24.32,40.32 16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="24.32,27.84 28.48,32 24.32,36.16 20.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="40.32,23.68 48.64,32 40.32,40.32 32,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="40.32,27.84 44.48,32 40.32,36.16 36.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="56.32,23.68 64.64,32 56.32,40.32 48,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2.4} />
      <polygon points="56.32,27.84 60.48,32 56.32,36.16 52.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} /></g>
      <g transform="translate(145.6,10)"><polygon points="8.32,23.68 16.64,32 8.32,40.32 0,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2.4} />
      <polygon points="8.32,27.84 12.48,32 8.32,36.16 4.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="24.32,23.68 32.64,32 24.32,40.32 16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="24.32,27.84 28.48,32 24.32,36.16 20.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="40.32,23.68 48.64,32 40.32,40.32 32,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="40.32,27.84 44.48,32 40.32,36.16 36.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="56.32,23.68 64.64,32 56.32,40.32 48,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="56.32,27.84 60.48,32 56.32,36.16 52.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} /></g>
      <g transform="translate(250.4,10)"><polygon points="8.32,23.68 16.64,32 8.32,40.32 0,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="8.32,27.84 12.48,32 8.32,36.16 4.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="24.32,23.68 32.64,32 24.32,40.32 16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="24.32,27.84 28.48,32 24.32,36.16 20.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="40.32,23.68 48.64,32 40.32,40.32 32,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2.4} />
      <polygon points="40.32,27.84 44.48,32 40.32,36.16 36.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="56.32,23.68 64.64,32 56.32,40.32 48,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="56.32,27.84 60.48,32 56.32,36.16 52.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} /></g>
      <g transform="translate(355.2,10)"><polygon points="8.32,23.68 16.64,32 8.32,40.32 0,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="8.32,27.84 12.48,32 8.32,36.16 4.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="24.32,23.68 32.64,32 24.32,40.32 16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2.4} />
      <polygon points="24.32,27.84 28.48,32 24.32,36.16 20.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="40.32,23.68 48.64,32 40.32,40.32 32,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="40.32,27.84 44.48,32 40.32,36.16 36.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} />
      <polygon points="56.32,23.68 64.64,32 56.32,40.32 48,32" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
      <polygon points="56.32,27.84 60.48,32 56.32,36.16 52.16,32" fill="#ffffff" stroke="#1f2937" strokeWidth={1.4} /></g>
      </svg>
            <figcaption>选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>四个斜置的方块连成一排，整体在"走"。相邻两幅图对比：<br />① <b>先看不动的</b>——有三个方块的位置完全没变；<br />② 只有一个方块在动：它<b>每次向右移动 1 步</b>；<br />③ 走到最右边之后<b>循环回到最左边</b>（"走到头"的循环走法）。<br />题干的"?"在第 5 幅位置，而第 6 幅已经给出，用第 4 幅往后推 1 步、并用第 6 幅验证，规律吻合。对照选项，<b>C</b> 正确。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      
      <Block>
      <BlockTitle>7. 理论速记（本节总表）</BlockTitle>
      
      <p>把这一讲的理论浓缩成一张表，考前只看这一页即可。</p>
      <Callout variant="key">
      <b>【位置规律】</b><br />
      ① 命题者作图特点：<b>每幅图图案完全一样</b>。<br />
      ② 特殊情况：图案移动过程，在<b>重合</b>情况下，图案数量会减少。<br />
      ③ 考点：1. 平移　2. 旋转、翻转
      </Callout>
      <Callout variant="key">
      <b>【平移】</b><br />
      ① 确定"平移"后，第一步先观察<b>内部是否有规律</b>。<br />
      ② 内部有规律，考虑<b>内外分开看</b>；运动方向：绕圈（顺/逆时针）。<br />
      ③ 内部无规律，考虑<b>常规平移</b>；运动方向：直线（上下、左右、斜对角线），且<b>方向可变</b>。<br />
      　（一）"定方向"技巧：1. 大面积图案　2. 数个数<br />
      　（二）"走到头"后：1. 循环走　2. 反弹走<br />
      ④ 运动步数：<b>恒定、递增</b>为主。
      </Callout>
      <Callout variant="key">
      <b>【旋转、翻转】</b><br />
      ① 旋转：1. 方向：顺时针、逆时针；2. 角度：30°、45°、60°、90°、180° 等常见角度。<br />
      ② 翻转：1. 左右翻转：图形沿<b>竖轴</b>对称；2. 上下翻转：图形沿<b>横轴</b>对称。<br />
      ③ 技巧：1. 特殊图案（大区域）　2. 时针法、箭头法
      </Callout>
      <Callout variant="key">
      <b>【相邻比较】</b><br />
      命题者作图特点：1. <b>有黑块不动</b>　2. <b>平移没规律</b>
      </Callout>
      <Callout variant="formula"><span className="formula">位置规律两步走：先看"图案是否完全一样"，再看"都在动"还是"有不动"</span></Callout>
      <Callout variant="tip"><b>整讲最容易失分的地方：</b><br />
      ① 忘了"重合会减少数量"，一发现数量对不上就以为不是平移；<br />
      ② 一直在"数步数"却忘了先问"内部有没有规律"（该内外分开看时没分开）；<br />
      ③ 旋转、翻转分不清，不知道该看"左右变"还是"上下变"；<br />
      ④ 遇到"有图案不动"的题，还在硬找平移规律，而没想到用<b>相邻比较</b>。</Callout>
      
      
      </Block>
      
          
            <Block>
        <BlockTitle>补充1. 奇偶比较（"跳着看"）：5 图题型的奇数位 / 偶数位分组</BlockTitle>
        <p>夸夸刷把它叫"出题者<span style={{ color: '#ef4444' }}>新趋势——跳着看</span>"（（二）P64）。当题干给出 <b>5 幅图</b>、整体从左到右死看找不到规律（或某两幅明显"打架"）时，就把 <b>第 1、3、5 幅（奇数位）</b> 和 <b>第 2、4、6 幅（偶数位）</b> 拆成两组，各自成规律。第 6 幅只与第 2、4 幅比，<b>不与第 5 幅比</b>。</p>
        <Callout variant="key">口诀：<b>五幅图、看不动 → 隔位看（奇偶位分组）</b>。奇数位对奇数位、偶数位对偶数位，规律往往一个是"翻转"、一个是"平移"，一组"变"、一组"不变"。</Callout>
        <Example>
          <ExampleHeader>📝 例题1 · 跳着看（25国考）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 446 128" role="img" aria-label="五个正方形内含小方块与小圆的题干图形">
      <g transform="translate(0,2)">
              <g stroke="#1f2937" fill="none" strokeWidth={1.2}>
                <rect x={36} y={20} width={68} height={68} /><rect x={48} y={32} width={44} height={44} />
                <rect x={116} y={20} width={68} height={68} /><rect x={128} y={32} width={44} height={44} />
                <rect x={196} y={20} width={68} height={68} /><rect x={208} y={32} width={44} height={44} />
                <rect x={276} y={20} width={68} height={68} /><rect x={288} y={32} width={44} height={44} />
                <rect x={356} y={20} width={68} height={68} /><rect x={368} y={32} width={44} height={44} />
              </g>
              <g stroke="#1f2937" fill="none" strokeWidth={1.2}>
                <circle cx={61} cy={37} r={5} /><rect x={81} y={65} width={11} height={11} />
                <rect x={128} y={32} width={11} height={11} /><circle cx={161} cy={70} r={5} />
                <circle cx={212} cy={48} r={5} /><rect x={208} y={65} width={11} height={11} />
                <circle cx={327} cy={37} r={5} /><rect x={321} y={49} width={11} height={11} />
                <rect x={368} y={32} width={11} height={11} /><circle cx={386} cy={71} r={5} />
              </g>
              <text x={410} y={64} fontSize={30} fill="#6b7280" textAnchor="middle">?</text>
              <text x={70} y={102} fontSize={11} fill="#6b7280" textAnchor="middle">①</text>
              <text x={150} y={102} fontSize={11} fill="#6b7280" textAnchor="middle">②</text>
              <text x={230} y={102} fontSize={11} fill="#6b7280" textAnchor="middle">③</text>
              <text x={310} y={102} fontSize={11} fill="#6b7280" textAnchor="middle">④</text>
              <text x={390} y={102} fontSize={11} fill="#6b7280" textAnchor="middle">⑤</text>
            </g>
      </svg><figcaption>图：题干 5 幅（正方形内一个"小方块"+"小圆"，位置各不相同）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 406 130" role="img" aria-label="四个选项：小方块与小圆位置不同">
      <g transform="translate(0,2)">
              <g stroke="#1f2937" fill="none" strokeWidth={1.2}>
                <rect x={76} y={20} width={68} height={68} /><rect x={88} y={32} width={44} height={44} />
                <rect x={156} y={20} width={68} height={68} /><rect x={168} y={32} width={44} height={44} />
                <rect x={236} y={20} width={68} height={68} /><rect x={248} y={32} width={44} height={44} />
                <rect x={316} y={20} width={68} height={68} /><rect x={328} y={32} width={44} height={44} />
              </g>
              <g stroke="#1f2937" fill="none" strokeWidth={1.2}>
                <circle cx={127} cy={37} r={5} /><rect x={105} y={65} width={11} height={11} />
                <circle cx={207} cy={37} r={5} /><rect x={201} y={49} width={11} height={11} />
                <circle cx={253} cy={37} r={5} /><rect x={281} y={49} width={11} height={11} />
                <circle cx={333} cy={37} r={5} /><rect x={345} y={65} width={11} height={11} />
              </g>
              <g fontSize={12} fill="#1f2937" textAnchor="middle">
                <text x={110} y={103} fill="#1f2937">A</text><text x={190} y={103} fill="#1f2937">B</text><text x={270} y={103} fill="#1f2937">C</text><text x={350} y={103} fill="#1f2937">D</text>
              </g>
            </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>5 幅图横向看不出统一规律 → 隔位看。奇数位①③⑤ 自成一组（小方块沿四角移动、小圆贴边，位置循环）；偶数位②④⑥ 自成一组，第 6 幅须与②④保持一致：小圆在"左上"、小方块在"下边中部"。选项中只有 D 满足。<br /><span className="correct">答案：D</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
            <Block>
        <BlockTitle>补充2. 位置规律"新模型"：蜗牛 / 贪食蛇 + 黑球个数递增（黑球→线条加密）</BlockTitle>
        <p>夸夸刷（一）P14、（三）P63 专门拿出一页讲<b>出题者"位置规律新模型"</b>：在一个 16/25 宫格（宫格、蜂窝都行）里放<b>黑球</b>，黑球<b>个数逐幅 +1</b>，并且新长出来的黑球<b>接着前一帧的球往下"爬"</b>。因为爬行轨迹像蜗牛壳、像贪吃蛇，所以叫"蜗牛""贪食蛇"。</p>
        <p>它的"加密"方式（（三）P63）：<b>黑球→线条</b>。把一串黑球换成一串折线，个数递增就变成"线段/拐点个数递增"。所以看到"宫格里一串拐来拐去的线"或"一串越来越长的黑球"，先数<b>长度/个数</b>，再看<b>往哪个方向长</b>。</p>
        <Callout variant="key">口诀：<b>球/线在长个儿 → 数个数 + 看方向（蜗牛=螺旋拐、贪食蛇=沿边走）</b>；升级考法：黑球换成线条。相邻比较出来"头动、尾也动"时，就数：<b>头走几格、尾走几格</b>。</Callout>
        <Example>
          <ExampleHeader>📝 例题2 · 宫格黑块沿外框"头走 2 尾走 1"（25联考-94%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 446 128" role="img" aria-label="五个三乘三宫格，黑块沿外框顺时针增多">
      <g transform="translate(0,2)">
              <g stroke="#1f2937" fill="#ffffff" strokeWidth={1.2}>
                <rect x={36} y={20} width={68} height={68} /><rect x={116} y={20} width={68} height={68} /><rect x={196} y={20} width={68} height={68} /><rect x={276} y={20} width={68} height={68} /><rect x={356} y={20} width={68} height={68} />
              </g>
              <g stroke="#1f2937" fill="none" strokeWidth={1}>
                <rect x={38} y={22} width={20} height={20} /><rect x={58} y={22} width={20} height={20} /><rect x={78} y={22} width={20} height={20} />
                <rect x={38} y={42} width={20} height={20} /><rect x={58} y={42} width={20} height={20} /><rect x={78} y={42} width={20} height={20} />
                <rect x={38} y={62} width={20} height={20} /><rect x={58} y={62} width={20} height={20} /><rect x={78} y={62} width={20} height={20} />
                <rect x={118} y={22} width={20} height={20} /><rect x={138} y={22} width={20} height={20} /><rect x={158} y={22} width={20} height={20} />
                <rect x={118} y={42} width={20} height={20} /><rect x={138} y={42} width={20} height={20} /><rect x={158} y={42} width={20} height={20} />
                <rect x={118} y={62} width={20} height={20} /><rect x={138} y={62} width={20} height={20} /><rect x={158} y={62} width={20} height={20} />
                <rect x={198} y={22} width={20} height={20} /><rect x={218} y={22} width={20} height={20} /><rect x={238} y={22} width={20} height={20} />
                <rect x={198} y={42} width={20} height={20} /><rect x={218} y={42} width={20} height={20} /><rect x={238} y={42} width={20} height={20} />
                <rect x={198} y={62} width={20} height={20} /><rect x={218} y={62} width={20} height={20} /><rect x={238} y={62} width={20} height={20} />
                <rect x={278} y={22} width={20} height={20} /><rect x={298} y={22} width={20} height={20} /><rect x={318} y={22} width={20} height={20} />
                <rect x={278} y={42} width={20} height={20} /><rect x={298} y={42} width={20} height={20} /><rect x={318} y={42} width={20} height={20} />
                <rect x={278} y={62} width={20} height={20} /><rect x={298} y={62} width={20} height={20} /><rect x={318} y={62} width={20} height={20} />
                <rect x={358} y={22} width={20} height={20} /><rect x={378} y={22} width={20} height={20} /><rect x={398} y={22} width={20} height={20} />
                <rect x={358} y={42} width={20} height={20} /><rect x={378} y={42} width={20} height={20} /><rect x={398} y={42} width={20} height={20} />
                <rect x={358} y={62} width={20} height={20} /><rect x={378} y={62} width={20} height={20} /><rect x={398} y={62} width={20} height={20} />
              </g>
              <g fill="#1f2937">
                <rect x={38} y={22} width={20} height={20} />
                <rect x={138} y={22} width={20} height={20} /><rect x={158} y={22} width={20} height={20} />
                <rect x={238} y={22} width={20} height={20} /><rect x={238} y={42} width={20} height={20} /><rect x={238} y={62} width={20} height={20} />
                <rect x={298} y={42} width={20} height={20} /><rect x={318} y={42} width={20} height={20} /><rect x={318} y={62} width={20} height={20} /><rect x={298} y={62} width={20} height={20} />
                <rect x={358} y={22} width={20} height={20} /><rect x={378} y={22} width={20} height={20} /><rect x={398} y={22} width={20} height={20} /><rect x={358} y={42} width={20} height={20} /><rect x={358} y={62} width={20} height={20} />
              </g>
              <text x={410} y={60} fontSize={30} fill="#6b7280" textAnchor="middle">?</text>
              <g fontSize={11} fill="#6b7280" textAnchor="middle">
                <text x={70} y={102} fill="#6b7280">①1块</text><text x={150} y={102} fill="#6b7280">②2块</text><text x={230} y={102} fill="#6b7280">③3块</text><text x={310} y={102} fill="#6b7280">④4块</text><text x={390} y={102} fill="#6b7280">⑤5块</text>
              </g>
            </g>
      </svg><figcaption>图：题干——黑块沿外框顺时针"头走 2 格、尾走 1 格"，每帧多 1 块</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 406 130" role="img" aria-label="四个选项的三乘三黑白宫格">
      <g transform="translate(0,2)">
              <g stroke="#1f2937" fill="#ffffff" strokeWidth={1.2}>
                <rect x={76} y={20} width={68} height={68} /><rect x={156} y={20} width={68} height={68} /><rect x={236} y={20} width={68} height={68} /><rect x={316} y={20} width={68} height={68} />
              </g>
              <g stroke="#1f2937" fill="none" strokeWidth={1}>
                <rect x={78} y={22} width={20} height={20} /><rect x={98} y={22} width={20} height={20} /><rect x={118} y={22} width={20} height={20} />
                <rect x={78} y={42} width={20} height={20} /><rect x={98} y={42} width={20} height={20} /><rect x={118} y={42} width={20} height={20} />
                <rect x={78} y={62} width={20} height={20} /><rect x={98} y={62} width={20} height={20} /><rect x={118} y={62} width={20} height={20} />
                <rect x={158} y={22} width={20} height={20} /><rect x={178} y={22} width={20} height={20} /><rect x={198} y={22} width={20} height={20} />
                <rect x={158} y={42} width={20} height={20} /><rect x={178} y={42} width={20} height={20} /><rect x={198} y={42} width={20} height={20} />
                <rect x={158} y={62} width={20} height={20} /><rect x={178} y={62} width={20} height={20} /><rect x={198} y={62} width={20} height={20} />
                <rect x={238} y={22} width={20} height={20} /><rect x={258} y={22} width={20} height={20} /><rect x={278} y={22} width={20} height={20} />
                <rect x={238} y={42} width={20} height={20} /><rect x={258} y={42} width={20} height={20} /><rect x={278} y={42} width={20} height={20} />
                <rect x={238} y={62} width={20} height={20} /><rect x={258} y={62} width={20} height={20} /><rect x={278} y={62} width={20} height={20} />
                <rect x={318} y={22} width={20} height={20} /><rect x={338} y={22} width={20} height={20} /><rect x={358} y={22} width={20} height={20} />
                <rect x={318} y={42} width={20} height={20} /><rect x={338} y={42} width={20} height={20} /><rect x={358} y={42} width={20} height={20} />
                <rect x={318} y={62} width={20} height={20} /><rect x={338} y={62} width={20} height={20} /><rect x={358} y={62} width={20} height={20} />
              </g>
              <g fill="#1f2937">
                <rect x={78} y={22} width={20} height={20} /><rect x={98} y={22} width={20} height={20} /><rect x={118} y={22} width={20} height={20} />
                <rect x={118} y={42} width={20} height={20} /><rect x={118} y={62} width={20} height={20} /><rect x={98} y={62} width={20} height={20} />
                <rect x={158} y={22} width={20} height={20} /><rect x={178} y={22} width={20} height={20} /><rect x={198} y={22} width={20} height={20} /><rect x={198} y={42} width={20} height={20} /><rect x={198} y={62} width={20} height={20} />
                <rect x={238} y={22} width={20} height={20} /><rect x={258} y={22} width={20} height={20} /><rect x={278} y={22} width={20} height={20} />
                <rect x={238} y={42} width={20} height={20} /><rect x={258} y={42} width={20} height={20} /><rect x={238} y={62} width={20} height={20} /><rect x={258} y={62} width={20} height={20} /><rect x={278} y={62} width={20} height={20} />
                <rect x={318} y={22} width={20} height={20} /><rect x={338} y={22} width={20} height={20} /><rect x={358} y={22} width={20} height={20} /><rect x={338} y={42} width={20} height={20} /><rect x={358} y={42} width={20} height={20} />
              </g>
              <g fontSize={12} fill="#1f2937" textAnchor="middle">
                <text x={110} y={103} fill="#1f2937">A</text><text x={190} y={103} fill="#1f2937">B</text><text x={270} y={103} fill="#1f2937">C</text><text x={350} y={103} fill="#1f2937">D</text>
              </g>
            </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>黑块个数 1、2、3、4、5 递增，且每帧<b>头往前 2 格、尾往前 1 格</b>（沿外框顺时针）。故第 6 幅应是 6 块，占"下中、左下、左中、左上、上中、右上"，只留"正中央、右中、右下"为白。与 A 一致。<br /><span className="correct">答案：A</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
            <Block>
        <BlockTitle>补充5. 平移的两种走法：循环走 / 反弹走</BlockTitle>
        <p>夸夸刷（三）P40（21黑龙江-64%）单列了平移的"<b>走法</b>"：黑块（或黑球）沿一条线/一圈往前走，走到头怎么办？</p>
        <p><b>循环走</b>：走到最后一个位置后，<b>从头（第 1 个位置）接着来</b>，像环一样绕回来。<br /><b>反弹走</b>：走到最后一个位置后，<b>掉头往回走</b>，像弹球。</p>
        <Callout variant="key">口诀：<b>到头了 → 看"接第 1 个"还是"往回弹"</b>。循环走＝首尾相接（步数对格子数取余）；反弹走＝走到头后方向取反。</Callout>
        <Example>
          <ExampleHeader>📝 例题5 · 循环走 / 反弹走（21黑龙江-64%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性。（题干为九宫格，每格是一个 4×4 宫格、内有若干黑块，黑块逐格前进；)</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 370 129.5" role="img" aria-label="循环走与反弹走两种走法示意">
      <g transform="translate(0,4.5)">
              <defs>
                <marker id="ar-g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#10b981" /></marker>
                <marker id="ar-b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb" /></marker>
              </defs>
              <text x={24} y={50} fontSize={13} fill="#6b7280">循环走</text>
              <g stroke="#1f2937" strokeWidth={1.2} fill="#ffffff">
                <circle cx={120} cy={45} r={8} /><circle cx={164} cy={45} r={8} /><circle cx={208} cy={45} r={8} /><circle cx={252} cy={45} r={8} /><circle cx={296} cy={45} r={8} /><circle cx={340} cy={45} r={8} />
              </g>
              <circle cx={120} cy={45} r={8} fill="#f59e0b" stroke="#1f2937" /><circle cx={164} cy={45} r={8} fill="#f59e0b" stroke="#1f2937" /><circle cx={208} cy={45} r={8} fill="#f59e0b" stroke="#1f2937" /><circle cx={340} cy={45} r={8} fill="#ef4444" stroke="#1f2937" />
              <path d="M340 28 C 340 14, 120 14, 120 28" fill="none" stroke="#10b981" strokeWidth={1.6} strokeDasharray="4 3" markerEnd="url(#ar-g)" />
              <text x={24} y={100} fontSize={13} fill="#6b7280">反弹走</text>
              <g stroke="#1f2937" strokeWidth={1.2} fill="#ffffff">
                <circle cx={120} cy={95} r={8} /><circle cx={164} cy={95} r={8} /><circle cx={208} cy={95} r={8} /><circle cx={252} cy={95} r={8} /><circle cx={296} cy={95} r={8} /><circle cx={340} cy={95} r={8} />
              </g>
              <circle cx={120} cy={95} r={8} fill="#f59e0b" stroke="#1f2937" /><circle cx={164} cy={95} r={8} fill="#f59e0b" stroke="#1f2937" /><circle cx={208} cy={95} r={8} fill="#f59e0b" stroke="#1f2937" /><circle cx={252} cy={95} r={8} fill="#2563eb" stroke="#1f2937" />
              <path d="M252 80 C 252 64, 208 64, 208 80" fill="none" stroke="#2563eb" strokeWidth={1.6} strokeDasharray="4 3" markerEnd="url(#ar-b)" />
            </g>
      </svg><figcaption>图：循环走 / 反弹走 板书示意图（夸夸刷（三）P40）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>该题九宫格内黑块按行（列）逐格前进，走到边界后<b>折返</b>（反弹走）继续，据此前推第 3 行第 3 格。<br /><span className="correct">答案：D</span><br /><span style={{ color: '#6b7280' }}>（本题九宫格内每格黑块较密，未配精确描图，仅给出走法示意图。）</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
            <Block>
        <BlockTitle>补充6. 非常规平移：16 宫格"拆分 2 部分"（升级为拆 4 部分）</BlockTitle>
        <p>夸夸刷在位置规律的思维导图里，把<b>非常规平移</b>单列一条：<b>"16 宫格拆分 2 部分"</b>（（一）P15/P138、（三）P76）。当整张 16 宫格一起看看不出规律时，就把它<b>分成两块（内圈 + 外圈，或上 + 下、左 + 右）</b>，两块各自平移。</p>
        <p>（三）P75-76 的"出题者怎么出"把这招又<b>升级成拆 4 部分</b>，并给了配套口诀：<b>解密①找特殊 ②就近原则</b>——先找那块"长得最特别/最大区域"的黑块当锚点，再让其余块按"离谁近就跟谁走"归组。</p>
        <Callout variant="key">口诀：<b>整体不动 → 拆 2 部分（内/外、上/下、左/右）；还不动 → 拆 4 部分</b>。归类靠"就近原则"，定点靠"找特殊（大区域）"。</Callout>
        <Example>
          <ExampleHeader>📝 例题6 · 16 宫格拆分（22重庆事业-72%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定规律性。（题干为 5 幅 16 宫格黑块图；）</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 357 184" role="img" aria-label="十六宫格内外圈拆分示意">
              <g stroke="#1f2937" strokeWidth={1.2}>
                <rect x={40} y={30} width={30} height={30} fill="#dbeafe" /><rect x={74} y={30} width={30} height={30} fill="#dbeafe" /><rect x={108} y={30} width={30} height={30} fill="#fde68a" /><rect x={142} y={30} width={30} height={30} fill="#fde68a" />
                <rect x={40} y={64} width={30} height={30} fill="#dbeafe" /><rect x={74} y={64} width={30} height={30} fill="#dbeafe" /><rect x={108} y={64} width={30} height={30} fill="#fde68a" /><rect x={142} y={64} width={30} height={30} fill="#fde68a" />
                <rect x={40} y={98} width={30} height={30} fill="#fde68a" /><rect x={74} y={98} width={30} height={30} fill="#fde68a" /><rect x={108} y={98} width={30} height={30} fill="#fde68a" /><rect x={142} y={98} width={30} height={30} fill="#fde68a" />
                <rect x={40} y={132} width={30} height={30} fill="#fde68a" /><rect x={74} y={132} width={30} height={30} fill="#fde68a" /><rect x={108} y={132} width={30} height={30} fill="#fde68a" /><rect x={142} y={132} width={30} height={30} fill="#fde68a" />
              </g>
              <g stroke="#6b7280" strokeWidth={1} strokeDasharray="3 3" fill="none">
                <rect x={73} y={63} width={32} height={32} />
              </g>
              <g fontSize={12.5} fill="#1f2937">
                <text x={196} y={50} fill="#1f2937">内圈 4 格：单独成规律</text>
                <text x={196} y={78} fill="#1f2937">外圈 12 格：单独成规律</text>
                <text x={196} y={108} fill="#7c3aed">升级：拆成 4 部分</text>
                <text x={196} y={134} fill="#7c3aed">解密①找特殊 ②就近原则</text>
              </g>
            </svg><figcaption>图：16 宫格"拆分 2 部分"示意（蓝＝内圈，橙＝外圈）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>整张 16 宫格一起看没有统一规律 → 按"内圈 4 格 / 外圈 12 格"拆成两部分，两部分各自满足平移规律；代入选出答案。<br /><span className="correct">答案：B</span><br /><span style={{ color: '#6b7280' }}>（该题题干为多幅 16 宫格黑块图，密而小，未逐格描图；此处给出拆分法示意。）</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
            <Block>
        <BlockTitle>补充7. 16 宫格"两个黑球"的三重身份：位置 / 相邻比较 / 图形关系</BlockTitle>
        <p>同一个"16 宫格里两个黑球"的画面，可以考出三种完全不同的规律，夸夸刷（二）P72-73 用一页三行做了<b>混淆辨析</b>：</p>
        <p>· <b>位置</b>：两球"绑在一起"整体移动（相邻/相距固定），逐幅追它走到哪；<br />· <b>相邻比较</b>：单看每一幅都不像，须<b>前后两幅叠起来比</b>，看谁动、谁不动；<br />· <b>图形关系</b>：不管走到哪，<b>两球之间的距离/相对方位不变</b>（这就是"关系"而非"位置"）。</p>
        <Callout variant="key">口诀：<b>两球一格 → 先数"个数一样"（排除数量）；再问"一起动还是各自动"</b>。一起动＝位置；只有叠前后两幅才看得懂＝相邻比较；怎么看距离都不变＝图形关系。</Callout>
        <Example>
          <ExampleHeader>📝 例题7 · 16 宫格两黑球（25深圳-78%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从四个选项中选择一个替代问号，使之呈现一定规律性，最合适的是。（题干为 5 幅 4×4 宫格，每幅 2 个黑点；）</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 416 284" role="img" aria-label="三行十六宫格示意位置相邻比较图形关系">
      <g transform="translate(0,2)">
              <g stroke="#1f2937" fill="#ffffff" strokeWidth={1.1}>
                <rect x={110} y={20} width={64} height={64} /><rect x={190} y={20} width={64} height={64} /><rect x={270} y={20} width={64} height={64} />
                <rect x={110} y={108} width={64} height={64} /><rect x={190} y={108} width={64} height={64} /><rect x={270} y={108} width={64} height={64} />
                <rect x={110} y={196} width={64} height={64} /><rect x={190} y={196} width={64} height={64} /><rect x={270} y={196} width={64} height={64} />
              </g>
              <g stroke="#6b7280" fill="none" strokeWidth={0.9}>
                <line x1={126} y1={20} x2={126} y2={84} /><line x1={142} y1={20} x2={142} y2={84} /><line x1={158} y1={20} x2={158} y2={84} />
                <line x1={110} y1={36} x2={174} y2={36} /><line x1={110} y1={52} x2={174} y2={52} /><line x1={110} y1={68} x2={174} y2={68} />
                <line x1={206} y1={20} x2={206} y2={84} /><line x1={222} y1={20} x2={222} y2={84} /><line x1={238} y1={20} x2={238} y2={84} />
                <line x1={190} y1={36} x2={254} y2={36} /><line x1={190} y1={52} x2={254} y2={52} /><line x1={190} y1={68} x2={254} y2={68} />
                <line x1={286} y1={20} x2={286} y2={84} /><line x1={302} y1={20} x2={302} y2={84} /><line x1={318} y1={20} x2={318} y2={84} />
                <line x1={270} y1={36} x2={334} y2={36} /><line x1={270} y1={52} x2={334} y2={52} /><line x1={270} y1={68} x2={334} y2={68} />
                <line x1={126} y1={108} x2={126} y2={172} /><line x1={142} y1={108} x2={142} y2={172} /><line x1={158} y1={108} x2={158} y2={172} />
                <line x1={110} y1={124} x2={174} y2={124} /><line x1={110} y1={140} x2={174} y2={140} /><line x1={110} y1={156} x2={174} y2={156} />
                <line x1={206} y1={108} x2={206} y2={172} /><line x1={222} y1={108} x2={222} y2={172} /><line x1={238} y1={108} x2={238} y2={172} />
                <line x1={190} y1={124} x2={254} y2={124} /><line x1={190} y1={140} x2={254} y2={140} /><line x1={190} y1={156} x2={254} y2={156} />
                <line x1={286} y1={108} x2={286} y2={172} /><line x1={302} y1={108} x2={302} y2={172} /><line x1={318} y1={108} x2={318} y2={172} />
                <line x1={270} y1={124} x2={334} y2={124} /><line x1={270} y1={140} x2={334} y2={140} /><line x1={270} y1={156} x2={334} y2={156} />
                <line x1={126} y1={196} x2={126} y2={260} /><line x1={142} y1={196} x2={142} y2={260} /><line x1={158} y1={196} x2={158} y2={260} />
                <line x1={110} y1={212} x2={174} y2={212} /><line x1={110} y1={228} x2={174} y2={228} /><line x1={110} y1={244} x2={174} y2={244} />
                <line x1={206} y1={196} x2={206} y2={260} /><line x1={222} y1={196} x2={222} y2={260} /><line x1={238} y1={196} x2={238} y2={260} />
                <line x1={190} y1={212} x2={254} y2={212} /><line x1={190} y1={228} x2={254} y2={228} /><line x1={190} y1={244} x2={254} y2={244} />
                <line x1={286} y1={196} x2={286} y2={260} /><line x1={302} y1={196} x2={302} y2={260} /><line x1={318} y1={196} x2={318} y2={260} />
                <line x1={270} y1={212} x2={334} y2={212} /><line x1={270} y1={228} x2={334} y2={228} /><line x1={270} y1={244} x2={334} y2={244} />
              </g>
              <g fill="#1f2937">
                <circle cx={134} cy={44} r={4} /><circle cx={134} cy={60} r={4} />
                <circle cx={214} cy={44} r={4} /><circle cx={214} cy={60} r={4} />
                <circle cx={294} cy={44} r={4} /><circle cx={294} cy={60} r={4} />
                <circle cx={150} cy={140} r={4} /><circle cx={134} cy={156} r={4} />
                <circle cx={214} cy={148} r={4} /><circle cx={198} cy={164} r={4} />
                <circle cx={310} cy={132} r={4} /><circle cx={294} cy={148} r={4} />
                <circle cx={126} cy={204} r={4} /><circle cx={158} cy={204} r={4} />
                <circle cx={206} cy={220} r={4} /><circle cx={238} cy={220} r={4} />
                <circle cx={286} cy={236} r={4} /><circle cx={318} cy={236} r={4} />
              </g>
              <g fontSize={12.5} fill="#6b7280">
                <text x={344} y={56} fill="#6b7280">位置</text>
                <text x={344} y={144} fill="#6b7280">相邻比较</text>
                <text x={344} y={232} fill="#6b7280">图形关系</text>
              </g>
            </g>
      </svg><figcaption>图：16 宫格两黑球的三种考法（板书示意，夸夸刷（二）P73）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>5 幅都是 4×4 宫格内 2 个黑点：单看每幅找不到走向，把相邻两幅叠起来比可见黑点"换位"，属"相邻比较"；按变化幅度外推即得第 6 幅。<br /><span className="correct">答案：A</span><br /><span style={{ color: '#6b7280' }}>（题干黑点极小，未逐点描图；此处给出三种考法的辨析示意图。）</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
            <Block>
        <BlockTitle>补充11. 旋转 vs 翻转：时针法"三个同一" + 箭头法"方向一致"</BlockTitle>
        <p>遇到"图形能不能由题干转过来"（旋转/翻转分两类、纸片拼合、展开图）时，夸夸刷（二）P60-62、（一）P135-136、（三）P122-123 统一给了一件工具：</p>
        <p>· <b>箭头法</b>：找<b>指向性强的图案，或唯一的一条边/一个点</b>当参照物画箭头；<b>方向可以任意取，但题干和选项的作图必须一致</b>。<br />· <b>时针法"三个同一"</b>：<b>同一起点、同一路径、同一终点</b>——顺着这条路数过去，题干与选项的时针方向相同＝只经过<b>旋转</b>；方向相反＝经过了<b>翻转（镜像）</b>。</p>
        <Callout variant="key">口诀：<b>旋转不改时针方向，翻转必改时针方向</b>。判断口诀："三点定一个起点、一条路径、一个终点，三个同一；方向反了＝翻过面。"</Callout>
        <Example>
          <ExampleHeader>📝 例题11 · 旋转 / 翻转分两类（24联考-54%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 341.4 177" role="img" aria-label="同一图形旋转与翻转的时针方向对比">
              <defs>
                <marker id="ar2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#10b981" /></marker>
              </defs>
              <g stroke="#1f2937" fill="#ffffff" strokeWidth={1.2}>
                <rect x={60} y={30} width={60} height={60} />
                <rect x={250} y={30} width={60} height={60} />
              </g>
              <g stroke="#1f2937" fill="none" strokeWidth={1.2}>
                <polyline points="72,80 108,42 108,80" />
              </g>
              <g stroke="#1f2937" fill="none" strokeWidth={1.2}>
                <polyline points="262,80 298,42 298,80" />
              </g>
              <circle cx={60} cy={30} r={4} fill="#ef4444" />
              <circle cx={120} cy={90} r={4.5} fill="none" stroke="#2563eb" strokeWidth={1.6} />
              <path d="M70 40 C 86 34, 104 52, 112 74" fill="none" stroke="#10b981" strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#ar2)" />
              <circle cx={310} cy={30} r={4} fill="#ef4444" />
              <circle cx={250} cy={90} r={4.5} fill="none" stroke="#2563eb" strokeWidth={1.6} />
              <path d="M300 40 C 284 34, 266 52, 258 74" fill="none" stroke="#10b981" strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#ar2)" />
              <g fontSize={12} fill="#6b7280" textAnchor="middle">
                <text x={90} y={108} fill="#6b7280">图①</text><text x={280} y={108} fill="#6b7280">图②</text>
              </g>
              <g fontSize={12.5} fill="#1f2937" textAnchor="middle">
                <text x={230} y={132} fill="#1f2937">红点起点、蓝圈终点、虚线路径</text>
                <text x={230} y={152} fill="#10b981">①②时针方向相反 → 经过了翻转</text>
              </g>
            </svg><figcaption>图：时针法"三个同一"示意（起点 / 路径 / 终点）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>题干 5 幅都是"一个图案 + 一个小圆标记"，逐幅看不出位置平移；改用箭头法/时针法：以指向性强的线条作起点、路径、终点，<b>时针方向不变＝旋转，方向相反＝翻转</b>。据此 5 幅分成"旋转 / 翻转"两组，问号处应与所在组一致。<br /><span className="correct">答案：C</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
            <Block>
        <BlockTitle>补充1. 位置规律"新模型"——个数递增</BlockTitle>
        <p>常规位置规律是"整幅图平移/旋转"，刘义恒在夸夸刷（四）第 38 页、夸夸刷（六）第 31 页单独拎出一个"新模型"：<b>图形长得几乎一样，但每幅图的元素个数在依次递增</b>（1、2、3、4、5……）。黑块、小球、线条、小图案都可以是递增对象，常与"黑块连成片 / 连成 L 形"同时出现。</p>
        <p>识别信号：① 五幅图外形一致、只是"越长越多"；② 前两幅差别很小（差 1 个元素）；③ 选项之间也是"个数差 1"。这时候先数个数，不要急着找平移方向。</p>
        <Callout variant="key">口诀：<b>图长得像、数量在涨——先数个数，再找位置</b>。<br />个数递增常伪装成"平移"，判据是：平移的图元素个数<b>不变</b>，递增的图元素个数<b>每图 +1</b>。</Callout>
      
        <Example>
          <ExampleHeader>📝 例题1 · 3×3 黑块个数递增（四 · 21广东 位置规律新模型）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性。</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 371.1 128" role="img" aria-label="题干五个三乘三黑块网格依次递增">
                <g stroke="#1f2937" strokeWidth={1.4} fill="#fff">
                  <rect x={22} y={28} width={60} height={60} /><rect x={88} y={28} width={60} height={60} /><rect x={154} y={28} width={60} height={60} /><rect x={220} y={28} width={60} height={60} /><rect x={286} y={28} width={60} height={60} />
                </g>
                <g stroke="#6b7280" strokeWidth={1}>
                  <line x1={42} y1={28} x2={42} y2={88} /><line x1={62} y1={28} x2={62} y2={88} /><line x1={22} y1={48} x2={82} y2={48} /><line x1={22} y1={68} x2={82} y2={68} />
                  <line x1={108} y1={28} x2={108} y2={88} /><line x1={128} y1={28} x2={128} y2={88} /><line x1={88} y1={48} x2={148} y2={48} /><line x1={88} y1={68} x2={148} y2={68} />
                  <line x1={174} y1={28} x2={174} y2={88} /><line x1={194} y1={28} x2={194} y2={88} /><line x1={154} y1={48} x2={214} y2={48} /><line x1={154} y1={68} x2={214} y2={68} />
                  <line x1={240} y1={28} x2={240} y2={88} /><line x1={260} y1={28} x2={260} y2={88} /><line x1={220} y1={48} x2={280} y2={48} /><line x1={220} y1={68} x2={280} y2={68} />
                  <line x1={306} y1={28} x2={306} y2={88} /><line x1={326} y1={28} x2={326} y2={88} /><line x1={286} y1={48} x2={346} y2={48} /><line x1={286} y1={68} x2={346} y2={68} />
                </g>
                <g fill="#1f2937">
                  <rect x={22} y={28} width={20} height={20} />
                  <rect x={108} y={28} width={20} height={20} /><rect x={128} y={28} width={20} height={20} />
                  <rect x={174} y={28} width={20} height={20} /><rect x={174} y={48} width={20} height={20} /><rect x={174} y={68} width={20} height={20} />
                  <rect x={220} y={48} width={20} height={20} /><rect x={220} y={68} width={20} height={20} /><rect x={240} y={68} width={20} height={20} /><rect x={260} y={68} width={20} height={20} />
                  <rect x={306} y={28} width={20} height={20} /><rect x={306} y={48} width={20} height={20} /><rect x={306} y={68} width={20} height={20} /><rect x={286} y={68} width={20} height={20} /><rect x={326} y={68} width={20} height={20} />
                </g>
                <text x={342} y={70} fontSize={26} fontWeight="bold" textAnchor="middle" fill="#2563eb">?</text>
                <g fontSize={11.5} textAnchor="middle" fill="#6b7280">
                  <text fill="#6b7280" x={52} y={104}>1</text><text fill="#6b7280" x={118} y={104}>2</text><text fill="#6b7280" x={184} y={104}>3</text><text fill="#6b7280" x={250} y={104}>4</text><text fill="#6b7280" x={316} y={104}>5</text>
                </g>
              </svg>
              <figcaption>图：题干——黑块个数 1、2、3、4、5 依次递增</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 452 125" role="img" aria-label="四个选项的黑块网格">
                <g stroke="#1f2937" strokeWidth={1.4} fill="#fff">
                  <rect x={40} y={22} width={60} height={60} /><rect x={150} y={22} width={60} height={60} /><rect x={260} y={22} width={60} height={60} /><rect x={370} y={22} width={60} height={60} />
                </g>
                <g stroke="#6b7280" strokeWidth={1}>
                  <line x1={60} y1={22} x2={60} y2={82} /><line x1={80} y1={22} x2={80} y2={82} /><line x1={40} y1={42} x2={100} y2={42} /><line x1={40} y1={62} x2={100} y2={62} />
                  <line x1={170} y1={22} x2={170} y2={82} /><line x1={190} y1={22} x2={190} y2={82} /><line x1={150} y1={42} x2={210} y2={42} /><line x1={150} y1={62} x2={210} y2={62} />
                  <line x1={280} y1={22} x2={280} y2={82} /><line x1={300} y1={22} x2={300} y2={82} /><line x1={260} y1={42} x2={320} y2={42} /><line x1={260} y1={62} x2={320} y2={62} />
                  <line x1={390} y1={22} x2={390} y2={82} /><line x1={410} y1={22} x2={410} y2={82} /><line x1={370} y1={42} x2={430} y2={42} /><line x1={370} y1={62} x2={430} y2={62} />
                </g>
                <g fill="#1f2937">
                  <rect x={60} y={22} width={20} height={20} /><rect x={80} y={22} width={20} height={20} /><rect x={60} y={42} width={20} height={20} /><rect x={80} y={42} width={20} height={20} /><rect x={60} y={62} width={20} height={20} /><rect x={80} y={62} width={20} height={20} />
                  <rect x={170} y={22} width={20} height={20} /><rect x={190} y={22} width={20} height={20} /><rect x={190} y={42} width={20} height={20} /><rect x={190} y={62} width={20} height={20} /><rect x={170} y={62} width={20} height={20} />
                  <rect x={280} y={22} width={20} height={20} /><rect x={300} y={22} width={20} height={20} /><rect x={280} y={42} width={20} height={20} /><rect x={300} y={42} width={20} height={20} />
                  <rect x={390} y={22} width={20} height={20} /><rect x={410} y={22} width={20} height={20} /><rect x={410} y={42} width={20} height={20} /><rect x={410} y={62} width={20} height={20} />
                </g>
                <g fontSize={13} textAnchor="middle" fill="#2563eb">
                  <text fill="#2563eb" x={70} y={100}>A</text><text fill="#2563eb" x={180} y={100}>B</text><text fill="#2563eb" x={290} y={100}>C</text><text fill="#2563eb" x={400} y={100}>D</text>
                </g>
              </svg>
              <figcaption>选项 A / B / C / D（数黑块个数：6 / 5 / 4 / 3）</figcaption>
            </figure>
            <ExampleAnswer><b>解析：</b>五幅图外形一致、黑块"越连越大"，数黑块个数依次为 1、2、3、4、5，问号处应为 6 个黑块。四个选项中只有 A 是 6 个黑块。<br /><span className="correct">答案：A</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题2 · 4×4 黑块个数递增（四 · 位置规律新模型）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性。</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 411.1 130" role="img" aria-label="题干四个四乘四网格黑块递增加问号">
                <g stroke="#1f2937" strokeWidth={1.4} fill="#fff">
                  <rect x={30} y={24} width={72} height={72} /><rect x={112} y={24} width={72} height={72} /><rect x={194} y={24} width={72} height={72} /><rect x={276} y={24} width={72} height={72} />
                </g>
                <g stroke="#6b7280" strokeWidth={1}>
                  <line x1={48} y1={24} x2={48} y2={96} /><line x1={66} y1={24} x2={66} y2={96} /><line x1={84} y1={24} x2={84} y2={96} /><line x1={30} y1={42} x2={102} y2={42} /><line x1={30} y1={60} x2={102} y2={60} /><line x1={30} y1={78} x2={102} y2={78} />
                  <line x1={130} y1={24} x2={130} y2={96} /><line x1={148} y1={24} x2={148} y2={96} /><line x1={166} y1={24} x2={166} y2={96} /><line x1={112} y1={42} x2={184} y2={42} /><line x1={112} y1={60} x2={184} y2={60} /><line x1={112} y1={78} x2={184} y2={78} />
                  <line x1={212} y1={24} x2={212} y2={96} /><line x1={230} y1={24} x2={230} y2={96} /><line x1={248} y1={24} x2={248} y2={96} /><line x1={194} y1={42} x2={266} y2={42} /><line x1={194} y1={60} x2={266} y2={60} /><line x1={194} y1={78} x2={266} y2={78} />
                  <line x1={294} y1={24} x2={294} y2={96} /><line x1={312} y1={24} x2={312} y2={96} /><line x1={330} y1={24} x2={330} y2={96} /><line x1={276} y1={42} x2={348} y2={42} /><line x1={276} y1={60} x2={348} y2={60} /><line x1={276} y1={78} x2={348} y2={78} />
                </g>
                <g fill="#9ca3af">
                  <rect x={30} y={78} width={18} height={18} /><rect x={48} y={78} width={18} height={18} />
                  <rect x={112} y={78} width={18} height={18} /><rect x={130} y={78} width={18} height={18} /><rect x={148} y={78} width={18} height={18} />
                  <rect x={194} y={78} width={18} height={18} /><rect x={212} y={78} width={18} height={18} /><rect x={230} y={78} width={18} height={18} /><rect x={194} y={60} width={18} height={18} />
                  <rect x={276} y={78} width={18} height={18} /><rect x={294} y={78} width={18} height={18} /><rect x={312} y={78} width={18} height={18} /><rect x={276} y={60} width={18} height={18} /><rect x={276} y={42} width={18} height={18} />
                </g>
                <text x={382} y={70} fontSize={26} fontWeight="bold" textAnchor="middle" fill="#2563eb">?</text>
                <g fontSize={11.5} textAnchor="middle" fill="#6b7280">
                  <text fill="#6b7280" x={66} y={106}>2</text><text fill="#6b7280" x={148} y={106}>3</text><text fill="#6b7280" x={230} y={106}>4</text><text fill="#6b7280" x={312} y={106}>5</text>
                </g>
              </svg>
              <figcaption>图：题干——灰块个数 2、3、4、5 依次递增</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 446 133" role="img" aria-label="四个选项的四乘四网格">
      <g transform="translate(0,2)">
                <g stroke="#1f2937" strokeWidth={1.4} fill="#fff">
                  <rect x={34} y={20} width={72} height={72} /><rect x={140} y={20} width={72} height={72} /><rect x={246} y={20} width={72} height={72} /><rect x={352} y={20} width={72} height={72} />
                </g>
                <g stroke="#6b7280" strokeWidth={1}>
                  <line x1={52} y1={20} x2={52} y2={92} /><line x1={70} y1={20} x2={70} y2={92} /><line x1={88} y1={20} x2={88} y2={92} /><line x1={34} y1={38} x2={106} y2={38} /><line x1={34} y1={56} x2={106} y2={56} /><line x1={34} y1={74} x2={106} y2={74} />
                  <line x1={158} y1={20} x2={158} y2={92} /><line x1={176} y1={20} x2={176} y2={92} /><line x1={194} y1={20} x2={194} y2={92} /><line x1={140} y1={38} x2={212} y2={38} /><line x1={140} y1={56} x2={212} y2={56} /><line x1={140} y1={74} x2={212} y2={74} />
                  <line x1={264} y1={20} x2={264} y2={92} /><line x1={282} y1={20} x2={282} y2={92} /><line x1={300} y1={20} x2={300} y2={92} /><line x1={246} y1={38} x2={318} y2={38} /><line x1={246} y1={56} x2={318} y2={56} /><line x1={246} y1={74} x2={318} y2={74} />
                  <line x1={370} y1={20} x2={370} y2={92} /><line x1={388} y1={20} x2={388} y2={92} /><line x1={406} y1={20} x2={406} y2={92} /><line x1={352} y1={38} x2={424} y2={38} /><line x1={352} y1={56} x2={424} y2={56} /><line x1={352} y1={74} x2={424} y2={74} />
                </g>
                <g fill="#9ca3af">
                  <rect x={52} y={74} width={18} height={18} /><rect x={70} y={74} width={18} height={18} /><rect x={88} y={74} width={18} height={18} /><rect x={52} y={56} width={18} height={18} /><rect x={70} y={56} width={18} height={18} />
                  <rect x={158} y={74} width={18} height={18} /><rect x={176} y={74} width={18} height={18} /><rect x={194} y={74} width={18} height={18} /><rect x={158} y={56} width={18} height={18} />
                  <rect x={264} y={74} width={18} height={18} /><rect x={282} y={74} width={18} height={18} /><rect x={300} y={74} width={18} height={18} /><rect x={264} y={20} width={18} height={18} /><rect x={264} y={38} width={18} height={18} /><rect x={264} y={56} width={18} height={18} />
                  <rect x={370} y={74} width={18} height={18} /><rect x={388} y={74} width={18} height={18} /><rect x={406} y={74} width={18} height={18} /><rect x={370} y={20} width={18} height={18} /><rect x={370} y={38} width={18} height={18} /><rect x={370} y={56} width={18} height={18} /><rect x={388} y={56} width={18} height={18} />
                </g>
                <g fontSize={13} textAnchor="middle" fill="#2563eb">
                  <text fill="#2563eb" x={70} y={106}>A</text><text fill="#2563eb" x={176} y={106}>B</text><text fill="#2563eb" x={282} y={106}>C</text><text fill="#2563eb" x={388} y={106}>D</text>
                </g>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D（个数 5 / 4 / 6 / 7）</figcaption>
            </figure>
            <ExampleAnswer><b>解析：</b>仍是"个数递增"，灰块 2、3、4、5，问号处应为 6 个；四个选项中 C 为 6 个。<br /><span className="correct">答案：C</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
            <Block>
        <BlockTitle>补充2. 宫格平移细化：内外分开看 + 16 宫格拆分 2 部分</BlockTitle>
        <p>夸夸刷（四）第 37 页把"宫格类平移"拆成两条支线，这是页面上没展开的：</p>
        <p>① <b>内部有规律 → 内外分开看</b>。9/16/25 宫格里，把格子分成"<b>外圈</b>"和"<b>内圈</b>"两套独立编号，各自看自己的运动，不要把整张格当成一条线。判据是"有黑块始终不动"或"某一圈规律明显、另一圈乱"。</p>
        <p>② <b>内部无规律 → 16 宫格拆分 2 部分（非常规平移）</b>。当按常规上下左右怎么都对不上时，把 16 宫格<b>拆成两块</b>（例如内圈 4 格 + 外圈 12 格，或左 8 格 + 右 8 格）分别平移，常配合"<b>十字交点移动</b>"——黑块沿着两圈的交点/交界格跳。</p>
        <Callout variant="key">口诀：<b>先分内外，再分两块</b>。<br />外圈 12 格整体平移（可循环/对角）；内圈 4 格按"十字交点"跳。拆不出来时再回到"相邻比较"。</Callout>
        <figure className="fig">
          <svg viewBox="0 0 437.2 202" role="img" aria-label="十六宫格内外分开示意">
      <g transform="translate(20.4,0)">
            <g stroke="#2563eb" strokeWidth={1.2} fill="#dbeafe">
              <rect x={40} y={30} width={26} height={26} /><rect x={66} y={30} width={26} height={26} /><rect x={92} y={30} width={26} height={26} /><rect x={118} y={30} width={26} height={26} />
              <rect x={40} y={56} width={26} height={26} /><rect x={118} y={56} width={26} height={26} />
              <rect x={40} y={82} width={26} height={26} /><rect x={118} y={82} width={26} height={26} />
              <rect x={40} y={108} width={26} height={26} /><rect x={66} y={108} width={26} height={26} /><rect x={92} y={108} width={26} height={26} /><rect x={118} y={108} width={26} height={26} />
            </g>
            <g stroke="#f59e0b" strokeWidth={1.2} fill="#fef3c7">
              <rect x={66} y={56} width={26} height={26} /><rect x={92} y={56} width={26} height={26} />
              <rect x={66} y={82} width={26} height={26} /><rect x={92} y={82} width={26} height={26} />
            </g>
            <text x={92} y={160} fontSize={12.5} textAnchor="middle" fill="#1f2937">16 宫格：内外分开</text>
            <text x={92} y={178} fontSize={11.5} textAnchor="middle" fill="#6b7280">外圈 12 格（蓝） · 内圈 4 格（橙）</text>
            <line x1={158} y1={95} x2={192} y2={95} stroke="#6b7280" strokeWidth={1.6} />
            <polygon points="192,95 184,91 184,99" fill="#6b7280" />
            <text x={248} y={52} fontSize={12.5} textAnchor="middle" fill="#2563eb">外圈：整体平移</text>
            <text x={248} y={70} fontSize={12.5} textAnchor="middle" fill="#f59e0b">内圈：十字交点移动</text>
            <g stroke="#f59e0b" strokeWidth={1.3} fill="#fef3c7">
              <rect x={226} y={92} width={24} height={24} /><rect x={250} y={92} width={24} height={24} />
              <rect x={226} y={116} width={24} height={24} /><rect x={250} y={116} width={24} height={24} />
            </g>
            <g fill="#f59e0b">
              <circle cx={250} cy={104} r={3} />
            </g>
            <text x={300} y={106} fontSize={12} fill="#6b7280">黑块沿</text>
            <text x={300} y={124} fontSize={12} fill="#6b7280">交点跳</text>
            <text x={350} y={160} fontSize={12.5} textAnchor="middle" fill="#10b981">拆 2 部分分别看</text>
          </g>
      </svg>
          <figcaption>图：16 宫格"内外分开看 / 拆分 2 部分"示意</figcaption>
        </figure>
      </Block>
            <Block>
        <BlockTitle>补充3. 平移的三种"走法"：循环走 · 反弹走 · 下一列</BlockTitle>
        <p>夸夸刷（五）第 79 页专门讲一个易被忽略的点：格子里的元素走到边界之后怎么办，共三种——</p>
        <p>① <b>循环走</b>：走到末尾后从另一头"穿回来"继续（首尾相接成环）。<br />② <b>反弹走</b>：走到末尾后<b>原路折返</b>，方向相反。<br />③ <b>下一列（下一行）</b>：走到一行的尽头后，<b>跳到下一行的开头</b>继续走。</p>
        <Callout variant="key">口诀：<b>到边了，看它是"绕回来、弹回来，还是跳下一行"</b>。<br />题干里出现"某个元素始终在动、且规律在首尾断开"时，优先验这三种走法。</Callout>
        <figure className="fig">
          <svg viewBox="0 0 464.5 188.7" role="img" aria-label="循环走反弹走下一列三种走法示意">
      <g transform="translate(0,7.7)">
            <g fill="#fff" stroke="#6b7280" strokeWidth={1.2}>
              <circle cx={60} cy={45} r={7} /><circle cx={94} cy={45} r={7} /><circle cx={128} cy={45} r={7} /><circle cx={162} cy={45} r={7} /><circle cx={196} cy={45} r={7} /><circle cx={230} cy={45} r={7} /><circle cx={264} cy={45} r={7} /><circle cx={298} cy={45} r={7} />
              <circle cx={60} cy={98} r={7} /><circle cx={94} cy={98} r={7} /><circle cx={128} cy={98} r={7} /><circle cx={162} cy={98} r={7} /><circle cx={196} cy={98} r={7} /><circle cx={230} cy={98} r={7} /><circle cx={264} cy={98} r={7} /><circle cx={298} cy={98} r={7} />
              <circle cx={60} cy={151} r={7} /><circle cx={94} cy={151} r={7} /><circle cx={128} cy={151} r={7} /><circle cx={162} cy={151} r={7} /><circle cx={196} cy={151} r={7} /><circle cx={230} cy={151} r={7} /><circle cx={264} cy={151} r={7} /><circle cx={298} cy={151} r={7} />
            </g>
            <circle cx={128} cy={45} r={7} fill="#2563eb" stroke="#2563eb" />
            <circle cx={264} cy={98} r={7} fill="#f59e0b" stroke="#f59e0b" />
            <circle cx={264} cy={151} r={7} fill="#10b981" stroke="#10b981" />
            <circle cx={60} cy={151} r={7} fill="#10b981" stroke="#10b981" />
            <path d="M60 26 L298 26" stroke="#2563eb" strokeWidth={1.4} fill="none" />
            <polygon points="298,26 290,22 290,30" fill="#2563eb" />
            <path d="M298 15 C 320 10 320 34 298 30" stroke="#2563eb" strokeWidth={1.4} fill="none" />
            <path d="M60 80 L298 80" stroke="#f59e0b" strokeWidth={1.4} fill="none" />
            <polygon points="298,80 290,76 290,84" fill="#f59e0b" />
            <polygon points="60,80 68,76 68,84" fill="#f59e0b" />
            <path d="M60 132 L298 132" stroke="#10b981" strokeWidth={1.4} fill="none" />
            <polygon points="298,132 290,128 290,136" fill="#10b981" />
            <path d="M298 132 C 320 134 320 148 300 150" stroke="#10b981" strokeWidth={1.4} fill="none" />
            <g fontSize={12.5} fill="#1f2937">
              <text x={330} y={50} fill="#2563eb">循环走：绕回起点</text>
              <text x={330} y={103} fill="#f59e0b">反弹走：原路折返</text>
              <text x={330} y={156} fill="#10b981">下一列：跳到下一行</text>
            </g>
          </g>
      </svg>
          <figcaption>图：平移三种走法示意（蓝点循环、橙点反弹、绿点跳下一行）</figcaption>
        </figure>
      </Block>
            <Block>
        <BlockTitle>补充13. 相邻比较的"良心"：某个 / 局部 / 某排（列）</BlockTitle>
        <p>夸夸刷（五）第 99—101 页把"相邻比较"讲得更细，这是页面上只提名字、没有展开的：<b>相邻比较不一定是整幅图逐个比，出题者往往只改"一小块"</b>。三种经济型改法——</p>
        <p>① <b>某个</b>：每相邻两图只有一个元素动（其余不动）——最典型的"良心题"；<br />② <b>局部</b>：相邻两图某个局部区域内元素整体变化；<br />③ <b>某排 / 某列</b>：只有某一行或某一列在动，其余行/列固定。</p>
        <Callout variant="key">口诀：<b>相邻比较——先找"不动的"，再看"动的那一小块"</b>。<br />特征：相邻图图案很像，一小撮黑块不动 → 用"动 / 不动"切分，比整图对比更快。</Callout>
        <figure className="fig">
          <svg viewBox="0 0 474 169" role="img" aria-label="相邻比较某个局部某排列示意">
            <g fill="#fff" stroke="#6b7280" strokeWidth={1.1}>
              <circle cx={45} cy={40} r={9} /><circle cx={88} cy={40} r={9} /><circle cx={131} cy={40} r={9} /><circle cx={174} cy={40} r={9} /><circle cx={217} cy={40} r={9} /><circle cx={260} cy={40} r={9} /><circle cx={303} cy={40} r={9} />
              <circle cx={45} cy={90} r={9} /><circle cx={88} cy={90} r={9} /><circle cx={131} cy={90} r={9} /><circle cx={174} cy={90} r={9} /><circle cx={217} cy={90} r={9} /><circle cx={260} cy={90} r={9} /><circle cx={303} cy={90} r={9} />
              <circle cx={45} cy={138} r={9} /><circle cx={88} cy={138} r={9} /><circle cx={131} cy={138} r={9} /><circle cx={174} cy={138} r={9} /><circle cx={217} cy={138} r={9} /><circle cx={260} cy={138} r={9} /><circle cx={303} cy={138} r={9} />
            </g>
            <circle cx={174} cy={40} r={9} fill="#2563eb" stroke="#2563eb" />
            <g fill="#f59e0b" stroke="#f59e0b">
              <circle cx={131} cy={90} r={9} /><circle cx={174} cy={90} r={9} /><circle cx={217} cy={90} r={9} />
            </g>
            <g fill="#10b981" stroke="#10b981">
              <circle cx={131} cy={138} r={9} /><circle cx={217} cy={138} r={9} /><circle cx={303} cy={138} r={9} />
            </g>
            <g fontSize={12.5} fill="#1f2937">
              <text x={340} y={45} fill="#2563eb">某个：只动 1 个</text>
              <text x={340} y={95} fill="#f59e0b">局部：一小块一起动</text>
              <text x={340} y={143} fill="#10b981">某排/列：隔格动</text>
            </g>
          </svg>
          <figcaption>图：相邻比较的三种"经济型"改法</figcaption>
        </figure>
      </Block>
            <Block>
        <BlockTitle>补充6. 相邻比较的隐藏技能 · "找大区域"三步法</BlockTitle>
        <p>相邻比较（每两幅图之间只变一点）大家都练过，但刷题里出现了一类"<b>越看越糊</b>"的题：图案很密、很像，可就是找不到那个"变了的点"。老师的做法叫"<b>找大区域</b>"，一共三步：</p>
        <Callout variant="key"><b>相邻比较 · 找大区域 三步法</b><br />① <b>步骤一：很像找不同，不像找相同。</b>越像，越要用"找不同"的眼睛；越不像，反而先找"哪些区域一模一样"。<br />② <b>步骤二：找大区域。</b>先把整幅图切成"一大块一大块"，看哪一整块是稳的、哪一整块在变。横行看不出来，<b>就换纵列</b>看。<br />③ <b>注意点：变化区域，除了"颜色"和"移动"，还可能"完全没规律"</b>——不要死磕那个变了的点，抓住"没变的大区域"即可选答案。</Callout>
        <p>考场上更实用的一条：<b>选一个"与前一幅图最像的选项"</b>。相邻比较题的正确选项，通常不是最"漂亮"的，而是与上一幅图差异最小的那一个。</p>
        <Example>
          <ExampleHeader>📝 例题4 · 密集图案先找大区域（25 国考）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下列选项中，最符合所给图形变化规律的是。</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 421 127" role="img" aria-label="例题题干五幅密集图案">
              <rect x={60} y={38} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={71} y={38} width={11} height={11} fill="#1f2937" /><rect x={82} y={38} width={11} height={11} fill="#1f2937" />
              <rect x={60} y={49} width={11} height={11} fill="#1f2937" /><rect x={71} y={49} width={11} height={11} fill="#1f2937" /><rect x={82} y={49} width={11} height={11} fill="#1f2937" /><rect x={93} y={49} width={11} height={11} fill="#1f2937" />
              <rect x={60} y={60} width={11} height={11} fill="#1f2937" /><rect x={71} y={60} width={11} height={11} fill="#1f2937" /><rect x={82} y={60} width={11} height={11} fill="#1f2937" /><rect x={93} y={60} width={11} height={11} fill="#1f2937" />
              <rect x={71} y={71} width={11} height={11} fill="#1f2937" /><rect x={82} y={71} width={11} height={11} fill="#1f2937" />
              <rect x={119} y={38} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={141} y={38} width={11} height={11} fill="#1f2937" />
              <rect x={119} y={49} width={11} height={11} fill="#1f2937" /><rect x={130} y={49} width={11} height={11} fill="#1f2937" /><rect x={141} y={49} width={11} height={11} fill="#1f2937" /><rect x={152} y={49} width={11} height={11} fill="#1f2937" />
              <rect x={119} y={60} width={11} height={11} fill="#1f2937" /><rect x={130} y={60} width={11} height={11} fill="#1f2937" /><rect x={141} y={60} width={11} height={11} fill="#1f2937" /><rect x={152} y={60} width={11} height={11} fill="#1f2937" />
              <rect x={141} y={71} width={11} height={11} fill="#1f2937" />
              <rect x={178} y={38} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={200} y={38} width={11} height={11} fill="#1f2937" />
              <rect x={189} y={49} width={11} height={11} fill="#1f2937" /><rect x={200} y={49} width={11} height={11} fill="#1f2937" /><rect x={211} y={49} width={11} height={11} fill="#1f2937" />
              <rect x={189} y={60} width={11} height={11} fill="#1f2937" /><rect x={200} y={60} width={11} height={11} fill="#1f2937" /><rect x={211} y={60} width={11} height={11} fill="#1f2937" />
              <rect x={200} y={71} width={11} height={11} fill="#1f2937" />
              <rect x={237} y={38} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={259} y={38} width={11} height={11} fill="#1f2937" />
              <rect x={248} y={49} width={11} height={11} fill="#1f2937" /><rect x={259} y={49} width={11} height={11} fill="#1f2937" />
              <rect x={248} y={60} width={11} height={11} fill="#1f2937" /><rect x={259} y={60} width={11} height={11} fill="#1f2937" /><rect x={270} y={60} width={11} height={11} fill="#1f2937" />
              <rect x={259} y={71} width={11} height={11} fill="#1f2937" />
              <rect x={296} y={38} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={318} y={38} width={11} height={11} fill="#1f2937" />
              <rect x={307} y={49} width={11} height={11} fill="#1f2937" /><rect x={318} y={49} width={11} height={11} fill="#1f2937" />
              <rect x={307} y={60} width={11} height={11} fill="#1f2937" /><rect x={318} y={60} width={11} height={11} fill="#1f2937" />
              <rect x={318} y={71} width={11} height={11} fill="#1f2937" />
              <rect x={355} y={38} width={44} height={44} fill="none" stroke="#ef4444" strokeWidth={1.4} strokeDasharray="4 3" />
              <text x={377} y={70} fontSize={24} fill="#ef4444" textAnchor="middle">?</text>
              <text x={82} y={102} fontSize={12} fill="#6b7280" textAnchor="middle">①</text>
              <text x={141} y={102} fontSize={12} fill="#6b7280" textAnchor="middle">②</text>
              <text x={200} y={102} fontSize={12} fill="#6b7280" textAnchor="middle">③</text>
              <text x={259} y={102} fontSize={12} fill="#6b7280" textAnchor="middle">④</text>
              <text x={318} y={102} fontSize={12} fill="#6b7280" textAnchor="middle">⑤</text>
            </svg><figcaption>图：题干相邻两幅"很像、只有一小块在变"</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 426 125" role="img" aria-label="例题四个选项">
              <rect x={60} y={35} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={60} y={35} width={11} height={11} fill="#1f2937" /><rect x={71} y={35} width={11} height={11} fill="#1f2937" /><rect x={82} y={35} width={11} height={11} fill="#1f2937" /><rect x={93} y={35} width={11} height={11} fill="#1f2937" />
              <rect x={60} y={46} width={11} height={11} fill="#1f2937" /><rect x={93} y={46} width={11} height={11} fill="#1f2937" />
              <rect x={60} y={57} width={11} height={11} fill="#1f2937" /><rect x={93} y={57} width={11} height={11} fill="#1f2937" />
              <rect x={60} y={68} width={11} height={11} fill="#1f2937" /><rect x={71} y={68} width={11} height={11} fill="#1f2937" /><rect x={82} y={68} width={11} height={11} fill="#1f2937" /><rect x={93} y={68} width={11} height={11} fill="#1f2937" />
              <rect x={160} y={35} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={171} y={35} width={11} height={11} fill="#1f2937" /><rect x={182} y={35} width={11} height={11} fill="#1f2937" />
              <rect x={171} y={46} width={11} height={11} fill="#1f2937" /><rect x={182} y={46} width={11} height={11} fill="#1f2937" />
              <rect x={171} y={57} width={11} height={11} fill="#1f2937" /><rect x={182} y={57} width={11} height={11} fill="#1f2937" />
              <rect x={171} y={68} width={11} height={11} fill="#1f2937" /><rect x={182} y={68} width={11} height={11} fill="#1f2937" />
              <rect x={260} y={35} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={271} y={35} width={11} height={11} fill="#1f2937" /><rect x={282} y={35} width={11} height={11} fill="#1f2937" />
              <rect x={271} y={46} width={11} height={11} fill="#1f2937" /><rect x={282} y={46} width={11} height={11} fill="#1f2937" />
              <rect x={271} y={57} width={11} height={11} fill="#1f2937" /><rect x={282} y={57} width={11} height={11} fill="#1f2937" /><rect x={293} y={57} width={11} height={11} fill="#1f2937" />
              <rect x={271} y={68} width={11} height={11} fill="#1f2937" /><rect x={282} y={68} width={11} height={11} fill="#1f2937" />
              <rect x={360} y={35} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={360} y={35} width={11} height={11} fill="#1f2937" /><rect x={393} y={35} width={11} height={11} fill="#1f2937" />
              <rect x={371} y={46} width={11} height={11} fill="#1f2937" /><rect x={382} y={46} width={11} height={11} fill="#1f2937" />
              <rect x={371} y={57} width={11} height={11} fill="#1f2937" /><rect x={382} y={57} width={11} height={11} fill="#1f2937" />
              <rect x={360} y={68} width={11} height={11} fill="#1f2937" /><rect x={393} y={68} width={11} height={11} fill="#1f2937" />
              <text x={82} y={100} fontSize={12.5} fill="#6b7280" textAnchor="middle">A</text>
              <text x={182} y={100} fontSize={12.5} fill="#6b7280" textAnchor="middle">B</text>
              <text x={282} y={100} fontSize={12.5} fill="#6b7280" textAnchor="middle">C</text>
              <text x={382} y={100} fontSize={12.5} fill="#6b7280" textAnchor="middle">D</text>
            </svg><figcaption>选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>每题之间图案高度相似 → 判定为<b>相邻比较</b>。①→②→③→④→⑤ 中"能稳住的那一大块"始终是同一个大小的方形区域，只是左边一列/上边一行的少数方块在变，属于"变化区域可以不规律"。<br />对照"与第⑤幅最像"的原则，只有 C 保留了那块稳定区域。<br /><span className="correct">答案：C</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
            <Block>
        <BlockTitle>补充9. 宫格平移的隐藏分支 · "16 宫格拆分 2 部分"</BlockTitle>
        <p>宫格平移（9 / 16 / 25 / 36 宫格、蜂窝）的常规套路是"内外分开看 / 上下左右斜着动"。但超大杯在位置规律复盘里单列了一条非常规分支，也是很多人卡住的地方：</p>
        <Callout variant="key"><b>非常规平移 → "16 宫格拆分 2 部分"</b><br />当某个 16 宫格图形<b>整体平移数不出规律</b>时，把这 16 个格子拆成"<b>内 4 格 + 外 12 格</b>"（或"上 2 行 / 下 2 行"）两部分，<b>分别数各自的移动规律</b>。<br />典型考题叫"<b>16 宫格 - 内外分开 - 十字交点移动</b>"：那个"十字 / 黑块群"的<b>交叉点沿着内圈的 4 个格子顺时针转</b>。</Callout>
        <p>配套的还有一条更细的"线细化"树，专门对付"贪吃蛇 / 全划"型图形：<b>没有小球</b>时看首尾（方向、平行垂直、两条线之间的线条数）和数量（直角、平行线）；<b>有小球</b>时先看"内部是否相同"→ 内外分开，再看"是不是分 2 堆呈现"→ 每堆个数 = <b>线条穿过小球的个数</b>（真题：线条穿过小球 16 个、没穿过 9 个）。</p>
        <Example>
          <ExampleHeader>📝 例题6 · 16 宫格内外分开，十字交叉点顺时针移动</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下列选项中，最符合所给图形变化规律的是。</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 421 127" role="img" aria-label="例题题干五幅十六宫格图形">
              <rect x={60} y={38} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={71} y={38} width={11} height={11} fill="#1f2937" /><rect x={60} y={49} width={11} height={11} fill="#1f2937" /><rect x={71} y={49} width={11} height={11} fill="#1f2937" /><rect x={82} y={49} width={11} height={11} fill="#1f2937" /><rect x={71} y={60} width={11} height={11} fill="#1f2937" />
              <rect x={119} y={38} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={141} y={38} width={11} height={11} fill="#1f2937" /><rect x={130} y={49} width={11} height={11} fill="#1f2937" /><rect x={141} y={49} width={11} height={11} fill="#1f2937" /><rect x={152} y={49} width={11} height={11} fill="#1f2937" /><rect x={141} y={60} width={11} height={11} fill="#1f2937" />
              <rect x={178} y={38} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={200} y={49} width={11} height={11} fill="#1f2937" /><rect x={189} y={60} width={11} height={11} fill="#1f2937" /><rect x={200} y={60} width={11} height={11} fill="#1f2937" /><rect x={211} y={60} width={11} height={11} fill="#1f2937" /><rect x={200} y={71} width={11} height={11} fill="#1f2937" />
              <rect x={237} y={38} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={248} y={49} width={11} height={11} fill="#1f2937" /><rect x={237} y={60} width={11} height={11} fill="#1f2937" /><rect x={248} y={60} width={11} height={11} fill="#1f2937" /><rect x={259} y={60} width={11} height={11} fill="#1f2937" /><rect x={248} y={71} width={11} height={11} fill="#1f2937" />
              <rect x={296} y={38} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={307} y={38} width={11} height={11} fill="#1f2937" /><rect x={296} y={49} width={11} height={11} fill="#1f2937" /><rect x={307} y={49} width={11} height={11} fill="#1f2937" /><rect x={318} y={49} width={11} height={11} fill="#1f2937" /><rect x={307} y={60} width={11} height={11} fill="#1f2937" />
              <rect x={355} y={38} width={44} height={44} fill="none" stroke="#ef4444" strokeWidth={1.4} strokeDasharray="4 3" />
              <text x={377} y={70} fontSize={24} fill="#ef4444" textAnchor="middle">?</text>
              <text x={82} y={102} fontSize={12} fill="#6b7280" textAnchor="middle">①</text>
              <text x={141} y={102} fontSize={12} fill="#6b7280" textAnchor="middle">②</text>
              <text x={200} y={102} fontSize={12} fill="#6b7280" textAnchor="middle">③</text>
              <text x={259} y={102} fontSize={12} fill="#6b7280" textAnchor="middle">④</text>
              <text x={318} y={102} fontSize={12} fill="#6b7280" textAnchor="middle">⑤</text>
            </svg><figcaption>图：题干"十字黑块群"的交叉点在内 4 格上顺时针移动</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 426 125" role="img" aria-label="例题四个选项">
              <rect x={60} y={35} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={71} y={46} width={11} height={11} fill="#1f2937" /><rect x={60} y={57} width={11} height={11} fill="#1f2937" /><rect x={71} y={57} width={11} height={11} fill="#1f2937" /><rect x={82} y={57} width={11} height={11} fill="#1f2937" /><rect x={71} y={68} width={11} height={11} fill="#1f2937" />
              <rect x={160} y={35} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={182} y={35} width={11} height={11} fill="#1f2937" /><rect x={171} y={46} width={11} height={11} fill="#1f2937" /><rect x={182} y={46} width={11} height={11} fill="#1f2937" /><rect x={193} y={46} width={11} height={11} fill="#1f2937" /><rect x={182} y={57} width={11} height={11} fill="#1f2937" />
              <rect x={260} y={35} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={282} y={46} width={11} height={11} fill="#1f2937" /><rect x={271} y={57} width={11} height={11} fill="#1f2937" /><rect x={282} y={57} width={11} height={11} fill="#1f2937" /><rect x={293} y={57} width={11} height={11} fill="#1f2937" /><rect x={282} y={68} width={11} height={11} fill="#1f2937" />
              <rect x={360} y={35} width={44} height={44} fill="none" stroke="#6b7280" strokeWidth={1} />
              <rect x={371} y={35} width={11} height={11} fill="#1f2937" /><rect x={360} y={46} width={11} height={11} fill="#1f2937" /><rect x={371} y={46} width={11} height={11} fill="#1f2937" /><rect x={382} y={46} width={11} height={11} fill="#1f2937" /><rect x={371} y={57} width={11} height={11} fill="#1f2937" />
              <text x={82} y={100} fontSize={12.5} fill="#6b7280" textAnchor="middle">A</text>
              <text x={182} y={100} fontSize={12.5} fill="#6b7280" textAnchor="middle">B</text>
              <text x={282} y={100} fontSize={12.5} fill="#6b7280" textAnchor="middle">C</text>
              <text x={382} y={100} fontSize={12.5} fill="#6b7280" textAnchor="middle">D</text>
            </svg><figcaption>选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>整体平移一直数不出规律 → 启用"<b>16 宫格拆 2 部分</b>"。把 16 格分成内 4 格（中间 2×2）与外 12 格：黑块群的<b>十字交叉点</b>在内圈上依次走了 <b>左上 → 右上 → 右下 → 左下 → 左上</b>，是<b>顺时针一圈一停</b>。<br />⑤ 的交叉点在左上，故问号处交叉点应回到<b>右上</b>，即选项 B。<br /><span className="correct">答案：B</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
    </>
  )
}
