import{a as p,t as A,b as B,g as ye,s as _e,c as X,f as we,e as Xe,j as St}from"../chunks/disclose-version.DGOLdd82.js";import{i as Ee}from"../chunks/legacy.Czrtfiyg.js";import{h as ie,g as He,an as Rt,d as At,b as Nt,T as Tt,az as it,H as Ot,e as Ze,i as qe,m as Se,aB as De,j as ct,k as ut,l as kt,P as et,aC as tt,aD as Dt,ay as It,aE as Pt,aF as wt,ao as Lt,av as Ct,al as xt,q as Ut,aG as Qe,aH as We,a7 as Ft,L as rt,aI as vt,aJ as Ht,aK as qt,at as Yt,c as $,s as T,r as E,t as H,p as be,N as D,aL as Bt,aM as zt,D as a,a as me,ae as G,F as Qt,a2 as x,G as Wt,ad as Le,f as ve,aN as ft,aO as at}from"../chunks/utils.DrrMdXOB.js";import{i as J}from"../chunks/if.nBYpsvtl.js";import{m as dt,F as nt,g as Gt,k as Kt}from"../chunks/stats.CWWDctaf.js";import{p as U,b as _t,s as Ce,o as Ge}from"../chunks/preload-helper.DfV8t8G9.js";import{t as h,f as Ke,$ as $e,s as se}from"../chunks/client.DfH2PMMF.js";import{a as Je,t as Ve,r as Ie,b as Pe,s as Et,c as Jt,M as bt,C as Vt}from"../chunks/Modal.CjZMlpt2.js";import{g as ge,w as mt}from"../chunks/index.VfGQUeMY.js";function fe(t,e){return e}function jt(t,e,r,n){for(var o=[],d=e.length,l=0;l<d;l++)Dt(e[l].e,o,!0);var u=d>0&&o.length===0&&r!==null;if(u){var i=r.parentNode;It(i),i.append(r),n.clear(),oe(t,e[0].prev,e[d-1].next)}Pt(o,()=>{for(var s=0;s<d;s++){var f=e[s];u||(n.delete(f.k),oe(t,f.prev,f.next)),wt(f.e,!u)}})}function de(t,e,r,n,o,d=null){var l=t,u={flags:e,items:new Map,first:null},i=(e&vt)!==0;if(i){var s=t;l=ie?He(Lt(s)):s.appendChild(Rt())}ie&&At();var f=null,m=!1;Nt(()=>{var v=r(),_=Tt(v)?v:v==null?[]:it(v),c=_.length;if(m&&c===0)return;m=c===0;let N=!1;if(ie){var g=l.data===Ot;g!==(c===0)&&(l=Ze(),He(l),qe(!1),N=!0)}if(ie){for(var S=null,O,P=0;P<c;P++){if(Se.nodeType===8&&Se.data===Ct){l=Se,N=!0,qe(!1);break}var b=_[P],y=n(b,P);O=ht(Se,u,S,null,b,y,P,o,e),u.items.set(y,O),S=O}c>0&&He(Ze())}if(!ie){var K=xt;Xt(_,u,l,o,e,(K.f&De)!==0,n)}d!==null&&(c===0?f?ct(f):f=ut(()=>d(l)):f!==null&&kt(f,()=>{f=null})),N&&qe(!0),r()}),ie&&(l=Se)}function Xt(t,e,r,n,o,d,l){var F,ae,Z,he;var u=(o&Ht)!==0,i=(o&(Qe|We))!==0,s=t.length,f=e.items,m=e.first,v=m,_,c=null,N,g=[],S=[],O,P,b,y;if(u)for(y=0;y<s;y+=1)O=t[y],P=l(O,y),b=f.get(P),b!==void 0&&((F=b.a)==null||F.measure(),(N??(N=new Set)).add(b));for(y=0;y<s;y+=1){if(O=t[y],P=l(O,y),b=f.get(P),b===void 0){var K=v?v.e.nodes_start:r;c=ht(K,e,c,c===null?e.first:c.next,O,P,y,n,o),f.set(P,c),g=[],S=[],v=c.next;continue}if(i&&Zt(b,O,y,o),b.e.f&De&&(ct(b.e),u&&((ae=b.a)==null||ae.unfix(),(N??(N=new Set)).delete(b))),b!==v){if(_!==void 0&&_.has(b)){if(g.length<S.length){var M=S[0],w;c=M.prev;var q=g[0],W=g[g.length-1];for(w=0;w<g.length;w+=1)ot(g[w],M,r);for(w=0;w<S.length;w+=1)_.delete(S[w]);oe(e,q.prev,W.next),oe(e,c,q),oe(e,W,M),v=M,c=W,y-=1,g=[],S=[]}else _.delete(b),ot(b,v,r),oe(e,b.prev,b.next),oe(e,b,c===null?e.first:c.next),oe(e,c,b),c=b;continue}for(g=[],S=[];v!==null&&v.k!==P;)(d||!(v.e.f&De))&&(_??(_=new Set)).add(v),S.push(v),v=v.next;if(v===null)continue;b=v}g.push(b),c=b,v=b.next}if(v!==null||_!==void 0){for(var I=_===void 0?[]:it(_);v!==null;)(d||!(v.e.f&De))&&I.push(v),v=v.next;var C=I.length;if(C>0){var z=o&vt&&s===0?r:null;if(u){for(y=0;y<C;y+=1)(Z=I[y].a)==null||Z.measure();for(y=0;y<C;y+=1)(he=I[y].a)==null||he.fix()}jt(e,I,z,f)}}u&&Ut(()=>{var ee;if(N!==void 0)for(b of N)(ee=b.a)==null||ee.apply()}),et.first=e.first&&e.first.e,et.last=c&&c.e}function Zt(t,e,r,n){n&Qe&&tt(t.v,e),n&We?tt(t.i,r):t.i=r}function ht(t,e,r,n,o,d,l,u,i){var s=(i&Qe)!==0,f=(i&qt)===0,m=s?f?Ft(o):rt(o):o,v=i&We?rt(l):l,_={i:v,v:m,k:d,a:null,e:null,prev:r,next:n};try{return _.e=ut(()=>u(t,m,v),ie),_.e.prev=r&&r.e,_.e.next=n&&n.e,r===null?e.first=_:(r.next=_,r.e.next=_.e),n!==null&&(n.prev=_,n.e.prev=_.e),_}finally{}}function ot(t,e,r){for(var n=t.next?t.next.e.nodes_start:r,o=e?e.e.nodes_start:r,d=t.e.nodes_start;d!==n;){var l=Yt(d);o.before(d),d=l}}function oe(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}const er=[h.JANUARY,h.FEBRUARY,h.MARCH,h.APRIL,h.MAY,h.JUNE,h.JULY,h.AUGUST,h.SEPTEMBER,h.OCTOBER,h.NOVEMBER,h.DECEMBER],Re=[h.SHORT_SUNDAY,h.SHORT_MONDAY,h.SHORT_TUESDAY,h.SHORT_WEDNESDAY,h.SHORT_THURSDAY,h.SHORT_FRIDAY,h.SHORT_SATURDAY],xe=new Date(2024,0,1);function gt(t,e){return new Date(e,t+1,0).getDate()}function yt(t,e){return new Date(e,t,1).getDay()}function $t(t,e){return(t-e+Re.length)%Re.length}function tr(t,e,r=0){const n=$t(yt(t,e),r),o=gt(t,e);return Math.ceil((n+o)/7)}function rr(t,e,r,n,o=0){return r+n*Re.length-$t(yt(t,e),o)+1}function ar(t,e){return Math.floor((t.getTime()-e.getTime())/(1e3*60*60*24))}function Ue(t,e){return(ar(t,e)%365+365)%365}var k=(t=>(t.EQUIPMENT="EQUIPMENT",t.GEMS="GEMS",t.KAMAS="KAMAS",t.WAKFU="WAKFU",t.RUNES="RUNES",t.CHEST="CHEST",t))(k||{});function nr(){const t=mt({}),{subscribe:e,set:r}=t;return localStorage.storable&&r(JSON.parse(localStorage.storable)),{subscribe:e,set:n=>{localStorage.storable=JSON.stringify(n),r(n)},update:n=>{const o=n(ge(t));localStorage.storable=JSON.stringify(o),r(o)}}}const ue=nr();var or=A('<span class="text svelte-17j3cvn"> </span>'),sr=A('<section class="tooltip svelte-17j3cvn"><!> <!></section>');function lr(t,e){let r=U(e,"title",8,void 0);var n=sr(),o=$(n);Ke(o,e,"default",{});var d=T(o,2);{var l=u=>{var i=or(),s=$(i,!0);E(i),H(()=>B(s,r())),p(u,i)};J(d,u=>{r()&&u(l)})}E(n),p(t,n)}var ir=A("<button><div> </div></button>");function cr(t,e){be(e,!1);const r=_e(),n=()=>X($e,"$_",r);let o=U(e,"currentDate",8),d=U(e,"dayOfMonth",8),l=U(e,"reward",8,void 0),u=U(e,"onclick",8);const i=new Date;let s=G("");const f=ue.subscribe(c=>{D(s,m(l(),c.filters))});function m(c,N){if(c){if(c.type===k.EQUIPMENT){if(!N||N[c.rarety])return c.rarety.toLowerCase()}else if(!N||N[c.type])return c.type.toLowerCase()}}function v(){if(l()){let c=`${l().amount}× ${n()(l().type)}`;switch(l().type){case k.RUNES:case k.CHEST:c+=` ${n()(l().equipment)}`;break;case k.EQUIPMENT:c=`${l().amount}× ${n()(l().item)} ${n()(l().rarety)}`;break}return c}}_t(()=>{f()}),Bt(()=>(Qt(l()),ue),()=>{D(s,m(l(),ge(ue).filters))}),zt(),Ee();var _=x(v);lr(t,{get title(){return a(_)},children:(c,N)=>{var g=ir();g.__click=function(...b){var y;(y=u())==null||y.apply(this,b)};const S=x(()=>o().toDateString()===i.toDateString());var O=$(g),P=$(O,!0);E(O),E(g),H(()=>{Je(g,`${a(s)??""} svelte-14v7im1`),g.disabled=o()>i,Ve(g,"today",a(S)),B(P,d())}),p(c,g)},$$slots:{default:!0}}),me()}ye(["click"]);var ur=A('<th class="svelte-t5kud4"> </th>'),vr=A("<td><!></td>"),fr=A("<tr></tr>"),dr=A('<table class="svelte-t5kud4"><thead><tr></tr></thead><tbody></tbody></table>');function _r(t,e){be(e,!1);const r=_e(),n=()=>X(dt,"$momentStore",r);let o=U(e,"year",8),d=U(e,"month",8),l=U(e,"onselectday",8),u=U(e,"calendar",8);const i=Re.length;function s(c){let N=Ue(c,xe);return u()[N]}Ee();var f=dr(),m=$(f),v=$(m);de(v,5,()=>({length:i}),fe,(c,N,g)=>{var S=ur(),O=$(S,!0);H(()=>B(O,n()().weekday(g%i).format("dd"))),E(S),p(c,S)}),E(v),E(m);var _=T(m);de(_,5,()=>({length:tr(d(),o())}),fe,(c,N,g)=>{var S=fr();const O=x(()=>gt(d(),o()));de(S,5,()=>Re,fe,(b,y,K)=>{var M=vr();const w=x(()=>rr(d(),o(),K,g));var q=$(M);{var W=I=>{const C=x(()=>new Date(o(),d(),a(w))),z=x(()=>s(a(C)));var F=Wt(()=>({currentDate:a(C),dayOfMonth:a(w),reward:a(z),onclick:()=>l()(a(C))}));cr(I,Ce(()=>a(F)))};J(q,I=>{a(w)>0&&a(w)<=a(O)&&I(W)})}E(M),p(b,M)}),E(S),p(c,S)}),E(_),E(f),p(t,f),me()}var Ye=(t=>(t.COMPANIONS="COMPANIONS",t.SPELLS="SPELLS",t.EQUIPMENTS="EQUIPMENTS",t))(Ye||{}),Be=(t=>(t.RING="RING",t.ARMBAND="ARMBAND",t.COMPANION="COMPANION",t))(Be||{}),Fe=(t=>(t.COMMON="COMMON",t.RARE="RARE",t.KROSMIC="KROSMIC",t.INFINITE="INFINITE",t))(Fe||{});function Er(t,e){be(e,!1);const r=_e(),n=()=>X($e,"$_",r);let o=U(e,"key",8);Ee(),Le();var d=we();H(()=>B(d,n()(o()))),p(t,d),me()}var br=A('<span class="required svelte-u5ui8r">*</span>'),mr=A("<span> <!></span>"),hr=A('<section class="svelte-u5ui8r"><!> <!></section>');function ze(t,e){let r=U(e,"title",8,void 0),n=U(e,"required",8,!1);var o=hr(),d=$(o);{var l=i=>{var s=mr(),f=$(s),m=T(f);{var v=_=>{var c=br();p(_,c)};J(m,_=>{n()&&_(v)})}E(s),H(()=>B(f,`${r()??""}: `)),p(i,s)};J(d,i=>{r()&&i(l)})}var u=T(d,2);Ke(u,e,"default",{}),E(o),p(t,o)}var gr=(t,e,r)=>e(a(r)),yr=A("<button><!></button>"),$r=A('<section class="svelte-aefnkp"></section>');function ke(t,e){let r=U(e,"title",8,void 0),n=U(e,"values",24,()=>[]),o=U(e,"value",12),d=U(e,"required",8,!1);ze(t,Ce(()=>({title:r(),required:d()}),{children:(l,u)=>{var i=$r();de(i,5,n,fe,(s,f)=>{var m=yr();const v=x(()=>`${a(f).toLowerCase()??""} svelte-aefnkp`);m.__click=[gr,o,f];var _=$(m);Er(_,{get key(){return a(f)}}),E(m),H(()=>{Je(m,a(v)),Ve(m,"active",o()===a(f))}),p(s,m)}),E(i),p(l,i)},$$slots:{default:!0}}))}ye(["click"]);function pr(t){return Object.values(t).filter(e=>typeof e!="number")}var Mr=A("<!> <!>",1),Sr=A('<input type="number" min="100" max="250" step="50">'),Rr=A('<input type="number" min="1" max="5000">'),Ar=A('<input type="text">'),Nr=(t,e)=>e()(),Tr=(t,e,r)=>{confirm(e()(h.REWARD_DELETE_CONFIRM))&&r()()},Or=A('<button class="delete material-icon svelte-tu6hhq">delete</button>'),kr=A('<section class="svelte-tu6hhq"><!> <!> <!> <!> <div class="controls svelte-tu6hhq"><button class="secondary svelte-tu6hhq"> </button> <button class="primary svelte-tu6hhq"> </button> <!></div></section>');function Dr(t,e){var ee,Ne,pe,Te,Me,Oe,ne;be(e,!1);const r=_e(),n=()=>X($e,"$_",r);let o=U(e,"oncancel",8),d=U(e,"onsave",8),l=U(e,"ondelete",8,void 0),u=U(e,"reward",8,void 0),i=U(e,"date",8),s=G(((ee=u())==null?void 0:ee.type)??k.EQUIPMENT),f=G(((Ne=u())==null?void 0:Ne.type)===k.EQUIPMENT?u().rarety:Fe.COMMON),m=G(((pe=u())==null?void 0:pe.type)===k.RUNES||((Te=u())==null?void 0:Te.type)===k.CHEST?u().equipment:Ye.EQUIPMENTS),v=G(((Me=u())==null?void 0:Me.type)===k.EQUIPMENT?u().item:Be.RING),_=G(((Oe=u())==null?void 0:Oe.amount)??1),c=G(((ne=u())==null?void 0:ne.type)===k.EQUIPMENT?u().description:void 0);function N(){let R;const L={cycle_index:Ue(i(),xe),amount:a(_)};switch(a(s)){case k.GEMS:R={...L,type:a(s),amount:a(_)};break;case k.EQUIPMENT:R={...L,type:a(s),rarety:a(f),item:a(v),description:a(c)};break;case k.CHEST:R={...L,type:a(s),equipment:a(m)};break;case k.RUNES:R={...L,type:a(s),equipment:a(m)};break;case k.KAMAS:case k.WAKFU:R={...L,type:a(s)};break}d()(R)}Ee();var g=kr(),S=$(g),O=x(()=>n()(h.REWARD_LABEL_TYPE)),P=x(()=>pr(k));ke(S,{get title(){return a(O)},get values(){return a(P)},get value(){return a(s)},set value(R){D(s,R)},required:!0,$$legacy:!0});var b=T(S,2);{var y=R=>{var L=Mr(),V=ve(L),le=x(()=>n()(h.REWARD_LABEL_RARITY)),Y=x(()=>Object.keys(Fe));ke(V,{get title(){return a(le)},get values(){return a(Y)},get value(){return a(f)},set value(re){D(f,re)},required:!0,$$legacy:!0});var te=T(V,2),j=x(()=>n()(h.REWARD_LABEL_ITEM_TYPE)),Q=x(()=>Object.keys(Be));ke(te,{get title(){return a(j)},get values(){return a(Q)},get value(){return a(v)},set value(re){D(v,re)},required:!0,$$legacy:!0}),p(R,L)},K=R=>{var L=Xe(),V=ve(L);{var le=Y=>{var te=x(()=>n()(h.REWARD_LABEL_EQUIPMENT_TYPE)),j=x(()=>Object.keys(Ye));ke(Y,{get title(){return a(te)},get values(){return a(j)},get value(){return a(m)},set value(Q){D(m,Q)},required:!0,$$legacy:!0})};J(V,Y=>{(a(s)===k.CHEST||a(s)===k.RUNES)&&Y(le)},!0)}p(R,L)};J(b,R=>{a(s)===k.EQUIPMENT?R(y):R(K,!1)})}var M=T(b,2),w=x(()=>n()(h.REWARD_LABEL_AMOUNT));ze(M,{get title(){return a(w)},required:!0,children:(R,L)=>{var V=Xe(),le=ve(V);{var Y=j=>{var Q=Sr();Ie(Q),Pe(Q,()=>a(_),re=>D(_,re)),p(j,Q)},te=j=>{var Q=Rr();Ie(Q),Pe(Q,()=>a(_),re=>D(_,re)),p(j,Q)};J(le,j=>{a(s)===k.GEMS?j(Y):j(te,!1)})}p(R,V)},$$slots:{default:!0}});var q=T(M,2);{var W=R=>{var L=x(()=>n()(h.REWARD_LABEL_EQUIPMENT_MORE));ze(R,{get title(){return a(L)},children:(V,le)=>{var Y=Ar();Ie(Y),H(()=>Et(Y,"placeholder",n()(h.EQUIPMENT_MORE_PLACEHOLDER))),Pe(Y,()=>a(c),te=>D(c,te)),p(V,Y)},$$slots:{default:!0}})};J(q,R=>{a(s)===k.EQUIPMENT&&R(W)})}var I=T(q,2),C=$(I);C.__click=[Nr,o];var z=$(C,!0);H(()=>B(z,n()(h.CANCEL))),E(C);var F=T(C,2);F.__click=N;var ae=$(F,!0);H(()=>B(ae,n()(h.SAVE))),E(F);var Z=T(F,2);{var he=R=>{var L=Or();L.__click=[Tr,n,l],p(R,L)};J(Z,R=>{l()&&R(he)})}E(I),E(g),p(t,g),me()}ye(["click"]);var Ir=A('<section class="material-icon"><!></section>');function st(t,e){var r=Ir(),n=$(r);Ke(n,e,"default",{}),E(r),p(t,r)}var Pr=A('<button class="svelte-4xatps">Se déconnecter</button>');function wr(t){var e=Pr();St("click",e,function(...r){var n;(n=Jt)==null||n.apply(this,r)}),p(t,e)}const Ae="T_Reward";async function Lr(t,e){const r=await se.from(Ae).upsert({...e,profile_name:t},{onConflict:"user_id, profile_name, cycle_index"}).select();if(r.error)throw r.error;return r.data[0]}async function Cr(t,e){let r;if(t?r=await se.from(Ae).delete().match({profile_name:t,cycle_index:e}).select():r=await se.from(Ae).delete().match({cycle_index:e}).is("profile_name",null).select(),r.error)throw r.error;return r.data[0]}async function lt(t=null){let e;if(t?e=await se.from(Ae).select().eq("profile_name",t):e=await se.from(Ae).select().is("profile_name",null),e.error)throw e.error;const r=e.data,n=[];for(const o of r){const d=o;n[d.cycle_index]=d}return n}const ce=mt(void 0),je="T_Profile";async function xr(){const t=await se.from(je).select();if(t.error)throw t.error;return t.data.map(e=>e.name)}async function Ur(t){const e=await se.from(je).insert({name:t}).select();if(e.error)throw e.error;return e.data}async function Fr(t){const e=await se.from(je).delete().match({name:t}).select();if(e.error)throw e.error;return e.data[0]}function Hr(t,e,r){a(e)!==""&&(Ur(a(e)),D(r,[...a(r),a(e)]),D(e,""))}var qr=(t,e)=>e(void 0),Yr=(t,e,r)=>e(a(r)),Br=(t,e,r,n)=>{confirm(e()(h.PROFILE_DELETE_CONFIRM))&&r(a(n))},zr=A('<div class="svelte-2icnig"><button class="svelte-2icnig"> </button> <button class="material-icon delete-profile svelte-2icnig">delete</button></div>'),Qr=A('<div> </div> <div class="profiles svelte-2icnig"><div class="svelte-2icnig"><button class="svelte-2icnig"> </button></div> <!></div> <div><b> <span class="required svelte-2icnig">*</span> :</b></div> <input type="text"> <button class="svelte-2icnig"> </button>',1);function Wr(t,e){be(e,!1);const r=_e(),n=()=>X(ce,"$currentProfile",r),o=()=>X($e,"$_",r);let d=U(e,"onclose",8,void 0),l=G(""),u=G([]);function i(m){Fr(m),D(u,a(u).filter(v=>v!==m))}function s(m){ce.set(m),d()&&d()()}Ge(async()=>{D(u,await xr())}),Ee();var f=x(()=>n()??o()(h.PROFILE_DEFAULT));bt(t,{get title(){return a(f)},get onclose(){return d()},children:(m,v)=>{var _=Qr(),c=ve(_),N=$(c,!0);H(()=>B(N,o()(h.PROFILE_INFO))),E(c);var g=T(c,2),S=$(g),O=$(S);O.__click=[qr,s];var P=$(O,!0);H(()=>B(P,o()(h.PROFILE_DEFAULT))),E(O),E(S);var b=T(S,2);de(b,1,()=>a(u),fe,(I,C)=>{var z=zr(),F=$(z);F.__click=[Yr,s,C];var ae=$(F,!0);E(F);var Z=T(F,2);Z.__click=[Br,o,i,C],E(z),H(()=>B(ae,a(C))),p(I,z)}),E(g);var y=T(g,2),K=$(y),M=$(K,!0);H(()=>B(M,o()(h.PROFILE_CREATE_LABEL))),Le(2),E(K),E(y);var w=T(y,2);Ie(w),H(()=>Et(w,"placeholder",o()(h.PROFILE_CREATE_PLACEHOLDER)));var q=T(w,2);q.__click=[Hr,l,u];var W=$(q,!0);H(()=>B(W,o()(h.PROFILE_CREATE))),E(q),Pe(w,()=>a(l),I=>D(l,I)),p(m,_)},$$slots:{default:!0}}),me()}ye(["click"]);var Gr=(t,e,r)=>e(a(r)),Kr=A('<div class="filter svelte-1uygbo0"><button><!></button> </div>'),Jr=A('<section class="svelte-1uygbo0"></section>');function Vr(t,e){be(e,!1);const r=_e(),n=()=>X(ue,"$localStorageStore",r),o=()=>X($e,"$_",r);function d(u){ue.update(i=>{const s=i.filters;return s&&(s[u]=!s[u]),{...i,filters:s}})}Ge(()=>{if(!ge(ue).filters){let i={};for(const s in Fe)i[s]=!0;for(const s in k)s!==k.EQUIPMENT&&(i[s]=!0);ue.update(s=>({...s,filters:i}))}}),Ee();var l=Jr();de(l,5,()=>Object.keys(n().filters||{}),fe,(u,i)=>{var s=Kr(),f=$(s);f.__click=[Gr,d,i];const m=x(()=>`${`material-icon ${a(i).toLowerCase()}`??""} svelte-1uygbo0`);var v=$(f);{var _=N=>{var g=we("check");p(N,g)};J(v,N=>{n().filters[a(i)]&&N(_)})}E(f);var c=T(f);H(()=>B(c,` ${o()(a(i))??""}`)),E(s),H(()=>{Je(f,a(m)),Ve(f,"checked",n().filters[a(i)])}),p(u,s)}),E(l),p(t,l),me()}ye(["click"]);var jr=A("<div> </div> <!>",1),Xr=(t,e)=>D(e,!0),Zr=(t,e,r)=>{D(e,!0),ft(r,-1)},ea=(t,e,r)=>{D(e,!1),ft(r)},ta=A('<div class="months svelte-18bzzu6"></div>'),ra=A('<div class="year svelte-18bzzu6"><!></div>'),aa=A('<header class="svelte-18bzzu6"><button class="profile svelte-18bzzu6"> </button> <div class="year-controls svelte-18bzzu6"><button class="svelte-18bzzu6"><!></button> <h2 class="svelte-18bzzu6"> </h2> <button class="svelte-18bzzu6"><!></button></div> <div><!></div></header> <div class="calendar svelte-18bzzu6"><!></div>',1),na=A("<!> <!> <!> <!>",1);function Ea(t,e){be(e,!1);const r=_e(),n=()=>X(dt,"$momentStore",r),o=()=>X($e,"$_",r),d=()=>X(ce,"$currentProfile",r);let l=G([]),u=G(new Date().getFullYear()),i=G(),s=G(!1),f=G(!0);function m(M){D(i,M)}function v(M){if(!a(i))throw new Error("No selected day");at(l,a(l)[Ue(a(i),xe)]=M),D(i,void 0),Lr(ge(ce),M)}function _(){if(!a(i))throw new Error("No selected day");return Ue(a(i),xe)}function c(){if(!a(i))throw new Error("No selected day");const M=_();Cr(ge(ce),M),at(l,a(l)[M]=void 0),D(i,void 0)}const N=ce.subscribe(async M=>{D(l,await lt(M))});Ge(async()=>{D(l,await lt(ge(ce))),console.log(await Gt())}),_t(()=>{N()}),Ee();var g=na(),S=ve(g);{var O=M=>{var w=x(()=>n()(a(i)).format("dddd D MMMM yyyy"));bt(M,{get title(){return a(w)},onclose:()=>{D(i,void 0)},children:(q,W)=>{var I=jr(),C=ve(I),z=$(C,!0);H(()=>B(z,o()(h.REWARDS_FORM_INFO))),E(C);var F=T(C,2);Dr(F,Ce({get reward(){return a(l)[_()]},oncancel:()=>{D(i,void 0)}},()=>({onsave:v,date:a(i),ondelete:c}))),p(q,I)},$$slots:{default:!0}})};J(S,M=>{a(i)&&M(O)})}var P=T(S,2);{var b=M=>{Wr(M,{onclose:()=>D(s,!1)})};J(P,M=>{a(s)&&M(b)})}var y=T(P,2);nt(y,{children:(M,w)=>{var q=aa(),W=ve(q),I=$(W);I.__click=[Xr,s];var C=$(I,!0);H(()=>B(C,d()?`${o()(h.PROFILE)} : ${d()}`:o()(h.PROFILE_DEFAULT))),E(I);var z=T(I,2),F=$(z);F.__click=[Zr,f,u];var ae=$(F);st(ae,{children:(ne,R)=>{Le();var L=we("arrow_back_ios");p(ne,L)},$$slots:{default:!0}}),E(F);var Z=T(F,2),he=$(Z,!0);E(Z);var ee=T(Z,2);ee.__click=[ea,f,u];var Ne=$(ee);st(Ne,{children:(ne,R)=>{Le();var L=we("arrow_forward_ios");p(ne,L)},$$slots:{default:!0}}),E(ee),E(z);var pe=T(z,2),Te=$(pe);Vr(Te,{}),E(pe),E(W);var Me=T(W,2),Oe=$(Me);Kt(Oe,()=>a(u),ne=>{var R=ra(),L=$(R);nt(L,{get leftToRight(){return a(f)},children:(V,le)=>{var Y=ta();de(Y,5,()=>er,fe,(te,j,Q)=>{var re=x(()=>n()(new Date(0,Q)).format("MMMM")),pt=x(()=>Q===new Date().getMonth()&&a(u)===new Date().getFullYear());Vt(te,{get title(){return a(re)},get outline(){return a(pt)},children:(Mt,oa)=>{_r(Mt,Ce(()=>({month:Q,year:a(u),onselectday:m,calendar:a(l)})))},$$slots:{default:!0}})}),E(Y),p(V,Y)},$$slots:{default:!0}}),E(R),p(ne,R)}),E(Me),H(()=>B(he,a(u))),p(M,q)},$$slots:{default:!0}});var K=T(y,2);wr(K),p(t,g),me()}ye(["click"]);export{Ea as component};
