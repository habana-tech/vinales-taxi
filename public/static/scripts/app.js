!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));n(2),new r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".menu-icon"),this.logo=document.querySelector(".logo"),this.menu=document.querySelector(".nav"),this.siteHeader=document.querySelector(".header"),this.links=document.querySelectorAll("nav ul li a"),this.events()}return r(e,[{key:"events",value:function(){this.menuIcon.addEventListener("click",this.toggleTheMenu.bind(this));var e=!0,t=!1,n=void 0;try{for(var r,i=this.links[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){r.value.addEventListener("click",this.toggleTheMenu.bind(this))}}catch(e){t=!0,n=e}finally{try{!e&&i.return&&i.return()}finally{if(t)throw n}}}},{key:"toggleTheMenu",value:function(){this.logo.classList.toggle("logo--is-visible"),this.menu.classList.toggle("nav--is-visible"),this.menuIcon.classList.toggle("menu-icon--close-x"),this.siteHeader.classList.toggle("header--is-visible")}}]),e}();t.default=i},function(e,t,n){
/*! lazysizes - v4.0.4 */
!function(t,r){var i=function(){r(t.lazySizes),t.removeEventListener("lazyunveilread",i,!0)};r=r.bind(null,t,t.document),"object"==typeof e&&e.exports?r(n(3)):t.lazySizes?i():t.addEventListener("lazyunveilread",i,!0)}(window,function(e,t,n){"use strict";function r(e,n){if(!o[e]){var r=t.createElement(n?"link":"script"),i=t.getElementsByTagName("script")[0];n?(r.rel="stylesheet",r.href=e):r.src=e,o[e]=!0,o[r.src||r.href]=!0,i.parentNode.insertBefore(r,i)}}var i,a,o={};t.addEventListener&&(a=/\(|\)|\s|'/,i=function(e,n){var r=t.createElement("img");r.onload=function(){r.onload=null,r.onerror=null,r=null,n()},r.onerror=r.onload,r.src=e,r&&r.complete&&r.onload&&r.onload()},addEventListener("lazybeforeunveil",function(e){var t,o,s;e.detail.instance==n&&(e.defaultPrevented||("none"==e.target.preload&&(e.target.preload="auto"),(t=e.target.getAttribute("data-link"))&&r(t,!0),(t=e.target.getAttribute("data-script"))&&r(t),(t=e.target.getAttribute("data-require"))&&(n.cfg.requireJs?n.cfg.requireJs([t]):r(t)),(o=e.target.getAttribute("data-bg"))&&(e.detail.firesLoad=!0,i(o,function(){e.target.style.backgroundImage="url("+(a.test(o)?JSON.stringify(o):o)+")",e.detail.firesLoad=!1,n.fire(e.target,"_lazyloaded",{},!0,!0)})),(s=e.target.getAttribute("data-poster"))&&(e.detail.firesLoad=!0,i(s,function(){e.target.poster=s,e.detail.firesLoad=!1,n.fire(e.target,"_lazyloaded",{},!0,!0)}))))},!1))})},function(e,t){!function(t,n){var r=function(e,t){"use strict";if(!t.getElementsByClassName)return;var n,r,i=t.documentElement,a=e.Date,o=e.HTMLPictureElement,s=e.addEventListener,l=e.setTimeout,u=e.requestAnimationFrame||l,c=e.requestIdleCallback,d=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],g={},v=Array.prototype.forEach,y=function(e,t){return g[t]||(g[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),g[t].test(e.getAttribute("class")||"")&&g[t]},m=function(e,t){y(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},h=function(e,t){var n;(n=y(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},b=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&b(e,t),f.forEach(function(n){e[r](n,t)})},p=function(e,r,i,a,o){var s=t.createEvent("CustomEvent");return i||(i={}),i.instance=n,s.initCustomEvent(r,!a,!o,i),e.dispatchEvent(s),s},z=function(t,n){var i;!o&&(i=e.picturefill||r.pf)?i({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},A=function(e,t){return(getComputedStyle(e,null)||{})[t]},E=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},C=function(){var e,n,r=[],i=[],a=r,o=function(){var t=a;for(a=r.length?i:r,e=!0,n=!1;t.length;)t.shift()();e=!1},s=function(r,i){e&&!i?r.apply(this,arguments):(a.push(r),n||(n=!0,(t.hidden?l:u)(o)))};return s._lsFlush=o,s}(),L=function(e,t){return t?function(){C(e)}:function(){var t=this,n=arguments;C(function(){e.apply(t,n)})}},_=function(e){var t,n,r=function(){t=null,e()},i=function(){var e=a.now()-n;e<99?l(i,99-e):(c||r)(r)};return function(){n=a.now(),t||(t=l(i,99))}};!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in r=e.lazySizesConfig||e.lazysizesConfig||{},n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,l(function(){r.init&&S()})}();var M=function(){var o,u,f,g,E,M,S,x,N,k,T,O,P,j,W=/^img$/i,q=/^iframe$/i,B="onscroll"in e&&!/glebot/.test(navigator.userAgent),F=0,H=0,I=-1,R=function(e){H--,e&&e.target&&b(e.target,R),(!e||H<0||!e.target)&&(H=0)},D=function(e,n){var r,a=e,o="hidden"==A(t.body,"visibility")||"hidden"!=A(e,"visibility");for(x-=n,T+=n,N-=n,k+=n;o&&(a=a.offsetParent)&&a!=t.body&&a!=i;)(o=(A(a,"opacity")||1)>0)&&"visible"!=A(a,"overflow")&&(r=a.getBoundingClientRect(),o=k>r.left&&N<r.right&&T>r.top-1&&x<r.bottom+1);return o},$=function(){var e,a,s,l,c,d,f,v,y,m=n.elements;if((g=r.loadMode)&&H<8&&(e=m.length)){a=0,I++,null==P&&("expand"in r||(r.expand=i.clientHeight>500&&i.clientWidth>500?500:370),O=r.expand,P=O*r.expFactor),F<P&&H<1&&I>2&&g>2&&!t.hidden?(F=P,I=0):F=g>1&&I>1&&H<6?O:0;for(;a<e;a++)if(m[a]&&!m[a]._lazyRace)if(B)if((v=m[a].getAttribute("data-expand"))&&(d=1*v)||(d=F),y!==d&&(M=innerWidth+d*j,S=innerHeight+d,f=-1*d,y=d),s=m[a].getBoundingClientRect(),(T=s.bottom)>=f&&(x=s.top)<=S&&(k=s.right)>=f*j&&(N=s.left)<=M&&(T||k||N||x)&&(r.loadHidden||"hidden"!=A(m[a],"visibility"))&&(u&&H<3&&!v&&(g<3||I<4)||D(m[a],d))){if(X(m[a]),c=!0,H>9)break}else!c&&u&&!l&&H<4&&I<4&&g>2&&(o[0]||r.preloadAfterLoad)&&(o[0]||!v&&(T||k||N||x||"auto"!=m[a].getAttribute(r.sizesAttr)))&&(l=o[0]||m[a]);else X(m[a]);l&&!c&&X(l)}},J=function(e){var t,n=0,i=r.throttleDelay,o=r.ricTimeout,s=function(){t=!1,n=a.now(),e()},u=c&&o>49?function(){c(s,{timeout:o}),o!==r.ricTimeout&&(o=r.ricTimeout)}:L(function(){l(s)},!0);return function(e){var r;(e=!0===e)&&(o=33),t||(t=!0,(r=i-(a.now()-n))<0&&(r=0),e||r<9?u():l(u,r))}}($),G=function(e){m(e.target,r.loadedClass),h(e.target,r.loadingClass),b(e.target,Q),p(e.target,"lazyloaded")},K=L(G),Q=function(e){K({target:e.target})},U=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},V=L(function(e,t,n,i,a){var o,s,u,c,g,y;(g=p(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?m(e,r.autosizesClass):e.setAttribute("sizes",i)),s=e.getAttribute(r.srcsetAttr),o=e.getAttribute(r.srcAttr),a&&(u=e.parentNode,c=u&&d.test(u.nodeName||"")),y=t.firesLoad||"src"in e&&(s||o||c),g={target:e},y&&(b(e,R,!0),clearTimeout(f),f=l(R,2500),m(e,r.loadingClass),b(e,Q,!0)),c&&v.call(u.getElementsByTagName("source"),U),s?e.setAttribute("srcset",s):o&&!c&&(q.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,o):e.src=o),a&&(s||c)&&z(e,{src:o})),e._lazyRace&&delete e._lazyRace,h(e,r.lazyClass),C(function(){(!y||e.complete&&e.naturalWidth>1)&&(y?R(g):H--,G(g))},!0)}),X=function(e){var t,n=W.test(e.nodeName),i=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),a="auto"==i;(!a&&u||!n||!e.getAttribute("src")&&!e.srcset||e.complete||y(e,r.errorClass)||!y(e,r.lazyClass))&&(t=p(e,"lazyunveilread").detail,a&&w.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,H++,V(e,t,a,i,n))},Y=function(){if(!u)if(a.now()-E<999)l(Y,999);else{var e=_(function(){r.loadMode=3,J()});u=!0,r.loadMode=3,J(),s("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}};return{_:function(){E=a.now(),n.elements=t.getElementsByClassName(r.lazyClass),o=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),j=r.hFac,s("scroll",J,!0),s("resize",J,!0),e.MutationObserver?new MutationObserver(J).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i.addEventListener("DOMNodeInserted",J,!0),i.addEventListener("DOMAttrModified",J,!0),setInterval(J,999)),s("hashchange",J,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,J,!0)}),/d$|^c/.test(t.readyState)?Y():(s("load",Y),t.addEventListener("DOMContentLoaded",J),l(Y,2e4)),n.elements.length?($(),C._lsFlush()):J()},checkElems:J,unveil:X}}(),w=function(){var e,n=L(function(e,t,n,r){var i,a,o;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),d.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),a=0,o=i.length;a<o;a++)i[a].setAttribute("sizes",r);n.detail.dataAttr||z(e,n.detail)}),i=function(e,t,r){var i,a=e.parentNode;a&&(r=E(e,a,r),(i=p(e,"lazybeforesizes",{width:r,dataAttr:!!t})).defaultPrevented||(r=i.detail.width)&&r!==e._lazysizesWidth&&n(e,a,i,r))},a=_(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])});return{_:function(){e=t.getElementsByClassName(r.autosizesClass),s("resize",a)},checkElems:a,updateElem:i}}(),S=function(){S.i||(S.i=!0,w._(),M._())};return n={cfg:r,autoSizer:w,loader:M,init:S,uP:z,aC:m,rC:h,hC:y,fire:p,gW:E,rAF:C}}(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window)}]);