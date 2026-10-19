import type { ReactElement } from 'react'
import { Card, ExerciseCard, ExerciseTitle } from '@/components/content'

/**
 * 总纲 · 两个要求，一个核心词
 *
 * @returns 该节正文。
 */
export default function S2(): ReactElement {
  return (
    <>
      <div className="sec-desc">这是程意逻辑判断的第一节课内容，是整套必然性推理的底层操作系统——解决「生活与逻辑相混淆」的问题。</div>
      
          <div className="grid2">
            <Card>
              <h3><span className="dot" style={{ background: '#c0392b' }}></span>要求一 · 严谨性</h3>
              <p><b>说什么是什么，没说不知道。</b></p>
              <ul>
                <li>题干没说的，一律当作<b>不知道</b>，不脑补、不联想生活经验。</li>
                <li>例：「如果你上岸了，我就给你买辆法拉利」——只说明「上岸→买法拉利」，没说上岸后买什么颜色、没说没上岸会怎样。</li>
                <li>例：「程意是会跑的动物，所有会跑的动物是妖怪」→ 虽然荒诞，但只要形式正确，推出的「程意是妖怪」在逻辑上成立。</li>
              </ul>
            </Card>
            <Card>
              <h3><span className="dot" style={{ background: '#c0392b' }}></span>要求二 · 形式性</h3>
              <p><b>关注形式，只要符合推理规则，推出来的就是对的。</b></p>
              <ul>
                <li>逻辑只研究推理形式，不研究内容真伪。</li>
                <li>例：A是B，所有B是C → 则A是C。形式对就对，内容多荒诞都成立。</li>
                <li>做题时把题干「翻译成符号」，只在符号层面推理，摆脱生活直觉干扰。</li>
              </ul>
            </Card>
          </div>
      
          <Card>
            <h3><span className="dot" style={{ background: '#b7791f' }}></span>核心词 · 有些（= 至少有一个）</h3>
            <ul>
              <li>逻辑学中「有些」= <b>至少有一个</b>，数量不限定，1 个也叫有些，<b>全部也是「有些」</b>（含于其中）。</li>
              <li><b>「有些是」为真，「有些非」的真假不确定</b>；反之亦然——两者是下反对关系，可以同真，不能同假。</li>
              <li>例：题干「有些同学考上了」为真，不能推出「有些同学没考上」，也不能推出「所有同学都考上了」。</li>
            </ul>
            <div className="jingle"><div className="jt">✏️ 记忆</div>「凡、都」都是「所有」的意思;「至少有一个」是「有些」的意思。「有些」很狡猾:<b>知道「有些是」真,别的都不确定</b>。</div>
            <ExerciseCard>
              <ExerciseTitle>例 · 核心词「有些」</ExerciseTitle>
              <div className="q">已知「有的同学通过了考试」为真。据此,以下哪项<b>一定为假</b>?<br />A. 所有同学都通过了考试　B. 张同学通过了考试　C. 所有同学都没通过考试　D. 李同学没通过考试</div>
              <div className="a"><b>思路(程意式):</b>「有些是」为真 → 只知道<b>至少有一个通过</b>,其余都不确定。一定为假 = 找矛盾:「有些是」的矛盾是「所有非」→ 选 C。A、B、D 都是「不确定真假」,不能选。</div>
            </ExerciseCard>
          </Card>
    </>
  )
}
