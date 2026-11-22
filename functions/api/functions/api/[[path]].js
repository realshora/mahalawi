// Central menu storage. Credentials live only in encrypted hosting settings.
const SEED = {"categories":[{"id":0,"name":"البيتزا","emoji":"🍕"},{"id":1,"name":"كريبات الفراخ","emoji":"🐔"},{"id":2,"name":"كريبات اللحوم","emoji":"🥩"},{"id":3,"name":"سندوتش سوري","emoji":"🌯"},{"id":4,"name":"كريبات السي فود","emoji":"🦐"},{"id":5,"name":"مكرونات ريد صوص","emoji":"🍝"},{"id":6,"name":"مكرونات وايت صوص","emoji":"🥛"},{"id":7,"name":"كالزوني","emoji":"🥟"},{"id":8,"name":"القاضية ممكن","emoji":"👑"}],"items":[{"id":"item-001","category":0,"name":"مارجريتا","price":150.0,"available":true},{"id":"item-002","category":0,"name":"ميكس جبن","price":150.0,"available":true},{"id":"item-003","category":0,"name":"تشكن رانش","price":150.0,"available":true},{"id":"item-004","category":0,"name":"مشوي صدور","price":150.0,"available":true},{"id":"item-005","category":0,"name":"شاورما جريل","price":150.0,"available":true},{"id":"item-006","category":0,"name":"سوبر سوبريم","price":150.0,"available":true},{"id":"item-007","category":0,"name":"زنجر","price":150.0,"available":true},{"id":"item-008","category":0,"name":"ميكس دجاج","price":150.0,"available":true},{"id":"item-009","category":0,"name":"لحم مفروم","price":150.0,"available":true},{"id":"item-010","category":0,"name":"هوت دوج","price":150.0,"available":true},{"id":"item-011","category":0,"name":"سجق","price":150.0,"available":true},{"id":"item-012","category":0,"name":"بسطرمة","price":150.0,"available":true},{"id":"item-013","category":0,"name":"ميكس لحوم","price":150.0,"available":true},{"id":"item-014","category":1,"name":"بانيه","price":50.0,"available":true},{"id":"item-015","category":1,"name":"كرسبي","price":60.0,"available":true},{"id":"item-016","category":1,"name":"كرنشي","price":60.0,"available":true},{"id":"item-017","category":1,"name":"زنجر","price":70.0,"available":true},{"id":"item-018","category":1,"name":"فاهيتا","price":70.0,"available":true},{"id":"item-019","category":1,"name":"شيش طاووق","price":70.0,"available":true},{"id":"item-020","category":1,"name":"مشكل فراخ","price":100.0,"available":true},{"id":"item-021","category":1,"name":"كونو","price":130.0,"available":true},{"id":"item-022","category":1,"name":"شاورما فراخ","price":100.0,"available":true},{"id":"item-023","category":2,"name":"كفتة","price":80.0,"available":true},{"id":"item-024","category":2,"name":"سجق","price":80.0,"available":true},{"id":"item-025","category":2,"name":"هوت دوج","price":50.0,"available":true},{"id":"item-026","category":2,"name":"سوسيس","price":50.0,"available":true},{"id":"item-027","category":2,"name":"لحمة مفرومة","price":70.0,"available":true},{"id":"item-028","category":2,"name":"برجر","price":70.0,"available":true},{"id":"item-029","category":2,"name":"مشكل لحوم","price":100.0,"available":true},{"id":"item-030","category":2,"name":"كونو","price":130.0,"available":true},{"id":"item-031","category":3,"name":"بطاطس","price":30.0,"available":true},{"id":"item-032","category":3,"name":"بطاطس بانيه","price":35.0,"available":true},{"id":"item-033","category":3,"name":"بطاطس زنجر","price":40.0,"available":true},{"id":"item-034","category":3,"name":"زنجر","price":50.0,"available":true},{"id":"item-035","category":3,"name":"بانيه","price":40.0,"available":true},{"id":"item-036","category":3,"name":"كرانشي - كرسبي","price":40.0,"available":true},{"id":"item-037","category":4,"name":"كريب جمبري مقلي","price":150.0,"available":true},{"id":"item-038","category":4,"name":"كريب جمبري مشوي","price":150.0,"available":true},{"id":"item-039","category":4,"name":"كريب فياجرا","price":170.0,"available":true},{"id":"item-040","category":5,"name":"فراخ","price":80.0,"available":true},{"id":"item-041","category":5,"name":"لحمة","price":80.0,"available":true},{"id":"item-042","category":5,"name":"كبدة","price":70.0,"available":true},{"id":"item-043","category":5,"name":"جمبري","price":150.0,"available":true},{"id":"item-044","category":5,"name":"ميكس لحوم","price":100.0,"available":true},{"id":"item-045","category":5,"name":"مكرونة سجق","price":80.0,"available":true},{"id":"item-046","category":6,"name":"نجرسكو فراخ","price":100.0,"available":true},{"id":"item-047","category":6,"name":"نجرسكو لحوم","price":100.0,"available":true},{"id":"item-048","category":6,"name":"جمبري","price":150.0,"available":true},{"id":"item-049","category":6,"name":"فياجرا","price":150.0,"available":true},{"id":"item-050","category":7,"name":"دجاج جريل","price":130.0,"available":true},{"id":"item-051","category":7,"name":"زنجر","price":130.0,"available":true},{"id":"item-052","category":7,"name":"ميكس دجاج","price":130.0,"available":true},{"id":"item-053","category":7,"name":"لحم مفروم","price":130.0,"available":true},{"id":"item-054","category":7,"name":"ميكس لحوم","price":130.0,"available":true},{"id":"item-055","category":7,"name":"جمبري","price":130.0,"available":true},{"id":"item-056","category":7,"name":"سي فود","price":130.0,"available":true},{"id":"item-057","category":8,"name":"تشكن","price":130.0,"available":true},{"id":"item-058","category":8,"name":"شيش","price":130.0,"available":true},{"id":"item-059","category":8,"name":"زنجر","price":130.0,"available":true},{"id":"item-060","category":8,"name":"مشكل فراخ","price":130.0,"available":true},{"id":"item-061","category":8,"name":"جمبري","price":130.0,"available":true},{"id":"item-062","category":8,"name":"سي فود","price":130.0,"available":true},{"id":"item-063","category":8,"name":"مشكل لحوم","price":130.0,"available":true},{"id":"item-064","category":8,"name":"جريمة أكل","price":130.0,"available":true},{"id":"item-065","category":8,"name":"المشنقة","price":130.0,"available":true}]};
const COOKIE = '__Host-mahalawi_admin';
const ORIGIN = 'https://elmahalawi.pages.dev';
const encoder = new TextEncoder();
const schemas = new WeakMap();
function json(data, status=200, extra={}) {
  return new Response(JSON.stringify(data), {status, headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer',...extra}});
}
async function init(db) {
  if (!schemas.has(db)) schemas.set(db, db.batch([
    db.prepare('CREATE TABLE IF NOT EXISTS menu_state (id INTEGER PRIMARY KEY CHECK(id=1),version INTEGER NOT NULL,body TEXT NOT NULL,updated_at TEXT NOT NULL)'),
    db.prepare('CREATE TABLE IF NOT EXISTS menu_history (id INTEGER PRIMARY KEY AUTOINCREMENT,version INTEGER NOT NULL,body TEXT NOT NULL,updated_at TEXT NOT NULL)'),
    db.prepare('CREATE TABLE IF NOT EXISTS login_attempts (key TEXT PRIMARY KEY,n INTEGER NOT NULL,expires INTEGER NOT NULL)'),
    db.prepare('INSERT OR IGNORE INTO menu_state(id,version,body,updated_at) VALUES(1,0,?,?)').bind(JSON.stringify(SEED.items),new Date().toISOString())
  ]).catch(e=>{schemas.delete(db);throw e;}));
  await schemas.get(db);
}
function hex(buf){return Array.from(new Uint8Array(buf),b=>b.toString(16).padStart(2,'0')).join('');}
async function hash(s){return new Uint8Array(await crypto.subtle.digest('SHA-256',encoder.encode(s)));}
async function same(a,b){const [x,y]=await Promise.all([hash(a),hash(b)]);let n=0;for(let i=0;i<x.length;i++)n|=x[i]^y[i];return n===0;}
async function key(secret){return crypto.subtle.importKey('raw',encoder.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign','verify']);}
async function token(secret){const raw=btoa(JSON.stringify({exp:Date.now()+43200000,nonce:crypto.randomUUID()})).replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_');return raw+'.'+hex(await crypto.subtle.sign('HMAC',await key(secret),encoder.encode(raw)));}
async function authenticated(req, secret){
  if(!secret) return false;
  try {
    const val=(req.headers.get('Cookie')||'').split(';').map(s=>s.trim()).find(s=>s.startsWith(COOKIE+'='));
    if(!val)return false;const t=val.slice(COOKIE.length+1);const parts=t.split('.');
    if(parts.length!==2||!/^[A-Za-z0-9_-]{1,300}$/.test(parts[0])||!/^[a-f0-9]{64}$/.test(parts[1]))return false;
    const sig=Uint8Array.from(parts[1].match(/../g),s=>parseInt(s,16));
    if(!await crypto.subtle.verify('HMAC',await key(secret),sig,encoder.encode(parts[0])))return false;
    const p=JSON.parse(atob(parts[0].replace(/-/g,'+').replace(/_/g,'/')));
    return Number.isFinite(p.exp)&&p.exp>Date.now()&&p.exp<Date.now()+43210000;
  }catch{return false;}
}
async function body(req){if(Number(req.headers.get('Content-Length')||0)>180000)throw new Error('too_large');const s=await req.text();if(encoder.encode(s).length>180000)throw new Error('too_large');return JSON.parse(s);}
function validItems(items){
  if(!Array.isArray(items)||items.length<1||items.length>500)throw new Error('invalid_menu');
  const ids=new Set();
  return items.map(i=>{
    if(!i||typeof i.id!=='string'||!/^[A-Za-z0-9_-]{1,80}$/.test(i.id)||ids.has(i.id))throw new Error('invalid_item');ids.add(i.id);
    if(!Number.isInteger(i.category)||i.category<0||i.category>8||typeof i.name!=='string'||!i.name.trim()||i.name.trim().length>80||typeof i.available!=='boolean')throw new Error('invalid_item');
    if(typeof i.price!=='number'||!Number.isFinite(i.price)||i.price<=0||i.price>100000||Math.abs(i.price*100-Math.round(i.price*100))>0.00001)throw new Error('invalid_price');
    return {id:i.id,category:i.category,name:i.name.trim(),price:Math.round(i.price*100)/100,available:i.available};
  });
}
export async function onRequest(context){
 const {request:req,env}=context;const url=new URL(req.url);const path=url.pathname.replace(/\/$/,'');
 const cors=req.headers.get('Origin')==='https://realshora.github.io'?{'Access-Control-Allow-Origin':'https://realshora.github.io','Vary':'Origin'}:{};
 try {
  if(req.method==='OPTIONS'&&path==='/api/menu')return new Response(null,{status:204,headers:{...cors,'Access-Control-Allow-Methods':'GET, OPTIONS','Access-Control-Allow-Headers':'Content-Type','Access-Control-Max-Age':'86400'}});
  if(!env.MENU_DB||!env.ADMIN_PASSWORD)return json({error:'الخدمة تحت الإعداد، حاول بعد شوية.'},503,cors);
  await init(env.MENU_DB);
  if(req.method==='GET'&&path==='/api/menu'){
    const row=await env.MENU_DB.prepare('SELECT version,body,updated_at FROM menu_state WHERE id=1').first();
    return json({version:row.version,updatedAt:row.updated_at,categories:SEED.categories,items:JSON.parse(row.body).filter(i=>i.available)},200,cors);
  }
  const auth=await authenticated(req,env.ADMIN_PASSWORD);
  if(req.method==='GET'&&path==='/api/session')return json({authenticated:auth});
  if(req.method==='GET'&&path==='/api/manage'){
    if(!auth)return json({error:'سجل الدخول الأول.'},401);
    const row=await env.MENU_DB.prepare('SELECT version,body,updated_at FROM menu_state WHERE id=1').first();
    return json({version:row.version,updatedAt:row.updated_at,categories:SEED.categories,items:JSON.parse(row.body)});
  }
  if(!['POST','PUT'].includes(req.method))return json({error:'غير موجود.'},404);
  if(req.headers.get('Origin')!==ORIGIN||url.origin!==ORIGIN)return json({error:'طلب غير مسموح.'},403);
  if(!(req.headers.get('Content-Type')||'').toLowerCase().startsWith('application/json'))return json({error:'صيغة الطلب غير صحيحة.'},415);
  if(req.method==='POST'&&path==='/api/login'){
    const now=Math.floor(Date.now()/1000);const rateKey=hex(await hash((req.headers.get('CF-Connecting-IP')||'unknown')+':'+Math.floor(now/900)));
    const rate=await env.MENU_DB.prepare('INSERT INTO login_attempts(key,n,expires) VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET n=n+1 RETURNING n').bind(rateKey,now+1800).first();
    if(rate.n>10)return json({error:'محاولات كتير. استنى ١٥ دقيقة وجرب تاني.'},429,{'Retry-After':'900'});
    const data=await body(req);
    if(typeof data.password!=='string'||data.password.length>256||!await same(data.password,env.ADMIN_PASSWORD))return json({error:'كلمة السر مش صحيحة.'},401);
    await env.MENU_DB.prepare('DELETE FROM login_attempts WHERE key=? OR expires<?').bind(rateKey,now).run();
    return json({ok:true},200,{'Set-Cookie':COOKIE+'='+await token(env.ADMIN_PASSWORD)+'; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=43200'});
  }
  if(!auth)return json({error:'انتهت الجلسة. سجل الدخول تاني.'},401);
  if(req.method==='POST'&&path==='/api/logout')return json({ok:true},200,{'Set-Cookie':COOKIE+'=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0'});
  if(req.method==='PUT'&&path==='/api/manage'){
    const data=await body(req);if(!Number.isSafeInteger(data.version)||data.version<0)return json({error:'نسخة غير صحيحة.'},400);
    const items=validItems(data.items),at=new Date().toISOString();
    const results=await env.MENU_DB.batch([
      env.MENU_DB.prepare('INSERT INTO menu_history(version,body,updated_at) SELECT version,body,updated_at FROM menu_state WHERE id=1 AND version=?').bind(data.version),
      env.MENU_DB.prepare('UPDATE menu_state SET body=?,version=version+1,updated_at=? WHERE id=1 AND version=?').bind(JSON.stringify(items),at,data.version)
    ]);
    if(results[1].meta.changes!==1)return json({error:'حد نشر تعديل أحدث. حمّل النسخة الجديدة قبل الحفظ عشان ما يضيعش شغله.'},409);
    context.waitUntil(env.MENU_DB.prepare('DELETE FROM menu_history WHERE id NOT IN (SELECT id FROM menu_history ORDER BY id DESC LIMIT 20)').run());
    return json({ok:true,version:data.version+1,updatedAt:at});
  }
  return json({error:'غير موجود.'},404);
 }catch(e){if(['invalid_menu','invalid_item','invalid_price','too_large'].includes(e.message)||e instanceof SyntaxError)return json({error:'راجع أسماء الأصناف والأسعار. السعر لازم يكون رقم موجب، بحد أقصى رقمين بعد العلامة.'},400);return json({error:'تعذر الاتصال بقاعدة البيانات. جرب تاني، مفيش تعديل اتحفظ.'},503,cors);}
  }
