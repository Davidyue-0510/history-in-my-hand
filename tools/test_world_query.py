# -*- coding: utf-8 -*-
"""world_query 单元测试：证明「导入即可查」的数据库角色在 demo 量级成立。"""
import os
import sys
import json

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

# Q3 按 source 过滤
r3 = W.query(source="huangqing_kaiguo_fanglue")
check("Q3 按 source=皇清开国方略 命中 6 条 record", len(r3) == 6)
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

print("\nworld_query: %d ok, %d fail" % (OK, FAIL))
sys.exit(1 if FAIL else 0)
