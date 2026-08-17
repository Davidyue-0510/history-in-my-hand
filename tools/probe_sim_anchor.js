// 无头 CDP 探针：验证 sim_anchor.html 锚定真实数据、无异常、默认重放吻合 100%
const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const errors = [];  // 页面异常收集（launch 闭包与 main 共享）

const ROOT = path.resolve(__dirname, '..');
const DEMO = path.join(ROOT, 'demo');
const PORT = 8799;
const TARGET = '/sim_anchor.html';

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
  const {page,ws} = await browser;
  page.on('exception', e=>errors.push('exception: '+e.text));
  page.on('console', m=>{ if(m.type==='error') errors.push('console.error: '+m.text); });
  page.on('pageerror', e=>errors.push('pageerror: '+e));

  await page.goto('http://localhost:'+PORT+TARGET);
  await sleep(800);

  const r = await page.evaluate(()=>{
    const out = {};
    out.hasData = !!(window.SIM_DATA && window.SIM_DATA.seats);
    out.seats = window.SIM_DATA ? window.SIM_DATA.seats.length : 0;
    out.transitions = window.SIM_DATA ? window.SIM_DATA.transitions.length : 0;
    out.persons = window.SIM_DATA ? window.SIM_DATA.persons.length : 0;
    // 默认参数重放至终年
    try { runTo(1644); } catch(e){ out.runErr = e.message; }
    out.year = (typeof year!=='undefined')?year:'?';
    out.match100 = SEATS.filter(s=>(state[s.id]||'')===(D.terminalReal[s.id]||'')).length;
    out.total = SEATS.length;
    // 画布非空
    try {
      const c=document.getElementById('cv'); const ctx=c.getContext('2d');
      const d=ctx.getImageData(0,0,c.width,c.height).data; let nz=0;
      for(let i=3;i<d.length;i+=4) if(d[i]>0) nz++;
      out.canvasNonBlank = nz;
    } catch(e){ out.canvasErr = e.message; }
    return out;
  });

  // 反事实：低清方执行力应产生偏离
  const w = await page.evaluate(()=>{
    document.getElementById('effQing').value=0.4; document.getElementById('effMing').value=0.9;
    document.getElementById('spread').value=0.6; syncParamLabels(); resetAll(); runTo(1644);
    return SEATS.filter(s=>(state[s.id]||'')===(D.terminalReal[s.id]||'')).length;
  });
  const whatifMatch = w;

  await browser.close(); server.close();

  let pass=true;
  const ok=(c,m)=>{ console.log((c?'  ✓ ':'  ✗ ')+m); if(!c)pass=false; };
  console.log('== sim_anchor 探针 ==');
  ok(errors.length===0, '无 JS 异常'+(errors.length?' → '+errors.join(' | '):''));
  ok(r.hasData, 'SIM_DATA 已加载（真实数据桥）');
  ok(r.seats===36, '治所数=36 (真实经纬度投影) → 实际 '+r.seats);
  ok(r.transitions===28, '史实控制权转移=28 → 实际 '+r.transitions);
  ok(r.persons===18, '真实人物(派系)=18 → 实际 '+r.persons);
  ok(!r.runErr, 'runTo(1644) 无错'+(r.runErr?(' → '+r.runErr):''));
  ok(r.year===1644, '推演推进到终年 1644 → 实际 '+r.year);
  ok(r.match100===r.total, '默认重放吻合度 100% ('+r.match100+'/'+r.total+')');
  ok(r.canvasNonBlank>1000, '地图画布已绘制 (非空像素='+(r.canvasNonBlank||0)+')');
  ok(whatifMatch < r.total, '反事实(清方执行力0.4)产生偏离 → 吻合 '+(whatifMatch)+'/'+r.total);

  console.log(pass?'\n✓ 全部通过':'\n✗ 存在失败');
  process.exit(pass?0:1);
}

// ---- 最小 CDP 启动（复用 managed Edge）----
async function launch(){
  const { execSync } = require('child_process');
  const os = require('os');
  const edgePaths = [
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    process.env.EDGE_BIN
  ].filter(Boolean);
  let edge=null;
  for(const p of edgePaths){ if(fs.existsSync(p)){edge=p;break;} }
  if(!edge){ try{ edge = execSync('where msedge',{encoding:'utf8'}).trim().split('\n')[0]; }catch(e){} }
  if(!edge) throw new Error('找不到 Edge');
  const port = 9222 + Math.floor(Math.random()*10);
  const child = require('child_process').spawn(edge, [
    '--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--no-default-browser-check',
    '--remote-debugging-port='+port,
    '--user-data-dir='+os.tmpdir()+'/probe-'+process.pid,
    'about:blank'], {stdio:'ignore'});
  // 轮询 page target 的 ws（Page 域只在 page target 上可用）
  let wsUrl=null;
  for(let i=0;i<80&&!wsUrl;i++){
    await sleep(350);
    try{
      const list = await fetch('http://127.0.0.1:'+port+'/json/list').then(r=>r.json());
      const pg = list.find(t=>t.type==='page' && t.webSocketDebuggerUrl);
      if(pg) wsUrl = pg.webSocketDebuggerUrl;
    }catch(e){}
  }
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
    on(){},
  };
  return { page, ws:wsClient, close:()=>{ try{child.kill();}catch(e){} try{wsClient.close();}catch(e){} } };
}

main().catch(e=>{ console.error('探针异常:', e); process.exit(2); });
