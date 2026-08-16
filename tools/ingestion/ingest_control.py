#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""ingest_control.py — 实控区/影响范围数据的 LLM 分析管线（v0.47）

把「史料 → 每处治所的控制方区间」这一步交给 LLM，产出 data/<scene>/control.json，
由 build.py 注入 bundle（control / control_seats / control_years），前端 ControlLayer 直接渲染。
这就是用户要的闭环：**只要导入资料，LLM 分析后框架就能直接干**。

用法：
  python tools/ingestion/ingest_control.py --scene sarhu --provider deepseek
  python tools/ingestion/ingest_control.py --scene sarhu --materials 史料.txt --provider deepseek
  python tools/ingestion/ingest_control.py --scene sarhu --provider fixture   # 无 LLM 冒烟（校验管线形状）

约定（与 data/control_liaodong.json 同构）：
  control.json = {
    "_years": [lo, hi],
    "events": [ {"year": ..., "label": "..."}, ... ],   # 时间轴刻度标签，可省略
    "control": [ {"place_id": "...", "party": "明方", "start": 1616, "end": 1617}, ... ]
  }
  seats 由 build.py 从 control 的 place_id 反查场景 places.json 自动生成，这里不用写。
  place_id 必须用场景 places.json 里的 id（白名单校验，防止 LLM 自造地名）。
