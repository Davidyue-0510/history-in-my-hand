/* 小菜狗的文明图景 · 实际控制层（v0.10 初版 / v0.24 场景化）
 *
 * 把「谁在什么时候控制哪座城」投影成地图上一块块着色辖区。
 *
 * 设计要点：
 *   - 本文件只做「渲染」，不做「事实」。控制权事实来自场景级 control 数据
 *     （data/<scene>/control.json，经 build.py 注入到该场景 bundle 的
 *     control / control_seats / control_years）；辽东切片没有自带 control.json，
 *     则 fallback 到全局 SD.control（data/control_liaodong.json，v0.10 行为不变）。
 *     辖区几何不存文件，而是前端按治所最近邻（Voronoi 近似）在合成网格上现算——
 *     日后要换 CHGIS 等真实边界，只需改 build 注入的 control_seats，前端不动。
 *   - v0.24 修「控制层单例被新切片污染」：此前 control_seats 由 build 遍历所有
 *     county 切片的 primary_place 生成，新切片（唐/壬辰）的蔡州/平壤被塞进辽东
 *     Voronoi 网格，而控制权数据里没有它们的条目 → 空洞 + 辽东色块错位。现在
 *     控制权数据按场景隔离，颜色表也随场景 parties 动态扩展（不再写死三个政权）。
 *   - 投影用宿主页面自己的 px/py（战役图是固定投影，县级图是每片自适应投影），
 *     本层只负责把合成网格的角点交给宿主投影，再用 view 变换贴到 canvas 上。
 *   - canvas 置于地形层之上、SVG 之下（z 序：terrain → control → svg），
 *     所以控制色块在地形之上、地名节点之下；canvas 设 pointer-events:none，
 *     绝不拦截地图点击（这是此前修过的交互死区，不能复发）。
 *   - 年份/范围变化才重算离屏 ImageData（rebuild）；纯视图变化只重绘（repaint），
 *     保证拖拽缩放流畅。
 */
