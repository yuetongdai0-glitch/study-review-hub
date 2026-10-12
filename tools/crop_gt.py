#!/usr/bin/env python3
"""按内容块精确裁剪图推笔记截图。
用 numpy 找连续空白行切分内容块，避免截断/串页。
"""
import pymupdf
from PIL import Image
import io, os, sys, numpy as np

PDF = '临时资料/刘义恒丨26图推命题思维个人笔记（91页完整版）.pdf'
OUT = 'assets/note-img/graph'
os.makedirs(OUT, exist_ok=True)
d = pymupdf.open(PDF)


def blocks(pg, thr=245, min_h=25, gap=14):
    """返回该页的内容块 [(y0,y1), ...]（像素坐标）。"""
    p = d[pg - 1]
    pix = p.get_pixmap(matrix=pymupdf.Matrix(1, 1))
    im = Image.open(io.BytesIO(pix.tobytes('png'))).convert('L')
    a = np.array(im)
    rowsum = (a < thr).sum(axis=1)
    blank = rowsum < 3
    segs, start = [], None
    for y in range(len(blank)):
        if not blank[y] and start is None:
            start = y
        elif blank[y] and start is not None:
            if y - start >= min_h:
                segs.append((start, y))
            start = None
    if start is not None:
        segs.append((start, len(blank)))
    # 合并间距很小的块
    merged = []
    for s, e in segs:
        if merged and s - merged[-1][1] < gap:
            merged[-1] = (merged[-1][0], e)
        else:
            merged.append((s, e))
    return merged


def crop(pg, y0, y1, name, pad=18, width=1150):
    """裁剪 pg 页的 y0~y1 区间（像素），自动按内容宽度裁左右。"""
    p = d[pg - 1]
    pix = p.get_pixmap(matrix=pymupdf.Matrix(1, 1))
    im = Image.open(io.BytesIO(pix.tobytes('png'))).convert('L')
    a = np.array(im)
    band = a[int(y0):int(y1), :] < 245
    cols = np.where(band.any(axis=0))[0]
    if len(cols) == 0:
        print(f'  ⚠️ {name}: 该区间无内容，跳过'); return
    x0, x1 = max(0, int(cols.min()) - pad), min(im.width, int(cols.max()) + pad)
    zoom = width / (x1 - x0)
    pix2 = p.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), clip=pymupdf.Rect(x0, y0, x1, y1))
    img = Image.open(io.BytesIO(pix2.tobytes('png'))).convert('RGB')
    f = f'{OUT}/{name}.webp'
    img.save(f, 'WEBP', quality=86, method=6)
    print(f'  ✅ {name:24s} {str(img.size):14s} {os.path.getsize(f)//1024}KB  (P{pg})')


def auto(pg, n, prefix, width=1150, pad=18):
    """把一页自动切成 n 段（切点选最近的空白行，避免切断内容）。"""
    p = d[pg - 1]
    pix = p.get_pixmap(matrix=pymupdf.Matrix(1, 1))
    im = Image.open(io.BytesIO(pix.tobytes('png'))).convert('L')
    a = np.array(im)
    rowsum = (a < 245).sum(axis=1)
    blank = rowsum < 3
    H = im.height
    # 内容有效范围
    nz = np.where(~blank)[0]
    top, bot = int(nz.min()), int(nz.max())
    # 均匀取 n-1 个理想切点，各自吸附到最近的空白行
    cuts = [top]
    for k in range(1, n):
        ideal = top + (bot - top) * k / n
        lo, hi = max(top, int(ideal - 260)), min(bot, int(ideal + 260))
        cand = [y for y in range(lo, hi) if blank[y]]
        cuts.append(cand[len(cand) // 2] if cand else int(ideal))
    cuts.append(bot + 1)
    for k in range(n):
        y0, y1 = cuts[k], cuts[k + 1]
        if y1 - y0 < 40:
            continue
        name = f'{prefix}-{k+1}' if n > 1 else prefix
        crop(pg, y0, y1, name, pad=pad, width=width)


if __name__ == '__main__':
    # 用法：python crop.py blocks <pg>      → 打印该页内容块
    #       python crop.py crop <pg> <y0> <y1> <name>
    if sys.argv[1] == 'auto':
        auto(int(sys.argv[2]), int(sys.argv[3]), sys.argv[4])
    elif sys.argv[1] == 'blocks':
        pg = int(sys.argv[2])
        print(f'P{pg} 内容块:')
        for s, e in blocks(pg):
            print(f'   y {s:6d}-{e:6d}  高 {e-s}')
    else:
        crop(int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4]), sys.argv[5])
