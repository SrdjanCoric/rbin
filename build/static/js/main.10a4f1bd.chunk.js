(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{56:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(25),j=n.n(s),i=n(9),l=n(1),o=function(e){var t=e.data,n=(t=JSON.parse(t)).headers,c=t.method,r=t.timestamp,s=t.body,j=t.query_params;console.log(t);n["Content-Type"]&&n["Content-Type"];return Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["timestamp: ",Object(l.jsxs)("code",{children:[r,Object(l.jsx)("br",{})]})]}),Object(l.jsxs)("li",{children:["method: ",Object(l.jsx)("code",{children:c})," ",Object(l.jsx)("br",{})]}),Object(l.jsxs)("li",{children:["headers: ",Object(l.jsx)("br",{}),Object(l.jsx)("code",{children:Object(l.jsx)("ul",{children:Object.keys(n).map((function(e){return Object(l.jsxs)("li",{children:[" ",e,": ",n[e],Object(l.jsx)("br",{})," "]},e)}))})})]}),Object(l.jsxs)("li",{children:["query parameters: ",Object(l.jsx)("br",{}),Object(l.jsx)("code",{children:Object(l.jsx)("ul",{children:Object.keys(j).map((function(e){return Object(l.jsxs)("li",{children:[e,": ",j[e]]},e)}))})})]}),Object(l.jsxs)("li",{children:["body: ",Object(l.jsx)("code",{children:JSON.stringify(s)})]})]})},b=n(2),a=n(13),u=n.n(a),d={get:function(e){return u.a.get("/data/".concat(e)).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))},create:function(){return u.a.post("/bins").then((function(e){return e.data.uri}))}},O=function(){var e=Object(b.f)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Request Bin"}),Object(l.jsx)("p",{children:'Welcome! Click "Create Bin" to get started.'}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault();d.create().then((function(t){e.push("/bin/".concat(t))}))},children:"Create Bin"})]})},h=n(27),x=function(e){var t=e.slug,n=Object(c.useState)(null),r=Object(h.a)(n,2),s=r[0],j=r[1],i=Object(b.f)();return Object(c.useEffect)((function(){d.get(t).then((function(e){e?(console.log("tub",e),j(e.requests)):i.push("/")}))}),[]),Object(l.jsx)("ul",{children:s&&s.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(o,{data:JSON.stringify(e)})},e.timestamp)}))})},f=((new Date).toString(),function(){var e,t=Object(b.g)("/bin/:slug"),n=null===t||void 0===t||null===(e=t.params)||void 0===e?void 0:e.slug;return Object(l.jsxs)(b.c,{children:[Object(l.jsx)(b.a,{path:"/bin/:slug",children:Object(l.jsx)(x,{slug:n})}),Object(l.jsx)(b.a,{path:"/",children:Object(l.jsx)(O,{})})]})});j.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(f,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.10a4f1bd.chunk.js.map