// 本文件由 tools/build.py 自动生成（切片 taiwan_dutch_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["taiwan_dutch_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["taiwan_dutch_llm"] = {
 "meta": {
  "kind": "battle",
  "region": "taiwan",
  "province": "taiwan",
  "title": "荷兰据台与热兰遮城（1624—1662）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "dayuan",
  "dossier_event": "event:ev_taiwan_dutch_llm_01",
  "vocab_pack": "inline:taiwan_dutch_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "qing",
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
    "note": "荷兰据台与热兰遮城（1624—1662）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "荷兰据台与热兰遮城（1624—1662）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "荷兰据台与热兰遮城（1624—1662）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "荷兰据台与热兰遮城（1624—1662）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   5,
   6
  ],
  "page": "taiwan_dutch_llm.html",
  "key": "taiwan_dutch_llm",
  "scene_id": "taiwan_dutch_llm"
 },
 "sources": [
  {
   "id": "dutch_src",
   "title": "热兰遮城志（Valentijn）/ 台湾通史",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "连横",
   "period": "民国",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "zeelandia",
   "name": "熱蘭遮城",
   "type": "fortress",
   "modern": "今台灣台南安平古堡",
   "note": "荷蘭所築城堡",
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "dayuan",
   "name": "大員",
   "type": "port",
   "modern": "今台灣台南",
   "note": "荷蘭據台之據點。坐标据地名志条目（modern 含 台南→台南），标 approx。",
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 120.2,
   "lat": 23.0,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（modern 含 台南→台南）（诚实回填 v0.221）。",
   "elev": 14
  },
  {
   "id": "batavia",
   "name": "巴達維亞",
   "type": "city",
   "modern": "今印尼雅加達",
   "note": "荷蘭東印度公司總部",
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "provintia",
   "name": "普羅民遮城",
   "type": "fortress",
   "modern": "今台灣台南赤崁樓",
   "note": "荷蘭另築之城",
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
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
   "name": "鄭成功",
   "role": "明延平郡王",
   "note": "率軍圍攻熱蘭遮城",
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "TAI__p02",
   "name": "荷蘭總督",
   "role": "荷蘭東印度公司總督",
   "note": "守熱蘭遮城，後降",
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "TAI_001",
   "subject": "event:ev_taiwan_dutch_llm_01",
   "predicate": "築城",
   "value_text": "荷蘭築熱蘭遮城於大員",
   "time": {
    "era_text": "天啟四年",
    "start": "1624-01-01",
    "end": "1624-12-31",
    "gregorian_year": 1624
   },
   "place": "zeelandia",
   "source": "dutch_src",
   "quote": "築熱蘭遮城",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 scholarship",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "築熱蘭遮城",
   "source_text": "明天启四年（一六二四），荷兰东印度公司据大员（今台南），筑热兰遮城（Zeelandia），'据海峡之冲，通漳泉之贾'，以鹿皮、砂糖、蔗糖与日本、波斯贸易，设教会学校教番童。崇祯间又筑普罗民遮城（赤崁）。顺治十八年（一六六一）郑成功围热兰遮，翌年荷兰降，退走巴达维亚——'红毛楼'遂入郑氏之手。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_002",
   "subject": "event:ev_taiwan_dutch_llm_01",
   "predicate": "貿易",
   "value_text": "以鹿皮砂糖與日貿易",
   "time": {
    "era_text": "天啟四年",
    "start": "1624-01-01",
    "end": "1624-12-31",
    "gregorian_year": 1624
   },
   "place": "dayuan",
   "source": "dutch_src",
   "quote": "通漳泉之賈",
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
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "通漳泉之賈",
   "source_text": "明天启四年（一六二四），荷兰东印度公司据大员（今台南），筑热兰遮城（Zeelandia），'据海峡之冲，通漳泉之贾'，以鹿皮、砂糖、蔗糖与日本、波斯贸易，设教会学校教番童。崇祯间又筑普罗民遮城（赤崁）。顺治十八年（一六六一）郑成功围热兰遮，翌年荷兰降，退走巴达维亚——'红毛楼'遂入郑氏之手。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_003",
   "subject": "event:ev_taiwan_dutch_llm_01",
   "predicate": "教化",
   "value_text": "設教會學校教番童",
   "time": {
    "era_text": "天啟四年",
    "start": "1624-01-01",
    "end": "1624-12-31",
    "gregorian_year": 1624
   },
   "place": "dayuan",
   "source": "dutch_src",
   "quote": "設教會學校教番童",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "設教會學校教番童",
   "source_text": "明天启四年（一六二四），荷兰东印度公司据大员（今台南），筑热兰遮城（Zeelandia），'据海峡之冲，通漳泉之贾'，以鹿皮、砂糖、蔗糖与日本、波斯贸易，设教会学校教番童。崇祯间又筑普罗民遮城（赤崁）。顺治十八年（一六六一）郑成功围热兰遮，翌年荷兰降，退走巴达维亚——'红毛楼'遂入郑氏之手。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_004",
   "subject": "event:ev_taiwan_dutch_llm_02",
   "predicate": "圍城",
   "value_text": "鄭成功圍攻熱蘭遮城",
   "time": {
    "era_text": "順治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "zeelandia",
   "source": "dutch_src",
   "quote": "鄭成功圍熱蘭遮",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "鄭成功圍熱蘭遮",
   "source_text": "明天启四年（一六二四），荷兰东印度公司据大员（今台南），筑热兰遮城（Zeelandia），'据海峡之冲，通漳泉之贾'，以鹿皮、砂糖、蔗糖与日本、波斯贸易，设教会学校教番童。崇祯间又筑普罗民遮城（赤崁）。顺治十八年（一六六一）郑成功围热兰遮，翌年荷兰降，退走巴达维亚——'红毛楼'遂入郑氏之手。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_005",
   "subject": "event:ev_taiwan_dutch_llm_03",
   "predicate": "降伏",
   "value_text": "荷蘭降鄭成功",
   "time": {
    "era_text": "順治十九年",
    "start": "1662"
   },
   "place": "zeelandia",
   "source": "dutch_src",
   "quote": "荷蘭降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "荷蘭降",
   "source_text": "明天启四年（一六二四），荷兰东印度公司据大员（今台南），筑热兰遮城（Zeelandia），'据海峡之冲，通漳泉之贾'，以鹿皮、砂糖、蔗糖与日本、波斯贸易，设教会学校教番童。崇祯间又筑普罗民遮城（赤崁）。顺治十八年（一六六一）郑成功围热兰遮，翌年荷兰降，退走巴达维亚——'红毛楼'遂入郑氏之手。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_006",
   "subject": "event:ev_taiwan_dutch_llm_03",
   "predicate": "退兵",
   "value_text": "荷蘭退走巴達維亞",
   "time": {
    "era_text": "順治十九年",
    "start": "1662"
   },
   "place": "batavia",
   "source": "dutch_src",
   "quote": "退走巴達維亞",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "退走巴達維亞",
   "source_text": "明天启四年（一六二四），荷兰东印度公司据大员（今台南），筑热兰遮城（Zeelandia），'据海峡之冲，通漳泉之贾'，以鹿皮、砂糖、蔗糖与日本、波斯贸易，设教会学校教番童。崇祯间又筑普罗民遮城（赤崁）。顺治十八年（一六六一）郑成功围热兰遮，翌年荷兰降，退走巴达维亚——'红毛楼'遂入郑氏之手。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_007",
   "subject": "place:zeelandia",
   "predicate": "別名",
   "value_text": "熱蘭遮城又稱紅毛樓",
   "time": {
    "era_text": "順治十九年",
    "start": "1662"
   },
   "place": "zeelandia",
   "source": "dutch_src",
   "quote": "紅毛樓",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "紅毛樓",
   "source_text": "明天启四年（一六二四），荷兰东印度公司据大员（今台南），筑热兰遮城（Zeelandia），'据海峡之冲，通漳泉之贾'，以鹿皮、砂糖、蔗糖与日本、波斯贸易，设教会学校教番童。崇祯间又筑普罗民遮城（赤崁）。顺治十八年（一六六一）郑成功围热兰遮，翌年荷兰降，退走巴达维亚——'红毛楼'遂入郑氏之手。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_008",
   "subject": "event:ev_taiwan_dutch_llm_01",
   "predicate": "築城時間",
   "value_text": "普羅民遮城建於崇禎間",
   "time": {
    "era_text": "崇禎年間",
    "start": "1628-01-01",
    "end": "1628-12-31",
    "gregorian_year": 1628
   },
   "place": "provintia",
   "source": "dutch_src",
   "quote": "崇禎間又築普羅民遮城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "崇禎間又築普羅民遮城",
   "source_text": "明天启四年（一六二四），荷兰东印度公司据大员（今台南），筑热兰遮城（Zeelandia），'据海峡之冲，通漳泉之贾'，以鹿皮、砂糖、蔗糖与日本、波斯贸易，设教会学校教番童。崇祯间又筑普罗民遮城（赤崁）。顺治十八年（一六六一）郑成功围热兰遮，翌年荷兰降，退走巴达维亚——'红毛楼'遂入郑氏之手。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_009",
   "subject": "event:ev_taiwan_dutch_llm_02",
   "predicate": "圍城時間",
   "value_text": "圍城始於順治十八年",
   "time": {
    "era_text": "順治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "zeelandia",
   "source": "dutch_src",
   "quote": "順治十八年鄭成功圍熱蘭遮",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "順治十八年鄭成功圍熱蘭遮",
   "source_text": "明天启四年（一六二四），荷兰东印度公司据大员（今台南），筑热兰遮城（Zeelandia），'据海峡之冲，通漳泉之贾'，以鹿皮、砂糖、蔗糖与日本、波斯贸易，设教会学校教番童。崇祯间又筑普罗民遮城（赤崁）。顺治十八年（一六六一）郑成功围热兰遮，翌年荷兰降，退走巴达维亚——'红毛楼'遂入郑氏之手。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_010",
   "subject": "event:ev_taiwan_dutch_llm_03",
   "predicate": "降伏時間",
   "value_text": "荷蘭降於順治十九年",
   "time": {
    "era_text": "順治十九年",
    "start": "1662"
   },
   "place": "zeelandia",
   "source": "dutch_src",
   "quote": "翌年荷蘭降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "翌年荷蘭降",
   "source_text": "明天启四年（一六二四），荷兰东印度公司据大员（今台南），筑热兰遮城（Zeelandia），'据海峡之冲，通漳泉之贾'，以鹿皮、砂糖、蔗糖与日本、波斯贸易，设教会学校教番童。崇祯间又筑普罗民遮城（赤崁）。顺治十八年（一六六一）郑成功围热兰遮，翌年荷兰降，退走巴达维亚——'红毛楼'遂入郑氏之手。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_011",
   "subject": "event:ev_taiwan_dutch_llm_02",
   "predicate": "圍城結果",
   "value_text": "鄭成功攻陷熱蘭遮城",
   "time": {
    "era_text": "順治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "zeelandia",
   "source": "dutch_src",
   "quote": "圍熱蘭遮",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "province",
   "note": "推斷",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "圍熱蘭遮",
   "source_text": "明天启四年（一六二四），荷兰东印度公司据大员（今台南），筑热兰遮城（Zeelandia），'据海峡之冲，通漳泉之贾'，以鹿皮、砂糖、蔗糖与日本、波斯贸易，设教会学校教番童。崇祯间又筑普罗民遮城（赤崁）。顺治十八年（一六六一）郑成功围热兰遮，翌年荷兰降，退走巴达维亚——'红毛楼'遂入郑氏之手。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_012",
   "subject": "event:ev_taiwan_dutch_llm_03",
   "predicate": "降伏條件",
   "value_text": "荷蘭投降條件未詳",
   "time": {
    "era_text": "順治十九年",
    "start": "1662"
   },
   "place": "zeelandia",
   "source": "dutch_src",
   "quote": "荷蘭降",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "荷蘭東印度公司檔案",
    "skills": [
     "荷蘭語",
     "檔案解讀"
    ],
    "accept": "查閱投降條約原文"
   },
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "荷蘭降",
   "source_text": "明天启四年（一六二四），荷兰东印度公司据大员（今台南），筑热兰遮城（Zeelandia），'据海峡之冲，通漳泉之贾'，以鹿皮、砂糖、蔗糖与日本、波斯贸易，设教会学校教番童。崇祯间又筑普罗民遮城（赤崁）。顺治十八年（一六六一）郑成功围热兰遮，翌年荷兰降，退走巴达维亚——'红毛楼'遂入郑氏之手。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_013",
   "subject": "event:ev_taiwan_dutch_llm_01",
   "predicate": "貿易對象",
   "value_text": "與日本波斯貿易",
   "time": {
    "era_text": "天啟四年",
    "start": "1624-01-01",
    "end": "1624-12-31",
    "gregorian_year": 1624
   },
   "place": "dayuan",
   "source": "dutch_src",
   "quote": "與日本、波斯貿易",
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
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "與日本、波斯貿易",
   "source_text": "明天启四年（一六二四），荷兰东印度公司据大员（今台南），筑热兰遮城（Zeelandia），'据海峡之冲，通漳泉之贾'，以鹿皮、砂糖、蔗糖与日本、波斯贸易，设教会学校教番童。崇祯间又筑普罗民遮城（赤崁）。顺治十八年（一六六一）郑成功围热兰遮，翌年荷兰降，退走巴达维亚——'红毛楼'遂入郑氏之手。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_014",
   "subject": "event:ev_taiwan_dutch_llm_01",
   "predicate": "戰略位置",
   "value_text": "據海峽之衝",
   "time": {
    "era_text": "天啟四年",
    "start": "1624-01-01",
    "end": "1624-12-31",
    "gregorian_year": 1624
   },
   "place": "dayuan",
   "source": "dutch_src",
   "quote": "據海峽之衝",
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
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "據海峽之衝",
   "source_text": "明天启四年（一六二四），荷兰东印度公司据大员（今台南），筑热兰遮城（Zeelandia），'据海峡之冲，通漳泉之贾'，以鹿皮、砂糖、蔗糖与日本、波斯贸易，设教会学校教番童。崇祯间又筑普罗民遮城（赤崁）。顺治十八年（一六六一）郑成功围热兰遮，翌年荷兰降，退走巴达维亚——'红毛楼'遂入郑氏之手。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "TAI_012"
 ],
 "events": [
  {
   "id": "ev_taiwan_dutch_llm_01",
   "subject": "event:ev_taiwan_dutch_llm_01",
   "year": 1624,
   "era": "天啟四年",
   "title": "荷蘭據大員",
   "kind": "建置",
   "text": "荷蘭東印度公司據大員築熱蘭遮城",
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_taiwan_dutch_llm_02",
   "subject": "event:ev_taiwan_dutch_llm_02",
   "year": 1661,
   "era": "順治十八年",
   "title": "鄭成功圍熱蘭遮",
   "kind": "戰事",
   "text": "鄭成功率軍圍攻熱蘭遮城",
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_taiwan_dutch_llm_03",
   "subject": "event:ev_taiwan_dutch_llm_03",
   "year": 1662,
   "era": "順治十九年",
   "title": "荷蘭降鄭",
   "kind": "戰事",
   "text": "荷蘭降，退走巴達維亞",
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "zeelandia",
   "to": "batavia",
   "type": "military",
   "label": "荷蘭退走路線",
   "_source_idx": 0,
   "_source_name": "热兰遮城志（Valentijn）/ 台湾通史",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "zeelandia",
   "party": "后世官修",
   "start": 1624,
   "end": 1662,
   "timeline": "main"
  },
  {
   "place_id": "dayuan",
   "party": "后世官修",
   "start": 1624,
   "end": 1662,
   "timeline": "main"
  },
  {
   "place_id": "batavia",
   "party": "后世官修",
   "start": 1624,
   "end": 1662,
   "timeline": "main"
  },
  {
   "place_id": "provintia",
   "party": "后世官修",
   "start": 1624,
   "end": 1662,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "dayuan",
   "name": "大員",
   "lon": 120.2,
   "lat": 23.0,
   "region": "taiwan"
  }
 ],
 "control_years": [
  1624,
  1662
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
       120.337,
       24.0
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
       120.083,
       23.094
      ],
      [
       120.122,
       23.037
      ],
      [
       120.15,
       22.975
      ],
      [
       120.233,
       22.718
      ],
      [
       120.273,
       22.627
      ],
      [
       120.326,
       22.542
      ],
      [
       120.316,
       22.548
      ],
      [
       120.388,
       22.485
      ],
      [
       120.48,
       22.442
      ],
      [
       120.581,
       22.356
      ],
      [
       120.608,
       22.313
      ],
      [
       120.678,
       22.16
      ],
      [
       120.69,
       22.033
      ],
      [
       120.713,
       22.0
      ],
      [
       120.857,
       22.0
      ],
      [
       120.864,
       22.033
      ],
      [
       120.878,
       22.142
      ],
      [
       120.877,
       22.262
      ],
      [
       120.897,
       22.379
      ],
      [
       120.947,
       22.503
      ],
      [
       121.009,
       22.62
      ],
      [
       121.161,
       22.776
      ],
      [
       121.2,
       22.831
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
        121.009,
        22.62
       ],
       [
        120.947,
        22.503
       ],
       [
        120.897,
        22.379
       ],
       [
        120.877,
        22.262
       ],
       [
        120.878,
        22.142
       ],
       [
        120.864,
        22.033
       ],
       [
        120.857,
        22.0
       ],
       [
        120.713,
        22.0
       ],
       [
        120.69,
        22.033
       ],
       [
        120.678,
        22.16
       ],
       [
        120.608,
        22.313
       ],
       [
        120.581,
        22.356
       ],
       [
        120.48,
        22.442
       ],
       [
        120.388,
        22.485
       ],
       [
        120.316,
        22.548
       ],
       [
        120.326,
        22.542
       ],
       [
        120.273,
        22.627
       ],
       [
        120.233,
        22.718
       ],
       [
        120.15,
        22.975
       ],
       [
        120.122,
        23.037
       ],
       [
        120.083,
        23.094
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
        120.337,
        24.0
       ],
       [
        121.2,
        24.0
       ],
       [
        121.2,
        22.831
       ],
       [
        121.161,
        22.776
       ],
       [
        121.009,
        22.62
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
         120.444,
         22.441
        ],
        [
         120.518,
         22.409
        ],
        [
         120.57,
         22.362
        ],
        [
         120.641,
         22.242
        ],
        [
         120.659,
         22.154
        ],
        [
         120.662,
         22.067
        ],
        [
         120.651,
         22.033
        ],
        [
         120.662,
         22.0
        ],
        [
         120.879,
         22.0
        ],
        [
         120.908,
         22.033
        ],
        [
         120.912,
         22.086
        ],
        [
         120.903,
         22.126
        ],
        [
         120.915,
         22.303
        ],
        [
         120.981,
         22.528
        ],
        [
         121.015,
         22.584
        ],
        [
         121.033,
         22.651
        ],
        [
         121.079,
         22.67
        ],
        [
         121.171,
         22.723
        ],
        [
         121.2,
         22.758
        ],
        [
         121.2,
         24.0
        ],
        [
         120.325,
         24.0
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
         120.019,
         23.073
        ],
        [
         120.03,
         23.049
        ],
        [
         120.133,
         23.001
        ],
        [
         120.149,
         22.896
        ],
        [
         120.2,
         22.721
        ],
        [
         120.274,
         22.56
        ],
        [
         120.297,
         22.532
        ],
        [
         120.444,
         22.441
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
         119.691,
         23.547
        ],
        [
         119.678,
         23.6
        ],
        [
         119.61,
         23.604
        ],
        [
         119.602,
         23.576
        ],
        [
         119.567,
         23.585
        ],
        [
         119.562,
         23.531
        ],
        [
         119.579,
         23.503
        ],
        [
         119.609,
         23.504
        ],
        [
         119.646,
         23.551
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
         119.506,
         23.577
        ],
        [
         119.472,
         23.557
        ],
        [
         119.519,
         23.56
        ],
        [
         119.525,
         23.625
        ],
        [
         119.506,
         23.626
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
         119.495,
         23.35
        ],
        [
         119.517,
         23.35
        ],
        [
         119.498,
         23.387
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
         119.608,
         23.62
        ],
        [
         119.615,
         23.661
        ],
        [
         119.586,
         23.676
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
         119.436,
         23.186
        ],
        [
         119.453,
         23.216
        ],
        [
         119.421,
         23.217
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
         120.396,
         22.342
        ],
        [
         120.383,
         22.356
        ],
        [
         120.355,
         22.327
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
   119.2,
   22.0,
   121.2,
   24.0
  ]
 }
};
