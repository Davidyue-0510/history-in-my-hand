# -*- coding: utf-8 -*-
"""语境包加载器回归测试（v0.22）。

守的是三件事，每一件都对应一个「静默出错」的风险：

1. **继承是浅层替换，不是深合并**。若唐代包给了 party_bucket，它必须完整替换
   明清那套；万一哪天误改成深合并，「建州·官修」会悄悄留在唐代包里，
   拼错的 party 反而校验通过。
2. **场景 → 包的解析优先级不能变**。内联包 > 注册表声明 > 全局默认。
   顺序一旦反了，虚构世界会被按明清桶分组，而界面上看不出任何异常。
3. **每个包自洽**。party_bucket 的值必须都在 parties 里，否则该桶在
   共振统计里既不属于任何一方也不报错（v0.22 就是这样抓到 novel_fandao 的旧 bug）。

用法：python tools/test_vocab.py
"""
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "ingestion"))

import vocab_loader as VL  # noqa: E402

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
    print("语境包回归测试（tools/vocab_loader.py）")

    packs = VL.list_packs()
    print("\nV1: 包发现与默认包")
    check("至少一个语境包", bool(packs), str(packs))
    check("_base 不出现在可选包列表（它是基础包，不能直接给场景用）",
          "_base" not in packs, str(packs))
    check("默认包 %r 可加载" % VL.default_pack_id(),
          bool(VL.load_default().get("parties")))

    print("\nV2: extends 继承（浅层替换语义）")
    base = VL.load_pack("ming_qing")
    check("ming_qing 继承到 _base 的 layers",
          set(base["layers"]) >= {"record", "scholarship", "inference", "gap"})
    check("ming_qing 继承到 _base 的 quote_status",
          set(base["quote_status"]) >= {"verbatim", "paraphrase_unverified", "generated"})
    if "tang" in packs:
        tang = VL.load_pack("tang")
        check("tang 也继承到 layers", set(tang["layers"]) == set(base["layers"]))
        overlap = set(tang["party_bucket"]) & set(base["party_bucket"])
        check("tang 的 party_bucket 未混入明清桶（替换而非深合并）",
              not (overlap - {"二手综述"}),
              "串味键：%s" % (overlap - {"二手综述"}))
        check("tang 里没有『建州·官修』这类明清专属桶",
              "建州·官修" not in tang["party_bucket"])

    print("\nV3: 每个包自洽")
    for pid in packs:
        v = VL.load_pack(pid)
        vals = set(v["party_bucket"].values())
        check("[%s] party_bucket 值 ⊆ parties" % pid,
              vals <= set(v["parties"]), "逸出 %s" % (vals - set(v["parties"])))
        facs = v.get("factions") or {}
        check("[%s] faction_colors 覆盖 factions" % pid,
              set(facs) <= set(v.get("faction_colors") or {}))

    print("\nV4: 场景 → 包 解析优先级")
    reg = json.load(open(os.path.join(ROOT, "data", "scenes.json"), encoding="utf-8"))
    scenes = reg.get("scenes", {})
    inline_hit = 0
    for sid, sc in scenes.items():
        pid, v = VL.resolve_for_scene(sid, sc)
        d = os.path.join(ROOT, "data", sc.get("dir", sid))
        if os.path.exists(os.path.join(d, "vocab.json")):
            inline_hit += 1
            if not pid.startswith("inline:"):
                check("场景 %s 有内联包却解析到 %s" % (sid, pid), False)
                continue
            # 内联包必须真的隔离：不得继承默认包的 party_bucket
            leaked = set(v["party_bucket"]) & set(VL.load_default()["party_bucket"])
            check("[%s] 内联包未继承默认包的桶" % sid, not leaked, "泄漏 %s" % leaked)
        else:
            declared = sc.get("vocab_pack") or VL.default_pack_id()
            check("[%s] 解析到声明的包 %s" % (sid, declared), pid == declared, pid)
    check("确实存在内联包场景（否则本组测试是空转）", inline_hit > 0, str(inline_hit))

    print("\nV5: 错误处理")
    try:
        VL.load_pack("__not_exist__")
        check("加载不存在的包应抛错", False)
    except VL.VocabError:
        check("加载不存在的包抛 VocabError", True)
    pub = VL.public(VL.load_pack(VL.default_pack_id()))
    check("public() 剔除 _ 前缀字段", not any(k.startswith("_") for k in pub))
    check("public() 剔除 extends 加载指令", "extends" not in pub)

    print("\n%s\nvocab: %d ok, %d fail" % ("=" * 50, _ok, _fail))
    return 1 if _fail else 0


if __name__ == "__main__":
    sys.exit(main())
