# -*- coding: utf-8 -*-
"""_resolve_vocab_pack 回归测试（v0.138）。

守的是 v0.137 抓到的「静默出错」坑：

旧写法 `spec.get("vocab_pack", "ming_qing")` 有 dict.get 陷阱——当 spec 里
vocab_pack 显式为 None（--from-json 自 emit meta 透传过来就是 None）时，key 已存在，
.get 返回 None 而非 "ming_qing" → scenes.json 写 vocab_pack=None → vocab_loader 回退
默认包 ming_qing（不含后世官修/综合史料）→ check_render_schema gate #9 FAIL。

修复后统一解析规则：
  - 显式非空（如军事共享包 'ming_qing'）→ 用之；
  - 'auto' / 缺失 / None → 按场景自带包 spec['id']（world-gen 已生成 data/vocab/<id>.json）。

用法：python tools/tests/test_register_vocab_pack.py
"""
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "ingestion"))

import ingest  # noqa: E402

_ok = 0
_fail = 0


def check(name, cond, detail=""):
    global _ok, _fail
    if cond:
        _ok += 1
        print("  [ok] %s" % name)
    else:
        _fail += 1
        print("  [FAIL] %s  %s" % (name, detail))


def main():
    print("vocab_pack 解析回归测试（tools/ingestion/ingest._resolve_vocab_pack）")
    f = ingest._resolve_vocab_pack

    print("\nR1: 缺失 / None / auto → 一律解析成 spec['id']（按场景自带包）")
    check("缺失 vocab_pack → scene_id", f({"id": "susong_llm"}) == "susong_llm",
          f({"id": "susong_llm"}))
    check("显式 None → scene_id（v0.137 根因）",
          f({"id": "susong_llm", "vocab_pack": None}) == "susong_llm",
          f({"id": "susong_llm", "vocab_pack": None}))
    check("'auto' → scene_id（batch 路径）",
          f({"id": "x", "vocab_pack": "auto"}) == "x",
          f({"id": "x", "vocab_pack": "auto"}))
    check("空串 '' → scene_id（防呆）",
          f({"id": "y", "vocab_pack": ""}) == "y",
          f({"id": "y", "vocab_pack": ""}))

    print("\nR2: 显式共享包 → 原样保留（不覆盖）")
    check("军事共享包 'ming_qing' 保留",
          f({"id": "sarhu", "vocab_pack": "ming_qing"}) == "ming_qing",
          f({"id": "sarhu", "vocab_pack": "ming_qing"}))
    check("其他共享包 'tang' 保留",
          f({"id": "x", "vocab_pack": "tang"}) == "tang",
          f({"id": "x", "vocab_pack": "tang"}))

    print("\nR3: 真实已注册场景的自带包文件确实存在（world-gen 保证）")
    reg = json.load(open(os.path.join(ROOT, "data", "scenes.json"), encoding="utf-8"))
    for sid in ["susong_llm", "huangdaopo_llm", "bisheng_movable_type", "dujiangyan"]:
        sc = reg["scenes"].get(sid, {})
        vp = sc.get("vocab_pack")
        auto_path = os.path.join(ROOT, "data", "vocab", (vp or sid) + ".json")
        check("%s vocab_pack=%r 且包文件存在" % (sid, vp),
              vp == sid and os.path.exists(auto_path),
              "vocab_pack=%r exists=%s" % (vp, os.path.exists(auto_path)))

    print("\n%s\nregister_vocab_pack: %d ok, %d fail" % ("=" * 50, _ok, _fail))
    return 1 if _fail else 0


if __name__ == "__main__":
    sys.exit(main())
