# -*- coding: utf-8 -*-
"""CHGIS（中国历史地理信息系统）数据下载器。

来源：Harvard DataVerse 仓库（官方分发，学术免费，禁止商用/再分发）。
    V6: https://dataverse.harvard.edu/dataverse/chgis_v6

用法：
    python tools/datasources/chgis_download.py --list         # 列出 DataVerse 上的数据集
    python tools/datasources/chgis_download.py --dataset 123  # 按 ID 下载某数据集
    python tools/datasources/chgis_download.py --version v6   # 快捷方式：V6 推荐数据集

产物：data/external/chgis/<dataset>/... （不打包入 git）

数据许可（CHGIS V6 官方声明）：
    "free for academic research, no commercial use, resale, or redistribution permitted"
    本项目仅用于学术研究可视化，只读本地，不打包、不再分发。
"""
import argparse
import json
import os
import sys
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
EXTERNAL = os.path.join(ROOT, "data", "external", "chgis")
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0) history-in-my-hand"}

# V6 推荐数据集（DataVerse 上 CHGIS V6 的已知内容；ID 以 --list 实查为准）
# 典型内容：时间序列地名 CSV、1911 政区 shapefile、海岸线/河流/高程图层
RECOMMENDED = {
    "v6": "CHGIS V6（2016）：政区时间序列 + 1911 切片 shapefile + 地名 CSV",
}


def _api(path):
    url = "https://dataverse.harvard.edu/api/" + path
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=60) as r:
        body = r.read().decode("utf-8", "replace")
    return json.loads(body)


def list_datasets():
    try:
        data = _api("dataverses/chgis_v6/contents")
        items = data.get("data", [])
        print("[chgis] DataVerse /chgis_v6 下的数据集：")
        for d in items:
            print("  - id=%s | %s | %s" % (d.get("id"), d.get("name"), d.get("type")))
        return items
    except Exception as e:
        print("[chgis] 无法访问 DataVerse API（%s）" % e)
        print("[chgis] 请浏览器打开 https://dataverse.harvard.edu/dataverse/chgis_v6 手动查看数据集 ID。")
        return []


def dataset_files(ds_id):
    try:
        data = _api("datasets/%s" % ds_id)
        latest = data["data"]["latestVersion"]
        files = latest.get("files", [])
        print("[chgis] 数据集 %s 包含 %d 个文件：" % (ds_id, len(files)))
        out = []
        for f in files:
            df = f.get("dataFile", {})
            name = df.get("filename", "?")
            size = df.get("filesize", 0)
            url = "https://dataverse.harvard.edu/api/access/datafile/%s" % df.get("id")
            print("  - %s (%.1f MB) %s" % (name, size / 1048576, url))
            out.append({"name": name, "url": url, "size": size})
        return out
    except Exception as e:
        print("[chgis] 获取数据集文件失败（%s）" % e)
        return []


def download_file(url, dest):
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    print("[chgis] 下载 → %s" % dest)
    tmp = dest + ".part"
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=120) as r, open(tmp, "wb") as f:
        total = int(r.headers.get("Content-Length") or 0)
        done = 0
        while True:
            chunk = r.read(1024 * 1024)
            if not chunk:
                break
            f.write(chunk)
            done += len(chunk)
            if total:
                sys.stdout.write("\r  %d%% (%d/%d MB)" % (done * 100 // total, done // 1048576, total // 1048576))
                sys.stdout.flush()
    sys.stdout.write("\n")
    os.replace(tmp, dest)
    print("[chgis] 完成：%s" % dest)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--list", action="store_true", help="列出 DataVerse V6 数据集")
    ap.add_argument("--dataset", type=int, help="按数据集 ID 下载全部文件")
    ap.add_argument("--version", choices=["v6"], help="快捷方式：下载 V6 推荐内容")
    args = ap.parse_args()

    os.makedirs(EXTERNAL, exist_ok=True)

    if args.list:
        list_datasets()
        return 0

    if args.dataset:
        files = dataset_files(args.dataset)
        for f in files:
            dest = os.path.join(EXTERNAL, str(args.dataset), f["name"])
            download_file(f["url"], dest)
        print("[chgis] 完成。注意：CHGIS 为学术免费、禁止商用/再分发，勿打包入库。")
        return 0

    if args.version == "v6":
        print("[chgis] %s" % RECOMMENDED["v6"])
        print("[chgis] 提示：先 --list 拿真实数据集 ID，再 --dataset <ID> 下载。")
        return 0

    ap.print_help()
    return 1


if __name__ == "__main__":
    sys.exit(main())
