// 本文件由 tools/build.py 自动生成（切片 jingnan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jingnan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jingnan"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "title": "靖难之役",
  "dossier_label": "靖难之役",
  "subtitle": "1399—1402 · 燕王 vs 建文",
  "primary_place": "nanjing",
  "dossier_event": "event:jn_1399",
  "terrain_grid": "china_coarse",
  "lead": "建文削藩，燕王朱棣以「清君侧」起兵。三年靖难，1402 破南京，建文不知所终，棣即位为成祖，后迁都北京。",
  "parties_note": "官方《太宗实录》多方掩饰夺位；建文一朝事迹多湮，此处综合诸史。",
  "subject_names": {
   "person:zhudi": "朱棣",
   "person:jianwen": "建文帝"
  },
  "page": "county.html?scene=jingnan",
  "key": "jingnan",
  "scene_id": "jingnan",
  "vocab_pack": "inline:jingnan"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "靖难之役·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "官方《太宗实录》多方掩饰夺位；建文一朝事迹多湮，此处综合诸史。"
  }
 ],
 "places": [
  {
   "id": "beiping",
   "name": "北平",
   "lon": 116.4,
   "lat": 39.9,
   "note": "燕王封地（今北京）",
   "elev": 44
  },
  {
   "id": "nanjing",
   "name": "南京",
   "lon": 118.8,
   "lat": 32.06,
   "note": "明初都，建文帝所在",
   "elev": 17
  }
 ],
 "persons": [
  {
   "id": "zhudi",
   "name": "朱棣",
   "side": "燕/成祖",
   "influence": 0
  },
  {
   "id": "jianwen",
   "name": "建文帝",
   "side": "明",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_jn_1399",
   "subject": "event:jn_1399",
   "predicate": "战事",
   "value_text": "朱棣以「清君侧、靖国难」为名起兵北平，史称靖难之役。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1399,
    "end": 1399,
    "era_text": "建文元年"
   },
   "place": "beiping",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_jn_1402",
   "subject": "event:jn_1402",
   "predicate": "战事",
   "value_text": "燕军渡江破南京，宫中火起，建文帝失踪；棣即位，是为成祖。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1402,
    "end": 1402,
    "era_text": "四年六月"
   },
   "place": "nanjing",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_jn_1399",
   "subject": "event:jn_1399",
   "year": 1399,
   "era": "建文元年",
   "title": "燕王起兵",
   "kind": "战事",
   "text": "朱棣以「清君侧、靖国难」为名起兵北平，史称靖难之役。",
   "place": "beiping"
  },
  {
   "id": "ev_jn_1402",
   "subject": "event:jn_1402",
   "year": 1402,
   "era": "四年六月",
   "title": "破南京·即位",
   "kind": "战事",
   "text": "燕军渡江破南京，宫中火起，建文帝失踪；棣即位，是为成祖。",
   "place": "nanjing"
  }
 ],
 "routes": [
  {
   "id": "rt_jn_march",
   "name": "燕军南下",
   "side": "a",
   "nodes": [
    {
     "place": "beiping",
     "at": "1399",
     "label": "北平起"
    },
    {
     "place": "nanjing",
     "at": "1402",
     "label": "破南京"
    }
   ],
   "outcome": {
    "at": "1402",
    "type": "victory",
    "text": "靖难成功"
   }
  }
 ],
 "engagements": [
  {
   "id": "eng_jn_main",
   "name": "灵璧—渡江",
   "at": "1402",
   "era": "建文四年",
   "place": "nanjing",
   "winner": "a",
   "outcome": "燕军连破官军于灵璧，渡江逼南京，谷王橞等开门迎入，宫火起。",
   "subject": "event:jn_1402",
   "sides": [
    {
     "side": "a",
     "commander": "朱棣",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 240,
     "posture": "远征",
     "commit_basis": "燕军久战骁锐，直趋京师。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "建文军",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 260,
     "posture": "分守",
     "commit_basis": "官军调度乖方，诸将离心。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "timeline": [
  {
   "at": "1399",
   "era": "建文元",
   "label": "燕王起兵",
   "key": true
  },
  {
   "at": "1402",
   "era": "四",
   "label": "破南京·即位",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1402",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1402",
    "lost": 0,
    "basis": "败方损失数字以现代考订折中，置信度待核。"
   }
  ],
  "confidence": {
   "a": 0.4,
   "b": 0.4
  },
  "gap_note": "本切片为综合史料整理，数字多为估算，界面应视为待核实。"
 },
 "fatigue_weight": {
  "fresh": 1.0,
  "marching": 0.85,
  "exhausted": 0.7
 },
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
   "燕军",
   "建文军",
   "综合史料"
  ],
  "party_bucket": {
   "燕军": "燕军",
   "建文军": "建文军",
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
     "label": "燕军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "建文军胜",
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
     "label": "燕军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "建文军行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
