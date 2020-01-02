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
    "revision": "c812bfe5a6dbbbe973883155a86d3bb4"
  },
  {
    "url": "about/index.html",
    "revision": "4bcc0e3c53d4b8d00f54656c19c88f67"
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
    "url": "assets/js/10.1240d75d.js",
    "revision": "fd2125b8f3df767fc915b80751ef99ba"
  },
  {
    "url": "assets/js/11.789d0b53.js",
    "revision": "36bad725edd838a53224c5046c29389b"
  },
  {
    "url": "assets/js/12.72dce4cb.js",
    "revision": "5c8d243766bb0ce184af3032ff4737e1"
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
    "url": "assets/js/15.2233e00d.js",
    "revision": "c0edf6e91834cc8809c7904c3f027e42"
  },
  {
    "url": "assets/js/16.dcbbb68b.js",
    "revision": "c2121f6ab1cb5110032e3e036b96d358"
  },
  {
    "url": "assets/js/17.88a2471b.js",
    "revision": "28bf793252a7325c2b8c8c257f92aa5e"
  },
  {
    "url": "assets/js/18.b9bceaf6.js",
    "revision": "9d186c62eaaacbb7ad233f8a3e43d5ec"
  },
  {
    "url": "assets/js/19.05b9ab36.js",
    "revision": "f6ed1d35f0bd279d9e324927d682ccfb"
  },
  {
    "url": "assets/js/2.4567f7c7.js",
    "revision": "f54d8f29341bb304b77b0d89071b1392"
  },
  {
    "url": "assets/js/20.18a4589d.js",
    "revision": "1393e0654c81d300b6f1931712be9d88"
  },
  {
    "url": "assets/js/21.f9163219.js",
    "revision": "086b50ee4c8ad81ad395fe33027237e4"
  },
  {
    "url": "assets/js/22.0e126563.js",
    "revision": "175ee08bfbcb854d8dba86b0d0a7f7fd"
  },
  {
    "url": "assets/js/23.e6a02770.js",
    "revision": "54e500b4a232482ceaa903184ce333c5"
  },
  {
    "url": "assets/js/24.9feccacd.js",
    "revision": "bd6d1635cd9e315d73b03b791fe9bdc7"
  },
  {
    "url": "assets/js/25.d0ef45b3.js",
    "revision": "ced87c80ae0ed8d0cede3d1193b0cfec"
  },
  {
    "url": "assets/js/26.cf77d2ec.js",
    "revision": "2ebd3e5dc9378aad504d9b4e5ce390eb"
  },
  {
    "url": "assets/js/27.a478c2dd.js",
    "revision": "7b8aa477928b30f7d5a49e90610e80e9"
  },
  {
    "url": "assets/js/28.552fa80e.js",
    "revision": "b86c5d12471227b34858eaaff38651a9"
  },
  {
    "url": "assets/js/29.586abea9.js",
    "revision": "125544d945058141f4b4547939c08bc7"
  },
  {
    "url": "assets/js/3.118f3a1c.js",
    "revision": "1338b0fe9859b7310a1179bc76029a38"
  },
  {
    "url": "assets/js/30.14a51cf1.js",
    "revision": "7541645df42c295029b21c0062a57287"
  },
  {
    "url": "assets/js/31.9561ea6f.js",
    "revision": "f34ed447341d152e948e7db1659d0518"
  },
  {
    "url": "assets/js/32.594c7bc3.js",
    "revision": "0ab4d50af65c984db5ad067512fc8fb2"
  },
  {
    "url": "assets/js/33.0d9fd933.js",
    "revision": "3d92485f68e1f1658204b37f0c939f75"
  },
  {
    "url": "assets/js/34.6970b536.js",
    "revision": "c50b1966a0dc9904d11f122c1e3354ce"
  },
  {
    "url": "assets/js/35.da545c6c.js",
    "revision": "6a9a8d50ad0e77be3dd41afa3511e4d4"
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
    "url": "assets/js/7.4af0cabe.js",
    "revision": "07d0ab69c87504e6bd0fd31af1ed4252"
  },
  {
    "url": "assets/js/8.c4cb434c.js",
    "revision": "872775cd66ac4f8c7ba103bc180293cd"
  },
  {
    "url": "assets/js/9.65e4f5f6.js",
    "revision": "86470ed25ae2c9efe16103d93f259a34"
  },
  {
    "url": "assets/js/app.27bc7ebe.js",
    "revision": "689eb450b961e7b6b9595481db80f75b"
  },
  {
    "url": "docker/CentOS7安装Docker.html",
    "revision": "c1058305f9b0555f42b61f7b27d78915"
  },
  {
    "url": "docker/DockerFile.html",
    "revision": "49170eaa704cfc8e017b375ac60226a7"
  },
  {
    "url": "docker/Docker使用前提.html",
    "revision": "7e2c6506fd7e50321e27ed6203b1955c"
  },
  {
    "url": "docker/Docker容器命令.html",
    "revision": "5f7770c72ff996d3378d8c004941f07f"
  },
  {
    "url": "docker/Docker数据卷.html",
    "revision": "4a7060e271213878a00ca1d2d748e771"
  },
  {
    "url": "docker/Docker网络配置.html",
    "revision": "cb592b17abd980a8b49110c031070d23"
  },
  {
    "url": "docker/Docker镜像命令.html",
    "revision": "64c67b11d108763bdedd4d55ef565678"
  },
  {
    "url": "docker/index.html",
    "revision": "2e0a37be7e0c6a54807145452d5c6734"
  },
  {
    "url": "docker/前世今生.html",
    "revision": "6f5d5d4dc6e913356df6a11f4b6c0bb6"
  },
  {
    "url": "docker/待续.html",
    "revision": "989901d854471b224cf24a86d3d6021e"
  },
  {
    "url": "docker/简单使用Docker.html",
    "revision": "b7b4895e7005dbba9ca8abbe3d252d70"
  },
  {
    "url": "docker/镜像制作.html",
    "revision": "705a1745dd5af5e777b8deec3a31ed5f"
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
    "revision": "0b4a349e711fc4358954e6039cca0788"
  },
  {
    "url": "Linux运维/CentOS7网络配置.html",
    "revision": "f5526f477bae7a387eef914c9459fb7c"
  },
  {
    "url": "Linux运维/index.html",
    "revision": "6e5bbb664f0f04158fc00675ea345abc"
  },
  {
    "url": "Linux运维/待续.html",
    "revision": "394d7f7fafd90a8591800d3cce245188"
  },
  {
    "url": "Linux运维/虚拟机安装Centos7.html",
    "revision": "4373f5f97b0fd7a82dca0e1265f85866"
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
    "revision": "2721fd2950a68a497758166a8cb36275"
  },
  {
    "url": "lvs/index.html",
    "revision": "985e2977cba297a2ce56a13a5a74470c"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "74394619527e5c32a421fde3ce28966d"
  },
  {
    "url": "redis/index.html",
    "revision": "1f121ef61f76c90d885212d4fd6a5b02"
  },
  {
    "url": "redis/Redis哨兵.html",
    "revision": "083c2c6cd2068dab9d0ad9e2660bd234"
  },
  {
    "url": "redis/Redis集群.html",
    "revision": "7db2802f1626b574592601f2adcf00b2"
  },
  {
    "url": "redis/主从复制.html",
    "revision": "6f7bc91ac8a48edc68df9f8abdf7cc94"
  },
  {
    "url": "redis/待续.html",
    "revision": "a215b440b80b006d566df7111407474e"
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
