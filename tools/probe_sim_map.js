// 无头 CDP 探针：验证 sim_map.html —— 沙盘(ControlLayer) + 模拟器(SimLayer) 合体
// 校验：无异常 / SIM_CORE·SimLayer·ControlLayer 三件套就绪 / 默认重放100% /
//        反事实分支偏离 / real·sim·diff 三模式可绘制 / DOM 控件 / 地形与治所标记 / 控制色绘制
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const WebSocket = (()=>{ try { return require('ws'); } catch(e){ return global.WebSocket; } })();

const errors = [];
const ROOT = path.resolve(__dirname, '..');
const DEMO = path.join(ROOT, 'demo');
const PORT = 8807;
const TARGET = '/sim_map.html';
const MIME = { '.html':'text/html', '.js':'text/javascript', '.json':'application/json', '.css':'text/css', '.jpg':'image/jpeg', '.png':'image/png' };

function serve(){return http.createServer((req,res)=>{
  let p = decodeURIComponent(req.url.split('?')[0]);
  if(p==='/') p=TARGET;
  // 海岸线掩膜在 ROOT/data 下（../data/... 经浏览器规范化后为 /data/...）
  const fp = p.startsWith('/data/') ? path.join(ROOT, p) : path.join(DEMO, p);
  if(!fp.startsWith(ROOT) || !fs.existsSync(fp)){res.writeHead(404);res.end('nf');return;}
  res.writeHead(200,{'Content-Type':MIME[path.extname(fp)]||'application/octet-stream'});
  fs.createReadStream(fp).pipe(res);
});}
function sleep(ms){return new Promise(r=>setTimeout(r,ms));}

