// 本文件由 tools/build.py 自动生成（切片 keju），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["keju"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["keju"] = {
 "meta": {
  "kind": "thought",
  "region": "thought",
  "title": "科举制",
  "dossier_label": "科举制",
  "subtitle": "605—1905 · 选官制度",
  "primary_place": "luoyang_k",
  "dossier_event": "event:kj_605",
  "terrain_grid": "china_coarse",
  "lead": "隋炀帝始置进士科，以试取士代九品中正之阀阅；唐增明经进士、宋行殿试糊名，明清八股；1905 年清廷废科举，兴学堂。",
  "parties_note": "科举沿革据《隋书》《新唐书·选举志》与近代研究综合。",
  "subject_names": {
   "person:yangdi_k": "隋炀帝",
   "person:wuzetian": "武周皇帝"
  },
  "page": "county.html?scene=keju",
  "key": "keju",
  "scene_id": "keju",
  "vocab_pack": "inline:keju"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "科举制·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "科举沿革据《隋书》《新唐书·选举志》与近代研究综合。"
  }
 ],
 "places": [
  {
   "id": "luoyang_k",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "隋东都，进士科所起",
   "elev": 171
  },
  {
   "id": "changan_k",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "唐贡院所在",
   "elev": 391
  }
 ],
 "persons": [
  {
   "id": "yangdi_k",
   "name": "隋炀帝",
   "side": "隋",
   "influence": 0
  },
  {
   "id": "wuzetian",
   "name": "武周皇帝",
   "side": "唐",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_kj_605",
   "subject": "event:kj_605",
   "predicate": "事件",
   "value_text": "炀帝置进士科，试策取士，科举之制肇端，打破门第垄断。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 605,
    "end": 605,
    "era_text": "隋大业元年"
   },
   "place": "luoyang_k",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_kj_tang",
   "subject": "event:kj_tang",
   "predicate": "事件",
   "value_text": "武周行殿试、制科，唐明经进士并重，科举成入仕正途。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 690,
    "end": 690,
    "era_text": "武周—唐"
   },
   "place": "changan_k",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_kj_1905",
   "subject": "event:kj_1905",
   "predicate": "事件",
   "value_text": "清廷下诏废科举、兴学堂，推行千三百年的选官制终结。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1905,
    "end": 1905,
    "era_text": "清光绪三十一年"
   },
   "place": "luoyang_k",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_kj_605",
   "subject": "event:kj_605",
   "year": 605,
   "era": "隋大业元年",
   "title": "始设进士科",
   "kind": "制度",
   "text": "炀帝置进士科，试策取士，科举之制肇端，打破门第垄断。",
   "place": "luoyang_k"
  },
  {
   "id": "ev_kj_tang",
   "subject": "event:kj_tang",
   "year": 690,
   "era": "武周—唐",
   "title": "殿试·科目增",
   "kind": "制度",
   "text": "武周行殿试、制科，唐明经进士并重，科举成入仕正途。",
   "place": "changan_k"
  },
  {
   "id": "ev_kj_1905",
   "subject": "event:kj_1905",
   "year": 1905,
   "era": "清光绪三十一年",
   "title": "废科举",
   "kind": "结局",
   "text": "清廷下诏废科举、兴学堂，推行千三百年的选官制终结。",
   "place": "luoyang_k"
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
