// 本文件由 tools/build.py 自动生成（切片 donghan_danggu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["donghan_danggu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["donghan_danggu"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "title": "党锢之祸",
  "dossier_label": "党锢之祸",
  "subtitle": "东汉桓灵（166—184）· 清流士大夫 vs 宦官",
  "primary_place": "luoyang",
  "dossier_event": "event:dh_166",
  "terrain_grid": "china_coarse",
  "lead": "桓灵之际，李膺、陈蕃等太学清流抨击宦官专权，反被诬结党诽讪朝政，遭禁锢终身——史称党锢之祸。本切片把「清流士大夫」（颍川/汝南/太原/河东士族郡望）与「宦官集团」（无乡党、依附皇权）建模为两大利益集团，并把籍贯叠到地形。宦官无地方根基，正是「皇权 vs 士族」的结构性代理。",
  "parties_note": "清流标榜名节、攻宦官；宦官挟制幼主、诬陷清流。双方记载经《后汉书》转述，系统不裁决，只并列。",
  "page": "county.html?scene=donghan_danggu",
  "key": "donghan_danggu",
  "scene_id": "donghan_danggu",
  "vocab_pack": "inline:donghan_danggu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "党锢之祸·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "综合《后汉书·党锢/宦者列传》，清流叙事占主导。",
   "stance_label": "私修编年·综合",
   "distance_label": "成书南朝宋（范晔《后汉书》约 5 世纪），距事约 250–340 年"
  },
  {
   "id": "qingliu_wen",
   "title": "清流文献",
   "name": "《后汉书·党锢列传》",
   "party": "清流文献",
   "faction": "qingliu",
   "bias_note": "范晔叙党人，多采清流立场，褒名节而贬宦官。",
   "stance_label": "后世官修·清流立场",
   "distance_label": "范晔《后汉书·党锢列传》成书约 5 世纪，距事约 250–340 年，采清流立场"
  },
  {
   "id": "huan_wen",
   "title": "宦官相关",
   "name": "《后汉书·宦者列传》",
   "party": "宦官相关",
   "faction": "huanguan",
   "bias_note": "宦官自身无文献，仅由对立史官转述。",
   "stance_label": "后世官修·对立面转述",
   "distance_label": "范晔《后汉书·宦者列传》成书约 5 世纪，距事约 250–340 年，宦官自身无文献"
  }
 ],
 "places": [
  {
   "id": "luoyang",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "东汉都，党锢中枢",
   "elev": 171
  },
  {
   "id": "yingchuan",
   "name": "颍川",
   "lon": 113.85,
   "lat": 34.04,
   "note": "李膺郡望",
   "elev": 72
  },
  {
   "id": "runan",
   "name": "汝南",
   "lon": 114.5,
   "lat": 33.0,
   "note": "陈蕃郡望（平舆）",
   "elev": 34
  },
  {
   "id": "taiyuan",
   "name": "太原",
   "lon": 112.55,
   "lat": 37.87,
   "note": "郭泰郡望",
   "elev": 807
  },
  {
   "id": "hedong",
   "name": "河东",
   "lon": 111.23,
   "lat": 35.16,
   "note": "士族郡望（闻喜）",
   "elev": 597
  }
 ],
 "persons": [
  {
   "id": "liying",
   "name": "李膺",
   "side": "qingliu",
   "influence": 0,
   "hometown": "颍川"
  },
  {
   "id": "chenfan",
   "name": "陈蕃",
   "side": "qingliu",
   "influence": 0,
   "hometown": "汝南"
  },
  {
   "id": "guotai",
   "name": "郭泰",
   "side": "qingliu",
   "influence": 0,
   "hometown": "太原"
  },
  {
   "id": "douwu",
   "name": "窦武",
   "side": "qingliu",
   "influence": 0,
   "hometown": "扶风"
  },
  {
   "id": "houjian",
   "name": "侯览",
   "side": "huanguan",
   "influence": 0,
   "hometown": ""
  },
  {
   "id": "caojie",
   "name": "曹节",
   "side": "huanguan",
   "influence": 0,
   "hometown": ""
  }
 ],
 "assertions": [
  {
   "id": "DH_E1",
   "subject": "event:dh_166",
   "predicate": "事件",
   "value_text": "延熹九年，李膺杀术士张成，宦官诬膺等结党诽讪，桓帝捕党人二百余禁锢，第一次党锢。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "era_text": "延熹九年",
    "start": 166,
    "end": 166,
    "gregorian_year": 166
   },
   "place": "luoyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "DH_E2",
   "subject": "event:dh_168",
   "predicate": "事件",
   "value_text": "建宁元年窦武、陈蕃谋诛宦官，事泄兵败，陈蕃死、窦武诛，宦官更张。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "era_text": "建宁元年",
    "start": 168,
    "end": 168,
    "gregorian_year": 168
   },
   "place": "luoyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "DH_E3",
   "subject": "event:dh_169",
   "predicate": "结局",
   "value_text": "建宁二年曹节等诬党人谋反，杀李膺、范滂等百余人，第二次党锢，名士殆尽。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "era_text": "建宁二年",
    "start": 169,
    "end": 169,
    "gregorian_year": 169
   },
   "place": "luoyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "DH_FX1",
   "subject": "event:dh_166",
   "predicate": "路线对立",
   "value_text": "清流以太学为舆论场，标榜名节攻宦官；宦官挟幼主、诬结党，以「诽讪」罪反制——皇权与士族的结构性对撞。",
   "source": "qingliu_wen",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "time": {
    "era_text": "延熹九年",
    "start": 166,
    "end": 166,
    "gregorian_year": 166
   },
   "place": "yingchuan",
   "quote": "（李膺）振拔士人，崇奖名节，海内争附",
   "note": "清流以名教相尚",
   "_party": "清流文献",
   "_faction": "qingliu"
  },
  {
   "id": "DH_FX2",
   "subject": "event:dh_169",
   "predicate": "制度博弈",
   "value_text": "宦官无乡党根基，却借「党锢」之名将士族整体打成「朋党」，以皇权名义剥夺其政治资格。",
   "source": "huan_wen",
   "layer": "inference",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.7,
   "time": {
    "era_text": "建宁二年",
    "start": 169,
    "end": 169,
    "gregorian_year": 169
   },
   "place": "luoyang",
   "quote": "（宦官）诬告党人欲图社稷",
   "note": "无根基势力借皇权压制有根基士族",
   "_party": "宦官相关",
   "_faction": "huanguan"
  },
  {
   "id": "DH_FX3",
   "subject": "event:dh_169",
   "predicate": "反扑与反复",
   "value_text": "两次党锢诛尽清流，士族寒心；黄巾起而汉廷无可用之臣，遂启军阀割据。",
   "source": "synthesis",
   "layer": "inference",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.6,
   "time": {
    "era_text": "中平",
    "start": 184,
    "end": 184,
    "gregorian_year": 184
   },
   "place": "luoyang",
   "note": "党争削弱统治根基，间接酿黄巾",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "DH_GAP1",
   "subject": "event:dh_166",
   "predicate": "史料缺环",
   "value_text": "宦官集团的立场几无自述文献，其「利益」只能据士人史官对立记载反推；「无乡党」是制度设计还是史书叙事，仍有考订空间。",
   "source": "synthesis",
   "layer": "gap",
   "quote_status": "paraphrase_unverified",
   "confidence": 0,
   "time": {
    "era_text": "延熹",
    "start": 166,
    "end": 166,
    "gregorian_year": 166
   },
   "place": null,
   "lead": {
    "where": "后汉书宦者列传与党锢列传对读",
    "skills": [
     "制度史分析",
     "传记对读"
    ],
    "accept": "补宦官任用制度与其社会来源"
   },
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "DH_GAP1"
 ],
 "events": [
  {
   "id": "ev_dh_166",
   "subject": "event:dh_166",
   "year": 166,
   "era": "延熹九年",
   "title": "第一次党锢",
   "kind": "党争",
   "text": "李膺杀张成，宦官诬膺等结党诽讪朝政，桓帝下诏捕党人，二百余人禁锢。",
   "place": "luoyang"
  },
  {
   "id": "ev_dh_168",
   "subject": "event:dh_168",
   "year": 168,
   "era": "建宁元年",
   "title": "窦武陈蕃谋诛宦不成",
   "kind": "党争",
   "text": "窦武、陈蕃谋诛宦官，事泄，陈蕃死、窦武兵败，宦官更张。",
   "place": "luoyang"
  },
  {
   "id": "ev_dh_169",
   "subject": "event:dh_169",
   "year": 169,
   "era": "建宁二年",
   "title": "第二次党锢",
   "kind": "结局",
   "text": "曹节等诬陷党人谋反，捕李膺、范滂等百余人杀之，天下名士殆尽，汉室益衰。",
   "place": "luoyang"
  }
 ],
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
   "综合史料",
   "清流文献",
   "宦官相关"
  ],
  "party_bucket": {
   "综合史料": "综合史料",
   "清流文献": "清流文献",
   "宦官相关": "宦官相关"
  },
  "party_colors": {
   "综合史料": "#7f8c8d",
   "清流文献": "#1B7A5A",
   "宦官相关": "#7B241C"
  },
  "faction_colors": {
   "qingliu": "#1B7A5A",
   "huanguan": "#7B241C"
  },
  "factions": {
   "qingliu": {
    "name": "清流士大夫",
    "period": "桓帝—灵帝（166—184）",
    "interest": "李膺、陈蕃、郭泰等太学清议之士，抨击宦官专权与贪腐，标榜名节，形成「清流」舆论。",
    "key_figures": [
     "李膺",
     "陈蕃",
     "郭泰",
     "范滂",
     "张俭",
     "窦武"
    ],
    "typical_sources": [
     "后汉书·党锢列传",
     "风俗通义"
    ],
    "bias_note": "清流自称「正人」，叙宦官为「阉竖」；其标榜名节亦被指正为结交太学、声势胁迫朝政。",
    "bases": [
     "颍川",
     "汝南",
     "太原",
     "河东"
    ],
    "geo_note": "清流多出自颍川、汝南、太原、河东等士族郡望——他们是地方大族在中央的代言。"
   },
   "huanguan": {
    "name": "宦官集团",
    "period": "桓帝—灵帝（159—189）",
    "interest": "侯览、曹节、王甫等中常侍，依附皇权压制士族，挟制朝政、诬陷清流，酿成党锢。",
    "key_figures": [
     "侯览",
     "曹节",
     "王甫",
     "张让",
     "赵忠"
    ],
    "typical_sources": [
     "后汉书·宦者列传"
    ],
    "bias_note": "宦官叙事仅见于士人史官笔下的「阉祸」，其自身几无文献传世；立场须据对立记载复原。",
    "bases": [],
    "geo_note": "宦官多起自微贱、刻意割裂乡土，无独立地方根基——其势力本质是「皇权 vs 士族」的结构性代理，而非地域利益集团。故不以籍贯立派，标为京师皇权（洛阳）。"
   }
  },
  "faction_geo": {
   "gaps": [
    {
     "region": "江南/巴蜀",
     "determination": "genuine_gap",
     "note": "党锢之祸核心在河南—关陇士族与京师宦官，江南巴蜀无显著代言。"
    },
    {
     "region": "边郡（幽并凉）",
     "determination": "affiliate:qingliu",
     "note": "部分边郡士人（如皇甫规）同情清流，但未成独立集团。"
    }
   ]
  }
 },
 "faction_geo": {
  "qingliu": {
   "name": "清流士大夫",
   "color": "#1B7A5A",
   "geo_note": "清流多出自颍川、汝南、太原、河东等士族郡望——他们是地方大族在中央的代言。",
   "points": [
    {
     "name": "颍川",
     "lon": 113.85,
     "lat": 34.04,
     "note": "荀氏、陈氏等士族郡望，今河南许昌",
     "resolved": true
    },
    {
     "name": "汝南",
     "lon": 114.5,
     "lat": 33.0,
     "note": "陈蕃郡望，今河南平舆",
     "resolved": true
    },
    {
     "name": "太原",
     "lon": 112.55,
     "lat": 37.87,
     "note": "今山西太原",
     "resolved": true
    },
    {
     "name": "河东",
     "lon": 111.23,
     "lat": 35.16,
     "note": "裴氏郡望，今山西闻喜",
     "resolved": true
    }
   ]
  }
 }
};
