// 本文件由 tools/build.py 自动生成（切片 qing_han），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["qing_han"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["qing_han"] = {
 "meta": {
  "kind": "fusion",
  "region": "fusion",
  "title": "清满汉融合",
  "dossier_label": "清满汉融合",
  "subtitle": "1644 起 · 清",
  "primary_place": "beijing",
  "dossier_event": "event:qh_1644",
  "terrain_grid": "china_coarse",
  "lead": "清入关后，以八旗制度统驭、行科举取汉士、修《明史》以承正统，又令剃发易服、禁满汉通婚而后渐弛。三百年间满汉在语言、礼俗、仕途上交渗，终成「中华」一体。",
  "parties_note": "融合过程据《清史稿》与近代研究综合，强制与涵化并行。",
  "subject_names": {
   "person:shunzhi": "顺治帝",
   "person:kangxi2": "康熙帝"
  },
  "page": "county.html?scene=qing_han",
  "key": "qing_han",
  "scene_id": "qing_han",
  "vocab_pack": "inline:qing_han"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "清满汉融合·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "融合过程据《清史稿》与近代研究综合，强制与涵化并行。"
  }
 ],
 "places": [
  {
   "id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "元大都/明京师",
   "elev": 44
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
   "id": "shunzhi",
   "name": "顺治帝",
   "side": "清",
   "influence": 0
  },
  {
   "id": "kangxi2",
   "name": "康熙帝",
   "side": "清",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_qh_1644",
   "subject": "event:qh_1644",
   "predicate": "事件",
   "value_text": "清军入关、迁都北京，行科举、抚汉士以稳统治。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1644,
    "end": 1644,
    "era_text": "顺治元"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_qh_1645",
   "subject": "event:qh_1645",
   "predicate": "事件",
   "value_text": "下令剃发易服，「留头不留发」，激化满汉张力。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1645,
    "end": 1645,
    "era_text": "顺治二"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_qh_late",
   "subject": "event:qh_late",
   "predicate": "事件",
   "value_text": "满汉通婚禁渐弛、儒典同尊，文化交渗成势。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1720,
    "end": 1720,
    "era_text": "康熙末"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M35",
   "subject": "event:qh_1644",
   "predicate": "爆发",
   "value_text": "清军入关，定鼎北京",
   "time": {
    "era_text": "顺治元年",
    "start": "1644-01-01",
    "end": "1644-12-31",
    "gregorian_year": 1644
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "顺治元年清军入关，定鼎北京",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M36",
   "subject": "event:qh_1645",
   "predicate": "颁布",
   "value_text": "颁剃发令",
   "time": {
    "era_text": "顺治二年",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "顺治二年颁剃发令",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M34",
   "subject": "event:qh_1645",
   "predicate": "抗清",
   "value_text": "江左抗清",
   "time": {
    "era_text": "顺治二年",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "江左抗清",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "江左具体地点未在place白名单，暂用changan代指，待消歧",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M36",
   "subject": "event:qh_1645",
   "predicate": "冲突",
   "value_text": "满汉冲突剧烈",
   "time": {
    "era_text": "顺治二年",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "",
   "source": "synthesis",
   "quote": "满汉冲突剧烈",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "地点未指明，留空",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M34",
   "subject": "event:qh_late",
   "predicate": "推行",
   "value_text": "满汉一体",
   "time": {
    "era_text": "康熙年间",
    "start": "1662-01-01",
    "end": "1662-12-31",
    "gregorian_year": 1662
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "康熙年间渐行满汉一体",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M33",
   "subject": "event:qh_late",
   "predicate": "用人",
   "value_text": "儒臣并用",
   "time": {
    "era_text": "康熙年间",
    "start": "1662-01-01",
    "end": "1662-12-31",
    "gregorian_year": 1662
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "儒臣并用",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M31",
   "subject": "event:qh_1644",
   "predicate": "定鼎",
   "value_text": "定鼎北京",
   "time": {
    "era_text": "顺治元年",
    "start": "1644-01-01",
    "end": "1644-12-31",
    "gregorian_year": 1644
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "定鼎北京",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M32",
   "subject": "event:qh_1645",
   "predicate": "抗清",
   "value_text": "江左抗清",
   "time": {
    "era_text": "顺治二年",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "江左抗清",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "province",
   "note": "推断江左为抗清主要区域，具体地点待考",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M30",
   "subject": "event:qh_late",
   "predicate": "融合",
   "value_text": "满汉一体",
   "time": {
    "era_text": "康熙年间",
    "start": "1662-01-01",
    "end": "1662-12-31",
    "gregorian_year": 1662
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "渐行满汉一体",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "推断为政策导向，非完全实现",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M27",
   "subject": "event:qh_1644",
   "predicate": "入关",
   "value_text": "清军入关",
   "time": {
    "era_text": "顺治元年",
    "start": "1644-01-01",
    "end": "1644-12-31",
    "gregorian_year": 1644
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "清军入关",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX011_M17",
   "subject": "event:qh_1645",
   "predicate": "冲突",
   "value_text": "满汉冲突剧烈",
   "time": {
    "era_text": "顺治二年",
    "start": "1645-01-01",
    "end": "1645-12-31",
    "gregorian_year": 1645
   },
   "place": "",
   "source": "synthesis",
   "quote": "满汉冲突剧烈",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "推断冲突为剃发令引发，原文未明说",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX012_M12",
   "subject": "event:qh_late",
   "predicate": "用人",
   "value_text": "儒臣并用",
   "time": {
    "era_text": "康熙年间",
    "start": "1662-01-01",
    "end": "1662-12-31",
    "gregorian_year": 1662
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "儒臣并用",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "推断为满汉一体政策的具体体现",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "QING_HANG01",
   "subject": "event:qh_1645",
   "predicate": "史料缺环",
   "value_text": "此次民族融合的动因、过程与人口规模，各族纪述不一，相关叙述存在缺口。",
   "time": {
    "era_text": "顺治",
    "start": "1644-01-01",
    "end": "1644-12-31",
    "gregorian_year": 1644
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "fusion",
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
  "QING_HANG01"
 ],
 "events": [
  {
   "id": "ev_qh_1644",
   "subject": "event:qh_1644",
   "year": 1644,
   "era": "顺治元",
   "title": "清入关·定鼎",
   "kind": "融合",
   "text": "清军入关、迁都北京，行科举、抚汉士以稳统治。",
   "place": "beijing"
  },
  {
   "id": "ev_qh_1645",
   "subject": "event:qh_1645",
   "year": 1645,
   "era": "顺治二",
   "title": "剃发易服令",
   "kind": "强制",
   "text": "下令剃发易服，「留头不留发」，激化满汉张力。",
   "place": "beijing"
  },
  {
   "id": "ev_qh_late",
   "subject": "event:qh_late",
   "year": 1720,
   "era": "康熙末",
   "title": "渐融一体",
   "kind": "融合",
   "text": "满汉通婚禁渐弛、儒典同尊，文化交渗成势。",
   "place": "beijing"
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
