import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十、思维导图串讲（总纲）
 *
 * @returns 该节正文。
 */
export default function S11(): ReactElement {
  return (
    <>
      <Block>
        <BlockTitle>1. 3+3 体系总纲：一句话记住图推</BlockTitle>
        <Callout variant="key">
          <b>总口诀：</b>拿到一道图推，先问自己一句——<b>“图形像不像？”</b><br />
          · <b>像（有一样的图案）</b> → 看 <span style={{ color: '#2563eb' }}><b>位置 / 样式 / 标记</b></span>（3 类）<br />
          · <b>不像（没有一样的图案）</b> → 看 <span style={{ color: '#f59e0b' }}><b>属性 / 数量 / 图形间位置</b></span>（3 类）<br />
          <b>“3+3”= 两条大道，六个路口，三十多个考点。</b>
        </Callout>
      
        <figure className="fig">
          <svg viewBox="0 0 704 472" role="img" aria-label="刘义恒图推3+3体系树状结构图">
      <g transform="translate(16,14)">
            
            <line x1={118} y1={225} x2={134} y2={225} stroke="#6b7280" strokeWidth={2} />
            <line x1={134} y1={58} x2={134} y2={374} stroke="#6b7280" strokeWidth={2} />
            <line x1={134} y1={58} x2={150} y2={58} stroke="#f59e0b" strokeWidth={2} />
            <line x1={134} y1={374} x2={150} y2={374} stroke="#2563eb" strokeWidth={2} />
      
            
            <rect x={6} y={196} width={112} height={58} rx={6} fill="#fef3c7" stroke="#f59e0b" strokeWidth={2} />
            <text x={62} y={219} textAnchor="middle" fontSize={13} fontWeight="700" fill="#1f2937">刘义恒图推</text>
            <text x={62} y={238} textAnchor="middle" fontSize={13} fontWeight="700" fill="#1f2937">“3+3”背诵版</text>
      
            
            <rect x={150} y={40} width={152} height={36} rx={6} fill="#fff7ed" stroke="#f59e0b" strokeWidth={2} />
            <text x={226} y={63} textAnchor="middle" fontSize={13} fontWeight="700" fill="#b45309">有一样的图案（3类）</text>
            <rect x={150} y={356} width={166} height={36} rx={6} fill="#eff6ff" stroke="#2563eb" strokeWidth={2} />
            <text x={233} y={379} textAnchor="middle" fontSize={13} fontWeight="700" fill="#1d4ed8">没有一样的图案（3类）</text>
      
            
            <line x1={302} y1={58} x2={318} y2={58} stroke="#f59e0b" strokeWidth={2} />
            <line x1={318} y1={30} x2={318} y2={154} stroke="#f59e0b" strokeWidth={2} />
            <rect x={318} y={14} width={110} height={32} rx={6} fill="#ffffff" stroke="#6b7280" strokeWidth={2} />
            <text x={373} y={35} textAnchor="middle" fontSize={12} fontWeight="700" fill="#1f2937">【1】位置</text>
            <rect x={318} y={76} width={132} height={32} rx={6} fill="#ffffff" stroke="#6b7280" strokeWidth={2} />
            <text x={384} y={97} textAnchor="middle" fontSize={12} fontWeight="700" fill="#1f2937">【2】样式（运算）</text>
            <rect x={318} y={138} width={110} height={32} rx={6} fill="#ffffff" stroke="#6b7280" strokeWidth={2} />
            <text x={373} y={159} textAnchor="middle" fontSize={12} fontWeight="700" fill="#1f2937">【3】标记</text>
      
            
            <line x1={428} y1={30} x2={452} y2={30} stroke="#9ca3af" strokeWidth={2} />
            <line x1={452} y1={21} x2={452} y2={53} stroke="#9ca3af" strokeWidth={2} />
            <rect x={452} y={8} width={72} height={26} rx={4} fill="#ffffff" stroke="#9ca3af" strokeWidth={1.6} />
            <text x={488} y={26} textAnchor="middle" fontSize={12} fill="#1f2937">平移</text>
            <rect x={452} y={40} width={84} height={26} rx={4} fill="#ffffff" stroke="#9ca3af" strokeWidth={1.6} />
            <text x={494} y={58} textAnchor="middle" fontSize={12} fill="#1f2937">旋转/翻转</text>
            <line x1={536} y1={21} x2={552} y2={21} stroke="#9ca3af" strokeWidth={2} />
            <line x1={552} y1={21} x2={552} y2={40} stroke="#9ca3af" strokeWidth={2} />
            <line x1={552} y1={40} x2={552} y2={40} stroke="#9ca3af" strokeWidth={2} />
            <rect x={552} y={27} width={86} height={28} rx={4} fill="#ecfdf5" stroke="#10b981" strokeWidth={1.8} />
            <text x={595} y={46} textAnchor="middle" fontSize={12} fontWeight="700" fill="#047857">相邻比较</text>
      
            <line x1={450} y1={92} x2={462} y2={92} stroke="#9ca3af" strokeWidth={2} />
            <line x1={462} y1={83} x2={462} y2={115} stroke="#9ca3af" strokeWidth={2} />
            <rect x={462} y={70} width={84} height={26} rx={4} fill="#ffffff" stroke="#9ca3af" strokeWidth={1.6} />
            <text x={504} y={88} textAnchor="middle" fontSize={12} fill="#1f2937">黑白运算</text>
            <rect x={462} y={102} width={84} height={26} rx={4} fill="#ffffff" stroke="#9ca3af" strokeWidth={1.6} />
            <text x={504} y={120} textAnchor="middle" fontSize={12} fill="#1f2937">加减同异</text>
      
            <line x1={428} y1={154} x2={446} y2={154} stroke="#9ca3af" strokeWidth={2} />
            <rect x={446} y={140} width={212} height={30} rx={4} fill="#ffffff" stroke="#9ca3af" strokeWidth={1.6} />
            <text x={552} y={160} textAnchor="middle" fontSize={11} fill="#1f2937">位置→点→线→图形→面→多个标记</text>
      
            
            <line x1={316} y1={374} x2={330} y2={374} stroke="#2563eb" strokeWidth={2} />
            <line x1={330} y1={316} x2={330} y2={420} stroke="#2563eb" strokeWidth={2} />
      
            <rect x={330} y={300} width={110} height={32} rx={6} fill="#ffffff" stroke="#6b7280" strokeWidth={2} />
            <text x={385} y={321} textAnchor="middle" fontSize={12} fontWeight="700" fill="#1f2937">【1】属性</text>
            <rect x={330} y={352} width={110} height={32} rx={6} fill="#ffffff" stroke="#6b7280" strokeWidth={2} />
            <text x={385} y={373} textAnchor="middle" fontSize={12} fontWeight="700" fill="#1f2937">【2】数量</text>
            <rect x={330} y={404} width={128} height={32} rx={6} fill="#ffffff" stroke="#6b7280" strokeWidth={2} />
            <text x={394} y={425} textAnchor="middle" fontSize={12} fontWeight="700" fill="#1f2937">【3】图形间位置</text>
      
            
            <line x1={440} y1={316} x2={455} y2={316} stroke="#9ca3af" strokeWidth={2} />
            <line x1={455} y1={296} x2={455} y2={352} stroke="#9ca3af" strokeWidth={2} />
            <rect x={455} y={284} width={80} height={24} rx={4} fill="#ffffff" stroke="#9ca3af" strokeWidth={1.6} />
            <text x={495} y={301} textAnchor="middle" fontSize={12} fill="#1f2937">对称性</text>
            <rect x={455} y={310} width={80} height={24} rx={4} fill="#ffffff" stroke="#9ca3af" strokeWidth={1.6} />
            <text x={495} y={327} textAnchor="middle" fontSize={12} fill="#1f2937">曲直性</text>
            <rect x={455} y={336} width={80} height={24} rx={4} fill="#ffffff" stroke="#9ca3af" strokeWidth={1.6} />
            <text x={495} y={353} textAnchor="middle" fontSize={12} fill="#1f2937">开闭性</text>
            <line x1={535} y1={316} x2={556} y2={316} stroke="#9ca3af" strokeWidth={2} />
            <text x={562} y={320} fontSize={11} fill="#6b7280">先识别 → 后细化</text>
      
            <line x1={440} y1={368} x2={455} y2={368} stroke="#9ca3af" strokeWidth={2} />
            <rect x={455} y={353} width={196} height={30} rx={4} fill="#fffbeb" stroke="#f59e0b" strokeWidth={1.8} />
            <text x={553} y={373} textAnchor="middle" fontSize={11} fill="#1f2937">面·笔画·点·线·元素·直角</text>
      
            <line x1={458} y1={420} x2={470} y2={420} stroke="#9ca3af" strokeWidth={2} />
            <rect x={470} y={405} width={196} height={30} rx={4} fill="#eff6ff" stroke="#2563eb" strokeWidth={1.8} />
            <text x={568} y={425} textAnchor="middle" fontSize={11} fill="#1f2937">相离/包含·相交（点·线·面）</text>
          </g>
      </svg>
          <figcaption>图：刘义恒图推“3+3”体系树状结构（据讲义第12页思维导图重绘）</figcaption>
        </figure>
      
        <PointList>
          <li><b>有一样的图案（3类）</b>：<span style={{ color: '#2563eb' }}>完全一样</span> → <b>【1】位置</b>（平移 / 旋转·翻转）；<span style={{ color: '#2563eb' }}>部分一样</span> → <b>【2】样式（运算）</b>（黑白运算 / 加减同异）；<b>【3】标记</b>。</li>
          <li><b>没有一样的图案（3类）</b>：<b>【1】属性</b>（对称性 / 曲直性 / 开闭性）；<b>【2】数量</b>（面 / 笔画 / 点 / 线 / 元素 / 直角）；<b>【3】图形间位置</b>。</li>
          <li><b>两条分支的“分水岭”只有一个动作</b>：<b>先比</b>——相邻两图有没有“一样的图案”。有 → 走左边；没有 → 走右边。</li>
        </PointList>
      </Block>
      
      <Block>
        <BlockTitle>2. 分支速查表 ①：位置（“完全一样”走这里）</BlockTitle>
        <DataTable>
          <tr><th>规律</th><th>什么题眼</th><th>优先看什么</th><th>易错点</th></tr>
          <tr>
            <td><b>平移</b></td>
            <td>图形完全一样；宫格类黑块/元素个数一样</td>
            <td>内部有规律 → <b>内外分开看</b>（如 16 宫格“内部相等”）<br />内部无规律 → <b>常规平移</b>：上下左右、斜线移动（方向可变）</td>
            <td>步长会变（±2 步长）；方向会变；非缺黑平移要“16 宫格横分 2 部分”</td>
          </tr>
          <tr>
            <td><b>旋转 / 翻转</b></td>
            <td>图形完全一样，但朝向变了</td>
            <td>技巧：①特殊图案（大区域）②<b>对折法、箭头法</b></td>
            <td>旋转 ≠ 翻转，翻转会“镜像”；方向与度数要看准</td>
          </tr>
          <tr>
            <td><b>非宫格类（隐藏线条）</b></td>
            <td>线条藏在图里；“离形”：三角形、正方形、菱形</td>
            <td>思维：<b>就近原则 + 找特殊</b>（先找隐藏线条/隐藏图形）</td>
            <td>只顾找线条，忘了找“特殊的那个图形”</td>
          </tr>
          <tr>
            <td><b>相邻比较</b></td>
            <td>相邻两幅图长得很像</td>
            <td>黑块-相邻比较 / 矩形-相邻比较 / 小球-相邻比较</td>
            <td>必须与<b>相邻</b>图比，不能跳着看（跳着看是另一条规律）</td>
          </tr>
          <tr>
            <td><b>宫格拆分</b></td>
            <td>16 宫格一格一格看不出规律</td>
            <td>拆成 2 部分：①分割 2 部分 ②大面积图案</td>
            <td>拆错就全错；16/25 宫格与蜂窝类的运动方向要分清</td>
          </tr>
          <tr>
            <td><b>主流宫格类型</b></td>
            <td>16 宫格 / 25 宫格 / 蜂窝类</td>
            <td>先看运动方向，再看是“整体走”还是“内外分开走”</td>
            <td>蜂窝类方向容易看反</td>
          </tr>
        </DataTable>
      </Block>
      
      <Block>
        <BlockTitle>3. 分支速查表 ②：样式（运算）与标记（“部分一样”走这里）</BlockTitle>
        <DataTable>
          <tr><th>规律</th><th>什么题眼</th><th>优先看什么</th><th>易错点</th></tr>
          <tr>
            <td><b>黑白运算</b></td>
            <td>①两明图 ②九宫格 ③相同区域</td>
            <td>技巧：<b>相同区域 / 对比选项</b>——先把“相同的区域”找出来，再看颜色怎么变</td>
            <td>相同区域判断错；题型创新（颜色创新、位置对应）</td>
          </tr>
          <tr>
            <td><b>加减同异</b></td>
            <td>图形部分一样；先看第 1 组与第 2 组之间的线条</td>
            <td><b>有相同 → 先运算</b>（可能图3动）<br /><b>无相同 → 先旋转</b>：1-2 样 → 图2动；2-3 样 → 图1动</td>
            <td>难点在<b>拆分思维</b>；搞不清到底谁在动（图1/图2/图3）；九宫格还有“纵向”规律</td>
          </tr>
          <tr>
            <td><b>标记（小圆圈/小图案）</b></td>
            <td>图上有小圆圈、小图案标记</td>
            <td>固定顺序：<b>位置</b>（上、下、左、右、内、外）→ <b>点</b>（曲直性、引发的线条数量）→ <b>线</b>（直线/曲线、最长线/最短线、线的位置）→ <b>图形</b>（直角/锐角/钝角、最大角/最小角）→ <b>面</b>（单独面/相交面、相同区域/不同区域、形状、属性、面积）→ <b>多个标记</b></td>
            <td>多个标记时，要看“标记物<b>之间</b>的比较”，或“连线后与原图的关系”</td>
          </tr>
        </DataTable>
        <Callout variant="key">
          <b>样式的一个高价值结论：</b>“<b>图形由线条组成</b>”的题，先看“<b>第 1 组和第 2 组之间的线条像不像</b>”——像就先运算，不像就先旋转。
        </Callout>
      </Block>
      
      <Block>
        <BlockTitle>4. 分支速查表 ③：属性与数量（“没有一样的图案”走这里）</BlockTitle>
        <DataTable>
          <tr><th>规律</th><th>什么题眼</th><th>优先看什么</th><th>易错点</th></tr>
          <tr>
            <td><b>对称性</b></td>
            <td>图形规整、美观（规律、美观 → 对称性）</td>
            <td><b>先识别</b>（轴对称？中心对称？）→ <b>后细化</b>：1 条轴对称 → 看<b>方向</b>；2 条相交 → 看与图形间的<b>位置</b>；多条对称 → 数<b>数量</b></td>
            <td>“细节挖坑”：对称轴穿过几个点/几个小球；多个规则图形还要“内外拆分-识别”</td>
          </tr>
          <tr>
            <td><b>曲直性</b></td>
            <td>1/2、2/3 是曲线</td>
            <td>整幅图是曲线、直线，还是曲线+直线（复合）</td>
            <td>曲线占多少比例；曲直与“开闭”混</td>
          </tr>
          <tr>
            <td><b>开闭性</b></td>
            <td>生活化图形</td>
            <td>全封闭 / 半封闭<br />拓展【生活化思维】：面、部分数、属性、笔画</td>
            <td>生活化图形上来就数面，忘了先想开闭性、部分数</td>
          </tr>
          <tr>
            <td><b>面</b></td>
            <td>封闭区域明显；框内面</td>
            <td>面数量 → 细化：<b>形状</b>（每个面形状一样）、<b>三角形</b>（图形由三角形/矩形组成）、<b>大小</b>（明显大面/小面 → 形状、属性、面积）、<b>相同面</b>（有一样的面）</td>
            <td>框内面 vs 框外面；面数量与笔画混</td>
          </tr>
          <tr>
            <td><b>笔画</b></td>
            <td>强特征：<b>五角星、日、田、圆相交</b>；多端点</td>
            <td>数奇点：0 或 2 个奇点 = 一笔画；去外框后再数</td>
            <td>外框要去掉；多个独立图形要分开算再加</td>
          </tr>
          <tr>
            <td><b>点</b></td>
            <td>线条交叉多；都有曲线</td>
            <td>曲直交点、切点、框点（多边形）、框内面/线<br />【特殊】圆形相交 → 笔画 → 点</td>
            <td>框上点（3 或 4）vs 框内点；切点别漏数</td>
          </tr>
          <tr>
            <td><b>线</b></td>
            <td>大量线条；斜线、相似三角形</td>
            <td>曲直、横竖、框；平行线；<b>贪吃蛇</b>：无小球 → 首尾（方向、平行/垂直、之间的线条数）+ 数量（直角、平行线）；有小球 → 内部相同则内外分开、分 2 堆显则看每堆个数 → 穿过小球个数<br />内外分图：内外分离/部分/个数</td>
            <td>首尾线方向看反；2 种线要运算（曲线/直线、横线/竖线）</td>
          </tr>
          <tr>
            <td><b>元素</b></td>
            <td>多个独立小图形；强特征“独立”</td>
            <td>=2 种元素 → 先运算后换算（公式：<b>图1 + 图3 = 两倍图2</b>）<br />&gt;2 种元素 → 找相同（自己 / 邻居）；无相同 → 看属性</td>
            <td>元素相同看相邻比较；元素不同看位置/运算，别混</td>
          </tr>
          <tr>
            <td><b>直角</b></td>
            <td>强特征：<b>五角星或三角形、十字架、矩形（外框）</b></td>
            <td>数直角个数（常递增/递减）；再看<b>直角的位置变化</b></td>
            <td>直角数完了忘了看位置；外框直角要算进去</td>
          </tr>
        </DataTable>
      </Block>
      
      <Block>
        <BlockTitle>5. 分支速查表 ④：图形间位置 & 黑白块专项</BlockTitle>
        <DataTable>
          <tr><th>规律</th><th>什么题眼</th><th>优先看什么</th><th>易错点</th></tr>
          <tr>
            <td><b>图形间位置</b></td>
            <td><b>高频：图形都是 2 个</b>；简单题为 2~4 个图案</td>
            <td><b>相离/包含</b>：点 — 切点/交点、曲直性；线 — 数量、长短、整体/局部、曲线/直线、线的位置；面 — 形状、属性、面积<br /><b>相交</b>：同上（相交面-形状、相交线-数量、相交线的位置）</td>
            <td>复杂题（共同图案 + 复杂图案）一定要看“<b>两者之间的位置关系</b>”，不能只看单个图形</td>
          </tr>
          <tr>
            <td><b>黑白块·对称</b></td>
            <td>特征：<b>黑块分布规则</b></td>
            <td><b>先识别</b>：整体对称 / 仅黑色对称 / 仅白色对称（常<b>交替出现</b>）<br /><b>后细化</b>：一条对称轴 → 方向、黑块个数（整体个数 / 穿过个数）；多个规则图形 → 对称轴之间的关系（平行、垂直、相交）</td>
            <td>黑/白对称分不清；交替出现容易漏</td>
          </tr>
          <tr>
            <td><b>黑白块·非对称（3 高频）</b></td>
            <td>①个数一样 ②内部相等 ③大面积区域；①两明图 ②九宫格 ③相同区域；分堆且数量少</td>
            <td><b>位置</b>（内部有规律 → 内外分开看；内部无规律 → 常规平移，上下左右、斜着运动）<br /><b>黑白运算</b><br /><b>部分数</b>（=2 堆 → 看每堆个数变化；&gt;2 堆 → 黑色、白色、运算）</td>
            <td>忘了数“黑块个数”；部分数要分清“分几堆”</td>
          </tr>
          <tr>
            <td><b>黑白块·相似</b></td>
            <td>①简单 ②复杂 ③1 黑 + 多白；①黑块被分割 ②有网格；图案很像、小黑块不动；连在一起</td>
            <td><b>图形关系</b>：①黑面与外框的关系（相交于几条线）②白面之间的位置关系 ③黑面与白面（有几个白面跟黑面连一起、相交于几条线）<br /><b>面积</b>：占比（1/2、1/3、1/4……）、比大小（黑面积 vs 白面积）<br /><b>相邻比较</b><br /><b>笔画-周长</b>（黑块周长常见 10 / 12）</td>
            <td>面积占比算错；周长与笔画混</td>
          </tr>
        </DataTable>
      </Block>
      
      <Block>
        <BlockTitle>6. 解题决策流程：拿到一道题按这个顺序试</BlockTitle>
        <Callout variant="key">
          <b>核心心法：</b>先<b>分类</b>（像不像），后<b>排序</b>（先属性后数量），最后<b>验证</b>（相同区域 + 对比选项）。
        </Callout>
        <ol className="step-list">
          <li><b>第 1 步｜整体扫一眼，问“像不像”。</b>把题干相邻两图比一比：有没有“一样的图案”。</li>
          <li><b>第 2 步｜完全一样 → 位置。</b>先数个数、看黑块/元素是否一样 → <b>平移</b>（找方向、步长）→ 不行再<b>旋转/翻转</b>（对折法、箭头法）。宫格类记得“内外分开看”。</li>
          <li><b>第 3 步｜部分一样 → 样式（运算）或标记。</b>先看“第 1 组与第 2 组之间的线条”：有相同先运算，无相同先旋转；有标记就先按“位置→点→线→图形→面→多个标记”过一遍。</li>
          <li><b>第 4 步｜不一样 → 先属性。</b>对称性 → 曲直性 → 开闭性。约 30 秒没有结果，立即转数量。</li>
          <li><b>第 5 步｜数量按固定顺序数：面 → 笔画 → 点 → 线 → 元素 → 直角。</b>每个考点都要带上“细化考点”（面看形状/大小/相同；点看切点/框点/框内面；线看首尾、贪吃蛇、平行线）。</li>
          <li><b>第 6 步｜图形都是 2 个 → 图形间位置。</b>相离/包含/相交，再看“点—线—面”三个层次；复杂题找“共同图案”。</li>
          <li><b>第 7 步｜黑白块/黑白球 → 走专项五连：</b>对称 → 位置 → 黑白运算 → 部分数 → 图形关系/面积/相邻比较/笔画-周长。</li>
          <li><b>第 8 步｜锁定后必验证。</b>用“<b>相同区域</b>”快速排除，用“<b>对比选项</b>”找差异——选项之间往往只差一个细节，那就是考点。</li>
        </ol>
      </Block>
      
      <Block>
        <BlockTitle>7. 高频考点 TOP 榜 & 口诀总表</BlockTitle>
        <DataTable>
          <tr><th>序</th><th>口诀 / 结论</th><th>命中场景</th></tr>
          <tr><td>1</td><td>有一样看<b>位置、样式、标记</b>；没一样看<b>属性、数量、图形间</b></td><td>拿到题的第一判断</td></tr>
          <tr><td>2</td><td>完全一样 → 位置；部分一样 → 样式（运算）/ 标记</td><td>图形重复度高</td></tr>
          <tr><td>3</td><td>平移：<b>内部有规律 → 内外分开看；内部无规律 → 常规平移</b>（上下左右、斜线，方向可变）</td><td>16/25 宫格、蜂窝类</td></tr>
          <tr><td>4</td><td><b>相邻比较</b>：图案很像、小黑块不动</td><td>相邻两图高度相似</td></tr>
          <tr><td>5</td><td>加减同异：<b>有相同先运算，无相同先旋转</b>（1-2 样 → 图2动，2-3 样 → 图1动）</td><td>线条类样式题</td></tr>
          <tr><td>6</td><td>标记顺序：<b>位置 → 点 → 线 → 图形 → 面 → 多个标记</b></td><td>图上有小圆圈/小图案</td></tr>
          <tr><td>7</td><td>对称性：<b>先识别，后细化</b>；1 条轴看方向，2 条轴看位置，多条轴看数量</td><td>图形规整、美观</td></tr>
          <tr><td>8</td><td><b>生活化图形 → 开闭性、面、部分数、笔画</b></td><td>简笔画式的生活图形</td></tr>
          <tr><td>9</td><td>数量顺序：<b>面 → 笔画 → 点 → 线 → 元素 → 直角</b></td><td>无属性可看时</td></tr>
          <tr><td>10</td><td>笔画强特征：<b>五角星、日、田、圆相交</b>（0 或 2 个奇点 = 一笔画）</td><td>线条绕来绕去</td></tr>
          <tr><td>11</td><td>直角强特征：<b>五角星或三角形、十字架、矩形（外框）</b></td><td>方正图形多</td></tr>
          <tr><td>12</td><td>贪吃蛇：<b>无小球看首尾</b>（方向/平行垂直/线条数）；<b>有小球看内外</b>（内外分开/每堆个数/穿过小球个数）</td><td>折线穿过小球阵</td></tr>
          <tr><td>13</td><td>2 种元素：<b>先运算、后换算</b>，图1 + 图3 = 两倍图2</td><td>元素运算题</td></tr>
          <tr><td>14</td><td>“<b>特殊图案（大区域）、对折法、箭头法</b>”是旋转/翻转的三把钥匙</td><td>图形完全一样但朝向变了</td></tr>
          <tr><td>15</td><td>图形关系：简单题看“相离/包含/相交”的<b>点—线—面</b>；复杂题看“<b>共同图案</b>”与两者的位置关系</td><td>图形都是 2 个</td></tr>
          <tr><td>16</td><td>黑白块五连：<b>对称 → 位置 → 黑白运算 → 部分数 → 图形关系/面积/相邻比较/笔画周长</b>；面积占比常见 1/2、1/3、1/4</td><td>黑白格 / 黑白球</td></tr>
          <tr><td>17</td><td>选项用法：<b>相同区域 + 对比选项</b>，两两找差异</td><td>所有题的收尾验证</td></tr>
          <tr><td>18</td><td><b>别着急，慢就是快</b></td><td>讲义第 78 页寄语</td></tr>
        </DataTable>
      </Block>
      
      <Block>
        <BlockTitle>8. 跨章节综合例题（选自本册讲义真题）</BlockTitle>
        <Callout variant="key">
          说明：本册第 5~8 页有 2025 国考（执法卷 / 地市卷）真题串讲，第 26~75 页有各分支配套真题。以下几道为跨章节综合题。
          另有几道真题（如“黑白圆点部分数”“黑白块相邻比较”“对称轴穿过小黑球”）因原图是密集像素点阵、逐格还原易失真，本片段跳过不作图。
        </Callout>
      
        <Example>
          <ExampleHeader>📝 例题1 · 位置·平移（交替规律）（2025 国考地市卷）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 560 120" role="img" aria-label="题干图形：方框内小圆与小方块依次移动">
      <g transform="translate(0,10)">
                <rect x={22} y={12} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={37} y={27} width={46} height={46} fill="none" stroke="#1f2937" strokeWidth={2} />
                <circle cx={52} cy={27} r={5.5} fill="#ffffff" stroke="#2563eb" strokeWidth={2} />
                <rect x={67} y={62} width={10} height={10} fill="#ffffff" stroke="#f59e0b" strokeWidth={2} />
      
                <rect x={110} y={12} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={125} y={27} width={46} height={46} fill="none" stroke="#1f2937" strokeWidth={2} />
                <rect x={134} y={22} width={10} height={10} fill="#ffffff" stroke="#f59e0b" strokeWidth={2} />
                <circle cx={159} cy={73} r={5.5} fill="#ffffff" stroke="#2563eb" strokeWidth={2} />
      
                <rect x={198} y={12} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={213} y={27} width={46} height={46} fill="none" stroke="#1f2937" strokeWidth={2} />
                <circle cx={213} cy={42} r={5.5} fill="#ffffff" stroke="#2563eb" strokeWidth={2} />
                <rect x={217} y={68} width={10} height={10} fill="#ffffff" stroke="#f59e0b" strokeWidth={2} />
      
                <rect x={286} y={12} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={301} y={27} width={46} height={46} fill="none" stroke="#1f2937" strokeWidth={2} />
                <circle cx={347} cy={27} r={5.5} fill="#ffffff" stroke="#2563eb" strokeWidth={2} />
                <rect x={342} y={39} width={10} height={10} fill="#ffffff" stroke="#f59e0b" strokeWidth={2} />
      
                <rect x={374} y={12} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={389} y={27} width={46} height={46} fill="none" stroke="#1f2937" strokeWidth={2} />
                <rect x={389} y={22} width={10} height={10} fill="#ffffff" stroke="#f59e0b" strokeWidth={2} />
                <circle cx={408} cy={73} r={5.5} fill="#ffffff" stroke="#2563eb" strokeWidth={2} />
      
                <rect x={462} y={12} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <text x={500} y={62} textAnchor="middle" fontSize={30} fontWeight="700" fill="#1f2937">?</text>
              </g>
      </svg>
              <figcaption>图：题干图形（圆＝一个规律，方块＝另一个规律）</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 404 140.7" role="img" aria-label="四个选项">
      <g transform="translate(0,14)">
                <rect x={36} y={8} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={51} y={23} width={46} height={46} fill="none" stroke="#1f2937" strokeWidth={2} />
                <circle cx={64} cy={23} r={5.5} fill="#ffffff" stroke="#2563eb" strokeWidth={2} />
                <rect x={68} y={64} width={10} height={10} fill="#ffffff" stroke="#f59e0b" strokeWidth={2} />
                <text x={74} y={102} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">A</text>
      
                <rect x={126} y={8} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={141} y={23} width={46} height={46} fill="none" stroke="#1f2937" strokeWidth={2} />
                <circle cx={187} cy={23} r={5.5} fill="#ffffff" stroke="#2563eb" strokeWidth={2} />
                <rect x={182} y={39} width={10} height={10} fill="#ffffff" stroke="#f59e0b" strokeWidth={2} />
                <text x={164} y={102} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">B</text>
      
                <rect x={216} y={8} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={231} y={23} width={46} height={46} fill="none" stroke="#1f2937" strokeWidth={2} />
                <circle cx={231} cy={30} r={5.5} fill="#ffffff" stroke="#2563eb" strokeWidth={2} />
                <rect x={272} y={40} width={10} height={10} fill="#ffffff" stroke="#f59e0b" strokeWidth={2} />
                <text x={254} y={102} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">C</text>
      
                <rect x={306} y={8} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={321} y={23} width={46} height={46} fill="none" stroke="#1f2937" strokeWidth={2} />
                <circle cx={367} cy={23} r={5.5} fill="#ffffff" stroke="#2563eb" strokeWidth={2} />
                <rect x={338} y={64} width={10} height={10} fill="#ffffff" stroke="#f59e0b" strokeWidth={2} />
                <text x={344} y={102} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">D</text>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D（蓝圆＝圆形，橙方＝正方形）</figcaption>
            </figure>
            <ExampleAnswer>
              <b>解析：</b>题干相邻图形状完全一样，只是两个元素换位 → 走“<b>位置</b>”。讲义标注两条结论：<b>①两个规律交替，1、3、5 与 2、4、6 跳着看；②圆形顺时针动 3 个“半格”，正方形逆时针动 3 个“半格”。</b>
              按“跳着看”，第 6 幅应与第 2、4 幅同属一组：圆在第 4 幅位于右上角，继续顺时针 3 个半格应转到<b>上方偏左</b>；方块在第 4 幅位于右侧，继续逆时针 3 个半格应转到<b>下方（下边中部）</b>。逐项比对：B、D 圆在右上角，C 方块在右侧，均不符；只有 A 是“圆在上方偏左 + 方块在下边中部”。
              <br /><span className="correct">答案：A</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题2 · 图形间位置·第2条线相交（2025 国考地市卷）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 572 120" role="img" aria-label="题干图形：折线组合，第一组三幅、第二组两幅加问号">
      <g transform="translate(2,8)">
                
                <rect x={20} y={14} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polyline points="38,34 68,34 68,62" fill="none" stroke="#1f2937" strokeWidth={2} />
                <polyline points="38,34 38,70 62,70" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={44} y1={46} x2={58} y2={62} stroke="#1f2937" strokeWidth={2} />
      
                <rect x={106} y={14} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polyline points="124,32 148,32 148,74" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={124} y1={32} x2={124} y2={62} stroke="#1f2937" strokeWidth={2} />
                <line x1={148} y1={32} x2={166} y2={50} stroke="#1f2937" strokeWidth={2} />
                <line x1={136} y1={60} x2={148} y2={74} stroke="#1f2937" strokeWidth={2} />
      
                <rect x={192} y={14} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <line x1={212} y1={34} x2={252} y2={34} stroke="#1f2937" strokeWidth={2} />
                <line x1={232} y1={34} x2={232} y2={74} stroke="#1f2937" strokeWidth={2} />
                <line x1={232} y1={34} x2={254} y2={62} stroke="#1f2937" strokeWidth={2} />
                <line x1={212} y1={52} x2={212} y2={72} stroke="#1f2937" strokeWidth={2} />
      
                
                <rect x={300} y={14} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polyline points="318,30 346,30 346,58 318,58" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={318} y1={30} x2={318} y2={56} stroke="#1f2937" strokeWidth={2} />
                <line x1={332} y1={44} x2={356} y2={72} stroke="#1f2937" strokeWidth={2} />
      
                <rect x={386} y={14} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polyline points="404,36 428,36 428,66 404,66" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={428} y1={36} x2={450} y2={32} stroke="#1f2937" strokeWidth={2} />
                <line x1={428} y1={52} x2={450} y2={52} stroke="#1f2937" strokeWidth={2} />
      
                <rect x={472} y={14} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <text x={510} y={62} textAnchor="middle" fontSize={30} fontWeight="700" fill="#1f2937">?</text>
              </g>
      </svg>
              <figcaption>图：题干图形（两组式，第一组 3 幅、第二组 2 幅 + 问号）</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 618 140.7" role="img" aria-label="四个选项">
      <g transform="translate(0,14)">
                <rect x={40} y={8} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polyline points="58,34 90,34 90,52 72,52" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={58} y1={34} x2={58} y2={70} stroke="#1f2937" strokeWidth={2} />
                <line x1={70} y1={52} x2={96} y2={72} stroke="#1f2937" strokeWidth={2} />
                <text x={78} y={102} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">A</text>
      
                <rect x={200} y={8} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polyline points="220,30 220,76 248,76" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={220} y1={30} x2={248} y2={58} stroke="#1f2937" strokeWidth={2} />
                <line x1={248} y1={30} x2={248} y2={74} stroke="#1f2937" strokeWidth={2} />
                <line x1={220} y1={76} x2={248} y2={76} stroke="#1f2937" strokeWidth={2} />
                <line x1={220} y1={58} x2={248} y2={58} stroke="#1f2937" strokeWidth={2} />
                <text x={238} y={102} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">B</text>
      
                <rect x={360} y={8} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <line x1={378} y1={36} x2={404} y2={36} stroke="#1f2937" strokeWidth={2} />
                <line x1={392} y1={36} x2={418} y2={36} stroke="#1f2937" strokeWidth={2} />
                <polyline points="392,36 392,74 418,74" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={378} y1={36} x2={378} y2={60} stroke="#1f2937" strokeWidth={2} />
                <text x={398} y={102} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">C</text>
      
                <rect x={520} y={8} width={76} height={76} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polyline points="540,32 566,32 566,56" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={540} y1={32} x2={540} y2={66} stroke="#1f2937" strokeWidth={2} />
                <line x1={552} y1={46} x2={578} y2={46} stroke="#1f2937" strokeWidth={2} />
                <text x={558} y={102} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">D</text>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D</figcaption>
            </figure>
            <ExampleAnswer>
              <b>解析：</b>题干图形都由若干条<b>直线段</b>拼成，没有封闭区域、也没有曲线 → 归入“<b>图形间位置/线条之间关系</b>”一类。讲义标注的规律是“<b>位置关系-第 2 条线相交</b>”：每一幅图中，按书写顺序数的<b>第 2 条线段一定与其它线段相交</b>（形成交叉），而选项 A、B、C 的第 2 条线段都只是“相接”而不相交，只有 D 满足。
              <br /><span className="correct">答案：D</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题3 · 样式（运算）·叠加（讲义例题）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 542 114" role="img" aria-label="题干图形：第一组叠加，第二组两幅加问号">
      <g transform="translate(0,2)">
                
                <rect x={30} y={20} width={70} height={70} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={40} y={30} width={50} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={56.7} y1={30} x2={56.7} y2={80} stroke="#1f2937" strokeWidth={2} />
                <line x1={73.3} y1={30} x2={73.3} y2={80} stroke="#1f2937" strokeWidth={2} />
                <rect x={40} y={30} width={16.7} height={50} fill="none" stroke="#f59e0b" strokeWidth={2} />
                <rect x={73.3} y={30} width={16.7} height={50} fill="none" stroke="#f59e0b" strokeWidth={2} />
      
                <rect x={114} y={20} width={70} height={70} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={124} y={30} width={50} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={124} y1={42.5} x2={174} y2={42.5} stroke="#1f2937" strokeWidth={2} />
                <line x1={124} y1={55} x2={174} y2={55} stroke="#1f2937" strokeWidth={2} />
                <line x1={124} y1={67.5} x2={174} y2={67.5} stroke="#1f2937" strokeWidth={2} />
      
                <rect x={198} y={20} width={70} height={70} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={208} y={30} width={50} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={224.7} y1={30} x2={224.7} y2={80} stroke="#1f2937" strokeWidth={2} />
                <line x1={241.3} y1={30} x2={241.3} y2={80} stroke="#1f2937" strokeWidth={2} />
                <line x1={208} y1={42.5} x2={258} y2={42.5} stroke="#1f2937" strokeWidth={2} />
                <line x1={208} y1={55} x2={258} y2={55} stroke="#1f2937" strokeWidth={2} />
                <line x1={208} y1={67.5} x2={258} y2={67.5} stroke="#1f2937" strokeWidth={2} />
                <rect x={208} y={30} width={16.7} height={50} fill="none" stroke="#f59e0b" strokeWidth={2} />
                <rect x={241.3} y={30} width={16.7} height={50} fill="none" stroke="#f59e0b" strokeWidth={2} />
      
                
                <rect x={282} y={20} width={70} height={70} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={292} y={30} width={50} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
                <rect x={292} y={30} width={16.7} height={50} fill="#e5e7eb" stroke="#6b7280" strokeWidth={1.5} />
                <line x1={308.7} y1={30} x2={308.7} y2={80} stroke="#1f2937" strokeWidth={2} />
      
                <rect x={366} y={20} width={70} height={70} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={376} y={30} width={50} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={376} y1={30} x2={426} y2={80} stroke="#1f2937" strokeWidth={2} />
                <line x1={426} y1={30} x2={401} y2={80} stroke="#1f2937" strokeWidth={2} />
      
                <rect x={450} y={20} width={70} height={70} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <text x={485} y={68} textAnchor="middle" fontSize={30} fontWeight="700" fill="#1f2937">?</text>
              </g>
      </svg>
              <figcaption>图：题干图形（前 3 幅为第一组，后 2 幅 + 问号为第二组；橙色框＝相同区域）</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 472 134.7" role="img" aria-label="四个选项">
      <g transform="translate(0,2)">
                <rect x={110} y={20} width={70} height={70} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={120} y={30} width={50} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
                <rect x={120} y={30} width={16.7} height={50} fill="#e5e7eb" stroke="#6b7280" strokeWidth={1.5} />
                <line x1={136.7} y1={30} x2={136.7} y2={80} stroke="#1f2937" strokeWidth={2} />
                <line x1={120} y1={30} x2={170} y2={80} stroke="#1f2937" strokeWidth={2} />
                <text x={145} y={107} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">A</text>
      
                <rect x={200} y={20} width={70} height={70} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={210} y={30} width={50} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={226.7} y1={30} x2={226.7} y2={80} stroke="#1f2937" strokeWidth={2} />
                <line x1={243.3} y1={30} x2={243.3} y2={80} stroke="#1f2937" strokeWidth={2} />
                <text x={235} y={107} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">B</text>
      
                <rect x={290} y={20} width={70} height={70} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={300} y={30} width={50} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={300} y1={30} x2={350} y2={80} stroke="#1f2937" strokeWidth={2} />
                <text x={325} y={107} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">C</text>
      
                <rect x={380} y={20} width={70} height={70} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={390} y={30} width={50} height={50} fill="none" stroke="#1f2937" strokeWidth={2} />
                <text x={415} y={107} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">D</text>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D</figcaption>
            </figure>
            <ExampleAnswer>
              <b>解析：</b>题干为“<b>两组式</b>”，图形都由同一种“方框 + 内部线条”构成，属于“<b>部分一样</b>”→ 走“<b>样式（运算）</b>”。第一组：第 1 幅（两条竖线）与第 2 幅（三条横线）<b>直接叠加</b>得到第 3 幅（竖线 + 横线同时在），即“<b>叠加</b>”。
              第二组照此办理：第 1 幅（左侧灰条 + 一条竖线）与第 2 幅（一条对角线 + 一条斜线）叠加，结果必须同时保留“左侧灰条 + 竖线 + 对角线”。B 少了灰条和对角线，C 少了灰条和竖线，D 内部全空，只有 A 完全吻合。
              <br /><span className="correct">答案：A</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题4 · 属性·对称轴数量（讲义例题）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性（图中数字为该图形的对称轴条数）：</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 597 145.5" role="img" aria-label="题干图形：对称轴数量依次递减">
      <g transform="translate(0,13.5)">
                
                <rect x={45} y={30} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <text x={85} y={22} textAnchor="middle" fontSize={14} fontWeight="700" fill="#f59e0b">6</text>
                <polygon points="85,46 109,86 61,86" fill="none" stroke="#1f2937" strokeWidth={2} />
                <polygon points="85,94 109,54 61,54" fill="none" stroke="#1f2937" strokeWidth={2} />
      
                
                <rect x={135} y={30} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <text x={175} y={22} textAnchor="middle" fontSize={14} fontWeight="700" fill="#f59e0b">5</text>
                <circle cx={175} cy={70} r={28} fill="none" stroke="#1f2937" strokeWidth={2} />
                <polygon points="175,48 189,87 157,63 193,63 161,87" fill="none" stroke="#2563eb" strokeWidth={1.8} />
      
                
                <rect x={225} y={30} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <text x={265} y={22} textAnchor="middle" fontSize={14} fontWeight="700" fill="#f59e0b">4</text>
                <rect x={239} y={44} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2} />
                <rect x={251} y={56} width={28} height={28} fill="none" stroke="#2563eb" strokeWidth={1.8} />
                <line x1={239} y1={44} x2={291} y2={96} stroke="#1f2937" strokeWidth={1.6} />
                <line x1={291} y1={44} x2={239} y2={96} stroke="#1f2937" strokeWidth={1.6} />
      
                
                <rect x={315} y={30} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <text x={355} y={22} textAnchor="middle" fontSize={14} fontWeight="700" fill="#f59e0b">3</text>
                <circle cx={355} cy={70} r={28} fill="none" stroke="#1f2937" strokeWidth={2} />
                <polygon points="355,46 380,86 330,86" fill="none" stroke="#2563eb" strokeWidth={1.8} />
      
                
                <rect x={405} y={30} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <text x={445} y={22} textAnchor="middle" fontSize={14} fontWeight="700" fill="#f59e0b">2</text>
                <polygon points="445,40 453,60 471,70 453,80 445,100 437,80 419,70 437,60" fill="none" stroke="#1f2937" strokeWidth={2} />
      
                
                <rect x={495} y={30} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <text x={535} y={22} textAnchor="middle" fontSize={14} fontWeight="700" fill="#f59e0b">?</text>
                <text x={535} y={80} textAnchor="middle" fontSize={30} fontWeight="700" fill="#1f2937">?</text>
              </g>
      </svg>
              <figcaption>图：题干图形（橙字为该图的对称轴条数）</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 522 146.7" role="img" aria-label="四个选项">
      <g transform="translate(0,8)">
                <rect x={120} y={14} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polygon points="140,34 140,74 160,54" fill="none" stroke="#1f2937" strokeWidth={2} />
                <polygon points="180,34 180,74 160,54" fill="none" stroke="#1f2937" strokeWidth={2} />
                <text x={160} y={114} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">A</text>
      
                <rect x={220} y={14} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <circle cx={260} cy={54} r={26} fill="none" stroke="#1f2937" strokeWidth={2} />
                <path d="M242,54 L278,54 A18,18 0 0 1 242,54 Z" fill="none" stroke="#2563eb" strokeWidth={2} />
                <text x={260} y={114} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">B</text>
      
                <rect x={320} y={14} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <rect x={334} y={28} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={2} />
                <polygon points="340,34 340,74 360,54" fill="none" stroke="#2563eb" strokeWidth={2} />
                <polygon points="380,34 380,74 360,54" fill="none" stroke="#2563eb" strokeWidth={2} />
                <text x={360} y={114} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">C</text>
      
                <rect x={420} y={14} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <circle cx={460} cy={54} r={24} fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={460} y1={30} x2={460} y2={78} stroke="#2563eb" strokeWidth={1.8} />
                <line x1={460} y1={54} x2={481} y2={42} stroke="#2563eb" strokeWidth={1.8} />
                <line x1={460} y1={54} x2={481} y2={66} stroke="#2563eb" strokeWidth={1.8} />
                <text x={460} y={114} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">D</text>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D</figcaption>
            </figure>
            <ExampleAnswer>
              <b>解析：</b>题干图形都很规整、对称 → 走“<b>属性</b>”，先识别（都是轴对称图形），再<b>后细化</b>：数对称轴条数。讲义在图上方直接标出：<b>6、5、4、3、2</b>，依次递减 1，所以问号处应是 <b>1 条对称轴</b>的图形。
              A 是左右两个三角形组成的“蝴蝶结”，有水平、竖直 2 条轴；C 是正方形内嵌蝴蝶结，有 2 条轴；D 是圆内三条辐条（近似三轮辐），有 3 条轴；B 是圆内一个下半圆盘，只有 1 条竖直对称轴。
              <br /><span className="correct">答案：B</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题5 · 数量 + 属性·最大面是轴对称图形（2025 国考执法卷）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 597 124" role="img" aria-label="题干图形：不规则多边形被分割，最大面为轴对称图形">
      <g transform="translate(0,2)">
                
                <rect x={45} y={20} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polygon points="59,32 85,32 97,60 85,88 59,88" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={79} y1={32} x2={79} y2={88} stroke="#1f2937" strokeWidth={2} />
                
                <rect x={135} y={20} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polygon points="149,62 175,30 201,62 201,88 149,88" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={149} y1={62} x2={201} y2={62} stroke="#1f2937" strokeWidth={2} />
                
                <rect x={225} y={20} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polygon points="239,32 291,32 291,56 269,56 269,88 239,88" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={239} y1={56} x2={291} y2={56} stroke="#1f2937" strokeWidth={2} />
                
                <rect x={315} y={20} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polygon points="329,34 375,34 361,88 343,88" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={329} y1={34} x2={375} y2={34} stroke="#1f2937" strokeWidth={2} />
                <line x1={337} y1={56} x2={369} y2={56} stroke="#1f2937" strokeWidth={2} />
                
                <rect x={405} y={20} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polygon points="419,30 471,30 457,58 471,86 419,86 433,58" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={419} y1={58} x2={471} y2={58} stroke="#1f2937" strokeWidth={2} />
                
                <rect x={495} y={20} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <text x={535} y={70} textAnchor="middle" fontSize={30} fontWeight="700" fill="#1f2937">?</text>
              </g>
      </svg>
              <figcaption>图：题干图形（每幅图都被分割成若干面，其中面积最大的那个面是轴对称图形）</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 512 139.7" role="img" aria-label="四个选项">
      <g transform="translate(0,2)">
                <rect x={110} y={20} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polygon points="124,32 154,32 166,44 154,52 166,60 154,88 136,80 124,88" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={124} y1={52} x2={166} y2={52} stroke="#1f2937" strokeWidth={2} />
                <text x={150} y={113} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">A</text>
      
                <rect x={210} y={20} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polygon points="224,30 276,30 276,86 250,86 250,56 224,56" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={224} y1={44} x2={276} y2={44} stroke="#1f2937" strokeWidth={2} />
                <text x={250} y={113} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">B</text>
      
                <rect x={310} y={20} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polygon points="326,74 356,74 380,60 350,60 350,32 326,46" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={326} y1={60} x2={350} y2={60} stroke="#1f2937" strokeWidth={2} />
                <text x={350} y={113} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">C</text>
      
                <rect x={410} y={20} width={80} height={80} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                <polygon points="424,32 476,32 476,66 448,86 424,66" fill="none" stroke="#1f2937" strokeWidth={2} />
                <line x1={424} y1={52} x2={476} y2={52} stroke="#1f2937" strokeWidth={2} />
                <text x={450} y={113} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">D</text>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D</figcaption>
            </figure>
            <ExampleAnswer>
              <b>解析：</b>题干 5 幅图都由不规则外轮廓 + 内部线条分割成多个面，且每幅图的<b>面数量/形状无规律递增</b>，说明考的<b>不是面数量，而是面的“属性”</b>——讲义标注为“<b>最大面 + 轴对称</b>”：<b>每幅图中面积最大的那个面，都是轴对称图形</b>（图1 最大面是左右对称的长方形；图2 是左右对称的方形；图3、图4、图5 的最大面也都关于一条轴线左右对称）。
              逐项检验：B 的最大面是“L 形”，不是轴对称图形；C 的最大面是平行四边形（只有中心对称、没有对称轴）；D 的最大面是一个不规则五边形，也不对称。只有 A 的最大面是左右对称的图形。
              <br /><span className="correct">答案：A</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题6 · 综合（立体截面，2025 国考执法卷 81 题）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>左边为给定的多面体，现用经 P、Q、R 三点的平面对其进行切割，问哪个选项是其切面？</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 270.8 273" role="img" aria-label="给定的多面体（等轴测示意）">
                
                <polygon points="170,200 200,217 200,183 170,166" fill="#f9fafb" stroke="#1f2937" strokeWidth={2} />
                
                <polygon points="200,217 170,234 170,200 200,183" fill="#eef2ff" stroke="#1f2937" strokeWidth={2} />
                
                <polygon points="170,132 200,149 170,166 140,149" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                
                <polygon points="170,200 140,217 140,183 170,166" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                
                <polygon points="200,217 230,234 230,200 200,183" fill="#f9fafb" stroke="#1f2937" strokeWidth={2} />
                
                <polygon points="200,183 230,200 200,217 170,200" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                
                <polygon points="230,234 200,251 200,217 230,200" fill="#eef2ff" stroke="#1f2937" strokeWidth={2} />
                
                <line x1={140} y1={183} x2={140} y2={217} stroke="#6b7280" strokeWidth={1.5} strokeDasharray="4 3" />
                <line x1={170} y1={166} x2={140} y2={183} stroke="#6b7280" strokeWidth={1.5} strokeDasharray="4 3" />
                
                <circle cx={140} cy={217} r={3.5} fill="#ef4444" />
                <circle cx={170} cy={234} r={3.5} fill="#10b981" />
                <circle cx={230} cy={200} r={3.5} fill="#7c3aed" />
                <text x={122.0} y={193.5} fontSize={16} fontWeight="700" fill="#ef4444">P</text>
                <text x={170.0} y={193.5} fontSize={16} fontWeight="700" fill="#10b981">Q</text>
                <text x={238.0} y={193.5} fontSize={16} fontWeight="700" fill="#7c3aed">R</text>
              </svg>
              <figcaption>图：给定多面体与 P、Q、R 三点（等轴测示意）</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 450 137" role="img" aria-label="四个选项的切面形状">
                
                <path d="M120,24 L170,24 L170,52 L146,52 L146,72 L132,72 L132,52 L120,52 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
                <text x={145} y={102} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">A</text>
                
                <path d="M210,24 L232,24 L232,44 L252,44 L252,56 L242,56 L242,72 L228,72 L228,56 L210,56 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
                <text x={231} y={102} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">B</text>
                
                <path d="M300,72 L300,50 L316,30 L336,40 L336,56 L352,56 L352,72 L328,72 L328,80 L314,80 L314,72 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
                <text x={326} y={112} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">C</text>
                
                <rect x={396} y={22} width={26} height={16} fill="none" stroke="#1f2937" strokeWidth={2} />
                <path d="M390,44 L428,44 L428,58 L412,58 L412,76 L398,76 L398,58 L390,58 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
                <text x={409} y={102} textAnchor="middle" fontSize={15} fontWeight="700" fill="#1f2937">D</text>
              </svg>
              <figcaption>选项 A / B / C / D（切面形状）</figcaption>
            </figure>
            <ExampleAnswer>
              <b>解析：</b>立体截面题仍走“<b>先分类、后验证</b>”的路子：先看这个多面体是个“<b>阶梯状</b>”的方块组合（高的一块 + 矮的一块），再想经 P、Q、R 三点的平面切下去会切到哪些面。
              经 P（左侧底角）、Q（正面底边中点）、R（右侧面）三点作截面，切面必然“从左侧竖直面进入 → 经过台阶的竖直立面 → 从右侧面切出”，所以切面轮廓应是：<b>上部一块较宽的矩形 + 下部偏左伸出一个方形小凸角</b>。
              B、C 的凸角位置不对（B 在右下、C 在下方且上部带斜边），D 的图形被拆成了两块（不可能是一刀切出的连通切面），只有 A 与推理吻合。
              <br /><span className="correct">答案：A</span>
            </ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
            <Block>
        <BlockTitle>补充1. 题面勘误 · 两处印刷错误（《超大杯图推【错误纠正】》）</BlockTitle>
        <p>超大杯单独发过一页《错误纠正》，通篇只有两条，但两条都是<strong>图形本身印错了</strong>的硬伤——不是你不会推，是题目坏了。这两条必须记住，否则会一直怀疑自己的判断。</p>
        <p><b>勘误一（梯度刷题六 · 第五套第21题 · P59）：</b>选项印刷错误，"少了数字"，四个选项里的 1/2/3/4 没印出来。原题选项应为 <b>A.1　B.2　C.3　D.4</b>。题干是「以下 4 个图形中，在图中选择两个点并用直线连接后，能成为轴对称图形的有几个」。</p>
        <p><b>勘误二（梯度刷题三 · 第16题 · P26）：</b>第 <b>⑥</b> 幅图<b>缺了个外框</b>。⑥ 原本应当和 ①③④ 一样带一个正方（梯）形外框；外框一缺，"有框 / 无框"这条规律就被破坏了，所以很多人怎么数都对不上。</p>
        <Callout variant="key">考场经验：遇到"六个图里五个都带外框、偏偏就一个不带"，先怀疑是不是印错了，不要硬凑规律。<br />外框是高频切入点——框点、框内面、框内线、框的边数，都属于"外框类"考法。</Callout>
        <figure className="fig"><svg viewBox="0 0 450.5 161" role="img" aria-label="第六幅图缺失外框示意图">
      <g transform="translate(0,1)">
          <text x={90} y={34} fontSize={13} fill="#1f2937" textAnchor="middle">③ 有外框</text>
          <text x={230} y={34} fontSize={13} fill="#1f2937" textAnchor="middle">④ 有外框</text>
          <text x={370} y={34} fontSize={13} fill="#ef4444" textAnchor="middle">⑥ 缺外框</text>
          <rect x={55} y={46} width={70} height={70} fill="none" stroke="#1f2937" strokeWidth={1.8} />
          <polygon points="70,58 110,58 90,74" fill="none" stroke="#2563eb" strokeWidth={1.8} />
          <polygon points="70,104 110,104 90,88" fill="none" stroke="#2563eb" strokeWidth={1.8} />
          <rect x={195} y={46} width={70} height={70} fill="none" stroke="#1f2937" strokeWidth={1.8} />
          <rect x={215} y={66} width={30} height={30} fill="none" stroke="#2563eb" strokeWidth={1.8} />
          <rect x={335} y={46} width={70} height={70} fill="none" stroke="#ef4444" strokeWidth={1.6} strokeDasharray="5 4" />
          <polygon points="352,108 392,108 384,62 360,62" fill="none" stroke="#1f2937" strokeWidth={1.8} />
          <path d="M367,78 a7,7 0 1,0 0,14" fill="none" stroke="#2563eb" strokeWidth={1.6} />
          <path d="M379,78 a7,7 0 1,1 0,14" fill="none" stroke="#2563eb" strokeWidth={1.6} />
          <text x={90} y={136} fontSize={11.5} fill="#6b7280" textAnchor="middle">矩形框内 上▽下△</text>
          <text x={230} y={136} fontSize={11.5} fill="#6b7280" textAnchor="middle">矩形框内 小矩形</text>
          <text x={370} y={136} fontSize={11.5} fill="#ef4444" textAnchor="middle">梯形内 2 段弧（无框）</text>
        </g>
      </svg><figcaption>图：③④ 为原样，⑥ 的外框被漏印（红色虚线为应补上的外框）</figcaption></figure>
      </Block>
            <Block>
        <BlockTitle>补充2. 图推总框架 · 三句定位法（"完全一样 / 部分一样 / 完全不一样"）</BlockTitle>
        <p>刘义恒讲课反复用的一句话是"<b>没有思路，用宏观；直接定位，用微观</b>"。宏观靠的就是下面这三句：拿到一组图，第一眼只判断"图与图之间像不像"。</p>
        <p><b>第一句 · 完全一样</b>（每一幅都由相同图案组成，只是位置变了）→ 直接进<b>位置</b>：平移、旋转、翻转；如果逐幅比对发现"每次只动一点点"，就是<b>相邻比较</b>。</p>
        <p><b>第二句 · 部分一样</b>（有相同的图案/线条，也有不同的）→ 进<b>样式</b>：黑白运算、加减同异；如果相同图案被"抓"出来了，就是<b>标记</b>。</p>
        <p><b>第三句 · 完全不一样</b>（图案各异、很凌乱）→ 依次看<b>属性</b>（对称 → 曲直 → 开闭）、<b>数量</b>（面 → 笔画 → 点 → 线 → 元素 → 直角）、<b>图形间位置</b>。</p>
        <Callout variant="key">口诀：<b>先看像不像 → 一样走位置、半像走样式、全不像走属性/数量</b>。<br />第二道筛子：<b>只有交点/香蕉状</b>→想笔画、点、面、线；<b>多端点</b>→想一笔画；<b>日字、田字、圆相切</b>→一笔画特征图；<b>直角三角形、十字架、矩形外框</b>→想直角。</Callout>
        <figure className="fig"><svg viewBox="0 0 464 219.1" role="img" aria-label="图推三句定位框架图">
      <g transform="translate(2,5.1)">
          <text x={85} y={30} fontSize={13} fill="#2563eb" textAnchor="middle">完全一样</text>
          <text x={230} y={30} fontSize={13} fill="#10b981" textAnchor="middle">部分一样</text>
          <text x={375} y={30} fontSize={13} fill="#f59e0b" textAnchor="middle">完全不一样</text>
          <rect x={20} y={42} width={130} height={150} rx={6} fill="none" stroke="#2563eb" strokeWidth={1.4} />
          <rect x={165} y={42} width={130} height={150} rx={6} fill="none" stroke="#10b981" strokeWidth={1.4} />
          <rect x={310} y={42} width={130} height={150} rx={6} fill="none" stroke="#f59e0b" strokeWidth={1.4} />
          <text x={30} y={70} fontSize={11.5} fill="#1f2937">位置</text>
          <text x={38} y={92} fontSize={11.5} fill="#6b7280">平移（内 / 外）</text>
          <text x={38} y={114} fontSize={11.5} fill="#6b7280">旋转 · 翻转</text>
          <text x={30} y={136} fontSize={11.5} fill="#1f2937">相邻比较</text>
          <text x={175} y={70} fontSize={11.5} fill="#1f2937">样式（运算）</text>
          <text x={183} y={92} fontSize={11.5} fill="#6b7280">黑白运算</text>
          <text x={183} y={114} fontSize={11.5} fill="#6b7280">加减同异</text>
          <text x={175} y={136} fontSize={11.5} fill="#1f2937">标记</text>
          <text x={320} y={70} fontSize={11.5} fill="#1f2937">属性</text>
          <text x={330} y={92} fontSize={11} fill="#6b7280">对称 · 曲直 · 开闭</text>
          <text x={320} y={114} fontSize={11.5} fill="#1f2937">数量</text>
          <text x={330} y={136} fontSize={11} fill="#6b7280">面 · 线 · 点 · 笔画</text>
          <text x={330} y={158} fontSize={11} fill="#6b7280">元素 · 直角</text>
          <text x={320} y={180} fontSize={11.5} fill="#1f2937">图形间位置</text>
        </g>
      </svg><figcaption>图：三句定位法 → 对应考点分支</figcaption></figure>
      </Block>
    </>
  )
}
