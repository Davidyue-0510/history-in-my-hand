// 本文件由 tools/build.py 自动生成（切片 tang_huai_xi），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["tang_huai_xi"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["tang_huai_xi"] = {
 "meta": {
  "kind": "county",
  "region": "tang",
  "title": "平淮西·雪夜入蔡州",
  "dossier_label": "平淮西",
  "subtitle": "元和九年—十二年（814—817）· 李愬雪夜入蔡州",
  "primary_place": "caizhou",
  "dossier_event": "event:li_su_xueye",
  "vocab_pack": "tang",
  "terrain_grid": "tang",
  "lead": "唐宪宗元和削藩的收官之战：吴元济据淮西拒命，李愬雪夜自文城栅出、趋蔡州擒元济。本切片用唐代语境包（tang.json）自动分桶，与辽东切片共用同一套断言内核——差异只在立场语义（唐廷/藩镇/后世官修）。地名由 data/geo/gazetteer.json 自动落点。",
  "parties_note": "现存的淮西史料多出自《通鉴》《旧/新唐书》等后世官修（宋·官修/五代·官修），唐廷本方声音极少（实录多亡佚）——这正是 tang.json 在「唐廷」桶下标注的结构性缺口。系统不裁决，只并列。",
  "subject_names": {
   "event:huai_xi_jufa": "吴元济拒命",
   "event:li_su_xueye": "李愬雪夜入蔡州",
   "event:huai_xi_ping": "淮西平定",
   "place:caizhou": "蔡州",
   "place:wenchengzhai": "文城栅",
   "person:li_su": "李愬",
   "person:wu_yuanji": "吴元济",
   "person:pei_du": "裴度"
  },
  "page": "county.html?scene=tang_huai_xi",
  "key": "tang_huai_xi",
  "terrain_off_grid": true
 },
 "sources": [
  {
   "id": "tang_zhaoling",
   "title": "唐大诏令集",
   "party": "唐·官修",
   "stance_label": "本朝官修·当代",
   "distance_label": "成书唐宣宗大中年间（约850），距事约30年",
   "color": "#A0473A",
   "compiler": "唐宣宗敕编（宋敏求补）",
   "period": "唐",
   "stance": "official_contemporary",
   "note": "唐廷本方声音（唐·官修桶）；现存淮西史料中唐廷直接声音极少"
  },
  {
   "id": "jiu_tangshu",
   "title": "旧唐书",
   "party": "五代·官修",
   "stance_label": "后朝官修",
   "distance_label": "成书后晋开运二年（945），距事约130年",
   "color": "#7A6A53",
   "compiler": "刘昫等（后晋）",
   "period": "五代",
   "stance": "official_later_dynasty",
   "note": "李愬传详记雪夜入蔡细节（北门说）"
  },
  {
   "id": "xin_tangshu",
   "title": "新唐书",
   "party": "宋·官修",
   "stance_label": "后朝官修",
   "distance_label": "成书宋仁宗嘉祐五年（1060），距事约240年",
   "color": "#6C7A89",
   "compiler": "欧阳修、宋祁等（宋）",
   "period": "宋",
   "stance": "official_later_dynasty",
   "note": "南门说，与旧唐书异（冲突对）"
  },
  {
   "id": "zztj_tang",
   "title": "资治通鉴·唐纪",
   "party": "宋·官修",
   "stance_label": "后朝官修",
   "distance_label": "成书宋神宗元丰七年（1084），距事约260年",
   "color": "#8C6239",
   "compiler": "司马光等（宋）",
   "period": "宋",
   "stance": "official_later_dynasty",
   "note": "编年体主干，附考异"
  }
 ],
 "places": [
  {
   "id": "caizhou",
   "name": "蔡州",
   "type": "city",
   "modern": "河南汝南",
   "note": "淮西节度使治所",
   "lon": 114.35,
   "lat": 33.53,
   "geo_note": "唐淮西节度使治所，今河南汝南"
  },
  {
   "id": "tangzhou",
   "name": "唐州",
   "type": "zhou",
   "modern": "河南泌阳",
   "note": "李愬出兵基地",
   "lon": 113.31,
   "lat": 32.73,
   "geo_note": "今河南泌阳"
  },
  {
   "id": "wenchengzhai",
   "name": "文城栅",
   "type": "zhai",
   "modern": "河南遂平西北",
   "note": "蔡州西北要栅，李愬雪夜自此发",
   "lon": 113.97,
   "lat": 33.15,
   "geo_note": "蔡州西北要栅，今河南遂平"
  },
  {
   "id": "huiqu",
   "name": "洄曲",
   "type": "river_defense",
   "modern": "河南漯河沙河",
   "note": "董重质所守，蔡州北屏障",
   "lon": 114.03,
   "lat": 33.58,
   "geo_note": "蔡州北洄曲，今河南漯河沙河一带"
  },
  {
   "id": "yancheng",
   "name": "郾城",
   "type": "zhou",
   "modern": "河南漯河郾城",
   "note": "李光颜拒守",
   "lon": 113.97,
   "lat": 33.87,
   "geo_note": "今河南漯河郾城"
  },
  {
   "id": "shenzhou",
   "name": "申州",
   "type": "zhou",
   "modern": "河南信阳",
   "note": "淮西属州",
   "lon": 114.08,
   "lat": 32.15,
   "geo_note": "今河南信阳"
  },
  {
   "id": "huai_xi",
   "name": "淮西",
   "type": "zhen",
   "modern": "河南南部",
   "note": "方镇，治蔡州",
   "lon": 114.35,
   "lat": 33.53,
   "geo_note": "方镇名，治蔡州"
  },
  {
   "id": "changan",
   "name": "长安",
   "type": "city",
   "modern": "陕西西安",
   "note": "唐都",
   "lon": 108.95,
   "lat": 34.27,
   "geo_note": "唐都，今西安"
  },
  {
   "id": "luoyang",
   "name": "洛阳",
   "type": "city",
   "modern": "河南洛阳",
   "note": "东都",
   "lon": 112.45,
   "lat": 34.62,
   "geo_note": "唐东都，今洛阳"
  }
 ],
 "persons": [
  {
   "id": "li_su",
   "name": "李愬",
   "role": "随唐邓节度使",
   "note": "雪夜入蔡州，擒吴元济",
   "influence": 1
  },
  {
   "id": "wu_yuanji",
   "name": "吴元济",
   "role": "淮西节度使（割据）",
   "note": "吴少阳子，父死自领军务，拒命朝廷",
   "influence": 1
  },
  {
   "id": "pei_du",
   "name": "裴度",
   "role": "宰相·彰义军节度淮西宣慰处置使",
   "note": "主征淮西，督诸军",
   "influence": 1
  },
  {
   "id": "xianzong",
   "name": "唐宪宗",
   "role": "皇帝",
   "note": "元和削藩，平淮西为其一功",
   "influence": 0
  },
  {
   "id": "li_guangyan",
   "name": "李光颜",
   "role": "忠武军节度使",
   "note": "屡破淮西兵，洄曲拒守",
   "influence": 1
  },
  {
   "id": "dong_zhongzhi",
   "name": "董重质",
   "role": "淮西骁将",
   "note": "守洄曲，吴元济倚为重",
   "influence": 0
  },
  {
   "id": "li_shidao",
   "name": "李师道",
   "role": "平卢节度使",
   "note": "与淮西呼应，刺宰相武元衡",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "TH001",
   "subject": "event:li_su_xueye",
   "predicate": "雪夜奇袭",
   "value_text": "李愬以雪夜自文城栅出，直趋蔡州，坎墉先登，擒吴元济",
   "time": {
    "era_text": "元和十二年冬",
    "start": "0817-01-01",
    "end": "0817-12-31",
    "gregorian_year": 817
   },
   "place": "caizhou",
   "source": "zztj_tang",
   "quote": "愬以雪夜入蔡州，擒元济",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "TH002",
   "subject": "event:li_su_xueye",
   "predicate": "出兵路径",
   "value_text": "自文城栅出，倍道并行，至蔡州七十里",
   "time": {
    "era_text": "元和十二年冬",
    "start": "0817-01-01",
    "end": "0817-12-31",
    "gregorian_year": 817
   },
   "place": "wenchengzhai",
   "source": "jiu_tangshu",
   "quote": "自文城栅出，七十里至蔡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "theater",
   "note": "",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "TH003",
   "subject": "person:wu_yuanji",
   "predicate": "拒命",
   "value_text": "吴少阳死，元济匿丧，自领军务，拒朝命",
   "time": {
    "era_text": "元和九年",
    "start": "0814-01-01",
    "end": "0814-12-31",
    "gregorian_year": 814
   },
   "place": "caizhou",
   "source": "xin_tangshu",
   "quote": "元济匿丧，自领军务",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "TH004",
   "subject": "event:huai_xi_ping",
   "predicate": "改置州县",
   "value_text": "淮西平，分其地为蔡、申、光三州，隶州县",
   "time": {
    "era_text": "元和十二年",
    "start": "0817-01-01",
    "end": "0817-12-31",
    "gregorian_year": 817
   },
   "place": "huai_xi",
   "source": "zztj_tang",
   "quote": "淮西平，为蔡、申、光三州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "empire",
   "note": "",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "TH005",
   "subject": "person:li_su",
   "predicate": "名将评价",
   "value_text": "李愬雪夜入蔡，世称良将，然冒雪行七十里，士卒冻馁",
   "time": {
    "era_text": "元和十二年",
    "start": "0817-01-01",
    "end": "0817-12-31",
    "gregorian_year": 817
   },
   "place": "caizhou",
   "source": "xin_tangshu",
   "quote": "士卒冻馁，皆欲退",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "theater",
   "note": "行军艰苦的学者推断",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "TH006",
   "subject": "person:pei_du",
   "predicate": "督师",
   "value_text": "裴度自请督诸军，进位彰义军节度淮西宣慰处置使",
   "time": {
    "era_text": "元和十二年",
    "start": "0817-01-01",
    "end": "0817-12-31",
    "gregorian_year": 817
   },
   "place": "changan",
   "source": "jiu_tangshu",
   "quote": "度自请行，为淮西宣慰使",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "TH007",
   "subject": "event:huai_xi_jufa",
   "predicate": "起兵",
   "value_text": "吴元济出兵屠舞阳、焚叶县，拒命",
   "time": {
    "era_text": "元和九年",
    "start": "0814-01-01",
    "end": "0814-12-31",
    "gregorian_year": 814
   },
   "place": "caizhou",
   "source": "zztj_tang",
   "quote": "元济出兵，屠舞阳",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "theater",
   "note": "",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "TH008",
   "subject": "person:li_guangyan",
   "predicate": "洄曲拒守",
   "value_text": "李光颜壁洄曲，淮西兵数犯不得入",
   "time": {
    "era_text": "元和十二年",
    "start": "0817-01-01",
    "end": "0817-12-31",
    "gregorian_year": 817
   },
   "place": "huiqu",
   "source": "zztj_tang",
   "quote": "光颜壁洄曲，贼数却",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "TH009",
   "subject": "event:li_su_xueye",
   "predicate": "入城方向",
   "value_text": "自北门入，元济尚寝，闻外哗曰『官军至』",
   "time": {
    "era_text": "元和十二年",
    "start": "0817-01-01",
    "end": "0817-12-31",
    "gregorian_year": 817
   },
   "place": "caizhou",
   "source": "jiu_tangshu",
   "quote": "元济起，闻外喧曰官军至",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "theater",
   "note": "北门说",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "TH010",
   "subject": "event:li_su_xueye",
   "predicate": "入城方向",
   "value_text": "李愬令击破鹅鸭池以乱声，自南门登",
   "time": {
    "era_text": "元和十二年",
    "start": "0817-01-01",
    "end": "0817-12-31",
    "gregorian_year": 817
   },
   "place": "caizhou",
   "source": "xin_tangshu",
   "quote": "击鹅鸭池乱声，自南门入",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "theater",
   "note": "南门说（与旧唐书异）",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "TH011",
   "subject": "event:huai_xi_ping",
   "predicate": "后续影响",
   "value_text": "淮西平，诸镇震恐，相继纳质献地，唐廷威复振",
   "time": {
    "era_text": "元和十三年",
    "start": "0818-01-01",
    "end": "0818-12-31",
    "gregorian_year": 818
   },
   "place": "changan",
   "source": "zztj_tang",
   "quote": "诸镇惧，请纳质",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "empire",
   "note": "通鉴推论",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "TH012",
   "subject": "event:li_su_xueye",
   "predicate": "李愬与裴度方略异同",
   "value_text": "",
   "time": {
    "era_text": "元和十二年",
    "start": "0817-01-01",
    "end": "0817-12-31",
    "gregorian_year": 817
   },
   "place": "caizhou",
   "source": "zztj_tang",
   "quote": "",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "平蔡战略中李愬奇袭与裴度『将军谋』是否同源，史料未明",
   "lead": {
    "where": "李愬雪夜入蔡与裴度督师方略的分工",
    "skills": [
     "比对《通鉴》与新旧《唐书》李愬传",
     "核《裴度集》"
    ],
    "accept": "明确两人在平蔡战略中的各自角色"
   },
   "_party": "宋·官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:li_su_xueye|入城方向",
   "subject": "event:li_su_xueye",
   "predicate": "入城方向",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "TH009",
    "TH010"
   ]
  }
 ],
 "gaps": [
  "TH012"
 ],
 "events": [
  {
   "id": "ev_huai_xi_jufa",
   "subject": "event:huai_xi_jufa",
   "year": 814,
   "era": "元和九年",
   "title": "吴元济拒命",
   "kind": "战事",
   "text": "吴少阳死，其子元济匿丧，自领军务，出兵屠舞阳、焚叶县，拒朝廷命。"
  },
  {
   "id": "ev_li_su_xueye",
   "subject": "event:li_su_xueye",
   "year": 817,
   "era": "元和十二年冬",
   "title": "李愬雪夜入蔡州",
   "kind": "战事",
   "text": "李愬以雪夜自文城栅出，趋蔡州，坎墉先登，擒吴元济；淮西遂平。"
  },
  {
   "id": "ev_huai_xi_ping",
   "subject": "event:huai_xi_ping",
   "year": 817,
   "era": "元和十二年",
   "title": "淮西平定",
   "kind": "行政",
   "text": "吴元济槛送京师斩，淮西改为州县，分其地为三州，唐廷复直辖。"
  }
 ],
 "edges": [
  {
   "from": "caizhou",
   "to": "tangzhou",
   "type": "admin",
   "label": "蔡州—唐州（淮西节度辖州）"
  },
  {
   "from": "caizhou",
   "to": "wenchengzhai",
   "type": "military",
   "label": "蔡州—文城栅（李愬出兵路）"
  },
  {
   "from": "caizhou",
   "to": "huiqu",
   "type": "military",
   "label": "蔡州—洄曲（董重质守）"
  },
  {
   "from": "changan",
   "to": "caizhou",
   "type": "admin",
   "label": "长安—蔡州（朝廷—淮西）"
  }
 ],
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
   "唐廷",
   "藩镇",
   "外族",
   "后世官修",
   "综述考订"
  ],
  "party_bucket": {
   "唐·官修": "唐廷",
   "唐·诏敕": "唐廷",
   "唐·当代文集": "唐廷",
   "唐·当代碑志": "唐廷",
   "藩镇·自述": "藩镇",
   "藩镇·碑铭": "藩镇",
   "吐蕃·本方": "外族",
   "回鹘·本方": "外族",
   "南诏·本方": "外族",
   "日本·入唐记": "外族",
   "五代·官修": "后世官修",
   "宋·官修": "后世官修",
   "宋·私修": "后世官修",
   "二手综述": "综述考订"
  },
  "factions": {
   "niu_dang": {
    "label": "牛党",
    "macro_party": "唐廷",
    "interest": "以牛僧孺、李宗闵为首。多科举出身，对藩镇主和、对吐蕃主守，倾向承认既成割据以省兵费。"
   },
   "li_dang": {
    "label": "李党",
    "macro_party": "唐廷",
    "interest": "以李德裕为首。多门荫出身，对藩镇主战、主张削夺，会昌伐叛为其代表政绩，故相关记载多归功于己。"
   },
   "huanguan": {
    "label": "宦官集团",
    "macro_party": "唐廷",
    "interest": "掌神策军与枢密，握废立之权。对甘露之变、诸帝崩逝的记载与南衙朝官方向完全相反。"
   },
   "nanya": {
    "label": "南衙朝官",
    "macro_party": "唐廷",
    "interest": "中书门下与台省官。与宦官争政柄，其叙述倾向把军事失利归咎于中人监军。"
   },
   "hebei_sanzhen": {
    "label": "河朔三镇",
    "macro_party": "藩镇",
    "interest": "魏博、成德、卢龙。父死子继、自署官吏，其碑志叙述致力于把割据包装为『奉朝命』的合法承袭。"
   },
   "shence_jun": {
    "label": "神策军系",
    "macro_party": "唐廷",
    "interest": "中央禁军与其外镇。粮赐远优于边军，战功记载常有夸大，与地方镇兵的叙述存在系统性出入。"
   }
  },
  "faction_colors": {
   "niu_dang": "#7E9A6E",
   "li_dang": "#B4794A",
   "huanguan": "#8C6BA8",
   "nanya": "#4E7C9B",
   "hebei_sanzhen": "#A9503F",
   "shence_jun": "#C2A24B"
  }
 }
};
