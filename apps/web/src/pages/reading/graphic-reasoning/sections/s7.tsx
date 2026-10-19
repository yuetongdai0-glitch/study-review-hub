import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleQuestion, PointList } from '@/components/content'

/**
 * 七、三视图 + 截面
 *
 * @returns 该节正文。
 */
export default function S8(): ReactElement {
  return (
    <>
      <Block>
        <BlockTitle>1. 三视图是什么：三个观察方向 + 四个难点</BlockTitle>
        <p>三视图指的是<b>从三个固定方向</b>观察同一个立体图形所得到的平面图形：</p>
        <figure className="fig"><svg viewBox="0 0 324 200" role="img" aria-label="立体图与三个观察方向：俯视、左视、主视">
      <g transform="translate(0,13)">
      <defs><marker id="L7-ar" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 z" fill="#ef4444" /></marker></defs><polygon points="70,120 190,120 168,60 92,60" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="92,60 168,60 208,32 132,32" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="168,60 208,32 208,92 168,120" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M70,120 L110,92" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <circle cx={96} cy={88} r={5} fill="#2563eb" />
      <circle cx={146} cy={46} r={5} fill="#ef4444" />
      <rect x={126} y={96} width={12} height={9} fill="#3b82f6" />
      <path d="M262,20 L232,52" stroke="#ef4444" strokeWidth={2} markerEnd="url(#L7-ar)" fill="none" />
      <path d="M226,88 L138,86" stroke="#ef4444" strokeWidth={2} markerEnd="url(#L7-ar)" fill="none" />
      <path d="M262,150 L206,118" stroke="#ef4444" strokeWidth={2} markerEnd="url(#L7-ar)" fill="none" />
      <text x={276} y={22} fontSize={13} fill="#ef4444" textAnchor="start" fontWeight="normal">俯视</text>
      <text x={120} y={80} fontSize={13} fill="#ef4444" textAnchor="end" fontWeight="normal">左视</text>
      <text x={266} y={162} fontSize={13} fill="#ef4444" textAnchor="start" fontWeight="normal">主视</text></g>
      </svg><figcaption>图：立体图与三个观察方向：俯视、左视、主视</figcaption></figure>
        <PointList>
          <li><b>主视图</b>：从正面看</li>
          <li><b>俯视图</b>：从头顶向下看</li>
          <li><b>左视图</b>：从左侧看</li>
        </PointList>
        <figure className="fig"><svg viewBox="0 0 438 167" role="img" aria-label="同一个立体的三视图：左视图、主视图、俯视图">
      <polygon points="40,120 140,120 122,70 58,70" fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={74} cy={95} r={5} fill="#2563eb" />
      <text x={90} y={142} fontSize={12} fill="#1f2937" textAnchor="middle" fontWeight="normal">左视图</text>
      <polygon points="180,120 280,120 262,70 198,70" fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={222} y={86} width={12} height={9} fill="#3b82f6" />
      <text x={230} y={142} fontSize={12} fill="#1f2937" textAnchor="middle" fontWeight="normal">主视图</text>
      <rect x={330} y={66} width={86} height={54} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={346} y={76} width={54} height={34} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M330,66 L346,76 M416,66 L400,76 M330,120 L346,110 M416,120 L400,110" fill="none" stroke="#1f2937" strokeWidth={1.4} />
      <circle cx={373} cy={74} r={5} fill="#ef4444" />
      <rect x={378} y={96} width={12} height={9} fill="#3b82f6" />
      <circle cx={339} cy={92} r={4.5} fill="#2563eb" />
      <text x={373} y={142} fontSize={12} fill="#1f2937" textAnchor="middle" fontWeight="normal">俯视图</text></svg><figcaption>图：同一个立体的三视图：左视图、主视图、俯视图</figcaption></figure>
        <p>记牢四个「难点」，它们是所有三视图题的坑：</p>
        <PointList>
          <li>（1）观察到的三视图<b>都是平面图</b>（"立体感"要自己脑补）；</li>
          <li>（2）<b>原图有线，选项不一定有线；原图没线，选项一定没线</b>——前者是"同一平面压平"，后者是"无中生有"；</li>
          <li>（3）当被遮挡住时，<b>看不见被遮挡部分</b>（视图=你看得见的轮廓与棱）；</li>
          <li>（4）<b>曲面会变成直线</b>（圆柱、圆锥的母线在视图里是直线）。</li>
        </PointList>
        <Callout variant="key">答题思路：<b>外部轮廓定方向，内部线条定选项</b>（轮廓定"从哪看"，线条定"选哪个"）。</Callout>
        <Callout variant="tip">易混：<b>三视图 vs 视图</b>？"视图"<b>任意角度</b>都可以看（含仰视、右视、斜看）；"三视图"只指正、俯、左三个固定方向。</Callout>
      </Block>
      <Block>
        <BlockTitle>2. 出题者的"小心思"：线条画不画 &amp; 空间还是平面</BlockTitle>
        <p><b>小心思一：该不该有线？</b>三视图题真正的分水岭不在外轮廓，而在内部那几条线。老师给的判定流程：</p>
        <figure className="fig"><svg viewBox="0 0 488 174" role="img" aria-label="「是否画线」的判断流程：原图无线不画；原图有线再看是否同一平面">
      <g transform="translate(14,14)">
      <defs><marker id="L7-a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#1f2937" /></marker></defs><rect x={8} y={52} width={92} height={38} rx={8} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <text x={54} y={76} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">是否画线?</text>
      <rect x={150} y={8} width={302} height={34} rx={8} fill="none" stroke="#6b7280" strokeWidth={1.6} />
      <text x={301} y={30} fontSize={12.5} fill="#1f2937" textAnchor="middle" fontWeight="normal">原图无线  →  不画</text>
      <rect x={150} y={56} width={302} height={34} rx={8} fill="none" stroke="#6b7280" strokeWidth={1.6} />
      <text x={301} y={78} fontSize={12.5} fill="#1f2937" textAnchor="middle" fontWeight="normal">原图有线，压平后在同一平面  →  不画</text>
      <rect x={150} y={104} width={302} height={34} rx={8} fill="none" stroke="#ef4444" strokeWidth={2} />
      <text x={301} y={126} fontSize={12.5} fill="#ef4444" textAnchor="middle" fontWeight="normal">原图有线，处在不同平面  →  要画（有线）</text>
      <path d="M100,62 L146,25" stroke="#1f2937" strokeWidth={1.6} markerEnd="url(#L7-a2)" fill="none" />
      <path d="M100,71 L146,73" stroke="#1f2937" strokeWidth={1.6} markerEnd="url(#L7-a2)" fill="none" />
      <path d="M100,80 L146,121" stroke="#1f2937" strokeWidth={1.6} markerEnd="url(#L7-a2)" fill="none" /></g>
      </svg><figcaption>图：「是否画线」的判断流程：原图无线不画；原图有线再看是否同一平面</figcaption></figure>
        <Callout variant="key">口诀：<b>原图无线 → 一定不画；原图有线 → 压平到同一平面就不画，不同平面才要画。</b></Callout>
        <p><b>小心思二：这题考的是"空间"还是"平面"？</b>同一个九宫格，可以是空间题（三视图），也可以是平面题（面数量）。区分办法：</p>
        <PointList>
          <li><b>考查平面</b>：每个图案是独立的"平面图形"，<b>图案之间的关联度低</b>（如【2023上海】全部—面数量）；</li>
          <li><b>考查空间</b>：图案之间是同一立体的不同观察结果，<b>关联度高</b>（如【2025联考】三视图）。</li>
        </PointList>
        <Callout variant="tip">反过来用：看到"圆、方、梯形"混在一个九宫格里，先问自己——<b>它们像不像同一个东西的三个视角</b>？像 → 空间（三视图）；不像 → 平面（面数量）。</Callout>
      </Block>
      <Block>
        <BlockTitle>3. 正方体截面形状大全（15 种）</BlockTitle>
        <Callout variant="tip">切割原则（先记这 3 条，不然全会想歪）：<b>①一刀切；②刀无限大；③不能拐弯</b>——截面一定是"一个平面"与立体表面的交线围成的图形。解密思路：<b>复杂立体 → 拆成常见立体图形</b>。</Callout>
        <p>正方体（六面体）能切出的全部形状，考试就这 15 种，必须一眼认出：</p>
        <figure className="fig"><svg viewBox="0 0 486 540.2" role="img" aria-label="正方体15种截面形状对照：等边三角形、等腰三角形、锐角三角形、菱形、等腰梯形、普通梯形、正方形、矩形、平行四边形、五边形、普通六边形、正六边形">
      <g transform="translate(0,8)">
      <g transform="translate(10,6)"><polygon points="14.0,30.0 66.0,82.0 88.0,8.0" fill="#fca5a5" fillOpacity="0.7" stroke="#ef4444" strokeWidth={1.8} /><polygon points="14,30 66,30 88,8 36,8" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <polygon points="66,30 88,8 88,60 66,82" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <rect x={14} y={30} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <path d="M14,82 L36,60 M36,60 L88,60 M36,60 L36,8" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /><text x={51} y={112} fontSize={12} textAnchor="middle" fill="#1f2937">等边三角形</text></g>
      <g transform="translate(132,6)"><polygon points="14.0,82.0 62.0,8.0 77.0,19.0" fill="#fca5a5" fillOpacity="0.7" stroke="#ef4444" strokeWidth={1.8} /><polygon points="14,30 66,30 88,8 36,8" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <polygon points="66,30 88,8 88,60 66,82" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <rect x={14} y={30} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <path d="M14,82 L36,60 M36,60 L88,60 M36,60 L36,8" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /><text x={51} y={112} fontSize={12} textAnchor="middle" fill="#1f2937">等腰三角形</text></g>
      <g transform="translate(254,6)"><polygon points="14.0,82.0 75.0,8.0 74.8,21.2" fill="#fca5a5" fillOpacity="0.7" stroke="#ef4444" strokeWidth={1.8} /><polygon points="14,30 66,30 88,8 36,8" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <polygon points="66,30 88,8 88,60 66,82" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <rect x={14} y={30} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <path d="M14,82 L36,60 M36,60 L88,60 M36,60 L36,8" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /><text x={51} y={112} fontSize={12} textAnchor="middle" fill="#1f2937">锐角三角形</text></g>
      <g transform="translate(376,6)"><polygon points="14.0,76.8 66.0,56.0 88.0,13.2 36.0,34.0" fill="#fca5a5" fillOpacity="0.7" stroke="#ef4444" strokeWidth={1.8} /><polygon points="14,30 66,30 88,8 36,8" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <polygon points="66,30 88,8 88,60 66,82" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <rect x={14} y={30} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <path d="M14,82 L36,60 M36,60 L88,60 M36,60 L36,8" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /><text x={51} y={112} fontSize={12} textAnchor="middle" fill="#1f2937">菱形</text></g>
      <g transform="translate(10,136)"><polygon points="14.0,82.0 66.0,82.0 75.0,8.0 49.0,8.0" fill="#fca5a5" fillOpacity="0.7" stroke="#ef4444" strokeWidth={1.8} /><polygon points="14,30 66,30 88,8 36,8" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <polygon points="66,30 88,8 88,60 66,82" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <rect x={14} y={30} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <path d="M14,82 L36,60 M36,60 L88,60 M36,60 L36,8" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /><text x={51} y={112} fontSize={12} textAnchor="middle" fill="#1f2937">等腰梯形</text></g>
      <g transform="translate(132,136)"><polygon points="14.0,82.0 66.0,82.0 62.0,8.0 41.2,8.0" fill="#fca5a5" fillOpacity="0.7" stroke="#ef4444" strokeWidth={1.8} /><polygon points="14,30 66,30 88,8 36,8" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <polygon points="66,30 88,8 88,60 66,82" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <rect x={14} y={30} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <path d="M14,82 L36,60 M36,60 L88,60 M36,60 L36,8" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /><text x={51} y={112} fontSize={12} textAnchor="middle" fill="#1f2937">普通梯形</text></g>
      <g transform="translate(254,136)"><polygon points="25.0,71.0 77.0,71.0 77.0,19.0 25.0,19.0" fill="#fca5a5" fillOpacity="0.7" stroke="#ef4444" strokeWidth={1.8} /><polygon points="14,30 66,30 88,8 36,8" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <polygon points="66,30 88,8 88,60 66,82" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <rect x={14} y={30} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <path d="M14,82 L36,60 M36,60 L88,60 M36,60 L36,8" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /><text x={51} y={112} fontSize={12} textAnchor="middle" fill="#1f2937">正方形</text></g>
      <g transform="translate(376,136)"><polygon points="14.0,56.0 66.0,56.0 88.0,34.0 36.0,34.0" fill="#fca5a5" fillOpacity="0.7" stroke="#ef4444" strokeWidth={1.8} /><polygon points="14,30 66,30 88,8 36,8" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <polygon points="66,30 88,8 88,60 66,82" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <rect x={14} y={30} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <path d="M14,82 L36,60 M36,60 L88,60 M36,60 L36,8" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /><text x={51} y={112} fontSize={12} textAnchor="middle" fill="#1f2937">正方形</text></g>
      <g transform="translate(10,266)"><polygon points="14.0,82.0 14.0,30.0 88.0,8.0 88.0,60.0" fill="#fca5a5" fillOpacity="0.7" stroke="#ef4444" strokeWidth={1.8} /><polygon points="14,30 66,30 88,8 36,8" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <polygon points="66,30 88,8 88,60 66,82" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <rect x={14} y={30} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <path d="M14,82 L36,60 M36,60 L88,60 M36,60 L36,8" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /><text x={51} y={112} fontSize={12} textAnchor="middle" fill="#1f2937">矩形</text></g>
      <g transform="translate(132,266)"><polygon points="66.0,82.0 66.0,30.0 36.0,8.0 36.0,60.0" fill="#fca5a5" fillOpacity="0.7" stroke="#ef4444" strokeWidth={1.8} /><polygon points="14,30 66,30 88,8 36,8" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <polygon points="66,30 88,8 88,60 66,82" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <rect x={14} y={30} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <path d="M14,82 L36,60 M36,60 L88,60 M36,60 L36,8" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /><text x={51} y={112} fontSize={12} textAnchor="middle" fill="#1f2937">矩形</text></g>
      <g transform="translate(254,266)"><polygon points="14.0,82.0 66.0,82.0 88.0,8.0 36.0,8.0" fill="#fca5a5" fillOpacity="0.7" stroke="#ef4444" strokeWidth={1.8} /><polygon points="14,30 66,30 88,8 36,8" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <polygon points="66,30 88,8 88,60 66,82" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <rect x={14} y={30} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <path d="M14,82 L36,60 M36,60 L88,60 M36,60 L36,8" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /><text x={51} y={112} fontSize={12} textAnchor="middle" fill="#1f2937">矩形</text></g>
      <g transform="translate(376,266)"><polygon points="14.0,74.2 66.0,43.0 88.0,10.6 36.0,41.8" fill="#fca5a5" fillOpacity="0.7" stroke="#ef4444" strokeWidth={1.8} /><polygon points="14,30 66,30 88,8 36,8" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <polygon points="66,30 88,8 88,60 66,82" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <rect x={14} y={30} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <path d="M14,82 L36,60 M36,60 L88,60 M36,60 L36,8" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /><text x={51} y={112} fontSize={12} textAnchor="middle" fill="#1f2937">平行四边形</text></g>
      <g transform="translate(10,396)"><polygon points="14.0,71.6 66.0,40.4 73.3,22.7 53.3,8.0 36.0,18.4" fill="#fca5a5" fillOpacity="0.7" stroke="#ef4444" strokeWidth={1.8} /><polygon points="14,30 66,30 88,8 36,8" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <polygon points="66,30 88,8 88,60 66,82" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <rect x={14} y={30} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <path d="M14,82 L36,60 M36,60 L88,60 M36,60 L36,8" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /><text x={51} y={112} fontSize={12} textAnchor="middle" fill="#1f2937">普通五边形</text></g>
      <g transform="translate(132,396)"><polygon points="66.0,50.8 75.5,72.5 46.4,60.0 36.0,49.6 23.5,20.5 45.2,30.0" fill="#fca5a5" fillOpacity="0.7" stroke="#ef4444" strokeWidth={1.8} /><polygon points="14,30 66,30 88,8 36,8" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <polygon points="66,30 88,8 88,60 66,82" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <rect x={14} y={30} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <path d="M14,82 L36,60 M36,60 L88,60 M36,60 L36,8" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /><text x={51} y={112} fontSize={12} textAnchor="middle" fill="#1f2937">普通六边形</text></g>
      <g transform="translate(254,396)"><polygon points="40.0,82.0 66.0,56.0 77.0,19.0 62.0,8.0 36.0,34.0 25.0,71.0" fill="#fca5a5" fillOpacity="0.7" stroke="#ef4444" strokeWidth={1.8} /><polygon points="14,30 66,30 88,8 36,8" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <polygon points="66,30 88,8 88,60 66,82" fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <rect x={14} y={30} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2.2} />
      <path d="M14,82 L36,60 M36,60 L88,60 M36,60 L36,8" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /><text x={51} y={112} fontSize={12} textAnchor="middle" fill="#1f2937">正六边形</text></g>
      </g>
      </svg><figcaption>图：正方体的 15 种截面形状</figcaption></figure>
        <p>由此可以直接背出三个高频结论：</p>
        <PointList>
          <li><b>Q1：能否切出"直角三角形"？→ 不能。</b>（连等腰直角三角形、钝角三角形也切不出）</li>
          <li><b>Q2：斜切能切出"正方形"？→ 能。</b></li>
          <li><b>Q3：六面体最多能切出"几边形"？→ 6。</b>规律：<b>经过几个面，就切几边形</b>（正方体只有 6 个面）。</li>
        </PointList>
        <Callout variant="key">数截面边数的通用办法：<b>数与切面相交的面（平面）有几个</b>，就是几边形——这也是后面"挖孔类截面"的判题主线。</Callout>
      </Block>
      <Block>
        <BlockTitle>4. 曲面立体的截面：圆柱 / 圆锥 / 圆台</BlockTitle>
        <figure className="fig"><svg viewBox="0 0 504 538" role="img" aria-label="圆柱、圆锥、圆台的常见截面：圆形、椭圆、曲线加直线、矩形、鼓形、等腰三角形、等腰梯形">
      <g transform="translate(10,6)"><ellipse cx={60} cy={30} rx={30} ry={9} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30,30 L30,88 A30,9 0 0 0 90,88 L90,30" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30,88 A30,9 0 0 1 90,88" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" /><ellipse cx={60} cy={52} rx={30} ry={10} fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.6} /><text x={60} y={118} fontSize={12} textAnchor="middle" fill="#1f2937">圆柱：圆形</text></g>
      <g transform="translate(132,6)"><ellipse cx={60} cy={30} rx={30} ry={9} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30,30 L30,88 A30,9 0 0 0 90,88 L90,30" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30,88 A30,9 0 0 1 90,88" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" /><ellipse cx={60} cy={58} rx={29} ry={12} fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.6} transform="rotate(-8 60 58)" /><text x={60} y={118} fontSize={12} textAnchor="middle" fill="#1f2937">圆柱：椭圆</text></g>
      <g transform="translate(254,6)"><ellipse cx={60} cy={30} rx={30} ry={9} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30,30 L30,88 A30,9 0 0 0 90,88 L90,30" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30,88 A30,9 0 0 1 90,88" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" /><path d="M36,52 Q56,68 78,74 L78,88 L36,88 Z" fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.6} /><text x={60} y={118} fontSize={12} textAnchor="middle" fill="#1f2937">圆柱：曲线+直线</text></g>
      <g transform="translate(376,6)"><ellipse cx={60} cy={30} rx={30} ry={9} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30,30 L30,88 A30,9 0 0 0 90,88 L90,30" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30,88 A30,9 0 0 1 90,88" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" /><path d="M84,52 Q64,68 42,74 L42,88 L84,88 Z" fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.6} /><text x={60} y={118} fontSize={12} textAnchor="middle" fill="#1f2937">圆柱：曲线+直线</text></g>
      <g transform="translate(10,136)"><ellipse cx={60} cy={30} rx={30} ry={9} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30,30 L30,88 A30,9 0 0 0 90,88 L90,30" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30,88 A30,9 0 0 1 90,88" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" /><rect x={30} y={30} width={60} height={58} fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.6} /><text x={60} y={118} fontSize={12} textAnchor="middle" fill="#1f2937">圆柱：矩形</text></g>
      <g transform="translate(132,136)"><ellipse cx={60} cy={30} rx={30} ry={9} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30,30 L30,88 A30,9 0 0 0 90,88 L90,30" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30,88 A30,9 0 0 1 90,88" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" /><rect x={38} y={30} width={44} height={58} fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.6} /><text x={60} y={118} fontSize={12} textAnchor="middle" fill="#1f2937">圆柱：矩形</text></g>
      <g transform="translate(254,136)"><ellipse cx={60} cy={30} rx={30} ry={9} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30,30 L30,88 A30,9 0 0 0 90,88 L90,30" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30,88 A30,9 0 0 1 90,88" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" /><path d="M34,30 L34,74 A28,16 0 0 0 86,74 L86,30 Z" fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.6} /><text x={60} y={118} fontSize={12} textAnchor="middle" fill="#1f2937">圆柱：鼓形</text></g>
      <g transform="translate(376,136)"><path d="M60,22 L28,88 A32,10 0 0 0 92,88 Z" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M28,88 A32,10 0 0 1 92,88" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" /><ellipse cx={60} cy={50} rx={20} ry={7} fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.6} /><text x={60} y={118} fontSize={12} textAnchor="middle" fill="#1f2937">圆锥：圆形</text></g>
      <g transform="translate(10,266)"><path d="M60,22 L28,88 A32,10 0 0 0 92,88 Z" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M28,88 A32,10 0 0 1 92,88" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" /><ellipse cx={60} cy={58} rx={22} ry={10} fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.6} transform="rotate(-10 60 58)" /><text x={60} y={118} fontSize={12} textAnchor="middle" fill="#1f2937">圆锥：椭圆</text></g>
      <g transform="translate(132,266)"><path d="M60,22 L28,88 A32,10 0 0 0 92,88 Z" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M28,88 A32,10 0 0 1 92,88" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" /><path d="M60,26 L76,62 Q60,74 46,70 Z" fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.6} /><text x={60} y={118} fontSize={12} textAnchor="middle" fill="#1f2937">圆锥：曲线+直线</text></g>
      <g transform="translate(254,266)"><path d="M60,22 L28,88 A32,10 0 0 0 92,88 Z" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M28,88 A32,10 0 0 1 92,88" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" /><polygon points="60,22 28,88 92,88" fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.6} /><text x={60} y={118} fontSize={12} textAnchor="middle" fill="#1f2937">圆锥：等腰三角形</text></g>
      <g transform="translate(376,266)"><path d="M42,26 L28,88 A32,10 0 0 0 92,88 L78,26 A18,10 0 0 1 42,26 Z" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M42,26 A18,10 0 0 1 78,26" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" /><ellipse cx={60} cy={50} rx={24} ry={8} fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.6} /><text x={60} y={118} fontSize={12} textAnchor="middle" fill="#1f2937">圆台：圆形</text></g>
      <g transform="translate(10,396)"><path d="M42,26 L28,88 A32,10 0 0 0 92,88 L78,26 A18,10 0 0 1 42,26 Z" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M42,26 A18,10 0 0 1 78,26" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" /><ellipse cx={60} cy={58} rx={26} ry={11} fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.6} transform="rotate(-9 60 58)" /><text x={60} y={118} fontSize={12} textAnchor="middle" fill="#1f2937">圆台：椭圆</text></g>
      <g transform="translate(132,396)"><path d="M42,26 L28,88 A32,10 0 0 0 92,88 L78,26 A18,10 0 0 1 42,26 Z" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M42,26 A18,10 0 0 1 78,26" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" /><path d="M60,30 L80,64 Q60,76 48,72 Z" fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.6} /><text x={60} y={118} fontSize={12} textAnchor="middle" fill="#1f2937">圆台：曲线+直线</text></g>
      <g transform="translate(254,396)"><path d="M42,26 L28,88 A32,10 0 0 0 92,88 L78,26 A18,10 0 0 1 42,26 Z" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M42,26 A18,10 0 0 1 78,26" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" /><polygon points="42,26 78,26 92,88 28,88" fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.6} /><text x={60} y={118} fontSize={12} textAnchor="middle" fill="#1f2937">圆台：等腰梯形</text></g>
      </svg><figcaption>图：圆柱 / 圆锥 / 圆台的常见截面</figcaption></figure>
        <p>曲面体的截面规律只有一条主线：<b>看切面与"轴"的关系</b>——横切出圆、斜切出椭圆、切到底面就是"曲线+直线"、过轴切出三角形/矩形/梯形。</p>
        <PointList>
          <li><b>Q1：完整图形能否切出"半圆"？</b>考试多数情况给的都是<b>"半椭圆"</b>，别硬当正圆；</li>
          <li><b>Q2：圆柱能否切出"梯形"？</b><b>不能</b>（圆柱侧面是直母线，只能切出矩形/鼓形）；</li>
          <li><b>Q3：切"圆形和椭圆"的区别在哪里？</b>就是<b>横切和斜切的区别</b>。</li>
        </PointList>
        <Callout variant="key">"能不能出圆/椭圆"，只看切面是<b>平行于底面（圆）</b>还是<b>斜着切（椭圆）</b>。</Callout>
        <p>圆柱想切出"半圆"，必须同时满足：</p>
        <PointList>
          <li>① 确定圆柱底面的<b>圆心和半径长度</b>；</li>
          <li>② 以<b>直径</b>为半圆的一切；</li>
          <li>③ 在侧面上找到一点，确保该点到圆心最短距离为底面半径的长度；</li>
          <li>④ 从该点出发，<b>裁至（垂直切到）地面直径</b>所在直线处。</li>
        </PointList>
        <Callout variant="key">结论：<b>圆柱的高必须等于底面圆的直径</b>，才能截出一个完整的半圆；考试多数情况考的其实是"半椭圆"。</Callout>
        <figure className="fig"><svg viewBox="0 0 246 145.6" role="img" aria-label="半圆的切法：切面过底面圆心且垂直于底面">
      <g transform="translate(0,6)">
      <ellipse cx={70} cy={26} rx={34} ry={10} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M36,26 L36,96 A34,10 0 0 0 104,96 L104,26" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M36,96 A34,10 0 0 1 104,96" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" />
      <path d="M70,26 L70,96" stroke="#7c3aed" strokeWidth={1.6} strokeDasharray="4 3" fill="none" />
      <path d="M36,26 L36,96" stroke="#2563eb" strokeWidth={1.8} fill="none" />
      <path d="M70,96 A34,10 0 0 0 104,96" fill="none" stroke="#f59e0b" strokeWidth={1.8} />
      <text x={70.0} y={114.6} fontSize={12} fill="#1f2937" textAnchor="middle" fontWeight="normal">圆柱</text>
      <path d="M148,78 A28,28 0 0 1 204,78 Z" fill="#fca5a5" fillOpacity="0.75" stroke="#ef4444" strokeWidth={1.8} />
      <path d="M148,78 L204,78" stroke="#2563eb" strokeWidth={2} fill="none" />
      <path d="M176,78 L176,50" stroke="#7c3aed" strokeWidth={1.4} strokeDasharray="4 3" fill="none" />
      <text x={178} y={100} fontSize={11.5} fill="#1f2937" textAnchor="middle" fontWeight="normal">半圆：切面过直径</text></g>
      </svg><figcaption>图：半圆的切法：切面过底面圆心且垂直于底面</figcaption></figure>
        <Callout variant="tip">"极端情况"不考：切面无限接近外表面（比如贴着底面去切一个正圆）这种极限操作，选项里一般不算"能截出"。</Callout>
      </Block>
      <Block>
        <BlockTitle>5. 三视图精讲：先定方向，再定选项（例题 1~5）</BlockTitle>
        <Callout variant="key">本块统一答题思路：<b>外部轮廓定方向，内部线条定选项</b>；外部轮廓拿不准时——<b>外部轮廓：找特殊</b>（找最有特征的那一块、那一个角）。</Callout>
        <Example>
        <ExampleHeader>📝 例题1 · 三视图（三视图与几何体对应 · 25联考 84%）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>下面三视图依次与三个几何图形对应，三个几何图形的正确顺序是：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 434 156.8" role="img" aria-label="题干：三组三视图（每组含主视图、左视图、俯视图）">
      <g transform="translate(12,14)">
      <rect x={10} y={8} width={118} height={96} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <polyline points="24,40 40,40 40,26 56,26 56,40 40,40" fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <path d="M24,40 L24,54 L46,54 L46,40 Z" fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={70} y={26} width={20} height={30} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={90} y={40} width={14} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={34} y={70} width={24} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={34} y={86} width={52} height={12} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={146} y={8} width={118} height={96} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={162} y={22} width={34} height={34} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <path d="M162,22 L196,56" fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={204} y={26} width={24} height={34} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={228} y={22} width={18} height={24} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={162} y={66} width={22} height={18} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={162} y={84} width={34} height={14} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={282} y={8} width={118} height={96} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={296} y={22} width={22} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={296} y={42} width={34} height={18} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={346} y={22} width={20} height={38} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <path d="M366,22 L386,60 L346,60 Z" fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <polyline points="296,70 296,86 318,86 318,78 340,78 340,70" fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={296} y={70} width={22} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <text x={69} y={118} fontSize={13} fill="#2563eb" textAnchor="middle" fontWeight="normal">①</text>
      <text x={205} y={118} fontSize={13} fill="#2563eb" textAnchor="middle" fontWeight="normal">②</text>
      <text x={341} y={118} fontSize={13} fill="#2563eb" textAnchor="middle" fontWeight="normal">③</text></g>
      </svg><figcaption>图：题干：三组三视图 ①②③</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 412 581" role="img" aria-label="三个几何体①②③的立体图">
      <rect x={60} y={70} width={70} height={70} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="60,70 130,70 162,38 92,38" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="130,70 162,38 162,108 130,140" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M60,140 L92,108 M92,108 L162,108 M92,108 L92,38" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <polygon points="60,70 130,70 130,140 60,140" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M60,70 L130,140" stroke="#f59e0b" strokeWidth={2} fill="none" />
      <rect x={120} y={86} width={66} height={66} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="120,86 186,86 214,58 148,58" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="186,86 214,58 214,124 186,152" fill="none" stroke="#1f2937" strokeWidth={2} />
      <text x={105} y={176} fontSize={14} fill="#2563eb" textAnchor="middle" fontWeight="normal">①</text>
      <g transform="translate(230,10)">
      <rect x={20} y={60} width={62} height={80} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="20,60 82,60 106,36 44,36" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="82,60 106,36 106,116 82,140" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M20,140 L44,116 M44,116 L106,116 M44,116 L44,36" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <polygon points="20,106 44,84 82,84 82,60 20,60" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M20,60 L82,140" stroke="#f59e0b" strokeWidth={2} fill="none" />
      <rect x={86} y={96} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="86,96 138,96 160,74 108,74" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="138,96 160,74 160,126 138,148" fill="none" stroke="#1f2937" strokeWidth={2} />
      <text x={105} y={186} fontSize={14} fill="#2563eb" textAnchor="middle" fontWeight="normal">②</text>
      </g>
      <g transform="translate(20,190)">
      <rect x={20} y={110} width={70} height={40} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="20,110 90,110 114,86 44,86" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="90,110 114,86 114,126 90,150" fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={90} y={60} width={70} height={90} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="90,60 160,60 184,36 114,36" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="160,60 184,36 184,126 160,150" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M90,150 L114,126 M114,126 L184,126 M114,126 L114,36" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <path d="M90,150 L160,60" stroke="#f59e0b" strokeWidth={2} fill="none" />
      <text x={100} y={366} fontSize={14} fill="#2563eb" textAnchor="middle" fontWeight="normal">③</text>
      </g></svg><figcaption>图：题干：三个几何体 ①②③</figcaption></figure><figure className="fig"><svg viewBox="0 0 134.5 132" role="img" aria-label="选项：A ②①③ B ②③① C ①③② D ③①②">
      <g transform="translate(0,9)">
      <text x={60} y={26} fontSize={13} fill="#1f2937" textAnchor="start" fontWeight="normal">A. ②①③</text>
      <text x={60} y={50} fontSize={13} fill="#1f2937" textAnchor="start" fontWeight="normal">B. ②③①</text>
      <text x={60} y={74} fontSize={13} fill="#1f2937" textAnchor="start" fontWeight="normal">C. ①③②</text>
      <text x={60.0} y={98} fontSize={13} fill="#1f2937" textAnchor="start" fontWeight="normal">D. ③①②</text></g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>三视图题先"外部轮廓定方向"，再用内部线条定选项。<br />· 三视图<b>②</b>的主视图是"正方形带一条对角线"，只有<b>几何体①</b>（正面是一块斜板＋方体）从正面看才会出现这条对角线；<br />· 三视图<b>③</b>的俯视图是"L 形"、主视图右侧是一块斜下来的直角三角，对应<b>几何体②</b>（楔形块＋方块）；<br />· 三视图<b>①</b>的俯视图是"小方块＋宽横条"的 T 形，主视图是阶梯＋斜线，对应<b>几何体③</b>（前低后高的阶梯＋斜板）。<br />所以三视图①②③依次对应几何体③①②。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>
        <Example>
        <ExampleHeader>📝 例题2 · 三视图（主视图与俯视图 · 24联考事业 83%）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>以下是给定的立体图形，下面哪一项中的图形是该立体图形正确的<b>主视图和俯视图</b>？</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 248 180" role="img" aria-label="题干立体图：右端为圆弧面的阶梯块，前方一个小正方体">
      <g transform="translate(2,0)">
      <path d="M60,120 L60,72 L106,72 L106,52 L152,52 L152,120" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M152,120 A44,44 0 0 0 196,96 L196,72 L152,52" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="60,72 106,72 106,52 152,52 152,72 196,72 224,44 120,44" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M60,72 L88,44 M60,120 L88,92" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M88,44 L120,44" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M60,120 L88,92 L196,92" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <rect x={20} y={112} width={46} height={46} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="20,112 66,112 88,90 42,90" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="66,112 88,90 88,136 66,158" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M20,158 L42,136 M42,136 L88,136 M42,136 L42,90" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <path d="M20,112 L66,158" stroke="#f59e0b" strokeWidth={1.8} fill="none" /></g>
      </svg><figcaption>图：题干：给定的立体图形</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 424 265" role="img" aria-label="四个选项：每个选项由主视图（左，红弧＝圆角）与俯视图（右，橙色竖线＝分格）组成">
      <g transform="translate(12,2)">
      <g transform="translate(10,10)"><path d="M0,58 L0,34 L20,34 L20,44 L34,44 L34,14 L50,14 L50,44 L70,44 L70,58 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M50,44 L70,44" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={0} y={44} width={20} height={14} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={86} y={10} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={102} y={10} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={118} y={10} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={86} y={26} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <path d="M102,10 L102,42" stroke="#f59e0b" strokeWidth={1.8} fill="none" />
      <path d="M118,10 L118,42" stroke="#f59e0b" strokeWidth={1.8} fill="none" /></g>
      <g transform="translate(240,10)"><path d="M0,58 L0,34 L20,34 L20,44 L34,44 L34,14 L50,14 L50,44 L70,44 L70,58 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M50,44 L70,44" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={0} y={44} width={20} height={14} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={86} y={10} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={102} y={10} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={118} y={10} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={134} y={10} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={86} y={26} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <path d="M102,10 L102,42" stroke="#f59e0b" strokeWidth={1.8} fill="none" />
      <path d="M118,10 L118,42" stroke="#f59e0b" strokeWidth={1.8} fill="none" />
      <path d="M134,10 L134,42" stroke="#f59e0b" strokeWidth={1.8} fill="none" /></g>
      <g transform="translate(10,80)"><path d="M0,58 L0,34 L20,34 L20,44 L34,44 L34,14 L50,14 L50,44 L70,44 L70,58 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M50,44 A20,20 0 0 1 70,44" fill="none" stroke="#ef4444" strokeWidth={2.2} />
      <rect x={0} y={44} width={20} height={14} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={86} y={10} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={102} y={10} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={118} y={10} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={86} y={26} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <path d="M102,10 L102,42" stroke="#f59e0b" strokeWidth={1.8} fill="none" />
      <path d="M118,10 L118,42" stroke="#f59e0b" strokeWidth={1.8} fill="none" /></g>
      <g transform="translate(240,80)"><path d="M0,58 L0,34 L20,34 L20,44 L34,44 L34,14 L50,14 L50,44 L70,44 L70,58 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M50,44 A20,20 0 0 1 70,44" fill="none" stroke="#ef4444" strokeWidth={2.2} />
      <rect x={0} y={44} width={20} height={14} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={86} y={10} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={102} y={10} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={118} y={10} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={134} y={10} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={86} y={26} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <path d="M102,10 L102,42" stroke="#f59e0b" strokeWidth={1.8} fill="none" />
      <path d="M118,10 L118,42" stroke="#f59e0b" strokeWidth={1.8} fill="none" />
      <path d="M134,10 L134,42" stroke="#f59e0b" strokeWidth={1.8} fill="none" /></g>
      <text x={50} y={168} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">A</text>
      <text x={280} y={168} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">B</text>
      <text x={50} y={238} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">C</text>
      <text x={280} y={238} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">D</text></g>
      </svg><figcaption>图：选项 A / B / C / D（主视图 + 俯视图）</figcaption></figure>
          <ExampleAnswer><b>解析：</b>答题思路"<b>对比选项，找差异</b>"。四个选项只差两处：<br />① <b>主视图右端</b>（红色处）：A、B 是直角，C、D 是圆弧。立体右端本来就是圆弧面，从正面看必然是<b>圆角</b> → 排除 A、B；<br />② <b>俯视图的分格</b>（橙色竖线）：台阶沿左右方向分成 <b>4 格</b> → C 只画了 3 格，排除。<br />所以只有 D 同时满足"轮廓圆角 + 俯视图 4 格"。<br />补充："外部轮廓定方向，内部线条定选项"——<b>线条平行、看不见的棱不画线</b>。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>
        <Example>
        <ExampleHeader>📝 例题3 · 三视图（从任一角度观察 · 24福建事业 35%）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>给定的多面体如图所示，从任一角度观看，该多面体的视图<b>不可能</b>是：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 304 198" role="img" aria-label="题干立体图：门形柱体＋底部斜板＋前方小方块">
      <g transform="translate(0,2)">
      <path d="M92,44 L212,44 L212,124 L180,124 L180,80 L124,80 L124,124 L92,124 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="92,44 212,44 240,20 120,20" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="212,44 240,20 240,100 212,124" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="124,80 152,56 208,56 180,80" fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <path d="M152,56 L152,112" fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <path d="M124,80 L124,124 M180,80 L180,124" fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <polygon points="150,124 240,100 282,116 192,140" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="192,140 282,116 282,132 192,156" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M150,124 L150,140 L192,140" fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={70} y={128} width={46} height={46} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="70,128 116,128 138,106 92,106" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="116,128 138,106 138,152 116,174" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M70,174 L92,152 M92,152 L138,152 M92,152 L92,106" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /></g>
      </svg><figcaption>图：题干：给定的多面体</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 454 149" role="img" aria-label="选项 A 主视图轮廓、B 仰视图 L 形、C 俯视图台阶、D 右视图两段矩形">
      <g transform="translate(12,12)">
      <path d="M10,10 L10,90 L80,90 L80,10 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M30,10 L30,90 M52,10 L52,90" fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <path d="M66,10 L66,30 L80,30" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M52,74 L80,74" fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <path d="M120,90 L120,10 L136,10 L136,60 L200,60 L200,90 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M240,90 L240,60 L270,60 L270,40 L300,40 L300,20 L318,20 L318,90 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M270,60 L270,90 M300,40 L300,90" fill="none" stroke="#1f2937" strokeWidth={1.4} />
      <path d="M350,90 L350,74 L368,74 L368,60 L420,60 L420,90 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M350,60 L420,60" fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <text x={50} y={112} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">A</text>
      <text x={165} y={112} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">B</text>
      <text x={280} y={112} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">C</text>
      <text x={395} y={112} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">D</text></g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>题目是"<b>任意角度</b>观察"，标准三视图之外，仰视、右视等也算。<br />· A 的轮廓＋两条竖线＋右上缺口，正是从<b>正前方</b>看到的样子（门形洞口的两条竖棱＋斜板）→ 主视图可以；<br />· B 的 L 形轮廓，是从<b>下方</b>仰视得到的外轮廓 → 仰视图可以；<br />· C 的台阶轮廓，是从<b>上方向下</b>看到的外轮廓 → 俯视图可以；<br />· D 中右下方那一块被单独分隔出一条横线，而从右往左看时，门形柱与斜板<b>处在同一竖直平面</b>上，<b>不需要画这条线</b>（原图有线，压平到同一平面就不画）→ 右视图不可能。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>
        <Example>
        <ExampleHeader>📝 例题4 · 三视图（四棱锥的俯视图 · 25广东 79%）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>如图所示，四棱锥的底面为矩形，其中一条棱垂直于底面，那么该四棱锥的俯视图最有可能是：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 242.3 170" role="img" aria-label="题干：四棱锥，底面 ABCD 为矩形，侧棱 PA 垂直于底面">
      <g transform="translate(0,11)">
      <polygon points="60,120 170,120 210,92 100,92" fill="none" stroke="#f59e0b" strokeWidth={2} />
      <polygon points="60,120 170,120 60,20" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="170,120 210,92 60,20" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="100,92 210,92 60,20" fill="#dbeafe" fillOpacity="0.5" stroke="#1f2937" strokeWidth={2} />
      <path d="M60,20 L60,120" stroke="#2563eb" strokeWidth={2.4} fill="none" />
      <path d="M100,92 L170,120" stroke="#ef4444" strokeWidth={2} fill="none" />
      <path d="M60,120 L210,92" stroke="#10b981" strokeWidth={1.8} strokeDasharray="4 3" fill="none" />
      <text x={48} y={24} fontSize={13} fill="#2563eb" textAnchor="middle" fontWeight="normal">P</text>
      <text x={46} y={132} fontSize={12} fill="#1f2937" textAnchor="middle" fontWeight="normal">A</text>
      <text x={174} y={134} fontSize={12} fill="#1f2937" textAnchor="middle" fontWeight="normal">B</text>
      <text x={216} y={92} fontSize={12} fill="#1f2937" textAnchor="middle" fontWeight="normal">C</text>
      <text x={90} y={88} fontSize={12} fill="#1f2937" textAnchor="middle" fontWeight="normal">D</text></g>
      </svg><figcaption>图：题干：四棱锥（一条侧棱 PA⊥底面）</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 466 119" role="img" aria-label="选项 A 空矩形、B 矩形带半条斜线、C 矩形带一条对角线、D 矩形带两条对角线">
      <g transform="translate(14,2)">
      <rect x={8} y={20} width={92} height={52} fill="none" stroke="#f59e0b" strokeWidth={2} />
      <rect x={118} y={20} width={92} height={52} fill="none" stroke="#f59e0b" strokeWidth={2} />
      <path d="M118,20 L156,72" stroke="#1f2937" strokeWidth={1.8} fill="none" />
      <rect x={228} y={20} width={92} height={52} fill="none" stroke="#f59e0b" strokeWidth={2} />
      <path d="M228,72 L320,20" stroke="#1f2937" strokeWidth={1.8} fill="none" />
      <rect x={338} y={20} width={92} height={52} fill="none" stroke="#f59e0b" strokeWidth={2} />
      <path d="M338,20 L430,72 M338,72 L430,20" stroke="#1f2937" strokeWidth={1.8} fill="none" />
      <text x={54} y={92} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">A</text>
      <text x={164} y={92} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">B</text>
      <text x={274} y={92} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">C</text>
      <text x={384} y={92} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">D</text></g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>俯视＝从头顶向下看，<b>看得见的棱才画线</b>。<br />顶点 P 在顶点 A 的正上方，所以：<br />· 垂直棱 <b>PA</b>（蓝）投影到 A 点，缩成一个点 → 不产生线；<br />· 两条侧棱 PB、PD 的投影正好落在矩形的边 AB、AD 上 → 与轮廓重合（绿虚线），<b>不用另画</b>；<br />· 只有对角线方向的那条侧棱 PC，投影成矩形的一条对角线 → 这才是俯视图里唯一多出来的线。<br />所以俯视图＝矩形＋一条对角线，且对角线的位置由 P 所在的那个角决定。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>
        <Example>
        <ExampleHeader>📝 例题5 · 三视图（九宫格 · 25联考 87%）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 380 348" role="img" aria-label="题干九宫格：每列自上而下为立体图、主/左视图、俯视图">
      <g transform="translate(2,12)">
      <path d="M20,14 L20,314" stroke="#1f2937" strokeWidth={1.4} fill="none" />
      <path d="M130,14 L130,314" stroke="#1f2937" strokeWidth={1.4} fill="none" />
      <path d="M240,14 L240,314" stroke="#1f2937" strokeWidth={1.4} fill="none" />
      <path d="M350,14 L350,314" stroke="#1f2937" strokeWidth={1.4} fill="none" />
      <path d="M20,14 L350,14" stroke="#1f2937" strokeWidth={1.4} fill="none" />
      <path d="M20,114 L350,114" stroke="#1f2937" strokeWidth={1.4} fill="none" />
      <path d="M20,214 L350,214" stroke="#1f2937" strokeWidth={1.4} fill="none" />
      <path d="M20,314 L350,314" stroke="#1f2937" strokeWidth={1.4} fill="none" />
      <g transform="translate(48,32)"><path d="M-26,0 L-26,54 A26,8 0 0 0 26,54 L26,0" fill="none" stroke="#1f2937" strokeWidth={1.8} /><ellipse cx={0} cy={0} rx={26} ry={8} fill="none" stroke="#1f2937" strokeWidth={1.8} /></g>
      <g transform="translate(154,28)"><rect x={0} y={0} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={1.8} /><polygon points="0,0 52,0 72,-18 20,-18" fill="none" stroke="#1f2937" strokeWidth={1.8} /><polygon points="52,0 72,-18 72,34 52,52" fill="none" stroke="#1f2937" strokeWidth={1.8} /></g>
      <polygon points="280,44 314,44 326,34 292,34" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="266,92 334,92 356,74 288,74" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M266,92 L280,44 M334,92 L314,44 M356,74 L326,34" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M288,74 L292,34" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <path d="M266,92 L288,74 M288,74 L356,74" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <rect x={48} y={136} width={52} height={60} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={158} y={136} width={54} height={60} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="266,196 322,196 306,136 282,136" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <circle cx={74} cy={266} r={26} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={158} y={240} width={54} height={54} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <text x={294} y={276} fontSize={30} fill="#1f2937" textAnchor="middle" fontWeight="normal">?</text>
      <text x={74} y={126} fontSize={12} fill="#ef4444" textAnchor="middle" fontWeight="normal">主/左</text>
      <text x={184} y={126} fontSize={12} fill="#ef4444" textAnchor="middle" fontWeight="normal">主/左</text>
      <text x={294} y={126} fontSize={12} fill="#ef4444" textAnchor="middle" fontWeight="normal">主/左</text>
      <text x={74} y={226} fontSize={12} fill="#ef4444" textAnchor="middle" fontWeight="normal">俯</text>
      <text x={184} y={226} fontSize={12} fill="#ef4444" textAnchor="middle" fontWeight="normal">俯</text>
      <text x={294} y={226} fontSize={12} fill="#ef4444" textAnchor="middle" fontWeight="normal">俯</text></g>
      </svg><figcaption>图：题干：九宫格（每列＝立体图＋主/左视图＋俯视图）</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 413.7 219" role="img" aria-label="选项 A 矩形、B 正方形带内框与角线、C 正方形内切圆、D 圆内接正方形">
      <g transform="translate(12,12)">
      <rect x={10} y={20} width={70} height={44} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={110} y={10} width={70} height={64} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={140} y={30} width={40} height={44} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <path d="M110,30 L180,30 M110,74 L180,74 M140,10 L140,30 M180,30 L180,74" fill="none" stroke="#1f2937" strokeWidth={1.4} />
      <path d="M110,30 L180,74 M110,74 L180,30" fill="none" stroke="#1f2937" strokeWidth={1.4} />
      <rect x={240} y={10} width={80} height={64} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <circle cx={280} cy={42} r={30} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={30} y={96} width={70} height={64} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <circle cx={65} cy={128} r={30} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={45} y={108} width={40} height={40} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <text x={45} y={182} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">A</text>
      <text x={155} y={182} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">B</text>
      <text x={265} y={182} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">C</text>
      <text x={375} y={182} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">D</text></g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>九宫格按<b>列</b>看：每一列 = 同一个立体的「立体图 + 主/左视图 + 俯视图」。<br />· 第一列：圆柱 → 主视图＝矩形（√）、俯视图＝圆（√）；<br />· 第二列：长方体立放 → 主视图＝正方形（√）、俯视图＝正方形（√）；<br />· 第三列：<b>四棱台</b>（上下底面都是正方形、四个侧面是等腰梯形）→ 主视图＝梯形（√），俯视图要看<b>从上往下所有能看见的棱</b>：外轮廓是大正方形，里面还能看见<b>顶面小正方形</b>的四条边，以及四条<b>斜棱</b>在水平面上的投影（四个角上的短斜线）。<br />所以俯视图＝大正方形＋内接小正方形＋四角斜线，只有 B 符合。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      </Block>
      <Block>
        <BlockTitle>6. 三视图拔高：小方块、堆码、组合体（例题 6~7）</BlockTitle>
        <p>"拔高"题的共同点：<b>图案本身很碎，只能靠"对比题干、找相同视角"来做</b>。老师把出题套路叫"<b>加密</b>"：</p>
        <PointList>
          <li><b>加密一："小方块"考查三视图</b>——一排小方块立体图，考的就是"从固定方向看是否同一个视图"；</li>
          <li><b>加密二：对比题干，找相同视角</b>——先看题干哪两张图某个方向看过去完全一样，再用它去筛选项。</li>
        </PointList>
        <Example>
        <ExampleHeader>📝 例题6 · 三视图（墙角堆码的俯视图 · 25浙江 59%）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>墙角堆码共计 15 个纸箱，左侧为堆码的效果图，堆码纸箱的俯视图可能是：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 160 178" role="img" aria-label="题干：墙角堆码的 15 个纸箱（左侧为堆码效果图）">
      <rect x={60} y={130} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="60,130 86,130 99,117 73,117" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="86,130 99,117 99,143 86,156" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={47} y={65} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="47,65 73,65 86,52 60,52" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="73,65 86,52 86,78 73,91" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={47} y={91} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="47,91 73,91 86,78 60,78" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="73,91 86,78 86,104 73,117" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={47} y={117} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="47,117 73,117 86,104 60,104" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="73,117 86,104 86,130 73,143" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={86} y={130} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="86,130 112,130 125,117 99,117" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="112,130 125,117 125,143 112,156" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={34} y={52} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="34,52 60,52 73,39 47,39" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="60,52 73,39 73,65 60,78" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={34} y={78} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="34,78 60,78 73,65 47,65" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="60,78 73,65 73,91 60,104" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={34} y={104} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="34,104 60,104 73,91 47,91" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="60,104 73,91 73,117 60,130" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={73} y={91} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="73,91 99,91 112,78 86,78" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="99,91 112,78 112,104 99,117" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={73} y={117} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="73,117 99,117 112,104 86,104" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="99,117 112,104 112,130 99,143" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={60} y={52} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="60,52 86,52 99,39 73,39" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="86,52 99,39 99,65 86,78" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={60} y={78} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="60,78 86,78 99,65 73,65" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="86,78 99,65 99,91 86,104" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={60} y={104} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="60,104 86,104 99,91 73,91" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="86,104 99,91 99,117 86,130" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={99} y={117} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="99,117 125,117 138,104 112,104" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="125,117 138,104 138,130 125,143" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={86} y={78} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="86,78 112,78 125,65 99,65" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="112,78 125,65 125,91 112,104" fill="none" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={86} y={104} width={26} height={26} fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="86,104 112,104 125,91 99,91" fill="none" stroke="#1f2937" strokeWidth={1.5} /><polygon points="112,104 125,91 125,117 112,130" fill="none" stroke="#1f2937" strokeWidth={1.5} /></svg><figcaption>图：题干：墙角堆码效果图（共15个纸箱）</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 472 177.1" role="img" aria-label="四个选项：不同形状的斜排方格图案">
      <g><rect x={70} y={110} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={110} y={110} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={80} y={100} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={100} y={100} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={50} y={90} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={70} y={90} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={40} y={80} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} /></g>
      <g><rect x={150} y={80} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={170} y={80} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={190} y={80} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={210} y={80} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={160} y={90} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={180} y={90} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={200} y={90} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={170} y={100} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={190} y={100} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={180} y={110} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} /></g>
      <g><rect x={260} y={80} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={300} y={80} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={270} y={90} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={290} y={90} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={310} y={90} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={280} y={100} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={300} y={100} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={290} y={110} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} /></g>
      <g><rect x={390} y={80} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={430} y={80} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={400} y={90} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={420} y={90} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={390} y={100} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={410} y={100} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <rect x={400} y={110} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={1.6} /></g>
      <text x={80} y={152} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">A</text>
      <text x={190} y={152} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">B</text>
      <text x={300} y={152} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">C</text>
      <text x={410} y={152} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">D</text></svg><figcaption>图：选项 A / B / C / D（斜排方格＝俯视图）</figcaption></figure>
          <ExampleAnswer><b>解析：</b>俯视图＝从正上方往下看，<b>每一格只要有纸箱，就要出现一个方格</b>；被上面纸箱挡住、看不见的箱子，它的格子也必须占位。<br />把 15 个纸箱逐个数：<b>看得见的 12 个 + 被遮挡但位置仍占用的 3 个 = 15 格</b>。<br />· A、D 图案的方格数与位置和实际堆码对不上（有的格子悬空、有的位置缺失）；<br />· B 把堆码看成"实体一排"，多出了几格；<br />· 只有 C 满足"12 格可见 + 3 格被挡"，总格数正好 15，且相对位置与堆码一致。<br />要点：<b>高度不够被挡住的箱子，俯视图上照样要占格</b>（"看不见"≠"不存在"）。<br /><span className="correct">答案：C</span></ExampleAnswer>
        </ExampleBody>
      </Example>
        <Example>
        <ExampleHeader>📝 例题7 · 三视图（组合体的视图 · 25浙江 53%）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>左图为一个实心长方体、一个挖孔长方体和一个四面体组合成的多面体，问下列哪一个不可能是其视图？</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 288 212" role="img" aria-label="题干：实心长方体、挖孔长方体、四面体组合成的多面体">
      <g transform="translate(0,22)">
      <rect x={182} y={46} width={60} height={100} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="182,46 242,46 264,24 204,24" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="242,46 264,24 264,124 242,146" fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={204} y={72} width={16} height={56} fill="none" stroke="#2563eb" strokeWidth={1.8} />
      <rect x={132} y={16} width={112} height={18} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="132,16 244,16 266,-6 154,-6" fill="none" stroke="#1f2937" strokeWidth={2} transform="translate(0,6)" />
      <polygon points="244,16 266,-6 266,12 244,34" fill="none" stroke="#1f2937" strokeWidth={2} transform="translate(0,6)" />
      <rect x={132} y={16} width={112} height={18} fill="none" stroke="#2563eb" strokeWidth={2} />
      <rect x={30} y={76} width={56} height={64} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="30,76 86,76 108,54 52,54" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="86,76 108,54 108,118 86,140" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M30,140 L52,118 M52,118 L108,118 M52,118 L52,54" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <polygon points="112,168 196,168 154,92" fill="#fca5a5" fillOpacity="0.5" stroke="#f59e0b" strokeWidth={2} />
      <path d="M154,92 L154,142" stroke="#f59e0b" strokeWidth={1.6} strokeDasharray="4 3" fill="none" />
      <path d="M112,168 L154,142 L196,168" stroke="#f59e0b" strokeWidth={1.6} strokeDasharray="4 3" fill="none" /></g>
      </svg><figcaption>图：题干：组合体（实心长方体＋挖孔长方体＋四面体）</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 444 155" role="img" aria-label="选项 A 方框加横条与三角、B 竖矩形带小三角、C 方框内三角形、D 方框内细长竖条">
      <g transform="translate(12,18)">
      <rect x={10} y={20} width={80} height={70} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={10} y={4} width={80} height={16} fill="none" stroke="#2563eb" strokeWidth={1.8} />
      <polygon points="20,90 90,90 55,20" fill="none" stroke="#f59e0b" strokeWidth={2} />
      <rect x={120} y={40} width={52} height={50} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="130,40 162,40 146,10" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={230} y={10} width={80} height={80} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="240,80 300,80 270,20" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M270,20 L270,80" stroke="#1f2937" strokeWidth={1.6} fill="none" />
      <rect x={340} y={10} width={70} height={80} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={367} y={28} width={16} height={48} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <text x={50} y={112} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">A</text>
      <text x={160} y={112} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">B</text>
      <text x={270} y={112} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">C</text>
      <text x={380} y={112} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">D</text></g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>外部轮廓定方向，内部线条定选项。看"孔"能不能被看见：<br />· A、B、C 都能在某个方向上把孔或三角的投影画出来，线条位置也说得通；<br />· D 里那条<b>细长的竖直矩形</b>（对应挖孔长方体的孔）——从该方向看过去，<b>这条棱被前面的四面体（橙色三角）挡住了</b>，"被遮挡的部分看不见"，所以这条线不该出现。<br />要点：视图中的线必须是<b>能看见的棱或（同一平面上）确实存在的轮廓线</b>，被挡住的不画。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>
        <Callout variant="tip">提示：这类题<b>看一分钟题目，可以不用全会</b>——先把"某个方向一定相同"这个特征找出来，用特征去排选项，比死磕每个视图快得多。</Callout>
      </Block>
      <Block>
        <BlockTitle>7. 截面基础：外轮廓判方向，复杂立体拆常见（例题 8~13）</BlockTitle>
        <Callout variant="key">截面三原则：<b>①一刀切 ②刀无限大 ③不能拐弯</b>；解题主线：<b>外轮廓判断切割方向</b>，<b>复杂立体 → 拆成常见立体图形</b>。</Callout>
        <Example>
        <ExampleHeader>📝 例题8 · 截面（圆锥台挖圆锥 · 20联考 74%）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>一圆锥台如下图所示，从正中心挖掉一个小圆锥体，然后从任意面剖开，下面哪一项<b>不可能</b>是该圆锥台的截面？</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 184 176" role="img" aria-label="题干：圆锥台，从正中心挖掉一个小圆锥体">
      <g transform="translate(0,8)">
      <path d="M84,30 L58,130 A52,16 0 0 0 162,130 L136,30 A26,16 0 0 1 84,30 Z" fill="none" stroke="#1f2937" strokeWidth={2} /><path d="M84,30 A26,16 0 0 1 136,30" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" />
      <ellipse cx={110} cy={30} rx={26} ry={16} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <ellipse cx={110} cy={30} rx={12} ry={7} fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <path d="M98,33 L110,128 M122,33 L110,128" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" fill="none" />
      <path d="M58,126 A52,16 0 0 0 162,126" stroke="#f59e0b" strokeWidth={2} fill="none" /></g>
      </svg><figcaption>图：题干：圆锥台（中心挖去一个小圆锥体）</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 464 157" role="img" aria-label="选项 A 半圆、B 大圆内含小圆、C 两个梯形、D 大圆">
      <g transform="translate(2,14)">
      <path d="M20,90 A40,40 0 0 1 100,90 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <circle cx={175} cy={48} r={40} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <circle cx={175} cy={48} r={10} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="250,90 262,20 288,20 300,90" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="300,90 312,20 338,20 350,90" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <circle cx={400} cy={50} r={40} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <text x={60} y={118} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">A</text>
      <text x={172} y={118} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">B</text>
      <text x={284} y={118} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">C</text>
      <text x={396} y={118} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">D</text></g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>用<b>外轮廓判断切割方向</b>：<br />· 过轴的竖直切面（一刀切到底）→ 外轮廓是等腰梯形，中间被圆锥空腔切掉一个"V"，正好是两个梯形的形状（C 可以）；<br />· 平行底面、在空腔范围内横切 → 外面一个大圆、里面一个小圆（B 可以）；<br />· 斜切穿过空腔 → 得到"半椭圆/半圆+直线"（A 可以）；<br />· 而 D 是<b>一个实心大圆</b>：只有切面完全躲开圆锥空腔（即<b>贴着最底面</b>去切）才可能出现，这是"极端情况——无限接近外表面"，考试不认。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>
        <Example>
        <ExampleHeader>📝 例题9 · 截面（正方体挖圆锥孔 · 21广东 75%）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>下列选项中，<b>不属于</b>左侧立体图形的截面的是：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 218 188" role="img" aria-label="题干：正方体从顶面挖去一个圆锥形孔">
      <g transform="translate(0,6)">
      <rect x={40} y={40} width={120} height={120} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="40,40 160,40 196,16 76,16" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="160,40 196,16 196,136 160,160" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M40,160 L76,136 M76,136 L196,136 M76,136 L76,16" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <ellipse cx={112} cy={42} rx={30} ry={11} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M84,45 L104,120 M140,45 L120,120" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" fill="none" />
      <ellipse cx={112} cy={120} rx={10} ry={5} fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /></g>
      </svg><figcaption>图：题干：正方体挖去一个圆锥形孔</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 472 151" role="img" aria-label="选项 A 方框内两同心圆、B 方框内梯形槽、C 方框、D 方框内一个圆">
      <g transform="translate(12,2)">
      <rect x={10} y={20} width={86} height={86} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={53} cy={63} r={28} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <circle cx={53} cy={63} r={15} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={126} y={20} width={86} height={86} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M146,20 L152,58 L186,58 L192,20" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={242} y={20} width={86} height={86} fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={352} y={20} width={86} height={86} fill="none" stroke="#1f2937" strokeWidth={2} />
      <circle cx={395} cy={63} r={24} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <text x={53} y={124} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">A</text>
      <text x={169} y={124} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">B</text>
      <text x={285} y={124} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">C</text>
      <text x={401} y={124} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">D</text></g>
      </svg><figcaption>图：选项 A / B / C / D（方框＝截面外轮廓）</figcaption></figure>
          <ExampleAnswer><b>解析：</b>每个选项外面的方框＝正方体被切出的外轮廓，关键看<b>里面的孔</b>。孔是"上大下小的圆锥"：<br />· 竖直过孔的轴线切 → 外轮廓是矩形，孔被切成一个上宽下窄的梯形槽（B 可以）；<br />· 平行底面、在孔的下方切 → 只剩一个正方形（C 可以）；<br />· 平行底面、穿过孔切 → 正方形里出现<b>一个</b>圆（D 可以）；<br />· A 画的是"方框里两个同心圆"，即要求孔是一段上下等粗的<b>圆筒/环</b>才能切出环；圆锥孔横切只会得到一个圆，<b>切不出同心圆环</b>。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>
        <Example>
        <ExampleHeader>📝 例题10 · 截面（空心立体的截面 · 22国考 73%）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>左图是给定的空心立体图形，将其从任一面剖开，右边哪项<b>可能</b>是该立体图形的截面？</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 252 165.9" role="img" aria-label="题干：给定的空心立体图形（上圆锥尖朝上、下圆锥尖朝下，内部空心）">
      <g transform="translate(0,2)">
      <path d="M170,20 L110,70 L230,70 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M110,70 A60,20 0 0 0 230,70" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M110,70 L150,140 M230,70 L190,140" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M150,140 A40,14 0 0 0 190,140" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M150,140 A40,14 0 0 1 190,140" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <ellipse cx={170} cy={66} rx={34} ry={11} fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <path d="M158,58 L170,44 M182,58 L170,44" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" fill="none" />
      <path d="M150,140 A40,14 0 0 1 190,140" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /></g>
      </svg><figcaption>图：题干：空心立体图形</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 464 147" role="img" aria-label="选项 A 五边形、B 同心圆、C 很尖的三角形、D 矩形">
      <g transform="translate(0,14)">
      <polygon points="60,14 96,40 82,84 38,84 24,40" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <circle cx={180} cy={48} r={40} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <circle cx={180} cy={48} r={13} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="280,66 340,26 348,36" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={390} y={20} width={52} height={60} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <text x={62} y={108} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">A</text>
      <text x={174} y={108} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">B</text>
      <text x={286} y={108} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">C</text>
      <text x={398} y={108} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">D</text></g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>题目问的是哪一项<b>可能</b>是截面（陷阱：不是"不可能"）。<br />这个立体是<b>空心</b>的（上下都是锥面、中间是空腔）：<br />· 平行于中间那个大圆盘横切 → 外面一个大圆、里面一个小圆，即<b>圆环状</b>的"同心圆"，B 可以；<br />· 竖直过轴切 → 是"两个三角形上下对接"的菱形轮廓，不是五边形（A 不行）；<br />· 侧面能切出的三角形/四边形状与 C、D 画的对不上（C 太尖、D 是矩形，都没有相应的平面范围）。<br />所以只有 B 能由"一刀"切出。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>
        <Example>
        <ExampleHeader>📝 例题11 · 截面（阶梯多面体的截面 · 23浙江 64%）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>左图为给定的多面体，将其从任一面剖开，哪项<b>不可能</b>是该多面体的截面？</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 320 192" role="img" aria-label="题干：由长方体拼成的阶梯状多面体">
      <g transform="translate(0,30)">
      <rect x={60} y={90} width={160} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="60,90 220,90 258,52 98,52" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="220,90 258,52 258,102 220,140" fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={120} y={30} width={70} height={60} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="120,30 190,30 228,-8 158,-8" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="190,30 228,-8 228,52 190,90" fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={190} y={60} width={70} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="190,60 260,60 298,22 228,22" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="260,60 298,22 298,72 260,110" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M60,140 L98,102 M98,102 L220,102 M98,102 L98,52" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /></g>
      </svg><figcaption>图：题干：给定的多面体</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 424 141" role="img" aria-label="选项 A 凸字形缺口、B 矩形加细条、C 一个 L 形、D 两个 L 形错位">
      <g transform="translate(2,8)">
      <path d="M20,80 L20,56 L44,56 L44,32 L68,32 L68,56 L92,56 L92,80 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={126} y={20} width={44} height={34} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={120} y={58} width={62} height={12} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M242,80 L242,20 L268,20 L268,56 L306,56 L306,80 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M340,50 L340,14 L356,14 L356,34 L376,34 L376,50 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M356,86 L356,50 L372,50 L372,70 L400,70 L400,86 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <text x={56} y={108} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">A</text>
      <text x={168} y={108} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">B</text>
      <text x={280} y={108} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">C</text>
      <text x={392} y={108} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">D</text></g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>外轮廓判断切割方向 + <b>关注"长度"</b>。<br />这个多面体是三块长方体拼成的阶梯：前一块长条、后一块高块、右侧一块矮块。<br />· A、B、C：切面或者沿"阶梯"纵向切、或者平行于某个面切，轮廓长度与实物的长条／高块对得上；<br />· D 是两个 L 形上下错位，要求切面同时横跨两个不同高度且都在水平方向"伸出来"，<b>两个 L 的长度不可能同时满足</b>（实物上这两块的伸出长度无法被同一个平面截出）。<br /><span className="correct">答案：D</span></ExampleAnswer>
        </ExampleBody>
      </Example>
        <Example>
        <ExampleHeader>📝 例题12 · 截面（圆柱挖空的截面 · 23国考 62%）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>下面是给定的立体图形（大圆柱内的虚线部分为挖空部分），将其从任一面剖开，下面哪一项<b>不可能</b>是该立体图形的截面？</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 244 189" role="img" aria-label="题干：大圆柱内挖空一圈圆柱，上方立着一个小圆柱">
      <g transform="translate(0,21)">
      <ellipse cx={160} cy={46} rx={62} ry={18} fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M98,46 L98,128 A62,18 0 0 0 222,128 L222,46" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M98,128 A62,18 0 0 1 222,128" fill="none" stroke="#6b7280" strokeWidth={1.3} strokeDasharray="4 3" />
      <path d="M112,46 A62,18 0 0 0 208,46" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <path d="M132,50 L132,132 M188,50 L188,132" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" fill="none" />
      <ellipse cx={160} cy={50} rx={28} ry={9} fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <ellipse cx={160} cy={132} rx={28} ry={9} fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <path d="M132,50 L132,10 A28,9 0 0 1 188,10 L188,50" fill="#e5e7eb" fillOpacity="0.75" stroke="#1f2937" strokeWidth={2} />
      <ellipse cx={160} cy={10} rx={28} ry={9} fill="#e5e7eb" fillOpacity="0.9" stroke="#1f2937" strokeWidth={2} /></g>
      </svg><figcaption>图：题干：圆柱组合体（大圆柱内虚线部分为挖空部分）</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 430 149" role="img" aria-label="选项 A 三个同心圆、B 凸字形、C 拱形半圆、D 马蹄拱形">
      <g transform="translate(4,14)">
      <circle cx={60} cy={50} r={42} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <circle cx={60} cy={50} r={27} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <circle cx={60} cy={50} r={14} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M136,86 L136,50 L152,50 L152,10 L176,10 L176,50 L192,50 L192,86 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M216,86 L216,52 A40,30 0 0 1 296,52 L296,86 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M336,86 L336,50 A34,34 0 0 1 404,50 L404,86 L378,86 L378,58 A8,8 0 0 0 362,58 L362,86 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <text x={60} y={110} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">A</text>
      <text x={160} y={110} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">B</text>
      <text x={260} y={110} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">C</text>
      <text x={360} y={110} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">D</text></g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>外轮廓判断切割方向，注意"<b>底部可以看出几个圆</b>"。<br />· 竖直过轴线切 → 上面小矩形（上圆柱）叠在下面大矩形（大圆柱）上，就是 B 的凸字形；<br />· 斜切大圆柱侧面 → 半椭圆/半圆＋直线，C 可以；<br />· 切两个圆柱交界处 → 出现 D 那种拱形；<br />· 而 A 是<b>三个同心圆</b>：水平切这个立体，最多只能得到"大圆（外壁）+ 小圆（挖空孔）"<b>两个</b>圆——必须腔体是"管套环"才能再多一圈，题目给的是单层挖空，切不出三个圆。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>
        <Example>
        <ExampleHeader>📝 例题13 · 截面（正方体挖圆柱 · 24山西 44%）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>将一个正方体从中间挖去一个圆柱，得到如左图所示的新立体图形，从任意面剖开，右边哪一项<b>不可能</b>是该立体图形的截面？</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 228 192" role="img" aria-label="题干：正方体从中间挖去一个竖直圆柱">
      <rect x={50} y={50} width={120} height={120} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="50,50 170,50 206,26 86,26" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="170,50 206,26 206,146 170,170" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M50,170 L86,146 M86,146 L206,146 M86,146 L86,26" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <ellipse cx={122} cy={52} rx={24} ry={9} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M98,52 L98,140 A24,9 0 0 0 146,140 L146,52" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M98,140 A24,9 0 0 1 146,140" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" /></svg><figcaption>图：题干：正方体从中间挖去一个圆柱</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 466 179" role="img" aria-label="选项 A 三角形带弧、B 方形上下带半圆缺口、C 方形内含圆孔、D 六边形">
      <g transform="translate(0,22)">
      <path d="M50,90 L84,20 L118,90 A20,8 0 0 0 50,90 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M158,16 L172,16 A16,16 0 0 1 204,16 L218,16 L218,108 L204,108 A16,16 0 0 0 172,108 L158,108 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={256} y={16} width={70} height={92} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <ellipse cx={291} cy={78} rx={18} ry={12} fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <polygon points="380,30 412,14 444,30 444,90 412,106 380,90" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <text x={84} y={132} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">A</text>
      <text x={182} y={132} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">B</text>
      <text x={280} y={132} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">C</text>
      <text x={378} y={132} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">D</text></g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>孔是<b>竖直</b>贯通的圆柱，截面必须"合得上"：<br />· 斜切过孔（刀从顶面切向侧面）→ 外轮廓是三角形，边上被圆柱面切出一小段弧，A 可以；<br />· 水平切（过孔）→ 正方形里一个圆，C 可以；<br />· 斜切（过六个面）→ 六边形，D 可以；<br />· B 的方框<b>上下两条边各有一个半圆缺口</b>：这要求圆柱的轴线是<b>水平</b>的（刀垂直于轴线切）。本题孔是竖直的，竖直切面切圆柱只会得到两条<b>平行的直线</b>（即矩形内部两条竖线），不可能在上下边缘切出半圆。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>
      </Block>
      <Block>
        <BlockTitle>8. 截面拔高：三点确定一个面（例题 14~15）+ 小结</BlockTitle>
        <p>考试新趋势：<b>三点确定一个面</b>——题干给出三个顶点，问切面（或截面）是哪个。解密口诀：</p>
        <PointList>
          <li><b>连接两点，再通过第三点画平行线</b>（如"连接 ab，再通过 c 画 ab 的平行线"/"连接 PQ，再通过 R 画 PQ 的平行线"）；</li>
          <li>切面在立体表面走，凡是从<b>同一方向</b>切过去的边，在切面上是一组<b>平行边</b>；</li>
          <li>数每一排的个数、看每一排的颜色（若方块有深浅），切面图就出来了。</li>
        </PointList>
        <Example>
        <ExampleHeader>📝 例题14 · 截面（三顶点确定的截面 · 25联考 69%）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>下图为给定的多面体，将其沿 a、b、c 三个顶点所在的平面切开，其截面是：</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 289.6 197" role="img" aria-label="题干：阶梯状多面体，标出顶点 a、b、c">
      <g transform="translate(0,20)">
      <rect x={70} y={96} width={150} height={46} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="70,96 220,96 254,62 104,62" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="220,96 254,62 254,108 220,142" fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={120} y={36} width={66} height={60} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="120,36 186,36 220,2 154,2" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="186,36 220,2 220,62 186,96" fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={70} y={96} width={150} height={46} fill="#e5e7eb" fillOpacity="0.5" stroke="#1f2937" strokeWidth={2} />
      <circle cx={254} cy={96} r={4} fill="#ef4444" />
      <circle cx={186} cy={36} r={4} fill="#ef4444" />
      <circle cx={70} cy={142} r={4} fill="#ef4444" />
      <text x={264} y={100} fontSize={13} fill="#ef4444" textAnchor="middle" fontWeight="normal">a</text>
      <text x={180} y={26} fontSize={13} fill="#ef4444" textAnchor="middle" fontWeight="normal">b</text>
      <text x={56} y={152} fontSize={13} fill="#ef4444" textAnchor="middle" fontWeight="normal">c</text>
      <path d="M186,36 L254,96" stroke="#f59e0b" strokeWidth={1.8} strokeDasharray="5 3" fill="none" /></g>
      </svg><figcaption>图：题干：多面体及 a、b、c 三个顶点</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 442 135" role="img" aria-label="选项 A 平行四边形带缺口、B 阶梯形、C 阶梯形、D 阶梯形">
      <g transform="translate(2,2)">
      <path d="M20,80 L74,20 L124,20 L70,80 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M74,44 L98,44 L98,56 L74,56 Z" fill="none" stroke="#1f2937" strokeWidth={1.6} />
      <path d="M140,80 L140,40 L156,40 L156,20 L172,20 L172,56 L190,56 L190,80 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M156,56 L156,80 M172,56 L190,56 L190,80" fill="none" stroke="#1f2937" strokeWidth={1.4} />
      <path d="M240,80 L240,34 L286,34 L286,56 L310,56 L310,80 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <path d="M240,56 L286,56" fill="none" stroke="#1f2937" strokeWidth={1.4} />
      <path d="M350,80 L350,20 L368,20 L368,50 L392,50 L392,66 L418,66 L418,80 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <text x={60} y={108} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">A</text>
      <text x={165} y={108} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">B</text>
      <text x={270} y={108} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">C</text>
      <text x={375} y={108} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">D</text></g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>三点确定一个面，口诀：<b>连接 ab，再通过 c 画 ab 的平行线</b>（因为 a、b 同在一条上表面的棱上，向上/向前延伸后与 c 所在平面相交成"平行线"，切面在立体上必然出现一组平行边）。<br />按这个办法把切面在实物上画出来：过 a、b 的直线先"切"到前面低台上，再从 c 引平行线，得到的轮廓是一个<b>阶梯形</b>（低台→高台→低台），B 与之吻合。<br />对比：A 是斜的平行四边形（切口方向不对）、C 只有一级台阶（少了前台上的一段）、D 的台阶方向与实际相反。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>
        <Example>
        <ExampleHeader>📝 例题15 · 截面（三顶点确定的截面 · 25国考 36%）</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>左边为给定的多面体，现用经 P、Q、R 三个顶点的平面对其进行切割，问哪个选项是其切面？</ExampleQuestion>
          <figure className="fig"><svg viewBox="0 0 266 192" role="img" aria-label="题干：阶梯状多面体，标出顶点 P、Q、R">
      <g transform="translate(0,26)">
      <rect x={60} y={100} width={150} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="60,100 210,100 244,66 94,66" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="210,100 244,66 244,110 210,144" fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={100} y={30} width={80} height={70} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="100,30 180,30 214,-4 134,-4" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="180,30 214,-4 214,66 180,100" fill="none" stroke="#1f2937" strokeWidth={2} />
      <rect x={140} y={60} width={70} height={40} fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="140,60 210,60 244,26 174,26" fill="none" stroke="#1f2937" strokeWidth={2} />
      <polygon points="210,60 244,26 244,66 210,100" fill="none" stroke="#1f2937" strokeWidth={2} />
      <path d="M60,144 L94,110 M94,110 L210,110 M94,110 L94,66" fill="none" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" />
      <path d="M100,30 L100,100" stroke="#6b7280" strokeWidth={1.4} strokeDasharray="4 3" fill="none" />
      <circle cx={100} cy={30} r={4} fill="#ef4444" />
      <circle cx={180} cy={30} r={4} fill="#ef4444" />
      <circle cx={210} cy={100} r={4} fill="#ef4444" />
      <text x={88} y={24} fontSize={13} fill="#ef4444" textAnchor="middle" fontWeight="normal">P</text>
      <text x={184} y={24} fontSize={13} fill="#ef4444" textAnchor="middle" fontWeight="normal">Q</text>
      <text x={216} y={112} fontSize={13} fill="#ef4444" textAnchor="middle" fontWeight="normal">R</text>
      <path d="M100,30 L180,30" stroke="#f59e0b" strokeWidth={2} fill="none" />
      <path d="M100,74 L210,74" stroke="#f59e0b" strokeWidth={2} fill="none" /></g>
      </svg><figcaption>图：题干：多面体及 P、Q、R 三个顶点</figcaption></figure>
          <figure className="fig"><svg viewBox="0 0 468 129" role="img" aria-label="选项 A 阶梯形、B 正方形、C 两个错位矩形、D 两个错位矩形">
      <g transform="translate(2,4)">
      <path d="M20,84 L20,44 L38,44 L38,22 L56,22 L56,62 L76,62 L76,84 Z" fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={118} y={34} width={52} height={50} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={230} y={18} width={70} height={34} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={252} y={60} width={66} height={26} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={352} y={18} width={58} height={30} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <rect x={374} y={56} width={70} height={30} fill="none" stroke="#1f2937" strokeWidth={1.8} />
      <text x={60} y={100} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">A</text>
      <text x={160} y={100} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">B</text>
      <text x={260} y={100} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">C</text>
      <text x={360} y={100} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal">D</text></g>
      </svg><figcaption>图：选项 A / B / C / D</figcaption></figure>
          <ExampleAnswer><b>解析：</b>解密：<b>连接 PQ，再通过 R 画 PQ 的平行线</b>。<br />P、Q 同在顶面的一条棱上（橙色），把这条棱向前、向下"推"下去：经过 R 的那一侧，切面正好沿着<b>前一块长方体的侧面</b>切下去；此时切口是：上边一条水平线（PQ 所在棱的投影）＋两条竖线（前后两块块的竖直棱）＋下边一条水平线。<br />也就是说，这个切面恰好是<b>平行于一个侧面</b>的一刀 → 截面就是正方形。<br />A 是阶梯轮廓（对应的是"过三个不同高度的顶点"的切法）；C、D 两个错位矩形是切面没有切到整块时的假象。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>
        <Callout variant="key">本章小结：① <b>三视图</b>——外部轮廓定方向，内部线条定选项；原图无线不画、原图有线同一平面也不画；被遮挡的不画；曲面变直线。② <b>截面</b>——外轮廓判断切割方向；复杂立体拆常见立体；正方体共 15 种截面（无直角三角形、最多六边形）；三点定面用"平行线法"。</Callout>
        <Callout variant="tip">容易混淆的两句话：<b>"是哪一项"</b>与<b>"不是哪一项"</b>——历年真题里两种问法都出现过（如例题 8、10 问"可能是"，例题 9、11、12、13 问"不可能是"），做题先把问法圈出来。</Callout>
      </Block>
      
          
            <Block>
        <BlockTitle>补充10. 截面题三板斧：三原则 + "轮廓 + 黑块" + 易错点</BlockTitle>
        <p>夸夸刷（一）P103 给了切割的<b>三条原则</b>：<b>① 一刀切 ② 刀无限大 ③ 不能拐弯</b>；并用"出题者小心思"演示了三种"障眼法"：<b>"不直接告诉你斜切"、"在蓝线上移动 A 点截面不变"、"少一个点切割不变"、"少几块/加几个黑块截面怎么变"</b>。</p>
        <p>（三）P87-89（20 联考事业-47%）给出解题步骤：<b>"轮廓 + 黑块"确定截面</b>——先用外轮廓定形状，再看灰（黑）块落在哪几格。<b>易错点：外轮廓"长方形 &amp; 正方形"要分清</b>（斜着切出来的常是长方形，不是正方形）。</p>
        <Callout variant="key">口诀：<b>截面＝轮廓（形状）+ 黑块（位置）</b>；三原则"一刀切、刀无限大、不能拐弯"；<b>少一个点、点沿同一平面移动 → 截面不变</b>；<b>长方形 ≠ 正方形</b>。</Callout>
        <Example>
          <ExampleHeader>📝 例题10 · 正方体截面（24国考-40% / 20联考事业-47%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>上图为 13 个白色正方体和 5 个灰色正方体组合而成的多面体，现用经 A、B、C 三个顶点的平面对该多面体进行切割，正确的截面是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 400.2 188" role="img" aria-label="正方体斜切示意与切割三原则">
      <g transform="translate(0,3)">
              <g stroke="#1f2937" fill="#ffffff" strokeWidth={1.2}>
                <rect x={60} y={45} width={80} height={80} />
                <polygon points="60,45 100,20 180,20 140,45" />
                <polygon points="140,45 180,20 180,100 140,125" />
              </g>
              <g stroke="#6b7280" fill="none" strokeWidth={0.8}>
                <line x1={86} y1={45} x2={86} y2={125} /><line x1={113} y1={45} x2={113} y2={125} />
                <line x1={60} y1={71} x2={140} y2={71} /><line x1={60} y1={98} x2={140} y2={98} />
                <line x1={73} y1={32} x2={153} y2={32} /><line x1={86} y1={19} x2={166} y2={19} />
                <line x1={113} y1={32} x2={113} y2={112} />
              </g>
              <polygon points="70,105 130,45 160,62 100,122" fill="#7c3aed" fillOpacity="0.18" stroke="#7c3aed" strokeWidth={1.4} />
              <g fill="#ef4444">
                <circle cx={60} cy={45} r={3} /><circle cx={140} cy={45} r={3} /><circle cx={140} cy={125} r={3} />
              </g>
              <g fontSize={11} fill="#ef4444">
                <text x={44} y={42} fill="#ef4444">A</text><text x={145} y={42} fill="#ef4444">B</text><text x={145} y={138} fill="#ef4444">C</text>
              </g>
              <g fontSize={12.5} fill="#1f2937">
                <text x={230} y={40} fill="#1f2937">切割三原则</text>
                <text x={230} y={64} fill="#1f2937">① 一刀切（一刀到底）</text>
                <text x={230} y={88} fill="#1f2937">② 刀无限大</text>
                <text x={230} y={112} fill="#1f2937">③ 不能拐弯</text>
                <text x={230} y={138} fill="#7c3aed">少一个点 / 点在平面内移动</text>
                <text x={230} y={160} fill="#7c3aed">→ 截面不变</text>
              </g>
            </g>
      </svg><figcaption>图：经 A、B、C 三点斜切（紫面）与切割三原则</figcaption></figure>
            <ExampleAnswer><b>解析：</b>三点里 A、C 在同一个面上 → 先连 A、C；再用 B 作 AC 的平行线，围出的四边形就是截面（此题为斜切，截面是长方形而非正方形）。再按"轮廓 + 黑块"：外轮廓定形状、灰块位置定格数，逐项核对，只有 B 项形状与灰块都对得上。<br /><span className="correct">答案：B</span><br /><span style={{ color: '#6b7280' }}>（20 联考事业-47%："17 白 + 10 灰"大正方体，同一思路，答案见该题解析。）</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
    </>
  )
}
