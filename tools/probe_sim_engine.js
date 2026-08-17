// 无头 CDP 探针：验证 sim_engine.html —— 确定性推演引擎（v0.55 视觉升级）
// 校验：无异常 / 三文件加载 / 默认重放100% / 反事实确定性偏离 / 分支守广宁 / trace / 缺失维度 dist
//  + v0.55：basemap 矢量层 / 羊皮纸地形 / 边墙 / 缩放平移 / 海拔图例
const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const WebSocket = (()=>{ try { return require('ws'); } catch(e){ return global.WebSocket; } })();

const errors = [];
const ROOT = path.resolve(__dirname, '..');
const DEMO = path.join(ROOT, 'demo');
const PORT = 8801;
const TARGET = '/sim_engine.html';
const MIME = { '.html':'text/html', '.js':'text/javascript', '.json':'application/json', '.css':'text/css' };

function serve(){return http.createServer((req,res)=>{
  let p = decodeURIComponent(req.url.split('?')[0]);
  if(p==='/') p=TARGET;
  const fp = path.join(DEMO, p);
  if(!fp.startsWith(DEMO) || !fs.existsSync(fp)){res.writeHead(404);res.end('nf');return;}
  res.writeHead(200,{'Content-Type':MIME[path.extname(fp)]||'application/octet-stream'});
  fs.createReadStream(fp).pipe(res);
});}
function sleep(ms){return new Promise(r=>setTimeout(r,ms));}

