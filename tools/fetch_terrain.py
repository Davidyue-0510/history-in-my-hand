# -*- coding: utf-8 -*-
"""
拉取真实高程数据，构建地形网格。

为什么这个脚本必须存在
────────────────────────
地形不能手绘。一旦地图上的山是「画着好看」的，整个项目就失去了
它唯一的立身之本——可核查。行军路线为什么走这里不走那里，是本项目
要回答的核心问题之一，而答案的物理基础必须是真实高程。

v0.22：从「一张写死的辽东网格」改为「注册表驱动的多网格」
────────────────────────────────────────────────
在此之前，LON0/LAT0/STEP 是模块级常量，产物文件名写死 liaodong_grid.json。
想覆盖第二片区域，只能改源码——这正是全国扩展的三个阻塞点之一。
现在「有哪些网格」是数据（data/terrain/registry.json），本脚本只是执行器。

数据源：OpenTopoData 公共实例（ASTER GDEM v3，30m 原始分辨率）
授权：ASTER GDEM 由 NASA/METI 发布，可自由使用（需注明来源）
       https://lpdaac.usgs.gov/products/astgtmv003/

注意：我们只取网格采样值落盘，不再分发原始 DEM 瓦片。
      落盘产物属于事实数据（高程测量值），不构成对原始数据集的再分发。

用法：
    python tools/fetch_terrain.py --list                 # 列出注册的网格与状态
    python tools/fetch_terrain.py                        # 拉默认网格（增量）
    python tools/fetch_terrain.py --grid china_coarse    # 拉指定网格
    python tools/fetch_terrain.py --grid X --force       # 全部重拉
    python tools/fetch_terrain.py --grid X --estimate    # 只估算点数/耗时，不联网
    python tools/fetch_terrain.py --new tang_guanzhong \\
        --bbox 105.0,32.5,112.5,36.5 --step 0.05 --label 唐·关中
                                                         # 新建并注册一片区域
"""
import argparse
import json
import os
import sys
import time
import urllib.request
import urllib.error

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
OUT_DIR = os.path.join(ROOT, 'data', 'terrain')
REGISTRY = os.path.join(OUT_DIR, 'registry.json')

BATCH = 100          # OpenTopoData 单次上限
SLEEP = 1.15         # 公共实例限速 1 req/s，留余量
API = 'https://api.opentopodata.org/v1/{ds}?locations={locs}'


# ────────────────────────── 注册表 ──────────────────────────

def load_registry():
    with open(REGISTRY, 'r', encoding='utf-8') as f:
        return json.load(f)


def save_registry(reg):
    with open(REGISTRY, 'w', encoding='utf-8') as f:
        json.dump(reg, f, ensure_ascii=False, indent=2)
        f.write('\n')


def get_grid(reg, gid):
    grids = reg.get('grids', {})
    if gid not in grids:
        raise SystemExit('网格 %r 未注册。已注册：%s\n（用 --new 可新建一片区域）'
                         % (gid, ', '.join(grids) or '无'))
    g = dict(grids[gid])
    g['_id'] = gid
    g['_path'] = os.path.join(OUT_DIR, g['file'])
    return g


def default_grid_id(reg):
    return reg.get('default') or (list(reg.get('grids', {})) or [None])[0]


def grid_path(gid=None):
    """给 build.py / terrain_model 用：按 id（缺省=default）取产物绝对路径。"""
    reg = load_registry()
    return get_grid(reg, gid or default_grid_id(reg))['_path']


# ────────────────────────── 计算 ──────────────────────────

def frange(a, b, step):
    out, x = [], a
    while x <= b + 1e-9:
        out.append(round(x, 4))
        x += step
    return out


def axes(g):
    lon0, lat0, lon1, lat1 = g['bbox']
    return frange(lon0, lon1, g['step']), frange(lat0, lat1, g['step'])


def estimate(g):
    lons, lats = axes(g)
    n = len(lons) * len(lats)
    batches = (n + BATCH - 1) // BATCH
    return {
        'nx': len(lons), 'ny': len(lats), 'points': n,
        'batches': batches, 'seconds': batches * SLEEP,
        # 落盘按压缩 JSON 估，实测辽东 6499 点约 40KB
        'est_kb': round(n * 0.0062, 1),
    }


