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
    "revision": "8bf2edbb589f5f84efa30b2de8664e20"
  },
  {
    "url": "about/index.html",
    "revision": "80b9b49ada8ceadc05cb16393ef152c7"
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
    "url": "assets/js/26.7e64285d.js",
    "revision": "caa823d7397639cfb63e8e7e2291b4d3"
  },
  {
    "url": "assets/js/27.a278505e.js",
    "revision": "36de13fb35bcb99c44ba092e5224dc13"
  },
  {
    "url": "assets/js/28.4e171b6e.js",
    "revision": "aa0d661702ae7149227b58ec07a49b54"
  },
  {
    "url": "assets/js/29.0135587d.js",
    "revision": "47dbeb68c2a1d83d85e353d5adb5dc87"
  },
  {
    "url": "assets/js/3.d381178a.js",
    "revision": "689b02dee1d7790a574e52ae32f9454c"
  },
  {
    "url": "assets/js/30.d649a6df.js",
    "revision": "43acfe116589fcadc702748daa1bee11"
  },
  {
    "url": "assets/js/4.7c749548.js",
    "revision": "32e8883ea507703c47d43872cda00df8"
  },
  {
    "url": "assets/js/5.4e8804cb.js",
    "revision": "e93c0daf6eff16b6dac332e13bcefd32"
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
    "url": "assets/js/app.69a1321e.js",
    "revision": "18cf6beb58aeab7a75d17cb380ed35a0"
  },
  {
    "url": "docker/CentOS7安装Docker.html",
    "revision": "e3b5415ae5124e7331ea504756548e46"
  },
  {
    "url": "docker/DockerFile.html",
    "revision": "69c346c0e4b6e7d30c6b109f22fa05b6"
  },
  {
    "url": "docker/Docker使用前提.html",
    "revision": "51bfb0163723d42caca730917429bd50"
  },
  {
    "url": "docker/Docker容器命令.html",
    "revision": "fd2a3f45417cfc363010871eff1fdef1"
  },
  {
    "url": "docker/Docker数据卷.html",
    "revision": "1c16d1fd3a839c37689323aca75c1871"
  },
  {
    "url": "docker/Docker网络配置.html",
    "revision": "21d4f7d63427140d422a0f3a813591fe"
  },
  {
    "url": "docker/Docker镜像命令.html",
    "revision": "7b2fcfaf1ba5deea4c84161f15852e88"
  },
  {
    "url": "docker/index.html",
    "revision": "efa01917143ef924a5fa3b0e6bf1d52c"
  },
  {
    "url": "docker/前世今生.html",
    "revision": "ec4e08276e20c41d603db050ebeae135"
  },
  {
    "url": "docker/待续.html",
    "revision": "8649385fd568389d56833f4f3deb6008"
  },
  {
    "url": "docker/简单使用Docker.html",
    "revision": "46214940aa057b3e05513a8b9015447a"
  },
  {
    "url": "docker/镜像制作.html",
    "revision": "e872dc9c9afed0f4eea0f3a208aa13d0"
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
    "revision": "04fbb8d4dfff5defc8c88902bb24d885"
  },
  {
    "url": "lvs/Cluster.html",
    "revision": "ea5bdffbbc4f8a62d793ac9d6398a679"
  },
  {
    "url": "lvs/index.html",
    "revision": "3cecff3fb4a3e5ef625ef12ec7d695b5"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "0b888a398df8e111e36cd7b328ddf10a"
  },
  {
    "url": "redis/index.html",
    "revision": "303aaece2e7c84cb9315aacd22c9a94b"
  },
  {
    "url": "redis/Redis哨兵.html",
    "revision": "8476be8885c63397f7f984e8c816f9f4"
  },
  {
    "url": "redis/主从复制.html",
    "revision": "d5883f78da1706179a15060c6743806e"
  },
  {
    "url": "redis/待续.html",
    "revision": "7bb63cc0b7e161460c3bdc86a6f7d810"
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
