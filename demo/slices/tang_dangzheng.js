// 本文件由 tools/build.py 自动生成（切片 tang_dangzheng），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["tang_dangzheng"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["tang_dangzheng"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "title": "牛李党争",
  "dossier_label": "牛李党争",
  "subtitle": "唐宪宗—宣宗（808—846）· 士族门第 vs 科举寒素",
  "primary_place": "changan",
  "dossier_event": "event:nt_808",
  "terrain_grid": "china_coarse",
  "lead": "中晚唐最持久的权力缠斗：牛僧孺、李宗闵为首的「牛党」（多进士出身）与李德裕为首的「李党」（山东士族门荫）更相进退，史称牛李党争。本切片把两党的利益 stakes、核心人物与史料偏见并列，并把他们的籍贯（灵台/华阴/赞皇/荥阳）叠到地形上——有人的地方就有利益纠葛。",
  "parties_note": "牛党多据科举公议、讥弹权幸；李党重门荫士族、强干弱枝。两方叙事互贬，系统不裁决，只并列。",
  "page": "county.html?scene=tang_dangzheng",
  "key": "tang_dangzheng",
  "scene_id": "tang_dangzheng",
  "vocab_pack": "inline:tang_dangzheng"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "牛李党争·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "综合《旧唐书》《新唐书》《资治通鉴》等，党争细节多经宋代史官转述。",
   "stance_label": "私修编年·综合",
   "distance_label": "成书宋初（945–1084），距事约 100–280 年，综合《旧唐书》《新唐书》《资治通鉴》"
  },
  {
   "id": "niu_wen",
   "title": "牛党文献",
   "name": "《牛公集》等牛党奏议",
   "party": "牛党文献",
   "faction": "niu_dang",
   "bias_note": "牛党多进士出身，叙事强调科举公议、讥弹权幸。",
   "stance_label": "本朝·当方阵营文献",
   "distance_label": "唐末成书（牛党本人奏议集），距事极近"
  },
  {
   "id": "li_wen",
   "title": "李党文献",
   "name": "《会昌一品集》",
   "party": "李党文献",
   "faction": "li_dang",
   "bias_note": "李德裕文集，叙会昌之政，强调摧抑藩镇、裁抑宦官，贬低牛党。",
   "stance_label": "本朝·当方阵营文献",
   "distance_label": "会昌—大中成书（李德裕自编），距事极近"
  }
 ],
 "places": [
  {
   "id": "changan",
   "name": "长安",
   "lon": 108.95,
   "lat": 34.27,
   "note": "唐都，党争中枢",
   "elev": 436
  },
  {
   "id": "lingtai",
   "name": "灵台",
   "lon": 107.62,
   "lat": 35.07,
   "note": "牛僧孺故里",
   "elev": 1149
  },
  {
   "id": "huayin",
   "name": "华阴",
   "lon": 110.08,
   "lat": 34.57,
   "note": "弘农杨氏（杨嗣复）",
   "elev": 511
  },
  {
   "id": "longxi",
   "name": "陇西",
   "lon": 103.85,
   "lat": 35.36,
   "note": "李宗闵郡望",
   "elev": 2147
  },
  {
   "id": "zhanghui",
   "name": "赞皇",
   "lon": 114.39,
   "lat": 37.67,
   "note": "李德裕故里",
   "elev": 157
  },
  {
   "id": "xingyang",
   "name": "荥阳",
   "lon": 113.36,
   "lat": 34.75,
   "note": "郑覃故里",
   "elev": 211
  },
  {
   "id": "luoyang",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "东都，李党根基",
   "elev": 171
  }
 ],
 "persons": [
  {
   "id": "niusengru",
   "name": "牛僧孺",
   "side": "niu_dang",
   "influence": 0,
   "hometown": "灵台"
  },
  {
   "id": "lizongmin",
   "name": "李宗闵",
   "side": "niu_dang",
   "influence": 0,
   "hometown": "陇西"
  },
  {
   "id": "yangshifu",
   "name": "杨嗣复",
   "side": "niu_dang",
   "influence": 0,
   "hometown": "华阴"
  },
  {
   "id": "lideyu",
   "name": "李德裕",
   "side": "li_dang",
   "influence": 0,
   "hometown": "赞皇"
  },
  {
   "id": "zhengtan",
   "name": "郑覃",
   "side": "li_dang",
   "influence": 0,
   "hometown": "荥阳"
  }
 ],
 "assertions": [
  {
   "id": "NT_E1",
   "subject": "event:nt_808",
   "predicate": "事件",
   "value_text": "元和三年制举，牛僧孺、李宗闵对策讥讽时政，宰相李吉甫泣诉，二人坐贬，史称朋党之渐。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "era_text": "元和三年",
    "start": 808,
    "end": 808,
    "gregorian_year": 808
   },
   "place": "changan",
   "quote": "（牛僧孺等）对策，指陈时政得失，宰相李吉甫恶之",
   "note": "综合《旧唐书》《通鉴》",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "NT_E2",
   "subject": "event:nt_823",
   "predicate": "事件",
   "value_text": "长庆初，李德裕、李宗闵各分朋党，更相倾轧，朝局分裂。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "era_text": "长庆初",
    "start": 823,
    "end": 823,
    "gregorian_year": 823
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "NT_E3",
   "subject": "event:nt_840",
   "predicate": "结局",
   "value_text": "武宗朝李德裕秉政进用李党，宣宗朝白敏中斥逐李德裕贬死崖州，牛党复起。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "era_text": "大中初",
    "start": 846,
    "end": 846,
    "gregorian_year": 846
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "NT_FX1",
   "subject": "event:nt_808",
   "predicate": "路线对立",
   "value_text": "牛党以科举进士为基，主张公议取士、抑制门荫；李党以山东士族门荫为基，重阀阅、轻科举。",
   "source": "niu_wen",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "time": {
    "era_text": "元和三年",
    "start": 808,
    "end": 808,
    "gregorian_year": 808
   },
   "place": "lingtai",
   "quote": "（牛党）以进士举子为羽翼，讥弹权幸",
   "note": "两营取士路线之争",
   "_party": "牛党文献",
   "_faction": "niu_dang"
  },
  {
   "id": "NT_FX2",
   "subject": "event:nt_823",
   "predicate": "制度博弈",
   "value_text": "李德裕主强干弱枝、以武力平藩镇，牛党讥其「好大喜功」；牛党主调济、宽政，李党斥其「姑息」。",
   "source": "li_wen",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "time": {
    "era_text": "长庆初",
    "start": 823,
    "end": 823,
    "gregorian_year": 823
   },
   "place": "zhanghui",
   "quote": "（德裕）尤恶进士，累朝率由门荫",
   "note": "门第 vs 科举的结构性对立",
   "_party": "李党文献",
   "_faction": "li_dang"
  },
  {
   "id": "NT_FX3",
   "subject": "event:nt_840",
   "predicate": "反扑与反复",
   "value_text": "会昌之政尽用李党，大中一朝尽逐之——党争由政见之争滑向意气权位，延及唐亡。",
   "source": "synthesis",
   "layer": "inference",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.6,
   "time": {
    "era_text": "大中",
    "start": 846,
    "end": 846,
    "gregorian_year": 846
   },
   "place": "changan",
   "note": "牛李更迭，国势坐困",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "NT_GAP1",
   "subject": "event:nt_808",
   "predicate": "史料缺环",
   "value_text": "牛李党争的籍贯—门第对应并非铁板；部分人物郡望记载互异，严格以地名划营存在过度简化风险。",
   "source": "synthesis",
   "layer": "gap",
   "quote_status": "paraphrase_unverified",
   "confidence": 0,
   "time": {
    "era_text": "元和",
    "start": 808,
    "end": 808,
    "gregorian_year": 808
   },
   "place": null,
   "lead": {
    "where": "诸史列传对读",
    "skills": [
     "郡望考证",
     "传记对读"
    ],
    "accept": "补各党核心人物确切籍贯与起家途径"
   },
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "NT_GAP1"
 ],
 "events": [
  {
   "id": "ev_nt_808",
   "subject": "event:nt_808",
   "year": 808,
   "era": "元和三年",
   "title": "制举策试·朋党之渐",
   "kind": "党争",
   "text": "牛僧孺、李宗闵对策指陈时政阙失，宰相李吉甫恶之，二人坐贬，朋党之争自此起。",
   "place": "changan"
  },
  {
   "id": "ev_nt_823",
   "subject": "event:nt_823",
   "year": 823,
   "era": "长庆初",
   "title": "牛李分党",
   "kind": "党争",
   "text": "李德裕、李宗闵各树朋党，更相进退，朝局分裂为二。",
   "place": "changan"
  },
  {
   "id": "ev_nt_840",
   "subject": "event:nt_840",
   "year": 840,
   "era": "会昌—大中",
   "title": "会昌进李·大中斥牛",
   "kind": "结局",
   "text": "武宗任李德裕，进用李党、贬逐牛党；宣宗立，白敏中秉政，李德裕远贬崖州，牛党复盛。",
   "place": "changan"
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
   "牛党文献",
   "李党文献"
  ],
  "party_bucket": {
   "综合史料": "综合史料",
   "牛党文献": "牛党文献",
   "李党文献": "李党文献"
  },
  "party_colors": {
   "综合史料": "#7f8c8d",
   "牛党文献": "#2980b9",
   "李党文献": "#8E44AD"
  },
  "faction_colors": {
   "niu_dang": "#2980b9",
   "li_dang": "#8E44AD"
  },
  "factions": {
   "niu_dang": {
    "name": "牛党（科举进士集团）",
    "period": "唐宪宗—宣宗（808—846）",
    "interest": "牛僧孺、李宗闵为首，多进士出身，主张调济寒素、抑制门荫特权与宦官，反对李德裕的强干弱枝与裁抑藩镇之政。",
    "key_figures": [
     "牛僧孺",
     "李宗闵",
     "杨嗣复",
     "李珏"
    ],
    "typical_sources": [
     "旧唐书·牛僧孺传",
     "唐大诏令集（牛党政事）"
    ],
    "bias_note": "牛党叙事强调科举公议、讥弹权幸；其重进士、轻门第的立场，本身就是寒素士人对山东士族的反弹。",
    "bases": [
     "灵台",
     "华阴",
     "陇西"
    ],
    "geo_note": "牛僧孺出安定鹑觚（今甘肃灵台）；杨嗣复弘农杨氏（华阴）；李宗闵宗室陇西李氏。牛党多中原—关陇士人，门户较杂。"
   },
   "li_dang": {
    "name": "李党（士族门荫集团）",
    "period": "武宗朝（840—846）极盛",
    "interest": "李德裕为首，山东士族（赵郡李氏、荥阳郑氏）门荫出身，主张强化中央集权、裁抑宦官、以武力平藩镇；与牛党更相倾轧。",
    "key_figures": [
     "李德裕",
     "郑覃",
     "陈夷行",
     "李绅"
    ],
    "typical_sources": [
     "会昌一品集",
     "旧唐书·李德裕传"
    ],
    "bias_note": "李德裕文集（会昌一品集）叙会昌之政，强调平泽潞、抑宦官之功，对牛党多贬抑，称其「朋比徇私」。",
    "bases": [
     "赞皇",
     "荥阳",
     "洛阳"
    ],
    "geo_note": "李德裕赵郡赞皇人；郑覃荥阳郑氏；李党多山东士族郡望，门第高华，与牛党之门荫/科举之争互为表里。"
   }
  },
  "faction_geo": {
   "gaps": [
    {
     "region": "岭南",
     "determination": "genuine_gap",
     "note": "唐后期党争核心在中枢与中原士族，岭南远裔，无独立地域代言。"
    },
    {
     "region": "江南/闽",
     "determination": "affiliate:niu_dang",
     "note": "牛党牛僧孺、李宗闵等曾出镇武昌、淮南，江南交游圈多附牛党，非独立派系。"
    }
   ]
  }
 },
 "faction_geo": {
  "niu_dang": {
   "name": "牛党（科举进士集团）",
   "color": "#2980b9",
   "geo_note": "牛僧孺出安定鹑觚（今甘肃灵台）；杨嗣复弘农杨氏（华阴）；李宗闵宗室陇西李氏。牛党多中原—关陇士人，门户较杂。",
   "points": [
    {
     "name": "灵台",
     "lon": 107.62,
     "lat": 35.07,
     "note": "牛僧孺故里，安定鹑觚，今甘肃灵台",
     "resolved": true
    },
    {
     "name": "华阴",
     "lon": 110.08,
     "lat": 34.57,
     "note": "弘农杨氏郡望（杨嗣复），今陕西华阴",
     "resolved": true
    },
    {
     "name": "陇西",
     "lon": 103.85,
     "lat": 35.36,
     "note": "李氏郡望，今甘肃临洮",
     "resolved": true
    }
   ]
  },
  "li_dang": {
   "name": "李党（士族门荫集团）",
   "color": "#8E44AD",
   "geo_note": "李德裕赵郡赞皇人；郑覃荥阳郑氏；李党多山东士族郡望，门第高华，与牛党之门荫/科举之争互为表里。",
   "points": [
    {
     "name": "赞皇",
     "lon": 114.39,
     "lat": 37.67,
     "note": "李德裕故里，赵郡赞皇，今河北赞皇",
     "resolved": true
    },
    {
     "name": "荥阳",
     "lon": 113.36,
     "lat": 34.75,
     "note": "郑覃故里，荥阳郑氏，今河南荥阳",
     "resolved": true
    },
    {
     "name": "洛阳",
     "lon": 112.45,
     "lat": 34.62,
     "note": "唐东都，今洛阳",
     "resolved": true
    }
   ]
  }
 }
};
