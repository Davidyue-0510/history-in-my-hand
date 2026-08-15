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
   "influence": 0
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
  }
 ],
 "conflicts": [],
 "gaps": [],
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
