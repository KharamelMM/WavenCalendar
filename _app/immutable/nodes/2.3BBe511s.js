import{j as it,l as je,s as ge,g as Te,b as z,a as N,c as ye,k as we,t as O,e as he}from"../chunks/disclose-version.Cbxf0SuH.js";import{i as ne}from"../chunks/legacy.Dr40mSn8.js";import{O as U,X as Me,aj as ut,ai as vt,Q as ft,N as ct,v as _t,au as Xe,V as dt,W as Ye,Y as be,a0 as oe,aq as Et,aB as Ee,Z as Ze,_ as et,$ as ht,m as Be,aC as gt,aD as yt,at as Nt,aE as At,aF as Mt,ag as bt,I as mt,h as Qe,aG as St,aH as kt,aI as Ot,ao as Tt,aJ as Rt,u as Ke,aK as Dt,aL as It,aM as pt,y as $t,a9 as xt,a8 as tt,p as se,aN as Re,t as L,b as le,c as S,d as A,e as C,l as n,H as D,f as ae,aO as Pt,a7 as W,j as K,aP as at,aQ as wt}from"../chunks/utils.DAUx74QY.js";import{i as G}from"../chunks/preload-helper.CXTGkbRS.js";import{i as Ut,p as I,s as Ct}from"../chunks/props.BGBgL6q9.js";import{t as y,b as Ne,s as Ae,a as Fe,f as We}from"../chunks/index.ClFhbG7i.js";function ie(e,t){return t}function Lt(e,t,a,r){for(var s=[],o=t.length,i=0;i<o;i++)yt(t[i].e,s,!0);var f=o>0&&s.length===0&&a!==null;if(f){var E=a.parentNode;Nt(E),E.append(a),r.clear(),J(e,t[0].prev,t[o-1].next)}At(s,()=>{for(var d=0;d<o;d++){var u=t[d];f||(r.delete(u.k),J(e,u.prev,u.next)),Mt(u.e,!f)}})}function ue(e,t,a,r,s,o=null){var i=e,f={flags:t,items:new Map,first:null};{var E=e;i=U?Me(ut(E)):E.appendChild(vt())}U&&ft();var d=null,u=!1;ct(()=>{var v=a(),l=_t(v)?v:v==null?[]:Xe(v),c=l.length;if(u&&c===0)return;u=c===0;let h=!1;if(U){var M=i.data===dt;M!==(c===0)&&(i=Ye(),Me(i),be(!1),h=!0)}if(U){for(var g=null,_,b=0;b<c;b++){if(oe.nodeType===8&&oe.data===Et){i=oe,h=!0,be(!1);break}var H=l[b],$=r(H,b);_=rt(oe,f,g,null,H,$,b,s,t),f.items.set($,_),g=_}c>0&&Me(Ye())}if(!U){var T=bt;Ht(l,f,i,s,t,(T.f&Ee)!==0,r)}o!==null&&(c===0?d?Ze(d):d=et(()=>o(i)):d!==null&&ht(d,()=>{d=null})),h&&be(!0),a()}),U&&(i=oe)}function Ht(e,t,a,r,s,o,i){var f=e.length,E=t.items,d=t.first,u=d,v,l=null,c=[],h=[],M,g,_,b;for(b=0;b<f;b+=1){if(M=e[b],g=i(M,b),_=E.get(g),_===void 0){var H=u?u.e.nodes_start:a;l=rt(H,t,l,l===null?t.first:l.next,M,g,b,r,s),E.set(g,l),c=[],h=[],u=l.next;continue}if(Yt(_,M,b),_.e.f&Ee&&Ze(_.e),_!==u){if(v!==void 0&&v.has(_)){if(c.length<h.length){var $=h[0],T;l=$.prev;var q=c[0],x=c[c.length-1];for(T=0;T<c.length;T+=1)Ge(c[T],$,a);for(T=0;T<h.length;T+=1)v.delete(h[T]);J(t,q.prev,x.next),J(t,l,q),J(t,x,$),u=$,l=x,b-=1,c=[],h=[]}else v.delete(_),Ge(_,u,a),J(t,_.prev,_.next),J(t,_,l===null?t.first:l.next),J(t,l,_),l=_;continue}for(c=[],h=[];u!==null&&u.k!==g;)(o||!(u.e.f&Ee))&&(v??(v=new Set)).add(u),h.push(u),u=u.next;if(u===null)continue;_=u}c.push(_),l=_,u=_.next}if(u!==null||v!==void 0){for(var R=v===void 0?[]:Xe(v);u!==null;)(o||!(u.e.f&Ee))&&R.push(u),u=u.next;var B=R.length;if(B>0){var p=f===0?a:null;Lt(t,R,p,E)}}Be.first=t.first&&t.first.e,Be.last=l&&l.e}function Yt(e,t,a,r){gt(e.v,t),e.i=a}function rt(e,t,a,r,s,o,i,f,E){var d=(E&kt)!==0,u=(E&Ot)===0,v=d?u?mt(s):Qe(s):s,l=E&St?Qe(i):i,c={i:l,v,k:o,a:null,e:null,prev:a,next:r};try{return c.e=et(()=>f(e,v,l),U),c.e.prev=a&&a.e,c.e.next=r&&r.e,a===null?t.first=c:(a.next=c,a.e.next=c.e),r!==null&&(r.prev=c,r.e.prev=c.e),c}finally{}}function Ge(e,t,a){for(var r=e.next?e.next.e.nodes_start:a,s=t?t.e.nodes_start:a,o=e.e.nodes_start;o!==r;){var i=Tt(o);s.before(o),o=i}}function J(e,t,a){t===null?e.first=a:(t.next=a,t.e.next=a&&a.e),a!==null&&(a.prev=t,a.e.prev=t&&t.e)}function me(e){if(U){var t=!1,a=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;De(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var s=e.checked;De(e,"checked",null),e.checked=s}}};e.__on_r=a,Rt(a),it()}}function De(e,t,a,r){var s=e.__attributes??(e.__attributes={});U&&(s[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||s[t]!==(s[t]=a)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Dt]=a),a==null?e.removeAttribute(t):typeof a!="string"&&Bt(e).includes(t)?e[t]=a:e.setAttribute(t,a))}var ze=new Map;function Bt(e){var t=ze.get(e.nodeName);if(t)return t;ze.set(e.nodeName,t=[]);for(var a,r=Ke(e),s=Element.prototype;s!==r;){a=It(r);for(var o in a)a[o].set&&t.push(o);r=Ke(r)}return t}function Qt(e,t){var a=e.__className,r=Kt(t);U&&e.className===r?e.__className=r:(a!==r||U&&e.className!==r)&&(t==null?e.removeAttribute("class"):e.className=r,e.__className=r)}function Kt(e){return e??""}function Ft(e,t,a){if(a){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}function Se(e,t,a=t){var r=pt();je(e,"input",s=>{var o=s?e.defaultValue:e.value;o=ke(e)?Oe(o):o,a(o),r&&o!==(o=t())&&(e.value=o??"")}),(U&&e.defaultValue!==e.value||$t(t)==null&&e.value)&&a(ke(e)?Oe(e.value):e.value),xt(()=>{var s=t();ke(e)&&s===Oe(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function ke(e){var t=e.type;return t==="number"||t==="range"}function Oe(e){return e===""?null:+e}function nt(e,t,a){if(e.multiple)return zt(e,t);for(var r of e.options){var s=ve(r);if(Ut(s,t)){r.selected=!0;return}}(!a||t!==void 0)&&(e.selectedIndex=-1)}function Wt(e,t){tt(()=>{var a=new MutationObserver(()=>{var r=e.__value;nt(e,r)});return a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{a.disconnect()}})}function Gt(e,t,a=t){var r=!0;je(e,"change",s=>{var o=s?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),ve);else{var f=e.querySelector(o)??e.querySelector("option:not([disabled])");i=f&&ve(f)}a(i)}),tt(()=>{var s=t();if(nt(e,s,r),r&&s===void 0){var o=e.querySelector(":checked");o!==null&&(s=ve(o),a(s))}e.__value=s,r=!1}),Wt(e)}function zt(e,t){for(var a of e.options)a.selected=~t.indexOf(ve(a))}function ve(e){return"__value"in e?e.__value:e.value}var k=(e=>(e.GEMS="GEMS",e.KAMAS="KAMAS",e.EQUIPMENT="EQUIPMENT",e.CHEST="CHEST",e.WAKFU="WAKFU",e.RUNES="RUNES",e))(k||{});const qt=[y.JANUARY,y.FEBRUARY,y.MARCH,y.APRIL,y.MAY,y.JUNE,y.JULY,y.AUGUST,y.SEPTEMBER,y.OCTOBER,y.NOVEMBER,y.DECEMBER],re=[y.SHORT_SUNDAY,y.SHORT_MONDAY,y.SHORT_TUESDAY,y.SHORT_WEDNESDAY,y.SHORT_THURSDAY,y.SHORT_FRIDAY,y.SHORT_SATURDAY];function st(e,t){return new Date(t,e+1,0).getDate()}function lt(e,t){return new Date(t,e,1).getDay()}function ot(e,t){return(e-t+re.length)%re.length}function Vt(e,t,a=0){const r=ot(lt(e,t),a),s=st(e,t);return Math.ceil((r+s)/7)}function Jt(e,t,a,r,s=0){return a+r*re.length-ot(lt(e,t),s)+1}function jt(e,t){return Math.floor((e.getTime()-t.getTime())/(1e3*60*60*24))}function Ie(e,t){return(jt(e,t)%365+365)%365}function Xt(e,t){se(t,!1);const a=ge(),r=()=>ye(Ne,"$_",a);let s=I(t,"key",8);ne(),Re();var o=Te();L(()=>z(o,r()(s()))),N(e,o),le()}var Zt=O("<th><!></th>"),ea=(e,t,a)=>t()(n(a)),ta=O("<button> </button>"),aa=O("<td><!></td>"),ra=O("<tr></tr>"),na=O("<table><thead><tr></tr></thead><tbody></tbody></table>");function sa(e,t){se(t,!1);let a=I(t,"year",8),r=I(t,"month",8),s=I(t,"onselectday",8),o=I(t,"calendar",8),i=I(t,"weekOffset",8,1);const f=re.length,E=new Date;function d(h){let M=Ie(h,o().startDate);if(o().rewards[M]){const g=o().rewards[M];return g.type===k.EQUIPMENT?g.rarety.toLowerCase():g.type.toLowerCase()}}ne();var u=na(),v=S(u),l=S(v);ue(l,5,()=>({length:f}),ie,(h,M,g)=>{var _=Zt(),b=S(_);Xt(b,{get key(){return re[(g+i())%f]}}),A(_),N(h,_)}),A(l),A(v);var c=C(v);ue(c,5,()=>({length:Vt(r(),a(),i())}),ie,(h,M,g)=>{var _=ra();const b=D(()=>st(r(),a()));ue(_,5,()=>re,ie,($,T,q)=>{var x=aa();const R=D(()=>Jt(r(),a(),q,g,i()));var B=S(x);{var p=j=>{var P=ta();const ee=D(()=>new Date(a(),r(),n(R))),fe=D(()=>`${d(n(ee))??""} svelte-1r1uh1k`);P.__click=[ea,s,ee];const ce=D(()=>n(ee).toDateString()===E.toDateString());var _e=S(P,!0);A(P),L(()=>{Qt(P,n(fe)),P.disabled=n(ee)>E,Ft(P,"today",n(ce)),z(_e,n(R))}),N(j,P)};G(B,j=>{n(R)>0&&n(R)<=n(b)&&j(p)})}A(x),N($,x)}),A(_),N(h,_)}),A(c),A(u),N(e,u),le()}we(["click"]);var la=O('<h3 class="svelte-1uz7mp7"> </h3>'),oa=O('<h3 class="svelte-1uz7mp7"> </h3>'),ia=O('<section class="svelte-1uz7mp7"><!> <!></section>');function qe(e,t){se(t,!1);const a=ge(),r=()=>ye(Ne,"$_",a);let s=I(t,"title",8,void 0),o=I(t,"i18nTitleKey",8,void 0);ne();var i=ia(),f=S(i);{var E=v=>{var l=la(),c=S(l,!0);A(l),L(()=>z(c,s())),N(v,l)},d=v=>{var l=he(),c=ae(l);{var h=M=>{var g=oa(),_=S(g,!0);L(()=>z(_,r()(o()))),A(g),N(M,g)};G(c,M=>{o()&&M(h)},!0)}N(v,l)};G(f,v=>{s()?v(E):v(d,!1)})}var u=C(f,2);Ae(u,t,"default",{}),A(i),N(e,i),le()}var pe=(e=>(e.COMPANIONS="COMPANIONS",e.SPELLS="SPELLS",e.EQUIPMENTS="EQUIPMENTS",e))(pe||{}),$e=(e=>(e.RING="RING",e.ARMBAND="ARMBAND",e.COMPANION="COMPANION",e))($e||{}),xe=(e=>(e.COMMON="COMMON",e.RARE="RARE",e.KROSMIC="KROSMIC",e.INFINITE="INFINITE",e))(xe||{}),ua=O("<span> </span>"),va=O('<section class="svelte-1j4lmfo"><!> <!></section>');function Pe(e,t){let a=I(t,"title",8,void 0);var r=va(),s=S(r);{var o=f=>{var E=ua(),d=S(E);A(E),L(()=>z(d,`${a()??""}:`)),N(f,E)};G(s,f=>{a()&&f(o)})}var i=C(s,2);Ae(i,t,"default",{}),A(r),N(e,r)}var fa=O("<option> </option>"),ca=O("<select></select>");function de(e,t){se(t,!1);const a=ge(),r=()=>ye(Ne,"$_",a);let s=I(t,"title",8,void 0),o=I(t,"values",24,()=>[]),i=I(t,"value",12);ne(),Pe(e,{get title(){return s()},children:(f,E)=>{var d=ca();L(()=>{i(),Pt(()=>{o(),r()})}),ue(d,5,o,ie,(u,v)=>{var l=fa(),c={},h=S(l,!0);L(()=>z(h,r()(n(v)))),A(l),L(()=>{c!==(c=n(v))&&(l.value=(l.__value=n(v))==null?"":n(v))}),N(u,l)}),A(d),Gt(d,i),N(f,d)},$$slots:{default:!0}}),le()}function _a(e){return Object.values(e).filter(t=>typeof t!="number")}var da=O("<!> <!>",1),Ea=O('<input type="number" min="100" max="250" step="50">'),ha=O('<input type="number" min="1" max="5000">'),ga=O('<input type="text">'),ya=(e,t)=>t()(),Na=O('<section class="svelte-1hgxb16"><!> <!> <!> <!> <div class="controls svelte-1hgxb16"><button class="secondary svelte-1hgxb16"> </button> <button class="primary svelte-1hgxb16"> </button></div></section>');function Aa(e,t){var fe,ce,_e,Ue,Ce,Le,He;se(t,!1);const a=ge(),r=()=>ye(Ne,"$_",a);let s=I(t,"oncancel",8),o=I(t,"onsave",8),i=I(t,"reward",8,void 0),f=W(((fe=i())==null?void 0:fe.type)??k.EQUIPMENT),E=W(((ce=i())==null?void 0:ce.type)===k.EQUIPMENT?i().rarety:xe.COMMON),d=W(((_e=i())==null?void 0:_e.type)===k.RUNES||((Ue=i())==null?void 0:Ue.type)===k.CHEST?i().kind:pe.EQUIPMENTS),u=W(((Ce=i())==null?void 0:Ce.type)===k.EQUIPMENT?i().kind:$e.RING),v=W(((Le=i())==null?void 0:Le.amount)??1),l=W(((He=i())==null?void 0:He.type)===k.EQUIPMENT?i().description:void 0);function c(){let m;switch(n(f)){case k.GEMS:m={type:n(f),amount:n(v)};break;case k.EQUIPMENT:m={type:n(f),rarety:n(E),kind:n(u),amount:n(v),description:n(l)};break;case k.CHEST:m={type:n(f),kind:n(d),amount:n(v)};break;case k.RUNES:m={type:n(f),kind:n(d),amount:n(v)};break;case k.KAMAS:case k.WAKFU:m={type:n(f),amount:n(v)};break}o()(m)}ne();var h=Na(),M=S(h),g=D(()=>r()(y.REWARD_LABEL_TYPE)),_=D(()=>_a(k));de(M,{get title(){return n(g)},get values(){return n(_)},get value(){return n(f)},set value(m){K(f,m)},$$legacy:!0});var b=C(M,2);{var H=m=>{var V=da(),F=ae(V),te=D(()=>r()(y.REWARD_LABEL_RARETY)),w=D(()=>Object.keys(xe));de(F,{get title(){return n(te)},get values(){return n(w)},get value(){return n(E)},set value(Z){K(E,Z)},$$legacy:!0});var X=C(F,2),Q=D(()=>r()(y.REWARD_LABEL_ITEM_TYPE)),Y=D(()=>Object.keys($e));de(X,{get title(){return n(Q)},get values(){return n(Y)},get value(){return n(u)},set value(Z){K(u,Z)},$$legacy:!0}),N(m,V)},$=m=>{var V=he(),F=ae(V);{var te=w=>{var X=D(()=>r()(y.REWARD_LABEL_EQUIPMENT_TYPE)),Q=D(()=>Object.keys(pe));de(w,{get title(){return n(X)},get values(){return n(Q)},get value(){return n(d)},set value(Y){K(d,Y)},$$legacy:!0})};G(F,w=>{(n(f)===k.CHEST||n(f)===k.RUNES)&&w(te)},!0)}N(m,V)};G(b,m=>{n(f)===k.EQUIPMENT?m(H):m($,!1)})}var T=C(b,2),q=D(()=>r()(y.REWARD_LABEL_AMOUNT));Pe(T,{get title(){return n(q)},children:(m,V)=>{var F=he(),te=ae(F);{var w=Q=>{var Y=Ea();me(Y),Se(Y,()=>n(v),Z=>K(v,Z)),N(Q,Y)},X=Q=>{var Y=ha();me(Y),Se(Y,()=>n(v),Z=>K(v,Z)),N(Q,Y)};G(te,Q=>{n(f)===k.GEMS?Q(w):Q(X,!1)})}N(m,F)},$$slots:{default:!0}});var x=C(T,2);{var R=m=>{var V=D(()=>r()(y.REWARD_LABEL_EQUIPMENT_MORE));Pe(m,{get title(){return n(V)},children:(F,te)=>{var w=ga();me(w),L(()=>De(w,"placeholder",r()(y.EQUIPMENT_MORE_PLACEHOLDER))),Se(w,()=>n(l),X=>K(l,X)),N(F,w)},$$slots:{default:!0}})};G(x,m=>{n(f)===k.EQUIPMENT&&m(R)})}var B=C(x,2),p=S(B);p.__click=[ya,s];var j=S(p,!0);L(()=>z(j,r()(y.CANCEL))),A(p);var P=C(p,2);P.__click=c;var ee=S(P,!0);L(()=>z(ee,r()(y.SAVE))),A(P),A(B),A(h),N(e,h),le()}we(["click"]);var Ma=O('<section class="svelte-1p5vij8"><!></section>');function Ve(e,t){var a=Ma(),r=S(a);Ae(r,t,"default",{}),A(a),Fe(1,a,()=>We,()=>({delay:250,x:-1e3})),Fe(2,a,()=>We,()=>({duration:250,x:1e3})),N(e,a)}var ba=O('<section class="material-icon"><!></section>');function Je(e,t){var a=ba(),r=S(a);Ae(r,t,"default",{}),A(a),N(e,a)}var ma=(e,t)=>at(t,-1),Sa=(e,t)=>at(t),ka=O('<header class="svelte-1912zdk"><button class="svelte-1912zdk"><!></button> <h2 class="svelte-1912zdk"> </h2> <button class="svelte-1912zdk"><!></button></header> <div class="months svelte-1912zdk"></div>',1);function $a(e,t){se(t,!1);const a=W({startDate:new Date,rewards:[]});let r=W(new Date().getFullYear()),s=W();function o(l){K(s,l)}function i(l){if(!n(s))throw new Error("No selected day");wt(a,n(a).rewards[Ie(n(s),n(a).startDate)]=l),K(s,void 0)}function f(){if(!n(s))throw new Error("No selected day");return Ie(n(s),n(a).startDate)}ne();var E=he(),d=ae(E);{var u=l=>{Ve(l,{children:(c,h)=>{var M=ka(),g=ae(M),_=S(g);_.__click=[ma,r];var b=S(_);Je(b,{children:(R,B)=>{Re();var p=Te("arrow_back_ios");N(R,p)},$$slots:{default:!0}}),A(_);var H=C(_,2),$=S(H,!0);A(H);var T=C(H,2);T.__click=[Sa,r];var q=S(T);Je(q,{children:(R,B)=>{Re();var p=Te("arrow_forward_ios");N(R,p)},$$slots:{default:!0}}),A(T),A(g);var x=C(g,2);ue(x,5,()=>qt,ie,(R,B,p)=>{qe(R,{get i18nTitleKey(){return n(B)},children:(j,P)=>{sa(j,Ct(()=>({month:p,year:n(r),onselectday:o,calendar:n(a)})))},$$slots:{default:!0}})}),A(x),L(()=>z($,n(r))),N(c,M)},$$slots:{default:!0}})},v=l=>{Ve(l,{children:(c,h)=>{var M=D(()=>n(s).toDateString());qe(c,{get title(){return n(M)},children:(g,_)=>{Aa(g,{get reward(){return n(a).rewards[f()]},oncancel:()=>{K(s,void 0)},onsave:i})},$$slots:{default:!0}})},$$slots:{default:!0}})};G(d,l=>{n(s)?l(v,!1):l(u)})}N(e,E),le()}we(["click"]);export{$a as component};
