/* 小菜狗的文明图景 · 模拟态势层 SimLayer（v0.63）
 *
 * 职责：把「确定性演化引擎（SIM_CORE）的推演结果」翻译成沙盘地图上的态势色块，
 *       让反事实推演与史实控制区共用同一张地图、同一套边界。
 *
 * 设计铁律 —— 不再造地图内核（复制债教训）：
 *   本层**不**自己做 Voronoi / 海岸线栅格化 / 投影绘制，而是把推演出的逐年状态
 *   编译成 ControlLayer 认识的 `control` 区间数组（{place_id, party, start, end}），
 *   然后交给 ControlLayer 渲染。ControlLayer 已经拥有：
 *     治所 Voronoi 划分 + CHGIS 1820 真实政区掩膜裁剪 + 等比 viewBox 重绘 + 差异虚线。
 *   于是「史实态势」和「反事实态势」天然像素级同构，可直接叠差异。
 *
 * 三种模式：
 *   real —— 史实（由 SIM_DATA.startControl + transitions 推出的真实控制轨迹）
 *   sim  —— 反事实（当前分支 + 当前参数下引擎推演出的控制轨迹）
 *   diff —— 反事实实色 + 史实虚线（复用 ControlLayer.drawDiff）
 *
 * 确定性：推演全程走 SIM_CORE（FNV-1a 哈希，无 Math.random），同参同分支必得同图。
 */
