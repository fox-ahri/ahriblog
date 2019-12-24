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
    "revision": "524788a038aebc6a6faddfa6b52af8a1"
  },
  {
    "url": "about/index.html",
    "revision": "9b431a4152884cabef60d776be9c50fa"
  },
  {
    "url": "assets/css/0.styles.2e762081.css",
    "revision": "d86be810eb2443057fda2655d6f90734"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.84fc0a13.js",
    "revision": "419bb338bc0d3c1794121c295dbc2c7e"
  },
  {
    "url": "assets/js/11.d287be24.js",
    "revision": "8af9a29970ca3c369cd7815a73cbaa3a"
  },
  {
    "url": "assets/js/12.7e40e565.js",
    "revision": "c9481b3219b152208b311d20bc919d49"
  },
  {
    "url": "assets/js/13.b99c3ad6.js",
    "revision": "51c1c5ed8630d3e38bb28262bdbda8c1"
  },
  {
    "url": "assets/js/14.5459dce3.js",
    "revision": "2f0a572e531daf320e410807608de31e"
  },
  {
    "url": "assets/js/2.80e0bd04.js",
    "revision": "8792a83b615f975f26f9271f98508f09"
  },
  {
    "url": "assets/js/3.c2ef657e.js",
    "revision": "79d683b5a9e3222228a2096e4bafc787"
  },
  {
    "url": "assets/js/4.e1a1b51b.js",
    "revision": "f95af45ef29280647e644fc5a26ee33f"
  },
  {
    "url": "assets/js/5.df6ba0eb.js",
    "revision": "2091b10ec1d3b05be25d6795b863b5c9"
  },
  {
    "url": "assets/js/6.0d99a96c.js",
    "revision": "766f1fb17b44f6e447a12a6984f60fa0"
  },
  {
    "url": "assets/js/7.f6b6c4c4.js",
    "revision": "3f9c617e14120f9310c76051328ed37a"
  },
  {
    "url": "assets/js/8.6df8080f.js",
    "revision": "bedc5b2544deedb94ce2c6d2105dab9a"
  },
  {
    "url": "assets/js/9.56ff7c55.js",
    "revision": "4a849995cbdbb1172312f2f234232804"
  },
  {
    "url": "assets/js/app.c5f7ef1a.js",
    "revision": "481c0b5d0e76069e83bfab17adbfe1a9"
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
    "revision": "6c4655da350d1c15c5e753a18db7866f"
  },
  {
    "url": "lvs/Cluster.html",
    "revision": "4a71c58659d9adbfaeaa35b9b1deab62"
  },
  {
    "url": "lvs/index.html",
    "revision": "41965270747dc0330cd53218fbc20453"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "2292e75105a325fc5b8bfdd0bcd2645d"
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
