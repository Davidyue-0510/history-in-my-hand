// 本文件由 tools/build.py 自动生成（切片 shaanxi_hanchang_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shaanxi_hanchang_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shaanxi_hanchang_llm"] = {
 "meta": {
  "kind": "engineering",
  "region": "guangzhong",
  "province": "shaanxi",
  "title": "汉长安与关中之漕（汉）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "changan",
  "dossier_event": "event:ev_shaanxi_hanchang_llm_01",
  "vocab_pack": "inline:shaanxi_hanchang_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "guangzhong",
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
    "note": "汉长安与关中之漕（汉）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "汉长安与关中之漕（汉）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "汉长安与关中之漕（汉）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "汉长安与关中之漕（汉）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   6
  ],
  "page": "county.html?scene=shaanxi_hanchang_llm",
  "key": "shaanxi_hanchang_llm",
  "scene_id": "shaanxi_hanchang_llm"
 },
 "sources": [
  {
   "id": "shaanxi_hanchang_src",
   "title": "史记·货殖列传 / 汉书·沟洫志",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "班固",
   "period": "汉",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "guanzhong",
   "name": "关中",
   "type": "region",
   "modern": "今中国陕西中部",
   "note": "汉朝根本",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
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
   "note": "汉都",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 108.95,
   "lat": 34.27,
   "geo_note": "唐都，今西安",
   "elev": 436
  },
  {
   "id": "weishui",
   "name": "渭水",
   "type": "river",
   "modern": "今中国陕西渭河",
   "note": "漕运通道",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "guandong",
   "name": "关东",
   "type": "region",
   "modern": "今中国函谷关以东",
   "note": "漕粮来源",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "SHA__p01",
   "name": "汉高祖",
   "role": "汉朝开国皇帝",
   "note": "定都长安",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SHA__p02",
   "name": "汉武帝",
   "role": "西汉皇帝",
   "note": "穿漕渠通渭",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SHA_001",
   "subject": "place:guanzhong",
   "predicate": "富庶程度",
   "value_text": "关中地占三分之一，富居十分之六",
   "time": {
    "era_text": "汉高祖时",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_002",
   "subject": "event:ev_shaanxi_hanchang_llm_01",
   "predicate": "定都",
   "value_text": "汉高祖定都长安",
   "time": {
    "era_text": "汉高祖五年",
    "start": "-202"
   },
   "place": "changan",
   "source": "shaanxi_hanchang_src",
   "quote": "汉高祖定都长安",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "汉高祖定都长安",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_003",
   "subject": "event:ev_shaanxi_hanchang_llm_02",
   "predicate": "开凿漕渠",
   "value_text": "武帝穿漕渠通渭",
   "time": {
    "era_text": "元光六年",
    "start": "-129"
   },
   "place": "changan",
   "source": "shaanxi_hanchang_src",
   "quote": "武帝穿漕渠通渭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "武帝穿漕渠通渭",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_004",
   "subject": "place:changan",
   "predicate": "漕运功能",
   "value_text": "关东之粟水运抵长安",
   "time": {
    "era_text": "武帝时",
    "start": "-129"
   },
   "place": "changan",
   "source": "shaanxi_hanchang_src",
   "quote": "关东之粟，水运抵长安",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "关东之粟，水运抵长安",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_005",
   "subject": "place:guanzhong",
   "predicate": "水利灌溉",
   "value_text": "郑白之渠灌溉，衣食京师",
   "time": {
    "era_text": "武帝时",
    "start": "-129"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "郑白之渠，衣食京师，亿万之口",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "郑白之渠，衣食京师，亿万之口",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_006",
   "subject": "place:guanzhong",
   "predicate": "地位",
   "value_text": "关中为本朝根本",
   "time": {
    "era_text": "汉",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "关中为本朝根本",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "关中为本朝根本",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_007",
   "subject": "place:guanzhong",
   "predicate": "人口比例",
   "value_text": "人众不过什三",
   "time": {
    "era_text": "汉高祖时",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "人众不过什三",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "人众不过什三",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_008",
   "subject": "place:guanzhong",
   "predicate": "经济贡献",
   "value_text": "量其富，什居其六",
   "time": {
    "era_text": "汉高祖时",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "量其富，什居其六",
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
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "量其富，什居其六",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_009",
   "subject": "event:ev_shaanxi_hanchang_llm_02",
   "predicate": "目的",
   "value_text": "为漕运粮食",
   "time": {
    "era_text": "元光六年",
    "start": "-129"
   },
   "place": "changan",
   "source": "shaanxi_hanchang_src",
   "quote": "漕渠通渭",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "漕渠通渭",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_010",
   "subject": "place:changan",
   "predicate": "粮食供应",
   "value_text": "依赖关东漕运",
   "time": {
    "era_text": "汉",
    "start": "-202"
   },
   "place": "changan",
   "source": "shaanxi_hanchang_src",
   "quote": "关东之粟，水运抵长安",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "关东之粟，水运抵长安",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_011",
   "subject": "place:guanzhong",
   "predicate": "农业基础",
   "value_text": "郑白渠灌溉，农业发达",
   "time": {
    "era_text": "汉",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "郑白之渠，衣食京师",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "郑白之渠，衣食京师",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_012",
   "subject": "place:guanzhong",
   "predicate": "战略地位",
   "value_text": "定都长安因关中富庶",
   "time": {
    "era_text": "汉高祖时",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "汉高祖定都长安",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "汉高祖定都长安",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_013",
   "subject": "place:changan",
   "predicate": "漕运量",
   "value_text": "具体漕运量未载",
   "time": {
    "era_text": "汉",
    "start": "-202"
   },
   "place": "changan",
   "source": "shaanxi_hanchang_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "lead": {
    "where": "汉长安城遗址",
    "skills": [
     "考古学",
     "历史地理"
    ],
    "accept": "考古发现漕渠遗迹"
   },
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_014",
   "subject": "place:guanzhong",
   "predicate": "郑白渠位置",
   "value_text": "郑白渠具体位置未明",
   "time": {
    "era_text": "汉",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    2
   ],
   "lead": {
    "where": "关中平原",
    "skills": [
     "水利史",
     "遥感考古"
    ],
    "accept": "遥感识别古渠道"
   },
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_015",
   "subject": "place:guanzhong",
   "predicate": "经济数据",
   "value_text": "富居十分之六为约数",
   "time": {
    "era_text": "汉高祖时",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "量其富，什居其六",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "province",
   "note": "学者认为夸大",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "量其富，什居其六",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SHA_013",
  "SHA_014"
 ],
 "events": [
  {
   "id": "ev_shaanxi_hanchang_llm_01",
   "subject": "event:ev_shaanxi_hanchang_llm_01",
   "year": -202,
   "era": "汉高祖五年",
   "title": "定都长安",
   "kind": "建置",
   "text": "汉高祖定都长安",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shaanxi_hanchang_llm_02",
   "subject": "event:ev_shaanxi_hanchang_llm_02",
   "year": -129,
   "era": "元光六年",
   "title": "穿漕渠",
   "kind": "工程",
   "text": "武帝穿漕渠通渭",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "guandong",
   "to": "changan",
   "type": "military",
   "label": "漕运路线",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "guanzhong",
   "party": "后世官修",
   "start": -200,
   "end": -100,
   "timeline": "main"
  },
  {
   "place_id": "changan",
   "party": "后世官修",
   "start": -200,
   "end": -100,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "changan",
   "name": "长安",
   "lon": 108.95,
   "lat": 34.27,
   "region": "guangzhong"
  }
 ],
 "control_years": [
  -200,
  -100
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
