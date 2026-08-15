// 本文件由 tools/build.py 自动生成（切片 dingwu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["dingwu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["dingwu"] = {
 "meta": {
  "kind": "disaster",
  "region": "ecology",
  "title": "丁戊奇荒",
  "dossier_label": "丁戊奇荒",
  "subtitle": "1877—1878 · 晚清华北大旱",
  "primary_place": "taiyuan",
  "dossier_event": "event:dw_1876",
  "terrain_grid": "china_coarse",
  "lead": "光绪初年华北连年亢旱，晋豫陕冀赤地千里、继以蝗蝻，人相食。朝廷赈济与民间义赈并举，仍死者甚众，为晚清最惨重灾荒之一。",
  "parties_note": "灾情以《清代灾荒史》与方志奏报综合，死亡数字各家估计差异大（千万级），此处取学界折中。",
  "subject_names": {
   "person:zengguofan2": "曾国藩",
   "person:lihongzhang2": "李鸿章"
  },
  "page": "county.html?scene=dingwu",
  "key": "dingwu",
  "scene_id": "dingwu",
  "vocab_pack": "inline:dingwu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "丁戊奇荒·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "灾情以《清代灾荒史》与方志奏报综合，死亡数字各家估计差异大（千万级），此处取学界折中。"
  }
 ],
 "places": [
  {
   "id": "taiyuan",
   "name": "太原",
   "lon": 112.55,
   "lat": 37.87,
   "note": "丁戊奇荒重灾区",
   "elev": 807
  },
  {
   "id": "kaofeng",
   "name": "开封",
   "lon": 114.3,
   "lat": 34.79,
   "note": "北宋汴京",
   "elev": 76
  },
  {
   "id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "元大都/明京师",
   "elev": 44
  }
 ],
 "persons": [
  {
   "id": "zengguofan2",
   "name": "曾国藩",
   "side": "清重臣",
   "influence": 0
  },
  {
   "id": "lihongzhang2",
   "name": "李鸿章",
   "side": "清重臣",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_dw_1876",
   "subject": "event:dw_1876",
   "predicate": "事件",
   "value_text": "华北持续少雨，禾稼歉收，灾象初显。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1876,
    "end": 1876,
    "era_text": "光绪二"
   },
   "place": "taiyuan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_dw_1877",
   "subject": "event:dw_1877",
   "predicate": "事件",
   "value_text": "旱情达顶点，晋豫「人食草根、继则人相食」，流民载道。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1877,
    "end": 1877,
    "era_text": "光绪三·丁丑"
   },
   "place": "taiyuan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_dw_relief",
   "subject": "event:dw_relief",
   "predicate": "事件",
   "value_text": "拨帑截漕、办赈恤，江南义赈赴晋，灾势渐缓。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1878,
    "end": 1878,
    "era_text": "光绪四"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_dw_1876",
   "subject": "event:dw_1876",
   "year": 1876,
   "era": "光绪二",
   "title": "北旱初起",
   "kind": "旱灾",
   "text": "华北持续少雨，禾稼歉收，灾象初显。",
   "place": "taiyuan"
  },
  {
   "id": "ev_dw_1877",
   "subject": "event:dw_1877",
   "year": 1877,
   "era": "光绪三·丁丑",
   "title": "丁戊大旱",
   "kind": "旱灾",
   "text": "旱情达顶点，晋豫「人食草根、继则人相食」，流民载道。",
   "place": "taiyuan"
  },
  {
   "id": "ev_dw_relief",
   "subject": "event:dw_relief",
   "year": 1878,
   "era": "光绪四",
   "title": "朝廷赈济",
   "kind": "赈济",
   "text": "拨帑截漕、办赈恤，江南义赈赴晋，灾势渐缓。",
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
