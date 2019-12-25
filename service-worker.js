/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8557296f03a3f4b38508758b55b56e6d"
  },
  {
    "url": "about/index.html",
    "revision": "73364d8556f79632e18fb8c457abf763"
  },
  {
    "url": "assets/css/0.styles.1839cec8.css",
    "revision": "ca416c421eed1cfac75694f638b08de6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3adad3d4.js",
    "revision": "4bd4aa56a5139b2e3011a797815e5e70"
  },
  {
    "url": "assets/js/11.16589043.js",
    "revision": "b74ed633948676e9a69435aebcad6f92"
  },
  {
    "url": "assets/js/12.4b664c24.js",
    "revision": "6e83b97f0db7aad8dec6d8efcb9f78d8"
  },
  {
    "url": "assets/js/13.b516cb10.js",
    "revision": "ee624d5a69359450a6fcbcb2294daea3"
  },
  {
    "url": "assets/js/14.5459dce3.js",
    "revision": "2f0a572e531daf320e410807608de31e"
  },
  {
    "url": "assets/js/2.b03e50b8.js",
    "revision": "9719128325a533c9a2247f069a14ccaf"
  },
  {
    "url": "assets/js/3.fe7c9b9b.js",
    "revision": "f96f87b67464b29e2b50e78dfb7c8c1d"
  },
  {
    "url": "assets/js/4.22b5d4df.js",
    "revision": "1da7b710e79c1aa608f29daf93d41802"
  },
  {
    "url": "assets/js/5.7c225ee6.js",
    "revision": "11cb2e93e1fab25e3771cb4ce5b43723"
  },
  {
    "url": "assets/js/6.8dd47d61.js",
    "revision": "f77eac51f183db32c071baade5637a54"
  },
  {
    "url": "assets/js/7.876268c4.js",
    "revision": "102e1fc83949a504eae71a2d9af3ca21"
  },
  {
    "url": "assets/js/8.9832ca4c.js",
    "revision": "1d9859b4bc082d99c19d09bd47ed48ba"
  },
  {
    "url": "assets/js/9.fb55a946.js",
    "revision": "2034eeb4f92683a68c23ae68d41c4e89"
  },
  {
    "url": "assets/js/app.22e67fd9.js",
    "revision": "09fd9a7910e353552a7df3271e1d7a1c"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "72cd749ad64a693d5b611bf72eadabc4"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "1e1616ff17d788fe3c55532734a4fa55"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "7089bc93de4729a56af4564c6e2771fa"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "8ee0250361ec10586747d4a3c51b9fe6"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "e433c243e5c7f8e50414022e479a958a"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "267b593dd8b57579e111d67f61388cc8"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "42005153f689347a6d4c8ca0c0111a7d"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "5577ddf35667e4bfd48b98d5e1829c5c"
  },
  {
    "url": "index.html",
    "revision": "cc0d9b05c6fd52373923e807683d933f"
  },
  {
    "url": "lvs/Cluster.html",
    "revision": "2c1c794059fc5d4dd9b390d2f4aeec85"
  },
  {
    "url": "lvs/index.html",
    "revision": "ac2f6b225e4943a2d19361351227d14f"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "65848526ba46f0226a988daf35bef906"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
