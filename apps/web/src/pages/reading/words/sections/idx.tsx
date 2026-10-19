import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable } from '@/components/content'

/**
 * 成语辨析 200 组总索引（一句话锁死）
 *
 * @returns 该节正文。
 */
export default function S55(): ReactElement {
  return (
    <>
      <Callout variant="key">
              这是雨菲《高频 800 词》辨析篇的<b>完整 200 组</b>，按原书顺序排列，一组一行、只留一句「锁死」。<br />        <b>用法：</b>用一张纸遮住右边两列，只看词串，自己说出区别；说不出的组，看是「精讲」还是「速览」——「精讲」点进去看侧重表与例句，<b>速览组</b>靠这一句 + 词群里的例句记。<br />        <b>这一张表的作用是「不遗漏」：200 组全在这儿，考前扫一遍，心里有底。</b>
            </Callout>
      
            <Block>
              <BlockTitle>200 组一览（前 3 列自测，第 4 列跳转精讲）</BlockTitle>
              <DataTable>
                <tr><th>组</th><th>词串</th><th>一句话锁死</th><th>详解</th></tr>
                <tr><td className="idx-no">1</td><td className="idx-w">潜移默化 / 耳濡目染 / 耳闻目睹</td><td>变了 / 染上了 / 知道了</td><td className="idx-t"><a className="idx-go" href="#b1">精讲</a></td></tr>
                <tr><td className="idx-no">2</td><td className="idx-w">层出不穷 / 此消彼长 / 此起彼伏</td><td>不断出新 / 一涨一落 / 轮着来</td><td className="idx-t"><a className="idx-go" href="#b2">精讲</a></td></tr>
                <tr><td className="idx-no">3</td><td className="idx-w">南辕北辙 / 背道而驰 / 分道扬镳</td><td>做法反向 / 方向相反 / 各走各路</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">4</td><td className="idx-w">未雨绸缪 / 居安思危 / 有备无患</td><td>先修门窗 / 太平防危 / 备好无忧</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">5</td><td className="idx-w">一蹴而就 / 一劳永逸 / 立竿见影 / 轻而易举</td><td>一步成 / 永久省 / 立刻见效 / 不费力</td><td className="idx-t"><a className="idx-go" href="#b2">精讲</a></td></tr>
                <tr><td className="idx-no">6</td><td className="idx-w">不言而喻 / 显而易见 / 有目共睹</td><td>不用说 / 摆着明 / 大家都见</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">7</td><td className="idx-w">不可或缺 / 举足轻重 / 至关重要 / 举重若轻</td><td>不能少 / 分量重 / 极重要 / 举重若轻</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">8</td><td className="idx-w">大相径庭 / 相去甚远 / 截然相反</td><td>差得远 / 有刻度差 / 正相反</td><td className="idx-t"><a className="idx-go" href="#b3">精讲</a></td></tr>
                <tr><td className="idx-no">9</td><td className="idx-w">相辅相成 / 相得益彰 / 珠联璧合</td><td>缺一不可 / 1+1&gt;2 / 美好结合</td><td className="idx-t"><a className="idx-go" href="#b5">精讲</a></td></tr>
                <tr><td className="idx-no">10</td><td className="idx-w">司空见惯 / 屡见不鲜</td><td>见得多 / 频率高</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">11</td><td className="idx-w">推陈出新 / 革故鼎新</td><td>文化扬弃 / 制度变革</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">12</td><td className="idx-w">独树一帜 / 标新立异 / 别出心裁 / 不拘一格</td><td>风格独立 / 提新主张 / 构思巧 / 不限一格</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">13</td><td className="idx-w">与时俱进 / 日新月异 / 一日千里</td><td>跟上时代 / 天天变新 / 进展极快</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">14</td><td className="idx-w">迫在眉睫 / 当务之急 / 时不我待 / 迫不及待</td><td>形容词紧迫 / 名词宾语 / 时间不等人 / 心情急</td><td className="idx-t"><a className="idx-go" href="#b4">精讲</a></td></tr>
                <tr><td className="idx-no">15</td><td className="idx-w">急功近利 / 好高骛远 / 好大喜功 / 贪大求全</td><td>图眼前 / 目标过高 / 爱立大功 / 贪大而全</td><td className="idx-t"><a className="idx-go" href="#b4">精讲</a></td></tr>
                <tr><td className="idx-no">16</td><td className="idx-w">脱颖而出 / 与众不同 / 出类拔萃 / 卓尔不群</td><td>竞争中冒出 / 不一样 / 高出同类 / 超然独立</td><td className="idx-t"><a className="idx-go" href="#b5">精讲</a></td></tr>
                <tr><td className="idx-no">17</td><td className="idx-w">人云亦云 / 随波逐流 / 亦步亦趋 / 拾人牙慧</td><td>跟着说 / 跟着走 / 跟着做 / 抄人话</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">18</td><td className="idx-w">历久弥新 / 薪火相传</td><td>越久越新 / 代代传火</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">19</td><td className="idx-w">理所当然 / 天经地义</td><td>按道理该 / 绝对不容疑</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">20</td><td className="idx-w">一成不变 / 亘古不变 / 原封不动</td><td>贬·不变 / 规律不变 / 原样没动</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">21</td><td className="idx-w">浅尝辄止 / 走马观花 / 浮光掠影 / 蜻蜓点水</td><td>主动停 / 看得快 / 印象浅 / 只碰一下</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">22</td><td className="idx-w">有的放矢 / 一针见血 / 对症下药 / 量体裁衣</td><td>有目标 / 说到要害 / 针对开方 / 按条件定制</td><td className="idx-t"><a className="idx-go" href="#b4">精讲</a></td></tr>
                <tr><td className="idx-no">23</td><td className="idx-w">因地制宜 / 因势利导 / 因时制宜</td><td>按地点 / 顺趋势 / 按时期</td><td className="idx-t"><a className="idx-go" href="#b4">精讲</a></td></tr>
                <tr><td className="idx-no">24</td><td className="idx-w">方兴未艾 / 悄然兴起</td><td>势头正盛 / 无声无息</td><td className="idx-t"><a className="idx-go" href="#b2">精讲</a></td></tr>
                <tr><td className="idx-no">25</td><td className="idx-w">应运而生 / 横空出世 / 粉墨登场</td><td>顺需要 / 突然震撼 / 坏人上台</td><td className="idx-t"><a className="idx-go" href="#b2">精讲</a></td></tr>
                <tr><td className="idx-no">26</td><td className="idx-w">融会贯通 / 举一反三 / 触类旁通</td><td>各块打通 / 由一推多 / 横向类推</td><td className="idx-t"><a className="idx-go" href="#b6">精讲</a></td></tr>
                <tr><td className="idx-no">27</td><td className="idx-w">独一无二 / 无与伦比 / 不可替代</td><td>只有这一个 / 没有能比 / 换不掉</td><td className="idx-t"><a className="idx-go" href="#b5">精讲</a></td></tr>
                <tr><td className="idx-no">28</td><td className="idx-w">一脉相承 / 一以贯之 / 一脉相通</td><td>同一来源 / 贯穿始终 / 血脉相连</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">29</td><td className="idx-w">根深蒂固 / 积重难返 / 坚不可摧</td><td>观念难改 / 坏习难返 / 坚固不破</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">30</td><td className="idx-w">水到渠成 / 顺理成章 / 听之任之 / 顺其自然</td><td>条件成熟 / 合乎逻辑 / 放任不管 / 不强求</td><td className="idx-t"><a className="idx-go" href="#b6">精讲</a></td></tr>
                <tr><td className="idx-no">31</td><td className="idx-w">缘木求鱼 / 竭泽而渔 / 寅吃卯粮 / 杀鸡取卵</td><td>方向错 / 耗尽资源 / 透支未来 / 毁掉根基</td><td className="idx-t"><a className="idx-go" href="#b6">精讲</a></td></tr>
                <tr><td className="idx-no">32</td><td className="idx-w">循规蹈矩 / 按部就班</td><td>守规矩不敢越 / 按步骤有序</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">33</td><td className="idx-w">息息相关 / 休戚与共 / 休戚相关 / 唇齿相依</td><td>关联紧 / 利害一致 / 祸福相连 / 互相依存</td><td className="idx-t"><a className="idx-go" href="#b7">精讲</a></td></tr>
                <tr><td className="idx-no">34</td><td className="idx-w">琳琅满目 / 汗牛充栋</td><td>商品多 / 只指书</td><td className="idx-t"><a className="idx-go" href="#b7">精讲</a></td></tr>
                <tr><td className="idx-no">35</td><td className="idx-w">纸上谈兵 / 闭门造车</td><td>空谈不能做 / 不看客观</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">36</td><td className="idx-w">顾此失彼 / 捉襟见肘 / 左支右绌</td><td>丢一头 / 资源匮乏 / 处处漏洞</td><td className="idx-t"><a className="idx-go" href="#b7">精讲</a></td></tr>
                <tr><td className="idx-no">37</td><td className="idx-w">墨守成规 / 抱残守缺 / 固步自封 / 陈陈相因</td><td>守规矩 / 守残缺 / 自我封闭 / 沿袭无改进</td><td className="idx-t"><a className="idx-go" href="#b6">精讲</a></td></tr>
                <tr><td className="idx-no">38</td><td className="idx-w">唾手可得 / 信手拈来 / 妙手偶得</td><td>极易得 / 用得熟 / 灵感偶得</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">39</td><td className="idx-w">眼花缭乱 / 扑朔迷离 / 目不暇接</td><td>看乱了 / 真相难明 / 来不及看</td><td className="idx-t"><a className="idx-go" href="#b1">精讲</a></td></tr>
                <tr><td className="idx-no">40</td><td className="idx-w">如出一辙 / 毫无二致</td><td>几乎一样（贬） / 完全相同</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">41</td><td className="idx-w">栩栩如生 / 惟妙惟肖 / 跃然纸上</td><td>像活的 / 模仿逼真 / 纸上活起来</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">42</td><td className="idx-w">适得其反 / 事与愿违</td><td>结果反了 / 不如所愿</td><td className="idx-t"><a className="idx-go" href="#b16">精讲</a></td></tr>
                <tr><td className="idx-no">43</td><td className="idx-w">源源不断 / 络绎不绝</td><td>供给不断 / 人流车马不断</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">44</td><td className="idx-w">津津乐道 / 脍炙人口 / 喜闻乐见</td><td>乐于谈论 / 人人称道 / 群众欢迎</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">45</td><td className="idx-w">生生不息 / 周而复始 / 绵延不绝</td><td>不断生长 / 循环往复 / 延续不断</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">46</td><td className="idx-w">相提并论 / 等量齐观 / 同日而语 / 混为一谈</td><td>一起谈 / 同等看 / 前后比 / 混作一谈</td><td className="idx-t"><a className="idx-go" href="#b5">精讲</a></td></tr>
                <tr><td className="idx-no">47</td><td className="idx-w">实事求是 / 脚踏实地 / 稳扎稳打</td><td>按事实 / 踏实做 / 不冒进</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">48</td><td className="idx-w">习以为常 / 老生常谈 / 陈词滥调</td><td>习惯了 / 听惯的平常话 / 空泛旧话</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">49</td><td className="idx-w">凤毛麟角 / 吉光片羽</td><td>少而贵 / 残而贵</td><td className="idx-t"><a className="idx-go" href="#b10">精讲</a></td></tr>
                <tr><td className="idx-no">50</td><td className="idx-w">一目了然 / 一览无余 / 一览而尽</td><td>一看就清 / 尽收眼底 / 全都看完</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">51</td><td className="idx-w">力不从心 / 无能为力</td><td>能力不够 / 使不上劲</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">52</td><td className="idx-w">叹为观止 / 林林总总 / 洋洋洒洒</td><td>赞叹到极 / 繁多 / 篇幅长</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">53</td><td className="idx-w">视而不见 / 听而不闻</td><td>看见了装没见 / 听见了装没听</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">54</td><td className="idx-w">天马行空 / 坐而论道</td><td>想象奔放 / 只说不做</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">55</td><td className="idx-w">齐头并进 / 并行不悖 / 并驾齐驱 / 双管齐下</td><td>同进度 / 不冲突 / 同水平 / 两手段</td><td className="idx-t"><a className="idx-go" href="#s10">精讲</a></td></tr>
                <tr><td className="idx-no">56</td><td className="idx-w">振聋发聩 / 掷地有声 / 惊世骇俗</td><td>唤醒人 / 坚定有力 / 惊世反常</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">57</td><td className="idx-w">如火如荼 / 风起云涌 / 铺天盖地</td><td>气氛热烈 / 迅猛兴起 / 来势猛</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">58</td><td className="idx-w">难以为继 / 后继无人</td><td>撑不住 / 缺接班人</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">59</td><td className="idx-w">比比皆是 / 不可胜数 / 不一而足</td><td>到处是 / 数不完 / 列举收尾</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">60</td><td className="idx-w">舍本逐末 / 本末倒置 / 喧宾夺主 / 哗众取宠</td><td>弃根本 / 摆颠倒 / 抢主角 / 博眼球</td><td className="idx-t"><a className="idx-go" href="#b5">精讲</a></td></tr>
                <tr><td className="idx-no">61</td><td className="idx-w">不谋而合 / 不约而同 / 一拍即合</td><td>想法同 / 行动同 / 一谈就合</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">62</td><td className="idx-w">变幻莫测 / 瞬息万变</td><td>无法预测 / 变化极快</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">63</td><td className="idx-w">削足适履 / 生搬硬套 / 委曲求全 / 求全责备</td><td>硬迁就 / 照搬 / 勉强迁就 / 苛求完美</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">64</td><td className="idx-w">置若罔闻 / 充耳不闻 / 不闻不问</td><td>听见装没听 / 拒绝听 / 完全不管</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">65</td><td className="idx-w">因噎废食 / 投鼠忌器</td><td>因小挫否定全局 / 想动手有顾忌</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">66</td><td className="idx-w">置身事外 / 袖手旁观 / 作壁上观 / 置之度外</td><td>不参与 / 不帮忙 / 在一边看 / 不放在心上</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">67</td><td className="idx-w">独善其身 / 明哲保身 / 洁身自好</td><td>只顾自己 / 怕事回避 / 保持清白</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">68</td><td className="idx-w">良莠不齐 / 鱼龙混杂 / 滥竽充数</td><td>好坏都有 / 好坏混 / 没本事充数</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">69</td><td className="idx-w">兢兢业业 / 一丝不苟 / 孜孜不倦</td><td>认真负责 / 一点不马虎 / 勤奋不倦</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">70</td><td className="idx-w">如数家珍 / 了如指掌 / 烂熟于心 / 敝帚自珍</td><td>熟悉能细说 / 掌握透 / 记得熟 / 自家东西也珍惜</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">71</td><td className="idx-w">泾渭分明 / 针锋相对 / 水火不容 / 非此即彼</td><td>界限清 / 观点对立 / 不能共存 / 二选一</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">72</td><td className="idx-w">势在必行 / 势如破竹 / 势不可挡 / 势如累卵</td><td>必须做 / 节节胜利 / 挡不住 / 危险</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">73</td><td className="idx-w">束之高阁 / 无人问津 / 弃如敝履</td><td>搁着不用 / 没人理 / 当破烂扔</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">74</td><td className="idx-w">昙花一现 / 稍纵即逝 / 过眼云烟</td><td>短而美 / 机会易失 / 转眼消散</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">75</td><td className="idx-w">瞻前顾后 / 举棋不定 / 优柔寡断</td><td>顾虑多 / 拿不定 / 当断不断</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">76</td><td className="idx-w">不胜枚举 / 挂一漏万</td><td>多到列不完 / 举一个漏很多</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">77</td><td className="idx-w">千篇一律 / 大同小异 / 一模一样</td><td>公式化（贬） / 大体相同 / 完全相同</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">78</td><td className="idx-w">束手无策 / 无所适从 / 不知所措 / 手足无措</td><td>没对策 / 不知听谁 / 慌张 / 手忙脚乱</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">79</td><td className="idx-w">相映成趣 / 如影随形 / 交相辉映</td><td>景物成趣 / 紧相随 / 光色互映</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">80</td><td className="idx-w">纷至沓来 / 接踵而至 / 俯拾皆是</td><td>纷纷来 / 一个接一个 / 多而易得</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">81</td><td className="idx-w">取长补短 / 扬长避短 / 互通有无</td><td>补短板 / 避短处 / 交换有无</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">82</td><td className="idx-w">大行其道 / 异军突起</td><td>广泛流行（贬） / 新力量崛起</td><td className="idx-t"><a className="idx-go" href="#s17">精讲</a></td></tr>
                <tr><td className="idx-no">83</td><td className="idx-w">筚路蓝缕 / 栉风沐雨</td><td>创业艰难 / 奔波劳碌</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">84</td><td className="idx-w">莫衷一是 / 众说纷纭 / 见仁见智 / 各持己见</td><td>无结论 / 说法多 / 各有理 / 各坚持</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">85</td><td className="idx-w">望尘莫及 / 鞭长莫及 / 望其项背</td><td>追不上 / 够不着 / 赶得上（只否定）</td><td className="idx-t"><a className="idx-go" href="#b5">精讲</a></td></tr>
                <tr><td className="idx-no">86</td><td className="idx-w">避重就轻 / 避实就虚</td><td>避开要害 / 避开实质</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">87</td><td className="idx-w">如履薄冰 / 谨言慎行 / 小心翼翼</td><td>处境谨慎 / 说话小心 / 举动小心</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">88</td><td className="idx-w">一挥而就 / 一气呵成</td><td>一动笔就成 / 连贯不断</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">89</td><td className="idx-w">水涨船高 / 与日俱增 / 居高不下</td><td>基础提高随之高 / 一天天增长 / 一直很高</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">90</td><td className="idx-w">空中楼阁 / 水中捞月 / 镜花水月</td><td>无基础 / 必落空 / 虚幻美</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">91</td><td className="idx-w">趋之若鹜 / 万人空巷</td><td>争相追逐（贬） / 盛况空前</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">92</td><td className="idx-w">包罗万象 / 应有尽有</td><td>内容丰富 / 该有的都有</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">93</td><td className="idx-w">美轮美奂 / 精妙绝伦</td><td>建筑华美 / 精巧到极</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">94</td><td className="idx-w">浩如烟海 / 蔚为大观</td><td>文献浩繁 / 丰富多彩</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">95</td><td className="idx-w">如日中天 / 风生水起</td><td>到顶峰 / 搞得热火</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">96</td><td className="idx-w">进退维谷 / 骑虎难下 / 进退失据</td><td>两难 / 停不下 / 没依据</td><td className="idx-t"><a className="idx-go" href="#s3">精讲</a></td></tr>
                <tr><td className="idx-no">97</td><td className="idx-w">引人入胜 / 妙趣横生 / 有声有色</td><td>内容抓人 / 趣味浓 / 生动精彩</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">98</td><td className="idx-w">泥沙俱下 / 江河日下 / 日薄西山</td><td>好坏同现 / 一天天坏 / 接近衰亡</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">99</td><td className="idx-w">脱胎换骨 / 焕然一新 / 改头换面</td><td>本质变好 / 面貌一新 / 只换外表（贬）</td><td className="idx-t"><a className="idx-go" href="#s13">精讲</a></td></tr>
                <tr><td className="idx-no">100</td><td className="idx-w">断章取义 / 以偏概全</td><td>截句曲解 / 局部代整体</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">101</td><td className="idx-w">淋漓尽致 / 酣畅淋漓</td><td>表达充分 / 畅快尽兴</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">102</td><td className="idx-w">锦上添花 / 雪中送炭</td><td>好上加好 / 急时相助</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">103</td><td className="idx-w">微不足道 / 无足轻重 / 螳臂当车 / 杯水车薪</td><td>小到不值 / 不重要 / 不自量力 / 力量太小</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">104</td><td className="idx-w">鳞次栉比 / 星罗棋布</td><td>建筑密排 / 分布广散</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">105</td><td className="idx-w">见微知著 / 明察秋毫 / 洞若观火</td><td>见苗头知趋势 / 观察细 / 看得透</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">106</td><td className="idx-w">锲而不舍 / 矢志不渝 / 坚韧不拔</td><td>不停刻 / 志向不改 / 意志坚</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">107</td><td className="idx-w">曲高和寡 / 阳春白雪 / 孤芳自赏</td><td>懂的人少 / 作品高深 / 自我欣赏</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">108</td><td className="idx-w">集思广益 / 博采众长 / 群策群力</td><td>集众人智 / 吸各家之长 / 大家出力</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">109</td><td className="idx-w">不以为然 / 不以为意</td><td>不认为对 / 不放心上</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">110</td><td className="idx-w">殚精竭虑 / 呕心沥血 / 废寝忘食 / 苦心孤诣</td><td>思虑苦 / 创作苦 / 顾不上吃睡 / 独到境界</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">111</td><td className="idx-w">独辟蹊径 / 别具匠心</td><td>另开一路 / 构思独巧</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">112</td><td className="idx-w">特立独行 / 别开生面</td><td>与众不同（可贬） / 开创新局面</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">113</td><td className="idx-w">各行其是 / 各自为政 / 各司其职 / 各得其所</td><td>各按自己 / 不配合 / 各做分内 / 各有安顿</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">114</td><td className="idx-w">屈指可数 / 首屈一指</td><td>少得能数 / 位居第一</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">115</td><td className="idx-w">风靡一时 / 蔚然成风</td><td>一时流行 / 形成好风气</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">116</td><td className="idx-w">异曲同工 / 殊途同归</td><td>做法不同效果好 / 方法不同结果同</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">117</td><td className="idx-w">望洋兴叹 / 望而却步 / 望而生畏 / 畏葸不前</td><td>感叹渺小 / 被吓退 / 看见就怕 / 胆怯不前</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">118</td><td className="idx-w">润物无声 / 春风化雨</td><td>无声滋养 / 教化滋润</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">119</td><td className="idx-w">刻舟求剑 / 买椟还珠</td><td>不知变化 / 取舍失当</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">120</td><td className="idx-w">千头万绪 / 纷繁芜杂</td><td>头绪极多 / 杂乱无章</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">121</td><td className="idx-w">兼收并蓄 / 海纳百川</td><td>都容纳 / 胸怀宽广</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">122</td><td className="idx-w">举步维艰 / 寸步难行</td><td>难走还能挪 / 一步走不了</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">123</td><td className="idx-w">相形见绌 / 自惭形秽 / 自愧弗如</td><td>比下去 / 因不如人惭愧 / 自认不如</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">124</td><td className="idx-w">夸夸其谈 / 侃侃而谈</td><td>浮夸空谈（贬） / 从容有条理（褒）</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">125</td><td className="idx-w">高屋建瓴 / 高瞻远瞩 / 居高临下</td><td>居高统全局 / 眼光远 / 处于高位</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">126</td><td className="idx-w">孜孜以求 / 梦寐以求 / 夙兴夜寐</td><td>不懈追求 / 做梦都想 / 早起晚睡</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">127</td><td className="idx-w">水乳交融 / 相伴相生</td><td>融合无间 / 一起产生</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">128</td><td className="idx-w">无懈可击 / 尽善尽美 / 万无一失</td><td>找不到破绽 / 完美 / 绝不出错</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">129</td><td className="idx-w">轻描淡写 / 语焉不详</td><td>有意淡化 / 说得不细</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">130</td><td className="idx-w">矫枉过正 / 过犹不及 / 物极必反 / 文过饰非</td><td>纠过头 / 过等于不及 / 极端必反 / 掩饰错误</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">131</td><td className="idx-w">微乎其微 / 无关紧要</td><td>极小 / 不重要</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">132</td><td className="idx-w">沧海桑田 / 翻天覆地 / 云谲波诡</td><td>世事巨变 / 变化极大 / 变幻莫测</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">133</td><td className="idx-w">曲突徙薪 / 夕惕若厉</td><td>事先防患 / 时刻戒惧</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">134</td><td className="idx-w">饮鸩止渴 / 抱薪救火</td><td>自取灭亡 / 助长灾祸</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">135</td><td className="idx-w">嗤之以鼻 / 不屑一顾 / 不足挂齿</td><td>轻视 / 不值得看 / 不值一提</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">136</td><td className="idx-w">平分秋色 / 分庭抗礼 / 势均力敌</td><td>各占一半 / 平起平坐 / 力量相当</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">137</td><td className="idx-w">画地为牢 / 作茧自缚 / 咎由自取</td><td>自我限制 / 自陷困境 / 自己招来</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">138</td><td className="idx-w">设身处地 / 感同身受 / 将心比心 / 推己及人</td><td>换位思考 / 如同亲受 / 换心相比 / 由己推人</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">139</td><td className="idx-w">耸人听闻 / 骇人听闻 / 危言耸听</td><td>故意夸大 / 事实惊人 / 说吓人话</td><td className="idx-t"><a className="idx-go" href="#b12">精讲</a></td></tr>
                <tr><td className="idx-no">140</td><td className="idx-w">名副其实 / 当之无愧 / 名不虚传 / 货真价实</td><td>名实相符 / 担得起 / 名声不假 / 货真</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">141</td><td className="idx-w">匪夷所思 / 莫名其妙 / 啼笑皆非</td><td>离奇 / 不明白 / 哭笑不得</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">142</td><td className="idx-w">深谋远虑 / 真知灼见 / 远见卓识</td><td>想得深 / 见解真 / 眼光远</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">143</td><td className="idx-w">防微杜渐 / 防患未然</td><td>抓苗头 / 事先防</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">144</td><td className="idx-w">义不容辞 / 当仁不让</td><td>道义不能推 / 该做就承担</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">145</td><td className="idx-w">一视同仁 / 不偏不倚</td><td>同等对待 / 不偏袒</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">146</td><td className="idx-w">一如既往 / 始终如一</td><td>跟过去一样 / 从头到尾一致</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">147</td><td className="idx-w">推波助澜 / 虚张声势 / 故弄玄虚</td><td>助长坏事 / 装声势 / 故意玄虚</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">148</td><td className="idx-w">大有可为 / 大刀阔斧 / 大有裨益</td><td>有前途 / 果断有力 / 很有好处</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">149</td><td className="idx-w">自以为是 / 自命不凡</td><td>自认都对 / 自认不凡</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">150</td><td className="idx-w">草木皆兵 / 风声鹤唳</td><td>疑神疑鬼 / 惊惶失措</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">151</td><td className="idx-w">身临其境 / 身体力行</td><td>亲历其境 / 亲自动手</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">152</td><td className="idx-w">驾轻就熟 / 游刃有余 / 独当一面</td><td>熟练 / 能力有余 / 能独担</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">153</td><td className="idx-w">登峰造极 / 出神入化 / 炉火纯青</td><td>到顶点 / 绝妙 / 功夫纯熟</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">154</td><td className="idx-w">正本清源 / 釜底抽薪 / 开源节流 / 扬汤止沸</td><td>从源头治 / 抽掉根本 / 多进少出 / 只治标</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">155</td><td className="idx-w">有条不紊 / 一板一眼 / 井然有序</td><td>不乱 / 合规矩 / 秩序好</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">156</td><td className="idx-w">照本宣科 / 照猫画虎 / 如法炮制</td><td>照念死板 / 照样模仿 / 照现成办法做</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">157</td><td className="idx-w">勇往直前 / 义无反顾</td><td>勇敢向前 / 决不回头</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">158</td><td className="idx-w">于事无补 / 无济于事 / 回天乏术</td><td>没帮助 / 解决不了 / 救不回</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">159</td><td className="idx-w">面目全非 / 不伦不类 / 支离破碎</td><td>面貌全变（贬） / 不三不四 / 破碎不全</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">160</td><td className="idx-w">守株待兔 / 坐享其成 / 不劳而获 / 以逸待劳</td><td>死等偶然 / 白享成果 / 不劳动而得 / 养精蓄锐</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">161</td><td className="idx-w">虚无缥缈 / 捕风捉影 / 子虚乌有</td><td>空幻不实 / 无根据 / 根本不存在</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">162</td><td className="idx-w">妄自菲薄 / 数典忘祖</td><td>看轻自己 / 忘掉本源</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">163</td><td className="idx-w">如鱼得水 / 如虎添翼 / 为虎添翼</td><td>得其所 / 强者更强（褒） / 助恶（贬）</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">164</td><td className="idx-w">刚愎自用 / 讳疾忌医</td><td>固执自负 / 掩饰缺点</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">165</td><td className="idx-w">高歌猛进 / 所向披靡 / 来势汹汹</td><td>势头猛 / 无阻挡 / 气势凶</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">166</td><td className="idx-w">不孚众望 / 不负众望</td><td>没服众（贬） / 没辜负（褒）</td><td className="idx-t"><a className="idx-go" href="#b13">精讲</a></td></tr>
                <tr><td className="idx-no">167</td><td className="idx-w">天花乱坠 / 口若悬河</td><td>说得动听（贬） / 能言善辩</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">168</td><td className="idx-w">心猿意马 / 首鼠两端</td><td>心思不定 / 迟疑两端</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">169</td><td className="idx-w">邯郸学步 / 东施效颦</td><td>学步丢自己 / 盲目模仿更丑</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">170</td><td className="idx-w">入木三分 / 力透纸背 / 妙笔生花</td><td>见解深刻 / 笔力遒劲 / 文笔巧妙</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">171</td><td className="idx-w">危在旦夕 / 岌岌可危 / 日渐式微</td><td>迫在眼前 / 快要倾覆 / 一天天衰落</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">172</td><td className="idx-w">取而代之 / 李代桃僵 / 越俎代庖 / 鸠占鹊巢</td><td>取代 / 代人受过 / 越权代办 / 强占</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">173</td><td className="idx-w">徒劳无功 / 枉费心机</td><td>白费力 / 白费心思</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">174</td><td className="idx-w">分崩离析 / 土崩瓦解</td><td>内部分裂 / 彻底崩溃</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">175</td><td className="idx-w">千方百计 / 绞尽脑汁 / 处心积虑 / 费尽心机</td><td>想尽办法 / 苦思 / 长期谋划干坏事 / 用尽心机</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">176</td><td className="idx-w">改弦更张 / 改弦易辙</td><td>换办法 / 换方向</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">177</td><td className="idx-w">可见一斑 / 纤毫毕现</td><td>可见一小部分 / 细节全显</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">178</td><td className="idx-w">剑走偏锋 / 出奇制胜</td><td>走冷门 / 出奇招取胜</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">179</td><td className="idx-w">顺势而为 / 审时度势</td><td>顺着趋势做 / 看清时势</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">180</td><td className="idx-w">牢不可破 / 颠扑不破</td><td>坚固不可摧 / 真理驳不倒</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">181</td><td className="idx-w">稳操胜券 / 步步为营</td><td>必定取胜 / 步步稳进</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">182</td><td className="idx-w">泰然自若 / 安之若素 / 随遇而安</td><td>临事不乱 / 不以为意 / 到哪都安</td><td className="idx-t"><a className="idx-go" href="#b7">精讲</a></td></tr>
                <tr><td className="idx-no">183</td><td className="idx-w">含糊其辞 / 闪烁其词</td><td>内容不清 / 躲闪回避</td><td className="idx-t"><a className="idx-go" href="#b8">精讲</a></td></tr>
                <tr><td className="idx-no">184</td><td className="idx-w">猝不及防 / 始料不及 / 出其不意 / 措手不及</td><td>太突然 / 没料到 / 主动突袭 / 应对不上</td><td className="idx-t"><a className="idx-go" href="#b8">精讲</a></td></tr>
                <tr><td className="idx-no">185</td><td className="idx-w">滴水不漏 / 不折不扣 / 分毫不差</td><td>严密无漏 / 完全彻底 / 一点不差</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">186</td><td className="idx-w">众望所归 / 实至名归</td><td>人心所向 / 名副其实</td><td className="idx-t"><a className="idx-go" href="#b8">精讲</a></td></tr>
                <tr><td className="idx-no">187</td><td className="idx-w">不落窠臼 / 独具一格</td><td>不俗套 / 有独特风格</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">188</td><td className="idx-w">移花接木 / 混淆是非 / 偷梁换柱 / 牵强附会</td><td>暗中调换 / 搅乱对错 / 改内容性质 / 硬拉关系</td><td className="idx-t"><a className="idx-go" href="#b3">精讲</a></td></tr>
                <tr><td className="idx-no">189</td><td className="idx-w">广开言路 / 从善如流</td><td>渠道多 / 肯听劝</td><td className="idx-t"><a className="idx-go" href="#s9">精讲</a></td></tr>
                <tr><td className="idx-no">190</td><td className="idx-w">尾大不掉 / 一盘散沙 / 桀骜不驯</td><td>指挥不动 / 人心不齐 / 性情倔强</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">191</td><td className="idx-w">隔靴搔痒 / 张冠李戴</td><td>没抓关键 / 弄错对象</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">192</td><td className="idx-w">待价而沽 / 奇货可居</td><td>等好价再卖 / 囤积居奇</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">193</td><td className="idx-w">纲举目张 / 以一持万</td><td>抓总纲带全局 / 抓根本驭众多</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">194</td><td className="idx-w">一意孤行 / 执迷不悟 / 固执己见</td><td>独断专行 / 坚持错误 / 坚持己见</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">195</td><td className="idx-w">弃旧图新 / 去芜存菁 / 拨乱反正 / 激浊扬清</td><td>改过自新 / 留精华 / 纠正混乱 / 除坏扬好</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">196</td><td className="idx-w">耳提面命 / 言传身教</td><td>当面叮嘱 / 说做一致</td><td className="idx-t"><a className="idx-go" href="#b8">精讲</a></td></tr>
                <tr><td className="idx-no">197</td><td className="idx-w">文不加点 / 下笔千言</td><td>不用涂改 / 一动笔就长</td><td className="idx-t"><a className="idx-go" href="#s24">精讲</a></td></tr>
                <tr><td className="idx-no">198</td><td className="idx-w">指鹿为马 / 皮里阳秋 / 指桑骂槐</td><td>颠倒黑白 / 暗含褒贬 / 借甲骂乙</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">199</td><td className="idx-w">用武之地 / 立足之地</td><td>能施展的地方 / 能站住的地方</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
                <tr><td className="idx-no">200</td><td className="idx-w">指日可待 / 翘首以盼 / 倚马可待</td><td>不久实现 / 殷切盼望 / 文思极快</td><td className="idx-t"><span className="idx-n">速览</span></td></tr>
              </DataTable>
              <Callout variant="tip">共 200 组，其中 <b>40 组</b>在本页有完整精讲（一句话区别 + 侧重表 + 例句对照 + 例题）；其余为速览组，词义与例句见对应词群。</Callout>
            </Block>
    </>
  )
}
