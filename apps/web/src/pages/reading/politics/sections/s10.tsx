import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 十、物理常识
 *
 * @returns 该节正文。
 */
export default function S11(): ReactElement {
  return (
    <>
      <Callout variant="key">物理题的题干永远是「生活现象」，选项永远是「物理原理」。所以只要能把现象<b>归类</b>（力学 / 热学 / 光学 / 声学），大半题就能做。</Callout>
      
            <Block>
              <BlockTitle>1. 力学基础</BlockTitle>
              <PointList>
                <li>牛顿第一定律（<b>惯性定律</b>）：不受外力时保持静止或匀速直线运动。</li>
                <li>惯性只与<b>质量</b>有关，与速度无关；质量越大惯性越大。</li>
                <li>牛顿第二定律：a 与 F 成正比、与 m 成反比；第三定律：作用力与反作用力<b>大小相等、方向相反、同一直线</b>。</li>
                <li>万有引力：与质量乘积成正比，与距离<b>平方成反比</b>。</li>
                <li>压强＝压力 ÷ 受力面积；<b>流速越大压强越小</b>（飞机升力、龙卷风「吸」物、站台黄线）。</li>
                <li>摩擦力方向与<b>相对运动（趋势）方向相反</b>；减小摩擦：变滑动为滚动、减小压力、减小粗糙度（轴承上油）。</li>
                <li>超重：有<b>向上</b>的加速度；失重：有<b>向下</b>的加速度；太空中一切物体处于失重。</li>
                <li>浮力＝排开液体所受重力（阿基米德原理）；浮力＞重力上浮，＝悬浮/漂浮，＜下沉。</li>
              </PointList>
              <Callout variant="tip"><b>一句话判「惯性」：</b>刹车前倾、绊倒前扑、拍打衣服除尘、纸飞机离手继续飞——都是惯性；「球滚一会儿停下」是摩擦阻力，不是惯性。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题52 · 力学（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列现象蕴含的科学常识正确的是：</ExampleQuestion>
                <ExampleOptions>A.湿袜子粘在脚上很难脱，是大气压把袜子压在脚上<br />B.如坐针毡是因为压力一定时受力面积与压强成正比<br />C.书包背带做得宽是为了增大受力面积、减小压力<br />D.空间站附近的「太空压力」比地球正常大气压大</ExampleOptions>
                <ExampleAnswer><b>解析：</b>B 错，受力面积与压强成<b>反比</b>；C 错，是减小<b>压强</b>，压力不变；D 错，太空接近<b>真空</b>。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 杠杆与简单机械</BlockTitle>
              <PointList>
                <li>平衡条件：<b>F₁L₁ = F₂L₂</b>。</li>
                <li><b>省力杠杆</b>（动力臂＞阻力臂）：撬棍、扳手、钳子、开瓶器、指甲剪、铡刀、手推车。</li>
                <li><b>费力杠杆</b>（动力臂＜阻力臂）：镊子、筷子、汤勺、鱼竿、船桨、理发剪、起重机吊臂、扫帚。</li>
                <li><b>等臂杠杆</b>：天平、跷跷板、定滑轮。</li>
                <li>省力必费距离，费力必省距离——「省力又省距离」的杠杆不存在。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题53 · 杠杆（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列生活用品中属于省力杠杆的是：①铡刀 ②钓鱼竿 ③镊子 ④手推车</ExampleQuestion>
                <ExampleOptions>A.①②　B.②③　C.②④　D.①④</ExampleOptions>
                <ExampleAnswer><b>解析：</b>铡刀、手推车动力臂长，省力；钓鱼竿、镊子动力臂短，费力。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 物态变化与热学</BlockTitle>
              <DataTable>
                <tr><th>变化</th><th>方向</th><th>吸 / 放热</th><th>例子</th></tr>
                <tr><td>熔化</td><td>固 → 液</td><td>吸热</td><td>冰化成水</td></tr>
                <tr><td>凝固</td><td>液 → 固</td><td>放热</td><td>水结冰</td></tr>
                <tr><td>汽化</td><td>液 → 气</td><td>吸热</td><td>酒精挥发、沸腾</td></tr>
                <tr><td>液化</td><td>气 → 液</td><td>放热</td><td>雨、露、雾、眼镜起雾</td></tr>
                <tr><td>升华</td><td>固 → 气</td><td>吸热</td><td>樟脑丸变小、灯丝变细</td></tr>
                <tr><td>凝华</td><td>气 → 固</td><td>放热</td><td>霜、雪、雾凇</td></tr>
              </DataTable>
              <PointList>
                <li>汽化两形式：<b>蒸发</b>（任何温度、只在表面、平缓）与<b>沸腾</b>（达到沸点、内部与表面同时、剧烈）。</li>
                <li>沸点随气压降低而降低（高原水不开、高压锅）。</li>
                <li>传热三方式：<b>热传导</b>（固体接触）、<b>热对流</b>（流体宏观流动）、<b>热辐射</b>（电磁波，可在真空中传播）。</li>
                <li>分子热运动：温度越高越剧烈；扩散现象（闻到香味、腌菜入味）。</li>
                <li>热胀冷缩：路面留缝、夏天电线略下垂、水银体温计、煮熟鸡蛋冷水浸泡易剥壳。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题54 · 物态变化（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列物态变化对应正确的是：</ExampleQuestion>
                <ExampleOptions>A.蜡烛燃烧——熔化——放热<br />B.水变成水蒸气——液化——吸热<br />C.冰棍周围冒「白气」——凝华——放热<br />D.衣柜中的樟脑丸变小——升华——吸热</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 燃烧是化学变化；B 是<b>汽化</b>；C「白气」是水蒸气<b>液化</b>成的的小水滴。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 光</BlockTitle>
              <PointList>
                <li>电磁波谱（波长由长到短）：无线电波 → 红外线 → 可见光 → 紫外线 → X 射线 → γ 射线。</li>
                <li>可见光：红橙黄绿青蓝紫（波长递减、频率递增）。</li>
                <li><b>红外线</b>：热效应强，用于遥控器、感应门、热成像、红外测温。</li>
                <li><b>紫外线</b>：杀菌消毒、验钞、促进维生素 D 合成；过量有害。</li>
                <li>红、黄光波长长、穿透力强，故用于警示（尾灯、雾灯）。</li>
                <li>直线传播：影子、小孔成像、日食月食、激光准直。</li>
                <li>反射：镜子、水中倒影、潜望镜、杯弓蛇影。</li>
                <li>折射：筷子弯折、池水变浅、海市蜃楼、彩虹、凸透镜。</li>
                <li>散射：天空蓝、朝霞晚霞、丁达尔现象。</li>
                <li>透镜面镜：<b>凸透镜会聚</b>（放大镜、老花镜、照相机）；<b>凹透镜发散</b>（近视镜）；<b>凸面镜发散</b>（后视镜、转弯镜）；<b>凹面镜会聚</b>（手电筒反光罩、太阳灶）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题55 · 光学（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列属于光的折射现象的是：①猪八戒照镜子 ②从鱼缸侧面看鱼发现鱼变大 ③装满水的泳池底部看起来很浅 ④坐井观天所见甚小</ExampleQuestion>
                <ExampleOptions>A.①②　B.②③　C.①③　D.③④</ExampleOptions>
                <ExampleAnswer><b>解析：</b>①反射；④直线传播；②③均为折射（鱼缸/水层相当于透镜）。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>5. 声</BlockTitle>
              <PointList>
                <li>声音由物体<b>振动</b>产生；传播<b>需要介质</b>，真空不能传声。</li>
                <li>三要素：<b>音调</b>（频率决定）、<b>响度</b>（振幅决定）、<b>音色</b>（材料与结构决定）。</li>
                <li>「闻其声知其人」＝音色；「震耳欲聋」＝响度；「男高音」＝音调。</li>
                <li>声速：固体 ＞ 液体 ＞ 气体（金属中最快）。</li>
                <li>人耳可听：<b>20 Hz ~ 20 kHz</b>；声音强度用<b>分贝（dB）</b>衡量。</li>
                <li><b>超声波</b>（＞20 kHz）：方向性好、能量集中——测距、清洗、碎石、杀菌、B 超、声呐。</li>
                <li><b>次声波</b>（＜20 Hz）：传播远、穿透强、可绕过障碍——灾害预警、核爆监测。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题56 · 声学（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列关于声音的说法错误的是：</ExampleQuestion>
                <ExampleOptions>A.声音在固体中的传播速度大于在液体中<br />B.超声波方向性好，可用于碎石、清洗、测距<br />C.声音的传播与温度和介质有关<br />D.「高音刺耳」是因为声音的响度发生了变化</ExampleOptions>
                <ExampleAnswer><b>解析：</b>D 错。「高音」指<b>音调</b>高（频率高），不是响度。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
