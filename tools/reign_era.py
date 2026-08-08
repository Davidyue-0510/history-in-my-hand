# -*- coding: utf-8 -*-
"""年号 <-> 公元 换算（明、清为主，数据驱动、可扩展、零幻觉）。

设计原则
--------
年号纪年是「封闭集合的查表 + 算术」，不是需要推理的模糊任务。
用确定性代码 + 数据表实现，比让 AI 现猜更准、可审计、可单元测试，
且能直接进 gates 守门（见 tools/test_reign.py）。

ingestion 阶段职责
------------------
LLM 从《明史》/《实录》抽出断言时，年份写作「万历四十七年」「天命三年」
这类 `era_text` 字符串（见 data/sarhu/assertions.jsonl 的 time.era_text）。
本模块把这类字符串归一化为公元年，时间轴 / 控制层 / 事件联动才能正确工作。

范围
----
v1 解决「年号 -> 公元年」这一级（史料绝大多数是年号纪年）。
精确到「月/日」需要农历-公历转换（lunisolar calendar），属于后续模块，
本文件只暴露 year 级接口；月日信息原样保留在 era_text 里供后续消费。

扩展
----
要支持全中国各朝代，只需在 ERAS 里追加（朝代, 起, 止）三元组。
"""
import re

# era: (公元起始年, 公元结束年(含), 朝代)
# 明与后金/清在 1616-1644 重叠；换算到公元后无歧义。
ERAS = {
    "洪武": (1368, 1398, "明"),
    "建文": (1399, 1402, "明"),
    "永乐": (1403, 1424, "明"),
    "洪熙": (1425, 1425, "明"),
    "宣德": (1426, 1435, "明"),
    "正统": (1436, 1449, "明"),
    "景泰": (1450, 1456, "明"),
    "天顺": (1457, 1464, "明"),
    "成化": (1465, 1487, "明"),
    "弘治": (1488, 1505, "明"),
    "正德": (1506, 1521, "明"),
    "嘉靖": (1522, 1566, "明"),
    "隆庆": (1567, 1572, "明"),
    "万历": (1573, 1620, "明"),
    "泰昌": (1620, 1620, "明"),
    "天启": (1621, 1627, "明"),
    "崇祯": (1628, 1644, "明"),
    "天命": (1616, 1626, "后金"),
    "天聪": (1627, 1636, "后金"),
    "崇德": (1636, 1643, "清"),
    "顺治": (1644, 1661, "清"),
}

# 中文数字字符 -> 值（元/正 = 元年/正月 = 1）
_CN = {
    "零": 0, "一": 1, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6,
    "七": 7, "八": 8, "九": 9, "十": 10, "廿": 20, "卅": 30,
    "元": 1, "正": 1,
}

# 十位字符 -> 基数
_TENS = {"十": 10, "廿": 20, "卅": 30}


def _cn_num(s):
    """中文数字(<=99) -> int。支持 元/一..九、十、十一..十九、
    二十..二十九、三十..三十九、四十..、以及 廿X / 卅X 变体。
    无法解析返回 None。"""
    if s is None:
        return None
    s = s.strip()
    if s in ("元", "正"):
        return 1
    if s in _CN:
        return _CN[s]
    tens_char = None
    for ch in ("十", "廿", "卅"):
        if ch in s:
            tens_char = ch
            break
    if tens_char is None:
        return None
    before, after = s.split(tens_char, 1)
    tens_mult = 1 if before == "" else _CN.get(before)
    if tens_mult is None:
        return None
    ones = _CN.get(after, 0) if after else 0
    return _TENS[tens_char] * tens_mult + ones


def to_gregorian(era, year):
    """年号 + 第N年 -> 公元年。year 可为 int 或中文数字字符串。"""
    if era not in ERAS:
        raise KeyError("未知年号: %s" % era)
    start, end, _dyn = ERAS[era]
    if isinstance(year, str):
        year = _cn_num(year)
    if not isinstance(year, int) or year < 1:
        raise ValueError("非法年份: %r" % (year,))
    g = start + (year - 1)
    if g > end:
        raise ValueError("%s 仅 %d 年（%d-%d），第 %d 年越界"
                         % (era, end - start + 1, start, end, year))
    return g


def normalize_year(s):
    """把年份字符串归一化为公元 int；无法识别返回 None。

    支持：
      - 纯数字        '1619'            -> 1619
      - 年号纪年      '万历四十七年'     -> 1619
      - 带月份        '天命四年二月廿九' -> 1619  (取年号对应公元年，月日忽略)
      - 带干支括号    '天命四年（己未）' -> 1619
      - 复合表述首段  '万历四十七年即天命四年' -> 1619
    """
    if s is None:
        return None
    s = s.strip().replace("（", "(").replace("）", ")")
    s = re.sub(r"\(.*?\)", "", s).strip()
    if re.fullmatch(r"\d{1,4}", s):
        return int(s)
    m = re.match(
        r'^([^一二三四五六七八九十廿卅零元正年月日\d]+?)\s*'
        r'([一二三四五六七八九十廿卅零元正]+)', s)
    if not m:
        return None
    era = m.group(1).strip()
    ystr = m.group(2).strip()
    if era not in ERAS:
        return None
    try:
        return to_gregorian(era, ystr)
    except (ValueError, KeyError):
        return None


def era_at(gregorian):
    """公元年 -> [(年号, 第N年, 朝代), ...]。重叠年份(如1644)会返回多条。"""
    out = []
    for era, (start, end, dyn) in ERAS.items():
        if start <= gregorian <= end:
            out.append((era, gregorian - start + 1, dyn))
    return out


if __name__ == "__main__":
    samples = ["万历四十七年", "天命三年", "天命四年", "崇祯十七年",
               "顺治元年", "洪武元年", "天命四年二月廿九", "1619"]
    for s in samples:
        print("%-14s -> %s" % (s, normalize_year(s)))
    print("1644 年号:", era_at(1644))
