"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[490],{518:function(e,t,r){r.d(t,{$:function(){return n},_:function(){return a}});var n="854b2461bbe5507a6040236243f8820c",a="https://api.themoviedb.org/3"},490:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),o=r(689),u=r(87),l=r(340),v=r(518),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("".concat(v._).concat("/movie","/").concat(t,"?api_key=").concat(v.$,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0.message),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h="MovieDetails_movie__rf-nQ",f="MovieDetails_movie__title__M+OZV",m="MovieDetails_movie__overview__qpbbS",_="MovieDetails_movie__buttons__RTOAr",d=r(184),b=function(){var e=(0,o.UO)().movieId,t=(0,i.useState)(null),r=(0,a.Z)(t,2),c=r[0],l=r[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p(e);case 3:r=t.sent,l(r),console.log("Movie Details:",r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error fetching movie details:",t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),c?(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)("h2",{className:f,children:c.title}),(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c.poster_path),alt:c.title}),(0,d.jsx)("p",{className:m,children:c.overview}),(0,d.jsxs)("div",{className:_,children:[(0,d.jsx)(u.rU,{to:"/movies/".concat(e,"/cast"),children:(0,d.jsx)("button",{children:"Cast"})}),(0,d.jsx)(u.rU,{to:"/movies/".concat(e,"/reviews"),children:(0,d.jsx)("button",{children:"Reviews"})})]})]}):(0,d.jsx)("p",{children:"Loading..."})}}}]);
//# sourceMappingURL=490.2753b77b.chunk.js.map