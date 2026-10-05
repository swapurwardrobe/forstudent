const IMG=["images/0.jpg", "images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg", "images/11.jpg", "images/12.jpg", "images/13.jpg", "images/14.jpg", "images/15.jpg"];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
$$('img[data-i]').forEach(i=>i.src=IMG[i.dataset.i]);
const U=[["Minh Anh","4.9","Bách Khoa"],["Hoàng Nam","4.8","Ngoại Thương"],["Thu Hà","5.0","Kinh tế Quốc dân"],["Đức Anh","4.7","FPT"],["Lan Chi","4.9","Y Hà Nội"],["Quang Huy","4.8","Quốc Gia"]];
const CATS=["Tất cả","Sách vở","Đồ điện tử","Quần áo/Phụ kiện","Đồ KTX"];
// [tên, loại, tình trạng %, địa điểm, người đăng, muốn đổi]
const I=[["Áo Polo thể thao",3,90,"KTX Khu A – Bách Khoa",0,"Balo hoặc túi đeo chéo"],["Áo khoác thể thao",3,85,"KTX Khu B – Ngoại Thương",1,"Giày thể thao"],["Bàn học gỗ gấp",4,92,"KTX Mễ Trì – Quốc Gia",5,"Ghế xoay"],["Boot cao gót da lộn",3,80,"Cổng Y Hà Nội",4,"Váy hoặc giày"],["Ghế xoay văn phòng",4,88,"KTX Khu A – Bách Khoa",0,"Bàn học gỗ"],["Túi đeo chéo",3,95,"Thư viện FPT",3,"Sách chuyên ngành"],["Giày slip-on kẻ caro",3,98,"KTX Khu B – Ngoại Thương",1,"Áo khoác"],["Kệ để giày gỗ 3 tầng",4,90,"KTX Mễ Trì – Quốc Gia",5,"Quạt hoặc nồi cơm"],["Máy xay sinh tố",2,95,"KTX Kinh tế Quốc dân",2,"Nồi cơm điện"],["Giáo trình Kinh tế chính trị Mác–Lênin",1,90,"Thư viện FPT",3,"Giáo trình Triết học"],["Nồi cơm điện",2,85,"KTX Khu A – Bách Khoa",0,"Máy xay sinh tố"],["Combo sách cũ 20 cuốn",1,75,"Thư viện Kinh tế Quốc dân",2,"Đồ KTX"],["Quần short bò rách",3,90,"Cổng Y Hà Nội",4,"Váy"],["Quạt đứng Senko",4,85,"KTX Khu A – Bách Khoa",-1,"Nồi cơm điện"],["Bộ giáo trình Triết học",1,88,"Thư viện Ngoại Thương",-1,"Sách luật"],["Váy xanh baby",3,95,"Cổng Y Hà Nội",4,"Quần short bò"]];
const MINE=[5,11,13,14];
let st={v:'g',pref:new Set(),ver:0,login:0,wish:'',conv:[],nt:[],done:[],rv:[],pf:0,i:0,c:0,s:'',cp:'',so:'new',saved:new Set(),act:null,
posts:[{a:'Minh Anh',ty:1,tm:'2 giờ trước',t:'Review bộ giáo trình Triết học mình mới đổi được: sách còn mới 90%, bạn đổi còn note sẵn các phần trọng tâm. Đổi bằng cái quạt cũ mà tiết kiệm được cả triệu tiền sách. 5 sao cho bạn đổi!',img:IMG[14],n:48,c:12},
{a:'Lan Chi',ty:2,tm:'5 giờ trước',t:'Outfit hôm nay 100% đồ swap: váy xanh baby + boot da lộn. Tổng chi phí 0đ mà vẫn xinh 😎',img:IMG[15],n:126,c:31},
{a:'Thu Hà',ty:3,tm:'Hôm qua',t:'5 mẹo swap thật hời:\n1. Chụp ảnh đủ sáng, đủ góc.\n2. Ghi rõ món bạn muốn đổi lấy.\n3. Đổi theo combo để cân giá trị.\n4. Hẹn ở thư viện hoặc cổng trường.\n5. Xem điểm cá nhân của bạn đổi trước khi gặp.',n:204,c:57},
{a:'Quang Huy',ty:1,tm:'Hôm qua',t:'Bàn học gỗ gấp đổi được từ KTX bên cạnh: chắc chắn, không cong vênh, gấp gọn nhét gầm giường. Đáng hơn mua mới nhiều.',img:IMG[2],n:37,c:8},
{a:'Hoàng Nam',ty:2,tm:'2 ngày trước',t:'Góc học tập KTX full đồ swap: bàn gỗ, ghế xoay, kệ 3 tầng. Cả setup chưa tới một ly trà sữa 🧋',img:IMG[4],n:89,c:19},
{a:'Đức Anh',ty:3,tm:'3 ngày trước',t:'Tips săn giáo trình đầu kỳ: đăng đồ cũ ngay tuần đầu học kỳ vì lúc này nhu cầu cao nhất. Gắn đúng tên môn để người cần dễ tìm.',n:73,c:14}]};
const nm=i=>I[i][0],usr=i=>I[i][4]<0?["Bạn","5.0","Bách Khoa"]:U[I[i][4]];
function list(){let L=I.map((_,i)=>i).filter(i=>!MINE.includes(i)&&(!st.c||CATS[st.c]=="Quần áo/Phụ kiện"&&I[i][1]==3||I[i][1]==st.c)&&(!st.cp||usr(i)[2]==st.cp)&&(nm(i)+I[i][3]).toLowerCase().includes(st.s));
 if(st.so=='cond')L.sort((a,b)=>I[b][2]-I[a][2]);if(st.so=='rate')L.sort((a,b)=>usr(b)[1]-usr(a)[1]);if(st.pref.size&&st.so=='new')L.sort((a,b)=>st.pref.has(I[b][1])-st.pref.has(I[a][1]));return L}
