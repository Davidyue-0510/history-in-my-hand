// 本文件由 tools/build.py 自动生成（切片 tumu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["tumu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["tumu"] = {
 "meta": {
  "kind": "battle",
  "region": "yuan_ming",
  "title": "土木堡之变",
  "dossier_label": "土木堡之变",
  "subtitle": "正统十四年（1449）· 明 vs 瓦剌",
  "primary_place": "tumu",
  "dossier_event": "event:tm_ying",
  "terrain_grid": "china_coarse",
  "lead": "王振挟英宗亲征，土木堡溃，英宗被俘，明军精锐丧。",
  "parties_note": "明方叙王振乱政，瓦剌叙俘帝。",
  "subject_names": {
   "person:zhengtong": "明英宗",
   "person:wangzhen": "王振",
   "person:yexian": "也先"
  },
  "page": "tumu.html",
  "key": "tumu",
  "scene_id": "tumu",
  "vocab_pack": "inline:tumu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "土木堡之变·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "明方叙王振乱政，瓦剌叙俘帝。"
  }
 ],
 "places": [
  {
   "id": "tumu",
   "name": "土木堡",
   "lon": 115.47,
   "lat": 40.45,
   "note": "今河北怀来西",
   "elev": 821
  },
  {
   "id": "xuanfu",
   "name": "宣府",
   "lon": 115.03,
   "lat": 40.63,
   "note": "明北边",
   "elev": 726
  },
  {
   "id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "明都",
   "elev": 44
  },
  {
   "id": "datong",
   "name": "大同",
   "lon": 113.3,
   "lat": 40.08,
   "note": "瓦剌入",
   "elev": 1054
  }
 ],
 "persons": [
  {
   "id": "zhengtong",
   "name": "明英宗",
   "side": "明",
   "influence": 0
  },
  {
   "id": "wangzhen",
   "name": "王振",
   "side": "明",
   "influence": 0
  },
  {
   "id": "yexian",
   "name": "也先",
   "side": "瓦剌",
   "influence": 0
  },
  {
   "id": "zhangfu",
   "name": "张辅",
   "side": "明",
   "influence": 0
  },
  {
   "id": "kuangye",
   "name": "邝埜",
   "side": "明",
   "influence": 0
  },
  {
   "id": "fanzhong",
   "name": "樊忠",
   "side": "明",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_tm_ying",
   "subject": "event:tm_ying",
   "predicate": "战事",
   "value_text": "王振挟英宗亲征瓦剌。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1449,
    "end": 1449,
    "era_text": "正统十四年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_tm_wa",
   "subject": "event:tm_wa",
   "predicate": "战事",
   "value_text": "也先诱明军至土木堡。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1449,
    "end": 1449,
    "era_text": "正统十四年"
   },
   "place": "tumu",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_tm_jz",
   "subject": "event:tm_jz",
   "predicate": "战事",
   "value_text": "明军溃，英宗被俘。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1449,
    "end": 1449,
    "era_text": "正统十四年"
   },
   "place": "tumu",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "TM001",
   "subject": "event:tm_ying",
   "predicate": "爆发",
   "value_text": "瓦剌太师也先大举入寇",
   "time": {
    "era_text": "正统十四年七月",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "",
   "source": "synthesis",
   "quote": "瓦剌太师也先大举入寇",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "战役起因，也先入侵",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "TM002",
   "subject": "event:tm_wa",
   "predicate": "集兵",
   "value_text": "调集京师及各地兵马约五十万",
   "time": {
    "era_text": "正统十四年七月",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "调集京师及各地兵马约五十万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "兵力为约数，可能夸大",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "TM003",
   "subject": "event:tm_wa",
   "predicate": "出击路线",
   "value_text": "出居庸关，过宣府，至大同",
   "time": {
    "era_text": "正统十四年七月",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "xuanfu",
   "source": "synthesis",
   "quote": "出居庸关，过宣府，至大同",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "亲征路线",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "TM004",
   "subject": "event:tm_jz",
   "predicate": "战败",
   "value_text": "大同前哨明军战败",
   "time": {
    "era_text": "正统十四年七月",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "datong",
   "source": "synthesis",
   "quote": "大同前哨明军战败",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "前哨失利",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "TM005",
   "subject": "event:tm_collapse",
   "predicate": "溃败",
   "value_text": "明军大乱，自相践踏，死伤数十万",
   "time": {
    "era_text": "正统十四年八月",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "tumu",
   "source": "synthesis",
   "quote": "明军大乱，自相践踏，死伤数十万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "死伤数字可能夸大",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "TM006",
   "subject": "event:tm_minister",
   "predicate": "阵亡",
   "value_text": "张辅、邝埜、王佐等数十名重臣战死",
   "time": {
    "era_text": "正统十四年八月",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "tumu",
   "source": "synthesis",
   "quote": "英国公张辅、兵部尚书邝埜、户部尚书王佐、刑部侍郎丁铉等数十名重臣战死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "重臣死难",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "TM007",
   "subject": "event:tm_wangzhen",
   "predicate": "被杀",
   "value_text": "王振为樊忠锤杀",
   "time": {
    "era_text": "正统十四年八月",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "tumu",
   "source": "synthesis",
   "quote": "宦官王振为护卫将军樊忠锤杀",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "王振之死",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "TM008",
   "subject": "event:tm_capture",
   "predicate": "被俘",
   "value_text": "明英宗为瓦剌所执",
   "time": {
    "era_text": "正统十四年八月",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "tumu",
   "source": "synthesis",
   "quote": "明英宗突围不得，下马盘膝面南而坐，为瓦剌所执",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "英宗被俘",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "TM009",
   "subject": "event:tm_consequence",
   "predicate": "影响",
   "value_text": "京师震动，有迁都之议",
   "time": {
    "era_text": "正统十四年八月",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "败报至京师，举朝震恐，有迁都南京之议",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "战后朝局",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "TM010",
   "subject": "event:tm_consequence",
   "predicate": "决策",
   "value_text": "于谦力主留守抗战",
   "time": {
    "era_text": "正统十四年八月",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "兵部侍郎于谦力言「京师天下根本，一动则大事去矣」",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "北京保卫战前奏",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "TM011",
   "subject": "event:tm_collapse",
   "predicate": "原因",
   "value_text": "王振乱命折返，延误军机",
   "time": {
    "era_text": "正统十四年七月",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "",
   "source": "synthesis",
   "quote": "王振闻讯震惧，乱命大军折返",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "province",
   "note": "推断王振指挥失误为溃败主因",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "TM012",
   "subject": "event:tm_collapse",
   "predicate": "兵力",
   "value_text": "死伤数十万",
   "time": {
    "era_text": "正统十四年八月",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "tumu",
   "source": "synthesis",
   "quote": "死伤数十万",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "province",
   "note": "死伤数字与集兵五十万存在口径差异，需核验",
   "lead": {
    "where": "tumu",
    "skills": [
     "quantitative_analysis"
    ],
    "accept": "核实土木堡之变明军实际兵力与伤亡数字"
   },
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "TM012"
 ],
 "events": [
  {
   "id": "ev_tm_ying",
   "subject": "event:tm_ying",
   "year": 1449,
   "era": "正统十四年",
   "title": "英宗亲征",
   "kind": "战事",
   "text": "王振挟英宗亲征瓦剌。"
  },
  {
   "id": "ev_tm_wa",
   "subject": "event:tm_wa",
   "year": 1449,
   "era": "正统十四年",
   "title": "瓦剌南犯",
   "kind": "战事",
   "text": "也先诱明军至土木堡。",
   "place": "tumu"
  },
  {
   "id": "ev_tm_jz",
   "subject": "event:tm_jz",
   "year": 1449,
   "era": "正统十四年",
   "title": "土木堡溃",
   "kind": "战事",
   "text": "明军溃，英宗被俘。",
   "place": "tumu"
  },
  {
   "id": "ev_tm_collapse",
   "subject": "event:tm_collapse",
   "year": 1449,
   "era": "正统十四年八月",
   "title": "土木堡溃败",
   "kind": "战事",
   "text": "也先佯败诱明军移营，乘大风扬尘突袭，明军大乱自相践踏，死伤数十万，兵械辎重尽失。",
   "place": "tumu"
  },
  {
   "id": "ev_tm_minister",
   "subject": "event:tm_minister",
   "year": 1449,
   "era": "正统十四年八月",
   "title": "大臣死难",
   "kind": "死难",
   "text": "英国公张辅、兵部尚书邝埜、户部尚书王佐、刑部侍郎丁铉等数十名文武大臣战死。",
   "place": "tumu"
  },
  {
   "id": "ev_tm_wangzhen",
   "subject": "event:tm_wangzhen",
   "year": 1449,
   "era": "正统十四年八月",
   "title": "王振被杀",
   "kind": "死难",
   "text": "护卫将军樊忠锤杀王振，曰「吾为天下诛此贼」。",
   "place": "tumu"
  },
  {
   "id": "ev_tm_capture",
   "subject": "event:tm_capture",
   "year": 1449,
   "era": "正统十四年八月",
   "title": "英宗被俘",
   "kind": "被俘",
   "text": "英宗突围不得，下马盘膝面南坐，为瓦剌所执，北狩。",
   "place": "tumu"
  },
  {
   "id": "ev_tm_consequence",
   "subject": "event:tm_consequence",
   "year": 1449,
   "era": "正统十四年八月",
   "title": "京师震恐",
   "kind": "后果",
   "text": "败报至京，举朝震恐，有迁都之议，于谦力主留守。",
   "place": "beijing"
  }
 ],
 "engagements": [
  {
   "id": "eng_tm_main",
   "name": "土木堡溃",
   "at": "1449-08",
   "era": "正统十四年八月",
   "place": "tumu",
   "winner": "b",
   "outcome": "也先佯退诱明军移营，乘雨缺水解围，明军大溃，英宗被俘。",
   "subject": "event:tm_jz",
   "sides": [
    {
     "side": "a",
     "commander": "英宗/王振",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 80,
     "posture": "移营",
     "commit_basis": "明军仓皇移营，指挥乱。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "也先",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 100,
     "posture": "诱击",
     "commit_basis": "瓦剌以逸待劳，乘懈合围。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_tm_ming",
   "name": "明军北征",
   "side": "a",
   "nodes": [
    {
     "place": "beijing",
     "at": "1449-07",
     "label": "英宗出"
    },
    {
     "place": "datong",
     "at": "1449-08",
     "label": "至大同"
    },
    {
     "place": "tumu",
     "at": "1449-08",
     "label": "土木堡溃"
    }
   ],
   "outcome": {
    "at": "1449-08",
    "type": "defeat",
    "text": "土木堡溃，帝被俘"
   }
  },
  {
   "id": "rt_tm_wa",
   "name": "瓦剌南犯",
   "side": "b",
   "nodes": [
    {
     "place": "datong",
     "at": "1449-08",
     "label": "瓦剌入"
    },
    {
     "place": "tumu",
     "at": "1449-08",
     "label": "合围"
    }
   ],
   "outcome": {
    "at": "1449-08",
    "type": "victory",
    "text": "瓦剌俘明英宗"
   }
  }
 ],
 "timeline": [
  {
   "at": "1449-07",
   "era": "正统十四年",
   "label": "英宗亲征",
   "key": false
  },
  {
   "at": "1449-08",
   "era": "八月",
   "label": "瓦剌诱敌",
   "key": false
  },
  {
   "at": "1449-08",
   "era": "八月",
   "label": "土木堡溃",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1449-08",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1449-08",
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
   "明军",
   "瓦剌军",
   "综合史料"
  ],
  "party_bucket": {
   "明军": "明军",
   "瓦剌军": "瓦剌军",
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
     "label": "明军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "瓦剌军胜",
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
     "label": "明军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "瓦剌军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