"""
import argparse
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def _load_dotenv():
    p = os.path.join(ROOT, ".env")
    if not os.path.exists(p):
        return
    with open(p, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def _call_llm(prompt):
    import urllib.request
    key = os.environ.get("LLM_API_KEY") or os.environ.get("OPENAI_API_KEY")
    if not key:
        raise RuntimeError("未检测到 LLM_API_KEY / OPENAI_API_KEY，无法走 deepseek/llm。"
                           "先 --provider fixture 验管线，或设置 .env。")
    base = os.environ.get("LLM_BASE_URL", "https://api.openai.com/v1").rstrip("/")
    model = os.environ.get("LLM_MODEL", "gpt-4o-mini")
    body = json.dumps({"model": model, "messages": [{"role": "user", "content": prompt}],
                       "temperature": 0, "max_tokens": 16000, "stream": False}).encode("utf-8")
    req = urllib.request.Request(base + "/chat/completions", data=body,
                                 headers={"Authorization": "Bearer " + key,
                                          "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=120) as r:
        data = json.load(r)
    return data["choices"][0]["message"]["content"], data.get("usage") or {}


def _extract_json_obj(text):
    s, e = text.find("{"), text.rfind("}")
    if s == -1 or e <= s:
        raise ValueError("LLM 返回中找不到 JSON 对象")
    return json.loads(text[s:e + 1])


def load_places(scene):
    fp = os.path.join(ROOT, "data", scene, "places.json")
    if not os.path.exists(fp):
        raise SystemExit("找不到 %s" % fp)
    arr = json.load(open(fp, encoding="utf-8")).get("places", [])
    return [p for p in arr if p.get("lon") is not None and p.get("lat") is not None]


def gather_materials(scene, materials_path):
    if materials_path and os.path.exists(materials_path):
        return open(materials_path, encoding="utf-8").read()
    # 兜底：用场景自身的接战 + 事件标题拼一份最简上下文
    bits = []
    for fn in ("engagements.json", "events.json"):
        fp = os.path.join(ROOT, "data", scene, fn)
        if os.path.exists(fp):
            try:
                d = json.load(open(fp, encoding="utf-8"))
            except Exception:
                continue
            if fn == "engagements.json":
                for e in d.get("engagements", []):
                    bits.append("%s｜%s｜%s" % (e.get("at", ""), e.get("name", ""),
                                               e.get("era", "")))
            else:
                for e in d.get("events", []):
                    bits.append("%s｜%s｜%s" % (e.get("at", ""), e.get("title", ""),
                                               e.get("era", "")))
    return "\n".join(bits) if bits else None


def build_prompt(scene, seats, materials, lo, hi):
    seat_lines = "\n".join("- %s（%s）lon=%s lat=%s" % (p["id"], p.get("name", ""),
                                                       p["lon"], p["lat"]) for p in seats)
    mat = materials or "（无补充史料，仅依据下列地名与常识推断，并明确标注不确定）"
    return (
        "你是明清军事地理史考订助手。给定一个战争场景「%s」的时间范围 [%d, %d] 年、\n"
        "下方该场景真实历史地名的白名单（place_id 必须严格取自白名单），以及史料摘录，\n"
        "请为**每一处地名**判断它在各年份由哪一方实际控制，输出 JSON：\n\n"
        "{\n"
        '  "_years": [%d, %d],\n'
        '  "events": [ {"year": 1619, "label": "萨尔浒大胜，克开原铁岭"}, ... ],\n'
        '  "control": [ {"place_id": "fushun", "party": "明方", "start": 1616, "end": 1617},\n'
        '                {"place_id": "fushun", "party": "清方", "start": 1618, "end": 1644}, ... ]\n'
        "}\n\n"
        "规则：\n"
        "1) place_id 只能用白名单里的 id，一个都不能少，也绝不能自造地名。\n"
        "2) party 用政权名（如 明方/清方/后金/朝鲜/日本方/吐蕃…）；某处无稳定控制方（如双方拉锯、\n"
        "   占领后又弃守的缓冲带）用 \"contested\"。\n"
        "3) start/end 用真实公元年，必须落在 [%d, %d] 内，禁止用 -9999/9999 之类哨兵值。\n"
        "4) 依据史料判断每次易手的确切年份；史料未明写的年份，用你最有把握的推断并在 label 里说明\n"
        "   （诚实边界：宁可标 contested 也不要编造精确控制）。\n"
        "5) events 给 5–10 条关键年份标签，供前端时间轴显示。\n\n"
        "地名白名单：\n%s\n\n史料摘录：\n%s\n\n只输出上面的 JSON，不要任何解释文字。"
        % (scene, lo, hi, lo, hi, lo, hi, seat_lines, mat)
    )


def fixture_control(scene, seats, lo, hi):
    party = "明方"
    return {
        "_years": [lo, hi],
        "events": [{"year": lo, "label": "（fixture 冒烟：未接 LLM，控制权恒定）"}],
        "control": [{"place_id": p["id"], "party": party, "start": lo, "end": hi}
                    for p in seats],
    }


def main():
    _load_dotenv()
    ap = argparse.ArgumentParser()
    ap.add_argument("--scene", required=True)
    ap.add_argument("--materials")
    ap.add_argument("--provider", choices=["deepseek", "llm", "fixture"], default="deepseek")
    ap.add_argument("--years", help="lo,hi（缺省从 engagements 推断，兜底 1600,1650）")
    args = ap.parse_args()

    seats = load_places(args.scene)
    if not seats:
        raise SystemExit("场景 %s 无带坐标的地点" % args.scene)
    ids = {p["id"] for p in seats}

    lo, hi = (1600, 1650)
    if args.years:
        lo, hi = [int(x) for x in args.years.split(",")]
    else:
        eng = os.path.join(ROOT, "data", args.scene, "engagements.json")
        if os.path.exists(eng):
            try:
                yrs = [int(e["at"][:4]) for e in json.load(open(eng, encoding="utf-8")).get("engagements", [])
                       if e.get("at") and e["at"][:4].isdigit()]
                if yrs:
                    lo, hi = min(yrs) - 1, max(yrs) + 1
            except Exception:
                pass

    if args.provider == "fixture":
        doc = fixture_control(args.scene, seats, lo, hi)
    else:
        materials = gather_materials(args.scene, args.materials)
        prompt = build_prompt(args.scene, seats, materials, lo, hi)
        raw, usage = _call_llm(prompt)
        print("[token] 输入 %s + 输出 %s" % (usage.get("prompt_tokens", "?"),
                                              usage.get("completion_tokens", "?")))
        doc = _extract_json_obj(raw)

    # ── 白名单校验 ──
    ctrl = doc.get("control", [])
    bad = [c.get("place_id") for c in ctrl if c.get("place_id") not in ids]
    if bad:
        print("[warn] 以下 place_id 不在场景白名单内，已剔除：%s" % bad)
        ctrl = [c for c in ctrl if c.get("place_id") in ids]
    covered = {c.get("place_id") for c in ctrl}
    missing = ids - covered
    if missing:
        print("[warn] 白名单中这些地点未被分配控制权（前端将留白）：%s" % sorted(missing))
    for c in ctrl:
        c["start"] = int(c["start"]); c["end"] = int(c["end"])
        c["start"] = max(lo, min(hi, c["start"]))
        c["end"] = max(lo, min(hi, c["end"]))

    doc["_years"] = doc.get("_years") or [lo, hi]
    doc["control"] = ctrl
    out = os.path.join(ROOT, "data", args.scene, "control.json")
    with open(out, "w", encoding="utf-8") as f:
        json.dump(doc, f, ensure_ascii=False, indent=1)
    print("已写 %s（%d 条控制权区间，%d 处地名，范围 %s）" %
          (out, len(ctrl), len(covered), doc["_years"]))


if __name__ == "__main__":
    main()