const card=(i,lite)=>{const [n,,d,l,,w]=I[i],u=usr(i);return `<article class="card" data-id="${i}"><div class="ph"><img src="${IMG[i]}" alt="${n}" draggable="false"><span class="tag">Mới ${d}%</span><button class="bm" data-bm="${i}" aria-label="Lưu">${st.saved.has(i)?'❤️':'🤍'}</button></div><div class="bd"><h3>${n}</h3>${st.pref.has(I[i][1])?'<span class="vf" style="align-self:flex-start">✨ Hợp với bạn</span>':''}<div class="loc">📍 ${l}</div><div class="us"><i class="av">${u[0][0]}</i><b>${u[0]}</b><span class="vf">✓ Verified Student 🎓</span><span>${u[1]} ★</span></div><div class="wn">Muốn đổi: ${w}</div>${lite?'':`<div class="ac"><button class="btn b3" data-offer="${i}">🔄 Gửi offer</button><button class="btn b4" data-chat="${i}" aria-label="Chat">💬</button></div>`}</div></article>`};
function render(){
 $('#fl').innerHTML=CATS.map((c,i)=>`<button class="ch ${st.c==i?'on':''}" data-c="${i}">${c}</button>`).join('')+`<select id="cp" aria-label="Cơ sở"><option value="">Tất cả trường</option>${U.map(u=>`<option ${st.cp==u[2]?'selected':''}>${u[2]}</option>`).join('')}</select><select id="so" aria-label="Sắp xếp"><option value="new">Mới nhất</option><option value="cond" ${st.so=='cond'?'selected':''}>Tình trạng tốt nhất</option><option value="rate" ${st.so=='rate'?'selected':''}>Đánh giá cao</option></select>`;
 const L=list();$('#vd').className=st.v=='d'?'on':'';$('#vg').className=st.v=='g'?'on':'';
 if(!L.length){$('#out').innerHTML='<p class="em">Chưa có món nào khớp. Thử bỏ bớt bộ lọc hoặc đổi từ khóa.</p>';return}
 if(st.v=='g'){$('#out').innerHTML=`<div class="gr">${L.map(i=>card(i)).join('')}</div>`;return}
 const n=L.length,top=L.slice(0,0);let idx=[0,1,2].slice(0,Math.min(3,n)).map(k=>L[(st.i+k)%n]).reverse();
 $('#out').innerHTML=`<div class="dk"><div class="stg" id="stg">${idx.map(i=>card(i,1)).join('')}</div><div class="dc"><button data-fl="-1" aria-label="Bỏ qua">✕</button><button class="big" data-fl="1" aria-label="Gửi offer">🔄</button><button data-bmt="1" aria-label="Lưu">🤍</button></div></div>`;
 const t=$('#stg').lastElementChild;t.insertAdjacentHTML('beforeend','<span class="sp l">BỎ QUA</span><span class="sp r">SWAP!</span>');
 let sx=0,dx=0,dg=0;const L2=t.querySelector('.sp.l'),R2=t.querySelector('.sp.r');
 t.onpointerdown=e=>{if(e.target.closest('button'))return;dg=1;sx=e.clientX;t.setPointerCapture(e.pointerId);t.style.transition='none'};
 t.onpointermove=e=>{if(!dg)return;dx=e.clientX-sx;t.style.transform=`translateX(${dx}px) rotate(${dx/18}deg)`;R2.style.opacity=Math.max(0,dx/90);L2.style.opacity=Math.max(0,-dx/90)};
 t.onpointerup=()=>{if(!dg)return;dg=0;t.style.transition='';if(Math.abs(dx)>90)fling(dx>0?1:-1);else{t.style.transform='';R2.style.opacity=L2.style.opacity=0}dx=0};
}
function fling(d){const t=$('#stg')?.lastElementChild;if(!t)return;const id=+t.dataset.id;t.style.transform=`translateX(${d*520}px) rotate(${d*22}deg)`;t.style.opacity=0;
 setTimeout(()=>{st.i++;render();if(d>0)offer(id)},230)}
function open(h){$('#sh').innerHTML=h;$('#md').hidden=false}
function close(){$('#md').hidden=true}
function toast(m){const e=document.createElement('div');e.className='toast';e.textContent=m;document.body.append(e);setTimeout(()=>e.remove(),2600)}
function offer(id){if(!st.ver){gate('Để gửi offer');return}const sel=new Set([MINE[0]]);
 open(`<h3>Gửi offer đổi đồ</h3><div class="tgt"><img src="${IMG[id]}" alt=""><div><b>${nm(id)}</b><div class="loc">của ${usr(id)[0]} · ${I[id][3]}</div></div></div>
 <span class="lab">Kho của bạn: chọn một hoặc nhiều món</span><div class="inv">${MINE.map(m=>`<button data-sel="${m}" class="${sel.has(m)?'on':''}" aria-label="${nm(m)}"><img src="${IMG[m]}" alt="${nm(m)}"></button>`).join('')}</div>
 <span class="lab">Lời nhắn</span><textarea id="msg" rows="3">Mình đổi ${nm(MINE[0]).toLowerCase()} lấy ${nm(id).toLowerCase()} của bạn nhé!</textarea>
 <span class="lab">Bù chênh lệch giá trị (không bắt buộc)</span><div class="row"><button class="ch" data-tip>☕ Mời bạn ly cà phê</button><button class="ch" data-tip>🧋 Mời trà sữa</button></div>
 <div class="row" style="margin-top:20px"><button class="btn b3" id="send" style="flex:1">Gửi offer</button><button class="btn b4" data-close>Hủy</button></div>`);
 const sh=$('#sh');sh.onclick=e=>{const b=e.target.closest('[data-sel]');if(b){const m=+b.dataset.sel;sel.has(m)?sel.delete(m):sel.add(m);b.classList.toggle('on')}
  const tp=e.target.closest('[data-tip]');if(tp){const on=tp.classList.contains('on');$$('[data-tip]').forEach(x=>x.classList.remove('on'));if(!on)tp.classList.add('on')}
  if(e.target.closest('[data-close]'))close();
  if(e.target.closest('#send')){if(!sel.size){toast('Chọn ít nhất một món trong kho của bạn');return}
   const bt=$('#send');bt.textContent='✓ Đã gửi offer!';bt.classList.add('ok');
   const txt=$('#msg').value.trim()||'Mình muốn đổi đồ với bạn!';
   setTimeout(()=>{close();st.conv.unshift({it:id,u:I[id][4]<0?0:I[id][4],un:0,stt:0,off:[...sel],m:[{f:'m',t:txt},{f:'s',t:'Offer đã gửi. Đang chờ '+usr(id)[0]+' phản hồi.'}]});badge();toast('Đã gửi offer cho '+usr(id)[0]);ntf('📤','Bạn đã gửi offer đổi '+nm(id)+' cho '+usr(id)[0],'trk');
    setTimeout(()=>{const c=st.conv.find(c=>c.it==id);if(c){c.m.push({f:'t',t:'Ok bạn, mình thấy được đấy! Mình chấp nhận nhé.'},{f:'s',t:'Offer đã được chấp nhận. Hãy hẹn địa điểm gặp mặt!'});c.un=1;c.stt=2;badge();ntf('✅',usr(id)[0]+' đã chấp nhận offer đổi '+nm(id),'c'+id);if(st.act!=null)chat()}},3500);setTimeout(()=>{const c=st.conv.find(c=>c.it==id);if(c&&c.stt<1){c.stt=1;ntf('👀',usr(id)[0]+' đã xem offer của bạn','trk')}},1500)},900)}}}
