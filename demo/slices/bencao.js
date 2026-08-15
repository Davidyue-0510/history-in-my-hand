// 本文件由 tools/build.py 自动生成（切片 bencao），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["bencao"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["bencao"] = {
 "meta": {
  "kind": "tech",
  "region": "tech",
  "title": "本草纲目·授时历",
  "dossier_label": "本草纲目·授时历",
  "subtitle": "1281 · 1578 · 科技医学高峰",
  "primary_place": "dadu_b",
  "dossier_event": "event:bc_1281",
  "terrain_grid": "china_coarse",
  "lead": "元郭守敬据实测制《授时历》，一年 365.2425 日，与今公历同；明李时珍历时廿七载成《本草纲目》，载药千八百种，东传日本、西译欧洲。",
  "parties_note": "二书年代据《元史·历志》《明史·方技传》综合。",
  "subject_names": {
   "person:guoshoujing_b": "郭守敬",
   "person:lishizhen": "李时珍"
  },
  "page": "county.html?scene=bencao",
  "key": "bencao",
  "scene_id": "bencao",
  "vocab_pack": "inline:bencao"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "本草纲目·授时历·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "二书年代据《元史·历志》《明史·方技传》综合。"
  }
 ],
 "places": [
  {
   "id": "dadu_b",
   "name": "大都",
   "lon": 116.4,
   "lat": 39.9,
   "note": "郭守敬制历、设司天台",
   "elev": 44
  },
  {
   "id": "qizhou",
   "name": "蕲州",
   "lon": 115.43,
   "lat": 30.0,
   "note": "李时珍故里（今湖北蕲春）",
   "elev": 142
  }
 ],
 "persons": [
  {
   "id": "guoshoujing_b",
   "name": "郭守敬",
   "side": "元",
   "influence": 0
  },
  {
   "id": "lishizhen",
   "name": "李时珍",
   "side": "明",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_bc_1281",
   "subject": "event:bc_1281",
   "predicate": "事件",
   "value_text": "郭守敬等依实测天体编《授时历》，岁实 365.2425 日，精度领先世界三百年。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1281,
    "end": 1281,
    "era_text": "元至元十八年"
   },
   "place": "dadu_b",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_bc_1578",
   "subject": "event:bc_1578",
   "predicate": "事件",
   "value_text": "李时珍历时廿七载，三易其稿成《本草纲目》，分十六部、载药一八九二种。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1578,
    "end": 1578,
    "era_text": "明万历六年"
   },
   "place": "qizhou",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_bc_1281",
   "subject": "event:bc_1281",
   "year": 1281,
   "era": "元至元十八年",
   "title": "《授时历》颁行",
   "kind": "科技",
   "text": "郭守敬等依实测天体编《授时历》，岁实 365.2425 日，精度领先世界三百年。",
   "place": "dadu_b"
  },
  {
   "id": "ev_bc_1578",
   "subject": "event:bc_1578",
   "year": 1578,
   "era": "明万历六年",
   "title": "《本草纲目》成",
   "kind": "科技",
   "text": "李时珍历时廿七载，三易其稿成《本草纲目》，分十六部、载药一八九二种。",
   "place": "qizhou"
  }
 ],
 "edges": [],
 "control": [],
 "vocab": {
  "layers": [
   "record",
   "scholarship",
   "inference",
   "gap"
  ],
  "quote_status": [
   "verbatim",
   "paraphrase_unverified",
   "generated"
  ],
  "parties": [
   "综合史料"
  ],
  "party_bucket": {
   "综合史料": "综合史料"
  },
  "party_colors": {
   "综合史料": "#7f8c8d"
  },
  "legend": {}
 }
};
