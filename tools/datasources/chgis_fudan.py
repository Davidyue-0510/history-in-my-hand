# -*- coding: utf-8 -*-
"""CHGIS 数据下载器 · 复旦镜像（国内直连，绕开 DataVerse 的 AWS WAF）。

来源：复旦大学历史地理研究中心（yugong.fudan.edu.cn）CHGIS 数据下载页
    http://yugong.fudan.edu.cn/CHGIS/sjxz.htm

用法：
    python tools/datasources/chgis_fudan.py --list       # 列出可下载项
    python tools/datasources/chgis_fudan.py --all        # 批量下载全部（断点续传）
    python tools/datasources/chgis_fudan.py --names 1911 # 只下名字含 1911 的项
    python tools/datasources/chgis_fudan.py --unrar      # 解压已下载的 .rar（需 7z/WinRAR）

产物：data/external/chgis/fudan/*.rar（gitignore，不打包）

数据许可：CHGIS 学术免费、禁止商用/再分发。复旦镜像为官方编辑处（中国编辑处）发布。
"""
import argparse
import os
import re
import subprocess
import sys
import time
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
EXTERNAL = os.path.join(ROOT, "data", "external", "chgis", "fudan")
PAGE_URL = "http://yugong.fudan.edu.cn/CHGIS/sjxz.htm"
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0"}
RETRIES = 3


def fetch_items():
    req = urllib.request.Request(PAGE_URL, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        body = r.read().decode("utf-8", "replace")
    items = []
    seen = set()
    for m in re.finditer(r'<a[^>]*href="([^"]*\.rar\?e=[^"]*)"[^>]*>(.*?)</a>', body, re.DOTALL):
        url, txt = m.group(1), m.group(2)
        name = re.sub(r"<[^>]+>", "", txt).strip()
        full = "http://yugong.fudan.edu.cn" + url if url.startswith("/") else url
        if full in seen:
            continue
        seen.add(full)
        items.append({"name": name, "url": full})
    return items


def download(url, dest):
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    tmp = dest + ".part"
    resume = os.path.getsize(tmp) if os.path.exists(tmp) else 0
    if resume:
        print("    续传 %d MB" % (resume // 1048576))
    for attempt in range(1, RETRIES + 1):
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
                        sys.stdout.write("\r    %d%% (%d/%d MB)   " % (done * 100 // total, done // 1048576, total // 1048576))
                        sys.stdout.flush()
            sys.stdout.write("\n")
            os.replace(tmp, dest)
            return True
        except Exception as e:
            print("\n    第 %d/%d 次失败: %s" % (attempt, RETRIES, e))
            if attempt < RETRIES:
                time.sleep(3)
    return False


def find_unrar():
    for cand in ("7z", "7za", "unrar", "rar"):
        try:
            subprocess.run([cand, "--help" if cand.startswith("7z") else "-?"],
                           capture_output=True, timeout=5)
            return cand
        except Exception:
            continue
    return None


def unrar_all():
    exe = find_unrar()
    if not exe:
        print("[chgis] 未找到 7z/WinRAR。请安装 7-Zip（https://www.7-zip.org/）后重跑，")
        print("[chgis] 或用 7-Zip 手动解压 %s 下的 .rar。" % EXTERNAL)
        return 1
    rars = sorted(f for f in os.listdir(EXTERNAL) if f.endswith(".rar"))
    if not rars:
        print("[chgis] 没有 .rar 文件。先 --all 下载。")
        return 1
    for rar in rars:
        dest = os.path.join(EXTERNAL, rar[:-4])
        if os.path.isdir(dest) and os.listdir(dest):
            print("[chgis] 已解压，跳过 %s" % rar)
            continue
        os.makedirs(dest, exist_ok=True)
        print("[chgis] 解压 %s → %s" % (rar, dest))
        subprocess.run([exe, "x", "-y", "-o%s" % dest,
                        os.path.join(EXTERNAL, rar)], capture_output=True)
    print("[chgis] 解压完成。")
    return 0


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--list", action="store_true", help="列出全部可下载项")
    ap.add_argument("--all", action="store_true", help="批量下载全部")
    ap.add_argument("--names", help="只下名称含该关键字的项，如 --names 1911")
    ap.add_argument("--unrar", action="store_true", help="解压已下载的 .rar")
    args = ap.parse_args()

    if args.unrar:
        return unrar_all()

    try:
        items = fetch_items()
    except Exception as e:
        print("[chgis] 无法读取复旦下载页（%s）。网络可直连 yugong.fudan.edu.cn。" % e)
        return 1

    if args.list:
        print("[chgis] 复旦镜像 %d 个下载项：" % len(items))
        for i, it in enumerate(items, 1):
            print("  %2d. %s" % (i, it["name"]))
        return 0

    targets = items if args.all else (
        [it for it in items if args.names and args.names in it["name"]] if args.names else items)
    if not targets:
        print("[chgis] 无匹配项。用 --list 看清单。")
        return 1

    print("[chgis] 开始下载 %d 项（断点续传，中断重跑同命令即可）…" % len(targets))
    ok = 0
    for it in targets:
        fname = re.sub(r'[\\/:*?"<>|]', "_", it["name"]) + ".rar"
        dest = os.path.join(EXTERNAL, fname)
        if os.path.exists(dest):
            print("[chgis] 已存在，跳过：%s" % it["name"])
            ok += 1
            continue
        print("[chgis] %s" % it["name"])
        if download(it["url"], dest):
            ok += 1
    print("[chgis] 完成：%d/%d。CHGIS 学术免费、禁商用/再分发，勿打包入库。" % (ok, len(targets)))
    print("[chgis] 解压：python tools/datasources/chgis_fudan.py --unrar（需 7-Zip）")
    return 0


if __name__ == "__main__":
    sys.exit(main())
