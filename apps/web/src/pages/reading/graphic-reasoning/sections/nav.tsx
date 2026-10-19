import type { ReactElement } from 'react'
import { Block, BlockTitle, Callout, DataTable, PointList } from '@/components/content'

/**
 * 总览 · 学习地图（3+3 体系）
 *
 * @returns 该节正文。
 */
export default function S1(): ReactElement {
  return (
    <>
      <Block>
              <BlockTitle>1. 一句话记住「3+3」</BlockTitle>
              <Callout variant="key">
                拿到一道图推，先问自己一句 —— <b>「图形像不像？」</b><br />
                · <b>像</b>（有一样的图案）→ 看 <b>位置 / 样式 / 标记</b>（3 类）；<br />
                · <b>不像</b>（没有一样的图案）→ 看 <b>属性 / 数量 / 图形间位置</b>（3 类）。<br />
                <b>3 + 3 = 两条大道、六个路口、三十多个考点。</b>
              </Callout>
              <DataTable>
                <tr><th>分支</th><th>什么时候走</th><th>往下看什么</th><th>本页章节</th></tr>
                <tr><td>位置规律</td><td>图形<b>完全一样</b>，只是挪了地方</td><td>平移 / 旋转 / 翻转（定方向 + 数步长）</td><td><a href="#s1">一</a></td></tr>
                <tr><td>样式规律</td><td>图形<b>部分一样</b>（线条、轮廓重合）</td><td>加减同异 / 黑白运算</td><td><a href="#s2">二</a></td></tr>
                <tr><td>标记</td><td>图上有<b>小黑点、箭头、特殊线条</b></td><td>标记点 / 标记线 / 功能元素</td><td><a href="#s2">二</a></td></tr>
                <tr><td>属性规律</td><td>图形<b>各不相同</b>、风格统一</td><td>对称性 / 曲直性 / 开闭性</td><td><a href="#s3">三</a></td></tr>
                <tr><td>数量规律</td><td>图形<b>很乱</b>、没规律可循</td><td>面 → 线 → 点 → 笔画 → 元素 → 直角</td><td><a href="#s4">四</a> <a href="#s5">五</a></td></tr>
                <tr><td>图形间位置</td><td>图形<b>不止一个</b>，凑在一起</td><td>相离 / 包含 / 相交（含相接的细分）</td><td><a href="#s3">三</a></td></tr>
                <tr><td>空间类</td><td>出现<b>立体图、展开图、剖面</b></td><td>六面体 / 四面体 / 三视图 / 截面 / 立体拼合</td><td><a href="#s6">六</a> <a href="#s7">七</a> <a href="#s8">八</a></td></tr>
                <tr><td>特殊题型</td><td>不规则轮廓、拼合、折纸</td><td>公共边排除 / 找特殊 / 平移拼合</td><td><a href="#s9">九</a></td></tr>
              </DataTable>
            </Block>
            <Block>
              <BlockTitle>2. 复习路线（按这个顺序学）</BlockTitle>
              <PointList>
                <li><b>第 1 步 · 打底</b>：先学<a href="#s1">位置</a>与<a href="#s2">样式</a>—— 这两类最直观、最容易上手，也是「像」分支的全部。</li>
                <li><b>第 2 步 · 主力</b>：<a href="#s4">数量（面 / 线 / 点）</a>是图推考得最多的一块，必须刷透；接着补<a href="#s5">笔画、元素、直角</a>。</li>
                <li><b>第 3 步 · 属性兜底</b>：<a href="#s3">属性规律</a>看着简单，但它是「想不出规律时」的第一落点。</li>
                <li><b>第 4 步 · 立体</b>：<a href="#s6">六面体 + 四面体</a>是国省考常客（每年必考），<a href="#s7">三视图</a>、<a href="#s8">立体拼合</a>次之。</li>
                <li><b>第 5 步 · 查漏</b>：<a href="#s9">不规则 / 平面拼合 / 折纸</a> 属特殊题型，考前过一遍即可。</li>
                <li><b>收尾</b>：用<a href="#s10">思维导图串讲</a>把整个体系串起来，考前只看这一页复盘。</li>
              </PointList>
              <Callout variant="tip">
                本页 <b>128 道例题全部来自刘义恒「3+2」命题思维十讲</b>，
                每道题都标注了来源年份与省份，图形全部重新手绘为矢量图（手机放大不失真）。
              </Callout>
            </Block>
    </>
  )
}
