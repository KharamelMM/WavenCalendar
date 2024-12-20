import{s as lt,b as o,a as u,t as k,c as j,f as It,d as et,j as Ct,e as mt}from"../chunks/disclose-version.BAK9tArJ.js";import{i as ot}from"../chunks/legacy.0xCLN7Bn.js";import{p as nt,c as t,t as s,r as a,s as e,aD as Nt,a as it,D as I,f as q,N as xt,J as z,M as rt}from"../chunks/utils.D6mM6Ojo.js";import{i as M}from"../chunks/if.wMG7fNd6.js";import{i as kt,d as st,a as l,$ as vt,j as Lt,b as yt,k as Ft,t as at,s as Mt}from"../chunks/client.CZ4pHLIx.js";import{q as jt,M as St,r as Ut,s as Dt,b as Ht}from"../chunks/Modal.DvupXWw7.js";import{w as ct}from"../chunks/index.WIarMszz.js";import{a as Wt}from"../chunks/preload-helper.CkRfzCf3.js";import{g as ut}from"../chunks/entry.Bcj6Jddb.js";import{p as Rt}from"../chunks/stores.ACQjDSHb.js";const Pt=!0,Ea=Object.freeze(Object.defineProperty({__proto__:null,prerender:Pt},Symbol.toStringTag,{value:"Module"})),[ft,Tt]=kt({duration:i=>Math.sqrt(i*200),fallback(i){const n=getComputedStyle(i),v=n.transform==="none"?"":n.transform;return{duration:600,easing:jt,css:r=>`
				transform: ${v} scale(${r});
				opacity: ${r}
			`}}});function Bt(){const i=ct(!1),n=ct(null),v=ct(!1);async function r(N){c(),i.set(!0);let b=null;try{b=(await st.auth.signInWithOtp({email:N,options:{emailRedirectTo:window.location.toString()}})).error}catch(d){d instanceof Error&&(b=d)}b?n.set(b):v.set(!0),i.set(!1)}function c(){i.set(!1),n.set(null),v.set(!1)}return[v,n,i,r,c]}async function dt(){return st.auth.signOut()}var Gt=k('<section class="svelte-l0ju6b"><div> </div> <div><b> </b> </div> <div><b> </b> <ol class="svelte-l0ju6b"><li class="svelte-l0ju6b"> </li> <li class="svelte-l0ju6b"> <b>WavenCalendar@gmail.com</b></li> <li class="svelte-l0ju6b"> </li></ol></div> <div><b> </b> </div> <div><b> </b> <a href="https://github.com/KharamelMM/WavenCalendar">Github</a> </div> <div> </div></section>');function qt(i,n){nt(n,!1);const v=lt(),r=()=>j(vt,"$_",v);ot();var c=Gt(),N=t(c),b=t(N,!0);s(()=>o(b,r()(l.INFO_INTRODUCTION))),a(N);var d=e(N,2),w=t(d),E=t(w,!0);s(()=>o(E,r()(l.INFO_OBJECTIVE_TITLE))),a(w);var K=e(w);s(()=>o(K,` ${r()(l.INFO_OBJECTIVE_TEXT)??""}`)),a(d);var C=e(d,2),S=t(C),Q=t(S,!0);s(()=>o(Q,r()(l.INFO_AUTHENTICATION_TITLE))),a(S);var V=e(S);s(()=>o(V,` ${r()(l.INFO_AUTHENTICATION_TEXT)??""} `));var g=e(V),h=t(g),U=t(h,!0);s(()=>o(U,r()(l.INFO_AUTHENTICATION_STEP_1))),a(h);var W=e(h,2),R=t(W);s(()=>o(R,`${r()(l.INFO_AUTHENTICATION_STEP_2)??""} `)),Nt(),a(W);var p=e(W,2),L=t(p,!0);s(()=>o(L,r()(l.INFO_AUTHENTICATION_STEP_3))),a(p),a(g),a(C);var P=e(C,2),y=t(P),F=t(y,!0);s(()=>o(F,r()(l.INFO_CONFIDENTIALITY_TITLE))),a(y);var A=e(y);s(()=>o(A,` ${r()(l.INFO_CONFIDENTIALITY_TEXT)??""}`)),a(P);var $=e(P,2),m=t($),D=t(m,!0);s(()=>o(D,r()(l.INFO_OPENSOURCE_TITLE))),a(m);var x=e(m);s(()=>o(x,` ${r()(l.INFO_OPENSOURCE_TEXT_1)??""} `));var f=e(x,2);s(()=>o(f,`.
		${r()(l.INFO_OPENSOURCE_TEXT_2)??""}`)),a($);var O=e($,2),H=t(O,!0);s(()=>o(H,r()(l.INFO_END))),a(O),a(c),u(i,c),it()}function Kt(i,n,v){i.key==="Enter"&&(i.preventDefault(),n(I(v)))}var Vt=k('<div class="loading svelte-1da491j"><div class="circle svelte-1da491j"></div></div>'),Xt=k('<p class="svelte-1da491j"> </p> <button class="primary svelte-1da491j"> </button>',1),Yt=k('<p class="svelte-1da491j"> </p>'),Jt=(i,n,v)=>n(I(v)),zt=k('<!> <div class="svelte-1da491j"><b class="svelte-1da491j"> <span class="required svelte-1da491j">*</span> :</b></div> <input type="email" autocomplete="email" class="svelte-1da491j"> <button class="primary svelte-1da491j"> </button>',1);function Qt(i,n){nt(n,!1);const v=lt(),r=()=>j(vt,"$_",v),c=()=>j(K,"$loading",v),N=()=>j(E,"$error",v),b=()=>j(w,"$valid",v);let d=rt();const[w,E,K,C,S]=Bt();ot();var Q=xt(()=>r()(l.INFO_WELCOME));St(i,{get title(){return I(Q)},children:(V,g)=>{var h=et(),U=q(h);{var W=p=>{var L=Vt();u(p,L)},R=p=>{var L=et(),P=q(L);{var y=A=>{var $=Xt(),m=q($),D=t(m,!0);a(m);var x=e(m,2);x.__click=S;var f=t(x,!0);s(()=>o(f,r()(l.AUTHENTICATION_RETRY))),a(x),s(()=>o(D,N().message)),u(A,$)},F=A=>{var $=et(),m=q($);{var D=f=>{var O=Yt(),H=t(O,!0);s(()=>o(H,r()(l.AUTHENTICATION_CHECK_EMAIL))),a(O),u(f,O)},x=f=>{var O=zt(),H=q(O);qt(H,{});var X=e(H,2),Y=t(X),B=t(Y,!0);s(()=>o(B,r()(l.AUTHENTICATION_LABEL_YOUR_EMAIL))),Nt(2),a(Y),a(X);var G=e(X,2);Ut(G),G.__keydown=[Kt,C,d],s(()=>Dt(G,"placeholder",r()(l.AUTHENTICATION_PLACEHOLDER_EMAIL)));var Z=e(G,2);Z.__click=[Jt,C,d];var J=t(Z,!0);s(()=>o(J,r()(l.AUTHENTICATION_GET_LINK_BY_EMAIL))),a(Z),Ht(G,()=>I(d),_t=>z(d,_t)),u(f,O)};M(m,f=>{b()?f(D):f(x,!1)},!0)}u(A,$)};M(P,A=>{N()?A(y):A(F,!1)},!0)}u(p,L)};M(U,p=>{c()?p(W):p(R,!1)})}u(V,h)},$$slots:{default:!0}}),it()}It(["click","keydown"]);var Zt=k('<button class="svelte-5gvk78"> </button>');function ta(i,n){nt(n,!1);const v=lt(),r=()=>j(vt,"$_",v);ot();var c=Zt(),N=t(c,!0);s(()=>o(N,r()(l.DISCONNECT))),a(c),Ct("click",c,function(...b){dt==null||dt.apply(this,b)}),u(i,c),it()}var aa=()=>ut("/WavenCalendar"),ea=()=>ut("/WavenCalendar/stats"),ra=()=>ut("/WavenCalendar/calendar"),sa=(i,n)=>n("fr"),la=k('<bubble class="svelte-m3w8r2"></bubble>'),oa=(i,n)=>n("en"),na=k('<bubble class="svelte-m3w8r2"></bubble>'),ia=()=>window.location.href="https://github.com/KharamelMM/WavenCalendar",va=k("<section><!></section>"),_a=k('<!> <header class="svelte-m3w8r2"><div class="brand svelte-m3w8r2"><h1 class="svelte-m3w8r2"> </h1></div> <div class="navigation svelte-m3w8r2"><button class="with-icon svelte-m3w8r2"><div class="material-icon">edit_calendar</div> <div class="text svelte-m3w8r2"> </div></button> <button class="with-icon svelte-m3w8r2"><div class="material-icon">search</div> <div class="text svelte-m3w8r2"> </div></button> <button class="with-icon svelte-m3w8r2"><div class="material-icon">calendar_month</div> <div class="text svelte-m3w8r2"> </div></button></div> <div class="controls svelte-m3w8r2"><div class="langs svelte-m3w8r2"><button class="svelte-m3w8r2"><div class="lang svelte-m3w8r2">FR</div> <!></button> <button class="svelte-m3w8r2"><div class="lang svelte-m3w8r2">EN</div> <!></button></div> <button class="material-icon svelte-m3w8r2"><!></button> <button class="svelte-m3w8r2">Github</button></div></header> <!> <!>',1);function ga(i,n){nt(n,!1);const v=lt(),r=()=>j(Ft,"$isLoading",v),c=()=>j(vt,"$_",v),N=()=>j(Rt,"$page",v),b="bubble_lang";let d=rt(),w=rt(!1),E=rt("fr");function K(){z(w,!I(w)),I(w)?document.documentElement.classList.add("light"):document.documentElement.classList.remove("light")}function C(g){z(E,g),yt.set(I(E))}Wt(()=>{var g;st.auth.getSession().then(({data:h})=>{z(d,h.session)}),st.auth.onAuthStateChange((h,U)=>{z(d,U)}),window.matchMedia("(prefers-color-scheme: light)").matches&&K(),(g=Lt())!=null&&g.startsWith("en")&&z(E,"en"),C(I(E))}),ot();var S=et(),Q=q(S);{var V=g=>{var h=_a(),U=q(h);{var W=_=>{Qt(_,{})};M(U,_=>{I(d)||_(W)})}var R=e(U,2),p=t(R),L=t(p),P=t(L,!0);s(()=>o(P,c()(l.HEADLINE))),a(L),a(p);var y=e(p,2),F=t(y);F.__click=[aa];var A=e(t(F),2),$=t(A,!0);s(()=>o($,c()(l.NAVIGATION_HOME))),a(A),a(F);var m=e(F,2);m.__click=[ea];var D=e(t(m),2),x=t(D,!0);s(()=>o(x,c()(l.NAVIGATION_STATS))),a(D),a(m);var f=e(m,2);f.__click=[ra];var O=e(t(f),2),H=t(O,!0);s(()=>o(H,c()(l.NAVIGATION_CALENDAR))),a(O),a(f),a(y);var X=e(y,2),Y=t(X),B=t(Y);B.__click=[sa,C];var G=e(t(B),2);{var Z=_=>{var T=la();at(1,T,()=>Tt,()=>({key:b})),at(2,T,()=>ft,()=>({key:b})),u(_,T)};M(G,_=>{I(E)==="fr"&&_(Z)})}a(B);var J=e(B,2);J.__click=[oa,C];var _t=e(t(J),2);{var pt=_=>{var T=na();at(1,T,()=>Tt,()=>({key:b})),at(2,T,()=>ft,()=>({key:b})),u(_,T)};M(_t,_=>{I(E)==="en"&&_(pt)})}a(J),a(Y);var tt=e(Y,2);tt.__click=K;var Et=t(tt);{var gt=_=>{var T=mt("dark_mode");u(_,T)},ht=_=>{var T=mt("light_mode");u(_,T)};M(Et,_=>{I(w)?_(gt):_(ht,!1)})}a(tt);var Ot=e(tt,2);Ot.__click=[ia],a(X),a(R);var bt=e(R,2);{var At=_=>{var T=va(),wt=t(T);Mt(wt,n,"default",{}),a(T),u(_,T)};M(bt,_=>{I(d)&&_(At)})}var $t=e(bt,2);ta($t,{}),s(()=>{F.disabled=N().url.pathname==="/WavenCalendar/",m.disabled=N().url.pathname==="/WavenCalendar/stats",f.disabled=N().url.pathname==="/WavenCalendar/calendar",B.disabled=I(E)==="fr",J.disabled=I(E)==="en"}),u(g,h)};M(Q,g=>{r()||g(V)})}u(i,S),it()}It(["click"]);export{ga as component,Ea as universal};
