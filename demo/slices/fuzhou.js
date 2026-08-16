// 本文件由 tools/build.py 自动生成（切片 fuzhou），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["fuzhou"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["fuzhou"] = {
 "meta": {
  "kind": "county",
  "region": "liaonan",
  "title": "复州",
  "dossier_label": "复州",
  "subtitle": "辽南陆桥 · 复州卫 · 天启元年 (1621) 陷落",
  "primary_place": "fuzhou_cheng",
  "dossier_event": "event:fuzhou_fall",
  "back": "枢纽",
  "lead": "复州扼辽南陆桥：洪武十四年 (1381) 置复州卫，南通金州、北连盖州。天启元年 (1621) 后金取之，与海州、盖州同月陷。毛文龙东江镇据皮岛，浮海袭扰复州/金州沿海，成为明军海上反攻的跳板。",
  "parties_note": "复州之陷与东江镇袭扰，明清两方评价悬殊：明方夸大东江战果，清方淡化。系统不裁决，只并列。",
  "subject_names": {
   "event:fuzhou_founded": "复州卫建置",
   "event:fuzhou_fall": "复州陷落",
   "place:fuzhou_cheng": "复州城",
   "person:mao_wenlong": "毛文龙",
   "person:amin": "阿敏",
   "person:nuerhaci": "努尔哈赤"
  },
  "page": "county.html?scene=fuzhou",
  "key": "fuzhou",
  "scene_id": "fuzhou",
  "vocab_pack": "ming_qing",
  "terrain_grid": "liaodong"
 },
 "sources": [
  {
   "id": "mingshi",
   "title": "明史",
   "party": "清修·明臣",
   "stance_label": "后朝官修",
   "distance_label": "成书 1739，距事件约 120 年",
   "color": "#8C6239",
   "compiler": "张廷玉等",
   "period": "清修",
   "stance": "official_later_dynasty"
  },
  {
   "id": "qing_taizu_shilu",
   "title": "清太祖实录",
   "party": "清修官史",
   "stance_label": "敌方官修",
   "distance_label": "初纂 1636 后屡经改窜，距事件 17 年以上",
   "color": "#7B5C3E",
   "compiler": "清实录馆",
   "period": "天命",
   "stance": "official_enemy"
  },
  {
   "id": "chao_xiandai",
   "title": "李朝实录·宣祖/光海日记",
   "party": "朝鲜官方",
   "stance_label": "第三国当代官修",
   "distance_label": "成书当代至 100 年内，与明清并行",
   "color": "#2E5C8F",
   "compiler": "李朝史官",
   "period": "万历",
   "stance": "official_contemporary"
  },
  {
   "id": "modern",
   "title": "现代史学综述",
   "party": "学界",
   "stance_label": "学界考证",
   "distance_label": "距事件 300 年以上，综合诸家",
   "color": "#2E7D8F",
   "compiler": "多家学术著作",
   "period": "现代",
   "stance": "scholarship"
  }
 ],
 "places": [
  {
   "id": "fuzhou_cheng",
   "name": "复州城",
   "lon": 121.97,
   "lat": 39.63,
   "type": "city",
   "modern": "辽宁瓦房店市",
   "note": "明复州卫，辽南陆桥",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "wau_fangdian",
   "name": "瓦房店",
   "lon": 121.97,
   "lat": 39.63,
   "type": "city",
   "modern": "辽宁瓦房店市",
   "note": "今复州所在",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "gaizhou_cheng",
   "name": "盖州",
   "lon": 121.97,
   "lat": 40.4,
   "type": "city",
   "modern": "辽宁盖州市",
   "note": "复州北向卫城",
   "_global_id": "gaizhou_cheng",
   "_other_scenes": [
    "haizhou"
   ],
   "elev": null,
   "off_grid": true
  },
  {
   "id": "jinzhouwei_cheng",
   "name": "金州",
   "lon": 121.7,
   "lat": 39.09,
   "type": "city",
   "modern": "辽宁大连金州区",
   "note": "复州南向，半岛南端",
   "_global_id": "jinzhouwei_cheng",
   "_other_scenes": [
    "gaizhou"
   ],
   "elev": null,
   "off_grid": true
  },
  {
   "id": "pidao",
   "name": "皮岛",
   "lon": 124.5,
   "lat": 39.95,
   "type": "island",
   "modern": "朝鲜椴岛/皮岛",
   "note": "毛文龙东江镇基地，袭扰辽南",
   "_global_id": "pidao",
   "_other_scenes": [
    "jinzhouwei"
   ],
   "elev": null,
   "off_grid": true
  }
 ],
 "persons": [
  {
   "id": "mao_wenlong",
   "name": "毛文龙",
   "role": "东江总兵",
   "note": "据皮岛创东江镇，袭扰复州/金州沿海",
   "influence": 0,
   "_global_id": "mao_wenlong",
   "_other_scenes": [
    "haizhou",
    "jinzhouwei"
   ]
  },
  {
   "id": "amin",
   "name": "阿敏",
   "role": "后金二贝勒",
   "note": "1621 南下取复州/盖州",
   "influence": 0,
   "_global_id": "amin",
   "_other_scenes": [
    "haizhou",
    "jinzhouwei",
    "shenyang"
   ]
  },
  {
   "id": "nuerhaci",
   "name": "努尔哈赤",
   "role": "后金大汗",
   "note": "1621 取辽南",
   "influence": 0,
   "_global_id": "nuerhaci",
   "_other_scenes": [
    "fushun",
    "gaizhou",
    "guangning",
    "haizhou",
    "jinzhouwei",
    "kaiyuan",
    "liaoyang",
    "ningyuan"
   ]
  }
 ],
 "assertions": [
  {
   "id": "FZ001",
   "subject": "event:fuzhou_founded",
   "predicate": "建置年",
   "value_text": "洪武十四年 (1381) 始置复州卫, 隶辽东都司",
   "source": "mingshi",
   "layer": "record",
   "era": "洪武十四年",
   "place": "fuzhou_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "洪武十四年, 置复州卫。",
   "note": "复州扼辽南陆桥, 南通金州、北连盖州。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "FZ002",
   "subject": "event:fuzhou_fall",
   "predicate": "陷落年份",
   "value_text": "天启元年 (1621), 后金别将阿敏南下取复州, 与盖州、海州同月陷",
   "source": "qing_taizu_shilu",
   "layer": "record",
   "era": "天启元年",
   "place": "fuzhou_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "天命六年, 取复州、盖州。",
   "note": "复州陷与辽沈之陷同属 1621 三月战役序列。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "FZ003",
   "subject": "event:fuzhou_fall",
   "predicate": "东江袭扰",
   "value_text": "毛文龙据皮岛创东江镇, 浮海袭扰复州、金州沿海, 牵制后金南翼",
   "source": "chao_xiandai",
   "layer": "record",
   "era": "天启元年起",
   "place": "pidao",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "毛文龙据皮岛, 时出兵袭复州、金州沿海。",
   "note": "东江镇活动使后金南向海运与朝鲜通道长期受扰。",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "FZ004",
   "subject": "place:fuzhou_cheng",
   "predicate": "战略地位",
   "value_text": "学界综合：复州是辽南与辽西的陆桥, 1621 后成为明军海上反攻的跳板",
   "source": "modern",
   "layer": "scholarship",
   "era": "1621 后",
   "place": "fuzhou_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "复州居辽南陆桥, 为东江镇袭辽之跳板。",
   "note": "与金州同为辽南门户, 海陆皆要。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "FZ010",
   "subject": "event:fuzhou_fall",
   "predicate": "陷落具体月日",
   "value_text": "复州陷落的具体月日与明军反应, 三方记载略有出入, 未见精确到日",
   "source": "qing_taizu_shilu",
   "layer": "gap",
   "era": "天启元年",
   "place": "fuzhou_cheng",
   "confidence": 0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "lead": {
    "where": "《清太祖实录》天命六年 / 《明熹宗实录》天启元年 / 朝鲜《李朝实录》",
    "skills": [
     "古文"
    ],
    "accept": "核定复州陷落的具体月日与明方弃守过程",
    "effort": "1-2 周"
   },
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "FZ011",
   "subject": "event:fuzhou_fall",
   "predicate": "东江活动频率",
   "value_text": "东江镇在复州/金州一带的实际活动频率与战果, 明清两方评价悬殊（明方夸大、清方淡化）",
   "source": "chao_xiandai",
   "layer": "gap",
   "era": "1621–1629",
   "place": "pidao",
   "confidence": 0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "lead": {
    "where": "《明熹宗实录》毛文龙屡疏 / 《清太祖实录》/ 朝鲜《李朝实录》皮岛往来",
    "skills": [
     "古文",
     "统计"
    ],
    "accept": "量化东江镇对复州/金州袭击的次数与成果, 对比双方叙事",
    "effort": "2-3 周"
   },
   "_party": "朝鲜官方",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "FZ010",
  "FZ011"
 ],
 "events": [
  {
   "id": "fuzhou_founded",
   "subject": "event:fuzhou_founded",
   "year": 1381,
   "era": "洪武十四年",
   "title": "复州卫建置",
   "kind": "建置",
   "text": "明置复州卫，隶辽东都司，扼辽南陆桥。"
  },
  {
   "id": "fuzhou_fall",
   "subject": "event:fuzhou_fall",
   "year": 1621,
   "era": "天启元年",
   "title": "复州陷落",
   "kind": "战事",
   "text": "沈阳辽阳既陷，后金别将阿敏南下取复州，与盖州、海州同月陷。"
  }
 ],
 "edges": [
  {
   "from": "fuzhou_cheng",
   "to": "gaizhou_cheng",
   "type": "admin",
   "label": "复州—盖州"
  },
  {
   "from": "fuzhou_cheng",
   "to": "jinzhouwei_cheng",
   "type": "admin",
   "label": "复州—金州"
  },
  {
   "from": "fuzhou_cheng",
   "to": "pidao",
   "type": "mashi",
   "label": "复州—皮岛（东江袭扰）"
  }
 ],
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
