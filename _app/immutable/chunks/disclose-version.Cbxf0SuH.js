import{af as L,z as N,ag as H,m,ah as W,aa as z,ac as G,v as Q,ai as S,aj as A,ak as X,al as x,O as g,a0 as f,Q as Y,X as I,am as M,an as J,ao as K,ap as R,Y as E,aq as Z,ar as ee,as as re,at as te,au as ae,av as ne,_ as se,p as ie,b as oe,a3 as ue,I as fe,n as C,s as ce,l as de,j as le}from"./utils.DAUx74QY.js";let V=!1;function _e(){V||(V=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const t of e.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function q(e){var r=H,t=m;L(null),N(null);try{return e()}finally{L(r),N(t)}}function we(e,r,t,s=t){e.addEventListener(r,()=>q(t));const n=e.__on_r;n?e.__on_r=()=>{n(),s(!0)}:e.__on_r=()=>s(!0),_e()}const B=new Set,P=new Set;function ve(e,r,t,s){function n(a){if(s.capture||y.call(r,a),!a.cancelBubble)return q(()=>t.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?z(()=>{r.addEventListener(e,n,s)}):r.addEventListener(e,n,s),n}function Ee(e,r,t,s,n){var a={capture:s,passive:n},i=ve(e,r,t,a);(r===document.body||r===window||r===document)&&W(()=>{r.removeEventListener(e,i,a)})}function Te(e){for(var r=0;r<e.length;r++)B.add(e[r]);for(var t of P)t(e)}function y(e){var k;var r=this,t=r.ownerDocument,s=e.type,n=((k=e.composedPath)==null?void 0:k.call(e))||[],a=n[0]||e.target,i=0,_=e.__root;if(_){var d=n.indexOf(_);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var h=n.indexOf(r);if(h===-1)return;d<=h&&(i=d)}if(a=n[i]||e.target,a!==r){G(e,"currentTarget",{configurable:!0,get(){return a||t}});var O=H,c=m;L(null),N(null);try{for(var o,u=[];a!==null;){var l=a.assignedSlot||a.parentNode||a.host||null;try{var p=a["__"+s];if(p!==void 0&&!a.disabled)if(Q(p)){var[U,...$]=p;U.apply(a,[e,...$])}else p.call(a,e)}catch(w){o?u.push(w):o=w}if(e.cancelBubble||l===r||l===null)break;a=l}if(o){for(let w of u)queueMicrotask(()=>{throw w});throw o}}finally{e.__root=r,delete e.currentTarget,L(O),N(c)}}}function he(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function v(e,r){var t=m;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function Le(e,r){var t=(r&X)!==0,s=(r&x)!==0,n,a=!e.startsWith("<!>");return()=>{if(g)return v(f,null),f;n===void 0&&(n=he(a?e:"<!>"+e),t||(n=A(n)));var i=s?document.importNode(n,!0):n.cloneNode(!0);if(t){var _=A(i),d=i.lastChild;v(_,d)}else v(i,i);return i}}function Ne(e=""){if(!g){var r=S(e+"");return v(r,r),r}var t=f;return t.nodeType!==3&&(t.before(t=S()),I(t)),v(t,t),t}function Se(){if(g)return v(f,null),f;var e=document.createDocumentFragment(),r=document.createComment(""),t=S();return e.append(r,t),v(r,t),e}function Oe(e,r){if(g){m.nodes_end=f,Y();return}e!==null&&e.before(r)}const pe=["touchstart","touchmove"];function ge(e){return pe.includes(e)}let j=!0;function Re(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function be(e,r){return F(e,r)}function Ae(e,r){M(),r.intro=r.intro??!1;const t=r.target,s=g,n=f;try{for(var a=A(t);a&&(a.nodeType!==8||a.data!==J);)a=K(a);if(!a)throw R;E(!0),I(a),Y();const i=F(e,{...r,anchor:a});if(f===null||f.nodeType!==8||f.data!==Z)throw ee(),R;return E(!1),i}catch(i){if(i===R)return r.recover===!1&&re(),M(),te(t),E(!1),be(e,r);throw i}finally{E(s),I(n)}}const b=new Map;function F(e,{target:r,anchor:t,props:s={},events:n,context:a,intro:i=!0}){M();var _=new Set,d=c=>{for(var o=0;o<c.length;o++){var u=c[o];if(!_.has(u)){_.add(u);var l=ge(u);r.addEventListener(u,y,{passive:l});var p=b.get(u);p===void 0?(document.addEventListener(u,y,{passive:l}),b.set(u,1)):b.set(u,p+1)}}};d(ae(B)),P.add(d);var h=void 0,O=ne(()=>{var c=t??r.appendChild(S());return se(()=>{if(a){ie({});var o=ue;o.c=a}n&&(s.$$events=n),g&&v(c,null),j=i,h=e(c,s)||{},j=!0,g&&(m.nodes_end=f),a&&oe()}),()=>{var l;for(var o of _){r.removeEventListener(o,y);var u=b.get(o);--u===0?(document.removeEventListener(o,y),b.delete(o)):b.set(o,u)}P.delete(d),D.delete(h),c!==t&&((l=c.parentNode)==null||l.removeChild(c))}});return D.set(h,O),h}let D=new WeakMap;function Ie(e){const r=D.get(e);r&&r()}let T=!1;function Me(e,r,t){const s=t[r]??(t[r]={store:null,source:fe(void 0),unsubscribe:C});if(s.store!==e)if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=C;else{var n=!0;s.unsubscribe=ce(e,a=>{n?s.source.v=a:le(s.source,a)}),n=!1}return de(s.source)}function Pe(){const e={};return W(()=>{for(var r in e)e[r].unsubscribe()}),e}function De(e){var r=T;try{return T=!1,[e(),T]}finally{T=r}}const ye="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ye);export{Oe as a,Re as b,Me as c,De as d,Se as e,Ee as f,Ne as g,Ae as h,j as i,_e as j,Te as k,we as l,be as m,Pe as s,Le as t,Ie as u};
