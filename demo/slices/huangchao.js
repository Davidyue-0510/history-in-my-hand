// 本文件由 tools/build.py 自动生成（切片 huangchao），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["huangchao"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["huangchao"] = {
 "meta": {
  "kind": "uprising",
  "region": "uprising",
  "title": "黄巢起义",
  "dossier_label": "黄巢起义",
  "subtitle": "875—884 · 唐末",
  "primary_place": "changan",
  "dossier_event": "event:hc_875",
  "terrain_grid": "china_coarse",
  "lead": "唐末苛政、灾荒并作，875 王仙芝、黄巢起于濮阳。黄巢转战十余省、渡江跨浙闽入广州，880 破潼关入长安称大齐，唐僖宗奔蜀，帝国崩解由此加速。",
  "parties_note": "起义据《旧唐书·黄巢传》综合，流动作战之长与屠城之酷并存于记载。",
  "subject_names": {
   "person:huangchao2": "黄巢",
   "person:tangxizong": "唐僖宗"
  },
  "page": "county.html?scene=huangchao",
  "key": "huangchao",
  "scene_id": "huangchao",
  "vocab_pack": "inline:huangchao"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "黄巢起义·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "起义据《旧唐书·黄巢传》综合，流动作战之长与屠城之酷并存于记载。"
  }
 ],
 "places": [
  {
   "id": "changan",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "汉唐都城",
   "elev": 391
  },
  {
   "id": "guangzhou",
   "name": "广州",
   "lon": 113.26,
   "lat": 23.13,
   "note": "黄巢曾克广州",
   "elev": 44
  },
  {
   "id": "kaofeng",
   "name": "开封",
   "lon": 114.3,
   "lat": 34.79,
   "note": "北宋汴京",
   "elev": 76
  }
 ],
 "persons": [
  {
   "id": "huangchao2",
   "name": "黄巢",
   "side": "大齐",
   "influence": 0
  },
  {
   "id": "tangxizong",
   "name": "唐僖宗",
   "side": "唐",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_hc_875",
   "subject": "event:hc_875",
   "predicate": "战事",
   "value_text": "黄巢应王仙芝起于山东，号冲天大将军，转战中原。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 875,
    "end": 875,
    "era_text": "乾符二"
   },
   "place": "kaofeng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hc_880",
   "subject": "event:hc_880",
   "predicate": "战事",
   "value_text": "黄巢破潼关入长安，僖宗奔蜀，自称大齐皇帝。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 880,
    "end": 880,
    "era_text": "广明元"
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
   "id": "ev_hc_875",
   "subject": "event:hc_875",
   "year": 875,
   "era": "乾符二",
   "title": "濮州起兵",
   "kind": "战事",
   "text": "黄巢应王仙芝起于山东，号冲天大将军，转战中原。",
   "place": "kaofeng"
  },
  {
   "id": "ev_hc_880",
   "subject": "event:hc_880",
   "year": 880,
   "era": "广明元",
   "title": "入长安称帝",
   "kind": "战事",
   "text": "黄巢破潼关入长安，僖宗奔蜀，自称大齐皇帝。",
   "place": "changan"
  }
 ],
 "routes": [
  {
   "id": "rt_hc",
   "name": "黄巢转战",
   "side": "a",
   "nodes": [
    {
     "place": "kaofeng",
     "at": "875",
     "label": "中原起"
    },
    {
     "place": "guangzhou",
     "at": "879",
     "label": "克广州"
    },
    {
     "place": "changan",
     "at": "880",
     "label": "入长安"
    }
   ],
   "outcome": {
    "at": "880",
    "type": "victory",
    "text": "破京称帝"
   }
  }
 ],
 "timeline": [
  {
   "at": "875",
   "era": "乾符二",
   "label": "起兵",
   "key": true
  },
  {
   "at": "880",
   "era": "广明元",
   "label": "入长安",
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
   "黄巢军",
   "唐军",
   "综合史料"
  ],
  "party_bucket": {
   "黄巢军": "黄巢军",
   "唐军": "唐军",
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
     "label": "黄巢军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "唐军胜",
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
     "label": "黄巢军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "唐军行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
