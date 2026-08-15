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
   "bias_note": "唐方叙太宗用兵，郑夏讳败。"
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
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
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
 }
};
