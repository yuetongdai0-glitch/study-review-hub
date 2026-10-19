import type { ReactElement } from 'react'
import { Card } from '@/components/content'

/**
 * 学习地图
 *
 * @returns 该节正文。
 */
export default function S1(): ReactElement {
  return (
    <>
      <div className="sec-desc">判断推理 = 必然性推理 + 可能性推理 + 图形推理 + 类比推理 + 定义判断。<b>图形推理</b>（<a href="../graphic-reasoning/">独立成页</a>）与<b>类比推理</b>（<a href="../analogy/">独立成页</a>）已拆分，本页只收录<b>逻辑判断（必然性 + 可能性）与定义判断</b>。</div>
      
          <Card>
            <h3><span className="dot" style={{ background: '#c0392b' }}></span>学习顺序 · 从哪开始</h3>
            <table className="tight">
              <tr><th>板块与内容（按这个顺序学）</th><th style={{ width: '104px' }}>对应目录</th></tr>
              <tr><td><b>① 先学 · 必然性推理</b>：直言 / 联言 / 选言 / 假言 → 综合推理 → 三段论 → 朴素逻辑 → 一拖N</td><td>模块一<br />1.1–1.10</td></tr>
              <tr><td><b>② 再学 · 可能性推理（加强削弱）</b>：基础 → 因果类 → 八大论证模型 → 前提 / 解释 / 结论 / 评价型</td><td>模块二<br />2.1–2.4</td></tr>
              <tr><td><b>③ 最后 · 定义判断</b>：核心要点 → 解题流程 / 多定义 / 特殊技巧</td><td>模块三<br />3.1–3.2</td></tr>
            </table>
            <div className="lead">📌 <b>本页怎么编的：</b>以「超格程意 3+2」第 1–11 次课、第 20 次课的课程顺序做骨架；用<b>夸夸刷</b>查漏补缺，把 3+2 没单独讲的母题补进来（<b>1.6 真假话、1.9 直接找矛盾</b>）；再补上<b>小红书 · 程意</b>两个选择题形态的补充专题（<b>2.4 评价型</b>）。目录里带「夸夸刷补充 / 小红书补充」标记的就是这几处，别漏。</div>
          </Card>
    </>
  )
}
