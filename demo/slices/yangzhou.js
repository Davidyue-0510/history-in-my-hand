// 本文件由 tools/build.py 自动生成（切片 yangzhou），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["yangzhou"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["yangzhou"] = {
 "meta": {
  "kind": "battle",
  "region": "jiangnan",
  "title": "扬州十日·乙酉之难",
  "dossier_label": "扬州",
  "subtitle": "顺治二年 (1645) · 清军南下屠城",
  "primary_place": "yangzhou",
  "dossier_event": "event:yangzhou_tu",
  "back": "江南",
  "lead": "顺治二年四月，清豫亲王多铎率军南下攻扬州，南明兵部尚书史可法回扬州筹防，檄诸镇援，仅刘肇基等少数至，孤城拒守。二十四日红夷大炮轰城，二十五日总攻破城，史可法自刎不遂被执，劝降不应，请无杀扬州人，遂被杀。多铎破城后下令屠城；明遗民王秀楚《扬州十日记》记屠城五日、遇害八十万，清方如雍正《扬州府志》仅云「屠杀甚惨」不列数，立场一在控诉一在讳饰。五日后封刀，多铎谕南京「维扬可鉴」，旋入南京，弘光灭。",
  "parties_note": "扬州十日三方立场尖锐：明遗民（扬州十日记）控诉屠城八十万；清方官史讳饰人数；第三方（卫匡国鞑靼战纪）记全城洗劫而未提八十万。系统不裁决，只并列。",
  "subject_names": {
   "event:yangzhou_shou": "史可法守扬州",
   "event:yangzhou_po": "城破殉国",
   "event:yangzhou_tu": "多铎屠城",
   "event:yangzhou_jiang": "谕南京·弘光灭",
   "place:yangzhou": "扬州",
   "place:nanjing": "南京",
   "place:guazhou": "瓜洲",
   "person:shi_kafa": "史可法",
   "person:duoduo": "多铎",
   "person:liu_zhaoji": "刘肇基",
   "person:hongguang": "弘光帝",
   "person:yangzhou_jiri": "王秀楚"
  },
  "page": "yangzhou.html",
  "key": "yangzhou",
  "scene_id": "yangzhou",
  "vocab_pack": "ming_qing",
  "terrain_grid": "liaodong"
 },
 "sources": [
  {
   "id": "ming_ji_nanlue",
   "title": "明季南略",
   "juan": "卷三—四·扬州诸条",
   "compiler": "计六奇（明遗民）",
   "compiled_year": 1670,
   "stance": "third_party_internal",
   "stance_label": "明遗民私修",
   "distance_label": "明遗民亲历记事，距事约 20 年",
   "party": "明·私修",
   "faction": null,
   "color": "#5B7C99",
   "note": "计六奇记扬州城破、史可法死、屠杀甚惨。"
  },
  {
   "id": "yangzhou_shiri_ji",
   "title": "扬州十日记",
   "juan": "全帙",
   "compiler": "王秀楚（明遗民）",
   "compiled_year": 1646,
   "stance": "third_party_internal",
   "stance_label": "明遗民亲历",
   "distance_label": "亲历记述，距事极近",
   "party": "明·私修",
   "faction": null,
   "color": "#5B7C99",
   "note": "记屠城五日、遇害八十万人，明遗民控诉视角。"
  },
  {
   "id": "qing_shizu_shilu",
   "title": "清实录·世祖",
   "juan": "顺治二年诸卷",
   "compiler": "清官修",
   "compiled_year": 1650,
   "stance": "official_later_dynasty",
   "stance_label": "清修官史",
   "distance_label": "清修官史，距事约数年",
   "party": "清修官史",
   "faction": null,
   "color": "#8C6239",
   "note": "清方记载，讳饰屠城规模，仅称「屠杀甚惨」。"
  },
  {
   "id": "wiki_yangzhou",
   "title": "维基百科·扬州十日",
   "juan": "现代综述条目",
   "compiler": "维基百科",
   "compiled_year": 2024,
   "stance": "modern_scholarship",
   "stance_label": "现代学界",
   "distance_label": "现代研究，距事约 380 年",
   "party": "学界",
   "faction": null,
   "color": "#3C78D8",
   "note": "现代综述，并列明遗民与清方记载立场差异。"
  }
 ],
 "places": [
  {
   "id": "yangzhou",
   "name": "扬州",
   "lon": 119.4,
   "lat": 32.4,
   "type": "city",
   "modern": "江苏扬州",
   "note": "史可法拒守、城破屠戮处。",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "nanjing",
   "name": "南京",
   "lon": 118.8,
   "lat": 32.0,
   "type": "city",
   "modern": "应天/金陵",
   "note": "弘光朝廷、清军入城处。",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "guazhou",
   "name": "瓜洲",
   "lon": 119.6,
   "lat": 32.4,
   "type": "town",
   "modern": "扬州南长江畔",
   "note": "清军渡江处。",
   "elev": null,
   "off_grid": true
  }
 ],
 "persons": [
  {
   "id": "shi_kafa",
   "name": "史可法",
   "side": "ming",
   "role": "南明兵部尚书",
   "note": "守扬州殉国。",
   "influence": 1
  },
  {
   "id": "duoduo",
   "name": "多铎",
   "side": "qing",
   "role": "清豫亲王",
   "note": "攻扬州、下令屠城。",
   "influence": 0
  },
  {
   "id": "liu_zhaoji",
   "name": "刘肇基",
   "side": "ming",
   "role": "南明将",
   "note": "赴援扬州。",
   "influence": 0
  },
  {
   "id": "hongguang",
   "name": "弘光帝朱由崧",
   "side": "ming",
   "role": "南明帝",
   "note": "南京降，政权旋灭。",
   "influence": 0
  },
  {
   "id": "yangzhou_jiri",
   "name": "王秀楚",
   "side": "ming",
   "role": "明遗民",
   "note": "《扬州十日记》作者，记屠城八十万。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SX001_M5",
   "subject": "event:yangzhou_shou",
   "predicate": "爆发",
   "value_text": "清军南下攻扬州",
   "time": {
    "era_text": "顺治二年四月",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "yangzhou",
   "source": "ming_ji_nanlue",
   "quote": "清豫亲王多铎率军南下攻扬州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "多铎四月十四日南下",
   "_party": "明·私修",
   "_faction": null
  },
  {
   "id": "SX002_M5",
   "subject": "event:yangzhou_shou",
   "predicate": "集兵",
   "value_text": "史可法孤城拒守",
   "time": {
    "era_text": "顺治二年四月",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "yangzhou",
   "source": "ming_ji_nanlue",
   "quote": "南明兵部尚书史可法孤城拒守",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "檄诸镇援，仅刘肇基等少数至",
   "_party": "明·私修",
   "_faction": null
  },
  {
   "id": "SX003_M4",
   "subject": "event:yangzhou_po",
   "predicate": "破城",
   "value_text": "清军炮轰破城",
   "time": {
    "era_text": "顺治二年四月廿五",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "yangzhou",
   "source": "ming_ji_nanlue",
   "quote": "二十四日调红夷大炮轰城，二十五日总攻破城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "多铎四月十八日兵临扬州",
   "_party": "明·私修",
   "_faction": null
  },
  {
   "id": "SX004_M5",
   "subject": "person:shi_kafa",
   "predicate": "殉国",
   "value_text": "城破被俘，不屈被杀",
   "time": {
    "era_text": "顺治二年四月廿五",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "yangzhou",
   "source": "ming_ji_nanlue",
   "quote": "城破自刎不遂被俘，大呼「我史督师也」，劝降不应",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "曰「请无杀扬州人」",
   "_party": "明·私修",
   "_faction": null
  },
  {
   "id": "SX005_M5",
   "subject": "event:yangzhou_tu",
   "predicate": "屠城",
   "value_text": "清军屠城十日",
   "time": {
    "era_text": "顺治二年四月",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "yangzhou",
   "source": "yangzhou_shiri_ji",
   "quote": "清军屠城十日，史称扬州十日",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "多铎破城后下令屠城",
   "_party": "明·私修",
   "_faction": null
  },
  {
   "id": "SX006_M5",
   "subject": "event:yangzhou_tu",
   "predicate": "遇害人数",
   "value_text": "遇害八十万人",
   "time": {
    "era_text": "顺治二年四月",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "yangzhou",
   "source": "yangzhou_shiri_ji",
   "quote": "《扬州十日记》记屠城五日、遇害八十万人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.5,
   "scale": "province",
   "note": "明遗民王秀楚记载，立场在控诉",
   "_party": "明·私修",
   "_faction": null
  },
  {
   "id": "SX007_M4",
   "subject": "event:yangzhou_tu",
   "predicate": "遇害人数",
   "value_text": "屠杀甚惨，不列数",
   "time": {
    "era_text": "顺治二年四月",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "yangzhou",
   "source": "qing_shizu_shilu",
   "quote": "清方记载如雍正《扬州府志》仅云「屠杀甚惨」不列数",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "清方立场在讳饰",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SX008_M5",
   "subject": "event:yangzhou_tu",
   "predicate": "遇害人数",
   "value_text": "全城洗劫，未提八十万",
   "time": {
    "era_text": "顺治二年四月",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "yangzhou",
   "source": "wiki_yangzhou",
   "quote": "清《鞑靼战纪》（卫匡国）记全城洗劫而未提八十万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "立场在讳饰",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SX009_M5",
   "subject": "event:yangzhou_tu",
   "predicate": "伤亡",
   "value_text": "清军伤亡上千、四军官阵亡",
   "time": {
    "era_text": "顺治二年四月",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "yangzhou",
   "source": "ming_ji_nanlue",
   "quote": "攻城清军亦伤亡上千、四军官阵亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "五日后豫王令封刀",
   "_party": "明·私修",
   "_faction": null
  },
  {
   "id": "SX010_M5",
   "subject": "event:yangzhou_tu",
   "predicate": "遇害人数",
   "value_text": "八十万 vs 不列数 vs 未提",
   "time": {
    "era_text": "顺治二年四月",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "yangzhou",
   "source": "yangzhou_shiri_ji",
   "quote": "《扬州十日记》八十万；清方不列数；《鞑靼战纪》未提",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "province",
   "note": "三方史料对遇害人数分歧巨大，不强行合并",
   "lead": {
    "where": "扬州十日遇害人数",
    "skills": [
     "史料考据",
     "量化分析"
    ],
    "accept": "需综合明遗民、清方、西人记载，给出可信区间"
   },
   "_party": "明·私修",
   "_faction": null
  },
  {
   "id": "YZJ01",
   "subject": "event:yangzhou_jiang",
   "predicate": "后续",
   "value_text": "五日后多铎封刀，谕南京「维扬可鉴」以震江南；旋入南京，弘光政权旋灭，扬州十日与嘉定三屠并称清初江南屠城之惨。",
   "time": {
    "era_text": "顺治二年五月",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "nanjing",
   "source": "qing_shizu_shilu",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "empire",
   "note": "多铎入南京、弘光降",
   "_party": "清修官史",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:yangzhou_tu|遇害人数",
   "subject": "event:yangzhou_tu",
   "predicate": "遇害人数",
   "kind": "record_vs_record",
   "count": 3,
   "spread": null,
   "assertion_ids": [
    "SX006_M5",
    "SX007_M4",
    "SX008_M5"
   ]
  }
 ],
 "gaps": [
  "SX010_M5"
 ],
 "events": [
  {
   "id": "yangzhou_shou",
   "subject": "event:yangzhou_shou",
   "year": 1645,
   "era": "顺治二年四月",
   "title": "史可法孤守扬州",
   "kind": "守城",
   "text": "顺治二年（南明弘光元年）四月，清豫亲王多铎率军南下攻扬州，南明兵部尚书史可法回扬州筹防，檄诸镇援，仅刘肇基等少数至，孤城拒守。"
  },
  {
   "id": "yangzhou_po",
   "subject": "event:yangzhou_po",
   "year": 1645,
   "era": "顺治二年四月廿五",
   "title": "城破，史可法殉国",
   "kind": "破城",
   "text": "四月二十四日调红夷大炮轰城，二十五日总攻破城。史可法自刎不遂被俘，大呼「我史督师也」，劝降不应，曰「请无杀扬州人」，被杀。"
  },
  {
   "id": "yangzhou_tu",
   "subject": "event:yangzhou_tu",
   "year": 1645,
   "era": "顺治二年四月廿五后",
   "title": "多铎屠城，明遗民八十万 vs 清方讳饰",
   "kind": "屠戮",
   "text": "多铎破城后下令屠城。明遗民王秀楚《扬州十日记》记屠城五日、遇害八十万人；清方如雍正《扬州府志》仅云「屠杀甚惨」不列数，卫匡国《鞑靼战纪》记全城洗劫而未提八十万，立场一在控诉、一在讳饰。攻城清军亦伤亡上千、四军官阵亡。"
  },
  {
   "id": "yangzhou_jiang",
   "subject": "event:yangzhou_jiang",
   "year": 1645,
   "era": "顺治二年五月",
   "title": "多铎谕南京，弘光灭",
   "kind": "后续",
   "text": "五日后豫王令封刀。多铎谕南京「维扬可鉴」以震江南；旋入南京，弘光政权旋灭。扬州十日与嘉定三屠并为清初江南屠城之惨。"
  }
 ],
 "edges": [],
 "control": []
};
