import{e as pe,s as ce,b as K,a as d,t as $,c as J,g as Me,f as De}from"../chunks/disclose-version.Cur92mGU.js";import{i as de}from"../chunks/legacy.C8UobmFC.js";import{Y as Re,Z as Ze,av as ze,aw as Ve,e as Xe,X as Je,a5 as et,a4 as tt,U as at,a6 as rt,p as ue,j as E,ax as st,T as ot,ay as nt,l as e,c as v,r as n,t as Q,a as ve,W as Y,E as w,s as R,D as lt,az as we,f as ne,aA as Le,aB as Te}from"../chunks/utils.Gls6Dbe6.js";import{a as Ue,i as H,o as it}from"../chunks/preload-helper.Buxi4kkA.js";import{g as Ne,T as ct,s as Fe,t as We,R as m,e as le,i as ie,n as dt,m as Ye,D as Pe,d as ut,a as vt,o as me,C as he,b as Se,E as Oe,r as Ae,c as qe,f as oe,h as Ie,F as Ce,j as _t,M as ft,P as yt,k as mt,l as ht,p as bt,q as pt,u as gt}from"../chunks/EquipmentType.DNFOx2GF.js";import{p as g,s as be}from"../chunks/props.cC_7JBqO.js";import{l as Ee,d as ge,s as Qe,t as W}from"../chunks/localstorage.store.BcRruBVM.js";import{g as ye}from"../chunks/index.BJ3bmc4w.js";function $t(i,t,r){Re&&Ze();var l=i,c=at,_,a=ze()?Ve:Xe;Je(()=>{a(c,c=t())&&(_&&et(_),_=tt(()=>r(l)))}),Re&&(l=rt)}var Et=$("<button><div> </div></button>");function kt(i,t){ue(t,!1);const r=ce(),l=()=>J(ge,"$_",r);let c=g(t,"currentDate",8),_=g(t,"dayOfMonth",8),a=g(t,"reward",8,void 0),y=g(t,"onclick",8);const s=new Date;let o=Y("");const h=Ee.subscribe(p=>{E(o,Ne(a(),p.filters))});function b(){if(a()){let p=`${a().amount}× ${l()(a().type)}`;switch(a().type){case m.RUNES:case m.CHEST:p+=` ${l()(a().equipment)}`;break;case m.COMPANION:case m.EQUIPMENT:p=`${a().amount}× ${l()(a().type)} ${l()(a().rarety)}`;break}return p}}Ue(()=>{h()}),st(()=>(ot(a()),Ee),()=>{E(o,Ne(a(),ye(Ee).filters))}),nt(),de();var k=w(b);ct(i,{get title(){return e(k)},children:(p,N)=>{var D=Et();D.__click=function(...V){var G;(G=y())==null||G.apply(this,V)};const C=w(()=>c().toDateString()===s.toDateString());var T=v(D),x=v(T,!0);n(T),n(D),Q(()=>{Fe(D,`${e(o)??""} svelte-14v7im1`),D.disabled=c()>s,We(D,"today",e(C)),K(x,_())}),d(p,D)},$$slots:{default:!0}}),ve()}pe(["click"]);var Mt=$('<th class="svelte-t5kud4"> </th>'),wt=$("<td><!></td>"),Dt=$("<tr></tr>"),Rt=$('<table class="svelte-t5kud4"><thead><tr></tr></thead><tbody></tbody></table>');function Tt(i,t){ue(t,!1);const r=ce(),l=()=>J(Ye,"$momentStore",r);let c=g(t,"year",8),_=g(t,"month",8),a=g(t,"onselectday",8),y=g(t,"calendar",8);const s=Pe.length;function o(N){let D=me(N,he);return y()[D]}de();var h=Rt(),b=v(h),k=v(b);le(k,5,()=>({length:s}),ie,(N,D,C)=>{var T=Mt(),x=v(T,!0);Q(()=>K(x,l()().weekday(C%s).format("dd"))),n(T),d(N,T)}),n(k),n(b);var p=R(b);le(p,5,()=>({length:dt(_(),c())}),ie,(N,D,C)=>{var T=Dt();const x=w(()=>ut(_(),c()));le(T,5,()=>Pe,ie,(G,re,u)=>{var B=wt();const P=w(()=>vt(_(),c(),u,C));var Z=v(B);{var S=O=>{const A=w(()=>new Date(c(),_(),e(P))),L=w(()=>o(e(A)));var ee=lt(()=>({currentDate:e(A),dayOfMonth:e(P),reward:e(L),onclick:()=>a()(e(A))}));kt(O,be(()=>e(ee)))};H(Z,O=>{e(P)>0&&e(P)<=e(x)&&O(S)})}n(B),d(G,B)}),n(T),d(N,T)}),n(p),n(h),d(i,h),ve()}function Nt(i,t){ue(t,!1);const r=ce(),l=()=>J(ge,"$_",r);let c=g(t,"key",8);de(),we();var _=Me();Q(()=>K(_,l()(c()))),d(i,_),ve()}var Pt=$('<span class="required svelte-u5ui8r">*</span>'),St=$("<span> <!></span>"),Ot=$('<section class="svelte-u5ui8r"><!> <!></section>');function Be(i,t){let r=g(t,"title",8,void 0),l=g(t,"required",8,!1);var c=Ot(),_=v(c);{var a=s=>{var o=St(),h=v(o),b=R(h);{var k=p=>{var N=Pt();d(p,N)};H(b,p=>{l()&&p(k)})}n(o),Q(()=>K(h,`${r()??""}: `)),d(s,o)};H(_,s=>{r()&&s(a)})}var y=R(_,2);Qe(y,t,"default",{}),n(c),d(i,c)}var At=(i,t,r)=>t(e(r)),qt=$("<button><!></button>"),It=$('<section class="svelte-aefnkp"></section>');function ke(i,t){let r=g(t,"title",8,void 0),l=g(t,"values",24,()=>[]),c=g(t,"value",12),_=g(t,"required",8,!1);Be(i,be(()=>({title:r(),required:_()}),{children:(a,y)=>{var s=It();le(s,5,l,ie,(o,h)=>{var b=qt();const k=w(()=>`${e(h).toLowerCase()??""} svelte-aefnkp`);b.__click=[At,c,h];var p=v(b);Nt(p,{get key(){return e(h)}}),n(b),Q(()=>{Fe(b,e(k)),We(b,"active",c()===e(h))}),d(o,b)}),n(s),d(a,s)},$$slots:{default:!0}}))}pe(["click"]);function Ct(i){return Object.values(i).filter(t=>typeof t!="number")}var xt=$('<input type="number" min="100" max="250" step="50">'),Lt=$('<input type="number" min="1" max="5000">'),Ut=(i,t)=>t()(),Ft=(i,t,r)=>{confirm(t()(W.REWARD_DELETE_CONFIRM))&&r()()},Wt=$('<button class="delete material-icon svelte-tu6hhq">delete</button>'),Yt=$('<section class="svelte-tu6hhq"><!> <!> <!> <div class="controls svelte-tu6hhq"><button class="secondary svelte-tu6hhq"> </button> <button class="primary svelte-tu6hhq"> </button> <!></div></section>');function Qt(i,t){var ee,te,_e,ae,fe,se;ue(t,!1);const r=ce(),l=()=>J(ge,"$_",r);let c=g(t,"oncancel",8),_=g(t,"onsave",8),a=g(t,"ondelete",8,void 0),y=g(t,"reward",8,void 0),s=g(t,"date",8),o=Y(((ee=y())==null?void 0:ee.type)??m.EQUIPMENT),h=Y(((te=y())==null?void 0:te.type)===m.EQUIPMENT||((_e=y())==null?void 0:_e.type)===m.COMPANION?y().rarety:Se.COMMON),b=Y(((ae=y())==null?void 0:ae.type)===m.RUNES||((fe=y())==null?void 0:fe.type)===m.CHEST?y().equipment:Oe.EQUIPMENTS),k=Y(((se=y())==null?void 0:se.amount)??1);function p(){let f;const M={cycle_index:me(s(),he),amount:e(k)};switch(e(o)){case m.GEMS:f={...M,type:e(o),amount:e(k)};break;case m.EQUIPMENT:case m.COMPANION:f={...M,type:e(o),rarety:e(h)};break;case m.CHEST:f={...M,type:e(o),equipment:e(b)};break;case m.RUNES:f={...M,type:e(o),equipment:e(b)};break;case m.KAMAS:case m.WAKFU:f={...M,type:e(o)};break}_()(f)}de();var N=Yt(),D=v(N),C=w(()=>l()(W.REWARD_LABEL_TYPE)),T=w(()=>Ct(m));ke(D,{get title(){return e(C)},get values(){return e(T)},get value(){return e(o)},set value(f){E(o,f)},required:!0,$$legacy:!0});var x=R(D,2);{var V=f=>{var M=w(()=>l()(W.REWARD_LABEL_RARITY)),z=w(()=>Object.keys(Se));ke(f,{get title(){return e(M)},get values(){return e(z)},get value(){return e(h)},set value(q){E(h,q)},required:!0,$$legacy:!0})},G=f=>{var M=De(),z=ne(M);{var q=I=>{var j=w(()=>l()(W.REWARD_LABEL_EQUIPMENT_TYPE)),U=w(()=>Object.keys(Oe));ke(I,{get title(){return e(j)},get values(){return e(U)},get value(){return e(b)},set value(F){E(b,F)},required:!0,$$legacy:!0})};H(z,I=>{(e(o)===m.CHEST||e(o)===m.RUNES)&&I(q)},!0)}d(f,M)};H(x,f=>{e(o)===m.EQUIPMENT||e(o)===m.COMPANION?f(V):f(G,!1)})}var re=R(x,2),u=w(()=>l()(W.REWARD_LABEL_AMOUNT));Be(re,{get title(){return e(u)},required:!0,children:(f,M)=>{var z=De(),q=ne(z);{var I=U=>{var F=xt();Ae(F),qe(F,()=>e(k),X=>E(k,X)),d(U,F)},j=U=>{var F=Lt();Ae(F),qe(F,()=>e(k),X=>E(k,X)),d(U,F)};H(q,U=>{e(o)===m.GEMS?U(I):U(j,!1)})}d(f,z)},$$slots:{default:!0}});var B=R(re,2),P=v(B);P.__click=[Ut,c];var Z=v(P,!0);Q(()=>K(Z,l()(W.CANCEL))),n(P);var S=R(P,2);S.__click=p;var O=v(S,!0);Q(()=>K(O,l()(W.SAVE))),n(S);var A=R(S,2);{var L=f=>{var M=Wt();M.__click=[Ft,l,a],d(f,M)};H(A,f=>{a()&&f(L)})}n(B),n(N),d(i,N),ve()}pe(["click"]);var Bt=$('<section class="material-icon"><!></section>');function xe(i,t){var r=Bt(),l=v(r);Qe(l,t,"default",{}),n(r),d(i,r)}var jt=$("<div> </div> <!>",1),Ht=(i,t)=>E(t,!0),Kt=(i,t,r)=>{E(t,!0),Le(r,-1)},Gt=(i,t,r)=>{E(t,!1),Le(r)},Zt=$('<div class="months svelte-o5e3p2"></div>'),zt=$('<div class="year svelte-o5e3p2"><!></div>'),Vt=$('<header class="svelte-o5e3p2"><button class="profile svelte-o5e3p2"> </button> <div class="year-controls svelte-o5e3p2"><button class="svelte-o5e3p2"><!></button> <h2 class="svelte-o5e3p2"> </h2> <button class="svelte-o5e3p2"><!></button></div> <div><!></div></header> <div class="calendar svelte-o5e3p2"><!></div>',1),Xt=$("<!> <!> <!>",1);function ca(i,t){ue(t,!1);const r=ce(),l=()=>J(Ye,"$momentStore",r),c=()=>J(ge,"$_",r),_=()=>J(oe,"$currentProfile",r);let a=Y([]),y=Y(new Date().getFullYear()),s=Y(),o=Y(!1),h=Y(!0);function b(u){E(s,u)}function k(u){if(!e(s))throw new Error("No selected day");u.validated=!1,Te(a,e(a)[me(e(s),he)]=u),E(s,void 0),pt(ye(oe),u)}function p(){if(!e(s))throw new Error("No selected day");return me(e(s),he)}function N(){if(!e(s))throw new Error("No selected day");const u=p();gt(ye(oe),u),Te(a,e(a)[u]=void 0),E(s,void 0)}const D=oe.subscribe(async u=>{E(a,await Ie(u))});it(async()=>{E(a,await Ie(ye(oe)))}),Ue(()=>{D()}),de();var C=Xt(),T=ne(C);{var x=u=>{var B=w(()=>l()(e(s)).format("dddd D MMMM yyyy"));ft(u,{get title(){return e(B)},onclose:()=>{E(s,void 0)},children:(P,Z)=>{var S=jt(),O=ne(S),A=v(O,!0);Q(()=>K(A,c()(W.REWARDS_FORM_INFO))),n(O);var L=R(O,2);Qt(L,be({get reward(){return e(a)[p()]},oncancel:()=>{E(s,void 0)}},()=>({onsave:k,date:e(s),ondelete:N}))),d(P,S)},$$slots:{default:!0}})};H(T,u=>{e(s)&&u(x)})}var V=R(T,2);{var G=u=>{yt(u,{onclose:()=>E(o,!1)})};H(V,u=>{e(o)&&u(G)})}var re=R(V,2);Ce(re,{children:(u,B)=>{var P=Vt(),Z=ne(P),S=v(Z);S.__click=[Ht,o];var O=v(S,!0);Q(()=>K(O,_()!==mt?`${c()(W.PROFILE)} : ${_()}`:c()(W.PROFILE_DEFAULT))),n(S);var A=R(S,2),L=v(A);L.__click=[Kt,h,y];var ee=v(L);xe(ee,{children:(q,I)=>{we();var j=Me("arrow_back_ios");d(q,j)},$$slots:{default:!0}}),n(L);var te=R(L,2),_e=v(te,!0);n(te);var ae=R(te,2);ae.__click=[Gt,h,y];var fe=v(ae);xe(fe,{children:(q,I)=>{we();var j=Me("arrow_forward_ios");d(q,j)},$$slots:{default:!0}}),n(ae),n(A);var se=R(A,2),f=v(se);_t(f,{}),n(se),n(Z);var M=R(Z,2),z=v(M);$t(z,()=>e(y),q=>{var I=zt(),j=v(I);Ce(j,{get leftToRight(){return e(h)},children:(U,F)=>{var X=Zt();le(X,5,()=>bt,ie,(je,Jt,$e)=>{var He=w(()=>l()(new Date(0,$e)).format("MMMM")),Ke=w(()=>$e===new Date().getMonth()&&e(y)===new Date().getFullYear());ht(je,{get title(){return e(He)},get outline(){return e(Ke)},children:(Ge,ea)=>{Tt(Ge,be(()=>({month:$e,year:e(y),onselectday:b,calendar:e(a)})))},$$slots:{default:!0}})}),n(X),d(U,X)},$$slots:{default:!0}}),n(I),d(q,I)}),n(M),Q(()=>K(_e,e(y))),d(u,P)},$$slots:{default:!0}}),d(i,C),ve()}pe(["click"]);export{ca as component};
