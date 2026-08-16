// 本文件由 tools/build.py 自动生成（切片 four_inv），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["four_inv"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["four_inv"] = {
 "meta": {
  "kind": "tech",
  "region": "tech",
  "title": "四大发明",
  "dossier_label": "四大发明",
  "subtitle": "2—13 世纪 · 改变世界的原创",
  "primary_place": "kaifeng_f",
  "dossier_event": "event:fi_paper",
  "terrain_grid": "china_coarse",
  "lead": "蔡伦改进造纸（105），隋唐雕版、毕昇活字印刷，唐末火药用于军事，宋代指南针用于航海——四大发明先后成熟并外传，深刻重塑世界文明进程。",
  "parties_note": "各发明年代与西传路径据科技史综合；个别（如火药西传）具体年份有考订差异。",
  "subject_names": {
   "person:cailun": "蔡伦",
   "person:bisheng": "毕昇"
  },
  "page": "county.html?scene=four_inv",
  "key": "four_inv",
  "scene_id": "four_inv",
  "vocab_pack": "inline:four_inv"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "四大发明·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "各发明年代与西传路径据科技史综合；个别（如火药西传）具体年份有考订差异。"
  }
 ],
 "places": [
  {
   "id": "luoyang_f",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "蔡伦改进造纸地（尚方）",
   "elev": 171
  },
  {
   "id": "kaifeng_f",
   "name": "开封",
   "lon": 114.3,
   "lat": 34.79,
   "note": "北宋毕昇活字所在",
   "elev": 76
  },
  {
   "id": "changan_f",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "唐火药、海路起点",
   "elev": 391
  }
 ],
 "persons": [
  {
   "id": "cailun",
   "name": "蔡伦",
   "side": "东汉",
   "influence": 1
  },
  {
   "id": "bisheng",
   "name": "毕昇",
   "side": "北宋",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_fi_paper",
   "subject": "event:fi_paper",
   "predicate": "事件",
   "value_text": "蔡伦以树皮麻头敝布渔网为纸，奏上，「蔡侯纸」行世，书写材料革命。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 105,
    "end": 105,
    "era_text": "东汉永元十七年"
   },
   "place": "luoyang_f",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_fi_print",
   "subject": "event:fi_print",
   "predicate": "事件",
   "value_text": "布衣毕昇发明胶泥活字，印书省工省料，为印刷术里程碑。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1040,
    "end": 1040,
    "era_text": "北宋庆历"
   },
   "place": "kaifeng_f",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_fi_gun",
   "subject": "event:fi_gun",
   "predicate": "事件",
   "value_text": "唐末火药配方渐明，用于飞火、火球；宋设火药作坊，火器始兴。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 850,
    "end": 850,
    "era_text": "唐大中"
   },
   "place": "changan_f",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_fi_compass",
   "subject": "event:fi_compass",
   "predicate": "事件",
   "value_text": "《萍洲可谈》载海舶「夜则观星，昼则观日，阴晦则观指南针」，罗盘用于远洋。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1119,
    "end": 1119,
    "era_text": "北宋宣和"
   },
   "place": "kaifeng_f",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M33",
   "subject": "person:cailun",
   "predicate": "改进造纸",
   "value_text": "公元105年改进造纸",
   "time": {
    "era_text": "公元105年",
    "start": "105-01-01",
    "end": "105-12-31",
    "gregorian_year": 105
   },
   "place": "",
   "source": "synthesis",
   "quote": "公元105年蔡伦改进造纸",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "公元纪年非年号，原文如此",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M34",
   "subject": "event:fi_paper",
   "predicate": "成形",
   "value_text": "蔡伦改进造纸",
   "time": {
    "era_text": "公元105年",
    "start": "105-01-01",
    "end": "105-12-31",
    "gregorian_year": 105
   },
   "place": "",
   "source": "synthesis",
   "quote": "天下便之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "事件直接描述，用event前缀",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M32",
   "subject": "person:bisheng",
   "predicate": "创泥活字",
   "value_text": "庆历年间创泥活字",
   "time": {
    "era_text": "庆历年间",
    "start": "1041-01-01",
    "end": "1041-12-31",
    "gregorian_year": 1041
   },
   "place": "",
   "source": "synthesis",
   "quote": "庆历年间毕昇创泥活字",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M34",
   "subject": "event:fi_print",
   "predicate": "成形",
   "value_text": "毕昇创泥活字",
   "time": {
    "era_text": "庆历年间",
    "start": "1041-01-01",
    "end": "1041-12-31",
    "gregorian_year": 1041
   },
   "place": "",
   "source": "synthesis",
   "quote": "毕昇创泥活字",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "事件直接描述，用event前缀",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M32",
   "subject": "event:fi_compass",
   "predicate": "应用",
   "value_text": "海船用罗盘辨向",
   "time": {
    "era_text": "绍兴年间",
    "start": "1131-01-01",
    "end": "1131-12-31",
    "gregorian_year": 1131
   },
   "place": "",
   "source": "synthesis",
   "quote": "绍兴年间海船用罗盘辨向",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "事件直接描述，用event前缀",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M29",
   "subject": "event:fi_paper",
   "predicate": "影响",
   "value_text": "天下便之",
   "time": {
    "era_text": "公元105年",
    "start": "105-01-01",
    "end": "105-12-31",
    "gregorian_year": 105
   },
   "place": "",
   "source": "synthesis",
   "quote": "天下便之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M30",
   "subject": "event:fi_compass",
   "predicate": "应用场景",
   "value_text": "海船辨向",
   "time": {
    "era_text": "绍兴年间",
    "start": "1131-01-01",
    "end": "1131-12-31",
    "gregorian_year": 1131
   },
   "place": "",
   "source": "synthesis",
   "quote": "海船用罗盘辨向",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M25",
   "subject": "event:fi_paper",
   "predicate": "时间",
   "value_text": "公元105年",
   "time": {
    "era_text": "公元105年",
    "start": "105-01-01",
    "end": "105-12-31",
    "gregorian_year": 105
   },
   "place": "",
   "source": "synthesis",
   "quote": "公元105年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "公元纪年非年号，原文如此",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX011_M16",
   "subject": "event:fi_print",
   "predicate": "时间",
   "value_text": "庆历年间",
   "time": {
    "era_text": "庆历年间",
    "start": "1041-01-01",
    "end": "1041-12-31",
    "gregorian_year": 1041
   },
   "place": "",
   "source": "synthesis",
   "quote": "庆历年间",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX012_M11",
   "subject": "event:fi_compass",
   "predicate": "时间",
   "value_text": "绍兴年间",
   "time": {
    "era_text": "绍兴年间",
    "start": "1131-01-01",
    "end": "1131-12-31",
    "gregorian_year": 1131
   },
   "place": "",
   "source": "synthesis",
   "quote": "绍兴年间",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "FOUR_INVG01",
   "subject": "event:fi_paper",
   "predicate": "史料缺环",
   "value_text": "此技术或发明的源流、改进与传播，古籍记载简略且间有附会，相关细节存在缺口。",
   "time": {
    "era_text": "庆历",
    "start": "1041-01-01",
    "end": "1041-12-31",
    "gregorian_year": 1041
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "tech",
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
  "FOUR_INVG01"
 ],
 "events": [
  {
   "id": "ev_fi_paper",
   "subject": "event:fi_paper",
   "year": 105,
   "era": "东汉永元十七年",
   "title": "蔡伦改进造纸",
   "kind": "科技",
   "text": "蔡伦以树皮麻头敝布渔网为纸，奏上，「蔡侯纸」行世，书写材料革命。",
   "place": "luoyang_f"
  },
  {
   "id": "ev_fi_print",
   "subject": "event:fi_print",
   "year": 1040,
   "era": "北宋庆历",
   "title": "毕昇活字印刷",
   "kind": "科技",
   "text": "布衣毕昇发明胶泥活字，印书省工省料，为印刷术里程碑。",
   "place": "kaifeng_f"
  },
  {
   "id": "ev_fi_gun",
   "subject": "event:fi_gun",
   "year": 850,
   "era": "唐大中",
   "title": "火药用于军事",
   "kind": "科技",
   "text": "唐末火药配方渐明，用于飞火、火球；宋设火药作坊，火器始兴。",
   "place": "changan_f"
  },
  {
   "id": "ev_fi_compass",
   "subject": "event:fi_compass",
   "year": 1119,
   "era": "北宋宣和",
   "title": "指南针航海",
   "kind": "科技",
   "text": "《萍洲可谈》载海舶「夜则观星，昼则观日，阴晦则观指南针」，罗盘用于远洋。",
   "place": "kaifeng_f"
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
