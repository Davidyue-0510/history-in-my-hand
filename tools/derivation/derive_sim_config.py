# -*- coding: utf-8 -*-
"""G1 · 反事实配置自动派生（北极星③ · v0.125）。

从场景的 `assertions.jsonl`（六维四层断言内核）零手 authoring 派生出推演所需的
三件套：

  - places.json    地点码 → 最小 place 列表（无坐标；G1 不杜撰几何，honest boundary）
  - control.json   单一控制方（综述考订）的史实 timeline，供三阶层 Agent 生成「阻力」
  - sim_config.json 非军事反事实配置（scenario_type / dim_targets / branches /
                   real_branch / start_year / end_year），并标 `_auto_derived=true`

设计铁律（延续项目 honest boundary 原则）：
  - 派生产物一律标 `_auto_derived: true`，与手 authoring 配置区分；反事实分支 id
    以 `whatif_` 前缀，UI 据此渲染 `[what-if]` 徽标。
  - 不杜撰坐标：places 只含 id/name，无 lon/lat → 判为抽象世界（不渲染地图，只渲染
    六维时序 + Branch Event）。这与「坐标缺失 = 不伪造」一致。
  - 速率（base_rate）由史料文本关键词启发式推定「史实走向」（推进 vs 逆转），属 best-effort，
    在 `_derivation_note` 中显式说明，绝不冒充精确考据。

用法：
  python tools/derivation/derive_sim_config.py --scene han_wudi_ruxue
  python tools/derivation/derive_sim_config.py --scene han_wudi_ruxue --run
  python tools/derivation/derive_sim_config.py --assertions path.jsonl --out outdir --dry-run

纯函数（供 test_simulate.py 不变量测试）：
  load_assertions / collect_place_codes / derive_year_span / derive_party /
  derive_places / derive_control / derive_scenario_type / derive_dim_targets /
  derive_branches / derive_config / derive_all
"""
import argparse
import json
import os
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))   # tools/derivation -> 项目根
DATA = os.path.join(ROOT, "data")
SIM_PY = os.path.join(ROOT, "tools", "simulation", "simulate.py")

DIM_NAMES = ["地理", "技术", "制度", "社会", "思想", "事件"]   # 索引 0..5 对应 dims 1..6
DIM_BY_CODE = {i + 1: n for i, n in enumerate(DIM_NAMES)}      # {1:地理, 2:技术, ...}

# 默认语境包（ming_qing）party_bucket 内合法 party 键；派生 source 统一归「学界」
# （→ 综述考订 桶），避免 E05（party 不在受控词表被共振统计静默丢弃）。
DEFAULT_PARTY = "学界"

# 方向关键词：推进 / 逆转（史料文本启发式）
POS_KW = ["立", "设", "颁", "行", "推", "兴", "倡", "尊", "崇", "独尊", "置", "建", "开",
          "兴", "办", "施", "采", "用", "续", "持", "守", "定", "确", "布", "革", "新"]
NEG_KW = ["废", "罢", "黜", "停", "撤", "止", "衰", "弃", "禁", "抑", "废黜", "中止", "弛", "削"]
# 经济类关键词（在制度维基础上进一步细分 economic vs reform）
ECON_KW = ["税", "赋", "钱", "币", "田", "均田", "两税", "租庸", "租调", "市", "商", "盐",
           "铁", "漕", "亩", "户", "口", "徭", "榷"]


def load_assertions(path):
    """读取 assertions.jsonl → list[dict]。空行 / // 注释跳过。"""
    rows = []
    with open(path, encoding="utf-8") as f:
        for ln in f:
            ln = ln.strip()
            if not ln or ln.startswith("//"):
                continue
            rows.append(json.loads(ln))
    return rows


def collect_place_codes(assertions):
    """收集非空的 place 码（保持出现顺序，去重）。"""
    seen = []
    for a in assertions:
        p = a.get("place")
        if isinstance(p, str) and p.strip():
            p = p.strip()
            if p not in seen:
                seen.append(p)
        # place 也可能是 null / 数字 → 忽略
    return seen


def _year_of(a):
    """从断言取公元年：优先 time.gregorian_year，否则 time.start（仅当为整数年）。"""
    t = a.get("time") or {}
    gy = t.get("gregorian_year")
    if isinstance(gy, int):
        return gy
    s = t.get("start")
    if isinstance(s, int):
        return s
    # 形如 "-134-01-01" 的日期串 → 取前导整数段
    if isinstance(s, str):
        head = s.split("-")[0].split("T")[0]
        try:
            return int(head)
        except ValueError:
            return None
    return None


def derive_year_span(assertions):
    """取断言年份的最小/最大；无年份则回退 (None, None)。"""
    ys = [y for y in (_year_of(a) for a in assertions) if isinstance(y, int)]
    if not ys:
        return None, None
    return min(ys), max(ys)


