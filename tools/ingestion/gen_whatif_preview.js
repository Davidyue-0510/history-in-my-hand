#!/usr/bin/env node
// 复刻 demo/whatif.html 的「真实底图」投影，渲染 terrain+borders+nodes 组合 SVG。
// 作为 CDP 截图不可用时的视觉证据，证明「a」：疆域底图已换为真实省界/地形。
// 单一真值：与 whatif.html 共用 demo/terrain/china_coarse.js 与 china_basemap.js。
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
global.window = {};
function loadJS(p){ (0, eval)(fs.readFileSync(p, 'utf-8')); }
loadJS(path.join(ROOT, 'demo/terrain/china_coarse.js'));
loadJS(path.join(ROOT, 'demo/terrain/china_basemap.js'));
const TG = global.window.SANDBOX_TERRAIN['china_coarse'];
const BM = global.window.SANDBOX_BASEMAP['china'];

const W = 720, H = 400, padL = 44, padR = 18, padT = 16, padB = 30;
const LON0 = 73, LON1 = 135, LAT0 = 18, LAT1 = 54;
const px = lon => padL + (lon - LON0) / (LON1 - LON0) * (W - padL - padR);
const py = lat => padT + (LAT1 - lat) / (LAT1 - LAT0) * (H - padT - padB);

function hyps(e, emax, sh){
  const t = Math.min(1, e / emax);
  let r, g, b;
  if (t < 0.12){ r=122; g=170; b=120; }
  else if (t < 0.3){ r=205; g=200; b=140; }
  else if (t < 0.6){ r=186; g=152; b=110; }
  else if (t < 0.85){ r=150; g=118; b=86; }
  else { r=236; g=236; b=236; }
  const k = 0.55 + 0.45 * sh;
  return `rgb(${Math.round(r*k)},${Math.round(g*k)},${Math.round(b*k)})`;
}
function shade(E, nx, ny, j, i){
  const il = Math.max(0, i-1), ir = Math.min(nx-1, i+1), ju = Math.max(0, j-1), jd = Math.min(ny-1, j+1);
  const dzdx = E[j*nx+ir] - E[j*nx+il];
  const dzdy = E[jd*nx+i] - E[ju*nx+i];
  const nzv = 60, nxv = -dzdx, nyv = -dzdy;
  const ll = Math.sqrt(nxv*nxv + nyv*nyv + nzv*nzv);
  return Math.max(0, (nxv*-1 + nyv*-1 + nzv*1) / ll);
}
function geom(g, style){
  if (!g) return '';
  const t = g.type, c = g.coordinates;
  if (t === 'Polygon') return c.map(r => `<polygon points="${r.map(pt => px(pt[0]).toFixed(1)+','+py(pt[1]).toFixed(1)).join(' ')}" style="${style}"/>`).join('');
  if (t === 'MultiPolygon') return c.map(poly => poly.map(r => `<polygon points="${r.map(pt => px(pt[0]).toFixed(1)+','+py(pt[1]).toFixed(1)).join(' ')}" style="${style}"/>`).join('')).join('');
  if (t === 'LineString') return `<polyline points="${c.map(pt => px(pt[0]).toFixed(1)+','+py(pt[1]).toFixed(1)).join(' ')}" style="${style}"/>`;
  if (t === 'MultiLineString') return c.map(line => `<polyline points="${line.map(pt => px(pt[0]).toFixed(1)+','+py(pt[1]).toFixed(1)).join(' ')}" style="${style}"/>`).join('');
  return '';
}

