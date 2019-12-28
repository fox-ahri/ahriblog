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
    "revision": "1f39fbdd25d28578b886b05df61e1c03"
  },
  {
    "url": "about/index.html",
    "revision": "bbf236832c562885cf181a39c38b931a"
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
    "url": "assets/js/19.1c26aa25.js",
    "revision": "208f50a0a3508e8513a623b5057b50c6"
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
    "url": "assets/js/26.480c12e2.js",
    "revision": "5cd89e27ce2a8149b4f4a7caaef210a2"
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
    "url": "assets/js/5.bc39b3b7.js",
    "revision": "c08df4b947765bf052a20b5f3df2cdaa"
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
    "url": "assets/js/app.639fb992.js",
    "revision": "8265afc64fd4d32f45532edcab242fd6"
  },
  {
    "url": "docker/CentOS7安装Docker.html",
    "revision": "f174868fcf193a37d2730d960510aedc"
  },
  {
    "url": "docker/DockerFile.html",
    "revision": "0703df120ec20d09b8780f47b8d0909c"
  },
  {
    "url": "docker/Docker使用前提.html",
    "revision": "8df865a36d067ecd742928797be51e3b"
  },
  {
    "url": "docker/Docker容器命令.html",
    "revision": "e8bb6df9858d4587193c59ad45c32366"
  },
  {
    "url": "docker/Docker数据卷.html",
    "revision": "7cf9ffe9568aca50b4977f767f371205"
  },
  {
    "url": "docker/Docker网络配置.html",
    "revision": "a5506dd9134455c8af1e7f2b883bd4e0"
  },
  {
    "url": "docker/Docker镜像命令.html",
    "revision": "95c02275a02411709dda9cf6193f7e3e"
  },
  {
    "url": "docker/index.html",
    "revision": "6b528919af297c94b6e3114437e43780"
  },
  {
    "url": "docker/前世今生.html",
    "revision": "b49cf487a4b0b14c50daf87784b38c47"
  },
  {
    "url": "docker/待续.html",
    "revision": "65cb3a0ea3032d1f82dd35ee5f2b5a53"
  },
  {
    "url": "docker/简单使用Docker.html",
    "revision": "fb4361b0a16beacdd250768c889ce7e7"
  },
  {
    "url": "docker/镜像制作.html",
    "revision": "d8b169999b2d437c83aded0e203b4c3a"
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
    "revision": "22a38094295e22931d481249452cd599"
  },
  {
    "url": "lvs/Cluster.html",
    "revision": "0f0eb7af8bd8e1b8a55f4868be27770a"
  },
  {
    "url": "lvs/index.html",
    "revision": "e66eac8f0b3ea06236e642e4dfa613e2"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "e92fd4bce6413c04a0a0e40ba76eece5"
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
