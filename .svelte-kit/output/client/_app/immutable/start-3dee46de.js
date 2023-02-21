import{S as rt,i as at,s as it,a as ot,e as V,c as st,b as J,g as Y,t as N,d as Q,f as j,h as q,j as lt,o as Pe,k as ct,l as ft,m as ut,n as Ee,p as H,q as dt,r as pt,u as mt,v as K,w as z,x as ie,y as W,z as G,A as de}from"./chunks/index-0316f0bc.js";import{S as tt,I as M,g as Ge,f as He,a as ke,b as pe,s as X,i as Me,c as me,P as xe,d as _t,e as ht,h as gt}from"./chunks/singletons-275da48e.js";import{u as wt}from"./chunks/parse-d12b0d5b.js";function yt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function vt(r){return r.split("%25").map(decodeURI).join("%25")}function bt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(r,e){const n=new URL(r);for(const i of Et){let s=n[i];Object.defineProperty(n,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return Rt(n),n}function Rt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const $t="/__data.json";function Lt(r){return r.replace(/\/$/,"")+$t}function St(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&re.delete(Te(r)),_e(r,e));const re=new Map;function Pt(r,e){const n=Te(r,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:s,...u}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&re.set(n,{body:s,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,u))}return _e(r,e)}function Ot(r,e,n){if(re.size>0){const i=Te(r,n),s=re.get(i);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(s.body,s.init);re.delete(i)}}return _e(e,n)}function Te(r,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${St(e.body)}"]`),i}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function It(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Dt(r).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((d,p)=>{if(p%2){if(d.startsWith("x+"))return Re(String.fromCharCode(parseInt(d.slice(2),16)));if(d.startsWith("u+"))return Re(String.fromCharCode(...d.slice(2).split("-").map(I=>parseInt(I,16))));const g=At.exec(d);if(!g)throw new Error(`Invalid param: ${d}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,R,T,E,B]=g;return e.push({name:E,matcher:B,optional:!!R,rest:!!T,chained:T?p===1&&t[0]==="":!1}),T?"(.*?)":R?"([^/]*)?":"([^/]+?)"}return Re(d)}).join("")}).join("")}/?$`),params:e}}function Tt(r){return!/^\([^)]+\)$/.test(r)}function Dt(r){return r.slice(1).split("/").filter(Tt)}function Ut(r,e,n){const i={},s=r.slice(1);let u="";for(let t=0;t<e.length;t+=1){const f=e[t];let d=s[t];if(f.chained&&f.rest&&u&&(d=d?u+"/"+d:u),u="",d===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](d)){if(f.optional&&f.chained){let p=s.indexOf(void 0,t);if(p===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)u=d;else return}for(;p>=t;)s[p]=s[p-1],p-=1;continue}return}i[f.name]=d}}if(!u)return i}function Re(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Vt(r,e,n,i){const s=new Set(e);return Object.entries(n).map(([f,[d,p,g]])=>{const{pattern:R,params:T}=It(f),E={id:f,exec:B=>{const I=R.exec(B);if(I)return Ut(I,T,i)},errors:[1,...g||[]].map(B=>r[B]),layouts:[0,...p||[]].map(t),leaf:u(d)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function u(f){const d=f<0;return d&&(f=~f),[d,r[f]]}function t(f){return f===void 0?f:[s.has(f),r[f]]}}function Nt(r){let e,n,i;var s=r[0][0];function u(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=K(s,u(r))),{c(){e&&z(e.$$.fragment),n=V()},l(t){e&&ie(e.$$.fragment,t),n=V()},m(t,f){e&&W(e,t,f),J(t,n,f),i=!0},p(t,f){const d={};if(f&4&&(d.data=t[2]),f&2&&(d.form=t[1]),s!==(s=t[0][0])){if(e){Y();const p=e;N(p.$$.fragment,1,0,()=>{G(p,1)}),Q()}s?(e=K(s,u(t)),z(e.$$.fragment),j(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}else s&&e.$set(d)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&N(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&G(e,t)}}}function jt(r){let e,n,i;var s=r[0][0];function u(t){return{props:{data:t[2],$$slots:{default:[Ft]},$$scope:{ctx:t}}}}return s&&(e=K(s,u(r))),{c(){e&&z(e.$$.fragment),n=V()},l(t){e&&ie(e.$$.fragment,t),n=V()},m(t,f){e&&W(e,t,f),J(t,n,f),i=!0},p(t,f){const d={};if(f&4&&(d.data=t[2]),f&1051&&(d.$$scope={dirty:f,ctx:t}),s!==(s=t[0][0])){if(e){Y();const p=e;N(p.$$.fragment,1,0,()=>{G(p,1)}),Q()}s?(e=K(s,u(t)),z(e.$$.fragment),j(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}else s&&e.$set(d)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&N(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&G(e,t)}}}function Ct(r){let e,n,i;var s=r[0][1];function u(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=K(s,u(r))),{c(){e&&z(e.$$.fragment),n=V()},l(t){e&&ie(e.$$.fragment,t),n=V()},m(t,f){e&&W(e,t,f),J(t,n,f),i=!0},p(t,f){const d={};if(f&8&&(d.data=t[3]),f&2&&(d.form=t[1]),s!==(s=t[0][1])){if(e){Y();const p=e;N(p.$$.fragment,1,0,()=>{G(p,1)}),Q()}s?(e=K(s,u(t)),z(e.$$.fragment),j(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}else s&&e.$set(d)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&N(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&G(e,t)}}}function qt(r){let e,n,i;var s=r[0][1];function u(t){return{props:{data:t[3],$$slots:{default:[Bt]},$$scope:{ctx:t}}}}return s&&(e=K(s,u(r))),{c(){e&&z(e.$$.fragment),n=V()},l(t){e&&ie(e.$$.fragment,t),n=V()},m(t,f){e&&W(e,t,f),J(t,n,f),i=!0},p(t,f){const d={};if(f&8&&(d.data=t[3]),f&1043&&(d.$$scope={dirty:f,ctx:t}),s!==(s=t[0][1])){if(e){Y();const p=e;N(p.$$.fragment,1,0,()=>{G(p,1)}),Q()}s?(e=K(s,u(t)),z(e.$$.fragment),j(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}else s&&e.$set(d)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&N(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&G(e,t)}}}function Bt(r){let e,n,i;var s=r[0][2];function u(t){return{props:{data:t[4],form:t[1]}}}return s&&(e=K(s,u(r))),{c(){e&&z(e.$$.fragment),n=V()},l(t){e&&ie(e.$$.fragment,t),n=V()},m(t,f){e&&W(e,t,f),J(t,n,f),i=!0},p(t,f){const d={};if(f&16&&(d.data=t[4]),f&2&&(d.form=t[1]),s!==(s=t[0][2])){if(e){Y();const p=e;N(p.$$.fragment,1,0,()=>{G(p,1)}),Q()}s?(e=K(s,u(t)),z(e.$$.fragment),j(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}else s&&e.$set(d)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&N(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&G(e,t)}}}function Ft(r){let e,n,i,s;const u=[qt,Ct],t=[];function f(d,p){return d[0][2]?0:1}return e=f(r),n=t[e]=u[e](r),{c(){n.c(),i=V()},l(d){n.l(d),i=V()},m(d,p){t[e].m(d,p),J(d,i,p),s=!0},p(d,p){let g=e;e=f(d),e===g?t[e].p(d,p):(Y(),N(t[g],1,1,()=>{t[g]=null}),Q(),n=t[e],n?n.p(d,p):(n=t[e]=u[e](d),n.c()),j(n,1),n.m(i.parentNode,i))},i(d){s||(j(n),s=!0)},o(d){N(n),s=!1},d(d){t[e].d(d),d&&q(i)}}}function Xe(r){let e,n=r[6]&&Ye(r);return{c(){e=ct("div"),n&&n.c(),this.h()},l(i){e=ft(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ut(e);n&&n.l(s),s.forEach(q),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(i,s){J(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=Ye(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&q(e),n&&n.d()}}}function Ye(r){let e;return{c(){e=dt(r[7])},l(n){e=pt(n,r[7])},m(n,i){J(n,e,i)},p(n,i){i&128&&mt(e,n[7])},d(n){n&&q(e)}}}function Jt(r){let e,n,i,s,u;const t=[jt,Nt],f=[];function d(g,R){return g[0][1]?0:1}e=d(r),n=f[e]=t[e](r);let p=r[5]&&Xe(r);return{c(){n.c(),i=ot(),p&&p.c(),s=V()},l(g){n.l(g),i=st(g),p&&p.l(g),s=V()},m(g,R){f[e].m(g,R),J(g,i,R),p&&p.m(g,R),J(g,s,R),u=!0},p(g,[R]){let T=e;e=d(g),e===T?f[e].p(g,R):(Y(),N(f[T],1,1,()=>{f[T]=null}),Q(),n=f[e],n?n.p(g,R):(n=f[e]=t[e](g),n.c()),j(n,1),n.m(i.parentNode,i)),g[5]?p?p.p(g,R):(p=Xe(g),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i(g){u||(j(n),u=!0)},o(g){N(n),u=!1},d(g){f[e].d(g),g&&q(i),p&&p.d(g),g&&q(s)}}}function Kt(r,e,n){let{stores:i}=e,{page:s}=e,{components:u}=e,{form:t}=e,{data_0:f=null}=e,{data_1:d=null}=e,{data_2:p=null}=e;lt(i.page.notify);let g=!1,R=!1,T=null;return Pe(()=>{const E=i.page.subscribe(()=>{g&&(n(6,R=!0),n(7,T=document.title||"untitled page"))});return n(5,g=!0),E}),r.$$set=E=>{"stores"in E&&n(8,i=E.stores),"page"in E&&n(9,s=E.page),"components"in E&&n(0,u=E.components),"form"in E&&n(1,t=E.form),"data_0"in E&&n(2,f=E.data_0),"data_1"in E&&n(3,d=E.data_1),"data_2"in E&&n(4,p=E.data_2)},r.$$.update=()=>{r.$$.dirty&768&&i.page.set(s)},[u,t,f,d,p,g,R,T,i,s]}class zt extends rt{constructor(e){super(),at(this,e,Kt,Jt,it,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Wt="modulepreload",Gt=function(r,e){return new URL(r,e).href},Qe={},O=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=Gt(u,i),u in Qe)return;Qe[u]=!0;const t=u.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!i)for(let g=s.length-1;g>=0;g--){const R=s[g];if(R.href===u&&(!t||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Wt,t||(p.as="script",p.crossOrigin=""),p.href=u,document.head.appendChild(p),t)return new Promise((g,R)=>{p.addEventListener("load",g),p.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},Ht={},he=[()=>O(()=>import("./chunks/0-026606db.js"),["./chunks\\0-026606db.js","./components\\pages\\_layout.svelte-1a38e83d.js","./chunks\\index-0316f0bc.js","./assets\\_layout-be6f716c.css"],import.meta.url),()=>O(()=>import("./chunks/1-cb757c04.js"),["./chunks\\1-cb757c04.js","./components\\error.svelte-8239e1c7.js","./chunks\\index-0316f0bc.js","./chunks\\singletons-275da48e.js"],import.meta.url),()=>O(()=>import("./chunks/2-edbf2b25.js"),["./chunks\\2-edbf2b25.js","./components\\pages\\anim\\_layout.svelte-a4d30eed.js","./chunks\\index-0316f0bc.js"],import.meta.url),()=>O(()=>import("./chunks/3-7998d5a8.js"),["./chunks\\3-7998d5a8.js","./chunks\\_page-da46b06b.js","./components\\pages\\_page.svelte-302862a0.js","./chunks\\index-0316f0bc.js"],import.meta.url),()=>O(()=>import("./chunks/4-1b535688.js"),["./chunks\\4-1b535688.js","./chunks\\_page-9c76c2d7.js","./chunks\\environment-9aa685ef.js","./components\\pages\\about\\_page.svelte-a078720b.js","./chunks\\index-0316f0bc.js"],import.meta.url),()=>O(()=>import("./chunks/5-207f980f.js"),["./chunks\\5-207f980f.js","./components\\pages\\anim\\_page.svelte-a05a5fce.js","./chunks\\index-0316f0bc.js","./assets\\_page-9cf7d6c7.css"],import.meta.url),()=>O(()=>import("./chunks/6-df01dadb.js"),["./chunks\\6-df01dadb.js","./components\\pages\\anim\\inner\\_page.svelte-c0544fe1.js","./chunks\\index-0316f0bc.js"],import.meta.url),()=>O(()=>import("./chunks/7-6571a1c7.js"),["./chunks\\7-6571a1c7.js","./components\\pages\\articles\\_page.svelte-368a282c.js","./chunks\\index-0316f0bc.js","./chunks\\forms-d6216b05.js","./chunks\\parse-d12b0d5b.js","./chunks\\singletons-275da48e.js"],import.meta.url),()=>O(()=>import("./chunks/8-2536d5f1.js"),["./chunks\\8-2536d5f1.js","./components\\pages\\articles\\create\\_page.svelte-6f74dfbd.js","./chunks\\index-0316f0bc.js","./chunks\\forms-d6216b05.js","./chunks\\parse-d12b0d5b.js","./chunks\\singletons-275da48e.js"],import.meta.url),()=>O(()=>import("./chunks/9-66e43ce9.js"),["./chunks\\9-66e43ce9.js","./components\\pages\\articles\\edit\\_articleId_\\_page.svelte-bcdc54cc.js","./chunks\\index-0316f0bc.js","./chunks\\forms-d6216b05.js","./chunks\\parse-d12b0d5b.js","./chunks\\singletons-275da48e.js"],import.meta.url),()=>O(()=>import("./chunks/10-8098997c.js"),["./chunks\\10-8098997c.js","./components\\pages\\articles\\_articleId_\\_page.svelte-221a44ed.js","./chunks\\index-0316f0bc.js"],import.meta.url),()=>O(()=>import("./chunks/11-a16a28b2.js"),["./chunks\\11-a16a28b2.js","./chunks\\_page-6b32ce51.js","./components\\pages\\chess\\_page.svelte-a62d78aa.js","./chunks\\index-0316f0bc.js"],import.meta.url),()=>O(()=>import("./chunks/12-db792e3b.js"),["./chunks\\12-db792e3b.js","./chunks\\_page-85426a77.js","./components\\pages\\chess\\_gameId_\\_page.svelte-95fe4e4c.js","./chunks\\index-0316f0bc.js"],import.meta.url),()=>O(()=>import("./chunks/13-26566941.js"),["./chunks\\13-26566941.js","./components\\pages\\contact\\_page.svelte-d1ae3cd8.js","./chunks\\index-0316f0bc.js"],import.meta.url),()=>O(()=>import("./chunks/14-c7018c94.js"),["./chunks\\14-c7018c94.js","./components\\pages\\formtest\\_page.svelte-7f63d0aa.js","./chunks\\index-0316f0bc.js","./chunks\\forms-d6216b05.js","./chunks\\parse-d12b0d5b.js","./chunks\\singletons-275da48e.js"],import.meta.url),()=>O(()=>import("./chunks/15-7f0e060a.js"),["./chunks\\15-7f0e060a.js","./chunks\\_page-d50f1c08.js","./components\\pages\\manage\\_page.svelte-1cbfff75.js","./chunks\\index-0316f0bc.js"],import.meta.url),()=>O(()=>import("./chunks/16-c3e82db3.js"),["./chunks\\16-c3e82db3.js","./components\\pages\\sqlite\\_page.svelte-a7c03e07.js","./chunks\\index-0316f0bc.js"],import.meta.url),()=>O(()=>import("./chunks/17-c15b241c.js"),["./chunks\\17-c15b241c.js","./components\\pages\\sverdle\\_page.svelte-99a5533e.js","./chunks\\index-0316f0bc.js","./chunks\\forms-d6216b05.js","./chunks\\parse-d12b0d5b.js","./chunks\\singletons-275da48e.js","./assets\\_page-9d501049.css"],import.meta.url),()=>O(()=>import("./chunks/18-60ce36f8.js"),["./chunks\\18-60ce36f8.js","./chunks\\_page-6a6e5f22.js","./chunks\\environment-9aa685ef.js","./components\\pages\\sverdle\\how-to-play\\_page.svelte-06b54d20.js","./chunks\\index-0316f0bc.js","./assets\\_page-89a9e780.css"],import.meta.url)],Mt=[],xt={"/":[3],"/about":[4],"/anim":[5,[2]],"/anim/inner":[6,[2]],"/articles":[-8],"/articles/create":[-9],"/articles/edit/[articleId]":[-10],"/articles/[articleId]":[-11],"/chess":[11],"/chess/[gameId]":[12],"/contact":[13],"/formtest":[-15],"/manage":[15],"/sqlite":[-17],"/sverdle":[-18],"/sverdle/how-to-play":[18]},Xt={handleError:({error:r})=>{console.error(r)}};class Oe{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ze{constructor(e,n){this.status=e,this.location=n}}async function Yt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,s])=>[i,await s])));return r}const $e=Vt(he,Mt,xt,Ht),Ae=he[0],Ie=he[1];Ae();Ie();let ae={};try{ae=JSON.parse(sessionStorage[tt])}catch{}function Le(r){ae[r]=me()}function Qt({target:r,base:e}){var Ke;const n=document.documentElement,i=[];let s=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,d=!1,p=!0,g=!1,R=!1,T=!1,E=!1,B,I=(Ke=history.state)==null?void 0:Ke[M];I||(I=Date.now(),history.replaceState({...history.state,[M]:I},"",location.href));const ge=ae[I];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let x,De,oe;async function Ue(){oe=oe||Promise.resolve(),await oe,oe=null;const a=new URL(location.href),o=ce(a,!0);s=null,await Ne(o,a,[])}async function we(a,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:m={},invalidateAll:_=!1},h,v){return typeof a=="string"&&(a=new URL(a,Ge(document))),fe({url:a,scroll:o?me():null,keepfocus:l,redirect_chain:h,details:{state:m,replaceState:c},nav_token:v,accepted:()=>{_&&(E=!0)},blocked:()=>{},type:"goto"})}async function Ve(a){const o=ce(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return s={id:o.id,promise:qe(o).then(c=>(c.type==="loaded"&&c.state.error&&(s=null),c))},s.promise}async function se(...a){const c=$e.filter(l=>a.some(m=>l.exec(m))).map(l=>Promise.all([...l.layouts,l.leaf].map(m=>m==null?void 0:m[1]())));await Promise.all(c)}async function Ne(a,o,c,l,m={},_){var v,y;De=m;let h=a&&await qe(a);if(h||(h=await Je(o,{id:null},await ne(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,De!==m)return!1;if(h.type==="redirect")if(c.length>10||c.includes(o.pathname))h=await le({status:500,error:await ne(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return we(new URL(h.location,o).href,{},[...c,o.pathname],m),!1;else((y=(v=h.props)==null?void 0:v.page)==null?void 0:y.status)>=400&&await X.updated.check()&&await ue(o);if(i.length=0,E=!1,g=!0,l&&l.details){const{details:w}=l,$=w.replaceState?0:1;w.state[M]=I+=$,history[w.replaceState?"replaceState":"pushState"](w.state,"",o)}if(s=null,d?(t=h.state,h.props.page&&(h.props.page.url=o),B.$set(h.props)):je(h),l){const{scroll:w,keepfocus:$}=l;if($||Se(),await de(),p){const L=o.hash&&document.getElementById(o.hash.slice(1));w?scrollTo(w.x,w.y):L?L.scrollIntoView():scrollTo(0,0)}}else await de();p=!0,h.props.page&&(x=h.props.page),_&&_(),g=!1}function je(a){var l;t=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),x=a.props.page,B=new zt({target:r,props:{...a.props,stores:X},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(m=>m(c)),d=!0}async function ee({url:a,params:o,branch:c,status:l,error:m,route:_,form:h}){const v=c.filter(Boolean);let y="never";for(const S of c)(S==null?void 0:S.slash)!==void 0&&(y=S.slash);a.pathname=yt(a.pathname,y),a.search=a.search;const w={type:"loaded",state:{url:a,params:o,branch:c,error:m,route:_},props:{components:v.map(S=>S.node.component)}};h!==void 0&&(w.props.form=h);let $={},L=!x;for(let S=0;S<v.length;S+=1){const b=v[S];$={...$,...b.data},(L||!t.branch.some(U=>U===b))&&(w.props[`data_${S}`]=$,L=L||Object.keys(b.data??{}).length>0)}return L||(L=Object.keys(x.data).length!==Object.keys($).length),(!t.url||a.href!==t.url.href||t.error!==m||h!==void 0||L)&&(w.props.page={error:m,params:o,route:_,status:l,url:new URL(a),form:h??null,data:L?$:x.data}),w}async function ye({loader:a,parent:o,url:c,params:l,route:m,server_data_node:_}){var w,$,L;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await a();if((w=y.universal)!=null&&w.load){let F=function(...b){for(const U of b){const{href:C}=new URL(U,c);v.dependencies.add(C)}};const S={route:{get id(){return v.route=!0,m.id}},params:new Proxy(l,{get:(b,U)=>(v.params.add(U),b[U])}),data:(_==null?void 0:_.data)??null,url:kt(c,()=>{v.url=!0}),async fetch(b,U){let C;b instanceof Request?(C=b.url,U={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...U}):C=b;const k=new URL(C,c).href;return F(k),d?Ot(C,k,U):Pt(C,U)},setHeaders:()=>{},depends:F,parent(){return v.parent=!0,o()}};h=await y.universal.load.call(null,S)??null,h=h?await Yt(h):null}return{node:y,loader:a,server:_,universal:($=y.universal)!=null&&$.load?{type:"data",data:h,uses:v}:null,data:h??(_==null?void 0:_.data)??null,slash:((L=y.universal)==null?void 0:L.trailingSlash)??(_==null?void 0:_.slash)}}function Ce(a,o,c,l,m){if(E)return!0;if(!l)return!1;if(l.parent&&a||l.route&&o||l.url&&c)return!0;for(const _ of l.params)if(m[_]!==t.params[_])return!0;for(const _ of l.dependencies)if(i.some(h=>h(new URL(_))))return!0;return!1}function ve(a,o){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?o??null:null}async function qe({id:a,invalidating:o,url:c,params:l,route:m}){if((s==null?void 0:s.id)===a)return s.promise;const{errors:_,layouts:h,leaf:v}=m,y=[...h,v];_.forEach(k=>k==null?void 0:k().catch(()=>{})),y.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const $=t.url?a!==t.url.pathname+t.url.search:!1,L=t.route?a!==t.route.id:!1,F=y.reduce((k,A,D)=>{var te;const P=t.branch[D],Z=!!(A!=null&&A[0])&&((P==null?void 0:P.loader)!==A[1]||Ce(k.some(Boolean),L,$,(te=P.server)==null?void 0:te.uses,l));return k.push(Z),k},[]);if(F.some(Boolean)){try{w=await et(c,F)}catch(k){return le({status:500,error:await ne(k,{url:c,params:l,route:{id:m.id}}),url:c,route:m})}if(w.type==="redirect")return w}const S=w==null?void 0:w.nodes;let b=!1;const U=y.map(async(k,A)=>{var te;if(!k)return;const D=t.branch[A],P=S==null?void 0:S[A];if((!P||P.type==="skip")&&k[1]===(D==null?void 0:D.loader)&&!Ce(b,L,$,(te=D.universal)==null?void 0:te.uses,l))return D;if(b=!0,(P==null?void 0:P.type)==="error")throw P;return ye({loader:k[1],url:c,params:l,route:m,parent:async()=>{var We;const ze={};for(let be=0;be<A;be+=1)Object.assign(ze,(We=await U[be])==null?void 0:We.data);return ze},server_data_node:ve(P===void 0&&k[0]?{type:"skip"}:P??null,D==null?void 0:D.server)})});for(const k of U)k.catch(()=>{});const C=[];for(let k=0;k<y.length;k+=1)if(y[k])try{C.push(await U[k])}catch(A){if(A instanceof Ze)return{type:"redirect",location:A.location};let D=500,P;S!=null&&S.includes(A)?(D=A.status??D,P=A.error):A instanceof Oe?(D=A.status,P=A.body):P=await ne(A,{params:l,url:c,route:{id:m.id}});const Z=await Be(k,C,_);return Z?await ee({url:c,params:l,branch:C.slice(0,Z.idx).concat(Z.node),status:D,error:P,route:m}):await Je(c,{id:m.id},P,D)}else C.push(void 0);return await ee({url:c,params:l,branch:C,status:200,error:null,route:m,form:o?void 0:null})}async function Be(a,o,c){for(;a--;)if(c[a]){let l=a;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[a](),loader:c[a],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:a,error:o,url:c,route:l}){const m={},_=await Ae();let h=null;if(_.server)try{const w=await et(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;h=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ue(c)}const v=await ye({loader:Ae,url:c,params:m,route:l,parent:()=>Promise.resolve({}),server_data_node:ve(h)}),y={node:await Ie(),loader:Ie,universal:null,server:null,data:null};return await ee({url:c,params:m,branch:[v,y],status:a,error:o,route:null})}function ce(a,o){if(Me(a,e))return;const c=vt(a.pathname.slice(e.length)||"/");for(const l of $e){const m=l.exec(c);if(m)return{id:a.pathname+a.search,invalidating:o,route:l,params:bt(m),url:a}}}function Fe({url:a,type:o,intent:c,delta:l}){var v,y;let m=!1;const _={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:a},willUnload:!c,type:o};l!==void 0&&(_.delta=l);const h={..._,cancel:()=>{m=!0}};return R||u.before_navigate.forEach(w=>w(h)),m?null:_}async function fe({url:a,scroll:o,keepfocus:c,redirect_chain:l,details:m,type:_,delta:h,nav_token:v,accepted:y,blocked:w}){const $=ce(a,!1),L=Fe({url:a,type:_,delta:h,intent:$});if(!L){w();return}Le(I),y(),R=!0,d&&X.navigating.set(L),await Ne($,a,l,{scroll:o,keepfocus:c,details:m},v,()=>{R=!1,u.after_navigate.forEach(F=>F(L)),X.navigating.set(null)})}async function Je(a,o,c,l){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await le({status:l,error:c,url:a,route:o}):await ue(a)}function ue(a){return location.href=a.href,new Promise(()=>{})}function nt(){let a;n.addEventListener("mousemove",_=>{const h=_.target;clearTimeout(a),a=setTimeout(()=>{l(h,2)},20)});function o(_){l(_.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(_=>{for(const h of _)h.isIntersecting&&(se(new URL(h.target.href).pathname),c.unobserve(h.target))},{threshold:0});function l(_,h){const v=He(_,n);if(!v)return;const{url:y,external:w}=ke(v,e);if(w)return;const $=pe(v);$.reload||(h<=$.preload_data?Ve(y):h<=$.preload_code&&se(y.pathname))}function m(){c.disconnect();for(const _ of n.querySelectorAll("a")){const{url:h,external:v}=ke(_,e);if(v)continue;const y=pe(_);y.reload||(y.preload_code===xe.viewport&&c.observe(_),y.preload_code===xe.eager&&se(h.pathname))}}u.after_navigate.push(m),m()}return{after_navigate:a=>{Pe(()=>(u.after_navigate.push(a),()=>{const o=u.after_navigate.indexOf(a);u.after_navigate.splice(o,1)}))},before_navigate:a=>{Pe(()=>(u.before_navigate.push(a),()=>{const o=u.before_navigate.indexOf(a);u.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(g||!d)&&(p=!1)},goto:(a,o={})=>we(a,o,[]),invalidate:a=>{if(typeof a=="function")i.push(a);else{const{href:o}=new URL(a,location.href);i.push(c=>c.href===o)}return Ue()},invalidateAll:()=>(E=!0,Ue()),preload_data:async a=>{const o=new URL(a,Ge(document));await Ve(o)},preload_code:se,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const m=await Be(t.branch.length,c,l.errors);if(m){const _=await ee({url:o,params:t.params,branch:c.slice(0,m.idx).concat(m.node),status:a.status??500,error:a.error,route:l});t=_.state,B.$set(_.props),de().then(Se)}}else if(a.type==="redirect")we(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...x,form:a.data,status:a.status}};B.$set(o),a.type==="success"&&de().then(Se)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!R){const m={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(_=>_(m))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(I);try{sessionStorage[tt]=JSON.stringify(ae)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||nt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=He(o.composedPath()[0],n);if(!c)return;const{url:l,external:m,has:_}=ke(c,e),h=pe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||_.download)return;if(m||h.reload){Fe({url:l,type:"link"})||o.preventDefault(),R=!0;return}const[y,w]=l.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){T=!0,Le(I),t.url=l,X.page.set({...x,url:l}),X.page.notify();return}fe({url:l,scroll:h.noscroll?me():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var y;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const _=new URL(((y=o.submitter)==null?void 0:y.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(Me(_,e))return;const{noscroll:h,reload:v}=pe(o.target);v||(o.preventDefault(),o.stopPropagation(),_.search=new URLSearchParams(new FormData(o.target)).toString(),fe({url:_,scroll:h?me():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[M]){if(o.state[M]===I)return;const l=o.state[M]-I;fe({url:new URL(location.href),scroll:ae[o.state[M]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=o.state[M]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{T&&(T=!1,history.replaceState({...history.state,[M]:++I},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&X.navigating.set(null)})},_hydrate:async({status:a=200,error:o,node_ids:c,params:l,route:m,data:_,form:h})=>{f=!0;const v=new URL(location.href);({params:l={},route:m={id:null}}=ce(v,!1)||{});let y;try{const w=c.map(async($,L)=>{const F=_[L];return ye({loader:he[$],url:v,params:l,route:m,parent:async()=>{const S={};for(let b=0;b<L;b+=1)Object.assign(S,(await w[b]).data);return S},server_data_node:ve(F)})});y=await ee({url:v,params:l,branch:await Promise.all(w),status:a,error:o,form:h,route:$e.find(({id:$})=>$===m.id)??null})}catch(w){if(w instanceof Ze){await ue(new URL(w.location,location.href));return}y=await le({status:w instanceof Oe?w.status:500,error:await ne(w,{url:v,params:l,route:m}),url:v,route:m})}je(y)}}}async function et(r,e){var u;const n=new URL(r);n.pathname=Lt(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await _e(n.href),s=await i.json();if(!i.ok)throw new Error(s);return(u=s.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=wt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function ne(r,e){return r instanceof Oe?r.body:Xt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Se(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function nn({env:r,hydrate:e,paths:n,target:i,version:s}){_t(n),gt(s);const u=Qt({target:i,base:n.base});ht({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{nn as start};
