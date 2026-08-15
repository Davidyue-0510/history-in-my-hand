#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════════════════
   著名战役切片 · 验证探针 probe_battles.js

   验证三件事（对应用户两条要求）：
     1) 浏览器里加载新战役切片（chibi/guandu/changping）全程无 JS 异常；
     2) 左侧「邻接切片」严格只显示同地域（chibi 必须含 官渡、绝不含 萨尔浒/长平）；
     3) 公元前日期正确格式化（长平 #rtYearBadge 显示「公元前260年」）。

   同时顺带确认：战例图例渲染（>=2 行）、行军时间轴节点（>=2 个）。

   零依赖（Node>=20 内置 fetch/WebSocket）。浏览器缺失则 SKIP（exit 0）。
   ══════════════════════════════════════════════════════════════════════════ */
'use strict';
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = path.dirname(__dirname);
const DEMO = path.join(ROOT, 'demo');
const SERVE = ROOT; // 必须从项目根提供，battle_layer 用 '../data/' 取战役切片
const sleep = ms => new Promise(r => setTimeout(r, ms));

let FAIL = 0, PASS = 0;
function ok(cond, msg) {
  if (cond) { PASS++; console.log('  PASS  ' + msg); }
  else { FAIL++; console.log('  FAIL  ' + msg); }
}

function findBrowser() {
  const cands = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/usr/bin/google-chrome', '/usr/bin/chromium',
  ];
  return cands.find(p => { try { return fs.existsSync(p); } catch (e) { return false; } }) || null;
}

function startServer() {
  return new Promise(resolve => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p === '/' || p === '') p = '/demo/index.html';
      const file = path.join(SERVE, path.normalize(p).replace(/^(\.\.[\\/])+/, ''));
      fs.readFile(file, (err, buf) => {
        if (err) { res.writeHead(404); res.end('404'); return; }
        res.writeHead(200, { 'Content-Type': (path.extname(file).toLowerCase() === '.html' ? 'text/html' : 'text/javascript') + '; charset=utf-8', 'Cache-Control': 'no-store' });
        res.end(buf);
      });
    });
    srv.listen(0, '127.0.0.1', () => resolve({ srv, port: srv.address().port }));
  });
}

async function attach(port) {
  for (let i = 0; i < 60; i++) {
    await sleep(400);
    try {
      const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      const pg = list.find(t => t.type === 'page' && t.webSocketDebuggerUrl);
      if (pg) return pg.webSocketDebuggerUrl;
    } catch (e) {}
  }
  return null;
}

async function main() {
  const browser = findBrowser();
  if (!browser) { console.log('[SKIP] 未找到 Edge/Chrome，战役验证探针跳过'); process.exit(0); }

  const { srv, port: httpPort } = await startServer();
  const BASE = `http://127.0.0.1:${httpPort}`;
  const dbgPort = 9300 + Math.floor(Math.random() * 400);
  const udd = path.join(os.tmpdir(), 'world-probe-battles-' + process.pid);
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
  const nav = async url => {
    pageErrors.length = 0;
    await send('Page.navigate', { url });
    await sleep(3800); // 等 battle_layer 异步 fetch 完
  };
  await send('Page.enable'); await send('Runtime.enable');

  async function probeScene(scene) {
    console.log('\n-- county.html?scene=' + scene + ' --');
    await nav(BASE + '/demo/county.html?scene=' + scene);
    const sib = await ev(`JSON.stringify({
      names: [...document.querySelectorAll('#siblingList .sib .rt-name')].map(t=>t.textContent.trim()),
      region: (document.querySelector('#siblingList .sib-region')||{}).textContent||'',
      badge: (document.getElementById('rtYearBadge')||{}).textContent||'',
      era: (document.getElementById('rtEra')||{}).textContent||'',
      legendRows: document.querySelectorAll('#battleLegend .lg-row').length,
      tlNodes: document.querySelectorAll('#rtTrack .tl-node').length
    })`);
    return sib ? JSON.parse(sib) : null;
  }

  const chibi = await probeScene('chibi');
  const guandu = await probeScene('guandu');
  const changping = await probeScene('changping');

  ok(chibi && chibi.names.length > 0, 'chibi 邻接切片列表非空（' + (chibi ? chibi.names.length : 0) + ' 项）');
  ok(chibi && chibi.names.includes('官渡之战'), 'chibi（三国）含同地域 官渡之战');
  ok(chibi && !chibi.names.includes('萨尔浒之战'), 'chibi 绝不含异地域 萨尔浒之战（辽东泄漏已堵）');
  ok(chibi && !chibi.names.includes('长平之战'), 'chibi 绝不含异地域 长平之战（战国泄漏已堵）');
  ok(chibi && /三国/.test(chibi.region), 'chibi 邻接区标题带地域标记：「' + (chibi && chibi.region) + '」');

  ok(guandu && guandu.names.includes('赤壁之战'), 'guandu（三国）含同地域 赤壁之战');
  ok(guandu && !guandu.names.includes('萨尔浒之战'), 'guandu 绝不含 萨尔浒之战');

  ok(changping && /公元前260年/.test(changping.badge), 'changping 公元前日期格式化：#rtYearBadge = 「' + (changping && changping.badge) + '」');
  ok(changping && /公元前260年/.test(changping.era), 'changping 时间轴标题含「公元前260年」：『' + (changping && changping.era) + '』');
  ok(changping && !changping.names.includes('萨尔浒之战'), 'changping（战国）绝不含 萨尔浒之战');
  ok(changping && !changping.names.includes('赤壁之战'), 'changping 绝不含 赤壁之战（三国泄漏已堵）');
  ok(changping && changping.names.some(n => ['桂陵之战','马陵之战','城濮之战','柏举之战'].includes(n)),
    'changping 含同地域战国战役（' + (changping ? changping.names.join('/') : '') + '）');

  ok(chibi && chibi.legendRows >= 2, 'chibi 战例图例渲染 ' + (chibi && chibi.legendRows) + ' 行');
  ok(guandu && guandu.legendRows >= 2, 'guandu 战例图例渲染 ' + (guandu && guandu.legendRows) + ' 行');
  ok(changping && changping.legendRows >= 2, 'changping 战例图例渲染 ' + (changping && changping.legendRows) + ' 行');
  ok(chibi && chibi.tlNodes >= 2, 'chibi 行军时间轴 ' + (chibi && chibi.tlNodes) + ' 节点');
  ok(changping && changping.tlNodes >= 2, 'changping 行军时间轴 ' + (changping && changping.tlNodes) + ' 节点（含公元前日期）');

  ok(pageErrors.length === 0, pageErrors.length ? '页面异常：' + pageErrors.slice(0, 3).join(' | ') : '全程无未捕获 JS 异常');

  console.log('\n' + (FAIL === 0
    ? `战役验证探针 PASS（${PASS} 项全过）`
    : `战役验证探针 FAIL（${FAIL} 项失败 / 共 ${PASS + FAIL} 项）`));

  ws.close(); cleanup();
  process.exit(FAIL === 0 ? 0 : 1);
}
main().catch(e => { console.log('[FAIL] 战役验证探针异常：', e && e.message ? e.message : e); process.exit(1); });
