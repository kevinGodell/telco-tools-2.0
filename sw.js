if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-a32bb80c"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"favicon.ico",revision:"b3645d19f95cd095d1e940fcb152d552"},{url:"images/bars.svg",revision:"5e9fe16918edf79e37d3cd7afea9b9f8"},{url:"images/cog.svg",revision:"8db53187ecfba9fa2a36378fb6c84e06"},{url:"images/equals.svg",revision:"9af95fcb127c17096ae7c3513d749cfa"},{url:"images/minus.svg",revision:"34a82cc58cef4934feb1b090d754d056"},{url:"images/pause.svg",revision:"31b7654bf5c122deacf4bec6c4a62029"},{url:"images/play.svg",revision:"1cc909e8daccf720d5ec3688694f4185"},{url:"images/plus-square.svg",revision:"3703a6722e42c61c004f2d7945d44d24"},{url:"images/plus.app.svg",revision:"a5f045022a641809841b8271f579c8ee"},{url:"images/plus.svg",revision:"be9a8c9e2c5b045fc26e11cdf6860c69"},{url:"images/share-alt.svg",revision:"e1687b6439ed47f1280e6e8044a1b6fa"},{url:"images/square.and.arrow.up.svg",revision:"72bb981c386244319bb44e17eaa03c54"},{url:"images/stop.svg",revision:"d4d69ca38b25f29e1f3ea2a4fad2666a"},{url:"images/times.svg",revision:"fe2100226016c7273b36a7ada271889b"},{url:"images/undo.svg",revision:"144aa79f1d0a593030d8a6a40a39bbc2"},{url:"index.html",revision:"1d096a5cd93aa6440fc32966a7e6ce22"},{url:"main.58f1a8251a7ed9c13b52.css",revision:"b17260f75f5d7a2e24884026b85bfa95"},{url:"main.58f1a8251a7ed9c13b52.css.map",revision:"d0cb96bc79b7c3c53edb4ec30754b9ca"},{url:"main.a0b69ca908f4e2c6e7e3.js",revision:"cee165cf5ee33a0e9bb7f0241b81a4a3"},{url:"main.a0b69ca908f4e2c6e7e3.js.LICENSE.txt",revision:"2dbf776ef75680b01010265ee885617b"},{url:"main.a0b69ca908f4e2c6e7e3.js.map",revision:"de4b9263810ad8df9101b00bcb5463c8"},{url:"manifest.e7704f2e2adebc6254225b7f5b38db4a.webmanifest",revision:"e7704f2e2adebc6254225b7f5b38db4a"},{url:"pwacompat.fb3758187fa7f2c7657a.js",revision:"d4989f26e78956f74631ec157cf11e8d"},{url:"pwacompat.fb3758187fa7f2c7657a.js.map",revision:"3b18c8508861d273ab9d0b47cb178abb"},{url:"standalone.html",revision:"75d514682070789e0a9eb31282c25d0e"},{url:"swregister.94b8c331835871504b49.js",revision:"dfc0af99b97d8b603cd99244f8cb793b"},{url:"swregister.94b8c331835871504b49.js.map",revision:"900690410421314a875a9009f0b8d376"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\.(?:woff|woff2)$/,new e.CacheFirst({cacheName:"fonts",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:png)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=sw.js.map
