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
    "revision": "47e44120655f7eb28c12765af6129b84"
  },
  {
    "url": "about/index.html",
    "revision": "c39f16b80591fec75fbe0dff9f478d89"
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
    "url": "assets/img/rediscluster.5e0c43e7.png",
    "revision": "5e0c43e747fac280471c39ca75ff4429"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a7f8585c.js",
    "revision": "92e8f2773fb571116fabb361117033f0"
  },
  {
    "url": "assets/js/11.93836d14.js",
    "revision": "7a46a60cd1dcbec94f18c3d4d10272ab"
  },
  {
    "url": "assets/js/12.087b72f8.js",
    "revision": "bf8e88092c42fab45f86a74da1bfd96b"
  },
  {
    "url": "assets/js/13.20cddbb3.js",
    "revision": "46c4a34c22f0b5db5753353f2a4d084a"
  },
  {
    "url": "assets/js/14.3a3a05aa.js",
    "revision": "80de7b9020429fe79a75097f999056e5"
  },
  {
    "url": "assets/js/15.67e3b186.js",
    "revision": "22d91b1d47fa4894049c07dcf640d5dd"
  },
  {
    "url": "assets/js/16.e232712c.js",
    "revision": "c7ce0d47fece60290bcc4163dfc984ee"
  },
  {
    "url": "assets/js/17.bfb3452f.js",
    "revision": "dec9306bfd10aa6dadddd97756b2a730"
  },
  {
    "url": "assets/js/18.f4c91dab.js",
    "revision": "61428f713e633d0902f1d64952d17cf7"
  },
  {
    "url": "assets/js/19.5644e6f4.js",
    "revision": "b6ddeddf5283df448be049cb3df8835e"
  },
  {
    "url": "assets/js/2.46c71a3a.js",
    "revision": "1a3218fc09c42d060b47bf2bcf2a92be"
  },
  {
    "url": "assets/js/20.9cbda818.js",
    "revision": "e7aa1977461465eacaffafeca939f4fa"
  },
  {
    "url": "assets/js/21.54e87a5b.js",
    "revision": "09ee01ec7cc22150193c6f9961c674fc"
  },
  {
    "url": "assets/js/22.7e80af36.js",
    "revision": "e21409b0c10b6cf1e57e938f09d62593"
  },
  {
    "url": "assets/js/23.21450479.js",
    "revision": "d2de604a47007916a2d1ac6e20238a8b"
  },
  {
    "url": "assets/js/24.d3f576e0.js",
    "revision": "5550056f33c32b05b34e651779673c18"
  },
  {
    "url": "assets/js/25.7c5200fd.js",
    "revision": "73e9e38e77eb3241a74060c7636c7251"
  },
  {
    "url": "assets/js/26.60941a22.js",
    "revision": "bb0ea1f48179de15329e9de0a14c26d9"
  },
  {
    "url": "assets/js/27.8f70f2b2.js",
    "revision": "a9c719654bac8110bc4c231a1316b04d"
  },
  {
    "url": "assets/js/28.5e937e6a.js",
    "revision": "454e7df668224f8b94aa0ab40432c3f1"
  },
  {
    "url": "assets/js/29.594a6990.js",
    "revision": "cd5dd39703f6759b1de3c8f038f4dbdc"
  },
  {
    "url": "assets/js/3.52262ca8.js",
    "revision": "000bd715539a3c45dcee55f886615aaf"
  },
  {
    "url": "assets/js/30.d7f7a92c.js",
    "revision": "a024e846d48b3125d0660db9d1b2421b"
  },
  {
    "url": "assets/js/31.5d8d54af.js",
    "revision": "5555cd25bed91d7334fca0db34c0ab59"
  },
  {
    "url": "assets/js/4.cf99f39e.js",
    "revision": "4ef6e8e4c8ef542447d1816484a14e44"
  },
  {
    "url": "assets/js/5.5c869b76.js",
    "revision": "d109b720828fcf9054ba21effa9686b3"
  },
  {
    "url": "assets/js/6.3dca10c0.js",
    "revision": "9fe3d09fe975d1fda92d6d27b1d7edf5"
  },
  {
    "url": "assets/js/7.668c7940.js",
    "revision": "1e476c19d2f957bf11711b836d97bc2e"
  },
  {
    "url": "assets/js/8.9ca45f89.js",
    "revision": "4e748a6564abdd3616f97045bb9cc818"
  },
  {
    "url": "assets/js/9.a3f02bfe.js",
    "revision": "9e0c8ef0893740814922b236f101d7a6"
  },
  {
    "url": "assets/js/app.799d2dba.js",
    "revision": "bead6d023dc4299bc9725a1bcb67dc70"
  },
  {
    "url": "docker/CentOS7安装Docker.html",
    "revision": "da9afdf5a2e05e4aa03bc70862f65615"
  },
  {
    "url": "docker/DockerFile.html",
    "revision": "e9e00b2128b89c3ca7bbd89b0bc2b0cc"
  },
  {
    "url": "docker/Docker使用前提.html",
    "revision": "f0d95e06c1633dd75dd22c87d1f4aadc"
  },
  {
    "url": "docker/Docker容器命令.html",
    "revision": "261aa5db08c79f30782d79735b6f4aea"
  },
  {
    "url": "docker/Docker数据卷.html",
    "revision": "e5c4c002a0946e7538f2a2c1afcb82a7"
  },
  {
    "url": "docker/Docker网络配置.html",
    "revision": "640c67ed36753e188359c4e06b455d3d"
  },
  {
    "url": "docker/Docker镜像命令.html",
    "revision": "5af716fb872c839e1192df834ec1e3f0"
  },
  {
    "url": "docker/index.html",
    "revision": "f012c35ae7bfc3abefd4ed53403098d5"
  },
  {
    "url": "docker/前世今生.html",
    "revision": "dea0a9a1d61a6c7cab1218f94b25e4f7"
  },
  {
    "url": "docker/待续.html",
    "revision": "901cab88ab753a7051816088756727c5"
  },
  {
    "url": "docker/简单使用Docker.html",
    "revision": "2ab0cad2c210fc1e0cd4eec030afad6b"
  },
  {
    "url": "docker/镜像制作.html",
    "revision": "a58803d9329cf74856c07fa29fdcc336"
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
    "revision": "193bccb201b233830f0ac53e663e5082"
  },
  {
    "url": "lvs/Cluster.html",
    "revision": "cc59444079c61dbb5526a4efc7ecbfa9"
  },
  {
    "url": "lvs/index.html",
    "revision": "90da42de308aba45982639380307b547"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "e58bd3cb7dc71724720d58cb2538dc8b"
  },
  {
    "url": "redis/index.html",
    "revision": "d2e9fc0bc580f17f959ba74152c9e1c5"
  },
  {
    "url": "redis/Redis哨兵.html",
    "revision": "787bb24cbbb1dd6e12719f54e2c93721"
  },
  {
    "url": "redis/Redis集群.html",
    "revision": "8e9039fea7032fe74a9e57b4c24c489c"
  },
  {
    "url": "redis/主从复制.html",
    "revision": "e14ae0a4ba664b450332e03a94f3164f"
  },
  {
    "url": "redis/待续.html",
    "revision": "657f7bd53907570de5146f892e5f277a"
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
