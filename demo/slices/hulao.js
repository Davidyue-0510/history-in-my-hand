// 本文件由 tools/build.py 自动生成（切片 hulao），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["hulao"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["hulao"] = {
 "meta": {
  "kind": "battle",
  "region": "sui_tang",
  "title": "虎牢关之战",
  "dossier_label": "虎牢关之战",
  "subtitle": "武德四年（621）· 唐 vs 郑/夏",
  "primary_place": "hulao",
  "dossier_event": "event:hl_shi",
  "terrain_grid": "china_coarse",
  "lead": "李世民据虎牢扼窦建德援郑之师，一战擒建德，世充降。",
  "parties_note": "唐方叙太宗用兵，郑夏讳败。",
  "subject_names": {
   "person:limin": "李世民",
   "person:wangshichong": "王世充",
   "person:doujiande": "窦建德"
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "epoch": "sui_tang",
  "scale_tier": "operational",
  "strategic": {
   "political_cohesion": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     3,
     5
    ],
    "layer": "inference",
    "note": "虎牢关之战：朝堂凝聚力——“先破窦建德，王世充自下”的围城打援、歼灭战思想"
   },
   "material_logistics": {
    "from": [
     "tech",
     "economy"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "虎牢关之战：后勤物力——唐军据虎牢坚城疲敌，“牧马诱敌”；玄甲军骑兵突击破阵"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "虎牢关之战：人口动员——“据武牢之险”，山东豪杰归唐；窦建德河北义军与王世充合流失败"
   },
   "geopolitical_strategy": {
    "from": [
     "international",
     "anchors"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "虎牢关之战：地缘战略——夏军据虎牢之东"
   }
  },
  "province": "henan",
  "page": "hulao.html",
  "key": "hulao",
  "scene_id": "hulao",
  "vocab_pack": "inline:hulao"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "虎牢关之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "唐方叙太宗用兵，郑夏讳败。",
   "distance_label": "综合诸家记述（非单一典籍；各场景具体来源见 stance_label）"
  }
 ],
 "places": [
  {
   "id": "hulao",
   "name": "虎牢关",
   "lon": 113.27,
   "lat": 34.59,
   "note": "今河南荥阳西北",
   "elev": 488
  },
  {
   "id": "luoyang_t",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "王世充据",
   "elev": 171
  },
  {
   "id": "changan_tx",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "唐都",
   "elev": 391
  },
  {
   "id": "shanzhou",
   "name": "陕州",
   "lon": 111.4,
   "lat": 34.78,
   "note": "窦建德出兵",
   "elev": 512
  }
 ],
 "persons": [
  {
   "id": "limin",
   "name": "李世民",
   "side": "唐",
   "influence": 0
  },
  {
   "id": "wangshichong",
   "name": "王世充",
   "side": "郑",
   "influence": 0
  },
  {
   "id": "doujiande",
   "name": "窦建德",
   "side": "夏",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_hl_shi",
   "subject": "event:hl_shi",
   "predicate": "战事",
   "value_text": "李世民围王世充于洛阳。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 621,
    "end": 621,
    "era_text": "武德四年"
   },
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hl_wei",
   "subject": "event:hl_wei",
   "predicate": "战事",
   "value_text": "窦建德率夏军救洛阳，屯虎牢东。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 621,
    "end": 621,
    "era_text": "武德四年"
   },
   "place": "hulao",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hl_jz",
   "subject": "event:hl_jz",
   "predicate": "战事",
   "value_text": "世民突阵擒建德，世充遂降。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 621,
    "end": 621,
    "era_text": "武德四年"
   },
   "place": "hulao",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M18",
   "subject": "event:hl_shi",
   "predicate": "围城",
   "value_text": "李世民东围洛阳王世充",
   "time": {
    "era_text": "武德四年",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
   },
   "place": "luoyang_t",
   "source": "synthesis",
   "quote": "秦王李世民东围洛阳王世充",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M18",
   "subject": "event:hl_wei",
   "predicate": "来援",
   "value_text": "窦建德率夏军十余万来援",
   "time": {
    "era_text": "武德四年",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
   },
   "place": "hulao",
   "source": "synthesis",
   "quote": "窦建德自河北率夏军十余万来援",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "兵力为原文表述，未折算",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M17",
   "subject": "event:hl_wei",
   "predicate": "据守",
   "value_text": "夏军据虎牢之东",
   "time": {
    "era_text": "武德四年",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
   },
   "place": "hulao",
   "source": "synthesis",
   "quote": "据虎牢之东",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M18",
   "subject": "event:hl_shi",
   "predicate": "分兵",
   "value_text": "世民分兵围洛，亲率骁骑据虎牢",
   "time": {
    "era_text": "武德四年",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
   },
   "place": "hulao",
   "source": "synthesis",
   "quote": "世民分兵围洛，亲率骁骑据虎牢",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M18",
   "subject": "event:hl_wei",
   "predicate": "战术",
   "value_text": "按甲不出，以待夏军疲",
   "time": {
    "era_text": "武德四年",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
   },
   "place": "hulao",
   "source": "synthesis",
   "quote": "按甲不出，以待夏军疲",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M18",
   "subject": "event:hl_wei",
   "predicate": "列阵",
   "value_text": "建德恃众，列阵亘二十里",
   "time": {
    "era_text": "武德四年",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
   },
   "place": "hulao",
   "source": "synthesis",
   "quote": "建德恃众，列阵亘二十里",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M17",
   "subject": "event:hl_wei",
   "predicate": "冲锋",
   "value_text": "世民率史大奈等驰入其阵",
   "time": {
    "era_text": "武德四年",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
   },
   "place": "hulao",
   "source": "synthesis",
   "quote": "世民率史大奈等驰入其阵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M18",
   "subject": "event:hl_wei",
   "predicate": "溃败",
   "value_text": "夏军望见大溃，建德被擒",
   "time": {
    "era_text": "武德四年",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
   },
   "place": "hulao",
   "source": "synthesis",
   "quote": "夏军望见大溃，建德被擒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M18",
   "subject": "event:hl_jz",
   "predicate": "投降",
   "value_text": "王世充面缚出降",
   "time": {
    "era_text": "武德四年",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
   },
   "place": "luoyang_t",
   "source": "synthesis",
   "quote": "世充闻之，面缚出降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M18",
   "subject": "event:hl_jz",
   "predicate": "结果",
   "value_text": "唐一举兼平二雄，中原底定",
   "time": {
    "era_text": "武德四年",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
   },
   "place": "luoyang_t",
   "source": "synthesis",
   "quote": "唐一举兼平二雄，中原底定",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX011_M12",
   "subject": "event:hl_wei",
   "predicate": "兵力对比",
   "value_text": "夏军十余万，唐军未明",
   "time": {
    "era_text": "武德四年",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
   },
   "place": "hulao",
   "source": "synthesis",
   "quote": "窦建德自河北率夏军十余万来援",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "province",
   "note": "原文未载唐军兵力，无法对比",
   "lead": {
    "where": "hulao",
    "skills": [
     "军事史",
     "史料考据"
    ],
    "accept": "补充唐军兵力数据或说明缺失原因"
   },
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "HULAOG01",
   "subject": "event:hl_wei",
   "predicate": "叙事缺环",
   "value_text": "此役细节诸书记载互有出入，胜者所修史书常省略败方视角、兵力与伤亡之确切数字，相关叙述存在缺口。",
   "time": {
    "era_text": "武德四年",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
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
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "HULAO_THK1",
   "subject": "event:hl_shi",
   "predicate": "坚城疲敌",
   "value_text": "唐军据虎牢坚城疲敌，“牧马诱敌”；玄甲军骑兵突击破阵",
   "time": {
    "era_text": "武德四年（621）",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
   },
   "place": "",
   "source": "synthesis",
   "quote": "牧马诱敌",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "坚城+骑兵突击",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "HULAO_THK2",
   "subject": "event:hl_shi",
   "predicate": "军府雏形",
   "value_text": "李世民以“天策上将”总制出征，藩镇军府（折冲府前身）初显",
   "time": {
    "era_text": "武德四年（621）",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
   },
   "place": "",
   "source": "synthesis",
   "quote": "天策上将",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "province",
   "note": "军府制萌芽",
   "dims": [
    3
   ],
   "dim_source": "inferred",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "HULAO_THK3",
   "subject": "event:hl_shi",
   "predicate": "山东归唐",
   "value_text": "“据武牢之险”，山东豪杰归唐；窦建德河北义军与王世充合流失败",
   "time": {
    "era_text": "武德四年（621）",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
   },
   "place": "",
   "source": "synthesis",
   "quote": "山东豪杰归唐",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "地方势力归附",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "HULAO_THK4",
   "subject": "event:hl_shi",
   "predicate": "围城打援",
   "value_text": "“先破窦建德，王世充自下”的围城打援、歼灭战思想",
   "time": {
    "era_text": "武德四年（621）",
    "start": "621-01-01",
    "end": "621-12-31",
    "gregorian_year": 621
   },
   "place": "",
   "source": "synthesis",
   "quote": "先破窦建德",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "歼灭战战略",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SX011_M12",
  "HULAOG01"
 ],
 "events": [
  {
   "id": "ev_hl_shi",
   "subject": "event:hl_shi",
   "year": 621,
   "era": "武德四年",
   "title": "唐围洛阳",
   "kind": "战事",
   "text": "李世民围王世充于洛阳。"
  },
  {
   "id": "ev_hl_wei",
   "subject": "event:hl_wei",
   "year": 621,
   "era": "武德四年",
   "title": "建德援郑",
   "kind": "战事",
   "text": "窦建德率夏军救洛阳，屯虎牢东。",
   "place": "hulao"
  },
  {
   "id": "ev_hl_jz",
   "subject": "event:hl_jz",
   "year": 621,
   "era": "武德四年",
   "title": "虎牢擒建德",
   "kind": "战事",
   "text": "世民突阵擒建德，世充遂降。",
   "place": "hulao"
  }
 ],
 "engagements": [
  {
   "id": "eng_hl_main",
   "name": "虎牢决战",
   "at": "621-05",
   "era": "武德四年五月",
   "place": "hulao",
   "winner": "a",
   "outcome": "世民按兵虎牢疲夏军，伺懈率骑突阵，擒建德，洛阳震恐降。",
   "subject": "event:hl_jz",
   "sides": [
    {
     "side": "a",
     "commander": "李世民",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 110,
     "posture": "突阵",
     "commit_basis": "唐军据险蓄锐，一击擒其主。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "窦建德",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 140,
     "posture": "顿兵",
     "commit_basis": "夏军远来顿于坚城下，主将被擒则溃。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_hl_tang",
   "name": "唐军东扼",
   "side": "a",
   "nodes": [
    {
     "place": "changan_tx",
     "at": "621-01",
     "label": "唐出兵"
    },
    {
     "place": "luoyang_t",
     "at": "621-03",
     "label": "围洛阳"
    },
    {
     "place": "hulao",
     "at": "621-05",
     "label": "据关擒建德"
    }
   ],
   "outcome": {
    "at": "621-05",
    "type": "victory",
    "text": "虎牢擒建德，世充降"
   }
  },
  {
   "id": "rt_hl_xia",
   "name": "夏军援郑",
   "side": "b",
   "nodes": [
    {
     "place": "shanzhou",
     "at": "621-02",
     "label": "建德起"
    },
    {
     "place": "hulao",
     "at": "621-04",
     "label": "屯虎牢东"
    }
   ],
   "outcome": {
    "at": "621-04",
    "type": "defeat",
    "text": "夏军援郑中伏被擒"
   }
  }
 ],
 "timeline": [
  {
   "at": "621-01",
   "era": "武德四年",
   "label": "唐围洛阳",
   "key": false
  },
  {
   "at": "621-04",
   "era": "四月",
   "label": "建德屯虎牢",
   "key": false
  },
  {
   "at": "621-05",
   "era": "五月",
   "label": "虎牢擒建德",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "621-05",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "621-05",
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
   "唐军",
   "郑夏联军",
   "综合史料"
  ],
  "party_bucket": {
   "唐军": "唐军",
   "郑夏联军": "郑夏联军",
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
     "label": "唐军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "郑夏联军胜",
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
     "label": "唐军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "郑夏联军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 },
 "basemap": {
  "coastline": [],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        107.94,
        33.34
       ],
       [
        107.94,
        35.78
       ],
       [
        114.27,
        35.78
       ],
       [
        114.27,
        33.34
       ],
       [
        107.94,
        33.34
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "admin1": [
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         110.379,
         34.601
        ],
        [
         110.425,
         34.588
        ],
        [
         110.488,
         34.611
        ],
        [
         110.533,
         34.583
        ],
        [
         110.611,
         34.608
        ],
        [
         110.71,
         34.605
        ],
        [
         110.749,
         34.652
        ],
        [
         110.792,
         34.65
        ],
        [
         110.825,
         34.616
        ],
        [
         110.884,
         34.644
        ],
        [
         110.903,
         34.669
        ],
        [
         110.92,
         34.73
        ],
        [
         110.976,
         34.706
        ],
        [
         111.035,
         34.741
        ],
        [
         111.118,
         34.757
        ],
        [
         111.149,
         34.808
        ],
        [
         111.233,
         34.79
        ],
        [
         111.255,
         34.82
        ],
        [
         111.292,
         34.807
        ],
        [
         111.346,
         34.832
        ],
        [
         111.389,
         34.815
        ],
        [
         111.439,
         34.838
        ],
        [
         111.503,
         34.83
        ],
        [
         111.544,
         34.853
        ],
        [
         111.57,
         34.843
        ],
        [
         111.592,
         34.881
        ],
        [
         111.618,
         34.895
        ],
        [
         111.647,
         34.939
        ],
        [
         111.682,
         34.951
        ],
        [
         111.664,
         34.984
        ],
        [
         111.74,
         35.005
        ],
        [
         111.807,
         35.033
        ],
        [
         111.81,
         35.062
        ],
        [
         111.933,
         35.083
        ],
        [
         111.978,
         35.067
        ],
        [
         112.019,
         35.069
        ],
        [
         112.039,
         35.046
        ],
        [
         112.062,
         35.056
        ],
        [
         112.056,
         35.099
        ],
        [
         112.066,
         35.153
        ],
        [
         112.04,
         35.194
        ],
        [
         112.079,
         35.219
        ],
        [
         112.059,
         35.28
        ],
        [
         112.138,
         35.271
        ],
        [
         112.217,
         35.253
        ],
        [
         112.242,
         35.235
        ],
        [
         112.305,
         35.252
        ],
        [
         112.288,
         35.22
        ],
        [
         112.368,
         35.22
        ],
        [
         112.391,
         35.239
        ],
        [
         112.513,
         35.218
        ],
        [
         112.637,
         35.226
        ],
        [
         112.628,
         35.263
        ],
        [
         112.72,
         35.206
        ],
        [
         112.773,
         35.208
        ],
        [
         112.822,
         35.258
        ],
        [
         112.884,
         35.244
        ],
        [
         112.934,
         35.263
        ],
        [
         112.936,
         35.284
        ],
        [
         112.992,
         35.296
        ],
        [
         112.986,
         35.34
        ],
        [
         112.996,
         35.362
        ],
        [
         113.067,
         35.354
        ],
        [
         113.126,
         35.332
        ],
        [
         113.149,
         35.351
        ],
        [
         113.165,
         35.413
        ],
        [
         113.185,
         35.409
        ],
        [
         113.19,
         35.449
        ],
        [
         113.243,
         35.449
        ],
        [
         113.304,
         35.427
        ],
        [
         113.312,
         35.481
        ],
        [
         113.348,
         35.468
        ],
        [
         113.392,
         35.507
        ],
        [
         113.439,
         35.507
        ],
        [
         113.499,
         35.532
        ],
        [
         113.514,
         35.574
        ],
        [
         113.558,
         35.622
        ],
        [
         113.548,
         35.657
        ],
        [
         113.578,
         35.633
        ],
        [
         113.625,
         35.633
        ],
        [
         113.623,
         35.675
        ],
        [
         113.593,
         35.692
        ],
        [
         113.588,
         35.737
        ],
        [
         113.6,
         35.78
        ],
        [
         110.573,
         35.78
        ],
        [
         110.578,
         35.702
        ],
        [
         110.61,
         35.632
        ],
        [
         110.589,
         35.602
        ],
        [
         110.568,
         35.54
        ],
        [
         110.531,
         35.511
        ],
        [
         110.478,
         35.414
        ],
        [
         110.45,
         35.328
        ],
        [
         110.375,
         35.252
        ],
        [
         110.379,
         35.211
        ],
        [
         110.364,
         35.198
        ],
        [
         110.374,
         35.134
        ],
        [
         110.321,
         35.005
        ],
        [
         110.262,
         34.944
        ],
        [
         110.231,
         34.881
        ],
        [
         110.247,
         34.789
        ],
        [
         110.243,
         34.726
        ],
        [
         110.23,
         34.693
        ],
        [
         110.269,
         34.63
        ],
        [
         110.295,
         34.611
        ],
        [
         110.379,
         34.601
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         114.27,
         33.34
        ],
        [
         114.27,
         35.78
        ],
        [
         113.6,
         35.78
        ],
        [
         113.588,
         35.737
        ],
        [
         113.593,
         35.692
        ],
        [
         113.623,
         35.675
        ],
        [
         113.625,
         35.633
        ],
        [
         113.578,
         35.633
        ],
        [
         113.548,
         35.657
        ],
        [
         113.558,
         35.622
        ],
        [
         113.514,
         35.574
        ],
        [
         113.499,
         35.532
        ],
        [
         113.439,
         35.507
        ],
        [
         113.392,
         35.507
        ],
        [
         113.348,
         35.468
        ],
        [
         113.312,
         35.481
        ],
        [
         113.304,
         35.427
        ],
        [
         113.243,
         35.449
        ],
        [
         113.19,
         35.449
        ],
        [
         113.185,
         35.409
        ],
        [
         113.165,
         35.413
        ],
        [
         113.149,
         35.351
        ],
        [
         113.126,
         35.332
        ],
        [
         113.067,
         35.354
        ],
        [
         112.996,
         35.362
        ],
        [
         112.986,
         35.34
        ],
        [
         112.992,
         35.296
        ],
        [
         112.936,
         35.284
        ],
        [
         112.934,
         35.263
        ],
        [
         112.884,
         35.244
        ],
        [
         112.822,
         35.258
        ],
        [
         112.773,
         35.208
        ],
        [
         112.72,
         35.206
        ],
        [
         112.628,
         35.263
        ],
        [
         112.637,
         35.226
        ],
        [
         112.513,
         35.218
        ],
        [
         112.391,
         35.239
        ],
        [
         112.368,
         35.22
        ],
        [
         112.288,
         35.22
        ],
        [
         112.305,
         35.252
        ],
        [
         112.242,
         35.235
        ],
        [
         112.217,
         35.253
        ],
        [
         112.138,
         35.271
        ],
        [
         112.059,
         35.28
        ],
        [
         112.079,
         35.219
        ],
        [
         112.04,
         35.194
        ],
        [
         112.066,
         35.153
        ],
        [
         112.056,
         35.099
        ],
        [
         112.062,
         35.056
        ],
        [
         112.039,
         35.046
        ],
        [
         112.019,
         35.069
        ],
        [
         111.978,
         35.067
        ],
        [
         111.933,
         35.083
        ],
        [
         111.81,
         35.062
        ],
        [
         111.807,
         35.033
        ],
        [
         111.74,
         35.005
        ],
        [
         111.664,
         34.984
        ],
        [
         111.682,
         34.951
        ],
        [
         111.647,
         34.939
        ],
        [
         111.618,
         34.895
        ],
        [
         111.592,
         34.881
        ],
        [
         111.57,
         34.843
        ],
        [
         111.544,
         34.853
        ],
        [
         111.503,
         34.83
        ],
        [
         111.439,
         34.838
        ],
        [
         111.389,
         34.815
        ],
        [
         111.346,
         34.832
        ],
        [
         111.292,
         34.807
        ],
        [
         111.255,
         34.82
        ],
        [
         111.233,
         34.79
        ],
        [
         111.149,
         34.808
        ],
        [
         111.118,
         34.757
        ],
        [
         111.035,
         34.741
        ],
        [
         110.976,
         34.706
        ],
        [
         110.92,
         34.73
        ],
        [
         110.903,
         34.669
        ],
        [
         110.884,
         34.644
        ],
        [
         110.825,
         34.616
        ],
        [
         110.792,
         34.65
        ],
        [
         110.749,
         34.652
        ],
        [
         110.71,
         34.605
        ],
        [
         110.611,
         34.608
        ],
        [
         110.533,
         34.583
        ],
        [
         110.488,
         34.611
        ],
        [
         110.425,
         34.588
        ],
        [
         110.379,
         34.601
        ],
        [
         110.367,
         34.567
        ],
        [
         110.405,
         34.558
        ],
        [
         110.372,
         34.544
        ],
        [
         110.361,
         34.517
        ],
        [
         110.403,
         34.433
        ],
        [
         110.403,
         34.433
        ],
        [
         110.473,
         34.393
        ],
        [
         110.504,
         34.337
        ],
        [
         110.452,
         34.293
        ],
        [
         110.429,
         34.288
        ],
        [
         110.44,
         34.243
        ],
        [
         110.508,
         34.217
        ],
        [
         110.552,
         34.213
        ],
        [
         110.558,
         34.193
        ],
        [
         110.622,
         34.177
        ],
        [
         110.642,
         34.161
        ],
        [
         110.614,
         34.113
        ],
        [
         110.592,
         34.102
        ],
        [
         110.587,
         34.023
        ],
        [
         110.621,
         34.036
        ],
        [
         110.671,
         33.966
        ],
        [
         110.666,
         33.938
        ],
        [
         110.627,
         33.925
        ],
        [
         110.629,
         33.91
        ],
        [
         110.587,
         33.888
        ],
        [
         110.612,
         33.852
        ],
        [
         110.663,
         33.853
        ],
        [
         110.712,
         33.834
        ],
        [
         110.741,
         33.799
        ],
        [
         110.782,
         33.796
        ],
        [
         110.817,
         33.751
        ],
        [
         110.832,
         33.714
        ],
        [
         110.824,
         33.686
        ],
        [
         110.879,
         33.634
        ],
        [
         110.967,
         33.609
        ],
        [
         111.004,
         33.579
        ],
        [
         111.003,
         33.536
        ],
        [
         111.027,
         33.478
        ],
        [
         111.027,
         33.468
        ],
        [
         110.996,
         33.436
        ],
        [
         111.026,
         33.375
        ],
        [
         111.026,
         33.34
        ],
        [
         114.27,
         33.34
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         110.379,
         34.601
        ],
        [
         110.295,
         34.611
        ],
        [
         110.269,
         34.63
        ],
        [
         110.23,
         34.693
        ],
        [
         110.243,
         34.726
        ],
        [
         110.247,
         34.789
        ],
        [
         110.231,
         34.881
        ],
        [
         110.262,
         34.944
        ],
        [
         110.321,
         35.005
        ],
        [
         110.374,
         35.134
        ],
        [
         110.364,
         35.198
        ],
        [
         110.379,
         35.211
        ],
        [
         110.375,
         35.252
        ],
        [
         110.45,
         35.328
        ],
        [
         110.478,
         35.414
        ],
        [
         110.531,
         35.511
        ],
        [
         110.568,
         35.54
        ],
        [
         110.589,
         35.602
        ],
        [
         110.61,
         35.632
        ],
        [
         110.578,
         35.702
        ],
        [
         110.573,
         35.78
        ],
        [
         108.531,
         35.78
        ],
        [
         108.534,
         35.746
        ],
        [
         108.518,
         35.7
        ],
        [
         108.539,
         35.606
        ],
        [
         108.618,
         35.557
        ],
        [
         108.626,
         35.537
        ],
        [
         108.606,
         35.503
        ],
        [
         108.631,
         35.419
        ],
        [
         108.61,
         35.355
        ],
        [
         108.615,
         35.329
        ],
        [
         108.583,
         35.295
        ],
        [
         108.547,
         35.305
        ],
        [
         108.489,
         35.275
        ],
        [
         108.361,
         35.28
        ],
        [
         108.345,
         35.301
        ],
        [
         108.297,
         35.268
        ],
        [
         108.239,
         35.256
        ],
        [
         108.222,
         35.297
        ],
        [
         108.175,
         35.305
        ],
        [
         108.095,
         35.28
        ],
        [
         108.049,
         35.254
        ],
        [
         107.95,
         35.245
        ],
        [
         107.96,
         35.263
        ],
        [
         107.94,
         35.262
        ],
        [
         107.94,
         33.34
        ],
        [
         111.026,
         33.34
        ],
        [
         111.026,
         33.375
        ],
        [
         110.996,
         33.436
        ],
        [
         111.027,
         33.468
        ],
        [
         111.021,
         33.471
        ],
        [
         111.022,
         33.476
        ],
        [
         111.027,
         33.478
        ],
        [
         111.003,
         33.536
        ],
        [
         111.004,
         33.579
        ],
        [
         110.967,
         33.609
        ],
        [
         110.879,
         33.634
        ],
        [
         110.824,
         33.686
        ],
        [
         110.832,
         33.714
        ],
        [
         110.817,
         33.751
        ],
        [
         110.782,
         33.796
        ],
        [
         110.741,
         33.799
        ],
        [
         110.712,
         33.834
        ],
        [
         110.663,
         33.853
        ],
        [
         110.612,
         33.852
        ],
        [
         110.587,
         33.888
        ],
        [
         110.629,
         33.91
        ],
        [
         110.627,
         33.925
        ],
        [
         110.666,
         33.938
        ],
        [
         110.671,
         33.966
        ],
        [
         110.621,
         34.036
        ],
        [
         110.587,
         34.023
        ],
        [
         110.592,
         34.102
        ],
        [
         110.614,
         34.113
        ],
        [
         110.642,
         34.161
        ],
        [
         110.622,
         34.177
        ],
        [
         110.558,
         34.193
        ],
        [
         110.552,
         34.213
        ],
        [
         110.508,
         34.217
        ],
        [
         110.44,
         34.243
        ],
        [
         110.429,
         34.288
        ],
        [
         110.452,
         34.293
        ],
        [
         110.504,
         34.337
        ],
        [
         110.473,
         34.393
        ],
        [
         110.403,
         34.433
        ],
        [
         110.403,
         34.433
        ],
        [
         110.361,
         34.517
        ],
        [
         110.372,
         34.544
        ],
        [
         110.405,
         34.558
        ],
        [
         110.367,
         34.567
        ],
        [
         110.379,
         34.601
        ]
       ]
      ],
      [
       [
        [
         111.027,
         33.478
        ],
        [
         111.022,
         33.476
        ],
        [
         111.021,
         33.471
        ],
        [
         111.027,
         33.468
        ],
        [
         111.027,
         33.478
        ]
       ]
      ]
     ]
    },
    "n": "陕西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         107.94,
         35.78
        ],
        [
         107.94,
         35.262
        ],
        [
         107.96,
         35.263
        ],
        [
         107.95,
         35.245
        ],
        [
         108.049,
         35.254
        ],
        [
         108.095,
         35.28
        ],
        [
         108.175,
         35.305
        ],
        [
         108.222,
         35.297
        ],
        [
         108.239,
         35.256
        ],
        [
         108.297,
         35.268
        ],
        [
         108.345,
         35.301
        ],
        [
         108.361,
         35.28
        ],
        [
         108.489,
         35.275
        ],
        [
         108.547,
         35.305
        ],
        [
         108.583,
         35.295
        ],
        [
         108.615,
         35.329
        ],
        [
         108.61,
         35.355
        ],
        [
         108.631,
         35.419
        ],
        [
         108.606,
         35.503
        ],
        [
         108.626,
         35.537
        ],
        [
         108.618,
         35.557
        ],
        [
         108.539,
         35.606
        ],
        [
         108.518,
         35.7
        ],
        [
         108.534,
         35.746
        ],
        [
         108.531,
         35.78
        ],
        [
         107.94,
         35.78
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        110.562,
        35.78
       ],
       [
        110.576,
        35.733
       ],
       [
        110.579,
        35.534
       ],
       [
        110.459,
        35.343
       ],
       [
        110.366,
        35.234
       ],
       [
        110.316,
        35.135
       ],
       [
        110.278,
        35.008
       ],
       [
        110.262,
        34.868
       ],
       [
        110.27,
        34.637
       ],
       [
        110.465,
        34.597
       ],
       [
        110.619,
        34.604
       ],
       [
        110.795,
        34.645
       ],
       [
        110.89,
        34.683
       ],
       [
        110.97,
        34.724
       ],
       [
        111.027,
        34.746
       ],
       [
        111.101,
        34.795
       ],
       [
        111.243,
        34.83
       ],
       [
        111.453,
        34.852
       ],
       [
        111.589,
        34.899
       ],
       [
        111.651,
        34.972
       ],
       [
        111.736,
        35.03
       ],
       [
        111.844,
        35.074
       ],
       [
        112.118,
        35.022
       ],
       [
        112.559,
        34.872
       ],
       [
        112.857,
        34.809
       ],
       [
        113.012,
        34.831
       ],
       [
        113.156,
        34.875
       ],
       [
        113.288,
        34.94
       ],
       [
        113.399,
        34.974
       ],
       [
        113.489,
        34.978
       ],
       [
        113.617,
        34.954
       ],
       [
        113.784,
        34.902
       ],
       [
        113.9,
        34.895
       ],
       [
        113.965,
        34.931
       ],
       [
        114.156,
        34.936
       ],
       [
        114.27,
        34.927
       ]
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   107.94,
   33.34,
   114.27,
   35.78
  ]
 }
};
