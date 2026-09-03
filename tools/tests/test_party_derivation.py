"""v0.87 派系推导诚实化单测（离线，零 token）。

_regression: 旧 _conform_world 在「综述/考订/百科」来源、且无法从事件标题/原文推导参战方时，
硬编码回退 ["共方","国方"]（甚至 ["解放军","国军"]）——这是现代史域占位符，会污染明清华东等
任意综述来源，违反 honest boundary。真实 LLM 抽取（source.party=综述考订）首次触发该暗病。
修复：推导不出时诚实回退来源自身 party，绝不伪造对立阵营。

本测试锁死：① 综述来源不伪造  ② 事件标题分隔符推导仍生效  ③ 现代史占位符永不再现。
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, "..", "ingestion"))
import ingest as IN


def _spec(party, text=""):
    return {
        "id": "wtest_pd",
        "title": "派系推导测试",
        "source": {"id": "wt", "title": "测试来源", "party": party, "color": "#888"},
        "source_text": text,
    }


def _raw_with_event(title, kind="战事"):
    # 必须有一条断言引用该事件，否则 _conform_world 会把孤儿事件清掉（line 737），
    # 派系推导循环就跑不到——这正是真实 LLM 抽取（断言丰富）才触发旧 bug 的原因。
    return {
        "persons": [],
        "events": [{"id": "e1", "title": title, "kind": kind, "subject": "event:e1"}],
        "places": [],
        "edges": [],
        "assertions": [{"id": "a1", "subject": "event:e1",
                        "predicate": "战役", "value_text": "测试"}],
    }


def test_review_source_no_fabricate():
    # 综述类来源 + 事件标题无分隔符 + 原文不含现代史关键词 → 不得伪造共方/国方
    spec = _spec("综述考订", text="万历四十七年萨尔浒之战，明军四路出师。")
    raw = _raw_with_event("萨尔浒之战")
    IN._conform_world(raw, spec)
    assert spec["_derived_parties"] == ["综述考订"], \
        "综述来源不应伪造对立阵营，实际=%s" % spec["_derived_parties"]
    assert "共方" not in spec["_derived_parties"] and "国方" not in spec["_derived_parties"]
    print("[A] 综述来源诚实回退: %s" % spec["_derived_parties"])


def test_event_title_separator_derived():
    # 综述来源 + 事件标题含「·」→ 从标题推导双方（域无关，仍应生效）
    spec = _spec("综述考订", text="明金决战。")
    raw = _raw_with_event("明军·后金 萨尔浒")
    IN._conform_world(raw, spec)
    joined = " ".join(spec["_derived_parties"])
    assert "明军" in spec["_derived_parties"] and "后金" in joined, \
        "应从标题推导双方，实际=%s" % spec["_derived_parties"]
    print("[B] 标题推导双方: %s" % spec["_derived_parties"])


def test_no_modern_hardcode():
    # 非明清华东域（春秋）也不应被现代史占位符污染
    spec = _spec("百科考订", text="春秋时期城濮之战，晋楚争霸。")
    raw = _raw_with_event("城濮之战")
    IN._conform_world(raw, spec)
    assert spec["_derived_parties"] == ["百科考订"], \
        "不应出现共方/国方/解放军，实际=%s" % spec["_derived_parties"]
    print("[C] 非明清华东域不被现代史占位符污染: %s" % spec["_derived_parties"])


if __name__ == "__main__":
    test_review_source_no_fabricate()
    test_event_title_separator_derived()
    test_no_modern_hardcode()
    print("PARTY_DERIVATION_PASS")
