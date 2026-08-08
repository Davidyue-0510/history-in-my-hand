/* 小菜狗的文明图景 · 实际控制层（v0.10）
 *
 * 把「谁在什么时候控制哪座城」投影成地图上一块块着色辖区。
 *
 * 设计要点：
 *   - 本文件只做「渲染」，不做「事实」。控制权事实来自 SD.control
 *     （由 data/control_liaodong.json 经 build.py 注入）；辖区几何不存文件，
 *     而是前端按治所最近邻（Voronoi 近似）在合成网格上现算——这样日后要换
 *     CHGIS 等真实边界，只需改 build 注入的 control_seats，前端不动。
 *   - 投影用宿主页面自己的 px/py（战役图是固定投影，县级图是每片自适应投影），
 *     本层只负责把合成网格的角点交给宿主投影，再用 view 变换贴到 canvas 上。
 *   - canvas 置于地形层之上、SVG 之下（z 序：terrain → control → svg），
 *     所以控制色块在地形之上、地名节点之下；canvas 设 pointer-events:none，
 *     绝不拦截地图点击（这是此前修过的交互死区，不能复发）。
 *   - 年份/范围变化才重算离屏 ImageData（rebuild）；纯视图变化只重绘（repaint），
 *     保证拖拽缩放流畅。
 */
