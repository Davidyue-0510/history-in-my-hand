# -*- coding: utf-8 -*-
"""CHGIS MapInfo TAB → GeoJSON 转换器（纯 Python，无需 GDAL）。

背景：CHGIS 复旦镜像数据是 MapInfo TAB 格式（.TAB 表定义 + .DAT dBase III 属性）。
      .DAT 里直接含 X_COOR/Y_COOR 经纬度（治所/村镇等点要素）。
      界线（polygon）的坐标在 .MAP 二进制里，本次不解析（政区名+质心仍输出）。

用法：
    python tools/datasources/chgis_tab.py                    # 转换全部
    python tools/datasources/chgis_tab.py --list            # 只列目录清单
    python tools/datasources/chgis_tab.py --dir "1911 县级治所"

产物：
    data/external/chgis/converted/chgis_points.geojson      # 全量点要素合并
    data/external/chgis/converted/<目录>/<TAB名>.geojson    # 每表独立
    data/external/chgis/converted/政区清单.csv              # 界线表政区名+质心（质心多为0）

数据许可：CHGIS 学术免费、禁止商用/再分发。产物在 data/external/（gitignore）。
"""
import argparse
import glob
import json
import os
import struct
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
FUDAN = os.path.join(ROOT, "data", "external", "chgis", "fudan")
OUT = os.path.join(ROOT, "data", "external", "chgis", "converted")


def read_dbf(p):
    """读 dBase III .DAT → (字段列表, 记录列表)。编码 GBK（TAB charset WindowsSimpChinese）。"""
    with open(p, "rb") as f:
        h = f.read(32)
        nrec = struct.unpack("<I", h[4:8])[0]
        hlen = struct.unpack("<H", h[8:10])[0]
        rlen = struct.unpack("<H", h[10:12])[0]
        flds = []
        pos = 32
        while True:
            f.seek(pos)
            fd = f.read(32)
            if not fd or fd[0] == 0x0D:
                break
            flds.append((fd[0:11].decode("ascii", "replace").strip("\x00"),
                        chr(fd[11]), fd[16]))
            pos += 32
        f.seek(hlen)
        rows = []
        for _ in range(nrec):
            raw = f.read(rlen)
            if not raw or raw[0] not in (0x2A, 0x20):
                continue
            r = {}
            off = 1
            for name, t, ln in flds:
                val = raw[off:off + ln].decode("gbk", "replace").strip("\x00 ").strip()
                off += ln
                if t == "N":
                    try:
                        val = float(val)
                    except (ValueError, TypeError):
                        val = None
                r[name] = val
            rows.append(r)
        return flds, rows


def find_tab(dat_path):
    return dat_path[:-4] + ".TAB"


def is_point_table(tab_path):
    """粗判：TAB 里 X_COOR/Y_COOR 字段且几何为点（治所/村镇）。界线表也有这俩字段但质心 0。"""
    try:
        txt = open(tab_path, encoding="utf-8", errors="replace").read()
    except OSError:
        return False
    return "X_COOR" in txt and "Y_COOR" in txt


def convert_table(dat_path):
    """转换单个 .DAT → dict(name, flds, rows, points, has_geo)。"""
    flds, rows = read_dbf(dat_path)
    points = [r for r in rows if r.get("X_COOR") and r.get("Y_COOR")
              and r["X_COOR"] not in (0, None) and r["Y_COOR"] not in (0, None)]
    return {"name": os.path.basename(dat_path)[:-4],
            "flds": [f[0] for f in flds],
            "rows": rows, "points": points,
            "has_geo": len(points) > 0}


def to_geojson(meta):
    feats = []
    for r in meta["points"]:
        feats.append({
            "type": "Feature",
            "geometry": {"type": "Point",
                         "coordinates": [r["X_COOR"], r["Y_COOR"]]},
            "properties": {k: r[k] for k in meta["flds"] if k in r},
        })
    return {"type": "FeatureCollection", "features": feats}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--list", action="store_true", help="列出全部表")
    ap.add_argument("--dir", help="只转换指定目录，如 --dir \"1911 县级治所\"")
    args = ap.parse_args()

    if not os.path.isdir(FUDAN):
        print("[chgis] 未找到 %s（先跑 chgis_fudan.py --all 下载解压）" % FUDAN)
        return 1

    dirs = sorted(d for d in os.listdir(FUDAN)
                  if os.path.isdir(os.path.join(FUDAN, d)))
    if args.list:
        print("[chgis] %d 个目录：" % len(dirs))
        for d in dirs:
            n_dat = len(glob.glob(os.path.join(FUDAN, d, "*.DAT")))
            print("  - %s (%d 表)" % (d, n_dat))
        return 0

    targets = [d for d in dirs if not args.dir or args.dir in d]
    if not targets:
        print("[chgis] 无匹配目录。")
        return 1

    os.makedirs(OUT, exist_ok=True)
    all_feats = []
    admin_rows = []          # 界线表：政区名+质心（多为 0）
    summary = []

    for d in targets:
        for dat in sorted(glob.glob(os.path.join(FUDAN, d, "*.DAT"))):
            try:
                meta = convert_table(dat)
            except Exception as e:
                print("[chgis] ✗ %s 读取失败: %s" % (os.path.basename(dat), e))
                continue
            tab = find_tab(dat)
            if meta["has_geo"]:
                gj = to_geojson(meta)
                all_feats.extend(gj["features"])
                out_dir = os.path.join(OUT, d)
                os.makedirs(out_dir, exist_ok=True)
                with open(os.path.join(out_dir, meta["name"] + ".geojson"),
                          "w", encoding="utf-8") as f:
                    json.dump(gj, f, ensure_ascii=False)
                summary.append("%s: %d 点 → geojson" % (meta["name"], len(meta["points"])))
            else:
                # 界线表：只收政区名清单（质心多为 0，坐标在 .MAP）
                for r in meta["rows"]:
                    admin_rows.append({
                        "table": meta["name"],
                        "name_ch": r.get("NAME_CH"),
                        "name_py": r.get("NAME_PY"),
                        "x": r.get("X_COOR"), "y": r.get("Y_COOR"),
                        "type_ch": r.get("TYPE_CH"),
                        "begin": r.get("BEG_YR"), "end": r.get("END_YR"),
                    })
                summary.append("%s: 政区 %d 条（无坐标，质心表已收）"
                               % (meta["name"], len(meta["rows"])))

    # 全量合并
    if all_feats:
        with open(os.path.join(OUT, "chgis_points.geojson"),
                  "w", encoding="utf-8") as f:
            json.dump({"type": "FeatureCollection", "features": all_feats},
                      f, ensure_ascii=False)
    if admin_rows:
        import csv
        with open(os.path.join(OUT, "政区清单.csv"), "w", encoding="utf-8-sig",
                  newline="") as f:
            w = csv.DictWriter(f, fieldnames=list(admin_rows[0].keys()))
            w.writeheader()
            w.writerows(admin_rows)

    print("[chgis] 转换完成：%d 个点要素（合并 geojson %d 表），政区清单 %d 条"
          % (len(all_feats), sum(1 for s in summary if "点" in s), len(admin_rows)))
    for s in summary:
        print("  - %s" % s)
    print("[chgis] 产物目录：%s" % OUT)
    return 0


if __name__ == "__main__":
    sys.exit(main())
