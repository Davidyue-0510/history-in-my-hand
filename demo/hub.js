/* hub 主枢纽（v0.3）—— 迷你地形预览 + 场景卡片状态读取
 *
 * 复用 kaiyuan.js 的 RAMP / hillshade 思路，但全屏缩放到 ~600×220 缩略图。
 * 共振度从 data.js 里硬编码对应关系：
 *   scenes.sarhu  → event:sarhu     0.333
 *   scenes.kaiyuan → event:kaifa    0.600
 * 这两个值由 tools/resonance.py 算出，写死在卡片模板里；与 data.js 解耦。
 */
(function () {
  'use strict';
  var SD = window.SANDBOX_DATA;
  var TG = SD && SD.terrain;
  var cv = document.getElementById('hubTerrain');
  var rangeEl = document.getElementById('hubTerrainRange');

  if (!TG || !cv) return;

  var dpr = window.devicePixelRatio || 1;
  var rect = cv.getBoundingClientRect();
  var W = Math.max(280, rect.width), H = 220;
  cv.width = W * dpr; cv.height = H * dpr;
  cv.style.height = H + 'px';

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
  // 把 lat/lon 范围映射到画布。粗略线性映射即可。
  var lonMax = TG.lon0 + (nx - 1) * TG.step;
  var latMax = TG.lat0 + (ny - 1) * TG.step;
  function gx(lo) { return (lo - TG.lon0) / (lonMax - TG.lon0) * W; }
  function gy(la) { return (latMax - la) / (latMax - TG.lat0) * H; }

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = '#EFECE2'; ctx.fillRect(0, 0, W, H);

  // 网格抽样步长（取一个较低分辨率，避免 600×400 内的逐像素遍历）
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

  // 叠几个切片中心点（萨尔浒/开原），把"两片同框"画出来
  var scenes = SD.scenes || {};
  function drawPin(id, name) {
    var p = (scenes.kaiyuan && scenes.kaiyuan.places || []).concat(
             scenes.sarhu && scenes.sarhu.places || []).filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    var px = gx(p.lon), py = gy(p.lat);
    ctx.beginPath(); ctx.arc(px, py, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = '#FBF9F3'; ctx.fill();
    ctx.lineWidth = 1.4; ctx.strokeStyle = '#2A2521'; ctx.stroke();
    ctx.font = '11px var(--mono, monospace)';
    ctx.fillStyle = '#2A2521';
    ctx.fillText(name, px + 8, py + 4);
  }
  drawPin('kaiyuan_cheng', '开原');
  drawPin('sarhu', '萨尔浒');
  drawPin('hetuala', '赫图阿拉');

  if (rangeEl) rangeEl.textContent = (TG.min == null ? '—' : TG.min) + '–' +
                                     (TG.max == null ? '—' : TG.max) + ' m';
})();