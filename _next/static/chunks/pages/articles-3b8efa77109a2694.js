(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{1536:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return n(3076)}])},2891:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(5944),a=n(5861),i=n(3795),o=n(7357);function c(t){var e=t.config,n=e.copylight_name,c=e.copylight_url;return(0,r.tZ)(o.Z,{sx:{mt:"2rem"},children:(0,r.BX)(a.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,r.tZ)(i.Z,{color:"inherit",href:c,target:"_blank",rel:"noopener",children:n})," ",(new Date).getFullYear(),"."]})})}},2122:function(t,e,n){"use strict";n.d(e,{j:function(){return v},y:function(){return y}});var r=n(5944),a=n(1664),i=n.n(a),o=n(6242),c=n(3321),l=n(7357),u=n(3965),s=n(5861),p=n(6574),d=n(6886),f=n(8787),h=n(786),g=n(7038);function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){Z(t,e,n[e])}))}return t}var y=function(t){var e=t.slug,n=t.title,a=t.tags,d=t.posted_at;return d>(0,h.I)()?(0,r.tZ)("div",{}):(0,r.BX)(o.Z,{variant:"outlined",sx:{width:"98%",m:0,p:0,borderRadius:"12px"},children:[(0,r.tZ)(i(),{href:"/articles/".concat(e),passHref:!0,children:(0,r.tZ)(c.Z,{sx:{width:"100%",textTransform:"none",pt:0,pb:0,pl:0,pr:0},children:(0,r.BX)(l.Z,{sx:{pt:0,pb:0,pr:0,width:"100%",pl:0},children:[(0,r.tZ)(u.Z,{component:"img",image:"".concat(g.sM,"/static/images/thumbnail/").concat(e,".jpg"),alt:"thumbnail"}),(0,r.BX)(l.Z,{sx:{pr:"1.4rem",pl:"1.4rem"},children:[(0,r.tZ)(s.Z,{gutterBottom:!0,variant:"body2",color:"text.secondary",component:"div",sx:{m:0,pt:1,pb:.5},children:d}),(0,r.tZ)(s.Z,{variant:"h2",color:"text.primary",component:"div",sx:{fontWeight:"bold",pt:0,pl:0,pr:0,pb:1},children:n})]})]})})}),(0,r.tZ)(p.Z,{children:(0,r.tZ)(l.Z,{sx:{m:0,pb:1,pt:1},children:(0,r.tZ)(f.L,{tags:a})})})]})},v=function(t){var e=t.posts,n=t.page,a=t.postNumPerPage,i=((n=n?Number(n):1)-1)*a,o=(n-1)*a+a;return(0,r.tZ)(d.ZP,{container:!0,children:e.slice(i,o).map((function(t){return(0,r.tZ)(d.ZP,{item:!0,xs:12,sm:6,children:(0,r.tZ)(l.Z,{sx:{m:{sm:"1rem",xs:1}},children:(0,r.tZ)(y,m({},t))})},t.slug)}))})}},786:function(t,e,n){"use strict";n.d(e,{I:function(){return u}});var r=n(7484),a=n.n(r),i=n(178),o=n.n(i),c=n(9387),l=n.n(c),u=function(){return a().extend(o()),a().extend(l()),a().tz.setDefault("Asia/Tokyo"),a()().tz().format("YYYY\u5e74MM\u6708DD\u65e5 HH\u6642mm\u5206")}},3076:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return N},default:function(){return B}});var r=n(5944),a=n(2045),i=n(9008),o=n.n(i),c=n(1163),l=n(5585),u=n(2891),s=n(5861),p=n(7357),d=n(5054),f=function(t){var e=t.pageNum,n=t.page,a=t.handleChange;n=n?Number(n):1;return(0,r.tZ)(d.Z,{count:e,color:"primary",onClick:function(t){var e=(t.target.ownerDocument||document).querySelector("#paginationAnchor");e&&e.scrollIntoView({behavior:"smooth",block:"center"})},onChange:a,page:n,variant:"outlined",sx:{justifyContent:"center",display:"flex"},hideNextButton:!0,hidePrevButton:!0,siblingCount:2})},h=n(2122),g=n(4054),Z=n(138),m=n(8972),y=function(t){var e=t.year,n=t.years,a=t.handleChange;return e=e||"all",(0,r.tZ)(g.Z,{variant:"standard",children:(0,r.BX)(Z.Z,{labelId:"article-year-label",id:"article-year-label",value:e,label:"Year",onChange:a,children:[(0,r.tZ)(m.Z,{value:"all",children:"all"},"all"),n.map((function(t){return(0,r.tZ)(m.Z,{value:t,children:t},t)}))]})})},v=function(t){return"string"===typeof t.query.year?t.query.year:void 0},b=function(t){return"string"===typeof t.query.tag?t.query.tag:void 0},x=function(t){t.config;var e=t.years,n=t.router,a=t.posts,i=a.length,o=Math.floor((i-1)/14)+1,c=v(n),l=function(t){return"string"===typeof t.query.page?t.query.page:void 0}(n),u=b(n),d=function(t,e){var r={};r.page="".concat(e),"string"===typeof c&&(r.year=c),"string"===typeof u&&(r.tag=u),n.push({pathname:"/articles",query:r})},g=c?"year='".concat(c,"'"):void 0,Z=u?"tag='".concat(u,"'"):void 0,m=g||Z?"(".concat(g||"").concat(g&&Z?" ":"").concat(Z||"",")"):void 0;return(0,r.BX)("div",{id:"paginationAnchor",children:[(0,r.BX)(s.Z,{variant:"h1",align:"center",children:["Articles List ",m]}),(0,r.tZ)(p.Z,{sx:{m:"3rem"}}),(0,r.tZ)(y,{year:c,years:e,handleChange:function(t){var e={};e.year=t.target.value,"string"===typeof l&&(e.page=l),"string"===typeof u&&(e.tag=u),n.push({pathname:"/articles",query:e})}}),(0,r.tZ)(p.Z,{sx:{m:"2rem"}}),(0,r.tZ)(f,{pageNum:o,page:l,handleChange:d}),(0,r.tZ)(h.j,{posts:a,page:l,postNumPerPage:14}),(0,r.tZ)(f,{pageNum:o,page:l,handleChange:d})]})},_=n(7038),w=n(786),N=!0,B=function(t){var e=t.posts,n=t.config,i=t.years,s=(0,c.useRouter)(),p=v(s);p=p||"all";var d=b(s);d=d||"";var f=(0,w.I)();return e=e.filter((function(t){return t.posted_at<=f})).filter((function(t){return t.posted_at.slice(0,4)===p||"all"===p})).filter((function(t){return t.tags.some((function(t){return t.name===d}))||""===d})),(0,r.BX)("div",{children:[(0,r.BX)(o(),{children:[(0,r.tZ)("title",{children:"\u8a18\u4e8b\u4e00\u89a7 | ".concat(n.blog_title)}),(0,r.tZ)("meta",{name:"description",content:"".concat(n.blog_title," article list")}),(0,r.tZ)("link",{rel:"icon",href:"".concat(_.sM,"/static/images/favicon.ico")})]}),(0,r.BX)("main",{children:[(0,r.tZ)(l.R,{config:n}),(0,r.tZ)(a.Z,{maxWidth:"md",children:(0,r.tZ)(x,{config:n,years:i,router:s,posts:e})})]}),(0,r.tZ)("footer",{children:(0,r.tZ)(u.Z,{config:n})})]})}}},function(t){t.O(0,[563,121,302,249,219,774,888,179],(function(){return e=1536,t(t.s=e);var e}));var e=t.O();_N_E=e}]);