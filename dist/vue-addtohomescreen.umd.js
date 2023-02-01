(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".add-to-homescreen-plugin-container .add-to-homescreen-container{z-index:10000;border-top:1px solid #e0e0e0;font-family:-apple-system,BlinkMacSystemFont,Roboto,sans-serif;width:100%;box-sizing:border-box;background:white;position:fixed;bottom:0;left:0;padding:16px;align-items:center;transition:all .5s}.add-to-homescreen-plugin-container .add-to-homescreen-container.add-to-homescreen-visible{transform:translateY(0)}.add-to-homescreen-plugin-container .add-to-homescreen-container.add-to-homescreen-hidden{transform:translateY(100%)}.add-to-homescreen-plugin-container button{cursor:pointer}.add-to-homescreen-plugin-container .close_btn{cursor:pointer;position:absolute;top:15px;right:15px;width:20px;height:20px;border:0;background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCI+PGxpbmUgeDE9IjE4IiB5MT0iNiIgeDI9IjYiIHkyPSIxOCI+PC9saW5lPjxsaW5lIHgxPSI2IiB5MT0iNiIgeDI9IjE4IiB5Mj0iMTgiPjwvbGluZT48L3N2Zz4=)}.add-to-homescreen-plugin-container .flex{display:flex;flex-wrap:wrap}.add-to-homescreen-plugin-container .col{flex:1}.add-to-homescreen-plugin-container .icon{background-size:contain;background-repeat:no-repeat;background-position:center}.add-to-homescreen-plugin-container .icon-container .icon{width:60px;height:60px;display:block;line-height:60px;text-align:center;border-radius:30px;font-size:1.3rem;margin-right:15px;text-transform:uppercase}.add-to-homescreen-plugin-container .app-title{font-size:1.3rem;display:inline-block}.add-to-homescreen-plugin-container .app-content{font-size:.8rem;display:inline-block}.add-to-homescreen-plugin-container .btn-container{float:right}.add-to-homescreen-plugin-container .add-button,.add-to-homescreen-plugin-container .add-button:hover,.add-to-homescreen-plugin-container .add-button:visited{width:100%;border:0;outline:0;font-size:1rem;padding:5px}.add-to-homescreen-plugin-container .close:hover,.add-to-homescreen-plugin-container .close:focus{color:#000;text-decoration:none;cursor:pointer}.add-to-homescreen-plugin-container .modal{display:none;position:fixed;z-index:10000;left:0;top:0;width:100%;height:100%;background-color:#0006}.add-to-homescreen-plugin-container .modal-content{background-color:#fff;border-radius:1rem;text-align:center;margin:50% auto;border:1px solid #27e9b8;width:80%}.add-to-homescreen-plugin-container .modal-content ul{padding:0 0 0 15px;text-align:left;list-style-type:none}.add-to-homescreen-plugin-container .shareIOS,.add-to-homescreen-plugin-container .addIOS{width:20px;vertical-align:top}.add-to-homescreen-plugin-container .modal-content .closeModal{border:0;outline:0;font-size:1rem;padding:5px;margin-bottom:15px}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
(function(S,a){typeof exports=="object"&&typeof module<"u"?a(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],a):(S=typeof globalThis<"u"?globalThis:S||self,a(S["vue-addtohomescreen"]={},S.Vue))})(this,function(S,a){"use strict";/*! js-cookie v3.0.1 | MIT */function U(n){for(var w=1;w<arguments.length;w++){var y=arguments[w];for(var g in y)n[g]=y[g]}return n}var ye={read:function(n){return n[0]==='"'&&(n=n.slice(1,-1)),n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(n){return encodeURIComponent(n).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Y(n,w){function y(v,M,p){if(!(typeof document>"u")){p=U({},w,p),typeof p.expires=="number"&&(p.expires=new Date(Date.now()+p.expires*864e5)),p.expires&&(p.expires=p.expires.toUTCString()),v=encodeURIComponent(v).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var C="";for(var k in p)p[k]&&(C+="; "+k,p[k]!==!0&&(C+="="+p[k].split(";")[0]));return document.cookie=v+"="+n.write(M,v)+C}}function g(v){if(!(typeof document>"u"||arguments.length&&!v)){for(var M=document.cookie?document.cookie.split("; "):[],p={},C=0;C<M.length;C++){var k=M[C].split("="),z=k.slice(1).join("=");try{var T=decodeURIComponent(k[0]);if(p[T]=n.read(z,T),v===T)break}catch{}}return v?p[v]:p}}return Object.create({set:y,get:g,remove:function(v,M){y(v,"",U({},M,{expires:-1}))},withAttributes:function(v){return Y(this.converter,U({},this.attributes,v))},withConverter:function(v){return Y(U({},this.converter,v),this.attributes)}},{attributes:{value:Object.freeze(w)},converter:{value:Object.freeze(n)}})}var J=Y(ye,{path:"/"});const ve={en_GB:{addToHomescreen:"Add to homescreen",addMessages:{ios1:"1. On Safari browser, open Share menu",ios2:'2. Tap on "Add to Home Screen" button',android:`1. Open browser parameters
2. Tap on "Add to homescreen"`,windows:{chrome:"Click on (+) button to the right of your navigation bar.",firefox:`1. Resize your browser so you can see your desktop
2. Drag and drop the (i) button left of your navigation bar to your desktop`},macos:{chrome:"Click on (+) button to the right of your navigation bar.",safari:`1. Resize your browser so you can see your desktop
2. Drag & drop the earth icon left of your notification bar to your desktop`,firefox:`1. Resize your browser so you can see your desktop
2. Drag and drop the (i) button left of your navigation bar to your desktop`},others:"Looks like your browser doesn't support add to homescreen natively. Feel free to update/change your browser."}},fr_FR:{addToHomescreen:"Installer l'application",addMessages:{ios1:"1. Sur le navigateur Safari, ouvrir le menu de partage",ios2:`2. Appuyez sur le bouton "Sur l'écran d'accueil"`,android:`1. Ouvrez les paramètres de la page
2. Appuyez sur le bouton "Ajouter à l'écran d'accueil"`,windows:{chrome:"Cliquez sur le bouton (+) présent à droite dans votre barre de navigation",firefox:`1. Redimensionnez votre navigateur pour voir votre bureau
2. Cliquez & glissez l'icône (i) présent à gauche de votre barre de navigation sur votre bureau`},macos:{chrome:"Cliquez sur le bouton (+) présent à droite dans votre barre de navigation",safari:`1. Redimensionnez votre navigateur pour voir votre bureau
2. Cliquez & glissez l'icône 'terre' présent à gauche de votre barre de navigation sur votre bureau`,firefox:`1. Redimensionnez votre navigateur pour voir votre bureau
2. Cliquez & glissez l'icône (i) présent à gauche de votre barre de navigation sur votre bureau`},others:"Il semblerait que votre navigateur ne supporte pas la fonctionnalité d'ajout à la page d'accueil. Mettez-le à jour ou changez de navigateur."}},ru_RU:{addToHomescreen:"Добавить на рабочий стол",addMessages:{ios1:"1. Откройте меню «Поделиться»",ios2:"2. Нажмите на кнопку «Добавить на главный экран»",android:`1. Откройте параметры браузера.
2. Нажмите «Добавить на рабочий стол»`,windows:{chrome:"Нажмите кнопку (+) справа от панели навигации.",firefox:`1. Измените размер браузера, чтобы Вы могли видеть свой рабочий стол
2. Перетащите кнопку (i) слева от панели навигации на рабочий стол.`},macos:{chrome:"Нажмите кнопку (+) справа от панели навигации",safari:`1. Измените размер браузера, чтобы Вы могли видеть свой рабочий стол
2. Перетащите значок "Земля" слева от панели уведомлений на рабочий стол`,firefox:`1. Измените размер браузера, чтобы Вы могли видеть свой рабочий стол
2. Перетащите кнопку (i) слева от панели навигации на рабочий стол.`},others:"Похоже, Ваш браузер изначально не поддерживает добавление на рабочий стол. Попробуйте обновить/изменить свой браузер."}}},Me=()=>{const n=["file:","cordova:","capacitor:"];return window.matchMedia("(display-mode: standalone)").matches||window.location&&window.location.protocol&&n.indexOf(window.location.protocol)!==-1};var Ne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R={},Ce={get exports(){return R},set exports(n){R=n}};(function(n,w){(function(y,g){var v="1.0.33",M="",p="?",C="function",k="undefined",z="object",T="string",O="major",i="model",t="name",e="type",o="vendor",r="version",c="architecture",f="console",s="mobile",l="tablet",j="smarttv",D="wearable",se="embedded",K=350,X="Amazon",V="Apple",le="ASUS",ce="BlackBerry",E="Browser",H="Chrome",Qe="Edge",B="Firefox",q="Google",de="Huawei",$="LG",ee="Microsoft",be="Motorola",Z="Opera",oe="Samsung",ue="Sharp",G="Sony",ie="Xiaomi",te="Zebra",we="Facebook",We=function(d,m){var b={};for(var N in d)m[N]&&m[N].length%2===0?b[N]=m[N].concat(d[N]):b[N]=d[N];return b},Q=function(d){for(var m={},b=0;b<d.length;b++)m[d[b].toUpperCase()]=d[b];return m},pe=function(d,m){return typeof d===T?A(m).indexOf(A(d))!==-1:!1},A=function(d){return d.toLowerCase()},Fe=function(d){return typeof d===T?d.replace(/[^\d\.]/g,M).split(".")[0]:g},re=function(d,m){if(typeof d===T)return d=d.replace(/^\s\s*/,M),typeof m===k?d:d.substring(0,K)},_=function(d,m){for(var b=0,N,u,F,h,P,L;b<m.length&&!P;){var fe=m[b],he=m[b+1];for(N=u=0;N<fe.length&&!P;)if(P=fe[N++].exec(d),P)for(F=0;F<he.length;F++)L=P[++u],h=he[F],typeof h===z&&h.length>0?h.length===2?typeof h[1]==C?this[h[0]]=h[1].call(this,L):this[h[0]]=h[1]:h.length===3?typeof h[1]===C&&!(h[1].exec&&h[1].test)?this[h[0]]=L?h[1].call(this,L,h[2]):g:this[h[0]]=L?L.replace(h[1],h[2]):g:h.length===4&&(this[h[0]]=L?h[3].call(this,L.replace(h[1],h[2])):g):this[h]=L||g;b+=2}},ne=function(d,m){for(var b in m)if(typeof m[b]===z&&m[b].length>0){for(var N=0;N<m[b].length;N++)if(pe(m[b][N],d))return b===p?g:b}else if(pe(m[b],d))return b===p?g:b;return d},Ye={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},me={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},ge={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[r,[t,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[r,[t,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[t,r],[/opios[\/ ]+([\w\.]+)/i],[r,[t,Z+" Mini"]],[/\bopr\/([\w\.]+)/i],[r,[t,Z]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[t,r],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[r,[t,"UC"+E]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[r,[t,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[r,[t,"WeChat"]],[/konqueror\/([\w\.]+)/i],[r,[t,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[r,[t,"IE"]],[/yabrowser\/([\w\.]+)/i],[r,[t,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[t,/(.+)/,"$1 Secure "+E],r],[/\bfocus\/([\w\.]+)/i],[r,[t,B+" Focus"]],[/\bopt\/([\w\.]+)/i],[r,[t,Z+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[r,[t,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[r,[t,"Dolphin"]],[/coast\/([\w\.]+)/i],[r,[t,Z+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[r,[t,"MIUI "+E]],[/fxios\/([-\w\.]+)/i],[r,[t,B]],[/\bqihu|(qi?ho?o?|360)browser/i],[[t,"360 "+E]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[t,/(.+)/,"$1 "+E],r],[/(comodo_dragon)\/([\w\.]+)/i],[[t,/_/g," "],r],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[t,r],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[t],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[t,we],r],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[t,r],[/\bgsa\/([\w\.]+) .*safari\//i],[r,[t,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[r,[t,H+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[t,H+" WebView"],r],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[r,[t,"Android "+E]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[t,r],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[r,[t,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[r,t],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[t,[r,ne,Ye]],[/(webkit|khtml)\/([\w\.]+)/i],[t,r],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[t,"Netscape"],r],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[r,[t,B+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[t,r],[/(cobalt)\/([\w\.]+)/i],[t,[r,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[c,"amd64"]],[/(ia32(?=;))/i],[[c,A]],[/((?:i[346]|x)86)[;\)]/i],[[c,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[c,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[c,"armhf"]],[/windows (ce|mobile); ppc;/i],[[c,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[c,/ower/,M,A]],[/(sun4\w)[;\)]/i],[[c,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[c,A]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[i,[o,oe],[e,l]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[i,[o,oe],[e,s]],[/\((ip(?:hone|od)[\w ]*);/i],[i,[o,V],[e,s]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[i,[o,V],[e,l]],[/(macintosh);/i],[i,[o,V]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[i,[o,de],[e,l]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[i,[o,de],[e,s]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[i,/_/g," "],[o,ie],[e,s]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[i,/_/g," "],[o,ie],[e,l]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[i,[o,"OPPO"],[e,s]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[i,[o,"Vivo"],[e,s]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[i,[o,"Realme"],[e,s]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[i,[o,be],[e,s]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[i,[o,be],[e,l]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[i,[o,$],[e,l]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[i,[o,$],[e,s]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[i,[o,"Lenovo"],[e,l]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[i,/_/g," "],[o,"Nokia"],[e,s]],[/(pixel c)\b/i],[i,[o,q],[e,l]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[i,[o,q],[e,s]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[i,[o,G],[e,s]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[i,"Xperia Tablet"],[o,G],[e,l]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[i,[o,"OnePlus"],[e,s]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[i,[o,X],[e,l]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[i,/(.+)/g,"Fire Phone $1"],[o,X],[e,s]],[/(playbook);[-\w\),; ]+(rim)/i],[i,o,[e,l]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[i,[o,ce],[e,s]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[i,[o,le],[e,l]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[i,[o,le],[e,s]],[/(nexus 9)/i],[i,[o,"HTC"],[e,l]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[o,[i,/_/g," "],[e,s]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[i,[o,"Acer"],[e,l]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[i,[o,"Meizu"],[e,s]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[i,[o,ue],[e,s]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[o,i,[e,s]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[o,i,[e,l]],[/(surface duo)/i],[i,[o,ee],[e,l]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[i,[o,"Fairphone"],[e,s]],[/(u304aa)/i],[i,[o,"AT&T"],[e,s]],[/\bsie-(\w*)/i],[i,[o,"Siemens"],[e,s]],[/\b(rct\w+) b/i],[i,[o,"RCA"],[e,l]],[/\b(venue[\d ]{2,7}) b/i],[i,[o,"Dell"],[e,l]],[/\b(q(?:mv|ta)\w+) b/i],[i,[o,"Verizon"],[e,l]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[i,[o,"Barnes & Noble"],[e,l]],[/\b(tm\d{3}\w+) b/i],[i,[o,"NuVision"],[e,l]],[/\b(k88) b/i],[i,[o,"ZTE"],[e,l]],[/\b(nx\d{3}j) b/i],[i,[o,"ZTE"],[e,s]],[/\b(gen\d{3}) b.+49h/i],[i,[o,"Swiss"],[e,s]],[/\b(zur\d{3}) b/i],[i,[o,"Swiss"],[e,l]],[/\b((zeki)?tb.*\b) b/i],[i,[o,"Zeki"],[e,l]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[o,"Dragon Touch"],i,[e,l]],[/\b(ns-?\w{0,9}) b/i],[i,[o,"Insignia"],[e,l]],[/\b((nxa|next)-?\w{0,9}) b/i],[i,[o,"NextBook"],[e,l]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[o,"Voice"],i,[e,s]],[/\b(lvtel\-)?(v1[12]) b/i],[[o,"LvTel"],i,[e,s]],[/\b(ph-1) /i],[i,[o,"Essential"],[e,s]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[i,[o,"Envizen"],[e,l]],[/\b(trio[-\w\. ]+) b/i],[i,[o,"MachSpeed"],[e,l]],[/\btu_(1491) b/i],[i,[o,"Rotor"],[e,l]],[/(shield[\w ]+) b/i],[i,[o,"Nvidia"],[e,l]],[/(sprint) (\w+)/i],[o,i,[e,s]],[/(kin\.[onetw]{3})/i],[[i,/\./g," "],[o,ee],[e,s]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[i,[o,te],[e,l]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[i,[o,te],[e,s]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[o,i,[e,f]],[/droid.+; (shield) bui/i],[i,[o,"Nvidia"],[e,f]],[/(playstation [345portablevi]+)/i],[i,[o,G],[e,f]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[i,[o,ee],[e,f]],[/smart-tv.+(samsung)/i],[o,[e,j]],[/hbbtv.+maple;(\d+)/i],[[i,/^/,"SmartTV"],[o,oe],[e,j]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[o,$],[e,j]],[/(apple) ?tv/i],[o,[i,V+" TV"],[e,j]],[/crkey/i],[[i,H+"cast"],[o,q],[e,j]],[/droid.+aft(\w)( bui|\))/i],[i,[o,X],[e,j]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[i,[o,ue],[e,j]],[/(bravia[\w ]+)( bui|\))/i],[i,[o,G],[e,j]],[/(mitv-\w{5}) bui/i],[i,[o,ie],[e,j]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[o,re],[i,re],[e,j]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[e,j]],[/((pebble))app/i],[o,i,[e,D]],[/droid.+; (glass) \d/i],[i,[o,q],[e,D]],[/droid.+; (wt63?0{2,3})\)/i],[i,[o,te],[e,D]],[/(quest( 2)?)/i],[i,[o,we],[e,D]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[o,[e,se]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[i,[e,s]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[i,[e,l]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[e,l]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[e,s]],[/(android[-\w\. ]{0,9});.+buil/i],[i,[o,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[r,[t,Qe+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[r,[t,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[t,r],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[r,t]],os:[[/microsoft (windows) (vista|xp)/i],[t,r],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[t,[r,ne,me]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[t,"Windows"],[r,ne,me]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[r,/_/g,"."],[t,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[t,"Mac OS"],[r,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[r,t],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[t,r],[/\(bb(10);/i],[r,[t,ce]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[r,[t,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[r,[t,B+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[r,[t,"webOS"]],[/crkey\/([\d\.]+)/i],[r,[t,H+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[t,"Chromium OS"],r],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[t,r],[/(sunos) ?([\w\.\d]*)/i],[[t,"Solaris"],r],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[t,r]]},x=function(d,m){if(typeof d===z&&(m=d,d=g),!(this instanceof x))return new x(d,m).getResult();var b=d||(typeof y!==k&&y.navigator&&y.navigator.userAgent?y.navigator.userAgent:M),N=m?We(ge,m):ge;return this.getBrowser=function(){var u={};return u[t]=g,u[r]=g,_.call(u,b,N.browser),u.major=Fe(u.version),u},this.getCPU=function(){var u={};return u[c]=g,_.call(u,b,N.cpu),u},this.getDevice=function(){var u={};return u[o]=g,u[i]=g,u[e]=g,_.call(u,b,N.device),u},this.getEngine=function(){var u={};return u[t]=g,u[r]=g,_.call(u,b,N.engine),u},this.getOS=function(){var u={};return u[t]=g,u[r]=g,_.call(u,b,N.os),u},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return b},this.setUA=function(u){return b=typeof u===T&&u.length>K?re(u,K):u,this},this.setUA(b),this};x.VERSION=v,x.BROWSER=Q([t,r,O]),x.CPU=Q([c]),x.DEVICE=Q([i,o,e,f,s,j,l,D,se]),x.ENGINE=x.OS=Q([t,r]),n.exports&&(w=n.exports=x),w.UAParser=x;var I=typeof y!==k&&(y.jQuery||y.Zepto);if(I&&!I.ua){var W=new x;I.ua=W.getResult(),I.ua.get=function(){return W.getUA()},I.ua.set=function(d){W.setUA(d);var m=W.getResult();for(var b in m)I.ua[b]=m[b]}}})(typeof window=="object"?window:Ne)})(Ce,R);const ke=R,Te=a.defineComponent({name:"addToHomescreen",props:{title:{type:String,required:!1},content:{type:String,required:!1},titleColor:{type:String,required:!1},contentColor:{type:String,required:!1},iconPath:{type:String,required:!1},iconColor:{type:String,required:!1},iconTextColor:{type:String,required:!1},buttonColor:{type:String,required:!1},buttonTextColor:{type:String,required:!1},background:{type:String,required:!1},lang:{type:String,required:!1},expires:{type:Number,required:!1}},setup(n){const w=c=>n?n[c]:void 0,y=c=>{const f=n?n[c]:c;return f&&typeof f=="string"?f:c},g=w("lang")||"en_GB",v=ve[g],M=c=>c.split(".").reduce((f,s)=>{if(f)return f[s]},v),p=a.ref(),C=a.computed(()=>document.title),k=a.computed(()=>window.location.href),z=a.computed(()=>C.value.substring(0,1)),T=a.ref(!1),O=()=>{let c=new Date;const f=n.expires||365;c.setDate(c.getDate()+f),J.set("addToHomescreenCalled","true",{expires:c})},i=a.computed(()=>{const c=w("iconColor"),f=w("iconPath"),s=w("iconTextColor");return{backgroundColor:c&&typeof c=="string"?c:"transparent",backgroundImage:f?"url("+w("iconPath")+")":"none",color:s&&typeof s=="string"?s:"black"}}),t=a.computed(()=>{const c=w("buttonTextColor"),f=w("buttonColor");return{color:c&&c==="string"?c:"white",backgroundColor:f&&typeof f=="string"?f:"black"}}),e=()=>{O(),T.value=!1},o=()=>{const c=document.getElementById("IOSmodal");c&&(c.style.display="none")},r=()=>{const f=new ke().getResult(),s={os:f.os.name,browser:f.browser.name},l=document.getElementById("IOSmodal");p.value?p.value.prompt():s.os==="iOS"?l&&(l.style.display="block"):s.os==="Android"?alert(M("addMessages.android")):s.os==="Windows"&&(s.browser==="Chrome"||s.browser==="Edge")?alert(M("addMessages.windows.chrome")):s.os==="Windows"&&s.browser==="Firefox"?alert(M("addMessages.windows.firefox")):s.os==="Mac OS"?"ontouchstart"in window||navigator.maxTouchPoints>0?l&&(l.style.display="block"):s.browser==="Firefox"?alert(M("addMessages.macos.firefox")):s.browser==="Chrome"?alert(M("addMessages.macos.chrome")):s.browser==="Safari"&&alert(M("addMessages.macos.safari")):alert(M("addMessages.others")),T.value=!1};return a.onMounted(()=>{window.addEventListener("beforeinstallprompt",f=>{f.preventDefault(),p.value=f});const c=J.get("addToHomescreenCalled");!Me()&&!c&&(T.value=!0,O())}),{t:M,addToHomescreen:r,closeModal:o,close:e,buttonStyle:t,iconStyle:i,getCssOpt:y,getOpt:w,appUrl:k,firstCharTitle:z,appTitle:C,opened:T}}}),je="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMzMy4zMjQgMzMzLjMyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzMzLjMyNCAzMzMuMzI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjIyMjIwOyIgZD0iTTEyNS4yNTUsNTkuNTEzbDMzLjkwNy0zMy45MDd2MTQ5LjQ1MWMwLDQuMTQzLDMuMzU4LDcuNSw3LjUsNy41czcuNS0zLjM1Nyw3LjUtNy41VjI1LjYwNg0KCQlsMzMuOTA3LDMzLjkwN2MxLjQ2NCwxLjQ2NCwzLjM4NCwyLjE5Niw1LjMwMywyLjE5NnMzLjgzOS0wLjczMiw1LjMwMy0yLjE5NmMyLjkyOS0yLjkzLDIuOTI5LTcuNjc4LDAtMTAuNjA3bC00Ni43MS00Ni43MQ0KCQljLTIuOTI5LTIuOTI4LTcuNjc4LTIuOTI4LTEwLjYwNiwwbC00Ni43MSw0Ni43MWMtMi45MjksMi45My0yLjkyOSw3LjY3OCwwLDEwLjYwN0MxMTcuNTc3LDYyLjQ0MSwxMjIuMzI2LDYyLjQ0MSwxMjUuMjU1LDU5LjUxM3oNCgkJIi8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIyMjIyMDsiIGQ9Ik0yNjMuMzI4LDg3LjU1N2gtNjEuNjQ1Yy00LjE0MiwwLTcuNSwzLjM1Ny03LjUsNy41czMuMzU4LDcuNSw3LjUsNy41aDU0LjE0NXYyMTUuNzY3SDc3LjQ5NQ0KCQlWMTAyLjU1N2g1NC4xNDVjNC4xNDIsMCw3LjUtMy4zNTcsNy41LTcuNXMtMy4zNTgtNy41LTcuNS03LjVINjkuOTk1Yy00LjE0MiwwLTcuNSwzLjM1Ny03LjUsNy41djIzMC43NjcNCgkJYzAsNC4xNDMsMy4zNTgsNy41LDcuNSw3LjVoMTkzLjMzM2M0LjE0MiwwLDcuNS0zLjM1Nyw3LjUtNy41Vjk1LjA1N0MyNzAuODI4LDkwLjkxNSwyNjcuNDcsODcuNTU3LDI2My4zMjgsODcuNTU3eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",xe="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTkgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNkg1VjVoMTR2MTR6bS04LTJoMnYtNGg0di0yaC00VjdoLTJ2NEg3djJoNHoiLz48L3N2Zz4=",Je="",Le=(n,w)=>{const y=n.__vccOpts||n;for(const[g,v]of w)y[g]=v;return y},Se={class:"add-to-homescreen-plugin-container"},ze={class:"flex"},Ee={class:"icon-container"},Ie={class:"col"},Oe=a.createElementVNode("br",null,null,-1),De=["innerHTML"],Ae={class:"flex"},_e={class:"col"},Pe={class:"btn-container"},Ue={id:"IOSmodal",class:"modal add-to-homescreen-visible"},Re={class:"modal-content"},Ve=a.createElementVNode("img",{class:"shareIOS",src:je,alt:"share IOS"},null,-1),He=a.createElementVNode("img",{class:"addIOS",src:xe,alt:"add IOS"},null,-1);function Be(n,w,y,g,v,M){return a.openBlock(),a.createElementBlock("div",Se,[a.createElementVNode("div",{class:a.normalizeClass(["add-to-homescreen-container",n.opened?"add-to-homescreen-visible":"add-to-homescreen-hidden"])},[a.createElementVNode("div",ze,[a.createElementVNode("div",Ee,[a.createElementVNode("span",{class:"icon",style:a.normalizeStyle(n.iconStyle)},[n.getOpt("iconPath")?a.createCommentVNode("",!0):(a.openBlock(),a.createElementBlock(a.Fragment,{key:0},[a.createTextVNode(a.toDisplayString(n.firstCharTitle),1)],64))],4)]),a.createElementVNode("div",Ie,[a.createElementVNode("span",{class:"app-title",style:a.normalizeStyle(n.getCssOpt("titleColor"))},a.toDisplayString(n.getOpt("title")?n.getOpt("title"):n.appTitle),5),Oe,a.createElementVNode("span",{class:"app-content",style:a.normalizeStyle({color:n.getCssOpt("contentColor")}),innerHTML:n.getOpt("content")||n.appUrl},null,12,De)])]),a.createElementVNode("div",Ae,[a.createElementVNode("div",_e,[a.createElementVNode("div",Pe,[a.createElementVNode("button",{onClick:w[0]||(w[0]=(...p)=>n.addToHomescreen&&n.addToHomescreen(...p)),class:"add-button",style:a.normalizeStyle(n.buttonStyle)},a.toDisplayString(n.t("addToHomescreen")),5)])])]),a.createElementVNode("button",{class:"close_btn",onClick:w[1]||(w[1]=(...p)=>n.close&&n.close(...p))})],2),a.createElementVNode("div",Ue,[a.createElementVNode("div",Re,[a.createElementVNode("ul",null,[a.createElementVNode("li",null,[a.createTextVNode(a.toDisplayString(n.t("addMessages.ios1"))+" ",1),Ve]),a.createElementVNode("li",null,[a.createTextVNode(a.toDisplayString(n.t("addMessages.ios2"))+" ",1),He])]),a.createElementVNode("button",{class:"closeModal",style:a.normalizeStyle(n.buttonStyle),label:"OK",onClick:w[2]||(w[2]=(...p)=>n.closeModal&&n.closeModal(...p))}," OK ",4)])])])}const qe=Le(Te,[["render",Be]]),Ze=()=>{const n=["file:","cordova:","capacitor:"];return window.matchMedia("(display-mode: standalone)").matches||window.location&&window.location.protocol&&n.indexOf(window.location.protocol)!==-1};function ae(n){if(!Ze()||!J.get("addToHomescreenCalled")){const w=a.h(qe,n),y=document.createElement("div");return document.body.appendChild(y),a.render(w,y),w.component}}const Ge={install(n,w){ae(w)}};S.default=Ge,S.useAddToHomescreen=ae,Object.defineProperties(S,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