def derive_party(assertions):
    """派生控制方 party：默认「综述考订」。

    单一控制方使多地点产生 center+local 阻力结构。G1 零手 authoring 场景下统一用
    「综述考订」——它是跨朝代合法控制 party（归入默认词表兜底集，且属综合考订桶，
    不伪造任何对立阵营立场），避免把史料立场桶错配到特定朝代语境、也不触发
    check_render_schema 的「party 不在受控词表」ERROR。
    """
    return "综述考订"


def derive_places(assertions):
    """地点码 → 最小 place 列表（仅 id/name，无坐标，honest boundary）。"""
    codes = collect_place_codes(assertions)
    places = [{"id": c, "name": c} for c in codes]
    return {"places": places}


def derive_control(assertions, party=None, start=None, end=None):
    """单一控制方（综述考订）的史实 timeline；供 create_agents 生成三阶层阻力。

    返回字典 {"control": [...]}，与 build.py / 军事路径一致（control 键下为控制项数组）。
    每项：place_id / party / start / end / timeline=main。
    """
    if party is None:
        party = derive_party(assertions)
    if start is None or end is None:
        sy, ey = derive_year_span(assertions)
        start = sy if sy is not None else -200
        end = ey if ey is not None else -100
    codes = collect_place_codes(assertions)
    ctrl = [{
        "place_id": c, "party": party,
        "start": start, "end": end, "timeline": "main",
    } for c in codes]
    return {
        "_comment": "G1 自动派生：单一控制方（%s）稳定控制，供三阶层 Agent 提供改革阻力"
                    "（local 教育垄断→推进减速）。非军事场景，无需邻接线；control 为数组（位于 control 键下）。" % party,
        "control": ctrl,
    }


def _corpus(assertions):
    """拼接全部文本供关键词启发式。"""
    parts = []
    for a in assertions:
        for k in ("value_text", "predicate", "subject", "note"):
            v = a.get(k)
            if isinstance(v, str):
                parts.append(v)
    return " ".join(parts)


def derive_scenario_type(assertions):
    """从 dims 分布 + 文本关键词推断 scenario_type（reform/engineering/thought/economic/social）。"""
    dim_count = {d: 0 for d in range(1, 7)}
    for a in assertions:
        for d in (a.get("dims") or []):
            if isinstance(d, int) and 1 <= d <= 6:
                dim_count[d] += 1
    corpus = _corpus(assertions)

    score = {"thought": dim_count[5], "engineering": dim_count[2],
             "social": dim_count[4], "reform": dim_count[3], "economic": 0}
    # 制度维若叠加经济关键词 → 归 economic，否则归 reform
    if dim_count[3] > 0 and any(k in corpus for k in ECON_KW):
        score["economic"] = dim_count[3]
        score["reform"] = 0
    # 无任何非地理维 → 默认 reform
    if sum(score.values()) == 0:
        return "reform"
    # 优先级 tie-break：thought > social > economic > engineering > reform
    order = ["thought", "social", "economic", "engineering", "reform"]
    best = max(order, key=lambda t: (score[t], -order.index(t)))
    return best


def derive_dim_targets(assertions):
    """受扰动六维（排除地理，因其恒定占位）。无则默认 制度/社会/思想。"""
    codes = []
    for a in assertions:
        for d in (a.get("dims") or []):
            if isinstance(d, int) and 2 <= d <= 6 and d not in codes:
                codes.append(d)
    if not codes:
        return ["制度", "社会", "思想"]
    return [DIM_BY_CODE[d] for d in sorted(codes)]


def _direction_sign(assertions):
    """史料走向：+1 推进 / -1 逆转 / 0 中性（关键词计数差）。"""
    corpus = _corpus(assertions)
    pos = sum(corpus.count(k) for k in POS_KW)
    neg = sum(corpus.count(k) for k in NEG_KW)
    if pos > neg:
        return 1
    if neg > pos:
        return -1
    return 0


def derive_branches(assertions, scenario_type=None):
    """派生 real_branch（史实基准）+ whatif（反事实·反向推演）。

    base_rate 符号由史料走向启发式决定：史实推进→正、逆转→负；
    反事实分支取相反数（反向推演），幅度略大（0.04）以凸显偏离。
    """
    if scenario_type is None:
        scenario_type = derive_scenario_type(assertions)
    sign = _direction_sign(assertions)
    real_rate = 0.03 * sign
    reform0 = 0.5
    whatif_rate = -real_rate if real_rate != 0 else 0.04
    branches = [
        {"id": "real", "label": "史实基准", "base_rate": round(real_rate, 3), "reform0": reform0},
        {"id": "whatif", "label": "反事实·反向推演", "base_rate": round(whatif_rate, 3),
         "reform0": reform0},
    ]
    return branches, "real"


