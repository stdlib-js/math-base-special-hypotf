<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# hypotf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [hypotenuse][hypotenuse] avoiding overflow and underflow (single-precision).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import hypotf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-hypotf@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-hypotf/tags). For example,

```javascript
import hypotf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-hypotf@v0.1.0-esm/index.mjs';
```

#### hypotf( x, y )

Computes the [hypotenuse][hypotenuse] avoiding overflow and underflow (single-precision).

```javascript
var h = hypotf( -5.0, 12.0 );
// returns 13.0

h = hypotf( -0.0, -0.0 );
// returns +0.0
```

If either argument is `NaN`, the function returns `NaN`.

```javascript
var h = hypotf( NaN, 12.0 );
// returns NaN

h = hypotf( 5.0, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import hypotf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-hypotf@esm/index.mjs';

var x;
var y;
var h;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu()*100.0 ) - 50.0;
    y = round( randu()*100.0 ) - 50.0;
    h = hypotf( x, y );
    console.log( 'h(%d,%d) = %d', x, y, h );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/hypot`][@stdlib/math/base/special/hypot]</span><span class="delimiter">: </span><span class="description">compute the hypotenuse avoiding overflow and underflow.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-hypotf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-hypotf

[test-image]: https://github.com/stdlib-js/math-base-special-hypotf/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/math-base-special-hypotf/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-hypotf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-hypotf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-hypotf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-hypotf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-hypotf/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-hypotf/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-hypotf/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-hypotf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-hypotf/main/LICENSE

[hypotenuse]: https://en.wikipedia.org/wiki/Pythagorean_theorem

<!-- <related-links> -->

[@stdlib/math/base/special/hypot]: https://github.com/stdlib-js/math-base-special-hypot/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
