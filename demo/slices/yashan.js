// 本文件由 tools/build.py 自动生成（切片 yashan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["yashan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["yashan"] = {
 "meta": {
  "kind": "dynasty",
  "region": "dynasty",
  "title": "崖山之战",
  "dossier_label": "崖山之战",
  "subtitle": "1279 · 宋元最后一战",
  "primary_place": "jiangmen",
  "dossier_event": "event:ys_1276",
  "terrain_grid": "china_coarse",
  "lead": "元军压境，宋室播迁海上。1279 张弘范围崖山，宋将张世杰死战，舰阵连锁。陆秀夫负幼帝昺投海，军民蹈海者十万，赵宋遂绝。",
  "parties_note": "崖山据《宋史·瀛国公纪》《元史·张弘范传》综合，殉国规模以传说与记载折中。",
  "subject_names": {
   "person:zhangshijie": "张世杰",
   "person:luxinfu": "陆秀夫"
  },
  "page": "county.html?scene=yashan",
  "key": "yashan",
  "scene_id": "yashan",
  "vocab_pack": "inline:yashan"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "崖山之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "崖山据《宋史·瀛国公纪》《元史·张弘范传》综合，殉国规模以传说与记载折中。"
  }
 ],
 "places": [
  {
   "id": "jiangmen",
   "name": "崖山",
   "lon": 113.08,
   "lat": 22.58,
   "note": "宋元最后一战，今江门",
   "elev": 17
  },
  {
   "id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "元大都/明京师",
   "elev": 44
  },
  {
   "id": "nanjing",
   "name": "南京",
   "lon": 118.8,
   "lat": 32.06,
   "note": "六朝古都·建康/应天",
   "elev": 17
  }
 ],
 "persons": [
  {
   "id": "zhangshijie",
   "name": "张世杰",
   "side": "宋",
   "influence": 1
  },
  {
   "id": "luxinfu",
   "name": "陆秀夫",
   "side": "宋",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_ys_1276",
   "subject": "event:ys_1276",
   "predicate": "战事",
   "value_text": "元军入临安，恭帝出降，宋室南奔海上续抗。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1276,
    "end": 1276,
    "era_text": "德祐二"
   },
   "place": "nanjing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_ys_1279",
   "subject": "event:ys_1279",
   "predicate": "战事",
   "value_text": "张弘范破崖山，陆秀夫负帝投海，十万军民殉国，宋亡。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1279,
    "end": 1279,
    "era_text": "祥兴二"
   },
   "place": "jiangmen",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "YS001",
   "subject": "event:ys_1279",
   "predicate": "爆发",
   "value_text": "宋元崖山海战",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "jiangmen",
   "source": "synthesis",
   "quote": "祥兴二年，宋元崖山海战",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "崖山位于今广东江门新会，以place:jiangmen代指",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "YS002",
   "subject": "person:zhangshijie",
   "predicate": "率军",
   "value_text": "以千艘蔽海",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "jiangmen",
   "source": "synthesis",
   "quote": "张世杰以千艘蔽海",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "千艘为原文表述，实数待考",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "YS003",
   "subject": "person:luxinfu",
   "predicate": "负帝投海",
   "value_text": "负幼帝昺投海",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "jiangmen",
   "source": "synthesis",
   "quote": "陆秀夫负幼帝昺投海",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "YS004",
   "subject": "event:ys_1279",
   "predicate": "殉国",
   "value_text": "十万军民殉国",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "jiangmen",
   "source": "synthesis",
   "quote": "十万军民殉国",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "十万为原文表述，实数存疑，待核",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "YS005",
   "subject": "event:ys_1279",
   "predicate": "结果",
   "value_text": "宋亡",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "jiangmen",
   "source": "synthesis",
   "quote": "宋亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "YS006",
   "subject": "event:ys_1279",
   "predicate": "兵力对比",
   "value_text": "宋军千艘，元军数不详",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "jiangmen",
   "source": "synthesis",
   "quote": "张世杰以千艘蔽海",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "province",
   "note": "原文未载元军兵力，无法对比",
   "lead": {
    "where": "event:ys_1279",
    "skills": [
     "史料考据",
     "宋元战争史"
    ],
    "accept": "补充元军参战兵力及双方对比的可靠史料"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "YS007",
   "subject": "event:ys_1279",
   "predicate": "性质",
   "value_text": "宋元决战",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "jiangmen",
   "source": "synthesis",
   "quote": "宋元崖山海战",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "empire",
   "note": "由战役结果及宋亡推断为决战",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "YS008",
   "subject": "event:ys_1279",
   "predicate": "影响",
   "value_text": "南宋灭亡",
   "time": {
    "era_text": "祥兴二年",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": "jiangmen",
   "source": "synthesis",
   "quote": "宋亡",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.9,
   "scale": "empire",
   "note": "由宋亡直接推出",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "YASHANG01",
   "subject": "event:ys_1279",
   "predicate": "史料缺环",
   "value_text": "此次政权更迭的兵略、伤亡与后续处置，新朝国史多讳败饰胜，相关细节存在缺口。",
   "time": {
    "era_text": "祥兴",
    "start": "1279-01-01",
    "end": "1279-12-31",
    "gregorian_year": 1279
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "dynasty",
   "note": "多源纪年需对读",
   "lead": {
    "where": "诸史原文对读",
    "skills": [
     "纪年校勘",
     "多源比对"
    ],
    "accept": "补各方视角与纪年异文"
   },
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "YS006",
  "YASHANG01"
 ],
 "events": [
  {
   "id": "ev_ys_1276",
   "subject": "event:ys_1276",
   "year": 1276,
   "era": "德祐二",
   "title": "临安降元",
   "kind": "变局",
   "text": "元军入临安，恭帝出降，宋室南奔海上续抗。",
   "place": "nanjing"
  },
  {
   "id": "ev_ys_1279",
   "subject": "event:ys_1279",
   "year": 1279,
   "era": "祥兴二",
   "title": "崖山蹈海",
   "kind": "战事",
   "text": "张弘范破崖山，陆秀夫负帝投海，十万军民殉国，宋亡。",
   "place": "jiangmen"
  }
 ],
 "routes": [
  {
   "id": "rt_ys",
   "name": "元军南下",
   "side": "a",
   "nodes": [
    {
     "place": "beijing",
     "at": "1276",
     "label": "大举南征"
    },
    {
     "place": "jiangmen",
     "at": "1279",
     "label": "崖山决战"
    }
   ],
   "outcome": {
    "at": "1279",
    "type": "victory",
    "text": "灭宋一统"
   }
  }
 ],
 "engagements": [
  {
   "id": "eng_ys",
   "name": "崖山决战",
   "at": "1279",
   "era": "祥兴二年",
   "place": "jiangmen",
   "winner": "a",
   "outcome": "张弘范以楼船锁港、火攻夹击，宋舰阵溃，陆秀夫负帝投海。",
   "subject": "event:ys_1279",
   "sides": [
    {
     "side": "a",
     "commander": "张弘范",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 300,
     "posture": "水攻",
     "commit_basis": "元军善水战、舰坚炮利。",
     "commit_confidence": 0.6
    },
    {
     "side": "b",
     "commander": "张世杰",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 280,
     "posture": "困守",
     "commit_basis": "宋舰连锁、进退失据。",
     "commit_confidence": 0.3
    }
   ]
  }
 ],
 "timeline": [
  {
   "at": "1276",
   "era": "德祐二",
   "label": "临安降·南奔",
   "key": true
  },
  {
   "at": "1279",
   "era": "祥兴二",
   "label": "崖山·宋亡",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1279",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1279",
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
   "元军",
   "宋军",
   "综合史料"
  ],
  "party_bucket": {
   "元军": "元军",
   "宋军": "宋军",
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
     "label": "元军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "宋军胜",
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
     "label": "元军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "宋军行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
