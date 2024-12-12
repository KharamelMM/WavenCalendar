import{s as ae,b as o,a as u,t as U,c as K,g as ue,e as ee,i as Q,f as oe}from"../chunks/disclose-version.ef06hMjw.js";import{i as se}from"../chunks/legacy.cEMrB5Sm.js";import{p as re,c as e,t as l,d as t,e as s,ad as de,b as le,k as c,f as q,$ as be,y as X,ae as te}from"../chunks/utils.B48V07qe.js";import{i as M,o as fe}from"../chunks/preload-helper.BJbLrvjk.js";import{c as Te,q as Ie,t as v,$ as ve,M as me,l as pe,r as Ee,s as Ne,b as ge,a as ie,d as Oe,e as xe,f as he,h as $e,i as Z}from"../chunks/Modal.9m2njeDT.js";const ye=!0,We=Object.freeze(Object.defineProperty({__proto__:null,prerender:ye},Symbol.toStringTag,{value:"Module"})),[ne,_e]=Te({duration:b=>Math.sqrt(b*200),fallback(b){const f=getComputedStyle(b),i=f.transform==="none"?"":f.transform;return{duration:600,easing:Ie,css:a=>`
				transform: ${i} scale(${a});
				opacity: ${a}
			`}}});var Ae=U('<section class="svelte-l0ju6b"><div> </div> <div><b> </b> </div> <div><b> </b> <ol class="svelte-l0ju6b"><li class="svelte-l0ju6b"> </li> <li class="svelte-l0ju6b"> <b>WavenCalendar@gmail.com</b></li> <li class="svelte-l0ju6b"> </li></ol></div> <div><b> </b> </div> <div><b> </b> <a href="https://github.com/KharamelMM/WavenCalendar">Github</a> </div> <div> </div></section>');function je(b,f){re(f,!1);const i=ae(),a=()=>K(ve,"$_",i);se();var H=Ae(),E=e(H),S=e(E,!0);l(()=>o(S,a()(v.INFO_INTRODUCTION))),t(E);var T=s(E,2),_=e(T),W=e(_,!0);l(()=>o(W,a()(v.INFO_OBJECTIVE_TITLE))),t(_);var D=s(_);l(()=>o(D,` ${a()(v.INFO_OBJECTIVE_TEXT)??""}`)),t(T);var $=s(T,2),P=e($),Y=e(P,!0);l(()=>o(Y,a()(v.INFO_AUTHENTICATION_TITLE))),t(P);var I=s(P);l(()=>o(I,` ${a()(v.INFO_AUTHENTICATION_TEXT)??""} `));var y=s(I),N=e(y),G=e(N,!0);l(()=>o(G,a()(v.INFO_AUTHENTICATION_STEP_1))),t(N);var A=s(N,2),R=e(A);l(()=>o(R,`${a()(v.INFO_AUTHENTICATION_STEP_2)??""} `)),de(),t(A);var p=s(A,2),L=e(p,!0);l(()=>o(L,a()(v.INFO_AUTHENTICATION_STEP_3))),t(p),t(y),t($);var k=s($,2),j=e(k),C=e(j,!0);l(()=>o(C,a()(v.INFO_CONFIDENTIALITY_TITLE))),t(j);var x=s(j);l(()=>o(x,` ${a()(v.INFO_CONFIDENTIALITY_TEXT)??""}`)),t(k);var g=s(k,2),d=e(g),w=e(d,!0);l(()=>o(w,a()(v.INFO_OPENSOURCE_TITLE))),t(d);var h=s(d);l(()=>o(h,` ${a()(v.INFO_OPENSOURCE_TEXT_1)??""} `));var n=s(h,2);l(()=>o(n,`.
		${a()(v.INFO_OPENSOURCE_TEXT_2)??""}`)),t(g);var O=s(g,2),F=e(O,!0);l(()=>o(F,a()(v.INFO_END))),t(O),t(H),u(b,H),le()}function Ce(b,f,i){b.key==="Enter"&&(b.preventDefault(),f(c(i)))}var Le=U('<div class="loading svelte-1da491j"><div class="circle svelte-1da491j"></div></div>'),ke=U('<p class="svelte-1da491j"> </p> <button class="primary svelte-1da491j"> </button>',1),Fe=U('<p class="svelte-1da491j"> </p>'),Me=(b,f,i)=>f(c(i)),Ue=U('<!> <div class="svelte-1da491j"><b class="svelte-1da491j"> <span class="required svelte-1da491j">*</span> :</b></div> <input type="email" autocomplete="email" class="svelte-1da491j"> <button class="primary svelte-1da491j"> </button>',1);function He(b,f){re(f,!1);const i=ae(),a=()=>K(ve,"$_",i),H=()=>K(D,"$loading",i),E=()=>K(W,"$error",i),S=()=>K(_,"$valid",i);let T=te();const[_,W,D,$,P]=pe();se();var Y=be(()=>a()(v.INFO_WELCOME));me(b,{get title(){return c(Y)},children:(I,y)=>{var N=ee(),G=q(N);{var A=p=>{var L=Le();u(p,L)},R=p=>{var L=ee(),k=q(L);{var j=x=>{var g=ke(),d=q(g),w=e(d,!0);t(d);var h=s(d,2);h.__click=P;var n=e(h,!0);l(()=>o(n,a()(v.AUTHENTICATION_RETRY))),t(h),l(()=>o(w,E().message)),u(x,g)},C=x=>{var g=ee(),d=q(g);{var w=n=>{var O=Fe(),F=e(O,!0);l(()=>o(F,a()(v.AUTHENTICATION_CHECK_EMAIL))),t(O),u(n,O)},h=n=>{var O=Ue(),F=q(O);je(F,{});var J=s(F,2),V=e(J),z=e(V,!0);l(()=>o(z,a()(v.AUTHENTICATION_LABEL_YOUR_EMAIL))),de(2),t(V),t(J);var B=s(J,2);Ee(B),B.__keydown=[Ce,$,T],l(()=>Ne(B,"placeholder",a()(v.AUTHENTICATION_PLACEHOLDER_EMAIL)));var r=s(B,2);r.__click=[Me,$,T];var m=e(r,!0);l(()=>o(m,a()(v.AUTHENTICATION_GET_LINK_BY_EMAIL))),t(r),ge(B,()=>c(T),ce=>X(T,ce)),u(n,O)};M(d,n=>{S()?n(w):n(h,!1)},!0)}u(x,g)};M(k,x=>{E()?x(j):x(C,!1)},!0)}u(p,L)};M(G,p=>{H()?p(A):p(R,!1)})}u(I,N)},$$slots:{default:!0}}),le()}ue(["click","keydown"]);var Se=U('<bubble class="svelte-1yx3jp8"></bubble>'),De=U('<bubble class="svelte-1yx3jp8"></bubble>'),Pe=U('<!> <header class="svelte-1yx3jp8"><div class="brand svelte-1yx3jp8"><h1 class="svelte-1yx3jp8"> </h1></div> <div class="controls svelte-1yx3jp8"><div class="langs svelte-1yx3jp8"><button class="svelte-1yx3jp8"><div class="lang svelte-1yx3jp8">FR</div> <!></button> <button class="svelte-1yx3jp8"><div class="lang svelte-1yx3jp8">EN</div> <!></button></div> <button class="material-icon svelte-1yx3jp8"><!></button> <button class="svelte-1yx3jp8">Github</button></div></header> <section><!></section>',1);function Xe(b,f){re(f,!1);const i=ae(),a=()=>K($e,"$isLoading",i),H=()=>K(ve,"$_",i),E="bubble_lang";let S=te(),T=te(!1),_=te("fr");function W(){X(T,!c(T)),c(T)?document.documentElement.classList.add("light"):document.documentElement.classList.remove("light")}function D(I){X(_,I),xe.set(c(_))}fe(()=>{var I;ie.auth.getSession().then(({data:y})=>{X(S,y.session)}),ie.auth.onAuthStateChange((y,N)=>{X(S,N)}),window.matchMedia("(prefers-color-scheme: light)").matches&&W(),(I=Oe())!=null&&I.startsWith("en")&&X(_,"en"),D(c(_))}),se();var $=ee(),P=q($);{var Y=I=>{var y=Pe(),N=q(y);{var G=r=>{He(r,{})};M(N,r=>{c(S)||r(G)})}var A=s(N,2),R=e(A),p=e(R),L=e(p,!0);l(()=>o(L,H()(v.HEADLINE))),t(p),t(R);var k=s(R,2),j=e(k),C=e(j),x=s(e(C),2);{var g=r=>{var m=Se();Z(1,m,()=>_e,()=>({key:E})),Z(2,m,()=>ne,()=>({key:E})),u(r,m)};M(x,r=>{c(_)==="fr"&&r(g)})}t(C);var d=s(C,2),w=s(e(d),2);{var h=r=>{var m=De();Z(1,m,()=>_e,()=>({key:E})),Z(2,m,()=>ne,()=>({key:E})),u(r,m)};M(w,r=>{c(_)==="en"&&r(h)})}t(d),t(j);var n=s(j,2),O=e(n);{var F=r=>{var m=oe("dark_mode");u(r,m)},J=r=>{var m=oe("light_mode");u(r,m)};M(O,r=>{c(T)?r(F):r(J,!1)})}t(n);var V=s(n,2);t(k),t(A);var z=s(A,2),B=e(z);he(B,f,"default",{}),t(z),l(()=>{C.disabled=c(_)==="fr",d.disabled=c(_)==="en"}),Q("click",C,()=>D("fr")),Q("click",d,()=>D("en")),Q("click",n,W),Q("click",V,()=>window.location.href="https://github.com/KharamelMM/WavenCalendar"),u(I,y)};M(P,I=>{a()||I(Y)})}u(b,$),le()}export{Xe as component,We as universal};