async function main(){
  const server = serve(); server.listen(PORT);
  const browser = await launch();
  const page = browser.page;
  page.on = ()=>{};
  await page.goto('http://localhost:'+PORT+TARGET);
  await sleep(1200);

  const base = await page.evaluate(()=>{
    const out={};
    out.simCore = !!(window.SIM_CORE && SIM_CORE.create);
    out.simLayer = !!(window.SimLayer && SimLayer.isReady && SimLayer.isReady());
    out.control = !!(window.ControlLayer && ControlLayer.isReady && ControlLayer.isReady());
    out.terr = !!document.getElementById('terrainCv');
    out.ctrl = !!document.getElementById('ctrlCv');
    out.terrW = document.getElementById('terrainCv').width;
    out.ctrlW = document.getElementById('ctrlCv').width;
    out.branchBtns = document.querySelectorAll('#branchBox button').length;
    out.paramInputs = document.querySelectorAll('#paramBox input[type=range]').length;
    out.seatCircles = document.querySelectorAll('#map circle').length;
    out.yearSlider = !!document.getElementById('year');
    return out;
  });

  // 默认重放 100% + 反事实偏离
  const sim = await page.evaluate(()=>{
    const S=window.SimLayer;
    const real=S.realIntervals(), def=S.simIntervals();
    const defaultReplay = JSON.stringify(real)===JSON.stringify(def);
    const defDiv = S.divergenceAt(1644, null).length;
    const b2Div = S.divergenceAt(1644, 'B2_weak_jin').length;
    const b2Div2 = S.divergenceAt(1644, 'B2_weak_jin').length;
    return { realLen:real.length, defLen:def.length, defaultReplay, defDiv, b2Div, b2Deterministic:(b2Div===b2Div2) };
  });

  // 三模式切换 + 绘制无异常
  const modes = await page.evaluate(()=>{
    const S=window.SimLayer;
    const m1=S.setMode('sim'); S.draw(1630,'region',null);
    const m2=S.setMode('diff'); S.draw(1630,'region','B2_weak_jin');
    const m3=S.setMode('real'); S.draw(1630,'region',null);
    return { m1, m2, m3 };
  });
  const errAfterModes = errors.length;

  // 地形像素（中心非羊皮纸 → DemTopo 已绘制）
  let waitT=0; while(waitT<6000){ const r=await page.evaluate(()=>{
      const c=document.getElementById('terrainCv'); if(!c||!c.width) return false;
      const ctx=c.getContext('2d'); const cx=Math.floor(c.width/2), cy=Math.floor(c.height/2);
      const d=ctx.getImageData(cx-2,cy-2,4,4).data; let non=0;
      for(let i=0;i<d.length;i+=4){ if(!(d[i]===239&&d[i+1]===236&&d[i+2]===226)) non++; }
      return non>0;
    }); if(r){ break; } await sleep(200); waitT+=200; }
  const terrainPx = await page.evaluate(()=>{
    const c=document.getElementById('terrainCv'); const ctx=c.getContext('2d');
    const cx=Math.floor(c.width/2), cy=Math.floor(c.height/2);
    const d=ctx.getImageData(cx-2,cy-2,4,4).data; let non=0;
    for(let i=0;i<d.length;i+=4){ if(!(d[i]===239&&d[i+1]===236&&d[i+2]===226)) non++; }
    return { non, tot:16 };
  });

  // 控制层像素（ctrlCv 全域应有控制色 → 证明 ControlLayer 已着色；中心可能恰为海被掩膜）
  const ctrlPx = await page.evaluate(()=>{
    const c=document.getElementById('ctrlCv'); const ctx=c.getContext('2d');
    const W=c.width, H=c.height; const d=ctx.getImageData(0,0,W,H).data;
    let painted=0, minx=W, miny=H, maxx=0, maxy=0;
    for(let y=0;y<H;y+=3){ for(let x=0;x<W;x+=3){ const o=(y*W+x)*4; if(d[o+3]>10){ painted++; if(x<minx)minx=x; if(x>maxx)maxx=x; if(y<miny)miny=y; if(y>maxy)maxy=y; } } }
    return { painted, tot:Math.floor(W/3)*Math.floor(H/3), bbox: painted? (minx+','+miny+'—'+maxx+','+maxy):'none' };
  });

  // UI 交互：点击反事实分支 → 偏离列表更新
  const ui = await page.evaluate(()=>{
    const b=document.getElementById('br_B2_weak_jin'); if(!b) return { hasBtn:false };
    b.click();
    const divl=document.getElementById('divl');
    const modeBtn=document.querySelector('[data-mode="sim"]');
    modeBtn.click();
    const mode=window.SimLayer.mode();
    return { hasBtn:true, divlChildren: divl? divl.children.length:0, modeAfterClick: mode, statsText: (document.getElementById('stats')||{}).textContent||'' };
  });

  // 年份滑块拖动
  const yearScrub = await page.evaluate(()=>{
    const s=document.getElementById('year'); s.value=1630;
    s.dispatchEvent(new Event('input',{bubbles:true}));
    return { yrVal: document.getElementById('yrVal').textContent };
  });

  // 截图：real / sim / diff
  fs.mkdirSync(path.join(ROOT,'.tmp'),{recursive:true});
  await page.evaluate(()=>{ document.querySelector('[data-mode="real"]').click(); document.querySelector('[data-zoom="fit"]').click(); });
  await sleep(400); await page.screenshot(path.join(ROOT,'.tmp','sim_map_real.png'));
  await page.evaluate(()=>{ document.querySelector('[data-mode="sim"]').click(); document.getElementById('br_B2_weak_jin').click(); document.querySelector('[data-zoom="fit"]').click(); });
  await sleep(400); await page.screenshot(path.join(ROOT,'.tmp','sim_map_sim.png'));
  await page.evaluate(()=>{ document.querySelector('[data-mode="diff"]').click(); document.getElementById('br_B2_weak_jin').click(); document.querySelector('[data-zoom="fit"]').click(); });
  await sleep(400); await page.screenshot(path.join(ROOT,'.tmp','sim_map_diff.png'));

  await browser.close(); server.close();

  let pass=true; const ok=(c,m)=>{ console.log((c?'  ✓ ':'  ✗ ')+m); if(!c)pass=false; };
  console.log('== sim_map 探针（沙盘 + 模拟器合体）==');
  ok(errors.length===0, '无 JS 异常'+(errors.length?' → '+errors.join(' | '):''));
  ok(base.simCore, 'SIM_CORE 已加载');
  ok(base.simLayer, 'SimLayer 已就绪（setup 成功）');
  ok(base.control, 'ControlLayer 已就绪（draw 成功）');
  ok(base.terr && base.ctrl && base.terrW>0 && base.ctrlW>0, '双画布已按 DPR 尺寸化 → terrW='+base.terrW+' ctrlW='+base.ctrlW);
  ok(base.branchBtns>=7, '分支按钮≥7（史实+6分支）→ '+base.branchBtns);
  ok(base.paramInputs>=6, '参数滑块≥6 → '+base.paramInputs);
  ok(base.seatCircles===36, 'SVG 治所标记=36 → 实际 '+base.seatCircles);
  ok(sim.defaultReplay && sim.defDiv===0, '默认参数=100% 重放（sim≡real，偏离0）→ defDiv='+sim.defDiv);
  ok(sim.b2Div>0 && sim.b2Deterministic, '反事实 B2 确定性偏离（'+sim.b2Div+' 处，两次一致）');
  ok(modes.m1==='sim' && modes.m2==='diff' && modes.m3==='real', 'real/sim/diff 三模式可切换 → '+modes.m1+'/'+modes.m2+'/'+modes.m3);
  ok(errAfterModes===0, '三模式绘制无异常');
  ok(terrainPx.non>0, '地形底图已绘制（中心非羊皮纸像素 '+terrainPx.non+'/'+terrainPx.tot+'）');
  ok(ctrlPx.painted>0, '控制层已着色（ctrlCv 全域控制色像素 '+ctrlPx.painted+'/'+ctrlPx.tot+'，bbox '+ctrlPx.bbox+'）');
  ok(ui.hasBtn && ui.divlChildren>0, '点击 B2 分支后偏离列表更新 → 子节点 '+ui.divlChildren);
  ok(ui.modeAfterClick==='sim', '点击反事实模式按钮 → SimLayer 模式切换为 sim');
  ok(yearScrub.yrVal==='1630', '年份滑块拖动 → 年份标签更新为 '+yearScrub.yrVal);
  console.log(pass?'\n✓ 全部通过':'\n✗ 存在失败');
  process.exit(pass?0:1);
}

