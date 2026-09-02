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
   * 使地点可见；真实 DemTopo 底图按经纬度投影，离线的虚构世界不放置（见 initMap / state.terrain.on）。 */
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
      banner.innerHTML = '⚠ 本切片主地点位于实测高程网格之外（' + _tg + '）。'
        + '底层仍按经纬度显示真实 DemTopo 分层设色地形图，仅不额外叠加高程晕渲——这是「共享真实地形」主张的诚实边界，史料 / 断言 / 线索功能均正常。';
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
    terrain: { on: true, elev: false },   // v0.45：on=显示真实 DemTopo 栅格底图；elev=地点标注海拔
    terrainOffGrid: OFF_GRID,
    route:   true,
    t: 0,
    tab: 'yan',
    selection: null,
    control: { on: false, scope: 'county' },
    ctrlOn: false,               // 实控区变化图层（v0.47 重做：真实海岸线裁剪的治所 Voronoi）
    impactOn: false,             // 灾情影响范围图层（v0.49 独立灾难模型：severity 热力）
    chgis: { on: true, ds: 'all', period: 'all', yearSync: false },
    battle: { on: true, routes: true },
    timeline: 'main',          // v0.31：当前分支时间线
    ego: null,                 // 当前选中的人物 id（抽象图里高亮其关系网）
    personTab: 'assert',       // 人物视图子页签
    personYear: { from: null, to: null }, // 人物轨迹时间窗
    activeFaction: null,       // 派系筛选（v0.19）：点击派系面板只看该派系明方断言
    factionCompare: false,      // 派系并排对比（v0.21）：当前事件/切片各派系明方断言同屏对照
    dims: new Set(),            // v0.74 六维筛选：点击覆盖面板的维度槽钻取；空集 = 不过滤
    declaredOnly: false         // v0.76「只看声明」：隐藏 dim_source=inferred 的推断覆盖，守 E18 诚实边界
  };

  /* v0.74：把过滤拆成「基础（来源 / 图层 / 时间线）」与「维度」两段。
     六维面板的计数只能走基础段——否则一旦按维度筛选，各维度计数会自我塌缩成选中项的数。 */
  function assertPassBase(a) {
    // v0.76「只看声明」：开启后直接隐藏仅靠词表推断的断言，使其不进任何视图/计数
    if (state.declaredOnly && a.dim_source === 'inferred') return false;
    return state.sources.has(a.source) && state.layers.has(a.layer)
      && (a.timeline || 'main') === state.timeline;
  }
  function assertPassDim(a) {
    if (!state.dims.size) return true;   // 空集 = 不过滤
    var ad = a.dims || [], hit = false;
    state.dims.forEach(function (d) { if (ad.indexOf(d) >= 0) hit = true; });
    return hit;                          // 多选取并集：命中任一选中维度即保留
  }
  function visibleAssertions() {
    return D.assertions.filter(function (a) {
      return assertPassBase(a) && assertPassDim(a);
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
  var controlCv = document.getElementById('controlCv');
  var chgisCv = document.getElementById('chgisCv');
  var borderCv = document.getElementById('borderCv');
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
    controlCv.width = Math.round(cw * dpr); controlCv.height = Math.round(ch * dpr);
    if (chgisCv) { chgisCv.width = Math.round(cw * dpr); chgisCv.height = Math.round(ch * dpr); }
    if (borderCv) { borderCv.width = Math.round(cw * dpr); borderCv.height = Math.round(ch * dpr); }
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
    if (gTopo) gTopo.style.display = (state.terrain.on && !IS_ABSTRACT) ? '' : 'none';
    if (!IS_ABSTRACT && state.control.on && window.BorderLayer && BorderLayer.isReady()) BorderLayer.repaint();
    // 实控区图层的可见性由 state.ctrlOn 驱动（drawControl 仅在 ctrlOn 时绘制 ControlLayer），
    // 不能用 state.control.on（那只管 BorderLayer 政区界线）。否则辽东剧场战争场景 ctrlOn 自动开启、
    // control.on 仍为 false 时，拖动地图 applyView 不重绘控制层 → 暂停时间轴拖动地图控制层卡死。
    if (!IS_ABSTRACT && state.ctrlOn && window.ControlLayer && ControlLayer.isReady()) ControlLayer.repaint();
    if (!IS_ABSTRACT && state.impactOn && window.ImpactLayer && ImpactLayer.isReady()) ImpactLayer.repaint();
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
  // 朝地图某点（用户坐标 mx,my）放大/缩小 factor 倍（<1 放大）。供点击聚合泡展开使用。
  function zoomToMapPoint(mx, my, factor) {
    var before = view.w;
    view.w *= factor;
    view.w = Math.min(fitW * 1.6, Math.max(MIN_W, view.w));
    var k = view.w / before;
    view.h = view.w * (ch / cw);
    view.x = mx - (mx - view.x) * k;
    view.y = my - (my - view.y) * k;
    applyView();
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
     v0.45：弃用「合成 ASTER 山体阴影 + 海蓝海洋」画布，改用真实 DemTopo 分层设色栅格
     （复旦 CHGIS，按高程染色，海洋已抹去蓝色改为羊皮纸色）作为地图底图。
     该栅格已含海岸线 / 河流 / 湖泊 / 高程配色，故矢量底图只叠加「历史省界 + 辽东边墙」作参考，
     不再重复绘制陆地/海岸/河流实心填充（单一真值，避免双重绘制 + 海岸错位）。
     栅格以 SVG <image> 形式按地理经纬度投影进用户坐标（见 initMap 的 gTopo），随 viewBox 自动平移缩放。 */
  var DEMTOPO = {
    src: 'demtopo_china.jpg',
    // 与 tools/gen_demtopo_china.py 生成的 equirectangular 栅格严格一致：
    // 左=60.00556°E，右=149.116667°E；上=59.98861°N，下=10°N
    lonMin: 60.00556, lonMax: 149.116667, latMin: 10, latMax: 59.98861
  };
  var gTopo = null;   // DemTopo 栅格底图组（initMap 中创建）

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
    // 真实地形底图：SVG <image> 按 DEMTOPO 经纬度范围投影进用户坐标，随 viewBox 自动平移/缩放。
    // 虚构世界（IS_ABSTRACT）无地理投影，不放置——避免中国地形图浮在关系图背后。
    gTopo = null;
    if (!IS_ABSTRACT) {
      gTopo = el('g', {}, svg);
      el('image', {
        href: DEMTOPO.src,
        x: px(DEMTOPO.lonMin), y: py(DEMTOPO.latMax),
        width: px(DEMTOPO.lonMax) - px(DEMTOPO.lonMin),
        height: py(DEMTOPO.latMin) - py(DEMTOPO.latMax),
        preserveAspectRatio: 'none'
      }, gTopo);
      gTopo.style.display = state.terrain.on ? '' : 'none';
    }
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
    // 1) 陆地兜底底色：仅当用户关闭 DemTopo 底图时填充（单一真值——底图栅格已含高程配色，
    //    再填实心陆地 = 同一陆地画两遍 + 海岸错位）。海岸/河流/湖泊同理交由 DemTopo 栅格呈现。
    if (!state.terrain.on) {
      BM.land.forEach(function (f) {
        el('path', { d: geomPath(f.g), fill: '#efe7d6', stroke: 'none' }, gBase);
      });
    }
    // 2) 历史省 / 州界 + 标注（参考叠层，DemTopo 栅格之上使其清晰）
    var gAdm = el('g', { fill: 'none', stroke: '#c9bfa8', 'stroke-width': 0.8, opacity: .7,
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
    // 3) 辽东边墙（仅辽东体系场景注入，不再共享误显）
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

    // 单独画一个地点（半径/命中区按屏幕像素恒定，避免放大后圆点过大）。
    function drawSinglePlace(p, x, y, scale, g) {
      var big = ['capital', 'city'].indexOf(p.type) >= 0;
      var guan = p.type === 'guan';
      var sr = big ? 6 : (guan ? 4.6 : 4);
      el('circle', { cx: x, cy: y, r: sr / scale, class: 'pnode' + (big ? ' big' : ''),
        fill: big ? '#2A2521' : '#FBF9F3', stroke: '#2A2521', 'stroke-width': 1.3,
        'vector-effect': 'non-scaling-stroke' }, g);
      var lb = el('text', { x: x + (big ? 7 : 5.5), y: y + 3.6,
        class: 'place-label' + (big ? '' : ' minor') }, g);
      lb.textContent = p.name.replace(/（.*?）/g, '');
      if (state.terrain.elev && p.elev != null) {
        el('text', { x: x + (big ? 7 : 5.5), y: y + 13, class: 'place-elev' }, g)
          .textContent = p.elev + ' m';
      }
      var hit = el('circle', { cx: x, cy: y, r: 14 / scale, fill: 'transparent', class: 'node-hit' }, g);
      hit.addEventListener('click', function () { selectPlace(p.id); });
    }

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

    // ══ 地点自适应聚合（v0.47，参考高德地图收藏夹交互）══
    // 大范围浏览：就近地点合并成「带数字徽标的聚合泡」；局部放大（点间距拉开）自动拆散；
    // 点击聚合泡朝该处放大展开。所有半径/字号按屏幕像素恒定（除以 scale），
    // 解决“放大后圆点过大”与“缩小时一堆圆点挤在一起”两个问题。
    var scale = cw / view.w;                 // 每用户单位对应的屏幕 px
    var CLUSTER_PX = 34;                     // 同屏间距 < 34px 即合并
    var pts = [];
    D.places.forEach(function (p) {
      if (typeof p.lon !== 'number' || typeof p.lat !== 'number') return;
      pts.push({ p: p, x: (px(p.lon) - view.x) * scale, y: (py(p.lat) - view.y) * scale });
    });
    pts.sort(function (a, b) { return a.p.id < b.p.id ? -1 : (a.p.id > b.p.id ? 1 : 0); });
    var clusters = [];
    pts.forEach(function (it) {
      var best = -1, bestD = CLUSTER_PX;
      for (var ci = 0; ci < clusters.length; ci++) {
        var c = clusters[ci];
        var d = Math.hypot(c.x - it.x, c.y - it.y);
        if (d < bestD) { bestD = d; best = ci; }
      }
      if (best >= 0) {
        var c2 = clusters[best], n = c2.members.length;
        c2.x = (c2.x * n + it.x) / (n + 1); c2.y = (c2.y * n + it.y) / (n + 1);
        c2.members.push(it);
      } else {
        clusters.push({ x: it.x, y: it.y, members: [it] });
      }
    });
    // 无坐标地点：按旧样式单独画，不参与聚合
    D.places.forEach(function (p) {
      if (typeof p.lon === 'number' && typeof p.lat === 'number') return;
      drawSinglePlace(p, px(p.lon), py(p.lat), scale, gNodes);
    });
    clusters.forEach(function (c) {
      var ux = view.x + c.x / scale, uy = view.y + c.y / scale;
      if (c.members.length === 1) {
        drawSinglePlace(c.members[0].p, ux, uy, scale, gNodes);
      } else {
        var n = c.members.length;
        var sr = Math.min(26, 13 + n * 0.42);        // 气泡屏幕半径 px
        var r = sr / scale;
        var g = el('g', { class: 'cluster' }, gNodes);   // 展开动画（见 style.css .cluster）
        if (n >= 5) el('circle', { cx: ux, cy: uy, r: r + 3 / scale, fill: 'none',
          stroke: '#3E6E99', 'stroke-width': 1, 'stroke-opacity': .35,
          'vector-effect': 'non-scaling-stroke' }, g);
        el('circle', { cx: ux, cy: uy, r: r, fill: '#3E6E99', stroke: '#FBF9F3',
          'stroke-width': 2, 'vector-effect': 'non-scaling-stroke' }, g);
        el('text', { x: ux, y: uy + (sr * 0.36) / scale, 'text-anchor': 'middle',
          fill: '#FBF9F3', 'font-weight': '700', 'font-size': (sr * 0.92) / scale,
          'font-family': 'inherit' }, g).textContent = n;
        var hit = el('circle', { cx: ux, cy: uy, r: Math.max(r, 16 / scale),
          fill: 'transparent', class: 'node-hit' }, g);
        el('title', {}, hit).textContent = n + ' 处地点（点击放大展开）';
        hit.addEventListener('click', function () { zoomToMapPoint(ux, uy, 0.5); });
      }
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
      // 战—朝关联高亮（v0.46）：该派系成员指挥的接战点在地图描派系色环，
      // 把「朝堂派系」直接挂到「战场」上。
      if (warCourtReady && warCourt) {
        warCourt.forEach(function (e) {
          if (e.lon == null || e.lat == null) return;
          var hit = e.sides.some(function (s) { return s.faction === state.activeFaction; });
          if (!hit) return;
          var x = px(e.lon), y = py(e.lat);
          el('circle', { cx: x, cy: y, r: 12, fill: 'none', stroke: fcol,
            'stroke-width': 2.8, 'stroke-dasharray': '4 2.5', opacity: .95,
            'vector-effect': 'non-scaling-stroke', class: 'node-hit' }, gMarks);
        });
      }
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
        var md = rp.model_days, rd = rp.reported_days;
        var u = view.w / cw;                 // 与 .route-badge 的 --u 同源：让胶囊屏幕尺寸恒定
        var bw = 176 * u, bh = 20 * u;
        var cx0 = ax + 6 * u, cy0 = ay - 30 * u;   // 放在路线起点右上侧，避开地图中部与地名
        var badge = el('g', { class: 'node-hit' }, gLabels);
        el('rect', { x: cx0, y: cy0, width: bw, height: bh, rx: 5 * u,
          fill: 'rgba(91,58,110,0.08)', stroke: '#5A3A6E', 'stroke-width': 1.1,
          'vector-effect': 'non-scaling-stroke' }, badge);
        el('text', { x: cx0 + 8 * u, y: cy0 + 13.5 * u, class: 'route-badge', 'text-anchor': 'start' }, badge)
          .textContent = '推演 ' + (md != null ? md : '—') + ' 日 · 史料 ' + (rd != null ? rd : '—') + ' 日';
        el('title', {}, badge).textContent = '地形紧张度 ' + (strain != null ? strain.toFixed(2) : '—') +
          '（' + (rp.strain_label || '') + '）＝行军模型推算天数 ÷ 史料记载天数，数值越高越偏离地形现实。';
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
            renderParties(); renderFactions(); drawDynamic();
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
    [{ k: 'on', name: '真实地形图', c: '#5A7A52' },
     { k: 'elev', name: '标注海拔', c: '#7A6E5C' }].forEach(function (it) {
      var on = state.terrain[it.k];
      var n = document.createElement('div');
      n.className = 'lay' + (on ? '' : ' off'); n.style.setProperty('--lc', it.c);
      n.innerHTML = '<i class="lay-dot"></i><span class="lay-name">' + it.name + '</span>' +
        '<span class="lay-n">' + (on ? '开' : '关') + '</span>';
      n.addEventListener('click', function () {
        state.terrain[it.k] = !state.terrain[it.k];
        if (it.k === 'on' && gTopo) gTopo.style.display = state.terrain.on ? '' : 'none';
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
    src.innerHTML = '底图：复旦 CHGIS <b>DemTopo 分层设色地形图</b>（海洋已去蓝，陆地即地图本色）。' +
      (TG ? ('<br>高程网格 <b>' + (TG.source || '') + '</b>：' + TG.nx + '×' + TG.ny + '，' +
        TG.min + '–' + TG.max + ' m，实测非示意。') :
        '<br>未载入高程网格（地点海拔标注不可用）。');
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

  /* ═══════════ 事件导航（v0.47） ═══════════
   * 事件高亮/导航由左侧事件列表（renderEvents，走 state.t）承担。
   * 「战争走势」年份回放改由底部 ctrlTimeline 承担（见 wireCtrlTimeline），二者解耦。 */

  function renderEvents() {
    var lead = document.getElementById('evLead');
    lead.innerHTML = CFG.lead || META.lead ||
      '本切片为辽东走廊的县级 LOD 视图：建置沿革与关键战事并列，点左栏事件跳转。';
    var box = document.getElementById('eventsPane'); box.innerHTML = '';
    D.events.forEach(function (ev, i) {
      var n = document.createElement('div');
      var isSel = (i === state.t);
      n.className = 'ev' + (isSel ? ' sel' : '');
      n.innerHTML = '<div class="ev-when"><div class="era">' + ev.era + '</div>' +
        '<div class="yr">' + (ev.year || '') + '</div></div>' +
        '<div class="ev-body"><div class="ev-title">' + ev.title +
        '<span class="ev-kind">' + ev.kind + '</span></div>' +
        '<div class="ev-text">' + ev.text + '</div></div>';
      n.addEventListener('click', function () {
        state.t = i;
        refresh();
        goTab('yan');
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
      renderFactions(); renderParties(); drawDynamic();
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
        renderParties(); renderFactions(); drawDynamic();
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
          renderParties(); renderFactions(); drawDynamic();
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

  /* ═══════════ 真实政区界线层 + 实控区变化层驱动（v0.47 重做） ═══════════
   * BorderLayer：勾选「真实政区界线」按「县界/国界」scope 懒加载并渲染 CHGIS 真实几何。
   * ControlLayer：勾选「实控区变化」按年份给真实海岸线裁剪的治所 Voronoi 着色（战争走势）。 */
  var ctrlYear = null, ctrlScope = 'county', ctrlEvents = [];
  var impactMode = false, impactYear = null, impactEvents = [];   // v0.49 灾难热力模型

  function drawControl() {
    if (IS_ABSTRACT) return;
    // ── 灾难热力模式（v0.49）：灾情影响范围随年份扩张/收缩 ──
    if (impactMode) {
      if (window.ImpactLayer && ImpactLayer.isReady()) {
        if (state.impactOn) ImpactLayer.draw(impactYear != null ? impactYear : ImpactLayer.years()[0]);
        else ImpactLayer.clear();
      }
      updateCtrlTimeline();
      return;
    }
    // ── 战争控制模式：真实政区界线 + 实控区着色 ──
    if (!window.BorderLayer) return;
    if (state.control.on) {
      BorderLayer.setScope(state.control.scope);
      BorderLayer.ensure();
      BorderLayer.repaint();
    } else {
      BorderLayer.clear();
    }
    // 实控区（真实海岸线裁剪的控制权着色）
    if (window.ControlLayer && ControlLayer.isReady()) {
      if (state.ctrlOn) {
        ControlLayer.draw(ctrlYear != null ? ctrlYear : ControlLayer.years()[0], ctrlScope);
      } else {
        ControlLayer.clear();
      }
    }
    updateCtrlTimeline();
  }

  // 控制面板底部的界线来源说明（诚实标注几何纪年）
  function setBorderNote(txt) {
    var el2 = document.getElementById('borderNote');
    if (el2) el2.textContent = txt;
  }

  // 辽东明清战争剧场 = 五个 region（关外女真/辽东/辽北/辽南/辽西）
  function isLiaodongTheatre() {
    var r = META.region;
    return r === 'liaodong' || r === 'liaobei' || r === 'liaonan' || r === 'liaoxi' || r === 'jianzhou';
  }

  // 装载实控区数据：场景自带 control 优先；否则辽东剧场 fallback 全局 control_liaodong.json。
  function loadControlLayer() {
    if (IS_ABSTRACT || !window.ControlLayer) return;
    var VOCAB = (D && D.vocab) || (SD && SD.vocab) || {};
    function doSetup(cd) {
      ctrlYear = cd.years[0];
      ctrlEvents = cd.events || [];
      ControlLayer.setup({
        cv: controlCv, px: px, py: py,
        getView: function () { return view; },
        getCw: function () { return cw; },
        getDpr: function () { return window.devicePixelRatio || 1; },
        partyColors: VOCAB.party_colors || {},
        sceneData: { control: cd.control, control_seats: cd.seats, control_years: cd.years }
      });
      if (window.BorderLayer && BorderLayer.isReady()) ControlLayer.setCoast(BorderLayer.features());
      else ControlLayer.loadCoast('../data/external/chgis/borders_1820.geojson');
      finishCtrlSetup();
    }
    // 场景自带 control（data/<scene>/control.json 经 build 注入）优先；
    // 否则辽东剧场直接用 SD 全局控制数据（build.py 从 control_liaodong.json 注入，
    // 无需 fetch——file:// 打开也能跑）。
    if (D.control && D.control.length) {
      doSetup({ control: D.control, seats: D.control_seats || [], years: D.control_years || [1616, 1644], events: D.control_events || [] });
    } else if (isLiaodongTheatre() && SD.control && SD.control.length) {
      doSetup({ control: SD.control, seats: SD.control_seats || [], years: SD.control_years || [1616, 1644], events: SD.control_events || [] });
    }
  }

  function finishCtrlSetup() {
    if (!window.ControlLayer || !ControlLayer.isReady()) return;
    var ctrlBox = document.getElementById('ctrlOn');
    if (ctrlBox) ctrlBox.disabled = false;
    wireCtrlTimeline();
    renderCtrlLegend();
    // 辽东剧场默认打开实控区：边境变化 + 底部战争走势时间轴立即可见，不必先找勾选框。
    if (isLiaodongTheatre() && !state.ctrlOn) {
      state.ctrlOn = true;
      if (ctrlBox) ctrlBox.checked = true;
    }
    if (state.ctrlOn) drawControl();
  }

  // 装载灾情影响范围（v0.49）：seats = 场景 places（带坐标），impact = 每处 severity 区间。
  function loadImpactLayer() {
    if (IS_ABSTRACT || !window.ImpactLayer) return;
    if (!D.impact || !D.impact.length) return;
    impactMode = true;
    var seats = (D.places || []).filter(function (p) { return p.lon != null && p.lat != null; });
    impactYear = (D.impact_years && D.impact_years[0]) || 1600;
    impactEvents = D.impact_events || [];
    ImpactLayer.setup({
      cv: controlCv, px: px, py: py,
      getView: function () { return view; },
      getCw: function () { return cw; },
      getDpr: function () { return window.devicePixelRatio || 1; },
      sceneData: { impact: D.impact, seats: seats, years: D.impact_years || [impactYear, impactYear + 1] }
    });
    if (window.BorderLayer && BorderLayer.isReady()) ImpactLayer.setCoast(BorderLayer.features());
    else ImpactLayer.loadCoast('../data/external/chgis/borders_1820.geojson');
    finishImpactSetup();
  }

  function finishImpactSetup() {
    if (!window.ImpactLayer || !ImpactLayer.isReady()) return;
    var ctrlBox = document.getElementById('ctrlOn');
    if (ctrlBox) ctrlBox.disabled = false;
    wireCtrlTimeline();
    wireImpactMetric();
    renderCtrlLegend();
    // 灾难场景默认打开影响范围热力：灾情随时间轴立即可见。
    if (!state.impactOn) {
      state.impactOn = true;
      if (ctrlBox) ctrlBox.checked = true;
    }
    drawControl();
  }

  // 灾难模式：指标切换（严重程度 / 死亡人口 / 死亡率）——对齐实控区层「按指标梯度上色」
  function wireImpactMetric() {
    var box = document.getElementById('ctrlMetric');
    if (!box) return;
    box.style.display = impactMode ? '' : 'none';
    if (!impactMode) return;
    var btns = Array.prototype.slice.call(box.querySelectorAll('button[data-m]'));
    // 初始高亮对齐当前指标
    var cur = (window.ImpactLayer && ImpactLayer.getMetric) ? ImpactLayer.getMetric() : 'severity';
    btns.forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-m') === cur); });
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        var m = b.getAttribute('data-m');
        if (window.ImpactLayer) ImpactLayer.setMetric(m);
        btns.forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        renderCtrlLegend();
        if (state.impactOn) drawControl();
      });
    });
  }

  function ctrlDateHint(year) {
    var evs = impactMode ? impactEvents : ctrlEvents;
    var best = null;
    evs.forEach(function (e) {
      if (e.year <= year && (!best || e.year > best.year)) best = e;
    });
    return best ? best.label : '';
  }

  function updateCtrlTimeline() {
    var bar = document.getElementById('ctrlTimeline');
    if (!bar) return;
    if (impactMode) {
      bar.style.display = (state.impactOn && window.ImpactLayer && ImpactLayer.isReady()) ? '' : 'none';
    } else {
      bar.style.display = (state.ctrlOn && window.ControlLayer && ControlLayer.isReady()) ? '' : 'none';
    }
  }

  function renderCtrlLegend() {
    var box = document.getElementById('ctrlLegend');
    if (!box) return;
    // 灾难模式：受灾区（梯度）vs 正常区（中性浅色）图例，按当前指标
    if (impactMode) {
      var meta = (window.ImpactLayer && ImpactLayer.metricMeta)
        ? ImpactLayer.metricMeta() : { label: '严重程度', min: '轻', max: '重' };
      var grad = (window.ImpactLayer && ImpactLayer.gradientCss)
        ? ImpactLayer.gradientCss() : 'linear-gradient(90deg,#F5DEB2,#DE7832,#781010)';
      var normalCss = 'rgb(201,196,180)';
      box.innerHTML =
        '<span class="lg-item"><i style="background:' + normalCss + '"></i>正常区</span>' +
        '<span class="lg-item lg-grad"><span class="lg-bar" style="background:' + grad + '"></span>' +
          '<span class="lg-ticks"><em>' + meta.min + '</em><em>' + meta.label + '</em><em>' + meta.max + '</em></span></span>';
      var note = document.getElementById('ctrlEraNote');
      if (note) note.textContent = '影响范围为治所 Voronoi 近似 + CHGIS 1820 海岸线裁剪（非逐日实测）；深色=愈重，浅色块=正常未受灾';
      return;
    }
    if (!window.ControlLayer) return;
    var parties = ControlLayer.activeParties();
    var html = '';
    parties.forEach(function (p) {
      var c = ControlLayer.partyColor(p);
      var css = c ? 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')' : '#999';
      html += '<i style="background:' + css + '"></i>' + (p === 'contested' ? '争议缓冲' : p);
    });
    box.innerHTML = html;
    var note = document.getElementById('ctrlEraNote');
    if (note) note.textContent = '边界为治所 Voronoi 近似 + CHGIS 1820 真实海岸线裁剪，非逐日实测';
  }

  function wireCtrlTimeline() {
    var slider = document.getElementById('ctrlSlider');
    if (!slider || IS_ABSTRACT) return;
    if (impactMode && !window.ImpactLayer) return;
    if (!impactMode && !window.ControlLayer) return;
    var ys = impactMode ? ImpactLayer.years() : ControlLayer.years();
    var yr = impactMode ? impactYear : ctrlYear;
    slider.min = ys[0]; slider.max = ys[1]; slider.step = 1;
    if (yr == null || yr < ys[0] || yr > ys[1]) yr = ys[0];
    if (impactMode) impactYear = yr; else ctrlYear = yr;
    slider.value = yr;
    // 时间轴标题随模式切换（实控区 ↔ 影响范围）
    var eraEl = document.querySelector('#ctrlTimeline .tl-era');
    if (eraEl) eraEl.textContent = impactMode ? '影响范围 · 灾情走势' : '实控区 · 战争走势';
    function sync() {
      var v = parseInt(slider.value, 10);
      if (impactMode) impactYear = v; else ctrlYear = v;
      var yl = document.getElementById('ctrlYear');
      if (yl) yl.textContent = v + ' 年';
      var dl = document.getElementById('ctrlDateLabel');
      if (dl) dl.textContent = ctrlDateHint(v);
      if (impactMode ? state.impactOn : state.ctrlOn) drawControl();
    }
    slider.addEventListener('input', sync);
    var play = document.getElementById('ctrlPlay');
    var timer = null;
    if (play) play.addEventListener('click', function () {
      if (timer) { clearInterval(timer); timer = null; play.textContent = '▶'; return; }
      play.textContent = '⏸';
      timer = setInterval(function () {
        var v = parseInt(slider.value, 10) + 1;
        if (v > ys[1]) v = ys[0];
        slider.value = v; sync();
      }, 650);
    });
    sync();
  }

  function wireControl() {
    var panel = document.getElementById('controlPanel');
    if (!panel || IS_ABSTRACT) { if (panel) panel.style.display = 'none'; return; }
    panel.style.display = '';
    // 灾难模式：隐藏政区界线/县界国界（战争专属），重命名「实控区变化」→「影响范围变化」
    if (impactMode) {
      var br = document.getElementById('cpBorderRow'); if (br) br.style.display = 'none';
      document.querySelectorAll('.cp-scope[data-cscope]').forEach(function (x) { x.style.display = 'none'; });
      var lb = document.getElementById('ctrlOnLabel'); if (lb) lb.textContent = '影响范围变化';
    }
    var onBox = document.getElementById('borderOn');
    if (onBox) {
      onBox.checked = state.control.on;
      onBox.addEventListener('change', function () {
        state.control.on = onBox.checked;
        drawControl();
      });
    }
    var ctrlBox = document.getElementById('ctrlOn');
    if (ctrlBox) {
      ctrlBox.checked = impactMode ? state.impactOn : state.ctrlOn;
      ctrlBox.disabled = !((impactMode ? window.ImpactLayer : window.ControlLayer) && (impactMode ? ImpactLayer.isReady() : ControlLayer.isReady()));
      ctrlBox.addEventListener('change', function () {
        if (impactMode) state.impactOn = ctrlBox.checked; else state.ctrlOn = ctrlBox.checked;
        drawControl();
      });
    }
    // 真实界线 scope（县界/国界）
    document.querySelectorAll('.cp-scope[data-scope]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.control.scope = b.getAttribute('data-scope');
        document.querySelectorAll('.cp-scope[data-scope]').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        drawControl();
      });
    });
    // 实控区 scope（县界/国界）
    document.querySelectorAll('.cp-scope[data-cscope]').forEach(function (b) {
      b.addEventListener('click', function () {
        ctrlScope = b.getAttribute('data-cscope');
        document.querySelectorAll('.cp-scope[data-cscope]').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        drawControl();
      });
    });
  }

  /* ═══════════ 战—朝关联（v0.46）：战争 ↔ 朝堂 ═══════════ */
  var warCourt = null, warCourtReady = false;

  // 人名 → person 索引。engagements.json 里 commander 的写法**并不统一**：
  //   · 辽东系切片写 person id（dusong）
  //   · seed_famous_battles 批量生成的 37 个名战切片写**汉文名**（白起 / 阖闾/孙武）
  // 全库扫描：76 条 commander 无法按 id 命中 persons.json，其中 67 条按「名」可命中，
  // 余 9 条是集体单位（明守军/英远征军/建文军）本就不是人。
  // 故解析走三级：id → 名 → 复合名按「/」拆分；都不中就诚实显示原文、不编派系。
  var PERSON_BY_NAME = {};
  (D.persons || []).forEach(function (p) { if (p.name && !PERSON_BY_NAME[p.name]) PERSON_BY_NAME[p.name] = p; });

  function resolveCommanders(raw) {
    if (!raw || raw === '-') return [];
    var out = [];
    var byId = NODE[raw] && NODE[raw].kind === 'person' ? NODE[raw].ref : null;
    if (byId) { out.push(byId); return out; }
    if (PERSON_BY_NAME[raw]) { out.push(PERSON_BY_NAME[raw]); return out; }
    // 复合写法「阖闾/孙武」：逐段解析，命中几个算几个
    if (raw.indexOf('/') >= 0) {
      raw.split('/').forEach(function (seg) {
        var t = seg.trim(); if (!t) return;
        var hit = (NODE[t] && NODE[t].kind === 'person' ? NODE[t].ref : null) || PERSON_BY_NAME[t];
        if (hit) out.push(hit);
      });
    }
    return out;
  }

  function loadWarCourt() {
    // 注意：切片 bundle 的 scene_id 在 META 里（D.meta.scene_id），D.scene_id 恒为 undefined。
    // 用 sceneKey 才是权威场景 id（见 v0.46 修复记录）。
    var SID = META.scene_id || sceneKey;
    if (IS_ABSTRACT || !SID) { warCourtReady = true; return; }
    fetch('../data/' + SID + '/engagements.json')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (gj) {
        warCourt = [];
        (gj && gj.engagements || []).forEach(function (e) {
          var pp = PLACE[e.place];
          var sides = (e.sides || []).map(function (s) {
            var hits = resolveCommanders(s.commander);
            // 一个 side 可能有多位主将（复合写法），派系取第一个有标注的
            var fid = null;
            for (var i = 0; i < hits.length; i++) { if (hits[i].faction) { fid = hits[i].faction; break; } }
            var pname = hits.length
              ? hits.map(function (h) { return h.name || h.id; }).join(' / ')
              : (s.commander && s.commander !== '-' ? s.commander : '');
            return { side: s.side, commander: s.commander, cname: pname,
                     faction: fid, resolved: hits.length > 0,
                     pids: hits.map(function (h) { return h.id; }) };
          });
          warCourt.push({ id: e.id, name: e.name, at: e.at, place: e.place,
            lon: pp ? pp.lon : null, lat: pp ? pp.lat : null, sides: sides });
        });
        warCourtReady = true;
        renderWarCourt(); drawDynamic();
      })
      .catch(function () { warCourtReady = true; renderWarCourt(); });
  }
  function renderWarCourt() {
    var box = document.getElementById('warCourtPane'); if (!box) return;
    box.innerHTML = '';
    var head = document.createElement('div');
    head.style.cssText = 'font-weight:700;font-size:13px;margin:2px 0 6px;color:#5A4632;';
    head.innerHTML = '战—朝关联 <span style="font-weight:400;font-size:11px;color:#918777">· 将领派系（战争↔朝堂）</span>';
    box.appendChild(head);
    if (!warCourtReady) { box.appendChild(_wcNote('加载战例派系…')); return; }
    if (!warCourt || !warCourt.length) {
      var empty = document.createElement('div'); empty.style.cssText = 'color:#918777;font-size:12px';
      empty.textContent = '本切片无接战数据。'; box.appendChild(empty); return;
    }
    var fac = {};
    warCourt.forEach(function (e) { e.sides.forEach(function (s) { if (s.faction && FDEF[s.faction]) fac[s.faction] = (fac[s.faction] || 0) + 1; }); });
    var facKeys = Object.keys(fac);
    if (facKeys.length) {
      var sum = document.createElement('div'); sum.style.cssText = 'font-size:11.5px;color:#6b6259;margin:0 0 6px';
      sum.innerHTML = '本场景 ' + warCourt.length + ' 场接战 · 涉朝堂派系：' + facKeys.map(function (k) {
        return '<span style="color:' + (FCOLORS[k] || '#888') + ';font-weight:600">' + ((FDEF[k] && FDEF[k].name) || k) + '</span> ' + fac[k];
      }).join(' · ');
      box.appendChild(sum);
    } else {
      // 诚实区分两种「无派系」：本语境包没有派系维度（如战国/唐切片）vs 有维度但将领未标注
      var hasFacDim = FDEF && Object.keys(FDEF).length > 0;
      var unres = 0, totSide = 0;
      warCourt.forEach(function (e) { e.sides.forEach(function (s) { totSide++; if (!s.resolved && s.commander && s.commander !== '-') unres++; }); });
      var n = document.createElement('div'); n.style.cssText = 'font-size:11.5px;color:#918777;margin:0 0 6px';
      n.textContent = hasFacDim
        ? ('本场景 ' + warCourt.length + ' 场接战 · 将领均未标注朝堂派系'
           + (unres ? ('（其中 ' + unres + '/' + totSide + ' 位主将未在本切片 persons.json 注册）') : '') + '。')
        : ('本场景 ' + warCourt.length + ' 场接战 · 本语境包未定义朝堂派系维度，仅列主将。');
      box.appendChild(n);
    }
    warCourt.forEach(function (e) {
      var row = document.createElement('div'); row.style.cssText = 'margin:4px 0;border-left:2px solid #cfc6b6;padding:2px 0 2px 7px';
      var title = document.createElement('div'); title.style.cssText = 'font-size:12.5px;font-weight:600;color:#3a2f22';
      title.textContent = (e.name || e.id) + (e.at ? (' · ' + e.at) : '');
      row.appendChild(title);
      e.sides.forEach(function (s) {
        var line = document.createElement('div'); line.style.cssText = 'font-size:11.5px;color:#6b6259;padding:1px 0';
        var sideCn = s.side === 'ming' ? '明' : (s.side === 'jin' ? '后金' : '—');
        line.textContent = '　' + sideCn + '：' + (s.cname || '—');
        // 未能解析成 persons.json 里的人（多为集体单位：明守军/英远征军），标灰不冒充人物
        if (s.commander && s.commander !== '-' && !s.resolved) {
          line.style.color = '#a49a8c';
          line.title = '「' + s.commander + '」未在本切片 persons.json 注册（可能是集体单位而非个人）';
        }
        if (s.faction && FDEF[s.faction]) {
          var col = FCOLORS[s.faction] || '#888';
          var dot = document.createElement('span');
          dot.style.cssText = 'display:inline-block;width:9px;height:9px;border-radius:50%;background:' + col + ';margin-left:5px;cursor:pointer;vertical-align:middle';
          dot.title = (FDEF[s.faction].name || s.faction);
          dot.addEventListener('click', function (ev) {
            ev.stopPropagation();
            state.activeFaction = (state.activeFaction === s.faction) ? null : s.faction;
            renderParties(); renderFactions(); drawDynamic();
          });
          line.appendChild(dot);
        }
        row.appendChild(line);
      });
      box.appendChild(row);
    });
  }
  function _wcNote(t) { var d = document.createElement('div'); d.style.cssText = 'color:#918777;font-size:12px'; d.textContent = t; return d; }

  /* ═══════════ 刷新 ═══════════ */
  /* 六维信息类别覆盖（单切片版，与枢纽页同款契约）：
     6 个维度始终作为预留槽存在；本切片史料实际覆盖的维度点亮，未覆盖显式「待补」，不假装齐全（E18 精神）。
     v0.74：覆盖的槽可点击 —— 点一下即按该维度筛选断言（可多选，再点取消）。
     未覆盖的槽是「史料缺口」而不是筛选项，故禁用并在 title 里写明原因：点了必然是 0 条，
     只会被当成功能故障；而「待补」两个字已经把缺口表达清楚了。 */
  function renderDimCoverage() {
    var box = document.getElementById('dimCoverage');
    if (!box) return;
    var DIM = SD.dimensions || {};
    var keys = Object.keys(DIM).map(function (k) { return parseInt(k, 10); })
      .filter(function (n) { return !isNaN(n); }).sort(function (a, b) { return a - b; });
    if (!keys.length) keys = [1, 2, 3, 4, 5, 6];
    var covSet = {};
    ((META.dims || []).slice()).forEach(function (d) { covSet[parseInt(d, 10)] = true; });
    var declOnly = state.declaredOnly;
    // 各维度当前有多少条断言（走基础过滤 + 声明过滤）：
    //  - infFlag[d]===true：该维覆盖**且**全部是词表推断（缺声明证据）
    //  - declFlag[d]：该维是否存在至少一条「声明」断言（非 inferred）
    //  - counts[d]：声明过滤后的断言数（declOnly 时_hidden 推断不计入，数字=可见数）
    var counts = {}, infFlag = {}, declFlag = {};
    D.assertions.forEach(function (a) {
      if (!assertPassBase(a)) return;
      var inf = (a.dim_source === 'inferred');
      (a.dims || []).forEach(function (d) {
        if (inf) { if (infFlag[d] !== false) infFlag[d] = true; }
        else { infFlag[d] = false; declFlag[d] = true; }
        if (!(declOnly && inf)) counts[d] = (counts[d] || 0) + 1;
      });
    });
    var sel = state.dims;
    var html = '<div class="dc-head">六维信息类别覆盖'
      + '<span class="dc-sub">六维（地理/技术/制度/社会/思想/事件）始终作为预留槽；'
      + '点亮的维度<b>可点击筛选</b>断言（可多选，再点取消），未覆盖的显式「待补」，不假装齐全。'
      + '标有 <b>推</b> 的维度仅靠词表自动推断覆盖（任意来源鲁棒性，非史料显式声明）。'
      + '开启 <b>只看声明</b> 会隐藏「推」覆盖，只呈现史料显式声明维度，更彻底守诚实边界。</span>'
      + '<button type="button" class="dc-toggle' + (declOnly ? ' on' : '') + '" id="dimDeclaredToggle"'
      + ' aria-pressed="' + (declOnly ? 'true' : 'false') + '">'
      + (declOnly ? '✓ 只看声明（隐藏推断）' : '只看声明（隐藏推断覆盖）') + '</button>'
      + '</div>'
      + '<div class="dc-slots">';
    keys.forEach(function (k) {
      // 显示用的「是否覆盖」：declOnly 下，仅靠推断的维度塌缩为缺口（诚实边界）
      var covered = declOnly ? !!declFlag[k] : !!covSet[k];
      var n = counts[k] || 0;      // 当前过滤下该维度的断言数
      var infOnly = !declOnly && covered && infFlag[k] === true;  // 仅词表推断覆盖（诚实标记）
      var hiddenByDecl = declOnly && infFlag[k] === true && !declFlag[k]; // 声明视图下被隐藏的推断维
      var picked = sel.has(k);
      var entry = DIM[String(k)] || DIM[k] || {};
      var short = entry.short || entry.name || ('维度' + k);
      var full = entry.name || ('维度' + k);
      var note = entry.note || '';
      var title = !covered
        ? (full + '：本切片史料未覆盖此维度（0 条断言）—— 这是缺口，不是功能问题'
           + (hiddenByDecl ? '；该维度仅有词表推断覆盖，已在「只看声明」下隐藏' : ''))
        : (full + '：' + note + '（当前 ' + n + ' 条断言' + (infOnly ? '，词表推断覆盖' : '') + '，点击筛选）');
      var status = !covered ? (hiddenByDecl ? '推·待补' : '待补')
                             : (infOnly ? '推·覆盖' : (picked ? '筛选中' : '已覆盖'));
      html += '<button type="button" class="dc-slot d' + k + (covered ? ' on' : '') + (infOnly ? ' dc-inf' : '') + (picked ? ' sel' : '') + '"'
        + ' data-dim="' + k + '"' + (covered ? '' : ' disabled')
        + ' aria-pressed="' + (picked ? 'true' : 'false') + '" title="' + title + '">'
        + '<span class="dc-name">' + short + (infOnly ? '<i class="dc-infbadge">推</i>' : '') + '</span>'
        + '<span class="dc-num"><b>' + n + '</b> 条</span>'
        + '<span class="dc-bar"><i style="width:' + (covered ? 100 : 0) + '%"></i></span>'
        + '<span class="dc-status">' + status + '</span>'
        + '</button>';
    });
    html += '</div>';
    if (sel.size) {
      var names = [];
      keys.forEach(function (k) {
        if (sel.has(k)) names.push((DIM[String(k)] || {}).short || (DIM[String(k)] || {}).name || ('维度' + k));
      });
      html += '<div class="dc-clear"><span class="dc-clear-txt">已按 ' + names.join('、')
        + ' 筛选</span><button type="button" class="dc-clear-btn" id="dimClear">清除维度筛选</button></div>';
    }
    box.innerHTML = html;
    // 维度槽 = toggle 该维度（可多选）；清除 = 清空全部；只看声明 = 切换声明视图
    Array.prototype.forEach.call(box.querySelectorAll('.dc-slot'), function (b) {
      b.addEventListener('click', function () {
        var k = parseInt(b.getAttribute('data-dim'), 10);
        if (isNaN(k)) return;
        if (sel.has(k)) sel.delete(k); else sel.add(k);
        refresh();
      });
    });
    var clr = document.getElementById('dimClear');
    if (clr) clr.addEventListener('click', function () { sel.clear(); refresh(); });
    var tog = document.getElementById('dimDeclaredToggle');
    if (tog) tog.addEventListener('click', function () {
      state.declaredOnly = !state.declaredOnly; refresh();
    });
  }

  function refresh() {
    renderDimCoverage();
    renderEdgeLegend(); renderSources(); renderLayers(); renderTerrainCtl(); renderEventList();
    renderSiblings(); drawDynamic();
    renderEvents(); renderParties(); renderFactions(); renderConflicts(); renderLeads(); renderWarCourt(); renderInspect();
    var vis = visibleAssertions().length;
    document.getElementById('statVisible').textContent = vis;
  }

  /* ═══════════ 启动 ═══════════ */
  measure(); fitView(); initMap();
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
  // 真实政区边界层（v0.46）：CHGIS 1820 府级界线（府界）+ 府级面拓扑合并的疆域外轮廓（国界）。
  // 替换控制面板原「治所最近邻 Voronoi 示意」。约 2MB，故 setup 只登记、打开图层才 fetch。
  if (!IS_ABSTRACT && window.BorderLayer) {
    BorderLayer.setup({
      cv: borderCv, px: px, py: py,
      getView: function () { return view; },
      getCw: function () { return cw; },
      getCh: function () { return ch; },
      getDpr: function () { return window.devicePixelRatio || 1; },
      scope: state.control.scope,
      onLoading: function () { setBorderNote('载入真实政区界线…'); },
      onReady: function (n, m) {
        if (state.control.on) { BorderLayer.setScope(state.control.scope); BorderLayer.repaint(); }
        // 真实政区多边形喂给控制层做「陆地掩膜」→ 实控区外缘裁剪到真实海岸线
        if (window.ControlLayer && ControlLayer.isReady()) ControlLayer.setCoast(BorderLayer.features());
        // 诚实标注：几何纪年与本切片纪年不同，必须写明，不冒充明代政区。
        setBorderNote('真实政区界线 · CHGIS ' + (m && m.year ? m.year : 1820) + ' 年府级底本（晚于本切片纪年，仅作真实政区参照）');
      },
      onError: function () { setBorderNote('真实界线加载失败（需通过 http 服务器打开）'); }
    });
  }
  loadWarCourt();   // v0.46：战—朝关联数据（将领派系）
  loadControlLayer();  // v0.47：实控区变化（真实海岸线裁剪 + 战争走势时间轴）
  loadImpactLayer();   // v0.49：灾情影响范围（独立灾难模型，severity 热力 + 时间轴）
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
  // 初始化：默认选中首个事件（左侧事件列表高亮用 state.t）
  if (D.events && D.events.length) state.t = 0;
  applyView(false); wireControl(); wireChgis(); wireBattle(); wireRouteTimeline(); buildRouteTimeline(); refresh();

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
    var meta = routeMeta();
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
  function ordOfDate(at) {
    var s = String(at || ''), core = s.replace(/^B/, '').replace(/-/g, '');
    var n = parseInt(core, 10);
    return isNaN(n) ? null : (s.charAt(0) === 'B' ? -n : n);
  }
  // 行军路线回放序列：优先 BattleLayer（含跨场景/接战回退），否则用 bundle 的 D.timeline
  // （file:// 下 BattleLayer fetch 失败也能用——v0.48.1）。
  function routeMeta() {
    if (window.BattleLayer) {
      var m = BattleLayer.getRouteMeta(sceneKey);
      if (m && m.ready) return m;
    }
    if (D.timeline && D.timeline.length) {
      var tl = D.timeline.map(function (t) {
        return { at: t.at, ord: ordOfDate(t.at), era: t.era || '', label: t.label || '', key: !!t.key };
      }).sort(function (a, b) { return (a.ord == null ? 0 : a.ord) - (b.ord == null ? 0 : b.ord); });
      var year = tl.length ? parseInt(String(tl[0].at).replace(/^B/, '').split('-')[0], 10) : null;
      return { ready: true, timeline: tl, year: year, scene: sceneKey };
    }
    return { ready: false, timeline: [], year: null, scene: sceneKey };
  }
  function buildRouteTimeline() {
    var strip = document.getElementById('routeTimeline');
    var track = document.getElementById('rtTrack');
    var eraEl = document.getElementById('rtEra');
    var badge = document.getElementById('rtYearBadge');
    if (!strip || !track) return;
    var meta = routeMeta();
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
      var meta = routeMeta();
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
