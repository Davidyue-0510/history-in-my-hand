/* hub 主枢纽（v0.4）—— 自动读取 SD.scenes 渲染所有切片卡片
 *
 * v0.4 改动：不再写死 sarhu/kaiyuan 两个切片。扫描 SANDBOX_DATA.scenes
 * 里所有切片，自动渲染：
 *   - 地形预览上每个切片 PRIMARY_PLACE 的 pin
 *   - 一张卡片：统计（史料/地名/人物/断言/冲突/缺口）+ 共振度色标
 * 共振度从 tools/resonance.py 写出的 data/resonance_report.json 直接读入。
 * 哪天增加第 5 个切片，本文件不用改。
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

  /* ════════ 动态地图边界：地形网格 ∪ 所有切片主地点 ════════
   * 默认（v0.5）gx/gy 死绑地形网格，导致辽西/辽南（网格外）切片的
   * pin 被裁出画布。现改为按「地形网格 ∪ 每切片主地点」算范围，
   * 地形只在覆盖区绘制，网格外切片照常显示 pin —— 绝不伪造高程。 */
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
    battle: '战役 · battle',
    county: '县级 LOD · county',
    fiction: '虚构世界 · fiction',
    disaster: '灾异 · disaster',
    engineering: '工程 · engineering',
    uprising: '起义 · uprising',
    thought: '思想 · thought',
    tech: '科技 · technology',
    fusion: '民族融合 · fusion',
    dynasty: '王朝 · dynasty',
    reform: '改革 · reform',
    court: '宫廷 · court',
    frontier: '边疆 · frontier',
    war: '战争 · war',
    event: '事件 · event',
    migration: '迁徙 · migration'
  };
  function kindLabel(m) {
    return KIND_LABEL[m.kind] || (m.kind || 'civ');
  }

  /* ═══════════ 分类与筛选 ═══════════
   * 文明事件切片数量暴涨后，hub 需要按「分类」快速入口。
   * 分类规则（与 scenes.json 的 kind 对齐）：
   *   county  → 辽东走廊（县级 LOD 切片）
   *   battle  → 历史战役
   *   fiction → 虚构世界
   *   civ     → 其余一切文明事件（disaster/engineering/dynasty/reform/
   *             uprising/fusion/court/thought/tech/frontier）
   */
  function sceneCat(m) {
    if (m.kind === 'fiction') return 'fiction';
    if (m.kind === 'battle') return 'battle';
    if (m.kind === 'county') return 'county';
    return 'civ';
  }
  var CURRENT_CAT = 'all';
  function visibleOrder(filterCat) {
    if (filterCat === 'all' || filterCat == null) return order;
    return order.filter(function (sk) {
      var sc = scenes[sk]; if (!sc) return false;
      return sceneCat(sc.meta || sc.META || {}) === filterCat;
    });
  }

  // 按当前容器尺寸重绘；窗口缩放时由 resize 监听节流触发
  function draw() {
    var rect = cv.getBoundingClientRect();
    W = Math.max(280, Math.round(rect.width));
    H = Math.max(150, Math.round(rect.height));
    cv.width = W * dpr; cv.height = H * dpr;
    // 显示尺寸由 CSS 控制（width:100% + clamp 高度），此处只设绘制缓冲

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

    // 自动 pin 所有切片中心点。标签会互相压——按已放置矩形做一次简单避让，
    // 切片多起来之后这是必需的（14 个 pin 挤在辽东走廊上）。
    var placed = [];
    function collides(x, y, w, h) {
      for (var i = 0; i < placed.length; i++) {
        var r = placed[i];
        if (x < r.x + r.w && x + w > r.x && y < r.y + r.h && y + h > r.y) return true;
      }
      return false;
    }
    ctx.font = '10.5px monospace';
    visibleOrder(CURRENT_CAT).forEach(function (sk) {
      var sc = scenes[sk]; if (!sc) return;
      var m = (sc.meta || {});
      var place = (sc.places || []).filter(function (x) { return x.id === m.primary_place; })[0];
      if (!place || typeof place.lon !== 'number') return;
      var cx = gx(place.lon), cy = gy(place.lat);
      var label = m.dossier_label || m.title || sk;
      var tw = ctx.measureText(label).width, th = 11;
      // 候选位：右、左、上、下
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
      // 标签描白边，压在山影上也读得出来
      ctx.lineWidth = 2.6; ctx.strokeStyle = 'rgba(251,249,243,.85)';
      ctx.strokeText(label, pos[0], pos[1]);
      ctx.fillStyle = '#2A2521';
      ctx.fillText(label, pos[0], pos[1]);
    });

    if (rangeEl) rangeEl.textContent = (TG.min == null ? '—' : TG.min) + '–' +
                                       (TG.max == null ? '—' : TG.max) + ' m';
  }

  draw(CURRENT_CAT);
  // 窗口缩放时按节流重绘地形（卡片是 HTML，CSS 自适应，无需重绘）
  var _rzTimer;
  window.addEventListener('resize', function () {
    clearTimeout(_rzTimer);
    _rzTimer = setTimeout(function () { draw(CURRENT_CAT); }, 150);
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

  // 共振度最高的事件名（按 slice 在 resonance_report.json 里查）
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

  /* 渲染指定分类的卡片网格。filterCat='all' 显示全部。
   * 区域小标题（region-head）随筛选自动出现/消失：被过滤掉的 region 自然不打印其头。 */
  function renderHub(filterCat) {
    var html = '';
    var lastRegion = null;
    visibleOrder(filterCat).forEach(function (sk) {
      var sc = scenes[sk];
      if (!sc) return;
      var m = sc.meta || {};
      // 分区小标题：注册表里 region 一变，这里自动分组（仅在本分类内可见时打印）
      if (m.region && m.region !== lastRegion) {
        lastRegion = m.region;
        html += '<div class="region-head"><b>' + (REGION_NAME[m.region] || m.region) + '</b>'
          + '<span>' + (REGION_NOTE[m.region] || '') + '</span></div>';
      }
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
      // 虚构 world 无真实地形、也无共振度数据——用「虚构 · 文字生成」标代替「共振 —」，
      // 并改提示为「关系图」，避免把关系图 world 误导向「地形」。
      var isFic = m.kind === 'fiction';
      var ficPill = '<span class="resonance-pill fiction">虚构 · 文字生成</span>';
      var pill = isFic ? ficPill : badge(bR);
      var hint = isFic
        ? '点击进入 → 关系图 · 史料 · 冲突 · 缺口'
        : '点击进入 → 史料 · 冲突 · 缺口 · 地形';
      var cat = sceneCat(m);

      html += '<a class="card card--' + (m.kind || 'civ') + (isFic ? ' fic' : '') + '" data-cat="' + cat + '" data-kind="' + (m.kind || 'civ') + '" href="' + (m.page || ('county.html?scene=' + sk)) + '">'
        + '<div class="card-kind' + (isFic ? ' fic' : '') + '">' + kindLabel(m) + '</div>'
        + '<div class="card-title">' + (m.dossier_label || sk) + '</div>'
        + '<div class="card-sub">' + (m.subtitle || '') + '</div>'
        + '<div class="card-stats">'
        +   '<div class="card-stat"><span>史料</span><b>' + srcN + '</b></div>'
        +   '<div class="card-stat"><span>地名 / 人物</span><b>' + placesN + ' / ' + personsN + '</b></div>'
        +   '<div class="card-stat"><span>断言</span><b>' + assertsN + '</b></div>'
        +   '<div class="card-stat"><span>冲突</span><b>' + conflictsN + '</b></div>'
        +   '<div class="card-stat"><span>缺口</span><b>' + gapsN + '</b></div>'
        +   '<div class="card-stat"><span>record / scholar / infer</span><b>'
              + recN + ' / ' + schN + ' / ' + infN + '</b></div>'
        + '</div>'
        + '<div class="card-extras">'
        +   pill + ' &nbsp;'
        +   bestLine
        +   avgLine
        +   '<small style="color:#918777">' + hint + '</small>'
        + '</div></a>';
    });
    if (!html) {
      html = '<div style="grid-column:1/-1;padding:24px;color:#7A6E5C;font-family:var(--serif)">'
        + '该分类下暂无切片。</div>';
    }
    grid.innerHTML = html;
  }

  // 初始渲染 + 暴露筛选接口给 index.html 的按钮
  renderHub(CURRENT_CAT);
  window.HUB = {
    setFilter: function (cat) {
      CURRENT_CAT = cat;
      renderHub(cat);
      draw(cat);
      try {
        document.querySelectorAll('.hub-filter button').forEach(function (b) {
          b.classList.toggle('on', b.getAttribute('data-cat') === cat);
        });
      } catch (e) {}
    }
  };
})();