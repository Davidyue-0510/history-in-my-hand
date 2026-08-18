/* 小菜狗的文明图景 · 地图内核 SIM_MAPCORE（v0.63）
 *
 * 为什么有这个文件：
 *   「地图内核复制债」是本项目最久的技术债 —— sarhu.html / county.js / whatif.html /
 *   sim_engine.html 各自内联了一份几乎相同的「等比 viewBox 投影 + 羊皮纸地形 +
 *   Natural Earth 矢量底 + 缩放平移 + 比例尺 + 海拔图例」。改一处忘一处，
 *   v0.48 的 pCol ReferenceError 血案就是这么来的。
 *   本模块把这套内核抽成单一真值，供 sim_engine.html（模拟器）与 sim_map.html
 *   （沙盘+模拟器合体）共用；新页面接入零复制。
 *
 * 职责边界（只做「底图与视图」，不碰业务）：
 *   ✓ 经纬度 → 用户坐标投影（等距圆柱，1000×800 用户单位）
 *   ✓ 视窗 bbox（战区 / 全中国）、fit、clamp、缩放、平移、双击复位、工具按钮
 *   ✓ 地形底图：真实 DemTopo 栅格按视窗「源裁剪」（9 参 drawImage），网格 hillshade 兜底
 *   ✓ SVG 矢量底：陆地/湖泊/海岸线/省界+标注/河流+河名/辽东边墙
 *   ✓ 比例尺、海拔图例
 *   ✗ 治所点、控制色、态势、面板 —— 由宿主页面通过 onDynamic 钩子自行绘制
 *
 * 用法：
 *   const MC = SIM_MAPCORE.create({ wrap, svg, cv, seats, basemap, terrainGrid,
 *                                   ids:{zoomBadge,scaleBar,elBar}, onDynamic });
 *   MC.loadTerrain(); MC.initMap(); MC.measure(); MC.fitView(); MC.applyView();
 */
