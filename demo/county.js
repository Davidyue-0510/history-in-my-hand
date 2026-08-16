/* 小菜狗的文明图景 · 共享县级 LOD 切片引擎
 *
 * 与萨尔浒切片共用：真实地形（ASTER）、滚轮缩放、断言内核、冲突自动发现。
 * 县 LOD 特有：建置沿革时间轴、三方史料并列、互市—军事关系图。
 * 本文件只投影，不裁判；真伪由用户的采信选择决定。
 *
 * 用法（v0.5 起只有一个页面）：
 *   county.html?scene=<key>          ← key 来自 data/scenes.json
 * 标题 / 导语 / 三方说明 / subject 命名全部从 SANDBOX_DATA.scenes[key].meta 取，
 * 而 meta 由 build.py 从注册表原样注入。所以「新增一个县」不碰任何前端文件。
 *
 * 旧的 window.COUNTY_SCENE / COUNTY_CONF 仍然兼容（kaiyuan.html 等老链接）。
 */
(function () {
  'use strict';

  var SD = window.SANDBOX_DATA;

  function qs(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  }
  var sceneKey = qs('scene') || window.COUNTY_SCENE ||
                 (SD.scene_order || []).filter(function (k) {
                   return (SD.scenes[k].meta || {}).kind === 'county';
                 })[0] || 'kaiyuan';

  var D = SD.scenes[sceneKey];
  if (!D) {
    document.body.innerHTML = '<div style="padding:48px;font:15px/1.8 system-ui;color:#2A2521">'
      + '<h1 style="font-size:22px">找不到切片「' + String(sceneKey).replace(/</g, '&lt;') + '」</h1>'
      + '<p>已注册的切片：' + (SD.scene_order || []).join('、') + '</p>'
      + '<p><a href="index.html">← 回枢纽</a></p></div>';
    return;
  }
  var META = D.meta || {};
  // 老页面的 COUNTY_CONF 优先级最高（向后兼容），其次是注册表 meta
  var CFG = window.COUNTY_CONF || {};
  var PRIMARY = CFG.primary_place || META.primary_place;
  var DOSSIER = CFG.dossier_event || META.dossier_event;

  var TG = D.terrain || SD.terrain;   // 优先 per-scene 网格，回退共享网格
  var BM = D.basemap || SD.basemap;   // per-scene Natural Earth 矢量底图（v0.38）
  var WALL = D.wall || null;          // 辽东边墙仅辽东体系场景注入（不再共享误显）
  var SVGNS = 'http://www.w3.org/2000/svg';

  document.title = (META.title || sceneKey) + ' · 小菜狗的文明图景';

  /* ═══════════ 投影 ═══════════
   * 默认框 = 共享地形网格 (122–126.8°E / 40–43.3°N)，网格内县与萨尔浒同框。
   * 若本切片主地点在网格外（辽西/辽南），投影扩展为「网格框 ∪ 本切片地点」，
   * 使地点可见；地形层在离线时跳过绘制（见 drawTerrain / state.terrainOffGrid）。 */
  var GRID_LON0 = 73.5, GRID_LON1 = 135.1, GRID_LAT0 = 18.0, GRID_LAT1 = 53.6;
  var TG_BOX = TG ? { lon0: TG.lon0, lon1: TG.lon0 + (TG.nx - 1) * TG.step,
                      lat0: TG.lat0, lat1: TG.lat0 + (TG.ny - 1) * TG.step } : null;
  var PRIM = (D.places.filter(function (p) { return p.id === META.primary_place; })[0]) || D.places[0];
  var OFF_GRID = !TG_BOX || !(PRIM.lon >= TG_BOX.lon0 && PRIM.lon <= TG_BOX.lon1 &&
                              PRIM.lat >= TG_BOX.lat0 && PRIM.lat <= TG_BOX.lat1);
  var LON0 = GRID_LON0, LON1 = GRID_LON1, LAT0 = GRID_LAT0, LAT1 = GRID_LAT1;
  if (OFF_GRID) {
    var mnLon = GRID_LON0, mxLon = GRID_LON1, mnLat = GRID_LAT0, mxLat = GRID_LAT1;
    D.places.forEach(function (p) {
      if (typeof p.lon === 'number' && typeof p.lat === 'number') {
        if (p.lon < mnLon) mnLon = p.lon; if (p.lon > mxLon) mxLon = p.lon;
        if (p.lat < mnLat) mnLat = p.lat; if (p.lat > mxLat) mxLat = p.lat;
      }
    });
    var padLon = (mxLon - mnLon) * 0.10 + 0.3, padLat = (mxLat - mnLat) * 0.10 + 0.3;
    LON0 = mnLon - padLon; LON1 = mxLon + padLon; LAT0 = mnLat - padLat; LAT1 = mxLat + padLat;
  }
  var W = 1000, H = 918;
  function px(lon) { return (lon - LON0) / (LON1 - LON0) * W; }
  function py(lat) { return (LAT1 - lat) / (LAT1 - LAT0) * H; }

  var PLACE = {};
  D.places.forEach(function (p) { PLACE[p.id] = p; });
  var SRC = {};
  D.sources.forEach(function (s) { SRC[s.id] = s; });

  // 抽象关系图模式：虚构 / 无坐标 world 没有地理投影，改用节点-连线布局（人物 + 地点）。
  // 辽东等地理 world 完全走 px/py 投影路径，不受影响。
  var IS_ABSTRACT = !!META.fictional || !D.places.some(function (p) {
    return typeof p.lon === 'number' && typeof p.lat === 'number';
  });
  var NODE = {};
  D.places.forEach(function (p) { NODE[p.id] = { id: p.id, kind: 'place', name: p.name, ref: p }; });
  (D.persons || []).forEach(function (p) { if (!NODE[p.id]) NODE[p.id] = { id: p.id, kind: 'person', name: p.name, ref: p }; });
  // 径向布局：最高度节点居中，其余均匀分布于环上（小图足够清晰）。
  var APOS = (function () {
    var ids = Object.keys(NODE), deg = {};
    ids.forEach(function (i) { deg[i] = 0; });
    D.edges.forEach(function (e) {
      if (NODE[e.from]) deg[e.from] = (deg[e.from] || 0) + 1;
      if (NODE[e.to]) deg[e.to] = (deg[e.to] || 0) + 1;
    });
    var hub = ids.slice().sort(function (a, b) { return deg[b] - deg[a]; })[0] || ids[0];
    var ring = ids.filter(function (i) { return i !== hub; });
    var cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.40;
    var pos = {}; pos[hub] = { x: cx, y: cy };
    ring.forEach(function (i, k) {
      var ang = (k / ring.length) * Math.PI * 2 - Math.PI / 2;
      pos[i] = { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
    });
    return pos;
  })();
  function nodeXY(id) {
    if (IS_ABSTRACT) { var a = APOS[id]; return a ? { x: a.x, y: a.y } : { x: W / 2, y: H / 2 }; }
    var p = PLACE[id]; return { x: px(p.lon), y: py(p.lat) };
  }

  /* ═══════════ 地形网格外横幅 ═══════════
   * 主地点在共享地形网格之外时，显式告知用户：此处不伪造高程，
   * 其余史料 / 断言 / 线索功能不受影响。诚实边界。 */
  if (OFF_GRID) {
    var banner = document.createElement('div');
    banner.className = 'offgrid-banner';
    if (META.fictional) {
      banner.innerHTML = '📖 本 world 由文字资料生成（小说《反派他爸教做人[快穿]》第一副本），'
        + '为虚构设定，<b>无真实地形参照</b>——此处不渲染高程阴影，这是「共享真实地形」主张的诚实边界。'
        + '史料 / 断言 / 时间轴（含反事实分支）/ 线索功能均正常。';
    } else {
      var _tg = TG_BOX
        ? ('网格覆盖 ' + TG_BOX.lon0.toFixed(1) + '–' + TG_BOX.lon1.toFixed(1) + '°E / '
           + TG_BOX.lat0.toFixed(1) + '–' + TG_BOX.lat1.toFixed(1) + '°N')
        : '未载入地形网格';
      banner.innerHTML = '⚠ 本切片主地点位于地形网格之外（' + _tg + '）。'
        + '此处不渲染高程阴影——这是「共享真实地形」主张的诚实边界，史料 / 断言 / 线索功能均正常。';
    }
    var _mw = document.getElementById('mapWrap');
    if (_mw && _mw.parentNode) _mw.parentNode.insertBefore(banner, _mw);
  }

  var LAYER_META = {
    record:      { name: '史料原文',  color: '#8C6239', hint: '出自史料的直接记载' },
    scholarship: { name: '学界考证',  color: '#2E7D8F', hint: '现代研究者的考订结论' },
    inference:   { name: 'AI 推演',   color: '#9B59B6', hint: '模型生成，无史料依据' },
    gap:         { name: '史料缺口',  color: '#B0A99C', hint: '标记我们不知道什么' }
  };

  /* ═══════════ 状态 ═══════════ */
  var state = {
    sources: new Set(D.sources.map(function (s) { return s.id; })),
    layers:  new Set(['record', 'scholarship', 'gap'].concat(D.faction_geo ? ['faction_geo'] : [])),
    terrain: { shade: true, tint: true, elev: false },
    terrainOffGrid: OFF_GRID,
    route:   true,
    t: 0,
    tab: 'yan',
    selection: null,
    control: { on: false, year: 1621, scope: 'county', playing: false, compare: false },
    chgis: { on: true, ds: 'all', period: 'all', yearSync: false },
    battle: { on: true, routes: true },
    timeline: 'main',          // v0.31：当前分支时间线
    ego: null,                 // 当前选中的人物 id（抽象图里高亮其关系网）
    personTab: 'assert',       // 人物视图子页签
    personYear: { from: null, to: null }, // 人物轨迹时间窗
    activeFaction: null,       // 派系筛选（v0.19）：点击派系面板只看该派系明方断言
    factionCompare: false       // 派系并排对比（v0.21）：当前事件/切片各派系明方断言同屏对照
  };

  function visibleAssertions() {
    return D.assertions.filter(function (a) {
      return state.sources.has(a.source) && state.layers.has(a.layer)
        && (a.timeline || 'main') === state.timeline;
    });
  }
  function pick(subject, predicate) {
    return visibleAssertions().filter(function (a) {
      return a.subject === subject && a.predicate === predicate;
    });
  }
  function fmt(n) { return Number(n).toLocaleString('en-US'); }

  /* ═══════════ 视图：缩放与平移 ═══════════ */
  var wrap = document.getElementById('mapWrap');
  var svg  = document.getElementById('map');
  var cv   = document.getElementById('terrainCv');
  var controlCv = document.getElementById('controlCv');
  var chgisCv = document.getElementById('chgisCv');
  var battleCv = document.getElementById('battleCv');
  var view = { x: 0, y: 0, w: W, h: H };
  var fitW = W, cw = 1, ch = 1;
  var MIN_W = 26;

  function dataBounds() {
    if (IS_ABSTRACT) return { x0: 0, y0: 0, x1: W, y1: H };
    var xs = [], ys = [];
    D.places.forEach(function (p) { xs.push(px(p.lon)); ys.push(py(p.lat)); });
    return { x0: Math.min.apply(null, xs), x1: Math.max.apply(null, xs),
             y0: Math.min.apply(null, ys), y1: Math.max.apply(null, ys) };
  }
  function fitView() {
    var b = dataBounds(), pad = 50;
    var bw = (b.x1 - b.x0) + pad * 2, bh = (b.y1 - b.y0) + pad * 2;
    var ar = cw / ch, w, h;
    if (bw / bh > ar) { w = bw; h = bw / ar; } else { h = bh; w = bh * ar; }
    fitW = w;
    view = { x: (b.x0 + b.x1) / 2 - w / 2, y: (b.y0 + b.y1) / 2 - h / 2, w: w, h: h };
  }
  function measure() {
    var r = wrap.getBoundingClientRect();
    cw = Math.max(1, r.width); ch = Math.max(1, r.height);
    var dpr = window.devicePixelRatio || 1;
    cv.width = Math.round(cw * dpr); cv.height = Math.round(ch * dpr);
    controlCv.width = Math.round(cw * dpr); controlCv.height = Math.round(ch * dpr);
    if (chgisCv) { chgisCv.width = Math.round(cw * dpr); chgisCv.height = Math.round(ch * dpr); }
    if (battleCv) { battleCv.width = Math.round(cw * dpr); battleCv.height = Math.round(ch * dpr); }
  }
  function clampView() {
    view.w = Math.min(fitW * 1.6, Math.max(MIN_W, view.w));
    view.h = view.w * (ch / cw);
    var b = dataBounds(), slack = Math.max(view.w, view.h) * 0.7;
    view.x = Math.min(b.x1 + slack - view.w, Math.max(b.x0 - slack, view.x));
    view.y = Math.min(b.y1 + slack - view.h, Math.max(b.y0 - slack, view.y));
  }
  var rafPending = false;
  function applyView(redrawSvg) {
    clampView();
    svg.setAttribute('viewBox', view.x.toFixed(2) + ' ' + view.y.toFixed(2) + ' ' +
      view.w.toFixed(2) + ' ' + view.h.toFixed(2));
    svg.style.setProperty('--u', (view.w / cw).toFixed(5));
    document.getElementById('zoomBadge').textContent = (fitW / view.w).toFixed(1) + '×';
    drawTerrain();
    if (!IS_ABSTRACT && state.control.on && window.ControlLayer && ControlLayer.isReady()) ControlLayer.repaint();
    if (!IS_ABSTRACT && state.chgis.on && window.ChgisLayer && ChgisLayer.isReady()) ChgisLayer.repaint();
    if (!IS_ABSTRACT && state.battle.on && window.BattleLayer && BattleLayer.isReady()) BattleLayer.repaint();
    if (redrawSvg !== false && !rafPending) {
      rafPending = true;
      requestAnimationFrame(function () { rafPending = false; drawDynamic(); });
    }
  }
  function screenToMap(clientX, clientY) {
    var r = wrap.getBoundingClientRect();
    return { x: view.x + (clientX - r.left) / r.width * view.w,
             y: view.y + (clientY - r.top) / r.height * view.h };
  }
  wrap.addEventListener('wheel', function (e) {
    e.preventDefault();
    var k = e.deltaY > 0 ? 1.14 : 1 / 1.14;
    var a = screenToMap(e.clientX, e.clientY), before = view.w;
    view.w *= k;
    view.w = Math.min(fitW * 1.6, Math.max(MIN_W, view.w));
    k = view.w / before; view.h = view.w * (ch / cw);
    view.x = a.x - (a.x - view.x) * k; view.y = a.y - (a.y - view.y) * k;
    applyView();
  }, { passive: false });
  /* 与 app.js 同：指针捕获推迟到真正拖动之后，否则 Chromium 会把 click 重定向到 wrap，
     令地图内所有点击（地点介绍、人物多 Tab、边、缺口标记、缩放按钮）全部失效。 */
  var DRAG_TH = 4;
  var UI_SEL = '.map-tools, .map-legend, .elev-legend, .zoom-badge, .map-hint, .offgrid-banner, .control-panel';
  var drag = null;
  var _lastDragMoved = 0;   // 上次指针交互移动量；>4 视为拖拽，click 不触发政区查询
  wrap.addEventListener('pointerdown', function (e) {
    if (e.button !== 0) return;
    if (e.target && e.target.closest && e.target.closest(UI_SEL)) return;
    drag = { sx: e.clientX, sy: e.clientY, vx: view.x, vy: view.y, moved: 0, pid: e.pointerId, cap: false };
  });
  wrap.addEventListener('pointermove', function (e) {
    if (!drag) return;
    var dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
    drag.moved = Math.max(drag.moved, Math.abs(dx) + Math.abs(dy));
    if (!drag.cap) {
      if (drag.moved <= DRAG_TH) return;
      try { wrap.setPointerCapture(drag.pid); } catch (x) {}
      drag.cap = true; wrap.classList.add('grabbing');
    }
    view.x = drag.vx - dx / cw * view.w; view.y = drag.vy - dy / ch * view.h;
    applyView(false);
  });
  function endDrag(e) {
    if (!drag) return;
    var moved = drag.moved, cap = drag.cap, pid = drag.pid;
    _lastDragMoved = moved;
    drag = null;
    wrap.classList.remove('grabbing');
    if (cap) { try { wrap.releasePointerCapture(pid); } catch (x) {} }
    if (moved > DRAG_TH) drawDynamic();
  }
  wrap.addEventListener('pointerup', endDrag);
  wrap.addEventListener('pointercancel', endDrag);
  wrap.addEventListener('dblclick', function () { fitView(); applyView(); });
  document.querySelectorAll('.map-tools button').forEach(function (b) {
    b.addEventListener('click', function () {
      var m = b.getAttribute('data-zoom');
      if (m === 'fit') { fitView(); }
      else {
        var k = m === 'in' ? 1 / 1.45 : 1.45;
        var cx = view.x + view.w / 2, cy = view.y + view.h / 2;
        view.w *= k; view.h = view.w * (ch / cw);
        view.x = cx - view.w / 2; view.y = cy - view.h / 2;
      }
      applyView();
    });
  });

  /* ═══════════ 地形 ═══════════
     配色遵循在线地图（Google / OSM topographic / Natural Earth 分层设色）惯例：
     低地→绿、丘陵→黄绿、山地→棕、高山→暗棕，海洋统一海蓝。
     地形画布为全不透明底层：陆地出分层设色+山体阴影，海洋出与 #mapWrap 一致的 SEA 海蓝，
     因此不再依赖 SVG 海蓝背景透出（避免此前「半透明陆地叠海蓝→发灰发蓝」的洗白观感）。 */
  var RAMP = [
    [0,    [188, 214, 168]],   // 0–50m 沿海低地·浅绿
    [50,   [198, 222, 162]],   // 0–200m 平原绿
    [200,  [216, 224, 158]],   // 200m 黄绿
    [400,  [233, 222, 150]],   // 400m 浅黄
    [600,  [226, 202, 132]],   // 600m 稻黄
    [800,  [214, 182, 120]],   // 800m 浅棕
    [1000, [198, 160, 102]],   // 1000m 棕
    [1200, [178, 138, 86]],    // 1200m 深棕
    [1500, [152, 112, 72]],    // 1500m+ 暗棕
    [2500, [122, 92, 66]],     // 高山
    [4000, [150, 140, 132]]    // 极高·灰棕
  ];
  var SEA = [197, 221, 230];   // 与 #mapWrap 背景一致的海蓝
  function rampColor(e) {
    if (e <= 0) return RAMP[0][1];
    for (var i = 1; i < RAMP.length; i++) {
      if (e <= RAMP[i][0]) {
        var a = RAMP[i - 1], b = RAMP[i], t = (e - a[0]) / (b[0] - a[0] || 1);
        return [a[1][0] + (b[1][0] - a[1][0]) * t, a[1][1] + (b[1][1] - a[1][1]) * t,
                a[1][2] + (b[1][2] - a[1][2]) * t];
      }
    }
    return RAMP[RAMP.length - 1][1];
  }
  var tImg = null;
  // NE 陆地掩膜：把 BM.land 多边形栅格化到地形网格（v0.38+），让 hillshade 严格跟随 NE 海岸
  // ——既消除「矩形贴片」观感，也保证地形层的海岸线与矢量底图完全对齐。
  function buildLandMask() {
    if (!TG || !BM || !BM.land || !BM.land.length) return null;
    var nx = TG.nx, ny = TG.ny, step = TG.step, lon0 = TG.lon0, lat0 = TG.lat0,
        m = new Uint8Array(nx * ny);
    function inRing(lon, lat, ring) {
      var inside = false;
      for (var k = 0, j = ring.length - 1; k < ring.length; j = k++) {
        var xi = ring[k][0], yi = ring[k][1], xj = ring[j][0], yj = ring[j][1];
        if (((yi > lat) !== (yj > lat)) &&
            (lon < (xj - xi) * (lat - yi) / (yj - yi || 1e-12) + xi)) inside = !inside;
      }
      return inside;
    }
    function inGeom(lon, lat, g) {
      if (g.type === 'Polygon') {
        if (!inRing(lon, lat, g.coordinates[0])) return false;
        for (var h = 1; h < g.coordinates.length; h++)
          if (inRing(lon, lat, g.coordinates[h])) return false; // 洞
        return true;
      }
      if (g.type === 'MultiPolygon') {
        for (var p = 0; p < g.coordinates.length; p++)
          if (inGeom(lon, lat, { type: 'Polygon', coordinates: g.coordinates[p] })) return true;
        return false;
      }
      return false;
    }
    for (var iy = 0; iy < ny; iy++) {
      var lat = lat0 + iy * step;
      for (var ix = 0; ix < nx; ix++) {
        var lon = lon0 + ix * step;
        for (var fi = 0; fi < BM.land.length; fi++) {
          if (inGeom(lon, lat, BM.land[fi].g)) { m[iy * nx + ix] = 1; break; }
        }
      }
    }
    return m;
  }
  function buildTerrainImage() {
    if (!TG) return null;
    var nx = TG.nx, ny = TG.ny, E = TG.elev, c = document.createElement('canvas');
    c.width = nx; c.height = ny;
    var ctx = c.getContext('2d'), img = ctx.createImageData(nx, ny);
    var midLat = TG.lat0 + (ny - 1) * TG.step / 2;
    var cellY = TG.step * 111320, cellX = TG.step * 111320 * Math.cos(midLat * Math.PI / 180);
    var ZF = 2.2, zen = (90 - 45) * Math.PI / 180, azm = (360 - 315 + 90) * Math.PI / 180;
    function z(ix, iy) {
      ix = Math.max(0, Math.min(nx - 1, ix)); iy = Math.max(0, Math.min(ny - 1, iy));
      var v = E[iy * nx + ix]; return v == null ? 0 : v;
    }
    var landMask = buildLandMask();
    for (var iy = 0; iy < ny; iy++) for (var ix = 0; ix < nx; ix++) {
      var e = z(ix, iy);
      var isSea = (e <= 0);
      // 陆地判定：NE 矢量多边形掩膜优先（保证海岸与底图对齐），无掩膜时回落高程
      var land = landMask ? landMask[iy * nx + ix] : !isSea;
      var row = (ny - 1 - iy), o = (row * nx + ix) * 4;
      if (!land) {                       // 海洋：不透明海蓝（与 #mapWrap 一致）
        img.data[o] = SEA[0]; img.data[o + 1] = SEA[1]; img.data[o + 2] = SEA[2];
        img.data[o + 3] = 255; continue;
      }
      var dzdx = ((z(ix + 1, iy - 1) + 2 * z(ix + 1, iy) + z(ix + 1, iy + 1)) -
                  (z(ix - 1, iy - 1) + 2 * z(ix - 1, iy) + z(ix - 1, iy + 1))) / (8 * cellX);
      var dzdy = ((z(ix - 1, iy + 1) + 2 * z(ix, iy + 1) + z(ix + 1, iy + 1)) -
                  (z(ix - 1, iy - 1) + 2 * z(ix, iy - 1) + z(ix + 1, iy - 1))) / (8 * cellY);
      var slope = Math.atan(ZF * Math.sqrt(dzdx * dzdx + dzdy * dzdy));
      var aspect = Math.atan2(dzdy, -dzdx);
      var hs = Math.cos(zen) * Math.cos(slope) + Math.sin(zen) * Math.sin(slope) * Math.cos(azm - aspect);
      hs = Math.max(0, Math.min(1, hs));
      var col = state.terrain.tint ? rampColor(e) : [222, 216, 198];
      var f = state.terrain.shade ? (0.72 + 0.42 * hs) : 1;
      // 地形画布全不透明：陆地出分层设色+山体阴影，不再半透明叠海蓝（消除洗白）
      img.data[o] = Math.max(0, Math.min(255, col[0] * f));
      img.data[o + 1] = Math.max(0, Math.min(255, col[1] * f));
      img.data[o + 2] = Math.max(0, Math.min(255, col[2] * f));
      img.data[o + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    return c;
  }
  function drawTerrain() {
    if (IS_ABSTRACT) { var c = cv.getContext('2d'); c.clearRect(0, 0, cv.width, cv.height); return; }
    var ctx = cv.getContext('2d'), dpr = window.devicePixelRatio || 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // 透明底：v0.38+ 与 NE 矢量底图无缝合成（陆地半透明叠加、海面全透由 #map 背景海色承担）
    ctx.clearRect(0, 0, cv.width, cv.height);
    if (!TG || !tImg || state.terrainOffGrid || (!state.terrain.shade && !state.terrain.tint)) return;
    var lonMax = TG.lon0 + (TG.nx - 1) * TG.step, latMax = TG.lat0 + (TG.ny - 1) * TG.step;
    var gx = px(TG.lon0), gw = px(lonMax) - px(TG.lon0);
    var gy = py(latMax), gh = py(TG.lat0) - py(latMax);
    var s = (cw / view.w) * dpr;
    ctx.setTransform(s, 0, 0, s, -view.x * s, -view.y * s);
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(tImg, gx, gy, gw, gh);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  /* ═══════════ SVG 底图 ═══════════ */
  function el(tag, attrs, parent) {
    var n = document.createElementNS(SVGNS, tag);
    for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function poly(pts) {
    return pts.map(function (p, i) {
      return (i ? 'L' : 'M') + px(p[0]).toFixed(1) + ' ' + py(p[1]).toFixed(1);
    }).join(' ');
  }
  var gBase, gEdges, gNodes, gMarks, gLabels;
  function initMap() {
    svg.innerHTML = '';
    gBase = el('g', {}, svg); gEdges = el('g', {}, svg);
    gMarks = el('g', {}, svg); gNodes = el('g', {}, svg); gLabels = el('g', {}, svg);
    drawBase();
  }
  // GeoJSON geometry -> SVG path d（Polygon/MultiPolygon/LineString/MultiLineString）
  function geomPath(g) {
    if (!g) return '';
    var t = g.type, c = g.coordinates, d = '';
    function ring(r) { return 'M' + r.map(function (p) { return px(p[0]) + ' ' + py(p[1]); }).join(' L ') + ' Z'; }
    function line(l) { return 'M' + l.map(function (p) { return px(p[0]) + ' ' + py(p[1]); }).join(' L '); }
    if (t === 'Polygon') { g.coordinates.forEach(function (r) { d += ring(r) + ' '; }); }
    else if (t === 'MultiPolygon') { g.coordinates.forEach(function (p) { p.forEach(function (r) { d += ring(r) + ' '; }); }); }
    else if (t === 'LineString') { d = line(c); }
    else if (t === 'MultiLineString') { c.forEach(function (l) { d += line(l) + ' '; }); }
    return d.trim();
  }
  // 取几何标注点（像素）：Polygon→外环首点；MultiPolygon→首多边形外环首点；Line→中点
  function geomLabelXY(g) {
    var c = g.coordinates;
    if (g.type === 'Polygon') return [px(c[0][0][0]), py(c[0][0][1])];
    if (g.type === 'MultiPolygon') return [px(c[0][0][0][0]), py(c[0][0][0][1])];
    if (g.type === 'LineString') { var m = c[Math.floor(c.length / 2)]; return [px(m[0]), py(m[1])]; }
    if (g.type === 'MultiLineString') { var l = c[0], mm = l[Math.floor(l.length / 2)]; return [px(mm[0]), py(mm[1])]; }
    return null;
  }

  function drawBase() {
    gBase.innerHTML = '';
    if (IS_ABSTRACT) return;   // 抽象关系图模式无底图
    if (!BM) return;
  // 1) 陆地底色：仅在没有地形网格（或地形未绘制）时作兜底填充。
  //    有地形网格时，陆地色由地形 canvas 负责（半透明 hillshade，掩膜同出 BM.land），
  //    此处若再填实心陆地 = 同一陆地画两遍 + 海岸错位（矢量平滑边 vs 栅格块边）。单一真值。
  if (!TG || !tImg || state.terrainOffGrid || (!state.terrain.shade && !state.terrain.tint)) {
    BM.land.forEach(function (f) {
      el('path', { d: geomPath(f.g), fill: '#efe7d6', stroke: 'none' }, gBase);
    });
  }
    // 2) 湖泊
    var gLake = el('g', { fill: '#bcd8e6', stroke: '#9cc4d6', 'stroke-width': 0.5,
      'vector-effect': 'non-scaling-stroke' }, gBase);
    BM.lakes.forEach(function (f) { el('path', { d: geomPath(f.g) }, gLake); });
    // 3) 海岸线
    BM.coastline.forEach(function (f) {
      el('path', { d: geomPath(f.g), fill: 'none', stroke: '#7c9aa8', 'stroke-width': 1,
        'vector-effect': 'non-scaling-stroke' }, gBase);
    });
    // 4) 省 / 州界 + 标注
    var gAdm = el('g', { fill: 'none', stroke: '#c9bfa8', 'stroke-width': 0.8,
      'vector-effect': 'non-scaling-stroke' }, gBase);
    BM.admin1.forEach(function (f) {
      el('path', { d: geomPath(f.g) }, gAdm);
      if (f.n) {
        var xy = geomLabelXY(f.g);
        if (xy) {
          var t = el('text', { x: xy[0] + 4, y: xy[1], class: 'adm-label' }, gBase);
          t.textContent = f.n;
        }
      }
    });
    // 5) 河流 + 标注
    var gRiv = el('g', { fill: 'none', stroke: '#6f9fc0', 'stroke-linecap': 'round',
      'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke' }, gBase);
    BM.rivers.forEach(function (f) {
      el('path', { d: geomPath(f.g), 'stroke-width': 1.4 }, gRiv);
      if (f.n) {
        var xy = geomLabelXY(f.g);
        if (xy) {
          var t = el('text', { x: xy[0] + 4, y: xy[1] - 3, class: 'river-label' }, gBase);
          t.textContent = f.n;
        }
      }
    });
    // 6) 辽东边墙（仅辽东体系场景注入，不再共享误显）
    if (WALL && WALL.path) {
      el('path', { d: poly(WALL.path), fill: 'none', stroke: '#7A7466', 'stroke-width': 2,
        'stroke-dasharray': '1 5', 'stroke-linecap': 'round', opacity: '.85',
        'vector-effect': 'non-scaling-stroke' }, gBase);
      var wm = WALL.path[2];
      var wl = el('text', { x: px(wm[0]) - 60, y: py(wm[1]), class: 'place-label minor' }, gBase);
      wl.textContent = WALL.name || '辽东边墙';
    }
  }

  var EDGE_STYLE = {
    mashi: { color: '#C77B30', dash: '7 4' },
    admin: { color: '#7A7466', dash: null },
    mil:   { color: '#B23A48', dash: '4 4' },
    tribe: { color: '#3E8E6E', dash: '2 3' }
  };
  var EDGE_LEGEND = [
    { k: 'mashi', name: '互市' }, { k: 'tribe', name: '部族同盟' },
    { k: 'mil', name: '军事' }, { k: 'admin', name: '行政' }
  ];

  function drawDynamic() {
    if (!gEdges) return;
    gEdges.innerHTML = ''; gNodes.innerHTML = ''; gMarks.innerHTML = ''; gLabels.innerHTML = '';

    // 边类型表：优先本 world 自带 edge_types（per-world，docs/03 §3），否则回退辽东全局四型。
    var LEGEND = (D.edge_types && D.edge_types.length) ? D.edge_types : EDGE_LEGEND;
    var STYLE = {}; LEGEND.forEach(function (t) { STYLE[t.k] = { color: t.color, dash: t.dash || null }; });

    if (IS_ABSTRACT) { drawAbstractGraph(STYLE); return; }

    D.edges.forEach(function (ed) {
      var a = PLACE[ed.from], b = PLACE[ed.to]; if (!a || !b) return;
      var st = STYLE[ed.type] || { color: '#9A9384', dash: null };
      var ax = px(a.lon), ay = py(a.lat), bx = px(b.lon), by = py(b.lat);
      var path = el('path', {
        d: 'M' + ax.toFixed(1) + ' ' + ay.toFixed(1) + ' L' + bx.toFixed(1) + ' ' + by.toFixed(1),
        fill: 'none', stroke: st.color, 'stroke-width': 1.6, 'stroke-linecap': 'round',
        'stroke-dasharray': st.dash, opacity: .72, 'vector-effect': 'non-scaling-stroke',
        class: 'node-hit'
      }, gEdges);
      path.addEventListener('click', function () { selectEdge(ed); });
      var mx = (ax + bx) / 2, my = (ay + by) / 2;
      var lab = el('text', { x: mx + 4, y: my - 3, class: 'route-label', fill: st.color, opacity: .9 }, gLabels);
      lab.textContent = ed.label;
    });

    D.places.forEach(function (p) {
      var big = ['capital', 'city'].indexOf(p.type) >= 0;
      var x = px(p.lon), y = py(p.lat);
      el('circle', { cx: x, cy: y, r: big ? 4.6 : (p.type === 'guan' ? 3.2 : 3),
        class: 'pnode' + (big ? ' big' : ''), fill: big ? '#2A2521' : '#FBF9F3',
        stroke: '#2A2521', 'stroke-width': 1.3, 'vector-effect': 'non-scaling-stroke' }, gNodes);
      var lb = el('text', { x: x + (big ? 7 : 5.5), y: y + 3.6,
        class: 'place-label' + (big ? '' : ' minor') }, gNodes);
      lb.textContent = p.name.replace(/（.*?）/g, '');
      if (state.terrain.elev && p.elev != null) {
        el('text', { x: x + (big ? 7 : 5.5), y: y + 13, class: 'place-elev' }, gNodes)
          .textContent = p.elev + ' m';
      }
      var hit = el('circle', { cx: x, cy: y, r: 13, fill: 'transparent', class: 'node-hit' }, gNodes);
      hit.addEventListener('click', function () { selectPlace(p.id); });
    });

    // 派系足迹着色（v0.20）：选中某派系时，其断言覆盖的地点加派系色虚线halo
    if (state.activeFaction) {
      var fcol = FCOLORS[state.activeFaction] || '#888';
      var fp = factionPlaces(state.activeFaction);
      Object.keys(fp).forEach(function (pid) {
        var p = PLACE[pid]; if (!p) return;
        var x = px(p.lon), y = py(p.lat);
        el('circle', { cx: x, cy: y, r: 11, fill: 'none', stroke: fcol,
          'stroke-width': 2.2, 'stroke-dasharray': '3 2.5', opacity: .92,
          'vector-effect': 'non-scaling-stroke', class: 'node-hit' }, gMarks);
      });
    }

    if (state.layers.has('gap')) {
      visibleAssertions().filter(function (a) { return a.layer === 'gap'; }).forEach(function (a) {
        var p = PLACE[a.place]; if (!p) return;
        var x = px(p.lon) - 16, y = py(p.lat) - 14;
        var g = el('g', { class: 'node-hit' }, gLabels);
        el('circle', { cx: x, cy: y, r: 8.5, fill: '#FBF9F3', stroke: '#B0A99C',
          'stroke-width': 1.4, 'stroke-dasharray': '3 2', 'vector-effect': 'non-scaling-stroke' }, g);
        el('text', { x: x, y: y + 4.2, 'text-anchor': 'middle', class: 'place-label minor' }, g)
          .textContent = '?';
        g.addEventListener('click', function () { selectAssertions('史料缺口 · ' + p.name, [a]); goTab('inspect'); });
      });
    }

    // 进军路线叠加层（赫图阿拉 → 开原 等，地形紧张度）
    if (state.route && D.route && D.route.nodes && D.route.nodes.length >= 2) {
      var na = PLACE[D.route.nodes[0].place], nb = PLACE[D.route.nodes[1].place];
      if (na && nb) {
        var ax = px(na.lon), ay = py(na.lat), bx = px(nb.lon), by = py(nb.lat);
        var rpath = el('path', {
          d: 'M' + ax.toFixed(1) + ' ' + ay.toFixed(1) + ' L' + bx.toFixed(1) + ' ' + by.toFixed(1),
          fill: 'none', stroke: '#5A3A6E', 'stroke-width': 2.4, 'stroke-linecap': 'round',
          'stroke-dasharray': '9 5', opacity: .92, 'vector-effect': 'non-scaling-stroke',
          class: 'node-hit'
        }, gEdges);
        rpath.addEventListener('click', selectRoute);
        var mx = (ax + bx) / 2, my = (ay + by) / 2;
        var ang = Math.atan2(by - ay, bx - ax) * 180 / Math.PI;
        var arr = el('text', { x: mx, y: my - 7, class: 'route-label', fill: '#5A3A6E',
          'text-anchor': 'middle', transform: 'rotate(' + ang + ' ' + mx + ' ' + my + ')' }, gLabels);
        arr.textContent = '➤ ' + (D.route.label || '进军路线');
        var rp = D.route_report || {}, strain = rp.strain;
        var badge = el('g', { class: 'node-hit' }, gLabels);
        var bw = 112, bh = 30;
        el('rect', { x: mx - bw / 2, y: my + 5, width: bw, height: bh, rx: 5,
          fill: '#FBF9F3', stroke: '#5A3A6E', 'stroke-width': 1.2,
          'vector-effect': 'non-scaling-stroke' }, badge);
        el('text', { x: mx, y: my + 18, 'text-anchor': 'middle', class: 'route-badge' }, badge)
          .textContent = '地形紧张度 ' + (strain != null ? strain.toFixed(2) : '—');
        el('text', { x: mx, y: my + 28, 'text-anchor': 'middle', class: 'route-badge-sub' }, badge)
          .textContent = (rp.strain_label || '');
        badge.addEventListener('click', selectRoute);
      }
    }

    // 派系籍贯叠加层（v0.36）：消费 build.py 注入的 D.faction_geo，
    // 把各 faction 的 bases（历史城市）按 faction 色画成菱形籍贯锚点，直接叠在该朝地形上。
    // 点击锚点即筛选该派系；选中某派系时其余派系籍贯淡出。地名表无此城的诚实留白，绝不伪造坐标。
    if (state.layers.has('faction_geo') && D.faction_geo) {
      Object.keys(D.faction_geo).forEach(function (fid) {
        var fg = D.faction_geo[fid], col = fg.color || '#888';
        var dim = state.activeFaction && state.activeFaction !== fid;
        fg.points.forEach(function (pt) {
          if (!pt.resolved || pt.lon == null) return; // 地名表无此城：诚实留白，不伪造坐标
          var x = px(pt.lon), y = py(pt.lat);
          var sz = (state.activeFaction === fid) ? 6.5 : 5, op = dim ? .26 : .95;
          var g = el('g', { class: 'node-hit' }, gMarks);
          el('path', {
            d: 'M' + x.toFixed(1) + ' ' + (y - sz).toFixed(1) +
               ' L' + (x + sz).toFixed(1) + ' ' + y.toFixed(1) +
               ' L' + x.toFixed(1) + ' ' + (y + sz).toFixed(1) +
               ' L' + (x - sz).toFixed(1) + ' ' + y.toFixed(1) + ' Z',
            fill: col, stroke: '#FBF9F3', 'stroke-width': 1.2,
            opacity: op, 'vector-effect': 'non-scaling-stroke', class: 'node-hit'
          }, g);
          var ttl = el('title', {}, g);
          ttl.textContent = (fg.name || fid) + ' · ' + pt.name + (pt.note ? '（' + pt.note + '）' : '');
          if (!dim) {
            el('text', { x: x + sz + 3, y: y + 3.2, class: 'place-label minor',
              fill: col, opacity: .95 }, gLabels).textContent = pt.name;
          }
          g.addEventListener('click', function () {
            state.activeFaction = fid;
            renderParties(); renderFactions(); renderEventTimeline(); drawDynamic();
          });
        });
      });
    }
  }

  /* 抽象关系图：节点 = 人物 + 地点，边按 per-world edge_types 上色；无地理坐标。 */
  function drawAbstractGraph(STYLE) {
    // 选中人物时，只高亮其关系网（ego network），其余淡出——对应"关联人物影响力"视图。
    var ego = state.ego, egoSet = null;
    if (ego) {
      egoSet = {}; egoSet[ego] = 1;
      D.edges.forEach(function (ed) {
        if (ed.from === ego) egoSet[ed.to] = 1;
        if (ed.to === ego) egoSet[ed.from] = 1;
      });
    }
    D.edges.forEach(function (ed) {
      var a = NODE[ed.from], b = NODE[ed.to]; if (!a || !b) return;
      var st = STYLE[ed.type] || { color: '#9A9384', dash: null };
      var pa = nodeXY(ed.from), pb = nodeXY(ed.to);
      var dim = egoSet && !(egoSet[ed.from] && egoSet[ed.to]);
      var path = el('path', {
        d: 'M' + pa.x.toFixed(1) + ' ' + pa.y.toFixed(1) + ' L' + pb.x.toFixed(1) + ' ' + pb.y.toFixed(1),
        fill: 'none', stroke: st.color, 'stroke-width': 1.8, 'stroke-linecap': 'round',
        'stroke-dasharray': st.dash, opacity: dim ? 0.12 : 0.82, 'vector-effect': 'non-scaling-stroke',
        class: 'node-hit'
      }, gEdges);
      path.addEventListener('click', function () { selectEdge(ed); });
      var mx = (pa.x + pb.x) / 2, my = (pa.y + pb.y) / 2;
      var lab = el('text', { x: mx + 4, y: my - 3, class: 'route-label', fill: st.color, opacity: dim ? 0.15 : 0.9 }, gLabels);
      lab.textContent = ed.label;
    });
    Object.keys(NODE).forEach(function (id) {
      var n = NODE[id], pos = nodeXY(id), isPerson = n.kind === 'person';
      var dim = egoSet && !egoSet[id];
      var isEgo = id === ego;
      el('circle', { cx: pos.x, cy: pos.y, r: isPerson ? (isEgo ? 7.5 : 5.5) : 7,
        class: 'pnode' + (isPerson ? ' person' : ''),
        fill: isPerson ? (isEgo ? '#C77B30' : '#5A3A6E') : '#FBF9F3',
        stroke: isEgo ? '#C77B30' : '#2A2521', 'stroke-width': isEgo ? 2.4 : 1.4,
        opacity: dim ? 0.22 : 1, 'vector-effect': 'non-scaling-stroke' }, gNodes);
      var lb = el('text', { x: pos.x + (isPerson ? 8 : 9), y: pos.y + 4,
        class: 'place-label' + (isPerson ? ' person' : ''), opacity: dim ? 0.22 : 1 }, gNodes);
      lb.textContent = n.name;
      var hit = el('circle', { cx: pos.x, cy: pos.y, r: 14, fill: 'transparent', class: 'node-hit' }, gNodes);
      hit.addEventListener('click', function () { selectNode(id); });
    });
    if (state.layers.has('gap')) {
      visibleAssertions().filter(function (a) { return a.layer === 'gap'; }).forEach(function (a) {
        var n = NODE[a.place]; if (!n) return;
        var pos = nodeXY(a.place);
        var g = el('g', { class: 'node-hit' }, gLabels);
        el('circle', { cx: pos.x - 12, cy: pos.y - 12, r: 8.5, fill: '#FBF9F3', stroke: '#B0A99C',
          'stroke-width': 1.4, 'stroke-dasharray': '3 2', 'vector-effect': 'non-scaling-stroke' }, g);
        el('text', { x: pos.x - 12, y: pos.y - 7.8, 'text-anchor': 'middle', class: 'place-label minor' }, g)
          .textContent = '?';
        g.addEventListener('click', function () { selectAssertions('缺口 · ' + n.name, [a]); goTab('inspect'); });
      });
    }
  }

  /* ═══════════ 左栏 ═══════════ */
  function renderSources() {
    var box = document.getElementById('sourceList'); box.innerHTML = '';
    D.sources.forEach(function (s) {
      var on = state.sources.has(s.id);
      var n = document.createElement('div');
      n.className = 'src' + (on ? ' on' : ' off'); n.style.setProperty('--sc', s.color);
      n.innerHTML = '<div class="src-tick">' + (on ? '✓' : '') + '</div>' +
        '<div class="src-body"><div class="src-name">《' + s.title + '》</div>' +
        '<div class="src-meta"><span class="src-stance">' + s.stance_label + '</span>' +
        s.distance_label + '</div></div>';
      n.addEventListener('click', function () {
        if (state.sources.has(s.id)) state.sources.delete(s.id); else state.sources.add(s.id);
        refresh();
      });
      box.appendChild(n);
    });
  }
  function renderLayers() {
    var box = document.getElementById('layerList'); box.innerHTML = '';
    Object.keys(LAYER_META).forEach(function (k) {
      var m = LAYER_META[k], on = state.layers.has(k);
      var cnt = D.assertions.filter(function (a) {
        return a.layer === k && state.sources.has(a.source);
      }).length;
      var n = document.createElement('div');
      n.className = 'lay' + (on ? '' : ' off'); n.style.setProperty('--lc', m.color); n.title = m.hint;
      n.innerHTML = '<i class="lay-dot"></i><span class="lay-name">' + m.name + '</span>' +
        '<span class="lay-n">' + cnt + '</span>';
      n.addEventListener('click', function () {
        if (state.layers.has(k)) state.layers.delete(k); else state.layers.add(k); refresh();
      });
      box.appendChild(n);
    });
    // 派系籍贯叠加层（v0.36）：仅当本场景注入了 D.faction_geo 才出现此开关
    if (D.faction_geo) {
      var fk = 'faction_geo', fon = state.layers.has(fk), fcnt = 0, fnotes = [];
      Object.keys(D.faction_geo).forEach(function (fid) {
        var fg = D.faction_geo[fid];
        fg.points.forEach(function (pt) { if (pt.resolved) fcnt++; });
        if (fg.geo_note) fnotes.push((fg.name || fid) + '：' + fg.geo_note);
      });
      var fn = document.createElement('div');
      fn.className = 'lay' + (fon ? '' : ' off'); fn.style.setProperty('--lc', '#7E57C2');
      fn.title = (fnotes.length ? fnotes.join('\n') : '各派系核心籍贯地（vocab.factions.bases 经地名表解析）');
      fn.innerHTML = '<i class="lay-dot"></i><span class="lay-name">派系籍贯</span>' +
        '<span class="lay-n">' + fcnt + '</span>';
      fn.addEventListener('click', function () {
        if (state.layers.has(fk)) state.layers.delete(fk); else state.layers.add(fk); refresh();
      });
      box.appendChild(fn);
    }
  }
  function renderTerrainCtl() {
    var box = document.getElementById('terrainCtl'); box.innerHTML = '';
    if (IS_ABSTRACT) {
      document.getElementById('terrainSrc').innerHTML =
        '本 world 为虚构设定，<b>无真实地形参照</b>——以关系图呈现人物与事件脉络。';
      return;
    }
    [{ k: 'shade', name: '山影晕渲', c: '#8C7B5E' },
     { k: 'tint', name: '高程配色', c: '#A88C5A' },
     { k: 'elev', name: '标注海拔', c: '#7A6E5C' }].forEach(function (it) {
      var on = state.terrain[it.k];
      var n = document.createElement('div');
      n.className = 'lay' + (on ? '' : ' off'); n.style.setProperty('--lc', it.c);
      n.innerHTML = '<i class="lay-dot"></i><span class="lay-name">' + it.name + '</span>' +
        '<span class="lay-n">' + (on ? '开' : '关') + '</span>';
      n.addEventListener('click', function () {
        state.terrain[it.k] = !state.terrain[it.k];
        if (it.k !== 'elev') tImg = buildTerrainImage();
        refresh();
      });
      box.appendChild(n);
    });
    if (D.route) {
      var on = state.route;
      var n = document.createElement('div');
      n.className = 'lay' + (on ? '' : ' off'); n.style.setProperty('--lc', '#5A3A6E');
      n.innerHTML = '<i class="lay-dot"></i><span class="lay-name">进军路线</span>' +
        '<span class="lay-n">' + (on ? '开' : '关') + '</span>';
      n.title = (D.route.label || '进军路线') + ' 及地形紧张度';
      n.addEventListener('click', function () { state.route = !state.route; refresh(); });
      box.appendChild(n);
    }
    var src = document.getElementById('terrainSrc');
    src.innerHTML = TG ? ('高程为实测值，非示意。<br><b>' + (TG.source || '') + '</b><br>网格 ' +
      TG.nx + '×' + TG.ny + '，' + TG.min + '–' + TG.max + ' m。') :
      '未载入高程网格。运行 tools/fetch_terrain.py 后重新编译。';
  }
  /* 邻接切片：严格只显示同地域（同 region）的切片。
   * 用户原则（2026-08-14）：导航器也只显示同地域切片，绝不串场。
   * 例：看赤壁（region=three_kingdoms）只出现官渡/夷陵/逍遥津，萨尔浒不出现；
   *     看萨尔浒（region=liaodong）只出现辽东各切片。 */
  function renderSiblings() {
    var box = document.getElementById('siblingList'); if (!box) return;
    box.innerHTML = '';
    var regions = {};
    (SD.regions || []).forEach(function (r) { regions[r.id] = r.name; });
    var curRegion = META.region;
    if (curRegion) {
      var h = document.createElement('div');
      h.className = 'sib-region';
      h.textContent = (regions[curRegion] || curRegion) + ' · 同地域切片';
      box.appendChild(h);
    }
    (SD.scene_order || Object.keys(SD.scenes)).forEach(function (k) {
      var sc = SD.scenes[k]; if (!sc) return;
      var m = sc.meta || {};
      // 严格同地域过滤：region 不一致则跳过（虚构世界彼此也隔离）
      if (curRegion && m.region && m.region !== curRegion) return;
      if (!curRegion && m.region) return;  // 当前切片无 region 时保守不显示任何
      var a = document.createElement('a');
      a.className = 'rt sib' + (k === sceneKey ? ' on' : ' off');
      a.href = m.page || ('county.html?scene=' + k);
      a.innerHTML = '<div class="rt-box">' + (k === sceneKey ? '●' : '') + '</div>' +
        '<span class="rt-name">' + (m.dossier_label || m.title || k) + '</span>' +
        '<span class="sib-n">' + (sc.assertions || []).length + '</span>';
      box.appendChild(a);
    });
  }

  function renderEventList() {
    var box = document.getElementById('eventList'); box.innerHTML = '';
    D.events.forEach(function (ev, i) {
      var n = document.createElement('div');
      n.className = 'rt' + (i === state.t ? ' on' : ' off');
      n.innerHTML = '<div class="rt-box">' + (i === state.t ? '●' : '') + '</div>' +
        '<span class="rt-name">' + ev.era + ' · ' + ev.title + '</span>';
      n.addEventListener('click', function () { state.t = i; refresh(); goTab('yan'); });
      box.appendChild(n);
    });
  }

  /* ═══════════ 事件时间轴 + 控制层联动（v0.27b） ═══════════ */
  /* 原版事件圆点轨道 + 点击切事件 → 控制层年份自动跟随到该事件年。
     控制层 toggle 保留在底栏右侧；legend 随事件年动态生成。 */
  function renderEventTimeline() {
    var track = document.getElementById('tlTrack');
    var eraEl = document.getElementById('dateEra');
    var labelEl = document.getElementById('dateLabel');
    var yearEl = document.getElementById('utYear');
    track.innerHTML = '';
    var evs = D.events || [];
    var curYr = state.control.year;
    if (!evs.length) {
      eraEl.textContent = '—'; labelEl.textContent = '—'; if (yearEl) yearEl.textContent = '';
      return;
    }
    var n = evs.length;

    evs.forEach(function (ev, i) {
      var node = document.createElement('div');
      var cls = 'tl-node'; if (ev.kind === '战事') cls += ' key';
      if (ev.year === curYr) cls += ' now';
      node.className = cls;
      node.style.left = (n > 1 ? (i / (n - 1) * 100) : 50) + '%';
      // 垂直居中于轨道线 + 水平偏移（首尾不超出边界）
      if (i === 0) node.style.transform = 'translate(-14px, -50%)';
      else if (i === n - 1) node.style.transform = 'translate(calc(-100% + 14px), -50%)';
      else node.style.transform = 'translate(-50%, -50%)';
      node.innerHTML = '<div class="tl-dot"></div><div class="tl-cap">' + ev.era + '</div>';
      node.title = ev.title;
      node.addEventListener('click', function () {
        state.control.year = ev.year || state.control.year;
        syncTimeline(state.control.year);
        refresh();
      });
      track.appendChild(node);
    });

    var cur = evs.find(function (ev) { return ev.year === curYr; });
    if (!cur) {
      // 选最近的事件
      var bd = 1e9;
      evs.forEach(function (ev) { var d = Math.abs((ev.year||0) - curYr); if (d < bd) { bd = d; cur = ev; } });
    }
    eraEl.textContent = cur ? cur.era : '—';
    labelEl.textContent = cur ? cur.title : '';
    if (yearEl) yearEl.textContent = cur ? String(cur.year) : '';
  }

  function syncTimeline(year) {
    state.control.year = year;
    syncStateT();
    if (state.control.on && window.ControlLayer && ControlLayer.isReady()) {
      ControlLayer.draw(state.control.year, state.control.scope);
      renderControlLegend();
    }
    // CHGIS 年份联动：开启「按时间轴年份过滤」时，只显示该年存在的政区
    if (state.chgis.on && state.chgis.yearSync && window.ChgisLayer && ChgisLayer.isReady()) {
      ChgisLayer.setFilter({ year: year });
    }
    // 注：战例图层（行军路线）与疆域时间轴解耦——不再随疆域滑块按年份过滤，
    // 由底部独立的「行军路线时间轴」按日期回放（见 wireRouteTimeline）。
    renderEventTimeline();
  }

  // 将 state.t 同步到当前 control.year（事件列表高亮 + 页签 都走年份匹配）
  function syncStateT() {
    var evs = D.events || []; if (!evs.length) return;
    var yr = state.control.year;
    for (var i = 0; i < evs.length; i++) {
      if (evs[i].year === yr) { state.t = i; return; }
    }
    // 没有精确匹配 → 选年份最近的事件
    var best = 0, bd = 1e9;
    for (i = 0; i < evs.length; i++) {
      var d = Math.abs((evs[i].year || 0) - yr);
      if (d < bd) { bd = d; best = i; }
    }
    state.t = best;
  }
  function renderEvents() {
    var lead = document.getElementById('evLead');
    lead.innerHTML = CFG.lead || META.lead ||
      '本切片为辽东走廊的县级 LOD 视图：建置沿革与关键战事并列，点时间轴或左栏跳转。';
    var box = document.getElementById('eventsPane'); box.innerHTML = '';
    var curYr = state.control.year;
    D.events.forEach(function (ev, i) {
      var n = document.createElement('div');
      var isSel = (ev.year != null && ev.year === curYr);
      n.className = 'ev' + (isSel ? ' sel' : '');
      n.innerHTML = '<div class="ev-when"><div class="era">' + ev.era + '</div>' +
        '<div class="yr">' + (ev.year || '') + '</div></div>' +
        '<div class="ev-body"><div class="ev-title">' + ev.title +
        '<span class="ev-kind">' + ev.kind + '</span></div>' +
        '<div class="ev-text">' + ev.text + '</div></div>';
      n.addEventListener('click', function () {
        state.control.year = ev.year || state.control.year;
        refresh();
      });
      box.appendChild(n);
    });
  }

  /* ═══════════ 三方史料（dossier 事件）══════════ */
  /* 立场分桶不在这里硬编码——它来自 data/vocab.json，经 build.py 注入。
     改一行词表，全站（界面 + 共振度 + lint）同步改变，这是"立场靠来源派生"
     这句话能被审计的前提。 */
  var VOCAB = (D && D.vocab) || (SD && SD.vocab) || {};
  var PARTY_BUCKET = VOCAB.party_bucket || {};
  var PARTY_ORDER = VOCAB.parties || ['明方', '清方', '朝鲜', '综述考订'];
  // 派系维度（v0.18）：明朝内利益集团的二次立场，颜色与名称同出 vocab.json 单一真值。
  var FCOLORS = VOCAB.faction_colors || {};
  var FDEF = VOCAB.factions || {};
  function renderParties() {
    var box = document.getElementById('partiesPane'); box.innerHTML = '';
    var buckets = {};
    D.sources.forEach(function (s) {
      var b = PARTY_BUCKET[s.party] || s.party;
      (buckets[b] = buckets[b] || { color: s.color, srcs: [] }).srcs.push(s);
    });
    /* 词表外的 party 不静默丢弃——排在最后并标红，让数据错误自己冒出来。
       （缺口是一等公民，那么错误也该是。） */
    var unmapped = Object.keys(buckets).filter(function (k) {
      return PARTY_ORDER.indexOf(k) < 0;
    });
    var order = PARTY_ORDER.concat(unmapped);
    order.forEach(function (name) {
      if (!buckets[name]) return;
      var isBad = PARTY_ORDER.indexOf(name) < 0;
      var b = buckets[name];
      var items = D.assertions.filter(function (a) {
        return state.sources.has(a.source) && PARTY_BUCKET[SRC[a.source].party] === name &&
               a.subject === DOSSIER &&
               (!state.activeFaction || a._faction === state.activeFaction);
      });
      var gaps = D.assertions.filter(function (a) {
        return a.layer === 'gap' && a.subject === DOSSIER &&
               PARTY_BUCKET[SRC[a.source].party] === name &&
               (!state.activeFaction || a._faction === state.activeFaction);
      });
      var n = document.createElement('div');
      n.className = 'pty';
      var head = '<div class="pty-head"><span class="pty-name">' + name +
        (isBad ? ' <em style="color:#B23A48;font-style:normal">· 未登记词表</em>' : '') +
        '</span>' +
        '<span class="pty-n" style="background:' + (isBad ? '#B23A48'
          : ((VOCAB.party_colors && VOCAB.party_colors[name]) || b.color)) + '">' +
        (items.length + gaps.length) + ' 条</span></div>';
      var body = '<div class="pty-body">';
      if (isBad) {
        body += '<div class="pty-row"><span class="pty-k">数据问题</span>' +
          '<span class="pty-v" style="color:#B23A48">source.party「' + name +
          '」不在 data/vocab.json 的受控词表内，该来源未参与三方共振统计。</span></div>';
      }
      if (!items.length && !gaps.length) {
        body += '<div class="pty-row"><span class="pty-k">记载</span>' +
          '<span class="pty-v">当前采信范围内无直接记载。</span></div>';
      } else if (!state.activeFaction && (items.concat(gaps)).some(function (a) { return a._faction && FDEF[a._faction]; })) {
        // 派系细分（v0.18）：明方桶内按 source.faction 二次分列，暴露派系间叙述冲突
        body += factionHtml(items, false) + factionHtml(gaps, true);
      } else {
        items.forEach(function (a) {
          body += '<div class="pty-row"><span class="pty-k">' + a.predicate + '</span>' +
            '<span class="pty-v">' + a.value_text + ' <em style="color:#918777">（《' +
            SRC[a.source].title + '》）</em></span></div>';
        });
        gaps.forEach(function (a) {
          body += '<div class="pty-row"><span class="pty-k">缺口</span>' +
            '<span class="pty-v" style="color:#B23A48">' + a.value_text + '</span></div>';
        });
      }
      body += '</div>';
      n.innerHTML = head + body;
      box.appendChild(n);
    });
  }

  /* 派系细分渲染助手：把一组断言按 _faction 分组成带颜色标签的子块。 */
  function factionHtml(list, isGap) {
    if (!list.length) return '';
    var groups = {};
    list.forEach(function (a) {
      var fid = a._faction || '__none__';
      (groups[fid] = groups[fid] || []).push(a);
    });
    var fids = Object.keys(groups).sort(function (x, y) {
      if (x === '__none__') return 1;
      if (y === '__none__') return -1;
      return 0;
    });
    var html = '';
    fids.forEach(function (fid) {
      var rows = groups[fid];
      if (fid !== '__none__') {
        var col = FCOLORS[fid] || '#888';
        var fname = (FDEF[fid] && FDEF[fid].name) || fid;
        html += '<div style="border-left:3px solid ' + col + ';color:' + col +
          ';font-size:12px;font-weight:600;margin:6px 0 2px;padding-left:6px">' + fname + '</div>';
      } else if (fids.length > 1) {
        html += '<div style="color:#918777;font-size:11.5px;margin:4px 0 2px;padding-left:6px">未分派系（明方其他来源）</div>';
      }
      rows.forEach(function (a) {
        html += '<div class="pty-row"><span class="pty-k">' + a.predicate + '</span>' +
          '<span class="pty-v"' + (isGap ? ' style="color:#B23A48"' : '') + '>' +
          a.value_text + (isGap ? '' : ' <em style="color:#918777">（《' +
          SRC[a.source].title + '》）</em>') + '</span></div>';
      });
    });
    return html;
  }

  /* 派系足迹（v0.20）：某派系断言覆盖到的地点与事件，供地图/时间轴着色。 */
  function factionPlaces(fid) {
    var s = {};
    D.assertions.forEach(function (a) {
      if (a._faction !== fid || !a.place || !PLACE[a.place]) return;
      s[a.place] = true;
    });
    return s;
  }
  function factionEventSubjects(fid) {
    var s = {}, i, j;
    for (i = 0; i < D.events.length; i++) {
      var subj = D.events[i].subject;
      for (j = 0; j < D.assertions.length; j++) {
        if (D.assertions[j]._faction === fid && D.assertions[j].subject === subj) { s[subj] = true; break; }
      }
    }
    return s;
  }

  /* ═══════════ 明内部派系细分（v0.18，场景级常驻面板）══════════ */
  /* 明朝内部各利益集团（东林/阉党/浙党/盐商/内臣/封疆…）因自身利害润色夸张记载。
     本面板在「明方」桶之外，按 faction 二次聚合，让派系立场冲突在界面上直接可见。 */
  function renderFactions() {
    var box = document.getElementById('factionPane'); if (!box) return; box.innerHTML = '';
    var counts = {};
    D.assertions.forEach(function (a) {
      var src = SRC[a.source]; if (!src) return;
      var fid = a._faction;
      if (!fid || !FDEF[fid]) return;
      counts[fid] = (counts[fid] || 0) + 1;
    });
    var head = document.createElement('div');
    head.style.cssText = 'font-weight:700;font-size:13px;margin:2px 0 6px;color:#5A4632;display:flex;align-items:center;justify-content:space-between';
    head.innerHTML = '<span>派系利益细分 <span style="font-weight:400;font-size:11px;color:#918777">· 立场二次派生 faction（跨朝代）</span></span>';
    var toggle = document.createElement('span');
    toggle.style.cssText = 'cursor:pointer;font-size:11px;font-weight:600;color:#fff;background:#8C6239;' +
      'padding:2px 9px;border-radius:99px;flex:0 0 auto';
    toggle.textContent = state.factionCompare ? '退出对比' : '并排对比';
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      state.factionCompare = !state.factionCompare;
      state.activeFaction = null;
      renderFactions(); renderParties(); renderEventTimeline(); drawDynamic();
    });
    head.appendChild(toggle);
    box.appendChild(head);

    if (state.factionCompare) { renderFactionCompare(box); return; }
    if (state.activeFaction) {
      var hint = document.createElement('div');
      hint.style.cssText = 'font-size:11px;color:#6b6259;margin:0 0 6px';
      hint.innerHTML = '↳ 时间轴节点与地图上 <span style="color:' + (FCOLORS[state.activeFaction] || '#888') +
        ';font-weight:600">◌ 同色高亮</span> 即该派系足迹';
      box.appendChild(hint);
    }

    var fids = Object.keys(counts);
    if (!fids.length) {
      var empty = document.createElement('div');
      empty.style.cssText = 'color:#918777;font-size:12px';
      empty.textContent = '本切片暂无标注派系的断言。';
      box.appendChild(empty);
      return;
    }

    // 清除筛选条（v0.19）：点击派系后出现的"只看此派系"开关
    if (state.activeFaction) {
      var clear = document.createElement('div');
      clear.style.cssText = 'cursor:pointer;font-size:11.5px;color:#B23A48;margin:0 0 6px;padding:3px 7px;' +
        'background:#fbeaec;border-radius:4px;display:inline-block';
      clear.textContent = '✕ 清除派系筛选：' + ((FDEF[state.activeFaction] || {}).name || state.activeFaction);
      clear.addEventListener('click', function (e) {
        e.stopPropagation();
        state.activeFaction = null;
        renderParties(); renderFactions(); renderEventTimeline(); drawDynamic();
      });
      box.appendChild(clear);
    }

    fids.sort(function (x, y) { return counts[y] - counts[x]; }).forEach(function (fid) {
      var f = FDEF[fid]; var col = FCOLORS[fid] || '#888';
      var active = state.activeFaction === fid;
      var row = document.createElement('div');
      row.style.cssText = 'margin:6px 0;padding:5px 8px;border-left:3px solid ' + col +
        ';' + (active ? 'background:#fff6e6;' : 'cursor:pointer;') + 'border-radius:0 4px 4px 0';
      row.innerHTML = '<div style="font-size:12.5px"><span style="display:inline-block;width:9px;height:9px;' +
        'border-radius:50%;background:' + col + ';margin-right:6px"></span>' +
        '<span style="color:' + col + ';font-weight:600">' + (f.name || fid) + '</span>' +
        ' <span style="color:#918777;font-size:11px">' + counts[fid] + ' 条</span>' +
        (active ? ' <span style="color:#B23A48;font-size:11px">· 筛选中</span>'
                : ' <span style="color:#918777;font-size:10.5px">· 点击只看此派系</span>') +
        '</div>' +
        '<div style="font-size:11.5px;color:#6b6259;margin-top:2px;line-height:1.5">' + (f.interest || '') + '</div>';

      if (!active) {
        row.addEventListener('click', function () {
          state.activeFaction = fid;
          renderParties(); renderFactions(); renderEventTimeline(); drawDynamic();
        });
      } else {
        // 展开：该派系在本场景的全部明方断言（跨事件），按 subject 归并
        var facs = D.assertions.filter(function (a) {
          var src = SRC[a.source]; if (!src || !state.sources.has(a.source)) return false;
          return a._faction === fid;
        });
        var bySubj = {};
        facs.forEach(function (a) { (bySubj[a.subject] = bySubj[a.subject] || []).push(a); });
        var exp = document.createElement('div');
        exp.style.cssText = 'margin-top:6px;border-top:1px dashed #e6dccb;padding-top:6px';
        Object.keys(bySubj).sort().forEach(function (subj) {
          var h = document.createElement('div');
          h.style.cssText = 'font-size:11.5px;color:#5A4632;font-weight:600;margin:5px 0 2px';
          h.textContent = subjectName(subj);
          exp.appendChild(h);
          bySubj[subj].forEach(function (a) {
            var r = document.createElement('div');
            r.className = 'pty-row';
            r.style.fontSize = '11.5px';
            r.innerHTML = '<span class="pty-k">' + (a.predicate || '') + '</span><span class="pty-v"' +
              (a.layer === 'gap' ? ' style="color:#B23A48"' : '') + '>' +
              (a.value_text || '') + (a.layer === 'gap' ? '' : ' <em style="color:#918777">（《' +
              SRC[a.source].title + '》）</em>') + '</span>';
            exp.appendChild(r);
          });
        });
        row.appendChild(exp);
      }
      box.appendChild(row);
    });
  }

  /* 派系并排对比（v0.21）：把当前事件（或整切片）各派系的明方断言同屏对照，
     直接呈现「同一件事，各利益集团如何各说各话」——即用户所言「派系因自身利益润色夸张」。
     对照范围随 DOSSIER 走：选了某事件则比该事件，否则比整切片。 */
  function renderFactionCompare(box) {
    var scope = D.assertions.filter(function (a) {
      var src = SRC[a.source]; if (!src || !state.sources.has(a.source)) return false;
      if (!a._faction || !FDEF[a._faction]) return false;
      if (state.activeFaction && a._faction !== state.activeFaction) return false;
      if (DOSSIER && a.subject !== DOSSIER) return false;
      return true;
    });
    var byF = {};
    scope.forEach(function (a) {
      var fid = a._faction;
      if (!fid || !FDEF[fid]) { (byF._unf = byF._unf || []).push(a); return; }
      (byF[fid] = byF[fid] || []).push(a);
    });
    var fids = Object.keys(byF).filter(function (k) { return k !== '_unf'; });
    fids.sort(function (x, y) { return byF[y].length - byF[x].length; });

    var tip = document.createElement('div');
    tip.style.cssText = 'font-size:11.5px;color:#6b6259;margin:0 0 8px';
    tip.innerHTML = (DOSSIER ? '当前事件：<b style="color:#5A4632">' + subjectName(DOSSIER) + '</b> · ' : '整切片 · ') +
      '各派系对该范围的记载并排对照（相同立场=共识，相悖=互攻）：';
    box.appendChild(tip);

    if (!fids.length) {
      var none = document.createElement('div');
      none.style.cssText = 'color:#918777;font-size:12px';
      none.textContent = '本范围暂无标注派系的断言可供对比。';
      box.appendChild(none);
      return;
    }
    fids.forEach(function (fid) {
      var f = FDEF[fid], col = FCOLORS[fid] || '#888';
      var card = document.createElement('div');
      card.style.cssText = 'margin:8px 0;padding:7px 9px;border-left:3px solid ' + col +
        ';background:#FCF8EF;border-radius:0 6px 6px 0';
      var h = document.createElement('div');
      h.style.cssText = 'font-size:12.5px;font-weight:700;color:' + col;
      h.innerHTML = (f.name || fid) + ' <span style="font-weight:400;font-size:10.5px;color:#918777">· ' +
        byF[fid].length + ' 条</span>';
      card.appendChild(h);
      if (f.interest) {
        var it = document.createElement('div');
        it.style.cssText = 'font-size:11px;color:#6b6259;margin:1px 0 4px';
        it.textContent = f.interest;
        card.appendChild(it);
      }
      byF[fid].forEach(function (a) {
        var r = document.createElement('div');
        r.style.cssText = 'font-size:11.5px;margin:2px 0;line-height:1.45';
        r.innerHTML = (a.layer === 'gap' ? '<span style="color:#B23A48">缺口·</span>'
          : (a.predicate ? a.predicate + '：' : '')) +
          (a.layer === 'gap' ? '' : '<span style="color:#2A2521">' ) +
          (a.value_text || '') +
          (a.layer === 'gap' ? '' : '</span>') +
          ' <em style="color:#918777">（《' + (SRC[a.source] ? SRC[a.source].title : a.source) + '》）</em>';
        card.appendChild(r);
      });
      box.appendChild(card);
    });
    if (byF._unf && byF._unf.length) {
      var u = document.createElement('div');
      u.style.cssText = 'font-size:11px;color:#918777;margin-top:6px';
      u.textContent = '（另有 ' + byF._unf.length + ' 条断言未标派系，不参与对比）';
      box.appendChild(u);
    }
  }

  /* ═══════════ 冲突 ═══════════ */
  function renderConflicts() {
    var box = document.getElementById('conflictList'); box.innerHTML = '';
    var live = 0;
    D.conflicts.forEach(function (c) {
      var items = c.assertion_ids.map(function (id) {
        return D.assertions.filter(function (a) { return a.id === id; })[0];
      });
      var vis = items.filter(function (a) { return state.sources.has(a.source) && state.layers.has(a.layer); });
      // 纯文本断言的 value 为 null——只看 value 会让文字类冲突永远被判成"已消解"。
      // 与 tools/build.py 的 build_conflicts 保持同一套取值口径。
      var distinct = new Set(vis.map(function (a) {
        return a.value == null ? String(a.value_text) : String(a.value);
      })).size;
      var alive = distinct > 1; if (alive) live++;
      var n = document.createElement('div');
      n.className = 'cf' + (alive ? '' : ' muted');
      var kindText = { record_vs_record: '史料互相攻击',
        record_vs_scholarship: '记载 vs 现代考订',
        scholarly_divergence: '学界内部分歧' }[c.kind] || c.kind;
      var chips = (alive ? vis : items).map(function (a) {
        var s = SRC[a.source];
        return '<span class="cf-chip" style="--cc:' + s.color + '">' +
          (typeof a.value === 'number' ? fmt(a.value) : String(a.value_text).slice(0, 14)) + '</span>';
      }).join('');
      n.innerHTML = '<div class="cf-top"><span class="cf-sub">' + subjectName(c.subject) +
        ' · ' + c.predicate + '</span><span class="cf-spread">' +
        (alive ? (c.spread ? c.spread + '×' : distinct + ' 说') : '已消解') + '</span></div>' +
        '<div class="cf-kind">' + kindText + (alive ? '　' + vis.length + ' 种说法并存' :
          '　你的采信选择让它消失了，但矛盾并未被解决') +
        '</div><div class="cf-vals">' + chips + '</div>';
      n.addEventListener('click', function () { openModal(c, items); });
      box.appendChild(n);
    });
    document.getElementById('conflictCount').textContent = live + ' / ' + D.conflicts.length;
    document.getElementById('tabDot').style.display = live ? '' : 'none';
  }
  /* ═══════════ 研究线索（gap 的闭环）═══════════ */
  /* 缺口不该只是界面上一个灰点。每条 gap 断言携带 lead 块（缺什么 / 去哪找 /
     需要什么技能 / 验收标准），tools/leads.py 汇总成 data/leads.json，
     这里按当前切片过滤呈现——这是把「我们不知道什么」变成「谁可以来做」。 */
  var SKILL_COLOR = {
    '史料': '#8C6239', '古文': '#8C6239', '朝鲜语': '#2E7D8F', '满语': '#7B5C3E',
    'GIS': '#3E8E6E', '编程': '#5A3A6E', '设计': '#C77B30', '统计': '#2E7D8F'
  };
  function renderLeads() {
    var box = document.getElementById('leadList'); if (!box) return;
    var all = ((SD.leads || {}).leads) || [];
    var mine = all.filter(function (l) { return l.scene === sceneKey; });
    box.innerHTML = '';
    document.getElementById('leadCount').textContent = mine.length;
    var dot = document.getElementById('leadDot');
    if (dot) dot.style.display = mine.length ? '' : 'none';
    if (!mine.length) {
      box.innerHTML = '<div class="empty-hint">本切片暂无登记的研究线索。<br><br>' +
        '这多半不是因为没有缺口，而是因为缺口还没被写成 gap 断言。</div>';
      return;
    }
    mine.forEach(function (l) {
      var n = document.createElement('div');
      n.className = 'cf lead';
      // skills 理论上是数组（lint E13 守门），但前端不该因一条脏数据整页崩掉
      var sk = Array.isArray(l.skills) ? l.skills
             : (typeof l.skills === 'string' ? l.skills.split('/') : []);
      var chips = sk.map(function (s) {
        s = String(s).trim(); if (!s) return '';
        return '<span class="cf-chip" style="--cc:' + (SKILL_COLOR[s] || '#7A7466') + '">' + s + '</span>';
      }).join('');
      n.innerHTML = '<div class="cf-top"><span class="cf-sub">' + l.title + '</span>' +
        '<span class="cf-spread">' + (l.effort || '—') + '</span></div>' +
        '<div class="cf-kind">' + (l.missing || '') + '</div>' +
        (l.where ? '<div class="lead-where"><b>去哪找</b>' + l.where + '</div>' : '') +
        (l.accept ? '<div class="lead-where"><b>怎么算做完</b>' + l.accept + '</div>' : '') +
        '<div class="cf-vals">' + chips + '</div>' +
        '<div class="lead-foot">' + l.id +
        (l.issue_url ? ' · <a href="' + l.issue_url + '" target="_blank" rel="noopener">认领 →</a>' : '') +
        '</div>';
      box.appendChild(n);
    });
  }

  function subjectName(s) {
    var map = CFG.subject_names || META.subject_names || {};
    if (map[s]) return map[s];
    if (s.indexOf('person:') === 0) {
      var p = D.persons.filter(function (x) { return x.id === s.slice(7); })[0];
      return p ? p.name : s;
    }
    return s;
  }

  /* ═══════════ 检视 ═══════════ */
  function selectPlace(pid) {
    var p = PLACE[pid];
    state.ego = null;
    var list = visibleAssertions().filter(function (a) { return a.place === pid; });
    var sub = p.modern + (p.elev != null ? ' · 海拔 ' + p.elev + ' m' : '');
    state.selection = {
      type: 'place', title: p.name, sub: sub,
      intro: p.intro || null, aliases: p.aliases || null,
      significance: p.significance || null, note: p.note || null, list: list
    };
    goTab('inspect'); renderInspect();
  }
  function selectNode(id) {
    var n = NODE[id]; if (!n) return;
    if (n.kind === 'place') { selectPlace(id); return; }
    state.ego = id;
    state.personYear = { from: null, to: null };
    // 虚构/历史人物：以其为主体的结构化断言（subject = person:<id>）
    var list = visibleAssertions().filter(function (a) { return a.subject === 'person:' + id; });
    var actors = (D.events || []).filter(function (e) {
      return (e.actors || []).some(function (x) { return x.person === id; });
    });
    var net = (D.edges || []).filter(function (e) { return e.from === id || e.to === id; })
      .map(function (e) {
        var oid = e.from === id ? e.to : e.from;
        var o = NODE[oid];
        return { id: oid, name: o ? o.name : oid, rel: e.label, type: e.type,
          influence: (o && o.ref && o.ref.influence != null) ? o.ref.influence : 0 };
      });
    var gaps = list.filter(function (a) { return a.layer === 'gap'; });
    var stance = {};
    list.forEach(function (a) {
      var s = SRC[a.source];
      var party = (s && s.party) ? s.party : 'unknown';
      stance[party] = (stance[party] || 0) + 1;
    });
    var inf = (n.ref && n.ref.influence != null) ? n.ref.influence : 0;
    state.selection = {
      type: 'person', pid: id, name: n.name, intro: (n.ref && n.ref.intro) || null,
      influence: inf,
      sub: '（结构化断言 ' + list.length + ' 条 · 影响力 ' + inf + '）',
      list: list, actors: actors, net: net, stance: stance, gaps: gaps
    };
    state.personTab = 'assert';
    goTab('inspect'); renderInspect();
  }
  function selectEdge(ed) {
    var a = IS_ABSTRACT ? NODE[ed.from] : PLACE[ed.from];
    var b = IS_ABSTRACT ? NODE[ed.to] : PLACE[ed.to];
    var list = visibleAssertions().filter(function (x) {
      return x.place === ed.from || x.place === ed.to ||
        x.subject === 'person:' + ed.from || x.subject === 'person:' + ed.to;
    });
    state.selection = { type: 'edge', title: ed.label,
      sub: a.name + ' — ' + b.name, list: list };
    goTab('inspect'); renderInspect();
  }
  function selectAssertions(title, list) {
    state.selection = { type: 'ad-hoc', title: title, sub: '', list: list };
    renderInspect();
  }
  function selectRoute() {
    var rp = D.route_report || {}, rep = D.route_verdict || '';
    var ids = (D.route && D.route.assertion_ids) || CFG.route_assertions || [];
    var list = ids.map(function (id) {
      return D.assertions.filter(function (x) { return x.id === id; })[0];
    }).filter(Boolean);
    var sub = (rep ? rep + '<br><br>' : '') +
      (rp.total_li ? '全程约 ' + rp.total_li + ' 里，累计爬升 ' + rp.total_ascent_m + ' m；' : '') +
      (rp.strain != null ? '模型 ' + rp.model_days + ' 日 vs 史料 ' + rp.reported_days +
        ' 日 → 紧张度 ' + rp.strain + '（' + (rp.strain_label || '') + '）。' : '');
    state.selection = { type: 'route', title: (D.route.label || '进军路线'), sub: sub, list: list };
    goTab('inspect'); renderInspect();
  }
  function assertionCard(a) {
    var s = SRC[a.source], lm = LAYER_META[a.layer];
    var unver = a.quote_status === 'paraphrase_unverified';
    var gen = a.quote_status === 'generated';
    var quoteHtml;
    if (unver) quoteHtml = '<div class="as-quote as-quote-pa"><b>〔意译，未核〕</b>' + (a.quote || '') + '</div>';
    else if (gen) quoteHtml = '<div class="as-quote as-quote-gen"><b>〔推演〕</b>' + (a.quote || '') + '</div>';
    else quoteHtml = '<div class="as-quote">' + (a.quote || '') + '</div>';
    return '<div class="as" style="--lc:' + lm.color + ';--sc:' + s.color + '">' +
      '<div class="as-head"><span class="as-pred">' + a.predicate + '</span>' +
      '<span class="as-val">' + a.value_text + '</span></div>' +
      (a.quote ? quoteHtml : '') +
      '<div class="as-foot"><span class="as-src">《' + s.title + '》</span>' +
      '<span class="as-tag ' + a.layer + '">' + lm.name + '</span>' +
      (unver ? '<span class="as-tag unverified">意译未核</span>' : '') +
      (gen ? '<span class="as-tag inference">非史料</span>' : '') +
      '<span class="as-conf">置信 ' + a.confidence.toFixed(2) + '</span></div>' +
      (a.note ? '<div class="as-note">' + a.note + '</div>' : '') + '</div>';
  }
  function renderInspect() {
    var t = document.getElementById('inspectTitle');
    var box = document.getElementById('inspect');
    var sel = state.selection;
    if (!sel) { t.textContent = '检视';
      box.innerHTML = '<div class="empty-hint">点击地图上的地名或关系线，或任意冲突项。</div>'; return; }
    var lead = '';
    if (sel.type === 'place') {
      if (sel.intro) lead += '<div class="ent-intro">' + sel.intro + '</div>';
      else if (sel.note) lead += '<div class="ent-intro">' + sel.note + '</div>';
      if (sel.aliases) lead += '<div class="ent-meta">别名：' + sel.aliases + '</div>';
      if (sel.significance) lead += '<div class="ent-meta">意义：' + sel.significance + '</div>';
    }
    if (sel.type === 'person') {
      lead += personTabsHtml(sel);
      if (state.personTab && state.personTab !== 'assert') {
        t.innerHTML = sel.name + ' <span style="font-weight:400;font-size:10px;color:var(--ink-3)">' +
          sel.sub + '</span>';
        box.innerHTML = lead + personPaneHtml(sel, state.personTab);
        return;
      }
    }
    t.innerHTML = sel.title + (sel.sub ? ' <span style="font-weight:400;font-size:10px;color:var(--ink-3)">' +
      sel.sub + '</span>' : '');
    var live = sel.list.filter(function (a) { return state.sources.has(a.source) && state.layers.has(a.layer); });
    if (!live.length) {
      box.innerHTML = lead + '<div class="empty-hint">在当前采信范围内，此处没有任何断言。<br><br>' +
        '这不代表这里什么都没发生 —— 只代表你选的史料没有记它。</div>'; return;
    }
    box.innerHTML = lead + live.map(assertionCard).join('');
  }

  /* ── 人物视图：子页签 + 各页内容 ── */
  function personTabsHtml(sel) {
    var tabs = [
      ['assert', '断言', sel.list.length],
      ['traj', '轨迹', sel.actors.length],
      ['net', '关联人物', sel.net.length],
      ['impact', '事件影响', sel.actors.length],
      ['stance', '立场剖面', Object.keys(sel.stance).length],
      ['gap', '史料缺口', sel.gaps.length],
      ['cmp', '比较·反事实', 0]
    ];
    return '<div class="ptabbar">' + tabs.map(function (x) {
      return '<button class="ptab' + (state.personTab === x[0] ? ' on' : '') +
        '" data-ptab="' + x[0] + '">' + x[1] + (x[2] ? ' <i>' + x[2] + '</i>' : '') + '</button>';
    }).join('') + '</div>';
  }
  function personPaneHtml(sel, tab) {
    if (tab === 'traj') return personTrajHtml(sel);
    if (tab === 'net') return personNetHtml(sel);
    if (tab === 'impact') return personImpactHtml(sel);
    if (tab === 'stance') return personStanceHtml(sel);
    if (tab === 'gap') return personGapHtml(sel);
    if (tab === 'cmp') return personCmpHtml(sel);
    return '';
  }
  function personTrajHtml(sel) {
    var acts = sel.actors;
    if (!acts.length) return '<div class="empty-hint">该 world 未标注此人的事件参与者（actors），暂无轨迹。</div>';
    var hasYears = acts.some(function (e) { return typeof e.year === 'number'; });
    var f = state.personYear.from, t = state.personYear.to;
    var rows = acts.slice();
    if (hasYears && (f != null || t != null)) {
      rows = rows.filter(function (e) {
        var y = e.year; if (typeof y !== 'number') return true;
        if (f != null && y < f) return false;
        if (t != null && y > t) return false;
        return true;
      });
    }
    var filterHtml = hasYears
      ? '<div class="ent-filter">时间窗：<input id="pyrFrom" type="number" placeholder="起" value="' + (f != null ? f : '') +
        '"> – <input id="pyrTo" type="number" placeholder="止" value="' + (t != null ? t : '') +
        '"> <button class="ptab" data-pyr>应用</button> <button class="ptab" data-pyr-clr>清空</button></div>'
      : '<div class="ent-meta">该 world 未标注年份，时间窗未启用（可看全部事件序列）。</div>';
    var listHtml = rows.length
      ? rows.map(function (e) {
          var pl = e.place ? (PLACE[e.place] ? PLACE[e.place].name : e.place) : '';
          return '<div class="ent-row"><div class="ent-row-h">' + (e.era || '') + ' · ' + e.title +
            (pl ? ' <span class="ent-rel">@' + pl + '</span>' : '') + '</div>' +
            '<div class="ent-row-t">' + (e.text || '') + '</div></div>';
        }).join('')
      : '<div class="empty-hint">当前时间窗内无事件。</div>';
    return filterHtml + listHtml;
  }
  function personNetHtml(sel) {
    if (!sel.net.length) return '<div class="empty-hint">暂无关联人物（该 world 未建人物关系边）。</div>';
    // 点大小 = 史料记载量（influence）；点越密越大，往往说明该角色在相关区域影响力集中。
    var maxInf = Math.max.apply(null, sel.net.map(function (n) { return n.influence || 0; }).concat([1]));
    return sel.net.map(function (n) {
      var r = 7 + (n.influence / maxInf) * 20;
      return '<div class="ent-row ent-net" data-jump="' + n.id + '">' +
        '<span class="ent-dot" style="width:' + r.toFixed(0) + 'px;height:' + r.toFixed(0) + 'px"></span>' +
        '<div><div class="ent-row-h">' + n.name + ' <span class="ent-rel">' + (n.rel || '') + '</span></div>' +
        '<div class="ent-row-t">影响力（史料记载量）：' + (n.influence || 0) + '</div></div></div>';
    }).join('');
  }
  function personImpactHtml(sel) {
    if (!sel.actors.length) return '<div class="empty-hint">无事件关联，无法评估事件影响。</div>';
    return sel.actors.map(function (e) {
      var ev = (D.events || []).filter(function (x) { return x.id === e.id; })[0];
      var subj = ev ? ev.subject : null;
      var as = subj ? D.assertions.filter(function (a) {
        return a.subject === subj && state.sources.has(a.source) && state.layers.has(a.layer);
      }) : [];
      return '<div class="ent-row"><div class="ent-row-h">' + (e.era || '') + ' · ' + e.title + '</div>' +
        (as.length ? as.map(assertionCard).join('') : '<div class="ent-row-t">（无直接断言）</div>') + '</div>';
    }).join('');
  }
  function personStanceHtml(sel) {
    var keys = Object.keys(sel.stance);
    if (!keys.length) return '<div class="empty-hint">无立场数据。</div>';
    return keys.map(function (party) {
      return '<div class="ent-row"><div class="ent-row-h">' + party + '</div>' +
        '<div class="ent-row-t">涉及断言 ' + sel.stance[party] + ' 条（立场靠来源派生）</div></div>';
    }).join('');
  }
  function personGapHtml(sel) {
    if (!sel.gaps.length) return '<div class="empty-hint">关于此人暂无标定的史料缺口。</div>';
    return sel.gaps.map(assertionCard).join('');
  }
  function personCmpHtml(sel) {
    var br = (D.timeline || []).filter(function (x) { return x.kind === 'branch' || x.branch; });
    var tip = br.length ? ' 本 world 已含 ' + br.length + ' 条反事实分支，可在时间轴查看。' : '';
    return '<div class="empty-hint">比较模式与反事实推演为规划中功能（M6 演化引擎）。' + tip + '</div>';
  }
  function findAttr(el, attr) {
    while (el && el !== document) {
      if (el.getAttribute && el.getAttribute(attr)) return el;
      el = el.parentNode;
    }
    return null;
  }

  /* ═══════════ 冲突弹层 ═══════════ */
  function openModal(c, items) {
    document.getElementById('modalTitle').textContent = subjectName(c.subject) + ' · ' + c.predicate;
    var nums = items.filter(function (a) { return typeof a.value === 'number'; }).map(function (a) { return a.value; });
    var mx = nums.length ? Math.max.apply(null, nums) : 0;
    var lead = nums.length >= 2
      ? '同一个对象，' + items.length + ' 种记载，最高值是最低值的 <b>' + c.spread + '</b> 倍。系统不裁决哪一个是对的 —— 它只保证你看见全部。'
      : '同一件事，' + items.length + ' 种互相冲突的解释。注意每一方的立场：叙述者的位置决定了他看见什么。';
    var rows = items.map(function (a) {
      var s = SRC[a.source];
      var w = mx ? (typeof a.value === 'number' ? a.value / mx * 100 : 0) : 0;
      var dim = !(state.sources.has(a.source) && state.layers.has(a.layer));
      return '<div class="cmp-row" style="--sc:' + s.color + ';opacity:' + (dim ? .42 : 1) + '">' +
        '<div><div class="cmp-src-name">《' + s.title + '》</div>' +
        '<div class="cmp-src-meta">' + s.stance_label + '<br>' + s.distance_label + '</div>' +
        (dim ? '<div class="cmp-src-meta" style="color:#B23A48;margin-top:5px">未采信</div>' : '') + '</div>' +
        '<div><div class="cmp-val">' + a.value_text +
        (typeof a.value === 'number' ? ' <small>' + fmt(a.value) + '</small>' : '') +
        ' <small>置信 ' + a.confidence.toFixed(2) + '</small></div>' +
        (mx ? '<div class="cmp-bar"><i style="width:' + w + '%"></i></div>' : '') +
        '<div class="cmp-quote">' + (a.quote || '') + '</div>' +
        '<div class="cmp-note">' + (a.note || '') + '</div></div></div>';
    }).join('');
    document.getElementById('modalBody').innerHTML = '<div class="modal-lead">' + lead +
      '</div><div class="cmp">' + rows + '</div>';
    document.getElementById('modal').style.display = 'flex';
  }
  document.getElementById('modalClose').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
  });
  document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target === this) this.style.display = 'none';
  });

  /* ═══════════ 页签 / 抽屉 ═══════════ */
  function goTab(id) {
    state.tab = id;
    document.querySelectorAll('.tab').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-tab') === id);
    });
    document.querySelectorAll('.tabpane').forEach(function (p) {
      p.classList.toggle('active', p.getAttribute('data-pane') === id);
    });
    if (window.innerWidth <= 1080) openDrawer('right');
  }
  document.querySelectorAll('.tab').forEach(function (b) {
    b.addEventListener('click', function () { goTab(b.getAttribute('data-tab')); });
  });
  // 人物视图子页签 / 关联人物跳转 / 时间窗
  document.getElementById('inspect').addEventListener('click', function (e) {
    var pt = findAttr(e.target, 'data-ptab');
    if (pt) { state.personTab = pt.getAttribute('data-ptab'); renderInspect(); return; }
    var jp = findAttr(e.target, 'data-jump');
    if (jp) { selectNode(jp.getAttribute('data-jump')); return; }
    var pyr = findAttr(e.target, 'data-pyr');
    if (pyr) {
      var fEl = document.getElementById('pyrFrom'), tEl = document.getElementById('pyrTo');
      var fv = fEl && fEl.value !== '' ? parseInt(fEl.value, 10) : null;
      var tv = tEl && tEl.value !== '' ? parseInt(tEl.value, 10) : null;
      state.personYear = { from: isNaN(fv) ? null : fv, to: isNaN(tv) ? null : tv };
      renderInspect(); return;
    }
    if (findAttr(e.target, 'data-pyr-clr')) { state.personYear = { from: null, to: null }; renderInspect(); }
  });
  var scrim = document.getElementById('scrim');
  function openDrawer(which) {
    var L = document.getElementById('panelLeft'), R = document.getElementById('panelRight');
    L.classList.toggle('open', which === 'left');
    R.classList.toggle('open', which === 'right');
    document.getElementById('btnLeft').classList.toggle('on', which === 'left');
    document.getElementById('btnRight').classList.toggle('on', which === 'right');
    scrim.classList.toggle('on', !!which);
  }
  document.getElementById('btnLeft').addEventListener('click', function () {
    openDrawer(document.getElementById('panelLeft').classList.contains('open') ? null : 'left');
  });
  document.getElementById('btnRight').addEventListener('click', function () {
    openDrawer(document.getElementById('panelRight').classList.contains('open') ? null : 'right');
  });
  scrim.addEventListener('click', function () { openDrawer(null); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { document.getElementById('modal').style.display = 'none'; openDrawer(null); }
    if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    if (e.key === '+' || e.key === '=') { view.w /= 1.45; applyView(); }
    if (e.key === '-' || e.key === '_') { view.w *= 1.45; applyView(); }
    if (e.key === '0') { fitView(); applyView(); }
  });
  var rzTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(rzTimer);
    rzTimer = setTimeout(function () {
      var oldCx = view.x + view.w / 2, oldCy = view.y + view.h / 2, oldW = view.w;
      measure();
      var b = dataBounds(), pad = 50, ar = cw / ch;
      var bw = (b.x1 - b.x0) + pad * 2, bh = (b.y1 - b.y0) + pad * 2;
      fitW = (bw / bh > ar) ? bw : bh * ar;
      view.w = Math.min(fitW * 1.6, Math.max(MIN_W, oldW));
      view.h = view.w * (ch / cw); view.x = oldCx - view.w / 2; view.y = oldCy - view.h / 2;
      applyView();
    }, 110);
  });

  /* ═══════════ 边型图例 ═══════════ */
  function renderEdgeLegend() {
    var box = document.getElementById('mapLegend'); if (!box) return;
    box.innerHTML = '';
    // 图例数据驱动：只画本 world 实际存在的边类型——没有互市/部族同盟的 world 自然不显示这两栏。
    var LEGEND = (D.edge_types && D.edge_types.length) ? D.edge_types : EDGE_LEGEND;
    var present = {};
    D.edges.forEach(function (e) { if (e.type) present[e.type] = 1; });
    LEGEND.forEach(function (it) {
      if (!present[it.k]) return;
      var dash = it.dash || null;
      var n = document.createElement('div'); n.className = 'lg-item';
      n.innerHTML = '<i class="lg-line' + (dash ? ' lg-dash' : '') +
        '" style="--c:' + it.color + '"></i>' + it.name;
      box.appendChild(n);
    });
    // 兜底：存在 edge_types 未声明的 type 时，补一个「未分类」栏，避免静默丢信息。
    var hasUnknown = Object.keys(present).some(function (k) {
      return !LEGEND.some(function (t) { return t.k === k; });
    });
    if (hasUnknown) {
      var n = document.createElement('div'); n.className = 'lg-item';
      n.innerHTML = '<i class="lg-line" style="--c:#9A9384"></i>未分类';
      box.appendChild(n);
    }
  }

  /* ═══════════ 动态顶栏 / 面板标题 ═══════════ */
  (function fillTitles() {
    var name = META.title || sceneKey;
    var tb = document.querySelector('#topbar .title b'); if (tb) tb.textContent = name;
    var ts = document.querySelector('#topbar .title .sub'); if (ts) ts.textContent = META.subtitle || '';
    var phL = document.querySelector('#panelLeft .panel-head span'); if (phL) phL.textContent = name + ' · 数据层';
    var phR = document.querySelector('#panelRight .panel-head span'); if (phR) phR.textContent = name + ' · 分析';
    var back = document.getElementById('backLink');
    if (back) {
      back.textContent = '← ' + (META.back || '枢纽');
      if (!META.back || META.back === '枢纽') back.href = 'index.html';
    }
    var pn = document.querySelector('.parties-note');
    var note = CFG.parties_note || META.parties_note;
    if (pn && note) pn.textContent = note;
  })();

  /* ═══════════ 统一时间轴 · 控制层联动 ═══════════ */
  function drawControl() {
    if (!window.ControlLayer) return;
    if (!IS_ABSTRACT && state.control.on && ControlLayer.isReady()) {
      // 跨时间线对比模式：主线（棋盘虚线）vs 分支（实线）
      if (state.control.compare && state.timeline !== 'main'
          && ControlLayer.drawDiff && _branchCtrlData) {
        ControlLayer.drawDiff(state.control.year, state.control.scope, _branchCtrlData);
      } else if (state.control.compare && ControlLayer.drawMulti) {
        ControlLayer.drawMulti(state.control.year, state.control.scope);
      } else {
        ControlLayer.draw(state.control.year, state.control.scope);
      }
      renderControlLegend();
    } else {
      ControlLayer.clear();
      var lg = document.getElementById('ctrlLegend');
      if (lg) lg.innerHTML = '';
    }
  }

  var _branchCtrlData = null;  // v0.33 分支控制权数据（跨时间线对比用）
  function renderControlLegend() {
    var lg = document.getElementById('ctrlLegend');
    if (!lg) return;
    var parts = (window.ControlLayer.activeParties
      ? window.ControlLayer.activeParties() : []).map(function (p) { return { p: p, t: p }; });
    var nation = state.control.scope === 'nation';
    var tallyMap = nation ? ControlLayer.tally(state.control.year) : null;
    var total = 0;
    if (tallyMap) Object.keys(tallyMap).forEach(function (k) { total += tallyMap[k]; });
    lg.innerHTML = parts.map(function (x) {
      var c = ControlLayer.partyColor(x.p) || [120, 120, 120];
      var label = x.t;
      if (nation && tallyMap) {
        var n = tallyMap[x.p] || 0;
        if (total) label += ' ' + n;
      }
      return '<i style="background:rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')"></i>' + label;
    }).join('');
    if (nation) lg.innerHTML += ' 共 ' + total;
  }
  function wireControl() {
    var panel = document.getElementById('controlPanel');
    if (!panel || IS_ABSTRACT || !window.ControlLayer || !ControlLayer.isReady()) {
      if (panel) panel.style.display = 'none';
      return;
    }
    panel.style.display = '';
    var onBox = document.getElementById('ctrlOn');
    var playBtn = document.getElementById('ctrlPlay');
    var compareBox = document.getElementById('ctrlCompare');
    var cy = ControlLayer.years();

    if (state.control.year < cy[0] || state.control.year > cy[1]) state.control.year = cy[0];

    // 虚实对比开关
    if (compareBox) {
      compareBox.checked = state.control.compare;
      compareBox.addEventListener('change', function () {
        state.control.compare = compareBox.checked;
        drawControl();
      });
    }

    // 控制层开关
    if (onBox) {
      onBox.checked = state.control.on;
      onBox.addEventListener('change', function () {
        state.control.on = onBox.checked;
        drawControl();
      });
    }

    document.querySelectorAll('.cp-scope').forEach(function (b) {
      b.addEventListener('click', function () {
        state.control.scope = b.getAttribute('data-scope');
        document.querySelectorAll('.cp-scope').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        drawControl();
      });
    });

    if (playBtn) playBtn.addEventListener('click', function () {
      if (state.control.playing) { stopControl(); return; }
      if (!state.control.on) { state.control.on = true; if (onBox) onBox.checked = true; }
      state.control.playing = true;
      playBtn.textContent = '❚❚';
      var lo = cy[0], hi = cy[1];
      if (state.control.year >= hi) state.control.year = lo;
      playBtn._t = setInterval(function () {
        if (state.control.year >= hi) { stopControl(); return; }
        state.control.year++;
        syncTimeline(state.control.year);
        drawControl();
      }, 900);
    });
  }
  // v0.31 分支时间线切换器（IIFE 顶层，与 wireControl/wireChgis 同级）
  function wireTimeline() {
    var tls = D.timelines;
    var row = document.getElementById('timelineRow');
    var sel = document.getElementById('timelineSel');
    if (!tls || Object.keys(tls).length <= 1 || !row || !sel) return;
    row.style.display = '';
    var ids = Object.keys(tls);
    sel.innerHTML = ids.map(function (id) {
      return '<option value="' + id + '"' + (id === state.timeline ? ' selected' : '') + '>'
        + tls[id].label + '</option>';
    }).join('');
    sel.addEventListener('change', function () {
      state.timeline = sel.value;
      // v0.32：切换分支时热加载模拟控制权数据
      if (state.timeline !== 'main' && D.scene_id && window.ControlLayer) {
        var simUrl = '../data/' + D.scene_id + '/control_sim_' + state.timeline + '.json';
        fetch(simUrl).then(function (r) { if (r.ok) return r.json(); throw new Error('no sim'); })
          .then(function (sim) {
            _branchCtrlData = sim.control;  // 存分支数据供 drawDiff 使用
            ControlLayer.reloadControl(sim.control, sim._years);
            drawControl();
            refresh();
          }).catch(function () {
            _branchCtrlData = null;
            ControlLayer.reloadControl(D.control, D.control_years);
            drawControl();
            refresh();
          });
      } else {
        if (state.timeline === 'main' && window.ControlLayer) {
          ControlLayer.reloadControl(D.control, D.control_years);
          drawControl();
        }
        refresh();
      }
    });
  }

  function stopControl() {
    state.control.playing = false;
    var pb = document.getElementById('ctrlPlay');
    if (pb) pb.textContent = '▶';
    if (pb && pb._t) { clearInterval(pb._t); pb._t = null; }
  }

  /* ═══════════ 刷新 ═══════════ */
  function refresh() {
    syncStateT();  // v0.27：事件高亮跟随当前 time year
    renderEdgeLegend(); renderSources(); renderLayers(); renderTerrainCtl(); renderEventList();
    renderSiblings(); renderEventTimeline(); drawDynamic(); drawTerrain();
    renderEvents(); renderParties(); renderFactions(); renderConflicts(); renderLeads(); renderInspect();
    var vis = visibleAssertions().length;
    document.getElementById('statVisible').textContent = vis;
  }

  /* ═══════════ 启动 ═══════════ */
  measure(); fitView(); tImg = buildTerrainImage(); initMap();
  if (!IS_ABSTRACT && window.ControlLayer) {
    ControlLayer.setup({
      cv: controlCv, px: px, py: py,
      getView: function () { return view; },
      getCw: function () { return cw; },
      getDpr: function () { return window.devicePixelRatio || 1; },
      sceneData: D,                    // v0.24：场景自带 control.json 时用它；辽东切片 fallback 全局
      partyColors: VOCAB.party_colors  // v0.24c：控制层配色单一真值（语境包）
    });
  }
  if (!IS_ABSTRACT && window.ChgisLayer) {
    ChgisLayer.setup({
      cv: chgisCv, px: px, py: py,
      getView: function () { return view; },
      getCw: function () { return cw; },
      getCh: function () { return ch; },
      getDpr: function () { return window.devicePixelRatio || 1; },
      url: '../data/external/chgis/converted_ogr/all.geojson',
      filterDs: state.chgis.ds,
      filterYear: null,
      filterPeriod: state.chgis.period,
      unproject: function (cx, cy) {                 // 屏幕坐标 → 经纬度
        var m = screenToMap(cx, cy);
        return [ LON0 + m.x / W * (LON1 - LON0), LAT1 - m.y / H * (LAT1 - LAT0) ];
      },
      onReady: function (n) {
        var st = document.getElementById('chgisStatus');
        if (st) st.textContent = '已加载 ' + n + ' 个政区面';
        if (state.chgis.on) ChgisLayer.repaint();
        renderChgisLegend();
      },
      onRepaint: function () { renderChgisLegend(); },
      onError: function () {
        var st = document.getElementById('chgisStatus');
        if (st) st.textContent = '加载失败（请通过 http 服务器打开）';
      }
    });
  }
  // 战例叠加层：严格按当前切片隔离。
  // 依据用户原则（2026-08-13）：有联系（用户提出 or 史料提及）才能同屏查看；
  // 否则绝不跨场景堆叠——唐/三大战役页不再出现萨尔浒，反之亦然。
  // 加载范围 = 当前场景 + 仅其显式声明的相关场景（META.related，默认空 = 仅本切片）。
  if (!IS_ABSTRACT && window.BattleLayer) {
    var relatedScenes = (META.related && META.related.length)
      ? META.related.filter(function (k) { return SD.scenes[k]; }) : [];
    var battleScenes = [sceneKey].concat(relatedScenes);
    var primaryPlaces = {};
    battleScenes.forEach(function (k) {
      var s = SD.scenes[k]; var pp = s && (s.primary_place || (s.meta && s.meta.primary_place)); if (pp) primaryPlaces[k] = pp;
    });
    BattleLayer.setup({
      cv: battleCv, px: px, py: py,
      getView: function () { return view; },
      getCw: function () { return cw; },
      getCh: function () { return ch; },
      getDpr: function () { return window.devicePixelRatio || 1; },
      base: '../data/',
      scenes: battleScenes,
      primaryPlaces: primaryPlaces,
      seedPlaces: (D.places || []),
      currentScene: sceneKey,
      showRoutes: state.battle.routes,
      filterYear: null,
      routeOrd: null,
      unproject: function (cx, cy) {
        var m = screenToMap(cx, cy);
        return [ LON0 + m.x / W * (LON1 - LON0), LAT1 - m.y / H * (LAT1 - LAT0) ];
      },
      onReady: function (n) {
        var st = document.getElementById('battleStatus');
        if (st) st.textContent = '已加载 ' + n + ' 个战例（本切片：' + (META.title || sceneKey) + (relatedScenes.length ? ' + ' + relatedScenes.length + ' 个相关切片' : '') + '）';
        if (state.battle.on) BattleLayer.repaint();
        buildRouteTimeline();   // 数据就绪后构建底部独立「行军路线时间轴」
        renderBattleLegend();
      },
      onRepaint: function () { renderBattleLegend(); },
      onError: function () {
        var st = document.getElementById('battleStatus');
        if (st) st.textContent = '加载失败（请通过 http 服务器打开）';
      }
    });
  }
  // 初始化年份：有控制层数据时取其下界，否则取首个事件年
  if (!IS_ABSTRACT && window.ControlLayer && ControlLayer.isReady()) {
    var cy = ControlLayer.years();
    state.control.year = cy[0];
  } else if (D.events && D.events.length) {
    state.control.year = D.events[0].year || 1621;
  }
  applyView(false); wireControl(); wireTimeline(); wireChgis(); wireBattle(); wireRouteTimeline(); refresh();

  function wireChgis() {
    var box = document.getElementById('chgisToggle');
    if (!box) return;
    box.checked = state.chgis.on;
    box.addEventListener('change', function () {
      state.chgis.on = box.checked;
      if (state.chgis.on) ChgisLayer.repaint(); else ChgisLayer.clear();
      var st = document.getElementById('chgisStatus');
      if (st) st.textContent = box.checked ? '已显示' : '已隐藏';
    });
    var dsSel = document.getElementById('chgisDs');
    var periodRow = document.getElementById('chgisPeriodRow');
    var periodSel = document.getElementById('chgisPeriod');
    function syncPeriodRow() {
      if (!periodRow) return;
      periodRow.style.display = (dsSel && dsSel.value === 'T-S') ? 'flex' : 'none';
    }
    if (dsSel) {
      dsSel.value = state.chgis.ds;
      syncPeriodRow();
      dsSel.addEventListener('change', function () {
        state.chgis.ds = dsSel.value;
        if (dsSel.value !== 'T-S') { state.chgis.period = 'all'; if (periodSel) periodSel.value = 'all'; }
        syncPeriodRow();
        if (state.chgis.on && window.ChgisLayer) {
          ChgisLayer.setFilter({ ds: state.chgis.ds, period: state.chgis.period });
        }
      });
    }
    if (periodSel) {
      periodSel.value = state.chgis.period;
      periodSel.addEventListener('change', function () {
        state.chgis.period = periodSel.value;
        if (state.chgis.on && window.ChgisLayer) ChgisLayer.setFilter({ period: state.chgis.period });
      });
    }
    var ys = document.getElementById('chgisYearSync');
    if (ys) {
      ys.checked = state.chgis.yearSync;
      ys.addEventListener('change', function () {
        state.chgis.yearSync = ys.checked;
        if (!state.chgis.on || !window.ChgisLayer) return;
        ChgisLayer.setFilter({ year: ys.checked ? state.control.year : null });
      });
    }
    // 点击地图：优先查战例，其次查政区（拖拽后不触发；与地图 pan 不冲突）
    wrap.addEventListener('click', function (e) {
      if (e.target && e.target.closest && e.target.closest(UI_SEL)) return;
      if (_lastDragMoved > 4) { _lastDragMoved = 0; return; }
      var lon = null, lat = null;
      try {
        var m = screenToMap(e.clientX, e.clientY);
        lon = LON0 + m.x / W * (LON1 - LON0); lat = LAT1 - m.y / H * (LAT1 - LAT0);
      } catch (x) { lon = null; }
      if (lon != null) {
        if (state.battle.on && window.BattleLayer && BattleLayer.isReady()) {
          var bh = BattleLayer.hitTest(lon, lat);
          if (bh) { hideChgisTip(); showBattleTip(bh, e.clientX, e.clientY); return; }
        }
        if (state.chgis.on && window.ChgisLayer && ChgisLayer.isReady()) {
          var props = ChgisLayer.hitTest(lon, lat);
          if (props) { hideBattleTip(); showChgisTip(props, e.clientX, e.clientY); return; }
        }
      }
      hideBattleTip(); hideChgisTip();
    });
  }

  function wireBattle() {
    var box = document.getElementById('battleToggle');
    if (!box) return;
    // 数据驱动块标题：用本切片标题，杜绝硬编码「萨尔浒之战」串场
    var bt = document.getElementById('battleTitle');
    if (bt) bt.textContent = (META.layer_title || ('战例叠加 · ' + (META.title || sceneKey)));
    box.checked = state.battle.on;
    box.addEventListener('change', function () {
      state.battle.on = box.checked;
      if (state.battle.on) BattleLayer.repaint(); else BattleLayer.clear();
      var st = document.getElementById('battleStatus');
      if (st) st.textContent = box.checked ? '已显示' : '已隐藏';
      buildRouteTimeline();   // 隐藏战例时同步收起底部行军路线时间轴
      renderBattleLegend();
    });
    var rt = document.getElementById('battleRoutes');
    if (rt) {
      rt.checked = state.battle.routes;
      rt.addEventListener('change', function () {
        state.battle.routes = rt.checked;
        if (state.battle.on && window.BattleLayer) BattleLayer.setShowRoutes(rt.checked);
        buildRouteTimeline();   // 行军路线显隐联动底部独立时间轴
        renderBattleLegend();
      });
    }
  }

  /* ═══════════ 行军路线时间轴（v0.34b，与疆域时间轴完全独立） ═══════════
   *  - 刻度来自当前场景 routes.json.timeline（按日期），与「疆域」滑块解耦。
   *  - 点击刻度 / 播放 → BattleLayer.setRouteDate(ord) 让路线按日期生长；
   *    地图路线图标上的年份固定为战争发生年（battle_layer 内绘制），绝不随疆域变化。 */
  var routePlay = { timer: null };
  function stopRoutePlay() {
    if (routePlay.timer) { clearTimeout(routePlay.timer); routePlay.timer = null; }
    var pb = document.getElementById('rtPlay'); if (pb) pb.textContent = '▶';
  }
  function setRouteDate(ord) {
    if (window.BattleLayer) BattleLayer.setRouteDate(ord);
    updateRouteDateLabel(ord);
  }
  function markRouteNow(ord) {
    var track = document.getElementById('rtTrack'); if (!track) return;
    var nodes = track.querySelectorAll('.tl-node');
    nodes.forEach(function (n) {
      var isFull = n.getAttribute('data-full') === '1';
      var on = (ord == null && isFull) || (ord != null && !isFull && (+n.getAttribute('data-ord') === +ord));
      n.classList.toggle('now', !!on);
    });
  }
  // 年份/日期格式化：支持公元前（"B260"=前260，"B260-07"=前260年七月）与公元（"1619-04-14"）。
  function fmtYear(y) {
    if (y == null) return '';
    return y < 0 ? ('公元前' + (-y) + '年') : (y + '年');
  }
  function fmtDate(s) {
    if (!s) return '';
    var isBc = /^B/.test(s);
    var core = isBc ? s.slice(1) : s;            // 去掉 B
    var parts = core.split('-');                 // [年,月,日]
    var y = +parts[0], mo = parts[1] ? +parts[1] : null, d = parts[2] ? +parts[2] : null;
    var out = (y < 0 ? '公元前' + (-y) : y) + '年';
    if (mo != null) out += mo + '月';
    if (d != null) out += d + '日';
    return out;
  }
  function updateRouteDateLabel(ord) {
    var lab = document.getElementById('rtDateLabel');
    var dt = document.getElementById('rtDate');
    var meta = window.BattleLayer && BattleLayer.getRouteMeta(sceneKey);
    if (!meta || !meta.ready) { if (lab) lab.textContent = '—'; if (dt) dt.textContent = '—'; return; }
    if (ord == null) {
      var last = meta.timeline[meta.timeline.length - 1];
      if (lab) lab.textContent = last ? (last.label || '全程') : '全程';
      if (dt) dt.textContent = last ? last.at : '全程';
      return;
    }
    var cur = null;
    for (var i = 0; i < meta.timeline.length; i++) { if (meta.timeline[i].ord === +ord) { cur = meta.timeline[i]; break; } }
    if (lab) lab.textContent = cur ? (cur.label || cur.era || '') : '';
    if (dt) dt.textContent = cur ? fmtDate(cur.at) : String(ord);
  }
  function buildRouteTimeline() {
    var strip = document.getElementById('routeTimeline');
    var track = document.getElementById('rtTrack');
    var eraEl = document.getElementById('rtEra');
    var badge = document.getElementById('rtYearBadge');
    if (!strip || !track) return;
    var meta = window.BattleLayer && BattleLayer.getRouteMeta(sceneKey);
    // 无数据、或「显示行军路线」未勾选 → 收起整条时间轴
    if (!meta || !meta.ready || !meta.timeline.length || !(state.battle.on && state.battle.routes)) {
      strip.style.display = 'none';
      return;
    }
    strip.style.display = '';
    eraEl.textContent = (META.timeline_title || '行军路线时间轴') + (meta.year != null ? '（' + fmtYear(meta.year) + '）' : '');
    if (badge) { badge.style.display = ''; badge.textContent = (meta.year != null ? fmtYear(meta.year) : ''); }
    var n = meta.timeline.length;
    track.innerHTML = '';
    meta.timeline.forEach(function (t, i) {
      var node = document.createElement('div');
      var cls = 'tl-node'; if (t.key) cls += ' key';
      node.className = cls;
      node.setAttribute('data-ord', t.ord);
      node.style.left = (n > 1 ? (i / (n - 1) * 100) : 50) + '%';
      if (i === 0) node.style.transform = 'translate(-14px, -50%)';
      else if (i === n - 1) node.style.transform = 'translate(calc(-100% + 14px), -50%)';
      else node.style.transform = 'translate(-50%, -50%)';
      node.innerHTML = '<div class="tl-dot"></div><div class="tl-cap">' + (t.era || t.at) + '</div>';
      node.title = (t.label || '') + ' · ' + t.at;
      track.appendChild(node);
    });
    updateRouteDateLabel(null);
    markRouteNow(null);
  }
  function wireRouteTimeline() {
    var strip = document.getElementById('routeTimeline');
    var track = document.getElementById('rtTrack');
    var play = document.getElementById('rtPlay');
    var full = document.getElementById('rtFull');
    if (!strip || !track) return;
    track.addEventListener('click', function (ev) {
      var node = ev.target && ev.target.closest ? ev.target.closest('.tl-node') : null;
      if (!node) return;
      if (node.getAttribute('data-full') === '1') { stopRoutePlay(); setRouteDate(null); markRouteNow(null); return; }
      var ord = +node.getAttribute('data-ord');
      stopRoutePlay();
      setRouteDate(ord); markRouteNow(ord);
    });
    if (full) full.addEventListener('click', function () { stopRoutePlay(); setRouteDate(null); markRouteNow(null); });
    if (play) play.addEventListener('click', function () {
      var meta = window.BattleLayer && BattleLayer.getRouteMeta(sceneKey);
      if (!meta || !meta.ready || !meta.timeline.length) return;
      if (routePlay.timer) { stopRoutePlay(); return; }
      play.textContent = '⏸';
      var i = 0;
      var step = function () {
        if (!routePlay.timer) return;
        if (i >= meta.timeline.length) { setRouteDate(null); markRouteNow(null); stopRoutePlay(); return; }
        var ord = meta.timeline[i].ord;
        setRouteDate(ord); markRouteNow(ord);
        i++;
        routePlay.timer = setTimeout(step, 950);
      };
      routePlay.timer = setTimeout(step, 0);
    });
  }

  // 反投影（屏幕→经纬度）已在 ChgisLayer.setup 的 unproject 注入；
  // 地图 click 用同样的 screenToMap + 逆投影做命中检测。
  function renderChgisLegend() {
    var el = document.getElementById('chgisLegend');
    if (!el) return;
    if (!state.chgis.on || !window.ChgisLayer || !ChgisLayer.isReady()) { el.style.display = 'none'; return; }
    var items = ChgisLayer.getLegend();
    if (!items.length) { el.style.display = 'none'; return; }
    var html = '<div class="lg-title">历史政区图例</div>';
    items.forEach(function (it) {
      var c = it.color;
      html += '<div class="lg-row"><span class="lg-sw" style="background:rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')"></span>' + it.label + '</div>';
    });
    el.innerHTML = html;
    el.style.display = 'block';
  }

  function showChgisTip(props, cx, cy) {
    var el = document.getElementById('chgisTip');
    if (!el) return;
    var nm = props.NAME_CH || props.NAME_PY || '—';
    var type = props.TYPE_CH || props.TYPE_PY || '';
    var lev = [props.LEV1_CH, props.LEV2_CH, props.LEV3_CH].filter(Boolean).join(' / ');
    var dyn = props.DYN_PY || '';
    var cn = (window.ChgisLayer && ChgisLayer.DYN_CN && ChgisLayer.DYN_CN[dyn]) || dyn || '—';
    var per = (props.CHGIS_DS === 'T-S' && window.ChgisLayer && ChgisLayer.PERIOD_CN)
      ? ChgisLayer.PERIOD_CN[periodOfBeg(props.BEG_YR)] || '' : '';
    var yr = (props.BEG_YR != null ? props.BEG_YR : '?') + '–' + (props.END_YR != null ? props.END_YR : '?');
    var ds = { '1820': '1820 清嘉庆', '1911': '1911 清末', 'T-S': '唐宋及历代' }[props.CHGIS_DS] || props.CHGIS_DS || '';
    var html = '<div class="tip-h"><b>' + nm + '</b>' + (type ? ' <span class="tip-t">' + type + '</span>' : '') + '</div>'
      + '<div class="tip-r">朝代：' + cn + (per ? '（' + per + '）' : '') + '</div>'
      + (lev ? '<div class="tip-r">层级：' + lev + '</div>' : '')
      + '<div class="tip-r">存续：' + yr + '</div>'
      + '<div class="tip-r">数据集：' + ds + '</div>';
    el.innerHTML = html;
    el.style.display = 'block';
    var wrapRect = wrap.getBoundingClientRect();
    var x = cx - wrapRect.left + 12, y = cy - wrapRect.top + 12;
    var tw = el.offsetWidth, th = el.offsetHeight;
    if (x + tw > wrapRect.width) x = cx - wrapRect.left - tw - 12;
    if (y + th > wrapRect.height) y = wrapRect.height - th - 6;
    if (y < 0) y = 6;
    el.style.left = x + 'px'; el.style.top = y + 'px';
    el.onclick = function (ev) { ev.stopPropagation(); };
  }
  function hideChgisTip() {
    var el = document.getElementById('chgisTip');
    if (el) el.style.display = 'none';
  }

  // ══════════ 战例图层：图例 + 点击属性卡 ══════════
  // 图例完全数据驱动：遍历 BattleLayer.getLegend() 返回的类别（来自本切片 vocab.legend，
  // 无配置则按战例 winner/side 自动派生），不硬编码任何阵营/胜负文字。
  function renderBattleLegend() {
    var el = document.getElementById('battleLegend');
    if (!el) return;
    if (!state.battle.on || !window.BattleLayer || !BattleLayer.isReady()) { el.style.display = 'none'; return; }
    var L = BattleLayer.getLegend();
    if (!L) { el.style.display = 'none'; return; }
    var html = '<div class="lg-title">' + (META.layer_title ? (META.layer_title + '图例') : '战例图例') + '</div>';
    if (!L.battles.length && !L.routes.length) {
      html += '<div class="lg-note">' + (META.empty_layer_note || '本切片暂无叠加数据（接战点 / 河道 / 路线）。') + '</div>';
    } else {
      L.battles.forEach(function (c) {
        html += '<div class="lg-row"><span class="lg-sw" style="background:' + c.color + '"></span>' + c.label + ' · 接战 ' + c.count + '</div>';
      });
      L.routes.forEach(function (c) {
        html += '<div class="lg-row"><span class="lg-sw lg-dash" style="background:' + c.color + '"></span>' + c.label + ' · ' + c.count + '</div>';
      });
    }
    html += '<div class="lg-note">共 ' + L.totalEng + ' 叠加点 · ' + L.totalEv + ' 事件标记 · ' + L.totalRoutes + ' 路线（仅当前切片，不跨场景叠加）</div>';
    el.innerHTML = html;
    el.style.display = 'block';
  }

  function showBattleTip(bh, cx, cy) {
    var el = document.getElementById('battleTip');
    if (!el) return;
    var html = '';
    if (bh.type === 'engagement') {
      var e = bh.data;
      var win = e.winner === 'jin' ? '<span style="color:' + BattleLayer.COL.jin + '">后金胜</span>'
        : e.winner === 'ming' ? '<span style="color:' + BattleLayer.COL.ming + '">明胜</span>'
          : '<span style="color:' + BattleLayer.COL.none + '">未接战</span>';
      html += '<div class="tip-h"><b>' + (e.name || '') + '</b> <span class="tip-t">叠加点</span></div>';
      html += '<div class="tip-r">日期：' + (e.at || e.year || '') + ' ｜ ' + win + '</div>';
      if (e.sides && e.sides.length) {
        e.sides.forEach(function (s) {
          var who = (BattleLayer.SIDE_CN && BattleLayer.SIDE_CN[s.side]) || s.side || '';
          var ratio = (s.committed_ratio != null) ? Math.round(s.committed_ratio * 100) + '%' : '—';
          var fat = s.fatigue || '';
          var cm = s.commander ? '主将 ' + s.commander : '';
          html += '<div class="tip-r">' + who + '：投入 ' + ratio + (fat ? ' · ' + fat : '') + (cm ? ' · ' + cm : '') + '</div>';
        });
      }
      if (e.outcome) html += '<div class="tip-r tip-out">' + e.outcome + '</div>';
    } else {
      var ev = bh.data;
      html += '<div class="tip-h"><b>' + (ev.title || '') + '</b> <span class="tip-t">' + (ev.kind || '战事') + '</span></div>';
      html += '<div class="tip-r">年份：' + (ev.year != null ? ev.year : '') + (ev.fallback ? ' ｜ 坐标取本城' : '') + '</div>';
      if (ev.text) html += '<div class="tip-r tip-out">' + ev.text + '</div>';
    }
    el.innerHTML = html;
    el.style.display = 'block';
    var wrapRect = wrap.getBoundingClientRect();
    var x = cx - wrapRect.left + 12, y = cy - wrapRect.top + 12;
    var tw = el.offsetWidth, th = el.offsetHeight;
    if (x + tw > wrapRect.width) x = cx - wrapRect.left - tw - 12;
    if (y + th > wrapRect.height) y = wrapRect.height - th - 6;
    if (y < 0) y = 6;
    el.style.left = x + 'px'; el.style.top = y + 'px';
    el.onclick = function (ev) { ev.stopPropagation(); };
  }
  function hideBattleTip() {
    var el = document.getElementById('battleTip');
    if (el) el.style.display = 'none';
  }
  function periodOfBeg(v) {
    var n = parseInt(v, 10);
    if (isNaN(n)) return 'other';
    if (n >= -206 && n < 220) return 'han';
    if (n >= 581 && n < 618) return 'sui';
    if (n >= 618 && n < 907) return 'tang';
    if (n >= 960 && n < 1280) return 'song';
    return 'other';
  }
})();
