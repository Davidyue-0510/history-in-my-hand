# -*- coding: utf-8 -*-
"""CBDB SQLite 数据库下载器。

用法：
    python tools/datasources/cbdb_download.py            # 拉最新版（读 latest.json）
    python tools/datasources/cbdb_download.py --check    # 只检查版本/是否存在，不下载
    python tools/datasources/cbdb_download.py --force    # 忽略已存在，强制重下

产物：
    data/external/cbdb/latest.json        # 版本元数据（日期/校验和/直链）
    data/external/cbdb/cbdb_YYYYMMDD.sqlite3  # 解压后的 SQLite 库（不打包入 git）

数据许可：CBDB 为哈佛/中研院/北大共建，非商用 / 不可再分发。
本项目只做「运行时下载 + 只读查询」，不把数据打包进仓库。
"""
import argparse
import hashlib
import json
import os
import sys
import urllib.request
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))          # 项目根
EXTERNAL = os.path.join(ROOT, "data", "external", "cbdb")
LATEST_JSON_URL = "https://raw.githubusercontent.com/cbdb-project/cbdb_sqlite/master/latest.json"
UA = {"User-Agent": "Mozilla/5.0 (history-in-my-hand cbdb adapter)"}


def latest_meta():
    req = urllib.request.Request(LATEST_JSON_URL, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode())


def download(url, dest, sha256=None, retries=3):
    print("[cbdb] 下载 %s → %s" % (url, dest))
    tmp = dest + ".part"
    for attempt in range(1, retries + 1):
        try:
            resume = os.path.getsize(tmp) if os.path.exists(tmp) else 0
            req = urllib.request.Request(url, headers=UA)
            if resume:
                req.add_header("Range", "bytes=%d-" % resume)
                print("[cbdb] 断点续传：从 %d 字节继续（第 %d 次尝试）" % (resume, attempt))
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
                        sys.stdout.write("\r  %d%% (%d/%d MB)" % (pct, done // 1048576, total // 1048576))
                        sys.stdout.flush()
            sys.stdout.write("\n")
            break  # 下载完成，退出重试循环
        except Exception as e:
            print("\n[cbdb] 第 %d 次尝试失败: %s" % (attempt, e))
            if attempt < retries:
                print("[cbdb] 5 秒后重试…")
                import time
                time.sleep(5)
            else:
                raise RuntimeError("下载失败（重试 %d 次）：%s。可重新运行本脚本断点续传。" % (retries, e))
    if sha256:
        print("[cbdb] 校验 SHA-256 ...")
        h = hashlib.sha256()
        with open(tmp, "rb") as f:
            for chunk in iter(lambda: f.read(1024 * 1024), b""):
                h.update(chunk)
        if h.hexdigest() != sha256:
            raise RuntimeError("SHA-256 不匹配，下载可能损坏：got %s want %s（删掉 .part 文件后重下）" % (h.hexdigest(), sha256))
    os.replace(tmp, dest)
    print("[cbdb] 完成: %s" % dest)


def unzip_sqlite(zip_path, dest_dir):
    with zipfile.ZipFile(zip_path) as z:
        members = [n for n in z.namelist() if n.endswith(".sqlite3") or n.endswith(".sqlite")]
        if not members:
            raise RuntimeError("zip 里找不到 .sqlite3 文件: %s" % z.namelist()[:10])
        name = members[0]
        out = os.path.join(dest_dir, os.path.basename(name))
        print("[cbdb] 解压 %s → %s" % (name, out))
        with z.open(name) as src, open(out, "wb") as dst:
            while True:
                chunk = src.read(1024 * 1024)
                if not chunk:
                    break
                dst.write(chunk)
        return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true", help="只检查最新版本与本地状态")
    ap.add_argument("--force", action="store_true", help="强制重下")
    args = ap.parse_args()

    os.makedirs(EXTERNAL, exist_ok=True)
    meta = latest_meta()
    fname = meta["sqlite_filename"]
    url = meta["huggingface_url"]
    sha = meta["sha256"]
    local_db = os.path.join(EXTERNAL, fname)
    local_json = os.path.join(EXTERNAL, "latest.json")

    print("[cbdb] 最新版本: %s (%s)" % (fname, meta.get("generated_at_utc", "?")))
    print("[cbdb] 本地: %s → %s" % ("已存在" if os.path.exists(local_db) else "不存在", local_db))

    if args.check:
        return 0
    if os.path.exists(local_db) and not args.force:
        print("[cbdb] 本地已是最新，跳过（--force 强制重下）")
        return 0

    zip_path = os.path.join(EXTERNAL, fname.replace(".sqlite3", ".zip"))
    download(url, zip_path, sha)
    unzip_sqlite(zip_path, EXTERNAL)
    os.remove(zip_path)  # 解压后删 zip 省空间
    with open(local_json, "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=2)
    print("[cbdb] 完成。查询请用 tools/datasources/cbdb.py（只读 SQLite 适配器）")
    return 0


if __name__ == "__main__":
    sys.exit(main())
