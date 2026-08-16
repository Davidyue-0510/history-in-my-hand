# -*- coding: utf-8 -*-
"""
把 data/ 下的权威数据编译成 demo 可直接加载的 data.js。

设计要点：
    冲突不是手工标注的。凡是 (subject, predicate) 相同而值不同的断言，
    自动聚合成一个「冲突组」。录入者只需忠实记录各版本说了什么，
    矛盾会自己浮现 —— 这是本项目与所有历史可视化产品的分界线。

    v0.5 起，场景不再硬编码在本文件里。切片注册表是 data/scenes.json，
    本文件只负责遍历它。新增一个县 = 建 data/<dir>/ 六件套 + 注册表加一条，
    build.py / lint.py / resonance.py / hub.js 全部零改动。

    地形网格与江河边墙是「单一真相」，不随场景复制。地形网格本身由
    data/terrain/registry.json 注册表驱动（v0.22 起写死常量退役），场景可声明
    terrain_grid 指向别的已拉取网格；未拉取/部分网格诚实标 OFF_GRID，不伪造高程。

用法：
    python tools/build.py
"""
import json
import os
import sys
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DATA = os.path.join(ROOT, "data")
OUT = os.path.join(ROOT, "demo", "data.js")
SLICES_DIR = os.path.join(ROOT, "demo", "slices")  # 地基二：每切片一个文件
REGISTRY = os.path.join(DATA, "scenes.json")

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))  # tools/ 顶层（fetch_terrain 驻留处）
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "analysis"))  # terrain_model 驻留处
import vocab_loader as VL  # noqa: E402
import fetch_terrain as FT  # noqa: E402  地形网格注册表（v0.22：写死常量退役）

# meta 里属于「配置」而非「内容」的键，不需要原样带进 bundle.meta 的字段
_REGISTRY_ONLY = {"dir", "extra_files"}

# 辽东体系 region：无场景级 control.json 时，这些切片沿用全局 SD.control（明末清初
# 辽东控制权），保持 v0.10 既有行为。其他 region（唐/壬辰…）必须自带 control.json，
# 否则 build 注入显式空 control=[] → 前端隐藏控制层并诚实提示（v0.24 修「控制层
# 单例被新切片污染」：control_seats 曾把 caizhou/pyongyang 塞进辽东 Voronoi）。
LIAODONG_REGIONS = {"liaobei", "jianzhou", "liaodong", "liaonan", "liaoxi"}


def load_registry():
    """读取切片注册表，补全缺省字段。其他工具（lint / resonance）也调用本函数，
    以保证「有哪些切片」这个问题在全项目只有一个答案。"""
    with open(REGISTRY, "r", encoding="utf-8") as f:
        reg = json.load(f)
    scenes = reg["scenes"]
    order = reg.get("order") or list(scenes.keys())
    # 注册表里写了但 order 漏掉的，追加在末尾——不静默丢弃
    for k in scenes:
        if k not in order:
            order.append(k)
    resolved = []
    for key in order:
        sc = scenes.get(key)
        if sc is None:
            print("  ! 注册表 order 中的 '%s' 没有对应的 scenes 条目，跳过" % key)
            continue
        sc = dict(sc)
        sc.setdefault("dir", key)
        sc.setdefault("kind", "county")
        sc.setdefault("extra_files", ["events", "edges"])
        if "page" not in sc:
            sc["page"] = ("%s.html" % key) if sc["kind"] == "battle" \
                else ("county.html?scene=%s" % key)
        sc["_key"] = key
        resolved.append(sc)
    reg["_resolved"] = resolved
    return reg


def scene_dir(sc):
    return os.path.join(DATA, sc["dir"])


def load_json(dirpath, name):
    with open(os.path.join(dirpath, name), "r", encoding="utf-8") as f:
        return json.load(f)


def load_jsonl(dirpath, name):
    rows = []
    with open(os.path.join(dirpath, name), "r", encoding="utf-8") as f:
        for lineno, line in enumerate(f, 1):
            line = line.strip()
            if not line or line.startswith("//"):
                continue
            try:
                rows.append(json.loads(line))
            except json.JSONDecodeError as e:
                sys.exit("%s/assertions.jsonl 第 %d 行解析失败: %s" % (dirpath, lineno, e))
    return rows


