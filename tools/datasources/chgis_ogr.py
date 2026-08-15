# -*- coding: utf-8 -*-
"""CHGIS MapInfo TAB → GeoJSON 转换器（OGR/GDAL 版，点+面全量）。

为何不用纯 Python：CHGIS 界线（polygon）的坐标在 .MAP 二进制里，
纯 Python 难解析且易错；GDAL/OGR 自带 MapInfo 驱动，一条 ogr.Open
即可读点（治所/村镇）和面（政区界线），坐标、投影、编码全部自动处理。

依赖：隔离 venv 内 `pipwin install GDAL`（自带 gdalXXX.dll，无需系统 GDAL）。

用法：
    python tools/datasources/chgis_ogr.py                 # 转换全部
    python tools/datasources/chgis_ogr.py --list          # 只列目录/表
    python tools/datasources/chgis_ogr.py --dir "1911 县级治所"
    python tools/datasources/chgis_ogr.py --only-polygon  # 只转界线面

产物：
    data/external/chgis/converted_ogr/all.geojson          # 全量合并（点+面）
    data/external/chgis/converted_ogr/<目录>/<TAB名>.geojson

数据许可：CHGIS 学术免费、禁止商用/再分发。产物在 data/external/（gitignore）。
"""
import argparse
import glob
import json
import os
import sys
import warnings

from osgeo import ogr

warnings.filterwarnings("ignore", category=FutureWarning)  # GDAL 4.0 将默认开异常

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
FUDAN = os.path.join(ROOT, "data", "external", "chgis", "fudan")
OUT = os.path.join(ROOT, "data", "external", "chgis", "converted_ogr")


def dataset_of(dirname):
    """从来源目录名（如 '1820 省级界线' / 'T-S 政权界线'）提取数据集标记。"""
    s = dirname.strip()
    if s.startswith("T-") or s.startswith("t-"):
        return "T-S"
    head = s.split()[0] if s.split() else s
    if head in ("1820", "1911"):
        return head
    return s  # 未知前缀：原样保留


def convert_tab(tab_path, dataset=None):
    """用 OGR 读单个 .TAB → (features, err)。容错：.MAP 损坏等跳过坏要素。
    若提供 dataset，则给每个要素写入 CHGIS_DS 字段（用于前端按 1820/1911/T-S 筛选）。"""
    ds = ogr.Open(tab_path)
    if ds is None:
        return None, "ogr.Open 失败（TAB 引用文件缺失/损坏）"
    lyr = ds.GetLayer(0)
    if lyr is None:
        return None, "图层为空"
    feats = []
    lyr.ResetReading()
    while True:
        try:
            f = lyr.GetNextFeature()
        except Exception as e:  # 个别坏记录
            print("    ! 要素读取异常: %s" % e)
            break
        if f is None:
            break
        geom = f.GetGeometryRef()
        if geom is None:
            f.Destroy()
            continue
        try:
            gj = json.loads(geom.ExportToJson())
        except Exception as e:
            print("    ! 几何导出失败: %s" % e)
            f.Destroy()
            continue
        props = {}
        for i in range(f.GetFieldCount()):
            fd = f.GetFieldDefnRef(i)
            val = f.GetField(i)
            if isinstance(val, bytes):
                try:
                    val = val.decode("utf-8", "replace")
                except Exception:
                    val = val.decode("gbk", "replace")
            props[fd.GetName()] = val
        if dataset:
            props["CHGIS_DS"] = dataset
        feats.append({"type": "Feature", "geometry": gj, "properties": props})
        f.Destroy()
    ds = None
    return feats, None


def geom_type_of(feats):
    types = set(f["geometry"]["type"] for f in feats if f.get("geometry"))
    return types


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--list", action="store_true")
    ap.add_argument("--dir", help="只处理指定目录，如 --dir \"1911 县级治所\"")
    ap.add_argument("--only-polygon", action="store_true",
                    help="只转含面的表（政区界线）")
    args = ap.parse_args()

    if not os.path.isdir(FUDAN):
        print("[chgis_ogr] 未找到 %s（先跑 chgis_fudan.py --all 下载解压）" % FUDAN)
        return 1

    dirs = sorted(d for d in os.listdir(FUDAN)
                  if os.path.isdir(os.path.join(FUDAN, d)))
    if args.list:
        print("[chgis_ogr] %d 个目录：" % len(dirs))
        for d in dirs:
            tabs = glob.glob(os.path.join(FUDAN, d, "*.TAB"))
            print("  - %s (%d 表)" % (d, len(tabs)))
        return 0

    targets = [d for d in dirs if not args.dir or args.dir in d]
    if not targets:
        print("[chgis_ogr] 无匹配目录。")
        return 1

    os.makedirs(OUT, exist_ok=True)
    all_feats = []
    summary = []
    n_poly = 0

    for d in targets:
        out_dir = os.path.join(OUT, d)
        ds_tag = dataset_of(d)
        for tab in sorted(glob.glob(os.path.join(FUDAN, d, "*.TAB"))):
            name = os.path.basename(tab)[:-4]
            feats, err = convert_tab(tab, dataset=ds_tag)
            if err:
                print("[chgis_ogr] ✗ %s/%s: %s" % (d, name, err))
                summary.append("%s/%s: 跳过（%s）" % (d, name, err))
                continue
            if not feats:
                summary.append("%s/%s: 0 要素" % (d, name))
                continue
            gtypes = geom_type_of(feats)
            is_poly = any(t in ("Polygon", "MultiPolygon") for t in gtypes)
            if args.only_polygon and not is_poly:
                continue
            if is_poly:
                n_poly += 1
            os.makedirs(out_dir, exist_ok=True)
            with open(os.path.join(out_dir, name + ".geojson"),
                      "w", encoding="utf-8") as f:
                json.dump({"type": "FeatureCollection", "features": feats},
                          f, ensure_ascii=False)
            all_feats.extend(feats)
            summary.append("%s/%s: %d 要素 %s" % (d, name, len(feats), sorted(gtypes)))

    if all_feats:
        tmp = os.path.join(OUT, "all.geojson.tmp")
        with open(tmp, "w", encoding="utf-8") as f:
            json.dump({"type": "FeatureCollection", "features": all_feats},
                      f, ensure_ascii=False)
        os.replace(tmp, os.path.join(OUT, "all.geojson"))  # 原子替换，避免半成品

    print("[chgis_ogr] 完成：%d 要素（其中面表 %d 个），合并 all.geojson"
          % (len(all_feats), n_poly))
    for s in summary:
        print("  - %s" % s)
    print("[chgis_ogr] 产物目录：%s" % OUT)
    return 0


if __name__ == "__main__":
    sys.exit(main())
