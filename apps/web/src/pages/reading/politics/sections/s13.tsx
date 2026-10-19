import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十三、生活常识与高新技术
 *
 * @returns 该节正文。
 */
export default function S14(): ReactElement {
  return (
    <>
      <Callout variant="key">这一节分两半：<b>生活常识靠「常识 + 一个原理」</b>，<b>高新技术靠「编号 + 第一次」</b>。航天部分建议按「嫦娥 / 天问 / 神舟 / 发射场」四条线背。</Callout>
      
            <Block>
              <BlockTitle>1. 家用电器</BlockTitle>
              <PointList>
                <li>冰箱：制冷剂在<b>蒸发器</b>吸热、在<b>冷凝器</b>放热，所以侧面/背面发热；冷藏最佳约 4℃；<b>不必等凉透</b>，不烫手即可密封放入；容量保持 80% 以下。</li>
                <li>空调：关机后<b>等 3 分钟</b>再启动以保护压缩机；短时外出保持运行更省电；制冷出风口<b>向上</b>、制热出风口<b>向下</b>。</li>
                <li>微波炉：使水分子剧烈摩擦生热，<b>由内向外</b>同时加热；<b>禁用金属容器</b>（打火）、禁加热密封带壳食物（爆炸）；陶瓷、耐热玻璃、耐热塑料可用。</li>
                <li>大功率电器（冰箱、空调）应使用<b>单独专用插座</b>。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题67 · 家电（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于电器的使用，下列说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.用微波炉加热利乐枕包装的牛奶<br />B.家用空调应使用单独的专用插座<br />C.食物要等凉透后再放入冰箱<br />D.新冰箱侧面的保护膜应尽量保留</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 利乐枕含金属箔，会打火；C 不烫手即可放入；D 保护膜应尽快撕掉（影响散热）。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 交通常识</BlockTitle>
              <PointList>
                <li>汽车前窗倾斜：避免<b>平面镜成像</b>干扰视线；夜间车内不开灯同理。</li>
                <li><b>双闪灯</b>（危险报警闪光灯）：紧急情况或临时停车时提醒他人；<b>远光灯</b>仅用于照明条件极差且不影响他人时，有路灯街道应少用。</li>
                <li>轮胎花纹、防滑链：<b>增大摩擦力</b>；加油站必须熄火、不打电话、不拍打化纤衣物（防静电）。</li>
                <li>雷电天气在车内是安全的（<b>法拉第笼</b>效应）。</li>
                <li>高速故障九字诀：<b>车靠边、人撤离、即报警</b>；三角牌放车后 <b>150 米</b>（恶劣天气 200 米以上）；救援电话 <b>12122</b>。</li>
                <li>飞机窗户做成<b>圆形</b>：避免应力集中；机翼上表面流速大压强小，产生升力。</li>
                <li>火车转弯处<b>外轨高于内轨</b>；车次字母：C 城际、D 动车、G 高铁、Z 直达、T 特快、K 快速、L 临客、Y 旅游。</li>
                <li><b>交通信号灯</b>：机动车灯（红黄绿圆灯）、非机动车灯（带自行车图案）、人行横道灯（红绿行人图案）、方向指示灯（箭头）。</li>
                <li>红灯禁止直行与左转，<b>不妨碍行人和车辆时允许右转</b>；黄灯持续闪烁＝警告，瞭望后通过。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题68 · 交通（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列关于交通常识的说法，错误的是：</ExampleQuestion>
                <ExampleOptions>A.晚上开车为行驶方便，尽量使用远光灯<br />B.汽车加油时不可下车拍打化纤类衣物<br />C.下雪天轮胎加防滑链可增大摩擦力<br />D.汽车行驶时车内一般不开灯，避免挡风玻璃成像</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 错。有路灯的街道应<b>少用远光灯</b>，避免影响对向驾驶员。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 灾害应对</BlockTitle>
              <PointList>
                <li>火灾：疏散顺序<b>着火层 → 上层 → 下层</b>；不乘电梯、不跳楼；湿毛巾捂口鼻、低姿匍匐；身上着火就地打滚。</li>
                <li>灭火器对准<b>火焰根部</b>；二氧化碳灭火器适用图书档案/精密仪器/电气（不适用过氧化物）；泡沫灭火器不适用电气与忌水物质；干粉适用面最广（不适用金属燃烧）。</li>
                <li>雷电：室外蹲低、双脚并拢、远离金属与大树；室内不打电话、拔插头、不开门窗。</li>
                <li>洪水：向山坡高地转移；来不及则上屋顶、大树、高墙。</li>
                <li>泥石流：向<b>与泥石流垂直方向</b>的两侧山坡跑，离开沟谷。</li>
                <li>地震：低楼层迅速撤到开阔地；高楼层躲<b>小开间</b>（厨房、卫生间、承重墙角）或坚固家具下，护住头部。</li>
                <li>地震名词：震源、震中、<b>震级只有一个</b>、<b>烈度可有多个</b>；震级差一级能量差约 <b>30 倍</b>；纵波（P）快、上下颠、破坏弱；横波（S）慢、水平摇、破坏强、只能在固体中传播。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题69 · 地震（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列关于地震的说法，正确的是：</ExampleQuestion>
                <ExampleOptions>A.欧亚地震带是世界上最大的地震带<br />B.地震时纵波比横波破坏力更强<br />C.震级每增加 1 级，能量约增加 30 倍<br />D.一次地震可以有多个震级</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 最大的是<b>环太平洋地震带</b>；B 横波破坏更强；D 震级只有一个，<b>烈度</b>可有多个。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 计算机技术</BlockTitle>
              <PointList>
                <li>硬件：运算器 + 控制器＝<b>CPU</b>；存储器分内存（快、贵、小）与外存。</li>
                <li><b>ROM</b> 断电不丢失；<b>RAM</b> 断电丢失。</li>
                <li><b>字节（Byte）</b>是存储容量基本单位，<b>位（bit）</b>是最小单位：1 B = 8 bit；1 KB = 1024 B；1 MB = 1024 KB；1 GB = 1024 MB；1 TB = 1024 GB；<b>1 个汉字 = 2 B</b>。</li>
                <li>快捷键：复制 Ctrl+C、粘贴 Ctrl+V、剪切 Ctrl+X、全选 Ctrl+A、撤销 Ctrl+Z、保存 Ctrl+S、打印 Ctrl+P、查找 Ctrl+F、替换 <b>Ctrl+H</b>。</li>
                <li>中国超算：<b>银河-I</b>（1983，首台亿次巨型机，世界第三个）；<b>天河一号</b>（2010，首台千万亿次，首次 TOP500 第一）；<b>天河二号</b>（2013，连续 6 次第一）；<b>神威·太湖之光</b>（2016，核心部件完全国产化）。</li>
                <li>量子计算：<b>九章一号</b>（2020，光量子优越性，全球第二个）；<b>祖冲之二号</b>（2021，唯一在超导与光量子两条路线都实现优越性）；<b>本源悟空</b>（2024，量子算力全球开放）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题70 · 计算机（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列关于我国计算机成就的表述，正确的是：</ExampleQuestion>
                <ExampleOptions>A.「银河-I」使我国成为世界上第四个能独立设计制造巨型机的国家<br />B.「天河一号」曾连续 6 次位居 TOP500 世界第一<br />C.「神威·太湖之光」多次问鼎世界第一，核心突破在于核心部件完全国产化<br />D.「祖冲之二号」使我国成为全球第二个实现量子优越性的国家</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 错，是<b>第三个</b>；B 错，连续 6 次第一的是<b>天河二号</b>；D 错，全球第二个是<b>九章一号</b>。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>5. 新能源与生物工程</BlockTitle>
              <PointList>
                <li>能源分类：<b>一次能源</b>（自然界本来就有：煤、石油、天然气、太阳能、风能、核能、潮汐）；<b>二次能源</b>（加工转化：电力、汽油、煤气、沼气、蒸汽、焦炭）。</li>
                <li><b>可再生能源</b>：太阳能、水能、风能、生物质能、地热能、海洋能；<b>不可再生能源</b>：化石能源、核能、油页岩。</li>
                <li>核裂变用于核电站（燃料<b>铀</b>）；核聚变尚未受控（氢弹已实现）。</li>
                <li>核能里程碑：1942 美国首座可控裂变反应堆；1954 苏联奥布灵斯克（世界首座核电站）；1991 秦山（中国大陆第一座）；1994 大亚湾（第一座大型商用）；2021 华龙一号（福清 5 号）。</li>
                <li><b>2026 新增</b>：<b>长征十号</b>低空演示验证 + <b>梦舟</b>载人飞船最大动压逃逸试验（2 月，文昌）；<b>长征十号乙</b>首发回收成功（7.10，中国首款 5 米芯级直径两级可重复使用商用液体火箭，<b>全球首次海上网系回收</b>）；<b>灵晟</b>超算（7 月，世界首台持续性能超 2 EFLOPS，我国自 2017 神威后重回全球第一）；<b>C919</b> 首条常态化国际商业航线（8.12，北京—乌兰巴托）；<b>哈伊高铁</b>（我国纬度最高、最北端在建高铁）；<b>平陆运河</b>（西部陆海新通道骨干工程、新中国成立以来第一条国家层面统筹的通江达海运河）；<b>福建舰</b>入列（首艘国产电磁弹射型航母）。</li>
                <li>2025 年 1 月 20 日，全超导托卡马克核聚变实验装置（<b>EAST</b>，「人造太阳」）首次完成 <b>1 亿摄氏度 1000 秒</b>「高质量燃烧」。</li>
                <li>生物质能是<b>唯一可再生的碳源</b>，也是人类最早使用的能源；可燃冰主要成分<b>甲烷</b>。</li>
                <li>生物工程四类：<b>基因工程</b>（核心，DNA 重组，转基因/基因治疗）、<b>细胞工程</b>（克隆、干细胞、体细胞杂交）、<b>发酵工程</b>（最悠久、最广泛：酒/醋/酸奶/泡菜/酱油/面包/腐乳/味精）、<b>酶工程</b>（加酶洗衣粉、血糖试纸）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题71 · 生物工程（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列不涉及微生物发酵的是：</ExampleQuestion>
                <ExampleOptions>A.豆腐　B.食醋　C.乳酪　D.白酒</ExampleOptions>
                <ExampleAnswer><b>解析：</b>豆腐是<b>大豆蛋白凝固</b>（点卤）制成，不涉及发酵；腐乳才是发酵产品。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>6. 中国航天（四条线）</BlockTitle>
              <DataTable>
                <tr><th>线</th><th>关键节点（必背）</th></tr>
                <tr><td><b>嫦娥探月</b></td><td>一号（2007）首颗月球探测器；三号（2013）首次月面软着陆；<b>四号（2018）世界首次月背软着陆</b>；<b>五号（2020）首次月面采样返回</b>，发现「嫦娥石」；<b>六号（2024）世界首次月背采样返回</b>（玄武岩纤维「石头版」国旗）；鹊桥二号（2024）环月大椭圆冻结轨道</td></tr>
                <tr><td><b>天问行星</b></td><td>天问一号（2020 文昌，长五）火星「绕、着、巡」一次完成，「祝融号」；天问二号（2025 西昌）小行星 2016HO3 采样返回 + 主带彗星 311P</td></tr>
                <tr><td><b>神舟载人</b></td><td><b>神舟五号</b>（2003）首次载人（杨利伟）；<b>神舟七号</b>（2008）首次出舱（翟志刚）；<b>神舟九号</b>（2012）首次载人交会对接；<b>神舟十号</b>（2013）首次太空授课；<b>神舟十二号</b>（2021）首次进入自己空间站；<b>神舟十三号</b>（2021）首次在轨 6 个月；<b>神舟十五号</b>（2022）首次在轨轮换；<b>神舟十六号</b>（2023）首次「驾驶员+工程师+科学家」三角色；<b>神舟十七号</b>（2023）首次舱外维修；神舟十八号（2024）首次在轨水生生态；神舟二十号（2025）首次涡虫再生；神舟二十一号（2025）首次啮齿类哺乳动物实验；神舟二十二号（2025）首次应急发射</td></tr>
                <tr><td><b>发射场</b></td><td>酒泉（甘肃，最早最大、唯一载人）；太原（山西，太阳同步轨道）；西昌（四川，<b>北斗母港、探月母港</b>）；文昌（海南，首个滨海、低纬度）；东方航天港（山东，唯一海上发射母港）；<b>海南商业航天发射场</b>（2025.3 一号工位首发，「一箭十八星」）</td></tr>
              </DataTable>
              <PointList>
                <li>空间站「天宫」＝<b>天和核心舱 + 问天实验舱 + 梦天实验舱</b>，2022 年底全面建成。</li>
                <li>货运飞船「天舟」：文昌、长征七号；载人飞船「神舟」：酒泉、长征二号 F。</li>
                <li>航天员「第一」：首位进太空杨利伟；首位女航天员刘洋；首位太空行走翟志刚；首位太空行走女航天员王亚平；首位飞行工程师<b>朱杨柱</b>；首位飞行女工程师<b>王浩泽</b>；首位载荷专家<b>桂海潮</b>；进入太空次数最多<b>景海鹏</b>；<b>出舱次数最多陈冬</b>。</li>
                <li><b>2025–2026 新节点</b>：<b>天舟九号</b>（2025.7.15，长征七号遥十，文昌，<b>后向端口</b>）；<b>神舟二十号</b>（首次涡虫再生；<b>单乘组在轨驻留最长</b>；陈冬<b>首个在轨超 400 天</b>）；<b>神舟二十二号</b>（中国首次<b>应急发射</b>载人飞船，无人发射、载人返回）；<b>神舟二十三号</b>（2026.5.24，酒泉，朱杨柱、张志远、黎家盈；<b>黎家盈是首位从港澳选拔的航天员、首位女性载荷专家</b>）。</li>
                <li><b>货运飞船对接位置</b>：天舟常规对接<b>后向端口</b>，<b>前向端口</b>通常对接神舟载人飞船。</li>
              </PointList>
              <Callout variant="warn"><b>最易错：</b>「嫦娥五号是世界首次月背采样」×——<b>五号是正面</b>，<b>六号才是世界首次月背</b>采样返回。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题72 · 探月工程（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列关于我国探月工程，说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.嫦娥一号是我国第一颗人造太阳系小行星<br />B.嫦娥三号是我国首颗实现月球背面软着陆的探测器<br />C.嫦娥五号实现我国首次月球正面采样返回<br />D.嫦娥七号已实施首次月背采样返回</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 是人造太阳系小行星的是<b>嫦娥二号</b>；B 月背软着陆是<b>嫦娥四号</b>；D 月背采样返回是<b>嫦娥六号</b>。<br /><span className="correct">答案：C</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
