import type { ReactElement } from 'react'
import { Card } from '@/components/content'

/**
 * 我的学习进度
 *
 * @returns 该节正文。
 */
export default function S9(): ReactElement {
  return (
    <>
      <div className="sec-desc">掌握一项勾一项，进度自动保存在本机浏览器，下次打开还在。</div>
          <Card>
            <h3><span className="dot" style={{ background: '#1e8449' }}></span>分块掌握清单</h3>
            <label className="chk"><input type="checkbox" /> 学习地图：三大板块顺序 + 三份资料怎么用</label><br />
            <label className="chk"><input type="checkbox" /> 总纲：两个要求一个核心词（严谨性 / 形式性 / 有些）</label><br />
            <label className="chk"><input type="checkbox" /> 1.1–1.4 命题：直言 / 联言 / 选言 / 假言（翻译 + 逆否 + 矛盾）</label><br />
            <label className="chk"><input type="checkbox" /> 1.5 综合推理：确定信息 → 数量限定 → 假设法 / 二难推理</label><br />
            <label className="chk"><input type="checkbox" /> 1.6 真假话（夸夸刷）：一找二绕三回 + 冠军模型 + 半对半错</label><br />
            <label className="chk"><input type="checkbox" /> 1.7 三段论：画图法 + 排除法 + 拆分结论法 + 句式转换</label><br />
            <label className="chk"><input type="checkbox" /> 1.8 朴素逻辑：确定性关联性 + 数独 / 3+2 / 4+3+2 / 最多最少</label><br />
            <label className="chk"><input type="checkbox" /> 1.9 直接找矛盾（夸夸刷）：知假求真 / 知真求假</label><br />
            <label className="chk"><input type="checkbox" /> 1.10 一拖N：有序无序 + 代入判断 + 秒解蒙猜</label><br />
            <label className="chk"><input type="checkbox" /> 2.1–2.3 加强削弱：基础 + 因果类 + 八大论证模型</label><br />
            <label className="chk"><input type="checkbox" /> 2.4 前提 / 解释 / 结论 / 评价型（小红书补充 · 逻辑谬误）</label><br />
            <label className="chk"><input type="checkbox" /> 3.1–3.2 定义判断：核心要点 + 解题流程 + 多定义 + 特殊技巧</label><br />
            <label className="chk"><input type="checkbox" /> 口诀速记卡全部背熟（每天默写）</label><br />
            <label className="chk"><input type="checkbox" /> 考场流程 &amp; 时间预算已演练</label>
          </Card>
    </>
  )
}