(function () {
  'use strict';

  var SD = null, seats = [], seatIdx = {}, grid = null, assign = null,
      off = null, img = null, ready = false;
  var cfg = { cv: null, px: null, py: null, getView: null, getCw: null, getDpr: null };
  var PARTY_ORDER = ['明方', '清方', '朝鲜'];
  var PARTY = {
    '明方': [197, 90, 70],     // 暖红（明）
    '清方': [67, 122, 91],     // 绿（后金/清），与 COL.jin 呼应
    '朝鲜': [70, 120, 170]
  };
  function pIdx(p) { for (var i = 0; i < PARTY_ORDER.length; i++) if (PARTY_ORDER[i] === p) return i; return -1; }
  function pCol(i) { return i >= 0 ? PARTY[PARTY_ORDER[i]] : null; }
  var curYear = null, curScope = null, dirty = true;

  function setup(o) {
    SD = window.SANDBOX_DATA;
    cfg = o || {};
    var cs = (SD && SD.control_seats) || [];
    if (!cs.length || !(SD && SD.control)) { ready = false; return; }
    seats = cs;
    seatIdx = {};
    seats.forEach(function (s, i) { seatIdx[s.place_id] = i; });

    // 合成网格覆盖所有治所（含西部 宁远/锦州 等，超出地形网格 122–126.8°E 范围）
    var lons = seats.map(function (s) { return s.lon; });
    var lats = seats.map(function (s) { return s.lat; });
    var pad = 1.2;
    var lon0 = Math.min.apply(null, lons) - pad;
    var lat0 = Math.min.apply(null, lats) - pad;
    var lon1 = Math.max.apply(null, lons) + pad;
    var lat1 = Math.max.apply(null, lats) + pad;
    var step = 0.05;
    var nx = Math.round((lon1 - lon0) / step) + 1;
    var ny = Math.round((lat1 - lat0) / step) + 1;
    grid = { lon0: lon0, lat0: lat0, step: step, nx: nx, ny: ny, lon1: lon1, lat1: lat1 };

    // 最近治所分配（Voronoi 近似）：每格归离它最近的治所
    assign = new Int16Array(nx * ny);
    for (var iy = 0; iy < ny; iy++) {
      var lat = lat0 + iy * step;
      for (var ix = 0; ix < nx; ix++) {
        var lon = lon0 + ix * step;
        var best = -1, bd = 1e18;
        for (var k = 0; k < seats.length; k++) {
          var dl = lon - seats[k].lon, da = lat - seats[k].lat;
          var d = dl * dl + da * da;
          if (d < bd) { bd = d; best = k; }
        }
        assign[iy * nx + ix] = best;
      }
    }
    off = document.createElement('canvas');
    off.width = nx; off.height = ny;
    img = off.getContext('2d').createImageData(nx, ny);
    ready = true; dirty = true;
  }

  function controllerAt(seatId, year) {
    var c = (SD && SD.control) || [];
    for (var i = 0; i < c.length; i++) {
      var s = c[i];
      if (s.place_id !== seatId) continue;
      var st = s.start, en = (s.end == null ? 1e9 : s.end);
      if (year >= st && year <= en) return s.party;
    }
    return null;
  }

  function partyColor(p) { var c = PARTY[p]; return c ? c : null; }

  // 全国（nation）范围：把同党派的县合成一个「国家板块」——只画
  // 不同党派之间的外缘边界，省略同党派内部的县界，视觉上就「合并」成块。
  // 县级（county）范围：每个县都画边界（含合成网格的外框），呈现县与县的拼图。
  function rebuild() {
    var nx = grid.nx, ny = grid.ny, data = img.data;
    // 1) 每格的党派索引（-1 = 该年无人控制）
    var pg = new Int8Array(nx * ny);
    for (var iy = 0; iy < ny; iy++) {
      for (var ix = 0; ix < nx; ix++) {
        var idx = iy * nx + ix, si = assign[idx];
        pg[idx] = pIdx(controllerAt(seats[si].place_id, curYear));
      }
    }
    // 2) 上色 + 边界
    var nation = (curScope === 'nation');
    for (iy = 0; iy < ny; iy++) {
      for (ix = 0; ix < nx; ix++) {
        idx = iy * nx + ix; var o = idx * 4; var pi = pg[idx];
        var boundary = false, external = false;
        if (ix + 1 < nx) { var r = pg[idx + 1]; if (r !== pi) { boundary = true; if (r >= 0 && pi >= 0) external = true; } }
        if (!boundary && iy + 1 < ny) { var d = pg[idx + nx]; if (d !== pi) { boundary = true; if (d >= 0 && pi >= 0) external = true; } }
        if (!nation && (ix === 0 || iy === 0 || ix === nx - 1 || iy === ny - 1)) boundary = true; // 县级外框
        if (boundary) {
          // 全国范围下，同党派内部县界不画（合并成块）；只保留跨党派外缘
          if (nation && !external) { /* 落到下面按填充处理 */ }
          else {
            var a = nation ? 205 : 160;
            data[o] = 74; data[o + 1] = 64; data[o + 2] = 54; data[o + 3] = a;
            continue;
          }
        }
        var col = pCol(pi);
        if (col) {
          data[o] = col[0]; data[o + 1] = col[1]; data[o + 2] = col[2]; data[o + 3] = nation ? 125 : 115;
        } else {
          data[o + 3] = 0;
        }
      }
    }
    off.getContext('2d').putImageData(img, 0, 0);
  }

  // 某年各国控制县数（用于「国家」范围图例的全国统计）
  function tally(year) {
    var t = {};
    seats.forEach(function (s) {
      var p = controllerAt(s.place_id, year);
      if (p) t[p] = (t[p] || 0) + 1;
    });
    return t;
  }

  function repaint() {
    if (!ready || !cfg.cv) return;
    if (dirty) { rebuild(); dirty = false; }
    var ctx = cfg.cv.getContext('2d');
    var dpr = cfg.getDpr ? cfg.getDpr() : 1;
    var cw = cfg.getCw ? cfg.getCw() : 1;
    var v = cfg.getView ? cfg.getView() : { x: 0, y: 0, w: 1000, h: 918 };
    var gx = cfg.px(grid.lon0), gy = cfg.py(grid.lat1);
    var gw = cfg.px(grid.lon1) - cfg.px(grid.lon0);
    var gh = cfg.py(grid.lat0) - cfg.py(grid.lat1);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cfg.cv.width, cfg.cv.height);
    var s = (cw / v.w) * dpr;
    ctx.setTransform(s, 0, 0, s, -v.x * s, -v.y * s);
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(off, gx, gy, gw, gh);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  function clear() {
    if (!cfg.cv) return;
    var ctx = cfg.cv.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cfg.cv.width, cfg.cv.height);
  }

  function draw(year, scope) {
    if (!ready) return;
    if (year !== curYear || scope !== curScope) { curYear = year; curScope = scope; dirty = true; }
    repaint();
  }

  function isReady() { return ready; }
  function years() { return (SD && SD.control_years) || [1616, 1644]; }

  window.ControlLayer = {
    setup: setup, draw: draw, repaint: repaint, clear: clear,
    partyColor: partyColor, controllerAt: controllerAt, tally: tally,
    isReady: isReady, years: years, seats: function () { return seats; }
  };
})();
