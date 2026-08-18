/* 小菜狗的文明图景 · 灾情影响范围层（v0.49 新增 · v0.50 升级）
 *
 * 天灾（旱/蝗/饥/疫/洪水…）不是「谁占哪城」的政权控制，而是「影响范围随年份
 * 扩张/收缩」的现象扩散。所以灾难用**独立的 severity 热力模型**，不复用控制层。
 *
 * v0.50 升级（对齐实控区层的可读性）：
 *   - 受灾 / 正常 二分：未受灾陆地填中性浅色（parchment-grey），受灾区按指标梯度上色，
 *     边界因此自然浮现——解决旧版「只叠半透明、看不出哪受灾」的问题。
 *   - 指标可切换（setMetric）：
 *       · severity   严重程度（level 1→3 归一）
 *       · deaths     死亡人口（按本场景 maxDeaths 归一）
 *       · mortality  死亡率（0→1 直接映射）
 *     三者均走同一条连续色带（浅琥珀→橙→深红），颜色越深=越重。
 *   - 时间驱动：draw(year) 重算各地当年受灾状态，受灾范围随滑块/播放「随时间变化」。
 *
 * 数据：data/<scene>/impact.json = { years, events, impact:[{place_id,start,end,level,
 *        deaths,deaths_approx,mortality,mortality_approx}] }。
 * 几何：与控制层同款——真实治所(经纬度) Voronoi 划分 + CHGIS 1820 真实政区多边形
 *       栅格化成陆地掩膜裁剪到海岸线以内（非逐日实测，诚实边界）。
 * canvas 置于地形之上、SVG 之下，pointer-events:none，绝不拦截地图交互。
 */
