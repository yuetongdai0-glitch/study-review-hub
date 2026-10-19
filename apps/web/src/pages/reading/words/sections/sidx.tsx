import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable } from '@/components/content'

/**
 * 实词 60 组 + 比喻类词语 10 组（一句话锁死）
 *
 * @returns 该节正文。
 */
export default function S56(): ReactElement {
  return (
    <>
      <Callout variant="key">
              实词篇的<b>完整 60 组</b>，加上公文、评论里常见的<b>比喻类词语 10 组</b>。实词的判据只有一个：<b>后面跟的是人还是物、好事还是坏事、已完成还是将发生</b>。
            </Callout>
      
            <Block>
              <BlockTitle>实词 60 组</BlockTitle>
              <DataTable>
                <tr><th>组</th><th>词串</th><th>一句话锁死</th><th>详解</th></tr>
                <tr><td className="idx-no">1</td><td className="idx-w">积淀 / 沉淀 / 积累 / 积聚</td><td>文脉用积淀 / 心绪用沉淀 / 通用积累 / 力云用积聚</td><td className="idx-t"><a className="idx-go" href="#sw">精讲</a></td></tr>
                <tr><td className="idx-no">2</td><td className="idx-w">折射 / 反射 / 影射</td><td>照出本质 / 物理回射 / 借甲说乙</td><td className="idx-t"><a className="idx-go" href="#sw">精讲</a></td></tr>
                <tr><td className="idx-no">3</td><td className="idx-w">凝聚 / 凝结 / 凝固 / 凝集</td><td>聚共识 / 血汗凝成 / 停滞不动 / 聚拢成团</td><td className="idx-t"><a className="idx-go" href="#sw">精讲</a></td></tr>
                <tr><td className="idx-no">4</td><td className="idx-w">体现 / 呈现 / 表现</td><td>内在显现 / 整体显形 / 外露行为</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">5</td><td className="idx-w">反映 / 反应</td><td>表现客观 / 受刺激回应</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">6</td><td className="idx-w">演变 / 演化 / 演进</td><td>中性变化 / 长期进化 / 逐步进步</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">7</td><td className="idx-w">体验 / 体味 / 体会 / 体察</td><td>亲身经 / 细品滋味 / 领会 / 实地察</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">8</td><td className="idx-w">遏制 / 遏止 / 扼制</td><td>遏势头 / 遏脚步 / 扼要害</td><td className="idx-t"><a className="idx-go" href="#sw">精讲</a></td></tr>
                <tr><td className="idx-no">9</td><td className="idx-w">记录 / 记载 / 记述</td><td>实录 / 书面载 / 叙述</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">10</td><td className="idx-w">培育 / 培养 / 扶植 / 培植</td><td>育产业 / 育人才 / 扶助势力 / 栽种并扶</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">11</td><td className="idx-w">阻碍 / 阻隔</td><td>妨碍进程 / 隔断相通</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">12</td><td className="idx-w">沿袭 / 沿用</td><td>照旧例 / 继续用</td><td className="idx-t"><a className="idx-go" href="#sw">精讲</a></td></tr>
                <tr><td className="idx-no">13</td><td className="idx-w">基础 / 前提</td><td>根本 / 先决条件</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">14</td><td className="idx-w">感受 / 感触 / 感悟 / 感觉</td><td>总体体验 / 触发的感慨 / 领悟道理 / 感官知觉</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">15</td><td className="idx-w">放弃 / 摒弃 / 抛弃</td><td>不再坚持 / 主动舍弃（观念） / 丢弃（人、物）</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">16</td><td className="idx-w">延伸 / 蔓延</td><td>向外延展 / 向四周扩散（多贬）</td><td className="idx-t"><a className="idx-go" href="#sw">精讲</a></td></tr>
                <tr><td className="idx-no">17</td><td className="idx-w">拓展 / 扩大</td><td>拓宽度 / 增规模</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">18</td><td className="idx-w">扩散 / 发散</td><td>向外传开 / 由一点散出</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">19</td><td className="idx-w">矗立 / 伫立 / 屹立</td><td>高而直 / 久立不动 / 坚定不倒</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">20</td><td className="idx-w">疏忽 / 漏洞 / 疏漏</td><td>粗心 / 制度缺口 / 遗漏失误</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">21</td><td className="idx-w">沉浸 / 沉迷 / 沉溺 / 沉醉</td><td>专心其中（褒） / 过度迷恋（贬） / 不能自拔（贬） / 陶然其中</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">22</td><td className="idx-w">构建 / 建造 / 构造 / 建筑</td><td>抽象搭建 / 施工 / 内部结构 / 实体营造</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">23</td><td className="idx-w">依赖 / 依托 / 依附 / 依靠</td><td>离不开 / 以其为基础 / 攀附 / 借力</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">24</td><td className="idx-w">隐藏 / 隐蔽 / 掩盖</td><td>藏起来 / 不易发现 / 遮住真相</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">25</td><td className="idx-w">回避 / 躲避</td><td>有意绕开 / 藏起来避开</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">26</td><td className="idx-w">指责 / 谴责 / 斥责 / 苛责</td><td>指错 / 严正责备 / 大声训斥 / 过分要求</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">27</td><td className="idx-w">质疑 / 置疑 / 怀疑</td><td>提出疑问 / 多用于否定 / 心中不信</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">28</td><td className="idx-w">识别 / 鉴别 / 甄别 / 辨别</td><td>认出 / 辨真假 / 审查筛选 / 分辨</td><td className="idx-t"><a className="idx-go" href="#sw">精讲</a></td></tr>
                <tr><td className="idx-no">29</td><td className="idx-w">象征 / 缩影 / 预兆</td><td>抽象对应 / 局部代表整体 / 预示</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">30</td><td className="idx-w">应用 / 采纳 / 采用 / 采取</td><td>投入使用 / 接受意见 / 选用方法 / 施用措施</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">31</td><td className="idx-w">限制 / 制约 / 抑制 / 克制</td><td>规定范围 / 甲限乙 / 压住增长 / 约束自己</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">32</td><td className="idx-w">消除 / 铲除 / 根除 / 清除</td><td>使消失 / 连根除掉 / 彻底除去 / 清理干净</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">33</td><td className="idx-w">巧妙 / 精妙 / 微妙</td><td>方法巧 / 精微高妙 / 细微难察</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">34</td><td className="idx-w">吸收 / 接纳</td><td>吸纳养分 / 接受人或意见</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">35</td><td className="idx-w">遵从 / 遵循</td><td>服从（人、命令） / 依照（规律、原则）</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">36</td><td className="idx-w">发源地 / 发祥地</td><td>起源地（河流、事物） / 民族、文化的兴起地</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">37</td><td className="idx-w">动力 / 源泉</td><td>推动力 / 来源</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">38</td><td className="idx-w">范围 / 范畴</td><td>具体界限 / 抽象类别</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">39</td><td className="idx-w">注目 / 瞩目</td><td>普通关注 / 高度关注（多被动）</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">40</td><td className="idx-w">推脱 / 推托</td><td>推卸（责任） / 找借口拒绝</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">41</td><td className="idx-w">迹象 / 痕迹</td><td>预示的苗头 / 留下的印记</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">42</td><td className="idx-w">转变 / 改变</td><td>方向性质转 / 变得不同（更通用）</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">43</td><td className="idx-w">承担 / 承接</td><td>担起（责任） / 接过来（业务、项目）</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">44</td><td className="idx-w">贯穿 / 贯彻</td><td>一条线穿过 / 落实到底</td><td className="idx-t"><a className="idx-go" href="#sw">精讲</a></td></tr>
                <tr><td className="idx-no">45</td><td className="idx-w">独特 / 独到</td><td>与众不同 / 见解有独到之处</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">46</td><td className="idx-w">浮现 / 涌现</td><td>渐渐显出 / 大量冒出</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">47</td><td className="idx-w">衡量 / 评判</td><td>比较度量 / 判断评价</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">48</td><td className="idx-w">消失 / 消逝</td><td>不见了 / 随时间流逝而消失</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">49</td><td className="idx-w">习惯 / 风气 / 风俗</td><td>个人习性 / 社会风尚 / 地方习俗</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">50</td><td className="idx-w">违反 / 违犯</td><td>不合（规则、规律） / 触犯（法律）</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">51</td><td className="idx-w">法制 / 法治</td><td>法律制度 / 依法治理</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">52</td><td className="idx-w">考查 / 考察</td><td>检查衡量 / 实地调查</td><td className="idx-t"><a className="idx-go" href="#sw">精讲</a></td></tr>
                <tr><td className="idx-no">53</td><td className="idx-w">导致 / 诱发 / 引发</td><td>造成（多贬） / 诱导发生 / 引起</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">54</td><td className="idx-w">缺陷 / 弊病 / 瑕疵</td><td>不完整 / 制度性毛病 / 小毛病</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">55</td><td className="idx-w">领会 / 领略</td><td>理解意思 / 感受风光、意境</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">56</td><td className="idx-w">宣称 / 断言 / 妄言</td><td>公开说 / 断定 / 胡说</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">57</td><td className="idx-w">徜徉 / 徘徊 / 踌躇 / 彷徨</td><td>安闲游赏 / 来回走或犹豫 / 拿不定 / 心神不安</td><td className="idx-t"><a className="idx-go" href="#sw">精讲</a></td></tr>
                <tr><td className="idx-no">58</td><td className="idx-w">吞噬 / 吞没</td><td>比喻侵吞 / 淹没</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">59</td><td className="idx-w">局面 / 局势</td><td>发展状态 / 政治军事形势</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">60</td><td className="idx-w">捉摸 / 琢磨</td><td>猜测（多否定） / 反复思考</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
              </DataTable>
            </Block>
      
            <Block>
              <BlockTitle>比喻类词语 10 组（公文 · 评论高频）</BlockTitle>
              <DataTable>
                <tr><th>词串</th><th>一句话锁死</th></tr>
                <tr><td className="idx-w">指南针 / 晴雨表 / 传声筒</td><td>指方向 / 反映变化 / 转述传言（多贬）</td></tr>
                <tr><td className="idx-w">助推器 / 磨刀石 / 垫脚石</td><td>加速推动 / 磨炼人 / 借以高升</td></tr>
                <tr><td className="idx-w">奠基石 / 防护网 / 防火墙 / 拦路虎</td><td>打下基础 / 起保护 / 设防隔离 / 成为障碍</td></tr>
                <tr><td className="idx-w">传家宝 / 牛鼻子 / 绊脚石 / 保护伞</td><td>宝贵传统 / 关键抓手 / 阻碍 / 背后庇护</td></tr>
                <tr><td className="idx-w">马前卒 / 多面手 / 排头兵 / 领头羊</td><td>打头阵（可贬） / 一专多能 / 走在前 / 带头示范</td></tr>
                <tr><td className="idx-w">窍门儿 / 杀手锏</td><td>小诀窍 / 最厉害的一招</td></tr>
                <tr><td className="idx-w">必修课 / 硬通货 / 敲门砖</td><td>必学内容 / 普遍认可的价值 / 谋取机会的工具</td></tr>
                <tr><td className="idx-w">守望者 / 掌控者 / 巡夜人 / 代言人</td><td>守护 / 掌握 / 警戒 / 代表发声</td></tr>
                <tr><td className="idx-w">香饽饽 / 弄潮儿 / 风向标 / 聚光灯</td><td>抢手货 / 引领潮流者 / 趋势标志 / 舆论焦点</td></tr>
                <tr><td className="idx-w">储备金 / 常备军 / 机动性</td><td>备用资源 / 常备力量 / 灵活应变</td></tr>
              </DataTable>
              <Callout variant="tip">这类词在材料里多以「<b>是……的×××</b>」出现，考的是<b>喻体与对象是否对应</b>：指方向的用指南针，反映变化的用晴雨表，转发传言的用传声筒。看到「××是……的风向标 / 晴雨表 / 试金石」，先想它究竟在「指示、反映、检验」哪一件事。</Callout>
            </Block>
    </>
  )
}
