# -*- coding: utf-8 -*-
"""
拉取真实高程数据，构建地形网格。

为什么这个脚本必须存在
────────────────────────
地形不能手绘。一旦地图上的山是「画着好看」的，整个项目就失去了
它唯一的立身之本——可核查。行军路线为什么走这里不走那里，是本项目
要回答的核心问题之一，而答案的物理基础必须是真实高程。

数据源：OpenTopoData 公共实例（ASTER GDEM v3，30m 原始分辨率）
授权：ASTER GDEM 由 NASA/METI 发布，可自由使用（需注明来源）
       https://lpdaac.usgs.gov/products/astgtmv003/

注意：我们只取网格采样值落盘，不再分发原始 DEM 瓦片。
      落盘产物 data/terrain/liaodong_grid.json 属于事实数据（高程测量值），
      不构成对原始数据集的再分发。

用法：
    python tools/fetch_terrain.py            # 增量拉取（已有的跳过）
    python tools/fetch_terrain.py --force    # 全部重拉
"""
import json
import os
import sys
import time
import urllib.request
import urllib.error

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
OUT_DIR = os.path.join(ROOT, 'data', 'terrain')
OUT_FILE = os.path.join(OUT_DIR, 'liaodong_grid.json')

# 与 demo 地图投影范围一致
LON0, LON1 = 122.0, 126.8
LAT0, LAT1 = 40.0, 43.3
STEP = 0.05          # 约 4.2km(经) × 5.5km(纬)，战役级地形足够
BATCH = 100          # OpenTopoData 单次上限
SLEEP = 1.15         # 公共实例限速 1 req/s，留余量
DATASET = 'aster30m'
API = 'https://api.opentopodata.org/v1/{ds}?locations={locs}'


def frange(a, b, step):
    out, x = [], a
    while x <= b + 1e-9:
        out.append(round(x, 4))
        x += step
    return out


def fetch_batch(points, retries=4):
    locs = '|'.join('{:.4f},{:.4f}'.format(la, lo) for la, lo in points)
    url = API.format(ds=DATASET, locs=locs)
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'vege-civilization/0.1'})
            with urllib.request.urlopen(req, timeout=60) as r:
                data = json.loads(r.read().decode('utf-8'))
            if data.get('status') != 'OK':
                raise RuntimeError('status=' + str(data.get('status')))
            return [x['elevation'] for x in data['results']]
        except Exception as e:
            wait = SLEEP * (2 ** attempt)
            print('    ! {} — {:.1f}s 后重试 ({}/{})'.format(e, wait, attempt + 1, retries),
                  file=sys.stderr)
            time.sleep(wait)
    raise RuntimeError('批次连续失败，放弃')


def main():
    force = '--force' in sys.argv
    os.makedirs(OUT_DIR, exist_ok=True)

    lons = frange(LON0, LON1, STEP)
    lats = frange(LAT0, LAT1, STEP)
    nx, ny = len(lons), len(lats)
    total = nx * ny

    cache = {}
    if os.path.exists(OUT_FILE) and not force:
        with open(OUT_FILE, 'r', encoding='utf-8') as f:
            old = json.load(f)
        if (old.get('lon0') == LON0 and old.get('step') == STEP
                and old.get('nx') == nx and old.get('ny') == ny):
            flat = old.get('elev', [])
            for i, v in enumerate(flat):
                if v is not None:
                    cache[i] = v
            print('复用已有 {} / {} 个采样点'.format(len(cache), total))

    # 行优先：index = iy * nx + ix
    todo = [i for i in range(total) if i not in cache]
    if not todo:
        print('网格已完整，无需拉取。')
    else:
        print('待拉取 {} 点，分 {} 批，预计 {:.0f} 秒'.format(
            len(todo), (len(todo) + BATCH - 1) // BATCH,
            (len(todo) + BATCH - 1) // BATCH * SLEEP))

    for bi in range(0, len(todo), BATCH):
        chunk = todo[bi:bi + BATCH]
        pts = [(lats[i // nx], lons[i % nx]) for i in chunk]
        vals = fetch_batch(pts)
        for i, v in zip(chunk, vals):
            cache[i] = v if v is not None else 0
        done = min(bi + BATCH, len(todo))
        print('  {}/{}  ({:.0f}%)'.format(done, len(todo), done / len(todo) * 100))
        time.sleep(SLEEP)

    elev = [cache.get(i) for i in range(total)]
    known = [v for v in elev if v is not None]

    out = {
        '_comment': '辽东战场高程网格。真实测量值，非示意。缺口以 null 表示。',
        '_source': 'ASTER GDEM v3 (NASA/METI), 经 OpenTopoData 公共实例采样',
        '_source_url': 'https://lpdaac.usgs.gov/products/astgtmv003/',
        '_note': '海面与水体在 ASTER 中常为 0 或负值，渲染时按 <=0 处理为水。',
        '_fetched_at': time.strftime('%Y-%m-%d'),
        'crs': 'EPSG:4326',
        'lon0': LON0, 'lat0': LAT0, 'step': STEP,
        'nx': nx, 'ny': ny,
        'order': 'row-major, iy from lat0 upward, ix from lon0 eastward',
        'unit': 'meter',
        'min': min(known) if known else None,
        'max': max(known) if known else None,
        'elev': elev
    }
    with open(OUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(out, f, ensure_ascii=False, separators=(',', ':'))

    size = os.path.getsize(OUT_FILE) / 1024
    print('\n写入 {}  ({:.0f} KB)'.format(os.path.relpath(OUT_FILE, ROOT), size))
    print('网格 {} × {} = {} 点，高程 {:.0f} — {:.0f} m'.format(
        nx, ny, total, out['min'], out['max']))


if __name__ == '__main__':
    main()
