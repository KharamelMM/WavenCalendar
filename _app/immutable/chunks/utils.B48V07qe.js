var Ft=Array.isArray,Lt=Array.from,Mt=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,tt=Object.getOwnPropertyDescriptors,Ht=Object.prototype,Yt=Array.prototype,rt=Object.getPrototypeOf;function jt(n){return typeof n=="function"}const et=()=>{};function Bt(n){return n()}function wn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,Tn=4,Y=8,un=16,A=32,J=64,tn=128,S=256,G=512,h=1024,g=2048,j=4096,x=8192,C=16384,st=32768,An=65536,Ut=1<<17,lt=1<<19,mn=1<<20,hn=Symbol("$state"),Vt=Symbol("legacy props"),Gt=Symbol("");function In(n){return n===this.v}function at(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Kt(n,t){return n!==t}function gn(n){return!at(n,this.v)}function ut(n){throw new Error("effect_in_teardown")}function ot(){throw new Error("effect_in_unowned_derived")}function it(n){throw new Error("effect_orphan")}function ft(){throw new Error("effect_update_depth_exceeded")}function $t(){throw new Error("hydration_failed")}function Zt(n){throw new Error("props_invalid_value")}function zt(){throw new Error("state_descriptors_fixed")}function Jt(){throw new Error("state_prototype_fixed")}function _t(){throw new Error("state_unsafe_local_read")}function ct(){throw new Error("state_unsafe_mutation")}let Q=!1;function Qt(){Q=!0}function on(n){return{f:0,v:n,reactions:null,equals:In,version:0}}function Wt(n){return On(on(n))}function vt(n,t=!1){var e;const r=on(n);return t||(r.equals=gn),Q&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Xt(n,t=!1){return On(vt(n,t))}function On(n){return o!==null&&o.f&y&&(T===null?kt([n]):T.push(n)),n}function nr(n,t){return Rn(n,nt(()=>Xn(n))),t}function Rn(n,t){return o!==null&&cn()&&o.f&(y|un)&&(T===null||!T.includes(n))&&ct(),pt(n,t)}function pt(n,t){return n.equals(t)||(n.v=t,n.version=$n(),Sn(n,g),cn()&&u!==null&&u.f&h&&!(u.f&A)&&(v!==null&&v.includes(n)?(m(u,g),nn(u)):I===null?Nt([n]):I.push(n))),t}function Sn(n,t){var r=n.reactions;if(r!==null)for(var e=cn(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&g||!e&&a===u||(m(a,t),i&(h|S)&&(i&y?Sn(a,j):nn(a)))}}function kn(n){console.warn("hydration_mismatch")}const tr=1,rr=2,er=4,sr=8,lr=16,ar=1,ur=2,or=4,ir=8,fr=16,_r=1,cr=2,vr=4,pr=1,hr=2,ht="[",dt="[!",Et="]",Nn={},dr=Symbol();let R=!1;function Er(n){R=n}let w;function F(n){if(n===null)throw kn(),Nn;return w=n}function yr(){return F(k(w))}function wr(n){if(R){if(k(w)!==null)throw kn(),Nn;w=n}}function Tr(n=1){if(R){for(var t=n,r=w;t--;)r=k(r);w=r}}function Ar(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===Et){if(n===0)return t;n-=1}else(r===ht||r===dt)&&(n+=1)}var e=k(t);t.remove(),t=e}}var dn,Dn,bn;function mr(){if(dn===void 0){dn=window;var n=Element.prototype,t=Node.prototype;Dn=pn(t,"firstChild").get,bn=pn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function rn(n=""){return document.createTextNode(n)}function en(n){return Dn.call(n)}function k(n){return bn.call(n)}function Ir(n,t){if(!R)return en(n);var r=en(w);if(r===null)r=w.appendChild(rn());else if(t&&r.nodeType!==3){var e=rn();return r==null||r.before(e),F(e),e}return F(r),r}function gr(n,t){if(!R){var r=en(n);return r instanceof Comment&&r.data===""?k(r):r}return w}function Or(n,t=1,r=!1){let e=R?w:n;for(var s;t--;)s=e,e=k(e);if(!R)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=rn();return e===null?s==null||s.after(a):e.before(a),F(a),a}return F(e),e}function Rr(n){n.textContent=""}function yt(n){var t=y|g;u===null?t|=S:u.f|=mn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:In,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Sr(n){const t=yt(n);return t.equals=gn,t}function xn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?fn(e):P(e)}}}function wt(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function Cn(n){var t,r=u;z(wt(n));try{xn(n),t=Zn(n)}finally{z(r)}return t}function qn(n){var t=Cn(n),r=(N||n.f&S)&&n.deps!==null?j:h;m(n,r),n.equals(t)||(n.v=t,n.version=$n())}function fn(n){xn(n),H(n,0),m(n,C),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Pn(n){u===null&&o===null&&it(),o!==null&&o.f&S&&ot(),_n&&ut()}function Tt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function q(n,t,r,e=!0){var s=(n&J)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|g,first:null,fn:t,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=D;try{En(!0),X(a),a.f|=st}catch(_){throw P(a),_}finally{En(i)}}else t!==null&&nn(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&mn)===0;if(!p&&!s&&e&&(l!==null&&Tt(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function kr(n){const t=q(Y,null,!1);return m(t,h),t.teardown=n,t}function Nr(n){Pn();var t=u!==null&&(u.f&A)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=Fn(n);return e}}function Dr(n){return Pn(),At(n)}function br(n){const t=q(J,n,!0);return()=>{P(t)}}function Fn(n){return q(Tn,n,!1)}function At(n){return q(Y,n,!0)}function xr(n){return mt(n)}function mt(n,t=0){return q(Y|un|t,n,!0)}function Cr(n,t=!0){return q(Y|A,n,!0,t)}function Ln(n){var t=n.teardown;if(t!==null){const r=_n,e=o;yn(!0),Z(null);try{t.call(null)}finally{yn(r),Z(e)}}}function Mn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)fn(t[r])}}function Hn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;P(r,t),r=e}}function It(n){for(var t=n.first;t!==null;){var r=t.next;t.f&A||P(t),t=r}}function P(n,t=!0){var r=!1;if((t||n.f&lt)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var l=e===s?null:k(e);e.remove(),e=l}r=!0}Hn(n,t&&!r),Mn(n),H(n,0),m(n,C);var a=n.transitions;if(a!==null)for(const p of a)p.stop();Ln(n);var i=n.parent;i!==null&&i.first!==null&&Yn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Yn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function qr(n,t){var r=[];jn(n,r,!0),gt(r,()=>{P(n),t&&t()})}function gt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function jn(n,t,r){if(!(n.f&x)){if(n.f^=x,n.transitions!==null)for(const a of n.transitions)(a.is_global||r)&&t.push(a);for(var e=n.first;e!==null;){var s=e.next,l=(e.f&An)!==0||(e.f&A)!==0;jn(e,t,l?r:!1),e=s}}}function Pr(n){Bn(n,!0)}function Bn(n,t){if(n.f&x){B(n)&&X(n),n.f^=x;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&An)!==0||(r.f&A)!==0;Bn(r,s?t:!1),r=e}if(n.transitions!==null)for(const l of n.transitions)(l.is_global||t)&&l.in()}}const Ot=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let K=!1,$=!1,sn=[],ln=[];function Un(){K=!1;const n=sn.slice();sn=[],wn(n)}function Vn(){$=!1;const n=ln.slice();ln=[],wn(n)}function Fr(n){K||(K=!0,queueMicrotask(Un)),sn.push(n)}function Lr(n){$||($=!0,Ot(Vn)),ln.push(n)}function Rt(){K&&Un(),$&&Vn()}const Gn=0,St=1;let U=!1,V=Gn,L=!1,M=null,D=!1,_n=!1;function En(n){D=n}function yn(n){_n=n}let O=[],b=0;let o=null;function Z(n){o=n}let u=null;function z(n){u=n}let T=null;function kt(n){T=n}let v=null,E=0,I=null;function Nt(n){I=n}let Kn=0,N=!1,f=null;function $n(){return++Kn}function cn(){return!Q||f!==null&&f.l===null}function B(n){var a,i;var t=n.f;if(t&g)return!0;if(t&j){var r=n.deps,e=(t&S)!==0;if(r!==null){var s;if(t&G){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(n);n.f^=G}for(s=0;s<r.length;s++){var l=r[s];if(B(l)&&qn(l),e&&u!==null&&!N&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(n))&&(l.reactions??(l.reactions=[])).push(n),l.version>n.version)return!0}}e||m(n,h)}return!1}function Dt(n,t){for(var r=t;r!==null;){if(r.f&tn)try{r.fn(n);return}catch{r.f^=tn}r=r.parent}throw U=!1,n}function bt(n){return(n.f&C)===0&&(n.parent===null||(n.parent.f&tn)===0)}function W(n,t,r,e){if(U){if(r===null&&(U=!1),bt(t))throw n;return}r!==null&&(U=!0);{Dt(n,t);return}}function Zn(n){var vn;var t=v,r=E,e=I,s=o,l=N,a=T,i=f,p=n.f;v=null,E=0,I=null,o=p&(A|J)?null:n,N=!D&&(p&S)!==0,T=null,f=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(H(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!N)for(c=E;c<_.length;c++)((vn=_[c]).reactions??(vn.reactions=[])).push(n)}else _!==null&&E<_.length&&(H(n,E),_.length=E);return d}finally{v=t,E=r,I=e,o=s,N=l,T=a,f=i}}function xt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(m(t,j),t.f&(S|G)||(t.f^=G),H(t,0))}function H(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)xt(n,r[e])}function X(n){var t=n.f;if(!(t&C)){m(n,h);var r=u,e=f;u=n;try{t&un?It(n):Hn(n),Mn(n),Ln(n);var s=Zn(n);n.teardown=typeof s=="function"?s:null,n.version=Kn}catch(l){W(l,n,r,e||n.ctx)}finally{u=r}}}function zn(){if(b>1e3){b=0;try{ft()}catch(n){if(M!==null)W(n,M,null);else throw n}}b++}function Jn(n){var t=n.length;if(t!==0){zn();var r=D;D=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&h||(s.f^=h);var l=[];Qn(s,l),Ct(l)}}finally{D=r}}}function Ct(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(C|x)))try{B(e)&&(X(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Yn(e):e.fn=null))}catch(s){W(s,e,null,e.ctx)}}}function qt(){if(L=!1,b>1001)return;const n=O;O=[],Jn(n),L||(b=0,M=null)}function nn(n){V===Gn&&(L||(L=!0,queueMicrotask(qt))),M=n;for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(J|A)){if(!(r&h))return;t.f^=h}}O.push(t)}function Qn(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,l=(s&A)!==0,a=l&&(s&h)!==0,i=r.next;if(!a&&!(s&x))if(s&Y){if(l)r.f^=h;else try{B(r)&&X(r)}catch(c){W(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&Tn&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],t.push(p),Qn(p,t)}function Wn(n){var t=V,r=O;try{zn();const s=[];V=St,O=s,L=!1,Jn(r);var e=n==null?void 0:n();return Rt(),(O.length>0||s.length>0)&&Wn(),b=0,M=null,e}finally{V=t,O=r}}async function Mr(){await Promise.resolve(),Wn()}function Xn(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&C){var e=Cn(n);return fn(n),e}if(o!==null){T!==null&&T.includes(n)&&_t();var s=o.deps;v===null&&s!==null&&s[E]===n?E++:v===null?v=[n]:v.push(n),I!==null&&u!==null&&u.f&h&&!(u.f&A)&&I.includes(n)&&(m(u,g),nn(u))}else if(r&&n.deps===null)for(var l=n,a=l.parent,i=l;a!==null;)if(a.f&y){var p=a;i=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(l=n,B(l)&&qn(l)),n.v}function nt(n){const t=o;try{return o=null,n()}finally{o=t}}const Pt=~(g|j|h);function m(n,t){n.f=n.f&Pt|t}function Hr(n,t=1){var r=Xn(n),e=t===1?r++:r--;return Rn(n,r),e}function Yr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},Q&&!t&&(f.l={s:null,u:null,r1:[],r2:on(!1)})}function jr(n){const t=f;if(t!==null){const a=t.e;if(a!==null){var r=u,e=o;t.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];z(l.effect),Z(l.reaction),Fn(l.fn)}}finally{z(r),Z(e)}}f=t.p,t.m=!0}return{}}function Br(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(hn in n)an(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&hn in r&&an(r)}}}function an(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{an(n[e],t)}catch{}const r=rt(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=tt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(n)}catch{}}}}}function Ur(n,t,r){if(n==null)return t(void 0),r&&r(void 0),et;const e=nt(()=>n.subscribe(t,r));return e.unsubscribe?()=>e.unsubscribe():e}export{Sr as $,u as A,Jt as B,rt as C,Ft as D,mt as E,R as F,yr as G,An as H,dt as I,Ar as J,F as K,Er as L,Pr as M,Cr as N,qr as O,w as P,Zt as Q,Ut as R,hn as S,A as T,dr as U,J as V,z as W,Q as X,ur as Y,ir as Z,Vt as _,at as a,or as a0,gn as a1,ar as a2,fr as a3,vt as a4,jt as a5,Fn as a6,At as a7,Fr as a8,Wn as a9,jn as aA,gt as aB,P as aC,tr as aD,rr as aE,er as aF,sr as aG,lr as aH,Hr as aI,nr as aJ,Lr as aK,Gt as aL,tt as aM,un as aN,st as aO,_r as aP,cr as aQ,vr as aR,Mt as aa,Mr as ab,Wt as ac,Tr as ad,Xt as ae,Z as af,o as ag,kr as ah,rn as ai,en as aj,pr as ak,hr as al,mr as am,ht as an,k as ao,Nn as ap,Et as aq,kn as ar,$t as as,Rr as at,Lt as au,br as av,cn as aw,Kt as ax,x as ay,pt as az,jr as b,Ir as c,wr as d,Or as e,gr as f,Nr as g,f as h,nt as i,Bt as j,Xn as k,Br as l,yt as m,et as n,Qt as o,Yr as p,Ht as q,wn as r,Ur as s,xr as t,Dr as u,Yt as v,on as w,zt as x,Rn as y,pn as z};
