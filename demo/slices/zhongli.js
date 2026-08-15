// 本文件由 tools/build.py 自动生成（切片 zhongli），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zhongli"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zhongli"] = {
 "meta": {
  "kind": "battle",
  "region": "two_jin",
  "title": "钟离之战",
  "dossier_label": "钟离之战",
  "subtitle": "天监六年（507）· 梁 vs 北魏",
  "primary_place": "zhongli",
  "dossier_event": "event:zl_wei",
  "terrain_grid": "china_coarse",
  "lead": "韦叡筑堰水攻，钟离内外夹击，大破魏军。",
  "parties_note": "梁方叙韦叡方略，魏方讳败。",
  "subject_names": {
   "person:weirui": "韦叡",
   "person:yuanying": "元英"
  },
  "page": "zhongli.html",
  "key": "zhongli",
  "scene_id": "zhongli",
  "vocab_pack": "inline:zhongli"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "钟离之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "梁方叙韦叡方略，魏方讳败。"
  }
 ],
 "places": [
  {
   "id": "zhongli",
   "name": "钟离",
   "lon": 117.43,
   "lat": 32.88,
   "note": "今安徽凤阳东",
   "elev": 25
  },
  {
   "id": "shouyang",
   "name": "寿阳",
   "lon": 116.78,
   "lat": 32.57,
   "note": "魏军据",
   "elev": 20
  },
  {
   "id": "jiankang",
   "name": "建康",
   "lon": 118.8,
   "lat": 32.06,
   "note": "梁都",
   "elev": 17
  },
  {
   "id": "luoyang_wei",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "北魏都",
   "elev": 171
  }
 ],
 "persons": [
  {
   "id": "weirui",
   "name": "韦叡",
   "side": "梁",
   "influence": 2
  },
  {
   "id": "yuanying",
   "name": "元英",
   "side": "北魏",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_zl_wei",
   "subject": "event:zl_wei",
   "predicate": "战事",
   "value_text": "北魏中山王英围钟离。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 507,
    "end": 507,
    "era_text": "天监六年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_zl_wei2",
   "subject": "event:zl_wei2",
   "predicate": "战事",
   "value_text": "韦叡率兵救钟离。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 507,
    "end": 507,
    "era_text": "天监六年"
   },
   "place": "zhongli",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_zl_jz",
   "subject": "event:zl_jz",
   "predicate": "战事",
   "value_text": "梁军水陆夹击，魏军溃。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 507,
    "end": 507,
    "era_text": "天监六年"
   },
   "place": "zhongli",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M23",
   "subject": "event:zl_wei",
   "predicate": "围攻",
   "value_text": "北魏中山王元英等率众数十万围钟离",
   "time": {
    "era_text": "天监六年",
    "start": "507-01-01",
    "end": "507-12-31",
    "gregorian_year": 507
   },
   "place": "zhongli",
   "source": "synthesis",
   "quote": "北魏中山王元英等率众数十万围钟离",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "北魏兵力为原文表述，实数待考。",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M23",
   "subject": "event:zl_wei",
   "predicate": "据城",
   "value_text": "据淮水南北为城",
   "time": {
    "era_text": "天监六年",
    "start": "507-01-01",
    "end": "507-12-31",
    "gregorian_year": 507
   },
   "place": "zhongli",
   "source": "synthesis",
   "quote": "据淮水南北为城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M22",
   "subject": "person:weirui",
   "predicate": "救援",
   "value_text": "梁武帝命曹景宗、韦叡将兵救之",
   "time": {
    "era_text": "天监六年",
    "start": "507-01-01",
    "end": "507-12-31",
    "gregorian_year": 507
   },
   "place": "zhongli",
   "source": "synthesis",
   "quote": "梁武帝命曹景宗、韦叡将兵救之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "曹景宗未在实体白名单，故仅以韦叡为主语。",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M23",
   "subject": "person:weirui",
   "predicate": "行军路线",
   "value_text": "自合肥溯淮，筑垒逼魏城",
   "time": {
    "era_text": "天监六年",
    "start": "507-01-01",
    "end": "507-12-31",
    "gregorian_year": 507
   },
   "place": "shouyang",
   "source": "synthesis",
   "quote": "叡自合肥溯淮，筑垒逼魏城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "合肥未在place白名单，故place填shouyang并在此注明。",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M23",
   "subject": "event:zl_wei",
   "predicate": "战术",
   "value_text": "堰水灌之，乘风纵火",
   "time": {
    "era_text": "天监六年",
    "start": "507-01-01",
    "end": "507-12-31",
    "gregorian_year": 507
   },
   "place": "zhongli",
   "source": "synthesis",
   "quote": "堰水灌之，会风怒，叡以小车蒙楯，乘风纵火",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M23",
   "subject": "event:zl_wei",
   "predicate": "结果",
   "value_text": "魏军惊乱，弃营走，赴水死者十七八",
   "time": {
    "era_text": "天监六年",
    "start": "507-01-01",
    "end": "507-12-31",
    "gregorian_year": 507
   },
   "place": "zhongli",
   "source": "synthesis",
   "quote": "魏军惊乱，弃营走，赴水死者十七八",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M22",
   "subject": "event:zl_wei",
   "predicate": "战果",
   "value_text": "俘斩甚众，获资粮器械山积",
   "time": {
    "era_text": "天监六年",
    "start": "507-01-01",
    "end": "507-12-31",
    "gregorian_year": 507
   },
   "place": "zhongli",
   "source": "synthesis",
   "quote": "梁军俘斩甚众，获资粮器械山积",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M23",
   "subject": "event:zl_wei",
   "predicate": "影响",
   "value_text": "南北攻守之势一变",
   "time": {
    "era_text": "天监六年",
    "start": "507-01-01",
    "end": "507-12-31",
    "gregorian_year": 507
   },
   "place": "zhongli",
   "source": "synthesis",
   "quote": "此役为梁拒魏关键之胜，南北攻守之势一变",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文为史家评述，非直接战况，故标inference。",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M23",
   "subject": "event:zl_wei",
   "predicate": "兵力对比",
   "value_text": "魏军数十万，梁军实数未载",
   "time": {
    "era_text": "天监六年",
    "start": "507-01-01",
    "end": "507-12-31",
    "gregorian_year": 507
   },
   "place": "zhongli",
   "source": "synthesis",
   "quote": "率众数十万围钟离",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "province",
   "note": "魏军兵力为约数，梁军兵力原文未载，形成缺口。",
   "lead": {
    "where": "zhongli",
    "skills": [
     "quantitative_history",
     "military_history"
    ],
    "accept": "考证钟离之战双方实际兵力对比"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZHONGLIG01",
   "subject": "event:zl_wei",
   "predicate": "叙事缺环",
   "value_text": "此役细节诸书记载互有出入，胜者所修史书常省略败方视角、兵力与伤亡之确切数字，相关叙述存在缺口。",
   "time": {
    "era_text": "天监六年",
    "start": "507-01-01",
    "end": "507-12-31",
    "gregorian_year": 507
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
  "SX009_M23",
  "ZHONGLIG01"
 ],
 "events": [
  {
   "id": "ev_zl_wei",
   "subject": "event:zl_wei",
   "year": 507,
   "era": "天监六年",
   "title": "魏围钟离",
   "kind": "战事",
   "text": "北魏中山王英围钟离。"
  },
  {
   "id": "ev_zl_wei2",
   "subject": "event:zl_wei2",
   "year": 507,
   "era": "天监六年",
   "title": "韦叡赴援",
   "kind": "战事",
   "text": "韦叡率兵救钟离。",
   "place": "zhongli"
  },
  {
   "id": "ev_zl_jz",
   "subject": "event:zl_jz",
   "year": 507,
   "era": "天监六年",
   "title": "钟离破魏",
   "kind": "战事",
   "text": "梁军水陆夹击，魏军溃。",
   "place": "zhongli"
  }
 ],
 "engagements": [
  {
   "id": "eng_zl_main",
   "name": "钟离夹击",
   "at": "507-04",
   "era": "天监六年四月",
   "place": "zhongli",
   "winner": "a",
   "outcome": "韦叡筑堰蓄水，战舰攻魏桥，城中守军出，内外夹击魏军大溃。",
   "subject": "event:zl_jz",
   "sides": [
    {
     "side": "a",
     "commander": "韦叡",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 130,
     "posture": "水陆夹击",
     "commit_basis": "梁军据城以逸待劳，水攻破其浮桥。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "元英",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 150,
     "posture": "顿兵",
     "commit_basis": "魏军久围疲敝，浮桥为水所破。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_zl_liang",
   "name": "梁军救钟离",
   "side": "a",
   "nodes": [
    {
     "place": "jiankang",
     "at": "507-02",
     "label": "韦叡起"
    },
    {
     "place": "zhongli",
     "at": "507-04",
     "label": "夹击"
    }
   ],
   "outcome": {
    "at": "507-04",
    "type": "victory",
    "text": "钟离破魏"
   }
  },
  {
   "id": "rt_zl_wei",
   "name": "魏军南下",
   "side": "b",
   "nodes": [
    {
     "place": "luoyang_wei",
     "at": "507-01",
     "label": "魏起兵"
    },
    {
     "place": "shouyang",
     "at": "507-02",
     "label": "据寿阳"
    },
    {
     "place": "zhongli",
     "at": "507-03",
     "label": "围城"
    }
   ],
   "outcome": {
    "at": "507-03",
    "type": "defeat",
    "text": "魏围钟离反溃"
   }
  }
 ],
 "timeline": [
  {
   "at": "507-01",
   "era": "天监六年",
   "label": "魏围钟离",
   "key": false
  },
  {
   "at": "507-03",
   "era": "三月",
   "label": "韦叡赴援",
   "key": false
  },
  {
   "at": "507-04",
   "era": "四月",
   "label": "钟离破魏",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "507-04",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "507-04",
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
   "梁军",
   "北魏军",
   "综合史料"
  ],
  "party_bucket": {
   "梁军": "梁军",
   "北魏军": "北魏军",
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
     "label": "梁军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "北魏军胜",
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
     "label": "梁军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "北魏军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
