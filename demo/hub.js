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
  var lonMax = TG.lon0 + (nx - 1) * TG.step;
  var latMax = TG.lat0 + (ny - 1) * TG.step;
  function gx(lo) { return (lo - TG.lon0) / (lonMax - TG.lon0) * W; }
  function gy(la) { return (latMax - la) / (latMax - TG.lat0) * H; }

  // 切片中心点 pin 用到的数据（draw 内外都要引用）
  var scenes = SD.scenes || {};
  var SCENE_KIND = { sarhu: '事件切片 · battle slice',
                     kaiyuan: '县级 LOD · county slice',
                     tieling: '县级 LOD · county slice',
                     liaoyang: '县级 LOD · county slice' };

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
        var pw = (TG.step / (lonMax - TG.lon0)) * W * (stepX + 1);
        var ph = (TG.step / (latMax - TG.lat0)) * H * (stepY + 1);
        ctx.fillStyle = 'rgb(' + Math.round(col[0] * f) + ',' +
                                Math.round(col[1] * f) + ',' +
                                Math.round(col[2] * f) + ')';
        ctx.fillRect(px, py, pw + 1, ph + 1);
      }
    }

    // 自动 pin 所有切片中心点
    Object.keys(scenes).forEach(function (sk) {
      var sc = scenes[sk];
      var m = (sc.meta || {});
      var pp = m.primary_place;
      var place = (sc.places || []).filter(function (x) { return x.id === pp; })[0];
      if (!place) return;
      var px = gx(place.lon), py = gy(place.lat);
      ctx.beginPath(); ctx.arc(px, py, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = '#FBF9F3'; ctx.fill();
      ctx.lineWidth = 1.4; ctx.strokeStyle = '#2A2521'; ctx.stroke();
      ctx.font = '11px monospace';
      ctx.fillStyle = '#2A2521';
      ctx.fillText(m.dossier_label || sk, px + 8, py + 4);
    });

    if (rangeEl) rangeEl.textContent = (TG.min == null ? '—' : TG.min) + '–' +
                                       (TG.max == null ? '—' : TG.max) + ' m';
  }

  draw();
  // 窗口缩放时按节流重绘地形（卡片是 HTML，CSS 自适应，无需重绘）
  var _rzTimer;
  window.addEventListener('resize', function () {
    clearTimeout(_rzTimer);
    _rzTimer = setTimeout(draw, 150);
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

  var html = '';
  Object.keys(scenes).forEach(function (sk) {
    var sc = scenes[sk];
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

    html += '<a class="card" href="' + sk + '.html">'
      + '<div class="card-kind">' + (SCENE_KIND[sk] || '切片 · slice') + '</div>'
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
      +   badge(bR) + ' &nbsp;'
      +   bestLine
      +   avgLine
      +   '<small style="color:#918777">点击进入 → 史料 · 冲突 · 缺口 · 地形</small>'
      + '</div></a>';
  });
  grid.innerHTML = html;
})();