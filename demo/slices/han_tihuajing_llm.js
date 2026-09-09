// 本文件由 tools/build.py 自动生成（切片 han_tihuajing_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["han_tihuajing_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["han_tihuajing_llm"] = {
 "meta": {
  "kind": "tech",
  "region": "huabei",
  "province": "shandong",
  "title": "汉锦与提花织机（汉·临淄）",
  "dossier_label": "汉锦与提花织机（汉·临淄）",
  "subtitle": "汉锦与提花织机（汉·临淄）",
  "primary_place": "julu",
  "dossier_event": "event:ev_han_tihuajing_llm_01",
  "vocab_pack": "inline:han_tihuajing_llm",
  "terrain_grid": "china_coarse",
  "lead": "汉锦与提花织机（汉·临淄）——2技术维加厚（v0.192，han/shandong 冷门真实科技主题）。",
  "parties_note": null,
  "subject_names": null,
  "epoch": "han",
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
    "note": "汉锦与提花织机（汉·临淄）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "汉锦与提花织机（汉·临淄）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "汉锦与提花织机（汉·临淄）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "汉锦与提花织机（汉·临淄）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   2,
   6
  ],
  "page": "county.html?scene=han_tihuajing_llm",
  "key": "han_tihuajing_llm",
  "scene_id": "han_tihuajing_llm"
 },
 "sources": [
  {
   "id": "xijing_zaji",
   "title": "《西京杂记》",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "葛洪（托名刘歆）",
   "period": "东晋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "linzi",
   "name": "临淄",
   "type": "city",
   "modern": "今中国山东省淄博市临淄区",
   "note": "场景设定地",
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 118.05,
   "lat": 36.81,
   "geo_note": "今山东淄博临淄；房玄龄故里",
   "elev": 70
  },
  {
   "id": "julu",
   "name": "巨鹿",
   "type": "region",
   "modern": "今中国河北省巨鹿县",
   "note": "陈宝光妻所在",
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 115.04,
   "lat": 37.67,
   "geo_note": "魏征故里，今河北晋州",
   "elev": 31
  }
 ],
 "persons": [
  {
   "id": "HAN__p01",
   "name": "霍光妻",
   "role": "权臣霍光之妻",
   "note": "遗赠蒲桃锦等物",
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 2
  },
  {
   "id": "HAN__p02",
   "name": "淳于衍",
   "role": "宫廷女医",
   "note": "受霍光妻赠物",
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "HAN__p03",
   "name": "陈宝光妻",
   "role": "巨鹿织工",
   "note": "善织散花绫",
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 7
  }
 ],
 "assertions": [
  {
   "id": "HAN_001",
   "subject": "person:HAN__p01",
   "predicate": "赠物",
   "value_text": "遗淳于衍蒲桃锦二十四匹",
   "time": {
    "era_text": "汉宣帝时",
    "start": "-66"
   },
   "place": "linzi",
   "source": "xijing_zaji",
   "quote": "霍光妻遗淳于衍蒲桃锦二十四匹",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[alias] person:霍光妻 → HAN__p01 (name_match) | [auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "霍光妻遗淳于衍蒲桃锦二十四匹",
   "source_text": "霍光妻遗淳于衍蒲桃锦二十四匹，散花绫二十五匹。绫出巨鹿陈宝光妻所织，机用一百二十蹑，六十日成一匹，值万钱。常满灯、珊瑚玦，亦其巧也。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_002",
   "subject": "person:HAN__p01",
   "predicate": "赠物",
   "value_text": "散花绫二十五匹",
   "time": {
    "era_text": "汉宣帝时",
    "start": "-66"
   },
   "place": "linzi",
   "source": "xijing_zaji",
   "quote": "散花绫二十五匹",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:霍光妻 → HAN__p01 (name_match)",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "散花绫二十五匹",
   "source_text": "霍光妻遗淳于衍蒲桃锦二十四匹，散花绫二十五匹。绫出巨鹿陈宝光妻所织，机用一百二十蹑，六十日成一匹，值万钱。常满灯、珊瑚玦，亦其巧也。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_003",
   "subject": "person:HAN__p03",
   "predicate": "织造",
   "value_text": "绫出巨鹿陈宝光妻所织",
   "time": {
    "era_text": "汉宣帝时",
    "start": "-66"
   },
   "place": "julu",
   "source": "xijing_zaji",
   "quote": "绫出巨鹿陈宝光妻所织",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:陈宝光妻 → HAN__p03 (name_match)",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "绫出巨鹿陈宝光妻所织",
   "source_text": "霍光妻遗淳于衍蒲桃锦二十四匹，散花绫二十五匹。绫出巨鹿陈宝光妻所织，机用一百二十蹑，六十日成一匹，值万钱。常满灯、珊瑚玦，亦其巧也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_004",
   "subject": "person:HAN__p03",
   "predicate": "织机",
   "value_text": "机用一百二十蹑",
   "time": {
    "era_text": "汉宣帝时",
    "start": "-66"
   },
   "place": "julu",
   "source": "xijing_zaji",
   "quote": "机用一百二十蹑",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:陈宝光妻 → HAN__p03 (name_match)",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "机用一百二十蹑",
   "source_text": "霍光妻遗淳于衍蒲桃锦二十四匹，散花绫二十五匹。绫出巨鹿陈宝光妻所织，机用一百二十蹑，六十日成一匹，值万钱。常满灯、珊瑚玦，亦其巧也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_005",
   "subject": "person:HAN__p03",
   "predicate": "织造效率",
   "value_text": "六十日成一匹",
   "time": {
    "era_text": "汉宣帝时",
    "start": "-66"
   },
   "place": "julu",
   "source": "xijing_zaji",
   "quote": "六十日成一匹",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:陈宝光妻 → HAN__p03 (name_match)",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "六十日成一匹",
   "source_text": "霍光妻遗淳于衍蒲桃锦二十四匹，散花绫二十五匹。绫出巨鹿陈宝光妻所织，机用一百二十蹑，六十日成一匹，值万钱。常满灯、珊瑚玦，亦其巧也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_006",
   "subject": "person:HAN__p03",
   "predicate": "价值",
   "value_text": "值万钱",
   "time": {
    "era_text": "汉宣帝时",
    "start": "-66"
   },
   "place": "julu",
   "source": "xijing_zaji",
   "quote": "值万钱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:陈宝光妻 → HAN__p03 (name_match)",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "值万钱",
   "source_text": "霍光妻遗淳于衍蒲桃锦二十四匹，散花绫二十五匹。绫出巨鹿陈宝光妻所织，机用一百二十蹑，六十日成一匹，值万钱。常满灯、珊瑚玦，亦其巧也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_007",
   "subject": "person:HAN__p01",
   "predicate": "赠物",
   "value_text": "常满灯、珊瑚玦亦其巧",
   "time": {
    "era_text": "汉宣帝时",
    "start": "-66"
   },
   "place": "linzi",
   "source": "xijing_zaji",
   "quote": "常满灯、珊瑚玦，亦其巧也",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:霍光妻 → HAN__p01 (name_match)",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "常满灯、珊瑚玦，亦其巧也",
   "source_text": "霍光妻遗淳于衍蒲桃锦二十四匹，散花绫二十五匹。绫出巨鹿陈宝光妻所织，机用一百二十蹑，六十日成一匹，值万钱。常满灯、珊瑚玦，亦其巧也。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_008",
   "subject": "event:ev_han_tihuajing_llm_01",
   "predicate": "事件性质",
   "value_text": "权臣妻赠医者织物",
   "time": {
    "era_text": "汉宣帝时",
    "start": "-66"
   },
   "place": "linzi",
   "source": "xijing_zaji",
   "quote": "霍光妻遗淳于衍蒲桃锦二十四匹",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "霍光妻遗淳于衍蒲桃锦二十四匹",
   "source_text": "霍光妻遗淳于衍蒲桃锦二十四匹，散花绫二十五匹。绫出巨鹿陈宝光妻所织，机用一百二十蹑，六十日成一匹，值万钱。常满灯、珊瑚玦，亦其巧也。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_009",
   "subject": "event:ev_han_tihuajing_llm_02",
   "predicate": "技术成就",
   "value_text": "百二十蹑提花机织绫",
   "time": {
    "era_text": "汉宣帝时",
    "start": "-66"
   },
   "place": "julu",
   "source": "xijing_zaji",
   "quote": "机用一百二十蹑",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "机用一百二十蹑",
   "source_text": "霍光妻遗淳于衍蒲桃锦二十四匹，散花绫二十五匹。绫出巨鹿陈宝光妻所织，机用一百二十蹑，六十日成一匹，值万钱。常满灯、珊瑚玦，亦其巧也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_010",
   "subject": "person:HAN__p03",
   "predicate": "织造技术",
   "value_text": "散花绫织造技术高超",
   "time": {
    "era_text": "汉宣帝时",
    "start": "-66"
   },
   "place": "julu",
   "source": "xijing_zaji",
   "quote": "散花绫",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学者推测其织机复杂 | [alias] person:陈宝光妻 → HAN__p03 (name_match)",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "散花绫",
   "source_text": "霍光妻遗淳于衍蒲桃锦二十四匹，散花绫二十五匹。绫出巨鹿陈宝光妻所织，机用一百二十蹑，六十日成一匹，值万钱。常满灯、珊瑚玦，亦其巧也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_011",
   "subject": "person:HAN__p03",
   "predicate": "织造效率",
   "value_text": "一匹耗时六十日",
   "time": {
    "era_text": "汉宣帝时",
    "start": "-66"
   },
   "place": "julu",
   "source": "xijing_zaji",
   "quote": "六十日成一匹",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学者认为效率较低 | [alias] person:陈宝光妻 → HAN__p03 (name_match)",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "六十日成一匹",
   "source_text": "霍光妻遗淳于衍蒲桃锦二十四匹，散花绫二十五匹。绫出巨鹿陈宝光妻所织，机用一百二十蹑，六十日成一匹，值万钱。常满灯、珊瑚玦，亦其巧也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_012",
   "subject": "person:HAN__p03",
   "predicate": "织造价值",
   "value_text": "一匹值万钱",
   "time": {
    "era_text": "汉宣帝时",
    "start": "-66"
   },
   "place": "julu",
   "source": "xijing_zaji",
   "quote": "值万钱",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学者认为价格昂贵 | [alias] person:陈宝光妻 → HAN__p03 (name_match)",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "值万钱",
   "source_text": "霍光妻遗淳于衍蒲桃锦二十四匹，散花绫二十五匹。绫出巨鹿陈宝光妻所织，机用一百二十蹑，六十日成一匹，值万钱。常满灯、珊瑚玦，亦其巧也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_013",
   "subject": "person:HAN__p03",
   "predicate": "织机蹑数",
   "value_text": "百二十蹑可能为夸大",
   "time": {
    "era_text": "汉宣帝时",
    "start": "-66"
   },
   "place": "julu",
   "source": "xijing_zaji",
   "quote": "机用一百二十蹑",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "缺乏实物佐证 | [alias] person:陈宝光妻 → HAN__p03 (name_match)",
   "dims": [
    2
   ],
   "lead": {
    "where": "考古发现汉代织机模型",
    "skills": [
     "纺织技术史",
     "考古学"
    ],
    "accept": "验证蹑数真实性"
   },
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "机用一百二十蹑",
   "source_text": "霍光妻遗淳于衍蒲桃锦二十四匹，散花绫二十五匹。绫出巨鹿陈宝光妻所织，机用一百二十蹑，六十日成一匹，值万钱。常满灯、珊瑚玦，亦其巧也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_014",
   "subject": "person:HAN__p01",
   "predicate": "赠物动机",
   "value_text": "动机不明",
   "time": {
    "era_text": "汉宣帝时",
    "start": "-66"
   },
   "place": "linzi",
   "source": "xijing_zaji",
   "quote": "霍光妻遗淳于衍",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载原因 | [alias] person:霍光妻 → HAN__p01 (name_match)",
   "dims": [
    6
   ],
   "lead": {
    "where": "汉代宫廷关系研究",
    "skills": [
     "历史学",
     "文献学"
    ],
    "accept": "推断赠物背景"
   },
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "霍光妻遗淳于衍",
   "source_text": "霍光妻遗淳于衍蒲桃锦二十四匹，散花绫二十五匹。绫出巨鹿陈宝光妻所织，机用一百二十蹑，六十日成一匹，值万钱。常满灯、珊瑚玦，亦其巧也。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:person:HAN__p01|赠物",
   "subject": "person:HAN__p01",
   "predicate": "赠物",
   "kind": "record_vs_record",
   "count": 3,
   "spread": null,
   "assertion_ids": [
    "HAN_001",
    "HAN_002",
    "HAN_007"
   ]
  },
  {
   "id": "cf:person:HAN__p03|织造效率",
   "subject": "person:HAN__p03",
   "predicate": "织造效率",
   "kind": "record_vs_scholarship",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "HAN_005",
    "HAN_011"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "HAN_013",
  "HAN_014"
 ],
 "events": [
  {
   "id": "ev_han_tihuajing_llm_01",
   "subject": "event:ev_han_tihuajing_llm_01",
   "year": -66,
   "era": "汉宣帝地节四年",
   "title": "霍光妻赠织锦",
   "kind": "其他",
   "text": "霍光妻遗淳于衍蒲桃锦等",
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_han_tihuajing_llm_02",
   "subject": "event:ev_han_tihuajing_llm_02",
   "year": -66,
   "era": "汉宣帝地节四年",
   "title": "陈宝光妻织绫",
   "kind": "其他",
   "text": "巨鹿陈宝光妻用百二十蹑织机",
   "_source_idx": 0,
   "_source_name": "《西京杂记》",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "linzi",
   "party": "后世官修",
   "start": -200,
   "end": -100,
   "timeline": "main"
  },
  {
   "place_id": "julu",
   "party": "后世官修",
   "start": -200,
   "end": -100,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "linzi",
   "name": "临淄",
   "lon": 118.05,
   "lat": 36.81,
   "region": "huabei"
  },
  {
   "place_id": "julu",
   "name": "巨鹿",
   "lon": 115.04,
   "lat": 37.67,
   "region": "huabei"
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
  "coastline": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        119.05,
        37.242
       ],
       [
        118.998,
        37.277
       ],
       [
        118.953,
        37.331
       ],
       [
        118.955,
        37.494
       ],
       [
        118.991,
        37.641
       ],
       [
        119.033,
        37.661
       ],
       [
        119.05,
        37.673
       ],
       [
        119.05,
        37.766
       ],
       [
        119.038,
        37.777
       ],
       [
        119.036,
        37.809
       ],
       [
        119.028,
        37.904
       ],
       [
        118.94,
        38.043
       ],
       [
        118.8,
        38.127
       ],
       [
        118.667,
        38.126
       ],
       [
        118.543,
        38.095
       ],
       [
        118.015,
        38.183
       ],
       [
        117.767,
        38.312
       ],
       [
        117.656,
        38.424
       ],
       [
        117.558,
        38.625
       ],
       [
        117.555,
        38.67
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
        114.04,
        35.81
       ],
       [
        114.04,
        38.67
       ],
       [
        117.555,
        38.67
       ],
       [
        117.558,
        38.625
       ],
       [
        117.656,
        38.424
       ],
       [
        117.767,
        38.312
       ],
       [
        118.015,
        38.183
       ],
       [
        118.543,
        38.095
       ],
       [
        118.667,
        38.126
       ],
       [
        118.8,
        38.127
       ],
       [
        118.94,
        38.043
       ],
       [
        119.028,
        37.904
       ],
       [
        119.036,
        37.809
       ],
       [
        119.038,
        37.777
       ],
       [
        119.05,
        37.766
       ],
       [
        119.05,
        37.673
       ],
       [
        119.033,
        37.661
       ],
       [
        118.991,
        37.641
       ],
       [
        118.955,
        37.494
       ],
       [
        118.953,
        37.331
       ],
       [
        118.998,
        37.277
       ],
       [
        119.05,
        37.242
       ],
       [
        119.05,
        35.81
       ],
       [
        114.04,
        35.81
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
         117.065,
         38.67
        ],
        [
         117.055,
         38.639
        ],
        [
         117.071,
         38.608
        ],
        [
         117.11,
         38.585
        ],
        [
         117.151,
         38.618
        ],
        [
         117.184,
         38.618
        ],
        [
         117.184,
         38.618
        ],
        [
         117.213,
         38.64
        ],
        [
         117.213,
         38.64
        ],
        [
         117.259,
         38.608
        ],
        [
         117.259,
         38.608
        ],
        [
         117.238,
         38.581
        ],
        [
         117.253,
         38.556
        ],
        [
         117.369,
         38.565
        ],
        [
         117.432,
         38.602
        ],
        [
         117.479,
         38.616
        ],
        [
         117.558,
         38.614
        ],
        [
         117.639,
         38.627
        ],
        [
         117.657,
         38.66
        ],
        [
         117.692,
         38.67
        ],
        [
         117.065,
         38.67
        ]
       ]
      ]
     ]
    },
    "n": "天津市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         114.04,
         38.67
        ],
        [
         114.04,
         37.768
        ],
        [
         114.045,
         37.762
        ],
        [
         114.04,
         37.759
        ],
        [
         114.04,
         37.716
        ],
        [
         114.068,
         37.722
        ],
        [
         114.128,
         37.698
        ],
        [
         114.14,
         37.676
        ],
        [
         114.116,
         37.62
        ],
        [
         114.119,
         37.591
        ],
        [
         114.04,
         37.498
        ],
        [
         114.04,
         36.331
        ],
        [
         114.056,
         36.329
        ],
        [
         114.043,
         36.303
        ],
        [
         114.08,
         36.27
        ],
        [
         114.129,
         36.28
        ],
        [
         114.176,
         36.265
        ],
        [
         114.17,
         36.246
        ],
        [
         114.17,
         36.246
        ],
        [
         114.203,
         36.245
        ],
        [
         114.21,
         36.273
        ],
        [
         114.241,
         36.251
        ],
        [
         114.258,
         36.264
        ],
        [
         114.299,
         36.246
        ],
        [
         114.345,
         36.256
        ],
        [
         114.356,
         36.23
        ],
        [
         114.408,
         36.225
        ],
        [
         114.417,
         36.206
        ],
        [
         114.466,
         36.198
        ],
        [
         114.48,
         36.178
        ],
        [
         114.533,
         36.172
        ],
        [
         114.587,
         36.141
        ],
        [
         114.589,
         36.118
        ],
        [
         114.64,
         36.137
        ],
        [
         114.72,
         36.14
        ],
        [
         114.735,
         36.156
        ],
        [
         114.772,
         36.125
        ],
        [
         114.858,
         36.128
        ],
        [
         114.858,
         36.145
        ],
        [
         114.913,
         36.141
        ],
        [
         114.927,
         36.089
        ],
        [
         114.914,
         36.052
        ],
        [
         114.998,
         36.07
        ],
        [
         115.046,
         36.113
        ],
        [
         115.049,
         36.162
        ],
        [
         115.063,
         36.178
        ],
        [
         115.105,
         36.172
        ],
        [
         115.125,
         36.21
        ],
        [
         115.184,
         36.193
        ],
        [
         115.201,
         36.21
        ],
        [
         115.201,
         36.21
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.242,
         36.191
        ],
        [
         115.279,
         36.138
        ],
        [
         115.302,
         36.128
        ],
        [
         115.313,
         36.088
        ],
        [
         115.366,
         36.099
        ],
        [
         115.377,
         36.128
        ],
        [
         115.451,
         36.152
        ],
        [
         115.465,
         36.17
        ],
        [
         115.484,
         36.149
        ],
        [
         115.475,
         36.248
        ],
        [
         115.467,
         36.259
        ],
        [
         115.467,
         36.259
        ],
        [
         115.463,
         36.276
        ],
        [
         115.417,
         36.293
        ],
        [
         115.423,
         36.322
        ],
        [
         115.367,
         36.309
        ],
        [
         115.369,
         36.342
        ],
        [
         115.34,
         36.398
        ],
        [
         115.298,
         36.413
        ],
        [
         115.317,
         36.454
        ],
        [
         115.291,
         36.46
        ],
        [
         115.273,
         36.497
        ],
        [
         115.331,
         36.55
        ],
        [
         115.355,
         36.627
        ],
        [
         115.366,
         36.622
        ],
        [
         115.42,
         36.687
        ],
        [
         115.452,
         36.702
        ],
        [
         115.48,
         36.76
        ],
        [
         115.525,
         36.764
        ],
        [
         115.684,
         36.808
        ],
        [
         115.712,
         36.883
        ],
        [
         115.758,
         36.902
        ],
        [
         115.797,
         36.969
        ],
        [
         115.777,
         36.993
        ],
        [
         115.856,
         37.061
        ],
        [
         115.888,
         37.112
        ],
        [
         115.88,
         37.151
        ],
        [
         115.912,
         37.177
        ],
        [
         115.91,
         37.207
        ],
        [
         115.97,
         37.24
        ],
        [
         115.976,
         37.337
        ],
        [
         116.024,
         37.36
        ],
        [
         116.086,
         37.374
        ],
        [
         116.106,
         37.369
        ],
        [
         116.169,
         37.384
        ],
        [
         116.193,
         37.366
        ],
        [
         116.236,
         37.361
        ],
        [
         116.285,
         37.404
        ],
        [
         116.226,
         37.428
        ],
        [
         116.243,
         37.448
        ],
        [
         116.225,
         37.48
        ],
        [
         116.241,
         37.49
        ],
        [
         116.241,
         37.49
        ],
        [
         116.276,
         37.467
        ],
        [
         116.29,
         37.484
        ],
        [
         116.279,
         37.525
        ],
        [
         116.295,
         37.554
        ],
        [
         116.336,
         37.581
        ],
        [
         116.367,
         37.566
        ],
        [
         116.38,
         37.522
        ],
        [
         116.381,
         37.523
        ],
        [
         116.38,
         37.522
        ],
        [
         116.381,
         37.523
        ],
        [
         116.434,
         37.473
        ],
        [
         116.448,
         37.503
        ],
        [
         116.483,
         37.522
        ],
        [
         116.576,
         37.611
        ],
        [
         116.605,
         37.625
        ],
        [
         116.663,
         37.686
        ],
        [
         116.679,
         37.729
        ],
        [
         116.725,
         37.744
        ],
        [
         116.754,
         37.77
        ],
        [
         116.754,
         37.793
        ],
        [
         116.805,
         37.849
        ],
        [
         116.838,
         37.835
        ],
        [
         116.919,
         37.846
        ],
        [
         117.027,
         37.832
        ],
        [
         117.075,
         37.849
        ],
        [
         117.15,
         37.839
        ],
        [
         117.185,
         37.85
        ],
        [
         117.272,
         37.84
        ],
        [
         117.32,
         37.862
        ],
        [
         117.401,
         37.845
        ],
        [
         117.439,
         37.854
        ],
        [
         117.481,
         37.915
        ],
        [
         117.513,
         37.943
        ],
        [
         117.524,
         37.99
        ],
        [
         117.557,
         38.046
        ],
        [
         117.557,
         38.046
        ],
        [
         117.587,
         38.072
        ],
        [
         117.705,
         38.076
        ],
        [
         117.747,
         38.125
        ],
        [
         117.771,
         38.135
        ],
        [
         117.767,
         38.159
        ],
        [
         117.789,
         38.181
        ],
        [
         117.809,
         38.228
        ],
        [
         117.849,
         38.255
        ],
        [
         117.896,
         38.302
        ],
        [
         117.949,
         38.347
        ],
        [
         117.958,
         38.376
        ],
        [
         117.937,
         38.388
        ],
        [
         117.846,
         38.368
        ],
        [
         117.781,
         38.374
        ],
        [
         117.73,
         38.425
        ],
        [
         117.725,
         38.457
        ],
        [
         117.679,
         38.477
        ],
        [
         117.645,
         38.528
        ],
        [
         117.686,
         38.539
        ],
        [
         117.638,
         38.545
        ],
        [
         117.639,
         38.627
        ],
        [
         117.558,
         38.614
        ],
        [
         117.479,
         38.616
        ],
        [
         117.432,
         38.602
        ],
        [
         117.369,
         38.565
        ],
        [
         117.253,
         38.556
        ],
        [
         117.238,
         38.581
        ],
        [
         117.259,
         38.608
        ],
        [
         117.259,
         38.608
        ],
        [
         117.213,
         38.64
        ],
        [
         117.213,
         38.64
        ],
        [
         117.184,
         38.618
        ],
        [
         117.184,
         38.618
        ],
        [
         117.151,
         38.618
        ],
        [
         117.11,
         38.585
        ],
        [
         117.071,
         38.608
        ],
        [
         117.055,
         38.639
        ],
        [
         117.065,
         38.67
        ],
        [
         114.04,
         38.67
        ]
       ]
      ]
     ]
    },
    "n": "河北省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         114.04,
         38.67
        ],
        [
         114.04,
         37.498
        ],
        [
         114.119,
         37.591
        ],
        [
         114.116,
         37.62
        ],
        [
         114.14,
         37.676
        ],
        [
         114.128,
         37.698
        ],
        [
         114.068,
         37.722
        ],
        [
         114.04,
         37.716
        ],
        [
         114.04,
         37.759
        ],
        [
         114.045,
         37.762
        ],
        [
         114.04,
         37.768
        ],
        [
         114.04,
         38.67
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         119.05,
         35.81
        ],
        [
         119.05,
         37.269
        ],
        [
         119.04,
         37.304
        ],
        [
         119.001,
         37.319
        ],
        [
         118.943,
         37.497
        ],
        [
         118.94,
         37.527
        ],
        [
         118.989,
         37.621
        ],
        [
         119.024,
         37.642
        ],
        [
         119.05,
         37.645
        ],
        [
         119.05,
         37.963
        ],
        [
         119.002,
         37.996
        ],
        [
         118.974,
         38.094
        ],
        [
         118.908,
         38.139
        ],
        [
         118.811,
         38.158
        ],
        [
         118.704,
         38.151
        ],
        [
         118.626,
         38.138
        ],
        [
         118.608,
         38.129
        ],
        [
         118.598,
         38.079
        ],
        [
         118.552,
         38.056
        ],
        [
         118.534,
         38.064
        ],
        [
         118.517,
         38.089
        ],
        [
         118.505,
         38.114
        ],
        [
         118.45,
         38.124
        ],
        [
         118.431,
         38.106
        ],
        [
         118.404,
         38.121
        ],
        [
         118.331,
         38.125
        ],
        [
         118.217,
         38.147
        ],
        [
         118.178,
         38.186
        ],
        [
         118.112,
         38.21
        ],
        [
         118.045,
         38.214
        ],
        [
         118.019,
         38.202
        ],
        [
         117.897,
         38.279
        ],
        [
         117.896,
         38.302
        ],
        [
         117.849,
         38.255
        ],
        [
         117.809,
         38.228
        ],
        [
         117.789,
         38.181
        ],
        [
         117.767,
         38.159
        ],
        [
         117.771,
         38.135
        ],
        [
         117.747,
         38.125
        ],
        [
         117.705,
         38.076
        ],
        [
         117.587,
         38.072
        ],
        [
         117.557,
         38.046
        ],
        [
         117.557,
         38.046
        ],
        [
         117.524,
         37.99
        ],
        [
         117.513,
         37.943
        ],
        [
         117.481,
         37.915
        ],
        [
         117.439,
         37.854
        ],
        [
         117.401,
         37.845
        ],
        [
         117.32,
         37.862
        ],
        [
         117.272,
         37.84
        ],
        [
         117.185,
         37.85
        ],
        [
         117.15,
         37.839
        ],
        [
         117.075,
         37.849
        ],
        [
         117.027,
         37.832
        ],
        [
         116.919,
         37.846
        ],
        [
         116.838,
         37.835
        ],
        [
         116.805,
         37.849
        ],
        [
         116.754,
         37.793
        ],
        [
         116.754,
         37.77
        ],
        [
         116.725,
         37.744
        ],
        [
         116.679,
         37.729
        ],
        [
         116.663,
         37.686
        ],
        [
         116.605,
         37.625
        ],
        [
         116.576,
         37.611
        ],
        [
         116.483,
         37.522
        ],
        [
         116.448,
         37.503
        ],
        [
         116.434,
         37.473
        ],
        [
         116.381,
         37.523
        ],
        [
         116.38,
         37.522
        ],
        [
         116.381,
         37.523
        ],
        [
         116.38,
         37.522
        ],
        [
         116.367,
         37.566
        ],
        [
         116.336,
         37.581
        ],
        [
         116.295,
         37.554
        ],
        [
         116.279,
         37.525
        ],
        [
         116.29,
         37.484
        ],
        [
         116.276,
         37.467
        ],
        [
         116.241,
         37.49
        ],
        [
         116.241,
         37.49
        ],
        [
         116.225,
         37.48
        ],
        [
         116.243,
         37.448
        ],
        [
         116.226,
         37.428
        ],
        [
         116.285,
         37.404
        ],
        [
         116.236,
         37.361
        ],
        [
         116.193,
         37.366
        ],
        [
         116.169,
         37.384
        ],
        [
         116.106,
         37.369
        ],
        [
         116.086,
         37.374
        ],
        [
         116.024,
         37.36
        ],
        [
         115.976,
         37.337
        ],
        [
         115.97,
         37.24
        ],
        [
         115.91,
         37.207
        ],
        [
         115.912,
         37.177
        ],
        [
         115.88,
         37.151
        ],
        [
         115.888,
         37.112
        ],
        [
         115.856,
         37.061
        ],
        [
         115.777,
         36.993
        ],
        [
         115.797,
         36.969
        ],
        [
         115.758,
         36.902
        ],
        [
         115.712,
         36.883
        ],
        [
         115.684,
         36.808
        ],
        [
         115.525,
         36.764
        ],
        [
         115.48,
         36.76
        ],
        [
         115.452,
         36.702
        ],
        [
         115.42,
         36.687
        ],
        [
         115.366,
         36.622
        ],
        [
         115.355,
         36.627
        ],
        [
         115.331,
         36.55
        ],
        [
         115.273,
         36.497
        ],
        [
         115.291,
         36.46
        ],
        [
         115.317,
         36.454
        ],
        [
         115.298,
         36.413
        ],
        [
         115.34,
         36.398
        ],
        [
         115.369,
         36.342
        ],
        [
         115.367,
         36.309
        ],
        [
         115.423,
         36.322
        ],
        [
         115.417,
         36.293
        ],
        [
         115.463,
         36.276
        ],
        [
         115.467,
         36.259
        ],
        [
         115.467,
         36.259
        ],
        [
         115.475,
         36.248
        ],
        [
         115.484,
         36.149
        ],
        [
         115.484,
         36.126
        ],
        [
         115.449,
         36.047
        ],
        [
         115.448,
         36.012
        ],
        [
         115.363,
         35.972
        ],
        [
         115.354,
         35.939
        ],
        [
         115.364,
         35.894
        ],
        [
         115.339,
         35.81
        ],
        [
         115.409,
         35.81
        ],
        [
         115.46,
         35.868
        ],
        [
         115.488,
         35.881
        ],
        [
         115.495,
         35.896
        ],
        [
         115.505,
         35.899
        ],
        [
         115.513,
         35.89
        ],
        [
         115.584,
         35.922
        ],
        [
         115.649,
         35.923
        ],
        [
         115.699,
         35.966
        ],
        [
         115.775,
         35.975
        ],
        [
         115.78,
         35.994
        ],
        [
         115.817,
         36.013
        ],
        [
         115.86,
         36.004
        ],
        [
         115.899,
         36.027
        ],
        [
         115.99,
         36.045
        ],
        [
         116.058,
         36.105
        ],
        [
         116.099,
         36.112
        ],
        [
         116.063,
         36.029
        ],
        [
         116.049,
         35.97
        ],
        [
         115.985,
         35.974
        ],
        [
         115.912,
         35.96
        ],
        [
         115.908,
         35.927
        ],
        [
         115.873,
         35.919
        ],
        [
         115.883,
         35.88
        ],
        [
         115.86,
         35.858
        ],
        [
         115.817,
         35.844
        ],
        [
         115.774,
         35.854
        ],
        [
         115.735,
         35.833
        ],
        [
         115.715,
         35.81
        ],
        [
         119.05,
         35.81
        ]
       ]
      ],
      [
       [
        [
         115.495,
         35.896
        ],
        [
         115.488,
         35.881
        ],
        [
         115.513,
         35.89
        ],
        [
         115.505,
         35.899
        ],
        [
         115.495,
         35.896
        ]
       ]
      ]
     ]
    },
    "n": "山东省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         114.04,
         35.81
        ],
        [
         115.715,
         35.81
        ],
        [
         115.735,
         35.833
        ],
        [
         115.774,
         35.854
        ],
        [
         115.817,
         35.844
        ],
        [
         115.86,
         35.858
        ],
        [
         115.883,
         35.88
        ],
        [
         115.873,
         35.919
        ],
        [
         115.908,
         35.927
        ],
        [
         115.912,
         35.96
        ],
        [
         115.985,
         35.974
        ],
        [
         116.049,
         35.97
        ],
        [
         116.063,
         36.029
        ],
        [
         116.099,
         36.112
        ],
        [
         116.058,
         36.105
        ],
        [
         115.99,
         36.045
        ],
        [
         115.899,
         36.027
        ],
        [
         115.86,
         36.004
        ],
        [
         115.817,
         36.013
        ],
        [
         115.78,
         35.994
        ],
        [
         115.775,
         35.975
        ],
        [
         115.699,
         35.966
        ],
        [
         115.649,
         35.923
        ],
        [
         115.584,
         35.922
        ],
        [
         115.513,
         35.89
        ],
        [
         115.488,
         35.881
        ],
        [
         115.46,
         35.868
        ],
        [
         115.409,
         35.81
        ],
        [
         115.339,
         35.81
        ],
        [
         115.364,
         35.894
        ],
        [
         115.354,
         35.939
        ],
        [
         115.363,
         35.972
        ],
        [
         115.448,
         36.012
        ],
        [
         115.449,
         36.047
        ],
        [
         115.484,
         36.126
        ],
        [
         115.484,
         36.149
        ],
        [
         115.465,
         36.17
        ],
        [
         115.451,
         36.152
        ],
        [
         115.377,
         36.128
        ],
        [
         115.366,
         36.099
        ],
        [
         115.313,
         36.088
        ],
        [
         115.302,
         36.128
        ],
        [
         115.279,
         36.138
        ],
        [
         115.242,
         36.191
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.201,
         36.21
        ],
        [
         115.201,
         36.21
        ],
        [
         115.184,
         36.193
        ],
        [
         115.125,
         36.21
        ],
        [
         115.105,
         36.172
        ],
        [
         115.063,
         36.178
        ],
        [
         115.049,
         36.162
        ],
        [
         115.046,
         36.113
        ],
        [
         114.998,
         36.07
        ],
        [
         114.914,
         36.052
        ],
        [
         114.927,
         36.089
        ],
        [
         114.913,
         36.141
        ],
        [
         114.858,
         36.145
        ],
        [
         114.858,
         36.128
        ],
        [
         114.772,
         36.125
        ],
        [
         114.735,
         36.156
        ],
        [
         114.72,
         36.14
        ],
        [
         114.64,
         36.137
        ],
        [
         114.589,
         36.118
        ],
        [
         114.587,
         36.141
        ],
        [
         114.533,
         36.172
        ],
        [
         114.48,
         36.178
        ],
        [
         114.466,
         36.198
        ],
        [
         114.417,
         36.206
        ],
        [
         114.408,
         36.225
        ],
        [
         114.356,
         36.23
        ],
        [
         114.345,
         36.256
        ],
        [
         114.299,
         36.246
        ],
        [
         114.258,
         36.264
        ],
        [
         114.241,
         36.251
        ],
        [
         114.21,
         36.273
        ],
        [
         114.203,
         36.245
        ],
        [
         114.17,
         36.246
        ],
        [
         114.17,
         36.246
        ],
        [
         114.176,
         36.265
        ],
        [
         114.129,
         36.28
        ],
        [
         114.08,
         36.27
        ],
        [
         114.043,
         36.303
        ],
        [
         114.056,
         36.329
        ],
        [
         114.04,
         36.331
        ],
        [
         114.04,
         35.81
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       115.73,
       35.81
      ],
      [
       115.781,
       35.83
      ],
      [
       115.871,
       35.88
      ],
      [
       115.866,
       35.91
      ],
      [
       115.883,
       35.939
      ],
      [
       115.924,
       35.966
      ],
      [
       115.966,
       35.976
      ],
      [
       116.036,
       36.071
      ],
      [
       116.078,
       36.11
      ],
      [
       116.116,
       36.143
      ],
      [
       116.227,
       36.201
      ],
      [
       116.451,
       36.339
      ],
      [
       116.581,
       36.44
      ],
      [
       116.593,
       36.49
      ],
      [
       116.644,
       36.561
      ],
      [
       116.735,
       36.656
      ],
      [
       116.862,
       36.726
      ],
      [
       117.024,
       36.773
      ],
      [
       117.151,
       36.862
      ],
      [
       117.24,
       36.994
      ],
      [
       117.352,
       37.082
      ],
      [
       117.485,
       37.127
      ],
      [
       117.571,
       37.175
      ],
      [
       117.608,
       37.228
      ],
      [
       117.693,
       37.256
      ],
      [
       117.825,
       37.26
      ],
      [
       117.97,
       37.29
      ],
      [
       118.128,
       37.347
      ],
      [
       118.238,
       37.431
      ],
      [
       118.298,
       37.541
      ],
      [
       118.385,
       37.604
      ],
      [
       118.498,
       37.619
      ],
      [
       118.645,
       37.678
      ],
      [
       118.826,
       37.78
      ],
      [
       118.946,
       37.824
      ],
      [
       119.036,
       37.809
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   114.04,
   35.81,
   119.05,
   38.67
  ]
 }
};
