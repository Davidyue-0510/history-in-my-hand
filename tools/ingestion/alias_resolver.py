# -*- coding: utf-8 -*-
"""实体别名校正 / fuzzy match 引擎。

LLM 抽取的 person:/place: id 拼写错误率 ~17%（如 dushong→dusong，
yanggao→yanghao）。本模块提供三级匹配：精确 → 名 → 编辑距离，
帮助管线自动修复，避免静默断链。

参考集由调用方传入（同一场景的 persons/places 列表及它们的 id+name）。
"""
import re


def _edit_dist(a, b):
    """Levenshtein distance。"""
    if len(a) < len(b):
        a, b = b, a
    prev = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        cur = [i]
        for j, cb in enumerate(b, 1):
            cur.append(min(cur[-1] + 1, prev[j] + 1,
                           prev[j - 1] + (0 if ca == cb else 1)))
        prev = cur
    return prev[-1]


def _normalize_pinyin(s):
    """粗粒度拼音归一化：去数字、小写、合并常见混淆对。"""
    s = s.lower()
    s = re.sub(r"\d", "", s)
    # 常见拼音混淆：翘舌↔平舌，ong↔eng，n↔ng
    s = s.replace("zh", "z").replace("ch", "c").replace("sh", "s")
    s = s.replace("ong", "eng").replace("ang", "eng")
    s = s.replace("ian", "ien").replace("uan", "uen")
    return s


def _slug_match(query, candidate_id):
    """拼音归一化后是否匹配。"""
    return _normalize_pinyin(query) == _normalize_pinyin(candidate_id)


def resolve_person(subject_raw, persons):
    """subject_raw: person:xxx 或裸 id/名字。
    persons: [{id, name}, ...]
    返回 (corrected_id, method) 或 (None, None)。
    """
    # 剥前缀
    query = subject_raw.replace("person:", "").strip()
    if not query:
        return None, None

    # 0) 精确匹配
    for p in persons:
        if query == p.get("id"):
            return query, "exact"

    # 1) 名字匹配（输入的是中文名而非 id）
    for p in persons:
        name = p.get("name", "")
        if name and (query == name or query in name or name in query):
            return p["id"], "name_match"

    # 2) 拼音/编辑距离模糊（先归一化：去下划线、统一大小写）
    q_norm = query.lower().replace("_", "")
    best, best_dist = None, 999
    for p in persons:
        pid = p.get("id", "")
        p_norm = pid.lower().replace("_", "")
        if _slug_match(q_norm, p_norm):
            best = pid; best_dist = 0; break
        dist = _edit_dist(q_norm, p_norm)
        if dist < best_dist or (dist == best_dist and len(pid) < len(best or "")):
            best_dist = dist; best = pid

    # 编辑距离阈值：≤2 且 ≤ max_len/3（放宽为 max(2, max_len * 0.4)）
    if best and best_dist <= max(2, int(max(len(q_norm), len(best), 1) * 0.4)):
        return best, "fuzzy_edit_dist_%d" % best_dist

    return None, None


def resolve_place(subject_raw, places):
    """同 resolve_person，但参考集是 places。"""
    query = subject_raw.replace("place:", "").strip()
    if not query:
        return None, None
    for p in places:
        if query == p.get("id"):
            return query, "exact"
    for p in places:
        name = p.get("name", "")
        if name and (query == name or query in name or name in query):
            return p["id"], "name_match"
    q_norm = query.lower().replace("_", "")
    best, best_dist = None, 999
    for p in places:
        pid = p.get("id", "")
        p_norm = pid.lower().replace("_", "")
        if _slug_match(q_norm, p_norm):
            return pid, "slug_match"
        dist = _edit_dist(q_norm, p_norm)
        if dist < best_dist:
            best_dist = dist; best = pid
    if best and best_dist <= max(2, int(max(len(q_norm), len(best), 1) * 0.4)):
        return best, "fuzzy_edit_dist_%d" % best_dist
    return None, None


def resolve_subject(subject, persons, places):
    """修复一条断言的 subject 字段。返回 new_subject, note。"""
    if not subject:
        return subject, ""
    if subject.startswith("person:"):
        pid, method = resolve_person(subject, persons)
        if pid and method != "exact":
            return "person:" + pid, "[alias] %s → %s (%s)" % (subject, pid, method)
    elif subject.startswith("place:"):
        pid, method = resolve_place(subject, places)
        if pid and method != "exact":
            return "place:" + pid, "[alias] %s → %s (%s)" % (subject, pid, method)
    return subject, ""
