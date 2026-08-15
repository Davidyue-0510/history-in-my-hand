/* 小菜狗的文明图景 · CHGIS 历史政区界线叠加层（v0.25 新增）
 *
 * 把 CHGIS 复旦镜像的真实历史政区边界（GeoJSON 多边形，来自
 * tools/datasources/chgis_ogr.py 转换的 data/external/chgis/converted_ogr/all.geojson）
 * 作为地图叠加层渲染。
 *
 * 设计要点（对齐 ControlLayer）：
 *   - 独立 <canvas id="chgisCv">，z 序：terrain → control → chgis → svg。
 *     历史真实边界在地形之上、控制色块之上、地名节点之下。
 *   - canvas 设 pointer-events:none，绝不拦截地图点击（同 ControlLayer 修过的死区）。
 *   - 投影复用宿主页面的 px/py；repaint 用与 ControlLayer 相同的 view 变换
 *     s=(cw/view.w)*dpr; setTransform(s,0,0,s,-v.x*s,-v.y*s)。
 *   - 数据量大（153MB / 5149 面，全国覆盖），不能塞进 data.js，运行时 fetch；
 *     每个面预存「像素 bbox」，repaint 时只绘制与当前视口相交的面（视口剔除），
 *     保证辽东小框下拖拽流畅（框外数千个面直接跳过）。
 *   - 按朝代（DYN_PY）哈希取稳定色，浅填充 + 实描边；带洞多边形用 evenodd。
 *   - 依赖 http 服务器：file:// 下浏览器禁止 fetch 本地文件，setup 会告警。
 */
