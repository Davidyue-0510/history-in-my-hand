// 本文件由 tools/build.py 自动生成（切片 anhui_huizhou_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["anhui_huizhou_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["anhui_huizhou_llm"] = {
 "meta": {
  "kind": "social",
  "region": "jiangnan",
  "province": "anhui",
  "title": "徽州宗族与祠堂族长社会（明清）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "huizhou",
  "dossier_event": "event:ev_anhui_huizhou_llm_01",
  "vocab_pack": "inline:anhui_huizhou_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "ming_qing",
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
    "note": "徽州宗族与祠堂族长社会（明清）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "徽州宗族与祠堂族长社会（明清）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "徽州宗族与祠堂族长社会（明清）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "徽州宗族与祠堂族长社会（明清）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=anhui_huizhou_llm",
  "key": "anhui_huizhou_llm",
  "scene_id": "anhui_huizhou_llm"
 },
 "sources": [
  {
   "id": "anhui_huizhou_src",
   "title": "徽州府志·风俗 / 茗洲吴氏家典",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "徽州府志局",
   "period": "清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "huizhou",
   "name": "徽州",
   "type": "region",
   "modern": "今安徽省黄山市一带",
   "note": "新安，徽州古称。坐标据地名志条目：徽州，标 approx。",
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 118.43,
   "lat": 29.87,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目：徽州（诚实回填 v0.221）。",
   "elev": 246
  },
  {
   "id": "xinan",
   "name": "新安",
   "type": "region",
   "modern": "今安徽省黄山市一带",
   "note": "徽州别称",
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "ANH__p01",
   "name": "族长",
   "role": "宗族首领",
   "note": "掌祭祀、判族务、行家法",
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "ANH_001",
   "subject": "place:huizhou",
   "predicate": "聚族而居",
   "value_text": "徽州大族聚族而居",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "huizhou",
   "source": "anhui_huizhou_src",
   "quote": "新安多大族，聚族而居",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "新安多大族，聚族而居",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ANH_002",
   "subject": "place:huizhou",
   "predicate": "宗族组织",
   "value_text": "一村一姓，一姓一祠",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "huizhou",
   "source": "anhui_huizhou_src",
   "quote": "一村一姓，一姓一祠",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "一村一姓，一姓一祠",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ANH_003",
   "subject": "person:ANH__p01",
   "predicate": "职能",
   "value_text": "掌祭祀、判族务、行家法",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "huizhou",
   "source": "anhui_huizhou_src",
   "quote": "族长掌祭祀、判族务、行家法",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "族长掌祭祀、判族务、行家法",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ANH_004",
   "subject": "place:huizhou",
   "predicate": "维系要素",
   "value_text": "族谱、祠堂、义田三事维系",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "huizhou",
   "source": "anhui_huizhou_src",
   "quote": "族谱、祠堂、义田三事维系",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "族谱、祠堂、义田三事维系",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ANH_005",
   "subject": "place:huizhou",
   "predicate": "佃仆制",
   "value_text": "世仆供役，不得与齐民齿",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "huizhou",
   "source": "anhui_huizhou_src",
   "quote": "世仆供役，不得与齐民齿",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "世仆供役，不得与齐民齿",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ANH_006",
   "subject": "place:huizhou",
   "predicate": "宗族稳定",
   "value_text": "千年之冢不动一抔",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "huizhou",
   "source": "anhui_huizhou_src",
   "quote": "千年之冢不动一抔",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "千年之冢不动一抔",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ANH_007",
   "subject": "place:huizhou",
   "predicate": "宗族凝聚",
   "value_text": "千丁之族未尝散处",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "huizhou",
   "source": "anhui_huizhou_src",
   "quote": "千丁之族未尝散处",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "千丁之族未尝散处",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ANH_008",
   "subject": "place:huizhou",
   "predicate": "文化背景",
   "value_text": "程朱阙里之俗",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "huizhou",
   "source": "anhui_huizhou_src",
   "quote": "程朱阙里之俗也",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "程朱阙里之俗也",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ANH_009",
   "subject": "place:huizhou",
   "predicate": "社会结构",
   "value_text": "宗法网络绵密",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "huizhou",
   "source": "anhui_huizhou_src",
   "quote": "宗法网络绵密",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宗法网络绵密",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ANH_010",
   "subject": "place:huizhou",
   "predicate": "宗族功能",
   "value_text": "族长权威源于宗法",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "huizhou",
   "source": "anhui_huizhou_src",
   "quote": "族长掌祭祀、判族务、行家法",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学术推断",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "族长掌祭祀、判族务、行家法",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ANH_011",
   "subject": "place:huizhou",
   "predicate": "佃仆制影响",
   "value_text": "佃仆制强化等级",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "huizhou",
   "source": "anhui_huizhou_src",
   "quote": "世仆供役，不得与齐民齿",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学术推断",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "世仆供役，不得与齐民齿",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ANH_012",
   "subject": "place:huizhou",
   "predicate": "祠堂功能",
   "value_text": "祠堂维系宗族认同",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "huizhou",
   "source": "anhui_huizhou_src",
   "quote": "一姓一祠",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学术推断",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "一姓一祠",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ANH_013",
   "subject": "place:huizhou",
   "predicate": "义田作用",
   "value_text": "义田赡族济贫",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "huizhou",
   "source": "anhui_huizhou_src",
   "quote": "义田",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "学术推断",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "义田",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ANH_014",
   "subject": "place:huizhou",
   "predicate": "族谱记载",
   "value_text": "族谱记录世系",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "huizhou",
   "source": "anhui_huizhou_src",
   "quote": "族谱",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "学术推断",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "族谱",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ANH_015",
   "subject": "place:huizhou",
   "predicate": "具体案例",
   "value_text": "缺乏具体宗族案例",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "huizhou",
   "source": "anhui_huizhou_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载具体宗族",
   "dims": [
    4
   ],
   "lead": {
    "where": "徽州方志、族谱",
    "skills": [
     "文献考证",
     "田野调查"
    ],
    "accept": "补充具体宗族案例"
   },
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "anhui_huizhou_llm_EV01",
   "subject": "event:ev_anhui_huizhou_llm_01",
   "predicate": "沿革",
   "value_text": "徽州宗族与祠堂族长社会（明清）。",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "",
   "source": "anhui_huizhou_src",
   "quote": "徽州宗族与祠堂族长社会（明清）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    4,
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "徽州府志·风俗 / 茗洲吴氏家典",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "新安多大族，聚族而居",
   "source_text": "『新安多大族，聚族而居』。徽州『一村一姓，一姓一祠』，族长掌祭祀、判族务、行家法；『族谱、祠堂、义田』三事维系。佃仆制下『世仆供役，不得与齐民齿』。宗法网络绵密，『千年之冢不动一抔，千丁之族未尝散处』，程朱阙里之俗也。",
   "dim_source": "inferred",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "ANH_015"
 ],
 "events": [
  {
   "id": "ev_anhui_huizhou_llm_01",
   "subject": "event:ev_anhui_huizhou_llm_01",
   "year": {
    "era_text": "明清",
    "start": "1368"
   },
   "era": "ming_qing",
   "title": "徽州宗族与祠堂族长社会（明清）",
   "kind": "沿革",
   "text": "徽州宗族与祠堂族长社会（明清）。"
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "huizhou",
   "party": "后世官修",
   "start": 1328,
   "end": 1408,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "huizhou",
   "name": "徽州",
   "lon": 118.43,
   "lat": 29.87,
   "region": "jiangnan"
  }
 ],
 "control_years": [
  1328,
  1408
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
        117.43,
        28.87
       ],
       [
        117.43,
        30.87
       ],
       [
        119.43,
        30.87
       ],
       [
        119.43,
        28.87
       ],
       [
        117.43,
        28.87
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
         119.43,
         28.87
        ],
        [
         119.43,
         30.648
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
         118.989,
         30.332
        ],
        [
         118.954,
         30.36
        ],
        [
         118.88,
         30.315
        ],
        [
         118.878,
         30.283
        ],
        [
         118.905,
         30.216
        ],
        [
         118.93,
         30.203
        ],
        [
         118.853,
         30.167
        ],
        [
         118.852,
         30.15
        ],
        [
         118.895,
         30.149
        ],
        [
         118.874,
         30.115
        ],
        [
         118.879,
         30.065
        ],
        [
         118.903,
         30.029
        ],
        [
         118.895,
         29.938
        ],
        [
         118.839,
         29.935
        ],
        [
         118.841,
         29.891
        ],
        [
         118.741,
         29.815
        ],
        [
         118.745,
         29.739
        ],
        [
         118.701,
         29.706
        ],
        [
         118.647,
         29.643
        ],
        [
         118.62,
         29.654
        ],
        [
         118.574,
         29.638
        ],
        [
         118.532,
         29.589
        ],
        [
         118.5,
         29.576
        ],
        [
         118.496,
         29.519
        ],
        [
         118.382,
         29.505
        ],
        [
         118.348,
         29.474
        ],
        [
         118.33,
         29.495
        ],
        [
         118.306,
         29.479
        ],
        [
         118.316,
         29.423
        ],
        [
         118.248,
         29.431
        ],
        [
         118.193,
         29.395
        ],
        [
         118.205,
         29.344
        ],
        [
         118.167,
         29.314
        ],
        [
         118.178,
         29.298
        ],
        [
         118.139,
         29.284
        ],
        [
         118.078,
         29.291
        ],
        [
         118.074,
         29.217
        ],
        [
         118.042,
         29.21
        ],
        [
         118.028,
         29.168
        ],
        [
         118.045,
         29.149
        ],
        [
         118.038,
         29.102
        ],
        [
         118.076,
         29.075
        ],
        [
         118.067,
         29.054
        ],
        [
         118.098,
         28.999
        ],
        [
         118.115,
         29.01
        ],
        [
         118.115,
         29.01
        ],
        [
         118.134,
         28.984
        ],
        [
         118.165,
         28.987
        ],
        [
         118.228,
         28.942
        ],
        [
         118.196,
         28.904
        ],
        [
         118.27,
         28.919
        ],
        [
         118.286,
         28.87
        ],
        [
         119.43,
         28.87
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
         117.43,
         30.87
        ],
        [
         117.43,
         29.778
        ],
        [
         117.455,
         29.749
        ],
        [
         117.454,
         29.688
        ],
        [
         117.49,
         29.66
        ],
        [
         117.53,
         29.654
        ],
        [
         117.524,
         29.63
        ],
        [
         117.543,
         29.589
        ],
        [
         117.609,
         29.591
        ],
        [
         117.648,
         29.615
        ],
        [
         117.679,
         29.595
        ],
        [
         117.69,
         29.556
        ],
        [
         117.73,
         29.55
        ],
        [
         117.795,
         29.571
        ],
        [
         117.873,
         29.548
        ],
        [
         117.934,
         29.549
        ],
        [
         118.004,
         29.578
        ],
        [
         118.043,
         29.566
        ],
        [
         118.051,
         29.543
        ],
        [
         118.095,
         29.534
        ],
        [
         118.144,
         29.49
        ],
        [
         118.128,
         29.472
        ],
        [
         118.136,
         29.419
        ],
        [
         118.193,
         29.395
        ],
        [
         118.248,
         29.431
        ],
        [
         118.316,
         29.423
        ],
        [
         118.306,
         29.479
        ],
        [
         118.33,
         29.495
        ],
        [
         118.348,
         29.474
        ],
        [
         118.382,
         29.505
        ],
        [
         118.496,
         29.519
        ],
        [
         118.5,
         29.576
        ],
        [
         118.532,
         29.589
        ],
        [
         118.574,
         29.638
        ],
        [
         118.62,
         29.654
        ],
        [
         118.647,
         29.643
        ],
        [
         118.701,
         29.706
        ],
        [
         118.745,
         29.739
        ],
        [
         118.741,
         29.815
        ],
        [
         118.841,
         29.891
        ],
        [
         118.839,
         29.935
        ],
        [
         118.895,
         29.938
        ],
        [
         118.903,
         30.029
        ],
        [
         118.879,
         30.065
        ],
        [
         118.874,
         30.115
        ],
        [
         118.895,
         30.149
        ],
        [
         118.852,
         30.15
        ],
        [
         118.853,
         30.167
        ],
        [
         118.93,
         30.203
        ],
        [
         118.905,
         30.216
        ],
        [
         118.878,
         30.283
        ],
        [
         118.88,
         30.315
        ],
        [
         118.954,
         30.36
        ],
        [
         118.989,
         30.332
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
         119.43,
         30.648
        ],
        [
         119.43,
         30.87
        ],
        [
         117.43,
         30.87
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
         118.193,
         29.395
        ],
        [
         118.136,
         29.419
        ],
        [
         118.128,
         29.472
        ],
        [
         118.144,
         29.49
        ],
        [
         118.095,
         29.534
        ],
        [
         118.051,
         29.543
        ],
        [
         118.043,
         29.566
        ],
        [
         118.004,
         29.578
        ],
        [
         117.934,
         29.549
        ],
        [
         117.873,
         29.548
        ],
        [
         117.795,
         29.571
        ],
        [
         117.73,
         29.55
        ],
        [
         117.69,
         29.556
        ],
        [
         117.679,
         29.595
        ],
        [
         117.648,
         29.615
        ],
        [
         117.609,
         29.591
        ],
        [
         117.543,
         29.589
        ],
        [
         117.524,
         29.63
        ],
        [
         117.53,
         29.654
        ],
        [
         117.49,
         29.66
        ],
        [
         117.454,
         29.688
        ],
        [
         117.455,
         29.749
        ],
        [
         117.43,
         29.778
        ],
        [
         117.43,
         28.87
        ],
        [
         118.286,
         28.87
        ],
        [
         118.27,
         28.919
        ],
        [
         118.196,
         28.904
        ],
        [
         118.228,
         28.942
        ],
        [
         118.165,
         28.987
        ],
        [
         118.134,
         28.984
        ],
        [
         118.115,
         29.01
        ],
        [
         118.115,
         29.01
        ],
        [
         118.098,
         28.999
        ],
        [
         118.067,
         29.054
        ],
        [
         118.076,
         29.075
        ],
        [
         118.038,
         29.102
        ],
        [
         118.045,
         29.149
        ],
        [
         118.028,
         29.168
        ],
        [
         118.042,
         29.21
        ],
        [
         118.074,
         29.217
        ],
        [
         118.078,
         29.291
        ],
        [
         118.139,
         29.284
        ],
        [
         118.178,
         29.298
        ],
        [
         118.167,
         29.314
        ],
        [
         118.205,
         29.344
        ],
        [
         118.193,
         29.395
        ]
       ]
      ]
     ]
    },
    "n": "江西省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        117.43,
        30.725
       ],
       [
        117.605,
        30.776
       ],
       [
        117.707,
        30.87
       ]
      ]
     ]
    },
    "n": "Yangtze"
   }
  ],
  "lakes": [],
  "_bbox": [
   117.43,
   28.87,
   119.43,
   30.87
  ]
 }
};
