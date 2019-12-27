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
    "revision": "dc2fce85150214fdc8b70a0980b4e07e"
  },
  {
    "url": "about/index.html",
    "revision": "5ae38fce64b38d8a069f56921c4a5c12"
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
    "url": "assets/img/4.c0b487ea.png",
    "revision": "c0b487ea9b197952aff45349dd1dd30e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3f5f0b53.js",
    "revision": "5405ee1859676b2b0d13199b2609c5e9"
  },
  {
    "url": "assets/js/11.aafa0ed8.js",
    "revision": "5270f1e0c5e12df5859b564359912621"
  },
  {
    "url": "assets/js/12.4d9b9c68.js",
    "revision": "048b70945949dec3f89dfc177f657873"
  },
  {
    "url": "assets/js/13.37921a12.js",
    "revision": "7150bc50885d4a3176cf0d91b7bbec4f"
  },
  {
    "url": "assets/js/14.3fa46242.js",
    "revision": "1435f8a8bacd6a74b0ba1a972ab9bd35"
  },
  {
    "url": "assets/js/15.0cbd0a4f.js",
    "revision": "246e4ea27dbfdefb34c8a995a7ffdcbf"
  },
  {
    "url": "assets/js/16.39483ec5.js",
    "revision": "38f23fd59408f15992db05b4f7d24ea3"
  },
  {
    "url": "assets/js/17.9213957c.js",
    "revision": "f868dcaa6b8fbbad0079c580644e70bf"
  },
  {
    "url": "assets/js/18.87038687.js",
    "revision": "90e49184c8a6afe3d85014439fae79bb"
  },
  {
    "url": "assets/js/19.21ce4af4.js",
    "revision": "6b9eb4c4bfba6069e2b16438cade864a"
  },
  {
    "url": "assets/js/2.ab27360f.js",
    "revision": "48309e38e5bc4a24b0e269b28d841d83"
  },
  {
    "url": "assets/js/20.d44fc23f.js",
    "revision": "de51877bcebd6322fb71d39cae5e8614"
  },
  {
    "url": "assets/js/21.5c8eb6d8.js",
    "revision": "d4520e87cbae49725ac5bed70962fd7b"
  },
  {
    "url": "assets/js/22.38dca302.js",
    "revision": "a5c0705d18d089054cf97cb7276530fd"
  },
  {
    "url": "assets/js/23.c1adfca2.js",
    "revision": "edbd040417c276903195a24a73bdbfaa"
  },
  {
    "url": "assets/js/24.30802367.js",
    "revision": "d430c3d1ef59b597fbc0d3bb173a6efc"
  },
  {
    "url": "assets/js/3.0b306b57.js",
    "revision": "cfcbb330ef057e69520f622f13eae30a"
  },
  {
    "url": "assets/js/4.7c749548.js",
    "revision": "32e8883ea507703c47d43872cda00df8"
  },
  {
    "url": "assets/js/5.1334a51f.js",
    "revision": "80c64a5fc1221a1cf9d808781c531915"
  },
  {
    "url": "assets/js/6.bc9f15e4.js",
    "revision": "0a19633c3aaa332e0052468581d7eb91"
  },
  {
    "url": "assets/js/7.334e8549.js",
    "revision": "46705efcf34d2685aa2323a3ea314e0f"
  },
  {
    "url": "assets/js/8.510340ec.js",
    "revision": "cf5898cfd1dd089a64448f66b910c857"
  },
  {
    "url": "assets/js/9.54cff6f9.js",
    "revision": "b3ac67138dd7529c0097cfa837f426c2"
  },
  {
    "url": "assets/js/app.c4fafaae.js",
    "revision": "ef3e9cccf243831752440febe5c6f93e"
  },
  {
    "url": "docker/CentOS7安装.html",
    "revision": "e2c901c526955bbcb40b56e01dcf8062"
  },
  {
    "url": "docker/Docker使用前提.html",
    "revision": "b81527e759ca25814e6ac411e46229a1"
  },
  {
    "url": "docker/Docker容器命令.html",
    "revision": "f268f4de2fd7b5b779fbd50aae6d32d7"
  },
  {
    "url": "docker/Docker数据卷.html",
    "revision": "34712e4175885ac067f4b65b28bd8151"
  },
  {
    "url": "docker/Docker网络配置.html",
    "revision": "1c059f4b39fc4d7d8bb987a20f5a42d2"
  },
  {
    "url": "docker/Docker镜像命令.html",
    "revision": "7ab3ff94592d93364aeaf1f12a6de8b1"
  },
  {
    "url": "docker/index.html",
    "revision": "918fd6b1fd1bc7997b1cf120713137db"
  },
  {
    "url": "docker/前世今生.html",
    "revision": "4269c9e4683a336d989d2b166dd879cb"
  },
  {
    "url": "docker/待续.html",
    "revision": "bd0f3b6247123e668d40ec7426aab32c"
  },
  {
    "url": "docker/简单使用Docker.html",
    "revision": "80e7360814660b070656ee77c3764cff"
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
    "revision": "d1c7f7cd7c1be353bacf1276d43b35da"
  },
  {
    "url": "lvs/Cluster.html",
    "revision": "2b5c9201b43735112cada6f4f6cea2e0"
  },
  {
    "url": "lvs/index.html",
    "revision": "6e605c027228d048f45a8f0baf542afd"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "399d3aa53380de99b957cbd4a0fd10ce"
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
