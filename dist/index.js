"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(N,f){
var i=require('@stdlib/number-float64-base-to-float32/dist'),u=require('@stdlib/math-base-assert-is-nanf/dist'),a=require('@stdlib/math-base-assert-is-infinitef/dist'),o=require('@stdlib/constants-float32-pinf/dist'),q=require('@stdlib/math-base-special-sqrt/dist');function v(e,r){var t;return u(e)||u(r)?NaN:a(e)||a(r)?o:(e=i(e),r=i(r),e<0&&(e=-e),r<0&&(r=-r),e<r&&(t=r,r=e,e=t),e===0?0:(r=i(r/e),i(e*i(q(i(1+i(r*r)))))))}f.exports=v
});var p=n();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
