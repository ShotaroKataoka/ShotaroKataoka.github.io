(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{6896:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return r(6006)}])},2891:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});var n=r(5944),i=r(5861),a=r(3795),l=r(7357);function c(t){var e=t.config,r=e.copylight_name,c=e.copylight_url;return(0,n.tZ)(l.Z,{sx:{mt:"2rem"},children:(0,n.BX)(i.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,n.tZ)(a.Z,{color:"inherit",href:c,target:"_blank",rel:"noopener",children:r})," ",(new Date).getFullYear(),"."]})})}},6006:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return M},default:function(){return z}});var n=r(5944),i=r(6574),a=r(9008),l=r.n(a),c=r(5585),o=r(2891),s=r(7357),m=r(7294),d=r(7038),Z=r(6886),h=r(9661),u=r(5861),g=r(6868),f=r(8359),p=function(t){var e=t.config,r=t.profile;return(0,n.tZ)(s.Z,{sx:{borderRadius:"16px",backgroundColor:g.Z.palette.background.paper,pl:{sm:"2rem",xs:"1rem"},pr:{sm:"2rem",xs:"1rem"},pt:0,pb:"1rem",mt:"2rem"},children:(0,n.BX)(Z.ZP,{container:!0,children:[(0,n.tZ)(Z.ZP,{item:!0,sm:.5,xs:.5}),(0,n.tZ)(Z.ZP,{item:!0,sm:2,xs:3,children:(0,n.tZ)(h.Z,{alt:e.author_name,src:"".concat(d.sM,"/").concat(e.avatar_image_url.path),sx:{width:70,height:70,mt:"1.2rem",align:"center"}})}),(0,n.BX)(Z.ZP,{item:!0,sm:9.5,xs:8.5,children:[(0,n.tZ)(u.Z,{variant:"h2",sx:{p:0,mt:"1rem",mb:"0.5rem"},children:e.author_name}),(0,n.tZ)(f.$,{children:r.author_description_detail})]})]})})},x=function(t){var e=t.avatarName,r=t.avatarImage,i=t.messages;return(0,n.BX)("div",{children:[(0,n.tZ)(b,{avatarName:e,avatarImage:r,text:i[0].text,date:i[0].date,isFirst:!0}),i.slice(1).map((function(t){return(0,n.tZ)(b,{avatarName:e,avatarImage:r,text:t.text,date:t.date,isFirst:!1},t.date)}))]})},v=function(t){var e=t.avatarName,r=t.avatarImage;return(0,n.BX)(Z.ZP,{container:!0,children:[(0,n.tZ)(Z.ZP,{item:!0,xs:1.2,sm:.8,md:.6,children:(0,n.tZ)(h.Z,{alt:e,src:r,sx:{width:24,height:24,mb:1,ml:1}})}),(0,n.tZ)(Z.ZP,{item:!0,xs:10.8,sm:11.2,md:10.4,children:(0,n.tZ)(u.Z,{variant:"body2",fontSize:10.5,sx:{mt:-.5},children:e})})]})},b=function(t){var e=t.avatarName,r=t.avatarImage,i=t.text,a=t.date,l=t.isFirst,c=(0,n.tZ)("div",{});return l&&(c=(0,n.BX)("div",{children:[(0,n.tZ)(v,{avatarName:e,avatarImage:r}),(0,n.tZ)(s.Z,{sx:{width:0,height:0,ml:4.3,mt:-2,mb:.8,borderStyle:"solid",borderWidth:"10px 0px 0px 15px",borderColor:"transparent transparent transparent #ffffff"}})]})),(0,n.BX)(s.Z,{sx:{mb:"1rem"},children:[c,(0,n.BX)(Z.ZP,{container:!0,children:[(0,n.tZ)(Z.ZP,{item:!0,xs:10,sm:11,children:(0,n.tZ)(s.Z,{sx:{borderRadius:"16px",backgroundColor:g.Z.palette.background.paper,pl:1.5,pr:1.5,pt:.3,pb:.3,ml:"2rem",mt:-1.5,mb:1,mr:"1rem",width:"fit-content"},children:(0,n.tZ)(f.$,{children:i})})}),(0,n.tZ)(Z.ZP,{item:!0,xs:2,sm:1,children:(0,n.tZ)(u.Z,{fontSize:11,sx:{},children:a})})]})]})},_=r(6242),k=r(3965),P=r(4267),w=r(4054),B=r(138),X=r(8972),N=function(t){var e=t.skillData;return(0,n.BX)(_.Z,{sx:{width:{xs:160,sm:180},height:{xs:270},mb:"1rem",overflowY:"auto"},children:[(0,n.BX)(Z.ZP,{container:!0,sx:{mt:1,mb:1},children:[(0,n.tZ)(Z.ZP,{item:!0,xs:2.5}),(0,n.tZ)(Z.ZP,{item:!0,xs:7,children:(0,n.tZ)(k.Z,{component:"img",image:"".concat(d.sM).concat(e.image_url.path)})}),(0,n.tZ)(Z.ZP,{item:!0,xs:2.5})]}),(0,n.BX)(P.Z,{sx:{pt:0,pl:"1rem",pr:"1rem",pb:1},children:[(0,n.tZ)(u.Z,{gutterBottom:!0,fontSize:22,fontWeight:"medium",align:"center",component:"div",children:e.title}),(0,n.tZ)(f.$,{children:e.description})]})]})},T=function(t){var e=t.skillTag,r=t.skillTags,i=t.handleChange;return(0,n.tZ)(w.Z,{variant:"standard",sx:{mb:"1rem"},children:(0,n.BX)(B.Z,{labelId:"skill-tag-label",id:"skill-tag-label",value:e,label:"Tag",onChange:i,children:[(0,n.tZ)(X.Z,{value:"all",children:"all"},"all"),r.map((function(t){return(0,n.tZ)(X.Z,{value:t,children:t},t)}))]})})},C=function(t){var e=t.skillsDataList;return(0,n.tZ)(Z.ZP,{container:!0,children:e.map((function(t){return(0,n.tZ)(Z.ZP,{item:!0,xs:6,sm:4,md:3,children:(0,n.tZ)(N,{skillData:t},t.title)},t.title)}))})},D=r(8352),I=r(1911),S=r(3321),y=r(3795);r(3352);I.ZP.use([I.tl,I.W_]);var $=function(t){var e=t.workData;return(0,n.BX)(_.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:400,sm:450},mb:"1rem",overflowY:"auto"},children:[(0,n.BX)(Z.ZP,{container:!0,sx:{mt:1,mb:1},children:[(0,n.tZ)(Z.ZP,{item:!0,xs:4,sm:3}),(0,n.tZ)(Z.ZP,{item:!0,xs:4,sm:6,children:(0,n.tZ)(S.Z,{href:e.url,target:"_blank",rel:"noopener",sx:{width:"100%"},children:(0,n.tZ)(k.Z,{component:"img",image:"".concat(d.sM).concat(e.image_url.path)})})}),(0,n.tZ)(Z.ZP,{item:!0,xs:4,sm:3})]}),(0,n.BX)(P.Z,{sx:{pt:0,pl:"1rem",pr:"1rem",pb:1},children:[(0,n.tZ)(u.Z,{gutterBottom:!0,fontSize:22,fontWeight:"medium",align:"center",component:"div",children:(0,n.tZ)(y.Z,{variant:"h3",href:e.url,target:"_blank",rel:"noopener",color:"inherit",underline:"hover",fontWeight:"bold",children:e.title})}),(0,n.tZ)(f.$,{children:e.description})]})]})},W=function(t){var e=t.workDataList;return(0,n.tZ)(D.tq,{slidesPerView:1,pagination:{clickable:!0},breakpoints:{600:{slidesPerView:2},820:{slidesPerView:3}},navigation:!0,loop:!0,children:e.map((function(t){return(0,n.tZ)(D.o5,{children:(0,n.BX)(Z.ZP,{container:!0,children:[(0,n.tZ)(Z.ZP,{item:!0,xs:1.2,sm:0}),(0,n.tZ)(Z.ZP,{item:!0,xs:9.6,sm:12,children:(0,n.tZ)($,{workData:t})}),(0,n.tZ)(Z.ZP,{item:!0,xs:1.2,sm:0})]})},"".concat(t.title))}))})},E=function(t){var e=t.config,r=t.profile,i=t.skillTags,a=(0,m.useState)(i[0]),l=a[0],c=a[1],o=r.skills_data.filter((function(t){return t.tags.includes(l)||"all"===l})),Z=r.works_data;return(0,n.BX)("div",{children:[(0,n.tZ)(p,{config:e,profile:r}),(0,n.tZ)(f.$,{children:"## \u30b9\u30ad\u30eb"}),(0,n.tZ)(T,{skillTag:l,skillTags:i,handleChange:function(t){c(t.target.value)}}),(0,n.tZ)(C,{skillsDataList:o}),(0,n.tZ)(f.$,{children:"## \u4f5c\u54c1"}),(0,n.tZ)(W,{workDataList:Z}),(0,n.tZ)(f.$,{children:"## \u3053\u308c\u307e\u3067\u306e\u6d3b\u52d5"}),(0,n.tZ)(s.Z,{sx:{ml:{sm:"3rem",xs:0},mr:{sm:"1rem",xs:0}},children:(0,n.tZ)(x,{avatarName:e.author_name,avatarImage:"".concat(d.sM,"/").concat(e.avatar_image_url.path),messages:r.time_line})})]})},M=!0,z=function(t){var e=t.config,r=t.profile,a=t.skillTags;return(0,n.BX)("div",{children:[(0,n.BX)(l(),{children:[(0,n.tZ)("title",{children:"Profile | ".concat(e.blog_title)}),(0,n.tZ)("meta",{name:"description",content:"".concat(e.author_name,"\u306e\u81ea\u5df1\u7d39\u4ecb\u3067\u3059\uff0e")}),(0,n.tZ)("link",{rel:"icon",href:"".concat(d.sM,"/static/images/favicon.ico")})]}),(0,n.BX)("main",{children:[(0,n.tZ)(c.R,{config:e}),(0,n.tZ)(i.Z,{maxWidth:"md",children:(0,n.tZ)(E,{config:e,profile:r,skillTags:a})})]}),(0,n.tZ)("footer",{children:(0,n.tZ)(o.Z,{config:e})})]})}}},function(t){t.O(0,[573,920,150,475,302,24,219,359,774,888,179],(function(){return e=6896,t(t.s=e);var e}));var e=t.O();_N_E=e}]);