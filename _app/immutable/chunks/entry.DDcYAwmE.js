import{ad as lt}from"./utils.Cpi28qrZ.js";import{w as pe}from"./index.PUy17aAp.js";new URL("sveltekit-internal://");function ft(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function ut(e){return e.split("%25").map(decodeURI).join("%25")}function dt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ce({href:e}){return e.split("#")[0]}const ht=["href","pathname","search","toString","toJSON"];function pt(e,n,t){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),r[o](s));n();const i=Reflect.get(r,o);return typeof i=="function"?i.bind(r):i}}),enumerable:!0,configurable:!0});for(const r of ht)Object.defineProperty(a,r,{get(){return n(),e[r]},enumerable:!0,configurable:!0});return a}const gt="/__data.json",mt=".html__data.json";function yt(e){return e.endsWith(".html")?e.replace(/\.html$/,mt):e.replace(/\/$/,"")+gt}function _t(...e){let n=5381;for(const t of e)if(typeof t=="string"){let a=t.length;for(;a;)n=n*33^t.charCodeAt(--a)}else if(ArrayBuffer.isView(t)){const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function wt(e){const n=atob(e),t=new Uint8Array(n.length);for(let a=0;a<n.length;a++)t[a]=n.charCodeAt(a);return t.buffer}const $e=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&B.delete(ge(e)),$e(e,n));const B=new Map;function vt(e,n){const t=ge(e,n),a=document.querySelector(t);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&B.set(t,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=wt(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,n)}function bt(e,n,t){if(B.size>0){const a=ge(e,t),r=B.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(r.body,r.init);B.delete(a)}}return window.fetch(n,t)}function ge(e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${_t(...r)}"]`}return a}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function kt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${St(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return le(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return le(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=At.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return le(c)}).join("")}).join("")}/?$`),params:n}}function Et(e){return!/^\([^)]+\)$/.test(e)}function St(e){return e.slice(1).split("/").filter(Et)}function Rt(e,n,t){const a={},r=e.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let f=r[s-i];if(c.chained&&c.rest&&i&&(f=r.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){a[c.name]=f;const d=n[s+1],h=r[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function It({nodes:e,server_loads:n,dictionary:t,matchers:a}){const r=new Set(n);return Object.entries(t).map(([s,[c,f,d]])=>{const{pattern:h,params:y}=kt(s),u={id:s,exec:g=>{const l=h.exec(g);if(l)return Rt(l,y,a)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[r.has(s),e[s]]}}function Fe(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Ie(e,n,t=JSON.stringify){const a=t(n);try{sessionStorage[e]=a}catch{}}var je;const U=((je=globalThis.__sveltekit_15adhax)==null?void 0:je.base)??"/WavenCalendar";var De;const Tt=((De=globalThis.__sveltekit_15adhax)==null?void 0:De.assets)??U,Ut="1738085429407",Ve="sveltekit:snapshot",Be="sveltekit:scroll",Ge="sveltekit:states",Lt="sveltekit:pageurl",j="sveltekit:history",q="sveltekit:navigation",Y={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},K=location.origin;function qe(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function me(){return{x:pageXOffset,y:pageYOffset}}function N(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Te={...Y,"":Y.hover};function Me(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function He(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Me(e)}}function ue(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!t||!!a||ne(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===K&&e.hasAttribute("download");return{url:t,external:r,target:a,download:o}}function J(e){let n=null,t=null,a=null,r=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=N(s,"preload-code")),r===null&&(r=N(s,"preload-data")),n===null&&(n=N(s,"keepfocus")),t===null&&(t=N(s,"noscroll")),o===null&&(o=N(s,"reload")),i===null&&(i=N(s,"replacestate")),s=Me(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Te[a??"off"],preload_data:Te[r??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Ue(e){const n=pe(e);let t=!0;function a(){t=!0,n.update(i=>i)}function r(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}function xt(){const{set:e,subscribe:n}=pe(!1);let t;async function a(){clearTimeout(t);try{const r=await fetch(`${Tt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==Ut;return i&&(e(!0),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:a}}function ne(e,n){return e.origin!==K||!e.pathname.startsWith(n)}function Le(e){const n=Ct(e),t=new ArrayBuffer(n.length),a=new DataView(t);for(let r=0;r<t.byteLength;r++)a.setUint8(r,n.charCodeAt(r));return t}const Pt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ct(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,a=0;for(let r=0;r<e.length;r++)t<<=6,t|=Pt.indexOf(e[r]),a+=6,a===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=a=0);return a===12?(t>>=4,n+=String.fromCharCode(t)):a===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const Nt=-1,Ot=-2,jt=-3,Dt=-4,$t=-5,Ft=-6;function Vt(e,n){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,a=Array(t.length);function r(o,i=!1){if(o===Nt)return;if(o===jt)return NaN;if(o===Dt)return 1/0;if(o===$t)return-1/0;if(o===Ft)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=t[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=n==null?void 0:n[c];if(f)return a[o]=f(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const d=new Set;a[o]=d;for(let u=1;u<s.length;u+=1)d.add(r(s[u]));break;case"Map":const h=new Map;a[o]=h;for(let u=1;u<s.length;u+=2)h.set(r(s[u]),r(s[u+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);a[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=r(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],l=Le(g),p=new u(l);a[o]=p;break}case"ArrayBuffer":{const u=s[1],g=Le(u);a[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==Ot&&(c[f]=r(d))}}else{const c={};a[o]=c;for(const f in s){const d=s[f];c[f]=r(d)}}return a[o]}return r(0)}const Ke=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ke];const Bt=new Set([...Ke]);[...Bt];function Gt(e){return e.filter(n=>n!=null)}class ae{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class We{constructor(n,t){this.status=n,this.location=t}}class ye extends Error{constructor(n,t,a){super(a),this.status=n,this.text=t}}const qt="x-sveltekit-invalidated",Mt="x-sveltekit-trailing-slash";function z(e){return e instanceof ae||e instanceof ye?e.status:500}function Ht(e){return e instanceof ye?e.text:"Internal Error"}const Kt=new Set(["icon","shortcut icon","apple-touch-icon"]),C=Fe(Be)??{},M=Fe(Ve)??{},x={url:Ue({}),page:Ue({}),navigating:pe(null),updated:xt()};function _e(e){C[e]=me()}function Wt(e,n){let t=e+1;for(;C[t];)delete C[t],t+=1;for(t=n+1;M[t];)delete M[t],t+=1}function $(e){return location.href=e.href,new Promise(()=>{})}async function Ye(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function xe(){}let re,de,X,L,he,F;const Je=[],Z=[];let R=null;const ze=[],Yt=[];let O=[],_={branch:[],error:null,url:null},we=!1,Q=!1,Pe=!0,H=!1,V=!1,Xe=!1,ve=!1,be,S,T,I,ee;const G=new Set;async function sn(e,n,t){var r,o;document.URL!==location.href&&(location.href=location.href),F=e,re=It(e),L=document.documentElement,he=n,de=e.nodes[0],X=e.nodes[1],de(),X(),S=(r=history.state)==null?void 0:r[j],T=(o=history.state)==null?void 0:o[q],S||(S=T=Date.now(),history.replaceState({...history.state,[j]:S,[q]:T},""));const a=C[S];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),t?await nn(he,t):en(location.href,{replaceState:!0}),tn()}function Jt(){Je.length=0,ve=!1}function Ze(e){Z.some(n=>n==null?void 0:n.snapshot)&&(M[e]=Z.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function Qe(e){var n;(n=M[e])==null||n.forEach((t,a)=>{var r,o;(o=(r=Z[a])==null?void 0:r.snapshot)==null||o.restore(t)})}function Ce(){_e(S),Ie(Be,C),Ze(T),Ie(Ve,M)}async function et(e,n,t,a){return W({type:"goto",url:qe(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:a,accept:()=>{n.invalidateAll&&(ve=!0)}})}async function zt(e){if(e.id!==(R==null?void 0:R.id)){const n={};G.add(n),R={id:e.id,token:n,promise:nt({...e,preload:n}).then(t=>(G.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function fe(e){const n=re.find(t=>t.exec(at(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function tt(e,n,t){var o;_=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),I=e.props.page,be=new F.root({target:n,props:{...e.props,stores:x,components:Z},hydrate:t,sync:!1}),Qe(T);const r={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};O.forEach(i=>i(r)),Q=!0}function te({url:e,params:n,branch:t,status:a,error:r,route:o,form:i}){let s="never";if(U&&(e.pathname===U||e.pathname===U+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=ft(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:r,route:o},props:{constructors:Gt(t).map(u=>u.node.component),page:I}};i!==void 0&&(c.props.form=i);let f={},d=!I,h=0;for(let u=0;u<Math.max(t.length,_.branch.length);u+=1){const g=t[u],l=_.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==r||i!==void 0&&i!==I.form||d)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(e),form:i??null,data:d?f:I.data}),c}async function Ae({loader:e,parent:n,url:t,params:a,route:r,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const p of l){const{href:b}=new URL(p,t);c.dependencies.add(b)}};const g={route:new Proxy(r,{get:(l,p)=>(s&&(c.route=!0),l[p])}),params:new Proxy(a,{get:(l,p)=>(s&&c.params.add(p),l[p])}),data:(o==null?void 0:o.data)??null,url:pt(t,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)}),async fetch(l,p){let b;l instanceof Request?(b=l.url,p={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...p}):b=l;const k=new URL(b,t);return s&&u(k.href),k.origin===t.origin&&(b=k.href.slice(t.origin.length)),Q?bt(b,k.href,p):vt(b,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(l){s=!1;try{return l()}finally{s=!0}}};i=await f.universal.load.call(null,g)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Ne(e,n,t,a,r,o){if(ve)return!0;if(!r)return!1;if(r.parent&&e||r.route&&n||r.url&&t)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==_.params[i])return!0;for(const i of r.dependencies)if(Je.some(s=>s(new URL(i))))return!0;return!1}function ke(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Xt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const a of t){const r=e.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&t.delete(a)}return t}function Oe({error:e,url:n,route:t,params:a}){return{type:"loaded",state:{error:e,url:n,route:t,params:a,branch:[]},props:{page:I,constructors:[]}}}async function nt({id:e,invalidating:n,url:t,params:a,route:r,preload:o}){if((R==null?void 0:R.id)===e)return G.delete(R.token),R.promise;const{errors:i,layouts:s,leaf:c}=r,f=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),f.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=_.url?e!==_.url.pathname+_.url.search:!1,y=_.route?r.id!==_.route.id:!1,u=Xt(_.url,t);let g=!1;const l=f.map((m,v)=>{var P;const A=_.branch[v],E=!!(m!=null&&m[0])&&((A==null?void 0:A.loader)!==m[1]||Ne(g,y,h,u,(P=A.server)==null?void 0:P.uses,a));return E&&(g=!0),E});if(l.some(Boolean)){try{d=await st(t,l)}catch(m){const v=await D(m,{url:t,params:a,route:{id:e}});return G.has(o)?Oe({error:v,url:t,params:a,route:r}):oe({status:z(m),error:v,url:t,route:r})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let b=!1;const k=f.map(async(m,v)=>{var se;if(!m)return;const A=_.branch[v],E=p==null?void 0:p[v];if((!E||E.type==="skip")&&m[1]===(A==null?void 0:A.loader)&&!Ne(b,y,h,u,(se=A.universal)==null?void 0:se.uses,a))return A;if(b=!0,(E==null?void 0:E.type)==="error")throw E;return Ae({loader:m[1],url:t,params:a,route:r,parent:async()=>{var Re;const Se={};for(let ie=0;ie<v;ie+=1)Object.assign(Se,(Re=await k[ie])==null?void 0:Re.data);return Se},server_data_node:ke(E===void 0&&m[0]?{type:"skip"}:E??null,m[0]?A==null?void 0:A.server:void 0)})});for(const m of k)m.catch(()=>{});const w=[];for(let m=0;m<f.length;m+=1)if(f[m])try{w.push(await k[m])}catch(v){if(v instanceof We)return{type:"redirect",location:v.location};if(G.has(o))return Oe({error:await D(v,{params:a,url:t,route:{id:r.id}}),url:t,params:a,route:r});let A=z(v),E;if(p!=null&&p.includes(v))A=v.status??A,E=v.error;else if(v instanceof ae)E=v.body;else{if(await x.updated.check())return await Ye(),await $(t);E=await D(v,{params:a,url:t,route:{id:r.id}})}const P=await Zt(m,w,i);return P?te({url:t,params:a,branch:w.slice(0,P.idx).concat(P.node),status:A,error:E,route:r}):await ot(t,{id:r.id},E,A)}else w.push(void 0);return te({url:t,params:a,branch:w,status:200,error:null,route:r,form:n?void 0:null})}async function Zt(e,n,t){for(;e--;)if(t[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:e,error:n,url:t,route:a}){const r={};let o=null;if(F.server_loads[0]===0)try{const f=await st(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==K||t.pathname!==location.pathname||we)&&await $(t)}const s=await Ae({loader:de,url:t,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:ke(o)}),c={node:await X(),loader:X,universal:null,server:null,data:null};return te({url:t,params:r,branch:[s,c],status:e,error:n,route:null})}function Ee(e,n){if(!e||ne(e,U))return;let t;try{t=F.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const a=at(t);for(const r of re){const o=r.exec(a);if(o)return{id:e.pathname+e.search,invalidating:n,route:r,params:dt(o),url:e}}}function at(e){return ut(e.slice(U.length)||"/")}function rt({url:e,type:n,intent:t,delta:a}){let r=!1;const o=ct(_,t,e,n);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return H||ze.forEach(s=>s(i)),r?null:o}async function W({type:e,url:n,popped:t,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=xe,block:d=xe}){const h=Ee(n,!1),y=rt({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=S,g=T;f(),H=!0,Q&&x.navigating.set(y.navigation),ee=c;let l=h&&await nt(h);if(!l){if(ne(n,U))return await $(n);l=await ot(n,{id:null},await D(new ye(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,ee!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await oe({status:500,error:await D(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return et(new URL(l.location,n).href,{},s+1,c),!1;else l.props.page.status>=400&&await x.updated.check()&&(await Ye(),await $(n));if(Jt(),_e(u),Ze(g),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),i=t?t.state:i,!t){const w=o?0:1,m={[j]:S+=w,[q]:T+=w,[Ge]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||Wt(S,T)}if(R=null,l.props.page.state=i,Q){_=l.state,l.props.page&&(l.props.page.url=n);const w=(await Promise.all(Yt.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(w.length>0){let m=function(){O=O.filter(v=>!w.includes(v))};w.push(m),O.push(...w)}be.$set(l.props),Xe=!0}else tt(l,he,!1);const{activeElement:p}=document;await lt();const b=t?t.scroll:r?me():null;if(Pe){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const k=document.activeElement!==p&&document.activeElement!==document.body;!a&&!k&&an(),Pe=!0,l.props.page&&(I=l.props.page),H=!1,e==="popstate"&&Qe(T),y.fulfil(void 0),O.forEach(w=>w(y.navigation)),x.navigating.set(null)}async function ot(e,n,t,a){return e.origin===K&&e.pathname===location.pathname&&!we?await oe({status:a,error:t,url:e,route:n}):await $(e)}function Qt(){let e;L.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{a(i,2)},20)});function n(o){o.defaultPrevented||a(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(fe(i.target.href),t.unobserve(i.target))},{threshold:0});function a(o,i){const s=He(o,L);if(!s)return;const{url:c,external:f,download:d}=ue(s,U);if(f||d)return;const h=J(s),y=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!y)if(i<=h.preload_data){const u=Ee(c,!1);u&&zt(u)}else i<=h.preload_code&&fe(c.pathname)}function r(){t.disconnect();for(const o of L.querySelectorAll("a")){const{url:i,external:s,download:c}=ue(o,U);if(s||c)continue;const f=J(o);f.reload||(f.preload_code===Y.viewport&&t.observe(o),f.preload_code===Y.eager&&fe(i.pathname))}}O.push(r),r()}function D(e,n){if(e instanceof ae)return e.body;const t=z(e),a=Ht(e);return F.hooks.handleError({error:e,event:n,status:t,message:a})??{message:a}}function en(e,n={}){return e=qe(e),e.origin!==K?Promise.reject(new Error("goto: invalid URL")):et(e,n,0)}function tn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(Ce(),!H){const r=ct(_,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};ze.forEach(i=>i(o))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ce()}),(n=navigator.connection)!=null&&n.saveData||Qt(),L.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=He(t.composedPath()[0],L);if(!a)return;const{url:r,external:o,target:i,download:s}=ue(a,U);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=J(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||s)return;const[d,h]=r.href.split("#"),y=d===ce(location);if(o||c.reload&&(!y||!h)){rt({url:r,type:"link"})?H=!0:t.preventDefault();return}if(h!==void 0&&y){const[,u]=_.url.href.split("#");if(u===h){if(t.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=a.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(V=!0,_e(S),e(r),!c.replace_state)return;V=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),W({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),L.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const s=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(ne(s,U))return;const c=t.target,f=J(c);if(f.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=r==null?void 0:r.getAttribute("name");h&&d.append(h,(r==null?void 0:r.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),W({type:"form",url:s,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var a;if((a=t.state)!=null&&a[j]){const r=t.state[j];if(ee={},r===S)return;const o=C[r],i=t.state[Ge]??{},s=new URL(t.state[Lt]??location.href),c=t.state[q],f=ce(location)===ce(_.url);if(c===T&&(Xe||f)){e(s),C[S]=me(),o&&scrollTo(o.x,o.y),i!==I.state&&(I={...I,state:i},be.$set({page:I})),S=r;return}const h=r-S;await W({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{S=r,T=c},block:()=>{history.go(-h)},nav_token:ee})}else if(!V){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[j]:++S,[q]:T},"",location.href))});for(const t of document.querySelectorAll("link"))Kt.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&x.navigating.set(null)});function e(t){_.url=t,x.page.set({...I,url:t}),x.page.notify()}}async function nn(e,{status:n=200,error:t,node_ids:a,params:r,route:o,data:i,form:s}){we=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=Ee(c,!1)||{});let f,d=!0;try{const h=a.map(async(g,l)=>{const p=i[l];return p!=null&&p.uses&&(p.uses=it(p.uses)),Ae({loader:F.nodes[g],url:c,params:r,route:o,parent:async()=>{const b={};for(let k=0;k<l;k+=1)Object.assign(b,(await h[k]).data);return b},server_data_node:ke(p)})}),y=await Promise.all(h),u=re.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let l=0;l<g.length;l++)g[l]||y.splice(l,0,void 0)}f=te({url:c,params:r,branch:y,status:n,error:t,form:s,route:u??null})}catch(h){if(h instanceof We){await $(new URL(h.location,location.href));return}f=await oe({status:z(h),error:await D(h,{url:c,params:r,route:o}),url:c,route:o}),e.textContent="",d=!1}f.props.page&&(f.props.page.state={}),tt(f,e,d)}async function st(e,n){var r;const t=new URL(e);t.pathname=yt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Mt,"1"),t.searchParams.append(qt,n.map(o=>o?"1":"0").join(""));const a=await $e(t.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new ae(a.status,o)}return new Promise(async o=>{var h;const i=new Map,s=a.body.getReader(),c=new TextDecoder;function f(y){return Vt(y,{Promise:u=>new Promise((g,l)=>{i.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=it(p.uses),p.data=f(p.data))}),o(l);else if(l.type==="chunk"){const{id:p,data:b,error:k}=l,w=i.get(p);i.delete(p),k?w.reject(f(k)):w.fulfil(f(b))}}}})}function it(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function an(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function ct(e,n,t,a){var c,f;let r,o;const i=new Promise((d,h)=>{r=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:a,complete:i},fulfil:r,reject:o}}export{sn as a,en as g,x as s};
