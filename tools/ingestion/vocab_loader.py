# -*- coding: utf-8 -*-
"""受控词表的唯一加载入口（v0.22）。

## 为什么要这个文件

v0.3 的教训是「分类规则必须单一真值」——立场分桶散落在 county.js / resonance.py /
lint.py 三处，萨尔浒共振度被静默算错。当时的解法是建 data/vocab.json 全局单例。

到 v0.22 又撞上第二层问题：那份单例是**明清专属**的。party_bucket 里的
「建州·官修」「朝鲜·亲历」、factions 里的东林 / 阉党，放到唐代切片全是错的。
而彼时已有 7 个消费者硬读同一个路径 —— 再拖下去，每多一个消费者，
换语境就贵一分。

所以 v0.22 把词表拆成「语境包」，并把加载收敛到本文件：

    data/vocab/_base.json       跨朝代通用（layer / quote_status）
    data/vocab/ming_qing.json   明清·辽东语境（parties / party_bucket / factions）
    data/vocab/tang.json        唐·藩镇语境（示范包，证明可换）
    data/<scene>/vocab.json     场景内联包（虚构世界用，优先级最高）

## 继承规则

包可声明 `"extends": "_base"`，加载时按链合并（子覆盖父，dict 键级合并）。
**默认继承 _base**：任何包不写 extends 也会拿到 layer / quote_status，
因为这两维不随时代变。想要完全独立包，显式写 `"extends": null`。

注意继承是**浅层键合并**，不是深合并：子包给了 party_bucket 就整块替换父包的，
不会出现「唐代包意外继承了明清的建州桶」这种串味。

## 场景 → 包 的解析优先级

    1. data/<dir>/vocab.json          场景内联包（虚构世界）
    2. scenes.json 该场景的 vocab_pack
    3. scenes.json 顶层 default_vocab_pack
    4. "ming_qing"                    兜底（本项目历史起点）

用法：
    import vocab_loader as V
    v = V.load_pack("ming_qing")           # 单个包
    pack_id, v = V.resolve_for_scene("sarhu")   # 场景对应的包
    v = V.load_default()                   # 默认包（旧全局调用的等价替换）
"""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DATA = os.path.join(ROOT, "data")
PACK_DIR = os.path.join(DATA, "vocab")
REGISTRY = os.path.join(DATA, "scenes.json")

FALLBACK_PACK = "ming_qing"

_cache = {}


class VocabError(Exception):
    pass