def build_conflicts(assertions):
    """按 (subject, predicate) 聚合，值不唯一者即为冲突组。"""
    groups = defaultdict(list)
    for a in assertions:
        if a.get("layer") == "gap":
            continue
        groups[(a["subject"], a["predicate"])].append(a)

    conflicts = []
    for (subject, predicate), items in groups.items():
        values = {str(i.get("value", i.get("value_text", ""))) for i in items}
        if len(values) <= 1:
            continue

        layers = {i.get("layer") for i in items}
        if layers == {"scholarship"}:
            kind = "scholarly_divergence"
        elif "record" in layers and "scholarship" in layers:
            kind = "record_vs_scholarship"
        else:
            kind = "record_vs_record"

        spread = None
        nums = [i["value"] for i in items if isinstance(i.get("value"), (int, float))]
        if len(nums) >= 2 and min(nums) > 0:
            spread = round(max(nums) / min(nums), 2)

        # 冲突 id 由 (subject, predicate) 派生而非自增——这样同一处冲突在多次
        # 重建之间保持稳定，可以被外部引用、被 lint 追踪、被 URL 深链。
        cid = "cf:%s|%s" % (subject, predicate)

        conflicts.append({
            "id": cid,
            "subject": subject,
            "predicate": predicate,
            "kind": kind,
            "count": len(items),
            "spread": spread,
            "assertion_ids": [i["id"] for i in items],
        })

    conflicts.sort(key=lambda c: (c["spread"] or 0), reverse=True)
    return conflicts


def _auto_simulate(sc, dirpath, timelines):
    """v0.33 自动推演：为非主线分支生成 control_sim JSON。"""
    import json as _json
    scene_id = sc["_key"]
    sim_config = os.path.join(dirpath, "sim.json")
    if os.path.exists(sim_config):
        cfg = _json.load(open(sim_config, encoding="utf-8"))
    elif scene_id == "imjin":
        cfg = {
            "forces": {"朝鲜": 20000, "日本方": 28000},
            "years": [1592, 1598],
            "reinforce": [
                [1593, "明方", 55000, "uiju"],
                [1594, "明方", 25000, "pyongyang"],
                [1594, "日本方", 15000, "busan"],
                [1595, "明方", 20000, "hanseong"],
                [1596, "日本方", 25000, "busan"],
                [1597, "明方", 40000, "uiju"],
                [1598, "明方", 30000, "busan"],
            ],
        }
    else:
        return
    for branch_id in timelines:
        if branch_id == "main":
            continue
        out_path = os.path.join(dirpath, "control_sim_%s.json" % branch_id)
        try:
            from simulate import simulate
            r = simulate(scene_id, branch_id, *cfg["years"],
                         cfg["forces"], cfg.get("reinforce", []))
            output = {"_branch": branch_id, "control": r}
            with open(out_path, "w", encoding="utf-8") as f:
                _json.dump(output, f, ensure_ascii=False, indent=1)
        except Exception:
            pass


def _inject_global_refs(persons, places, dirpath, sc):
    """v0.34 从全局实体注册表注入跨场景引用。"""
    reg_path = os.path.join(ROOT, "data", "entities", "global.json")
    if not os.path.exists(reg_path):
        return
    reg = json.load(open(reg_path, encoding="utf-8"))
    sid = sc["_key"]

    for p in persons["persons"]:
        name = p.get("name", "")
        greg = reg["persons"].get(name)
        if greg and len(greg.get("scenes", [])) > 1:
            p["_global_id"] = greg["id"]
            p["_other_scenes"] = [s for s in greg["scenes"] if s != sid][:8]

    for p in places["places"]:
        name = p.get("name", "")
        greg = reg["places"].get(name)
        if greg and len(greg.get("scenes", [])) > 1:
            p["_global_id"] = greg["id"]
            p["_other_scenes"] = [s for s in greg["scenes"] if s != sid][:8]


