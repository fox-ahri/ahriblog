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
    "revision": "7fab5eb429a23d7df4a86f6126a961dc"
  },
  {
    "url": "about/index.html",
    "revision": "8a9397063320bc3c81f680cd5d842737"
  },
  {
    "url": "assets/css/0.styles.d8d244c0.css",
    "revision": "8bcff3e252a3b8a9574b18a2824732a5"
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
    "url": "assets/js/14.ea5d16a1.js",
    "revision": "1435f8a8bacd6a74b0ba1a972ab9bd35"
  },
  {
    "url": "assets/js/15.1b222eae.js",
    "revision": "0f8641675a8015271d1e26a40b063152"
  },
  {
    "url": "assets/js/16.60483bfe.js",
    "revision": "28ff8ac30b2193b1500d3eecc9955f86"
  },
  {
    "url": "assets/js/17.2a8ee1ab.js",
    "revision": "a38a6329986ee96224cb669f49c08b94"
  },
  {
    "url": "assets/js/18.c3770b77.js",
    "revision": "2bb7d165e6c2a4c5a3dd43510ff86bde"
  },
  {
    "url": "assets/js/19.0ac8ca5a.js",
    "revision": "a8f00abdba0741e7818c8b88f835cde5"
  },
  {
    "url": "assets/js/2.ab27360f.js",
    "revision": "48309e38e5bc4a24b0e269b28d841d83"
  },
  {
    "url": "assets/js/20.cbdbc3d1.js",
    "revision": "727521c88a734e6b626ab8358d1aad31"
  },
  {
    "url": "assets/js/21.00fea246.js",
    "revision": "21cdd4d5af88f0878f6e90bf914715e5"
  },
  {
    "url": "assets/js/22.e969902d.js",
    "revision": "2350f443af6ce57d769218f31431b809"
  },
  {
    "url": "assets/js/23.a2924b0d.js",
    "revision": "249b3e9cdb65c690bad72f779dd65bd9"
  },
  {
    "url": "assets/js/24.e79a2da2.js",
    "revision": "c0defef9a6a227009cf4066a4fa2d264"
  },
  {
    "url": "assets/js/25.7401b034.js",
    "revision": "05637f8715045b870e93c1f328c0d537"
  },
  {
    "url": "assets/js/26.38edd9f0.js",
    "revision": "11fbdeed60770b4efd1a5f0aa5c46566"
  },
  {
    "url": "assets/js/27.6e515c75.js",
    "revision": "dbaa4a7d9efc4b7c405188332f6197a2"
  },
  {
    "url": "assets/js/28.4e987543.js",
    "revision": "4f257d2cc255895a81e488ded1ded09d"
  },
  {
    "url": "assets/js/29.6a4bac99.js",
    "revision": "e6f367e5800c9decd517a2683a24974e"
  },
  {
    "url": "assets/js/3.d381178a.js",
    "revision": "689b02dee1d7790a574e52ae32f9454c"
  },
  {
    "url": "assets/js/4.7c749548.js",
    "revision": "32e8883ea507703c47d43872cda00df8"
  },
  {
    "url": "assets/js/5.181f36e0.js",
    "revision": "40ac46868c8f30f5e5e75418faf2691c"
  },
  {
    "url": "assets/js/6.99b7b4e4.js",
    "revision": "b0666581be7768c3d5b71d4e0dd44470"
  },
  {
    "url": "assets/js/7.334e8549.js",
    "revision": "46705efcf34d2685aa2323a3ea314e0f"
  },
  {
    "url": "assets/js/8.ad45a243.js",
    "revision": "1a7d419a51ea5304f2b5797d2e2c1928"
  },
  {
    "url": "assets/js/9.a1c97e1e.js",
    "revision": "62dbd5f611c3ea2deef5d74ebc74b1a7"
  },
  {
    "url": "assets/js/app.1b546f50.js",
    "revision": "6fbb4c9daf06be07559920cb23dea9e6"
  },
  {
    "url": "docker/CentOS7安装Docker.html",
    "revision": "0388f4c1b834b0a3fc7d329154e3c1c4"
  },
  {
    "url": "docker/DockerFile.html",
    "revision": "e7c60765047ef4f1668e54afcf1b34d7"
  },
  {
    "url": "docker/Docker使用前提.html",
    "revision": "571483b77b072cdcbcac88ea9ce4b444"
  },
  {
    "url": "docker/Docker容器命令.html",
    "revision": "d0b8522b6d91cce87b467daba61d83ad"
  },
  {
    "url": "docker/Docker数据卷.html",
    "revision": "377ba1bd20d1b2b90b91adebcfe99ff2"
  },
  {
    "url": "docker/Docker网络配置.html",
    "revision": "0d0afb315907ca479c60d8b8197ddce5"
  },
  {
    "url": "docker/Docker镜像命令.html",
    "revision": "8b6354fbe7958b8cbe654d2fde3f8c4f"
  },
  {
    "url": "docker/index.html",
    "revision": "d26407c723693019b6580da34ee897aa"
  },
  {
    "url": "docker/前世今生.html",
    "revision": "dcb07f8521b6fd04544cf6ad90c87a59"
  },
  {
    "url": "docker/待续.html",
    "revision": "c4057ffae81c6e3310586caf607f1226"
  },
  {
    "url": "docker/简单使用Docker.html",
    "revision": "e95a663e504e98745055cb9420cb7636"
  },
  {
    "url": "docker/镜像制作.html",
    "revision": "ee9be3072ecf007732839a63eeb08bca"
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
    "revision": "3bd01f979c007ec5839e91a495b84178"
  },
  {
    "url": "lvs/Cluster.html",
    "revision": "a2c51b92b6003ed8d7d05ac5661b4a5f"
  },
  {
    "url": "lvs/index.html",
    "revision": "c99e428da05f066b9fbd4e3df4d61195"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "88c27235b93e82a5bb01c4f8e303ea9b"
  },
  {
    "url": "redis/index.html",
    "revision": "099e385e4c97f8a3d915bc37ef748616"
  },
  {
    "url": "redis/主从复制.html",
    "revision": "8c63452a157975c2980d77aad8167746"
  },
  {
    "url": "redis/待续.html",
    "revision": "907b3a585ec238e7b64d1ca3bf1d8a3e"
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
