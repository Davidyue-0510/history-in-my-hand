// 本文件由 tools/build.py 自动生成（切片 lvlin），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["lvlin"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["lvlin"] = {
 "meta": {
  "kind": "uprising",
  "region": "uprising",
  "title": "绿林赤眉",
  "dossier_label": "绿林赤眉",
  "subtitle": "17 — 27 · 新莽末",
  "primary_place": "lvlin",
  "dossier_event": "event:ll_17",
  "terrain_grid": "china_coarse",
  "lead": "新莽政乱、连年灾荒，17 荆州绿林、山东赤眉并起。绿林拥刘玄号更始，破长安杀王莽；刘秀乘群雄裂，收河北、败赤眉，终建东汉。",
  "parties_note": "绿林赤眉据《后汉书》综合，其众初起为饥民，后渐成割据。",
  "subject_names": {
   "person:wangmang2": "王莽",
   "person:liuxiu2": "刘秀"
  },
  "page": "county.html?scene=lvlin",
  "key": "lvlin",
  "scene_id": "lvlin",
  "vocab_pack": "inline:lvlin"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "绿林赤眉·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "绿林赤眉据《后汉书》综合，其众初起为饥民，后渐成割据。"
  }
 ],
 "places": [
  {
   "id": "lvlin",
   "name": "绿林山",
   "lon": 112.85,
   "lat": 31.2,
   "note": "绿林起义，今湖北京山",
   "elev": 154
  },
  {
   "id": "changan",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "汉唐都城",
   "elev": 391
  },
  {
   "id": "yecheng",
   "name": "邺城",
   "lon": 114.08,
   "lat": 36.07,
   "note": "曹魏都",
   "elev": 334
  }
 ],
 "persons": [
  {
   "id": "wangmang2",
   "name": "王莽",
   "side": "新",
   "influence": 0
  },
  {
   "id": "liuxiu2",
   "name": "刘秀",
   "side": "汉宗室",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_ll_17",
   "subject": "event:ll_17",
   "predicate": "战事",
   "value_text": "荆州饥民聚绿林山，号绿林兵，攻城略地。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 17,
    "end": 17,
    "era_text": "天凤四"
   },
   "place": "lvlin",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_ll_23",
   "subject": "event:ll_23",
   "predicate": "战事",
   "value_text": "绿林拥更始帝，破长安、杀王莽，新亡。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 23,
    "end": 23,
    "era_text": "更始元"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_ll_17",
   "subject": "event:ll_17",
   "year": 17,
   "era": "天凤四",
   "title": "绿林起事",
   "kind": "战事",
   "text": "荆州饥民聚绿林山，号绿林兵，攻城略地。",
   "place": "lvlin"
  },
  {
   "id": "ev_ll_23",
   "subject": "event:ll_23",
   "year": 23,
   "era": "更始元",
   "title": "破长安·莽死",
   "kind": "战事",
   "text": "绿林拥更始帝，破长安、杀王莽，新亡。",
   "place": "changan"
  }
 ],
 "routes": [
  {
   "id": "rt_ll",
   "name": "绿林西进",
   "side": "a",
   "nodes": [
    {
     "place": "lvlin",
     "at": "17",
     "label": "绿林山"
    },
    {
     "place": "changan",
     "at": "23",
     "label": "破长安"
    }
   ],
   "outcome": {
    "at": "23",
    "type": "victory",
    "text": "新莽亡"
   }
  }
 ],
 "timeline": [
  {
   "at": "17",
   "era": "天凤四",
   "label": "绿林起",
   "key": true
  },
  {
   "at": "23",
   "era": "更始元",
   "label": "破长安·莽死",
   "key": true
  }
 ],
 "columns": [],
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
   "绿林军",
   "新莽军",
   "综合史料"
  ],
  "party_bucket": {
   "绿林军": "绿林军",
   "新莽军": "新莽军",
   "综合史料": "综合史料"
  },
  "party_colors": {
   "a": "#c0392b",
   "b": "#2b6cb0",
   "综合史料": "#7f8c8d"
  },
  "legend": {
   "battle": [
    {
     "key": "a",
     "label": "绿林军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "新莽军胜",
     "color": "#2b6cb0"
    },
    {
     "key": "none",
     "label": "未分胜",
     "color": "#7f8c8d"
    }
   ],
   "route": [
    {
     "key": "a",
     "label": "绿林军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "新莽军行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