(function () {
  'use strict';

  var core = null, CL = null;
  var clCfg = null;                 // 传给 ControlLayer 的宿主配置（cv/px/py/getView/...）
  var seatsCL = [];                 // ControlLayer 口味的 seats（place_id 而非 id）
  var yearRange = [0, 0];
  var mode = 'real';
  var curYear = null, curScope = 'region';
  var appliedKey = null;            // 已装载进 ControlLayer 的数据集标识，避免重复 setup
  var realCache = null;             // 史实区间（只算一次）
  var simCache = {};                // 分支+参数指纹 → 推演区间
  var coastFeatures = null;         // 缓存海岸线要素，setup 后需要重新喂给 ControlLayer
  var ready = false;

  // ── 小工具 ──────────────────────────────────────────────
  function rgb2hex(a) {
    if (!a) return null;
    if (typeof a === 'string') return a;
    function h(n) { n = Math.max(0, Math.min(255, n | 0)).toString(16); return n.length < 2 ? '0' + n : n; }
    return '#' + h(a[0]) + h(a[1]) + h(a[2]);
  }
  function partyColorsHex() {
    var out = {}, pc = core.D.partyColors || {};
    Object.keys(pc).forEach(function (k) { out[k] = rgb2hex(pc[k]); });
    return out;
  }
  // 参数指纹：参数一改，缓存必须失效（否则地图停留在旧推演上——静默错图最难查）
  function paramFingerprint() {
    var p = core.params, ks = Object.keys(p).sort(), s = [];
    for (var i = 0; i < ks.length; i++) s.push(ks[i] + '=' + p[ks[i]]);
    return s.join(',');
  }

  // ── 逐年快照 → 区间 ────────────────────────────────────
  function snapsToIntervals(snaps) {
    var y0 = yearRange[0], y1 = yearRange[1], out = [];
    core.SEATS.forEach(function (s) {
      var cur = null, start = null;
      for (var y = y0; y <= y1; y++) {
        var p = (snaps[y] && snaps[y][s.id]) || null;
        if (p !== cur) {
          if (cur) out.push({ place_id: s.id, party: cur, start: start, end: y - 1 });
          cur = p; start = y;
        }
      }
      if (cur) out.push({ place_id: s.id, party: cur, start: start, end: y1 });
    });
    return out;
  }

  // 史实轨迹：起始快照 + 史载转移逐年施加（不经引擎裁决，就是史实本身）
  function realSnapshots() {
    var D = core.D;
    // 起始快照来源兼容：场景 SIM_DATA.startControl 优先，否则回退到 SIM_IC.control（萨尔浒等无专属史实切片时的诚实降级）
    var baseCtrl = D.startControl || (core.IC && core.IC.control) || {};
    var trans = D.transitions || [];
    var st = Object.assign({}, baseCtrl), snaps = {};
    snaps[yearRange[0]] = Object.assign({}, st);
    for (var y = yearRange[0] + 1; y <= yearRange[1]; y++) {
      trans.forEach(function (t) { if (t.year === y) st[t.place_id] = t.to; });
      snaps[y] = Object.assign({}, st);
    }
    return snaps;
  }

  // 反事实轨迹：走引擎 applyYear 逐年推演（与 runTo 同一裁决路径，含分支 override / block）
  function simSnapshots(branchId) {
    var D = core.D;
    var br = branchId ? core.getBranch(branchId) : null;
    var p = Object.assign({}, core.params);
    if (br && br.override) Object.keys(br.override).forEach(function (k) { p[k] = br.override[k]; });
    core.currentBranch = branchId || '';
    core.resetSim(branchId || '');
    var snaps = {};
    snaps[yearRange[0]] = Object.assign({}, core.state);
    for (var y = yearRange[0] + 1; y <= yearRange[1]; y++) {
      core.applyYear(y, p, br);
      snaps[y] = Object.assign({}, core.state);
    }
    core.year = yearRange[1];
    return snaps;
  }

  function realIntervals() {
    if (!realCache) realCache = snapsToIntervals(realSnapshots());
    return realCache;
  }
  function simIntervals(branchId) {
    var key = (branchId || '__default') + '|' + paramFingerprint();
    if (!simCache[key]) simCache[key] = snapsToIntervals(simSnapshots(branchId));
    return simCache[key];
  }
  function invalidate() { simCache = {}; appliedKey = null; }

  // ── 装载数据集进 ControlLayer ──────────────────────────
  function load(intervals) {
    CL.setup(Object.assign({}, clCfg, {
      partyColors: partyColorsHex(),
      sceneData: { control: intervals, control_seats: seatsCL, control_years: yearRange.slice() }
    }));
    // ControlLayer.setup → initGrid 会重建离屏画布；掩膜需要重新喂一次才不丢裁剪
    if (coastFeatures && coastFeatures.length) CL.setCoast(coastFeatures);
  }

  function ensureLoaded(branchId) {
    var key = mode + '|' + (branchId || '__default') + '|' + paramFingerprint();
    if (key === appliedKey) return;
    // diff 模式主图=史实（虚线），分支实色由 drawDiff 叠加
    load(mode === 'sim' ? simIntervals(branchId) : realIntervals());
    appliedKey = key;
  }

  // ── 对外 API ───────────────────────────────────────────
  function setup(o) {
    o = o || {};
    core = o.core || null;
    CL = o.controlLayer || window.ControlLayer || null;
    if (!core || !CL) { ready = false; return false; }
    clCfg = {
      cv: o.cv, px: o.px, py: o.py,
      getView: o.getView, getCw: o.getCw, getDpr: o.getDpr
    };
    seatsCL = core.SEATS.map(function (s) {
      return { place_id: s.id, name: s.name, lon: s.lon, lat: s.lat };
    });
    yearRange = [core.D.meta.startYear, core.D.meta.endYear];
    realCache = null; simCache = {}; appliedKey = null;
    curYear = yearRange[0];
    ready = true;
    return true;
  }

  function setCoast(features) {
    coastFeatures = features || null;
    if (ready && coastFeatures) CL.setCoast(coastFeatures);
  }
  function loadCoast(url) {
    if (typeof fetch !== 'function') return;
    fetch(url).then(function (r) { return r.json(); }).then(function (gj) {
      setCoast(gj.features || []);
    }).catch(function (e) {
      console.warn('[SimLayer] 海岸线掩膜加载失败（退化为无裁剪 Voronoi）：', e && e.message ? e.message : e);
    });
  }

  function setMode(m) {
    if (['real', 'sim', 'diff'].indexOf(m) < 0) return mode;
    if (m !== mode) { mode = m; appliedKey = null; }
    return mode;
  }
  function getMode() { return mode; }

  function draw(year, scope, branchId) {
    if (!ready) return;
    curYear = year; curScope = scope || curScope;
    ensureLoaded(branchId);
    if (mode === 'diff') CL.drawDiff(year, curScope, simIntervals(branchId));
    else CL.draw(year, curScope);
  }
  function repaint() { if (ready) CL.repaint(); }
  function clear() { if (CL) CL.clear(); }

  // 某年史实 vs 反事实的逐点差异（供侧栏「本年偏离」列表 / 地图打标）
  function divergenceAt(year, branchId) {
    if (!ready) return [];
    var R = realIntervals(), S = simIntervals(branchId);
    function at(arr, id) {
      for (var i = 0; i < arr.length; i++) {
        var c = arr[i];
        if (c.place_id === id && year >= c.start && year <= (c.end == null ? 1e9 : c.end)) return c.party;
      }
      return null;
    }
    var out = [];
    core.SEATS.forEach(function (s) {
      var a = at(R, s.id), b = at(S, s.id);
      if (a !== b) out.push({ place_id: s.id, name: s.name, lon: s.lon, lat: s.lat, real: a, sim: b });
    });
    return out;
  }

  // 某年各方治所数（史实/反事实各一份，供态势条）
  function tally(year, branchId) {
    if (!ready) return { real: {}, sim: {} };
    function count(arr) {
      var t = {};
      core.SEATS.forEach(function (s) {
        for (var i = 0; i < arr.length; i++) {
          var c = arr[i];
          if (c.place_id === s.id && year >= c.start && year <= (c.end == null ? 1e9 : c.end)) {
            t[c.party] = (t[c.party] || 0) + 1; break;
          }
        }
      });
      return t;
    }
    return { real: count(realIntervals()), sim: count(simIntervals(branchId)) };
  }

  function parties() {
    var seen = [], map = {};
    realIntervals().concat(simIntervals(core.currentBranch)).forEach(function (c) {
      if (c.party && !map[c.party]) { map[c.party] = 1; seen.push(c.party); }
    });
    return seen;
  }

  window.SimLayer = {
    version: 'v0.63',
    setup: setup, setCoast: setCoast, loadCoast: loadCoast,
    setMode: setMode, mode: getMode,
    draw: draw, repaint: repaint, clear: clear,
    realIntervals: realIntervals, simIntervals: simIntervals, invalidate: invalidate,
    divergenceAt: divergenceAt, tally: tally, parties: parties,
    isReady: function () { return ready; },
    years: function () { return yearRange.slice(); },
    seats: function () { return seatsCL; }
  };
})();
