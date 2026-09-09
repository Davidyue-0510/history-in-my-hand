// 本文件由 tools/build.py 自动生成（切片 guizhou_tianlongshan_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["guizhou_tianlongshan_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["guizhou_tianlongshan_llm"] = {
 "meta": {
  "kind": "thought",
  "region": "chuan_gui",
  "province": "guizhou",
  "title": "贵州佛教·天龙山与青龙洞（明—清）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "qianlingshan",
  "dossier_event": "event:ev_guizhou_tianlongshan_llm_01",
  "vocab_pack": "inline:guizhou_tianlongshan_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "ming_qing",
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
    "note": "贵州佛教·天龙山与青龙洞（明—清）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "贵州佛教·天龙山与青龙洞（明—清）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "贵州佛教·天龙山与青龙洞（明—清）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "贵州佛教·天龙山与青龙洞（明—清）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=guizhou_tianlongshan_llm",
  "key": "guizhou_tianlongshan_llm",
  "scene_id": "guizhou_tianlongshan_llm"
 },
 "sources": [
  {
   "id": "tianlongshan_qinglongdong_src",
   "title": "贵州佛教史·黔中名寺",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "贵州省文史馆",
   "period": "现代",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "qianlingshan",
   "name": "黔靈山",
   "type": "region",
   "modern": "今中国贵州省贵阳市",
   "note": "黔中名山，佛教丛林",
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 106.71,
   "lat": 26.58,
   "geo_note": "今贵州贵阳市黔灵山",
   "elev": 1114
  },
  {
   "id": "tianlongshan",
   "name": "天龍山",
   "type": "region",
   "modern": "今中国贵州省安顺市",
   "note": "黔中三大丛林之一",
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 105.93,
   "lat": 26.25,
   "geo_note": "今贵州安顺天龙山（弘福寺）",
   "elev": 1342
  },
  {
   "id": "qinglongdong",
   "name": "青龍洞",
   "type": "region",
   "modern": "今中国贵州省镇远县",
   "note": "临㵲阳河，三教合一",
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 108.4,
   "lat": 27.05,
   "geo_note": "今贵州镇远青龙洞",
   "elev": 826
  }
 ],
 "persons": [
  {
   "id": "GUI__p01",
   "name": "赤松和尚",
   "role": "黔灵山开山祖师",
   "note": "清康熙年间创建黔灵山弘福寺",
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "GUI_001",
   "subject": "place:qianlingshan",
   "predicate": "始建时间",
   "value_text": "清康熙十一年建",
   "time": {
    "era_text": "清康熙十一年",
    "start": "1672-01-01",
    "end": "1672-12-31",
    "gregorian_year": 1672
   },
   "place": "qianlingshan",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "黔靈山始建於清康熙十一年",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "黔靈山始建於清康熙十一年",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_002",
   "subject": "place:tianlongshan",
   "predicate": "宗教传承",
   "value_text": "傳臨濟正宗",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "tianlongshan",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "傳臨濟正宗",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "傳臨濟正宗",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_003",
   "subject": "place:qinglongdong",
   "predicate": "宗教融合",
   "value_text": "儒釋道三教合一",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "qinglongdong",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "儒釋道三教合一",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "儒釋道三教合一",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_004",
   "subject": "place:qinglongdong",
   "predicate": "地理特征",
   "value_text": "臨㵲陽河而建",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "qinglongdong",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "臨㵲陽河而建",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "臨㵲陽河而建",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_005",
   "subject": "place:tianlongshan",
   "predicate": "建筑规模",
   "value_text": "殿宇五重",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "tianlongshan",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "殿宇五重",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "殿宇五重",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_006",
   "subject": "place:tianlongshan",
   "predicate": "藏经",
   "value_text": "藏《龍藏》一部",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "tianlongshan",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "藏經樓收《龍藏》一部",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "藏經樓收《龍藏》一部",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_007",
   "subject": "place:qinglongdong",
   "predicate": "称号",
   "value_text": "黔東第一洞天",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "qinglongdong",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "號稱'黔東第一洞天'",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "號稱'黔東第一洞天'",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_008",
   "subject": "place:qianlingshan",
   "predicate": "地位",
   "value_text": "黔中三大丛林之一",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "qianlingshan",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "與安順天龍山、鎮遠青龍洞並稱黔中三大叢林",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "與安順天龍山、鎮遠青龍洞並稱黔中三大叢林",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_009",
   "subject": "place:tianlongshan",
   "predicate": "地位",
   "value_text": "黔中三大丛林之一",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "tianlongshan",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "與黔靈山、青龍洞並稱黔中三大叢林",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "與黔靈山、青龍洞並稱黔中三大叢林",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_010",
   "subject": "place:qinglongdong",
   "predicate": "地位",
   "value_text": "黔中三大丛林之一",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "qinglongdong",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "與黔靈山、天龍山並稱黔中三大叢林",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "與黔靈山、天龍山並稱黔中三大叢林",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_011",
   "subject": "place:qianlingshan",
   "predicate": "佛教传播",
   "value_text": "唐宋佛教东传",
   "time": {
    "era_text": "唐宋",
    "start": "0618"
   },
   "place": "qianlingshan",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "自唐宋以來佛教東傳",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "自唐宋以來佛教東傳",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_012",
   "subject": "place:qinglongdong",
   "predicate": "文化交融",
   "value_text": "僧众布道苗侗",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "qinglongdong",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "僧眾常以漢譯苗、布道於山間",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "僧眾常以漢譯苗、布道於山間",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_013",
   "subject": "place:qinglongdong",
   "predicate": "文化交融",
   "value_text": "西南佛教与少数民族交融",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "qinglongdong",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "西南漢傳佛教與少數民族文化交融的典型",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.9,
   "scale": "province",
   "note": "学术观点",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "西南漢傳佛教與少數民族文化交融的典型",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_014",
   "subject": "place:qinglongdong",
   "predicate": "建筑布局",
   "value_text": "寺宫殿阁错落崖壁",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "qinglongdong",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "寺、宮、殿、閣錯落崖壁",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "寺、宮、殿、閣錯落崖壁",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_015",
   "subject": "place:qinglongdong",
   "predicate": "民族分布",
   "value_text": "临苗侗土家聚居",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "qinglongdong",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "多臨苗、侗、土家諸族聚居之地",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "具体民族分布待考",
   "dims": [
    4
   ],
   "lead": {
    "where": "贵州民族地区",
    "skills": [
     "民族学",
     "历史地理"
    ],
    "accept": "需实地调查"
   },
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "多臨苗、侗、土家諸族聚居之地",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_EV01",
   "subject": "event:ev_guizhou_tianlongshan_llm_01",
   "predicate": "始建",
   "value_text": "清康熙十一年黔灵山始建佛寺",
   "time": {
    "era_text": "清康熙十一年",
    "start": "1672-01-01",
    "end": "1672-12-31",
    "gregorian_year": 1672
   },
   "place": "qianlingshan",
   "source": "tianlongshan_qinglongdong_src",
   "quote": "黔靈山始建於清康熙十一年",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "黔靈山始建於清康熙十一年",
   "source_text": "黔中山水灵秀，自唐宋以来佛教东传。贵阳黔灵山始建于清康熙十一年（一六七二），与安顺天龙山、镇远青龙洞并称黔中三大丛林。天龙山依山而构，殿宇五重，传临济正宗，藏经楼收《龙藏》一部；青龙洞临㵲阳河而建，儒释道三教合一，寺、宫、殿、阁错落崖壁，号称'黔东第一洞天'。贵州佛寺多临苗、侗、土家诸族聚居之地，僧众常以汉译苗、布道于山间，是西南汉传佛教与少数民族文化交融的典型。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:place:qinglongdong|文化交融",
   "subject": "place:qinglongdong",
   "predicate": "文化交融",
   "kind": "record_vs_scholarship",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "GUI_012",
    "GUI_013"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "GUI_015"
 ],
 "events": [
  {
   "id": "ev_guizhou_tianlongshan_llm_01",
   "subject": "event:ev_guizhou_tianlongshan_llm_01",
   "year": 1672,
   "era": "清康熙十一年",
   "title": "黔灵山始建",
   "kind": "其他",
   "text": "清康熙十一年，贵州贵阳黔灵山始建佛寺，为黔中佛教三大丛林之一。",
   "_source_idx": 0,
   "_source_name": "贵州佛教史·黔中名寺",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "qianlingshan",
   "party": "后世官修",
   "start": 618,
   "end": 1672,
   "timeline": "main"
  },
  {
   "place_id": "tianlongshan",
   "party": "后世官修",
   "start": 618,
   "end": 1672,
   "timeline": "main"
  },
  {
   "place_id": "qinglongdong",
   "party": "后世官修",
   "start": 618,
   "end": 1672,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "qianlingshan",
   "name": "黔靈山",
   "lon": 106.71,
   "lat": 26.58,
   "region": "chuan_gui"
  },
  {
   "place_id": "tianlongshan",
   "name": "天龍山",
   "lon": 105.93,
   "lat": 26.25,
   "region": "chuan_gui"
  },
  {
   "place_id": "qinglongdong",
   "name": "青龍洞",
   "lon": 108.4,
   "lat": 27.05,
   "region": "chuan_gui"
  }
 ],
 "control_years": [
  618,
  1672
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
        104.93,
        25.25
       ],
       [
        104.93,
        28.05
       ],
       [
        109.4,
        28.05
       ],
       [
        109.4,
        25.25
       ],
       [
        104.93,
        25.25
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
         109.4,
         28.05
        ],
        [
         109.302,
         28.05
        ],
        [
         109.298,
         28.036
        ],
        [
         109.318,
         28.05
        ],
        [
         109.356,
         28.05
        ],
        [
         109.379,
         28.035
        ],
        [
         109.362,
         28.008
        ],
        [
         109.32,
         27.989
        ],
        [
         109.302,
         27.956
        ],
        [
         109.322,
         27.868
        ],
        [
         109.347,
         27.838
        ],
        [
         109.333,
         27.783
        ],
        [
         109.378,
         27.737
        ],
        [
         109.367,
         27.722
        ],
        [
         109.4,
         27.724
        ],
        [
         109.4,
         27.547
        ],
        [
         109.303,
         27.476
        ],
        [
         109.3,
         27.424
        ],
        [
         109.245,
         27.418
        ],
        [
         109.202,
         27.45
        ],
        [
         109.167,
         27.418
        ],
        [
         109.142,
         27.448
        ],
        [
         109.142,
         27.418
        ],
        [
         109.104,
         27.337
        ],
        [
         109.045,
         27.331
        ],
        [
         109.054,
         27.294
        ],
        [
         108.984,
         27.268
        ],
        [
         108.963,
         27.236
        ],
        [
         108.908,
         27.205
        ],
        [
         108.927,
         27.161
        ],
        [
         108.879,
         27.106
        ],
        [
         108.791,
         27.084
        ],
        [
         108.878,
         27.016
        ],
        [
         108.943,
         27.017
        ],
        [
         108.943,
         27.017
        ],
        [
         108.94,
         27.045
        ],
        [
         109.008,
         27.08
        ],
        [
         109.033,
         27.104
        ],
        [
         109.129,
         27.123
        ],
        [
         109.101,
         27.069
        ],
        [
         109.166,
         27.067
        ],
        [
         109.217,
         27.115
        ],
        [
         109.239,
         27.149
        ],
        [
         109.264,
         27.132
        ],
        [
         109.335,
         27.139
        ],
        [
         109.359,
         27.153
        ],
        [
         109.4,
         27.154
        ],
        [
         109.4,
         26.716
        ],
        [
         109.355,
         26.693
        ],
        [
         109.284,
         26.698
        ],
        [
         109.306,
         26.661
        ],
        [
         109.334,
         26.646
        ],
        [
         109.355,
         26.659
        ],
        [
         109.391,
         26.599
        ],
        [
         109.4,
         26.562
        ],
        [
         109.4,
         26.529
        ],
        [
         109.381,
         26.519
        ],
        [
         109.386,
         26.493
        ],
        [
         109.362,
         26.472
        ],
        [
         109.381,
         26.454
        ],
        [
         109.32,
         26.418
        ],
        [
         109.296,
         26.35
        ],
        [
         109.271,
         26.328
        ],
        [
         109.286,
         26.296
        ],
        [
         109.325,
         26.29
        ],
        [
         109.351,
         26.264
        ],
        [
         109.37,
         26.277
        ],
        [
         109.4,
         26.283
        ],
        [
         109.4,
         28.05
        ]
       ]
      ]
     ]
    },
    "n": "湖南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         109.4,
         25.25
        ],
        [
         109.4,
         25.903
        ],
        [
         109.397,
         25.9
        ],
        [
         109.359,
         25.836
        ],
        [
         109.34,
         25.834
        ],
        [
         109.328,
         25.762
        ],
        [
         109.34,
         25.731
        ],
        [
         109.296,
         25.714
        ],
        [
         109.207,
         25.74
        ],
        [
         109.207,
         25.788
        ],
        [
         109.148,
         25.742
        ],
        [
         109.132,
         25.763
        ],
        [
         109.144,
         25.795
        ],
        [
         109.095,
         25.805
        ],
        [
         109.078,
         25.777
        ],
        [
         109.048,
         25.791
        ],
        [
         108.99,
         25.779
        ],
        [
         109.0,
         25.765
        ],
        [
         108.964,
         25.733
        ],
        [
         108.94,
         25.74
        ],
        [
         108.896,
         25.714
        ],
        [
         108.9,
         25.682
        ],
        [
         108.954,
         25.687
        ],
        [
         108.954,
         25.687
        ],
        [
         109.008,
         25.735
        ],
        [
         109.043,
         25.739
        ],
        [
         109.079,
         25.721
        ],
        [
         109.075,
         25.694
        ],
        [
         109.031,
         25.63
        ],
        [
         109.052,
         25.567
        ],
        [
         109.088,
         25.551
        ],
        [
         109.025,
         25.512
        ],
        [
         108.949,
         25.557
        ],
        [
         108.889,
         25.543
        ],
        [
         108.891,
         25.556
        ],
        [
         108.826,
         25.55
        ],
        [
         108.815,
         25.527
        ],
        [
         108.782,
         25.555
        ],
        [
         108.8,
         25.577
        ],
        [
         108.784,
         25.628
        ],
        [
         108.725,
         25.635
        ],
        [
         108.689,
         25.623
        ],
        [
         108.686,
         25.587
        ],
        [
         108.661,
         25.585
        ],
        [
         108.658,
         25.55
        ],
        [
         108.689,
         25.533
        ],
        [
         108.635,
         25.521
        ],
        [
         108.607,
         25.492
        ],
        [
         108.6,
         25.432
        ],
        [
         108.63,
         25.336
        ],
        [
         108.625,
         25.308
        ],
        [
         108.589,
         25.335
        ],
        [
         108.586,
         25.366
        ],
        [
         108.472,
         25.459
        ],
        [
         108.419,
         25.443
        ],
        [
         108.4,
         25.491
        ],
        [
         108.36,
         25.513
        ],
        [
         108.349,
         25.536
        ],
        [
         108.308,
         25.526
        ],
        [
         108.281,
         25.48
        ],
        [
         108.241,
         25.462
        ],
        [
         108.252,
         25.43
        ],
        [
         108.193,
         25.459
        ],
        [
         108.162,
         25.445
        ],
        [
         108.193,
         25.405
        ],
        [
         108.143,
         25.391
        ],
        [
         108.152,
         25.324
        ],
        [
         108.143,
         25.27
        ],
        [
         108.134,
         25.25
        ],
        [
         107.67,
         25.25
        ],
        [
         107.662,
         25.259
        ],
        [
         107.66,
         25.316
        ],
        [
         107.632,
         25.31
        ],
        [
         107.6,
         25.251
        ],
        [
         107.577,
         25.257
        ],
        [
         107.568,
         25.25
        ],
        [
         107.482,
         25.25
        ],
        [
         107.49,
         25.277
        ],
        [
         107.481,
         25.3
        ],
        [
         107.433,
         25.289
        ],
        [
         107.409,
         25.347
        ],
        [
         107.421,
         25.393
        ],
        [
         107.376,
         25.412
        ],
        [
         107.359,
         25.394
        ],
        [
         107.318,
         25.402
        ],
        [
         107.308,
         25.433
        ],
        [
         107.337,
         25.461
        ],
        [
         107.264,
         25.543
        ],
        [
         107.232,
         25.557
        ],
        [
         107.229,
         25.605
        ],
        [
         107.205,
         25.608
        ],
        [
         107.186,
         25.579
        ],
        [
         107.064,
         25.559
        ],
        [
         107.067,
         25.509
        ],
        [
         107.016,
         25.496
        ],
        [
         106.997,
         25.443
        ],
        [
         106.964,
         25.438
        ],
        [
         106.988,
         25.359
        ],
        [
         107.013,
         25.353
        ],
        [
         107.014,
         25.276
        ],
        [
         106.991,
         25.25
        ],
        [
         106.935,
         25.25
        ],
        [
         106.933,
         25.251
        ],
        [
         106.932,
         25.25
        ],
        [
         109.4,
         25.25
        ]
       ]
      ]
     ]
    },
    "n": "广西壮族自治区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         104.93,
         28.05
        ],
        [
         104.93,
         27.984
        ],
        [
         104.975,
         28.021
        ],
        [
         104.979,
         28.05
        ],
        [
         105.184,
         28.05
        ],
        [
         105.168,
         28.021
        ],
        [
         105.186,
         27.995
        ],
        [
         105.218,
         27.991
        ],
        [
         105.248,
         28.009
        ],
        [
         105.271,
         27.997
        ],
        [
         105.285,
         27.936
        ],
        [
         105.233,
         27.896
        ],
        [
         105.26,
         27.828
        ],
        [
         105.313,
         27.811
        ],
        [
         105.274,
         27.795
        ],
        [
         105.293,
         27.771
        ],
        [
         105.29,
         27.712
        ],
        [
         105.308,
         27.705
        ],
        [
         105.354,
         27.749
        ],
        [
         105.44,
         27.775
        ],
        [
         105.508,
         27.769
        ],
        [
         105.56,
         27.72
        ],
        [
         105.605,
         27.716
        ],
        [
         105.624,
         27.666
        ],
        [
         105.664,
         27.684
        ],
        [
         105.72,
         27.684
        ],
        [
         105.723,
         27.706
        ],
        [
         105.768,
         27.718
        ],
        [
         105.848,
         27.707
        ],
        [
         105.868,
         27.733
        ],
        [
         105.923,
         27.747
        ],
        [
         105.928,
         27.73
        ],
        [
         105.985,
         27.75
        ],
        [
         106.023,
         27.747
        ],
        [
         106.064,
         27.777
        ],
        [
         106.121,
         27.78
        ],
        [
         106.193,
         27.754
        ],
        [
         106.243,
         27.767
        ],
        [
         106.307,
         27.809
        ],
        [
         106.337,
         27.859
        ],
        [
         106.325,
         27.899
        ],
        [
         106.305,
         27.899
        ],
        [
         106.308,
         27.937
        ],
        [
         106.328,
         27.953
        ],
        [
         106.286,
         28.007
        ],
        [
         106.246,
         28.012
        ],
        [
         106.26,
         28.05
        ],
        [
         104.93,
         28.05
        ]
       ]
      ]
     ]
    },
    "n": "四川省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         106.26,
         28.05
        ],
        [
         106.246,
         28.012
        ],
        [
         106.286,
         28.007
        ],
        [
         106.328,
         27.953
        ],
        [
         106.308,
         27.937
        ],
        [
         106.305,
         27.899
        ],
        [
         106.325,
         27.899
        ],
        [
         106.337,
         27.859
        ],
        [
         106.307,
         27.809
        ],
        [
         106.243,
         27.767
        ],
        [
         106.193,
         27.754
        ],
        [
         106.121,
         27.78
        ],
        [
         106.064,
         27.777
        ],
        [
         106.023,
         27.747
        ],
        [
         105.985,
         27.75
        ],
        [
         105.928,
         27.73
        ],
        [
         105.923,
         27.747
        ],
        [
         105.868,
         27.733
        ],
        [
         105.848,
         27.707
        ],
        [
         105.768,
         27.718
        ],
        [
         105.723,
         27.706
        ],
        [
         105.72,
         27.684
        ],
        [
         105.664,
         27.684
        ],
        [
         105.624,
         27.666
        ],
        [
         105.605,
         27.716
        ],
        [
         105.56,
         27.72
        ],
        [
         105.508,
         27.769
        ],
        [
         105.44,
         27.775
        ],
        [
         105.354,
         27.749
        ],
        [
         105.308,
         27.705
        ],
        [
         105.296,
         27.632
        ],
        [
         105.305,
         27.612
        ],
        [
         105.256,
         27.582
        ],
        [
         105.232,
         27.547
        ],
        [
         105.26,
         27.515
        ],
        [
         105.234,
         27.489
        ],
        [
         105.233,
         27.437
        ],
        [
         105.183,
         27.367
        ],
        [
         105.184,
         27.393
        ],
        [
         105.121,
         27.418
        ],
        [
         105.068,
         27.418
        ],
        [
         105.011,
         27.379
        ],
        [
         104.93,
         27.336
        ],
        [
         104.93,
         25.25
        ],
        [
         106.932,
         25.25
        ],
        [
         106.933,
         25.251
        ],
        [
         106.935,
         25.25
        ],
        [
         106.991,
         25.25
        ],
        [
         107.014,
         25.276
        ],
        [
         107.013,
         25.353
        ],
        [
         106.988,
         25.359
        ],
        [
         106.964,
         25.438
        ],
        [
         106.997,
         25.443
        ],
        [
         107.016,
         25.496
        ],
        [
         107.067,
         25.509
        ],
        [
         107.064,
         25.559
        ],
        [
         107.186,
         25.579
        ],
        [
         107.205,
         25.608
        ],
        [
         107.229,
         25.605
        ],
        [
         107.232,
         25.557
        ],
        [
         107.264,
         25.543
        ],
        [
         107.337,
         25.461
        ],
        [
         107.308,
         25.433
        ],
        [
         107.318,
         25.402
        ],
        [
         107.359,
         25.394
        ],
        [
         107.376,
         25.412
        ],
        [
         107.421,
         25.393
        ],
        [
         107.409,
         25.347
        ],
        [
         107.433,
         25.289
        ],
        [
         107.481,
         25.3
        ],
        [
         107.49,
         25.277
        ],
        [
         107.482,
         25.25
        ],
        [
         107.568,
         25.25
        ],
        [
         107.577,
         25.257
        ],
        [
         107.6,
         25.251
        ],
        [
         107.632,
         25.31
        ],
        [
         107.66,
         25.316
        ],
        [
         107.662,
         25.259
        ],
        [
         107.67,
         25.25
        ],
        [
         108.134,
         25.25
        ],
        [
         108.143,
         25.27
        ],
        [
         108.152,
         25.324
        ],
        [
         108.143,
         25.391
        ],
        [
         108.193,
         25.405
        ],
        [
         108.162,
         25.445
        ],
        [
         108.193,
         25.459
        ],
        [
         108.252,
         25.43
        ],
        [
         108.241,
         25.462
        ],
        [
         108.281,
         25.48
        ],
        [
         108.308,
         25.526
        ],
        [
         108.349,
         25.536
        ],
        [
         108.36,
         25.513
        ],
        [
         108.4,
         25.491
        ],
        [
         108.419,
         25.443
        ],
        [
         108.472,
         25.459
        ],
        [
         108.586,
         25.366
        ],
        [
         108.589,
         25.335
        ],
        [
         108.625,
         25.308
        ],
        [
         108.63,
         25.336
        ],
        [
         108.6,
         25.432
        ],
        [
         108.607,
         25.492
        ],
        [
         108.635,
         25.521
        ],
        [
         108.689,
         25.533
        ],
        [
         108.658,
         25.55
        ],
        [
         108.661,
         25.585
        ],
        [
         108.686,
         25.587
        ],
        [
         108.689,
         25.623
        ],
        [
         108.725,
         25.635
        ],
        [
         108.784,
         25.628
        ],
        [
         108.8,
         25.577
        ],
        [
         108.782,
         25.555
        ],
        [
         108.815,
         25.527
        ],
        [
         108.826,
         25.55
        ],
        [
         108.891,
         25.556
        ],
        [
         108.889,
         25.543
        ],
        [
         108.949,
         25.557
        ],
        [
         109.025,
         25.512
        ],
        [
         109.088,
         25.551
        ],
        [
         109.052,
         25.567
        ],
        [
         109.031,
         25.63
        ],
        [
         109.075,
         25.694
        ],
        [
         109.079,
         25.721
        ],
        [
         109.043,
         25.739
        ],
        [
         109.008,
         25.735
        ],
        [
         108.954,
         25.687
        ],
        [
         108.954,
         25.687
        ],
        [
         108.9,
         25.682
        ],
        [
         108.896,
         25.714
        ],
        [
         108.94,
         25.74
        ],
        [
         108.964,
         25.733
        ],
        [
         109.0,
         25.765
        ],
        [
         108.99,
         25.779
        ],
        [
         109.048,
         25.791
        ],
        [
         109.078,
         25.777
        ],
        [
         109.095,
         25.805
        ],
        [
         109.144,
         25.795
        ],
        [
         109.132,
         25.763
        ],
        [
         109.148,
         25.742
        ],
        [
         109.207,
         25.788
        ],
        [
         109.207,
         25.74
        ],
        [
         109.296,
         25.714
        ],
        [
         109.34,
         25.731
        ],
        [
         109.328,
         25.762
        ],
        [
         109.34,
         25.834
        ],
        [
         109.359,
         25.836
        ],
        [
         109.397,
         25.9
        ],
        [
         109.4,
         25.903
        ],
        [
         109.4,
         26.283
        ],
        [
         109.37,
         26.277
        ],
        [
         109.351,
         26.264
        ],
        [
         109.325,
         26.29
        ],
        [
         109.286,
         26.296
        ],
        [
         109.271,
         26.328
        ],
        [
         109.296,
         26.35
        ],
        [
         109.32,
         26.418
        ],
        [
         109.381,
         26.454
        ],
        [
         109.362,
         26.472
        ],
        [
         109.386,
         26.493
        ],
        [
         109.381,
         26.519
        ],
        [
         109.4,
         26.529
        ],
        [
         109.4,
         26.562
        ],
        [
         109.391,
         26.599
        ],
        [
         109.355,
         26.659
        ],
        [
         109.334,
         26.646
        ],
        [
         109.306,
         26.661
        ],
        [
         109.284,
         26.698
        ],
        [
         109.355,
         26.693
        ],
        [
         109.4,
         26.716
        ],
        [
         109.4,
         27.154
        ],
        [
         109.359,
         27.153
        ],
        [
         109.335,
         27.139
        ],
        [
         109.264,
         27.132
        ],
        [
         109.239,
         27.149
        ],
        [
         109.217,
         27.115
        ],
        [
         109.166,
         27.067
        ],
        [
         109.101,
         27.069
        ],
        [
         109.129,
         27.123
        ],
        [
         109.033,
         27.104
        ],
        [
         109.008,
         27.08
        ],
        [
         108.94,
         27.045
        ],
        [
         108.943,
         27.017
        ],
        [
         108.943,
         27.017
        ],
        [
         108.878,
         27.016
        ],
        [
         108.791,
         27.084
        ],
        [
         108.879,
         27.106
        ],
        [
         108.927,
         27.161
        ],
        [
         108.908,
         27.205
        ],
        [
         108.963,
         27.236
        ],
        [
         108.984,
         27.268
        ],
        [
         109.054,
         27.294
        ],
        [
         109.045,
         27.331
        ],
        [
         109.104,
         27.337
        ],
        [
         109.142,
         27.418
        ],
        [
         109.142,
         27.448
        ],
        [
         109.167,
         27.418
        ],
        [
         109.202,
         27.45
        ],
        [
         109.245,
         27.418
        ],
        [
         109.3,
         27.424
        ],
        [
         109.303,
         27.476
        ],
        [
         109.4,
         27.547
        ],
        [
         109.4,
         27.724
        ],
        [
         109.367,
         27.722
        ],
        [
         109.378,
         27.737
        ],
        [
         109.333,
         27.783
        ],
        [
         109.347,
         27.838
        ],
        [
         109.322,
         27.868
        ],
        [
         109.302,
         27.956
        ],
        [
         109.32,
         27.989
        ],
        [
         109.362,
         28.008
        ],
        [
         109.379,
         28.035
        ],
        [
         109.356,
         28.05
        ],
        [
         109.318,
         28.05
        ],
        [
         109.298,
         28.036
        ],
        [
         109.302,
         28.05
        ],
        [
         106.26,
         28.05
        ]
       ]
      ]
     ]
    },
    "n": "贵州省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         105.308,
         27.705
        ],
        [
         105.29,
         27.712
        ],
        [
         105.293,
         27.771
        ],
        [
         105.274,
         27.795
        ],
        [
         105.313,
         27.811
        ],
        [
         105.26,
         27.828
        ],
        [
         105.233,
         27.896
        ],
        [
         105.285,
         27.936
        ],
        [
         105.271,
         27.997
        ],
        [
         105.248,
         28.009
        ],
        [
         105.218,
         27.991
        ],
        [
         105.186,
         27.995
        ],
        [
         105.168,
         28.021
        ],
        [
         105.184,
         28.05
        ],
        [
         104.979,
         28.05
        ],
        [
         104.975,
         28.021
        ],
        [
         104.93,
         27.984
        ],
        [
         104.93,
         25.25
        ],
        [
         104.93,
         25.25
        ],
        [
         104.93,
         27.336
        ],
        [
         105.011,
         27.379
        ],
        [
         105.068,
         27.418
        ],
        [
         105.121,
         27.418
        ],
        [
         105.184,
         27.393
        ],
        [
         105.183,
         27.367
        ],
        [
         105.233,
         27.437
        ],
        [
         105.234,
         27.489
        ],
        [
         105.26,
         27.515
        ],
        [
         105.232,
         27.547
        ],
        [
         105.256,
         27.582
        ],
        [
         105.305,
         27.612
        ],
        [
         105.296,
         27.632
        ],
        [
         105.308,
         27.705
        ]
       ]
      ]
     ]
    },
    "n": "云南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        107.505,
        26.338
       ],
       [
        107.501,
        26.239
       ],
       [
        107.519,
        26.191
       ],
       [
        107.558,
        26.164
       ],
       [
        107.61,
        26.167
       ],
       [
        107.708,
        26.218
       ],
       [
        107.78,
        26.358
       ],
       [
        107.8,
        26.432
       ],
       [
        107.793,
        26.485
       ],
       [
        107.826,
        26.53
       ],
       [
        107.9,
        26.564
       ],
       [
        107.959,
        26.617
       ],
       [
        108.005,
        26.688
       ],
       [
        108.072,
        26.753
       ],
       [
        108.159,
        26.812
       ],
       [
        108.251,
        26.839
       ],
       [
        108.348,
        26.835
       ],
       [
        108.396,
        26.817
       ],
       [
        108.396,
        26.785
       ],
       [
        108.453,
        26.725
       ],
       [
        108.568,
        26.636
       ],
       [
        108.645,
        26.618
       ],
       [
        108.683,
        26.67
       ],
       [
        108.718,
        26.696
       ],
       [
        108.748,
        26.695
       ],
       [
        108.762,
        26.679
       ],
       [
        108.76,
        26.649
       ],
       [
        108.795,
        26.614
       ],
       [
        108.869,
        26.575
       ],
       [
        108.961,
        26.573
       ],
       [
        109.073,
        26.608
       ],
       [
        109.194,
        26.679
       ],
       [
        109.39,
        26.838
       ],
       [
        109.4,
        26.85
       ]
      ]
     ]
    },
    "n": "Yuan"
   }
  ],
  "lakes": [],
  "_bbox": [
   104.93,
   25.25,
   109.4,
   28.05
  ]
 }
};
