parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
var e=0,t=[],n="https://www.reddit.com/",r="r/todayilearned/new.json?limit=",o=50,i=document.querySelector("#container-wrapper"),a=document.querySelector("#spinner-wrapper"),c=document.getElementById("left-arrow"),d=document.getElementById("right-arrow"),l=function(e,t){e.innerHTML='<div class="flex flex-col justify-center items-start"><header class="font-bold text-base sm:text-xl md:text-2xl lg:text-3xl mb-2 md:mb-6">r/todayilearned</header><p id="text-wrapper" class="text-sm sm:text-base md:text-lg">'.concat(t,"</p></div>")},u=function(e){0==e?(c.innerHTML="",d.innerHTML="&rsaquo;"):e==t.length-1?(c.innerHTML="&lsaquo;",d.innerHTML=""):(c.innerHTML="&lsaquo;",d.innerHTML="&rsaquo;")},s=function(){w(++e),u(e)},f=function(){w(--e),u(e)},m=function(e){fetch(n+r+o).then(function(e){return e.json()}).then(function(n){for(var r=0;r<o;r++)t.push(n.data.children[r].data.title);var c=t[e];a.remove(),l(i,c),u(e)}).catch(function(e){console.error(e)})},w=function(e){document.querySelector("#text-wrapper").innerHTML=t[e]};window.addEventListener("load",function(){m(e)}),d.addEventListener("click",function(e){"right-arrow"===e.target.id&&s()}),c.addEventListener("click",function(e){"left-arrow"===e.target.id&&f()}),document.addEventListener("keydown",function(n){"ArrowLeft"==n.key&&e>0?f():"ArrowRight"==n.key&&e<t.length-1&&s()});
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/app.88067998.js.map