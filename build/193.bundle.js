"use strict";(self.webpackChunknftpal=self.webpackChunknftpal||[]).push([[193],{9034:(e,n)=>{n.DF={prefix:"fas",iconName:"left-long",icon:[512,512,["long-arrow-alt-left"],"f30a","M177.5 98c-8.8-3.8-19-2-26 4.6l-144 136C2.7 243.1 0 249.4 0 256s2.7 12.9 7.5 17.4l144 136c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22l0-88 288 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-288 0 0-88c0-9.6-5.7-18.2-14.5-22z"]},n.At=n.DF},2383:(e,n)=>{n.DF={prefix:"fas",iconName:"right-long",icon:[512,512,["long-arrow-alt-right"],"f30b","M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 88L32 208c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l288 0 0 88c0 9.6 5.7 18.2 14.5 22z"]},n.U2=n.DF},9193:(e,n,a)=>{a.r(n),a.d(n,{default:()=>_});var t=a(2383),s=a(9034),c=a(982),r=a(5052),i=a(3366),l=a(7462),o=a(7294),d=a.t(o,2),u=a(6010),m=a(4780),h=a(1719),p=a(8884);const f=o.createContext({});var x=a(1588),g=a(8562);function b(e){return(0,g.Z)("MuiList",e)}(0,x.Z)("MuiList",["root","padding","dense","subheader"]);var v=a(5893);const j=["children","className","component","dense","disablePadding","subheader"],k=(0,h.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[n.root,!a.disablePadding&&n.padding,a.dense&&n.dense,a.subheader&&n.subheader]}})((({ownerState:e})=>(0,l.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0}))),S=o.forwardRef((function(e,n){const a=(0,p.Z)({props:e,name:"MuiList"}),{children:t,className:s,component:c="ul",dense:r=!1,disablePadding:d=!1,subheader:h}=a,x=(0,i.Z)(a,j),g=o.useMemo((()=>({dense:r})),[r]),S=(0,l.Z)({},a,{component:c,dense:r,disablePadding:d}),w=(e=>{const{classes:n,disablePadding:a,dense:t,subheader:s}=e,c={root:["root",!a&&"padding",t&&"dense",s&&"subheader"]};return(0,m.Z)(c,b,n)})(S);return(0,v.jsx)(f.Provider,{value:g,children:(0,v.jsxs)(k,(0,l.Z)({as:c,className:(0,u.Z)(w.root,s),ref:n,ownerState:S},x,{children:[h,t]}))})}));var w=a(4168),y=a(539);const Z=a(6600).Z;function C(e,n,a,t,s){const c="undefined"!=typeof window&&void 0!==window.matchMedia,[r,i]=o.useState((()=>s&&c?a(e).matches:t?t(e).matches:n));return Z((()=>{let n=!0;if(!c)return;const t=a(e),s=()=>{n&&i(t.matches)};return s(),t.addListener(s),()=>{n=!1,t.removeListener(s)}}),[e,a,c]),r}const N=d.useSyncExternalStore;function I(e,n,a,t){const s=o.useCallback((()=>n),[n]),c=o.useMemo((()=>{if(null!==t){const{matches:n}=t(e);return()=>n}return s}),[s,e,t]),[r,i]=o.useMemo((()=>{if(null===a)return[s,()=>()=>{}];const n=a(e);return[()=>n.matches,e=>(n.addListener(e),()=>{n.removeListener(e)})]}),[s,a,e]);return N(i,r,c)}const M=a.p+"e68b35f4774979ae220b1d5d7b345b00.svg";var A=a(401),R=a(7947),z=a(3149),G=a(7053),L=a(7380),P=a(6787);const T=a.p+"2cca57813dda05a32e3922b63222945f.svg",B=a.p+"d82d830a3b33e29f83e03b0d05b5c065.svg",D=a.p+"dd47e26ed1d7dddf018e5cbffc40f76d.svg",Q=a.p+"756a0f801d660694935429e91a402b18.svg";var U=a(9471),q=a(4134),F=a(1182);const E=a.p+"7b3bd334eb1b2a12cbf6227593d79a44.jpeg",J=a.p+"8c29f24299448a6e6ae33354ffdd4803.jpeg",X=a.p+"441206244f01fd17af874ede1a30e6ba.png",O=a.p+"bc70616e07681e02ba4850f3699c495a.png",H=a.p+"7047cfea7d7480233888e9e3ca41a14a.svg",K=a.p+"6e8543dd387e195a253c676b56fb2381.png";function W(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}var $=function(e){var n=e.name,a=e.src,t=(e.index,e.curIndex),s=e.targetSrc,c=e.techStack,r={react:{name:"React",src:M},graphql:{name:"GraphQL",src:A.Z},typescript:{name:"Typescript",src:R.Z},webpack:{name:"Webpack",src:L.Z},materialui:{name:"MaterialUI",src:F.Z},javascript:{name:"Javascript",src:G.Z},node:{name:"NodeJS",src:D},css:{name:"CSS3",src:U.Z},html:{name:"HTML5",src:q.Z},redis:{name:"Redis",src:Q},redux:{name:"Redux + TK",src:z.Z},jest:{name:"Jest",src:E},reactnative:{name:"React Native",src:M},python:{name:"Python",src:P.Z},expo:{name:"Expo",src:B},flask:{name:"Flask",src:T}};return(0,o.useEffect)((function(){}),[t]),(0,v.jsxs)("div",{className:"carouselItems",children:[(0,v.jsxs)("div",{id:"carouselItemsInner",style:{display:"flex",flexDirection:"column",alignItems:"center",overflow:"".concat("Quell"===n?"visible":"hidden")},children:[(0,v.jsx)("span",{className:"carouselItemName",children:n}),(0,v.jsx)("div",{onClick:function(){var e;null===(e=window.open(s,"_blank"))||void 0===e||e.focus()},className:"carouselInner",style:{overflow:"".concat("Quell"===n?"visible":"hidden")},children:(0,v.jsx)("div",{id:"demoImgContainer + ".concat("Quell"===n?"quellAppDemoItemContainer":""),children:(0,v.jsx)("img",{id:"".concat(n,"ID"),src:a,className:"demoImg"})})})]}),(0,v.jsx)("div",{className:"demoTechStack",children:(0,v.jsx)(S,{className:"demoTechStackInnerContainer",children:c.map((function(e,n){var a=r[e];return(0,v.jsxs)("div",{className:"demoTechStackItem",children:[(0,v.jsx)("img",{src:a.src,height:"30px",width:"30px"}),(0,v.jsx)("span",{children:a.name})]},n)}))})})]})};const _=function(e){var n,a,i=e.selection,l=(n=(0,o.useState)(0),a=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var t,s,c=[],r=!0,i=!1;try{for(a=a.call(e);!(r=(t=a.next()).done)&&(c.push(t.value),!n||c.length!==n);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return c}}(n,a)||function(e,n){if(e){if("string"==typeof e)return W(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?W(e,n):void 0}}(n,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=l[0],u=l[1],m=function(e,n={}){const a=(0,w.Z)(),t="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:s=!1,matchMedia:c=(t?window.matchMedia:null),ssrMatchMedia:r=null,noSsr:i}=(0,y.Z)({name:"MuiUseMediaQuery",props:n,theme:a});let l="function"==typeof e?e(a):e;return l=l.replace(/^@media( ?)/m,""),(void 0!==N?I:C)(l,s,c,r,i)}("(max-width: 800px)"),h=(0,o.memo)((function(){return(0,v.jsxs)("div",{className:"mobileCarouselButtons",children:[(0,v.jsx)(r.Z,{className:"mobileCarouselButton",disableRipple:!0,onClick:function(){p("left")},children:(0,v.jsx)(c.G,{size:"3x",icon:s.At})}),(0,v.jsx)(r.Z,{className:"mobileCarouselButton",disableRipple:!0,onClick:function(){p("right")},children:(0,v.jsx)(c.G,{size:"3x",icon:t.U2})})]})}));function p(e){switch(e){case"right":switch(i){case"all":u(d+1===g.length?0:d+1);break;case"apps":u(d+1===x.length?0:d+1);break;case"tools":u(d+1===f.length?0:d+1)}break;case"left":switch(i){case"all":u(d-1<0?g.length-1:d-1);break;case"apps":u(d-1<0?x.length-1:d-1);break;case"tools":u(d-1<0?f.length-1:d-1)}}}var f=[{name:"Quell (GraphQL Caching Solution)",src:H,targetSrc:"https://github.com/open-source-labs/Quell",techStack:["graphql","node","jest","redis"]}],x=[{name:"tasksAI",src:K,targetSrc:"http://www.taskai.io",techStack:["reactnative","graphql","expo","python","javascript","redux","flask"]},{name:"Quell Demo",src:J,targetSrc:"http://www.quellql.com/",techStack:["react","graphql","typescript","materialui","redis","html","css","webpack"]},{name:"PlayBoards",src:X,targetSrc:"https://github.com/Jckhe/playBoards-ts",techStack:["react","redux","graphql","typescript","node","webpack","html","css"]},{name:"NFTPal",src:O,targetSrc:"https://jckhe.github.io/NFTPal-Deployed/",techStack:["react","redux","javascript","html","css"]}],g=[].concat(x,f);return(0,o.useEffect)((function(){u(0)}),[i]),"all"===i?(0,v.jsxs)("div",{className:"carouselContainer",children:[m?(0,v.jsx)(h,{}):null,(0,v.jsxs)("div",{id:"carouselInnerContainer",children:[m?null:(0,v.jsx)(r.Z,{className:"carouselButton",disableRipple:!0,onClick:function(){p("left")},children:(0,v.jsx)(c.G,{size:"3x",icon:s.At})}),(0,v.jsx)("div",{className:"carouselItemsContainer",children:(0,v.jsx)("div",{className:"inner",style:{transform:"translateX(-".concat(100*d,"%)")},children:g.map((function(e,n){return(0,v.jsx)($,{index:n,techStack:e.techStack,targetSrc:e.targetSrc,curIndex:d,src:e.src,name:e.name},n)}))})}),m?null:(0,v.jsx)(r.Z,{className:"carouselButton",disableRipple:!0,onClick:function(){p("right")},children:(0,v.jsx)(c.G,{size:"3x",icon:t.U2})})]})]}):"apps"===i?(0,v.jsxs)("div",{className:"carouselContainer",children:[m?(0,v.jsx)(h,{}):null,(0,v.jsxs)("div",{id:"carouselInnerContainer",children:[m?null:(0,v.jsx)(r.Z,{onClick:function(){p("left")},children:(0,v.jsx)(c.G,{size:"3x",icon:s.At})}),(0,v.jsx)("div",{className:"carouselItemsContainer",children:(0,v.jsx)("div",{className:"inner",style:{transform:"translateX(-".concat(100*d,"%)")},children:x.map((function(e,n){return(0,v.jsx)($,{techStack:e.techStack,targetSrc:e.targetSrc,index:n,curIndex:d,src:e.src,name:e.name},n)}))})}),m?null:(0,v.jsx)(r.Z,{onClick:function(){p("right")},children:(0,v.jsx)(c.G,{size:"3x",icon:t.U2})})]})]}):"tools"===i?(0,v.jsxs)("div",{className:"carouselContainer",children:[m?(0,v.jsx)(h,{}):null,(0,v.jsxs)("div",{id:"carouselInnerContainer",children:[m?null:(0,v.jsx)(r.Z,{onClick:function(){p("left")},children:(0,v.jsx)(c.G,{size:"3x",icon:s.At})}),(0,v.jsx)("div",{className:"carouselItemsContainer",children:(0,v.jsx)("div",{className:"inner",style:{transform:"translateX(-".concat(100*d,"%)")},children:f.map((function(e,n){return(0,v.jsx)($,{techStack:e.techStack,targetSrc:e.targetSrc,index:n,curIndex:d,src:e.src,name:e.name},n)}))})}),m?null:(0,v.jsx)(r.Z,{onClick:function(){p("right")},children:(0,v.jsx)(c.G,{size:"3x",icon:t.U2})})]})]}):(0,v.jsxs)("div",{className:"carouselContainer",children:[m?(0,v.jsx)(h,{}):null,(0,v.jsxs)("div",{id:"carouselInnerContainer",children:[m?null:(0,v.jsx)(r.Z,{className:"carouselButton",disableRipple:!0,onClick:function(){p("left")},children:(0,v.jsx)(c.G,{size:"3x",icon:s.At})}),(0,v.jsx)("div",{className:"carouselItemsContainer",children:(0,v.jsx)("div",{className:"inner",style:{transform:"translateX(-".concat(100*d,"%)")},children:g.map((function(e,n){return(0,v.jsx)($,{index:n,techStack:e.techStack,targetSrc:e.targetSrc,curIndex:d,src:e.src,name:e.name},n)}))})}),m?null:(0,v.jsx)(r.Z,{className:"carouselButton",disableRipple:!0,onClick:function(){p("right")},children:(0,v.jsx)(c.G,{size:"3x",icon:t.U2})})]})]})}},9471:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"6ec1697a406483c72ccf775894d16777.svg"},4134:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"87f3f64abde68319b96661c04229b687.svg"},7053:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"acc4642f682cd93a4c20a8a02c0cfa21.svg"},1182:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"c0958f97929482097efdccc254e938aa.svg"},3149:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"71eb13e2fdd1de624e9a856125906e3b.svg"},7380:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"23fc1d3ac606d117e05a140e0de79806.svg"}}]);