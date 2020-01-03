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
    "revision": "647d318725c1ea79c112c3e20146fa4f"
  },
  {
    "url": "about/index.html",
    "revision": "f71dd026848ad7e892b3939c54926731"
  },
  {
    "url": "assets/css/0.styles.66385284.css",
    "revision": "ff2ee2c10f40949d6f9cc396d2bc465a"
  },
  {
    "url": "assets/img/0.ac799f0d.png",
    "revision": "ac799f0d51ecf219dee021fb33fce5b9"
  },
  {
    "url": "assets/img/01.eb441145.png",
    "revision": "eb441145ab29cd8d2f73ba6ee51d85b7"
  },
  {
    "url": "assets/img/02.a86d96e3.png",
    "revision": "a86d96e3a982857d73d90a0a567fe95d"
  },
  {
    "url": "assets/img/03.d15940fa.png",
    "revision": "d15940faddd9dcc4463d06dffd522ff1"
  },
  {
    "url": "assets/img/1.631788da.png",
    "revision": "631788da20956993fda802b7e5d9660e"
  },
  {
    "url": "assets/img/1.6ceae986.png",
    "revision": "6ceae98669b506db2851cf6b343ee59b"
  },
  {
    "url": "assets/img/1.f9e063a8.jpg",
    "revision": "f9e063a8df692162d7016155c335cfa5"
  },
  {
    "url": "assets/img/10.ad1de568.png",
    "revision": "ad1de568a92ec852d5423a350f6de598"
  },
  {
    "url": "assets/img/11.e80f50f3.png",
    "revision": "e80f50f39e9038c5387ddf73cabb4c96"
  },
  {
    "url": "assets/img/12.27919f81.png",
    "revision": "27919f814b53c0fc491cbaafb3c60877"
  },
  {
    "url": "assets/img/13.cac7742c.png",
    "revision": "cac7742cac80d876669cc829ff7916a8"
  },
  {
    "url": "assets/img/14.01c9c7ca.png",
    "revision": "01c9c7ca95a5cdb2ef97de4dcfc17e9e"
  },
  {
    "url": "assets/img/15.bee0e82d.png",
    "revision": "bee0e82dc483aee82f508d3abbdad3c3"
  },
  {
    "url": "assets/img/16.8dd8bd2c.png",
    "revision": "8dd8bd2c91cc5ed4ac530abf254a10fb"
  },
  {
    "url": "assets/img/17.e3056cad.png",
    "revision": "e3056cad8720895f89dbcd05a0ef24d1"
  },
  {
    "url": "assets/img/2.52711d10.jpg",
    "revision": "52711d105f4085802e85304d8833d3e4"
  },
  {
    "url": "assets/img/2.71af08a2.png",
    "revision": "71af08a272e1eba2017822e57afa9540"
  },
  {
    "url": "assets/img/2.c59cb304.png",
    "revision": "c59cb304360a544df82a742ccf4cc51a"
  },
  {
    "url": "assets/img/3.03655da0.png",
    "revision": "03655da0b22fecc55bfee3e359556e17"
  },
  {
    "url": "assets/img/3.88b09c8e.png",
    "revision": "88b09c8e78cc2b6956f29c5a5ffa63e5"
  },
  {
    "url": "assets/img/3.f704947f.jpg",
    "revision": "f704947f542f370983b8508a63dcec3d"
  },
  {
    "url": "assets/img/4.93eac592.png",
    "revision": "93eac5926e5b2c427dc09355c5d6409c"
  },
  {
    "url": "assets/img/4.c0b487ea.png",
    "revision": "c0b487ea9b197952aff45349dd1dd30e"
  },
  {
    "url": "assets/img/4.d8439f01.jpg",
    "revision": "d8439f01176e12c5b2f0c9c986984ec0"
  },
  {
    "url": "assets/img/5.a1d01dcf.png",
    "revision": "a1d01dcff1b69e108918df5b55c92e32"
  },
  {
    "url": "assets/img/6.7db6119e.png",
    "revision": "7db6119ee2ef65b45206d24c1c6d34e6"
  },
  {
    "url": "assets/img/7.648dec1f.png",
    "revision": "648dec1f9c3daacdee91393d51741353"
  },
  {
    "url": "assets/img/8.48a4993f.png",
    "revision": "48a4993faa869be8e5a01ee8be84f5a3"
  },
  {
    "url": "assets/img/9.0735da8d.png",
    "revision": "0735da8dd3dbda19fd67775e9f446411"
  },
  {
    "url": "assets/img/a1.bdcc9826.png",
    "revision": "bdcc9826d86638e1c7340aa937228c6d"
  },
  {
    "url": "assets/img/a10.be0f8729.png",
    "revision": "be0f8729c105da96e3283114ed8c3d7a"
  },
  {
    "url": "assets/img/a11.4d5847b7.png",
    "revision": "4d5847b7ad8339c61aa55aa8936720ff"
  },
  {
    "url": "assets/img/a12.6f1e81ee.png",
    "revision": "6f1e81ee4e5c2cdd2227ee6b596fbf55"
  },
  {
    "url": "assets/img/a13.8a9a500e.png",
    "revision": "8a9a500e1133663cb0cd34adf6fa7b93"
  },
  {
    "url": "assets/img/a14.76117e3d.png",
    "revision": "76117e3d061299c6b788c199f69230bc"
  },
  {
    "url": "assets/img/a2.824232e4.png",
    "revision": "824232e4990a2552ccb65a9f47f316f2"
  },
  {
    "url": "assets/img/a3.4272af82.png",
    "revision": "4272af82d92cc72ec17a3bd32b4e908a"
  },
  {
    "url": "assets/img/a4.5259e379.png",
    "revision": "5259e37987657515aa1587d9dd841477"
  },
  {
    "url": "assets/img/a5.1f0fbd64.png",
    "revision": "1f0fbd644c0860a793263402893a7900"
  },
  {
    "url": "assets/img/a6.4c037a13.png",
    "revision": "4c037a13b1561e32a591c2004a1299b6"
  },
  {
    "url": "assets/img/a7.b8f30411.png",
    "revision": "b8f304110343f4097816372eb6c4850e"
  },
  {
    "url": "assets/img/a8.7b2dde70.png",
    "revision": "7b2dde703c006452ef08a85e16dfe84a"
  },
  {
    "url": "assets/img/a9.fc50b475.png",
    "revision": "fc50b4753a7277f4a3de2ec215912788"
  },
  {
    "url": "assets/img/b1.ddf91bb1.png",
    "revision": "ddf91bb1dfb2669aff7c7999b5c76f5c"
  },
  {
    "url": "assets/img/b2.f5f419fe.png",
    "revision": "f5f419fea1a4cce97bd66e4c1ce925f2"
  },
  {
    "url": "assets/img/b3.ccca3d96.png",
    "revision": "ccca3d9694d20ef1258fac2858d99a19"
  },
  {
    "url": "assets/img/b4.328231cf.png",
    "revision": "328231cf1f53a53aa29053e86e993710"
  },
  {
    "url": "assets/img/b5.7a0a17a9.png",
    "revision": "7a0a17a96d92ab662a16c6307b268cb9"
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
    "url": "assets/js/10.21bff9dc.js",
    "revision": "f2dc138a91525d652103d02ae724005f"
  },
  {
    "url": "assets/js/11.96e55281.js",
    "revision": "28d92b8f3ffb6f6339a66c5dcfc93fe1"
  },
  {
    "url": "assets/js/12.e7ec850a.js",
    "revision": "614f34d8e19a5d429f4c99bed180e7c4"
  },
  {
    "url": "assets/js/13.872f8613.js",
    "revision": "2e6de1a0421160d1012d2330f1288612"
  },
  {
    "url": "assets/js/14.b71bee7c.js",
    "revision": "e50bc7c53fbcd321f45d2a115306cc99"
  },
  {
    "url": "assets/js/15.de749f89.js",
    "revision": "730774a32d1c6002619d25282ad63bd1"
  },
  {
    "url": "assets/js/16.8eb7ecad.js",
    "revision": "4b4bbc8a07b2ee55370032ceea31d50e"
  },
  {
    "url": "assets/js/17.f0c3042b.js",
    "revision": "1df56079a253bc4468cf3a4cefc165ce"
  },
  {
    "url": "assets/js/18.7e3eb055.js",
    "revision": "8c71754968bf47787100ddeaeafaba72"
  },
  {
    "url": "assets/js/19.52c68423.js",
    "revision": "543d3a3caaf76e2283d15f0938cff055"
  },
  {
    "url": "assets/js/2.4567f7c7.js",
    "revision": "f54d8f29341bb304b77b0d89071b1392"
  },
  {
    "url": "assets/js/20.5e149168.js",
    "revision": "3e622782fb8c4da7dda34e6180b4e274"
  },
  {
    "url": "assets/js/21.6eaf9e24.js",
    "revision": "0b948ab73d5a62bf3826703cc17656be"
  },
  {
    "url": "assets/js/22.f0db45c6.js",
    "revision": "dfd0bac32b2d980b28670e7c49663f24"
  },
  {
    "url": "assets/js/23.332782f8.js",
    "revision": "c046d2d03cb762d6902bdce64563d3cd"
  },
  {
    "url": "assets/js/24.2bec616c.js",
    "revision": "709fc2692b81260f2b9ba10be21a573c"
  },
  {
    "url": "assets/js/25.a73918d2.js",
    "revision": "390feb992bd6633773a0b61a4b0882ca"
  },
  {
    "url": "assets/js/26.a8684111.js",
    "revision": "dc19a1dd011d4b7ab65f21712ca727a6"
  },
  {
    "url": "assets/js/27.1c2259b8.js",
    "revision": "c180c2b09efc4adb8b9725c016f2a8ef"
  },
  {
    "url": "assets/js/28.19d99909.js",
    "revision": "0abb7c141d77bc2671b57cf5d58d6511"
  },
  {
    "url": "assets/js/29.2452da17.js",
    "revision": "cbaa50dbed127ccd214c948d644beee0"
  },
  {
    "url": "assets/js/3.1cf8d276.js",
    "revision": "f416b89f303cffa7550ee648d571159a"
  },
  {
    "url": "assets/js/30.88861512.js",
    "revision": "92d3e81cd2c0472dfa230cb0f50d47b9"
  },
  {
    "url": "assets/js/31.b994345a.js",
    "revision": "d9ee8efd9a2a52bc865d3e6909507e23"
  },
  {
    "url": "assets/js/32.cde13f81.js",
    "revision": "55eef1754c384c0a4b49c599b36f997d"
  },
  {
    "url": "assets/js/33.1eb49cf8.js",
    "revision": "9242b09f515a2f3cf0a5d078c406080f"
  },
  {
    "url": "assets/js/34.58c99d8b.js",
    "revision": "3578612f5b0d2c43c613871fd580b9d7"
  },
  {
    "url": "assets/js/35.b345b204.js",
    "revision": "7ee9b3d871cfd88aca0c53d10f823337"
  },
  {
    "url": "assets/js/36.3f767ca5.js",
    "revision": "0ae2bc1f3411ac225ef5574b4267a383"
  },
  {
    "url": "assets/js/37.f20d15c1.js",
    "revision": "7ac3782a6c47e03e9287130e12aa72a9"
  },
  {
    "url": "assets/js/4.1382d76a.js",
    "revision": "75ac2477dae62b23d631076ac76cf53a"
  },
  {
    "url": "assets/js/5.bba82db9.js",
    "revision": "6abc692e4c5ee86cc903acd46f0c0426"
  },
  {
    "url": "assets/js/6.03a96513.js",
    "revision": "0b1b9b9f13e3af873371df29b19b1be2"
  },
  {
    "url": "assets/js/7.6020d044.js",
    "revision": "2964dd1d552d2f10411b8391b82fcf54"
  },
  {
    "url": "assets/js/8.544170f7.js",
    "revision": "1f7867cdf135b5ba03d78be7ee555147"
  },
  {
    "url": "assets/js/9.65e4f5f6.js",
    "revision": "86470ed25ae2c9efe16103d93f259a34"
  },
  {
    "url": "assets/js/app.1aa28d72.js",
    "revision": "8c5c41c5784fa990fc97de690d8891af"
  },
  {
    "url": "docker/CentOS7安装Docker.html",
    "revision": "8f2ed720511a953be09f129e124167dc"
  },
  {
    "url": "docker/DockerFile.html",
    "revision": "5fbd0027302da4087e031c89ab78dd33"
  },
  {
    "url": "docker/Docker使用前提.html",
    "revision": "04c9156cad70a165543b365a1e169472"
  },
  {
    "url": "docker/Docker容器命令.html",
    "revision": "6a4a7f4f2e7fa3579f3a6f4c66abaca4"
  },
  {
    "url": "docker/Docker数据卷.html",
    "revision": "cfe1dd1f7ab91abda546738d185407a8"
  },
  {
    "url": "docker/Docker网络配置.html",
    "revision": "a65897f6921c8319d94810f3ac94789a"
  },
  {
    "url": "docker/Docker镜像命令.html",
    "revision": "f19c898ee0a7a4196582e0546f5f81c2"
  },
  {
    "url": "docker/index.html",
    "revision": "a22eb785999865f0edee25e821eb59f7"
  },
  {
    "url": "docker/前世今生.html",
    "revision": "5a837518a277c6eaff3e5aa2ab621b33"
  },
  {
    "url": "docker/待续.html",
    "revision": "706e694fc5734d82fd74ead99a188cda"
  },
  {
    "url": "docker/简单使用Docker.html",
    "revision": "bfbf8660f35d7f043e3673e70b5dbddc"
  },
  {
    "url": "docker/镜像制作.html",
    "revision": "2056d532ff5ea373a13139b92118010f"
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
    "revision": "6eb12b528f10706b06a2337dcd3f6da6"
  },
  {
    "url": "Linux运维/CentOS7网络配置.html",
    "revision": "1cc3c0d6eb1addc5ae984a73b461ebea"
  },
  {
    "url": "Linux运维/index.html",
    "revision": "c36538ae892a890d60ad7ddcc1a70a5a"
  },
  {
    "url": "Linux运维/Linux三剑客.html",
    "revision": "6940086285bb84c5a677f2666bddc74d"
  },
  {
    "url": "Linux运维/待续.html",
    "revision": "a071e8a2b32c9419bc8f48e8adceda3e"
  },
  {
    "url": "Linux运维/系统符号.html",
    "revision": "257fdaea68ffbae1bde3dcffb4ec04c5"
  },
  {
    "url": "Linux运维/虚拟机安装Centos7.html",
    "revision": "7ce19026079446ca79072ea21e1b03ac"
  },
  {
    "url": "live2d/hibiki/assets/moc/hibiki.2048/texture_00.png",
    "revision": "730252369524e7a1c21308cb84acd465"
  },
  {
    "url": "live2d/z16/assets/moc/z16.1024/texture_00.png",
    "revision": "0a1969e9c0d0f1509604bb2b19de0783"
  },
  {
    "url": "live2d/z16/assets/moc/z16.256/texture_00.png",
    "revision": "b925d20a4fdfe8a65b09199a1224e581"
  },
  {
    "url": "live2d/z16/assets/moc/z16.512/texture_00.png",
    "revision": "96f5efb6dd9e3c69de8424b142214452"
  },
  {
    "url": "lvs/Cluster.html",
    "revision": "435f81ffa7d47000c32cb64d01556522"
  },
  {
    "url": "lvs/index.html",
    "revision": "3c60c85688154f11e8e9a4499278fc68"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "b4e152eb21a07184bcf05e169e104dc2"
  },
  {
    "url": "redis/index.html",
    "revision": "003e1e9064ab8c631669165b25400d18"
  },
  {
    "url": "redis/Redis哨兵.html",
    "revision": "de64dccac9c3923c6309b9426c98ef0b"
  },
  {
    "url": "redis/Redis集群.html",
    "revision": "bee4f29abbe3d2bfc9bcf2bac1369de8"
  },
  {
    "url": "redis/主从复制.html",
    "revision": "aecf806b6b6980e5de746cffcca64362"
  },
  {
    "url": "redis/待续.html",
    "revision": "5fbb10d03c7042eff932e936e0e2f29f"
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
