// 本文件由 tools/build.py 自动生成（切片 yunnan_lianda_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["yunnan_lianda_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["yunnan_lianda_llm"] = {
 "meta": {
  "kind": "thought",
  "region": "yunnan",
  "province": "yunnan",
  "title": "西南联大与战时自由主义学术（1937—1946）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "kunming",
  "dossier_event": "event:ev_yunnan_lianda_llm_01",
  "vocab_pack": "inline:yunnan_lianda_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "qing_modern",
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
    "note": "西南联大与战时自由主义学术（1937—1946）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "西南联大与战时自由主义学术（1937—1946）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "西南联大与战时自由主义学术（1937—1946）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "international"
    ],
    "from_dims": [
     6,
     5
    ],
    "layer": "inference",
    "note": "西南联大与战时自由主义学术（1937—1946）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   2,
   4,
   5,
   6
  ],
  "page": "county.html?scene=yunnan_lianda_llm",
  "key": "yunnan_lianda_llm",
  "scene_id": "yunnan_lianda_llm"
 },
 "sources": [
  {
   "id": "yunnan_lianda_src",
   "title": "国立西南联合大学纪念碑 / 联大校史",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "西南联大校史编委会",
   "period": "现代",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "kunming",
   "name": "昆明",
   "type": "city",
   "modern": "中国云南省昆明市",
   "note": "西南联大所在地",
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 102.83,
   "lat": 24.88,
   "geo_note": "今云南昆明市",
   "elev": 2115
  }
 ],
 "persons": [
  {
   "id": "YUN__p01",
   "name": "闻一多",
   "role": "西南联大教授",
   "note": "讲学自由，民主斗士",
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "YUN__p02",
   "name": "冯友兰",
   "role": "西南联大教授",
   "note": "哲学系，著《贞元六书》",
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "YUN__p03",
   "name": "金岳霖",
   "role": "西南联大教授",
   "note": "逻辑学家",
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "YUN_001",
   "subject": "event:ev_yunnan_lianda_llm_01",
   "predicate": "成立",
   "value_text": "三校合组西南联大",
   "time": {
    "era_text": "一九三八年",
    "start": "1938"
   },
   "place": "kunming",
   "source": "yunnan_lianda_src",
   "quote": "一九三八年合组西南联大于昆明",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.475,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "一九三八年合组西南联大于昆明",
   "source_text": "抗战军兴，北大、清华、南开南迁，一九三八年合组西南联大于昆明，『刚毅坚卓』为校训。『万物并育而不相害』，师生弦歌不辍，闻一多、冯友兰、金岳霖辈讲学自由；『兼容并包，学术独立』，为战时中国思想学术之灯塔。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_002",
   "subject": "event:ev_yunnan_lianda_llm_01",
   "predicate": "校训",
   "value_text": "刚毅坚卓",
   "time": {
    "era_text": "一九三八年",
    "start": "1938"
   },
   "place": "kunming",
   "source": "yunnan_lianda_src",
   "quote": "『刚毅坚卓』为校训",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "『刚毅坚卓』为校训",
   "source_text": "抗战军兴，北大、清华、南开南迁，一九三八年合组西南联大于昆明，『刚毅坚卓』为校训。『万物并育而不相害』，师生弦歌不辍，闻一多、冯友兰、金岳霖辈讲学自由；『兼容并包，学术独立』，为战时中国思想学术之灯塔。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_003",
   "subject": "person:YUN__p01",
   "predicate": "讲学",
   "value_text": "闻一多讲学自由",
   "time": {
    "era_text": "抗战时期",
    "start": "1937"
   },
   "place": "kunming",
   "source": "yunnan_lianda_src",
   "quote": "闻一多、冯友兰、金岳霖辈讲学自由",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "闻一多、冯友兰、金岳霖辈讲学自由",
   "source_text": "抗战军兴，北大、清华、南开南迁，一九三八年合组西南联大于昆明，『刚毅坚卓』为校训。『万物并育而不相害』，师生弦歌不辍，闻一多、冯友兰、金岳霖辈讲学自由；『兼容并包，学术独立』，为战时中国思想学术之灯塔。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_004",
   "subject": "person:YUN__p02",
   "predicate": "讲学",
   "value_text": "冯友兰讲学自由",
   "time": {
    "era_text": "抗战时期",
    "start": "1937"
   },
   "place": "kunming",
   "source": "yunnan_lianda_src",
   "quote": "闻一多、冯友兰、金岳霖辈讲学自由",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "闻一多、冯友兰、金岳霖辈讲学自由",
   "source_text": "抗战军兴，北大、清华、南开南迁，一九三八年合组西南联大于昆明，『刚毅坚卓』为校训。『万物并育而不相害』，师生弦歌不辍，闻一多、冯友兰、金岳霖辈讲学自由；『兼容并包，学术独立』，为战时中国思想学术之灯塔。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_005",
   "subject": "person:YUN__p03",
   "predicate": "讲学",
   "value_text": "金岳霖讲学自由",
   "time": {
    "era_text": "抗战时期",
    "start": "1937"
   },
   "place": "kunming",
   "source": "yunnan_lianda_src",
   "quote": "闻一多、冯友兰、金岳霖辈讲学自由",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "闻一多、冯友兰、金岳霖辈讲学自由",
   "source_text": "抗战军兴，北大、清华、南开南迁，一九三八年合组西南联大于昆明，『刚毅坚卓』为校训。『万物并育而不相害』，师生弦歌不辍，闻一多、冯友兰、金岳霖辈讲学自由；『兼容并包，学术独立』，为战时中国思想学术之灯塔。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_006",
   "subject": "event:ev_yunnan_lianda_llm_01",
   "predicate": "理念",
   "value_text": "万物并育而不相害",
   "time": {
    "era_text": "抗战时期",
    "start": "1937"
   },
   "place": "kunming",
   "source": "yunnan_lianda_src",
   "quote": "『万物并育而不相害』",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "『万物并育而不相害』",
   "source_text": "抗战军兴，北大、清华、南开南迁，一九三八年合组西南联大于昆明，『刚毅坚卓』为校训。『万物并育而不相害』，师生弦歌不辍，闻一多、冯友兰、金岳霖辈讲学自由；『兼容并包，学术独立』，为战时中国思想学术之灯塔。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_007",
   "subject": "event:ev_yunnan_lianda_llm_01",
   "predicate": "理念",
   "value_text": "兼容并包，学术独立",
   "time": {
    "era_text": "抗战时期",
    "start": "1937"
   },
   "place": "kunming",
   "source": "yunnan_lianda_src",
   "quote": "『兼容并包，学术独立』",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "『兼容并包，学术独立』",
   "source_text": "抗战军兴，北大、清华、南开南迁，一九三八年合组西南联大于昆明，『刚毅坚卓』为校训。『万物并育而不相害』，师生弦歌不辍，闻一多、冯友兰、金岳霖辈讲学自由；『兼容并包，学术独立』，为战时中国思想学术之灯塔。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_008",
   "subject": "event:ev_yunnan_lianda_llm_01",
   "predicate": "地位",
   "value_text": "战时中国思想学术之灯塔",
   "time": {
    "era_text": "抗战时期",
    "start": "1937"
   },
   "place": "kunming",
   "source": "yunnan_lianda_src",
   "quote": "为战时中国思想学术之灯塔",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为战时中国思想学术之灯塔",
   "source_text": "抗战军兴，北大、清华、南开南迁，一九三八年合组西南联大于昆明，『刚毅坚卓』为校训。『万物并育而不相害』，师生弦歌不辍，闻一多、冯友兰、金岳霖辈讲学自由；『兼容并包，学术独立』，为战时中国思想学术之灯塔。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_009",
   "subject": "event:ev_yunnan_lianda_llm_01",
   "predicate": "学术风格",
   "value_text": "自由主义学术繁荣",
   "time": {
    "era_text": "抗战时期",
    "start": "1937"
   },
   "place": "kunming",
   "source": "yunnan_lianda_src",
   "quote": "讲学自由",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学界共识",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "讲学自由",
   "source_text": "抗战军兴，北大、清华、南开南迁，一九三八年合组西南联大于昆明，『刚毅坚卓』为校训。『万物并育而不相害』，师生弦歌不辍，闻一多、冯友兰、金岳霖辈讲学自由；『兼容并包，学术独立』，为战时中国思想学术之灯塔。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_010",
   "subject": "event:ev_yunnan_lianda_llm_01",
   "predicate": "影响",
   "value_text": "培养大批人才",
   "time": {
    "era_text": "抗战时期",
    "start": "1937"
   },
   "place": "kunming",
   "source": "yunnan_lianda_src",
   "quote": "弦歌不辍",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "后续研究",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "弦歌不辍",
   "source_text": "抗战军兴，北大、清华、南开南迁，一九三八年合组西南联大于昆明，『刚毅坚卓』为校训。『万物并育而不相害』，师生弦歌不辍，闻一多、冯友兰、金岳霖辈讲学自由；『兼容并包，学术独立』，为战时中国思想学术之灯塔。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_011",
   "subject": "event:ev_yunnan_lianda_llm_01",
   "predicate": "具体课程",
   "value_text": "课程内容未详",
   "time": {
    "era_text": "抗战时期",
    "start": "1937"
   },
   "place": "kunming",
   "source": "yunnan_lianda_src",
   "quote": "讲学自由",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "待考",
   "dims": [
    5
   ],
   "lead": {
    "where": "西南联大档案",
    "skills": [
     "历史档案学"
    ],
    "accept": "补充课程记录"
   },
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "讲学自由",
   "source_text": "抗战军兴，北大、清华、南开南迁，一九三八年合组西南联大于昆明，『刚毅坚卓』为校训。『万物并育而不相害』，师生弦歌不辍，闻一多、冯友兰、金岳霖辈讲学自由；『兼容并包，学术独立』，为战时中国思想学术之灯塔。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_012",
   "subject": "event:ev_yunnan_lianda_llm_02",
   "predicate": "结束时间",
   "value_text": "一九四六年结束",
   "time": {
    "era_text": "一九四六年",
    "start": "1946"
   },
   "place": "kunming",
   "source": "yunnan_lianda_src",
   "quote": "抗战胜利后复员",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "抗战胜利后复员",
   "source_text": "抗战军兴，北大、清华、南开南迁，一九三八年合组西南联大于昆明，『刚毅坚卓』为校训。『万物并育而不相害』，师生弦歌不辍，闻一多、冯友兰、金岳霖辈讲学自由；『兼容并包，学术独立』，为战时中国思想学术之灯塔。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "yunnan_lianda_llm_DIM2",
   "subject": "技术:城防营造",
   "predicate": "技术维度",
   "value_text": "西南联大与战时自由主义学术（1937—1946） 的史料涉及城防营造（「独立』，为战时中国思想学术之灯塔。\", \"dim_source」），补标技术维度（推断）。",
   "time": {
    "era_text": "一九三八年",
    "start": "1938"
   },
   "place": "kunming",
   "source": "yunnan_lianda_src",
   "quote": "「独立』，为战时中国思想学术之灯塔。\", \"dim_source」",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "province",
   "note": "[auto] 补层 inference dim2（诚实回填：文本含技术关键词）",
   "dims": [
    2
   ],
   "dim_source": "inferred",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_yunnan_lianda_llm_01|理念",
   "subject": "event:ev_yunnan_lianda_llm_01",
   "predicate": "理念",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "YUN_006",
    "YUN_007"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "YUN_011"
 ],
 "events": [
  {
   "id": "ev_yunnan_lianda_llm_01",
   "subject": "event:ev_yunnan_lianda_llm_01",
   "year": 1938,
   "era": "民国二十七年",
   "title": "西南联大成立",
   "kind": "建置",
   "text": "北大清华南开合组西南联大于昆明",
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_yunnan_lianda_llm_02",
   "subject": "event:ev_yunnan_lianda_llm_02",
   "year": 1946,
   "era": "民国三十五年",
   "title": "西南联大结束",
   "kind": "其他",
   "text": "抗战胜利后三校复员北返",
   "_source_idx": 0,
   "_source_name": "国立西南联合大学纪念碑 / 联大校史",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "kunming",
   "party": "后世官修",
   "start": 1937,
   "end": 1946,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "kunming",
   "name": "昆明",
   "lon": 102.83,
   "lat": 24.88,
   "region": "yunnan"
  }
 ],
 "control_years": [
  1937,
  1946
 ],
 "vocab": {
  "layers": {
   "record": "原始史料",
   "scholarship": "学界研究",
   "inference": "合理推断",
   "gap": "证据缺口"
  },
  "quote_status": {
   "verbatim": "直接引文",
   "paraphrase_unverified": "转述待核",
   "generated": "生成"
  },
  "parties": [
   "后世官修"
  ],
  "party_bucket": {
   "后世官修": "后世官修"
  },
  "party_colors": {
   "后世官修": "#A0473A"
  },
  "factions": {
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_后世官修": "#A0473A"
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
        101.83,
        23.88
       ],
       [
        101.83,
        25.88
       ],
       [
        103.83,
        25.88
       ],
       [
        103.83,
        23.88
       ],
       [
        101.83,
        23.88
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
         101.83,
         25.88
        ],
        [
         101.83,
         23.88
        ],
        [
         103.83,
         23.88
        ],
        [
         103.83,
         25.88
        ],
        [
         101.83,
         25.88
        ]
       ]
      ]
     ]
    },
    "n": "云南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       103.83,
       25.161
      ],
      [
       103.81,
       25.129
      ],
      [
       103.713,
       25.048
      ],
      [
       103.488,
       24.939
      ],
      [
       103.448,
       24.935
      ],
      [
       103.416,
       24.955
      ],
      [
       103.392,
       25.0
      ],
      [
       103.326,
       25.013
      ],
      [
       103.219,
       24.994
      ],
      [
       103.165,
       24.944
      ],
      [
       103.165,
       24.863
      ],
      [
       103.132,
       24.774
      ],
      [
       103.064,
       24.677
      ],
      [
       103.053,
       24.609
      ],
      [
       103.098,
       24.57
      ],
      [
       103.105,
       24.52
      ],
      [
       103.074,
       24.458
      ],
      [
       103.08,
       24.321
      ],
      [
       103.146,
       24.004
      ],
      [
       103.168,
       23.88
      ],
      [
       103.525,
       23.88
      ],
      [
       103.527,
       23.88
      ],
      [
       103.61,
       23.916
      ],
      [
       103.626,
       23.97
      ],
      [
       103.619,
       24.02
      ],
      [
       103.59,
       24.065
      ],
      [
       103.591,
       24.11
      ],
      [
       103.623,
       24.153
      ],
      [
       103.674,
       24.185
      ],
      [
       103.746,
       24.204
      ],
      [
       103.825,
       24.27
      ],
      [
       103.83,
       24.277
      ]
     ]
    },
    "n": "Nanpan"
   }
  ],
  "lakes": [],
  "_bbox": [
   101.83,
   23.88,
   103.83,
   25.88
  ]
 }
};
