(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-94bab92c":"7993b685"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-94bab92c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-94bab92c":"4aac1133"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("8e6e"),n("ac6a"),n("456d");var r=n("bd86"),o=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),a=n("fb9a"),c=n.n(a),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],s=(n("96cf"),n("3b8d")),l=n("2f62");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach(function(t){Object(r["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f={name:"App",mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:"zh"==this.lang?document.title="Trust Domains - 可信去中心化金融生态":"en"==this.lang&&(document.title="Trust Domains - For Trust Decentralized Finance Economy"),this.$i18n.locale=this.lang;case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),computed:{lang:function(){return this.$store.state.lang.language}},methods:d({},Object(l["b"])(["init"]))},h=f,b=n("2877"),m=Object(b["a"])(h,i,u,!1,null,null,null),g=m.exports,w=(n("04f2"),n("c789"),{init:!1,loading:!1,isSidebarActive:!0,themeColor:"#2962ff"}),y={SET:function(e,t){Object.keys(t).forEach(function(n){e[n]=t[n]})},IS_SIDEBAR_ACTIVE:function(e,t){e.isSidebarActive=t}},v={init:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,r=t.dispatch,r("login","ETH"),n("SET",{loading:!1,init:!0});case 3:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},O={state:w,mutations:y,actions:v},k=(n("5df3"),n("768b")),j=n("da4d"),P=n("7149"),E=n("d225"),x=n("b0b4"),D=function(){function e(t){Object(E["a"])(this,e),this.coinType=t.toUpperCase()}return Object(x["a"])(e,[{key:"connect",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("BNB"!=this.coinType){e.next=15;break}if(!window["BinanceChain"]){e.next=13;break}return window["detectProvider"]=window["BinanceChain"],t=window["detectProvider"],e.prev=4,e.next=7,window["detectProvider"].enable();case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e["catch"](4),console.error(e.t0),e.abrupt("return");case 13:e.next=31;break;case 15:if("ETH"!=this.coinType){e.next=31;break}if(!window["ethereum"]){e.next=30;break}return window["detectProvider"]=window["ethereum"],t=window["detectProvider"],e.prev=19,e.next=22,window["detectProvider"].enable();case 22:e.next=28;break;case 24:return e.prev=24,e.t1=e["catch"](19),console.error(e.t1),e.abrupt("return");case 28:e.next=31;break;case 30:window["web3"]&&(t=window["web3"].currentProvider);case 31:return e.abrupt("return",t);case 32:case"end":return e.stop()}},e,this,[[4,9],[19,24]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"isLoggedIn",value:function(){return"BNB"==this.coinType?!!window["BinanceChain"]:"ETH"==this.coinType&&!!window["ethereum"]}}]),e}(),T=(n("99e5"),n("c783"));var A,S;function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach(function(t){Object(r["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var N=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEFAULT_NETWORK||Object.keys(T)[0];A&&A.on("block",function(e){M.commit("GET_BLOCK_SUCCESS",e)});var C={account:null,name:null,chainId:null,balances:null,blockNumber:0,network:T[N]},B={LOGOUT:function(e){o["default"].set(e,"account",null),o["default"].set(e,"name",null),o["default"].set(e,"balances",{}),console.log("LOGOUT")},HANDLE_CHAIN_CHANGED:function(e,t){T[t]||(T[t]=I({},T[N],{chainId:t,name:"Unknown",network:"unknown",unknown:!0})),e.network=T[t]},WEB3_SET:function(e,t){Object.keys(t).forEach(function(n){e[n]=t[n]})}},L={login:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r,o,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit,n=t.dispatch,r=a.length>1&&void 0!==a[1]?a[1]:"ETH",o=new D(r),!o.isLoggedIn()){e.next=10;break}return e.next=6,o.connect();case 6:return S=e.sent,S.web3=new j["a"](S),e.next=10,n("loadProvider");case 10:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),loadProvider:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r,o,a,c,i,u,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.dispatch,e.prev=1,S.removeAllListeners&&S.removeAllListeners(),!S.on){e.next=24;break}return S.on("chainChanged",function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n("HANDLE_CHAIN_CHANGED",parseInt(Object(P["a"])(t,0)));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),S.on("accountsChanged",function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(0===t.length){e.next=4;break}return n("WEB3_SET",{account:t[0]}),e.next=4,r("loadProvider");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.prev=6,e.next=9,Promise.all([S.web3.getNetwork(),S.web3.listAccounts()]);case 9:c=e.sent,i=Object(k["a"])(c,2),o=i[0],a=i[1],e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](6),console.log(e.t0);case 18:return n("HANDLE_CHAIN_CHANGED",o.chainId),u=a.length>0?a[0]:null,e.next=22,S.web3.getBalance(u);case 22:l=e.sent,n("WEB3_SET",{account:u,balances:l});case 24:e.next=30;break;case 26:return e.prev=26,e.t1=e["catch"](1),n("WEB3_SET",{account:null,name:null,balances:null}),e.abrupt("return",Promise.reject(e.t1));case 30:case"end":return e.stop()}},e,null,[[1,26],[6,15]])}));function t(t){return e.apply(this,arguments)}return t}()},R={state:C,mutations:B,actions:L},G=n("a78e"),U=n.n(G),H=U.a.get("languageStatus"),z=H||"zh",W={state:{language:z},mutations:{TOGGLE_LANGUAGE:function(e,t){U.a.set("languageStatus",t),e.language=t}},actions:{ToogleLanguage:function(e,t){var n=e.commit;console.log(t),n("TOGGLE_LANGUAGE",t)}}},F=W;o["default"].use(l["a"]);var J=new l["a"].Store({modules:{app:O,web3:R,lang:F}}),M=J,Y=n("8c4f");o["default"].use(Y["a"]);var $=[{path:"/",component:function(){return n.e("chunk-94bab92c").then(n.bind(null,"bb51"))}},{path:"*",redirect:"/"}],K=new Y["a"]({mode:"hash",routes:$,scrollBehavior:function(){return{x:0,y:0}}}),V=n("a925");n("78a7");function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(n,!0).forEach(function(t){Object(r["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var X=n("8066"),Z=n("e088");o["default"].use(V["a"]);var ee=new V["a"]({locale:"zh",messages:{zh:Q({},X),en:Q({},Z)}});o["default"].config.productionTip=!1,o["default"].config.devtools=!0,o["default"].use(c.a),new o["default"]({store:M,router:K,i18n:ee,render:function(e){return e(g)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},"78a7":function(e,t,n){},8:function(e,t){},8066:function(e){e.exports=JSON.parse('{"home":{"launchApp":"打开APP","integrate":"整合区块链域名","integrateInfo":"整合区块链域名到您的项目上, 让您的Dapp、Web3.0网站使用起来更友好, 可以给用户带来更好的体验。这会使您的去中心化应用更加与众不同, 能让您的应用更好的脱颖而出。","supportChainDomains":"支持的区块链域名","domainReplaceAddress":"用区块链域名替代您的加密货币地址收款","domainReplaceAddressInfo":"为了更方便安全地进行加密货币转账, 可以用区块链域名来替代您的加密货币地址, 不必再复制粘贴长地址了, 避免了转错账的情况","buildDecentralizedWeb":"构建去中心化网站","buildDecentralizedWebInfo":"把区块链域名和IPFS结合起来, 可以构建抗审查的去中心化网站, 您把网站上传到IPFS, 并绑定到TD区块链域名, 就可以利用TD域名进行访问了","ecoApp":"生态应用","names":"域名","ecosystem":"生态","users":"用户","resources":"资源","developers":"开发者","blog":"博客","contactUs":"联系我们","documention":"文档","ownYourPefectDomain":"拥有您完美的区块链域名","beginYourJourney":"开始您的加密货币的旅程","nextGeneration":"下一代域名服务","nextGenerationInfo":"轻松、安全地管理所有的分布式服务"}}')},9:function(e,t){},c783:function(e){e.exports=JSON.parse('{"128":{"name":"HecoChain Main Network","chainId":128,"network":"mainnet","rpcUrl":"https://http-mainnet-node.huobichain.com","explorer":"https://scan.hecochain.com"},"256":{"name":"HecoChain Test Network","chainId":256,"network":"testnet","rpcUrl":"https://http-testnet.hecochain.com","explorer":"https://scan-testnet.hecochain.com"}}')},e088:function(e){e.exports=JSON.parse('{"home":{"launchApp":"Launch APP","ecoApp":"Ecosystem","integrate":"Integrate Blockchain Domain","integrateInfo":"Integrate the blockchain domain into your project to make your DAPP and Web3.0 websites more friendly to use and bring better experience to users. This will make your decentralized application more distinctive and make your application stand out better.","supportChainDomains":"Supported Blockchain Domains","domainReplaceAddress":"Replace your cryptocurrency address with a blockchain domains","domainReplaceAddressInfo":"In order to transfer cryptocurrency more conveniently and safely, you can use the blockchain domain to replace your cryptocurrency address. There is no need to copy and paste the long address, which avoids the wrong account transfer","buildDecentralizedWeb":"Building a decentralized website","buildDecentralizedWebInfo":"By combining the blockchain domains with IPFS, we can build an anti-censorship decentralized website. If you upload the website to IPFS and bind it to the TD blockchain domains, you can use the TD domains for access","names":"Names","ecosystem":"Ecosystem","users":"Users","resources":"Resources","developers":"Developers","blog":"Blog","contactUs":"Contact Us","documention":"Documentation","ownYourPefectDomain":"Find Your Perfect Blockchain Domains","beginYourJourney":"Begin your journey of cryptocurrency","nextGeneration":"The Next Generation of Domain Names","nextGenerationInfo":"Manage all your distributed service easily and securely"}}')}});
//# sourceMappingURL=app.dced4f45.js.map