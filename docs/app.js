!function(e){function t(t){for(var i,s,a=t[0],p=t[1],c=t[2],d=0,u=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(e[i]=p[i]);for(l&&l(t);u.length;)u.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var p=n[a];0!==r[p]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={1:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="./";var a=window.webpackJsonp=window.webpackJsonp||[],p=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=p;o.push([1,0]),n()}([,function(e,t,n){e.exports=n(3)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var i=n(0);var r=[function(e,t,n){return".center"+t+"{text-align:center}.link"+t+"{border:none;padding:10px;border-radius:5px;text-decoration:none;background-color:#ff6000;color:#fff;margin-left:33%;margin-right:33%;display:inline-block;margin-top:1em}.info"+t+"{color:#000;background-color:#e4f2f8;margin:auto;padding:15px 10px;text-align:left;width:300px;border-radius:5px}.code"+t+"{font-family:monospace}.container"+t+"{margin-top:30px}img"+t+"{max-width:150px}.greeting"+t+"{height:75px}"}];var o=[function(e,t,n){return".greet"+t+"{font-size:xx-large}.fade-fast"+t+"{opacity:0;animation:fade-in 1s}.fade-slow"+t+"{opacity:0;animation:fade-in 5s}.fade-medium"+t+"{opacity:0;animation:fade-in 2s}@keyframes fade-in{0%{opacity:0}35%{opacity:1}65%{opacity:1}to{opacity:0}}.hide"+t+"{opacity:0}"}];function s(e,t,n,i){const{d:r,h:o,b:s}=e,{_m0:a}=i;return[o("div",{className:t.animationClass,key:1,on:{animationend:a||(i._m0=s(t.handleAnimationEnd))}},[o("span",{classMap:{greet:!0},key:0},[r(t.greeting)])])]}var a=Object(i.registerTemplate)(s);s.stylesheets=[],o&&s.stylesheets.push.apply(s.stylesheets,o),s.stylesheetTokens={hostAttribute:"my-greeting-_greeting-host",shadowAttribute:"my-greeting-_greeting"};const p=["Hello","Bonjour","你好","Hola","Привет","こんにちは","Guten Tag","ጤና ይስጥልኝ","Ciao","नमस्ते","안녕하세요"],c={slow:"fade-slow",fast:"fade-fast",medium:"fade-medium"};class l extends i.LightningElement{constructor(...e){super(...e),this.animationSpeed="medium",this.index=0,this.isAnimating=!0}set speed(e){this.animationSpeed=c[e]?e:"medium",this.isAnimating=!0}get speed(){return this.animationSpeed}get greeting(){return p[this.index]}get animationClass(){return this.isAnimating?c[this.speed]:"hide"}handleAnimationEnd(){this.isAnimating=!1,this.index=(this.index+1)%p.length,setTimeout(()=>this.updateGreeting(),500)}updateGreeting(){this.isAnimating=!0}}Object(i.registerDecorators)(l,{publicProps:{speed:{config:3}},fields:["animationSpeed","index","isAnimating"]});var d=Object(i.registerComponent)(l,{tmpl:a});function u(e,t,n,i){const{c:r,h:o,t:s}=e;return[o("div",{classMap:{center:!0,greeting:!0},key:1},[r("my-greeting",d,{props:{speed:"medium"},key:0},[])]),o("div",{classMap:{center:!0},key:3},[o("img",{attrs:{src:"./resources/lwc.png"},key:2},[])]),o("div",{classMap:{center:!0},key:10},[o("div",{classMap:{container:!0},key:7},[o("p",{classMap:{info:!0},key:6},[s("Edit "),o("strong",{classMap:{code:!0},key:4},[s("src/modules/my/app/app.html")]),o("br",{key:5},[]),s("and save for live reload.")])]),o("div",{key:9},[o("a",{classMap:{link:!0},attrs:{href:"https://lwc.dev",target:"_blank"},key:8},[s("Learn LWC")])])])]}var f=Object(i.registerTemplate)(u);u.stylesheets=[],r&&u.stylesheets.push.apply(u.stylesheets,r),u.stylesheetTokens={hostAttribute:"my-app-_app-host",shadowAttribute:"my-app-_app"};class g extends i.LightningElement{}var m=Object(i.registerComponent)(g,{tmpl:f});const h={"Service Worker":"serviceWorker"in navigator};Object.keys(h).some(e=>!h[e])?function(){const{outdated:e}=window;e.style.display="unset";let t="This browser doesn't support all the required features";t+="<ul>";for(const[e,n]of Object.entries(h))t+=`<li><b>${e}:<b> ${n?"✅":"❌"}</li>`;t+="</ul>",e.querySelector(".unsupported_message").innerHTML=t}():(customElements.define("my-app",Object(i.buildCustomElementConstructor)(m)),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js"),console.log("Service worker registered")}))}]);