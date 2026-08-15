// 本文件由 tools/build.py 自动生成（切片 sui_mie_chen），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["sui_mie_chen"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["sui_mie_chen"] = {
 "meta": {
  "kind": "dynasty",
  "region": "dynasty",
  "title": "隋灭陈",
  "dossier_label": "隋灭陈",
  "subtitle": "589 · 隋文帝统一",
  "primary_place": "nanjing",
  "dossier_event": "event:sm_587",
  "terrain_grid": "china_coarse",
  "lead": "隋文帝蓄力灭陈，587 后频出兵。589 贺若弼自广陵、韩擒虎自采石渡江，陈后主犹赋诗不辍，建康旋破，陈亡，南北复归一统。",
  "parties_note": "灭陈据《隋书》《南史》综合，陈之腐弱与隋之蓄势对照鲜明。",
  "subject_names": {
   "person:suiwen": "隋文帝",
   "person:chenhouzhu": "陈后主"
  },
  "page": "county.html?scene=sui_mie_chen",
  "key": "sui_mie_chen",
  "scene_id": "sui_mie_chen",
  "vocab_pack": "inline:sui_mie_chen"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "隋灭陈·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "灭陈据《隋书》《南史》综合，陈之腐弱与隋之蓄势对照鲜明。"
  }
 ],
 "places": [
  {
   "id": "nanjing",
   "name": "南京",
   "lon": 118.8,
   "lat": 32.06,
   "note": "六朝古都·建康/应天",
   "elev": 17
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
   "id": "suiwen",
   "name": "隋文帝",
   "side": "隋",
   "influence": 0
  },
  {
   "id": "chenhouzhu",
   "name": "陈后主",
   "side": "陈",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_sm_587",
   "subject": "event:sm_587",
   "predicate": "战事",
   "value_text": "隋废西梁、修战备，大造舟楫于蜀，待机南下。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 587,
    "end": 587,
    "era_text": "开皇七"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_sm_589",
   "subject": "event:sm_589",
   "predicate": "战事",
   "value_text": "贺若弼、韩擒虎分道渡江，建康破，陈后主就擒，陈亡。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 589,
    "end": 589,
    "era_text": "开皇九"
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
   "id": "ev_sm_587",
   "subject": "event:sm_587",
   "year": 587,
   "era": "开皇七",
   "title": "作伐陈势",
   "kind": "战事",
   "text": "隋废西梁、修战备，大造舟楫于蜀，待机南下。",
   "place": "changan"
  },
  {
   "id": "ev_sm_589",
   "subject": "event:sm_589",
   "year": 589,
   "era": "开皇九",
   "title": "渡江灭陈",
   "kind": "战事",
   "text": "贺若弼、韩擒虎分道渡江，建康破，陈后主就擒，陈亡。",
   "place": "nanjing"
  }
 ],
 "routes": [
  {
   "id": "rt_sm",
   "name": "隋师南下",
   "side": "a",
   "nodes": [
    {
     "place": "kaofeng",
     "at": "587",
     "label": "造舟蓄势"
    },
    {
     "place": "nanjing",
     "at": "589",
     "label": "渡江克建康"
    }
   ],
   "outcome": {
    "at": "589",
    "type": "victory",
    "text": "一统南北"
   }
  }
 ],
 "engagements": [
  {
   "id": "eng_sm",
   "name": "建康之战",
   "at": "589",
   "era": "开皇九年",
   "place": "nanjing",
   "winner": "a",
   "outcome": "隋军两路渡江、钳击建康，陈军无战心，城破国灭。",
   "subject": "event:sm_589",
   "sides": [
    {
     "side": "a",
     "commander": "贺若弼",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 250,
     "posture": "强渡",
     "commit_basis": "隋军精锐、部署周密。",
     "commit_confidence": 0.6
    },
    {
     "side": "b",
     "commander": "陈后主",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 200,
     "posture": "涣散",
     "commit_basis": "陈政荒怠、将士离心。",
     "commit_confidence": 0.3
    }
   ]
  }
 ],
 "timeline": [
  {
   "at": "587",
   "era": "开皇七",
   "label": "作伐陈势",
   "key": true
  },
  {
   "at": "589",
   "era": "开皇九",
   "label": "灭陈·一统",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "589",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "589",
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
   "隋军",
   "陈军",
   "综合史料"
  ],
  "party_bucket": {
   "隋军": "隋军",
   "陈军": "陈军",
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
     "label": "隋军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "陈军胜",
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
     "label": "隋军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "陈军行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
