/* 小菜狗的文明图景 · 实际控制层（v0.47 重写 · 真实边界）
 *
 * 把「谁在什么时候控制哪片地」投影成地图上按年份变色的辖区。
 *
 * v0.47 重写要点（修复「边界是单纯直线太假」）：
 *   - 不再用整屏合成网格 + 最近治所 Voronoi 直接上色（那是方块状假边界）。
 *   - 改为：以场景真实历史治所（seats，含真实经纬度）为种子做 Voronoi 划分，
 *     再用 CHGIS 1820 真实政区多边形（coastFeatures）栅格化成「陆地掩膜」，
 *     把控制色**裁剪到真实海岸线以内**——外缘 = 真实海岸/国界，内部分界仍由
 *     治所归属决定（直界近似，诚实标注）。这样既有真实外形，又能随每场战役变色。
 *   - 控制事实来自场景级 control 数据（data/<scene>/control.json，经 build 注入
 *     D.control / D.control_seats / D.control_years）；辽东等无自带数据则 fallback
 *     到全局 data/control_liaodong.json（剧场级）。
 *   - 与 BorderLayer 分工不变：BorderLayer=政区几何（线），本层=控制权语义（色）。
 *   - canvas 置于地形层之上、SVG 之下，pointer-events:none，绝不拦截地图点击。
 *   - 年份/范围变化才 rebuild（含掩膜裁剪），纯视图变化只 repaint。
 */