def _resolve_faction_geo(sv, sc):
    """v0.36 派系籍贯叠加层：把 vocab.factions 的 bases（历史城市名）解析成坐标，
    注入 bundle.faction_geo，供 county.html 地图直接叠「派系籍贯」overlay。
    坐标来自 data/geo/gazetteer.json；解析不到的城市诚实标 resolved:false，绝不伪造。
    无 factions 或不含 bases 的场景返回 None（前端据此不显示叠加层）。"""
    facs = (sv or {}).get("factions") or {}
    if not facs:
        return None
    # 懒加载地名表（含 alias）
    _gpath = os.path.join(ROOT, "data", "geo", "gazetteer.json")
    if not hasattr(_resolve_faction_geo, "_g"):
        g = json.load(open(_gpath, encoding="utf-8")) if os.path.exists(_gpath) else {"entries": []}
        _gl = {}
        for e in g.get("entries", []):
            _gl[e["name"]] = (e["lon"], e["lat"], e.get("note", ""))
            for a in e.get("alias", []):
                _gl.setdefault(a, (e["lon"], e["lat"], e.get("note", "")))
        _resolve_faction_geo._g = _gl
    G = _resolve_faction_geo._g

    out = {}
    for fid, f in facs.items():
        bases = f.get("bases") or []
        pts = []
        for bname in bases:
            if bname in G:
                lon, lat, note = G[bname]
                pts.append({"name": bname, "lon": lon, "lat": lat, "note": note, "resolved": True})
            else:
                pts.append({"name": bname, "lon": None, "lat": None, "note": "", "resolved": False})
        if pts:
            out[fid] = {
                "name": f.get("name", fid),
                "color": (sv.get("faction_colors") or {}).get(fid, "#888"),
                "geo_note": f.get("geo_note", ""),
                "points": pts,
            }
    return out or None