(function () {
  'use strict';

  var SD = null, seats = [], seatIdx = {}, grid = null, assign = null,
      off = null, img = null, ready = false;
  var cfg = { cv: null, px: null, py: null, getView: null, getCw: null, getDpr: null };
  var ctrlData = [], curYears = [1616, 1644];

  // 默认政权配色（v0.10 三个 + v0.24 日本方）；其余 party（唐廷/藩镇/…）由
  // PALETTE 兜底按名字哈希取色——控制层不再写死政权集合，随场景语境包扩展。
  var PARTY_DEFAULT = {
    '明方': [197, 90, 70],     // 暖红（明）
    '清方': [67, 122, 91],     // 绿（后金/清），与 COL.jin 呼应
    '朝鲜': [70, 120, 170],    // 蓝
    '日本方': [150, 90, 160]   // 紫（壬辰）
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
  function resetParties() { partyList = []; partyIdxMap = {}; }
  function pIdx(p) {
    if (!(p in partyIdxMap)) { partyIdxMap[p] = partyList.length; partyList.push(p); }
    return partyIdxMap[p];
  }
  function pCol(i) {
    var p = partyList[i];
    if (!p) return null;
    return PARTY_DEFAULT[p] || PALETTE[hashStr(p) % PALETTE.length];
  }
  function partyColor(p) { return PARTY_DEFAULT[p] || PALETTE[hashStr(p) % PALETTE.length]; }

  var curYear = null, curScope = null, dirty = true;

  function setup(o) {
    SD = window.SANDBOX_DATA;
    cfg = o || {};
    resetParties();
    // v0.24：场景 bundle 优先（sceneData.control），辽东等无自带控制数据的
    // 切片 fallback 全局 SD.control。D.control === [] 表示「显式无」→ 不可用。
    var D = cfg.sceneData || null;
    var hasScene = !!(D && Array.isArray(D.control));
    ctrlData = hasScene ? D.control : ((SD && SD.control) || []);
    var cs = hasScene ? (D.control_seats || []) : ((SD && SD.control_seats) || []);
    curYears = (hasScene && D.control_years) ? D.control_years
             : ((SD && SD.control_years) || [1616, 1644]);
    if (!cs.length || !ctrlData.length) { ready = false; return; }
    seats = cs;
    seatIdx = {};
    seats.forEach(function (s, i) { seatIdx[s.place_id] = i; });

    // 合成网格覆盖所有治所（含超出地形网格范围的西部/境外治所）
    var lons = seats.map(function (s) { return s.lon; });
    var lats = seats.map(function (s) { return s.lat; });
    var pad = 1.2;
    var lon0 = Math.min.apply(null, lons) - pad;
    var lat0 = Math.min.apply(null, lats) - pad;
    var lon1 = Math.max.apply(null, lons) + pad;
    var lat1 = Math.max.apply(null, lats) + pad;
    var step = 0.05;
    var nx = Math.round((lon1 - lon0) / step) + 1;
    var ny = Math.round((lat1 - lat0) / step) + 1;
    grid = { lon0: lon0, lat0: lat0, step: step, nx: nx, ny: ny, lon1: lon1, lat1: lat1 };

    // 最近治所分配（Voronoi 近似）：每格归离它最近的治所
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
    ready = true; dirty = true;
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

  // 全国（nation）范围：把同党派的县合成一个「国家板块」——只画
  // 不同党派之间的外缘边界，省略同党派内部的县界，视觉上就「合并」成块。
  // 县级（county）范围：每个县都画边界（含合成网格的外框），呈现县与县的拼图。
  function rebuild() {
    var nx = grid.nx, ny = grid.ny, data = img.data;
    // 1) 每格的党派索引（-1 = 该年无人控制）
    var pg = new Int8Array(nx * ny);
    for (var iy = 0; iy < ny; iy++) {
      for (var ix = 0; ix < nx; ix++) {
        var idx = iy * nx + ix, si = assign[idx];
        pg[idx] = pIdx(controllerAt(seats[si].place_id, curYear));
      }
    }
    // 2) 上色 + 边界
    var nation = (curScope === 'nation');
    for (iy = 0; iy < ny; iy++) {
      for (ix = 0; ix < nx; ix++) {
        idx = iy * nx + ix; var o = idx * 4; var pi = pg[idx];
        var boundary = false, external = false;
        if (ix + 1 < nx) { var r = pg[idx + 1]; if (r !== pi) { boundary = true; if (r >= 0 && pi >= 0) external = true; } }
        if (!boundary && iy + 1 < ny) { var d = pg[idx + nx]; if (d !== pi) { boundary = true; if (d >= 0 && pi >= 0) external = true; } }
        if (!nation && (ix === 0 || iy === 0 || ix === nx - 1 || iy === ny - 1)) boundary = true; // 县级外框
        if (boundary) {
          // 全国范围下，同党派内部县界不画（合并成块）；只保留跨党派外缘
          if (nation && !external) { /* 落到下面按填充处理 */ }
          else {
            var a = nation ? 205 : 160;
            data[o] = 74; data[o + 1] = 64; data[o + 2] = 54; data[o + 3] = a;
            continue;
          }
        }
        var col = pCol(pi);
        if (col) {
          data[o] = col[0]; data[o + 1] = col[1]; data[o + 2] = col[2]; data[o + 3] = nation ? 125 : 115;
        } else {
          data[o + 3] = 0;
        }
      }
    }
    off.getContext('2d').putImageData(img, 0, 0);
  }

  // 某年各国控制县数（用于「国家」范围图例的全国统计）
  function tally(year) {
    var t = {};
    seats.forEach(function (s) {
      var p = controllerAt(s.place_id, year);
      if (p) t[p] = (t[p] || 0) + 1;
    });
    return t;
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

  function draw(year, scope) {
    if (!ready) return;
    if (year !== curYear || scope !== curScope) { curYear = year; curScope = scope; dirty = true; }
    repaint();
  }

  function isReady() { return ready; }
  function years() { return curYears; }

  window.ControlLayer = {
    setup: setup, draw: draw, repaint: repaint, clear: clear,
    partyColor: partyColor, controllerAt: controllerAt, tally: tally,
    isReady: isReady, years: years, seats: function () { return seats; }
  };
})();
