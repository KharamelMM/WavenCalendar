import{b as y,h as n,d as g,E as p,H as A,e as R,g as k,i as _,j as o,k as u,l as h,m as N}from"./utils.DrrMdXOB.js";function x(d,b,m=!1){n&&g();var e=d,a=null,s=null,l=null,v=m?p:0,f=!1;const E=(r,t=!0)=>{f=!0,i(t,r)},i=(r,t)=>{if(l===(l=r))return;let c=!1;if(n){const T=e.data===A;l===T&&(e=R(),k(e),_(!1),c=!0)}l?(a?o(a):t&&(a=u(()=>t(e))),s&&h(s,()=>{s=null})):(s?o(s):t&&(s=u(()=>t(e))),a&&h(a,()=>{a=null})),c&&_(!0)};y(()=>{f=!1,b(E),f||i(null,null)},v),n&&(e=N)}export{x as i};