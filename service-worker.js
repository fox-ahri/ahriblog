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
    "revision": "14b5018ad77593433fdc63e5b5161b2d"
  },
  {
    "url": "about/index.html",
    "revision": "5b5d69685665a9535614d4f3fe158356"
  },
  {
    "url": "assets/css/0.styles.4b83d720.css",
    "revision": "dee1c19a78662de075039a8210097b66"
  },
  {
    "url": "assets/img/1.6ceae986.png",
    "revision": "6ceae98669b506db2851cf6b343ee59b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0d68678d.js",
    "revision": "aabc7ec6b93da589c5bd2aab8357d923"
  },
  {
    "url": "assets/js/11.e9a617aa.js",
    "revision": "33bb4bd6035c9f3bb4a20708df8c693a"
  },
  {
    "url": "assets/js/12.a2b5e066.js",
    "revision": "db839abf8c245abb150a22920531ad14"
  },
  {
    "url": "assets/js/13.e67d5511.js",
    "revision": "f21202edd9ef158aeef93a6147261683"
  },
  {
    "url": "assets/js/14.60564777.js",
    "revision": "b2a6f2a8d3a3f1b75f0970a3cce70c69"
  },
  {
    "url": "assets/js/15.86614932.js",
    "revision": "01d1836835e68b6da313202b71d23799"
  },
  {
    "url": "assets/js/16.1a47d629.js",
    "revision": "28aa37d87a9f8102be5e78a61da67893"
  },
  {
    "url": "assets/js/17.bb0aa31b.js",
    "revision": "05edc9e0cf2735ea16f2223596e6bc97"
  },
  {
    "url": "assets/js/18.21e1aed6.js",
    "revision": "67a7a1aaf7488435d487eca28ae515fd"
  },
  {
    "url": "assets/js/19.c709f2ba.js",
    "revision": "789277cfbb4c4661ce3adc397d45a651"
  },
  {
    "url": "assets/js/2.4cad4d5d.js",
    "revision": "7016adb14ccdac15234466b0d74f706f"
  },
  {
    "url": "assets/js/20.2f4eea85.js",
    "revision": "63ae40d1984206edd697f66c9be442ef"
  },
  {
    "url": "assets/js/21.f4fc292e.js",
    "revision": "acc4110d628f03bc10c7c19814725540"
  },
  {
    "url": "assets/js/3.9adee656.js",
    "revision": "43a2ca397f34453e22cbbb03239b16ea"
  },
  {
    "url": "assets/js/4.ff301f7b.js",
    "revision": "a612920f4195b1a82cfdacf0339a391a"
  },
  {
    "url": "assets/js/5.ab83d4ec.js",
    "revision": "b556b7f1bdaea297672ec42b3695500b"
  },
  {
    "url": "assets/js/6.6c97654b.js",
    "revision": "25e2f9a51680d94b3cccc1b903a5b591"
  },
  {
    "url": "assets/js/7.63972d16.js",
    "revision": "2d2177e6c86229dc79a6f90a3e70fbd6"
  },
  {
    "url": "assets/js/8.31176502.js",
    "revision": "feaa0e45cf2e0152b92ee15f25701aee"
  },
  {
    "url": "assets/js/9.cdfd327c.js",
    "revision": "9651a9ae3a7d137d09a51caa4efc5ecb"
  },
  {
    "url": "assets/js/app.12b15a81.js",
    "revision": "2b04be97482bc22a93bb8168059254c2"
  },
  {
    "url": "docker/CentOS7安装.html",
    "revision": "ab79650b7036ab7c26ac3bcf307d75e9"
  },
  {
    "url": "docker/Docker使用前提.html",
    "revision": "6a540766203cb7582fe018fb179e419c"
  },
  {
    "url": "docker/Docker容器命令.html",
    "revision": "eaac64b84aaf8688d2779f5d55e102f6"
  },
  {
    "url": "docker/Docker镜像命令.html",
    "revision": "ad55a88b04bf400460ace2a09b4c6932"
  },
  {
    "url": "docker/index.html",
    "revision": "035ec56432a06bd70ee3d6a5a83b20eb"
  },
  {
    "url": "docker/前世今生.html",
    "revision": "5d7327ab3e036efec8277bb60cf20acb"
  },
  {
    "url": "docker/待续.html",
    "revision": "f40a82b90873869290c59847700941d2"
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
    "revision": "d78f8c130074d015bc26e494d5fd14ff"
  },
  {
    "url": "lvs/Cluster.html",
    "revision": "9e676f2f4b56e72ecd9701c2228b76cb"
  },
  {
    "url": "lvs/index.html",
    "revision": "b38bd165c4cb6c263355c203a110af48"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "f643b40a3348fc77a9c0f6129bf2ffd8"
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
