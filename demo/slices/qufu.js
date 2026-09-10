// 本文件由 tools/build.py 自动生成（切片 qufu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["qufu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["qufu"] = {
 "meta": {
  "kind": "county",
  "region": "huabei",
  "province": "shandong",
  "title": "曲阜（孔子故里·儒源·三孔）",
  "dossier_label": "曲阜",
  "subtitle": "鲁国故都 · 孔庙孔林孔府 · 儒学圣地 · 邹鲁之源",
  "primary_place": "qufu_mingcheng",
  "dossier_event": "event:ev_qufu_01",
  "vocab_pack": "qufu",
  "terrain_grid": "china_coarse",
  "lead": "曲阜位于山东西南部，周为鲁国都，春秋为孔子（前551—前479）故里，儒家由此发源；前478年鲁哀公始立孔庙，开两千余年孔庙之制；汉武帝独尊儒术后升为天下儒学圣地。三孔1994年列入UNESCO（704）。曲阜即潮州“海滨邹鲁”之“邹鲁”本源。",
  "parties_note": "史料以史记·孔子世家、论语、孟子为本，曲阜县志为后世官修，现代考订作补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_qufu_01": "孔子诞生",
   "event:ev_qufu_02": "孔庙始立",
   "event:ev_qufu_03": "独尊儒术",
   "place:qufu_mingcheng": "曲阜明故城",
   "place:kong_miao": "孔庙",
   "person:kong_zi": "孔子"
  },
  "epoch": "spring_autumn",
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
    "note": "曲阜鲁国故都+孔庙之制+独尊儒术→儒乡政治文化秩序"
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
    "note": "孔庙大成殿官式建筑+孔府衍圣公制度→礼制建筑与世袭贵族体系"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "孔子私学平民教育+孔氏宗族→邹鲁儒乡社会与道统再生产"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "international"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "泗河平原地理+独尊儒术事件→曲阜由鲁邑升为天下儒学圣地"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=qufu",
  "key": "qufu",
  "scene_id": "qufu"
 },
 "sources": [
  {
   "id": "shiji_kongzi",
   "title": "史记·孔子世家",
   "party": "西汉·官修",
   "distance_label": "西汉司马迁撰，距孔子事约四百年，为最早系统孔子传记",
   "stance_label": "正史传记",
   "compiler": "司马迁（西汉）",
   "color": "#A0473A",
   "period": "西汉"
  },
  {
   "id": "lunyu",
   "title": "论语",
   "party": "战国·私修",
   "distance_label": "孔门弟子及再传弟子辑录，距孔子当时最近之言行记录",
   "stance_label": "语录体私修",
   "compiler": "孔门后学（战国）",
   "color": "#8E7CC3",
   "period": "战国"
  },
  {
   "id": "qufu_xianzhi",
   "title": "曲阜县志（三孔志）",
   "party": "后世官修",
   "distance_label": "明清屡修地方志，距三孔建制事数百年至两千余年",
   "stance_label": "地方志",
   "compiler": "《曲阜县志》及三孔专志（明清官修）",
   "color": "#C0703A",
   "period": "明清"
  },
  {
   "id": "mengzi",
   "title": "孟子",
   "party": "战国·私修",
   "distance_label": "孟子自撰及门人记述，距邹鲁事为当时人记当时事",
   "stance_label": "诸子私修",
   "compiler": "孟轲及门人（战国）",
   "color": "#8E7CC3",
   "period": "战国"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "stance_label": "学界考证",
   "compiler": "孔子与儒学、曲阜三孔综合研究",
   "color": "#2E7D8F",
   "period": "今"
  }
 ],
 "places": [
  {
   "id": "qufu_mingcheng",
   "name": "曲阜明故城（阙里）",
   "lon": 35.578,
   "lat": 116.97,
   "type": "古城",
   "modern": "山东省济宁市曲阜市",
   "note": "周鲁国都、孔子故里，明清曲阜城（明故城）仍存，孔庙、孔府居中，为阙里世居之地。",
   "geo_match": "approx",
   "geo_note": "曲阜明故城中心近似坐标（35.578, 116.970），待CHGIS精修",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "kong_miao",
   "name": "孔庙",
   "lon": 35.5967,
   "lat": 116.9833,
   "type": "礼制建筑",
   "modern": "曲阜市南马道街",
   "note": "祭祀孔子的庙宇，前478年始立，历代重修，现存主体为明清建筑，大成殿为清雍正重建，与北京故宫太和殿、岱庙天贶殿并称东方三大殿。",
   "geo_match": "approx",
   "geo_note": "孔庙近似坐标（35.5967, 116.9833），取自公开地理数据，待CHGIS精修",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "kong_lin",
   "name": "孔林",
   "lon": 35.61,
   "lat": 116.97,
   "type": "陵园",
   "modern": "曲阜城北1.1公里",
   "note": "孔子及其后裔墓地，占地约183公顷，存孔子墓与历代孔氏墓葬十余万座，延续两千余年。",
   "geo_match": "approx",
   "geo_note": "孔林位于曲阜城北，近似坐标（35.610, 116.970），待CHGIS精修",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "kong_fu",
   "name": "孔府（衍圣公府）",
   "lon": 35.597,
   "lat": 116.985,
   "type": "府邸",
   "modern": "曲阜市东华门大街",
   "note": "孔子嫡长孙世袭衍圣公起居办公之所，明嘉靖后规模定型，东邻孔庙，存明清档案六万余件。",
   "geo_match": "approx",
   "geo_note": "孔府东邻孔庙，近似坐标（35.597, 116.985），待CHGIS精修",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "ni_shan",
   "name": "尼山",
   "lon": 35.52,
   "lat": 117.08,
   "type": "山/书院",
   "modern": "曲阜市东南约30公里",
   "note": "传统孔子诞生地，后世建尼山书院、文德林，以尼山喻儒学道统之源。",
   "geo_match": "approx",
   "geo_note": "尼山近似坐标（35.52, 117.08），待CHGIS精修",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "si_he",
   "name": "泗河（洙泗）",
   "lon": 35.6,
   "lat": 116.93,
   "type": "河流",
   "modern": "曲阜市西",
   "note": "泗河（古与洙水并称洙泗）流经曲阜，相传孔子设教洙泗之间，后世以洙泗代称儒学分脉。",
   "geo_match": "approx",
   "geo_note": "泗河曲阜段近似坐标（35.60, 116.93），待CHGIS精修",
   "elev": null,
   "off_grid": true
  }
 ],
 "persons": [
  {
   "id": "kong_zi",
   "name": "孔子",
   "role": "春秋·鲁·儒家创始人",
   "side": "spring_autumn",
   "note": "（前551—前479）名丘字仲尼，鲁国陬邑（今曲阜）人，儒家学派创始人，删述六经、有教无类，被尊为至圣先师。",
   "influence": 1
  },
  {
   "id": "meng_zi",
   "name": "孟子",
   "role": "战国·邹·儒家代表人物",
   "side": "warring_states",
   "note": "（前372—前289）名轲，邹（今邹城，曲阜以南）人，受业子思之门，倡性善、仁政，使邹鲁为儒乡之号。",
   "influence": 1
  },
  {
   "id": "yan_hui",
   "name": "颜回",
   "role": "春秋·鲁·孔子首席弟子",
   "side": "spring_autumn",
   "note": "（前521—前481）字子渊，鲁人，孔子首席弟子，以德行称，后世尊复圣，曲阜有复圣庙祀之。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "QF_R01",
   "subject": "place:qufu_mingcheng",
   "predicate": "曲阜为鲁国故都、孔子故里",
   "value_text": "曲阜位于山东西南部泗河支流冲积平原，周为鲁国都，春秋为孔子故里，两千余年孔氏世居之地。",
   "value": "",
   "source": "shiji_kongzi",
   "layer": "record",
   "era": "春秋",
   "place": "qufu_mingcheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "曲阜，鲁故都，孔子生处，陬邑之阙里在焉（《史记·孔子世家》/ 曲阜地方志）。",
   "note": "地理形胜：鲁国故都·泗河平原。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "西汉·官修",
   "_faction": null
  },
  {
   "id": "QF_R02",
   "subject": "event:ev_qufu_01",
   "predicate": "孔子生于曲阜，开儒家学派",
   "value_text": "孔子（前551—前479）生于鲁国陬邑（今曲阜尼山/阙里），整理六经、创私学，开儒家学派。",
   "value": "",
   "source": "lunyu",
   "layer": "record",
   "era": "春秋",
   "place": "qufu_mingcheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "孔子生而首上圩顶，因名丘，字仲尼，鲁昌平乡陬邑人（《史记·孔子世家》/ 论语）。",
   "note": "事件 + 思想（儒源）。",
   "dims": [
    6,
    5
   ],
   "dim_source": "declared",
   "_party": "战国·私修",
   "_faction": null
  },
  {
   "id": "QF_R03",
   "subject": "event:ev_qufu_02",
   "predicate": "鲁哀公始立孔庙",
   "value_text": "鲁哀公十七年（前478）孔子卒后次年，鲁哀公「因庙为宅」始立孔庙，开两千余年孔庙之制。",
   "value": "",
   "source": "shiji_kongzi",
   "layer": "record",
   "era": "春秋",
   "place": "kong_miao",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "哀公诔之曰尼父，因庙为宅，岁时奉祀，后世孔庙之制自此始（《史记·孔子世家》）。",
   "note": "事件 + 制度（孔庙之制）。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "西汉·官修",
   "_faction": null
  },
  {
   "id": "QF_R04",
   "subject": "event:ev_qufu_03",
   "predicate": "汉武帝独尊儒术，儒学定为官学",
   "value_text": "汉武帝建元后罢黜百家、独尊儒术，立五经博士、兴太学，儒学定为官学，曲阜由此为儒学圣地。",
   "value": "",
   "source": "shiji_kongzi",
   "layer": "record",
   "era": "汉",
   "place": "qufu_mingcheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "武帝罢黜百家、表章六经，立五经博士，儒术于是为官方之学（《汉书》义/ 史记世系）。",
   "note": "事件 + 思想（官学化）。",
   "dims": [
    6,
    5
   ],
   "dim_source": "declared",
   "_party": "西汉·官修",
   "_faction": null
  },
  {
   "id": "QF_R05",
   "subject": "place:kong_miao",
   "predicate": "孔庙现存规制主要为明清重建",
   "value_text": "孔庙历代重修，现存主体为明清建造，大成殿为清雍正重建，黄瓦重檐、规制仿帝王宫城。",
   "value": "",
   "source": "qufu_xianzhi",
   "layer": "record",
   "era": "明清",
   "place": "kong_miao",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "孔庙……顺治、雍正间屡修，大成殿重檐黄瓦，九楹三阶，规制侔于宫殿（《曲阜县志》/ 三孔志）。",
   "note": "技术（官式建筑）+ 制度。",
   "dims": [
    2,
    3
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QF_R06",
   "subject": "place:kong_lin",
   "predicate": "孔林为孔子及后裔墓地",
   "value_text": "孔林为孔子及其后裔墓地，占地约183公顷，存孔子墓与历代孔氏墓葬十余万座，延续两千余年。",
   "value": "",
   "source": "qufu_xianzhi",
   "layer": "record",
   "era": "春秋至清",
   "place": "kong_lin",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "孔林，孔子冢在焉，冢百亩，后世子孙附葬，冢墓以十万计（《曲阜县志》/ 三孔志）。",
   "note": "地理（陵园区）+ 制度。",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QF_S01",
   "subject": "place:kong_fu",
   "predicate": "孔府为衍圣公世袭府第",
   "value_text": "孔府（衍圣公府）为孔子嫡长孙世袭衍圣公起居与办公之所，明嘉靖后规模定型，存明清档案六万余件。",
   "value": "",
   "source": "qufu_xianzhi",
   "layer": "scholarship",
   "era": "明清",
   "place": "kong_fu",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "衍圣公府，世袭公爵第，明嘉靖间拓建，藏明代文书、清代档案六万余件，为孔氏家政中枢（孔府档案研究）。",
   "note": "制度（世袭贵族）+ 社会。",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QF_S02",
   "subject": "person:meng_zi",
   "predicate": "孟子发展仁学，邹鲁成儒乡代称",
   "value_text": "孟子（邹人，前372—前289）发展孔子仁学为仁政学说，使邹鲁之地成为儒乡代称，后世以邹鲁喻文教昌盛。",
   "value": "",
   "source": "mengzi",
   "layer": "scholarship",
   "era": "战国",
   "place": "qufu_mingcheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "孟子，邹人也，受业子思之门，道性善、称仁政，邹鲁遂为儒乡之号（孟子研究）。",
   "note": "思想（仁政）+ 社会。",
   "dims": [
    5,
    4
   ],
   "dim_source": "declared",
   "_party": "战国·私修",
   "_faction": null
  },
  {
   "id": "QF_S03",
   "subject": "person:kong_zi",
   "predicate": "孔子首创私学、有教无类",
   "value_text": "孔子首创私学、有教无类，弟子三千、身通六艺者七十二，奠定平民教育传统。",
   "value": "",
   "source": "lunyu",
   "layer": "scholarship",
   "era": "春秋",
   "place": "qufu_mingcheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "孔子以诗书礼乐教，弟子盖三千焉，身通六艺者七十二人，有教无类（论语/ 史记世家）。",
   "note": "社会（平民教育）+ 思想。",
   "dims": [
    4,
    5
   ],
   "dim_source": "declared",
   "_party": "战国·私修",
   "_faction": null
  },
  {
   "id": "QF_I01",
   "subject": "place:qufu_mingcheng",
   "predicate": "泗河平原宜农宜学，孕育邹鲁文化",
   "value_text": "曲阜地处泗河冲积平原、鲁中南低山丘陵之间，水土宜农宜学，稳定农耕支撑邹鲁礼乐文化。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "先秦",
   "place": "qufu_mingcheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "曲阜居泗河之滨、泰山之阳，土厚泉甘，农穰而学兴，邹鲁之风由此成（学界综合推论）。",
   "note": "地理→社会/文化。",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "QF_I02",
   "subject": "place:kong_miao",
   "predicate": "孔庙建筑等级体现帝王尊儒",
   "value_text": "孔庙大成殿重檐庑殿顶、十一开间、黄琉璃瓦，等级超越一般文庙，体现帝王尊儒意向。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "明清",
   "place": "kong_miao",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "大成殿重檐庑殿、十一楹黄瓦，规制逾常祀，显历代帝王崇儒之礼（学界建筑史推论）。",
   "note": "技术（官式等级）+ 制度。",
   "dims": [
    2,
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "QF_I03",
   "subject": "place:ni_shan",
   "predicate": "尼山为儒学道统象征",
   "value_text": "尼山为传统孔子诞生地，后世建尼山书院、文德林，以尼山喻儒学道统之源。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "春秋至清",
   "place": "ni_shan",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "尼山，相传孔子生处，后立书院、祠宇，士人多以尼山指代道统所出（学界文化史推论）。",
   "note": "思想（道统）+ 地理。",
   "dims": [
    5,
    1
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "QF_I04",
   "subject": "event:ev_qufu_03",
   "predicate": "独尊儒术使曲阜升为儒学圣地",
   "value_text": "独尊儒术使曲阜由鲁地小邑升为天下儒学圣地，历代帝王躬祀、赐田加封。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "汉至清",
   "place": "qufu_mingcheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "自汉武表章六经，曲阜号为阙里圣地，帝王亲祀、加谥封爵相踵（学界政治史推论）。",
   "note": "事件 + 社会（圣地地位）。",
   "dims": [
    6,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "QF_I05",
   "subject": "place:si_he",
   "predicate": "洙泗为儒学分称，水文承载思想符号",
   "value_text": "洙泗（泗河）为孔子设教之所，后世以洙泗代称儒学分脉，地理水文承载思想符号。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "春秋",
   "place": "si_he",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "孔子设教洙泗之间，门人述而传之，后世遂以洙泗名儒林一派（学界思想史推论）。",
   "note": "地理 + 思想。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "QF_G01",
   "subject": "place:kong_miao",
   "predicate": "孔庙历代木构年代与修缮档案公开有限",
   "value_text": "孔庙历代重建的精确木构年代、构件与修缮档案，公开有限，技术史细节待补。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "明清",
   "place": "kong_miao",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：孔庙技术史细节。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "孔庙历代重建的木构年代、构件做法与修缮档案",
    "skills": [
     "古建筑测绘",
     "建筑史",
     "文物档案"
    ],
    "accept": "若有历次修缮记、结构测绘或考古报告，可补技术(2)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "QF_G02",
   "subject": "person:meng_zi",
   "predicate": "孟子邹邑故里与早期孟庙建制数据有限",
   "value_text": "孟子邹邑故里的精确遗址与早期孟庙建制、祠祀网络数据，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "战国",
   "place": "qufu_mingcheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：孟子祠祀与邹邑遗址。",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "孟子邹邑故里的考古遗址、早期孟庙建制与祠祀网络",
    "skills": [
     "考古学",
     "思想史",
     "祠庙研究"
    ],
    "accept": "若有遗址发掘报告或孟庙建制考，可补社会(4)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "QF_G03",
   "subject": "place:qufu_mingcheng",
   "predicate": "曲阜先秦鲁城与阙里聚落 GIS 数据不足",
   "value_text": "曲阜先秦鲁国都城与阙里聚落的精确考古 GIS 数据，公开不足。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "先秦",
   "place": "qufu_mingcheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：鲁城历史空间数据。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "lead": {
    "where": "曲阜先秦鲁国都城、阙里聚落的考古发掘与 GIS 矢量化数据",
    "skills": [
     "考古学",
     "历史地理",
     "GIS"
    ],
    "accept": "若有鲁城遗址数字化或文物普查空间数据，可补地理(1)层断言"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "QF_G01",
  "QF_G02",
  "QF_G03"
 ],
 "events": [
  {
   "id": "ev_qufu_01",
   "year": -551,
   "era": "周灵王二十一年（鲁襄公二十二年）",
   "kind": "诞生",
   "title": "孔子生于曲阜",
   "place": "qufu_mingcheng",
   "text": "约公元前551年，孔子生于鲁国昌平乡陬邑（今曲阜尼山/阙里），后周游列国、删述六经，创立儒家学派，被尊为至圣先师。",
   "subject": "event:ev_qufu_01"
  },
  {
   "id": "ev_qufu_02",
   "year": -478,
   "era": "鲁哀公十七年",
   "kind": "建制",
   "title": "鲁哀公始立孔庙",
   "place": "kong_miao",
   "text": "公元前478年孔子卒后次年，鲁哀公「因庙为宅」、岁时奉祀，开两千余年孔庙之制；后世历代重修扩建，遂成三孔核心。",
   "subject": "event:ev_qufu_02"
  },
  {
   "id": "ev_qufu_03",
   "year": -136,
   "era": "汉武帝建元年间",
   "kind": "制度化",
   "title": "独尊儒术·儒学定为官学",
   "place": "qufu_mingcheng",
   "text": "汉武帝罢黜百家、独尊儒术，立五经博士、兴太学，儒学由私门之学升为国家官学，曲阜由此为天下儒学圣地，历代帝王躬祀。",
   "subject": "event:ev_qufu_03"
  }
 ],
 "edges": [
  {
   "from": "kong_miao",
   "to": "qufu_mingcheng",
   "kind": "within",
   "note": "孔庙位于曲阜明故城中央",
   "label": "",
   "type": "misc"
  },
  {
   "from": "kong_fu",
   "to": "kong_miao",
   "kind": "adjacent",
   "note": "孔府东邻孔庙",
   "label": "",
   "type": "misc"
  },
  {
   "from": "kong_lin",
   "to": "qufu_mingcheng",
   "kind": "near",
   "note": "孔林位于曲阜城北",
   "label": "",
   "type": "misc"
  },
  {
   "from": "ni_shan",
   "to": "qufu_mingcheng",
   "kind": "near",
   "note": "尼山在曲阜东南，传为孔子诞生地",
   "label": "",
   "type": "misc"
  },
  {
   "from": "si_he",
   "to": "qufu_mingcheng",
   "kind": "adjacent",
   "note": "泗河（洙泗）流经曲阜，孔子设教之所",
   "label": "",
   "type": "misc"
  }
 ],
 "control": [],
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
   "西汉·官修",
   "战国·私修",
   "后世官修",
   "学界"
  ],
  "party_bucket": {
   "西汉·官修": "西汉·官修",
   "战国·私修": "战国·私修",
   "后世官修": "后世官修",
   "学界": "学界"
  },
  "party_colors": {
   "西汉·官修": "#A0473A",
   "战国·私修": "#8E7CC3",
   "后世官修": "#C0703A",
   "学界": "#2E7D8F"
  },
  "factions": {
   "f_西汉·官修": {
    "name": "西汉·官修",
    "macro_party": "西汉·官修",
    "note": "auto"
   },
   "f_战国·私修": {
    "name": "战国·私修",
    "macro_party": "战国·私修",
    "note": "auto"
   },
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   },
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_西汉·官修": "#A0473A",
   "f_战国·私修": "#8E7CC3",
   "f_后世官修": "#C0703A",
   "f_学界": "#2E7D8F"
  }
 },
 "basemap": {
  "coastline": [],
  "land": [],
  "admin1": [],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   34.52,
   115.93,
   36.61,
   118.08
  ]
 }
};
