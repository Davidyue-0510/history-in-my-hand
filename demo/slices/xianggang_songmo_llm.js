// 本文件由 tools/build.py 自动生成（切片 xianggang_songmo_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["xianggang_songmo_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["xianggang_songmo_llm"] = {
 "meta": {
  "kind": "battle",
  "region": "exchange",
  "province": "xianggang",
  "title": "宋末二王南迁·香港官富场（1276–1279）",
  "dossier_label": "xianggang_songmo_llm",
  "subtitle": "",
  "primary_place": "fuzhou",
  "dossier_event": "event:ev_xianggang_songmo_llm_01",
  "vocab_pack": "inline:xianggang_songmo_llm",
  "terrain_grid": "china_coarse",
  "lead": "",
  "parties_note": "",
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "epoch": "song",
  "scale_tier": "strategic",
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
    "note": "制度+思想→宋末行朝流亡海上，二王号令不出舟师，忠宋势力离散"
   },
   "material_logistics": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "技術+制度→海上行朝倚舟师机动，粮械仰给广东、福建沿海"
   },
   "population_mobilization": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "社會+制度→勤王义军与沿海渔户随行朝转战，人口随政局流散"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     1,
     3
    ],
    "layer": "inference",
    "note": "地理+制度→自福州航海至九龙官富场、碙洲，依岭南海岛避元军，终崖山溃"
   }
  },
  "subject_names": [
   "person:XIA__p01",
   "person:XIA__p02",
   "person:XIA__p03",
   "place:fuzhou",
   "place:guangfuchang",
   "place:gangzhou",
   "place:yashan",
   "event:ev_xianggang_songmo_llm_01",
   "event:ev_xianggang_songmo_llm_02",
   "event:ev_xianggang_songmo_llm_03",
   "event:ev_xianggang_songmo_llm_04"
  ],
  "page": "xianggang_songmo_llm.html",
  "key": "xianggang_songmo_llm",
  "scene_id": "xianggang_songmo_llm"
 },
 "sources": [
  {
   "id": "song_shi_erwang_llm",
   "title": "宋史·二王本纪（端宗·帝昺）",
   "party": "宋官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "脱脱等",
   "period": "元",
   "note": ""
  },
  {
   "id": "synthesis",
   "title": "綜合研判·缺口標註",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "諸場景據原始文獻綜合研判，缺環以 gap 層誠實標註。",
   "distance_label": "综合诸家记述（非单一典籍；各场景具体来源见 stance_label）"
  }
 ],
 "places": [
  {
   "id": "fuzhou",
   "name": "福州",
   "type": "city",
   "modern": "今中国福建省福州市",
   "note": "端宗航海出发地",
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": 119.3,
   "lat": 26.08,
   "geo_unresolved": false,
   "elev": 179
  },
  {
   "id": "guangfuchang",
   "name": "官富场",
   "type": "yi",
   "modern": "今中国香港九龙",
   "note": "端宗驻跸并筑行宫",
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": 114.2,
   "lat": 22.32,
   "geo_unresolved": false,
   "elev": 120
  },
  {
   "id": "gangzhou",
   "name": "碙洲",
   "type": "island",
   "modern": "今中国广东省湛江市硇洲岛",
   "note": "端宗驾崩之地",
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": 110.6,
   "lat": 20.9,
   "geo_unresolved": false,
   "elev": 10
  },
  {
   "id": "yashan",
   "name": "崖山",
   "type": "fortress",
   "modern": "今中国广东省江门市新会区",
   "note": "宋元决战及宋亡之地",
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": 113.05,
   "lat": 22.35,
   "geo_unresolved": false,
   "elev": 22
  }
 ],
 "persons": [
  {
   "id": "XIA__p01",
   "name": "宋端宗",
   "role": "南宋皇帝",
   "note": "景炎元年航海至官富场驻跸",
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "XIA__p02",
   "name": "卫王昺",
   "role": "南宋末帝",
   "note": "端宗崩后即位，崖山投海",
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "XIA__p03",
   "name": "陆秀夫",
   "role": "南宋左丞相",
   "note": "崖山负帝昺投海殉国",
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "XIA_001",
   "subject": "event:ev_xianggang_songmo_llm_01",
   "predicate": "驻跸地点",
   "value_text": "端宗驻跸官富场",
   "time": {
    "era_text": "景炎元年",
    "start": "1276"
   },
   "place": "guangfuchang",
   "source": "song_shi_erwang_llm",
   "quote": "至九龙官富场驻跸",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 scholarship",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "至九龙官富场驻跸",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "XIA_002",
   "subject": "event:ev_xianggang_songmo_llm_01",
   "predicate": "筑行宫",
   "value_text": "在官富场筑行宫",
   "time": {
    "era_text": "景炎元年",
    "start": "1276"
   },
   "place": "guangfuchang",
   "source": "song_shi_erwang_llm",
   "quote": "筑行宫",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "筑行宫",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "XIA_003",
   "subject": "event:ev_xianggang_songmo_llm_02",
   "predicate": "驾崩地点",
   "value_text": "端宗崩于碙洲",
   "time": {
    "era_text": "景炎三年",
    "start": "1278"
   },
   "place": "gangzhou",
   "source": "song_shi_erwang_llm",
   "quote": "次年崩于碙洲",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "次年崩于碙洲",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "XIA_004",
   "subject": "event:ev_xianggang_songmo_llm_03",
   "predicate": "战役结果",
   "value_text": "崖山宋军溃败",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "yashan",
   "source": "song_shi_erwang_llm",
   "quote": "崖山溃",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "崖山溃",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "XIA_005",
   "subject": "event:ev_xianggang_songmo_llm_04",
   "predicate": "宋亡标志",
   "value_text": "陆秀夫负帝昺投海",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "yashan",
   "source": "song_shi_erwang_llm",
   "quote": "陆秀夫负帝昺投海",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "陆秀夫负帝昺投海",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "XIA_006",
   "subject": "event:ev_xianggang_songmo_llm_04",
   "predicate": "宋亡时间",
   "value_text": "祥兴二年宋亡",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "yashan",
   "source": "song_shi_erwang_llm",
   "quote": "宋亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "宋亡",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "XIA_007",
   "subject": "place:guangfuchang",
   "predicate": "历史地位",
   "value_text": "二王南迁之据点",
   "time": {
    "era_text": "景炎元年",
    "start": "1276"
   },
   "place": "guangfuchang",
   "source": "song_shi_erwang_llm",
   "quote": "香港一带遂为二王南迁之据",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "香港一带遂为二王南迁之据",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "XIA_008",
   "subject": "event:ev_xianggang_songmo_llm_03",
   "predicate": "战役性质",
   "value_text": "宋元最终决战",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "yashan",
   "source": "song_shi_erwang_llm",
   "quote": "崖山溃",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "崖山溃",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "XIA_009",
   "subject": "event:ev_xianggang_songmo_llm_01",
   "predicate": "行朝性质",
   "value_text": "海上行朝抗元",
   "time": {
    "era_text": "景炎元年",
    "start": "1276"
   },
   "place": "guangfuchang",
   "source": "song_shi_erwang_llm",
   "quote": "海上行朝抗元",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "海上行朝抗元",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "XIA_010",
   "subject": "event:ev_xianggang_songmo_llm_02",
   "predicate": "帝位传承",
   "value_text": "卫王昺继位",
   "time": {
    "era_text": "景炎三年",
    "start": "1278"
   },
   "place": "gangzhou",
   "source": "song_shi_erwang_llm",
   "quote": "卫王昺立",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "卫王昺立",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "XIA_011",
   "subject": "event:ev_xianggang_songmo_llm_03",
   "predicate": "宋军兵力",
   "value_text": "原文未载具体兵力",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "yashan",
   "source": "song_shi_erwang_llm",
   "quote": "崖山溃",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "",
   "dims": [
    2,
    6
   ],
   "lead": {
    "where": "崖山",
    "skills": [
     "宋元兵力对比",
     "崖山之战"
    ],
    "accept": "补充崖山海战双方兵力数据"
   },
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "崖山溃",
   "dim_source": "declared",
   "dist": {
    "type": "degenerate"
   },
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "XIA_012",
   "subject": "event:ev_xianggang_songmo_llm_03",
   "predicate": "战役过程",
   "value_text": "原文未载具体过程",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "yashan",
   "source": "song_shi_erwang_llm",
   "quote": "崖山溃",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "崖山",
    "skills": [
     "崖山海战过程",
     "宋元战争"
    ],
    "accept": "补充崖山海战详细过程"
   },
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "崖山溃",
   "dim_source": "fallback",
   "dist": {
    "type": "degenerate"
   },
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "XIA_013",
   "subject": "event:ev_xianggang_songmo_llm_01",
   "predicate": "行宫规模",
   "value_text": "原文未载行宫规模",
   "time": {
    "era_text": "景炎元年",
    "start": "1276"
   },
   "place": "guangfuchang",
   "source": "song_shi_erwang_llm",
   "quote": "筑行宫",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "lead": {
    "where": "官富场",
    "skills": [
     "宋末行宫",
     "香港考古"
    ],
    "accept": "补充官富场行宫考古资料"
   },
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "筑行宫",
   "dim_source": "declared",
   "dist": {
    "type": "degenerate"
   },
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "XIA_014",
   "subject": "event:ev_xianggang_songmo_llm_03",
   "predicate": "战役伤亡",
   "value_text": "原文未载伤亡数字",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "yashan",
   "source": "song_shi_erwang_llm",
   "quote": "崖山溃",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "崖山",
    "skills": [
     "崖山海战伤亡",
     "宋元战争"
    ],
    "accept": "补充崖山海战双方伤亡数据"
   },
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "崖山溃",
   "dim_source": "fallback",
   "dist": {
    "type": "degenerate"
   },
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "XIANG4",
   "subject": "event:ev_xianggang_songmo_llm_01",
   "predicate": "研究缺口",
   "value_text": "此場景關於「社會」維度的直接史料與考訂尚有缺環，待按原始文獻擴充。",
   "time": {
    "era_text": "xianggang_songmo_llm",
    "start": "1277",
    "end": "1277",
    "gregorian_year": 1277
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "battle",
   "note": "補維度覆蓋（誠實缺口）",
   "lead": {
    "where": "原始史料對讀",
    "skills": [
     "紀年校勘",
     "多源比對"
    ],
    "accept": "補社會維直接史料與學界考訂"
   },
   "dims": [
    4
   ],
   "dim_source": "declared",
   "dist": {
    "type": "degenerate"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "XIANG5",
   "subject": "event:ev_xianggang_songmo_llm_01",
   "predicate": "研究缺口",
   "value_text": "此場景關於「思想」維度的直接史料與考訂尚有缺環，待按原始文獻擴充。",
   "time": {
    "era_text": "xianggang_songmo_llm",
    "start": "1277",
    "end": "1277",
    "gregorian_year": 1277
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "battle",
   "note": "補維度覆蓋（誠實缺口）",
   "lead": {
    "where": "原始史料對讀",
    "skills": [
     "紀年校勘",
     "多源比對"
    ],
    "accept": "補思想維直接史料與學界考訂"
   },
   "dims": [
    5
   ],
   "dim_source": "declared",
   "dist": {
    "type": "degenerate"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "XIANGGANG_SONGMO_LLM_THK1",
   "subject": "event:ev_xianggang_songmo_llm_01",
   "predicate": "水军行朝",
   "value_text": "宋室“浮海”依托水军，崖山“千帆”决战；“祥兴”年号",
   "time": {
    "era_text": "景炎元年",
    "start": "1276"
   },
   "place": "",
   "source": "synthesis",
   "quote": "浮海",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "水军行朝",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "XIANGGANG_SONGMO_LLM_THK2",
   "subject": "event:ev_xianggang_songmo_llm_01",
   "predicate": "地方供输",
   "value_text": "香港（官富场、浅湾）盐场、洞澳为宋室供粮；“遗民”拥宋",
   "time": {
    "era_text": "景炎元年",
    "start": "1276"
   },
   "place": "",
   "source": "synthesis",
   "quote": "官富盐场",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "地方供输",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "XIANGGANG_SONGMO_LLM_THK3",
   "subject": "event:ev_xianggang_songmo_llm_01",
   "predicate": "亡国记忆",
   "value_text": "崖山之后“厓山之后无中国”的亡国叙事；香港半岛首入汉政权行迹",
   "time": {
    "era_text": "景炎元年",
    "start": "1276"
   },
   "place": "",
   "source": "synthesis",
   "quote": "厓山",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "亡国记忆",
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
  "XIA_011",
  "XIA_012",
  "XIA_013",
  "XIA_014",
  "XIANG4",
  "XIANG5"
 ],
 "events": [
  {
   "id": "ev_xianggang_songmo_llm_01",
   "subject": "event:ev_xianggang_songmo_llm_01",
   "year": 1276,
   "era": "景炎元年",
   "title": "端宗航海至官富场",
   "kind": "其他",
   "text": "宋端宗自福州航海至九龙官富场驻跸",
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null
  },
  {
   "id": "ev_xianggang_songmo_llm_02",
   "subject": "event:ev_xianggang_songmo_llm_02",
   "year": 1278,
   "era": "景炎三年",
   "title": "端宗崩于碙洲",
   "kind": "其他",
   "text": "宋端宗在碙洲去世",
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null
  },
  {
   "id": "ev_xianggang_songmo_llm_03",
   "subject": "event:ev_xianggang_songmo_llm_03",
   "year": 1279,
   "era": "祥兴二年",
   "title": "崖山海战",
   "kind": "战事",
   "text": "宋元崖山海战，宋军溃败",
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null
  },
  {
   "id": "ev_xianggang_songmo_llm_04",
   "subject": "event:ev_xianggang_songmo_llm_04",
   "year": 1279,
   "era": "祥兴二年",
   "title": "陆秀夫负帝投海",
   "kind": "其他",
   "text": "陆秀夫背负帝昺投海，南宋灭亡",
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "fuzhou",
   "to": "guangfuchang",
   "type": "military",
   "label": "端宗航海南奔路线",
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null
  },
  {
   "from": "guangfuchang",
   "to": "gangzhou",
   "type": "military",
   "label": "行朝移驻碙洲",
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null
  },
  {
   "from": "gangzhou",
   "to": "yashan",
   "type": "military",
   "label": "行朝移驻崖山",
   "_source_idx": 0,
   "_source_name": "宋史·二王本纪（端宗·帝昺）",
   "_source_party": "宋官修",
   "_source_credibility": null
  }
 ],
 "control": [],
 "control_seats": [],
 "control_years": null,
 "vocab": {
  "layers": [
   "record",
   "scholarship",
   "inference",
   "gap",
   "conflict"
  ],
  "quote_status": [
   "verbatim",
   "paraphrase_unverified",
   "generated"
  ],
  "parties": [
   "宋官修",
   "综合史料"
  ],
  "party_bucket": {
   "宋官修": "宋官修",
   "综合史料": "综合史料"
  },
  "party_colors": {
   "宋官修": "#8C6239",
   "综合史料": "#9B7B5A"
  },
  "factions": {},
  "faction_colors": {}
 },
 "basemap": {
  "coastline": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       120.605,
       24.438
      ],
      [
       120.132,
       23.653
      ],
      [
       120.143,
       23.399
      ],
      [
       120.086,
       23.212
      ],
      [
       120.083,
       23.094
      ],
      [
       120.15,
       22.975
      ],
      [
       120.273,
       22.627
      ],
      [
       120.316,
       22.548
      ],
      [
       120.48,
       22.442
      ],
      [
       120.605,
       22.317
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       110.971,
       19.883
      ],
      [
       110.889,
       19.992
      ],
      [
       110.745,
       20.059
      ],
      [
       110.652,
       20.138
      ],
      [
       110.589,
       20.072
      ],
      [
       110.418,
       20.055
      ],
      [
       110.388,
       20.018
      ],
      [
       110.344,
       20.039
      ],
      [
       110.172,
       20.054
      ],
      [
       109.906,
       19.963
      ],
      [
       109.584,
       19.97
      ],
      [
       109.418,
       19.889
      ],
      [
       109.295,
       19.896
      ],
      [
       111.014,
       19.655
      ],
      [
       110.971,
       19.883
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       114.134,
       22.292
      ],
      [
       114.207,
       22.195
      ],
      [
       114.244,
       22.234
      ],
      [
       114.187,
       22.297
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       118.339,
       24.469
      ],
      [
       118.295,
       24.436
      ],
      [
       118.451,
       24.456
      ],
      [
       118.339,
       24.469
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       118.077,
       24.501
      ],
      [
       118.091,
       24.446
      ],
      [
       118.183,
       24.496
      ],
      [
       118.104,
       24.552
      ],
      [
       118.077,
       24.501
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       119.797,
       25.623
      ],
      [
       119.723,
       25.639
      ],
      [
       119.723,
       25.551
      ],
      [
       119.7,
       25.433
      ],
      [
       119.821,
       25.457
      ],
      [
       119.809,
       25.508
      ],
      [
       119.838,
       25.591
      ],
      [
       119.797,
       25.623
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       110.522,
       21.083
      ],
      [
       110.385,
       21.093
      ],
      [
       110.265,
       21.025
      ],
      [
       110.34,
       20.998
      ],
      [
       110.504,
       20.968
      ],
      [
       110.54,
       21.039
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       113.465,
       22.905
      ],
      [
       113.426,
       22.859
      ],
      [
       113.486,
       22.828
      ],
      [
       113.555,
       22.804
      ],
      [
       113.465,
       22.905
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       112.782,
       21.772
      ],
      [
       112.713,
       21.698
      ],
      [
       112.742,
       21.618
      ],
      [
       112.79,
       21.602
      ],
      [
       112.813,
       21.712
      ],
      [
       112.839,
       21.765
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       112.559,
       21.675
      ],
      [
       112.546,
       21.619
      ],
      [
       112.648,
       21.71
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       113.998,
       22.21
      ],
      [
       114.044,
       22.333
      ],
      [
       113.839,
       22.242
      ],
      [
       113.877,
       22.21
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        109.295,
        21.45
       ],
       [
        109.436,
        21.479
       ],
       [
        109.521,
        21.693
       ],
       [
        109.594,
        21.672
       ],
       [
        109.743,
        21.528
       ],
       [
        109.83,
        21.484
       ],
       [
        109.921,
        21.376
       ],
       [
        109.76,
        21.228
       ],
       [
        109.704,
        21.053
       ],
       [
        109.685,
        20.874
       ],
       [
        109.767,
        20.781
       ],
       [
        109.792,
        20.622
       ],
       [
        109.946,
        20.474
       ],
       [
        109.984,
        20.403
       ],
       [
        109.886,
        20.413
       ],
       [
        109.938,
        20.295
       ],
       [
        110.345,
        20.295
       ],
       [
        110.487,
        20.427
       ],
       [
        110.512,
        20.518
       ],
       [
        110.326,
        20.72
       ],
       [
        110.388,
        20.791
       ],
       [
        110.18,
        20.859
       ],
       [
        110.194,
        21.038
       ],
       [
        110.375,
        21.172
       ],
       [
        110.411,
        21.338
       ],
       [
        110.458,
        21.231
       ],
       [
        110.567,
        21.214
       ],
       [
        110.771,
        21.387
       ],
       [
        110.997,
        21.43
       ],
       [
        111.061,
        21.511
       ],
       [
        111.144,
        21.482
       ],
       [
        111.319,
        21.486
       ],
       [
        111.603,
        21.559
       ],
       [
        111.712,
        21.655
       ],
       [
        111.825,
        21.71
       ],
       [
        111.926,
        21.776
       ],
       [
        112.025,
        21.843
       ],
       [
        112.193,
        21.763
       ],
       [
        112.356,
        21.768
       ],
       [
        112.377,
        21.917
       ],
       [
        112.396,
        21.981
       ],
       [
        112.439,
        21.927
       ],
       [
        112.495,
        21.818
       ],
       [
        112.634,
        21.82
       ],
       [
        112.725,
        21.902
       ],
       [
        112.904,
        21.881
       ],
       [
        112.984,
        21.938
       ],
       [
        113.089,
        22.208
       ],
       [
        113.266,
        22.089
       ],
       [
        113.367,
        22.165
       ],
       [
        113.499,
        22.202
       ],
       [
        113.576,
        22.297
       ],
       [
        113.551,
        22.404
       ],
       [
        113.485,
        22.692
       ],
       [
        113.432,
        22.789
       ],
       [
        113.338,
        22.889
       ],
       [
        113.442,
        22.941
       ],
       [
        113.445,
        23.055
       ],
       [
        113.621,
        23.127
       ],
       [
        113.586,
        23.02
       ],
       [
        113.62,
        22.861
       ],
       [
        113.754,
        22.734
       ],
       [
        113.931,
        22.531
       ],
       [
        114.007,
        22.484
       ],
       [
        113.903,
        22.396
       ],
       [
        114.033,
        22.376
       ],
       [
        114.268,
        22.296
       ],
       [
        114.291,
        22.374
       ],
       [
        114.325,
        22.437
       ],
       [
        114.291,
        22.499
       ],
       [
        114.341,
        22.593
       ],
       [
        114.496,
        22.527
       ],
       [
        114.544,
        22.621
       ],
       [
        114.593,
        22.698
       ],
       [
        114.711,
        22.739
       ],
       [
        114.854,
        22.617
       ],
       [
        114.914,
        22.685
       ],
       [
        115.092,
        22.782
       ],
       [
        115.29,
        22.776
       ],
       [
        115.498,
        22.719
       ],
       [
        115.561,
        22.825
       ],
       [
        115.756,
        22.824
       ],
       [
        116.063,
        22.879
       ],
       [
        116.206,
        22.919
       ],
       [
        116.252,
        22.981
       ],
       [
        116.471,
        22.946
       ],
       [
        116.538,
        23.18
       ],
       [
        116.669,
        23.228
       ],
       [
        116.682,
        23.327
       ],
       [
        116.712,
        23.36
       ],
       [
        116.861,
        23.453
       ],
       [
        117.033,
        23.623
       ],
       [
        117.148,
        23.599
       ],
       [
        117.291,
        23.714
       ],
       [
        117.347,
        23.636
       ],
       [
        117.417,
        23.621
       ],
       [
        117.46,
        23.771
       ],
       [
        117.466,
        23.841
       ],
       [
        117.628,
        23.837
       ],
       [
        117.742,
        24.015
       ],
       [
        117.904,
        24.106
       ],
       [
        118.051,
        24.327
       ],
       [
        117.879,
        24.396
       ],
       [
        117.843,
        24.474
       ],
       [
        117.935,
        24.474
       ],
       [
        118.014,
        24.56
       ],
       [
        118.195,
        24.626
       ],
       [
        118.412,
        24.601
       ],
       [
        118.657,
        24.621
       ],
       [
        118.692,
        24.782
       ],
       [
        118.637,
        24.836
       ],
       [
        118.822,
        24.911
       ],
       [
        118.956,
        25.005
       ],
       [
        118.978,
        25.209
       ],
       [
        119.236,
        25.206
       ],
       [
        119.244,
        25.307
       ],
       [
        119.146,
        25.414
       ],
       [
        119.263,
        25.468
       ],
       [
        119.422,
        25.46
       ],
       [
        119.593,
        25.368
       ],
       [
        119.619,
        25.437
       ],
       [
        119.553,
        25.699
       ],
       [
        119.648,
        25.919
       ],
       [
        119.501,
        26.009
       ],
       [
        119.332,
        25.949
       ],
       [
        119.139,
        26.122
       ],
       [
        119.313,
        26.063
       ],
       [
        119.463,
        26.055
       ],
       [
        119.693,
        26.236
       ],
       [
        119.881,
        26.334
       ],
       [
        119.84,
        26.414
       ],
       [
        119.785,
        26.547
       ],
       [
        119.638,
        26.621
       ],
       [
        119.59,
        26.73
       ],
       [
        119.652,
        26.747
       ],
       [
        119.767,
        26.775
       ],
       [
        119.824,
        26.846
       ],
       [
        119.821,
        26.737
       ],
       [
        119.879,
        26.683
       ],
       [
        119.968,
        26.586
       ],
       [
        120.087,
        26.672
       ],
       [
        120.139,
        26.886
       ],
       [
        120.385,
        27.156
       ],
       [
        120.54,
        27.318
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        120.605,
        22.317
       ],
       [
        120.48,
        22.442
       ],
       [
        120.316,
        22.548
       ],
       [
        120.273,
        22.627
       ],
       [
        120.15,
        22.975
       ],
       [
        120.083,
        23.094
       ],
       [
        120.086,
        23.212
       ],
       [
        120.143,
        23.399
       ],
       [
        120.132,
        23.653
       ],
       [
        120.605,
        24.438
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        110.889,
        19.992
       ],
       [
        110.971,
        19.883
       ],
       [
        111.014,
        19.655
       ],
       [
        109.295,
        19.595
       ],
       [
        109.315,
        19.904
       ],
       [
        109.514,
        19.904
       ],
       [
        109.651,
        19.984
       ],
       [
        110.083,
        19.993
       ],
       [
        110.213,
        20.056
       ],
       [
        110.392,
        19.976
       ],
       [
        110.394,
        20.059
       ],
       [
        110.588,
        19.976
       ],
       [
        110.598,
        20.098
       ],
       [
        110.679,
        20.137
       ],
       [
        110.809,
        20.014
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        114.232,
        22.211
       ],
       [
        114.139,
        22.268
       ],
       [
        114.187,
        22.297
       ],
       [
        114.244,
        22.234
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.407,
        24.522
       ],
       [
        118.433,
        24.414
       ],
       [
        118.287,
        24.477
       ],
       [
        118.407,
        24.522
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.183,
        24.496
       ],
       [
        118.091,
        24.446
       ],
       [
        118.077,
        24.501
       ],
       [
        118.104,
        24.552
       ],
       [
        118.183,
        24.496
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        119.821,
        25.457
       ],
       [
        119.7,
        25.433
       ],
       [
        119.723,
        25.551
       ],
       [
        119.723,
        25.639
       ],
       [
        119.797,
        25.623
       ],
       [
        119.838,
        25.591
       ],
       [
        119.809,
        25.508
       ],
       [
        119.821,
        25.457
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        110.385,
        21.093
       ],
       [
        110.522,
        21.083
       ],
       [
        110.539,
        21.018
       ],
       [
        110.422,
        21.007
       ],
       [
        110.281,
        21.001
       ],
       [
        110.31,
        21.075
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        113.555,
        22.804
       ],
       [
        113.486,
        22.828
       ],
       [
        113.426,
        22.859
       ],
       [
        113.465,
        22.905
       ],
       [
        113.555,
        22.804
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        112.79,
        21.602
       ],
       [
        112.742,
        21.618
       ],
       [
        112.713,
        21.698
       ],
       [
        112.782,
        21.772
       ],
       [
        112.863,
        21.753
       ],
       [
        112.801,
        21.695
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        112.644,
        21.64
       ],
       [
        112.525,
        21.623
       ],
       [
        112.648,
        21.71
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        113.998,
        22.21
       ],
       [
        113.852,
        22.22
       ],
       [
        113.882,
        22.28
       ],
       [
        114.003,
        22.278
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        109.295,
        19.595
       ],
       [
        120.588,
        27.385
       ],
       [
        120.469,
        27.256
       ],
       [
        120.279,
        27.097
       ],
       [
        120.097,
        26.781
       ],
       [
        120.043,
        26.634
       ],
       [
        119.882,
        26.61
       ],
       [
        119.842,
        26.689
       ],
       [
        119.815,
        26.798
       ],
       [
        119.789,
        26.831
       ],
       [
        119.71,
        26.729
       ],
       [
        119.588,
        26.785
       ],
       [
        119.624,
        26.676
       ],
       [
        119.726,
        26.609
       ],
       [
        119.831,
        26.45
       ],
       [
        119.876,
        26.371
       ],
       [
        119.797,
        26.3
       ],
       [
        119.567,
        26.127
       ],
       [
        119.37,
        26.054
       ],
       [
        119.232,
        26.104
       ],
       [
        119.264,
        25.975
       ],
       [
        119.418,
        25.954
       ],
       [
        119.619,
        26.004
       ],
       [
        119.617,
        25.823
       ],
       [
        119.539,
        25.591
       ],
       [
        119.622,
        25.391
       ],
       [
        119.499,
        25.409
       ],
       [
        119.344,
        25.446
       ],
       [
        119.18,
        25.45
       ],
       [
        119.169,
        25.356
       ],
       [
        119.286,
        25.232
       ],
       [
        119.025,
        25.223
       ],
       [
        118.914,
        25.127
       ],
       [
        118.909,
        24.929
       ],
       [
        118.708,
        24.85
       ],
       [
        118.64,
        24.809
       ],
       [
        118.719,
        24.746
       ],
       [
        118.56,
        24.58
       ],
       [
        118.295,
        24.573
       ],
       [
        118.087,
        24.627
       ],
       [
        118.006,
        24.482
       ],
       [
        117.897,
        24.48
       ],
       [
        117.848,
        24.432
       ],
       [
        118.024,
        24.38
       ],
       [
        118.056,
        24.246
       ],
       [
        117.839,
        24.012
       ],
       [
        117.668,
        23.939
       ],
       [
        117.579,
        23.857
       ],
       [
        117.433,
        23.792
       ],
       [
        117.462,
        23.736
       ],
       [
        117.368,
        23.589
       ],
       [
        117.331,
        23.709
       ],
       [
        117.225,
        23.647
       ],
       [
        117.083,
        23.579
       ],
       [
        116.911,
        23.647
       ],
       [
        116.76,
        23.383
       ],
       [
        116.629,
        23.354
       ],
       [
        116.699,
        23.278
       ],
       [
        116.586,
        23.218
       ],
       [
        116.52,
        23.007
       ],
       [
        116.346,
        22.941
       ],
       [
        116.222,
        22.95
       ],
       [
        116.157,
        22.887
       ],
       [
        115.852,
        22.802
       ],
       [
        115.64,
        22.853
       ],
       [
        115.535,
        22.765
       ],
       [
        115.383,
        22.719
       ],
       [
        115.196,
        22.817
       ],
       [
        115.012,
        22.709
       ],
       [
        114.896,
        22.64
       ],
       [
        114.75,
        22.626
       ],
       [
        114.652,
        22.755
       ],
       [
        114.572,
        22.654
       ],
       [
        114.554,
        22.529
       ],
       [
        114.42,
        22.583
       ],
       [
        114.266,
        22.541
       ],
       [
        114.285,
        22.458
       ],
       [
        114.335,
        22.396
       ],
       [
        114.288,
        22.325
       ],
       [
        114.139,
        22.348
       ],
       [
        113.937,
        22.365
       ],
       [
        113.896,
        22.428
       ],
       [
        114.015,
        22.512
       ],
       [
        113.828,
        22.607
       ],
       [
        113.661,
        22.802
       ],
       [
        113.603,
        22.969
       ],
       [
        113.592,
        23.077
       ],
       [
        113.52,
        23.102
       ],
       [
        113.46,
        22.996
       ],
       [
        113.331,
        22.912
       ],
       [
        113.345,
        22.865
       ],
       [
        113.45,
        22.726
       ],
       [
        113.553,
        22.594
       ],
       [
        113.589,
        22.35
       ],
       [
        113.548,
        22.223
       ],
       [
        113.416,
        22.178
       ],
       [
        113.328,
        22.145
       ],
       [
        113.149,
        22.075
       ],
       [
        113.008,
        22.119
       ],
       [
        112.954,
        21.907
       ],
       [
        112.809,
        21.945
       ],
       [
        112.661,
        21.859
       ],
       [
        112.586,
        21.777
       ],
       [
        112.421,
        21.881
       ],
       [
        112.429,
        21.958
       ],
       [
        112.36,
        21.978
       ],
       [
        112.39,
        21.801
       ],
       [
        112.305,
        21.742
       ],
       [
        112.117,
        21.806
       ],
       [
        111.944,
        21.85
       ],
       [
        111.873,
        21.717
       ],
       [
        111.776,
        21.719
       ],
       [
        111.682,
        21.608
       ],
       [
        111.392,
        21.535
       ],
       [
        111.221,
        21.494
       ],
       [
        111.101,
        21.485
       ],
       [
        111.017,
        21.512
       ],
       [
        110.878,
        21.396
       ],
       [
        110.652,
        21.279
       ],
       [
        110.504,
        21.207
       ],
       [
        110.435,
        21.327
       ],
       [
        110.397,
        21.248
       ],
       [
        110.331,
        21.131
       ],
       [
        110.154,
        20.945
       ],
       [
        110.365,
        20.838
       ],
       [
        110.371,
        20.752
       ],
       [
        110.313,
        20.672
       ],
       [
        110.518,
        20.46
       ],
       [
        110.45,
        20.355
       ],
       [
        110.123,
        20.264
       ],
       [
        109.883,
        20.364
       ],
       [
        109.932,
        20.399
       ],
       [
        109.968,
        20.448
       ],
       [
        109.861,
        20.514
       ],
       [
        109.805,
        20.711
       ],
       [
        109.726,
        20.839
       ],
       [
        109.663,
        20.917
       ],
       [
        109.681,
        21.132
       ],
       [
        109.78,
        21.337
       ],
       [
        109.931,
        21.481
       ],
       [
        109.759,
        21.56
       ],
       [
        109.687,
        21.525
       ],
       [
        109.566,
        21.691
       ],
       [
        109.544,
        21.538
       ],
       [
        109.347,
        21.454
       ],
       [
        109.295,
        19.595
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
         119.736,
         27.385
        ],
        [
         119.74,
         27.363
        ],
        [
         119.769,
         27.308
        ],
        [
         119.939,
         27.33
        ],
        [
         120.008,
         27.375
        ],
        [
         120.053,
         27.339
        ],
        [
         120.342,
         27.385
        ],
        [
         120.43,
         27.259
        ],
        [
         120.404,
         27.204
        ],
        [
         120.492,
         27.136
        ],
        [
         120.575,
         27.235
        ],
        [
         120.58,
         27.321
        ],
        [
         120.605,
         27.385
        ]
       ]
      ]
     ]
    },
    "n": "浙江省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         119.005,
         24.97
        ],
        [
         119.024,
         25.044
        ],
        [
         118.975,
         25.025
        ],
        [
         118.892,
         25.093
        ],
        [
         118.952,
         25.152
        ],
        [
         118.985,
         25.195
        ],
        [
         118.94,
         25.217
        ],
        [
         118.903,
         25.239
        ],
        [
         118.919,
         25.248
        ],
        [
         118.918,
         25.257
        ],
        [
         118.997,
         25.266
        ],
        [
         118.99,
         25.202
        ],
        [
         119.074,
         25.211
        ],
        [
         119.033,
         25.174
        ],
        [
         119.066,
         25.103
        ],
        [
         119.134,
         25.106
        ],
        [
         119.119,
         25.013
        ],
        [
         119.166,
         25.146
        ],
        [
         119.108,
         25.194
        ],
        [
         119.19,
         25.176
        ],
        [
         119.269,
         25.16
        ],
        [
         119.295,
         25.237
        ],
        [
         119.381,
         25.25
        ],
        [
         119.299,
         25.329
        ],
        [
         119.241,
         25.317
        ],
        [
         119.145,
         25.388
        ],
        [
         119.192,
         25.424
        ],
        [
         119.22,
         25.469
        ],
        [
         119.275,
         25.477
        ],
        [
         119.288,
         25.411
        ],
        [
         119.344,
         25.472
        ],
        [
         119.401,
         25.494
        ],
        [
         119.438,
         25.412
        ],
        [
         119.491,
         25.443
        ],
        [
         119.507,
         25.396
        ],
        [
         119.549,
         25.366
        ],
        [
         119.556,
         25.429
        ],
        [
         119.591,
         25.398
        ],
        [
         119.597,
         25.335
        ],
        [
         119.665,
         25.372
        ],
        [
         119.67,
         25.436
        ],
        [
         119.675,
         25.468
        ],
        [
         119.689,
         25.441
        ],
        [
         119.764,
         25.434
        ],
        [
         119.867,
         25.455
        ],
        [
         119.863,
         25.475
        ],
        [
         119.817,
         25.532
        ],
        [
         119.884,
         25.546
        ],
        [
         119.843,
         25.598
        ],
        [
         119.786,
         25.668
        ],
        [
         119.684,
         25.593
        ],
        [
         119.716,
         25.512
        ],
        [
         119.675,
         25.475
        ],
        [
         119.612,
         25.52
        ],
        [
         119.587,
         25.592
        ],
        [
         119.541,
         25.625
        ],
        [
         119.473,
         25.662
        ],
        [
         119.603,
         25.685
        ],
        [
         119.626,
         25.723
        ],
        [
         119.638,
         25.89
        ],
        [
         119.724,
         26.012
        ],
        [
         119.669,
         26.026
        ],
        [
         119.619,
         26.12
        ],
        [
         119.665,
         26.202
        ],
        [
         119.771,
         26.285
        ],
        [
         119.807,
         26.307
        ],
        [
         119.863,
         26.307
        ],
        [
         119.955,
         26.353
        ],
        [
         119.894,
         26.356
        ],
        [
         119.836,
         26.454
        ],
        [
         119.74,
         26.611
        ],
        [
         119.605,
         26.596
        ],
        [
         119.62,
         26.649
        ],
        [
         119.665,
         26.726
        ],
        [
         119.834,
         26.691
        ],
        [
         119.874,
         26.643
        ],
        [
         119.899,
         26.693
        ],
        [
         119.943,
         26.784
        ],
        [
         120.062,
         26.769
        ],
        [
         119.969,
         26.687
        ],
        [
         119.949,
         26.625
        ],
        [
         119.852,
         26.595
        ],
        [
         119.867,
         26.509
        ],
        [
         119.938,
         26.576
        ],
        [
         120.008,
         26.596
        ],
        [
         120.094,
         26.614
        ],
        [
         120.11,
         26.693
        ],
        [
         120.151,
         26.751
        ],
        [
         120.136,
         26.798
        ],
        [
         120.102,
         26.827
        ],
        [
         120.054,
         26.864
        ],
        [
         120.126,
         26.921
        ],
        [
         120.181,
         26.921
        ],
        [
         120.26,
         26.983
        ],
        [
         120.276,
         27.027
        ],
        [
         120.283,
         27.09
        ],
        [
         120.403,
         27.101
        ],
        [
         120.404,
         27.204
        ],
        [
         120.43,
         27.259
        ],
        [
         120.342,
         27.385
        ],
        [
         120.053,
         27.339
        ],
        [
         120.008,
         27.375
        ],
        [
         119.939,
         27.33
        ],
        [
         119.769,
         27.308
        ],
        [
         119.74,
         27.363
        ],
        [
         119.736,
         27.385
        ],
        [
         117.105,
         27.331
        ],
        [
         117.137,
         27.303
        ],
        [
         117.15,
         27.241
        ],
        [
         117.053,
         27.1
        ],
        [
         116.937,
         27.019
        ],
        [
         116.852,
         27.009
        ],
        [
         116.679,
         26.978
        ],
        [
         116.602,
         26.889
        ],
        [
         116.544,
         26.804
        ],
        [
         116.515,
         26.721
        ],
        [
         116.566,
         26.65
        ],
        [
         116.539,
         26.559
        ],
        [
         116.611,
         26.477
        ],
        [
         116.608,
         26.43
        ],
        [
         116.553,
         26.365
        ],
        [
         116.52,
         26.41
        ],
        [
         116.459,
         26.345
        ],
        [
         116.413,
         26.298
        ],
        [
         116.4,
         26.203
        ],
        [
         116.436,
         26.16
        ],
        [
         116.489,
         26.114
        ],
        [
         116.36,
         25.992
        ],
        [
         116.326,
         25.957
        ],
        [
         116.258,
         25.903
        ],
        [
         116.178,
         25.894
        ],
        [
         116.132,
         25.824
        ],
        [
         116.13,
         25.759
        ],
        [
         116.067,
         25.704
        ],
        [
         116.042,
         25.624
        ],
        [
         116.04,
         25.548
        ],
        [
         116.005,
         25.49
        ],
        [
         115.993,
         25.374
        ],
        [
         115.987,
         25.29
        ],
        [
         115.931,
         25.236
        ],
        [
         115.861,
         25.166
        ],
        [
         115.88,
         25.092
        ],
        [
         115.928,
         25.05
        ],
        [
         115.925,
         24.961
        ],
        [
         115.893,
         24.937
        ],
        [
         115.986,
         24.899
        ],
        [
         116.068,
         24.85
        ],
        [
         116.192,
         24.877
        ],
        [
         116.251,
         24.825
        ],
        [
         116.297,
         24.802
        ],
        [
         116.364,
         24.871
        ],
        [
         116.418,
         24.841
        ],
        [
         116.375,
         24.804
        ],
        [
         116.416,
         24.744
        ],
        [
         116.485,
         24.72
        ],
        [
         116.507,
         24.621
        ],
        [
         116.571,
         24.622
        ],
        [
         116.623,
         24.642
        ],
        [
         116.778,
         24.679
        ],
        [
         116.761,
         24.583
        ],
        [
         116.797,
         24.502
        ],
        [
         116.861,
         24.46
        ],
        [
         116.904,
         24.37
        ],
        [
         116.919,
         24.321
        ],
        [
         116.938,
         24.281
        ],
        [
         116.956,
         24.217
        ],
        [
         116.935,
         24.127
        ],
        [
         116.953,
         24.008
        ],
        [
         116.977,
         23.932
        ],
        [
         116.982,
         23.856
        ],
        [
         117.019,
         23.802
        ],
        [
         117.055,
         23.694
        ],
        [
         117.147,
         23.654
        ],
        [
         117.193,
         23.562
        ],
        [
         117.302,
         23.55
        ],
        [
         117.464,
         23.585
        ],
        [
         117.493,
         23.643
        ],
        [
         117.544,
         23.716
        ],
        [
         117.66,
         23.789
        ],
        [
         117.672,
         23.878
        ],
        [
         117.763,
         23.887
        ],
        [
         117.807,
         23.948
        ],
        [
         117.91,
         24.012
        ],
        [
         117.936,
         24.1
        ],
        [
         118.019,
         24.197
        ],
        [
         118.115,
         24.229
        ],
        [
         118.112,
         24.357
        ],
        [
         118.088,
         24.409
        ],
        [
         118.084,
         24.529
        ],
        [
         118.151,
         24.584
        ],
        [
         118.243,
         24.512
        ],
        [
         118.364,
         24.568
        ],
        [
         118.513,
         24.608
        ],
        [
         118.558,
         24.512
        ],
        [
         118.68,
         24.582
        ],
        [
         118.661,
         24.622
        ],
        [
         118.67,
         24.68
        ],
        [
         118.779,
         24.744
        ],
        [
         118.651,
         24.809
        ],
        [
         118.702,
         24.865
        ],
        [
         118.749,
         24.842
        ],
        [
         118.834,
         24.854
        ],
        [
         118.933,
         24.871
        ],
        [
         118.987,
         24.898
        ],
        [
         118.919,
         24.933
        ],
        [
         119.014,
         24.941
        ],
        [
         119.033,
         24.962
        ],
        [
         119.005,
         24.97
        ]
       ]
      ],
      [
       [
        [
         118.412,
         24.515
        ],
        [
         118.319,
         24.487
        ],
        [
         118.312,
         24.425
        ],
        [
         118.33,
         24.382
        ],
        [
         118.406,
         24.428
        ],
        [
         118.477,
         24.438
        ],
        [
         118.412,
         24.515
        ]
       ]
      ],
      [
       [
        [
         119.471,
         25.197
        ],
        [
         119.525,
         25.158
        ],
        [
         119.567,
         25.21
        ],
        [
         119.501,
         25.217
        ],
        [
         119.443,
         25.239
        ],
        [
         119.471,
         25.197
        ]
       ]
      ],
      [
       [
        [
         119.58,
         25.627
        ],
        [
         119.581,
         25.65
        ]
       ]
      ],
      [
       [
        [
         119.977,
         26.191
        ],
        [
         119.999,
         26.236
        ],
        [
         119.977,
         26.191
        ]
       ]
      ],
      [
       [
        [
         118.231,
         24.401
        ],
        [
         118.234,
         24.446
        ]
       ]
      ],
      [
       [
        [
         119.907,
         26.69
        ],
        [
         119.951,
         26.693
        ]
       ]
      ],
      [
       [
        [
         118.204,
         24.505
        ],
        [
         118.145,
         24.561
        ],
        [
         118.069,
         24.463
        ],
        [
         118.143,
         24.421
        ],
        [
         118.204,
         24.505
        ]
       ]
      ],
      [
       [
        [
         119.929,
         26.134
        ],
        [
         119.92,
         26.172
        ]
       ]
      ],
      [
       [
        [
         119.643,
         26.129
        ],
        [
         119.627,
         26.173
        ],
        [
         119.643,
         26.129
        ]
       ]
      ],
      [
       [
        [
         120.034,
         26.489
        ],
        [
         120.072,
         26.521
        ],
        [
         120.034,
         26.489
        ]
       ]
      ],
      [
       [
        [
         119.662,
         25.647
        ],
        [
         119.719,
         25.635
        ],
        [
         119.662,
         25.647
        ]
       ]
      ],
      [
       [
        [
         119.761,
         26.613
        ],
        [
         119.819,
         26.617
        ],
        [
         119.761,
         26.613
        ]
       ]
      ],
      [
       [
        [
         120.136,
         26.551
        ],
        [
         120.154,
         26.605
        ],
        [
         120.136,
         26.551
        ]
       ]
      ],
      [
       [
        [
         120.361,
         26.917
        ],
        [
         120.363,
         26.968
        ],
        [
         120.319,
         26.945
        ]
       ]
      ],
      [
       [
        [
         120.151,
         26.799
        ],
        [
         120.163,
         26.798
        ],
        [
         120.151,
         26.799
        ]
       ]
      ],
      [
       [
        [
         119.668,
         26.628
        ],
        [
         119.759,
         26.659
        ],
        [
         119.713,
         26.669
        ],
        [
         119.652,
         26.657
        ]
       ]
      ]
     ]
    },
    "n": "福建省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.607,
         27.385
        ],
        [
         113.658,
         27.347
        ],
        [
         113.728,
         27.35
        ],
        [
         113.873,
         27.347
        ],
        [
         113.873,
         27.29
        ],
        [
         113.779,
         27.137
        ],
        [
         113.803,
         27.099
        ],
        [
         113.863,
         27.018
        ],
        [
         113.927,
         26.949
        ],
        [
         113.877,
         26.859
        ],
        [
         113.854,
         26.77
        ],
        [
         113.913,
         26.614
        ],
        [
         114.019,
         26.587
        ],
        [
         114.072,
         26.48
        ],
        [
         114.09,
         26.456
        ],
        [
         114.063,
         26.406
        ],
        [
         114.048,
         26.338
        ],
        [
         114.029,
         26.266
        ],
        [
         113.973,
         26.206
        ],
        [
         113.963,
         26.151
        ],
        [
         114.088,
         26.168
        ],
        [
         114.181,
         26.215
        ],
        [
         114.238,
         26.152
        ],
        [
         114.106,
         26.098
        ],
        [
         114.088,
         26.066
        ],
        [
         114.008,
         26.016
        ],
        [
         114.028,
         25.893
        ],
        [
         113.962,
         25.777
        ],
        [
         113.914,
         25.701
        ],
        [
         113.983,
         25.599
        ],
        [
         113.963,
         25.528
        ],
        [
         114.003,
         25.443
        ],
        [
         114.05,
         25.364
        ],
        [
         114.018,
         25.274
        ],
        [
         114.056,
         25.278
        ],
        [
         114.116,
         25.302
        ],
        [
         114.205,
         25.299
        ],
        [
         114.295,
         25.3
        ],
        [
         114.383,
         25.317
        ],
        [
         114.439,
         25.376
        ],
        [
         114.541,
         25.417
        ],
        [
         114.637,
         25.324
        ],
        [
         114.743,
         25.275
        ],
        [
         114.694,
         25.214
        ],
        [
         114.735,
         25.156
        ],
        [
         114.665,
         25.101
        ],
        [
         114.605,
         25.084
        ],
        [
         114.533,
         25.023
        ],
        [
         114.456,
         24.997
        ],
        [
         114.396,
         24.951
        ],
        [
         114.379,
         24.861
        ],
        [
         114.336,
         24.749
        ],
        [
         114.273,
         24.701
        ],
        [
         114.191,
         24.657
        ],
        [
         114.29,
         24.619
        ],
        [
         114.364,
         24.583
        ],
        [
         114.403,
         24.498
        ],
        [
         114.534,
         24.559
        ],
        [
         114.627,
         24.577
        ],
        [
         114.705,
         24.526
        ],
        [
         114.73,
         24.609
        ],
        [
         114.828,
         24.588
        ],
        [
         114.869,
         24.562
        ],
        [
         114.909,
         24.661
        ],
        [
         115.004,
         24.679
        ],
        [
         115.057,
         24.703
        ],
        [
         115.105,
         24.668
        ],
        [
         115.259,
         24.729
        ],
        [
         115.307,
         24.759
        ],
        [
         115.373,
         24.775
        ],
        [
         115.477,
         24.763
        ],
        [
         115.556,
         24.684
        ],
        [
         115.606,
         24.626
        ],
        [
         115.689,
         24.545
        ],
        [
         115.785,
         24.567
        ],
        [
         115.841,
         24.584
        ],
        [
         115.78,
         24.663
        ],
        [
         115.769,
         24.708
        ],
        [
         115.777,
         24.775
        ],
        [
         115.79,
         24.856
        ],
        [
         115.824,
         24.909
        ],
        [
         115.862,
         24.864
        ],
        [
         115.885,
         24.899
        ],
        [
         115.87,
         24.96
        ],
        [
         115.873,
         25.02
        ],
        [
         115.909,
         25.084
        ],
        [
         115.888,
         25.129
        ],
        [
         115.856,
         25.21
        ],
        [
         115.95,
         25.292
        ],
        [
         116.008,
         25.319
        ],
        [
         116.023,
         25.436
        ],
        [
         116.037,
         25.515
        ],
        [
         116.063,
         25.563
        ],
        [
         116.069,
         25.646
        ],
        [
         116.107,
         25.701
        ],
        [
         116.181,
         25.779
        ],
        [
         116.132,
         25.86
        ],
        [
         116.225,
         25.909
        ],
        [
         116.303,
         25.924
        ],
        [
         116.37,
         25.963
        ],
        [
         116.385,
         26.031
        ],
        [
         116.476,
         26.173
        ],
        [
         116.392,
         26.171
        ],
        [
         116.385,
         26.238
        ],
        [
         116.437,
         26.308
        ],
        [
         116.5,
         26.362
        ],
        [
         116.553,
         26.4
        ],
        [
         116.601,
         26.373
        ],
        [
         116.638,
         26.477
        ],
        [
         116.597,
         26.513
        ],
        [
         116.553,
         26.576
        ],
        [
         116.52,
         26.685
        ],
        [
         116.558,
         26.774
        ],
        [
         116.549,
         26.84
        ],
        [
         116.633,
         26.934
        ],
        [
         116.818,
         27.018
        ],
        [
         116.91,
         27.035
        ],
        [
         116.967,
         27.062
        ],
        [
         117.045,
         27.147
        ],
        [
         117.172,
         27.29
        ],
        [
         117.14,
         27.323
        ],
        [
         117.107,
         27.385
        ]
       ]
      ]
     ]
    },
    "n": "江西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         112.024,
         24.74
        ],
        [
         112.124,
         24.841
        ],
        [
         112.167,
         24.86
        ],
        [
         112.12,
         24.963
        ],
        [
         112.156,
         25.026
        ],
        [
         112.177,
         25.107
        ],
        [
         112.247,
         25.185
        ],
        [
         112.303,
         25.157
        ],
        [
         112.365,
         25.192
        ],
        [
         112.443,
         25.186
        ],
        [
         112.563,
         25.125
        ],
        [
         112.66,
         25.133
        ],
        [
         112.715,
         25.026
        ],
        [
         112.743,
         24.96
        ],
        [
         112.781,
         24.897
        ],
        [
         112.905,
         24.922
        ],
        [
         112.995,
         24.927
        ],
        [
         112.979,
         25.034
        ],
        [
         112.968,
         25.142
        ],
        [
         113.035,
         25.198
        ],
        [
         112.958,
         25.255
        ],
        [
         112.867,
         25.25
        ],
        [
         112.891,
         25.34
        ],
        [
         112.935,
         25.326
        ],
        [
         113.013,
         25.352
        ],
        [
         113.097,
         25.412
        ],
        [
         113.118,
         25.445
        ],
        [
         113.226,
         25.51
        ],
        [
         113.311,
         25.49
        ],
        [
         113.342,
         25.449
        ],
        [
         113.407,
         25.402
        ],
        [
         113.48,
         25.375
        ],
        [
         113.579,
         25.344
        ],
        [
         113.612,
         25.328
        ],
        [
         113.687,
         25.352
        ],
        [
         113.764,
         25.334
        ],
        [
         113.84,
         25.363
        ],
        [
         113.887,
         25.437
        ],
        [
         113.963,
         25.528
        ],
        [
         113.983,
         25.599
        ],
        [
         113.914,
         25.701
        ],
        [
         113.962,
         25.777
        ],
        [
         114.028,
         25.893
        ],
        [
         114.008,
         26.016
        ],
        [
         114.088,
         26.066
        ],
        [
         114.106,
         26.098
        ],
        [
         114.238,
         26.152
        ],
        [
         114.181,
         26.215
        ],
        [
         114.088,
         26.168
        ],
        [
         113.963,
         26.151
        ],
        [
         113.973,
         26.206
        ],
        [
         114.029,
         26.266
        ],
        [
         114.048,
         26.338
        ],
        [
         114.063,
         26.406
        ],
        [
         114.09,
         26.456
        ],
        [
         114.072,
         26.48
        ],
        [
         114.019,
         26.587
        ],
        [
         113.913,
         26.614
        ],
        [
         113.854,
         26.77
        ],
        [
         113.877,
         26.859
        ],
        [
         113.927,
         26.949
        ],
        [
         113.863,
         27.018
        ],
        [
         113.803,
         27.099
        ],
        [
         113.779,
         27.137
        ],
        [
         113.873,
         27.29
        ],
        [
         113.873,
         27.347
        ],
        [
         113.728,
         27.35
        ],
        [
         113.658,
         27.347
        ],
        [
         113.607,
         27.385
        ],
        [
         109.295,
         27.135
        ],
        [
         109.359,
         27.153
        ],
        [
         109.441,
         27.118
        ],
        [
         109.455,
         27.069
        ],
        [
         109.498,
         27.08
        ],
        [
         109.555,
         26.947
        ],
        [
         109.453,
         26.862
        ],
        [
         109.51,
         26.878
        ],
        [
         109.497,
         26.815
        ],
        [
         109.529,
         26.744
        ],
        [
         109.597,
         26.756
        ],
        [
         109.529,
         26.744
        ],
        [
         109.487,
         26.76
        ],
        [
         109.407,
         26.72
        ],
        [
         109.295,
         26.698
        ],
        [
         109.306,
         26.661
        ],
        [
         109.355,
         26.659
        ],
        [
         109.407,
         26.533
        ],
        [
         109.386,
         26.493
        ],
        [
         109.381,
         26.454
        ],
        [
         109.296,
         26.35
        ],
        [
         109.295,
         26.294
        ],
        [
         109.351,
         26.264
        ],
        [
         109.442,
         26.29
        ],
        [
         109.439,
         26.239
        ],
        [
         109.514,
         26.128
        ],
        [
         109.45,
         26.102
        ],
        [
         109.482,
         26.03
        ],
        [
         109.56,
         26.021
        ],
        [
         109.635,
         26.048
        ],
        [
         109.73,
         25.99
        ],
        [
         109.694,
         25.959
        ],
        [
         109.685,
         25.88
        ],
        [
         109.779,
         25.866
        ],
        [
         109.826,
         25.911
        ],
        [
         109.782,
         25.997
        ],
        [
         109.864,
         26.028
        ],
        [
         109.904,
         26.136
        ],
        [
         110.03,
         26.166
        ],
        [
         110.101,
         26.132
        ],
        [
         110.101,
         26.02
        ],
        [
         110.182,
         26.06
        ],
        [
         110.257,
         25.961
        ],
        [
         110.373,
         26.089
        ],
        [
         110.478,
         26.18
        ],
        [
         110.547,
         26.233
        ],
        [
         110.584,
         26.297
        ],
        [
         110.643,
         26.309
        ],
        [
         110.721,
         26.294
        ],
        [
         110.735,
         26.271
        ],
        [
         110.836,
         26.256
        ],
        [
         110.926,
         26.32
        ],
        [
         110.945,
         26.373
        ],
        [
         111.009,
         26.359
        ],
        [
         111.091,
         26.308
        ],
        [
         111.205,
         26.276
        ],
        [
         111.278,
         26.272
        ],
        [
         111.272,
         26.217
        ],
        [
         111.258,
         26.152
        ],
        [
         111.245,
         26.078
        ],
        [
         111.235,
         26.048
        ],
        [
         111.23,
         25.916
        ],
        [
         111.292,
         25.854
        ],
        [
         111.346,
         25.907
        ],
        [
         111.383,
         25.882
        ],
        [
         111.486,
         25.859
        ],
        [
         111.442,
         25.772
        ],
        [
         111.309,
         25.72
        ],
        [
         111.343,
         25.603
        ],
        [
         111.328,
         25.522
        ],
        [
         111.211,
         25.363
        ],
        [
         111.139,
         25.304
        ],
        [
         111.113,
         25.217
        ],
        [
         110.984,
         25.102
        ],
        [
         110.969,
         24.975
        ],
        [
         111.101,
         24.946
        ],
        [
         111.14,
         25.042
        ],
        [
         111.222,
         25.107
        ],
        [
         111.322,
         25.105
        ],
        [
         111.375,
         25.128
        ],
        [
         111.416,
         25.048
        ],
        [
         111.46,
         24.993
        ],
        [
         111.435,
         24.952
        ],
        [
         111.447,
         24.893
        ],
        [
         111.479,
         24.797
        ],
        [
         111.431,
         24.688
        ],
        [
         111.499,
         24.668
        ],
        [
         111.57,
         24.645
        ],
        [
         111.642,
         24.685
        ],
        [
         111.667,
         24.761
        ],
        [
         111.784,
         24.786
        ],
        [
         111.869,
         24.772
        ],
        [
         111.93,
         24.756
        ],
        [
         112.024,
         24.74
        ]
       ]
      ],
      [
       [
        [
         109.529,
         26.744
        ],
        [
         109.522,
         26.749
        ]
       ]
      ]
     ]
    },
    "n": "湖南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.559,
         22.212
        ],
        [
         113.596,
         22.304
        ],
        [
         113.605,
         22.34
        ],
        [
         113.67,
         22.417
        ],
        [
         113.625,
         22.443
        ],
        [
         113.574,
         22.412
        ],
        [
         113.668,
         22.481
        ],
        [
         113.74,
         22.534
        ],
        [
         113.678,
         22.726
        ],
        [
         113.758,
         22.683
        ],
        [
         113.803,
         22.593
        ],
        [
         113.87,
         22.46
        ],
        [
         113.953,
         22.487
        ],
        [
         113.976,
         22.511
        ],
        [
         114.082,
         22.512
        ],
        [
         114.157,
         22.544
        ],
        [
         114.223,
         22.553
        ],
        [
         114.295,
         22.564
        ],
        [
         114.382,
         22.602
        ],
        [
         114.472,
         22.522
        ],
        [
         114.507,
         22.439
        ],
        [
         114.611,
         22.482
        ],
        [
         114.614,
         22.545
        ],
        [
         114.559,
         22.584
        ],
        [
         114.58,
         22.661
        ],
        [
         114.567,
         22.686
        ],
        [
         114.602,
         22.731
        ],
        [
         114.71,
         22.788
        ],
        [
         114.735,
         22.724
        ],
        [
         114.744,
         22.633
        ],
        [
         114.866,
         22.592
        ],
        [
         114.922,
         22.549
        ],
        [
         114.945,
         22.645
        ],
        [
         115.023,
         22.726
        ],
        [
         115.076,
         22.788
        ],
        [
         115.191,
         22.773
        ],
        [
         115.237,
         22.825
        ],
        [
         115.319,
         22.783
        ],
        [
         115.349,
         22.712
        ],
        [
         115.431,
         22.684
        ],
        [
         115.575,
         22.651
        ],
        [
         115.609,
         22.753
        ],
        [
         115.57,
         22.787
        ],
        [
         115.654,
         22.866
        ],
        [
         115.76,
         22.835
        ],
        [
         115.796,
         22.739
        ],
        [
         115.883,
         22.786
        ],
        [
         115.965,
         22.801
        ],
        [
         116.056,
         22.845
        ],
        [
         116.141,
         22.835
        ],
        [
         116.259,
         22.932
        ],
        [
         116.383,
         22.919
        ],
        [
         116.505,
         22.931
        ],
        [
         116.577,
         23.014
        ],
        [
         116.566,
         23.089
        ],
        [
         116.566,
         23.134
        ],
        [
         116.701,
         23.198
        ],
        [
         116.807,
         23.201
        ],
        [
         116.799,
         23.245
        ],
        [
         116.872,
         23.416
        ],
        [
         116.874,
         23.447
        ],
        [
         116.896,
         23.476
        ],
        [
         116.929,
         23.53
        ],
        [
         117.01,
         23.503
        ],
        [
         117.086,
         23.537
        ],
        [
         117.193,
         23.629
        ],
        [
         117.124,
         23.647
        ],
        [
         117.048,
         23.759
        ],
        [
         117.012,
         23.855
        ],
        [
         116.956,
         23.922
        ],
        [
         116.982,
         23.999
        ],
        [
         116.93,
         24.065
        ],
        [
         116.999,
         24.179
        ],
        [
         116.933,
         24.22
        ],
        [
         116.914,
         24.288
        ],
        [
         116.896,
         24.351
        ],
        [
         116.839,
         24.442
        ],
        [
         116.833,
         24.497
        ],
        [
         116.759,
         24.546
        ],
        [
         116.815,
         24.655
        ],
        [
         116.667,
         24.659
        ],
        [
         116.601,
         24.654
        ],
        [
         116.53,
         24.605
        ],
        [
         116.518,
         24.652
        ],
        [
         116.446,
         24.714
        ],
        [
         116.419,
         24.767
        ],
        [
         116.382,
         24.825
        ],
        [
         116.395,
         24.878
        ],
        [
         116.346,
         24.829
        ],
        [
         116.244,
         24.794
        ],
        [
         116.221,
         24.83
        ],
        [
         116.153,
         24.847
        ],
        [
         116.015,
         24.906
        ],
        [
         115.908,
         24.923
        ],
        [
         115.885,
         24.899
        ],
        [
         115.862,
         24.864
        ],
        [
         115.824,
         24.909
        ],
        [
         115.79,
         24.856
        ],
        [
         115.777,
         24.775
        ],
        [
         115.769,
         24.708
        ],
        [
         115.78,
         24.663
        ],
        [
         115.841,
         24.584
        ],
        [
         115.785,
         24.567
        ],
        [
         115.689,
         24.545
        ],
        [
         115.606,
         24.626
        ],
        [
         115.556,
         24.684
        ],
        [
         115.477,
         24.763
        ],
        [
         115.373,
         24.775
        ],
        [
         115.307,
         24.759
        ],
        [
         115.259,
         24.729
        ],
        [
         115.105,
         24.668
        ],
        [
         115.057,
         24.703
        ],
        [
         115.004,
         24.679
        ],
        [
         114.909,
         24.661
        ],
        [
         114.869,
         24.562
        ],
        [
         114.828,
         24.588
        ],
        [
         114.73,
         24.609
        ],
        [
         114.705,
         24.526
        ],
        [
         114.627,
         24.577
        ],
        [
         114.534,
         24.559
        ],
        [
         114.403,
         24.498
        ],
        [
         114.364,
         24.583
        ],
        [
         114.29,
         24.619
        ],
        [
         114.191,
         24.657
        ],
        [
         114.273,
         24.701
        ],
        [
         114.336,
         24.749
        ],
        [
         114.379,
         24.861
        ],
        [
         114.396,
         24.951
        ],
        [
         114.456,
         24.997
        ],
        [
         114.533,
         25.023
        ],
        [
         114.605,
         25.084
        ],
        [
         114.665,
         25.101
        ],
        [
         114.735,
         25.156
        ],
        [
         114.694,
         25.214
        ],
        [
         114.743,
         25.275
        ],
        [
         114.637,
         25.324
        ],
        [
         114.541,
         25.417
        ],
        [
         114.439,
         25.376
        ],
        [
         114.383,
         25.317
        ],
        [
         114.295,
         25.3
        ],
        [
         114.205,
         25.299
        ],
        [
         114.116,
         25.302
        ],
        [
         114.056,
         25.278
        ],
        [
         114.018,
         25.274
        ],
        [
         114.05,
         25.364
        ],
        [
         114.003,
         25.443
        ],
        [
         113.887,
         25.437
        ],
        [
         113.84,
         25.363
        ],
        [
         113.764,
         25.334
        ],
        [
         113.687,
         25.352
        ],
        [
         113.612,
         25.328
        ],
        [
         113.579,
         25.344
        ],
        [
         113.48,
         25.375
        ],
        [
         113.407,
         25.402
        ],
        [
         113.342,
         25.449
        ],
        [
         113.311,
         25.49
        ],
        [
         113.226,
         25.51
        ],
        [
         113.118,
         25.445
        ],
        [
         113.097,
         25.412
        ],
        [
         113.013,
         25.352
        ],
        [
         112.935,
         25.326
        ],
        [
         112.891,
         25.34
        ],
        [
         112.867,
         25.25
        ],
        [
         112.958,
         25.255
        ],
        [
         113.035,
         25.198
        ],
        [
         112.968,
         25.142
        ],
        [
         112.979,
         25.034
        ],
        [
         112.995,
         24.927
        ],
        [
         112.905,
         24.922
        ],
        [
         112.781,
         24.897
        ],
        [
         112.743,
         24.96
        ],
        [
         112.715,
         25.026
        ],
        [
         112.66,
         25.133
        ],
        [
         112.563,
         25.125
        ],
        [
         112.443,
         25.186
        ],
        [
         112.365,
         25.192
        ],
        [
         112.303,
         25.157
        ],
        [
         112.247,
         25.185
        ],
        [
         112.177,
         25.107
        ],
        [
         112.156,
         25.026
        ],
        [
         112.12,
         24.963
        ],
        [
         112.167,
         24.86
        ],
        [
         112.124,
         24.841
        ],
        [
         112.024,
         24.74
        ],
        [
         111.939,
         24.686
        ],
        [
         111.928,
         24.629
        ],
        [
         111.972,
         24.579
        ],
        [
         112.01,
         24.503
        ],
        [
         112.025,
         24.439
        ],
        [
         112.06,
         24.34
        ],
        [
         111.991,
         24.28
        ],
        [
         111.959,
         24.264
        ],
        [
         111.877,
         24.227
        ],
        [
         111.886,
         24.164
        ],
        [
         111.922,
         24.012
        ],
        [
         111.912,
         23.944
        ],
        [
         111.846,
         23.904
        ],
        [
         111.825,
         23.833
        ],
        [
         111.723,
         23.823
        ],
        [
         111.683,
         23.823
        ],
        [
         111.628,
         23.789
        ],
        [
         111.667,
         23.719
        ],
        [
         111.615,
         23.639
        ],
        [
         111.487,
         23.627
        ],
        [
         111.429,
         23.466
        ],
        [
         111.383,
         23.399
        ],
        [
         111.364,
         23.341
        ],
        [
         111.353,
         23.285
        ],
        [
         111.389,
         23.21
        ],
        [
         111.366,
         23.145
        ],
        [
         111.402,
         23.066
        ],
        [
         111.434,
         23.036
        ],
        [
         111.404,
         22.991
        ],
        [
         111.375,
         22.938
        ],
        [
         111.218,
         22.748
        ],
        [
         111.118,
         22.745
        ],
        [
         111.089,
         22.696
        ],
        [
         110.997,
         22.632
        ],
        [
         110.95,
         22.611
        ],
        [
         110.898,
         22.592
        ],
        [
         110.778,
         22.585
        ],
        [
         110.763,
         22.518
        ],
        [
         110.741,
         22.464
        ],
        [
         110.712,
         22.441
        ],
        [
         110.741,
         22.362
        ],
        [
         110.787,
         22.283
        ],
        [
         110.725,
         22.296
        ],
        [
         110.647,
         22.221
        ],
        [
         110.629,
         22.149
        ],
        [
         110.603,
         22.183
        ],
        [
         110.506,
         22.143
        ],
        [
         110.414,
         22.208
        ],
        [
         110.348,
         22.196
        ],
        [
         110.364,
         22.126
        ],
        [
         110.36,
         22.016
        ],
        [
         110.375,
         21.968
        ],
        [
         110.379,
         21.94
        ],
        [
         110.392,
         21.894
        ],
        [
         110.291,
         21.918
        ],
        [
         110.224,
         21.882
        ],
        [
         110.212,
         21.886
        ],
        [
         110.196,
         21.9
        ],
        [
         110.101,
         21.87
        ],
        [
         110.0,
         21.882
        ],
        [
         109.94,
         21.769
        ],
        [
         109.888,
         21.652
        ],
        [
         109.84,
         21.637
        ],
        [
         109.778,
         21.67
        ],
        [
         109.755,
         21.556
        ],
        [
         109.785,
         21.457
        ],
        [
         109.895,
         21.442
        ],
        [
         109.869,
         21.366
        ],
        [
         109.758,
         21.347
        ],
        [
         109.675,
         21.137
        ],
        [
         109.656,
         20.929
        ],
        [
         109.712,
         20.775
        ],
        [
         109.745,
         20.621
        ],
        [
         109.814,
         20.575
        ],
        [
         109.84,
         20.489
        ],
        [
         109.896,
         20.428
        ],
        [
         109.861,
         20.377
        ],
        [
         109.909,
         20.237
        ],
        [
         109.994,
         20.254
        ],
        [
         110.118,
         20.22
        ],
        [
         110.22,
         20.252
        ],
        [
         110.349,
         20.259
        ],
        [
         110.425,
         20.291
        ],
        [
         110.491,
         20.374
        ],
        [
         110.55,
         20.473
        ],
        [
         110.487,
         20.64
        ],
        [
         110.411,
         20.671
        ],
        [
         110.408,
         20.732
        ],
        [
         110.351,
         20.842
        ],
        [
         110.269,
         20.84
        ],
        [
         110.184,
         20.892
        ],
        [
         110.205,
         21.003
        ],
        [
         110.242,
         21.016
        ],
        [
         110.297,
         21.094
        ],
        [
         110.422,
         21.191
        ],
        [
         110.501,
         21.218
        ],
        [
         110.626,
         21.216
        ],
        [
         110.713,
         21.312
        ],
        [
         110.796,
         21.375
        ],
        [
         110.929,
         21.376
        ],
        [
         111.104,
         21.456
        ],
        [
         111.283,
         21.486
        ],
        [
         111.25,
         21.451
        ],
        [
         111.286,
         21.419
        ],
        [
         111.383,
         21.496
        ],
        [
         111.495,
         21.501
        ],
        [
         111.561,
         21.505
        ],
        [
         111.651,
         21.512
        ],
        [
         111.694,
         21.59
        ],
        [
         111.795,
         21.611
        ],
        [
         111.81,
         21.555
        ],
        [
         111.942,
         21.607
        ],
        [
         112.027,
         21.634
        ],
        [
         111.954,
         21.668
        ],
        [
         112.036,
         21.762
        ],
        [
         112.193,
         21.789
        ],
        [
         112.236,
         21.727
        ],
        [
         112.353,
         21.707
        ],
        [
         112.427,
         21.79
        ],
        [
         112.497,
         21.786
        ],
        [
         112.647,
         21.758
        ],
        [
         112.793,
         21.921
        ],
        [
         112.894,
         21.844
        ],
        [
         112.99,
         21.869
        ],
        [
         113.054,
         22.012
        ],
        [
         113.046,
         22.089
        ],
        [
         113.092,
         22.065
        ],
        [
         113.152,
         21.98
        ],
        [
         113.267,
         21.872
        ],
        [
         113.33,
         21.962
        ],
        [
         113.46,
         22.044
        ],
        [
         113.567,
         22.075
        ],
        [
         113.554,
         22.142
        ],
        [
         113.538,
         22.209
        ]
       ]
      ],
      [
       [
        [
         117.025,
         23.438
        ],
        [
         116.945,
         23.44
        ],
        [
         117.027,
         23.415
        ],
        [
         117.082,
         23.409
        ],
        [
         117.143,
         23.401
        ],
        [
         117.129,
         23.483
        ],
        [
         117.059,
         23.474
        ],
        [
         117.025,
         23.438
        ]
       ]
      ],
      [
       [
        [
         112.853,
         21.741
        ],
        [
         112.841,
         21.777
        ],
        [
         112.724,
         21.72
        ],
        [
         112.735,
         21.667
        ],
        [
         112.731,
         21.614
        ],
        [
         112.817,
         21.59
        ],
        [
         112.821,
         21.656
        ],
        [
         112.833,
         21.737
        ]
       ]
      ],
      [
       [
        [
         112.531,
         21.584
        ],
        [
         112.571,
         21.62
        ],
        [
         112.666,
         21.643
        ],
        [
         112.666,
         21.684
        ],
        [
         112.592,
         21.693
        ],
        [
         112.571,
         21.646
        ],
        [
         112.531,
         21.584
        ]
       ]
      ],
      [
       [
        [
         114.231,
         22.017
        ],
        [
         114.303,
         22.05
        ],
        [
         114.231,
         22.017
        ]
       ]
      ],
      [
       [
        [
         110.433,
         21.171
        ],
        [
         110.509,
         21.141
        ],
        [
         110.583,
         21.095
        ],
        [
         110.589,
         21.195
        ],
        [
         110.499,
         21.213
        ],
        [
         110.432,
         21.181
        ]
       ]
      ],
      [
       [
        [
         112.435,
         21.664
        ],
        [
         112.459,
         21.69
        ]
       ]
      ],
      [
       [
        [
         110.518,
         21.079
        ],
        [
         110.398,
         21.096
        ],
        [
         110.306,
         21.088
        ],
        [
         110.211,
         20.987
        ],
        [
         110.31,
         20.964
        ],
        [
         110.408,
         20.99
        ],
        [
         110.512,
         20.917
        ],
        [
         110.539,
         20.988
        ],
        [
         110.518,
         21.079
        ]
       ]
      ],
      [
       [
        [
         113.765,
         21.962
        ],
        [
         113.742,
         21.992
        ]
       ]
      ],
      [
       [
        [
         113.723,
         21.922
        ],
        [
         113.719,
         21.952
        ]
       ]
      ],
      [
       [
        [
         113.143,
         21.832
        ],
        [
         113.204,
         21.861
        ],
        [
         113.137,
         21.869
        ]
       ]
      ],
      [
       [
        [
         113.82,
         22.396
        ],
        [
         113.787,
         22.414
        ]
       ]
      ],
      [
       [
        [
         114.19,
         21.987
        ],
        [
         114.181,
         22.01
        ]
       ]
      ],
      [
       [
        [
         114.154,
         21.975
        ],
        [
         114.124,
         21.985
        ]
       ]
      ],
      [
       [
        [
         116.77,
         20.772
        ],
        [
         116.872,
         20.738
        ],
        [
         116.849,
         20.628
        ],
        [
         116.796,
         20.582
        ],
        [
         116.905,
         20.619
        ],
        [
         116.925,
         20.727
        ],
        [
         116.82,
         20.781
        ]
       ]
      ],
      [
       [
        [
         113.025,
         21.848
        ],
        [
         113.007,
         21.869
        ]
       ]
      ],
      [
       [
        [
         110.405,
         20.678
        ],
        [
         110.414,
         20.71
        ]
       ]
      ],
      [
       [
        [
         110.645,
         20.936
        ],
        [
         110.549,
         20.909
        ],
        [
         110.611,
         20.86
        ],
        [
         110.645,
         20.936
        ]
       ]
      ],
      [
       [
        [
         110.557,
         20.327
        ],
        [
         110.586,
         20.381
        ]
       ]
      ],
      [
       [
        [
         115.943,
         21.098
        ],
        [
         115.989,
         21.036
        ],
        [
         116.067,
         21.041
        ],
        [
         116.024,
         21.124
        ],
        [
         115.943,
         21.098
        ]
       ]
      ],
      [
       [
        [
         115.926,
         20.981
        ],
        [
         115.97,
         20.919
        ],
        [
         116.001,
         20.948
        ],
        [
         115.926,
         20.981
        ]
       ]
      ],
      [
       [
        [
         115.835,
         22.723
        ],
        [
         115.835,
         22.723
        ]
       ]
      ],
      [
       [
        [
         115.835,
         22.723
        ],
        [
         115.835,
         22.723
        ]
       ]
      ]
     ]
    },
    "n": "广东省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         109.482,
         26.03
        ],
        [
         109.409,
         25.967
        ],
        [
         109.397,
         25.9
        ],
        [
         109.34,
         25.834
        ],
        [
         109.34,
         25.731
        ],
        [
         109.295,
         25.715
        ],
        [
         109.417,
         21.439
        ],
        [
         109.53,
         21.437
        ],
        [
         109.577,
         21.493
        ],
        [
         109.612,
         21.557
        ],
        [
         109.704,
         21.463
        ],
        [
         109.789,
         21.491
        ],
        [
         109.743,
         21.616
        ],
        [
         109.786,
         21.638
        ],
        [
         109.888,
         21.652
        ],
        [
         109.916,
         21.669
        ],
        [
         109.945,
         21.844
        ],
        [
         110.051,
         21.857
        ],
        [
         110.129,
         21.903
        ],
        [
         110.212,
         21.886
        ],
        [
         110.224,
         21.882
        ],
        [
         110.284,
         21.892
        ],
        [
         110.337,
         21.888
        ],
        [
         110.379,
         21.94
        ],
        [
         110.375,
         21.968
        ],
        [
         110.353,
         21.976
        ],
        [
         110.352,
         22.098
        ],
        [
         110.326,
         22.152
        ],
        [
         110.378,
         22.165
        ],
        [
         110.457,
         22.19
        ],
        [
         110.558,
         22.196
        ],
        [
         110.599,
         22.163
        ],
        [
         110.679,
         22.173
        ],
        [
         110.688,
         22.25
        ],
        [
         110.759,
         22.275
        ],
        [
         110.749,
         22.33
        ],
        [
         110.711,
         22.37
        ],
        [
         110.688,
         22.478
        ],
        [
         110.74,
         22.499
        ],
        [
         110.749,
         22.557
        ],
        [
         110.812,
         22.576
        ],
        [
         110.896,
         22.613
        ],
        [
         110.959,
         22.637
        ],
        [
         111.056,
         22.649
        ],
        [
         111.058,
         22.73
        ],
        [
         111.186,
         22.736
        ],
        [
         111.359,
         22.889
        ],
        [
         111.363,
         22.968
        ],
        [
         111.389,
         23.006
        ],
        [
         111.433,
         23.073
        ],
        [
         111.378,
         23.082
        ],
        [
         111.384,
         23.167
        ],
        [
         111.365,
         23.24
        ],
        [
         111.376,
         23.304
        ],
        [
         111.389,
         23.376
        ],
        [
         111.4,
         23.469
        ],
        [
         111.48,
         23.533
        ],
        [
         111.556,
         23.641
        ],
        [
         111.615,
         23.659
        ],
        [
         111.622,
         23.726
        ],
        [
         111.655,
         23.833
        ],
        [
         111.683,
         23.823
        ],
        [
         111.811,
         23.807
        ],
        [
         111.813,
         23.887
        ],
        [
         111.854,
         23.948
        ],
        [
         111.941,
         23.988
        ],
        [
         111.878,
         24.11
        ],
        [
         111.871,
         24.176
        ],
        [
         111.913,
         24.222
        ],
        [
         111.986,
         24.257
        ],
        [
         112.026,
         24.295
        ],
        [
         112.058,
         24.387
        ],
        [
         111.985,
         24.468
        ],
        [
         112.007,
         24.535
        ],
        [
         111.937,
         24.596
        ],
        [
         111.954,
         24.647
        ],
        [
         111.962,
         24.721
        ],
        [
         111.951,
         24.77
        ],
        [
         111.875,
         24.757
        ],
        [
         111.814,
         24.77
        ],
        [
         111.708,
         24.789
        ],
        [
         111.638,
         24.715
        ],
        [
         111.589,
         24.691
        ],
        [
         111.527,
         24.638
        ],
        [
         111.452,
         24.666
        ],
        [
         111.461,
         24.729
        ],
        [
         111.449,
         24.857
        ],
        [
         111.47,
         24.929
        ],
        [
         111.433,
         24.98
        ],
        [
         111.468,
         25.022
        ],
        [
         111.436,
         25.094
        ],
        [
         111.368,
         25.109
        ],
        [
         111.275,
         25.151
        ],
        [
         111.201,
         25.075
        ],
        [
         111.102,
         25.035
        ],
        [
         111.009,
         24.921
        ],
        [
         110.951,
         25.044
        ],
        [
         110.999,
         25.161
        ],
        [
         111.104,
         25.285
        ],
        [
         111.185,
         25.367
        ],
        [
         111.279,
         25.423
        ],
        [
         111.325,
         25.564
        ],
        [
         111.31,
         25.645
        ],
        [
         111.4,
         25.744
        ],
        [
         111.433,
         25.846
        ],
        [
         111.46,
         25.885
        ],
        [
         111.376,
         25.906
        ],
        [
         111.297,
         25.874
        ],
        [
         111.251,
         25.865
        ],
        [
         111.19,
         25.953
        ],
        [
         111.267,
         26.059
        ],
        [
         111.266,
         26.096
        ],
        [
         111.275,
         26.183
        ],
        [
         111.293,
         26.222
        ],
        [
         111.228,
         26.261
        ],
        [
         111.209,
         26.304
        ],
        [
         111.008,
         26.337
        ],
        [
         110.974,
         26.386
        ],
        [
         110.944,
         26.327
        ],
        [
         110.94,
         26.287
        ],
        [
         110.759,
         26.248
        ],
        [
         110.742,
         26.314
        ],
        [
         110.674,
         26.317
        ],
        [
         110.612,
         26.334
        ],
        [
         110.553,
         26.283
        ],
        [
         110.495,
         26.166
        ],
        [
         110.438,
         26.154
        ],
        [
         110.326,
         25.975
        ],
        [
         110.25,
         26.011
        ],
        [
         110.169,
         26.029
        ],
        [
         110.065,
         26.05
        ],
        [
         110.099,
         26.169
        ],
        [
         109.97,
         26.195
        ],
        [
         109.899,
         26.095
        ],
        [
         109.814,
         26.041
        ],
        [
         109.806,
         25.974
        ],
        [
         109.811,
         25.878
        ],
        [
         109.768,
         25.89
        ],
        [
         109.68,
         25.922
        ],
        [
         109.711,
         25.954
        ],
        [
         109.649,
         26.017
        ],
        [
         109.588,
         26.02
        ],
        [
         109.513,
         25.998
        ]
       ]
      ]
     ]
    },
    "n": "广西壮族自治区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         110.106,
         20.027
        ],
        [
         109.997,
         19.98
        ],
        [
         109.899,
         19.994
        ],
        [
         109.814,
         19.993
        ],
        [
         109.712,
         20.017
        ],
        [
         109.585,
         19.988
        ],
        [
         109.498,
         19.873
        ],
        [
         109.349,
         19.899
        ],
        [
         109.295,
         19.915
        ],
        [
         110.993,
         19.595
        ],
        [
         111.062,
         19.612
        ],
        [
         111.044,
         19.763
        ],
        [
         110.966,
         20.018
        ],
        [
         110.871,
         20.012
        ],
        [
         110.778,
         20.068
        ],
        [
         110.717,
         20.149
        ],
        [
         110.656,
         20.134
        ],
        [
         110.526,
         20.075
        ],
        [
         110.387,
         20.113
        ],
        [
         110.289,
         20.056
        ],
        [
         110.145,
         20.075
        ]
       ]
      ],
      [
       [
        [
         111.203,
         19.926
        ],
        [
         111.204,
         19.926
        ],
        [
         111.203,
         19.926
        ]
       ]
      ]
     ]
    },
    "n": "海南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         109.295,
         27.385
        ],
        [
         109.296,
         25.714
        ],
        [
         109.328,
         25.762
        ],
        [
         109.359,
         25.836
        ],
        [
         109.435,
         25.933
        ],
        [
         109.473,
         26.007
        ],
        [
         109.453,
         26.056
        ],
        [
         109.503,
         26.096
        ],
        [
         109.476,
         26.148
        ],
        [
         109.467,
         26.314
        ],
        [
         109.37,
         26.277
        ],
        [
         109.325,
         26.29
        ],
        [
         109.295,
         26.35
        ],
        [
         109.32,
         26.418
        ],
        [
         109.362,
         26.472
        ],
        [
         109.381,
         26.519
        ],
        [
         109.391,
         26.599
        ],
        [
         109.334,
         26.646
        ],
        [
         109.295,
         26.68
        ],
        [
         109.355,
         26.693
        ],
        [
         109.448,
         26.76
        ],
        [
         109.476,
         26.83
        ],
        [
         109.453,
         26.862
        ],
        [
         109.555,
         26.947
        ],
        [
         109.498,
         27.08
        ],
        [
         109.455,
         27.069
        ],
        [
         109.441,
         27.118
        ],
        [
         109.359,
         27.153
        ],
        [
         109.295,
         27.135
        ]
       ]
      ],
      [
       [
        [
         109.476,
         26.83
        ],
        [
         109.522,
         26.749
        ],
        [
         109.497,
         26.815
        ],
        [
         109.51,
         26.878
        ],
        [
         109.453,
         26.862
        ],
        [
         109.476,
         26.83
        ]
       ]
      ],
      [
       [
        [
         109.529,
         26.744
        ],
        [
         109.597,
         26.756
        ],
        [
         109.529,
         26.744
        ]
       ]
      ]
     ]
    },
    "n": "贵州省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         120.444,
         22.441
        ],
        [
         120.57,
         22.362
        ],
        [
         120.605,
         24.449
        ],
        [
         120.547,
         24.37
        ],
        [
         120.471,
         24.243
        ],
        [
         120.392,
         24.118
        ],
        [
         120.278,
         23.928
        ],
        [
         120.175,
         23.807
        ],
        [
         120.095,
         23.588
        ],
        [
         120.108,
         23.341
        ],
        [
         120.019,
         23.073
        ],
        [
         120.133,
         23.001
        ],
        [
         120.2,
         22.721
        ],
        [
         120.297,
         22.532
        ]
       ]
      ],
      [
       [
        [
         119.646,
         23.551
        ],
        [
         119.678,
         23.6
        ],
        [
         119.602,
         23.576
        ],
        [
         119.562,
         23.531
        ],
        [
         119.609,
         23.504
        ]
       ]
      ],
      [
       [
        [
         119.506,
         23.626
        ],
        [
         119.472,
         23.557
        ],
        [
         119.525,
         23.625
        ]
       ]
      ],
      [
       [
        [
         119.498,
         23.387
        ],
        [
         119.517,
         23.35
        ]
       ]
      ],
      [
       [
        [
         119.557,
         23.667
        ],
        [
         119.615,
         23.661
        ],
        [
         119.557,
         23.667
        ]
       ]
      ],
      [
       [
        [
         119.421,
         23.217
        ],
        [
         119.453,
         23.216
        ]
       ]
      ],
      [
       [
        [
         120.355,
         22.327
        ],
        [
         120.383,
         22.356
        ]
       ]
      ]
     ]
    },
    "n": "台湾省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         114.032,
         22.504
        ],
        [
         113.978,
         22.457
        ],
        [
         113.92,
         22.368
        ],
        [
         113.957,
         22.36
        ],
        [
         114.026,
         22.348
        ],
        [
         113.97,
         22.321
        ],
        [
         113.889,
         22.272
        ],
        [
         113.849,
         22.191
        ],
        [
         113.936,
         22.205
        ],
        [
         113.997,
         22.206
        ],
        [
         114.005,
         22.239
        ],
        [
         114.035,
         22.301
        ],
        [
         114.121,
         22.321
        ],
        [
         114.12,
         22.272
        ],
        [
         114.201,
         22.232
        ],
        [
         114.266,
         22.201
        ],
        [
         114.262,
         22.295
        ],
        [
         114.313,
         22.264
        ],
        [
         114.316,
         22.3
        ],
        [
         114.283,
         22.387
        ],
        [
         114.323,
         22.386
        ],
        [
         114.324,
         22.384
        ],
        [
         114.395,
         22.362
        ],
        [
         114.406,
         22.433
        ],
        [
         114.376,
         22.436
        ],
        [
         114.279,
         22.436
        ],
        [
         114.205,
         22.45
        ],
        [
         114.253,
         22.445
        ],
        [
         114.31,
         22.497
        ],
        [
         114.264,
         22.542
        ],
        [
         114.26,
         22.548
        ],
        [
         114.233,
         22.54
        ],
        [
         114.166,
         22.559
        ],
        [
         114.095,
         22.534
        ],
        [
         114.032,
         22.504
        ]
       ]
      ],
      [
       [
        [
         114.143,
         22.214
        ],
        [
         114.12,
         22.178
        ],
        [
         114.167,
         22.205
        ]
       ]
      ],
      [
       [
        [
         114.306,
         22.372
        ],
        [
         114.333,
         22.353
        ],
        [
         114.306,
         22.372
        ]
       ]
      ],
      [
       [
        [
         114.32,
         22.381
        ],
        [
         114.324,
         22.385
        ],
        [
         114.323,
         22.386
        ],
        [
         114.32,
         22.382
        ]
       ]
      ],
      [
       [
        [
         114.306,
         22.37
        ],
        [
         114.305,
         22.373
        ]
       ]
      ],
      [
       [
        [
         114.316,
         22.299
        ],
        [
         114.316,
         22.3
        ],
        [
         114.316,
         22.299
        ]
       ]
      ],
      [
       [
        [
         114.319,
         22.382
        ],
        [
         114.32,
         22.382
        ]
       ]
      ],
      [
       [
        [
         114.372,
         22.323
        ],
        [
         114.372,
         22.324
        ]
       ]
      ],
      [
       [
        [
         114.324,
         22.298
        ],
        [
         114.324,
         22.298
        ]
       ]
      ]
     ]
    },
    "n": "香港特别行政区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.554,
         22.107
        ],
        [
         113.576,
         22.195
        ],
        [
         113.538,
         22.209
        ],
        [
         113.554,
         22.142
        ]
       ]
      ],
      [
       [
        [
         113.586,
         22.201
        ],
        [
         113.576,
         22.195
        ]
       ]
      ]
     ]
    },
    "n": "澳门特别行政区"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       114.412,
       24.707
      ],
      [
       114.53,
       24.735
      ],
      [
       114.73,
       24.882
      ],
      [
       114.748,
       25.051
      ],
      [
       114.865,
       25.137
      ],
      [
       114.885,
       25.29
      ],
      [
       115.033,
       25.614
      ],
      [
       115.101,
       25.826
      ],
      [
       114.992,
       25.86
      ],
      [
       114.913,
       25.93
      ],
      [
       114.938,
       26.105
      ],
      [
       114.908,
       26.153
      ],
      [
       114.946,
       26.237
      ],
      [
       114.862,
       26.369
      ],
      [
       114.717,
       26.614
      ],
      [
       114.879,
       26.789
      ],
      [
       114.995,
       26.849
      ],
      [
       114.988,
       26.942
      ],
      [
       115.021,
       27.032
      ],
      [
       115.009,
       27.138
      ],
      [
       115.098,
       27.284
      ]
     ]
    },
    "n": "Gan"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       109.295,
       23.692
      ],
      [
       109.369,
       23.746
      ],
      [
       109.469,
       23.847
      ]
     ]
    },
    "n": "Hongshui"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       109.529,
       23.796
      ],
      [
       109.575,
       23.7
      ],
      [
       109.651,
       23.665
      ],
      [
       109.663,
       23.575
      ],
      [
       109.796,
       23.454
      ],
      [
       109.963,
       23.431
      ],
      [
       110.021,
       23.452
      ]
     ]
    },
    "n": "Quan"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        113.035,
        22.795
       ],
       [
        113.166,
        22.576
       ],
       [
        113.264,
        22.363
       ]
      ],
      [
       [
        113.035,
        22.795
       ],
       [
        113.395,
        22.651
       ],
       [
        113.492,
        22.591
       ]
      ],
      [
       [
        112.98,
        23.041
       ],
       [
        113.445,
        23.055
       ]
      ],
      [
       [
        112.805,
        23.148
       ],
       [
        112.891,
        22.918
       ],
       [
        113.035,
        22.795
       ]
      ],
      [
       [
        112.805,
        23.148
       ],
       [
        112.974,
        23.052
       ],
       [
        113.09,
        22.907
       ],
       [
        113.338,
        22.889
       ]
      ],
      [
       [
        111.301,
        23.481
       ],
       [
        111.499,
        23.375
       ],
       [
        111.707,
        23.161
       ],
       [
        112.271,
        23.142
       ],
       [
        112.427,
        23.076
       ],
       [
        112.563,
        23.136
       ],
       [
        112.736,
        23.164
       ]
      ]
     ]
    },
    "n": "Xi"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       110.089,
       23.408
      ],
      [
       110.334,
       23.555
      ],
      [
       110.745,
       23.466
      ],
      [
       110.868,
       23.397
      ],
      [
       111.301,
       23.481
      ]
     ]
    },
    "n": "Xun"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        109.295,
        26.761
       ],
       [
        109.438,
        26.894
       ],
       [
        109.424,
        27.038
       ],
       [
        109.494,
        27.079
       ],
       [
        109.628,
        27.165
       ],
       [
        109.675,
        27.144
       ],
       [
        109.719,
        27.131
       ],
       [
        109.755,
        27.19
       ],
       [
        109.943,
        27.147
       ],
       [
        110.19,
        27.385
       ]
      ]
     ]
    },
    "n": "Yuan"
   }
  ],
  "lakes": [],
  "_bbox": [
   109.295,
   19.595,
   120.605,
   27.385
  ]
 }
};