(function () {
  'use strict';

  var cfg = null, seats = [], seatIdx = {}, grid = null, assign = null,
      mask = null, off = null, img = null, ready = false, coastReady = false;
  var impactData = [], curYears = [1600, 1650];

  // 当前着色指标：severity | deaths | mortality
  var metric = 'severity';
  // 本场景死亡人口上限（deaths 指标归一化用，setup 时计算）
  var maxDeaths = 1;

  var curYear = null, dirty = true;

  // 受灾/正常二分配色
  var NORMAL = [201, 196, 180];   // 未受灾陆地：中性浅色（区别于地形羊皮纸）
  var NORMAL_ALPHA = 55;
  var LIGHT = [245, 222, 178], MID = [222, 120, 45], DEEP = [120, 16, 16]; // 受灾梯度端点

  function lerp(a, b, u) { return Math.round(a + (b - a) * u); }

  function setup(o) {
    cfg = o || {};
    var D = cfg.sceneData || null;
    var has = !!(D && Array.isArray(D.impact) && D.impact.length);
    impactData = has ? D.impact : [];
    curYears = (has && D.years) ? D.years : [1600, 1650];
    seats = (has && Array.isArray(D.seats)) ? D.seats : [];
    seatIdx = {};
    seats.forEach(function (s, i) {
      // 治所可能带 id（场景 places）或 place_id（自含 seats）；统一到 place_id
      if (s.place_id == null) s.place_id = s.id;
      seatIdx[s.place_id] = i;
    });
    if (!seats.length || !impactData.length) { ready = false; return; }
    // 死亡人口上限（仅 deaths 指标用）
    maxDeaths = 1;
    impactData.forEach(function (s) {
      if (typeof s.deaths === 'number' && s.deaths > maxDeaths) maxDeaths = s.deaths;
    });
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
    ctx.beginPath();
    features.forEach(function (f) {
      var g = f.geom; if (!g) return;
      var rings = (g.type === 'Polygon') ? g.coordinates
                : (g.type === 'MultiPolygon') ? [].concat.apply([], g.coordinates) : null;
      if (!rings) return;
      rings.forEach(function (ring) {
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

  // 某地某年「命中」的受灾区间（取 level 最高者；多段重叠时代表最高烈度）
  function entryAt(placeId, year) {
    var best = null;
    for (var i = 0; i < impactData.length; i++) {
      var s = impactData[i];
      if (s.place_id !== placeId) continue;
      if (year >= s.start && year <= s.end) {
        if (!best || (s.level || 0) > (best.level || 0)) best = s;
      }
    }
    return best;
  }

  // 受灾等级（兼容旧接口）：多段取最大 level
  function levelAt(placeId, year) {
    var e = entryAt(placeId, year);
    return e ? (e.level || 0) : 0;
  }

  // 当前指标下的强度 t∈[0,1] 与原始值（用于图例/tooltip）
  function intensityAt(placeId, year) {
    var e = entryAt(placeId, year);
    if (!e) return { t: 0, raw: null, approx: false };
    if (metric === 'deaths') {
      var d = (typeof e.deaths === 'number') ? e.deaths : 0;
      return { t: maxDeaths ? d / maxDeaths : 0, raw: d, approx: !!e.deaths_approx };
    }
    if (metric === 'mortality') {
      var m = (typeof e.mortality === 'number') ? e.mortality : 0;
      return { t: Math.max(0, Math.min(1, m)), raw: m, approx: !!e.mortality_approx };
    }
    return { t: (e.level || 0) / 3, raw: e.level || 0, approx: false }; // severity
  }

  // 强度 t∈[0,1] → 连续色带（浅琥珀→橙→深红）
  function metricColor(t) {
    t = Math.max(0, Math.min(1, t));
    var r, g, b;
    if (t < 0.5) {
      var u = t / 0.5;
      r = lerp(LIGHT[0], MID[0], u); g = lerp(LIGHT[1], MID[1], u); b = lerp(LIGHT[2], MID[2], u);
    } else {
      var v = (t - 0.5) / 0.5;
      r = lerp(MID[0], DEEP[0], v); g = lerp(MID[1], DEEP[1], v); b = lerp(MID[2], DEEP[2], v);
    }
    return [r, g, b];
  }

  // 把当前指标图例暴露给前端（renderCtrlLegend 用）
  function metricMeta() {
    if (metric === 'deaths') {
      var mx = maxDeaths >= 10000 ? (maxDeaths / 10000) + '万' : ('' + maxDeaths);
      return { metric: 'deaths', label: '死亡人口', min: '0', max: mx };
    }
    if (metric === 'mortality') return { metric: 'mortality', label: '死亡率', min: '0%', max: '100%' };
    return { metric: 'severity', label: '严重程度', min: '轻', max: '重' };
  }

  // 当前指标色带 → CSS linear-gradient（图例条）
  function gradientCss() {
    var stops = [0, 0.25, 0.5, 0.75, 1].map(function (t) {
      var c = metricColor(t);
      return 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ') ' + (t * 100) + '%';
    }).join(',');
    return 'linear-gradient(90deg,' + stops + ')';
  }

  // 切指标并重绘
  function setMetric(m) {
    if (m !== 'severity' && m !== 'deaths' && m !== 'mortality') return;
    if (m === metric) return;
    metric = m; dirty = true;
    if (ready) repaint();
  }
  function getMetric() { return metric; }

  function buildFrame(year) {
    var nx = grid.nx, ny = grid.ny;
    var frame = off.getContext('2d').createImageData(nx, ny);
    var data = frame.data;
    var pg = new Int8Array(nx * ny);
    for (var iy = 0; iy < ny; iy++) {
      for (var ix = 0; ix < nx; ix++) {
        var idx = iy * nx + ix;
        if (coastReady && mask[idx] === 0) { pg[idx] = -2; continue; }
        var seat = seats[assign[idx]];
        var e = entryAt(seat.place_id, year);
        pg[idx] = e ? (e.level || 0) : 0; // 0 = 未受灾陆地；-2 = 海
      }
    }
    for (iy = 0; iy < ny; iy++) {
      for (ix = 0; ix < nx; ix++) {
        idx = iy * nx + ix; var o = idx * 4; var lv = pg[idx];
        if (lv === -2) { data[o + 3] = 0; continue; }       // 海：透明
        if (lv <= 0) {                                        // 未受灾陆地：中性浅色
          data[o] = NORMAL[0]; data[o + 1] = NORMAL[1]; data[o + 2] = NORMAL[2];
          data[o + 3] = NORMAL_ALPHA; continue;
        }
        var seat2 = seats[assign[idx]];
        var it = intensityAt(seat2.place_id, year);
        var col = metricColor(it.t);
        var alpha = 110 + it.t * 90; if (alpha > 205) alpha = 205;
        data[o] = col[0]; data[o + 1] = col[1]; data[o + 2] = col[2];
        data[o + 3] = alpha;
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
    levelAt: levelAt, entryAt: entryAt, intensityAt: intensityAt,
    setMetric: setMetric, getMetric: getMetric,
    metricMeta: metricMeta, gradientCss: gradientCss, metricColor: metricColor,
    isReady: isReady, years: years, seats: function () { return seats; }
  };
})();
