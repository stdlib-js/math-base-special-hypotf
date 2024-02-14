// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Math.fround?Math.fround:null,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,f="function"==typeof Symbol?Symbol:void 0,a="function"==typeof f?f.toStringTag:"";t=r&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,f,i,y;if(null==t)return o.call(t);r=t[a],y=a,n=null!=(i=t)&&e.call(i,y);try{t[a]=void 0}catch(n){return o.call(t)}return f=o.call(t),n?t[a]=r:delete t[a],f}:function(t){return o.call(t)};var i=t,y="function"==typeof Float32Array,u=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null,l="function"==typeof Float32Array?Float32Array:void 0,p=new(function(){var t,n,r;if("function"!=typeof c)return!1;try{n=new c([1,3.14,-3.14,5e40]),r=n,t=(y&&r instanceof Float32Array||"[object Float32Array]"===i(r))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===u}catch(n){t=!1}return t}()?l:function(){throw new Error("not implemented")})(1),A="function"==typeof n?n:function(t){return p[0]=t,p[0]};function d(t){return t!=t}var F="function"==typeof Float32Array,m="function"==typeof Float32Array?Float32Array:null,v="function"==typeof Float32Array?Float32Array:void 0,w=function(){var t,n,r;if("function"!=typeof m)return!1;try{n=new m([1,3.14,-3.14,5e40]),r=n,t=(F&&r instanceof Float32Array||"[object Float32Array]"===i(r))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===u}catch(n){t=!1}return t}()?v:function(){throw new Error("not implemented")},b="function"==typeof Uint32Array,h="function"==typeof Uint32Array?Uint32Array:null,s="function"==typeof Uint32Array?Uint32Array:void 0,U=function(){var t,n,r;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(b&&r instanceof Uint32Array||"[object Uint32Array]"===i(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?s:function(){throw new Error("not implemented")},S=new w(1);new U(S.buffer)[0]=2139095040;var j=S[0],g="function"==typeof Float32Array,E="function"==typeof Float32Array?Float32Array:null,T="function"==typeof Float32Array?Float32Array:void 0,I=function(){var t,n,r;if("function"!=typeof E)return!1;try{n=new E([1,3.14,-3.14,5e40]),r=n,t=(g&&r instanceof Float32Array||"[object Float32Array]"===i(r))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===u}catch(n){t=!1}return t}()?T:function(){throw new Error("not implemented")},N="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,M="function"==typeof Uint32Array?Uint32Array:void 0,x=function(){var t,n,r;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(N&&r instanceof Uint32Array||"[object Uint32Array]"===i(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?M:function(){throw new Error("not implemented")},P=new I(1);new x(P.buffer)[0]=4286578688;var q=P[0];function V(t){return t===j||t===q}var Y=Math.sqrt;return function(t,n){var r;return d(t)||d(n)?NaN:V(t)||V(n)?j:((t=A(t))<0&&(t=-t),(n=A(n))<0&&(n=-n),t<n&&(r=n,n=t,t=r),0===t?0:(n=A(n/t),A(t*A(Y(A(1+A(n*n)))))))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).hypotf=n();
//# sourceMappingURL=index.js.map
