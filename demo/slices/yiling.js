// 本文件由 tools/build.py 自动生成（切片 yiling），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["yiling"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["yiling"] = {
 "meta": {
  "kind": "battle",
  "region": "three_kingdoms",
  "title": "夷陵之战",
  "dossier_label": "夷陵之战",
  "subtitle": "章武二年（222）· 吴 vs 蜀",
  "primary_place": "yiling",
  "dossier_event": "event:yl_liu",
  "terrain_grid": "china_coarse",
  "lead": "陆逊坚守待变，火烧蜀军连营七百里，刘备败走白帝。",
  "parties_note": "吴方叙陆逊持重，蜀方叙复仇之师。",
  "subject_names": {
   "person:luxun": "陆逊",
   "person:liubei": "刘备",
   "person:zhugeliang": "诸葛亮"
  },
  "page": "yiling.html",
  "key": "yiling",
  "scene_id": "yiling",
  "vocab_pack": "inline:yiling"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "夷陵之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "吴方叙陆逊持重，蜀方叙复仇之师。"
  }
 ],
 "places": [
  {
   "id": "yiling",
   "name": "夷陵",
   "lon": 111.29,
   "lat": 30.69,
   "note": "今湖北宜昌",
   "elev": 291
  },
  {
   "id": "zigui",
   "name": "秭归",
   "lon": 110.78,
   "lat": 30.83,
   "note": "蜀军出",
   "elev": 1222
  },
  {
   "id": "xiaoting",
   "name": "猇亭",
   "lon": 111.43,
   "lat": 30.56,
   "note": "吴蜀相持",
   "elev": 190
  },
  {
   "id": "chengdu",
   "name": "成都",
   "lon": 104.07,
   "lat": 30.67,
   "note": "蜀都",
   "elev": 490
  },
  {
   "id": "jiangling",
   "name": "江陵",
   "lon": 112.24,
   "lat": 30.35,
   "note": "吴西路",
   "elev": 28
  }
 ],
 "persons": [
  {
   "id": "luxun",
   "name": "陆逊",
   "side": "吴",
   "influence": 0
  },
  {
   "id": "liubei",
   "name": "刘备",
   "side": "蜀",
   "influence": 0
  },
  {
   "id": "zhugeliang",
   "name": "诸葛亮",
   "side": "蜀",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_yl_liu",
   "subject": "event:yl_liu",
   "predicate": "战事",
   "value_text": "刘备倾国伐吴，出秭归。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 222,
    "end": 222,
    "era_text": "章武二年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_yl_lu",
   "subject": "event:yl_lu",
   "predicate": "战事",
   "value_text": "陆逊拒战，待蜀兵疲。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 222,
    "end": 222,
    "era_text": "章武二年"
   },
   "place": "yiling",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_yl_jz",
   "subject": "event:yl_jz",
   "predicate": "战事",
   "value_text": "吴军火攻蜀营，备走白帝。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 222,
    "end": 222,
    "era_text": "章武二年"
   },
   "place": "xiaoting",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_yl_liu",
   "subject": "event:yl_liu",
   "year": 222,
   "era": "章武二年",
   "title": "刘备东征",
   "kind": "战事",
   "text": "刘备倾国伐吴，出秭归。"
  },
  {
   "id": "ev_yl_lu",
   "subject": "event:yl_lu",
   "year": 222,
   "era": "章武二年",
   "title": "陆逊坚守",
   "kind": "战事",
   "text": "陆逊拒战，待蜀兵疲。",
   "place": "yiling"
  },
  {
   "id": "ev_yl_jz",
   "subject": "event:yl_jz",
   "year": 222,
   "era": "章武二年",
   "title": "火烧连营",
   "kind": "战事",
   "text": "吴军火攻蜀营，备走白帝。",
   "place": "xiaoting"
  }
 ],
 "engagements": [
  {
   "id": "eng_yl_main",
   "name": "猇亭火攻",
   "at": "222-06",
   "era": "章武二年六月",
   "place": "xiaoting",
   "winner": "a",
   "outcome": "陆逊乘蜀军久驻士气懈，火攻连营，蜀军崩，刘备夜遁白帝。",
   "subject": "event:yl_jz",
   "sides": [
    {
     "side": "a",
     "commander": "陆逊",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 140,
     "posture": "火攻",
     "commit_basis": "吴军据险蓄势，一击破其连营。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "刘备",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 160,
     "posture": "结营",
     "commit_basis": "蜀军夹江连营数百里，犯兵家忌。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_yl_wu",
   "name": "吴军西拒",
   "side": "a",
   "nodes": [
    {
     "place": "jiangling",
     "at": "222-01",
     "label": "陆逊进驻"
    },
    {
     "place": "xiaoting",
     "at": "222-02",
     "label": "相持"
    },
    {
     "place": "yiling",
     "at": "222-06",
     "label": "火攻"
    }
   ],
   "outcome": {
    "at": "222-06",
    "type": "victory",
    "text": "火烧连营破蜀"
   }
  },
  {
   "id": "rt_yl_shu",
   "name": "蜀军东进",
   "side": "b",
   "nodes": [
    {
     "place": "chengdu",
     "at": "221-07",
     "label": "刘备伐吴"
    },
    {
     "place": "zigui",
     "at": "222-01",
     "label": "出秭归"
    },
    {
     "place": "xiaoting",
     "at": "222-02",
     "label": "结营"
    }
   ],
   "outcome": {
    "at": "222-05",
    "type": "defeat",
    "text": "蜀军东进遇火攻败北"
   }
  }
 ],
 "timeline": [
  {
   "at": "221-07",
   "era": "章武元年",
   "label": "刘备称帝伐吴",
   "key": false
  },
  {
   "at": "222-02",
   "era": "二年二月",
   "label": "猇亭相持",
   "key": false
  },
  {
   "at": "222-06",
   "era": "六月",
   "label": "火烧连营",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "222-06",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "222-06",
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
   "吴军",
   "蜀军",
   "综合史料"
  ],
  "party_bucket": {
   "吴军": "吴军",
   "蜀军": "蜀军",
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
     "label": "吴军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "蜀军胜",
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
     "label": "吴军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "蜀军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
