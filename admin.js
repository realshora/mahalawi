(function(){
'use strict';
if(location.origin!=='https://elmahalawi.pages.dev'&&!['localhost','127.0.0.1'].includes(location.hostname)){location.replace('https://elmahalawi.pages.dev/admin.html');return;}
var D=document,model=null,dirty=false,busy=false,reauth=false;
function $(id){return D.getElementById(id);}
function node(tag,cls,text){var e=D.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;}
function notice(text,error){$('editorNotice').textContent=text;$('editorNotice').classList.toggle('error',!!error);}
async function api(path,options){var r=await fetch('/api/'+path,{credentials:'same-origin',cache:'no-store',...options});var data;try{data=await r.json();}catch(e){throw new Error('تعذر الاتصال بالخدمة. جرب تاني بعد شوية.');}if(!r.ok){var error=new Error(data.error||'حصلت مشكلة، جرب تاني.');error.status=r.status;throw error;}return data;}
function state(){
 $('dirtyLabel').textContent=busy?'جاري الحفظ...':dirty?'عندك تعديلات لسه ما اتنشرتش':'كل التعديلات محفوظة';$('saveButton').disabled=busy||!dirty;$('reloadButton').disabled=busy;$('logoutButton').disabled=busy;
 if(model){var shown=model.items.filter(function(i){return i.available;}).length;var date=new Date(model.updatedAt);$('stats').textContent=model.items.length+' صنف، '+shown+' ظاهر للزوار'+(Number.isNaN(date.getTime())?'':' • آخر حفظ '+date.toLocaleString('ar-EG',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}));}
}
function mark(){dirty=true;notice('التعديلات في المعاينة بس. دوس حفظ ونشر عشان تظهر للزوار.');state();}
function options(select,all){select.replaceChildren();if(all){var opt=node('option','','كل الأقسام');opt.value='';select.append(opt);}model.categories.forEach(function(c){var o=node('option','',c.emoji+' '+c.name);o.value=c.id;select.append(o);});}
function filtered(){var q=$('itemSearch').value.trim(),cat=$('categoryFilter').value;return model.items.filter(function(i){return (!q||i.name.includes(q))&&(cat===''||String(i.category)===cat);});}
function draw(){
 var list=$('itemList');list.replaceChildren();var rows=filtered();if(!rows.length)list.append(node('div','count-empty','مفيش أصناف مطابقة.'));
 rows.forEach(function(item){
  var card=node('article','card item'+(item.available?'':' unavailable'));card.dataset.id=item.id;
  function field(cls,label,control){var f=node('div',cls),l=node('label','',label);l.htmlFor=control.id;f.append(l,control);card.append(f);}
  var name=node('input');name.id='name-'+item.id;name.value=item.name;name.required=true;name.maxLength=80;name.oninput=function(){item.name=name.value;mark();};field('name-field','اسم الصنف',name);
  var cat=node('select');cat.id='cat-'+item.id;options(cat,false);cat.value=item.category;cat.onchange=function(){item.category=Number(cat.value);mark();};field('category-field','القسم',cat);
  var price=node('input');price.id='price-'+item.id;price.type='number';price.inputMode='decimal';price.min='0.01';price.max='100000';price.step='0.01';price.required=true;price.value=item.price;price.oninput=function(){item.price=price.value===''?null:Number(price.value);mark();};field('price-field','السعر بالجنيه',price);
  var vis=node('div','visibility'),cb=node('input'),lab=node('label','',item.available?'ظاهر للزوار':'مخفي');cb.id='visible-'+item.id;cb.type='checkbox';cb.checked=item.available;lab.htmlFor=cb.id;cb.onchange=function(){item.available=cb.checked;lab.textContent=item.available?'ظاهر للزوار':'مخفي';card.classList.toggle('unavailable',!item.available);mark();};vis.append(cb,lab);card.append(vis);
  var remove=node('button','remove','حذف الصنف');remove.type='button';remove.onclick=function(){if(!confirm('تحذف "'+item.name+'"؟ التغيير مش هيتنشر إلا بعد الحفظ.'))return;model.items=model.items.filter(function(i){return i.id!==item.id;});mark();draw();};card.append(remove);list.append(card);
 });state();
}
function showEditor(){ $('loginPanel').hidden=true;$('editorPanel').hidden=false;$('saveBar').hidden=false; }
function showLogin(){model=null;dirty=false;$('loginPanel').hidden=false;$('editorPanel').hidden=true;$('saveBar').hidden=true;$('adminPassword').value='';}
async function load(){var data=await api('manage');model=data;dirty=false;options($('newCategory'),false);options($('categoryFilter'),true);$('categoryFilter').value='';$('itemSearch').value='';showEditor();draw();notice('المنيو جاهز. تعديل الأسعار أو إضافة الأصناف بيتنشر بعد الحفظ.');}
$('loginForm').onsubmit=async function(event){event.preventDefault();$('loginNotice').textContent='';$('loginButton').disabled=true;try{await api('login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({password:$('adminPassword').value})});$('adminPassword').value='';if(reauth){reauth=false;showEditor();notice('دخلت تاني. راجع التعديلات ودوس حفظ ونشر.');state();}else await load();}catch(e){$('loginNotice').textContent=e.message;}finally{$('loginButton').disabled=false;}};
$('addForm').onsubmit=function(event){event.preventDefault();if(!model||busy)return;if(model.items.length>=500){notice('وصلت للحد الأقصى: ٥٠٠ صنف.',true);return;}var item={id:crypto.randomUUID(),category:Number($('newCategory').value),name:$('newName').value.trim(),price:Number($('newPrice').value),available:$('newAvailable').checked};if(!item.name||!Number.isFinite(item.price)||item.price<=0||item.price>100000)return;model.items.push(item);$('newName').value='';$('newPrice').value='';$('itemSearch').value='';$('categoryFilter').value=String(item.category);mark();draw();notice('الصنف اتضاف للمعاينة. دوس حفظ ونشر عشان تحفظ التعديل.');};
$('itemSearch').oninput=draw;$('categoryFilter').onchange=draw;
$('reloadButton').onclick=async function(){if(dirty&&!confirm('تحميل آخر نسخة هيلغي التعديلات اللي لسه ما اتحفظتش. تكمل؟'))return;try{await load();}catch(e){notice(e.message,true);}};
$('logoutButton').onclick=async function(){if(dirty&&!confirm('عندك تعديلات لسه ما اتحفظتش. تخرج من غير حفظ؟'))return;try{await api('logout',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'});showLogin();}catch(e){notice(e.message,true);}};
$('saveButton').onclick=async function(){
 if(!model||busy||!dirty)return;
 var bad=model.items.find(function(i){return !i.name.trim()||i.name.trim().length>80||typeof i.price!=='number'||!Number.isFinite(i.price)||i.price<=0||i.price>100000||Math.abs(i.price*100-Math.round(i.price*100))>0.00001;});
 if(bad){notice('راجع اسم وسعر الصنف: '+(bad.name||'صنف بدون اسم')+'. السعر لازم يكون موجب وبرقمين عشريين بحد أقصى.',true);return;}
 if(!model.items.length){notice('لازم تسيب صنف واحد على الأقل.',true);return;}
 busy=true;state();$('editorPanel').inert=true;
 try{var result=await api('manage',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({version:model.version,items:model.items})});model.version=result.version;model.updatedAt=result.updatedAt;dirty=false;notice('اتحفظ واتنشر ✅ أي زائر يفتح المنيو دلوقتي هيشوف النسخة الجديدة.');}
 catch(e){notice(e.message,true);if(e.status===401){reauth=true;$('editorPanel').hidden=true;$('saveBar').hidden=true;$('loginPanel').hidden=false;$('loginNotice').textContent='انتهت الجلسة. ادخل تاني، تعديلاتك لسه موجودة في الصفحة.';}}
 finally{busy=false;$('editorPanel').inert=false;state();}
};
window.addEventListener('beforeunload',function(e){if(dirty){e.preventDefault();e.returnValue='';}});
(async function(){try{var session=await api('session');if(session.authenticated)await load();}catch(e){$('loginNotice').textContent=e.message;}})();
})();
