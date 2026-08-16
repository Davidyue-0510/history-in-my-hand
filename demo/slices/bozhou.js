// 本文件由 tools/build.py 自动生成（切片 bozhou），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["bozhou"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["bozhou"] = {
 "meta": {
  "kind": "battle",
  "region": "chuan_gui",
  "title": "播州之役·平播之役",
  "dossier_label": "播州",
  "subtitle": "万历二十七年至二十八年 (1599–1600) · 平播改土归流",
  "primary_place": "bozhou",
  "dossier_event": "event:bozhou_hailong",
  "back": "川贵",
  "lead": "播州杨氏自唐末割据，明初封宣慰使。杨应龙袭位后与五司七姓结怨，子为质死于重庆，遂叛。万历二十八年李化龙督八路明军平播，破海龙囤，杨应龙自缢。明废播州土司，分设遵义、平越二府，西南改土归流。",
  "parties_note": "播州之役以明方（平播全书/明史）叙事为主，清修明史亦记其详；现代综述重其改土归流之财政与西南格局影响。系统不裁决，只并列。",
  "subject_names": {
   "event:bozhou_qijun": "杨应龙起事",
   "event:bozhou_pingbo": "八路平播",
   "event:bozhou_hailong": "破海龙囤",
   "place:bozhou": "播州",
   "place:qijiang": "綦江",
   "place:hailongtun": "海龙囤",
   "place:chongqing": "重庆",
   "person:yang_yinglong": "杨应龙",
   "person:li_hualong": "李化龙",
   "person:guo_zizhang": "郭子章",
   "person:liu_ying": "刘綎",
   "person:yang_chaozong": "杨朝栋",
   "person:tian_cifeng": "田雌凤",
   "person:wu_guang": "吴广",
   "person:yang_kezhou": "杨可栋"
  },
  "page": "bozhou.html",
  "key": "bozhou",
  "scene_id": "bozhou",
  "vocab_pack": "ming_qing",
  "terrain_grid": "liaodong"
 },
 "sources": [
  {
   "id": "mingshi_bozhou",
   "title": "明史·列传第二百·四川土司二",
   "juan": "卷三百十二",
   "compiler": "张廷玉等（清）",
   "compiled_year": 1739,
   "stance": "official_later_dynasty",
   "stance_label": "清修官史",
   "distance_label": "成书 1739，距事约 140 年",
   "party": "清修官史",
   "faction": null,
   "color": "#8C6239",
   "note": "清修官史记杨应龙、平播过程，为播州之役主源。"
  },
  {
   "id": "pingbo_quanshu",
   "title": "平播全书",
   "juan": "全帙",
   "compiler": "李化龙（明）",
   "compiled_year": 1601,
   "stance": "third_party_internal",
   "stance_label": "明·平播总指挥私纂",
   "distance_label": "平播后次年成书，距事极近",
   "party": "明·封疆奏议",
   "faction": "feng_jiang",
   "color": "#6B8E23",
   "note": "李化龙辑平播公文，明方平播叙事之详备者。"
  },
  {
   "id": "wiki_bozhou",
   "title": "维基百科·播州之役",
   "juan": "现代综述条目",
   "compiler": "维基百科",
   "compiled_year": 2024,
   "stance": "modern_scholarship",
   "stance_label": "现代学界",
   "distance_label": "现代研究，距事约 420 年",
   "party": "学界",
   "faction": null,
   "color": "#3C78D8",
   "note": "现代综述，汇辑明史、平播全书、平播始末、万历武功录与考古报告。"
  }
 ],
 "places": [
  {
   "id": "bozhou",
   "name": "播州",
   "lon": 106.93,
   "lat": 27.71,
   "type": "prefecture",
   "modern": "贵州遵义",
   "note": "杨氏土司世袭之地，平播后改流",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "qijiang",
   "name": "綦江",
   "lon": 106.66,
   "lat": 29.03,
   "type": "county",
   "modern": "重庆綦江",
   "note": "万历二十七年杨应龙攻陷綦江",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "hailongtun",
   "name": "海龙囤",
   "lon": 106.83,
   "lat": 27.8,
   "type": "fortress",
   "modern": "遵义汇川海龙屯",
   "note": "杨应龙最后据点，明军破囤处",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "chongqing",
   "name": "重庆",
   "lon": 106.55,
   "lat": 29.56,
   "type": "city",
   "modern": "重庆",
   "note": "杨可栋为质死于重庆",
   "elev": null,
   "off_grid": true
  }
 ],
 "persons": [
  {
   "id": "yang_yinglong",
   "name": "杨应龙",
   "side": "bozhou",
   "role": "播州宣慰使",
   "note": "世袭播州土司，叛明，败死。",
   "influence": 0
  },
  {
   "id": "li_hualong",
   "name": "李化龙",
   "side": "ming",
   "role": "四川总督节制三省",
   "note": "平播总指挥，事后编《平播全书》。",
   "influence": 0
  },
  {
   "id": "guo_zizhang",
   "name": "郭子章",
   "side": "ming",
   "role": "贵州巡抚",
   "note": "坐镇贵阳督后，著《平播始末》。",
   "influence": 0
  },
  {
   "id": "liu_ying",
   "name": "刘綎",
   "side": "ming",
   "role": "总兵",
   "note": "八路之一，破娄山关、攻破海龙囤最力。",
   "influence": 1
  },
  {
   "id": "yang_chaozong",
   "name": "杨朝栋",
   "side": "bozhou",
   "role": "杨应龙长子",
   "note": "统兵四五万守娄山关，败；后被俘凌迟。",
   "influence": 0
  },
  {
   "id": "tian_cifeng",
   "name": "田雌凤",
   "side": "bozhou",
   "role": "杨应龙妾",
   "note": "正妻张氏被休杀，田氏宠擅；战后被斩。",
   "influence": 0
  },
  {
   "id": "wu_guang",
   "name": "吴广",
   "side": "ming",
   "role": "总兵",
   "note": "破囤时俘杨朝栋、田氏，抢出杨应龙尸体。",
   "influence": 0
  },
  {
   "id": "yang_kezhou",
   "name": "杨可栋",
   "side": "bozhou",
   "role": "杨应龙次子（质子）",
   "note": "留重庆为质，死；播州与明关系恶化之导火索。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "BZ001",
   "subject": "event:bozhou_qijun",
   "predicate": "起因",
   "value_text": "杨应龙与五司七姓矛盾，杀妻张氏",
   "time": {
    "era_text": "万历十七年",
    "start": "1589-01-01",
    "end": "1589-12-31",
    "gregorian_year": 1589
   },
   "place": "bozhou",
   "source": "mingshi_bozhou",
   "quote": "杨应龙袭位后与地方豪族五司七姓矛盾重重",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "五司七姓上告谋反，朝廷举棋不定",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "BZ002",
   "subject": "event:bozhou_qijun",
   "predicate": "恶化",
   "value_text": "杨可栋死于重庆，杨应龙袭扰川贵湖",
   "time": {
    "era_text": "万历二十七年",
    "start": "1599-01-01",
    "end": "1599-12-31",
    "gregorian_year": 1599
   },
   "place": "chongqing",
   "source": "mingshi_bozhou",
   "quote": "杨可栋不久死于重庆，播州与明朝关系恶化",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "杨可栋为质，死因未详",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "BZ003",
   "subject": "event:bozhou_qijun",
   "predicate": "攻陷",
   "value_text": "杨应龙攻陷綦江，威胁重庆成都",
   "time": {
    "era_text": "万历二十七年六月",
    "start": "1599-01-01",
    "end": "1599-12-31",
    "gregorian_year": 1599
   },
   "place": "qijiang",
   "source": "mingshi_bozhou",
   "quote": "杨应龙攻陷綦江，威胁重庆、成都",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "万历帝震怒严令进剿",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "BZ004",
   "subject": "event:bozhou_pingbo",
   "predicate": "总指挥",
   "value_text": "李化龙为总指挥，郭子章坐镇贵阳",
   "time": {
    "era_text": "万历二十八年",
    "start": "1600-01-01",
    "end": "1600-12-31",
    "gregorian_year": 1600
   },
   "place": "bozhou",
   "source": "mingshi_bozhou",
   "quote": "以四川总督、节制三省军事李化龙为总指挥",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "贵州巡抚郭子章坐镇贵阳",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "BZ005",
   "subject": "event:bozhou_pingbo",
   "predicate": "分兵",
   "value_text": "明军分兵八路，每路约三万人",
   "time": {
    "era_text": "万历二十八年二月十二日",
    "start": "1600-01-01",
    "end": "1600-12-31",
    "gregorian_year": 1600
   },
   "place": "bozhou",
   "source": "mingshi_bozhou",
   "quote": "明军分兵八路，每路约三万人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "三成官兵七成土兵",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "BZ006",
   "subject": "person:liu_ying",
   "predicate": "战绩",
   "value_text": "破三险峒，九盘子大破杨朝栋四五万精兵",
   "time": {
    "era_text": "万历二十八年二月",
    "start": "1600-01-01",
    "end": "1600-12-31",
    "gregorian_year": 1600
   },
   "place": "bozhou",
   "source": "mingshi_bozhou",
   "quote": "刘綎一路最善战，破楠木、山羊、简台三险峒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "杨朝栋所统四五万精兵",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "BZ007",
   "subject": "event:bozhou_hailong",
   "predicate": "决战",
   "value_text": "刘綎破娄山关，与杨应龙九万大军决战大胜",
   "time": {
    "era_text": "万历二十八年二月",
    "start": "1600-01-01",
    "end": "1600-12-31",
    "gregorian_year": 1600
   },
   "place": "hailongtun",
   "source": "mingshi_bozhou",
   "quote": "攻破娄山关，与杨应龙亲率九万大军决战大胜",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "推进至海龙囤下",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "BZ008",
   "subject": "event:bozhou_hailong",
   "predicate": "破囤",
   "value_text": "刘綎部火器破土城月城内城，杨应龙自缢",
   "time": {
    "era_text": "万历二十八年",
    "start": "1600-01-01",
    "end": "1600-12-31",
    "gregorian_year": 1600
   },
   "place": "hailongtun",
   "source": "mingshi_bozhou",
   "quote": "刘綎部用先进火器带头攻破土城、月城，内城被破",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "杨应龙锁死内室放火，与两妾自缢",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "BZ009",
   "subject": "event:bozhou_pingbo",
   "predicate": "俘获",
   "value_text": "吴广俘杨朝栋、田氏，抢出杨应龙尸体",
   "time": {
    "era_text": "万历二十八年",
    "start": "1600-01-01",
    "end": "1600-12-31",
    "gregorian_year": 1600
   },
   "place": "hailongtun",
   "source": "mingshi_bozhou",
   "quote": "吴广俘杨朝栋、田氏，抢出杨应龙尸体",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "从八路出师至破囤共一百一十四日",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "BZ010",
   "subject": "event:bozhou_pingbo",
   "predicate": "改土归流",
   "value_text": "废播州土司设流官，分遵义府平越府",
   "time": {
    "era_text": "万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "bozhou",
   "source": "mingshi_bozhou",
   "quote": "废播州土司设流官，分遵义府（隶四川）、平越府（隶贵州）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "杨应龙被挫尸，子杨朝栋、弟杨兆龙凌迟，妻田雌凤斩首",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "BZ011",
   "subject": "event:bozhou_pingbo",
   "predicate": "军费",
   "value_text": "军费与善后达三百五十万两白银",
   "time": {
    "era_text": "万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "bozhou",
   "source": "mingshi_bozhou",
   "quote": "此役军费与善后达三百五十万两白银",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "与宁夏、朝鲜之役合称万历三大征，使明朝陷入财政危机",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "BZ012",
   "subject": "event:bozhou_pingbo",
   "predicate": "影响",
   "value_text": "播州城建筑几被焚毁，千年剏建一朝成墟",
   "time": {
    "era_text": "万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "bozhou",
   "source": "mingshi_bozhou",
   "quote": "千年剏建之播，一朝成墟",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "为明末民变埋下祸根",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "BZS01",
   "subject": "event:bozhou_hailong",
   "predicate": "改土归流影响",
   "value_text": "播州改土归流，分设遵义（隶四川）、平越（隶贵州）二府；军费善后达三百五十万两，与宁夏、朝鲜之役合称万历三大征，明陷财政危机",
   "time": {
    "era_text": "万历二十九年",
    "start": "1601-01-01",
    "gregorian_year": 1601,
    "end": "1601-12-31"
   },
   "place": "bozhou",
   "source": "wiki_bozhou",
   "quote": "此役军费和善后开支巨大，达三百五十万两白银。万历三大征让明朝陷入财政危机",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "现代综述对平播财政与西南格局之评估",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "BZG01",
   "subject": "event:bozhou_hailong",
   "predicate": "叙事失衡",
   "value_text": "现存记载以明方（平播全书/明史）平播凯旋叙事为主，播州杨氏与五司七姓之地方视角、起事真实动因多缺失，因果呈单向叙述",
   "time": {
    "era_text": "万历二十八年",
    "start": "1600-01-01",
    "gregorian_year": 1600,
    "end": "1600-12-31"
   },
   "place": "bozhou",
   "source": "wiki_bozhou",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "empire",
   "note": "播州方史料散佚，现存以明方凯旋叙事为主",
   "lead": {
    "where": "播州/遵义地方文书、杨氏族谱、五司七姓诉讼原卷",
    "skills": [
     "史料搜集",
     "土司文书释读"
    ],
    "accept": "补全播州方与土司视角，平衡单向凯旋叙事"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "BZG01"
 ],
 "events": [
  {
   "id": "bozhou_qijun",
   "subject": "event:bozhou_qijun",
   "year": 1599,
   "era": "万历二十七年",
   "title": "杨应龙攻陷綦江，明廷决意进剿",
   "kind": "起事",
   "text": "杨应龙与五司七姓结怨，子杨可栋为质死于重庆，播州与明关系恶化。时逢朝鲜之役四川兵虚，万历二十七年（1599）六月杨应龙攻陷綦江，威胁重庆、成都，万历帝震怒严令进剿。"
  },
  {
   "id": "bozhou_pingbo",
   "subject": "event:bozhou_pingbo",
   "year": 1600,
   "era": "万历二十八年二月",
   "title": "李化龙分兵八路，出征播州",
   "kind": "平播",
   "text": "以四川总督李化龙节制三省军事为总指挥，万历二十八年二月十二日（1600年3月26日）明军分兵八路，每路约三万人（三成官兵七成土兵），出征播州。"
  },
  {
   "id": "bozhou_hailong",
   "subject": "event:bozhou_hailong",
   "year": 1600,
   "era": "万历二十八年六月初六",
   "title": "破海龙囤，杨应龙自缢，播州改土归流",
   "kind": "破囤",
   "text": "刘綎以火器破土城、月城，杨应龙知大势已去，锁室放火与两妾自缢。吴广俘杨朝栋、田氏。从出师至破囤凡一百一十四日。万历二十九年废播州土司，分设遵义府（隶四川）、平越府（隶贵州）。"
  }
 ],
 "edges": [],
 "control": [],
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
