"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[663],{663:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),u=n(885),a=n(757),c=n.n(a),s=n(791),i=n(731),o=n(470),l=n(324),f=n(184),h=function(e){var t=e.onChange,n=(0,s.useState)(""),r=(0,u.Z)(n,2),a=r[0],c=r[1];return(0,f.jsx)("div",{children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===a&&alert("Enter your search query."),t(a)},children:[(0,f.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value.toLowerCase().trim())}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})})},d=function(){var e,t=(0,s.useState)([]),n=(0,u.Z)(t,2),a=n[0],d=n[1],p=(0,i.lr)(),v=(0,u.Z)(p,2),x=v[0],m=v[1],j=null!==(e=x.get("query"))&&void 0!==e?e:"",k=(0,o.TH)(),y=(0,s.useCallback)((function(e){var t=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.qF)(t);case 3:n=e.sent,d(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();t(e)}),[]);return(0,s.useEffect)((function(){j?y(j):d([])}),[y,j]),(0,f.jsxs)("div",{children:[(0,f.jsx)(h,{onChange:function(e){m(""!==e?{query:e}:{})},value:j}),!a.length>0?(0,f.jsx)("div",{children:"Please, enter your search query"}):(0,f.jsx)("ul",{children:a.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsxs)(i.rU,{to:"".concat(e.id),state:{from:k},children:[e.title," "]})},e.id)}))})]})}}}]);
//# sourceMappingURL=663.686ffe4d.chunk.js.map