function main(){
  const scene = process.argv[2] || 'song_wanganshi_llm';
  const S = parseInt(process.argv[3] || '3', 10); // 采样步长（控 SVG 体积）
  const nx = TG.nx, ny = TG.ny, E = TG.elev;
  let emax = 0; for (let k = 0; k < E.length; k++) if (E[k] > emax) emax = E[k];
  let terrain = '';
  for (let j = 0; j < ny; j += S){
    for (let i = 0; i < nx; i += S){
      const e = E[j*nx+i]; if (e <= 0) continue;
      const lon = TG.lon0 + i*TG.step, lat = TG.lat0 + j*TG.step;
      const sh = shade(E, nx, ny, j, i);
      const col = hyps(e, emax, sh);
      const x = px(lon), yTop = py(lat + TG.step*S), x2 = px(lon + TG.step*S), yBot = py(lat);
      terrain += `<rect x="${x.toFixed(1)}" y="${yTop.toFixed(1)}" width="${(x2-x).toFixed(1)}" height="${(yBot-yTop).toFixed(1)}" fill="${col}"/>`;
    }
  }
  let basemap = '';
  (BM.land||[]).forEach(f => basemap += geom(f.g, 'fill:#ece3cc;fill-opacity:.30;'));
  (BM.lakes||[]).forEach(f => basemap += geom(f.g, 'fill:#bfe0f0;fill-opacity:.55;'));
  (BM.rivers||[]).forEach(f => basemap += geom(f.g, 'fill:none;stroke:#7fa7c4;stroke-width:1.2;stroke-opacity:.85;'));
  (BM.admin1||[]).forEach(f => basemap += geom(f.g, 'fill:none;stroke:#9a8a63;stroke-width:.7;'));
  (BM.coastline||[]).forEach(f => basemap += geom(f.g, 'fill:none;stroke:#6a5f4f;stroke-width:1.3;'));

  const P = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', scene, 'places.json'), 'utf-8'));
  const ps = P.places || P;
  const coords = ps.filter(p => p.lon != null && p.lat != null);
  let years = [];
  const hp = path.join(ROOT, 'data', scene, 'state_hist_whatif.json');
  if (fs.existsSync(hp)){ years = JSON.parse(fs.readFileSync(hp, 'utf-8')).map(s => s.year); }
  const y0 = years[0] || 1000, y1 = years[years.length-1] || 1100;
  const n = coords.length, stepv = n > 1 ? Math.max(1, Math.floor((y1-y0)/(n-1))) : 0;
  let nodes = '';
  coords.forEach((p, idx) => {
    const x = px(p.lon), y = py(p.lat);
    const adopt = idx === 0 ? y0 : Math.min(y1, y0 + idx*stepv);
    nodes += `<g><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="9" fill="#c9bfa8" fill-opacity="0.92" stroke="#332d27" stroke-width="1"/>`;
    nodes += `<text x="${(x+11).toFixed(1)}" y="${(y+3).toFixed(1)}" font-size="12" fill="#332d27">${p.name||p.id}</text>`;
    nodes += `<text x="${(x+11).toFixed(1)}" y="${(y+14).toFixed(1)}" font-size="9" fill="#9a9286">${adopt} 激活</text></g>`;
  });

  let grid = '';
  [80,90,100,110,120,130].forEach(lo => { const x = px(lo);
    grid += `<line x1="${x.toFixed(1)}" y1="${padT}" x2="${x.toFixed(1)}" y2="${H-padB}" stroke="#e3dccb"/>`;
    grid += `<text x="${x.toFixed(1)}" y="${H-padB+12}" font-size="9" fill="#9a9286" text-anchor="middle">${lo}°E</text>`; });
  [20,30,40,50].forEach(la => { const y = py(la);
    grid += `<line x1="${padL}" y1="${y.toFixed(1)}" x2="${W-padR}" y2="${y.toFixed(1)}" stroke="#e3dccb"/>`;
    grid += `<text x="${padL-4}" y="${(y+3).toFixed(1)}" font-size="9" fill="#9a9286" text-anchor="end">${la}°N</text>`; });
  const frame = `<rect x="${padL}" y="${padT}" width="${W-padL-padR}" height="${H-padT-padB}" fill="none" stroke="#c9bfa8"/>`;
  // 顺序：底图(陆地/湖/河/省界/海岸) → 地形(覆盖陆地) → 经纬网 → 框 → 节点
  const ordered = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${basemap}${terrain}${grid}${frame}${nodes}</svg>`;
  const out = path.join(ROOT, '.tmp', `${scene}_realmap_s${S}.svg`);
  fs.writeFileSync(out, ordered);
  console.log('SAVED', out, 'nodes', coords.length, 'adm', (BM.admin1||[]).length);
}
main();
