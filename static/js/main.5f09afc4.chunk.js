(this["webpackJsonpreact-router-poc"]=this["webpackJsonpreact-router-poc"]||[]).push([[0],{71:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(17),o=n.n(a),i=(n(71),n(72),n(25)),b=n(55),j=n(56),h=n(66),s=n(65),u=n(38),d=n(13),l=n(82),O=n(15),p=l.a.TabPane,f=function(e){Object(h.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(b.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).buildLocation=function(t,n){var c=e.props.match.path;return Object(i.a)(Object(i.a)({},t),{},{pathname:"".concat(c,"/").concat(n)})},e.tabs=[{title:Object(O.jsx)(u.b,{to:function(e){return Object(i.a)(Object(i.a)({},e),{},{pathname:"/home/first"})},children:"First"}),key:"first",body:Object(O.jsx)("h1",{children:"Content of Tab Pane 1"})},{title:Object(O.jsx)(u.b,{to:function(e){return Object(i.a)(Object(i.a)({},e),{},{pathname:"/home/second"})},children:"Second"}),key:"second",body:Object(O.jsx)("h1",{children:"Content of Tab Pane 2"})},{title:Object(O.jsx)(u.b,{to:function(e){return Object(i.a)(Object(i.a)({},e),{},{pathname:"/home/third"})},children:"Third"}),key:"third",body:Object(O.jsx)("h1",{children:"Content of Tab Pane 3"})}],e.renderTabPanes=function(){return e.tabs.map((function(e){return Object(O.jsx)(p,{tab:e.title,children:e.body},e.key)}))},e.getActiveKey=function(e){return e.pathname.split("/")[2]},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{children:Object(O.jsx)(u.a,{basename:"/react-router-poc",children:Object(O.jsx)(d.a,{path:"/home/:path",render:function(t){var n=t.location,c=e.getActiveKey(n);return console.log("Active key:",c),Object(O.jsx)("div",{children:Object(O.jsx)(l.a,{activeKey:c,onChange:function(){return console.log("Tab Changed")},children:e.renderTabPanes()})})}})})})}}]),n}(c.Component);var v=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(f,{})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),m()}},[[79,1,2]]]);
//# sourceMappingURL=main.5f09afc4.chunk.js.map