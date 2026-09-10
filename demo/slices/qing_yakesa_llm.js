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
  "coastline": [],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        123.0,
        52.7
       ],
       [
        123.0,
        54.7
       ],
       [
        125.0,
        54.7
       ],
       [
        125.0,
        52.7
       ],
       [
        123.0,
        52.7
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
         125.0,
         52.7
        ],
        [
         125.0,
         53.198
        ],
        [
         124.97,
         53.194
        ],
        [
         124.888,
         53.164
        ],
        [
         124.909,
         53.118
        ],
        [
         124.872,
         53.099
        ],
        [
         124.833,
         53.145
        ],
        [
         124.788,
         53.141
        ],
        [
         124.734,
         53.147
        ],
        [
         124.712,
         53.163
        ],
        [
         124.721,
         53.192
        ],
        [
         124.679,
         53.207
        ],
        [
         124.59,
         53.208
        ],
        [
         124.563,
         53.202
        ],
        [
         124.497,
         53.208
        ],
        [
         124.487,
         53.217
        ],
        [
         124.436,
         53.224
        ],
        [
         124.412,
         53.249
        ],
        [
         124.376,
         53.259
        ],
        [
         124.328,
         53.332
        ],
        [
         124.239,
         53.38
        ],
        [
         124.194,
         53.373
        ],
        [
         124.126,
         53.348
        ],
        [
         124.058,
         53.404
        ],
        [
         124.014,
         53.403
        ],
        [
         123.986,
         53.434
        ],
        [
         123.865,
         53.49
        ],
        [
         123.797,
         53.49
        ],
        [
         123.746,
         53.5
        ],
        [
         123.698,
         53.499
        ],
        [
         123.669,
         53.534
        ],
        [
         123.621,
         53.55
        ],
        [
         123.587,
         53.547
        ],
        [
         123.57,
         53.505
        ],
        [
         123.531,
         53.507
        ],
        [
         123.558,
         53.532
        ],
        [
         123.547,
         53.552
        ],
        [
         123.517,
         53.558
        ],
        [
         123.491,
         53.543
        ],
        [
         123.51,
         53.509
        ],
        [
         123.499,
         53.498
        ],
        [
         123.472,
         53.509
        ],
        [
         123.454,
         53.537
        ],
        [
         123.394,
         53.538
        ],
        [
         123.31,
         53.561
        ],
        [
         123.275,
         53.563
        ],
        [
         123.231,
         53.549
        ],
        [
         123.179,
         53.51
        ],
        [
         123.137,
         53.498
        ],
        [
         123.093,
         53.508
        ],
        [
         123.052,
         53.507
        ],
        [
         123.0,
         53.496
        ],
        [
         123.0,
         52.7
        ],
        [
         125.0,
         52.7
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
        125.0,
        54.7
       ],
       [
        125.0,
        53.199
       ],
       [
        124.971,
        53.197
       ],
       [
        124.907,
        53.173
       ],
       [
        124.882,
        53.13
       ],
       [
        124.812,
        53.134
       ],
       [
        124.64,
        53.211
       ],
       [
        124.466,
        53.23
       ],
       [
        124.369,
        53.271
       ],
       [
        124.291,
        53.341
       ],
       [
        124.22,
        53.37
       ],
       [
        124.154,
        53.359
       ],
       [
        123.995,
        53.406
       ],
       [
        123.741,
        53.511
       ],
       [
        123.608,
        53.547
       ],
       [
        123.56,
        53.527
       ],
       [
        123.535,
        53.526
       ],
       [
        123.489,
        53.529
       ],
       [
        123.424,
        53.531
       ],
       [
        123.31,
        53.556
       ],
       [
        123.154,
        53.545
       ],
       [
        123.0,
        53.508
       ],
       [
        123.0,
        54.7
       ],
       [
        125.0,
        54.7
       ]
      ]
     ]
    },
    "n": "阿穆尔州"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       125.0,
       53.199
      ],
      [
       124.971,
       53.197
      ],
      [
       124.907,
       53.173
      ],
      [
       124.882,
       53.13
      ],
      [
       124.812,
       53.134
      ],
      [
       124.64,
       53.211
      ],
      [
       124.466,
       53.23
      ],
      [
       124.369,
       53.271
      ],
      [
       124.291,
       53.341
      ],
      [
       124.22,
       53.37
      ],
      [
       124.154,
       53.359
      ],
      [
       123.995,
       53.406
      ],
      [
       123.741,
       53.511
      ],
      [
       123.608,
       53.547
      ],
      [
       123.56,
       53.527
      ],
      [
       123.535,
       53.526
      ],
      [
       123.489,
       53.529
      ],
      [
       123.424,
       53.531
      ],
      [
       123.31,
       53.556
      ],
      [
       123.154,
       53.545
      ],
      [
       123.0,
       53.508
      ]
     ]
    },
    "n": "Heilong Jiang"
   }
  ],
  "lakes": [],
  "_bbox": [
   123.0,
   52.7,
   125.0,
   54.7
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
