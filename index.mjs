// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinitef@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pinf@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.0-esm/index.mjs";function m(m,r){var d;return t(m)||t(r)?NaN:e(m)||e(r)?i:((m=s(m))<0&&(m=-m),(r=s(r))<0&&(r=-r),m<r&&(d=r,r=m,m=d),0===m?0:(r=s(r/m),s(m*s(n(s(1+s(r*r)))))))}export{m as default};
//# sourceMappingURL=index.mjs.map
