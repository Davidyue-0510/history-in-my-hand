// 本文件由 tools/build.py 自动生成（切片 chama_xizang_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["chama_xizang_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["chama_xizang_llm"] = {
 "meta": {
  "kind": "exchange",
  "region": "xibei",
  "province": "xizang",
  "title": "唐蕃·茶马互市",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "changan",
  "dossier_event": "event:ev_chama_xizang_llm_01",
  "vocab_pack": "inline:chama_xizang_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
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
    "note": "唐蕃·茶马互市：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "唐蕃·茶马互市：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "唐蕃·茶马互市：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "唐蕃·茶马互市：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   4,
   6
  ],
  "page": "county.html?scene=chama_xizang_llm",
  "key": "chama_xizang_llm",
  "scene_id": "chama_xizang_llm"
 },
 "sources": [
  {
   "id": "chama_xizang_src",
   "title": "新唐书·吐蕃传（茶马互市）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "欧阳修等",
   "period": "宋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "qingzang",
   "name": "青藏高原",
   "type": "region",
   "modern": "今中国青藏高原",
   "note": "蕃商驱马入塞之地",
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "longyou",
   "name": "陇右",
   "type": "region",
   "modern": "今中国甘肃一带",
   "note": "设互市监，市马之地",
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "changan",
   "name": "长安",
   "type": "city",
   "modern": "今中国陕西西安",
   "note": "唐都，设互市监",
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 108.95,
   "lat": 34.27,
   "geo_note": "唐都，今西安",
   "elev": 436
  }
 ],
 "persons": [
  {
   "id": "CHA__p01",
   "name": "文成公主",
   "role": "唐宗室女",
   "note": "贞观十五年入吐蕃和亲",
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "CHA__p02",
   "name": "松赞干布",
   "role": "吐蕃赞普",
   "note": "迎娶文成公主，唐蕃和好",
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "CHA_001",
   "subject": "event:ev_chama_xizang_llm_01",
   "predicate": "和亲",
   "value_text": "文成公主入吐蕃和亲",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "qingzang",
   "source": "chama_xizang_src",
   "quote": "贞观十五年（641）文成公主入吐蕃",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.45,
   "scale": "empire",
   "note": "[auto] 补层 scholarship",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "贞观十五年（641）文成公主入吐蕃",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_002",
   "subject": "event:ev_chama_xizang_llm_02",
   "predicate": "互市始兴",
   "value_text": "唐蕃互市始兴",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "longyou",
   "source": "chama_xizang_src",
   "quote": "唐蕃通好，互市始兴",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "empire",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "唐蕃通好，互市始兴",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_003",
   "subject": "place:longyou",
   "predicate": "设监",
   "value_text": "陇右设互市监",
   "time": {
    "era_text": "贞观年间",
    "start": "627-01-01",
    "end": "627-12-31",
    "gregorian_year": 627
   },
   "place": "longyou",
   "source": "chama_xizang_src",
   "quote": "长安、陇右设互市监",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "长安、陇右设互市监",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_004",
   "subject": "place:changan",
   "predicate": "设监",
   "value_text": "长安设互市监",
   "time": {
    "era_text": "贞观年间",
    "start": "627-01-01",
    "end": "627-12-31",
    "gregorian_year": 627
   },
   "place": "changan",
   "source": "chama_xizang_src",
   "quote": "长安、陇右设互市监",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "长安、陇右设互市监",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_005",
   "subject": "place:longyou",
   "predicate": "市马",
   "value_text": "岁市吐蕃名马",
   "time": {
    "era_text": "贞观年间",
    "start": "627-01-01",
    "end": "627-12-31",
    "gregorian_year": 627
   },
   "place": "longyou",
   "source": "chama_xizang_src",
   "quote": "岁市吐蕃名马",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "岁市吐蕃名马",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_006",
   "subject": "place:longyou",
   "predicate": "酬以缣帛",
   "value_text": "酬以缣帛、茶叶",
   "time": {
    "era_text": "贞观年间",
    "start": "627-01-01",
    "end": "627-12-31",
    "gregorian_year": 627
   },
   "place": "longyou",
   "source": "chama_xizang_src",
   "quote": "酬以缣帛、茶叶",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "酬以缣帛、茶叶",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_007",
   "subject": "place:qingzang",
   "predicate": "蕃商驱马",
   "value_text": "蕃商驱马入塞",
   "time": {
    "era_text": "贞观年间",
    "start": "627-01-01",
    "end": "627-12-31",
    "gregorian_year": 627
   },
   "place": "qingzang",
   "source": "chama_xizang_src",
   "quote": "蕃商驱马入塞",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "蕃商驱马入塞",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_008",
   "subject": "place:changan",
   "predicate": "汉贾出茶",
   "value_text": "汉贾出茶于市",
   "time": {
    "era_text": "贞观年间",
    "start": "627-01-01",
    "end": "627-12-31",
    "gregorian_year": 627
   },
   "place": "changan",
   "source": "chama_xizang_src",
   "quote": "汉贾出茶于市",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "汉贾出茶于市",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_009",
   "subject": "place:qingzang",
   "predicate": "往来不绝",
   "value_text": "往来不绝数百年",
   "time": {
    "era_text": "唐蕃时期",
    "start": "0618"
   },
   "place": "qingzang",
   "source": "chama_xizang_src",
   "quote": "往来不绝，数百年间",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "往来不绝，数百年间",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_010",
   "subject": "place:longyou",
   "predicate": "要政",
   "value_text": "汉藏相依之要政",
   "time": {
    "era_text": "唐蕃时期",
    "start": "0618"
   },
   "place": "longyou",
   "source": "chama_xizang_src",
   "quote": "汉藏相依之要政",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "汉藏相依之要政",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_011",
   "subject": "place:qingzang",
   "predicate": "嗜茶",
   "value_text": "高原之民嗜茶",
   "time": {
    "era_text": "唐蕃时期",
    "start": "0618"
   },
   "place": "qingzang",
   "source": "chama_xizang_src",
   "quote": "高原之民嗜茶",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "高原之民嗜茶",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_012",
   "subject": "place:changan",
   "predicate": "需马",
   "value_text": "中原需良马",
   "time": {
    "era_text": "唐蕃时期",
    "start": "0618"
   },
   "place": "changan",
   "source": "chama_xizang_src",
   "quote": "中原需良马",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "中原需良马",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_013",
   "subject": "event:ev_chama_xizang_llm_02",
   "predicate": "贸易路线",
   "value_text": "沿青藏高原与陇右通道",
   "time": {
    "era_text": "唐蕃时期",
    "start": "0618"
   },
   "place": "longyou",
   "source": "chama_xizang_src",
   "quote": "沿青藏高原与陇右通道",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "沿青藏高原与陇右通道",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_014",
   "subject": "event:ev_chama_xizang_llm_01",
   "predicate": "通好",
   "value_text": "唐蕃通好",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "qingzang",
   "source": "chama_xizang_src",
   "quote": "唐蕃通好",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "唐蕃通好",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_015",
   "subject": "event:ev_chama_xizang_llm_02",
   "predicate": "贸易规模",
   "value_text": "茶马之贸渐盛",
   "time": {
    "era_text": "贞观年间",
    "start": "627-01-01",
    "end": "627-12-31",
    "gregorian_year": 627
   },
   "place": "longyou",
   "source": "chama_xizang_src",
   "quote": "以茶易马之贸渐盛",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以茶易马之贸渐盛",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_GAP_01",
   "subject": "event:ev_chama_xizang_llm_02",
   "predicate": "贸易规模与管理机构",
   "value_text": "吐蕃时期茶马互市的年贸易量、茶马比价与专设管理机构，汉藏传世史料缺系统记载，仅能据互市监设置与零星使节往来推知",
   "time": {
    "era_text": "唐蕃时期",
    "start": "650-01-01",
    "end": "850-12-31",
    "gregorian_year": 700
   },
   "place": "qingzang",
   "source": "chama_xizang_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载（缺口一等公民）",
   "dims": [
    3
   ],
   "lead": {
    "where": "青藏高原",
    "skills": [
     "经济史",
     "民族史"
    ],
    "accept": "吐蕃时期茶马互市的年贸易量、茶马比价与专设管理机构的系统记载"
   },
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "CHA_GAP_01"
 ],
 "events": [
  {
   "id": "ev_chama_xizang_llm_01",
   "subject": "event:ev_chama_xizang_llm_01",
   "year": 641,
   "era": "贞观十五年",
   "title": "文成公主入蕃",
   "kind": "外交",
   "text": "文成公主入吐蕃，唐蕃通好",
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_chama_xizang_llm_02",
   "subject": "event:ev_chama_xizang_llm_02",
   "year": 641,
   "era": "贞观十五年",
   "title": "互市始兴",
   "kind": "行政",
   "text": "唐蕃互市始兴，茶马贸易渐盛",
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "qingzang",
   "to": "longyou",
   "type": "military",
   "label": "蕃商驱马入塞路线",
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "changan",
   "to": "longyou",
   "type": "military",
   "label": "汉贾出茶于市路线",
   "_source_idx": 0,
   "_source_name": "新唐书·吐蕃传（茶马互市）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "qingzang",
   "party": "后世官修",
   "start": 618,
   "end": 641,
   "timeline": "main"
  },
  {
   "place_id": "longyou",
   "party": "后世官修",
   "start": 618,
   "end": 641,
   "timeline": "main"
  },
  {
   "place_id": "changan",
   "party": "后世官修",
   "start": 618,
   "end": 641,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "changan",
   "name": "长安",
   "lon": 108.95,
   "lat": 34.27,
   "region": "xibei"
  }
 ],
 "control_years": [
  618,
  641
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
        107.95,
        33.27
       ],
       [
        107.95,
        35.27
       ],
       [
        109.95,
        35.27
       ],
       [
        109.95,
        33.27
       ],
       [
        107.95,
        33.27
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
         109.627,
         33.27
        ],
        [
         109.62,
         33.275
        ],
        [
         109.618,
         33.27
        ],
        [
         109.627,
         33.27
        ]
       ]
      ]
     ]
    },
    "n": "湖北省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         109.95,
         33.27
        ],
        [
         109.95,
         35.27
        ],
        [
         108.3,
         35.27
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
         108.233,
         35.27
        ],
        [
         108.077,
         35.27
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
         107.95,
         35.245
        ],
        [
         107.96,
         35.263
        ],
        [
         107.95,
         35.263
        ],
        [
         107.95,
         33.27
        ],
        [
         109.618,
         33.27
        ],
        [
         109.62,
         33.275
        ],
        [
         109.627,
         33.27
        ],
        [
         109.95,
         33.27
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
         107.95,
         35.27
        ],
        [
         107.95,
         35.263
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
         107.95,
         35.245
        ],
        [
         108.049,
         35.254
        ],
        [
         108.077,
         35.27
        ],
        [
         108.233,
         35.27
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
         108.3,
         35.27
        ],
        [
         107.95,
         35.27
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   107.95,
   33.27,
   109.95,
   35.27
  ]
 }
};
