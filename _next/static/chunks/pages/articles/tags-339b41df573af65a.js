(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{3321:function(e,t,o){"use strict";o.d(t,{Z:function(){return w}});var a=o(3366),n=o(7462),i=o(7294),r=o(6010),l=o(7925),s=o(4780),c=o(1796),d=o(948),p=o(1657),u=o(7739),v=o(8216),h=o(4867);function m(e){return(0,h.Z)("MuiButton",e)}var b=(0,o(1588).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var g=i.createContext({}),x=o(5893);const f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,v.Z)(o.color)}`],t[`size${(0,v.Z)(o.size)}`],t[`${o.variant}Size${(0,v.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var o,a;return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${b.focusVisible}`]:(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${b.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(a=e.palette).getContrastText)?void 0:o.call(a,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}})),Z=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,v.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},S(e)))),y=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,v.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},S(e))));var w=i.forwardRef((function(e,t){const o=i.useContext(g),c=(0,l.Z)(o,e),d=(0,p.Z)({props:c,name:"MuiButton"}),{children:u,color:h="primary",component:b="button",className:S,disabled:w=!1,disableElevation:C=!1,disableFocusRipple:$=!1,endIcon:I,focusVisibleClassName:k,fullWidth:R=!1,size:E="medium",startIcon:_,type:N,variant:W="text"}=d,B=(0,a.Z)(d,f),M=(0,n.Z)({},d,{color:h,component:b,disabled:w,disableElevation:C,disableFocusRipple:$,fullWidth:R,size:E,type:N,variant:W}),T=(e=>{const{color:t,disableElevation:o,fullWidth:a,size:i,variant:r,classes:l}=e,c={root:["root",r,`${r}${(0,v.Z)(t)}`,`size${(0,v.Z)(i)}`,`${r}Size${(0,v.Z)(i)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,v.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,v.Z)(i)}`]},d=(0,s.Z)(c,m,l);return(0,n.Z)({},l,d)})(M),F=_&&(0,x.jsx)(Z,{className:T.startIcon,ownerState:M,children:_}),L=I&&(0,x.jsx)(y,{className:T.endIcon,ownerState:M,children:I});return(0,x.jsxs)(z,(0,n.Z)({ownerState:M,className:(0,r.Z)(S,o.className),component:b,disabled:w,focusRipple:!$,focusVisibleClassName:(0,r.Z)(T.focusVisible,k),ref:t,type:N},B,{classes:T,children:[F,u,L]}))}))},3015:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/tags",function(){return o(2401)}])},2401:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return h},default:function(){return m}});var a=o(5944),n=o(6574),i=o(2918),r=o(9008),l=o.n(r),s=o(1163),c=o(5585),d=o(7357),p=o(8787),u=function(e){e.config;var t=e.tags;return(0,a.BX)("div",{children:[(0,a.tZ)(d.Z,{sx:{m:6}}),(0,a.tZ)(d.Z,{sx:{m:1},children:(0,a.tZ)(p.L,{tags:t})})]})},v=o(7038),h=!0,m=function(e){var t=e.tags,o=e.config;return(0,s.useRouter)().isFallback||t?(0,a.BX)("div",{children:[(0,a.BX)(l(),{children:[(0,a.tZ)("title",{children:"Tags | ".concat(o.blog_title)}),(0,a.tZ)("meta",{name:"description",content:"".concat(o.blog_title," tag list")}),(0,a.tZ)("link",{rel:"icon",href:"".concat(v.sM,"/static/images/favicon.ico")})]}),(0,a.BX)("main",{children:[(0,a.tZ)(c.R,{config:o}),(0,a.tZ)(n.Z,{maxWidth:"md",children:(0,a.tZ)(u,{config:o,tags:t})})]})]}):(0,a.tZ)(i.default,{statusCode:404})}},2918:function(e,t,o){e.exports=o(67)},1163:function(e,t,o){e.exports=o(880)}},function(e){e.O(0,[920,219,774,888,179],(function(){return t=3015,e(e.s=t);var t}));var t=e.O();_N_E=t}]);