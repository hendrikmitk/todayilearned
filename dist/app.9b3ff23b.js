parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
var e=document.querySelector("#container-wrapper"),t=document.querySelector("#spinner-wrapper"),n=function(e,t){e.innerHTML='<div class="h-full flex flex-col justify-center items-start px-14"><header class="font-bold text-4xl pb-4">r/todayilearned</header><p class="text-xl pt-4">'.concat(t.data.children[0].data.title,"</p></div>")};function r(){fetch("https://www.reddit.com/r/todayilearned/new.json").then(function(e){return e.json()}).then(function(r){t.remove(),n(e,r)}).catch(function(e){console.error(e)})}window.addEventListener("load",r);
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/app.9b3ff23b.js.map