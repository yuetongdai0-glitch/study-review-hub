import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 九、文化常识：诸子 · 科技 · 医学 · 称谓 · 建筑书画 · 戏曲节日
 *
 * @returns 该节正文。
 */
export default function S10(): ReactElement {
  return (
    <>
      <Callout variant="key">文化常识是「广而不深」，最有效的办法是<b>列表 + 表格对比</b>。本节的六张表，建议直接截图存手机，碎片时间刷。</Callout>
      
            <Block>
              <BlockTitle>1. 诸子百家</BlockTitle>
              <DataTable>
                <tr><th>流派</th><th>人物</th><th>主张 / 作品</th></tr>
                <tr><td>儒家</td><td>孔子（至圣）</td><td>《论语》；<b>仁、礼</b>，为政以德，有教无类、因材施教</td></tr>
                <tr><td></td><td>孟子（亚圣）</td><td>仁政、<b>民贵君轻</b>、性善论</td></tr>
                <tr><td></td><td>荀子（后圣）</td><td>礼法并用、天行有常、<b>君舟民水</b>、性恶论</td></tr>
                <tr><td>道家</td><td>老子</td><td>《道德经》；道是万物本源、<b>无为而治</b></td></tr>
                <tr><td></td><td>庄子</td><td>《庄子》；逍遥、<b>内圣外王</b></td></tr>
                <tr><td>墨家</td><td>墨子</td><td><b>兼爱、非攻、尚贤、节用</b></td></tr>
                <tr><td>法家</td><td>韩非</td><td>以法治国、中央集权专制（荀子学生）</td></tr>
                <tr><td></td><td>商鞅</td><td>重农抑商、严刑峻法、军功授爵</td></tr>
                <tr><td>兵家</td><td>孙武（兵圣）</td><td>《孙子兵法》——<b>世界上最早的军事著作</b></td></tr>
                <tr><td>名家</td><td>公孙龙</td><td>白马非马</td></tr>
                <tr><td>汉代儒学</td><td>董仲舒</td><td>罢黜百家独尊儒术、三纲五常</td></tr>
              </DataTable>
              <Callout variant="warn">「内圣外王」出自<b>庄子</b>，不是老子；「知己知彼」出自<b>孙武</b>的《孙子兵法》，不是孙膑（孙膑著《孙膑兵法》）。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题49 · 诸子百家（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列关于先秦诸子百家的叙述，不正确的是：</ExampleQuestion>
                <ExampleOptions>A.孙武是兵家思想代表人物<br />B.老子提出了「内圣外王」的治国思想<br />C.韩非是法家代表人物，是荀子的学生<br />D.墨家学派组织严密，创始人为墨翟</ExampleOptions>
                <ExampleAnswer><b>解析：</b>B 错。「内圣外王」是<b>庄子</b>的思想；老子主张无为而治。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 古代科技成就</BlockTitle>
              <PointList>
                <li>造纸术：<b>东汉蔡伦</b> 105 年改进（不是西汉）。</li>
                <li>印刷术：<b>北宋毕昇</b>发明活字印刷（胶泥），比欧洲早约 400 年。</li>
                <li>指南针：<b>北宋</b>开始应用于航海，南宋传入欧洲。</li>
                <li>火药：<b>唐朝</b>发明；南宋发明管形火器<b>「突火枪」</b>。</li>
                <li>农书：《氾胜之书》（最早农书）、《齐民要术》（北魏贾思勰，现存最早最完整）、《王祯农书》（元）、《农政全书》（明徐光启）。</li>
                <li>《梦溪笔谈》（北宋沈括）——「中国科学史上的里程碑」；《天工开物》（明末清初宋应星）——「17 世纪中国工艺百科全书」。</li>
                <li>历法：《太初历》（汉武帝，第一部较完整历书，正月为岁首、二十四节气入历）；《大明历》（祖冲之，首次引入<b>岁差</b>）；《大衍历》（唐僧一行，实测子午线）；《授时历》（元郭守敬）。</li>
                <li>干支：天干 10（甲乙丙丁戊己庚辛壬癸）、地支 12；纪年法萌芽于西汉初、通行于东汉后。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题50 · 古代科技（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于我国古代科技成就，下列说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.汉武帝时制定《太初历》，首次把二十四节气定于历法<br />B.祖冲之创制《大明历》，正式把二十四节气定于历法<br />C.僧一行制订《大衍历》，首次引入「岁差」概念<br />D.郭守敬编《授时历》，用科学方法实测地球子午线长度</ExampleOptions>
                <ExampleAnswer><b>解析：</b>B 错，节气入历是《太初历》；C 错，岁差由<b>《大明历》</b>引入；D 错，实测子午线是<b>僧一行</b>。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 古代医学</BlockTitle>
              <DataTable>
                <tr><th>人物 / 著作</th><th>朝代</th><th>关键词</th></tr>
                <tr><td>扁鹊</td><td>战国</td><td>望闻问切四诊法；《难经》；<b>医祖、脉学之宗</b></td></tr>
                <tr><td>华佗</td><td>东汉末</td><td>麻沸散、五禽戏；<b>外科鼻祖</b></td></tr>
                <tr><td>张仲景</td><td>东汉末</td><td>《伤寒杂病论》，确立<b>辨证论治</b>；<b>医圣</b></td></tr>
                <tr><td>孙思邈</td><td>唐</td><td>《千金方》，首倡妇儿科分立；<b>药王</b></td></tr>
                <tr><td>宋慈</td><td>南宋</td><td>《洗冤集录》，<b>世界法医学鼻祖</b></td></tr>
                <tr><td>《黄帝内经》</td><td>战国</td><td>最早医学典籍；「不治已病治未病」</td></tr>
                <tr><td>《神农本草经》</td><td>东汉</td><td>第一部完整药物学著作</td></tr>
                <tr><td>《唐本草》</td><td>唐高宗</td><td><b>世界上最早的由国家颁行的药典</b></td></tr>
                <tr><td>《本草纲目》</td><td>明 · 李时珍</td><td>总结 16 世纪以前医药学；「东方医药巨典」</td></tr>
              </DataTable>
              <Callout variant="tip">传统医学四大经典：《黄帝内经》《难经》《神农本草经》《伤寒杂病论》。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题51 · 古代医学（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列人物与称号对应正确的是：</ExampleQuestion>
                <ExampleOptions>A.华佗——医圣<br />B.张仲景——药王<br />C.孙思邈——外科鼻祖<br />D.扁鹊——医祖</ExampleOptions>
                <ExampleAnswer><b>解析：</b>华佗＝外科鼻祖；张仲景＝<b>医圣</b>；孙思邈＝<b>药王</b>；扁鹊＝医祖/脉学之宗。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 古代称谓（年龄 + 别称）</BlockTitle>
              <DataTable>
                <tr><th>年龄称谓</th><th>岁数</th><th>年龄称谓</th><th>岁数</th></tr>
                <tr><td>垂髫</td><td>三四岁至八九岁</td><td>不惑</td><td>四十</td></tr>
                <tr><td>总角</td><td>八九岁至十三四岁</td><td>知天命</td><td>五十</td></tr>
                <tr><td>豆蔻年华</td><td>女子十三四岁</td><td>耳顺 / 花甲</td><td>六十</td></tr>
                <tr><td>束发</td><td>十五岁左右（男）</td><td>古稀</td><td>七十</td></tr>
                <tr><td>及笄</td><td>女子十五</td><td>耄耋</td><td>八九十</td></tr>
                <tr><td>弱冠</td><td>男子二十</td><td>而立</td><td>三十</td></tr>
              </DataTable>
              <PointList>
                <li>月亮：银钩、玉钩、玉轮、银盘、蟾宫、桂宫、广寒、婵娟、望舒。</li>
                <li>百姓：黎民、黔首、布衣、庶民、苍生；故乡：<b>桑梓</b>；朝廷：庙堂；绘画：丹青；音乐：丝竹。</li>
                <li>女性：巾帼；男性：须眉；生女：弄瓦之喜；生男：弄璋之喜；俘虏：南冠；行医：悬壶；出嫁：于归；送别：折柳。</li>
                <li>兄弟排行：伯（孟）、仲、叔、季。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题52 · 古代称谓（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列诗文中不包含月亮别称的是：</ExampleQuestion>
                <ExampleOptions>A.古曜半升箕斗隐，金乌起灭海山头<br />B.万丈广寒难得到，嫦娥今夜落谁家<br />C.谁为须张烛，凉空有望舒<br />D.但愿人长久，千里共婵娟</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 中「金乌」是<b>太阳</b>的别称，不是月亮。广寒、望舒、婵娟均为月亮别称。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>5. 古代建筑与书画</BlockTitle>
              <PointList>
                <li><b>北京故宫</b>：明清皇宫，明成祖始建，世界现存规模最大最完整的古代木构建筑群；外朝三大殿＝太和殿、中和殿、保和殿；内廷后三宫＝乾清宫、交泰殿、坤宁宫。</li>
                <li><b>天坛</b>：明清祭天祈谷之所，北圆南方（天圆地方），核心建筑祈年殿。</li>
                <li><b>承德避暑山庄</b>：康熙始建，历经康雍乾三朝，中国现存最大古代皇家园林。</li>
                <li><b>布达拉宫</b>：松赞干布初建，现存主体为五世达赖时重建，红宫宗教、白宫政治生活。</li>
                <li><b>赵州桥</b>：隋李春设计，世界现存年代最久、跨度最大、保存最完整的<b>单孔敞肩石拱桥</b>。</li>
                <li><b>苏州园林</b>：以<b>拙政园</b>、留园为代表，「文人写意山水园」典范；<b>四大名园</b>＝拙政园、留园、颐和园、承德避暑山庄。</li>
                <li><b>四大名楼</b>：山西<b>鹳雀楼</b>、江西<b>滕王阁</b>、湖北<b>黄鹤楼</b>、湖南<b>岳阳楼</b>。</li>
          <li><b>建筑元素（五个必辨）</b>：<b>华表</b>＝宫殿陵墓前的装饰性巨大石柱；<b>牌楼</b>＝用于表彰、纪念、装饰、标识和导向；<b>水榭</b>＝建于水边或水上的亭台；<b>影壁</b>（照壁）＝门外正对大门作屏障的墙壁；<b>城阙</b>＝城门两旁的瞭望阁楼。</li>
                <li>汉字七体：甲骨文、金文、小篆、隶书、草书、楷书、行书；六书：象形、指事、会意、形声、转注、假借。</li>
                <li>书法：王羲之「书圣」《兰亭序》＝天下第一行书；颜真卿《祭侄文稿》＝第二；苏轼《寒食帖》＝第三；楷书四家＝欧阳询、颜真卿、柳公权、赵孟頫；颠张醉素＝张旭、怀素；宋四家＝苏轼、黄庭坚、米芾、蔡襄。</li>
                <li><b>顾恺之</b>（东晋）：率先提出<b>「以形写神」</b>，被誉为<b>「才绝、画绝、痴绝」</b>；代表作《女史箴图》《洛神赋图》。</li>
                <li><b>展子虔</b>（隋）：被称为<b>「唐画之祖」</b>；《游春图》是<b>中国现存最古老的山水画</b>，开创<b>青绿山水</b>先河。</li>
                <li><b>阎立本</b>（唐）：《步辇图》《<b>历代帝王像</b>》。<b>吴道子</b>（唐）：「<b>画圣</b>」，「<b>吴带当风</b>」；《<b>地狱变相图</b>》《<b>送子天王图</b>》。</li>
                <li><b>韩滉</b>《五牛图》＝中国现存最古老的<b>纸本</b>中国画；<b>顾闳中</b>《韩熙载夜宴图》；<b>张择端</b>《清明上河图》（画北宋都城东京＝汴京，今开封）；<b>王希孟</b>《千里江山图》；<b>黄公望</b>《富春山居图》＝「画中之兰亭」；<b>郑板桥</b>一生只画<b>兰、竹、石</b>。</li>
                <li>绘画三分类：按题材＝<b>人物画、山水画、花鸟画</b>（<b>人物画出现最早</b>）；按技法＝<b>工笔</b>（求形神兼备，如《千里江山图》）与<b>写意</b>（重神似，如《富春山居图》）。</li>
                <li>书法工具：毛笔讲<b>「尖、齐、圆、健」四德</b>；生宣吸水适合写意、熟宣经胶矾适合工笔；砚以<b>端砚、歙砚</b>最名贵。</li>
                <li>中国十大传世名画：《洛神赋图》《清明上河图》《富春山居图》《汉宫春晓图》《百骏图》《步辇图》《唐宫仕女图》《五牛图》《韩熙载夜宴图》《千里江山图》。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题53 · 建筑书画（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列关于我国著名古代建筑的描述，正确的一项是：</ExampleQuestion>
                <ExampleOptions>A.北京故宫始建于明成祖，天坛始建于明太祖<br />B.承德避暑山庄历经康熙、雍正、乾隆三朝建成<br />C.布达拉宫现存建筑主体保留了吐蕃时期原貌<br />D.赵州桥是唐代桥梁建筑技术的杰出代表</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 错，天坛也始建于<b>明成祖</b>；C 错，现存主体为<b>五世达赖</b>时期重建；D 错，赵州桥是<b>隋朝</b>。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>6. 戏曲与节日</BlockTitle>
              <PointList>
                <li>五大剧种：<b>京剧、越剧、黄梅戏、评剧、豫剧</b>；昆曲被誉为<b>「百戏之祖」</b>。</li>
                <li>京剧：乾隆年间<b>四大徽班进京</b>标志形成；唱念做打；行当生旦净丑；四大名旦<b>梅兰芳、尚小云、程砚秋、荀慧生</b>。</li>
                <li>脸谱：红＝忠勇（关羽）；黑＝刚直（包拯、张飞）；白＝奸诈（曹操）；蓝＝刚强；黄＝凶猛；金银＝神怪。</li>
                <li>越剧（浙江嵊州，才子佳人，《梁祝》）；黄梅戏（湖北黄梅起源、安徽安庆壮大，《天仙配》《女驸马》）；豫剧（河南，第一大地方剧种，《花木兰》《穆桂英挂帅》）。</li>
                <li>节日：<b>除夕</b>（腊月三十晚，年夜饭、守岁）、春节（正月初一，元日/桃符/屠苏）、元宵（正月十五，赏灯）、寒食（清明前一二日，禁烟火）、清明（踏青插柳）、端午（五月初五，粽子龙舟）、七夕（七月初七，乞巧）、中秋（八月十五）、重阳（九月初九，登高插茱萸）。</li>
                <li>诗词标志词：元日/桃符/屠苏＝春节；元夕/灯火＝元宵；汨罗/楚江/艾草＝端午；玉盘/桂花＝中秋；登高/茱萸/黄花＝重阳。</li>
          <li><b>茶</b>：<b>茶圣陆羽</b>著《茶经》（世界现存最早、最完整的茶学专著）；<b>国际茶日 5 月 21 日</b>；分类＝<b>绿茶、白茶、黄茶、红茶、乌龙茶、黑茶、再加工茶</b>；<b>绿茶工艺＝采摘→摊晾→杀青→揉捻→干燥</b>（红茶多<b>发酵</b>、黄茶多<b>闷黄</b>、白茶<b>少杀青</b>）；<b>生普</b>未经发酵（茶性较烈）、<b>熟普</b>发酵后（温和）。</li>
              </PointList>
              <Callout variant="tip"><b>「金吾不禁夜，玉漏莫相催」写的是元宵</b>（取消宵禁），不是寒食——这是最高频的节日坑。</Callout>
            </Block>
            <Example>
              <ExampleHeader>📝 例题54 · 节日（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列诗句内容与传统节日对应错误的是：</ExampleQuestion>
                <ExampleOptions>A.「金吾不禁夜，玉漏莫相催」——寒食节<br />B.「彩缕碧筠粽，香粳白玉团」——端午节<br />C.「此生此夜不长好，明月明年何处看」——中秋节<br />D.「桂花香馅裹胡桃，江米如珠井水淘」——元宵节</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 错。「金吾不禁夜」指元宵节取消宵禁，写的是<b>元宵</b>。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
