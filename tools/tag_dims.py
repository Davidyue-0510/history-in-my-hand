# -*- coding: utf-8 -*-
"""全量回填：为 data/<scene>/assertions.jsonl 的每条断言标注六维 dims（源驱动）。

设计要点
--------
- 复用 ingest.py 的 _call_llm（读 .env 的 LLM_API_KEY / LLM_BASE_URL / LLM_MODEL）。
- 每场景**一次** LLM 调用，把该场景全部断言批注完，省 token。
- **断点续跑**：场景内若所有断言都已带合法 dims 则跳过；中途失败仅跳过该场景并继续。
- 只**新增** dims 字段，绝不删改其它字段（避免污染已核验史料）。
- 每场景批注后调用 ingest.recompute_scene_dims 派生场景级 dims = 断言并集（替换启发式）。

用法
----
  python tools/tag_dims.py                 # 全量回填（可续跑）
  python tools/tag_dims.py --only sarhu   # 只处理一个场景（测试）
  python tools/tag_dims.py --dry-run      # 只统计需回填的场景数，不调 LLM
  python tools/tag_dims.py --force        # 忽略已有 dims，全量重标
"""
import argparse
import json
import os
import sys
import time

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools"))
sys.path.insert(0, os.path.join(ROOT, "tools", "ingestion"))
import ingest as ING

DIM_TAXONOMY = ING.DIM_TAXONOMY

BACKFILL_PROMPT = """你是历史断言维度标注器。下面是一批已抽取的历史断言（每条含 id / subject / predicate / value_text / layer / 引文 quote）。
请给每条断言标注它「提供证据」的六维信息类别编号（可多选）：
%s

判定规则（**偏多不偏少**：漏标会让该维度被误判为「待补」，后果比过标更严重；过标只表示「该断言与此维相关」）：
- 凡涉及具体地名/关隘/山河/路线/地形/气候/距离/方位 → 必含 [1 地理]。
- 凡涉及兵器/火器/工程/筑城/粮草辎重/交通/医疗技术 → 必含 [2 技术]。
- 凡涉及官制/军制/赋税/货币/法律/选官/后勤制度/政令 → 必含 [3 制度]。
- 凡涉及人口/阶层/民族/日常/信仰/家庭/民变 → 必含 [4 社会]。
- 凡涉及思想/意识形态/学术/宗教/舆论/生死观 → 必含 [5 思想]。
- 凡涉及具体事件/战役/人物/决策/考证/纪年 → 必含 [6 事件]。
- 一条断言常跨 2–4 维，逐条对照上面 6 条触发词，命中即加。例：
  「出抚顺关渡浑河」→ [1,6]；「筑城界藩运石」→ [1,2,3,6]；
  「器械龃龉无大炮」→ [2,6]；「明军分四路来攻」→ [1,6]；「杨镐与刘綎不和」→ [4,6]。
- 返回 JSON 数组，每项 {"id":"<原id>","dims":[编号列表]}，必须覆盖输入全部 id，不要任何解释文字。

输入断言：
%s
""" % (
    "\n".join("%d = %s" % (k, v) for k, v in DIM_TAXONOMY.items()),
    "%INPUT%",
)


def _extract_json_array(text):
    s = text.find("[")
    e = text.rfind("]")
    if s == -1 or e <= s:
        raise ValueError("找不到 JSON 数组")
    return json.loads(text[s:e + 1])


def _assertion_has_dims(a):
    d = a.get("dims")
    return (isinstance(d, list) and len(d) > 0
            and all(isinstance(x, (int, float)) and 1 <= int(x) <= 6 for x in d))


def _call_with_retry(prompt, tries=3):
    last = None
    for i in range(tries):
        try:
            raw, usage = ING._call_llm(prompt)
            if raw is None:
                raise RuntimeError("未检测到 LLM_API_KEY")
            return _extract_json_array(raw)
        except Exception as ex:
            last = ex
            print("    [retry %d/%d] %s" % (i + 1, tries, ex))
            time.sleep(2 + i * 3)
    raise last


