// 本文件由 tools/build.py 自动生成（切片 changping_battle），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["changping_battle"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["changping_battle"] = {
 "meta": {
  "kind": "county",
  "region": "warring_states",
  "title": "长平之战·血流成川",
  "dossier_label": "长平之战",
  "subtitle": "周赧王五十五年（前260）· 秦 vs 赵",
  "primary_place": "changping",
  "dossier_event": "event:kengzhi",
  "vocab_pack": "changping_battle",
  "terrain_grid": "china_coarse",
  "lead": "周赧王五十五年（前260），秦赵争上党于长平，白起诱围分割、断粮四十六日，坑杀赵卒四十五万，赵国精锐几尽，东方诸侯震惧。",
  "parties_note": "本切片主干为后世官修史（史记/资治通鉴），无秦、赵双方当代原始档案；双方实况经后世史官回溯叙述，缺口为一等公民。系统不裁决，只并列。",
  "subject_names": {
   "event:shangdang": "上党归赵",
   "event:lianpo": "廉颇屯长平",
   "event:fanjian": "秦行反间",
   "event:zhaokuo": "赵括代将",
   "event:baiqi_weibei": "白起诱围",
   "event:weikun": "长平围困",
   "event:kengzhi": "长平坑卒",
   "place:changping": "长平",
   "place:dan_river": "丹河",
   "place:shangdang": "上党",
   "person:baiqi": "白起",
   "person:zhao_kuo": "赵括",
   "person:lian_po": "廉颇"
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "epoch": "warring_states",
  "scale_tier": "operational",
  "strategic": {
   "political_cohesion": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     3,
     5
    ],
    "layer": "inference",
    "note": "长平之战：朝堂凝聚力——赵受上党、中反间换将；秦昭襄王倾国助白起"
   },
   "material_logistics": {
    "from": [
     "tech",
     "economy"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "长平之战：后勤物力——白起断粮四十六日、分割包围决胜"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "长平之战：人口动员——赵国倾国出动、坑卒四十五万丧精锐"
   },
   "geopolitical_strategy": {
    "from": [
     "international",
     "anchors"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "长平之战：地缘战略——上党为轴，秦断野王绝赵归路、钳形取长平"
   }
  },
  "province": "shanxi",
  "related": [],
  "page": "county.html?scene=changping_battle",
  "key": "changping_battle",
  "scene_id": "changping_battle"
 },
 "sources": [
  {
   "id": "shiji",
   "title": "史记",
   "party": "汉·官修",
   "stance_label": "汉人当代/近当代",
   "distance_label": "成书汉武帝时，距楚汉约百年",
   "color": "#B23A48",
   "compiler": "司马迁（西汉）",
   "period": "汉",
   "note": "本切片主干史料：取《白起王翦列传》（叙白起诱围、坑杀赵卒）、《赵世家》（叙赵受上党、赵括代将）、《秦本纪》（叙秦昭襄王决策、王龁攻上党）、《廉颇蔺相如列传》（叙廉颇坚壁）。司马迁西汉人叙战国，距事四百余年，汉承秦统，视角含秦后叙事框架。"
  },
  {
   "id": "zizhi_tongjian",
   "title": "资治通鉴",
   "party": "宋·官修",
   "stance_label": "北宋官修编年通史",
   "distance_label": "宋司马光撰（1084 成书），距三国八百余年",
   "color": "#6C7A89",
   "compiler": "司马光（北宋）",
   "period": "宋",
   "note": "长平部分在《通鉴》卷五，整合史记与战国策，叙事最完整，以秦纪年。其取舍依据北宋大一统修史者的正统判断，与史记互为表里。"
  },
  {
   "id": "changping_yanjiu",
   "title": "长平战史与考古研究（现代综述）",
   "party": "二手综述",
   "stance_label": "近现代考订",
   "distance_label": "现代长平战史与考古研究，距事二千二百余岁",
   "color": "#9B7B5A",
   "compiler": "近现代研究",
   "period": "现代",
   "note": "现代长平战史与考古（高平永录尸骨坑等）考订的二手综述，用于坑卒数区间、战术推演与缺口项；凡依赖此源的断言皆为待升级项，默认可关闭。"
  }
 ],
 "places": [
  {
   "id": "changping",
   "name": "长平",
   "lat": 35.8,
   "lon": 112.92,
   "type": "city",
   "note": "主战场，今山西晋城高平市，赵军坚壁与秦接战处",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 875
  },
  {
   "id": "shangdang",
   "name": "上党",
   "lat": 36.18,
   "lon": 113.12,
   "type": "region",
   "note": "冯亭献赵之郡，今山西长治一带，秦赵争夺枢纽",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 947
  },
  {
   "id": "dan_river",
   "name": "丹河",
   "lat": 35.78,
   "lon": 112.95,
   "type": "river",
   "note": "长平战场河流，赵军夹丹水而阵",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 899
  },
  {
   "id": "handan",
   "name": "邯郸",
   "lat": 36.61,
   "lon": 114.49,
   "type": "city",
   "note": "赵都，今河北邯郸，长平之战后方与援源",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 76
  },
  {
   "id": "xianyang",
   "name": "咸阳",
   "lat": 34.34,
   "lon": 108.71,
   "type": "city",
   "note": "秦都，今陕西咸阳，白起受命与王龁南下攻赵",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 435
  },
  {
   "id": "yewang",
   "name": "野王",
   "lat": 35.1,
   "lon": 112.94,
   "type": "city",
   "note": "太行南陉，今河南沁阳，前263 已为秦取，白起由此断上党归路",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 150
  },
  {
   "id": "xuanshi",
   "name": "泫氏",
   "lat": 35.8,
   "lon": 112.9,
   "type": "city",
   "note": "长平附近邑，今高平，赵军前哨",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 857
  },
  {
   "id": "kunggangling",
   "name": "空仓岭",
   "lat": 35.72,
   "lon": 112.8,
   "type": "region",
   "note": "长平以西秦军防线，赵括由此出击被白起诱围",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 922
  }
 ],
 "persons": [
  {
   "id": "baiqi",
   "name": "白起",
   "party": "秦军",
   "note": "武安君，秦上将，长平之战统帅，诱围分割、坑杀赵卒",
   "influence": 1
  },
  {
   "id": "zhao_kuo",
   "name": "赵括",
   "party": "赵军",
   "note": "赵奢之子，代廉颇为将，易将易法、轻率出击，战死长平",
   "influence": 0
  },
  {
   "id": "lian_po",
   "name": "廉颇",
   "party": "赵军",
   "note": "赵老将，初屯长平坚壁拒秦、以老秦师",
   "influence": 0
  },
  {
   "id": "zhao_xiaocheng",
   "name": "赵孝成王",
   "party": "赵军",
   "note": "赵王，受上党、中反间换将，决策之主",
   "influence": 0
  },
  {
   "id": "fan_ju",
   "name": "范雎",
   "party": "秦军",
   "note": "秦相，献远交近攻，行间换赵将廉颇为赵括",
   "influence": 0
  },
  {
   "id": "wang_he",
   "name": "王龁",
   "party": "秦军",
   "note": "秦将，初攻上党、与廉颇夹丹水相拒",
   "influence": 0
  },
  {
   "id": "feng_ting",
   "name": "冯亭",
   "party": "赵军",
   "note": "韩上党守，献地于赵，启秦赵长平之衅",
   "influence": 0
  },
  {
   "id": "qin_zhaoxiang",
   "name": "秦昭襄王",
   "party": "秦军",
   "note": "秦王，决策倾国助白起，亲至河内督战、赐民爵",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "CP001",
   "subject": "event:shangdang",
   "predicate": "献地启衅",
   "value_text": "韩上党郡守冯亭不愿降秦，献十七城于赵；赵受之，秦赵争上党之衅遂开。",
   "time": {
    "era_text": "周赧王五十三年（前262）",
    "gregorian_year": -262
   },
   "place": "shangdang",
   "source": "shiji",
   "quote": "冯亭乃与赵使者言曰：『…不忍为秦民，愿大夫图之』",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：上党归赵是长平之战的政治导火索，赵决策受地之得失为后世所议。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "CP002",
   "subject": "event:lianpo",
   "predicate": "坚壁拒秦",
   "value_text": "秦攻上党，廉颇为将拒秦于长平，坚壁不出、以老秦师，两军夹丹水相持数月。",
   "time": {
    "era_text": "周赧王五十五年（前260）",
    "gregorian_year": -260
   },
   "place": "changping",
   "source": "shiji",
   "quote": "廉颇坚壁以待，秦数挑战，赵不出",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：廉颇持久拒秦是赵方前期正确战略，为反间所破。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "CP003",
   "subject": "event:fanjian",
   "predicate": "行间换将",
   "value_text": "范雎行反间于赵，扬言秦唯畏赵括；赵王疑廉颇怯战，召还之，以赵括代将。",
   "time": {
    "era_text": "周赧王五十五年（前260）",
    "gregorian_year": -260
   },
   "place": "handan",
   "source": "shiji",
   "quote": "秦使人行千金于赵为反间…赵王因以括为将代廉颇",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/思想维度（5）：反间是秦之谋、赵之败笔，决策心理为转折关键。",
   "dims": [
    6,
    5
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "CP004",
   "subject": "event:zhaokuo",
   "predicate": "易将出击",
   "value_text": "赵括至军，一反廉颇持久之策，易将易法、悉众出击，长平前线与秦接战。",
   "time": {
    "era_text": "周赧王五十五年（前260）",
    "gregorian_year": -260
   },
   "place": "changping",
   "source": "shiji",
   "quote": "括至，则出兵击秦",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/技术维度（2）：赵括弃坚壁而出击，是战术层面的致命失误。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "CP005",
   "subject": "event:baiqi_weibei",
   "predicate": "诱围分割",
   "value_text": "白起佯败，奇兵二万五千人绝赵军之后，又五千骑绝赵壁间，赵军分而为二、粮道断绝。",
   "time": {
    "era_text": "周赧王五十五年（前260）",
    "gregorian_year": -260
   },
   "place": "changping",
   "source": "shiji",
   "quote": "武安君白起…佯败，奇兵二万五千人绝赵军后，又一军五千骑绝赵壁间…赵军分而为二",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "operational",
   "note": "事件维度（6）/技术维度（2）：白起分割包围为战役决定性战术，置信度最高。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "CP006",
   "subject": "event:weikun",
   "predicate": "断粮陷围",
   "value_text": "赵军被围四十六日，饿极，赵括率锐卒搏战，中流矢死，余众断粮不能战。",
   "time": {
    "era_text": "周赧王五十五年（前260）",
    "gregorian_year": -260
   },
   "place": "changping",
   "source": "shiji",
   "quote": "赵军饿…括自搏战，秦军射杀括",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：断粮四十余日是围困决胜的物质前提。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "CP007",
   "subject": "event:kengzhi",
   "predicate": "坑杀赵卒",
   "value_text": "白起挟诈尽坑杀赵卒，遗小者二百四十人归赵，前后斩首虏四十五万（约数），赵国精锐几尽。",
   "time": {
    "era_text": "周赧王五十五年（前260）",
    "gregorian_year": -260
   },
   "place": "changping",
   "source": "shiji",
   "quote": "乃挟诈而尽坑杀之，遗其小者二百四十人归赵…前后斩首虏四十五万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：坑卒为长平结局，赵国一战丧其精锐，东方诸侯震惧。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "CP008",
   "subject": "place:changping",
   "predicate": "战场定位",
   "value_text": "长平在泫氏之西、丹水之阳，约今山西高平西北，为赵军坚壁与秦接战的主阵地。",
   "time": {
    "era_text": "周赧王五十五年（前260）",
    "gregorian_year": -260
   },
   "place": "changping",
   "source": "shiji",
   "quote": "赵军长沙平",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "地理维度（1）：长平—丹水—空仓岭的相对位置是诱围战术的空间条件。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "CP009",
   "subject": "place:dan_river",
   "predicate": "水系夹阵",
   "value_text": "丹河（丹水）自北南流，长平战场夹丹水而阵，赵军据东岸、秦军逼其西。",
   "time": {
    "era_text": "周赧王五十五年（前260）",
    "gregorian_year": -260
   },
   "place": "dan_river",
   "source": "shiji",
   "quote": "赵军夹丹水",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "地理维度（1）：丹水为两军相拒的自然界线。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "CP010",
   "subject": "event:lianpo",
   "predicate": "老秦之策",
   "value_text": "通鉴叙廉颇固壁不战，欲以持久疲秦师，王龁数挑战不得，秦亦苦久持。",
   "time": {
    "era_text": "周赧王五十五年（前260）",
    "gregorian_year": -260
   },
   "place": "changping",
   "source": "zizhi_tongjian",
   "quote": "廉颇固壁不战，欲以老秦师",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：通鉴以秦纪年，叙廉颇持久为赵之长、反间为赵之短。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "CP011",
   "subject": "event:fanjian",
   "predicate": "反间之辞",
   "value_text": "范雎行反间，扬言『秦之所恶，独畏马服君赵括将耳』，赵王信之而换将。",
   "time": {
    "era_text": "周赧王五十五年（前260）",
    "gregorian_year": -260
   },
   "place": "handan",
   "source": "zizhi_tongjian",
   "quote": "秦之所恶，独畏马服君赵括将耳",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/思想维度（5）：通鉴详反间之辞，凸显赵决策之误。",
   "dims": [
    6,
    5
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "CP012",
   "subject": "person:baiqi",
   "predicate": "料敌如神",
   "value_text": "武安君白起善用兵，料赵括易中诱、断粮必溃，长平之胜在其分割包围之算。",
   "time": {
    "era_text": "周赧王五十五年（前260）",
    "gregorian_year": -260
   },
   "place": "changping",
   "source": "shiji",
   "quote": "武安君白起…料赵必败",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "思想维度（5）：白起的用兵思想与算敌，是『以少围多』的统帅层根源。",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "CP013",
   "subject": "event:kengzhi",
   "predicate": "坑卒数考订",
   "value_text": "《白起列传》称前后斩首虏四十五万，含被俘卒与随军民夫，现代考古（高平永录尸骨坑）证大规模屠杀，实数难精确核计，多为约数。",
   "time": {
    "era_text": "现代考订",
    "gregorian_year": 2000
   },
   "place": "changping",
   "source": "changping_yanjiu",
   "quote": "四十五万为约数，含被俘卒与民夫",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "operational",
   "note": "技术维度（2）：史载坑卒数经后世放大，需以考古折扣。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "CP014",
   "subject": "event:weikun",
   "predicate": "围困推演",
   "value_text": "按白起分割包围、断粮四十六日两项，模型推算赵军饥溃概率偏高（本项目推演，非史料原值）。",
   "time": {
    "era_text": "周赧王五十五年（前260）",
    "gregorian_year": -260
   },
   "place": "changping",
   "source": "changping_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "operational",
   "note": "技术维度（2）：基于断粮/分割的推断值，可复现。",
   "dims": [
    2
   ],
   "dim_source": "inference",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "CP015",
   "subject": "place:yewang",
   "predicate": "补给推演",
   "value_text": "白起先取野王、绝上党归路，使赵上党孤悬；秦自咸阳远征而赵据上党近援，粮道长短反置，利于秦之钳形。",
   "time": {
    "era_text": "周赧王五十五年（前260）",
    "gregorian_year": -260
   },
   "place": "yewang",
   "source": "changping_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "operational",
   "note": "地理维度（1）/制度维度（3）：野王—上党补给与钳形推进推演。",
   "dims": [
    1,
    3
   ],
   "dim_source": "inference",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "CP016",
   "subject": "event:kengzhi",
   "predicate": "坑卒实数缺口",
   "value_text": "白起坑杀赵卒的精确人数、被俘与战死比例、随军民夫数无精确史料：《史记》仅给『四十五万』总约数，考古见尸骨坑而难复原编制，缺口即结论，仅能给区间而非定点数。",
   "time": {
    "era_text": "周赧王五十五年（前260）",
    "gregorian_year": -260
   },
   "place": "changping",
   "source": "changping_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0,
   "scale": "operational",
   "note": "技术维度（2）/社会维度（4）：坑卒真实规模为结构性未知。",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "长平坑卒精确人数与赵军编制构成比例",
    "skills": [
     "核《史记·白起列传》对斩首虏的表述",
     "比对《资治通鉴》编年叙述的夸张成分",
     "查高平永录尸骨坑等考古对规模的估算区间"
    ],
    "accept": "明确长平坑卒人数为结构性未知，仅能给区间而非定点数"
   },
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "CP017",
   "subject": "event:fanjian",
   "predicate": "赵决策视角缺口",
   "value_text": "赵受上党、中反间换将的内部决策过程，主要经《史记》《通鉴》后向追述，赵方幕府档案无存，决策细节与反对声（蔺相如谏、赵母谏）多为汉宋回望式建构。",
   "time": {
    "era_text": "周赧王五十五年（前260）",
    "gregorian_year": -260
   },
   "place": "handan",
   "source": "changping_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0,
   "scale": "operational",
   "note": "思想维度（5）：赵决策叙事的视角缺失与后向建构。",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "lead": {
    "where": "赵受上党与换将决策中的分歧与内部异议",
    "skills": [
     "比对《赵世家》与《廉颇蔺相如列传》对换将的处理",
     "核秦赵双方史料不对称的结构性原因"
    ],
    "accept": "承认赵决策细节在史料上为汉宋后向建构的弱证据"
   },
   "_party": "二手综述",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "CP016",
  "CP017"
 ],
 "events": [
  {
   "id": "ev_shangdang",
   "subject": "event:shangdang",
   "year": -262,
   "era": "周赧王五十三年（前262）",
   "title": "上党归赵",
   "kind": "政治·归附",
   "text": "韩上党郡守冯亭不愿降秦，献十七城于赵；赵受之，秦赵争上党之衅遂开。"
  },
  {
   "id": "ev_lianpo",
   "subject": "event:lianpo",
   "year": -260,
   "era": "周赧王五十五年（前260）",
   "title": "廉颇屯长平",
   "kind": "战事·拒守",
   "text": "秦攻上党，廉颇为将拒秦于长平，坚壁不出、以老秦师，两军夹丹水相持。"
  },
  {
   "id": "ev_fanjian",
   "subject": "event:fanjian",
   "year": -260,
   "era": "周赧王五十五年（前260）",
   "title": "秦行反间",
   "kind": "政治·反间",
   "text": "范雎行反间于赵，扬言秦唯畏赵括；赵王疑廉颇怯战，召还之，以赵括代将。"
  },
  {
   "id": "ev_zhaokuo",
   "subject": "event:zhaokuo",
   "year": -260,
   "era": "周赧王五十五年（前260）",
   "title": "赵括代将",
   "kind": "战事·易将",
   "text": "赵括至军，一反廉颇持久之策，易将易法、悉众出击，长平前线与秦接战。"
  },
  {
   "id": "ev_baiqi_weibei",
   "subject": "event:baiqi_weibei",
   "year": -260,
   "era": "周赧王五十五年（前260）",
   "title": "白起诱围",
   "kind": "战事·诱敌",
   "text": "白起佯败，奇兵二万五千绝赵军后、五千骑绝赵壁间，分割包围赵军于长平。"
  },
  {
   "id": "ev_weikun",
   "subject": "event:weikun",
   "year": -260,
   "era": "周赧王五十五年（前260）",
   "title": "长平围困",
   "kind": "战事·围困",
   "text": "赵军被围四十六日，饿极，赵括率锐卒搏战，中流矢死，余众断粮不能战。"
  },
  {
   "id": "ev_kengzhi",
   "subject": "event:kengzhi",
   "year": -260,
   "era": "周赧王五十五年（前260）",
   "title": "长平坑卒",
   "kind": "战事·决战",
   "text": "白起挟诈尽坑杀赵卒，遗小者二百四十人归赵，前后斩首虏四十五万（约数），赵国精锐几尽，东方诸侯震惧。"
  }
 ],
 "edges": [
  {
   "from": "xianyang",
   "to": "shangdang",
   "type": "military",
   "label": "咸阳—上党（秦攻赵主线）"
  },
  {
   "from": "shangdang",
   "to": "changping",
   "type": "military",
   "label": "上党—长平（赵军前哨）"
  },
  {
   "from": "handan",
   "to": "changping",
   "type": "military",
   "label": "邯郸—长平（赵都援长平）"
  },
  {
   "from": "changping",
   "to": "dan_river",
   "type": "river",
   "label": "长平夹丹水"
  },
  {
   "from": "xuanshi",
   "to": "changping",
   "type": "military",
   "label": "泫氏—长平（赵前哨）"
  },
  {
   "from": "kunggangling",
   "to": "changping",
   "type": "military",
   "label": "空仓岭—长平（赵括出击被诱）"
  },
  {
   "from": "yewang",
   "to": "shangdang",
   "type": "military",
   "label": "野王—上党（白起断归路）"
  },
  {
   "from": "xianyang",
   "to": "yewang",
   "type": "military",
   "label": "咸阳—野王（秦已取，南窥上党）"
  },
  {
   "from": "changping",
   "to": "xuanshi",
   "type": "military",
   "label": "长平—泫氏"
  },
  {
   "from": "dan_river",
   "to": "kunggangling",
   "type": "river",
   "label": "丹水—空仓岭（战场水系）"
  }
 ],
 "control": [
  {
   "place_id": "handan",
   "party": "赵军",
   "start": -262,
   "end": null,
   "basis": "赵都，长平之战后方中枢与援源",
   "note": "赵根本"
  },
  {
   "place_id": "xianyang",
   "party": "秦军",
   "start": -262,
   "end": null,
   "basis": "秦都，白起受命南下攻赵",
   "note": "秦根本"
  },
  {
   "place_id": "yewang",
   "party": "秦军",
   "start": -262,
   "end": null,
   "basis": "前263 已为秦取，白起由此断上党归路",
   "note": "秦已据"
  },
  {
   "place_id": "changping",
   "party": "赵军",
   "start": -262,
   "end": -261,
   "basis": "廉颇屯长平坚壁拒秦，战前属赵",
   "note": "赵前哨"
  },
  {
   "place_id": "shangdang",
   "party": "赵军",
   "start": -262,
   "end": -261,
   "basis": "冯亭献赵，赵受上党，战前属赵",
   "note": "赵新附"
  },
  {
   "place_id": "xuanshi",
   "party": "赵军",
   "start": -262,
   "end": -261,
   "basis": "长平附近赵前哨，战前属赵",
   "note": "赵前哨"
  },
  {
   "place_id": "kunggangling",
   "party": "赵军",
   "start": -262,
   "end": -261,
   "basis": "赵括出击处，战前属赵",
   "note": "赵前哨"
  },
  {
   "place_id": "dan_river",
   "party": "赵军",
   "start": -262,
   "end": -261,
   "basis": "赵军夹丹水而阵，战前属赵",
   "note": "赵前哨"
  },
  {
   "place_id": "changping",
   "party": "秦军",
   "start": -260,
   "end": null,
   "basis": "白起诱围坑杀后秦取长平",
   "note": "战后属秦"
  },
  {
   "place_id": "shangdang",
   "party": "秦军",
   "start": -260,
   "end": null,
   "basis": "上党随长平入秦",
   "note": "战后属秦"
  },
  {
   "place_id": "xuanshi",
   "party": "秦军",
   "start": -260,
   "end": null,
   "basis": "长平破后秦控泫氏",
   "note": "战后属秦"
  },
  {
   "place_id": "kunggangling",
   "party": "秦军",
   "start": -260,
   "end": null,
   "basis": "赵括溃后秦据空仓岭",
   "note": "战后属秦"
  },
  {
   "place_id": "dan_river",
   "party": "秦军",
   "start": -260,
   "end": null,
   "basis": "赵军降后丹水两岸属秦",
   "note": "战后属秦"
  }
 ],
 "control_seats": [
  {
   "place_id": "handan",
   "name": "邯郸",
   "lon": 114.49,
   "lat": 36.61,
   "region": "warring_states"
  },
  {
   "place_id": "xianyang",
   "name": "咸阳",
   "lon": 108.71,
   "lat": 34.34,
   "region": "warring_states"
  },
  {
   "place_id": "yewang",
   "name": "野王",
   "lon": 112.94,
   "lat": 35.1,
   "region": "warring_states"
  },
  {
   "place_id": "changping",
   "name": "长平",
   "lon": 112.92,
   "lat": 35.8,
   "region": "warring_states"
  },
  {
   "place_id": "shangdang",
   "name": "上党",
   "lon": 113.12,
   "lat": 36.18,
   "region": "warring_states"
  },
  {
   "place_id": "xuanshi",
   "name": "泫氏",
   "lon": 112.9,
   "lat": 35.8,
   "region": "warring_states"
  },
  {
   "place_id": "kunggangling",
   "name": "空仓岭",
   "lon": 112.8,
   "lat": 35.72,
   "region": "warring_states"
  },
  {
   "place_id": "dan_river",
   "name": "丹河",
   "lon": 112.95,
   "lat": 35.78,
   "region": "warring_states"
  }
 ],
 "control_years": [
  -262,
  -260
 ],
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
   "秦军",
   "赵军",
   "后世官修",
   "二手综述"
  ],
  "party_bucket": {
   "汉·官修": "后世官修",
   "宋·官修": "后世官修",
   "二手综述": "二手综述"
  },
  "party_colors": {
   "秦军": "#7A3B2E",
   "赵军": "#2E6F8F",
   "后世官修": "#6C7A89",
   "二手综述": "#9B7B5A"
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
        107.71,
        33.34
       ],
       [
        107.71,
        37.61
       ],
       [
        115.49,
        37.61
       ],
       [
        115.49,
        33.34
       ],
       [
        107.71,
        33.34
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
         114.117,
         37.61
        ],
        [
         114.119,
         37.591
        ],
        [
         114.037,
         37.494
        ],
        [
         114.015,
         37.425
        ],
        [
         113.974,
         37.403
        ],
        [
         113.963,
         37.356
        ],
        [
         113.902,
         37.31
        ],
        [
         113.886,
         37.239
        ],
        [
         113.853,
         37.215
        ],
        [
         113.832,
         37.168
        ],
        [
         113.773,
         37.152
        ],
        [
         113.774,
         37.107
        ],
        [
         113.758,
         37.075
        ],
        [
         113.788,
         37.06
        ],
        [
         113.772,
         37.017
        ],
        [
         113.792,
         36.988
        ],
        [
         113.761,
         36.956
        ],
        [
         113.793,
         36.895
        ],
        [
         113.773,
         36.855
        ],
        [
         113.732,
         36.859
        ],
        [
         113.732,
         36.879
        ],
        [
         113.697,
         36.882
        ],
        [
         113.676,
         36.856
        ],
        [
         113.681,
         36.79
        ],
        [
         113.6,
         36.753
        ],
        [
         113.549,
         36.753
        ],
        [
         113.536,
         36.732
        ],
        [
         113.5,
         36.741
        ],
        [
         113.465,
         36.708
        ],
        [
         113.507,
         36.705
        ],
        [
         113.477,
         36.655
        ],
        [
         113.487,
         36.635
        ],
        [
         113.545,
         36.623
        ],
        [
         113.54,
         36.594
        ],
        [
         113.57,
         36.586
        ],
        [
         113.589,
         36.548
        ],
        [
         113.56,
         36.529
        ],
        [
         113.554,
         36.495
        ],
        [
         113.587,
         36.461
        ],
        [
         113.636,
         36.451
        ],
        [
         113.67,
         36.425
        ],
        [
         113.708,
         36.423
        ],
        [
         113.731,
         36.363
        ],
        [
         113.755,
         36.366
        ],
        [
         113.813,
         36.332
        ],
        [
         113.857,
         36.329
        ],
        [
         113.849,
         36.348
        ],
        [
         113.882,
         36.354
        ],
        [
         113.911,
         36.315
        ],
        [
         113.963,
         36.354
        ],
        [
         113.982,
         36.318
        ],
        [
         114.003,
         36.334
        ],
        [
         114.056,
         36.329
        ],
        [
         114.043,
         36.303
        ],
        [
         114.08,
         36.27
        ],
        [
         114.129,
         36.28
        ],
        [
         114.176,
         36.265
        ],
        [
         114.17,
         36.246
        ],
        [
         114.17,
         36.246
        ],
        [
         114.203,
         36.245
        ],
        [
         114.21,
         36.273
        ],
        [
         114.241,
         36.251
        ],
        [
         114.258,
         36.264
        ],
        [
         114.299,
         36.246
        ],
        [
         114.345,
         36.256
        ],
        [
         114.356,
         36.23
        ],
        [
         114.408,
         36.225
        ],
        [
         114.417,
         36.206
        ],
        [
         114.466,
         36.198
        ],
        [
         114.48,
         36.178
        ],
        [
         114.533,
         36.172
        ],
        [
         114.587,
         36.141
        ],
        [
         114.589,
         36.118
        ],
        [
         114.64,
         36.137
        ],
        [
         114.72,
         36.14
        ],
        [
         114.735,
         36.156
        ],
        [
         114.772,
         36.125
        ],
        [
         114.858,
         36.128
        ],
        [
         114.858,
         36.145
        ],
        [
         114.913,
         36.141
        ],
        [
         114.927,
         36.089
        ],
        [
         114.914,
         36.052
        ],
        [
         114.998,
         36.07
        ],
        [
         115.046,
         36.113
        ],
        [
         115.049,
         36.162
        ],
        [
         115.063,
         36.178
        ],
        [
         115.105,
         36.172
        ],
        [
         115.125,
         36.21
        ],
        [
         115.184,
         36.193
        ],
        [
         115.201,
         36.21
        ],
        [
         115.201,
         36.21
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.242,
         36.191
        ],
        [
         115.279,
         36.138
        ],
        [
         115.302,
         36.128
        ],
        [
         115.313,
         36.088
        ],
        [
         115.366,
         36.099
        ],
        [
         115.377,
         36.128
        ],
        [
         115.451,
         36.152
        ],
        [
         115.465,
         36.17
        ],
        [
         115.484,
         36.149
        ],
        [
         115.475,
         36.248
        ],
        [
         115.467,
         36.259
        ],
        [
         115.467,
         36.259
        ],
        [
         115.463,
         36.276
        ],
        [
         115.417,
         36.293
        ],
        [
         115.423,
         36.322
        ],
        [
         115.367,
         36.309
        ],
        [
         115.369,
         36.342
        ],
        [
         115.34,
         36.398
        ],
        [
         115.298,
         36.413
        ],
        [
         115.317,
         36.454
        ],
        [
         115.291,
         36.46
        ],
        [
         115.273,
         36.497
        ],
        [
         115.331,
         36.55
        ],
        [
         115.355,
         36.627
        ],
        [
         115.366,
         36.622
        ],
        [
         115.42,
         36.687
        ],
        [
         115.452,
         36.702
        ],
        [
         115.48,
         36.76
        ],
        [
         115.49,
         36.761
        ],
        [
         115.49,
         37.61
        ],
        [
         114.117,
         37.61
        ]
       ]
      ]
     ]
    },
    "n": "河北省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         110.379,
         34.601
        ],
        [
         110.425,
         34.588
        ],
        [
         110.488,
         34.611
        ],
        [
         110.533,
         34.583
        ],
        [
         110.611,
         34.608
        ],
        [
         110.71,
         34.605
        ],
        [
         110.749,
         34.652
        ],
        [
         110.792,
         34.65
        ],
        [
         110.825,
         34.616
        ],
        [
         110.884,
         34.644
        ],
        [
         110.903,
         34.669
        ],
        [
         110.92,
         34.73
        ],
        [
         110.976,
         34.706
        ],
        [
         111.035,
         34.741
        ],
        [
         111.118,
         34.757
        ],
        [
         111.149,
         34.808
        ],
        [
         111.233,
         34.79
        ],
        [
         111.255,
         34.82
        ],
        [
         111.292,
         34.807
        ],
        [
         111.346,
         34.832
        ],
        [
         111.389,
         34.815
        ],
        [
         111.439,
         34.838
        ],
        [
         111.503,
         34.83
        ],
        [
         111.544,
         34.853
        ],
        [
         111.57,
         34.843
        ],
        [
         111.592,
         34.881
        ],
        [
         111.618,
         34.895
        ],
        [
         111.647,
         34.939
        ],
        [
         111.682,
         34.951
        ],
        [
         111.664,
         34.984
        ],
        [
         111.74,
         35.005
        ],
        [
         111.807,
         35.033
        ],
        [
         111.81,
         35.062
        ],
        [
         111.933,
         35.083
        ],
        [
         111.978,
         35.067
        ],
        [
         112.019,
         35.069
        ],
        [
         112.039,
         35.046
        ],
        [
         112.062,
         35.056
        ],
        [
         112.056,
         35.099
        ],
        [
         112.066,
         35.153
        ],
        [
         112.04,
         35.194
        ],
        [
         112.079,
         35.219
        ],
        [
         112.059,
         35.28
        ],
        [
         112.138,
         35.271
        ],
        [
         112.217,
         35.253
        ],
        [
         112.242,
         35.235
        ],
        [
         112.305,
         35.252
        ],
        [
         112.288,
         35.22
        ],
        [
         112.368,
         35.22
        ],
        [
         112.391,
         35.239
        ],
        [
         112.513,
         35.218
        ],
        [
         112.637,
         35.226
        ],
        [
         112.628,
         35.263
        ],
        [
         112.72,
         35.206
        ],
        [
         112.773,
         35.208
        ],
        [
         112.822,
         35.258
        ],
        [
         112.884,
         35.244
        ],
        [
         112.934,
         35.263
        ],
        [
         112.936,
         35.284
        ],
        [
         112.992,
         35.296
        ],
        [
         112.986,
         35.34
        ],
        [
         112.996,
         35.362
        ],
        [
         113.067,
         35.354
        ],
        [
         113.126,
         35.332
        ],
        [
         113.149,
         35.351
        ],
        [
         113.165,
         35.413
        ],
        [
         113.185,
         35.409
        ],
        [
         113.19,
         35.449
        ],
        [
         113.243,
         35.449
        ],
        [
         113.304,
         35.427
        ],
        [
         113.312,
         35.481
        ],
        [
         113.348,
         35.468
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
         113.583,
         35.818
        ],
        [
         113.661,
         35.837
        ],
        [
         113.638,
         35.87
        ],
        [
         113.654,
         35.932
        ],
        [
         113.649,
         35.994
        ],
        [
         113.679,
         35.986
        ],
        [
         113.695,
         36.027
        ],
        [
         113.66,
         36.035
        ],
        [
         113.686,
         36.056
        ],
        [
         113.671,
         36.116
        ],
        [
         113.655,
         36.125
        ],
        [
         113.713,
         36.13
        ],
        [
         113.706,
         36.149
        ],
        [
         113.651,
         36.174
        ],
        [
         113.698,
         36.182
        ],
        [
         113.682,
         36.216
        ],
        [
         113.716,
         36.262
        ],
        [
         113.712,
         36.303
        ],
        [
         113.736,
         36.325
        ],
        [
         113.731,
         36.363
        ],
        [
         113.708,
         36.423
        ],
        [
         113.67,
         36.425
        ],
        [
         113.636,
         36.451
        ],
        [
         113.587,
         36.461
        ],
        [
         113.554,
         36.495
        ],
        [
         113.56,
         36.529
        ],
        [
         113.589,
         36.548
        ],
        [
         113.57,
         36.586
        ],
        [
         113.54,
         36.594
        ],
        [
         113.545,
         36.623
        ],
        [
         113.487,
         36.635
        ],
        [
         113.477,
         36.655
        ],
        [
         113.507,
         36.705
        ],
        [
         113.465,
         36.708
        ],
        [
         113.5,
         36.741
        ],
        [
         113.536,
         36.732
        ],
        [
         113.549,
         36.753
        ],
        [
         113.6,
         36.753
        ],
        [
         113.681,
         36.79
        ],
        [
         113.676,
         36.856
        ],
        [
         113.697,
         36.882
        ],
        [
         113.732,
         36.879
        ],
        [
         113.732,
         36.859
        ],
        [
         113.773,
         36.855
        ],
        [
         113.793,
         36.895
        ],
        [
         113.761,
         36.956
        ],
        [
         113.792,
         36.988
        ],
        [
         113.772,
         37.017
        ],
        [
         113.788,
         37.06
        ],
        [
         113.758,
         37.075
        ],
        [
         113.774,
         37.107
        ],
        [
         113.773,
         37.152
        ],
        [
         113.832,
         37.168
        ],
        [
         113.853,
         37.215
        ],
        [
         113.886,
         37.239
        ],
        [
         113.902,
         37.31
        ],
        [
         113.963,
         37.356
        ],
        [
         113.974,
         37.403
        ],
        [
         114.015,
         37.425
        ],
        [
         114.037,
         37.494
        ],
        [
         114.119,
         37.591
        ],
        [
         114.117,
         37.61
        ],
        [
         110.769,
         37.61
        ],
        [
         110.772,
         37.595
        ],
        [
         110.795,
         37.559
        ],
        [
         110.771,
         37.538
        ],
        [
         110.759,
         37.475
        ],
        [
         110.74,
         37.449
        ],
        [
         110.644,
         37.435
        ],
        [
         110.631,
         37.373
        ],
        [
         110.642,
         37.36
        ],
        [
         110.695,
         37.35
        ],
        [
         110.679,
         37.318
        ],
        [
         110.69,
         37.287
        ],
        [
         110.662,
         37.282
        ],
        [
         110.652,
         37.257
        ],
        [
         110.591,
         37.187
        ],
        [
         110.535,
         37.138
        ],
        [
         110.536,
         37.115
        ],
        [
         110.496,
         37.087
        ],
        [
         110.461,
         37.045
        ],
        [
         110.417,
         37.027
        ],
        [
         110.427,
         37.009
        ],
        [
         110.383,
         37.022
        ],
        [
         110.382,
         37.002
        ],
        [
         110.424,
         36.964
        ],
        [
         110.409,
         36.892
        ],
        [
         110.376,
         36.882
        ],
        [
         110.424,
         36.856
        ],
        [
         110.407,
         36.825
        ],
        [
         110.424,
         36.818
        ],
        [
         110.408,
         36.776
        ],
        [
         110.447,
         36.738
        ],
        [
         110.438,
         36.686
        ],
        [
         110.403,
         36.697
        ],
        [
         110.395,
         36.677
        ],
        [
         110.427,
         36.658
        ],
        [
         110.448,
         36.621
        ],
        [
         110.497,
         36.582
        ],
        [
         110.489,
         36.557
        ],
        [
         110.504,
         36.488
        ],
        [
         110.473,
         36.453
        ],
        [
         110.49,
         36.43
        ],
        [
         110.487,
         36.394
        ],
        [
         110.46,
         36.328
        ],
        [
         110.474,
         36.307
        ],
        [
         110.474,
         36.248
        ],
        [
         110.456,
         36.227
        ],
        [
         110.447,
         36.164
        ],
        [
         110.468,
         36.075
        ],
        [
         110.492,
         36.035
        ],
        [
         110.493,
         35.994
        ],
        [
         110.517,
         35.972
        ],
        [
         110.502,
         35.948
        ],
        [
         110.517,
         35.919
        ],
        [
         110.512,
         35.88
        ],
        [
         110.549,
         35.878
        ],
        [
         110.55,
         35.838
        ],
        [
         110.571,
         35.801
        ],
        [
         110.578,
         35.702
        ],
        [
         110.61,
         35.632
        ],
        [
         110.589,
         35.602
        ],
        [
         110.568,
         35.54
        ],
        [
         110.531,
         35.511
        ],
        [
         110.478,
         35.414
        ],
        [
         110.45,
         35.328
        ],
        [
         110.375,
         35.252
        ],
        [
         110.379,
         35.211
        ],
        [
         110.364,
         35.198
        ],
        [
         110.374,
         35.134
        ],
        [
         110.321,
         35.005
        ],
        [
         110.262,
         34.944
        ],
        [
         110.231,
         34.881
        ],
        [
         110.247,
         34.789
        ],
        [
         110.243,
         34.726
        ],
        [
         110.23,
         34.693
        ],
        [
         110.269,
         34.63
        ],
        [
         110.295,
         34.611
        ],
        [
         110.379,
         34.601
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
         115.49,
         33.34
        ],
        [
         115.49,
         33.559
        ],
        [
         115.464,
         33.567
        ],
        [
         115.423,
         33.557
        ],
        [
         115.395,
         33.506
        ],
        [
         115.367,
         33.523
        ],
        [
         115.346,
         33.503
        ],
        [
         115.346,
         33.45
        ],
        [
         115.325,
         33.457
        ],
        [
         115.315,
         33.431
        ],
        [
         115.329,
         33.403
        ],
        [
         115.314,
         33.377
        ],
        [
         115.342,
         33.371
        ],
        [
         115.363,
         33.34
        ],
        [
         115.49,
         33.34
        ]
       ]
      ]
     ]
    },
    "n": "安徽省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         115.49,
         36.761
        ],
        [
         115.48,
         36.76
        ],
        [
         115.452,
         36.702
        ],
        [
         115.42,
         36.687
        ],
        [
         115.366,
         36.622
        ],
        [
         115.355,
         36.627
        ],
        [
         115.331,
         36.55
        ],
        [
         115.273,
         36.497
        ],
        [
         115.291,
         36.46
        ],
        [
         115.317,
         36.454
        ],
        [
         115.298,
         36.413
        ],
        [
         115.34,
         36.398
        ],
        [
         115.369,
         36.342
        ],
        [
         115.367,
         36.309
        ],
        [
         115.423,
         36.322
        ],
        [
         115.417,
         36.293
        ],
        [
         115.463,
         36.276
        ],
        [
         115.467,
         36.259
        ],
        [
         115.467,
         36.259
        ],
        [
         115.475,
         36.248
        ],
        [
         115.484,
         36.149
        ],
        [
         115.484,
         36.126
        ],
        [
         115.449,
         36.047
        ],
        [
         115.448,
         36.012
        ],
        [
         115.363,
         35.972
        ],
        [
         115.354,
         35.939
        ],
        [
         115.364,
         35.894
        ],
        [
         115.335,
         35.797
        ],
        [
         115.363,
         35.78
        ],
        [
         115.408,
         35.809
        ],
        [
         115.46,
         35.868
        ],
        [
         115.488,
         35.881
        ],
        [
         115.49,
         35.885
        ],
        [
         115.49,
         35.712
        ],
        [
         115.486,
         35.71
        ],
        [
         115.383,
         35.569
        ],
        [
         115.345,
         35.554
        ],
        [
         115.356,
         35.49
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
         115.427,
         34.805
        ],
        [
         115.449,
         34.744
        ],
        [
         115.434,
         34.725
        ],
        [
         115.461,
         34.637
        ],
        [
         115.49,
         34.608
        ],
        [
         115.49,
         36.761
        ]
       ]
      ],
      [
       [
        [
         115.49,
         35.885
        ],
        [
         115.488,
         35.881
        ],
        [
         115.49,
         35.882
        ],
        [
         115.49,
         35.885
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
         115.363,
         33.34
        ],
        [
         115.342,
         33.371
        ],
        [
         115.314,
         33.377
        ],
        [
         115.329,
         33.403
        ],
        [
         115.315,
         33.431
        ],
        [
         115.325,
         33.457
        ],
        [
         115.346,
         33.45
        ],
        [
         115.346,
         33.503
        ],
        [
         115.367,
         33.523
        ],
        [
         115.395,
         33.506
        ],
        [
         115.423,
         33.557
        ],
        [
         115.464,
         33.567
        ],
        [
         115.49,
         33.559
        ],
        [
         115.49,
         34.608
        ],
        [
         115.461,
         34.637
        ],
        [
         115.434,
         34.725
        ],
        [
         115.449,
         34.744
        ],
        [
         115.427,
         34.805
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
         115.356,
         35.49
        ],
        [
         115.345,
         35.554
        ],
        [
         115.383,
         35.569
        ],
        [
         115.486,
         35.71
        ],
        [
         115.49,
         35.712
        ],
        [
         115.49,
         35.882
        ],
        [
         115.488,
         35.881
        ],
        [
         115.46,
         35.868
        ],
        [
         115.408,
         35.809
        ],
        [
         115.363,
         35.78
        ],
        [
         115.335,
         35.797
        ],
        [
         115.364,
         35.894
        ],
        [
         115.354,
         35.939
        ],
        [
         115.363,
         35.972
        ],
        [
         115.448,
         36.012
        ],
        [
         115.449,
         36.047
        ],
        [
         115.484,
         36.126
        ],
        [
         115.484,
         36.149
        ],
        [
         115.465,
         36.17
        ],
        [
         115.451,
         36.152
        ],
        [
         115.377,
         36.128
        ],
        [
         115.366,
         36.099
        ],
        [
         115.313,
         36.088
        ],
        [
         115.302,
         36.128
        ],
        [
         115.279,
         36.138
        ],
        [
         115.242,
         36.191
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.201,
         36.21
        ],
        [
         115.201,
         36.21
        ],
        [
         115.184,
         36.193
        ],
        [
         115.125,
         36.21
        ],
        [
         115.105,
         36.172
        ],
        [
         115.063,
         36.178
        ],
        [
         115.049,
         36.162
        ],
        [
         115.046,
         36.113
        ],
        [
         114.998,
         36.07
        ],
        [
         114.914,
         36.052
        ],
        [
         114.927,
         36.089
        ],
        [
         114.913,
         36.141
        ],
        [
         114.858,
         36.145
        ],
        [
         114.858,
         36.128
        ],
        [
         114.772,
         36.125
        ],
        [
         114.735,
         36.156
        ],
        [
         114.72,
         36.14
        ],
        [
         114.64,
         36.137
        ],
        [
         114.589,
         36.118
        ],
        [
         114.587,
         36.141
        ],
        [
         114.533,
         36.172
        ],
        [
         114.48,
         36.178
        ],
        [
         114.466,
         36.198
        ],
        [
         114.417,
         36.206
        ],
        [
         114.408,
         36.225
        ],
        [
         114.356,
         36.23
        ],
        [
         114.345,
         36.256
        ],
        [
         114.299,
         36.246
        ],
        [
         114.258,
         36.264
        ],
        [
         114.241,
         36.251
        ],
        [
         114.21,
         36.273
        ],
        [
         114.203,
         36.245
        ],
        [
         114.17,
         36.246
        ],
        [
         114.17,
         36.246
        ],
        [
         114.176,
         36.265
        ],
        [
         114.129,
         36.28
        ],
        [
         114.08,
         36.27
        ],
        [
         114.043,
         36.303
        ],
        [
         114.056,
         36.329
        ],
        [
         114.003,
         36.334
        ],
        [
         113.982,
         36.318
        ],
        [
         113.963,
         36.354
        ],
        [
         113.911,
         36.315
        ],
        [
         113.882,
         36.354
        ],
        [
         113.849,
         36.348
        ],
        [
         113.857,
         36.329
        ],
        [
         113.813,
         36.332
        ],
        [
         113.755,
         36.366
        ],
        [
         113.731,
         36.363
        ],
        [
         113.736,
         36.325
        ],
        [
         113.712,
         36.303
        ],
        [
         113.716,
         36.262
        ],
        [
         113.682,
         36.216
        ],
        [
         113.698,
         36.182
        ],
        [
         113.651,
         36.174
        ],
        [
         113.706,
         36.149
        ],
        [
         113.713,
         36.13
        ],
        [
         113.655,
         36.125
        ],
        [
         113.671,
         36.116
        ],
        [
         113.686,
         36.056
        ],
        [
         113.66,
         36.035
        ],
        [
         113.695,
         36.027
        ],
        [
         113.679,
         35.986
        ],
        [
         113.649,
         35.994
        ],
        [
         113.654,
         35.932
        ],
        [
         113.638,
         35.87
        ],
        [
         113.661,
         35.837
        ],
        [
         113.583,
         35.818
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
         113.348,
         35.468
        ],
        [
         113.312,
         35.481
        ],
        [
         113.304,
         35.427
        ],
        [
         113.243,
         35.449
        ],
        [
         113.19,
         35.449
        ],
        [
         113.185,
         35.409
        ],
        [
         113.165,
         35.413
        ],
        [
         113.149,
         35.351
        ],
        [
         113.126,
         35.332
        ],
        [
         113.067,
         35.354
        ],
        [
         112.996,
         35.362
        ],
        [
         112.986,
         35.34
        ],
        [
         112.992,
         35.296
        ],
        [
         112.936,
         35.284
        ],
        [
         112.934,
         35.263
        ],
        [
         112.884,
         35.244
        ],
        [
         112.822,
         35.258
        ],
        [
         112.773,
         35.208
        ],
        [
         112.72,
         35.206
        ],
        [
         112.628,
         35.263
        ],
        [
         112.637,
         35.226
        ],
        [
         112.513,
         35.218
        ],
        [
         112.391,
         35.239
        ],
        [
         112.368,
         35.22
        ],
        [
         112.288,
         35.22
        ],
        [
         112.305,
         35.252
        ],
        [
         112.242,
         35.235
        ],
        [
         112.217,
         35.253
        ],
        [
         112.138,
         35.271
        ],
        [
         112.059,
         35.28
        ],
        [
         112.079,
         35.219
        ],
        [
         112.04,
         35.194
        ],
        [
         112.066,
         35.153
        ],
        [
         112.056,
         35.099
        ],
        [
         112.062,
         35.056
        ],
        [
         112.039,
         35.046
        ],
        [
         112.019,
         35.069
        ],
        [
         111.978,
         35.067
        ],
        [
         111.933,
         35.083
        ],
        [
         111.81,
         35.062
        ],
        [
         111.807,
         35.033
        ],
        [
         111.74,
         35.005
        ],
        [
         111.664,
         34.984
        ],
        [
         111.682,
         34.951
        ],
        [
         111.647,
         34.939
        ],
        [
         111.618,
         34.895
        ],
        [
         111.592,
         34.881
        ],
        [
         111.57,
         34.843
        ],
        [
         111.544,
         34.853
        ],
        [
         111.503,
         34.83
        ],
        [
         111.439,
         34.838
        ],
        [
         111.389,
         34.815
        ],
        [
         111.346,
         34.832
        ],
        [
         111.292,
         34.807
        ],
        [
         111.255,
         34.82
        ],
        [
         111.233,
         34.79
        ],
        [
         111.149,
         34.808
        ],
        [
         111.118,
         34.757
        ],
        [
         111.035,
         34.741
        ],
        [
         110.976,
         34.706
        ],
        [
         110.92,
         34.73
        ],
        [
         110.903,
         34.669
        ],
        [
         110.884,
         34.644
        ],
        [
         110.825,
         34.616
        ],
        [
         110.792,
         34.65
        ],
        [
         110.749,
         34.652
        ],
        [
         110.71,
         34.605
        ],
        [
         110.611,
         34.608
        ],
        [
         110.533,
         34.583
        ],
        [
         110.488,
         34.611
        ],
        [
         110.425,
         34.588
        ],
        [
         110.379,
         34.601
        ],
        [
         110.367,
         34.567
        ],
        [
         110.405,
         34.558
        ],
        [
         110.372,
         34.544
        ],
        [
         110.361,
         34.517
        ],
        [
         110.403,
         34.433
        ],
        [
         110.403,
         34.433
        ],
        [
         110.473,
         34.393
        ],
        [
         110.504,
         34.337
        ],
        [
         110.452,
         34.293
        ],
        [
         110.429,
         34.288
        ],
        [
         110.44,
         34.243
        ],
        [
         110.508,
         34.217
        ],
        [
         110.552,
         34.213
        ],
        [
         110.558,
         34.193
        ],
        [
         110.622,
         34.177
        ],
        [
         110.642,
         34.161
        ],
        [
         110.614,
         34.113
        ],
        [
         110.592,
         34.102
        ],
        [
         110.587,
         34.023
        ],
        [
         110.621,
         34.036
        ],
        [
         110.671,
         33.966
        ],
        [
         110.666,
         33.938
        ],
        [
         110.627,
         33.925
        ],
        [
         110.629,
         33.91
        ],
        [
         110.587,
         33.888
        ],
        [
         110.612,
         33.852
        ],
        [
         110.663,
         33.853
        ],
        [
         110.712,
         33.834
        ],
        [
         110.741,
         33.799
        ],
        [
         110.782,
         33.796
        ],
        [
         110.817,
         33.751
        ],
        [
         110.832,
         33.714
        ],
        [
         110.824,
         33.686
        ],
        [
         110.879,
         33.634
        ],
        [
         110.967,
         33.609
        ],
        [
         111.004,
         33.579
        ],
        [
         111.003,
         33.536
        ],
        [
         111.027,
         33.478
        ],
        [
         111.027,
         33.468
        ],
        [
         110.996,
         33.436
        ],
        [
         111.026,
         33.375
        ],
        [
         111.026,
         33.34
        ],
        [
         115.363,
         33.34
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         110.379,
         34.601
        ],
        [
         110.295,
         34.611
        ],
        [
         110.269,
         34.63
        ],
        [
         110.23,
         34.693
        ],
        [
         110.243,
         34.726
        ],
        [
         110.247,
         34.789
        ],
        [
         110.231,
         34.881
        ],
        [
         110.262,
         34.944
        ],
        [
         110.321,
         35.005
        ],
        [
         110.374,
         35.134
        ],
        [
         110.364,
         35.198
        ],
        [
         110.379,
         35.211
        ],
        [
         110.375,
         35.252
        ],
        [
         110.45,
         35.328
        ],
        [
         110.478,
         35.414
        ],
        [
         110.531,
         35.511
        ],
        [
         110.568,
         35.54
        ],
        [
         110.589,
         35.602
        ],
        [
         110.61,
         35.632
        ],
        [
         110.578,
         35.702
        ],
        [
         110.571,
         35.801
        ],
        [
         110.55,
         35.838
        ],
        [
         110.549,
         35.878
        ],
        [
         110.512,
         35.88
        ],
        [
         110.517,
         35.919
        ],
        [
         110.502,
         35.948
        ],
        [
         110.517,
         35.972
        ],
        [
         110.493,
         35.994
        ],
        [
         110.492,
         36.035
        ],
        [
         110.468,
         36.075
        ],
        [
         110.447,
         36.164
        ],
        [
         110.456,
         36.227
        ],
        [
         110.474,
         36.248
        ],
        [
         110.474,
         36.307
        ],
        [
         110.46,
         36.328
        ],
        [
         110.487,
         36.394
        ],
        [
         110.49,
         36.43
        ],
        [
         110.473,
         36.453
        ],
        [
         110.504,
         36.488
        ],
        [
         110.489,
         36.557
        ],
        [
         110.497,
         36.582
        ],
        [
         110.448,
         36.621
        ],
        [
         110.427,
         36.658
        ],
        [
         110.395,
         36.677
        ],
        [
         110.403,
         36.697
        ],
        [
         110.438,
         36.686
        ],
        [
         110.447,
         36.738
        ],
        [
         110.408,
         36.776
        ],
        [
         110.424,
         36.818
        ],
        [
         110.407,
         36.825
        ],
        [
         110.424,
         36.856
        ],
        [
         110.376,
         36.882
        ],
        [
         110.409,
         36.892
        ],
        [
         110.424,
         36.964
        ],
        [
         110.382,
         37.002
        ],
        [
         110.383,
         37.022
        ],
        [
         110.427,
         37.009
        ],
        [
         110.417,
         37.027
        ],
        [
         110.461,
         37.045
        ],
        [
         110.496,
         37.087
        ],
        [
         110.536,
         37.115
        ],
        [
         110.535,
         37.138
        ],
        [
         110.591,
         37.187
        ],
        [
         110.652,
         37.257
        ],
        [
         110.662,
         37.282
        ],
        [
         110.69,
         37.287
        ],
        [
         110.679,
         37.318
        ],
        [
         110.695,
         37.35
        ],
        [
         110.642,
         37.36
        ],
        [
         110.631,
         37.373
        ],
        [
         110.644,
         37.435
        ],
        [
         110.74,
         37.449
        ],
        [
         110.759,
         37.475
        ],
        [
         110.771,
         37.538
        ],
        [
         110.795,
         37.559
        ],
        [
         110.772,
         37.595
        ],
        [
         110.769,
         37.61
        ],
        [
         107.71,
         37.61
        ],
        [
         107.71,
         36.81
        ],
        [
         107.722,
         36.802
        ],
        [
         107.742,
         36.812
        ],
        [
         107.768,
         36.793
        ],
        [
         107.867,
         36.767
        ],
        [
         107.907,
         36.75
        ],
        [
         107.914,
         36.721
        ],
        [
         107.941,
         36.695
        ],
        [
         107.939,
         36.656
        ],
        [
         108.007,
         36.683
        ],
        [
         108.023,
         36.648
        ],
        [
         108.002,
         36.639
        ],
        [
         108.061,
         36.592
        ],
        [
         108.08,
         36.614
        ],
        [
         108.093,
         36.587
        ],
        [
         108.164,
         36.564
        ],
        [
         108.198,
         36.63
        ],
        [
         108.223,
         36.631
        ],
        [
         108.205,
         36.607
        ],
        [
         108.205,
         36.607
        ],
        [
         108.211,
         36.577
        ],
        [
         108.246,
         36.571
        ],
        [
         108.262,
         36.549
        ],
        [
         108.34,
         36.559
        ],
        [
         108.365,
         36.52
        ],
        [
         108.392,
         36.506
        ],
        [
         108.408,
         36.459
        ],
        [
         108.461,
         36.423
        ],
        [
         108.495,
         36.422
        ],
        [
         108.515,
         36.446
        ],
        [
         108.51,
         36.474
        ],
        [
         108.563,
         36.439
        ],
        [
         108.619,
         36.434
        ],
        [
         108.652,
         36.385
        ],
        [
         108.642,
         36.359
        ],
        [
         108.646,
         36.254
        ],
        [
         108.713,
         36.139
        ],
        [
         108.682,
         36.062
        ],
        [
         108.689,
         36.021
        ],
        [
         108.66,
         35.991
        ],
        [
         108.652,
         35.948
        ],
        [
         108.594,
         35.951
        ],
        [
         108.563,
         35.921
        ],
        [
         108.519,
         35.905
        ],
        [
         108.499,
         35.872
        ],
        [
         108.528,
         35.824
        ],
        [
         108.534,
         35.746
        ],
        [
         108.518,
         35.7
        ],
        [
         108.539,
         35.606
        ],
        [
         108.618,
         35.557
        ],
        [
         108.626,
         35.537
        ],
        [
         108.606,
         35.503
        ],
        [
         108.631,
         35.419
        ],
        [
         108.61,
         35.355
        ],
        [
         108.615,
         35.329
        ],
        [
         108.583,
         35.295
        ],
        [
         108.547,
         35.305
        ],
        [
         108.489,
         35.275
        ],
        [
         108.361,
         35.28
        ],
        [
         108.345,
         35.301
        ],
        [
         108.297,
         35.268
        ],
        [
         108.239,
         35.256
        ],
        [
         108.222,
         35.297
        ],
        [
         108.175,
         35.305
        ],
        [
         108.095,
         35.28
        ],
        [
         108.049,
         35.254
        ],
        [
         107.95,
         35.245
        ],
        [
         107.96,
         35.263
        ],
        [
         107.867,
         35.256
        ],
        [
         107.842,
         35.277
        ],
        [
         107.746,
         35.312
        ],
        [
         107.737,
         35.267
        ],
        [
         107.71,
         35.263
        ],
        [
         107.71,
         35.178
        ],
        [
         107.716,
         35.168
        ],
        [
         107.728,
         35.12
        ],
        [
         107.77,
         35.064
        ],
        [
         107.77,
         35.064
        ],
        [
         107.773,
         35.061
        ],
        [
         107.773,
         35.061
        ],
        [
         107.814,
         35.025
        ],
        [
         107.847,
         35.025
        ],
        [
         107.863,
         34.999
        ],
        [
         107.842,
         34.979
        ],
        [
         107.742,
         34.954
        ],
        [
         107.71,
         34.952
        ],
        [
         107.71,
         33.34
        ],
        [
         111.026,
         33.34
        ],
        [
         111.026,
         33.375
        ],
        [
         110.996,
         33.436
        ],
        [
         111.027,
         33.468
        ],
        [
         111.021,
         33.471
        ],
        [
         111.022,
         33.476
        ],
        [
         111.027,
         33.478
        ],
        [
         111.003,
         33.536
        ],
        [
         111.004,
         33.579
        ],
        [
         110.967,
         33.609
        ],
        [
         110.879,
         33.634
        ],
        [
         110.824,
         33.686
        ],
        [
         110.832,
         33.714
        ],
        [
         110.817,
         33.751
        ],
        [
         110.782,
         33.796
        ],
        [
         110.741,
         33.799
        ],
        [
         110.712,
         33.834
        ],
        [
         110.663,
         33.853
        ],
        [
         110.612,
         33.852
        ],
        [
         110.587,
         33.888
        ],
        [
         110.629,
         33.91
        ],
        [
         110.627,
         33.925
        ],
        [
         110.666,
         33.938
        ],
        [
         110.671,
         33.966
        ],
        [
         110.621,
         34.036
        ],
        [
         110.587,
         34.023
        ],
        [
         110.592,
         34.102
        ],
        [
         110.614,
         34.113
        ],
        [
         110.642,
         34.161
        ],
        [
         110.622,
         34.177
        ],
        [
         110.558,
         34.193
        ],
        [
         110.552,
         34.213
        ],
        [
         110.508,
         34.217
        ],
        [
         110.44,
         34.243
        ],
        [
         110.429,
         34.288
        ],
        [
         110.452,
         34.293
        ],
        [
         110.504,
         34.337
        ],
        [
         110.473,
         34.393
        ],
        [
         110.403,
         34.433
        ],
        [
         110.403,
         34.433
        ],
        [
         110.361,
         34.517
        ],
        [
         110.372,
         34.544
        ],
        [
         110.405,
         34.558
        ],
        [
         110.367,
         34.567
        ],
        [
         110.379,
         34.601
        ]
       ]
      ],
      [
       [
        [
         111.027,
         33.478
        ],
        [
         111.022,
         33.476
        ],
        [
         111.021,
         33.471
        ],
        [
         111.027,
         33.468
        ],
        [
         111.027,
         33.478
        ]
       ]
      ]
     ]
    },
    "n": "陕西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         107.71,
         34.952
        ],
        [
         107.742,
         34.954
        ],
        [
         107.842,
         34.979
        ],
        [
         107.863,
         34.999
        ],
        [
         107.847,
         35.025
        ],
        [
         107.814,
         35.025
        ],
        [
         107.773,
         35.061
        ],
        [
         107.773,
         35.061
        ],
        [
         107.77,
         35.064
        ],
        [
         107.77,
         35.064
        ],
        [
         107.728,
         35.12
        ],
        [
         107.716,
         35.168
        ],
        [
         107.71,
         35.178
        ],
        [
         107.71,
         35.263
        ],
        [
         107.737,
         35.267
        ],
        [
         107.746,
         35.312
        ],
        [
         107.842,
         35.277
        ],
        [
         107.867,
         35.256
        ],
        [
         107.96,
         35.263
        ],
        [
         107.95,
         35.245
        ],
        [
         108.049,
         35.254
        ],
        [
         108.095,
         35.28
        ],
        [
         108.175,
         35.305
        ],
        [
         108.222,
         35.297
        ],
        [
         108.239,
         35.256
        ],
        [
         108.297,
         35.268
        ],
        [
         108.345,
         35.301
        ],
        [
         108.361,
         35.28
        ],
        [
         108.489,
         35.275
        ],
        [
         108.547,
         35.305
        ],
        [
         108.583,
         35.295
        ],
        [
         108.615,
         35.329
        ],
        [
         108.61,
         35.355
        ],
        [
         108.631,
         35.419
        ],
        [
         108.606,
         35.503
        ],
        [
         108.626,
         35.537
        ],
        [
         108.618,
         35.557
        ],
        [
         108.539,
         35.606
        ],
        [
         108.518,
         35.7
        ],
        [
         108.534,
         35.746
        ],
        [
         108.528,
         35.824
        ],
        [
         108.499,
         35.872
        ],
        [
         108.519,
         35.905
        ],
        [
         108.563,
         35.921
        ],
        [
         108.594,
         35.951
        ],
        [
         108.652,
         35.948
        ],
        [
         108.66,
         35.991
        ],
        [
         108.689,
         36.021
        ],
        [
         108.682,
         36.062
        ],
        [
         108.713,
         36.139
        ],
        [
         108.646,
         36.254
        ],
        [
         108.642,
         36.359
        ],
        [
         108.652,
         36.385
        ],
        [
         108.619,
         36.434
        ],
        [
         108.563,
         36.439
        ],
        [
         108.51,
         36.474
        ],
        [
         108.515,
         36.446
        ],
        [
         108.495,
         36.422
        ],
        [
         108.461,
         36.423
        ],
        [
         108.408,
         36.459
        ],
        [
         108.392,
         36.506
        ],
        [
         108.365,
         36.52
        ],
        [
         108.34,
         36.559
        ],
        [
         108.262,
         36.549
        ],
        [
         108.246,
         36.571
        ],
        [
         108.211,
         36.577
        ],
        [
         108.205,
         36.607
        ],
        [
         108.205,
         36.607
        ],
        [
         108.223,
         36.631
        ],
        [
         108.198,
         36.63
        ],
        [
         108.164,
         36.564
        ],
        [
         108.093,
         36.587
        ],
        [
         108.08,
         36.614
        ],
        [
         108.061,
         36.592
        ],
        [
         108.002,
         36.639
        ],
        [
         108.023,
         36.648
        ],
        [
         108.007,
         36.683
        ],
        [
         107.939,
         36.656
        ],
        [
         107.941,
         36.695
        ],
        [
         107.914,
         36.721
        ],
        [
         107.907,
         36.75
        ],
        [
         107.867,
         36.767
        ],
        [
         107.768,
         36.793
        ],
        [
         107.742,
         36.812
        ],
        [
         107.722,
         36.802
        ],
        [
         107.71,
         36.81
        ],
        [
         107.71,
         34.952
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        110.781,
        37.61
       ],
       [
        110.758,
        37.525
       ],
       [
        110.719,
        37.465
       ],
       [
        110.664,
        37.434
       ],
       [
        110.644,
        37.384
       ],
       [
        110.658,
        37.316
       ],
       [
        110.61,
        37.217
       ],
       [
        110.5,
        37.087
       ],
       [
        110.427,
        37.021
       ],
       [
        110.391,
        37.019
       ],
       [
        110.384,
        37.005
       ],
       [
        110.407,
        36.98
       ],
       [
        110.408,
        36.919
       ],
       [
        110.387,
        36.823
       ],
       [
        110.393,
        36.763
       ],
       [
        110.425,
        36.739
       ],
       [
        110.428,
        36.717
       ],
       [
        110.403,
        36.698
       ],
       [
        110.417,
        36.648
       ],
       [
        110.471,
        36.566
       ],
       [
        110.486,
        36.429
       ],
       [
        110.46,
        36.237
       ],
       [
        110.49,
        36.006
       ],
       [
        110.576,
        35.733
       ],
       [
        110.579,
        35.534
       ],
       [
        110.459,
        35.343
       ],
       [
        110.366,
        35.234
       ],
       [
        110.316,
        35.135
       ],
       [
        110.278,
        35.008
       ],
       [
        110.262,
        34.868
       ],
       [
        110.27,
        34.637
       ],
       [
        110.465,
        34.597
       ],
       [
        110.619,
        34.604
       ],
       [
        110.795,
        34.645
       ],
       [
        110.89,
        34.683
       ],
       [
        110.97,
        34.724
       ],
       [
        111.027,
        34.746
       ],
       [
        111.101,
        34.795
       ],
       [
        111.243,
        34.83
       ],
       [
        111.453,
        34.852
       ],
       [
        111.589,
        34.899
       ],
       [
        111.651,
        34.972
       ],
       [
        111.736,
        35.03
       ],
       [
        111.844,
        35.074
       ],
       [
        112.118,
        35.022
       ],
       [
        112.559,
        34.872
       ],
       [
        112.857,
        34.809
       ],
       [
        113.012,
        34.831
       ],
       [
        113.156,
        34.875
       ],
       [
        113.288,
        34.94
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
       115.382,
       35.597
      ],
      [
       115.463,
       35.681
      ],
      [
       115.49,
       35.696
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   107.71,
   33.34,
   115.49,
   37.61
  ]
 }
};
