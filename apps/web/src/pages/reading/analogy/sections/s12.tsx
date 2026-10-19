import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, Example, ExampleAnswer, ExampleBody, ExampleHeader, ExampleOptions, ExampleQuestion, PointList } from '@/components/content'

/**
 * 三 · 4 命名方式
 *
 * @returns 该节正文。
 */
export default function S14(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 含义与判断标准</BlockTitle>
              <Callout variant="key"><b>判断标准：</b>看事物<b>为什么叫这个名字</b>（命名的依据）。</Callout>
              <Callout variant="formula">
                <span className="formula">示例</span>　办公桌（用途）　放大镜（功能）　蝴蝶结（外形）　蒲公英（特征）
              </Callout>
            </Block>
            <Block>
              <BlockTitle>2. 什么时候会考命名方式</BlockTitle>
              <PointList>
                <li><b>① 全异关系的二级辨析</b>：清蒸鲈鱼：凉拌黄瓜（都在用「烹饪方式 + 食材」命名）</li>
                <li><b>② 交叉关系的二级辨析</b>：国产灯：蘑菇灯：护眼灯（来源 / 外形 / 功能，三个不同命名角度）</li>
                <li><b>③ 多个不相干的事物</b>：花生壳：核桃仁（都是「所属整体事物 + 部位」）</li>
              </PointList>
            </Block>
            <Block>
              <BlockTitle>3. 主要考哪些命名依据（背下来）</BlockTitle>
              <div className="pair">
                <span>外形 → 蝴蝶结</span><span>功能 → 护城河</span>
                <span>行为 → 啄木鸟</span><span>颜色 → 绿豆</span>
                <span>制作方法 → 水煮鱼</span><span>制作工具 → 小笼包</span>
                <span>所属整体事物 → 苹果皮</span><span>材料 → 羽毛扇</span>
                <span>人物 → 东坡肉</span><span>特征 → 夜来香</span>
                <span>位置 → 门帘</span>
              </div>
            </Block>
            <Example>
              <ExampleHeader>📝 例题 1 · 交叉关系的命名角度<span className="src">2024 省考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>国产灯：蘑菇灯：护眼灯</ExampleQuestion>
                <ExampleOptions><span>A. 社区公园：迷你公园：主题公园</span><span>B. 上皮细胞：扁平细胞：生殖细胞</span><span>C. 自制玩偶：人形玩偶：装饰玩偶</span><span>D. 水生植物：喜阴植物：防风植物</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>三个词都以「灯」为核心，分别按<b>来源（国产）、外形（蘑菇）、功能（护眼）</b>命名 → 交叉关系 + 三个命名角度。<br />
                  C「自制玩偶（来源）、人形玩偶（外形）、装饰玩偶（功能）」三个角度与题干完全对应 → 一致；<br />
                  A 是服务对象、规模、功能；B 是位置、形状、功能；D 是生长环境、习性、功能——角度都与题干不完全吻合。<br />
                  <span className="correct">答案：C</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
            <Example>
              <ExampleHeader>📝 例题 2 · 所属整体事物 + 部位<span className="src">2024 国考</span></ExampleHeader>
              <ExampleBody>
                <ExampleQuestion>花生壳：核桃仁</ExampleQuestion>
                <ExampleOptions><span>A. 刺梨汁：桃花扇</span><span>B. 丝瓜络：石榴籽</span><span>C. 杏仁露：葡萄皮</span><span>D. 葛根茶：芡实粉</span></ExampleOptions>
                <ExampleAnswer>
                  <b>解析：</b>花生壳是花生的壳、核桃仁是核桃的仁 → 命名方式都是「<b>植物名 + 天然部位</b>」。<br />
                  B 丝瓜络是丝瓜的络、石榴籽是石榴的籽 → 命名方式一致；<br />
                  A「桃花扇」与桃花无关；C「杏仁露」「葡萄皮」一个不含杏仁、一个含葡萄皮；D 葛根、芡实都是植物但「粉」「茶」是加工品。<br />
                  <span className="correct">答案：B</span>
                </ExampleAnswer>
              </ExampleBody>
            </Example>
    </>
  )
}
