// 本文件由 tools/build.py 自动生成（切片 juehua），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["juehua"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["juehua"] = {
 "meta": {
  "kind": "county",
  "region": "liaoxi",
  "title": "觉华岛·辽西海防枢纽",
  "dossier_label": "觉华岛",
  "subtitle": "天启二年至五年 (1622–1625) · 宁远犄角与广宁后据岛",
  "primary_place": "juehua",
  "dossier_event": "event:juehua_garrison",
  "back": "枢纽",
  "lead": "觉华岛是辽西海上的要津。广宁失陷后祖大寿退走觉华岛；孙承宗督师经略辽西，定「筑宁远要害，与觉华岛相犄角」之策，令游击祖大寿等守觉华岛、副将赵率教守前屯，以为宁远海上声援与储粮之所。",
  "parties_note": "觉华岛之设防，明、清、现代三方侧重不同：明方记孙承宗经略、辽西渐有起色；清方记其始终为据守之局；现代综述重觉华岛作为宁远—觉华犄角体系的海防意义。系统不裁决，只并列。",
  "subject_names": {
   "event:juehua_strategy": "孙承宗犄角战略",
   "event:juehua_garrison": "祖大寿守觉华岛",
   "event:juehua_guangning_retreat": "广宁败后走觉华岛",
   "place:juehua": "觉华岛",
   "place:ningyuan": "宁远",
   "place:qiantun": "前屯",
   "place:guangning": "广宁",
   "place:shanhaiguan": "山海关",
   "person:zu_dashou": "祖大寿",
   "person:sun_chengzong": "孙承宗",
   "person:zhao_shuaijiao": "赵率教",
   "person:wang_zaijin": "王在晋",
   "person:yuan_chonghuan": "袁崇焕",
   "person:ma_shilong": "马世龙"
  },
  "page": "county.html?scene=juehua",
  "key": "juehua",
  "scene_id": "juehua",
  "vocab_pack": "ming_qing",
  "terrain_grid": "liaodong"
 },
 "sources": [
  {
   "id": "mingtongjian",
   "title": "明通鉴",
   "juan": "卷八十二（天启二年·广宁之败与孙承宗经略）",
   "compiler": "夏燮（清）",
   "compiled_year": 1873,
   "stance": "private_synthesis",
   "stance_label": "私修编年·综合",
   "distance_label": "成书清同治十二年（1873），距事约 250 年，综合实录奏议并附考异",
   "party": "二手综述",
   "color": "#6C7A89",
   "note": "夏燮私修明编年，记广宁之败后祖大寿走觉华岛、孙承宗经略辽西、令祖大寿守觉华岛与宁远犄角，平允而属后世综合。"
  },
  {
   "id": "mingshi",
   "title": "明史",
   "juan": "卷二百四十八·孙承宗传／卷二百五十九·袁崇焕传",
   "compiler": "张廷玉等",
   "compiled_year": 1739,
   "stance": "official_later_dynasty",
   "stance_label": "后朝官修",
   "distance_label": "成书 1739，距事件约 110 年",
   "party": "清修·明臣",
   "color": "#8C6239",
   "note": "清修官史，记孙承宗督师、宁远觉华犄角之部署，偏清方视角。"
  },
  {
   "id": "modern",
   "title": "现代明史学界综论",
   "juan": "综合研究（关宁锦防线、辽西海防研究）",
   "compiler": "学界综论",
   "compiled_year": 2000,
   "stance": "modern_scholarship",
   "stance_label": "现代学界",
   "distance_label": "现代研究，距事约 390 年，基于多方史料互证",
   "party": "学界",
   "color": "#3C78D8",
   "note": "现代明清史学界对觉华岛—宁远犄角体系与辽西海防的归因与战略评估。",
   "faction": null,
   "period": "现代",
   "availability": "synthesis",
   "url": "",
   "cached_text": ""
  }
 ],
 "places": [
  {
   "id": "juehua",
   "name": "觉华岛",
   "lon": 120.55,
   "lat": 40.55,
   "type": "island",
   "modern": "辽宁兴城东南海中（今菊花岛）",
   "note": "辽西海上要津，孙承宗经略时祖大寿驻守，与宁远犄角",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "ningyuan",
   "name": "宁远",
   "lon": 120.75,
   "lat": 40.75,
   "type": "city",
   "modern": "辽宁兴城市",
   "note": "关宁锦防线核心，与觉华岛犄角",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "qiantun",
   "name": "前屯",
   "lon": 120.05,
   "lat": 40.05,
   "type": "fortress",
   "modern": "辽宁绥中前屯",
   "note": "赵率教守前屯，护宁远侧翼",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "guangning",
   "name": "广宁",
   "lon": 122.0,
   "lat": 41.7,
   "type": "city",
   "modern": "辽宁北镇",
   "note": "天启二年失陷，明军退走觉华岛",
   "_global_id": "guangning",
   "_other_scenes": [
    "jinzhou",
    "liaoyang",
    "shenyang"
   ],
   "elev": 54
  },
  {
   "id": "shanhaiguan",
   "name": "山海关",
   "lon": 119.77,
   "lat": 39.97,
   "type": "fortress",
   "modern": "河北秦皇岛山海关",
   "note": "孙承宗督师镇守之处",
   "_global_id": "shanhaiguan",
   "_other_scenes": [
    "guangning",
    "jinzhou",
    "ningyuan"
   ],
   "elev": null,
   "off_grid": true
  }
 ],
 "persons": [
  {
   "id": "zu_dashou",
   "name": "祖大寿",
   "side": "ming",
   "role": "总兵",
   "note": "辽西明军主将，广宁败后走觉华岛；孙承宗令其守觉华岛。",
   "influence": 1,
   "_global_id": "zu_dashou",
   "_other_scenes": [
    "jinzhou",
    "ningyuan"
   ]
  },
  {
   "id": "sun_chengzong",
   "name": "孙承宗",
   "side": "ming",
   "role": "督师",
   "note": "天启二年后督师山海关，定辽西防御，主张宁远与觉华岛犄角。",
   "influence": 1
  },
  {
   "id": "zhao_shuaijiao",
   "name": "赵率教",
   "side": "ming",
   "role": "副将",
   "note": "孙承宗令其守前屯，与祖大寿守觉华岛相呼应。",
   "influence": 1
  },
  {
   "id": "wang_zaijin",
   "name": "王在晋",
   "side": "ming",
   "role": "经略",
   "note": "广宁败后主张八里铺筑重关，为孙承宗所代。",
   "influence": 1
  },
  {
   "id": "yuan_chonghuan",
   "side": "ming",
   "role": "宁前兵备佥事",
   "note": "请守宁远，与觉华岛犄角之策相成。",
   "influence": 0
  },
  {
   "id": "ma_shilong",
   "name": "马世龙",
   "side": "ming",
   "role": "总兵",
   "note": "孙承宗所任总兵官，统辽西诸将。",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "JH001",
   "subject": "event:juehua_guangning_retreat",
   "predicate": "全军覆没",
   "value_text": "是时全军覆没",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "guangning",
   "source": "mingtongjian",
   "quote": "是时全军覆没。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "广宁之败，明军全军覆没。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "JH002",
   "subject": "person:zu_dashou",
   "predicate": "走",
   "value_text": "大寿走觉华岛",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "juehua",
   "source": "mingtongjian",
   "quote": "大寿走觉华岛",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "祖大寿败走觉华岛。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "JH003",
   "subject": "person:wang_zaijin",
   "predicate": "请降",
   "value_text": "得功请降",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "",
   "source": "mingtongjian",
   "quote": "得功请降。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "得功为化贞心腹，请降。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "JH004",
   "subject": "person:sun_chengzong",
   "predicate": "督师",
   "value_text": "自请督师",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "shanhaiguan",
   "source": "mingtongjian",
   "quote": "因言“在晋不足任”，自请督师。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "孙承宗自请督师辽西。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "JH005",
   "subject": "event:juehua_strategy",
   "predicate": "筑城策略",
   "value_text": "筑宁远要害，与觉华岛相犄角",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "ningyuan",
   "source": "mingtongjian",
   "quote": "筑重城不若筑宁远要害，与觉华岛相犄角。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "孙承宗主张筑宁远城与觉华岛犄角。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "JH006",
   "subject": "event:juehua_garrison",
   "predicate": "守将",
   "value_text": "令游击祖大寿等守觉华岛",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "juehua",
   "source": "mingtongjian",
   "quote": "令游击祖大寿等守觉华岛",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "祖大寿守觉华岛。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "JH007",
   "subject": "person:zhao_shuaijiao",
   "predicate": "守",
   "value_text": "副将赵率教守前屯",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "qiantun",
   "source": "mingtongjian",
   "quote": "副将赵率教守前屯。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "赵率教守前屯。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "JH008",
   "subject": "person:ma_shilong",
   "predicate": "任总兵官",
   "value_text": "以马世龙为总兵官",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "",
   "source": "mingtongjian",
   "quote": "以马世龙为总兵官",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "马世龙任总兵官。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "JH009",
   "subject": "event:juehua_garrison",
   "predicate": "军制",
   "value_text": "定军制，申明职守",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "shanhaiguan",
   "source": "mingtongjian",
   "quote": "承宗既至关，定军制，申明职守",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "孙承宗定军制。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "JH010",
   "subject": "event:juehua_garrison",
   "predicate": "兵力",
   "value_text": "练兵十一万",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "",
   "source": "mingtongjian",
   "quote": "练兵十一万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "孙承宗练兵十一万。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "JH011",
   "subject": "event:juehua_garrison",
   "predicate": "装备",
   "value_text": "造铠仗数百万",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "",
   "source": "mingtongjian",
   "quote": "造铠仗数百万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "造铠仗数百万。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "JH012",
   "subject": "place:ningyuan",
   "predicate": "屯田",
   "value_text": "开屯田五千顷",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "ningyuan",
   "source": "mingtongjian",
   "quote": "开屯田五千顷",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "开屯田五千顷。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "JH013",
   "subject": "event:juehua_garrison",
   "predicate": "海防犄角体系的战略意义",
   "value_text": "现代学界认为，孙承宗以宁远为陆枢、觉华岛为海翼的犄角部署，是广宁溃败后明军在辽西重建正面、保全储粮与海运的关键，使关宁锦防线得以渐次成形。",
   "time": {
    "era_text": "天启二年至五年",
    "start": "1622-01-01",
    "end": "1625-12-31",
    "gregorian_year": 1622
   },
   "place": "juehua",
   "source": "modern",
   "quote": "觉华与宁远相犄角，辽西始有可守之局。",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.85,
   "scale": "province",
   "note": "亦有其局限：觉华岛孤悬海上，后于宁远之战同期遭清军绕袭，暴露了海疆防御的薄弱。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "JH014",
   "subject": "event:juehua_guangning_retreat",
   "predicate": "广宁败后海上依托的细节",
   "value_text": "广宁之败后祖大寿等明军残部退走觉华岛的具体兵力、补给与后继部署，明、清、现代三方记载详略与侧重不一，未见统一核定。",
   "time": {
    "era_text": "天启二年正月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "juehua",
   "source": "mingtongjian",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "county",
   "note": "广宁溃兵走觉华岛后如何整补、与孙承宗经略如何衔接，三方叙事侧重不同",
   "lead": {
    "where": "《明通鉴》卷八十二／《明史·孙承宗传》／现代辽西海防研究",
    "skills": [
     "古文",
     "史料考异"
    ],
    "accept": "整理广宁败后明军退走觉华岛及孙承宗经略的各方记载，标出史料政治立场影响",
    "effort": "2 周"
   },
   "_party": "二手综述",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "JH014"
 ],
 "events": [
  {
   "id": "juehua_strategy",
   "subject": "event:juehua_strategy",
   "year": 1622,
   "era": "天启二年",
   "title": "孙承宗经略：筑宁远要害，与觉华岛相犄角",
   "kind": "战略",
   "text": "广宁失陷后，经略王在晋主张于八里铺筑重关。孙承宗巡关相度，还奏「筑重城不若筑宁远要害，与觉华岛相犄角」，并言在晋不足任，自请督师。觉华岛自此成为宁远—觉华海上犄角防御体系的一环。"
  },
  {
   "id": "juehua_garrison",
   "subject": "event:juehua_garrison",
   "year": 1622,
   "era": "天启二年至五年",
   "title": "令祖大寿守觉华岛，赵率教守前屯",
   "kind": "驻防",
   "text": "孙承宗既督师，定军制，以马世龙为总兵官，令游击祖大寿等守觉华岛，副将赵率教守前屯。前后筑城堡数十，练兵十一万，觉华岛为辽西海上储粮与驻兵之所，与宁远互为声援。"
  },
  {
   "id": "juehua_guangning_retreat",
   "subject": "event:juehua_guangning_retreat",
   "year": 1622,
   "era": "天启二年正月",
   "title": "广宁败后祖大寿走觉华岛",
   "kind": "战事",
   "text": "天启二年广宁之战，明军全军覆没，祖大寿退走觉华岛，孙得功请降。觉华岛成为广宁溃败后明军残部在辽西海上的依托。"
  }
 ],
 "edges": [],
 "faction_geo": {
  "donglin": {
   "name": "东林党（清流）",
   "color": "#1B7A5A",
   "geo_note": "东林以江南无锡东林书院为舆论中心（顾宪成、高攀龙），成员近三成出自南直隶，余布各省清流。",
   "points": [
    {
     "name": "无锡",
     "lon": 120.3,
     "lat": 31.57,
     "note": "顾宪成故里、东林书院所在，今江苏无锡",
     "resolved": true
    },
    {
     "name": "常州",
     "lon": 119.97,
     "lat": 31.81,
     "note": "吴中行故里，今江苏常州",
     "resolved": true
    },
    {
     "name": "苏州",
     "lon": null,
     "lat": null,
     "note": "",
     "resolved": false
    }
   ]
  },
  "eunuch": {
   "name": "阉党（魏忠贤集团）",
   "color": "#7B241C",
   "geo_note": "阉党依附魏忠贤（北直隶/河间）与客氏，核心是内廷宦官+北直隶依附官僚。",
   "points": [
    {
     "name": "幽州",
     "lon": 116.4,
     "lat": 39.9,
     "note": "今北京",
     "resolved": true
    },
    {
     "name": "赫图阿拉",
     "lon": 124.7,
     "lat": 41.6,
     "note": "后金/满洲发祥地，今辽宁新宾",
     "resolved": true
    }
   ]
  },
  "zhe_dang": {
   "name": "浙党",
   "color": "#B9770E",
   "geo_note": "浙党以沈一贯、方从哲为首的浙籍官僚，主导万历后期中枢。",
   "points": [
    {
     "name": "杭州",
     "lon": 120.15,
     "lat": 30.27,
     "note": "浙党核心，今浙江杭州",
     "resolved": true
    }
   ]
  },
  "chu_dang": {
   "name": "楚党",
   "color": "#CA6F1E",
   "geo_note": "楚党以楚籍官僚官应震、吴亮嗣为首，与浙党合攻东林。",
   "points": [
    {
     "name": "武昌",
     "lon": 114.3,
     "lat": 30.59,
     "note": "楚党核心，今湖北武汉",
     "resolved": true
    }
   ]
  },
  "qi_dang": {
   "name": "齐党",
   "color": "#B7950B",
   "geo_note": "齐党以齐籍官僚亓诗教、周永春为首，多居主兵中枢。",
   "points": [
    {
     "name": "济南",
     "lon": 117.0,
     "lat": 36.65,
     "note": "齐党核心，今山东济南",
     "resolved": true
    }
   ]
  },
  "xuan_kun": {
   "name": "宣党 / 昆党",
   "color": "#A04000",
   "geo_note": "宣党（汤宾尹/宣城）与昆党（顾天埈/昆山）小集团，主要影响科举京察。",
   "points": [
    {
     "name": "宣城",
     "lon": 118.75,
     "lat": 30.94,
     "note": "宣党核心，今安徽宣城",
     "resolved": true
    },
    {
     "name": "昆山",
     "lon": 120.98,
     "lat": 31.39,
     "note": "昆党核心，今江苏昆山",
     "resolved": true
    }
   ]
  },
  "yan_shang": {
   "name": "盐商 / 盐政利益",
   "color": "#2874A6",
   "geo_note": "盐商/盐政利益以两淮（扬州）盐商及其利益相关官僚为主体。",
   "points": [
    {
     "name": "扬州",
     "lon": 119.41,
     "lat": 32.39,
     "note": "今江苏扬州",
     "resolved": true
    }
   ]
  },
  "nei_guan": {
   "name": "内臣 / 宦官（独立于阉党）",
   "color": "#5D6D7E",
   "geo_note": "内臣/宦官系统独立于阉党，监军镇守矿税监多出自内廷，北直隶为活动中心。",
   "points": [
    {
     "name": "幽州",
     "lon": 116.4,
     "lat": 39.9,
     "note": "今北京",
     "resolved": true
    }
   ]
  },
  "feng_jiang": {
   "name": "封疆大吏 / 辽东经略系",
   "color": "#C0392B",
   "geo_note": "封疆大吏/辽东经略系据辽东边镇（辽阳、沈阳），对败绩诿过、战功夸张。",
   "points": [
    {
     "name": "辽阳",
     "lon": 123.43,
     "lat": 41.8,
     "note": "唐安东都护府，今辽宁辽阳",
     "resolved": true
    },
    {
     "name": "沈阳",
     "lon": 123.43,
     "lat": 41.8,
     "note": "辽沈战役·沈阳解放",
     "resolved": true
    }
   ]
  }
 }
};