async function launch(){
  const edgePaths = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','C:/Program Files/Microsoft/Edge/Application/msedge.exe',process.env.EDGE_BIN].filter(Boolean);
  let edge=null;
  for(const p of edgePaths){ if(fs.existsSync(p)){edge=p;break;} }
  if(!edge){ try{ edge = execSync('where msedge',{encoding:'utf8'}).trim().split('\n')[0]; }catch(e){} }
  if(!edge) throw new Error('找不到 Edge');
  const port = 9240 + Math.floor(Math.random()*10);
  const child = require('child_process').spawn(edge, ['--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--no-default-browser-check','--remote-debugging-port='+port,'--user-data-dir='+os.tmpdir()+'/probe-simmap-'+process.pid,'about:blank'], {stdio:'ignore'});
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
      if(r.result.exceptionDetails){ const ed=r.result.exceptionDetails;
        const desc=(ed.exception&&(ed.exception.description||ed.exception.value))||ed.text||'';
        throw new Error('evaluate 异常: '+String(desc).slice(0,900)+' | '+JSON.stringify(ed).slice(0,400)); }
      return r.result.result.value; },
    async screenshot(file){ const r=await send('Page.captureScreenshot',{format:'png',fromSurface:true,captureBeyondViewport:false}); fs.writeFileSync(file, Buffer.from(r.result.data,'base64')); },
    on(){},
  };
  return { page, close:()=>{ try{child.kill();}catch(e){} try{wsClient.close();}catch(e){} } };
}
main().catch(e=>{ console.error('探针异常:', e); process.exit(2); });
