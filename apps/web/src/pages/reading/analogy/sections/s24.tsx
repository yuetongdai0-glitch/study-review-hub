import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 五、造句法（兜底办法）
 *
 * @returns 该节正文。
 */
export default function S26(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 什么时候用</BlockTitle>
              <PointList>
                <li><b>① 题干没有常考关系</b> → 造句子 → 找一样的句子。</li>
                <li><b>② 不确定有没有常考关系、但没直接看出来</b> → 造句子：有明确关系就用关系，无明确关系就找一样的句子。</li>
              </PointList>
              <Callout variant="formula">
                <span className="formula">示例</span>　轮船：海洋 → 能看出位置关系，直接用关系解题，找「汽车：公路」<br />
                <span className="formula">示例</span>　茶壶：沸腾 → 看不出常考关系，造句「茶壶里的水沸腾了」，再找结构一致的选项
              </Callout>
            </Block>
            <Block>
              <BlockTitle>2. 造句原则（两条铁律）</BlockTitle>
              <PointList>
                <li><b>① 能不加字就不加字，能少加字就少加字，加字最好都加一样的字。</b></li>
                <li><b>② 注意变化方向。</b></li>
              </PointList>
              <Callout variant="warn">
                <b>示例（体会「不加字」）：</b>题干「医生：病人」→ 造句「医生诊治病人」；选项「教师：学生」→「教师教育学生」，结构一致即可选。<br />
                若给题干加了「用手术刀」，而选项里加不出同样的字，就是<b>造歪了</b>。
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 证件类信息（造句法）<span className="src">2025 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>专业：学位：学位证</ExampleQuestion>
                <ExampleOptions><span>A. 身份号码：登记日期：身份证</span><span>B. 所有权人：房屋坐落：房产证</span><span>C. 准驾车型：品牌型号：驾驶证</span><span>D. 健康状况：国籍信息：结婚证</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>造句：「专业、学位是<b>学位证上记载的信息</b>」。<br />
                  B「所有权人、房屋坐落是<b>房产证上记载的信息</b>」→ 完全一致；<br />
                  A 身份证上记载的是有效期限、签发机关，没有「登记日期」；<br />
                  C 品牌型号是行驶证的内容，不在驾驶证上；D 结婚证不记载健康状况、国籍信息。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 2 · 食物链（造句法）<span className="src">2024 国考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>蚜虫：七星瓢虫：小麦</ExampleQuestion>
                <ExampleOptions><span>A. 蛇：鸟：谷子</span><span>B. 稗草：螳螂：水稻</span><span>C. 蚊子：青蛙：高粱</span><span>D. 老鼠：黄鼬：玉米</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>造句：「七星瓢虫吃蚜虫，蚜虫吃小麦」—— 一条完整食物链。<br />
                  D「黄鼬吃老鼠，老鼠吃玉米」→ 结构完全一致；<br />
                  A 鸟不吃蛇；B 螳螂不吃稗草；C 蚊子不叮高粱。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 3 · 动词链（造句法）<span className="src">2022 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>策略：销售：销量</ExampleQuestion>
                <ExampleOptions><span>A. 表演：技巧：效果</span><span>B. 兵器：战斗：伤亡</span><span>C. 思路：答题：得分</span><span>D. 方法：测量：误差</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>造句：「好了策略能让销售提升，销量增加」。<br />
                  C「好的思路能让答题顺利，得分提高」→ 结构一致，且「销量」「得分」都是<b>可量化的结果</b>；<br />
                  A「效果」是定性描述，与题干的量化结果不对应；B 兵器与战斗不是「提升 / 降低」的关系；<br />
                  D 好的方法能让测量准确、误差<b>减少</b>（变化方向相反）。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
