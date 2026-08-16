/* 小菜狗的文明图景 · 真实政区边界叠加层（v0.46 新增 · 替换控制面板 Voronoi 示意）
 *
 * 渲染 tools/build_borders.py 生成的 data/external/chgis/borders_1820.geojson：
 *   level='pref'    真实府级政区面（320 个，CHGIS 1820 府级界线）
 *   level='nation'  府级面拓扑合并出的疆域外轮廓（真实国界折线）
 *
 * 为什么是 1820 而不是 1619：本机 CHGIS 镜像里 1911 县/省/府 三层与 T-S
 * （实为福建·唐宋专题）诸层**都不覆盖满洲**，辽东战场只能取 1820 府级底本。
 * 比明末晚约 200 年，属「有真实数据但非本切片纪年」——UI 必须显式标注时代差，
 * 绝不冒充明代政区（诚实边界原则）。
 *
 * 与 ControlLayer 的分工：
 *   ControlLayer = 控制权**语义**（谁占着，按年份变色，可对比分支）
 *   BorderLayer  = 政区**几何**（真实边界线，不表达归属）
 * 两者叠加：真实边界打底，控制权着色在上。
 *
 * 性能：GeoJSON 约 2MB，故**懒加载**——只有真正打开图层时才 fetch，
 * 不拖慢每次页面初始化。
 */
