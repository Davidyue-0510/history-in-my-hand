/* hub 主枢纽（v0.6 重设计）—— 自动读取 SD.scenes 渲染所有切片卡片
 *
 * 入口页分面筛选（对齐「类型 / 朝代 / 地域」三维分类整合）：
 *   - 类型(kind) / 朝代(由副标题代表年推导) / 地域(region) 三个分面
 *   - 面内多选（OR），面间 AND；加搜索框 + 清除筛选
 *   - 卡片多标签：类型 + 朝代 + 地域 三枚 chip，一个事件可同时命中多个分面
 * 分面按钮由数据动态生成（增删切片无需改 HTML），声明式优先。
 */
(function () {
  'use strict';
  var SD = window.SANDBOX_DATA;
  var TG = SD && SD.terrain;
  var cv = document.getElementById('hubTerrain');
  var rangeEl = document.getElementById('hubTerrainRange');
  var grid = document.getElementById('hubGrid');
  var resonance = window.HUB_RESONANCE || {};

  if (!TG || !cv || !grid) return;

  /* ═══════════ 地形预览（缩略图，响应式重绘）═══════════ */
  var dpr = window.devicePixelRatio || 1;
  var W = 0, H = 0;
  var RAMP = [
    [0, [214, 227, 232]], [1, [243, 240, 229]], [80, [235, 229, 212]],
    [250, [223, 213, 188]], [500, [208, 194, 161]], [900, [191, 172, 136]],
    [1400, [173, 150, 115]], [1800, [156, 131, 98]]
  ];
  function rampColor(e) {
    if (e <= 0) return RAMP[0][1];
    for (var i = 1; i < RAMP.length; i++) {
      var a = RAMP[i - 1], b = RAMP[i];
      if (e <= b[0]) {
        var t = (e - a[0]) / (b[0] - a[0] || 1);
        return [a[1][0] + (b[1][0] - a[1][0]) * t,
                a[1][1] + (b[1][1] - a[1][1]) * t,
                a[1][2] + (b[1][2] - a[1][2]) * t];
      }
    }
    return RAMP[RAMP.length - 1][1];
  }

  var ctx = cv.getContext('2d');
  var nx = TG.nx, ny = TG.ny, E = TG.elev;
  var midLat = TG.lat0 + (ny - 1) * TG.step / 2;
  var cellY = TG.step * 111320;
  var cellX = TG.step * 111320 * Math.cos(midLat * Math.PI / 180);
  var ZF = 2.6, zen = (90 - 45) * Math.PI / 180;
  var azm = (360 - 315 + 90) * Math.PI / 180;

  function z(ix, iy) {
    ix = Math.max(0, Math.min(nx - 1, ix));
    iy = Math.max(0, Math.min(ny - 1, iy));
    var v = E[iy * nx + ix];
    return v == null ? 0 : v;
  }
  // 动态边界的变量（在 scenes/order 就绪后于下方计算）
  var lonMin, lonMax, latMin, latMax;

  // 切片中心点 pin 用到的数据（draw 内外都要引用）
  var scenes = SD.scenes || {};
  var order = SD.scene_order || Object.keys(scenes);
  var REGION_NAME = {};
  (SD.regions || []).forEach(function (r) { REGION_NAME[r.id] = r.name; });
  var REGION_NOTE = {};
  (SD.regions || []).forEach(function (r) { REGION_NOTE[r.id] = r.note; });

  // 六维目录（单一真值，来自 data/scenes.json 顶层 dimensions），用于「按维度浏览」分面与卡片覆盖标记
  var DIMENSIONS = SD.dimensions || {};
  var DIM_NAME = {}, DIM_SHORT = {};
  Object.keys(DIMENSIONS).forEach(function (k) {
    DIM_NAME[k] = DIMENSIONS[k].name; DIM_SHORT[k] = DIMENSIONS[k].short;
  });

  /* ════════ 动态地图边界：地形网格 ∪ 所有切片主地点 ════════ */
  (function computeBounds() {
    var lons = [TG.lon0, TG.lon0 + (nx - 1) * TG.step];
    var lats = [TG.lat0, TG.lat0 + (ny - 1) * TG.step];
    order.forEach(function (sk) {
      var sc = scenes[sk]; if (!sc) return;
      var m = sc.meta || {};
      var p = (sc.places || []).filter(function (x) { return x.id === m.primary_place; })[0];
      if (p && typeof p.lon === 'number' && typeof p.lat === 'number') { lons.push(p.lon); lats.push(p.lat); }
    });
    lonMin = Math.min.apply(null, lons); lonMax = Math.max.apply(null, lons);
    latMin = Math.min.apply(null, lats); latMax = Math.max.apply(null, lats);
    var padLon = (lonMax - lonMin) * 0.05 + 0.1, padLat = (latMax - latMin) * 0.05 + 0.1;
    lonMin -= padLon; lonMax += padLon; latMin -= padLat; latMax += padLat;
  })();
  function gx(lo) { return (lo - lonMin) / (lonMax - lonMin) * W; }
  function gy(la) { return (latMax - la) / (latMax - latMin) * H; }
  // 切片类型不再按 key 硬编码——meta.kind 来自 data/scenes.json
  var KIND_LABEL = {
    battle: '战役 · battle', county: '县级 LOD · county', fiction: '虚构世界 · fiction',
    disaster: '灾异 · disaster', engineering: '工程 · engineering', uprising: '起义 · uprising',
    thought: '思想 · thought', tech: '科技 · technology', fusion: '民族融合 · fusion',
    dynasty: '王朝 · dynasty', reform: '改革 · reform', court: '宫廷 · court',
    frontier: '边疆 · frontier', war: '战争 · war', event: '事件 · event', migration: '迁徙 · migration'
  };
  var KIND_SHORT = {
    battle: '战役', county: '县级', fiction: '虚构', disaster: '灾异', engineering: '工程',
    uprising: '起义', thought: '思想', tech: '科技', fusion: '融合', dynasty: '王朝',
    reform: '改革', court: '宫廷', frontier: '边疆', war: '战争', event: '事件',
    migration: '迁徙', civ: '文明事件'
  };
  function kindLabel(m) { return KIND_LABEL[m.kind] || (m.kind || 'civ'); }
  function kindShort(k) { return KIND_SHORT[k] || k; }

  /* ═══════════ 朝代推导（由副标题代表年）══════════
   * region 字段混杂了地理/时代/主题，不能干净地作「朝代」分面；
   * 故从场景代表年（副标题首个数字，支持「前」/负号与「起止」区间）推导朝代桶。 */
  function parseYear(sub) {
    if (!sub) return null;
    var m = sub.match(/(前|-)\s*\d+|\d+/);
    if (!m) return null;
    var s = m[0].replace(/\s/g, '');
    var neg = (s[0] === '前' || s[0] === '-');
    var num = parseInt(neg ? s.slice(1) : s, 10);
    return isNaN(num) ? null : (neg ? -num : num);
  }
  function yearToDynasty(y) {
    if (y == null) return '未知';
    if (y < -221) return '先秦';
    if (y <= -207) return '秦';
    if (y <= 220) return '汉';
    if (y <= 280) return '三国';
    if (y <= 580) return '两晋南北朝';
    if (y <= 618) return '隋';
    if (y <= 907) return '唐';
    if (y <= 960) return '五代十国';
    if (y <= 1279) return '宋辽金';
    if (y <= 1368) return '元';
    if (y <= 1644) return '明';
    if (y <= 1912) return '清';
    return '近代';
  }
  var DYN_ORDER = ['先秦', '秦', '汉', '三国', '两晋南北朝', '隋', '唐', '五代十国',
                   '宋辽金', '元', '明', '清', '近代', '未知'];
  var DYN_NOTE = {
    '先秦': '百家争鸣、封邦建国，文明奠基期。',
    '秦': '一统天下，郡县制与书同文。',
    '汉': '大一统定型，丝路开通、儒术独尊。',
    '三国': '群雄割据，赤壁等经典会战。',
    '两晋南北朝': '分裂动荡，民族大融合。',
    '隋': '重归一统，开运河、创科举。',
    '唐': '盛世气象，藩镇与边患交织。',
    '五代十国': '唐亡后短促分裂。',
    '宋辽金': '文治巅峰，宋辽金夏对峙。',
    '元': '蒙古一统，行省与海漕。',
    '明': '再造华夏，明清易代的前夜。',
    '清': '满汉共治，末世灾变与变局。',
    '近代': '三千年未有之大变局。',
    '未知': '年代待考。'
  };
  function sceneDynasty(sk) {
    var sc = scenes[sk]; if (!sc) return '未知';
    var m = sc.meta || {};
    return yearToDynasty(parseYear(m.subtitle));
  }

  /* ═══════════ 分面筛选状态 ═══════════
   * 三个分面各自一个选中集合（空集合 = 不过滤）；面内 OR，面间 AND。 */
  var sel = { type: [], era: [], region: [], dim: [] };
  var query = '';
  function inSel(arr, v) { return arr.length === 0 || arr.indexOf(v) >= 0; }
  function matches(sk) {
    var sc = scenes[sk]; if (!sc) return false;
    var m = sc.meta || {};
    if (!inSel(sel.type, m.kind)) return false;
    if (!inSel(sel.era, sceneDynasty(sk))) return false;
    if (!inSel(sel.region, m.region)) return false;
    // 「按维度浏览」：一个 world 可覆盖多个维度；选中任一维度即命中（面内 OR）
    var ds = m.dims || [];
    if (sel.dim.length && !ds.some(function (d) { return sel.dim.indexOf(d) >= 0; })) return false;
    if (query) {
      var q = query.toLowerCase();
      var hay = ((m.dossier_label || '') + ' ' + (m.title || '') + ' ' + (m.subtitle || '') + ' ' + sk).toLowerCase();
      if (hay.indexOf(q) < 0) return false;
    }
    return true;
  }
  function visibleOrder() { return order.filter(matches); }

  // 按当前容器尺寸重绘；窗口缩放时由 resize 监听节流触发
  function draw() {
    var rect = cv.getBoundingClientRect();
    W = Math.max(280, Math.round(rect.width));
    H = Math.max(150, Math.round(rect.height));
    cv.width = W * dpr; cv.height = H * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#EFECE2'; ctx.fillRect(0, 0, W, H);

    var stepX = Math.max(1, Math.round(nx / W));
    var stepY = Math.max(1, Math.round(ny / H));
    for (var iy = 0; iy < ny; iy += stepY) {
      for (var ix = 0; ix < nx; ix += stepX) {
        var e = z(ix, iy);
        var dzdx = ((z(ix + 1, iy - 1) + 2 * z(ix + 1, iy) + z(ix + 1, iy + 1)) -
                    (z(ix - 1, iy - 1) + 2 * z(ix - 1, iy) + z(ix - 1, iy + 1))) / (8 * cellX);
        var dzdy = ((z(ix - 1, iy + 1) + 2 * z(ix, iy + 1) + z(ix + 1, iy + 1)) -
                    (z(ix - 1, iy - 1) + 2 * z(ix, iy - 1) + z(ix + 1, iy - 1))) / (8 * cellY);
        var slope = Math.atan(ZF * Math.sqrt(dzdx * dzdx + dzdy * dzdy));
        var aspect = Math.atan2(dzdy, -dzdx);
        var hs = Math.cos(zen) * Math.cos(slope) + Math.sin(zen) * Math.sin(slope) * Math.cos(azm - aspect);
        hs = Math.max(0, Math.min(1, hs));
        var col = rampColor(e);
        var f = e <= 0 ? 1 : (0.62 + 0.52 * hs);
        var lo = TG.lon0 + ix * TG.step;
        var la = TG.lat0 + iy * TG.step;
        var px = gx(lo), py = gy(la);
        var pw = (TG.step / (lonMax - lonMin)) * W * (stepX + 1);
        var ph = (TG.step / (latMax - latMin)) * H * (stepY + 1);
        ctx.fillStyle = 'rgb(' + Math.round(col[0] * f) + ',' +
                                Math.round(col[1] * f) + ',' +
                                Math.round(col[2] * f) + ')';
        ctx.fillRect(px, py, pw + 1, ph + 1);
      }
    }

    // 自动 pin 所有切片中心点（按当前筛选结果），做一次简单避让
    var placed = [];
    function collides(x, y, w, h) {
      for (var i = 0; i < placed.length; i++) {
        var r = placed[i];
        if (x < r.x + r.w && x + w > r.x && y < r.y + r.h && y + h > r.y) return true;
      }
      return false;
    }
    ctx.font = '10.5px monospace';
    visibleOrder().forEach(function (sk) {
      var sc = scenes[sk]; if (!sc) return;
      var m = (sc.meta || {});
      var place = (sc.places || []).filter(function (x) { return x.id === m.primary_place; })[0];
      if (!place || typeof place.lon !== 'number') return;
      var cx = gx(place.lon), cy = gy(place.lat);
      var label = m.dossier_label || m.title || sk;
      var tw = ctx.measureText(label).width, th = 11;
      var cands = [[cx + 8, cy + 4], [cx - 8 - tw, cy + 4],
                   [cx - tw / 2, cy - 8], [cx - tw / 2, cy + 15]];
      var pos = cands[0];
      for (var i = 0; i < cands.length; i++) {
        if (!collides(cands[i][0], cands[i][1] - th, tw, th)) { pos = cands[i]; break; }
      }
      placed.push({ x: pos[0], y: pos[1] - th, w: tw, h: th });

      ctx.beginPath(); ctx.arc(cx, cy, m.kind === 'battle' ? 5 : 4, 0, Math.PI * 2);
      ctx.fillStyle = m.kind === 'battle' ? '#B23A48' : '#FBF9F3'; ctx.fill();
      ctx.lineWidth = 1.4; ctx.strokeStyle = '#2A2521'; ctx.stroke();
      ctx.lineWidth = 2.6; ctx.strokeStyle = 'rgba(251,249,243,.85)';
      ctx.strokeText(label, pos[0], pos[1]);
      ctx.fillStyle = '#2A2521';
      ctx.fillText(label, pos[0], pos[1]);
    });

    if (rangeEl) rangeEl.textContent = (TG.min == null ? '—' : TG.min) + '–' +
                                       (TG.max == null ? '—' : TG.max) + ' m';
  }

  draw();
  var _rzTimer;
  window.addEventListener('resize', function () {
    clearTimeout(_rzTimer);
    _rzTimer = setTimeout(function () { draw(); }, 150);
  });

  /* ═══════════ 自动渲染卡片 ═══════════ */
  function count(layer, key) {
    return (scenes[key].assertions || []).filter(function (a) { return a.layer === layer; }).length;
  }
  function badge(r) {
    if (r == null) return '<span class="resonance-pill mid">共振 —</span>';
    var txt = '共振 ' + r.toFixed(2);
    if (r >= 0.7) return '<span class="resonance-pill high">' + txt + '</span>';
    if (r >= 0.3) return '<span class="resonance-pill mid">' + txt + '</span>';
    return '<span class="resonance-pill low">' + txt + '</span>';
  }
  function bestEventName(sk) {
    var s = resonance.scene_summary && resonance.scene_summary.filter(function (x) { return x.scene === sk; })[0];
    return (s && s.best_event) || null;
  }
  function bestEventR(sk) {
    var s = resonance.scene_summary && resonance.scene_summary.filter(function (x) { return x.scene === sk; })[0];
    return s ? s.best_resonance : null;
  }
  function avgR(sk) {
    var s = resonance.scene_summary && resonance.scene_summary.filter(function (x) { return x.scene === sk; })[0];
    return s ? s.avg_resonance : null;
  }

  function tagsHtml(sk) {
    var sc = scenes[sk]; var m = sc.meta || {};
    var dy = sceneDynasty(sk);
    var region = REGION_NAME[m.region] || m.region || '—';
    return '<div class="card-tags">'
      + '<span class="chip chip-k">' + kindShort(m.kind) + '</span>'
      + '<span class="chip chip-e">' + dy + '</span>'
      + '<span class="chip chip-r">' + region + '</span>'
      + '</div>';
  }

  // 六维覆盖标记：①地理②技术③制度④社会⑤思想⑥事件；点亮的 = 该 world 触及的维度
  function dimChipsHtml(m) {
    var ds = m.dims || [];
    var html = '<div class="card-dims" title="六维覆盖（地理/技术/制度/社会/思想/事件）">';
    Object.keys(DIMENSIONS).forEach(function (k) {
      var on = ds.indexOf(parseInt(k, 10)) >= 0;
      html += '<span class="dim d' + k + (on ? ' on' : '') + '"'
        + ' title="' + (DIM_NAME[k] || k) + '：' + ((DIMENSIONS[k] && DIMENSIONS[k].note) || '') + '">' + k + '</span>';
    });
    return html + '</div>';
  }

  function cardHtml(sk) {
    var sc = scenes[sk]; if (!sc) return '';
    var m = sc.meta || {};
    var srcN = (sc['sources'] || []).length;
    var placesN = (sc.places || []).length;
    var personsN = (sc.persons || []).length;
    var assertsN = (sc.assertions || []).length;
    var conflictsN = (sc.conflicts || []).length;
    var gapsN = count('gap', sk);
    var recN = count('record', sk);
    var schN = count('scholarship', sk);
    var infN = count('inference', sk);
    var best = bestEventName(sk);
    var bR = bestEventR(sk);
    var aR = avgR(sk);
    var bestLine = best ? '最高共振：<b>' + best + '</b>（' + bR.toFixed(3) + '）<br>' : '';
    var avgLine = aR != null ? '切片平均共振：<b>' + aR.toFixed(3) + '</b> · ' : '';
    var isFic = m.kind === 'fiction';
    var pill = isFic ? '<span class="resonance-pill fiction">虚构 · 文字生成</span>' : badge(bR);
    var hint = isFic ? '点击进入 → 关系图 · 史料 · 冲突 · 缺口'
                     : '点击进入 → 史料 · 冲突 · 缺口 · 地形';

    return '<a class="card card--' + (m.kind || 'civ') + (isFic ? ' fic' : '') + '" '
      + 'data-kind="' + (m.kind || 'civ') + '" data-era="' + sceneDynasty(sk) + '" data-region="' + (m.region || '') + '" '
      + 'href="' + (m.page || ('county.html?scene=' + sk)) + '">'
      + '<div class="card-kind' + (isFic ? ' fic' : '') + '">' + kindLabel(m) + '</div>'
      + '<div class="card-title">' + (m.dossier_label || sk) + '</div>'
      + '<div class="card-sub">' + (m.subtitle || '') + '</div>'
      + tagsHtml(sk)
      + dimChipsHtml(m)
      + '<div class="card-stats">'
      +   '<div class="card-stat"><span>史料</span><b>' + srcN + '</b></div>'
      +   '<div class="card-stat"><span>地名 / 人物</span><b>' + placesN + ' / ' + personsN + '</b></div>'
      +   '<div class="card-stat"><span>断言</span><b>' + assertsN + '</b></div>'
      +   '<div class="card-stat"><span>冲突</span><b>' + conflictsN + '</b></div>'
      +   '<div class="card-stat"><span>缺口</span><b>' + gapsN + '</b></div>'
      +   '<div class="card-stat"><span>record / scholar / infer</span><b>' + recN + ' / ' + schN + ' / ' + infN + '</b></div>'
      + '</div>'
      + '<div class="card-extras">'
      +   pill + ' &nbsp;' + bestLine + avgLine
      +   '<small style="color:#918777">' + hint + '</small>'
      + '</div></a>';
  }

  /* 渲染：按朝代分组（时间轴整合），被筛掉的朝代自然不打印。 */
  function renderHub() {
    var vis = visibleOrder();
    var byDyn = {};
    vis.forEach(function (sk) {
      var dy = sceneDynasty(sk);
      (byDyn[dy] = byDyn[dy] || []).push(sk);
    });
    var html = '';
    DYN_ORDER.forEach(function (dy) {
      if (!byDyn[dy]) return;
      html += '<div class="region-head"><b>' + dy + '</b><span>' + (DYN_NOTE[dy] || '') + '</span></div>';
      byDyn[dy].forEach(function (sk) { html += cardHtml(sk); });
    });
    if (!html) {
      html = '<div style="grid-column:1/-1;padding:24px;color:#7A6E5C;font-family:var(--serif)">'
        + '没有匹配的切片，试试清除筛选或更换标签。</div>';
    }
    grid.innerHTML = html;
    updateStats(vis.length);
  }

  function updateStats(n) {
    var el = document.getElementById('hubStats');
    if (!el) return;
    var total = order.length;
    var txt = '<span><b>' + n + '</b>/' + total + ' 个切片匹配</span>';
    var active = sel.type.length + sel.era.length + sel.region.length + sel.dim.length + (query ? 1 : 0);
    if (active) txt += '<span><b>' + active + '</b> 个筛选条件生效</span>';
    el.innerHTML = txt;
  }

  /* ═══════════ 分面按钮（数据驱动生成）══════════ */
  function uniq(arr) { var s = {}, out = []; arr.forEach(function (v) { if (!s[v]) { s[v] = 1; out.push(v); } }); return out; }

  function buildFacet(containerId, values, selKey, labelFn) {
    var box = document.getElementById(containerId);
    if (!box) return;
    box.innerHTML = '';
    values.forEach(function (v) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'facet-btn';
      b.textContent = labelFn ? labelFn(v) : v;
      b.setAttribute('data-v', v);
      b.addEventListener('click', function () {
        var arr = sel[selKey];
        var i = arr.indexOf(v);
        if (i >= 0) { arr.splice(i, 1); b.classList.remove('on'); }
        else { arr.push(v); b.classList.add('on'); }
        renderHub(); draw();
      });
      box.appendChild(b);
    });
  }

  function initFacets() {
    var types = uniq(order.map(function (sk) { return (scenes[sk].meta || {}).kind; })).filter(Boolean);
    var eras = uniq(order.map(function (sk) { return sceneDynasty(sk); }));
    var regions = uniq(order.map(function (sk) { return (scenes[sk].meta || {}).region; })).filter(Boolean);
    // 朝代按时间序、类型按 KIND 序、地域按出现序
    eras.sort(function (a, b) { return DYN_ORDER.indexOf(a) - DYN_ORDER.indexOf(b); });
    types.sort(function (a, b) { return (KIND_SHORT[a] || a).localeCompare(KIND_SHORT[b] || b, 'zh'); });
    buildFacet('fType', types, 'type', function (v) { return kindShort(v); });
    buildFacet('fEra', eras, 'era', null);
    buildFacet('fRegion', regions, 'region', function (v) { return REGION_NAME[v] || v; });

    // 「按维度浏览」分面：维度顺序固定为 1→6
    var dimKeys = Object.keys(DIMENSIONS).map(function (k) { return parseInt(k, 10); })
      .sort(function (a, b) { return a - b; });
    buildFacet('fDim', dimKeys, 'dim', function (v) {
      var s = String(v); return (DIM_SHORT[s] || DIM_NAME[s] || s);
    });

    var search = document.getElementById('hubSearch');
    if (search) search.addEventListener('input', function () {
      query = search.value.trim(); renderHub(); draw();
    });
    var clear = document.getElementById('hubClear');
    if (clear) clear.addEventListener('click', function () {
      sel.type = []; sel.era = []; sel.region = []; sel.dim = []; query = '';
      if (search) search.value = '';
      Array.prototype.forEach.call(document.querySelectorAll('.facet-btn.on'), function (b) { b.classList.remove('on'); });
      renderHub(); draw();
    });
  }

  initFacets();
  renderHub();
})();