def build_scene(sc):
    """构建单个场景包（不含地形——地形在所有场景间共享）。"""
    dirpath = scene_dir(sc)
    sources = load_json(dirpath, "sources.json")
    places = load_json(dirpath, "places.json")
    persons = load_json(dirpath, "persons.json")
    assertions = load_jsonl(dirpath, "assertions.jsonl")

    src_by_id = {s["id"]: s for s in sources["sources"]}
    for a in assertions:
        s = src_by_id.get(a["source"])
        a["_party"] = s["party"] if s else "unknown"
        # faction（派系）是比 party 更细的立场维度；明朝内各利益集团会因自身
        # 利害润色/夸张记载。暴露到 bundle 供前端与共振在「明方」桶内二次拆分。
        a["_faction"] = s.get("faction") if s else None

    # 人物影响力指标：统计引用该人物的 record/scholarship 断言数。
    # 构建期算好缓存进 bundle.persons，前端据此把"关联人物"按史料记载量定大小。
    pid_influence = defaultdict(int)
    for a in assertions:
        subj = a.get("subject", "")
        if subj.startswith("person:"):
            pid = subj[len("person:"):]
            if a.get("layer") in ("record", "scholarship"):
                pid_influence[pid] += 1
    for p in persons["persons"]:
        p["influence"] = pid_influence.get(p["id"], 0)

    # v0.34 全局实体注册表：跨场景交叉引用
    _inject_global_refs(persons, places, dirpath, sc)

    meta = {k: v for k, v in sc.items()
            if k not in _REGISTRY_ONLY and not k.startswith("_")}
    meta["key"] = sc["_key"]
    meta["scene_id"] = sc["_key"]  # v0.32 前端用 D.scene_id 定位数据文件

    bundle = {
        "meta": meta,
        "sources": sources["sources"],
        "places": places["places"],
        "persons": persons["persons"],
        "assertions": assertions,
        "conflicts": build_conflicts(assertions),
        "gaps": [a["id"] for a in assertions if a.get("layer") == "gap"],
    }

    # 额外文件：约定 <name>.json 的顶层键就叫 <name>，直接摊平到 bundle。
    # 顶层键不同名的（routes 里还带 timeline、route_kaiyuan 里带 report/verdict）
    # 在下面的 hook 里处理——这些是切片的特有结构，不是通例。
    raw = {}
    for f in sc["extra_files"]:
        raw[f] = load_json(dirpath, f + ".json")
        if f in raw[f]:
            bundle[f] = raw[f][f]

    # 战役切片的行军路线
    if "routes" in raw:
        bundle["timeline"] = raw["routes"].get("timeline", [])
        bundle["columns"] = persons.get("columns", [])
    if "engagements" in raw:
        bundle["attrition"] = raw["engagements"].get("attrition")
        bundle["fatigue_weight"] = raw["engagements"].get("fatigue_weight")
    # 县级切片的单条进军路线（文件名 route_<key>.json）
    for f in sc["extra_files"]:
        if f.startswith("route_"):
            bundle["route"] = raw[f].get("route")
            bundle["route_report"] = raw[f].get("report")
            bundle["route_verdict"] = raw[f].get("verdict")

    bundle.setdefault("events", [])
    bundle.setdefault("edges", [])

    # 实际控制权（v0.24 场景化——修「控制层单例被新切片污染」）：
    #   有 data/<dir>/control.json          → bundle.control / control_seats / control_years（场景专属）
    #   无文件且 region ∈ 辽东体系          → 不注入（前端 fallback 全局 SD.control，辽东 v0.10 行为不变）
    #   无文件且 region ∉ 辽东体系          → 显式 control=[]（前端隐藏控制层，诚实提示「本场景暂无控制权数据」）
    ctrl_path = os.path.join(dirpath, "control.json")
    if os.path.exists(ctrl_path):
        ctrl_blob = load_json(dirpath, "control.json")
        ctrl = ctrl_blob.get("control", [])
        bundle["control"] = ctrl
        pmap2 = {p["id"]: p for p in places["places"]}
        seats2 = {}
        for c in ctrl:
            pid = c.get("place_id")
            if pid in seats2:
                continue
            p = pmap2.get(pid)
            if p and p.get("lon") is not None and p.get("lat") is not None:
                seats2[pid] = {"place_id": pid, "name": p.get("name", pid),
                               "lon": p["lon"], "lat": p["lat"],
                               "region": sc.get("region")}
        bundle["control_seats"] = list(seats2.values())
        bundle["control_years"] = ctrl_blob.get("_years") or [
            min(c["start"] for c in ctrl if isinstance(c.get("start"), int)),
            max(c["end"] for c in ctrl if isinstance(c.get("end"), int)),
        ]
    elif sc.get("region") not in LIAODONG_REGIONS:
        bundle["control"] = []  # 显式空：前端据此隐藏控制层

    # 分支时间线（v0.31）：
    #   data/<dir>/timelines.json 定义可选的因果分支。
    #   断言可带 timeline 字段（缺省="main"），控制权数据同理。
    #   所有时间线的断言都注入 bundle；前端按 D.active_timeline 过滤。
    tl_path = os.path.join(dirpath, "timelines.json")
    if os.path.exists(tl_path):
        bundle["timelines"] = load_json(dirpath, "timelines.json").get("timelines", {})
        bundle["meta"]["has_timelines"] = True
        # v0.33 自动推演：为所有分支生成控制权模拟数据
        _auto_simulate(sc, dirpath, bundle["timelines"])

    # 边归一化：地理切片用 type+label；小说等 world 可能只给 relation/rel 自由文本。
    # 这里保证每条边都有 label（否则 drawDynamic 会把 undefined 画上地图）与 type 兜底。
    for e in bundle["edges"]:
        e.setdefault("label", e.get("relation") or e.get("rel") or "")
        e.setdefault("type", "misc")

    # 语境包（v0.22）：切片用的词表可能不是默认包——内联包（虚构 world）或
    # 注册表声明的 vocab_pack（未来的唐代切片）。只要不是默认包就随 bundle 下发，
    # 前端读 D.vocab || SD.vocab 自动取到正确的一份，零改动。
    # 同时把本 world 的边类型表 edge_types 摊平进 bundle——图例/配色据此数据驱动，
    # 不再写死「互市/部族同盟」等辽东专属栏目（见 demo/county.js）。
    pack_id, sv = VL.resolve_for_scene(sc["_key"], sc)
    bundle["meta"]["vocab_pack"] = pack_id
    if pack_id != VL.default_pack_id():
        bundle["vocab"] = VL.public(sv)
        if sv.get("edge_types"):
            bundle["edge_types"] = sv["edge_types"]

    # 派系籍贯叠加层（v0.36）：factions 的 bases（城市名）→ 坐标，注入 bundle.faction_geo
    fg = _resolve_faction_geo(sv, sc)
    if fg:
        bundle["faction_geo"] = fg
    return bundle


# ────────────────────────── 地形（v0.22 注册表驱动）──────────────────────────
# 在此之前，LON0/LAT0/STEP 与产物文件名是写死常量，覆盖第二片区域只能改源码。
# 现在「有哪些网格」全在 data/terrain/registry.json，本模块只按 id 取。
_terr_cache = {}  # gid -> (terr, grid, status)，避免重复读盘


