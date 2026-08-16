// 本文件由 tools/build.py 自动生成（切片 dong_han_yi），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["dong_han_yi"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["dong_han_yi"] = {
 "meta": {
  "kind": "disaster",
  "region": "ecology",
  "title": "东汉大疫",
  "dossier_label": "东汉大疫",
  "subtitle": "196—220 · 建安瘟疫",
  "primary_place": "nanyang",
  "dossier_event": "event:dy_196",
  "terrain_grid": "china_coarse",
  "lead": "汉末战乱频仍、流民转徙，瘟疫数度大作。建安廿二年（217）「家家有僵尸之痛，室室有号泣之哀」，张仲景宗族二百余口十年死其七，遂著《伤寒杂病论》以济世。",
  "parties_note": "大疫记载见于《后汉书·五行志》与张仲景自序，死亡规模以世家记述折中，确切毒株已不可考。",
  "subject_names": {
   "person:zhangzhongjing": "张仲景"
  },
  "page": "county.html?scene=dong_han_yi",
  "key": "dong_han_yi",
  "scene_id": "dong_han_yi",
  "vocab_pack": "inline:dong_han_yi"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "东汉大疫·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "大疫记载见于《后汉书·五行志》与张仲景自序，死亡规模以世家记述折中，确切毒株已不可考。"
  }
 ],
 "places": [
  {
   "id": "nanyang",
   "name": "南阳",
   "lon": 112.53,
   "lat": 32.99,
   "note": "张仲景故里，东汉大疫中心",
   "elev": 132
  },
  {
   "id": "luoyang",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "东汉/唐东都",
   "elev": 171
  },
  {
   "id": "changan",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "汉唐都城",
   "elev": 391
  }
 ],
 "persons": [
  {
   "id": "zhangzhongjing",
   "name": "张仲景",
   "side": "东汉医家",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_dy_196",
   "subject": "event:dy_196",
   "predicate": "事件",
   "value_text": "中原板荡、民多流亡，疾疫渐兴，医书散佚。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 196,
    "end": 196,
    "era_text": "建安元"
   },
   "place": "luoyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_dy_217",
   "subject": "event:dy_217",
   "predicate": "事件",
   "value_text": "瘟疫大作，张仲景宗族二百余口十年间死伤近七成，促其撰方书。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 217,
    "end": 217,
    "era_text": "建安廿二"
   },
   "place": "nanyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_dy_book",
   "subject": "event:dy_book",
   "predicate": "事件",
   "value_text": "张仲景据临床集验成《伤寒杂病论》，开辨证论治之先，后世尊医圣。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 220,
    "end": 220,
    "era_text": "建安末"
   },
   "place": "nanyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M66",
   "subject": "event:dy_196",
   "predicate": "爆发",
   "value_text": "建安元年，天下大疫",
   "time": {
    "era_text": "建安元年",
    "start": "196-01-01",
    "end": "196-12-31",
    "gregorian_year": 196
   },
   "place": "",
   "source": "synthesis",
   "quote": "建安元年，天下大疫",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "地点未明，待消歧",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M67",
   "subject": "person:zhangzhongjing",
   "predicate": "宗族伤亡",
   "value_text": "宗族二百余口死者过半",
   "time": {
    "era_text": "建安元年",
    "start": "196-01-01",
    "end": "196-12-31",
    "gregorian_year": 196
   },
   "place": "",
   "source": "synthesis",
   "quote": "张仲景宗族二百余口死者过半",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "county",
   "note": "宗族具体所在地未明",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M65",
   "subject": "event:dy_217",
   "predicate": "爆发",
   "value_text": "建安二十二年，大疫复作",
   "time": {
    "era_text": "建安二十二年",
    "start": "217-01-01",
    "end": "217-12-31",
    "gregorian_year": 217
   },
   "place": "",
   "source": "synthesis",
   "quote": "建安二十二年，大疫复作",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "地点未明，待消歧",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M67",
   "subject": "event:dy_217",
   "predicate": "影响",
   "value_text": "建安七子凋零",
   "time": {
    "era_text": "建安二十二年",
    "start": "217-01-01",
    "end": "217-12-31",
    "gregorian_year": 217
   },
   "place": "",
   "source": "synthesis",
   "quote": "建安七子凋零",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "建安七子具体伤亡情况未详",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M65",
   "subject": "event:dy_book",
   "predicate": "成书背景",
   "value_text": "医方急出",
   "time": {
    "era_text": "建安二十二年",
    "start": "217-01-01",
    "end": "217-12-31",
    "gregorian_year": 217
   },
   "place": "",
   "source": "synthesis",
   "quote": "医方急出",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "county",
   "note": "推断张仲景因疫著书，原文未明说",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M63",
   "subject": "event:dy_196",
   "predicate": "与张仲景关联",
   "value_text": "宗族死者过半",
   "time": {
    "era_text": "建安元年",
    "start": "196-01-01",
    "end": "196-12-31",
    "gregorian_year": 196
   },
   "place": "",
   "source": "synthesis",
   "quote": "张仲景宗族二百余口死者过半",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "county",
   "note": "直接关联事件与人物",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M60",
   "subject": "event:dy_217",
   "predicate": "与医方关联",
   "value_text": "大疫复作，医方急出",
   "time": {
    "era_text": "建安二十二年",
    "start": "217-01-01",
    "end": "217-12-31",
    "gregorian_year": 217
   },
   "place": "",
   "source": "synthesis",
   "quote": "建安二十二年，大疫复作，建安七子凋零，医方急出",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "推断医方因大疫而急出，原文未明说因果",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M61",
   "subject": "event:dy_196",
   "predicate": "与建安七子关联",
   "value_text": "建安七子凋零",
   "time": {
    "era_text": "建安二十二年",
    "start": "217-01-01",
    "end": "217-12-31",
    "gregorian_year": 217
   },
   "place": "",
   "source": "synthesis",
   "quote": "建安七子凋零",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "empire",
   "note": "建安七子凋零是否与建安元年疫直接相关，原文未明",
   "lead": {
    "where": "event:dy_196 与 event:dy_217 的关联",
    "skills": [
     "历史考据",
     "文献比对"
    ],
    "accept": "明确建安七子凋零与两次大疫的具体关联"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "DONG_HAN_YIG01",
   "subject": "event:dy_196",
   "predicate": "史料缺环",
   "value_text": "此次灾异的死亡与受灾范围，方志、奏报与私家记载互有出入，朝廷赈济之实效亦见仁见智，相关数字存在缺口。",
   "time": {
    "era_text": "建安",
    "start": "196-01-01",
    "end": "196-12-31",
    "gregorian_year": 196
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
  "SX008_M61",
  "DONG_HAN_YIG01"
 ],
 "events": [
  {
   "id": "ev_dy_196",
   "subject": "event:dy_196",
   "year": 196,
   "era": "建安元",
   "title": "乱世疫起",
   "kind": "疫灾",
   "text": "中原板荡、民多流亡，疾疫渐兴，医书散佚。",
   "place": "luoyang"
  },
  {
   "id": "ev_dy_217",
   "subject": "event:dy_217",
   "year": 217,
   "era": "建安廿二",
   "title": "建安大疫",
   "kind": "疫灾",
   "text": "瘟疫大作，张仲景宗族二百余口十年间死伤近七成，促其撰方书。",
   "place": "nanyang"
  },
  {
   "id": "ev_dy_book",
   "subject": "event:dy_book",
   "year": 220,
   "era": "建安末",
   "title": "伤寒杂病论成",
   "kind": "医学",
   "text": "张仲景据临床集验成《伤寒杂病论》，开辨证论治之先，后世尊医圣。",
   "place": "nanyang"
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
