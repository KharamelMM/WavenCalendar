const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.74_PZ9JE.js","../chunks/disclose-version.BAK9tArJ.js","../chunks/utils.D6mM6Ojo.js","../chunks/legacy.0xCLN7Bn.js","../chunks/if.wMG7fNd6.js","../chunks/client.CZ4pHLIx.js","../chunks/preload-helper.CkRfzCf3.js","../chunks/index.WIarMszz.js","../chunks/Modal.DvupXWw7.js","../assets/Modal.C5M0sBqD.css","../chunks/entry.Bcj6Jddb.js","../chunks/stores.ACQjDSHb.js","../assets/0.zpK12TC9.css","../nodes/1.BwlINrtY.js","../nodes/2.CcinO8-T.js","../chunks/stats.lcMjbous.js","../chunks/Filters.DgsHCR9u.js","../assets/Filters.BNzAixc2.css","../chunks/FlyingSection.DJlq5dWy.js","../assets/FlyingSection.BuvFrDZ7.css","../assets/2.DOm3waCC.css","../nodes/3.Bd2YaMRG.js","../assets/3.DHittxOD.css","../nodes/4.BpbaCQMC.js","../chunks/this.VsVE_N4U.js","../assets/4.Lc80FvxL.css"])))=>i.map(i=>d[i]);
var G=r=>{throw TypeError(r)};var M=(r,t,e)=>t.has(r)||G("Cannot "+e);var i=(r,t,e)=>(M(r,t,"read from private field"),e?e.call(r):t.get(r)),O=(r,t,e)=>t.has(r)?G("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),T=(r,t,e,n)=>(M(r,t,"write to private field"),n?n.call(r,e):t.set(r,e),e);import{p as k,a as U,b as W,_ as P}from"../chunks/preload-helper.CkRfzCf3.js";import{h as N,d as X,b as Z,E as p,k as $,m as tt,l as et,D as _,a6 as rt,J as A,ad as at,ae as st,ab as nt,p as ot,z as it,A as ct,af as ut,f as x,a as ft,ag as w,s as lt,c as dt,r as _t,t as mt,G as D}from"../chunks/utils.D6mM6Ojo.js";import{h as ht,m as vt,u as gt,a as y,t as z,d as L,e as yt,b as bt}from"../chunks/disclose-version.BAK9tArJ.js";import{i as C}from"../chunks/if.wMG7fNd6.js";import{b as I}from"../chunks/this.VsVE_N4U.js";function V(r,t,e){N&&X();var n=r,o,f;Z(()=>{o!==(o=t())&&(f&&(et(f),f=null),o&&(f=$(()=>e(n,o))))},p),N&&(n=tt)}function Et(r){return class extends Pt{constructor(t){super({component:r,...t})}}}var m,u;class Pt{constructor(t){O(this,m);O(this,u);var f;var e=new Map,n=(a,s)=>{var h=nt(s);return e.set(a,h),h};const o=new Proxy({...t.props||{},$$events:{}},{get(a,s){return _(e.get(s)??n(s,Reflect.get(a,s)))},has(a,s){return s===rt?!0:(_(e.get(s)??n(s,Reflect.get(a,s))),Reflect.has(a,s))},set(a,s,h){return A(e.get(s)??n(s,h),h),Reflect.set(a,s,h)}});T(this,u,(t.hydrate?ht:vt)(t.component,{target:t.target,anchor:t.anchor,props:o,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((f=t==null?void 0:t.props)!=null&&f.$$host)||t.sync===!1)&&at(),T(this,m,o.$$events);for(const a of Object.keys(i(this,u)))a==="$set"||a==="$destroy"||a==="$on"||st(this,a,{get(){return i(this,u)[a]},set(s){i(this,u)[a]=s},enumerable:!0});i(this,u).$set=a=>{Object.assign(o,a)},i(this,u).$destroy=()=>{gt(i(this,u))}}$set(t){i(this,u).$set(t)}$on(t,e){i(this,m)[t]=i(this,m)[t]||[];const n=(...o)=>e.call(this,...o);return i(this,m)[t].push(n),()=>{i(this,m)[t]=i(this,m)[t].filter(o=>o!==n)}}$destroy(){i(this,u).$destroy()}}m=new WeakMap,u=new WeakMap;const It={};var Rt=z('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),xt=z("<!> <!>",1);function At(r,t){ot(t,!0);let e=k(t,"components",23,()=>[]),n=k(t,"data_0",3,null),o=k(t,"data_1",3,null);it(()=>t.stores.page.set(t.page)),ct(()=>{t.stores,t.page,t.constructors,e(),t.form,n(),o(),t.stores.page.notify()});let f=w(!1),a=w(!1),s=w(null);U(()=>{const c=t.stores.page.subscribe(()=>{_(f)&&(A(a,!0),ut().then(()=>{A(s,W(document.title||"untitled page"))}))});return A(f,!0),c});const h=D(()=>t.constructors[1]);var S=xt(),j=x(S);{var J=c=>{var d=L();const b=D(()=>t.constructors[0]);var E=x(d);V(E,()=>_(b),(v,g)=>{I(g(v,{get data(){return n()},get form(){return t.form},children:(l,Ot)=>{var F=L(),H=x(F);V(H,()=>_(h),(K,Q)=>{I(Q(K,{get data(){return o()},get form(){return t.form}}),R=>e()[1]=R,()=>{var R;return(R=e())==null?void 0:R[1]})}),y(l,F)},$$slots:{default:!0}}),l=>e()[0]=l,()=>{var l;return(l=e())==null?void 0:l[0]})}),y(c,d)},Y=c=>{var d=L();const b=D(()=>t.constructors[0]);var E=x(d);V(E,()=>_(b),(v,g)=>{I(g(v,{get data(){return n()},get form(){return t.form}}),l=>e()[0]=l,()=>{var l;return(l=e())==null?void 0:l[0]})}),y(c,d)};C(j,c=>{t.constructors[1]?c(J):c(Y,!1)})}var q=lt(j,2);{var B=c=>{var d=Rt(),b=dt(d);{var E=v=>{var g=yt();mt(()=>bt(g,_(s))),y(v,g)};C(b,v=>{_(a)&&v(E)})}_t(d),y(c,d)};C(q,c=>{_(f)&&c(B)})}y(r,S),ft()}const Vt=Et(At),St=[()=>P(()=>import("../nodes/0.74_PZ9JE.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url),()=>P(()=>import("../nodes/1.BwlINrtY.js"),__vite__mapDeps([13,1,2,3,11,10,7]),import.meta.url),()=>P(()=>import("../nodes/2.CcinO8-T.js"),__vite__mapDeps([14,1,2,3,4,15,5,6,7,16,8,9,17,18,19,20]),import.meta.url),()=>P(()=>import("../nodes/3.Bd2YaMRG.js"),__vite__mapDeps([21,1,2,3,4,16,5,6,7,8,9,17,18,19,22]),import.meta.url),()=>P(()=>import("../nodes/4.BpbaCQMC.js"),__vite__mapDeps([23,1,2,3,15,5,6,7,18,19,24,25]),import.meta.url)],jt=[],Ft={"/":[2],"/calendar":[3],"/stats":[4]},Gt={handleError:({error:r})=>{console.error(r)},reroute:()=>{}};export{Ft as dictionary,Gt as hooks,It as matchers,St as nodes,Vt as root,jt as server_loads};
