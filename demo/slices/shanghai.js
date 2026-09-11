// 本文件由 tools/build.py 自动生成（切片 shanghai），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shanghai"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shanghai"] = {
 "meta": {
  "kind": "county",
  "region": "exchange",
  "province": "shanghai",
  "title": "上海县/老城厢（开埠通商·租界·移民城市社会）",
  "dossier_label": "上海县",
  "subtitle": "元至元置县 · 道光开埠 · 租界华洋分治 · 移民城市与近代思潮",
  "primary_place": "shanghai_cheng",
  "dossier_event": "event:ev_shanghai_01",
  "vocab_pack": "shanghai",
  "terrain_grid": "china_coarse",
  "lead": "上海县城（老城厢）枕黄浦、临吴淞，元至元二十九年置县，为滨海一县；道光二十三年南京条约开埠，英、法租界继设，华洋分治、二元城市格局成焉。开埠后江浙移民汇聚，虞洽卿辈商帮网络与王韬辈近代思想并兴，上海骤为江海通津、中西交涉之巨埠。下方为设县、开埠、租界三条主线，点时间轴或左栏跳转。",
  "parties_note": "史料以元史、明史、清史稿及南京条约、上海租地章程等为本，上海县志、松江府志作补充，现代考订为学界视角；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_shanghai_01": "上海设县",
   "event:ev_shanghai_02": "上海开埠",
   "event:ev_shanghai_03": "租界划定",
   "place:shanghai_cheng": "上海县城",
   "person:xu_guangqi": "徐光启"
  },
  "epoch": "qing_modern",
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
    "note": "元至元置县、道光开埠与租界划定，建制与治权嵌入上海城市演进"
   },
   "material_logistics": {
    "from": [
     "economy",
     "tech"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "黄浦通海、开埠互市，上海成江海通津与中外贸易枢纽"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "江浙移民汇聚，商帮网络与同乡组织构成近代城市社会底层"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "international"
    ],
    "from_dims": [
     6,
     5
    ],
    "layer": "inference",
    "note": "开埠租界，中西交涉与西风东渐，上海成近代思想策源之一"
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
  "page": "county.html?scene=shanghai",
  "key": "shanghai",
  "scene_id": "shanghai"
 },
 "sources": [
  {
   "id": "yuan_shi",
   "title": "元史",
   "party": "明修官史",
   "stance_label": "后朝官修·仓促成书",
   "distance_label": "1369 年修成，距元亡仅一年但史源杂糅未及考订",
   "color": "#6C5C3E",
   "compiler": "宋濂等",
   "period": "明修"
  },
  {
   "id": "mingshi",
   "title": "明史",
   "juan": "卷二百五十一·徐光启传",
   "compiler": "张廷玉等",
   "compiled_year": 1739,
   "stance_label": "后朝官修",
   "distance_label": "成书 1739（清乾隆四年），距所记明清战事约百年",
   "party": "清修·明臣",
   "color": "#8C6239",
   "note": "清修官史，记徐光启历算农学与中西交涉。"
  },
  {
   "id": "nanjing_treaty",
   "title": "南京条约",
   "party": "清官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "近代史料",
   "period": "清"
  },
  {
   "id": "shanghai_zhudi_zhangcheng",
   "title": "上海租地章程（1845）",
   "party": "清官修",
   "stance_label": "清方章程·中外合定",
   "distance_label": "1845 议定，上海租界制度之始",
   "color": "#8C6239",
   "compiler": "苏松太道宫慕久与英领事巴富尔",
   "period": "清"
  },
  {
   "id": "shanghai_xianzhi",
   "title": "上海县志",
   "party": "后世官修",
   "stance_label": "地方志",
   "distance_label": "清/民屡修，距明清上海事数百年",
   "color": "#7A6A52",
   "compiler": "《上海县志》（清/民修）",
   "period": "清/民"
  },
  {
   "id": "songjiang_fuzhi",
   "title": "松江府志",
   "party": "后世官修",
   "stance_label": "地方志",
   "distance_label": "清修（博润等），距元明上海建制数百年",
   "color": "#7A6A52",
   "compiler": "《松江府志》（清修）",
   "period": "清"
  },
  {
   "id": "qingshigao",
   "title": "清史稿",
   "party": "清修官史",
   "stance_label": "民国未定稿·清方立场",
   "distance_label": "成书 1928（民国未定稿），距所记明清战事约 280–300 年",
   "color": "#7B5C3E",
   "compiler": "赵尔巽等",
   "period": "清末/民国"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "stance_label": "学界考证",
   "compiler": "上海开埠与近代城市史研究综合",
   "color": "#2E7D8F",
   "period": "今"
  }
 ],
 "places": [
  {
   "id": "shanghai_cheng",
   "name": "上海县城（老城厢）",
   "lon": 121.49,
   "lat": 31.223,
   "type": "capital",
   "modern": "今上海市黄浦区老城厢（豫园一带）",
   "note": "元至元二十九年（1292）设上海县，县治筑城于今老城厢。枕黄浦、临吴淞，为滨海一县。1843 年开埠后，城北滨江渐成交互之区，老城厢仍为民居与市廛所聚。坐标取老城厢，approx（城区级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（城区级精度），待 CHGIS 精修",
   "elev": 11
  },
  {
   "id": "bund",
   "name": "外滩（租界滨江）",
   "lon": 121.487,
   "lat": 31.245,
   "type": "port",
   "modern": "今上海市黄浦区中山东一路（外滩）",
   "note": "黄浦江西岸滨江一带。1845 年英租界划定于此，外商洋行、银行、领事馆次第兴建，为近代上海通商与中西交涉之窗。坐标取外滩中段，approx（街区级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（街区级精度），待 CHGIS 精修",
   "elev": 11
  },
  {
   "id": "yuyuan",
   "name": "豫园（城隍庙市集）",
   "lon": 121.492,
   "lat": 31.227,
   "type": "religious",
   "modern": "今上海市黄浦区豫园",
   "note": "明嘉靖万历间潘允端所筑私园，后归城隍庙，为老城厢士民游观与市集之所。开埠后城隍庙一带仍为华界繁盛市井。坐标取豫园，approx（景点级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（景点级精度），待 CHGIS 精修",
   "elev": 11
  },
  {
   "id": "huangpu_river",
   "name": "黄浦江（浦江）",
   "lon": 121.5,
   "lat": 31.22,
   "type": "river",
   "modern": "今黄浦江（吴淞江口以南段）",
   "note": "吴淞江（苏州河）外，上海境内最大通海水道，自南而北绕老城厢东折入江。县城、外滩皆滨此江，为海运、漕运与中外船舶聚泊之脉。坐标取老城厢东侧江段，approx（江河级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（江河级精度），待 CHGIS 精修",
   "elev": 11
  },
  {
   "id": "suzhou_creek",
   "name": "苏州河（吴淞江）",
   "lon": 121.475,
   "lat": 31.245,
   "type": "river",
   "modern": "今苏州河（外白渡桥一带）",
   "note": "吴淞江下游，西来汇于黄浦；外白渡桥一带为华界、租界分界与南北往来之津。坐标取外白渡桥附近，approx（江河级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（江河级精度），待 CHGIS 精修",
   "elev": 11
  }
 ],
 "persons": [
  {
   "id": "xu_guangqi",
   "name": "徐光启",
   "era": "明",
   "role": "上海县人·科学家·农政全书·中西会通",
   "note": "明万历进士，上海县人，官至礼部尚书兼文渊阁大学士。与利玛窦等传教士交，译《几何原本》、纂《农政全书》，倡中西历算农学之通，为上海文脉与近代西风东渐之先声。",
   "influence": 1
  },
  {
   "id": "gong_mujiu",
   "name": "宫慕久",
   "era": "清",
   "role": "苏松太道·1845 上海租地章程",
   "note": "清道光间苏松太道，二十五年（1845）与英领事巴富尔议定《上海租地章程》，划定英租界界址，为上海租界制度之起点。",
   "influence": 1
  },
  {
   "id": "ba_fuer",
   "name": "巴富尔（George Balfour）",
   "era": "清",
   "role": "首任驻沪英领事·开埠交涉",
   "note": "英国首任驻沪领事，道光二十三年（1843）抵沪设馆，主持上海开埠与租界初设之交涉，近代上海中外交涉之关键外人。",
   "influence": 0
  },
  {
   "id": "yu_qiaqing",
   "name": "虞洽卿",
   "era": "近代",
   "role": "宁波帮巨商·移民城市代表",
   "note": "近代宁波籍巨商，旅沪兴办轮船、银行等实业，为江浙移民在沪经商网络之代表，折射开埠后移民城市之社会结构。",
   "influence": 1
  },
  {
   "id": "wang_tao",
   "name": "王韬",
   "era": "近代",
   "role": "改良思想家·居沪著书办报",
   "note": "近代改良思想家，避居香港后长居上海，主笔《申报》《循环日报》，著《弢园文录》，倡变法自强，为沪上近代思想与报业之一脉。",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "SH_R01",
   "subject": "event:ev_shanghai_01",
   "predicate": "设县建制",
   "value_text": "元至元二十九年（1292）析华亭县东北境置上海县，隶松江府，筑城为治，上海由滨海聚落升为县级政区",
   "value": 1292,
   "source": "yuan_shi",
   "layer": "record",
   "era": "元至元二十九年",
   "place": "shanghai_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（元史·地理志：上海县，至元二十九年置）",
   "note": "元史·地理志",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "明修官史",
   "_faction": null
  },
  {
   "id": "SH_R02",
   "subject": "event:ev_shanghai_02",
   "predicate": "开埠通商",
   "value_text": "道光二十二年（1842）南京条约开上海等五口通商，二十三年（1843）上海正式开埠，英领事巴富尔抵沪设馆，上海骤为中外互市之巨埠",
   "value": 1843,
   "source": "nanjing_treaty",
   "layer": "record",
   "era": "清道光二十三年",
   "place": "bund",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（南京条约：开放上海等五处为通商口岸）",
   "note": "南京条约；清史稿·邦交志",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SH_R03",
   "subject": "event:ev_shanghai_03",
   "predicate": "租界设立",
   "value_text": "道光二十五年（1845）苏松太道宫慕久与英领事巴富尔议定《上海租地章程》，划定城北黄浦西岸为英租界；二十九年（1849）法租界继设，租界之治与华界分峙",
   "value": 1845,
   "source": "shanghai_zhudi_zhangcheng",
   "layer": "record",
   "era": "清道光二十五年",
   "place": "bund",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（上海租地章程：划定城北黄浦西岸为英租界界址）",
   "note": "上海租地章程；清史稿·邦交志",
   "dims": [
    3,
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SH_R04",
   "subject": "place:huangpu_river",
   "predicate": "形胜",
   "value_text": "黄浦江绕老城厢东折入江，通海舟楫，为海运、漕运所倚，县城与外滩皆滨此江",
   "value": null,
   "source": "songjiang_fuzhi",
   "layer": "record",
   "era": "清",
   "place": "huangpu_river",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "（松江府志：黄浦环城，通海舟楫）",
   "note": "松江府志·山川",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SH_R05",
   "subject": "place:shanghai_cheng",
   "predicate": "城厢形胜",
   "value_text": "上海县城枕黄浦江东、临吴淞江北，为滨海一县，市廛民居聚于老城厢",
   "value": null,
   "source": "shanghai_xianzhi",
   "layer": "record",
   "era": "清",
   "place": "shanghai_cheng",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "（上海县志：县城枕浦而治）",
   "note": "上海县志·舆地",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SH_R06",
   "subject": "person:xu_guangqi",
   "predicate": "中西会通",
   "value_text": "明徐光启，上海县人，从利玛窦学天文历算，译《几何原本》、纂《农政全书》，倡中西历算农学之通",
   "value": null,
   "source": "mingshi",
   "layer": "record",
   "era": "明",
   "place": "shanghai_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "（明史·徐光启传：从利玛窦学天文历算，译几何原本）",
   "note": "明史·徐光启传；农政全书",
   "dims": [
    2,
    5
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SH_S01",
   "subject": "place:shanghai_cheng",
   "predicate": "移民城市",
   "value_text": "开埠后江浙移民（宁波帮、广东帮、苏北人等）汇聚上海，上海成移民城市，社会结构为之一变",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "shanghai_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "开埠后江浙移民汇聚，上海成移民城市。",
   "note": "学界考证：近代上海社会史",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SH_S02",
   "subject": "place:bund",
   "predicate": "租界地标",
   "value_text": "外滩一带自1845年英租界划定后，洋行、银行、领事馆次第兴建，为近代上海通商与中西交涉之窗",
   "value": null,
   "source": "qingshigao",
   "layer": "scholarship",
   "era": "今",
   "place": "bund",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（清史稿·交通志：沪上租界洋行林立）",
   "note": "清史稿·邦交交通志",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SH_S03",
   "subject": "person:gong_mujiu",
   "predicate": "租界章程",
   "value_text": "苏松太道宫慕久于1845年与英领事会定《上海租地章程》，划定租界界址，为上海租界制度之起点",
   "value": null,
   "source": "shanghai_zhudi_zhangcheng",
   "layer": "scholarship",
   "era": "今",
   "place": "bund",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（上海租地章程：道台与领事会定界址）",
   "note": "上海租地章程；近代上海租界史",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SH_S04",
   "subject": "person:yu_qiaqing",
   "predicate": "宁波帮商网",
   "value_text": "近代虞洽卿等宁波籍巨商旅沪兴办轮船、银行等实业，为江浙移民在沪经商网络之代表",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "shanghai_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "虞洽卿为宁波帮旅沪巨商代表。",
   "note": "学界考证：近代商帮与移民社会",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SH_S05",
   "subject": "person:wang_tao",
   "predicate": "改良思想",
   "value_text": "近代王韬居沪著书办报（主笔《申报》《循环日报》），倡变法自强，为沪上近代思想与报业之一脉",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "shanghai_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "王韬居沪著书办报，倡变法自强。",
   "note": "学界考证：近代思想史",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SH_S06",
   "subject": "place:suzhou_creek",
   "predicate": "河浜分界",
   "value_text": "苏州河（吴淞江）西来汇于黄浦，外白渡桥一带为华界与租界分界、南北往来之津",
   "value": null,
   "source": "shanghai_xianzhi",
   "layer": "scholarship",
   "era": "今",
   "place": "suzhou_creek",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（上海县志：吴淞江贯城北，为华洋分界）",
   "note": "上海县志·水道",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SH_S07",
   "subject": "place:yuyuan",
   "predicate": "园林市集",
   "value_text": "豫园明筑，后归城隍庙，开埠后仍为华界繁盛市井与士民游观之所",
   "value": null,
   "source": "shanghai_xianzhi",
   "layer": "scholarship",
   "era": "今",
   "place": "yuyuan",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（上海县志：豫园归城隍庙，市集繁盛）",
   "note": "上海县志·古迹",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SH_I01",
   "subject": "place:huangpu_river",
   "predicate": "航运枢纽",
   "value_text": "黄浦江通海，为中外船舶聚泊与港口形成之脉，上海因之成江海通津",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "huangpu_river",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据上海港史推断",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SH_I02",
   "subject": "place:shanghai_cheng",
   "predicate": "军事地理",
   "value_text": "上海枕江滨海、控吴淞口，为东南海防与漕运要冲，县城形势因之而重",
   "value": null,
   "source": "songjiang_fuzhi",
   "layer": "inference",
   "era": "推算",
   "place": "shanghai_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据松江府志与城防推断",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SH_I03",
   "subject": "place:bund",
   "predicate": "租界自治",
   "value_text": "租界设工部局、会审公廨，华洋分治而自治，近代上海二元城市格局由此成",
   "value": null,
   "source": "qingshigao",
   "layer": "inference",
   "era": "推算",
   "place": "bund",
   "confidence": 0.55,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据清史稿与租界制度推断",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SH_I04",
   "subject": "person:yu_qiaqing",
   "predicate": "商帮社会网络",
   "value_text": "移民商帮以同乡会馆、钱庄网络维系，构成近代上海社会自组织之底层结构",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "shanghai_cheng",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据近代上海社会史推断",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SH_I05",
   "subject": "person:wang_tao",
   "predicate": "思想符号",
   "value_text": "王韬辈居沪办报著书，西风东渐与变法议论并播，上海成近代思想策源之一",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "shanghai_cheng",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据近代思想史推断",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SH_G01",
   "subject": "place:shanghai_cheng",
   "predicate": "城墙拆改",
   "value_text": "上海县城墙拆改与城厢格局演变（晚清拆城、近代市政化）史料详略不一",
   "value": null,
   "source": "shanghai_xianzhi",
   "layer": "gap",
   "era": "今",
   "place": "shanghai_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "lead": {
    "where": "上海县城墙拆改与城厢格局演变",
    "skills": [
     "历史地理",
     "方志"
    ],
    "accept": "需上海县志与近代市政档案"
   },
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SH_G02",
   "subject": "person:ba_fuer",
   "predicate": "开埠交涉细节",
   "value_text": "巴富尔开埠交涉之原始往来照会与选址细节散佚，仅见条约与后述",
   "value": null,
   "source": "nanjing_treaty",
   "layer": "gap",
   "era": "今",
   "place": "bund",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "lead": {
    "where": "巴富尔开埠交涉原始档案",
    "skills": [
     "近代史",
     "外交档案"
    ],
    "accept": "需中英外交档案与领事报告"
   },
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SH_G03",
   "subject": "place:bund",
   "predicate": "早期建筑",
   "value_text": "外滩早期建筑与租界城市形态之初貌，早期照片与图纸散缺",
   "value": null,
   "source": "qingshigao",
   "layer": "gap",
   "era": "今",
   "place": "bund",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "外滩早期建筑与租界城市形态",
    "skills": [
     "建筑史",
     "档案"
    ],
    "accept": "需近代建筑档案与老照片"
   },
   "_party": "清修官史",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SH_G01",
  "SH_G02",
  "SH_G03"
 ],
 "events": [
  {
   "id": "ev_shanghai_01",
   "year": 1292,
   "era": "元至元二十九年",
   "kind": "设县建制",
   "title": "上海设县",
   "place": "shanghai_cheng",
   "text": "元至元二十九年（1292），析华亭县东北境置上海县，隶松江府，筑城为治。上海由滨海聚落升为县级政区，为后世上海城市之始。",
   "subject": "event:ev_shanghai_01"
  },
  {
   "id": "ev_shanghai_02",
   "year": 1843,
   "era": "清道光二十三年",
   "kind": "开埠通商",
   "title": "上海开埠",
   "place": "bund",
   "text": "道光二十二年（1842）《南京条约》开上海等五口通商，二十三年（1843）上海正式开埠，英领事巴富尔抵沪设馆。上海由一县骤为中外互市之巨埠，江海通津、华洋杂处之局由此启。",
   "subject": "event:ev_shanghai_02"
  },
  {
   "id": "ev_shanghai_03",
   "year": 1845,
   "era": "清道光二十五年",
   "kind": "租界设立",
   "title": "租界划定",
   "place": "bund",
   "text": "道光二十五年（1845），苏松太道宫慕久与英领事巴富尔会定《上海租地章程》，划定城北黄浦西岸为英租界（后并扩张为公共租界）；二十九年（1849）法租界继设于县城北隅。租界之治与华界分峙，近代上海二元城市格局成焉。",
   "subject": "event:ev_shanghai_03"
  }
 ],
 "edges": [
  {
   "from": "shanghai_cheng",
   "to": "yuyuan",
   "type": "mem",
   "label": "豫园在老城厢内，为城隍庙市集与士民游观之所"
  },
  {
   "from": "shanghai_cheng",
   "to": "huangpu_river",
   "type": "geo",
   "label": "县城枕黄浦江东，通海漕运所倚"
  },
  {
   "from": "bund",
   "to": "huangpu_river",
   "type": "geo",
   "label": "外滩临黄浦江西岸，洋行轮船泊此"
  },
  {
   "from": "suzhou_creek",
   "to": "huangpu_river",
   "type": "geo",
   "label": "苏州河（吴淞江）西来汇于黄浦"
  },
  {
   "from": "bund",
   "to": "shanghai_cheng",
   "type": "mil",
   "label": "租界与老城厢分峙，华洋杂处而治不一"
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
   "明修官史",
   "清修·明臣",
   "清官修",
   "清修官史",
   "后世官修",
   "学界"
  ],
  "party_bucket": {
   "明修官史": "明修官史",
   "清修·明臣": "清修·明臣",
   "清官修": "清官修",
   "清修官史": "清修官史",
   "后世官修": "后世官修",
   "学界": "学界"
  },
  "party_colors": {
   "明修官史": "#6C5C3E",
   "清修·明臣": "#8C6239",
   "清官修": "#8C6239",
   "清修官史": "#7B5C3E",
   "后世官修": "#7A6A52",
   "学界": "#2E7D8F"
  },
  "factions": {
   "f_明修官史": {
    "name": "明修官史",
    "macro_party": "明修官史",
    "note": "auto"
   },
   "f_清修·明臣": {
    "name": "清修·明臣",
    "macro_party": "清修·明臣",
    "note": "auto"
   },
   "f_清官修": {
    "name": "清官修",
    "macro_party": "清官修",
    "note": "auto"
   },
   "f_清修官史": {
    "name": "清修官史",
    "macro_party": "清修官史",
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
   "f_明修官史": "#6C5C3E",
   "f_清修·明臣": "#8C6239",
   "f_清官修": "#8C6239",
   "f_清修官史": "#7B5C3E",
   "f_后世官修": "#7A6A52",
   "f_学界": "#2E7D8F"
  }
 },
 "basemap": {
  "coastline": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       121.577,
       31.637
      ],
      [
       121.542,
       31.674
      ],
      [
       121.492,
       31.694
      ],
      [
       121.464,
       31.756
      ],
      [
       121.339,
       31.797
      ],
      [
       121.211,
       31.805
      ],
      [
       121.227,
       31.758
      ],
      [
       121.336,
       31.644
      ],
      [
       121.52,
       31.55
      ],
      [
       121.78,
       31.464
      ],
      [
       121.863,
       31.492
      ],
      [
       121.844,
       31.526
      ],
      [
       121.808,
       31.552
      ],
      [
       121.577,
       31.637
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        121.439,
        30.22
       ],
       [
        121.433,
        30.227
       ],
       [
        121.341,
        30.282
       ],
       [
        121.258,
        30.304
       ],
       [
        121.159,
        30.302
       ],
       [
        121.012,
        30.22
       ],
       [
        120.562,
        30.22
       ],
       [
        120.495,
        30.303
       ],
       [
        120.475,
        30.295
       ],
       [
        120.475,
        30.388
       ],
       [
        120.63,
        30.391
       ],
       [
        120.821,
        30.355
       ],
       [
        120.897,
        30.393
       ],
       [
        120.938,
        30.47
       ],
       [
        120.998,
        30.558
       ],
       [
        121.31,
        30.7
       ],
       [
        121.419,
        30.79
       ],
       [
        121.528,
        30.841
       ],
       [
        121.675,
        30.864
       ],
       [
        121.769,
        30.87
       ],
       [
        121.878,
        30.917
       ],
       [
        121.834,
        31.062
       ],
       [
        121.786,
        31.163
       ],
       [
        121.661,
        31.32
       ],
       [
        121.351,
        31.485
       ],
       [
        121.205,
        31.628
       ],
       [
        121.055,
        31.719
       ],
       [
        120.938,
        31.75
       ],
       [
        120.788,
        31.82
       ],
       [
        120.752,
        31.923
       ],
       [
        120.716,
        31.984
       ],
       [
        120.497,
        32.02
       ],
       [
        120.475,
        32.01
       ],
       [
        120.475,
        32.087
       ],
       [
        120.52,
        32.106
       ],
       [
        120.661,
        32.081
       ],
       [
        120.792,
        32.032
       ],
       [
        120.974,
        31.869
       ],
       [
        121.146,
        31.842
       ],
       [
        121.266,
        31.863
       ],
       [
        121.352,
        31.859
       ],
       [
        121.681,
        31.712
       ],
       [
        121.764,
        31.7
       ],
       [
        121.866,
        31.704
       ],
       [
        121.856,
        31.816
       ],
       [
        121.832,
        31.9
       ],
       [
        121.751,
        31.993
       ],
       [
        121.674,
        32.051
       ],
       [
        121.491,
        32.121
       ],
       [
        121.451,
        32.153
       ],
       [
        121.404,
        32.206
       ],
       [
        121.403,
        32.245
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        121.863,
        31.492
       ],
       [
        121.78,
        31.464
       ],
       [
        121.52,
        31.55
       ],
       [
        121.336,
        31.644
       ],
       [
        121.227,
        31.758
       ],
       [
        121.211,
        31.805
       ],
       [
        121.339,
        31.797
       ],
       [
        121.464,
        31.756
       ],
       [
        121.492,
        31.694
       ],
       [
        121.542,
        31.674
       ],
       [
        121.577,
        31.637
       ],
       [
        121.808,
        31.552
       ],
       [
        121.844,
        31.526
       ],
       [
        121.863,
        31.492
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        120.475,
        30.22
       ],
       [
        120.475,
        32.245
       ],
       [
        121.403,
        32.245
       ],
       [
        121.404,
        32.206
       ],
       [
        121.451,
        32.153
       ],
       [
        121.491,
        32.121
       ],
       [
        121.674,
        32.051
       ],
       [
        121.751,
        31.993
       ],
       [
        121.832,
        31.9
       ],
       [
        121.856,
        31.816
       ],
       [
        121.866,
        31.704
       ],
       [
        121.764,
        31.7
       ],
       [
        121.681,
        31.712
       ],
       [
        121.352,
        31.859
       ],
       [
        121.266,
        31.863
       ],
       [
        121.146,
        31.842
       ],
       [
        120.974,
        31.869
       ],
       [
        120.792,
        32.032
       ],
       [
        120.661,
        32.081
       ],
       [
        120.52,
        32.106
       ],
       [
        120.475,
        32.087
       ],
       [
        120.475,
        32.01
       ],
       [
        120.497,
        32.02
       ],
       [
        120.716,
        31.984
       ],
       [
        120.752,
        31.923
       ],
       [
        120.788,
        31.82
       ],
       [
        120.938,
        31.75
       ],
       [
        121.055,
        31.719
       ],
       [
        121.205,
        31.628
       ],
       [
        121.351,
        31.485
       ],
       [
        121.661,
        31.32
       ],
       [
        121.786,
        31.163
       ],
       [
        121.834,
        31.062
       ],
       [
        121.878,
        30.917
       ],
       [
        121.769,
        30.87
       ],
       [
        121.675,
        30.864
       ],
       [
        121.528,
        30.841
       ],
       [
        121.419,
        30.79
       ],
       [
        121.31,
        30.7
       ],
       [
        120.998,
        30.558
       ],
       [
        120.938,
        30.47
       ],
       [
        120.897,
        30.393
       ],
       [
        120.821,
        30.355
       ],
       [
        120.63,
        30.391
       ],
       [
        120.475,
        30.388
       ],
       [
        120.475,
        30.295
       ],
       [
        120.495,
        30.303
       ],
       [
        120.562,
        30.22
       ],
       [
        121.012,
        30.22
       ],
       [
        121.159,
        30.302
       ],
       [
        121.258,
        30.304
       ],
       [
        121.341,
        30.282
       ],
       [
        121.433,
        30.227
       ],
       [
        121.439,
        30.22
       ],
       [
        120.475,
        30.22
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
         120.901,
         31.017
        ],
        [
         120.94,
         31.01
        ],
        [
         120.949,
         31.03
        ],
        [
         120.989,
         31.014
        ],
        [
         121.001,
         30.938
        ],
        [
         120.993,
         30.89
        ],
        [
         121.02,
         30.872
        ],
        [
         120.992,
         30.837
        ],
        [
         121.038,
         30.814
        ],
        [
         121.06,
         30.845
        ],
        [
         121.098,
         30.857
        ],
        [
         121.138,
         30.826
        ],
        [
         121.123,
         30.779
        ],
        [
         121.175,
         30.772
        ],
        [
         121.217,
         30.786
        ],
        [
         121.232,
         30.756
        ],
        [
         121.272,
         30.724
        ],
        [
         121.275,
         30.677
        ],
        [
         121.362,
         30.68
        ],
        [
         121.426,
         30.73
        ],
        [
         121.517,
         30.775
        ],
        [
         121.601,
         30.805
        ],
        [
         121.681,
         30.819
        ],
        [
         121.905,
         30.814
        ],
        [
         121.944,
         30.777
        ],
        [
         121.97,
         30.789
        ],
        [
         121.955,
         30.826
        ],
        [
         121.994,
         30.863
        ],
        [
         121.991,
         30.969
        ],
        [
         121.977,
         31.016
        ],
        [
         121.947,
         31.066
        ],
        [
         121.81,
         31.197
        ],
        [
         121.722,
         31.304
        ],
        [
         121.599,
         31.375
        ],
        [
         121.521,
         31.395
        ],
        [
         121.405,
         31.479
        ],
        [
         121.344,
         31.512
        ],
        [
         121.301,
         31.499
        ],
        [
         121.301,
         31.499
        ],
        [
         121.248,
         31.477
        ],
        [
         121.242,
         31.493
        ],
        [
         121.175,
         31.449
        ],
        [
         121.143,
         31.392
        ],
        [
         121.114,
         31.375
        ],
        [
         121.13,
         31.344
        ],
        [
         121.143,
         31.275
        ],
        [
         121.09,
         31.292
        ],
        [
         121.06,
         31.245
        ],
        [
         121.077,
         31.158
        ],
        [
         121.018,
         31.134
        ],
        [
         120.93,
         31.141
        ],
        [
         120.881,
         31.135
        ],
        [
         120.859,
         31.1
        ],
        [
         120.891,
         31.094
        ],
        [
         120.901,
         31.017
        ]
       ]
      ],
      [
       [
        [
         121.975,
         31.617
        ],
        [
         121.715,
         31.674
        ],
        [
         121.643,
         31.698
        ],
        [
         121.6,
         31.703
        ],
        [
         121.499,
         31.753
        ],
        [
         121.432,
         31.769
        ],
        [
         121.385,
         31.833
        ],
        [
         121.323,
         31.868
        ],
        [
         121.265,
         31.864
        ],
        [
         121.2,
         31.835
        ],
        [
         121.119,
         31.759
        ],
        [
         121.145,
         31.754
        ],
        [
         121.289,
         31.617
        ],
        [
         121.372,
         31.553
        ],
        [
         121.395,
         31.585
        ],
        [
         121.434,
         31.591
        ],
        [
         121.547,
         31.531
        ],
        [
         121.626,
         31.502
        ],
        [
         121.683,
         31.491
        ],
        [
         121.819,
         31.438
        ],
        [
         121.891,
         31.429
        ],
        [
         121.982,
         31.464
        ],
        [
         121.996,
         31.493
        ],
        [
         121.975,
         31.617
        ]
       ]
      ],
      [
       [
        [
         121.796,
         31.33
        ],
        [
         121.793,
         31.363
        ],
        [
         121.742,
         31.407
        ],
        [
         121.586,
         31.455
        ],
        [
         121.567,
         31.483
        ],
        [
         121.521,
         31.494
        ],
        [
         121.51,
         31.482
        ],
        [
         121.572,
         31.436
        ],
        [
         121.728,
         31.355
        ],
        [
         121.764,
         31.315
        ],
        [
         121.785,
         31.311
        ],
        [
         121.796,
         31.33
        ]
       ]
      ],
      [
       [
        [
         121.802,
         31.357
        ],
        [
         121.804,
         31.329
        ],
        [
         121.841,
         31.295
        ],
        [
         121.932,
         31.283
        ],
        [
         122.016,
         31.282
        ],
        [
         122.098,
         31.256
        ],
        [
         122.123,
         31.307
        ],
        [
         122.117,
         31.321
        ],
        [
         122.041,
         31.324
        ],
        [
         121.952,
         31.337
        ],
        [
         121.846,
         31.375
        ],
        [
         121.793,
         31.378
        ],
        [
         121.802,
         31.357
        ]
       ]
      ],
      [
       [
        [
         121.627,
         31.445
        ],
        [
         121.632,
         31.457
        ],
        [
         121.579,
         31.48
        ],
        [
         121.627,
         31.445
        ]
       ]
      ],
      [
       [
        [
         121.944,
         31.216
        ],
        [
         121.96,
         31.159
        ],
        [
         121.996,
         31.161
        ],
        [
         122.009,
         31.221
        ],
        [
         121.951,
         31.229
        ],
        [
         121.944,
         31.216
        ]
       ]
      ],
      [
       [
        [
         121.883,
         31.241
        ],
        [
         121.909,
         31.195
        ],
        [
         121.924,
         31.234
        ],
        [
         121.883,
         31.241
        ]
       ]
      ]
     ]
    },
    "n": "上海市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         120.475,
         32.245
        ],
        [
         120.475,
         30.801
        ],
        [
         120.489,
         30.764
        ],
        [
         120.505,
         30.758
        ],
        [
         120.564,
         30.836
        ],
        [
         120.59,
         30.854
        ],
        [
         120.655,
         30.847
        ],
        [
         120.683,
         30.882
        ],
        [
         120.713,
         30.885
        ],
        [
         120.709,
         30.933
        ],
        [
         120.685,
         30.955
        ],
        [
         120.698,
         30.971
        ],
        [
         120.746,
         30.962
        ],
        [
         120.77,
         30.997
        ],
        [
         120.821,
         31.007
        ],
        [
         120.866,
         30.99
        ],
        [
         120.901,
         31.017
        ],
        [
         120.891,
         31.094
        ],
        [
         120.859,
         31.1
        ],
        [
         120.881,
         31.135
        ],
        [
         120.93,
         31.141
        ],
        [
         121.018,
         31.134
        ],
        [
         121.077,
         31.158
        ],
        [
         121.06,
         31.245
        ],
        [
         121.09,
         31.292
        ],
        [
         121.143,
         31.275
        ],
        [
         121.13,
         31.344
        ],
        [
         121.114,
         31.375
        ],
        [
         121.143,
         31.392
        ],
        [
         121.175,
         31.449
        ],
        [
         121.242,
         31.493
        ],
        [
         121.248,
         31.477
        ],
        [
         121.301,
         31.499
        ],
        [
         121.301,
         31.499
        ],
        [
         121.344,
         31.512
        ],
        [
         121.372,
         31.553
        ],
        [
         121.289,
         31.617
        ],
        [
         121.145,
         31.754
        ],
        [
         121.119,
         31.759
        ],
        [
         121.2,
         31.835
        ],
        [
         121.265,
         31.864
        ],
        [
         121.323,
         31.868
        ],
        [
         121.385,
         31.833
        ],
        [
         121.432,
         31.769
        ],
        [
         121.499,
         31.753
        ],
        [
         121.6,
         31.703
        ],
        [
         121.643,
         31.698
        ],
        [
         121.715,
         31.674
        ],
        [
         121.975,
         31.617
        ],
        [
         121.97,
         31.719
        ],
        [
         121.889,
         31.866
        ],
        [
         121.856,
         31.955
        ],
        [
         121.772,
         32.033
        ],
        [
         121.759,
         32.059
        ],
        [
         121.525,
         32.136
        ],
        [
         121.543,
         32.152
        ],
        [
         121.459,
         32.177
        ],
        [
         121.499,
         32.211
        ],
        [
         121.496,
         32.245
        ],
        [
         120.475,
         32.245
        ]
       ]
      ]
     ]
    },
    "n": "江苏省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         120.475,
         30.22
        ],
        [
         121.531,
         30.22
        ],
        [
         121.498,
         30.259
        ],
        [
         121.395,
         30.338
        ],
        [
         121.372,
         30.371
        ],
        [
         121.328,
         30.397
        ],
        [
         121.225,
         30.405
        ],
        [
         121.183,
         30.434
        ],
        [
         121.093,
         30.516
        ],
        [
         121.058,
         30.564
        ],
        [
         121.149,
         30.6
        ],
        [
         121.189,
         30.633
        ],
        [
         121.239,
         30.649
        ],
        [
         121.275,
         30.677
        ],
        [
         121.272,
         30.724
        ],
        [
         121.232,
         30.756
        ],
        [
         121.217,
         30.786
        ],
        [
         121.175,
         30.772
        ],
        [
         121.123,
         30.779
        ],
        [
         121.138,
         30.826
        ],
        [
         121.098,
         30.857
        ],
        [
         121.06,
         30.845
        ],
        [
         121.038,
         30.814
        ],
        [
         120.992,
         30.837
        ],
        [
         121.02,
         30.872
        ],
        [
         120.993,
         30.89
        ],
        [
         121.001,
         30.938
        ],
        [
         120.989,
         31.014
        ],
        [
         120.949,
         31.03
        ],
        [
         120.94,
         31.01
        ],
        [
         120.901,
         31.017
        ],
        [
         120.866,
         30.99
        ],
        [
         120.821,
         31.007
        ],
        [
         120.77,
         30.997
        ],
        [
         120.746,
         30.962
        ],
        [
         120.698,
         30.971
        ],
        [
         120.685,
         30.955
        ],
        [
         120.709,
         30.933
        ],
        [
         120.713,
         30.885
        ],
        [
         120.683,
         30.882
        ],
        [
         120.655,
         30.847
        ],
        [
         120.59,
         30.854
        ],
        [
         120.564,
         30.836
        ],
        [
         120.505,
         30.758
        ],
        [
         120.489,
         30.764
        ],
        [
         120.475,
         30.801
        ],
        [
         120.475,
         30.22
        ]
       ]
      ],
      [
       [
        [
         122.428,
         30.738
        ],
        [
         122.427,
         30.698
        ],
        [
         122.5,
         30.697
        ],
        [
         122.5,
         30.719
        ],
        [
         122.475,
         30.714
        ],
        [
         122.446,
         30.745
        ],
        [
         122.428,
         30.738
        ]
       ]
      ],
      [
       [
        [
         122.163,
         30.33
        ],
        [
         122.058,
         30.292
        ],
        [
         122.154,
         30.245
        ],
        [
         122.232,
         30.235
        ],
        [
         122.247,
         30.301
        ],
        [
         122.228,
         30.33
        ],
        [
         122.191,
         30.33
        ],
        [
         122.176,
         30.352
        ],
        [
         122.163,
         30.33
        ]
       ]
      ],
      [
       [
        [
         122.317,
         30.25
        ],
        [
         122.278,
         30.243
        ],
        [
         122.359,
         30.236
        ],
        [
         122.365,
         30.255
        ],
        [
         122.417,
         30.239
        ],
        [
         122.407,
         30.273
        ],
        [
         122.333,
         30.273
        ],
        [
         122.317,
         30.25
        ]
       ]
      ],
      [
       [
        [
         122.43,
         30.409
        ],
        [
         122.433,
         30.445
        ],
        [
         122.374,
         30.462
        ],
        [
         122.278,
         30.472
        ],
        [
         122.282,
         30.418
        ],
        [
         122.319,
         30.407
        ],
        [
         122.353,
         30.422
        ],
        [
         122.43,
         30.409
        ]
       ]
      ],
      [
       [
        [
         121.944,
         30.777
        ],
        [
         121.968,
         30.689
        ],
        [
         121.997,
         30.659
        ],
        [
         122.087,
         30.602
        ],
        [
         122.133,
         30.595
        ],
        [
         122.075,
         30.648
        ],
        [
         122.011,
         30.669
        ],
        [
         121.993,
         30.695
        ],
        [
         121.988,
         30.753
        ],
        [
         121.97,
         30.789
        ],
        [
         121.944,
         30.777
        ]
       ]
      ],
      [
       [
        [
         121.958,
         30.288
        ],
        [
         122.001,
         30.308
        ],
        [
         121.989,
         30.34
        ],
        [
         121.942,
         30.333
        ],
        [
         121.921,
         30.307
        ],
        [
         121.958,
         30.288
        ]
       ]
      ],
      [
       [
        [
         122.264,
         30.27
        ],
        [
         122.254,
         30.237
        ],
        [
         122.316,
         30.25
        ],
        [
         122.3,
         30.271
        ],
        [
         122.264,
         30.27
        ]
       ]
      ]
     ]
    },
    "n": "浙江省"
   }
  ],
  "rivers": [],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        120.602,
        31.087
       ],
       [
        120.475,
        31.016
       ],
       [
        120.475,
        31.089
       ],
       [
        120.54,
        31.127
       ],
       [
        120.602,
        31.087
       ],
       [
        120.602,
        31.087
       ],
       [
        120.602,
        31.087
       ]
      ]
     ]
    },
    "n": "Tai Hu"
   }
  ],
  "_bbox": [
   120.475,
   30.22,
   122.5,
   32.245
  ]
 }
};
