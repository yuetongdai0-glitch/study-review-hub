import type { ReactElement } from 'react'

/**
 * 口诀速记卡
 *
 * @returns 该节正文。
 */
export default function S6(): ReactElement {
  return (
    <>
      <div className="sec-desc">全部口诀汇总，冲刺期每天过一遍。考前 10 分钟专背这一块。</div>
          <div className="mnemo-grid">
            <div className="mnemo"><div className="mt">总纲</div><div className="mc"><b>两个要求，一个核心词：</b>严谨性（说什么是什么，没说不知道）+ 形式性（符合规则就对）+ 核心词「有些」（=至少有一个，知道有些是真的，别的都不确定）。</div></div>
            <div className="mnemo"><div className="mt">翻译口诀</div><div className="mc">如果就，前推后；只有才，后推前；除非否则不，后推前；除非否则，否前推后；充前必后别搞混。</div></div>
            <div className="mnemo"><div className="mt">推理口诀</div><div className="mc"><b>逆否等价是王道，否后必否前</b>；肯前必肯后；否前、肯后推不出。递推：A→B，B→C ⇒ A→C。</div></div>
            <div className="mnemo"><div className="mt">真假判断</div><div className="mc">知真求假/知假求真，<b>直接找矛盾</b>：且↔或、或↔且（各加非）；A→B 的矛盾是 <b>A 且非B</b>；要么A要么B ↔ 要么A且B，要么非A且非B。</div></div>
            <div className="mnemo"><div className="mt">直言矛盾</div><div className="mc">所有↔有些，是↔非，某个不变：<b>所有是 ↔ 有些非；所有非 ↔ 有些是；某个是 ↔ 某个非</b>。上反对（所有是/所有非）不能同真；下反对（有些是/有些非）不能同假。</div></div>
            <div className="mnemo"><div className="mt">三段论</div><div className="mc">找中项（前提出现两次的桥）；<b>「所有」和「否定」周延，「有的」和「肯定」不周延</b>；两个否定前提无结论；前提有否定，结论必否定。</div></div>
            <div className="mnemo"><div className="mt">朴素逻辑</div><div className="mc">突破口：<b>确定性 + 关联性</b>。数独：排除 + 交集最多处入手；3+2：相同归大去排除；最多=加和、最少=取大（去包含）。</div></div>
            <div className="mnemo"><div className="mt">一拖N</div><div className="mc">有序画箭头（紧挨/不紧挨/隔1），无序看分组。可能真→代入可行可选；不可能真→代入冲突可选；一定真→正推。问最多验证最大数、问最少验证最小数。</div></div>
            <div className="mnemo"><div className="mt">加强削弱</div><div className="mc">读问题辨题型 → 理结构（结论☆论据）→ 预设答案。力度：<b>本质&gt;现象、全面&gt;片面、确定&gt;可能、量大&gt;量小</b>。因果削弱：因果倒置、另有共因、有因无果/无因有果、否定此因、另有他因。</div></div>
            <div className="mnemo"><div className="mt">论证模型</div><div className="mc">求异（削：不同点；加：相同点）→ 双观点（削反对者=A是C的原因）→ 实践论证（方案可不可实现）→ 类比（根本同/异）→ 枚举（代表性）→ 缺桥（搭桥/拆桥）→ 数据（找分母）→ 有比较（选有比较的）。</div></div>
            <div className="mnemo"><div className="mt">定义判断</div><div className="mc">主体（发起者）、客体（承受者）、方式（手段）、目的（为了）、条件（限制）、结果（导致）、性质（句尾）。<b>括号必读</b>；先排主体不符；多定义先锁定问的定义；优中选优。</div></div>
            
          </div>
    </>
  )
}
