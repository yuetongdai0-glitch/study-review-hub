import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 三 · 2 组成关系
 *
 * @returns 该节正文。
 */
export default function S12(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义与判断标准</BlockTitle>
              <Callout variant="key"><b>判断标准：</b>能造句「<b>A 是 B 的一部分</b>」。</Callout>
              <Callout variant="formula"><span className="formula">示例</span>　桌子：桌面　衣服：衣领　钢琴：琴键</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 整体与部分<span className="src">2023 重庆选调</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>衣服：衣领</ExampleQuestion>
                <ExampleOptions><span>A. 窗户：窗帘</span><span>B. 火箭：飞船</span><span>C. 花瓶：瓷器</span><span>D. 钢琴：琴键</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>衣领是衣服的一部分 → 组成关系。<br />
                  D 琴键是钢琴的一部分 → 一致；<br />
                  A 窗帘与窗户是配套使用（位置关系）；B 火箭与飞船是并列的两种飞行器；C 瓷器是花瓶的材质（加工 / 材料）。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 2 · 三个部件都属于同一整体<span className="src">2023 全国事业单位联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>弹簧秤：刻度盘：挂钩</ExampleQuestion>
                <ExampleOptions><span>A. 乐器：口哨：歌曲</span><span>B. 灭火器：干粉：泡沫</span><span>C. 纯电车：油箱：排气管</span><span>D. 吹风机：电动机：风叶</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>刻度盘和挂钩都是弹簧秤的组成部分。<br />
                  D 电动机和风叶都是吹风机的组成部分 → 一致；<br />
                  A「歌曲」不是乐器的部件；B 干粉、泡沫是灭火剂而非灭火器的固定部件；<br />
                  C 纯电车没有油箱和排气管（常识陷阱）。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>3. 二级辨析：核心部分 / 非核心部分</BlockTitle>
              <SubPoint>
                少了它就不成立 → <b>核心部分</b>（桌面之于桌子、方向盘之于汽车）；<br />
                少了它还能用 → <b>非核心部分</b>（衣领之于衣服、倒车雷达之于汽车）。
              </SubPoint>
            </Block>
            <Block>
              <BlockTitle>4. 易错点：种属关系 与 组成关系 必须分清</BlockTitle>
              <Callout variant="formula">
                <span className="formula">种属</span>　A 是 B（的一种 / 一个）<br />
                <span className="formula">组成</span>　A 是 B 的一部分
              </Callout>
              <Callout variant="warn"><b>做题顺序：先判断是不是种属关系，再判断是不是组成关系。</b>三个词时尤其容易混。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 3 · 种属与组成混搭<span className="src">2021 联考（47%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>省份：河北：石家庄</ExampleQuestion>
                <ExampleOptions><span>A. 水果：桃子：桃核</span><span>B. 亚洲：中国：北京</span><span>C. 昆虫：蜜蜂：蜂蜜</span><span>D. 企业：民企：华为</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>河北是省份（<b>种属</b>），石家庄是河北的一部分 / 下辖市（<b>组成</b>）——第一层种属、第二层组成。<br />
                  A 桃子是水果（种属），桃核是桃子的一部分（组成）→ 一致；<br />
                  B 中国是亚洲的一部分（组成），不是种属；C 蜂蜜不是蜜蜂的一部分；D 华为不是民企的一部分。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 4 · 组成 + 种属的反向结构<span className="src">2022 广东</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>文字：诗词：绝句</ExampleQuestion>
                <ExampleOptions><span>A. 笔画：隶书：汉字</span><span>B. 音符：乐谱：五线谱</span><span>C. 税收：财政：货币</span><span>D. 树木：森林：生态</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>文字是诗词的组成要素（<b>组成</b>），绝句是诗词的一种（<b>种属</b>）。<br />
                  A 笔画是隶书的组成部分（组成），隶书是汉字的一种（种属）→ 一致；<br />
                  B 音符组成乐谱，但五线谱不是乐谱的一种而是承载形式；C、D 均不成立。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 5 · 种属 + 组成的另一种组合<span className="src">2024 江苏</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>期刊：月刊：目录页</ExampleQuestion>
                <ExampleOptions><span>A. 房屋：公寓：天花板</span><span>B. 能源：电池：电子书</span><span>C. 银行：企业：理财室</span><span>D. 欧盟：法国：凯旋门</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>月刊是期刊的一种（<b>种属</b>），目录页是期刊的一部分（<b>组成</b>）。<br />
                  A 公寓是房屋的一种，天花板是房屋的一部分 → 结构与题干完全一致；<br />
                  B 电池不是能源的一种（是储能装置）；C 银行不是企业的一种（银行本身就是企业，且理财室不是企业的部分）；<br />
                  D 法国是欧盟的成员国（组成），凯旋门是法国的组成部分——层次与题干不同。<br />
                  <span className="correct">答案：A</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
