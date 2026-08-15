#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════════════════
   hub 筛选 + 文明事件扩展切片 · 验证探针 probe_hub_civ.js

   1) hub 首页「文明事件」分类按钮：点选后 #hubGrid 只剩 data-cat="civ" 卡片，
      battle/county/fiction 全隐藏；再点「全部」恢复。
   2) 新切片抽样：BC 格式化(wuwang=公元前1048 / zhangqian=公元前138)、
      frontier 路线图例(zhangqian 丝绸之路)、无 routes 的事件面板(dong_han_yi/振)、
      含 a/b 的融合(chanyuan 宋辽)、工程(sui_daxing)、零 JS 异常。
   3) 回归：huanghe(公元前602) / changping(公元前260) 仍正常。

   零依赖（Node>=20）。浏览器缺失则 SKIP（exit 0）。
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
  if (!browser) { console.log('[SKIP] 未找到 Edge/Chrome，hub/civ 探针跳过'); process.exit(0); }

  const { srv, port: httpPort } = await startServer();
  const BASE = `http://127.0.0.1:${httpPort}`;
  const dbgPort = 9300 + Math.floor(Math.random() * 400);
  const udd = path.join(os.tmpdir(), 'world-probe-hub-' + process.pid);
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
  const nav = async url => { pageErrors.length = 0; await send('Page.navigate', { url }); await sleep(4000); };
  await send('Page.enable'); await send('Runtime.enable');

  async function probeScene(scene) {
    console.log('\n-- county.html?scene=' + scene + ' --');
    await nav(BASE + '/demo/county.html?scene=' + encodeURIComponent(scene));
    let r = await ev(`JSON.stringify({
      badge: (document.getElementById('rtYearBadge')||{}).textContent||'',
      era: (document.getElementById('rtEra')||{}).textContent||'',
      legendRows: document.querySelectorAll('#battleLegend .lg-row').length,
      tlNodes: document.querySelectorAll('#rtTrack .tl-node').length,
      evItems: document.querySelectorAll('#eventsPane .ev').length,
      legendText: (document.getElementById('battleLegend')||{}).textContent||''
    })`);
    if (!r) { // 罕见竞态：页面尚未完成渲染，重试一次
      console.log('  [retry] 首次求值为空，补等 2s 后重试');
      await sleep(2000); r = await ev(`JSON.stringify({
      badge: (document.getElementById('rtYearBadge')||{}).textContent||'',
      era: (document.getElementById('rtEra')||{}).textContent||'',
      legendRows: document.querySelectorAll('#battleLegend .lg-row').length,
      tlNodes: document.querySelectorAll('#rtTrack .tl-node').length,
      evItems: document.querySelectorAll('#eventsPane .ev').length,
      legendText: (document.getElementById('battleLegend')||{}).textContent||''
    })`);
    }
    return r ? JSON.parse(r) : null;
  }

  // ════════ 1) hub 筛选 ════════
  console.log('\n== hub 首页分类筛选 ==');
  await nav(BASE + '/demo/index.html');
  const totalCards = await ev(`document.querySelectorAll('#hubGrid .card').length`);
  ok(totalCards > 50, 'hub 总卡片数充足（' + totalCards + ' 张，含 64 文明事件 + 战役 + 辽东 + 虚构）');

  // 点「文明事件」
  await ev(`document.querySelector('.hub-filter button[data-cat="civ"]').click()`);
  await sleep(400);
  const civInfo = await ev(`JSON.stringify({
    cards: document.querySelectorAll('#hubGrid .card').length,
    allCiv: [...document.querySelectorAll('#hubGrid .card')].every(c=>c.getAttribute('data-cat')==='civ'),
    civCount: document.querySelectorAll('#hubGrid .card[data-cat="civ"]').length,
    hasBattle: document.querySelectorAll('#hubGrid .card[data-cat="battle"]').length,
    hasCounty: document.querySelectorAll('#hubGrid .card[data-cat="county"]').length,
    hasFic: document.querySelectorAll('#hubGrid .card[data-cat="fiction"]').length
  })`);
  const ci = civInfo ? JSON.parse(civInfo) : {};
  ok(ci.cards > 0 && ci.cards === ci.civCount, '点「文明事件」后 #hubGrid 仅剩 civ 卡片（' + ci.cards + ' 张，全部 data-cat=civ）');
  ok(ci.hasBattle === 0 && ci.hasCounty === 0 && ci.hasFic === 0, '非 civ 分类（battle/county/fiction）全部隐藏');
  ok(ci.civCount >= 60, '文明事件切片数量充足（' + ci.civCount + ' 张，铺满各朝代）');

  // 回到「全部」恢复
  await ev(`document.querySelector('.hub-filter button[data-cat="all"]').click()`);
  await sleep(400);
  const back = await ev(`document.querySelectorAll('#hubGrid .card').length`);
  ok(back === totalCards, '点「全部」恢复全部卡片（' + back + ' = ' + totalCards + '）');

  // ════════ 2) 新切片抽样 ════════
  console.log('\n== 新扩展切片抽样 ==');
  const wuwang = await probeScene('wuwang');
  ok(wuwang && /公元前\d+年/.test(wuwang.badge), 'wuwang BC 格式化：#' + (wuwang && wuwang.badge) + '（武王克商·牧野）');
  ok(wuwang && wuwang.tlNodes >= 2, 'wuwang 行车时间轴 ' + (wuwang && wuwang.tlNodes) + ' 节点（孟津→牧野）');
  ok(wuwang && wuwang.legendRows >= 2, 'wuwang 战例图例 ' + (wuwang && wuwang.legendRows) + ' 行（周军/商军）');

  const zhangqian = await probeScene('zhangqian');
  ok(zhangqian && /公元前\d+年/.test(zhangqian.badge), 'zhangqian BC 格式化：#' + (zhangqian && zhangqian.badge) + '（凿空西域）');
  ok(zhangqian && zhangqian.tlNodes >= 1, 'zhangqian 路线时间轴 ' + (zhangqian && zhangqian.tlNodes) + ' 节点');
  ok(zhangqian && /丝绸之路/.test(zhangqian.legendText || ''), 'zhangqian 路线图例显示「丝绸之路」（' + JSON.stringify((zhangqian && zhangqian.legendText || '').slice(0, 40)) + '）');

  const dhy = await probeScene('dong_han_yi');
  ok(dhy && dhy.evItems >= 1, 'dong_han_yi（无 routes）事件面板 ' + (dhy && dhy.evItems) + ' 条（通用渲染）');

  const qh = await probeScene('qing_han');
  ok(qh && qh.evItems >= 1, 'qing_han（清满汉融合）事件面板 ' + (qh && qh.evItems) + ' 条');

  const sd = await probeScene('sui_daxing');
  ok(sd && sd.evItems >= 1, 'sui_daxing（隋大兴城）事件面板 ' + (sd && sd.evItems) + ' 条');

  const zhenghe = await probeScene('zhenghe');
  ok(zhenghe && /1405/.test(zhenghe.badge), 'zhenghe 时间轴首年 ' + (zhenghe && zhenghe.badge) + '（七下西洋）');
  ok(zhenghe && zhenghe.tlNodes >= 1, 'zhenghe 航线时间轴 ' + (zhenghe && zhenghe.tlNodes) + ' 节点');

  const chanyuan = await probeScene('chanyuan');
  ok(chanyuan && chanyuan.tlNodes >= 1, 'chanyuan（澶渊之盟·宋辽）时间轴 ' + (chanyuan && chanyuan.tlNodes) + ' 节点');
  ok(chanyuan && chanyuan.legendRows >= 2, 'chanyuan 战例图例 ' + (chanyuan && chanyuan.legendRows) + ' 行（宋/辽）');

  // ════════ 3) 回归 ════════
  console.log('\n== 回归 ==');
  const huanghe = await probeScene('huanghe');
  ok(huanghe && /公元前602年/.test(huanghe.badge), 'huanghe 回归·公元前602年：' + (huanghe && huanghe.badge));
  const changping = await probeScene('changping');
  ok(changping && /公元前260年/.test(changping.badge), 'changping 回归·公元前260年：' + (changping && changping.badge));

  // ════════ 4) 零异常 ════════
  ok(pageErrors.length === 0, pageErrors.length ? '页面异常：' + pageErrors.slice(0, 4).join(' | ') : '全程无未捕获 JS 异常');

  console.log('\n' + (FAIL === 0
    ? `hub/文明事件探针 PASS（${PASS} 项全过）`
    : `hub/文明事件探针 FAIL（${FAIL} 项失败 / 共 ${PASS + FAIL} 项）`));

  ws.close(); cleanup();
  process.exit(FAIL === 0 ? 0 : 1);
}
main().catch(e => { console.log('[FAIL] hub/文明事件探针异常：', e && e.message ? e.message : e); process.exit(1); });
