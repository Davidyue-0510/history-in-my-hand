// 本文件由 tools/build.py 自动生成（切片 song_he_jue），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["song_he_jue"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["song_he_jue"] = {
 "meta": {
  "kind": "disaster",
  "region": "ecology",
  "title": "北宋滑州河决",
  "dossier_label": "北宋滑州河决",
  "subtitle": "1019 · 天禧三年河患",
  "primary_place": "huaxian_s",
  "dossier_event": "event:hj_1019",
  "terrain_grid": "china_coarse",
  "lead": "天禧三年（1019）黄河大决滑州，泛澶、濮、郓、齐诸州，坏庐舍、溺人畜无算。宋廷发兵夫数万塞之，未几复决，治河之费与害渐成北宋痼疾。",
  "parties_note": "河决与堵口据《宋史·河渠志》综合，劳费数字为后世考订折中。",
  "subject_names": {
   "person:jianglin": "贾昌朝"
  },
  "page": "county.html?scene=song_he_jue",
  "key": "song_he_jue",
  "scene_id": "song_he_jue",
  "vocab_pack": "inline:song_he_jue"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "北宋滑州河决·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "河决与堵口据《宋史·河渠志》综合，劳费数字为后世考订折中。"
  }
 ],
 "places": [
  {
   "id": "huaxian_s",
   "name": "滑县",
   "lon": 114.52,
   "lat": 35.57,
   "note": "北宋黄河滑州决口",
   "elev": 53
  },
  {
   "id": "puyang",
   "name": "澶州",
   "lon": 115.03,
   "lat": 35.7,
   "note": "澶渊之盟，今河南濮阳",
   "elev": 52
  },
  {
   "id": "kaofeng",
   "name": "开封",
   "lon": 114.3,
   "lat": 34.79,
   "note": "北宋汴京",
   "elev": 76
  }
 ],
 "persons": [
  {
   "id": "jianglin",
   "name": "贾昌朝",
   "side": "宋臣",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_hj_1019",
   "subject": "event:hj_1019",
   "predicate": "事件",
   "value_text": "黄河决滑州天台埽，泛溢诸州，坏田庐、溺人畜。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1019,
    "end": 1019,
    "era_text": "天禧三"
   },
   "place": "huaxian_s",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hj_dukou",
   "subject": "event:hj_dukou",
   "predicate": "事件",
   "value_text": "调兵夫数万筑堤堵口，耗粟帛巨万。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1019,
    "end": 1019,
    "era_text": "同年"
   },
   "place": "puyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hj_late",
   "subject": "event:hj_late",
   "predicate": "事件",
   "value_text": "澶州、横陇相继决，北流之患自此难弭。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1034,
    "end": 1034,
    "era_text": "景祐元"
   },
   "place": "puyang",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_hj_1019",
   "subject": "event:hj_1019",
   "year": 1019,
   "era": "天禧三",
   "title": "滑州大决",
   "kind": "河决",
   "text": "黄河决滑州天台埽，泛溢诸州，坏田庐、溺人畜。",
   "place": "huaxian_s"
  },
  {
   "id": "ev_hj_dukou",
   "subject": "event:hj_dukou",
   "year": 1019,
   "era": "同年",
   "title": "发夫塞河",
   "kind": "堵口",
   "text": "调兵夫数万筑堤堵口，耗粟帛巨万。",
   "place": "puyang"
  },
  {
   "id": "ev_hj_late",
   "subject": "event:hj_late",
   "year": 1034,
   "era": "景祐元",
   "title": "河患踵至",
   "kind": "河决",
   "text": "澶州、横陇相继决，北流之患自此难弭。",
   "place": "puyang"
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
