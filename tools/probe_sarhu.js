// 无头 CDP 探针：验证 sarhu.html —— 旧版萨尔浒战役页（底部时间轴 #tlTrack + 行军路线 #routeList + 分析页）
// 校验：无异常 / 时间轴节点>0 / 行军路线勾选项>0 / 史料采信列表>0 / 地图画布与地形已绘制
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const WebSocket = (()=>{ try { return require('ws'); } catch(e){ return global.WebSocket; } })();

const errors = [];
const ROOT = path.resolve(__dirname, '..');
const DEMO = path.join(ROOT, 'demo');
const PORT = 8809;
const TARGET = '/sarhu.html';
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
  const page = browser.page; page.on=()=>{};
  await page.goto('http://localhost:'+PORT+TARGET);
  await sleep(1500);

  const base = await page.evaluate(()=>{
    const q=s=>document.querySelectorAll(s).length;
    return {
      tlNodes: q('#tlTrack .tl-node'),
      routeItems: q('#routeList .route-item, #routeList label, #routeList div'),
      sourceItems: q('#sourceList .src-item, #sourceList label, #sourceList div'),
      mapCv: !!document.getElementById('terrainCv'),
      ctrlCv: !!document.getElementById('controlCv'),
      svg: !!document.getElementById('map'),
      playBtn: !!document.getElementById('playBtn'),
      terrainW: (document.getElementById('terrainCv')||{}).width||0
    };
  });
  // 地形像素（中心非羊皮纸 → DemTopo 已绘制）
  const terr = await page.evaluate(()=>{
    try{ const c=document.getElementById('terrainCv'); const ctx=c.getContext('2d');
      const d=ctx.getImageData(0,0,c.width,c.height).data; let non=0,tot=0;
      for(let i=3;i<d.length;i+=4){ tot++; if(d[i]>10 && !(d[i]<20&&d[i+1]<20&&d[i+2]<20)) non++; }
      return { non, tot };
    }catch(e){ return {err:e.message}; }
  });
  await page.screenshot(path.join(ROOT,'.tmp','sarhu_battle.png'));
  await browser.close(); server.close();

  let pass=true; const ok=(c,m)=>{ console.log((c?'  ✓ ':'  ✗ ')+m); if(!c)pass=false; };
  console.log('== sarhu.html 探针（底部时间轴 + 行军路线）==');
  ok(errors.length===0, '无 JS 异常'+(errors.length?' → '+errors.join(' | '):''));
  ok(base.tlNodes>0, '底部时间轴 #tlTrack 节点 >0 → '+base.tlNodes);
  ok(base.routeItems>0, '行军路线列表 >0 项 → '+base.routeItems);
  ok(base.sourceItems>0, '史料采信列表 >0 项 → '+base.sourceItems);
  ok(base.mapCv && base.ctrlCv && base.svg, '地图三要素（地形/控制/SVG）齐全');
  ok(base.playBtn, '时间轴播放按钮存在');
  ok(terr.non>0, '地形底图已绘制（非羊皮纸像素 '+terr.non+'/'+terr.tot+'）');
  console.log(pass?'\n✓ 全部通过':'\n✗ 存在失败');
  process.exit(pass?0:1);
}

async function launch(){
  const edgePaths = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','C:/Program Files/Microsoft/Edge/Application/msedge.exe',process.env.EDGE_BIN].filter(Boolean);
  let edge=null;
  for(const p of edgePaths){ if(fs.existsSync(p)){edge=p;break;} }
  if(!edge){ try{ edge = execSync('where msedge',{encoding:'utf8'}).trim().split('\n')[0]; }catch(e){} }
  if(!edge) throw new Error('找不到 Edge');
  const port = 9260 + Math.floor(Math.random()*10);
  const child = require('child_process').spawn(edge, ['--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--no-default-browser-check','--remote-debugging-port='+port,'--user-data-dir='+os.tmpdir()+'/probe-sarhu-'+process.pid,'about:blank'], {stdio:'ignore'});
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
      if(r.result.exceptionDetails){ const ed=r.result.exceptionDetails; const desc=(ed.exception&&(ed.exception.description||ed.exception.value))||ed.text||''; throw new Error('evaluate 异常: '+String(desc).slice(0,900)); }
      return r.result.result.value; },
    async screenshot(file){ const r=await send('Page.captureScreenshot',{format:'png',fromSurface:true,captureBeyondViewport:false}); fs.writeFileSync(file, Buffer.from(r.result.data,'base64')); },
    on(){},
  };
  return { page, close:()=>{ try{child.kill();}catch(e){} try{wsClient.close();}catch(e){} } };
}
main().catch(e=>{ console.error('探针异常:', e); process.exit(2); });
