// 本文件由 tools/build.py 自动生成（切片 suiyang），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["suiyang"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["suiyang"] = {
 "meta": {
  "kind": "battle",
  "region": "sui_tang",
  "title": "睢阳之战",
  "dossier_label": "睢阳之战",
  "subtitle": "至德二载（757）· 唐 vs 安史",
  "primary_place": "suiyang",
  "dossier_event": "event:sy_zhang",
  "terrain_grid": "china_coarse",
  "lead": "张巡、许远死守睢阳十月，城陷殉国，屏障江淮。",
  "parties_note": "唐方叙张巡死节，叛方讳其顽强。",
  "subject_names": {
   "person:zhangxun": "张巡",
   "person:xuyuan": "许远",
   "person:yinziqi": "尹子奇"
  },
  "page": "suiyang.html",
  "key": "suiyang",
  "scene_id": "suiyang",
  "vocab_pack": "inline:suiyang"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "睢阳之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "唐方叙张巡死节，叛方讳其顽强。"
  }
 ],
 "places": [
  {
   "id": "suiyang",
   "name": "睢阳",
   "lon": 115.65,
   "lat": 34.41,
   "note": "今河南商丘",
   "elev": 52
  },
  {
   "id": "yongqiu",
   "name": "雍丘",
   "lon": 114.78,
   "lat": 34.56,
   "note": "张巡起",
   "elev": 61
  },
  {
   "id": "tang_du",
   "name": "唐都",
   "lon": 108.94,
   "lat": 34.34,
   "note": "长安（时已陷）",
   "elev": 391
  },
  {
   "id": "jianghuai",
   "name": "江淮",
   "lon": 119.0,
   "lat": 32.5,
   "note": "所屏障",
   "elev": 22
  }
 ],
 "persons": [
  {
   "id": "zhangxun",
   "name": "张巡",
   "side": "唐",
   "influence": 0
  },
  {
   "id": "xuyuan",
   "name": "许远",
   "side": "唐",
   "influence": 0
  },
  {
   "id": "yinziqi",
   "name": "尹子奇",
   "side": "安史",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_sy_zhang",
   "subject": "event:sy_zhang",
   "predicate": "战事",
   "value_text": "张巡、许远合守睢阳拒叛。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 757,
    "end": 757,
    "era_text": "至德二载"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_sy_we",
   "subject": "event:sy_we",
   "predicate": "战事",
   "value_text": "尹子奇率叛军围睢阳。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 757,
    "end": 757,
    "era_text": "至德二载"
   },
   "place": "suiyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_sy_jz",
   "subject": "event:sy_jz",
   "predicate": "战事",
   "value_text": "粮尽城陷，巡、远死节。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 757,
    "end": 757,
    "era_text": "至德二载"
   },
   "place": "suiyang",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_sy_zhang",
   "subject": "event:sy_zhang",
   "year": 757,
   "era": "至德二载",
   "title": "张巡守睢阳",
   "kind": "战事",
   "text": "张巡、许远合守睢阳拒叛。"
  },
  {
   "id": "ev_sy_we",
   "subject": "event:sy_we",
   "year": 757,
   "era": "至德二载",
   "title": "叛军围城",
   "kind": "战事",
   "text": "尹子奇率叛军围睢阳。",
   "place": "suiyang"
  },
  {
   "id": "ev_sy_jz",
   "subject": "event:sy_jz",
   "year": 757,
   "era": "至德二载",
   "title": "城陷殉国",
   "kind": "战事",
   "text": "粮尽城陷，巡、远死节。",
   "place": "suiyang"
  }
 ],
 "engagements": [
  {
   "id": "eng_sy_main",
   "name": "睢阳死守",
   "at": "757-10",
   "era": "至德二载十月",
   "place": "suiyang",
   "winner": "b",
   "outcome": "张巡以少拒众守十月，叛军攻之不克，城陷粮尽，唐守将死节。",
   "subject": "event:sy_jz",
   "sides": [
    {
     "side": "a",
     "commander": "张巡/许远",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 60,
     "posture": "死守",
     "commit_basis": "孤城疲兵，以忠拒众。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "尹子奇",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 80,
     "posture": "顿兵",
     "commit_basis": "叛军数围不克，顿于坚城。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_sy_tang",
   "name": "唐军守城",
   "side": "a",
   "nodes": [
    {
     "place": "yongqiu",
     "at": "757-01",
     "label": "张巡起兵"
    },
    {
     "place": "suiyang",
     "at": "757-03",
     "label": "入睢阳守"
    }
   ],
   "outcome": {
    "at": "757-10",
    "type": "defeat",
    "text": "城陷，然屏障江淮"
   }
  },
  {
   "id": "rt_sy_pan",
   "name": "叛军南下",
   "side": "b",
   "nodes": [
    {
     "place": "tang_du",
     "at": "757-01",
     "label": "叛军西进"
    },
    {
     "place": "suiyang",
     "at": "757-02",
     "label": "围城"
    }
   ],
   "outcome": {
    "at": "757-09",
    "type": "victory",
    "text": "叛军围睢阳，城终陷"
   }
  }
 ],
 "timeline": [
  {
   "at": "757-01",
   "era": "至德二载",
   "label": "张巡起兵",
   "key": false
  },
  {
   "at": "757-03",
   "era": "三月",
   "label": "入睢阳",
   "key": false
  },
  {
   "at": "757-10",
   "era": "十月",
   "label": "城陷殉国",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "757-10",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "757-10",
    "lost": 0,
    "basis": "败方损失数字以现代考订折中，置信度待核。"
   }
  ],
  "confidence": {
   "a": 0.4,
   "b": 0.4
  },
  "gap_note": "本切片为综合史料整理，胜败方损失数字多为估算，界面应视为待核实。"
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
   "唐守军",
   "安史军",
   "综合史料"
  ],
  "party_bucket": {
   "唐守军": "唐守军",
   "安史军": "安史军",
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
     "label": "唐守军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "安史军胜",
     "color": "#2b6cb0"
    },
    {
     "key": "none",
     "label": "未接战/不分胜",
     "color": "#7f8c8d"
    }
   ],
   "route": [
    {
     "key": "a",
     "label": "唐守军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "安史军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
