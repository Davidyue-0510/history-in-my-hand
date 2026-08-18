// 无头 CDP 探针：验证 sim_map.html 视角切换（v0.68）
// 校验：选择器渲染 / 史官视角默认不翻转 / 选杜松(明)→我方 /
//        选努尔哈赤(后金)→我方且分支叙事含敌方 / liaodong 场景降级
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const WebSocket = (()=>{ try { return require('ws'); } catch(e){ return global.WebSocket; } })();

const errors = [];
const ROOT = path.resolve(__dirname, '..');
const DEMO = path.join(ROOT, 'demo');
const PORT = 8817;
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

  // 选择器 + 选项（含默认选项文本）
  const sel = await page.evaluate(()=>{
    const s=document.getElementById('vpSel');
    if(!s) return { exists:false };
    const opts=[].slice.call(s.options).map(o=>o.textContent);
    return { exists:true, disabled:s.disabled, optionCount:s.options.length, opts, opt0: s.options[0].textContent, card:document.getElementById('vpCard').textContent };
  });

  // 分支 id + 终年（偏离列表需拨到终年才有席位偏离）
  const meta = await page.evaluate(()=>{
    const scene = SIM_CORE.sceneFromURL(); const core = SIM_CORE.create(scene);
    return {
      branchId: (core.R && core.R.branches && core.R.branches[0] && core.R.branches[0].id) || null,
      endYear: core.D.meta.endYear
    };
  });
  const branchId = meta.branchId, endYear = meta.endYear;

  // 史官视角（默认）：清视角 + 选分支 + 拨终年 → 偏离列表用「明方/清方」而非「我方」
  const base = await page.evaluate((bid, ey)=>{
    const s=document.getElementById('vpSel'); s.value=''; s.dispatchEvent(new Event('change',{bubbles:true}));
    if(bid){ const b=document.getElementById('br_'+bid); if(b && !b.classList.contains('active')) b.click(); }
    const yr=document.getElementById('year'); yr.value=ey; yr.dispatchEvent(new Event('input',{bubbles:true}));
    return { divl: document.getElementById('divl').textContent, card: document.getElementById('vpCard').textContent, opt0: document.getElementById('vpSel').options[0].textContent };
  }, branchId, endYear);

  // 选杜松（明方总兵）
  const dusong = await page.evaluate((ey)=>{
    const s=document.getElementById('vpSel'); s.value='dusong'; s.dispatchEvent(new Event('change',{bubbles:true}));
    const yr=document.getElementById('year'); yr.value=ey; yr.dispatchEvent(new Event('input',{bubbles:true}));
    return { divl: document.getElementById('divl').textContent, card: document.getElementById('vpCard').textContent };
  }, endYear);

  // 选努尔哈赤（后金）
  const nurhaci = await page.evaluate((ey)=>{
    const s=document.getElementById('vpSel'); s.value='nurhaci'; s.dispatchEvent(new Event('change',{bubbles:true}));
    const yr=document.getElementById('year'); yr.value=ey; yr.dispatchEvent(new Event('input',{bubbles:true}));
    return { divl: document.getElementById('divl').textContent, card: document.getElementById('vpCard').textContent };
  }, endYear);

  await browser.close(); server.close();

  let pass=true; const ok=(c,m)=>{ console.log((c?'  ✓ ':'  ✗ ')+m); if(!c)pass=false; };
  console.log('== 视角切换探针（scene='+(SCENE||'默认/liaodong')+'）==');
  ok(sel.exists, '视角选择器存在');
  if(SCENE==='sarhu'){
    ok(sel.optionCount>1, '选择器含参战者选项 → '+sel.optionCount+' 项');
    ok(sel.opts.some(t=>t.indexOf('杜松')>=0), '选项含杜松（一路主将）');
    ok(/史官/.test(base.opt0), '默认选项为史官视角（中立）');
    ok(/明方|清方/.test(base.divl) && !/我方/.test(base.divl), '史官视角偏离列表用「明方/清方」而非「我方」（不翻转）');
    ok(/杜松/.test(dusong.card) && /我方/.test(dusong.card) && /抢在/.test(dusong.card), '选杜松：卡片含姓名+我方(明方→我方)+其目标(抢在…)');
    ok(/我方/.test(dusong.divl), '选杜松：偏离列表翻转出「我方」');
    ok(/努尔哈赤/.test(nurhaci.card) && /我方/.test(nurhaci.card), '选努尔哈赤：卡片含姓名+我方（清方→我方）');
    ok(/敌方/.test(nurhaci.divl), '选努尔哈赤：偏离列表翻转出「敌方」（明方→敌方）');
  } else {
    ok(sel.disabled, '非 sarhu 场景：选择器禁用');
    ok(/暂无多视角数据/.test(sel.card), '非 sarhu 场景：卡片降级提示');
  }
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
  const port = 9240 + Math.floor(Math.random()*10);
  const child = require('child_process').spawn(edge, ['--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--no-default-browser-check','--remote-debugging-port='+port,'--user-data-dir='+os.tmpdir()+'/probe-vp-'+process.pid,'about:blank'], {stdio:'ignore'});
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
