(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(14),r=n.n(a),i=(n(21),n(4)),j=n.n(i),u=n(15),d=n(5),o=n(16),m=n.n(o),l=n(0),b=function(e){var t=e.item;return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("div",{className:"itemd",children:Object(l.jsx)("img",{src:t.Image,alt:""})}),Object(l.jsxs)("div",{className:"itemd",style:{marginTop:"10%"},children:[Object(l.jsx)("p",{className:"itemd",children:"User Name"}),Object(l.jsx)("p",{className:"itemd bb",children:t.name}),Object(l.jsx)("p",{className:"itemd",children:"User Id"}),Object(l.jsx)("p",{className:"itemd",children:t.id})]})]})},p=function(e){var t=e.items,n=e.query;return Object(l.jsx)("section",{children:t.filter((function(e){return""===n||e.name.toLowerCase().includes(n.toLowerCase())?e:void 0})).map((function(e){return Object(l.jsx)(b,{item:e},e.id)}))})},h=function(){return Object(l.jsx)("p",{className:"heading",children:"Candidates List"})},O=(n(42),function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(d.a)(a,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");case 2:t=e.sent,s(t.data),console.log(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(h,{}),Object(l.jsx)("input",{onChange:function(e){return o(e.target.value)},placeholder:"Search..."}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(p,{items:n,query:i})})]})});r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.f84c0d46.chunk.js.map