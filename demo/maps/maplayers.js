/* 小菜狗的文明图景 · 多层地图叠加层（v0.123 新增，北极星②「同一区域多层地图」）

 * 把 data/maps/registry.json（经 build 注入 window.SANDBOX_MAPS）里、当前区域的非
 * terrain 地图层（古地图 ancient / 政区 political / 卫星 satellite / 示意 schematic）
 * 作为矢量叠加层渲染到地图 SVG 上。
 *
 * 设计要点（对齐既有叠加层架构，但用更低风险的方式）：
 *   - 宿主地图 #map 是 SVG，pan/zoom 靠修改 SVG viewBox 实现。因此本层把要素画成
 *     SVG <g> 挂进 #map，天然随 viewBox 透视变换——零侵入 applyView，无需复刻
 *     canvas 的 setTransform 数学（与 ChgisLayer 同为「叠加层」但数据量极小，SVG 够用）。
 *   - 投影复用宿主 px/py（lon/lat → 0..W/0..H 用户坐标，与地形/政区同一基准）。
 *   - 图层清单由 county.js 在 setup 时传入（region + SANDBOX_MAPS）；本模块自建
 *     #mapsCtl 勾选面板，勾选即渲染、取消即清除，多图层可叠加。
 *   - 诚实边界：honest:false 的层在图例明确标「示例/非真实古地图」，绝不把示意矢量
 *     伪装成历史制图。pointer-events:none，绝不拦截地图点击。
 */
(function () {
  'use strict';

  var svg = null, px = null, py = null, region = 'liaodong', maps = { regions: {} };
  var group = null, ready = false, active = {};

  function SVGNS() { return 'http://www.w3.org/2000/svg'; }

  function setup(o) {
    svg = o.svg; px = o.px; py = o.py;
    region = o.region || 'liaodong';
    maps = o.maps || { regions: {} };
    if (!svg || !px || !py) { console.warn('[MapLayers] 缺 svg/px/py，跳过'); return; }
    group = document.createElementNS(SVGNS(), 'g');
    group.setAttribute('id', 'mapLayersGroup');
    group.style.pointerEvents = 'none';
    // 插到 svg 末尾（地形之上、地名标签通常也在末尾，少量示例层无妨；pointer-events:none 不挡点击）
    svg.appendChild(group);
    ready = true;
    buildPanel();
  }

  function layersForRegion() {
    var rs = maps.regions || {};
    return rs[region] || [];
  }

  function buildPanel() {
    var box = document.getElementById('mapsCtl');
    if (!box) return;
    box.innerHTML = '';
    var layers = layersForRegion().filter(function (l) { return l.type !== 'terrain'; });
    if (!layers.length) {
      var p = document.createElement('div');
      p.className = 'hint';
      p.textContent = '本区域暂无额外地图层（仅地形）。接口已预留，新增层见 data/maps/registry.json。';
      box.appendChild(p);
      return;
    }
    layers.forEach(function (l) {
      var lab = document.createElement('label');
      lab.className = 'lay-list';
      var cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.dataset.layerId = l.id;
      cb.addEventListener('change', function () {
        if (cb.checked) active[l.id] = l; else delete active[l.id];
        repaint();
      });
      lab.appendChild(cb);
      var txt = document.createTextNode(' ' + (l.label || l.id));
      lab.appendChild(txt);
      if (l.honest === false) {
        var tag = document.createElement('span');
        tag.className = 'hint';
        tag.style.marginLeft = '6px';
        tag.textContent = '（示例/非真实古地图）';
        lab.appendChild(tag);
      }
      box.appendChild(lab);
    });
  }

  function clearGroup() { if (group) group.innerHTML = ''; }

  function renderLayer(l) {
    (l.features || []).forEach(function (f) {
      var g = f.geometry || {};
      if (f.type === 'Point' || g.type === 'Point') {
        var c = g.coordinates;
        var x = px(c[0]), y = py(c[1]);
        var circle = document.createElementNS(SVGNS(), 'circle');
        circle.setAttribute('cx', x); circle.setAttribute('cy', y);
        circle.setAttribute('r', (l.r || 5));
        circle.setAttribute('fill', (f.properties && f.properties.color) || l.color || '#b5651d');
        circle.setAttribute('fill-opacity', '0.85');
        circle.setAttribute('stroke', '#fff'); circle.setAttribute('stroke-width', '1.2');
        group.appendChild(circle);
        var label = f.properties && f.properties.label;
        if (label) {
          var t = document.createElementNS(SVGNS(), 'text');
          t.setAttribute('x', x + 8); t.setAttribute('y', y + 4);
          t.setAttribute('font-size', '13'); t.setAttribute('fill', '#5a3a12');
          t.setAttribute('font-weight', '600');
          t.textContent = label;
          group.appendChild(t);
        }
      } else if (g.type === 'LineString') {
        var pts = g.coordinates.map(function (c) {
          return px(c[0]).toFixed(1) + ',' + py(c[1]).toFixed(1);
        }).join(' ');
        var pl = document.createElementNS(SVGNS(), 'polyline');
        pl.setAttribute('points', pts);
        pl.setAttribute('fill', 'none');
        pl.setAttribute('stroke', l.color || '#b5651d');
        pl.setAttribute('stroke-width', (l.width || 2));
        pl.setAttribute('stroke-dasharray', '6 4');
        pl.setAttribute('stroke-opacity', '0.9');
        group.appendChild(pl);
      }
    });
  }

  function repaint() {
    if (!ready || !group) return;
    clearGroup();
    Object.keys(active).forEach(function (id) { renderLayer(active[id]); });
  }

  window.MapLayers = {
    setup: setup, repaint: repaint, clear: clearGroup,
    isReady: function () { return ready; }
  };
})();