def fetch_batch(points, dataset, retries=4):
    locs = '|'.join('{:.4f},{:.4f}'.format(la, lo) for la, lo in points)
    url = API.format(ds=dataset, locs=locs)
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'vege-civilization/0.22'})
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


def fetch_grid(g, reg, force=False):
    os.makedirs(OUT_DIR, exist_ok=True)
    lons, lats = axes(g)
    nx, ny = len(lons), len(lats)
    total = nx * ny
    out_file = g['_path']

    cache = {}
    if os.path.exists(out_file) and not force:
        with open(out_file, 'r', encoding='utf-8') as f:
            old = json.load(f)
        if (old.get('lon0') == g['bbox'][0] and old.get('step') == g['step']
                and old.get('nx') == nx and old.get('ny') == ny):
            for i, v in enumerate(old.get('elev', [])):
                if v is not None:
                    cache[i] = v
            print('复用已有 {} / {} 个采样点'.format(len(cache), total))
        else:
            print('! 已有文件的网格参数与注册表不符，忽略缓存重拉')

    todo = [i for i in range(total) if i not in cache]
    if not todo:
        print('网格已完整，无需拉取。')
    else:
        est = estimate(g)
        print('待拉取 {} 点，分 {} 批，预计 {:.0f} 秒'.format(
            len(todo), (len(todo) + BATCH - 1) // BATCH,
            (len(todo) + BATCH - 1) // BATCH * SLEEP))
        del est

    failed = False
    for bi in range(0, len(todo), BATCH):
        chunk = todo[bi:bi + BATCH]
        pts = [(lats[i // nx], lons[i % nx]) for i in chunk]
        try:
            vals = fetch_batch(pts, g.get('dataset', 'aster30m'))
        except Exception as e:
            print('  !! 中断：%s' % e, file=sys.stderr)
            failed = True
            break
        for i, v in zip(chunk, vals):
            cache[i] = v if v is not None else 0
        done = min(bi + BATCH, len(todo))
        if (bi // BATCH) % 10 == 0 or done == len(todo):
            print('  {}/{}  ({:.0f}%)'.format(done, len(todo), done / len(todo) * 100),
                  flush=True)
        time.sleep(SLEEP)

    elev = [cache.get(i) for i in range(total)]
    known = [v for v in elev if v is not None]
    if not known:
        print('一个采样点都没拿到，不写空壳文件。', file=sys.stderr)
        return 1

    out = {
        '_comment': '%s 高程网格。真实测量值，非示意。缺口以 null 表示。' % g.get('label', g['_id']),
        '_grid_id': g['_id'],
        '_source': 'ASTER GDEM v3 (NASA/METI), 经 OpenTopoData 公共实例采样',
        '_source_url': 'https://lpdaac.usgs.gov/products/astgtmv003/',
        '_note': '海面与水体在 ASTER 中常为 0 或负值，渲染时按 <=0 处理为水。',
        '_fetched_at': time.strftime('%Y-%m-%d'),
        'crs': 'EPSG:4326',
        'lon0': g['bbox'][0], 'lat0': g['bbox'][1], 'step': g['step'],
        'nx': nx, 'ny': ny,
        'order': 'row-major, iy from lat0 upward, ix from lon0 eastward',
        'unit': 'meter',
        'min': min(known) if known else None,
        'max': max(known) if known else None,
        'elev': elev,
    }
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(out, f, ensure_ascii=False, separators=(',', ':'))

    # 注册表回写真实状态——拉了多少就是多少，不四舍五入成「完成」
    covered = len(known)
    status = 'fetched' if covered == total else 'partial'
    reg['grids'][g['_id']]['status'] = status
    reg['grids'][g['_id']]['points'] = total
    reg['grids'][g['_id']]['covered'] = covered
    reg['grids'][g['_id']]['fetched_at'] = out['_fetched_at']
    save_registry(reg)

    size = os.path.getsize(out_file) / 1024
    print('\n写入 {}  ({:.0f} KB)'.format(os.path.relpath(out_file, ROOT), size))
    print('网格 {} × {} = {} 点（已知 {}），高程 {:.0f} — {:.0f} m，状态 {}'.format(
        nx, ny, total, covered, out['min'], out['max'], status))
    return 1 if failed else 0


# ────────────────────────── CLI ──────────────────────────

def cmd_list(reg):
    print('高程网格注册表（默认：%s）\n' % default_grid_id(reg))
    for gid, g in reg.get('grids', {}).items():
        gg = dict(g); gg['_id'] = gid
        est = estimate(gg)
        exists = os.path.exists(os.path.join(OUT_DIR, g['file']))
        print('  %-14s %-14s %s' % (gid, g.get('label', ''), g.get('status', '?')))
        print('       bbox %s  step %s' % (g['bbox'], g['step']))
        print('       %d × %d = %d 点   预计拉取 %.0f 分钟   产物%s' % (
            est['nx'], est['ny'], est['points'], est['seconds'] / 60,
            '已在' if exists else '未落盘'))
    return 0


def main():
    ap = argparse.ArgumentParser(description='按注册表拉取高程网格')
    ap.add_argument('--grid', help='网格 id（缺省用注册表 default）')
    ap.add_argument('--list', action='store_true', help='列出所有注册网格')
    ap.add_argument('--estimate', action='store_true', help='只估算，不联网')
    ap.add_argument('--force', action='store_true', help='忽略缓存全部重拉')
    ap.add_argument('--new', metavar='ID', help='新建并注册一片区域')
    ap.add_argument('--bbox', help='配合 --new：lon0,lat0,lon1,lat1')
    ap.add_argument('--step', type=float, default=0.05, help='配合 --new：步长（度）')
    ap.add_argument('--label', default='', help='配合 --new：中文标签')
    ap.add_argument('--dataset', default='aster30m', help='配合 --new：数据集')
    ap.add_argument('--offline', action='store_true',
                    help='配合 --new：仅注册网格元数据、不联网拉取（离线/CI 用，status=not_fetched）')
    args = ap.parse_args()

    reg = load_registry()

    if args.list:
        return cmd_list(reg)

    if args.new:
        if not args.bbox:
            raise SystemExit('--new 需要 --bbox lon0,lat0,lon1,lat1')
        nums = [float(x) for x in args.bbox.split(',')]
        if len(nums) != 4:
            raise SystemExit('--bbox 需要四个数：lon0,lat0,lon1,lat1')
        if args.new in reg['grids']:
            raise SystemExit('网格 %r 已存在' % args.new)
        reg['grids'][args.new] = {
            'label': args.label or args.new,
            'file': '%s_grid.json' % args.new,
            'bbox': nums,
            'step': args.step,
            'dataset': args.dataset,
            'status': 'not_fetched',
            'note': '由 fetch_terrain.py --new 注册。',
        }
        save_registry(reg)
        print('已注册网格 %r' % args.new)
        g = get_grid(reg, args.new)
        est = estimate(g)
        print('  %d × %d = %d 点，预计 %.0f 分钟，落盘约 %.0f KB'
              % (est['nx'], est['ny'], est['points'], est['seconds'] / 60, est['est_kb']))
        if args.estimate:
            return 0
        args.grid = args.new

    if args.offline and args.new:
        # 离线/CI：只把网格元数据写进注册表（status=not_fetched），不发起任何联网拉取。
        # 真实高程由 build / 手动 fetch_terrain 后续补全，避免 gates 300s 单步超时被
        # 公共实例限速抖动误杀 world-gen smoke。
        print('offline 模式：仅注册网格 %r 元数据，跳过联网拉取（status=not_fetched）' % args.new)
        return 0

    gid = args.grid or default_grid_id(reg)
    g = get_grid(reg, gid)

    if args.estimate:
        est = estimate(g)
        print('%s（%s）' % (gid, g.get('label', '')))
        print('  bbox %s  step %s  dataset %s' % (g['bbox'], g['step'], g.get('dataset')))
        print('  %d × %d = %d 点，%d 批，预计 %.1f 分钟，落盘约 %.0f KB'
              % (est['nx'], est['ny'], est['points'], est['batches'],
                 est['seconds'] / 60, est['est_kb']))
        return 0

    print('拉取网格 %s（%s）' % (gid, g.get('label', '')))
    return fetch_grid(g, reg, force=args.force)


if __name__ == '__main__':
    sys.exit(main())
