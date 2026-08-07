/* 小菜狗的文明图景 · 萨尔浒演示切片
 *
 * 这个文件只做一件事：把「断言集合」投影成「地图 + 数字」。
 * 它自己不判断任何事情是不是真的 —— 真伪由用户的采信选择决定，
 * 系统只负责诚实地告诉你：你选了什么，你因此看不见什么。
 *
 * 本轮新增的三件事，其实是同一件事的三个面：
 *   地形     —— 行军速度的物理约束
 *   局部兵力比 —— 「以少胜多多半是局部优势累积」的可计算版本
 *   缩放平移 —— 让人能真的看清上面两样东西
 */
(function () {
  'use strict';

  var SD = window.SANDBOX_DATA;
  var D = SD.scenes.sarhu;          // 萨尔浒战役切片
  var SVGNS = 'http://www.w3.org/2000/svg';

  /* ═══════════ 投影 ═══════════ */
  var LON0 = 122.0, LON1 = 126.8, LAT0 = 40.0, LAT1 = 43.3;
  var W = 1000, H = 918;
  function px(lon) { return (lon - LON0) / (LON1 - LON0) * W; }
  function py(lat) { return (LAT1 - lat) / (LAT1 - LAT0) * H; }

  var PLACE = {};
  D.places.forEach(function (p) { PLACE[p.id] = p; });
  var SRC = {};
  D.sources.forEach(function (s) { SRC[s.id] = s; });
  var COL = {};
  D.columns.forEach(function (c) { COL[c.id] = c; });
  COL.jin = { id: 'jin', name: '后金', color: '#3D6B4F' };

  var RT = {};
  (D.route_terrain || []).forEach(function (t) { RT[t.route] = t; });

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
    routes:  new Set(D.routes.map(function (r) { return r.id; })),
    terrain: { shade: true, tint: true, elev: false },
    t: 0,
    preset: 'all',
    tab: 'local',
    playing: false,
    timer: null,
    selection: null
  };

  var PRESETS = [
    { id: 'all',    name: '全部并陈', srcs: null,
      note: '所有版本同时在场。数字互相打架，这才是史料的原貌。' },
    { id: 'ming',   name: '只信明方', srcs: ['mingshi', 'ming_shenzong_shilu', 'guoque'],
      note: '明方视角：败因归于主将莽撞，敌军规模被放大。注意《明史》成书于清，它对明军败绩的解释并非中立。' },
    { id: 'jin',    name: '只信金方', srcs: ['qing_taizu_shilu'],
      note: '胜方视角：明军二十万，己方筑坝决水。四路明军的行军细节大量缺失 —— 后金记录的是自己怎么赢，不是敌人怎么走。' },
    { id: 'joseon', name: '只信亲历', srcs: ['zhazhong_rilu'],
      note: '朝鲜从事官李民寏的亲历日记。地图上只剩东路一条线 —— 他确实只看见了这一路。每一份史料都只是一个人站的位置。' },
    { id: 'modern', name: '只信考证', srcs: ['modern'],
      note: '现代考订视角：数字变得合理，但引文全部消失。你得到了可信的结论，失去了历史的声音。' }
  ];

  /* ═══════════ 过滤 ═══════════ */
  function visibleAssertions() {
    return D.assertions.filter(function (a) {
      return state.sources.has(a.source) && state.layers.has(a.layer);
    });
  }
  function pick(subject, predicate) {
    var list = visibleAssertions().filter(function (a) {
      return a.subject === subject && a.predicate === predicate;
    });
    list.sort(function (x, y) { return (y.confidence || 0) - (x.confidence || 0); });
    return list;
  }
  function fmt(n) { return Number(n).toLocaleString('en-US'); }

  /* ═══════════════════════════════════════════════════
     视图：缩放与平移
     地图是一个可以走近去看的东西，不是一张贴在墙上的画。
     ═══════════════════════════════════════════════════ */
  var wrap = document.getElementById('mapWrap');
  var svg  = document.getElementById('map');
  var cv   = document.getElementById('terrainCv');
  var view = { x: 0, y: 0, w: W, h: H };
  var fitW = W, cw = 1, ch = 1;
  var MIN_W = 28;                 // 最深缩放：约 1.4 公里横跨全屏

  function dataBounds() {
    var xs = [], ys = [];
    D.places.forEach(function (p) { xs.push(px(p.lon)); ys.push(py(p.lat)); });
    SD.rivers.forEach(function (r) {
      r.path.forEach(function (c) { xs.push(px(c[0])); ys.push(py(c[1])); });
    });
    return {
      x0: Math.min.apply(null, xs), x1: Math.max.apply(null, xs),
      y0: Math.min.apply(null, ys), y1: Math.max.apply(null, ys)
    };
  }

  function fitView() {
    var b = dataBounds();
    var pad = 46;
    var bw = (b.x1 - b.x0) + pad * 2;
    var bh = (b.y1 - b.y0) + pad * 2;
    var ar = cw / ch;
    var w, h;
    if (bw / bh > ar) { w = bw; h = bw / ar; } else { h = bh; w = bh * ar; }
    fitW = w;
    view = {
      x: (b.x0 + b.x1) / 2 - w / 2,
      y: (b.y0 + b.y1) / 2 - h / 2,
      w: w, h: h
    };
  }

  function measure() {
    var r = wrap.getBoundingClientRect();
    cw = Math.max(1, r.width);
    ch = Math.max(1, r.height);
    var dpr = window.devicePixelRatio || 1;
    cv.width  = Math.round(cw * dpr);
    cv.height = Math.round(ch * dpr);
  }

  function clampView() {
    view.w = Math.min(fitW * 1.6, Math.max(MIN_W, view.w));
    view.h = view.w * (ch / cw);
    // 不允许把数据整个推出视野
    var b = dataBounds(), slack = Math.max(view.w, view.h) * 0.7;
    view.x = Math.min(b.x1 + slack - view.w, Math.max(b.x0 - slack, view.x));
    view.y = Math.min(b.y1 + slack - view.h, Math.max(b.y0 - slack, view.y));
  }

  var rafPending = false;
  function applyView(redrawSvg) {
    clampView();
    svg.setAttribute('viewBox',
      view.x.toFixed(2) + ' ' + view.y.toFixed(2) + ' ' +
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
    return {
      x: view.x + (clientX - r.left) / r.width * view.w,
      y: view.y + (clientY - r.top) / r.height * view.h
    };
  }

  wrap.addEventListener('wheel', function (e) {
    e.preventDefault();
    var k = e.deltaY > 0 ? 1.14 : 1 / 1.14;
    var a = screenToMap(e.clientX, e.clientY);
    var before = view.w;
    view.w *= k;
    view.w = Math.min(fitW * 1.6, Math.max(MIN_W, view.w));
    k = view.w / before;                 // 夹紧后的真实倍率
    view.h = view.w * (ch / cw);
    view.x = a.x - (a.x - view.x) * k;
    view.y = a.y - (a.y - view.y) * k;
    applyView();
  }, { passive: false });

  var drag = null;
  wrap.addEventListener('pointerdown', function (e) {
    if (e.button !== 0) return;
    drag = { sx: e.clientX, sy: e.clientY, vx: view.x, vy: view.y, moved: 0 };
    wrap.setPointerCapture(e.pointerId);
    wrap.classList.add('grabbing');
  });
  wrap.addEventListener('pointermove', function (e) {
    if (!drag) return;
    var dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
    drag.moved = Math.max(drag.moved, Math.abs(dx) + Math.abs(dy));
    view.x = drag.vx - dx / cw * view.w;
    view.y = drag.vy - dy / ch * view.h;
    applyView(false);
  });
  function endDrag(e) {
    if (!drag) return;
    var moved = drag.moved;
    drag = null;
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

  /* ═══════════════════════════════════════════════════
     地形：真实高程，不是画出来的
     数据 ASTER GDEM v3 (NASA/METI)，97×67 网格，本地采样落盘。
     山影算法为标准 ESRI hillshade，方位角 315°、高度角 45°。
     ═══════════════════════════════════════════════════ */
  var TG = SD.terrain, tImg = null;

  // 高程配色：宣纸底上的淡赭，避开卫星图那种俗气的绿黄棕
  var RAMP = [
    [0,    [214, 227, 232]],
    [1,    [243, 240, 229]],
    [80,   [235, 229, 212]],
    [250,  [223, 213, 188]],
    [500,  [208, 194, 161]],
    [900,  [191, 172, 136]],
    [1400, [173, 150, 115]],
    [1800, [156, 131,  98]]
  ];
  function rampColor(e) {
    if (e <= 0) return RAMP[0][1];
    for (var i = 1; i < RAMP.length; i++) {
      if (e <= RAMP[i][0]) {
        var a = RAMP[i - 1], b = RAMP[i];
        var t = (e - a[0]) / (b[0] - a[0] || 1);
        return [
          a[1][0] + (b[1][0] - a[1][0]) * t,
          a[1][1] + (b[1][1] - a[1][1]) * t,
          a[1][2] + (b[1][2] - a[1][2]) * t
        ];
      }
    }
    return RAMP[RAMP.length - 1][1];
  }

  function buildTerrainImage() {
    if (!TG) return null;
    var nx = TG.nx, ny = TG.ny, E = TG.elev;
    var c = document.createElement('canvas');
    c.width = nx; c.height = ny;
    var ctx = c.getContext('2d');
    var img = ctx.createImageData(nx, ny);

    // 网格真实边长（米）。纬向恒定，经向随纬度收缩。
    var midLat = TG.lat0 + (ny - 1) * TG.step / 2;
    var cellY = TG.step * 111320;
    var cellX = TG.step * 111320 * Math.cos(midLat * Math.PI / 180);
    var ZF = 2.6;                                   // 垂直夸张，纯视觉
    var zen = (90 - 45) * Math.PI / 180;
    var azm = (360 - 315 + 90) * Math.PI / 180;

    function z(ix, iy) {
      ix = Math.max(0, Math.min(nx - 1, ix));
      iy = Math.max(0, Math.min(ny - 1, iy));
      var v = E[iy * nx + ix];
      return v == null ? 0 : v;
    }

    for (var iy = 0; iy < ny; iy++) {
      for (var ix = 0; ix < nx; ix++) {
        var e = z(ix, iy);
        var dzdx = ((z(ix + 1, iy - 1) + 2 * z(ix + 1, iy) + z(ix + 1, iy + 1)) -
                    (z(ix - 1, iy - 1) + 2 * z(ix - 1, iy) + z(ix - 1, iy + 1))) / (8 * cellX);
        var dzdy = ((z(ix - 1, iy + 1) + 2 * z(ix, iy + 1) + z(ix + 1, iy + 1)) -
                    (z(ix - 1, iy - 1) + 2 * z(ix, iy - 1) + z(ix + 1, iy - 1))) / (8 * cellY);
        var slope  = Math.atan(ZF * Math.sqrt(dzdx * dzdx + dzdy * dzdy));
        var aspect = Math.atan2(dzdy, -dzdx);
        var hs = Math.cos(zen) * Math.cos(slope) +
                 Math.sin(zen) * Math.sin(slope) * Math.cos(azm - aspect);
        hs = Math.max(0, Math.min(1, hs));

        var col = state.terrain.tint ? rampColor(e) : [239, 235, 223];
        var f = state.terrain.shade ? (0.62 + 0.52 * hs) : 1;
        if (e <= 0) f = 1;                          // 水面不打光

        // 行优先，且上下翻转：网格 iy=0 在南，图像行 0 在北
        var row = (ny - 1 - iy);
        var o = (row * nx + ix) * 4;
        img.data[o]     = Math.max(0, Math.min(255, col[0] * f));
        img.data[o + 1] = Math.max(0, Math.min(255, col[1] * f));
        img.data[o + 2] = Math.max(0, Math.min(255, col[2] * f));
        img.data[o + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
    return c;
  }

  function drawTerrain() {
    var ctx = cv.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#EFECE2';
    ctx.fillRect(0, 0, cv.width, cv.height);
    if (!TG || !tImg || (!state.terrain.shade && !state.terrain.tint)) return;

    var lonMax = TG.lon0 + (TG.nx - 1) * TG.step;
    var latMax = TG.lat0 + (TG.ny - 1) * TG.step;
    var gx = px(TG.lon0), gw = px(lonMax) - px(TG.lon0);
    var gy = py(latMax),  gh = py(TG.lat0) - py(latMax);

    var s = (cw / view.w) * dpr;
    ctx.setTransform(s, 0, 0, s, -view.x * s, -view.y * s);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(tImg, gx, gy, gw, gh);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  /* ═══════════ SVG 底图（水系、边墙） ═══════════ */
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

  var gBase, gRoutes, gNodes, gMarks, gLabels;

  function initMap() {
    svg.innerHTML = '';
    gBase   = el('g', {}, svg);
    gRoutes = el('g', {}, svg);
    gMarks  = el('g', {}, svg);
    gNodes  = el('g', {}, svg);
    gLabels = el('g', {}, svg);
    drawBase();
  }

  function drawBase() {
    gBase.innerHTML = '';
    // 河流
    var gRiv = el('g', {
      fill: 'none', stroke: '#8FAEC2', 'stroke-linecap': 'round',
      'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke'
    }, gBase);
    SD.rivers.forEach(function (r) {
      var wgt = (r.id === 'liaohe' || r.id === 'yalu') ? 2.4 : 1.7;
      el('path', { d: poly(r.path), 'stroke-width': wgt, 'vector-effect': 'non-scaling-stroke' }, gRiv);
      var mid = r.path[Math.floor(r.path.length / 2)];
      var tx = el('text', { x: px(mid[0]) + 6, y: py(mid[1]) - 5, class: 'river-label' }, gBase);
      tx.textContent = r.name;
    });
    // 辽东边墙
    el('path', {
      d: poly(SD.wall.path), fill: 'none', stroke: '#7A7466',
      'stroke-width': 2, 'stroke-dasharray': '1 5', 'stroke-linecap': 'round',
      opacity: '.85', 'vector-effect': 'non-scaling-stroke'
    }, gBase);
    var wm = SD.wall.path[2];
    var wl = el('text', { x: px(wm[0]) - 60, y: py(wm[1]), class: 'place-label minor' }, gBase);
    wl.textContent = '辽东边墙';
  }

  /* ═══════════ 地图动态层 ═══════════ */
  var routeLen = {};

  function routeShown(r) { return state.routes.has(r.id); }
  function routeBacked(r) {
    return r.source_support.some(function (s) { return state.sources.has(s); });
  }

  function drawDynamic() {
    if (!gRoutes) return;
    gRoutes.innerHTML = ''; gNodes.innerHTML = ''; gMarks.innerHTML = ''; gLabels.innerHTML = '';
    var now = D.timeline[state.t].at;

    // ── 地名点
    D.places.forEach(function (p) {
      var big = ['city', 'capital'].indexOf(p.type) >= 0;
      var x = px(p.lon), y = py(p.lat);
      el('circle', {
        cx: x, cy: y, r: big ? 4.2 : 2.8, class: 'pnode' + (big ? ' big' : ''),
        fill: big ? '#2A2521' : '#FBF9F3',
        stroke: '#2A2521', 'stroke-width': 1.3, 'vector-effect': 'non-scaling-stroke'
      }, gNodes);
      var lb = el('text', {
        x: x + (big ? 7 : 5.5), y: y + 3.6,
        class: 'place-label' + (big ? '' : ' minor')
      }, gNodes);
      lb.textContent = p.name.replace(/（.*?）/, '');
      if (state.terrain.elev && p.elev != null) {
        var ev = el('text', { x: x + (big ? 7 : 5.5), y: y + 13, class: 'place-elev' }, gNodes);
        ev.textContent = p.elev + ' m';
      }
      var hit = el('circle', { cx: x, cy: y, r: 13, fill: 'transparent', class: 'node-hit' }, gNodes);
      hit.addEventListener('click', function () { selectPlace(p.id); });
      if (p.type === 'battlefield') {
        el('circle', {
          cx: x, cy: y, r: 8, fill: 'none', stroke: '#B23A48',
          'stroke-width': 1, opacity: '.4', 'vector-effect': 'non-scaling-stroke'
        }, gNodes);
      }
    });

    // ── 行军轨迹
    D.routes.forEach(function (r) {
      if (!routeShown(r)) { routeLen[r.id] = 0; return; }
      var backed = routeBacked(r);
      var reached = r.nodes.filter(function (n) { return n.at <= now; });
      if (reached.length === 0) { routeLen[r.id] = 0; return; }

      var color = COL[r.column] ? COL[r.column].color : '#666';
      var pts = reached.map(function (n) {
        var p = PLACE[n.place];
        return [px(p.lon), py(p.lat)];
      });
      var d = pts.map(function (p, i) {
        return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1);
      }).join(' ');

      if (pts.length > 1) {
        el('path', {
          d: d, fill: 'none', stroke: '#F7F4EC',
          'stroke-width': 6.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
          opacity: backed ? .92 : .5, 'vector-effect': 'non-scaling-stroke'
        }, gRoutes);
      }

      var path = el('path', {
        d: d, fill: 'none', stroke: backed ? color : '#9A9382',
        'stroke-width': r.side === 'jin' ? 3.2 : 2.4,
        'stroke-linecap': 'round', 'stroke-linejoin': 'round',
        'stroke-dasharray': r.side === 'jin' ? '9 5' : (backed ? null : '4 4'),
        opacity: backed ? 1 : .6,
        class: 'node-hit', 'vector-effect': 'non-scaling-stroke'
      }, gRoutes);
      path.addEventListener('click', function () { selectRoute(r.id); });

      if (pts.length > 1 && r.side !== 'jin') {
        var L = path.getTotalLength();
        var prev = routeLen[r.id] || 0;
        if (L > prev + 0.5) {
          path.style.transition = 'none';
          path.style.strokeDasharray = L;
          path.style.strokeDashoffset = (L - prev);
          void path.getBoundingClientRect();
          path.style.transition = 'stroke-dashoffset .55s cubic-bezier(.4,0,.2,1)';
          path.style.strokeDashoffset = 0;
        }
        routeLen[r.id] = L;
      }

      reached.forEach(function (n) {
        var p = PLACE[n.place];
        el('circle', {
          cx: px(p.lon), cy: py(p.lat), r: 3.4,
          fill: backed ? color : '#9A9382', stroke: '#FBF9F3', 'stroke-width': 1.4,
          opacity: backed ? 1 : .6, 'vector-effect': 'non-scaling-stroke'
        }, gMarks);
      });

      if (pts.length > 1) {
        var a = pts[pts.length - 2], b = pts[pts.length - 1];
        var ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
        el('path', {
          d: 'M0 0 L-9 -4.2 L-9 4.2 Z', fill: backed ? color : '#9A9382',
          transform: 'translate(' + b[0] + ',' + b[1] + ') rotate(' + ang + ')'
        }, gMarks);
      }

      var last = pts[pts.length - 1];
      var tl = el('text', {
        x: last[0] + 11, y: last[1] - 9, class: 'route-label',
        fill: backed ? color : '#7C7565'
      }, gLabels);
      tl.textContent = (r.name.split(' · ')[1] || r.name).replace(/（.*?）/, '') +
                       (backed ? '' : ' ·无据');

      if (r.outcome && r.outcome.at <= now && backed) {
        var lp = PLACE[r.nodes[r.nodes.length - 1].place];
        if (r.outcome.type === 'annihilated' || r.outcome.type === 'routed') {
          var mx = px(lp.lon), my = py(lp.lat);
          var g = el('g', { opacity: '.95' }, gMarks);
          el('circle', { cx: mx, cy: my, r: 11, fill: 'none', stroke: '#B23A48',
            'stroke-width': 2, 'vector-effect': 'non-scaling-stroke' }, g);
          el('path', {
            d: 'M' + (mx - 5) + ' ' + (my - 5) + ' L' + (mx + 5) + ' ' + (my + 5) +
               ' M' + (mx + 5) + ' ' + (my - 5) + ' L' + (mx - 5) + ' ' + (my + 5),
            stroke: '#B23A48', 'stroke-width': 2.2, 'stroke-linecap': 'round',
            'vector-effect': 'non-scaling-stroke'
          }, g);
        }
      }
    });

    // ── 史料缺口标记
    if (state.layers.has('gap')) {
      visibleAssertions().filter(function (a) { return a.layer === 'gap'; }).forEach(function (a) {
        var p = PLACE[a.place]; if (!p) return;
        var x = px(p.lon) - 16, y = py(p.lat) - 14;
        var g = el('g', { class: 'node-hit' }, gLabels);
        el('circle', { cx: x, cy: y, r: 8.5, fill: '#FBF9F3', stroke: '#B0A99C',
          'stroke-width': 1.4, 'stroke-dasharray': '3 2', 'vector-effect': 'non-scaling-stroke' }, g);
        var q = el('text', { x: x, y: y + 4.2, 'text-anchor': 'middle', class: 'place-label minor' }, g);
        q.textContent = '?';
        g.addEventListener('click', function () { selectAssertions('史料缺口', [a]); goTab('inspect'); });
      });
    }
  }

  /* ═══════════ 左栏 ═══════════ */
  function renderSources() {
    var box = document.getElementById('sourceList');
    box.innerHTML = '';
    D.sources.forEach(function (s) {
      var on = state.sources.has(s.id);
      var n = document.createElement('div');
      n.className = 'src' + (on ? ' on' : ' off');
      n.style.setProperty('--sc', s.color);
      n.innerHTML =
        '<div class="src-tick">' + (on ? '✓' : '') + '</div>' +
        '<div class="src-body">' +
          '<div class="src-name">《' + s.title + '》</div>' +
          '<div class="src-meta"><span class="src-stance">' + s.stance_label + '</span>' +
            s.distance_label + '</div>' +
        '</div>';
      n.addEventListener('click', function () {
        if (state.sources.has(s.id)) state.sources.delete(s.id);
        else state.sources.add(s.id);
        state.preset = null;
        refresh();
      });
      box.appendChild(n);
    });
  }

  function renderPresets() {
    var box = document.getElementById('presetList');
    box.innerHTML = '';
    PRESETS.forEach(function (p) {
      var b = document.createElement('button');
      b.className = 'preset' + (state.preset === p.id ? ' active' : '');
      b.textContent = p.name;
      b.addEventListener('click', function () {
        state.preset = p.id;
        state.sources = new Set(p.srcs || D.sources.map(function (s) { return s.id; }));
        refresh();
      });
      box.appendChild(b);
    });
    var note = document.getElementById('presetNote');
    var cur = PRESETS.filter(function (p) { return p.id === state.preset; })[0];
    if (cur) { note.textContent = cur.note; note.classList.add('show'); }
    else { note.classList.remove('show'); }
  }

  function renderRoutes() {
    var box = document.getElementById('routeList');
    box.innerHTML = '';
    D.routes.forEach(function (r) {
      var on = state.routes.has(r.id);
      var backed = routeBacked(r);
      var color = COL[r.column] ? COL[r.column].color : '#666';
      var t = RT[r.id];
      var n = document.createElement('div');
      n.className = 'rt' + (on ? ' on' : ' off');
      n.style.setProperty('--rc', color);
      n.title = r.outcome ? r.outcome.text : '';
      n.innerHTML =
        '<div class="rt-box">' + (on ? '✓' : '') + '</div>' +
        '<i class="rt-line' + (r.side === 'jin' ? ' dash' : '') + '"></i>' +
        '<span class="rt-name">' + r.name.replace(/（.*?）/, '') + '</span>' +
        '<span class="rt-meta">' +
          (t ? t.total_li + '里' : '') +
          (backed ? '' : ' <span class="rt-nosrc">无据</span>') +
        '</span>';
      n.addEventListener('click', function () {
        if (state.routes.has(r.id)) state.routes.delete(r.id);
        else state.routes.add(r.id);
        routeLen = {};
        refresh();
      });
      box.appendChild(n);
    });
    var all = document.createElement('div');
    all.className = 'rt-all';
    all.innerHTML = '<button data-a="all">全选</button>' +
                    '<button data-a="none">全不选</button>' +
                    '<button data-a="ming">只看明军四路</button>';
    all.querySelectorAll('button').forEach(function (b) {
      b.addEventListener('click', function () {
        var a = b.getAttribute('data-a');
        if (a === 'all') state.routes = new Set(D.routes.map(function (r) { return r.id; }));
        if (a === 'none') state.routes = new Set();
        if (a === 'ming') state.routes = new Set(D.routes
          .filter(function (r) { return r.side === 'ming'; })
          .map(function (r) { return r.id; }));
        routeLen = {};
        refresh();
      });
    });
    box.appendChild(all);
  }

  function renderTerrainCtl() {
    var box = document.getElementById('terrainCtl');
    box.innerHTML = '';
    var items = [
      { k: 'shade', name: '山影晕渲', c: '#8C7B5E' },
      { k: 'tint',  name: '高程配色', c: '#A88C5A' },
      { k: 'elev',  name: '标注海拔', c: '#7A6E5C' }
    ];
    items.forEach(function (it) {
      var on = state.terrain[it.k];
      var n = document.createElement('div');
      n.className = 'lay' + (on ? '' : ' off');
      n.style.setProperty('--lc', it.c);
      n.innerHTML = '<i class="lay-dot"></i><span class="lay-name">' + it.name + '</span>' +
        '<span class="lay-n">' + (on ? '开' : '关') + '</span>';
      n.addEventListener('click', function () {
        state.terrain[it.k] = !state.terrain[it.k];
        if (it.k !== 'elev') tImg = buildTerrainImage();
        refresh();
      });
      box.appendChild(n);
    });
    var src = document.getElementById('terrainSrc');
    if (TG) {
      src.innerHTML = '高程为实测值，非示意。<br><b>' + (TG.source || '') + '</b><br>' +
        '网格 ' + TG.nx + '×' + TG.ny + '，' + TG.min + '–' + TG.max + ' m。' +
        '海面与水体在原始数据中记为 0。';
    } else {
      src.innerHTML = '未载入高程网格。运行 <b>tools/fetch_terrain.py</b> 后重新编译。';
    }
  }

  function renderLayers() {
    var box = document.getElementById('layerList');
    box.innerHTML = '';
    Object.keys(LAYER_META).forEach(function (k) {
      var m = LAYER_META[k];
      var on = state.layers.has(k);
      var cnt = D.assertions.filter(function (a) {
        return a.layer === k && state.sources.has(a.source);
      }).length;
      var n = document.createElement('div');
      n.className = 'lay' + (on ? '' : ' off');
      n.style.setProperty('--lc', m.color);
      n.title = m.hint;
      n.innerHTML = '<i class="lay-dot"></i><span class="lay-name">' + m.name + '</span>' +
        '<span class="lay-n">' + cnt + '</span>';
      n.addEventListener('click', function () {
        if (state.layers.has(k)) state.layers.delete(k); else state.layers.add(k);
        refresh();
      });
      box.appendChild(n);
    });
  }

  function renderLegend() {
    var box = document.getElementById('mapLegend');
    box.innerHTML = '';
    D.routes.forEach(function (r) {
      var color = COL[r.column] ? COL[r.column].color : '#666';
      var on = state.routes.has(r.id);
      var n = document.createElement('div');
      n.className = 'lg-item' + (on ? '' : ' off');
      n.innerHTML = '<i class="lg-line' + (r.side === 'jin' ? ' lg-dash' : '') +
        '" style="--c:' + color + '"></i>' + r.name.replace(/（.*?）/, '');
      n.addEventListener('click', function () {
        if (state.routes.has(r.id)) state.routes.delete(r.id);
        else state.routes.add(r.id);
        routeLen = {};
        refresh();
      });
      box.appendChild(n);
    });

    var eb = document.getElementById('elevLegend');
    if (!TG) { eb.style.display = 'none'; return; }
    eb.style.display = '';
    var stops = RAMP.map(function (s) {
      var c = s[1];
      return 'rgb(' + Math.round(c[0]) + ',' + Math.round(c[1]) + ',' + Math.round(c[2]) + ') ' +
             (Math.min(1800, s[0]) / 1800 * 100).toFixed(0) + '%';
    }).join(',');
    eb.innerHTML = '海拔 m' +
      '<div class="el-bar" style="background:linear-gradient(90deg,' + stops + ')"></div>' +
      '<div class="el-ticks"><span>0</span><span>500</span><span>1200</span><span>1800</span></div>';
  }

  /* ═══════════ 时间轴 ═══════════ */
  function renderTimeline() {
    var track = document.getElementById('tlTrack');
    track.innerHTML = '';
    var n = D.timeline.length;
    D.timeline.forEach(function (t, i) {
      var node = document.createElement('div');
      var cls = 'tl-node';
      if (t.key) cls += ' key';
      if (i < state.t) cls += ' past';
      if (i === state.t) cls += ' now';
      node.className = cls;
      node.style.left = (i / (n - 1) * 100) + '%';
      if (i === 0) node.style.transform = 'translateX(-14px)';
      if (i === n - 1) node.style.transform = 'translateX(calc(-100% + 14px))';
      node.innerHTML = '<div class="tl-dot"></div>' +
        '<div class="tl-cap">' + t.era.replace('万历四十七年', '') + '</div>';
      node.title = t.label;
      node.addEventListener('click', function () { stop(); state.t = i; routeLen = {}; refresh(); });
      track.appendChild(node);
    });
    var cur = D.timeline[state.t];
    document.getElementById('dateEra').textContent = cur.era;
    document.getElementById('dateGreg').textContent = cur.at;
    document.getElementById('dateLabel').textContent = cur.label;
  }

  function stop() {
    state.playing = false;
    if (state.timer) { clearInterval(state.timer); state.timer = null; }
    document.getElementById('playBtn').textContent = '▶';
  }
  document.getElementById('playBtn').addEventListener('click', function () {
    if (state.playing) { stop(); return; }
    state.playing = true;
    this.textContent = '❚❚';
    if (state.t >= D.timeline.length - 1) { state.t = 0; routeLen = {}; refresh(); }
    state.timer = setInterval(function () {
      if (state.t >= D.timeline.length - 1) { stop(); return; }
      state.t++; refresh();
    }, 1400);
  });

  /* ═══════════════════════════════════════════════════
     局部优势 —— 本切片的理论内核
     「以少胜多」多数时候是个总量幻觉。把兵力放回时空里，
     它就散成一串「以众击寡」。这一段代码就是这句话的检验器。
     ═══════════════════════════════════════════════════ */
  function forceValue(subject) {
    var l = pick(subject, '兵力');
    return l.length ? l[0] : null;
  }

  function analyzeEngagements() {
    var FW = D.fatigue_weight || {};
    return (D.engagements || []).map(function (e) {
      var sides = e.sides.map(function (s) {
        var base = forceValue(s.force);
        var raw = base ? Math.round(base.value * s.committed_ratio) : null;
        var fw = FW[s.fatigue] != null ? FW[s.fatigue] : 1;
        return {
          def: s, base: base, raw: raw, fw: fw,
          eff: raw == null ? null : Math.round(raw * fw)
        };
      });
      var m = sides.filter(function (x) { return x.def.side === 'ming'; })[0];
      var j = sides.filter(function (x) { return x.def.side === 'jin'; })[0];
      var ratio = (m && j && m.raw > 0 && j.raw > 0) ? j.raw / m.raw : null;
      var eratio = (m && j && m.eff > 0 && j.eff > 0) ? j.eff / m.eff : null;
      return { e: e, m: m, j: j, ratio: ratio, eratio: eratio };
    });
  }

  function renderLocal() {
    var rows = analyzeEngagements();
    var mt = forceValue('army:ming_total');
    var jt = forceValue('army:jin_total');

    /* —— 总量 —— */
    var box = document.getElementById('localTotal');
    if (!mt || !jt) {
      box.innerHTML = '<div class="lf-tot-note">当前采信的史料没有同时给出双方总兵力。' +
        '这本身是一条信息：不是每一份史料都关心「一共来了多少人」。</div>';
    } else {
      var tr = mt.value / jt.value;
      box.innerHTML =
        '<div class="lf-tot-row"><span style="color:var(--ming)">明军</span>' +
          '<b style="color:var(--ming)">' + fmt(mt.value) + '</b>' +
          '<span style="font-size:9.5px;color:var(--ink-3)">据《' + SRC[mt.source].title + '》</span></div>' +
        '<div class="lf-tot-row"><span style="color:var(--jin)">后金</span>' +
          '<b style="color:var(--jin)">' + fmt(jt.value) + '</b>' +
          '<span style="font-size:9.5px;color:var(--ink-3)">据《' + SRC[jt.source].title + '》</span></div>' +
        '<div class="lf-tot-note">按总量，明军是后金的 <em>' + tr.toFixed(2) + ' 倍</em>。' +
          '四百年来「萨尔浒以少胜多」这句话，就建立在这一行数字上。<br>' +
          '往下看每一场接战，这行数字会失效。</div>';
    }

    /* —— 逐场接战 —— */
    var bars = document.getElementById('localBars');
    bars.innerHTML = '';
    var maxMing = 0, contact = 0, jinSuperior = 0, anomalies = [];

    rows.forEach(function (r) {
      var e = r.e;
      var noData = !r.m || !r.j || r.m.raw == null || r.j.raw == null;
      var noContact = e.no_contact || (r.m && r.m.def.committed_ratio === 0);
      var n = document.createElement('div');
      n.className = 'lf-b' + (noContact ? ' nocontact' : '');

      if (noData) {
        n.innerHTML =
          '<div class="lf-b-head"><span class="lf-b-name">' + e.name + '</span>' +
            '<span class="lf-b-date">' + e.era + '</span></div>' +
          '<div class="lf-b-foot">当前采信的史料没有给出这一部的兵额，此场无法计算。</div>';
        bars.appendChild(n);
        return;
      }

      if (!noContact) {
        contact++;
        maxMing = Math.max(maxMing, r.m.raw);
        if (r.ratio > 1) jinSuperior++;
        else if (e.winner === 'jin') anomalies.push(e.name);
      }

      var tot = r.m.raw + r.j.raw;
      var mp = tot ? (r.m.raw / tot * 100) : 50;
      var ratioTxt = noContact ? '未接战'
        : (r.ratio >= 1 ? '后金 ' + r.ratio.toFixed(2) + ' 倍' : '明军 ' + (1 / r.ratio).toFixed(2) + ' 倍');
      var ratioCol = noContact ? 'var(--ink-3)' : (r.ratio >= 1 ? 'var(--jin)' : 'var(--ming)');

      n.innerHTML =
        '<div class="lf-b-head">' +
          '<span class="lf-b-name">' + e.name + '</span>' +
          '<span class="lf-b-date">' + e.era + '</span>' +
          '<span class="lf-b-ratio" style="color:' + ratioCol + '">' + ratioTxt + '</span>' +
        '</div>' +
        '<div class="lf-b-track">' +
          '<div class="lf-b-m" style="width:' + mp + '%">' + (noContact ? '' : fmt(r.m.raw)) + '</div>' +
          '<div class="lf-b-j" style="width:' + (100 - mp) + '%">' + (noContact ? '' : fmt(r.j.raw)) + '</div>' +
        '</div>' +
        '<div class="lf-b-foot">' +
          '<span class="fm">' + (r.m.def.commander !== '-' ? personName(r.m.def.commander) : '—') + '</span> ' +
          r.m.def.posture +
          '<span class="lf-fatigue ' + r.m.def.fatigue + '">' + fatigueName(r.m.def.fatigue) + '</span>' +
          '　·　<span class="fg">后金</span> ' + r.j.def.posture +
          '<span class="lf-fatigue ' + r.j.def.fatigue + '">' + fatigueName(r.j.def.fatigue) + '</span>' +
          (noContact ? '' :
            '<br>计疲劳折减后 ' + fmt(r.m.eff) + ' : ' + fmt(r.j.eff) +
            '，实为 ' + (r.eratio >= 1 ? '后金 ' + r.eratio.toFixed(2) : '明军 ' + (1 / r.eratio).toFixed(2)) + ' 倍') +
        '</div>';
      n.addEventListener('click', function () { openEngagement(r); });
      n.style.cursor = 'pointer';
      bars.appendChild(n);
    });

    /* —— 逐次消耗 —— */
    renderAttrition(mt, jt);

    /* —— 结论 —— */
    var v = document.getElementById('localVerdict');
    if (!contact) {
      v.innerHTML = '当前采信范围内没有可计算的接战。四路分兵的兵额只见于现代考订' +
        '——<b>明代官方档案没有留下可靠的分路兵数</b>。这一条空白本身，就是一个值得记录的史料缺口。';
    } else {
      var lines = [];
      lines.push('有接触的接战共 <b>' + contact + '</b> 场，后金在其中 <b>' + jinSuperior +
        '</b> 场占兵力优势。');
      if (mt && maxMing) {
        lines.push('<span class="key">明军总兵力 ' + fmt(mt.value) +
          '，但在任何一场接战中，同时到场的明军从未超过 <b>' + fmt(maxMing) + '</b> 人' +
          '（占总数 ' + (maxMing / mt.value * 100).toFixed(1) + '%）。</span>');
      }
      if (anomalies.length === 0) {
        lines.push('结论：<b>此役不存在以少胜多。</b>后金以劣势总兵力，' +
          '在每一个时空点上都制造了优势兵力。所谓「以少胜多」，' +
          '是把五天里发生在四个地方的事，压缩成一句话之后产生的错觉。');
      } else {
        lines.push('例外：<b>' + anomalies.join('、') +
          '</b> 中胜方处于兵力劣势。系统不判定这些记载为假——' +
          '它标记为<b>解释缺口</b>：或是投入比例估错，或是有未被记录的伏兵、地形与士气因素。' +
          '这类地方值得优先补充史料。');
      }
      lines.push('<span class="cav">这条结论对采信选择敏感，但不脆弱：' +
        '把史料换成《明史》《太祖实录》或现代考订，倍数会变，' +
        '「后金每战占优」这个方向不会变。<br>' +
        '需要提防的是另一件事——投入比例（committed_ratio）与疲劳权重是<b>模型参数</b>，' +
        '不是史料。它们写在 data/sarhu/engagements.json 里，欢迎替换后重算。</span>');
      v.innerHTML = lines.join('');
    }

    /* —— 行军地形代价 —— */
    renderTerrainCost();
  }

  function fatigueName(f) {
    return { fresh: '以逸', marching: '行军中', exhausted: '疲敝' }[f] || f;
  }
  function personName(pid) {
    var p = D.persons.filter(function (x) { return x.id === pid; })[0];
    return p ? p.name : pid;
  }

  function renderAttrition(mt, jt) {
    var box = document.getElementById('localAttr');
    var A = D.attrition;
    if (!A || !mt || !jt) {
      box.innerHTML = '<div class="empty-hint">缺少双方总兵力，无法画出消耗曲线。</div>';
      return;
    }
    var dates = A.ming.map(function (x) { return x.after; });
    var mv = A.ming.map(function (x) { return Math.max(0, mt.value - x.lost); });
    var jv = A.jin.map(function (x) { return Math.max(0, jt.value - x.lost); });
    var maxV = Math.max.apply(null, mv.concat(jv)) || 1;

    var w = 300, h = 108, pl = 4, pr = 4, pt = 8, pb = 20;
    function X(i) { return pl + i / (dates.length - 1) * (w - pl - pr); }
    function Y(v) { return pt + (1 - v / maxV) * (h - pt - pb); }

    function line(vals) {
      return vals.map(function (v, i) {
        return (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1);
      }).join(' ');
    }

    // 交叉点：明军可用兵力首次低于后金的那一天
    var cross = -1;
    for (var i = 0; i < dates.length; i++) if (mv[i] < jv[i]) { cross = i; break; }

    var ticks = dates.map(function (d, i) {
      return '<text x="' + X(i).toFixed(1) + '" y="' + (h - 6) +
        '" text-anchor="middle" font-size="7.5" fill="#918777" font-family="monospace">' +
        d.slice(5) + '</text>';
    }).join('');

    box.innerHTML =
      '<svg viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none">' +
      (cross > 0 ? '<line x1="' + X(cross) + '" y1="' + pt + '" x2="' + X(cross) + '" y2="' + (h - pb) +
        '" stroke="#C77B30" stroke-width="1" stroke-dasharray="3 3"/>' : '') +
      '<path d="' + line(jv) + '" fill="none" stroke="#3D6B4F" stroke-width="2" ' +
        'stroke-dasharray="5 3" stroke-linejoin="round"/>' +
      '<path d="' + line(mv) + '" fill="none" stroke="#B23A48" stroke-width="2.2" ' +
        'stroke-linejoin="round"/>' +
      mv.map(function (v, i) { return '<circle cx="' + X(i) + '" cy="' + Y(v) + '" r="2.4" fill="#B23A48"/>'; }).join('') +
      jv.map(function (v, i) { return '<circle cx="' + X(i) + '" cy="' + Y(v) + '" r="2.2" fill="#3D6B4F"/>'; }).join('') +
      ticks +
      '</svg>' +
      '<div class="lf-attr-note">' +
        (cross > 0
          ? '交叉点在 <b style="color:#C77B30">' + dates[cross] + '</b>（三月初' +
            (cross === 1 ? '一' : cross === 2 ? '二' : '四') + '之后）——' +
            '在此之前明军总量占优，在此之后攻守易势。<br>' +
            '但要注意：<b>每一场接战里明军都是劣势</b>，总量的交叉只是结果，不是原因。'
          : '在当前采信的数字下，明军总量始终不低于后金——' +
            '这恰恰说明总量根本不是胜负的解释变量。') +
        '<br>后金一侧（绿虚线）置信度仅 ' + (A.confidence ? A.confidence.jin : '?') +
        '：胜方史料几乎不记己方伤亡，这条线本质上是猜的，所以画成虚线。' +
      '</div>';
  }

  function renderTerrainCost() {
    var box = document.getElementById('localTerrain');
    box.innerHTML = '';
    if (!D.route_terrain || !D.route_terrain.length) {
      box.innerHTML = '<div class="empty-hint">未载入高程数据。</div>';
      return;
    }
    var reading = (D.terrain_reading || {});
    D.routes.forEach(function (r) {
      var t = RT[r.id]; if (!t) return;
      var color = COL[r.column] ? COL[r.column].color : '#666';
      var s = t.strain;
      var cls = s == null ? '' : (s > 1.35 ? 'hi' : (s < 0.9 ? 'lo' : ''));
      var n = document.createElement('div');
      n.className = 'lf-t';
      n.style.setProperty('--tc', color);
      n.innerHTML =
        '<div class="lf-t-head">' +
          '<span class="lf-t-name">' + r.name.replace(/（.*?）/, '') + '</span>' +
          '<span class="lf-t-strain ' + cls + '">' + (s == null ? '—' : s.toFixed(2)) + '</span>' +
        '</div>' +
        '<div class="lf-t-nums">' + t.total_li + ' 里 · 累计爬升 ' + t.total_ascent_m +
          ' m · 模型 ' + t.model_days.toFixed(1) + ' 日 / 史料 ' + t.reported_days + ' 日</div>' +
        (reading[r.id] ? '<div class="lf-t-say">' + reading[r.id] + '</div>' : '');
      box.appendChild(n);
    });
    var foot = document.createElement('div');
    foot.className = 'lf-attr-note';
    foot.innerHTML = '紧张度 = 模型所需日数 ÷ 史料所记日数。大于 1 表示走得比地形允许的更快。<br>' +
      '模型用 Tobler 徒步函数按<b>步兵</b>速度折算（见 tools/terrain_model.py），' +
      '参数可调，结论随之改变。它算出来的不是真相，是一个可以被反驳的量。';
    box.appendChild(foot);
  }

  function openEngagement(r) {
    var e = r.e;
    var modal = document.getElementById('modal');
    document.getElementById('modalTitle').textContent = e.name + ' · ' + e.era;
    function sideBlock(s, label, color) {
      if (!s || s.raw == null) return '<div class="cmp-row"><div class="cmp-src-name">' + label +
        '</div><div class="cmp-note">当前采信范围内无兵额数据。</div></div>';
      var b = s.base;
      return '<div class="cmp-row" style="--sc:' + color + '">' +
        '<div><div class="cmp-src-name">' + label + '</div>' +
          '<div class="cmp-src-meta">' + (s.def.commander !== '-' ? personName(s.def.commander) : '') +
          '<br>' + s.def.posture + '<br>接战前 72 时辰行 ' + s.def.march_72h_li + ' 里</div></div>' +
        '<div><div class="cmp-val">' + fmt(s.raw) +
          ' <small>= ' + fmt(b.value) + ' × ' + s.def.committed_ratio + '</small></div>' +
          '<div class="cmp-quote">' + s.def.commit_basis + '</div>' +
          '<div class="cmp-note">底数据《' + SRC[b.source].title + '》，投入比例置信 ' +
            s.def.commit_confidence + '（学界考证层，非史料原文）<br>' +
            '状态：' + fatigueName(s.def.fatigue) + '（折减 ×' + s.fw + '）—— ' +
            s.def.fatigue_basis + '</div></div>' +
      '</div>';
    }
    document.getElementById('modalBody').innerHTML =
      '<div class="modal-lead">' +
        '接战不是战役。战役是叙事单位，接战是兵力真正相遇的时空点。<br>' +
        '这一场的结果：' + e.outcome +
      '</div><div class="cmp">' +
        sideBlock(r.m, '明方', '#B23A48') +
        sideBlock(r.j, '后金', '#3D6B4F') +
      '</div>';
    modal.style.display = 'flex';
  }

  /* ═══════════ 兵力天平 ═══════════ */
  function renderBalance() {
    var box = document.getElementById('balance');
    var ming = pick('army:ming_total', '兵力');
    var jin  = pick('army:jin_total', '兵力');

    if (!ming.length || !jin.length) {
      box.innerHTML = '<div class="empty-hint">当前采信的史料没有给出双方兵力。' +
        (ming.length || jin.length ? '只有一方有数字，无从比较。' : '这本身就是一条信息：这份史料不关心兵力。') +
        '</div>';
      return;
    }
    var m = ming[0], j = jin[0];
    var max = Math.max(m.value, j.value);
    var ratio = m.value / j.value;

    var verdict;
    if (ratio >= 4) {
      verdict = '按此说，明军兵力约为后金的 <b>' + ratio.toFixed(1) + ' 倍</b>而全线崩溃。' +
        '若数字为真，败因就只能归于指挥与协同 —— 这正是明廷事后要的结论。';
    } else if (ratio >= 2) {
      verdict = '按此说，明军约为后金的 <b>' + ratio.toFixed(1) + ' 倍</b>。' +
        '但四路分进之后，最强的西路也只有三万，不足后金全军之半。';
    } else {
      verdict = '按此说，双方总兵力之比仅 <b>' + ratio.toFixed(2) + ' : 1</b>。' +
        '再考虑四路分兵，明军<strong>每一路都是以寡击众</strong> —— ' +
        '这一败便不再是不可思议，而是算术的必然。';
    }
    box.innerHTML = row('明 军', m, '#B23A48', max) + row('后 金', j, '#3D6B4F', max) +
      '<div class="bal-verdict">' + verdict + '</div>';

    function row(name, a, color, mx) {
      var s = SRC[a.source];
      return '<div class="bal-row">' +
        '<div class="bal-head"><span class="bal-name">' + name + '</span>' +
        '<span class="bal-val" style="color:' + color + '">' + fmt(a.value) + '</span></div>' +
        '<div class="bal-bar"><div class="bal-fill" style="width:' + (a.value / mx * 100) +
          '%;background:' + color + '"></div></div>' +
        '<div class="bal-src">' + a.value_text + ' · 据《' + s.title + '》' +
        (a.layer === 'scholarship' ? '（考订）' : '') + '</div></div>';
    }
  }

  /* ═══════════ 冲突 ═══════════ */
  function renderConflicts() {
    var box = document.getElementById('conflictList');
    box.innerHTML = '';
    var live = 0;

    D.conflicts.forEach(function (c) {
      var items = c.assertion_ids.map(function (id) {
        return D.assertions.filter(function (a) { return a.id === id; })[0];
      });
      var vis = items.filter(function (a) {
        return state.sources.has(a.source) && state.layers.has(a.layer);
      });
      // 纯文本断言的 value 为 null——只看 value 会让文字类冲突永远被判成"已消解"。
      // 与 tools/build.py 的 build_conflicts 保持同一套取值口径。
      var distinct = new Set(vis.map(function (a) {
        return a.value == null ? String(a.value_text) : String(a.value);
      })).size;
      var alive = distinct > 1;
      if (alive) live++;

      var n = document.createElement('div');
      n.className = 'cf' + (alive ? '' : ' muted');
      var kindText = {
        record_vs_record: '史料互相攻击',
        record_vs_scholarship: '记载 vs 现代考订',
        scholarly_divergence: '学界内部分歧'
      }[c.kind] || c.kind;

      var chips = (alive ? vis : items).map(function (a) {
        var s = SRC[a.source];
        return '<span class="cf-chip" style="--cc:' + s.color + '">' +
          (typeof a.value === 'number' ? fmt(a.value) : String(a.value_text).slice(0, 12)) + '</span>';
      }).join('');

      n.innerHTML =
        '<div class="cf-top"><span class="cf-sub">' + subjectName(c.subject) + ' · ' + c.predicate +
          '</span><span class="cf-spread">' +
          (alive ? (c.spread ? c.spread + '×' : distinct + ' 说') : '已消解') + '</span></div>' +
        '<div class="cf-kind">' + kindText +
          (alive ? '　' + vis.length + ' 种说法并存' : '　你的采信选择让它消失了，但矛盾并未被解决') +
        '</div><div class="cf-vals">' + chips + '</div>';
      n.addEventListener('click', function () { openModal(c, items); });
      box.appendChild(n);
    });

    document.getElementById('conflictCount').textContent = live + ' / ' + D.conflicts.length;
    document.getElementById('statConflict').textContent = live;
    document.getElementById('tabDot').style.display = live ? '' : 'none';
  }

  function subjectName(s) {
    var map = {
      'army:ming_total': '明军全军', 'army:jin_total': '后金全军',
      'army:ming_west': '西路', 'army:ming_north': '北路',
      'army:ming_east': '东路', 'army:ming_south': '南路',
      'army:joseon': '朝鲜军', 'army:yehe': '叶赫兵',
      'casualty:ming': '明军损失', 'casualty:ming_officers': '阵亡将吏',
      'casualty:ming_horses': '马骡损失', 'casualty:joseon': '朝鲜军损失',
      'event:sarhu_battle': '萨尔浒之战', 'event:dusong_cross': '杜松渡浑河',
      'event:shangjianya': '尚间崖之战', 'event:abudaligang': '阿布达里岗之战',
      'event:south_retreat': '南路撤退',
      'terrain:liaodong_east': '辽东山林', 'terrain:hunhe_crossing': '浑河渡口',
      'terrain:route_jin': '后金机动'
    };
    if (map[s]) return map[s];
    if (s.indexOf('person:') === 0) return personName(s.slice(7));
    return s;
  }

  /* ═══════════ 检视 ═══════════ */
  function selectPlace(pid) {
    var p = PLACE[pid];
    var list = visibleAssertions().filter(function (a) { return a.place === pid; });
    var sub = p.modern + (p.elev != null ? ' · 海拔 ' + p.elev + ' m' : '');
    state.selection = { type: 'place', title: p.name, sub: sub, list: list };
    goTab('inspect'); renderInspect();
  }
  function selectRoute(rid) {
    var r = D.routes.filter(function (x) { return x.id === rid; })[0];
    var placeIds = r.nodes.map(function (n) { return n.place; });
    var list = visibleAssertions().filter(function (a) {
      return placeIds.indexOf(a.place) >= 0 || a.subject === 'army:ming_' + r.column ||
             (r.column === 'jin' && a.subject === 'army:jin_total');
    });
    var t = RT[rid];
    var sub = r.outcome.text + (t ? '　｜　' + t.total_li + ' 里，爬升 ' + t.total_ascent_m + ' m' : '');
    state.selection = { type: 'route', title: r.name, sub: sub, list: list, route: r };
    goTab('inspect'); renderInspect();
  }
  function selectAssertions(title, list) {
    state.selection = { type: 'ad-hoc', title: title, sub: '', list: list };
    renderInspect();
  }

  function assertionCard(a) {
    var s = SRC[a.source];
    var lm = LAYER_META[a.layer];
    var unver = a.quote_status === 'paraphrase_unverified';
    var gen = a.quote_status === 'generated';

    // 转述在数据里诚实存在，但绝不允许读者误把它当成引文 —— 视觉上让它变形
    var quoteHtml;
    if (unver) {
      quoteHtml = '<div class="as-quote as-quote-pa"><b>〔意译，未核〕</b>' + a.quote + '</div>';
    } else if (gen) {
      quoteHtml = '<div class="as-quote as-quote-gen"><b>〔推演〕</b>' + a.quote + '</div>';
    } else {
      quoteHtml = '<div class="as-quote">' + a.quote + '</div>';
    }

    return '<div class="as" style="--lc:' + lm.color + ';--sc:' + s.color + '">' +
      '<div class="as-head"><span class="as-pred">' + a.predicate + '</span>' +
        '<span class="as-val">' + a.value_text + '</span></div>' +
      quoteHtml +
      '<div class="as-foot"><span class="as-src">《' + s.title + '》</span>' +
        '<span class="as-tag ' + a.layer + '">' + lm.name + '</span>' +
        (unver ? '<span class="as-tag unverified">意译未核</span>' : '') +
        (gen ? '<span class="as-tag inference">非史料</span>' : '') +
        '<span class="as-conf">置信 ' + a.confidence.toFixed(2) + '</span></div>' +
      (a.note ? '<div class="as-note">' + a.note + '</div>' : '') +
    '</div>';
  }

  function renderInspect() {
    var t = document.getElementById('inspectTitle');
    var box = document.getElementById('inspect');
    var sel = state.selection;
    if (!sel) {
      t.textContent = '检视';
      box.innerHTML = '<div class="empty-hint">点击地图上的地名、行军线，或任意冲突项。</div>';
      return;
    }
    var live = sel.list.filter(function (a) {
      return state.sources.has(a.source) && state.layers.has(a.layer);
    });
    t.innerHTML = sel.title + (sel.sub ?
      ' <span style="font-weight:400;font-size:10px;color:var(--ink-3);letter-spacing:0">' +
      sel.sub + '</span>' : '');

    var extra = '';
    if (sel.route && RT[sel.route.id]) {
      var rt = RT[sel.route.id];
      extra = '<div class="lf-t" style="--tc:' +
        (COL[sel.route.column] ? COL[sel.route.column].color : '#666') + '">' +
        '<div class="lf-t-head"><span class="lf-t-name">地形代价</span>' +
        '<span class="lf-t-strain ' + (rt.strain > 1.35 ? 'hi' : '') + '">' +
        (rt.strain == null ? '—' : rt.strain.toFixed(2)) + '</span></div>' +
        '<div class="lf-t-nums">' + rt.legs.map(function (l) {
          return PLACE[l.from].name.replace(/（.*?）/, '') + '→' +
                 PLACE[l.to].name.replace(/（.*?）/, '') + ' ' + l.li + '里/' +
                 l.elev_start + '→' + l.elev_end + 'm';
        }).join('　') + '</div></div>';
    }

    if (!live.length) {
      box.innerHTML = extra + '<div class="empty-hint">在当前采信范围内，此处没有任何断言。' +
        '<br><br>这不代表这里什么都没发生 —— 只代表你选的这几种史料没有记它。</div>';
      return;
    }
    box.innerHTML = extra + live.map(assertionCard).join('');
  }

  /* ═══════════ 冲突弹层 ═══════════ */
  function openModal(c, items) {
    document.getElementById('modalTitle').textContent = subjectName(c.subject) + ' · ' + c.predicate;
    var nums = items.filter(function (a) { return typeof a.value === 'number'; })
                    .map(function (a) { return a.value; });
    var mx = nums.length ? Math.max.apply(null, nums) : 0;
    var lead = nums.length >= 2
      ? '同一个对象，' + items.length + ' 种记载，最高值是最低值的 <b>' + c.spread +
        '</b> 倍。系统不裁决哪一个是对的 —— 它只保证你看见全部。'
      : '同一件事，' + items.length + ' 种互相冲突的解释。注意每一方的立场：叙述者的位置决定了他看见什么。';

    var rows = items.map(function (a) {
      var s = SRC[a.source];
      var w = mx ? (typeof a.value === 'number' ? a.value / mx * 100 : 0) : 0;
      var dim = !(state.sources.has(a.source) && state.layers.has(a.layer));
      return '<div class="cmp-row" style="--sc:' + s.color + ';opacity:' + (dim ? .42 : 1) + '">' +
        '<div><div class="cmp-src-name">《' + s.title + '》</div>' +
          '<div class="cmp-src-meta">' + s.stance_label + '<br>' + s.distance_label +
            '<br>' + (s.compiler || '') + '</div>' +
          (dim ? '<div class="cmp-src-meta" style="color:#B23A48;margin-top:5px">未采信</div>' : '') +
        '</div>' +
        '<div><div class="cmp-val">' + a.value_text +
            (typeof a.value === 'number' ? ' <small>' + fmt(a.value) + '</small>' : '') +
            ' <small>置信 ' + a.confidence.toFixed(2) + '</small></div>' +
          (mx ? '<div class="cmp-bar"><i style="width:' + w + '%"></i></div>' : '') +
          '<div class="cmp-quote">' + a.quote + '</div>' +
          '<div class="cmp-note">' + (a.note || '') + '</div></div>' +
      '</div>';
    }).join('');

    document.getElementById('modalBody').innerHTML =
      '<div class="modal-lead">' + lead + '</div><div class="cmp">' + rows + '</div>';
    document.getElementById('modal').style.display = 'flex';
  }
  document.getElementById('modalClose').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
  });
  document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target === this) this.style.display = 'none';
  });

  /* ═══════════ 页签 / 折叠 / 抽屉 ═══════════ */
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

  document.querySelectorAll('.block-title.foldable').forEach(function (h) {
    h.addEventListener('click', function () {
      var b = h.parentElement;
      b.setAttribute('data-fold', b.getAttribute('data-fold') === 'open' ? 'closed' : 'open');
    });
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
    if (e.key === 'Escape') {
      document.getElementById('modal').style.display = 'none';
      openDrawer(null);
    }
    if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight' && state.t < D.timeline.length - 1) { stop(); state.t++; refresh(); }
    if (e.key === 'ArrowLeft' && state.t > 0) { stop(); state.t--; routeLen = {}; refresh(); }
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
      var b = dataBounds(), pad = 46;
      var bw = (b.x1 - b.x0) + pad * 2, bh = (b.y1 - b.y0) + pad * 2, ar = cw / ch;
      fitW = (bw / bh > ar) ? bw : bh * ar;
      view.w = Math.min(fitW * 1.6, Math.max(MIN_W, oldW));
      view.h = view.w * (ch / cw);
      view.x = oldCx - view.w / 2; view.y = oldCy - view.h / 2;
      applyView();
    }, 110);
  });

  /* ═══════════ 刷新 ═══════════ */
  function refresh() {
    renderSources();
    renderPresets();
    renderRoutes();
    renderTerrainCtl();
    renderLayers();
    renderLegend();
    renderTimeline();
    drawDynamic();
    drawTerrain();
    renderLocal();
    renderBalance();
    renderConflicts();
    renderInspect();

    var vis = visibleAssertions().length;
    document.getElementById('statVisible').textContent = vis;
    document.getElementById('statHidden').textContent = D.assertions.length - vis;
  }

  /* ═══════════ 启动 ═══════════ */
  measure();
  fitView();
  tImg = buildTerrainImage();
  initMap();
  applyView(false);
  refresh();
})();
