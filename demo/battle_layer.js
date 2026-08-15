/* battle_layer.js — 历史战例叠加图层（萨尔浒之战 etc. 叠到真实地理底图）
 *
 * 设计要点：
 *  - 独立 canvas（#battleCv），对齐 ControlLayer / ChgisLayer 的接入范式：
 *    px/py 投影 + 与宿主相同的 view 变换 + 视口剔除。
 *  - 数据自行 fetch：按宿主传入的场景列表加载（默认仅当前切片，杜绝跨场景堆叠）。
 *      engagements.json（接战点，含明/金 兵力投入比、疲劳、胜负）
 *      routes.json（行军路线，节点带日期）
 *      events.json（战事事件，带 place 或回退 primary_place）
 *      places.json（地名→经纬度，跨场景合并）
 *  - 默认显示全部战役；可选「按时间轴年份过滤」（yearSync，默认关）。
 *  - canvas pointer-events:none，不拦截底图拖拽/点击。
 */
(function () {
  'use strict';

  var cfg = null, ready = false, fetching = false;
  var places = {};        // 合并所有场景 places：id -> {lon,lat,name,precision,type}
  var engagements = [];    // 接战点（rich）
  var routes = [];         // 行军路线
  var events = [];         // 战事事件（带坐标）
  var routeTimeline = [];  // 按日期回放序列（来自 routes.json.timeline，带 scene）
  var shown = [];          // 当前可见（过滤后）
  var shownRoutes = [];

  // 配色：后金胜=红，明胜=蓝，未接战=灰
  var COL = {
    jin: '#c0392b',
    ming: '#2b6cb0',
    none: '#7f8c8d',
    jinRoute: '#c0392b',
    mingRoute: '#2b6cb0'
  };
  var SIDE_CN = { ming: '明', jin: '后金' };

  // 数据驱动图例：类别颜色优先取 vocab.json 的 legend 配置（LLM 史料分析产出），
  // 否则按 winner/side 的 key 哈希取色。这样「研究别的事件」导入史料→LLM 分析→
  // 生成 vocab.legend 后，图例自动按该事件自己的阵营/胜负生成，无需改代码。
  var LEGEND_PALETTE = [
    [192, 57, 43], [43, 108, 176], [127, 140, 141], [160, 120, 90], [90, 140, 140],
    [185, 135, 70], [150, 90, 120], [110, 150, 100], [190, 150, 90], [140, 140, 170]
  ];
  function hashColor(s) {
    var h = 0; for (var i = 0; i < (s || '').length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    var p = LEGEND_PALETTE[h % LEGEND_PALETTE.length];
    return 'rgb(' + p[0] + ',' + p[1] + ',' + p[2] + ')';
  }
  function lookupColor(arr, key, fb) {
    if (arr) { for (var i = 0; i < arr.length; i++) if (arr[i] && arr[i].key === key) return arr[i].color; }
    return fb;
  }

  // 判断事件是否为「战事」类（用于聚合 events.json 里的战例）
  function isBattleKind(k) {
    if (!k) return false;
    return /战|役|陷|攻|克|降|奔|溃|覆/.test(k);
  }

  // "1619-04-14" -> 可排序序数（用于路线按日期生长 / 年份过滤）
  // 支持公元前：以 "B" 前缀表示，如 "B260" = 公元前 260 年，"B260-07" = 前260年七月。
  function _parseYMD(s) {
    if (!s) return null;
    var m = String(s).match(/^(-?B?\d+)(?:-(\d+)(?:-(\d+))?)?/);
    if (!m) return null;
    var y = +(m[1].replace('B', '-'));
    var mo = m[2] ? +m[2] : 1, d = m[3] ? +m[3] : 1;
    return { y: y, m: mo, d: d };
  }
  function ordOf(s) {
    var p = _parseYMD(s); if (!p) return null;
    return p.y * 10000 + p.m * 100 + p.d;
  }
  function yearOf(s) {
    var p = _parseYMD(s); return p ? p.y : null;
  }

  function dist2(ax, ay, bx, by) { var dx = ax - bx, dy = ay - by; return dx * dx + dy * dy; }

  // 加载单个场景的 4 个文件，合并进全局集合
  function loadScene(scene, base, primaryPlace, out) {
    function get(name) {
      return fetch(base + scene + '/' + name)
        .then(function (r) { return r.ok ? r.json() : null; })
        .catch(function () { return null; });
    }
    return Promise.all([get('places.json'), get('events.json'), get('engagements.json'), get('routes.json')])
      .then(function (res) {
        var pl = res[0], ev = res[1], en = res[2], rt = res[3];
        if (pl && pl.places) pl.places.forEach(function (p) { if (p.id && p.lon != null) places[p.id] = p; });
        // 接战点
        if (en && en.engagements) en.engagements.forEach(function (e) {
          var pp = places[e.place];
          if (!pp) return;
          out.eng.push({
            id: e.id, name: e.name, at: e.at, ord: ordOf(e.at), year: yearOf(e.at),
            lon: pp.lon, lat: pp.lat, sides: e.sides || [], winner: e.winner || null,
            outcome: e.outcome, subject: e.subject, noContact: !!e.no_contact, scene: scene
          });
        });
        // 战事事件（带 place 或回退 primary_place）
        if (ev && ev.events) ev.events.forEach(function (e) {
          if (!isBattleKind(e.kind)) return;
          var pid = e.place || (e.kind && primaryPlace && primaryPlace[scene]) || null;
          var pp = pid ? places[pid] : null;
          if (!pp) return;
          // 与已有接战点同场景同坐标则跳过（避免 ev_sarhu@sarhu 与 eng_sarhu_camp 重复）
          for (var i = 0; i < out.eng.length; i++) {
            if (out.eng[i].scene === scene && Math.abs(out.eng[i].lon - pp.lon) < 1e-4 && Math.abs(out.eng[i].lat - pp.lat) < 1e-4) return;
          }
          out.ev.push({
            id: e.id, title: e.title, year: e.year, lon: pp.lon, lat: pp.lat,
            kind: e.kind, text: e.text, subject: e.subject, scene: scene,
            fallback: !e.place  // 标记是否由 primary_place 回退（用于微偏移避免重叠）
          });
        });
        // 行军路线
        if (rt && rt.routes) rt.routes.forEach(function (r) {
          var nodes = (r.nodes || []).map(function (n) {
            var pp = places[n.place];
            return pp ? { lon: pp.lon, lat: pp.lat, at: n.at, ord: ordOf(n.at), label: n.label } : null;
          }).filter(Boolean);
          if (!nodes.length) return;
          out.rt.push({
            id: r.id, name: r.name, side: r.side || 'ming',
            color: (r.side === 'jin') ? COL.jinRoute : COL.mingRoute,
            nodes: nodes, outcome: r.outcome
          });
        });
      // 按日期回放序列（routes.json.timeline）：每条带 scene 以便 per-scene 取用
      if (rt && rt.timeline) rt.timeline.forEach(function (t) {
        out.tl.push({ at: t.at, ord: ordOf(t.at), era: t.era || '', label: t.label || '', key: !!t.key, scene: scene });
      });
      });
  }

  function fetchData() {
    if (!cfg || !cfg.scenes || fetching) return;
    fetching = true; ready = false;
    // 先注入当前场景已加载的 D.places（立即可用，并供跨场景反查）
    if (cfg.seedPlaces) cfg.seedPlaces.forEach(function (p) { if (p.id && p.lon != null) places[p.id] = p; });
    var base = cfg.base || '../data/';
    var primary = cfg.primaryPlaces || {};
    var out = { eng: [], ev: [], rt: [], tl: [] };
    var ps = cfg.scenes.map(function (s) { return loadScene(s, base, primary, out); });
    // 取当前场景 vocab.json 的 legend 配置（LLM 史料分析产出，驱动图例自动生成）
    var vocabScene = cfg.currentScene || (cfg.scenes && cfg.scenes[0]);
    if (vocabScene) {
      ps.push(fetch(base + vocabScene + '/vocab.json')
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (v) { cfg.legendDef = (v && v.legend) ? v.legend : null; })
        .catch(function () { cfg.legendDef = null; }));
    }
    Promise.all(ps).then(function () {
      engagements = out.eng; events = out.ev; routes = out.rt; routeTimeline = out.tl;
      ready = true; fetching = false;
      if (cfg.onReady) cfg.onReady(engagements.length + events.length + routes.length);
      repaint();
    }).catch(function () {
      fetching = false;
      if (cfg.onError) cfg.onError();
    });
  }

  function applyFilter() {
    var yr = cfg.filterYear;
    if (yr == null) {
      shown = engagements; shownRoutes = routes;
    } else {
      shown = engagements.filter(function (e) {
        var y = e.year != null ? e.year : yearOf(e.at);
        return y != null && y <= yr;
      });
      shownRoutes = routes.filter(function (r) {
        return r.nodes.some(function (n) { var y = yearOf(n.at); return y != null && y <= yr; });
      });
    }
  }

  // 与 ChgisLayer 共享同一 view 变换：地图坐标 → 屏幕坐标。
  // 这里不套 canvas 变换，而是手动把 PX/PY 结果按 view 平移+缩放转成屏幕像素，
  // 这样标记尺寸在任意缩放级别都保持恒定（点符号而非地理面），更利于点击与阅读。
  function toScreen(PX, PY, lon, lat, v, sx, sy) {
    return [ (PX(lon) - v.x) * sx, (PY(lat) - v.y) * sy ];
  }

  function repaint() {
    if (!cfg) return;
    var cv = cfg.cv; if (!cv) return;
    var ctx = cv.getContext('2d');
    var dpr = (cfg.getDpr ? cfg.getDpr() : 1) || 1;
    var cw = cfg.getCw ? cfg.getCw() : cv.width;
    var ch = cfg.getCh ? cfg.getCh() : cv.height;
    if (cv.width !== Math.round(cw * dpr) || cv.height !== Math.round(ch * dpr)) {
      cv.width = Math.round(cw * dpr); cv.height = Math.round(ch * dpr);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cw, ch);
    if (!ready) return;
    var v = cfg.getView();
    if (!v) return;
    var PX = cfg.px, PY = cfg.py;
    var sx = cw / v.w, sy = ch / v.h;        // 屏幕缩放（地图纵横比已由 fitView 保持）
    var showRoutes = cfg.showRoutes !== false;
    // routeOrd：按日期回放游标（null = 全程显示，不裁剪）。
    // 与「疆域时间轴」完全解耦——地图路线图标年份固定为战争发生年，绝不跟随疆域滑块。
    var rOrd = (cfg.routeOrd != null) ? cfg.routeOrd : null;
    applyFilter();
    var visRoutes = shownRoutes, visEng = shown, visEv = events;
    if (rOrd != null) {
      visRoutes = shownRoutes.map(function (r) {
        var ns = r.nodes.filter(function (n) { return n.ord != null && n.ord <= rOrd; });
        return ns.length ? { id: r.id, name: r.name, side: r.side, color: r.color, nodes: ns } : null;
      }).filter(Boolean);
      visEng = shown.filter(function (e) { var o = e.ord != null ? e.ord : ordOf(e.at); return o != null && o <= rOrd; });
      var ry = yearOf(rOrd);
      visEv = events.filter(function (e) { return yearOf(e.year) === ry; });
    }

    // 1) 行军路线（在标记之下）
    if (showRoutes) {
      visRoutes.forEach(function (r) {
        drawRoute(ctx, r, PX, PY, v, sx, sy, cw, ch);
      });
    }
    // 2) 接战点
    visEng.forEach(function (e) {
      var p = toScreen(PX, PY, e.lon, e.lat, v, sx, sy);
      var X = p[0], Y = p[1];
      if (X < -20 || X > cw + 20 || Y < -20 || Y > ch + 20) return;
      drawEngagement(ctx, e, X, Y);
    });
    // 3) 战事事件（菱形，回退坐标微偏移）
    visEv.forEach(function (e) {
      var p = toScreen(PX, PY, e.lon, e.lat, v, sx, sy);
      var X = p[0], Y = p[1];
      if (e.fallback) { X += 6; Y -= 6; }
      if (X < -20 || X > cw + 20 || Y < -20 || Y > ch + 20) return;
      drawEvent(ctx, e, X, Y);
    });
  }

  function drawRoute(ctx, r, PX, PY, v, sx, sy, cw, ch) {
    var col = lookupColor(cfg.legendDef && cfg.legendDef.route, r.side, r.color || (r.side === 'jin' ? COL.jinRoute : COL.mingRoute));
    var pts = r.nodes.map(function (n) { return toScreen(PX, PY, n.lon, n.lat, v, sx, sy); });
    // 视口剔除
    var inView = pts.some(function (p) { return p[0] >= -30 && p[0] <= cw + 30 && p[1] >= -30 && p[1] <= ch + 30; });
    if (!inView) return;
    ctx.save();
    ctx.strokeStyle = col; ctx.globalAlpha = 0.7;
    ctx.lineWidth = 2; ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (var i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.stroke();
    ctx.setLineDash([]);
    // 节点小圆 + 终点箭头
    pts.forEach(function (p, i) {
      ctx.beginPath(); ctx.fillStyle = col;
      ctx.arc(p[0], p[1], i === pts.length - 1 ? 4 : 2.5, 0, Math.PI * 2); ctx.fill();
    });
    // 终点箭头方向
    if (pts.length >= 2) {
      var a = pts[pts.length - 2], b = pts[pts.length - 1];
      var ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
      ctx.fillStyle = col; ctx.beginPath();
      ctx.moveTo(b[0], b[1]);
      ctx.lineTo(b[0] - 9 * Math.cos(ang - 0.4), b[1] - 9 * Math.sin(ang - 0.4));
      ctx.lineTo(b[0] - 9 * Math.cos(ang + 0.4), b[1] - 9 * Math.sin(ang + 0.4));
      ctx.closePath(); ctx.fill();
    }
    // 固定战争年份徽标：取首节点年份，绝不随疆域时间轴变化（避免误导用户）
    var ry = yearOf(r.nodes[0] && r.nodes[0].at);
    if (ry != null) {
      var p0 = pts[0];
      ctx.font = 'bold 9px system-ui, sans-serif';
      var txt = String(ry);
      var bw = ctx.measureText(txt).width + 8;
      ctx.fillStyle = col; ctx.globalAlpha = 0.92;
      ctx.fillRect(p0[0] - bw / 2, p0[1] - 23, bw, 13);
      ctx.globalAlpha = 1; ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(txt, p0[0], p0[1] - 16.5);
    }
    ctx.restore();
  }

  function drawEngagement(ctx, e, X, Y) {
    var col = lookupColor(cfg.legendDef && cfg.legendDef.battle, e.winner,
      e.winner === 'jin' ? COL.jin : (e.winner === 'ming' ? COL.ming : COL.none));
    ctx.save();
    // 外晕
    ctx.beginPath(); ctx.fillStyle = col; ctx.globalAlpha = 0.18;
    ctx.arc(X, Y, 11, 0, Math.PI * 2); ctx.fill();
    // 主体
    ctx.globalAlpha = 1; ctx.beginPath();
    ctx.fillStyle = col; ctx.arc(X, Y, 6.5, 0, Math.PI * 2); ctx.fill();
    ctx.lineWidth = 1.5; ctx.strokeStyle = '#fff'; ctx.stroke();
    if (e.noContact) { // 未接战：空心
      ctx.beginPath(); ctx.fillStyle = '#fff'; ctx.arc(X, Y, 3, 0, Math.PI * 2); ctx.fill();
    }
    // 标签
    ctx.fillStyle = '#222'; ctx.font = '10px system-ui, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    ctx.fillText(e.name, X, Y + 9);
    ctx.restore();
  }

  function drawEvent(ctx, e, X, Y) {
    ctx.save();
    ctx.translate(X, Y); ctx.rotate(Math.PI / 4);
    ctx.fillStyle = COL.ming; ctx.globalAlpha = 0.9;
    ctx.fillRect(-4.5, -4.5, 9, 9);
    ctx.lineWidth = 1.2; ctx.strokeStyle = '#fff'; ctx.strokeRect(-4.5, -4.5, 9, 9);
    ctx.restore();
  }

  // 屏幕反投影（屏幕→经纬度），用于点击查询
  function unproject(cx, cy) {
    if (!cfg || !cfg.unproject) return null;
    return cfg.unproject(cx, cy);
  }

  // 点击命中：返回最近标记（within 0.12°）
  function hitTest(lon, lat) {
    if (!ready) return null;
    var best = null, bestD = 0.12 * 0.12;
    shown.forEach(function (e) {
      var d = dist2(lon, lat, e.lon, e.lat);
      if (d < bestD) { bestD = d; best = { type: 'engagement', data: e }; }
    });
    if (best) return best;
    events.forEach(function (e) {
      var d = dist2(lon, lat, e.lon, e.lat);
      if (d < bestD) { bestD = d; best = { type: 'event', data: e }; }
    });
    return best;
  }

  // 数据驱动图例：类别来自 vocab.legend（若配置），否则从本切片战例数据自动派生
  // （distinct winner / side → 哈希取色）。返回 battles/routes 两类别数组，供宿主遍历渲染。
  function getLegend() {
    var def = cfg.legendDef || null;
    var battles = [], routes = [];
    var bCount = {};
    shown.forEach(function (e) { var k = (e.winner != null ? e.winner : 'none'); bCount[k] = (bCount[k] || 0) + 1; });
    var battleCats = (def && def.battle)
      ? def.battle.slice()
      : Object.keys(bCount).map(function (k) { return { key: k, label: k, color: hashColor(k) }; });
    battleCats.forEach(function (c) { c.count = bCount[c.key] || 0; battles.push(c); });

    var rCount = {};
    shownRoutes.forEach(function (r) { if (r.side != null) rCount[r.side] = (rCount[r.side] || 0) + 1; });
    var routeCats = (def && def.route)
      ? def.route.slice()
      : Object.keys(rCount).map(function (k) { return { key: k, label: k, color: hashColor(k) }; });
    routeCats.forEach(function (c) { c.count = rCount[c.key] || 0; routes.push(c); });

    return { battles: battles, routes: routes, totalEng: shown.length, totalEv: events.length, totalRoutes: shownRoutes.length };
  }

  function setVisible(on) { if (on) repaint(); else { var cv = cfg.cv; if (cv) cv.getContext('2d').clearRect(0, 0, cv.width, cv.height); } }
  function setShowRoutes(on) { cfg.showRoutes = (on !== false); repaint(); if (cfg.onRepaint) cfg.onRepaint(); }
  function setFilter(o) {
    if (!o) return;
    if (o.year !== undefined) cfg.filterYear = (o.year === null ? null : o.year);
    repaint();
    if (cfg.onRepaint) cfg.onRepaint();
  }
  // 按日期回放游标：ord 为日期序数（YYYYMMDD），null = 全程
  function setRouteDate(ord) {
    cfg.routeOrd = (ord === undefined || ord == null) ? null : ord;
    repaint();
    if (cfg.onRepaint) cfg.onRepaint();
  }
  // 取某场景的「按日期」回放序列（来自 routes.json.timeline）；无 timeline 时回退到路线/接战点日期
  function getRouteMeta(scene) {
    if (!ready) return { ready: false, timeline: [], year: null, scene: scene };
    var tl = routeTimeline.filter(function (t) { return t.scene === scene; })
      .slice().sort(function (a, b) { return a.ord - b.ord; });
    if (!tl.length) {
      var seen = {};
      routes.forEach(function (r) { if (r.scene === scene) r.nodes.forEach(function (n) { if (n.ord != null) seen[n.ord] = true; }); });
      engagements.forEach(function (e) { if (e.scene === scene && e.ord != null) seen[e.ord] = true; });
      tl = Object.keys(seen).map(function (k) { return { ord: +k, at: String(+k), era: '', label: '', key: false }; })
        .sort(function (a, b) { return a.ord - b.ord; });
    }
    var year = tl.length ? yearOf(tl[0].at) : null;
    return { ready: true, timeline: tl, year: year, scene: scene };
  }
  function setup(o) {
    cfg = o || {};
    cfg.cv = o.cv || null;
    cfg.filterYear = (o.filterYear === undefined ? null : o.filterYear);
    cfg.showRoutes = (o.showRoutes === undefined ? true : o.showRoutes);
    cfg.routeOrd = (o.routeOrd === undefined ? null : o.routeOrd);
    cfg.currentScene = o.currentScene || null;
    ready = false; fetching = false; routeTimeline = [];
    if (!cfg.cv) return;
    fetchData();
  }

  window.BattleLayer = {
    setup: setup, repaint: repaint, clear: setVisible.bind(null, false),
    setVisible: setVisible, setFilter: setFilter, setShowRoutes: setShowRoutes,
    setRouteDate: setRouteDate, getRouteMeta: getRouteMeta,
    isReady: function () { return ready; }, isFetching: function () { return fetching; },
    count: function () { return engagements.length + events.length; },
    hitTest: hitTest, getLegend: getLegend,
    COL: COL, SIDE_CN: SIDE_CN
  };
})();
