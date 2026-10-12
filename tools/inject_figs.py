#!/usr/bin/env python3
"""把例题截图按 data-id 插入到图推页对应卡片的 card-a 末尾。"""
import re, sys, os

PAGE = 'pages/graphic-reasoning/index.html'
IMG = '../../assets/note-img/graph/'

# data-id -> [(文件名(不含.webp), 图注), ...]
ASSIGN = {
    # ── 样式规律（必修2 P16-18）──
    'sty1': [('ex-yangshi-1', '遍历与加减同异 · 作图特点 & 解题思路（原笔记 P16）'),
             ('ex-yangshi-2', '求异和相减 + 加减同异 · 基础小结（原笔记 P16）')],
    'sty2': [('ex-yangshi-bg',  '加减同异（拔高）：破解出题者"小心思"（原笔记 P17）'),
             ('ex-yangshi-sum', '加减同异 · 拔高小结 + 真题（原笔记 P18）')],
    'sty3': [('ex-heibai-1',    '黑白运算 · 作图特点 / 解题思路 / 提速技巧（原笔记 P19）'),
             ('ex-heibai-2',    '如何区分"黑白运算"与"加减同异"（原笔记 P19）'),
             ('ex-heibai-sum',  '黑白运算 · 小结 + 真题（原笔记 P20）')],
    # ── 标记规律（必修2 P21-22）──
    'mar1': [('ex-biaoji-1',    '功能元素 · 基础（原笔记 P21）'),
             ('ex-biaoji-2',    '功能元素 · 拔高（原笔记 P21）')],
    'mar2': [('ex-biaoji-sum',  '标记 · 小结 + 真题（原笔记 P22）')],
    # ── 属性规律（必修3 P23-28）──
    'pro1': [('ex-duichen-1',   '对称性 · 基础（原笔记 P24）')],
    'pro2': [('ex-duichen-2',   '对称性 · 破解小心思（原笔记 P25）'),
             ('ex-duichen-bg',  '对称性 · 拔高（原笔记 P26）')],
    'pro3': [('ex-quzhi',       '曲直性 · 基础与拔高（原笔记 P27）')],
    'pro4': [('ex-shuxing-sum', '属性规律 · 本节总结（原笔记 P28）')],
    # ── 图形间关系（必修3 P29-32）──
    'rel1': [('ex-guanxi-1',    '图形间关系 · 基础（原笔记 P29）'),
             ('ex-guanxi-2',    '图形间关系 · 拔高（原笔记 P29）')],
    'rel2': [('ex-guanxi-3',    '图形间关系 · 破解小心思（原笔记 P30）')],
    'rel3': [('ex-guanxi-4',    '图形间关系 · 小结（原笔记 P31）'),
             ('ex-guanxi-sum',  '图形间关系 · 总纲（原笔记 P32）')],
    # ── 数量规律（必修4 P33-40）──
    'qua1': [('ex-mian-1',      '面数量 · 基础（原笔记 P34）'),
             ('ex-mian-2',      '面数量 · 「6+6」考点（原笔记 P35）'),
             ('ex-mian-sum',    '面数量 · 小结 + 真题（原笔记 P36）')],
    'qua2': [('ex-xian-1',      '线数量 · 基础（原笔记 P37）'),
             ('ex-xian-2',      '线数量 · 拔高（原笔记 P38）')],
    'qua3': [('ex-dian-1',      '点数量 · 基础（原笔记 P39）'),
             ('ex-dian-2',      '点数量 · 破解小心思（原笔记 P40）')],
    # ── 数量规律（必修5 P41-47）──
    'qua6': [('ex-bihua-a',     '第五节总纲 + 笔画 · 基础（原笔记 P41）'),
             ('ex-bihua-b',     '笔画 · 奇点判定（原笔记 P41）'),
             ('ex-bihua-2',     '笔画 · 破解小心思（原笔记 P42）'),
             ('ex-bihua-sum',   '笔画 · 小结（原笔记 P43）')],
    'qua5': [('ex-yuansu-1',    '元素 · 基础（原笔记 P44）'),
             ('ex-yuansu-sum',  '元素 · 生活化小结（原笔记 P45）')],
    'qua4': [('ex-jiao-1',      '角数量（直角）· 基础（原笔记 P46）'),
             ('ex-jiao-2',      '直角 · 破解小心思（原笔记 P47）')],
    'qua7': [('ex-shuliang-1',  '第四节数量规律 · 总纲（原笔记 P33）'),
             ('ex-shuliang-2',  '数量规律 · 锁定考点（原笔记 P33）')],
    # ── 空间重构（必修6 P48-55）──
    'sp1': [('ex-liumian-a',    '第六节总纲 + 六面体 · 基础（原笔记 P48）'),
            ('ex-liumian-b',    '六面体解题三步走（原笔记 P48）')],
    'sp3': [('ex-liumian-2',    '箭头法（原笔记 P49）')],
    'sp4': [('ex-liumian-3',    '公共边 · 真实测评（原笔记 P50）')],
    'sp5': [('ex-liumian-4',    '公共点（原笔记 P51）'),
            ('ex-liumian-5',    '画边法（原笔记 P52）')],
    'sp2': [('ex-liumian-sum',  '六面体 · 小结（原笔记 P53）')],
    'sp6': [('ex-simianti',     '四面体（原笔记 P54）'),
            ('ex-kongjian-sum', '空间 · 小结（原笔记 P55）')],
    # ── 黑白块（26 版专项）──
    'bw1': [('ex-biaoji-2',     '黑白块 · 考点与标记（原笔记 P19/P21）')],
}


def fig(name, cap):
    return (f'\n        <figure><img loading="lazy" src="{IMG}{name}.webp"'
            f' alt="{cap}" data-zoom><figcaption>{cap}</figcaption></figure>')


def main():
    s = open(PAGE, encoding='utf-8').read()
    added, missing = 0, []

    # 逐个 data-id 处理：在该卡片的 </div>\n      <div class="card-actions"> 之前插入
    for cid, figs in ASSIGN.items():
        # 注意：必须插到 card-a 的 </div> 之前（否则 figure 落在卡片外，
        # 会绕过 .card-a figure img 的宽度约束，导致图片超出被 overflow:hidden 裁切）
        pat = re.compile(
            r'(<div class="card" data-id="' + re.escape(cid) + r'">.*?)'
            r'(\n      </div>\n      <div class="card-actions">)',
            re.S)
        m = pat.search(s)
        if not m:
            missing.append(cid); continue
        ins = ''.join(fig(n, c) for n, c in figs)
        # 检查素材存在
        for n, _ in figs:
            if not os.path.exists(f'assets/note-img/graph/{n}.webp'):
                print(f'  ⚠️ 素材缺失: {n}.webp')
        s = s[:m.end(1)] + ins + s[m.end(1):]
        added += len(figs)
        print(f'  ✅ {cid:8s} +{len(figs)} 张')

    open(PAGE, 'w', encoding='utf-8').write(s)
    print(f'\n共插入 {added} 张')
    if missing:
        print('未匹配到卡片:', missing)


if __name__ == '__main__':
    main()