(function () {
  'use strict';

  var SVGNS = 'http://www.w3.org/2000/svg';

  // 羊皮纸色带（水体淡蓝 → 海平面羊皮纸 → 高地深棕）；宿主图例直接读这张表
  var RAMP = [
    [0, [214, 227, 232]],
    [1, [243, 240, 229]],
    [80, [235, 229, 212]],
    [250, [223, 213, 188]],
    [500, [208, 194, 161]],
    [900, [191, 172, 136]],
    [1400, [173, 150, 115]],
    [1800, [156, 131, 98]]
  ];
  // 真实中国地形栅格（复旦 CHGIS DemTopo，等距圆柱；北在上）
  var CHINA_DEM = { src: 'demtopo_china.jpg', lonMin: 60.00556, lonMax: 149.116667, latTop: 59.98861, latBot: 10.0 };

  function rampColor(e) {
    if (e <= 0) return RAMP[0][1];
    for (var i = 1; i < RAMP.length; i++) {
      if (e <= RAMP[i][0]) {
        var a = RAMP[i - 1], b = RAMP[i], t = (e - a[0]) / (b[0] - a[0] || 1);
        return [a[1][0] + (b[1][0] - a[1][0]) * t, a[1][1] + (b[1][1] - a[1][1]) * t, a[1][2] + (b[1][2] - a[1][2]) * t];
      }
    }
    return RAMP[RAMP.length - 1][1];
  }

  function create(o) {
    o = o || {};
    var wrap = o.wrap, svg = o.svg, cv = o.cv;
    var SEATS = o.seats || [];
    var BM = o.basemap || null;
    var TERR = o.terrainGrid || null;
    var ids = o.ids || {};
    var onDynamic = o.onDynamic || function () {};
    if (!wrap || !svg || !cv) throw new Error('[SIM_MAPCORE] 需要 wrap / svg / cv 三个宿主节点');

    var viewFit = o.viewFit || 'liaodong';
    // 固定「全辽东」视窗（仅传此选项的场景生效，如 sarhu 战场需放到区域尺度；
    // 默认 liaodong 场景不传 → 仍按治所 bbox 自适应，零回归）
    var LIAODONG_BBOX = o.liaodongBBox || null;
    var VIEW_LON0, VIEW_LON1, VIEW_LAT0, VIEW_LAT1;
    var view = { x: 0, y: 0, w: 1000, h: 800 };
    var fitW = 1000, cw = 1, ch = 1;
    var MIN_W = 28;
    var PAD = (o.pad == null) ? 1.0 : o.pad;
    var CHINA_BBOX = o.chinaBBox || [73.5, 135.1, 18.0, 53.6];

    function applyViewBBox() {
      if (viewFit === 'china') {
        VIEW_LON0 = CHINA_BBOX[0]; VIEW_LON1 = CHINA_BBOX[1];
        VIEW_LAT0 = CHINA_BBOX[2]; VIEW_LAT1 = CHINA_BBOX[3];
      } else if (LIAODONG_BBOX) {
        // 固定辽东区域视窗（[lonMin,lonMax,latMin,latMax]），把战场放到区域尺度看上下文
        VIEW_LON0 = LIAODONG_BBOX[0]; VIEW_LON1 = LIAODONG_BBOX[1];
        VIEW_LAT0 = LIAODONG_BBOX[2]; VIEW_LAT1 = LIAODONG_BBOX[3];
      } else {
        var lons = SEATS.map(function (s) { return s.lon; });
        var lats = SEATS.map(function (s) { return s.lat; });
        VIEW_LON0 = Math.min.apply(null, lons) - PAD; VIEW_LON1 = Math.max.apply(null, lons) + PAD;
        VIEW_LAT0 = Math.min.apply(null, lats) - PAD; VIEW_LAT1 = Math.max.apply(null, lats) + PAD;
      }
    }
    applyViewBBox();

    function px(lon) { return (lon - VIEW_LON0) / (VIEW_LON1 - VIEW_LON0) * 1000; }
    function py(lat) { return (VIEW_LAT1 - lat) / (VIEW_LAT1 - VIEW_LAT0) * 800; }
    function pX(lon, w) { return (lon - VIEW_LON0) / (VIEW_LON1 - VIEW_LON0) * w; }
    function pY(lat, h) { return (VIEW_LAT1 - lat) / (VIEW_LAT1 - VIEW_LAT0) * h; }

    // 数据（=当前视窗地理范围）在 1000×800 参考系里的外框。
    // 必须同时扫经度和纬度——旧实现只用了固定纬度 VIEW_LAT0，纵向范围塌缩成一条线，
    // 导致 fitView 算出的视窗比例失真、地形只铺满画布上半，下半永远停在 #EFECE2 卡其底。
    function dataBounds() {
      return {
        x0: pX(VIEW_LON0, 1000), x1: pX(VIEW_LON1, 1000),
        y0: pY(VIEW_LAT1, 800), y1: pY(VIEW_LAT0, 800)
      };
    }
    function fitView() {
      var pad = 30, b = dataBounds();
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
      if (o.extraCanvases) o.extraCanvases().forEach(function (c) {
        if (c) { c.width = Math.round(cw * dpr); c.height = Math.round(ch * dpr); }
      });
    }
    function clampView() {
      view.w = Math.min(fitW * 1.6, Math.max(MIN_W, view.w));
      view.h = view.w * (ch / cw);
      var b = dataBounds(), slack = Math.max(view.w, view.h) * 0.5;
      view.x = Math.min(b.x1 + slack - view.w, Math.max(b.x0 - slack, view.x));
      view.y = Math.min(b.y1 + slack - view.h, Math.max(b.y0 - slack, view.y));
    }
    var rafPending = false;
    function applyView(redrawSvg) {
      clampView();
      svg.setAttribute('viewBox', view.x.toFixed(2) + ' ' + view.y.toFixed(2) + ' ' + view.w.toFixed(2) + ' ' + view.h.toFixed(2));
      svg.style.setProperty('--u', (view.w / cw).toFixed(5));
      var zb = ids.zoomBadge && document.getElementById(ids.zoomBadge);
      if (zb) zb.textContent = (fitW / view.w).toFixed(1) + '×';
      drawTerrain();
      if (redrawSvg !== false && !rafPending) {
        rafPending = true;
        requestAnimationFrame(function () { rafPending = false; onDynamic(); });
      }
      drawScaleBar();
    }
    function screenToMap(cx, cy) {
      var r = wrap.getBoundingClientRect();
      return { x: view.x + (cx - r.left) / r.width * view.w, y: view.y + (cy - r.top) / r.height * view.h };
    }

    // ── 交互：滚轮缩放 / 拖拽平移 / 双击复位 / 工具按钮 ──
    function bindInteractions() {
      wrap.addEventListener('wheel', function (e) {
        e.preventDefault();
        var k = e.deltaY > 0 ? 1.14 : 1 / 1.14;
        var a = screenToMap(e.clientX, e.clientY);
        var before = view.w;
        view.w *= k; view.w = Math.min(fitW * 1.6, Math.max(MIN_W, view.w));
        var kk = view.w / before; view.h = view.w * (ch / cw);
        view.x = a.x - (a.x - view.x) * kk; view.y = a.y - (a.y - view.y) * kk;
        applyView();
      }, { passive: false });

      var DRAG_TH = 4, drag = null;
      wrap.addEventListener('pointerdown', function (e) {
        if (e.button !== 0) return;
        if (e.target && e.target.closest && e.target.closest('.map-tools, .scale-bar, .elev-legend, .zoom-badge, .map-hint')) return;
        drag = { sx: e.clientX, sy: e.clientY, vx: view.x, vy: view.y, moved: 0, pid: e.pointerId, cap: false };
      });
      wrap.addEventListener('pointermove', function (e) {
        if (!drag) return;
        var dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
        drag.moved = Math.max(drag.moved, Math.abs(dx) + Math.abs(dy));
        if (!drag.cap) {
          if (drag.moved <= DRAG_TH) return;
          try { wrap.setPointerCapture(drag.pid); } catch (_) {}
          drag.cap = true; wrap.classList.add('grabbing');
        }
        view.x = drag.vx - dx / cw * view.w;
        view.y = drag.vy - dy / ch * view.h;
        applyView(false);
      });
      function endDrag() {
        if (!drag) return;
        var moved = drag.moved, cap = drag.cap, pid = drag.pid;
        drag = null; wrap.classList.remove('grabbing');
        if (cap) { try { wrap.releasePointerCapture(pid); } catch (_) {} }
        if (moved > DRAG_TH) onDynamic();
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
    }

    // ── 地形 ─────────────────────────────────────────────
    var tImg = null, chinaImg = null, chinaReady = false;
    function loadTerrain() {
      tImg = buildTerrainImage();
      var img = new Image();
      img.onload = function () { chinaImg = img; chinaReady = true; drawTerrain(); };
      img.onerror = function () { chinaImg = null; chinaReady = false; };
      img.src = CHINA_DEM.src;
    }
    function buildTerrainImage() {
      if (!TERR) return null;
      var nx = TERR.nx, ny = TERR.ny, E = TERR.elev;
      var c = document.createElement('canvas'); c.width = nx; c.height = ny;
      var ctx = c.getContext('2d'); var img = ctx.createImageData(nx, ny);
      var midLat = TERR.lat0 + (ny - 1) * TERR.step / 2;
      var cellY = TERR.step * 111320;
      var cellX = TERR.step * 111320 * Math.cos(midLat * Math.PI / 180);
      var ZF = 2.6;
      var zen = (90 - 45) * Math.PI / 180, azm = (360 - 315 + 90) * Math.PI / 180;
      function z(ix, iy) {
        ix = Math.max(0, Math.min(nx - 1, ix)); iy = Math.max(0, Math.min(ny - 1, iy));
        var v = E[iy * nx + ix]; return v == null ? 0 : v;
      }
      for (var iy = 0; iy < ny; iy++) {
        for (var ix = 0; ix < nx; ix++) {
          var e = z(ix, iy);
          var dzdx = ((z(ix + 1, iy - 1) + 2 * z(ix + 1, iy) + z(ix + 1, iy + 1)) - (z(ix - 1, iy - 1) + 2 * z(ix - 1, iy) + z(ix - 1, iy + 1))) / (8 * cellX);
          var dzdy = ((z(ix - 1, iy + 1) + 2 * z(ix, iy + 1) + z(ix + 1, iy + 1)) - (z(ix - 1, iy - 1) + 2 * z(ix, iy - 1) + z(ix + 1, iy - 1))) / (8 * cellY);
          var slope = Math.atan(ZF * Math.sqrt(dzdx * dzdx + dzdy * dzdy));
          var aspect = Math.atan2(dzdy, -dzdx);
          var hs = Math.cos(zen) * Math.cos(slope) + Math.sin(zen) * Math.sin(slope) * Math.cos(azm - aspect);
          hs = Math.max(0, Math.min(1, hs));
          var col = rampColor(e);
          var f = 0.62 + 0.52 * hs;
          var ff = (e <= 0) ? 1 : f;
          var row = (ny - 1 - iy);
          var oo = (row * nx + ix) * 4;
          img.data[oo] = Math.max(0, Math.min(255, col[0] * ff));
          img.data[oo + 1] = Math.max(0, Math.min(255, col[1] * ff));
          img.data[oo + 2] = Math.max(0, Math.min(255, col[2] * ff));
          img.data[oo + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
      return c;
    }
    function drawTerrain() {
      if (!cv) return;
      var ctx = cv.getContext('2d');
      var dpr = window.devicePixelRatio || 1;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = '#EFECE2'; ctx.fillRect(0, 0, cv.width, cv.height);
      var s = (cw / view.w) * dpr;
      ctx.setTransform(s, 0, 0, s, -view.x * s, -view.y * s);
      ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
      if (chinaReady && chinaImg) drawChinaCrop(ctx);
      else if (TERR && tImg) drawGridCrop(ctx);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    // 真实中国 DemTopo：按当前视窗做「源裁剪」→ 中国地形图，只截出本战区那一块。
    // 关键修正：目标矩形改为「当前视窗在参考系里的矩形」，而非写死的 [0,0,1000,800]。
    // view 经 setTransform 变换后必铺满整张画布，故地形不再露 #EFECE2 底色（任意缩放/平移都不露）。
    function drawChinaCrop(ctx) {
      var L0 = CHINA_DEM.lonMin, L1 = CHINA_DEM.lonMax, T = CHINA_DEM.latTop, B = CHINA_DEM.latBot;
      var iw = chinaImg.naturalWidth, ih = chinaImg.naturalHeight;
      // 当前视窗（view 是 1000×800 参考系里的子矩形）对应的经纬度范围：由 view 反投影
      var lonA = VIEW_LON0 + (view.x / 1000) * (VIEW_LON1 - VIEW_LON0);
      var lonB = VIEW_LON0 + ((view.x + view.w) / 1000) * (VIEW_LON1 - VIEW_LON0);
      var latTop = VIEW_LAT1 - (view.y / 800) * (VIEW_LAT1 - VIEW_LAT0);
      var latBot = VIEW_LAT1 - ((view.y + view.h) / 800) * (VIEW_LAT1 - VIEW_LAT0);
      lonA = Math.max(lonA, L0); lonB = Math.min(lonB, L1);   // 裁剪到中国 DEM 范围
      var la = Math.max(Math.min(latTop, latBot), B), lb = Math.min(Math.max(latTop, latBot), T);
      if (lonA >= lonB || la >= lb) return;
      var sx0 = (lonA - L0) / (L1 - L0) * iw;
      var sw = (lonB - lonA) / (L1 - L0) * iw;
      var syTop = (T - lb) / (T - B) * ih;
      var syBot = (T - la) / (T - B) * ih;
      var sy0 = Math.min(syTop, syBot), sh = Math.abs(syBot - syTop);
      if (view.w <= 0 || view.h <= 0 || sw <= 0 || sh <= 0) return;
      ctx.drawImage(chinaImg, sx0, sy0, sw, sh, view.x, view.y, view.w, view.h);
    }
    // 兜底：GDEM 网格 canvas（低分辨率），同样按当前视窗矩形绘制 + 经纬度源裁剪，
    // 与 drawChinaCrop 对称——保证任意缩放/平移下地形都不露 #EFECE2 底色。
    function drawGridCrop(ctx) {
      var lonMax = TERR.lon0 + (TERR.nx - 1) * TERR.step;
      var latMax = TERR.lat0 + (TERR.ny - 1) * TERR.step;
      // 当前视窗（view 是 1000×800 参考系里的子矩形）对应的经纬度范围：由 view 反投影
      var lonA = VIEW_LON0 + (view.x / 1000) * (VIEW_LON1 - VIEW_LON0);
      var lonB = VIEW_LON0 + ((view.x + view.w) / 1000) * (VIEW_LON1 - VIEW_LON0);
      var latTop = VIEW_LAT1 - (view.y / 800) * (VIEW_LAT1 - VIEW_LAT0);
      var latBot = VIEW_LAT1 - ((view.y + view.h) / 800) * (VIEW_LAT1 - VIEW_LAT0);
      lonA = Math.max(lonA, TERR.lon0); lonB = Math.min(lonB, lonMax);   // 裁剪到 GDEM 范围
      var la = Math.max(Math.min(latTop, latBot), TERR.lat0), lb = Math.min(Math.max(latTop, latBot), latMax);
      if (lonA >= lonB || la >= lb) return;
      var ixA = (lonA - TERR.lon0) / TERR.step, ixB = (lonB - TERR.lon0) / TERR.step;
      var rowTop = (TERR.ny - 1) - (lb - TERR.lat0) / TERR.step;
      var rowBot = (TERR.ny - 1) - (la - TERR.lat0) / TERR.step;
      var sx0 = ixA, sw = ixB - ixA, sy0 = Math.min(rowTop, rowBot), sh = Math.abs(rowBot - rowTop);
      if (view.w <= 0 || view.h <= 0 || sw <= 0 || sh <= 0) return;
      ctx.drawImage(tImg, sx0, sy0, sw, sh, view.x, view.y, view.w, view.h);
    }

    // ── SVG 矢量底 ───────────────────────────────────────
    var gBase = null, gWall = null, gNodes = null, gLabels = null, gOver = null;
    function el(tag, attrs, parent) {
      var n = document.createElementNS(SVGNS, tag);
      for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
      if (parent) parent.appendChild(n);
      return n;
    }
    function geomPath(g) {
      if (!g) return '';
      var t = g.type, c = g.coordinates, d = '';
      function ring(r) { return 'M' + r.map(function (p) { return pX(p[0], 1000) + ' ' + pY(p[1], 800); }).join(' L ') + ' Z'; }
      function line(l) { return 'M' + l.map(function (p) { return pX(p[0], 1000) + ' ' + pY(p[1], 800); }).join(' L '); }
      if (t === 'Polygon') { c.forEach(function (r) { d += ring(r) + ' '; }); }
      else if (t === 'MultiPolygon') { c.forEach(function (p) { p.forEach(function (r) { d += ring(r) + ' '; }); }); }
      else if (t === 'LineString') { d = line(c); }
      else if (t === 'MultiLineString') { c.forEach(function (l) { d += line(l) + ' '; }); }
      return d.trim();
    }
    function geomLabelXY(g) {
      var c = g.coordinates;
      if (g.type === 'Polygon') return [pX(c[0][0][0], 1000), pY(c[0][0][1], 800)];
      if (g.type === 'MultiPolygon') return [pX(c[0][0][0][0], 1000), pY(c[0][0][0][1], 800)];
      if (g.type === 'LineString') { var m = c[Math.floor(c.length / 2)]; return [pX(m[0], 1000), pY(m[1], 800)]; }
      if (g.type === 'MultiLineString') { var l = c[0], m2 = l[Math.floor(l.length / 2)]; return [pX(m2[0], 1000), pY(m2[1], 800)]; }
      return null;
    }
    function initMap() {
      svg.innerHTML = '';
      gBase = el('g', {}, svg);
      gWall = el('g', {}, svg);
      gOver = el('g', {}, svg);     // 宿主叠加层（态势标记等），位于治所点之下
      gNodes = el('g', {}, svg);
      gLabels = el('g', {}, svg);
      drawBase();
    }
    function drawBase() {
      if (!BM || !gBase) return;
      gBase.innerHTML = ''; gWall.innerHTML = '';
      var src = BM[viewFit] || BM.liaodong;
      if (!src) return;
      (src.land || []).forEach(function (f) { el('path', { d: geomPath(f.g), fill: '#efe7d6', stroke: 'none' }, gBase); });
      var gLake = el('g', { fill: '#bcd8e6', stroke: '#9cc4d6', 'stroke-width': 0.5, 'vector-effect': 'non-scaling-stroke' }, gBase);
      (src.lakes || []).forEach(function (f) { el('path', { d: geomPath(f.g) }, gLake); });
      (src.coastline || []).forEach(function (f) {
        el('path', { d: geomPath(f.g), fill: 'none', stroke: '#7c9aa8', 'stroke-width': 1, 'vector-effect': 'non-scaling-stroke' }, gBase);
      });
      var gAdm = el('g', { fill: 'none', stroke: '#c9bfa8', 'stroke-width': 0.8, 'vector-effect': 'non-scaling-stroke' }, gBase);
      (src.admin1 || []).forEach(function (f) {
        el('path', { d: geomPath(f.g) }, gAdm);
        if (f.n) { var a = geomLabelXY(f.g); if (a) { var t = el('text', { x: a[0] + 4, y: a[1], class: 'adm-label' }, gBase); t.textContent = f.n; } }
      });
      var gRiv = el('g', { fill: 'none', stroke: '#6f9fc0', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke' }, gBase);
      (src.rivers || []).forEach(function (f) {
        el('path', { d: geomPath(f.g), 'stroke-width': 1.4 }, gRiv);
        if (f.n) { var r = geomLabelXY(f.g); if (r) { var t = el('text', { x: r[0] + 4, y: r[1] - 3, class: 'river-label' }, gBase); t.textContent = f.n; } }
      });
      if (viewFit === 'liaodong' && BM.wall && BM.wall.path && BM.wall.path.length > 1) {
        var pts = BM.wall.path.map(function (p) { return [pX(p[0], 1000), pY(p[1], 800)]; });
        var d = pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' ');
        el('path', {
          d: d, fill: 'none', stroke: '#7A7466', 'stroke-width': 2, 'stroke-dasharray': '1 5',
          'stroke-linecap': 'round', opacity: '.85', 'vector-effect': 'non-scaling-stroke'
        }, gWall);
        var mid = pts[Math.floor(pts.length / 2)];
        var tw = el('text', { x: mid[0] + 6, y: mid[1] - 4, class: 'wall-label' }, gWall);
        tw.textContent = BM.wall.name || '辽东边墙';
      }
    }

    // ── 比例尺 / 海拔图例 ────────────────────────────────
    function drawScaleBar() {
      var node = ids.scaleBar && document.getElementById(ids.scaleBar);
      if (!node) return;
      var latMid = (VIEW_LAT0 + VIEW_LAT1) / 2;
      var cml = Math.cos(latMid * Math.PI / 180);
      var metersPerUnit = (VIEW_LON1 - VIEW_LON0) / 1000 * 111320 * cml;
      var totalMeters = view.w * metersPerUnit;
      var target = totalMeters / 5;
      var pow = Math.pow(10, Math.floor(Math.log10(target)));
      var norm = target / pow;
      var nice = norm < 2 ? 2 : norm < 5 ? 5 : 10;
      var segMeters = nice * pow;
      var segPx = segMeters / metersPerUnit;
      var label = segMeters >= 1000 ? (segMeters / 1000) + ' km' : Math.round(segMeters) + ' m';
      node.innerHTML = '比例尺 ' + label +
        '<svg width="' + (segPx + 2) + '" height="6"><rect x="0" y="0" width="' + segPx + '" height="4" fill="#2A2521"/>' +
        '<rect x="0" y="4" width="' + segPx + '" height="2" fill="#FBF9F3" stroke="#2A2521" stroke-width="0.4"/></svg>';
    }
    function paintElevLegend() {
      var bar = ids.elBar && document.getElementById(ids.elBar);
      if (!bar) return;
      var stops = RAMP.map(function (s) {
        var c = s[1];
        return 'rgb(' + Math.round(c[0]) + ',' + Math.round(c[1]) + ',' + Math.round(c[2]) + ') ' + (Math.min(1800, s[0]) / 1800 * 100).toFixed(0) + '%';
      }).join(',');
      bar.style.background = 'linear-gradient(90deg,' + stops + ')';
    }

    return {
      RAMP: RAMP, CHINA_DEM: CHINA_DEM, SVGNS: SVGNS,
      px: px, py: py, pX: pX, pY: pY,
      el: el, geomPath: geomPath, geomLabelXY: geomLabelXY,
      dataBounds: dataBounds, fitView: fitView, measure: measure, applyView: applyView,
      screenToMap: screenToMap, bindInteractions: bindInteractions,
      loadTerrain: loadTerrain, drawTerrain: drawTerrain, buildTerrainImage: buildTerrainImage,
      initMap: initMap, drawBase: drawBase, drawScaleBar: drawScaleBar, paintElevLegend: paintElevLegend,
      // 视窗
      applyViewBBox: applyViewBBox,
      viewFit: function () { return viewFit; },
      setViewFit: function (v) { if (v === 'china' || v === 'liaodong') { viewFit = v; applyViewBBox(); } return viewFit; },
      bbox: function () { return { lon0: VIEW_LON0, lon1: VIEW_LON1, lat0: VIEW_LAT0, lat1: VIEW_LAT1 }; },
      // 可变态（宿主只读；写入一律经本模块函数）
      get view() { return view; },
      get cw() { return cw; },
      get ch() { return ch; },
      get fitW() { return fitW; },
      scale: function () { return cw / view.w; },
      // 地形状态
      terrainReady: function () { return chinaReady; },
      hasTerrain: function () { return chinaReady || !!TERR; },
      chinaTerrainSrc: function () { return chinaReady ? CHINA_DEM.src : null; },
      // SVG 分层（宿主往 gOver/gNodes/gLabels 里画业务内容）
      layers: function () { return { gBase: gBase, gWall: gWall, gOver: gOver, gNodes: gNodes, gLabels: gLabels }; },
      basemapLayerCount: function () {
        var s = (BM && BM[viewFit]) || {};
        return {
          land: (s.land || []).length, rivers: (s.rivers || []).length, admin1: (s.admin1 || []).length,
          lakes: (s.lakes || []).length, coastline: (s.coastline || []).length,
          wall: !!(BM && BM.wall && BM.wall.path)
        };
      },
      setSeats: function (arr) { SEATS = arr || []; applyViewBBox(); }
    };
  }

  window.SIM_MAPCORE = { version: 'v0.63', create: create, RAMP: RAMP, CHINA_DEM: CHINA_DEM, rampColor: rampColor };
})();
