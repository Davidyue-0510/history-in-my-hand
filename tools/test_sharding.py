# -*- coding: utf-8 -*-
"""地基二契约测试：data.js 已分片，壳不再内嵌完整 scenes，切片文件完整可信。

锁住三件事：
  1) 壳（demo/data.js）不再含完整 scenes 字典，改为轻量 scenes_meta + slice_index；
  2) 每个 scene_order 中的切片都落地为 demo/slices/<id>.js，且能解析为合法 bundle；
  3) 每个切片 bundle 含断言内核必备字段（meta/sources/places/persons/assertions/
     conflicts/gaps），meta.key 与文件名一致——保证前端 SD.scenes[id] 形状不变。

这把「单文件 784KB 巨石 → 壳 + 每切片一文件」钉死，杜绝有人把写死单例加回来。
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SHELL = os.path.join(ROOT, "demo", "data.js")
SLICES_DIR = os.path.join(ROOT, "demo", "slices")

REQUIRED_BUNDLE_KEYS = {"meta", "sources", "places", "persons",
                        "assertions", "conflicts", "gaps", "events", "edges"}


def assert_(cond, msg):
    if not cond:
        print("  FAIL:", msg)
        sys.exit(1)
    print("  ok:", msg)


def _strip_shell(text):
    start = text.index("window.SANDBOX_DATA = ") + len("window.SANDBOX_DATA = ")
    # 壳在 bootstrap 之前结束；bootstrap 以 window.SANDBOX_SLICES = 开头
    end_marker = "\nwindow.SANDBOX_SLICES = window.SANDBOX_SLICES"
    end = text.index(end_marker) if end_marker in text else len(text)
    return text[start:end].rstrip().rstrip(";")


def _strip_slice(text):
    # 先去掉整行 // 注释（切片文件头部两行注释含 window.SANDBOX_SLICES["id"]。
    # 这类字样，会抢注 re.search 的锚点）；JSON 内容行不会以 // 开头，故安全。
    lines = [ln for ln in text.splitlines() if not ln.lstrip().startswith("//")]
    clean = "\n".join(lines)
    m = re.search(r"window\.SANDBOX_SLICES\[\"(.+?)\"\] = (\{.*\})\s*;\s*$", clean, re.DOTALL)
    if not m:
        raise RuntimeError("切片文件格式不符：%s" % text[:60])
    return m.group(1), m.group(2)


def main():
    assert_(os.path.exists(SHELL), "壳文件 demo/data.js 存在")
    with open(SHELL, encoding="utf-8") as f:
        shell_text = f.read()
    shell = json.loads(_strip_shell(shell_text))

    # 1) 壳不再内嵌完整 scenes；改为 scenes_meta + slice_index
    assert_("scenes" not in shell, "壳不再含完整 scenes 字典（分片达成）")
    assert_("scenes_meta" in shell, "壳含 scenes_meta（轻量索引）")
    assert_("slice_index" in shell, "壳含 slice_index（切片清单）")

    order = shell.get("scene_order", [])
    assert_(len(order) > 0, "scene_order 非空")

    # 2) 每个切片落地且可解析
    meta_keys = set(shell["scenes_meta"].keys())
    idx_keys = set(shell["slice_index"].keys())
    assert_(meta_keys == set(order), "scenes_meta 覆盖全部 scene_order")
    assert_(idx_keys == set(order), "slice_index 覆盖全部 scene_order")

    reconstructed = {}
    for sid in order:
        sp = os.path.join(SLICES_DIR, sid + ".js")
        assert_(os.path.exists(sp), "切片文件存在: slices/%s.js" % sid)
        with open(sp, encoding="utf-8") as f:
            fid, js = _strip_slice(f.read())
        assert_(fid == sid, "切片 %s 内 id 与文件名一致" % sid)
        bundle = json.loads(js)
        # 3) bundle 必备字段齐全，形状与旧单文件 SD.scenes[id] 一致
        missing = REQUIRED_BUNDLE_KEYS - set(bundle.keys())
        assert_(not missing, "切片 %s bundle 含必备字段（缺：%s）" % (sid, missing or "-"))
        assert_(bundle["meta"].get("key") == sid, "切片 %s meta.key 一致" % sid)
        assert_("vocab_pack" in bundle["meta"], "切片 %s 带 vocab_pack（语境包下发）" % sid)
        reconstructed[sid] = bundle

    # 重建数 == 注册数
    assert_(len(reconstructed) == len(order), "重建 scenes 数 == 注册数")

    # bootstrap 行存在（同步组装 SD.scenes，前端零改动）
    assert_("window.SANDBOX_DATA.scenes = window.SANDBOX_SLICES" in shell_text,
            "壳含同步组装 SD.scenes 的 bootstrap")

    # 体积对比：壳 + 切片 应显著小于旧的单一 784KB 巨石（壳本身不再是巨石）
    shell_kb = os.path.getsize(SHELL) / 1024.0
    assert_(shell_kb < 500, "壳体积 %.0f KB < 500KB（不再巨石）" % shell_kb)

    print("\n分片契约：全部通过（壳 %.0f KB，%d 个切片）" % (shell_kb, len(order)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