const badge=()=>{const n=st.conv.filter(c=>c.un).length;$('#ub').textContent=n;$('#ub').hidden=!n};
function chat(){const dr=$('#dr');dr.hidden=false;const b=$('#cb'),back=$('#back');
 if(st.act==null){back.hidden=true;$('#ct').textContent='Tin nhắn';b.innerHTML=st.conv.map((c,i)=>`<button class="cv" data-open="${i}"><img src="${IMG[c.it]}" alt=""><div><b>${U[c.u][0]}</b> <span class="vf">✓</span><small>${esc(c.m[c.m.length-1].t)}</small></div>${c.un?'<i class="dot"></i>':''}</button>`).join('')||'<p class="em">Chưa có cuộc trò chuyện nào.</p>';return}
 const c=st.conv[st.act];c.un=0;badge();back.hidden=false;$('#ct').textContent=U[c.u][0]+' ✓';
 b.innerHTML=`<div class="bn"><img src="${IMG[c.it]}" alt=""><div><b>${nm(c.it)}</b><br>${I[c.it][3]}</div></div><div class="ms" id="ms"></div><div class="qa"><button data-q="meet">📍 Hẹn địa điểm</button><button data-q="ok">✅ Xác nhận đổi</button><button data-q="img">📷 Gửi ảnh</button></div><form class="cf" id="cf"><input id="ci" placeholder="Nhắn tin…" autocomplete="off"><button>Gửi</button></form>`;msgs();
 $('#cf').onsubmit=e=>{e.preventDefault();const v=$('#ci').value.trim();if(!v)return;$('#ci').value='';add('m',v);setTimeout(()=>add('t',['Ok bạn nhé!','Chiều nay mình rảnh, gặp ở thư viện được không?','Mình chụp thêm ảnh gửi bạn nha.'][Math.floor(Math.random()*3)]),1200)}}
function msgs(){const e=$('#ms');if(!e)return;const c=st.conv[st.act];e.innerHTML=c.m.map(m=>`<div class="m ${m.f=='m'?'me2':m.f=='s'?'sys':''}">${esc(m.t)}</div>`).join('');e.scrollTop=e.scrollHeight}
function add(f,t){const c=st.conv[st.act];if(!c)return;c.m.push({f,t});msgs()}
function meet(){const P=["Cổng trường","Thư viện","Cà phê campus","Sảnh KTX"];let p=0;
 const d=new Date(Date.now()+864e5);d.setHours(17,0,0,0);const v=new Date(d-d.getTimezoneOffset()*6e4).toISOString().slice(0,16);
 open(`<h3>Hẹn địa điểm gặp mặt</h3><span class="lab">Điểm hẹn an toàn gần campus</span><div class="row">${P.map((x,i)=>`<button class="ch ${i?'':'on'}" data-p="${i}">${x}</button>`).join('')}</div><div class="pin" id="pin">📍</div><span class="lab">Ngày và giờ</span><input type="datetime-local" id="dt" value="${v}"><div class="row" style="margin-top:20px"><button class="btn b3" id="mc" style="flex:1">Xác nhận lịch hẹn</button><button class="btn b4" data-close>Hủy</button></div>`);
 $('#sh').onclick=e=>{const b=e.target.closest('[data-p]');if(b){p=+b.dataset.p;$$('[data-p]').forEach(x=>x.classList.toggle('on',x==b))}
  if(e.target.closest('[data-close]'))close();
  if(e.target.closest('#mc')){const t=new Date($('#dt').value);close();add('s','📍 Hẹn gặp tại '+P[p]+' lúc '+t.toLocaleString('vi-VN',{hour:'2-digit',minute:'2-digit',day:'2-digit',month:'2-digit'}));{const c=st.conv[st.act];if(c.stt<3)c.stt=3;ntf('📍','Đã chốt điểm hẹn tại '+P[p],'c'+c.it)}}}}
