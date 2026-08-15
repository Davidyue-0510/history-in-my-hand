// 本文件由 tools/build.py 自动生成（切片 caishiji），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["caishiji"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["caishiji"] = {
 "meta": {
  "kind": "battle",
  "region": "song",
  "title": "采石矶之战",
  "dossier_label": "采石矶之战",
  "subtitle": "绍兴三十一年（1161）· 宋 vs 金",
  "primary_place": "caishiji",
  "dossier_event": "event:cs_jin",
  "terrain_grid": "china_coarse",
  "lead": "虞允文临危督师，采石矶大败金舟师，完颜亮南侵挫。",
  "parties_note": "宋方叙虞允文督战，金方讳败。",
  "subject_names": {
   "person:yuyunwen": "虞允文",
   "person:wanyanliang": "完颜亮"
  },
  "page": "caishiji.html",
  "key": "caishiji",
  "scene_id": "caishiji",
  "vocab_pack": "inline:caishiji"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "采石矶之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "宋方叙虞允文督战，金方讳败。"
  }
 ],
 "places": [
  {
   "id": "caishiji",
   "name": "采石矶",
   "lon": 118.47,
   "lat": 31.66,
   "note": "今安徽马鞍山长江边",
   "elev": 13
  },
  {
   "id": "jiankang",
   "name": "建康",
   "lon": 118.8,
   "lat": 32.06,
   "note": "宋江防",
   "elev": 17
  },
  {
   "id": "guazhou",
   "name": "瓜洲",
   "lon": 119.42,
   "lat": 32.39,
   "note": "金渡口",
   "elev": 10
  },
  {
   "id": "linan",
   "name": "临安",
   "lon": 120.15,
   "lat": 30.27,
   "note": "宋都",
   "elev": 98
  }
 ],
 "persons": [
  {
   "id": "yuyunwen",
   "name": "虞允文",
   "side": "宋",
   "influence": 1
  },
  {
   "id": "wanyanliang",
   "name": "完颜亮",
   "side": "金",
   "influence": 2
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_cs_jin",
   "subject": "event:cs_jin",
   "predicate": "战事",
   "value_text": "完颜亮率金军至采石欲渡江。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1161,
    "end": 1161,
    "era_text": "绍兴三十一年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_cs_yu",
   "subject": "event:cs_yu",
   "predicate": "战事",
   "value_text": "虞允文犒师采石，整舟师。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1161,
    "end": 1161,
    "era_text": "绍兴三十一年"
   },
   "place": "caishiji",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_cs_jz",
   "subject": "event:cs_jz",
   "predicate": "战事",
   "value_text": "宋舟师火攻破金渡，亮退瓜洲。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1161,
    "end": 1161,
    "era_text": "绍兴三十一年"
   },
   "place": "caishiji",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M9",
   "subject": "event:cs_jin",
   "predicate": "南侵",
   "value_text": "金主完颜亮撕毁和议大举南侵",
   "time": {
    "era_text": "绍兴三十一年",
    "start": "1161-01-01",
    "end": "1161-12-31",
    "gregorian_year": 1161
   },
   "place": "",
   "source": "synthesis",
   "quote": "金主完颜亮撕毁和议大举南侵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "金主完颜亮撕毁和议，兵分多路渡淮",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M9",
   "subject": "event:cs_jin",
   "predicate": "兵临采石",
   "value_text": "金兵临采石",
   "time": {
    "era_text": "绍兴三十一年",
    "start": "1161-01-01",
    "end": "1161-12-31",
    "gregorian_year": 1161
   },
   "place": "caishiji",
   "source": "synthesis",
   "quote": "金兵临采石",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "金兵临采石，今安徽马鞍山",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M8",
   "subject": "event:cs_jin",
   "predicate": "宋军主将弃职",
   "value_text": "宋军主将弃职遁走",
   "time": {
    "era_text": "绍兴三十一年",
    "start": "1161-01-01",
    "end": "1161-12-31",
    "gregorian_year": 1161
   },
   "place": "caishiji",
   "source": "synthesis",
   "quote": "宋军主将弃职遁走",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "江防瓦解",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M9",
   "subject": "person:yuyunwen",
   "predicate": "犒师督战",
   "value_text": "虞允文奉命犒师，临危督战",
   "time": {
    "era_text": "绍兴三十一年",
    "start": "1161-01-01",
    "end": "1161-12-31",
    "gregorian_year": 1161
   },
   "place": "caishiji",
   "source": "synthesis",
   "quote": "文臣虞允文奉命犒师，慷慨誓众，临危督战",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "虞允文以文臣身份督战",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M9",
   "subject": "event:cs_jin",
   "predicate": "整肃溃卒",
   "value_text": "整肃溃卒，列舟师于采石矶",
   "time": {
    "era_text": "绍兴三十一年",
    "start": "1161-01-01",
    "end": "1161-12-31",
    "gregorian_year": 1161
   },
   "place": "caishiji",
   "source": "synthesis",
   "quote": "整肃溃卒，列舟师于采石矶江面",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M9",
   "subject": "event:cs_jin",
   "predicate": "水战获胜",
   "value_text": "战船冲撞金舟，强弩齐射，焚其战舰",
   "time": {
    "era_text": "绍兴三十一年",
    "start": "1161-01-01",
    "end": "1161-12-31",
    "gregorian_year": 1161
   },
   "place": "caishiji",
   "source": "synthesis",
   "quote": "虞允文命战船冲撞金舟，以强弩齐射，焚其战舰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "金军大败",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M8",
   "subject": "event:cs_jin",
   "predicate": "金军败退",
   "value_text": "金军大败",
   "time": {
    "era_text": "绍兴三十一年",
    "start": "1161-01-01",
    "end": "1161-12-31",
    "gregorian_year": 1161
   },
   "place": "caishiji",
   "source": "synthesis",
   "quote": "金军大败",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M9",
   "subject": "person:wanyanliang",
   "predicate": "移师瓜洲",
   "value_text": "完颜亮渡江不成，移师瓜洲",
   "time": {
    "era_text": "绍兴三十一年",
    "start": "1161-01-01",
    "end": "1161-12-31",
    "gregorian_year": 1161
   },
   "place": "guazhou",
   "source": "synthesis",
   "quote": "完颜亮渡江不成，移师瓜洲",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M9",
   "subject": "person:wanyanliang",
   "predicate": "被杀",
   "value_text": "完颜亮为其下所杀",
   "time": {
    "era_text": "绍兴三十一年",
    "start": "1161-01-01",
    "end": "1161-12-31",
    "gregorian_year": 1161
   },
   "place": "guazhou",
   "source": "synthesis",
   "quote": "为其下所杀",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M9",
   "subject": "event:cs_jin",
   "predicate": "影响",
   "value_text": "阻金军渡江，保全江南半壁",
   "time": {
    "era_text": "绍兴三十一年",
    "start": "1161-01-01",
    "end": "1161-12-31",
    "gregorian_year": 1161
   },
   "place": "",
   "source": "synthesis",
   "quote": "采石之捷阻金军渡江，保全江南半壁",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX011_M8",
   "subject": "event:cs_jin",
   "predicate": "评价",
   "value_text": "虞允文以一文臣临危却敌，传为美谈",
   "time": {
    "era_text": "绍兴三十一年",
    "start": "1161-01-01",
    "end": "1161-12-31",
    "gregorian_year": 1161
   },
   "place": "",
   "source": "synthesis",
   "quote": "虞允文以一文臣临危却敌，传为美谈",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文为后世评价，非直接史实",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX012_M8",
   "subject": "event:cs_jin",
   "predicate": "暴露防线脆弱",
   "value_text": "见南宋江淮防线的脆弱与士气之关键",
   "time": {
    "era_text": "绍兴三十一年",
    "start": "1161-01-01",
    "end": "1161-12-31",
    "gregorian_year": 1161
   },
   "place": "",
   "source": "synthesis",
   "quote": "亦见南宋江淮防线的脆弱与士气之关键",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文为总结性评价，非直接史实",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "CAISHIJIG01",
   "subject": "event:cs_jin",
   "predicate": "叙事缺环",
   "value_text": "此役细节诸书记载互有出入，胜者所修史书常省略败方视角、兵力与伤亡之确切数字，相关叙述存在缺口。",
   "time": {
    "era_text": "绍兴三十一年",
    "start": "1161-01-01",
    "end": "1161-12-31",
    "gregorian_year": 1161
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
  "CAISHIJIG01"
 ],
 "events": [
  {
   "id": "ev_cs_jin",
   "subject": "event:cs_jin",
   "year": 1161,
   "era": "绍兴三十一年",
   "title": "金南侵",
   "kind": "战事",
   "text": "完颜亮率金军至采石欲渡江。"
  },
  {
   "id": "ev_cs_yu",
   "subject": "event:cs_yu",
   "year": 1161,
   "era": "绍兴三十一年",
   "title": "虞允文督师",
   "kind": "战事",
   "text": "虞允文犒师采石，整舟师。",
   "place": "caishiji"
  },
  {
   "id": "ev_cs_jz",
   "subject": "event:cs_jz",
   "year": 1161,
   "era": "绍兴三十一年",
   "title": "采石破金",
   "kind": "战事",
   "text": "宋舟师火攻破金渡，亮退瓜洲。",
   "place": "caishiji"
  }
 ],
 "engagements": [
  {
   "id": "eng_cs_main",
   "name": "采石水战",
   "at": "1161-11",
   "era": "绍兴三十一年十一月",
   "place": "caishiji",
   "winner": "a",
   "outcome": "虞允文以海鳅船冲金舟，纵火焚其舰，金军不得渡，亮为部下所杀。",
   "subject": "event:cs_jz",
   "sides": [
    {
     "side": "a",
     "commander": "虞允文",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 60,
     "posture": "水战",
     "commit_basis": "宋舟师乘势纵火，扼江而守。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "完颜亮",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 80,
     "posture": "强渡",
     "commit_basis": "金军舟小兵疲，强渡为火所败。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_cs_song",
   "name": "宋军守江",
   "side": "a",
   "nodes": [
    {
     "place": "jiankang",
     "at": "1161-10",
     "label": "宋戒严"
    },
    {
     "place": "caishiji",
     "at": "1161-11",
     "label": "虞允文督战"
    }
   ],
   "outcome": {
    "at": "1161-11",
    "type": "victory",
    "text": "采石破金舟"
   }
  },
  {
   "id": "rt_cs_jin",
   "name": "金军渡江",
   "side": "b",
   "nodes": [
    {
     "place": "guazhou",
     "at": "1161-10",
     "label": "金南下"
    },
    {
     "place": "caishiji",
     "at": "1161-11",
     "label": "强渡"
    }
   ],
   "outcome": {
    "at": "1161-11",
    "type": "defeat",
    "text": "金渡江败于采石"
   }
  }
 ],
 "timeline": [
  {
   "at": "1161-10",
   "era": "绍兴三十一年",
   "label": "金南侵",
   "key": false
  },
  {
   "at": "1161-11",
   "era": "十一月",
   "label": "虞允文督师",
   "key": false
  },
  {
   "at": "1161-11",
   "era": "十一月",
   "label": "采石破金",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1161-11",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1161-11",
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
   "宋军",
   "金军",
   "综合史料"
  ],
  "party_bucket": {
   "宋军": "宋军",
   "金军": "金军",
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
     "label": "宋军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "金军胜",
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
     "label": "宋军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "金军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
