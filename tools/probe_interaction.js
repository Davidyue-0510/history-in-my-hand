#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════════════════
   交互闸门 · probe_interaction.js

   为什么需要它：lint / test / build 三道闸门只看数据与编译产物，看不见「浏览器里
   点得动点不动」。本项目就吃过一次大亏——`wrap.setPointerCapture()` 在 pointerdown
   阶段夺取指针捕获，Chromium 会把随后的 click **重定向到捕获元素**，导致地图内
   全部 click 监听器（地名下钻、圆点检视、行军路线、缺口标记、缩放按钮）长期失效，
   而三道闸门全绿、截图看着也完全正常。

   做法：起一个零依赖静态服务 + 无头 Edge/Chrome，通过 CDP 发**真实鼠标事件**，
   断言交互后的 DOM/URL 变化。比截图强，因为它验证的是行为而非像素。

   用法：
     node tools/probe_interaction.js              # 无浏览器时跳过（exit 0）
     node tools/probe_interaction.js --require    # 无浏览器视为失败（exit 1）
     WORLD_BROWSER=/path/to/chrome node tools/probe_interaction.js

   依赖：Node >= 20（内置 fetch / WebSocket），无 npm 包。
   ══════════════════════════════════════════════════════════════════════════ */
'use strict';
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn, execSync } = require('child_process');

const ROOT = path.dirname(__dirname);
const DEMO = path.join(ROOT, 'demo');
const REQUIRE_BROWSER = process.argv.includes('--require');
const sleep = ms => new Promise(r => setTimeout(r, ms));

let FAIL = 0, PASS = 0;
function ok(cond, msg) {
  if (cond) { PASS++; console.log('  PASS  ' + msg); }
  else { FAIL++; console.log('  FAIL  ' + msg); }
}

/* ───────── 浏览器定位 ───────── */
function findBrowser() {
  if (process.env.WORLD_BROWSER && fs.existsSync(process.env.WORLD_BROWSER)) return process.env.WORLD_BROWSER;
  const cands = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
  ];
  return cands.find(p => { try { return fs.existsSync(p); } catch (e) { return false; } }) || null;
}

/* ───────── 零依赖静态服务 ───────── */
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon',
};
function startServer() {
  return new Promise(resolve => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p === '/' || p === '') p = '/index.html';
      const file = path.join(DEMO, path.normalize(p).replace(/^(\.\.[\\/])+/, ''));
      fs.readFile(file, (err, buf) => {
        if (err) { res.writeHead(404); res.end('404'); return; }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
        res.end(buf);
      });
    });
    srv.listen(0, '127.0.0.1', () => resolve({ srv, port: srv.address().port }));
  });
}

/* ───────── 极简 CDP 客户端 ───────── */
async function attach(port) {
  for (let i = 0; i < 60; i++) {
    await sleep(400);
    try {
      const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      const pg = list.find(t => t.type === 'page' && t.webSocketDebuggerUrl);
      if (pg) return pg.webSocketDebuggerUrl;
    } catch (e) { /* 浏览器还没起来 */ }
  }
  return null;
}