(function () {
  'use strict';

  var cfg = null, feats = [], ready = false, fetching = false, failed = false;
  var meta = { year: null, source: '', note: '' };
  var DEFAULT_URL = '../data/external/chgis/borders_1820.geojson';

  // 描边风格：府界（细·暗褐）与 国界（粗·暗红 + 极淡填充）
  var STYLE = {
    county: { col: [74, 64, 54], lw: 1.0, fill: 0.0 },
    nation: { col: [150, 40, 40], lw: 2.0, fill: 0.0 }
  };
  // 控制面板的 scope 名 → 数据里的 level
  var LEVEL_OF = { county: 'pref', nation: 'nation' };

  function forEachRing(geom, cb) {
    if (!geom) return;
    var t = geom.type;
    if (t === 'Polygon') geom.coordinates.forEach(cb);
    else if (t === 'MultiPolygon') geom.coordinates.forEach(function (p) { p.forEach(cb); });
    else if (t === 'LineString') cb(geom.coordinates);
    else if (t === 'MultiLineString') geom.coordinates.forEach(cb);
  }
  function isLine(geom) {
    return geom && (geom.type === 'LineString' || geom.type === 'MultiLineString');
  }

  /* setup 只登记配置，不发请求（懒加载） */
  function setup(o) {
    cfg = o || {};
    cfg.cv = cfg.cv || null;
    cfg.scope = cfg.scope || 'county';
    feats = []; ready = false; fetching = false; failed = false;
  }

  /* 真正需要显示时才拉数据 */
  function ensure() {
    if (ready || fetching || failed || !cfg || !cfg.cv) return;
    if (!cfg.px || !cfg.py) { console.warn('[BorderLayer] 需要 px/py'); failed = true; return; }
    if (typeof location !== 'undefined' && location.protocol === 'file:') {
      failed = true;
      if (cfg.onError) cfg.onError(new Error('file:// 无法 fetch'));
      return;
    }
    fetching = true;
    if (cfg.onLoading) cfg.onLoading();
    fetch(cfg.url || DEFAULT_URL).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (gj) {
      meta.year = gj.source_year || null;
      meta.source = gj.source || '';
      meta.note = gj.note || '';
      var PX = cfg.px, PY = cfg.py;
      feats = (gj.features || []).map(function (f) {
        var p = f.properties || {};
        var minx = 1e9, miny = 1e9, maxx = -1e9, maxy = -1e9;
        forEachRing(f.geometry, function (ring) {
          for (var i = 0; i < ring.length; i++) {
            var X = PX(ring[i][0]), Y = PY(ring[i][1]);
            if (X < minx) minx = X;
            if (Y < miny) miny = Y;
            if (X > maxx) maxx = X;
            if (Y > maxy) maxy = Y;
          }
        });
        return { geom: f.geometry, line: isLine(f.geometry),
                 level: p.level || 'pref', name: p.name || '', type: p.type || '',
                 bb: [minx, miny, maxx, maxy] };
      });
      ready = true; fetching = false;
      repaint();
      if (cfg.onReady) cfg.onReady(feats.length, meta);
    }).catch(function (e) {
      fetching = false; failed = true;
      console.warn('[BorderLayer] 加载失败：', e && e.message ? e.message : e);
      if (cfg.onError) cfg.onError(e);
    });
  }

  function repaint() {
    if (!cfg || !cfg.cv) return;
    var ctx = cfg.cv.getContext('2d');
    var dpr = cfg.getDpr ? cfg.getDpr() : 1;
    var cw = cfg.getCw ? cfg.getCw() : 1;
    var ch = cfg.getCh ? cfg.getCh() : cw;
    var w = Math.round(cw * dpr), h = Math.round(ch * dpr);
    if (cfg.cv.width !== w || cfg.cv.height !== h) { cfg.cv.width = w; cfg.cv.height = h; }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, w, h);
    if (!ready) return;
    var v = cfg.getView ? cfg.getView() : { x: 0, y: 0, w: 1000, h: 918 };
    var s = (cw / v.w) * dpr;
    ctx.setTransform(s, 0, 0, s, -v.x * s, -v.y * s);
    var vx0 = v.x, vy0 = v.y, vx1 = v.x + v.w, vy1 = v.y + v.h;
    var st = STYLE[cfg.scope] || STYLE.county;
    var want = LEVEL_OF[cfg.scope] || 'pref';
    var drawn = 0;
    for (var i = 0; i < feats.length; i++) {
      var ft = feats[i];
      if (ft.level !== want) continue;
      var b = ft.bb;
      if (b[2] < vx0 || b[0] > vx1 || b[3] < vy0 || b[1] > vy1) continue;  // 视口剔除
      drawFeat(ctx, ft, s, st);
      drawn++;
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    cfg._drawn = drawn;
  }

  function drawFeat(ctx, ft, s, st) {
    var col = st.col;
    ctx.beginPath();
    forEachRing(ft.geom, function (ring) {
      for (var i = 0; i < ring.length; i++) {
        var X = cfg.px(ring[i][0]), Y = cfg.py(ring[i][1]);
        if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
      }
      if (!ft.line) ctx.closePath();   // 折线不闭合，面才闭合
    });
    if (!ft.line && st.fill > 0) {
      ctx.fillStyle = 'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',' + st.fill + ')';
      ctx.fill('evenodd');
    }
    ctx.lineJoin = 'round';
    ctx.lineWidth = st.lw / s;
    ctx.strokeStyle = 'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',0.92)';
    ctx.stroke();
  }

  function setScope(scope) {
    if (!cfg) return;                 // setup 前调用不再抛异常
    cfg.scope = scope;
    if (!ready) { ensure(); return; }
    repaint();
  }
  function clear() {
    if (!cfg || !cfg.cv) return;
    var ctx = cfg.cv.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cfg.cv.width, cfg.cv.height);
  }
  function isReady() { return ready; }
  function stats() {
    var byLevel = {};
    feats.forEach(function (f) { byLevel[f.level] = (byLevel[f.level] || 0) + 1; });
    return { ready: ready, fetching: fetching, failed: failed, total: feats.length,
             byLevel: byLevel, drawn: cfg ? (cfg._drawn || 0) : 0,
             scope: cfg ? cfg.scope : null, year: meta.year, source: meta.source };
  }

  window.BorderLayer = {
    setup: setup, ensure: ensure, repaint: repaint, clear: clear,
    setScope: setScope, isReady: isReady, stats: stats,
    sourceYear: function () { return meta.year; }
  };
})();