function review(){let r=5;const B=["Thân thiện","Phản hồi nhanh","Đúng mô tả"];
 const draw=()=>$('#stars').innerHTML=[1,2,3,4,5].map(n=>`<button data-r="${n}" class="${n<=r?'on':''}" aria-label="${n} sao">★</button>`).join('');
 open(`<h3>Hoàn tất swap và đánh giá</h3><div class="stars" id="stars"></div><span class="lab">Huy hiệu cho bạn đổi đồ</span><div class="row">${B.map(b=>`<button class="ch" data-b>${b}</button>`).join('')}</div><span class="lab">Nhận xét</span><textarea rows="3" placeholder="Đồ đúng như mô tả, bạn rất dễ thương…"></textarea><div class="row" style="margin-top:20px"><button class="btn b3" id="rv" style="flex:1">Hoàn tất swap</button><button class="btn b4" data-close>Để sau</button></div>`);draw();
 $('#sh').onclick=e=>{const s=e.target.closest('[data-r]');if(s){r=+s.dataset.r;draw()}const b=e.target.closest('[data-b]');if(b)b.classList.toggle('on');
  if(e.target.closest('[data-close]'))close();
  if(e.target.closest('#rv')){close();add('s','🎉 Swap hoàn tất! Cảm ơn bạn đã đánh giá.');const c=st.conv[st.act];c.dn=1;c.stt=4;ntf('🎉','Swap '+nm(c.it)+' hoàn tất · +50 Eco Points','');st.done.unshift({it:c.it,u:c.u,d:new Date().toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit'})});eco(50);setTimeout(()=>{const s=4+Math.round(Math.random());st.rv.unshift({u:c.u,s,b:['Thân thiện'],t:'Swap '+nm(c.it)+' diễn ra suôn sẻ.'});ntf('⭐',U[c.u][0]+' vừa đánh giá bạn '+s+' sao','rv')},2500)}}}
function eco(n){setTimeout(comm,0);const e=$('#ep'),a=+e.textContent.replace('.','')+n;e.textContent=a.toLocaleString('vi-VN');const p=$('#pop');p.hidden=false;setTimeout(()=>p.hidden=true,1800)}
document.addEventListener('click',e=>{const g=s=>e.target.closest(s);let b;
 if(!g('#np')&&!g('#bell'))$('#np').hidden=true;
 if(b=g('nav a')){const d=+b.dataset.tab||0;if(d)hs=d-1;tab(d?1:0)}
 else if(g('[data-tabbtn]'))tab(1);
 else if(g('#reg'))auth();
 else if(g('#up'))upl();
 else if(g('#botb')){$('#bot').hidden=false;botInit()}
 else if(g('#botx'))$('#bot').hidden=true;
 else if(b=g('[data-ht]')){hs=+b.dataset.ht;hist()}
 else if(b=g('[data-bo]'))offer(+b.dataset.bo);
 else if(b=g('[data-bq]'))bot(b.textContent);
 else if(b=g('[data-ng]')){const x=st.nt[+b.dataset.ng];x.un=0;nb();$('#np').hidden=true;if(x.go=='trk'){hs=1;tab(1)}else if(x.go=='rv'){hs=0;tab(1)}else if(x.go&&x.go[0]=='c'){const k=st.conv.findIndex(c=>c.it==+x.go.slice(1));if(k>=0){st.act=k;chat()}}}
 else if(g('[data-nr]')){st.nt.forEach(x=>x.un=0);nb();npanel();npanel()}
 else if(b=g('[data-lt]')){lt=+b.dataset.lt;comm()}
 else if(g('[data-reg2]'))auth();
 else if(g('#newpost'))post();
 else if(b=g('[data-cf]')){st.pf=+b.dataset.cf;comm()}
 else if(b=g('[data-lk]')){const p=st.posts[+b.dataset.lk];p.lk=!p.lk;p.n+=p.lk?1:-1;comm()}
 else if(b=g('[data-oc]')){st.act=+b.dataset.oc;chat()}
 else if(b=g('[data-ow]')){st.conv.splice(+b.dataset.ow,1);badge();hist();toast('Đã thu hồi offer')}
 else if(b=g('[data-c]')){st.c=+b.dataset.c;st.i=0;render()}
 else if(b=g('[data-bm]')){const i=+b.dataset.bm;st.saved.has(i)?st.saved.delete(i):st.saved.add(i);b.textContent=st.saved.has(i)?'❤️':'🤍';toast(st.saved.has(i)?'Đã lưu vào danh sách':'Đã bỏ lưu')}
 else if(b=g('[data-offer]'))offer(+b.dataset.offer);
 else if(b=g('[data-chat]')){if(!st.ver){gate('Để nhắn tin');return}const id=+b.dataset.chat;let k=st.conv.findIndex(c=>c.it==id);if(k<0){st.conv.unshift({it:id,u:I[id][4]<0?0:I[id][4],un:0,m:[{f:'s',t:'Bắt đầu trò chuyện về '+nm(id)}]});k=0}st.act=k;chat()}
 else if(b=g('[data-fl]'))fling(+b.dataset.fl);
 else if(g('[data-bmt]')){const t=$('#stg')?.lastElementChild;if(t){const i=+t.dataset.id;st.saved.add(i);toast('Đã lưu '+nm(i))}}
 else if(b=g('[data-open]')){st.act=+b.dataset.open;chat()}
 else if(g('#back')){st.act=null;chat()}
 else if(g('#x'))$('#dr').hidden=true;
 else if(b=g('[data-q]')){const q=b.dataset.q;q=='meet'?meet():q=='ok'?review():add('m','📷 Đã gửi 1 ảnh')}
 else if(g('#chatb')){st.act=null;chat()}
 else if(g('#bell'))npanel();

 else if(g('#vd')){st.v='d';render()}else if(g('#vg')){st.v='g';render()}
 else if(e.target.id=='md')close()});
document.addEventListener('change',e=>{if(e.target.id=='cp'){st.cp=e.target.value;st.i=0;render()}if(e.target.id=='so'){st.so=e.target.value;render()}});
$('#q').oninput=e=>{st.s=e.target.value.toLowerCase();st.i=0;render();$('#deck').scrollIntoView()};
document.addEventListener('keydown',e=>{if(e.key=='Escape'){close();$('#dr').hidden=true}});
$$('[data-n]').forEach(e=>{const T=+e.dataset.n,D=1400,s=performance.now();const f=t=>{const k=Math.min(1,(t-s)/D);e.textContent=Math.round(T*(1-Math.pow(1-k,3))).toLocaleString('vi-VN');if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)});

let hs=0,bi=0,lt=0;
const STP=['Đã gửi','Đã xem','Được chấp nhận','Đã hẹn gặp','Hoàn tất'];
const trk=(c,i)=>`<div class="hi tk"><div class="tk1"><img src="${IMG[c.it]}" alt=""><div><b>${nm(c.it)}</b><small>Gửi tới ${U[c.u][0]} · bạn đề nghị: ${(c.off||[]).map(nm).join(', ')||'—'}</small></div></div><div class="tl">${STP.map((s,k)=>`<span class="${k<=c.stt?'on':''}">${s}</span>`).join('')}</div><div class="row"><button class="ch" data-oc="${i}">💬 Mở chat</button>${c.stt<2?`<button class="ch" data-ow="${i}">Thu hồi offer</button>`:''}</div></div>`;
const nb=()=>{const n=st.nt.filter(x=>x.un).length;$('#nb').textContent=n;$('#nb').hidden=!n};
function ntf(ic,t,go){st.nt.unshift({ic,t,tm:'Vừa xong',un:1,go});nb()}
function npanel(){const p=$('#np');if(!p.hidden){p.hidden=true;return}p.hidden=false;p.innerHTML=`<div class="nh"><b>Thông báo</b><button data-nr>Đánh dấu đã đọc</button></div>`+(st.nt.map((x,i)=>`<button class="ni ${x.un?'un':''}" data-ng="${i}"><span>${x.ic}</span><div>${x.t}<small>${x.tm}</small></div></button>`).join('')||'<p class="em">Chưa có thông báo.</p>')}
const PT=['Tất cả','Review mua đồ','Content đồ đã đổi','Tips swap hời'];
function comm(){const S=[["Minh Anh · Bách Khoa",86],["Thu Hà · Kinh tế Quốc dân",79],["Quang Huy · Quốc Gia",71],["Hoàng Nam · Ngoại Thương",64],["Lan Chi · Y Hà Nội",58]],T=[["ĐH Bách Khoa",1248],["ĐH Ngoại Thương",1102],["ĐH Kinh tế Quốc dân",987],["ĐH FPT",874],["ĐH Y Hà Nội",731]],R=lt?T:S,mx=R[0][1];
 $('#lb').innerHTML=`<div class="tg" style="display:inline-flex;margin-bottom:14px"><button data-lt="0" class="${lt?'':'on'}">Sinh viên</button><button data-lt="1" class="${lt?'on':''}">Trường</button></div>`+R.map((r,i)=>`<div class="lr"><b>${i+1}</b><span>${r[0]}</span><i><s style="width:${r[1]/mx*100}%"></s></i><em>${r[1].toLocaleString('vi-VN')}</em></div>`).join('');
 const d=Math.min(5,st.done.length);
 $('#cc').innerHTML=`<b style="font-size:18px">Thử thách tháng 10: Tủ đồ tuần hoàn</b><p style="margin-top:4px">Hoàn tất 5 swap để nhận huy hiệu Người sống xanh và 200 Eco Points.</p><div class="pb"><s style="width:${d*20}%"></s></div><small>${d}/5 swap${d==5?' · Đã hoàn thành 🎉':''}</small>`;
 $('#pf').innerHTML=PT.map((x,i)=>`<button class="ch ${st.pf==i?'on':''}" data-cf="${i}">${x}</button>`).join('');
 $('#posts').innerHTML=st.posts.map((p,i)=>[p,i]).filter(x=>!st.pf||x[0].ty==st.pf).map(([p,i])=>`<article class="po"><div class="us"><i class="av">${p.a[0]}</i><b>${p.a}</b><span class="vf">✓ Verified Student 🎓</span><small style="color:var(--mu)">${p.tm}</small></div><span class="ptag">${PT[p.ty]}</span><p>${esc(p.t)}</p>${p.img?`<img src="${p.img}" alt="">`:''}<div class="pa"><button data-lk="${i}" aria-label="Thích">${p.lk?'❤️':'🤍'} ${p.n}</button><span>💬 ${p.c}</span></div></article>`).join('')||'<p class="em">Chưa có bài viết.</p>'}
function post(){if(!st.ver){gate('Để đăng bài');return}let ty=1,im='';
 open(`<h3>Đăng bài lên cộng đồng</h3><div class="row">${PT.slice(1).map((x,i)=>`<button class="ch ${i?'':'on'}" data-pt="${i+1}">${x}</button>`).join('')}</div><span class="lab">Nội dung</span><textarea id="pt" rows="4" placeholder="Chia sẻ trải nghiệm hoặc mẹo swap của bạn…"></textarea><span class="lab">Ảnh (không bắt buộc)</span><input type="file" id="pi" accept="image/*"><div class="row" style="margin-top:20px"><button class="btn b3" id="ps" style="flex:1">Đăng bài</button><button class="btn b4" data-close>Hủy</button></div>`);
 $('#pi').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>im=r.result;r.readAsDataURL(f)};
 $('#sh').onclick=e=>{const b=e.target.closest('[data-pt]');if(b){ty=+b.dataset.pt;$$('[data-pt]').forEach(x=>x.classList.toggle('on',x==b));return}
  if(e.target.closest('[data-close]'))close();
  if(e.target.closest('#ps')){const t=$('#pt').value.trim();if(!t){toast('Hãy viết nội dung bài đăng');return}st.posts.unshift({a:'Lê Khánh Linh',ty,tm:'Vừa xong',t,img:im,n:0,c:0});st.pf=0;comm();close();toast('Đã đăng bài lên cộng đồng')}}}
function seed(){st.conv=[{it:3,u:4,un:0,stt:1,off:[5],m:[{f:'m',t:'Mình đổi túi đeo chéo lấy đôi boot của bạn nhé!'},{f:'s',t:'Offer đã gửi. Đang chờ Lan Chi phản hồi.'}]},{it:8,u:2,un:1,stt:2,off:[11],m:[{f:'t',t:'Chào bạn, máy xay còn mới lắm, bạn đổi nồi cơm điện được không?'},{f:'s',t:'Offer đã được chấp nhận. Hãy hẹn địa điểm gặp mặt!'}]}];
 st.nt=[{ic:'✅',t:'Thu Hà đã chấp nhận offer đổi Máy xay sinh tố',tm:'10 phút trước',un:1,go:'c8'},{ic:'⭐',t:'Lan Chi đã đánh giá bạn 5 sao',tm:'Hôm qua',un:0,go:'rv'}];
 st.done=[{it:12,u:4,d:'12/09'},{it:6,u:1,d:'28/08'},{it:2,u:5,d:'15/08'}];
 st.rv=[{u:4,s:5,b:['Thân thiện','Đúng mô tả'],t:'Đồ đúng như mô tả, hẹn gặp đúng giờ.'},{u:1,s:5,b:['Phản hồi nhanh'],t:'Trả lời tin nhắn rất nhanh, giao dịch suôn sẻ.'},{u:5,s:4,b:['Thân thiện'],t:'Bạn dễ thương, đồ hơi cũ hơn ảnh một chút.'}];badge();nb()}
function tab(n){$('#home').hidden=!!n;$('#histv').hidden=!n;if(n){hist();scrollTo(0,0)}}
const mini=(i,s)=>`<div class="hi"><img src="${IMG[i]}" alt=""><div><b>${nm(i)}</b><small>${s}</small></div></div>`;
function score(){const n=st.rv.length,avg=n?st.rv.reduce((a,r)=>a+r.s,0)/n:0,v=st.ver?30:0,r=Math.round(avg/5*40),s=Math.round(Math.min(st.done.length,5)/5*20),rp=st.ver?9:0;return{v,avg,r,s,rp,t:v+r+s+rp}}
function hist(){const sc=score(),lv=sc.t>=80?['Rất đáng tin','Hồ sơ này an toàn để giao dịch.']:sc.t>=60?['Khá đáng tin','Hoàn tất thêm swap để tăng độ tin cậy.']:['Cần thận trọng','Chưa đủ thông tin. Hãy xác thực và hoàn tất swap đầu tiên.'],
 bk=[['Xác thực sinh viên',sc.v,30],['Đánh giá sao từ bạn đổi đồ'+(st.rv.length?` (${sc.avg.toFixed(1).replace('.',',')} ★)`:''),sc.r,40],['Swap hoàn tất',sc.s,20],['Tỉ lệ phản hồi',sc.rp,10]],
 A=[['🎓','Sinh viên xác thực',st.ver],['🔄','Swap đầu tiên',st.done.length>0],['🏅','3 swap thành công',st.done.length>=3],['⭐','Điểm sao từ 4,5',st.rv.length>0&&sc.avg>=4.5],['⚡','Phản hồi nhanh',st.ver],['🏆','5 swap thành công',st.done.length>=5]];
 let L;
 if(hs==0)L=st.rv.map(r=>`<div class="hi"><i class="av">${U[r.u][0][0]}</i><div><b>${U[r.u][0]}</b> <span style="color:var(--r)">${'★'.repeat(r.s)}${'☆'.repeat(5-r.s)}</span><small>${esc(r.t)}${r.b?' · '+r.b.join(', '):''}</small></div></div>`);
 else if(hs==1)L=st.conv.map((c,i)=>c.dn?'':trk(c,i));
 else if(hs==2)L=st.done.map(d=>mini(d.it,`Đổi với ${U[d.u][0]} · ${d.d} · ✓ Hoàn tất`));
 else L=[...st.saved].map(i=>mini(i,I[i][3]));
 $('#hv').innerHTML=`<div style="padding:40px 0 60px"><h2>Điểm cá nhân</h2><p class="loc" style="margin-top:6px">Điểm tin cậy cho người khác biết hồ sơ của bạn có đáng tin và an toàn để swap hay không.</p>
 <div class="pc"><div class="ring" style="--p:${sc.t}"><b>${sc.t}</b><small>/100</small></div><div><h3 class="h3" style="margin-bottom:4px">${st.ver?'Lê Khánh Linh <span class="vf">✓ Verified Student 🎓</span>':'Khách chưa xác thực'}</h3><b style="color:var(--rd)">${lv[0]}</b><p class="loc">${lv[1]}</p>${st.ver?'':'<button class="btn b3" data-reg2 style="margin-top:10px">Đăng nhập và xác thực</button>'}</div></div>
 <h3 class="h3">Điểm được tính từ đâu</h3><div class="bk">${bk.map(b=>`<div class="br"><span>${b[0]}</span><i><s style="width:${b[1]/b[2]*100}%"></s></i><b>${b[1]}/${b[2]}</b></div>`).join('')}</div>
 <h3 class="h3" style="margin-top:26px">Thành tích</h3><div class="ach">${A.map(a=>`<div class="${a[2]?'':'lk'}"><span>${a[0]}</span>${a[1]}</div>`).join('')}</div>
 <div class="tg" style="display:inline-flex;margin:20px 0 12px;flex-wrap:wrap">${['Đánh giá nhận được','Offer đã gửi','Đã hoàn tất','Đã lưu'].map((x,i)=>`<button data-ht="${i}" class="${hs==i?'on':''}">${x}</button>`).join('')}</div><div class="hl">${L.join('')||'<p class="em">Chưa có mục nào ở đây.</p>'}</div></div>`}
const SC=[["ĐH Bách Khoa Hà Nội","hust.edu.vn"],["ĐH Quốc gia Hà Nội","vnu.edu.vn"],["ĐH Ngoại Thương","ftu.edu.vn"],["ĐH FPT","fpt.edu.vn"],["ĐH Y Hà Nội","hmu.edu.vn"],["ĐH Kinh tế Quốc dân","neu.edu.vn"]];
function gate(why){open(`<h3>Cần đăng nhập và xác thực sinh viên</h3><p>${why} bạn cần hoàn tất hai bước sau. Việc này giúp mọi người swap an toàn với sinh viên thật.</p><div class="gt" style="margin-top:14px"><div>${st.login?'✅':'⬜'} <b>Đăng nhập tài khoản</b></div><div>${st.ver?'✅':'⬜'} <b>Xác thực sinh viên</b><small>Email .edu.vn và thẻ sinh viên</small></div></div><div class="row" style="margin-top:20px"><button class="btn b3" id="gg" style="flex:1">Đăng nhập và xác thực</button><button class="btn b4" data-close>Để sau</button></div>`);
 $('#sh').onclick=e=>{if(e.target.closest('[data-close]'))close();if(e.target.closest('#gg'))auth()}}
function auth(){let s=st.login?1:0,sc=0,em='',sent=0,ocr=0,ac='';const P=['Tài khoản','Trường','Email','Thẻ SV','Sở thích'],PF=[['Giáo trình và sách',1],['Đồ điện tử và đồ bếp',2],['Quần áo, giày, túi',3],['Đồ nội thất KTX',4]],pf=new Set(st.pref);
 const draw=()=>{let h=`<div class="stp">${P.map((p,i)=>`<span class="${i<=s?'on':''}">${i<s?'✓':i+1}. ${p}</span>`).join('')}</div>`;
  if(s==0)h+=`<h3>Đăng nhập hoặc tạo tài khoản</h3><span class="lab">Email</span><input id="ae" type="email" placeholder="ban@gmail.com" value="${esc(ac)}"><span class="lab">Mật khẩu (từ 6 ký tự)</span><input id="ap" type="password"><div id="er" class="loc" style="color:var(--r);margin-top:6px"></div><button class="btn b3" data-nx style="width:100%;margin-top:14px">Tiếp tục</button>`;
  if(s==1)h+=`<h3>Chọn trường của bạn</h3><div class="uni">${SC.map((x,i)=>`<button class="ch ${i==sc?'on':''}" data-sc="${i}">${x[0]}</button>`).join('')}</div><button class="btn b3" data-nx style="width:100%;margin-top:18px">Tiếp tục</button>`;
  if(s==2)h+=`<h3>Xác thực email sinh viên</h3><input id="em" type="email" placeholder="ten.sv@${SC[sc][1]}" value="${em}" ${sent?'disabled':''}>${sent?'<span class="lab">Nhập mã 6 số đã gửi (mã demo: 123456)</span><input id="otp" maxlength="6" inputmode="numeric" class="otp" placeholder="······">':''}<div id="er" class="loc" style="color:var(--r);margin-top:6px"></div><button class="btn b3" data-nx style="width:100%;margin-top:14px">${sent?'Xác nhận mã':'Gửi mã xác thực'}</button>`;
  if(s==3)h+=`<h3>Tải ảnh thẻ sinh viên</h3><label class="drop" id="dz"><input type="file" accept="image/*" hidden id="ff">${ocr==0?'<b>Kéo thả ảnh thẻ vào đây</b><small>hoặc bấm để chọn ảnh</small>':ocr==1?'<div class="scan"></div><b>Đang đọc thẻ…</b>':'<b>✓ Đã đọc xong thẻ</b>'}</label>${ocr==2?`<div class="ocr"><div><small>Mã sinh viên</small><b>20225678</b></div><div><small>Họ và tên</small><b>Lê Khánh Linh</b></div><div><small>Trường</small><b>${SC[sc][0]}</b></div></div><button class="btn b3" data-nx style="width:100%;margin-top:16px">Xác nhận thông tin</button>`:''}`;
  if(s==4)h+=`<h3>Bạn quan tâm đồ dùng nào?</h3><p class="loc">Chọn để mình gợi ý đúng món bạn cần. Chọn được nhiều mục.</p><div class="uni" style="margin-top:12px">${PF.map(x=>`<button class="ch ${pf.has(x[1])?'on':''}" data-sp="${x[1]}">${x[0]}</button>`).join('')}</div><span class="lab">Món bạn đang tìm (không bắt buộc)</span><input id="aw" placeholder="VD: quạt, giáo trình Triết học"><button class="btn b3" data-nx style="width:100%;margin-top:18px">Hoàn tất</button>`;
  open(h);bind()};
 const scan=()=>{ocr=1;draw();setTimeout(()=>{ocr=2;draw()},1800)};
 const bind=()=>{const f=$('#ff');if(f&&ocr==0){f.onchange=scan;const d=$('#dz');d.ondragover=e=>e.preventDefault();d.ondrop=e=>{e.preventDefault();scan()}}
  $('#sh').onclick=e=>{const c=e.target.closest('[data-sc]');if(c){sc=+c.dataset.sc;draw();return}
   const q=e.target.closest('[data-sp]');if(q){const k=+q.dataset.sp;pf.has(k)?pf.delete(k):pf.add(k);q.classList.toggle('on');return}
   if(!e.target.closest('[data-nx]'))return;
   if(s==0){const a=$('#ae').value.trim(),p=$('#ap').value;if(!/^\S+@\S+\.\S+$/.test(a)||p.length<6){$('#er').textContent='Nhập email hợp lệ và mật khẩu từ 6 ký tự';return}ac=a;st.login=1;s=1;draw()}
   else if(s==1){s=2;draw()}
   else if(s==2){if(!sent){const v=$('#em').value.trim().toLowerCase();if(!/^[^@\s]+@[^@\s]+\.edu\.vn$/.test(v)){$('#er').textContent='Email phải kết thúc bằng .edu.vn';return}em=v;sent=1;draw();toast('Đã gửi mã tới '+v)}
    else if($('#otp').value==='123456'){s=3;draw()}else $('#er').textContent='Mã chưa đúng. Hãy nhập 123456.'}
   else if(s==3){st.ver=1;seed();$('#reg').hidden=true;$('#me').hidden=false;s=4;draw();render();comm()}
   else{close();st.pref=pf;st.wish=$('#aw').value.trim();render();toast('Chào Khánh Linh! Bạn đã là Verified Student 🎓');$('#bot').hidden=false;botInit();botPers()}}};
 draw()}
function botPers(){const r=I.map((_,i)=>i).filter(i=>!MINE.includes(i)&&st.pref.has(I[i][1])).slice(0,3);
 bm(0,r.length?'Cảm ơn bạn! Dựa trên sở thích, mình gợi ý:'+r.map((i,k)=>`<button class="rec" data-bo="${i}"><img src="${IMG[i]}" alt=""><span>${nm(i)}<small>${96-k*5}% phù hợp</small></span></button>`).join(''):'Cảm ơn bạn! Cứ nhắn món cần tìm, mình sẽ gợi ý ngay.')}
function upl(){if(!st.ver){gate('Để đăng đồ');return}const ims=[];
 open(`<h3>Đăng đồ để swap</h3><label class="drop" id="dz"><input type="file" accept="image/*" multiple hidden id="ff"><b>Kéo thả ảnh vào đây</b><small>Tối đa 5 ảnh</small></label><div class="inv" id="pv" style="margin-top:10px"></div>
 <span class="lab">Tên món đồ</span><input id="ut" placeholder="VD: Quạt cây Senko">
 <div class="row"><div style="flex:1"><span class="lab">Danh mục</span><select id="uc">${CATS.slice(1).map((c,i)=>`<option value="${i+1}">${c}</option>`).join('')}</select></div><div style="flex:1"><span class="lab">Địa điểm</span><select id="ul">${U.map(u=>`<option>${u[2]}</option>`).join('')}</select></div></div>
 <span class="lab">Tình trạng: <b id="uv">90</b>%</span><input type="range" id="us" min="50" max="100" value="90" style="padding:0">
 <span class="lab">Mô tả</span><textarea id="ud" rows="2" placeholder="Dùng 1 học kỳ, còn hoạt động tốt…"></textarea>
 <span class="lab">Muốn đổi lấy (không bắt buộc)</span><input id="uw" placeholder="VD: Giáo trình, nồi cơm điện">
 <div class="row" style="margin-top:20px"><button class="btn b3" id="uo" style="flex:1">Đăng đồ</button><button class="btn b4" data-close>Hủy</button></div>`);
 const ad=fs=>[...fs].slice(0,5-ims.length).forEach(f=>{const r=new FileReader();r.onload=()=>{ims.push(r.result);$('#pv').innerHTML=ims.map(x=>`<img src="${x}" alt="" style="aspect-ratio:1;object-fit:cover;border-radius:12px;width:100%">`).join('')};r.readAsDataURL(f)});
 $('#ff').onchange=e=>ad(e.target.files);const d=$('#dz');d.ondragover=e=>e.preventDefault();d.ondrop=e=>{e.preventDefault();ad(e.dataTransfer.files)};
 $('#us').oninput=e=>$('#uv').textContent=e.target.value;
 $('#sh').onclick=e=>{if(e.target.closest('[data-close]'))close();
  if(e.target.closest('#uo')){const t=$('#ut').value.trim();if(!ims.length||!t){toast('Cần ít nhất 1 ảnh và tên món đồ');return}
   IMG.push(ims[0]);I.push([t,+$('#uc').value,+$('#us').value,$('#ul').value,-1,$('#uw').value||'Mở cho mọi đề nghị']);MINE.push(I.length-1);close();toast('Đã đăng "'+t+'". Món đồ nằm trong kho của bạn.')}}}
function botInit(){if(bi)return;bi=1;bm(0,'Chào bạn! Mình là Swap Bot 🤖 Bạn đang cần tìm món gì? Đăng nhập và làm khảo sát sở thích để mình gợi ý đúng gu hơn nhé.');$('#bq').innerHTML=['Đồ cho KTX','Sách học','Quần áo','Đồ điện tử'].map(x=>`<button data-bq>${x}</button>`).join('')}
function bm(f,h){const e=document.createElement('div');e.className='m '+(f?'me2':'');e.innerHTML=h;$('#bm').append(e);$('#bm').scrollTop=1e9}
function bot(t){bm(1,esc(t));const s=t.toLowerCase(),all=I.map((_,i)=>i).filter(i=>!MINE.includes(i)),
 m=[[/sách|giáo trình|học/,1],[/điện|máy|nồi|quạt/,2],[/áo|váy|quần|giày|boot|túi/,3],[/ktx|bàn|ghế|kệ|phòng/,4]].find(x=>x[0].test(s));
 let r=all.filter(i=>(m&&I[i][1]==m[1])||nm(i).toLowerCase().split(' ').some(w=>w.length>2&&s.includes(w)));const ok=r.length>0;if(!ok)r=all.sort(()=>Math.random()-.5);r=r.slice(0,3);
 setTimeout(()=>bm(0,(ok?'Mình thấy vài món hợp với bạn:':'Mình chưa thấy đúng món đó, nhưng đây là vài món đang được quan tâm:')+r.map((i,k)=>`<button class="rec" data-bo="${i}"><img src="${IMG[i]}" alt=""><span>${nm(i)}<small>${96-k*5}% phù hợp</small></span></button>`).join('')+'<div style="margin-top:6px;font-size:12px">Bấm vào món để gửi offer.</div>'),600)}
$('#bf').onsubmit=e=>{e.preventDefault();const v=$('#bi').value.trim();if(v){$('#bi').value='';bot(v)}};
render();badge();nb();comm();$('#bot').hidden=false;botInit();