async function main() {
  const browser = findBrowser();
  if (!browser) {
    const msg = '[SKIP] 未找到 Edge/Chrome，交互闸门跳过（设 WORLD_BROWSER 指定路径）';
    console.log(msg);
    process.exit(REQUIRE_BROWSER ? 1 : 0);
  }

  const { srv, port: httpPort } = await startServer();
  const BASE = `http://127.0.0.1:${httpPort}`;
  const dbgPort = 9200 + Math.floor(Math.random() * 500);
  const udd = path.join(os.tmpdir(), 'world-probe-' + process.pid);

  const child = spawn(browser, ['--headless=new', '--disable-gpu', '--no-first-run',
    '--no-default-browser-check', '--disable-extensions', '--mute-audio',
    '--remote-debugging-port=' + dbgPort, '--user-data-dir=' + udd,
    '--window-size=1400,900', 'about:blank'], { stdio: 'ignore' });

  const cleanup = () => {
    try { child.kill(); } catch (e) {}
    try { srv.close(); } catch (e) {}
    try { fs.rmSync(udd, { recursive: true, force: true }); } catch (e) {}
  };

  const wsUrl = await attach(dbgPort);
  if (!wsUrl) { console.log('[FAIL] 无法连接浏览器 CDP'); cleanup(); process.exit(1); }

  const ws = new WebSocket(wsUrl);
  let id = 0; const pending = new Map(); const pageErrors = [];
  ws.addEventListener('message', e => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
    else if (m.method === 'Runtime.exceptionThrown') {
      const d = m.params.exceptionDetails;
      pageErrors.push((d.exception && d.exception.description) || d.text);
    }
  });
  await new Promise(r => ws.addEventListener('open', r));

  const send = (method, params = {}) => new Promise(res => {
    const mid = ++id; pending.set(mid, res);
    ws.send(JSON.stringify({ id: mid, method, params }));
  });
  const ev = async expr => {
    const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    return r.result && r.result.result ? r.result.result.value : null;
  };
  const nav = async url => { await send('Page.navigate', { url }); await sleep(2600); };
  const mouse = (type, x, y, buttons) => send('Input.dispatchMouseEvent',
    { type, x, y, button: 'left', buttons, clickCount: type === 'mouseMoved' ? 0 : 1 });
  const click = async (x, y) => { await mouse('mousePressed', x, y, 1); await sleep(60); await mouse('mouseReleased', x, y, 0); await sleep(700); };
  const rectOf = async sel => {
    const j = await ev(`(()=>{const e=document.querySelector(${JSON.stringify(sel)});if(!e)return null;
      const r=e.getBoundingClientRect();
      return JSON.stringify({cx:Math.round(r.x+r.width/2),cy:Math.round(r.y+r.height/2),w:Math.round(r.width),h:Math.round(r.height),x:Math.round(r.x),y:Math.round(r.y)});})()`);
    return j ? JSON.parse(j) : null;
  };
  const panelLen = () => ev(`(document.getElementById('inspect')||{innerHTML:''}).innerHTML.length`);
  /* 挑一个「中心点真的能命中自己」的元素——直接取第一个往往被标签/图例盖住，
     那样点不中不是产品 bug 而是探针 bug，会制造假红灯。 */
  const pickHittable = async sel => {
    const j = await ev(`(()=>{for(const e of document.querySelectorAll(${JSON.stringify(sel)})){
      const r=e.getBoundingClientRect(); if(!r.width||!r.height) continue;
      const cx=Math.round(r.x+r.width/2), cy=Math.round(r.y+r.height/2);
      if(cx<1||cy<1) continue;
      if(document.elementFromPoint(cx,cy)===e) return JSON.stringify({cx,cy});
    } return null;})()`);
    return j ? JSON.parse(j) : null;
  };

  await send('Page.enable'); await send('Runtime.enable');

  /* ═════════ 萨尔浒战役视图 ═════════ */
  console.log('\n-- 萨尔浒战役视图 sarhu.html --');
  await nav(BASE + '/sarhu.html');

  const links = JSON.parse(await ev(`JSON.stringify([...document.querySelectorAll('.place-label.link')]
    .map(t=>{const r=t.getBoundingClientRect();
      return {n:(t.firstChild&&t.firstChild.nodeValue)||'',cx:Math.round(r.x+r.width/2),cy:Math.round(r.y+r.height/2)};}))`));
  ok(links.length > 0, `战役地图上有可下钻县名 ${links.length} 个：${links.map(l => l.n).join(' ')}`);
  ok(await ev(`document.querySelectorAll('.label-hit').length`) === links.length,
    '每个可下钻县名都有扩大命中区 .label-hit');

  if (links.length) {
    await click(links[0].cx, links[0].cy);
    const href = await ev('location.href');
    ok(/county\.html\?scene=/.test(href), `点县名「${links[0].n}」→ 导航到 ${href.split('/').pop()}`);
  }

  await nav(BASE + '/sarhu.html');
  const dot = await pickHittable('circle.node-hit');
  if (dot) {
    const before = await panelLen();
    await click(dot.cx, dot.cy);
    ok((await panelLen()) !== before, '点地名圆点 → 战役内检视面板更新（selectPlace 生效）');
  } else ok(false, '战役地图未找到 circle.node-hit');

  // 拖拽平移：坐标必须由容器实际矩形算出
  await nav(BASE + '/sarhu.html');
  const mw = await rectOf('#mapWrap');
  if (mw) {
    const sx = mw.x + Math.round(mw.w * 0.3), sy = mw.y + Math.round(mw.h * 0.7);
    const vb0 = await ev(`document.getElementById('map').getAttribute('viewBox')`);
    await mouse('mousePressed', sx, sy, 1); await sleep(40);
    for (let i = 1; i <= 6; i++) { await mouse('mouseMoved', sx + i * 12, sy - i * 8, 1); await sleep(40); }
    await mouse('mouseReleased', sx + 72, sy - 48, 0); await sleep(600);
    ok((await ev(`document.getElementById('map').getAttribute('viewBox')`)) !== vb0, '拖拽仍能平移地图');
    ok(!/county\.html/.test(await ev('location.href')), '拖拽结束不会误触发下钻导航');
  } else ok(false, '未找到 #mapWrap');

  await nav(BASE + '/sarhu.html');
  const zin = await rectOf('.map-tools button[data-zoom="in"]');
  if (zin) {
    const z0 = await ev(`document.getElementById('zoomBadge').textContent`);
    await click(zin.cx, zin.cy);
    ok((await ev(`document.getElementById('zoomBadge').textContent`)) !== z0, '地图缩放按钮可点');
  } else ok(false, '未找到缩放按钮');

  /* ═════════ 县级切片（真实地理） ═════════ */
  console.log('\n-- 县级切片 county.html?scene=shenyang --');
  await nav(BASE + '/county.html?scene=shenyang');
  const cdot = await pickHittable('circle.node-hit');
  if (cdot) {
    const b = await panelLen();
    await click(cdot.cx, cdot.cy);
    ok((await panelLen()) !== b, '点地点 → 地点介绍面板更新');
  } else ok(false, '县级切片未找到 circle.node-hit');

  /* ═════════ 虚构 world（关系图） ═════════ */
  console.log('\n-- 虚构 world county.html?scene=novel_fandao --');
  await nav(BASE + '/county.html?scene=novel_fandao');
  const fdot = await pickHittable('circle.node-hit');
  if (fdot) {
    const b = await panelLen();
    await click(fdot.cx, fdot.cy);
    ok((await panelLen()) !== b, '点关系图节点 → 人物/地点面板更新');
  } else ok(false, '虚构 world 未找到 circle.node-hit');

  /* ═════════ 枢纽 ═════════ */
  console.log('\n-- 枢纽 index.html --');
  await nav(BASE + '/index.html');
  ok((await ev(`document.querySelectorAll('.card').length`)) > 0, '枢纽渲染出切片卡片');
  ok((await ev(`document.querySelectorAll('.card.fic').length`)) === 9, '枢纽有 9 张虚构 world 紫标卡片');

  console.log('\n-- 页面级 JS 异常 --');
  ok(pageErrors.length === 0, pageErrors.length ? '页面抛出异常：' + pageErrors.slice(0, 3).join(' | ') : '全程无未捕获异常');

  console.log('\n' + (FAIL === 0
    ? `交互闸门 PASS（${PASS} 项全过）`
    : `交互闸门 FAIL（${FAIL} 项失败 / 共 ${PASS + FAIL} 项）`));

  ws.close(); cleanup();
  process.exit(FAIL === 0 ? 0 : 1);
}

main().catch(e => { console.log('[FAIL] 交互闸门异常：', e && e.message ? e.message : e); process.exit(1); });
