// 本文件由 tools/build.py 自动生成（切片 diaoyucheng），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["diaoyucheng"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["diaoyucheng"] = {
 "meta": {
  "kind": "battle",
  "region": "song",
  "title": "钓鱼城之战",
  "dossier_label": "钓鱼城之战",
  "subtitle": "开庆元年（1259）· 宋 vs 蒙古",
  "primary_place": "diaoyucheng",
  "dossier_event": "event:dy_meng",
  "terrain_grid": "china_coarse",
  "lead": "王坚、张珏死守钓鱼城，蒙哥汗战死城下，漠北争位。",
  "parties_note": "宋方叙孤城死守，蒙古讳汗死。",
  "subject_names": {
   "person:wangjian": "王坚",
   "person:zhangjue": "张珏",
   "person:mengge": "蒙哥"
  },
  "page": "diaoyucheng.html",
  "key": "diaoyucheng",
  "scene_id": "diaoyucheng",
  "vocab_pack": "inline:diaoyucheng"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "钓鱼城之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "宋方叙孤城死守，蒙古讳汗死。"
  }
 ],
 "places": [
  {
   "id": "diaoyucheng",
   "name": "钓鱼城",
   "lon": 106.3,
   "lat": 30.0,
   "note": "今重庆合川东",
   "elev": 203
  },
  {
   "id": "hezhou",
   "name": "合州",
   "lon": 106.27,
   "lat": 30.03,
   "note": "宋州",
   "elev": 225
  },
  {
   "id": "chongqing",
   "name": "重庆",
   "lon": 106.55,
   "lat": 29.56,
   "note": "宋川蜀",
   "elev": 265
  },
  {
   "id": "dadu",
   "name": "大都",
   "lon": 116.4,
   "lat": 39.9,
   "note": "蒙古都",
   "elev": 44
  }
 ],
 "persons": [
  {
   "id": "wangjian",
   "name": "王坚",
   "side": "宋",
   "influence": 1
  },
  {
   "id": "zhangjue",
   "name": "张珏",
   "side": "宋",
   "influence": 1
  },
  {
   "id": "mengge",
   "name": "蒙哥",
   "side": "蒙古",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_dy_meng",
   "subject": "event:dy_meng",
   "predicate": "战事",
   "value_text": "蒙哥自汉中攻四川，围钓鱼城。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1259,
    "end": 1259,
    "era_text": "开庆元年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_dy_wang",
   "subject": "event:dy_wang",
   "predicate": "战事",
   "value_text": "王坚、张珏死守钓鱼城。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1259,
    "end": 1259,
    "era_text": "开庆元年"
   },
   "place": "diaoyucheng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_dy_jz",
   "subject": "event:dy_jz",
   "predicate": "战事",
   "value_text": "蒙哥汗攻城死，蒙古退师。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1259,
    "end": 1259,
    "era_text": "开庆元年"
   },
   "place": "diaoyucheng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M13",
   "subject": "event:dy_meng",
   "predicate": "爆发",
   "value_text": "蒙古大汗蒙哥率大军攻四川",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "hezhou",
   "source": "synthesis",
   "quote": "开庆元年，蒙古大汗蒙哥率大军攻四川",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "战役开端，蒙哥亲征四川",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M13",
   "subject": "event:dy_meng",
   "predicate": "围城",
   "value_text": "围合州钓鱼城",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "synthesis",
   "quote": "围合州钓鱼城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "钓鱼城为合州治所，今重庆合川",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M12",
   "subject": "person:wangjian",
   "predicate": "守城",
   "value_text": "守将王坚婴城固守",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "synthesis",
   "quote": "守将王坚、张珏凭山城之险，婴城固守",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "王坚为钓鱼城主将",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M13",
   "subject": "person:zhangjue",
   "predicate": "守城",
   "value_text": "张珏凭山城之险固守",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "synthesis",
   "quote": "守将王坚、张珏凭山城之险，婴城固守",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "张珏为副将，后为主将",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M13",
   "subject": "event:dy_meng",
   "predicate": "蒙哥阵亡",
   "value_text": "蒙哥为飞石所中，重伤而卒",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "synthesis",
   "quote": "蒙哥亲临督战，为飞石所中，重伤而卒于军中",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "county",
   "note": "死因有飞石与疫病两说，此处取原文飞石说",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M13",
   "subject": "event:dy_meng",
   "predicate": "影响",
   "value_text": "引发蒙古诸王争位，旭烈兀西征东归",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "dadu",
   "source": "synthesis",
   "quote": "蒙哥之死引发蒙古诸王争位，旭烈兀西征之师亦东归",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文直述影响，但因果链为后世史家共识，故标inference",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M12",
   "subject": "event:dy_meng",
   "predicate": "结果",
   "value_text": "南宋得以暂延国祚",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "",
   "source": "synthesis",
   "quote": "南宋得以暂延国祚",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文直述，但属宏观影响判断",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M13",
   "subject": "event:dy_wang",
   "predicate": "坚守",
   "value_text": "钓鱼城坚守不屈直至宋亡",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "diaoyucheng",
   "source": "synthesis",
   "quote": "钓鱼城坚守不屈，直至祥兴二年（一二七九年）宋亡之后方降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "祥兴二年为宋亡之年，钓鱼城降于宋亡后",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M13",
   "subject": "event:dy_wang",
   "predicate": "评价",
   "value_text": "为抗蒙最久之城",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "diaoyucheng",
   "source": "synthesis",
   "quote": "为抗蒙最久之城",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "county",
   "note": "原文评价性表述，非严格史实",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M13",
   "subject": "event:dy_jz",
   "predicate": "影响",
   "value_text": "此役影响关乎欧亚局势与蒙古继承之争",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "",
   "source": "synthesis",
   "quote": "此役之影响远超一城之得失，关乎欧亚局势与蒙古继承之争",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "宏观历史评价，非原文直述事实",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX011_M10",
   "subject": "event:dy_meng",
   "predicate": "兵力对比",
   "value_text": "蒙哥率大军，宋军凭险固守",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "synthesis",
   "quote": "蒙古大汗蒙哥率大军攻四川",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "county",
   "note": "原文未载双方具体兵力数字，仅称'大军'，无法量化",
   "lead": {
    "where": "event:dy_meng 的兵力数据",
    "skills": [
     "史料考据",
     "数字量化"
    ],
    "accept": "找到开庆元年钓鱼城之战双方兵力具体数字"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "DIAOYUCHENGG01",
   "subject": "event:dy_meng",
   "predicate": "叙事缺环",
   "value_text": "此役细节诸书记载互有出入，胜者所修史书常省略败方视角、兵力与伤亡之确切数字，相关叙述存在缺口。",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "battle",
   "note": "多源纪年需对读",
   "lead": {
    "where": "诸史原文对读",
    "skills": [
     "纪年校勘",
     "多源比对"
    ],
    "accept": "补败方视角与纪年异文"
   },
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "SX011_M10",
  "DIAOYUCHENGG01"
 ],
 "events": [
  {
   "id": "ev_dy_meng",
   "subject": "event:dy_meng",
   "year": 1259,
   "era": "开庆元年",
   "title": "蒙哥南征",
   "kind": "战事",
   "text": "蒙哥自汉中攻四川，围钓鱼城。"
  },
  {
   "id": "ev_dy_wang",
   "subject": "event:dy_wang",
   "year": 1259,
   "era": "开庆元年",
   "title": "王坚守城",
   "kind": "战事",
   "text": "王坚、张珏死守钓鱼城。",
   "place": "diaoyucheng"
  },
  {
   "id": "ev_dy_jz",
   "subject": "event:dy_jz",
   "year": 1259,
   "era": "开庆元年",
   "title": "蒙哥死城下",
   "kind": "战事",
   "text": "蒙哥汗攻城死，蒙古退师。",
   "place": "diaoyucheng"
  }
 ],
 "engagements": [
  {
   "id": "eng_dy_main",
   "name": "钓鱼城死守",
   "at": "1259-07",
   "era": "开庆元年七月",
   "place": "diaoyucheng",
   "winner": "a",
   "outcome": "钓鱼城凭山筑垒，蒙古久攻不下，蒙哥中砲死，旭烈兀西征军东归争位。",
   "subject": "event:dy_jz",
   "sides": [
    {
     "side": "a",
     "commander": "王坚/张珏",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 40,
     "posture": "死守",
     "commit_basis": "孤城天险，军民死守岁余。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "蒙哥",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 60,
     "posture": "顿兵",
     "commit_basis": "蒙古顿于坚城，暑疫主将死。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_dy_song",
   "name": "宋军守城",
   "side": "a",
   "nodes": [
    {
     "place": "hezhou",
     "at": "1258-01",
     "label": "王坚守合州"
    },
    {
     "place": "diaoyucheng",
     "at": "1259-01",
     "label": "据城死守"
    }
   ],
   "outcome": {
    "at": "1259-07",
    "type": "victory",
    "text": "蒙哥死城下，蒙古退"
   }
  },
  {
   "id": "rt_dy_meng",
   "name": "蒙古南下",
   "side": "b",
   "nodes": [
    {
     "place": "dadu",
     "at": "1258-01",
     "label": "蒙哥起"
    },
    {
     "place": "diaoyucheng",
     "at": "1259-02",
     "label": "围城"
    }
   ],
   "outcome": {
    "at": "1259-06",
    "type": "defeat",
    "text": "蒙古围钓鱼城，汗死退师"
   }
  }
 ],
 "timeline": [
  {
   "at": "1258-01",
   "era": "宝祐六年",
   "label": "蒙哥攻蜀",
   "key": false
  },
  {
   "at": "1259-02",
   "era": "开庆元年",
   "label": "围钓鱼城",
   "key": false
  },
  {
   "at": "1259-07",
   "era": "七月",
   "label": "蒙哥死城下",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1259-07",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1259-07",
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
   "蒙古军",
   "综合史料"
  ],
  "party_bucket": {
   "宋军": "宋军",
   "蒙古军": "蒙古军",
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
     "label": "蒙古军胜",
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
     "label": "蒙古军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
