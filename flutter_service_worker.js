'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2d43355a6163fbb1f5277f4df8a136ad",
".git/config": "bbb40a089f798a96e83c28c4322e1c83",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "b567ea64124dbe91b7ed5eeda791619a",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "7a5c3291367df8d7938bd753de3d3cb9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b8bc27504f7610bb8aa1bb14f38aa3f9",
".git/logs/refs/heads/master": "b33e0883a3f719c693a0cd7b572712ca",
".git/logs/refs/heads/master1": "58195c596eb9e1562525de7ab24dec61",
".git/logs/refs/remotes/origin/master1": "d6b7b8067eb288867a88c5497cc7d64c",
".git/objects/03/2484af7c4433a7c6c388640ae289e36af405f9": "159f377d4bf7f5b92f8b8a33a239f84e",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/486540afc860b0154c456fd8626094d2caa793": "ca02d6f84d749ad82e51cbc69ac69f7d",
".git/objects/07/678ba3221c701ec9fc28119b07a6347d46ce94": "9fa8e39def33bc0bd8639399549e4015",
".git/objects/07/7bd4639bc95dd6e2e80ee66d83dc30f75d6f70": "09c55c164a06f295f02b797ada761cda",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0f/80214b8e772357cc766efc4960a15ae76cbd5b": "9127ba961124d2c51b875b51c760e8a0",
".git/objects/10/8ff4366fa93dc5e29b914313328c8020b82fca": "b1ecad981662a8a80ef8e743086c2ae6",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/22/7b4b8944e1d45997a4cf3bbdba71f65e45d62b": "0a57a0d76f6a625102d69f795c9f6463",
".git/objects/23/c53c8dfad4b483a08880f7d4d4ffc288f106d3": "75f7225389cf0d1992a37a27bbf62375",
".git/objects/2f/21df12567882d7bf570c744a5d5bd1875912f3": "f98299ea189e250a07cbc84c1cb7c65c",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/40/24183914fe85cbb92bcdc78d857bb34ab9b29a": "4f2c92833bdfc198c1f242d656fae3f0",
".git/objects/43/aff63a34b66ed2c7a4fe311bc9ff6c49322b14": "01934bb088fe3764de264bd384b6cbb0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5070c3d6be654e68188032d18c50df5b9df3b3": "28218e866b89283f1b1ff3ee67303423",
".git/objects/49/4fe1c78ab9abfd21b3527e12dcbfb768eddc13": "76c1e13b1c2b985555b6152bf6382a9b",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/0d5692e32e106264b2e5f3802c021697387564": "2c3e53931d65a30720b18f79bfd1c412",
".git/objects/52/faba3d23c5ac4fc24ae3e52d438eabfaaf8fae": "2239e4ba595cdd9a19270bdc9ea54577",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/9326a507a36a7d32e6ecf25901bc5ed9be3b24": "415c2d868e600048b0a3915cc9a4e9df",
".git/objects/69/715971ad3e9871969ed217ef309ed1105e7870": "a2f5750c5264696b603ace364464fe42",
".git/objects/6b/2adc66d8070f344ffeca97d8dad161f869b82a": "29709407ff252536fb14ecf51af06c1c",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/76/d1e34b6ccf951b166db53cd59d8183cded7586": "cae1607f586c1c9d031ab42572e610d0",
".git/objects/81/842c03530123f5be9f65e889677dc6f5e22fc6": "b0f91f3cfaadebfbd967913b1965cba9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/5e4768aeaa7765ed536b4badf38ef73c4db1ea": "bdacf696b1aead055be13bf510272b7c",
".git/objects/8c/2c8407e79bd5f67969487c1028db745fca11fa": "fb07888ddb48dc1ec7497b1048793f59",
".git/objects/8d/336ed7ed81bcb503aea2fdc4ad9c096e677ab2": "227cfa931d0cdc051decf56f53a50b84",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/92/afb0f7cc76ec623b7e2295deb15afe2aa4fb2a": "e604ea9e681fc8934b433611ac450ed8",
".git/objects/97/262895e98083cf759de45696d029c3d68f248b": "90127469c8f1637b19dd990c899ada12",
".git/objects/97/3da7ba2f91e80da1248ef931e8e938cb421d9c": "094b86d22faa4f5d572c622dee90bd6f",
".git/objects/9f/7065745a7ba13c3bbd1fee36e667bd62acaada": "3e974f4d6703411f2bc0b9b143158439",
".git/objects/a3/6836d2a11b1ea89ac38e00c76243b71bfe6cc0": "4a44ad4b497a77ec1471e48bb17a6219",
".git/objects/a7/90e64cb9bb7d20bae6c00e1e38926483413014": "7331223d75b59a672934ceeba5cb1d0a",
".git/objects/a9/a84e30885b98e592d80129c37ba69416793639": "f4a44988ed3a0e5190d1062e5e07a87a",
".git/objects/aa/181820384743498bc5475856c7b26bf023eb0f": "53513da1e28348f2828d5a98fe9437c7",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/c4761defdf34dca8e2936ff6c34a4b3132f675": "c5fab1a8987cf53c0c469ef40753191b",
".git/objects/be/5baba5539dc0ee38488ac5d86ccb4b213ea339": "2dd3ee0113669270db24d5c6138ac049",
".git/objects/c2/3c5a3531175a3b9d5853c9e787e685dffd30b4": "9415a68a9944abda4c4c70dcf39bb2fa",
".git/objects/ca/66a11e9973163340787963249e94ad45275d46": "ab34b6cbf53ee96e15b29f53d477fd98",
".git/objects/cf/617cb903b5d2a3338f907b51ecca37e10738ac": "db76c1b8d672e2a3d33cddae137fda29",
".git/objects/d0/9c5695755afe1b2160a2111cb6367debd037e9": "0cfd5181e34be39c0234cd084a260257",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/3b198dc657a01676cb82ebd7382beea9feccfd": "f8229dad00313de330646d127dabb284",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/750efd2ce549fc381b61587788450f0367d66b": "c5e18058e3424736c31b75c0b8aec8b5",
".git/objects/f3/d04248062ecbeead74d94e2eb4a980ccf7dac6": "7ce44d701364ee2ca9200bb00cbb933b",
".git/objects/fc/9d8456dc2eb77c4d15249e53b9e15fad97b2d4": "66891e2506cf417e5494109361f7be03",
".git/refs/heads/master": "7389476f6f16f6a744c9c5cadd92d06c",
".git/refs/heads/master1": "7389476f6f16f6a744c9c5cadd92d06c",
".git/refs/remotes/origin/master1": "7389476f6f16f6a744c9c5cadd92d06c",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.json": "44cf565cfb155d207c9309d5e02763f2",
"assets/AssetManifest.smcbin": "2f24e67feb159e5991280524c01977dc",
"assets/assets/add.png": "5a12dd517e2efc6d2317cb3c49155ffd",
"assets/assets/add_1.png": "e415ffbfe2d43ff394a20b629b7e9ed5",
"assets/assets/compose.png": "8984bbee16ef0d56e7489939c13df4ad",
"assets/assets/email_verified.png": "fea34867f2b119c22f87da0478fcdf61",
"assets/assets/exclamation-mark.png": "3c33c8e321c15c6c5ae6f3de35b1bc33",
"assets/assets/fingerprint.png": "de9d8a349f16e6cc6459032f48388053",
"assets/assets/gear.png": "df3382b5c4b37521c5be749eb993ae44",
"assets/assets/icon%2520copy.png": "b81907faf6b9fee9e62627a5b97347bd",
"assets/assets/icon.png": "bfaa133be85252561fa26ded788847a4",
"assets/assets/invisible.png": "702f70b54258600c6bf3512c385343d4",
"assets/assets/lock.png": "648401a3fc2da07be619ea0fcd822ae1",
"assets/assets/login.png": "75a5514616f3a49b870cfede84177f5c",
"assets/assets/mail.png": "2d9a27e7bc90722e955d94bc47a5c9ea",
"assets/assets/password-code.png": "dff02839cac3efcd26b2bfa1718e8eb6",
"assets/assets/plus.png": "f57f6993febcf408a2af5c3b0cc7ea6d",
"assets/assets/power-off-black.png": "3f10f5620a8d8020daa30d844a379e7a",
"assets/assets/power-off.png": "990df04120b9ea646dae4feb4cb792eb",
"assets/assets/resend.png": "76ba14db159421ec151aba1fbf7fa243",
"assets/assets/reset-password.png": "7ad7c5782279e8d701bcfc5f8e2fc013",
"assets/assets/search.png": "a5236f889c2a890dfbafef9ffe87c8cf",
"assets/assets/share.png": "8ac60a95492bb2e054bd3deaefd81ca3",
"assets/assets/switch-off.png": "108f7a4097979e7b7ce0fb240a79cd49",
"assets/assets/switch-on.png": "8e45183d09df8823203ed035ca59dead",
"assets/assets/trash.png": "fac02f5e939357be30ac745a680c3abf",
"assets/assets/view.png": "ed4072634ea0e0178ff11d0c710429b3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9271b11f23a924ca3077ea1e3d0ef34d",
"assets/NOTICES": "304e928014ee811f5c84ae65948ec680",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "bfaa133be85252561fa26ded788847a4",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.1png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192.png": "bfaa133be85252561fa26ded788847a4",
"icons/Icon-1921.png": "bfaa133be85252561fa26ded788847a4",
"icons/Icon-512.png": "bfaa133be85252561fa26ded788847a4",
"icons/Icon-5121.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "bfaa133be85252561fa26ded788847a4",
"icons/Icon-maskable-1921.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "bfaa133be85252561fa26ded788847a4",
"icons/Icon-maskable-5121.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9097b5e0190759bbd86dc33f5440acdc",
"/": "9097b5e0190759bbd86dc33f5440acdc",
"main.dart.js": "8710d18ddbd5f30df4722f1e51e8116f",
"manifest.json": "62812922c192f196cf0fe9669eebe2df",
"version.json": "ec846ddf8a1726b18079e7edd7493f83"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
