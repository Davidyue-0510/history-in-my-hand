// 无头 CDP 探针：验证 sim_map.html 进军箭头层（v0.69）
// 校验：year0 无箭头 / sarhu 1619 恰 5 条且均为清方色 / 关开关清零 /
//       默认(liaodong) 末年起码有箭头 / 无 JS 异常
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const WebSocket = (()=>{ try { return require('ws'); } catch(e){ return global.WebSocket; } })();

const errors = [];
const ROOT = path.resolve(__dirname, '..');
const DEMO = path.join(ROOT, 'demo');
const PORT = 8821;
const SCENE = process.env.SIM_SCENE || '';
const TARGET = '/sim_map.html' + (SCENE ? ('?scene=' + SCENE) : '');
const MIME = { '.html':'text/html', '.js':'text/javascript', '.json':'application/json', '.css':'text/css', '.jpg':'image/jpeg', '.png':'image/png' };

function serve(){return http.createServer((req,res)=>{
  let p = decodeURIComponent(req.url.split('?')[0]);
  if(p==='/') p=TARGET;
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

  const meta = await page.evaluate(()=>{
    const scene = SIM_CORE.sceneFromURL(); const core = SIM_CORE.create(scene);
    return { year0: core.D.meta.startYear, year1: core.D.meta.endYear,
             qing: (()=>{ const c=core.D.partyColors['清方']; return 'rgb('+c[0]+','+c[1]+','+c[2]+')'; })() };
  });
  const year0 = meta.year0, year1 = meta.year1, QING = meta.qing;

  const arrowInfo = (Y)=> page.evaluate((Y)=>{
    const s=document.getElementById('year'); s.value=Y; s.dispatchEvent(new Event('input',{bubbles:true}));
    const g=document.getElementById('gArrows'); if(!g) return { count:0, strokes:[], exists:false };
    const lines=[].slice.call(g.querySelectorAll('line.arr'));   // 有色箭头线（halo 不可见同色辅助线不计）
    return { exist:true, count: lines.length, strokes: lines.map(l=>l.getAttribute('stroke')) };
  }, Y);

  const setToggle = (on)=> page.evaluate((on)=>{
    const t=document.getElementById('tgArrows'); if(!t) return; t.checked=on; t.dispatchEvent(new Event('change',{bubbles:true}));
  }, on);

  const atY0 = await arrowInfo(year0);
  const atY1 = await arrowInfo(year1);
  await setToggle(false);
  const offAtY1 = await arrowInfo(year1);
  await setToggle(true);

  await browser.close(); server.close();

  let pass=true; const ok=(c,m)=>{ console.log((c?'  ✓ ':'  ✗ ')+m); if(!c)pass=false; };
  console.log('== 进军箭头探针（scene='+(SCENE||'默认/liaodong')+'）==');
  ok(atY0.exist!==false, '箭头层 #gArrows 存在');
  ok(atY0.count===0, 'year0('+year0+')：无易手箭头（count='+atY0.count+'）');

  if(SCENE==='sarhu'){
    ok(atY1.count===5, 'sarhu year1('+year1+')：恰 5 条易手箭头（明→清 5 处）→ count='+atY1.count);
    ok(atY1.strokes.every(s=>s===QING), '5 条箭头均为清方色（'+QING+'）');
  } else {
    ok(atY1.count>=1, '默认场景 year1('+year1+')：全辽东战役易手箭头 ≥1 → count='+atY1.count);
  }
  ok(offAtY1.count===0, '关开关后箭头清零（count='+offAtY1.count+'）');
  ok(errors.length===0, '无 JS 异常'+(errors.length?' → '+errors.join(' | '):''));
  console.log(pass?'\n✓ 全部通过':'\n✗ 存在失败');
  process.exit(pass?0:1);
}

async function launch(){
  const edgePaths = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','C:/Program Files/Microsoft/Edge/Application/msedge.exe',process.env.EDGE_BIN].filter(Boolean);
  let edge=null;
  for(const p of edgePaths){ if(fs.existsSync(p)){edge=p;break;} }
  if(!edge){ try{ edge = execSync('where msedge',{encoding:'utf8'}).trim().split('\n')[0]; }catch(e){} }
  if(!edge) throw new Error('找不到 Edge');
  const port = 9250 + Math.floor(Math.random()*10);
  const child = require('child_process').spawn(edge, ['--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--no-default-browser-check','--remote-debugging-port='+port,'--user-data-dir='+os.tmpdir()+'/probe-arrows-'+process.pid,'about:blank'], {stdio:'ignore'});
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
    async evaluate(fn, ...args){ const expr='('+fn.toString()+')('+args.map(a=>JSON.stringify(a)).join(',')+')'; const r=await send('Runtime.evaluate',{expression:expr,returnByValue:true,awaitPromise:true});
      if(!r.result) throw new Error('evaluate 无 result: '+JSON.stringify(r).slice(0,300));
      if(r.result.exceptionDetails){ const ed=r.result.exceptionDetails;
        const desc=(ed.exception&&(ed.exception.description||ed.exception.value))||ed.text||'';
        throw new Error('evaluate 异常: '+String(desc).slice(0,900)+' | '+JSON.stringify(ed).slice(0,400)); }
      return r.result.result.value; },
    on(){},
  };
  return { page, close:()=>{ try{child.kill();}catch(e){} try{wsClient.close();}catch(e){} } };
}
main().catch(e=>{ console.error('探针异常:', e); process.exit(2); });
