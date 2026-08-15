// 本文件由 tools/build.py 自动生成（切片 yaoshan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["yaoshan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["yaoshan"] = {
 "meta": {
  "kind": "battle",
  "region": "song",
  "title": "崖山海战",
  "dossier_label": "崖山海战",
  "subtitle": "祥兴二年（1279）· 宋 vs 元",
  "primary_place": "yaoshan",
  "dossier_event": "event:ys_song",
  "terrain_grid": "china_coarse",
  "lead": "张世杰千舟连环，崖山为元所破，陆秀夫负幼帝投海。",
  "parties_note": "宋方叙崖山殉国，元方叙灭宋。",
  "subject_names": {
   "person:zhangshijie": "张世杰",
   "person:luxiufu": "陆秀夫",
   "person:zhanghongfan": "张弘范"
  },
  "page": "yaoshan.html",
  "key": "yaoshan",
  "scene_id": "yaoshan",
  "vocab_pack": "inline:yaoshan"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "崖山海战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "宋方叙崖山殉国，元方叙灭宋。"
  }
 ],
 "places": [
  {
   "id": "yaoshan",
   "name": "崖山",
   "lon": 113.03,
   "lat": 22.18,
   "note": "今广东新会南",
   "elev": 66
  },
  {
   "id": "linan",
   "name": "临安",
   "lon": 120.15,
   "lat": 30.27,
   "note": "宋故都",
   "elev": 98
  },
  {
   "id": "dadu",
   "name": "大都",
   "lon": 116.4,
   "lat": 39.9,
   "note": "元都",
   "elev": 44
  },
  {
   "id": "yamen",
   "name": "崖门",
   "lon": 113.05,
   "lat": 22.2,
   "note": "海战处",
   "elev": 52
  }
 ],
 "persons": [
  {
   "id": "zhangshijie",
   "name": "张世杰",
   "side": "宋",
   "influence": 0
  },
  {
   "id": "luxiufu",
   "name": "陆秀夫",
   "side": "宋",
   "influence": 0
  },
  {
   "id": "zhanghongfan",
   "name": "张弘范",
   "side": "元",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_ys_song",
   "subject": "event:ys_song",
   "predicate": "战事",
   "value_text": "张世杰奉幼帝退守崖山。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1279,
    "end": 1279,
    "era_text": "祥兴二年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_ys_yuan",
   "subject": "event:ys_yuan",
   "predicate": "战事",
   "value_text": "张弘范率元舰围崖山。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1279,
    "end": 1279,
    "era_text": "祥兴二年"
   },
   "place": "yaoshan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_ys_jz",
   "subject": "event:ys_jz",
   "predicate": "战事",
   "value_text": "宋舟师溃，陆秀夫负帝投海。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1279,
    "end": 1279,
    "era_text": "祥兴二年"
   },
   "place": "yaoshan",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_ys_song",
   "subject": "event:ys_song",
   "year": 1279,
   "era": "祥兴二年",
   "title": "宋舟师退崖山",
   "kind": "战事",
   "text": "张世杰奉幼帝退守崖山。"
  },
  {
   "id": "ev_ys_yuan",
   "subject": "event:ys_yuan",
   "year": 1279,
   "era": "祥兴二年",
   "title": "元舰围崖山",
   "kind": "战事",
   "text": "张弘范率元舰围崖山。",
   "place": "yaoshan"
  },
  {
   "id": "ev_ys_jz",
   "subject": "event:ys_jz",
   "year": 1279,
   "era": "祥兴二年",
   "title": "崖山败亡",
   "kind": "战事",
   "text": "宋舟师溃，陆秀夫负帝投海。",
   "place": "yaoshan"
  }
 ],
 "engagements": [
  {
   "id": "eng_ys_main",
   "name": "崖山海战",
   "at": "1279-03",
   "era": "祥兴二年三月",
   "place": "yaoshan",
   "winner": "b",
   "outcome": "元军断宋水寨汲路，火攻连环舟，宋师溃，陆秀夫负幼帝投海，宋亡。",
   "subject": "event:ys_jz",
   "sides": [
    {
     "side": "a",
     "commander": "张世杰",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 50,
     "posture": "连环",
     "commit_basis": "宋舟千艘连环，机动为元所制。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "张弘范",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 60,
     "posture": "火攻",
     "commit_basis": "元军断汲路、纵火破其连环。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_ys_song",
   "name": "宋舟退守",
   "side": "a",
   "nodes": [
    {
     "place": "linan",
     "at": "1276-01",
     "label": "宋退海上"
    },
    {
     "place": "yaoshan",
     "at": "1279-01",
     "label": "崖山"
    },
    {
     "place": "yamen",
     "at": "1279-03",
     "label": "决战"
    }
   ],
   "outcome": {
    "at": "1279-03",
    "type": "defeat",
    "text": "崖山败，宋亡"
   }
  },
  {
   "id": "rt_ys_yuan",
   "name": "元舰南追",
   "side": "b",
   "nodes": [
    {
     "place": "dadu",
     "at": "1278-01",
     "label": "元南征"
    },
    {
     "place": "yamen",
     "at": "1279-02",
     "label": "围崖山"
    }
   ],
   "outcome": {
    "at": "1279-03",
    "type": "victory",
    "text": "元破崖山灭宋"
   }
  }
 ],
 "timeline": [
  {
   "at": "1276-01",
   "era": "德祐二年",
   "label": "宋都陷",
   "key": false
  },
  {
   "at": "1279-01",
   "era": "祥兴二年",
   "label": "崖山",
   "key": false
  },
  {
   "at": "1279-03",
   "era": "三月",
   "label": "崖山败亡",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1279-03",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1279-03",
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
   "宋军",
   "元军",
   "综合史料"
  ],
  "party_bucket": {
   "宋军": "宋军",
   "元军": "元军",
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
     "label": "宋军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "元军胜",
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
     "label": "宋军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "元军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
