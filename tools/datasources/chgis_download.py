# -*- coding: utf-8 -*-
"""CHGIS（中国历史地理信息系统）数据批量下载器。

来源：Harvard DataVerse 官方仓库（学术免费，禁止商用/再分发）。
    V6: https://dataverse.harvard.edu/dataverse/chgis_v6

用法：
    python tools/datasources/chgis_download.py --list          # 列出 DataVerse 上的全部数据集
    python tools/datasources/chgis_download.py --all           # 批量下载全部数据集（推荐）
    python tools/datasources/chgis_download.py --ids 123,456   # 只下指定 ID 的数据集
    python tools/datasources/chgis_download.py --resume        # 只补下未完成的数据集

产物：data/external/chgis/<dataset_id>/<files> （不打包入 git）
特性：断点续传（.part + Range）、每文件 3 次重试、全部完成后可重跑 --resume 补漏。

数据许可（CHGIS V6 官方声明）：
    "free for academic research, no commercial use, resale, or redistribution permitted"
    本项目仅用于学术研究可视化，只读本地，不打包、不再分发。
"""
import argparse
import json
import os
import sys
import time
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
EXTERNAL = os.path.join(ROOT, "data", "external", "chgis")
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0) history-in-my-hand"}
RETRIES = 3


def _api(path):
    url = "https://dataverse.harvard.edu/api/" + path
    for attempt in range(1, RETRIES + 1):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=60) as r:
                body = r.read().decode("utf-8", "replace")
            return json.loads(body)
        except Exception as e:
            print("[chgis] API 第 %d/%d 次失败: %s" % (attempt, RETRIES, e))
            if attempt < RETRIES:
                time.sleep(3)
    raise RuntimeError("DataVerse API 访问失败（已重试 %d 次）" % RETRIES)


def _walk_dataverse(alias, depth=0):
    """递归遍历 dataverse（含子 dataverse），返回全部 dataset 列表。"""
    out = []
    data = _api("dataverses/%s/contents" % alias)
    for item in data.get("data", []) or []:
        t = item.get("type", "")
        if t == "dataset":
            out.append(item)
        elif t == "dataverse":
            sub = item.get("alias")
            if sub and sub != alias:
                print("[chgis]   %s%s/（子仓库，递归）" % ("  " * depth, item.get("name")))
                out.extend(_walk_dataverse(sub, depth + 1))
    return out


def list_datasets():
    print("[chgis] 遍历 DataVerse /chgis_v6（含子仓库）…")
    datasets = _walk_dataverse("chgis_v6")
    print("[chgis] 共发现 %d 个数据集：" % len(datasets))
    for d in datasets:
        print("  - id=%s | %s" % (d.get("id"), d.get("name")))
    return datasets


def dataset_files(ds_id):
    data = _api("datasets/%s/versions/latest" % ds_id)
    latest = data["data"]["latestVersion"]
    files = latest.get("files", [])
    out = []
    for f in files:
        df = f.get("dataFile", {})
        name = df.get("filename", "?")
        size = df.get("filesize", 0)
        url = "https://dataverse.harvard.edu/api/access/datafile/%s" % df.get("id")
        out.append({"name": name, "url": url, "size": size})
    return out


def download_file(url, dest, retries=RETRIES):
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    tmp = dest + ".part"
    resume = os.path.getsize(tmp) if os.path.exists(tmp) else 0
    if resume:
        print("[chgis]   续传 %s（已有 %d MB）" % (os.path.basename(dest), resume // 1048576))
    for attempt in range(1, retries + 1):
        try:
            req = urllib.request.Request(url, headers=UA)
            if resume:
                req.add_header("Range", "bytes=%d-" % resume)
            with urllib.request.urlopen(req, timeout=120) as r, open(tmp, "ab") as f:
                total = int(r.headers.get("Content-Length") or 0) + resume
                done = resume
                while True:
                    chunk = r.read(1024 * 1024)
                    if not chunk:
                        break
                    f.write(chunk)
                    done += len(chunk)
                    if total:
                        pct = done * 100 // total
                        sys.stdout.write("\r    %d%% (%d/%d MB)   " % (pct, done // 1048576, total // 1048576))
                        sys.stdout.flush()
            sys.stdout.write("\n")
            os.replace(tmp, dest)
            return True
        except Exception as e:
            print("\n[chgis]   %s 第 %d 次失败: %s" % (os.path.basename(dest), attempt, e))
            if attempt < retries:
                print("[chgis]   5 秒后重试…")
                time.sleep(5)
    return False


def download_dataset(ds_id, name=""):
    print("[chgis] === 数据集 %s %s ===" % (ds_id, name))
    try:
        files = dataset_files(ds_id)
    except Exception as e:
        print("[chgis] 跳过（获取文件列表失败: %s）" % e)
        return 0
    ok = 0
    for f in files:
        dest = os.path.join(EXTERNAL, str(ds_id), f["name"])
        if os.path.exists(dest):
            print("[chgis]   已存在，跳过 %s" % f["name"])
            ok += 1
            continue
        print("[chgis]   %s (%.1f MB)" % (f["name"], f["size"] / 1048576))
        if download_file(f["url"], dest):
            ok += 1
    print("[chgis] 数据集 %s 完成：%d/%d 文件" % (ds_id, ok, len(files)))
    return ok


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--list", action="store_true", help="列出全部数据集（不下载）")
    ap.add_argument("--all", action="store_true", help="批量下载全部数据集")
    ap.add_argument("--ids", help="只下指定 ID 列表，逗号分隔，如 --ids 123,456")
    ap.add_argument("--resume", action="store_true", help="只补下未完成的数据集（断点续传模式）")
    args = ap.parse_args()

    os.makedirs(EXTERNAL, exist_ok=True)

    if args.list:
        list_datasets()
        return 0

    if args.all or args.resume:
        datasets = list_datasets()
        total_ok = 0
        for d in datasets:
            total_ok += download_dataset(d.get("id"), d.get("name"))
        print("\n[chgis] 全部完成：成功 %d 文件。注意：CHGIS 学术免费、禁商用/再分发，勿打包入库。" % total_ok)
        return 0

    if args.ids:
        ids = [x.strip() for x in args.ids.split(",") if x.strip()]
        for i in ids:
            download_dataset(i)
        print("\n[chgis] 完成。")
        return 0

    ap.print_help()
    return 1


if __name__ == "__main__":
    sys.exit(main())
