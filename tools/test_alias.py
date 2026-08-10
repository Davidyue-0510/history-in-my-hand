# -*- coding: utf-8 -*-
"""别名校正回归测试。验证已知的 LLM 拼写错误能被自动修复。"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import alias_resolver as AR

ok = fail = 0


def check(name, cond):
    global ok, fail
    if cond:
        ok += 1; print("  [ok] %s" % name)
    else:
        fail += 1; print("  [XX] %s" % name)


# 模拟一个场景的人员列表
persons = [
    {"id": "dusong", "name": "杜松"},
    {"id": "yanghao", "name": "杨镐"},
    {"id": "liruobai", "name": "李如柏"},
    {"id": "liuting", "name": "刘綎"},
    {"id": "ma_lin", "name": "马林"},
    {"id": "ding_rchang", "name": "丁汝昌"},
]
places = [
    {"id": "fushun", "name": "抚顺"},
    {"id": "sarhu", "name": "萨尔浒"},
    {"id": "pyongyang", "name": "平壤"},
    {"id": "bixieguan", "name": "碧蹄馆"},
]

# 1) 精确匹配不误改
pid, m = AR.resolve_person("dusong", persons)
check("精确: dusong → dusong", pid == "dusong" and m == "exact")
pid, m = AR.resolve_person("person:yanghao", persons)
check("精确+前缀: person:yanghao → yanghao", pid == "yanghao" and m == "exact")

# 2) 已知拼写错误修复（v0.14 实战记录）
pid, m = AR.resolve_person("dushong", persons)
check("dushong → dusong (LLM 拼错拼)", pid == "dusong")
pid, m = AR.resolve_person("yanggao", persons)
check("yanggao -> yanghao (g-h混淆)", pid == "yanghao")
pid, m = AR.resolve_person("liuru", persons)
check("liuru -> no match (不同转写，需字典)", pid is None)  # 编辑距离 3 > 阈值

# 3) 编辑距离 1 修复
pid, m = AR.resolve_person("dingshanchang", persons)
check("dingshanchang → ding_rchang (? 漏 _r)", pid == "ding_rchang")

# 4) 名字匹配
pid, m = AR.resolve_person("杜松", persons)
check("名字: 杜松 → dusong", pid == "dusong")

# 5) 地名
pid, m = AR.resolve_place("piece:pingyang", places)
check("pingyang -> no match (韩文转写差异，需手动映射)", pid is None)
pid, m = AR.resolve_place("sahu", places)
check("sahu → sarhu (漏 r)", pid == "sarhu")

# 6) 全包 resolve_subject
subj, note = AR.resolve_subject("person:dushong", persons, places)
check("resolve_subject: person:dushong → person:dusong", subj == "person:dusong" and "[alias]" in note)
subj, note = AR.resolve_subject("person:dusong", persons, places)
check("resolve_subject 精确不报 note", note == "")

# 7) 不应该误匹配的
pid, m = AR.resolve_person("random_xyz_123", persons)
check("无匹配: random_xyz_123 → None", pid is None)

print("\nalias: %d ok, %d fail" % (ok, fail))
sys.exit(1 if fail else 0)
