import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList, SubPoint } from '@/components/content'

/**
 * 一、倍数特性
 *
 * @returns 该节正文。
 */
export default function S3(): ReactElement {
  return (
    <>
      <Block>
                    <BlockTitle>1. 整除型</BlockTitle>
                    <PointList>
                      <li><b>口诀法</b>（3/4/5/9常用）
                        <SubPoint>3/9 → 看各位数字之和能否被3/9整除</SubPoint>
                        <SubPoint>2/5 → 看末一位能否被2/5整除</SubPoint>
                        <SubPoint>4/25 → 看末两位能否被4/25整除</SubPoint>
                        <SubPoint>8/125 → 看末三位能否被8/125整除（如 12164 的末三位 164 能被 4 整除，故能被 8 整除）</SubPoint>
                      </li>
                      <li><b>拆分法</b>（7/13等无口诀数）
                        <SubPoint>一个数 = 接近的倍数 ± 零头，只看零头能否整除</SubPoint>
                        <SubPoint>例：623÷7 → 拆成630-7，只看7能否被7整除</SubPoint>
                      </li>
                      <li><b>因式分解</b>（6/12/18/24等复杂倍数）
                        <SubPoint>分解为两个互质的数，同时满足</SubPoint>
                        <SubPoint>例：24=3×8，需同时被3和8整除</SubPoint>
                      </li>
                    </PointList>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题1 · 整除型（口诀法）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>四位数 58□2 能被 3 整除，则 □ 中可填的数字共有几个？</ExampleQuestion>
                      <ExampleOptions>A.3 个　B.4 个　C.5 个　D.6 个</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>被 3 整除看<b>各位数字之和</b>：5 + 8 + □ + 2 = 15 + □<br />
                        需 15 + □ 能被 3 整除 → □ = 0、3、6、9 共 <b>4 个</b><br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题2 · 整除型（拆分法 · 2021 上海）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>公司购买某设备 24 套，现要登记单价，但数据上没有标注单价，且总价第一位和最后一位模糊不清，只看到是 ☆579△ 元。则 ☆ 可能是（　　）。</ExampleQuestion>
                      <ExampleOptions>A.3　B.5　C.7　D.9</ExampleOptions>
                      <ExampleAnswer>
                              <b>解析：</b>总价 = 单价 × 24，所以总价必须能被 24 整除。
                              24 = 3 × 8，<b>3 与 8 互质</b> → 必须同时能被 3 和 8 整除（这就是"因式分解"）。
                              ① 能被 8 整除：看<b>末三位</b>，即 79△ 要能被 8 整除。
                              79△ ÷ 8 → △ = 2 时 792 = 8 × 99 ✓（△ = 0~9 中只有 2 满足）。
                              ② 能被 3 整除：看各位数字之和，☆ + 5 + 7 + 9 + 2 = ☆ + 23。
                              ☆ + 23 能被 3 整除 → ☆ = 1、4、7（选项中只有 <b>7</b>）。
                              要点：<b>末尾数字用"拆分/末几位"、整体用"数字之和"</b>，两条路同时用才能锁定唯一答案。
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>2. 余数型</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">若 总数 = ax + b，则 (总数 - b) 能被 a 整除</span><br />
                      <span className="formula">若 总数 = ax - b，则 (总数 + b) 能被 a 整除</span>
                    </Callout>
                    <SubPoint>特征：均分、多几个、少几个</SubPoint>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题3 · 余数型倍数特性（2023 广东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某社区计划组建多支社工团队，为此招募了一批社工。如果每支团队由 3 名社工组成，则剩余 2 名社工；如果每支团队由 4 名社工组成，同样剩余 2 名社工。则该社区可能招募了（　　）名社工。</ExampleQuestion>
                      <ExampleOptions>A.32　B.34　C.36　D.38</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>设招募 N 人。两次都「剩余 2 名」→ <b>N − 2 必须同时是 3 和 4 的倍数</b>（这就是余数型的倍数特性：把余数减掉，剩下的就是组数的倍数）。<br />3 与 4 互质 → N − 2 是 <b>12 的倍数</b>。代入选项：32 − 2 = 30 ✗；34 − 2 = 32 ✗；36 − 2 = 34 ✗；<b>38 − 2 = 36 = 12 × 3 ✓</b>
                    <span className="correct">答案：D</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Example>
                    <ExampleHeader>📝 例题4 · 余数型（多退少补 · 2018 浙江）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某次比赛报名参赛者有 213 人，但实际参赛人数不足 200。主办方安排车辆时，每 5 人坐一辆车，最后多 2 人；安排就餐时，每 8 人坐一桌，最后多 7 人；分组比赛时，每 7 人一组，最后多 6 人。问实际参赛人数是多少？</ExampleQuestion>
                      <ExampleOptions>A.111　B.167　C.175　D.183</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>先做「<b>多退少补</b>」——把不好用的余数换成好用的「差」：<br />· 每 8 人一桌多 7 人 → <b>少 1 人</b>可坐满，即 N + 1 是 8 的倍数；<br />· 每 7 人一组多 6 人 → <b>少 1 人</b>可分满，即 N + 1 是 7 的倍数。<br />8 与 7 互质 → <b>N + 1 是 56 的倍数</b>，N = 56k − 1：55、111、167……（不足 200，且要比 213 小）。<br />再用「每 5 人一车多 2 人」筛：111 ÷ 5 余 1 ✗；<b>167 ÷ 5 余 2 ✓</b>。<br /><span style={{ color: '#6b7280' }}>（另外 175 = 8 × 21 + 7 也不满足「7 人一组多 6」，183 同样不满足。）</span>
                    <span className="correct">答案：B</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>3. 比例型【考得最多】</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">若 a∶b = m∶n（m,n互质），则 a 是 m 的倍数，b 是 n 的倍数</span><br />
                      <span className="formula">若 a = m/n × b，则 a+b 是 (m+n) 的倍数</span>
                    </Callout>
                    <Callout variant="key">
                      <b>核心：问题和分子、分母的关系</b> —— 先看题目问的是「谁」，再决定谁是谁的倍数。<br />
                      <b>三种考法（讲义原列，务必都会）：</b>
                    </Callout>
                    <SubPoint><b>考法一 男∶女 = 3∶7</b> → 男是 3 的倍数、女是 7 的倍数、全班（和）是 10 的倍数、差是 4 的倍数。</SubPoint>
                    <SubPoint><b>考法二 (男 − 2)∶女 = 3∶7</b> → 先<b>把常数挪走</b>：(男 − 2) 是 3 的倍数、女是 7 的倍数，再看选项。</SubPoint>
                    <SubPoint><b>考法三 A 与非 A（甲∶其他 = 3∶7）</b> → 甲是 3 的倍数，<b>总数是 3 + 7 = 10 的倍数</b>。<br />
                      　 「其他」= 除了甲以外的全部，所以「和」是两边份数之和 —— 这是最容易漏的一种变形。</SubPoint>
                    <Callout variant="tip">题干特征：分数、比例、百分数、倍数；对象特征：不可分割整体（人、年龄等整数）</Callout>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题5 · 比例型倍数特性</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某高校本年度毕业学生3060名，比上年度增长2%。其中本科生毕业数量比上年度减少2%，研究生数量比上年度增加10%。这所高校本年度本科生毕业数量是：</ExampleQuestion>
                      <ExampleOptions>A.1900　B.1990　C.1960　D.1930</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>本科生比上年度减少2% → 今年本科 = 98%×去年 = <b>(49/50)</b>×去年<br />
                        → 今年本科毕业生人数是 <b>49的倍数</b><br />
                        选项中只有 1960÷49=40，整除。<br />
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>4. 余数问题三则运算</BlockTitle>
                    <Callout variant="key">
                      <b>口诀：余同加余，和同加和，差同减差，公倍数做周期</b>
                    </Callout>
                    <PointList>
                      <li><b>余同加余</b>：除以7余1，除以6余1，除以5余1 → 210n+1</li>
                      <li><b>和同加和</b>：除以7余1(和8)，除以6余2(和8)，除以5余3(和8) → 210n+8</li>
                      <li><b>差同减差</b>：除以7余3(差4)，除以6余2(差4)，除以5余1(差4) → 210n-4</li>
                    </PointList>
                    <Callout variant="tip">210 = 5×6×7 的最小公倍数，作为周期</Callout>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题6 · 余数问题三则运算</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>某数除以 5、6、7 都余 1，且是三位数中最小的一个。这个数是多少？</ExampleQuestion>
                <ExampleOptions>A.209　B.211　C.213　D.217</ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>三个除数都余 1 → 属于<b>「余同加余」</b>型，取三个除数的公倍数 5×6×7 = 210，再加余数 1，得 210n + 1。n 取 1 得 211，已是三位数中最小的一个。（验证：211 ÷ 5 = 42 余 1 ✓、211 ÷ 6 = 35 余 1 ✓、211 ÷ 7 = 30 余 1 ✓）
                  <br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
                  <Example>
                    <ExampleHeader>📝 例题7 · 余数三则运算（差同减差 · 2019 山东）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>一个盒子里有乒乓球 100 多个。如果每次取 5 个，最后剩下 4 个；如果每次取 4 个，最后剩 3 个；如果每次取 3 个，最后剩 2 个。那么如果每次取 12 个，最后剩多少个？</ExampleQuestion>
                      <ExampleOptions>A.0　B.1　C.9　D.11</ExampleOptions>
                      <ExampleAnswer>
                    <b>解析：</b>先看「<b>除数 − 余数</b>」：5 − 4 = 1、4 − 3 = 1、3 − 2 = 1 —— <b>差都是 1</b>，属于「差同减差」。<br />取三个除数的公倍数 5 × 4 × 3 = 60，再<b>减去</b>这个共同的差：N = 60k − 1。<br />N 是 100 多个 → 60 × 2 − 1 = <b>119</b>（60 − 1 = 59 只有两位，不符合）。<br />119 ÷ 12 = 9 余 <b>11</b>。
                    <span className="correct">答案：D</span>
                  </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>5. 倍数特性之增长率型</BlockTitle>
                    <PointList>
                      <li>充分利用资料分析的思维解决数量问题</li>
                      <li>分析关系：基期、现期</li>
                      <li>结合选项，做猜结合</li>
                    </PointList>
                  </Block>
                  <Example>
                    <ExampleHeader>📝 例题8 · 增长率型（倍数特性）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>某公司今年利润比去年增长 25%，今年的利润总额为 450 万元，则去年的利润是多少万元？</ExampleQuestion>
                      <ExampleOptions>A.340　B.360　C.375　D.400</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>今年 = 去年 × (1 + 25%) = 去年 × <b>5/4</b><br />
                        → 去年必是 <b>4 的倍数</b>，今年必是 <b>5 的倍数</b>（450 能被 5 整除 ✅）<br />
                        450 ÷ 1.25 = <b>360 万元</b><br />
                        <span className="correct">答案：B</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
                  <Block>
                    <BlockTitle>6. A = B × C 型</BlockTitle>
                    <Callout variant="tip">用资料分析的思维解决问题，看到 A=B×C 的结构，若 B、C 有比例关系，直接用倍数特性看选项</Callout>
                    <SubPoint><b>形式 A = B × C，只给单个量 → 赋值。</b>赋的值取各量的<b>公倍数</b>最好算。</SubPoint>
                    <SubPoint><b>公倍数求法：短除法</b> —— 把各数并排写，用共同的质因数逐次除，除到两两互质为止，<br />
                      　 再把「旁边的除数 × 最下面一行」全部乘起来。例：18 与 30 → 同除 2 得 9、15，同除 3 得 3、5 → 最小公倍数 = 2×3×3×5 = 90。</SubPoint>
                  </Block>
                  <Example>
              <ExampleHeader>📝 例题9 · A = B × C 型（效率比 · 2025 北京）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>A、B 两条生产线每小时共可生产 100 个零件，其中 A 的生产效率是 B 的 1.5 倍。则 8 小时 A 比 B 多生产多少个零件？</ExampleQuestion>
                <ExampleOptions>A.80　B.120　C.160　D.200</ExampleOptions>
                <ExampleAnswer>
                    <b>解析：</b>总量 = 效率 × 时间，看到「有一条线是另一条的 1.5 倍」就是 A = B × C 型 + 比例。把 1.5 化成最简比 <b>A ∶ B = 3 ∶ 2</b>（3 份 + 2 份 = 5 份）。<br />5 份 = 100 个/小时 → 1 份 = 20 → A = 60、B = 40 个/小时。<br />每小时 A 比 B 多 20 个 → 8 小时多 <b>20 × 8 = 160</b> 个。
                    <span className="correct">答案：C</span>
                  </ExampleAnswer>
              </ExampleBody>
            </Example>
          
                  <Block>
                    <BlockTitle>7. 补充考点 1：神奇的 1764（五位数字连乘之积）</BlockTitle>
                    <Callout variant="formula">
                      <span className="formula">1764 = 2 × 2 × 3 × 3 × 7 × 7</span><br />
                      五个数字连乘之积 = 1764 时：① 五位数字之和在 <b>24 ~ 28</b> 之间　② 数字和最大比最小多 <b>4</b>
                    </Callout>
                    <SubPoint>能凑成 1764 的五组数字（记「数字和」就够）：</SubPoint>
                    <SubPoint>· 3×3×4×7×7 → 和 <b>24</b>　· 2×3×6×7×7 → 和 <b>25</b></SubPoint>
                    <SubPoint>· 2×2×7×7×9 → 和 <b>27</b>　· 1×6×6×7×7 → 和 <b>27</b>　· 1×4×7×7×9 → 和 <b>28</b></SubPoint>
                    <Callout variant="tip">看到「五位数字连乘之积 = 1764」「5 箭环数之积都是 1764」要立刻想到：<b>它们的数字和只可能是 24 / 25 / 27 / 28，最大比最小多 4</b>，直接对选项。</Callout>
                  </Block>
                    <Example>
                    <ExampleHeader>📝 例题10 · 神奇的 1764（2014 河北）</ExampleHeader>
                    <ExampleBody>
                      <ExampleQuestion>小刘和小李进行射箭比赛，射不中记零环，射中按离靶心距离得 1~10 环。2 人各射 5 箭，所得环数之积都是 1764，但小刘的总环数比小李多 4 环，那么小刘得了多少环？</ExampleQuestion>
                      <ExampleOptions>A. 24　B. 26　C. 28　D. 30</ExampleOptions>
                      <ExampleAnswer>
                        <b>解析：</b>5 箭环数之积 = 1764 → 数字和只可能是 <b>24 / 25 / 27 / 28</b>。<br />两人总环数相差 4 → 只能是 <b>28 与 24</b> 这一组。<br />小刘比小李多 4 环 → 小刘是 <b>28</b>。<br />
                        <span className="correct">答案：C</span>
                      </ExampleAnswer>
                    </ExampleBody>
                  </Example>
    </>
  )
}
