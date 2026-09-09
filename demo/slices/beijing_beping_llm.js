// 本文件由 tools/build.py 自动生成（切片 beijing_beping_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["beijing_beping_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["beijing_beping_llm"] = {
 "meta": {
  "kind": "court",
  "region": "huabei",
  "province": "beijing",
  "title": "北平和平解放（1949）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "beiping",
  "dossier_event": "event:ev_beijing_beping_llm_01",
  "vocab_pack": "inline:beijing_beping_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "huabei",
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
    "note": "北平和平解放（1949）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "北平和平解放（1949）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "北平和平解放（1949）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "北平和平解放（1949）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   6
  ],
  "page": "county.html?scene=beijing_beping_llm",
  "key": "beijing_beping_llm",
  "scene_id": "beijing_beping_llm"
 },
 "sources": [
  {
   "id": "beijing_beping_src",
   "title": "平津战役史料 / 北平和平解放纪事",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "平津战役纪念馆",
   "period": "现代",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "beiping",
   "name": "北平",
   "type": "city",
   "modern": "今中国北京市",
   "note": "古都，和平解放",
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 116.4,
   "lat": 39.9,
   "geo_note": "平津战役·傅作义起义",
   "elev": 44
  },
  {
   "id": "qianmen",
   "name": "前门",
   "type": "city",
   "modern": "今中国北京市东城区",
   "note": "入城式举行地",
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "BEI__p01",
   "name": "傅作义",
   "role": "国民党华北剿总总司令",
   "note": "北平守军将领，与中共密议和平解放",
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "BEI__p02",
   "name": "毛泽东",
   "role": "中共中央主席",
   "note": "决策和平解放北平",
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "BEI__p03",
   "name": "林彪",
   "role": "东北野战军司令员",
   "note": "参与平津战役",
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "BEI__p04",
   "name": "罗荣桓",
   "role": "东北野战军政委",
   "note": "参与平津战役",
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "BEI__p05",
   "name": "聂荣臻",
   "role": "华北军区司令员",
   "note": "参与平津战役",
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "BEI__p06",
   "name": "叶剑英",
   "role": "北平军管会主任",
   "note": "负责接管北平",
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "BEI_001",
   "subject": "event:ev_beijing_beping_llm_01",
   "predicate": "和平解放",
   "value_text": "傅作义与中共密议，北平和平解放",
   "time": {
    "era_text": "民国三十八年一月",
    "start": "1949-01-01",
    "end": "1949-12-31",
    "gregorian_year": 1949
   },
   "place": "beiping",
   "source": "beijing_beping_src",
   "quote": "傅作义与中共密议，『北平和平解放』",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "theater",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "傅作义与中共密议，『北平和平解放』",
   "source_text": "一九四九年一月，傅作义与中共密议，『北平和平解放』，古都免遭兵燹。『解放军入城式』于前门举行，文化古迹得全。『将一个完好的北平交给人民』，为新政权定都北平之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "BEI_002",
   "subject": "event:ev_beijing_beping_llm_02",
   "predicate": "入城式",
   "value_text": "解放军入城式于前门举行",
   "time": {
    "era_text": "民国三十八年一月",
    "start": "1949-01-01",
    "end": "1949-12-31",
    "gregorian_year": 1949
   },
   "place": "qianmen",
   "source": "beijing_beping_src",
   "quote": "『解放军入城式』于前门举行",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "『解放军入城式』于前门举行",
   "source_text": "一九四九年一月，傅作义与中共密议，『北平和平解放』，古都免遭兵燹。『解放军入城式』于前门举行，文化古迹得全。『将一个完好的北平交给人民』，为新政权定都北平之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "BEI_003",
   "subject": "event:ev_beijing_beping_llm_01",
   "predicate": "意义",
   "value_text": "古都免遭兵燹，文化古迹得全",
   "time": {
    "era_text": "民国三十八年一月",
    "start": "1949-01-01",
    "end": "1949-12-31",
    "gregorian_year": 1949
   },
   "place": "beiping",
   "source": "beijing_beping_src",
   "quote": "古都免遭兵燹",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "古都免遭兵燹",
   "source_text": "一九四九年一月，傅作义与中共密议，『北平和平解放』，古都免遭兵燹。『解放军入城式』于前门举行，文化古迹得全。『将一个完好的北平交给人民』，为新政权定都北平之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "BEI_004",
   "subject": "event:ev_beijing_beping_llm_01",
   "predicate": "口号",
   "value_text": "将一个完好的北平交给人民",
   "time": {
    "era_text": "民国三十八年一月",
    "start": "1949-01-01",
    "end": "1949-12-31",
    "gregorian_year": 1949
   },
   "place": "beiping",
   "source": "beijing_beping_src",
   "quote": "『将一个完好的北平交给人民』",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "『将一个完好的北平交给人民』",
   "source_text": "一九四九年一月，傅作义与中共密议，『北平和平解放』，古都免遭兵燹。『解放军入城式』于前门举行，文化古迹得全。『将一个完好的北平交给人民』，为新政权定都北平之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "BEI_005",
   "subject": "event:ev_beijing_beping_llm_01",
   "predicate": "影响",
   "value_text": "为新政权定都北平之先声",
   "time": {
    "era_text": "民国三十八年一月",
    "start": "1949-01-01",
    "end": "1949-12-31",
    "gregorian_year": 1949
   },
   "place": "beiping",
   "source": "beijing_beping_src",
   "quote": "为新政权定都北平之先声",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为新政权定都北平之先声",
   "source_text": "一九四九年一月，傅作义与中共密议，『北平和平解放』，古都免遭兵燹。『解放军入城式』于前门举行，文化古迹得全。『将一个完好的北平交给人民』，为新政权定都北平之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "BEI_006",
   "subject": "person:BEI__p01",
   "predicate": "决策",
   "value_text": "傅作义与中共密议和平",
   "time": {
    "era_text": "民国三十八年一月",
    "start": "1949-01-01",
    "end": "1949-12-31",
    "gregorian_year": 1949
   },
   "place": "beiping",
   "source": "beijing_beping_src",
   "quote": "傅作义与中共密议",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "傅作义与中共密议",
   "source_text": "一九四九年一月，傅作义与中共密议，『北平和平解放』，古都免遭兵燹。『解放军入城式』于前门举行，文化古迹得全。『将一个完好的北平交给人民』，为新政权定都北平之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "BEI_007",
   "subject": "person:BEI__p02",
   "predicate": "决策",
   "value_text": "毛泽东决策和平解放",
   "time": {
    "era_text": "民国三十八年一月",
    "start": "1949-01-01",
    "end": "1949-12-31",
    "gregorian_year": 1949
   },
   "place": "beiping",
   "source": "beijing_beping_src",
   "quote": "中共密议",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "中共密议",
   "source_text": "一九四九年一月，傅作义与中共密议，『北平和平解放』，古都免遭兵燹。『解放军入城式』于前门举行，文化古迹得全。『将一个完好的北平交给人民』，为新政权定都北平之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "BEI_008",
   "subject": "event:ev_beijing_beping_llm_01",
   "predicate": "性质",
   "value_text": "和平解放，非武力攻占",
   "time": {
    "era_text": "民国三十八年一月",
    "start": "1949-01-01",
    "end": "1949-12-31",
    "gregorian_year": 1949
   },
   "place": "beiping",
   "source": "beijing_beping_src",
   "quote": "『北平和平解放』",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "『北平和平解放』",
   "source_text": "一九四九年一月，傅作义与中共密议，『北平和平解放』，古都免遭兵燹。『解放军入城式』于前门举行，文化古迹得全。『将一个完好的北平交给人民』，为新政权定都北平之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "BEI_009",
   "subject": "event:ev_beijing_beping_llm_01",
   "predicate": "争议",
   "value_text": "有观点认为傅作义被迫",
   "time": {
    "era_text": "民国三十八年一月",
    "start": "1949-01-01",
    "end": "1949-12-31",
    "gregorian_year": 1949
   },
   "place": "beiping",
   "source": "beijing_beping_src",
   "quote": "密议",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "theater",
   "note": "学界对傅作义主动性有争议",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "密议",
   "source_text": "一九四九年一月，傅作义与中共密议，『北平和平解放』，古都免遭兵燹。『解放军入城式』于前门举行，文化古迹得全。『将一个完好的北平交给人民』，为新政权定都北平之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "BEI_010",
   "subject": "event:ev_beijing_beping_llm_01",
   "predicate": "细节",
   "value_text": "具体谈判过程不详",
   "time": {
    "era_text": "民国三十八年一月",
    "start": "1949-01-01",
    "end": "1949-12-31",
    "gregorian_year": 1949
   },
   "place": "beiping",
   "source": "beijing_beping_src",
   "quote": "密议",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "史料未载谈判细节",
   "dims": [
    6
   ],
   "lead": {
    "where": "北平",
    "skills": [
     "档案研究"
    ],
    "accept": "补充谈判过程"
   },
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "密议",
   "source_text": "一九四九年一月，傅作义与中共密议，『北平和平解放』，古都免遭兵燹。『解放军入城式』于前门举行，文化古迹得全。『将一个完好的北平交给人民』，为新政权定都北平之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "BEI_011",
   "subject": "event:ev_beijing_beping_llm_02",
   "predicate": "地点",
   "value_text": "入城式在前门举行",
   "time": {
    "era_text": "民国三十八年一月",
    "start": "1949-01-01",
    "end": "1949-12-31",
    "gregorian_year": 1949
   },
   "place": "qianmen",
   "source": "beijing_beping_src",
   "quote": "于前门举行",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "于前门举行",
   "source_text": "一九四九年一月，傅作义与中共密议，『北平和平解放』，古都免遭兵燹。『解放军入城式』于前门举行，文化古迹得全。『将一个完好的北平交给人民』，为新政权定都北平之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "BEI_012",
   "subject": "event:ev_beijing_beping_llm_02",
   "predicate": "影响",
   "value_text": "文化古迹得全",
   "time": {
    "era_text": "民国三十八年一月",
    "start": "1949-01-01",
    "end": "1949-12-31",
    "gregorian_year": 1949
   },
   "place": "beiping",
   "source": "beijing_beping_src",
   "quote": "文化古迹得全",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "文化古迹得全",
   "source_text": "一九四九年一月，傅作义与中共密议，『北平和平解放』，古都免遭兵燹。『解放军入城式』于前门举行，文化古迹得全。『将一个完好的北平交给人民』，为新政权定都北平之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "BEI_010"
 ],
 "events": [
  {
   "id": "ev_beijing_beping_llm_01",
   "subject": "event:ev_beijing_beping_llm_01",
   "year": 1949,
   "era": "民国三十八年一月",
   "title": "北平和平解放",
   "kind": "行政",
   "text": "傅作义与中共密议，北平和平解放",
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_beijing_beping_llm_02",
   "subject": "event:ev_beijing_beping_llm_02",
   "year": 1949,
   "era": "民国三十八年一月",
   "title": "解放军入城式",
   "kind": "其他",
   "text": "解放军在前门举行入城式",
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "beiping",
   "to": "qianmen",
   "type": "military",
   "label": "解放军入城路线",
   "_source_idx": 0,
   "_source_name": "平津战役史料 / 北平和平解放纪事",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "beiping",
   "party": "后世官修",
   "start": 1919,
   "end": 1979,
   "timeline": "main"
  },
  {
   "place_id": "qianmen",
   "party": "后世官修",
   "start": 1919,
   "end": 1979,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "beiping",
   "name": "北平",
   "lon": 116.4,
   "lat": 39.9,
   "region": "huabei"
  }
 ],
 "control_years": [
  1919,
  1979
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
        115.4,
        38.9
       ],
       [
        115.4,
        40.9
       ],
       [
        117.4,
        40.9
       ],
       [
        117.4,
        38.9
       ],
       [
        115.4,
        38.9
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
         117.349,
         40.581
        ],
        [
         117.39,
         40.562
        ],
        [
         117.4,
         40.565
        ],
        [
         117.4,
         40.685
        ],
        [
         117.342,
         40.674
        ],
        [
         117.32,
         40.658
        ],
        [
         117.278,
         40.664
        ],
        [
         117.208,
         40.695
        ],
        [
         117.117,
         40.7
        ],
        [
         117.112,
         40.707
        ],
        [
         117.012,
         40.694
        ],
        [
         116.965,
         40.71
        ],
        [
         116.927,
         40.745
        ],
        [
         116.924,
         40.774
        ],
        [
         116.848,
         40.839
        ],
        [
         116.813,
         40.848
        ],
        [
         116.76,
         40.89
        ],
        [
         116.736,
         40.9
        ],
        [
         116.477,
         40.9
        ],
        [
         116.477,
         40.9
        ],
        [
         116.476,
         40.9
        ],
        [
         116.34,
         40.9
        ],
        [
         116.438,
         40.819
        ],
        [
         116.466,
         40.774
        ],
        [
         116.454,
         40.766
        ],
        [
         116.317,
         40.772
        ],
        [
         116.311,
         40.755
        ],
        [
         116.273,
         40.763
        ],
        [
         116.247,
         40.792
        ],
        [
         116.22,
         40.744
        ],
        [
         116.205,
         40.74
        ],
        [
         116.172,
         40.696
        ],
        [
         116.163,
         40.662
        ],
        [
         116.134,
         40.667
        ],
        [
         116.099,
         40.631
        ],
        [
         116.005,
         40.584
        ],
        [
         115.982,
         40.579
        ],
        [
         115.972,
         40.602
        ],
        [
         115.908,
         40.617
        ],
        [
         115.885,
         40.595
        ],
        [
         115.828,
         40.588
        ],
        [
         115.82,
         40.559
        ],
        [
         115.785,
         40.558
        ],
        [
         115.755,
         40.54
        ],
        [
         115.736,
         40.503
        ],
        [
         115.781,
         40.493
        ],
        [
         115.772,
         40.444
        ],
        [
         115.864,
         40.359
        ],
        [
         115.918,
         40.354
        ],
        [
         115.952,
         40.282
        ],
        [
         115.969,
         40.264
        ],
        [
         115.899,
         40.234
        ],
        [
         115.87,
         40.186
        ],
        [
         115.856,
         40.189
        ],
        [
         115.848,
         40.147
        ],
        [
         115.806,
         40.153
        ],
        [
         115.774,
         40.176
        ],
        [
         115.755,
         40.146
        ],
        [
         115.755,
         40.146
        ],
        [
         115.6,
         40.12
        ],
        [
         115.591,
         40.096
        ],
        [
         115.527,
         40.076
        ],
        [
         115.485,
         40.04
        ],
        [
         115.455,
         40.03
        ],
        [
         115.45,
         39.993
        ],
        [
         115.429,
         39.984
        ],
        [
         115.426,
         39.951
        ],
        [
         115.481,
         39.936
        ],
        [
         115.523,
         39.899
        ],
        [
         115.516,
         39.892
        ],
        [
         115.516,
         39.892
        ],
        [
         115.526,
         39.876
        ],
        [
         115.514,
         39.838
        ],
        [
         115.567,
         39.816
        ],
        [
         115.553,
         39.795
        ],
        [
         115.506,
         39.784
        ],
        [
         115.484,
         39.798
        ],
        [
         115.484,
         39.798
        ],
        [
         115.444,
         39.786
        ],
        [
         115.44,
         39.752
        ],
        [
         115.487,
         39.742
        ],
        [
         115.492,
         39.67
        ],
        [
         115.479,
         39.651
        ],
        [
         115.479,
         39.651
        ],
        [
         115.522,
         39.64
        ],
        [
         115.518,
         39.597
        ],
        [
         115.546,
         39.619
        ],
        [
         115.587,
         39.59
        ],
        [
         115.634,
         39.6
        ],
        [
         115.634,
         39.6
        ],
        [
         115.668,
         39.615
        ],
        [
         115.699,
         39.578
        ],
        [
         115.699,
         39.578
        ],
        [
         115.699,
         39.57
        ],
        [
         115.699,
         39.57
        ],
        [
         115.717,
         39.56
        ],
        [
         115.717,
         39.56
        ],
        [
         115.719,
         39.554
        ],
        [
         115.719,
         39.554
        ],
        [
         115.721,
         39.551
        ],
        [
         115.721,
         39.551
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.725,
         39.544
        ],
        [
         115.725,
         39.544
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.753,
         39.516
        ],
        [
         115.806,
         39.51
        ],
        [
         115.806,
         39.51
        ],
        [
         115.821,
         39.523
        ],
        [
         115.821,
         39.523
        ],
        [
         115.828,
         39.541
        ],
        [
         115.868,
         39.547
        ],
        [
         115.868,
         39.547
        ],
        [
         115.915,
         39.583
        ],
        [
         115.915,
         39.583
        ],
        [
         115.91,
         39.6
        ],
        [
         115.91,
         39.6
        ],
        [
         115.957,
         39.561
        ],
        [
         115.978,
         39.596
        ],
        [
         115.995,
         39.577
        ],
        [
         116.026,
         39.588
        ],
        [
         116.036,
         39.572
        ],
        [
         116.099,
         39.575
        ],
        [
         116.13,
         39.568
        ],
        [
         116.152,
         39.583
        ],
        [
         116.199,
         39.589
        ],
        [
         116.241,
         39.564
        ],
        [
         116.258,
         39.5
        ],
        [
         116.307,
         39.488
        ],
        [
         116.338,
         39.456
        ],
        [
         116.362,
         39.455
        ],
        [
         116.362,
         39.455
        ],
        [
         116.435,
         39.443
        ],
        [
         116.455,
         39.453
        ],
        [
         116.444,
         39.482
        ],
        [
         116.412,
         39.483
        ],
        [
         116.402,
         39.528
        ],
        [
         116.444,
         39.51
        ],
        [
         116.438,
         39.527
        ],
        [
         116.478,
         39.535
        ],
        [
         116.473,
         39.553
        ],
        [
         116.508,
         39.551
        ],
        [
         116.524,
         39.596
        ],
        [
         116.592,
         39.621
        ],
        [
         116.592,
         39.621
        ],
        [
         116.621,
         39.602
        ],
        [
         116.665,
         39.606
        ],
        [
         116.723,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.727,
         39.595
        ],
        [
         116.727,
         39.595
        ],
        [
         116.709,
         39.618
        ],
        [
         116.749,
         39.62
        ],
        [
         116.791,
         39.596
        ],
        [
         116.812,
         39.616
        ],
        [
         116.85,
         39.668
        ],
        [
         116.906,
         39.677
        ],
        [
         116.906,
         39.688
        ],
        [
         116.89,
         39.688
        ],
        [
         116.887,
         39.725
        ],
        [
         116.917,
         39.731
        ],
        [
         116.902,
         39.764
        ],
        [
         116.949,
         39.779
        ],
        [
         116.918,
         39.846
        ],
        [
         116.908,
         39.832
        ],
        [
         116.866,
         39.844
        ],
        [
         116.812,
         39.89
        ],
        [
         116.784,
         39.891
        ],
        [
         116.783,
         39.948
        ],
        [
         116.758,
         39.968
        ],
        [
         116.781,
         40.035
        ],
        [
         116.82,
         40.028
        ],
        [
         116.831,
         40.051
        ],
        [
         116.868,
         40.042
        ],
        [
         116.928,
         40.055
        ],
        [
         116.945,
         40.041
        ],
        [
         117.025,
         40.03
        ],
        [
         117.052,
         40.06
        ],
        [
         117.105,
         40.074
        ],
        [
         117.105,
         40.074
        ],
        [
         117.14,
         40.064
        ],
        [
         117.16,
         40.077
        ],
        [
         117.204,
         40.07
        ],
        [
         117.21,
         40.082
        ],
        [
         117.224,
         40.095
        ],
        [
         117.224,
         40.095
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.274,
         40.106
        ],
        [
         117.307,
         40.137
        ],
        [
         117.349,
         40.137
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.384,
         40.188
        ],
        [
         117.39,
         40.228
        ],
        [
         117.351,
         40.23
        ],
        [
         117.331,
         40.29
        ],
        [
         117.295,
         40.278
        ],
        [
         117.272,
         40.325
        ],
        [
         117.272,
         40.325
        ],
        [
         117.243,
         40.369
        ],
        [
         117.226,
         40.369
        ],
        [
         117.234,
         40.417
        ],
        [
         117.264,
         40.442
        ],
        [
         117.209,
         40.502
        ],
        [
         117.263,
         40.513
        ],
        [
         117.248,
         40.54
        ],
        [
         117.27,
         40.561
        ],
        [
         117.349,
         40.581
        ],
        [
         117.349,
         40.581
        ]
       ]
      ]
     ]
    },
    "n": "北京市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.4,
         38.9
        ],
        [
         117.4,
         40.236
        ],
        [
         117.39,
         40.228
        ],
        [
         117.384,
         40.188
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.349,
         40.137
        ],
        [
         117.307,
         40.137
        ],
        [
         117.274,
         40.106
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.224,
         40.095
        ],
        [
         117.224,
         40.095
        ],
        [
         117.21,
         40.082
        ],
        [
         117.192,
         40.066
        ],
        [
         117.198,
         39.993
        ],
        [
         117.151,
         39.945
        ],
        [
         117.163,
         39.877
        ],
        [
         117.163,
         39.877
        ],
        [
         117.228,
         39.853
        ],
        [
         117.248,
         39.861
        ],
        [
         117.252,
         39.834
        ],
        [
         117.192,
         39.833
        ],
        [
         117.156,
         39.817
        ],
        [
         117.158,
         39.797
        ],
        [
         117.206,
         39.764
        ],
        [
         117.162,
         39.749
        ],
        [
         117.165,
         39.719
        ],
        [
         117.165,
         39.719
        ],
        [
         117.178,
         39.645
        ],
        [
         117.153,
         39.624
        ],
        [
         117.109,
         39.625
        ],
        [
         117.109,
         39.625
        ],
        [
         117.016,
         39.654
        ],
        [
         116.983,
         39.639
        ],
        [
         116.983,
         39.639
        ],
        [
         116.964,
         39.643
        ],
        [
         116.949,
         39.681
        ],
        [
         116.949,
         39.681
        ],
        [
         116.945,
         39.695
        ],
        [
         116.945,
         39.695
        ],
        [
         116.932,
         39.706
        ],
        [
         116.932,
         39.706
        ],
        [
         116.906,
         39.688
        ],
        [
         116.906,
         39.677
        ],
        [
         116.85,
         39.668
        ],
        [
         116.812,
         39.616
        ],
        [
         116.808,
         39.576
        ],
        [
         116.787,
         39.554
        ],
        [
         116.82,
         39.529
        ],
        [
         116.821,
         39.482
        ],
        [
         116.785,
         39.466
        ],
        [
         116.832,
         39.436
        ],
        [
         116.876,
         39.435
        ],
        [
         116.84,
         39.413
        ],
        [
         116.84,
         39.378
        ],
        [
         116.818,
         39.374
        ],
        [
         116.829,
         39.339
        ],
        [
         116.871,
         39.358
        ],
        [
         116.89,
         39.338
        ],
        [
         116.872,
         39.291
        ],
        [
         116.882,
         39.226
        ],
        [
         116.882,
         39.226
        ],
        [
         116.856,
         39.216
        ],
        [
         116.87,
         39.154
        ],
        [
         116.909,
         39.151
        ],
        [
         116.913,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.913,
         39.111
        ],
        [
         116.872,
         39.055
        ],
        [
         116.813,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.754,
         39.035
        ],
        [
         116.754,
         39.035
        ],
        [
         116.755,
         39.003
        ],
        [
         116.728,
         38.975
        ],
        [
         116.708,
         38.932
        ],
        [
         116.721,
         38.9
        ],
        [
         117.4,
         38.9
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
         117.4,
         40.565
        ],
        [
         117.39,
         40.562
        ],
        [
         117.349,
         40.581
        ],
        [
         117.349,
         40.581
        ],
        [
         117.27,
         40.561
        ],
        [
         117.248,
         40.54
        ],
        [
         117.263,
         40.513
        ],
        [
         117.209,
         40.502
        ],
        [
         117.264,
         40.442
        ],
        [
         117.234,
         40.417
        ],
        [
         117.226,
         40.369
        ],
        [
         117.243,
         40.369
        ],
        [
         117.272,
         40.325
        ],
        [
         117.272,
         40.325
        ],
        [
         117.295,
         40.278
        ],
        [
         117.331,
         40.29
        ],
        [
         117.351,
         40.23
        ],
        [
         117.39,
         40.228
        ],
        [
         117.4,
         40.236
        ],
        [
         117.4,
         40.9
        ],
        [
         115.4,
         40.9
        ],
        [
         115.4,
         38.9
        ],
        [
         116.721,
         38.9
        ],
        [
         116.708,
         38.932
        ],
        [
         116.728,
         38.975
        ],
        [
         116.755,
         39.003
        ],
        [
         116.754,
         39.035
        ],
        [
         116.754,
         39.035
        ],
        [
         116.783,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.872,
         39.055
        ],
        [
         116.913,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.913,
         39.111
        ],
        [
         116.909,
         39.151
        ],
        [
         116.87,
         39.154
        ],
        [
         116.856,
         39.216
        ],
        [
         116.882,
         39.226
        ],
        [
         116.882,
         39.226
        ],
        [
         116.872,
         39.291
        ],
        [
         116.89,
         39.338
        ],
        [
         116.871,
         39.358
        ],
        [
         116.829,
         39.339
        ],
        [
         116.818,
         39.374
        ],
        [
         116.84,
         39.378
        ],
        [
         116.84,
         39.413
        ],
        [
         116.876,
         39.435
        ],
        [
         116.832,
         39.436
        ],
        [
         116.785,
         39.466
        ],
        [
         116.821,
         39.482
        ],
        [
         116.82,
         39.529
        ],
        [
         116.787,
         39.554
        ],
        [
         116.808,
         39.576
        ],
        [
         116.812,
         39.616
        ],
        [
         116.791,
         39.596
        ],
        [
         116.749,
         39.62
        ],
        [
         116.709,
         39.618
        ],
        [
         116.727,
         39.595
        ],
        [
         116.727,
         39.595
        ],
        [
         116.724,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.665,
         39.606
        ],
        [
         116.621,
         39.602
        ],
        [
         116.592,
         39.621
        ],
        [
         116.592,
         39.621
        ],
        [
         116.524,
         39.596
        ],
        [
         116.508,
         39.551
        ],
        [
         116.473,
         39.553
        ],
        [
         116.478,
         39.535
        ],
        [
         116.438,
         39.527
        ],
        [
         116.444,
         39.51
        ],
        [
         116.402,
         39.528
        ],
        [
         116.412,
         39.483
        ],
        [
         116.444,
         39.482
        ],
        [
         116.455,
         39.453
        ],
        [
         116.435,
         39.443
        ],
        [
         116.362,
         39.455
        ],
        [
         116.362,
         39.455
        ],
        [
         116.338,
         39.456
        ],
        [
         116.307,
         39.488
        ],
        [
         116.258,
         39.5
        ],
        [
         116.241,
         39.564
        ],
        [
         116.199,
         39.589
        ],
        [
         116.152,
         39.583
        ],
        [
         116.13,
         39.568
        ],
        [
         116.099,
         39.575
        ],
        [
         116.036,
         39.572
        ],
        [
         116.026,
         39.588
        ],
        [
         115.995,
         39.577
        ],
        [
         115.978,
         39.596
        ],
        [
         115.957,
         39.561
        ],
        [
         115.91,
         39.6
        ],
        [
         115.91,
         39.6
        ],
        [
         115.915,
         39.583
        ],
        [
         115.915,
         39.583
        ],
        [
         115.868,
         39.547
        ],
        [
         115.868,
         39.547
        ],
        [
         115.828,
         39.541
        ],
        [
         115.821,
         39.523
        ],
        [
         115.821,
         39.523
        ],
        [
         115.806,
         39.51
        ],
        [
         115.806,
         39.51
        ],
        [
         115.753,
         39.516
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.725,
         39.544
        ],
        [
         115.725,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.551
        ],
        [
         115.721,
         39.551
        ],
        [
         115.719,
         39.554
        ],
        [
         115.719,
         39.554
        ],
        [
         115.717,
         39.56
        ],
        [
         115.717,
         39.56
        ],
        [
         115.699,
         39.57
        ],
        [
         115.699,
         39.57
        ],
        [
         115.699,
         39.578
        ],
        [
         115.699,
         39.578
        ],
        [
         115.668,
         39.615
        ],
        [
         115.634,
         39.6
        ],
        [
         115.634,
         39.6
        ],
        [
         115.587,
         39.59
        ],
        [
         115.546,
         39.619
        ],
        [
         115.518,
         39.597
        ],
        [
         115.522,
         39.64
        ],
        [
         115.479,
         39.651
        ],
        [
         115.479,
         39.651
        ],
        [
         115.492,
         39.67
        ],
        [
         115.487,
         39.742
        ],
        [
         115.44,
         39.752
        ],
        [
         115.444,
         39.786
        ],
        [
         115.484,
         39.798
        ],
        [
         115.484,
         39.798
        ],
        [
         115.506,
         39.784
        ],
        [
         115.553,
         39.795
        ],
        [
         115.567,
         39.816
        ],
        [
         115.514,
         39.838
        ],
        [
         115.526,
         39.876
        ],
        [
         115.516,
         39.892
        ],
        [
         115.516,
         39.892
        ],
        [
         115.523,
         39.899
        ],
        [
         115.481,
         39.936
        ],
        [
         115.426,
         39.951
        ],
        [
         115.429,
         39.984
        ],
        [
         115.45,
         39.993
        ],
        [
         115.455,
         40.03
        ],
        [
         115.485,
         40.04
        ],
        [
         115.527,
         40.076
        ],
        [
         115.591,
         40.096
        ],
        [
         115.6,
         40.12
        ],
        [
         115.755,
         40.146
        ],
        [
         115.755,
         40.146
        ],
        [
         115.774,
         40.176
        ],
        [
         115.806,
         40.153
        ],
        [
         115.848,
         40.147
        ],
        [
         115.856,
         40.189
        ],
        [
         115.87,
         40.186
        ],
        [
         115.899,
         40.234
        ],
        [
         115.969,
         40.264
        ],
        [
         115.952,
         40.282
        ],
        [
         115.918,
         40.354
        ],
        [
         115.864,
         40.359
        ],
        [
         115.772,
         40.444
        ],
        [
         115.781,
         40.493
        ],
        [
         115.736,
         40.503
        ],
        [
         115.755,
         40.54
        ],
        [
         115.785,
         40.558
        ],
        [
         115.82,
         40.559
        ],
        [
         115.828,
         40.588
        ],
        [
         115.885,
         40.595
        ],
        [
         115.908,
         40.617
        ],
        [
         115.972,
         40.602
        ],
        [
         115.982,
         40.579
        ],
        [
         116.005,
         40.584
        ],
        [
         116.099,
         40.631
        ],
        [
         116.134,
         40.667
        ],
        [
         116.163,
         40.662
        ],
        [
         116.172,
         40.696
        ],
        [
         116.205,
         40.74
        ],
        [
         116.22,
         40.744
        ],
        [
         116.247,
         40.792
        ],
        [
         116.273,
         40.763
        ],
        [
         116.311,
         40.755
        ],
        [
         116.317,
         40.772
        ],
        [
         116.454,
         40.766
        ],
        [
         116.466,
         40.774
        ],
        [
         116.438,
         40.819
        ],
        [
         116.34,
         40.9
        ],
        [
         116.476,
         40.9
        ],
        [
         116.477,
         40.9
        ],
        [
         116.477,
         40.9
        ],
        [
         116.736,
         40.9
        ],
        [
         116.76,
         40.89
        ],
        [
         116.813,
         40.848
        ],
        [
         116.848,
         40.839
        ],
        [
         116.924,
         40.774
        ],
        [
         116.927,
         40.745
        ],
        [
         116.965,
         40.71
        ],
        [
         117.012,
         40.694
        ],
        [
         117.112,
         40.707
        ],
        [
         117.117,
         40.7
        ],
        [
         117.208,
         40.695
        ],
        [
         117.278,
         40.664
        ],
        [
         117.32,
         40.658
        ],
        [
         117.342,
         40.674
        ],
        [
         117.4,
         40.685
        ],
        [
         117.4,
         40.565
        ]
       ]
      ],
      [
       [
        [
         117.21,
         40.082
        ],
        [
         117.204,
         40.07
        ],
        [
         117.16,
         40.077
        ],
        [
         117.14,
         40.064
        ],
        [
         117.105,
         40.074
        ],
        [
         117.105,
         40.074
        ],
        [
         117.052,
         40.06
        ],
        [
         117.025,
         40.03
        ],
        [
         116.945,
         40.041
        ],
        [
         116.928,
         40.055
        ],
        [
         116.868,
         40.042
        ],
        [
         116.831,
         40.051
        ],
        [
         116.82,
         40.028
        ],
        [
         116.781,
         40.035
        ],
        [
         116.758,
         39.968
        ],
        [
         116.783,
         39.948
        ],
        [
         116.784,
         39.891
        ],
        [
         116.812,
         39.89
        ],
        [
         116.866,
         39.844
        ],
        [
         116.908,
         39.832
        ],
        [
         116.918,
         39.846
        ],
        [
         116.949,
         39.779
        ],
        [
         116.902,
         39.764
        ],
        [
         116.917,
         39.731
        ],
        [
         116.887,
         39.725
        ],
        [
         116.89,
         39.688
        ],
        [
         116.906,
         39.688
        ],
        [
         116.932,
         39.706
        ],
        [
         116.932,
         39.706
        ],
        [
         116.945,
         39.695
        ],
        [
         116.945,
         39.695
        ],
        [
         116.949,
         39.681
        ],
        [
         116.949,
         39.681
        ],
        [
         116.964,
         39.643
        ],
        [
         116.983,
         39.639
        ],
        [
         116.983,
         39.639
        ],
        [
         117.016,
         39.654
        ],
        [
         117.109,
         39.625
        ],
        [
         117.109,
         39.625
        ],
        [
         117.153,
         39.624
        ],
        [
         117.178,
         39.645
        ],
        [
         117.165,
         39.719
        ],
        [
         117.165,
         39.719
        ],
        [
         117.162,
         39.749
        ],
        [
         117.206,
         39.764
        ],
        [
         117.158,
         39.797
        ],
        [
         117.156,
         39.817
        ],
        [
         117.192,
         39.833
        ],
        [
         117.252,
         39.834
        ],
        [
         117.248,
         39.861
        ],
        [
         117.228,
         39.853
        ],
        [
         117.163,
         39.877
        ],
        [
         117.163,
         39.877
        ],
        [
         117.151,
         39.945
        ],
        [
         117.198,
         39.993
        ],
        [
         117.192,
         40.066
        ],
        [
         117.21,
         40.082
        ]
       ]
      ]
     ]
    },
    "n": "河北省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   115.4,
   38.9,
   117.4,
   40.9
  ]
 }
};