(function () {
  'use strict';

  var SD = null, seats = [], seatIdx = {}, grid = null, assign = null,
      mask = null, off = null, img = null, ready = false, coastReady = false;
  var cfg = { cv: null, px: null, py: null, getView: null, getCw: null, getDpr: null };
  var ctrlData = [], curYears = [1616, 1644];

  // 政权配色（v0.24c 单一真值：优先宿主注入的语境包 party_colors hex）。
  var PARTY_DEFAULT = {
    '明方': [197, 90, 70],
    '清方': [67, 122, 91],
    '朝鲜': [70, 120, 170],
    '日本方': [150, 90, 160],
    'contested': [128, 122, 112]   // 无稳定控制方（争议/缓冲）
  };
  var PALETTE = [
    [197, 90, 70], [67, 122, 91], [70, 120, 170], [150, 90, 160],
    [180, 125, 60], [90, 140, 140], [140, 110, 90], [120, 130, 190],
    [200, 140, 160], [110, 150, 90]
  ];
  var partyList = [], partyIdxMap = {};
  function hashStr(s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return h;
  }
  function hexRgb(h) {
    h = String(h || '').replace('#', '');
    if (h.length !== 6) return null;
    var n = parseInt(h, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function resetParties() { partyList = []; partyIdxMap = {}; }
  function pIdx(p) {
    if (!(p in partyIdxMap)) { partyIdxMap[p] = partyList.length; partyList.push(p); }
    return partyIdxMap[p];
  }
  function pCol(i) { return partyColor(partyList[i]); }
  function partyColor(p) {
    if (!p) return null;
    var hex = cfg.partyColors && cfg.partyColors[p];
    if (hex) { var c = hexRgb(hex); if (c) return c; }
    return PARTY_DEFAULT[p] || PALETTE[hashStr(p) % PALETTE.length];
  }

  var curYear = null, curScope = null, dirty = true;

  function setup(o) {
    SD = window.SANDBOX_DATA;
    cfg = o || {};
    resetParties();
    var D = cfg.sceneData || null;
    var hasScene = !!(D && Array.isArray(D.control) && D.control.length);
    ctrlData = hasScene ? D.control : ((SD && SD.control) || []);
    var cs = hasScene ? (D.control_seats || []) : ((SD && SD.control_seats) || []);
    curYears = (hasScene && D.control_years) ? D.control_years
             : ((SD && SD.control_years) || [1616, 1644]);
    if (!cs.length || !ctrlData.length) { ready = false; return; }
    initGrid(cs);
    ready = true; dirty = true;
  }

  // 直接用场景提供的 seats（已含真实经纬度），不再遍历所有 county 切片
  function initGrid(cs) {
    seats = cs;
    seatIdx = {};
    seats.forEach(function (s, i) { seatIdx[s.place_id] = i; });
    var lons = seats.map(function (s) { return s.lon; });
    var lats = seats.map(function (s) { return s.lat; });
    var pad = 1.2;
    var lon0 = Math.min.apply(null, lons) - pad;
    var lat0 = Math.min.apply(null, lats) - pad;
    var lon1 = Math.max.apply(null, lons) + pad;
    var lat1 = Math.max.apply(null, lats) + pad;
    var step = 0.04;
    var nx = Math.round((lon1 - lon0) / step) + 1;
    var ny = Math.round((lat1 - lat0) / step) + 1;
    grid = { lon0: lon0, lat0: lat0, step: step, nx: nx, ny: ny, lon1: lon1, lat1: lat1 };
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
  }

  // CHGIS 真实政区多边形 → 陆地掩膜（1=陆地）。用 canvas 栅格化，投影到网格像素。
  function setCoast(features) {
    if (!grid || !features || !features.length) return;
    var nx = grid.nx, ny = grid.ny, lon0 = grid.lon0, lat1 = grid.lat1, step = grid.step;
    var cv = document.createElement('canvas'); cv.width = nx; cv.height = ny;
    var ctx = cv.getContext('2d');
    ctx.fillStyle = '#fff';
    features.forEach(function (f) {
      var g = f.geom; if (!g) return;
      var rings = (g.type === 'Polygon') ? g.coordinates
                : (g.type === 'MultiPolygon') ? [].concat.apply([], g.coordinates)
                : null;
      if (!rings) return;
      rings.forEach(function (ring) {
        ctx.beginPath();
        for (var i = 0; i < ring.length; i++) {
          var gx = (ring[i][0] - lon0) / step;
          var gy = (lat1 - ring[i][1]) / step;
          if (i === 0) ctx.moveTo(gx, gy); else ctx.lineTo(gx, gy);
        }
        ctx.closePath();
      });
    });
    ctx.fill('evenodd');
    var d = ctx.getImageData(0, 0, nx, ny).data;
    mask = new Uint8Array(nx * ny);
    for (var i = 0; i < mask.length; i++) mask[i] = d[i * 4 + 3] > 10 ? 1 : 0;
    coastReady = true;
    if (ready) { dirty = true; repaint(); }
  }

  function controllerAt(seatId, year) {
    for (var i = 0; i < ctrlData.length; i++) {
      var s = ctrlData[i];
      if (s.place_id !== seatId) continue;
      var st = s.start, en = (s.end == null ? 1e9 : s.end);
      if (year >= st && year <= en) return s.party;
    }
    return null;
  }

  function buildFrame(year) {
    var nx = grid.nx, ny = grid.ny;
    var frame = off.getContext('2d').createImageData(nx, ny);
    var data = frame.data;
    var pg = new Int8Array(nx * ny);
    for (var iy = 0; iy < ny; iy++) {
      for (var ix = 0; ix < nx; ix++) {
        var idx = iy * nx + ix;
        if (coastReady && mask[idx] === 0) { pg[idx] = -2; continue; } // 海：不填
        pg[idx] = pIdx(controllerAt(seats[assign[idx]].place_id, year));
      }
    }
    var nation = (curScope === 'nation');
    for (iy = 0; iy < ny; iy++) {
      for (ix = 0; ix < nx; ix++) {
        idx = iy * nx + ix; var o = idx * 4; var pi = pg[idx];
        if (pi === -2) { data[o + 3] = 0; continue; }       // 海
        if (pi < 0) { data[o + 3] = 0; continue; }          // 无控制方
        var boundary = false, external = false;
        if (ix + 1 < nx) { var r = pg[idx + 1]; if (r !== pi && r >= 0) { boundary = true; if (r !== -2) external = true; } }
        if (!boundary && iy + 1 < ny) { var d2 = pg[idx + nx]; if (d2 !== pi && d2 >= 0) { boundary = true; if (d2 !== -2) external = true; } }
        if (!nation && (ix === 0 || iy === 0 || ix === nx - 1 || iy === ny - 1)) boundary = true;
        if (boundary) {
          if (nation && !external) { data[o + 3] = 0; continue; }
          data[o] = 74; data[o + 1] = 64; data[o + 2] = 54; data[o + 3] = nation ? 200 : 150;
          continue;
        }
        var col = pCol(pi);
        if (col) {
          data[o] = col[0]; data[o + 1] = col[1]; data[o + 2] = col[2];
          data[o + 3] = (pi === pIdx('contested')) ? 95 : (nation ? 130 : 120);
        }
      }
    }
    return frame;
  }

  function dashFrame(frame, curFrame) {
    var fd = frame.data, cd = curFrame.data, total = fd.length;
    var gw = grid.nx;
    for (var o = 0; o < total; o += 4) {
      if (fd[o + 3] === 0) continue;
      var sameColor = (fd[o] === cd[o] && fd[o + 1] === cd[o + 1] && fd[o + 2] === cd[o + 2]);
      if (!sameColor) {
        var ix = (o / 4) % gw, iy = Math.floor((o / 4) / gw);
        if ((ix + iy) % 2 === 0) fd[o + 3] = Math.round(fd[o + 3] * 0.35);
      }
    }
  }

  function drawMulti(year, scope) {
    if (!ready) return;
    curYear = year; curScope = scope;
    var yr = years();
    var prev = buildFrame(Math.max(yr[0], year - 1));
    var cur = buildFrame(year);
    var nextFrame = buildFrame(Math.min(yr[1], year + 1));
    dashFrame(prev, cur); dashFrame(nextFrame, cur);
    var ctx = off.getContext('2d');
    ctx.clearRect(0, 0, grid.nx, grid.ny);
    ctx.putImageData(prev, 0, 0); ctx.putImageData(nextFrame, 0, 0); ctx.putImageData(cur, 0, 0);
    img = cur; dirty = false; repaint();
  }

  function drawDiff(year, scope, altCtrlData) {
    if (!ready || !altCtrlData || !altCtrlData.length) return;
    curYear = year; curScope = scope;
    var saved = ctrlData;
    ctrlData = altCtrlData; var branchFrame = buildFrame(year);
    ctrlData = saved; var mainFrame = buildFrame(year);
    dashFrame(mainFrame, branchFrame);
    var ctx = off.getContext('2d');
    ctx.clearRect(0, 0, grid.nx, grid.ny);
    ctx.putImageData(mainFrame, 0, 0); ctx.putImageData(branchFrame, 0, 0);
    img = branchFrame; dirty = false; repaint();
  }

  function tally(year) {
    var t = {};
    seats.forEach(function (s) {
      var p = controllerAt(s.place_id, year);
      if (p) t[p] = (t[p] || 0) + 1;
    });
    return t;
  }

  function activeParties() {
    var seen = [], map = {};
    ctrlData.forEach(function (c) {
      if (c.party && !map[c.party]) { map[c.party] = 1; seen.push(c.party); }
    });
    return seen;
  }

  // 主动拉取 CHGIS 真实政区多边形做海岸线掩膜（不依赖 BorderLayer 是否打开）。
  function loadCoast(url) {
    if (typeof fetch !== 'function') return;
    fetch(url).then(function (r) { return r.json(); }).then(function (gj) {
      setCoast(gj.features || []);
    }).catch(function (e) { console.warn('[ControlLayer] 海岸线掩膜加载失败：', e && e.message ? e.message : e); });
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

  function rebuild() {
    if (!grid) return;
    img = buildFrame(curYear != null ? curYear : years()[0]);
    off.getContext('2d').putImageData(img, 0, 0);
  }

  function draw(year, scope) {
    if (!ready) return;
    if (year !== curYear || scope !== curScope) { curYear = year; curScope = scope; dirty = true; }
    repaint();
  }

  function isReady() { return ready; }
  function years() { return curYears; }

  window.ControlLayer = {
    setup: setup, draw: draw, drawMulti: drawMulti, drawDiff: drawDiff, repaint: repaint,
    clear: clear, setCoast: setCoast, loadCoast: loadCoast,
    partyColor: partyColor, controllerAt: controllerAt, tally: tally,
    activeParties: activeParties,
    isReady: isReady, years: years, seats: function () { return seats; }
  };
})();
