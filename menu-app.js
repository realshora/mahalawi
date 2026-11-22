/* Menu and cart. The public menu is read from the central server, never local-only edits. */
(function(){
'use strict';
var D=document,cart={},items=[],categories=[],ready=false,loading=null,lastLoaded=0,currentPage='home',routeTimer;
var api=location.hostname==='realshora.github.io'?'https://elmahalawi.pages.dev/api/menu':'/api/menu';
function el(tag,cls,text){var e=D.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;}
function fmt(n){return new Intl.NumberFormat('ar-EG',{maximumFractionDigits:2}).format(n)+' ج.م';}
var notice=el('div','menu-live-status','جاري تحميل أحدث المنيو والأسعار...');notice.setAttribute('role','status');D.getElementById('searchInput').parentElement.insertAdjacentElement('afterend',notice);
function message(t,error){notice.textContent=t;notice.classList.toggle('error',!!error);notice.hidden=!t;}
function itemName(it){var c=categories.find(function(c){return c.id===it.category;});return (c?c.name+' - ':'')+it.name;}
function visibleMenu(){return items.filter(function(i){return i.available;});}
function total(){return Object.keys(cart).reduce(function(t,id){return t+cart[id].qty*cart[id].price;},0);}
var cartStatus=el('div','menu-live-status');cartStatus.setAttribute('role','status');D.getElementById('sheetLines').insertAdjacentElement('beforebegin',cartStatus);
function render(){
 cartStatus.hidden=ready;cartStatus.textContent=ready?'':'بنراجع أحدث الأسعار. لو التحميل متأخر ارجع للمنيو وجرب تحديثه.';
 var q=Object.keys(cart).reduce(function(n,id){return n+cart[id].qty;},0);
 D.querySelectorAll('.card[data-id]').forEach(function(c){var id=c.dataset.id;c.querySelector('.qty').textContent=cart[id]?cart[id].qty:0;c.classList.toggle('in',!!cart[id]);});
 ['cartBadge','cartBadge2'].forEach(function(id){var e=D.getElementById(id);e.textContent=q;e.classList.toggle('show',q>0);});
 var box=D.getElementById('sheetLines');box.replaceChildren();
 if(!q)box.append(el('div','empty','السلة فاضية.. زوّد حاجة من المنيو 🍕'));
 else Object.keys(cart).forEach(function(id){var it=cart[id],line=el('div','sline'),info=el('div','linfo'),step=el('div','stepper mini');info.append(el('div','lname',it.name),el('div','lunit',fmt(it.price)+' للصنف'));var p=el('button','plus','+'),m=el('button','minus','−');p.type=m.type='button';p.setAttribute('aria-label','زوّد '+it.name);m.setAttribute('aria-label','قلل '+it.name);p.onclick=function(){it.qty++;render();};m.onclick=function(){it.qty--;if(!it.qty)delete cart[id];render();};step.append(p,el('span','qty',it.qty),m);line.append(info,step,el('div','ltotal',fmt(it.qty*it.price)));box.append(line);});
 D.getElementById('sheetTotal').textContent=fmt(total());D.getElementById('confirmBtn').disabled=!ready||!q;
}
function add(id,delta){if(!ready)return;var it=items.find(function(i){return i.id===id&&i.available;});if(!it)return;if(!cart[id]&&delta>0)cart[id]={qty:0,price:it.price,name:itemName(it)};if(!cart[id])return;cart[id].qty+=delta;if(cart[id].qty<=0)delete cart[id];render();}
function rebuild(){
 D.querySelectorAll('.menu-sec').forEach(function(sec){var cid=+sec.dataset.sec,list=sec.querySelector('.list'),group=visibleMenu().filter(function(i){return i.category===cid;});list.replaceChildren();sec.querySelector('.cnt').textContent=group.length+' صنف';group.forEach(function(it){var row=el('div','row card');row.dataset.id=it.id;row.dataset.name=itemName(it);row.dataset.price=it.price;var info=el('div','info'),step=el('div','stepper');info.append(el('div','name',it.name),el('div','price',fmt(it.price)));var p=el('button','plus','+'),m=el('button','minus','−');p.type=m.type='button';p.setAttribute('aria-label','زود '+it.name);m.setAttribute('aria-label','قلل '+it.name);p.onclick=function(){add(it.id,1);};m.onclick=function(){add(it.id,-1);};step.append(p,el('span','qty','0'),m);row.append(info,step);list.append(row);});sec.dataset.empty=group.length?'false':'true';});
 applyFilter();render();
}
async function loadMenu(force){
 if(loading)return loading;if(!force&&ready&&Date.now()-lastLoaded<60000)return {changed:false};
 var prior=ready;D.getElementById('confirmBtn').disabled=true;
 loading=(async function(){try{
  var res=await fetch(api,{cache:'no-store',credentials:'omit'});if(!res.ok)throw new Error('menu');var data=await res.json();if(!Array.isArray(data.items)||!Array.isArray(data.categories))throw new Error('menu');
  var changed=false;items=data.items;categories=data.categories;
  Object.keys(cart).forEach(function(id){var item=items.find(function(i){return i.id===id&&i.available;});if(!item){delete cart[id];changed=true;}else{if(cart[id].price!==item.price||cart[id].name!==itemName(item))changed=true;cart[id].price=item.price;cart[id].name=itemName(item);}});
  ready=true;lastLoaded=Date.now();rebuild();message('');D.getElementById('page-menu').classList.remove('menu-waiting');
  if(changed)alert('المنيو اتحدث. راجع الأصناف والإجمالي في السلة قبل تأكيد الطلب.');
  return {changed:changed};
 }catch(err){ready=false;D.getElementById('page-menu').classList.add('menu-waiting');message('تعذر تحميل أحدث المنيو والأسعار. حاول تاني من زر تحديث المنيو.',true);render();if(force)throw err;return {changed:false,error:true};}
 finally{loading=null;}})();return loading;
}
var retry=el('button','menu-refresh','تحديث المنيو');retry.type='button';retry.onclick=function(){message('جاري تحديث المنيو...');loadMenu(true).catch(function(){});};notice.insertAdjacentElement('afterend',retry);
function applyFilter(){var q=D.getElementById('searchInput').value.trim(),active=D.querySelector('.chip.active'),cid=active?active.dataset.chip:'-1';D.querySelectorAll('.menu-sec').forEach(function(s){var any=false;s.querySelectorAll('.row').forEach(function(r){var ok=!q||r.dataset.name.includes(q);r.classList.toggle('hidden',!ok);if(ok)any=true;});s.classList.toggle('hidden',s.dataset.empty==='true'||!any||(!q&&cid!=='-1'&&s.dataset.sec!==cid));});}
D.querySelectorAll('.chip').forEach(function(ch){ch.onclick=function(){D.querySelectorAll('.chip').forEach(function(c){c.classList.remove('active');});ch.classList.add('active');D.getElementById('searchInput').value='';applyFilter();};});D.getElementById('searchInput').addEventListener('input',applyFilter);
D.getElementById('cartTop').onclick=function(){location.hash='cart';};D.getElementById('cartNav').addEventListener('click',function(){location.hash='cart';});D.getElementById('scrim').onclick=function(){location.hash='menu';};D.getElementById('clearBtn').onclick=function(){cart={};render();};
var addr=D.getElementById('addrInput');try{addr.value=localStorage.getItem('mahalawi_addr')||'';}catch(e){}addr.oninput=function(){addr.classList.remove('miss');try{localStorage.setItem('mahalawi_addr',addr.value);}catch(e){}};
D.getElementById('confirmBtn').addEventListener('click',async function(){
 if(!ready||!Object.keys(cart).length)return;var address=addr.value.trim();if(!address){addr.classList.add('miss');addr.focus();return;}
 try{var result=await loadMenu(true);if(result.changed||!Object.keys(cart).length)return;}catch(e){alert('مش قادرين نراجع أحدث الأسعار دلوقتي. حاول تاني بعد شوية.');return;}
 var lines=['طلب جديد من موقع المحلاوي 👑',''];Object.keys(cart).forEach(function(id){var it=cart[id];lines.push(it.qty+' × '+it.name+' = '+fmt(it.qty*it.price));});lines.push('----------','العنوان: '+address,'الإجمالي: '+fmt(total()));
 var target='https://wa.me/201124050108?text='+encodeURIComponent(lines.join('\n'));
 // Navigation after the live price check works even when browsers block async popups.
 location.href=target;
});
function route(){var target=location.hash.slice(1)||'home';if(!['home','menu','cart','location'].includes(target))target='home';clearTimeout(routeTimer);D.querySelectorAll('[data-route]').forEach(function(a){var on=a.dataset.route===target;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});if(target==='menu'||target==='cart')loadMenu(false);if(target===currentPage)return;D.getElementById('page-'+currentPage).classList.add('leaving');routeTimer=setTimeout(function(){D.querySelectorAll('.app-page').forEach(function(p){p.hidden=true;p.classList.remove('leaving');});D.getElementById('page-'+target).hidden=false;currentPage=target;scrollTo(0,0);},160);}
D.getElementById('page-menu').classList.add('menu-waiting');D.querySelectorAll('.plus,.minus').forEach(function(b){b.disabled=true;});window.addEventListener('hashchange',route);D.addEventListener('visibilitychange',function(){if(!D.hidden&&ready&&Date.now()-lastLoaded>60000)loadMenu(false);});render();loadMenu(false);route();
})();