def backfill_scene(scene_id, force=False):
    """批注一个场景的断言 dims。返回 (changed, total) 或 None（跳过）。"""
    p = os.path.join(ROOT, "data", scene_id, "assertions.jsonl")
    if not os.path.exists(p):
        return None
    lines = [l for l in open(p, encoding="utf-8") if l.strip()]
    if not lines:
        return None
    asserts = [json.loads(l) for l in lines]
    if not force and all(_assertion_has_dims(a) for a in asserts):
        return ("skip", len(asserts))

    # 仅把必要字段喂给 LLM（省 token，且避免泄露无关结构）
    brief = [{"id": a.get("id"), "subject": a.get("subject"),
              "predicate": a.get("predicate"), "value_text": a.get("value_text"),
              "layer": a.get("layer"), "quote": a.get("quote")}
             for a in asserts]
    prompt = BACKFILL_PROMPT.replace("%INPUT%", json.dumps(brief, ensure_ascii=False))
    tagged = _call_with_retry(prompt)  # list of {"id":..., "dims":[...]}
    by_id = {}
    for t in tagged:
        tid = t.get("id")
        dims = t.get("dims")
        if tid is None or not isinstance(dims, list):
            continue
        cleaned = sorted({int(d) for d in dims if isinstance(d, (int, float)) and 1 <= int(d) <= 6})
        by_id[tid] = cleaned or [6]

    changed = 0
    for a in asserts:
        aid = a.get("id")
        if aid in by_id:
            a["dims"] = by_id[aid]
            changed += 1
        elif not _assertion_has_dims(a):
            a["dims"] = [6]  # LLM 漏标 → 回退 [6]，不丢字段
            changed += 1

    # 写回（保留全部其它字段）
    with open(p, "w", encoding="utf-8") as f:
        for a in asserts:
            f.write(json.dumps(a, ensure_ascii=False) + "\n")
    ING.recompute_scene_dims(scene_id)
    return (changed, len(asserts))


def main():
    ING._load_dotenv()
    if not (os.environ.get("LLM_API_KEY") or os.environ.get("OPENAI_API_KEY")):
        print("[FAIL] 未检测到 LLM_API_KEY / OPENAI_API_KEY，无法回填。")
        return 2
    ap = argparse.ArgumentParser()
    ap.add_argument("--only", help="只处理指定场景 id（测试用）")
    ap.add_argument("--force", action="store_true", help="忽略已有 dims，全量重标")
    ap.add_argument("--dry-run", action="store_true", help="只统计需回填场景，不调 LLM")
    args = ap.parse_args()

    reg = json.load(open(os.path.join(ROOT, "data", "scenes.json"), encoding="utf-8"))
    scene_ids = [args.only] if args.only else list(reg["scenes"].keys())

    need = 0
    for sid in scene_ids:
        p = os.path.join(ROOT, "data", sid, "assertions.jsonl")
        if not os.path.exists(p):
            continue
        lines = [l for l in open(p, encoding="utf-8") if l.strip()]
        if not lines:
            continue
        asserts = [json.loads(l) for l in lines]
        if args.force or not all(_assertion_has_dims(a) for a in asserts):
            need += 1
    print("[info] 共 %d 个场景，需回填 %d 个" % (len(scene_ids), need))
    if args.dry_run:
        return 0

    done = skip = fail = 0
    for i, sid in enumerate(scene_ids, 1):
        p = os.path.join(ROOT, "data", sid, "assertions.jsonl")
        if not os.path.exists(p):
            continue
        try:
            r = backfill_scene(sid, force=args.force)
        except Exception as ex:
            print("[%d/%d] %s 失败: %s" % (i, len(scene_ids), sid, ex))
            fail += 1
            time.sleep(1)
            continue
        if r is None:
            continue
        if r[0] == "skip":
            skip += 1
            print("[%d/%d] %s 跳过（已有 dims，%d 条）" % (i, len(scene_ids), sid, r[1]))
        else:
            done += 1
            print("[%d/%d] %s 已标 %d/%d 条" % (i, len(scene_ids), sid, r[0], r[1]))
        time.sleep(0.4)  # 礼貌限速
    print("\n[done] 新标 %d · 跳过 %d · 失败 %d" % (done, skip, fail))
    return 0


if __name__ == "__main__":
    sys.exit(main())
