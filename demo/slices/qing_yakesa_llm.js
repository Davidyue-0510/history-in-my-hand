// 本文件由 tools/build.py 自动生成（切片 qing_yakesa_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["qing_yakesa_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["qing_yakesa_llm"] = {
 "meta": {
  "kind": "battle",
  "scale_tier": "operational",
  "region": "liaobei",
  "province": "heilongjiang",
  "title": "雅克萨之战（LLM 抽取·人工校订）",
  "dossier_label": "雅克萨之战（LLM 抽取落库）",
  "subtitle": "康熙二十四至二十五年（1685–1686）· 清 vs 沙俄",
  "primary_place": "yakesa",
  "dossier_event": "ev_qing_yakesa_llm_01",
  "vocab_pack": "inline:qing_yakesa_llm",
  "terrain_grid": "china_coarse",
  "lead": "雅克萨之战（1685–1686）：康熙二十四至二十五年清军两次围攻雅克萨（黑龙江北岸），击败沙俄哥萨克，毁城而还；1689年签《尼布楚条约》划定中俄东段边界，雅克萨归清。此战遏制沙俄南侵，巩固东北边防。本切片为『真实 LLM 抽取（DeepSeek-chat）+ 人工校订落库』：LLM 依《清圣祖实录》概述抽取断言，curate 报 BLOCK 0，人工补控制层（清方 control 雅克萨）与战略四维（inference）。引文全 paraphrase_unverified；来源《清圣祖实录》为清官修，归『后世官修』；控制层『清方』。",
  "parties_note": "《清圣祖实录》为清官修，归『后世官修』；清军为防御方，控制层『清方』。沙俄方视角经叙事折射。系统不裁决，只并列。",
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "subject_names": {
   "person:QIN__p01": "康熙帝",
   "person:QIN__p02": "萨布素",
   "person:QIN__p03": "彭春",
   "person:QIN__p04": "托尔布津",
   "person:QIN__p05": "郎坦",
   "event:ev_qing_yakesa_llm_01": "第一次雅克萨之战",
   "event:ev_qing_yakesa_llm_02": "第二次雅克萨之战",
   "event:ev_qing_yakesa_llm_03": "尼布楚条约",
   "place:yakesa": "雅克萨",
   "place:heilongjiang": "黑龙江",
   "place:nibuchu": "尼布楚"
  },
  "epoch": "qing",
  "strategic": {
   "political_cohesion": {
    "from": [
     "society",
     "anchors"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "雅克萨之胜凝聚清朝对边疆主权宣示"
   },
   "material_logistics": {
    "from": [
     "economy"
    ],
    "from_dims": [
     3
    ],
    "layer": "inference",
    "note": "清军长途补给黑龙江前线，后勤线漫长"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "调八旗、索伦兵远征东北"
   },
   "geopolitical_strategy": {
    "from": [
     "international"
    ],
    "from_dims": [
     6
    ],
    "layer": "inference",
    "note": "遏制沙俄南侵，尼布楚条约定东段边界"
   }
  },
  "page": "qing_yakesa_llm.html",
  "key": "qing_yakesa_llm",
  "scene_id": "qing_yakesa_llm"
 },
 "sources": [
  {
   "id": "qing_yakesa_src_llm",
   "title": "清圣祖实录（现代概述）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "清官修",
   "period": "清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "yakesa",
   "name": "雅克萨",
   "type": "fortress",
   "modern": "今俄罗斯斯科沃罗季诺附近",
   "note": "黑龙江北岸，俄军据点。坐标据地名志条目：雅克萨，标 approx。",
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 124.0,
   "lat": 53.7,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目：雅克萨（诚实回填 v0.221）。",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "heilongjiang",
   "name": "黑龙江",
   "type": "region",
   "modern": "今中国黑龙江省",
   "note": "清军集结地",
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "nibuchu",
   "name": "尼布楚",
   "type": "city",
   "modern": "今俄罗斯涅尔琴斯克",
   "note": "条约签订地",
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "QIN__p01",
   "name": "康熙帝",
   "role": "清朝皇帝",
   "note": "决策发起雅克萨之战",
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "QIN__p02",
   "name": "萨布素",
   "role": "黑龙江将军",
   "note": "清军前线统帅",
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "QIN__p03",
   "name": "彭春",
   "role": "清军都统",
   "note": "第一次雅克萨之战指挥官",
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "QIN__p04",
   "name": "托尔布津",
   "role": "沙俄雅克萨督军",
   "note": "俄方守将",
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "QIN__p05",
   "name": "郎坦",
   "role": "清军副都统",
   "note": "参与侦察与作战",
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "QIN_001",
   "subject": "event:ev_qing_yakesa_llm_01",
   "predicate": "战役结果",
   "value_text": "清军攻克雅克萨，俄军投降",
   "time": {
    "era_text": "康熙二十四年",
    "start": "1685-01-01",
    "end": "1685-12-31",
    "gregorian_year": 1685
   },
   "place": "yakesa",
   "source": "qing_yakesa_src_llm",
   "quote": "清军围攻雅克萨，俄军投降",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "theater",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "清军围攻雅克萨，俄军投降",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_002",
   "subject": "event:ev_qing_yakesa_llm_01",
   "predicate": "清军行动",
   "value_text": "毁城而还",
   "time": {
    "era_text": "康熙二十四年",
    "start": "1685-01-01",
    "end": "1685-12-31",
    "gregorian_year": 1685
   },
   "place": "yakesa",
   "source": "qing_yakesa_src_llm",
   "quote": "毁城而还",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "毁城而还",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_003",
   "subject": "event:ev_qing_yakesa_llm_02",
   "predicate": "战役结果",
   "value_text": "清军击败哥萨克",
   "time": {
    "era_text": "康熙二十五年",
    "start": "1686-01-01",
    "end": "1686-12-31",
    "gregorian_year": 1686
   },
   "place": "yakesa",
   "source": "qing_yakesa_src_llm",
   "quote": "击败沙俄哥萨克",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "击败沙俄哥萨克",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_004",
   "subject": "event:ev_qing_yakesa_llm_03",
   "predicate": "条约内容",
   "value_text": "雅克萨归清，划定边界",
   "time": {
    "era_text": "康熙二十八年",
    "start": "1689-01-01",
    "end": "1689-12-31",
    "gregorian_year": 1689
   },
   "place": "nibuchu",
   "source": "qing_yakesa_src_llm",
   "quote": "雅克萨归清",
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
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "雅克萨归清",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_005",
   "subject": "event:ev_qing_yakesa_llm_03",
   "predicate": "历史意义",
   "value_text": "遏制沙俄南侵，巩固边防",
   "time": {
    "era_text": "康熙二十八年",
    "start": "1689-01-01",
    "end": "1689-12-31",
    "gregorian_year": 1689
   },
   "place": "nibuchu",
   "source": "qing_yakesa_src_llm",
   "quote": "遏制沙俄南侵，巩固东北边防",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "遏制沙俄南侵，巩固东北边防",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_006",
   "subject": "event:ev_qing_yakesa_llm_01",
   "predicate": "俄军兵力",
   "value_text": "具体兵力不详",
   "time": {
    "era_text": "康熙二十四年",
    "start": "1685-01-01",
    "end": "1685-12-31",
    "gregorian_year": 1685
   },
   "place": "yakesa",
   "source": "qing_yakesa_src_llm",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "俄罗斯档案",
    "skills": [
     "俄语",
     "档案研究"
    ],
    "accept": "俄方兵力数据"
   },
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_007",
   "subject": "event:ev_qing_yakesa_llm_02",
   "predicate": "清军伤亡",
   "value_text": "清军伤亡情况未详",
   "time": {
    "era_text": "康熙二十五年",
    "start": "1686-01-01",
    "end": "1686-12-31",
    "gregorian_year": 1686
   },
   "place": "yakesa",
   "source": "qing_yakesa_src_llm",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "清宫档案",
    "skills": [
     "满文",
     "档案研究"
    ],
    "accept": "清军伤亡数字"
   },
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_008",
   "subject": "event:ev_qing_yakesa_llm_01",
   "predicate": "俄军伤亡",
   "value_text": "俄军伤亡数字不详",
   "time": {
    "era_text": "康熙二十四年",
    "start": "1685-01-01",
    "end": "1685-12-31",
    "gregorian_year": 1685
   },
   "place": "yakesa",
   "source": "qing_yakesa_src_llm",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "俄方战报",
    "skills": [
     "俄语",
     "军事史"
    ],
    "accept": "俄军伤亡数据"
   },
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_009",
   "subject": "event:ev_qing_yakesa_llm_01",
   "predicate": "清军兵力",
   "value_text": "清军兵力约三千",
   "time": {
    "era_text": "康熙二十四年",
    "start": "1685-01-01",
    "end": "1685-12-31",
    "gregorian_year": 1685
   },
   "place": "yakesa",
   "source": "qing_yakesa_src_llm",
   "quote": "清军约三千人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "清军约三千人",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_010",
   "subject": "event:ev_qing_yakesa_llm_02",
   "predicate": "清军兵力",
   "value_text": "清军兵力约两千",
   "time": {
    "era_text": "康熙二十五年",
    "start": "1686-01-01",
    "end": "1686-12-31",
    "gregorian_year": 1686
   },
   "place": "yakesa",
   "source": "qing_yakesa_src_llm",
   "quote": "清军约两千人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "清军约两千人",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_011",
   "subject": "event:ev_qing_yakesa_llm_01",
   "predicate": "俄军兵力",
   "value_text": "俄军约八百人",
   "time": {
    "era_text": "康熙二十四年",
    "start": "1685-01-01",
    "end": "1685-12-31",
    "gregorian_year": 1685
   },
   "place": "yakesa",
   "source": "qing_yakesa_src_llm",
   "quote": "俄军约八百人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.5,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "俄军约八百人",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_012",
   "subject": "event:ev_qing_yakesa_llm_02",
   "predicate": "俄军兵力",
   "value_text": "俄军约八百人",
   "time": {
    "era_text": "康熙二十五年",
    "start": "1686-01-01",
    "end": "1686-12-31",
    "gregorian_year": 1686
   },
   "place": "yakesa",
   "source": "qing_yakesa_src_llm",
   "quote": "俄军约八百人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.5,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "俄军约八百人",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_013",
   "subject": "event:ev_qing_yakesa_llm_01",
   "predicate": "战役性质",
   "value_text": "清军主动进攻",
   "time": {
    "era_text": "康熙二十四年",
    "start": "1685-01-01",
    "end": "1685-12-31",
    "gregorian_year": 1685
   },
   "place": "yakesa",
   "source": "qing_yakesa_src_llm",
   "quote": "清军围攻雅克萨",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "清军围攻雅克萨",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_014",
   "subject": "event:ev_qing_yakesa_llm_02",
   "predicate": "战役性质",
   "value_text": "清军主动进攻",
   "time": {
    "era_text": "康熙二十五年",
    "start": "1686-01-01",
    "end": "1686-12-31",
    "gregorian_year": 1686
   },
   "place": "yakesa",
   "source": "qing_yakesa_src_llm",
   "quote": "清军再围雅克萨",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "清军再围雅克萨",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DIM_qing_yakesa_llm_001",
   "subject": "supplement:qing_yakesa_llm_dim1",
   "predicate": "地理形势",
   "value_text": "雅克萨城在黑龙江北岸，扼水陆要冲，为中俄边界争端焦点",
   "time": {
    "era_text": "清康熙",
    "start": "1685-01-01",
    "gregorian_year": 1685
   },
   "place": "yakesa",
   "source": "qing_yakesa_src_llm",
   "quote": "雅克萨城在黑龙江北岸，扼水陆要冲，为中俄边界争端焦点",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.55,
   "scale": "region",
   "note": "[auto] 补维 地理",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "清军围攻雅克萨，俄军投降",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DIM_qing_yakesa_llm_002",
   "subject": "supplement:qing_yakesa_llm_dim2",
   "predicate": "攻城技术",
   "value_text": "清军以红衣炮围城，断雅克萨水道与援路",
   "time": {
    "era_text": "清康熙",
    "start": "1685-01-01",
    "gregorian_year": 1685
   },
   "place": "heilongjiang",
   "source": "qing_yakesa_src_llm",
   "quote": "清军以红衣炮围城，断雅克萨水道与援路",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "theater",
   "note": "[auto] 补维 技术",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "清军围攻雅克萨，俄军投降",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DIM_qing_yakesa_llm_003",
   "subject": "supplement:qing_yakesa_llm_dim4",
   "predicate": "族群分布",
   "value_text": "黑龙江流域索伦、达呼尔等部居处，俄人筑堡移民",
   "time": {
    "era_text": "清康熙",
    "start": "1685-01-01",
    "gregorian_year": 1685
   },
   "place": "nibuchu",
   "source": "qing_yakesa_src_llm",
   "quote": "黑龙江流域索伦、达呼尔等部居处，俄人筑堡移民",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "region",
   "note": "[auto] 补维 社会",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "清军围攻雅克萨，俄军投降",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "QIN_006",
  "QIN_007",
  "QIN_008"
 ],
 "events": [
  {
   "id": "ev_qing_yakesa_llm_01",
   "subject": "event:ev_qing_yakesa_llm_01",
   "year": 1685,
   "era": "康熙二十四年",
   "title": "第一次雅克萨之战",
   "kind": "战事",
   "text": "清军围攻雅克萨，俄军投降后毁城而还",
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_qing_yakesa_llm_02",
   "subject": "event:ev_qing_yakesa_llm_02",
   "year": 1686,
   "era": "康熙二十五年",
   "title": "第二次雅克萨之战",
   "kind": "战事",
   "text": "清军再围雅克萨，击败哥萨克",
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_qing_yakesa_llm_03",
   "subject": "event:ev_qing_yakesa_llm_03",
   "year": 1689,
   "era": "康熙二十八年",
   "title": "尼布楚条约",
   "kind": "外交",
   "text": "划定中俄东段边界，雅克萨归清",
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "heilongjiang",
   "to": "yakesa",
   "type": "military",
   "label": "清军进攻路线",
   "_source_idx": 0,
   "_source_name": "清圣祖实录（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "rivers_override": [
  {
   "n": "浑河",
   "approx": true,
   "note": "辽东主水系。源出清原，经抚顺、沈阳，西南入辽河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      124.9,
      41.92
     ],
     [
      124.75,
      41.925
     ],
     [
      124.6,
      41.92
     ],
     [
      124.45,
      41.91
     ],
     [
      124.3,
      41.905
     ],
     [
      124.1,
      41.9
     ],
     [
      123.96,
      41.88
     ],
     [
      123.8,
      41.865
     ],
     [
      123.65,
      41.85
     ],
     [
      123.43,
      41.8
     ]
    ]
   }
  },
  {
   "n": "苏子河",
   "approx": true,
   "note": "浑河支流，流经新宾（赫图阿拉附近），于抚顺关以东汇入浑河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      125.35,
      41.98
     ],
     [
      125.2,
      41.92
     ],
     [
      125.03,
      41.85
     ],
     [
      124.85,
      41.86
     ],
     [
      124.65,
      41.88
     ],
     [
      124.45,
      41.9
     ],
     [
      124.28,
      41.92
     ]
    ]
   }
  },
  {
   "n": "清河",
   "approx": true,
   "note": "浑河支流，流经铁岭—开原间，于调兵山以南汇入浑河。萨尔浒之战明军北线（清河堡）依此水。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      123.45,
      42.35
     ],
     [
      123.7,
      42.15
     ],
     [
      123.95,
      41.95
     ],
     [
      124.15,
      41.7
     ],
     [
      124.3,
      41.55
     ]
    ]
   }
  },
  {
   "n": "深河",
   "approx": true,
   "note": "苏子河支流，流经新宾东南，于旺清门以东汇入苏子河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      124.6,
      41.95
     ],
     [
      124.8,
      41.75
     ],
     [
      125.0,
      41.55
     ],
     [
      125.15,
      41.35
     ]
    ]
   }
  }
 ],
 "control": [],
 "control_seats": [],
 "control_years": null,
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
       124.89,
       39.602
      ],
      [
       124.849,
       39.508
      ],
      [
       124.935,
       39.608
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
        121.578,
        40.856
       ],
       [
        121.729,
        40.846
       ],
       [
        121.809,
        40.969
       ],
       [
        121.859,
        40.842
       ],
       [
        122.179,
        40.603
       ],
       [
        122.264,
        40.5
       ],
       [
        122.191,
        40.358
       ],
       [
        121.869,
        40.046
       ],
       [
        121.578,
        39.867
       ],
       [
        122.84,
        39.601
       ],
       [
        123.032,
        39.674
       ],
       [
        123.269,
        39.727
       ],
       [
        123.49,
        39.768
       ],
       [
        123.611,
        39.841
       ],
       [
        123.76,
        39.822
       ],
       [
        124.267,
        39.924
       ],
       [
        124.362,
        40.004
       ],
       [
        124.349,
        39.907
       ],
       [
        124.557,
        39.791
       ],
       [
        124.638,
        39.615
       ],
       [
        124.732,
        39.652
       ],
       [
        124.775,
        39.758
       ],
       [
        125.1,
        39.59
       ],
       [
        125.361,
        39.527
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
        124.905,
        39.536
       ],
       [
        124.846,
        39.559
       ],
       [
        124.935,
        39.608
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
        121.578,
        39.498
       ],
       [
        127.203,
        55.553
       ],
       [
        125.365,
        39.498
       ],
       [
        125.18,
        39.583
       ],
       [
        124.868,
        39.702
       ],
       [
        124.739,
        39.742
       ],
       [
        124.699,
        39.632
       ],
       [
        124.608,
        39.717
       ],
       [
        124.404,
        39.866
       ],
       [
        124.375,
        39.996
       ],
       [
        124.35,
        40.012
       ],
       [
        124.106,
        39.841
       ],
       [
        123.651,
        39.882
       ],
       [
        123.581,
        39.786
       ],
       [
        123.348,
        39.763
       ],
       [
        123.227,
        39.687
       ],
       [
        122.961,
        39.62
       ],
       [
        122.618,
        39.498
       ],
       [
        121.578,
        39.867
       ],
       [
        121.869,
        40.046
       ],
       [
        122.191,
        40.358
       ],
       [
        122.264,
        40.5
       ],
       [
        122.179,
        40.603
       ],
       [
        121.859,
        40.842
       ],
       [
        121.809,
        40.969
       ],
       [
        121.729,
        40.846
       ],
       [
        121.578,
        40.856
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
     "type": "Polygon",
     "coordinates": [
      [
       [
        121.578,
        42.492
       ],
       [
        121.604,
        42.495
       ],
       [
        121.699,
        42.439
       ],
       [
        121.803,
        42.515
       ],
       [
        121.831,
        42.534
       ],
       [
        121.89,
        42.557
       ],
       [
        121.916,
        42.656
       ],
       [
        121.939,
        42.688
       ],
       [
        122.062,
        42.724
       ],
       [
        122.161,
        42.685
       ],
       [
        122.205,
        42.733
       ],
       [
        122.325,
        42.685
       ],
       [
        122.396,
        42.684
       ],
       [
        122.461,
        42.755
       ],
       [
        122.372,
        42.776
       ],
       [
        122.437,
        42.843
       ],
       [
        122.576,
        42.819
       ],
       [
        122.625,
        42.773
       ],
       [
        122.733,
        42.786
       ],
       [
        122.786,
        42.757
       ],
       [
        122.883,
        42.752
       ],
       [
        122.926,
        42.772
       ],
       [
        122.98,
        42.778
       ],
       [
        123.118,
        42.801
       ],
       [
        123.17,
        42.86
       ],
       [
        123.184,
        42.926
       ],
       [
        123.323,
        43.001
       ],
       [
        123.475,
        43.042
       ],
       [
        123.573,
        43.003
       ],
       [
        123.631,
        43.088
       ],
       [
        123.667,
        43.18
       ],
       [
        123.677,
        43.224
       ],
       [
        123.698,
        43.272
       ],
       [
        123.608,
        43.366
       ],
       [
        123.52,
        43.402
       ],
       [
        123.442,
        43.438
       ],
       [
        123.383,
        43.469
       ],
       [
        123.316,
        43.492
       ],
       [
        123.305,
        43.551
       ],
       [
        123.453,
        43.546
       ],
       [
        123.434,
        43.575
       ],
       [
        123.512,
        43.593
       ],
       [
        123.537,
        43.634
       ],
       [
        123.52,
        43.708
       ],
       [
        123.498,
        43.771
       ],
       [
        123.468,
        43.854
       ],
       [
        123.371,
        43.97
       ],
       [
        123.366,
        44.014
       ],
       [
        123.328,
        44.084
       ],
       [
        123.363,
        44.133
       ],
       [
        123.324,
        44.18
       ],
       [
        123.277,
        44.253
       ],
       [
        123.129,
        44.367
       ],
       [
        123.142,
        44.428
       ],
       [
        123.137,
        44.486
       ],
       [
        123.066,
        44.506
       ],
       [
        122.856,
        44.398
       ],
       [
        122.703,
        44.319
       ],
       [
        122.642,
        44.284
       ],
       [
        122.483,
        44.237
       ],
       [
        122.271,
        44.256
       ],
       [
        122.295,
        44.411
       ],
       [
        122.228,
        44.48
       ],
       [
        122.196,
        44.56
       ],
       [
        122.114,
        44.616
       ],
       [
        122.117,
        44.702
       ],
       [
        122.152,
        44.744
       ],
       [
        122.11,
        44.768
       ],
       [
        122.169,
        44.77
       ],
       [
        122.098,
        44.819
       ],
       [
        122.079,
        44.914
       ],
       [
        122.075,
        45.007
       ],
       [
        122.12,
        45.069
       ],
       [
        122.143,
        45.183
       ],
       [
        122.23,
        45.207
       ],
       [
        122.147,
        45.296
       ],
       [
        122.18,
        45.41
       ],
       [
        122.064,
        45.473
       ],
       [
        121.993,
        45.553
       ],
       [
        121.996,
        45.599
       ],
       [
        121.97,
        45.693
       ],
       [
        121.867,
        45.72
       ],
       [
        121.811,
        45.687
       ],
       [
        121.666,
        45.728
       ],
       [
        121.657,
        45.77
       ],
       [
        121.754,
        45.795
       ],
       [
        121.77,
        45.844
       ],
       [
        121.806,
        45.901
       ],
       [
        121.809,
        45.961
       ],
       [
        121.819,
        46.023
       ],
       [
        121.864,
        46.002
       ],
       [
        121.928,
        45.989
       ],
       [
        122.085,
        45.912
       ],
       [
        122.201,
        45.857
       ],
       [
        122.254,
        45.798
       ],
       [
        122.338,
        45.86
       ],
       [
        122.362,
        45.917
       ],
       [
        122.496,
        45.858
       ],
       [
        122.523,
        45.787
       ],
       [
        122.603,
        45.778
       ],
       [
        122.65,
        45.731
       ],
       [
        122.742,
        45.705
       ],
       [
        122.792,
        45.766
       ],
       [
        122.773,
        45.857
       ],
       [
        122.829,
        45.912
       ],
       [
        123.046,
        46.1
       ],
       [
        123.113,
        46.13
       ],
       [
        123.127,
        46.175
       ],
       [
        123.178,
        46.248
       ],
       [
        123.09,
        46.348
       ],
       [
        123.01,
        46.525
       ],
       [
        123.053,
        46.58
       ],
       [
        123.077,
        46.622
       ],
       [
        123.181,
        46.614
       ],
       [
        123.279,
        46.617
       ],
       [
        123.318,
        46.662
       ],
       [
        123.475,
        46.687
       ],
       [
        123.632,
        46.729
       ],
       [
        123.58,
        46.827
       ],
       [
        123.599,
        46.868
       ],
       [
        123.577,
        46.891
       ],
       [
        123.563,
        46.826
       ],
       [
        123.483,
        46.846
       ],
       [
        123.488,
        46.96
       ],
       [
        123.337,
        46.989
       ],
       [
        123.304,
        46.965
       ],
       [
        123.405,
        46.935
       ],
       [
        123.374,
        46.838
       ],
       [
        123.296,
        46.865
       ],
       [
        123.223,
        46.821
       ],
       [
        123.164,
        46.74
       ],
       [
        123.077,
        46.745
       ],
       [
        123.004,
        46.731
       ],
       [
        122.907,
        46.807
       ],
       [
        122.895,
        46.96
       ],
       [
        122.791,
        46.942
       ],
       [
        122.774,
        46.974
       ],
       [
        122.846,
        47.047
       ],
       [
        122.821,
        47.066
       ],
       [
        122.68,
        47.094
       ],
       [
        122.583,
        47.158
       ],
       [
        122.498,
        47.255
       ],
       [
        122.441,
        47.31
       ],
       [
        122.507,
        47.401
       ],
       [
        122.594,
        47.547
       ],
       [
        122.849,
        47.674
       ],
       [
        123.041,
        47.746
       ],
       [
        123.214,
        47.825
       ],
       [
        123.3,
        47.954
       ],
       [
        123.579,
        48.045
       ],
       [
        123.746,
        48.198
       ],
       [
        124.019,
        48.393
       ],
       [
        124.137,
        48.463
       ],
       [
        124.314,
        48.504
       ],
       [
        124.33,
        48.436
       ],
       [
        124.332,
        48.38
       ],
       [
        124.354,
        48.316
       ],
       [
        124.422,
        48.246
       ],
       [
        124.419,
        48.182
       ],
       [
        124.471,
        48.133
       ],
       [
        124.416,
        48.088
       ],
       [
        124.478,
        48.123
       ],
       [
        124.53,
        48.147
       ],
       [
        124.547,
        48.201
       ],
       [
        124.559,
        48.268
       ],
       [
        124.541,
        48.335
       ],
       [
        124.519,
        48.378
       ],
       [
        124.508,
        48.446
       ],
       [
        124.534,
        48.515
       ],
       [
        124.521,
        48.556
       ],
       [
        124.602,
        48.633
       ],
       [
        124.612,
        48.748
       ],
       [
        124.644,
        48.808
       ],
       [
        124.697,
        48.842
       ],
       [
        124.709,
        48.92
       ],
       [
        124.757,
        48.967
       ],
       [
        124.829,
        49.078
       ],
       [
        124.848,
        49.13
       ],
       [
        124.907,
        49.184
       ],
       [
        125.04,
        49.176
       ],
       [
        125.117,
        49.126
       ],
       [
        125.188,
        49.187
       ],
       [
        125.228,
        49.249
       ],
       [
        125.262,
        49.322
       ],
       [
        125.278,
        49.38
       ],
       [
        125.257,
        49.437
       ],
       [
        125.228,
        49.487
       ],
       [
        125.234,
        49.537
       ],
       [
        125.206,
        49.594
       ],
       [
        125.154,
        49.617
       ],
       [
        125.132,
        49.672
       ],
       [
        125.19,
        49.652
       ],
       [
        125.22,
        49.669
       ],
       [
        125.204,
        49.734
       ],
       [
        125.223,
        49.799
       ],
       [
        125.239,
        49.845
       ],
       [
        125.246,
        49.872
       ],
       [
        125.226,
        49.922
       ],
       [
        125.19,
        49.96
       ],
       [
        125.242,
        49.988
       ],
       [
        125.298,
        50.014
       ],
       [
        125.253,
        50.041
       ],
       [
        125.316,
        50.046
       ],
       [
        125.284,
        50.07
       ],
       [
        125.259,
        50.104
       ],
       [
        125.311,
        50.14
       ],
       [
        125.335,
        50.161
       ],
       [
        125.391,
        50.2
       ],
       [
        125.449,
        50.216
       ],
       [
        125.466,
        50.267
       ],
       [
        125.531,
        50.331
       ],
       [
        125.547,
        50.359
       ],
       [
        125.536,
        50.42
       ],
       [
        125.583,
        50.41
       ],
       [
        125.58,
        50.449
       ],
       [
        125.655,
        50.471
       ],
       [
        125.741,
        50.523
       ],
       [
        125.77,
        50.531
       ],
       [
        125.829,
        50.562
       ],
       [
        125.815,
        50.621
       ],
       [
        125.804,
        50.659
       ],
       [
        125.826,
        50.704
       ],
       [
        125.796,
        50.739
       ],
       [
        125.804,
        50.773
       ],
       [
        125.847,
        50.77
       ],
       [
        125.89,
        50.806
       ],
       [
        125.913,
        50.826
       ],
       [
        125.962,
        50.901
       ],
       [
        125.996,
        50.907
       ],
       [
        126.043,
        50.926
       ],
       [
        126.042,
        50.982
       ],
       [
        126.059,
        51.044
       ],
       [
        125.994,
        51.119
       ],
       [
        125.947,
        51.108
       ],
       [
        125.865,
        51.146
       ],
       [
        125.819,
        51.227
       ],
       [
        125.761,
        51.262
       ],
       [
        125.7,
        51.327
       ],
       [
        125.624,
        51.388
       ],
       [
        125.601,
        51.41
       ],
       [
        125.595,
        51.417
       ],
       [
        125.528,
        51.488
       ],
       [
        125.38,
        51.586
       ],
       [
        125.316,
        51.61
       ],
       [
        125.229,
        51.641
       ],
       [
        125.176,
        51.639
       ],
       [
        125.129,
        51.659
       ],
       [
        125.06,
        51.597
       ],
       [
        125.047,
        51.53
       ],
       [
        124.984,
        51.508
       ],
       [
        124.918,
        51.474
       ],
       [
        124.885,
        51.408
       ],
       [
        124.784,
        51.392
       ],
       [
        124.753,
        51.358
       ],
       [
        124.627,
        51.327
       ],
       [
        124.556,
        51.375
       ],
       [
        124.478,
        51.362
       ],
       [
        124.427,
        51.332
       ],
       [
        124.407,
        51.272
       ],
       [
        124.298,
        51.299
       ],
       [
        124.239,
        51.345
       ],
       [
        124.128,
        51.347
       ],
       [
        124.072,
        51.321
       ],
       [
        123.94,
        51.313
       ],
       [
        123.887,
        51.321
       ],
       [
        123.794,
        51.361
       ],
       [
        123.66,
        51.343
       ],
       [
        123.583,
        51.307
       ],
       [
        123.463,
        51.287
       ],
       [
        123.414,
        51.279
       ],
       [
        123.34,
        51.272
       ],
       [
        123.231,
        51.269
       ],
       [
        123.128,
        51.298
       ],
       [
        123.003,
        51.312
       ],
       [
        122.966,
        51.387
       ],
       [
        122.904,
        51.415
       ],
       [
        122.871,
        51.455
       ],
       [
        122.88,
        51.511
       ],
       [
        122.88,
        51.538
       ],
       [
        122.833,
        51.582
       ],
       [
        122.821,
        51.633
       ],
       [
        122.779,
        51.698
       ],
       [
        122.772,
        51.78
       ],
       [
        122.726,
        51.878
       ],
       [
        122.729,
        51.919
       ],
       [
        122.684,
        51.975
       ],
       [
        122.651,
        52.059
       ],
       [
        122.644,
        52.112
       ],
       [
        122.691,
        52.14
       ],
       [
        122.769,
        52.18
       ],
       [
        122.787,
        52.252
       ],
       [
        122.711,
        52.256
       ],
       [
        122.586,
        52.266
       ],
       [
        122.478,
        52.296
       ],
       [
        122.447,
        52.394
       ],
       [
        122.379,
        52.396
       ],
       [
        122.342,
        52.414
       ],
       [
        122.311,
        52.475
       ],
       [
        122.178,
        52.49
       ],
       [
        122.14,
        52.51
       ],
       [
        122.107,
        52.452
       ],
       [
        122.091,
        52.427
       ],
       [
        122.036,
        52.378
       ],
       [
        121.948,
        52.298
       ],
       [
        121.841,
        52.283
       ],
       [
        121.714,
        52.318
       ],
       [
        121.658,
        52.39
       ],
       [
        121.64,
        52.444
       ],
       [
        121.578,
        52.452
       ],
       [
        121.591,
        52.825
       ],
       [
        121.604,
        52.872
       ],
       [
        121.663,
        52.912
       ],
       [
        121.716,
        52.998
       ],
       [
        121.818,
        53.062
       ],
       [
        121.785,
        53.104
       ],
       [
        121.722,
        53.146
       ],
       [
        121.66,
        53.195
       ],
       [
        121.68,
        53.241
       ],
       [
        121.615,
        53.259
       ],
       [
        121.578,
        42.492
       ]
      ]
     ]
    },
    "n": "内蒙古自治区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         123.534,
         39.788
        ],
        [
         123.579,
         39.781
        ],
        [
         123.642,
         39.796
        ],
        [
         123.675,
         39.827
        ],
        [
         123.795,
         39.823
        ],
        [
         123.951,
         39.818
        ],
        [
         124.103,
         39.823
        ],
        [
         124.151,
         39.746
        ],
        [
         124.214,
         39.865
        ],
        [
         124.217,
         39.894
        ],
        [
         124.219,
         39.899
        ],
        [
         124.287,
         39.932
        ],
        [
         124.349,
         39.989
        ],
        [
         124.336,
         40.05
        ],
        [
         124.428,
         40.144
        ],
        [
         124.49,
         40.184
        ],
        [
         124.515,
         40.22
        ],
        [
         124.723,
         40.322
        ],
        [
         124.834,
         40.423
        ],
        [
         124.946,
         40.456
        ],
        [
         125.044,
         40.467
        ],
        [
         125.005,
         40.496
        ],
        [
         125.077,
         40.562
        ],
        [
         125.182,
         40.611
        ],
        [
         125.279,
         40.655
        ],
        [
         125.329,
         40.644
        ],
        [
         125.422,
         40.636
        ],
        [
         125.454,
         40.677
        ],
        [
         125.496,
         40.729
        ],
        [
         125.551,
         40.762
        ],
        [
         125.617,
         40.764
        ],
        [
         125.676,
         40.788
        ],
        [
         125.648,
         40.826
        ],
        [
         125.688,
         40.898
        ],
        [
         125.584,
         40.892
        ],
        [
         125.635,
         40.942
        ],
        [
         125.675,
         40.975
        ],
        [
         125.727,
         41.055
        ],
        [
         125.712,
         41.095
        ],
        [
         125.76,
         41.133
        ],
        [
         125.738,
         41.178
        ],
        [
         125.749,
         41.245
        ],
        [
         125.685,
         41.274
        ],
        [
         125.642,
         41.296
        ],
        [
         125.637,
         41.344
        ],
        [
         125.59,
         41.359
        ],
        [
         125.548,
         41.401
        ],
        [
         125.533,
         41.479
        ],
        [
         125.507,
         41.534
        ],
        [
         125.45,
         41.598
        ],
        [
         125.447,
         41.676
        ],
        [
         125.344,
         41.672
        ],
        [
         125.332,
         41.711
        ],
        [
         125.336,
         41.768
        ],
        [
         125.323,
         41.771
        ],
        [
         125.319,
         41.777
        ],
        [
         125.308,
         41.925
        ],
        [
         125.292,
         41.959
        ],
        [
         125.37,
         42.003
        ],
        [
         125.416,
         42.064
        ],
        [
         125.446,
         42.098
        ],
        [
         125.458,
         42.16
        ],
        [
         125.414,
         42.156
        ],
        [
         125.357,
         42.145
        ],
        [
         125.313,
         42.197
        ],
        [
         125.313,
         42.22
        ],
        [
         125.276,
         42.267
        ],
        [
         125.264,
         42.313
        ],
        [
         125.175,
         42.308
        ],
        [
         125.204,
         42.367
        ],
        [
         125.186,
         42.428
        ],
        [
         125.15,
         42.459
        ],
        [
         125.069,
         42.499
        ],
        [
         125.067,
         42.535
        ],
        [
         125.083,
         42.591
        ],
        [
         125.039,
         42.615
        ],
        [
         125.015,
         42.666
        ],
        [
         124.968,
         42.723
        ],
        [
         124.975,
         42.803
        ],
        [
         124.898,
         42.788
        ],
        [
         124.857,
         42.824
        ],
        [
         124.872,
         42.962
        ],
        [
         124.841,
         43.032
        ],
        [
         124.883,
         43.134
        ],
        [
         124.755,
         43.074
        ],
        [
         124.687,
         43.051
        ],
        [
         124.659,
         42.973
        ],
        [
         124.632,
         42.95
        ],
        [
         124.587,
         42.905
        ],
        [
         124.436,
         42.881
        ],
        [
         124.381,
         42.913
        ],
        [
         124.442,
         42.959
        ],
        [
         124.37,
         42.973
        ],
        [
         124.426,
         43.076
        ],
        [
         124.274,
         43.179
        ],
        [
         124.276,
         43.233
        ],
        [
         124.215,
         43.256
        ],
        [
         124.114,
         43.247
        ],
        [
         124.099,
         43.293
        ],
        [
         123.964,
         43.341
        ],
        [
         123.881,
         43.392
        ],
        [
         123.852,
         43.406
        ],
        [
         123.858,
         43.459
        ],
        [
         123.748,
         43.472
        ],
        [
         123.71,
         43.417
        ],
        [
         123.698,
         43.272
        ],
        [
         123.677,
         43.224
        ],
        [
         123.667,
         43.18
        ],
        [
         123.631,
         43.088
        ],
        [
         123.573,
         43.003
        ],
        [
         123.475,
         43.042
        ],
        [
         123.323,
         43.001
        ],
        [
         123.184,
         42.926
        ],
        [
         123.17,
         42.86
        ],
        [
         123.118,
         42.801
        ],
        [
         122.98,
         42.778
        ],
        [
         122.926,
         42.772
        ],
        [
         122.883,
         42.752
        ],
        [
         122.849,
         42.712
        ],
        [
         122.786,
         42.757
        ],
        [
         122.733,
         42.786
        ],
        [
         122.625,
         42.773
        ],
        [
         122.576,
         42.819
        ],
        [
         122.437,
         42.843
        ],
        [
         122.372,
         42.776
        ],
        [
         122.461,
         42.755
        ],
        [
         122.396,
         42.684
        ],
        [
         122.325,
         42.685
        ],
        [
         122.205,
         42.733
        ],
        [
         122.161,
         42.685
        ],
        [
         122.062,
         42.724
        ],
        [
         121.939,
         42.688
        ],
        [
         121.916,
         42.656
        ],
        [
         121.89,
         42.557
        ],
        [
         121.831,
         42.534
        ],
        [
         121.803,
         42.515
        ],
        [
         121.699,
         42.439
        ],
        [
         121.604,
         42.495
        ],
        [
         121.578,
         42.492
        ],
        [
         121.626,
         40.844
        ],
        [
         121.732,
         40.847
        ],
        [
         121.778,
         40.887
        ],
        [
         121.843,
         40.832
        ],
        [
         121.934,
         40.798
        ],
        [
         121.952,
         40.681
        ],
        [
         122.066,
         40.649
        ],
        [
         122.149,
         40.672
        ],
        [
         122.15,
         40.588
        ],
        [
         122.231,
         40.505
        ],
        [
         122.222,
         40.481
        ],
        [
         122.251,
         40.446
        ],
        [
         122.187,
         40.423
        ],
        [
         122.152,
         40.358
        ],
        [
         122.111,
         40.349
        ],
        [
         122.11,
         40.316
        ],
        [
         122.04,
         40.322
        ],
        [
         122.027,
         40.245
        ],
        [
         121.95,
         40.204
        ],
        [
         122.003,
         40.172
        ],
        [
         121.956,
         40.133
        ],
        [
         121.825,
         40.026
        ],
        [
         121.779,
         39.943
        ],
        [
         121.7,
         39.937
        ],
        [
         121.578,
         39.867
        ],
        [
         122.641,
         39.498
        ],
        [
         122.683,
         39.515
        ],
        [
         122.847,
         39.582
        ],
        [
         122.942,
         39.605
        ],
        [
         122.979,
         39.616
        ],
        [
         123.011,
         39.655
        ],
        [
         123.146,
         39.647
        ],
        [
         123.213,
         39.666
        ],
        [
         123.253,
         39.69
        ],
        [
         123.27,
         39.715
        ],
        [
         123.351,
         39.751
        ],
        [
         123.393,
         39.724
        ],
        [
         123.522,
         39.773
        ]
       ]
      ],
      [
       [
        [
         123.023,
         39.547
        ],
        [
         122.945,
         39.52
        ],
        [
         122.998,
         39.498
        ],
        [
         123.023,
         39.547
        ]
       ]
      ],
      [
       [
        [
         123.717,
         39.745
        ],
        [
         123.72,
         39.763
        ]
       ]
      ]
     ]
    },
    "n": "辽宁省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         127.203,
         44.644
        ],
        [
         127.139,
         44.607
        ],
        [
         127.09,
         44.594
        ],
        [
         127.042,
         44.591
        ],
        [
         127.031,
         44.673
        ],
        [
         126.997,
         44.765
        ],
        [
         127.0,
         44.874
        ],
        [
         127.073,
         44.907
        ],
        [
         127.05,
         45.004
        ],
        [
         126.985,
         45.068
        ],
        [
         126.964,
         45.132
        ],
        [
         126.793,
         45.135
        ],
        [
         126.732,
         45.187
        ],
        [
         126.64,
         45.214
        ],
        [
         126.569,
         45.253
        ],
        [
         126.519,
         45.248
        ],
        [
         126.356,
         45.186
        ],
        [
         126.285,
         45.162
        ],
        [
         126.226,
         45.154
        ],
        [
         126.143,
         45.148
        ],
        [
         126.048,
         45.171
        ],
        [
         125.993,
         45.192
        ],
        [
         125.915,
         45.197
        ],
        [
         125.824,
         45.238
        ],
        [
         125.762,
         45.291
        ],
        [
         125.695,
         45.352
        ],
        [
         125.712,
         45.478
        ],
        [
         125.66,
         45.507
        ],
        [
         125.583,
         45.492
        ],
        [
         125.48,
         45.486
        ],
        [
         125.435,
         45.463
        ],
        [
         125.362,
         45.393
        ],
        [
         125.302,
         45.402
        ],
        [
         125.19,
         45.399
        ],
        [
         125.097,
         45.383
        ],
        [
         125.089,
         45.421
        ],
        [
         125.026,
         45.493
        ],
        [
         124.937,
         45.534
        ],
        [
         124.885,
         45.495
        ],
        [
         124.84,
         45.456
        ],
        [
         124.776,
         45.468
        ],
        [
         124.691,
         45.452
        ],
        [
         124.575,
         45.451
        ],
        [
         124.544,
         45.412
        ],
        [
         124.481,
         45.456
        ],
        [
         124.374,
         45.458
        ],
        [
         124.369,
         45.513
        ],
        [
         124.288,
         45.539
        ],
        [
         124.273,
         45.584
        ],
        [
         124.227,
         45.634
        ],
        [
         124.128,
         45.642
        ],
        [
         124.122,
         45.669
        ],
        [
         124.102,
         45.701
        ],
        [
         124.054,
         45.751
        ],
        [
         124.002,
         45.771
        ],
        [
         124.036,
         45.838
        ],
        [
         124.061,
         45.886
        ],
        [
         123.969,
         45.937
        ],
        [
         124.012,
         45.982
        ],
        [
         124.04,
         46.02
        ],
        [
         124.01,
         46.058
        ],
        [
         123.994,
         46.101
        ],
        [
         123.992,
         46.143
        ],
        [
         123.972,
         46.17
        ],
        [
         123.98,
         46.229
        ],
        [
         123.96,
         46.288
        ],
        [
         123.918,
         46.257
        ],
        [
         123.85,
         46.302
        ],
        [
         123.726,
         46.256
        ],
        [
         123.605,
         46.252
        ],
        [
         123.57,
         46.224
        ],
        [
         123.453,
         46.233
        ],
        [
         123.357,
         46.232
        ],
        [
         123.321,
         46.254
        ],
        [
         123.248,
         46.273
        ],
        [
         123.129,
         46.211
        ],
        [
         123.103,
         46.172
        ],
        [
         123.07,
         46.124
        ],
        [
         122.793,
         46.073
        ],
        [
         122.8,
         45.857
        ],
        [
         122.752,
         45.835
        ],
        [
         122.751,
         45.736
        ],
        [
         122.672,
         45.7
        ],
        [
         122.641,
         45.771
        ],
        [
         122.556,
         45.822
        ],
        [
         122.505,
         45.787
        ],
        [
         122.446,
         45.917
        ],
        [
         122.373,
         45.856
        ],
        [
         122.301,
         45.813
        ],
        [
         122.237,
         45.832
        ],
        [
         122.091,
         45.882
        ],
        [
         122.04,
         45.959
        ],
        [
         121.924,
         46.005
        ],
        [
         121.844,
         46.024
        ],
        [
         121.762,
         45.999
        ],
        [
         121.822,
         45.918
        ],
        [
         121.817,
         45.875
        ],
        [
         121.767,
         45.83
        ],
        [
         121.754,
         45.795
        ],
        [
         121.657,
         45.77
        ],
        [
         121.666,
         45.728
        ],
        [
         121.811,
         45.687
        ],
        [
         121.867,
         45.72
        ],
        [
         121.97,
         45.693
        ],
        [
         121.996,
         45.599
        ],
        [
         121.993,
         45.553
        ],
        [
         122.064,
         45.473
        ],
        [
         122.18,
         45.41
        ],
        [
         122.147,
         45.296
        ],
        [
         122.23,
         45.207
        ],
        [
         122.143,
         45.183
        ],
        [
         122.12,
         45.069
        ],
        [
         122.075,
         45.007
        ],
        [
         122.079,
         44.914
        ],
        [
         122.098,
         44.819
        ],
        [
         122.169,
         44.77
        ],
        [
         122.11,
         44.768
        ],
        [
         122.152,
         44.744
        ],
        [
         122.117,
         44.702
        ],
        [
         122.114,
         44.616
        ],
        [
         122.196,
         44.56
        ],
        [
         122.228,
         44.48
        ],
        [
         122.295,
         44.411
        ],
        [
         122.271,
         44.256
        ],
        [
         122.483,
         44.237
        ],
        [
         122.642,
         44.284
        ],
        [
         122.703,
         44.319
        ],
        [
         122.856,
         44.398
        ],
        [
         123.066,
         44.506
        ],
        [
         123.137,
         44.486
        ],
        [
         123.142,
         44.428
        ],
        [
         123.129,
         44.367
        ],
        [
         123.277,
         44.253
        ],
        [
         123.324,
         44.18
        ],
        [
         123.363,
         44.133
        ],
        [
         123.328,
         44.084
        ],
        [
         123.366,
         44.014
        ],
        [
         123.371,
         43.97
        ],
        [
         123.468,
         43.854
        ],
        [
         123.498,
         43.771
        ],
        [
         123.52,
         43.708
        ],
        [
         123.537,
         43.634
        ],
        [
         123.512,
         43.593
        ],
        [
         123.434,
         43.575
        ],
        [
         123.453,
         43.546
        ],
        [
         123.36,
         43.567
        ],
        [
         123.33,
         43.519
        ],
        [
         123.364,
         43.483
        ],
        [
         123.42,
         43.41
        ],
        [
         123.486,
         43.445
        ],
        [
         123.545,
         43.415
        ],
        [
         123.704,
         43.37
        ],
        [
         123.749,
         43.439
        ],
        [
         123.797,
         43.49
        ],
        [
         123.858,
         43.459
        ],
        [
         123.881,
         43.392
        ],
        [
         123.896,
         43.361
        ],
        [
         124.033,
         43.281
        ],
        [
         124.117,
         43.277
        ],
        [
         124.168,
         43.244
        ],
        [
         124.229,
         43.235
        ],
        [
         124.287,
         43.208
        ],
        [
         124.366,
         43.122
        ],
        [
         124.333,
         42.997
        ],
        [
         124.423,
         42.975
        ],
        [
         124.432,
         42.931
        ],
        [
         124.372,
         42.881
        ],
        [
         124.466,
         42.847
        ],
        [
         124.607,
         42.937
        ],
        [
         124.635,
         42.973
        ],
        [
         124.678,
         43.002
        ],
        [
         124.72,
         43.07
        ],
        [
         124.785,
         43.117
        ],
        [
         124.889,
         43.075
        ],
        [
         124.87,
         42.988
        ],
        [
         124.85,
         42.883
        ],
        [
         124.874,
         42.79
        ],
        [
         124.928,
         42.82
        ],
        [
         124.997,
         42.745
        ],
        [
         124.991,
         42.677
        ],
        [
         125.011,
         42.632
        ],
        [
         125.097,
         42.622
        ],
        [
         125.09,
         42.568
        ],
        [
         125.091,
         42.516
        ],
        [
         125.105,
         42.491
        ],
        [
         125.14,
         42.447
        ],
        [
         125.186,
         42.382
        ],
        [
         125.167,
         42.352
        ],
        [
         125.224,
         42.301
        ],
        [
         125.299,
         42.29
        ],
        [
         125.276,
         42.231
        ],
        [
         125.281,
         42.175
        ],
        [
         125.306,
         42.146
        ],
        [
         125.368,
         42.183
        ],
        [
         125.458,
         42.16
        ],
        [
         125.49,
         42.136
        ],
        [
         125.414,
         42.102
        ],
        [
         125.363,
         42.017
        ],
        [
         125.299,
         41.974
        ],
        [
         125.352,
         41.928
        ],
        [
         125.295,
         41.823
        ],
        [
         125.319,
         41.777
        ],
        [
         125.323,
         41.771
        ],
        [
         125.336,
         41.768
        ],
        [
         125.317,
         41.677
        ],
        [
         125.412,
         41.691
        ],
        [
         125.461,
         41.643
        ],
        [
         125.48,
         41.545
        ],
        [
         125.493,
         41.509
        ],
        [
         125.534,
         41.429
        ],
        [
         125.581,
         41.397
        ],
        [
         125.61,
         41.365
        ],
        [
         125.62,
         41.318
        ],
        [
         125.647,
         41.264
        ],
        [
         125.695,
         41.245
        ],
        [
         125.759,
         41.232
        ],
        [
         125.791,
         41.168
        ],
        [
         125.734,
         41.126
        ],
        [
         125.74,
         41.089
        ],
        [
         125.684,
         41.022
        ],
        [
         125.65,
         40.971
        ],
        [
         125.589,
         40.931
        ],
        [
         125.652,
         40.916
        ],
        [
         125.708,
         40.867
        ],
        [
         125.817,
         40.867
        ],
        [
         125.875,
         40.909
        ],
        [
         125.959,
         40.882
        ],
        [
         126.041,
         40.929
        ],
        [
         126.083,
         40.977
        ],
        [
         126.109,
         41.012
        ],
        [
         126.134,
         41.064
        ],
        [
         126.168,
         41.095
        ],
        [
         126.189,
         41.115
        ],
        [
         126.332,
         41.237
        ],
        [
         126.373,
         41.289
        ],
        [
         126.497,
         41.375
        ],
        [
         126.539,
         41.367
        ],
        [
         126.56,
         41.548
        ],
        [
         126.564,
         41.609
        ],
        [
         126.608,
         41.669
        ],
        [
         126.688,
         41.674
        ],
        [
         126.691,
         41.728
        ],
        [
         126.723,
         41.753
        ],
        [
         126.809,
         41.749
        ],
        [
         126.856,
         41.76
        ],
        [
         126.931,
         41.813
        ],
        [
         126.94,
         41.773
        ],
        [
         127.006,
         41.749
        ],
        [
         127.058,
         41.704
        ],
        [
         127.103,
         41.648
        ],
        [
         127.127,
         41.622
        ],
        [
         127.178,
         41.6
        ],
        [
         127.119,
         41.54
        ],
        [
         127.188,
         41.527
        ],
        [
         127.203,
         44.644
        ]
       ]
      ]
     ]
    },
    "n": "吉林省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         123.57,
         46.224
        ],
        [
         123.674,
         46.259
        ],
        [
         123.776,
         46.263
        ],
        [
         123.896,
         46.304
        ],
        [
         123.936,
         46.287
        ],
        [
         123.952,
         46.257
        ],
        [
         123.956,
         46.206
        ],
        [
         124.002,
         46.167
        ],
        [
         124.017,
         46.119
        ],
        [
         124.016,
         46.088
        ],
        [
         124.034,
         46.045
        ],
        [
         123.989,
         46.012
        ],
        [
         123.974,
         45.974
        ],
        [
         123.996,
         45.907
        ],
        [
         124.067,
         45.84
        ],
        [
         124.064,
         45.802
        ],
        [
         124.015,
         45.75
        ],
        [
         124.098,
         45.723
        ],
        [
         124.135,
         45.69
        ],
        [
         124.147,
         45.665
        ],
        [
         124.162,
         45.616
        ],
        [
         124.239,
         45.592
        ],
        [
         124.264,
         45.555
        ],
        [
         124.349,
         45.547
        ],
        [
         124.352,
         45.497
        ],
        [
         124.399,
         45.441
        ],
        [
         124.507,
         45.425
        ],
        [
         124.58,
         45.424
        ],
        [
         124.625,
         45.437
        ],
        [
         124.729,
         45.444
        ],
        [
         124.793,
         45.437
        ],
        [
         124.886,
         45.443
        ],
        [
         124.911,
         45.536
        ],
        [
         124.961,
         45.495
        ],
        [
         125.05,
         45.429
        ],
        [
         125.066,
         45.399
        ],
        [
         125.138,
         45.41
        ],
        [
         125.249,
         45.418
        ],
        [
         125.319,
         45.423
        ],
        [
         125.398,
         45.417
        ],
        [
         125.425,
         45.486
        ],
        [
         125.497,
         45.469
        ],
        [
         125.617,
         45.518
        ],
        [
         125.688,
         45.514
        ],
        [
         125.712,
         45.389
        ],
        [
         125.726,
         45.337
        ],
        [
         125.816,
         45.265
        ],
        [
         125.85,
         45.239
        ],
        [
         125.958,
         45.201
        ],
        [
         125.998,
         45.162
        ],
        [
         126.092,
         45.149
        ],
        [
         126.166,
         45.133
        ],
        [
         126.235,
         45.14
        ],
        [
         126.293,
         45.18
        ],
        [
         126.403,
         45.223
        ],
        [
         126.54,
         45.239
        ],
        [
         126.645,
         45.225
        ],
        [
         126.686,
         45.188
        ],
        [
         126.787,
         45.159
        ],
        [
         126.856,
         45.146
        ],
        [
         126.971,
         45.071
        ],
        [
         127.018,
         45.024
        ],
        [
         127.093,
         44.947
        ],
        [
         127.022,
         44.899
        ],
        [
         126.984,
         44.824
        ],
        [
         127.041,
         44.712
        ],
        [
         127.044,
         44.654
        ],
        [
         127.05,
         44.567
        ],
        [
         127.095,
         44.616
        ],
        [
         127.182,
         44.645
        ],
        [
         127.203,
         50.828
        ],
        [
         127.114,
         50.938
        ],
        [
         126.986,
         51.029
        ],
        [
         126.918,
         51.139
        ],
        [
         126.926,
         51.246
        ],
        [
         126.984,
         51.319
        ],
        [
         126.887,
         51.322
        ],
        [
         126.909,
         51.284
        ],
        [
         126.909,
         51.247
        ],
        [
         126.821,
         51.281
        ],
        [
         126.837,
         51.345
        ],
        [
         126.93,
         51.359
        ],
        [
         126.835,
         51.414
        ],
        [
         126.784,
         51.448
        ],
        [
         126.844,
         51.522
        ],
        [
         126.695,
         51.578
        ],
        [
         126.741,
         51.642
        ],
        [
         126.734,
         51.711
        ],
        [
         126.673,
         51.732
        ],
        [
         126.623,
         51.777
        ],
        [
         126.555,
         51.874
        ],
        [
         126.463,
         51.948
        ],
        [
         126.448,
         52.009
        ],
        [
         126.488,
         52.042
        ],
        [
         126.564,
         52.119
        ],
        [
         126.499,
         52.16
        ],
        [
         126.404,
         52.185
        ],
        [
         126.307,
         52.206
        ],
        [
         126.358,
         52.264
        ],
        [
         126.437,
         52.277
        ],
        [
         126.328,
         52.31
        ],
        [
         126.349,
         52.358
        ],
        [
         126.327,
         52.424
        ],
        [
         126.205,
         52.466
        ],
        [
         126.213,
         52.525
        ],
        [
         126.067,
         52.604
        ],
        [
         126.031,
         52.576
        ],
        [
         125.969,
         52.63
        ],
        [
         125.996,
         52.675
        ],
        [
         126.073,
         52.691
        ],
        [
         126.112,
         52.757
        ],
        [
         126.052,
         52.8
        ],
        [
         125.985,
         52.758
        ],
        [
         125.937,
         52.787
        ],
        [
         125.855,
         52.866
        ],
        [
         125.828,
         52.899
        ],
        [
         125.751,
         52.881
        ],
        [
         125.679,
         52.861
        ],
        [
         125.665,
         52.914
        ],
        [
         125.743,
         52.994
        ],
        [
         125.643,
         53.04
        ],
        [
         125.614,
         53.084
        ],
        [
         125.531,
         53.051
        ],
        [
         125.504,
         53.095
        ],
        [
         125.344,
         53.145
        ],
        [
         125.252,
         53.181
        ],
        [
         125.142,
         53.204
        ],
        [
         124.97,
         53.194
        ],
        [
         124.909,
         53.118
        ],
        [
         124.833,
         53.145
        ],
        [
         124.734,
         53.147
        ],
        [
         124.721,
         53.192
        ],
        [
         124.59,
         53.208
        ],
        [
         124.497,
         53.208
        ],
        [
         124.436,
         53.224
        ],
        [
         124.376,
         53.259
        ],
        [
         124.239,
         53.38
        ],
        [
         124.126,
         53.348
        ],
        [
         124.014,
         53.403
        ],
        [
         123.865,
         53.49
        ],
        [
         123.746,
         53.5
        ],
        [
         123.669,
         53.534
        ],
        [
         123.587,
         53.547
        ],
        [
         123.531,
         53.507
        ],
        [
         123.547,
         53.552
        ],
        [
         123.491,
         53.543
        ],
        [
         123.499,
         53.498
        ],
        [
         123.454,
         53.537
        ],
        [
         123.31,
         53.561
        ],
        [
         123.231,
         53.549
        ],
        [
         123.137,
         53.498
        ],
        [
         123.052,
         53.507
        ],
        [
         122.895,
         53.463
        ],
        [
         122.764,
         53.464
        ],
        [
         122.608,
         53.465
        ],
        [
         122.496,
         53.459
        ],
        [
         122.374,
         53.475
        ],
        [
         122.267,
         53.47
        ],
        [
         122.162,
         53.469
        ],
        [
         122.077,
         53.422
        ],
        [
         121.876,
         53.427
        ],
        [
         121.754,
         53.389
        ],
        [
         121.59,
         53.351
        ],
        [
         121.578,
         53.29
        ],
        [
         121.642,
         53.263
        ],
        [
         121.679,
         53.2
        ],
        [
         121.665,
         53.17
        ],
        [
         121.753,
         53.148
        ],
        [
         121.775,
         53.09
        ],
        [
         121.786,
         53.018
        ],
        [
         121.677,
         52.948
        ],
        [
         121.61,
         52.892
        ],
        [
         121.621,
         52.853
        ],
        [
         121.578,
         52.819
        ],
        [
         121.591,
         52.443
        ],
        [
         121.679,
         52.42
        ],
        [
         121.716,
         52.343
        ],
        [
         121.769,
         52.308
        ],
        [
         121.901,
         52.281
        ],
        [
         121.977,
         52.344
        ],
        [
         122.041,
         52.413
        ],
        [
         122.081,
         52.44
        ],
        [
         122.142,
         52.495
        ],
        [
         122.169,
         52.514
        ],
        [
         122.208,
         52.469
        ],
        [
         122.326,
         52.459
        ],
        [
         122.367,
         52.414
        ],
        [
         122.419,
         52.375
        ],
        [
         122.484,
         52.341
        ],
        [
         122.561,
         52.283
        ],
        [
         122.679,
         52.277
        ],
        [
         122.761,
         52.267
        ],
        [
         122.766,
         52.233
        ],
        [
         122.738,
         52.153
        ],
        [
         122.629,
         52.137
        ],
        [
         122.625,
         52.067
        ],
        [
         122.665,
         51.999
        ],
        [
         122.726,
         51.979
        ],
        [
         122.706,
         51.89
        ],
        [
         122.733,
         51.832
        ],
        [
         122.749,
         51.747
        ],
        [
         122.816,
         51.655
        ],
        [
         122.856,
         51.607
        ],
        [
         122.874,
         51.561
        ],
        [
         122.859,
         51.525
        ],
        [
         122.854,
         51.478
        ],
        [
         122.9,
         51.445
        ],
        [
         122.946,
         51.405
        ],
        [
         122.966,
         51.346
        ],
        [
         123.069,
         51.321
        ],
        [
         123.231,
         51.279
        ],
        [
         123.294,
         51.254
        ],
        [
         123.377,
         51.267
        ],
        [
         123.44,
         51.271
        ],
        [
         123.583,
         51.295
        ],
        [
         123.662,
         51.319
        ],
        [
         123.711,
         51.398
        ],
        [
         123.842,
         51.367
        ],
        [
         123.926,
         51.301
        ],
        [
         123.995,
         51.323
        ],
        [
         124.09,
         51.341
        ],
        [
         124.192,
         51.339
        ],
        [
         124.272,
         51.308
        ],
        [
         124.34,
         51.293
        ],
        [
         124.43,
         51.301
        ],
        [
         124.444,
         51.358
        ],
        [
         124.49,
         51.381
        ],
        [
         124.587,
         51.364
        ],
        [
         124.694,
         51.333
        ],
        [
         124.765,
         51.387
        ],
        [
         124.864,
         51.38
        ],
        [
         124.943,
         51.447
        ],
        [
         124.929,
         51.498
        ],
        [
         125.005,
         51.529
        ],
        [
         125.073,
         51.554
        ],
        [
         125.099,
         51.658
        ],
        [
         125.13,
         51.635
        ],
        [
         125.215,
         51.628
        ],
        [
         125.289,
         51.634
        ],
        [
         125.352,
         51.624
        ],
        [
         125.425,
         51.563
        ],
        [
         125.559,
         51.462
        ],
        [
         125.595,
         51.417
        ],
        [
         125.6,
         51.413
        ],
        [
         125.601,
         51.41
        ],
        [
         125.623,
         51.398
        ],
        [
         125.624,
         51.388
        ],
        [
         125.626,
         51.38
        ],
        [
         125.7,
         51.327
        ],
        [
         125.741,
         51.276
        ],
        [
         125.761,
         51.262
        ],
        [
         125.762,
         51.226
        ],
        [
         125.85,
         51.214
        ],
        [
         125.91,
         51.139
        ],
        [
         125.971,
         51.124
        ],
        [
         125.976,
         51.084
        ],
        [
         126.034,
         51.011
        ],
        [
         126.068,
         50.967
        ],
        [
         126.02,
         50.927
        ],
        [
         125.998,
         50.873
        ],
        [
         125.94,
         50.854
        ],
        [
         125.878,
         50.817
        ],
        [
         125.836,
         50.793
        ],
        [
         125.829,
         50.757
        ],
        [
         125.759,
         50.747
        ],
        [
         125.781,
         50.726
        ],
        [
         125.789,
         50.68
        ],
        [
         125.793,
         50.643
        ],
        [
         125.808,
         50.604
        ],
        [
         125.795,
         50.533
        ],
        [
         125.754,
         50.507
        ],
        [
         125.7,
         50.487
        ],
        [
         125.627,
         50.443
        ],
        [
         125.562,
         50.438
        ],
        [
         125.567,
         50.403
        ],
        [
         125.522,
         50.405
        ],
        [
         125.52,
         50.35
        ],
        [
         125.464,
         50.296
        ],
        [
         125.442,
         50.26
        ],
        [
         125.417,
         50.196
        ],
        [
         125.383,
         50.172
        ],
        [
         125.376,
         50.137
        ],
        [
         125.279,
         50.127
        ],
        [
         125.287,
         50.094
        ],
        [
         125.328,
         50.066
        ],
        [
         125.29,
         50.058
        ],
        [
         125.284,
         50.036
        ],
        [
         125.278,
         49.996
        ],
        [
         125.231,
         49.958
        ],
        [
         125.199,
         49.935
        ],
        [
         125.213,
         49.907
        ],
        [
         125.225,
         49.867
        ],
        [
         125.178,
         49.83
        ],
        [
         125.222,
         49.755
        ],
        [
         125.225,
         49.726
        ],
        [
         125.185,
         49.635
        ],
        [
         125.165,
         49.669
        ],
        [
         125.127,
         49.655
        ],
        [
         125.168,
         49.63
        ],
        [
         125.23,
         49.595
        ],
        [
         125.211,
         49.54
        ],
        [
         125.271,
         49.454
        ],
        [
         125.256,
         49.395
        ],
        [
         125.257,
         49.36
        ],
        [
         125.215,
         49.277
        ],
        [
         125.22,
         49.189
        ],
        [
         125.159,
         49.145
        ],
        [
         125.034,
         49.157
        ],
        [
         124.983,
         49.163
        ],
        [
         124.861,
         49.166
        ],
        [
         124.809,
         49.116
        ],
        [
         124.808,
         49.021
        ],
        [
         124.744,
         48.92
        ],
        [
         124.716,
         48.885
        ],
        [
         124.654,
         48.834
        ],
        [
         124.656,
         48.784
        ],
        [
         124.625,
         48.702
        ],
        [
         124.579,
         48.597
        ],
        [
         124.549,
         48.536
        ],
        [
         124.556,
         48.468
        ],
        [
         124.525,
         48.427
        ],
        [
         124.547,
         48.358
        ],
        [
         124.58,
         48.297
        ],
        [
         124.579,
         48.262
        ],
        [
         124.513,
         48.165
        ],
        [
         124.506,
         48.125
        ],
        [
         124.466,
         48.098
        ],
        [
         124.43,
         48.121
        ],
        [
         124.475,
         48.174
        ],
        [
         124.413,
         48.219
        ],
        [
         124.365,
         48.284
        ],
        [
         124.318,
         48.351
        ],
        [
         124.31,
         48.413
        ],
        [
         124.303,
         48.457
        ],
        [
         124.259,
         48.536
        ],
        [
         124.137,
         48.463
        ],
        [
         124.019,
         48.393
        ],
        [
         123.746,
         48.198
        ],
        [
         123.579,
         48.045
        ],
        [
         123.3,
         47.954
        ],
        [
         123.214,
         47.825
        ],
        [
         123.041,
         47.746
        ],
        [
         122.849,
         47.674
        ],
        [
         122.594,
         47.547
        ],
        [
         122.507,
         47.401
        ],
        [
         122.441,
         47.31
        ],
        [
         122.463,
         47.278
        ],
        [
         122.531,
         47.199
        ],
        [
         122.583,
         47.158
        ],
        [
         122.68,
         47.094
        ],
        [
         122.71,
         47.093
        ],
        [
         122.853,
         47.072
        ],
        [
         122.778,
         47.003
        ],
        [
         122.798,
         46.958
        ],
        [
         122.84,
         46.937
        ],
        [
         122.894,
         46.895
        ],
        [
         122.997,
         46.761
        ],
        [
         123.026,
         46.719
        ],
        [
         123.103,
         46.735
        ],
        [
         123.199,
         46.803
        ],
        [
         123.222,
         46.85
        ],
        [
         123.341,
         46.827
        ],
        [
         123.407,
         46.906
        ],
        [
         123.36,
         46.971
        ],
        [
         123.302,
         47.0
        ],
        [
         123.424,
         46.934
        ],
        [
         123.528,
         46.945
        ],
        [
         123.507,
         46.827
        ],
        [
         123.576,
         46.845
        ],
        [
         123.605,
         46.891
        ],
        [
         123.626,
         46.848
        ],
        [
         123.629,
         46.814
        ],
        [
         123.603,
         46.689
        ],
        [
         123.366,
         46.678
        ],
        [
         123.276,
         46.661
        ],
        [
         123.228,
         46.588
        ],
        [
         123.098,
         46.603
        ],
        [
         123.046,
         46.618
        ],
        [
         123.002,
         46.575
        ],
        [
         123.012,
         46.435
        ],
        [
         123.142,
         46.298
        ],
        [
         123.248,
         46.273
        ],
        [
         123.321,
         46.254
        ],
        [
         123.357,
         46.232
        ],
        [
         123.453,
         46.233
        ],
        [
         123.57,
         46.224
        ]
       ]
      ]
     ]
    },
    "n": "黑龙江省"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        127.203,
        55.553
       ],
       [
        127.198,
        50.829
       ],
       [
        126.925,
        51.1
       ],
       [
        126.888,
        51.23
       ],
       [
        126.834,
        51.315
       ],
       [
        126.827,
        51.412
       ],
       [
        126.805,
        51.506
       ],
       [
        126.709,
        51.566
       ],
       [
        126.701,
        51.703
       ],
       [
        126.511,
        51.926
       ],
       [
        126.456,
        52.126
       ],
       [
        126.391,
        52.214
       ],
       [
        126.346,
        52.306
       ],
       [
        126.342,
        52.362
       ],
       [
        126.238,
        52.445
       ],
       [
        126.194,
        52.519
       ],
       [
        126.046,
        52.573
       ],
       [
        126.023,
        52.643
       ],
       [
        126.06,
        52.692
       ],
       [
        126.048,
        52.739
       ],
       [
        125.942,
        52.801
       ],
       [
        125.783,
        52.891
       ],
       [
        125.681,
        52.931
       ],
       [
        125.692,
        53.004
       ],
       [
        125.596,
        53.057
       ],
       [
        125.422,
        53.084
       ],
       [
        125.075,
        53.204
       ],
       [
        124.907,
        53.173
       ],
       [
        124.812,
        53.134
       ],
       [
        124.466,
        53.23
       ],
       [
        124.291,
        53.341
       ],
       [
        124.154,
        53.359
       ],
       [
        123.741,
        53.511
       ],
       [
        123.56,
        53.527
       ],
       [
        123.489,
        53.529
       ],
       [
        123.31,
        53.556
       ],
       [
        122.958,
        53.498
       ],
       [
        122.516,
        53.457
       ],
       [
        122.338,
        53.485
       ],
       [
        122.024,
        53.439
       ],
       [
        121.947,
        53.605
       ],
       [
        121.783,
        53.973
       ],
       [
        121.641,
        54.113
       ],
       [
        121.753,
        54.272
       ],
       [
        121.731,
        54.426
       ],
       [
        121.902,
        54.369
       ],
       [
        122.127,
        54.468
       ],
       [
        121.895,
        54.646
       ],
       [
        121.826,
        54.784
       ],
       [
        121.667,
        54.821
       ],
       [
        121.939,
        55.214
       ],
       [
        121.925,
        55.553
       ],
       [
        121.634,
        55.535
       ],
       [
        121.578,
        55.553
       ]
      ]
     ]
    },
    "n": "阿穆尔州"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        121.578,
        55.519
       ],
       [
        121.65,
        55.553
       ],
       [
        121.984,
        55.476
       ],
       [
        121.95,
        55.007
       ],
       [
        121.659,
        54.728
       ],
       [
        121.922,
        54.733
       ],
       [
        121.936,
        54.566
       ],
       [
        122.115,
        54.407
       ],
       [
        121.866,
        54.419
       ],
       [
        121.655,
        54.355
       ],
       [
        121.754,
        54.152
       ],
       [
        121.643,
        54.012
       ],
       [
        121.919,
        53.831
       ],
       [
        122.018,
        53.521
       ],
       [
        121.744,
        53.384
       ],
       [
        121.578,
        55.519
       ]
      ]
     ]
    },
    "n": "外贝加尔边疆区"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       124.9,
       41.92
      ],
      [
       124.75,
       41.925
      ],
      [
       124.6,
       41.92
      ],
      [
       124.45,
       41.91
      ],
      [
       124.3,
       41.905
      ],
      [
       124.1,
       41.9
      ],
      [
       123.96,
       41.88
      ],
      [
       123.8,
       41.865
      ],
      [
       123.65,
       41.85
      ],
      [
       123.43,
       41.8
      ]
     ]
    },
    "n": "浑河",
    "approx": true,
    "note": "辽东主水系。源出清原，经抚顺、沈阳，西南入辽河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       125.35,
       41.98
      ],
      [
       125.2,
       41.92
      ],
      [
       125.03,
       41.85
      ],
      [
       124.85,
       41.86
      ],
      [
       124.65,
       41.88
      ],
      [
       124.45,
       41.9
      ],
      [
       124.28,
       41.92
      ]
     ]
    },
    "n": "苏子河",
    "approx": true,
    "note": "浑河支流，流经新宾（赫图阿拉附近），于抚顺关以东汇入浑河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       123.45,
       42.35
      ],
      [
       123.7,
       42.15
      ],
      [
       123.95,
       41.95
      ],
      [
       124.15,
       41.7
      ],
      [
       124.3,
       41.55
      ]
     ]
    },
    "n": "清河",
    "approx": true,
    "note": "浑河支流，流经铁岭—开原间，于调兵山以南汇入浑河。萨尔浒之战明军北线（清河堡）依此水。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       124.6,
       41.95
      ],
      [
       124.8,
       41.75
      ],
      [
       125.0,
       41.55
      ],
      [
       125.15,
       41.35
      ]
     ]
    },
    "n": "深河",
    "approx": true,
    "note": "苏子河支流，流经新宾东南，于旺清门以东汇入苏子河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       121.578,
       49.619
      ],
      [
       121.878,
       49.678
      ]
     ]
    },
    "n": "Hailar"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       127.203,
       50.825
      ],
      [
       127.02,
       50.986
      ],
      [
       126.912,
       51.172
      ],
      [
       126.854,
       51.261
      ],
      [
       126.848,
       51.374
      ],
      [
       126.802,
       51.448
      ],
      [
       126.775,
       51.545
      ],
      [
       126.689,
       51.61
      ],
      [
       126.654,
       51.781
      ],
      [
       126.468,
       52.031
      ],
      [
       126.395,
       52.173
      ],
      [
       126.384,
       52.286
      ],
      [
       126.324,
       52.332
      ],
      [
       126.313,
       52.4
      ],
      [
       126.203,
       52.484
      ],
      [
       126.157,
       52.547
      ],
      [
       126.016,
       52.61
      ],
      [
       126.047,
       52.673
      ],
      [
       126.056,
       52.716
      ],
      [
       126.004,
       52.768
      ],
      [
       125.872,
       52.872
      ],
      [
       125.728,
       52.891
      ],
      [
       125.695,
       52.956
      ],
      [
       125.649,
       53.042
      ],
      [
       125.546,
       53.048
      ],
      [
       125.226,
       53.166
      ],
      [
       124.971,
       53.197
      ],
      [
       124.882,
       53.13
      ],
      [
       124.64,
       53.211
      ],
      [
       124.369,
       53.271
      ],
      [
       124.22,
       53.37
      ],
      [
       123.995,
       53.406
      ],
      [
       123.608,
       53.547
      ],
      [
       123.535,
       53.526
      ],
      [
       123.424,
       53.531
      ],
      [
       123.154,
       53.545
      ],
      [
       122.745,
       53.469
      ],
      [
       122.38,
       53.463
      ],
      [
       122.089,
       53.451
      ]
     ]
    },
    "n": "Heilong Jiang"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       123.554,
       43.483
      ],
      [
       123.604,
       43.29
      ],
      [
       123.534,
       43.019
      ],
      [
       123.583,
       42.877
      ],
      [
       123.611,
       42.66
      ],
      [
       123.774,
       42.504
      ],
      [
       123.831,
       42.406
      ],
      [
       123.513,
       42.203
      ],
      [
       123.283,
       42.166
      ],
      [
       123.033,
       42.085
      ],
      [
       122.758,
       41.762
      ],
      [
       122.636,
       41.325
      ],
      [
       122.401,
       41.133
      ],
      [
       122.409,
       41.003
      ],
      [
       122.294,
       40.898
      ],
      [
       122.152,
       40.823
      ],
      [
       122.14,
       40.688
      ]
     ]
    },
    "n": "Liao"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        124.675,
        45.45
       ],
       [
        124.875,
        45.466
       ],
       [
        124.947,
        45.523
       ],
       [
        125.052,
        45.466
       ],
       [
        125.156,
        45.389
       ],
       [
        125.394,
        45.42
       ],
       [
        125.549,
        45.488
       ],
       [
        125.888,
        45.55
       ],
       [
        126.107,
        45.702
       ],
       [
        126.415,
        45.711
       ],
       [
        126.63,
        45.797
       ],
       [
        126.802,
        45.943
       ],
       [
        127.083,
        45.998
       ]
      ]
     ]
    },
    "n": "Songhua"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       121.578,
       43.491
      ],
      [
       122.03,
       43.521
      ],
      [
       122.449,
       43.748
      ],
      [
       122.769,
       43.815
      ],
      [
       123.017,
       43.765
      ],
      [
       123.269,
       43.647
      ],
      [
       123.405,
       43.628
      ],
      [
       123.513,
       43.561
      ]
     ]
    },
    "n": "Xiliao"
   }
  ],
  "lakes": [],
  "_bbox": [
   121.578,
   39.498,
   127.203,
   55.553
  ]
 },
 "wall": {
  "_comment": "明代辽东镇边墙（九边之一）走向示意。非精确测绘，仅作历史地理标注。\n源出原 data/sarhu/places.json 的 wall 段（v0.38 抽出为独立资产，便于按场景注入）。\n只在 region ∈ 辽东体系 (liaobei/jianzhou/liaodong/liaonan/liaoxi) 的场景注入，\n避免唐/宋/壬辰等场景误显辽东边墙。",
  "id": "liaodong_bianqiang",
  "name": "辽东边墙",
  "note": "明代辽东镇边墙走向示意，非精确测绘",
  "path": [
   [
    124.6,
    43.05
   ],
   [
    124.35,
    42.7
   ],
   [
    124.15,
    42.45
   ],
   [
    124.05,
    42.2
   ],
   [
    124.2,
    41.98
   ],
   [
    124.3,
    41.92
   ],
   [
    124.15,
    41.75
   ],
   [
    124.3,
    41.55
   ],
   [
    124.45,
    41.42
   ],
   [
    124.55,
    41.2
   ],
   [
    124.75,
    40.95
   ],
   [
    124.85,
    40.7
   ],
   [
    124.45,
    40.3
   ]
  ]
 }
};
