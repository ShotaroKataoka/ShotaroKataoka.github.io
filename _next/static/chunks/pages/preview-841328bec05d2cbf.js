(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[175],{9257:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/preview",function(){return r(5638)}])},886:function(e,t,r){"use strict";r.d(t,{D:function(){return p}});var i=r(5944),n=r(5861),s=r(7357),a=r(6886),c=r(6868),l=r(3946),o=r(7957),d=function(e){var t=e.slug,r=e.issues_page_url;return(0,i.tZ)(l.Z,{href:"".concat(r,"/").concat(t),target:"_blank",rel:"noopener","aria-label":"edit page",children:(0,i.tZ)(o.Z,{fontSize:"small"})})},Z=r(8359),u=r(8787),p=function(e){var t=e.config,r=e.post;return(0,i.BX)("div",{children:[(0,i.tZ)(n.Z,{variant:"h1",align:"center",children:r.title}),(0,i.tZ)(s.Z,{sx:{m:3}}),(0,i.BX)(s.Z,{sx:{borderRadius:"16px",backgroundColor:c.Z.palette.background.paper,pl:{sm:"2rem",xs:"1rem"},pr:{sm:"2rem",xs:"1rem"},pt:"2rem",pb:"2rem",m:0},children:[(0,i.BX)(a.ZP,{container:!0,children:[(0,i.tZ)(a.ZP,{item:!0,sm:11.3,xs:10.3,children:(0,i.tZ)(u.L,{tags:r.tags})}),(0,i.tZ)(a.ZP,{item:!0,sm:.7,xs:1.7,children:(0,i.tZ)(d,{slug:r.slug,issues_page_url:t.issues_page_url})})]}),(0,i.tZ)(s.Z,{sx:{m:3}}),(0,i.tZ)(Z.$,{children:r.content})]})]})}},2531:function(e,t,r){"use strict";r.d(t,{_:function(){return x}});var i=r(5944),n=r(7357),s=r(5861),a=r(3795),c=r(6868),l=r(6886),o=r(9661),d=r(7038),Z=function(e){var t=e.config,r=e.index;return(0,i.tZ)(n.Z,{sx:{borderRadius:"24px",backgroundColor:"#d0c6a3",pl:{sm:"2rem",xs:"1rem"},pr:{sm:"2rem",xs:"1rem"},pb:"1rem",pt:"1rem"},children:(0,i.BX)(l.ZP,{container:!0,children:[(0,i.tZ)(l.ZP,{item:!0,xs:1}),(0,i.tZ)(l.ZP,{item:!0,xs:3,children:(0,i.tZ)(o.Z,{alt:t.author_name,src:"".concat(d.sM,"/").concat(t.avatar_image_url.path),sx:{width:{md:144,sm:100,xs:60},height:{md:144,sm:100,xs:60}}})}),(0,i.tZ)(l.ZP,{item:!0,xs:8,children:(0,i.tZ)(s.Z,{fontSize:{md:"92px",sm:"64px",xs:"40px"},sx:{color:"#f0ece0"},children:r.site_header_title})}),(0,i.tZ)(l.ZP,{item:!0,xs:0})]})})},u=r(8359),p=r(2122),m=r(8352),h=r(1911);r(3352);h.ZP.use([h.tl,h.W_,h.pt]);var g=function(e){var t=e.posts;return(0,i.tZ)(m.tq,{slidesPerView:1,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{600:{slidesPerView:2}},navigation:!0,loop:!0,children:t.map((function(e){return(0,i.tZ)(m.o5,{children:(0,i.tZ)(n.Z,{sx:{mb:3,mr:1,ml:1},children:(0,i.tZ)(p.y,{slug:e.slug,title:e.title,tags:e.tags,posted_at:e.posted_at})})},"".concat(e.slug))}))})},x=function(e){var t=e.config,r=e.index,l=e.stared_posts,o=e.new_posts;return(0,i.BX)("div",{children:[(0,i.tZ)(Z,{config:t,index:r}),(0,i.tZ)(n.Z,{sx:{m:"3rem"}}),(0,i.tZ)(u.$,{children:"## \u304a\u3059\u3059\u3081\u306e\u8a18\u4e8b"}),(0,i.tZ)(g,{posts:l}),(0,i.tZ)(n.Z,{sx:{mt:"2rem"}}),(0,i.tZ)(u.$,{children:"## \u65b0\u7740\u8a18\u4e8b"}),(0,i.BX)(n.Z,{sx:{ml:{sm:"3rem",xs:0},mr:{sm:"3rem",xs:0}},children:[(0,i.tZ)(p.j,{posts:o,page:1,postNumPerPage:6}),(0,i.tZ)(s.Z,{align:"right",sx:{mr:"2rem"},children:(0,i.tZ)(a.Z,{href:"/articles",children:(0,i.tZ)("a",{children:">>\u3082\u3063\u3068\u898b\u308b"})})})]}),(0,i.tZ)(n.Z,{sx:{borderRadius:"16px",backgroundColor:c.Z.palette.background.paper,pl:{sm:"2rem",xs:"1rem"},pr:{sm:"2rem",xs:"1rem"},pt:0,pb:"1rem",mt:"4rem"},children:(0,i.tZ)(u.$,{children:r.site_description})})]})}},5638:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return w}});var i=r(5944),n=r(4054),s=r(3841),a=r(138),c=r(8972),l=r(7357),o=r(6886),d=r(1903),Z=r(9008),u=r.n(Z),p=r(7294),m=r(886),h=r(2531),g=r(4245),x=r(8388),_=r(7038),f=r(5585),v=function(e){var t=e.pageType,r=e.setPageType,l=e.setValue;return(0,i.BX)(n.Z,{children:[(0,i.tZ)(s.Z,{id:"page-type-select-label",children:"PageType"}),(0,i.BX)(a.Z,{labelId:"page-type-select-label",id:"page-type-select",value:t,label:"PageType",onChange:function(e){r(e.target.value),b(e.target.value,l)},children:[(0,i.tZ)(c.Z,{value:"article",children:"article"}),(0,i.tZ)(c.Z,{value:"index",children:"index page"})]})]})},b=function(e,t){t("article"===e?"## preview article\nedit here!":"index"===e?"site_description: \nsite_header_title:":"")},P=function(e){var t=e.pageType,r=e.config,n=e.object;return void 0!==n?"article"===t?(0,i.tZ)(m.D,{config:r,post:n}):"index"===t?(0,i.tZ)(h._,{config:r,index:n,stared_posts:[],new_posts:[]}):(0,i.tZ)("div",{}):(0,i.tZ)("div",{})},w=!0;t.default=function(e){var t=e.config,r=e.postsMap;(0,(0,p.useContext)(g.ArticlesContext).setPosts)(r);var n=(0,p.useState)("article"),s=n[0],a=n[1],c=(0,p.useState)("## preview article\nedit here!"),Z=c[0],m=c[1],h=function(e,t){if("article"===e)return{slug:"preview",content:t,title:"preview",posted_at:"",updated_at:"",tags:[{name:"preview",color:"656565",description:""}],description:""};if("index"===e)try{return x.ZP.parse(t)}catch(r){return{site_description:"",site_header_title:""}}}(s,Z);return(0,i.BX)("div",{children:[(0,i.BX)(u(),{children:[(0,i.tZ)("title",{children:"preview | ".concat(t.blog_title)}),(0,i.tZ)("meta",{name:"description",content:"".concat(t.site_introduction)}),(0,i.tZ)("link",{rel:"icon",href:"".concat(_.sM,"/static/images/favicon.ico")})]}),(0,i.BX)("main",{children:[(0,i.tZ)(f.R,{config:t}),(0,i.tZ)(l.Z,{sx:{ml:"1rem",mt:"2rem"},children:(0,i.tZ)(v,{pageType:s,setPageType:a,setValue:m})}),(0,i.BX)(o.ZP,{container:!0,sx:{mt:"2rem",ml:"1rem"},children:[(0,i.tZ)(o.ZP,{item:!0,sm:4,xs:12,children:(0,i.tZ)(d.Z,{multiline:!0,fullWidth:!0,rows:20,id:"editor",value:Z,onChange:function(e){return m(e.target.value)}})}),(0,i.tZ)(o.ZP,{item:!0,sm:.2,xs:0}),(0,i.tZ)(o.ZP,{item:!0,sm:7.6,xs:12,children:(0,i.tZ)(P,{pageType:s,config:t,object:h})}),(0,i.tZ)(o.ZP,{item:!0,sm:.2,xs:0})]})]})]})}}},function(e){e.O(0,[573,563,121,475,24,302,224,219,359,774,888,179],(function(){return t=9257,e(e.s=t);var t}));var t=e.O();_N_E=t}]);