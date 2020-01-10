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
    "revision": "a4fa8c059df3c0a61bd29134e36b0b5e"
  },
  {
    "url": "about/index.html",
    "revision": "c4c35f3a99a934ca4bca915992e8e615"
  },
  {
    "url": "assets/css/0.styles.171ea0f7.css",
    "revision": "558766cdc5c5161075974b923d21157e"
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
    "url": "assets/img/balance1.34359875.png",
    "revision": "3435987542d86681e7f4b724535adf3a"
  },
  {
    "url": "assets/img/balance2.0412bc02.png",
    "revision": "0412bc0283987f087fbfef957732413a"
  },
  {
    "url": "assets/img/docker-nginx.e4a2336b.png",
    "revision": "e4a2336bd50e2fbfb8f8a4a1a3f979c7"
  },
  {
    "url": "assets/img/docker-nginx2.7bdfc3fd.png",
    "revision": "7bdfc3fd467e3601a927909f995c4c09"
  },
  {
    "url": "assets/img/Forward-agency.ad9fcf45.png",
    "revision": "ad9fcf45bdf8c515d5c4def2f7854117"
  },
  {
    "url": "assets/img/Mongo-Master-slave.daba08e5.png",
    "revision": "daba08e5fadd3365251a6ec215245136"
  },
  {
    "url": "assets/img/nginx-80-8001.4525a077.png",
    "revision": "4525a0778a584a45d9fecfab80b41360"
  },
  {
    "url": "assets/img/nginx-80.fbcaa9be.png",
    "revision": "fbcaa9be42af4d8a1bfa9a807971e3f8"
  },
  {
    "url": "assets/img/nginx-8001.081c68c0.png",
    "revision": "081c68c0f5227ebc4959a669549f4e7d"
  },
  {
    "url": "assets/img/nginx-8002.f7339650.png",
    "revision": "f7339650c03c1c09bc37cfd8359abd25"
  },
  {
    "url": "assets/img/nginx-t-8001.1627d94f.png",
    "revision": "1627d94f9ac961df20446d0ae6cdd451"
  },
  {
    "url": "assets/img/nginx-t-8002.33ab7f07.png",
    "revision": "33ab7f070ac0a562e4c48531275ec015"
  },
  {
    "url": "assets/img/nginx.af3f3f04.png",
    "revision": "af3f3f04d03d5c89afa72a97843ca2e4"
  },
  {
    "url": "assets/img/rediscluster.5e0c43e7.png",
    "revision": "5e0c43e747fac280471c39ca75ff4429"
  },
  {
    "url": "assets/img/redistype.e306687f.png",
    "revision": "e306687f865397050ebd9f6da523d78a"
  },
  {
    "url": "assets/img/Reverse-proxy.c365d110.png",
    "revision": "c365d11098a918fd85e4b73ff2c8c936"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/separate1.c41cf9da.png",
    "revision": "c41cf9da4fe3e493f1e82bb35ca92ca9"
  },
  {
    "url": "assets/img/separate2.05e392e3.png",
    "revision": "05e392e315204a1a89138627cf937d86"
  },
  {
    "url": "assets/img/separate3.e723b094.png",
    "revision": "e723b094ef45e8e1a8a32c38b45f851c"
  },
  {
    "url": "assets/img/Static-dynamic-separation.f1b18242.png",
    "revision": "f1b18242838c9d54c389d1f67c100a38"
  },
  {
    "url": "assets/js/10.f75510ed.js",
    "revision": "e3cb596305adec51cbde56c2a76cdade"
  },
  {
    "url": "assets/js/11.dfdb56b3.js",
    "revision": "ad25d0edfeef12e2b217301e92ede4f1"
  },
  {
    "url": "assets/js/12.ba95223f.js",
    "revision": "cfb8ff42bfe133bd0778bec2c2ce5ef7"
  },
  {
    "url": "assets/js/13.96316d8c.js",
    "revision": "47216c367dd4a6c1ab7c7d287ea1368b"
  },
  {
    "url": "assets/js/14.08365668.js",
    "revision": "36a60236422b972feca15ac4d0b63913"
  },
  {
    "url": "assets/js/15.8aa5b3b0.js",
    "revision": "913e2c35cdec46240fd9222ccab4dede"
  },
  {
    "url": "assets/js/16.5eab03aa.js",
    "revision": "57b0d2e551d62f3cc99af1abaccf566c"
  },
  {
    "url": "assets/js/17.c3c6df4d.js",
    "revision": "aa0a7108fc78aafccfcf4c49af2d95c1"
  },
  {
    "url": "assets/js/18.f8e0fa74.js",
    "revision": "d50a1bfeadddeae67fbb2a29a8dcafd2"
  },
  {
    "url": "assets/js/19.a030c276.js",
    "revision": "4ccb94e68be1a0380284994cd1b64ec8"
  },
  {
    "url": "assets/js/2.5cb3218f.js",
    "revision": "e25e9c809d2d161eaf8feb2c07b7a711"
  },
  {
    "url": "assets/js/20.7db42ca7.js",
    "revision": "d5e90c5d53c219e6ecb3114e96afb7fb"
  },
  {
    "url": "assets/js/21.778ebe72.js",
    "revision": "5e0fd37485b23f06eccf831f5d027879"
  },
  {
    "url": "assets/js/22.0bca31bc.js",
    "revision": "f8d15241c2adadc211334a203ced4504"
  },
  {
    "url": "assets/js/23.e89ee25d.js",
    "revision": "782d4087e02d588aa89ba26e42a08c45"
  },
  {
    "url": "assets/js/24.2ff05ded.js",
    "revision": "e4f8126718a8e7a40b660dd1eea1a472"
  },
  {
    "url": "assets/js/25.0a102772.js",
    "revision": "578f607ca91e2de79176923582d3d8bf"
  },
  {
    "url": "assets/js/26.aecf99a3.js",
    "revision": "639c13697a0074cf97a635308d173917"
  },
  {
    "url": "assets/js/27.90433ef0.js",
    "revision": "55bd93c4ef8f3ca3ca589de69b6c6d3a"
  },
  {
    "url": "assets/js/28.088f84e4.js",
    "revision": "1042062a509675cf59ee71c3737c1002"
  },
  {
    "url": "assets/js/29.28c54f11.js",
    "revision": "c72c1ecd691648ae0525110a32bafe40"
  },
  {
    "url": "assets/js/3.05960a70.js",
    "revision": "2d55a77e8e80e4948fba33be12f871c8"
  },
  {
    "url": "assets/js/30.1387ff4e.js",
    "revision": "310154c5a367c2a9c6ccde275fe23cb2"
  },
  {
    "url": "assets/js/31.74cb73e7.js",
    "revision": "a350d6ad8cef3478864afa127900a7b2"
  },
  {
    "url": "assets/js/32.a713b72c.js",
    "revision": "4b77baa959aa7b230a28e60a017f3d7f"
  },
  {
    "url": "assets/js/33.b19a2891.js",
    "revision": "c0e7c45ed72e19fda8d7f514db81f567"
  },
  {
    "url": "assets/js/34.c45db405.js",
    "revision": "05fbac9357d1e8a6d67ef97547ab0b25"
  },
  {
    "url": "assets/js/35.322e1fa6.js",
    "revision": "ff96f290536217af709e9a6b10c0d7c6"
  },
  {
    "url": "assets/js/36.87012c5d.js",
    "revision": "4ece623bd19ab3e8fa7ad4a3363be57d"
  },
  {
    "url": "assets/js/37.4e0e8c53.js",
    "revision": "bd38ece66b5d15cf255edca972a3b5e6"
  },
  {
    "url": "assets/js/38.5098200c.js",
    "revision": "339f93ba3c841a709ae0496dc34a1c12"
  },
  {
    "url": "assets/js/39.7e7fa219.js",
    "revision": "cc2d101602f5b180c4c959c47d827d6d"
  },
  {
    "url": "assets/js/4.8c25cbed.js",
    "revision": "b25688727d321ba67d097b0d76c7b678"
  },
  {
    "url": "assets/js/40.f0e35b5a.js",
    "revision": "c6faa0d29bf264fbc17afd4345351088"
  },
  {
    "url": "assets/js/41.d5a6c518.js",
    "revision": "c5e207e3cfd3ce4aa0ca21ad3da16976"
  },
  {
    "url": "assets/js/42.1f006f03.js",
    "revision": "b40cf1ea7e9a38dcc77f66a1176253f2"
  },
  {
    "url": "assets/js/43.ba4564b7.js",
    "revision": "16ec43f903c7921e6e01e8153c1ec98b"
  },
  {
    "url": "assets/js/44.a238f281.js",
    "revision": "eb8a97cc549e5b746c0d1f511a5cbb1b"
  },
  {
    "url": "assets/js/45.e079ca3c.js",
    "revision": "6558d493f3f6df41876ae174fdbab360"
  },
  {
    "url": "assets/js/46.3fe52770.js",
    "revision": "c725cf2d67c7c7d9361dfc42db3a77b0"
  },
  {
    "url": "assets/js/47.85b42d94.js",
    "revision": "4b1415f4f5bb2d81bbc2de1c76a7b815"
  },
  {
    "url": "assets/js/48.7bee0622.js",
    "revision": "03b2edd67acce087b80ce0e4996484e7"
  },
  {
    "url": "assets/js/49.ff95d0e5.js",
    "revision": "8c356d2496553266ea95079f9c3a3a21"
  },
  {
    "url": "assets/js/5.b2a21b98.js",
    "revision": "a005e72a336f2e918ce6982625350e91"
  },
  {
    "url": "assets/js/50.f1bc26b2.js",
    "revision": "73307ca7c96a6edc61babf7d8d43035e"
  },
  {
    "url": "assets/js/51.952d06a9.js",
    "revision": "2773e233acbae1910fd5ab2d13233616"
  },
  {
    "url": "assets/js/52.7094ff0b.js",
    "revision": "634f2adb8f12c22c1256534827e423e2"
  },
  {
    "url": "assets/js/53.8717195c.js",
    "revision": "865d8bb38b5f5634dfc60f0f8cba803a"
  },
  {
    "url": "assets/js/54.a5a320d0.js",
    "revision": "b8b5300e51930e6bcdbf01f50a7ab036"
  },
  {
    "url": "assets/js/55.86f94dff.js",
    "revision": "e8fb31de2df2ded0310aba5c488f1484"
  },
  {
    "url": "assets/js/6.6f23fd82.js",
    "revision": "d753ab3dd283743590f0b6f017c18ec7"
  },
  {
    "url": "assets/js/7.e26b3b64.js",
    "revision": "4068f06cbedce8e7c6953361a2a29b20"
  },
  {
    "url": "assets/js/8.1255d848.js",
    "revision": "ad27aa87efd2022e00e8e4664879fbe5"
  },
  {
    "url": "assets/js/9.a7804df5.js",
    "revision": "d48e7a78104642c2c30262c5872f9137"
  },
  {
    "url": "assets/js/app.99b2b85e.js",
    "revision": "e6db745a21905e97f2667687404d92cc"
  },
  {
    "url": "category/index.html",
    "revision": "74649d0a06da0e474ad78d190be80204"
  },
  {
    "url": "docker/CentOS7安装Docker.html",
    "revision": "fae54106516735dc3ced66565e9ca1f3"
  },
  {
    "url": "docker/DockerFile.html",
    "revision": "f74a89947cca2a8d6c5ece685948875b"
  },
  {
    "url": "docker/Docker使用前提.html",
    "revision": "02dcffbebcaca1eee9e090e35b89ada3"
  },
  {
    "url": "docker/Docker容器命令.html",
    "revision": "365d79e59d62c93d3115107da42ef5eb"
  },
  {
    "url": "docker/Docker数据卷.html",
    "revision": "1d9707d490347707468a3a4f0f40b33e"
  },
  {
    "url": "docker/Docker网络配置.html",
    "revision": "fd8dbfd5dac7a05325146dbb35af04ac"
  },
  {
    "url": "docker/Docker镜像命令.html",
    "revision": "72177c39a96c0bc77a941bf795f4dffa"
  },
  {
    "url": "docker/index.html",
    "revision": "3f2896503a690ed520d3eb6844e94a24"
  },
  {
    "url": "docker/前世今生.html",
    "revision": "2f1670139e352ee954e89e1d0d0b9b55"
  },
  {
    "url": "docker/待续.html",
    "revision": "e5cd011330a971b85b1a8fb5fcd45ba6"
  },
  {
    "url": "docker/简单使用Docker.html",
    "revision": "560e001bbb25e8d28b9f3a8d3ecce810"
  },
  {
    "url": "docker/镜像制作.html",
    "revision": "e7c2f32c5eed94747c29ed61a3878f5c"
  },
  {
    "url": "hacker/index.html",
    "revision": "c25032e1dbd619f41717ad31831e246b"
  },
  {
    "url": "hacker/待续.html",
    "revision": "89b4292dab4ec2f276f5f06c98d48a8c"
  },
  {
    "url": "hacker/汇编Helloworld.html",
    "revision": "2a08867d033b301a7e27680bb9b75e3c"
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
    "revision": "dcd649529cd5ef4251e2fb1e20707733"
  },
  {
    "url": "Linux运维/CentOS7网络配置.html",
    "revision": "47bda4b0fcfed92d650b4d8ea4a44a07"
  },
  {
    "url": "Linux运维/index.html",
    "revision": "3c793a1b8e8e3d3cbfc891f6403835d8"
  },
  {
    "url": "Linux运维/Linux三剑客.html",
    "revision": "fecb182aa10a0a8f6ee92b73a45d7854"
  },
  {
    "url": "Linux运维/待续.html",
    "revision": "7b96aff26b6f9fcaf0e01ed77ae0fa81"
  },
  {
    "url": "Linux运维/系统符号.html",
    "revision": "57d33ac2aebd993210697f716eec6287"
  },
  {
    "url": "Linux运维/虚拟机安装Centos7.html",
    "revision": "038557b300cb41922975026c400c7ac7"
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
    "revision": "eba8b9f53c7bba461c319a2d960a3beb"
  },
  {
    "url": "lvs/index.html",
    "revision": "9cdf35384e0d106c47ff16612c5cf77f"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "a42e2938220b739223bd8907b55df9b9"
  },
  {
    "url": "mongo/index.html",
    "revision": "415d7119afe62f9ce430bc61cd55ddd6"
  },
  {
    "url": "mongo/主从复制.html",
    "revision": "20330128d27d72993f778d3ee3a61663"
  },
  {
    "url": "mongo/待续.html",
    "revision": "a15df7a080c64a1a9d6a82bf8231df9d"
  },
  {
    "url": "nginx/CentOS7安装Nginx.html",
    "revision": "7f9dde4b3b5561abef165a2700a94876"
  },
  {
    "url": "nginx/Docker安装Nginx.html",
    "revision": "798dcdf2cd0355d723438747f90adbfd"
  },
  {
    "url": "nginx/index.html",
    "revision": "b09bd8842006046e7ab93769d93ee1f0"
  },
  {
    "url": "nginx/Nginx动静分离.html",
    "revision": "cfbd77c0d277934c58f7f5d1c64e6628"
  },
  {
    "url": "nginx/Nginx反向代理.html",
    "revision": "8ddc5b2e669e7441575f663483257b1d"
  },
  {
    "url": "nginx/Nginx基本概念.html",
    "revision": "d579df34d0e6e37cd48b2be1933b1f63"
  },
  {
    "url": "nginx/Nginx负载均衡.html",
    "revision": "d67f02d851ff6d64c969b2884b53fd3f"
  },
  {
    "url": "nginx/Nginx配置文件.html",
    "revision": "0c246119b78a7c5fd492c4de8ef814de"
  },
  {
    "url": "nginx/Nginx高可用集群.html",
    "revision": "a257cc05c03c8bfef4f42e99c8a9c730"
  },
  {
    "url": "nginx/待续.html",
    "revision": "f4035d1fc83ce740b4fd11d325df3174"
  },
  {
    "url": "redis/index.html",
    "revision": "3ebae8d8004de74f16e25811447e1a60"
  },
  {
    "url": "redis/Redis主从复制.html",
    "revision": "7bd47e6a068555675eb8ce3646187a1a"
  },
  {
    "url": "redis/Redis哨兵.html",
    "revision": "2ac1b605056d05f4dec7fad4782e58ee"
  },
  {
    "url": "redis/Redis数据类型及应用场景.html",
    "revision": "09c8480094df9e16659ca4541c4ab456"
  },
  {
    "url": "redis/Redis集群.html",
    "revision": "d783b963d08a607b0d5bdd0c98630ba9"
  },
  {
    "url": "redis/待补充.html",
    "revision": "dc5120bf4f9337dfd88415573789c655"
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