def get_terrain(gid=None):
    """按注册表取地形。gid 缺省=default。返回 (terr, grid, status)。
    status != 'fetched'（未拉取/部分/文件缺失）→ 返回 (None, None, status)。
    诚实原则：绝不把假高程喂给下游。"""
    reg = FT.load_registry()
    gid = gid or FT.default_grid_id(reg)
    if gid in _terr_cache:
        return _terr_cache[gid]
    grids = reg.get("grids", {})
    if gid not in grids:
        res = (None, None, "unknown")
        _terr_cache[gid] = res
        return res
    g = FT.get_grid(reg, gid)
    status = g.get("status")
    if status != "fetched" or not os.path.exists(g["_path"]):
        # 诚实标注：未拉取/部分网格在界面标 OFF_GRID，不生成看着合理的假高程
        res = (None, None, status)
        _terr_cache[gid] = res
        return res
    import terrain_model
    terr = terrain_model.Terrain(g["_path"])
    grid = {
        "_grid_id": gid,
        "lon0": terr.lon0, "lat0": terr.lat0, "step": terr.step,
        "nx": terr.nx, "ny": terr.ny,
        "elev": [int(e) if e is not None else 0 for e in terr.elev],
        "source": terr.meta.get("_source"),
        "source_url": terr.meta.get("_source_url"),
        "min": terr.meta.get("min"), "max": terr.meta.get("max"),
        "bbox": g["bbox"],
    }
    res = (terr, grid, "fetched")
    _terr_cache[gid] = res
    return res


def _elev_or_none(terr, lon, lat):
    """在网格 bbox 内才返回双线性插值高程；越界返回 None（绝不 clamp 成边缘假值）。"""
    lo1, la1 = terr.lon0, terr.lat0
    lo2 = terr.lon0 + terr.step * (terr.nx - 1)
    la2 = terr.lat0 + terr.step * (terr.ny - 1)
    if not (lo1 - 1e-6 <= lon <= lo2 + 1e-6 and la1 - 1e-6 <= lat <= la2 + 1e-6):
        return None
    return round(terr.at(lon, lat))


# ────────────────────────── 切片分片（v0.22 地基二）──────────────────────────
# 在此之前，全部切片被塞进单一 784KB 的 demo/data.js。覆盖全国时单文件会膨胀到
# 数十 MB、且每次改动都重写整份。现在每切片落地为 demo/slices/<id>.js，壳只留
# 共享数据 + 轻量 scenes_meta + slice_index。壳在解析期同步加载全部切片组装
# SD.scenes，保持既有前端（county.js/app.js/hub.js）零改动；未来要按需异步，
# 把壳尾部的同步 document.write 换成 data_loader.js 的 ensureScene 即可。

def _clean_slices():
    """删掉上一轮残留的切片文件，避免被删场景留下孤儿 .js。"""
    if not os.path.isdir(SLICES_DIR):
        return
    for fn in os.listdir(SLICES_DIR):
        if fn.endswith(".js"):
            try:
                os.remove(os.path.join(SLICES_DIR, fn))
            except OSError:
                pass


def write_slice(key, bundle):
    os.makedirs(SLICES_DIR, exist_ok=True)
    path = os.path.join(SLICES_DIR, key + ".js")
    with open(path, "w", encoding="utf-8") as f:
        f.write("// 本文件由 tools/build.py 自动生成（切片 %s），请勿手工编辑。\n" % key)
        f.write("// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES[\"%s\"]。\n" % key)
        f.write("(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});\n")
        f.write("window.SANDBOX_SLICES[\"%s\"] = " % key)
        json.dump(bundle, f, ensure_ascii=False, indent=1)
        f.write(";\n")


