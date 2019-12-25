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
    "revision": "1d6cf2eced186c2d51ae7444cefaf76e"
  },
  {
    "url": "about/index.html",
    "revision": "ab36f873f893dd42cd145c0e332cfd1d"
  },
  {
    "url": "assets/css/0.styles.04a09c37.css",
    "revision": "b66cd794be35d0df55f9336284f8b0f7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0c2e70e5.js",
    "revision": "483212572aa7e98bb1388408eca1d0ec"
  },
  {
    "url": "assets/js/11.e12fb755.js",
    "revision": "5e484227c8b946ffc59300d3c822a34e"
  },
  {
    "url": "assets/js/12.cfb8f400.js",
    "revision": "708cac4df89cf13857ca1c149b7dfed7"
  },
  {
    "url": "assets/js/13.a9adb3a7.js",
    "revision": "51c1c5ed8630d3e38bb28262bdbda8c1"
  },
  {
    "url": "assets/js/14.c873ec36.js",
    "revision": "5770c2a0a3919a896181784b26d198a1"
  },
  {
    "url": "assets/js/2.1f57f005.js",
    "revision": "5a5222d2025ae2ecc769964003b6e648"
  },
  {
    "url": "assets/js/3.8cf6c9f4.js",
    "revision": "22d93927a23d5fddba270d01e11059c6"
  },
  {
    "url": "assets/js/4.6af757ea.js",
    "revision": "538b25a62d9c50b5eda129f2e245db2c"
  },
  {
    "url": "assets/js/5.9cbf9b14.js",
    "revision": "5d844c045c2991917353295173e2b0b2"
  },
  {
    "url": "assets/js/6.84bb798c.js",
    "revision": "f2596dd34893206d0cc8d4b0bd0bde63"
  },
  {
    "url": "assets/js/7.f6b6c4c4.js",
    "revision": "3f9c617e14120f9310c76051328ed37a"
  },
  {
    "url": "assets/js/8.2cb9ac65.js",
    "revision": "6e855c600102840e6091c7ecee035c29"
  },
  {
    "url": "assets/js/9.0429bb65.js",
    "revision": "200d6064eb6fe759bb8cd799d240a22d"
  },
  {
    "url": "assets/js/app.9215df23.js",
    "revision": "88a3b4b9e48fba526dd480527632aeab"
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
    "revision": "79beb0a9aa6c4ac8318c8581cdd3a3b8"
  },
  {
    "url": "lvs/Cluster.html",
    "revision": "abb3c111f2fd1829aab865d084b8d698"
  },
  {
    "url": "lvs/index.html",
    "revision": "f9c1b960e48f66779485f4a5d320ade6"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "2abb61c8516be384b0f2cff255a4710b"
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
