(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(3),a=n.n(c),o=(n(12),n(13),n(4)),i=n(5),l=n(7),h=n(6),u=(n(14),n(0)),d=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),Object(u.jsx)("h1",{children:e.monster.name}),Object(u.jsx)("p",{children:e.monster.email})]})},j=(n(16),function(e){return Object(u.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(u.jsx)(d,{monster:e,className:"flex-child"},e.id)}))})}),m=(n(17),function(e){var t=e.placeHolder,n=e.handleChange;return Object(u.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=(n(18),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).searchMonster=function(t){t.preventDefault(),e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h1",{className:"monster-title",children:"Monster Rolodex"}),Object(u.jsx)(m,{className:"search-bar",placeHolder:"Search monsters...",handleChange:this.searchMonster}),Object(u.jsx)(j,{monsters:s})]})}}]),n}(r.a.Component));a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.fa2acbaf.chunk.js.map