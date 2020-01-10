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
    "revision": "ad575c3744db2b50bb4c5391f76a93b2"
  },
  {
    "url": "about/index.html",
    "revision": "b72eec28680970b625e5f166be767f55"
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
    "url": "assets/img/Static-dynamic-separation.f1b18242.png",
    "revision": "f1b18242838c9d54c389d1f67c100a38"
  },
  {
    "url": "assets/js/10.e454a9ad.js",
    "revision": "a4486cb2e50dbad9e1d402cfb797d67d"
  },
  {
    "url": "assets/js/11.deb9c515.js",
    "revision": "f4e18cf1464d896ad2e572345261f6fb"
  },
  {
    "url": "assets/js/12.32ce0a65.js",
    "revision": "2057030b8518b5f84e088ea1f91eba35"
  },
  {
    "url": "assets/js/13.9e485695.js",
    "revision": "8eefbc8b58fdc7066d5e2a975880f9a0"
  },
  {
    "url": "assets/js/14.8adcc521.js",
    "revision": "a45129df7e5e6829cf9b7aa10cc688c2"
  },
  {
    "url": "assets/js/15.e72c034b.js",
    "revision": "8bde8eabb433b38bcc692ef722aacdab"
  },
  {
    "url": "assets/js/16.01c81fdd.js",
    "revision": "276fd36550b2277fbbcef99aea509de3"
  },
  {
    "url": "assets/js/17.3ac2459d.js",
    "revision": "efeeda3bb22dc21dec59d6298eebb887"
  },
  {
    "url": "assets/js/18.05065b93.js",
    "revision": "08794443453c5d9722ded6db720f34e4"
  },
  {
    "url": "assets/js/19.68976b90.js",
    "revision": "7b7862fd7f551c62d4eaf69f675d5f11"
  },
  {
    "url": "assets/js/2.085d04dd.js",
    "revision": "5776391d98c60f17529ca11d245f9225"
  },
  {
    "url": "assets/js/20.0f753a3f.js",
    "revision": "8c94ba3b7f1807910ff1767ec6b863a5"
  },
  {
    "url": "assets/js/21.c423b369.js",
    "revision": "f9b314bda2b3e46769a5d422507a3e87"
  },
  {
    "url": "assets/js/22.c5a5e214.js",
    "revision": "ffe676e3528d8fa6f78360b2098d3da9"
  },
  {
    "url": "assets/js/23.2b5d950b.js",
    "revision": "7484c49bcac8d56880b1a3efd2119416"
  },
  {
    "url": "assets/js/24.69f439ea.js",
    "revision": "d07e374060516be19db8437925943e35"
  },
  {
    "url": "assets/js/25.29c88c62.js",
    "revision": "af4aa2eb60d02fa56adc3c9f0198279a"
  },
  {
    "url": "assets/js/26.1ce1c4ba.js",
    "revision": "46a5039e782041b8e8b66595a68cb475"
  },
  {
    "url": "assets/js/27.ee7aafd7.js",
    "revision": "cdfda20343d0e23a929295952acf6e22"
  },
  {
    "url": "assets/js/28.f2e9d827.js",
    "revision": "543d35d924e66c98108c2993ccba984a"
  },
  {
    "url": "assets/js/29.0846043d.js",
    "revision": "b4b36e35b714d04b67e36157ec041acd"
  },
  {
    "url": "assets/js/3.728ca9c9.js",
    "revision": "99c65826829b77ef1dbfb0c2bdb610bc"
  },
  {
    "url": "assets/js/30.baf0a538.js",
    "revision": "4529704fde8c234fecd2a47030f1d479"
  },
  {
    "url": "assets/js/31.ee21f350.js",
    "revision": "d17e4ad52c6654d7e0724a201a5f26ee"
  },
  {
    "url": "assets/js/32.149033bf.js",
    "revision": "a01ca3e6488d2f45106b4ea3df3915fa"
  },
  {
    "url": "assets/js/33.678ab032.js",
    "revision": "626eb7806ce5aca02e62c93fd53f6337"
  },
  {
    "url": "assets/js/34.03eaf382.js",
    "revision": "8a2e640519e0ab914e1f405f5e4f0796"
  },
  {
    "url": "assets/js/35.7064940f.js",
    "revision": "2cdad6b62104c4dc139245976dd7e53e"
  },
  {
    "url": "assets/js/36.92f07c0f.js",
    "revision": "a7201c522655dfbfd12ae953af985885"
  },
  {
    "url": "assets/js/37.cf2db534.js",
    "revision": "33da45c17cd364e0ccd0ef11b1faa132"
  },
  {
    "url": "assets/js/38.0f561a3b.js",
    "revision": "72a4879fa83826b6e0760a88866bf6f1"
  },
  {
    "url": "assets/js/39.f393a20f.js",
    "revision": "5aca57209b610d2af6fa9645d8f2685a"
  },
  {
    "url": "assets/js/4.29bf2186.js",
    "revision": "799f8b2732a46fd5f16b2f099d562456"
  },
  {
    "url": "assets/js/40.f8baf259.js",
    "revision": "1d00768cd3c56b1b564b740e56da98b0"
  },
  {
    "url": "assets/js/41.5ed5a5e6.js",
    "revision": "42597bcb02a83105e3819c5b66f98270"
  },
  {
    "url": "assets/js/42.128e3cc8.js",
    "revision": "20ee7777ac988b772d7ef4ccb51b123c"
  },
  {
    "url": "assets/js/43.6d34ae9e.js",
    "revision": "118b999137afdf8d15df114169025f82"
  },
  {
    "url": "assets/js/44.cc403134.js",
    "revision": "d3e3635161f1029da29716385c811d1a"
  },
  {
    "url": "assets/js/45.87f4b880.js",
    "revision": "1e37c7a64059e4169e632426a9eb3d53"
  },
  {
    "url": "assets/js/46.a353c859.js",
    "revision": "0c327a5a07ad2c89d18948a212c25f60"
  },
  {
    "url": "assets/js/47.aeac1a5e.js",
    "revision": "817aac4f7c152993303870320d650041"
  },
  {
    "url": "assets/js/48.4256294d.js",
    "revision": "235d70bf30660ac138ef7ddc67d7c417"
  },
  {
    "url": "assets/js/49.c42c2ea9.js",
    "revision": "e52d3f34aec78a49242bf76d872d7dd3"
  },
  {
    "url": "assets/js/5.e4a3f086.js",
    "revision": "bfc6f53cb7a2f01e0664cd25713e7dcc"
  },
  {
    "url": "assets/js/50.71831116.js",
    "revision": "7ec6e64a7563253d07ae0b1f1224ee46"
  },
  {
    "url": "assets/js/51.b42a4430.js",
    "revision": "db162ea701193bb4b7b7bfb67406cc32"
  },
  {
    "url": "assets/js/52.1a343c54.js",
    "revision": "5b78ce7bfbdc11b8891b5c269168eb7b"
  },
  {
    "url": "assets/js/6.a5c3019a.js",
    "revision": "852bcb65f4851abb862326e5465708c9"
  },
  {
    "url": "assets/js/7.75dedf1c.js",
    "revision": "bed74c49a4e73b0323f956fbc4b7d55f"
  },
  {
    "url": "assets/js/8.11f30330.js",
    "revision": "a39dac69c98462ac6087dc7c487886e8"
  },
  {
    "url": "assets/js/9.a873ed6a.js",
    "revision": "325730edfb5f3ad265e2edb5d4a68cf1"
  },
  {
    "url": "assets/js/app.dda5d822.js",
    "revision": "c95fc03d5dcd525032c437886eb805cd"
  },
  {
    "url": "docker/CentOS7安装Docker.html",
    "revision": "7afbcfa197ecd08201878c4ebceeb713"
  },
  {
    "url": "docker/DockerFile.html",
    "revision": "4e6a9e1195a507044db57b4fd1af5d61"
  },
  {
    "url": "docker/Docker使用前提.html",
    "revision": "4051372c448076e258ac46980e422199"
  },
  {
    "url": "docker/Docker容器命令.html",
    "revision": "a308a77b5a4a9b6a73bacb20c87b8047"
  },
  {
    "url": "docker/Docker数据卷.html",
    "revision": "90e41d05cc61899a18165f24f934fff8"
  },
  {
    "url": "docker/Docker网络配置.html",
    "revision": "5459c8d11b267858574f92651e7babbe"
  },
  {
    "url": "docker/Docker镜像命令.html",
    "revision": "f056bcc43c4fea7426a959e203d48d0d"
  },
  {
    "url": "docker/index.html",
    "revision": "5527359abc30d42d90cf8c79180cc873"
  },
  {
    "url": "docker/前世今生.html",
    "revision": "4dd6cab904be1d3721e242db12068433"
  },
  {
    "url": "docker/待续.html",
    "revision": "8e52594505a8b9013f2cbe9a88c9bdb7"
  },
  {
    "url": "docker/简单使用Docker.html",
    "revision": "3ddf3baab413c632701d35cbd439dd6f"
  },
  {
    "url": "docker/镜像制作.html",
    "revision": "f649f0a7dba43f1695375415405c6259"
  },
  {
    "url": "hacker/index.html",
    "revision": "18da57e609fb0e6c7960e8e617ca2ead"
  },
  {
    "url": "hacker/待续.html",
    "revision": "141b1ca1ec085efa1dbe25b394e905cf"
  },
  {
    "url": "hacker/汇编Helloworld.html",
    "revision": "6abac1de0a9dc3e6f6654183005ab5df"
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
    "revision": "2d0f72b4f37c0c2003880b7568146e6b"
  },
  {
    "url": "Linux运维/CentOS7网络配置.html",
    "revision": "11e9cd69c6178eb043cb21bfb7e94144"
  },
  {
    "url": "Linux运维/index.html",
    "revision": "ca7f9966132e2cd7a7b13a35086da6f9"
  },
  {
    "url": "Linux运维/Linux三剑客.html",
    "revision": "a27d37f0bdd7bea35decdfdb97103389"
  },
  {
    "url": "Linux运维/待续.html",
    "revision": "d98a16d15b517597a409848415243608"
  },
  {
    "url": "Linux运维/系统符号.html",
    "revision": "5df603b59e7e09869996757aed4dff1b"
  },
  {
    "url": "Linux运维/虚拟机安装Centos7.html",
    "revision": "e12aaaf90890517931c589249bd13b8e"
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
    "revision": "e918a476f31e14d51d5d8d2093aa0d4b"
  },
  {
    "url": "lvs/index.html",
    "revision": "d057c410e15ccda7d65a9cb60260cdf3"
  },
  {
    "url": "lvs/LVS.html",
    "revision": "16dfe99ebd8f17e75e91c45201d42b5a"
  },
  {
    "url": "mongo/index.html",
    "revision": "58bf8039ed998760e16c1f1926a4733a"
  },
  {
    "url": "mongo/主从复制.html",
    "revision": "ba50a682e2b52e9b32841c42aef8fc41"
  },
  {
    "url": "mongo/待续.html",
    "revision": "bab85e2771414ec37f0549ee7a833406"
  },
  {
    "url": "nginx/CentOS7安装Nginx.html",
    "revision": "fcbded81f771f90bbfc0d9911c0ef78c"
  },
  {
    "url": "nginx/Docker安装Nginx.html",
    "revision": "291e28ea18345c103081042c68e22ba4"
  },
  {
    "url": "nginx/index.html",
    "revision": "7ae8cc5ec9f99db074e076acd74b34b2"
  },
  {
    "url": "nginx/Nginx反向代理.html",
    "revision": "6c8b2c41390ea2d5e5bd712299546f0a"
  },
  {
    "url": "nginx/Nginx基本概念.html",
    "revision": "f05117191512e49800776afe30a72823"
  },
  {
    "url": "nginx/Nginx负载均衡.html",
    "revision": "790e22b965180652b569e800163a7756"
  },
  {
    "url": "nginx/Nginx配置文件.html",
    "revision": "e424845a3d9c69012d2fb924deca6e33"
  },
  {
    "url": "nginx/待续.html",
    "revision": "2ff4173908592bf1b9c523e8375312c8"
  },
  {
    "url": "redis/index.html",
    "revision": "b5b455b0076670aeef83ada8cde1a3a0"
  },
  {
    "url": "redis/Redis主从复制.html",
    "revision": "f732f06e16c4eaf29b5884f1eb2856f3"
  },
  {
    "url": "redis/Redis哨兵.html",
    "revision": "4a7ed11e09cb9ed2465540fa3afd0b41"
  },
  {
    "url": "redis/Redis数据类型及应用场景.html",
    "revision": "c17f1567a0903217ccce750dbc58354e"
  },
  {
    "url": "redis/Redis集群.html",
    "revision": "ab3ccc10c72c2b14c76ceb5bcfc7626e"
  },
  {
    "url": "redis/待补充.html",
    "revision": "9e5fc32527b7a25ca0b78da7b70ccdac"
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
