import{h,aj as J,_ as x,ak as R,al as Y,P as z,u as F,o as H,c as _,s as K,r as d,t as O,p as Q,a as U,J as D,D as W,M as X,f as Z}from"./utils.BTSv_gmg.js";import{i as $,l as ee,f as I,a as m,t as g,b as ae,e as se}from"./disclose-version.CLCQgUk-.js";import{i as te}from"./legacy.DvMgMy8j.js";import{s as S,t as V,d as re,e as le}from"./client.Bqq_WX2i.js";import{p as o,s as oe}from"./preload-helper.C9HtXfav.js";import{i as P}from"./if.Bxl-Y-li.js";function pe(e){if(h){var a=!1,s=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var t=e.value;L(e,"value",null),e.value=t}if(e.hasAttribute("checked")){var r=e.checked;L(e,"checked",null),e.checked=r}}};e.__on_r=s,J(s),$()}}function L(e,a,s,t){var r=e.__attributes??(e.__attributes={});h&&(r[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||r[a]!==(r[a]=s)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[R]=s),s==null?e.removeAttribute(a):typeof s!="string"&&ie(e).includes(a)?e[a]=s:e.setAttribute(a,s))}var q=new Map;function ie(e){var a=q.get(e.nodeName);if(a)return a;q.set(e.nodeName,a=[]);for(var s,t=x(e),r=Element.prototype;r!==t;){s=Y(t);for(var l in s)s[l].set&&a.push(l);t=x(t)}return a}function ne(e,a){var s=e.__className,t=fe(a);h&&e.className===t?e.__className=t:(s!==t||h&&e.className!==t)&&(a==null?e.removeAttribute("class"):e.className=t,e.__className=t)}function fe(e){return e??""}function w(e,a,s){if(s){if(e.classList.contains(a))return;e.classList.add(a)}else{if(!e.classList.contains(a))return;e.classList.remove(a)}}function Le(e,a,s=a){var t=z();ee(e,"input",r=>{var l=r?e.defaultValue:e.value;l=A(e)?p(l):l,s(l),t&&l!==(l=a())&&(e.value=l??"")}),(h&&e.defaultValue!==e.value||F(a)==null&&e.value)&&s(A(e)?p(e.value):e.value),H(()=>{var r=a();A(e)&&r===p(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function A(e){var a=e.type;return a==="number"||a==="range"}function p(e){return e===""?null:+e}function ce(e){return--e*e*((1.70158+1)*e+1.70158)+1}function Me(e){return--e*e*e*e*e+1}var ue=g('<button class="material-icon svelte-v3vmky">close</button>'),ve=g('<h3 class="svelte-v3vmky"> </h3>'),_e=g('<section><header class="svelte-v3vmky"><!> <!></header> <div class="body svelte-v3vmky"><!></div></section>');function de(e,a){let s=o(a,"title",8,void 0),t=o(a,"onclose",8,void 0),r=o(a,"outline",8,!1),l=o(a,"primary",8,!1),n=o(a,"modal",8,!1),c=o(a,"classes",8,""),k=o(a,"width",8,"auto"),b=o(a,"height",8,"auto");var i=_e(),u=_(i),y=_(u);{var j=f=>{var v=ue();v.__click=function(...N){var T;(T=t())==null||T.apply(this,N)},m(f,v)};P(y,f=>{t()&&f(j)})}var B=K(y,2);{var E=f=>{var v=ve(),N=_(v,!0);d(v),O(()=>ae(N,s())),m(f,v)};P(B,f=>{s()&&f(E)})}d(u);var M=K(u,2),G=_(M);S(G,a,"default",{}),d(M),d(i),O(()=>{ne(i,`${c()??""} svelte-v3vmky`),L(i,"style",`width: ${k()??""}; height: ${b()??""}`),w(i,"outline",r()),w(i,"modal",n()),w(i,"primary",l())}),V(3,i,()=>re,()=>({easing:ce,duration:200})),m(e,i)}I(["click"]);function C(e){e.stopPropagation()}var me=(e,a)=>D(a,!0),he=(e,a,s)=>{var t;W(a)&&(D(a,!1),(t=s())==null||t())},ye=g('<section class="svelte-1gyypr5"><div><!></div></section>');function Te(e,a){Q(a,!1);let s=o(a,"title",8,void 0),t=o(a,"i18nTitleKey",8,void 0),r=o(a,"onclose",8,void 0),l=X(!1);te();var n=ye();n.__mousedown=[me,l],n.__mouseup=[he,l,r];var c=_(n);c.__mousedown=[C],c.__mouseup=[C];var k=_(c);de(k,oe(()=>({title:s(),i18nTitleKey:t(),onclose:r(),modal:!0}),{children:(b,i)=>{var u=se(),y=Z(u);S(y,a,"default",{}),m(b,u)},$$slots:{default:!0}})),d(c),d(n),V(3,n,()=>le,()=>({duration:200})),m(e,n),U()}I(["mousedown","mouseup"]);export{de as C,Te as M,ne as a,Le as b,Me as q,pe as r,L as s,w as t};
