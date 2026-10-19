import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleQuestion, PointList } from '@/components/content'

/**
 * 八、立体拼合
 *
 * @returns 该节正文。
 */
export default function S9(): ReactElement {
  return (
    <>
      <Block>
      <BlockTitle>1. 立体拼合的思想准备与做题次序</BlockTitle>
      <p>立体拼合是空间题里最"劝退"的一类。刘义恒老师开篇就把它定性为<b>思维题</b>而不是技巧题：考题不会重复，靠背题型没用，靠的是稳定的观察顺序和空间想象力。</p>
      <PointList>
      <li><b>淡化技巧，强化思维。</b>题目不会重复，没听懂先标记、跟着思路走；空间思维完全可以后天培养。</li>
      <li><b>猜测也要有技巧</b>，但在考场上<b>放弃要更果断</b>——立体拼合性价比低，能数出来就选，数不出来就蒙一个走人。</li>
      <li><b>调整心态：</b>知识点本身就是难点，不焦虑不浮躁，静下心、平常心。</li>
      <li><b>集中注意力：</b>一起做题，不单独做题；课下再复盘、做笔记。</li>
      </PointList>
      <Callout variant="key"><b>做题次序（第一步：看选项，选方法）</b>
      <PointList>
      <li>1. 选项<b>个数有差别</b> → 优先考虑<b>数个数</b>；</li>
      <li>2. 选项<b>分层明显</b>或<b>每层个数不一样</b> → 优先考虑<b>分层拼 / 分层数</b>；</li>
      <li>3. 考虑<b>找特殊</b>，即找题干中<b>最大或抽象</b>的方块，优先代入。</li>
      </PointList></Callout>
      <Callout variant="formula"><span className="formula">速记口诀：① 个数　② 层数　③ 特殊</span></Callout>
      <Callout variant="tip"><b>易错点：</b>这三步是"看选项选方法"，不是三件事都做一遍。选项个数明显不同就只数个数；个数一样才去看分层形状。顺序反了，时间就耗光了。</Callout>
      </Block>
      <Block>
      <BlockTitle>2. 第一步：数个数——选项个数有差别，优先考虑数个数</BlockTitle>
      <p>只要四个选项的<b>块数不一样</b>，本题多半就是一道"加法题"：题干大图形的总块数 = 已给出的几块之和 + 所求的一块。这时<b>不用看形状</b>，数一遍就能定答案。</p>
      <Callout variant="key"><b>什么时候需要数？</b>
      <PointList>
      <li><b>打算猜，可以数</b>——快速算术，能秒杀就秒杀；</li>
      <li><b>打算做，先不数</b>——如果准备认真拼形状，先别急着数，免得被数字带偏；</li>
      <li><b>选项 3 个一致，尽量不数</b>——四个选项里三个块数相同，说明考点不在个数上。</li>
      </PointList></Callout>
      <figure className="fig"><svg viewBox="0 0 470 359" role="img" aria-label="两组选项对比图">
      <g transform="translate(8,16)">
      <rect x={14} y={6} width={102} height={94} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="23,59 35,47 59,47 47,59" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="47,59 59,47 59,71 47,83" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={23} y={59} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="47,59 59,47 83,47 71,59" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="71,59 83,47 83,71 71,83" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={47} y={59} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="71,59 83,47 107,47 95,59" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="95,59 107,47 107,71 95,83" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={71} y={59} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="23,35 35,23 59,23 47,35" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="47,35 59,23 59,47 47,59" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={23} y={35} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="47,35 59,23 83,23 71,35" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="71,35 83,23 83,47 71,59" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={47} y={35} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={65} y={122} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">A</text>
      <text x={65} y={138} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">3 块</text>
      <rect x={122} y={6} width={102} height={94} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="149,41 161,29 185,29 173,41" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="173,41 185,29 185,53 173,65" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={149} y={41} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="173,41 185,29 209,29 197,41" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="197,41 209,29 209,53 197,65" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={173} y={41} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="137,53 149,41 173,41 161,53" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="161,53 173,41 173,65 161,77" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={137} y={53} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="161,53 173,41 197,41 185,53" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="185,53 197,41 197,65 185,77" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={161} y={53} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={173} y={122} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">B</text>
      <text x={173} y={138} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">4 块</text>
      <rect x={230} y={6} width={102} height={94} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="251,59 263,47 287,47 275,59" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="275,59 287,47 287,71 275,83" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={251} y={59} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="275,59 287,47 311,47 299,59" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="299,59 311,47 311,71 299,83" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={275} y={59} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="251,35 263,23 287,23 275,35" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="275,35 287,23 287,47 275,59" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={251} y={35} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={281} y={122} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">C</text>
      <text x={281} y={138} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">3 块</text>
      <rect x={338} y={6} width={102} height={94} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="401,53 413,41 437,41 425,53" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="425,53 437,41 437,65 425,77" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={401} y={53} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="401,29 413,17 437,17 425,29" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="425,29 437,17 437,41 425,53" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={401} y={29} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="341,65 353,53 377,53 365,65" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="365,65 377,53 377,77 365,89" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={341} y={65} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="365,65 377,53 401,53 389,65" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="389,65 401,53 401,77 389,89" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={365} y={65} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="389,65 401,53 425,53 413,65" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="413,65 425,53 425,77 413,89" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={389} y={65} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={389} y={122} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">D</text>
      <text x={389} y={138} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">5 块</text>
      <rect x={14} y={152} width={102} height={94} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="23,205 35,193 59,193 47,205" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="47,205 59,193 59,217 47,229" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={23} y={205} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="47,205 59,193 83,193 71,205" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="71,205 83,193 83,217 71,229" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={47} y={205} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="71,205 83,193 107,193 95,205" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="95,205 107,193 107,217 95,229" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={71} y={205} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="23,181 35,169 59,169 47,181" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="47,181 59,169 59,193 47,205" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={23} y={181} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="47,181 59,169 83,169 71,181" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="71,181 83,169 83,193 71,205" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={47} y={181} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={65} y={268} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">A</text>
      <text x={65} y={284} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">5 块</text>
      <rect x={122} y={152} width={102} height={94} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="149,187 161,175 185,175 173,187" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="173,187 185,175 185,199 173,211" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={149} y={187} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="173,187 185,175 209,175 197,187" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="197,187 209,175 209,199 197,211" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={173} y={187} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="137,199 149,187 173,187 161,199" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="161,199 173,187 173,211 161,223" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={137} y={199} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="161,199 173,187 197,187 185,199" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="185,199 197,187 197,211 185,223" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={161} y={199} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={173} y={268} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">B</text>
      <text x={173} y={284} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">4 块</text>
      <rect x={230} y={152} width={102} height={94} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="293,199 305,187 329,187 317,199" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="317,199 329,187 329,211 317,223" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={293} y={199} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="293,175 305,163 329,163 317,175" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="317,175 329,163 329,187 317,199" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={293} y={175} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="233,211 245,199 269,199 257,211" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="257,211 269,199 269,223 257,235" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={233} y={211} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="257,211 269,199 293,199 281,211" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="281,211 293,199 293,223 281,235" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={257} y={211} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="281,211 293,199 317,199 305,211" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="305,211 317,199 317,223 305,235" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={281} y={211} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={281} y={268} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">C</text>
      <text x={281} y={284} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">5 块</text>
      <rect x={338} y={152} width={102} height={94} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="359,199 371,187 395,187 383,199" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="383,199 395,187 395,211 383,223" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={359} y={199} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="359,175 371,163 395,163 383,175" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="383,175 395,163 395,187 383,199" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={359} y={175} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="347,211 359,199 383,199 371,211" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="371,211 383,199 383,223 371,235" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={347} y={211} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="371,211 383,199 407,199 395,211" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="395,211 407,199 407,223 395,235" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={371} y={211} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="395,211 407,199 431,199 419,211" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="419,211 431,199 431,223 419,235" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={395} y={211} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={389} y={268} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">D</text>
      <text x={389} y={284} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">5 块</text>
      <text x={238} y={170} fontSize={13} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">第一组：个数有差别 → 打算猜，可以数</text>
      <text x={238} y={318} fontSize={13} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">第二组：三个选项都是 5 块 → 个数一致，尽量不数</text>
      </g>
      </svg><figcaption>图：两组选项对比——个数有差别 / 三个一致</figcaption></figure><Example>
      <ExampleHeader>📝 例题1 · 数个数（"立体拼合-常规"五件套）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>左边的立体图形由 22 个小正方体组成，① 5 块、② 6 块、③ 5 块，则 ④ 应为下面哪一个？</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 308 192" role="img" aria-label="题干：22 块立体图形">
      <polygon points="202,122 214,110 238,110 226,122" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="226,122 238,110 238,134 226,146" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={202} y={122} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="226,122 238,110 262,110 250,122" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="250,122 262,110 262,134 250,146" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={226} y={122} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="250,122 262,110 286,110 274,122" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="274,122 286,110 286,134 274,146" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={250} y={122} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="202,98 214,86 238,86 226,98" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="226,98 238,86 238,110 226,122" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={202} y={98} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="226,98 238,86 262,86 250,98" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="250,98 262,86 262,110 250,122" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={226} y={98} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="250,98 262,86 286,86 274,98" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="274,98 286,86 286,110 274,122" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={250} y={98} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="202,74 214,62 238,62 226,74" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="226,74 238,62 238,86 226,98" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={202} y={74} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="226,74 238,62 262,62 250,74" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="250,74 262,62 262,86 250,98" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={226} y={74} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="202,50 214,38 238,38 226,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="226,50 238,38 238,62 226,74" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={202} y={50} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="190,134 202,122 226,122 214,134" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="214,134 226,122 226,146 214,158" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={190} y={134} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="214,134 226,122 250,122 238,134" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="238,134 250,122 250,146 238,158" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={214} y={134} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="238,134 250,122 274,122 262,134" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="262,134 274,122 274,146 262,158" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={238} y={134} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="190,110 202,98 226,98 214,110" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="214,110 226,98 226,122 214,134" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={190} y={110} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="214,110 226,98 250,98 238,110" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="238,110 250,98 250,122 238,134" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={214} y={110} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="238,110 250,98 274,98 262,110" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="262,110 274,98 274,122 262,134" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={238} y={110} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="190,86 202,74 226,74 214,86" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="214,86 226,74 226,98 214,110" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={190} y={86} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="214,86 226,74 250,74 238,86" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="238,86 250,74 250,98 238,110" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={214} y={86} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="190,62 202,50 226,50 214,62" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="214,62 226,50 226,74 214,86" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={190} y={62} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="178,146 190,134 214,134 202,146" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="202,146 214,134 214,158 202,170" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={178} y={146} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="202,146 214,134 238,134 226,146" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="226,146 238,134 238,158 226,170" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={202} y={146} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="226,146 238,134 262,134 250,146" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="250,146 262,134 262,158 250,170" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={226} y={146} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="178,122 190,110 214,110 202,122" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="202,122 214,110 214,134 202,146" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={178} y={122} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      </svg><figcaption>图：题干大立体图形（阶梯状，共 22 块）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 470 174.8" role="img" aria-label="四块碎片">
      <g transform="translate(8,16)">
      <rect x={14} y={6} width={102} height={94} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="23,59 35,47 59,47 47,59" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="47,59 59,47 59,71 47,83" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={23} y={59} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="47,59 59,47 83,47 71,59" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="71,59 83,47 83,71 71,83" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={47} y={59} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="71,59 83,47 107,47 95,59" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="95,59 107,47 107,71 95,83" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={71} y={59} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="23,35 35,23 59,23 47,35" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="47,35 59,23 59,47 47,59" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={23} y={35} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="47,35 59,23 83,23 71,35" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="71,35 83,23 83,47 71,59" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={47} y={35} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={65} y={122} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">①</text>
      <text x={65.0} y={134.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">5 块</text>
      <rect x={122} y={6} width={102} height={94} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="149,47 161,35 185,35 173,47" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="173,47 185,35 185,59 173,71" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={149} y={47} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="173,47 185,35 209,35 197,47" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="197,47 209,35 209,59 197,71" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={173} y={47} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="137,59 149,47 173,47 161,59" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="161,59 173,47 173,71 161,83" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={137} y={59} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="161,59 173,47 197,47 185,59" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="185,59 197,47 197,71 185,83" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={161} y={59} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="137,35 149,23 173,23 161,35" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="161,35 173,23 173,47 161,59" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={137} y={35} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="161,35 173,23 197,23 185,35" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="185,35 197,23 197,47 185,59" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={161} y={35} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={173} y={122} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">②</text>
      <text x={173.0} y={134.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">6 块</text>
      <rect x={230} y={6} width={102} height={94} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="239,59 251,47 275,47 263,59" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="263,59 275,47 275,71 263,83" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={239} y={59} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="263,59 275,47 299,47 287,59" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="287,59 299,47 299,71 287,83" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={263} y={59} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="287,59 299,47 323,47 311,59" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="311,59 323,47 323,71 311,83" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={287} y={59} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="263,35 275,23 299,23 287,35" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="287,35 299,23 299,47 287,59" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={263} y={35} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="287,35 299,23 323,23 311,35" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="311,35 323,23 323,47 311,59" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={287} y={35} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={281} y={122} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">③</text>
      <text x={281.0} y={134.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">5 块</text>
      <rect x={338} y={6} width={102} height={94} rx={8} fill="#fff7ed" stroke="#f59e0b" strokeWidth={1.6} />
      <text x={389} y={68} fontSize={32} fill="#f59e0b" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">？</text>
      <text x={389} y={122} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">④</text>
      </g>
      </svg><figcaption>图：题干给出的四块碎片（①5、②6、③5、④？）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 486 170.9" role="img" aria-label="四个选项">
      <g transform="translate(4,16)">
      <rect x={18} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="51.32,40.16 61.16,30.32 80.84,30.32 71,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="71,40.16 80.84,30.32 80.84,50 71,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={51.32} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="71,40.16 80.84,30.32 100.52,30.32 90.68,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="90.68,40.16 100.52,30.32 100.52,50 90.68,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={71} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="41.48,50 51.32,40.16 71,40.16 61.16,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="61.16,50 71,40.16 71,59.84 61.16,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={41.48} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="61.16,50 71,40.16 90.68,40.16 80.84,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="80.84,50 90.68,40.16 90.68,59.84 80.84,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={61.16} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={71} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">A</text>
      <text x={71.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">4 块</text>
      <rect x={130} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="148.56,54.92 158.4,45.08 178.08,45.08 168.24,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="168.24,54.92 178.08,45.08 178.08,64.76 168.24,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={148.56} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="168.24,54.92 178.08,45.08 197.76,45.08 187.92,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="187.92,54.92 197.76,45.08 197.76,64.76 187.92,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={168.24} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="187.92,54.92 197.76,45.08 217.44,45.08 207.6,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="207.6,54.92 217.44,45.08 217.44,64.76 207.6,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={187.92} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="148.56,35.24 158.4,25.4 178.08,25.4 168.24,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="168.24,35.24 178.08,25.4 178.08,45.08 168.24,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={148.56} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="168.24,35.24 178.08,25.4 197.76,25.4 187.92,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="187.92,35.24 197.76,25.4 197.76,45.08 187.92,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={168.24} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={183} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">B</text>
      <text x={183.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">5 块</text>
      <rect x={242} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="304.84,50 314.68,40.16 334.36,40.16 324.52,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="324.52,50 334.36,40.16 334.36,59.84 324.52,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={304.84} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="304.84,30.32 314.68,20.48 334.36,20.48 324.52,30.32" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="324.52,30.32 334.36,20.48 334.36,40.16 324.52,50" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={304.84} y={30.32} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="255.64,59.84 265.48,50 285.16,50 275.32,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="275.32,59.84 285.16,50 285.16,69.68 275.32,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={255.64} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="275.32,59.84 285.16,50 304.84,50 295,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="295,59.84 304.84,50 304.84,69.68 295,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={275.32} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="295,59.84 304.84,50 324.52,50 314.68,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="314.68,59.84 324.52,50 324.52,69.68 314.68,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={295} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={295} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">C</text>
      <text x={295.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">5 块</text>
      <rect x={354} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="377.48,40.16 387.32,30.32 407,30.32 397.16,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="397.16,40.16 407,30.32 407,50 397.16,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={377.48} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="397.16,40.16 407,30.32 426.68,30.32 416.84,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="416.84,40.16 426.68,30.32 426.68,50 416.84,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={397.16} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="416.84,40.16 426.68,30.32 446.36,30.32 436.52,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="436.52,40.16 446.36,30.32 446.36,50 436.52,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={416.84} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="367.64,50 377.48,40.16 397.16,40.16 387.32,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="387.32,50 397.16,40.16 397.16,59.84 387.32,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={367.64} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="387.32,50 397.16,40.16 416.84,40.16 407,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="407,50 416.84,40.16 416.84,59.84 407,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={387.32} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="407,50 416.84,40.16 436.52,40.16 426.68,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="426.68,50 436.52,40.16 436.52,59.84 426.68,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={407} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={407} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">D</text>
      <text x={407.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">6 块</text>
      </g>
      </svg><figcaption>四个选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>先看选项：A 4 块、B 5 块、C 5 块、D 6 块——<b>个数有差别，直接数个数</b>。题干大图形共 22 块，已给出 ①5 + ②6 + ③5 = 16 块，所以 ④ = 22 − 16 = <b>6 块</b>。四个选项中只有 D 是 6 块，不需要再比对形状。<br /><span className="correct">答案：D</span>　<span className="src">（五件套加法题，讲义 p9-11）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      </Block>
      <Block>
      <BlockTitle>3. 第二步：分层数与分层拼——每层个数不一样，数层数性价比最高</BlockTitle>
      <p>当四个选项的<b>块数差不多</b>、但<b>分层明显</b>（比如都能看出上、中、下三层）时，就换成"数每层个数"。'
      把目标图形（正方体 / 长方体 / 题干大图形）按层拆开，逐层做减法，看哪个选项的三层个数刚好补上缺口。</p>
      <PointList>
      <li><b>数每层个数，优先考虑不旋转的情况</b>——先按原方位试，能对上就别转。</li>
      <li><b>每层个数不一样，数层数性价比最高</b>——一眼就能排除几个选项。</li>
      <li><b>每层个数一致的选项，正确可能性更高</b>——如果某个选项的三层个数和缺口完全一致，它多半就是答案。</li>
      <li>层数做完还分不出来，就把选项<b>转换成平面图</b>（每层画成九宫格），逐格比对。</li>
      </PointList>
      <Callout variant="tip"><b>易错点：</b>"层"要按<b>同一个方向</b>数。题干按上→下数，选项也必须上→下数；不要题干从上数、选项从下数，那样层数全是错的。</Callout>
      <Callout variant="tip"><b>同型四连（国考"正视图 + 后视图"类，共 4 道）：</b>讲义 p64-100 连排了四道结构完全相同的题——20 国考（难度 73%）、21 国考（58%）、22 国考（36%）、20 国考（40），题干都是"给出正视图和后视图，问①②③中哪一块能填入问号处"。解法与上面两步完全一致：先数个数、再分层数，都排不掉就找最特殊的那一块优先代入（讲义在这四道题上分别标注答案 <b>B、C、D、D</b>）。它们的关键动作是<b>铅笔涂黑</b>——把代入的那一块涂黑，再看剩下的缺口长什么样。</Callout>
      <Example>
      <ExampleHeader>📝 例题2 · 分层数 + 分层拼（2023 广东，难度 60%）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>下列选项中，能与所给图形组合成立方体的是：</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 442.4 200" role="img" aria-label="题干分层平面图">
      <g transform="translate(0,3)">
      <rect x={34} y={46} width={20} height={20} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={54} y={46} width={20} height={20} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={74} y={46} width={20} height={20} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={34} y={66} width={20} height={20} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={54} y={66} width={20} height={20} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={74} y={66} width={20} height={20} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={34} y={86} width={20} height={20} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={54} y={86} width={20} height={20} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={74} y={86} width={20} height={20} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <text x={64} y={32} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">第一层 3 块</text>
      <text x={64} y={126} fontSize={11} fill="#6b7280" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">每层满 9 格</text>
      <rect x={184} y={46} width={20} height={20} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={204} y={46} width={20} height={20} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={224} y={46} width={20} height={20} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={184} y={66} width={20} height={20} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={204} y={66} width={20} height={20} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={224} y={66} width={20} height={20} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={184} y={86} width={20} height={20} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={204} y={86} width={20} height={20} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={224} y={86} width={20} height={20} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <text x={214} y={32} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">第二层 7 块</text>
      <rect x={334} y={46} width={20} height={20} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={354} y={46} width={20} height={20} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={374} y={46} width={20} height={20} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={334} y={66} width={20} height={20} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={354} y={66} width={20} height={20} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={374} y={66} width={20} height={20} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={334} y={86} width={20} height={20} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={354} y={86} width={20} height={20} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={374} y={86} width={20} height={20} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <text x={364} y={32} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">第三层 5 块</text>
      <text x={230} y={150} fontSize={13} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">题干三层 3 / 7 / 5，共 15 块；目标立方体每层 9 格、三层共 27 格</text>
      <text x={230} y={172} fontSize={13} fill="#10b981" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">要补的三层：9−3 = 6、9−7 = 2、9−5 = 4（共 12 块）</text>
      </g>
      </svg><figcaption>图：把题干按层拆成三张九宫格（上 3 / 中 7 / 下 5）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 491.4 255.8" role="img" aria-label="选项分层平面图">
      <g transform="translate(9.7,20.7)">
      <text x={43.5} y={16} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">A</text>
      <rect x={24} y={26} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={37} y={26} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={50} y={26} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={24} y={39} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={37} y={39} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={50} y={39} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={24} y={52} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={37} y={52} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={50} y={52} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={24} y={75} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={37} y={75} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={50} y={75} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={24} y={88} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={37} y={88} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={50} y={88} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={24} y={101} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={37} y={101} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={50} y={101} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={24} y={124} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={37} y={124} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={50} y={124} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={24} y={137} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={37} y={137} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={50} y={137} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={24} y={150} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={37} y={150} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={50} y={150} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <text x={43.5} y={186} fontSize={13} fill="#6b7280" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">5 / 2 / 3</text>
      <text x={155.5} y={16} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">B</text>
      <rect x={136} y={26} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={149} y={26} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={162} y={26} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={136} y={39} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={149} y={39} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={162} y={39} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={136} y={52} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={149} y={52} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={162} y={52} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={136} y={75} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={149} y={75} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={162} y={75} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={136} y={88} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={149} y={88} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={162} y={88} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={136} y={101} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={149} y={101} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={162} y={101} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={136} y={124} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={149} y={124} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={162} y={124} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={136} y={137} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={149} y={137} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={162} y={137} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={136} y={150} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={149} y={150} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={162} y={150} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <text x={155.5} y={186} fontSize={13} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">6 / 2 / 4</text>
      <text x={267.5} y={16} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">C</text>
      <rect x={248} y={26} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={261} y={26} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={274} y={26} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={248} y={39} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={261} y={39} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={274} y={39} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={248} y={52} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={261} y={52} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={274} y={52} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={248} y={75} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={261} y={75} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={274} y={75} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={248} y={88} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={261} y={88} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={274} y={88} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={248} y={101} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={261} y={101} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={274} y={101} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={248} y={124} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={261} y={124} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={274} y={124} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={248} y={137} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={261} y={137} width={13} height={13} fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={274} y={137} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={248} y={150} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={261} y={150} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={274} y={150} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <text x={267.5} y={186} fontSize={13} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">6 / 2 / 4</text>
      <text x={379.5} y={16} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">D</text>
      <rect x={360} y={26} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={373} y={26} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={386} y={26} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={360} y={39} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={373} y={39} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={386} y={39} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={360} y={52} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={373} y={52} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={386} y={52} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={360} y={75} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={373} y={75} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={386} y={75} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={360} y={88} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={373} y={88} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={386} y={88} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={360} y={101} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={373} y={101} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={386} y={101} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={360} y={124} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={373} y={124} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={386} y={124} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={360} y={137} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={373} y={137} width={13} height={13} fill="#e5e7eb" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={386} y={137} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={360} y={150} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={373} y={150} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <rect x={386} y={150} width={13} height={13} fill="#ffffff" stroke="#1f2937" strokeWidth={1.5} />
      <text x={379.5} y={186} fontSize={13} fill="#6b7280" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">5 / 2 / 4</text>
      <text x={236} y={210} fontSize={13} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">三层个数：B、C 都是 6 / 2 / 4（正好是缺口），个数一样 → 只能再分层拼对比</text>
      </g>
      </svg><figcaption>图：四个选项也按层拆开（每列自上而下是三层）</figcaption></figure>
      <ExampleAnswer><b>解析：</b>选项分层明显：A 5/2/3、B 6/2/4、C 6/2/4、D 5/2/4，用<b>分层数</b>。目标立方体每层 9 格，题干占 3/7/5，所以缺的三层是 6/2/4（共 12 块）。<b>B、C 的三层个数完全一样</b>，数个数到此为止，再<b>分层拼</b>：把 B 的底层往题干的缺口里放，B 左下角多出来的那一块占位对不上（讲义 p28-29 把它圈出并排除 B），C 逐层吻合。<br /><span className="correct">答案：C</span>　<span className="src">（23 广东 · 讲义 p21-29）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      <Example>
      <ExampleHeader>📝 例题3 · 分层数（2021 浙江，难度 40%）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>下列哪个选项可与①和②组成一个长方体？</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 433.1 237" role="img" aria-label="①②与目标长方体">
      <polygon points="80,106 92,94 116,94 104,106" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="104,106 116,94 116,118 104,130" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={80} y={106} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="104,106 116,94 140,94 128,106" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="128,106 140,94 140,118 128,130" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={104} y={106} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="128,106 140,94 164,94 152,106" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="152,106 164,94 164,118 152,130" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={128} y={106} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="80,82 92,70 116,70 104,82" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="104,82 116,70 116,94 104,106" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={80} y={82} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="104,82 116,70 140,70 128,82" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="128,82 140,70 140,94 128,106" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={104} y={82} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="80,58 92,46 116,46 104,58" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="104,58 116,46 116,70 104,82" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={80} y={58} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="68,118 80,106 104,106 92,118" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="92,118 104,106 104,130 92,142" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={68} y={118} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="116,118 128,106 152,106 140,118" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="140,118 152,106 152,130 140,142" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={116} y={118} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="56,130 68,118 92,118 80,130" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="80,130 92,118 92,142 80,154" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={56} y={130} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="80,130 92,118 116,118 104,130" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="104,130 116,118 116,142 104,154" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={80} y={130} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="104,130 116,118 140,118 128,130" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="128,130 140,118 140,142 128,154" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={104} y={130} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="294,100 306,88 330,88 318,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="318,100 330,88 330,112 318,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={294} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="282,112 294,100 318,100 306,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="306,112 318,100 318,124 306,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={282} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="270,124 282,112 306,112 294,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="294,124 306,112 306,136 294,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={270} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <text x={110} y={190} fontSize={13} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">① 三层 1 / 2 / 8，共 11 块</text>
      <text x={300} y={190} fontSize={13} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">② 3 块</text>
      <text x={230} y={212} fontSize={13} fill="#10b981" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">目标长方体三层各 8 格（共 24 格）→ ③ = 24 − 11 − 3 = 10 块</text>
      </svg><figcaption>图：目标长方体（每层 8 格）与①②两块碎片</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 486 171.2" role="img" aria-label="四个选项">
      <g transform="translate(4,16.3)">
      <rect x={18} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="46.4,45.08 56.24,35.24 75.92,35.24 66.08,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="66.08,45.08 75.92,35.24 75.92,54.92 66.08,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={46.4} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="66.08,45.08 75.92,35.24 95.6,35.24 85.76,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="85.76,45.08 95.6,35.24 95.6,54.92 85.76,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={66.08} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="85.76,45.08 95.6,35.24 115.28,35.24 105.44,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="105.44,45.08 115.28,35.24 115.28,54.92 105.44,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={85.76} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="46.4,25.4 56.24,15.56 75.92,15.56 66.08,25.4" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="66.08,25.4 75.92,15.56 75.92,35.24 66.08,45.08" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={46.4} y={25.4} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="36.56,54.92 46.4,45.08 66.08,45.08 56.24,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="56.24,54.92 66.08,45.08 66.08,64.76 56.24,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={36.56} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="56.24,54.92 66.08,45.08 85.76,45.08 75.92,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="75.92,54.92 85.76,45.08 85.76,64.76 75.92,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={56.24} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="36.56,35.24 46.4,25.4 66.08,25.4 56.24,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="56.24,35.24 66.08,25.4 66.08,45.08 56.24,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={36.56} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="26.72,64.76 36.56,54.92 56.24,54.92 46.4,64.76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="46.4,64.76 56.24,54.92 56.24,74.6 46.4,84.44" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={26.72} y={64.76} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="46.4,64.76 56.24,54.92 75.92,54.92 66.08,64.76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="66.08,64.76 75.92,54.92 75.92,74.6 66.08,84.44" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={46.4} y={64.76} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="26.72,45.08 36.56,35.24 56.24,35.24 46.4,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="46.4,45.08 56.24,35.24 56.24,54.92 46.4,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={26.72} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={71} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">A</text>
      <text x={71.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">10 块</text>
      <rect x={130} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="168.24,54.92 178.08,45.08 197.76,45.08 187.92,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="187.92,54.92 197.76,45.08 197.76,64.76 187.92,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={168.24} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="187.92,54.92 197.76,45.08 217.44,45.08 207.6,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="207.6,54.92 217.44,45.08 217.44,64.76 207.6,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={187.92} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="168.24,35.24 178.08,25.4 197.76,25.4 187.92,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="187.92,35.24 197.76,25.4 197.76,45.08 187.92,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={168.24} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="187.92,35.24 197.76,25.4 217.44,25.4 207.6,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="207.6,35.24 217.44,25.4 217.44,45.08 207.6,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={187.92} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="168.24,15.56 178.08,5.72 197.76,5.72 187.92,15.56" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="187.92,15.56 197.76,5.72 197.76,25.4 187.92,35.24" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={168.24} y={15.56} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="158.4,64.76 168.24,54.92 187.92,54.92 178.08,64.76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="178.08,64.76 187.92,54.92 187.92,74.6 178.08,84.44" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={158.4} y={64.76} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="178.08,64.76 187.92,54.92 207.6,54.92 197.76,64.76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="197.76,64.76 207.6,54.92 207.6,74.6 197.76,84.44" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={178.08} y={64.76} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="158.4,45.08 168.24,35.24 187.92,35.24 178.08,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="178.08,45.08 187.92,35.24 187.92,54.92 178.08,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={158.4} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="178.08,45.08 187.92,35.24 207.6,35.24 197.76,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="197.76,45.08 207.6,35.24 207.6,54.92 197.76,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={178.08} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="148.56,74.6 158.4,64.76 178.08,64.76 168.24,74.6" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="168.24,74.6 178.08,64.76 178.08,84.44 168.24,94.28" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={148.56} y={74.6} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="168.24,74.6 178.08,64.76 197.76,64.76 187.92,74.6" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="187.92,74.6 197.76,64.76 197.76,84.44 187.92,94.28" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={168.24} y={74.6} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="148.56,54.92 158.4,45.08 178.08,45.08 168.24,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="168.24,54.92 178.08,45.08 178.08,64.76 168.24,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={148.56} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="168.24,54.92 178.08,45.08 197.76,45.08 187.92,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="187.92,54.92 197.76,45.08 197.76,64.76 187.92,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={168.24} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={183} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">B</text>
      <text x={183.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">13 块</text>
      <rect x={242} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="280.24,45.08 290.08,35.24 309.76,35.24 299.92,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="299.92,45.08 309.76,35.24 309.76,54.92 299.92,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={280.24} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="299.92,45.08 309.76,35.24 329.44,35.24 319.6,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="319.6,45.08 329.44,35.24 329.44,54.92 319.6,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={299.92} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="280.24,25.4 290.08,15.56 309.76,15.56 299.92,25.4" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="299.92,25.4 309.76,15.56 309.76,35.24 299.92,45.08" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={280.24} y={25.4} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="270.4,54.92 280.24,45.08 299.92,45.08 290.08,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="290.08,54.92 299.92,45.08 299.92,64.76 290.08,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={270.4} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="290.08,54.92 299.92,45.08 319.6,45.08 309.76,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="309.76,54.92 319.6,45.08 319.6,64.76 309.76,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={290.08} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="270.4,35.24 280.24,25.4 299.92,25.4 290.08,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="290.08,35.24 299.92,25.4 299.92,45.08 290.08,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={270.4} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="260.56,64.76 270.4,54.92 290.08,54.92 280.24,64.76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="280.24,64.76 290.08,54.92 290.08,74.6 280.24,84.44" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={260.56} y={64.76} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="280.24,64.76 290.08,54.92 309.76,54.92 299.92,64.76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="299.92,64.76 309.76,54.92 309.76,74.6 299.92,84.44" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={280.24} y={64.76} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={295} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">C</text>
      <text x={295.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">9 块</text>
      <rect x={354} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="392.24,45.08 402.08,35.24 421.76,35.24 411.92,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="411.92,45.08 421.76,35.24 421.76,54.92 411.92,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={392.24} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="411.92,45.08 421.76,35.24 441.44,35.24 431.6,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="431.6,45.08 441.44,35.24 441.44,54.92 431.6,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={411.92} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="392.24,25.4 402.08,15.56 421.76,15.56 411.92,25.4" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="411.92,25.4 421.76,15.56 421.76,35.24 411.92,45.08" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={392.24} y={25.4} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="382.4,54.92 392.24,45.08 411.92,45.08 402.08,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="402.08,54.92 411.92,45.08 411.92,64.76 402.08,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={382.4} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="402.08,54.92 411.92,45.08 431.6,45.08 421.76,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="421.76,54.92 431.6,45.08 431.6,64.76 421.76,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={402.08} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="382.4,35.24 392.24,25.4 411.92,25.4 402.08,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="402.08,35.24 411.92,25.4 411.92,45.08 402.08,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={382.4} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="372.56,64.76 382.4,54.92 402.08,54.92 392.24,64.76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="392.24,64.76 402.08,54.92 402.08,74.6 392.24,84.44" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={372.56} y={64.76} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="392.24,64.76 402.08,54.92 421.76,54.92 411.92,64.76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="411.92,64.76 421.76,54.92 421.76,74.6 411.92,84.44" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={392.24} y={64.76} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="372.56,45.08 382.4,35.24 402.08,35.24 392.24,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="392.24,45.08 402.08,35.24 402.08,54.92 392.24,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={372.56} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="392.24,45.08 402.08,35.24 421.76,35.24 411.92,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="411.92,45.08 421.76,35.24 421.76,54.92 411.92,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={392.24} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={407} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">D</text>
      <text x={407.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">10 块</text>
      </g>
      </svg><figcaption>四个选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>目标长方体每层 8 格、三层共 24 格。① 的三层是 1/2/8（共 11 块），② 是 3 块，所以 ③ = 24 − 11 − 3 = <b>10 块</b>。选项分层数是 A 7/3、B 8/5、C 1/8、D 7/3，只有 <b>A、D 都是 10 块</b>。两者层数相同，必须<b>分层拼、对比选项找差异</b>：把两层形状分别与缺口对齐，D 的中层放不进去（讲义 p51-55 逐层排除）。<br /><span className="correct">答案：A</span>　<span className="src">（21 浙江 · 讲义 p44-57）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      </Block>
      <Block>
      <BlockTitle>4. 第三步：找特殊——题干中越大或越抽象的方块，位置的局限性越大</BlockTitle>
      <p>个数、层数都排不掉选项时，就进入最关键的一步：<b>找特殊</b>。题干里往往有几块碎片（①②），'
      要判断先代入哪一块——判断标准是<b>谁的位置局限性最大</b>。</p>
      <PointList>
      <li><b>①抽象</b>：形状奇怪、凹凸不平的那一块，能放的位置极少，先代它；</li>
      <li><b>①最大</b>：块数最多的那一块，同样位置局限性大，先代它；</li>
      <li>题干里越大或越抽象的方块，位置的局限性越大——先代它，能一次性排掉很多选项。</li>
      <li><b>提示：</b>代入①之后如果发现②不好代，可以<b>先代"选项"</b>（把选项当第三块，反推②的位置）。</li>
      <li>还有一条对称思考：题干给的是<b>几个一样的方块</b>时，优先想<b>对称性</b>（能否切成完全相同的小块）。</li>
      </PointList>
      <figure className="fig"><svg viewBox="0 0 501 148.1" role="img" aria-label="找特殊：优先代入哪一块">
      <g transform="translate(19,12)">
      <rect x={18} y={10} width={66} height={70} rx={6} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.2} />
      <polygon points="63,46 75,34 99,34 87,46" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="87,46 99,34 99,58 87,70" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={63} y={46} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="63,22 75,10 99,10 87,22" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="87,22 99,10 99,34 87,46" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={63} y={22} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="3,58 15,46 39,46 27,58" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="27,58 39,46 39,70 27,82" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={3} y={58} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="27,58 39,46 63,46 51,58" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="51,58 63,46 63,70 51,82" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={27} y={58} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="51,58 63,46 87,46 75,58" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="75,58 87,46 87,70 75,82" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={51} y={58} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <text x={51} y={94} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">①</text>
      <text x={51} y={112} fontSize={12} fill="#ef4444" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">✓ 抽象</text>
      <rect x={90} y={10} width={66} height={70} rx={6} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.2} />
      <polygon points="99,34 111,22 135,22 123,34" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="123,34 135,22 135,46 123,58" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={99} y={34} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="123,34 135,22 159,22 147,34" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="147,34 159,22 159,46 147,58" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={123} y={34} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="87,46 99,34 123,34 111,46" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="111,46 123,34 123,58 111,70" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={87} y={46} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="111,46 123,34 147,34 135,46" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="135,46 147,34 147,58 135,70" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={111} y={46} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <text x={123} y={94} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">②</text>
      <rect x={170} y={10} width={66} height={70} rx={6} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.2} />
      <polygon points="191,46 203,34 227,34 215,46" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="215,46 227,34 227,58 215,70" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={191} y={46} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="215,46 227,34 251,34 239,46" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="239,46 251,34 251,58 239,70" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={215} y={46} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="191,22 203,10 227,10 215,22" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="215,22 227,10 227,34 215,46" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={191} y={22} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="215,22 227,10 251,10 239,22" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="239,22 251,10 251,34 239,46" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={215} y={22} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="155,58 167,46 191,46 179,58" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="179,58 191,46 191,70 179,82" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={155} y={58} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="179,58 191,46 215,46 203,58" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="203,58 215,46 215,70 203,82" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={179} y={58} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="203,58 215,46 239,46 227,58" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="227,58 239,46 239,70 227,82" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={203} y={58} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <text x={203} y={94} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">①</text>
      <text x={203} y={112} fontSize={12} fill="#ef4444" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">✓ 抽象</text>
      <rect x={242} y={10} width={66} height={70} rx={6} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.2} />
      <polygon points="251,40 263,28 287,28 275,40" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="275,40 287,28 287,52 275,64" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={251} y={40} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="275,40 287,28 311,28 299,40" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="299,40 311,28 311,52 299,64" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={275} y={40} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="239,52 251,40 275,40 263,52" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="263,52 275,40 275,64 263,76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={239} y={52} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="263,52 275,40 299,40 287,52" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="287,52 299,40 299,64 287,76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={263} y={52} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="239,28 251,16 275,16 263,28" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="263,28 275,16 275,40 263,52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={239} y={28} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="263,28 275,16 299,16 287,28" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="287,28 299,16 299,40 287,52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={263} y={28} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <text x={275} y={94} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">②</text>
      <rect x={322} y={10} width={66} height={70} rx={6} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.2} />
      <polygon points="319,34 331,22 355,22 343,34" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="343,34 355,22 355,46 343,58" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={319} y={34} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="343,34 355,22 379,22 367,34" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="367,34 379,22 379,46 367,58" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={343} y={34} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="367,34 379,22 403,22 391,34" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="391,34 403,22 403,46 391,58" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={367} y={34} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="307,46 319,34 343,34 331,46" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="331,46 343,34 343,58 331,70" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={307} y={46} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="331,46 343,34 367,34 355,46" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="355,46 367,34 367,58 355,70" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={331} y={46} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="355,46 367,34 391,34 379,46" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="379,46 391,34 391,58 379,70" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={355} y={46} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <text x={355} y={94} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">①</text>
      <text x={355} y={112} fontSize={12} fill="#ef4444" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">✓ 最大</text>
      <rect x={394} y={10} width={66} height={70} rx={6} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.2} />
      <polygon points="397,52 409,40 433,40 421,52" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="421,52 433,40 433,64 421,76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={397} y={52} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="421,52 433,40 457,40 445,52" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="445,52 457,40 457,64 445,76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={421} y={52} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <polygon points="397,28 409,16 433,16 421,28" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <polygon points="421,28 433,16 433,40 421,52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={397} y={28} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.2} />
      <text x={427} y={94} fontSize={13} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">②</text>
      </g>
      </svg><figcaption>图：三组"①②优先代入哪个"的对比——① 抽象 / ① 抽象 / ① 最大</figcaption></figure><Example>
      <ExampleHeader>📝 例题4 · 找特殊（2023 贵州事业，难度 73%）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>左图由①②③拼成，选择最合适的图③填入问号处，使之可以拼合成左图的立体图形。</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 410 237" role="img" aria-label="题干与①②">
      <polygon points="66,100 78,88 102,88 90,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,100 102,88 102,112 90,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,100 102,88 126,88 114,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,100 126,88 126,112 114,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="114,100 126,88 150,88 138,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="138,100 150,88 150,112 138,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={114} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,76 78,64 102,64 90,76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,76 102,64 102,88 90,100" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={76} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,76 102,64 126,64 114,76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,76 126,64 126,88 114,100" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={76} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="54,112 66,100 90,100 78,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,112 90,100 90,124 78,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,112 90,100 114,100 102,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,112 114,100 114,124 102,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="102,112 114,100 138,100 126,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="126,112 138,100 138,124 126,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={102} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="54,88 66,76 90,76 78,88" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,88 90,76 90,100 78,112" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={88} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,88 90,76 114,76 102,88" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,88 114,76 114,100 102,112" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={88} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="102,88 114,76 138,76 126,88" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="126,88 138,76 138,100 126,112" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={102} y={88} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,64 90,52 114,52 102,64" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,64 114,52 114,76 102,88" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={64} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="42,124 54,112 78,112 66,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="66,124 78,112 78,136 66,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={42} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,124 78,112 102,112 90,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,124 102,112 102,136 90,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,124 102,112 126,112 114,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,124 126,112 126,136 114,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="214,110 226,98 250,98 238,110" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="238,110 250,98 250,122 238,134" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={214} y={110} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="214,86 226,74 250,74 238,86" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="238,86 250,74 250,98 238,110" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={214} y={86} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="202,122 214,110 238,110 226,122" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="226,122 238,110 238,134 226,146" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={202} y={122} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="226,122 238,110 262,110 250,122" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="250,122 262,110 262,134 250,146" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={226} y={122} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="250,122 262,110 286,110 274,122" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="274,122 286,110 286,134 274,146" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={250} y={122} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="328,98 340,86 364,86 352,98" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="352,98 364,86 364,110 352,122" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={328} y={98} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="352,98 364,86 388,86 376,98" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="376,98 388,86 388,110 376,122" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={352} y={98} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="292,110 304,98 328,98 316,110" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="316,110 328,98 328,122 316,134" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={292} y={110} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="316,110 328,98 352,98 340,110" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="340,110 352,98 352,122 340,134" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={316} y={110} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="340,110 352,98 376,98 364,110" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="364,110 376,98 376,122 364,134" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={340} y={110} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <text x={96} y={190} fontSize={13} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">题干 15 块</text>
      <text x={244} y={190} fontSize={13} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">① 5 块</text>
      <text x={340} y={190} fontSize={13} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">② 5 块</text>
      <text x={230} y={212} fontSize={13} fill="#10b981" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">③ = 15 − 5 − 5 = 5 块</text>
      </svg><figcaption>图：题干立体图形与①②两块碎片</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 486 170.9" role="img" aria-label="四个选项">
      <g transform="translate(4,16)">
      <rect x={18} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="46.4,50 56.24,40.16 75.92,40.16 66.08,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="66.08,50 75.92,40.16 75.92,59.84 66.08,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={46.4} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="46.4,30.32 56.24,20.48 75.92,20.48 66.08,30.32" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="66.08,30.32 75.92,20.48 75.92,40.16 66.08,50" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={46.4} y={30.32} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="36.56,59.84 46.4,50 66.08,50 56.24,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="56.24,59.84 66.08,50 66.08,69.68 56.24,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={36.56} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="56.24,59.84 66.08,50 85.76,50 75.92,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="75.92,59.84 85.76,50 85.76,69.68 75.92,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={56.24} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="75.92,59.84 85.76,50 105.44,50 95.6,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="95.6,59.84 105.44,50 105.44,69.68 95.6,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={75.92} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={71} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">A</text>
      <text x={71.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">5 块</text>
      <rect x={130} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="173.16,40.16 183,30.32 202.68,30.32 192.84,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="192.84,40.16 202.68,30.32 202.68,50 192.84,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={173.16} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="192.84,40.16 202.68,30.32 222.36,30.32 212.52,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="212.52,40.16 222.36,30.32 222.36,50 212.52,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={192.84} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="143.64,50 153.48,40.16 173.16,40.16 163.32,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="163.32,50 173.16,40.16 173.16,59.84 163.32,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={143.64} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="163.32,50 173.16,40.16 192.84,40.16 183,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="183,50 192.84,40.16 192.84,59.84 183,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={163.32} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="183,50 192.84,40.16 212.52,40.16 202.68,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="202.68,50 212.52,40.16 212.52,59.84 202.68,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={183} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={183} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">B</text>
      <text x={183.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">5 块</text>
      <rect x={242} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="260.56,54.92 270.4,45.08 290.08,45.08 280.24,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="280.24,54.92 290.08,45.08 290.08,64.76 280.24,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={260.56} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="280.24,54.92 290.08,45.08 309.76,45.08 299.92,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="299.92,54.92 309.76,45.08 309.76,64.76 299.92,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={280.24} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="299.92,54.92 309.76,45.08 329.44,45.08 319.6,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="319.6,54.92 329.44,45.08 329.44,64.76 319.6,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={299.92} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="260.56,35.24 270.4,25.4 290.08,25.4 280.24,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="280.24,35.24 290.08,25.4 290.08,45.08 280.24,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={260.56} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="299.92,35.24 309.76,25.4 329.44,25.4 319.6,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="319.6,35.24 329.44,25.4 329.44,45.08 319.6,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={299.92} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={295} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">C</text>
      <text x={295.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">5 块</text>
      <rect x={354} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="372.56,54.92 382.4,45.08 402.08,45.08 392.24,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="392.24,54.92 402.08,45.08 402.08,64.76 392.24,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={372.56} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="392.24,54.92 402.08,45.08 421.76,45.08 411.92,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="411.92,54.92 421.76,45.08 421.76,64.76 411.92,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={392.24} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="411.92,54.92 421.76,45.08 441.44,45.08 431.6,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="431.6,54.92 441.44,45.08 441.44,64.76 431.6,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={411.92} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="392.24,35.24 402.08,25.4 421.76,25.4 411.92,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="411.92,35.24 421.76,25.4 421.76,45.08 411.92,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={392.24} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={407} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">D</text>
      <text x={407.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">4 块</text>
      </g>
      </svg><figcaption>四个选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>题干 15 块，①②各 5 块，所以 ③ = <b>5 块</b>——先把 D（4 块）排掉。剩下 A、B、C 都是 5 块，而且分层都是 1/4，<b>个数和层数都分不出来</b>，只能<b>找特殊</b>：先代入位置最特殊的那一块（①），（讲义 p60-61 的提示"①②优先代入哪个？铅笔涂黑"），再看②与选项能否严丝合缝补齐，只有 A 的凹凸与缺口吻合。<br /><span className="correct">答案：A</span>　<span className="src">（23 贵州事业 · 讲义 p58-63）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      </Block>
      <Block>
      <BlockTitle>5. 黑块类：接触面 → 找特殊 → 合理分割</BlockTitle>
      <p>题干里出现<b>灰色 / 黑色小方块</b>时，就换成黑块类的思路：<b>依次确定 3 个黑块的位置</b>。</p>
      <Callout variant="key"><b>黑块类答题思路（依次确定 3 个黑块位置）</b>
      <PointList>
      <li><b>方法 1：黑块与白块的接触面总数（猜测）</b>——每个黑块周围贴着几个白块，是这道题的"指纹"；选项里黑块的接触面数<b>小于题干</b>的，一定错。</li>
      <li><b>方法 2：考虑找特殊</b>——黑块本身就是最特殊、最抽象的方块，优先代入。</li>
      <li><b>方法 3：合理分割</b>——看黑块跟几个白块相连是否合理（分割后每块必须连成一体、不能凭空断开）。</li>
      </PointList></Callout>
      <Callout variant="formula"><span className="formula">快速记忆：① 接触面　② 找特殊　③ 合理分</span></Callout>
      <Callout variant="tip"><b>提示：</b>代入①后如果发现②不好代，<b>可以先代"选项"</b>；题干是正、反两面直观图时也一样——先把最特殊的黑块定位，剩下的用分割合理性排错。</Callout>
      <Example>
      <ExampleHeader>📝 例题5 · 黑块类·接触面（2022 广东事业，难度 88%）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>下图最左边的立体图形由 12 个白色和 3 个灰色的小正方体组成，缺失的立体图形最有可能是：</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 404 217" role="img" aria-label="题干与①②">
      <polygon points="66,100 78,88 102,88 90,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,100 102,88 102,112 90,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,100 102,88 126,88 114,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,100 126,88 126,112 114,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="114,100 126,88 150,88 138,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="138,100 150,88 150,112 138,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={114} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,76 78,64 102,64 90,76" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,76 102,64 102,88 90,100" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={76} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="90,76 102,64 126,64 114,76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,76 126,64 126,88 114,100" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={76} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="54,112 66,100 90,100 78,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,112 90,100 90,124 78,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,112 90,100 114,100 102,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,112 114,100 114,124 102,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="102,112 114,100 138,100 126,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="126,112 138,100 138,124 126,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={102} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="54,88 66,76 90,76 78,88" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,88 90,76 90,100 78,112" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={88} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,88 90,76 114,76 102,88" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,88 114,76 114,100 102,112" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={88} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="102,88 114,76 138,76 126,88" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="126,88 138,76 138,100 126,112" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={102} y={88} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,64 90,52 114,52 102,64" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,64 114,52 114,76 102,88" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={64} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="42,124 54,112 78,112 66,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="66,124 78,112 78,136 66,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={42} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,124 78,112 102,112 90,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,124 102,112 102,136 90,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,124 102,112 126,112 114,124" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,124 126,112 126,136 114,148" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={124} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="214,100 226,88 250,88 238,100" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="238,100 250,88 250,112 238,124" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={214} y={100} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="238,100 250,88 274,88 262,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="262,100 274,88 274,112 262,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={238} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="202,112 214,100 238,100 226,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="226,112 238,100 238,124 226,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={202} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="226,112 238,100 262,100 250,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="250,112 262,100 262,124 250,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={226} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="250,112 262,100 286,100 274,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="274,112 286,100 286,124 274,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={250} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="334,112 346,100 370,100 358,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="358,112 370,100 370,124 358,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={334} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="334,88 346,76 370,76 358,88" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="358,88 370,76 370,100 358,112" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={334} y={88} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="298,124 310,112 334,112 322,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="322,124 334,112 334,136 322,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={298} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="322,124 334,112 358,112 346,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="346,124 358,112 358,136 346,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={322} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="346,124 358,112 382,112 370,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="370,124 382,112 382,136 370,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={346} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <text x={96} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">题干 12 白 + 3 灰</text>
      <text x={244} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">①（含 1 灰）</text>
      <text x={340} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">②（含 1 灰）</text>
      </svg><figcaption>图：题干（12 白 + 3 灰）与①②两块碎片</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 486 170.9" role="img" aria-label="四个选项">
      <g transform="translate(4,16)">
      <rect x={18} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="46.4,40.16 56.24,30.32 75.92,30.32 66.08,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="66.08,40.16 75.92,30.32 75.92,50 66.08,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={46.4} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="66.08,40.16 75.92,30.32 95.6,30.32 85.76,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="85.76,40.16 95.6,30.32 95.6,50 85.76,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={66.08} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="36.56,50 46.4,40.16 66.08,40.16 56.24,50" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="56.24,50 66.08,40.16 66.08,59.84 56.24,69.68" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={36.56} y={50} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="56.24,50 66.08,40.16 85.76,40.16 75.92,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="75.92,50 85.76,40.16 85.76,59.84 75.92,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={56.24} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="75.92,50 85.76,40.16 105.44,40.16 95.6,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="95.6,50 105.44,40.16 105.44,59.84 95.6,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={75.92} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={71} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">A</text>
      <text x={71.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">1 灰</text>
      <rect x={130} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="173.16,50 183,40.16 202.68,40.16 192.84,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="192.84,50 202.68,40.16 202.68,59.84 192.84,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={173.16} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="192.84,50 202.68,40.16 222.36,40.16 212.52,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="212.52,50 222.36,40.16 222.36,59.84 212.52,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={192.84} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="192.84,30.32 202.68,20.48 222.36,20.48 212.52,30.32" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="212.52,30.32 222.36,20.48 222.36,40.16 212.52,50" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={192.84} y={30.32} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="143.64,59.84 153.48,50 173.16,50 163.32,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="163.32,59.84 173.16,50 173.16,69.68 163.32,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={143.64} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="163.32,59.84 173.16,50 192.84,50 183,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="183,59.84 192.84,50 192.84,69.68 183,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={163.32} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="183,59.84 192.84,50 212.52,50 202.68,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="202.68,59.84 212.52,50 212.52,69.68 202.68,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={183} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={183} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">B</text>
      <text x={183.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">1 灰</text>
      <rect x={242} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="270.4,40.16 280.24,30.32 299.92,30.32 290.08,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="290.08,40.16 299.92,30.32 299.92,50 290.08,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={270.4} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="260.56,50 270.4,40.16 290.08,40.16 280.24,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="280.24,50 290.08,40.16 290.08,59.84 280.24,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={260.56} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="280.24,50 290.08,40.16 309.76,40.16 299.92,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="299.92,50 309.76,40.16 309.76,59.84 299.92,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={280.24} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="299.92,50 309.76,40.16 329.44,40.16 319.6,50" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="319.6,50 329.44,40.16 329.44,59.84 319.6,69.68" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={299.92} y={50} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <text x={295} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">C</text>
      <text x={295.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">1 灰</text>
      <rect x={354} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="377.48,40.16 387.32,30.32 407,30.32 397.16,40.16" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="397.16,40.16 407,30.32 407,50 397.16,59.84" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={377.48} y={40.16} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="397.16,40.16 407,30.32 426.68,30.32 416.84,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="416.84,40.16 426.68,30.32 426.68,50 416.84,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={397.16} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="416.84,40.16 426.68,30.32 446.36,30.32 436.52,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="436.52,40.16 446.36,30.32 446.36,50 436.52,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={416.84} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="367.64,50 377.48,40.16 397.16,40.16 387.32,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="387.32,50 397.16,40.16 397.16,59.84 387.32,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={367.64} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="387.32,50 397.16,40.16 416.84,40.16 407,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="407,50 416.84,40.16 416.84,59.84 407,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={387.32} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="407,50 416.84,40.16 436.52,40.16 426.68,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="426.68,50 436.52,40.16 436.52,59.84 426.68,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={407} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={407} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">D</text>
      <text x={407.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">1 灰</text>
      </g>
      </svg><figcaption>四个选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>四个选项都只含 1 个黑块、形状也接近，个数法没用。改用<b>黑块与白块的接触面总数</b>：题干里 3 个灰块各自贴着几个白块是固定的，先代入①②（黑块位置最特殊，优先代入），剩下的缺口要求黑块与白块相连的面数刚好吻合。B、D 的灰块接触面数偏少（&lt; 题干），C 分割后连不成一体，只有 A 的接触面与形状都吻合。<br /><span className="correct">答案：A</span>　<span className="src">（22 广东事业 · 讲义 p126-132）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      <Example>
      <ExampleHeader>📝 例题6 · 黑块类·找特殊（2023 湖北事业，难度 61%）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>左图为相同大小的白色和灰色正方体组合而成的多面体，下列立体图形和①②可组合成左图所示多面体的是：</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 404 217" role="img" aria-label="题干与①②">
      <polygon points="66,100 78,88 102,88 90,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,100 102,88 102,112 90,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,100 102,88 126,88 114,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,100 126,88 126,112 114,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="114,100 126,88 150,88 138,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="138,100 150,88 150,112 138,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={114} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,76 102,64 126,64 114,76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,76 126,64 126,88 114,100" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={76} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="54,112 66,100 90,100 78,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,112 90,100 90,124 78,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,112 90,100 114,100 102,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,112 114,100 114,124 102,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="102,112 114,100 138,100 126,112" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="126,112 138,100 138,124 126,136" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={102} y={112} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="54,88 66,76 90,76 78,88" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,88 90,76 90,100 78,112" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={88} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="78,88 90,76 114,76 102,88" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,88 114,76 114,100 102,112" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={88} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="102,88 114,76 138,76 126,88" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="126,88 138,76 138,100 126,112" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={102} y={88} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,64 90,52 114,52 102,64" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,64 114,52 114,76 102,88" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={64} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="42,124 54,112 78,112 66,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="66,124 78,112 78,136 66,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={42} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,124 78,112 102,112 90,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,124 102,112 102,136 90,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,124 102,112 126,112 114,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,124 126,112 126,136 114,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="42,100 54,88 78,88 66,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="66,100 78,88 78,112 66,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={42} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="238,112 250,100 274,100 262,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="262,112 274,100 274,124 262,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={238} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="238,88 250,76 274,76 262,88" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="262,88 274,76 274,100 262,112" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={238} y={88} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="202,124 214,112 238,112 226,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="226,124 238,112 238,136 226,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={202} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="226,124 238,112 262,112 250,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="250,124 262,112 262,136 250,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={226} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="250,124 262,112 286,112 274,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="274,124 286,112 286,136 274,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={250} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="310,100 322,88 346,88 334,100" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="334,100 346,88 346,112 334,124" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={310} y={100} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="334,100 346,88 370,88 358,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="358,100 370,88 370,112 358,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={334} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="298,112 310,100 334,100 322,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="322,112 334,100 334,124 322,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={298} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="322,112 334,100 358,100 346,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="346,112 358,100 358,124 346,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={322} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="346,112 358,100 382,100 370,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="370,112 382,100 382,124 370,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={346} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <text x={96} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">题干（含 3 灰）</text>
      <text x={244} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">①</text>
      <text x={340} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">②</text>
      </svg><figcaption>图：题干多面体与①②</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 486 170.9" role="img" aria-label="四个选项">
      <g transform="translate(4,16)">
      <rect x={18} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="46.4,40.16 56.24,30.32 75.92,30.32 66.08,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="66.08,40.16 75.92,30.32 75.92,50 66.08,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={46.4} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="66.08,40.16 75.92,30.32 95.6,30.32 85.76,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="85.76,40.16 95.6,30.32 95.6,50 85.76,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={66.08} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="36.56,50 46.4,40.16 66.08,40.16 56.24,50" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="56.24,50 66.08,40.16 66.08,59.84 56.24,69.68" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={36.56} y={50} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="56.24,50 66.08,40.16 85.76,40.16 75.92,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="75.92,50 85.76,40.16 85.76,59.84 75.92,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={56.24} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="75.92,50 85.76,40.16 105.44,40.16 95.6,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="95.6,50 105.44,40.16 105.44,59.84 95.6,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={75.92} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={71} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">A</text>
      <text x={71.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">5 块</text>
      <rect x={130} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="173.16,50 183,40.16 202.68,40.16 192.84,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="192.84,50 202.68,40.16 202.68,59.84 192.84,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={173.16} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="192.84,50 202.68,40.16 222.36,40.16 212.52,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="212.52,50 222.36,40.16 222.36,59.84 212.52,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={192.84} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="192.84,30.32 202.68,20.48 222.36,20.48 212.52,30.32" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="212.52,30.32 222.36,20.48 222.36,40.16 212.52,50" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={192.84} y={30.32} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="143.64,59.84 153.48,50 173.16,50 163.32,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="163.32,59.84 173.16,50 173.16,69.68 163.32,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={143.64} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="163.32,59.84 173.16,50 192.84,50 183,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="183,59.84 192.84,50 192.84,69.68 183,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={163.32} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="183,59.84 192.84,50 212.52,50 202.68,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="202.68,59.84 212.52,50 212.52,69.68 202.68,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={183} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={183} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">B</text>
      <text x={183.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">6 块</text>
      <rect x={242} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="270.4,40.16 280.24,30.32 299.92,30.32 290.08,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="290.08,40.16 299.92,30.32 299.92,50 290.08,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={270.4} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="260.56,50 270.4,40.16 290.08,40.16 280.24,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="280.24,50 290.08,40.16 290.08,59.84 280.24,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={260.56} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="280.24,50 290.08,40.16 309.76,40.16 299.92,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="299.92,50 309.76,40.16 309.76,59.84 299.92,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={280.24} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="299.92,50 309.76,40.16 329.44,40.16 319.6,50" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="319.6,50 329.44,40.16 329.44,59.84 319.6,69.68" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={299.92} y={50} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <text x={295} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">C</text>
      <text x={295.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">4 块</text>
      <rect x={354} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="377.48,40.16 387.32,30.32 407,30.32 397.16,40.16" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="397.16,40.16 407,30.32 407,50 397.16,59.84" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={377.48} y={40.16} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="397.16,40.16 407,30.32 426.68,30.32 416.84,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="416.84,40.16 426.68,30.32 426.68,50 416.84,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={397.16} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="416.84,40.16 426.68,30.32 446.36,30.32 436.52,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="436.52,40.16 446.36,30.32 446.36,50 436.52,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={416.84} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="367.64,50 377.48,40.16 397.16,40.16 387.32,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="387.32,50 397.16,40.16 397.16,59.84 387.32,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={367.64} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="387.32,50 397.16,40.16 416.84,40.16 407,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="407,50 416.84,40.16 416.84,59.84 407,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={387.32} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="407,50 416.84,40.16 436.52,40.16 426.68,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="426.68,50 436.52,40.16 436.52,59.84 426.68,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={407} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={407} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">D</text>
      <text x={407.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">6 块</text>
      </g>
      </svg><figcaption>四个选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>先数个数：A 5、B 6、C 4、D 6——先把 C 排掉；B、D 都是 6 块，个数还是分不出来。接着<b>找特殊</b>：把含黑块、位置局限性最大的那一块先代入，再用分割合理性检查黑块与几个白块相连，B、D 的黑块位置拼接后与题干对不上，A 吻合。<br /><span className="correct">答案：A</span>　<span className="src">（23 湖北事业 · 讲义 p140-149）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      <Example>
      <ExampleHeader>📝 例题7 · 黑块类·合理分割（2024 国考，难度 48%）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>左图为 15 个白色正方体和 3 个灰色正方体组合而成的多面体，其可以由①、②、③三个多面体组合而成，问哪项能填入问号处？</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 405.6 217" role="img" aria-label="题干与①②">
      <g transform="translate(1.6,0)">
      <polygon points="66,106 78,94 102,94 90,106" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,106 102,94 102,118 90,130" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={106} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,106 102,94 126,94 114,106" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,106 126,94 126,118 114,130" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={106} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="114,106 126,94 150,94 138,106" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="138,106 150,94 150,118 138,130" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={114} y={106} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,82 78,70 102,70 90,82" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,82 102,70 102,94 90,106" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={82} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,82 102,70 126,70 114,82" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,82 126,70 126,94 114,106" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={82} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="114,82 126,70 150,70 138,82" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="138,82 150,70 150,94 138,106" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={114} y={82} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,58 78,46 102,46 90,58" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,58 102,46 102,70 90,82" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={58} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,58 102,46 126,46 114,58" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,58 126,46 126,70 114,82" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={58} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="54,118 66,106 90,106 78,118" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,118 90,106 90,130 78,142" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={118} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,118 90,106 114,106 102,118" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,118 114,106 114,130 102,142" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={118} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="102,118 114,106 138,106 126,118" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="126,118 138,106 138,130 126,142" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={102} y={118} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="54,94 66,82 90,82 78,94" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,94 90,82 90,106 78,118" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={94} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,94 90,82 114,82 102,94" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,94 114,82 114,106 102,118" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={94} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="102,94 114,82 138,82 126,94" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="126,94 138,82 138,106 126,118" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={102} y={94} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="54,70 66,58 90,58 78,70" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,70 90,58 90,82 78,94" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={70} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="42,130 54,118 78,118 66,130" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="66,130 78,118 78,142 66,154" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={42} y={130} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,130 78,118 102,118 90,130" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,130 102,118 102,142 90,154" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={130} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,130 102,118 126,118 114,130" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,130 126,118 126,142 114,154" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={130} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="220,112 232,100 256,100 244,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="244,112 256,100 256,124 244,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={220} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="244,112 256,100 280,100 268,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="268,112 280,100 280,124 268,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={244} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="244,88 256,76 280,76 268,88" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="268,88 280,76 280,100 268,112" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={244} y={88} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="208,124 220,112 244,112 232,124" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="232,124 244,112 244,136 232,148" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={208} y={124} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="232,124 244,112 268,112 256,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="256,124 268,112 268,136 256,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={232} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="310,100 322,88 346,88 334,100" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="334,100 346,88 346,112 334,124" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={310} y={100} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="334,100 346,88 370,88 358,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="358,100 370,88 370,112 358,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={334} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="298,112 310,100 334,100 322,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="322,112 334,100 334,124 322,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={298} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="322,112 334,100 358,100 346,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="346,112 358,100 358,124 346,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={322} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="346,112 358,100 382,100 370,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="370,112 382,100 382,124 370,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={346} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <text x={96} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">题干 15 白 + 3 灰（18 块）</text>
      <text x={244} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">①（含 1 灰）</text>
      <text x={340} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">②（含 1 灰）</text>
      </g>
      </svg><figcaption>图：题干多面体与①②</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 486 170.9" role="img" aria-label="四个选项">
      <g transform="translate(4,16)">
      <rect x={18} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="46.4,40.16 56.24,30.32 75.92,30.32 66.08,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="66.08,40.16 75.92,30.32 75.92,50 66.08,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={46.4} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="66.08,40.16 75.92,30.32 95.6,30.32 85.76,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="85.76,40.16 95.6,30.32 95.6,50 85.76,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={66.08} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="36.56,50 46.4,40.16 66.08,40.16 56.24,50" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="56.24,50 66.08,40.16 66.08,59.84 56.24,69.68" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={36.56} y={50} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="56.24,50 66.08,40.16 85.76,40.16 75.92,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="75.92,50 85.76,40.16 85.76,59.84 75.92,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={56.24} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="75.92,50 85.76,40.16 105.44,40.16 95.6,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="95.6,50 105.44,40.16 105.44,59.84 95.6,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={75.92} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={71} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">A</text>
      <text x={71.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">含 1 灰</text>
      <rect x={130} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="173.16,50 183,40.16 202.68,40.16 192.84,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="192.84,50 202.68,40.16 202.68,59.84 192.84,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={173.16} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="192.84,50 202.68,40.16 222.36,40.16 212.52,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="212.52,50 222.36,40.16 222.36,59.84 212.52,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={192.84} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="192.84,30.32 202.68,20.48 222.36,20.48 212.52,30.32" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="212.52,30.32 222.36,20.48 222.36,40.16 212.52,50" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={192.84} y={30.32} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="143.64,59.84 153.48,50 173.16,50 163.32,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="163.32,59.84 173.16,50 173.16,69.68 163.32,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={143.64} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="163.32,59.84 173.16,50 192.84,50 183,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="183,59.84 192.84,50 192.84,69.68 183,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={163.32} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="183,59.84 192.84,50 212.52,50 202.68,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="202.68,59.84 212.52,50 212.52,69.68 202.68,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={183} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={183} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">B</text>
      <text x={183.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">含 1 灰</text>
      <rect x={242} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="270.4,40.16 280.24,30.32 299.92,30.32 290.08,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="290.08,40.16 299.92,30.32 299.92,50 290.08,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={270.4} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="260.56,50 270.4,40.16 290.08,40.16 280.24,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="280.24,50 290.08,40.16 290.08,59.84 280.24,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={260.56} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="280.24,50 290.08,40.16 309.76,40.16 299.92,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="299.92,50 309.76,40.16 309.76,59.84 299.92,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={280.24} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="299.92,50 309.76,40.16 329.44,40.16 319.6,50" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="319.6,50 329.44,40.16 329.44,59.84 319.6,69.68" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={299.92} y={50} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <text x={295} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">C</text>
      <text x={295.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">含 1 灰</text>
      <rect x={354} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="377.48,40.16 387.32,30.32 407,30.32 397.16,40.16" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="397.16,40.16 407,30.32 407,50 397.16,59.84" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={377.48} y={40.16} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="397.16,40.16 407,30.32 426.68,30.32 416.84,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="416.84,40.16 426.68,30.32 426.68,50 416.84,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={397.16} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="416.84,40.16 426.68,30.32 446.36,30.32 436.52,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="436.52,40.16 446.36,30.32 446.36,50 436.52,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={416.84} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="367.64,50 377.48,40.16 397.16,40.16 387.32,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="387.32,50 397.16,40.16 397.16,59.84 387.32,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={367.64} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="387.32,50 397.16,40.16 416.84,40.16 407,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="407,50 416.84,40.16 416.84,59.84 407,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={387.32} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="407,50 416.84,40.16 436.52,40.16 426.68,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="426.68,50 436.52,40.16 436.52,59.84 426.68,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={407} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={407} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">D</text>
      <text x={407.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">含 1 灰</text>
      </g>
      </svg><figcaption>四个选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>国考这道题的关键是<b>①的位置在哪里</b>：先把黑块位置最特殊的①放进去（讲义 p183-185"①的位置在哪里？铅笔涂黑"），再做<b>合理分割</b>——3 个灰块必须分别落在 ② 和选项里，而且每块都要连成一体。按"黑块跟几个白块相连"逐项检查，B、C、D 分割后都出现断开或多占的情况。<br /><span className="correct">答案：A</span>　<span className="src">（24 国考 · 讲义 p178-187）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      <Example>
      <ExampleHeader>📝 例题8 · 黑块类·代入选项（2024 联考事业，难度 31%）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>以下左图为 15 个白色和 3 个灰色正方体堆积而成的多面体，其可以由包括右边 2 个多面体在内的 3 个多面体组合而成，问第 3 个多面体是（　）。</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 405.6 217" role="img" aria-label="题干与①②">
      <g transform="translate(1.6,0)">
      <polygon points="66,100 78,88 102,88 90,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,100 102,88 102,112 90,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,100 102,88 126,88 114,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,100 126,88 126,112 114,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="114,100 126,88 150,88 138,100" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="138,100 150,88 150,112 138,124" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={114} y={100} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="66,76 78,64 102,64 90,76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,76 102,64 102,88 90,100" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={76} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,76 102,64 126,64 114,76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,76 126,64 126,88 114,100" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={76} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="54,112 66,100 90,100 78,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,112 90,100 90,124 78,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,112 90,100 114,100 102,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,112 114,100 114,124 102,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="102,112 114,100 138,100 126,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="126,112 138,100 138,124 126,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={102} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="54,88 66,76 90,76 78,88" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,88 90,76 90,100 78,112" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={88} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,88 90,76 114,76 102,88" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,88 114,76 114,100 102,112" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={88} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="102,88 114,76 138,76 126,88" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="126,88 138,76 138,100 126,112" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={102} y={88} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="54,64 66,52 90,52 78,64" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,64 90,52 90,76 78,88" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={64} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="78,64 90,52 114,52 102,64" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,64 114,52 114,76 102,88" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={64} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="42,124 54,112 78,112 66,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="66,124 78,112 78,136 66,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={42} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,124 78,112 102,112 90,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,124 102,112 102,136 90,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,124 102,112 126,112 114,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,124 126,112 126,136 114,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="42,100 54,88 78,88 66,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="66,100 78,88 78,112 66,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={42} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,100 78,88 102,88 90,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,100 102,88 102,112 90,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="238,112 250,100 274,100 262,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="262,112 274,100 274,124 262,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={238} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="238,88 250,76 274,76 262,88" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="262,88 274,76 274,100 262,112" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={238} y={88} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="202,124 214,112 238,112 226,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="226,124 238,112 238,136 226,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={202} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="226,124 238,112 262,112 250,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="250,124 262,112 262,136 250,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={226} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="250,124 262,112 286,112 274,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="274,124 286,112 286,136 274,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={250} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="310,112 322,100 346,100 334,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="334,112 346,100 346,124 334,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={310} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="334,112 346,100 370,100 358,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="358,112 370,100 370,124 358,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={334} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="310,88 322,76 346,76 334,88" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="334,88 346,76 346,100 334,112" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={310} y={88} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="298,124 310,112 334,112 322,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="322,124 334,112 334,136 322,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={298} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="322,124 334,112 358,112 346,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="346,124 358,112 358,136 346,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={322} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="346,124 358,112 382,112 370,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="370,124 382,112 382,136 370,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={346} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <text x={96} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">题干 15 白 + 3 灰（18 块）</text>
      <text x={244} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">已给小块之一</text>
      <text x={340} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">已给小块之二</text>
      </g>
      </svg><figcaption>图：题干多面体与已给的两块</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 486 170.9" role="img" aria-label="四个选项">
      <g transform="translate(4,16)">
      <rect x={18} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="61.16,50 71,40.16 90.68,40.16 80.84,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="80.84,50 90.68,40.16 90.68,59.84 80.84,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={61.16} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="80.84,50 90.68,40.16 110.36,40.16 100.52,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="100.52,50 110.36,40.16 110.36,59.84 100.52,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={80.84} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="80.84,30.32 90.68,20.48 110.36,20.48 100.52,30.32" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="100.52,30.32 110.36,20.48 110.36,40.16 100.52,50" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={80.84} y={30.32} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="31.64,59.84 41.48,50 61.16,50 51.32,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="51.32,59.84 61.16,50 61.16,69.68 51.32,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={31.64} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="51.32,59.84 61.16,50 80.84,50 71,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="71,59.84 80.84,50 80.84,69.68 71,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={51.32} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="71,59.84 80.84,50 100.52,50 90.68,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="90.68,59.84 100.52,50 100.52,69.68 90.68,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={71} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={71} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">A</text>
      <text x={71.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">含 1 灰</text>
      <rect x={130} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="158.4,40.16 168.24,30.32 187.92,30.32 178.08,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="178.08,40.16 187.92,30.32 187.92,50 178.08,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={158.4} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="148.56,50 158.4,40.16 178.08,40.16 168.24,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="168.24,50 178.08,40.16 178.08,59.84 168.24,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={148.56} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="168.24,50 178.08,40.16 197.76,40.16 187.92,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="187.92,50 197.76,40.16 197.76,59.84 187.92,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={168.24} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="187.92,50 197.76,40.16 217.44,40.16 207.6,50" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="207.6,50 217.44,40.16 217.44,59.84 207.6,69.68" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={187.92} y={50} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <text x={183} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">B</text>
      <text x={183.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">含 1 灰</text>
      <rect x={242} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="265.48,40.16 275.32,30.32 295,30.32 285.16,40.16" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="285.16,40.16 295,30.32 295,50 285.16,59.84" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={265.48} y={40.16} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="285.16,40.16 295,30.32 314.68,30.32 304.84,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="304.84,40.16 314.68,30.32 314.68,50 304.84,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={285.16} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="304.84,40.16 314.68,30.32 334.36,30.32 324.52,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="324.52,40.16 334.36,30.32 334.36,50 324.52,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={304.84} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="255.64,50 265.48,40.16 285.16,40.16 275.32,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="275.32,50 285.16,40.16 285.16,59.84 275.32,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={255.64} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="275.32,50 285.16,40.16 304.84,40.16 295,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="295,50 304.84,40.16 304.84,59.84 295,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={275.32} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="295,50 304.84,40.16 324.52,40.16 314.68,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="314.68,50 324.52,40.16 324.52,59.84 314.68,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={295} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={295} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">C</text>
      <text x={295.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">含 1 灰</text>
      <rect x={354} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="382.4,40.16 392.24,30.32 411.92,30.32 402.08,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="402.08,40.16 411.92,30.32 411.92,50 402.08,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={382.4} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="402.08,40.16 411.92,30.32 431.6,30.32 421.76,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="421.76,40.16 431.6,30.32 431.6,50 421.76,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={402.08} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="372.56,50 382.4,40.16 402.08,40.16 392.24,50" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="392.24,50 402.08,40.16 402.08,59.84 392.24,69.68" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={372.56} y={50} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="392.24,50 402.08,40.16 421.76,40.16 411.92,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="411.92,50 421.76,40.16 421.76,59.84 411.92,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={392.24} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="411.92,50 421.76,40.16 441.44,40.16 431.6,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="431.6,50 441.44,40.16 441.44,59.84 431.6,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={411.92} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={407} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">D</text>
      <text x={407.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">含 1 灰</text>
      </g>
      </svg><figcaption>四个选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>题干已经给出两块，"② 和选项优先代入哪个？"——讲义的答案是<b>优先代选项</b>：因为<b>选项结构一致、且比已给的那块大</b>（位置局限更小），代进去更容易一次定位。把选项逐个代入题干缺口，再用黑块接触面数与分割合理性检查，A、B、D 都会让灰块位置冲突。<br /><span className="correct">答案：C</span>　<span className="src">（24 联考事业 · 讲义 p201-210）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      <Example>
      <ExampleHeader>📝 例题9 · 黑块类·正反两面直观图（2025 国考，难度 43%）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>左边为 15 个白色和 3 个灰色正方体组合而成多面体的正、反两面直观图，其可以由①、②和③三个多面体组合而成，问哪一项能填入问号处？</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 398 217" role="img" aria-label="题干与①②">
      <polygon points="66,106 78,94 102,94 90,106" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,106 102,94 102,118 90,130" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={106} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,106 102,94 126,94 114,106" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,106 126,94 126,118 114,130" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={106} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="114,106 126,94 150,94 138,106" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="138,106 150,94 150,118 138,130" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={114} y={106} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,82 78,70 102,70 90,82" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,82 102,70 102,94 90,106" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={82} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,82 102,70 126,70 114,82" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,82 126,70 126,94 114,106" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={82} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="114,82 126,70 150,70 138,82" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="138,82 150,70 150,94 138,106" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={114} y={82} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,58 78,46 102,46 90,58" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,58 102,46 102,70 90,82" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={58} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="90,58 102,46 126,46 114,58" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,58 126,46 126,70 114,82" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={58} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="114,58 126,46 150,46 138,58" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="138,58 150,46 150,70 138,82" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={114} y={58} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="54,118 66,106 90,106 78,118" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,118 90,106 90,130 78,142" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={118} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,118 90,106 114,106 102,118" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,118 114,106 114,130 102,142" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={118} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="102,118 114,106 138,106 126,118" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="126,118 138,106 138,130 126,142" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={102} y={118} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="54,94 66,82 90,82 78,94" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,94 90,82 90,106 78,118" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={94} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,94 90,82 114,82 102,94" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,94 114,82 114,106 102,118" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={94} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="102,94 114,82 138,82 126,94" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="126,94 138,82 138,106 126,118" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={102} y={94} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="42,130 54,118 78,118 66,130" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="66,130 78,118 78,142 66,154" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={42} y={130} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,130 78,118 102,118 90,130" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,130 102,118 102,142 90,154" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={130} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="90,130 102,118 126,118 114,130" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,130 126,118 126,142 114,154" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={130} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="214,100 226,88 250,88 238,100" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="238,100 250,88 250,112 238,124" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={214} y={100} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="238,100 250,88 274,88 262,100" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="262,100 274,88 274,112 262,124" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={238} y={100} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="202,112 214,100 238,100 226,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="226,112 238,100 238,124 226,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={202} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="226,112 238,100 262,100 250,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="250,112 262,100 262,124 250,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={226} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="250,112 262,100 286,100 274,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="274,112 286,100 286,124 274,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={250} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="316,112 328,100 352,100 340,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="340,112 352,100 352,124 340,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={316} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="340,112 352,100 376,100 364,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="364,112 376,100 376,124 364,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={340} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="340,88 352,76 376,76 364,88" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="364,88 376,76 376,100 364,112" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={340} y={88} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="304,124 316,112 340,112 328,124" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="328,124 340,112 340,136 328,148" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={304} y={124} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="328,124 340,112 364,112 352,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="352,124 364,112 364,136 352,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={328} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <text x={96} y={192} fontSize={12.5} fill="#2563eb" textAnchor="start" fontWeight="normal" fontFamily="sans-serif">题干：正、反两面直观图（18 块）</text>
      <text x={244} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">①</text>
      <text x={340} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">②</text>
      </svg><figcaption>图：题干的正、反两面直观图与①②</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 486 170.9" role="img" aria-label="四个选项">
      <g transform="translate(4,16)">
      <rect x={18} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="46.4,40.16 56.24,30.32 75.92,30.32 66.08,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="66.08,40.16 75.92,30.32 75.92,50 66.08,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={46.4} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="36.56,50 46.4,40.16 66.08,40.16 56.24,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="56.24,50 66.08,40.16 66.08,59.84 56.24,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={36.56} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="56.24,50 66.08,40.16 85.76,40.16 75.92,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="75.92,50 85.76,40.16 85.76,59.84 75.92,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={56.24} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="75.92,50 85.76,40.16 105.44,40.16 95.6,50" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="95.6,50 105.44,40.16 105.44,59.84 95.6,69.68" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={75.92} y={50} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <text x={71} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">A</text>
      <text x={71.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">1 灰</text>
      <rect x={130} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="158.4,40.16 168.24,30.32 187.92,30.32 178.08,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="178.08,40.16 187.92,30.32 187.92,50 178.08,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={158.4} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="178.08,40.16 187.92,30.32 207.6,30.32 197.76,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="197.76,40.16 207.6,30.32 207.6,50 197.76,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={178.08} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="148.56,50 158.4,40.16 178.08,40.16 168.24,50" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="168.24,50 178.08,40.16 178.08,59.84 168.24,69.68" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={148.56} y={50} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="168.24,50 178.08,40.16 197.76,40.16 187.92,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="187.92,50 197.76,40.16 197.76,59.84 187.92,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={168.24} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="187.92,50 197.76,40.16 217.44,40.16 207.6,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="207.6,50 217.44,40.16 217.44,59.84 207.6,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={187.92} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={183} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">B</text>
      <text x={183.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">1 灰</text>
      <rect x={242} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="285.16,50 295,40.16 314.68,40.16 304.84,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="304.84,50 314.68,40.16 314.68,59.84 304.84,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={285.16} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="304.84,50 314.68,40.16 334.36,40.16 324.52,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="324.52,50 334.36,40.16 334.36,59.84 324.52,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={304.84} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="304.84,30.32 314.68,20.48 334.36,20.48 324.52,30.32" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="324.52,30.32 334.36,20.48 334.36,40.16 324.52,50" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={304.84} y={30.32} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="255.64,59.84 265.48,50 285.16,50 275.32,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="275.32,59.84 285.16,50 285.16,69.68 275.32,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={255.64} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="275.32,59.84 285.16,50 304.84,50 295,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="295,59.84 304.84,50 304.84,69.68 295,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={275.32} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="295,59.84 304.84,50 324.52,50 314.68,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="314.68,59.84 324.52,50 324.52,69.68 314.68,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={295} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={295} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">C</text>
      <text x={295.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">1 灰</text>
      <rect x={354} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="377.48,40.16 387.32,30.32 407,30.32 397.16,40.16" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="397.16,40.16 407,30.32 407,50 397.16,59.84" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={377.48} y={40.16} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="397.16,40.16 407,30.32 426.68,30.32 416.84,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="416.84,40.16 426.68,30.32 426.68,50 416.84,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={397.16} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="416.84,40.16 426.68,30.32 446.36,30.32 436.52,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="436.52,40.16 446.36,30.32 446.36,50 436.52,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={416.84} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="367.64,50 377.48,40.16 397.16,40.16 387.32,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="387.32,50 397.16,40.16 397.16,59.84 387.32,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={367.64} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="387.32,50 397.16,40.16 416.84,40.16 407,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="407,50 416.84,40.16 416.84,59.84 407,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={387.32} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="407,50 416.84,40.16 436.52,40.16 426.68,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="426.68,50 436.52,40.16 436.52,59.84 426.68,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={407} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={407} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">D</text>
      <text x={407.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">1 灰</text>
      </g>
      </svg><figcaption>四个选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>给的是正、反两面直观图，先在心里把它合成一个 18 块的多面体（15 白 + 3 灰）。依旧是"<b>②和选项优先代入哪个</b>"：黑块位置最特殊的那一块先代，再用灰块与白块的接触面数、以及分割后是否连成一体来排除。A、C、D 代入后灰块与题干的接触面数对不上。<br /><span className="correct">答案：B</span>　<span className="src">（25 国考 · 讲义 p211-221）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      <Example>
      <ExampleHeader>📝 例题10 · 黑块类·依次确定 3 个黑块（2021 联考事业，难度 35%）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>左图为相同大小的 15 个白色和 3 个灰色正方体组合而成的多面体，其可以由①、②和③三个多面体组合而成，哪一项能填入问号处？</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 405.6 217" role="img" aria-label="题干与①②">
      <g transform="translate(1.6,0)">
      <polygon points="66,106 78,94 102,94 90,106" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,106 102,94 102,118 90,130" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={106} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,106 102,94 126,94 114,106" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,106 126,94 126,118 114,130" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={106} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="114,106 126,94 150,94 138,106" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="138,106 150,94 150,118 138,130" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={114} y={106} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,82 78,70 102,70 90,82" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,82 102,70 102,94 90,106" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={82} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,82 102,70 126,70 114,82" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,82 126,70 126,94 114,106" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={82} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="114,82 126,70 150,70 138,82" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="138,82 150,70 150,94 138,106" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={114} y={82} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,58 78,46 102,46 90,58" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,58 102,46 102,70 90,82" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={58} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,58 102,46 126,46 114,58" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,58 126,46 126,70 114,82" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={58} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="54,118 66,106 90,106 78,118" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,118 90,106 90,130 78,142" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={118} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,118 90,106 114,106 102,118" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,118 114,106 114,130 102,142" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={118} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="102,118 114,106 138,106 126,118" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="126,118 138,106 138,130 126,142" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={102} y={118} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="54,94 66,82 90,82 78,94" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,94 90,82 90,106 78,118" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={94} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="78,94 90,82 114,82 102,94" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="102,94 114,82 114,106 102,118" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={78} y={94} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="102,94 114,82 138,82 126,94" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="126,94 138,82 138,106 126,118" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={102} y={94} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="54,70 66,58 90,58 78,70" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="78,70 90,58 90,82 78,94" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={54} y={70} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="42,130 54,118 78,118 66,130" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="66,130 78,118 78,142 66,154" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={42} y={130} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="66,130 78,118 102,118 90,130" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="90,130 102,118 102,142 90,154" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={66} y={130} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,130 102,118 126,118 114,130" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,130 126,118 126,142 114,154" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={130} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="238,112 250,100 274,100 262,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="262,112 274,100 274,124 262,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={238} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="238,88 250,76 274,76 262,88" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="262,88 274,76 274,100 262,112" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={238} y={88} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="202,124 214,112 238,112 226,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="226,124 238,112 238,136 226,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={202} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="226,124 238,112 262,112 250,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="250,124 262,112 262,136 250,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={226} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="250,124 262,112 286,112 274,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="274,124 286,112 286,136 274,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={250} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="310,112 322,100 346,100 334,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="334,112 346,100 346,124 334,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={310} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="334,112 346,100 370,100 358,112" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="358,112 370,100 370,124 358,136" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={334} y={112} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="310,88 322,76 346,76 334,88" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="334,88 346,76 346,100 334,112" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={310} y={88} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="298,124 310,112 334,112 322,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="322,124 334,112 334,136 322,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={298} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="322,124 334,112 358,112 346,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="346,124 358,112 358,136 346,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={322} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="346,124 358,112 382,112 370,124" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="370,124 382,112 382,136 370,148" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={346} y={124} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <text x={96} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">题干 15 白 + 3 灰（18 块）</text>
      <text x={244} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">②</text>
      <text x={340} y={192} fontSize={12.5} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">①</text>
      </g>
      </svg><figcaption>图：题干多面体与①②</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 486 170.9" role="img" aria-label="四个选项">
      <g transform="translate(4,16)">
      <rect x={18} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="46.4,40.16 56.24,30.32 75.92,30.32 66.08,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="66.08,40.16 75.92,30.32 75.92,50 66.08,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={46.4} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="36.56,50 46.4,40.16 66.08,40.16 56.24,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="56.24,50 66.08,40.16 66.08,59.84 56.24,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={36.56} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="56.24,50 66.08,40.16 85.76,40.16 75.92,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="75.92,50 85.76,40.16 85.76,59.84 75.92,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={56.24} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="75.92,50 85.76,40.16 105.44,40.16 95.6,50" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="95.6,50 105.44,40.16 105.44,59.84 95.6,69.68" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={75.92} y={50} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <text x={71} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">A</text>
      <text x={71.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">含 1 灰</text>
      <rect x={130} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="173.16,50 183,40.16 202.68,40.16 192.84,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="192.84,50 202.68,40.16 202.68,59.84 192.84,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={173.16} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="192.84,50 202.68,40.16 222.36,40.16 212.52,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="212.52,50 222.36,40.16 222.36,59.84 212.52,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={192.84} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="192.84,30.32 202.68,20.48 222.36,20.48 212.52,30.32" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="212.52,30.32 222.36,20.48 222.36,40.16 212.52,50" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={192.84} y={30.32} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="143.64,59.84 153.48,50 173.16,50 163.32,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="163.32,59.84 173.16,50 173.16,69.68 163.32,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={143.64} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="163.32,59.84 173.16,50 192.84,50 183,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="183,59.84 192.84,50 192.84,69.68 183,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={163.32} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="183,59.84 192.84,50 212.52,50 202.68,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="202.68,59.84 212.52,50 212.52,69.68 202.68,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={183} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={183} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">B</text>
      <text x={183.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">含 1 灰</text>
      <rect x={242} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="265.48,40.16 275.32,30.32 295,30.32 285.16,40.16" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="285.16,40.16 295,30.32 295,50 285.16,59.84" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={265.48} y={40.16} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="285.16,40.16 295,30.32 314.68,30.32 304.84,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="304.84,40.16 314.68,30.32 314.68,50 304.84,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={285.16} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="304.84,40.16 314.68,30.32 334.36,30.32 324.52,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="324.52,40.16 334.36,30.32 334.36,50 324.52,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={304.84} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="255.64,50 265.48,40.16 285.16,40.16 275.32,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="275.32,50 285.16,40.16 285.16,59.84 275.32,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={255.64} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="275.32,50 285.16,40.16 304.84,40.16 295,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="295,50 304.84,40.16 304.84,59.84 295,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={275.32} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="295,50 304.84,40.16 324.52,40.16 314.68,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="314.68,50 324.52,40.16 324.52,59.84 314.68,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={295} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={295} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">C</text>
      <text x={295.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">含 1 灰</text>
      <rect x={354} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="382.4,40.16 392.24,30.32 411.92,30.32 402.08,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="402.08,40.16 411.92,30.32 411.92,50 402.08,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={382.4} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="402.08,40.16 411.92,30.32 431.6,30.32 421.76,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="421.76,40.16 431.6,30.32 431.6,50 421.76,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={402.08} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="372.56,50 382.4,40.16 402.08,40.16 392.24,50" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="392.24,50 402.08,40.16 402.08,59.84 392.24,69.68" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={372.56} y={50} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="392.24,50 402.08,40.16 421.76,40.16 411.92,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="411.92,50 421.76,40.16 421.76,59.84 411.92,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={392.24} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="411.92,50 421.76,40.16 441.44,40.16 431.6,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="431.6,50 441.44,40.16 441.44,59.84 431.6,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={411.92} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={407} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">D</text>
      <text x={407.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">含 1 灰</text>
      </g>
      </svg><figcaption>四个选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>黑块类最标准的做法：<b>依次确定 3 个黑块的位置</b>。题干里有 3 个灰块（讲义把它们编号 1、2、3），"哪个方块位置最特殊？"——先定那个只能待在一个位置的灰块，再按接触面总数把 ② 和选项往里塞。A、B、C 代入后都会出现"黑块接触面个数 &lt; 题干"或分割断开的问题。<br /><span className="correct">答案：D</span>　<span className="src">（21 联考事业 · 讲义 p150-165）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      </Block>
      <Block>
      <BlockTitle>6. 几个一样：能切成 3 个完全相同的小多面体</BlockTitle>
      <Callout variant="key"><b>加密 / 解密</b>
      <PointList>
      <li><b>加密：</b>多面体可以切割为 <b>3 个完全相同</b>的小多面体；</li>
      <li><b>解密：</b><b>找特殊，直接代入选项</b>——先把大图的特殊部位对进选项，再旋转、平移验证。</li>
      </PointList></Callout>
      <PointList>
      <li>看到"完全相同"三个字，先算<b>块数除法</b>：总数 ÷ 3 = 每块块数，块数不符的选项直接排掉。</li>
      <li>再看<b>特殊形状</b>：大图里最"突出"的那几个方块（凸出的角、凹进去的槽）在选项里必须有对应，对不上就错。</li>
      <li>题干只有一个黑面时，直接盯<b>黑面的位置与朝向</b>——三个相同图形拼起来，黑面之间的关系是固定的。</li>
      </PointList>
      <Example>
      <ExampleHeader>📝 例题11 · 几个一样（2021 国考，难度 59%）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>左图给定的是由 18 个相同大小的正方体组合成的多面体，这个多面体可以切割为 3 个完全相同的小多面体，问切成的小多面体是：</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 306 180" role="img" aria-label="题干：18 块多面体">
      <polygon points="200,110 212,98 236,98 224,110" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="224,110 236,98 236,122 224,134" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={200} y={110} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="224,110 236,98 260,98 248,110" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="248,110 260,98 260,122 248,134" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={224} y={110} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="248,110 260,98 284,98 272,110" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="272,110 284,98 284,122 272,134" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={248} y={110} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="200,86 212,74 236,74 224,86" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="224,86 236,74 236,98 224,110" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={200} y={86} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="224,86 236,74 260,74 248,86" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="248,86 260,74 260,98 248,110" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={224} y={86} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="248,86 260,74 284,74 272,86" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="272,86 284,74 284,98 272,110" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={248} y={86} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="200,62 212,50 236,50 224,62" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="224,62 236,50 236,74 224,86" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={200} y={62} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="224,62 236,50 260,50 248,62" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="248,62 260,50 260,74 248,86" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={224} y={62} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="188,122 200,110 224,110 212,122" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="212,122 224,110 224,134 212,146" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={188} y={122} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="212,122 224,110 248,110 236,122" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="236,122 248,110 248,134 236,146" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={212} y={122} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="236,122 248,110 272,110 260,122" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="260,122 272,110 272,134 260,146" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={236} y={122} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="188,98 200,86 224,86 212,98" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="212,98 224,86 224,110 212,122" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={188} y={98} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="212,98 224,86 248,86 236,98" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="236,98 248,86 248,110 236,122" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={212} y={98} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="188,74 200,62 224,62 212,74" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="212,74 224,62 224,86 212,98" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={188} y={74} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="176,134 188,122 212,122 200,134" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="200,134 212,122 212,146 200,158" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={176} y={134} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="200,134 212,122 236,122 224,134" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="224,134 236,122 236,146 224,158" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={200} y={134} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="224,134 236,122 260,122 248,134" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="248,134 260,122 260,146 248,158" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={224} y={134} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="176,110 188,98 212,98 200,110" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="200,110 212,98 212,122 200,134" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={176} y={110} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      </svg><figcaption>图：题干多面体（18 块，可切成 3 个完全相同的小块）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 486 170.9" role="img" aria-label="四个选项">
      <g transform="translate(4,16)">
      <rect x={18} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="41.48,40.16 51.32,30.32 71,30.32 61.16,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="61.16,40.16 71,30.32 71,50 61.16,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={41.48} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="61.16,40.16 71,30.32 90.68,30.32 80.84,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="80.84,40.16 90.68,30.32 90.68,50 80.84,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={61.16} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="80.84,40.16 90.68,30.32 110.36,30.32 100.52,40.16" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="100.52,40.16 110.36,30.32 110.36,50 100.52,59.84" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={80.84} y={40.16} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="31.64,50 41.48,40.16 61.16,40.16 51.32,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="51.32,50 61.16,40.16 61.16,59.84 51.32,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={31.64} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="51.32,50 61.16,40.16 80.84,40.16 71,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="71,50 80.84,40.16 80.84,59.84 71,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={51.32} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="71,50 80.84,40.16 100.52,40.16 90.68,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="90.68,50 100.52,40.16 100.52,59.84 90.68,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={71} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={71} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">A</text>
      <text x={71.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">6 块</text>
      <rect x={130} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="163.32,45.08 173.16,35.24 192.84,35.24 183,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="183,45.08 192.84,35.24 192.84,54.92 183,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={163.32} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="183,45.08 192.84,35.24 212.52,35.24 202.68,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="202.68,45.08 212.52,35.24 212.52,54.92 202.68,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={183} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="153.48,54.92 163.32,45.08 183,45.08 173.16,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="173.16,54.92 183,45.08 183,64.76 173.16,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={153.48} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="173.16,54.92 183,45.08 202.68,45.08 192.84,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="192.84,54.92 202.68,45.08 202.68,64.76 192.84,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={173.16} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="153.48,35.24 163.32,25.4 183,25.4 173.16,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="173.16,35.24 183,25.4 183,45.08 173.16,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={153.48} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="173.16,35.24 183,25.4 202.68,25.4 192.84,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="192.84,35.24 202.68,25.4 202.68,45.08 192.84,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={173.16} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={183} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">B</text>
      <text x={183.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">6 块</text>
      <rect x={242} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="260.56,64.76 270.4,54.92 290.08,54.92 280.24,64.76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="280.24,64.76 290.08,54.92 290.08,74.6 280.24,84.44" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={260.56} y={64.76} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="280.24,64.76 290.08,54.92 309.76,54.92 299.92,64.76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="299.92,64.76 309.76,54.92 309.76,74.6 299.92,84.44" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={280.24} y={64.76} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="299.92,64.76 309.76,54.92 329.44,54.92 319.6,64.76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="319.6,64.76 329.44,54.92 329.44,74.6 319.6,84.44" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={299.92} y={64.76} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="260.56,45.08 270.4,35.24 290.08,35.24 280.24,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="280.24,45.08 290.08,35.24 290.08,54.92 280.24,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={260.56} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="280.24,45.08 290.08,35.24 309.76,35.24 299.92,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="299.92,45.08 309.76,35.24 309.76,54.92 299.92,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={280.24} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="280.24,25.4 290.08,15.56 309.76,15.56 299.92,25.4" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="299.92,25.4 309.76,15.56 309.76,35.24 299.92,45.08" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={280.24} y={25.4} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={295} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">C</text>
      <text x={295.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">6 块</text>
      <rect x={354} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="387.32,50 397.16,40.16 416.84,40.16 407,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="407,50 416.84,40.16 416.84,59.84 407,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={387.32} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="407,50 416.84,40.16 436.52,40.16 426.68,50" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="426.68,50 436.52,40.16 436.52,59.84 426.68,69.68" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={407} y={50} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="387.32,30.32 397.16,20.48 416.84,20.48 407,30.32" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="407,30.32 416.84,20.48 416.84,40.16 407,50" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={387.32} y={30.32} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="407,30.32 416.84,20.48 436.52,20.48 426.68,30.32" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="426.68,30.32 436.52,20.48 436.52,40.16 426.68,50" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={407} y={30.32} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="377.48,59.84 387.32,50 407,50 397.16,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="397.16,59.84 407,50 407,69.68 397.16,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={377.48} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="397.16,59.84 407,50 426.68,50 416.84,59.84" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="416.84,59.84 426.68,50 426.68,69.68 416.84,79.52" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={397.16} y={59.84} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={407} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">D</text>
      <text x={407.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">6 块</text>
      </g>
      </svg><figcaption>四个选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>18 ÷ 3 = <b>6 块</b>，四个选项都画成 6 块（先确认块数），所以只能<b>直接代入选项</b>：把选项往大图上"贴"，看能不能留下两块完全一样的形状。A、B、C 贴完剩下的两块与第一块都不同（突出的角对不上），只有 D 三个方向各自旋转后完全重合。<br /><span className="correct">答案：D</span>　<span className="src">（21 国考 · 讲义 p228-235）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      <Example>
      <ExampleHeader>📝 例题12 · 几个一样 + 黑面（2023 广东，难度 45%）</ExampleHeader>
      <ExampleBody>
      <ExampleQuestion>左侧立体图形仅有图中所示的一个正方形面为黑色，则下列选项最不可能由三个左侧图形构成的是：</ExampleQuestion>
      <figure className="fig"><svg viewBox="0 0 442.0 211" role="img" aria-label="左侧立体图形">
      <polygon points="90,110 102,98 126,98 114,110" fill="#6b7280" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,110 126,98 126,122 114,134" fill="#374151" stroke="#111827" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={110} width={24} height={24} fill="#4b5563" stroke="#111827" strokeWidth={1.8} />
      <polygon points="114,110 126,98 150,98 138,110" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="138,110 150,98 150,122 138,134" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={114} y={110} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <polygon points="90,86 102,74 126,74 114,86" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <polygon points="114,86 126,74 126,98 114,110" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={90} y={86} width={24} height={24} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.8} />
      <text x={120} y={186} fontSize={13} fill="#2563eb" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">左侧图形：3 块，只有 1 个黑面</text>
      <text x={330} y={104} fontSize={15} fill="#f59e0b" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">三个它 → 3 个黑面</text>
      <text x={330} y={130} fontSize={12} fill="#6b7280" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">黑面的位置与朝向必须能两两对上</text>
      </svg><figcaption>图：左侧立体图形（只有一个黑面）</figcaption></figure>
      <figure className="fig"><svg viewBox="0 0 547.3 171" role="img" aria-label="四个选项">
      <g transform="translate(34.6,16)">
      <rect x={18} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="-12.64,54.92 -2.8,45.08 16.88,45.08 7.04,54.92" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="7.04,54.92 16.88,45.08 16.88,64.76 7.04,74.6" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x="-12.64" y={54.92} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="7.04,54.92 16.88,45.08 36.56,45.08 26.72,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="26.72,54.92 36.56,45.08 36.56,64.76 26.72,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={7.04} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="46.4,54.92 56.24,45.08 75.92,45.08 66.08,54.92" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="66.08,54.92 75.92,45.08 75.92,64.76 66.08,74.6" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={46.4} y={54.92} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="66.08,54.92 75.92,45.08 95.6,45.08 85.76,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="85.76,54.92 95.6,45.08 95.6,64.76 85.76,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={66.08} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="105.44,54.92 115.28,45.08 134.96,45.08 125.12,54.92" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="125.12,54.92 134.96,45.08 134.96,64.76 125.12,74.6" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={105.44} y={54.92} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="125.12,54.92 134.96,45.08 154.64,45.08 144.8,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="144.8,54.92 154.64,45.08 154.64,64.76 144.8,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={125.12} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="-12.64,35.24 -2.8,25.4 16.88,25.4 7.04,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="7.04,35.24 16.88,25.4 16.88,45.08 7.04,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x="-12.64" y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="46.4,35.24 56.24,25.4 75.92,25.4 66.08,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="66.08,35.24 75.92,25.4 75.92,45.08 66.08,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={46.4} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="105.44,35.24 115.28,25.4 134.96,25.4 125.12,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="125.12,35.24 134.96,25.4 134.96,45.08 125.12,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={105.44} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={71} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">A</text>
      <text x={71.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">黑面在角</text>
      <rect x={130} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="143.64,45.08 153.48,35.24 173.16,35.24 163.32,45.08" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="163.32,45.08 173.16,35.24 173.16,54.92 163.32,64.76" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={143.64} y={45.08} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="163.32,45.08 173.16,35.24 192.84,35.24 183,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="183,45.08 192.84,35.24 192.84,54.92 183,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={163.32} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="143.64,25.4 153.48,15.56 173.16,15.56 163.32,25.4" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="163.32,25.4 173.16,15.56 173.16,35.24 163.32,45.08" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={143.64} y={25.4} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="192.84,54.92 202.68,45.08 222.36,45.08 212.52,54.92" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="212.52,54.92 222.36,45.08 222.36,64.76 212.52,74.6" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={192.84} y={54.92} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="212.52,54.92 222.36,45.08 242.04,45.08 232.2,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="232.2,54.92 242.04,45.08 242.04,64.76 232.2,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={212.52} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="192.84,35.24 202.68,25.4 222.36,25.4 212.52,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="212.52,35.24 222.36,25.4 222.36,45.08 212.52,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={192.84} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="123.96,64.76 133.8,54.92 153.48,54.92 143.64,64.76" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="143.64,64.76 153.48,54.92 153.48,74.6 143.64,84.44" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={123.96} y={64.76} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="143.64,64.76 153.48,54.92 173.16,54.92 163.32,64.76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="163.32,64.76 173.16,54.92 173.16,74.6 163.32,84.44" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={143.64} y={64.76} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="123.96,45.08 133.8,35.24 153.48,35.24 143.64,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="143.64,45.08 153.48,35.24 153.48,54.92 143.64,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={123.96} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={183} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">B</text>
      <text x={183.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">黑面在角</text>
      <rect x={242} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="309.76,45.08 319.6,35.24 339.28,35.24 329.44,45.08" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="329.44,45.08 339.28,35.24 339.28,54.92 329.44,64.76" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={309.76} y={45.08} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="329.44,45.08 339.28,35.24 358.96,35.24 349.12,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="349.12,45.08 358.96,35.24 358.96,54.92 349.12,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={329.44} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="309.76,25.4 319.6,15.56 339.28,15.56 329.44,25.4" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="329.44,25.4 339.28,15.56 339.28,35.24 329.44,45.08" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={309.76} y={25.4} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="231.04,64.76 240.88,54.92 260.56,54.92 250.72,64.76" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="250.72,64.76 260.56,54.92 260.56,74.6 250.72,84.44" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={231.04} y={64.76} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="250.72,64.76 260.56,54.92 280.24,54.92 270.4,64.76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="270.4,64.76 280.24,54.92 280.24,74.6 270.4,84.44" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={250.72} y={64.76} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="290.08,64.76 299.92,54.92 319.6,54.92 309.76,64.76" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="309.76,64.76 319.6,54.92 319.6,74.6 309.76,84.44" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={290.08} y={64.76} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="309.76,64.76 319.6,54.92 339.28,54.92 329.44,64.76" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="329.44,64.76 339.28,54.92 339.28,74.6 329.44,84.44" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={309.76} y={64.76} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="231.04,45.08 240.88,35.24 260.56,35.24 250.72,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="250.72,45.08 260.56,35.24 260.56,54.92 250.72,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={231.04} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="290.08,45.08 299.92,35.24 319.6,35.24 309.76,45.08" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="309.76,45.08 319.6,35.24 319.6,54.92 309.76,64.76" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={290.08} y={45.08} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={295} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">C</text>
      <text x={295.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">黑面在角</text>
      <rect x={354} y={6} width={106} height={88} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.4} />
      <polygon points="323.36,54.92 333.2,45.08 352.88,45.08 343.04,54.92" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="343.04,54.92 352.88,45.08 352.88,64.76 343.04,74.6" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={323.36} y={54.92} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="343.04,54.92 352.88,45.08 372.56,45.08 362.72,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="362.72,54.92 372.56,45.08 372.56,64.76 362.72,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={343.04} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="382.4,54.92 392.24,45.08 411.92,45.08 402.08,54.92" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="402.08,54.92 411.92,45.08 411.92,64.76 402.08,74.6" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={382.4} y={54.92} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="402.08,54.92 411.92,45.08 431.6,45.08 421.76,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="421.76,54.92 431.6,45.08 431.6,64.76 421.76,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={402.08} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="441.44,54.92 451.28,45.08 470.96,45.08 461.12,54.92" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="461.12,54.92 470.96,45.08 470.96,64.76 461.12,74.6" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={441.44} y={54.92} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="461.12,54.92 470.96,45.08 490.64,45.08 480.8,54.92" fill="#6b7280" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="480.8,54.92 490.64,45.08 490.64,64.76 480.8,74.6" fill="#374151" stroke="#111827" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={461.12} y={54.92} width={19.68} height={19.68} fill="#4b5563" stroke="#111827" strokeWidth={1.7} />
      <polygon points="323.36,35.24 333.2,25.4 352.88,25.4 343.04,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="343.04,35.24 352.88,25.4 352.88,45.08 343.04,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={323.36} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="382.4,35.24 392.24,25.4 411.92,25.4 402.08,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="402.08,35.24 411.92,25.4 411.92,45.08 402.08,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={382.4} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <polygon points="461.12,35.24 470.96,25.4 490.64,25.4 480.8,35.24" fill="#eff6ff" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <polygon points="480.8,35.24 490.64,25.4 490.64,45.08 480.8,54.92" fill="#bfdbfe" stroke="#1f2937" strokeWidth={1.7} strokeLinejoin="round" />
      <rect x={461.12} y={35.24} width={19.68} height={19.68} fill="#dbeafe" stroke="#1f2937" strokeWidth={1.7} />
      <text x={407} y={116} fontSize={15} fill="#1f2937" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">D</text>
      <text x={407.0} y={130.8} fontSize={11.5} fill="#ef4444" textAnchor="middle" fontWeight="normal" fontFamily="sans-serif">黑面在端→不可能</text>
      </g>
      </svg><figcaption>四个选项 A / B / C / D</figcaption></figure>
      <ExampleAnswer><b>解析：</b>"找特殊，直接代入选项"——这里最特殊的就是那个<b>黑面</b>。三个左侧图形拼起来，三个黑面在大图中的相对位置是固定的。把 A、B、C 依次代进去，三个黑面都能由左侧图形的黑面旋转得到；D 中黑面出现的位置（右上角那块）无法由三个相同图形的黑面拼出，所以 D 最不可能。<br /><span className="correct">答案：D</span>　<span className="src">（23 广东 · 讲义 p236-241）</span></ExampleAnswer>
      </ExampleBody>
      </Example>
      </Block>
      <Block>
      <BlockTitle>7. 四个小结与易错清单</BlockTitle>
      <Callout variant="key"><b>小结一：层数（数层数什么时候用）</b>
      <PointList>
      <li>每层个数不一样，<b>数层数性价比最高</b>；</li>
      <li>每层个数一致的选项，<b>正确可能性更高</b>——个数和缺口完全对上时，基本就是它；</li>
      <li>数每层个数，优先考虑<b>不旋转</b>的情况；分不出来就把选项<b>转换成平面图</b>逐格比对。</li>
      </PointList></Callout>
      <Callout variant="key"><b>小结二：找特殊（谁的位置局限性最大）</b>
      <PointList>
      <li>抽象（形状怪）→ 优先代入；</li>
      <li>最大（块数多）→ 优先代入；</li>
      <li>选项本身更大、结构一致时，也可以<b>先代选项</b>；</li>
      <li>题干给的是几个一样的方块 → 立刻想<b>对称性</b>。</li>
      </PointList></Callout>
      <Callout variant="key"><b>小结三：接触面（黑块类）</b>
      <PointList>
      <li>先数<b>黑块与白块的接触面总数</b>（猜测）；选项接触面个数小于题干的，直接错；</li>
      <li>再<b>找特殊</b>，把黑块位置最特殊的一块优先代入；</li>
      <li>最后用<b>合理分割</b>检查：黑块跟几个白块相连，分割后每块是否连成一体。</li>
      </PointList></Callout>
      <Callout variant="key"><b>小结四：几个一样</b>
      <PointList>
      <li>总数 ÷ 3 先定块数；</li>
      <li>再<b>找特殊，直接代入选项</b>，用旋转 / 平移验证能否完全重合。</li>
      </PointList></Callout>
      <Callout variant="tip"><b>易错清单</b>
      <PointList>
      <li>只数个数不看选项：<b>选项个数一致时不要数</b>，白费时间；</li>
      <li>数层方向不统一：题干从上往下、选项也要从上往下；</li>
      <li>看到黑块就慌：黑块题反而是最好定位的，它是天然的"特殊块"；</li>
      <li>忘了旋转：立体拼合<b>允许旋转、不允许翻转镜像</b>，但讲义也提示"数每层个数时优先考虑不旋转的情况"——先按原方位试，能对上就别转。</li>
      </PointList></Callout>
      <Callout variant="formula"><span className="formula">第一步看选项定方法：① 个数　② 层数　③ 特殊；黑块类：① 接触面　② 找特殊　③ 合理分</span></Callout>
      </Block>
    </>
  )
}