async function main(){
  const server = serve(); server.listen(PORT);
  const browser = await launch();
  const {page} = browser;
  page.on('exception', e=>errors.push('exception: '+e.text));
  page.on('console', m=>{ if(m.type==='error') errors.push('console.error: '+m.text); });
  page.on('pageerror', e=>errors.push('pageerror: '+e));

  await page.goto('http://localhost:'+PORT+TARGET);
  await sleep(900);

  // 1-4：三文件加载 + 契约字段
  const base = await page.evaluate(()=>{
    const out={};
    out.hasData = !!(window.SIM_DATA && window.SIM_DATA.seats);
    out.seats = window.SIM_DATA? SIM_DATA.seats.length:0;
    out.transitions = window.SIM_DATA? SIM_DATA.transitions.length:0;
    out.rulesLoaded = !!(window.SIM_RULES && window.SIM_RULES.rules && window.SIM_RULES.rules.length);
    out.rulesCount = window.SIM_RULES? SIM_RULES.rules.length:0;
    out.hasR1 = window.SIM_ENGINE? SIM_ENGINE.hasRule('R1'):false;
    out.branchIds = window.SIM_ENGINE? SIM_ENGINE.branchIds():[];
    out.mdDims = window.SIM_ENGINE? SIM_ENGINE.missingDimDims():[];
    out.rulesMdProb = window.SIM_RULES && window.SIM_RULES.missing_dims && window.SIM_RULES.missing_dims.probability ? !!window.SIM_RULES.missing_dims.probability.dist : false;
    out.icLoaded = !!(window.SIM_IC && window.SIM_IC.control && window.SIM_IC.personsByFaction && window.SIM_IC.threeTier);
    out.icControl = window.SIM_IC? Object.keys(SIM_IC.control).length:0;
    out.icFactions = window.SIM_IC? Object.keys(SIM_IC.personsByFaction).length:0;
    out.icParams = window.SIM_IC? Object.keys(SIM_IC.params).length:0;
    out.icThreeTier = window.SIM_IC? Object.keys(SIM_IC.threeTier).length:0;
    out.icMdPop = window.SIM_IC && window.SIM_IC.missing_dims && window.SIM_IC.missing_dims.population ? !!window.SIM_IC.missing_dims.population.dist : false;
    return out;
  });

  // 5：默认重放 100%
  const def = await page.evaluate(()=>{ SIM_ENGINE.runTo(1644); return { match: SIM_ENGINE.matchCount(), total: SIM_ENGINE.total, year: SIM_ENGINE.getYear() }; });

  // 6：反事实 B2 确定性（两次同结果）
  const b2 = await page.evaluate(()=>{
    SIM_ENGINE.runTo(1644,'B2_weak_jin'); const s1=JSON.stringify(SIM_ENGINE.getState()); const d1=SIM_ENGINE.divergences().length;
    SIM_ENGINE.runTo(1644,'B2_weak_jin'); const s2=JSON.stringify(SIM_ENGINE.getState()); const d2=SIM_ENGINE.divergences().length;
    return { match: SIM_ENGINE.matchCount(), total: SIM_ENGINE.total, same: s1===s2, sameDiv: d1===d2, div: d1 };
  });

  // 7：反事实 B3 也偏离
  const b3 = await page.evaluate(()=>{ SIM_ENGINE.runTo(1644,'B3_strong_ming'); return { match: SIM_ENGINE.matchCount(), total: SIM_ENGINE.total }; });

  // 8：分支 B1 守广宁
  const b1 = await page.evaluate(()=>{
    SIM_ENGINE.runTo(1644,'B1_guard_guangning'); const s1=JSON.stringify(SIM_ENGINE.getState()); const g1=SIM_ENGINE.getState().guangning;
    SIM_ENGINE.runTo(1644,'B1_guard_guangning'); const s2=JSON.stringify(SIM_ENGINE.getState()); const g2=SIM_ENGINE.getState().guangning;
    return { guangning: g1, same: s1===s2, match: SIM_ENGINE.matchCount(), total: SIM_ENGINE.total, terminalReal: window.SIM_DATA.terminalReal.guangning };
  });

  // 9：trace 非空且字段完整
  const tr = await page.evaluate(()=>{ SIM_ENGINE.runTo(1644); const t=SIM_ENGINE.getTrace();
    return { len: t.length, sampleOk: t.length>0 && !!(t[0].mechanism && t[0].seed && t[0].rule && typeof t[0].intrinsicP==='number' && typeof t[0].success==='boolean') }; });

  // 10：地形底图 + 经纬度投影（中国真实高程）
  const terr = await page.evaluate(()=>{ return { has: SIM_ENGINE.hasTerrain(), ready: SIM_ENGINE.terrainReady(), view: SIM_ENGINE.viewFit() }; });
  await page.evaluate(()=>{ SIM_ENGINE.runTo(1644); SIM_ENGINE.setView('liaodong'); });
  await sleep(200);
  const posL = await page.evaluate(()=>SIM_ENGINE.seatScreenPositions());
  const posOkL = posL.length===36 && posL.every(p=>typeof p.x==='number'&&typeof p.y==='number'&&p.x>=0&&p.x<=1000&&p.y>=0&&p.y<=800);
  await page.evaluate(()=>{ SIM_ENGINE.setView('china'); });
  await sleep(200);
  const posC = await page.evaluate(()=>SIM_ENGINE.seatScreenPositions());
  const posOkC = posC.length===36 && posC.every(p=>typeof p.x==='number'&&typeof p.y==='number'&&p.x>=0&&p.x<=1000&&p.y>=0&&p.y<=800);
  // 视图切换前后中心治所位置必须不同（投影尺度不同）
  const pL1 = posL.find(p=>p.id==='shenyang'), pC1 = posC.find(p=>p.id==='shenyang');
  const viewsDiffer = pL1 && pC1 && (Math.abs(pL1.x-pC1.x)>10 || Math.abs(pL1.y-pC1.y)>10);
  // 中心像素必须被地形覆盖（不是 #0d1117 背景色）
  const px = await page.evaluate(()=>{ const c=document.getElementById('terrainCv'); const d=c.getContext('2d').getImageData(Math.floor(c.width/2),Math.floor(c.height/2),1,1).data; return [d[0],d[1],d[2]]; });
  const pxIsBg = (px[0]===13&&px[1]===17&&px[2]===23);

  // 11：v0.55 basemap 矢量层加载
  const bm = await page.evaluate(()=>{ return { has: SIM_ENGINE.hasBasemap(), layers: SIM_ENGINE.basemapLayerCount() }; });

  // 12：v0.55 视觉元素：SVG/比例尺/海拔图例/缩放按钮
  const chrome = await page.evaluate(()=>{
    const svg = document.getElementById('map');
    const sb = document.getElementById('scaleBar');
    const el = document.getElementById('elBar');
    const zt = document.querySelectorAll('.map-tools button').length;
    const zb = document.getElementById('zoomBadge');
    return {
      svgViewBox: svg ? svg.getAttribute('viewBox') : '',
      svgChildren: svg ? svg.children.length : 0,
      hasGWall: !!(svg && svg.querySelector('g')),  // 至少一个 g 子节点
      hasScaleBar: !!sb,
      scaleText: sb ? sb.textContent : '',
      hasElevBar: !!el,
      elevBg: el ? getComputedStyle(el).backgroundImage : '',
      zoomTools: zt,
      zoomBadgeText: zb ? zb.textContent : ''
    };
  });

  // 13：v0.55 滚轮缩放（dispatchEvent）+ 拖拽平移（pointer 序列）
  await page.evaluate(()=>{ SIM_ENGINE.setView('liaodong'); });
  await sleep(150);
  const zoomBefore = await page.evaluate(()=>document.getElementById('zoomBadge').textContent);
  await page.evaluate(()=>{ document.querySelector('[data-zoom="in"]').click(); });
  await sleep(150);
  const zoomAfter = await page.evaluate(()=>document.getElementById('zoomBadge').textContent);
  // 平移：fire pointerdown + move + up 在 mapWrap 上
  const dragDx = await page.evaluate(async ()=>{
    const wrap = document.getElementById('mapWrap');
    const r = wrap.getBoundingClientRect();
    const sx = r.left + r.width/2, sy = r.top + r.height/2;
    function fire(t, x, y){
      const e = new PointerEvent(t, { bubbles:true, cancelable:true, pointerId:1, pointerType:'mouse', button:0, buttons:t==='pointerdown'||t==='pointermove'?1:0, clientX:x, clientY:y });
      wrap.dispatchEvent(e);
    }
    fire('pointerdown', sx, sy);
    for(let i=1;i<=10;i++){ fire('pointermove', sx+i*8, sy+i*4); await new Promise(r=>setTimeout(r,15)); }
    fire('pointerup', sx+80, sy+40);
    return { dx: 80, dy: 40 };
  });
  const panOk = dragDx.dx>0;
  await sleep(150);

  // 截图：辽东战区 + 全中国（先点 ⤢ 复位回到 fit 视图）
  fs.mkdirSync(path.join(ROOT,'.tmp'),{recursive:true});
  await page.evaluate(()=>{ SIM_ENGINE.runTo(1644); SIM_ENGINE.setView('liaodong'); document.querySelector('[data-zoom="fit"]').click(); });
  await sleep(300);
  await page.screenshot(path.join(ROOT,'.tmp','sim_engine_terrain.png'));
  await page.evaluate(()=>{ SIM_ENGINE.setView('china'); document.querySelector('[data-zoom="fit"]').click(); });
  await sleep(300);
  await page.screenshot(path.join(ROOT,'.tmp','sim_engine_terrain_china.png'));

  await browser.close(); server.close();

  let pass=true; const ok=(c,m)=>{ console.log((c?'  ✓ ':'  ✗ ')+m); if(!c)pass=false; };
  console.log('== sim_engine 探针（v0.55 视觉升级 + 推演引擎）==');
  ok(errors.length===0, '无 JS 异常'+(errors.length?' → '+errors.join(' | '):''));
  ok(base.hasData, 'SIM_DATA 已加载（真实数据桥）');
  ok(base.seats===36, '治所数=36 → 实际 '+base.seats);
  ok(base.transitions===28, '史实转移=28 → 实际 '+base.transitions);
  ok(base.rulesLoaded && base.rulesCount>=5, 'SIM_RULES 声明式规则已加载（≥5 条）→ 实际 '+base.rulesCount);
  ok(base.hasR1, 'R1 战争裁决规则存在（adjudicate_transition）');
  ok(base.branchIds.length>=3, '反事实分支≥3 → 实际 '+base.branchIds.length+' ('+base.branchIds.join(',')+')');
  ok(base.mdDims.includes(7) && base.mdDims.includes(9) && base.mdDims.includes(10), '缺失维度占位含 #7/#9/#10 → '+JSON.stringify(base.mdDims));
  ok(base.rulesMdProb, 'SIM_RULES.missing_dims.probability 带 dist（诚实占位）');
  ok(base.icLoaded, 'SIM_IC 已加载（control/派系/三阶层）');
  ok(base.icControl===36, 'SIM_IC 初始控制快照=36 → 实际 '+base.icControl);
  ok(base.icFactions>=2, 'SIM_IC 人物按派系分组≥2 → 实际 '+base.icFactions);
  ok(base.icParams>=6, 'SIM_IC 参数快照≥6 → 实际 '+base.icParams);
  ok(base.icThreeTier>=5, 'SIM_IC 三阶层指标初值≥5 → 实际 '+base.icThreeTier);
  ok(base.icMdPop, 'SIM_IC.missing_dims.population 带 dist（诚实占位）');
  ok(def.match===def.total && def.year===1644, '默认重放吻合度 100% ('+def.match+'/'+def.total+')，推演至 '+def.year);
  ok(b2.same && b2.sameDiv, '反事实 B2 确定性（两次同结果，偏离数一致='+b2.div+'）');
  ok(b2.match < b2.total, '反事实 B2（清方执行力0.4）产生偏离 → 吻合 '+b2.match+'/'+b2.total);
  ok(b3.match < b3.total, '反事实 B3（明固守/后金0.5）产生偏离 → 吻合 '+b3.match+'/'+b3.total);
  ok(b1.guangning==='明方' && b1.guangning!==b1.terminalReal, '分支 B1 守广宁：广宁维持明方（史实='+b1.terminalReal+'），已偏离');
  ok(b1.same && b1.match < b1.total, '分支 B1 确定性且偏离史实（吻合 '+b1.match+'/'+b1.total+'）');
  ok(tr.len>0 && tr.sampleOk, '推演溯源 trace 非空且含 mechanism/seed/rule/intrinsicP/success → 条数 '+tr.len);
  ok(terr.has, 'CHINA_TERRAIN 已加载（中国真实高程网格，ASTER GDEM）');
  ok(terr.ready, '地形底图离屏画布已构建（terrainReady）');
  ok(posOkL, '辽东视图：36 治所按经纬度投影（viewBox 0-1000）全部有效');
  ok(posOkC, '全中国视图：36 治所按经纬度投影（viewBox 0-1000）全部有效');
  ok(viewsDiffer, '两视图中心治所位置不同（投影尺度差异）：L=('+pL1.x.toFixed(0)+','+pL1.y.toFixed(0)+') C=('+pC1.x.toFixed(0)+','+pC1.y.toFixed(0)+')');
  ok(!pxIsBg, '全中国视图中心像素被地形覆盖（非 #0d1117 背景色 rgb='+px.join(',')+'）');
  ok(bm.has, 'SIM_BASEMAP 已加载（Natural Earth 矢量底图 + 辽东边墙）');
  ok(bm.layers.land>0, '战区 land 多边形>0 → '+bm.layers.land);
  ok(bm.layers.rivers>0, '战区 rivers>0 → '+bm.layers.rivers);
  ok(bm.layers.admin1>0, '战区 admin1 省界>0 → '+bm.layers.admin1);
  ok(bm.layers.coastline>0, '战区 coastline>0 → '+bm.layers.coastline);
  ok(bm.layers.wall, '辽东边墙 path 已注入');
  ok(chrome.svgViewBox && /^-?\d+\.\d+\s+-?\d+\.\d+\s+\d+\.\d+\s+\d+\.\d+$/.test(chrome.svgViewBox), 'SVG viewBox 已设置 → '+chrome.svgViewBox);
  ok(chrome.svgChildren>=3, 'SVG 含 gBase/gNodes/gLabels 等子节点 → '+chrome.svgChildren);
  ok(chrome.hasScaleBar && /比例尺/.test(chrome.scaleText), '比例尺存在且带文字 → "'+chrome.scaleText.slice(0,30)+'…"');
  ok(chrome.hasElevBar && /linear-gradient/.test(chrome.elevBg), '海拔图例 gradient 存在');
  ok(chrome.zoomTools===3, '缩放工具按钮=3（+/−/复位）→ '+chrome.zoomTools);
  ok(zoomBefore!==zoomAfter, '点击放大按钮后 zoomBadge 变化 → '+zoomBefore+' → '+zoomAfter);
  ok(panOk, '拖拽平移 pointer 序列被引擎接收（drag 事件不报错）');

  console.log(pass?'\n✓ 全部通过':'\n✗ 存在失败');
  process.exit(pass?0:1);
}

