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
    "revision": "82a9bff66dbe2c0481e19238654ae955"
  },
  {
    "url": "about/index.html",
    "revision": "6099f620da81bf40e0798c9e66e1c55a"
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
    "url": "assets/img/2.71af08a2.png",
    "revision": "71af08a272e1eba2017822e57afa9540"
  },
  {
    "url": "assets/img/3.03655da0.png",
    "revision": "03655da0b22fecc55bfee3e359556e17"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f323af45.js",
    "revision": "8a9b641da2bafd600df3c4ced86653e3"
  },
  {
    "url": "assets/js/11.463803dc.js",
    "revision": "cdba4666efed3cdc291950f6a65167c0"
  },
  {
    "url": "assets/js/12.45b2659f.js",
    "revision": "92ac946e1932aad20f7e3f5661b64185"
  },
  {
    "url": "assets/js/13.3626aeb8.js",
    "revision": "0823cea9643ab6cc1c6f7e9c4a74fd72"
  },
  {
    "url": "assets/js/14.62f48555.js",
    "revision": "affa903a13b40384aa5fd267ce38e309"
  },
  {
    "url": "assets/js/15.d9b57797.js",
    "revision": "982d880d3eeef9a82eaaea7611d2213e"
  },
  {
    "url": "assets/js/16.6042711a.js",
    "revision": "8bee1151556f3d07d0cd4668d97b027d"
  },
  {
    "url": "assets/js/17.822bf21c.js",
    "revision": "400f1197d99324010716f7c9cd2ff3f2"
  },
  {
    "url": "assets/js/18.33fcaabb.js",
    "revision": "d4c7e27cac3e2d73705ae0464896a44e"
  },
  {
    "url": "assets/js/19.eb495753.js",
    "revision": "e80a41af8f9543e9ed2ee405c91d2978"
  },
  {
    "url": "assets/js/2.7116c597.js",
    "revision": "5050ba4bb341080563b85def9a61cf0b"
  },
  {
    "url": "assets/js/20.3c7237a8.js",
    "revision": "2cd0216acd0d4829d577ab1d6b4ad078"
  },
  {
    "url": "assets/js/21.99cf5a9b.js",
    "revision": "19bcc87c09777482bd5f93d2e6476e01"
  },
  {
    "url": "assets/js/22.4f5f05d8.js",
    "revision": "5cc1f65d38a0be567c33505a680de384"
  },
  {
    "url": "assets/js/23.5a840ad3.js",
    "revision": "2f9aa8ad3bce818007b7a22bb7609cd9"
  },
  {
    "url": "assets/js/3.427fbdac.js",
    "revision": "a189363731c2f2aa908a14ace3376328"
  },
  {
    "url": "assets/js/4.6dadb412.js",
    "revision": "4ea4457a6e68a95ead6a4a405b7d0943"
  },
  {
    "url": "assets/js/5.c6577d40.js",
    "revision": "bd7f2e74307cce258fd9a6c57ecd700a"
  },
  {
    "url": "assets/js/6.28b27e9a.js",
    "revision": "b949ca8163442b8adf549e34e4b49fc3"
  },
  {
    "url": "assets/js/7.50e271b7.js",
    "revision": "f0c57af8e69fba531b6af53a31733afc"
  },
  {
    "url": "assets/js/8.1231dc5e.js",
    "revision": "c4b8b4e3dc891cb94f4bde67f0800cb8"
  },
  {
    "url": "assets/js/9.5e8b85ab.js",
    "revision": "49dc5b19a0e84cfd008c40d9cd3caa81"
  },
  {
    "url": "assets/js/app.60ef3124.js",
    "revision": "da3e0f507333f573eccb83fff38efa4e"
  },
  {
    "url": "docker/CentOS7安装.html",
    "revision": "1d612315cbddb94caf4490acb4eedc8f"
  },
  {
    "url": "docker/Docker使用前提.html",
    "revision": "3a7021f8afbab8190e541c9010193d0e"
  },
  {
    "url": "docker/Docker容器命令.html",
    "revision": "a6e16b4d189dc17a10ed7104863b87d9"
  },
  {
    "url": "docker/Docker数据卷.html",
    "revision": "dc17db4c9089ecee1dd371814df20837"
  },
  {
    "url": "docker/Docker网络配置.html",
    "revision": "37b2f1e40085c52c915b64241e10e583"
  },
  {
    "url": "docker/Docker镜像命令.html",
    "revision": "eedf478c20b5728c59f6b91c07e5891c"
  },
  {
    "url": "docker/index.html",
    "revision": "b682c6d19f7ad961816d508eaf8fbcf8"
  },
  {
    "url": "docker/前世今生.html",
    "revision": "f3d909c1ee614db43538753b5353ca16"
  },
  {
    "url": "docker/待续.html",
    "revision": "63e0ad747098c60424fef2964db2f26d"
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
    "revision": "34c6e39ad996e65d6bd2f2e3153670c0"
  },
  {
    "url": "lvs/Cluster.html",
    "revision": "a6a9dea55624778ea6121a71769b22e3"
  },
  {
    "url": "lvs/index.html",
    "revision": "5bfd60b22c22b624874bd57745591d41"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "9b9d6a698081cf5a4489652abc7b25de"
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
