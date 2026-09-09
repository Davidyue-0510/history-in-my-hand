// 本文件由 tools/build.py 自动生成（切片 zhejiang_yongjia_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zhejiang_yongjia_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zhejiang_yongjia_llm"] = {
 "meta": {
  "kind": "thought",
  "region": "jiangnan",
  "province": "zhejiang",
  "title": "永嘉事功学派·陈亮叶适（宋）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "yongkang",
  "dossier_event": "event:ev_zhejiang_yongjia_llm_01",
  "vocab_pack": "inline:zhejiang_yongjia_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "song",
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
    "note": "永嘉事功学派·陈亮叶适（宋）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "永嘉事功学派·陈亮叶适（宋）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "永嘉事功学派·陈亮叶适（宋）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "永嘉事功学派·陈亮叶适（宋）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   5,
   6
  ],
  "page": "county.html?scene=zhejiang_yongjia_llm",
  "key": "zhejiang_yongjia_llm",
  "scene_id": "zhejiang_yongjia_llm"
 },
 "sources": [
  {
   "id": "zhejiang_yongjia_src",
   "title": "龙川文集 / 水心文集",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "陈傅良等",
   "period": "宋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "yongkang",
   "name": "永康",
   "type": "city",
   "modern": "今浙江永康",
   "note": "陈亮故里",
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 120.02,
   "lat": 29.9,
   "geo_note": "今浙江永康市",
   "elev": 337
  },
  {
   "id": "yongjia",
   "name": "永嘉",
   "type": "city",
   "modern": "今浙江温州",
   "note": "叶适故里",
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 120.67,
   "lat": 28.13,
   "geo_note": "今浙江温州（古永嘉）",
   "elev": 298
  }
 ],
 "persons": [
  {
   "id": "ZHE__p01",
   "name": "陈亮",
   "role": "永康学派创始人",
   "note": "倡事功之学，与朱熹辩王霸义利",
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 9
  },
  {
   "id": "ZHE__p02",
   "name": "叶适",
   "role": "永嘉学派集大成者",
   "note": "主事功，讲求实利",
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 2
  },
  {
   "id": "ZHE__p03",
   "name": "朱熹",
   "role": "理学家",
   "note": "与陈亮辩王霸义利",
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 3
  }
 ],
 "assertions": [
  {
   "id": "ZHE_001",
   "subject": "person:ZHE__p01",
   "predicate": "主张",
   "value_text": "道在器中，事功即德",
   "time": {
    "era_text": "淳熙年间",
    "start": "1174-01-01",
    "end": "1174-12-31",
    "gregorian_year": 1174
   },
   "place": "yongkang",
   "source": "zhejiang_yongjia_src",
   "quote": "功到成处，便是有德",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.4,
   "scale": "province",
   "note": "[alias] person:陈亮 → ZHE__p01 (name_match) | [auto] 补层 scholarship",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "功到成处，便是有德",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_002",
   "subject": "person:ZHE__p02",
   "predicate": "主张",
   "value_text": "通商惠工，讲求实利",
   "time": {
    "era_text": "淳熙年间",
    "start": "1174-01-01",
    "end": "1174-12-31",
    "gregorian_year": 1174
   },
   "place": "yongjia",
   "source": "zhejiang_yongjia_src",
   "quote": "通商惠工，讲求实利",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[alias] person:叶适 → ZHE__p02 (name_match) | [auto] 补层 inference",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "通商惠工，讲求实利",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_003",
   "subject": "person:ZHE__p01",
   "predicate": "批评对象",
   "value_text": "讥空谈性命",
   "time": {
    "era_text": "淳熙年间",
    "start": "1174-01-01",
    "end": "1174-12-31",
    "gregorian_year": 1174
   },
   "place": "yongkang",
   "source": "zhejiang_yongjia_src",
   "quote": "讥空谈性命",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "[alias] person:陈亮 → ZHE__p01 (name_match)",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "讥空谈性命",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_004",
   "subject": "person:ZHE__p03",
   "predicate": "主张",
   "value_text": "存天理，灭人欲",
   "time": {
    "era_text": "淳熙年间",
    "start": "1174-01-01",
    "end": "1174-12-31",
    "gregorian_year": 1174
   },
   "place": "yongkang",
   "source": "zhejiang_yongjia_src",
   "quote": "存天理，灭人欲",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "[alias] person:朱熹 → ZHE__p03 (name_match)",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "存天理，灭人欲",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_005",
   "subject": "person:ZHE__p01",
   "predicate": "与朱熹关系",
   "value_text": "往复辩论王霸义利",
   "time": {
    "era_text": "淳熙九年",
    "start": "1182-01-01",
    "end": "1182-12-31",
    "gregorian_year": 1182
   },
   "place": "yongkang",
   "source": "zhejiang_yongjia_src",
   "quote": "往复不已",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "[alias] person:陈亮 → ZHE__p01 (name_match)",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "往复不已",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_006",
   "subject": "person:ZHE__p02",
   "predicate": "学派归属",
   "value_text": "永嘉学派集大成者",
   "time": {
    "era_text": "淳熙年间",
    "start": "1174-01-01",
    "end": "1174-12-31",
    "gregorian_year": 1174
   },
   "place": "yongjia",
   "source": "zhejiang_yongjia_src",
   "quote": "永嘉学派",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "[alias] person:叶适 → ZHE__p02 (name_match)",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "永嘉学派",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_007",
   "subject": "person:ZHE__p01",
   "predicate": "学派归属",
   "value_text": "永康学派创始人",
   "time": {
    "era_text": "淳熙年间",
    "start": "1174-01-01",
    "end": "1174-12-31",
    "gregorian_year": 1174
   },
   "place": "yongkang",
   "source": "zhejiang_yongjia_src",
   "quote": "陈亮（永康）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "[alias] person:陈亮 → ZHE__p01 (name_match)",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "陈亮（永康）",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_008",
   "subject": "person:ZHE__p01",
   "predicate": "核心命题",
   "value_text": "道在器中",
   "time": {
    "era_text": "淳熙年间",
    "start": "1174-01-01",
    "end": "1174-12-31",
    "gregorian_year": 1174
   },
   "place": "yongkang",
   "source": "zhejiang_yongjia_src",
   "quote": "道在器中",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "[alias] person:陈亮 → ZHE__p01 (name_match)",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "道在器中",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_009",
   "subject": "person:ZHE__p02",
   "predicate": "核心命题",
   "value_text": "道在器中",
   "time": {
    "era_text": "淳熙年间",
    "start": "1174-01-01",
    "end": "1174-12-31",
    "gregorian_year": 1174
   },
   "place": "yongjia",
   "source": "zhejiang_yongjia_src",
   "quote": "道在器中",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "[alias] person:叶适 → ZHE__p02 (name_match)",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "道在器中",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_010",
   "subject": "person:ZHE__p01",
   "predicate": "与朱熹分歧",
   "value_text": "王霸义利之辨",
   "time": {
    "era_text": "淳熙九年",
    "start": "1182-01-01",
    "end": "1182-12-31",
    "gregorian_year": 1182
   },
   "place": "yongkang",
   "source": "zhejiang_yongjia_src",
   "quote": "王霸义利之辨",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "[alias] person:陈亮 → ZHE__p01 (name_match)",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "王霸义利之辨",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_011",
   "subject": "person:ZHE__p03",
   "predicate": "与陈亮分歧",
   "value_text": "王霸义利之辨",
   "time": {
    "era_text": "淳熙九年",
    "start": "1182-01-01",
    "end": "1182-12-31",
    "gregorian_year": 1182
   },
   "place": "yongkang",
   "source": "zhejiang_yongjia_src",
   "quote": "王霸义利之辨",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "[alias] person:朱熹 → ZHE__p03 (name_match)",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "王霸义利之辨",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_012",
   "subject": "person:ZHE__p01",
   "predicate": "与朱熹分歧",
   "value_text": "义利观不同",
   "time": {
    "era_text": "淳熙九年",
    "start": "1182-01-01",
    "end": "1182-12-31",
    "gregorian_year": 1182
   },
   "place": "yongkang",
   "source": "zhejiang_yongjia_src",
   "quote": "功到成处，便是有德",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "[alias] person:陈亮 → ZHE__p01 (name_match)",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "功到成处，便是有德",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_013",
   "subject": "person:ZHE__p03",
   "predicate": "与陈亮分歧",
   "value_text": "义利观不同",
   "time": {
    "era_text": "淳熙九年",
    "start": "1182-01-01",
    "end": "1182-12-31",
    "gregorian_year": 1182
   },
   "place": "yongkang",
   "source": "zhejiang_yongjia_src",
   "quote": "存天理，灭人欲",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "[alias] person:朱熹 → ZHE__p03 (name_match)",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "存天理，灭人欲",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_014",
   "subject": "person:ZHE__p01",
   "predicate": "与朱熹分歧",
   "value_text": "王霸义利之辨",
   "time": {
    "era_text": "淳熙九年",
    "start": "1182-01-01",
    "end": "1182-12-31",
    "gregorian_year": 1182
   },
   "place": "yongkang",
   "source": "zhejiang_yongjia_src",
   "quote": "王霸义利之辨",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "[alias] person:陈亮 → ZHE__p01 (name_match)",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "王霸义利之辨",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_015",
   "subject": "person:ZHE__p01",
   "predicate": "与朱熹分歧",
   "value_text": "王霸义利之辨",
   "time": {
    "era_text": "淳熙九年",
    "start": "1182-01-01",
    "end": "1182-12-31",
    "gregorian_year": 1182
   },
   "place": "yongkang",
   "source": "zhejiang_yongjia_src",
   "quote": "王霸义利之辨",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "[alias] person:陈亮 → ZHE__p01 (name_match)",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "王霸义利之辨",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "zhejiang_yongjia_llm_EV01",
   "subject": "event:ev_zhejiang_yongjia_llm_01",
   "predicate": "沿革",
   "value_text": "永嘉事功学派·陈亮叶适（宋）。",
   "time": {
    "era_text": "淳熙年间",
    "start": "1174-01-01",
    "end": "1174-12-31",
    "gregorian_year": 1174
   },
   "place": "",
   "source": "zhejiang_yongjia_src",
   "quote": "永嘉事功学派·陈亮叶适（宋）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:陈亮 → ZHE__p01 (name_match) | [auto] 补层 scholarship",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "龙川文集 / 水心文集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "功到成处，便是有德",
   "source_text": "陈亮（永康）、叶适（永嘉）倡事功之学，『道在器中』，讥空谈性命。陈亮与朱熹『王霸义利之辨』往复不已，主『功到成处，便是有德』。永嘉学派『通商惠工，讲求实利』，与朱陆理心二学鼎足，浙东学术之实学传统由是立。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:person:ZHE__p01|与朱熹分歧",
   "subject": "person:ZHE__p01",
   "predicate": "与朱熹分歧",
   "kind": "record_vs_record",
   "count": 4,
   "spread": null,
   "assertion_ids": [
    "ZHE_010",
    "ZHE_012",
    "ZHE_014",
    "ZHE_015"
   ]
  },
  {
   "id": "cf:person:ZHE__p03|与陈亮分歧",
   "subject": "person:ZHE__p03",
   "predicate": "与陈亮分歧",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "ZHE_011",
    "ZHE_013"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_zhejiang_yongjia_llm_01",
   "subject": "event:ev_zhejiang_yongjia_llm_01",
   "year": {
    "era_text": "淳熙年间",
    "start": "1174"
   },
   "era": "song",
   "title": "永嘉事功学派·陈亮叶适（宋）",
   "kind": "沿革",
   "text": "永嘉事功学派·陈亮叶适（宋）。"
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "yongkang",
   "party": "后世官修",
   "start": 1174,
   "end": 1182,
   "timeline": "main"
  },
  {
   "place_id": "yongjia",
   "party": "后世官修",
   "start": 1174,
   "end": 1182,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "yongkang",
   "name": "永康",
   "lon": 120.02,
   "lat": 29.9,
   "region": "jiangnan"
  },
  {
   "place_id": "yongjia",
   "name": "永嘉",
   "lon": 120.67,
   "lat": 28.13,
   "region": "jiangnan"
  }
 ],
 "control_years": [
  1174,
  1182
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
  "coastline": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       121.205,
       28.204
      ],
      [
       121.134,
       28.135
      ],
      [
       121.132,
       28.063
      ],
      [
       121.164,
       28.062
      ],
      [
       121.251,
       28.086
      ],
      [
       121.251,
       28.145
      ],
      [
       121.234,
       28.181
      ],
      [
       121.205,
       28.204
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
        120.338,
        27.13
       ],
       [
        120.385,
        27.156
       ],
       [
        120.469,
        27.256
       ],
       [
        120.54,
        27.318
       ],
       [
        120.608,
        27.412
       ],
       [
        120.629,
        27.482
       ],
       [
        120.588,
        27.581
       ],
       [
        120.665,
        27.639
       ],
       [
        120.661,
        27.688
       ],
       [
        120.685,
        27.745
       ],
       [
        120.833,
        27.891
       ],
       [
        120.833,
        27.938
       ],
       [
        120.763,
        27.977
       ],
       [
        120.748,
        28.01
       ],
       [
        120.813,
        28.013
       ],
       [
        120.892,
        28.004
       ],
       [
        120.959,
        28.037
       ],
       [
        121.035,
        28.157
       ],
       [
        121.098,
        28.291
       ],
       [
        121.146,
        28.327
       ],
       [
        121.217,
        28.346
       ],
       [
        121.272,
        28.222
       ],
       [
        121.355,
        28.23
       ],
       [
        121.51,
        28.324
       ],
       [
        121.61,
        28.292
       ],
       [
        121.602,
        28.367
       ],
       [
        121.538,
        28.521
       ],
       [
        121.475,
        28.641
       ],
       [
        121.519,
        28.714
       ],
       [
        121.59,
        28.735
       ],
       [
        121.63,
        28.768
       ],
       [
        121.662,
        28.851
       ],
       [
        121.54,
        28.932
       ],
       [
        121.641,
        28.916
       ],
       [
        121.67,
        28.944
       ],
       [
        121.67,
        28.991
       ],
       [
        121.665,
        29.011
       ],
       [
        121.521,
        29.118
       ],
       [
        121.448,
        29.131
       ],
       [
        121.487,
        29.193
       ],
       [
        121.534,
        29.237
       ],
       [
        121.656,
        29.236
       ],
       [
        121.67,
        29.241
       ],
       [
        121.67,
        29.508
       ],
       [
        121.506,
        29.485
       ],
       [
        121.575,
        29.537
       ],
       [
        121.67,
        29.581
       ],
       [
        121.67,
        29.987
       ],
       [
        121.433,
        30.227
       ],
       [
        121.341,
        30.282
       ],
       [
        121.258,
        30.304
       ],
       [
        121.159,
        30.302
       ],
       [
        120.904,
        30.161
       ],
       [
        120.633,
        30.133
       ],
       [
        120.495,
        30.303
       ],
       [
        120.353,
        30.247
       ],
       [
        120.261,
        30.263
       ],
       [
        120.229,
        30.25
       ],
       [
        120.195,
        30.241
       ],
       [
        120.246,
        30.284
       ],
       [
        120.45,
        30.388
       ],
       [
        120.63,
        30.391
       ],
       [
        120.821,
        30.355
       ],
       [
        120.897,
        30.393
       ],
       [
        120.938,
        30.47
       ],
       [
        120.998,
        30.558
       ],
       [
        121.31,
        30.7
       ],
       [
        121.419,
        30.79
       ],
       [
        121.528,
        30.841
       ],
       [
        121.67,
        30.863
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
        121.251,
        28.086
       ],
       [
        121.164,
        28.062
       ],
       [
        121.132,
        28.063
       ],
       [
        121.134,
        28.135
       ],
       [
        121.205,
        28.204
       ],
       [
        121.234,
        28.181
       ],
       [
        121.251,
        28.145
       ],
       [
        121.251,
        28.086
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
        119.02,
        27.13
       ],
       [
        119.02,
        30.9
       ],
       [
        121.67,
        30.9
       ],
       [
        121.67,
        30.863
       ],
       [
        121.528,
        30.841
       ],
       [
        121.419,
        30.79
       ],
       [
        121.31,
        30.7
       ],
       [
        120.998,
        30.558
       ],
       [
        120.938,
        30.47
       ],
       [
        120.897,
        30.393
       ],
       [
        120.821,
        30.355
       ],
       [
        120.63,
        30.391
       ],
       [
        120.45,
        30.388
       ],
       [
        120.246,
        30.284
       ],
       [
        120.195,
        30.241
       ],
       [
        120.229,
        30.25
       ],
       [
        120.261,
        30.263
       ],
       [
        120.353,
        30.247
       ],
       [
        120.495,
        30.303
       ],
       [
        120.633,
        30.133
       ],
       [
        120.904,
        30.161
       ],
       [
        121.159,
        30.302
       ],
       [
        121.258,
        30.304
       ],
       [
        121.341,
        30.282
       ],
       [
        121.433,
        30.227
       ],
       [
        121.67,
        29.987
       ],
       [
        121.67,
        29.581
       ],
       [
        121.575,
        29.537
       ],
       [
        121.506,
        29.485
       ],
       [
        121.67,
        29.508
       ],
       [
        121.67,
        29.241
       ],
       [
        121.656,
        29.236
       ],
       [
        121.534,
        29.237
       ],
       [
        121.487,
        29.193
       ],
       [
        121.448,
        29.131
       ],
       [
        121.521,
        29.118
       ],
       [
        121.665,
        29.011
       ],
       [
        121.67,
        28.991
       ],
       [
        121.67,
        28.944
       ],
       [
        121.641,
        28.916
       ],
       [
        121.54,
        28.932
       ],
       [
        121.662,
        28.851
       ],
       [
        121.63,
        28.768
       ],
       [
        121.59,
        28.735
       ],
       [
        121.519,
        28.714
       ],
       [
        121.475,
        28.641
       ],
       [
        121.538,
        28.521
       ],
       [
        121.602,
        28.367
       ],
       [
        121.61,
        28.292
       ],
       [
        121.51,
        28.324
       ],
       [
        121.355,
        28.23
       ],
       [
        121.272,
        28.222
       ],
       [
        121.217,
        28.346
       ],
       [
        121.146,
        28.327
       ],
       [
        121.098,
        28.291
       ],
       [
        121.035,
        28.157
       ],
       [
        120.959,
        28.037
       ],
       [
        120.892,
        28.004
       ],
       [
        120.813,
        28.013
       ],
       [
        120.748,
        28.01
       ],
       [
        120.763,
        27.977
       ],
       [
        120.833,
        27.938
       ],
       [
        120.833,
        27.891
       ],
       [
        120.685,
        27.745
       ],
       [
        120.661,
        27.688
       ],
       [
        120.665,
        27.639
       ],
       [
        120.588,
        27.581
       ],
       [
        120.629,
        27.482
       ],
       [
        120.608,
        27.412
       ],
       [
        120.54,
        27.318
       ],
       [
        120.469,
        27.256
       ],
       [
        120.385,
        27.156
       ],
       [
        120.338,
        27.13
       ],
       [
        119.02,
        27.13
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
         120.995,
         30.9
        ],
        [
         120.993,
         30.89
        ],
        [
         121.02,
         30.872
        ],
        [
         120.992,
         30.837
        ],
        [
         121.038,
         30.814
        ],
        [
         121.06,
         30.845
        ],
        [
         121.098,
         30.857
        ],
        [
         121.138,
         30.826
        ],
        [
         121.123,
         30.779
        ],
        [
         121.175,
         30.772
        ],
        [
         121.217,
         30.786
        ],
        [
         121.232,
         30.756
        ],
        [
         121.272,
         30.724
        ],
        [
         121.275,
         30.677
        ],
        [
         121.362,
         30.68
        ],
        [
         121.426,
         30.73
        ],
        [
         121.517,
         30.775
        ],
        [
         121.601,
         30.805
        ],
        [
         121.67,
         30.817
        ],
        [
         121.67,
         30.9
        ],
        [
         120.995,
         30.9
        ]
       ]
      ]
     ]
    },
    "n": "上海市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         120.361,
         30.9
        ],
        [
         120.358,
         30.887
        ],
        [
         120.412,
         30.9
        ],
        [
         120.437,
         30.9
        ],
        [
         120.442,
         30.861
        ],
        [
         120.46,
         30.84
        ],
        [
         120.489,
         30.764
        ],
        [
         120.505,
         30.758
        ],
        [
         120.564,
         30.836
        ],
        [
         120.59,
         30.854
        ],
        [
         120.655,
         30.847
        ],
        [
         120.683,
         30.882
        ],
        [
         120.713,
         30.885
        ],
        [
         120.712,
         30.9
        ],
        [
         120.361,
         30.9
        ]
       ]
      ]
     ]
    },
    "n": "江苏省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         119.02,
         27.498
        ],
        [
         119.021,
         27.498
        ],
        [
         119.04,
         27.478
        ],
        [
         119.092,
         27.466
        ],
        [
         119.13,
         27.475
        ],
        [
         119.121,
         27.438
        ],
        [
         119.148,
         27.425
        ],
        [
         119.224,
         27.417
        ],
        [
         119.269,
         27.422
        ],
        [
         119.285,
         27.458
        ],
        [
         119.334,
         27.48
        ],
        [
         119.36,
         27.525
        ],
        [
         119.417,
         27.54
        ],
        [
         119.438,
         27.509
        ],
        [
         119.467,
         27.526
        ],
        [
         119.502,
         27.611
        ],
        [
         119.501,
         27.65
        ],
        [
         119.542,
         27.667
        ],
        [
         119.606,
         27.675
        ],
        [
         119.644,
         27.664
        ],
        [
         119.626,
         27.621
        ],
        [
         119.631,
         27.582
        ],
        [
         119.675,
         27.575
        ],
        [
         119.66,
         27.541
        ],
        [
         119.69,
         27.537
        ],
        [
         119.709,
         27.514
        ],
        [
         119.703,
         27.447
        ],
        [
         119.685,
         27.439
        ],
        [
         119.711,
         27.403
        ],
        [
         119.751,
         27.374
        ],
        [
         119.74,
         27.363
        ],
        [
         119.782,
         27.33
        ],
        [
         119.769,
         27.308
        ],
        [
         119.843,
         27.3
        ],
        [
         119.939,
         27.33
        ],
        [
         119.96,
         27.366
        ],
        [
         120.008,
         27.375
        ],
        [
         120.026,
         27.344
        ],
        [
         120.053,
         27.339
        ],
        [
         120.096,
         27.39
        ],
        [
         120.137,
         27.403
        ],
        [
         120.135,
         27.42
        ],
        [
         120.221,
         27.42
        ],
        [
         120.263,
         27.433
        ],
        [
         120.273,
         27.389
        ],
        [
         120.341,
         27.4
        ],
        [
         120.344,
         27.363
        ],
        [
         120.43,
         27.259
        ],
        [
         120.402,
         27.251
        ],
        [
         120.404,
         27.204
        ],
        [
         120.462,
         27.142
        ],
        [
         120.492,
         27.136
        ],
        [
         120.546,
         27.157
        ],
        [
         120.575,
         27.235
        ],
        [
         120.555,
         27.252
        ],
        [
         120.58,
         27.321
        ],
        [
         120.665,
         27.358
        ],
        [
         120.673,
         27.42
        ],
        [
         120.703,
         27.478
        ],
        [
         120.637,
         27.561
        ],
        [
         120.635,
         27.577
        ],
        [
         120.685,
         27.623
        ],
        [
         120.709,
         27.683
        ],
        [
         120.771,
         27.735
        ],
        [
         120.778,
         27.775
        ],
        [
         120.81,
         27.775
        ],
        [
         120.84,
         27.759
        ],
        [
         120.911,
         27.865
        ],
        [
         120.942,
         27.897
        ],
        [
         120.974,
         27.887
        ],
        [
         121.028,
         27.833
        ],
        [
         121.07,
         27.834
        ],
        [
         121.108,
         27.814
        ],
        [
         121.152,
         27.816
        ],
        [
         121.134,
         27.787
        ],
        [
         121.135,
         27.787
        ],
        [
         121.15,
         27.801
        ],
        [
         121.15,
         27.802
        ],
        [
         121.153,
         27.81
        ],
        [
         121.153,
         27.81
        ],
        [
         121.192,
         27.823
        ],
        [
         121.193,
         27.872
        ],
        [
         121.163,
         27.879
        ],
        [
         121.163,
         27.907
        ],
        [
         121.1,
         27.895
        ],
        [
         121.056,
         27.9
        ],
        [
         120.992,
         27.95
        ],
        [
         121.015,
         27.982
        ],
        [
         121.059,
         28.096
        ],
        [
         121.108,
         28.139
        ],
        [
         121.121,
         28.125
        ],
        [
         121.141,
         28.031
        ],
        [
         121.176,
         28.022
        ],
        [
         121.261,
         28.035
        ],
        [
         121.3,
         28.067
        ],
        [
         121.328,
         28.134
        ],
        [
         121.374,
         28.133
        ],
        [
         121.402,
         28.197
        ],
        [
         121.456,
         28.25
        ],
        [
         121.489,
         28.302
        ],
        [
         121.539,
         28.299
        ],
        [
         121.571,
         28.279
        ],
        [
         121.58,
         28.24
        ],
        [
         121.628,
         28.252
        ],
        [
         121.669,
         28.333
        ],
        [
         121.66,
         28.356
        ],
        [
         121.634,
         28.348
        ],
        [
         121.659,
         28.393
        ],
        [
         121.67,
         28.397
        ],
        [
         121.67,
         28.475
        ],
        [
         121.646,
         28.512
        ],
        [
         121.634,
         28.563
        ],
        [
         121.596,
         28.575
        ],
        [
         121.557,
         28.645
        ],
        [
         121.541,
         28.656
        ],
        [
         121.646,
         28.683
        ],
        [
         121.67,
         28.703
        ],
        [
         121.67,
         29.052
        ],
        [
         121.659,
         29.059
        ],
        [
         121.66,
         29.118
        ],
        [
         121.616,
         29.143
        ],
        [
         121.608,
         29.169
        ],
        [
         121.67,
         29.144
        ],
        [
         121.67,
         30.048
        ],
        [
         121.653,
         30.071
        ],
        [
         121.636,
         30.07
        ],
        [
         121.562,
         30.184
        ],
        [
         121.498,
         30.259
        ],
        [
         121.395,
         30.338
        ],
        [
         121.372,
         30.371
        ],
        [
         121.328,
         30.397
        ],
        [
         121.225,
         30.405
        ],
        [
         121.183,
         30.434
        ],
        [
         121.093,
         30.516
        ],
        [
         121.058,
         30.564
        ],
        [
         121.149,
         30.6
        ],
        [
         121.189,
         30.633
        ],
        [
         121.239,
         30.649
        ],
        [
         121.275,
         30.677
        ],
        [
         121.272,
         30.724
        ],
        [
         121.232,
         30.756
        ],
        [
         121.217,
         30.786
        ],
        [
         121.175,
         30.772
        ],
        [
         121.123,
         30.779
        ],
        [
         121.138,
         30.826
        ],
        [
         121.098,
         30.857
        ],
        [
         121.06,
         30.845
        ],
        [
         121.038,
         30.814
        ],
        [
         120.992,
         30.837
        ],
        [
         121.02,
         30.872
        ],
        [
         120.993,
         30.89
        ],
        [
         120.995,
         30.9
        ],
        [
         120.712,
         30.9
        ],
        [
         120.713,
         30.885
        ],
        [
         120.683,
         30.882
        ],
        [
         120.655,
         30.847
        ],
        [
         120.59,
         30.854
        ],
        [
         120.564,
         30.836
        ],
        [
         120.505,
         30.758
        ],
        [
         120.489,
         30.764
        ],
        [
         120.46,
         30.84
        ],
        [
         120.442,
         30.861
        ],
        [
         120.437,
         30.9
        ],
        [
         120.412,
         30.9
        ],
        [
         120.358,
         30.887
        ],
        [
         120.361,
         30.9
        ],
        [
         119.561,
         30.9
        ],
        [
         119.557,
         30.874
        ],
        [
         119.576,
         30.83
        ],
        [
         119.554,
         30.826
        ],
        [
         119.527,
         30.779
        ],
        [
         119.48,
         30.772
        ],
        [
         119.483,
         30.704
        ],
        [
         119.445,
         30.65
        ],
        [
         119.408,
         30.645
        ],
        [
         119.39,
         30.686
        ],
        [
         119.343,
         30.664
        ],
        [
         119.323,
         30.63
        ],
        [
         119.239,
         30.609
        ],
        [
         119.265,
         30.575
        ],
        [
         119.237,
         30.547
        ],
        [
         119.272,
         30.51
        ],
        [
         119.326,
         30.533
        ],
        [
         119.336,
         30.509
        ],
        [
         119.335,
         30.448
        ],
        [
         119.368,
         30.385
        ],
        [
         119.403,
         30.375
        ],
        [
         119.349,
         30.349
        ],
        [
         119.326,
         30.372
        ],
        [
         119.277,
         30.341
        ],
        [
         119.247,
         30.341
        ],
        [
         119.236,
         30.297
        ],
        [
         119.201,
         30.291
        ],
        [
         119.127,
         30.305
        ],
        [
         119.092,
         30.324
        ],
        [
         119.063,
         30.305
        ],
        [
         119.02,
         30.321
        ],
        [
         119.02,
         27.498
        ]
       ]
      ],
      [
       [
        [
         121.201,
         27.623
        ],
        [
         121.198,
         27.618
        ],
        [
         121.199,
         27.617
        ],
        [
         121.204,
         27.626
        ],
        [
         121.201,
         27.623
        ]
       ]
      ],
      [
       [
        [
         121.066,
         27.478
        ],
        [
         121.066,
         27.461
        ],
        [
         121.107,
         27.444
        ],
        [
         121.067,
         27.478
        ],
        [
         121.066,
         27.478
        ]
       ]
      ],
      [
       [
        [
         121.134,
         27.787
        ],
        [
         121.134,
         27.786
        ],
        [
         121.135,
         27.787
        ],
        [
         121.134,
         27.787
        ]
       ]
      ],
      [
       [
        [
         121.098,
         27.937
        ],
        [
         121.153,
         27.962
        ],
        [
         121.121,
         27.986
        ],
        [
         121.07,
         27.984
        ],
        [
         121.038,
         27.949
        ],
        [
         121.098,
         27.937
        ]
       ]
      ],
      [
       [
        [
         121.186,
         27.963
        ],
        [
         121.238,
         27.988
        ],
        [
         121.198,
         28.001
        ],
        [
         121.171,
         27.979
        ],
        [
         121.186,
         27.963
        ]
       ]
      ],
      [
       [
        [
         121.044,
         27.979
        ],
        [
         121.09,
         27.999
        ],
        [
         121.074,
         28.008
        ],
        [
         121.044,
         27.979
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
         119.02,
         30.9
        ],
        [
         119.02,
         30.321
        ],
        [
         119.063,
         30.305
        ],
        [
         119.092,
         30.324
        ],
        [
         119.127,
         30.305
        ],
        [
         119.201,
         30.291
        ],
        [
         119.236,
         30.297
        ],
        [
         119.247,
         30.341
        ],
        [
         119.277,
         30.341
        ],
        [
         119.326,
         30.372
        ],
        [
         119.349,
         30.349
        ],
        [
         119.403,
         30.375
        ],
        [
         119.368,
         30.385
        ],
        [
         119.335,
         30.448
        ],
        [
         119.336,
         30.509
        ],
        [
         119.326,
         30.533
        ],
        [
         119.272,
         30.51
        ],
        [
         119.237,
         30.547
        ],
        [
         119.265,
         30.575
        ],
        [
         119.239,
         30.609
        ],
        [
         119.323,
         30.63
        ],
        [
         119.343,
         30.664
        ],
        [
         119.39,
         30.686
        ],
        [
         119.408,
         30.645
        ],
        [
         119.445,
         30.65
        ],
        [
         119.483,
         30.704
        ],
        [
         119.48,
         30.772
        ],
        [
         119.527,
         30.779
        ],
        [
         119.554,
         30.826
        ],
        [
         119.576,
         30.83
        ],
        [
         119.557,
         30.874
        ],
        [
         119.561,
         30.9
        ],
        [
         119.02,
         30.9
        ]
       ]
      ]
     ]
    },
    "n": "安徽省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         120.444,
         27.13
        ],
        [
         120.462,
         27.142
        ],
        [
         120.404,
         27.204
        ],
        [
         120.402,
         27.251
        ],
        [
         120.43,
         27.259
        ],
        [
         120.344,
         27.363
        ],
        [
         120.341,
         27.4
        ],
        [
         120.273,
         27.389
        ],
        [
         120.263,
         27.433
        ],
        [
         120.221,
         27.42
        ],
        [
         120.135,
         27.42
        ],
        [
         120.137,
         27.403
        ],
        [
         120.096,
         27.39
        ],
        [
         120.053,
         27.339
        ],
        [
         120.026,
         27.344
        ],
        [
         120.008,
         27.375
        ],
        [
         119.96,
         27.366
        ],
        [
         119.939,
         27.33
        ],
        [
         119.843,
         27.3
        ],
        [
         119.769,
         27.308
        ],
        [
         119.782,
         27.33
        ],
        [
         119.74,
         27.363
        ],
        [
         119.751,
         27.374
        ],
        [
         119.711,
         27.403
        ],
        [
         119.685,
         27.439
        ],
        [
         119.703,
         27.447
        ],
        [
         119.709,
         27.514
        ],
        [
         119.69,
         27.537
        ],
        [
         119.66,
         27.541
        ],
        [
         119.675,
         27.575
        ],
        [
         119.631,
         27.582
        ],
        [
         119.626,
         27.621
        ],
        [
         119.644,
         27.664
        ],
        [
         119.606,
         27.675
        ],
        [
         119.542,
         27.667
        ],
        [
         119.501,
         27.65
        ],
        [
         119.502,
         27.611
        ],
        [
         119.467,
         27.526
        ],
        [
         119.438,
         27.509
        ],
        [
         119.417,
         27.54
        ],
        [
         119.36,
         27.525
        ],
        [
         119.334,
         27.48
        ],
        [
         119.285,
         27.458
        ],
        [
         119.269,
         27.422
        ],
        [
         119.224,
         27.417
        ],
        [
         119.148,
         27.425
        ],
        [
         119.121,
         27.438
        ],
        [
         119.13,
         27.475
        ],
        [
         119.092,
         27.466
        ],
        [
         119.04,
         27.478
        ],
        [
         119.021,
         27.498
        ],
        [
         119.02,
         27.498
        ],
        [
         119.02,
         27.13
        ],
        [
         120.444,
         27.13
        ]
       ]
      ]
     ]
    },
    "n": "福建省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   119.02,
   27.13,
   121.67,
   30.9
  ]
 }
};
