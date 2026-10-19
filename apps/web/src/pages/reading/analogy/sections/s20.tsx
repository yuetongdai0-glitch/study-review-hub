import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion } from '@/components/content'

/**
 * 四 · 4 释义关系
 *
 * @returns 该节正文。
 */
export default function S22(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 识别：同一语素（A : AB : AC）</BlockTitle>
              <Callout variant="key"><b>判断方法：</b>同一个字在两个词里<b>含义是否相同</b>。</Callout>
              <Callout variant="formula">
                <span className="formula">含义不同（考得多）</span>　备：德才兼备（具备）：戒备森严（戒备）　兵：短兵相接（兵器）：草木皆兵（士兵）　假：狐假虎威（假借）：不假思索（借助）<br />
                <span className="formula">含义相同</span>　狼：狼吞虎咽：狼奔豕突
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 同一字含义不同<span className="src">2025 天津（37%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>备：德才兼备：戒备森严</ExampleQuestion>
                <ExampleOptions><span>A. 狼：狼吞虎咽：狼奔豕突</span><span>B. 兵：短兵相接：草木皆兵</span><span>C. 绳：结绳而治：绳锯木断</span><span>D. 假：狐假虎威：不假思索</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「备」在「德才兼备」中是「具备」，在「戒备森严」中是「戒备」→ <b>含义不同</b>。<br />
                  B「兵」在「短兵相接」中是「兵器」，在「草木皆兵」中是「士兵」→ 含义不同，一致；<br />
                  A「狼」两处都是动物、C「绳」两处都是绳子、D「假」两处都是「借」→ 含义相同。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 2 · 本义与比喻义<span className="src">2023 联考（48%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>火：火急：火警</ExampleQuestion>
                <ExampleOptions><span>A. 虎：虎将：虎劲</span><span>B. 蛇：蛇行：蛇胆</span><span>C. 牛：牛毛：牛饮</span><span>D. 鹊：鹊桥：鹊起</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「火急」的「火」是<b>比喻义</b>（像火一样急），「火警」的「火」是<b>本义</b>（火灾）——先比喻、后本义。<br />
                  B「蛇行」的「蛇」是比喻（像蛇一样爬行），「蛇胆」的「蛇」是本义 → 顺序一致；<br />
                  A 两处都是比喻义；C「牛毛」本义在前、「牛饮」比喻在后（顺序相反）；D 同样顺序相反。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Block>
              <BlockTitle>2. 其他识别形式</BlockTitle>
              <Callout variant="formula">
                <span className="formula">① 「像……」</span>　火：火急　鹄：鹄起　虎：虎将<br />
                <span className="formula">② 词语拆分成单字，单字是否都具备词的含义</span>　覆：盖：覆盖　抚：摸：抚摸　学：习：学习
              </Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 3 · 两字同义合成词<span className="src">2025 联考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>覆：盖：覆盖</ExampleQuestion>
                <ExampleOptions><span>A. 寒：酸：寒酸</span><span>B. 厚：重：厚重</span><span>C. 喉：舌：喉舌</span><span>D. 抚：摸：抚摸</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「覆」与「盖」含义相同，二者并列合成「覆盖」→ 单字都具备词义。<br />
                  D「抚」与「摸」含义相同，合成「抚摸」→ 一致；<br />
                  A「寒酸」不是「寒 + 酸」的简单相加（整体是穷困不体面的意思）；<br />
                  B「厚重」虽然两字义近，但整体已转为形容风格；C「喉舌」是借代（指代言人）。<br />
                  <span className="correct">答案：D</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 4 · 拆字后同义（考词性）<span className="src">2020 山东（71%）</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>战：斗：战斗</ExampleQuestion>
                <ExampleOptions><span>A. 欢：迎：欢迎</span><span>B. 学：习：学习</span><span>C. 勤：劳：勤劳</span><span>D. 发：行：发行</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>「战」与「斗」同义（都是打仗），合成「战斗」，整体是动词性。<br />
                  B「学」与「习」同义，合成「学习」，也是动词性 → 一致；<br />
                  A「欢」与「迎」不同义（欢喜 / 迎接）；C「勤劳」是<b>形容词</b>，词性不符；D「发」「行」在「发行」中含义不同。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
