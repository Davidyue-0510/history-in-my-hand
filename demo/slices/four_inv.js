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
   "influence": 0
  },
  {
   "id": "bisheng",
   "name": "毕昇",
   "side": "北宋",
   "influence": 0
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
  }
 ],
 "conflicts": [],
 "gaps": [],
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
