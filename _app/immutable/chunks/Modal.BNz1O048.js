import{h,ak as Y,V as K,al as j,am as z,v as F,u as H,o as J,c as _,s as M,r as d,t as O,p as Q,a as U,P as C,G as W,ah as X,f as Z}from"./utils.DS7Odsae.js";import{i as $,l as ee,g as G,a as m,t as g,b as ae,e as se}from"./disclose-version.DARnoLUY.js";import{i as te}from"./legacy.uhxq8U6e.js";import{s as I,t as S,a as re,e as le}from"./client.A4bxOfeX.js";import{p as o,s as oe}from"./preload-helper.ClI4wH-8.js";import{i as P}from"./if.DRdOVeSS.js";function pe(e){if(h){var a=!1,s=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var t=e.value;L(e,"value",null),e.value=t}if(e.hasAttribute("checked")){var r=e.checked;L(e,"checked",null),e.checked=r}}};e.__on_r=s,Y(s),$()}}function L(e,a,s,t){var r=e.__attributes??(e.__attributes={});h&&(r[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||r[a]!==(r[a]=s)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[j]=s),s==null?e.removeAttribute(a):typeof s!="string"&&ie(e).includes(a)?e[a]=s:e.setAttribute(a,s))}var q=new Map;function ie(e){var a=q.get(e.nodeName);if(a)return a;q.set(e.nodeName,a=[]);for(var s,t=K(e),r=Element.prototype;r!==t;){s=z(t);for(var l in s)s[l].set&&a.push(l);t=K(t)}return a}function ne(e,a){var s=e.__className,t=ce(a);h&&e.className===t?e.__className=t:(s!==t||h&&e.className!==t)&&(a==null?e.removeAttribute("class"):e.className=t,e.__className=t)}function ce(e){return e??""}function w(e,a,s){if(s){if(e.classList.contains(a))return;e.classList.add(a)}else{if(!e.classList.contains(a))return;e.classList.remove(a)}}function Le(e,a,s=a){var t=F();ee(e,"input",r=>{var l=r?e.defaultValue:e.value;l=A(e)?p(l):l,s(l),t&&l!==(l=a())&&(e.value=l??"")}),(h&&e.defaultValue!==e.value||H(a)==null&&e.value)&&s(A(e)?p(e.value):e.value),J(()=>{var r=a();A(e)&&r===p(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function A(e){var a=e.type;return a==="number"||a==="range"}function p(e){return e===""?null:+e}function fe(e){return--e*e*((1.70158+1)*e+1.70158)+1}function Te(e){return--e*e*e*e*e+1}var ve=g('<button class="material-icon svelte-v3vmky">close</button>'),ue=g('<h3 class="svelte-v3vmky"> </h3>'),_e=g('<section><header class="svelte-v3vmky"><!> <!></header> <div class="body svelte-v3vmky"><!></div></section>');function de(e,a){let s=o(a,"title",8,void 0),t=o(a,"onclose",8,void 0),r=o(a,"outline",8,!1),l=o(a,"primary",8,!1),n=o(a,"modal",8,!1),f=o(a,"classes",8,""),k=o(a,"width",8,"auto"),b=o(a,"height",8,"auto");var i=_e(),v=_(i),y=_(v);{var B=c=>{var u=ve();u.__click=function(...N){var x;(x=t())==null||x.apply(this,N)},m(c,u)};P(y,c=>{t()&&c(B)})}var D=M(y,2);{var E=c=>{var u=ue(),N=_(u,!0);d(u),O(()=>ae(N,s())),m(c,u)};P(D,c=>{s()&&c(E)})}d(v);var T=M(v,2),R=_(T);I(R,a,"default",{}),d(T),d(i),O(()=>{ne(i,`${f()??""} svelte-v3vmky`),L(i,"style",`width: ${k()??""}; height: ${b()??""}`),w(i,"outline",r()),w(i,"modal",n()),w(i,"primary",l())}),S(3,i,()=>re,()=>({easing:fe,duration:200})),m(e,i)}G(["click"]);function V(e){e.stopPropagation()}var me=(e,a)=>C(a,!0),he=(e,a,s)=>{var t;W(a)&&(C(a,!1),(t=s())==null||t())},ye=g('<section class="svelte-1gyypr5"><div><!></div></section>');function xe(e,a){Q(a,!1);let s=o(a,"title",8,void 0),t=o(a,"i18nTitleKey",8,void 0),r=o(a,"onclose",8,void 0),l=X(!1);te();var n=ye();n.__mousedown=[me,l],n.__mouseup=[he,l,r];var f=_(n);f.__mousedown=[V],f.__mouseup=[V];var k=_(f);de(k,oe(()=>({title:s(),i18nTitleKey:t(),onclose:r(),modal:!0}),{children:(b,i)=>{var v=se(),y=Z(v);I(y,a,"default",{}),m(b,v)},$$slots:{default:!0}})),d(f),d(n),S(3,n,()=>le,()=>({duration:200})),m(e,n),U()}G(["mousedown","mouseup"]);export{de as C,xe as M,Le as a,fe as b,ne as c,Te as q,pe as r,L as s,w as t};
