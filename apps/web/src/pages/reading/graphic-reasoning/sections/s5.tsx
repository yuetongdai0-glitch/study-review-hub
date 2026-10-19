import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleQuestion, PointList } from '@/components/content'

/**
 * 五、数量 · 笔画 / 元素 / 直角
 *
 * @returns 该节正文。
 */
export default function S6(): ReactElement {
  return (
    <>
      <Block>
        <BlockTitle>1. 数量规律总纲：先看属性，再数数量</BlockTitle>
        <p>刘义恒「图推命题思维」第五节讲<b>数量规律</b>，本节落到三个高频考点：<b>笔画</b>、<b>元素</b>、<b>直角</b>（考点体系：①面 ②线 ③点 ④笔画 ⑤元素 ⑥角）。</p>
        <PointList>
          <li><b>命题者作图特点：每幅图图案不同。</b>图案不一样，说明它在"换样子"，这时优先想<b>属性</b>。</li>
          <li><b>解题思路：</b>每幅图图案不同 → 先看属性（对称性（规则）、曲直性（曲线））→ 属性无规律再转<b>数量</b>（线条数量、笔画、元素、直角）。</li>
          <li><b>宏观思维：</b>①先属性、后数量，且属性规律中的对称性优先最高；②背诵数量规律中图形特征，直接定位；③极端情况，优先考虑"图形关系"。</li>
          <li><b>什么是"笔画"？</b>在<b>不能重复</b>的情况下，能够一笔画成（提示："点"可以重复"走"）。</li>
        </PointList>
        <Callout variant="key">
          <b>图推不是"越多越好"，一定要学会"减法""区分"。</b>数量规律的第一步不是数，而是判断"这道题该数什么"——图案不同看属性，属性无解才回数量。
        </Callout>
        <Callout variant="tip">
          基础考点：识别<b>一笔画、两笔画、三笔画</b>。老版本靠"日、田、五角星、圆相交"认脸；新趋势靠"多端点、面特征、生活化"认脸。
        </Callout>
      </Block>
      
      <Block>
        <BlockTitle>2. 奇点数：一笔画与多笔画的判定</BlockTitle>
        <p>判断笔画只认两件事：<b>连通</b>和<b>奇点</b>。这是本节最核心的口诀。</p>
        <PointList>
          <li><b>（1）线条之间连通</b>——图形必须是连在一起的一整块（不连通时要分开算）。</li>
          <li><b>（2）奇点数为 0 或 2</b>——奇点数为 0 或 2 个时，才能一笔画成。</li>
          <li><b>什么是奇点？</b>以一个点为中心，<b>发射出奇数条线</b>，这个点就是奇点。</li>
          <li><b>端点也是奇点，不要忘记数！</b>凡是"线头"（只连 1 条线的点）都是奇点。</li>
          <li><b>多笔画：</b>笔画数 = 奇点数 ÷ 2（奇点数一定是偶数，不可能是奇数）。</li>
          <li><b>不连在一起的，记得相加</b>——分成几块就连几笔相加。</li>
        </PointList>
        <Callout variant="formula"><span className="formula">笔画数 = 奇点数 ÷ 2</span></Callout>
        <Callout variant="key">
          <b>经典例图记忆（理论速记·笔画）：</b><br />
          ① 笔画概念：在不能重复的情况下，能够一笔画成；<br />
          ② "一笔画"需要同时满足两个条件：1. 线条之间全部连通；2. 奇点数为 0 或 2 个；<br />
          ③ 多笔画：连通图笔画数 = 奇点数 ÷ 2（任何图形的奇点总数一定是偶数）；<br />
          ④ 命题者作图特点——旧版本：五角星、日、田、圆相交；新版本：多端点、面、生活化。
        </Callout>
        <Callout variant="tip">
          <b>口算示范：</b>"日"字——上下两条横线把竖直边框分成 4 段，中间横线与左右竖边相交处各为 3 度（奇点），共 2 个奇点 → 一笔画；"田"字——4 条边的中点都是 3 度 → 4 个奇点 → 两笔画；五角星外轮廓（不加内线）0 个奇点 → 一笔画。
        </Callout>
      
        <Example>
          <ExampleHeader>📝 例题1 · 一笔画分类（奇点数 · 2025 国考）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 504 361.1" role="img" aria-label="二十五国考一笔画分类题题干六个图形">
      <g transform="translate(22,22)">
              <g stroke="#1f2937" strokeWidth={1.5} fill="#ffffff">
                <rect x={0} y={0} width={140} height={140} />
                <rect x={160} y={0} width={140} height={140} />
                <rect x={320} y={0} width={140} height={140} />
                <rect x={0} y={160} width={140} height={140} />
                <rect x={160} y={160} width={140} height={140} />
                <rect x={320} y={160} width={140} height={140} />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none" strokeLinecap="round">
                
                <path d="M 50 32 L 108 32 L 79 72 Z" />
                <path d="M 50 112 L 108 112 L 79 72 Z" />
                <circle cx={36} cy={45} r={19} />
                
                <rect x={188} y={40} width={84} height={60} />
                <path d="M 188 40 L 272 100 M 272 40 L 188 100" />
                
                <rect x={360} y={30} width={68} height={68} />
                <path d="M 428 30 L 360 98" />
                <circle cx={346} cy={104} r={15} />
                
                <circle cx={74} cy={234} r={48} />
                <path d="M 50 192 L 118 217 M 50 192 L 76 282 M 28 247 L 118 217 M 28 247 L 76 282" />
                
                <circle cx={234} cy={234} r={48} />
                <rect x={201} y={199} width={66} height={70} />
                <path d="M 201 199 L 267 269 M 267 199 L 201 269" />
                
                <rect x={340} y={180} width={100} height={100} />
                <path d="M 390 180 L 440 230 L 390 280 L 340 230 Z" />
                <path d="M 390 180 L 390 280 M 340 230 L 440 230" />
              </g>
              <g fontSize={13} fill="#6b7280" textAnchor="middle">
                <text x={70} y={154} fill="#6b7280">①</text><text x={230} y={154} fill="#6b7280">②</text><text x={390} y={154} fill="#6b7280">③</text>
                <text x={70} y={314} fill="#6b7280">④</text><text x={230} y={314} fill="#6b7280">⑤</text><text x={390} y={314} fill="#6b7280">⑥</text>
              </g>
            </g>
      </svg><figcaption>图：题干六个图形（讲义 p35 原题还原）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 408.9 107" role="img" aria-label="四个选项的文字分组">
      <g transform="translate(8,11)">
              <g fontSize={17} fill="#1f2937">
                <text x={14} y={30} fill="#1f2937">A. ①②④，③⑤⑥</text>
                <text x={250} y={30} fill="#1f2937">B. ①③④，②⑤⑥</text>
                <text x={14} y={70} fill="#1f2937">C. ①②⑤，③④⑥</text>
                <text x={250} y={70} fill="#1f2937">D. ①④⑤，②③⑥</text>
              </g>
              <g stroke="#ef4444" strokeWidth={2.5} fill="none">
                <circle cx={238} cy={24} r={13} />
              </g>
              <text x={222} y={30} fontSize={15} fill="#10b981">✔</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（讲义答案：B）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>数奇点。<br />
              ①小圆与"蝴蝶结"只在内侧一点相接，该点 4 条线（偶点），其余顶点均为 2 条线（偶点）→ <b>0 个奇点 → 一笔画</b>；<br />
              ②矩形四个角各有 2 条边 + 1 条对角线 = 3 条线 → <b>4 个奇点 → 两笔画</b>；<br />
              ③对角线使右上、左下两个角变成 3 条线，小圆在与左下角相接处再加 2 条线（共 5 条，仍是奇点）→ <b>2 个奇点 → 一笔画</b>；<br />
              ④圆上的四个接点各有 2 条弧 + 2 条弦 = 4 条线，中间两弦交点 4 条线 → <b>0 个奇点 → 一笔画</b>；<br />
              ⑤圆上四个接点各为 2 弧 + 2 边 + 1 斜线 = 5 条线 → <b>4 个奇点 → 两笔画</b>（"田"字形特征）；<br />
              ⑥正方形四边中点各有 2 边 + 2 条菱形边 + 1 条中线 = 5 条线 → <b>4 个奇点 → 两笔画</b>。<br />
              所以 ①③④ 一笔画、②⑤⑥ 两笔画。<br /><span className="correct">答案：B</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>3. 笔画的"小心思"与"去外框法"</BlockTitle>
        <p>笔画题看着复杂，是因为出题人给图形加了个"外框"。加外框不改变笔画数，只让图形变复杂——这就是"小心思"。</p>
        <PointList>
          <li><b>旧版本质特征：</b>五角星、日、田、圆相交——看到这些"脸熟"的图形，先想笔画。</li>
          <li><b>最新趋势：</b>多端点、面特征、生活化（生活化图形难度升级，会考 2 笔画 / 3 笔画）。</li>
          <li><b>"加外框"陷阱：</b>"外框"不影响笔画数，却让图形复杂。</li>
          <li><b>"解密"办法：可以尝试"去外框"看。</b></li>
        </PointList>
        <Callout variant="key">
          <b>去外框法（理论速记·新增）：</b><br />
          ① 外框：从一个点出发，回到原点，路径不唯一；<br />
          ② 优先去最外面的框，再去剩下的，更清晰；<br />
          ③ 去完后没有图案，还是一笔画；<br />
          ④ <b>没有连在一起的外框，不能去</b>，算独立的一笔（做标记）。
        </Callout>
        <Callout variant="tip">
          <b>出题者"小心思"的难度升级：</b>24 联考·生活化 → 1 笔画 / 2 笔画（146）；25 联考·生活化 → 2 笔画 / 3 笔画（126）。也就是说，现在给的图形"去完外框"也还要数到两笔、三笔。
        </Callout>
      
        <Example>
          <ExampleHeader>📝 例题2 · 笔画分类（生活化图形 · 2 笔画 / 3 笔画 · 2025 联考）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 504 371.1" role="img" aria-label="二十五联考生活化图形笔画分类题干">
      <g transform="translate(22,22)">
              <g stroke="#1f2937" strokeWidth={1.5} fill="#ffffff">
                <rect x={0} y={0} width={140} height={140} />
                <rect x={160} y={0} width={140} height={140} />
                <rect x={320} y={0} width={140} height={140} />
                <rect x={0} y={170} width={140} height={140} />
                <rect x={160} y={170} width={140} height={140} />
                <rect x={320} y={170} width={140} height={140} />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none" strokeLinecap="round">
                
                <path d="M 30 72 L 70 32 L 110 72" />
                <path d="M 30 72 L 110 72 L 110 122 L 30 122 Z" />
                <path d="M 60 122 L 60 105 Q 70 93 80 105 L 80 122" />
                
                <path d="M 200 50 L 260 50 L 274 80 L 186 80 Z" />
                <path d="M 230 50 L 230 80" />
                <path d="M 186 80 L 230 120 L 274 80" />
                
                <path d="M 360 60 L 415 60 L 415 122 L 360 122 Z" />
                <path d="M 415 74 Q 435 86 415 100" />
                <path d="M 375 48 Q 368 38 378 28 M 398 48 Q 391 38 401 28" />
                
                <path d="M 35 70 L 105 95 L 35 120 Z" />
                <path d="M 35 95 L 12 75 M 35 95 L 12 115" />
                <circle cx={58} cy={95} r={6} />
                <path d="M 105 95 L 118 95" />
                
                <path d="M 190 250 Q 230 300 270 250 Q 230 276 190 250 Z" />
                <path d="M 208 240 q 4 -8 0 -14 q -4 6 0 14" />
                <path d="M 248 240 q 4 -8 0 -14 q -4 6 0 14" />
                
                <ellipse cx={390} cy={222} rx={28} ry={10} />
                <path d="M 362 222 L 362 278 Q 390 296 418 278 L 418 222" />
              </g>
              <g fontSize={13} fill="#6b7280" textAnchor="middle">
                <text x={70} y={154} fill="#6b7280">①</text><text x={230} y={154} fill="#6b7280">②</text><text x={390} y={154} fill="#6b7280">③</text>
                <text x={70} y={324} fill="#6b7280">④</text><text x={230} y={324} fill="#6b7280">⑤</text><text x={390} y={324} fill="#6b7280">⑥</text>
              </g>
            </g>
      </svg><figcaption>图：题干六个生活化图形（讲义 p48 原题还原）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 408.9 104" role="img" aria-label="四个选项的文字分组">
      <g transform="translate(8,8)">
              <g fontSize={17} fill="#1f2937">
                <text x={14} y={30} fill="#1f2937">A. ①③④，②⑤⑥</text>
                <text x={250} y={30} fill="#1f2937">B. ①②⑥，③④⑤</text>
                <text x={14} y={70} fill="#1f2937">C. ①③⑤，②④⑥</text>
                <text x={250} y={70} fill="#1f2937">D. ①④⑥，②③⑤</text>
              </g>
              <text x={222} y={30} fontSize={15} fill="#10b981">✔</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（讲义答案：B）</figcaption></figure>
            <ExampleAnswer><b>解析：</b><b>去外框</b>后数笔画（笔画拔高：2 笔画 / 3 笔画）。<br />
              ①房子：屋顶与墙共边，2 个墙角与 2 个门脚各是 3 条线 → 4 个奇点 → <b>2 笔画</b>；<br />
              ②钻石：中间横线两端、上边中点（竖刻面线交于横线）各为 3 条线 → 4 个奇点 → <b>2 笔画</b>；<br />
              ③杯子：杯身连着把手（2 个奇点）算 1 笔，加上两条各成 1 笔的热气 → <b>3 笔画</b>；<br />
              ④鱼：鱼身与尾巴相连为 1 笔，鱼眼（独立小圆）、鳍线各 1 笔 → <b>3 笔画</b>；<br />
              ⑤碗：碗壁是闭合图形算 1 笔，两滴水各 1 笔 → <b>3 笔画</b>；<br />
              ⑥圆柱：上椭圆 1 笔，筒身（两条竖线 + 下弧）1 笔 → <b>2 笔画</b>。<br />
              所以 ①②⑥ 两笔画，③④⑤ 三笔画。<br /><span className="correct">答案：B</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题3 · 笔画分类（"田/面"特征 · 一笔画 / 两笔画 · 2025 联考）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 504 371.1" role="img" aria-label="二十五联考笔画分类题干六个图形">
      <g transform="translate(22,22)">
              <g stroke="#1f2937" strokeWidth={1.5} fill="#ffffff">
                <rect x={0} y={0} width={140} height={140} />
                <rect x={160} y={0} width={140} height={140} />
                <rect x={320} y={0} width={140} height={140} />
                <rect x={0} y={170} width={140} height={140} />
                <rect x={160} y={170} width={140} height={140} />
                <rect x={320} y={170} width={140} height={140} />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none" strokeLinecap="round">
                
                <rect x={25} y={25} width={90} height={90} />
                <path d="M 25 25 L 115 65" />
                <rect x={40} y={75} width={45} height={35} />
                
                <rect x={185} y={25} width={90} height={90} />
                <path d="M 185 25 L 275 115" />
                <path d="M 185 70 L 275 70" />
                
                <rect x={345} y={25} width={90} height={90} />
                <path d="M 345 25 L 435 115" />
                <path d="M 390 70 L 430 70 L 430 105 L 390 105 Z" />
                
                <rect x={25} y={195} width={90} height={90} />
                <path d="M 45 230 L 70 265 L 95 225" />
                
                <rect x={185} y={195} width={90} height={90} />
                <path d="M 185 240 L 275 240 M 230 195 L 230 285" />
                
                <rect x={345} y={195} width={90} height={90} />
                <path d="M 345 195 L 390 240 L 435 240" />
              </g>
              <g fontSize={13} fill="#6b7280" textAnchor="middle">
                <text x={70} y={154} fill="#6b7280">①</text><text x={230} y={154} fill="#6b7280">②</text><text x={390} y={154} fill="#6b7280">③</text>
                <text x={70} y={324} fill="#6b7280">④</text><text x={230} y={324} fill="#6b7280">⑤</text><text x={390} y={324} fill="#6b7280">⑥</text>
              </g>
            </g>
      </svg><figcaption>图：题干六个图形（按讲义 p39 原题简化还原，笔画数与原图一致）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 412.9 104" role="img" aria-label="四个选项的文字分组">
      <g transform="translate(12,8)">
              <g fontSize={17} fill="#1f2937">
                <text x={14} y={30} fill="#1f2937">A. ①③④，②⑤⑥</text>
                <text x={250} y={30} fill="#1f2937">B. ①②④，③⑤⑥</text>
                <text x={14} y={70} fill="#1f2937">C. ①②⑤，③④⑥</text>
                <text x={250} y={70} fill="#1f2937">D. ①④⑥，②③⑤</text>
              </g>
              <text x={10.0} y={51.0} fontSize={15} fill="#10b981">✔</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（讲义答案：C）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>逐图数奇点（讲义标注：①2、②2、③1、④2、⑤2、⑥1）。<br />
              ①外框加斜线后只有左上角、右边交点 2 个奇点 → 1 笔；内部小矩形独立成 1 笔 → <b>共 2 笔画</b>；<br />
              ②对角线 + 水平中线让四个交点都变成 3 条线 → 4 个奇点 → <b>2 笔画</b>；<br />
              ③对角线两端 2 个奇点，小方框挂在对角线上（交点 4 条线为偶点）→ <b>1 笔画</b>；<br />
              ④正方形 0 个奇点算 1 笔，独立折线 1 笔 → <b>2 笔画</b>；<br />
              ⑤"田"字形：四个边中点为奇点 → <b>2 笔画</b>；<br />
              ⑥折线只在外框上留下 2 个奇点（左上角、右边中点）→ <b>1 笔画</b>。<br />
              所以 ①②⑤ 两笔画，③④⑥ 一笔画。<br /><span className="correct">答案：C</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题4 · 笔画分类（去外框 · 一笔画 / 两笔画 · 2025 国考）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 504 371.1" role="img" aria-label="二十五国考笔画分类题干六个图形">
      <g transform="translate(22,22)">
              <g stroke="#1f2937" strokeWidth={1.5} fill="#ffffff">
                <rect x={0} y={0} width={140} height={140} />
                <rect x={160} y={0} width={140} height={140} />
                <rect x={320} y={0} width={140} height={140} />
                <rect x={0} y={170} width={140} height={140} />
                <rect x={160} y={170} width={140} height={140} />
                <rect x={320} y={170} width={140} height={140} />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none" strokeLinecap="round">
                
                <path d="M 25 25 L 115 25 L 115 115 L 25 115 Z" />
                <path d="M 25 25 L 115 70" />
                
                <path d="M 195 35 L 275 30 L 275 115 L 195 120 Z" />
                <path d="M 205 95 L 230 50 L 255 95" />
                
                <path d="M 355 100 L 355 35 L 425 35 L 425 100" />
                <path d="M 355 35 L 425 100" />
                
                <path d="M 30 200 L 110 200 L 110 280 L 30 280 Z" />
                <path d="M 110 200 L 70 240 L 110 280" />
                
                <path d="M 195 200 L 265 200 L 265 240" />
                <path d="M 200 275 L 260 275" />
                
                <path d="M 355 195 L 435 195 L 435 275 L 355 275 Z" />
                <path d="M 355 195 L 435 275 M 435 195 L 355 275" />
              </g>
              <g fontSize={13} fill="#6b7280" textAnchor="middle">
                <text x={70} y={154} fill="#6b7280">①</text><text x={230} y={154} fill="#6b7280">②</text><text x={390} y={154} fill="#6b7280">③</text>
                <text x={70} y={324} fill="#6b7280">④</text><text x={230} y={324} fill="#6b7280">⑤</text><text x={390} y={324} fill="#6b7280">⑥</text>
              </g>
            </g>
      </svg><figcaption>图：题干六个图形（按讲义 p43 原题简化还原，笔画数与原图一致）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 408.9 104" role="img" aria-label="四个选项的文字分组">
      <g transform="translate(8,8)">
              <g fontSize={17} fill="#1f2937">
                <text x={14} y={30} fill="#1f2937">A. ①②⑥，③④⑤</text>
                <text x={250} y={30} fill="#1f2937">B. ①③④，②⑤⑥</text>
                <text x={14} y={70} fill="#1f2937">C. ①③⑤，②④⑥</text>
                <text x={250} y={70} fill="#1f2937">D. ①④⑥，②③⑤</text>
              </g>
              <text x={222} y={30} fontSize={15} fill="#10b981">✔</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（讲义答案：B）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>讲义标注笔画数为 ①1、②2、③1、④1、⑤2、⑥2，<b>用"去外框法"</b>逐图验证：<br />
              ①外框加一条斜线，只有左上角与外框上的交点 2 个奇点 → <b>1 笔画</b>；<br />
              ②平行四边形的"框"完整（0 奇点，1 笔），内部折线是独立的一笔 → <b>2 笔画</b>；<br />
              ③开口外框与斜线连通，端点/交点共 2 个奇点 → <b>1 笔画</b>；<br />
              ④外框与内部折线相连，仅折线两个端点为奇点 → <b>1 笔画</b>；<br />
              ⑤开口折线 1 笔 + 独立横线 1 笔 → <b>2 笔画</b>；<br />
              ⑥外框加两条对角线，四个角都成 3 条线 → 4 个奇点 → <b>2 笔画</b>。<br />
              所以 ①③④ 一笔画，②⑤⑥ 两笔画。（讲义提示：去外框后可优先看剩下的图形，去完没有图案仍是一笔画；没连在一起的外框不能去。）<br /><span className="correct">答案：B</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>4. 元素：种类与数量</BlockTitle>
        <p><b>什么是"元素"？独立的小图案。</b>当一幅图由多个互不相连的小图形拼成时，就是在考元素。</p>
        <PointList>
          <li><b>出题者作图特点：</b>独立（小图形彼此分开，不粘连）。</li>
          <li><b>怎么数种类？</b>颜色不同，算两种；<b>大小不同，算一种</b>（同一形状只是大小不同，仍算一种元素）。</li>
          <li><b>基础考点：</b>元素的数量、元素的种类。</li>
          <li>生活化图形（黑脚印、太极图等）→ 数<b>部分数</b>：连在一起就是一部分；提示：部分数数"黑色"，面数数"白色"。</li>
        </PointList>
        <Callout variant="key">
          <b>元素知识树（讲义原文）：</b><br />
          元素 — 基础考点：①特征—独立—种类、数量；②特征—生活化—部分数。<br />
          元素 — 细化考点：①=2种元素—先运算—后换算（换算公式：图1+图3=两倍图2）；②&gt;2种元素—找相同—先自己—后邻居；无相同—属性。
        </Callout>
      
        <Example>
          <ExampleHeader>📝 例题5 · 元素种类（2025 联考）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 504 361.1" role="img" aria-label="二十五联考元素种类题干六个图形">
      <g transform="translate(22,22)">
              <g stroke="#1f2937" strokeWidth={1.5} fill="#ffffff">
                <rect x={0} y={0} width={140} height={140} />
                <rect x={160} y={0} width={140} height={140} />
                <rect x={320} y={0} width={140} height={140} />
                <rect x={0} y={160} width={140} height={140} />
                <rect x={160} y={160} width={140} height={140} />
                <rect x={320} y={160} width={140} height={140} />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none" strokeLinecap="round">
                
                <circle cx={70} cy={72} r={48} />
                <path d="M 48 48 L 68 52 L 56 66 Z" />
                <path d="M 74 52 L 94 48 L 86 66 Z" />
                <path d="M 48 90 L 68 86 L 56 74 Z" />
                <path d="M 74 86 L 94 90 L 86 74 Z" />
                
                <path d="M 240 72 L 274.0 62.6 L 274.0 81.4 Z" />
                <path d="M 237.1 79.1 L 267.7 96.5 L 254.5 109.7 Z" />
                <path d="M 230 82 L 239.4 116.0 L 220.6 116.0 Z" />
                <path d="M 222.9 79.1 L 205.5 109.7 L 192.3 96.5 Z" />
                <path d="M 220 72 L 186.0 81.4 L 186.0 62.6 Z" />
                <path d="M 222.9 64.9 L 192.3 47.5 L 205.5 34.3 Z" />
                <path d="M 230 62 L 220.6 28.0 L 239.4 28.0 Z" />
                <path d="M 237.1 64.9 L 254.5 34.3 L 267.7 47.5 Z" />
                
                <path d="M 338 52 L 366 52 L 352 28 Z" />
                <path d="M 370 52 L 398 52 L 384 28 Z" />
                <path d="M 334 92 L 360 92 L 347 116 Z" />
                <path d="M 362 92 L 388 92 L 375 116 Z" />
                <path d="M 390 92 L 416 92 L 403 116 Z" />
                
                <ellipse cx={89.8} cy={251.8} rx={26} ry={11} transform="rotate(45 89.8 251.8)" />
                <ellipse cx={50.2} cy={251.8} rx={26} ry={11} transform="rotate(-45 50.2 251.8)" />
                <ellipse cx={50.2} cy={212.2} rx={26} ry={11} transform="rotate(45 50.2 212.2)" />
                <ellipse cx={89.8} cy={212.2} rx={26} ry={11} transform="rotate(-45 89.8 212.2)" />
                <circle cx={70} cy={232} r={8} />
                
                <path d="M 210 222 A 20 20 0 0 1 250 222 Z" />
                <path d="M 205 245 L 258 245 L 248 282 L 215 282 Z" />
                
                <circle cx={390} cy={232} r={46} />
                <path d="M 344 232 C 368 204 412 260 436 232 C 412 204 368 260 344 232 Z" />
              </g>
              <g fontSize={13} fill="#6b7280" textAnchor="middle">
                <text x={70} y={154} fill="#6b7280">①</text><text x={230} y={154} fill="#6b7280">②</text><text x={390} y={154} fill="#6b7280">③</text>
                <text x={70} y={314} fill="#6b7280">④</text><text x={230} y={314} fill="#6b7280">⑤</text><text x={390} y={314} fill="#6b7280">⑥</text>
              </g>
            </g>
      </svg><figcaption>图：题干六个图形（讲义 p57 原题）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 408.9 115" role="img" aria-label="四个选项的文字分组">
      <g transform="translate(8,19)">
              <g fontSize={17} fill="#1f2937">
                <text x={14} y={30} fill="#1f2937">A. ①④⑤，②③⑥</text>
                <text x={250} y={30} fill="#1f2937">B. ①②⑥，③④⑤</text>
                <text x={14} y={70} fill="#1f2937">C. ②③⑤，①④⑥</text>
                <text x={250} y={70} fill="#1f2937">D. ①②⑤，③④⑥</text>
              </g>
              <text x={44.2} y={18} fontSize={15} fill="#10b981">✔</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（讲义答案：A）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>数"元素种类"（讲义标注：①2、②1、③1、④2、⑤2、⑥1）。<br />
              ①＝圆＋三角形，<b>2 种</b>；②＝8 个大小相同的花瓣形，<b>1 种</b>；③＝上下两组三角形（大小相同），<b>1 种</b>；④＝４个相同叶片＋中心小圆，<b>2 种</b>；⑤＝半圆＋梯形，<b>2 种</b>；⑥＝圆与波浪块上下同形，按"大小不同算一种"记为<b>1 种</b>。<br />
              所以 ①④⑤ 有 2 种元素、②③⑥ 只有 1 种元素。<br /><span className="correct">答案：A</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题6 · 相同元素个数（生活化 · 2023 联考）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 504 361.1" role="img" aria-label="二十三联考相同元素个数题干六个生活化图形">
      <g transform="translate(22,22)">
              <g stroke="#1f2937" strokeWidth={1.5} fill="#ffffff">
                <rect x={0} y={0} width={140} height={140} />
                <rect x={160} y={0} width={140} height={140} />
                <rect x={320} y={0} width={140} height={140} />
                <rect x={0} y={160} width={140} height={140} />
                <rect x={160} y={160} width={140} height={140} />
                <rect x={320} y={160} width={140} height={140} />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none" strokeLinecap="round">
                
                <path d="M 35 115 A 40 40 0 0 1 115 115" />
                <path d="M 50 115 A 25 25 0 0 1 100 115" />
                <path d="M 35 115 L 50 115 M 100 115 L 115 115" />
                <path d="M 82 50 q 8 -9 16 0 M 98 50 q 8 -9 16 0" />
                <path d="M 104 66 q 7 -8 14 0 M 118 66 q 7 -8 14 0" />
                <path d="M 66 76 q 7 -8 14 0 M 80 76 q 7 -8 14 0" />
                
                <path d="M 190 95 L 190 62 L 262 62 L 262 72 L 286 72 L 286 95 Z" />
                <circle cx={212} cy={97} r={9} />
                <circle cx={266} cy={97} r={9} />
                
                <path d="M 390 52 L 390 112 M 368 112 L 412 112" />
                <path d="M 350 58 L 430 58" />
                <path d="M 350 58 L 350 80 M 430 58 L 430 80" />
                <path d="M 334 80 Q 350 94 366 80" />
                <path d="M 414 80 Q 430 94 446 80" />
                
                <path d="M 70 205 C 92 205 102 226 92 246 C 84 262 56 262 48 246 C 38 226 48 205 70 205 Z" />
                <path d="M 30 272 Q 42 264 54 272 T 78 272" />
                <path d="M 55 284 Q 67 276 79 284 T 103 284" />
                <path d="M 30 296 Q 42 288 54 296 T 78 296" />
                
                <path d="M 200 238 L 300 238 L 284 262 L 216 262 Z" />
                <path d="M 232 238 L 232 216 L 250 216 L 250 226 L 272 226 L 272 238" />
                <path d="M 198 272 Q 210 264 222 272 T 246 272" />
                <path d="M 248 282 Q 260 274 272 274 T 296 282" />
                <path d="M 198 292 Q 210 284 222 292 T 246 292" />
                
                <path d="M 390 250 L 390 300" />
                <circle cx={390} cy={243} r={5} />
                <path d="M 390 262 C 358 240 336 266 358 288 C 372 300 386 290 390 278 Z" />
                <path d="M 390 262 C 422 240 444 266 422 288 C 408 300 394 290 390 278 Z" />
              </g>
              <g fontSize={13} fill="#6b7280" textAnchor="middle">
                <text x={70} y={154} fill="#6b7280">①</text><text x={230} y={154} fill="#6b7280">②</text><text x={390} y={154} fill="#6b7280">③</text>
                <text x={70} y={314} fill="#6b7280">④</text><text x={230} y={314} fill="#6b7280">⑤</text><text x={390} y={314} fill="#6b7280">⑥</text>
              </g>
            </g>
      </svg><figcaption>图：题干六个生活化图形（讲义 p63 原题还原）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 412.9 104" role="img" aria-label="四个选项的文字分组">
      <g transform="translate(12,8)">
              <g fontSize={17} fill="#1f2937">
                <text x={14} y={30} fill="#1f2937">A. ①②④，③⑤⑥</text>
                <text x={250} y={30} fill="#1f2937">B. ①③⑥，②④⑤</text>
                <text x={14} y={70} fill="#1f2937">C. ①④⑤，②③⑥</text>
                <text x={250} y={70} fill="#1f2937">D. ①⑤⑥，②③④</text>
              </g>
              <text x={10.0} y={51.0} fontSize={15} fill="#10b981">✔</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（讲义答案：C）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>基础考点（种类、数量）都不成立，转<b>细化考法</b>：数"相同元素的个数"（讲义标注：①3、②2、③2、④3、⑤3、⑥2）。<br />
              ①桥上有 3 只相同的小鸟 → 3 个；②卡车有 2 个相同的车轮 → 2 个；③天平有 2 个相同的托盘 → 2 个；④桃形下有 3 条相同的波浪线 → 3 个；⑤船下有 3 条相同的波浪线 → 3 个；⑥蝴蝶左右 2 个相同的翅膀 → 2 个。<br />
              所以 ①④⑤ 都有 3 个相同元素，②③⑥ 都有 2 个相同元素。<br /><span className="correct">答案：C</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>5. 元素的"找相同"：先自己、后邻居</BlockTitle>
        <p>当图形里元素超过 2 种，"数量""种类"都不好用，就换一个思想——<b>找相同</b>。</p>
        <PointList>
          <li><b>&gt;2种元素 → 找相同：先自己，后邻居。</b></li>
          <li><b>"先自己"：</b>每幅图形<b>内部</b>找相同（自身）；<b>"后邻居"：</b>相邻两幅图形<b>之间</b>找相同（邻居）。</li>
          <li><b>无相同 → 属性</b>：如果既没有相同元素、也没有相邻相同，就回到属性（对称性、曲直性）去找规律。</li>
          <li>考到相同元素时，还可以进一步看<b>相同元素的位置关系</b>（相邻还是对角），这就是"细化考法"里的位置考法。</li>
        </PointList>
        <Callout variant="tip">
          <b>数种类的小提醒：</b>颜色不同，优先算两种；大小不同，优先算一种。所以"一大一小两个圆"是 1 种元素，"空心星 + 实心星"是 2 种元素。
        </Callout>
      
        <Example>
          <ExampleHeader>📝 例题7 · 相同元素的位置关系（2024 浙江选调）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 504 371.5" role="img" aria-label="二十四浙江选调相同元素位置关系题干六个图形">
      <g transform="translate(22,22)">
              <defs>
                <g id="L5-pent" stroke="#1f2937" strokeWidth={2} fill="none">
                  <polygon points="0,-12 11.4,-3.7 7.1,9.7 -7.1,9.7 -11.4,-3.7" />
                </g>
                <g id="L5-hex" stroke="#1f2937" strokeWidth={2} fill="none">
                  <polygon points="12,0 6,10.4 -6,10.4 -12,0 -6,-10.4 6,-10.4" />
                </g>
                <g id="L5-circ" stroke="#1f2937" strokeWidth={2} fill="none">
                  <circle cx={0} cy={0} r={11} />
                </g>
                <g id="L5-star5" stroke="#1f2937" strokeWidth={2} fill="none">
                  <polygon points="0,-13 3.2,-4.5 12.4,-4.0 5.2,1.7 7.6,10.5 0,5.5 -7.6,10.5 -5.2,1.7 -12.4,-4.0 -3.2,-4.5" />
                </g>
                <g id="L5-star5f" stroke="#1f2937" strokeWidth={1.5} fill="#1f2937">
                  <polygon points="0,-13 3.2,-4.5 12.4,-4.0 5.2,1.7 7.6,10.5 0,5.5 -7.6,10.5 -5.2,1.7 -12.4,-4.0 -3.2,-4.5" />
                </g>
                <g id="L5-star6" stroke="#1f2937" strokeWidth={2} fill="none">
                  <polygon points="0,-12 10.4,6 -10.4,6" />
                  <polygon points="0,12 10.4,-6 -10.4,-6" />
                </g>
                <g id="L5-sq" stroke="#1f2937" strokeWidth={2} fill="none">
                  <rect x="-11" y="-10" width={22} height={20} />
                </g>
                <g id="L5-tri" stroke="#1f2937" strokeWidth={2} fill="none">
                  <polygon points="0,-12 10.4,8 -10.4,8" />
                </g>
                <g id="L5-arr" stroke="#1f2937" strokeWidth={2} fill="none">
                  <path d="M 12 0 L -12 0 M -12 0 L -3 -5 M -12 0 L -3 5" />
                </g>
              </defs>
              <g stroke="#1f2937" strokeWidth={1.5} fill="#ffffff">
                <rect x={0} y={0} width={140} height={140} />
                <rect x={160} y={0} width={140} height={140} />
                <rect x={320} y={0} width={140} height={140} />
                <rect x={0} y={170} width={140} height={140} />
                <rect x={160} y={170} width={140} height={140} />
                <rect x={320} y={170} width={140} height={140} />
              </g>
              
              <use href="#L5-pent" x={30} y={45} /><use href="#L5-hex" x={70} y={45} /><use href="#L5-star6" x={110} y={45} />
              <use href="#L5-star6" x={30} y={95} /><use href="#L5-sq" x={70} y={95} /><use href="#L5-pent" x={110} y={95} />
              
              <use href="#L5-pent" x={190} y={45} /><use href="#L5-tri" x={230} y={45} /><use href="#L5-circ" x={270} y={45} />
              <use href="#L5-star5" x={190} y={95} /><use href="#L5-tri" x={230} y={95} /><use href="#L5-star6" x={270} y={95} />
              
              <use href="#L5-hex" x={350} y={45} /><use href="#L5-circ" x={390} y={45} /><use href="#L5-star5" x={430} y={45} />
              <use href="#L5-star5" x={350} y={95} /><use href="#L5-hex" x={390} y={95} /><use href="#L5-arr" x={430} y={95} />
              
              <use href="#L5-hex" x={30} y={215} /><use href="#L5-star5" x={70} y={215} /><use href="#L5-star5f" x={110} y={215} />
              <use href="#L5-sq" x={30} y={265} /><use href="#L5-arr" x={70} y={265} /><use href="#L5-hex" x={110} y={265} />
              
              <use href="#L5-star5" x={190} y={215} /><use href="#L5-circ" x={230} y={215} /><use href="#L5-circ" x={270} y={215} />
              <use href="#L5-pent" x={190} y={265} /><use href="#L5-tri" x={230} y={265} /><use href="#L5-arr" x={270} y={265} />
              
              <use href="#L5-circ" x={350} y={215} /><use href="#L5-star5" x={390} y={215} /><use href="#L5-pent" x={430} y={215} />
              <use href="#L5-arr" x={350} y={265} /><use href="#L5-sq" x={390} y={265} /><use href="#L5-sq" x={430} y={265} />
              
              <g stroke="#f59e0b" strokeWidth={2.5} fill="none">
                <circle cx={30} cy={45} r={16} /><circle cx={110} cy={95} r={16} />
                <circle cx={230} cy={45} r={16} /><circle cx={230} cy={95} r={16} />
                <circle cx={430} cy={45} r={16} /><circle cx={350} cy={95} r={16} />
                <circle cx={30} cy={215} r={16} /><circle cx={110} cy={265} r={16} />
                <circle cx={230} cy={215} r={16} /><circle cx={270} cy={215} r={16} />
                <circle cx={390} cy={265} r={17} /><circle cx={430} cy={265} r={17} />
              </g>
              <g fontSize={13} fill="#6b7280" textAnchor="middle">
                <text x={70} y={158} fill="#6b7280">①</text><text x={230} y={158} fill="#6b7280">②</text><text x={390} y={158} fill="#6b7280">③</text>
                <text x={70.0} y={324.4} fill="#6b7280">④</text><text x={230.0} y={324.4} fill="#6b7280">⑤</text><text x={390.0} y={324.4} fill="#6b7280">⑥</text>
              </g>
            </g>
      </svg><figcaption>图：题干六个图形（讲义 p68 原题，橙色圈为老师标注的相同元素）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 412.9 104" role="img" aria-label="四个选项的文字分组">
      <g transform="translate(12,8)">
              <g fontSize={17} fill="#1f2937">
                <text x={14} y={30} fill="#1f2937">A. ①②③，④⑤⑥</text>
                <text x={250} y={30} fill="#1f2937">B. ①③⑤，②④⑥</text>
                <text x={14} y={70} fill="#1f2937">C. ①③④，②⑤⑥</text>
                <text x={250} y={70} fill="#1f2937">D. ①②⑤，③④⑥</text>
              </g>
              <text x={10.0} y={51.0} fontSize={15} fill="#10b981">✔</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（讲义答案：C）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>每幅图里都有"两个完全相同的元素"（老师用橙圈标出），看它们的<b>位置关系</b>：<br />
              ①两个五边形分别在左上、右下 → <b>对角</b>；<br />
              ②两个三角形在同一列的上下两行 → <b>相邻</b>；<br />
              ③两个五角星分别在右上、左下 → <b>对角</b>；<br />
              ④两个六边形分别在左上、右下 → <b>对角</b>（图中星形一空一实，按"颜色不同算两种"不算相同元素）；<br />
              ⑤两个圆在同一行左右紧挨 → <b>相邻</b>；<br />
              ⑥两个方框在同一行左右紧挨 → <b>相邻</b>。<br />
              所以 ①③④ 的相同元素位置为对角，②⑤⑥ 为相邻。<br /><span className="correct">答案：C</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>6. 两种元素：先运算，后换算</BlockTitle>
        <p>如果每幅图都只有 <b>2 种元素</b>，那就走"细化考法"的两条路：<b>先运算</b>，<b>后换算</b>。</p>
        <PointList>
          <li><b>①运算：</b>两种元素个数之间做<b>相减、倍数、相加</b>（如"圆－方＝1"或"圆＋方＝定值"）。</li>
          <li><b>②换算：</b>把一个元素<b>转换成另外一个</b>元素，算出"等价个数"。</li>
          <li><b>换算公式（背）：图1＋图3＝2倍图2。</b>（也可以设"较大的数"，先给一种元素定个大数，再解出另一种元素等于几个。）</li>
          <li>换算出"等价个数"后，数列往往是 1、2、3、4、5、6 这样的等差，问号处取 6。</li>
        </PointList>
        <Callout variant="formula"><span className="formula">换算公式：图1 ＋ 图3 ＝ 2 × 图2</span></Callout>
      
        <Example>
          <ExampleHeader>📝 例题8 · 元素运算（相减 · 2023 国考）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>把下面六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 504 391.5" role="img" aria-label="二十三国考元素运算题干六个九宫格">
      <g transform="translate(22,12)">
              <defs>
                <g id="L5-cellc" stroke="#1f2937" strokeWidth={2} fill="none">
                  <circle cx={0} cy={0} r={14} />
                </g>
                <g id="L5-cells" stroke="#1f2937" strokeWidth={2} fill="none">
                  <rect x="-12" y="-12" width={24} height={24} />
                </g>
              </defs>
              <g stroke="#1f2937" strokeWidth={1.5} fill="#ffffff">
                
                <g>
                  <rect x={0} y={10} width={44} height={44} /><rect x={52} y={10} width={44} height={44} /><rect x={104} y={10} width={44} height={44} />
                  <rect x={0} y={62} width={44} height={44} /><rect x={52} y={62} width={44} height={44} /><rect x={104} y={62} width={44} height={44} />
                  <rect x={0} y={114} width={44} height={44} /><rect x={52} y={114} width={44} height={44} /><rect x={104} y={114} width={44} height={44} />
                </g>
                <g>
                  <rect x={156} y={10} width={44} height={44} /><rect x={208} y={10} width={44} height={44} /><rect x={260} y={10} width={44} height={44} />
                  <rect x={156} y={62} width={44} height={44} /><rect x={208} y={62} width={44} height={44} /><rect x={260} y={62} width={44} height={44} />
                  <rect x={156} y={114} width={44} height={44} /><rect x={208} y={114} width={44} height={44} /><rect x={260} y={114} width={44} height={44} />
                </g>
                <g>
                  <rect x={312} y={10} width={44} height={44} /><rect x={364} y={10} width={44} height={44} /><rect x={416} y={10} width={44} height={44} />
                  <rect x={312} y={62} width={44} height={44} /><rect x={364} y={62} width={44} height={44} /><rect x={416} y={62} width={44} height={44} />
                  <rect x={312} y={114} width={44} height={44} /><rect x={364} y={114} width={44} height={44} /><rect x={416} y={114} width={44} height={44} />
                </g>
                <g>
                  <rect x={0} y={200} width={44} height={44} /><rect x={52} y={200} width={44} height={44} /><rect x={104} y={200} width={44} height={44} />
                  <rect x={0} y={252} width={44} height={44} /><rect x={52} y={252} width={44} height={44} /><rect x={104} y={252} width={44} height={44} />
                  <rect x={0} y={304} width={44} height={44} /><rect x={52} y={304} width={44} height={44} /><rect x={104} y={304} width={44} height={44} />
                </g>
                <g>
                  <rect x={156} y={200} width={44} height={44} /><rect x={208} y={200} width={44} height={44} /><rect x={260} y={200} width={44} height={44} />
                  <rect x={156} y={252} width={44} height={44} /><rect x={208} y={252} width={44} height={44} /><rect x={260} y={252} width={44} height={44} />
                  <rect x={156} y={304} width={44} height={44} /><rect x={208} y={304} width={44} height={44} /><rect x={260} y={304} width={44} height={44} />
                </g>
                <g>
                  <rect x={312} y={200} width={44} height={44} /><rect x={364} y={200} width={44} height={44} /><rect x={416} y={200} width={44} height={44} />
                  <rect x={312} y={252} width={44} height={44} /><rect x={364} y={252} width={44} height={44} /><rect x={416} y={252} width={44} height={44} />
                  <rect x={312} y={304} width={44} height={44} /><rect x={364} y={304} width={44} height={44} /><rect x={416} y={304} width={44} height={44} />
                </g>
              </g>
              
              <use href="#L5-cellc" x={22} y={32} /><use href="#L5-cellc" x={74} y={32} /><use href="#L5-cellc" x={126} y={32} />
              <use href="#L5-cellc" x={22} y={84} /><use href="#L5-cells" x={74} y={84} /><use href="#L5-cells" x={126} y={84} />
              <use href="#L5-cellc" x={22} y={136} /><use href="#L5-cells" x={74} y={136} /><use href="#L5-cells" x={126} y={136} />
              
              <use href="#L5-cells" x={230} y={84} />
              
              <use href="#L5-cellc" x={334} y={32} /><use href="#L5-cells" x={438} y={32} />
              <use href="#L5-cells" x={334} y={136} />
              
              <use href="#L5-cellc" x={22} y={222} /><use href="#L5-cellc" x={74} y={222} />
              <use href="#L5-cells" x={74} y={274} /><use href="#L5-cells" x={126} y={274} />
              <use href="#L5-cellc" x={74} y={326} />
              
              <use href="#L5-cells" x={178} y={222} /><use href="#L5-cellc" x={230} y={222} /><use href="#L5-cellc" x={282} y={222} />
              <use href="#L5-cells" x={178} y={274} /><use href="#L5-cells" x={230} y={274} />
              <use href="#L5-cellc" x={230} y={326} /><use href="#L5-cellc" x={282} y={326} />
              
              <use href="#L5-cells" x={334} y={222} /><use href="#L5-cellc" x={386} y={222} />
              <use href="#L5-cells" x={334} y={274} />
              <use href="#L5-cells" x={334} y={326} /><use href="#L5-cellc" x={438} y={326} />
              <g fontSize={13} fill="#6b7280" textAnchor="middle">
                <text x={74} y={180} fill="#6b7280">①</text><text x={230} y={180} fill="#6b7280">②</text><text x={386} y={180} fill="#6b7280">③</text>
                <text x={74.0} y={354.4} fill="#6b7280">④</text><text x={230.0} y={354.4} fill="#6b7280">⑤</text><text x={386.0} y={354.4} fill="#6b7280">⑥</text>
              </g>
            </g>
      </svg><figcaption>图：题干六个"九宫格"（讲义 p84 原题：格内为圆或方框）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 412.9 104" role="img" aria-label="四个选项的文字分组">
      <g transform="translate(12,8)">
              <g fontSize={17} fill="#1f2937">
                <text x={14} y={30} fill="#1f2937">A. ①②⑤，③④⑥</text>
                <text x={250} y={30} fill="#1f2937">B. ①②④，③⑤⑥</text>
                <text x={14} y={70} fill="#1f2937">C. ①④⑤，②③⑥</text>
                <text x={250} y={70} fill="#1f2937">D. ①③⑤，②④⑥</text>
              </g>
              <text x={10.0} y={51.0} fontSize={15} fill="#10b981">✔</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（讲义答案：C）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>只有 2 种元素（圆、方框）→ 先<b>运算</b>（两图组常考相减、倍数、相加）。数一数每幅图里两种元素各几个（讲义标注：圆形/正方形）——①5 圆 4 方、②0 圆 1 方、③1 圆 2 方、④3 圆 2 方、⑤4 圆 3 方、⑥2 圆 3 方。<br />
              ①④⑤：圆比方框多 1 个；②③⑥：方框比圆多 1 个（两数相减为 ±1）。<br /><span className="correct">答案：C</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题9 · 元素换算（巩固练习 · 配套 2023 四川真题）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 494 142" role="img" aria-label="元素换算巩固练习题干五个图形与问号">
      <g transform="translate(22,14)">
              <defs>
                <g id="L5-triS" stroke="#1f2937" strokeWidth={2} fill="none">
                  <polygon points="0,-11 9.5,7 -9.5,7" />
                </g>
                <g id="L5-cirS" stroke="#1f2937" strokeWidth={2} fill="none">
                  <circle cx={0} cy={0} r={9} />
                </g>
              </defs>
              <g stroke="#1f2937" strokeWidth={1.5} fill="#ffffff">
                <rect x={0} y={8} width={70} height={98} />
                <rect x={76} y={8} width={70} height={98} />
                <rect x={152} y={8} width={70} height={98} />
                <rect x={228} y={8} width={70} height={98} />
                <rect x={304} y={8} width={70} height={98} />
                <rect x={380} y={8} width={70} height={98} />
              </g>
              
              <use href="#L5-triS" x={22} y={42} /><use href="#L5-triS" x={48} y={42} />
              <use href="#L5-triS" x={22} y={78} /><use href="#L5-cirS" x={48} y={78} />
              
              <use href="#L5-cirS" x={98} y={42} /><use href="#L5-triS" x={124} y={42} />
              <use href="#L5-cirS" x={98} y={78} />
              
              <use href="#L5-triS" x={174} y={42} /><use href="#L5-triS" x={200} y={42} />
              <use href="#L5-cirS" x={174} y={78} /><use href="#L5-cirS" x={200} y={78} />
              
              <use href="#L5-triS" x={250} y={30} /><use href="#L5-cirS" x={276} y={30} />
              <use href="#L5-triS" x={250} y={60} /><use href="#L5-cirS" x={276} y={60} />
              <use href="#L5-triS" x={250} y={90} />
              
              <use href="#L5-cirS" x={326} y={42} /><use href="#L5-triS" x={352} y={42} />
              <use href="#L5-cirS" x={326} y={78} /><use href="#L5-cirS" x={352} y={78} />
              <text x={415} y={70} fontSize={30} fill="#1f2937" textAnchor="middle">?</text>
              <g fontSize={13} fill="#6b7280" textAnchor="middle">
                <text x={415} y={100} fill="#6b7280">问号</text>
              </g>
            </g>
      </svg><figcaption>图：题干（讲义【巩固练习】；△＝三角、○＝圆）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 342 167.4" role="img" aria-label="四个选项的三角形与圆排布">
      <g transform="translate(22,18)">
              <g stroke="#1f2937" strokeWidth={1.5} fill="#ffffff">
                <rect x={0} y={4} width={70} height={104} />
                <rect x={76} y={4} width={70} height={104} />
                <rect x={152} y={4} width={70} height={104} />
                <rect x={228} y={4} width={70} height={104} />
              </g>
              
              <use href="#L5-cirS" x={22} y={28} /><use href="#L5-cirS" x={48} y={28} />
              <use href="#L5-triS" x={22} y={58} /><use href="#L5-triS" x={48} y={58} />
              <use href="#L5-cirS" x={22} y={88} /><use href="#L5-cirS" x={48} y={88} />
              
              <use href="#L5-cirS" x={98} y={28} /><use href="#L5-triS" x={124} y={28} />
              <use href="#L5-cirS" x={98} y={58} /><use href="#L5-triS" x={124} y={58} />
              <use href="#L5-cirS" x={98} y={88} />
              
              <use href="#L5-triS" x={174} y={28} /><use href="#L5-triS" x={200} y={28} />
              <use href="#L5-triS" x={174} y={58} /><use href="#L5-cirS" x={200} y={58} />
              <use href="#L5-triS" x={174} y={88} /><use href="#L5-triS" x={200} y={88} />
              
              <use href="#L5-cirS" x={250} y={43} /><use href="#L5-cirS" x={276} y={43} />
              <use href="#L5-cirS" x={250} y={73} /><use href="#L5-cirS" x={276} y={73} />
              <g fontSize={14} fill="#6b7280" textAnchor="middle">
                <text x={35.0} y={124.4} fill="#6b7280">A</text><text x={111.0} y={124.4} fill="#6b7280">B</text><text x={187.0} y={124.4} fill="#6b7280">C</text><text x={263.0} y={124.4} fill="#6b7280">D</text>
              </g>
              <text x={122.0} y={124.1} fontSize={14} fill="#10b981">✔</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（讲义答案：B）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>只有 2 种元素（△、○）→ 先运算、后<b>换算</b>。<br />
              按换算公式：图1＋图3＝2 倍图2。图1＝3△＋1○，图3＝2△＋2○，图2＝1△＋2○，代入得 (3△＋1○)＋(2△＋2○)＝2×(1△＋2○)，即 5△＋3○＝2△＋4○，移项得 <b>1 个○＝3 个△</b>。<br />
              再算"等价成几个△"：图1＝3＋3＝6，图2＝1＋6＝7，图3＝2＋6＝8，图4＝3＋6＝9，图5＝1＋9＝10 → 问号处应为 <b>11</b>。<br />
              四个选项：A＝2△＋4○＝14；<b>B＝2△＋3○＝2＋9＝11 ✔</b>；C＝5△＋1○＝8；D＝4○＝12。<br /><span className="correct">答案：B</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>7. 部分数与"黑白块"分堆</BlockTitle>
        <p>生活化图形、黑白点图形，数量规律里的"常规项"（面、线、点、笔画）常常都不管用，这时考的是<b>部分数</b>。</p>
        <PointList>
          <li><b>部分数概念：连在一起就是一部分。</b>命题者作图特点：生活化。</li>
          <li><b>怎么数部分数？</b><b>边与边相连算一部分，角与角相连（只顶点相接）算两部分。</b></li>
          <li><b>为什么数部分数？</b>生活化图形（黑脚印、太极图……）；提示：部分数数"黑色"，面数数"白色"。</li>
          <li><b>黑白块：分堆且堆数较少 → 部分数。</b>出题者的"小心思"：先是"随意的分布"，再加"加密"（把点堆成几个块），于是本题从数个数变成数部分数。</li>
          <li><b>=2 堆 → 每堆个数的变化</b>（黑色一堆、白色一堆，看两堆各自的数量变化）；<b>&gt;2 堆 → 黑色部分数、白色部分数、黑色与白色的运算</b>（相加、相减、倍数）。</li>
          <li><b>部分数没有规律，就考虑黑球个数</b>（黑球个数往往是"最后一道保险"）。</li>
        </PointList>
        <Callout variant="key">
          <b>理论速记（部分数·黑白块）：</b><br />
          ① 命题者作图特点：分堆且堆数较少；<br />
          ② 怎么数部分数：边与边相连算一部分，角与角相连算两部分；<br />
          ③ 考点：=2 堆 → 每堆个数的变化；&gt;2 堆 → 黑色部分数、白色部分数、黑色与白色的运算；<br />
          ④ 部分数没有规律，考虑黑球个数。
        </Callout>
        <Callout variant="tip">
          <b>难度演进（黑白块"小心思"）：</b>24 国考【2 堆黑色】→ 25 四川【2 堆白色】→ 25 山东事业【上下 2 堆】→ 25 湖北选调【2 堆白色＋2 堆黑色】。也就是"堆"越来越多、黑白色都要数。
        </Callout>
      
        <Example>
          <ExampleHeader>📝 例题10 · 部分数（生活化图形 · 2024 广东事业单位）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>把下列图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 504 361.1" role="img" aria-label="二十四广东事业单位部分数题干六个生活化图形">
      <g transform="translate(22,22)">
              <g stroke="#1f2937" strokeWidth={1.5} fill="#ffffff">
                <rect x={0} y={0} width={140} height={140} />
                <rect x={160} y={0} width={140} height={140} />
                <rect x={320} y={0} width={140} height={140} />
                <rect x={0} y={160} width={140} height={140} />
                <rect x={160} y={160} width={140} height={140} />
                <rect x={320} y={160} width={140} height={140} />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none" strokeLinecap="round">
                
                <path d="M 35 35 L 105 35 L 105 92 L 35 92 Z" />
                <path d="M 45 92 L 42 118 M 95 92 L 98 118 M 40 118 L 100 118" />
                <path d="M 62 52 L 88 72 L 62 92 Z" />
                
                <circle cx={75} cy={58} r={34} />
                <path d="M 99 82 L 118 101" />
                <path d="M 56 84 L 66 48 L 76 84 M 60 70 L 72 70" />
                <path d="M 90 84 L 90 52 M 90 52 L 84 62 M 90 52 L 96 62" />
                
                <circle cx={76} cy={70} r={34} />
                <path d="M 76 70 L 76 36 M 76 70 L 106 88" />
                <path d="M 34 34 L 34 106" />
                
                <circle cx={70} cy={230} r={34} />
                <path d="M 80 204 Q 94 230 80 256" />
                
                <path d="M 58 200 C 38 216 42 258 72 258 C 102 258 106 216 86 200 Z" />
                <path d="M 62 196 Q 72 184 82 196" />
                <path d="M 64 220 L 72 234 M 80 220 L 72 234 M 72 234 L 72 246 M 64 230 L 80 230 M 64 239 L 80 239" />
                
                <circle cx={390} cy={230} r={38} />
                <circle cx={390} cy={230} r={27} />
                <path d="M 398 206 Q 410 230 398 254" />
              </g>
              <g fontSize={13} fill="#6b7280" textAnchor="middle">
                <text x={70} y={154} fill="#6b7280">①</text><text x={230} y={154} fill="#6b7280">②</text><text x={390} y={154} fill="#6b7280">③</text>
                <text x={70} y={314} fill="#6b7280">④</text><text x={230} y={314} fill="#6b7280">⑤</text><text x={390} y={314} fill="#6b7280">⑥</text>
              </g>
            </g>
      </svg><figcaption>图：题干六个图形（讲义 p97 原题还原：投影架、放大镜、饼图、圆与弧、钱袋、同心圆）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 406.2 102" role="img" aria-label="四个选项的文字分组">
      <g transform="translate(12,7)">
              <g fontSize={16} fill="#1f2937">
                <text x={14} y={30} fill="#1f2937">A. ①②③，④⑤⑥</text>
                <text x={250} y={30} fill="#1f2937">B. ①③⑤，②④⑥</text>
                <text x={14} y={70} fill="#1f2937">C. ①④⑥，②③⑤</text>
                <text x={250} y={70} fill="#1f2937">D. ①③④，②⑤⑥</text>
              </g>
              <text x={10.0} y={51.0} fontSize={15} fill="#10b981">✔</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（讲义答案：D）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>数<b>部分数</b>（连在一起就是一部分，只顶点相接算两部分），讲义标注部分数 ①2、②3、③2、④2、⑤3、⑥3。<br />
              ①投影架：外框与支架相连算 1 部分，内部三角形独立算 1 部分 → <b>2 部分</b>；<br />
              ②放大镜：镜框与手柄相连算 1 部分，镜内"A"与"↑"各自独立 → <b>3 部分</b>；<br />
              ③饼图本身就连通算 1 部分，旁边独立竖线 1 部分 → <b>2 部分</b>；<br />
              ④圆 1 部分，圆内弧线与圆分开 → <b>2 部分</b>；<br />
              ⑤钱袋袋身 1 部分，绳结、"¥"各 1 部分 → <b>3 部分</b>；<br />
              ⑥外圆、内圆（不相接）各 1 部分，内部弧线 1 部分 → <b>3 部分</b>。<br />
              所以 ①③④ 都是 2 部分，②⑤⑥ 都是 3 部分。<br /><span className="correct">答案：D</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>8. 直角：个数、混淆与易错点</BlockTitle>
        <p>数量规律最后一个高频考点是<b>直角</b>——它长得最"规矩"，也最容易被数错。</p>
        <PointList>
          <li><b>出题者作图：直角三角形、十字架、矩形（外框）。</b>看到这三种东西，先想直角个数。</li>
          <li><b>基础考点：直角个数。</b>出题形式：全部题型均可（分类、九宫格、顺推都考）。</li>
          <li><b>"三角形＋十字架"混淆：</b>同样是"十字架 + 田"这种图形，笔画题数的是奇点，直角题数的是直角，别数错对象。</li>
          <li><b>"多边形外框"混淆：</b>多边形外框里可以考 ①对称轴 ②曲线关系（相交线、数量）③数量关系（直角）④数量关系（线）——必须先把"数什么"认准。</li>
        </PointList>
        <Callout variant="key">
          <b>直角易错点：</b>①<b>白色框 → 数外直角</b>（图形外轮廓上朝外的直角也要数）；②<b>黑色框（黑块） → 不数外直角</b>（只数黑块内部形成的直角）。<br />
          <b>理论速记：【直角】</b>①考点：考查直角为主；②命题者作图特点：直角三角形，十字架，矩形（外框）；易错提示：外直角别忘数记！
        </Callout>
      
        <Example>
          <ExampleHeader>📝 例题11 · 直角个数（"十字架"与"田"混淆 · 讲义 p146 对比例题）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 425.5 143.4" role="img" aria-label="直角个数规律题干五个图形">
      <g transform="translate(22,14)">
              <g stroke="#1f2937" strokeWidth={1.5} fill="#ffffff">
                <rect x={0} y={8} width={70} height={90} />
                <rect x={76} y={8} width={70} height={90} />
                <rect x={152} y={8} width={70} height={90} />
                <rect x={228} y={8} width={70} height={90} />
                <rect x={304} y={8} width={70} height={90} />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none" strokeLinecap="round">
                
                <path d="M 15 25 L 15 70 L 55 70 Z" />
                
                <path d="M 111 20 L 91 75 L 131 75 Z" />
                <path d="M 111 20 L 111 75" />
                
                <path d="M 167 20 L 207 20 L 167 75 Z" />
                <path d="M 167 46 L 187 46" />
                
                <path d="M 273 18 L 273 88 M 238 53 L 308 53" />
              </g>
              <text x={374} y={62} fontSize={30} fill="#1f2937" textAnchor="middle">?</text>
              
              <g stroke="#f59e0b" strokeWidth={3} fill="none" strokeLinecap="square">
                <path d="M 15 58 L 27 58 L 27 70" />
                <path d="M 111 63 L 99 63 L 99 75" /><path d="M 111 63 L 123 63 L 123 75" />
                <path d="M 179 20 L 179 32 L 167 32" />
                <path d="M 167 34 L 179 34 L 179 46" /><path d="M 167 58 L 179 58 L 179 46" />
                <path d="M 273 41 L 265 41 L 265 53" /><path d="M 273 41 L 281 41 L 281 53" />
                <path d="M 273 65 L 265 65 L 265 53" /><path d="M 273 65 L 281 65 L 281 53" />
              </g>
              <g fontSize={13} fill="#6b7280" textAnchor="middle">
                <text x={35.0} y={104.4} fill="#6b7280">1 个直角</text><text x={111.0} y={104.4} fill="#6b7280">2 个</text><text x={187.0} y={104.4} fill="#6b7280">3 个</text><text x={263.0} y={104.4} fill="#6b7280">4 个</text>
              </g>
            </g>
      </svg><figcaption>图：题干（讲义 p146 原图还原，橙色为直角标记）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 342 147.4" role="img" aria-label="四个选项的直角个数">
      <g transform="translate(22,18)">
              <g stroke="#1f2937" strokeWidth={1.5} fill="#ffffff">
                <rect x={0} y={4} width={70} height={94} />
                <rect x={76} y={4} width={70} height={94} />
                <rect x={152} y={4} width={70} height={94} />
                <rect x={228} y={4} width={70} height={94} />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none" strokeLinecap="round">
                
                <path d="M 15 20 L 55 20 L 55 74 L 15 74 Z" />
                <path d="M 15 47 L 55 47" />
                
                <path d="M 111 18 L 91 74 L 131 74 Z" />
                <path d="M 111 18 L 111 84" />
                
                <path d="M 167 18 L 207 18 L 167 74 Z" />
                <path d="M 167 36 L 187 36 L 187 54 L 167 54 Z" />
                
                <path d="M 248 18 L 248 74" />
                <path d="M 248 32 L 288 32 M 248 49 L 280 49 M 248 74 L 288 74" />
              </g>
              <g stroke="#f59e0b" strokeWidth={3} fill="none" strokeLinecap="square">
                
                <path d="M 27 20 L 27 32 L 15 32" />
                <path d="M 43 20 L 43 32 L 55 32" />
                <path d="M 27 74 L 27 62 L 15 62" />
                <path d="M 43 74 L 43 62 L 55 62" />
                <path d="M 15 35 L 27 35 L 27 47" />
                <path d="M 15 59 L 27 59 L 27 47" />
                <path d="M 55 35 L 43 35 L 43 47" />
                <path d="M 55 59 L 43 59 L 43 47" />
                
                <path d="M 111 62 L 99 62 L 99 74" />
                <path d="M 111 62 L 123 62 L 123 74" />
                <path d="M 111 82 L 103 82 L 103 74" />
                <path d="M 111 82 L 119 82 L 119 74" />
                
                <path d="M 179 18 L 179 30 L 167 30" />
                <path d="M 167 24 L 179 24 L 179 36" />
                <path d="M 167 48 L 179 48 L 179 36" />
                <path d="M 167 42 L 179 42 L 179 54" />
                <path d="M 167 66 L 179 66 L 179 54" />
                <path d="M 175 36 L 175 48 L 187 48" />
                <path d="M 175 54 L 175 42 L 187 42" />
                
                <path d="M 248 20 L 260 20 L 260 32" />
                <path d="M 248 44 L 260 44 L 260 32" />
                <path d="M 248 37 L 260 37 L 260 49" />
                <path d="M 248 61 L 260 61 L 260 49" />
                <path d="M 248 62 L 260 62 L 260 74" />
              </g>
              <g fontSize={15} fill="#6b7280" textAnchor="middle">
                <text x={35.0} y={104.4} fill="#6b7280">A</text><text x={111.0} y={104.4} fill="#6b7280">B</text><text x={187.0} y={104.4} fill="#6b7280">C</text><text x={263.0} y={104.4} fill="#6b7280">D</text>
              </g>
              <text x={263.0} y={78.0} fontSize={15} fill="#10b981">✔</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（讲义答案：D，橙色为直角标记）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>数<b>直角个数</b>。题干依次为：①直角三角形 1 个直角；②三角形内竖线垂直底边，交点是 2 个直角；③直角三角形内水平线交于左直角边，共 3 个直角（左上角 1 + 交点 2）；④十字架 4 个直角 → 直角数 <b>1、2、3、4</b> 递增，问号处应为 5 个直角。<br />
              对比选项：A 矩形加中线共 8 个直角；B 竖线与底边十字相交共 4 个直角；C 直角三角形加内部小矩形共 7 个直角；<b>D 竖线顶端出头（1 个）＋中横线十字相交（2 个）＋底端（1 个）×2 组，共 5 个直角 ✔</b>。<br />
              这就是讲义强调的"'十字架'与'田'混淆"：同一个十字架图形，笔画题数奇点、直角题数直角。<br /><span className="correct">答案：D</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题12 · 直角个数递增（2025 四川）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给四个选项中，选择最合适的一个填入问号处，使之呈现一定规律性：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 425.5 153.4" role="img" aria-label="二十五四川直角个数题干五个图形与问号">
      <g transform="translate(22,14)">
              <g stroke="#1f2937" strokeWidth={1.5} fill="#ffffff">
                <rect x={0} y={8} width={70} height={98} />
                <rect x={76} y={8} width={70} height={98} />
                <rect x={152} y={8} width={70} height={98} />
                <rect x={228} y={8} width={70} height={98} />
                <rect x={304} y={8} width={70} height={98} />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none" strokeLinecap="round">
                
                <path d="M 15 22 L 15 70 L 58 70 Z" />
                <path d="M 15 70 A 21 21 0 0 1 57 70" />
                
                <circle cx={111} cy={52} r={24} />
                <path d="M 87 52 L 135 52 M 87 52 L 87 36 M 135 52 L 135 36" />
                
                <path d="M 167 20 L 167 70 L 197 70 L 197 48 L 212 48" />
                <path d="M 167 70 A 15 15 0 0 0 197 70" />
                
                <path d="M 243 22 L 283 22 L 283 62 L 243 62 Z" />
                <circle cx={263} cy={42} r={20} />
                <path d="M 250 26 L 276 58 M 254 24 L 280 56 M 246 30 L 272 62" />
                
                <path d="M 319 22 L 359 22 L 359 70 Z" />
                <path d="M 341 47 L 359 47" />
                <path d="M 339 44 L 339 70" />
              </g>
              <text x={374} y={60} fontSize={30} fill="#1f2937" textAnchor="middle">?</text>
              <g stroke="#f59e0b" strokeWidth={3} fill="none" strokeLinecap="square">
                <path d="M 15 58 L 27 58 L 27 70" />
                <path d="M 87 40 L 99 40 L 99 52" />
                <path d="M 135 40 L 123 40 L 123 52" />
                <path d="M 167 58 L 179 58 L 179 70" />
                <path d="M 197 58 L 185 58 L 185 70" />
                <path d="M 197 60 L 209 60 L 209 48" />
                <path d="M 243 34 L 255 34 L 255 22" />
                <path d="M 283 34 L 271 34 L 271 22" />
                <path d="M 243 50 L 255 50 L 255 62" />
                <path d="M 283 50 L 271 50 L 271 62" />
                <path d="M 359 34 L 347 34 L 347 22" />
                <path d="M 359 35 L 347 35 L 347 47" />
                <path d="M 359 59 L 347 59 L 347 47" />
                <path d="M 339 58 L 327 58 L 327 70" />
                <path d="M 339 58 L 351 58 L 351 70" />
              </g>
              <g fontSize={13} fill="#6b7280" textAnchor="middle">
                <text x={35.0} y={114.4} fill="#6b7280">1</text><text x={111.0} y={114.4} fill="#6b7280">2</text><text x={187.0} y={114.4} fill="#6b7280">3</text><text x={263.0} y={114.4} fill="#6b7280">4</text><text x={339.0} y={114.4} fill="#6b7280">5</text>
              </g>
            </g>
      </svg><figcaption>图：题干五个图形（讲义 p151 原图还原，橙色为直角标记）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 342 157.4" role="img" aria-label="四个选项的直角个数">
      <g transform="translate(22,18)">
              <g stroke="#1f2937" strokeWidth={1.5} fill="#ffffff">
                <rect x={0} y={4} width={70} height={104} />
                <rect x={76} y={4} width={70} height={104} />
                <rect x={152} y={4} width={70} height={104} />
                <rect x={228} y={4} width={70} height={104} />
              </g>
              <g stroke="#1f2937" strokeWidth={2} fill="none" strokeLinecap="round">
                
                <path d="M 15 20 L 55 20 L 55 64 L 15 64 Z" />
                <circle cx={35} cy={42} r={21} />
                <path d="M 22 24 L 48 60 M 28 22 L 52 56" />
                
                <path d="M 91 20 L 131 20 L 131 64 L 91 64 Z" />
                <path d="M 111 26 L 128 42 L 111 58 L 94 42 Z" />
                <path d="M 91 42 L 111 42" />
                
                <path d="M 182 20 L 182 70" />
                <path d="M 162 45 L 182 45 M 162 45 L 172 39 M 162 45 L 172 51" />
                <path d="M 182 27 A 18 18 0 0 1 182 63" />
                
                <circle cx={263} cy={42} r={24} />
                <path d="M 263 18 L 287 42 L 263 66 L 239 42 Z" />
              </g>
              <g stroke="#f59e0b" strokeWidth={3} fill="none" strokeLinecap="square">
                
                <path d="M 27 20 L 27 32 L 15 32" />
                <path d="M 43 20 L 43 32 L 55 32" />
                <path d="M 27 64 L 27 52 L 15 52" />
                <path d="M 43 64 L 43 52 L 55 52" />
                
                <path d="M 103 20 L 103 32 L 91 32" />
                <path d="M 119 20 L 119 32 L 131 32" />
                <path d="M 103 64 L 103 52 L 91 52" />
                <path d="M 119 64 L 119 52 L 131 52" />
                <path d="M 91 30 L 103 30 L 103 42" />
                <path d="M 91 54 L 103 54 L 103 42" />
                
                <path d="M 182 33 L 170 33 L 170 45" />
                <path d="M 182 57 L 170 57 L 170 45" />
                
                <path d="M 273 28 L 263 32 L 253 28" />
                <path d="M 277 32 L 273 42 L 277 52" />
                <path d="M 273 56 L 263 52 L 253 56" />
                <path d="M 249 32 L 253 42 L 249 52" />
              </g>
              <g fontSize={15} fill="#6b7280" textAnchor="middle">
                <text x={35.0} y={114.4} fill="#6b7280">A</text><text x={111.0} y={114.4} fill="#6b7280">B</text><text x={187.0} y={114.4} fill="#6b7280">C</text><text x={263.0} y={114.4} fill="#6b7280">D</text>
              </g>
              <text x={111.0} y={86.0} fontSize={15} fill="#10b981">✔</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（讲义答案：B）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>数<b>直角个数</b>（讲义用橙色小方块标出）：①直角三角形 1 个；②圆内水平线两端小竖线各 1 个，共 2 个；③阶梯折线与下方半圆，折点处共 3 个；④正方形（内接圆相切不产生直角）四角共 4 个；⑤直角三角形底角 1 个＋内部横线交于右边 2 个＋内部竖线交于底边 2 个，共 5 个 → 直角数 1、2、3、4、5 递增，问号处应为 <b>6 个直角</b>。<br />
              对比选项：A 正方形四角 = 4 个；<b>B 正方形四角 4 个＋水平线与左边相交 2 个 = 6 个 ✔</b>；C 竖线与水平线 T 形相交 = 2 个；D 圆内接正方形四角 = 4 个。<br />
              <span className="correct">答案：B</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Callout variant="key">
          <b>本节收束（讲义小结）：</b>笔画——特征"五角星、日、田、圆相交"（旧）与"面、多端点、生活化"（新），工具是"奇点数 ÷ 2"和"去外框法"；元素——先看种类数量，&gt;2 种找相同（先自己后邻居），=2 种先运算后换算（图1＋图3＝2 倍图2）；部分数/黑白块——分堆且堆数少，2 堆看每堆个数变化、&gt;2 堆看黑色白色部分数及运算；直角——直角三角形、十字架、矩形外框，外直角别忘数记。
        </Callout>
      </Block>
      
          
            <Block>
        <BlockTitle>补充8. 元素换算的快速公式：图 1 + 图 3 = 2 × 图 2</BlockTitle>
        <p>夸夸刷"元素细化"里给了两条并列通道（（三）P125/P100、（一）P132）：</p>
        <p>· <b>只有 2 种元素</b> → <b>先运算、后换算</b>，换算公式：<b>图 1 + 图 3 = 2 × 图 2</b>（即三幅图换算成同一元素后成等差数列）；<br />· <b>多于 2 种元素</b> → <b>找相同</b>（自己和自己比 / 和邻居比）；<b>完全无相同</b> → 转"属性"。</p>
        <Callout variant="key">口诀：<b>两种元素 → 列等式"图1+图3=2×图2"解出换算比</b>（如 1 圆 = 2 三角），再把每幅换算成同一种元素，看等差（差几）；<b>三种以上元素 → 找相同</b>。</Callout>
        <Example>
          <ExampleHeader>📝 例题8 · 圆与三角的元素换算（22江苏事业-60%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>请从所给的四个选项中，选出最合适的一个填入问号处，使之呈现一定的规律性。</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 446 128" role="img" aria-label="五幅图由圆和三角组成，数量逐幅增加">
      <g transform="translate(0,2)">
              <g stroke="#1f2937" fill="#ffffff" strokeWidth={1.2}>
                <rect x={36} y={20} width={68} height={68} /><rect x={116} y={20} width={68} height={68} /><rect x={196} y={20} width={68} height={68} /><rect x={276} y={20} width={68} height={68} /><rect x={356} y={20} width={68} height={68} />
              </g>
              <g stroke="#1f2937" fill="none" strokeWidth={1.2}>
                <circle cx={70} cy={54} r={8} />
                <circle cx={136} cy={34} r={6} />
                <polygon points="152,39 166,39 159,28" />
                <polygon points="129,55 143,55 136,44" />
                <polygon points="145,55 159,55 152,44" />
                <polygon points="214,34 226,34 220,25" />
                <circle cx={240} cy={30} r={6} />
                <polygon points="207,55 219,55 213,46" />
                <circle cx={233} cy={50} r={6} />
                <circle cx={255} cy={50} r={6} />
                <polygon points="297,34 309,34 303,25" />
                <circle cx={323} cy={30} r={6} />
                <circle cx={345} cy={30} r={6} />
                <polygon points="290,55 302,55 296,46" />
                <circle cx={316} cy={50} r={6} />
                <polygon points="334,55 346,55 340,46" />
                <polygon points="290,76 302,76 296,67" />
                <polygon points="312,76 324,76 318,67" />
              </g>
              <text x={390} y={60} fontSize={28} fill="#6b7280" textAnchor="middle">?</text>
              <g fontSize={10.5} fill="#6b7280" textAnchor="middle">
                <text x={70} y={102} fill="#6b7280">○=1</text><text x={150} y={102} fill="#6b7280">○1 △3</text><text x={230} y={102} fill="#6b7280">△2 ○3</text><text x={310} y={102} fill="#6b7280">△5 ○3</text>
              </g>
            </g>
      </svg><figcaption>图：题干 5 幅（元素只有"圆、三角"两种）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 406 130" role="img" aria-label="四个选项：九个元素由圆和三角组成">
      <g transform="translate(0,2)">
              <g stroke="#1f2937" fill="#ffffff" strokeWidth={1.2}>
                <rect x={76} y={20} width={68} height={68} /><rect x={156} y={20} width={68} height={68} /><rect x={236} y={20} width={68} height={68} /><rect x={316} y={20} width={68} height={68} />
              </g>
              <g stroke="#1f2937" fill="none" strokeWidth={1.2}>
                <circle cx={90} cy={34} r={6} /><polygon points="101,39 113,39 107,28" /><circle cx={126} cy={34} r={6} />
                <circle cx={90} cy={54} r={6} /><polygon points="101,59 113,59 107,48" /><circle cx={126} cy={54} r={6} />
                <circle cx={90} cy={74} r={6} /><polygon points="101,79 113,79 107,68" /><polygon points="123,79 135,79 129,68" />
      
                <circle cx={170} cy={34} r={6} /><polygon points="181,39 193,39 187,28" /><circle cx={206} cy={34} r={6} />
                <circle cx={170} cy={54} r={6} /><polygon points="181,59 193,59 187,48" /><circle cx={206} cy={54} r={6} />
                <circle cx={170} cy={74} r={6} /><circle cx={192} cy={74} r={6} /><polygon points="203,79 215,79 209,68" />
      
                <polygon points="245,39 257,39 251,28" /><circle cx={270} cy={34} r={6} /><circle cx={290} cy={34} r={6} />
                <circle cx={250} cy={54} r={6} /><polygon points="261,59 273,59 267,48" /><circle cx={286} cy={54} r={6} />
                <circle cx={250} cy={74} r={6} /><circle cx={270} cy={74} r={6} /><circle cx={290} cy={74} r={6} />
      
                <polygon points="325,39 337,39 331,28" /><polygon points="343,39 355,39 349,28" /><polygon points="361,39 373,39 367,28" />
                <polygon points="325,59 337,59 331,48" /><circle cx={352} cy={54} r={6} /><circle cx={372} cy={54} r={6} />
                <polygon points="325,79 337,79 331,68" /><circle cx={352} cy={74} r={6} /><circle cx={372} cy={74} r={6} />
              </g>
              <g fontSize={12} fill="#1f2937" textAnchor="middle">
                <text x={110} y={103} fill="#1f2937">A</text><text x={190} y={103} fill="#1f2937">B</text><text x={270} y={103} fill="#1f2937">C</text><text x={350} y={103} fill="#1f2937">D</text>
              </g>
            </g>
      </svg><figcaption>选项 A / B / C / D（每项 9 个元素，圆、三角数量不同）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>只有两种元素 → 列等式算换算比。把 1 圆记作 x 个三角：1 幅＝x，2 幅＝x+3，3 幅＝3x+2，4 幅＝3x+5。由"图1+图3＝2×图2"得 2(x+3)=x+3x+2，解得 <b>x=2（1 圆＝2 三角）</b>。换算后依次为 2、5、8、11 → 等差 +3，第 5 幅＝14＝<b>5 圆 + 4 三角</b>，只有 A（5 圆 4 三角）符合。<br /><span className="correct">答案：A</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
            <Block>
        <BlockTitle>补充4. 黑面与外框：口诀"碰不碰？碰几条？"</BlockTitle>
        <p>夸夸刷（五）第 49—50 页把"黑面与外框的关系"抽成一个口诀题族，横跨 24 国考、24 联考事业、25 天津、25 国考（菱形）、25 联考事业（五边形）：<b>不管黑面是矩形、菱形还是五边形，只看它和外面那个框"碰不碰、碰几条边"</b>。</p>
        <p>进一步细分四种情况（五 · 第 50 页"出题者怎么抄"）：<br />① <b>局部出头</b>：黑块有一截伸到外框之外；<br />② <b>全部里面</b>：黑块完全被包在外框内部；<br />③ <b>= 1/2 相交面</b>：黑块贴住外框的那条边，恰好占外框边长的 1/2；<br />④ <b>&gt; 1/2 相交面</b>：贴住的边长超过外框边长的 1/2。</p>
        <Callout variant="key">口诀：<b>碰不碰？碰几条？</b><br />看黑面与外框重叠的<b>边数（0 / 1 / 2 / …）</b>，其次看重叠边的<b>长度占比</b>（1/2、&gt;1/2）。这两个量足够区分四星题。</Callout>
        <figure className="fig">
          <svg viewBox="0 0 463.5 169" role="img" aria-label="黑面与外框四种关系示意">
      <g transform="translate(0,2)"><g transform="translate(0,1)">
            <g stroke="#1f2937" strokeWidth={2.2} fill="none">
              <rect x={30} y={35} width={70} height={70} />
              <rect x={140} y={35} width={70} height={70} />
              <rect x={250} y={35} width={70} height={70} />
              <rect x={360} y={35} width={70} height={70} />
            </g>
            <rect x={46} y={19} width={36} height={52} fill="#1f2937" />
            <rect x={158} y={53} width={34} height={34} fill="#1f2937" />
            <rect x={250} y={35} width={35} height={40} fill="#1f2937" />
            <rect x={360} y={35} width={55} height={40} fill="#1f2937" />
            <g fontSize={12} textAnchor="middle">
              <text x={65} y={126} fill="#7c3aed">局部出头</text>
              <text x={175} y={126} fill="#2563eb">全部里面</text>
              <text x={285} y={126} fill="#10b981">= 1/2 相交面</text>
              <text x={395} y={126} fill="#f59e0b">&gt; 1/2 相交面</text>
            </g>
            <g fontSize={11} textAnchor="middle" fill="#6b7280">
              <text fill="#6b7280" x={65} y={142}>黑块穿出外框</text>
              <text fill="#6b7280" x={175} y={142}>四边都不碰</text>
              <text fill="#6b7280" x={285} y={142}>贴边 = 35（半条）</text>
              <text fill="#6b7280" x={395} y={142}>贴边 = 55（过半）</text>
            </g>
          </g></g>
      </svg>
          <figcaption>图：黑面与外框关系四分类（局部出头 / 全部里面 / =1/2 / &gt;1/2 相交面）</figcaption>
        </figure>
      </Block>
            <Block>
        <BlockTitle>补充9. 混淆点：直角 vs 所有面</BlockTitle>
        <p>夸夸刷（七）第 92 页把两个极易混的考点并排：</p>
        <p>① <b>所有面</b>——看的是"每一个封闭面的形状"：是否每面形状一样、是否都有三角形、是否只有 2 种形状；<br />② <b>直角</b>——只数"直角个数"，五角星、日字、田字、圆相交、直角三角形、十字架、矩形（外框）都是高频直角图形。</p>
        <Callout variant="key">判据：<b>问的是"每个面长什么样"还是"有几个直角"</b>。<br />"所有面"要先数清封闭面再比形状；"直角"只需扫图数 90°，与面数无关。</Callout>
        <figure className="fig">
          <svg viewBox="0 0 457 170" role="img" aria-label="所有面与直角对比示意">
      <g transform="translate(0,6)">
            <g stroke="#2563eb" strokeWidth={1.5} fill="none">
              <rect x={50} y={40} width={80} height={60} /><line x1={50} y1={40} x2={130} y2={100} /><line x1={130} y1={40} x2={50} y2={100} />
            </g>
            <text x={90} y={28} fontSize={12} textAnchor="middle" fill="#2563eb">所有面</text>
            <text x={90} y={118} fontSize={11.5} textAnchor="middle" fill="#2563eb">四个面都是三角形</text>
            <g stroke="#f59e0b" strokeWidth={1.6} fill="none">
              <path d="M250 60 h30 v-20 h30 v20 h30 v30 h-30 v20 h-30 v-20 h-30 z" />
            </g>
            <circle cx={265} cy={60} r={0} fill="#f59e0b" />
            <text x={295} y={28} fontSize={12} textAnchor="middle" fill="#f59e0b">直角</text>
            <text x={295} y={140} fontSize={11.5} textAnchor="middle" fill="#f59e0b">十字形：数 12 个直角</text>
            <text x={410} y={76} fontSize={12.5} textAnchor="middle" fill="#1f2937">各数各的</text>
          </g>
      </svg>
          <figcaption>图：左"所有面"看每个面的形状，右"直角"只数 90°</figcaption>
        </figure>
      </Block>
            <Block>
        <BlockTitle>补充4. 混淆点辨析 · 笔画 vs 平行线（一句考情提示定生死）</BlockTitle>
        <p>"笔画"和"平行线"是图推里最容易打架的一对。因为它们长得像：图形里都是"一堆同方向的斜线"。老师给了一条极实用的<b>考情提示</b>：</p>
        <Callout variant="key"><b>相同方向的线条超过 2 条 → 考"平行线"的概率极低，优先数笔画（一笔画）。</b><br />反过来，只有当"同方向线控制在 2 条左右、且线条整体规整"时，才去数平行线的组数。</Callout>
        <p>背后的道理：命题人出"平行线"题时，必须有意识地控制同方向线条数量，否则会干扰自己；而"一笔画"题（凌乱图形）恰恰不需要控制方向。所以——<b>越凌乱、同方向线越多 → 越是一笔画；越规整、线越少 → 才是平行线</b>。</p>
        <Example>
          <ExampleHeader>📝 例题2 · 凌乱图形优先数笔画（24 联考事业）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性。</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 462 148" role="img" aria-label="例题题干五个画形">
              <polygon points="75,55 57.8,62.8 50,80 42.2,62.8 25,55 42.2,47.2 50,30 57.8,47.2" fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <line x1={75} y1={55} x2={75} y2={35} stroke="#ef4444" strokeWidth={1.4} />
              <polygon points="147,55 129.8,62.8 122,80 114.2,62.8 97,55 114.2,47.2 122,30 129.8,47.2" fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <line x1={147} y1={55} x2={147} y2={35} stroke="#ef4444" strokeWidth={1.4} />
              <polygon points="219,55 201.8,62.8 194,80 186.2,62.8 169,55 186.2,47.2 194,30 201.8,47.2" fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <line x1={219} y1={55} x2={219} y2={35} stroke="#ef4444" strokeWidth={1.4} />
              <polygon points="291,55 273.8,62.8 266,80 258.2,62.8 241,55 258.2,47.2 266,30 273.8,47.2" fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <line x1={291} y1={55} x2={291} y2={35} stroke="#ef4444" strokeWidth={1.4} />
              <polygon points="363,55 345.8,62.8 338,80 330.2,62.8 313,55 330.2,47.2 338,30 345.8,47.2" fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <line x1={363} y1={55} x2={363} y2={35} stroke="#ef4444" strokeWidth={1.4} />
              <rect x={380} y={25} width={60} height={60} fill="none" stroke="#6b7280" strokeWidth={1.2} />
              <text x={410} y={64} fontSize={26} fill="#6b7280" textAnchor="middle">?</text>
              <text x={50} y={105} fontSize={12} fill="#6b7280" textAnchor="middle">①</text>
              <text x={122} y={105} fontSize={12} fill="#6b7280" textAnchor="middle">②</text>
              <text x={194} y={105} fontSize={12} fill="#6b7280" textAnchor="middle">③</text>
              <text x={266} y={105} fontSize={12} fill="#6b7280" textAnchor="middle">④</text>
              <text x={338} y={105} fontSize={12} fill="#6b7280" textAnchor="middle">⑤</text>
              <text x={230} y={124} fontSize={11.5} fill="#ef4444" textAnchor="middle">每个图形都只有 2 个奇点（红点处）→ 均为一笔画</text>
            </svg><figcaption>图：题干图形（示意，均为"一笔画"）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 464 132" role="img" aria-label="例题四个选项">
      <g transform="translate(2,2)">
              <rect x={20} y={20} width={90} height={70} fill="none" stroke="#6b7280" strokeWidth={1.2} />
              <rect x={32} y={34} width={30} height={42} fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <rect x={68} y={34} width={30} height={42} fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <rect x={130} y={20} width={90} height={70} fill="none" stroke="#6b7280" strokeWidth={1.2} />
              <rect x={142} y={32} width={26} height={46} fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <polygon points="190,78 204,32 218,78" fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <rect x={240} y={20} width={90} height={70} fill="none" stroke="#6b7280" strokeWidth={1.2} />
              <rect x={250} y={30} width={70} height={50} fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <polygon points="285,44 293,58 277,50 293,50 277,58" fill="none" stroke="#7c3aed" strokeWidth={1.3} />
              <rect x={350} y={20} width={90} height={70} fill="none" stroke="#6b7280" strokeWidth={1.2} />
              <polygon points="423,55 403.5,63.5 395,83 386.5,63.5 367,55 386.5,46.5 395,27 403.5,46.5" fill="none" stroke="#1f2937" strokeWidth={1.5} />
              <line x1={423} y1={55} x2={423} y2={33} stroke="#1f2937" strokeWidth={1.5} />
              <text x={65} y={105} fontSize={12.5} fill="#6b7280" textAnchor="middle">A</text>
              <text x={175} y={105} fontSize={12.5} fill="#6b7280" textAnchor="middle">B</text>
              <text x={285} y={105} fontSize={12.5} fill="#6b7280" textAnchor="middle">C</text>
              <text x={395} y={105} fontSize={12.5} fill="#6b7280" textAnchor="middle">D</text>
            </g>
      </svg><figcaption>选项 A / B / C / D（只有 D 是"2 个奇点"的一笔画图形）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>图形非常凌乱、同方向线条超过 2 条——按考情提示，先不想平行线，<b>直接数奇点</b>。题干 5 个图形奇点数全为 2，均为<b>一笔画</b>，所以问号处也要一笔画。<br />A、B、C 都由两个互相分离的封闭图形构成（属于两笔画），<b>只有 D 是连通、且只有 2 个奇点的一笔画图形</b>。<br /><span className="correct">答案：D</span></ExampleAnswer>
          </ExampleBody>
        </Example>
        <p>同页还给了三个"反例"——2019 青海、2019 四川、2019 联考，那三道才是真正考"<b>平行线</b>"的题：图形很规整、同方向线条恰好控制在 2 条。两种题放在一起看，手感就出来了。</p>
      </Block>
            <Block>
        <BlockTitle>补充12. 数量关系的复合新宠 · "元素 + 线"、"元素 + 面"</BlockTitle>
        <p>"元素"单独考已经不算难，难点在于近两年它开始和<b>线、面</b>做复合。老师明确点出难题方向是"<b>相减 → 相加</b>"——以前考"外框边数 − 元素个数"，现在反过来考<b>相加 / 换算</b>。</p>
        <Callout variant="key"><b>元素 + 线 的解题顺序</b><br />① 先数<b>元素个数</b>（有几个小图形）；<br />② 再数<b>外框线条数</b>（或直线数 / 曲线数）；<br />③ 把两者<b>相加或相减</b>，看能否分成两组或形成等差。<br />真题里最常见的是"<b>外框边数 − 元素个数</b>"为定值。</Callout>
        <p>真题锚点：<b>25 山东</b>（元素 + 线）、<b>25 四川</b>（元素 + 线）、<b>24 山东</b>（元素 + 线）、<b>25 山东</b>（元素 + 面）。</p>
        <Example>
          <ExampleHeader>📝 例题8 · 元素 + 线（25 山东，即勘误二涉及的那道题）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是。</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 456 142" role="img" aria-label="例题题干六个图形">
              <rect x={25} y={32} width={54} height={54} fill="none" stroke="#1f2937" strokeWidth={1.7} />
              <circle cx={44} cy={52} r={8} fill="none" stroke="#2563eb" strokeWidth={1.5} />
              <circle cx={66} cy={72} r={6} fill="none" stroke="#2563eb" strokeWidth={1.5} />
              <text x={52} y={104} fontSize={12} fill="#6b7280" textAnchor="middle">①</text>
              <polygon points="123,32 142,42 142,76 123,86 104,76 104,42" fill="none" stroke="#1f2937" strokeWidth={1.7} />
              <path d="M114,50 C114,45 107,45 107,50 C107,54 113,57 114,60 C115,57 121,54 121,50 C121,45 114,45 114,50 Z" fill="none" stroke="#2563eb" strokeWidth={1.2} />
              <path d="M130,60 C130,55 123,55 123,60 C123,64 129,67 130,70 C131,67 137,64 137,60 C137,55 130,55 130,60 Z" fill="none" stroke="#2563eb" strokeWidth={1.2} />
              <path d="M116,72 C116,67 109,67 109,72 C109,76 115,79 116,82 C117,79 123,76 123,72 C123,67 116,67 116,72 Z" fill="none" stroke="#2563eb" strokeWidth={1.2} />
              <text x={123} y={104} fontSize={12} fill="#6b7280" textAnchor="middle">②</text>
              <rect x={174} y={32} width={42} height={54} fill="none" stroke="#1f2937" strokeWidth={1.7} />
              <polygon points="184,40 206,40 195,54" fill="none" stroke="#2563eb" strokeWidth={1.5} />
              <polygon points="184,80 206,80 195,66" fill="none" stroke="#2563eb" strokeWidth={1.5} />
              <text x={195} y={104} fontSize={12} fill="#6b7280" textAnchor="middle">③</text>
              <rect x={238} y={32} width={54} height={54} fill="none" stroke="#1f2937" strokeWidth={1.7} />
              <rect x={258} y={52} width={20} height={20} fill="none" stroke="#2563eb" strokeWidth={1.5} />
              <text x={265} y={104} fontSize={12} fill="#6b7280" textAnchor="middle">④</text>
              <polygon points="336,32 357,48 350,86 322,86 315,48" fill="none" stroke="#1f2937" strokeWidth={1.7} />
              <polygon points="330,56 344,56 337,46" fill="none" stroke="#2563eb" strokeWidth={1.4} />
              <polygon points="333,74 347,74 340,64" fill="none" stroke="#2563eb" strokeWidth={1.4} />
              <text x={336} y={104} fontSize={12} fill="#6b7280" textAnchor="middle">⑤</text>
              <rect x={380} y={32} width={54} height={54} fill="none" stroke="#ef4444" strokeWidth={1.7} strokeDasharray="0" />
              <polygon points="392,86 422,86 415,46 399,46" fill="none" stroke="#1f2937" strokeWidth={1.7} />
              <path d="M400,60 a6,6 0 1,0 0,12" fill="none" stroke="#2563eb" strokeWidth={1.4} />
              <path d="M412,60 a6,6 0 1,1 0,12" fill="none" stroke="#2563eb" strokeWidth={1.4} />
              <text x={407} y={104} fontSize={12} fill="#6b7280" textAnchor="middle">⑥</text>
              <text x={230} y={118} fontSize={11} fill="#ef4444" textAnchor="middle">⑥ 的外框按勘误补上（见补充1）</text>
            </svg><figcaption>图：题干六个图形（每个都由"外框 + 内部小元素"组成）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 388 120" role="img" aria-label="例题四个选项">
              <rect x={86} y={22} width={130} height={34} rx={8} fill="none" stroke="#6b7280" strokeWidth={1.3} />
              <text x={151} y={44} fontSize={12.5} fill="#1f2937" textAnchor="middle">A.①③⑥，②④⑤</text>
              <rect x={236} y={22} width={130} height={34} rx={8} fill="none" stroke="#6b7280" strokeWidth={1.3} />
              <text x={301} y={44} fontSize={12.5} fill="#1f2937" textAnchor="middle">B.①②③，④⑤⑥</text>
              <rect x={86} y={64} width={130} height={34} rx={8} fill="none" stroke="#6b7280" strokeWidth={1.3} />
              <text x={151} y={86} fontSize={12.5} fill="#1f2937" textAnchor="middle">C.①②⑤，③④⑥</text>
              <rect x={236} y={64} width={130} height={34} rx={8} fill="none" stroke="#6b7280" strokeWidth={1.3} />
              <text x={301} y={86} fontSize={12.5} fill="#1f2937" textAnchor="middle">D.①④⑥，②③⑤</text>
            </svg><figcaption>选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>每个图形都由"<b>一个外框 + 若干个内部小元素</b>"组成，走"元素 + 线"。<br />① 外框 4 条边、内部 2 个元素 → 4 − 2 = <b>2</b>；<br />③ 外框 4 条边、内部 2 个元素 → 4 − 2 = <b>2</b>；<br />⑥ 外框 4 条边、内部 2 个元素 → 4 − 2 = <b>2</b>；<br />② 外框 6 条边、内部 3 个元素 → 6 − 3 = <b>3</b>；④ 外框 4 条边、内部 1 个元素 → 4 − 1 = <b>3</b>；⑤ 外框 5 条边、内部 2 个元素 → 5 − 2 = <b>3</b>。<br />因此 ①③⑥ 一组（差值 2）、②④⑤ 一组（差值 3）。<br /><span className="correct">答案：A</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
    </>
  )
}
