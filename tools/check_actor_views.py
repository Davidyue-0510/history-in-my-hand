#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
actor 视角骨架 · 数据契约校验器（v0.67）

校验 data/sarhu/persons.json 中每位人物都建成"多主体视角"一等公民：
perspective 子块必须含 目标/需求/信息/理解/决策 五个维度（对应"同一战役，
不同人决策/理解/需求不同"），且字段非空、role_tier 在枚举内、info_quality∈[0,1]。

纯数据契约检查，不影响引擎。返回非 0 表示契约被破坏（可作 gates 子步）。
"""
import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "data", "sarhu", "persons.json")

ROLE_TIERS = {"cinC", "column_cmd", "enemy_cmd", "ally_cmd", "prince", "sub_cmd"}
REQUIRED = ["role_tier", "objective", "needs", "info_quality", "info_note",
            "assessment", "decision_style"]


def fail(msg):
    print("  ✗ " + msg)
    return False


def main():
    d = json.load(open(SRC, encoding="utf-8"))
    persons = d.get("persons", [])
    ok = True
    n_persp = 0
    for p in persons:
        pid = p.get("id", "?")
        if "perspective" not in p:
            ok = fail("%s(%s) 缺 perspective 子块" % (pid, p.get("name")))
            continue
        pv = p["perspective"]
        n_persp += 1
        for k in REQUIRED:
            if k not in pv:
                ok = fail("%s.perspective 缺字段 %s" % (pid, k))
        if "role_tier" in pv and pv["role_tier"] not in ROLE_TIERS:
            ok = fail("%s.role_tier=%r 不在枚举 %s" % (pid, pv["role_tier"], sorted(ROLE_TIERS)))
        if "objective" in pv and not str(pv["objective"]).strip():
            ok = fail("%s.objective 为空" % pid)
        if "needs" in pv and (not isinstance(pv["needs"], list) or len(pv["needs"]) == 0):
            ok = fail("%s.needs 为空列表" % pid)
        if "info_quality" in pv:
            q = pv["info_quality"]
            if not isinstance(q, (int, float)) or not (0.0 <= q <= 1.0):
                ok = fail("%s.info_quality=%r 不在 [0,1]" % (pid, q))
        for k in ("info_note", "assessment", "decision_style"):
            if k in pv and not str(pv[k]).strip():
                ok = fail("%s.%s 为空" % (pid, k))

    print("=== actor 视角骨架契约校验 · 萨尔浒 ===")
    print("  人物总数=%d  含 perspective=%d" % (len(persons), n_persp))
    # 关键角色是否齐备（覆盖用户点名的"总指挥 vs 一路大军 vs 敌方 vs 盟军"）
    tiers = {}
    for p in persons:
        if "perspective" in p:
            tiers[p["perspective"]["role_tier"]] = tiers.get(p["perspective"]["role_tier"], 0) + 1
    print("  role_tier 分布: " + ", ".join("%s=%d" % (k, tiers[k]) for k in sorted(tiers)))
    for need in ("cinC", "column_cmd", "enemy_cmd", "ally_cmd"):
        if need not in tiers:
            ok = fail("缺关键 role_tier: %s（总指挥/一路主将/敌方统帅/盟军统帅 应齐备）" % need)

    if ok:
        print("✓ 契约通过：每位人物均为视角一等公民，五维度齐全。")
        return 0
    print("✗ 契约存在缺口，见上。")
    return 1


if __name__ == "__main__":
    sys.exit(main())
