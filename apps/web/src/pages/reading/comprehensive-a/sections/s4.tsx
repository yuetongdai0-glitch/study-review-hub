import type { ReactElement } from 'react'
import { ExerciseCard } from '@/components/content'

/**
 * 第4课 应急处理
 *
 * @returns 该节正文。
 */
export default function S5(): ReactElement {
  return (
    <>
      <div className="goal"><div>🎯 <b>本课目标：</b>背熟"<b>控场 → 调研 → 短对 → 长对</b>"四步框架，并能把它套进投诉纠纷、舆情危机、安全事故、活动中断四类场景。</div></div>
      
        <h3>4.1 题型识别与"答案思路"</h3>
        <div className="chips">
          <span className="chip blue">面对突发事件如何处理</span><span className="chip blue">现场发生冲突/投诉，你怎么办</span>
          <span className="chip blue">列出处理步骤</span><span className="chip blue">网络舆情发酵，如何应对</span>
        </div>
        <div className="think">
          <div className="think-t">答案思路：先稳住局面，再搞清事实，然后分"眼前"和"长远"两步解决</div>
          <p>应急题的材料里往往有<b>一个主要矛盾 + 两三个次要矛盾</b>。你要做的是：把所有矛盾勾出来 → 按轻重缓急排序 → 逐一给对策。<b>排序原则：先群众后单位、先紧急后重要、先现场后机制。</b></p>
          <div className="line">控场（稳情绪/控现场/上报）→ 调研（摸清事实与各方诉求）→ 短对（解决眼前矛盾）→ 长对（建长效机制）</div>
        </div>
        <div className="skill">
          <div className="skill-t">技巧一：四步框架（背到形成肌肉记忆）</div>
          <ol>
            <li><b>控场</b>：第一时间到场/回应——安抚情绪、疏散人群、控制现场、向领导报告。这是开场动作，<b>漏了直接丢档次分</b>。</li>
            <li><b>调研</b>：走访当事人、调取记录、听取多方说法，把事实和各方诉求摸清楚。</li>
            <li><b>短对</b>：针对眼前的每个矛盾逐一出方案——能当场解决的当场解决，不能解决的说明原因、明确时限。</li>
            <li><b>长对</b>：跟踪回访、反馈结果；举一反三排查同类隐患；建章立制、完善长效机制。</li>
          </ol>
        </div>
        <div className="skill">
          <div className="skill-t">技巧二：三条处理原则</div>
          <ol>
            <li><b>生命与安全永远第一</b>：涉及人身安全的先救人、先疏散。</li>
            <li><b>轻重缓急</b>：紧急的（伤人、冲突、舆情爆发）先办，重要的（制度完善）后办；先"灭火"再"防火"。</li>
            <li><b>先控制局面，再处理问题</b>：情绪不稳的先安抚，现场混乱的先稳住。</li>
          </ol>
        </div>
        <table>
          <tr className="thead-row"><th>高频场景</th><th>固定处理框架</th><th>高频动作词</th></tr>
          <tr><td data-label="高频场景"><b>群众投诉 / 现场纠纷</b></td><td data-label="固定处理框架">安抚情绪（先道歉、稳住局面）→ 倾听记录诉求 → 核实情况 → 依法依规处理 → 反馈结果 → 跟进回访</td><td data-label="高频动作词">耐心倾听、及时反馈、限时办结</td></tr>
          <tr><td data-label="高频场景"><b>网络舆情 / 负面报道</b></td><td data-label="固定处理框架">第一时间回应表态 → 调查核实 → 公布真相（及时、准确、权威）→ 严肃处理责任人 → 加强引导、修复形象</td><td data-label="高频动作词">及时发声、澄清事实、回应关切</td></tr>
          <tr><td data-label="高频场景"><b>突发安全事故</b></td><td data-label="固定处理框架">救人第一 → 疏散现场 → 上报领导 → 保护现场、配合调查 → 举一反三、排查隐患</td><td data-label="高频动作词">抢救、疏散、上报、配合、整改</td></tr>
          <tr><td data-label="高频场景"><b>活动 / 设备突发中断</b></td><td data-label="固定处理框架">启动备用方案 → 安抚参会者 → 调整议程 → 组织抢修 → 事后复盘</td><td data-label="高频动作词">备用、调整、抢修、复盘</td></tr>
        </table>
      
        
        <ExerciseCard>
          <div className="ex-head">例题 · 综应A风格 · 大厅排队争执</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">你是H市政务服务中心的值班负责人。上午9时，大厅排队人数较多，一名群众因等候时间过长与窗口工作人员发生争执，并扬言拍视频发到网上。<b>你会如何处理此事？</b><br />要求：措施得当，针对性强，不超过300字。</div></div>
            <div className="ex-m"><span className="ex-label">材料（原创仿写）</span><div className="ex-block">H市政务服务中心上午9时迎来办事高峰，取号人数已达217人，而开放的窗口只有6个，有群众已等候50分钟。王先生因社保转移接续手续被窗口工作人员告知"材料不齐，回去重新准备"，情绪激动，认为上次来的时候没人说要这份材料，当场与工作人员小刘大声争执，引来其他群众围观，并用手机拍摄视频，说要"发到网上让大家评评理"。大厅志愿者试图劝阻，围观群众越来越多。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：控场 → 调研 → 短对 → 长对，一步一步来</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题：先看这件事有几个矛盾</b><p><span className="kb">身份</span>大厅值班负责人 <span className="kb">主要矛盾</span>王先生办不成事、情绪激动 <span className="kb">次要矛盾</span>围观群众增多、有视频外传风险、窗口告知不一致 <span className="kb">字数</span>不超过300字</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>排序：先群众后单位，先紧急后重要</b><p>第一位：把王先生从人群中请出来、稳住情绪（<b>不要在大厅与人争辩</b>）；第二位：核实"两次告知不一致"的事实；第三位：解决王先生的办事需求；第四位：处理视频与围观；第五位：解决高峰期排队与一次性告知问题。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：四步落位</b><p><b>控场</b>：先致歉、请到接待室、疏散围观、维持大厅秩序。<br /><b>调研</b>：倾听诉求，调取首次受理记录，向小刘了解告知经过。<br /><b>短对</b>：若确属告知不全面，诚恳道歉并致谢；材料不齐的提供一次性告知清单、安排帮办，能容缺受理的先受理、承诺后补；同时请王先生理解，不建议传播未经核实的信息，并向中心领导报告。<br /><b>长对</b>：整改一次性告知制度、开展业务培训；高峰期增开潮汐窗口、推行线上预约分流。</p></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>"一、迅速控场。二、了解核实。三、妥善处置。四、举一反三。"四段式，动作词打头。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（不超过300字）</div>
          <p>一、<b>迅速控场。</b>第一时间上前将王先生请到接待室，安抚情绪并诚恳致歉；向围观群众说明正在处理、请大家放心办事，请志愿者维持大厅秩序。</p>
          <p>二、<b>了解核实。</b>耐心倾听王先生的诉求，查看首次受理记录，向窗口工作人员核实两次告知不一致的原因。</p>
          <p>三、<b>妥善处置。</b>如确属工作人员告知不全面，向王先生道歉并致谢；材料不齐的，提供一次性告知清单并安排帮办服务，能容缺受理的先予受理、承诺后补；同时请王先生理解，不建议传播未经核实的信息，并将情况向中心领导报告。</p>
          <p>四、<b>举一反三。</b>整改窗口一次性告知制度，开展业务培训；高峰期增开潮汐窗口、推行线上预约分流，避免类似问题再次发生。</p>
        </div>
        <h3>4.2 例题精讲①（底层思维）：噪音投诉的双方协商</h3>
        <ExerciseCard>
          <div className="ex-head">真题 · 事业单位联考 · A市环境监测站</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">假如你是监测站工作人员张俊。针对材料1中李先生的投诉，领导让你<b>召集涉诉双方面对面协商解决，你将如何尽量促成双方和解？</b><br />要求：定位准确，目的明确，措施具体、有效。字数在300字以内。（35分）</div></div>
            <div className="ex-m"><span className="ex-label">材料概要（材料1）</span><div className="ex-block">
              患心脏病的李先生因附近商务大楼设备噪声休息不好、病情加重，向市长热线投诉。监测站现场监测为 49 分贝，<b>符合夜间 50 分贝以下标准</b>，认定企业未违规。李先生<b>不接受结果、质疑数据造假</b>，要求复检。张俊耐心解释、承诺复检，凌晨两次复测发现个别时间点达 51 分贝但总体合格；勘查后发现部分设备可加装降噪设施，经反复协调，运营方同意加装，但<b>工期需 3 个月</b>。李先生认为"检测结果有出入不可信""装设备要三个月分明是拖延"，扬言向更高级部门投诉。
            </div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：勾出矛盾 → 排序 → 分头给对策</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">身份</span>监测站工作人员张俊（无执法权，只能协调）<span className="kb">任务</span>促成双方<b>和解</b> <span className="kb">字数</span>300字</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：把矛盾全勾出来</b>
            <p><b>矛盾（汇总）：</b>李先生因噪音夜不能睡、心脏病加重，质疑监测站数据造假，认为噪音不符合标准、要求再检测，且认为装降噪设备要三个月是拖延敷衍。</p>
            <p><b>涉及两方：</b>李先生（诉求＝尽快解决噪音）＋ 运营方（现实＝加装需 3 个月）。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：按"控场→调研→短对→长对"排布</b>
            <table>
              <tr className="thead-row"><th>步骤</th><th>具体做法</th></tr>
              <tr><td data-label="步骤"><b>控场·响应及时</b></td><td data-label="具体做法">邀请李先生及其家人、运营方参与协商，环境执法大队参加，讲明希望双方和解</td></tr>
              <tr><td data-label="步骤"><b>调研·仔细了解</b></td><td data-label="具体做法">了解李先生的诉求和期待；向运营方了解夜间设备运行情况、降噪设备安装程序</td></tr>
              <tr><td data-label="步骤"><b>短对·对李先生</b></td><td data-label="具体做法">① 出示实地监测图片和数据，说明监测科学准确；② 在各方参与下复检，讲明夜间标准为 50 分贝、运营方偶尔超标但总体合格；③ 说明降噪安装需时间，建议先采用隔音耳塞等临时措施</td></tr>
              <tr><td data-label="步骤"><b>短对·对运营方</b></td><td data-label="具体做法">出示医院诊断证明，说明李先生患心脏病的实际情况，建议缩短降噪设备安装工期，并跟进加装进度</td></tr>
              <tr><td data-label="步骤"><b>长对·长效机制</b></td><td data-label="具体做法">加装完成后复测并回访；建立涉诉事件的跟踪反馈机制，避免矛盾升级</td></tr>
            </table></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>三段式：一、响应及时。二、仔细了解。三、解决方案（分"李先生""运营方"两小块）。语言用机关表达（"出示""讲明""建议""跟进"）。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（300字以内）</div>
          <p>一、<b>响应及时。</b>邀请李先生及其家人、运营方参与协商，环境执法大队参加，讲明希望双方和解。</p>
          <p>二、<b>仔细了解。</b>了解李先生的诉求和期待；向运营方了解夜间设备运行情况，了解降噪设备安装程序。</p>
          <p>三、<b>解决方案。</b>（一）对李先生：1.出示实地监测的图片及数据，说明监测数据的科学性和准确性；2.讲明监测设备原理、监测流程等，在各方参与下进行复检，讲明夜间噪声认定标准为 50 分贝，明确运营方偶尔超标但总体合格；3.说明降噪设施安装需要时间，建议先采用隔音耳塞等临时措施。（二）对运营方：出示李先生的医院诊断证明，说明其患有心脏病的实际情况，建议缩短降噪设备的安装工期，并跟进设备加装进度。</p>
        </div>
        <div className="callout teal"><b>这道题的关键：</b>应急题里"一方有多条诉求"时，用<b>"分对象"</b>的办法组织答案（对李先生怎么做、对运营方怎么做），比平铺直叙清楚得多。</div>
      
        
        <h3>4.3 例题精讲②（提升进阶）：活动现场食品安全突发</h3>
        <ExerciseCard>
          <div className="ex-head">真题 · 事业单位联考 · 马铃薯美食节</div>
          <div className="ex-body">
            <div className="ex-q"><span className="ex-label">题目</span><div className="ex-block">在马铃薯大会地方特色美食节上，有游客声称土豆酥中有沙粒，引起现场媒体的关注和其他游客的围观。<b>请你结合材料中的活动现场情况，谈谈你会如何处理此事。</b><br />要求：措施得当，针对性强。字数在400字以内。（40分）</div></div>
            <div className="ex-m"><span className="ex-label">材料概要</span><div className="ex-block">美食节有多家摊位、百余种马铃薯美食，现场有媒体、有大量游客围观。突发状况：有游客称"土豆酥中有沙粒"，引来媒体关注和游客围观。</div></div>
          </div>
        </ExerciseCard>
        <div className="derive">
          <div className="derive-t">逐步解析：控场 → 调研 → 短对（分情况）→ 长对</div>
          <div className="dstep"><div className="dn">1</div><div className="db"><b>审题</b><p><span className="kb">场景</span>公开活动、有媒体、有围观群众 <span className="kb">任务</span>处理"沙粒"投诉 <span className="kb">字数</span>400字</p></div></div>
          <div className="dstep"><div className="dn">2</div><div className="db"><b>析点：这件事的"特殊点"是什么</b>
            <p>普通投诉只需对当事游客负责；但本题<b>现场有媒体和围观游客</b>，所以处理时还要"顾形象、稳舆情"。这就是"针对性"所在。</p></div></div>
          <div className="dstep"><div className="dn">3</div><div className="db"><b>加工：四步落位</b>
            <table>
              <tr className="thead-row"><th>步骤</th><th>具体做法</th></tr>
              <tr><td data-label="步骤"><b>控场·响应及时</b></td><td data-label="具体做法">向游客诚恳道歉、询问口腔是否受损，需要检查就送医并派人陪同，暂停土豆酥售卖；同时向媒体和游客表明高度重视，承诺查清后通报，请大家放心参加后续活动</td></tr>
              <tr><td data-label="步骤"><b>调研·调查核实</b></td><td data-label="具体做法">请食品制作者和摊位负责人说明情况；迅速邀请食药监部门到现场核查，全面检查食品质量和安全</td></tr>
              <tr><td data-label="步骤"><b>短对·有效处理</b></td><td data-label="具体做法">分情况：若非沙粒而是无害调味品，将结果通报游客和媒体并做好解释；若确为沙粒，协调后续赔偿并公布处理结果</td></tr>
              <tr><td data-label="步骤"><b>长对·反馈提升</b></td><td data-label="具体做法">做好后续突发应对准备，加大入场食品检查力度，加强现场卫生管理，把好食品质量关，保证活动圆满落幕</td></tr>
            </table></div></div>
          <div className="dstep"><div className="dn">4</div><div className="db"><b>书写</b><p>四段式；"有效处理"里体现<b>分类讨论</b>（是/不是沙粒两种情况），这是高分亮点。</p></div></div>
        </div>
        <div className="ans">
          <div className="ans-t">参考答案（400字以内）</div>
          <p>1.<b>响应及时。</b>一方面，向声称土豆酥中有沙粒的游客诚恳道歉，询问其口腔是否受到损伤。若游客表示需要进一步检查，则将其送往医院，并指定工作人员陪同前往，做好善后工作，并暂停土豆酥的售卖。另一方面，向媒体和游客表明我们会高度重视此事，承诺待查清事实后会向媒体通报，请大家放心并参加接下来的活动。</p>
          <p>2.<b>调查核实。</b>一方面，请食品制作者和相应摊位负责人说明情况；另一方面，迅速邀请食药监部门到现场核查，全面检查土豆酥食品质量和安全情况。</p>
          <p>3.<b>有效处理。</b>如果沙粒事件并非沙粒，而是添加的无害调味品，我们将相关调查结果通报这位游客和媒体，并向其他游客做好解释说明；如果确实是沙粒，我们会根据情况协调后续赔偿事宜，并公布处理结果。</p>
          <p>4.<b>反馈提升。</b>在接下来的活动中，做好应对突发状况的准备，并对美食节入场食品加大检查力度，加强现场卫生情况管理，把好食品质量关，避免此类情况再次发生，保证活动圆满落幕。</p>
        </div>
        <div className="callout red"><b>最容易漏的3个点：</b>① 忘了"上报领导/向领导汇报"；② 只处理完就结束，忘了"跟踪回访/长效机制"；③ 语言口语化（"解决一下""安抚一下"），应用"第一时间""迅速""依法依规"等机关表达。</div>
        <div className="callout teal"><b>本课小结：</b>应急题拿分密码 ＝ <b>控场 → 调研 → 短对 → 长对</b>。记住三句话：<b>先控场、再核实、后处置，结尾必须补长效。</b></div>
    </>
  )
}
