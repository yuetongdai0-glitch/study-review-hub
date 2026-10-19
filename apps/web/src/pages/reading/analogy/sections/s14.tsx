import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, SubPoint } from '@/components/content'

/**
 * 三 · 6 职业关系
 *
 * @returns 该节正文。
 */
export default function S16(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义与判断标准</BlockTitle>
              <Callout variant="key"><b>判断标准：</b>题干中出现<b>职业</b>（医生、警察、厨师、农民…）。</Callout>
              <div className="table-wrap">
              <DataTable>
                <tr><th>维度</th><th>示例</th></tr>
                <tr><td><b>① 职业内容</b></td><td>医生：手术　厨师：炒菜</td></tr>
                <tr><td><b>② 职业对象</b></td><td>医生：病人　厨师：菜肴</td></tr>
                <tr><td><b>③ 职业场所</b></td><td>医生：医院　厨师：厨房</td></tr>
                <tr><td><b>④ 职业工具</b></td><td>医生：手术刀　厨师：炒锅</td></tr>
                <tr><td><b>⑤ 职业服装</b></td><td>医生：手术服　厨师：厨师服</td></tr>
              </DataTable>
              </div>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 职业内容（括号式）<span className="src">2023 国考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>刑事警察　对于　（　　）　相当于　（　　）　对于　对外交涉</ExampleQuestion>
                <ExampleOptions><span>A. 公安机关　维护主权</span><span>B. 刑事案件　驻外武官</span><span>C. 打击犯罪　外交人员</span><span>D. 交通警察　外交领事</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>把选项代入，让「职业 → 职业内容」两段结构对称。<br />
                  C 刑事警察的职业内容就是「打击犯罪」，外交人员的职业内容就是「对外交涉」→ 前后完全对称；<br />
                  A 公安机关是刑事警察的所属单位，「维护主权」是行为而非职业；<br />
                  B、D 代入后两段关系不对称。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 职业关系优先用造句法</BlockTitle>
              <SubPoint>职业类题目<b>造句很好用，可以优先造句</b>：</SubPoint>
              <Callout variant="formula">
                <span className="formula">水稻：农田：农民</span>　→ 农民在农田种水稻<br />
                <span className="formula">货物：网络：电商</span>　→ 电商在网络卖货物<br />
                <span className="formula">捕鱼：海面：渔民</span>　→ 渔民在海面捕鱼（注意「捕鱼」本身就是个动作）
              </Callout>
              <Callout variant="tip">造的句子要能<b>同时套住题干和选项</b>，结构、顺序都对上才选。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 2 · 同类场所 + 服务对象<span className="src">2022 事业单位联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>诊所：医院：病人</ExampleQuestion>
                <ExampleOptions><span>A. 家庭：学校：孩子</span><span>B. 公路：铁路：司机</span><span>C. 杂货铺：商场：顾客</span><span>D. 幼儿园：游乐园：儿童</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>诊所与医院都是<b>看病的地方</b>（规模不同、属于同类场所），共同的服务对象是病人。<br />
                  C 杂货铺与商场都是<b>购物的地方</b>，共同的服务对象是顾客 → 一致；<br />
                  A 家庭与学校不是同类场所（且孩子是成员而非「服务对象」）；<br />
                  B 司机是道路的<b>使用者</b>而不是被服务的对象；D 幼儿园与游乐园不是同类场所。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
