// 本文件由 tools/build.py 自动生成（切片 locust），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["locust"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["locust"] = {
 "meta": {
  "kind": "disaster",
  "region": "ecology",
  "title": "蝗灾",
  "dossier_label": "蝗灾",
  "subtitle": "622—1943 · 历代大蝗",
  "primary_place": "guanzhong",
  "dossier_event": "event:lc_622",
  "terrain_grid": "china_coarse",
  "lead": "蝗灾与旱灾耦合，史不绝书。唐代山东大蝗、明末陕北连蝗、1943 河南大旱蝗皆曾酿成大饥。本切片按发生地标注。",
  "parties_note": "蝗灾记载来自正史《五行志》与方志，范围为「蝗至某州」，具体受灾面积无精确统计。",
  "subject_names": {
   "person:yaochong": "姚崇",
   "person:chongzhen": "崇祯帝"
  },
  "page": "county.html?scene=locust",
  "key": "locust",
  "scene_id": "locust",
  "vocab_pack": "inline:locust"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "蝗灾·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "蝗灾记载来自正史《五行志》与方志，范围为「蝗至某州」，具体受灾面积无精确统计。"
  }
 ],
 "places": [
  {
   "id": "guanzhong",
   "name": "关中",
   "lon": 108.94,
   "lat": 34.34,
   "note": "唐京畿，武德大蝗",
   "elev": 391
  },
  {
   "id": "shandong",
   "name": "山东",
   "lon": 117.0,
   "lat": 36.65,
   "note": "开元大蝗",
   "elev": 148
  },
  {
   "id": "kaifeng",
   "name": "开封",
   "lon": 114.3,
   "lat": 34.79,
   "note": "北宋汴京，熙宁蝗",
   "elev": 76
  },
  {
   "id": "yanan",
   "name": "延安",
   "lon": 109.5,
   "lat": 36.6,
   "note": "明末陕北蝗",
   "elev": 978
  },
  {
   "id": "henan",
   "name": "河南",
   "lon": 113.65,
   "lat": 34.76,
   "note": "1943 大旱蝗",
   "elev": 110
  }
 ],
 "persons": [
  {
   "id": "yaochong",
   "name": "姚崇",
   "side": "唐宰相",
   "influence": 0
  },
  {
   "id": "chongzhen",
   "name": "崇祯帝",
   "side": "明",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_lc_622",
   "subject": "event:lc_622",
   "predicate": "事件",
   "value_text": "《新唐书》载武德五年蝗，太宗吞蝗以示为民请命。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 622,
    "end": 622,
    "era_text": "唐武德五年"
   },
   "place": "guanzhong",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_lc_715",
   "subject": "event:lc_715",
   "predicate": "事件",
   "value_text": "姚崇持「夜火坑捕」法灭蝗，山东、河南大蝗赖此稍弭。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 715,
    "end": 715,
    "era_text": "唐开元三年"
   },
   "place": "shandong",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_lc_1073",
   "subject": "event:lc_1073",
   "predicate": "事件",
   "value_text": "熙宁中连岁蝗旱，神宗诏赈，王安石行青苗以济。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1073,
    "end": 1073,
    "era_text": "北宋熙宁六年"
   },
   "place": "kaifeng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_lc_1628",
   "subject": "event:lc_1628",
   "predicate": "事件",
   "value_text": "崇祯初陕北连年蝗旱，民大饥，流寇起。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1628,
    "end": 1628,
    "era_text": "明崇祯元年"
   },
   "place": "yanan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_lc_1943",
   "subject": "event:lc_1943",
   "predicate": "事件",
   "value_text": "1942—1943 河南大旱继以飞蝗，赤地千里，饥殍载道。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1943,
    "end": 1943,
    "era_text": "民国三十二年"
   },
   "place": "henan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M69",
   "subject": "place:guanzhong",
   "predicate": "蝗灾",
   "value_text": "关辅大蝗",
   "time": {
    "era_text": "贞观二年",
    "start": "628-01-01",
    "end": "628-12-31",
    "gregorian_year": 628
   },
   "place": "guanzhong",
   "source": "synthesis",
   "quote": "关辅大蝗",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M68",
   "subject": "place:guanzhong",
   "predicate": "蝗不为灾",
   "value_text": "蝗不为灾",
   "time": {
    "era_text": "贞观二年",
    "start": "628-01-01",
    "end": "628-12-31",
    "gregorian_year": 628
   },
   "place": "guanzhong",
   "source": "synthesis",
   "quote": "蝗不为灾",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "因果关联为原文表述，未作科学验证",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M70",
   "subject": "place:guanzhong",
   "predicate": "伤稼",
   "value_text": "蝗伤稼",
   "time": {
    "era_text": "贞观二年",
    "start": "628-01-01",
    "end": "628-12-31",
    "gregorian_year": 628
   },
   "place": "guanzhong",
   "source": "synthesis",
   "quote": "蝗伤稼",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M68",
   "subject": "place:guanzhong",
   "predicate": "乏食",
   "value_text": "民有乏食",
   "time": {
    "era_text": "贞观二年",
    "start": "628-01-01",
    "end": "628-12-31",
    "gregorian_year": 628
   },
   "place": "guanzhong",
   "source": "synthesis",
   "quote": "民有乏食",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M66",
   "subject": "place:guanzhong",
   "predicate": "赈济",
   "value_text": "诏出粟赈之",
   "time": {
    "era_text": "贞观二年",
    "start": "628-01-01",
    "end": "628-12-31",
    "gregorian_year": 628
   },
   "place": "guanzhong",
   "source": "synthesis",
   "quote": "诏出粟赈之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M62",
   "subject": "place:guanzhong",
   "predicate": "蝗灾后果",
   "value_text": "蝗不为灾",
   "time": {
    "era_text": "贞观二年",
    "start": "628-01-01",
    "end": "628-12-31",
    "gregorian_year": 628
   },
   "place": "guanzhong",
   "source": "synthesis",
   "quote": "蝗不为灾",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "province",
   "note": "原文将蝗不为灾归因于太宗吞蝗，属主观叙事，非客观因果",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "LOCUSTG01",
   "subject": "event:lc_622",
   "predicate": "史料缺环",
   "value_text": "此次灾异的死亡与受灾范围，方志、奏报与私家记载互有出入，朝廷赈济之实效亦见仁见智，相关数字存在缺口。",
   "time": {
    "era_text": "贞观",
    "start": "628-01-01",
    "end": "628-12-31",
    "gregorian_year": 628
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "disaster",
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
  }
 ],
 "conflicts": [],
 "gaps": [
  "LOCUSTG01"
 ],
 "events": [
  {
   "id": "ev_lc_622",
   "subject": "event:lc_622",
   "year": 622,
   "era": "唐武德五年",
   "title": "关中大蝗",
   "kind": "灾异",
   "text": "《新唐书》载武德五年蝗，太宗吞蝗以示为民请命。",
   "place": "guanzhong"
  },
  {
   "id": "ev_lc_715",
   "subject": "event:lc_715",
   "year": 715,
   "era": "唐开元三年",
   "title": "山东大蝗",
   "kind": "灾异",
   "text": "姚崇持「夜火坑捕」法灭蝗，山东、河南大蝗赖此稍弭。",
   "place": "shandong"
  },
  {
   "id": "ev_lc_1073",
   "subject": "event:lc_1073",
   "year": 1073,
   "era": "北宋熙宁六年",
   "title": "开封诸路蝗",
   "kind": "灾异",
   "text": "熙宁中连岁蝗旱，神宗诏赈，王安石行青苗以济。",
   "place": "kaifeng"
  },
  {
   "id": "ev_lc_1628",
   "subject": "event:lc_1628",
   "year": 1628,
   "era": "明崇祯元年",
   "title": "陕北蝗旱",
   "kind": "灾异",
   "text": "崇祯初陕北连年蝗旱，民大饥，流寇起。",
   "place": "yanan"
  },
  {
   "id": "ev_lc_1943",
   "subject": "event:lc_1943",
   "year": 1943,
   "era": "民国三十二年",
   "title": "河南大旱蝗",
   "kind": "灾异",
   "text": "1942—1943 河南大旱继以飞蝗，赤地千里，饥殍载道。",
   "place": "henan"
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
   "综合史料"
  ],
  "party_bucket": {
   "综合史料": "综合史料"
  },
  "party_colors": {
   "综合史料": "#7f8c8d"
  },
  "legend": {}
 }
};
