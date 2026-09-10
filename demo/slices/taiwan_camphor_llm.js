// 本文件由 tools/build.py 自动生成（切片 taiwan_camphor_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["taiwan_camphor_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["taiwan_camphor_llm"] = {
 "meta": {
  "kind": "exchange",
  "region": "taiwan",
  "province": "taiwan",
  "title": "樟脑与茶业出口（清—日据）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "taiwan",
  "dossier_event": "event:ev_taiwan_camphor_llm_01",
  "vocab_pack": "inline:taiwan_camphor_llm",
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
    "note": "樟脑与茶业出口（清—日据）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "樟脑与茶业出口（清—日据）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "樟脑与茶业出口（清—日据）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "樟脑与茶业出口（清—日据）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   6
  ],
  "page": "county.html?scene=taiwan_camphor_llm",
  "key": "taiwan_camphor_llm",
  "scene_id": "taiwan_camphor_llm"
 },
 "sources": [
  {
   "id": "camphor_src",
   "title": "台湾樟脑局档案 / 清季台湾海关报告",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "台湾总督府/海关",
   "period": "清/日",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "taiwan",
   "name": "臺灣",
   "type": "region",
   "modern": "今中國臺灣省",
   "note": "清末設省。坐标据地名志条目（别名 臺灣→台湾），标 chgis。",
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 120.6712,
   "lat": 24.14238,
   "geo_match": "chgis",
   "geo_note": "坐标据地名志条目（别名 臺灣→台湾）（诚实回填 v0.221）。",
   "elev": 155
  },
  {
   "id": "dadaocheng",
   "name": "大稻埕",
   "type": "city",
   "modern": "今中國臺灣臺北市大同區",
   "note": "茶市集中地",
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "tamsui",
   "name": "淡水",
   "type": "port",
   "modern": "今中國臺灣新北市淡水區",
   "note": "重要通商口岸",
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "keelung",
   "name": "基隆",
   "type": "port",
   "modern": "今中國臺灣基隆市",
   "note": "鐵路起點",
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "hsinchu",
   "name": "新竹",
   "type": "city",
   "modern": "今中國臺灣新竹市",
   "note": "鐵路終點",
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "TAI__p01",
   "name": "劉銘傳",
   "role": "臺灣巡撫",
   "note": "推動臺灣現代化建設",
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "TAI_001",
   "subject": "place:taiwan",
   "predicate": "物產",
   "value_text": "山林多樟，產樟腦",
   "time": {
    "era_text": "清末",
    "start": "1885"
   },
   "place": "taiwan",
   "source": "camphor_src",
   "quote": "臺灣山林多樟",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "臺灣山林多樟",
   "source_text": "台湾山林多樟，'熬樟为脑，行销欧美，为制造赛璐珞之原料'，清末樟脑之利甲于全球。乌龙、包种茶亦大宗，'淡水汽水（大稻埕）茶市，外商云集'。刘铭传抚台（一八八五后）兴铁路、电报、招商局，樟脑、茶、糖、煤'四天宝'出口激增——海关贸易之盛，为全台财政所倚。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_002",
   "subject": "place:taiwan",
   "predicate": "產業",
   "value_text": "樟腦行銷歐美",
   "time": {
    "era_text": "清末",
    "start": "1885"
   },
   "place": "taiwan",
   "source": "camphor_src",
   "quote": "行銷歐美",
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
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "行銷歐美",
   "source_text": "台湾山林多樟，'熬樟为脑，行销欧美，为制造赛璐珞之原料'，清末樟脑之利甲于全球。乌龙、包种茶亦大宗，'淡水汽水（大稻埕）茶市，外商云集'。刘铭传抚台（一八八五后）兴铁路、电报、招商局，樟脑、茶、糖、煤'四天宝'出口激增——海关贸易之盛，为全台财政所倚。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_003",
   "subject": "place:taiwan",
   "predicate": "產業",
   "value_text": "樟腦為賽璐珞原料",
   "time": {
    "era_text": "清末",
    "start": "1885"
   },
   "place": "taiwan",
   "source": "camphor_src",
   "quote": "為製造賽璐珞之原料",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "為製造賽璐珞之原料",
   "source_text": "台湾山林多樟，'熬樟为脑，行销欧美，为制造赛璐珞之原料'，清末樟脑之利甲于全球。乌龙、包种茶亦大宗，'淡水汽水（大稻埕）茶市，外商云集'。刘铭传抚台（一八八五后）兴铁路、电报、招商局，樟脑、茶、糖、煤'四天宝'出口激增——海关贸易之盛，为全台财政所倚。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_004",
   "subject": "place:taiwan",
   "predicate": "產業",
   "value_text": "清末樟腦利甲全球",
   "time": {
    "era_text": "清末",
    "start": "1885"
   },
   "place": "taiwan",
   "source": "camphor_src",
   "quote": "樟腦之利甲於全球",
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
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "樟腦之利甲於全球",
   "source_text": "台湾山林多樟，'熬樟为脑，行销欧美，为制造赛璐珞之原料'，清末樟脑之利甲于全球。乌龙、包种茶亦大宗，'淡水汽水（大稻埕）茶市，外商云集'。刘铭传抚台（一八八五后）兴铁路、电报、招商局，樟脑、茶、糖、煤'四天宝'出口激增——海关贸易之盛，为全台财政所倚。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_005",
   "subject": "place:taiwan",
   "predicate": "產業",
   "value_text": "產烏龍、包種茶",
   "time": {
    "era_text": "清末",
    "start": "1885"
   },
   "place": "taiwan",
   "source": "camphor_src",
   "quote": "烏龍、包種茶亦大宗",
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
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "烏龍、包種茶亦大宗",
   "source_text": "台湾山林多樟，'熬樟为脑，行销欧美，为制造赛璐珞之原料'，清末樟脑之利甲于全球。乌龙、包种茶亦大宗，'淡水汽水（大稻埕）茶市，外商云集'。刘铭传抚台（一八八五后）兴铁路、电报、招商局，樟脑、茶、糖、煤'四天宝'出口激增——海关贸易之盛，为全台财政所倚。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_006",
   "subject": "place:dadaocheng",
   "predicate": "商業",
   "value_text": "茶市外商雲集",
   "time": {
    "era_text": "清末",
    "start": "1885"
   },
   "place": "dadaocheng",
   "source": "camphor_src",
   "quote": "外商雲集",
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
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "外商雲集",
   "source_text": "台湾山林多樟，'熬樟为脑，行销欧美，为制造赛璐珞之原料'，清末樟脑之利甲于全球。乌龙、包种茶亦大宗，'淡水汽水（大稻埕）茶市，外商云集'。刘铭传抚台（一八八五后）兴铁路、电报、招商局，樟脑、茶、糖、煤'四天宝'出口激增——海关贸易之盛，为全台财政所倚。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_007",
   "subject": "event:ev_taiwan_camphor_llm_01",
   "predicate": "行政措施",
   "value_text": "劉銘傳推行新政",
   "time": {
    "era_text": "光緒十一年",
    "start": "1885-01-01",
    "end": "1885-12-31",
    "gregorian_year": 1885
   },
   "place": "taiwan",
   "source": "camphor_src",
   "quote": "劉銘傳撫臺",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "劉銘傳撫臺",
   "source_text": "台湾山林多樟，'熬樟为脑，行销欧美，为制造赛璐珞之原料'，清末樟脑之利甲于全球。乌龙、包种茶亦大宗，'淡水汽水（大稻埕）茶市，外商云集'。刘铭传抚台（一八八五后）兴铁路、电报、招商局，樟脑、茶、糖、煤'四天宝'出口激增——海关贸易之盛，为全台财政所倚。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_008",
   "subject": "event:ev_taiwan_camphor_llm_02",
   "predicate": "建設",
   "value_text": "興建鐵路",
   "time": {
    "era_text": "光緒十三年",
    "start": "1887-01-01",
    "end": "1887-12-31",
    "gregorian_year": 1887
   },
   "place": "taiwan",
   "source": "camphor_src",
   "quote": "興鐵路",
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
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "興鐵路",
   "source_text": "台湾山林多樟，'熬樟为脑，行销欧美，为制造赛璐珞之原料'，清末樟脑之利甲于全球。乌龙、包种茶亦大宗，'淡水汽水（大稻埕）茶市，外商云集'。刘铭传抚台（一八八五后）兴铁路、电报、招商局，樟脑、茶、糖、煤'四天宝'出口激增——海关贸易之盛，为全台财政所倚。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_009",
   "subject": "event:ev_taiwan_camphor_llm_03",
   "predicate": "專賣",
   "value_text": "樟腦專賣",
   "time": {
    "era_text": "光緒十二年",
    "start": "1886-01-01",
    "end": "1886-12-31",
    "gregorian_year": 1886
   },
   "place": "taiwan",
   "source": "camphor_src",
   "quote": "樟腦專賣",
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
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "樟腦專賣",
   "source_text": "台湾山林多樟，'熬樟为脑，行销欧美，为制造赛璐珞之原料'，清末樟脑之利甲于全球。乌龙、包种茶亦大宗，'淡水汽水（大稻埕）茶市，外商云集'。刘铭传抚台（一八八五后）兴铁路、电报、招商局，樟脑、茶、糖、煤'四天宝'出口激增——海关贸易之盛，为全台财政所倚。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_010",
   "subject": "place:taiwan",
   "predicate": "出口",
   "value_text": "四天寶出口激增",
   "time": {
    "era_text": "劉銘傳撫臺後",
    "start": "1885"
   },
   "place": "taiwan",
   "source": "camphor_src",
   "quote": "出口激增",
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
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "出口激增",
   "source_text": "台湾山林多樟，'熬樟为脑，行销欧美，为制造赛璐珞之原料'，清末樟脑之利甲于全球。乌龙、包种茶亦大宗，'淡水汽水（大稻埕）茶市，外商云集'。刘铭传抚台（一八八五后）兴铁路、电报、招商局，樟脑、茶、糖、煤'四天宝'出口激增——海关贸易之盛，为全台财政所倚。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_011",
   "subject": "place:taiwan",
   "predicate": "財政",
   "value_text": "海關貿易為財政所倚",
   "time": {
    "era_text": "清末",
    "start": "1885"
   },
   "place": "taiwan",
   "source": "camphor_src",
   "quote": "為全台財政所倚",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "為全台財政所倚",
   "source_text": "台湾山林多樟，'熬樟为脑，行销欧美，为制造赛璐珞之原料'，清末樟脑之利甲于全球。乌龙、包种茶亦大宗，'淡水汽水（大稻埕）茶市，外商云集'。刘铭传抚台（一八八五后）兴铁路、电报、招商局，樟脑、茶、糖、煤'四天宝'出口激增——海关贸易之盛，为全台财政所倚。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_012",
   "subject": "place:taiwan",
   "predicate": "產業",
   "value_text": "茶糖煤樟腦並稱四寶",
   "time": {
    "era_text": "清末",
    "start": "1885"
   },
   "place": "taiwan",
   "source": "camphor_src",
   "quote": "樟腦、茶、糖、煤'四天寶'",
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
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "樟腦、茶、糖、煤'四天寶'",
   "source_text": "台湾山林多樟，'熬樟为脑，行销欧美，为制造赛璐珞之原料'，清末樟脑之利甲于全球。乌龙、包种茶亦大宗，'淡水汽水（大稻埕）茶市，外商云集'。刘铭传抚台（一八八五后）兴铁路、电报、招商局，樟脑、茶、糖、煤'四天宝'出口激增——海关贸易之盛，为全台财政所倚。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_013",
   "subject": "place:taiwan",
   "predicate": "產業",
   "value_text": "樟腦出口量未詳",
   "time": {
    "era_text": "清末",
    "start": "1885"
   },
   "place": "taiwan",
   "source": "camphor_src",
   "quote": "未詳",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "lead": {
    "where": "海關檔案",
    "skills": [
     "歷史文獻分析"
    ],
    "accept": "查得具體出口噸數"
   },
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "未詳",
   "source_text": "台湾山林多樟，'熬樟为脑，行销欧美，为制造赛璐珞之原料'，清末樟脑之利甲于全球。乌龙、包种茶亦大宗，'淡水汽水（大稻埕）茶市，外商云集'。刘铭传抚台（一八八五后）兴铁路、电报、招商局，樟脑、茶、糖、煤'四天宝'出口激增——海关贸易之盛，为全台财政所倚。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_014",
   "subject": "place:taiwan",
   "predicate": "產業",
   "value_text": "茶葉出口值待考",
   "time": {
    "era_text": "清末",
    "start": "1885"
   },
   "place": "taiwan",
   "source": "camphor_src",
   "quote": "待考",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "lead": {
    "where": "淡水海關報告",
    "skills": [
     "經濟史"
    ],
    "accept": "取得茶葉出口統計"
   },
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "待考",
   "source_text": "台湾山林多樟，'熬樟为脑，行销欧美，为制造赛璐珞之原料'，清末樟脑之利甲于全球。乌龙、包种茶亦大宗，'淡水汽水（大稻埕）茶市，外商云集'。刘铭传抚台（一八八五后）兴铁路、电报、招商局，樟脑、茶、糖、煤'四天宝'出口激增——海关贸易之盛，为全台财政所倚。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_015",
   "subject": "place:taiwan",
   "predicate": "產業",
   "value_text": "樟腦專賣成效待評",
   "time": {
    "era_text": "清末",
    "start": "1886"
   },
   "place": "taiwan",
   "source": "camphor_src",
   "quote": "成效未明",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "province",
   "note": "學者對專賣利弊有爭議",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "成效未明",
   "source_text": "台湾山林多樟，'熬樟为脑，行销欧美，为制造赛璐珞之原料'，清末樟脑之利甲于全球。乌龙、包种茶亦大宗，'淡水汽水（大稻埕）茶市，外商云集'。刘铭传抚台（一八八五后）兴铁路、电报、招商局，樟脑、茶、糖、煤'四天宝'出口激增——海关贸易之盛，为全台财政所倚。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:place:taiwan|產業",
   "subject": "place:taiwan",
   "predicate": "產業",
   "kind": "record_vs_scholarship",
   "count": 6,
   "spread": null,
   "assertion_ids": [
    "TAI_002",
    "TAI_003",
    "TAI_004",
    "TAI_005",
    "TAI_012",
    "TAI_015"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "TAI_013",
  "TAI_014"
 ],
 "events": [
  {
   "id": "ev_taiwan_camphor_llm_01",
   "subject": "event:ev_taiwan_camphor_llm_01",
   "year": 1885,
   "era": "光緒十一年",
   "title": "劉銘傳撫臺",
   "kind": "行政",
   "text": "劉銘傳就任臺灣巡撫，推行新政。",
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_taiwan_camphor_llm_02",
   "subject": "event:ev_taiwan_camphor_llm_02",
   "year": 1887,
   "era": "光緒十三年",
   "title": "鐵路興建",
   "kind": "建置",
   "text": "開始興建基隆至新竹鐵路。",
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_taiwan_camphor_llm_03",
   "subject": "event:ev_taiwan_camphor_llm_03",
   "year": 1886,
   "era": "光緒十二年",
   "title": "樟腦專賣",
   "kind": "行政",
   "text": "設立樟腦專賣局，加強出口管理。",
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "keelung",
   "to": "hsinchu",
   "type": "military",
   "label": "鐵路運輸路線",
   "_source_idx": 0,
   "_source_name": "台湾樟脑局档案 / 清季台湾海关报告",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "taiwan",
   "party": "后世官修",
   "start": 1885,
   "end": 1887,
   "timeline": "main"
  },
  {
   "place_id": "dadaocheng",
   "party": "后世官修",
   "start": 1885,
   "end": 1887,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "taiwan",
   "name": "臺灣",
   "lon": 120.6712,
   "lat": 24.14238,
   "region": "taiwan"
  }
 ],
 "control_years": [
  1885,
  1887
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
       121.317,
       25.142
      ],
      [
       121.095,
       25.065
      ],
      [
       121.041,
       25.033
      ],
      [
       120.964,
       24.928
      ],
      [
       120.902,
       24.813
      ],
      [
       120.836,
       24.723
      ],
      [
       120.757,
       24.642
      ],
      [
       120.63,
       24.479
      ],
      [
       120.159,
       23.709
      ],
      [
       120.132,
       23.653
      ],
      [
       120.125,
       23.527
      ],
      [
       120.143,
       23.399
      ],
      [
       120.121,
       23.305
      ],
      [
       120.086,
       23.212
      ],
      [
       120.072,
       23.15
      ],
      [
       120.074,
       23.142
      ],
      [
       121.385,
       23.142
      ],
      [
       121.397,
       23.173
      ],
      [
       121.477,
       23.424
      ],
      [
       121.526,
       23.668
      ],
      [
       121.583,
       23.861
      ],
      [
       121.613,
       24.053
      ],
      [
       121.639,
       24.13
      ],
      [
       121.671,
       24.181
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
        120.074,
        23.142
       ],
       [
        120.072,
        23.15
       ],
       [
        120.086,
        23.212
       ],
       [
        120.121,
        23.305
       ],
       [
        120.143,
        23.399
       ],
       [
        120.125,
        23.527
       ],
       [
        120.132,
        23.653
       ],
       [
        120.159,
        23.709
       ],
       [
        120.63,
        24.479
       ],
       [
        120.757,
        24.642
       ],
       [
        120.836,
        24.723
       ],
       [
        120.902,
        24.813
       ],
       [
        120.964,
        24.928
       ],
       [
        121.041,
        25.033
       ],
       [
        121.095,
        25.065
       ],
       [
        121.317,
        25.142
       ],
       [
        121.671,
        25.142
       ],
       [
        121.671,
        24.181
       ],
       [
        121.639,
        24.13
       ],
       [
        121.613,
        24.053
       ],
       [
        121.583,
        23.861
       ],
       [
        121.526,
        23.668
       ],
       [
        121.477,
        23.424
       ],
       [
        121.397,
        23.173
       ],
       [
        121.385,
        23.142
       ],
       [
        120.074,
        23.142
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
         121.429,
         23.142
        ],
        [
         121.415,
         23.196
        ],
        [
         121.44,
         23.272
        ],
        [
         121.48,
         23.323
        ],
        [
         121.498,
         23.42
        ],
        [
         121.522,
         23.483
        ],
        [
         121.523,
         23.539
        ],
        [
         121.588,
         23.761
        ],
        [
         121.621,
         23.921
        ],
        [
         121.66,
         24.007
        ],
        [
         121.64,
         24.065
        ],
        [
         121.644,
         24.098
        ],
        [
         121.671,
         24.127
        ],
        [
         121.671,
         25.142
        ],
        [
         121.324,
         25.142
        ],
        [
         121.32,
         25.141
        ],
        [
         121.209,
         25.127
        ],
        [
         121.133,
         25.078
        ],
        [
         121.102,
         25.075
        ],
        [
         121.025,
         25.041
        ],
        [
         121.01,
         24.994
        ],
        [
         120.961,
         24.94
        ],
        [
         120.915,
         24.865
        ],
        [
         120.892,
         24.767
        ],
        [
         120.824,
         24.688
        ],
        [
         120.762,
         24.658
        ],
        [
         120.689,
         24.601
        ],
        [
         120.643,
         24.49
        ],
        [
         120.589,
         24.432
        ],
        [
         120.547,
         24.37
        ],
        [
         120.521,
         24.312
        ],
        [
         120.471,
         24.243
        ],
        [
         120.452,
         24.182
        ],
        [
         120.392,
         24.118
        ],
        [
         120.316,
         23.985
        ],
        [
         120.278,
         23.928
        ],
        [
         120.246,
         23.84
        ],
        [
         120.175,
         23.807
        ],
        [
         120.102,
         23.701
        ],
        [
         120.095,
         23.588
        ],
        [
         120.122,
         23.505
        ],
        [
         120.108,
         23.341
        ],
        [
         120.082,
         23.292
        ],
        [
         120.039,
         23.142
        ],
        [
         121.429,
         23.142
        ]
       ]
      ],
      [
       [
        [
         119.671,
         23.549
        ],
        [
         119.691,
         23.547
        ],
        [
         119.678,
         23.6
        ],
        [
         119.671,
         23.601
        ],
        [
         119.671,
         23.549
        ]
       ]
      ]
     ]
    },
    "n": "台湾省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   119.671,
   23.142,
   121.671,
   25.142
  ]
 }
};