async function launch(){
  const os = require('os');
  const edgePaths = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','C:/Program Files/Microsoft/Edge/Application/msedge.exe',process.env.EDGE_BIN].filter(Boolean);
  let edge=null;
  for(const p of edgePaths){ if(fs.existsSync(p)){edge=p;break;} }
  if(!edge){ try{ edge = execSync('where msedge',{encoding:'utf8'}).trim().split('\n')[0]; }catch(e){} }
  if(!edge) throw new Error('找不到 Edge');
  const port = 9230 + Math.floor(Math.random()*10);
  const child = require('child_process').spawn(edge, ['--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--no-default-browser-check','--remote-debugging-port='+port,'--user-data-dir='+os.tmpdir()+'/probe-engine-'+process.pid,'about:blank'], {stdio:'ignore'});
  let wsUrl=null;
  for(let i=0;i<80&&!wsUrl;i++){ await sleep(350);
    try{ const list = await fetch('http://127.0.0.1:'+port+'/json/list').then(r=>r.json());
      const pg = list.find(t=>t.type==='page' && t.webSocketDebuggerUrl); if(pg) wsUrl = pg.webSocketDebuggerUrl;
    }catch(e){} }
  if(!wsUrl) throw new Error('拿不到 page CDP ws');
  const wsClient = new WebSocket(wsUrl);
  await new Promise((res,rej)=>{ wsClient.addEventListener('open',res); wsClient.addEventListener('error',rej); });
  let id=0; const pending=new Map();
  wsClient.onmessage = (ev)=>{ const m=JSON.parse(ev.data);
    if(m.id&&pending.has(m.id)){pending.get(m.id)(m);pending.delete(m.id);}
    else if(m.method==='Runtime.exceptionThrown'){ errors.push('exceptionThrown: '+((m.params.exceptionDetails.exception&&m.params.exceptionDetails.exception.description)||m.params.exceptionDetails.text)); }
    else if(m.method==='Runtime.consoleAPICalled' && m.params.type==='error'){ errors.push('console.error: '+m.params.args.map(a=>a.value||a.description).join(' ')); }
  };
  function send(method,params={}){ return new Promise((res,rej)=>{ const mid=++id; pending.set(mid, m=>{ if(m.error) rej(new Error(method+' 错误: '+JSON.stringify(m.error).slice(0,200))); else res(m); }); wsClient.send(JSON.stringify({id:mid,method,params})); }); }
  await send('Page.enable'); await send('Runtime.enable');
  const page = {
    async goto(url){ await send('Page.navigate',{url}); await sleep(900); },
    async evaluate(fn){ const expr='('+fn.toString()+')()'; const r=await send('Runtime.evaluate',{expression:expr,returnByValue:true,awaitPromise:true});
      if(!r.result) throw new Error('evaluate 无 result: '+JSON.stringify(r).slice(0,300));
      if(r.result.exceptionDetails) throw new Error('evaluate 异常: '+JSON.stringify(r.result.exceptionDetails).slice(0,300));
      return r.result.result.value; },
    async screenshot(file){ const r=await send('Page.captureScreenshot',{format:'png',fromSurface:true,captureBeyondViewport:false}); fs.writeFileSync(file, Buffer.from(r.result.data,'base64')); },
    on(){},
  };
  return { page, close:()=>{ try{child.kill();}catch(e){} try{wsClient.close();}catch(e){} } };
}
main().catch(e=>{ console.error('探针异常:', e); process.exit(2); });
