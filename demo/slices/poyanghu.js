// 本文件由 tools/build.py 自动生成（切片 poyanghu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["poyanghu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["poyanghu"] = {
 "meta": {
  "kind": "battle",
  "region": "yuan_ming",
  "title": "鄱阳湖之战",
  "dossier_label": "鄱阳湖之战",
  "subtitle": "龙凤九年（1363）· 朱 vs 陈",
  "primary_place": "poyanghu",
  "dossier_event": "event:py_chen",
  "terrain_grid": "china_coarse",
  "lead": "朱元璋康郎山火攻，鄱阳湖大败陈友谅，友谅中流矢死。",
  "parties_note": "朱方叙用火，陈方讳败。",
  "subject_names": {
   "person:zhuyuanzhang": "朱元璋",
   "person:chenyouliang": "陈友谅"
  },
  "page": "poyanghu.html",
  "key": "poyanghu",
  "scene_id": "poyanghu",
  "vocab_pack": "inline:poyanghu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "鄱阳湖之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "朱方叙用火，陈方讳败。"
  }
 ],
 "places": [
  {
   "id": "poyanghu",
   "name": "鄱阳湖",
   "lon": 116.5,
   "lat": 29.1,
   "note": "今江西鄱阳湖",
   "elev": 14
  },
  {
   "id": "nanchang",
   "name": "南昌",
   "lon": 115.86,
   "lat": 28.68,
   "note": "朱守城",
   "elev": 55
  },
  {
   "id": "yingtian",
   "name": "应天",
   "lon": 118.8,
   "lat": 32.06,
   "note": "朱据，今南京",
   "elev": 17
  },
  {
   "id": "kanglang",
   "name": "康郎山",
   "lon": 116.35,
   "lat": 29.05,
   "note": "湖中决战",
   "elev": 13
  }
 ],
 "persons": [
  {
   "id": "zhuyuanzhang",
   "name": "朱元璋",
   "side": "明",
   "influence": 0
  },
  {
   "id": "chenyouliang",
   "name": "陈友谅",
   "side": "汉",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_py_chen",
   "subject": "event:py_chen",
   "predicate": "战事",
   "value_text": "陈友谅率巨舰围南昌。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1363,
    "end": 1363,
    "era_text": "龙凤九年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_py_zhu",
   "subject": "event:py_zhu",
   "predicate": "战事",
   "value_text": "朱元璋率舟师入湖。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1363,
    "end": 1363,
    "era_text": "龙凤九年"
   },
   "place": "poyanghu",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_py_jz",
   "subject": "event:py_jz",
   "predicate": "战事",
   "value_text": "朱以火舟破陈舰，友谅死。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1363,
    "end": 1363,
    "era_text": "龙凤九年"
   },
   "place": "kanglang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "PY001",
   "subject": "event:py_chen",
   "predicate": "决战",
   "value_text": "朱元璋与陈友谅决战于鄱阳湖",
   "time": {
    "era_text": "至正二十三年",
    "start": "1363-01-01",
    "end": "1363-12-31",
    "gregorian_year": 1363
   },
   "place": "poyanghu",
   "source": "synthesis",
   "quote": "至正二十三年，朱元璋与陈友谅决战于鄱阳湖",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "PY002",
   "subject": "event:py_chen",
   "predicate": "兵力",
   "value_text": "号六十万",
   "time": {
    "era_text": "至正二十三年",
    "start": "1363-01-01",
    "end": "1363-12-31",
    "gregorian_year": 1363
   },
   "place": "poyanghu",
   "source": "synthesis",
   "quote": "友谅拥巨舰连锁为阵，号六十万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "号为虚数，实数待考",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "PY003",
   "subject": "event:py_zhu",
   "predicate": "战术",
   "value_text": "舟小，火器利",
   "time": {
    "era_text": "至正二十三年",
    "start": "1363-01-01",
    "end": "1363-12-31",
    "gregorian_year": 1363
   },
   "place": "poyanghu",
   "source": "synthesis",
   "quote": "元璋舟小，然火器利",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "PY004",
   "subject": "event:py_zhu",
   "predicate": "火攻",
   "value_text": "乘风纵火，焚其舰",
   "time": {
    "era_text": "至正二十三年",
    "start": "1363-01-01",
    "end": "1363-12-31",
    "gregorian_year": 1363
   },
   "place": "poyanghu",
   "source": "synthesis",
   "quote": "元璋乘风纵火，焚其舰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "PY005",
   "subject": "event:py_chen",
   "predicate": "阵亡",
   "value_text": "友仁等皆死",
   "time": {
    "era_text": "至正二十三年",
    "start": "1363-01-01",
    "end": "1363-12-31",
    "gregorian_year": 1363
   },
   "place": "poyanghu",
   "source": "synthesis",
   "quote": "友谅弟友仁等皆死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "PY006",
   "subject": "event:py_chen",
   "predicate": "阵亡",
   "value_text": "中流矢贯睛及颅而死",
   "time": {
    "era_text": "至正二十三年",
    "start": "1363-01-01",
    "end": "1363-12-31",
    "gregorian_year": 1363
   },
   "place": "poyanghu",
   "source": "synthesis",
   "quote": "友谅中流矢贯睛及颅而死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "PY007",
   "subject": "event:py_chen",
   "predicate": "溃败",
   "value_text": "军大溃",
   "time": {
    "era_text": "至正二十三年",
    "start": "1363-01-01",
    "end": "1363-12-31",
    "gregorian_year": 1363
   },
   "place": "poyanghu",
   "source": "synthesis",
   "quote": "军大溃",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "PY008",
   "subject": "event:py_jz",
   "predicate": "意义",
   "value_text": "奠定并吞群雄、北定中原之基",
   "time": {
    "era_text": "至正二十三年",
    "start": "1363-01-01",
    "end": "1363-12-31",
    "gregorian_year": 1363
   },
   "place": "poyanghu",
   "source": "synthesis",
   "quote": "此役奠定朱元璋并吞群雄、北定中原之基",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "empire",
   "note": "后世史评，非当日实录",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "PY009",
   "subject": "event:py_jz",
   "predicate": "评价",
   "value_text": "中世纪世界最大水战之一",
   "time": {
    "era_text": "至正二十三年",
    "start": "1363-01-01",
    "end": "1363-12-31",
    "gregorian_year": 1363
   },
   "place": "poyanghu",
   "source": "synthesis",
   "quote": "为中世纪世界最大水战之一",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "现代学者评价，非原文",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "PY010",
   "subject": "event:py_jz",
   "predicate": "评价",
   "value_text": "火攻破巨舰之范例",
   "time": {
    "era_text": "至正二十三年",
    "start": "1363-01-01",
    "end": "1363-12-31",
    "gregorian_year": 1363
   },
   "place": "poyanghu",
   "source": "synthesis",
   "quote": "亦火攻破巨舰之范例",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "现代军事史评价",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "PY011",
   "subject": "event:py_chen",
   "predicate": "兵力",
   "value_text": "号六十万",
   "time": {
    "era_text": "至正二十三年",
    "start": "1363-01-01",
    "end": "1363-12-31",
    "gregorian_year": 1363
   },
   "place": "poyanghu",
   "source": "synthesis",
   "quote": "号六十万",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "province",
   "note": "『号六十万』为虚数，实数无考",
   "lead": {
    "where": "poyanghu",
    "skills": [
     "明清史",
     "军事史"
    ],
    "accept": "考证陈友谅鄱阳湖之战实际兵力"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "POYANGHUG01",
   "subject": "event:py_chen",
   "predicate": "叙事缺环",
   "value_text": "此役细节诸书记载互有出入，胜者所修史书常省略败方视角、兵力与伤亡之确切数字，相关叙述存在缺口。",
   "time": {
    "era_text": "至正二十三年",
    "start": "1363-01-01",
    "end": "1363-12-31",
    "gregorian_year": 1363
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "battle",
   "note": "多源纪年需对读",
   "lead": {
    "where": "诸史原文对读",
    "skills": [
     "纪年校勘",
     "多源比对"
    ],
    "accept": "补败方视角与纪年异文"
   },
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:py_chen|阵亡",
   "subject": "event:py_chen",
   "predicate": "阵亡",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "PY005",
    "PY006"
   ]
  },
  {
   "id": "cf:event:py_jz|评价",
   "subject": "event:py_jz",
   "predicate": "评价",
   "kind": "scholarly_divergence",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "PY009",
    "PY010"
   ]
  }
 ],
 "gaps": [
  "PY011",
  "POYANGHUG01"
 ],
 "events": [
  {
   "id": "ev_py_chen",
   "subject": "event:py_chen",
   "year": 1363,
   "era": "龙凤九年",
   "title": "陈友谅围南昌",
   "kind": "战事",
   "text": "陈友谅率巨舰围南昌。"
  },
  {
   "id": "ev_py_zhu",
   "subject": "event:py_zhu",
   "year": 1363,
   "era": "龙凤九年",
   "title": "朱救南昌",
   "kind": "战事",
   "text": "朱元璋率舟师入湖。",
   "place": "poyanghu"
  },
  {
   "id": "ev_py_jz",
   "subject": "event:py_jz",
   "year": 1363,
   "era": "龙凤九年",
   "title": "鄱阳湖火攻",
   "kind": "战事",
   "text": "朱以火舟破陈舰，友谅死。",
   "place": "kanglang"
  }
 ],
 "engagements": [
  {
   "id": "eng_py_main",
   "name": "鄱阳湖火战",
   "at": "1363-08",
   "era": "龙凤九年八月",
   "place": "kanglang",
   "winner": "a",
   "outcome": "朱元璋以小船载荻火攻陈巨舰，风急火烈，陈军大溃，友谅中矢死。",
   "subject": "event:py_jz",
   "sides": [
    {
     "side": "a",
     "commander": "朱元璋",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 70,
     "posture": "火攻",
     "commit_basis": "朱军小船灵活，乘风的火破其巨舰。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "陈友谅",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 90,
     "posture": "巨舰",
     "commit_basis": "陈舰高大相连，机动为火所制。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_py_zhu",
   "name": "朱军入湖",
   "side": "a",
   "nodes": [
    {
     "place": "yingtian",
     "at": "1363-07",
     "label": "朱起兵"
    },
    {
     "place": "poyanghu",
     "at": "1363-08",
     "label": "入鄱阳湖"
    },
    {
     "place": "kanglang",
     "at": "1363-08",
     "label": "火战"
    }
   ],
   "outcome": {
    "at": "1363-08",
    "type": "victory",
    "text": "鄱阳湖火攻破陈"
   }
  },
  {
   "id": "rt_py_chen",
   "name": "陈军围南昌",
   "side": "b",
   "nodes": [
    {
     "place": "poyanghu",
     "at": "1363-04",
     "label": "陈起兵"
    },
    {
     "place": "nanchang",
     "at": "1363-06",
     "label": "围南昌"
    },
    {
     "place": "kanglang",
     "at": "1363-08",
     "label": "决战"
    }
   ],
   "outcome": {
    "at": "1363-07",
    "type": "defeat",
    "text": "陈围南昌遇火攻败死"
   }
  }
 ],
 "timeline": [
  {
   "at": "1363-04",
   "era": "龙凤九年",
   "label": "陈友谅起兵",
   "key": false
  },
  {
   "at": "1363-08",
   "era": "八月",
   "label": "朱入湖",
   "key": false
  },
  {
   "at": "1363-08",
   "era": "八月",
   "label": "鄱阳湖火攻",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1363-08",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1363-08",
    "lost": 0,
    "basis": "败方损失数字以现代考订折中，置信度待核。"
   }
  ],
  "confidence": {
   "a": 0.4,
   "b": 0.4
  },
  "gap_note": "本切片为综合史料整理，胜败方损失数字多为估算，界面应视为待核实。"
 },
 "fatigue_weight": {
  "fresh": 1.0,
  "marching": 0.85,
  "exhausted": 0.7
 },
 "edges": [],
 "control": [],
 "vocab": {
  "layers": [
   "record",
   "scholarship",
   "inference",
   "gap"
  ],
  "quote_status": [
   "verbatim",
   "paraphrase_unverified",
   "generated"
  ],
  "parties": [
   "朱军",
   "陈军",
   "综合史料"
  ],
  "party_bucket": {
   "朱军": "朱军",
   "陈军": "陈军",
   "综合史料": "综合史料"
  },
  "party_colors": {
   "a": "#c0392b",
   "b": "#2b6cb0",
   "综合史料": "#7f8c8d"
  },
  "legend": {
   "battle": [
    {
     "key": "a",
     "label": "朱军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "陈军胜",
     "color": "#2b6cb0"
    },
    {
     "key": "none",
     "label": "未接战/不分胜",
     "color": "#7f8c8d"
    }
   ],
   "route": [
    {
     "key": "a",
     "label": "朱军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "陈军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