def _read(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def pack_path(pack_id):
    return os.path.join(PACK_DIR, "%s.json" % pack_id)


def list_packs():
    """列出所有语境包 id（不含 _base 这类基础包，它不能单独用于场景）。"""
    if not os.path.isdir(PACK_DIR):
        return []
    out = []
    for fn in sorted(os.listdir(PACK_DIR)):
        if not fn.endswith(".json"):
            continue
        pid = fn[:-5]
        if pid.startswith("_"):
            continue
        out.append(pid)
    return out


def _merge(parent, child):
    """浅层键合并：子包出现的键整块覆盖父包。

    刻意不做深合并——若唐代包给了 party_bucket，它就该完整替换明清那套，
    而不是把「建州·官修」悄悄留在结果里。串味 bug 比重复书写贵得多。
    """
    out = dict(parent)
    out.update(child)
    return out


def _resolve_chain(raw, origin, seen):
    """按 extends 链合并。raw 已是读入的 dict。"""
    ext = raw.get("extends", "_base")
    # 基础包自身不继承任何东西（否则默认值会让 _base → _base 自成环）
    if ext is None or (seen and ext == seen[-1]):
        return dict(raw)
    if ext in seen:
        raise VocabError("词表包 extends 出现环：%s → %s" % (" → ".join(seen), ext))
    p = pack_path(ext)
    if not os.path.exists(p):
        raise VocabError("%s 声明 extends=%r，但 data/vocab/%s.json 不存在" % (origin, ext, ext))
    parent = _resolve_chain(_read(p), "data/vocab/%s.json" % ext, seen + [ext])
    return _merge(parent, raw)


def load_pack(pack_id):
    """加载一个语境包（解析 extends）。结果带 `_pack_id` 标记来源。"""
    key = ("pack", pack_id)
    if key in _cache:
        return _cache[key]
    p = pack_path(pack_id)
    if not os.path.exists(p):
        raise VocabError("语境包 %r 不存在（找不到 data/vocab/%s.json）。已有：%s"
                         % (pack_id, pack_id, ", ".join(list_packs()) or "无"))
    v = _resolve_chain(_read(p), "data/vocab/%s.json" % pack_id, [pack_id])
    v["_pack_id"] = pack_id
    _cache[key] = v
    return v


def load_inline(scene_dir_abs, pack_id_hint):
    """加载场景内联包 data/<dir>/vocab.json（同样解析 extends，默认继承 _base）。"""
    p = os.path.join(scene_dir_abs, "vocab.json")
    key = ("inline", p)
    if key in _cache:
        return _cache[key]
    v = _resolve_chain(_read(p), p, ["<inline:%s>" % pack_id_hint])
    v["_pack_id"] = pack_id_hint
    _cache[key] = v
    return v


def _registry():
    key = ("reg",)
    if key not in _cache:
        try:
            _cache[key] = _read(REGISTRY)
        except Exception:
            _cache[key] = {}
    return _cache[key]


def default_pack_id():
    return _registry().get("default_vocab_pack") or FALLBACK_PACK


def load_default():
    """默认语境包。旧代码里 `json.load(data/vocab.json)` 的等价替换。"""
    return load_pack(default_pack_id())


def scene_pack_id(scene_key, scene_cfg=None):
    """场景声明的包 id（不含内联包判断）。"""
    if scene_cfg is None:
        scene_cfg = (_registry().get("scenes") or {}).get(scene_key) or {}
    return scene_cfg.get("vocab_pack") or default_pack_id()


def resolve_for_scene(scene_key, scene_cfg=None):
    """返回 (pack_id, vocab_dict)。内联包 > 场景声明 > 全局默认。

    pack_id 对内联包形如 `inline:novel_fandao`，便于报错时指出真值来源。
    """
    if scene_cfg is None:
        scene_cfg = (_registry().get("scenes") or {}).get(scene_key) or {}
    d = os.path.join(DATA, scene_cfg.get("dir", scene_key))
    if os.path.exists(os.path.join(d, "vocab.json")):
        pid = "inline:%s" % scene_cfg.get("dir", scene_key)
        return pid, load_inline(d, pid)
    pid = scene_pack_id(scene_key, scene_cfg)
    return pid, load_pack(pid)


def resolve_for_dir(dir_name):
    """按 data/ 下的目录名解析（lint / resonance 是按目录遍历的，key 未必等于 dir）。"""
    for k, sc in (_registry().get("scenes") or {}).items():
        if sc.get("dir", k) == dir_name:
            return resolve_for_scene(k, sc)
    # 注册表里没有（例如尚未注册的实验目录）：仍按内联包 > 默认包处理
    d = os.path.join(DATA, dir_name)
    if os.path.exists(os.path.join(d, "vocab.json")):
        pid = "inline:%s" % dir_name
        return pid, load_inline(d, pid)
    pid = default_pack_id()
    return pid, load_pack(pid)


def public(v):
    """剔除注释字段与加载指令，用于注入前端 / 写出产物。

    `extends` 是给 loader 看的继承指令，不是词表内容——它一旦漏进 data.js，
    前端就会看到一个语义不明的字段，而继承在构建期早已解析完毕。
    """
    return {k: val for k, val in v.items()
            if not k.startswith("_") and k != "extends"}


if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding="utf-8")
    print("语境包目录：", PACK_DIR)
    print("默认包：", default_pack_id())
    for pid in list_packs():
        v = load_pack(pid)
        print("  · %-14s %-16s parties=%d bucket=%d factions=%d layers=%d" % (
            pid, v.get("_label", ""), len(v.get("parties", [])),
            len(v.get("party_bucket", {})), len(v.get("factions", {})),
            len(v.get("layers", []))))
    reg = _registry()
    print("\n场景 → 包：")
    for k, sc in (reg.get("scenes") or {}).items():
        pid, _ = resolve_for_scene(k, sc)
        print("  %-22s %s" % (k, pid))
