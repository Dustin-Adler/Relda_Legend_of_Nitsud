!function(){var t={3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6077:function(t,e,n){var i=n(111);t.exports=function(t){if(!i(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},1223:function(t,e,n){var i=n(5112),r=n(30),a=n(3070),o=i("unscopables"),s=Array.prototype;null==s[o]&&a.f(s,o,{configurable:!0,value:r(null)}),t.exports=function(t){s[o][t]=!0}},9670:function(t,e,n){var i=n(111);t.exports=function(t){if(!i(t))throw TypeError(String(t)+" is not an object");return t}},8533:function(t,e,n){"use strict";var i=n(2092).forEach,r=n(9341)("forEach");t.exports=r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},1318:function(t,e,n){var i=n(5656),r=n(7466),a=n(1400),o=function(t){return function(e,n,o){var s,u=i(e),h=r(u.length),c=a(o,h);if(t&&n!=n){for(;h>c;)if((s=u[c++])!=s)return!0}else for(;h>c;c++)if((t||c in u)&&u[c]===n)return t||c||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},2092:function(t,e,n){var i=n(9974),r=n(8361),a=n(7908),o=n(7466),s=n(5417),u=[].push,h=function(t){var e=1==t,n=2==t,h=3==t,c=4==t,l=6==t,f=7==t,d=5==t||l;return function(y,p,v,m){for(var g,w,x=a(y),b=r(x),k=i(p,v,3),S=o(b.length),C=0,I=m||s,O=e?I(y,S):n||f?I(y,0):void 0;S>C;C++)if((d||C in b)&&(w=k(g=b[C],C,x),t))if(e)O[C]=w;else if(w)switch(t){case 3:return!0;case 5:return g;case 6:return C;case 2:u.call(O,g)}else switch(t){case 4:return!1;case 7:u.call(O,g)}return l?-1:h||c?c:O}};t.exports={forEach:h(0),map:h(1),filter:h(2),some:h(3),every:h(4),find:h(5),findIndex:h(6),filterReject:h(7)}},1194:function(t,e,n){var i=n(7293),r=n(5112),a=n(7392),o=r("species");t.exports=function(t){return a>=51||!i((function(){var e=[];return(e.constructor={})[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},9341:function(t,e,n){"use strict";var i=n(7293);t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},7475:function(t,e,n){var i=n(111),r=n(3157),a=n(5112)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)?i(e)&&null===(e=e[a])&&(e=void 0):e=void 0),void 0===e?Array:e}},5417:function(t,e,n){var i=n(7475);t.exports=function(t,e){return new(i(t))(0===e?0:e)}},4326:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},648:function(t,e,n){var i=n(1694),r=n(4326),a=n(5112)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=i?r:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),a))?n:o?r(e):"Object"==(i=r(e))&&"function"==typeof e.callee?"Arguments":i}},9920:function(t,e,n){var i=n(6656),r=n(3887),a=n(1236),o=n(3070);t.exports=function(t,e){for(var n=r(e),s=o.f,u=a.f,h=0;h<n.length;h++){var c=n[h];i(t,c)||s(t,c,u(e,c))}}},8544:function(t,e,n){var i=n(7293);t.exports=!i((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:function(t,e,n){"use strict";var i=n(3383).IteratorPrototype,r=n(30),a=n(9114),o=n(8003),s=n(7497),u=function(){return this};t.exports=function(t,e,n){var h=e+" Iterator";return t.prototype=r(i,{next:a(1,n)}),o(t,h,!1,!0),s[h]=u,t}},8880:function(t,e,n){var i=n(9781),r=n(3070),a=n(9114);t.exports=i?function(t,e,n){return r.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:function(t,e,n){"use strict";var i=n(4948),r=n(3070),a=n(9114);t.exports=function(t,e,n){var o=i(e);o in t?r.f(t,o,a(0,n)):t[o]=n}},654:function(t,e,n){"use strict";var i=n(2109),r=n(4994),a=n(9518),o=n(7674),s=n(8003),u=n(8880),h=n(1320),c=n(5112),l=n(1913),f=n(7497),d=n(3383),y=d.IteratorPrototype,p=d.BUGGY_SAFARI_ITERATORS,v=c("iterator"),m="keys",g="values",w="entries",x=function(){return this};t.exports=function(t,e,n,c,d,b,k){r(n,e,c);var S,C,I,O=function(t){if(t===d&&_)return _;if(!p&&t in T)return T[t];switch(t){case m:case g:case w:return function(){return new n(this,t)}}return function(){return new n(this)}},A=e+" Iterator",E=!1,T=t.prototype,j=T[v]||T["@@iterator"]||d&&T[d],_=!p&&j||O(d),M="Array"==e&&T.entries||j;if(M&&(S=a(M.call(new t)),y!==Object.prototype&&S.next&&(l||a(S)===y||(o?o(S,y):"function"!=typeof S[v]&&u(S,v,x)),s(S,A,!0,!0),l&&(f[A]=x))),d==g&&j&&j.name!==g&&(E=!0,_=function(){return j.call(this)}),l&&!k||T[v]===_||u(T,v,_),f[e]=_,d)if(C={values:O(g),keys:b?_:O(m),entries:O(w)},k)for(I in C)(p||E||!(I in T))&&h(T,I,C[I]);else i({target:e,proto:!0,forced:p||E},C);return C}},9781:function(t,e,n){var i=n(7293);t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var i=n(7854),r=n(111),a=i.document,o=r(a)&&r(a.createElement);t.exports=function(t){return o?a.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:function(t,e,n){var i=n(5005);t.exports=i("navigator","userAgent")||""},7392:function(t,e,n){var i,r,a=n(7854),o=n(8113),s=a.process,u=a.Deno,h=s&&s.versions||u&&u.version,c=h&&h.v8;c?r=(i=c.split("."))[0]<4?1:i[0]+i[1]:o&&(!(i=o.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/))&&(r=i[1]),t.exports=r&&+r},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var i=n(7854),r=n(1236).f,a=n(8880),o=n(1320),s=n(3505),u=n(9920),h=n(4705);t.exports=function(t,e){var n,c,l,f,d,y=t.target,p=t.global,v=t.stat;if(n=p?i:v?i[y]||s(y,{}):(i[y]||{}).prototype)for(c in e){if(f=e[c],l=t.noTargetGet?(d=r(n,c))&&d.value:n[c],!h(p?c:y+(v?".":"#")+c,t.forced)&&void 0!==l){if(typeof f==typeof l)continue;u(f,l)}(t.sham||l&&l.sham)&&a(f,"sham",!0),o(n,c,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,e,n){var i=n(3099);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},5005:function(t,e,n){var i=n(7854),r=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?r(i[t]):i[t]&&i[t][e]}},7854:function(t,e,n){var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:function(t,e,n){var i=n(7908),r={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return r.call(i(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var i=n(5005);t.exports=i("document","documentElement")},4664:function(t,e,n){var i=n(9781),r=n(7293),a=n(317);t.exports=!i&&!r((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var i=n(7293),r=n(4326),a="".split;t.exports=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?a.call(t,""):Object(t)}:Object},2788:function(t,e,n){var i=n(5465),r=Function.toString;"function"!=typeof i.inspectSource&&(i.inspectSource=function(t){return r.call(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var i,r,a,o=n(8536),s=n(7854),u=n(111),h=n(8880),c=n(6656),l=n(5465),f=n(6200),d=n(3501),y="Object already initialized",p=s.WeakMap;if(o||l.state){var v=l.state||(l.state=new p),m=v.get,g=v.has,w=v.set;i=function(t,e){if(g.call(v,t))throw new TypeError(y);return e.facade=t,w.call(v,t,e),e},r=function(t){return m.call(v,t)||{}},a=function(t){return g.call(v,t)}}else{var x=f("state");d[x]=!0,i=function(t,e){if(c(t,x))throw new TypeError(y);return e.facade=t,h(t,x,e),e},r=function(t){return c(t,x)?t[x]:{}},a=function(t){return c(t,x)}}t.exports={set:i,get:r,has:a,enforce:function(t){return a(t)?r(t):i(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=r(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},3157:function(t,e,n){var i=n(4326);t.exports=Array.isArray||function(t){return"Array"==i(t)}},4705:function(t,e,n){var i=n(7293),r=/#|\.prototype\./,a=function(t,e){var n=s[o(t)];return n==h||n!=u&&("function"==typeof e?i(e):!!e)},o=a.normalize=function(t){return String(t).replace(r,".").toLowerCase()},s=a.data={},u=a.NATIVE="N",h=a.POLYFILL="P";t.exports=a},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},2190:function(t,e,n){var i=n(5005),r=n(3307);t.exports=r?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return"function"==typeof e&&Object(t)instanceof e}},3383:function(t,e,n){"use strict";var i,r,a,o=n(7293),s=n(9518),u=n(8880),h=n(6656),c=n(5112),l=n(1913),f=c("iterator"),d=!1;[].keys&&("next"in(a=[].keys())?(r=s(s(a)))!==Object.prototype&&(i=r):d=!0);var y=null==i||o((function(){var t={};return i[f].call(t)!==t}));y&&(i={}),l&&!y||h(i,f)||u(i,f,(function(){return this})),t.exports={IteratorPrototype:i,BUGGY_SAFARI_ITERATORS:d}},7497:function(t){t.exports={}},133:function(t,e,n){var i=n(7392),r=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},8536:function(t,e,n){var i=n(7854),r=n(2788),a=i.WeakMap;t.exports="function"==typeof a&&/native code/.test(r(a))},30:function(t,e,n){var i,r=n(9670),a=n(6048),o=n(748),s=n(3501),u=n(490),h=n(317),c=n(6200)("IE_PROTO"),l=function(){},f=function(t){return"<script>"+t+"<\/script>"},d=function(t){t.write(f("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){try{i=new ActiveXObject("htmlfile")}catch(t){}y=document.domain&&i?d(i):function(){var t,e=h("iframe");if(e.style)return e.style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(f("document.F=Object")),t.close(),t.F}()||d(i);for(var t=o.length;t--;)delete y.prototype[o[t]];return y()};s[c]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(l.prototype=r(t),n=new l,l.prototype=null,n[c]=t):n=y(),void 0===e?n:a(n,e)}},6048:function(t,e,n){var i=n(9781),r=n(3070),a=n(9670),o=n(1956);t.exports=i?Object.defineProperties:function(t,e){a(t);for(var n,i=o(e),s=i.length,u=0;s>u;)r.f(t,n=i[u++],e[n]);return t}},3070:function(t,e,n){var i=n(9781),r=n(4664),a=n(9670),o=n(4948),s=Object.defineProperty;e.f=i?s:function(t,e,n){if(a(t),e=o(e),a(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var i=n(9781),r=n(5296),a=n(9114),o=n(5656),s=n(4948),u=n(6656),h=n(4664),c=Object.getOwnPropertyDescriptor;e.f=i?c:function(t,e){if(t=o(t),e=s(e),h)try{return c(t,e)}catch(t){}if(u(t,e))return a(!r.f.call(t,e),t[e])}},8006:function(t,e,n){var i=n(6324),r=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var i=n(6656),r=n(7908),a=n(6200),o=n(8544),s=a("IE_PROTO"),u=Object.prototype;t.exports=o?Object.getPrototypeOf:function(t){return t=r(t),i(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},6324:function(t,e,n){var i=n(6656),r=n(5656),a=n(1318).indexOf,o=n(3501);t.exports=function(t,e){var n,s=r(t),u=0,h=[];for(n in s)!i(o,n)&&i(s,n)&&h.push(n);for(;e.length>u;)i(s,n=e[u++])&&(~a(h,n)||h.push(n));return h}},1956:function(t,e,n){var i=n(6324),r=n(748);t.exports=Object.keys||function(t){return i(t,r)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);e.f=r?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var i=n(9670),r=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,a){return i(n),r(a),e?t.call(n,a):n.__proto__=a,n}}():void 0)},288:function(t,e,n){"use strict";var i=n(1694),r=n(648);t.exports=i?{}.toString:function(){return"[object "+r(this)+"]"}},2140:function(t,e,n){var i=n(111);t.exports=function(t,e){var n,r;if("string"===e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if("string"!==e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},3887:function(t,e,n){var i=n(5005),r=n(8006),a=n(5181),o=n(9670);t.exports=i("Reflect","ownKeys")||function(t){var e=r.f(o(t)),n=a.f;return n?e.concat(n(t)):e}},1320:function(t,e,n){var i=n(7854),r=n(8880),a=n(6656),o=n(3505),s=n(2788),u=n(9909),h=u.get,c=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,s){var u,h=!!s&&!!s.unsafe,f=!!s&&!!s.enumerable,d=!!s&&!!s.noTargetGet;"function"==typeof n&&("string"!=typeof e||a(n,"name")||r(n,"name",e),(u=c(n)).source||(u.source=l.join("string"==typeof e?e:""))),t!==i?(h?!d&&t[e]&&(f=!0):delete t[e],f?t[e]=n:r(t,e,n)):f?t[e]=n:o(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&h(this).source||s(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,e,n){var i=n(7854);t.exports=function(t,e){try{Object.defineProperty(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},8003:function(t,e,n){var i=n(3070).f,r=n(6656),a=n(5112)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,a)&&i(t,a,{configurable:!0,value:e})}},6200:function(t,e,n){var i=n(2309),r=n(9711),a=i("keys");t.exports=function(t){return a[t]||(a[t]=r(t))}},5465:function(t,e,n){var i=n(7854),r=n(3505),a="__core-js_shared__",o=i[a]||r(a,{});t.exports=o},2309:function(t,e,n){var i=n(1913),r=n(5465);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.16.1",mode:i?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,n){var i=n(9958),r=Math.max,a=Math.min;t.exports=function(t,e){var n=i(t);return n<0?r(n+e,0):a(n,e)}},5656:function(t,e,n){var i=n(8361),r=n(4488);t.exports=function(t){return i(r(t))}},9958:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},7466:function(t,e,n){var i=n(9958),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},7908:function(t,e,n){var i=n(4488);t.exports=function(t){return Object(i(t))}},7593:function(t,e,n){var i=n(111),r=n(2190),a=n(2140),o=n(5112)("toPrimitive");t.exports=function(t,e){if(!i(t)||r(t))return t;var n,s=t[o];if(void 0!==s){if(void 0===e&&(e="default"),n=s.call(t,e),!i(n)||r(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var i=n(7593),r=n(2190);t.exports=function(t){var e=i(t,"string");return r(e)?e:String(e)}},1694:function(t,e,n){var i={};i[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(i)},9711:function(t){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},3307:function(t,e,n){var i=n(133);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,n){var i=n(7854),r=n(2309),a=n(6656),o=n(9711),s=n(133),u=n(3307),h=r("wks"),c=i.Symbol,l=u?c:c&&c.withoutSetter||o;t.exports=function(t){return a(h,t)&&(s||"string"==typeof h[t])||(s&&a(c,t)?h[t]=c[t]:h[t]=l("Symbol."+t)),h[t]}},6992:function(t,e,n){"use strict";var i=n(5656),r=n(1223),a=n(7497),o=n(9909),s=n(654),u="Array Iterator",h=o.set,c=o.getterFor(u);t.exports=s(Array,"Array",(function(t,e){h(this,{type:u,target:i(t),index:0,kind:e})}),(function(){var t=c(this),e=t.target,n=t.kind,i=t.index++;return!e||i>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:i,done:!1}:"values"==n?{value:e[i],done:!1}:{value:[i,e[i]],done:!1}}),"values"),a.Arguments=a.Array,r("keys"),r("values"),r("entries")},561:function(t,e,n){"use strict";var i=n(2109),r=n(1400),a=n(9958),o=n(7466),s=n(7908),u=n(5417),h=n(6135),c=n(1194)("splice"),l=Math.max,f=Math.min,d=9007199254740991,y="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!c},{splice:function(t,e){var n,i,c,p,v,m,g=s(this),w=o(g.length),x=r(t,w),b=arguments.length;if(0===b?n=i=0:1===b?(n=0,i=w-x):(n=b-2,i=f(l(a(e),0),w-x)),w+n-i>d)throw TypeError(y);for(c=u(g,i),p=0;p<i;p++)(v=x+p)in g&&h(c,p,g[v]);if(c.length=i,n<i){for(p=x;p<w-i;p++)m=p+n,(v=p+i)in g?g[m]=g[v]:delete g[m];for(p=w;p>w-i+n;p--)delete g[p-1]}else if(n>i)for(p=w-i;p>x;p--)m=p+n-1,(v=p+i-1)in g?g[m]=g[v]:delete g[m];for(p=0;p<n;p++)g[p+x]=arguments[p+2];return g.length=w-i+n,c}})},8309:function(t,e,n){var i=n(9781),r=n(3070).f,a=Function.prototype,o=a.toString,s=/^\s*function ([^ (]*)/,u="name";i&&!(u in a)&&r(a,u,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},1539:function(t,e,n){var i=n(1694),r=n(1320),a=n(288);i||r(Object.prototype,"toString",a,{unsafe:!0})},4747:function(t,e,n){var i=n(7854),r=n(8324),a=n(8533),o=n(8880);for(var s in r){var u=i[s],h=u&&u.prototype;if(h&&h.forEach!==a)try{o(h,"forEach",a)}catch(t){h.forEach=a}}},3948:function(t,e,n){var i=n(7854),r=n(8324),a=n(6992),o=n(8880),s=n(5112),u=s("iterator"),h=s("toStringTag"),c=a.values;for(var l in r){var f=i[l],d=f&&f.prototype;if(d){if(d[u]!==c)try{o(d,u,c)}catch(t){d[u]=c}if(d[h]||o(d,h,l),r[l])for(var y in a)if(d[y]!==a[y])try{o(d,y,a[y])}catch(t){d[y]=a[y]}}}}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,n),a.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(4747),n(561),n(8309);var e=function(){function e(t,n,i,r,a,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.fireball=new Image,this.fireball.src="./Assets/tileset/fireballs.png",this.ctx=t,this.canvas=n,this.w=8,this.h=10,this.x=i,this.y=r,this.targetX=a,this.targetY=o,this.dx=0,this.dy=0,this.velocityX=0,this.velocityY=0,this.animationCount=0}var n,i;return n=e,(i=[{key:"draw",value:function(t,e,n,i,r,a,o,s,u){this.ctx.drawImage(t,e,n,i,r,a,o,s,u)}},{key:"drawFireBall",value:function(){this.draw(this.fireball,this.dx*this.w,this.dy,this.w,this.h,this.x,this.y,this.w,this.h)}},{key:"getVelocity",value:function(){var t=Math.atan2(this.targetY-this.y,this.targetX-this.x);this.velocityX=Math.cos(t),this.velocityY=Math.sin(t)}},{key:"moveFireBall",value:function(){this.x+=this.velocityX,this.y+=this.velocityY}},{key:"animateFireball",value:function(){this.animationCount<4?this.animationCount++:this.dx<3?(this.dx++,this.animationCount=0):(this.dx=0,this.animationCount=0)}},{key:"update",value:function(){this.drawFireBall(),this.moveFireBall(),this.animateFireball()}}])&&t(n.prototype,i),e}();function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.attack=new Audio,this.attack.src="./Assets/sound/attack.wav",this.battleSong=new Audio,this.battleSong.src="./Assets/sound/battle-song.wav",this.death=new Audio,this.death.src="./Assets/sound/death.wav",this.enemy_hit=new Audio,this.enemy_hit.src="./Assets/sound/enemy_hit.wav",this.fanfare=new Audio,this.fanfare.src="./Assets/sound/fanfare.wav",this.reveal_item=new Audio,this.reveal_item.src="./Assets/sound/reveal_item.wav",this.take_dmg=new Audio,this.take_dmg.src="./Assets/sound/take_dmg.wav",this.deathScrean=new Audio,this.deathScrean.src="./Assets/sound/ganon_laugh.wav"}var e,n;return e=t,(n=[{key:"pauseAllSounds",value:function(){this.attack.pause(),this.battleSong.pause(),this.death.pause(),this.enemy_hit.pause(),this.fanfare.pause(),this.reveal_item.pause(),this.take_dmg.pause()}},{key:"deathScreenSound",value:function(){this.deathScrean.play()}},{key:"attackSound",value:function(){this.attack.play(),this.attack.volume=.7}},{key:"startBattleSong",value:function(){this.battleSong.play(),this.battleSong.volume=.1}},{key:"deathSound",value:function(){this.death.play(),this.death.volume=.7}},{key:"enemyHitSound",value:function(){this.enemy_hit.play()}},{key:"fanfareSound",value:function(){this.fanfare.play()}},{key:"revealItemSound",value:function(){this.reveal_item.play(),this.reveal_item.volume=.8}},{key:"playerTakeDmgSound",value:function(){this.take_dmg.play()}}])&&i(e.prototype,n),t}();function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.targetX=120,this.targetY=80,this.sounds=new r,this.dragon=new Image,this.dragon.src="./Assets/tileset/dragon.png",this.ctx=e,this.canvas=n,this.fireballs=[],this.fireballInterval=0,this.alive=!0,this.body={w:24,h:32,x:116,y:32,dx:0,dy:0,bodyCount:0},this.head1={name:1,w:10,h:16,x:103,y:60,dx:83,dy:0,radius:14,radians:0,velocity:.05,velocityX:0,velocityY:0,health:20},this.head2={name:2,w:10,h:16,x:123,y:68,dx:83,dy:0,radius:14,radians:0,velocity:.05,health:20},this.head3={name:3,w:10,h:16,x:143,y:60,dx:83,dy:0,radius:14,radians:0,velocity:.05,health:20},this.liveHeads=[this.head1,this.head2,this.head3],this.deadHeads={w:16,h:16,x:120,y:48,dx:93,dy:0,speed:4},this.neck={w:10,h:16,x:120,y:48,dx:74,dy:0}}var n,i;return n=t,(i=[{key:"getTarget",value:function(t){this.targetX=t.x,this.targetY=t.y}},{key:"draw",value:function(t,e,n,i,r,a,o,s,u){this.ctx.drawImage(t,e,n,i,r,a,o,s,u)}},{key:"drawBody",value:function(){this.draw(this.dragon,this.body.dx*(this.body.w+1),this.body.dy,this.body.w,this.body.h,this.body.x,this.body.y,this.body.w,this.body.h)}},{key:"drawHeads",value:function(t){this.draw(this.dragon,t.dx,t.dy,t.w,t.h,t.x,t.y,t.w,t.h)}},{key:"bodyAnimation",value:function(){this.body.bodyCount<10?this.body.bodyCount+=1:this.body.dx<2?(this.body.dx++,this.body.bodyCount=0):(this.body.dx=0,this.body.bodyCount=0)}},{key:"moveHead1",value:function(){this.head1.radians+=this.head1.velocity,this.head1.velocityX=this.head1.x-Math.sin(this.head1.radians),this.head1.velocityY=this.head1.y+Math.cos(this.head1.radians),this.head1.x=this.head1.velocityX,this.head1.y=this.head1.velocityY}},{key:"moveHead2",value:function(){this.head2.radians+=this.head2.velocity,this.head2.y=this.head2.y+Math.cos(this.head2.radians)}},{key:"moveHead3",value:function(){this.head3.radians+=this.head3.velocity,this.head3.x=this.head3.x+Math.sin(this.head3.radians),this.head3.y=this.head3.y+Math.cos(this.head3.radians)}},{key:"drawNeck",value:function(){this.draw(this.dragon,this.neck.dx,this.neck.dy,this.neck.w,this.neck.h,this.neck.x,this.neck.y,this.neck.w,this.neck.h)}},{key:"drawDeadHeads",value:function(){this.draw(this.dragon,this.deadHeads.dx,this.deadHeads.dy,this.deadHeads.w,this.deadHeads.h,this.deadHeads.x,this.deadHeads.y,this.deadHeads.w,this.deadHeads.h)}},{key:"shootFireballs",value:function(){var t=this.liveHeads.length;if(t){var n=this.liveHeads[Math.floor(Math.random()*t)],i=new e(this.ctx,this.canvas,n.x+3,n.y+16,this.targetX+8,this.targetY+8);i.getVelocity(),this.fireballs.push(i)}}},{key:"getFireballInterval",value:function(){this.fireballInterval<30?this.fireballInterval++:(this.shootFireballs(),this.fireballInterval=0)}},{key:"drawAndMoveBody",value:function(){this.drawBody(),this.bodyAnimation()}},{key:"trackHeads",value:function(t,e){var n=this;this.liveHeads.length?this.liveHeads.forEach((function(i,r){i.health?(n.drawHeads(i),1===i.name?n.moveHead1():2===i.name?n.moveHead2():n.moveHead3(),e.collision(i,t.hurtBox)&&(i.health--,n.sounds.enemyHitSound())):n.liveHeads.splice(r,1)})):this.alive=!1}},{key:"moveDeadHeads",value:function(){}},{key:"update",value:function(t,e){this.drawAndMoveBody(),this.getTarget(t),this.getFireballInterval(),this.trackHeads(t,e)}}])&&a(n.prototype,i),t}(),s=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.bossChamber=[[15,13,13,13,13,13,13,48,49,13,13,13,13,13,13,15],[15,19,19,19,19,19,19,54,55,19,19,19,19,19,19,15],[15,0,6,0,6,0,6,0,6,0,6,0,6,0,6,15],[15,6,0,6,0,6,0,6,0,6,0,6,0,6,0,15],[15,0,6,0,6,0,6,0,6,0,6,0,6,0,6,15],[15,6,0,6,0,6,0,6,0,6,0,6,0,6,0,15],[15,0,6,0,6,0,6,0,6,0,6,0,6,0,6,15],[15,8,0,6,0,6,0,6,0,6,0,6,0,6,8,15],[15,8,6,0,6,0,6,0,6,0,6,0,6,0,8,15],[15,6,0,6,0,6,0,6,0,6,0,6,0,6,0,15],[15,0,6,0,6,0,6,0,6,0,6,0,6,0,6,15],[15,6,0,6,0,6,0,6,0,6,0,6,0,6,0,15],[21,0,6,0,6,0,6,0,6,0,6,0,6,0,6,21],[12,13,13,13,13,13,13,36,37,13,13,13,13,13,13,14],[18,19,19,19,19,19,19,42,43,19,19,19,19,19,19,20]],this.differentBossChamber=[[15,13,13,13,13,13,13,48,49,13,13,13,13,13,13,15],[15,19,19,19,19,19,19,54,55,19,19,19,19,19,19,15],[15,0,6,0,6,0,6,0,6,0,6,0,6,0,6,15],[15,0,6,0,6,0,6,0,6,0,6,0,6,0,6,15],[15,0,6,0,6,0,6,0,6,0,6,0,6,0,6,15],[15,0,6,0,6,0,6,0,6,0,6,0,6,0,6,15],[15,0,6,0,6,0,6,0,6,0,6,0,6,0,6,15],[15,8,6,0,6,0,6,0,6,0,6,0,6,0,8,15],[15,8,6,0,6,0,6,0,6,0,6,0,6,0,8,15],[15,0,6,0,6,0,6,0,6,0,6,0,6,0,6,15],[15,0,6,0,6,0,6,0,6,0,6,0,6,0,6,15],[15,0,6,0,6,0,6,0,6,0,6,0,6,0,6,15],[21,0,6,0,6,0,6,0,6,0,6,0,6,0,6,21],[12,13,13,13,13,13,13,36,37,13,13,13,13,13,13,14],[18,19,19,19,19,19,19,42,43,19,19,19,19,19,19,20]],this.moreDifferentBossChamber=[[15,13,13,13,13,13,13,48,49,13,13,13,13,13,13,15],[15,19,19,19,19,19,19,54,55,19,19,19,19,19,19,15],[15,3,0,3,0,3,0,3,0,3,0,3,0,3,0,15],[15,0,3,0,3,0,3,0,3,0,3,0,3,0,3,15],[15,3,0,3,0,3,0,3,0,3,0,3,0,3,0,15],[15,0,3,0,3,0,3,0,3,0,3,0,3,0,3,15],[15,3,0,3,0,3,0,3,0,3,0,3,0,3,0,15],[15,0,3,0,3,0,3,0,3,0,3,0,3,0,3,15],[15,3,0,3,0,3,0,3,0,3,0,3,0,3,0,15],[15,0,3,0,3,0,3,0,3,0,3,0,3,0,3,15],[15,3,0,3,0,3,0,3,0,3,0,3,0,3,0,15],[15,0,3,0,3,0,3,0,3,0,3,0,3,0,3,15],[21,3,0,3,0,3,0,3,0,3,0,3,0,3,0,21],[12,13,13,13,13,13,13,36,37,13,13,13,13,13,13,14],[18,19,19,19,19,19,19,42,43,19,19,19,19,19,19,20]]};function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(6992),n(1539),n(3948);var h=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.canvas=n,this.sounds=new r,this.mcSprite=new Image,this.mcSprite.src="./Assets/tileset/mcMasterSheet.png",this.left_right_attack=new Image,this.left_right_attack.src="./Assets/tileset/right-left-atk.png",this.up_down_attack=new Image,this.up_down_attack.src="./Assets/tileset/up-down-atk.png",this.dx=0,this.dy=0,this.animationCount=0,this.w=16,this.h=17,this.x=120,this.y=191,this.speed=2,this.health=0,this.keyDown=this.keyDown.bind(this),this.keyUp=this.keyUp.bind(this),this.keys=[],this.lastInput="up",this.moving=!1,this.attacking=!1,this.dead=!1,this.hurtBox={w:8,h:16,x:this.x-8,y:this.y}}var e,n;return e=t,(n=[{key:"update",value:function(){this.draw(),this.move(),this.animationFrame(),this.deathCheck()}},{key:"keyDown",value:function(t){t.preventDefault(),this.keys[t.keyCode]=!0,this.moving=!0}},{key:"keyUp",value:function(t){delete this.keys[t.keyCode],this.moving=!1,this.attacking=!1,this.hurtBox.w=0,this.hurtBox.h=0,this.hurtBox.x=0,this.hurtBox.y=0}},{key:"deathCheck",value:function(){this.health>=10&&(!1===this.dead&&this.sounds.deathSound(),this.dead=!0)}},{key:"draw",value:function(){this.attacking&&"down"===this.lastInput?this.ctx.drawImage(this.up_down_attack,23*this.dx,23*this.dy,23,23,this.x,this.y,23,23):this.attacking&&"up"===this.lastInput?this.ctx.drawImage(this.up_down_attack,23*this.dx,23*this.dy,23,23,this.x-8,this.y-8,23,23):this.attacking&&"left"===this.lastInput||this.attacking&&"right"===this.lastInput?this.ctx.drawImage(this.left_right_attack,this.dx*this.w,21*this.dy,this.w,21,this.x,this.y,this.w,21):this.ctx.drawImage(this.mcSprite,this.dx*this.w,this.dy*this.h,this.w,this.h,this.x,this.y,this.w,this.h)}},{key:"move",value:function(){this.keys[87]&&this.y>32&&(this.y-=this.speed,this.lastInput="up",this.dy=0),this.keys[83]&&this.y<208-this.h&&(this.y+=this.speed,this.lastInput="down",this.dy=3),this.keys[68]&&this.x<240-this.w&&(this.x+=this.speed,this.lastInput="right",this.dy=1),this.keys[65]&&this.x>16&&(this.x-=this.speed,this.lastInput="left",this.dy=2),this.keys[32]&&"up"===this.lastInput&&(this.dy=1,this.attacking=!0,this.hurtBox.x=this.x,this.hurtBox.y=this.y-8,this.hurtBox.w=16,this.hurtBox.h=8,this.sounds.attackSound()),this.keys[32]&&"down"===this.lastInput&&(this.dy=0,this.attacking=!0,this.hurtBox.x=this.x,this.hurtBox.y=this.y+this.h+8,this.hurtBox.w=16,this.hurtBox.h=8,this.sounds.attackSound()),this.keys[32]&&"right"===this.lastInput&&(this.dy=0,this.attacking=!0,this.hurtBox.x=this.x+this.w,this.hurtBox.y=this.y,this.hurtBox.w=8,this.hurtBox.h=16,this.sounds.attackSound()),this.keys[32]&&"left"===this.lastInput&&(this.dy=1,this.attacking=!0,this.hurtBox.x=this.x-8,this.hurtBox.y=this.y,this.hurtBox.w=8,this.hurtBox.h=16,this.sounds.attackSound())}},{key:"animationFrame",value:function(){this.moving?this.animationCount<4?this.animationCount++:this.dx<5?(this.dx++,this.animationCount=0):(this.dx=0,this.animationCount=0):this.attacking&&"up"===this.lastInput?(this.dy=1,this.animationCount<1?this.animationCount++:this.dx<5?(this.dx++,this.animationCount=0):(this.dx=0,this.animationCount=0)):this.attacking&&"down"===this.lastInput?(this.dy=0,this.animationCount<1?this.animationCount++:this.dx<5?(this.dx++,this.animationCount=0):(this.dx=0,this.animationCount=0)):this.attacking&&"left"===this.lastInput?(this.dy=1,this.animationCount<1?this.animationCount++:this.dx<5?(this.dx++,this.animationCount=0):(this.dx=0,this.animationCount=0)):this.attacking&&"right"===this.lastInput?(this.dy=0,this.animationCount<1?this.animationCount++:this.dx<5?(this.dx++,this.animationCount=0):(this.dx=0,this.animationCount=0)):"up"===this.lastInput?(this.dy=4,this.animationCount<4?this.animationCount++:this.dx<5?(this.dx++,this.animationCount=0):(this.dx=0,this.animationCount=0)):"right"===this.lastInput?(this.dy=5,this.animationCount<4?this.animationCount++:this.dx<5?(this.dx++,this.animationCount=0):(this.dx=0,this.animationCount=0)):"left"===this.lastInput?(this.dy=6,this.animationCount<4?this.animationCount++:this.dx<5?(this.dx++,this.animationCount=0):(this.dx=0,this.animationCount=0)):"down"===this.lastInput&&(this.dy=7,this.animationCount<4?this.animationCount++:this.dx<5?(this.dx++,this.animationCount=0):(this.dx=0,this.animationCount=0))}}])&&u(e.prototype,n),t}();function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.canvas=n,this.sounds=new r,this.heartContainer=new Image,this.heartContainer.src="Assets/tileset/heart-containers.png",this.currentItems=[],this.win=!1}var e,n;return e=t,(n=[{key:"draw",value:function(t,e,n,i,r,a,o,s,u){this.ctx.drawImage(t,e,n,i,r,a,o,s,u)}},{key:"drawHeartContainer",value:function(t,e){return{img:this.heartContainer,sx:0,sy:0,sw:16,sh:16,x:t,y:e,w:16,h:16}}},{key:"drawCurrentItems",value:function(){var t=this;this.currentItems.forEach((function(e){t.draw(e.img,e.sx,e.sy,e.sw,e.sh,e.x,e.y,e.w,e.h)}))}},{key:"pickUpItem",value:function(t,e){var n=this;this.currentItems.forEach((function(i,r){e.collision(i,t)&&(n.currentItems.splice(r,1),n.sounds.fanfareSound(),n.win=!0)}))}},{key:"update",value:function(t,e,n){this.drawCurrentItems(),this.pickUpItem(t,e)}}])&&c(e.prototype,n),t}();function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var d=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"collision",value:function(t,e){return!(t.x>e.x+e.w||t.x+t.w<e.x||t.y>e.y+e.h||t.y+t.h<e.y)}}])&&f(e.prototype,n),t}();function y(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var p=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.healthBar=new Image,this.healthBar.src="Assets/tileset/heart-containers.png",this.swordButton=new Image,this.swordButton.src="Assets/Other/better-sword.png",this.ctx=e,this.canvas=n}var e,n;return e=t,(n=[{key:"draw",value:function(t,e,n,i,r,a,o,s,u){this.ctx.drawImage(t,e,n,i,r,a,o,s,u)}},{key:"drawHealthBar",value:function(t){this.draw(this.healthBar,0,17*t,85,17,153,7,85,17)}},{key:"drawAttackOptions",value:function(){this.draw(this.swordButton,0,0,18,28,18,0,18,28)}},{key:"update",value:function(t){this.drawHealthBar(t.health),this.drawAttackOptions()}}])&&y(e.prototype,n),t}();function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var m=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=document.getElementById("game-canvas"),this.width=this.canvas.width=256,this.height=this.canvas.height=240,this.ctx=this.canvas.getContext("2d"),this.sounds=new r,this.fps=60,this.roomTiles=new Image,this.roomTiles.src="./Assets/tileset/roomTiles.png",this.maps=new s,this.currentMap=this.maps.bossChamber,this.draw=this.draw.bind(this),this.player=new h(this.ctx,this.canvas),this.dragon=new o(this.ctx,this.canvas),this.items=new l(this.ctx,this.canvas),this.ui=new p(this.ctx,this.canvas),this.util=new d,this.enemies=[this.dragon],this.droppedHeart=!1,this.start=!0,this.onGoingGame=!0,this.win=!1}var e,n;return e=t,(n=[{key:"dropHeartContainer",value:function(){this.droppedHeart||this.enemies.length||(this.items.currentItems.push(this.items.drawHeartContainer(120,112)),this.sounds.revealItemSound(),this.droppedHeart=!0)}},{key:"listeners",value:function(){window.addEventListener("keydown",this.player.keyDown.bind(this)),window.addEventListener("keyup",this.player.keyUp.bind(this))}},{key:"handleEnemies",value:function(){var t=this;this.enemies.length?this.enemies.forEach((function(e,n){e.alive?e.update(t.player,t.util):t.enemies.splice(n,1)})):this.dropHeartContainer()}},{key:"gameOver",value:function(t,e){(this.player.dead||this.win)&&(this.ctx.clearRect(0,0,this.width,this.height),window.cancelAnimationFrame(t),this.onGoingGame=!1,this.sounds.pauseAllSounds())}},{key:"currentWinCondition",value:function(){this.items.win&&(this.win=!0)}},{key:"draw",value:function(){var t=this;this.listeners();var e=setTimeout((function(){t.ctx.clearRect(0,0,t.width,t.height),t.createMap(),t.player.update(),t.items.update(t.player,t.util,t.sounds),t.ui.update(t.player),t.handleEnemies(),t.handleFireballs(),t.currentWinCondition(),t.gameOver(n,e);var n=window.requestAnimationFrame(t.draw)}),1e3/this.fps)}},{key:"handlePlayerAttack",value:function(){}},{key:"handleFireballs",value:function(){var t=this;this.dragon.fireballs.forEach((function(e,n){e.update(),t.util.collision(e,t.player)&&(t.player.health<10&&t.player.health++,t.sounds.playerTakeDmgSound(),t.player.x+Math.floor(4*e.velocityX)<240-t.player.w&&t.player.x+Math.floor(4*e.velocityX)>16&&t.player.y+Math.floor(4*e.velocityY)<208-t.player.h&&t.player.y+Math.floor(4*e.velocityY)>32&&(t.player.x+=Math.floor(4*e.velocityX),t.player.y+=Math.floor(4*e.velocityY)),t.dragon.fireballs.splice(n,1)),(e.x>232||e.x<16)&&t.dragon.fireballs.splice(n,1),(e.y>198||e.y<32)&&t.dragon.fireballs.splice(n,1)}))}},{key:"createMap",value:function(){for(var t=0;t<this.currentMap.length;t++)for(var e=0;e<this.currentMap[t].length;e++)this.ctx.drawImage(this.roomTiles,this.currentMap[t][e]%6*16,16*Math.floor(this.currentMap[t][e]/6),16,16,16*e,16*t,16,16)}}])&&v(e.prototype,n),t}();addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("game-canvas");t.getContext("2d"),t.classList.add("begin");var e=new m,n=document.getElementById("instructions"),i=document.getElementById("instructions-bg");addEventListener("keydown",(function(n){"Enter"===n.code&&e.start?(i.classList.add("hidden"),t.classList.remove("begin"),e.draw(),e.start=!1):"Enter"!==n.code||e.onGoingGame||location.reload()})),setInterval((function(){e.player.dead&&(n.innerText="PRESS ENTER TO TRY AGAIN",i.classList.remove("hidden"),t.classList.add("end")),e.win&&(n.innerText="YOU WON! THANK YOU FOR PLAYING MY GAME! PRESS ENTER IF YOU'DE LIKE TO PLAY AGAIN.",i.classList.remove("hidden"),t.classList.add("win"))}));var r=document.getElementsByClassName("flip-button"),a=document.getElementsByClassName("calling-card"),o=document.getElementsByClassName("calling-card-content");r.forEach((function(t){t.addEventListener("click",(function(t){a[0].classList.toggle("flip-card"),o[0].classList.toggle("flip-card")}))}))}))}()}();
//# sourceMappingURL=main.js.map