def derive_config(assertions):
    """纯函数：从断言派生完整 sim_config（标 _auto_derived）。"""
    scenario_type = derive_scenario_type(assertions)
    dim_targets = derive_dim_targets(assertions)
    branches, real_branch = derive_branches(assertions, scenario_type)
    sy, ey = derive_year_span(assertions)
    if sy is None:
        sy, ey = -200, -100
    sign = _direction_sign(assertions)
    note = ("G1 自动派生（零手 authoring）。scenario_type 由 dims 分布推导；"
            "base_rate 符号由史料文本方向关键词启发式（推进/逆转，净差=%d）推定，"
            "属 best-effort，非精确考据；反事实分支取反向。places 无坐标，判为抽象世界。"
            % sign)
    cfg = {
        "_comment": "G1 自动派生反事实配置（tools/derivation/derive_sim_config.py）",
        "_auto_derived": True,
        "_derivation_note": note,
        "scenario_type": scenario_type,
        "dim_targets": dim_targets,
        "start_year": sy,
        "end_year": ey,
        "real_branch": real_branch,
        "branches": branches,
    }
    return cfg


def derive_all(scene_dir, assertions=None, write_sources=True):
    """在 scene_dir 写入 places.json / control.json / sim_config.json（必要时 sources.json）。

    返回 (places, control, sim_config)。
    """
    if assertions is None:
        assertions = load_assertions(os.path.join(scene_dir, "assertions.jsonl"))
    places = derive_places(assertions)
    sy, ey = derive_year_span(assertions)
    s = sy if sy is not None else -200
    e = ey if ey is not None else -100
    control = derive_control(assertions, start=s, end=e)
    sim_config = derive_config(assertions)

    _dump(os.path.join(scene_dir, "places.json"), places)
    _dump(os.path.join(scene_dir, "control.json"), control)
    _dump(os.path.join(scene_dir, "sim_config.json"), sim_config)

    if write_sources:
        sp = os.path.join(scene_dir, "sources.json")
        if not os.path.exists(sp):
            src_ids = []
            for a in assertions:
                s_id = a.get("source")
                if isinstance(s_id, str) and s_id and s_id not in src_ids:
                    src_ids.append(s_id)
            if not src_ids:
                src_ids = ["synthesis"]
            srcs = [{
                "id": sid,
                "title": "%s·综合史料" % sid,
                "party": DEFAULT_PARTY,
                "availability": "not_free",
                "bias_note": "G1 自动派生：source 由断言 source 字段汇总，party 归综合史料桶。",
                "distance_label": "综合诸家记述（派生占位）",
            } for sid in src_ids]
            _dump(sp, {"sources": srcs})
    return places, control, sim_config


def _dump(path, obj):
    with open(path, "w", encoding="utf-8", newline="") as f:
        json.dump(obj, f, ensure_ascii=False, indent=2)
        f.write("\n")


def _run_sim(scene, cfg, branches):
    """跑真实推演（simulate.py 非军事路径），产出 state_hist + branch_events。"""
    st = cfg.get("scenario_type", "reform")
    sy, ey = cfg["start_year"], cfg["end_year"]
    for br in branches:
        bid = br["id"]
        cmd = [sys.executable, SIM_PY, "--scene", scene, "--branch", bid,
               "--years", str(sy), str(ey), "--scenario-type", st]
        print("[derive] 跑推演 %s · %s · %d-%d" % (scene, bid, sy, ey))
        rc = subprocess.call(cmd, cwd=ROOT)
        if rc != 0:
            print("[derive][WARN] simulate.py 分支 %s 返回 %d" % (bid, rc))


def main():
    ap = argparse.ArgumentParser(description="G1 反事实配置自动派生（v0.125）")
    ap.add_argument("--scene", help="场景 id（data/<scene>/ 目录）")
    ap.add_argument("--assertions", help="断言 jsonl 路径（缺省 data/<scene>/assertions.jsonl）")
    ap.add_argument("--out", help="输出目录（缺省 data/<scene>/）")
    ap.add_argument("--run", action="store_true", help="派生后跑 simulate.py 产出六维时序+Branch Event")
    ap.add_argument("--dry-run", action="store_true", help="只打印派生结果，不写文件")
    args = ap.parse_args()

    if args.assertions:
        a_path = args.assertions
        scene_dir = args.out or os.path.dirname(os.path.abspath(a_path))
    elif args.scene:
        a_path = os.path.join(DATA, args.scene, "assertions.jsonl")
        scene_dir = args.out or os.path.join(DATA, args.scene)
    else:
        print("错误：--scene 或 --assertions 至少给一个")
        return 2

    if not os.path.exists(a_path):
        print("错误：断言文件不存在 %s" % a_path)
        return 2

    assertions = load_assertions(a_path)
    cfg = derive_config(assertions)
    print("== G1 派生 sim_config ==")
    print(json.dumps(cfg, ensure_ascii=False, indent=2))

    if args.dry_run:
        return 0

    os.makedirs(scene_dir, exist_ok=True)
    places, control, sim_config = derive_all(scene_dir, assertions=assertions)
    print("[derive] 写出 places/control/sim_config → %s" % scene_dir)

    if args.run:
        if not args.scene:
            print("[derive][WARN] --run 需要 --scene（simulate.py 按场景读 sim_config）")
        else:
            _run_sim(args.scene, sim_config, sim_config["branches"])
    return 0


if __name__ == "__main__":
    sys.exit(main())
