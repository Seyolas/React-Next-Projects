(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1783)}])},8045:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=l(t(7294)),a=l(t(5443)),c=t(6978),s=t(5809),u=t(7190);function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){return e&&e.__esModule?e:{default:e}}function d(e){for(var n=arguments,t=function(t){var r=null!=n[t]?n[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){f(e,n,r[n])}))},r=1;r<arguments.length;r++)t(r);return e}var h=new Set,p=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var v=new Map([["default",function(e){var n=e.root,t=e.src,r=e.width,i=e.quality;0;return"".concat(n,"?url=").concat(encodeURIComponent(t),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var n=e.root,t=e.src,r=e.width,i=e.quality,o=new URL("".concat(n).concat(S(t))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var n=e.root,t=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(n).concat(o).concat(S(t))}],["akamai",function(e){var n=e.root,t=e.src,r=e.width;return"".concat(n).concat(S(t),"?imwidth=").concat(r)}],["custom",function(e){var n=e.src;throw new Error('Image with src "'.concat(n,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function m(e){return void 0!==e.default}var w={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||s.imageConfigDefault,g=w.deviceSizes,x=w.imageSizes,y=w.loader,j=w.path,b=(w.domains,i(g).concat(i(x)));function A(e){var n=e.src,t=e.unoptimized,r=e.layout,o=e.width,a=e.quality,c=e.sizes,s=e.loader;if(t)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,n,t){if(t&&("fill"===n||"responsive"===n)){for(var r,o=/(^|\s)(1?\d?\d)vw/g,a=[];r=o.exec(t);r)a.push(parseInt(r[2]));if(a.length){var c,s=.01*(c=Math).min.apply(c,i(a));return{widths:b.filter((function(e){return e>=g[0]*s})),kind:"w"}}return{widths:b,kind:"w"}}return"number"!==typeof e||"fill"===n||"responsive"===n?{widths:g,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return b.find((function(n){return n>=e}))||b[b.length-1]})))),kind:"x"}}(o,r,c),f=u.widths,l=u.kind,d=f.length-1;return{sizes:c||"w"!==l?c:"100vw",srcSet:f.map((function(e,t){return"".concat(s({src:n,quality:a,width:e})," ").concat("w"===l?e:t+1).concat(l)})).join(", "),src:s({src:n,quality:a,width:f[d]})}}function _(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var n=v.get(y);if(n)return n(d({root:j},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(y))}function S(e){return"/"===e[0]?e.slice(1):e}g.sort((function(e,n){return e-n})),b.sort((function(e,n){return e-n}))},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,s=i.useRef(),u=r(i.useState(!1),2),f=u[0],l=u[1],d=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,o=r.observer,a=r.elements;return a.set(e,n),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&l(e)}),{rootMargin:n}))}),[t,n,f]);return i.useEffect((function(){if(!a&&!f){var e=o.requestIdleCallback((function(){return l(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[d,f]};var i=t(7294),o=t(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.toBase64=function(e){return window.btoa(e)}},1783:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5666),i=t.n(r),o=t(5893),a=t(9008),c=(t(5675),t(7294)),s=function(){return(0,o.jsx)("footer",{children:(0,o.jsxs)("p",{className:"text-center",children:["Copyright \xa9",(0,o.jsx)("a",{className:"link",target:"_blank",rel:"noreferrer",href:"https://twitter.com/seyolasd",children:"seyolas.dev"})]})})},u=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("ul",{id:"wire",children:[(0,o.jsx)("li",{}),(0,o.jsx)("li",{}),(0,o.jsx)("li",{}),(0,o.jsx)("li",{}),(0,o.jsx)("li",{}),(0,o.jsx)("li",{})]}),(0,o.jsx)("h2",{children:"LEARN A WORD!"})]})};function f(e,n,t,r,i,o,a){try{var c=e[o](a),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,i)}function l(){var e,n=(0,c.useState)(!1),t=n[0],r=n[1],l=(0,c.useState)([]),d=l[0],h=l[1],p=(e=i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://random-words-api.vercel.app/word");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,h(t[0]);case 7:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){f(o,r,i,a,c,"next",e)}function c(e){f(o,r,i,a,c,"throw",e)}a(void 0)}))});(0,c.useEffect)((function(){p()}),[t]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.default,{children:[(0,o.jsx)("title",{children:"English | Words"}),(0,o.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]}),(0,o.jsx)(u,{}),(0,o.jsxs)("main",{id:"word-main",children:[(0,o.jsxs)("div",{className:"text",children:["Word: ",(0,o.jsx)("span",{children:d.word})]}),(0,o.jsxs)("div",{className:"text",children:["Definition: ",(0,o.jsx)("span",{children:d.definition})]}),(0,o.jsxs)("div",{className:"text",children:["Pronunciation: ",(0,o.jsx)("span",{children:d.pronunciation})]}),(0,o.jsx)("button",{className:"btn",onClick:function(e){r((function(e){return!e})),e.preventDefault()},children:"New word"})]}),(0,o.jsx)(s,{})]})}},5809:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.imageConfigDefault=n.VALID_LOADERS=void 0;n.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];n.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,n,t){e.exports=t(5443)},5675:function(e,n,t){t(8045)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);