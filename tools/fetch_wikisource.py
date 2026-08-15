# -*- coding: utf-8 -*-
"""免费抓 Wikisource 原文（MediaWiki action=raw），为预抽取提供史料文本。

为什么需要它：bibliography.json 的 cached_text 多是占位小注，没有史料原文。
要「提前预抽并缓存」就得先免费把原文抓下来，再喂 ingest.py 的 LLM provider。

已知坑（来自前期实战，见 .workbuddy/memory）：
- 不存在的页面：action=raw 仍返回 200，但正文是「There is currently no text in this page.」
  必须靠正文串识别 missing，不能只看 HTTP 状态。
- 跨语言页名：朝鲜实录页面名是韩文（조선왕조실록/...），日本方汉史书在 zh.wikisource。
  域名用 domain 参数区分（zh/ko/ja）。
- 429 限速：换完整 UA + 指数退避重试。
- REDIRECT：原文首行可能是「#REDIRECT [[...]]」，需追一层。

用法：
  # 抓若干页（domain:标题）
  python tools/fetch_wikisource.py "zh:明通鑑/卷八十" "zh:明神宗实录/卷三百二十八" \
        --out-dir tools/fixtures/sources

  # 列某页的子页链接（用于「卷次↔纪年」定位，免费探目录）
  python tools/fetch_wikisource.py --index "zh:明通鑑" --out-dir tools/fixtures/sources
"""
import argparse
import os
import re
import sys
import time
import urllib.parse
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "tools", "fixtures", "sources")
UA = "history-in-my-hand/0.1 (https://github.com/your-org/history-in-my-hand; contact@example.com)"

MISSING_MARKERS = [
    "There is currently no text in this page",
    "此页面目前没有包含任何文本",
    "no text in this page",
]


def _domain_url(domain):
    return "https://%s.wikisource.org/w/index.php" % domain


def fetch_raw(domain, title, retries=5, timeout=60):
    """返回 (text, status)。status: 'ok' | 'missing' | 'error'。"""
    url = "%s?title=%s&action=raw" % (
        _domain_url(domain), urllib.parse.quote(title))
    last_err = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=timeout) as r:
                raw = r.read().decode("utf-8", "replace")
            # missing 识别
            if any(m.lower() in raw.lower() for m in MISSING_MARKERS):
                return None, "missing"
            # REDIRECT 追一层
            m = re.match(r"\s*#REDIRECT\s*\[\[([^\]]+)\]\]", raw, re.I)
            if m:
                target = m.group(1).strip()
                return fetch_raw(domain, target, retries=retries - attempt)
            return raw, "ok"
        except urllib.error.HTTPError as e:
            if e.code == 429:
                wait = 2 ** attempt + 1
                print("  [429] %s 退避 %ds" % (title, wait))
                time.sleep(wait)
                last_err = e
                continue
            if e.code == 404:
                return None, "missing"
            last_err = e
            time.sleep(1)
        except Exception as e:  # 网络抖动
            last_err = e
            time.sleep(min(2 ** attempt, 8))
    return None, "error:%s" % last_err


def safe_name(spec):
    dom, _, title = spec.partition(":")
    slug = re.sub(r"[\s/:]+", "_", title)
    return dom, title, "%s__%s.txt" % (dom, slug)


def fetch_index(domain, title):
    """列出某页正文里出现的子页链接（用于探目录/卷次）。免费。"""
    text, st = fetch_raw(domain, title)
    if st != "ok" or not text:
        return []
    # 子页链接形如 [[/卷八十]] 或 [[卷八十]]；取本页命名空间下的
    links = set()
    for m in re.finditer(r"\[\[([^\]\|]+)\]\]", text):
        t = m.group(1).strip()
        if t.startswith("http") or t.startswith("Category:") or t.startswith(":"):
            continue
        links.add(t)
    return sorted(links)


def main():
    ap = argparse.ArgumentParser(description="免费抓 Wikisource 原文（action=raw）")
    ap.add_argument("pages", nargs="*", help="domain:标题 列表，如 zh:明通鑑/卷八十")
    ap.add_argument("--index", help="仅列该页子链接（domain:标题），不抓正文")
    ap.add_argument("--out-dir", default=OUT_DIR)
    ap.add_argument("--delay", type=float, default=1.0, help="请求间隔秒（限速）")
    args = ap.parse_args()

    os.makedirs(args.out_dir, exist_ok=True)

    if args.index:
        dom, _, title = args.index.partition(":")
        print("[index] %s ->" % args.index)
        for l in fetch_index(dom or "zh", title):
            print("  ", l)
        return 0

    if not args.pages:
        print("[FAIL] 需提供 domain:标题 至少一个，或用 --index")
        return 2

    ok = miss = err = 0
    for spec in args.pages:
        dom, title, fname = safe_name(spec)
        domain = dom or "zh"
        print("[fetch] %s ..." % spec)
        text, st = fetch_raw(domain, title)
        if st == "ok" and text:
            path = os.path.join(args.out_dir, fname)
            with open(path, "w", encoding="utf-8") as f:
                f.write(text)
            print("  [ok] %d 字 -> %s" % (len(text), path))
            ok += 1
        elif st == "missing":
            print("  [missing] %s 不存在" % spec)
            miss += 1
        else:
            print("  [ERR] %s -> %s" % (spec, st))
            err += 1
        time.sleep(args.delay)
    print("\n汇总: ok=%d missing=%d error=%d" % (ok, miss, err))
    return 0 if err == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
