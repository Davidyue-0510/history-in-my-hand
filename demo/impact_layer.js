/* 小菜狗的文明图景 · 灾情影响范围层（v0.49 新增 · 独立灾难模型）
 *
 * 天灾（旱/蝗/饥/疫/洪水…）不是「谁占哪城」的政权控制，而是「影响范围随年份
 * 扩张/收缩」的现象扩散。所以灾难用**独立的 severity 热力模型**，不复用控制层：
 *   - 数据：data/<scene>/impact.json = { years, events, impact:[{place_id,start,end,level}] }
 *     level ∈ 1(轻)2(中)3(重)，同一地点可多段叠加取最大。
 *   - 几何：与控制层同款——真实治所(经纬度) Voronoi 划分，再用 CHGIS 1820 真实
 *     政区多边形栅格化成陆地掩膜裁剪到海岸线以内（非逐日实测，诚实边界）。
 *   - 渲染：level→热力色（淡琥珀→橙→深红），半透明叠在地形上；年份驱动 draw(year)。
 *   - canvas 置于地形之上、SVG 之下，pointer-events:none，绝不拦截地图交互。
 */
(function () {
  'use strict';

  var cfg = null, seats = [], seatIdx = {}, grid = null, assign = null,
      mask = null, off = null, img = null, ready = false, coastReady = false;
  var impactData = [], curYears = [1600, 1650];

  var LEVEL_COLORS = [null, [235, 190, 100], [222, 125, 50], [178, 45, 40]];
  var LEVEL_ALPHA = [0, 95, 135, 175];

  var curYear = null, dirty = true;

  function setup(o) {
    cfg = o || {};
    var D = cfg.sceneData || null;
    var has = !!(D && Array.isArray(D.impact) && D.impact.length);
    impactData = has ? D.impact : [];
    curYears = (has && D.years) ? D.years : [1600, 1650];
    seats = (has && Array.isArray(D.seats)) ? D.seats : [];
    seatIdx = {};
    seats.forEach(function (s, i) { seatIdx[s.place_id] = i; });
    if (!seats.length || !impactData.length) { ready = false; return; }
    initGrid();
    ready = true; dirty = true;
  }

  function initGrid() {
    var lons = seats.map(function (s) { return s.lon; });
    var lats = seats.map(function (s) { return s.lat; });
    var pad = 1.1;
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

  // CHGIS 真实政区多边形 → 陆地掩膜（与控制层同款）
  function setCoast(features) {
    if (!grid || !features || !features.length) return;
    var nx = grid.nx, ny = grid.ny, lon0 = grid.lon0, lat1 = grid.lat1, step = grid.step;
    var cv = document.createElement('canvas'); cv.width = nx; cv.height = ny;
    var ctx = cv.getContext('2d');
    ctx.fillStyle = '#fff';
    features.forEach(function (f) {
      var g = f.geom; if (!g) return;
      var rings = (g.type === 'Polygon') ? g.coordinates
                : (g.type === 'MultiPolygon') ? [].concat.apply([], g.coordinates) : null;
      if (!rings) return;
      rings.forEach(function (ring) {
        ctx.beginPath();
        for (var i = 0; i < ring.length; i++) {
          var gx = (ring[i][0] - lon0) / step, gy = (lat1 - ring[i][1]) / step;
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

  function loadCoast(url) {
    if (typeof fetch !== 'function') return;
    fetch(url).then(function (r) { return r.json(); }).then(function (gj) {
      setCoast(gj.features || []);
    }).catch(function (e) { console.warn('[ImpactLayer] 海岸线掩膜加载失败：', e && e.message ? e.message : e); });
  }

  // 某地某年受灾等级：多段取最大
  function levelAt(placeId, year) {
    var lv = 0;
    for (var i = 0; i < impactData.length; i++) {
      var s = impactData[i];
      if (s.place_id !== placeId) continue;
      if (year >= s.start && year <= s.end) lv = Math.max(lv, s.level || 0);
    }
    return lv;
  }

  function buildFrame(year) {
    var nx = grid.nx, ny = grid.ny;
    var frame = off.getContext('2d').createImageData(nx, ny);
    var data = frame.data;
    var pg = new Int8Array(nx * ny);
    for (var iy = 0; iy < ny; iy++) {
      for (var ix = 0; ix < nx; ix++) {
        var idx = iy * nx + ix;
        if (coastReady && mask[idx] === 0) { pg[idx] = -2; continue; }
        pg[idx] = levelAt(seats[assign[idx]].place_id, year);
      }
    }
    for (iy = 0; iy < ny; iy++) {
      for (ix = 0; ix < nx; ix++) {
        idx = iy * nx + ix; var o = idx * 4; var lv = pg[idx];
        if (lv <= 0) { data[o + 3] = 0; continue; }
        var col = LEVEL_COLORS[lv] || LEVEL_COLORS[3];
        data[o] = col[0]; data[o + 1] = col[1]; data[o + 2] = col[2];
        data[o + 3] = LEVEL_ALPHA[lv] || 150;
      }
    }
    return frame;
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
    img = buildFrame(curYear != null ? curYear : curYears[0]);
    off.getContext('2d').putImageData(img, 0, 0);
  }

  function draw(year) {
    if (!ready) return;
    if (year !== curYear) { curYear = year; dirty = true; }
    repaint();
  }

  function isReady() { return ready; }
  function years() { return curYears; }

  window.ImpactLayer = {
    setup: setup, draw: draw, repaint: repaint, clear: clear,
    setCoast: setCoast, loadCoast: loadCoast,
    levelAt: levelAt, isReady: isReady, years: years, seats: function () { return seats; }
  };
})();