def _slice_meta(bundle):
    """枢纽卡片 / 懒加载所需的最小字段，避免为列表加载完整 bundle。"""
    m = bundle.get("meta", {})
    return {
        "key": m.get("key"),
        "scene_id": m.get("scene_id"),  # v0.32 前端定位数据文件
        "title": m.get("title"),
        "dossier_label": m.get("dossier_label"),
        "subtitle": m.get("subtitle"),
        "kind": m.get("kind"),
        "region": m.get("region"),
        "page": m.get("page"),
        "primary_place": m.get("primary_place"),
        "vocab_pack": m.get("vocab_pack"),
        "terrain_grid": m.get("terrain_grid"),
        "terrain_off_grid": m.get("terrain_off_grid", False),
        "counts": {
            "src": len(bundle.get("sources", [])),
            "place": len(bundle.get("places", [])),
            "person": len(bundle.get("persons", [])),
            "assert": len(bundle.get("assertions", [])),
            "conflict": len(bundle.get("conflicts", [])),
            "gap": len(bundle.get("gaps", [])),
            "record": sum(1 for a in bundle.get("assertions", [])
                          if a.get("layer") == "record"),
            "scholarship": sum(1 for a in bundle.get("assertions", [])
                               if a.get("layer") == "scholarship"),
            "inference": sum(1 for a in bundle.get("assertions", [])
                             if a.get("layer") == "inference"),
        },
    }


def main():
    reg = load_registry()
    resolved = reg["_resolved"]

    sd = {
        "meta": {
            "project": "小菜狗的文明图景 / Vege-civilization",
            "slice": "multi-scene · %d 个切片" % len(resolved),
            "note": "所有引文均标注 quote_status，未经点校本逐字核对者标记为 paraphrase_unverified。",
        },
        "regions": reg.get("regions", []),
        "scene_order": [sc["_key"] for sc in resolved],
    }

    # 共享受控词表：默认语境包（data/vocab/<default>.json）。
    # 用别的包的切片会在自己的 bundle 里带一份，见 build_scene。
    vocab = VL.load_default()
    sd["vocab"] = VL.public(vocab)
    sd["meta"]["default_vocab_pack"] = VL.default_pack_id()
    sd["meta"]["vocab_packs"] = VL.list_packs()

