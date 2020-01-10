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
    "revision": "70ed78975bec8c8fe72d5a5a29cd9be7"
  },
  {
    "url": "about/index.html",
    "revision": "7569c3189c6c62c8bbfd4540f259ed18"
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
    "url": "assets/js/10.bf71210f.js",
    "revision": "eef53d3708ecb41f6e1dde0e744b2135"
  },
  {
    "url": "assets/js/11.a96bf13e.js",
    "revision": "4e6442894dd5dd195b2d0a39565aaad8"
  },
  {
    "url": "assets/js/12.450ed248.js",
    "revision": "83607ad7691fe3a9008cbd82036c2e98"
  },
  {
    "url": "assets/js/13.a676edef.js",
    "revision": "d056647d1fb5c8ebd3dcec77850b64f1"
  },
  {
    "url": "assets/js/14.c3c0c30b.js",
    "revision": "1318598c3e8716847285d6646147d6af"
  },
  {
    "url": "assets/js/15.8aa5b3b0.js",
    "revision": "913e2c35cdec46240fd9222ccab4dede"
  },
  {
    "url": "assets/js/16.680d1359.js",
    "revision": "4ea78f14e7950d69845ca3507191fa51"
  },
  {
    "url": "assets/js/17.3e89f18f.js",
    "revision": "7c8891fb06a7012ebd5587d9c9f6acea"
  },
  {
    "url": "assets/js/18.878a271b.js",
    "revision": "f2fcff61011bd65d60b91cbf7a8e2ca1"
  },
  {
    "url": "assets/js/19.f9c3c028.js",
    "revision": "2c22b734e4d35b118b6845bfa0a16de3"
  },
  {
    "url": "assets/js/2.5cb3218f.js",
    "revision": "e25e9c809d2d161eaf8feb2c07b7a711"
  },
  {
    "url": "assets/js/20.bfc09f13.js",
    "revision": "494878c65960d07a6c1bd9d08b142885"
  },
  {
    "url": "assets/js/21.551fe592.js",
    "revision": "995cce5c1a5d2c02170e56cb14fd49c4"
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
    "url": "assets/js/30.b5b34866.js",
    "revision": "b318b46e5b2daf96a2205a3798dc6cb5"
  },
  {
    "url": "assets/js/31.4343044b.js",
    "revision": "858b26995a1ef0b51f8c9694670bb445"
  },
  {
    "url": "assets/js/32.5397be32.js",
    "revision": "f2ae72c81884cfe63653bd50dedc8d17"
  },
  {
    "url": "assets/js/33.0c5682e5.js",
    "revision": "594af5fabb48763d0fe3f47fe43ffaf6"
  },
  {
    "url": "assets/js/34.3060c2d6.js",
    "revision": "392c400890a377d503a5afd784e84944"
  },
  {
    "url": "assets/js/35.852d988f.js",
    "revision": "1a4af53b6d48a0354c11266206452f10"
  },
  {
    "url": "assets/js/36.b2ec1f94.js",
    "revision": "52b310b36ff9b1af5f4ddaa759d2b915"
  },
  {
    "url": "assets/js/37.1aafb498.js",
    "revision": "f317c81e540bea84e9e02de6b82b8809"
  },
  {
    "url": "assets/js/38.964fea38.js",
    "revision": "5486ed0f175e237b031bab24139faaab"
  },
  {
    "url": "assets/js/39.13559cdf.js",
    "revision": "7b3cd2a5c7a61a7647ec402889899f4a"
  },
  {
    "url": "assets/js/4.fcd886c0.js",
    "revision": "aa1d90d5d6e385b809472279a045846d"
  },
  {
    "url": "assets/js/40.1c9fc439.js",
    "revision": "fae8da690bf6b11267781b1e2ce5f95c"
  },
  {
    "url": "assets/js/41.97ea81a8.js",
    "revision": "7cb1f830403ed0ada13c7ec3e69906ec"
  },
  {
    "url": "assets/js/42.abd56071.js",
    "revision": "24f076df0fd9546e536149cf486973b2"
  },
  {
    "url": "assets/js/43.03968039.js",
    "revision": "aa32025031298274c8f84dcaef1fef83"
  },
  {
    "url": "assets/js/44.64dcd4bc.js",
    "revision": "9c82bd03aa61b34128401c5166e185e2"
  },
  {
    "url": "assets/js/45.3fd213ae.js",
    "revision": "06042fb161e6475430cb4b5be941db7f"
  },
  {
    "url": "assets/js/46.e52634ae.js",
    "revision": "c37029bf9ad12c1eaffa02bf450df5be"
  },
  {
    "url": "assets/js/47.b69055a2.js",
    "revision": "ec4c595d75c973ca13529bb47343c6ad"
  },
  {
    "url": "assets/js/48.c132b907.js",
    "revision": "beec36cc697d7e4d7daf5398b803b98f"
  },
  {
    "url": "assets/js/49.6be53e18.js",
    "revision": "9ce78ad7fd9ed858ce73a6eccf0990b6"
  },
  {
    "url": "assets/js/5.b2a21b98.js",
    "revision": "a005e72a336f2e918ce6982625350e91"
  },
  {
    "url": "assets/js/50.d01b44ad.js",
    "revision": "e3924fb1007bf026bb59e7a57df2326e"
  },
  {
    "url": "assets/js/51.a06e49f8.js",
    "revision": "b2530ddef6bb6352951180c7bffa415c"
  },
  {
    "url": "assets/js/52.4d0382b4.js",
    "revision": "bca77ccd355d9837d27eaa0216ace322"
  },
  {
    "url": "assets/js/53.ac839bbd.js",
    "revision": "fed9c3a45285bbdcba3cc0621de6bb90"
  },
  {
    "url": "assets/js/6.7281828a.js",
    "revision": "2507b3b4043b742349b97b90588bb7d0"
  },
  {
    "url": "assets/js/7.14fdcee5.js",
    "revision": "63a654e4c40033d264600464dd512489"
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
    "url": "assets/js/app.db9474b9.js",
    "revision": "fe6781a38cbb64bb7339953dbd2745fd"
  },
  {
    "url": "docker/CentOS7安装Docker.html",
    "revision": "0cca37a9dd827f42f0ddf212f5151215"
  },
  {
    "url": "docker/DockerFile.html",
    "revision": "42e08a15d1716b80c313d30e7f3eb18c"
  },
  {
    "url": "docker/Docker使用前提.html",
    "revision": "1bf2960367388076dbec0e239cb48494"
  },
  {
    "url": "docker/Docker容器命令.html",
    "revision": "f20ed99e0e4e56af2fcb701b098fee89"
  },
  {
    "url": "docker/Docker数据卷.html",
    "revision": "9c14585abad3165d75fb7b2bb3d7671a"
  },
  {
    "url": "docker/Docker网络配置.html",
    "revision": "f7215b4f551637c550471157b8a84e3a"
  },
  {
    "url": "docker/Docker镜像命令.html",
    "revision": "6fa2bf2d892bfb9edde840adeeab4f89"
  },
  {
    "url": "docker/index.html",
    "revision": "8f506f7fda6eccd3cdeb133714cc591d"
  },
  {
    "url": "docker/前世今生.html",
    "revision": "7f5d1af193b348d1a8d99b65b5c4ed15"
  },
  {
    "url": "docker/待续.html",
    "revision": "0981fa1fc2921af626d416abd3cd162e"
  },
  {
    "url": "docker/简单使用Docker.html",
    "revision": "7ad43744f6bc2565c80ed49dfd94fb43"
  },
  {
    "url": "docker/镜像制作.html",
    "revision": "216e0fe0bbf4c4aa01c23b0a77fb02df"
  },
  {
    "url": "hacker/index.html",
    "revision": "c6a9e28430decb3777cad202096f6202"
  },
  {
    "url": "hacker/待续.html",
    "revision": "532f5193045445f360f0ed51b692beb1"
  },
  {
    "url": "hacker/汇编Helloworld.html",
    "revision": "e5d0bdc7db541d9302290345473efaf7"
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
    "revision": "5a8ab236b006de96b6211055603ae81f"
  },
  {
    "url": "Linux运维/CentOS7网络配置.html",
    "revision": "aaa3a980358afb4fdac9f244aea16d0d"
  },
  {
    "url": "Linux运维/index.html",
    "revision": "f35fc51df19cdd6a81ba7bc02a54c1f6"
  },
  {
    "url": "Linux运维/Linux三剑客.html",
    "revision": "da35be5e9338a7168a9ce2849f9b176d"
  },
  {
    "url": "Linux运维/待续.html",
    "revision": "e44b54560b6bf63b5d80122471bf28f2"
  },
  {
    "url": "Linux运维/系统符号.html",
    "revision": "b4bd7a79f8a6e60c62e7ac5ac3709823"
  },
  {
    "url": "Linux运维/虚拟机安装Centos7.html",
    "revision": "bf7a51a8c9c3bc3c22deede5229b9c69"
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
    "revision": "fd2e38792ad6c21512ef08320c4332c4"
  },
  {
    "url": "lvs/index.html",
    "revision": "8448b4f4b054f847afbbe746c00d6ab2"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "5a7493ec6919647c7c0f1373196bcff7"
  },
  {
    "url": "mongo/index.html",
    "revision": "ee959f35959d5444a8f5a297677ae3b6"
  },
  {
    "url": "mongo/主从复制.html",
    "revision": "f05674a831a7922fc4f89cd27e7d3057"
  },
  {
    "url": "mongo/待续.html",
    "revision": "b729ccc7bb97f774eb671638fa16f7aa"
  },
  {
    "url": "nginx/CentOS7安装Nginx.html",
    "revision": "870eff2a7842fc363021cb2126881e4b"
  },
  {
    "url": "nginx/Docker安装Nginx.html",
    "revision": "d74a6fbddd8a042e19e2c04c4ab52301"
  },
  {
    "url": "nginx/index.html",
    "revision": "85ef88509915f16110b96447374d7bfa"
  },
  {
    "url": "nginx/Nginx动静分离.html",
    "revision": "60d31c7ab32572096ab0472c5cd72f78"
  },
  {
    "url": "nginx/Nginx反向代理.html",
    "revision": "751b0dc0a228ff30eaefe295e4a22aeb"
  },
  {
    "url": "nginx/Nginx基本概念.html",
    "revision": "0ee4724cd64063af73f2a3756b19d891"
  },
  {
    "url": "nginx/Nginx负载均衡.html",
    "revision": "b77ab7503c7fd1accbe0423670ca6da8"
  },
  {
    "url": "nginx/Nginx配置文件.html",
    "revision": "f485b1f161c0cb529af0b296bb37a823"
  },
  {
    "url": "nginx/待续.html",
    "revision": "666bac9dd49a42973f1cc97e6cc3047c"
  },
  {
    "url": "redis/index.html",
    "revision": "ae0868436381bab9205206c1383eb02d"
  },
  {
    "url": "redis/Redis主从复制.html",
    "revision": "85b57a2b27fb5bf453140d034f2fca96"
  },
  {
    "url": "redis/Redis哨兵.html",
    "revision": "21bc32f90a91ec89930075599b009d34"
  },
  {
    "url": "redis/Redis数据类型及应用场景.html",
    "revision": "d158125bb17536b9f8e5cad270ed78ce"
  },
  {
    "url": "redis/Redis集群.html",
    "revision": "aeed9311831ec1eae471ace1e3d6ca18"
  },
  {
    "url": "redis/待补充.html",
    "revision": "35ed59624e84e886f26ea5ef4e18d1a0"
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
