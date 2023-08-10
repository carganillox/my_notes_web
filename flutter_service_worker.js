'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "57c75ec7b11e8cc61cca9a631634bcb4",
".git/config": "defc28b58c70d8106ff76170437fba88",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "40ac7018d2830df65a1fc8a36f51bc65",
".git/HEAD": "63440d03449aeacd4f7341c4ba454113",
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
".git/index": "82d4f88edc82ec227d32438357681f83",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "338c081442d4fe6f3d0d54d78321bf60",
".git/logs/refs/heads/master": "b33e0883a3f719c693a0cd7b572712ca",
".git/logs/refs/heads/master1": "7586bb93c2bce6a10db65cf0ba4e3a5b",
".git/logs/refs/heads/release1": "f62cf0262621ed50f6007525012e9922",
".git/logs/refs/heads/release2": "6b175008800aac9ceacd1654d82b2354",
".git/logs/refs/heads/release3": "473eaace207d8db7e1a74c144926169c",
".git/logs/refs/remotes/origin/master": "f8f6fd6428a4d1262652d5901f73cb7c",
".git/logs/refs/remotes/origin/master1": "e2210ec96180143af8567fae122a3ff4",
".git/logs/refs/remotes/origin/release1": "6b3103c83c99361704c35240e5f0f1f2",
".git/logs/refs/remotes/origin/release2": "0dd6852cd2bec7211b9a3dd62c9a7b1b",
".git/logs/refs/remotes/origin/release3": "57a33738e435b3a159f800e9ba5dda4e",
".git/objects/02/47020d9de80ba44d38a9e379c65d0439f5b743": "addea54efe6562aa4dff367aff05eca5",
".git/objects/03/2484af7c4433a7c6c388640ae289e36af405f9": "159f377d4bf7f5b92f8b8a33a239f84e",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/701229d2a0651a9a9c5d4e88d2baa9033b4587": "3399de83a077aecf4535499b276e63d5",
".git/objects/05/ffb17261ac9314d22e262c38967990eff7813b": "4581814fdb3542fb3708c1a4a6494ac0",
".git/objects/06/486540afc860b0154c456fd8626094d2caa793": "ca02d6f84d749ad82e51cbc69ac69f7d",
".git/objects/06/9d8cd368442314fabd5ccf02e632e091a341c5": "c6d45b9390925c247382d2a24e69e52f",
".git/objects/07/678ba3221c701ec9fc28119b07a6347d46ce94": "9fa8e39def33bc0bd8639399549e4015",
".git/objects/07/7bd4639bc95dd6e2e80ee66d83dc30f75d6f70": "09c55c164a06f295f02b797ada761cda",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/94cb7357c117c262729dcfebe801cfa3c8eb60": "156757a42ab34cf831c832ce8f89ba29",
".git/objects/0f/80214b8e772357cc766efc4960a15ae76cbd5b": "9127ba961124d2c51b875b51c760e8a0",
".git/objects/10/8ff4366fa93dc5e29b914313328c8020b82fca": "b1ecad981662a8a80ef8e743086c2ae6",
".git/objects/12/a082662f07d85685723ae675083fe09c26a2c4": "42167ba1c20aa05b7e0d1924a884b311",
".git/objects/17/d0d378ec4254f8c4c27035c382d38a15aef35d": "852434b02380535732e89f01ed24d728",
".git/objects/18/89f7fdc66325c1afb48199765a2605f6e35aca": "10d81fb8033587e7f309fbec94e7c9e4",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/6c7d7679e71371597396c7fcbfb0b0313c97d8": "5b9a1a5f9d79d1c55e5d20fcab14541a",
".git/objects/1e/b7e8e369e8d1f96d25c5feffdda7262e96ce16": "927eec91f39bd89c4a1a34ec01031e44",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/22/7b4b8944e1d45997a4cf3bbdba71f65e45d62b": "0a57a0d76f6a625102d69f795c9f6463",
".git/objects/23/c53c8dfad4b483a08880f7d4d4ffc288f106d3": "75f7225389cf0d1992a37a27bbf62375",
".git/objects/25/0a8c5c010639797c3236b2c7fe27ffa1175dea": "8f74ea5e8439361e0d42a17559ca5cac",
".git/objects/2e/522aea753c150dd5de4c4d7f5dfd0629c8cb40": "1e93eccd6a88b7d32f539618d2100882",
".git/objects/2f/21df12567882d7bf570c744a5d5bd1875912f3": "f98299ea189e250a07cbc84c1cb7c65c",
".git/objects/2f/5d25388d49befef2029140e7c447a19f3ac93c": "b382e00966ccb3babe97441782f8adc7",
".git/objects/30/04cbce3a90366f13eeadb0c6e9e1dda2be7f68": "d664bdacfd4df4e987683ee977742466",
".git/objects/30/c1ace5a72f925d087147d993901506b9264b59": "6cd8f9d921ebd32aa445f68b3a81ea93",
".git/objects/31/1f31b013fa2e8ddf1b6b812ef8e0aa9de40db7": "b3eb89b5a73a66f33d08baba45fbd592",
".git/objects/32/51657492c8190f849808e294289f8bc8258a82": "a8f75ffdbd0aab5d16b6dac699b2d887",
".git/objects/33/4cd3cd35a18526edc550d60d2591de5b5ae0e0": "9086894c7b85175d41b4a9032515cfd9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/6f74c20dc1069df097134e219a18201187792f": "236a022a0e7b5a13cb343386918a0314",
".git/objects/38/8b491d892e878974afbd1f39630b050a42f844": "70be605efec32be482ae6ec0f4117479",
".git/objects/3d/7d88a27ed80e48370c017711d8471e7daeb082": "9e7234e70d873c85d35399bd457d9416",
".git/objects/40/24183914fe85cbb92bcdc78d857bb34ab9b29a": "4f2c92833bdfc198c1f242d656fae3f0",
".git/objects/41/42b73593c2a80d2436de4ae91ea9ebb38a80e0": "db05e1384cce852304fb0992bcefe3a8",
".git/objects/43/6bed9885c93e486c104567685618f5b4fe28cb": "fe8fe054c37be2185fb90b659f35c155",
".git/objects/43/aff63a34b66ed2c7a4fe311bc9ff6c49322b14": "01934bb088fe3764de264bd384b6cbb0",
".git/objects/43/c307cce38074984af0cec230d51e3c9425b42c": "3b81aacad99f2b2a1894d382e76868c1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5070c3d6be654e68188032d18c50df5b9df3b3": "28218e866b89283f1b1ff3ee67303423",
".git/objects/48/d47f5be4a231eee299d6752b4717c81ea2eed3": "7ac11271deb11c1a7d262c9db14deb50",
".git/objects/49/46fb73601db406bd7e7848a5bb23a63b6f3a42": "87fc8492b92deae6f12bf683e6c80c7e",
".git/objects/49/4fe1c78ab9abfd21b3527e12dcbfb768eddc13": "76c1e13b1c2b985555b6152bf6382a9b",
".git/objects/49/fdefdf354d43f38a087e1435c0811c49db753c": "cd4a9a212bc5fcdfec5894a86e8f7971",
".git/objects/4c/67b3e13e6daef036acd1884baf0284d6d7dcc8": "35a07bd20afa6b496c7a376c2b99bf8f",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/0d5692e32e106264b2e5f3802c021697387564": "2c3e53931d65a30720b18f79bfd1c412",
".git/objects/52/e188cec768293087718b3034c8174a613c6119": "58c344dc4163fc0f4d3b17c730483333",
".git/objects/52/faba3d23c5ac4fc24ae3e52d438eabfaaf8fae": "2239e4ba595cdd9a19270bdc9ea54577",
".git/objects/53/191297285e238a70cf85e7e2e14b09bcf6d23f": "2f2e9d9810bc337e88f9e8c56e4bf05f",
".git/objects/57/669055310d4e8d188a1e1a60452a3fd2c6cf95": "19bbdd5a0948f2398b505ace785510b6",
".git/objects/5b/2db240e9aeb2275acbdf24ba7bb9f5e5869833": "a27b693d70538d3fa0c098967905a6dd",
".git/objects/60/00f10274dc46951ac70bc919cb15be7b4842a9": "bb1fdd065726c3aef808d8005b69acf3",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/2b281f07c58f8f7a776f5e17e21e1a774f0c28": "b0c0855e1af03349e8fec70a0a1ccb8a",
".git/objects/64/9326a507a36a7d32e6ecf25901bc5ed9be3b24": "415c2d868e600048b0a3915cc9a4e9df",
".git/objects/64/baff1cfa6cfbd65e4ca746e2355551d1e4591f": "2091a3f36c68ad412f1a7a167175efda",
".git/objects/64/c8e4bd3552a3c5b5c9f2c4db8d29ed04458377": "566d39c2529e27d6ec8134953756d4a0",
".git/objects/64/cacc65e02d082b264c5d392a51264ed27ec8c5": "23dbd0819e1b5183dc33817a015c569c",
".git/objects/69/715971ad3e9871969ed217ef309ed1105e7870": "a2f5750c5264696b603ace364464fe42",
".git/objects/6a/0eaa5f10f0c8401fafdd12c5abd46fe991a3ef": "fbd1ab1dcd828594c642565f0e5ea7e3",
".git/objects/6a/4bc1361248b815f36b37dba5da0fb9d93e6b37": "d86af37863f3e308757c61a892e455eb",
".git/objects/6b/2adc66d8070f344ffeca97d8dad161f869b82a": "29709407ff252536fb14ecf51af06c1c",
".git/objects/6d/af902d5415d3d097adc8b5185ac54347aa8e31": "b390f28039801dd1de4da7d724a1e601",
".git/objects/6e/2d4df87c0fd77de8af530d1a9463f718b26813": "e628295a29e7a9a3441c0e2ff313e574",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/5f079f5284e8f096c2655e50098d66a7fe3376": "24ad5c7895c62026064d108fbcf652c3",
".git/objects/72/3ec87f9c10e9a41e32ff8d174c9e5ba693960e": "c3da06bc73acec560157e0a6df7b6148",
".git/objects/72/784f355fe3a63f27d9150163783caf238dfd68": "8b61c4eec140dcf0d7e5cd5e9fa25695",
".git/objects/74/524c9a612f3afaece371a5447b39bf9005d056": "b099350b7629060847a31af4e78577ec",
".git/objects/76/d1e34b6ccf951b166db53cd59d8183cded7586": "cae1607f586c1c9d031ab42572e610d0",
".git/objects/79/535455d15b932e49285648828435154df98aa3": "03f7b352efbc5559fe71cb06cda0a2f2",
".git/objects/79/fb6afc86107f1b98c2de86535efc25efe3d482": "f11df349689ab26299150f9a48c6398e",
".git/objects/7c/127fcc47f539e16e037a20e1cae77aaadea4f6": "add3c47a72ded23f86578b577a4088e8",
".git/objects/7c/fe94c427b9f2f9f713a64a956fa6083aa6fe6d": "777a3d172f85675d6f52b174ddc7136b",
".git/objects/81/842c03530123f5be9f65e889677dc6f5e22fc6": "b0f91f3cfaadebfbd967913b1965cba9",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/83/afddc333bd8000b0ea2bb904577b46d908c2cd": "b6d295b9f815c069b118cf27d3ad6b24",
".git/objects/85/6ad8bb375bb83e3ca76b3bc8811a3745a6823e": "dae4ab74ab322e2df520e9fe477511a0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/454e9f21e16198cb5b312d44123341813379d8": "c56eed02e8d760f588b38dcbc6847c3e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/5e4768aeaa7765ed536b4badf38ef73c4db1ea": "bdacf696b1aead055be13bf510272b7c",
".git/objects/8c/2c8407e79bd5f67969487c1028db745fca11fa": "fb07888ddb48dc1ec7497b1048793f59",
".git/objects/8c/d757457e6881569441121ad233c494a4843689": "12d520036831b8be8eeb139114b1acd9",
".git/objects/8d/336ed7ed81bcb503aea2fdc4ad9c096e677ab2": "227cfa931d0cdc051decf56f53a50b84",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/bf796d0c9a320aaf7320157413515c2d7718fe": "4d4cbf4776d6591d96f967b4ffe30290",
".git/objects/8e/ca9e7fa609f47ba133b189c8fbbd553da51cc8": "ba0bda175f3c8802cf57ac706532c1c4",
".git/objects/90/2ddd840bd830776c01638b6349bd75163b8205": "00a5e4333da52ab0762e60dc7548d098",
".git/objects/90/9596e667d9a644c0d9b22fd47d3bde1b8bc41f": "45dcaeccebb20d5c464ec73c38f64b14",
".git/objects/91/9a452e5d16b6ec679151e636db0681ea120600": "d8af66d9957a649ac7c7e07942d14e78",
".git/objects/92/afb0f7cc76ec623b7e2295deb15afe2aa4fb2a": "e604ea9e681fc8934b433611ac450ed8",
".git/objects/93/3e0c52ab200c09ddb0ec551f091ab00e6efb58": "f5b5487e3bae38cb669525edabf0d88d",
".git/objects/93/5c98d9c686ce73b2a19aede68b0e28eb09d89c": "53bf05ed9d2f636c6212a67059800be9",
".git/objects/94/70db58c17e2c3b6aa787f7f8c55b2100420a7f": "ef10c07d0e244aed2d1878c4c0b10c3e",
".git/objects/94/8399f31193e64a10ca39412cd4b3f6b1f04c1d": "1c03a38473867a6983a86b657251db09",
".git/objects/96/8d4f968d9086c8d97235e4820905e29f4d3e22": "267675ca0b875c3830d16993edfab540",
".git/objects/97/262895e98083cf759de45696d029c3d68f248b": "90127469c8f1637b19dd990c899ada12",
".git/objects/97/3da7ba2f91e80da1248ef931e8e938cb421d9c": "094b86d22faa4f5d572c622dee90bd6f",
".git/objects/9d/b324968eaae1fedae1246204a012b46898200b": "2458eee4f17466f7370e5b35590c4dce",
".git/objects/9f/7065745a7ba13c3bbd1fee36e667bd62acaada": "3e974f4d6703411f2bc0b9b143158439",
".git/objects/a1/f902093a74cdea570d08f6a6acbd4e9842ca9b": "e4ba5946ad46a9a15260be4822af8490",
".git/objects/a3/6836d2a11b1ea89ac38e00c76243b71bfe6cc0": "4a44ad4b497a77ec1471e48bb17a6219",
".git/objects/a3/ef48834f8a79314a629dd099556877a6124633": "658ee035b9ec56cf6eef0da214370fac",
".git/objects/a4/b0eaf9643554a540bd7319f2603f327dbb6303": "3b8731cb33e483d7381f88c7a631c850",
".git/objects/a4/d898778130dffb0d64c0df0ddfb8d9b5b4fbdc": "b4cc3e4959c419ea450df6b54a075c17",
".git/objects/a7/90e64cb9bb7d20bae6c00e1e38926483413014": "7331223d75b59a672934ceeba5cb1d0a",
".git/objects/a9/a84e30885b98e592d80129c37ba69416793639": "f4a44988ed3a0e5190d1062e5e07a87a",
".git/objects/aa/181820384743498bc5475856c7b26bf023eb0f": "53513da1e28348f2828d5a98fe9437c7",
".git/objects/aa/550a39a4eb770ca39029b0b60ba458fa336bc2": "a9135535bfd17375a7731fcb6d9b9ee0",
".git/objects/aa/c6b4d3c9db5349422d76cf740f40afe4a97771": "0fcb4e853785a4a1b99b7f05df55a8e6",
".git/objects/ab/d90d89be6dadfd9a83ccb9758c23b743bb46dd": "7b037f742af5c79f7315389ecbf81c30",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/42b0bf9eb0c3b0298b7581d8807c1c2b10357c": "04b8b6a8e698a2ae1a60a5387a3cf6db",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9370afa04a858707f78b257eb042ae2831212f": "5940aeb0086413fe9421d0aa6e11d512",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/22377493e72f51bc402812f3b879589ca5ac15": "c10d6402503dc00d5d2699a8383bff04",
".git/objects/ba/9de908cddc65f244719a5946617131f628681e": "2823a7940ab3f33c097ea26b58485baa",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/c4761defdf34dca8e2936ff6c34a4b3132f675": "c5fab1a8987cf53c0c469ef40753191b",
".git/objects/be/5baba5539dc0ee38488ac5d86ccb4b213ea339": "2dd3ee0113669270db24d5c6138ac049",
".git/objects/c1/051b488f6118f88817f110acef0513c14b7bbb": "24e4aa680c36cb128f5721880e2e7043",
".git/objects/c2/3c5a3531175a3b9d5853c9e787e685dffd30b4": "9415a68a9944abda4c4c70dcf39bb2fa",
".git/objects/c4/4a5b6dcf61b4ab685a640fe0c4bd78f933c7e7": "0f466b502ce826867616dc99567e1118",
".git/objects/c5/cb96882f10b05e5075932411288a22d0844dcd": "dcb1ff2a49b68e5714a43f11d798d8d3",
".git/objects/c6/6ff23bc9cb308d335f00a780a76f6d9c4d65b5": "8ced6d8d10ffed08370f8ab61892fce8",
".git/objects/c8/2748dfc93cb492b67dc7154d077aac57aa70c2": "2d1a032208a546d67bdb3c7d527e7732",
".git/objects/ca/33f7000d8ca849e6bd2945ea854d412fec7ad9": "d2c4ac44dfb5339ce5e77fc64d9a0cfe",
".git/objects/ca/66a11e9973163340787963249e94ad45275d46": "ab34b6cbf53ee96e15b29f53d477fd98",
".git/objects/cb/81909980631eb16e52145c10d6dbd5bde39160": "93fa42aebac137c27509d44ef66fd494",
".git/objects/cb/9c755d128161e6dddb9dea4f2f3d55d5b57f02": "dac815051786ded9b8015665473d1248",
".git/objects/cd/cf9adc9719daa987b70530e954bb3ee7541065": "102f42109201fbf2ff3df2eb777fc85f",
".git/objects/ce/2b1f299d99a67573499c7a0e8dfc44b01e6b83": "886ba2537f0f5142a61bf575d8cfef14",
".git/objects/cf/617cb903b5d2a3338f907b51ecca37e10738ac": "db76c1b8d672e2a3d33cddae137fda29",
".git/objects/cf/ee4aca8160298c9c07c66b07087fb74abcd0ce": "f83e065af2730a7330d257b60c5ca08c",
".git/objects/d0/6e0cdc3977275d5ed23bc585a0989b6409135a": "cf9f85b6fc4e391c321a7c5a2d36cbab",
".git/objects/d0/9c5695755afe1b2160a2111cb6367debd037e9": "0cfd5181e34be39c0234cd084a260257",
".git/objects/d1/4f17237c651f99f4bf590fe7a583575d14c8bf": "1897ffdfd5ec6da5e80187534e5f4885",
".git/objects/d1/c8627586a939f311fea3f9daf5f145d866789e": "7b1d5a88a6e822c62effb36907e0154f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/652953ad7514f8fc9be445a5cb358f51ff8142": "473ebbb1efc953bbc93f71cdec11d879",
".git/objects/d4/c0af7bbe90283db1c6b1e8409ad121dd1182c7": "ecc5fa194b49809e236c6b0142e98dce",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/22af5f712be6467cc400bf554e7a0f7b53ab79": "369ff2e830d3f17015705f65652ab2eb",
".git/objects/d7/6c8dea44ae9e608d568f37b55319e1d24017ef": "48f04ba8d9bde1c26f750d99776129b0",
".git/objects/da/7bafeffb0dfe33c0d3e740c550c0635d16d393": "3fe17d304fb602732fcef172be8ab904",
".git/objects/db/3b198dc657a01676cb82ebd7382beea9feccfd": "f8229dad00313de330646d127dabb284",
".git/objects/e0/caa3044ba29aab3239306c5901030f39d54807": "77e25d4117a443199fcd0fcd8f4e1b0a",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/140a857c8f6bc95a8e7a1e305d23e96c7843ef": "c7ec75a7be96030ef6ad960dfb015c7e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/1277b8aa21b6b5605e53e65ccce377d0104490": "30309a262588fec74fb65cc13a4a573e",
".git/objects/ef/6573111f53e57d972e29184af0525acc6d46a3": "8fecc060e6e370685b122208c28e812b",
".git/objects/ef/881c62ec94f4f12738cb4c7d70810a8cc6729f": "1ba3c20629e5de3154a31732d9c54d16",
".git/objects/f1/8a2c67e0995b7020ffe7aad4bf9042579664dd": "4ea4d5d1d427cb3dbddbcb21a6c6d2e5",
".git/objects/f2/69e75af595929644e6af3b12e504cadeadd820": "69952b02cf7c9d2ee70fa3f671504d19",
".git/objects/f3/750efd2ce549fc381b61587788450f0367d66b": "c5e18058e3424736c31b75c0b8aec8b5",
".git/objects/f3/d04248062ecbeead74d94e2eb4a980ccf7dac6": "7ce44d701364ee2ca9200bb00cbb933b",
".git/objects/f4/a2706f2f31e2ef67ad8ac11150fa159afe83e7": "156171a7b12915df50abce59df46dce7",
".git/objects/f9/5548f907e60440b1829568da6a14028f93462d": "033963c45180189244c7309b50e5096a",
".git/objects/f9/f81bebfe9e5f2ddeb77b968c46c0176f06294c": "269d5d1bd63927775b5641b8ee7c5a2d",
".git/objects/fa/54d0334018b9bcc0b7cc7e422dee463e8ed5ca": "28215b87bf3decfce22c062b9f01aaff",
".git/objects/fb/019737b2b8b042936fc9cbb8646335f23e1f26": "5c90c8f64aa11f897490a36c863d2f25",
".git/objects/fc/9d8456dc2eb77c4d15249e53b9e15fad97b2d4": "66891e2506cf417e5494109361f7be03",
".git/objects/ff/51054b825eb9f3a34f9c7934db5c2cf0111b2e": "23196375a7659510c804a5a9d2ba15a9",
".git/ORIG_HEAD": "24e85d458300db1f0c16a569c439fe4f",
".git/refs/heads/master": "7389476f6f16f6a744c9c5cadd92d06c",
".git/refs/heads/master1": "24e85d458300db1f0c16a569c439fe4f",
".git/refs/heads/release1": "9be0c1b824045db222a7ec516b52f5d4",
".git/refs/heads/release2": "f047a375fe69fbb50dfe670d9e6b2cda",
".git/refs/heads/release3": "f047a375fe69fbb50dfe670d9e6b2cda",
".git/refs/remotes/origin/master": "1d5bdfbd1e65dcb53ddbdc7091a8da61",
".git/refs/remotes/origin/master1": "e6e0a9275b509258441db9d155787d22",
".git/refs/remotes/origin/release1": "f11ee737b25434abb6f45682c49cb0a8",
".git/refs/remotes/origin/release2": "9be0c1b824045db222a7ec516b52f5d4",
".git/refs/remotes/origin/release3": "f047a375fe69fbb50dfe670d9e6b2cda",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.json": "d124d533279f7f81c8075fbef0150110",
"assets/AssetManifest.smcbin": "5c716d40972b2a8a276f2b460ae763ce",
"assets/assets/add.png": "5a12dd517e2efc6d2317cb3c49155ffd",
"assets/assets/add_1.png": "e415ffbfe2d43ff394a20b629b7e9ed5",
"assets/assets/category.png": "85f4a2102f2713541981c1c575721fdb",
"assets/assets/compose.png": "8984bbee16ef0d56e7489939c13df4ad",
"assets/assets/email_verified.png": "fea34867f2b119c22f87da0478fcdf61",
"assets/assets/exclamation-mark.png": "3c33c8e321c15c6c5ae6f3de35b1bc33",
"assets/assets/fingerprint.png": "de9d8a349f16e6cc6459032f48388053",
"assets/assets/gear.png": "df3382b5c4b37521c5be749eb993ae44",
"assets/assets/icon%2520copy.png": "b81907faf6b9fee9e62627a5b97347bd",
"assets/assets/icon.png": "bfaa133be85252561fa26ded788847a4",
"assets/assets/img/Authentication.png": "2f8a7a2f3d1c2136359b01d9043886d7",
"assets/assets/img/Checklist.png": "9403595a46a004c1f9a77ef426a86abc",
"assets/assets/img/Code%2520typing.png": "c647f553afb14a024050d51c5d97b733",
"assets/assets/img/Computer%2520login.png": "63376a5ff3311e542b915a8623e8cbb2",
"assets/assets/img/Cool%2520robot.png": "1b9c3f694a833074063a6d8ec401b2fc",
"assets/assets/img/Critical%2520thinking.png": "c5f0ebf20ca54fe1e89daa94d5c0f87d",
"assets/assets/img/Fingerprint.png": "99cb74bbd5477eb62ccc5769ce27007d",
"assets/assets/img/Get%2520in%2520touch.png": "32c6907b9f9b8f198c2c2aa3aa69d682",
"assets/assets/img/Hand%2520holding%2520pen.png": "3e8ce15c3724a0ca1906b2c7748f9b14",
"assets/assets/img/Image%2520upload.png": "8f8113d5316419e31f5702ffbfd480fa",
"assets/assets/img/Man%2520thinking.png": "2d78cc4e4779ec0502c45277c6bdc344",
"assets/assets/img/Mobile%2520login.png": "5c3a9fa01dd4db4a68a3640d972436f4",
"assets/assets/img/Mobile%2520note%2520list.png": "b41071ffc4042313294578ad5a356375",
"assets/assets/img/My%2520password.png": "f7b81070ffd85a62b8bb860d0162d01e",
"assets/assets/img/New%2520entries.png": "5f756d4c5e5488e3ed371bbe28737016",
"assets/assets/img/Profile%2520data.png": "b6b4763eba6089af2b9ccb46bd9166d1",
"assets/assets/img/question-1.png": "c12c420b7a165d3137503ec29527decb",
"assets/assets/img/Reset%2520password.png": "ab02e7203c5e6fc078f6152e455dc10c",
"assets/assets/img/Setup%2520Wizard.png": "de98981b04716dda3a17661d8041fc6e",
"assets/assets/img/Sign%2520up.png": "f2e75ac6ba2b3060491e4dd4716f0488",
"assets/assets/img/Tablet%2520login.png": "063249c5be2e868afd8ee23041d48879",
"assets/assets/img/Warning.png": "dab530222b10bcb69851438b2416f061",
"assets/assets/invisible.png": "702f70b54258600c6bf3512c385343d4",
"assets/assets/lock.png": "648401a3fc2da07be619ea0fcd822ae1",
"assets/assets/Login-1.png": "6b9bdee6f13cea7862c8140054e1197b",
"assets/assets/login.png": "75a5514616f3a49b870cfede84177f5c",
"assets/assets/mail.png": "2d9a27e7bc90722e955d94bc47a5c9ea",
"assets/assets/Mobile-note-list-pana.png": "b232913dba996ee9462b703243b9fa70",
"assets/assets/no-data-1.png": "efc7ad168f1b1cb2b9b215a63c02fe81",
"assets/assets/no-data-2.png": "4489889ea33e8ec51d5cff7c8b63a30a",
"assets/assets/no-data.gif": "afe3abc86beceb42b35fd3e8c9ecd7e6",
"assets/assets/no-data.png": "da1585ed11b86065c141d0e8259d7dfa",
"assets/assets/Notes-cute.png": "755dc15d417b80d17e4fba05b29a5fcd",
"assets/assets/Notes_black.gif": "bb1f4eea55b883d116a48d2d5c9fcb67",
"assets/assets/Notes_white.gif": "99bdd0ed5734133093365faa99c29091",
"assets/assets/password-code.png": "dff02839cac3efcd26b2bfa1718e8eb6",
"assets/assets/plus.png": "f57f6993febcf408a2af5c3b0cc7ea6d",
"assets/assets/power-off-black.png": "3f10f5620a8d8020daa30d844a379e7a",
"assets/assets/power-off.png": "990df04120b9ea646dae4feb4cb792eb",
"assets/assets/Profile%2520data.png": "b6b4763eba6089af2b9ccb46bd9166d1",
"assets/assets/refresh-button.png": "0ffd12bee8f43c5417684f8f9093d12d",
"assets/assets/refresh-page-option.png": "8a402f3883b5e00f86e288d3b130e735",
"assets/assets/resend.png": "76ba14db159421ec151aba1fbf7fa243",
"assets/assets/Reset%2520password.png": "ab02e7203c5e6fc078f6152e455dc10c",
"assets/assets/reset-password.png": "7ad7c5782279e8d701bcfc5f8e2fc013",
"assets/assets/search.png": "a5236f889c2a890dfbafef9ffe87c8cf",
"assets/assets/share.png": "8ac60a95492bb2e054bd3deaefd81ca3",
"assets/assets/switch-off.png": "108f7a4097979e7b7ce0fb240a79cd49",
"assets/assets/switch-on.png": "8e45183d09df8823203ed035ca59dead",
"assets/assets/Taking-notes.gif": "17f21754eaf932e209975ded74a0c644",
"assets/assets/trash.png": "fac02f5e939357be30ac745a680c3abf",
"assets/assets/view.png": "ed4072634ea0e0178ff11d0c710429b3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "824d723d4ea70b6cf3910c4fdf716709",
"assets/NOTICES": "ea3bc83f616f64d67026c5df84c9edfa",
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
"index.html": "6d2deafe0102a7a9273b1980988975f8",
"/": "6d2deafe0102a7a9273b1980988975f8",
"main.dart.js": "ba6c99ef9363cc057d8f6d132277424e",
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
