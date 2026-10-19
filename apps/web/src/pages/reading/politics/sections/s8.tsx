import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 八、文学常识
 *
 * @returns 该节正文。
 */
export default function S9(): ReactElement {
  return (
    <>
      <Callout variant="key">文学题的考法：<b>作者—朝代—作品—名句</b>四要素随机对应。背的时候一定「四人一组」背，不要单背作品名。</Callout>
      
            <Block>
              <BlockTitle>1. 先秦：《诗经》与《楚辞》</BlockTitle>
              <PointList>
                <li>《诗经》：我国<b>第一部诗歌总集</b>，收西周初至春秋中叶诗歌 <b>305 篇</b>，开创<b>现实主义</b>源头。</li>
                <li><b>诗经六义</b>：<b>风、雅、颂</b>（内容分类）＋ <b>赋、比、兴</b>（表现手法）。<br />
                  <span className="sub-point">风＝周代各地歌谣；雅＝周人正声雅乐（小雅、大雅）；颂＝宗庙祭祀乐歌（周颂、鲁颂、商颂）。赋＝铺陈直叙；比＝以彼物比此物；兴＝先言他物以引起所咏之词。</span></li>
                <li>风＝各地民歌（《关雎》《硕鼠》《蒹葭》）；雅＝正声雅乐（《鹿鸣》《采薇》）；颂＝宗庙祭祀乐歌（《清庙》）。</li>
                <li>赋＝铺陈直叙；比＝打比方；兴＝<b>先言他物以引起所咏之词</b>（多在全诗开头）。</li>
                <li>《楚辞》：西汉<b>刘向</b>辑录屈原、宋玉等人辞赋而成，我国第一部<b>浪漫主义</b>诗歌总集。</li>
                <li>屈原：浪漫主义文学奠基人、辞赋之祖；《离骚》是我国<b>第一首长篇政治抒情诗</b>。</li>
                <li>「风骚」＝《诗经·国风》＋《楚辞·离骚》。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题43 · 诗经楚辞（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.「路曼曼其修远兮，吾将上下而求索」出自《诗经》<br />B.《诗经》是中国最早的一部浪漫主义诗歌总集<br />C.《诗经》分风、雅、颂三类，其中「颂」指宫廷正乐<br />D.火星探测器「天问一号」的名称源于《楚辞·天问》</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 错，出自屈原《离骚》；B 错，《诗经》是<b>现实主义</b>源头；C 错，「颂」是<b>宗庙祭祀</b>乐歌，宫廷正乐是「雅」。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>2. 魏晋诗歌与唐宋八大家</BlockTitle>
              <PointList>
                <li><b>三曹</b>：曹操（《短歌行》《观沧海》《龟虽寿》，建安风骨）、曹丕（《燕歌行》最早完整七言诗；《典论·论文》第一部系统文学批评专论）、曹植（《洛神赋》《七步诗》，才高八斗）。</li>
                <li><b>陶渊明</b>：东晋，第一位<b>田园</b>诗人，「古今隐逸诗人之宗」；《饮酒》《归园田居》《桃花源记》《归去来兮辞》。</li>
                <li><b>谢灵运</b>：第一位自觉以<b>山水</b>入诗的诗人。</li>
                <li>唐宋八大家：唐二家<b>韩愈、柳宗元</b>；宋六家<b>欧阳修、苏轼、苏洵、苏辙、王安石、曾巩</b>。</li>
                <li>韩愈：<b>八大家之首</b>，「文起八代之衰」，主张<b>「文以载道」</b>；《师说》《祭十二郎文》《马说》。</li>
                <li>柳宗元：《永州八记》《捕蛇者说》《黔之驴》；<b>第一位把寓言写成独立文学作品的作家</b>。</li>
                <li>欧阳修：号醉翁、六一居士；《醉翁亭记》《卖油翁》。王安石：号半山；《伤仲永》《游褒禅山记》；列宁称其「十一世纪中国最伟大的改革家」。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题44 · 唐宋八大家（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列关于「唐宋八大家」及其代表作品的表述，正确的是：</ExampleQuestion>
                <ExampleOptions>A.柳宗元是宋代古文运动的代表人物，世称「柳河东」<br />B.韩愈被苏轼誉为「文起八代之衰」，提出「文以载道」<br />C.王安石号「醉翁」，代表作《醉翁亭记》<br />D.欧阳修与韩愈、柳宗元共同倡导了唐代古文运动</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 错，柳宗元是<b>唐代</b>人（唐二家之一）；C 错，醉翁是<b>欧阳修</b>；D 错，欧阳修倡导的是<b>宋代</b>古文运动。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>3. 唐诗：按「初盛中晚」记人</BlockTitle>
              <DataTable>
                <tr><th>时期</th><th>人物 · 称号</th><th>必背作品 / 名句</th></tr>
                <tr><td>初唐</td><td><b>初唐四杰</b>：王勃、杨炯、卢照邻、骆宾王（王勃为首，「诗杰」）</td><td>《滕王阁序》落霞与孤鹜齐飞；《送杜少府之任蜀州》海内存知己</td></tr>
                <tr><td>盛唐</td><td><b>王维</b>「诗佛」；<b>李白</b>「诗仙」；<b>杜甫</b>「诗圣」</td><td>大漠孤烟直；飞流直下三千尺；「三吏三别」、《望岳》</td></tr>
                <tr><td>中唐</td><td><b>白居易</b>「诗魔/诗王」；<b>刘禹锡</b>「诗豪」</td><td>《长恨歌》《琵琶行》；《陋室铭》《乌衣巷》</td></tr>
                <tr><td>晚唐</td><td><b>杜牧</b>、<b>李商隐</b>（「小李杜」）</td><td>《清明》《阿房宫赋》；《锦瑟》《夜雨寄北》，创「无题」诗</td></tr>
              </DataTable>
              <PointList>
                <li>杜甫诗被称为<b>「诗史」</b>；「三吏」＝石壕吏、新安吏、潼关吏；「三别」＝新婚别、无家别、垂老别。</li>
                <li>白居易与元稹倡导<b>新乐府运动</b>，主张「文章合为时而著，歌诗合为事而作」。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题45 · 唐诗（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>被称为「诗仙」「诗圣」「诗魔」的三位唐代诗人分别是：</ExampleQuestion>
                <ExampleOptions>A.李白、杜甫、白居易<br />B.杜甫、李白、李贺<br />C.李白、白居易、刘禹锡<br />D.白居易、刘禹锡、李贺</ExampleOptions>
                <ExampleAnswer><b>解析：</b>诗仙＝李白，诗圣＝杜甫，诗魔/诗王＝白居易；刘禹锡是「诗豪」。<br /><span className="correct">答案：A</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>4. 宋词：两派四家</BlockTitle>
              <PointList>
                <li><b>豪放派</b>：苏轼（开创者）、辛弃疾、陆游。苏轼号东坡居士，「三苏」＝苏洵、苏轼、苏辙。</li>
                <li>辛弃疾：号稼轩，「词中之龙」，与苏轼并称「苏辛」，与李清照并称「济南二安」；<b>第一次把金戈铁马之声带入词</b>。</li>
                <li><b>婉约派</b>：柳永、李清照、秦观、晏殊。</li>
                <li>柳永：第一位对宋词<b>全面革新</b>的词人，两宋创用词调最多；「奉旨填词柳三变」。</li>
                <li>李清照：号易安居士，创<b>「易安体」</b>，「千古第一才女」，称「三瘦」词人。</li>
                <li>秦观：「苏门四学士」之一（黄庭坚、秦观、晁补之、张耒），《鹊桥仙》。</li>
                <li>名句归属：<b>「人比黄花瘦」→ 李清照</b>；「樯橹灰飞烟灭」→ 苏轼《念奴娇·赤壁怀古》（写<b>赤壁之战</b>）；「枯藤老树昏鸦」→ <b>马致远</b>（元曲）。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题46 · 宋词（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于宋词，下列说法正确的是：</ExampleQuestion>
                <ExampleOptions>A.「人比黄花瘦」是韦应物的名句<br />B.「奉旨填词」的是柳永<br />C.「樯橹灰飞烟灭」写的是官渡之战<br />D.秦观是「豪放派」的代表人物</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 是<b>李清照</b>；C 写<b>赤壁之战</b>；D 秦观属<b>婉约派</b>。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>5. 元曲与明清戏曲</BlockTitle>
              <PointList>
                <li>元曲四大家：<b>关汉卿、白朴、郑光祖、马致远</b>。</li>
                <li>关汉卿「曲圣」：《窦娥冤》《拜月亭》《单刀会》。</li>
                <li>马致远「曲状元」：《汉宫秋》；小令《天净沙·秋思》被誉为<b>「秋思之祖」</b>。</li>
                <li>白朴：《梧桐雨》《墙头马上》；郑光祖：《倩女离魂》。</li>
                <li>王实甫《西厢记》：首次正面提出「愿普天下有情人都成眷属」。</li>
                <li><b>元曲四大悲剧</b>：《窦娥冤》《汉宫秋》《梧桐雨》《赵氏孤儿》。</li>
                <li>汤显祖「东方莎士比亚」，「临川四梦」＝《牡丹亭》《紫钗记》《南柯记》《邯郸记》。</li>
                <li>清：洪昇《长生殿》、孔尚任《桃花扇》（「借离合之情，写兴亡之感」）；二者合称<b>清代戏曲双璧</b>。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题47 · 元曲戏曲（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>关于文学作品与其作者，下列对应不正确的是：</ExampleQuestion>
                <ExampleOptions>A.《桃花扇》——孔尚任<br />B.《西厢记》——王实甫<br />C.《牡丹亭》——汤显祖<br />D.《汉宫秋》——关汉卿</ExampleOptions>
                <ExampleAnswer><b>解析：</b>D 错，《汉宫秋》是<b>马致远</b>的作品；关汉卿代表作是《窦娥冤》。<br /><span className="correct">答案：D</span></ExampleAnswer>
              </ExampleBody>
            </Example>
      
            <Block>
              <BlockTitle>6. 古代小说与史学著作</BlockTitle>
              <PointList>
                <li>雏形：《搜神记》（东晋干宝，<b>志怪</b>小说，开创神话小说先河）；《世说新语》（南朝宋刘义庆，最早<b>志人</b>小说集）。</li>
                <li><b>明代四大奇书</b>：《水浒传》《三国演义》《西游记》《金瓶梅》；<b>四大名著</b>＝四大奇书去掉《金瓶梅》换成《红楼梦》。</li>
                <li>《水浒传》施耐庵：第一部用古白话写成的歌颂农民起义的长篇章回小说。</li>
                <li>《三国演义》罗贯中：<b>第一部长篇历史小说</b>，章回体开山之作；「文不甚深，言不甚俗」。</li>
                <li>《西游记》吴承恩：浪漫主义神魔小说；鲁迅评「神魔皆有人情，精魅亦通世故」。</li>
                <li>《金瓶梅》兰陵笑笑生：第一部<b>文人独立创作</b>的章回体长篇小说，四大奇书之首。</li>
                <li>《红楼梦》曹雪芹：原名《石头记》，「封建社会的百科全书」；「字字看来皆是血，十年辛苦不寻常」出自其《回前诗》。</li>
                <li>《聊斋志异》蒲松龄：文言短篇小说巅峰；《儒林外史》吴敬梓：长篇讽刺小说（范进中举）。</li>
                <li>史书体裁：<b>编年体</b>《春秋》（孔子，第一部编年体）、《左传》（第一部叙事详细编年体）、《资治通鉴》（第一部编年体通史）；<b>纪传体</b>《史记》（第一部纪传体通史）、《汉书》（第一部纪传体断代史）；<b>国别体</b>《国语》。</li>
                <li>《史记》＝十二本纪、三十世家、七十列传、十表、八书；鲁迅评「史家之绝唱，无韵之离骚」；史学双璧＝《史记》《资治通鉴》；前四史＝《史记》《汉书》《后汉书》《三国志》。</li>
              </PointList>
            </Block>
            <Example>
              <ExampleHeader>📝 例题48 · 小说史书（小黑母题）</ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>下列关于我国古典文学名著的表述，正确的一项是：</ExampleQuestion>
                <ExampleOptions>A.《搜神记》是我国最早的文言志人小说集<br />B.《金瓶梅》被誉为明代四大奇书之首，是第一部由文人独立创作的长篇小说<br />C.《聊斋志异》是蒲松龄创作的长篇章回体神魔小说<br />D.《儒林外史》是明代吴敬梓创作的讽刺小说</ExampleOptions>
                <ExampleAnswer><b>解析：</b>A 错，《搜神记》是<b>志怪</b>；C 错，是<b>文言短篇</b>小说集；D 错，吴敬梓是<b>清代</b>。<br /><span className="correct">答案：B</span></ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
