import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 四 · 3 词句结构
 *
 * @returns 该节正文。
 */
export default function S21(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 四种结构（判断依据：词性搭配）</BlockTitle>
              <DataTable>
                <tr><th>结构</th><th>构成</th><th>示例</th></tr>
                <tr><td><b>主谓</b></td><td>主语 + 谓语（常见：名 + 动；不常见：名 + 形）</td><td>粮食：爱惜　秩序：维持　大雁：飞翔　阳光：明媚</td></tr>
                <tr><td><b>动宾</b></td><td>动词 + 宾语（常见：动 + 名）</td><td>耕种：土地　阅读：小说</td></tr>
                <tr><td><b>偏正</b></td><td>修饰词 + 中心语，能用「的 / 地」造句</td><td>清新：空气　平静：讲述　肥沃：土地</td></tr>
                <tr><td><b>并列</b></td><td>结构一致（词语、成语、俗语、诗句内部或之间）</td><td>守株：待兔　锦衣：玉食　鸟兽虫鱼：江河湖海</td></tr>
              </DataTable>
              <Callout variant="tip">主谓、动宾、偏正都可以<b>造个句子</b>来验证结构：能加「的 / 地」的是偏正，能加「是」的是主谓。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 动宾结构（括号式）<span className="src">2024 四川事业单位</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>粮食　对于　（　　）　相当于　（　　）　对于　维持</ExampleQuestion>
                <ExampleOptions><span>A. 大米　保持</span><span>B. 改进　健康</span><span>C. 爱惜　秩序</span><span>D. 工具　房子</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>C 代入后是「爱惜粮食」「维持秩序」，两段都是<b>动宾结构</b>，且「爱惜 / 维持」词性一致 → 最对称；<br />
                  A 代入后是「大米粮食」（种属）与「保持维持」（近义），前后不一致；<br />
                  B、D 代入后也都无法构成同一种结构。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 2 · 含两种动物的主谓宾<span className="src">2025 浙江</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>鸠占鹊巢：鹤立鸡群</ExampleQuestion>
                <ExampleOptions><span>A. 风生水起：马不停蹄</span><span>B. 狐假虎威：鱼跃龙门</span><span>C. 龙腾四海：雁过留声</span><span>D. 鹰击长空：螳臂当车</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>两个成语都由<b>两种动物</b>构成（鸠 + 鹊、鹤 + 鸡），结构都是「动物 + 动作 + 对象 / 处所」。<br />
                  B 狐假虎威（狐 + 虎）、鱼跃龙门（鱼 + 龙）同样各含两种动物 → 一致；<br />
                  A 风生水起不含动物；C 龙腾四海、D 鹰击长空只含一种动物。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 3 · 主谓结构（三个词）<span className="src">2022 全国事业单位</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>古典诗文：浩如烟海：灿若星河</ExampleQuestion>
                <ExampleOptions><span>A. 理想信念：坚定不移：共产主义</span><span>B. 革命斗争：艰苦卓绝：波澜壮阔</span><span>C. 祖国山河：三山五岳：山清水秀</span><span>D. 惊天动地：地动山摇：天崩地裂</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「浩如烟海」「灿若星河」都是用来<b>陈述「古典诗文」</b>的谓语，构成主谓结构。<br />
                  B「艰苦卓绝」「波澜壮阔」都是陈述「革命斗争」的谓语 → 一致；<br />
                  A「共产主义」不是陈述理想信念的谓语；C 三山五岳是祖国山河的一部分；D 三者结构不一致。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 4 · 比喻式偏正<span className="src">2023 全国事业单位</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>柳烟：云海</ExampleQuestion>
                <ExampleOptions><span>A. 书山：犬子</span><span>B. 天雷：怒火</span><span>C. 霜剑：玉液</span><span>D. 麦浪：花雨</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「柳烟」= 像烟一样的柳，「云海」= 像海一样的云 → 结构都是「<b>本体 + 喻体</b>」的比喻式偏正。<br />
                  D 麦浪（麦像浪）、花雨（花像雨）也是「本体 + 喻体」→ 一致；<br />
                  C「霜剑」「玉液」是「喻体 + 本体」（语序相反）；A「犬子」不是比喻；B 两者都不是同一结构。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 5 · 同型比喻偏正<span className="src">2023 国考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>花海：书山</ExampleQuestion>
                <ExampleOptions><span>A. 怒火：苦雨</span><span>B. 车流：人潮</span><span>C. 雪白：麦浪</span><span>D. 龙舟：木马</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>花海（花多如海）、书山（书多如山）都是「本体 + 喻体」的比喻式偏正，且喻体都是宏大的自然物。<br />
                  B 车流（车如流）、人潮（人如潮）结构完全一致 → 答案；<br />
                  A「苦雨」是形容词 + 名词、非比喻；C「雪白」是主谓 / 偏正搭配，与「麦浪」不同构；D 都是实指事物、无比喻。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 6 · 四字并列<span className="src">2024 河南事业单位</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>悲欢离合：琴棋书画</ExampleQuestion>
                <ExampleOptions><span>A. 万紫千红：柳暗花明</span><span>B. 喜怒哀乐：锅碗瓢盆</span><span>C. 阴晴圆缺：峰回路转</span><span>D. 酸甜苦辣：由表及里</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「悲欢离合」是四种情感 / 经历并列，「琴棋书画」是四种技艺 / 物件并列 → 两个字都是<b>四字名词并列</b>。<br />
                  B「喜怒哀乐」（四种情绪）、「锅碗瓢盆」（四种厨具）→ 结构完全一致；<br />
                  A「柳暗花明」、C「峰回路转」内部都是主谓结构；D「由表及里」是介宾结构。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 7 · 对仗式主谓<span className="src">2025 天津（61%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>当局者迷：旁观者清</ExampleQuestion>
                <ExampleOptions><span>A. 送君千里：终须一别</span><span>B. 东向而望：不见西墙</span><span>C. 道远知骥：世伪知贤</span><span>D. 冬寒抱冰：夏热握火</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「当局者迷」「旁观者清」是主谓结构，且「当局者 / 旁观者」相对、「迷 / 清」对立，<b>双重对仗</b>。<br />
                  D「冬寒抱冰」「夏热握火」：冬 / 夏、寒 / 热、抱 / 握、冰 / 火，同样双重对仗 → 一致；<br />
                  A、B、C 的对仗工整度都明显不如 D。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 8 · 动宾并列（含夸夸刷）<span className="src">2023 河北事业单位</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>披星：戴月</ExampleQuestion>
                <ExampleOptions><span>A. 呼天：抢地</span><span>B. 春花：秋月</span><span>C. 良师：益友</span><span>D. 王侯：将相</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「披星」「戴月」都是<b>动宾结构</b>（披 + 星、戴 + 月），前后并列、意思相承。<br />
                  A「呼天」「抢地」也是动宾结构（呼 + 天、抢 + 地），同为动宾并列 → 一致；<br />
                  B「春花」「秋月」、C「良师」「益友」、D「王侯」「将相」都是名词性偏正 / 并列，不是动宾。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 9 · 动宾 + 中心语型偏正<span className="src">2025 国考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>逐客令：挡箭牌</ExampleQuestion>
                <ExampleOptions><span>A. 急先锋：领航者</span><span>B. 避风港：马后炮</span><span>C. 敲门砖：绊脚石</span><span>D. 鸿门宴：攻心计</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「逐客令」「挡箭牌」都是「<b>动宾 + 中心语</b>」的偏正结构（逐客 + 令、挡箭 + 牌），且都是比喻性名词。<br />
                  C「敲门砖」（敲 + 门 + 砖）、「绊脚石」（绊 + 脚 + 石）结构与词性完全对应 → 一致；<br />
                  A「急先锋」是形容词 + 名词、「领航者」是动宾 + 者；<br />
                  B「避风港」是动宾 + 港，但「马后炮」是方位 + 名词；D「鸿门宴」是地名 + 名词。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 拓展：偏正结构单独考</BlockTitle>
              <Callout variant="formula"><span className="formula">示例</span>　清新：空气 → 高兴：开心（并列）／ 郑重：答案（不搭）／ 肥沃：土地（偏正）／ 得意：生气（并列）</Callout>
              <SubPoint>能加「的」的才是偏正：「清新的空气」「肥沃的土地」。答案是「肥沃：土地」。</SubPoint>
            </Block>
    </>
  )
}
