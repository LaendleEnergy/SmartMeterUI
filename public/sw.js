if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"383dc2f10be2e31b5e4ba5ef9c0158ff"},{url:"/_next/static/5WUwVQaxZYW96pR2WrOJ8/_buildManifest.js",revision:"15e671aaf852983909bd2fe1385b56f4"},{url:"/_next/static/5WUwVQaxZYW96pR2WrOJ8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/125-99301377c066a74e.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/177-5af7b84a32910477.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/446-b837bffa45f52df6.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/472-b894973ec484422d.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/710-a89a21cc868d3e11.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/793-9133e556c7c53734.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/9081a741-0e09d0a5dcf47798.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/99-4f4ea887082537bf.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/_not-found-afc1f64fd27607b6.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/layout-130146a63be3ded4.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/page-5b347e7d8dad19fe.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/pages/devices-overview/page-a7f453518ac1bd3f.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/pages/devices/page-78974faaf87570db.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/pages/energy-consumption/page-4ed2d1209c98e191.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/pages/energy-saving/page-442f0189497f0993.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/pages/errors/error/page-0ed1c3516e0d0e0b.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/pages/errors/notfound/page-947ed3d49619a5c8.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/pages/household/page-ef743eae53245686.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/pages/invitation/page-4b773cd39812b4af.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/pages/logout/page-ca74ce67d3d87f06.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/pages/members/page-8bc71e72c1646398.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/pages/personal-information/page-3ef1ebec8c2d35d1.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/pages/register-household/page-4ab8d32e76f22f75.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/app/pages/rewards/page-fd90943b64c8f5e4.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/bc9c3264-e2a42dd4f425210e.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/fd9d1056-3cab36680ee3ac88.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/main-541cf4a46b84fbe6.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/main-app-1aaa93d9b030f683.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/pages/_app-451d704a741dc8a8.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/pages/_error-d6885ef27f2c5e3d.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-70aad002b3850414.js",revision:"5WUwVQaxZYW96pR2WrOJ8"},{url:"/_next/static/css/02409508432e1dfb.css",revision:"02409508432e1dfb"},{url:"/_next/static/css/bac0fb0e0d11e821.css",revision:"bac0fb0e0d11e821"},{url:"/_next/static/css/d6521bc7f9475cc9.css",revision:"d6521bc7f9475cc9"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/logo.6807f369.png",revision:"d965d7318ebe6730326fd89883447bc2"},{url:"/logo.png",revision:"747f52a327904e7377ac6645990f98fd"},{url:"/manifest.json",revision:"8b4bb61c8cabe69f954c34b10121a6f2"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/pwa-icon.png",revision:"afd173f22b82187e46094b7dc33c09b8"},{url:"/screenshot.png",revision:"8ea15f8533919ce22a0c2ef4278e6a85"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
