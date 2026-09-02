# -*- coding: utf-8 -*-
"""六维词表推断器回归测试（v0.75 任意来源鲁棒性）。

验证：任意文本（非史料语料）进 ingest 管线时，维度不再一律静默回退 [6]，
而是被确定性词表推断，且词表无命中才诚实回退 [6]，并打 dim_source 溯源标记。
"""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "ingestion"))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ingest as IN

ok = fail = 0


def check(name, cond):
    global ok, fail
    if cond:
        ok += 1
        print("  [ok] %s" % name)
    else:
        fail += 1
        print("  [XX] %s" % name)


# 1) 词表推断各维命中
check("地理: 筑城边关", 1 in IN.infer_dims_lexical({"quote": "明军筑城抚顺，守边关"}))
check("技术: 红夷炮", 2 in IN.infer_dims_lexical({"quote": "以红夷炮轰城"}))
check("制度: 赋税卫所", 3 in IN.infer_dims_lexical({"quote": "改卫所制，减赋税"}))
check("社会: 流民饥荒", 4 in IN.infer_dims_lexical({"quote": "蝗灾大作，流民载道"}))
check("思想: 儒学书院", 5 in IN.infer_dims_lexical({"quote": "立书院，倡儒学"}))
check("事件: 战役", 6 in IN.infer_dims_lexical({"quote": "萨尔浒之战，明军大败"}))
check("跨维: 筑城铸铁屯田 同时覆盖 地理+技术+制度",
      set(IN.infer_dims_lexical({"quote": "筑城界藩，铸铁造炮，兴屯田"})) >= {1, 2, 3})

# 2) 词表无命中 → 空（交给回退逻辑，不瞎编维度）
check("无信号文本 → 空列表",
      IN.infer_dims_lexical({"quote": "明月几时有，把酒问青天"}) == [])

# 3) normalize_and_validate：缺 dims → 推断并打 dim_source
a_missing = [{
    "id": "T1", "subject": "event:x", "predicate": "筑城", "layer": "record",
    "time": {"era_text": "万历四十七年"}, "source": "s", "confidence": 0.9,
    "quote": "筑城抚顺，以红夷炮守边关",
}]
IN.normalize_and_validate(a_missing)
check("缺 dims → 推断非空且含地理", a_missing[0]["dims"] and 1 in a_missing[0]["dims"])
check("缺 dims → dim_source=inferred", a_missing[0].get("dim_source") == "inferred")

# 4) normalize_and_validate：dims 非法且无信号 → 诚实回退 [6] + fallback 标记
a_bad = [{
    "id": "T2", "subject": "event:y", "predicate": "某物", "layer": "record",
    "time": {"era_text": "万历元年"}, "source": "s", "confidence": 0.9,
    "quote": "明月几时有，把酒问青天", "dims": [99, "x"],
}]
IN.normalize_and_validate(a_bad)
check("非法 dims → 被替换为合法 1..6 列表",
      isinstance(a_bad[0]["dims"], list) and all(1 <= d <= 6 for d in a_bad[0]["dims"]))
check("非法 dims 且无信号 → 回退 [6] + dim_source=fallback",
      a_bad[0]["dims"] == [6] and a_bad[0].get("dim_source") == "fallback")

# 5) 真实 heuristic 任意文本抽取：维度不应全退化为 [6]
heur = IN.extract_heuristic("万历四十七年，明军筑城抚顺，以红夷炮守边关，民多流离。天启元年，边民大饥，流寇四起。崇祯三年，清军入寇，连陷城堡。")
IN.normalize_and_validate(heur)
check("heuristic 抽到 >=2 条", len(heur) >= 2)
non_trivial = [a for a in heur if set(a["dims"]) != {6}]
check("heuristic 产出含非纯[6]维度（地理/技术/社会被推断）", len(non_trivial) >= 1)
check("heuristic 断言带 dim_source 标记",
      all(a.get("dim_source") in ("inferred", "fallback", "declared") for a in heur))

# 6) 已声明 dims 不被推断覆盖（声明优先）
a_decl = [{
    "id": "T3", "subject": "event:z", "predicate": "赋税", "layer": "record",
    "time": {"era_text": "万历元年"}, "source": "s", "confidence": 0.9,
    "quote": "无关文本 春风又绿江南岸", "dims": [3], "dim_source": "declared",
}]
IN.normalize_and_validate(a_decl)
check("已声明 dims 保持 [3] 不被词表覆盖",
      a_decl[0]["dims"] == [3] and a_decl[0].get("dim_source") == "declared")

# 7) A（v0.76）: extract_with_fallback 在 LLM 整批失败时回退 heuristic，不丢整批
def _boom_llm(*a, **k):
    raise RuntimeError("simulated API down")
_real = IN.extract_llm
IN.extract_llm = _boom_llm
try:
    fb, used = IN.extract_with_fallback("万历四十七年，明军筑城抚顺，以红夷炮守边关。", None)
    check("A: LLM 失败 → 回退 heuristic 产出非空", len(fb) >= 1)
    check("A: LLM 失败 → used_llm=False 标记回退", used is False)
    # 回退产出的断言应能过 normalize（年份+维度推断闭环）
    IN.normalize_and_validate(fb)
    check("A: 回退断言经 normalize 后仍合法（有 dims）",
          all(a.get("dims") for a in fb))
finally:
    IN.extract_llm = _real
# 正常路径：LLM 成功时被调用
IN.extract_llm = lambda *a, **k: [{"id": "OK1", "subject": "event:x", "predicate": "p",
                                   "layer": "record", "time": {"era_text": "万历元年"},
                                   "source": "s", "confidence": 0.9, "quote": "q", "dims": [6]}]
try:
    ok_asserts, used2 = IN.extract_with_fallback("万历元年某事。", None)
    check("A: LLM 正常 → used_llm=True 且走 LLM 结果", used2 is True and len(ok_asserts) == 1)
finally:
    IN.extract_llm = _real

print("\ningest_dims: %d ok, %d fail" % (ok, fail))
sys.exit(1 if fail else 0)
