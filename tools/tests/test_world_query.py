# -*- coding: utf-8 -*-
"""world_query 单元测试：证明「导入即可查」的数据库角色在 demo 量级成立。"""
import os
import sys
import json

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "analysis"))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import world_query as W

OK, FAIL = 0, 0


def check(name, cond):
    global OK, FAIL
    if cond:
        OK += 1
        print("  [ok] %s" % name)
    else:
        FAIL += 1
        print("  [XX] %s" % name)


# Q1 年号查询 1619 应能命中萨尔浒战役相关断言（含本次 ingest 的 IN00x）
r1 = W.query(era="万历四十七年")
ids1 = {a["id"] for a in r1}
check("Q1 年号「万历四十七年」归一化 1619 命中断言", len(r1) > 0)
check("Q1 含本次 ingest 的 IN001", "IN001" in ids1)
check("Q1 含 IN007(gap)", "IN007" in ids1)

# Q2 直接公元年查询等价
r2 = W.query(year=1619)
ids2 = {a["id"] for a in r2}
check("Q2 --year 1619 与 --era 万历四十七年 结果一致", ids1 == ids2)

# Q3 按 source 过滤（数据集会随 ingestion 增长，故用 ≥ + 钉住已知条目，而非写死总数）
r3 = W.query(source="huangqing_kaiguo_fanglue")
ids3 = {a["id"] for a in r3}
check("Q3 按 source=皇清开国方略 命中 ≥6 条", len(r3) >= 6)
check("Q3 含原始 IN001-IN006", {"IN001", "IN002", "IN003", "IN004", "IN005", "IN006"}.issubset(ids3))
check("Q3 含 DeepSeek 新增 SX005..SX023", {"SX005", "SX010", "SX023"}.issubset(ids3))
check("Q3 全部来自我方 ingest", all(a["source"] == "huangqing_kaiguo_fanglue" for a in r3))

# Q4 按 place 过滤
r4 = W.query(place="sarhu")
check("Q4 place=sarhu 命中 IN003/IN004 等", {"IN003", "IN004"}.issubset({a["id"] for a in r4}))

# Q5 按 layer 过滤 + scene 限定
r5 = W.query(scene="sarhu", layer="gap")
check("Q5 sarhu 的 gap 层含 IN007", "IN007" in {a["id"] for a in r5})

# Q6 越界/无匹配返回空（不抛异常）
r6 = W.query(year=1000)
check("Q6 公元前无匹配返回空", r6 == [])

# Q7 不存在的年号应抛 ValueError（被 main 捕获为非 0 退出）
try:
    W.query(era="不存在元年")
    check("Q7 未知年号应报错", False)
except ValueError:
    check("Q7 未知年号抛 ValueError", True)

# Q8 按立场桶 party 过滤（v0.21 新增）：返回结果必须全部属于该桶
r8 = W.query(party="明方")
check("Q8 --party 明方 命中非空", len(r8) > 0)
check("Q8 结果全部 _party==明方（无串桶）", all(a.get("_party") == "明方" for a in r8))
r8b = W.query(party="清方")
check("Q8b --party 清方 结果全部 _party==清方", all(a.get("_party") == "清方" for a in r8b))

# Q9 按派系 faction 过滤（v0.21 新增）：返回结果必须全部属该派系
r9 = W.query(faction="feng_jiang")
check("Q9 --faction feng_jiang 命中非空", len(r9) > 0)
check("Q9 结果全部 _faction==feng_jiang", all(a.get("_faction") == "feng_jiang" for a in r9))
# 派系只在明方桶内生效：faction 过滤结果必须都是明方
check("Q9b faction 过滤结果都是明方桶", all(a.get("_party") == "明方" for a in r9))

print("\nworld_query: %d ok, %d fail" % (OK, FAIL))
sys.exit(1 if FAIL else 0)
