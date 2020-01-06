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
    "revision": "4c4aab7328f12fffb8f8e658c257f792"
  },
  {
    "url": "about/index.html",
    "revision": "ee794782b2fbd9fe19af7e6f534e3ecf"
  },
  {
    "url": "assets/css/0.styles.d7e08026.css",
    "revision": "87bd9e0775e25fdebfb1102aff010289"
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
    "url": "assets/img/Mongo-Master-slave.daba08e5.png",
    "revision": "daba08e5fadd3365251a6ec215245136"
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
    "url": "assets/js/10.dbda4c0c.js",
    "revision": "3ad74bb59b7ca7f5625c3dc1b51af28d"
  },
  {
    "url": "assets/js/11.e38b7449.js",
    "revision": "b5073eb75b18dc98c806c9c433c82634"
  },
  {
    "url": "assets/js/12.3fc25ba3.js",
    "revision": "5ef450e0b08f8fc06e923540987e9487"
  },
  {
    "url": "assets/js/13.5cb9477d.js",
    "revision": "1630cce861ec8acfa593d1353dafc58e"
  },
  {
    "url": "assets/js/14.bb18c347.js",
    "revision": "8988065618f10f26ebf27244cebd145a"
  },
  {
    "url": "assets/js/15.273313f7.js",
    "revision": "b74ae50ec6e2c4108d54bbaf258153a3"
  },
  {
    "url": "assets/js/16.e9fbae79.js",
    "revision": "c254487aad2acbde6a4bc77f07720ab7"
  },
  {
    "url": "assets/js/17.04d04a53.js",
    "revision": "6bbe265cf175f71b44e9d0bb7ac04175"
  },
  {
    "url": "assets/js/18.55d8e935.js",
    "revision": "b3d5591a61c915c1e3cb564e2d063446"
  },
  {
    "url": "assets/js/19.68b08453.js",
    "revision": "346d7f886c6f89c743233046a3c986e0"
  },
  {
    "url": "assets/js/2.65015a4d.js",
    "revision": "1ca92fb3d76648978a263bc2583ba569"
  },
  {
    "url": "assets/js/20.98049e9b.js",
    "revision": "f9ea048e0834e80a522751ad7272b9e4"
  },
  {
    "url": "assets/js/21.375053ed.js",
    "revision": "65958ca91fbe01e65a4823d045bf123f"
  },
  {
    "url": "assets/js/22.1b7ef60f.js",
    "revision": "1da4fbac3f2851e88d5ca5d682061d04"
  },
  {
    "url": "assets/js/23.8b5c5732.js",
    "revision": "24fafffa3f0b033a403bf15c3b3c13ff"
  },
  {
    "url": "assets/js/24.f2a1f466.js",
    "revision": "a8ddbaee49785c00346c562342d3388a"
  },
  {
    "url": "assets/js/25.96ef1ade.js",
    "revision": "719749c725fe5ce1299801ab19e63c20"
  },
  {
    "url": "assets/js/26.d1c779ef.js",
    "revision": "59129ddbfdf23b68ee9d2f7627f79331"
  },
  {
    "url": "assets/js/27.56422337.js",
    "revision": "6f4609a00e2237d37488e1a25727b569"
  },
  {
    "url": "assets/js/28.49663124.js",
    "revision": "c1ddbcae26bfcdee4a2c12354855d595"
  },
  {
    "url": "assets/js/29.09f7b56e.js",
    "revision": "6d789e5d0f57d307c1f30931b51a3199"
  },
  {
    "url": "assets/js/3.0db3bfe1.js",
    "revision": "a670d25479cf24ef144e9569ccab7682"
  },
  {
    "url": "assets/js/30.83f34879.js",
    "revision": "888e80b2ca5dbf35e0698fd99c6844e3"
  },
  {
    "url": "assets/js/31.ae0a2c80.js",
    "revision": "6963841d1253be7df459b4372babc549"
  },
  {
    "url": "assets/js/32.26b509cc.js",
    "revision": "520c86e40f11a64efbc952de70995f3f"
  },
  {
    "url": "assets/js/33.58b944f1.js",
    "revision": "645dde50b2e321deeb018c5fd8d93a7b"
  },
  {
    "url": "assets/js/34.ba2f0cd8.js",
    "revision": "9f4787fea13531cb0450c97e6523eb94"
  },
  {
    "url": "assets/js/35.c069230e.js",
    "revision": "89fb912dba68109c5525ba58890264c2"
  },
  {
    "url": "assets/js/36.a22b2851.js",
    "revision": "695612ca6821e37d40b4c1f5a7945ccb"
  },
  {
    "url": "assets/js/37.f230d904.js",
    "revision": "961dfe581615161652532ef39217d15d"
  },
  {
    "url": "assets/js/38.9a41f75f.js",
    "revision": "20bee376c2339d1b59950c8c7396502e"
  },
  {
    "url": "assets/js/39.f015cf54.js",
    "revision": "b8e335b4453d6ea7b1a1790f6a3ba694"
  },
  {
    "url": "assets/js/4.004f700b.js",
    "revision": "dc1cd27432078c45040889a9c800b777"
  },
  {
    "url": "assets/js/40.8ab42b15.js",
    "revision": "d04e3a1328caa5eef7b8ac7f66bb14f0"
  },
  {
    "url": "assets/js/5.87b32c02.js",
    "revision": "86852d252940fe191f6bfd20daa38c4e"
  },
  {
    "url": "assets/js/6.239e1720.js",
    "revision": "68755647df6c0fdcafca16a7272d0c45"
  },
  {
    "url": "assets/js/7.98b7fc88.js",
    "revision": "1d91ac1f1c65d0485d176696f7fc9e88"
  },
  {
    "url": "assets/js/8.e386826c.js",
    "revision": "f9ab60c33bae47cdb6a8847c5f752cf4"
  },
  {
    "url": "assets/js/9.e82af20a.js",
    "revision": "fb57c215851fc3a1f10ca45b3f1fb1b9"
  },
  {
    "url": "assets/js/app.3f7adafc.js",
    "revision": "766a6f9e271c4b3b2d9e15f552e00197"
  },
  {
    "url": "docker/CentOS7安装Docker.html",
    "revision": "cfe7c16a740167682df37ec5ea1d7e73"
  },
  {
    "url": "docker/DockerFile.html",
    "revision": "b961f6aa64fde552cd5c5c6f36baa082"
  },
  {
    "url": "docker/Docker使用前提.html",
    "revision": "f7bd467f50f4884799932e81535f8fdd"
  },
  {
    "url": "docker/Docker容器命令.html",
    "revision": "1a3f1683f667c52b992a17a30c412458"
  },
  {
    "url": "docker/Docker数据卷.html",
    "revision": "7185b2b119ec7834a4d730d9f0cfe0af"
  },
  {
    "url": "docker/Docker网络配置.html",
    "revision": "4779af8191dde8bb7b211d0824c16126"
  },
  {
    "url": "docker/Docker镜像命令.html",
    "revision": "3eec1680c544b7fb01c3a99ce8e3bec2"
  },
  {
    "url": "docker/index.html",
    "revision": "4ad7c6beb7dbf19d2482b58ffa7c45d9"
  },
  {
    "url": "docker/前世今生.html",
    "revision": "d71209f13db6c6fe728ebfe73ab1c076"
  },
  {
    "url": "docker/待续.html",
    "revision": "d3eefd81f5b99fa3a7ababb6fb97199c"
  },
  {
    "url": "docker/简单使用Docker.html",
    "revision": "ba7921bbf29de553deea4dba910a438c"
  },
  {
    "url": "docker/镜像制作.html",
    "revision": "b6838ff68d3b312c113839ea32a8505c"
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
    "revision": "c612ac8957fde89a5d58621a75170fc5"
  },
  {
    "url": "Linux运维/CentOS7网络配置.html",
    "revision": "2030e6710d829b8584ab3cd3b35c850a"
  },
  {
    "url": "Linux运维/index.html",
    "revision": "a27a5b31fee90e73836d21241802c964"
  },
  {
    "url": "Linux运维/Linux三剑客.html",
    "revision": "dae860d88329fff358bc91d6db21d39d"
  },
  {
    "url": "Linux运维/待续.html",
    "revision": "c4e8bbd93d8569617f4c6f473326ba3e"
  },
  {
    "url": "Linux运维/系统符号.html",
    "revision": "f71b9d60c4b1d0306eee9d95b70f3efc"
  },
  {
    "url": "Linux运维/虚拟机安装Centos7.html",
    "revision": "7795ef5969e5ed635e678ff9f7fec5a4"
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
    "revision": "52266ed83b12f157b4ce4367a78a9426"
  },
  {
    "url": "lvs/index.html",
    "revision": "7c681c4ccb4b439cd62bb9ad2d429d66"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "111f258bf0dc64e340ae96ab8fe0641c"
  },
  {
    "url": "mongo/index.html",
    "revision": "2689447028650c0a6571245cb61ab476"
  },
  {
    "url": "mongo/主从复制.html",
    "revision": "c95fb271716745d350e82aeb296a861c"
  },
  {
    "url": "mongo/待续.html",
    "revision": "e20c8a3a4abf41570122fddd22bdb488"
  },
  {
    "url": "redis/index.html",
    "revision": "b27706f7456d96538c152843ce6377c8"
  },
  {
    "url": "redis/Redis哨兵.html",
    "revision": "87411dfff94c95331fb7d0be06418212"
  },
  {
    "url": "redis/Redis集群.html",
    "revision": "9ce7afe6da0c6214ba9990826c9ebf09"
  },
  {
    "url": "redis/主从复制.html",
    "revision": "9dd3d7adb1a00c7b80c0e44eb958b8a2"
  },
  {
    "url": "redis/待续.html",
    "revision": "3202637f1ae5048a4a62b44b986e2622"
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
