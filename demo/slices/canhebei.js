// 本文件由 tools/build.py 自动生成（切片 canhebei），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["canhebei"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["canhebei"] = {
 "meta": {
  "kind": "battle",
  "region": "two_jin",
  "title": "参合陂之战",
  "dossier_label": "参合陂之战",
  "subtitle": "北魏登国十年（395）· 北魏 vs 后燕",
  "primary_place": "canhebei",
  "dossier_event": "event:ch_yan",
  "terrain_grid": "china_coarse",
  "lead": "魏王珪设伏参合陂，大破燕太子慕容宝，坑降卒。",
  "parties_note": "魏方叙设伏，燕方讳败。",
  "subject_names": {
   "person:tuobagui": "拓跋珪",
   "person:murongbao": "慕容宝"
  },
  "page": "canhebei.html",
  "key": "canhebei",
  "scene_id": "canhebei",
  "vocab_pack": "inline:canhebei"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "参合陂之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "魏方叙设伏，燕方讳败。"
  }
 ],
 "places": [
  {
   "id": "canhebei",
   "name": "参合陂",
   "lon": 112.48,
   "lat": 40.53,
   "note": "今内蒙古凉城东北",
   "elev": 1489
  },
  {
   "id": "shengle",
   "name": "盛乐",
   "lon": 111.83,
   "lat": 40.38,
   "note": "北魏都",
   "elev": 1240
  },
  {
   "id": "zhongshan",
   "name": "中山",
   "lon": 115.01,
   "lat": 38.51,
   "note": "后燕都",
   "elev": 51
  }
 ],
 "persons": [
  {
   "id": "tuobagui",
   "name": "拓跋珪",
   "side": "北魏",
   "influence": 0
  },
  {
   "id": "murongbao",
   "name": "慕容宝",
   "side": "后燕",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_ch_yan",
   "subject": "event:ch_yan",
   "predicate": "战事",
   "value_text": "慕容宝率燕军攻魏。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 395,
    "end": 395,
    "era_text": "登国十年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_ch_wei",
   "subject": "event:ch_wei",
   "predicate": "战事",
   "value_text": "魏王珪逐燕军疲，设伏。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 395,
    "end": 395,
    "era_text": "登国十年"
   },
   "place": "canhebei",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_ch_jz",
   "subject": "event:ch_jz",
   "predicate": "战事",
   "value_text": "魏军袭燕营，坑降卒四五万。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 395,
    "end": 395,
    "era_text": "登国十年"
   },
   "place": "canhebei",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_ch_yan",
   "subject": "event:ch_yan",
   "year": 395,
   "era": "登国十年",
   "title": "燕伐魏",
   "kind": "战事",
   "text": "慕容宝率燕军攻魏。"
  },
  {
   "id": "ev_ch_wei",
   "subject": "event:ch_wei",
   "year": 395,
   "era": "登国十年",
   "title": "魏诱敌",
   "kind": "战事",
   "text": "魏王珪逐燕军疲，设伏。",
   "place": "canhebei"
  },
  {
   "id": "ev_ch_jz",
   "subject": "event:ch_jz",
   "year": 395,
   "era": "登国十年",
   "title": "参合陂破燕",
   "kind": "战事",
   "text": "魏军袭燕营，坑降卒四五万。",
   "place": "canhebei"
  }
 ],
 "engagements": [
  {
   "id": "eng_ch_main",
   "name": "参合陂伏击",
   "at": "395-11",
   "era": "登国十年十一月",
   "place": "canhebei",
   "winner": "a",
   "outcome": "魏王珪佯退诱燕军深入，夜袭参合陂，燕营惊溃，降卒尽坑。",
   "subject": "event:ch_jz",
   "sides": [
    {
     "side": "a",
     "commander": "拓跋珪",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 180,
     "posture": "设伏",
     "commit_basis": "魏军以退为进，乘夜袭营。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "慕容宝",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 200,
     "posture": "轻进",
     "commit_basis": "燕军久征士卒思归，遇袭自乱。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_ch_wei",
   "name": "魏军诱敌",
   "side": "a",
   "nodes": [
    {
     "place": "shengle",
     "at": "395-09",
     "label": "魏佯退"
    },
    {
     "place": "canhebei",
     "at": "395-11",
     "label": "设伏"
    }
   ],
   "outcome": {
    "at": "395-11",
    "type": "victory",
    "text": "参合陂破燕"
   }
  },
  {
   "id": "rt_ch_yan",
   "name": "燕军攻魏",
   "side": "b",
   "nodes": [
    {
     "place": "zhongshan",
     "at": "395-08",
     "label": "慕容宝出"
    },
    {
     "place": "canhebei",
     "at": "395-10",
     "label": "深入"
    },
    {
     "place": "canhebei",
     "at": "395-11",
     "label": "中伏"
    }
   ],
   "outcome": {
    "at": "395-10",
    "type": "defeat",
    "text": "燕军深入中伏"
   }
  }
 ],
 "timeline": [
  {
   "at": "395-08",
   "era": "登国十年",
   "label": "燕伐魏",
   "key": false
  },
  {
   "at": "395-11",
   "era": "十一月",
   "label": "魏诱敌",
   "key": false
  },
  {
   "at": "395-11",
   "era": "十一月",
   "label": "参合陂破燕",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "395-11",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "395-11",
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
   "北魏军",
   "后燕军",
   "综合史料"
  ],
  "party_bucket": {
   "北魏军": "北魏军",
   "后燕军": "后燕军",
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
     "label": "北魏军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "后燕军胜",
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
     "label": "北魏军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "后燕军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
