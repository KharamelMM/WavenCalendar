var Ht=Array.isArray,jt=Array.from,Bt=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,et=Object.getOwnPropertyDescriptors,Ut=Object.prototype,Vt=Array.prototype,st=Object.getPrototypeOf;function Gt(n){return typeof n=="function"}const lt=()=>{};function Kt(n){return n()}function An(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,gn=4,j=8,fn=16,m=32,Q=64,en=128,k=256,K=512,h=1024,I=2048,B=4096,C=8192,q=16384,at=32768,In=65536,ut=1<<17,ot=1<<19,Rn=1<<20,En=Symbol("$state"),$t=Symbol("legacy props"),Zt=Symbol("");function On(n){return n===this.v}function it(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function zt(n,t){return n!==t}function Sn(n){return!it(n,this.v)}function ft(n){throw new Error("effect_in_teardown")}function _t(){throw new Error("effect_in_unowned_derived")}function ct(n){throw new Error("effect_orphan")}function vt(){throw new Error("effect_update_depth_exceeded")}function Jt(){throw new Error("hydration_failed")}function Qt(n){throw new Error("props_invalid_value")}function Wt(){throw new Error("state_descriptors_fixed")}function Xt(){throw new Error("state_prototype_fixed")}function pt(){throw new Error("state_unsafe_local_read")}function ht(){throw new Error("state_unsafe_mutation")}let W=!1;function nr(){W=!0}function _n(n){return{f:0,v:n,reactions:null,equals:On,version:0}}function tr(n){return kn(_n(n))}function dt(n,t=!1){var e;const r=_n(n);return t||(r.equals=Sn),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function rr(n,t=!1){return kn(dt(n,t))}function kn(n){return o!==null&&o.f&y&&(T===null?xt([n]):T.push(n)),n}function yn(n,t){return Nn(n,rn(()=>rt(n))),t}function Nn(n,t){return o!==null&&pn()&&o.f&(y|fn)&&(T===null||!T.includes(n))&&ht(),Et(n,t)}function Et(n,t){return n.equals(t)||(n.v=t,n.version=Jn(),bn(n,I),pn()&&u!==null&&u.f&h&&!(u.f&m)&&(v!==null&&v.includes(n)?(A(u,I),tn(u)):g===null?Dt([n]):g.push(n))),t}function bn(n,t){var r=n.reactions;if(r!==null)for(var e=pn(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&I||!e&&a===u||(A(a,t),i&(h|k)&&(i&y?bn(a,B):tn(a)))}}function xn(n){console.warn("hydration_mismatch")}const er=1,sr=2,lr=16,ar=1,ur=2,or=4,ir=8,fr=16,_r=1,cr=2,vr=4,pr=1,hr=2,yt="[",wt="[!",Tt="]",Dn={},dr=Symbol();let S=!1;function Er(n){S=n}let w;function L(n){if(n===null)throw xn(),Dn;return w=n}function yr(){return L(N(w))}function wr(n){if(S){if(N(w)!==null)throw xn(),Dn;w=n}}function Tr(n=1){if(S){for(var t=n,r=w;t--;)r=N(r);w=r}}function mr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===Tt){if(n===0)return t;n-=1}else(r===yt||r===wt)&&(n+=1)}var e=N(t);t.remove(),t=e}}var wn,Cn,qn;function Ar(){if(wn===void 0){wn=window;var n=Element.prototype,t=Node.prototype;Cn=dn(t,"firstChild").get,qn=dn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function sn(n=""){return document.createTextNode(n)}function ln(n){return Cn.call(n)}function N(n){return qn.call(n)}function gr(n,t){if(!S)return ln(n);var r=ln(w);if(r===null)r=w.appendChild(sn());else if(t&&r.nodeType!==3){var e=sn();return r==null||r.before(e),L(e),e}return L(r),r}function Ir(n,t){if(!S){var r=ln(n);return r instanceof Comment&&r.data===""?N(r):r}return w}function Rr(n,t=1,r=!1){let e=S?w:n;for(var s;t--;)s=e,e=N(e);if(!S)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=sn();return e===null?s==null||s.after(a):e.before(a),L(a),a}return L(e),e}function Or(n){n.textContent=""}function mt(n){var t=y|I;u===null?t|=k:u.f|=Rn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:On,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Sr(n){const t=mt(n);return t.equals=Sn,t}function Pn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?cn(e):F(e)}}}function At(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function Fn(n){var t,r=u;J(At(n));try{Pn(n),t=Qn(n)}finally{J(r)}return t}function Ln(n){var t=Fn(n),r=(b||n.f&k)&&n.deps!==null?B:h;A(n,r),n.equals(t)||(n.v=t,n.version=Jn())}function cn(n){Pn(n),H(n,0),A(n,q),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Mn(n){u===null&&o===null&&ct(),o!==null&&o.f&k&&_t(),vn&&ft()}function gt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var s=(n&Q)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|I,first:null,fn:t,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=x;try{Tn(!0),nn(a),a.f|=at}catch(_){throw F(a),_}finally{Tn(i)}}else t!==null&&tn(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&Rn)===0;if(!p&&!s&&e&&(l!==null&&gt(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function kr(n){const t=P(j,null,!1);return A(t,h),t.teardown=n,t}function Nr(n){Mn();var t=u!==null&&(u.f&m)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=Yn(n);return e}}function br(n){return Mn(),It(n)}function xr(n){const t=P(Q,n,!0);return()=>{F(t)}}function Yn(n){return P(gn,n,!1)}function It(n){return P(j,n,!0)}function Dr(n){return Rt(n)}function Rt(n,t=0){return P(j|fn|t,n,!0)}function Cr(n,t=!0){return P(j|m,n,!0,t)}function Hn(n){var t=n.teardown;if(t!==null){const r=vn,e=o;mn(!0),z(null);try{t.call(null)}finally{mn(r),z(e)}}}function jn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)cn(t[r])}}function Bn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;F(r,t),r=e}}function Ot(n){for(var t=n.first;t!==null;){var r=t.next;t.f&m||F(t),t=r}}function F(n,t=!0){var r=!1;if((t||n.f&ot)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var l=e===s?null:N(e);e.remove(),e=l}r=!0}Bn(n,t&&!r),jn(n),H(n,0),A(n,q);var a=n.transitions;if(a!==null)for(const p of a)p.stop();Hn(n);var i=n.parent;i!==null&&i.first!==null&&Un(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Un(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function qr(n,t){var r=[];Vn(n,r,!0),St(r,()=>{F(n),t&&t()})}function St(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Vn(n,t,r){if(!(n.f&C)){if(n.f^=C,n.transitions!==null)for(const a of n.transitions)(a.is_global||r)&&t.push(a);for(var e=n.first;e!==null;){var s=e.next,l=(e.f&In)!==0||(e.f&m)!==0;Vn(e,t,l?r:!1),e=s}}}function Pr(n){Gn(n,!0)}function Gn(n,t){if(n.f&C){U(n)&&nn(n),n.f^=C;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&In)!==0||(r.f&m)!==0;Gn(r,s?t:!1),r=e}if(n.transitions!==null)for(const l of n.transitions)(l.is_global||t)&&l.in()}}const kt=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let $=!1,Z=!1,an=[],un=[];function Kn(){$=!1;const n=an.slice();an=[],An(n)}function $n(){Z=!1;const n=un.slice();un=[],An(n)}function Fr(n){$||($=!0,queueMicrotask(Kn)),an.push(n)}function Lr(n){Z||(Z=!0,kt($n)),un.push(n)}function Nt(){$&&Kn(),Z&&$n()}const Zn=0,bt=1;let V=!1,G=Zn,M=!1,Y=null,x=!1,vn=!1;function Tn(n){x=n}function mn(n){vn=n}let O=[],D=0;let o=null;function z(n){o=n}let u=null;function J(n){u=n}let T=null;function xt(n){T=n}let v=null,E=0,g=null;function Dt(n){g=n}let zn=0,b=!1,R=null,f=null;function Jn(){return++zn}function pn(){return!W||f!==null&&f.l===null}function U(n){var a,i;var t=n.f;if(t&I)return!0;if(t&B){var r=n.deps,e=(t&k)!==0;if(r!==null){var s;if(t&K){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(n);n.f^=K}for(s=0;s<r.length;s++){var l=r[s];if(U(l)&&Ln(l),e&&u!==null&&!b&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(n))&&(l.reactions??(l.reactions=[])).push(n),l.version>n.version)return!0}}e||A(n,h)}return!1}function Ct(n,t){for(var r=t;r!==null;){if(r.f&en)try{r.fn(n);return}catch{r.f^=en}r=r.parent}throw V=!1,n}function qt(n){return(n.f&q)===0&&(n.parent===null||(n.parent.f&en)===0)}function X(n,t,r,e){if(V){if(r===null&&(V=!1),qt(t))throw n;return}r!==null&&(V=!0);{Ct(n,t);return}}function Qn(n){var hn;var t=v,r=E,e=g,s=o,l=b,a=T,i=f,p=n.f;v=null,E=0,g=null,o=p&(m|Q)?null:n,b=!x&&(p&k)!==0,T=null,f=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(H(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!b)for(c=E;c<_.length;c++)((hn=_[c]).reactions??(hn.reactions=[])).push(n)}else _!==null&&E<_.length&&(H(n,E),_.length=E);return d}finally{v=t,E=r,g=e,o=s,b=l,T=a,f=i}}function Pt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(A(t,B),t.f&(k|K)||(t.f^=K),H(t,0))}function H(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Pt(n,r[e])}function nn(n){var t=n.f;if(!(t&q)){A(n,h);var r=u,e=f;u=n;try{t&fn?Ot(n):Bn(n),jn(n),Hn(n);var s=Qn(n);n.teardown=typeof s=="function"?s:null,n.version=zn}catch(l){X(l,n,r,e||n.ctx)}finally{u=r}}}function Wn(){if(D>1e3){D=0;try{vt()}catch(n){if(Y!==null)X(n,Y,null);else throw n}}D++}function Xn(n){var t=n.length;if(t!==0){Wn();var r=x;x=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&h||(s.f^=h);var l=[];nt(s,l),Ft(l)}}finally{x=r}}}function Ft(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(q|C)))try{U(e)&&(nn(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Un(e):e.fn=null))}catch(s){X(s,e,null,e.ctx)}}}function Lt(){if(M=!1,D>1001)return;const n=O;O=[],Xn(n),M||(D=0,Y=null)}function tn(n){G===Zn&&(M||(M=!0,queueMicrotask(Lt))),Y=n;for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Q|m)){if(!(r&h))return;t.f^=h}}O.push(t)}function nt(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,l=(s&m)!==0,a=l&&(s&h)!==0,i=r.next;if(!a&&!(s&C))if(s&j){if(l)r.f^=h;else try{U(r)&&nn(r)}catch(c){X(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&gn&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],t.push(p),nt(p,t)}function tt(n){var t=G,r=O;try{Wn();const s=[];G=bt,O=s,M=!1,Xn(r);var e=n==null?void 0:n();return Nt(),(O.length>0||s.length>0)&&tt(),D=0,Y=null,e}finally{G=t,O=r}}async function Mr(){await Promise.resolve(),tt()}function rt(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&q){var e=Fn(n);return cn(n),e}if(R!==null&&R.add(n),o!==null){T!==null&&T.includes(n)&&pt();var s=o.deps;v===null&&s!==null&&s[E]===n?E++:v===null?v=[n]:v.push(n),g!==null&&u!==null&&u.f&h&&!(u.f&m)&&g.includes(n)&&(A(u,I),tn(u))}else if(r&&n.deps===null)for(var l=n,a=l.parent,i=l;a!==null;)if(a.f&y){var p=a;i=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(l=n,U(l)&&Ln(l)),n.v}function Mt(n){var t=R;R=new Set;var r=R,e;try{if(rn(n),t!==null)for(e of R)t.add(e)}finally{R=t}return r}function Yr(n){var t=Mt(()=>rn(n));for(var r of t)if(r.f&ut)for(const e of r.deps||[])e.f&y||yn(e,null);else yn(r,null)}function rn(n){const t=o;try{return o=null,n()}finally{o=t}}const Yt=~(I|B|h);function A(n,t){n.f=n.f&Yt|t}function Hr(n,t=1){var r=rt(n),e=t===1?r++:r--;return Nn(n,r),e}function jr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},W&&!t&&(f.l={s:null,u:null,r1:[],r2:_n(!1)})}function Br(n){const t=f;if(t!==null){const a=t.e;if(a!==null){var r=u,e=o;t.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];J(l.effect),z(l.reaction),Yn(l.fn)}}finally{J(r),z(e)}}f=t.p,t.m=!0}return{}}function Ur(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(En in n)on(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&En in r&&on(r)}}}function on(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{on(n[e],t)}catch{}const r=st(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=et(r);for(let s in e){const l=e[s].get;if(l)try{l.call(n)}catch{}}}}}function Vr(n,t,r){if(n==null)return t(void 0),r&&r(void 0),lt;const e=rn(()=>n.subscribe(t,r));return e.unsubscribe?()=>e.unsubscribe():e}export{Sr as $,dn as A,u as B,Xt as C,st as D,Ht as E,Rt as F,S as G,yr as H,In as I,wt as J,mr as K,L,Er as M,Pr as N,Cr as O,qr as P,w as Q,Qt as R,En as S,ut as T,dr as U,m as V,Q as W,J as X,ur as Y,ir as Z,$t as _,it as a,or as a0,Sn as a1,ar as a2,fr as a3,dt as a4,Gt as a5,R as a6,rr as a7,Yn as a8,It as a9,Vn as aA,St as aB,F as aC,sr as aD,er as aE,lr as aF,Tr as aG,Yr as aH,Hr as aI,yn as aJ,Lr as aK,Zt as aL,et as aM,fn as aN,at as aO,_r as aP,cr as aQ,vr as aR,Fr as aa,tt as ab,Bt as ac,Mr as ad,tr as ae,z as af,o as ag,kr as ah,ln as ai,sn as aj,pr as ak,hr as al,Ar as am,yt as an,N as ao,Dn as ap,Tt as aq,xn as ar,Jt as as,Or as at,jt as au,xr as av,pn as aw,zt as ax,C as ay,Et as az,rn as b,f as c,Br as d,gr as e,Ir as f,wr as g,Rr as h,br as i,rt as j,Kt as k,W as l,Ur as m,lt as n,mt as o,jr as p,nr as q,An as r,Vr as s,Dr as t,Nr as u,Ut as v,Vt as w,_n as x,Wt as y,Nn as z};
