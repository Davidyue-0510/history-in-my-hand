// 本文件由 tools/build.py 自动生成（切片 three_campaigns），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["three_campaigns"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["three_campaigns"] = {
 "meta": {
  "kind": "county",
  "region": "huabei",
  "title": "三大战役·辽沈·淮海·平津",
  "dossier_label": "三大战役",
  "subtitle": "1948年9月—1949年1月 · 国共内战",
  "primary_place": "jinzhou",
  "dossier_event": "event:ev_three_campaigns_01",
  "vocab_pack": "inline:three_campaigns",
  "terrain_grid": "three_campaigns",
  "lead": "三大战役是国共内战的决定性会战——辽沈(52天)、淮海(66天)、平津(64天)。解放军以伤亡24万代价歼灭/改编国军154万，奠定全国胜利。三方视角：共方战史、国方战史、第三方观察。",
  "parties_note": "共方(解放军)、国方(国军)。source=Wikipedia 二手综述，桶='二手综述'。",
  "page": "county.html?scene=three_campaigns",
  "key": "three_campaigns",
  "scene_id": "three_campaigns"
 },
 "sources": [
  {
   "id": "wikipedia_three_campaigns",
   "title": "维基百科·三大战役",
   "party": "解放军",
   "stance_label": "百科条目",
   "distance_label": "距事约70年",
   "color": "#6C7A89",
   "compiler": "维基百科编者",
   "period": "现代",
   "stance": "encyclopedic",
   "note": "国共内战三大战役综合条目，来源zh.wikipedia.org/wiki/三大战役"
  }
 ],
 "places": [
  {
   "id": "jinzhou",
   "name": "锦州",
   "type": "city",
   "modern": "今中国辽宁省锦州市",
   "note": "辽沈战役关键城市，攻占锦州关闭东北国军退路",
   "lon": 121.12,
   "lat": 41.11,
   "geo_note": "辽沈战役关键",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "changchun",
   "name": "长春",
   "type": "city",
   "modern": "今中国吉林省长春市",
   "note": "辽沈战役中东北野战军进攻的城市之一",
   "lon": 125.32,
   "lat": 43.9,
   "geo_note": "辽沈战役·长春围城",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "shenyang",
   "name": "沈阳",
   "type": "city",
   "modern": "今中国辽宁省沈阳市",
   "note": "辽沈战役国军东北剿总所在地",
   "lon": 123.43,
   "lat": 41.8,
   "geo_note": "辽沈战役·沈阳解放",
   "_global_id": "shenyang_cheng",
   "_other_scenes": [
    "fushun",
    "guangning",
    "haizhou",
    "kaiyuan",
    "liaoyang",
    "tieling"
   ],
   "elev": null,
   "off_grid": true
  },
  {
   "id": "xuzhou",
   "name": "徐州",
   "type": "city",
   "modern": "今中国江苏省徐州市",
   "note": "淮海战役国军徐州剿总所在地",
   "lon": 117.19,
   "lat": 34.27,
   "geo_note": "淮海战役核心",
   "elev": 34
  },
  {
   "id": "huaihai",
   "name": "淮海",
   "type": "region",
   "modern": "今中国淮河至海州一带",
   "note": "淮海战役作战区域",
   "lon": 117.0,
   "lat": 34.0,
   "geo_note": "淮海战役区域中心",
   "elev": 71
  },
  {
   "id": "nianzhuang",
   "name": "碾庄",
   "type": "yi",
   "modern": "今中国江苏省邳州市碾庄镇",
   "note": "淮海战役中粟裕围歼黄百韬兵团之地",
   "lon": 117.75,
   "lat": 34.38,
   "geo_note": "黄百韬兵团被围歼处",
   "elev": 17
  },
  {
   "id": "shuangduiji",
   "name": "双堆集",
   "type": "yi",
   "modern": "今中国安徽省淮北市濉溪县双堆集镇",
   "note": "淮海战役中刘伯承围歼黄维兵团之地",
   "lon": 116.7,
   "lat": 33.4,
   "geo_note": "黄维兵团被围歼处",
   "elev": 14
  },
  {
   "id": "beiping",
   "name": "北平",
   "type": "city",
   "modern": "今中国北京市",
   "note": "平津战役中和平解放的城市",
   "lon": 116.4,
   "lat": 39.9,
   "geo_note": "平津战役·傅作义起义",
   "elev": 62
  },
  {
   "id": "xinbao'an",
   "name": "新保安",
   "type": "yi",
   "modern": "今中国河北省张家口市怀来县新保安镇",
   "note": "平津战役中歼灭郭景云35军之地",
   "lon": 115.4,
   "lat": 40.42,
   "geo_note": "35军被歼处",
   "elev": 709
  },
  {
   "id": "tianjin",
   "name": "天津",
   "type": "city",
   "modern": "今中国天津市",
   "note": "平津战役中通过攻坚战活捉陈长捷",
   "lon": 117.2,
   "lat": 39.13,
   "geo_note": "平津战役·天津攻坚战",
   "elev": 17
  }
 ],
 "persons": [
  {
   "id": "THR__p01",
   "name": "林彪",
   "role": "东北野战军司令员",
   "note": "辽沈战役和平津战役的主要指挥者之一",
   "influence": 0
  },
  {
   "id": "THR__p02",
   "name": "罗荣桓",
   "role": "东北野战军政治委员",
   "note": "与林彪共同指挥辽沈、平津战役",
   "influence": 0
  },
  {
   "id": "THR__p03",
   "name": "卫立煌",
   "role": "国军东北剿匪总司令部总司令",
   "note": "辽沈战役国军东北最高指挥官",
   "influence": 0
  },
  {
   "id": "THR__p04",
   "name": "刘伯承",
   "role": "中原野战军司令员",
   "note": "淮海战役指挥者之一，双堆集围歼黄维兵团",
   "influence": 0
  },
  {
   "id": "THR__p05",
   "name": "陈毅",
   "role": "华东野战军司令员",
   "note": "淮海战役指挥者之一",
   "influence": 0
  },
  {
   "id": "THR__p06",
   "name": "粟裕",
   "role": "华东野战军副司令员",
   "note": "淮海战役实际指挥者之一，碾庄围歼黄百韬兵团",
   "influence": 0
  },
  {
   "id": "THR__p07",
   "name": "邓小平",
   "role": "淮海战役总前委书记",
   "note": "淮海战役统筹指挥",
   "influence": 0
  },
  {
   "id": "THR__p08",
   "name": "傅作义",
   "role": "国军华北剿匪总司令部总司令",
   "note": "平津战役国军华北最高指挥官，最终投降",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "THR_001",
   "subject": "event:ev_three_campaigns_01",
   "predicate": "战役损失",
   "value_text": "国军伤亡被俘47万2千余人",
   "time": {
    "era_text": "民国三十七年九月至十一月",
    "start": "1948-09-12",
    "end": "1948-11-02"
   },
   "place": "jinzhou",
   "source": "wikipedia_three_campaigns",
   "quote": "国军伤亡被俘共计47万2千余人",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "theater",
   "note": "辽沈战役国军损失 | [auto] 补层 inference",
   "_party": "解放军",
   "_faction": null
  },
  {
   "id": "THR_002",
   "subject": "event:ev_three_campaigns_01",
   "predicate": "战略意义",
   "value_text": "攻占锦州关闭东北国军退路",
   "time": {
    "era_text": "民国三十七年九月",
    "start": "1948-09-12"
   },
   "place": "jinzhou",
   "source": "wikipedia_three_campaigns",
   "quote": "攻占锦州就关闭了东北国军撤往关内的大门",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "锦州关键性",
   "_party": "解放军",
   "_faction": null
  },
  {
   "id": "THR_003",
   "subject": "event:ev_three_campaigns_02",
   "predicate": "战役损失",
   "value_text": "解放军伤亡13万4千，歼敌55万5千",
   "time": {
    "era_text": "民国三十七年十一月至三十八年一月",
    "start": "1948-11-06",
    "end": "1949-01-10"
   },
   "place": "huaihai",
   "source": "wikipedia_three_campaigns",
   "quote": "以伤亡13万4千余人的代价消灭及改编国军...55万5千人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "淮海战役双方损失",
   "_party": "解放军",
   "_faction": null
  },
  {
   "id": "THR_004",
   "subject": "event:ev_three_campaigns_02",
   "predicate": "兵力对比",
   "value_text": "解放军60万对国军80万",
   "time": {
    "era_text": "民国三十七年十一月",
    "start": "1948-11-06"
   },
   "place": "huaihai",
   "source": "wikipedia_three_campaigns",
   "quote": "华东野战军和中原野战军60万人...国军...80万人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "兵力对比",
   "_party": "解放军",
   "_faction": null
  },
  {
   "id": "THR_005",
   "subject": "event:ev_three_campaigns_02",
   "predicate": "战役过程",
   "value_text": "粟裕碾庄围歼黄百韬，刘伯承双堆集围歼黄维",
   "time": {
    "era_text": "民国三十七年十一月",
    "start": "1948-11-06"
   },
   "place": "nianzhuang",
   "source": "wikipedia_three_campaigns",
   "quote": "粟裕在碾庄围歼黄百韬兵团，刘伯承在双堆集围歼黄维兵团",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "关键战斗",
   "_party": "解放军",
   "_faction": null
  },
  {
   "id": "THR_006",
   "subject": "event:ev_three_campaigns_03",
   "predicate": "战役结果",
   "value_text": "傅作义投降，北平和平解放",
   "time": {
    "era_text": "民国三十八年一月",
    "start": "1949-01-31"
   },
   "place": "beiping",
   "source": "wikipedia_three_campaigns",
   "quote": "傅作义开城投降，解放军和平占领北平",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "平津战役结局",
   "_party": "解放军",
   "_faction": null
  },
  {
   "id": "THR_007",
   "subject": "event:ev_three_campaigns_03",
   "predicate": "战役过程",
   "value_text": "新保安歼灭郭景云35军，天津活捉陈长捷",
   "time": {
    "era_text": "民国三十七年十二月至三十八年一月",
    "start": "1948-12-01",
    "end": "1949-01-15"
   },
   "place": "xinbao'an",
   "source": "wikipedia_three_campaigns",
   "quote": "新保安歼灭郭景云35军、天津攻坚战活捉陈长捷",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "关键战斗",
   "_party": "解放军",
   "_faction": null
  },
  {
   "id": "THR_008",
   "subject": "event:ev_three_campaigns_03",
   "predicate": "兵力对比",
   "value_text": "解放军100万对国军50余万",
   "time": {
    "era_text": "民国三十七年十一月",
    "start": "1948-11-29"
   },
   "place": "beiping",
   "source": "wikipedia_three_campaigns",
   "quote": "东北野战军和华北野战军共100万，包围国军...50余万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "兵力对比",
   "_party": "解放军",
   "_faction": null
  },
  {
   "id": "THR_009",
   "subject": "event:ev_three_campaigns_01",
   "predicate": "战役损失",
   "value_text": "国军损失47万2千，解放军损失未详",
   "time": {
    "era_text": "民国三十七年九月至十一月",
    "start": "1948-09-12",
    "end": "1948-11-02"
   },
   "place": "jinzhou",
   "source": "wikipedia_three_campaigns",
   "quote": "国军伤亡被俘共计47万2千余人",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "解放军损失未记载",
   "lead": {
    "where": "辽沈战役解放军伤亡数据",
    "skills": [
     "军事史",
     "档案研究"
    ],
    "accept": "解放军在辽沈战役中的具体伤亡数字"
   },
   "_party": "解放军",
   "_faction": null
  },
  {
   "id": "THR_010",
   "subject": "event:ev_three_campaigns_02",
   "predicate": "战役损失",
   "value_text": "国军被歼55万5千，解放军伤亡13万4千",
   "time": {
    "era_text": "民国三十七年十一月至三十八年一月",
    "start": "1948-11-06",
    "end": "1949-01-10"
   },
   "place": "huaihai",
   "source": "wikipedia_three_campaigns",
   "quote": "以伤亡13万4千余人的代价消灭及改编国军...55万5千人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "双方损失",
   "_party": "解放军",
   "_faction": null
  },
  {
   "id": "THR_011",
   "subject": "event:ev_three_campaigns_01",
   "predicate": "战役结果",
   "value_text": "东北全境为中共所占",
   "time": {
    "era_text": "民国三十七年十一月",
    "start": "1948-11-02"
   },
   "place": "shenyang",
   "source": "wikipedia_three_campaigns",
   "quote": "东北全境为中共所占",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "辽沈战役结果",
   "_party": "解放军",
   "_faction": null
  },
  {
   "id": "THR_012",
   "subject": "event:ev_three_campaigns_02",
   "predicate": "战役结果",
   "value_text": "解放军控制长江以北广大地区",
   "time": {
    "era_text": "民国三十八年一月",
    "start": "1949-01-10"
   },
   "place": "huaihai",
   "source": "wikipedia_three_campaigns",
   "quote": "战役结束后解放军控制了长江以北广大地区",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "淮海战役结果",
   "_party": "解放军",
   "_faction": null
  },
  {
   "id": "THR_013",
   "subject": "event:ev_three_campaigns_03",
   "predicate": "战役结果",
   "value_text": "国军损失超过150万，精锐丧失殆尽",
   "time": {
    "era_text": "民国三十八年一月",
    "start": "1949-01-31"
   },
   "place": "beiping",
   "source": "wikipedia_three_campaigns",
   "quote": "国军损失超过150万，精锐部队丧失殆尽",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "三大战役总损失",
   "_party": "解放军",
   "_faction": null
  },
  {
   "id": "THR_014",
   "subject": "event:ev_three_campaigns_01",
   "predicate": "战役损失",
   "value_text": "国军伤亡被俘47万2千，解放军损失未详",
   "time": {
    "era_text": "民国三十七年九月至十一月",
    "start": "1948-09-12",
    "end": "1948-11-02"
   },
   "place": "jinzhou",
   "source": "wikipedia_three_campaigns",
   "quote": "国军伤亡被俘共计47万2千余人",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "theater",
   "note": "解放军损失数据缺失，需进一步考证",
   "_party": "解放军",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_three_campaigns_01|战役损失",
   "subject": "event:ev_three_campaigns_01",
   "predicate": "战役损失",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "THR_001",
    "THR_014"
   ]
  },
  {
   "id": "cf:event:ev_three_campaigns_02|战役损失",
   "subject": "event:ev_three_campaigns_02",
   "predicate": "战役损失",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "THR_003",
    "THR_010"
   ]
  },
  {
   "id": "cf:event:ev_three_campaigns_03|战役结果",
   "subject": "event:ev_three_campaigns_03",
   "predicate": "战役结果",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "THR_006",
    "THR_013"
   ]
  }
 ],
 "gaps": [
  "THR_009"
 ],
 "events": [
  {
   "id": "ev_three_campaigns_01",
   "subject": "event:ev_three_campaigns_01",
   "year": 1948,
   "era": "民国三十七年九月",
   "title": "辽沈战役",
   "kind": "战事",
   "text": "东北野战军进攻锦州、长春，国军主力被歼，东北全境解放"
  },
  {
   "id": "ev_three_campaigns_02",
   "subject": "event:ev_three_campaigns_02",
   "year": 1948,
   "era": "民国三十七年十一月",
   "title": "淮海战役",
   "kind": "战事",
   "text": "华东、中原野战军与徐州国军决战，歼敌55万"
  },
  {
   "id": "ev_three_campaigns_03",
   "subject": "event:ev_three_campaigns_03",
   "year": 1948,
   "era": "民国三十七年十一月",
   "title": "平津战役",
   "kind": "战事",
   "text": "东北、华北野战军包围北平，傅作义投降，和平解放"
  }
 ],
 "edges": [
  {
   "from": "shenyang",
   "to": "jinzhou",
   "type": "military",
   "label": "东北野战军进攻锦州"
  },
  {
   "from": "shenyang",
   "to": "changchun",
   "type": "military",
   "label": "东北野战军进攻长春"
  },
  {
   "from": "xuzhou",
   "to": "nianzhuang",
   "type": "battle",
   "label": "粟裕围歼黄百韬兵团"
  },
  {
   "from": "xuzhou",
   "to": "shuangduiji",
   "type": "battle",
   "label": "刘伯承围歼黄维兵团"
  },
  {
   "from": "beiping",
   "to": "xinbao'an",
   "type": "battle",
   "label": "歼灭郭景云35军"
  },
  {
   "from": "beiping",
   "to": "tianjin",
   "type": "battle",
   "label": "天津攻坚战"
  }
 ],
 "control": [
  {
   "place_id": "jinzhou",
   "party": "解放军",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 解放军"
  },
  {
   "place_id": "changchun",
   "party": "解放军",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 解放军"
  },
  {
   "place_id": "shenyang",
   "party": "解放军",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 解放军"
  },
  {
   "place_id": "xuzhou",
   "party": "解放军",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 解放军"
  },
  {
   "place_id": "huaihai",
   "party": "解放军",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 解放军"
  },
  {
   "place_id": "nianzhuang",
   "party": "解放军",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 解放军"
  },
  {
   "place_id": "shuangduiji",
   "party": "解放军",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 解放军"
  },
  {
   "place_id": "beiping",
   "party": "解放军",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 解放军"
  },
  {
   "place_id": "xinbao'an",
   "party": "解放军",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 解放军"
  },
  {
   "place_id": "tianjin",
   "party": "解放军",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 解放军"
  }
 ],
 "control_seats": [
  {
   "place_id": "jinzhou",
   "name": "锦州",
   "lon": 121.12,
   "lat": 41.11,
   "region": "huabei"
  },
  {
   "place_id": "changchun",
   "name": "长春",
   "lon": 125.32,
   "lat": 43.9,
   "region": "huabei"
  },
  {
   "place_id": "shenyang",
   "name": "沈阳",
   "lon": 123.43,
   "lat": 41.8,
   "region": "huabei"
  },
  {
   "place_id": "xuzhou",
   "name": "徐州",
   "lon": 117.19,
   "lat": 34.27,
   "region": "huabei"
  },
  {
   "place_id": "huaihai",
   "name": "淮海",
   "lon": 117.0,
   "lat": 34.0,
   "region": "huabei"
  },
  {
   "place_id": "nianzhuang",
   "name": "碾庄",
   "lon": 117.75,
   "lat": 34.38,
   "region": "huabei"
  },
  {
   "place_id": "shuangduiji",
   "name": "双堆集",
   "lon": 116.7,
   "lat": 33.4,
   "region": "huabei"
  },
  {
   "place_id": "beiping",
   "name": "北平",
   "lon": 116.4,
   "lat": 39.9,
   "region": "huabei"
  },
  {
   "place_id": "xinbao'an",
   "name": "新保安",
   "lon": 115.4,
   "lat": 40.42,
   "region": "huabei"
  },
  {
   "place_id": "tianjin",
   "name": "天津",
   "lon": 117.2,
   "lat": 39.13,
   "region": "huabei"
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
   "解放军",
   "国军"
  ],
  "party_bucket": {
   "解放军": "解放军",
   "国军": "国军"
  },
  "party_colors": {
   "解放军": "#A0473A",
   "国军": "#3D6B4F"
  },
  "factions": {
   "f_解放军": {
    "name": "解放军",
    "macro_party": "解放军",
    "note": "auto"
   },
   "f_国军": {
    "name": "国军",
    "macro_party": "国军",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_解放军": "#A0473A",
   "f_国军": "#3D6B4F"
  }
 }
};
