"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{881:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(439),a=n(791),c=n(87),u=n(689),o=n(952),s="Movies_form__4ow+Z",i="Movies_input__KrUqs",p="Movies_btn__TlfBQ",l="Movies_list__hqYjd",f="Movies_list__item__FCBCP",v=n(184);function h(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],h=t[1],d=(0,c.lr)(),m=(0,r.Z)(d,2),_=m[0],g=m[1],x=(0,u.TH)();(0,a.useEffect)((function(){var e=_.get("name");null!==e&&(0,o.gH)(e).then((function(e){h(e.results)}))}),[_]);return(0,v.jsxs)("div",{children:[(0,v.jsxs)("form",{className:s,onSubmit:function(e){return e.preventDefault()},children:[(0,v.jsx)("input",{className:i,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){e.preventDefault();var t=e.target.value.trim();g(null!==t&&{name:t})}}),(0,v.jsx)("button",{className:p,type:"submit",children:"Search"})]}),n.length>0?(0,v.jsx)("ul",{className:l,children:null===n||void 0===n?void 0:n.map((function(e){var t=e.id,n=(e.poster_path,e.title);return(0,v.jsx)("li",{children:(0,v.jsx)(c.rU,{to:"".concat(t),state:{from:x},className:f,children:(0,v.jsxs)("p",{children:[" ",n]})})},t)}))}):null]})}},952:function(e,t,n){n.d(t,{Je:function(){return i},M1:function(){return d},Pg:function(){return v},gH:function(){return l},tx:function(){return _}});var r=n(861),a=n(757),c=n.n(a),u=n(243),o="bf7825decf840602b483780e7dcd93f9",s="https://api.themoviedb.org/3/";function i(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"trending/movie/day?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(t,"&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function _(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=881.66cc673e.chunk.js.map