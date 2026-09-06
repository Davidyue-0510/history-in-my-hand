// 本文件由 tools/build.py 自动生成（切片 song_chanchuan_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["song_chanchuan_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["song_chanchuan_llm"] = {
 "meta": {
  "kind": "exchange",
  "scale_tier": "strategic",
  "region": "song",
  "province": null,
  "title": "宋·澶渊之盟（LLM 抽取·人工校订）",
  "dossier_label": "宋·澶渊之盟（LLM 抽取落库）",
  "subtitle": "宋辽百年和平的条约基线",
  "primary_place": null,
  "dossier_event": "ev_song_chanchuan_01",
  "vocab_pack": "inline:song_chanchuan_llm",
  "terrain_grid": "china_coarse",
  "lead": "澶渊之盟以岁币换和平，奠定宋辽百余年无大战的均势。",
  "parties_note": "叙事方=宋廷/辽廷；来源=后世官修（基于《宋史》《续资治通鉴》现代概述）。",
  "dims": [
   1,
   3,
   6
  ],
  "subject_names": {
   "person:SON__p01": "萧太后",
   "person:SON__p02": "辽圣宗",
   "person:SON__p03": "宋真宗",
   "person:SON__p04": "寇准",
   "person:SON__p05": "萧挞凛",
   "event:ev_song_chanchuan_01": "辽军南侵",
   "event:ev_song_chanchuan_02": "澶州对峙",
   "event:ev_song_chanchuan_03": "澶渊之盟",
   "place:chanzhou": "澶州",
   "place:kaifeng": "开封"
  },
  "epoch": "song",
  "strategic": {
   "political_cohesion": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     3,
     4
    ],
    "layer": "inference",
    "note": "宋初篡立疑虑重，崇文抑武巩固内部"
   },
   "material_logistics": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "汴梁漕运与河北军需决定前线耐力"
   },
   "population_mobilization": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "河北乡兵与禁军是谈判筹码"
   },
   "geopolitical_strategy": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "辽骑机动+幽云地缘使宋转守为攻难"
   }
  },
  "page": "county.html?scene=song_chanchuan_llm",
  "key": "song_chanchuan_llm",
  "scene_id": "song_chanchuan_llm"
 },
 "sources": [
  {
   "id": "song_chanchuan_src_llm",
   "title": "宋·澶渊之盟（现代概述）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "后世",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "chanzhou",
   "name": "澶州",
   "type": "city",
   "modern": "今中国河南省濮阳市",
   "note": "澶渊之盟签订地",
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "kaifeng",
   "name": "开封",
   "type": "city",
   "modern": "今中国河南省开封市",
   "note": "北宋都城",
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 114.35,
   "lat": 34.8,
   "geo_note": "魏国都城",
   "elev": 75
  }
 ],
 "persons": [
  {
   "id": "SON__p01",
   "name": "萧太后",
   "role": "辽太后",
   "note": "辽圣宗之母，亲率大军南征",
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SON__p02",
   "name": "辽圣宗",
   "role": "辽帝",
   "note": "与萧太后同征，后与宋盟",
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SON__p03",
   "name": "宋真宗",
   "role": "宋帝",
   "note": "渡河亲征，定盟约",
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SON__p04",
   "name": "寇准",
   "role": "宋宰相",
   "note": "力请真宗亲征",
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SON__p05",
   "name": "萧挞凛",
   "role": "辽大将",
   "note": "被宋军弩射杀",
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SON_001",
   "subject": "event:ev_song_chanchuan_01",
   "predicate": "辽军南侵",
   "value_text": "辽军深入宋境，抵澶州",
   "time": {
    "era_text": "宋景德元年秋",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "chanzhou",
   "source": "song_chanchuan_src_llm",
   "quote": "辽萧太后与圣宗亲率大军南下",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "theater",
   "note": "[auto] 补层 inference",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "辽萧太后与圣宗亲率大军南下",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_002",
   "subject": "event:ev_song_chanchuan_02",
   "predicate": "宋真宗亲征",
   "value_text": "真宗渡河登澶州北城",
   "time": {
    "era_text": "宋景德元年十一月",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "chanzhou",
   "source": "song_chanchuan_src_llm",
   "quote": "真宗在寇准力请下渡河亲征",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "真宗在寇准力请下渡河亲征",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_003",
   "subject": "event:ev_song_chanchuan_02",
   "predicate": "宋军士气",
   "value_text": "宋军士气大振",
   "time": {
    "era_text": "宋景德元年十一月",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "chanzhou",
   "source": "song_chanchuan_src_llm",
   "quote": "宋军士气大振",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宋军士气大振",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_004",
   "subject": "event:ev_song_chanchuan_02",
   "predicate": "辽将阵亡",
   "value_text": "弩射杀辽大将萧挞凛",
   "time": {
    "era_text": "宋景德元年十一月",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "chanzhou",
   "source": "song_chanchuan_src_llm",
   "quote": "弩射杀辽大将萧挞凛",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "弩射杀辽大将萧挞凛",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_005",
   "subject": "event:ev_song_chanchuan_03",
   "predicate": "盟约性质",
   "value_text": "宋辽约为兄弟之国",
   "time": {
    "era_text": "宋景德元年十二月",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "chanzhou",
   "source": "song_chanchuan_src_llm",
   "quote": "双方约为兄弟之国",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "双方约为兄弟之国",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_006",
   "subject": "event:ev_song_chanchuan_03",
   "predicate": "岁币数额",
   "value_text": "宋岁遗辽银十万两绢二十万匹",
   "time": {
    "era_text": "宋景德元年十二月",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "chanzhou",
   "source": "song_chanchuan_src_llm",
   "quote": "宋岁遗辽银十万两、绢二十万匹",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宋岁遗辽银十万两、绢二十万匹",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_007",
   "subject": "event:ev_song_chanchuan_03",
   "predicate": "边界维持",
   "value_text": "沿接壤各州维持旧界",
   "time": {
    "era_text": "宋景德元年十二月",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "chanzhou",
   "source": "song_chanchuan_src_llm",
   "quote": "沿接壤各州维持旧界",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    3
   ],
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "沿接壤各州维持旧界",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_008",
   "subject": "event:ev_song_chanchuan_03",
   "predicate": "盟约影响",
   "value_text": "奠定宋辽百年和平",
   "time": {
    "era_text": "宋景德元年十二月",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "chanzhou",
   "source": "song_chanchuan_src_llm",
   "quote": "史称澶渊之盟",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "后世史家评价",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "史称澶渊之盟",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_009",
   "subject": "event:ev_song_chanchuan_02",
   "predicate": "辽方厌战",
   "value_text": "辽方亦有厌战之意",
   "time": {
    "era_text": "宋景德元年十一月",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "chanzhou",
   "source": "song_chanchuan_src_llm",
   "quote": "辽方亦有厌战之意",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "辽方亦有厌战之意",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_010",
   "subject": "event:ev_song_chanchuan_03",
   "predicate": "盟约动机",
   "value_text": "辽方主动遣使请盟",
   "time": {
    "era_text": "宋景德元年十二月",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "chanzhou",
   "source": "song_chanchuan_src_llm",
   "quote": "遣使请盟",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "遣使请盟",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_011",
   "subject": "event:ev_song_chanchuan_02",
   "predicate": "寇准角色",
   "value_text": "寇准力请真宗亲征",
   "time": {
    "era_text": "宋景德元年十一月",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "chanzhou",
   "source": "song_chanchuan_src_llm",
   "quote": "寇准力请下渡河亲征",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "寇准力请下渡河亲征",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_012",
   "subject": "event:ev_song_chanchuan_01",
   "predicate": "辽军兵力",
   "value_text": "辽军深入宋境，前线近开封",
   "time": {
    "era_text": "宋景德元年秋",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "kaifeng",
   "source": "song_chanchuan_src_llm",
   "quote": "前线已近开封",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "前线已近开封",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_013",
   "subject": "event:ev_song_chanchuan_03",
   "predicate": "岁币负担",
   "value_text": "岁币对宋财政影响未详",
   "time": {
    "era_text": "宋景德元年十二月",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "chanzhou",
   "source": "song_chanchuan_src_llm",
   "quote": "宋岁遗辽银十万两、绢二十万匹",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "史料未载岁币占宋财政比例",
   "dims": [
    3
   ],
   "lead": {
    "where": "宋辽双方财政记录",
    "skills": [
     "经济史",
     "财政档案分析"
    ],
    "accept": "岁币对宋财政的实际负担程度"
   },
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宋岁遗辽银十万两、绢二十万匹",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_014",
   "subject": "event:ev_song_chanchuan_03",
   "predicate": "盟约持久性",
   "value_text": "百年和平是否因盟约存疑",
   "time": {
    "era_text": "宋景德元年十二月",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "chanzhou",
   "source": "song_chanchuan_src_llm",
   "quote": "宋辽百年和平的条约基线",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "和平是否全因盟约待考",
   "dims": [
    6
   ],
   "lead": {
    "where": "宋辽百年关系史",
    "skills": [
     "国际关系史",
     "长时段分析"
    ],
    "accept": "盟约与和平的因果关系"
   },
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宋辽百年和平的条约基线",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SON_013",
  "SON_014"
 ],
 "events": [
  {
   "id": "ev_song_chanchuan_01",
   "subject": "event:ev_song_chanchuan_01",
   "year": 1004,
   "era": "宋景德元年秋",
   "title": "辽军南侵",
   "kind": "战事",
   "text": "辽萧太后与圣宗率军南下",
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_song_chanchuan_02",
   "subject": "event:ev_song_chanchuan_02",
   "year": 1004,
   "era": "宋景德元年十一月",
   "title": "澶州对峙",
   "kind": "战事",
   "text": "辽军抵澶州，宋真宗亲征",
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_song_chanchuan_03",
   "subject": "event:ev_song_chanchuan_03",
   "year": 1004,
   "era": "宋景德元年十二月",
   "title": "澶渊之盟",
   "kind": "外交",
   "text": "宋辽约为兄弟，宋岁遗银绢",
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "kaifeng",
   "to": "chanzhou",
   "type": "military",
   "label": "宋真宗亲征路线",
   "_source_idx": 0,
   "_source_name": "宋·澶渊之盟（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "kaifeng",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "kaifeng",
   "name": "开封",
   "lon": 114.35,
   "lat": 34.8,
   "region": "song"
  }
 ],
 "control_years": [
  1900,
  2000
 ],
 "vocab": {
  "layers": {
   "record": "原始史料",
   "scholarship": "学界研究",
   "inference": "合理推断",
   "gap": "证据缺口"
  },
  "quote_status": {
   "verbatim": "直接引文",
   "paraphrase_unverified": "转述待核",
   "generated": "生成"
  },
  "parties": [
   "后世官修"
  ],
  "party_bucket": {
   "后世官修": "后世官修"
  },
  "party_colors": {
   "后世官修": "#A0473A"
  },
  "factions": {
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_后世官修": "#A0473A"
  }
 },
 "basemap": {
  "coastline": [],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        113.35,
        33.8
       ],
       [
        113.35,
        35.8
       ],
       [
        115.35,
        35.8
       ],
       [
        115.35,
        33.8
       ],
       [
        113.35,
        33.8
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "admin1": [
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.35,
         35.8
        ],
        [
         113.35,
         35.47
        ],
        [
         113.392,
         35.507
        ],
        [
         113.439,
         35.507
        ],
        [
         113.499,
         35.532
        ],
        [
         113.514,
         35.574
        ],
        [
         113.558,
         35.622
        ],
        [
         113.548,
         35.657
        ],
        [
         113.578,
         35.633
        ],
        [
         113.625,
         35.633
        ],
        [
         113.623,
         35.675
        ],
        [
         113.593,
         35.692
        ],
        [
         113.588,
         35.737
        ],
        [
         113.605,
         35.798
        ],
        [
         113.602,
         35.8
        ],
        [
         113.35,
         35.8
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         115.35,
         35.8
        ],
        [
         115.336,
         35.8
        ],
        [
         115.335,
         35.797
        ],
        [
         115.35,
         35.788
        ],
        [
         115.35,
         35.556
        ],
        [
         115.345,
         35.554
        ],
        [
         115.35,
         35.525
        ],
        [
         115.35,
         35.489
        ],
        [
         115.307,
         35.48
        ],
        [
         115.237,
         35.423
        ],
        [
         115.172,
         35.427
        ],
        [
         115.126,
         35.418
        ],
        [
         115.118,
         35.4
        ],
        [
         115.092,
         35.416
        ],
        [
         115.074,
         35.374
        ],
        [
         115.043,
         35.377
        ],
        [
         114.958,
         35.261
        ],
        [
         114.929,
         35.245
        ],
        [
         114.932,
         35.198
        ],
        [
         114.861,
         35.182
        ],
        [
         114.842,
         35.151
        ],
        [
         114.883,
         35.099
        ],
        [
         114.836,
         35.077
        ],
        [
         114.819,
         35.052
        ],
        [
         114.852,
         35.042
        ],
        [
         114.824,
         35.012
        ],
        [
         114.881,
         35.004
        ],
        [
         114.924,
         34.969
        ],
        [
         114.951,
         34.99
        ],
        [
         115.008,
         34.988
        ],
        [
         115.029,
         34.972
        ],
        [
         115.075,
         35.001
        ],
        [
         115.128,
         35.005
        ],
        [
         115.157,
         34.958
        ],
        [
         115.219,
         34.96
        ],
        [
         115.205,
         34.914
        ],
        [
         115.252,
         34.906
        ],
        [
         115.239,
         34.878
        ],
        [
         115.256,
         34.845
        ],
        [
         115.317,
         34.859
        ],
        [
         115.35,
         34.843
        ],
        [
         115.35,
         35.8
        ]
       ]
      ]
     ]
    },
    "n": "山东省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.35,
         33.8
        ],
        [
         115.35,
         33.8
        ],
        [
         115.35,
         34.843
        ],
        [
         115.317,
         34.859
        ],
        [
         115.256,
         34.845
        ],
        [
         115.239,
         34.878
        ],
        [
         115.252,
         34.906
        ],
        [
         115.205,
         34.914
        ],
        [
         115.219,
         34.96
        ],
        [
         115.157,
         34.958
        ],
        [
         115.128,
         35.005
        ],
        [
         115.075,
         35.001
        ],
        [
         115.029,
         34.972
        ],
        [
         115.008,
         34.988
        ],
        [
         114.951,
         34.99
        ],
        [
         114.924,
         34.969
        ],
        [
         114.881,
         35.004
        ],
        [
         114.824,
         35.012
        ],
        [
         114.852,
         35.042
        ],
        [
         114.819,
         35.052
        ],
        [
         114.836,
         35.077
        ],
        [
         114.883,
         35.099
        ],
        [
         114.842,
         35.151
        ],
        [
         114.861,
         35.182
        ],
        [
         114.932,
         35.198
        ],
        [
         114.929,
         35.245
        ],
        [
         114.958,
         35.261
        ],
        [
         115.043,
         35.377
        ],
        [
         115.074,
         35.374
        ],
        [
         115.092,
         35.416
        ],
        [
         115.118,
         35.4
        ],
        [
         115.126,
         35.418
        ],
        [
         115.172,
         35.427
        ],
        [
         115.237,
         35.423
        ],
        [
         115.307,
         35.48
        ],
        [
         115.35,
         35.489
        ],
        [
         115.35,
         35.525
        ],
        [
         115.345,
         35.554
        ],
        [
         115.35,
         35.556
        ],
        [
         115.35,
         35.788
        ],
        [
         115.335,
         35.797
        ],
        [
         115.336,
         35.8
        ],
        [
         113.602,
         35.8
        ],
        [
         113.605,
         35.798
        ],
        [
         113.588,
         35.737
        ],
        [
         113.593,
         35.692
        ],
        [
         113.623,
         35.675
        ],
        [
         113.625,
         35.633
        ],
        [
         113.578,
         35.633
        ],
        [
         113.548,
         35.657
        ],
        [
         113.558,
         35.622
        ],
        [
         113.514,
         35.574
        ],
        [
         113.499,
         35.532
        ],
        [
         113.439,
         35.507
        ],
        [
         113.392,
         35.507
        ],
        [
         113.35,
         35.47
        ],
        [
         113.35,
         33.8
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        113.35,
        34.959
       ],
       [
        113.399,
        34.974
       ],
       [
        113.489,
        34.978
       ],
       [
        113.617,
        34.954
       ],
       [
        113.784,
        34.902
       ],
       [
        113.9,
        34.895
       ],
       [
        113.965,
        34.931
       ],
       [
        114.156,
        34.936
       ],
       [
        114.473,
        34.91
       ],
       [
        114.681,
        34.928
       ],
       [
        114.798,
        34.978
       ],
       [
        114.831,
        35.02
       ]
      ]
     ]
    },
    "n": "Huang"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       114.838,
       35.02
      ],
      [
       114.862,
       35.061
      ],
      [
       114.866,
       35.145
      ],
      [
       114.905,
       35.229
      ],
      [
       115.014,
       35.33
      ],
      [
       115.136,
       35.406
      ],
      [
       115.272,
       35.459
      ],
      [
       115.34,
       35.503
      ],
      [
       115.341,
       35.538
      ],
      [
       115.35,
       35.551
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   113.35,
   33.8,
   115.35,
   35.8
  ]
 }
};
