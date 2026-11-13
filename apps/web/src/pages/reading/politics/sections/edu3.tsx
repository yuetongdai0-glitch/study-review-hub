import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'
import { Memo, Mnemonic } from '../mem'

/**
 * 二十六、教育常识（三）教育法律法规
 *
 * @remarks 内容整理自「教育常识 2」讲义里的法规部分：教育法、义务教育法、
 * 教师法、未成年人保护法、预防未成年人犯罪法、家庭教育促进法、学生伤害事故处理办法。
 * @returns 该节正文。
 */
export default function Edu3(): ReactElement {
  return (
    <>
      <Callout variant="key">法规题的考法只有两种：<b>问「谁的责任 / 哪个部门」</b>和<b>问「数字与年龄」</b>。所以这一节全部按「<b>主体 + 数字 + 一个关键词</b>」来记，不背条文原文。</Callout>
      <Memo title="法规：五部法、五个必背数字" sub="法规题不需要通读条文，记住「哪部法管什么 + 几个硬数字」就能排除掉三个错项。">
        <Mnemonic
          title="六部法各管一件事"
          hot
          verse={<>教育法管<em>基本制度</em>，义务教育法管<em>九年</em>，教师法管<em>教师权利义务</em>，未保法管<em>六大保护</em>，预防法管<em>不良行为</em>，家庭教育促进法管<em>家长责任</em>。</>}
          note={<>做题先问「这件事归哪部法」，很多选项一看主体就错了（比如「学校开除学生」——义务教育阶段学校无权开除）。</>}
        />
        <Mnemonic
          title="四个硬数字"
          verse={<>义务教育<em>九年</em>；未满<em>十六周岁</em>不得脱离监护单独生活；撤销教师资格后<em>五年</em>内不得重新申请；教师申诉<em>三十日</em>内作出处理。</>}
          note={<>这四个数字几乎年年出现，选项里常改成「十四周岁」「三年」「十五日」。</>}
        />
      </Memo>

      <Block>
        <BlockTitle>1. 教育法：学校能做什么、不能做什么</BlockTitle>
        <PointList>
          <li>教育是<b>社会主义现代化建设的基础</b>，国家<b>优先发展</b>教育事业。</li>
          <li>学校组织师生参加社会公益活动的前提：<b>不影响正常的教育教学活动</b>。</li>
          <li>受教育者<b>义务</b>：遵守法律法规、遵守学生行为规范、尊敬师长、努力学习完成规定学习任务、遵守学校管理制度。</li>
          <li>学历证书 / 学位证书：由<b>颁发机构</b>（学校、学位授予单位）撤销；教育行政部门可宣布<b>无效</b>。</li>
          <li>受教育者对学校处理不服：可向教育行政部门<b>申诉</b>；教师申诉，教育行政部门应在 <b>30 日</b>内作出处理。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题140 · 参加公益活动的前提</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>根据《中华人民共和国教育法》，学校组织师生参加当地社会公益活动的前提是（　）。</ExampleQuestion>
          <ExampleOptions>A. 报教育行政部门批准　B. 不影响正常的教育教学活动　C. 征得家长同意　D. 学生自愿报名</ExampleOptions>
          <ExampleAnswer><b>解析：</b>教育法规定学校可组织师生参加社会公益活动，前提是<b>不影响正常教育教学活动</b>。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>2. 义务教育法：三件事最关键</BlockTitle>
        <PointList>
          <li><b>九年</b>义务教育，<b>免试、就近</b>入学，不收学费杂费。</li>
          <li><b>不得开除</b>学生；不得分设<b>重点班和非重点班</b>；不得对违反管理制度的学生<b>开除或变相开除</b>。</li>
          <li>县级以上人民政府及其教育行政部门应<b>缩小学校之间办学条件的差距</b>，促进学校<b>均衡发展</b>。</li>
          <li>教师应<b>尊重学生人格</b>，不得对学生实施<b>体罚、变相体罚</b>或者其他侮辱人格尊严的行为。</li>
        </PointList>
        <Callout variant="warn">看到「义务教育阶段学校把学生开除 / 劝退 / 停课」的选项，<b>一律错</b>——这是最高频的送分点。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题141 · 缩小办学条件差距</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>《义务教育法》规定，县级以上人民政府及其教育行政部门应当缩小学校之间办学条件的差距，促进学校（　）。</ExampleQuestion>
          <ExampleOptions>A. 均衡发展　B. 特色发展　C. 优先发展　D. 独立发展</ExampleOptions>
          <ExampleAnswer><b>解析：</b>缩小差距对应的法定表述是<b>均衡发展</b>。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>3. 教师法 &amp; 教师资格条例：权利、义务、撤销</BlockTitle>
        <DataTable>
          <tr><th>教师六项权利</th><th>教师六项义务</th></tr>
          <tr><td>教育教学权；科研学术交流权；<b>管理学生权</b>；获取报酬待遇权；民主管理权；进修培训权</td><td>遵纪守法；<b>为人师表</b>；关爱学生、尊重人格；制止有害学生行为；提高业务水平；参与学校民主管理</td></tr>
        </DataTable>
        <PointList>
          <li>「教师有为人师表的义务」体现教师职业的<b>示范性</b>。</li>
          <li>教师是履行教育教学职责的<b>专业人员</b>，国家实行<b>教师资格制度</b>。</li>
          <li><b>撤销</b>教师资格（弄虚作假骗取资格；品行不良、侮辱学生影响恶劣）→ <b>5 年内</b>不得重新申请。</li>
          <li><b>丧失</b>教师资格（被剥夺政治权利，或故意犯罪被判处有期徒刑以上）→ <b>不能重新取得</b>。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题142 · 撤销教师资格的情形</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>根据《教师资格条例》，下列哪种情形出现会<b>撤销</b>教师资格？（　）</ExampleQuestion>
          <ExampleOptions>A. 年度考核不合格　B. 品行不良、侮辱学生，影响恶劣　C. 未完成继续教育学时　D. 教学质量排名靠后</ExampleOptions>
          <ExampleAnswer><b>解析：</b>撤销教师资格的法定情形是「弄虚作假骗取资格」和「品行不良、侮辱学生影响恶劣」，撤销后 <b>5 年</b>内不得重新申请。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>4. 未成年人保护法：六大保护 + 三个数字</BlockTitle>
        <DataTable>
          <tr><th>六大保护</th><th>关键点</th></tr>
          <tr><td>家庭保护</td><td>监护人不得使未满 <b>16 周岁</b>的未成年人脱离监护<b>单独生活</b></td></tr>
          <tr><td>学校保护</td><td>不得违反规定<b>开除、变相开除</b>；不得体罚；突发事件<b>优先救护</b>未成年人</td></tr>
          <tr><td>社会保护</td><td>禁止在未成年人集中活动场所<b>吸烟、饮酒</b>；营业性娱乐场所不得接纳未成年人</td></tr>
          <tr><td>网络保护</td><td>防沉迷；不得为未成年人提供「打赏、充值」诱导</td></tr>
          <tr><td>政府保护</td><td>民政部门承担临时监护、长期监护</td></tr>
          <tr><td>司法保护</td><td>对违法犯罪未成年人：<b>教育、感化、挽救</b>的<b>方针</b>；<b>教育为主、惩罚为辅</b>的<b>原则</b></td></tr>
        </DataTable>
        <Callout variant="warn"><b>方针 ≠ 原则：</b>「教育、感化、挽救」是<b>方针</b>；「教育为主、惩罚为辅」是<b>原则</b>。选项经常把两个词对调。<br />另外：<b>审理时不满 18 周岁</b>的案件不公开审理；<b>犯罪记录封存</b>适用于<b>犯罪时不满 18 周岁、被判处五年有期徒刑以下刑罚</b>的。</Callout>
      </Block>
      <Example>
        <ExampleHeader>📝 例题143 · 突发事件优先救护谁</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>《未成年人保护法》规定，学校、幼儿园、托儿所和公共场所发生突发事件时，应当优先救护（　）。</ExampleQuestion>
          <ExampleOptions>A. 未成年人　B. 老年人　C. 妇女　D. 残疾人</ExampleOptions>
          <ExampleAnswer><b>解析：</b>法条明确写「优先救护<b>未成年人</b>」。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>5. 预防未成年人犯罪法：不良行为分级</BlockTitle>
        <DataTable>
          <tr><th>类别</th><th>典型表现</th><th>谁来管</th></tr>
          <tr><td><b>不良行为</b></td><td>旷课、夜不归宿、吸烟饮酒、沉迷网络、与社会不良人员交往</td><td>学校、父母管教</td></tr>
          <tr><td><b>严重不良行为</b></td><td>纠集他人结伙滋事、<b>多次</b>拦截殴打他人或强行索要财物、多次偷窃、参与赌博屡教不改、吸食注射毒品</td><td>公安 + 专门学校（<b>专门教育</b>）</td></tr>
          <tr><td><b>重新犯罪</b></td><td>已构成犯罪</td><td>司法程序</td></tr>
        </DataTable>
        <PointList>
          <li>父母对未成年人的预防犯罪教育负有<b>直接责任</b>；学校是<b>协助</b>，不是全责。</li>
          <li>学校可聘请<b>法治副校长、校外法治辅导员</b>；不得对学生<b>置之不理、开除、体罚</b>。</li>
          <li>对严重不良行为的未成年人，可送入<b>专门学校</b>接受专门教育，<b>不是工读劳教</b>。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题144 · 父母「不懂就不配合」</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>班主任要求家长配合「拒绝沉迷网络」教育，有家长说「自己不懂」拒绝配合。家长的做法（　）。</ExampleQuestion>
          <ExampleOptions>A. 不正确，父母对未成年人的预防犯罪教育负有直接责任　B. 不正确，学校负全责　C. 正确，学校不能推卸责任　D. 正确，父母没有这项责任</ExampleOptions>
          <ExampleAnswer><b>解析：</b>父母负<b>直接责任</b>，学校是协助，故家长不能以「不懂」推脱。<br /><span className="correct">答案：A</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <Block>
        <BlockTitle>6. 家庭教育促进法 &amp; 学生伤害事故</BlockTitle>
        <PointList>
          <li>《家庭教育促进法》：<b>立德树人</b>是家庭教育的<b>根本任务</b>；<b>父母或其他监护人负责实施</b>；国家和社会<b>提供指导、支持和服务</b>（不是代替家长教育）。</li>
          <li>「双减」写进该法：县级以上政府应减轻义务教育阶段学生<b>作业负担和校外培训负担</b>。</li>
          <li>《学生伤害事故处理办法》：学校<b>负有责任且情节严重</b>的，教育行政部门追究<b>行政责任</b>；责任人触犯刑律的，依法追究<b>刑事责任</b>。</li>
          <li>学校<b>已履行</b>相应职责、行为无不当的，<b>不承担</b>事故责任（如学生自行外出发生意外、学生特异体质学校不知情）。</li>
        </PointList>
      </Block>
      <Example>
        <ExampleHeader>📝 例题145 · 学校负责任的后果</ExampleHeader>
        <ExampleBody>
          <ExampleQuestion>发生学生伤害事故，学校负有责任且情节严重的，教育行政部门应当（　）。</ExampleQuestion>
          <ExampleOptions>A. 直接追究学校刑事责任　B. 追究学校及有关责任人员的行政责任　C. 责令学校自行赔偿了事　D. 由家长自行协商解决</ExampleOptions>
          <ExampleAnswer><b>解析：</b>《学生伤害事故处理办法》第 32 条：学校负有责任且情节严重 → 教育行政部门追究<b>行政责任</b>；符合刑事立案标准的才追究刑责。<br /><span className="correct">答案：B</span></ExampleAnswer>
        </ExampleBody>
      </Example>

      <div className="jingle">
        <div className="jt">教育法规 · 一句话总结</div>
        <b>先看主体（谁的责任），再看数字（9 年 / 16 岁 / 5 年 / 30 日），最后看禁区（不开除、不体罚、不侮辱、不推责）。</b>
      </div>
    </>
  )
}