# 共享地形（注册表驱动；默认网格见 data/terrain/registry.json）
    # v0.37：「场景解析默认」与「shell 回退默认」解耦——
    #   default = china_coarse（55k 点）：供 build_scene 解析未声明 terrain_grid 的场景，
    #     让 bozhou/ningxia/yangzhou 等非东北场景得到全国粗底而非被错误渲染为辽东。
    #   shell_default = liaodong（6499 点）：仅供总览页/壳做轻量回退，shell 体积受分片契约约束（<500KB）。
    #     shell 不应背全国大网格——分片的核心就是大网格放切片里。
    reg = FT.load_registry()
    default_gid = FT.default_grid_id(reg)
    shell_gid = reg.get("shell_default", default_gid)
    terr, grid, tstatus = get_terrain(shell_gid)
    sd["terrain"] = grid
    sd["terrain_grid_id"] = default_gid if grid else None
    sd["terrain_status"] = tstatus
    if tstatus != "fetched":
      print("  ! shell 地形网格 %r 状态=%s，总览页将标 OFF_GRID（不伪造高程）"
              % (shell_gid, tstatus))

    # 共享江河 / 边墙（取自萨尔浒片层的辽东风土，投影范围一致，各县在其内）
    sarhu_places = load_json(os.path.join(DATA, "sarhu"), "places.json")
    sd["rivers"] = sarhu_places["rivers"]
    sd["wall"] = sarhu_places["wall"]

    scenes = {}
    scenes_meta = {}
    slice_index = {}
    _clean_slices()
    for sc in resolved:
        key = sc["_key"]
        bundle = build_scene(sc)
        # 每切片地形：默认用共享网格；场景可声明 terrain_grid 指向别的已拉取网格。
        # 声明了未拉取/部分网格 → 诚实标 OFF_GRID，绝不给越界插值。
        scene_gid = sc.get("terrain_grid") or default_gid
        scene_terr, _sg, scene_tstatus = get_terrain(scene_gid)
        bundle["meta"]["terrain_grid"] = scene_gid
        # v0.37：把 per-scene 地形网格注入 bundle，前端优先用 D.terrain，
        # 不再永远读共享 SD.terrain（旧逻辑导致非辽东场景误显辽东地形）。
        if _sg is not None:
            bundle["terrain"] = _sg
        if scene_terr is None:
            bundle["meta"]["terrain_off_grid"] = True
        else:
            for p in bundle["places"]:
                if p.get("lon") is not None and p.get("lat") is not None:
                    ev = _elev_or_none(scene_terr, p["lon"], p["lat"])
                    p["elev"] = ev
                    if ev is None:
                        p["off_grid"] = True
        # 地基二：每切片落地为独立文件（壳不再内嵌完整 scenes 字典）
        write_slice(key, bundle)
        slice_index[key] = "slices/%s.js" % key
        scenes_meta[key] = _slice_meta(bundle)
        scenes[key] = bundle  # 仅留内存引用，供下方 route_terrain / 统计使用

    # 萨尔浒行军地形代价（只有带 routes 的切片才有）
    import terrain_model
    for key, bundle in scenes.items():
        if not bundle.get("routes"):
            continue
        sgid = bundle["meta"].get("terrain_grid")
        if bundle["meta"].get("terrain_off_grid"):
            print("  ! %s 路线地形分析跳过：地形网格 %r 不可用（OFF_GRID）" % (key, sgid))
            continue
        scene_terr, _, _ = get_terrain(sgid)
        if scene_terr is None:
            continue
        pmap = {p["id"]: p for p in bundle["places"]}
        bundle["route_terrain"] = [
            terrain_model.analyze_route(scene_terr, r, pmap) for r in bundle["routes"]
        ]

    # 地基二：壳不再内嵌完整 scenes 字典，只留轻量索引 + 切片文件清单。
    # 完整 bundles 由 demo/slices/<id>.js 加载（见本文件尾部同步组装 bootstrap）。
    sd["scenes_meta"] = scenes_meta
    sd["slice_index"] = slice_index

    # 走廊路线（跨切片，读 data/corridors.json）
    corr_path = os.path.join(DATA, "corridors.json")
    if os.path.exists(corr_path):
        with open(corr_path, encoding="utf-8") as f:
            sd["corridors"] = json.load(f).get("corridors", [])
    else:
        sd["corridors"] = []

    # 研究线索（由 tools/leads.py 从 gap 断言生成）
    leads_path = os.path.join(DATA, "leads.json")
    if os.path.exists(leads_path):
        with open(leads_path, encoding="utf-8") as f:
            sd["leads"] = json.load(f)
    else:
        sd["leads"] = {"leads": []}

    # 共振报告（hub 页面用）—— 与 tools/resonance.py 的输出同步。
    # 壳只下发 hub 真正消费的 meta + scene_summary（约 30KB）；
    # 完整的事件级共振矩阵（events，~190KB）留在 data/resonance_report.json，
    # 由网关 [6] 校验、供离线深度分析，不进壳——否则 126 场景会让壳突破 500KB 上限。
    rp = os.path.join(DATA, "resonance_report.json")
    if os.path.exists(rp):
        with open(rp, encoding="utf-8") as f:
            _full_res = json.load(f)
        sd["resonance"] = {
            "meta": _full_res.get("meta", {}),
            "scene_summary": _full_res.get("scene_summary", []),
        }
    else:
        sd["resonance"] = {"meta": {}, "scene_summary": []}

    # ── 实际控制态势（v0.10）──────────────────────────────────────────────
    # 控制权是「空间控制权」维度的断言扩展：谁在 [start,end] 年间控制哪座城。
    # 几何（辖区）不在此存——由前端按治所最近邻推算（见 demo/control_layer.js），
    # 这样本文件只管「事实」，边界可随时换成 CHGIS 等外部数据源而不动前端。
    ctrl_path = os.path.join(DATA, "control_liaodong.json")
    if os.path.exists(ctrl_path):
        with open(ctrl_path, encoding="utf-8") as f:
            ctrl = json.load(f)
        sd["control"] = ctrl.get("control", [])
    else:
        sd["control"] = []

    # 治所几何：由「控制权数据里出现的 place_id」驱动（v0.24 修复——之前遍历所有
    # county 切片的 primary_place，新切片唐/壬辰的蔡州/平壤被塞进辽东 Voronoi 网格，
    # 而 control 数据没有它们的控制权 → 空洞 + 辽东色块错位到错误经纬）。
    # 现在只收集 control 数据实际描述的治所几何；无控制权数据的切片不进网格。
    ctrl_ids = {c.get("place_id") for c in sd["control"]}
    seats = {}
    for sc in resolved:
        if sc.get("kind") != "county":
            continue
        try:
            pl = load_json(scene_dir(sc), "places.json")["places"]
        except Exception:
            continue
        for p in pl:
            pid = p.get("id")
            if pid not in ctrl_ids or pid in seats:
                continue
            if p.get("lon") is None or p.get("lat") is None:
                continue
            seats[pid] = {
                "place_id": pid,
                "name": p.get("name", pid),
                "lon": p["lon"], "lat": p["lat"],
                "region": sc.get("region"),
            }
    sd["control_seats"] = list(seats.values())

    # 年份滑块范围：取控制权时间线的最小 start / 最大 end，但夹到动态期窗口
    # （1616–1644）。pre-1616 全为明方、1644 之后格局已定，滑出去无意义。
    yrs = [c["start"] for c in sd["control"] if isinstance(c.get("start"), int)]
    ends = [c["end"] for c in sd["control"] if isinstance(c.get("end"), int)]
    cy0 = max(1616, min(yrs)) if yrs else 1616
    cy1 = max(1644, max(ends)) if ends else 1644
    sd["control_years"] = [cy0, cy1]

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("// 本文件由 tools/build.py 自动生成，请勿手工编辑。\n")
        f.write("// 权威数据源：data/scenes.json 注册的 %d 个切片\n" % len(resolved))
        f.write("// v0.22 地基二：完整切片数据已分片到 demo/slices/<id>.js，\n")
        f.write("// 本文件只承载「壳」（共享词表/地形/江河/控制层 + 轻量 scenes_meta + slice_index），\n")
        f.write("// 并在解析期同步加载所有切片组装 SANDBOX_DATA.scenes，保持既有前端零改动。\n")
        f.write("window.SANDBOX_DATA = ")
        json.dump(sd, f, ensure_ascii=False, indent=1)
        f.write(";\n")
        # 同步组装 SD.scenes：解析期 document.write 切片脚本，按顺序同步执行，
        # 保证 SD.scenes 在本文件执行完毕前即完整（county.js/app.js/hub.js 不改）。
        # 注意：组装语句本身也要 document.write 出去，确保它在所有切片脚本之后执行。
        f.write("\nwindow.SANDBOX_SLICES = window.SANDBOX_SLICES || {};\n")
        f.write("(function () {\n")
        f.write("  var order = (window.SANDBOX_DATA.scene_order) || [];\n")
        f.write("  for (var i = 0; i < order.length; i++) {\n")
        f.write("    document.write('<script src=\"slices/' + order[i] + '.js\"><\\/script>');\n")
        f.write("  }\n")
        f.write("  document.write('<script>window.SANDBOX_DATA.scenes = window.SANDBOX_SLICES;<\\/script>');\n")
        f.write("})();\n")

    size_kb = os.path.getsize(OUT) / 1024.0
    print("已生成 %s  (%.0f KB)" % (OUT, size_kb))
    tot = defaultdict(int)
    for sc in resolved:
        b = scenes[sc["_key"]]
        n = (len(b["sources"]), len(b["places"]), len(b["persons"]),
             len(b["assertions"]), len(b["conflicts"]), len(b["gaps"]))
        for i, k in enumerate(("src", "place", "person", "assert", "conflict", "gap")):
            tot[k] += n[i]
        print("  · %-10s 史料 %2d / 地名 %2d / 人物 %2d / 断言 %3d / 冲突 %2d / 缺口 %2d"
              % ((sc.get("title", sc["_key"]),) + n))
    print("  ── 合计：史料 %d / 地名 %d / 人物 %d / 断言 %d / 冲突 %d / 缺口 %d"
          % (tot["src"], tot["place"], tot["person"],
             tot["assert"], tot["conflict"], tot["gap"]))

    # 地形代价报告
    for key, b in scenes.items():
        if not b.get("route_terrain"):
            continue
        print("\n  %s · 行军地形代价（模型日数 / 史料日数 = 紧张度）：" % key)
        for t in b["route_terrain"]:
            strain = t["strain"]
            flag = ""
            if strain is not None:
                if strain > 1.35:
                    flag = "  ← 史料所记速度快于模型，值得复查"
                elif strain < 0.5:
                    flag = "  ← 远慢于地形所允许"
            print("    %-12s %5.0f 里  爬升 %5d m  模型 %4.1f 日 / 史料 %s 日  紧张度 %s%s"
                  % (t["route"], t["total_li"], t["total_ascent_m"],
                     t["model_days"], t["reported_days"],
                     ("%.2f" % strain) if strain else "-", flag))


if __name__ == "__main__":
    main()
