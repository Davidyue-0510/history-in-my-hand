#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════════════════
   文明事件切片 · 验证探针 probe_civ_events.js

   验证（对应「黄河改道/蝗灾/天灾/工程/王朝/起义…」批量生成）：
     1) 新切片全程无 JS 异常（含 lizicheng 的「空格 id」改名回归）；
     2) 公元前日期正确格式化（huanghe=公元前602年 / great_wall=公元前214年）；
     3) 同地域导航器严格过滤（lizicheng 含黄巾起义、绝不含黄河改道/长平之战）；
     4) 有 routes 的切片渲染行车时间轴节点 + 图例（>=1 行）；
     5) 战役切片（changping）无回归（公元前260年 + 地域隔离仍在）。

   零依赖（Node>=20 内置 fetch/WebSocket）。浏览器缺失则 SKIP（exit 0）。
   ══════════════════════════════════════════════════════════════════════════ */
'use strict';
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = path.dirname(__dirname);
const SERVE = ROOT;
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
  if (!browser) { console.log('[SKIP] 未找到 Edge/Chrome，文明事件验证探针跳过'); process.exit(0); }

  const { srv, port: httpPort } = await startServer();
  const BASE = `http://127.0.0.1:${httpPort}`;
  const dbgPort = 9300 + Math.floor(Math.random() * 400);
  const udd = path.join(os.tmpdir(), 'world-probe-civ-' + process.pid);
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
    await sleep(3800);
  };
  await send('Page.enable'); await send('Runtime.enable');

  async function probeScene(scene) {
    console.log('\n-- county.html?scene=' + scene + ' --');
    await nav(BASE + '/demo/county.html?scene=' + encodeURIComponent(scene));
    const sib = await ev(`JSON.stringify({
      names: [...document.querySelectorAll('#siblingList .sib .rt-name')].map(t=>t.textContent.trim()),
      region: (document.querySelector('#siblingList .sib-region')||{}).textContent||'',
      badge: (document.getElementById('rtYearBadge')||{}).textContent||'',
      era: (document.getElementById('rtEra')||{}).textContent||'',
      legendRows: document.querySelectorAll('#battleLegend .lg-row').length,
      tlNodes: document.querySelectorAll('#rtTrack .tl-node').length,
      evItems: document.querySelectorAll('#eventsPane .ev').length
    })`);
    return sib ? JSON.parse(sib) : null;
  }

  const huanghe = await probeScene('huanghe');
  const great_wall = await probeScene('great_wall');
  const lizicheng = await probeScene('lizicheng');
  const huaxian = await probeScene('huaxian');
  const grand_canal = await probeScene('grand_canal');
  const changping = await probeScene('changping');

  // 1) 黄河改道：BC 602 + 有路线时间轴 + 图例
  ok(huanghe && /公元前602年/.test(huanghe.badge),
    'huanghe 公元前602年格式：#rtYearBadge = 「' + (huanghe && huanghe.badge) + '」');
  ok(huanghe && /公元前602年/.test(huanghe.era),
    'huanghe 时间轴标题含「公元前602年」：『' + (huanghe && huanghe.era) + '』');
  ok(huanghe && huanghe.tlNodes >= 1, 'huanghe 行车时间轴渲染 ' + (huanghe && huanghe.tlNodes) + ' 节点（4 条河道 polylines）');
  ok(huanghe && huanghe.legendRows >= 1, 'huanghe 图例渲染 ' + (huanghe && huanghe.legendRows) + ' 行');

  // 2) 长城：BC 214
  ok(great_wall && /公元前214年/.test(great_wall.badge),
    'great_wall 公元前214年格式：#rtYearBadge = 「' + (great_wall && great_wall.badge) + '」');
  ok(great_wall && great_wall.tlNodes >= 1, 'great_wall 时间轴节点 ' + (great_wall && great_wall.tlNodes));

  // 3) 李自成（空格 id 改名回归）：能加载 + 同地域导航过滤
  ok(lizicheng != null, 'lizicheng 切片成功加载（场景 id 空格改名修复，URL 路由正常）');
  ok(lizicheng && lizicheng.tlNodes >= 1, 'lizicheng 时间轴节点 ' + (lizicheng && lizicheng.tlNodes));
  ok(lizicheng && lizicheng.legendRows >= 2, 'lizicheng 战例图例渲染 ' + (lizicheng && lizicheng.legendRows) + ' 行（闯军/明军）');
  ok(lizicheng && lizicheng.names.includes('黄巾起义'), 'lizicheng（农民起义）含同地域 黄巾起义');
  ok(lizicheng && !lizicheng.names.includes('黄河改道'), 'lizicheng 绝不含异地域 黄河改道（天灾泄漏已堵）');
  ok(lizicheng && !lizicheng.names.includes('长平之战'), 'lizicheng 绝不含异地域 长平之战（战国泄漏已堵）');

  // 4) 华县地震 + 大运河：能加载
  ok(huaxian && huaxian.evItems >= 1, 'huaxian（1556 华县大地震·无 routes）事件面板渲染 ' + (huaxian && huaxian.evItems) + ' 条事件（非行车时间轴）');
  ok(grand_canal && grand_canal.tlNodes >= 1, 'grand_canal 时间轴节点 ' + (grand_canal && grand_canal.tlNodes));

  // 5) 战役回归
  ok(changping && /公元前260年/.test(changping.badge), 'changping 战役回归·公元前260年：『' + (changping && changping.badge) + '』');
  ok(changping && !changping.names.includes('萨尔浒之战'), 'changping（战国）不含 萨尔浒之战（无回归）');
  ok(changping && !changping.names.includes('赤壁之战'), 'changping 不含 赤壁之战（无回归）');

  // 6) 全程零 JS 异常
  ok(pageErrors.length === 0, pageErrors.length ? '页面异常：' + pageErrors.slice(0, 3).join(' | ') : '全程无未捕获 JS 异常');

  console.log('\n' + (FAIL === 0
    ? `文明事件验证探针 PASS（${PASS} 项全过）`
    : `文明事件验证探针 FAIL（${FAIL} 项失败 / 共 ${PASS + FAIL} 项）`));

  ws.close(); cleanup();
  process.exit(FAIL === 0 ? 0 : 1);
}
main().catch(e => { console.log('[FAIL] 文明事件验证探针异常：', e && e.message ? e.message : e); process.exit(1); });
