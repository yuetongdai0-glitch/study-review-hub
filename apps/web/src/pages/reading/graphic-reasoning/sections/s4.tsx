import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleQuestion, PointList } from '@/components/content'

/**
 * 四、数量 · 面 / 线 / 点
 *
 * @returns 该节正文。
 */
export default function S5(): ReactElement {
  return (
    <>
      <Block>
      <BlockTitle>1. 数量规律总纲：图案不同 → 先属性，后数量</BlockTitle>
      <p>本节的命题者作图特点是<strong>“每幅图图案不同”</strong>。看到一组图案各不相同的图形，方向就只有三条：<strong>属性 → 数量 → 图形关系</strong>。刘义恒老师的宏观思维是：</p>
      <PointList>
      <li><strong>先属性，后数量</strong>，而属性规律中<strong>对称性优先级最高</strong>；</li>
      <li>背诵数量规律中的“图形特征”，看到特征<strong>直接定位</strong>考点；</li>
      <li>遇到极端情况（如六幅图分两类、图形关系明显），优先考虑<strong>“图形关系”</strong>。</li>
      </PointList>
      <Callout variant="key">
      属性三条线：<strong>对称性</strong>（图形规则）→ <strong>曲直性</strong>（有曲线）→ <strong>开闭性</strong>（生活化）。属性没规律，立刻转数量。
      </Callout>
      <p>数量规律的六大考点依次是：<strong>①面 ②线 ③点 ④笔画 ⑤元素 ⑥角</strong>。本节解决前三个：面、线、点。</p>
      <Callout variant="formula"><span className="formula">图形特征优先级：线特征 &gt; 面特征 &gt; 点特征</span></Callout>
      <p>什么是“面”？——<strong>白色的、封闭的区域</strong>。</p>
      <Callout variant="tip">⚠️ 提示：<strong>黑色不是面</strong>。全黑块、粗实心图形里面的黑色区域，一律不算面。</Callout>
      <figure className="fig"><svg viewBox="0 0 488 178" role="img" aria-label="数量规律解题思路与考点结构">
      <g transform="translate(14,14)">
      <rect x={8} y={10} width={150} height={46} rx={6} fill="#eff6ff" stroke="#2563eb" strokeWidth={2} />
      <text x={83} y={30} textAnchor="middle" fontSize={13} fill="#1f2937">每幅图图案不同</text>
      <text x={83} y={48} textAnchor="middle" fontSize={12} fill="#2563eb">（命题者作图特点）</text>
      <line x1={158} y1={33} x2={188} y2={33} stroke="#1f2937" strokeWidth={2} />
      <path d="M188 33 L182 29 L182 37 Z" fill="#1f2937" />
      <rect x={192} y={8} width={118} height={50} rx={6} fill="#fff7ed" stroke="#f59e0b" strokeWidth={2} />
      <text x={251} y={28} textAnchor="middle" fontSize={13} fill="#1f2937">属性</text>
      <text x={251} y={46} textAnchor="middle" fontSize={11} fill="#f59e0b">对称/曲直/开闭</text>
      <line x1={310} y1={33} x2={340} y2={33} stroke="#1f2937" strokeWidth={2} />
      <path d="M340 33 L334 29 L334 37 Z" fill="#1f2937" />
      <rect x={344} y={8} width={108} height={50} rx={6} fill="#ecfdf5" stroke="#10b981" strokeWidth={2} />
      <text x={398} y={28} textAnchor="middle" fontSize={13} fill="#1f2937">数量</text>
      <text x={398} y={46} textAnchor="middle" fontSize={11} fill="#10b981">面/线/点</text>
      <rect x={8} y={80} width={444} height={62} rx={6} fill="#f9fafb" stroke="#6b7280" strokeWidth={1.5} />
      <text x={20} y={100} fontSize={12} fill="#6b7280">数量六大考点：</text>
      <text x={112} y={100} fontSize={12} fill="#1f2937">①面（分割、封闭、生活化）　②线（单一、曲线、多边形）</text>
      <text x={20} y={126} fontSize={12} fill="#1f2937">③点（面特征、多端点）</text>
      <text x={180} y={126} fontSize={12} fill="#7c3aed">④笔画　⑤元素　⑥角</text>
      </g>
      </svg><figcaption>图：数量规律解题思路——图案不同先走属性，再走数量</figcaption></figure>
      <Callout variant="tip">易错提醒：属性里的<strong>对称性优先级最高</strong>，很多同学一看到“图形被分割”就冲去数面，结果丢了对称分。记住顺序：<strong>先属性，后数量</strong>。</Callout>
      </Block>
      
      <Block>
      <BlockTitle>2. 考点一 · 面数量：基础考法（面的数量、九宫格面的运算）</BlockTitle>
      <p>命题者作图特点（看到这些特征，直接锁定“面”）：</p>
      <PointList>
      <li><strong>① 图形被分割</strong>（外框被内部线条切成多块）；</li>
      <li><strong>② 封闭面明显</strong>（一块一块的封闭区域很扎眼）；</li>
      <li><strong>③ 生活化</strong>（图标、汉字、字母、数字）。</li>
      </PointList>
      <p>解题路径：图案不同 → 属性 → 数量 → <strong>面</strong>。基础考点只有两个：<strong>面的数量</strong> 与 <strong>面的运算</strong>。</p>
      <Callout variant="key">
      生活化图形 → 优先数面；<br />
      生活化（汉字、字母、数字）→ 优先数面（数封闭区域，不是笔画数！）；<br />
      九宫格 → 优先想“面运算”。
      </Callout>
      <Callout variant="formula"><span className="formula">九宫格运算思维：① 两数相加得第三个数（2+3=5）　② 三数之和为定值（2+3+5=10 或 每行/列/对角线和相等）</span></Callout>
      <Callout variant="tip">“面的数量”是数量规律里最基础、出场率最高的一个考点。数面时一条铁律：<strong>闭合区域要封口才算一个面</strong>，虚线、开口区域、黑色块都不算。</Callout>
      
      <Example>
      <ExampleHeader>📝 例题1 · 面数量（生活化图形）（2025 江苏）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>请从四个选项中选出最恰当的一项填入问号处，使题干图形呈现一定的规律性。</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 484 167.2" role="img" aria-label="题干五幅生活化图形及面数">
      <g transform="translate(16,15.2)">
      <text x={36} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">3</text>
      <text x={112} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">4</text>
      <text x={188} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">5</text>
      <text x={264} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">6</text>
      <text x={340} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">7</text>
      <text x={416} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">?</text>
      <rect x={6} y={24} width={60} height={106} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={82} y={24} width={60} height={106} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={158} y={24} width={60} height={106} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={234} y={24} width={60} height={106} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={310} y={24} width={60} height={106} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={386} y={24} width={60} height={106} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <rect x={25} y={70} width={22} height={52} rx={2} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={30} y={78} width={12} height={16} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={28} y={58} width={16} height={12} fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <circle cx={112} cy={86} r={30} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M112 66 L124 84 L100 84 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M96 96 L112 90 L108 106 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M128 96 L116 90 L120 106 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <rect x={170} y={62} width={36} height={60} rx={5} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={175} y={68} width={11} height={12} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={190} y={68} width={11} height={12} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={181} y={86} width={13} height={32} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={200} cy={106} r={4.5} fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <ellipse cx={264} cy={92} rx={20} ry={26} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={257} y={60} width={14} height={10} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={252} y={78} width={8} height={26} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={262} y={78} width={8} height={26} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={272} y={78} width={8} height={26} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={252} y={108} width={28} height={9} fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <circle cx={340} cy={88} r={30} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={340} cy={88} r={14} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={340} cy={66} r={7} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={321} cy={99} r={7} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={359} cy={99} r={7} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={316} cy={74} r={5} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={364} cy={74} r={5} fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <text x={416} y={92} textAnchor="middle" fontSize={34} fill="#1f2937">?</text>
      </g>
      </svg><figcaption>图：题干图形（红字为面数：3、4、5、6、7）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 474 147.1" role="img" aria-label="四个选项及面数">
      <g transform="translate(10,15.1)">
      <text x={62} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">8</text>
      <text x={172} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">7</text>
      <text x={282} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">7</text>
      <text x={392} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">11</text>
      <rect x={12} y={24} width={100} height={86} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <rect x={122} y={24} width={100} height={86} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={232} y={24} width={100} height={86} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={342} y={24} width={100} height={86} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <circle cx={37} cy={86} r={15} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={86} cy={86} r={15} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M37 86 L57 60 L86 86 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={52} y={50} width={14} height={7} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={78} y={52} width={12} height={6} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <circle cx={57} cy={86} r={6} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={60} y={76} width={14} height={8} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={34} y={54} width={9} height={6} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <text x={62} y={105} textAnchor="middle" fontSize={12} fill="#1f2937">A</text>
      
      <circle cx={172} cy={68} r={8} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M172 68 L150 42 A34 34 0 0 1 194 42 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M172 68 L138 80 A34 34 0 0 0 150 100 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M172 68 L206 80 A34 34 0 0 1 194 100 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M144 44 L152 50 L140 54 Z" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <path d="M130 88 L140 90 L132 98 Z" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <path d="M214 88 L204 90 L212 98 Z" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <text x={172} y={105} textAnchor="middle" fontSize={12} fill="#1f2937">B</text>
      
      <circle cx={272} cy={62} r={24} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={248} y1={62} x2={296} y2={62} stroke="#1f2937" strokeWidth={2} />
      <line x1={272} y1={38} x2={272} y2={86} stroke="#1f2937" strokeWidth={2} />
      <line x1={255} y1={45} x2={289} y2={79} stroke="#1f2937" strokeWidth={2} />
      <rect x={288} y={78} width={10} height={22} rx={3} fill="none" stroke="#1f2937" strokeWidth={2} />
      <text x={282} y={105} textAnchor="middle" fontSize={12} fill="#1f2937">C</text>
      
      <circle cx={392} cy={66} r={26} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={368} y1={50} x2={416} y2={82} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={368} y1={82} x2={416} y2={50} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={366} y1={66} x2={418} y2={66} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={392} y1={40} x2={392} y2={92} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={372} y1={58} x2={412} y2={74} stroke="#1f2937" strokeWidth={1.5} />
      <text x={392} y={105} textAnchor="middle" fontSize={12} fill="#1f2937">D</text>
      </g>
      </svg><figcaption>选项 A / B / C / D（灰字为各选项面数）</figcaption></figure>
      <ExampleAnswer><b>解析：</b>五幅图都是“生活化”图标，属性无规律（不对称、开闭一致），转数量、优先数面。依次为 <b>3、4、5、6、7</b>，等差数列，问号处应为 <b>8</b> 个面。逐项验证：A 自行车 <b>8</b> 面；B 辐射标志 7 面；C 放大镜 7 面；D 毛线球 11 面。<br /><span className="correct">答案：A</span><br /><span className="source">来源：讲义例题1（25江苏-75%）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      
      <Example>
      <ExampleHeader>📝 例题2 · 面数量（汉字生活化）（2024 山东）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 468 143.2" role="img" aria-label="题干四个汉字与问号">
      <g transform="translate(0,15.2)">
      <text x={86} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">1</text>
      <text x={166} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">2</text>
      <text x={246} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">3</text>
      <text x={326} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">4</text>
      <text x={406} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">5</text>
      <rect x={46} y={26} width={80} height={80} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={126} y={26} width={80} height={80} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={206} y={26} width={80} height={80} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={286} y={26} width={80} height={80} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={366} y={26} width={80} height={80} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <text x={86} y={84} textAnchor="middle" fontSize={56} fill="#1f2937" fontFamily="KaiTi,STKaiti,serif">齐</text>
      <text x={166} y={84} textAnchor="middle" fontSize={56} fill="#1f2937" fontFamily="KaiTi,STKaiti,serif">蹴</text>
      <text x={246} y={84} textAnchor="middle" fontSize={56} fill="#1f2937" fontFamily="KaiTi,STKaiti,serif">鞠</text>
      <text x={326} y={84} textAnchor="middle" fontSize={56} fill="#1f2937" fontFamily="KaiTi,STKaiti,serif">溜</text>
      <text x={406} y={84} textAnchor="middle" fontSize={56} fill="#1f2937" fontFamily="KaiTi,STKaiti,serif">?</text>
      </g>
      </svg><figcaption>图：题干图形（红字为封闭区域数）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 434 147" role="img" aria-label="四个选项汉字与封闭区域数">
      <g transform="translate(0,18)">
      <text x={77} y={16} textAnchor="middle" fontSize={12} fill="#6b7280">1</text>
      <text x={177} y={16} textAnchor="middle" fontSize={12} fill="#6b7280">2</text>
      <text x={277} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">5 ✓</text>
      <text x={377} y={16} textAnchor="middle" fontSize={12} fill="#6b7280">4</text>
      <rect x={42} y={22} width={70} height={70} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={142} y={22} width={70} height={70} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={242} y={22} width={70} height={70} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <rect x={342} y={22} width={70} height={70} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <text x={77} y={72} textAnchor="middle" fontSize={50} fill="#1f2937" fontFamily="KaiTi,STKaiti,serif">国</text>
      <text x={177} y={72} textAnchor="middle" fontSize={50} fill="#1f2937" fontFamily="KaiTi,STKaiti,serif">桓</text>
      <text x={277} y={72} textAnchor="middle" fontSize={50} fill="#1f2937" fontFamily="KaiTi,STKaiti,serif">稷</text>
      <text x={377} y={72} textAnchor="middle" fontSize={50} fill="#1f2937" fontFamily="KaiTi,STKaiti,serif">博</text>
      <text x={77} y={104} textAnchor="middle" fontSize={12} fill="#1f2937">A</text>
      <text x={177} y={104} textAnchor="middle" fontSize={12} fill="#1f2937">B</text>
      <text x={277} y={104} textAnchor="middle" fontSize={12} fill="#1f2937">C</text>
      <text x={377} y={104} textAnchor="middle" fontSize={12} fill="#1f2937">D</text>
      </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>汉字属于“生活化”，优先数封闭区域：齐=1、蹴=2、鞠=3、溜=4，依次递增，问号处应填 <b>5</b> 个封闭区域的字。选项封闭区域数：国 1、桓 2、稷 5、博 4，只有 C 项“稷”为 5。<br /><span className="correct">答案：C</span><br /><span className="source">来源：讲义例题2（24山东-95%）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      
      <Example>
      <ExampleHeader>📝 例题3 · 面数量（九宫格面的运算）（2024 山东）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 243.6 230" role="img" aria-label="九宫格及其面数与行和">
      <rect x={40} y={60} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={92} y={60} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={144} y={60} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={40} y={112} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={92} y={112} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={144} y={112} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={40} y={164} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={92} y={164} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={144} y={164} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <text x={40} y={54} fontSize={12} fill="#ef4444">4</text>
      <text x={92} y={54} fontSize={12} fill="#ef4444">9</text>
      <text x={144} y={54} fontSize={12} fill="#ef4444">2</text>
      <text x={40} y={106} fontSize={12} fill="#ef4444">3</text>
      <text x={92} y={106} fontSize={12} fill="#ef4444">5</text>
      <text x={144} y={106} fontSize={12} fill="#ef4444">7</text>
      <text x={40} y={158} fontSize={12} fill="#ef4444">8</text>
      <text x={92} y={158} fontSize={12} fill="#ef4444">1</text>
      <text x={196} y={88} fontSize={13} fill="#2563eb">= 15</text>
      <text x={196} y={140} fontSize={13} fill="#2563eb">= 15</text>
      <text x={196} y={192} fontSize={13} fill="#2563eb">= 15</text>
      
      <circle cx={62} cy={82} r={18} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <ellipse cx={62} cy={82} rx={16} ry={7} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <circle cx={55} cy={82} r={4} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <circle cx={69} cy={82} r={4} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      
      <ellipse cx={114} cy={82} rx={18} ry={14} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <line x1={101} y1={72} x2={101} y2={92} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={105} y1={70} x2={105} y2={94} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={109} y1={69} x2={109} y2={95} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={113} y1={68} x2={113} y2={96} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={117} y1={68} x2={117} y2={96} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={121} y1={69} x2={121} y2={95} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={125} y1={71} x2={125} y2={93} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={129} y1={74} x2={129} y2={90} stroke="#1f2937" strokeWidth={1.2} />
      
      <rect x={152} y={70} width={28} height={24} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={160} y={76} width={12} height={12} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      
      <rect x={48} y={120} width={28} height={28} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={53} y={125} width={18} height={18} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={58} y={130} width={8} height={8} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      
      <circle cx={114} cy={134} r={18} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <line x1={96} y1={134} x2={132} y2={134} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={114} y1={116} x2={114} y2={152} stroke="#1f2937" strokeWidth={1.5} />
      <circle cx={123} cy={125} r={5} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      
      <path d="M166 116 L178 122 L178 146 L166 152 L154 146 L154 122 Z" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <line x1={166} y1={134} x2={166} y2={116} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={166} y1={134} x2={178} y2={122} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={166} y1={134} x2={178} y2={146} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={166} y1={134} x2={166} y2={152} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={166} y1={134} x2={154} y2={146} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={166} y1={134} x2={154} y2={122} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={166} y1={134} x2={178} y2={134} stroke="#1f2937" strokeWidth={1.2} />
      
      <circle cx={62} cy={186} r={18} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <line x1={44} y1={186} x2={80} y2={186} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={62} y1={168} x2={62} y2={204} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={49} y1={173} x2={75} y2={199} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={49} y1={199} x2={75} y2={173} stroke="#1f2937" strokeWidth={1.2} />
      
      <circle cx={114} cy={186} r={16} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <line x1={104} y1={180} x2={96} y2={168} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={126} y1={180} x2={134} y2={170} stroke="#1f2937" strokeWidth={1.5} />
      
      <text x={166} y={196} textAnchor="middle" fontSize={26} fill="#1f2937">?</text>
      </svg><figcaption>图：题干九宫格（红字为每个格子的面数）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 464 139.1" role="img" aria-label="四个选项及面数">
      <g transform="translate(2,20.1)">
      <rect x={20} y={20} width={90} height={60} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <rect x={130} y={20} width={90} height={60} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={240} y={20} width={90} height={60} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={350} y={20} width={90} height={60} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <text x={65} y={14} textAnchor="middle" fontSize={12} fill="#ef4444">6 ✓</text>
      <text x={175} y={14} textAnchor="middle" fontSize={12} fill="#6b7280">2</text>
      <text x={285} y={14} textAnchor="middle" fontSize={12} fill="#6b7280">4</text>
      <text x={395} y={14} textAnchor="middle" fontSize={12} fill="#6b7280">3</text>
      
      <rect x={45} y={28} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={45} y1={28} x2={89} y2={72} stroke="#1f2937" strokeWidth={2} />
      <line x1={89} y1={28} x2={45} y2={72} stroke="#1f2937" strokeWidth={2} />
      <line x1={45} y1={50} x2={89} y2={50} stroke="#1f2937" strokeWidth={2} />
      
      <circle cx={175} cy={50} r={22} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={155} y1={58} x2={195} y2={42} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={258} y={28} width={54} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={258} y1={50} x2={312} y2={50} stroke="#1f2937" strokeWidth={2} />
      <line x1={285} y1={28} x2={285} y2={72} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M370 28 L410 42 L395 72 L345 72 L330 42 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={370} y1={28} x2={360} y2={72} stroke="#1f2937" strokeWidth={2} />
      <line x1={370} y1={28} x2={382} y2={72} stroke="#1f2937" strokeWidth={2} />
      <text x={65} y={94} textAnchor="middle" fontSize={12} fill="#1f2937">A</text>
      <text x={175} y={94} textAnchor="middle" fontSize={12} fill="#1f2937">B</text>
      <text x={285} y={94} textAnchor="middle" fontSize={12} fill="#1f2937">C</text>
      <text x={395} y={94} textAnchor="middle" fontSize={12} fill="#1f2937">D</text>
      </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>九宫格、图形被分割 → 先数面。逐格面数：第一行 4、9、2；第二行 3、5、7；第三行 8、1、? 。发现 <b>每行三个数之和都是 15</b>（列与对角线同样成立，4+3+8=15、9+5+1=15），故 8+1+?=15，?= <b>6</b>。<br />选项面数：A 为正方形被两条对角线加一条横线分成 6 块（6 面）；B 为 2 面；C 为 4 面；D 为 3 面。<br /><span className="correct">答案：A</span><br /><span className="source">来源：讲义例题4（24山东-50%）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      <Callout variant="key">
      <strong>面数量基础小结（4 类特征各不相同，但都指向“面”）：</strong>
      <PointList>
      <li><strong>生活化 → 面</strong>（例题1 加油站、自行车等图标）；</li>
      <li><strong>生活化（汉字、字母、数字）→ 面</strong>（例题2 齐蹴鞠溜）；</li>
      <li><strong>立体考查平面 → 面、点</strong>（把立体图形当平面图数面/数点）；</li>
      <li><strong>九宫格 → 面运算</strong>（例题4 每行相加为定值）。</li>
      </PointList>
      </Callout>
      </Block>
      
      <Block>
      <BlockTitle>3. 立体考查平面：“小心思”与考查方向</BlockTitle>
      <p>命题者把<strong>立体图形</strong>（棱锥、棱柱、棱台、正方体）画成“线框图”放进平面图形题里，考的仍然是<strong>平面上的面数、点数</strong>。</p>
      <Callout variant="key">考查方向：<strong>以“面”为主，“点”其次</strong>。立体图形数面时，把<strong>虚线（被遮挡的棱）也当成实线</strong>，每个封闭区域都算一个面。</Callout>
      <Callout variant="tip">记数口诀：<strong>棱柱 = 侧面数 + 2</strong>（n 棱柱：n 个侧面 + 上下 2 个底面）；<strong>棱锥 = 侧面数 + 1</strong>（n 棱锥：n 个侧面 + 1 个底面）；<strong>棱台 = 侧面数 + 2</strong>。</Callout>
      
      <Example>
      <ExampleHeader>📝 例题4 · 立体考查平面（全部·面数量）（2023 上海）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>下列选项中，符合所给图形的变化规律的是：</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 444 154" role="img" aria-label="题干四个立体图形及面数">
      <g transform="translate(6,16)">
      <text x={66} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">4</text>
      <text x={166} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">6</text>
      <text x={266} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">8</text>
      <text x={366} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">10</text>
      <rect x={16} y={26} width={100} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={116} y={26} width={100} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={216} y={26} width={100} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={316} y={26} width={100} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <path d="M42 44 L90 44 L66 96 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={76} y1={62} x2={90} y2={44} stroke="#1f2937" strokeWidth={2} />
      <line x1={76} y1={62} x2={66} y2={96} stroke="#1f2937" strokeWidth={2} />
      <line x1={76} y1={62} x2={42} y2={44} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      
      <rect x={140} y={52} width={46} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M140 52 L158 38 L204 38 L186 52" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={204} y1={38} x2={204} y2={82} stroke="#1f2937" strokeWidth={2} />
      <line x1={186} y1={52} x2={186} y2={96} stroke="#1f2937" strokeWidth={2} />
      <line x1={186} y1={96} x2={204} y2={82} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M240 72 L266 46 L292 72 L266 98 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={266} y1={46} x2={266} y2={98} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={240} y1={72} x2={292} y2={72} stroke="#1f2937" strokeWidth={1.5} />
      
      <text x={366} y={82} textAnchor="middle" fontSize={34} fill="#1f2937">?</text>
      </g>
      </svg><figcaption>图：题干图形（三棱锥4面、正方体6面、八面体8面、?）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 444 165.6" role="img" aria-label="四个选项及面数">
      <g transform="translate(6,16)">
      <text x={66} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">7</text>
      <text x={166} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">8</text>
      <text x={266} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">10 ✓</text>
      <text x={366} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">太多</text>
      <rect x={16} y={26} width={100} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={116} y={26} width={100} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={216} y={26} width={100} height={90} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <rect x={316} y={26} width={100} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <path d="M40 64 L62 52 L84 64 L76 94 L48 94 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M50 56 L72 44 L94 56 L86 86 L58 86 Z" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <line x1={40} y1={64} x2={50} y2={56} stroke="#1f2937" strokeWidth={2} />
      <line x1={62} y1={52} x2={72} y2={44} stroke="#1f2937" strokeWidth={2} />
      <line x1={84} y1={64} x2={94} y2={56} stroke="#1f2937" strokeWidth={2} />
      <line x1={76} y1={94} x2={86} y2={86} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={48} y1={94} x2={58} y2={86} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      
      <path d="M140 74 L166 48 L192 74 L166 100 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={166} y1={48} x2={166} y2={100} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={140} y1={74} x2={192} y2={74} stroke="#1f2937" strokeWidth={1.5} />
      
      <path d="M240 74 L266 52 L292 74 L281 92 L251 92 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M240 74 L266 100 L292 74" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={266} y1={52} x2={251} y2={92} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={266} y1={52} x2={281} y2={92} stroke="#1f2937" strokeWidth={1.2} />
      <line x1={266} y1={100} x2={251} y2={92} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={266} y1={100} x2={281} y2={92} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={266} y1={100} x2={266} y2={74} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      
      <circle cx={366} cy={72} r={28} fill="none" stroke="#1f2937" strokeWidth={2} />
      <ellipse cx={366} cy={72} rx={28} ry={9} fill="none" stroke="#1f2937" strokeWidth={1.2} strokeDasharray="5 4" />
      <ellipse cx={366} cy={72} rx={9} ry={28} fill="none" stroke="#1f2937" strokeWidth={1.2} strokeDasharray="5 4" />
      <text x={66.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">A</text>
      <text x={166.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">B</text>
      <text x={266.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">C</text>
      <text x={366.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">D</text>
      </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>题干全是立体图形，考“平面上的面数”，虚线部分也数面。面数依次 <b>4、6、8、10</b>，等差数列，?= <b>10</b> 面。A 为五棱柱 7 面；B 为八面体 8 面；<b>C 为五棱双锥（上、下各 5 个三角面）共 10 面</b>；D 为球面，面数“太多”且无法确定。<br /><span className="correct">答案：C</span><br /><span className="source">来源：讲义例题3（23上海-74%）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      
      <Example>
      <ExampleHeader>📝 例题5 · 立体考查平面（全部·面数量=6）（2020 四川）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 444 154" role="img" aria-label="题干五个立体图形均为六面">
      <g transform="translate(6,16)">
      <text x={66} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">6</text>
      <text x={166} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">6</text>
      <text x={266} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">6</text>
      <text x={366} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">6</text>
      <rect x={16} y={26} width={100} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={116} y={26} width={100} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={216} y={26} width={100} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={316} y={26} width={100} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <path d="M46 78 L66 66 L88 78 L80 100 L54 100 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={66} y1={42} x2={46} y2={78} stroke="#1f2937" strokeWidth={2} />
      <line x1={66} y1={42} x2={66} y2={66} stroke="#1f2937" strokeWidth={2} />
      <line x1={66} y1={42} x2={88} y2={78} stroke="#1f2937" strokeWidth={2} />
      <line x1={66} y1={42} x2={80} y2={100} stroke="#1f2937" strokeWidth={2} />
      <line x1={66} y1={42} x2={54} y2={100} stroke="#1f2937" strokeWidth={2} />
      <line x1={52} y1={90} x2={66} y2={88} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={66} y1={88} x2={82} y2={90} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={66} y1={88} x2={66} y2={100} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      
      <path d="M132 56 L176 56 L176 96 L132 96 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M132 56 L148 44 L192 44 L176 56" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={192} y1={44} x2={192} y2={84} stroke="#1f2937" strokeWidth={2} />
      <line x1={176} y1={96} x2={192} y2={84} stroke="#1f2937" strokeWidth={2} />
      <line x1={132} y1={96} x2={148} y2={84} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={148} y1={44} x2={148} y2={84} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      
      <path d="M240 46 L292 46 L280 96 L252 96 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={252} y1={96} x2={258} y2={86} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={280} y1={96} x2={274} y2={86} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={258} y1={86} x2={274} y2={86} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      
      <path d="M336 52 L382 52 L382 92 L336 92 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M336 52 L356 40 L402 40 L382 52" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={402} y1={40} x2={402} y2={80} stroke="#1f2937" strokeWidth={2} />
      <line x1={382} y1={92} x2={402} y2={80} stroke="#1f2937" strokeWidth={2} />
      <line x1={336} y1={92} x2={356} y2={80} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={356} y1={40} x2={356} y2={80} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={356} y1={80} x2={402} y2={80} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      </g>
      </svg><figcaption>图：题干图形（每个立体图形都是 6 个面）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 444 165.6" role="img" aria-label="四个选项及面数">
      <g transform="translate(6,16)">
      <text x={66} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">6 ✓</text>
      <text x={166} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">5</text>
      <text x={266} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">2</text>
      <text x={366} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">8</text>
      <rect x={16} y={26} width={100} height={90} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <rect x={116} y={26} width={100} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={216} y={26} width={100} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={316} y={26} width={100} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <path d="M40 50 L92 50 L80 96 L52 96 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={52} y1={96} x2={58} y2={86} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={80} y1={96} x2={74} y2={86} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={58} y1={86} x2={74} y2={86} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      
      <path d="M136 92 L172 92 L154 50 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M148 80 L184 80 L166 38 Z" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <line x1={136} y1={92} x2={148} y2={80} stroke="#1f2937" strokeWidth={2} />
      <line x1={172} y1={92} x2={184} y2={80} stroke="#1f2937" strokeWidth={2} />
      <line x1={154} y1={50} x2={166} y2={38} stroke="#1f2937" strokeWidth={2} />
      <line x1={154} y1={50} x2={166} y2={38} stroke="#1f2937" strokeWidth={1.5} />
      
      <circle cx={266} cy={72} r={30} fill="none" stroke="#1f2937" strokeWidth={2} />
      <ellipse cx={266} cy={72} rx={30} ry={8} fill="none" stroke="#1f2937" strokeWidth={1.2} strokeDasharray="5 4" />
      
      <path d="M346 56 L368 44 L390 56 L390 84 L368 96 L346 84 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M356 62 L378 50 L400 62 L400 90 L378 102 L356 90 Z" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <line x1={346} y1={56} x2={356} y2={62} stroke="#1f2937" strokeWidth={2} />
      <line x1={390} y1={56} x2={400} y2={62} stroke="#1f2937" strokeWidth={2} />
      <line x1={368} y1={44} x2={378} y2={50} stroke="#1f2937" strokeWidth={2} />
      <line x1={346} y1={84} x2={356} y2={90} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={390} y1={84} x2={400} y2={90} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={368} y1={96} x2={378} y2={102} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      <text x={66.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">A</text>
      <text x={166.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">B</text>
      <text x={266.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">C</text>
      <text x={366.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">D</text>
      </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>题干五幅立体图形，每一幅都是 <b>6 个面</b>（规律为恒定：面数均为 6）。选项 A 为四棱台，2 个四边形底面 + 4 个梯形侧面 = <b>6 面</b>，符合；B 为三棱柱 5 面；C 为球体，曲面无法构成 6 个平面；D 为六棱柱 8 面。<br /><span className="correct">答案：A</span><br /><span className="source">来源：讲义“立体考查平面”页（2020四川）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      <Callout variant="tip">同一页还并列了【2021联考·点数量】一题（同为立体图形，考点换成数交点：3、4、5、6 → 7）。<strong>立体图形在数量规律里既可以考面，也可以考点</strong>——数面数不清时，马上换点数。</Callout>
      </Block>
      
      <Block>
      <BlockTitle>4. 细化考点（1）所有面：分割后每个面的形状（三角形高频）</BlockTitle>
      <p>数完面的数量还没规律，就进入“细化”：<strong>看每一个面的形状</strong>（整体思想）。</p>
      <PointList>
      <li><strong>所有面同一种形状</strong>：每个面的形状一样（如全是三角形、全是四边形、全是五边形）；</li>
      <li><strong>只有两种形状的面 → 运算</strong>：整幅图只由三角形与四边形构成，就把“三角形个数”与“四边形个数”拿出来做运算（<strong>相减、倍数、相加</strong>）；</li>
      <li><strong>部分面：只数三角形（拆分思想）</strong>：不管四边形，只数图中共有几个三角形。</li>
      </PointList>
      <Callout variant="key"><strong>三角形 = 高频中的高频</strong>。看到“图形被分割、线条交叉”，先把三角形数一遍。三角形的考查方式：<strong>单数（恒定）、递增、运算</strong>。</Callout>
      <Callout variant="formula"><span className="formula">所有面 · 大小面 · 相同面 ＋ 形状 · 属性 · 面积（刘义恒“记忆口诀”）</span></Callout>
      
      <Example>
      <ExampleHeader>📝 例题6 · 只数三角形（三角形个数递增）（2024 江苏事业）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>请从所给的四个选项中，选出最合适的一个填入问号处，使之呈现一定的规律性。</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 454.5 144" role="img" aria-label="题干五个正方形分割图形及三角形个数">
      <g transform="translate(0,18)">
      <text x={56} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">1</text>
      <text x={136} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">2</text>
      <text x={216} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">3</text>
      <text x={296} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">4</text>
      <text x={376} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">5</text>
      <rect x={26} y={24} width={60} height={80} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={106} y={24} width={60} height={80} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={186} y={24} width={60} height={80} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={266} y={24} width={60} height={80} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={346} y={24} width={60} height={80} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <path d="M40 40 L76 40 L76 88 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <rect x={116} y={44} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={116} y1={44} x2={160} y2={88} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={196} y={46} width={42} height={42} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={196} y1={46} x2={238} y2={88} stroke="#1f2937" strokeWidth={2} />
      <line x1={196} y1={46} x2={232} y2={67} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={276} y={46} width={42} height={42} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={276} y1={46} x2={318} y2={88} stroke="#1f2937" strokeWidth={2} />
      <line x1={276} y1={46} x2={312} y2={67} stroke="#1f2937" strokeWidth={2} />
      <line x1={276} y1={46} x2={291} y2={88} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={356} y={46} width={42} height={42} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={356} y1={46} x2={398} y2={88} stroke="#1f2937" strokeWidth={2} />
      <line x1={356} y1={46} x2={392} y2={67} stroke="#1f2937" strokeWidth={2} />
      <line x1={356} y1={46} x2={371} y2={88} stroke="#1f2937" strokeWidth={2} />
      <line x1={356} y1={46} x2={376} y2={88} stroke="#1f2937" strokeWidth={2} />
      <text x={426} y={70} textAnchor="middle" fontSize={26} fill="#1f2937">?</text>
      </g>
      </svg><figcaption>图：题干图形（三角形个数依次为 1、2、3、4、5）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 474 155.8" role="img" aria-label="四个选项及三角形个数">
      <g transform="translate(6,17.2)">
      <text x={66} y={16} textAnchor="middle" fontSize={12} fill="#6b7280">4</text>
      <text x={176} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">6 ✓</text>
      <text x={286} y={16} textAnchor="middle" fontSize={12} fill="#6b7280">7</text>
      <text x={396} y={16} textAnchor="middle" fontSize={12} fill="#6b7280">6</text>
      <rect x={16} y={24} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={126} y={24} width={100} height={84} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <rect x={236} y={24} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={346} y={24} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <rect x={38} y={36} width={56} height={56} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={38} y1={36} x2={94} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={94} y1={36} x2={38} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={66} y1={36} x2={66} y2={64} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={148} y={36} width={56} height={56} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={148} y1={36} x2={204} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={204} y1={36} x2={148} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={176} y1={36} x2={176} y2={64} stroke="#1f2937" strokeWidth={2} />
      <line x1={176} y1={64} x2={204} y2={64} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={258} y={36} width={56} height={56} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={258} y1={36} x2={314} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={314} y1={36} x2={258} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={286} y1={36} x2={286} y2={64} stroke="#1f2937" strokeWidth={2} />
      <line x1={286} y1={64} x2={314} y2={64} stroke="#1f2937" strokeWidth={2} />
      <line x1={258} y1={64} x2={286} y2={64} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={368} y={36} width={56} height={56} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={368} y1={36} x2={424} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={424} y1={36} x2={368} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={424} y1={36} x2={368} y2={64} stroke="#1f2937" strokeWidth={2} />
      <line x1={368} y1={64} x2={424} y2={92} stroke="#1f2937" strokeWidth={2} />
      <text x={66.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">A</text>
      <text x={176.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">B</text>
      <text x={286.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">C</text>
      <text x={396.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">D</text>
      </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>图形被分割 → 先数面，面数无规律；转“细化：只数三角形”。题干三角形个数依次为 <b>1、2、3、4、5</b>，等差数列，问号处应为 <b>6</b> 个三角形。<br />选项 A 为 4 个、C 为 7 个；B、D 都是 6 个。此时用<strong>“相邻比较”</strong>排除 D——题干中后一幅图都是在前一幅图的基础上“多切一刀、多出一个三角形”，保留上一幅的线条结构；只有 B 沿用了这一“同源叠加”的画法。<br /><span className="correct">答案：B</span><br /><span className="source">来源：讲义例题5（24江苏事业-91%）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      <Callout variant="key">
      <strong>“相邻比较”怎么出？</strong><br />
      ① 核心：<strong>相邻两幅图之间“有一样的部分”</strong>（后一幅图保留了前一幅图的某几笔）；<br />
      ② 易错：“不一样的部分”可以有规律，也可以<strong>没有规律</strong>——别去硬找它的规律。
      </Callout>
      
      <Example>
      <ExampleHeader>📝 例题7 · 所有面（每个面的边长数相同）（2025 联考）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 456.5 156" role="img" aria-label="题干五幅图及每个面的边数">
      <g transform="translate(2,18)">
      <text x={56} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">8</text>
      <text x={136} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">7</text>
      <text x={216} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">6</text>
      <text x={296} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">5</text>
      <text x={376} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">4</text>
      <rect x={20} y={24} width={72} height={92} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={100} y={24} width={72} height={92} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={180} y={24} width={72} height={92} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={260} y={24} width={72} height={92} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={340} y={24} width={72} height={92} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <path d="M44 58 L66 48 L88 58 L88 78 L66 88 L44 78 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M50 61 L66 54 L82 61 L82 75 L66 82 L50 75 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <path d="M112 62 L132 52 L152 60 L148 76 L124 82 L108 72 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M112 92 L132 82 L158 88 L152 100 L124 104 L106 98 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={108} y1={72} x2={106} y2={98} stroke="#1f2937" strokeWidth={2} />
      <line x1={148} y1={76} x2={152} y2={100} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M208 70 L222 58 L236 70 L236 86 L222 98 L208 86 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M240 60 L254 48 L268 60 L268 76 L254 88 L240 76 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <path d="M296 74 L310 64 L324 74 L319 90 L303 90 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={296} y1={74} x2={286} y2={62} stroke="#1f2937" strokeWidth={2} />
      <line x1={310} y1={64} x2={310} y2={50} stroke="#1f2937" strokeWidth={2} />
      <line x1={324} y1={74} x2={336} y2={64} stroke="#1f2937" strokeWidth={2} />
      <line x1={319} y1={90} x2={330} y2={98} stroke="#1f2937" strokeWidth={2} />
      <line x1={303} y1={90} x2={294} y2={100} stroke="#1f2937" strokeWidth={2} />
      <path d="M286 62 L310 50 L336 64 L330 98 L294 100 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <rect x={360} y={56} width={40} height={40} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M360 56 L376 42 L416 42 L400 56" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={416} y1={42} x2={416} y2={82} stroke="#1f2937" strokeWidth={2} />
      <line x1={400} y1={56} x2={400} y2={96} stroke="#1f2937" strokeWidth={2} />
      <text x={426} y={80} textAnchor="middle" fontSize={26} fill="#1f2937">?</text>
      </g>
      </svg><figcaption>图：题干图形（红字为“每个面的边数”）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 474 165.8" role="img" aria-label="四个选项">
      <g transform="translate(6,17.2)">
      <text x={66} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">3 ✓</text>
      <text x={176} y={16} textAnchor="middle" fontSize={12} fill="#6b7280">8</text>
      <text x={286} y={16} textAnchor="middle" fontSize={12} fill="#6b7280">每个面的边数不同</text>
      <text x={396} y={16} textAnchor="middle" fontSize={12} fill="#6b7280">每个面的边数不同</text>
      <rect x={16} y={24} width={100} height={92} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <rect x={126} y={24} width={100} height={92} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={236} y={24} width={100} height={92} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={346} y={24} width={100} height={92} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <path d="M46 96 L96 96 L71 84 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M66 42 L46 96 L96 96 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={66} y1={42} x2={71} y2={84} stroke="#1f2937" strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={80} y1={96} x2={71} y2={84} stroke="#1f2937" strokeWidth={1.2} />
      
      <path d="M156 62 L176 48 L202 54 L212 78 L196 98 L170 100 L150 84 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={156} y1={62} x2={212} y2={78} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={150} y1={84} x2={202} y2={54} stroke="#1f2937" strokeWidth={1.5} />
      
      <rect x={256} y={56} width={60} height={40} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={272} y={66} width={28} height={20} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={256} y1={56} x2={272} y2={66} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={316} y1={56} x2={300} y2={66} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={256} y1={96} x2={272} y2={86} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={316} y1={96} x2={300} y2={86} stroke="#1f2937" strokeWidth={1.5} />
      
      <path d="M396 54 L420 68 L420 88 L396 100 L372 88 L372 68 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={372} y1={68} x2={420} y2={88} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={420} y1={68} x2={372} y2={88} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={396} y1={54} x2={396} y2={100} stroke="#1f2937" strokeWidth={1.5} />
      <text x={66.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">A</text>
      <text x={176.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">B</text>
      <text x={286.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">C</text>
      <text x={396.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">D</text>
      </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>图形被分割 → 先数面，面数 2、2、2、6、3 无规律；转“细化：所有面的形状”。观察发现每一幅图里<strong>所有面的边数都相同</strong>：①都是八边形（8边），②都是七边形（7边），③都是六边形（6边），④都是五边形（5边，中心五边形 + 5 个外圈五边形），⑤正方体三个面都是四边形（4边）。边数依次 8、7、6、5、4，问号处应为“所有面都是 <b>3</b> 边形（三角形）”。<br />A 是四面体线框，4 个面全是三角形，符合；B 的各个面边数不同；C、D 各面边数也不相同。<br /><span className="correct">答案：A</span><br /><span className="source">来源：讲义例题6（25联考-59%）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      
      <Example>
      <ExampleHeader>📝 例题8 · 反推“只数三角形”（从 0 开始是难点）（2024 联考）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定规律性：</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 454.5 148" role="img" aria-label="题干五个分割正方形及三角形个数">
      <g transform="translate(0,18)">
      <text x={56} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">0</text>
      <text x={136} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">1</text>
      <text x={216} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">2</text>
      <text x={296} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">3</text>
      <text x={376} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">4</text>
      <rect x={26} y={24} width={60} height={84} fill="none" stroke="#10b981" strokeWidth={2.5} />
      <rect x={106} y={24} width={60} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={186} y={24} width={60} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={266} y={24} width={60} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={346} y={24} width={60} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <rect x={34} y={32} width={44} height={68} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={34} y1={54} x2={78} y2={54} stroke="#1f2937" strokeWidth={2} />
      <line x1={56} y1={54} x2={56} y2={100} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={116} y={44} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={116} y1={44} x2={143} y2={88} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={196} y={44} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={196} y1={44} x2={240} y2={88} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={276} y={44} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={276} y1={44} x2={320} y2={88} stroke="#1f2937" strokeWidth={2} />
      <line x1={320} y1={44} x2={298} y2={66} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={356} y={44} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={356} y1={44} x2={400} y2={88} stroke="#1f2937" strokeWidth={2} />
      <line x1={400} y1={44} x2={378} y2={66} stroke="#1f2937" strokeWidth={2} />
      <line x1={356} y1={88} x2={378} y2={66} stroke="#1f2937" strokeWidth={2} />
      <text x={426} y={70} textAnchor="middle" fontSize={26} fill="#1f2937">?</text>
      </g>
      </svg><figcaption>图：题干图形（三角形个数为 0、1、2、3、4，注意第一幅是 0）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 474 155.8" role="img" aria-label="四个选项及三角形个数">
      <g transform="translate(6,17.2)">
      <text x={66} y={16} textAnchor="middle" fontSize={12} fill="#6b7280">4</text>
      <text x={176} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">5 ✓</text>
      <text x={286} y={16} textAnchor="middle" fontSize={12} fill="#6b7280">3</text>
      <text x={396} y={16} textAnchor="middle" fontSize={12} fill="#6b7280">6</text>
      <rect x={16} y={24} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={126} y={24} width={100} height={84} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <rect x={236} y={24} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={346} y={24} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <rect x={38} y={40} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={38} y1={40} x2={90} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={90} y1={40} x2={38} y2={92} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={148} y={40} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={148} y1={40} x2={200} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={200} y1={40} x2={174} y2={66} stroke="#1f2937" strokeWidth={2} />
      <line x1={148} y1={92} x2={174} y2={66} stroke="#1f2937" strokeWidth={2} />
      <line x1={148} y1={40} x2={187} y2={53} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={258} y={40} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={258} y1={40} x2={310} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={310} y1={40} x2={284} y2={66} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={368} y={40} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={368} y1={40} x2={420} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={420} y1={40} x2={368} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={394} y1={40} x2={394} y2={66} stroke="#1f2937" strokeWidth={2} />
      <line x1={394} y1={66} x2={420} y2={66} stroke="#1f2937" strokeWidth={2} />
      <text x={66.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">A</text>
      <text x={176.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">B</text>
      <text x={286.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">C</text>
      <text x={396.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">D</text>
      </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>图形被分割，先数面（无规律），转“只数三角形”。题干三角形个数依次为 <b>0、1、2、3、4</b>，问号处应为 <b>5</b> 个三角形。<br />逐项数三角形：A 为 4 个，B 为 5 个，C 为 3 个，D 为 6 个。<br /><span className="correct">答案：B</span><br /><span className="source">来源：讲义例题7（24联考-62%）</span></ExampleAnswer>
      </ExampleBody>
      <Callout variant="tip">⚠️ <strong>易错：从 0 开始是难点。</strong>很多同学默认“第一幅至少有一个三角形”，看到第一幅图没有三角形就否定“数三角形”这条路。数三角形时，<strong>0 也是合法的取值</strong>。</Callout>
      </Example>
      
      <Example>
      <ExampleHeader>📝 例题9 · 两种面（三角形与四边形）的运算 · 分组分类（2022 国考）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：<br />A. ①②③，④⑤⑥　B. ①④⑤，②③⑥　C. ①②④，③⑤⑥　D. ①③⑥，②④⑤</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 488 159.5" role="img" aria-label="六个分割正方形及三角形四边形个数">
      <g transform="translate(12,13.4)">
      <rect x={10} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={86} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={162} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={238} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={314} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={390} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <text x={10} y={20} fontSize={12} fill="#ef4444">4</text>
      <text x={86} y={20} fontSize={12} fill="#ef4444">3</text>
      <text x={162} y={20} fontSize={12} fill="#ef4444">4</text>
      <text x={238} y={20} fontSize={12} fill="#ef4444">3</text>
      <text x={314} y={20} fontSize={12} fill="#ef4444">3</text>
      <text x={390} y={20} fontSize={12} fill="#ef4444">4</text>
      <text x={10} y={122} fontSize={12} fill="#2563eb">3</text>
      <text x={86} y={122} fontSize={12} fill="#2563eb">4</text>
      <text x={162} y={122} fontSize={12} fill="#2563eb">3</text>
      <text x={238} y={122} fontSize={12} fill="#2563eb">4</text>
      <text x={314} y={122} fontSize={12} fill="#2563eb">4</text>
      <text x={390} y={122} fontSize={12} fill="#2563eb">3</text>
      <text x={42} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">①</text>
      <text x={118} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">②</text>
      <text x={194} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">③</text>
      <text x={270} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">④</text>
      <text x={346} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">⑤</text>
      <text x={422} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">⑥</text>
      
      <rect x={10} y={34} width={64} height={64} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={10} y1={34} x2={74} y2={98} stroke="#1f2937" strokeWidth={2} />
      <line x1={74} y1={34} x2={10} y2={98} stroke="#1f2937" strokeWidth={2} />
      <line x1={34} y1={34} x2={18} y2={42} stroke="#1f2937" strokeWidth={2} />
      <line x1={58} y1={50} x2={58} y2={82} stroke="#1f2937" strokeWidth={2} />
      <line x1={26} y1={50} x2={26} y2={82} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={86} y={34} width={64} height={64} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={86} y1={66} x2={150} y2={66} stroke="#1f2937" strokeWidth={2} />
      <line x1={118} y1={34} x2={118} y2={98} stroke="#1f2937" strokeWidth={2} />
      <line x1={102} y1={34} x2={118} y2={66} stroke="#1f2937" strokeWidth={2} />
      <line x1={86} y1={82} x2={118} y2={98} stroke="#1f2937" strokeWidth={2} />
      <line x1={134} y1={66} x2={118} y2={98} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={162} y={34} width={64} height={64} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={162} y1={34} x2={226} y2={98} stroke="#1f2937" strokeWidth={2} />
      <line x1={226} y1={34} x2={162} y2={98} stroke="#1f2937" strokeWidth={2} />
      <line x1={186} y1={34} x2={170} y2={42} stroke="#1f2937" strokeWidth={2} />
      <line x1={210} y1={50} x2={210} y2={82} stroke="#1f2937" strokeWidth={2} />
      <line x1={178} y1={50} x2={178} y2={82} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={238} y={34} width={64} height={64} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={238} y1={66} x2={302} y2={66} stroke="#1f2937" strokeWidth={2} />
      <line x1={270} y1={34} x2={270} y2={98} stroke="#1f2937" strokeWidth={2} />
      <line x1={254} y1={34} x2={270} y2={66} stroke="#1f2937" strokeWidth={2} />
      <line x1={238} y1={82} x2={270} y2={98} stroke="#1f2937" strokeWidth={2} />
      <line x1={286} y1={66} x2={270} y2={98} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={314} y={34} width={64} height={64} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={314} y1={66} x2={378} y2={66} stroke="#1f2937" strokeWidth={2} />
      <line x1={346} y1={34} x2={346} y2={98} stroke="#1f2937" strokeWidth={2} />
      <line x1={330} y1={34} x2={346} y2={66} stroke="#1f2937" strokeWidth={2} />
      <line x1={314} y1={82} x2={346} y2={98} stroke="#1f2937" strokeWidth={2} />
      <line x1={362} y1={66} x2={346} y2={98} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={390} y={34} width={64} height={64} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={390} y1={34} x2={454} y2={98} stroke="#1f2937" strokeWidth={2} />
      <line x1={454} y1={34} x2={390} y2={98} stroke="#1f2937" strokeWidth={2} />
      <line x1={414} y1={34} x2={398} y2={42} stroke="#1f2937" strokeWidth={2} />
      <line x1={438} y1={50} x2={438} y2={82} stroke="#1f2937" strokeWidth={2} />
      <line x1={406} y1={50} x2={406} y2={82} stroke="#1f2937" strokeWidth={2} />
      </g>
      </svg><figcaption>图：六幅图均为正方形分割（上行红字=三角形个数，下行蓝字=四边形个数）</figcaption></figure>
      <ExampleAnswer><b>解析：</b>六幅图都是“正方形被线条分割”，面数不统一，但每一幅都<strong>只有两种形状的面：三角形和四边形</strong>——这就是“两种面 → 做运算”的信号。分别数出：<br />① 三角形4、四边形3；② 三角形3、四边形4；③ 三角形4、四边形3；④ 三角形3、四边形4；⑤ 三角形3、四边形4；⑥ 三角形4、四边形3。<br />于是 <b>①③⑥ 中三角形比四边形多 1 个（4-3=1）</b>，<b>②④⑤ 中四边形比三角形多 1 个（3-4=-1）</b>，恰好分为两类。<br /><span className="correct">答案：D</span><br /><span className="source">来源：讲义例题8（22国考-59%）</span></ExampleAnswer>
      </ExampleBody>
      <Callout variant="key">思维：<strong>两种面 → 运算</strong>。常用三种：<strong>相减</strong>（三角形数−四边形数）、<strong>相加</strong>、<strong>倍数</strong>。</Callout>
      </Example>
      </Block>
      
      <Block>
      <BlockTitle>5. 细化考点（2）大小面：最大的面、最小的面</BlockTitle>
      <p>命题者作图特点：图中有<strong>明显的大面或小面</strong>。难点在于“大小面”会与<strong>形状、属性、面积</strong>结合出题：</p>
      <PointList>
      <li><strong>形状：</strong>最大/最小面是三角形还是四边形；</li>
      <li><strong>形状：与外框的关系</strong>（最大面是“自己”还是“邻居”）——高频；</li>
      <li><strong>属性：最大/最小面的对称性</strong>（轴对称/中心对称）——高频；</li>
      <li><strong>属性：最大/最小面的曲直性</strong>——高频；</li>
      <li><strong>面积：</strong>最大/最小面占原图形的 1/2 等。</li>
      </PointList>
      <Callout variant="tip">实战思维：这一页的图形特征要“背诵后直接定位”——看到“图形被分割，且其中一块明显比别人大（或小）”，立刻逐个盯着“最大面（最小面）”看它的形状与属性。</Callout>
      
      <Example>
      <ExampleHeader>📝 例题10 · 大小面（最大面是三角形）（2024 浙江事业）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性。</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 488 128" role="img" aria-label="题干五幅图，最大面均为三角形">
      <g transform="translate(8,0)">
      <rect x={14} y={22} width={84} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={104} y={22} width={84} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={194} y={22} width={84} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={284} y={22} width={84} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={374} y={22} width={84} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <path d="M26 44 L90 44 L78 96 L38 96 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M26 44 L90 44 L78 96 Z" fill="#f59e0b" fillOpacity="0.28" stroke="none" />
      <line x1={26} y1={44} x2={78} y2={96} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M116 94 L158 94 L158 34 Z" fill="#f59e0b" fillOpacity="0.28" stroke="none" />
      <path d="M116 94 L158 94 L158 34 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={140} y1={94} x2={158} y2={34} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M206 34 L230 74 L266 64 L262 94 L210 94 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M206 34 L266 64 L210 94 Z" fill="#f59e0b" fillOpacity="0.28" stroke="none" />
      <line x1={206} y1={34} x2={266} y2={64} stroke="#1f2937" strokeWidth={2} />
      <line x1={266} y1={64} x2={210} y2={94} stroke="#1f2937" strokeWidth={2} />
      <line x1={230} y1={74} x2={266} y2={64} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M296 34 L368 34 L368 94 L296 94 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M296 34 L368 94 L296 94 Z" fill="#f59e0b" fillOpacity="0.28" stroke="none" />
      <line x1={296} y1={34} x2={368} y2={94} stroke="#1f2937" strokeWidth={2} />
      <line x1={340} y1={34} x2={368} y2={46} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M392 40 L444 40 L432 92 L404 92 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M392 40 L444 40 L432 92 Z" fill="#f59e0b" fillOpacity="0.28" stroke="none" />
      <line x1={392} y1={40} x2={432} y2={92} stroke="#1f2937" strokeWidth={2} />
      <text x={444} y={70} textAnchor="start" fontSize={26} fill="#1f2937">?</text>
      </g>
      </svg><figcaption>图：题干图形（橙色区域为“最大面”，均为三角形）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 474 138.6" role="img" aria-label="四个选项">
      <g transform="translate(6,0)">
      <rect x={16} y={22} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={126} y={22} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={236} y={22} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={346} y={22} width={100} height={84} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      
      <path d="M32 44 L100 44 L86 94 L46 94 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={52} y1={44} x2={52} y2={94} stroke="#1f2937" strokeWidth={2} />
      <line x1={52} y1={44} x2={86} y2={94} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M176 34 L216 66 L176 98 L136 66 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={136} y1={66} x2={216} y2={66} stroke="#1f2937" strokeWidth={2} />
      <line x1={176} y1={34} x2={176} y2={98} stroke="#1f2937" strokeWidth={2} />
      <line x1={156} y1={50} x2={196} y2={82} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M286 34 L336 46 L322 94 L262 94 L252 52 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={286} y1={34} x2={288} y2={94} stroke="#1f2937" strokeWidth={2} />
      <line x1={286} y1={34} x2={320} y2={94} stroke="#1f2937" strokeWidth={2} />
      <line x1={286} y1={34} x2={252} y2={52} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M376 94 L446 94 L446 34 Z" fill="#2563eb" fillOpacity="0.2" stroke="#1f2937" strokeWidth={2} />
      <text x={66.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">A</text>
      <text x={176.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">B</text>
      <text x={286.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">C</text>
      <text x={396.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">D</text>
      </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>五幅图都是“被分割、且有明显大面”的图形，锁定“大小面”。观察每幅图里<strong>面积最大的那个面，形状都是三角形</strong>（橙色区域）。<br />A 的最大面是四边形、B 与 C 的最大面也不是三角形；<strong>D 只有一个面，整体就是一个三角形</strong>，其“最大面”仍是三角形，符合规律。<br /><span className="correct">答案：D</span><br /><span className="source">来源：讲义例题9（24浙江事业-72%）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      
      <Example>
      <ExampleHeader>📝 例题11 · 大小面（最小面是下一幅图的外轮廓）（2024 广东事业）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>从所给的四个选项中，选择最合适的一项填入问号处，使之呈现一定规律性。</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 488 134" role="img" aria-label="题干五幅图，最小面依次成为下一幅图的外轮廓">
      <g transform="translate(8,0)">
      <rect x={14} y={26} width={84} height={86} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={104} y={26} width={84} height={86} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={194} y={26} width={84} height={86} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={284} y={26} width={84} height={86} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={374} y={26} width={84} height={86} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <path d="M28 94 L28 52 L56 36 L84 52 L84 94 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M56 36 L84 52 L84 70 L66 60 Z" fill="none" stroke="#10b981" strokeWidth={2.5} />
      
      <path d="M118 40 L174 56 L166 96 L110 88 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M118 40 L146 60 L120 74 Z" fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <line x1={118} y1={40} x2={146} y2={60} stroke="#1f2937" strokeWidth={2} />
      <line x1={146} y1={60} x2={120} y2={74} stroke="#1f2937" strokeWidth={2} />
      <line x1={146} y1={60} x2={166} y2={96} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M208 40 L254 96 L196 96 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M208 40 L226 62 L210 80 L196 62 Z" fill="none" stroke="#f59e0b" strokeWidth={2.5} />
      <line x1={208} y1={40} x2={226} y2={62} stroke="#1f2937" strokeWidth={2} />
      <line x1={226} y1={62} x2={210} y2={80} stroke="#1f2937" strokeWidth={2} />
      <line x1={210} y1={80} x2={196} y2={62} stroke="#1f2937" strokeWidth={2} />
      <line x1={196} y1={62} x2={208} y2={40} stroke="#1f2937" strokeWidth={2} />
      <line x1={226} y1={62} x2={254} y2={96} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M298 94 L368 94 L298 40 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M306 88 L322 88 L322 76 L306 76 Z" fill="none" stroke="#ef4444" strokeWidth={2.5} />
      <line x1={306} y1={88} x2={306} y2={76} stroke="#1f2937" strokeWidth={2} />
      <line x1={322} y1={88} x2={322} y2={76} stroke="#1f2937" strokeWidth={2} />
      <line x1={306} y1={76} x2={322} y2={76} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={398} y={42} width={46} height={46} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={398} y1={42} x2={444} y2={88} stroke="#1f2937" strokeWidth={2} />
      <text x={452} y={80} textAnchor="middle" fontSize={24} fill="#1f2937">?</text>
      </g>
      </svg><figcaption>图：题干图形（彩色小区域为“最小面”）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 474 148.6" role="img" aria-label="四个选项均为正方形与各种内接形状">
      <g transform="translate(6,0)">
      <rect x={16} y={24} width={100} height={86} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <rect x={126} y={24} width={100} height={86} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={236} y={24} width={100} height={86} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={346} y={24} width={100} height={86} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <rect x={26} y={34} width={80} height={66} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M26 50 L66 34 L106 60 L66 100 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <path d="M176 30 L216 64 L176 104 L136 64 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={176} y1={30} x2={176} y2={104} stroke="#1f2937" strokeWidth={2} />
      <line x1={136} y1={64} x2={216} y2={64} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M256 104 L346 104 L256 34 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={256} y1={34} x2={290} y2={70} stroke="#1f2937" strokeWidth={2} />
      <line x1={290} y1={70} x2={256} y2={70} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M396 30 L446 50 L434 100 L358 100 L346 50 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={396} y1={30} x2={396} y2={100} stroke="#1f2937" strokeWidth={2} />
      <line x1={396} y1={30} x2={346} y2={50} stroke="#1f2937" strokeWidth={2} />
      <text x={66.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">A</text>
      <text x={176.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">B</text>
      <text x={286.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">C</text>
      <text x={396.0} y={124.6} textAnchor="middle" fontSize={12} fill="#1f2937">D</text>
      </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>图形被分割且有一块明显很小的面 → 看“最小面”。把每幅图的<strong>最小面单独拿出来看</strong>，会发现它<strong>就是下一幅图的外轮廓</strong>：<br />图①的最小面是四边形 → 图②的外框是四边形；图②的最小面是三角形 → 图③的外框是三角形；图③的最小面是四边形 → 图④的外框是四边形；图④的最小面是<strong>正方形</strong> → 图⑤的外轮廓应是<strong>正方形</strong>。<br />只有 A 的外轮廓是正方形，符合“最小面是下一幅图的外轮廓”的链条。<br /><span className="correct">答案：A</span><br /><span className="source">来源：讲义例题10（24广东事业-57%）</span></ExampleAnswer>
      </ExampleBody>
      <Callout variant="tip">这一题的“小心思”在于<strong>用颜色/放大把最小面标出来</strong>，提醒你去盯最小面。看到题目图形中有一块“被特别标注的小面”，第一反应就是“最小面”。</Callout>
      </Example>
      </Block>
      
      <Block>
      <BlockTitle>6. 细化考点（3）相同面 与 面与面积</BlockTitle>
      <p><strong>相同面：</strong>大小、形状都一样的面（数<strong>个数</strong>、数<strong>组数</strong>）。命题者作图特点：图中有<strong>“明显的一样的面”</strong>（例如正方形内接一个圆，四角形成 4 个一模一样的面）。</p>
      <Callout variant="key">记忆口诀：<strong>所有、大小、相同 ＋ 形状、属性、面积</strong>——先看所有面，再看大小面，再看相同面；每一类都可以结合形状、属性、面积三个维度考。</Callout>
      <p><strong>面与面积：</strong>命题者作图特点是<strong>“黑块被分割，背景有网格”</strong>。考点两条：</p>
      <PointList>
      <li><strong>占比：</strong>黑色（白色）面积占整个图形的 1/2、1/3、1/4、1/5、1/6 等；</li>
      <li><strong>比大小：</strong>黑色面积与白色面积比较（大于、等于、小于）。</li>
      </PointList>
      <Callout variant="tip">⚠️ 易混点区分——“黑块被分割”时怎么选：<br />① 若有<strong>相同部分</strong>、图形能一一对应 → 优先<strong>黑白运算</strong>；<br />② 若背景<strong>有明显网格</strong>、黑白面积占比一眼可估 → 优先<strong>面积</strong>；<br />③ 若<strong>只有 1 个黑块（个数少）</strong> → 也是考<strong>面积</strong>。</Callout>
      
      <Example>
      <ExampleHeader>📝 例题12 · 相同面（4 个相同面）（2024 内蒙古事业）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性。</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 488 128" role="img" aria-label="题干五幅图均含四个相同的面">
      <g transform="translate(8,0)">
      <rect x={14} y={22} width={84} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={104} y={22} width={84} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={194} y={22} width={84} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={284} y={22} width={84} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={374} y={22} width={84} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <rect x={26} y={32} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={56} cy={62} r={30} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M26 32 L86 32 L86 92 L26 92 Z" fill="#f59e0b" fillOpacity="0.12" stroke="none" />
      
      <rect x={116} y={32} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={126} y={42} width={40} height={40} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={116} y1={32} x2={126} y2={42} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={176} y1={32} x2={166} y2={42} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={116} y1={92} x2={126} y2={82} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={176} y1={92} x2={166} y2={82} stroke="#1f2937" strokeWidth={1.5} />
      
      <path d="M206 32 L266 32 L266 92 L206 92 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M206 62 L236 32 L266 62 L236 92 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <path d="M300 32 A30 30 0 0 0 300 92 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={270} y1={62} x2={300} y2={62} stroke="#1f2937" strokeWidth={2} />
      <path d="M312 32 A30 30 0 0 1 312 92 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={342} y1={62} x2={312} y2={62} stroke="#1f2937" strokeWidth={2} />
      
      <text x={416} y={70} textAnchor="middle" fontSize={26} fill="#1f2937">?</text>
      </g>
      </svg><figcaption>图：题干图形（每幅图中都有 4 个“大小、形状都一样”的面）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 474 138.6" role="img" aria-label="四个选项">
      <g transform="translate(6,0)">
      <rect x={16} y={22} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={126} y={22} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={236} y={22} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={346} y={22} width={100} height={84} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      
      <rect x={26} y={32} width={80} height={64} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M50 42 L66 56 L52 72 L36 58 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={72} y={66} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <path d="M156 40 L196 40 L212 66 L196 92 L156 92 L140 66 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={140} y1={66} x2={212} y2={66} stroke="#1f2937" strokeWidth={2} />
      <line x1={156} y1={40} x2={156} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={196} y1={40} x2={196} y2={92} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={246} y={36} width={72} height={60} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M246 66 L282 36 L318 66 L282 96 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <path d="M358 62 L406 32 L406 92 Z" fill="#f59e0b" fillOpacity="0.15" stroke="none" />
      <path d="M434 62 L386 32 L386 92 Z" fill="#f59e0b" fillOpacity="0.15" stroke="none" />
      <path d="M358 62 L406 32 L406 92 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M434 62 L386 32 L386 92 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={396} y1={32} x2={396} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={358} y1={62} x2={434} y2={62} stroke="#1f2937" strokeWidth={2} />
      <text x={66.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">A</text>
      <text x={176.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">B</text>
      <text x={286.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">C</text>
      <text x={396.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">D</text>
      </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>题干每幅图都被分割，且都能找到<strong>“明显一样的几个面”</strong>，锁定“相同面”，数个数：<br />①正方形内切圆 → 四角 4 个相同面；②正方形内套错位正方形 → 4 个相同梯形；③正方形内接菱形 → 4 个相同三角形；④两个半圆各被平分 → 4 个相同面。规律：<strong>每幅图都有 4 个相同面</strong>。<br />A 内部两个小图形大小不同、B 各面形状不同、C 不足 4 个相同面；D 由两个三角形拼成、被竖线与横线分成 <strong>4 个相同的三角形</strong>，符合。<br /><span className="correct">答案：D</span><br /><span className="source">来源：讲义例题12（24内蒙古事业-58%）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      
      <Example>
      <ExampleHeader>📝 例题13 · 面积占比（黑块被分割 + 背景有网格）（2025 山东事业）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>请从所给的四个选项中选择最合适的一个填入问号处，使之呈现一定的规律。</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 480 153.3" role="img" aria-label="题干四幅黑白图及黑色面积占比">
      <g transform="translate(6,17.3)">
      <text x={56} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">1/6</text>
      <text x={156} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">1/5</text>
      <text x={256} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">1/4</text>
      <text x={356} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">1/3</text>
      <text x={426} y={16} textAnchor="middle" fontSize={12} fill="#ef4444">1/2</text>
      <rect x={16} y={24} width={80} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={116} y={24} width={80} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={216} y={24} width={80} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={316} y={24} width={80} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={396} y={24} width={56} height={90} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <path d="M36 50 L46 38 L56 50 L46 62 Z" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <path d="M56 50 L66 38 L76 50 L66 62 Z" fill="#1f2937" stroke="#1f2937" strokeWidth={1.5} />
      <path d="M36 74 L46 62 L56 74 L46 86 Z" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <path d="M56 74 L66 62 L76 74 L66 86 Z" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <path d="M36 98 L46 86 L56 98 L46 110 Z" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <path d="M56 98 L66 86 L76 98 L66 110 Z" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      
      <path d="M156 96 L124 62 L152 44 L180 62 L168 96 Z" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <path d="M152 66 L152 44 L180 62 Z" fill="#1f2937" stroke="#1f2937" strokeWidth={1.5} />
      <line x1={124} y1={62} x2={152} y2={66} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={180} y1={62} x2={152} y2={66} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={168} y1={96} x2={152} y2={66} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={156} y1={96} x2={152} y2={66} stroke="#1f2937" strokeWidth={1.5} />
      
      <circle cx={256} cy={68} r={30} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <path d="M256 68 L256 38 A30 30 0 0 0 226 68 Z" fill="#1f2937" stroke="#1f2937" strokeWidth={1.5} />
      <line x1={226} y1={68} x2={286} y2={68} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={256} y1={38} x2={256} y2={98} stroke="#1f2937" strokeWidth={1.5} />
      
      <rect x={330} y={52} width={52} height={34} fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <line x1={330} y1={69} x2={382} y2={69} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={347} y1={52} x2={347} y2={86} stroke="#1f2937" strokeWidth={1.5} />
      <line x1={364} y1={52} x2={364} y2={86} stroke="#1f2937" strokeWidth={1.5} />
      <rect x={364} y={52} width={18} height={17} fill="#1f2937" />
      <rect x={330} y={69} width={17} height={17} fill="#1f2937" />
      
      <text x={424} y={72} textAnchor="middle" fontSize={26} fill="#1f2937">?</text>
      </g>
      </svg><figcaption>图：题干图形（红字为黑色部分所占面积比：1/6、1/5、1/4、1/3、?）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 474 153.8" role="img" aria-label="四个选项">
      <g transform="translate(6,15.2)">
      <rect x={16} y={22} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={126} y={22} width={100} height={84} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <rect x={236} y={22} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={346} y={22} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <text x={176} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">1/2 ✓</text>
      <text x={286} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">1/3</text>
      <text x={396} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">2/3</text>
      
      <rect x={30} y={34} width={72} height={60} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={42} y={44} width={48} height={40} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30 34 L42 44 L90 44 L102 34 Z" fill="#1f2937" />
      
      <path d="M146 40 L206 40 L226 64 L206 88 L146 88 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M146 40 L206 40 L226 64 L146 64 Z" fill="#1f2937" />
      
      <circle cx={286} cy={64} r={28} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M286 64 L286 36 A28 28 0 0 1 310 78 Z" fill="#1f2937" stroke="#1f2937" strokeWidth={2} />
      <line x1={286} y1={36} x2={286} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={286} y1={92} x2={310} y2={78} stroke="#1f2937" strokeWidth={2} />
      
      <rect x={360} y={36} width={72} height={56} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={360} y={36} width={72} height={19} fill="#1f2937" />
      <rect x={360} y={74} width={72} height={18} fill="#1f2937" />
      <text x={66.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">A</text>
      <text x={176.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">B</text>
      <text x={286.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">C</text>
      <text x={396.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">D</text>
      </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>黑块被分割、背景有网格 → 考<strong>面积占比</strong>。题干黑色部分占整体的比例依次为 <b>1/6、1/5、1/4、1/3</b>，分子恒为 1、分母依次递减，问号处应为 <b>1/2</b>。<br />A 黑色是边框，占比很小；B 正好是“一半黑一半白”，黑色占 <b>1/2</b>，符合；C 占 1/3；D 两条横带全黑，占 2/3。<br /><span className="correct">答案：B</span><br /><span className="source">来源：讲义例题13（25山东事业-71%）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      </Block>
      
      <Block>
      <BlockTitle>7. 考点二 · 线数量：直线、曲线与线的运算</BlockTitle>
      <p><strong>什么是直线？</strong>直线是由无数个点构成、向两端无限延长的线。<strong>什么是曲线？</strong>曲线是动点运动时，方向连续变化所成的线。</p>
      <Callout variant="tip">怎么数线？<strong>看是否有明显的拐点（方向是否变化）</strong>。一条线从拐点处断开就应分成两条线；“一条直线被折一下”就变成两条。</Callout>
      <PointList>
      <li>命题者作图特点：<strong>① 单一线条　② 都有曲线　③ 多边形（外框）</strong>；</li>
      <li>解题思路：图案不同 → 属性（对称、曲直、开闭）→ 数量 → <strong>线</strong>；</li>
      <li>基础考点：<strong>线的数量、线的运算</strong>（相减、倍数、相加）。</li>
      </PointList>
      <Callout variant="formula"><span className="formula">图形特征：线特征 &gt; 面特征</span></Callout>
      <p>“线的运算”主要从这几组特征里做文章：<strong>曲线 / 直线、横线 / 竖线、外框 / 外框</strong>；命题者还会用<strong>曲直、内外、横竖、黑白、外框</strong>来作图。</p>
      <Callout variant="tip">实战思维：看到“单一线条、都有曲线、多边形外框”，背诵后<strong>直接定位“线数量”</strong>。特别是图形里有<strong>明显外框（多边形轮廓）</strong>时，马上想“外框与内部线条的运算”。</Callout>
      
      <Example>
      <ExampleHeader>📝 例题14 · 线数量（两个外框的线条数相等）（2024 国考）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>从所给的四个选项中，选择最合适的一项填入问号处，使之呈现一定的规律性：</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 488 151.6" role="img" aria-label="题干五幅图，外框与内轮廓线条数相等">
      <g transform="translate(8,1.5)">
      <rect x={14} y={40} width={84} height={66} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={104} y={40} width={84} height={66} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={194} y={40} width={84} height={66} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={284} y={40} width={84} height={66} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={374} y={40} width={84} height={66} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <text x={14} y={32} fontSize={12} fill="#f59e0b">外框①</text>
      <text x={56} y={32} fontSize={12} fill="#ef4444">6</text>
      <text x={146} y={32} fontSize={12} fill="#ef4444">4</text>
      <text x={236} y={32} fontSize={12} fill="#ef4444">5</text>
      <text x={326} y={32} fontSize={12} fill="#ef4444">3</text>
      <text x={416} y={32} fontSize={12} fill="#ef4444">5</text>
      <text x={14} y={126} fontSize={12} fill="#f59e0b">外框②</text>
      <text x={56} y={126} fontSize={12} fill="#2563eb">6</text>
      <text x={146} y={126} fontSize={12} fill="#2563eb">4</text>
      <text x={236} y={126} fontSize={12} fill="#2563eb">5</text>
      <text x={326} y={126} fontSize={12} fill="#2563eb">3</text>
      <text x={416} y={126} fontSize={12} fill="#2563eb">5</text>
      
      <path d="M28 96 L28 66 L42 54 L60 54 L76 66 L76 96 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M34 96 L34 70 L45 60 L58 60 L70 70 L70 96 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <path d="M118 60 L184 60 L184 92 L118 92 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M122 66 L178 66 L178 86 L122 86 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <path d="M206 58 L250 58 L268 74 L268 96 L206 96 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M212 64 L246 64 L260 77 L260 90 L212 90 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <path d="M296 94 L354 94 L296 60 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M303 89 L342 89 L303 68 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <path d="M388 58 L432 58 L444 74 L444 96 L388 96 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M394 64 L428 64 L438 78 L438 90 L394 90 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <text x={444} y={82} textAnchor="start" fontSize={26} fill="#1f2937">?</text>
      </g>
      </svg><figcaption>图：题干图形（每幅图的两个轮廓“外框①/外框②”线条数相等）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 474 148" role="img" aria-label="四个选项">
      <g transform="translate(6,0)">
      <rect x={16} y={22} width={100} height={84} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <rect x={126} y={22} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={236} y={22} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={346} y={22} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      
      <path d="M30 40 L104 40 L104 92 L30 92 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M44 50 L92 50 L92 84 L44 84 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <path d="M140 40 L214 40 L214 92 L140 92 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M156 52 L198 52 L210 66 L210 80 L156 80 L148 66 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <path d="M250 40 L314 40 L328 58 L328 92 L250 92 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M272 90 L306 90 L272 62 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      
      <path d="M360 40 L434 40 L434 92 L360 92 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M382 90 L416 90 L382 62 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <text x={66} y={124} textAnchor="middle" fontSize={12} fill="#1f2937">A</text>
      <text x={176} y={124} textAnchor="middle" fontSize={12} fill="#1f2937">B</text>
      <text x={286} y={124} textAnchor="middle" fontSize={12} fill="#1f2937">C</text>
      <text x={396} y={124} textAnchor="middle" fontSize={12} fill="#1f2937">D</text>
      </g>
      </svg>
      <figcaption>选项 A / B / C / D（A 外框4边、内轮廓4边）</figcaption></figure>
      <ExampleAnswer><b>解析：</b>每幅图都是“一个外轮廓 + 一个内轮廓”（框套框），属于典型的<strong>“外框 / 外框”线运算</strong>。逐幅数两个轮廓的线条数（线段数）：<br />图① 6/6、图② 4/4、图③ 5/5、图④ 3/3、图⑤ 5/5——规律是<strong>两个外框的线条数相等</strong>。<br />A 为正方形外套正方形，外框 4 条、内轮廓也 4 条，相等，符合；B 为外 4 内 6；C 为外 5 内 3；D 为外 4 内 3，均不相等。<br /><span className="correct">答案：A</span><br /><span className="source">来源：讲义例题14（24国考-57%）</span></ExampleAnswer>
      </ExampleBody>
      <Callout variant="tip">⚠️ 此题的两个“坑”：<br />① 有同学去数<strong>面</strong>或找<strong>对称轴</strong>，都是错误思路——本题是“多边形外框”混淆，考点在<strong>线数量</strong>；<br />② 还有同学去找“图形关系（相交线数量）”，先要<strong>排除图形关系</strong>这一干扰项。</Callout>
      </Example>
      </Block>
      
      <Block>
      <BlockTitle>8. 细化考点：平行线（永不相交的两条线）</BlockTitle>
      <p><strong>平行线：永不相交的两条线。</strong>命题者作图特点：大量使用<strong>“//”</strong>与<strong>相似三角形</strong>（相似三角形天然带平行边）。</p>
      <Callout variant="key">考点形式只有两种：<br />① <strong>组数</strong>——几“对”平行线（一对 2 条平行线算 1 组）；<br />② <strong>条数</strong>——超过 2 条的平行线一共几条。</Callout>
      <Callout variant="tip">看到图里有<strong>斜线成对出现</strong>、或有<strong>相似三角形</strong>，就要警觉：这是在“画平行线”。</Callout>
      
      <Example>
      <ExampleHeader>📝 例题15 · 平行线（组数·分组分类）（2024 浙江）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：<br />A. ①④⑤，②③⑥　B. ①②⑥，③④⑤　C. ①⑤⑥，②③④　D. ①③④，②⑤⑥</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 488 151.5" role="img" aria-label="六个图形及平行线组数">
      <g transform="translate(12,9.4)">
      <rect x={10} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={86} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={162} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={238} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={314} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={390} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <text x={10} y={24} fontSize={12} fill="#ef4444">2</text>
      <text x={86} y={24} fontSize={12} fill="#ef4444">2</text>
      <text x={162} y={24} fontSize={12} fill="#ef4444">1</text>
      <text x={238} y={24} fontSize={12} fill="#ef4444">1</text>
      <text x={314} y={24} fontSize={12} fill="#ef4444">1</text>
      <text x={390} y={24} fontSize={12} fill="#ef4444">2</text>
      <text x={42} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">①</text>
      <text x={118} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">②</text>
      <text x={194} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">③</text>
      <text x={270} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">④</text>
      <text x={346} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">⑤</text>
      <text x={422} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">⑥</text>
      
      <path d="M10 70 L74 70 L60 96 L24 96 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={10} y1={70} x2={74} y2={70} stroke="#10b981" strokeWidth={2.5} />
      <line x1={24} y1={96} x2={60} y2={96} stroke="#10b981" strokeWidth={2.5} />
      <line x1={46} y1={70} x2={40} y2={96} stroke="#ef4444" strokeWidth={2.5} />
      <line x1={32} y1={70} x2={26} y2={96} stroke="#ef4444" strokeWidth={2.5} />
      
      <rect x={86} y={46} width={64} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={86} y1={46} x2={150} y2={46} stroke="#10b981" strokeWidth={2.5} />
      <line x1={86} y1={90} x2={150} y2={90} stroke="#10b981" strokeWidth={2.5} />
      <line x1={86} y1={46} x2={86} y2={90} stroke="#ef4444" strokeWidth={2.5} />
      <line x1={150} y1={46} x2={150} y2={90} stroke="#ef4444" strokeWidth={2.5} />
      <line x1={86} y1={46} x2={150} y2={90} stroke="#1f2937" strokeWidth={2} />
      <line x1={150} y1={46} x2={86} y2={90} stroke="#1f2937" strokeWidth={2} />
      
      <line x1={170} y1={46} x2={170} y2={94} stroke="#10b981" strokeWidth={2.5} />
      <line x1={218} y1={46} x2={218} y2={94} stroke="#10b981" strokeWidth={2.5} />
      <line x1={170} y1={46} x2={218} y2={94} stroke="#1f2937" strokeWidth={2} />
      <line x1={218} y1={46} x2={170} y2={94} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M246 92 L302 92 L246 50 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={246} y1={92} x2={246} y2={50} stroke="#10b981" strokeWidth={2.5} />
      <line x1={262} y1={92} x2={262} y2={62} stroke="#10b981" strokeWidth={2.5} />
      
      <path d="M322 74 L378 74 L366 94 L330 94 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={322} y1={74} x2={378} y2={74} stroke="#10b981" strokeWidth={2.5} />
      <line x1={330} y1={94} x2={366} y2={94} stroke="#10b981" strokeWidth={2.5} />
      <line x1={322} y1={74} x2={366} y2={94} stroke="#1f2937" strokeWidth={2} />
      
      <path d="M392 48 L444 48 L434 92 L382 92 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={392} y1={48} x2={444} y2={48} stroke="#10b981" strokeWidth={2.5} />
      <line x1={382} y1={92} x2={434} y2={92} stroke="#10b981" strokeWidth={2.5} />
      <line x1={392} y1={48} x2={382} y2={92} stroke="#ef4444" strokeWidth={2.5} />
      <line x1={444} y1={48} x2={434} y2={92} stroke="#ef4444" strokeWidth={2.5} />
      </g>
      </svg><figcaption>图：六幅图（红字为平行线组数，同色线段表示同一组平行线）</figcaption></figure>
      <ExampleAnswer><b>解析：</b>逐幅找平行线、数组数：① 梯形上下底 1 组 + 与其腰平行的线 1 组 = <b>2 组</b>；② 矩形上下 1 组 + 左右 1 组 = <b>2 组</b>；③ 只有一对竖线平行 = <b>1 组</b>；④ 三角形的底边与内部一条与底边平行的线 = <b>1 组</b>；⑤ 只有上下底平行 = <b>1 组</b>；⑥ 有两组平行线 = <b>2 组</b>。<br />于是 <b>①②⑥ 都有 2 组平行线</b>，<b>③④⑤ 都只有 1 组平行线</b>。<br /><span className="correct">答案：B</span><br /><span className="source">来源：讲义例题16（24浙江-58%）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      <Callout variant="key"><strong>线数量小结：</strong><br />① 怎么数线？<strong>看是否有明显的拐点（方向是否变化）</strong>；<br />② 命题者作图特点：<strong>直线数</strong>——多边形外框、单一直线；<strong>曲线数</strong>——都有曲线、单一曲线；<br />③ 基础考法：线的数量、线的运算（曲线与直线、框与框、横线与竖线）；<br />④ 细化考法：<strong>平行线</strong>——斜线、相似三角形；考点为<strong>组数（2条平行线）</strong>与<strong>条数（&gt;2条平行线）</strong>。</Callout>
      </Block>
      
      <Block>
      <BlockTitle>9. 考点三 · 点数量：交点、切点、框点、曲直交点</BlockTitle>
      <p><strong>什么是“点”？</strong>线与线相交的位置（即：<strong>交点</strong>）。</p>
      <Callout variant="tip">⚠️ 提示：<strong>“端点”不是“点”</strong>。一条线孤零零地结束，那个端点不计入点的数量。</Callout>
      <p>命题者作图特点：<strong>① 有“面”的特征　② 多端点</strong>。<strong>【笔画没规律，再考虑点】</strong>——数笔画发现没规律时，马上转去数点。</p>
      <Callout variant="formula"><span className="formula">图形特征优先级：线特征 &gt; 面特征 &gt; 点特征</span></Callout>
      <PointList>
      <li>基础考法：<strong>点的数量</strong>；</li>
      <li>细化考法：<strong>（1）切点　（2）框点　（3）曲直交点</strong>；</li>
      <li>命题者作图特点：细化考点里<strong>都有“曲线”</strong>——要么是圆形，要么是非圆形。</li>
      </PointList>
      <Callout variant="key"><strong>答题思路（背下来直接套）：</strong><br />图里是<strong>圆形</strong>（含圆弧）→ 先数<b>切点</b> → 再数<b>框点</b>；<br />图里是<strong>非圆</strong>（曲线与直线相交）→ 数<b>曲直交点</b>。</Callout>
      <Callout variant="tip">难点提示：命题者会<strong>利用“多边形外框”来考“框点”</strong>（难度大，属于刻意设置）。<br />易混淆：<strong>“框上点”一般指“内部线条与外框的交点”</strong>；“框内点”指完全落在外框内部的交点。</Callout>
      
      <Example>
      <ExampleHeader>📝 例题16 · 点数量（交点数）（2024 浙江选调）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 496 133.6" role="img" aria-label="题干六幅图及交点个数">
      <g transform="translate(10,9.6)">
      <rect x={12} y={30} width={72} height={72} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={88} y={30} width={72} height={72} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={164} y={30} width={72} height={72} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={240} y={30} width={72} height={72} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={316} y={30} width={72} height={72} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={392} y={30} width={72} height={72} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <text x={36} y={24} textAnchor="middle" fontSize={12} fill="#ef4444">4</text>
      <text x={112} y={24} textAnchor="middle" fontSize={12} fill="#ef4444">5</text>
      <text x={188} y={24} textAnchor="middle" fontSize={12} fill="#ef4444">6</text>
      <text x={264} y={24} textAnchor="middle" fontSize={12} fill="#ef4444">4</text>
      <text x={340} y={24} textAnchor="middle" fontSize={12} fill="#ef4444">5</text>
      <text x={416} y={24} textAnchor="middle" fontSize={12} fill="#ef4444">?</text>
      
      <rect x={22} y={40} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={22} y1={40} x2={74} y2={92} stroke="#1f2937" strokeWidth={2} />
      <circle cx={22} cy={40} r={3.5} fill="#f59e0b" /><circle cx={74} cy={40} r={3.5} fill="#f59e0b" />
      <circle cx={74} cy={92} r={3.5} fill="#f59e0b" /><circle cx={22} cy={92} r={3.5} fill="#f59e0b" />
      
      <rect x={98} y={40} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={124} y1={40} x2={150} y2={92} stroke="#1f2937" strokeWidth={2} />
      <circle cx={98} cy={40} r={3.5} fill="#f59e0b" /><circle cx={150} cy={40} r={3.5} fill="#f59e0b" />
      <circle cx={150} cy={92} r={3.5} fill="#f59e0b" /><circle cx={98} cy={92} r={3.5} fill="#f59e0b" />
      <circle cx={124} cy={40} r={3.5} fill="#f59e0b" />
      
      <rect x={174} y={40} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={174} y1={40} x2={226} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={226} y1={40} x2={200} y2={92} stroke="#1f2937" strokeWidth={2} />
      <circle cx={174} cy={40} r={3.5} fill="#f59e0b" /><circle cx={226} cy={40} r={3.5} fill="#f59e0b" />
      <circle cx={226} cy={92} r={3.5} fill="#f59e0b" /><circle cx={174} cy={92} r={3.5} fill="#f59e0b" />
      <circle cx={200} cy={92} r={3.5} fill="#f59e0b" />
      <circle cx={209} cy={75} r={3.5} fill="#f59e0b" />
      
      <path d="M264 92 L316 92 L290 44 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={290} y1={44} x2={290} y2={92} stroke="#1f2937" strokeWidth={2} />
      <circle cx={264} cy={92} r={3.5} fill="#f59e0b" /><circle cx={316} cy={92} r={3.5} fill="#f59e0b" />
      <circle cx={290} cy={44} r={3.5} fill="#f59e0b" /><circle cx={290} cy={92} r={3.5} fill="#f59e0b" />
      
      <path d="M340 92 L392 92 L366 44 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={366} y1={44} x2={352} y2={92} stroke="#1f2937" strokeWidth={2} />
      <line x1={366} y1={44} x2={380} y2={92} stroke="#1f2937" strokeWidth={2} />
      <circle cx={340} cy={92} r={3.5} fill="#f59e0b" /><circle cx={392} cy={92} r={3.5} fill="#f59e0b" />
      <circle cx={366} cy={44} r={3.5} fill="#f59e0b" />
      <circle cx={352} cy={92} r={3.5} fill="#f59e0b" /><circle cx={380} cy={92} r={3.5} fill="#f59e0b" />
      
      <text x={428} y={76} textAnchor="middle" fontSize={26} fill="#1f2937">?</text>
      </g>
      </svg><figcaption>图：题干图形（橙点为交点，个数依次 4、5、6、4、5、?）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 474 153.8" role="img" aria-label="四个选项及交点个数">
      <g transform="translate(6,15.2)">
      <rect x={16} y={24} width={100} height={84} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <rect x={126} y={24} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={236} y={24} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={346} y={24} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <text x={66} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">6 ✓</text>
      <text x={176} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">7</text>
      <text x={286} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">7</text>
      <text x={396} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">7</text>
      
      <path d="M40 96 L104 96 L72 44 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={72} y1={44} x2={54} y2={96} stroke="#1f2937" strokeWidth={2} />
      <line x1={72} y1={44} x2={72} y2={96} stroke="#1f2937" strokeWidth={2} />
      <line x1={72} y1={44} x2={90} y2={96} stroke="#1f2937" strokeWidth={2} />
      <circle cx={40} cy={96} r={3} fill="#f59e0b" /><circle cx={104} cy={96} r={3} fill="#f59e0b" /><circle cx={72} cy={44} r={3} fill="#f59e0b" />
      <circle cx={54} cy={96} r={3} fill="#f59e0b" /><circle cx={72} cy={96} r={3} fill="#f59e0b" /><circle cx={90} cy={96} r={3} fill="#f59e0b" />
      
      <rect x={140} y={44} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={166} y1={44} x2={192} y2={96} stroke="#1f2937" strokeWidth={2} />
      <line x1={192} y1={44} x2={166} y2={96} stroke="#1f2937" strokeWidth={2} />
      <circle cx={140} cy={44} r={3} fill="#f59e0b" /><circle cx={192} cy={44} r={3} fill="#f59e0b" />
      <circle cx={192} cy={96} r={3} fill="#f59e0b" /><circle cx={140} cy={96} r={3} fill="#f59e0b" />
      <circle cx={166} cy={44} r={3} fill="#f59e0b" /><circle cx={166} cy={96} r={3} fill="#f59e0b" />
      <circle cx={179} cy={70} r={3} fill="#f59e0b" />
      
      <rect x={250} y={44} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={276} y1={44} x2={302} y2={96} stroke="#1f2937" strokeWidth={2} />
      <line x1={250} y1={70} x2={302} y2={44} stroke="#1f2937" strokeWidth={2} />
      <circle cx={250} cy={44} r={3} fill="#f59e0b" /><circle cx={302} cy={44} r={3} fill="#f59e0b" />
      <circle cx={302} cy={96} r={3} fill="#f59e0b" /><circle cx={250} cy={96} r={3} fill="#f59e0b" />
      <circle cx={276} cy={44} r={3} fill="#f59e0b" /><circle cx={250} cy={70} r={3} fill="#f59e0b" />
      <circle cx={269} cy={63} r={3} fill="#f59e0b" />
      
      <rect x={360} y={44} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={360} y1={44} x2={386} y2={96} stroke="#1f2937" strokeWidth={2} />
      <line x1={360} y1={70} x2={412} y2={44} stroke="#1f2937" strokeWidth={2} />
      <circle cx={360} cy={44} r={3} fill="#f59e0b" /><circle cx={412} cy={44} r={3} fill="#f59e0b" />
      <circle cx={412} cy={96} r={3} fill="#f59e0b" /><circle cx={360} cy={96} r={3} fill="#f59e0b" />
      <circle cx={386} cy={96} r={3} fill="#f59e0b" /><circle cx={360} cy={70} r={3} fill="#f59e0b" />
      <circle cx={370} cy={65} r={3} fill="#f59e0b" />
      <text x={66.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">A</text>
      <text x={176.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">B</text>
      <text x={286.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">C</text>
      <text x={396.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">D</text>
      </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>图形线条交叉明显、又多端点，想到“点”。题干分两组：前三幅 <b>4、5、6</b>，后三幅 <b>4、5、?</b>，同一规律，? = <b>6</b>。<br />数交点（线与线相交的位置）：A 中三角形三顶点 + 底边两端与竖线、横线的交点，共 <b>6</b> 个；B、C、D 均为 7 个。<br /><span className="correct">答案：A</span><br /><span className="source">来源：讲义例题17（24浙江选调-71%）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      
      <Example>
      <ExampleHeader>📝 例题17 · 切点（分组分类）（2024 广东事业）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>把下列图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是。<br />A. ①③④，②⑤⑥　B. ①②⑤，③④⑥　C. ①②④，③⑤⑥　D. ①⑤⑥，②③④</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 488 151.5" role="img" aria-label="六个图形及切点个数">
      <g transform="translate(12,9.4)">
      <rect x={10} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={86} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={162} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={238} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={314} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={390} y={34} width={64} height={64} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <text x={10} y={24} fontSize={12} fill="#ef4444">1</text>
      <text x={86} y={24} fontSize={12} fill="#ef4444">1</text>
      <text x={162} y={24} fontSize={12} fill="#ef4444">2</text>
      <text x={238} y={24} fontSize={12} fill="#ef4444">1</text>
      <text x={314} y={24} fontSize={12} fill="#ef4444">2</text>
      <text x={390} y={24} fontSize={12} fill="#ef4444">2</text>
      <text x={42} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">①</text>
      <text x={118} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">②</text>
      <text x={194} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">③</text>
      <text x={270} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">④</text>
      <text x={346} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">⑤</text>
      <text x={422} y={118} textAnchor="middle" fontSize={12} fill="#1f2937">⑥</text>
      
      <rect x={14} y={44} width={60} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={44} cy={60} r={16} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={44} cy={44} r={3.5} fill="#f59e0b" />
      
      <rect x={90} y={44} width={60} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={134} cy={66} r={16} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={150} cy={66} r={3.5} fill="#f59e0b" />
      
      <rect x={166} y={44} width={60} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={196} cy={69} r={25} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={196} cy={44} r={3.5} fill="#f59e0b" />
      <circle cx={196} cy={94} r={3.5} fill="#f59e0b" />
      
      <rect x={242} y={44} width={60} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={272} cy={78} r={16} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={272} cy={94} r={3.5} fill="#f59e0b" />
      
      <rect x={318} y={44} width={60} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={318} y1={74} x2={334} y2={74} stroke="#1f2937" strokeWidth={2} />
      <line x1={370} y1={74} x2={378} y2={74} stroke="#1f2937" strokeWidth={2} />
      <circle cx={352} cy={59} r={15} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={352} cy={44} r={3.5} fill="#f59e0b" />
      <circle cx={352} cy={74} r={3.5} fill="#f59e0b" />
      
      <rect x={394} y={46} width={60} height={46} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M396 90 L404 84 L396 78" fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={424} cy={69} r={23} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={424} cy={46} r={3.5} fill="#f59e0b" />
      <circle cx={424} cy={92} r={3.5} fill="#f59e0b" />
      </g>
      </svg><figcaption>图：六幅图均为“外框 + 圆/弧”（红字为切点个数，橙点为切点）</figcaption></figure>
      <ExampleAnswer><b>解析：</b>六幅图都有“曲线”，且外框内都放了一个圆（或弧）——符合“圆形 → 切点”的答题思路。逐幅数切点（圆与外框刚刚接触、只交于一点的位置）：<br />① 1 个、② 1 个、③ 2 个、④ 1 个、⑤ 2 个、⑥ 2 个。<br />于是 <b>①②④ 各有 1 个切点</b>，<b>③⑤⑥ 各有 2 个切点</b>，两类都成立。<br /><span className="correct">答案：C</span><br /><span className="source">来源：讲义例题18（24广东事业-96%）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      
      <Example>
      <ExampleHeader>📝 例题18 · 曲直交点（2025 浙江）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性。</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 466.5 134" role="img" aria-label="题干五幅图及曲直交点个数">
      <g transform="translate(10,10)">
      <rect x={12} y={30} width={72} height={72} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={88} y={30} width={72} height={72} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={164} y={30} width={72} height={72} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={240} y={30} width={72} height={72} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={316} y={30} width={72} height={72} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <text x={36} y={24} textAnchor="middle" fontSize={12} fill="#ef4444">2</text>
      <text x={112} y={24} textAnchor="middle" fontSize={12} fill="#ef4444">2</text>
      <text x={188} y={24} textAnchor="middle" fontSize={12} fill="#ef4444">2</text>
      <text x={264} y={24} textAnchor="middle" fontSize={12} fill="#ef4444">2</text>
      <text x={340} y={24} textAnchor="middle" fontSize={12} fill="#ef4444">2</text>
      <text x={416} y={24} textAnchor="middle" fontSize={12} fill="#ef4444">?</text>
      
      <line x1={26} y1={44} x2={26} y2={94} stroke="#1f2937" strokeWidth={2} />
      <path d="M26 44 A28 28 0 0 1 54 74" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M54 74 L70 44" fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={26} cy={44} r={3.5} fill="#f59e0b" />
      <circle cx={54} cy={74} r={3.5} fill="#f59e0b" />
      
      <ellipse cx={124} cy={60} rx={28} ry={14} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M112 88 L136 88 L124 70 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={120} cy={73} r={3.5} fill="#f59e0b" />
      <circle cx={128} cy={73} r={3.5} fill="#f59e0b" />
      
      <circle cx={200} cy={66} r={26} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={168} y1={86} x2={236} y2={46} stroke="#1f2937" strokeWidth={2} />
      <circle cx={174} cy={82} r={3.5} fill="#f59e0b" />
      <circle cx={217} cy={57} r={3.5} fill="#f59e0b" />
      
      <rect x={252} y={42} width={50} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M268 42 A34 34 0 0 1 302 76" fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={268} cy={42} r={3.5} fill="#f59e0b" />
      <circle cx={302} cy={76} r={3.5} fill="#f59e0b" />
      
      <path d="M328 92 L384 92 L356 44 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={356} cy={80} r={16} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={345} cy={92} r={3.5} fill="#f59e0b" />
      <circle cx={367} cy={92} r={3.5} fill="#f59e0b" />
      
      <text x={428} y={76} textAnchor="middle" fontSize={26} fill="#1f2937">?</text>
      </g>
      </svg><figcaption>图：题干图形（橙点为曲直交点，每幅图都是 2 个）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 474 153.8" role="img" aria-label="四个选项及曲直交点个数">
      <g transform="translate(6,15.2)">
      <rect x={16} y={24} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={126} y={24} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={236} y={24} width={100} height={84} fill="none" stroke="#6b7280" strokeWidth={1.5} />
      <rect x={346} y={24} width={100} height={84} fill="none" stroke="#2563eb" strokeWidth={2.5} />
      <text x={66} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">3</text>
      <text x={176} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">8</text>
      <text x={286} y={18} textAnchor="middle" fontSize={12} fill="#6b7280">3</text>
      <text x={396} y={18} textAnchor="middle" fontSize={12} fill="#ef4444">2 ✓</text>
      
      <rect x={30} y={36} width={72} height={60} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={60} cy={70} r={30} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={30} cy={70} r={3} fill="#f59e0b" />
      <circle cx={45} cy={96} r={3} fill="#f59e0b" />
      <circle cx={75} cy={96} r={3} fill="#f59e0b" />
      
      <rect x={140} y={36} width={72} height={60} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={176} cy={66} r={28} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={140} y1={48} x2={212} y2={48} stroke="#1f2937" strokeWidth={2} />
      <line x1={140} y1={60} x2={212} y2={60} stroke="#1f2937" strokeWidth={2} />
      <line x1={140} y1={72} x2={212} y2={72} stroke="#1f2937" strokeWidth={2} />
      <line x1={140} y1={84} x2={212} y2={84} stroke="#1f2937" strokeWidth={2} />
      <circle cx={155} cy={48} r={3} fill="#f59e0b" /><circle cx={197} cy={48} r={3} fill="#f59e0b" />
      <circle cx={148} cy={60} r={3} fill="#f59e0b" /><circle cx={204} cy={60} r={3} fill="#f59e0b" />
      <circle cx={148} cy={72} r={3} fill="#f59e0b" /><circle cx={204} cy={72} r={3} fill="#f59e0b" />
      <circle cx={155} cy={84} r={3} fill="#f59e0b" /><circle cx={197} cy={84} r={3} fill="#f59e0b" />
      
      <rect x={250} y={36} width={72} height={60} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={286} cy={64} r={28} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={250} y1={80} x2={322} y2={80} stroke="#1f2937" strokeWidth={2} />
      <circle cx={286} cy={36} r={3} fill="#f59e0b" />
      <circle cx={263} cy={80} r={3} fill="#f59e0b" />
      <circle cx={309} cy={80} r={3} fill="#f59e0b" />
      
      <rect x={360} y={36} width={72} height={60} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={396} cy={66} r={24} fill="none" stroke="#1f2937" strokeWidth={2} />
      <line x1={360} y1={66} x2={432} y2={66} stroke="#1f2937" strokeWidth={2} />
      <circle cx={372} cy={66} r={3} fill="#f59e0b" />
      <circle cx={420} cy={66} r={3} fill="#f59e0b" />
      <text x={66.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">A</text>
      <text x={176.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">B</text>
      <text x={286.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">C</text>
      <text x={396.0} y={114.6} textAnchor="middle" fontSize={12} fill="#1f2937">D</text>
      </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>每幅图里都有“曲线”，而且<strong>不是圆、而是曲线与直线相交</strong> → 按答题思路走“非圆 → 数曲直交点”。题干五幅图的曲直交点数都是 <b>2</b>（恒定规律），故问号处也应有 <b>2</b> 个曲直交点。<br />逐项数：A 有 3 个，B 有 8 个，C 有 3 个，D 恰有 <b>2</b> 个（曲线两端分别与直线相交）。<br /><span className="correct">答案：D</span><br /><span className="source">来源：讲义例题19（25浙江-66%）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      <Callout variant="tip">
      <strong>点数量 · 小结：</strong>点数量 = 交点数 + 曲直交点 + 切点 + 框内点。<br />
      命题者作图特点：<strong>面特征、多端点</strong>（<strong>笔画没规律，再考虑点</strong>）。<br />
      答题思路：<strong>圆形 → 切点 → 框点；非圆 → 曲直交点。</strong>难点是“利用多边形外框考查框点”；<strong>框上点一般指内部线条与外框的交点</strong>。
      </Callout>
      <Callout variant="key">
      <strong>第四节 · 数量规律（面、线、点）理论速记：</strong>
      <PointList>
      <li><strong>命题者作图特点：</strong>每幅图图案不一样；<strong>考点：①面 ②线 ③点 ④笔画 ⑤元素 ⑥角</strong>；</li>
      <li><strong>面：</strong>概念=白色封闭区域；特征=分割、封闭、生活化；基础=面的数量与九宫格面的运算；细化=所有面（形状·三角形高频：单数/递增/运算）、大小面（形状、属性、面积）、相同面；口诀=<strong>所有、大小、相同 ＋ 形状、属性、面积</strong>；</li>
      <li><strong>面积：</strong>特征=黑块被分割、背景有网格；考点=占比（1/2、1/3、1/4 等）与黑白面积比大小；</li>
      <li><strong>线：</strong>数线看拐点；特征=直线（多边形外框、单一直线）、曲线（都有曲线、单一曲线）；基础=线的数量与运算（曲线/直线、横线/竖线、外框/外框）；细化=平行线（斜线、相似三角形；组数、条数）；</li>
      <li><strong>点：</strong>概念=线与线相交的位置（端点不是点）；特征=面特征、多端点；基础=点的数量；细化=切点、框点、曲直交点；思路=圆形→切点→框点，非圆→曲直交点。</li>
      </PointList>
      </Callout>
      </Block>
      
          
            <Block>
        <BlockTitle>补充9. 线数量细化——"贪食蛇"与出题者"怎么抄"三变体（线条穿过小球/方块个数）</BlockTitle>
        <p>夸夸刷（一）P63-64 把"线"这一支叫做<b>"贪食蛇"</b>：一条折线在一格格子里越拐越长，判断点有两处——</p>
        <p>· <b>无小球（常规）</b>：看<b>首尾</b>（方向、平行/垂直、两线之间夹了几条线）、看<b>数量</b>（直角个数、平行线对数）；<br />· <b>有小球（升级）</b>：<b>内部相同的线分内外两层看</b>；<b>明显分 2 堆的，数每堆个数</b> → 这时变成统计"<b>线条穿过了几个小球/几个小方块</b>"。</p>
        <p>同一张 16 宫格底图，出题者至少"抄"出三个变体：<b>①白块内外分开移动 ②白块分 2 堆个数交替（5+5、6+4）③线条穿过小球 16 个 / 没穿过 9 个</b>（另加"线条穿过方块 8 个"）。</p>
        <Callout variant="key">口诀：<b>格子里的线 → 先看首尾，再看数量；格子里有线又有球 → 数"线穿过了几个球"</b>。</Callout>
        <Example>
          <ExampleHeader>📝 例题9 · 方格网中的"贪食蛇"（24广东-57%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下列选项中最符合所给图形规律的是。</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 446 128" role="img" aria-label="五幅方格网，内部折线逐幅增长">
      <g transform="translate(0,2)">
              <g stroke="#1f2937" fill="#ffffff" strokeWidth={1.2}>
                <rect x={36} y={20} width={68} height={68} /><rect x={116} y={20} width={68} height={68} /><rect x={196} y={20} width={68} height={68} /><rect x={276} y={20} width={68} height={68} /><rect x={356} y={20} width={68} height={68} />
              </g>
              <g stroke="#6b7280" fill="none" strokeWidth={0.8}>
                <line x1={49} y1={20} x2={49} y2={88} /><line x1={62} y1={20} x2={62} y2={88} /><line x1={75} y1={20} x2={75} y2={88} /><line x1={88} y1={20} x2={88} y2={88} />
                <line x1={36} y1={33} x2={104} y2={33} /><line x1={36} y1={46} x2={104} y2={46} /><line x1={36} y1={59} x2={104} y2={59} /><line x1={36} y1={72} x2={104} y2={72} />
                <line x1={129} y1={20} x2={129} y2={88} /><line x1={142} y1={20} x2={142} y2={88} /><line x1={155} y1={20} x2={155} y2={88} /><line x1={168} y1={20} x2={168} y2={88} />
                <line x1={116} y1={33} x2={184} y2={33} /><line x1={116} y1={46} x2={184} y2={46} /><line x1={116} y1={59} x2={184} y2={59} /><line x1={116} y1={72} x2={184} y2={72} />
                <line x1={209} y1={20} x2={209} y2={88} /><line x1={222} y1={20} x2={222} y2={88} /><line x1={235} y1={20} x2={235} y2={88} /><line x1={248} y1={20} x2={248} y2={88} />
                <line x1={196} y1={33} x2={264} y2={33} /><line x1={196} y1={46} x2={264} y2={46} /><line x1={196} y1={59} x2={264} y2={59} /><line x1={196} y1={72} x2={264} y2={72} />
                <line x1={289} y1={20} x2={289} y2={88} /><line x1={302} y1={20} x2={302} y2={88} /><line x1={315} y1={20} x2={315} y2={88} /><line x1={328} y1={20} x2={328} y2={88} />
                <line x1={276} y1={33} x2={344} y2={33} /><line x1={276} y1={46} x2={344} y2={46} /><line x1={276} y1={59} x2={344} y2={59} /><line x1={276} y1={72} x2={344} y2={72} />
                <line x1={369} y1={20} x2={369} y2={88} /><line x1={382} y1={20} x2={382} y2={88} /><line x1={395} y1={20} x2={395} y2={88} /><line x1={408} y1={20} x2={408} y2={88} />
                <line x1={356} y1={33} x2={424} y2={33} /><line x1={356} y1={46} x2={424} y2={46} /><line x1={356} y1={59} x2={424} y2={59} /><line x1={356} y1={72} x2={424} y2={72} />
              </g>
              <g stroke="#2563eb" fill="none" strokeWidth={1.8}>
                <polyline points="42,27 55,72 68,27" />
                <polyline points="122,27 148,27 174,72" />
                <polyline points="202,27 228,27 254,72 254,85" />
                <polyline points="282,85 282,60 308,85 334,60 334,85" />
                <polyline points="362,27 388,27 388,46 414,46 414,72 388,72" />
              </g>
              <g fontSize={10.5} fill="#6b7280" textAnchor="middle">
                <text x={70} y={102} fill="#6b7280">穿过 1 方块</text><text x={150} y={102} fill="#6b7280">2</text><text x={230} y={102} fill="#6b7280">3</text><text x={310} y={102} fill="#6b7280">4</text><text x={390} y={102} fill="#6b7280">5</text>
              </g>
            </g>
      </svg><figcaption>图：题干 5 幅（5×5 方格网 + 一条"贪食蛇"折线，长度逐幅 +1 段）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 406 130" role="img" aria-label="四个选项的方格网与折线">
      <g transform="translate(0,2)">
              <g stroke="#1f2937" fill="#ffffff" strokeWidth={1.2}>
                <rect x={76} y={20} width={68} height={68} /><rect x={156} y={20} width={68} height={68} /><rect x={236} y={20} width={68} height={68} /><rect x={316} y={20} width={68} height={68} />
              </g>
              <g stroke="#6b7280" fill="none" strokeWidth={0.8}>
                <line x1={89} y1={20} x2={89} y2={88} /><line x1={102} y1={20} x2={102} y2={88} /><line x1={115} y1={20} x2={115} y2={88} /><line x1={128} y1={20} x2={128} y2={88} />
                <line x1={76} y1={33} x2={144} y2={33} /><line x1={76} y1={46} x2={144} y2={46} /><line x1={76} y1={59} x2={144} y2={59} /><line x1={76} y1={72} x2={144} y2={72} />
                <line x1={169} y1={20} x2={169} y2={88} /><line x1={182} y1={20} x2={182} y2={88} /><line x1={195} y1={20} x2={195} y2={88} /><line x1={208} y1={20} x2={208} y2={88} />
                <line x1={156} y1={33} x2={224} y2={33} /><line x1={156} y1={46} x2={224} y2={46} /><line x1={156} y1={59} x2={224} y2={59} /><line x1={156} y1={72} x2={224} y2={72} />
                <line x1={249} y1={20} x2={249} y2={88} /><line x1={262} y1={20} x2={262} y2={88} /><line x1={275} y1={20} x2={275} y2={88} /><line x1={288} y1={20} x2={288} y2={88} />
                <line x1={236} y1={33} x2={304} y2={33} /><line x1={236} y1={46} x2={304} y2={46} /><line x1={236} y1={59} x2={304} y2={59} /><line x1={236} y1={72} x2={304} y2={72} />
                <line x1={329} y1={20} x2={329} y2={88} /><line x1={342} y1={20} x2={342} y2={88} /><line x1={355} y1={20} x2={355} y2={88} /><line x1={368} y1={20} x2={368} y2={88} />
                <line x1={316} y1={33} x2={384} y2={33} /><line x1={316} y1={46} x2={384} y2={46} /><line x1={316} y1={59} x2={384} y2={59} /><line x1={316} y1={72} x2={384} y2={72} />
              </g>
              <g stroke="#2563eb" fill="none" strokeWidth={1.8}>
                <polyline points="82,27 108,27 108,46 134,46 134,72" />
                <polyline points="162,72 188,72 188,46 214,46 214,27" />
                <polyline points="242,27 268,27 268,72 294,72" />
                <polyline points="322,72 348,72 348,46 374,46 374,27" />
              </g>
              <g fontSize={12} fill="#1f2937" textAnchor="middle">
                <text x={110} y={103} fill="#1f2937">A</text><text x={190} y={103} fill="#1f2937">B</text><text x={270} y={103} fill="#1f2937">C</text><text x={350} y={103} fill="#1f2937">D</text>
              </g>
            </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>每幅都是 5×5 方格网 + 一条折线（"贪食蛇"）：折线<b>每幅多一段（拐点 +1）</b>，且<b>穿过的方格数逐幅 +1</b>；同时首尾方向按规律变化。据此，第 6 幅应比第 5 幅再多一段，与 C 一致。<br /><span className="correct">答案：C</span><br /><span style={{ color: '#6b7280' }}>（原图折线走向密，此处按"每幅 +1 段、穿过方块数 +1"复刻示意。）</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
            <Block>
        <BlockTitle>补充7. 两套图形题（对比式）——分别数"曲线/直线"个数</BlockTitle>
        <p>夸夸刷（六）第 104 页、夸夸刷（五）第 9 页都出现同一种问法："<b>每道题包含两套图形……使第二套图形也表现出自己的特征</b>"。它不是普通的九宫格，而是<b>对比式</b>：第一套找规律，第二套沿用同一规律（但数值不同）。</p>
        <p>常考的规律就是<b>分别数曲线条数与直线条数</b>（六 · 23 北京：第一套 曲 2,3,2 / 直 4,4,2；第二套 曲 5,3 / 直 6,3）。也可能是数黑/白块个数。</p>
        <Callout variant="key">口诀：<b>两套图形，各算各的数，规律一样数不同</b>。<br />先在第一套里找"曲线数、直线数"的变化关系，再把同一关系套到第二套的"?"上。</Callout>
        <figure className="fig">
          <svg viewBox="0 0 464 170.1" role="img" aria-label="两套图形对比示意">
      <g transform="translate(0,13.1)">
            <g stroke="#1f2937" strokeWidth={1.4} fill="#fff">
              <rect x={30} y={30} width={70} height={70} /><rect x={112} y={30} width={70} height={70} /><rect x={194} y={30} width={70} height={70} />
            </g>
            <g stroke="#1f2937" strokeWidth={1.4} fill="none">
              <path d="M45 85 L45 55 Q65 45 85 55 L85 85" />
              <path d="M127 85 L127 52 Q147 60 147 85" />
              <path d="M215 82 L243 50 L243 82" />
            </g>
            <g fontSize={11.5} textAnchor="middle" fill="#2563eb">
              <text fill="#2563eb" x={65} y={20}>曲2 / 直4</text><text fill="#2563eb" x={147} y={20}>曲3 / 直4</text><text fill="#2563eb" x={229} y={20}>曲2 / 直2</text>
            </g>
            <text x={286} y={70} fontSize={16} textAnchor="middle" fill="#f59e0b">⇒</text>
            <text x={286} y={90} fontSize={11} textAnchor="middle" fill="#f59e0b">同规律</text>
            <g stroke="#1f2937" strokeWidth={1.4} fill="#fff">
              <rect x={310} y={30} width={60} height={70} /><rect x={382} y={30} width={60} height={70} />
            </g>
            <g stroke="#1f2937" strokeWidth={1.4} fill="none">
              <path d="M322 85 Q336 48 356 85" />
              <path d="M396 82 L414 52 L428 82" />
            </g>
            <g fontSize={11} textAnchor="middle" fill="#2563eb">
              <text fill="#2563eb" x={340} y={20}>曲5 / 直6</text><text fill="#2563eb" x={412} y={20}>曲3 / 直3</text>
            </g>
            <text x={286} y={132} fontSize={12.5} textAnchor="middle" fill="#1f2937">第一套找关系，第二套沿用</text>
          </g>
      </svg>
          <figcaption>图：两套图形对比式——第一套（左三格）找曲线/直线规律，第二套（右）沿用</figcaption>
        </figure>
      </Block>
            <Block>
        <BlockTitle>补充10. 蜂窝类（吃馅饼）：无小球看线条，有小球看穿过个数</BlockTitle>
        <p>夸夸刷（七）第 95—97 页、夸夸刷（四）第 76 页的"蜂窝类"是页面上只提了名字、没有展开的模型。它的底层逻辑与 25 宫格一样（内外、常规），但分成两支：</p>
        <p>① <b>无小球</b>：数"首尾线"的方向、平行 / 垂直关系、两条线之间的线条数；或数直角、平行线数量。<br />② <b>有小球</b>：内部相同 → 内外分开看；<b>按小球分成 2 堆 / 3 堆</b>，看每堆个数，或数"<b>线条穿过了几个小球</b>"。</p>
        <Callout variant="key">口诀：<b>无小球数线（首尾线、平行、直角），有小球数堆（每堆个数、穿过个数）</b>。<br />识别信号：图案是蜂窝状大区域；"如何识别平移"就是看"大图案（多）/个数（少）"。</Callout>
        <figure className="fig">
          <svg viewBox="0 0 458.5 196" role="img" aria-label="蜂窝类示意">
      <g transform="translate(0,2)"><g transform="translate(0,16)">
            <g stroke="#6b7280" strokeWidth={1.2} fill="#fff">
              <polygon points="150,80 172,99 172,137 150,156 128,137 128,99" />
              <polygon points="194,99 216,80 238,99 238,137 216,156 194,137" />
              <polygon points="194,99 216,80 238,99 238,61 216,42 194,61" />
              <polygon points="106,99 128,80 150,99 150,61 128,42 106,61" />
              <polygon points="150,42 172,61 172,23 150,4 128,23 128,61" />
            </g>
            <g fill="#1f2937">
              <polygon points="194,99 216,80 238,99 238,61 216,42 194,61" />
              <polygon points="150,42 172,61 172,23 150,4 128,23 128,61" />
            </g>
            <line x1={106} y1={60} x2={238} y2={140} stroke="#ef4444" strokeWidth={1.8} />
            <text x={300} y={60} fontSize={12.5} fill="#7c3aed">有小球：数穿过的球</text>
            <text x={300} y={82} fontSize={12.5} fill="#7c3aed">（分 2 堆 / 3 堆看个数）</text>
            <text x={300} y={120} fontSize={12.5} fill="#2563eb">无小球：数首尾线</text>
            <text x={300} y={142} fontSize={12.5} fill="#2563eb">（平行 / 垂直 / 直角）</text>
          </g></g>
      </svg>
          <figcaption>图：蜂窝类示意（黑格为小球，红线为穿过线条）</figcaption>
        </figure>
      </Block>
            <Block>
        <BlockTitle>补充11. 空间题的"小心思"——立体考查平面：面为主、点其次</BlockTitle>
        <p>夸夸刷（七）第 125 页点出一个新趋势：题目画的是立体图形（小方块堆、立体拼合），但真正考的却是<b>平面的数量规律</b>——2023 上海、2020 四川考"全部-面数量"，2021 联考考"点数量"。</p>
        <Callout variant="key">考查方向：<b>面为主，点其次</b>。<br />看到一堆小方块/立体堆积图，若三视图、拼合都不通，就整体数<b>面</b>（有时数点），别被"立体"吓住。</Callout>
        <figure className="fig">
          <svg viewBox="0 0 444.5 157" role="img" aria-label="立体图形考查数量示意">
            <g stroke="#1f2937" strokeWidth={1.4} fill="#e5e7eb">
              <rect x={70} y={60} width={34} height={34} />
              <polygon points="70,60 87,43 121,43 104,60" />
              <polygon points="104,60 121,43 121,77 104,94" />
              <rect x={104} y={60} width={34} height={34} />
              <polygon points="104,60 121,43 155,43 138,60" />
              <polygon points="138,60 155,43 155,77 138,94" />
              <rect x={87} y={77} width={34} height={34} />
              <polygon points="87,77 104,60 138,60 121,77" />
              <polygon points="121,77 138,60 138,94 121,111" />
            </g>
            <text x={120} y={132} fontSize={12} textAnchor="middle" fill="#6b7280">立体堆积图</text>
            <text x={230} y={80} fontSize={13} textAnchor="middle" fill="#10b981">→</text>
            <text x={360} y={58} fontSize={12.5} textAnchor="middle" fill="#2563eb">整体数「面」</text>
            <text x={360} y={80} fontSize={12.5} textAnchor="middle" fill="#f59e0b">其次数「点」</text>
            <text x={360} y={102} fontSize={11.5} textAnchor="middle" fill="#6b7280">（三视图 / 拼合不通时）</text>
          </svg>
          <figcaption>图：立体图形但考平面数量（面为主、点其次）</figcaption>
        </figure>
      </Block>
            <Block>
        <BlockTitle>补充13. 最大面 / 最小面的三大新趋势</BlockTitle>
        <p>"最大面 / 最小面"在老题库里只考"形状是三角形还是四边形"，现在已经细到三个新方向。超大杯把它叫"<b>最大面 - 新趋势</b>"，并且标注为<b>高频</b>：</p>
        <Callout variant="key"><b>最大 / 最小面的三大新趋势</b><br />① <b>在"关联下一个图形"</b>：最小面的<b>形状</b>恰好是<b>下一幅图的外框</b>（24 联考事业）。<br />② <b>在"属性"上做文章</b>：最大面的<b>曲直性</b>（25 深圳事业）、最大面的<b>对称性 / 对称轴方向</b>（25 国考）。<br />③ <b>在与外框的关系上做文章</b>：最大/最小面与外框是"<b>自己</b>"（同形状）还是"<b>邻居</b>"（相邻同形状）。<br />另有一条面积类：<b>最大面占原图的一半</b>。</Callout>
        <p>更完整的"大小面 + 形状 / 属性 / 面积"六问清单：① 形状（三角形、四边形）；② 形状与外框关系（自己）；③ 形状与外框关系（邻居）；④ 属性—最大/小面的对称性；⑤ 属性—最大/小面的曲直性；⑥ 面积—占原图的一半。</p>
        <figure className="fig"><svg viewBox="0 0 464 156" role="img" aria-label="最大面三大新趋势示意">
      <g transform="translate(2,0)">
          <rect x={20} y={34} width={130} height={86} rx={6} fill="none" stroke="#2563eb" strokeWidth={1.4} />
          <text x={85} y={56} fontSize={11.5} fill="#2563eb" textAnchor="middle">① 最小面形状</text>
          <text x={85} y={74} fontSize={11.5} fill="#2563eb" textAnchor="middle">＝ 下一图外框</text>
          <polygon points="50,86 78,86 78,112 50,112" fill="none" stroke="#1f2937" strokeWidth={1.5} />
          <text x={112} y={104} fontSize={15} fill="#ef4444" textAnchor="middle">→</text>
          <rect x={165} y={34} width={130} height={86} rx={6} fill="none" stroke="#10b981" strokeWidth={1.4} />
          <text x={230} y={56} fontSize={11.5} fill="#10b981" textAnchor="middle">② 最大 / 最小面</text>
          <text x={230} y={74} fontSize={11.5} fill="#10b981" textAnchor="middle">曲直性 · 对称性</text>
          <circle cx={230} cy={98} r={14} fill="none" stroke="#1f2937" strokeWidth={1.5} />
          <text x={230} y={114} fontSize={10.5} fill="#6b7280" textAnchor="middle">全曲 / 全直 / 混合</text>
          <rect x={310} y={34} width={130} height={86} rx={6} fill="none" stroke="#f59e0b" strokeWidth={1.4} />
          <text x={375} y={56} fontSize={11.5} fill="#f59e0b" textAnchor="middle">③ 与外框关系</text>
          <text x={375} y={74} fontSize={11.5} fill="#f59e0b" textAnchor="middle">"自己" / "邻居"</text>
          <rect x={352} y={84} width={46} height={22} fill="none" stroke="#1f2937" strokeWidth={1.5} />
          <rect x={352} y={84} width={23} height={22} fill="none" stroke="#7c3aed" strokeWidth={1.6} />
          <text x={375} y={116} fontSize={10.5} fill="#6b7280" textAnchor="middle">同形？相邻同形？</text>
          <text x={230} y={132} fontSize={11} fill="#6b7280" textAnchor="middle">真题：24 联考事业 · 25 深圳事业 · 25 国考</text>
        </g>
      </svg><figcaption>图：最大面 / 最小面的三大新趋势</figcaption></figure>
      </Block>
    </>
  )
}
