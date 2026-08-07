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

  var TG = SD.terrain;                // 共享高程网格
  var RIVERS = SD.rivers;             // 共享江河
  var WALL = SD.wall;                 // 共享边墙
  var SVGNS = 'http://www.w3.org/2000/svg';

  document.title = (META.title || sceneKey) + ' · 小菜狗的文明图景';

  /* ═══════════ 投影（与萨尔浒同框，开原在网格内）══════════ */
  var LON0 = 122.0, LON1 = 126.8, LAT0 = 40.0, LAT1 = 43.3;
  var W = 1000, H = 918;
  function px(lon) { return (lon - LON0) / (LON1 - LON0) * W; }
  function py(lat) { return (LAT1 - lat) / (LAT1 - LAT0) * H; }

  var PLACE = {};
  D.places.forEach(function (p) { PLACE[p.id] = p; });
  var SRC = {};
  D.sources.forEach(function (s) { SRC[s.id] = s; });

  var LAYER_META = {
    record:      { name: '史料原文',  color: '#8C6239', hint: '出自史料的直接记载' },
    scholarship: { name: '学界考证',  color: '#2E7D8F', hint: '现代研究者的考订结论' },
    inference:   { name: 'AI 推演',   color: '#9B59B6', hint: '模型生成，无史料依据' },
    gap:         { name: '史料缺口',  color: '#B0A99C', hint: '标记我们不知道什么' }
  };

  /* ═══════════ 状态 ═══════════ */
  var state = {
    sources: new Set(D.sources.map(function (s) { return s.id; })),
    layers:  new Set(['record', 'scholarship', 'gap']),
    terrain: { shade: true, tint: true, elev: false },
    route:   true,
    t: 0,
    tab: 'yan',
    selection: null
  };

  function visibleAssertions() {
    return D.assertions.filter(function (a) {
      return state.sources.has(a.source) && state.layers.has(a.layer);
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
  var view = { x: 0, y: 0, w: W, h: H };
  var fitW = W, cw = 1, ch = 1;
  var MIN_W = 26;

  function dataBounds() {
    var xs = [], ys = [];
    D.places.forEach(function (p) { xs.push(px(p.lon)); ys.push(py(p.lat)); });
    RIVERS.forEach(function (r) {
      r.path.forEach(function (c) { xs.push(px(c[0])); ys.push(py(c[1])); });
    });
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
  var drag = null;
  wrap.addEventListener('pointerdown', function (e) {
    if (e.button !== 0) return;
    drag = { sx: e.clientX, sy: e.clientY, vx: view.x, vy: view.y, moved: 0 };
    wrap.setPointerCapture(e.pointerId); wrap.classList.add('grabbing');
  });
  wrap.addEventListener('pointermove', function (e) {
    if (!drag) return;
    var dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
    drag.moved = Math.max(drag.moved, Math.abs(dx) + Math.abs(dy));
    view.x = drag.vx - dx / cw * view.w; view.y = drag.vy - dy / ch * view.h;
    applyView(false);
  });
  function endDrag(e) {
    if (!drag) return; var moved = drag.moved; drag = null;
    wrap.classList.remove('grabbing');
    if (e && e.pointerId != null) { try { wrap.releasePointerCapture(e.pointerId); } catch (x) {} }
    if (moved > 4) drawDynamic();
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

  /* ═══════════ 地形 ═══════════ */
  var RAMP = [
    [0,    [214, 227, 232]], [1,    [243, 240, 229]], [80,   [235, 229, 212]],
    [250,  [223, 213, 188]], [500,  [208, 194, 161]], [900,  [191, 172, 136]],
    [1400, [173, 150, 115]], [1800, [156, 131,  98]]
  ];
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
  function buildTerrainImage() {
    if (!TG) return null;
    var nx = TG.nx, ny = TG.ny, E = TG.elev, c = document.createElement('canvas');
    c.width = nx; c.height = ny;
    var ctx = c.getContext('2d'), img = ctx.createImageData(nx, ny);
    var midLat = TG.lat0 + (ny - 1) * TG.step / 2;
    var cellY = TG.step * 111320, cellX = TG.step * 111320 * Math.cos(midLat * Math.PI / 180);
    var ZF = 2.6, zen = (90 - 45) * Math.PI / 180, azm = (360 - 315 + 90) * Math.PI / 180;
    function z(ix, iy) {
      ix = Math.max(0, Math.min(nx - 1, ix)); iy = Math.max(0, Math.min(ny - 1, iy));
      var v = E[iy * nx + ix]; return v == null ? 0 : v;
    }
    for (var iy = 0; iy < ny; iy++) for (var ix = 0; ix < nx; ix++) {
      var e = z(ix, iy);
      var dzdx = ((z(ix + 1, iy - 1) + 2 * z(ix + 1, iy) + z(ix + 1, iy + 1)) -
                  (z(ix - 1, iy - 1) + 2 * z(ix - 1, iy) + z(ix - 1, iy + 1))) / (8 * cellX);
      var dzdy = ((z(ix - 1, iy + 1) + 2 * z(ix, iy + 1) + z(ix + 1, iy + 1)) -
                  (z(ix - 1, iy - 1) + 2 * z(ix, iy - 1) + z(ix + 1, iy - 1))) / (8 * cellY);
      var slope = Math.atan(ZF * Math.sqrt(dzdx * dzdx + dzdy * dzdy));
      var aspect = Math.atan2(dzdy, -dzdx);
      var hs = Math.cos(zen) * Math.cos(slope) + Math.sin(zen) * Math.sin(slope) * Math.cos(azm - aspect);
      hs = Math.max(0, Math.min(1, hs));
      var col = state.terrain.tint ? rampColor(e) : [239, 235, 223];
      var f = state.terrain.shade ? (0.62 + 0.52 * hs) : 1;
      if (e <= 0) f = 1;
      var row = (ny - 1 - iy), o = (row * nx + ix) * 4;
      img.data[o] = Math.max(0, Math.min(255, col[0] * f));
      img.data[o + 1] = Math.max(0, Math.min(255, col[1] * f));
      img.data[o + 2] = Math.max(0, Math.min(255, col[2] * f));
      img.data[o + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    return c;
  }
  function drawTerrain() {
    var ctx = cv.getContext('2d'), dpr = window.devicePixelRatio || 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#EFECE2'; ctx.fillRect(0, 0, cv.width, cv.height);
    if (!TG || !tImg || (!state.terrain.shade && !state.terrain.tint)) return;
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
  function drawBase() {
    gBase.innerHTML = '';
    var gRiv = el('g', { fill: 'none', stroke: '#8FAEC2', 'stroke-linecap': 'round',
      'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke' }, gBase);
    RIVERS.forEach(function (r) {
      var wgt = (r.id === 'liaohe' || r.id === 'yalu') ? 2.4 : 1.7;
      el('path', { d: poly(r.path), 'stroke-width': wgt, 'vector-effect': 'non-scaling-stroke' }, gRiv);
      var mid = r.path[Math.floor(r.path.length / 2)];
      var tx = el('text', { x: px(mid[0]) + 6, y: py(mid[1]) - 5, class: 'river-label' }, gBase);
      tx.textContent = r.name;
    });
    el('path', { d: poly(WALL.path), fill: 'none', stroke: '#7A7466', 'stroke-width': 2,
      'stroke-dasharray': '1 5', 'stroke-linecap': 'round', opacity: '.85',
      'vector-effect': 'non-scaling-stroke' }, gBase);
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

    D.edges.forEach(function (ed) {
      var a = PLACE[ed.from], b = PLACE[ed.to]; if (!a || !b) return;
      var st = EDGE_STYLE[ed.type] || EDGE_STYLE.admin;
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
  }
  function renderTerrainCtl() {
    var box = document.getElementById('terrainCtl'); box.innerHTML = '';
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
  /* 邻接切片：直接扫注册表顺序，新增县自动出现在这里 */
  function renderSiblings() {
    var box = document.getElementById('siblingList'); if (!box) return;
    box.innerHTML = '';
    var regions = {};
    (SD.regions || []).forEach(function (r) { regions[r.id] = r.name; });
    var lastRegion = null;
    (SD.scene_order || Object.keys(SD.scenes)).forEach(function (k) {
      var sc = SD.scenes[k]; if (!sc) return;
      var m = sc.meta || {};
      if (m.region && m.region !== lastRegion) {
        lastRegion = m.region;
        var h = document.createElement('div');
        h.className = 'sib-region';
        h.textContent = regions[m.region] || m.region;
        box.appendChild(h);
      }
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

  /* ═══════════ 沿革时间轴 + 事件 ═══════════ */
  function renderTimeline() {
    var track = document.getElementById('tlTrack'); track.innerHTML = '';
    var n = D.events.length;
    if (!n) {
      document.getElementById('dateEra').textContent = '—';
      document.getElementById('dateLabel').textContent = '本切片尚未录入建置沿革';
      return;
    }
    D.events.forEach(function (ev, i) {
      var node = document.createElement('div');
      var cls = 'tl-node'; if (ev.kind === '战事') cls += ' key';
      if (i === state.t) cls += ' now';
      // n === 1 时 (n-1) 为 0，除法得 NaN——单事件切片会整条时间轴消失
      node.className = cls; node.style.left = (n > 1 ? (i / (n - 1) * 100) : 50) + '%';
      if (i === 0) node.style.transform = 'translateX(-14px)';
      if (i === n - 1) node.style.transform = 'translateX(calc(-100% + 14px))';
      node.innerHTML = '<div class="tl-dot"></div><div class="tl-cap">' + ev.era + '</div>';
      node.title = ev.title;
      node.addEventListener('click', function () { state.t = i; refresh(); goTab('yan'); });
      track.appendChild(node);
    });
    var cur = D.events[Math.min(state.t, n - 1)];
    document.getElementById('dateEra').textContent = cur.era;
    document.getElementById('dateLabel').textContent = cur.title;
  }
  function renderEvents() {
    var lead = document.getElementById('evLead');
    lead.innerHTML = CFG.lead || META.lead ||
      '本切片为辽东走廊的县级 LOD 视图：建置沿革与关键战事并列，点时间轴或左栏跳转。';
    var box = document.getElementById('eventsPane'); box.innerHTML = '';
    D.events.forEach(function (ev, i) {
      var n = document.createElement('div');
      n.className = 'ev' + (i === state.t ? ' sel' : '');
      n.innerHTML = '<div class="ev-when"><div class="era">' + ev.era + '</div>' +
        '<div class="yr">' + (ev.year || '') + '</div></div>' +
        '<div class="ev-body"><div class="ev-title">' + ev.title +
        '<span class="ev-kind">' + ev.kind + '</span></div>' +
        '<div class="ev-text">' + ev.text + '</div></div>';
      n.addEventListener('click', function () { state.t = i; refresh(); });
      box.appendChild(n);
    });
  }

  /* ═══════════ 三方史料（dossier 事件）══════════ */
  /* 立场分桶不在这里硬编码——它来自 data/vocab.json，经 build.py 注入。
     改一行词表，全站（界面 + 共振度 + lint）同步改变，这是"立场靠来源派生"
     这句话能被审计的前提。 */
  var VOCAB = (SD && SD.vocab) || {};
  var PARTY_BUCKET = VOCAB.party_bucket || {};
  var PARTY_ORDER = VOCAB.parties || ['明方', '清方', '朝鲜', '综述考订'];
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
               a.subject === DOSSIER;
      });
      var gaps = D.assertions.filter(function (a) {
        return a.layer === 'gap' && a.subject === DOSSIER &&
               PARTY_BUCKET[SRC[a.source].party] === name;
      });
      var n = document.createElement('div');
      n.className = 'pty';
      var head = '<div class="pty-head"><span class="pty-name">' + name +
        (isBad ? ' <em style="color:#B23A48;font-style:normal">· 未登记词表</em>' : '') +
        '</span>' +
        '<span class="pty-n" style="background:' + (isBad ? '#B23A48' : b.color) + '">' +
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
      }
      items.forEach(function (a) {
        body += '<div class="pty-row"><span class="pty-k">' + a.predicate + '</span>' +
          '<span class="pty-v">' + a.value_text + ' <em style="color:#918777">（《' +
          SRC[a.source].title + '》）</em></span></div>';
      });
      gaps.forEach(function (a) {
        body += '<div class="pty-row"><span class="pty-k">缺口</span>' +
          '<span class="pty-v" style="color:#B23A48">' + a.value_text + '</span></div>';
      });
      body += '</div>';
      n.innerHTML = head + body;
      box.appendChild(n);
    });
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
      var chips = (l.skills || []).map(function (s) {
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
    var list = visibleAssertions().filter(function (a) { return a.place === pid; });
    var sub = p.modern + (p.elev != null ? ' · 海拔 ' + p.elev + ' m' : '') +
      (p.note ? '<br>' + p.note : '');
    state.selection = { type: 'place', title: p.name, sub: sub, list: list };
    goTab('inspect'); renderInspect();
  }
  function selectEdge(ed) {
    var a = PLACE[ed.from], b = PLACE[ed.to];
    var list = visibleAssertions().filter(function (x) {
      return x.place === ed.from || x.place === ed.to;
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
    var live = sel.list.filter(function (a) { return state.sources.has(a.source) && state.layers.has(a.layer); });
    t.innerHTML = sel.title + (sel.sub ? ' <span style="font-weight:400;font-size:10px;color:var(--ink-3)">' +
      sel.sub + '</span>' : '');
    if (!live.length) {
      box.innerHTML = '<div class="empty-hint">在当前采信范围内，此处没有任何断言。<br><br>' +
        '这不代表这里什么都没发生 —— 只代表你选的史料没有记它。</div>'; return;
    }
    box.innerHTML = live.map(assertionCard).join('');
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
    EDGE_LEGEND.forEach(function (it) {
      var st = EDGE_STYLE[it.k]; if (!st) return;
      var n = document.createElement('div'); n.className = 'lg-item';
      n.innerHTML = '<i class="lg-line' + (st.dash ? ' lg-dash' : '') +
        '" style="--c:' + st.color + '"></i>' + it.name;
      box.appendChild(n);
    });
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

  /* ═══════════ 刷新 ═══════════ */
  function refresh() {
    renderEdgeLegend(); renderSources(); renderLayers(); renderTerrainCtl(); renderEventList();
    renderSiblings(); renderTimeline(); drawDynamic(); drawTerrain();
    renderEvents(); renderParties(); renderConflicts(); renderLeads(); renderInspect();
    var vis = visibleAssertions().length;
    document.getElementById('statVisible').textContent = vis;
  }

  /* ═══════════ 启动 ═══════════ */
  measure(); fitView(); tImg = buildTerrainImage(); initMap(); applyView(false); refresh();
})();
