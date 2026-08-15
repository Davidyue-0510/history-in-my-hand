// 本文件由 tools/build.py 自动生成（切片 chensheng），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["chensheng"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["chensheng"] = {
 "meta": {
  "kind": "uprising",
  "region": "uprising",
  "title": "陈胜吴广起义",
  "dossier_label": "陈胜吴广起义",
  "subtitle": "前209 · 秦末",
  "primary_place": "dazexiang",
  "dossier_event": "event:cs_209a",
  "terrain_grid": "china_coarse",
  "lead": "秦二世暴政、徭戍苛酷。前209 陈胜吴广戍渔阳，遇雨失期当斩，乃斩木为兵、揭竿而起，号「张楚」，天下响应，六国复炽，秦遂土崩。",
  "parties_note": "起义据《史记·陈涉世家》综合，细节（鱼腹丹书、篝火狐鸣）含传说色彩。",
  "subject_names": {
   "person:chensheng2": "陈胜",
   "person:wuguang": "吴广"
  },
  "page": "county.html?scene=chensheng",
  "key": "chensheng",
  "scene_id": "chensheng",
  "vocab_pack": "inline:chensheng"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "陈胜吴广起义·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "起义据《史记·陈涉世家》综合，细节（鱼腹丹书、篝火狐鸣）含传说色彩。"
  }
 ],
 "places": [
  {
   "id": "dazexiang",
   "name": "大泽乡",
   "lon": 117.0,
   "lat": 33.63,
   "note": "陈胜吴广起义，今安徽宿州",
   "elev": 20
  },
  {
   "id": "chenqiao",
   "name": "陈桥驿",
   "lon": 114.2,
   "lat": 34.85,
   "note": "陈桥兵变地，开封东北",
   "elev": 74
  },
  {
   "id": "xianyang",
   "name": "咸阳",
   "lon": 108.7,
   "lat": 34.33,
   "note": "秦都",
   "elev": 434
  }
 ],
 "persons": [
  {
   "id": "chensheng2",
   "name": "陈胜",
   "side": "张楚",
   "influence": 0
  },
  {
   "id": "wuguang",
   "name": "吴广",
   "side": "张楚",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_cs_209a",
   "subject": "event:cs_209a",
   "predicate": "战事",
   "value_text": "失期当斩，陈胜吴广斩尉而起，号张楚，戍卒景从。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -209,
    "end": -209,
    "era_text": "二世元·七月"
   },
   "place": "dazexiang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_cs_209b",
   "subject": "event:cs_209b",
   "predicate": "战事",
   "value_text": "诸郡县苦秦，杀长吏应之，六国之后并起。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -209,
    "end": -209,
    "era_text": "同年"
   },
   "place": "dazexiang",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_cs_209a",
   "subject": "event:cs_209a",
   "year": -209,
   "era": "二世元·七月",
   "title": "大泽乡起事",
   "kind": "战事",
   "text": "失期当斩，陈胜吴广斩尉而起，号张楚，戍卒景从。",
   "place": "dazexiang"
  },
  {
   "id": "ev_cs_209b",
   "subject": "event:cs_209b",
   "year": -209,
   "era": "同年",
   "title": "天下响应",
   "kind": "战事",
   "text": "诸郡县苦秦，杀长吏应之，六国之后并起。",
   "place": "dazexiang"
  }
 ],
 "routes": [
  {
   "id": "rt_cs",
   "name": "张楚扩张",
   "side": "a",
   "nodes": [
    {
     "place": "dazexiang",
     "at": "-209",
     "label": "大泽乡"
    },
    {
     "place": "xianyang",
     "at": "-209",
     "label": "西向击秦"
    }
   ],
   "outcome": {
    "at": "-209",
    "type": "victory",
    "text": "首义亡秦"
   }
  }
 ],
 "timeline": [
  {
   "at": "-209",
   "era": "二世元",
   "label": "大泽乡起义",
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
   "起义军",
   "秦军",
   "综合史料"
  ],
  "party_bucket": {
   "起义军": "起义军",
   "秦军": "秦军",
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
     "label": "起义军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "秦军胜",
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
     "label": "起义军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "秦军行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