(function () {
  'use strict';

  var cfg = null, feats = [], ready = false, fetching = false, shownFeats = [];
  var DEFAULT_URL = '../data/external/chgis/converted_ogr/all.geojson';

  // 朝代（拼音）→ 配色；未知朝代哈希取色，保证稳定。
  var DYN_COLOR = {
    'Qingchao': [70, 120, 80],      // 清 · 绿
    'Mingchao': [180, 80, 70],      // 明 · 红
    'Yuandynasty': [70, 110, 160],  // 元 · 蓝
    'Yuanchao': [70, 110, 160],
    'Suidynasty': [185, 135, 70],   // 隋/唐 · 橙
    'Tangdynasty': [185, 135, 70],
    'Liaodai': [150, 90, 120],      // 辽 · 紫
    'Jindai': [120, 110, 90],       // 金 · 褐
    'Beiyang': [90, 140, 140]
  };
  var PALETTE = [
    [70, 120, 80], [180, 80, 70], [70, 110, 160], [185, 135, 70],
    [150, 90, 120], [120, 110, 90], [140, 140, 170], [160, 120, 150],
    [110, 150, 100], [190, 150, 90]
  ];
  function hashStr(s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return h;
  }
  function dynColor(d) {
    if (!d) return PALETTE[0];
    if (DYN_COLOR[d]) return DYN_COLOR[d];
    return PALETTE[hashStr(d) % PALETTE.length];
  }
  // 朝代拼音 → 中文名（图例用）
  var DYN_CN = {
    'Qingchao': '清', 'Mingchao': '明', 'Yuandynasty': '元', 'Yuanchao': '元',
    'Suidynasty': '隋', 'Tangdynasty': '唐', 'Liaodai': '辽', 'Jindai': '金',
    'Beiyang': '北洋'
  };
  // T-S（唐宋及历代）按 BEG_YR 细分的期段；与前端下拉一致。
  var PERIOD_CN = { han: '汉', sui: '隋', tang: '唐', song: '宋', other: '其他' };
  var PERIOD_COLOR = {
    han: [150, 90, 120],    // 汉 · 紫
    sui: [150, 150, 90],    // 隋 · 橄榄
    tang: [185, 135, 70],   // 唐 · 橙
    song: [70, 110, 160],   // 宋 · 蓝
    other: [140, 140, 140]  // 其他 · 灰
  };
  function periodOf(beg) {
    if (beg == null) return 'other';
    if (beg >= -206 && beg < 220) return 'han';
    if (beg >= 581 && beg < 618) return 'sui';
    if (beg >= 618 && beg < 907) return 'tang';
    if (beg >= 960 && beg < 1280) return 'song';
    return 'other';
  }
  // 点是否在环内（射线法）；hole 由调用方用 evenodd 处理。
  function pointInRing(pt, ring) {
    var x = pt[0], y = pt[1], inside = false;
    for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      var xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
      var hit = ((yi > y) !== (yj > y)) &&
                (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (hit) inside = !inside;
    }
    return inside;
  }
  // 点是否在面内（Polygon 外环内且不在任一洞；MultiPolygon 任一多边形内）。
  function pointInGeom(pt, geom) {
    if (!geom) return false;
    if (geom.type === 'Polygon') {
      var rings = geom.coordinates;
      if (!rings.length || !pointInRing(pt, rings[0])) return false;
      for (var i = 1; i < rings.length; i++) if (pointInRing(pt, rings[i])) return false;
      return true;
    }
    if (geom.type === 'MultiPolygon') {
      var polys = geom.coordinates;
      for (var k = 0; k < polys.length; k++) {
        var pr = polys[k];
        if (!pr.length || !pointInRing(pt, pr[0])) continue;
        var inHole = false;
        for (var h = 1; h < pr.length; h++) if (pointInRing(pt, pr[h])) { inHole = true; break; }
        if (!inHole) return true;
      }
    }
    return false;
  }
  function rgba(c, a) { return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; }

  function forEachRing(geom, cb) {
    if (!geom) return;
    if (geom.type === 'Polygon') { geom.coordinates.forEach(cb); }
    else if (geom.type === 'MultiPolygon') {
      geom.coordinates.forEach(function (poly) { poly.forEach(cb); });
    }
  }

  // 年份解析：CHGIS 的 BEG_YR/END_YR 偶有脏值（如 11466/3822），超合理范围→视为无年份。
  function parseYear(v) {
    if (v === null || v === undefined || v === '') return null;
    var n = parseInt(v, 10);
    if (isNaN(n)) return null;
    if (n > 3000 || n < -3000) return null;
    return n;
  }

  // 解析 GeoJSON：预存像素 bbox（基于当前场景投影的 px/py）用于视口剔除；
  // 同时解析数据集(CHGIS_DS)、起止年、T-S 期段(period)，供「数据集 / 年份 / 期段」三维筛选；
  // 并预存经纬度 bbox（lbb）供点击命中检测的粗筛。
  function ingest(gj) {
    feats = [];
    var PX = cfg.px, PY = cfg.py;
    (gj.features || []).forEach(function (f) {
      var p = f.properties || {};
      var dyn = p.DYN_PY || p.DYN_CH || '';
      var col = dynColor(dyn);
      var ds = p.CHGIS_DS || '';                 // 1820 / 1911 / T-S
      var beg = parseYear(p.BEG_YR), end = parseYear(p.END_YR);
      var period = (ds === 'T-S') ? periodOf(beg) : '';
      var minx = 1e9, miny = 1e9, maxx = -1e9, maxy = -1e9;
      var minLon = 1e9, minLat = 1e9, maxLon = -1e9, maxLat = -1e9;
      forEachRing(f.geometry, function (ring) {
        for (var i = 0; i < ring.length; i++) {
          var X = PX(ring[i][0]), Y = PY(ring[i][1]);
          if (X < minx) minx = X; if (Y < miny) miny = Y;
          if (X > maxx) maxx = X; if (Y > maxy) maxy = Y;
          var lo = ring[i][0], la = ring[i][1];
          if (lo < minLon) minLon = lo; if (la < minLat) minLat = la;
          if (lo > maxLon) maxLon = lo; if (la > maxLat) maxLat = la;
        }
      });
      feats.push({ props: p, geom: f.geometry, col: col, bb: [minx, miny, maxx, maxy],
                   lbb: [minLon, minLat, maxLon, maxLat],
                   dyn: dyn, ds: ds, beg: beg, end: end, period: period });
    });
  }

  function setup(o) {
    cfg = o || {};
    cfg.cv = o.cv || null;
    cfg.filterDs = o.filterDs || 'all';
    cfg.filterYear = (o.filterYear === undefined ? null : o.filterYear);
    cfg.filterPeriod = o.filterPeriod || 'all';
    cfg.unproject = o.unproject || null;     // (clientX, clientY) -> [lon, lat]
    cfg.onRepaint = o.onRepaint || null;     // 每次重绘后回调（更新图例）
    ready = false; fetching = false;
    if (!cfg.cv) return;
    if (!cfg.px || !cfg.py) { console.warn('[ChgisLayer] 需要 px/py 投影函数'); return; }
    var url = cfg.url || DEFAULT_URL;
    if (typeof location !== 'undefined' && location.protocol === 'file:') {
      console.warn('[ChgisLayer] file:// 下浏览器禁止 fetch 本地文件，请通过 http 服务器打开（如 python -m http.server）');
      if (cfg.onError) cfg.onError(new Error('file:// 协议下无法 fetch'));
      return;
    }
    fetching = true;
    fetch(url).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (gj) {
      ingest(gj); ready = true; fetching = false;
      if (cfg.onReady) cfg.onReady(feats.length);
      repaint();
    }).catch(function (e) {
      fetching = false;
      console.warn('[ChgisLayer] 加载失败：', e && e.message ? e.message : e);
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
    if (!ready) return;                       // 数据未到：清空即可，等 onReady 再 repaint
    var v = cfg.getView ? cfg.getView() : { x: 0, y: 0, w: 1000, h: 918 };
    var s = (cw / v.w) * dpr;
    ctx.setTransform(s, 0, 0, s, -v.x * s, -v.y * s);
    var vx0 = v.x, vy0 = v.y, vx1 = v.x + v.w, vy1 = v.y + v.h;
    var shown = 0;
    var fDs = cfg.filterDs || 'all';
    var fYr = cfg.filterYear != null ? cfg.filterYear : null;
    var fP = cfg.filterPeriod || 'all';
    shownFeats = [];
    for (var i = 0; i < feats.length; i++) {
      var ft = feats[i];
      var b = ft.bb;
      if (b[2] < vx0 || b[0] > vx1 || b[3] < vy0 || b[1] > vy1) continue;  // 视口剔除
      if (fDs !== 'all' && ft.ds !== fDs) continue;                        // 数据集筛选
      if (fYr != null) {                                                  // 年份筛选：仅显示该年存在的政区
        if (ft.beg == null || ft.end == null) continue;                   // 缺年份→无法确认在该年存在，隐藏
        if (!(ft.beg <= fYr && fYr <= ft.end)) continue;
      }
      if (fDs === 'T-S' && fP !== 'all' && ft.period !== fP) continue;    // T-S 期段细分筛选
      drawFeat(ctx, ft, s); shown++; shownFeats.push(ft);
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (cfg.onShown) cfg.onShown(shown);
    if (cfg.onRepaint) cfg.onRepaint(shown);
  }

  function drawFeat(ctx, ft, s) {
    var PX = cfg.px, PY = cfg.py;
    // T-S 数据集按期段着色（汉/唐/宋…），其余按朝代着色
    var col = ft.col;
    if (ft.ds === 'T-S' && PERIOD_COLOR[ft.period]) col = PERIOD_COLOR[ft.period];
    ctx.beginPath();
    forEachRing(ft.geom, function (ring) {
      for (var i = 0; i < ring.length; i++) {
        var X = PX(ring[i][0]), Y = PY(ring[i][1]);
        if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
      }
      ctx.closePath();
    });
    ctx.fillStyle = rgba(ft.col, 0.16);
    ctx.fill('evenodd');
    ctx.lineWidth = 1.1 / s;                  // 视觉约 1.1px，与缩放无关
    ctx.strokeStyle = rgba(ft.col, 0.85);
    ctx.stroke();
  }

  function clear() {
    if (!cfg || !cfg.cv) return;
    var ctx = cfg.cv.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cfg.cv.width, cfg.cv.height);
  }
  // 图层开关：开→重绘，关→清空。
  function setVisible(on) { if (on) repaint(); else clear(); }

  // 筛选接口：{ ds: 'all'|'1820'|'1911'|'T-S', year: number|null, period: 'all'|'han'|'tang'|'song'|'other' }
  // ds 控制数据集；year 非 null 时只显示 BEG_YR<=year<=END_YR 的政区；
  // period 仅对 T-S 生效，按 BEG_YR 派生（汉/唐/宋/其他）。
  function setFilter(o) {
    if (!o) return;
    if (o.ds !== undefined) cfg.filterDs = o.ds;
    if (o.year !== undefined) cfg.filterYear = o.year;
    if (o.period !== undefined) cfg.filterPeriod = o.period;
    repaint();
  }

  // 点击命中检测：传入经纬度，返回命中的最上层政区属性（respects 当前筛选）。
  // 无命中返回 null。前置粗筛用经纬度 bbox，再对候选做 point-in-polygon。
  function hitTest(lon, lat) {
    if (!ready) return null;
    var fDs = cfg.filterDs || 'all';
    var fYr = cfg.filterYear != null ? cfg.filterYear : null;
    var fP = cfg.filterPeriod || 'all';
    for (var i = feats.length - 1; i >= 0; i--) {   // 从最上层（最后绘制）向下找
      var ft = feats[i];
      if (fDs !== 'all' && ft.ds !== fDs) continue;
      if (fYr != null) {
        if (ft.beg == null || ft.end == null) continue;
        if (!(ft.beg <= fYr && fYr <= ft.end)) continue;
      }
      if (fDs === 'T-S' && fP !== 'all' && ft.period !== fP) continue;
      var b = ft.lbb;
      if (lon < b[0] || lon > b[2] || lat < b[1] || lat > b[3]) continue;  // 经纬度粗筛
      if (pointInGeom([lon, lat], ft.geom)) return ft.props;
    }
    return null;
  }

  // 当前视口内可见政区的图例项：T-S 按期段、其余按朝代。
  function getLegend() {
    if (!ready) return [];
    var fDs = cfg.filterDs || 'all';
    var byTs = (fDs === 'T-S');
    var map = {};
    for (var i = 0; i < shownFeats.length; i++) {
      var ft = shownFeats[i];
      if (byTs) {
        var pk = ft.period || 'other';
        if (!map[pk]) map[pk] = { label: PERIOD_CN[pk] || pk, color: PERIOD_COLOR[pk] || [140, 140, 140] };
      } else {
        var dk = ft.dyn || '';
        if (!map[dk]) map[dk] = { label: DYN_CN[dk] || dk || '未知', color: dynColor(dk) };
      }
    }
    return Object.keys(map).map(function (k) { return map[k]; });
  }

  function isReady() { return ready; }
  function isFetching() { return fetching; }
  function count() { return feats.length; }

  window.ChgisLayer = {
    setup: setup, repaint: repaint, clear: clear, setVisible: setVisible,
    setFilter: setFilter, hitTest: hitTest, getLegend: getLegend,
    isReady: isReady, isFetching: isFetching, count: count, dynColor: dynColor,
    PERIOD_CN: PERIOD_CN, DYN_CN: DYN_CN
  };
})();
