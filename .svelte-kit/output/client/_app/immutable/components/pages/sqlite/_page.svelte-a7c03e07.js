import{S as P,i as B,s as H,k as v,q as b,a as S,l as q,m as x,r as g,h as u,c as T,n as E,b as d,C as p,B as k,J as I,u as w}from"../../../chunks/index-0316f0bc.js";function C(r,t,o){const n=r.slice();return n[2]=t[o],n}function L(r){let t,o=r[2].id+"",n,c,f=r[2].name+"",_;return{c(){t=v("li"),n=b(o),c=b(" ==== "),_=b(f),this.h()},l(a){t=q(a,"LI",{class:!0});var s=x(t);n=g(s,o),c=g(s," ==== "),_=g(s,f),s.forEach(u),this.h()},h(){E(t,"class","text-yellow-200")},m(a,s){d(a,t,s),p(t,n),p(t,c),p(t,_)},p(a,s){s&1&&o!==(o=a[2].id+"")&&w(n,o),s&1&&f!==(f=a[2].name+"")&&w(_,f)},d(a){a&&u(t)}}}function J(r){let t,o,n,c,f,_,a,s=r[0].cities,i=[];for(let e=0;e<s.length;e+=1)i[e]=L(C(r,s,e));return{c(){t=v("h1"),o=b("Testing Sqlite"),n=S(),c=v("p"),f=b("This data is being obtained in the self contained sqlite database"),_=S(),a=v("ul");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){t=q(e,"H1",{class:!0});var h=x(t);o=g(h,"Testing Sqlite"),h.forEach(u),n=T(e),c=q(e,"P",{class:!0});var l=x(c);f=g(l,"This data is being obtained in the self contained sqlite database"),l.forEach(u),_=T(e),a=q(e,"UL",{});var m=x(a);for(let y=0;y<i.length;y+=1)i[y].l(m);m.forEach(u),this.h()},h(){E(t,"class","text-yellow-200"),E(c,"class","text-yellow-200")},m(e,h){d(e,t,h),p(t,o),d(e,n,h),d(e,c,h),p(c,f),d(e,_,h),d(e,a,h);for(let l=0;l<i.length;l+=1)i[l].m(a,null)},p(e,[h]){if(h&1){s=e[0].cities;let l;for(l=0;l<s.length;l+=1){const m=C(e,s,l);i[l]?i[l].p(m,h):(i[l]=L(m),i[l].c(),i[l].m(a,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=s.length}},i:k,o:k,d(e){e&&u(t),e&&u(n),e&&u(c),e&&u(_),e&&u(a),I(i,e)}}}function U(r,t,o){let{data:n}=t,{form:c}=t;return console.log(c),r.$$set=f=>{"data"in f&&o(0,n=f.data),"form"in f&&o(1,c=f.form)},[n,c]}class z extends P{constructor(t){super(),B(this,t,U,J,H,{data:0,form:1})}}export{z as default};
