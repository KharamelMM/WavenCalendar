import{l as ft,a as E,t as m,b as z,d as Pe,s as Me,c as Ne,g as Ie,e as Qe,f as dt}from"../chunks/disclose-version.kqF2aIDQ.js";import{i as se}from"../chunks/legacy.BasM-7ul.js";import{G as B,H as et,aw as _t,ax as ht,a as Et,F as tt,P as at,O as Ue,U as yt,Q as re,L as Se,ai as gt,aj as bt,E as Mt,au as rt,J as Nt,K as Fe,M as Te,aq as pt,ay as ye,N as nt,B as We,az as At,aA as mt,at as Rt,aB as St,aC as Tt,ag as Ot,a5 as Dt,y as Ke,aD as It,aE as wt,aF as kt,ao as $t,a8 as st,c as R,e as $,d as b,t as q,p as le,j as s,b as oe,a0 as D,aG as we,aH as xt,v as W,q as x,f as ue,aI as lt,aJ as Ge}from"../chunks/utils.DrHicdKG.js";import{b as Ct,p as S,i as j,o as Pt,s as Je}from"../chunks/preload-helper.ClhVAyU4.js";import{t as g,d as pe,h as Ae,r as Oe,b as De,i as Ut,f as Ve,j as je,k as Lt,s as Le,M as Ht,C as Yt}from"../chunks/Modal.BJEb9Cd7.js";function Bt(t,e,a){B&&et();var r=t,n=yt,o,i=_t()?ht:Et;tt(()=>{i(n,n=e())&&(o&&at(o),o=Ue(()=>a(r)))}),B&&(r=re)}function ce(t,e){return e}function qt(t,e,a,r){for(var n=[],o=e.length,i=0;i<o;i++)mt(e[i].e,n,!0);var v=o>0&&n.length===0&&a!==null;if(v){var h=a.parentNode;Rt(h),h.append(a),r.clear(),X(t,e[0].prev,e[o-1].next)}St(n,()=>{for(var c=0;c<o;c++){var u=e[c];v||(r.delete(u.k),X(t,u.prev,u.next)),Tt(u.e,!v)}})}function ve(t,e,a,r,n,o=null){var i=t,v={flags:e,items:new Map,first:null};{var h=t;i=B?Se(gt(h)):h.appendChild(bt())}B&&et();var c=null,u=!1;tt(()=>{var _=a(),f=Mt(_)?_:_==null?[]:rt(_),l=f.length;if(u&&l===0)return;u=l===0;let M=!1;if(B){var y=i.data===Nt;y!==(l===0)&&(i=Fe(),Se(i),Te(!1),M=!0)}if(B){for(var N=null,d,A=0;A<l;A++){if(re.nodeType===8&&re.data===pt){i=re,M=!0,Te(!1);break}var w=f[A],C=r(w,A);d=ot(re,v,N,null,w,C,A,n,e),v.items.set(C,d),N=d}l>0&&Se(Fe())}if(!B){var O=Ot;Qt(f,v,i,n,e,(O.f&ye)!==0,r)}o!==null&&(l===0?c?nt(c):c=Ue(()=>o(i)):c!==null&&at(c,()=>{c=null})),M&&Te(!0),a()}),B&&(i=re)}function Qt(t,e,a,r,n,o,i){var v=t.length,h=e.items,c=e.first,u=c,_,f=null,l=[],M=[],y,N,d,A;for(A=0;A<v;A+=1){if(y=t[A],N=i(y,A),d=h.get(N),d===void 0){var w=u?u.e.nodes_start:a;f=ot(w,e,f,f===null?e.first:f.next,y,N,A,r,n),h.set(N,f),l=[],M=[],u=f.next;continue}if(Ft(d,y,A),d.e.f&ye&&nt(d.e),d!==u){if(_!==void 0&&_.has(d)){if(l.length<M.length){var C=M[0],O;f=C.prev;var Q=l[0],k=l[l.length-1];for(O=0;O<l.length;O+=1)Xe(l[O],C,a);for(O=0;O<M.length;O+=1)_.delete(M[O]);X(e,Q.prev,k.next),X(e,f,Q),X(e,k,C),u=C,f=k,A-=1,l=[],M=[]}else _.delete(d),Xe(d,u,a),X(e,d.prev,d.next),X(e,d,f===null?e.first:f.next),X(e,f,d),f=d;continue}for(l=[],M=[];u!==null&&u.k!==N;)(o||!(u.e.f&ye))&&(_??(_=new Set)).add(u),M.push(u),u=u.next;if(u===null)continue;d=u}l.push(d),f=d,u=d.next}if(u!==null||_!==void 0){for(var K=_===void 0?[]:rt(_);u!==null;)(o||!(u.e.f&ye))&&K.push(u),u=u.next;var G=K.length;if(G>0){var J=v===0?a:null;qt(e,K,J,h)}}We.first=e.first&&e.first.e,We.last=f&&f.e}function Ft(t,e,a,r){At(t.v,e),t.i=a}function ot(t,e,a,r,n,o,i,v,h){var c=(h&wt)!==0,u=(h&kt)===0,_=c?u?Dt(n):Ke(n):n,f=h&It?Ke(i):i,l={i:f,v:_,k:o,a:null,e:null,prev:a,next:r};try{return l.e=Ue(()=>v(t,_,f),B),l.e.prev=a&&a.e,l.e.next=r&&r.e,a===null?e.first=l:(a.next=l,a.e.next=l.e),r!==null&&(r.prev=l,r.e.prev=l.e),l}finally{}}function Xe(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,n=e?e.e.nodes_start:a,o=t.e.nodes_start;o!==r;){var i=$t(o);n.before(o),o=i}}function X(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Wt(t,e){var a=t.__className,r=Kt(e);B&&t.className===r?t.__className=r:(a!==r||B&&t.className!==r)&&(e==null?t.removeAttribute("class"):t.className=r,t.__className=r)}function Kt(t){return t??""}function Gt(t,e,a){if(a){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function it(t,e,a){if(t.multiple)return jt(t,e);for(var r of t.options){var n=fe(r);if(Ct(n,e)){r.selected=!0;return}}(!a||e!==void 0)&&(t.selectedIndex=-1)}function Jt(t,e){st(()=>{var a=new MutationObserver(()=>{var r=t.__value;it(t,r)});return a.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{a.disconnect()}})}function Vt(t,e,a=e){var r=!0;ft(t,"change",n=>{var o=n?"[selected]":":checked",i;if(t.multiple)i=[].map.call(t.querySelectorAll(o),fe);else{var v=t.querySelector(o)??t.querySelector("option:not([disabled])");i=v&&fe(v)}a(i)}),st(()=>{var n=e();if(it(t,n,r),r&&n===void 0){var o=t.querySelector(":checked");o!==null&&(n=fe(o),a(n))}t.__value=n,r=!1}),Jt(t)}function jt(t,e){for(var a of t.options)a.selected=~e.indexOf(fe(a))}function fe(t){return"__value"in t?t.__value:t.value}const Xt=[g.JANUARY,g.FEBRUARY,g.MARCH,g.APRIL,g.MAY,g.JUNE,g.JULY,g.AUGUST,g.SEPTEMBER,g.OCTOBER,g.NOVEMBER,g.DECEMBER],ne=[g.SHORT_SUNDAY,g.SHORT_MONDAY,g.SHORT_TUESDAY,g.SHORT_WEDNESDAY,g.SHORT_THURSDAY,g.SHORT_FRIDAY,g.SHORT_SATURDAY],ge=new Date(2024,0,1);function ut(t,e){return new Date(e,t+1,0).getDate()}function ct(t,e){return new Date(e,t,1).getDay()}function vt(t,e){return(t-e+ne.length)%ne.length}function zt(t,e,a=0){const r=vt(ct(t,e),a),n=ut(t,e);return Math.ceil((r+n)/7)}function Zt(t,e,a,r,n=0){return a+r*ne.length-vt(ct(t,e),n)+1}function ea(t,e){return Math.floor((t.getTime()-e.getTime())/(1e3*60*60*24))}function be(t,e){return(ea(t,e)%365+365)%365}var T=(t=>(t.GEMS="GEMS",t.KAMAS="KAMAS",t.EQUIPMENT="EQUIPMENT",t.CHEST="CHEST",t.WAKFU="WAKFU",t.RUNES="RUNES",t))(T||{}),ta=m('<span class="text svelte-4cg0go"> </span>'),aa=m('<section class="tooltip svelte-4cg0go"><!> <!></section>');function ra(t,e){let a=S(e,"title",8,void 0);var r=aa(),n=R(r);pe(n,e,"default",{});var o=$(n,2);{var i=v=>{var h=ta(),c=R(h,!0);b(h),q(()=>z(c,a())),E(v,h)};j(o,v=>{a()&&v(i)})}b(r),E(t,r)}var na=m("<button><div> </div></button>");function sa(t,e){le(e,!1);const a=Me(),r=()=>Ne(Ae,"$_",a);let n=S(e,"currentDate",8),o=S(e,"dayOfMonth",8),i=S(e,"reward",8,void 0),v=S(e,"onclick",8);const h=new Date;function c(){if(i())return i().type===T.EQUIPMENT?i().rarety.toLowerCase():i().type.toLowerCase()}se();var u=D(()=>i()?`${i().amount}× ${r()(i().type)}`:void 0);ra(t,{get title(){return s(u)},children:(_,f)=>{var l=na();const M=D(()=>`${c()??""} svelte-endvbj`);l.__click=function(...A){var w;(w=v())==null||w.apply(this,A)};const y=D(()=>n().toDateString()===h.toDateString());var N=R(l),d=R(N,!0);b(N),b(l),q(()=>{Wt(l,s(M)),l.disabled=n()>h,Gt(l,"today",s(y)),z(d,o())}),E(_,l)},$$slots:{default:!0}}),oe()}Pe(["click"]);function la(t,e){le(e,!1);const a=Me(),r=()=>Ne(Ae,"$_",a);let n=S(e,"key",8);se(),we();var o=Ie();q(()=>z(o,r()(n()))),E(t,o),oe()}var oa=m("<th><!></th>"),ia=m("<td><!></td>"),ua=m("<tr></tr>"),ca=m("<table><thead><tr></tr></thead><tbody></tbody></table>");function va(t,e){le(e,!1);let a=S(e,"year",8),r=S(e,"month",8),n=S(e,"onselectday",8),o=S(e,"calendar",8),i=S(e,"weekOffset",8,1);const v=ne.length;function h(l){let M=be(l,ge);return o()[M]}se();var c=ca(),u=R(c),_=R(u);ve(_,5,()=>({length:v}),ce,(l,M,y)=>{var N=oa(),d=R(N);la(d,{get key(){return ne[(y+i())%v]}}),b(N),E(l,N)}),b(_),b(u);var f=$(u);ve(f,5,()=>({length:zt(r(),a(),i())}),ce,(l,M,y)=>{var N=ua();const d=D(()=>ut(r(),a()));ve(N,5,()=>ne,ce,(w,C,O)=>{var Q=ia();const k=D(()=>Zt(r(),a(),O,y,i()));var K=R(Q);{var G=J=>{const P=D(()=>new Date(a(),r(),s(k))),U=D(()=>h(s(P)));sa(J,{get currentDate(){return s(P)},get dayOfMonth(){return s(k)},get reward(){return s(U)},onclick:()=>n()(s(P))})};j(K,J=>{s(k)>0&&s(k)<=s(d)&&J(G)})}b(Q),E(w,Q)}),b(N),E(l,N)}),b(f),b(c),E(t,c),oe()}var ke=(t=>(t.COMPANIONS="COMPANIONS",t.SPELLS="SPELLS",t.EQUIPMENTS="EQUIPMENTS",t))(ke||{}),$e=(t=>(t.RING="RING",t.ARMBAND="ARMBAND",t.COMPANION="COMPANION",t))($e||{}),xe=(t=>(t.COMMON="COMMON",t.RARE="RARE",t.KROSMIC="KROSMIC",t.INFINITE="INFINITE",t))(xe||{}),fa=m("<span> </span>"),da=m('<section class="svelte-1j4lmfo"><!> <!></section>');function Ce(t,e){let a=S(e,"title",8,void 0);var r=da(),n=R(r);{var o=v=>{var h=fa(),c=R(h);b(h),q(()=>z(c,`${a()??""}:`)),E(v,h)};j(n,v=>{a()&&v(o)})}var i=$(n,2);pe(i,e,"default",{}),b(r),E(t,r)}var _a=m("<option> </option>"),ha=m("<select></select>");function Ee(t,e){le(e,!1);const a=Me(),r=()=>Ne(Ae,"$_",a);let n=S(e,"title",8,void 0),o=S(e,"values",24,()=>[]),i=S(e,"value",12);se(),Ce(t,{get title(){return n()},children:(v,h)=>{var c=ha();q(()=>{i(),xt(()=>{o(),r()})}),ve(c,5,o,ce,(u,_)=>{var f=_a(),l={},M=R(f,!0);q(()=>z(M,r()(s(_)))),b(f),q(()=>{l!==(l=s(_))&&(f.value=(f.__value=s(_))==null?"":s(_))}),E(u,f)}),b(c),Vt(c,i),E(v,c)},$$slots:{default:!0}}),oe()}function Ea(t){return Object.values(t).filter(e=>typeof e!="number")}var ya=m("<!> <!>",1),ga=m('<input type="number" min="100" max="250" step="50">'),ba=m('<input type="number" min="1" max="5000">'),Ma=m('<input type="text">'),Na=(t,e)=>e()(),pa=m('<button class="delete material-icon svelte-tu6hhq">delete</button>'),Aa=m('<section class="svelte-tu6hhq"><!> <!> <!> <!> <div class="controls svelte-tu6hhq"><button class="secondary svelte-tu6hhq"> </button> <button class="primary svelte-tu6hhq"> </button> <!></div></section>');function ma(t,e){var de,_e,he,Re,Ye,Be,qe;le(e,!1);const a=Me(),r=()=>Ne(Ae,"$_",a);let n=S(e,"oncancel",8),o=S(e,"onsave",8),i=S(e,"ondelete",8,void 0),v=S(e,"reward",8,void 0),h=S(e,"date",8),c=W(((de=v())==null?void 0:de.type)??T.EQUIPMENT),u=W(((_e=v())==null?void 0:_e.type)===T.EQUIPMENT?v().rarety:xe.COMMON),_=W(((he=v())==null?void 0:he.type)===T.RUNES||((Re=v())==null?void 0:Re.type)===T.CHEST?v().equipment:ke.EQUIPMENTS),f=W(((Ye=v())==null?void 0:Ye.type)===T.EQUIPMENT?v().item:$e.RING),l=W(((Be=v())==null?void 0:Be.amount)??1),M=W(((qe=v())==null?void 0:qe.type)===T.EQUIPMENT?v().description:void 0);function y(){let p;const I={cycle_index:be(h(),ge),amount:s(l)};switch(s(c)){case T.GEMS:p={...I,type:s(c),amount:s(l)};break;case T.EQUIPMENT:p={...I,type:s(c),rarety:s(u),item:s(f),description:s(M)};break;case T.CHEST:p={...I,type:s(c),equipment:s(_)};break;case T.RUNES:p={...I,type:s(c),equipment:s(_)};break;case T.KAMAS:case T.WAKFU:p={...I,type:s(c)};break}o()(p)}se();var N=Aa(),d=R(N),A=D(()=>r()(g.REWARD_LABEL_TYPE)),w=D(()=>Ea(T));Ee(d,{get title(){return s(A)},get values(){return s(w)},get value(){return s(c)},set value(p){x(c,p)},$$legacy:!0});var C=$(d,2);{var O=p=>{var I=ya(),H=ue(I),V=D(()=>r()(g.REWARD_LABEL_RARETY)),L=D(()=>Object.keys(xe));Ee(H,{get title(){return s(V)},get values(){return s(L)},get value(){return s(u)},set value(te){x(u,te)},$$legacy:!0});var ee=$(H,2),F=D(()=>r()(g.REWARD_LABEL_ITEM_TYPE)),Y=D(()=>Object.keys($e));Ee(ee,{get title(){return s(F)},get values(){return s(Y)},get value(){return s(f)},set value(te){x(f,te)},$$legacy:!0}),E(p,I)},Q=p=>{var I=Qe(),H=ue(I);{var V=L=>{var ee=D(()=>r()(g.REWARD_LABEL_EQUIPMENT_TYPE)),F=D(()=>Object.keys(ke));Ee(L,{get title(){return s(ee)},get values(){return s(F)},get value(){return s(_)},set value(Y){x(_,Y)},$$legacy:!0})};j(H,L=>{(s(c)===T.CHEST||s(c)===T.RUNES)&&L(V)},!0)}E(p,I)};j(C,p=>{s(c)===T.EQUIPMENT?p(O):p(Q,!1)})}var k=$(C,2),K=D(()=>r()(g.REWARD_LABEL_AMOUNT));Ce(k,{get title(){return s(K)},children:(p,I)=>{var H=Qe(),V=ue(H);{var L=F=>{var Y=ga();Oe(Y),De(Y,()=>s(l),te=>x(l,te)),E(F,Y)},ee=F=>{var Y=ba();Oe(Y),De(Y,()=>s(l),te=>x(l,te)),E(F,Y)};j(V,F=>{s(c)===T.GEMS?F(L):F(ee,!1)})}E(p,H)},$$slots:{default:!0}});var G=$(k,2);{var J=p=>{var I=D(()=>r()(g.REWARD_LABEL_EQUIPMENT_MORE));Ce(p,{get title(){return s(I)},children:(H,V)=>{var L=Ma();Oe(L),q(()=>Ut(L,"placeholder",r()(g.EQUIPMENT_MORE_PLACEHOLDER))),De(L,()=>s(M),ee=>x(M,ee)),E(H,L)},$$slots:{default:!0}})};j(G,p=>{s(c)===T.EQUIPMENT&&p(J)})}var P=$(G,2),U=R(P);U.__click=[Na,n];var Z=R(U,!0);q(()=>z(Z,r()(g.CANCEL))),b(U);var ae=$(U,2);ae.__click=y;var He=R(ae,!0);q(()=>z(He,r()(g.SAVE))),b(ae);var ie=$(ae,2);{var me=p=>{var I=pa();I.__click=function(...H){var V;(V=i())==null||V.apply(this,H)},E(p,I)};j(ie,p=>{i()&&p(me)})}b(P),b(N),E(t,N),oe()}Pe(["click"]);var Ra=m('<section class="svelte-1p5vij8"><!></section>');function ze(t,e){let a=S(e,"leftToRight",8,!0);const r=1e3;var n=Ra(),o=R(n);pe(o,e,"default",{}),b(n),Ve(1,n,()=>je,()=>({delay:250,x:r*(a()?-1:1)})),Ve(2,n,()=>je,()=>({duration:250,x:r*(a()?1:-1)})),E(t,n)}var Sa=m('<section class="material-icon"><!></section>');function Ze(t,e){var a=Sa(),r=R(a);pe(r,e,"default",{}),b(a),E(t,a)}var Ta=m('<button class="svelte-4xatps">Se déconnecter</button>');function Oa(t){var e=Ta();dt("click",e,function(...a){var r;(r=Lt)==null||r.apply(this,a)}),E(t,e)}async function Da(t){const e=await Le.from("T_Reward").upsert(t).select();if(e.error)throw e.error;return e.data[0]}async function Ia(t){const e=await Le.from("T_Reward").delete().match({cycle_index:t}).select();if(e.error)throw e.error;return e.data[0]}async function wa(){const t=await Le.from("T_Reward").select();if(t.error)throw t.error;const e=t.data;console.log(e);const a=[];for(const r of e){const n=r;a[n.cycle_index]=n}return a}var ka=(t,e,a)=>{x(e,!0),lt(a,-1)},$a=(t,e,a)=>{x(e,!1),lt(a)},xa=m('<div class="months svelte-oihcp3"></div>'),Ca=m('<div class="year svelte-oihcp3"><!></div>'),Pa=m('<header class="svelte-oihcp3"><button class="svelte-oihcp3"><!></button> <h2 class="svelte-oihcp3"> </h2> <button class="svelte-oihcp3"><!></button></header> <div class="calendar svelte-oihcp3"><!></div>',1),Ua=m("<!> <!> <!>",1);function Qa(t,e){le(e,!1);let a=W([]),r=W(new Date().getFullYear()),n=W(),o=W(!0);function i(y){x(n,y)}function v(y){if(!s(n))throw new Error("No selected day");Ge(a,s(a)[be(s(n),ge)]=y),x(n,void 0),Da(y)}function h(){if(!s(n))throw new Error("No selected day");return be(s(n),ge)}function c(){if(!s(n))throw new Error("No selected day");const y=h();Ia(y),Ge(a,s(a)[y]=void 0),x(n,void 0)}Pt(async()=>{x(a,await wa())}),se();var u=Ua(),_=ue(u);{var f=y=>{var N=D(()=>s(n).toDateString());Ht(y,{get title(){return s(N)},onclose:()=>{x(n,void 0)},children:(d,A)=>{ma(d,Je({get reward(){return s(a)[h()]},oncancel:()=>{x(n,void 0)}},()=>({onsave:v,date:s(n),ondelete:c})))},$$slots:{default:!0}})};j(_,y=>{s(n)&&y(f)})}var l=$(_,2);ze(l,{children:(y,N)=>{var d=Pa(),A=ue(d),w=R(A);w.__click=[ka,o,r];var C=R(w);Ze(C,{children:(P,U)=>{we();var Z=Ie("arrow_back_ios");E(P,Z)},$$slots:{default:!0}}),b(w);var O=$(w,2),Q=R(O,!0);b(O);var k=$(O,2);k.__click=[$a,o,r];var K=R(k);Ze(K,{children:(P,U)=>{we();var Z=Ie("arrow_forward_ios");E(P,Z)},$$slots:{default:!0}}),b(k),b(A);var G=$(A,2),J=R(G);Bt(J,()=>s(r),P=>{var U=Ca(),Z=R(U);ze(Z,{get leftToRight(){return s(o)},children:(ae,He)=>{var ie=xa();ve(ie,5,()=>Xt,ce,(me,de,_e)=>{Yt(me,{get i18nTitleKey(){return s(de)},children:(he,Re)=>{va(he,Je(()=>({month:_e,year:s(r),onselectday:i,calendar:s(a)})))},$$slots:{default:!0}})}),b(ie),E(ae,ie)},$$slots:{default:!0}}),b(U),E(P,U)}),b(G),q(()=>z(Q,s(r))),E(y,d)},$$slots:{default:!0}});var M=$(l,2);Oa(M),E(t,u),oe()}Pe(["click"]);export{Qa as component};
