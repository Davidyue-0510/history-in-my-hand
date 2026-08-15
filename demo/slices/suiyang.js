// 本文件由 tools/build.py 自动生成（切片 suiyang），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["suiyang"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["suiyang"] = {
 "meta": {
  "kind": "battle",
  "region": "sui_tang",
  "title": "睢阳之战",
  "dossier_label": "睢阳之战",
  "subtitle": "至德二载（757）· 唐 vs 安史",
  "primary_place": "suiyang",
  "dossier_event": "event:sy_zhang",
  "terrain_grid": "china_coarse",
  "lead": "张巡、许远死守睢阳十月，城陷殉国，屏障江淮。",
  "parties_note": "唐方叙张巡死节，叛方讳其顽强。",
  "subject_names": {
   "person:zhangxun": "张巡",
   "person:xuyuan": "许远",
   "person:yinziqi": "尹子奇"
  },
  "page": "suiyang.html",
  "key": "suiyang",
  "scene_id": "suiyang",
  "vocab_pack": "inline:suiyang"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "睢阳之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "唐方叙张巡死节，叛方讳其顽强。"
  }
 ],
 "places": [
  {
   "id": "suiyang",
   "name": "睢阳",
   "lon": 115.65,
   "lat": 34.41,
   "note": "今河南商丘",
   "elev": 52
  },
  {
   "id": "yongqiu",
   "name": "雍丘",
   "lon": 114.78,
   "lat": 34.56,
   "note": "张巡起",
   "elev": 61
  },
  {
   "id": "tang_du",
   "name": "唐都",
   "lon": 108.94,
   "lat": 34.34,
   "note": "长安（时已陷）",
   "elev": 391
  },
  {
   "id": "jianghuai",
   "name": "江淮",
   "lon": 119.0,
   "lat": 32.5,
   "note": "所屏障",
   "elev": 22
  }
 ],
 "persons": [
  {
   "id": "zhangxun",
   "name": "张巡",
   "side": "唐",
   "influence": 1
  },
  {
   "id": "xuyuan",
   "name": "许远",
   "side": "唐",
   "influence": 0
  },
  {
   "id": "yinziqi",
   "name": "尹子奇",
   "side": "安史",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_sy_zhang",
   "subject": "event:sy_zhang",
   "predicate": "战事",
   "value_text": "张巡、许远合守睢阳拒叛。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 757,
    "end": 757,
    "era_text": "至德二载"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_sy_we",
   "subject": "event:sy_we",
   "predicate": "战事",
   "value_text": "尹子奇率叛军围睢阳。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 757,
    "end": 757,
    "era_text": "至德二载"
   },
   "place": "suiyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_sy_jz",
   "subject": "event:sy_jz",
   "predicate": "战事",
   "value_text": "粮尽城陷，巡、远死节。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 757,
    "end": 757,
    "era_text": "至德二载"
   },
   "place": "suiyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M19",
   "subject": "event:sy_we",
   "predicate": "围城",
   "value_text": "尹子奇将十三万围睢阳",
   "time": {
    "era_text": "至德二载",
    "start": "757-01-01",
    "end": "757-12-31",
    "gregorian_year": 757
   },
   "place": "suiyang",
   "source": "synthesis",
   "quote": "安庆绪遣尹子奇将十三万围睢阳",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M19",
   "subject": "person:zhangxun",
   "predicate": "入守",
   "value_text": "真源令张巡入守睢阳",
   "time": {
    "era_text": "至德二载",
    "start": "757-01-01",
    "end": "757-12-31",
    "gregorian_year": 757
   },
   "place": "suiyang",
   "source": "synthesis",
   "quote": "太守许远请真源令张巡入守",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M18",
   "subject": "event:sy_zhang",
   "predicate": "战绩",
   "value_text": "大小四百余战，杀贼十二万",
   "time": {
    "era_text": "至德二载",
    "start": "757-01-01",
    "end": "757-12-31",
    "gregorian_year": 757
   },
   "place": "suiyang",
   "source": "synthesis",
   "quote": "前后大小四百余战，杀贼十二万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "county",
   "note": "杀贼数可能夸大，待核",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M19",
   "subject": "event:sy_zhang",
   "predicate": "粮尽",
   "value_text": "罗雀掘鼠，煮铠弩以食",
   "time": {
    "era_text": "至德二载",
    "start": "757-01-01",
    "end": "757-12-31",
    "gregorian_year": 757
   },
   "place": "suiyang",
   "source": "synthesis",
   "quote": "粮尽，罗雀掘鼠，煮铠弩以食",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M19",
   "subject": "event:sy_zhang",
   "predicate": "食人",
   "value_text": "至啖人肉而志不改",
   "time": {
    "era_text": "至德二载",
    "start": "757-01-01",
    "end": "757-12-31",
    "gregorian_year": 757
   },
   "place": "suiyang",
   "source": "synthesis",
   "quote": "至啖人肉而志不改",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "county",
   "note": "惨烈细节，或有争议",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M19",
   "subject": "event:sy_zhang",
   "predicate": "城陷",
   "value_text": "外援绝，城陷",
   "time": {
    "era_text": "至德二载",
    "start": "757-01-01",
    "end": "757-12-31",
    "gregorian_year": 757
   },
   "place": "suiyang",
   "source": "synthesis",
   "quote": "外援绝，城陷",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M18",
   "subject": "event:sy_zhang",
   "predicate": "被执不屈",
   "value_text": "巡、远被执，皆不屈死",
   "time": {
    "era_text": "至德二载",
    "start": "757-01-01",
    "end": "757-12-31",
    "gregorian_year": 757
   },
   "place": "suiyang",
   "source": "synthesis",
   "quote": "巡、远被执，皆不屈死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M19",
   "subject": "event:sy_jz",
   "predicate": "屏蔽江淮",
   "value_text": "睢阳屏蔽江淮，沮贼南略",
   "time": {
    "era_text": "至德二载",
    "start": "757-01-01",
    "end": "757-12-31",
    "gregorian_year": 757
   },
   "place": "jianghuai",
   "source": "synthesis",
   "quote": "睢阳屏蔽江淮，沮贼南略",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "战略意义评价",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M19",
   "subject": "event:sy_jz",
   "predicate": "保全财赋",
   "value_text": "保全唐之财赋根本",
   "time": {
    "era_text": "至德二载",
    "start": "757-01-01",
    "end": "757-12-31",
    "gregorian_year": 757
   },
   "place": "jianghuai",
   "source": "synthesis",
   "quote": "保全唐之财赋根本",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M19",
   "subject": "event:sy_jz",
   "predicate": "功在社稷",
   "value_text": "以孤城遏方张之寇，功在社稷",
   "time": {
    "era_text": "至德二载",
    "start": "757-01-01",
    "end": "757-12-31",
    "gregorian_year": 757
   },
   "place": "suiyang",
   "source": "synthesis",
   "quote": "以孤城遏方张之寇，功在社稷",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "论者评价，属后世推断",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX011_M13",
   "subject": "event:sy_zhang",
   "predicate": "兵力对比",
   "value_text": "十三万围城，守军不详",
   "time": {
    "era_text": "至德二载",
    "start": "757-01-01",
    "end": "757-12-31",
    "gregorian_year": 757
   },
   "place": "suiyang",
   "source": "synthesis",
   "quote": "尹子奇将十三万围睢阳",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "county",
   "note": "守军兵力未载，无法对比",
   "lead": {
    "where": "suiyang",
    "skills": [
     "史料考据",
     "军事史"
    ],
    "accept": "补充睢阳守军具体兵力数字"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SUIYANGG01",
   "subject": "event:sy_zhang",
   "predicate": "叙事缺环",
   "value_text": "此役细节诸书记载互有出入，胜者所修史书常省略败方视角、兵力与伤亡之确切数字，相关叙述存在缺口。",
   "time": {
    "era_text": "至德二载",
    "start": "757-01-01",
    "end": "757-12-31",
    "gregorian_year": 757
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
  "SX011_M13",
  "SUIYANGG01"
 ],
 "events": [
  {
   "id": "ev_sy_zhang",
   "subject": "event:sy_zhang",
   "year": 757,
   "era": "至德二载",
   "title": "张巡守睢阳",
   "kind": "战事",
   "text": "张巡、许远合守睢阳拒叛。"
  },
  {
   "id": "ev_sy_we",
   "subject": "event:sy_we",
   "year": 757,
   "era": "至德二载",
   "title": "叛军围城",
   "kind": "战事",
   "text": "尹子奇率叛军围睢阳。",
   "place": "suiyang"
  },
  {
   "id": "ev_sy_jz",
   "subject": "event:sy_jz",
   "year": 757,
   "era": "至德二载",
   "title": "城陷殉国",
   "kind": "战事",
   "text": "粮尽城陷，巡、远死节。",
   "place": "suiyang"
  }
 ],
 "engagements": [
  {
   "id": "eng_sy_main",
   "name": "睢阳死守",
   "at": "757-10",
   "era": "至德二载十月",
   "place": "suiyang",
   "winner": "b",
   "outcome": "张巡以少拒众守十月，叛军攻之不克，城陷粮尽，唐守将死节。",
   "subject": "event:sy_jz",
   "sides": [
    {
     "side": "a",
     "commander": "张巡/许远",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 60,
     "posture": "死守",
     "commit_basis": "孤城疲兵，以忠拒众。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "尹子奇",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 80,
     "posture": "顿兵",
     "commit_basis": "叛军数围不克，顿于坚城。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_sy_tang",
   "name": "唐军守城",
   "side": "a",
   "nodes": [
    {
     "place": "yongqiu",
     "at": "757-01",
     "label": "张巡起兵"
    },
    {
     "place": "suiyang",
     "at": "757-03",
     "label": "入睢阳守"
    }
   ],
   "outcome": {
    "at": "757-10",
    "type": "defeat",
    "text": "城陷，然屏障江淮"
   }
  },
  {
   "id": "rt_sy_pan",
   "name": "叛军南下",
   "side": "b",
   "nodes": [
    {
     "place": "tang_du",
     "at": "757-01",
     "label": "叛军西进"
    },
    {
     "place": "suiyang",
     "at": "757-02",
     "label": "围城"
    }
   ],
   "outcome": {
    "at": "757-09",
    "type": "victory",
    "text": "叛军围睢阳，城终陷"
   }
  }
 ],
 "timeline": [
  {
   "at": "757-01",
   "era": "至德二载",
   "label": "张巡起兵",
   "key": false
  },
  {
   "at": "757-03",
   "era": "三月",
   "label": "入睢阳",
   "key": false
  },
  {
   "at": "757-10",
   "era": "十月",
   "label": "城陷殉国",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "757-10",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "757-10",
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
   "唐守军",
   "安史军",
   "综合史料"
  ],
  "party_bucket": {
   "唐守军": "唐守军",
   "安史军": "安史军",
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
     "label": "唐守军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "安史军胜",
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
     "label": "唐守军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "安史军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
