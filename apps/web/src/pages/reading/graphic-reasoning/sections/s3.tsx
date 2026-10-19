import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleQuestion, PointList } from '@/components/content'

/**
 * 三、属性规律 + 图形关系
 *
 * @returns 该节正文。
 */
export default function S4(): ReactElement {
  return (
    <>
      <Block>
      <BlockTitle>1. 属性规律怎么考：命题者的"作图特点"决定大方向</BlockTitle>
      <p>图推的题面只有两种：<b>有一样的图案</b>和<b>没有一样的图案</b>。老师给的"3+3"框架把考点一次锁死——</p>
      <Callout variant="key">
      <p><b>刘义恒图推"3+3"框架</b></p>
      <PointList>
      <li><b>有一样的图案（3类）</b>：【1】位置（平移、旋转/翻转 → 相邻比较）；【2】样式（运算：黑白运算、加减同异）；【3】标记。</li>
      <li><b>没有一样的图案（3类）</b>：【1】属性（对称性、曲直性、开闭性）；【2】数量（面、笔画、点、线、角、元素）；【3】图形间位置。</li>
      </PointList>
      </Callout>
      <p><b>命题者作图特点：每幅图图案都不一样</b> → 当题干里每一幅图都换了"花样"，先别急着数，<b>先看属性</b>。</p>
      <Callout variant="tip">
      <b>宏观思维（做题顺序）：</b>
      <PointList>
      <li>① <b>先属性，后数量</b>，且属性规律中的<b>对称性优先级最高</b>；</li>
      <li>② <b>背诵数量规律中图形特征</b>，用它直接定位（例如大量散点→点、封闭区域→面）；</li>
      <li>③ <b>极端情况，优先考虑"图形关系"</b>（图特别简单或特别复杂时）。</li>
      </PointList>
      </Callout>
      <p>属性规律只有三兄弟，各有各的"长相"（看到什么，就往哪儿想）：</p>
      <Callout variant="formula"><span className="formula">对称性 → 图形很"规则""美观"　|　曲直性 → 图形里出现曲线（1/2、2/3）　|　开闭性 → 图形很"生活化"</span></Callout>
      <p>下面依次展开：对称性（基础 → 细化 → 拔高）、曲直性、开闭性，最后是图形间关系。</p>
      </Block>
      
      <Block>
      <BlockTitle>2. 对称性·基础：先"识别"，再"细化"</BlockTitle>
      <p>看到题干图形很规则、很美观（车辆车标、几何图形），第一反应就是对称性。解题口诀只有一句：</p>
      <Callout variant="formula"><span className="formula">规则、美观 —— 对称性 —— 先识别 —— 后细化</span></Callout>
      <p><b>先识别（区分对称类型）</b>：轴对称 / 中心对称 / 轴对称+中心对称。</p>
      <PointList>
      <li><b>轴对称——"等腰"元素出现</b>（能画出对称轴）：三角形、等腰梯形、心形、笑脸、月亮脸……</li>
      <li><b>中心对称——平行四边形、N、Z、S 变形、相同图形反着放</b>（旋转 180° 与自身重合）。</li>
      <li><b>轴对称 + 中心对称——存在两条相互垂直的对称轴</b>：如圆内十字、圆内斜线交叉、正六边形、长方形（十字对称）。</li>
      </PointList>
      <Callout variant="key">
      <b>破解出题者"小心思"</b>：题干给你一个漂亮的"对称外框"（三角形、六边形）把人骗住，真正的答案要看<b>内部填充</b>的图形——所以判对称，一定要<b>连内部一起看</b>。
      </Callout>
      
      <Example>
        <ExampleHeader>📝 例题1 · 对称性·识别（2024 河北事业单位）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 468 157.2" role="img" aria-label="题干六幅图形，前五幅分别是中心对称、轴对称、轴对称加中心对称、中心对称、轴对称，第六幅为问号">
      <g transform="translate(2,13.1)">
            <text x={52} y={20} fontSize={12} fill="#f59e0b" textAnchor="middle">中心</text>
            <text x={124} y={20} fontSize={12} fill="#f59e0b" textAnchor="middle">轴</text>
            <text x={196} y={20} fontSize={12} fill="#f59e0b" textAnchor="middle">轴+中心</text>
            <text x={268} y={20} fontSize={12} fill="#f59e0b" textAnchor="middle">中心</text>
            <text x={340} y={20} fontSize={12} fill="#f59e0b" textAnchor="middle">轴</text>
            <text x={412} y={20} fontSize={12} fill="#f59e0b" textAnchor="middle">轴+中心</text>
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={20} y={28} width={64} height={64} /><rect x={92} y={28} width={64} height={64} />
              <rect x={164} y={28} width={64} height={64} /><rect x={236} y={28} width={64} height={64} />
              <rect x={308} y={28} width={64} height={64} /><rect x={380} y={28} width={64} height={64} />
            </g>
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={28} y={42} width={48} height={36} /><path d="M28,42 L76,78" />
              <path d="M124,28 L104,72 L144,72 Z" /><path d="M124,28 L124,72" />
              <path d="M188,28 h16 v14 h14 v16 h-14 v14 h-16 v-14 h-14 v-16 h14 z" />
              <path d="M242,76 L256,36 L312,36 L298,76 Z" />
              <path d="M340,28 L320,72 L360,72 Z" /><path d="M340,28 L340,72" />
              <path d="M412,28 v-8 M404,36 h16 v14 h14 v16 h-14 v14 h-16 v-14 h-14 v-16 h14 z" stroke="none" />
            </g>
      <text x={412} y={72} fontSize={30} fill="#1f2937" textAnchor="middle" fontWeight="bold">?</text>
            <g stroke="#f59e0b" strokeWidth={3.2} opacity="0.8" fill="none">
              <circle cx={52} cy={60} r={9} /><circle cx={52} cy={60} r={3.2} fill="#f59e0b" stroke="none" />
              <path d="M52,28 L52,72" />
              <path d="M44,60 h46 M52,28 v44" />
              <circle cx={268} cy={56} r={9} /><circle cx={268} cy={56} r={3.2} fill="#f59e0b" stroke="none" />
              <path d="M340,28 L340,72" />
            </g>
            <text x={230} y={120} fontSize={12} fill="#6b7280" textAnchor="middle">橙色＝中心对称点／对称轴　　问号处应为"轴＋中心"</text>
          </g>
      </svg><figcaption>图：题干六格（第 6 格为问号处，橙色为所作对称轴）</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 406 132" role="img" aria-label="四个选项图形，A为轴对称五边形，B为中心对称梯形，C为不规则四边形，D为正六边形内十字">
      <g transform="translate(0,10)">
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={72} y={12} width={64} height={64} /><rect x={154} y={12} width={64} height={64} />
              <rect x={236} y={12} width={64} height={64} /><rect x={318} y={12} width={64} height={64} />
            </g>
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <path d="M104,22 L128,38 L120,70 L88,70 L80,38 Z" /><path d="M104,22 L104,70" />
              <path d="M180,26 L206,26 L218,68 L168,68 Z" /><path d="M180,26 L218,68" /><path d="M206,26 L168,68" />
              <path d="M246,28 L296,22 L288,66 L250,60 Z" /><path d="M246,28 L288,66" />
              <path d="M350,20 L372,20 L384,44 L372,68 L350,68 L338,44 Z" /><path d="M350,20 L350,68" /><path d="M338,44 L384,44" />
            </g>
            <text x={104} y={94} fontSize={13} fill="#1f2937" textAnchor="middle">A</text>
            <text x={186} y={94} fontSize={13} fill="#1f2937" textAnchor="middle">B</text>
            <text x={268} y={94} fontSize={13} fill="#1f2937" textAnchor="middle">C</text>
            <text x={350} y={94} fontSize={13} fill="#1f2937" textAnchor="middle">D</text>
            <text x={362} y={96} fontSize={17} fill="#10b981" textAnchor="middle">✓</text>
          </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>六幅图依次是"中心对称 → 轴对称 → 轴对称+中心对称"的循环：①长方形加对角线（旋转 180° 重合，仅中心对称）；②等腰三角形（仅轴对称）；③十字形（既有相互垂直的对称轴，两类都是）；④平行四边形（仅中心对称）；⑤等腰三角形（仅轴对称）；⑥应为<b>轴对称+中心对称</b>。四个选项中只有 D（正六边形内套十字）同时具备轴对称和中心对称。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      
      <Example>
        <ExampleHeader>📝 例题2 · 对称性·分组分类（2024 联考）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 464 327.4" role="img" aria-label="六个图形：三角形内圆环与方块、三星黑点与白色星形、六边形内立体方框、五边形内圆与三个黑块、L形折线多边形、三个三角形组合">
      <g transform="translate(2,8)">
            <defs>
              <pattern id="L3-h2a" width={6} height={6} patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                <line x1={0} y1={0} x2={0} y2={6} stroke="#1f2937" strokeWidth={1.4} />
              </pattern>
            </defs>
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={20} y={14} width={130} height={130} /><rect x={165} y={14} width={130} height={130} /><rect x={310} y={14} width={130} height={130} />
              <rect x={20} y={158} width={130} height={130} /><rect x={165} y={158} width={130} height={130} /><rect x={310} y={158} width={130} height={130} />
            </g>
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <path d="M85,28 L25,132 L145,132 Z" />
              <path d="M85,28 L85,132 M85,132 L150,124 M150,124 L154,88 M154,88 L85,132" stroke="none" />
            </g>
            <ellipse cx={85} cy={104} rx={30} ry={15} fill="url(#L3-h2a)" stroke="#1f2937" strokeWidth={2} />
            <rect x={73} y={92} width={24} height={24} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <path d="M85,132 L150,122 L152,86" stroke="#1f2937" />
              <path d="M24,38 L146,30 M85,132 L28,120" stroke="none" />
            </g>
            <g>
              <ellipse cx={205} cy={55} rx={16} ry={10} fill="#1f2937" stroke="#1f2937" strokeWidth={1} />
              <ellipse cx={255} cy={55} rx={16} ry={10} fill="#1f2937" stroke="#1f2937" strokeWidth={1} />
              <ellipse cx={230} cy={118} rx={16} ry={10} fill="#1f2937" stroke="#1f2937" strokeWidth={1} />
              <path d="M230,38 L238,66 L268,66 L244,84 L254,114 L230,96 L206,114 L216,84 L192,66 L222,66 Z" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
            </g>
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <path d="M375,20 L430,50 L430,110 L375,140 L320,110 L320,50 Z" />
              <rect x={349} y={56} width={52} height={52} />
              <path d="M401,56 L418,42 M401,108 L418,96 M349,56 L332,44 M349,108 L332,96" />
              <path d="M375,56 L401,56 M375,108 L401,108 M349,82 L401,82" />
            </g>
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <path d="M85,172 L142,216 L120,284 L50,284 L28,216 Z" />
              <circle cx={85} cy={232} r={17} />
            </g>
            <ellipse cx={60} cy={206} rx={17} ry={11} fill="url(#L3-h2a)" stroke="#1f2937" strokeWidth={2} />
            <ellipse cx={115} cy={210} rx={17} ry={11} fill="url(#L3-h2a)" stroke="#1f2937" strokeWidth={2} />
            <ellipse cx={82} cy={266} rx={17} ry={11} fill="url(#L3-h2a)" stroke="#1f2937" strokeWidth={2} />
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <path d="M176,282 L176,246 L206,246 L206,222 L246,222 L246,206 L286,206 L286,258 L266,258 L266,282 Z" />
            </g>
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <path d="M375,176 L375,140" stroke="none" />
            </g>
            <path d="M375,174 L405,218 L345,218 Z" fill="url(#L3-h2a)" stroke="#1f2937" strokeWidth={2} />
            <path d="M330,284 L366,222 L402,284 Z" fill="url(#L3-h2a)" stroke="#1f2937" strokeWidth={2} />
            <path d="M420,284 L384,222 L348,284 Z" fill="url(#L3-h2a)" stroke="#1f2937" strokeWidth={2} />
            <g fill="#6b7280" fontSize={13} textAnchor="middle">
              <text x={85} y={163} fill="#6b7280">①</text><text x={230} y={163} fill="#6b7280">②</text><text x={375} y={163} fill="#6b7280">③</text>
              <text x={85.0} y={294.4} fill="#6b7280">④</text><text x={230.0} y={294.4} fill="#6b7280">⑤</text><text x={375.0} y={294.4} fill="#6b7280">⑥</text>
            </g>
          </g>
      </svg><figcaption>图：题干六个图形</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 327.0 128" role="img" aria-label="选项分组文字">
      <g transform="translate(0,13)">
            <text x={230} y={24} fontSize={15} fill="#1f2937" textAnchor="middle">A．①④⑥，②③⑤</text>
            <text x={230} y={46} fontSize={15} fill="#1f2937" textAnchor="middle">B．①②③，④⑤⑥</text>
            <text x={230} y={68} fontSize={15} fill="#10b981" textAnchor="middle">C．①⑤⑥，②③④　✓</text>
            <text x={230} y={90} fontSize={15} fill="#1f2937" textAnchor="middle">D．①③⑤，②④⑥</text>
          </g>
      </svg><figcaption>选项 A / B / C / D（分组分类题选项为文字）</figcaption></figure>
          <ExampleAnswer><b>解析：</b>逐一检验是否<b>轴对称</b>：①内部圆环与方块是斜置的，整体不对称；②三个黑块 + 中间白色星形，有 1 条竖直对称轴；③六边形内的"立体方框"有 1 条水平对称轴；④五边形内圆与三个黑块，有 1 条斜向对称轴；⑤L 形折线多边形，找不到对称轴；⑥三个三角形的位置关系不对称。<br />因此 <b>①⑤⑥ 不对称，②③④ 轴对称</b>。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      </Block>
      
      <Block>
      <BlockTitle>3. 对称性·细化：一条轴看方向，多条轴看数量，都没答案看"关系"</BlockTitle>
      <p>"识别"出是轴对称以后，出题者还会继续往下考，这就是<b>对称轴的细化考法</b>：</p>
      <PointList>
      <li><b>1 条对称轴 → 优先看对称轴方向</b>（横、竖、斜，以及 45° 的旋转规律）。</li>
      <li><b>多条对称轴 → 优先看对称轴数量</b>（1、2、3、4……递增或递减）。</li>
      <li><b>方向和数量都没答案 → 看对称轴与原图形①线②面③点的关系</b>（轴是否与某条线重合、是否平分某个面、是否经过某个点）。</li>
      </PointList>
      <Callout variant="key">
      <b>多个规则图形要"拆分"看：</b>
      <PointList>
      <li><b>2~3 个规则图形"挨着"</b> → 考虑拆分，看<b>对称轴之间的位置关系</b>：平行、垂直、相交；</li>
      <li><b>2 个规则图形"内、外"</b> → 考虑拆分，看内外两层分别是什么属性（识别），甚至做运算。</li>
      </PointList>
      </Callout>
      <Callout variant="formula"><span className="formula">规则、美观 —— 对称性 —— 先识别 —— 后细化 —— 1条轴看方向｜多条轴看数量｜都没答案看与原图形（线/面/点）的关系</span></Callout>
      
      <Example>
        <ExampleHeader>📝 例题3 · 对称轴方向（2025 浙江）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 502 164.1" role="img" aria-label="题干五幅图形及其对称轴：正方形组依次为反斜对角线、竖直、正斜对角线；圆形组依次为反斜直径、竖直直径，第六幅为问号">
      <g transform="translate(16,0)">
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={16} y={30} width={66} height={66} /><rect x={90} y={30} width={66} height={66} /><rect x={164} y={30} width={66} height={66} />
              <rect x={250} y={30} width={66} height={66} /><rect x={324} y={30} width={66} height={66} /><rect x={398} y={30} width={66} height={66} />
            </g>
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <path d="M24,38 L74,88" /><path d="M58,88 L74,88 L74,72" />
              <path d="M123,30 L123,96 M90,63 L156,63" />
              <path d="M172,88 L222,38" /><path d="M172,52 L172,68 L188,68" />
              <circle cx={283} cy={63} r={30} /><path d="M283,33 L283,93 M283,63 L259,63" />
              <circle cx={357} cy={63} r={30} /><path d="M357,33 L357,93 M357,63 L336,42 M357,63 L378,42" />
              <text x={431} y={70} fontSize={30} fill="#1f2937" textAnchor="middle" fontWeight="bold">?</text>
            </g>
            <g stroke="#f59e0b" strokeWidth={3.4} opacity="0.75" fill="none">
              <path d="M20,34 L78,92" /><path d="M123,26 L123,100" /><path d="M168,92 L226,34" />
              <path d="M266,46 L300,80" /><path d="M357,26 L357,100" /><path d="M420,42 L442,64" />
            </g>
            <g fill="#6b7280" fontSize={11} textAnchor="middle">
              <text x={49} y={116} fill="#6b7280">反斜 \</text><text x={123} y={116} fill="#6b7280">竖直</text><text x={197} y={116} fill="#6b7280">正斜 /</text>
              <text x={283} y={116} fill="#6b7280">反斜 \</text><text x={357} y={116} fill="#6b7280">竖直</text><text x={6} y={116.0} fill="#10b981" textAnchor="start">正斜 /？</text>
            </g>
            <text x={230} y={140} fontSize={12} fill="#f59e0b" textAnchor="middle">对称轴方向：顺时针 45°（反斜 → 竖直 → 正斜 循环）</text>
          </g>
      </svg><figcaption>图：题干五幅图形（橙色为对称轴）</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 406 129" role="img" aria-label="四个选项均为圆内分割图形，A竖直轴、B竖直轴、C水平轴、D正斜轴">
      <g transform="translate(0,10)">
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={72} y={12} width={66} height={66} /><rect x={154} y={12} width={66} height={66} />
              <rect x={236} y={12} width={66} height={66} /><rect x={318} y={12} width={66} height={66} />
              <circle cx={105} cy={45} r={30} /><path d="M105,15 L105,75 M105,45 L83,66 M105,45 L127,66" />
              <circle cx={187} cy={45} r={30} /><path d="M187,15 L187,75 M187,45 L165,22 M187,45 L209,22" />
              <circle cx={269} cy={45} r={30} /><path d="M239,45 L299,45" />
              <circle cx={351} cy={45} r={30} /><path d="M330,24 L372,66 M351,45 L330,24 M351,45 L372,66" />
              <path d="M330,24 L351,24" />
            </g>
            <g stroke="#f59e0b" strokeWidth={3.4} opacity="0.7" fill="none">
              <path d="M105,15 L105,75" /><path d="M187,15 L187,75" /><path d="M239,45 L299,45" /><path d="M330,24 L372,66" />
            </g>
            <text x={105} y={94} fontSize={13} fill="#1f2937" textAnchor="middle">A</text>
            <text x={187} y={94} fontSize={13} fill="#1f2937" textAnchor="middle">B</text>
            <text x={269} y={94} fontSize={13} fill="#1f2937" textAnchor="middle">C</text>
            <text x={351} y={94} fontSize={13} fill="#1f2937" textAnchor="middle">D</text>
            <text x={351.0} y={70.0} fontSize={15} fill="#10b981" textAnchor="middle">✓</text>
          </g>
      </svg><figcaption>选项 A / B / C / D（橙色为对称轴）</figcaption></figure>
          <ExampleAnswer><b>解析：</b>五幅图都是"1 条对称轴"的图形，方向不好数数量，就<b>看对称轴方向</b>：第 1、2、3 幅（正方形组）依次是"反斜 \ → 竖直 → 正斜 /"，即<b>顺时针旋转 45°</b>；第 4、5 幅（圆形组）重复同一循环："反斜 \ → 竖直"，所以第 6 幅应为<b>正斜 /</b>。选项中 A、B 为竖直轴，C 为水平轴，只有 D 的对称轴是正斜 "/"。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      
      <Example>
        <ExampleHeader>📝 例题4 · 对称轴数量（2025 江苏）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使图形呈现一定的规律性：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 480 157.4" role="img" aria-label="题干五幅图形对称轴数量依次为六、五、四、三、二，第六幅为问号">
      <g transform="translate(6,19.3)">
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={16} y={30} width={66} height={66} /><rect x={90} y={30} width={66} height={66} /><rect x={164} y={30} width={66} height={66} />
              <rect x={238} y={30} width={66} height={66} /><rect x={312} y={30} width={66} height={66} /><rect x={386} y={30} width={66} height={66} />
              <path d="M49,31 L75,76 L23,76 Z" /><path d="M49,95 L23,50 L75,50 Z" />
              <path d="M123,42 L142,52 L144,74 L129,88 L107,88 L92,74 L94,52 Z" />
              <rect x={173} y={39} width={48} height={48} /><circle cx={197} cy={63} r={24} />
              <circle cx={271} cy={63} r={30} /><path d="M271,33 L297,78 L245,78 Z" />
              <path d="M345,33 L353,55 L375,63 L353,71 L345,93 L337,71 L315,63 L337,55 Z" />
              <text x={419} y={70} fontSize={28} fill="#1f2937" textAnchor="middle" fontWeight="bold">?</text>
            </g>
            <g fill="#f59e0b" fontSize={13} textAnchor="middle">
              <text x={49} y={22} fill="#f59e0b">6</text><text x={123} y={22} fill="#f59e0b">5</text><text x={197} y={22} fill="#f59e0b">4</text>
              <text x={271} y={22} fill="#f59e0b">3</text><text x={345} y={22} fill="#f59e0b">2</text><text x={419} y={22} fill="#f59e0b">1</text>
            </g>
            <text x={49} y={114} fontSize={11} fill="#6b7280" textAnchor="middle">六角星</text>
            <text x={123} y={114} fontSize={11} fill="#6b7280" textAnchor="middle">正五边形</text>
            <text x={197} y={114} fontSize={11} fill="#6b7280" textAnchor="middle">正方形+内切圆</text>
            <text x={271} y={114} fontSize={11} fill="#6b7280" textAnchor="middle">圆+内接三角形</text>
            <text x={345} y={114} fontSize={11} fill="#6b7280" textAnchor="middle">四角星</text>
            <text x={419} y={114} fontSize={11} fill="#10b981" textAnchor="middle">?</text>
            <text x={230} y={14} fontSize={12} fill="#f59e0b" textAnchor="middle">对称轴数量</text>
          </g>
      </svg><figcaption>图：题干五幅图形（上方数字为对称轴数量）</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 413.5 139.4" role="img" aria-label="四个选项：两个交叉线段、圆加水平弦、矩形内蝴蝶结、三叶片，对称轴数量分别为二、一、二、三">
      <g transform="translate(0,10)">
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={72} y={12} width={66} height={66} /><rect x={154} y={12} width={66} height={66} />
              <rect x={236} y={12} width={66} height={66} /><rect x={318} y={12} width={66} height={66} />
              <path d="M80,20 L130,70 M130,20 L80,70 M105,20 L105,70" />
              <circle cx={187} cy={45} r={30} /><path d="M160,58 L214,58" />
              <path d="M244,20 L294,20 L294,70 L244,70 Z" /><path d="M269,45 C255,26 244,30 244,45 C244,60 255,64 269,45 C283,26 294,30 294,45 C294,60 283,64 269,45 Z" />
              <path d="M351,45 C333,22 366,14 369,38 C371,15 403,25 386,45 C404,62 372,74 369,50 C365,74 333,68 351,45 Z" />
            </g>
            <g fill="#f59e0b" fontSize={12} textAnchor="middle">
              <text x={105} y={94} fill="#f59e0b">2</text><text x={187} y={94} fill="#f59e0b">1</text>
              <text x={269} y={94} fill="#f59e0b">2</text><text x={351} y={94} fill="#f59e0b">3</text>
            </g>
            <text x={105.0} y={104.4} fontSize={13} fill="#1f2937" textAnchor="middle">A</text>
            <text x={187.0} y={104.4} fontSize={13} fill="#1f2937" textAnchor="middle">B</text>
            <text x={269.0} y={104.4} fontSize={13} fill="#1f2937" textAnchor="middle">C</text>
            <text x={351.0} y={104.4} fontSize={13} fill="#1f2937" textAnchor="middle">D</text>
            <text x={187.0} y={68.0} fontSize={15} fill="#10b981" textAnchor="middle">✓</text>
          </g>
      </svg><figcaption>选项 A / B / C / D（橙色数字为对称轴数量）</figcaption></figure>
          <ExampleAnswer><b>解析：</b>每幅图都有<b>多条对称轴</b>，方向不易描述，转看<b>对称轴数量</b>：六角星 6 条 → 正五边形 5 条 → 正方形（含内切圆）4 条 → 圆内接三角形 3 条 → 四角星 2 条，依次递减 1。所以问号处应有 <b>1 条</b>对称轴。A（两交叉线段）2 条、C（矩形内蝴蝶结）2 条、D（三叶片）3 条，只有 B（圆 + 一条水平弦）只有 1 条竖直对称轴。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      
      <Example>
        <ExampleHeader>📝 例题5 · 对称轴细化·内外拆分（2023 国考）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 480 148.5" role="img" aria-label="题干五幅图形均由一个轴对称外框和一个内部中心对称小图形组成，第六幅为问号">
      <g transform="translate(6,0)">
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={16} y={30} width={66} height={66} /><rect x={90} y={30} width={66} height={66} /><rect x={164} y={30} width={66} height={66} />
              <rect x={238} y={30} width={66} height={66} /><rect x={312} y={30} width={66} height={66} /><rect x={386} y={30} width={66} height={66} />
              <path d="M49,38 L73,86 L25,86 Z" /><path d="M42,70 L58,70 L54,82 L38,82 Z" />
              <path d="M123,40 L132,60 L152,60 L136,73 L142,92 L123,80 L104,92 L110,73 L94,60 L114,60 Z" />
              <path d="M123,60 L136,55 L140,66 L127,71 Z" />
              <path d="M176,56 L188,56 L188,72 L232,72 L232,86 L188,86 L188,88 L176,88 L176,72 L196,72 L196,72 Z" stroke="none" />
              <path d="M176,58 L198,58 L198,72 L232,72 M232,72 L232,84 L198,84 L198,70 L176,70 Z" stroke="none" />
              <path d="M186,58 L198,58 L198,72 L232,72 L232,84 L198,84 L198,70 L186,70 Z" />
              <path d="M274,90 A26,26 0 0 1 274,40 L274,90 Z" />
              <circle cx={266} cy={56} r={3} /><circle cx={281} cy={70} r={3} />
              <path d="M262,66 L285,50 M262,76 L285,60" strokeWidth={1.6} />
              <path d="M336,60 C336,44 356,44 356,60 M336,60 L336,86 L356,86 L356,60 M340,72 L352,72 M340,72 L346,78 M340,72 L346,66 M352,72 L346,78 M352,72 L346,66" />
              <text x={419} y={70} fontSize={28} fill="#1f2937" textAnchor="middle" fontWeight="bold">?</text>
            </g>
            <g fill="#2563eb" fontSize={11} textAnchor="middle">
              <text x={49} y={112} fill="#2563eb">外：轴对称</text><text x={123} y={112} fill="#2563eb">外：轴对称</text><text x={197} y={112} fill="#2563eb">外：轴对称</text>
              <text x={271} y={112} fill="#2563eb">外：轴对称</text><text x={345} y={112} fill="#2563eb">外：轴对称</text>
              <text x={49.0} y={124.4} fill="#7c3aed">内：中心对称</text><text x={123.0} y={124.4} fill="#7c3aed">内：中心对称</text><text x={197.0} y={124.4} fill="#7c3aed">内：中心对称</text>
              <text x={271.0} y={124.4} fill="#7c3aed">内：中心对称</text><text x={345.0} y={124.4} fill="#7c3aed">内：中心对称</text>
            </g>
          </g>
      </svg><figcaption>图：题干五幅图形（每幅＝轴对称外框 ＋ 中心对称内芯）</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 406 132.5" role="img" aria-label="四个选项：双向箭头、半圆内折线、非轴对称扇形加圆、等腰直角三角形内折线">
      <g transform="translate(0,7.5)">
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={72} y={16} width={66} height={66} /><rect x={154} y={16} width={66} height={66} />
              <rect x={236} y={16} width={66} height={66} /><rect x={318} y={16} width={66} height={66} />
              <path d="M105,49 L86,34 L86,44 L124,44 L124,34 L105,49 Z M105,49 L124,64 L124,54 L86,54 L86,64 Z" />
              <path d="M187,78 A30,30 0 0 1 187,18 Z" /><path d="M187,78 L157,78 A30,30 0 0 1 187,18" stroke="none" />
              <path d="M157,78 L187,78 M187,78 A30,30 0 0 1 187,18 L157,78" stroke="none" />
              <path d="M157,78 L187,78 A30,30 0 0 0 157,48" stroke="none" />
              <path d="M187,78 L217,78" stroke="none" />
              <path d="M187,78 A30,30 0 0 1 187,18 L187,78 Z" />
              <path d="M175,60 L175,72 L186,66 L192,72 L198,60 L186,66 Z" strokeWidth={1.6} />
              <path d="M269,20 L269,78 L302,78 A33,33 0 0 0 269,20 Z" />
              <circle cx={281} cy={62} r={7} />
              <path d="M351,20 L351,78 M351,20 L384,20 L351,78 Z" />
              <path d="M356,32 L368,32 L364,40 L374,40 L368,48" strokeWidth={1.6} />
            </g>
            <text x={105} y={100} fontSize={13} fill="#1f2937" textAnchor="middle">A</text>
            <text x={187} y={100} fontSize={13} fill="#1f2937" textAnchor="middle">B</text>
            <text x={269} y={100} fontSize={13} fill="#1f2937" textAnchor="middle">C</text>
            <text x={351} y={100} fontSize={13} fill="#1f2937" textAnchor="middle">D</text>
            <text x={351.0} y={80.0} fontSize={15} fill="#10b981" textAnchor="middle">✓</text>
          </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>题干每幅图都是<b>一个轴对称外框</b>（等腰三角形、五角星、左箭头、半圆、"浴缸形"）里面套着<b>一个中心对称的小图形</b>（平行四边形、Z 形折线、小箭头、"%"、双向箭头）。<b>外轴对称、内中心对称</b>是本题的规律。<br />A 只有一层双向箭头，没有"内外两层"结构；B 内部是 W 形折线，不是中心对称图形；C 外部"扇形"两条直角边长短不等，整体不是轴对称图形（干扰项）；D 外部为等腰直角三角形（轴对称），内部是与题干同类的中心对称折线。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      </Block>
      
      <Block>
      <BlockTitle>4. 对称性·拔高：黑白块（黑球/白球）的"加密"与"解密"</BlockTitle>
      <p>出题者最爱把对称性藏进"黑白块"里——表面看是一堆随手撒的小球，其实是刻意排的。</p>
      <Callout variant="key">
      <b>加密：</b>随意的分布　→　（出题者刻意规则）　→　<b>对称性</b>
      </Callout>
      <p><b>解密（一）先识别</b>——看清楚到底是"谁"对称：</p>
      <PointList>
      <li>1. <b>整体对称</b>（黑球+白球一起看）；</li>
      <li>2. <b>仅黑色对称</b>（只看黑球）；</li>
      <li>3. <b>仅白色对称</b>（只看白球）。黑色、白色往往<b>交替出现</b>（一幅黑对称、一幅白对称）。</li>
      </PointList>
      <p><b>解密（二）后细化</b>：</p>
      <PointList>
      <li>1. 只有<b>一条对称轴</b>时，优先考虑<b>对称轴方向</b>；</li>
      <li>2. 方向没答案，考虑<b>对称轴与黑球个数的结合</b>：数"黑球整体个数"或"<b>对称轴穿过的小黑球个数</b>"；</li>
      <li>3. 出现<b>多个规则图形</b>时，考虑<b>对称轴之间的位置关系</b>（平行、垂直、重合）。</li>
      </PointList>
      
      <Example>
        <ExampleHeader>📝 例题6 · 黑白球·对称轴穿过小黑球的个数（2025 国考）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 451 329" role="img" aria-label="六个五乘五黑白球方阵，红色线为小球部分的对称轴，①②④轴上穿过4个黑球，③⑤⑥轴上穿过2个黑球">
            <text x={95.0} y={40.0} fontSize={13} fill="#6b7280" textAnchor="middle">①</text>
            <circle cx={51.0} cy={59.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={73.0} cy={59.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={95.0} cy={59.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={117.0} cy={59.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={139.0} cy={59.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={51.0} cy={81.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={73.0} cy={81.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={95.0} cy={81.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={117.0} cy={81.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={139.0} cy={81.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={51.0} cy={103.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={73.0} cy={103.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={95.0} cy={103.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={117.0} cy={103.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={139.0} cy={103.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={51.0} cy={125.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={73.0} cy={125.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={95.0} cy={125.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={117.0} cy={125.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={139.0} cy={125.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={51.0} cy={147.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={73.0} cy={147.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={95.0} cy={147.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={117.0} cy={147.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={139.0} cy={147.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <line x1={124.1} y1={51.9} x2={43.9} y2={132.1} stroke="#ef4444" strokeWidth={2.6} />
            <text x={235.0} y={40.0} fontSize={13} fill="#6b7280" textAnchor="middle">②</text>
            <circle cx={191.0} cy={59.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={213.0} cy={59.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={235.0} cy={59.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={257.0} cy={59.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={279.0} cy={59.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={191.0} cy={81.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={213.0} cy={81.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={235.0} cy={81.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={257.0} cy={81.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={279.0} cy={81.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={191.0} cy={103.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={213.0} cy={103.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={235.0} cy={103.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={257.0} cy={103.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={279.0} cy={103.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={191.0} cy={125.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={213.0} cy={125.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={235.0} cy={125.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={257.0} cy={125.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={279.0} cy={125.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={191.0} cy={147.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={213.0} cy={147.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={235.0} cy={147.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={257.0} cy={147.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={279.0} cy={147.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <line x1={181.0} y1={81.0} x2={289.0} y2={81.0} stroke="#ef4444" strokeWidth={2.6} />
            <text x={375.0} y={40.0} fontSize={13} fill="#6b7280" textAnchor="middle">③</text>
            <circle cx={331.0} cy={59.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={353.0} cy={59.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={375.0} cy={59.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={397.0} cy={59.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={419.0} cy={59.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={331.0} cy={81.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={353.0} cy={81.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={375.0} cy={81.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={397.0} cy={81.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={419.0} cy={81.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={331.0} cy={103.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={353.0} cy={103.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={375.0} cy={103.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={397.0} cy={103.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={419.0} cy={103.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={331.0} cy={125.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={353.0} cy={125.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={375.0} cy={125.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={397.0} cy={125.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={419.0} cy={125.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={331.0} cy={147.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={353.0} cy={147.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={375.0} cy={147.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={397.0} cy={147.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={419.0} cy={147.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <line x1={404.1} y1={51.9} x2={323.9} y2={132.1} stroke="#ef4444" strokeWidth={2.6} />
            <text x={95.0} y={190.0} fontSize={13} fill="#6b7280" textAnchor="middle">④</text>
            <circle cx={51.0} cy={209.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={73.0} cy={209.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={95.0} cy={209.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={117.0} cy={209.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={139.0} cy={209.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={51.0} cy={231.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={73.0} cy={231.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={95.0} cy={231.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={117.0} cy={231.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={139.0} cy={231.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={51.0} cy={253.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={73.0} cy={253.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={95.0} cy={253.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={117.0} cy={253.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={139.0} cy={253.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={51.0} cy={275.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={73.0} cy={275.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={95.0} cy={275.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={117.0} cy={275.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={139.0} cy={275.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={51.0} cy={297.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={73.0} cy={297.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={95.0} cy={297.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={117.0} cy={297.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={139.0} cy={297.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <line x1={95.0} y1={199.0} x2={95.0} y2={307.0} stroke="#ef4444" strokeWidth={2.6} />
            <text x={235.0} y={190.0} fontSize={13} fill="#6b7280" textAnchor="middle">⑤</text>
            <circle cx={191.0} cy={209.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={213.0} cy={209.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={235.0} cy={209.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={257.0} cy={209.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={279.0} cy={209.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={191.0} cy={231.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={213.0} cy={231.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={235.0} cy={231.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={257.0} cy={231.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={279.0} cy={231.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={191.0} cy={253.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={213.0} cy={253.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={235.0} cy={253.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={257.0} cy={253.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={279.0} cy={253.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={191.0} cy={275.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={213.0} cy={275.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={235.0} cy={275.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={257.0} cy={275.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={279.0} cy={275.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={191.0} cy={297.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={213.0} cy={297.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={235.0} cy={297.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={257.0} cy={297.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={279.0} cy={297.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <line x1={181.0} y1={253.0} x2={289.0} y2={253.0} stroke="#ef4444" strokeWidth={2.6} />
            <text x={375.0} y={190.0} fontSize={13} fill="#6b7280" textAnchor="middle">⑥</text>
            <circle cx={331.0} cy={209.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={353.0} cy={209.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={375.0} cy={209.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={397.0} cy={209.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={419.0} cy={209.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={331.0} cy={231.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={353.0} cy={231.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={375.0} cy={231.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={397.0} cy={231.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={419.0} cy={231.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={331.0} cy={253.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={353.0} cy={253.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={375.0} cy={253.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={397.0} cy={253.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={419.0} cy={253.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={331.0} cy={275.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={353.0} cy={275.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={375.0} cy={275.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={397.0} cy={275.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={419.0} cy={275.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={331.0} cy={297.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={353.0} cy={297.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={375.0} cy={297.0} r={10.0} fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
              <circle cx={397.0} cy={297.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={419.0} cy={297.0} r={10.0} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <line x1={353.0} y1={199.0} x2={353.0} y2={307.0} stroke="#ef4444" strokeWidth={2.6} />
          </svg><figcaption>图：题干六个图形（红色为黑球部分的对称轴）</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 331.3 147.5" role="img" aria-label="选项分组文字">
      <g transform="translate(0,9)">
            <text x={230} y={28} fontSize={16} fill="#1f2937" textAnchor="middle">A．①②⑥，③④⑤</text>
            <text x={230} y={58} fontSize={16} fill="#10b981" textAnchor="middle">B．①②④，③⑤⑥　✓</text>
            <text x={230} y={88} fontSize={16} fill="#1f2937" textAnchor="middle">C．①③⑥，②④⑤</text>
            <text x={230.0} y={113.5} fontSize={16} fill="#1f2937" textAnchor="middle">D．①④⑤，②③⑥</text>
          </g>
      </svg><figcaption>选项 A / B / C / D（分组分类题选项为文字）</figcaption></figure>
          <ExampleAnswer><b>解析：</b>每个图形都是 5×5 的黑白球方阵。只把<b>黑球</b>挑出来看，它们都能找到一条对称轴（图中红线）——<br />① 反斜对角线（轴上 4 个黑球）；② 第 2 行水平线（轴上 4 个黑球）；③ 反斜对角线（轴上 2 个黑球）；④ 第 3 列竖直线（轴上 4 个黑球）；⑤ 第 3 行水平线（轴上 2 个黑球）；⑥ 第 2 列竖直线（轴上 2 个黑球）。<br />即 <b>①②④ 的对称轴穿过 4 个小黑球，③⑤⑥ 的对称轴穿过 2 个小黑球</b>。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      </Block>
      
      <Block>
      <BlockTitle>5. 曲直性：出现曲线（1/2、2/3）就看它</BlockTitle>
      <p><b>出题者作图</b>：题干里出现曲线，且大致有 1/2 或 2/3 的图形带曲线。<br />
      <b>解题思路</b>：每幅图图案不同 → 出现 1/2、2/3 曲线 → 想<b>曲直性</b>。</p>
      <Callout variant="key">
      <b>基础考点：区分三种情况</b>——<b>全直线</b> / <b>全曲线</b> / <b>曲线 + 直线</b>。
      </Callout>
      <Callout variant="tip">
      <b>高频区分：</b>"全直线"与"曲线 + 直线"最好考，出题者就爱在这里埋坑。<br />
      <b>灵活处理：</b>如果分不出"全曲线"和"曲线+直线"，可以<b>归为一类——有曲线</b>。<br />
      <b>新趋势：</b>题干里"<b>有无曲线</b>"也能作为分类依据。
      </Callout>
      <Callout variant="formula"><span className="formula">1/2、2/3 曲线 ——→ 曲直性（全直线｜全曲线｜曲线+直线）</span></Callout>
      
      <Example>
        <ExampleHeader>📝 例题7 · 曲直性·分组分类（2025 联考）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 464 327.4" role="img" aria-label="六个图形：房子、同心圆、十字花、太阳、圆内交叉线、L形方框">
      <g transform="translate(2,8)">
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={20} y={14} width={130} height={130} /><rect x={165} y={14} width={130} height={130} /><rect x={310} y={14} width={130} height={130} />
              <rect x={20} y={158} width={130} height={130} /><rect x={165} y={158} width={130} height={130} /><rect x={310} y={158} width={130} height={130} />
              <path d="M85,34 L113,62 L113,132 L57,132 L57,62 Z" /><path d="M57,74 L113,74" />
              <circle cx={230} cy={79} r={40} /><circle cx={230} cy={79} r={21} />
              <path d="M375,24 L375,60 L410,60 L410,78 L432,78 L432,96 L410,96 L410,114 L375,114 L375,134 L356,134 L356,114 L340,114 L340,96 L318,96 L318,78 L340,78 L340,60 L356,60 L356,24 Z" strokeWidth={1.8} />
              <path d="M352,70 L388,70 L388,86 L352,86 Z" strokeWidth={1.6} />
              <circle cx={85} cy={223} r={30} />
              <path d="M85,193 L85,175 M85,253 L85,271 M55,223 L37,223 M115,223 L133,223 M64,202 L51,189 M106,202 L119,189 M64,244 L51,257 M106,244 L119,257" />
              <circle cx={230} cy={223} r={36} /><path d="M205,198 L255,248 M255,198 L205,248" />
              <path d="M375,172 L375,232 L405,232 L405,205 L432,205 L432,282 L348,282 L348,238 L375,238 Z" />
            </g>
            <g fill="#6b7280" fontSize={13} textAnchor="middle">
              <text x={85} y={160} fill="#6b7280">①</text><text x={230} y={160} fill="#6b7280">②</text><text x={375} y={160} fill="#6b7280">③</text>
              <text x={85.0} y={294.4} fill="#6b7280">④</text><text x={230.0} y={294.4} fill="#6b7280">⑤</text><text x={375.0} y={294.4} fill="#6b7280">⑥</text>
            </g>
          </g>
      </svg><figcaption>图：题干六个图形</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 327.0 132" role="img" aria-label="选项分组文字">
      <g transform="translate(0,13)">
            <text x={230} y={24} fontSize={15} fill="#1f2937" textAnchor="middle">A．①②③，④⑤⑥</text>
            <text x={230} y={46} fontSize={15} fill="#1f2937" textAnchor="middle">B．①③⑤，②④⑥</text>
            <text x={230} y={68} fontSize={15} fill="#10b981" textAnchor="middle">C．①③⑥，②④⑤　✓</text>
            <text x={230} y={94} fontSize={15} fill="#1f2937" textAnchor="middle">D．①④⑥，②③⑤</text>
          </g>
      </svg><figcaption>选项 A / B / C / D（分组分类题选项为文字）</figcaption></figure>
          <ExampleAnswer><b>解析：</b>六幅图都是"图案各不相同、且出现了曲线"。按<b>曲直性</b>分：①房子、③十字花、⑥方框折线——<b>全由直线构成</b>；②同心圆、④太阳（圆 + 三角光芒）、⑤圆内交叉线——<b>都含有曲线</b>（④⑤为曲线+直线，②为全曲线，按"有曲线/无曲线"归为一类）。<br />即 <b>①③⑥ 全是直线，②④⑤ 含有曲线</b>。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      
      <Example>
        <ExampleHeader>📝 例题8 · 曲直性·九宫格（2025 联考）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 380.0 357" role="img" aria-label="三乘三九宫格：第一列全曲线，第二列全直线，第三列曲线加直线，右下角为问号">
      <g transform="translate(0,8)">
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={100} y={34} width={86} height={86} /><rect x={186} y={34} width={86} height={86} /><rect x={272} y={34} width={86} height={86} />
              <rect x={100} y={120} width={86} height={86} /><rect x={186} y={120} width={86} height={86} /><rect x={272} y={120} width={86} height={86} />
              <rect x={100} y={206} width={86} height={86} /><rect x={186} y={206} width={86} height={86} /><rect x={272} y={206} width={86} height={86} />
            </g>
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <circle cx={143} cy={77} r={30} /><path d="M126,54 C142,64 144,90 126,100 M160,54 C144,64 142,90 160,100" />
              <path d="M241,44 L219,108 M200,104 L258,104 L252,113 L206,113 Z" />
              <circle cx={315} cy={77} r={30} /><path d="M315,62 L330,77 L315,92 L300,77 Z" />
              <path d="M315,62 L315,48 M330,77 L344,77 M315,92 L315,106 M300,77 L286,77" />
              <path d="M136,124 C128,136 128,150 132,162 C134,170 134,180 134,190 L152,190 C152,180 152,170 154,162 C158,150 158,136 150,124 Z" />
              <circle cx={162} cy={180} r={14} /><circle cx={158} cy={176} r={3} fill="#1f2937" stroke="none" /><circle cx={167} cy={185} r={3} fill="#1f2937" stroke="none" />
              <path d="M196,152 L204,152 L204,174 L196,174 Z M210,144 L220,144 L220,182 L210,182 Z M220,158 L240,158 L240,168 L220,168 Z M240,144 L250,144 L250,182 L240,182 Z M256,152 L264,152 L264,174 L256,174 Z" />
              <path d="M308,128 C332,140 332,186 308,198 M308,128 L308,198 M300,163 L340,163 M332,157 L341,163 L332,169 Z" />
              <circle cx={143} cy={249} r={30} /><circle cx={143} cy={249} r={12} /><circle cx={152} cy={240} r={4} fill="#1f2937" stroke="none" />
              <path d="M206,220 L206,282 M252,220 L252,282 M198,282 L260,282 M206,232 L252,232 M206,244 L252,244" />
              <text x={315} y={258} fontSize={26} fill="#1f2937" textAnchor="middle" fontWeight="bold">?</text>
            </g>
            <g fill="#f59e0b" fontSize={12} textAnchor="middle">
              <text x={143} y={26} fill="#f59e0b">全曲线</text><text x={229} y={26} fill="#f59e0b">全直线</text><text x={315} y={26} fill="#f59e0b">曲线+直线</text>
              <text x={143} y={324} fill="#f59e0b">全曲线</text><text x={229} y={324} fill="#f59e0b">全直线</text><text x={315} y={324} fill="#10b981">曲线+直线？</text>
            </g>
            <g fill="#6b7280" fontSize={11} textAnchor="middle">
              <text x={66} y={81} fill="#6b7280">网球</text><text x={66} y={167} fill="#6b7280">保龄球</text><text x={66} y={253} fill="#6b7280">台球</text>
              <text x={229} y={81} fill="#6b7280">撑杆</text><text x={229} y={167} fill="#6b7280">哑铃</text><text x={315} y={167} fill="#6b7280">弓箭</text>
              <text x={229} y={253} fill="#6b7280">栏架</text>
            </g>
          </g>
      </svg><figcaption>图：题干九宫格（右侧三列为同一行，图取自讲义）</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 438 143" role="img" aria-label="四个选项：陀螺、排球、靶心、羽毛球">
      <g transform="translate(0,8)">
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={72} y={14} width={80} height={80} /><rect x={160} y={14} width={80} height={80} />
              <rect x={248} y={14} width={80} height={80} /><rect x={336} y={14} width={80} height={80} />
              <path d="M106,26 L118,26 M112,26 L112,42 M100,42 L124,42 L132,84 L92,84 Z M112,42 L112,84" />
              <circle cx={200} cy={54} r={30} /><path d="M200,25 C186,40 186,68 200,83 M168,46 C184,38 216,38 232,46 M174,72 C186,82 214,82 226,72" strokeWidth={1.6} />
              <circle cx={288} cy={54} r={32} /><circle cx={288} cy={54} r={20} /><circle cx={288} cy={54} r={8} />
              <path d="M364,68 C354,46 360,26 376,18 C392,26 398,46 388,68 Z" />
              <path d="M370,66 C364,48 368,30 376,22 M382,66 C388,48 384,30 376,22 M376,68 L376,22" />
              <circle cx={376} cy={78} r={12} /><path d="M364,78 L388,78" />
            </g>
            <text x={112} y={110} fontSize={13} fill="#1f2937" textAnchor="middle">A</text>
            <text x={200} y={110} fontSize={13} fill="#1f2937" textAnchor="middle">B</text>
            <text x={288} y={110} fontSize={13} fill="#1f2937" textAnchor="middle">C</text>
            <text x={376} y={110} fontSize={13} fill="#1f2937" textAnchor="middle">D</text>
            <text x={376.0} y={92.0} fontSize={15} fill="#10b981" textAnchor="middle">✓</text>
          </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>九宫格里的九个图案各不相同，而且都是<b>生活化的体育用品</b>，优先想属性。按<b>列</b>看曲直性：第一列（网球、保龄球、台球）以曲线为主；第二列（撑杆跳、哑铃、栏架）<b>全是直线</b>；第三列（足球、弓箭）是<b>曲线 + 直线</b>。所以问号处应是"曲线 + 直线"的图形。<br />A（陀螺）基本是直线，B（排球）是曲线，C（靶心）是曲线，D（羽毛球）既有曲线（球头）又有直线（羽毛），符合"曲线 + 直线"。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      </Block>
      
      <Block>
      <BlockTitle>6. 开闭性：图形"生活化"或"有缺口"就想它</BlockTitle>
      <p><b>出题者作图</b>：生活化图形，或图形上有<b>明显缺口</b>。<br />
      <b>解题思路</b>：每幅图图案不同 → 图形生活化 → 想<b>开闭性</b>。</p>
      <Callout variant="key">
      <b>基础考点：区分三种情况</b>——<b>全开放</b>（如 C）、<b>全封闭</b>（如 O）、<b>半开半封闭</b>（如 Q）。
      <PointList>
      <li><b>有面</b>时：图形<b>外部有线</b> → <b>半开半封闭</b>；图形<b>外部无线</b>（外面是光滑的封闭轮廓） → <b>全封闭</b>；</li>
      <li><b>没面</b>（围不出任何封闭区域） → <b>全开放</b>。</li>
      </PointList>
      </Callout>
      <Callout variant="tip"><b>灵活处理：</b>分不清"全封闭"和"半开半封"时，可以<b>归为一类——有面</b>；<b>特殊情况：没有面，也能分类</b>（全开放）。</Callout>
      
      <Example>
        <ExampleHeader>📝 例题9 · 开闭性·分组分类（2024 山东）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 464 327.4" role="img" aria-label="六个生活化图形：手表、项链、梳子、眼镜、钥匙、灯泡">
      <g transform="translate(2,8)">
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={20} y={14} width={130} height={130} /><rect x={165} y={14} width={130} height={130} /><rect x={310} y={14} width={130} height={130} />
              <rect x={20} y={158} width={130} height={130} /><rect x={165} y={158} width={130} height={130} /><rect x={310} y={158} width={130} height={130} />
              <circle cx={85} cy={82} r={25} /><path d="M85,82 L85,66 M85,82 L97,90" />
              <path d="M70,59 L62,42 L108,42 L100,59 Z" />
              <path d="M70,105 L70,132 L100,132 L100,105 Z" />
              <path d="M212,34 L230,62 L248,34 Z" />
              <path d="M230,62 C196,84 208,130 254,130 C296,130 306,96 288,72" />
              <path d="M288,72 C306,96 296,130 254,130" />
              <path d="M232,66 C250,80 262,96 264,110" />
              <path d="M368,34 L368,132 L430,132 L430,34 Z" />
              <path d="M372,52 L426,52 M372,60 L426,60 M372,68 L426,68 M372,76 L426,76 M372,84 L426,84 M372,92 L426,92 M372,100 L426,100 M372,108 L426,108" strokeWidth={1.2} />
              <path d="M368,34 C390,44 408,44 430,34" />
              <path d="M41,238 L61,238 L69,248 L69,266 L61,276 L41,276 L33,266 L33,248 Z" />
              <path d="M33,248 L21,236" />
              <path d="M61,240 L78,240" />
              <path d="M78,240 L98,240 L106,250 L106,268 L98,278 L78,278 L78,240" />
              <path d="M106,250 L118,238" />
              <circle cx={230} cy={196} r={20} />
              <path d="M230,216 L230,282 M230,282 L244,282 L244,264 L232,264 L232,248 L244,248 L244,232" />
              <circle cx={375} cy={210} r={26} />
              <path d="M363,218 L367,200 L373,218 L379,200 L385,218 L389,200" />
              <path d="M363,236 L387,236 L384,266 L366,266 Z" />
              <path d="M367,246 L383,246 M368,256 L382,256" strokeWidth={1.4} />
            </g>
            <g fill="#f59e0b" fontSize={12} textAnchor="middle">
              <text x={85} y={160} fill="#f59e0b">全封闭</text><text x={230} y={160} fill="#f59e0b">全封闭</text><text x={375} y={160} fill="#f59e0b">半开半封闭</text>
              <text x={85.0} y={294.4} fill="#f59e0b">半开半封闭</text><text x={230.0} y={294.4} fill="#f59e0b">半开半封闭</text><text x={375.0} y={294.4} fill="#f59e0b">全封闭</text>
            </g>
          </g>
      </svg><figcaption>图：题干六个图形（手表、项链、梳子、眼镜、钥匙、灯泡）</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 327.0 132" role="img" aria-label="选项分组文字">
      <g transform="translate(0,13)">
            <text x={230} y={24} fontSize={15} fill="#1f2937" textAnchor="middle">A．①②③，④⑤⑥</text>
            <text x={230} y={46} fontSize={15} fill="#1f2937" textAnchor="middle">B．①②④，③⑤⑥</text>
            <text x={230} y={68} fontSize={15} fill="#10b981" textAnchor="middle">C．①②⑥，③④⑤　✓</text>
            <text x={230} y={94} fontSize={15} fill="#1f2937" textAnchor="middle">D．①③④，②⑤⑥</text>
          </g>
      </svg><figcaption>选项 A / B / C / D（分组分类题选项为文字）</figcaption></figure>
          <ExampleAnswer><b>解析：</b>六个图形都是<b>生活化图形</b>，考虑<b>开闭性</b>。看"有没有面、面外面还有没有线"：<br />①手表（封闭表盘＋封闭表带）、②项链（封闭项圈＋封闭吊坠）、⑥灯泡（封闭灯罩内还有封闭的灯丝图形）——轮廓是<b>光滑封闭</b>的，为<b>全封闭</b>；<br />③梳子、④眼镜、⑤钥匙——都是"<b>有面，但面外还甩出一截线</b>"，为<b>半开半封闭</b>。<br />即 <b>①②⑥ 全封闭，③④⑤ 半开半封闭</b>。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      </Block>
      
      <Block>
      <BlockTitle>7. 图形间关系·基础：相离、包含、相交</BlockTitle>
      <p><b>命题者作图特点：极端情况</b>——要么<b>特别简单</b>（两三个几何图形摆在一起），要么<b>特别复杂</b>（一堆线条缠在一起）。看到"简单得不像话"或"复杂得看不清"，先想<b>图形间关系</b>。</p>
      <Callout variant="key">
      <b>三种基本关系（按"连接处"来区分）：</b>
      <PointList>
      <li><b>1. 相离</b>：两个图形互不接触；</li>
      <li><b>2. 包含</b>：一个图形完全在另一个图形内部（如圆内套三角形）；</li>
      <li><b>3. 相交</b>：分为【点】相交于点、相交于边（相切，老师口中的"一线牵"）、【面】相交于面。</li>
      </PointList>
      </Callout>
      <Callout variant="tip">
      <b>关键：通过"连接处"来区分</b>。两个图形贴在一起时，一定要分清是"<b>相交于点</b>"还是"<b>相切</b>"（线贴着线）——这正是出题者的第一个坑。
      </Callout>
      <p><b>常见考查方式：</b></p>
      <PointList>
      <li>① 区分"<b>交点</b>"和"<b>切点</b>"，以及连接处的<b>曲直性</b>；</li>
      <li>② 相交于<b>线</b>时：数<b>数量</b>；看<b>特点</b>——最长/最短、整体/局部、曲线/直线、线的位置（横/竖/斜）；</li>
      <li>③ 相交于<b>面</b>时：看<b>形状</b>（自身、外框）、<b>属性</b>（对称、曲直）、<b>面积</b>（是否为整体的 1/2）。</li>
      </PointList>
      
      <Example>
        <ExampleHeader>📝 例题10 · 相离 / 相切 / 相交（2023 北京）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>每道题包含两套图形和可供选择的 4 个图形。这两套图形具有某种相似性，也存在某种差异。要求你从四个选项中选择最适合取代问号的一个。正确的答案不仅使两套图形表现出最大的相似性，而且使第二套图形也表现出自己的特征。</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 472 176.3" role="img" aria-label="第一套：圆与折线相离、圆与折线相切、圆与图形相交；第二套：椭圆与折线相离、椭圆与折线相切，第六格为问号">
      <g transform="translate(2,0.2)">
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={20} y={40} width={66} height={66} /><rect x={86} y={40} width={66} height={66} /><rect x={152} y={40} width={66} height={66} />
              <rect x={250} y={40} width={66} height={66} /><rect x={316} y={40} width={66} height={66} /><rect x={382} y={40} width={66} height={66} />
              <circle cx={53} cy={73} r={18} /><path d="M20,104 L36,88 L24,80 L38,56" />
              <circle cx={119} cy={73} r={18} /><path d="M101,91 L137,91 M119,91 L119,104" />
              <circle cx={185} cy={73} r={18} /><path d="M162,104 L208,50 L202,104 Z" />
              <ellipse cx={288} cy={73} rx={20} ry={13} /><path d="M256,104 L268,92 L258,86 L266,66" />
              <ellipse cx={349} cy={73} rx={20} ry={13} /><path d="M329,86 L369,86 M349,86 L349,104" />
              <text x={415} y={82} fontSize={24} fill="#1f2937" textAnchor="middle" fontWeight="bold">?</text>
            </g>
            <g fill="#f59e0b" fontSize={11} textAnchor="middle">
              <text x={53} y={32} fill="#f59e0b">相离</text><text x={119} y={32} fill="#f59e0b">相切</text><text x={185} y={32} fill="#f59e0b">相交</text>
              <text x={283} y={32} fill="#f59e0b">相离</text><text x={349} y={32} fill="#f59e0b">相切</text><text x={415} y={32} fill="#f59e0b">？</text>
            </g>
            <text x={119} y={128} fontSize={12} fill="#2563eb" textAnchor="middle">第一套：相离 → 相切 → 相交</text>
            <text x={349} y={128} fontSize={12} fill="#7c3aed" textAnchor="middle">第二套：相离 → 相切 → ？</text>
            <text x={230} y={152} fontSize={12} fill="#6b7280" textAnchor="middle">第二套要"规律相似"，还要换上自己的元素（椭圆）</text>
          </g>
      </svg><figcaption>图：题干两套图形（每组各 3 格，末格为问号）</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 411 144" role="img" aria-label="四个选项：椭圆与折线相离、圆内包含折线、圆与折线相切、椭圆与折线相交">
      <g transform="translate(0,6)">
            <g stroke="#1f2937" strokeWidth={2} fill="none">
              <rect x={71} y={16} width={66} height={66} /><rect x={155} y={16} width={66} height={66} />
              <rect x={239} y={16} width={66} height={66} /><rect x={323} y={16} width={66} height={66} />
              <ellipse cx={108} cy={44} rx={18} ry={12} /><path d="M76,78 L88,68 L78,62 L86,46" />
              <circle cx={188} cy={49} r={26} /><path d="M188,36 L202,64 L174,64 Z" />
              <circle cx={272} cy={49} r={26} /><path d="M246,75 L298,75 M272,75 L272,90" />
              <ellipse cx={356} cy={45} rx={24} ry={15} /><path d="M326,84 L386,20 L368,84 Z" />
            </g>
            <text x={104} y={96} fontSize={13} fill="#1f2937" textAnchor="middle">A</text>
            <text x={188} y={96} fontSize={13} fill="#1f2937" textAnchor="middle">B</text>
            <text x={272} y={96} fontSize={13} fill="#1f2937" textAnchor="middle">C</text>
            <text x={356} y={96} fontSize={13} fill="#1f2937" textAnchor="middle">D</text>
            <g fill="#f59e0b" fontSize={11} textAnchor="middle">
              <text x={104} y={114} fill="#f59e0b">相离</text><text x={188} y={114} fill="#f59e0b">包含</text>
              <text x={272} y={114} fill="#f59e0b">相切</text><text x={356} y={114} fill="#10b981">相交 ✓</text>
            </g>
          </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>第一套图形中，圆与另一个小图形的关系依次是<b>相离 → 相切 → 相交</b>。第二套图形要与第一套"规律最大相似"：第 4 格<b>相离</b>、第 5 格<b>相切</b>，所以第 6 格应该是<b>相交</b>，并且换上第二套自己的元素——<b>椭圆</b>。<br />A 是相离、B 是包含、C 是相切，只有 D（椭圆与折线相交）符合"椭圆 + 相交"。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      </Block>
      
      <Block>
      <BlockTitle>8. 图形间关系·进阶：从"相接"往下钻</BlockTitle>
      <p>把上面的基础关系再往下细分，就是图形间关系的<b>进阶考法</b>：</p>
      <Callout variant="key">
      <b>简单：2~4 个图案</b>
      <PointList>
      <li><b>相离 / 包含</b>——直接看位置；</li>
      <li><b>相交于【点】</b>——区分切点/交点，以及连接处的曲直性；</li>
      <li><b>相交于【线】</b>——数量、长/短、整体/局部、曲线/直线、线的位置；</li>
      <li><b>相交于【面】</b>——形状（自身、外框）、属性（对称、曲直）、面积（1/2）。</li>
      </PointList>
      <b>复杂：共同图案 + 复杂图案</b> → 考虑<b>两者之间的位置关系</b>（局部出头、全部里面、=1/2 相交面、&gt;1/2 相交面）。
      </Callout>
      <p><b>黑白块专题</b>（与前面"对称性·拔高"配套记）：</p>
      <PointList>
      <li><b>加密</b>：把黑块分散成"随意的分布"；<b>解密</b>看作图复杂度——</li>
      <li>作图<b>简单（个数较少）</b> → 刻意排的"<b>对角、边边、隔 n 个</b>"；</li>
      <li>作图<b>复杂（个数较多）</b> → 考虑跟"<b>外框</b>"的关系（如相交 2 条边、相交 1 条边）；</li>
      <li><b>1 黑 + 多白</b>：① <b>黑面</b>与<b>外框</b>的关系（相交于几条线）；② <b>白面</b>与白面之间的位置关系；③ <b>黑面与白面</b>——有几个白面跟黑面连在一起、相交于几条线。</li>
      </PointList>
      
      <Example>
        <ExampleHeader>📝 例题11 · 相交于面·相交面的形状（2025 浙江）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 451 320.7" role="img" aria-label="六个图形，每幅由两个多边形相交，橙色为相交面，①②④的相交面是四边形，③⑤⑥是五边形">
      <g transform="translate(0,3.7)">
            <g transform="translate(20.0,18.0)">
            <path d="M10.0,30.0 L112.0,16.0 L70.0,112.0 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
            <path d="M10.0,41.0 L56.0,37.0 L88.0,64.0 L55.0,102.0 L14.0,89.0 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
            <path d="M59.2,97.2 L17.6,40.3 L56.0,37.0 L88.0,64.0 Z" fill="#f59e0b" fillOpacity="0.55" stroke="#f59e0b" strokeWidth={2} />
            <text x={65.0} y={12.3} fontSize={12} fill="#6b7280" textAnchor="middle">①</text>
            <text x={65} y={124} fontSize={12} fill="#f59e0b" textAnchor="middle">相交面：4 边形</text>
            </g>
            <g transform="translate(166.0,18.0)">
            <path d="M8.0,20.0 L60.0,20.0 L60.0,54.0 L112.0,54.0 L112.0,104.0 L8.0,104.0 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
            <path d="M68.0,17.0 L104.0,53.0 L62.0,92.0 L23.0,66.0 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
            <path d="M60.0,25.7 L60.0,54.0 L102.9,54.0 L62.0,92.0 L23.0,66.0 Z" fill="#f59e0b" fillOpacity="0.55" stroke="#f59e0b" strokeWidth={2} />
            <text x={65.0} y={12.3} fontSize={12} fill="#6b7280" textAnchor="middle">②</text>
            <text x={65} y={124} fontSize={12} fill="#f59e0b" textAnchor="middle">相交面：5 边形</text>
            </g>
            <g transform="translate(312.0,18.0)">
            <path d="M30.0,8.0 L100.0,34.0 L84.0,104.0 L20.0,110.0 L4.0,52.0 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
            <path d="M49.0,14.0 L86.0,4.0 L117.0,41.0 L83.0,75.0 L47.0,53.0 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
            <path d="M48.9,15.0 L100.0,34.0 L92.9,65.1 L83.0,75.0 L47.0,53.0 Z" fill="#f59e0b" fillOpacity="0.55" stroke="#f59e0b" strokeWidth={2} />
            <text x={65.0} y={12.3} fontSize={12} fill="#6b7280" textAnchor="middle">③</text>
            <text x={65} y={124} fontSize={12} fill="#f59e0b" textAnchor="middle">相交面：5 边形</text>
            </g>
            <g transform="translate(20.0,168.0)">
            <path d="M8.0,24.0 L108.0,24.0 L108.0,104.0 L8.0,104.0 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
            <path d="M109.0,8.0 L99.0,123.0 L22.0,22.0 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
            <path d="M23.5,24.0 L107.6,24.0 L100.7,104.0 L84.5,104.0 Z" fill="#f59e0b" fillOpacity="0.55" stroke="#f59e0b" strokeWidth={2} />
            <text x={65.0} y={12.3} fontSize={12} fill="#6b7280" textAnchor="middle">④</text>
            <text x={65} y={124} fontSize={12} fill="#f59e0b" textAnchor="middle">相交面：4 边形</text>
            </g>
            <g transform="translate(166.0,168.0)">
            <path d="M26.0,10.0 L66.0,10.0 L66.0,30.0 L100.0,30.0 L100.0,110.0 L26.0,110.0 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
            <path d="M1.0,38.0 L46.0,30.0 L76.0,66.0 L43.0,100.0 L6.0,87.0 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
            <path d="M26.0,94.0 L26.0,33.6 L46.0,30.0 L76.0,66.0 L43.0,100.0 Z" fill="#f59e0b" fillOpacity="0.55" stroke="#f59e0b" strokeWidth={2} />
            <text x={65.0} y={12.3} fontSize={12} fill="#6b7280" textAnchor="middle">⑤</text>
            <text x={65} y={124} fontSize={12} fill="#f59e0b" textAnchor="middle">相交面：5 边形</text>
            </g>
            <g transform="translate(312.0,168.0)">
            <path d="M16.0,96.0 L44.0,14.0 L112.0,72.0 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
            <path d="M45.0,0.0 L99.0,44.0 L67.0,82.0 L20.0,63.0 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
            <path d="M26.4,65.6 L44.0,14.0 L90.7,53.8 L67.0,82.0 Z" fill="#f59e0b" fillOpacity="0.55" stroke="#f59e0b" strokeWidth={2} />
            <text x={65.0} y={12.3} fontSize={12} fill="#6b7280" textAnchor="middle">⑥</text>
            <text x={65} y={124} fontSize={12} fill="#f59e0b" textAnchor="middle">相交面：4 边形</text>
            </g>
          </g>
      </svg><figcaption>图：题干六个图形（橙色区域为两个图形的相交面）</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 327.0 132" role="img" aria-label="选项分组文字">
      <g transform="translate(0,13)">
            <text x={230} y={24} fontSize={15} fill="#1f2937" textAnchor="middle">A．①②③，④⑤⑥</text>
            <text x={230} y={46} fontSize={15} fill="#1f2937" textAnchor="middle">B．①②⑥，③④⑤</text>
            <text x={230} y={68} fontSize={15} fill="#10b981" textAnchor="middle">C．①④⑥，②③⑤　✓</text>
            <text x={230} y={94} fontSize={15} fill="#1f2937" textAnchor="middle">D．①⑤⑥，②③④</text>
          </g>
      </svg><figcaption>选项 A / B / C / D（分组分类题选项为文字）</figcaption></figure>
          <ExampleAnswer><b>解析：</b>每幅图都是两个多边形相交，属于"图形间关系——相交于面"。此时优先看<b>相交面的形状</b>：<br />①、④、⑥ 的相交面是<b>四边形</b>（4 条边）；②、③、⑤ 的相交面是<b>五边形</b>（5 条边）。<br />即 <b>①④⑥ 相交面为四边形，②③⑤ 相交面为五边形</b>。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      </Block>
      
          
            <Block>
        <BlockTitle>补充12. 生活化特征（弱特征）——先看"开闭 / 面 / 部分 / 笔画"</BlockTitle>
        <p>夸夸刷（五）第 17—18 页、夸夸刷（七）第 36 页的"生活化思路"，是页面完全没提的思维拓展。题干画的是信封、杯子、气球、人脸这类<b>生活化图案</b>时：</p>
        <p>① 生活化是<b>弱特征</b>——若同时出现"曲线特征"等其他特征，<b>先让位给强特征</b>；<br />② 生活化图案优先依次考虑：<b>开闭性 → 面数量 → 部分数 → 笔画数</b>。</p>
        <Callout variant="key">口诀：<b>看到生活化图案，先看开闭，再数面、数部分、数笔画</b>。<br />生活化只是"外衣"，不能据此排除其他规律；同类图案（都是日常物体）时，规律多半落在开闭/面/部分/笔画上。</Callout>
        <figure className="fig">
          <svg viewBox="0 0 464 146" role="img" aria-label="生活化特征四种思路示意">
      <g transform="translate(4,0)">
            <rect x={45} y={50} width={70} height={48} rx={3} fill="#fff" stroke="#1f2937" strokeWidth={1.5} />
            <path d="M45 52 L80 78 L115 52" stroke="#1f2937" strokeWidth={1.5} fill="none" />
            <text x={60} y={122} fontSize={10.5} textAnchor="middle" fill="#2563eb">开闭性（全封闭）</text>
            <circle cx={185} cy={74} r={26} fill="#fff" stroke="#1f2937" strokeWidth={1.5} />
            <path d="M170 60 Q185 74 200 60" stroke="#1f2937" strokeWidth={1.3} fill="none" />
            <text x={172} y={122} fontSize={10.5} textAnchor="middle" fill="#f59e0b">面数量</text>
            <path d="M270 50 Q290 34 310 50 L300 68 Q290 76 280 68 Z" fill="#fff" stroke="#1f2937" strokeWidth={1.5} />
            <line x1={290} y1={74} x2={290} y2={98} stroke="#6b7280" strokeWidth={1.2} />
            <text x={284} y={122} fontSize={10.5} textAnchor="middle" fill="#10b981">部分数</text>
            <circle cx={385} cy={70} r={26} fill="#fff" stroke="#1f2937" strokeWidth={1.5} />
            <circle cx={377} cy={64} r={2.6} fill="#1f2937" /><circle cx={393} cy={64} r={2.6} fill="#1f2937" />
            <path d="M376 80 Q385 88 394 80" stroke="#1f2937" strokeWidth={1.4} fill="none" />
            <text x={396} y={122} fontSize={10.5} textAnchor="middle" fill="#7c3aed">笔画数（一笔画）</text>
          </g>
      </svg>
          <figcaption>图：生活化图案的四条优先思路</figcaption>
        </figure>
      </Block>
            <Block>
        <BlockTitle>补充3. 轴对称的"反向"新问法 · 添一条线后成为轴对称（22联考事业）</BlockTitle>
        <p>轴对称考"识别 / 细化 / 多轴关系"大家都熟，但刷题里出现了一种<b>反向问法</b>：图形本身<b>不是</b>轴对称的，题目要求你"<b>在图上选两个点、连一条直线</b>"，连完之后才变成轴对称。设问一变成"有几个能成功"，就同时考了<b>轴对称 + 补全</b>。</p>
        <p>解法只有一句话：<b>先找"缺口"，再想缺的那条对称轴</b>。哪一侧的形状"缺了一块"，补线后对称轴必落在"完整那一侧的形状"的中轴线位置上。</p>
        <Callout variant="key">口诀：<b>补线成轴对称 = 找那个"不整齐"的地方 → 作它的镜像 → 看镜像线与原图能否连成一条直线</b>。<br />注意：这条"补线"本身就是<b>对称轴</b>，所以它一定要能同时平分两侧轮廓。</Callout>
        <Example>
          <ExampleHeader>📝 例题1 · 添一条线后能成轴对称的有几个（22 联考事业 · 原题选项漏印数字，见补充1勘误一）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>以下 4 个图形中，在图中选择两个点并用直线连接后，能成为轴对称图形的有几个？</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 452 147" role="img" aria-label="例题题干四个图形">
              <polygon points="30,25 100,25 100,62 62,95 44,78 30,95" fill="none" stroke="#1f2937" strokeWidth={1.8} />
              <line x1={30} y1={62} x2={74} y2={25} stroke="#2563eb" strokeWidth={1.5} />
              <line x1={48} y1={88} x2={100} y2={52} stroke="#2563eb" strokeWidth={1.5} />
              <rect x={140} y={25} width={70} height={70} fill="none" stroke="#1f2937" strokeWidth={1.8} />
              <line x1={140} y1={95} x2={210} y2={25} stroke="#2563eb" strokeWidth={1.5} />
              <rect x={172} y={25} width={38} height={25} fill="none" stroke="#1f2937" strokeWidth={1.4} />
              <line x1={140} y1={60} x2={172} y2={60} stroke="#1f2937" strokeWidth={1.4} />
              <line x1={172} y1={60} x2={140} y2={95} stroke="#1f2937" strokeWidth={1.4} />
              <polygon points="250,95 250,30 266,30 266,48 286,48 286,30 302,30 302,95" fill="none" stroke="#1f2937" strokeWidth={1.8} />
              <line x1={250} y1={62} x2={302} y2={95} stroke="#2563eb" strokeWidth={1.5} />
              <line x1={302} y1={62} x2={250} y2={95} stroke="#2563eb" strokeWidth={1.5} />
              <polygon points="276,60 288,74 276,88 264,74" fill="none" stroke="#7c3aed" strokeWidth={1.5} />
              <rect x={360} y={25} width={70} height={70} fill="none" stroke="#1f2937" strokeWidth={1.8} />
              <line x1={360} y1={25} x2={395} y2={60} stroke="#2563eb" strokeWidth={1.5} />
              <line x1={395} y1={25} x2={360} y2={60} stroke="#1f2937" strokeWidth={1.4} />
              <rect x={400} y={65} width={30} height={30} fill="none" stroke="#2563eb" strokeWidth={1.6} />
              <text x={65} y={122} fontSize={12} fill="#6b7280" textAnchor="middle">①</text>
              <text x={175} y={122} fontSize={12} fill="#6b7280" textAnchor="middle">②</text>
              <text x={285} y={122} fontSize={12} fill="#6b7280" textAnchor="middle">③</text>
              <text x={395} y={122} fontSize={12} fill="#6b7280" textAnchor="middle">④</text>
            </svg><figcaption>图：题干 4 个图形（示意）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 422 79" role="img" aria-label="例题四个选项">
              <rect x={60} y={23} width={70} height={34} rx={8} fill="none" stroke="#6b7280" strokeWidth={1.3} />
              <text x={95} y={45} fontSize={12.5} fill="#1f2937" textAnchor="middle">A.1</text>
              <rect x={150} y={23} width={70} height={34} rx={8} fill="none" stroke="#6b7280" strokeWidth={1.3} />
              <text x={185} y={45} fontSize={12.5} fill="#1f2937" textAnchor="middle">B.2</text>
              <rect x={240} y={23} width={70} height={34} rx={8} fill="none" stroke="#6b7280" strokeWidth={1.3} />
              <text x={275} y={45} fontSize={12.5} fill="#1f2937" textAnchor="middle">C.3</text>
              <rect x={330} y={23} width={70} height={34} rx={8} fill="none" stroke="#6b7280" strokeWidth={1.3} />
              <text x={365} y={45} fontSize={12.5} fill="#1f2937" textAnchor="middle">D.4</text>
            </svg><figcaption>选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>逐个"补线试对称"。①③④ 都能找到一条直线，补上之后整个图形关于该直线轴对称；②补线后左右仍不对称。<br />所以能成为轴对称图形的有 <b>3 个</b>。<br /><span className="correct">答案：C</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
            <Block>
        <BlockTitle>补充5. 生活化图形定位法（"生活化思维"专章）</BlockTitle>
        <p>超大杯专门用一节做"生活化思路-小结"。起因是近几年大量出现<b>生活化图形</b>：字母、符号、货币符号、日用品、动物……考生一看就懵。老师给的定位顺序是固定的：</p>
        <Callout variant="key"><b>看到生活化图形（字母 / 符号 / 日用品 / 动物），按这个顺序想：</b><br />① 开闭性（全封闭 / 全开放 / 半封闭）→ ② 面数量（封闭区域数）→ ③ 部分数 → ④ 笔画数 → ⑤ 属性（对称、曲直）。<br />口诀：<b>生活化 = 开闭 + 面 + 部分 + 笔画</b>。</Callout>
        <p>真题对应关系：<b>22 广东</b>（ʁ ψ ö ħ 类符号）→ 封闭区域数 1、0、1、0 交替；<b>23 深圳</b>（符号与图形混搭）→ 同样走"生活化四问"；<b>24 联考</b>（衣服 / 同心圆 / 圆柱 / 张嘴 / 小鸟）→ 开闭性；<b>25 联考</b>（房子、书、杯子、鱼、碗、圆柱）→ 数量类。</p>
        <Example>
          <ExampleHeader>📝 例题3 · 符号类生活化图形（22 广东，78%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下列选项中最符合所给图形规律的是。（题干依次为：ʁ、ψ、ö、ħ、？）</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 426.0 122" role="img" aria-label="例题题干五个符号">
              <text x={86} y={62} fontSize={30} fill="#1f2937" textAnchor="middle">ʁ</text>
              <text x={158} y={62} fontSize={30} fill="#1f2937" textAnchor="middle">ψ</text>
              <text x={230} y={62} fontSize={30} fill="#1f2937" textAnchor="middle">ö</text>
              <text x={302} y={62} fontSize={30} fill="#1f2937" textAnchor="middle">ħ</text>
              <rect x={344} y={30} width={60} height={46} fill="none" stroke="#6b7280" strokeWidth={1.2} />
              <text x={374} y={62} fontSize={26} fill="#6b7280" textAnchor="middle">?</text>
              <text x={86} y={98} fontSize={11.5} fill="#6b7280" textAnchor="middle">1 个封闭区</text>
              <text x={158} y={98} fontSize={11.5} fill="#6b7280" textAnchor="middle">0 个</text>
              <text x={230} y={98} fontSize={11.5} fill="#6b7280" textAnchor="middle">1 个</text>
              <text x={302} y={98} fontSize={11.5} fill="#6b7280" textAnchor="middle">0 个</text>
              <text x={374} y={98} fontSize={11.5} fill="#ef4444" textAnchor="middle">应 1 个</text>
            </svg><figcaption>图：题干图形（符号，封闭区域数 1、0、1、0、？）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 464 120" role="img" aria-label="例题四个选项">
      <g transform="translate(2,0)">
              <rect x={20} y={22} width={90} height={50} fill="none" stroke="#6b7280" strokeWidth={1.2} />
              <text x={65} y={58} fontSize={28} fill="#1f2937" textAnchor="middle">#</text>
              <rect x={130} y={22} width={90} height={50} fill="none" stroke="#6b7280" strokeWidth={1.2} />
              <text x={175} y={58} fontSize={28} fill="#1f2937" textAnchor="middle">€</text>
              <rect x={240} y={22} width={90} height={50} fill="none" stroke="#6b7280" strokeWidth={1.2} />
              <text x={285} y={58} fontSize={28} fill="#1f2937" textAnchor="middle">ℏ</text>
              <rect x={350} y={22} width={90} height={50} fill="none" stroke="#6b7280" strokeWidth={1.2} />
              <text x={395} y={58} fontSize={28} fill="#1f2937" textAnchor="middle">Ā</text>
              <text x={65} y={95} fontSize={12.5} fill="#6b7280" textAnchor="middle">A</text>
              <text x={175} y={95} fontSize={12.5} fill="#6b7280" textAnchor="middle">B</text>
              <text x={285} y={95} fontSize={12.5} fill="#6b7280" textAnchor="middle">C</text>
              <text x={395} y={95} fontSize={12.5} fill="#6b7280" textAnchor="middle">D</text>
            </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>字母/符号属于典型的"生活化图形"，按固定顺序先看<b>开闭性 → 封闭区域数</b>。题干的封闭区域依次是 <b>1、0、1、0</b> 交替，问号处应为 <b>1 个封闭区域</b>。<br />A（#）、B（€）、C（ℏ）都没有封闭区域；<b>D（Ā）中间的 A 自带 1 个封闭区域</b>。<br /><span className="correct">答案：D</span></ExampleAnswer>
          </ExampleBody>
        </Example>
        <p>提醒：生活化图形<b>不要一上来就想"这是个什么物体"</b>，越是把它当"实物"越容易发散；直接把它当成"一堆线和面"，按上面四问顺序数就行。</p>
      </Block>
            <Block>
        <BlockTitle>补充10. "都有曲线"三分法（圆 vs 非圆，两套完全不同的数法）</BlockTitle>
        <p>"曲直交点"这个细化考点大家都知道，但看到"曲线"就埋头数曲直交点，常常会撞墙。老师给了一个前置判断——<b>先分"圆"还是"非圆"</b>，两条路数法完全不同：</p>
        <Callout variant="key"><b>图形里都有曲线时，先分两支：</b><br />① <b>圆（弧）类</b>：找<b>切点</b> → 抓到"<b>框点</b>"（圆与多边形的接触点）→ 顺着看<b>框内的面 / 框内的线</b>。<br />② <b>非圆类</b>（曲线不是完整圆，如心形、水滴、弧）：数<b>曲直交点</b> → 再与直线做<b>运算</b>（曲线数 vs 直线数，看差值 / 和值 / 排序）。<br />③ <b>【特殊】圆与圆相交</b>：此时没有曲直交点，改看 <b>一笔画 + 交点个数</b>。</Callout>
        <p>真题锚点：<b>25 沈阳事业</b>——每个图形里曲线数为 2 条 / 4 条交替；<b>25 联考</b>——每个图形都是"曲线 2 条、直线 7 条"。这两道题的共同点都是：先用三分法确定"数曲线"，而不是去数曲直交点。</p>
        <figure className="fig"><svg viewBox="0 0 464 197.1" role="img" aria-label="都有曲线三分法决策树">
      <g transform="translate(2,7.1)">
          <text x={230} y={28} fontSize={13} fill="#1f2937" textAnchor="middle">看到"曲线"，先分圆 / 非圆</text>
          <rect x={150} y={42} width={160} height={30} rx={6} fill="none" stroke="#2563eb" strokeWidth={1.5} />
          <text x={230} y={62} fontSize={12.5} fill="#2563eb" textAnchor="middle">都有曲线</text>
          <line x1={200} y1={72} x2={90} y2={100} stroke="#6b7280" strokeWidth={1.2} />
          <line x1={260} y1={72} x2={370} y2={100} stroke="#6b7280" strokeWidth={1.2} />
          <rect x={20} y={100} width={140} height={26} rx={6} fill="none" stroke="#10b981" strokeWidth={1.4} />
          <text x={90} y={118} fontSize={12} fill="#10b981" textAnchor="middle">圆形 / 弧</text>
          <rect x={300} y={100} width={140} height={26} rx={6} fill="none" stroke="#f59e0b" strokeWidth={1.4} />
          <text x={370} y={118} fontSize={12} fill="#f59e0b" textAnchor="middle">非圆</text>
          <text x={90} y={146} fontSize={11} fill="#6b7280" textAnchor="middle">切点 → 框点（多边形）</text>
          <text x={90} y={164} fontSize={11} fill="#6b7280" textAnchor="middle">→ 框内的面 / 框内的线</text>
          <text x={370} y={146} fontSize={11} fill="#6b7280" textAnchor="middle">曲直交点 → 与直线做运算</text>
          <text x={370} y={164} fontSize={11} fill="#6b7280" textAnchor="middle">（曲线数 / 直线数）</text>
          <text x={230} y={148} fontSize={11} fill="#ef4444" textAnchor="middle">【特殊】圆与圆相交</text>
          <text x={230} y={166} fontSize={11} fill="#ef4444" textAnchor="middle">→ 一笔画 + 交点个数</text>
        </g>
      </svg><figcaption>图：「都有曲线」三分法决策树</figcaption></figure>
      </Block>
            <Block>
        <BlockTitle>补充11. 图形间关系的升级版 · "复杂图案 + 共同图案"（近五年高频）</BlockTitle>
        <p>图形间关系不只是"相离 / 包含 / 相交"三选一。超大杯把它拆成了两层：</p>
        <p><b>第一层 · 简单</b>（2~4 个图案）：<b>相离 / 包含</b>；再看<b>相交</b>——点时看切点/交点、曲直性；线时看数量、长/短、整体/局部、曲线/直线、线的位置；面时看形状、属性、面积。</p>
        <p><b>第二层 · 复杂</b>：命题者作图有个特点——<b>走极端</b>，要么特别简单，要么特别复杂。考查方式是：<b>"复杂图案 + 共同图案" → 看两者之间的位置关系</b>。这里的"关系"被进一步量化成四种：</p>
        <Callout variant="key"><b>共同图案相对复杂图案的四种位置（按"露出多少"排）</b><br />① <b>局部出头</b>——共同图案大部分在里，只露出一小角；<br />② <b>全部里面</b>——完全被包住，不出头；<br />③ <b>= 1/2 相交面</b>——恰好一半在外；<br />④ <b>&gt; 1/2 相交面</b>——一半以上在外。<br />口诀：<b>出头 → 全里 → 恰好一半 → 超过一半</b>，按露出比例递进。</Callout>
        <p>真题锚点：21 联考事业、22 联考事业、23 联考事业、24 联考事业、25 国考题干都是"复杂 + 共同"，其中 23 联考事业是"复杂 + 简单"。</p>
        <Example>
          <ExampleHeader>📝 例题7 · 六个图形分为两类（22 联考事业，28%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是。</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 456 148" role="img" aria-label="例题题干六个图形">
              <rect x={25} y={34} width={54} height={52} fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <circle cx={52} cy={60} r={20} fill="none" stroke="#2563eb" strokeWidth={1.6} />
              <polygon points="30,50 40,50 35,40" fill="none" stroke="#7c3aed" strokeWidth={1.3} />
              <circle cx={52} cy={40} r={2.6} fill="#ef4444" /><circle cx={52} cy={80} r={2.6} fill="#ef4444" />
              <polygon points="123,34 146,46 146,74 123,86 100,74 100,46" fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <circle cx={123} cy={60} r={26} fill="none" stroke="#2563eb" strokeWidth={1.6} />
              <circle cx={105} cy={45} r={2.6} fill="#10b981" /><circle cx={141} cy={45} r={2.6} fill="#10b981" />
              <polygon points="194,32 215,50 207,84 181,84 173,50" fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <circle cx={194} cy={62} r={19} fill="none" stroke="#2563eb" strokeWidth={1.6} />
              <circle cx={194} cy={81} r={2.6} fill="#ef4444" />
              <rect x={238} y={34} width={54} height={52} fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <circle cx={265} cy={60} r={18} fill="none" stroke="#2563eb" strokeWidth={1.6} />
              <polygon points="248,50 258,50 253,40" fill="none" stroke="#7c3aed" strokeWidth={1.3} />
              <circle cx={265} cy={42} r={2.6} fill="#ef4444" />
              <polygon points="336,34 356,60 336,60 336,86 316,86 316,60 296,60" fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <circle cx={336} cy={60} r={22} fill="none" stroke="#2563eb" strokeWidth={1.6} />
              <circle cx={318} cy={50} r={2.6} fill="#10b981" /><circle cx={354} cy={50} r={2.6} fill="#10b981" />
              <rect x={380} y={34} width={54} height={52} fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <circle cx={407} cy={60} r={18} fill="none" stroke="#2563eb" strokeWidth={1.6} />
              <line x1={380} y1={34} x2={434} y2={86} stroke="#1f2937" strokeWidth={1.3} />
              <line x1={434} y1={34} x2={380} y2={86} stroke="#1f2937" strokeWidth={1.3} />
              <circle cx={420} cy={46} r={2.6} fill="#10b981" /><circle cx={394} cy={74} r={2.6} fill="#10b981" />
              <text x={52} y={108} fontSize={12} fill="#6b7280" textAnchor="middle">①</text>
              <text x={123} y={108} fontSize={12} fill="#6b7280" textAnchor="middle">②</text>
              <text x={194} y={108} fontSize={12} fill="#6b7280" textAnchor="middle">③</text>
              <text x={265} y={108} fontSize={12} fill="#6b7280" textAnchor="middle">④</text>
              <text x={336} y={108} fontSize={12} fill="#6b7280" textAnchor="middle">⑤</text>
              <text x={407} y={108} fontSize={12} fill="#6b7280" textAnchor="middle">⑥</text>
              <text x={230} y={124} fontSize={11} fill="#6b7280" textAnchor="middle">红点＝圆与直线"相切"；绿点＝圆与直线"相交"</text>
            </svg><figcaption>图：题干六个图形（都含一个圆，与其余直线的关系不同）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 428 120" role="img" aria-label="例题四个选项">
      <g transform="translate(2,0)">
              <rect x={20} y={22} width={120} height={34} rx={8} fill="none" stroke="#6b7280" strokeWidth={1.3} />
              <text x={80} y={44} fontSize={12.5} fill="#1f2937" textAnchor="middle">A.①③④，②⑤⑥</text>
              <rect x={152} y={22} width={120} height={34} rx={8} fill="none" stroke="#6b7280" strokeWidth={1.3} />
              <text x={212} y={44} fontSize={12.5} fill="#1f2937" textAnchor="middle">B.①③⑤，②④⑥</text>
              <rect x={284} y={22} width={120} height={34} rx={8} fill="none" stroke="#6b7280" strokeWidth={1.3} />
              <text x={344} y={44} fontSize={12.5} fill="#1f2937" textAnchor="middle">C.①②⑥，③④⑤</text>
              <rect x={86} y={64} width={120} height={34} rx={8} fill="none" stroke="#6b7280" strokeWidth={1.3} />
              <text x={146} y={86} fontSize={12.5} fill="#1f2937" textAnchor="middle">D.①④⑥，②③⑤</text>
            </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>六个图形都含<b>一个圆</b>，属于"圆形 + 多边形"的组合 → 走"都有曲线"三分法：看圆与其余直线的<b>相接方式</b>。<br />①③④ 中圆与直线是<b>相切（切点）</b>；②⑤⑥ 中圆与直线是<b>相交（交点）</b>。<br />所以分组为 ①③④ / ②⑤⑥。<br /><span className="correct">答案：A</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
    </>
  )
}
