import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleQuestion, PointList } from '@/components/content'

/**
 * 二、样式规律 + 标记
 *
 * @returns 该节正文。
 */
export default function S3(): ReactElement {
  return (
    <>
      <Block>
        <BlockTitle>1. 样式规律（运算）总览：先判断"有没有一样的图案"</BlockTitle>
        <p>样式规律属于"图形有一样的地方"时优先考虑的规律。它的命题者作图特点非常鲜明：<b>每幅图的图案部分一样</b>——要么线条长得像、位置对应，要么都是一些小黑块重复出现。凡是遇到"几幅图长得像一家人"的题，思路就要立刻切到"样式运算"上来。</p>
        <PointList>
          <li><b>考点①　加减同异</b>：出题者作图以<b>线条居多</b>，图案部分一样且位置对应。</li>
          <li><b>考点②　黑白运算</b>：出题者作图以<b>黑块居多</b>，图形轮廓和分割区域相同，但黑块个数不同。</li>
        </PointList>
        <Callout variant="formula"><span className="formula">加减同异 4 式：①相加　②相减/求异（去掉相同线条）　③求同（保留相同线条）　④求异（相同删除，再重组）</span></Callout>
        <p>把两个图形看成两个"集合"，四则运算就是它们之间的四种关系（下图即讲义板书示意，绿色线条代表"相同线条"）：</p>
        <figure className="fig">
          <svg viewBox="0 0 456 284" role="img" aria-label="加减同异的四种运算法则示意">
      <g transform="translate(4,7)">
            <defs>
              <marker id="L2-b1-ar" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <path d="M0,0 L7,3 L0,6 z" fill="#6b7280" />
              </marker>
            </defs>
            
            <text x={18} y={42} fill="#1f2937" fontSize={15}>①相加</text>
            <g transform="translate(80,15)">
              <rect x={0} y={0} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
              <line x1={22} y1={0} x2={22} y2={44} stroke="#10b981" strokeWidth={2} />
              <line x1={0} y1={22} x2={44} y2={22} stroke="#10b981" strokeWidth={2} />
            </g>
            <text x={132} y={44} fill="#6b7280" fontSize={20}>＋</text>
            <g transform="translate(156,15)">
              <polygon points="22,0 44,22 22,44 0,22" fill="none" stroke="#1f2937" strokeWidth={2} />
              <line x1={22} y1={0} x2={22} y2={44} stroke="#10b981" strokeWidth={2} />
              <line x1={0} y1={22} x2={44} y2={22} stroke="#10b981" strokeWidth={2} />
            </g>
            <text x={210} y={44} fill="#6b7280" fontSize={20}>=</text>
            <g transform="translate(240,15)">
              <rect x={0} y={0} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
              <line x1={22} y1={0} x2={22} y2={44} stroke="#1f2937" strokeWidth={2} />
              <line x1={0} y1={22} x2={44} y2={22} stroke="#1f2937" strokeWidth={2} />
              <polygon points="22,0 44,22 22,44 0,22" fill="none" stroke="#1f2937" strokeWidth={2} />
            </g>
            <text x={300} y={44} fill="#6b7280" fontSize={13}>两图线条全部保留</text>
            
            <text x={18} y={122} fill="#1f2937" fontSize={15}>②求同</text>
            <g transform="translate(80,95)">
              <rect x={0} y={0} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
              <line x1={22} y1={0} x2={22} y2={44} stroke="#10b981" strokeWidth={2} />
              <line x1={0} y1={22} x2={44} y2={22} stroke="#10b981" strokeWidth={2} />
            </g>
            <text x={132} y={124} fill="#6b7280" fontSize={20}>＋</text>
            <g transform="translate(156,95)">
              <polygon points="22,0 44,22 22,44 0,22" fill="none" stroke="#1f2937" strokeWidth={2} />
              <line x1={22} y1={0} x2={22} y2={44} stroke="#10b981" strokeWidth={2} />
              <line x1={0} y1={22} x2={44} y2={22} stroke="#10b981" strokeWidth={2} />
            </g>
            <text x={210} y={124} fill="#6b7280" fontSize={20}>=</text>
            <g transform="translate(240,95)">
              <line x1={22} y1={0} x2={22} y2={44} stroke="#10b981" strokeWidth={2} />
              <line x1={0} y1={22} x2={44} y2={22} stroke="#10b981" strokeWidth={2} />
            </g>
            <text x={300} y={124} fill="#6b7280" fontSize={13}>相同保留（只剩十字）</text>
            
            <text x={18} y={202} fill="#1f2937" fontSize={15}>③求异</text>
            <g transform="translate(80,175)">
              <rect x={0} y={0} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
              <line x1={22} y1={0} x2={22} y2={44} stroke="#10b981" strokeWidth={2} />
              <line x1={0} y1={22} x2={44} y2={22} stroke="#10b981" strokeWidth={2} />
            </g>
            <text x={132} y={204} fill="#6b7280" fontSize={20}>＋</text>
            <g transform="translate(156,175)">
              <polygon points="22,0 44,22 22,44 0,22" fill="none" stroke="#1f2937" strokeWidth={2} />
              <line x1={22} y1={0} x2={22} y2={44} stroke="#10b981" strokeWidth={2} />
              <line x1={0} y1={22} x2={44} y2={22} stroke="#10b981" strokeWidth={2} />
            </g>
            <text x={210} y={204} fill="#6b7280" fontSize={20}>=</text>
            <g transform="translate(240,175)">
              <rect x={0} y={0} width={44} height={44} fill="none" stroke="#1f2937" strokeWidth={2} />
              <polygon points="22,0 44,22 22,44 0,22" fill="none" stroke="#1f2937" strokeWidth={2} />
            </g>
            <text x={300} y={204} fill="#6b7280" fontSize={13}>相同删除、再重组</text>
            <text x={18} y={252} fill="#7c3aed" fontSize={13}>答题思路：确定"加减同异"后，第一步先看图1与图2是否有相同线条。</text>
          </g>
      </svg>
          <figcaption>图：加减同异四种运算示意图</figcaption>
        </figure>
        <Callout variant="key"><b>判定口诀：</b>图案部分一样 + 位置对应 → 想"加减同异"；图案一样、轮廓相同但黑块个数变了 → 想"黑白运算"。</Callout>
      </Block>
      
      <Block>
        <BlockTitle>2. 加减同异 · 基础：相加 / 求同 / 求异</BlockTitle>
        <p><b>命题者作图特点：</b>图案部分一样（线条居多），且位置对应。</p>
        <PointList>
          <li><b>相加：</b>两图线条全部叠上去（又叫"叠加"）。</li>
          <li><b>相减 / 求异：</b>去掉相同线条，保留不同线条。区别在于<b>"是否重新组合"</b>——求异要把剩下的线条重新拼回一个完整图形。</li>
          <li><b>求同：</b>只保留两幅图相同的线条。</li>
        </PointList>
        <Callout variant="tip"><b>答题思路：</b>优先看"前两幅图 − 相同部分"。<b>求异是高频考点</b>；<b>出题形式：</b>两组图、九宫格；九宫格中若横向走不通，立刻换<b>纵向</b>（去同存异）。</Callout>
        <Callout variant="formula"><span className="formula">求异/相减的"特殊情况"：两图毫无相同线条时，求异的结果＝两图直接叠加。</span></Callout>
      
        <Example>
          <ExampleHeader>📝 例题1 · 加减同异（相加 · 2024 联考-89%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 474 128" role="img" aria-label="题干两组图形">
      <g transform="translate(14,18)">
                <defs>
                  <pattern id="L2-e1-hatch" width={6} height={6} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1={0} y1={0} x2={0} y2={6} stroke="#1f2937" strokeWidth={1.6} />
                  </pattern>
                </defs>
                <text x={8} y={16} fill="#6b7280" fontSize={12}>第一组（提示规律）</text>
                
                <g transform="translate(8,28)">
                  <rect x={0} y={0} width={60} height={60} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                  <rect x={4} y={4} width={13} height={52} fill="#9ca3af" stroke="#1f2937" strokeWidth={1.2} />
                  <rect x={17} y={4} width={13} height={52} fill="#ffffff" stroke="#1f2937" strokeWidth={1.2} />
                  <rect x={30} y={4} width={13} height={52} fill="#ffffff" stroke="#1f2937" strokeWidth={1.2} />
                  <rect x={43} y={4} width={13} height={52} fill="#9ca3af" stroke="#1f2937" strokeWidth={1.2} />
                </g>
                
                <g transform="translate(74,28)">
                  <rect x={0} y={0} width={60} height={60} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                  <rect x={4} y={4} width={52} height={13} fill="#9ca3af" stroke="#1f2937" strokeWidth={1.2} />
                  <rect x={4} y={17} width={52} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.2} />
                  <rect x={4} y={30} width={52} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.2} />
                  <rect x={4} y={43} width={52} height={13} fill="#9ca3af" stroke="#1f2937" strokeWidth={1.2} />
                </g>
                
                <g transform="translate(140,28)">
                  <rect x={0} y={0} width={60} height={60} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                  <rect x={4} y={4} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={1.2} />
                  <rect x={4} y={4} width={13} height={52} fill="#9ca3af" stroke="#1f2937" strokeWidth={1} />
                  <rect x={43} y={4} width={13} height={52} fill="#9ca3af" stroke="#1f2937" strokeWidth={1} />
                  <rect x={17} y={4} width={26} height={13} fill="#9ca3af" stroke="#1f2937" strokeWidth={1} />
                  <rect x={17} y={43} width={26} height={13} fill="#9ca3af" stroke="#1f2937" strokeWidth={1} />
                  <rect x={17} y={17} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1} />
                  <rect x={30} y={17} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1} />
                  <rect x={17} y={30} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1} />
                  <rect x={30} y={30} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1} />
                </g>
                <text x={246} y={16} fill="#6b7280" fontSize={12}>第二组（求问号）</text>
                
                <g transform="translate(246,28)">
                  <rect x={0} y={0} width={60} height={60} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                  <rect x={0} y={0} width={30} height={60} fill="#9ca3af" stroke="none" />
                  <line x1={30} y1={0} x2={30} y2={60} stroke="#1f2937" strokeWidth={2} />
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={2} />
                </g>
                
                <g transform="translate(312,28)">
                  <rect x={0} y={0} width={60} height={60} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="0,0 30,0 0,60" fill="#9ca3af" />
                  <polygon points="30,0 60,0 60,60" fill="#9ca3af" />
                  <line x1={30} y1={0} x2={0} y2={60} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={0} x2={60} y2={60} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={0} x2={30} y2={60} stroke="#1f2937" strokeWidth={2} />
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={2} />
                </g>
                <rect x={378} y={28} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={2} />
                <text x={398} y={66} fill="#1f2937" fontSize={22}>?</text>
              </g>
      </svg>
              <figcaption>图：题干两组图形</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 427 122" role="img" aria-label="四个选项图形">
      <g transform="translate(0,2)">
                <g transform="translate(60,20)">
                  <rect x={0} y={0} width={60} height={60} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                  <rect x={0} y={0} width={30} height={60} fill="#9ca3af" />
                  <polygon points="30,0 60,0 60,60" fill="#9ca3af" />
                  <line x1={30} y1={0} x2={30} y2={60} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={0} x2={60} y2={60} stroke="#1f2937" strokeWidth={2} />
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(155,20)">
                  <rect x={0} y={0} width={60} height={60} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                  <rect x={0} y={0} width={20} height={60} fill="#9ca3af" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={20} y={0} width={22} height={60} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={42} y={0} width={18} height={60} fill="#9ca3af" stroke="#1f2937" strokeWidth={1.5} />
                </g>
                <g transform="translate(250,20)">
                  <rect x={0} y={0} width={60} height={60} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="0,0 60,0 60,60" fill="#9ca3af" />
                  <line x1={0} y1={0} x2={60} y2={60} stroke="#1f2937" strokeWidth={2} />
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(345,20)">
                  <polygon points="0,60 18,0 42,0 60,60" fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="0,0 18,0 0,60" fill="#9ca3af" />
                  <polygon points="42,0 60,0 60,60" fill="#9ca3af" />
                  <line x1={18} y1={0} x2={0} y2={60} stroke="#1f2937" strokeWidth={2} />
                  <line x1={42} y1={0} x2={60} y2={60} stroke="#1f2937" strokeWidth={2} />
                </g>
                <text x={83} y={95} fill="#1f2937" fontSize={13}>A</text>
                <text x={178} y={95} fill="#1f2937" fontSize={13}>B</text>
                <text x={273} y={95} fill="#1f2937" fontSize={13}>C</text>
                <text x={368} y={95} fill="#1f2937" fontSize={13}>D</text>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D</figcaption>
            </figure>
            <ExampleAnswer><b>解析：</b>第一组中图1（竖条纹）与图2（横条纹）叠加得到图3（外圈灰、内部田字白格），即<b>相加（叠加）</b>——竖线＋横线拼成网格，灰色区域取并集。<br />第二组：图1是"左半灰＋中竖线"，图2是"顶尖在中、两侧灰三角＋中竖线"，两图叠加后：左半仍为灰（图2那条尖到底边左角的斜线被灰覆盖），右半保留"顶尖→右下角"的斜线，且斜线右上方的三角区域为灰。<span className="correct">答案：A</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题2 · 加减同异（求同 · 2025 广东-56%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>下列选项中最符合所给图形规律的是：</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 478 119.1" role="img" aria-label="题干两组图形">
      <g transform="translate(14,19.1)">
                <text x={8} y={14} fill="#6b7280" fontSize={12}>第一组</text>
                
                <g transform="translate(8,22)">
                  <rect x={0} y={0} width={60} height={56} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="6,52 30,52 18,34" fill="#9ca3af" />
                  <polygon points="18,10 52,16 28,52" fill="#1f2937" />
                </g>
                <g transform="translate(76,22)">
                  <rect x={0} y={0} width={60} height={56} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="10,54 34,54 22,36" fill="#9ca3af" />
                  <polygon points="16,8 52,18 30,54" fill="#1f2937" />
                </g>
                <g transform="translate(144,22)">
                  <rect x={0} y={0} width={60} height={56} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="8,56 32,56 20,40" fill="#9ca3af" stroke="#ffffff" strokeWidth={2} />
                  <polygon points="16,10 50,14 28,50" fill="#1f2937" />
                </g>
                <text x={246} y={14} fill="#6b7280" fontSize={12}>第二组</text>
                
                <g transform="translate(246,22)">
                  <rect x={0} y={0} width={60} height={56} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <circle cx={30} cy={28} r={24} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={6} y1={28} x2={54} y2={28} stroke="#1f2937" strokeWidth={2} />
                  <path d="M18,28 A12,12 0 0 1 42,28" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={4} x2={30} y2={28} stroke="#1f2937" strokeWidth={2} />
                </g>
                
                <g transform="translate(314,22)">
                  <rect x={0} y={0} width={60} height={56} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="30,3 57,28 30,53 3,28" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="30,13 45,28 30,43 15,28" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={3} y1={28} x2={57} y2={28} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={3} x2={30} y2={53} stroke="#1f2937" strokeWidth={2} />
                </g>
                <rect x={382} y={22} width={60} height={56} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                <text x={404} y={58} fill="#1f2937" fontSize={22}>?</text>
              </g>
      </svg>
              <figcaption>图：题干两组图形</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 431 121.4" role="img" aria-label="四个选项图形">
      <g transform="translate(0,2)">
                <g transform="translate(58,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <circle cx={30} cy={30} r={26} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="30,11 49,30 30,49 11,30" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <path d="M17,30 A13,13 0 0 1 43,30" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={4} x2={30} y2={56} stroke="#1f2937" strokeWidth={2} />
                  <line x1={4} y1={30} x2={56} y2={30} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={4} x2={4} y2={30} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={4} x2={56} y2={30} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(155,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <circle cx={30} cy={30} r={26} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={4} y1={30} x2={56} y2={30} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={4} x2={30} y2={30} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={4} x2={4} y2={30} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={4} x2={56} y2={30} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(252,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <path d="M18,34 A12,12 0 0 1 42,34" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={6} y1={34} x2={54} y2={34} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={22} x2={30} y2={34} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(349,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <line x1={6} y1={34} x2={54} y2={34} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={18} x2={30} y2={34} stroke="#1f2937" strokeWidth={2} />
                </g>
                <text x={83.0} y={94.4} fill="#1f2937" fontSize={13}>A</text>
                <text x={180.0} y={94.4} fill="#1f2937" fontSize={13}>B</text>
                <text x={277.0} y={94.4} fill="#1f2937" fontSize={13}>C</text>
                <text x={374.0} y={94.4} fill="#1f2937" fontSize={13}>D</text>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D</figcaption>
            </figure>
            <ExampleAnswer><b>解析：</b>第二组是"<b>求同</b>"。把图1（大圆＋水平直径＋上半小半圆＋上半竖线）与图2（外菱形＋内菱形＋完整的横线与竖线）重合比较，两者都有的线条是：<b>一条横线</b>和<b>竖线在上半部分的那一段</b>（图2里竖线被老师橙色标出的上段）。于是问号处只保留"横线＋上半竖线"，形如"⊥"倒过来。<br /><span className="correct">答案：D</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题3 · 加减同异（横向不行看纵向 · 求异 · 2024 联考-73%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 351 216" role="img" aria-label="三行三列九宫格">
      <g transform="translate(12,12)">
                <defs>
                  <g id="L2-e3-cellframe">
                    <rect x={0} y={0} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  </g>
                </defs>
                
                <g transform="translate(10,10)">
                  <use href="#L2-e3-cellframe" />
                  <circle cx={26} cy={26} r={21} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={5} y1={26} x2={47} y2={26} stroke="#1f2937" strokeWidth={2} />
                  <line x1={26} y1={5} x2={26} y2={47} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(70,10)">
                  <use href="#L2-e3-cellframe" />
                  <circle cx={26} cy={26} r={21} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={5} y1={26} x2={47} y2={26} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(130,10)">
                  <use href="#L2-e3-cellframe" />
                  <circle cx={26} cy={26} r={21} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={26} y1={5} x2={26} y2={47} stroke="#1f2937" strokeWidth={2} />
                </g>
                
                <g transform="translate(10,70)">
                  <use href="#L2-e3-cellframe" />
                  <line x1={4} y1={26} x2={48} y2={26} stroke="#1f2937" strokeWidth={2} />
                  <line x1={26} y1={4} x2={26} y2={48} stroke="#1f2937" strokeWidth={2} />
                  <polygon points="26,18 34,26 26,34 18,26" fill="none" stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(70,70)">
                  <use href="#L2-e3-cellframe" />
                  <line x1={4} y1={26} x2={48} y2={26} stroke="#1f2937" strokeWidth={2} />
                  <line x1={26} y1={4} x2={26} y2={48} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={10} x2={40} y2={20} stroke="#1f2937" strokeWidth={2} />
                  <line x1={12} y1={32} x2={22} y2={42} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(130,70)">
                  <use href="#L2-e3-cellframe" />
                  <line x1={4} y1={26} x2={48} y2={26} stroke="#1f2937" strokeWidth={2} />
                  <line x1={26} y1={4} x2={26} y2={48} stroke="#1f2937" strokeWidth={2} />
                  <line x1={12} y1={10} x2={22} y2={20} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={32} x2={40} y2={42} stroke="#1f2937" strokeWidth={2} />
                </g>
                
                <g transform="translate(10,130)">
                  <use href="#L2-e3-cellframe" />
                  <circle cx={26} cy={26} r={22} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="26,17 35,26 26,35 17,26" fill="none" stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(70,130)">
                  <use href="#L2-e3-cellframe" />
                  <circle cx={26} cy={26} r={22} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={26} y1={4} x2={26} y2={48} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={10} x2={40} y2={20} stroke="#1f2937" strokeWidth={2} />
                  <line x1={12} y1={32} x2={22} y2={42} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(130,130)">
                  <use href="#L2-e3-cellframe" />
                  <text x={20} y={34} fill="#1f2937" fontSize={20}>?</text>
                </g>
                <text x={200} y={80} fill="#7c3aed" fontSize={13}>横向找不出规律 →</text>
                <text x={200} y={100} fill="#7c3aed" fontSize={13}>改看纵向：去同存异</text>
              </g>
      </svg>
              <figcaption>图：题干九宫格</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 431 121.4" role="img" aria-label="四个选项图形">
      <g transform="translate(0,2)">
                <g transform="translate(58,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <circle cx={30} cy={30} r={26} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={4} y1={30} x2={56} y2={30} stroke="#1f2937" strokeWidth={2} />
                  <line x1={14} y1={14} x2={24} y2={24} stroke="#1f2937" strokeWidth={2} />
                  <line x1={36} y1={36} x2={46} y2={46} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(155,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <circle cx={30} cy={30} r={26} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={4} y1={30} x2={56} y2={30} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={4} x2={30} y2={56} stroke="#1f2937" strokeWidth={2} />
                  <line x1={14} y1={14} x2={24} y2={24} stroke="#1f2937" strokeWidth={2} />
                  <line x1={36} y1={36} x2={46} y2={46} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(252,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <circle cx={30} cy={30} r={26} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={4} x2={30} y2={56} stroke="#1f2937" strokeWidth={2} />
                  <line x1={14} y1={14} x2={24} y2={24} stroke="#1f2937" strokeWidth={2} />
                  <line x1={36} y1={36} x2={46} y2={46} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(349,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <circle cx={30} cy={30} r={26} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={4} y1={30} x2={56} y2={30} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={4} x2={30} y2={56} stroke="#1f2937" strokeWidth={2} />
                  <line x1={24} y1={16} x2={24} y2={26} stroke="#1f2937" strokeWidth={2} />
                  <line x1={36} y1={34} x2={36} y2={44} stroke="#1f2937" strokeWidth={2} />
                </g>
                <text x={83.0} y={94.4} fill="#1f2937" fontSize={13}>A</text>
                <text x={180.0} y={94.4} fill="#1f2937" fontSize={13}>B</text>
                <text x={277.0} y={94.4} fill="#1f2937" fontSize={13}>C</text>
                <text x={374.0} y={94.4} fill="#1f2937" fontSize={13}>D</text>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D</figcaption>
            </figure>
            <ExampleAnswer><b>解析：</b>横向（同一行内图1、图2→图3）逐一尝试都无法成立，说明规律在<b>纵向</b>。纵向做"去同存异"：<br />第一列：圆＋十字 与 正方形＋十字＋小菱形 去同存异 → 正方形＋内切圆＋小菱形，与第三行图1完全吻合，规律验证成立。<br />第二列：圆＋横线 与 正方形＋十字＋两条短斜线 去同存异（共同的横线删掉）→ 正方形＋内切圆＋竖线＋两条短斜线，与第三行图2吻合。<br />第三列：圆＋竖线 与 正方形＋十字＋两条短斜线（左上、右下）去同存异，公共的竖线删掉，剩下<b>正方形＋内切圆＋横线＋左上、右下两条短斜线</b>，对应 A。<br /><span className="correct">答案：A</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>3. 加减同异 · 拔高："图几转"</BlockTitle>
        <p>拔高题的套路是<b>加减同异 ＋ 旋转</b>。判断顺序不能乱：</p>
        <Callout variant="key">
          <b>定"加减同异"后 → 先看图1与图2是否有相同线条：</b>
          <PointList>
            <li><b>有相同 → 先运算</b>，再考虑"是不是图3转了"（可能图3动）。</li>
            <li><b>无相同 → 先旋转</b>，再把旋转后的图与图3对比：<br />① 图1和图3有相同线条 → <b>图2在转</b>；<br />② 图2和图3有相同线条 → <b>图1在转</b>。</li>
          </PointList>
        </Callout>
        <Callout variant="tip"><b>破解出题者"小心思"：</b>命题人常设置一个"没有旋转的易错选项"放在选项里。这个易错项本身就是一个提示——提醒你"本题是加减同异＋位置"。</Callout>
        <Callout variant="formula"><span className="formula">求异 ＋ 旋转 ＝ 高频组合</span></Callout>
        <p><b>图几转的判断示例（讲义板书）：</b>把"田字格（含十字）"与"菱形（含十字）"两图分别与结果对比，可知只有"图3转90°"时才成立；求同时同理；求异时同理——三张图只要有一张是旋转过的，就能对上。</p>
      
        <Example>
          <ExampleHeader>📝 例题4 · 求异＋图2旋转（2022 江苏-59%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>请从所给的四个选项中，选出最恰当的一项填入问号处，使之呈现出一定的规律性：</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 399.9 216" role="img" aria-label="题干九宫格">
      <g transform="translate(12,12)">
                <g transform="translate(10,10)">
                  <rect x={0} y={0} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={8} y={8} width={36} height={36} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={8} y1={26} x2={44} y2={26} stroke="#1f2937" strokeWidth={2} />
                  <line x1={26} y1={8} x2={26} y2={44} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(70,10)">
                  <rect x={0} y={0} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <circle cx={26} cy={26} r={21} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={11} y1={11} x2={41} y2={41} stroke="#f59e0b" strokeWidth={2.4} />
                </g>
                <g transform="translate(130,10)">
                  <rect x={0} y={0} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={8} y={8} width={36} height={36} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={26} cy={26} r={18} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={26} y1={8} x2={26} y2={44} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(10,70)">
                  <rect x={0} y={0} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <circle cx={26} cy={26} r={21} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={5} y1={26} x2={47} y2={26} stroke="#1f2937" strokeWidth={2} />
                  <line x1={26} y1={5} x2={26} y2={47} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(70,70)">
                  <rect x={0} y={0} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="16,4 36,4 48,16 48,36 36,48 16,48 4,36 4,16" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={4} y1={26} x2={48} y2={26} stroke="#1f2937" strokeWidth={2} />
                  <line x1={13} y1={13} x2={39} y2={39} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(130,70)">
                  <rect x={0} y={0} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="16,4 36,4 48,16 48,36 36,48 16,48 4,36 4,16" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={26} cy={26} r={22} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={4} y1={26} x2={48} y2={26} stroke="#1f2937" strokeWidth={2} />
                  <line x1={39} y1={13} x2={13} y2={39} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(10,130)">
                  <rect x={0} y={0} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="16,4 36,4 48,16 48,36 36,48 16,48 4,36 4,16" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={13} y1={13} x2={39} y2={39} stroke="#1f2937" strokeWidth={2} />
                  <line x1={39} y1={13} x2={13} y2={39} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(70,130)">
                  <rect x={0} y={0} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="26,5 47,26 26,47 5,26" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={5} y1={26} x2={47} y2={26} stroke="#f59e0b" strokeWidth={2.4} />
                </g>
                <g transform="translate(130,130)">
                  <rect x={0} y={0} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <text x={20} y={34} fill="#1f2937" fontSize={20}>?</text>
                </g>
                <text x={200} y={70} fill="#7c3aed" fontSize={13}>图1与图2无相同线条 →</text>
                <text x={200} y={88} fill="#7c3aed" fontSize={13}>先旋转；图1与图3有相同</text>
                <text x={200} y={106} fill="#7c3aed" fontSize={13}>线条 → 图2转（逆时针45°）</text>
              </g>
      </svg>
              <figcaption>图：题干九宫格</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 431 121.4" role="img" aria-label="四个选项图形">
      <g transform="translate(0,2)">
                <g transform="translate(58,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="18,4 42,4 56,18 56,42 42,56 18,56 4,42 4,18" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="30,12 48,30 30,48 12,30" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={12} y1={12} x2={48} y2={48} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(155,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="18,4 42,4 56,18 56,42 42,56 18,56 4,42 4,18" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="30,6 54,30 30,54 6,30" fill="none" stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(252,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="18,4 42,4 56,18 56,42 42,56 18,56 4,42 4,18" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="30,12 48,30 30,48 12,30" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={48} y1={12} x2={12} y2={48} stroke="#1f2937" strokeWidth={2} />
                </g>
                <g transform="translate(349,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="18,4 42,4 56,18 56,42 42,56 18,56 4,42 4,18" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="30,12 48,30 30,48 12,30" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={12} y1={30} x2={48} y2={30} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={12} x2={30} y2={48} stroke="#1f2937" strokeWidth={2} />
                </g>
                <text x={83.0} y={94.4} fill="#1f2937" fontSize={13}>A</text>
                <text x={180.0} y={94.4} fill="#1f2937" fontSize={13}>B</text>
                <text x={277.0} y={94.4} fill="#1f2937" fontSize={13}>C</text>
                <text x={374.0} y={94.4} fill="#1f2937" fontSize={13}>D</text>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D</figcaption>
            </figure>
            <ExampleAnswer><b>解析：</b>先看第三行：图1（八边形＋两条对角线）与图2（菱形＋横线）<b>没有相同线条</b>，所以要"<b>先旋转</b>"；再看谁动——图1与图3有相同线条（都是八边形），说明是<b>图2在转</b>。<br />把图2逆时针旋转 45°：菱形转成正方形，那条横线转成"/"方向的对角线。此时它与图1有了相同线条（"/"斜线），去同存异后，剩下八边形、内接正方形和"\"方向的那条对角线。<br /><span className="correct">答案：A</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题5 · 求异后图3翻转（2025 国考-57%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 445.9 216" role="img" aria-label="题干九宫格">
      <g transform="translate(12,12)">
                
                <g transform="translate(10,10)" stroke="#1f2937" strokeWidth={2} fill="none">
                  <rect x={0} y={0} width={52} height={52} strokeWidth={1.5} />
                  <line x1={6} y1={7} x2={46} y2={7} />
                  <line x1={8} y1={7} x2={8} y2={45} />
                  <line x1={28} y1={7} x2={28} y2={45} />
                  <line x1={8} y1={26} x2={46} y2={26} />
                </g>
                <g transform="translate(70,10)" stroke="#1f2937" strokeWidth={2} fill="none">
                  <rect x={0} y={0} width={52} height={52} strokeWidth={1.5} />
                  <line x1={14} y1={13} x2={35} y2={26} />
                  <line x1={14} y1={19} x2={35} y2={32} />
                  <line x1={14} y1={39} x2={35} y2={26} />
                  <line x1={14} y1={33} x2={35} y2={20} />
                  <line x1={22} y1={26} x2={46} y2={26} />
                </g>
                <g transform="translate(130,10)" stroke="#1f2937" strokeWidth={2} fill="none">
                  <rect x={0} y={0} width={52} height={52} strokeWidth={1.5} />
                  <line x1={6} y1={7} x2={30} y2={7} />
                  <line x1={28} y1={7} x2={28} y2={45} />
                  <line x1={40} y1={7} x2={40} y2={45} />
                  <line x1={28} y1={7} x2={40} y2={43} />
                  <line x1={6} y1={30} x2={28} y2={30} />
                </g>
                
                <g transform="translate(10,70)" stroke="#1f2937" strokeWidth={2} fill="none">
                  <rect x={0} y={0} width={52} height={52} strokeWidth={1.5} />
                  <polyline points="6,17 15,24 43,24 30,40 17,40 6,33" />
                </g>
                <g transform="translate(70,70)" stroke="#1f2937" strokeWidth={2} fill="none">
                  <rect x={0} y={0} width={52} height={52} strokeWidth={1.5} />
                  <polyline points="12,10 6,16 6,34 30,34 38,26 6,26" />
                  <polyline points="30,34 40,34" />
                </g>
                <g transform="translate(130,70)" stroke="#1f2937" strokeWidth={2} fill="none">
                  <rect x={0} y={0} width={52} height={52} strokeWidth={1.5} />
                  <polyline points="8,20 14,26 8,32 14,38" />
                  <polyline points="40,10 46,16 40,22" />
                  <polyline points="14,38 36,38 36,14 20,14 20,30" />
                </g>
                
                <g transform="translate(10,130)">
                  <rect x={0} y={0} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <g fill="#1f2937">
                    <rect x={8} y={8} width={22} height={11} />
                    <rect x={19} y={19} width={11} height={11} />
                    <rect x={19} y={30} width={11} height={11} />
                    <rect x={41} y={30} width={11} height={11} />
                    <rect x={8} y={41} width={11} height={11} />
                    <rect x={30} y={41} width={11} height={11} />
                    <rect x={41} y={41} width={11} height={11} />
                  </g>
                </g>
                <g transform="translate(70,130)">
                  <rect x={0} y={0} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <g fill="#1f2937">
                    <rect x={8} y={8} width={11} height={11} />
                    <rect x={30} y={8} width={11} height={11} />
                    <rect x={19} y={19} width={11} height={11} />
                    <rect x={30} y={19} width={11} height={11} />
                    <rect x={30} y={30} width={11} height={11} />
                    <rect x={41} y={30} width={11} height={11} />
                    <rect x={19} y={41} width={11} height={11} />
                    <rect x={30} y={41} width={11} height={11} />
                  </g>
                </g>
                <g transform="translate(130,130)">
                  <rect x={0} y={0} width={52} height={52} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <text x={20} y={34} fill="#1f2937" fontSize={20}>?</text>
                </g>
                <text x={200} y={80} fill="#7c3aed" fontSize={13}>图1、图2求异 → 结果左右翻转 = 图3</text>
              </g>
      </svg>
              <figcaption>图：题干九宫格</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 431 121.4" role="img" aria-label="四个选项图形（黑块）">
      <g transform="translate(0,2)">
                <g transform="translate(58,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <g fill="#1f2937">
                    <rect x={15} y={9} width={15} height={15} />
                    <rect x={30} y={9} width={15} height={15} />
                    <rect x={15} y={24} width={15} height={15} />
                    <rect x={15} y={39} width={15} height={15} />
                    <rect x={30} y={39} width={15} height={15} />
                    <rect x={9} y={54} width={15} height={15} />
                    <rect x={39} y={54} width={15} height={15} />
                  </g>
                </g>
                <g transform="translate(155,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <g fill="#1f2937">
                    <rect x={15} y={9} width={15} height={15} />
                    <rect x={30} y={9} width={15} height={15} />
                    <rect x={30} y={24} width={15} height={15} />
                    <rect x={15} y={39} width={15} height={15} />
                    <rect x={30} y={39} width={15} height={15} />
                    <rect x={9} y={54} width={15} height={15} />
                    <rect x={24} y={54} width={15} height={15} />
                  </g>
                </g>
                <g transform="translate(252,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <g fill="#1f2937">
                    <rect x={15} y={9} width={15} height={15} />
                    <rect x={30} y={9} width={15} height={15} />
                    <rect x={15} y={24} width={15} height={15} />
                    <rect x={30} y={24} width={15} height={15} />
                    <rect x={45} y={24} width={15} height={15} />
                    <rect x={9} y={39} width={15} height={15} />
                    <rect x={24} y={39} width={15} height={15} />
                  </g>
                </g>
                <g transform="translate(349,20)">
                  <rect x={0} y={0} width={60} height={60} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <g fill="#1f2937">
                    <rect x={15} y={9} width={15} height={15} />
                    <rect x={30} y={9} width={15} height={15} />
                    <rect x={15} y={24} width={15} height={15} />
                    <rect x={9} y={39} width={15} height={15} />
                    <rect x={24} y={39} width={15} height={15} />
                    <rect x={30} y={54} width={15} height={15} />
                    <rect x={45} y={54} width={15} height={15} />
                  </g>
                </g>
                <text x={83.0} y={94.4} fill="#1f2937" fontSize={13}>A</text>
                <text x={180.0} y={94.4} fill="#1f2937" fontSize={13}>B</text>
                <text x={277.0} y={94.4} fill="#1f2937" fontSize={13}>C</text>
                <text x={374.0} y={94.4} fill="#1f2937" fontSize={13}>D</text>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D</figcaption>
            </figure>
            <ExampleAnswer><b>解析：</b>第三行两幅黑块图都看成 4×4 的黑白网格，做"<b>去同存异</b>"（黑+黑→去掉、只有一方为黑→保留），得到的是一个"Z"形块。讲义明确提示：<b>求异后图3要左右翻转</b>——把求异结果左右镜像即得答案。<br />把求异结果（B 图案）左右翻转后：上面两行的小块移到左侧、底部两块移到右侧，与 A 完全一致。<br /><span className="correct">答案：A</span>　（B 就是"忘记翻转"的易错选项）</ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>4. 黑白运算：先看"轮廓是否相同"</BlockTitle>
        <p><b>命题者作图特点：</b>相同的黑块重复出现；<b>图形轮廓和分割区域相同</b>，但每幅图里<b>黑块的个数不同</b>。</p>
        <Callout variant="key">
          <b>解题思路：相同位置的运算</b>
          <PointList>
            <li>把每幅图切成同样的小格，<b>逐格</b>做"黑+黑""白+白""黑+白""白+黑"的规则推演。</li>
            <li><b>运算法则要具体题目具体找</b>，不能背固定公式。</li>
            <li><b>黑+白 不一定等于 白+黑</b>，必须逐题验证（黑、白谁在前，结果可能不同）。</li>
          </PointList>
        </Callout>
        <p><b>基本原理示意：</b>同样四格，两图逐格相加，结果每一格的颜色由"该格两图的颜色组合"决定：</p>
        <figure className="fig">
          <svg viewBox="0 0 432.8 134" role="img" aria-label="黑白运算基本原理示意">
      <g transform="translate(0,1)">
            <g transform="translate(80,20)">
              <circle cx={18} cy={18} r={17} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={52} cy={18} r={17} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={18} cy={52} r={17} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
              <circle cx={52} cy={52} r={17} fill="#ffffff" stroke="#1f2937" strokeWidth={2} />
            </g>
            <text x={176} y={70} fill="#6b7280" fontSize={22}>＋</text>
            <g transform="translate(210,20)">
              <circle cx={18} cy={18} r={17} fill="#1f2937" />
              <circle cx={52} cy={18} r={17} fill="#1f2937" />
              <circle cx={18} cy={52} r={17} fill="#1f2937" />
              <circle cx={52} cy={52} r={17} fill="#1f2937" />
            </g>
            <text x={306} y={70} fill="#6b7280" fontSize={22}>＝</text>
            <g transform="translate(340,20)">
              <circle cx={18} cy={18} r={17} fill="#1f2937" />
              <circle cx={52} cy={18} r={17} fill="#1f2937" />
              <circle cx={18} cy={52} r={17} fill="#1f2937" />
              <circle cx={52} cy={52} r={17} fill="#1f2937" />
            </g>
            <text x={400} y={70} fill="#ef4444" fontSize={22}>?</text>
            <text x={80} y={108} fill="#6b7280" fontSize={12}>白＋黑 的每一格结果，要回到题干里找</text>
          </g>
      </svg>
          <figcaption>图：黑白运算基本原理示意</figcaption>
        </figure>
        <Callout variant="key">
          <b>黑白运算的"提速技巧"</b>
          <PointList>
            <li><b>技巧1　对比选项找差异：</b>四个选项长得几乎一样，只在个别格子不同。先找出选项之间"不一样的那一格"，再回到题干推这一格，往往一步出答案。</li>
            <li><b>技巧2　相同区域一起看：</b>把两幅图里"颜色相同的区域"拉出来一起观察，能迅速定位需要推演的格子。</li>
          </PointList>
        </Callout>
        <Callout variant="tip">
          <b>如何区分"黑白运算"与"加减同异"？</b>两者的运算逻辑其实很相似（都是"相同位置的运算"），<b>有时不必刻意区分</b>。经验上：<b>黑白运算画"黑块"居多，加减同异画"线条"居多</b>。遇到"图案部分一样但线条/黑块说不清"的题，直接按"相同位置运算"往下推即可。
        </Callout>
        <Callout variant="formula"><span className="formula">出题形式：两组图、九宫格；九宫格横向不通就换纵向（纵向规律）</span></Callout>
        <Callout variant="tip"><b>创新点提醒：</b>黑白运算近年常"换皮"出现——<b>外框创新</b>（不成方格的轮廓）、<b>颜色创新</b>（灰/斜线/网格等多种填充色）、<b>题型创新</b>（把两组图换成金字塔式"A+B=C"，结果越往上越"少"）。解题时先固定"轮廓与分割区域相同"这一前提，再逐格比对。</Callout>
      </Block>
      
      <Block>
        <BlockTitle>5. 标记（一）：命题特征、标记位置与标记图形</BlockTitle>
        <p><b>命题者作图特点：</b>每幅图里都有"<b>一样的小元素</b>"——黑点、白点、箭头或其他小图案，<b>每幅都有</b>。此时优先考虑它的"<b>标记作用</b>"。</p>
        <PointList>
          <li><b>考查方式①　标记位置：</b>上、下、左、右、内、外。</li>
          <li><b>考查方式②　标记图形：</b>即这个标记物"标记"的是图形上的什么对象。</li>
        </PointList>
        <Callout variant="key">
          <b>标记图形要看的四类对象（考点清单）</b>
          <PointList>
            <li><b>点：</b>曲直性、引发的线条数量。</li>
            <li><b>线：</b>直线/曲线、最长线/最短线、线的位置（首尾、中间）。</li>
            <li><b>角：</b>直角/锐角/钝角、最大角/最小角。</li>
            <li><b>面：</b>单独面/相交面、相同区域/不同区域、形状、属性、面积。</li>
            <li><b>多个标记：</b>①标记物之间的比较；②连线后与原图的关系。</li>
          </PointList>
        </Callout>
        <Callout variant="formula"><span className="formula">识别信号：图里"都有小图案标记"→ 立刻想"这个点/箭头在标什么？"</span></Callout>
        <Callout variant="tip"><b>易错提醒：</b>不要一看到黑点就去数点、看位置，要先把"点标记的是线还是角还是面"想清楚；如果图里有<b>两个或多个</b>标记物，考点往往升级为"标记物之间的关系"或"连线后与原图的关系"。</Callout>
      
        <Example>
          <ExampleHeader>📝 例题6 · 标记：标记物所在图形的直线/曲线（2023 河北事业单位-78%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>请从所给四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 446 106" role="img" aria-label="题干五个图形与问号">
      <g transform="translate(16,6)">
                
                <g transform="translate(6,16)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="12,10 44,10 44,26 30,40 30,54 12,54 12,40 8,26" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={38} cy={22} r={8} fill="none" stroke="#1f2937" strokeWidth={1.6} />
                  <circle cx={38} cy={22} r={3} fill="#1f2937" />
                </g>
                
                <g transform="translate(74,16)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <path d="M14,14 C22,34 26,52 44,52" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={14} y1={14} x2={44} y2={52} stroke="#1f2937" strokeWidth={2} />
                  <circle cx={14} cy={34} r={7} fill="none" stroke="#1f2937" strokeWidth={1.6} />
                  <circle cx={14} cy={34} r={3} fill="#1f2937" />
                </g>
                
                <g transform="translate(142,16)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <circle cx={31} cy={31} r={24} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={14} y1={14} x2={48} y2={48} stroke="#1f2937" strokeWidth={2} />
                  <line x1={48} y1={14} x2={14} y2={48} stroke="#1f2937" strokeWidth={2} />
                  <circle cx={31} cy={16} r={7} fill="none" stroke="#1f2937" strokeWidth={1.6} />
                  <circle cx={31} cy={16} r={3} fill="#1f2937" />
                </g>
                
                <g transform="translate(210,16)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <circle cx={27} cy={31} r={22} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <path d="M14,16 L40,46 A14,14 0 0 0 44,26 Z" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={55} cy={34} r={7} fill="none" stroke="#1f2937" strokeWidth={1.6} />
                  <circle cx={55} cy={34} r={3} fill="#1f2937" />
                </g>
                
                <g transform="translate(278,16)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polyline points="12,44 12,28 20,14 38,14 46,28 46,44" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={46} y1={44} x2={52} y2={44} stroke="#1f2937" strokeWidth={2} />
                  <circle cx={52} cy={48} r={7} fill="none" stroke="#1f2937" strokeWidth={1.6} />
                  <circle cx={52} cy={48} r={3} fill="#1f2937" />
                </g>
                <rect x={346} y={16} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                <text x={370} y={54} fill="#1f2937" fontSize={22}>?</text>
              </g>
      </svg>
              <figcaption>图：题干五个图形与问号</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 433 124" role="img" aria-label="四个选项图形">
      <g transform="translate(0,4)">
                
                <g transform="translate(58,18)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <circle cx={31} cy={31} r={24} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={23} cy={24} r={2.6} fill="#1f2937" />
                  <circle cx={39} cy={24} r={2.6} fill="#1f2937" />
                  <path d="M20,40 A13,10 0 0 0 42,40" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={31} cy={33} r={7} fill="none" stroke="#1f2937" strokeWidth={1.6} />
                  <circle cx={31} cy={33} r={3} fill="#1f2937" />
                </g>
                
                <g transform="translate(155,18)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <circle cx={29} cy={31} r={15} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="29,4 34,14 24,14" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="29,58 34,48 24,48" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="3,31 13,26 13,36" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="55,31 45,26 45,36" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="11,13 21,17 13,23" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <polygon points="47,49 37,45 45,39" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={51} cy={20} r={7} fill="none" stroke="#1f2937" strokeWidth={1.6} />
                  <circle cx={51} cy={20} r={3} fill="#1f2937" />
                </g>
                
                <g transform="translate(252,18)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <circle cx={31} cy={31} r={24} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={7} y1={31} x2={55} y2={31} stroke="#1f2937" strokeWidth={2} />
                  <line x1={31} y1={7} x2={31} y2={55} stroke="#1f2937" strokeWidth={2} />
                  <circle cx={31} cy={38} r={7} fill="none" stroke="#1f2937" strokeWidth={1.6} />
                  <circle cx={31} cy={38} r={3} fill="#1f2937" />
                </g>
                
                <g transform="translate(349,18)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <circle cx={31} cy={31} r={24} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={24} cy={28} r={7} fill="none" stroke="#1f2937" strokeWidth={1.8} />
                  <circle cx={24} cy={28} r={3} fill="#1f2937" />
                  <circle cx={40} cy={36} r={10} fill="none" stroke="#1f2937" strokeWidth={1.8} />
                </g>
                <text x={83} y={95} fill="#1f2937" fontSize={13}>A</text>
                <text x={180} y={95} fill="#1f2937" fontSize={13}>B</text>
                <text x={277} y={95} fill="#1f2937" fontSize={13}>C</text>
                <text x={374} y={95} fill="#1f2937" fontSize={13}>D</text>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D</figcaption>
            </figure>
            <ExampleAnswer><b>解析：</b>六幅图都有一个"小双圆圈"作为<b>标记物</b>。看标记物所依附的主图形线条类型，依次为：<b>直线、曲线、直线、曲线、直线、（？）</b>——呈现"直线↔曲线"交替规律，所以问号处应是<b>由曲线构成</b>的图形。<br />A 是曲线图形、B 含直线三角、C 是圆内十字（直线）、D 是圆与圆相切（全曲线）。<br /><span className="correct">答案：D</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题7 · 标记：标记在"线"上的位置（2024 江苏-54%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>请从四个选项中选出最恰当的一项填入问号处，使题干图形呈现一定的规律性：</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 444 106" role="img" aria-label="题干五个图形与问号">
      <g transform="translate(16,6)">
                
                <g transform="translate(6,16)">
                  <rect x={0} y={0} width={60} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={10} y={12} width={34} height={26} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <rect x={20} y={20} width={18} height={12} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={30} cy={44} r={3.2} fill="#1f2937" />
                  <line x1={10} y1={47} x2={44} y2={47} stroke="#f59e0b" strokeWidth={2} />
                </g>
                
                <g transform="translate(74,16)">
                  <rect x={0} y={0} width={60} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={12} y={14} width={34} height={34} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <rect x={20} y={22} width={20} height={20} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={29} cy={10} r={3.2} fill="#1f2937" />
                  <line x1={12} y1={10} x2={46} y2={10} stroke="#f59e0b" strokeWidth={2} />
                  <line x1={10} y1={10} x2={10} y2={48} stroke="#f59e0b" strokeWidth={2} />
                </g>
                
                <g transform="translate(142,16)">
                  <rect x={0} y={0} width={60} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={14} y={14} width={32} height={32} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <rect x={22} y={22} width={16} height={16} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={10} cy={30} r={3.2} fill="#1f2937" />
                  <line x1={8} y1={10} x2={46} y2={10} stroke="#f59e0b" strokeWidth={2} />
                  <line x1={46} y1={10} x2={46} y2={48} stroke="#f59e0b" strokeWidth={2} />
                </g>
                
                <g transform="translate(210,16)">
                  <rect x={0} y={0} width={60} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={12} y={14} width={34} height={34} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <rect x={20} y={22} width={18} height={18} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={52} cy={30} r={3.2} fill="#1f2937" />
                  <line x1={12} y1={50} x2={46} y2={50} stroke="#f59e0b" strokeWidth={2} />
                  <line x1={10} y1={50} x2={10} y2={14} stroke="#f59e0b" strokeWidth={2} />
                </g>
                
                <g transform="translate(278,16)">
                  <rect x={0} y={0} width={60} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={12} y={14} width={34} height={32} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <rect x={20} y={22} width={18} height={16} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={14} cy={44} r={3.2} fill="#1f2937" />
                  <line x1={12} y1={52} x2={46} y2={52} stroke="#f59e0b" strokeWidth={2} />
                  <line x1={10} y1={52} x2={10} y2={16} stroke="#f59e0b" strokeWidth={2} />
                </g>
                <rect x={346} y={16} width={60} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                <text x={368} y={54} fill="#1f2937" fontSize={22}>?</text>
              </g>
      </svg>
              <figcaption>图：题干五个图形与问号</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 431 124" role="img" aria-label="四个选项图形">
      <g transform="translate(0,4)">
                <g transform="translate(58,18)">
                  <rect x={0} y={0} width={60} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={12} y={12} width={32} height={32} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={40} cy={24} r={3.2} fill="#1f2937" />
                </g>
                <g transform="translate(155,18)">
                  <rect x={0} y={0} width={60} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={10} y={10} width={36} height={36} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <rect x={18} y={18} width={18} height={18} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={50} cy={28} r={3.2} fill="#1f2937" />
                </g>
                <g transform="translate(252,18)">
                  <rect x={0} y={0} width={60} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={14} y={14} width={34} height={30} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <rect x={22} y={22} width={18} height={14} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={10} cy={30} r={3.2} fill="#1f2937" />
                </g>
                <g transform="translate(349,18)">
                  <rect x={0} y={0} width={60} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={10} y={10} width={36} height={36} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <rect x={18} y={18} width={18} height={18} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <circle cx={34} cy={14} r={3.2} fill="#1f2937" />
                </g>
                <text x={83} y={95} fill="#1f2937" fontSize={13}>A</text>
                <text x={180} y={95} fill="#1f2937" fontSize={13}>B</text>
                <text x={277} y={95} fill="#1f2937" fontSize={13}>C</text>
                <text x={374} y={95} fill="#1f2937" fontSize={13}>D</text>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D</figcaption>
            </figure>
            <ExampleAnswer><b>解析：</b>每幅图都是一个"嵌套方框"，图上有一个<b>小圆点</b>作标记。顺着图形的四边数，小圆点的位置依次为：<b>下→上→左→右→左（内圈）</b>，即绕图形一圈后进入内圈，所以问号处圆点应落在<b>内圈右侧</b>——也就是"线的位置"在按顺序移动。<br />对比选项：只有 B 的圆点位于图形右侧（内圈），其余圆点位置（右上、左下、上中）均不符合顺序。<br /><span className="correct">答案：B</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>6. 标记（二）：多个标记 —— "连线后与原图的关系"</BlockTitle>
        <p>当图中出现<b>两个（或多个）标记物</b>时，考点自动升级为两类：</p>
        <PointList>
          <li><b>标记物之间的比较：</b>两个点/箭头是否在同一区域、是否对称、距离远近等。</li>
          <li><b>连线后与原图的关系：</b>把两个标记物连起来，看这条连线与原图的<b>线条、面</b>有什么关系——这是近年最高频的考法。</li>
        </PointList>
        <Callout variant="key">
          <b>连线后常考的三种关系</b>
          <PointList>
            <li>连线与原图某条线<b>平行 / 垂直</b>；</li>
            <li>连线<b>经过图形的最大面</b>（经过面积最大的那个区域）；</li>
            <li>连线经过<b>交点 / 顶点</b>，或把图形分成<b>相同的部分</b>。</li>
          </PointList>
        </Callout>
        <Callout variant="formula"><span className="formula">两个标记 → 先连线，再看"线与原图"的关系（平行 / 垂直 / 经过最大面）</span></Callout>
      
        <Example>
          <ExampleHeader>📝 例题8 · 标记：连线后与原图线条平行/垂直（2022 上海-72%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>将下列六个图形按一定规律分为两大类，正确的是：</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 266 227" role="img" aria-label="六个图形分组">
      <g transform="translate(12,12)">
                <defs>
                  <pattern id="L2-e8-hatch1" width={5} height={5} patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
                    <line x1={0} y1={0} x2={0} y2={5} stroke="#6b7280" strokeWidth={1.1} />
                  </pattern>
                  <pattern id="L2-e8-hatch2" width={5} height={5} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1={0} y1={0} x2={0} y2={5} stroke="#6b7280" strokeWidth={1.1} />
                  </pattern>
                  <pattern id="L2-e8-hatch3" width={5} height={5} patternUnits="userSpaceOnUse" patternTransform="rotate(-20)">
                    <line x1={0} y1={0} x2={0} y2={5} stroke="#6b7280" strokeWidth={1.1} />
                  </pattern>
                </defs>
                
                <g transform="translate(10,10)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="6,48 6,20 44,20" fill="url(#L2-e8-hatch1)" stroke="#1f2937" strokeWidth={2} />
                  <line x1={48} y1={6} x2={48} y2={56} stroke="#f59e0b" strokeWidth={2.4} />
                  <circle cx={48} cy={12} r={3.4} fill="#1f2937" />
                  <circle cx={48} cy={50} r={3.4} fill="#1f2937" />
                  <text x={24} y={80} fill="#1f2937" fontSize={13}>①</text>
                </g>
                
                <g transform="translate(90,10)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="31,16 56,48 6,48" fill="url(#L2-e8-hatch1)" stroke="#1f2937" strokeWidth={2} />
                  <line x1={31} y1={6} x2={31} y2={56} stroke="#f59e0b" strokeWidth={2.4} />
                  <circle cx={31} cy={12} r={3.4} fill="#1f2937" />
                  <circle cx={31} cy={50} r={3.4} fill="#1f2937" />
                  <text x={24} y={80} fill="#1f2937" fontSize={13}>②</text>
                </g>
                
                <g transform="translate(170,10)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={16} y={12} width={40} height={36} fill="url(#L2-e8-hatch1)" stroke="#1f2937" strokeWidth={2} />
                  <line x1={12} y1={6} x2={12} y2={56} stroke="#f59e0b" strokeWidth={2.4} />
                  <circle cx={12} cy={12} r={3.4} fill="#1f2937" />
                  <circle cx={12} cy={50} r={3.4} fill="#1f2937" />
                  <text x={24} y={80} fill="#1f2937" fontSize={13}>③</text>
                </g>
                
                <g transform="translate(10,110)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="12,50 12,26 46,50" fill="url(#L2-e8-hatch3)" stroke="#1f2937" strokeWidth={2} />
                  <line x1={6} y1={56} x2={40} y2={14} stroke="#f59e0b" strokeWidth={2.4} />
                  <circle cx={34} cy={20} r={3.4} fill="#1f2937" />
                  <circle cx={8} cy={54} r={3.4} fill="#1f2937" />
                  <text x={24} y={80} fill="#1f2937" fontSize={13}>④</text>
                </g>
                
                <g transform="translate(90,110)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={10} y={14} width={38} height={36} fill="url(#L2-e8-hatch2)" stroke="#1f2937" strokeWidth={2} />
                  <line x1={6} y1={10} x2={52} y2={54} stroke="#f59e0b" strokeWidth={2.4} />
                  <circle cx={10} cy={14} r={3.4} fill="#1f2937" />
                  <circle cx={50} cy={52} r={3.4} fill="#1f2937" />
                  <text x={24} y={80} fill="#1f2937" fontSize={13}>⑤</text>
                </g>
                
                <g transform="translate(170,110)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="46,16 46,48 12,32" fill="url(#L2-e8-hatch3)" stroke="#1f2937" strokeWidth={2} />
                  <line x1={6} y1={10} x2={6} y2={56} stroke="#f59e0b" strokeWidth={2.4} />
                  <circle cx={6} cy={14} r={3.4} fill="#1f2937" />
                  <circle cx={6} cy={52} r={3.4} fill="#1f2937" />
                  <text x={24} y={80} fill="#1f2937" fontSize={13}>⑥</text>
                </g>
              </g>
      </svg>
              <figcaption>图：六个图形（橙色为两点连线示意）</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 498 131.1" role="img" aria-label="四个选项：按平行/垂直分成两类">
      <g transform="translate(18,12)">
                <rect x={4} y={10} width={106} height={58} rx={6} fill="none" stroke="#1f2937" strokeWidth={2} />
                <text x={57} y={46} fill="#1f2937" fontSize={12.5} textAnchor="middle">①③⑥,②④⑤</text>
                <rect x={120} y={10} width={106} height={58} rx={6} fill="none" stroke="#1f2937" strokeWidth={2} />
                <text x={173} y={46} fill="#1f2937" fontSize={12.5} textAnchor="middle">①③⑤,②④⑥</text>
                <rect x={236} y={10} width={106} height={58} rx={6} fill="none" stroke="#10b981" strokeWidth={3} />
                <text x={289} y={46} fill="#10b981" fontSize={12.5} textAnchor="middle">①⑤⑥,②③④</text>
                <rect x={352} y={10} width={106} height={58} rx={6} fill="none" stroke="#1f2937" strokeWidth={2} />
                <text x={405} y={46} fill="#1f2937" fontSize={12.5} textAnchor="middle">①②④,③⑤⑥</text>
                <text x={57} y={94} fill="#1f2937" fontSize={13} textAnchor="middle">A</text>
                <text x={173} y={94} fill="#1f2937" fontSize={13} textAnchor="middle">B</text>
                <text x={289} y={94} fill="#10b981" fontSize={13} textAnchor="middle">C</text>
                <text x={405} y={94} fill="#1f2937" fontSize={13} textAnchor="middle">D</text>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D</figcaption>
            </figure>
            <ExampleAnswer><b>解析：</b>六幅图都有两个小黑点，把两点连线（图中橙色线）后看这条线与原图线条的关系：<br />①连线是<b>竖直</b>的，与三角形竖直的那条直角边<b>平行</b>；⑤连线沿正方形对角线方向，与斜线填充方向<b>平行</b>；⑥连线竖直，与三角形竖直边<b>平行</b>；<br />②③④的连线则与原图线条<b>垂直</b>（②的竖线与底边垂直、③的竖线与上下边垂直、④的斜线与斜边垂直）。<br />故分成"平行"与"垂直"两类：①⑤⑥ / ②③④。<br /><span className="correct">答案：C</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      
        <Example>
          <ExampleHeader>📝 例题9 · 标记：连线后经过"最大面"（2024 广东事业单位-61%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 406 110" role="img" aria-label="题干四个图形与问号">
      <g transform="translate(16,8)">
                
                <g transform="translate(6,14)">
                  <rect x={0} y={0} width={66} height={66} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="12,14 20,14 20,26 46,26 46,36 30,36 30,52 12,52" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={12} y1={14} x2={30} y2={22} stroke="#1f2937" strokeWidth={2} />
                  <line x1={24} y1={22} x2={38} y2={30} stroke="#1f2937" strokeWidth={2} />
                  <line x1={8} y1={52} x2={46} y2={20} stroke="#f59e0b" strokeWidth={2.2} />
                  <circle cx={10} cy={50} r={3.2} fill="#1f2937" />
                  <circle cx={44} cy={22} r={3.2} fill="#1f2937" />
                </g>
                
                <g transform="translate(80,14)">
                  <rect x={0} y={0} width={66} height={66} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="14,12 42,8 54,28 40,54 16,48" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={14} y1={12} x2={40} y2={54} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={24} x2={54} y2={28} stroke="#1f2937" strokeWidth={2} />
                  <line x1={6} y1={16} x2={50} y2={58} stroke="#f59e0b" strokeWidth={2.2} />
                  <circle cx={8} cy={14} r={3.2} fill="#1f2937" />
                  <circle cx={48} cy={60} r={3.2} fill="#1f2937" />
                </g>
                
                <g transform="translate(154,14)">
                  <rect x={0} y={0} width={66} height={66} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="14,10 14,54 56,54" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={14} y1={28} x2={36} y2={28} stroke="#1f2937" strokeWidth={2} />
                  <line x1={14} y1={28} x2={36} y2={54} stroke="#1f2937" strokeWidth={2} />
                  <line x1={6} y1={56} x2={46} y2={34} stroke="#f59e0b" strokeWidth={2.2} />
                  <circle cx={8} cy={58} r={3.2} fill="#1f2937" />
                  <circle cx={44} cy={36} r={3.2} fill="#1f2937" />
                </g>
                
                <g transform="translate(228,14)">
                  <rect x={0} y={0} width={66} height={66} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <rect x={10} y={34} width={16} height={20} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <rect x={26} y={14} width={16} height={40} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <rect x={42} y={30} width={14} height={24} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={10} y1={30} x2={48} y2={46} stroke="#f59e0b" strokeWidth={2.2} />
                  <circle cx={12} cy={28} r={3.2} fill="#1f2937" />
                  <circle cx={46} cy={48} r={3.2} fill="#1f2937" />
                </g>
                <rect x={302} y={14} width={66} height={66} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                <text x={328} y={56} fill="#1f2937" fontSize={22}>?</text>
              </g>
      </svg>
              <figcaption>图：题干四个图形与问号</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 437 126" role="img" aria-label="四个选项图形">
      <g transform="translate(0,6)">
                
                <g transform="translate(58,16)">
                  <rect x={0} y={0} width={66} height={66} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="10,16 50,16 34,34 50,52 10,52" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={34} y1={34} x2={10} y2={16} stroke="#1f2937" strokeWidth={2} />
                  <line x1={34} y1={34} x2={10} y2={52} stroke="#1f2937" strokeWidth={2} />
                  <line x1={14} y1={54} x2={30} y2={42} stroke="#f59e0b" strokeWidth={2.2} />
                  <circle cx={12} cy={56} r={3.2} fill="#1f2937" />
                  <circle cx={32} cy={40} r={3.2} fill="#1f2937" />
                </g>
                
                <g transform="translate(155,16)">
                  <rect x={0} y={0} width={66} height={66} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <ellipse cx={33} cy={18} rx={22} ry={6} fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={11} y1={18} x2={11} y2={52} stroke="#1f2937" strokeWidth={2} />
                  <line x1={55} y1={18} x2={55} y2={52} stroke="#1f2937" strokeWidth={2} />
                  <path d="M11,52 A22,6 0 0 0 55,52" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={33} y1={18} x2={33} y2={52} stroke="#1f2937" strokeWidth={2} />
                  <line x1={8} y1={14} x2={58} y2={14} stroke="#f59e0b" strokeWidth={2.2} />
                  <circle cx={10} cy={14} r={3.2} fill="#1f2937" />
                  <circle cx={56} cy={14} r={3.2} fill="#1f2937" />
                </g>
                
                <g transform="translate(252,16)">
                  <rect x={0} y={0} width={66} height={66} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="14,10 40,10 40,28 54,28 54,56 14,56" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={40} y1={28} x2={40} y2={56} stroke="#1f2937" strokeWidth={2} />
                  <line x1={20} y1={56} x2={46} y2={28} stroke="#f59e0b" strokeWidth={2.2} />
                  <circle cx={18} cy={58} r={3.2} fill="#1f2937" />
                  <circle cx={48} cy={26} r={3.2} fill="#1f2937" />
                </g>
                
                <g transform="translate(349,16)">
                  <rect x={0} y={0} width={66} height={66} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <polygon points="12,22 34,10 34,26" fill="none" stroke="#1f2937" strokeWidth={2} />
                  <line x1={12} y1={22} x2={56} y2={56} stroke="#1f2937" strokeWidth={2} />
                  <line x1={34} y1={10} x2={34} y2={56} stroke="#1f2937" strokeWidth={2} />
                  <line x1={34} y1={26} x2={12} y2={56} stroke="#1f2937" strokeWidth={2} />
                  <line x1={16} y1={12} x2={44} y2={26} stroke="#f59e0b" strokeWidth={2.2} />
                  <circle cx={14} cy={10} r={3.2} fill="#1f2937" />
                  <circle cx={46} cy={28} r={3.2} fill="#1f2937" />
                </g>
                <text x={83} y={95} fill="#1f2937" fontSize={13}>A</text>
                <text x={180} y={95} fill="#1f2937" fontSize={13}>B</text>
                <text x={277} y={95} fill="#10b981" fontSize={13}>C</text>
                <text x={374} y={95} fill="#1f2937" fontSize={13}>D</text>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D</figcaption>
            </figure>
            <ExampleAnswer><b>解析：</b>每个图形上都有两个小黑点，把两点连线（橙色）后会发现：<b>这条连线恰好穿过图形中面积最大的那个面</b>。<br />对比选项：A 的连线只掠过小面；B 的连线在圆柱外侧；D 的连线穿过的是上方的小三角形面；只有 C 的连线完整地<b>经过了图形中最大的面</b>，符合规律。<br /><span className="correct">答案：C</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>7. 标记（三）：两个标记点与"面的位置关系"</BlockTitle>
        <p>多个标记的另一种高频考法：不看连线，而是看<b>两个标记点所在的"面"的关系</b>——它们是落在<b>同一个区域</b>，还是分别落在<b>两个不同的区域</b>。</p>
        <Callout variant="key">
          <b>看法：</b>先把图形按内部线条分成若干小块区域，再看两个小黑点各自落在哪一块里：
          <PointList>
            <li>两点落在<b>同一区域</b> → 一类；</li>
            <li>两点分别落在<b>两个不同区域</b> → 另一类。</li>
          </PointList>
        </Callout>
        <Callout variant="tip"><b>配套技巧：</b>分组分类题一旦确定"标记点看面"，就只需盯住两个点之间有没有线条隔开，不必再数线、数角。</Callout>
      
        <Example>
          <ExampleHeader>📝 例题10 · 标记：两点是否在同一个面（2024 浙江-91%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>把下面的六个图形分为两类，使每一类图形都有各自的共同特征或规律，分类正确的一项是：</ExampleQuestion>
            <figure className="fig">
              <svg viewBox="0 0 266 227" role="img" aria-label="六个图形分组">
      <g transform="translate(12,12)">
                
                <g transform="translate(10,10)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <line x1={0} y1={28} x2={62} y2={28} stroke="#1f2937" strokeWidth={2} />
                  <line x1={24} y1={28} x2={0} y2={0} stroke="#1f2937" strokeWidth={2} />
                  <line x1={24} y1={28} x2={24} y2={62} stroke="#1f2937" strokeWidth={2} />
                  <circle cx={12} cy={14} r={3.6} fill="#1f2937" />
                  <circle cx={44} cy={14} r={3.6} fill="#1f2937" />
                  <line x1={14} y1={12} x2={42} y2={12} stroke="#f59e0b" strokeWidth={2} />
                  <text x={24} y={80} fill="#1f2937" fontSize={13}>①</text>
                </g>
                
                <g transform="translate(90,10)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <line x1={0} y1={30} x2={62} y2={30} stroke="#1f2937" strokeWidth={2} />
                  <line x1={10} y1={0} x2={52} y2={62} stroke="#1f2937" strokeWidth={2} />
                  <line x1={46} y1={0} x2={6} y2={62} stroke="#1f2937" strokeWidth={2} />
                  <circle cx={26} cy={16} r={3.6} fill="#1f2937" />
                  <circle cx={36} cy={20} r={3.6} fill="#1f2937" />
                  <line x1={26} y1={18} x2={36} y2={18} stroke="#f59e0b" strokeWidth={2} />
                  <text x={24} y={80} fill="#1f2937" fontSize={13}>②</text>
                </g>
                
                <g transform="translate(170,10)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <line x1={0} y1={26} x2={62} y2={26} stroke="#1f2937" strokeWidth={2} />
                  <line x1={0} y1={26} x2={34} y2={62} stroke="#1f2937" strokeWidth={2} />
                  <line x1={34} y1={26} x2={34} y2={62} stroke="#1f2937" strokeWidth={2} />
                  <circle cx={12} cy={12} r={3.6} fill="#1f2937" />
                  <circle cx={44} cy={44} r={3.6} fill="#1f2937" />
                  <line x1={14} y1={14} x2={42} y2={42} stroke="#f59e0b" strokeWidth={2} />
                  <text x={24} y={80} fill="#1f2937" fontSize={13}>③</text>
                </g>
                
                <g transform="translate(10,110)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <line x1={0} y1={34} x2={62} y2={34} stroke="#1f2937" strokeWidth={2} />
                  <line x1={40} y1={0} x2={40} y2={34} stroke="#1f2937" strokeWidth={2} />
                  <line x1={20} y1={34} x2={52} y2={62} stroke="#1f2937" strokeWidth={2} />
                  <circle cx={28} cy={46} r={3.6} fill="#1f2937" />
                  <circle cx={36} cy={54} r={3.6} fill="#1f2937" />
                  <text x={24} y={80} fill="#1f2937" fontSize={13}>④</text>
                </g>
                
                <g transform="translate(90,110)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <line x1={0} y1={22} x2={30} y2={22} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={0} x2={30} y2={62} stroke="#1f2937" strokeWidth={2} />
                  <line x1={30} y1={34} x2={62} y2={20} stroke="#1f2937" strokeWidth={2} />
                  <circle cx={16} cy={38} r={3.6} fill="#1f2937" />
                  <circle cx={40} cy={48} r={3.6} fill="#1f2937" />
                  <text x={24} y={80} fill="#1f2937" fontSize={13}>⑤</text>
                </g>
                
                <g transform="translate(170,110)">
                  <rect x={0} y={0} width={62} height={62} fill="none" stroke="#1f2937" strokeWidth={1.5} />
                  <line x1={0} y1={28} x2={62} y2={28} stroke="#1f2937" strokeWidth={2} />
                  <line x1={0} y1={0} x2={36} y2={28} stroke="#1f2937" strokeWidth={2} />
                  <line x1={42} y1={28} x2={42} y2={62} stroke="#1f2937" strokeWidth={2} />
                  <circle cx={44} cy={14} r={3.6} fill="#1f2937" />
                  <circle cx={26} cy={46} r={3.6} fill="#1f2937" />
                  <line x1={44} y1={16} x2={28} y2={44} stroke="#f59e0b" strokeWidth={2} />
                  <text x={24} y={80} fill="#1f2937" fontSize={13}>⑥</text>
                </g>
              </g>
      </svg>
              <figcaption>图：六个图形（橙色为两点连线示意）</figcaption>
            </figure>
            <figure className="fig">
              <svg viewBox="0 0 480.1 121.1" role="img" aria-label="四个选项">
      <g transform="translate(2,8)">
                <rect x={20} y={14} width={90} height={52} rx={6} fill="none" stroke="#1f2937" strokeWidth={2} />
                <text x={40} y={46} fill="#1f2937" fontSize={15}>①②⑥,③④⑤</text>
                <rect x={130} y={14} width={90} height={52} rx={6} fill="none" stroke="#1f2937" strokeWidth={2} />
                <text x={150} y={46} fill="#1f2937" fontSize={15}>①③④,②⑤⑥</text>
                <rect x={240} y={14} width={90} height={52} rx={6} fill="none" stroke="#10b981" strokeWidth={3} />
                <text x={260} y={46} fill="#10b981" fontSize={15}>①③⑥,②④⑤</text>
                <rect x={350} y={14} width={90} height={52} rx={6} fill="none" stroke="#1f2937" strokeWidth={2} />
                <text x={370} y={46} fill="#1f2937" fontSize={15}>①④⑥,②③⑤</text>
                <text x={52} y={88} fill="#1f2937" fontSize={13}>A</text>
                <text x={162} y={88} fill="#1f2937" fontSize={13}>B</text>
                <text x={272} y={88} fill="#10b981" fontSize={13}>C</text>
                <text x={382} y={88} fill="#1f2937" fontSize={13}>D</text>
              </g>
      </svg>
              <figcaption>选项 A / B / C / D</figcaption>
            </figure>
            <ExampleAnswer><b>解析：</b>六幅图里都有一条直线（或几条线）把正方形分成若干区域，并有两个小黑点。看两个黑点的位置关系：<br /><b>②④⑤</b>的两个黑点落在<b>同一个面</b>内（两点之间没有线条隔开）；<br /><b>①③⑥</b>的两个黑点落在<b>两个不同的面</b>里（两点之间被线条隔开）。<br />这就是"两个标记点与面的位置关系"。<br /><span className="correct">答案：C</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
      
      <Block>
        <BlockTitle>8. 全讲速记（样式规律＋标记）</BlockTitle>
        <Callout variant="key">
          <b>【样式规律】（运算）</b>
          <PointList>
            <li>命题者作图特点：每幅图图案部分一样。</li>
            <li>考点：①加减同异　②黑白运算。</li>
          </PointList>
          <b>【加减同异】</b>
          <PointList>
            <li>命题者作图特点：图案部分一样，且位置对应。</li>
            <li>考点：1.相加；2.相减/求异（去掉相同线条）；3.求同（保留相同线条）。</li>
            <li>答题思路：确定"加减同异"后，第一步先看图1、图2是否有相同线条。<br />① 有相同先运算，再考虑图3转的可能；<br />② 无相同先旋转，跟图3对比：图2与图3有相同线条→图1转；图1与图3有相同线条→图2转。</li>
          </PointList>
          <b>【黑白运算】</b>
          <PointList>
            <li>命题者作图特点：图形轮廓和分割区域相同，且黑块数量不同。</li>
            <li>答题思路：相同位置的运算。</li>
            <li>小技巧：1.相同区域；2.对比选项。</li>
          </PointList>
        </Callout>
        <Callout variant="key">
          <b>【标记作用】</b>
          <PointList>
            <li>命题者作图特点：每幅图图案部分一样，例如都有黑点、白点、箭头等小图案进行标记。</li>
            <li>考点：1.<b>标记位置</b>（常见：上、下、左、右、内、外）；2.<b>标记图形</b>——<br />　<b>点：</b>曲直性、引发的线条数量；<br />　<b>线：</b>直线/曲线、最长线/最短线、线的位置；<br />　<b>角：</b>直角/锐角/钝角、最大角/最小角；<br />　<b>面：</b>单独面/相交面、相同区域/不同区域、形状、属性、面积。</li>
            <li><b>多个标记：</b>1.标记物之间的比较；2.连线后与原图的关系。</li>
          </PointList>
        </Callout>
        <Callout variant="formula"><span className="formula">实战思维：加减同异 → 先看图1图2相同线条 → 有相同（先运算，可能图3动）／无相同（先旋转：13一样→图2动，23一样→图1动）</span></Callout>
        <Callout variant="tip"><b>一句话总结：</b>图案有一样的部分，就往"运算"里想——<b>线条动脑（加减同异），黑块动眼（黑白运算）</b>；图里有小标记，就问自己"它在标什么、连起来又与原图什么关系"。</Callout>
      </Block>
      
          
            <Block>
        <BlockTitle>补充3. 遍历（缺啥补啥）——样式规律的"补充考点"</BlockTitle>
        <p>夸夸刷把它单列成<b>"◆ 补充考点：样式规律 → 遍历"</b>（（一）P128、（三）P116/P128）。<b>出题者作图：相同的元素重复出现</b>；<b>解题思路：缺啥补啥（缺元素/颜色/位置/方向）</b>。</p>
        <p>识别特征：题干是<b>九宫格或两行/两列</b>，每一幅都由"<b>上下/内外两个小图案拼成</b>"，同一批小图案反复出现。看的时候<b>把每一层拆开单看</b>：上层排一遍、下层排一遍，缺哪个补哪个。</p>
        <Callout variant="key">口诀：<b>重复出现 = 遍历，缺啥补啥</b>。分层看：<b>元素层（形状）排一遍 + 颜色层排一遍 + 位置层排一遍 + 方向层排一遍</b>。</Callout>
        <Example>
          <ExampleHeader>📝 例题3 · 圆内 + 圆外双层遍历（25联考-78%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 326 202" role="img" aria-label="三乘三九宫格，每格为圆加内部线条加外部小图案">
      <g transform="translate(0,6)">
              <g stroke="#1f2937" fill="#ffffff" strokeWidth={1.2}>
                <rect x={156} y={20} width={44} height={44} /><rect x={208} y={20} width={44} height={44} /><rect x={260} y={20} width={44} height={44} />
                <rect x={156} y={72} width={44} height={44} /><rect x={208} y={72} width={44} height={44} /><rect x={260} y={72} width={44} height={44} />
                <rect x={156} y={124} width={44} height={44} /><rect x={208} y={124} width={44} height={44} /><rect x={260} y={124} width={44} height={44} />
              </g>
              <g stroke="#1f2937" fill="none" strokeWidth={1.2}>
                <circle cx={178} cy={42} r={16} /><line x1={162} y1={42} x2={194} y2={42} /><line x1={178} y1={26} x2={178} y2={58} />
                <circle cx={230} cy={42} r={16} />
                <circle cx={282} cy={42} r={16} /><line x1={271} y1={31} x2={293} y2={53} />
                <circle cx={178} cy={94} r={16} /><line x1={167} y1={105} x2={189} y2={83} />
                <circle cx={230} cy={94} r={16} /><line x1={214} y1={94} x2={246} y2={94} /><line x1={230} y1={78} x2={230} y2={110} />
                <circle cx={282} cy={94} r={16} />
                <circle cx={178} cy={146} r={16} />
                <circle cx={230} cy={146} r={16} /><line x1={219} y1={157} x2={241} y2={135} />
              </g>
              <g stroke="#1f2937" fill="none" strokeWidth={1.2}>
                <circle cx={152} cy={42} r={4} />
                <rect x={292} y={38} width={9} height={8} />
              </g>
              <g fill="#1f2937" stroke="none">
                <polygon points="225,16 235,16 230,26" />
              </g>
              <g stroke="#1f2937" fill="none" strokeWidth={1.2}>
                <polygon points="173,86 183,86 178,94" />
                <rect x={292} y={90} width={9} height={8} />
              </g>
              <g fill="#1f2937">
                <circle cx={282} cy={118} r={4.5} />
                <rect x={278} y={146} width={9} height={8} />
              </g>
              <g stroke="#1f2937" fill="none" strokeWidth={1.2}>
                <circle cx={230} cy={170} r={4} />
              </g>
              <text x={282} y={148} fontSize={26} fill="#6b7280" textAnchor="middle">?</text>
            </g>
      </svg><figcaption>图：题干九宫格（每格＝一个圆：内部"十"/空白/斜线 + 圆外挂一个小图案）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 406 130" role="img" aria-label="四个选项：圆内十字，圆外三角分别在上右下左">
      <g transform="translate(0,2)">
              <g stroke="#1f2937" fill="#ffffff" strokeWidth={1.2}>
                <rect x={76} y={20} width={68} height={68} /><rect x={156} y={20} width={68} height={68} /><rect x={236} y={20} width={68} height={68} /><rect x={316} y={20} width={68} height={68} />
              </g>
              <g stroke="#1f2937" fill="none" strokeWidth={1.2}>
                <circle cx={110} cy={54} r={16} /><line x1={94} y1={54} x2={126} y2={54} /><line x1={110} y1={38} x2={110} y2={70} />
                <polygon points="105,36 115,36 110,26" />
                <circle cx={190} cy={54} r={16} /><line x1={174} y1={54} x2={206} y2={54} /><line x1={190} y1={38} x2={190} y2={70} />
                <polygon points="208,49 208,59 218,54" />
                <circle cx={270} cy={54} r={16} /><line x1={254} y1={54} x2={286} y2={54} /><line x1={270} y1={38} x2={270} y2={70} />
                <polygon points="265,72 275,72 270,82" />
                <circle cx={350} cy={54} r={16} /><line x1={334} y1={54} x2={366} y2={54} /><line x1={350} y1={38} x2={350} y2={70} />
                <polygon points="332,49 332,59 322,54" />
              </g>
              <g fontSize={12} fill="#1f2937" textAnchor="middle">
                <text x={110} y={103} fill="#1f2937">A</text><text x={190} y={103} fill="#1f2937">B</text><text x={270} y={103} fill="#1f2937">C</text><text x={350} y={103} fill="#1f2937">D</text>
              </g>
            </g>
      </svg><figcaption>选项 A / B / C / D（圆内都是"十"，圆外三角分别在上 / 右 / 下 / 左）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>①<b>圆内层</b>：空白、十字、斜线，每行每列各出现一次 → 第 3 行缺"十字"。②<b>圆外层形状</b>：小圆、小三角、小方块，每行每列各一次 → 第 3 行缺"小三角"。③<b>圆外层位置</b>：左→上→右→下 顺时针循环，第 3 行已有"右、下"，缺"左"。④颜色：黑白交替出现，此处为白色。故"圆内十字 + 左挂白三角"。<br /><span className="correct">答案：D</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
            <Block>
        <BlockTitle>补充4. 汉字题：偏旁"两两组合"＝部件遍历（特色刷题）</BlockTitle>
        <p>夸夸刷第六组"特色刷题"专门放了<b>汉字题</b>（（三）P111/P118）。汉字题的常见破法不是数笔画，而是<b>把字拆成两个部件</b>，看这组字的部件是不是"三个部件两两组合、每个部件出现两次"——本质就是<b>遍历（缺啥补啥）</b>。</p>
        <Callout variant="key">口诀：<b>汉字先拆部件，再数"哪个部件还欠一次"</b>。第一组＝A、B、C 三个部件两两组合（AB、AC、BC）；第二组只换部件，结构照抄。</Callout>
        <Example>
          <ExampleHeader>📝 例题4 · 汉字 · 部件遍历（24天津事业-77%）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 459 108" role="img" aria-label="五个汉字好字安边运和一个问号">
      <g transform="translate(0,2)">
              <g stroke="#1f2937" fill="#ffffff" strokeWidth={1.2}>
                <rect x={23} y={20} width={64} height={64} /><rect x={93} y={20} width={64} height={64} /><rect x={163} y={20} width={64} height={64} />
                <rect x={233} y={20} width={64} height={64} /><rect x={303} y={20} width={64} height={64} /><rect x={373} y={20} width={64} height={64} />
              </g>
              <g fontSize={30} fill="#1f2937" textAnchor="middle">
                <text x={55} y={63} fill="#1f2937">好</text><text x={125} y={63} fill="#1f2937">字</text><text x={195} y={63} fill="#1f2937">安</text><text x={265} y={63} fill="#1f2937">边</text><text x={335} y={63} fill="#1f2937">运</text>
              </g>
              <text x={405} y={63} fontSize={28} fill="#6b7280" textAnchor="middle">?</text>
            </g>
      </svg><figcaption>图：题干汉字"好、字、安、边、运"</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 389 127" role="img" aria-label="四个选项汉字过芸动适">
      <g transform="translate(0,2)">
              <g stroke="#1f2937" fill="#ffffff" strokeWidth={1.2}>
                <rect x={93} y={20} width={64} height={64} /><rect x={163} y={20} width={64} height={64} /><rect x={233} y={20} width={64} height={64} /><rect x={303} y={20} width={64} height={64} />
              </g>
              <g fontSize={30} fill="#1f2937" textAnchor="middle">
                <text x={125} y={63} fill="#1f2937">过</text><text x={195} y={63} fill="#1f2937">芸</text><text x={265} y={63} fill="#1f2937">动</text><text x={335} y={63} fill="#1f2937">适</text>
              </g>
              <g fontSize={12} fill="#1f2937" textAnchor="middle">
                <text x={122} y={100} fill="#1f2937">A</text><text x={194} y={100} fill="#1f2937">B</text><text x={266} y={100} fill="#1f2937">C</text><text x={338} y={100} fill="#1f2937">D</text>
              </g>
            </g>
      </svg><figcaption>选项 A / B / C / D（过 / 芸 / 动 / 适）</figcaption></figure>
            <ExampleAnswer><b>解析：</b>前三个字"好（女+子）、字（宀+子）、安（宀+女）"＝由<b>女、子、宀</b>三个部件两两组合，每个部件出现两次。后三个字"边（辶+力）、运（辶+云）、?"同理应由 <b>辶、力、云</b> 两两组合：辶已出现两次，力出现一次、云出现一次 → 缺的那个字要同时含"力 + 云"，即"动"。<br /><span className="correct">答案：C（动）</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
            <Block>
        <BlockTitle>补充12. 出题者"外框怎么出"：同一组黑白块，换 4 种考法（提法未展开）</BlockTitle>
        <p>夸夸刷（二）P41-42 有一页只列了标题、没展开：<b>"出题者-外框'怎么出'"</b>——把同一组黑白块图，外框换成 <b>对称 / 图形关系 / 直角 / 直线</b> 四种考法，题干图形长得几乎一样，考点却完全不同。同页还给出"照抄"的四条路线：<b>①运算（做差/倍速）②位置（上下比较）③颜色（黑色→白色）④堆数（2 堆→3 堆）</b>。</p>
        <p>配套的"哪里抄"很直观：（二）P41 把 22 联考与 24 国考的黑白块个数并排摆——22 联考"黑色 6,4,3 / 白色 5,4,4"；24 国考"黑色 5,3,4,5,6 / 白色 4,4,3,6,5"——就是用同一套黑白块，换白/黑的数量关系再考一遍。（一）P114-115 同理：<b>24 国考"2 堆→黑色部分数"，24 山西"2 堆→黑色对称"</b>。</p>
        <Callout variant="key">口诀：<b>黑白块看腻了就换外框</b>——对称（仅黑/仅白）、图形关系（黑面与白面）、直角、直线，四种轮着考；数量不够就"黑↔白"互换、"2 堆→3 堆"、把对称轴"升级成 +个数"。</Callout>
      </Block>
            <Block>
        <BlockTitle>补充8. 混淆点：图形关系 vs 黑白运算（个数相等 vs 个数不相等）</BlockTitle>
        <p>夸夸刷（六）第 92 页给出一条极实用的判别标准：</p>
        <p>① <b>图形关系</b>——高频特征是<b>各图元素"个数相等"</b>（图形只在位置/交叠关系上变化，数量不变），此时看相离/相交/包含；<br />② <b>黑白运算</b>——高频特征是<b>各图元素"个数不相等"</b>（黑块有增有减），此时用相同位置"黑+白=？"去做加减同异。</p>
        <Callout variant="key">口诀：<b>个数相等看"关系"，个数不等做"运算"</b>。<br />刘义恒原话："不要死记硬背，出题者想'害人'"——同一个图形长得很像，判据就是数一数个数有没有变。</Callout>
        <figure className="fig">
          <svg viewBox="0 0 445 141" role="img" aria-label="图形关系与黑白运算判别示意">
      <g transform="translate(0,1)">
            <g stroke="#6b7280" strokeWidth={1.2} fill="none">
              <circle cx={85} cy={60} r={34} /><circle cx={185} cy={60} r={34} />
            </g>
            <g fill="#1f2937">
              <circle cx={85} cy={45} r={5} /><circle cx={72} cy={70} r={5} /><circle cx={100} cy={72} r={5} />
              <circle cx={185} cy={45} r={5} /><circle cx={172} cy={70} r={5} /><circle cx={200} cy={72} r={5} />
            </g>
            <text x={135} y={115} fontSize={12.5} textAnchor="middle" fill="#10b981">个数相等 → 图形关系</text>
            <g stroke="#6b7280" strokeWidth={1.2} fill="none">
              <circle cx={330} cy={55} r={30} />
            </g>
            <g fill="#1f2937">
              <circle cx={330} cy={42} r={4.5} /><circle cx={318} cy={64} r={4.5} /><circle cx={344} cy={66} r={4.5} />
            </g>
            <text x={330} y={32} fontSize={11.5} textAnchor="middle" fill="#f59e0b">3 个黑点</text>
            <text x={330} y={100} fontSize={11.5} textAnchor="middle" fill="#f59e0b">5 个黑点（个数不等）</text>
            <text x={400} y={60} fontSize={13} textAnchor="middle" fill="#ef4444">→</text>
            <text x={400} y={80} fontSize={11.5} textAnchor="middle" fill="#ef4444">黑白运算</text>
          </g>
      </svg>
          <figcaption>图：个数相等看关系，个数不等做黑白运算</figcaption>
        </figure>
      </Block>
            <Block>
        <BlockTitle>补充7. 标记的扩展 · 从"标记点/面"到"标记线 / 标记角"</BlockTitle>
        <p>标记类考题的"标记物"边界一直在扩。除了常见的<b>标记点</b>（点本身：曲直性、引发的线条数量）和<b>标记面</b>（单独面/相交面、形状属性面积），近两年出现了两类新对象：</p>
        <Callout variant="key"><b>标记线</b>（黑点抓的是"一条线"）→ 考四件事：① 直线 / 曲线；② 最长线 / 最短线；③ 线的位置（横、竖、斜）；④ <b>两条被标记的线之间的关系：平行、垂直、方向、是否相交</b>。<br /><b>标记角</b>（黑点抓的是"一个角"）→ 考三件事：① 直角 / 锐角 / 钝角；② 最大角 / 最小角；③ 角所在的位置。</Callout>
        <p>真题锚点：<b>24 江苏</b>（标记线）、<b>25 北京</b>（标记角）、<b>25 沈阳事业</b>（图形中两条被标记线都是"一横一竖"，故称"横竖线"）。另外两个由老师自编的模拟题把这个考点推到难题层：<b>模拟1</b>——标记线的"平行、垂直 + 方向"（答案 C）；<b>模拟2</b>——标记的两条线"是否相交"（答案 D）。同一道题干，只换考点就能出不同的题，这就是超大杯反复强调的"<b>一图多考</b>"。</p>
        <Example>
          <ExampleHeader>📝 例题5 · 两条被标记的线（25 沈阳事业）</ExampleHeader>
          <ExampleBody>
            <ExampleQuestion>从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性。</ExampleQuestion>
            <figure className="fig"><svg viewBox="0 0 446 131" role="img" aria-label="例题题干五个图形">
              <polygon points="29,88 29,48 52,30 75,48 75,88" fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <line x1={52} y1={40} x2={52} y2={80} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={52} cy={40} r={2.6} fill="#ef4444" />
              <line x1={35} y1={60} x2={69} y2={60} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={69} cy={60} r={2.6} fill="#2563eb" />
              <polygon points="102,34 102,86 144,86 144,64 124,64 124,34" fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <line x1={112} y1={46} x2={112} y2={76} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={112} cy={46} r={2.6} fill="#ef4444" />
              <line x1={126} y1={74} x2={138} y2={74} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={138} cy={74} r={2.6} fill="#2563eb" />
              <rect x={174} y={34} width={40} height={52} fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <line x1={182} y1={78} x2={206} y2={44} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={206} cy={44} r={2.6} fill="#ef4444" />
              <line x1={196} y1={78} x2={208} y2={62} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={208} cy={62} r={2.6} fill="#2563eb" />
              <polygon points="256,34 274,34 274,46 286,46 286,74 274,74 274,86 256,86 256,74 244,74 244,46 256,46" fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <line x1={265} y1={42} x2={265} y2={80} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={265} cy={80} r={2.6} fill="#ef4444" />
              <line x1={250} y1={64} x2={280} y2={64} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={280} cy={64} r={2.6} fill="#2563eb" />
              <polygon points="316,88 316,60 330,60 330,34 362,34 362,88" fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <line x1={324} y1={80} x2={354} y2={44} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={354} cy={44} r={2.6} fill="#ef4444" />
              <line x1={326} y1={44} x2={352} y2={80} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={352} cy={80} r={2.6} fill="#2563eb" />
              <rect x={380} y={34} width={44} height={52} fill="none" stroke="#ef4444" strokeWidth={1.4} strokeDasharray="4 3" />
              <text x={402} y={70} fontSize={24} fill="#ef4444" textAnchor="middle">?</text>
              <text x={52} y={106} fontSize={12} fill="#6b7280" textAnchor="middle">①</text>
              <text x={123} y={106} fontSize={12} fill="#6b7280" textAnchor="middle">②</text>
              <text x={194} y={106} fontSize={12} fill="#6b7280" textAnchor="middle">③</text>
              <text x={265} y={106} fontSize={12} fill="#6b7280" textAnchor="middle">④</text>
              <text x={339} y={106} fontSize={12} fill="#6b7280" textAnchor="middle">⑤</text>
            </svg><figcaption>图：题干每个图形里都有两条被黑点"抓住"的线（红点=线的一端）</figcaption></figure>
            <figure className="fig"><svg viewBox="0 0 464 131" role="img" aria-label="例题四个选项">
      <g transform="translate(2,2)">
              <rect x={20} y={20} width={90} height={70} fill="none" stroke="#6b7280" strokeWidth={1.2} />
              <circle cx={65} cy={55} r={26} fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <line x1={65} y1={30} x2={65} y2={80} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={65} cy={30} r={2.6} fill="#ef4444" />
              <line x1={42} y1={55} x2={88} y2={55} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={88} cy={55} r={2.6} fill="#2563eb" />
              <rect x={130} y={20} width={90} height={70} fill="none" stroke="#6b7280" strokeWidth={1.2} />
              <polygon points="155,55 172,40 189,55 189,72 172,72" fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <line x1={160} y1={62} x2={184} y2={62} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={184} cy={62} r={2.6} fill="#2563eb" />
              <line x1={150} y1={45} x2={176} y2={45} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={150} cy={45} r={2.6} fill="#ef4444" />
              <rect x={240} y={20} width={90} height={70} fill="none" stroke="#6b7280" strokeWidth={1.2} />
              <circle cx={285} cy={55} r={25} fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <line x1={266} y1={42} x2={304} y2={68} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={304} cy={68} r={2.6} fill="#2563eb" />
              <line x1={266} y1={68} x2={304} y2={42} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={266} cy={68} r={2.6} fill="#ef4444" />
              <rect x={350} y={20} width={90} height={70} fill="none" stroke="#6b7280" strokeWidth={1.2} />
              <polygon points="360,84 360,30 438,30 438,84" fill="none" stroke="#1f2937" strokeWidth={1.6} />
              <line x1={380} y1={36} x2={380} y2={78} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={380} cy={36} r={2.6} fill="#ef4444" />
              <line x1={392} y1={58} x2={424} y2={58} stroke="#6b7280" strokeWidth={1.5} />
              <circle cx={424} cy={58} r={2.6} fill="#2563eb" />
              <text x={65} y={104} fontSize={12.5} fill="#6b7280" textAnchor="middle">A</text>
              <text x={175} y={104} fontSize={12.5} fill="#6b7280" textAnchor="middle">B</text>
              <text x={285} y={104} fontSize={12.5} fill="#6b7280" textAnchor="middle">C</text>
              <text x={395} y={104} fontSize={12.5} fill="#6b7280" textAnchor="middle">D</text>
            </g>
      </svg><figcaption>选项 A / B / C / D</figcaption></figure>
            <ExampleAnswer><b>解析：</b>题干每个图形里都恰好有<b>两条被黑点标记的线</b>，一横一竖，且两条线<b>相交</b>（构成"十字"）。这属于典型的"标记线"考法。<br />A、B、C 中总有标记线出现斜线 / 两线平行不相交 / 相交方式不符；<b>只有 D 的两条标记线仍是"一横一竖且相交"</b>。<br /><span className="correct">答案：D</span></ExampleAnswer>
          </ExampleBody>
        </Example>
      </Block>
            <Block>
        <BlockTitle>补充8. "颜色变化"的复合趋势（叠加题的新变种）</BlockTitle>
        <p>加减同异 / 黑白运算本身是老考点，但近年出现了一整族<b>"颜色变化"变种</b>——不再是"黑+白=黑"这种表格运算，而是规定<b>某种区域整体变色</b>。老师把它总结成一句话："<b>颜色变化的复合是趋势</b>"。</p>
        <Callout variant="key"><b>三个必须记住的"变色规则"：</b><br />① <b>重叠部分变白</b>（25 上海）：两个图形叠加后，<b>相交的那一块</b>变成白色，其余保持原色。<br />② <b>不同部分变白 / 消失</b>（25 广东）：叠加后<b>不重合的区域</b>变白（等于"消失"），只留下重合部分。<br />③ <b>不同部分变黑 + 翻转</b>（25 北京）：不同部分变黑，同时第 2 幅图要<b>上下翻转</b>。</Callout>
        <p>而且它一定和别的东西<b>复合</b>出题：<b>20 浙江、22 上海</b>是"旋转 + 颜色变化"；<b>25 国考、25 联考事业</b>是"相邻比较 + 颜色变化"。所以判断顺序是：<b>先看有没有旋转/相邻比较，再看颜色怎么变</b>。</p>
        <figure className="fig"><svg viewBox="0 0 450.8 177" role="img" aria-label="重叠部分变白规则示意">
      <g transform="translate(0,8)">
          <text x={230} y={26} fontSize={12.5} fill="#1f2937" textAnchor="middle">规则①：两图叠加后，相交（重叠）的那一块变白</text>
          <rect x={40} y={45} width={70} height={65} fill="#1f2937" />
          <text x={75} y={128} fontSize={11.5} fill="#6b7280" textAnchor="middle">图1</text>
          <text x={120} y={84} fontSize={20} fill="#2563eb" textAnchor="middle">+</text>
          <rect x={155} y={62} width={70} height={65} fill="#1f2937" />
          <text x={190} y={145} fontSize={11.5} fill="#6b7280" textAnchor="middle">图2</text>
          <text x={238} y={102} fontSize={20} fill="#2563eb" textAnchor="middle">=</text>
          <rect x={275} y={45} width={70} height={17} fill="#1f2937" />
          <rect x={275} y={62} width={70} height={48} fill="#ffffff" stroke="#1f2937" strokeWidth={1} />
          <rect x={275} y={110} width={70} height={17} fill="#1f2937" />
          <text x={310} y={145} fontSize={11.5} fill="#ef4444" textAnchor="middle">重叠区 → 白</text>
          <text x={400} y={80} fontSize={11.5} fill="#6b7280" textAnchor="middle">答案句：</text>
          <text x={400} y={100} fontSize={11.5} fill="#6b7280" textAnchor="middle">"撞在一起"</text>
          <text x={400} y={120} fontSize={11.5} fill="#6b7280" textAnchor="middle">的那块留白</text>
        </g>
      </svg><figcaption>图："重叠部分变白"的判定示意</figcaption></figure>
        <Callout variant="key">真题锚点（同一考点 6 道）：20 浙江（旋转+颜色变化）· 22 上海（旋转+颜色变化）· 25 上海（重叠部分变白）· 25 广东（不同部分变白/消失）· 25 国考（相连比较+颜色变化）· 25 联考事业（相邻比较+颜色变化）。</Callout>
      </Block>
    </>
  )
}
