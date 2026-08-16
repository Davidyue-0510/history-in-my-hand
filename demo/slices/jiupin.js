// 本文件由 tools/build.py 自动生成（切片 jiupin），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jiupin"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jiupin"] = {
 "meta": {
  "kind": "reform",
  "region": "reform",
  "title": "九品中正制",
  "dossier_label": "九品中正制",
  "subtitle": "220 · 曹魏",
  "primary_place": "yecheng",
  "dossier_event": "event:jp_220",
  "terrain_grid": "china_coarse",
  "lead": "延康元年（220）曹魏吏部尚书陈群立九品中正：州郡设中正，品第人物为上上至下下九等，据家世、才、德授官。初矫察举之弊，后中正多为世族把持，「上品无寒门」。",
  "parties_note": "九品中正据《通典·选举》与《三国志》注综合，其门阀化乃渐变非一夕。",
  "subject_names": {
   "person:chenqun": "陈群",
   "person:caocao": "曹操"
  },
  "page": "county.html?scene=jiupin",
  "key": "jiupin",
  "scene_id": "jiupin",
  "vocab_pack": "inline:jiupin"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "九品中正制·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "九品中正据《通典·选举》与《三国志》注综合，其门阀化乃渐变非一夕。"
  },
  {
   "id": "san_guo_zhi_jp",
   "title": "《三国志》",
   "name": "《三国志》",
   "party": "官修史书",
   "faction": "menfa",
   "bias_note": "陈寿记九品中正之设，措辞平允，反映士族立场。"
  },
  {
   "id": "bao_pu_zi",
   "title": "《抱朴子》",
   "name": "《抱朴子》",
   "party": "私家著述",
   "faction": "hanmen",
   "bias_note": "葛洪出身寒微，直言中正舞弊、士族壅塞贤路。"
  }
 ],
 "places": [
  {
   "id": "yecheng",
   "name": "邺城",
   "lon": 114.08,
   "lat": 36.07,
   "note": "曹魏都",
   "elev": 334
  },
  {
   "id": "luoyang",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "东汉/唐东都",
   "elev": 171
  }
 ],
 "persons": [
  {
   "id": "chenqun",
   "name": "陈群",
   "side": "魏",
   "influence": 1
  },
  {
   "id": "caocao",
   "name": "曹操",
   "side": "魏",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_jp_220",
   "subject": "event:jp_220",
   "predicate": "事件",
   "value_text": "立中正品第人物，据家世才德授官，开魏晋选举之制。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 220,
    "end": 220,
    "era_text": "延康元"
   },
   "place": "yecheng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_jp_later",
   "subject": "event:jp_later",
   "predicate": "事件",
   "value_text": "中正归世族，寒门难进，「上品无寒门」成局。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 280,
    "end": 280,
    "era_text": "西晋"
   },
   "place": "luoyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M44",
   "subject": "event:jp_220",
   "predicate": "实行",
   "value_text": "行九品中正制",
   "time": {
    "era_text": "黄初元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "",
   "source": "synthesis",
   "quote": "黄初元年，魏文帝采陈群议，行九品中正制",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "事件主体为魏文帝采纳陈群建议，实行九品中正制",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M45",
   "subject": "person:chenqun",
   "predicate": "提出建议",
   "value_text": "采陈群议",
   "time": {
    "era_text": "黄初元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "",
   "source": "synthesis",
   "quote": "魏文帝采陈群议",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M43",
   "subject": "event:jp_220",
   "predicate": "设置官职",
   "value_text": "州郡设中正",
   "time": {
    "era_text": "黄初元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "",
   "source": "synthesis",
   "quote": "州郡设中正",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "中正官设置于州郡两级",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M45",
   "subject": "event:jp_220",
   "predicate": "职能",
   "value_text": "品第人物",
   "time": {
    "era_text": "黄初元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "",
   "source": "synthesis",
   "quote": "品第人物",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M43",
   "subject": "event:jp_220",
   "predicate": "影响",
   "value_text": "门第渐固",
   "time": {
    "era_text": "黄初元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "",
   "source": "synthesis",
   "quote": "门第渐固",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "原文直述影响",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M42",
   "subject": "event:jp_220",
   "predicate": "影响",
   "value_text": "寒门难进",
   "time": {
    "era_text": "黄初元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "",
   "source": "synthesis",
   "quote": "寒门难进",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M40",
   "subject": "event:jp_220",
   "predicate": "影响",
   "value_text": "士族之势成",
   "time": {
    "era_text": "黄初元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "",
   "source": "synthesis",
   "quote": "士族之势成",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M40",
   "subject": "event:jp_220",
   "predicate": "结果",
   "value_text": "门阀政治形成",
   "time": {
    "era_text": "黄初元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "",
   "source": "synthesis",
   "quote": "门第渐固，寒门难进，士族之势成",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "由原文影响推断出门阀政治形成",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "JIUPING01",
   "subject": "event:jp_220",
   "predicate": "史料缺环",
   "value_text": "此次改革的推行范围、受阻与实效，赞成与反对两方记载悬殊，相关评估存在缺口。",
   "time": {
    "era_text": "黄初",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "reform",
   "note": "多源纪年需对读",
   "lead": {
    "where": "诸史原文对读",
    "skills": [
     "纪年校勘",
     "多源比对"
    ],
    "accept": "补各方视角与纪年异文"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "JP_FX1",
   "subject": "event:jp_220",
   "predicate": "利益交换",
   "value_text": "曹丕为换取士族对代汉的支持，采陈群议行九品中正制，以官位清浊换取门阀政治背书——皇权向士族的利益妥协。",
   "source": "san_guo_zhi_jp",
   "quote": "（陈群）立九品官人之法，州郡皆置中正。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "layer": "record",
   "time": {
    "era_text": "公元220年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "",
   "scale": "empire",
   "note": "制度诞生即含门阀红利",
   "_party": "官修史书",
   "_faction": "menfa"
  },
  {
   "id": "JP_FX2",
   "subject": "event:jp_later",
   "predicate": "垄断固化",
   "value_text": "中正多由士族出任，品第依门第而非才德，遂成「上品无寒门，下品无势族」，寒门沉滞、门阀世袭。",
   "source": "bao_pu_zi",
   "quote": "举秀才，不知书；察孝廉，父别居。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "layer": "record",
   "time": {
    "era_text": "公元280年",
    "start": "280-01-01",
    "end": "280-12-31",
    "gregorian_year": 280
   },
   "place": "",
   "scale": "empire",
   "note": "寒门视角的制度批判",
   "_party": "私家著述",
   "_faction": "hanmen"
  },
  {
   "id": "JP_FX3",
   "subject": "event:jp_later",
   "predicate": "结构性冲突",
   "value_text": "九品中正是皇权、寒门与门阀三方博弈的凝固点：它短暂满足了曹魏的禅代需要，却让士族利益制度化，奠定此后两百年门阀政治。",
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.6,
   "layer": "inference",
   "time": {
    "era_text": "公元280年",
    "start": "280-01-01",
    "end": "280-12-31",
    "gregorian_year": 280
   },
   "place": "",
   "scale": "empire",
   "note": "综合各方记载的因果判断",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:jp_220|影响",
   "subject": "event:jp_220",
   "predicate": "影响",
   "kind": "record_vs_record",
   "count": 3,
   "spread": null,
   "assertion_ids": [
    "SX005_M43",
    "SX006_M42",
    "SX007_M40"
   ]
  }
 ],
 "gaps": [
  "JIUPING01"
 ],
 "events": [
  {
   "id": "ev_jp_220",
   "subject": "event:jp_220",
   "year": 220,
   "era": "延康元",
   "title": "陈群定九品",
   "kind": "制度",
   "text": "立中正品第人物，据家世才德授官，开魏晋选举之制。",
   "place": "yecheng"
  },
  {
   "id": "ev_jp_later",
   "subject": "event:jp_later",
   "year": 280,
   "era": "西晋",
   "title": "门阀固化",
   "kind": "结局",
   "text": "中正归世族，寒门难进，「上品无寒门」成局。",
   "place": "luoyang"
  }
 ],
 "edges": [],
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
   "综合史料",
   "官修史书",
   "私家著述"
  ],
  "party_bucket": {
   "综合史料": "综合史料",
   "官修史书": "官修史书",
   "私家著述": "私家著述"
  },
  "party_colors": {
   "综合史料": "#7f8c8d",
   "官修史书": "#6d4c41",
   "私家著述": "#2980b9"
  },
  "legend": {},
  "faction_colors": {
   "menfa": "#8e44ad",
   "hanmen": "#16a085"
  },
  "factions": {
   "menfa": {
    "name": "门阀士族（世家大族）",
    "period": "曹魏—东晋（公元220—420）",
    "interest": "以九品中正垄断清途官位，使「上品无寒门，下品无势族」；通过联姻、门生故吏编织权力网络，世代把持政权。",
    "key_figures": [
     "颍川荀氏",
     "琅琊王氏",
     "陈郡谢氏",
     "陈群"
    ],
    "typical_sources": [
     "三国志",
     "晋书",
     "世说新语"
    ],
    "bias_note": "正史多出自士族史官之手，自然将门阀垄断叙述为「德望所归」；对寒门沉滞之怨多轻描淡写。",
    "bases": [
     "颍川",
     "琅琊",
     "陈郡",
     "清河",
     "闻喜",
     "陇西"
    ],
    "geo_note": "门阀士族以郡望为根基：颍川荀氏、琅琊王氏、陈郡谢氏、清河崔氏、河东裴氏、陇西李氏——地方大族垄断入仕。"
   },
   "hanmen": {
    "name": "寒门·皇权（寒素与君主）",
    "period": "曹魏—东晋",
    "interest": "皇权欲借选官收拢人才、制衡士族；寒门子弟求以才学入仕，却受中正品第压制，二者皆与门阀利益冲突。",
    "key_figures": [
     "曹丕",
     "司马炎",
     "葛洪",
     "左思"
    ],
    "typical_sources": [
     "抱朴子",
     "文选·咏史"
    ],
    "bias_note": "寒门著述（如葛洪《抱朴子》）直斥「举秀才不知书，察孝廉父别居」，是门阀政治的少数非官方控诉。",
    "bases": [
     "洛阳",
     "长安"
    ],
    "geo_note": "寒门与君主：皇权在洛阳（后建康），寒素散居无统一郡望，靠皇权破格提拔对抗士族。"
   }
  },
  "faction_geo": {
   "gaps": [
    {
     "region": "江南（孙吴旧境）",
     "determination": "genuine_gap",
     "note": "西晋九品中正初创时江南士族未起（东晋南渡方成门阀），此期江南无独立代言。"
    },
    {
     "region": "关中",
     "determination": "affiliate:menfa",
     "note": "关中士族（京兆韦杜）亦属门阀，附门阀士族大格局，无独立派系。"
    }
   ]
  }
 },
 "faction_geo": {
  "menfa": {
   "name": "门阀士族（世家大族）",
   "color": "#8e44ad",
   "geo_note": "门阀士族以郡望为根基：颍川荀氏、琅琊王氏、陈郡谢氏、清河崔氏、河东裴氏、陇西李氏——地方大族垄断入仕。",
   "points": [
    {
     "name": "颍川",
     "lon": 113.85,
     "lat": 34.04,
     "note": "荀氏、陈氏等士族郡望，今河南许昌",
     "resolved": true
    },
    {
     "name": "琅琊",
     "lon": 118.35,
     "lat": 35.1,
     "note": "王氏郡望，今山东临沂",
     "resolved": true
    },
    {
     "name": "陈郡",
     "lon": 114.88,
     "lat": 33.74,
     "note": "谢氏郡望，今河南淮阳",
     "resolved": true
    },
    {
     "name": "清河",
     "lon": 115.98,
     "lat": 37.07,
     "note": "崔氏郡望，今河北清河",
     "resolved": true
    },
    {
     "name": "闻喜",
     "lon": 111.23,
     "lat": 35.16,
     "note": "裴氏郡望，今山西闻喜",
     "resolved": true
    },
    {
     "name": "陇西",
     "lon": 103.85,
     "lat": 35.36,
     "note": "李氏郡望，今甘肃临洮",
     "resolved": true
    }
   ]
  },
  "hanmen": {
   "name": "寒门·皇权（寒素与君主）",
   "color": "#16a085",
   "geo_note": "寒门与君主：皇权在洛阳（后建康），寒素散居无统一郡望，靠皇权破格提拔对抗士族。",
   "points": [
    {
     "name": "洛阳",
     "lon": 112.45,
     "lat": 34.62,
     "note": "唐东都，今洛阳",
     "resolved": true
    },
    {
     "name": "长安",
     "lon": 108.95,
     "lat": 34.27,
     "note": "唐都，今西安",
     "resolved": true
    }
   ]
  }
 }
};
