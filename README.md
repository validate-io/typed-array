isTypedArray
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays).


## Installation

``` bash
$ npm install validate.io-typed-array
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isTypedArray = require( 'validate.io-typed-array' );
```

#### isTypedArray( value )

Validates if a value is a [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays).

``` javascript
var bool = isTypedArray( new Int8Array( 10 ) );
// returns true
```


## Examples

``` javascript
var isTypedArray = require( 'validate.io-typed-array' );

var arr = new Int8Array( 10 );
console.log( isTypedArray( arr ) );
// returns true

arr = new Uint8Array( 10 );
console.log( isTypedArray( arr ) );
// returns true

arr = new Uint8ClampedArray( 10 );
console.log( isTypedArray( arr ) );
// returns true

arr = new Int16Array( 10 );
console.log( isTypedArray( arr ) );
// returns true

arr = new Uint16Array( 10 );
console.log( isTypedArray( arr ) );
// returns true

arr = new Int32Array( 10 );
console.log( isTypedArray( arr ) );
// returns true

arr = new Uint32Array( 10 );
console.log( isTypedArray( arr ) );
// returns true

arr = new Float32Array( 10 );
console.log( isTypedArray( arr ) );
// returns true

arr = new Float64Array( 10 );
console.log( isTypedArray( arr ) );
// returns true

console.log( isTypedArray( [] ) );
// returns false

console.log( isTypedArray( {} ) );
// returns false

console.log( isTypedArray( null ) );
// returns false

console.log( isTypedArray( new Buffer( 10 ) ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-typed-array.svg
[npm-url]: https://npmjs.org/package/validate.io-typed-array

[travis-image]: http://img.shields.io/travis/validate-io/typed-array/master.svg
[travis-url]: https://travis-ci.org/validate-io/typed-array

[coveralls-image]: https://img.shields.io/coveralls/validate-io/typed-array/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/typed-array?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/typed-array.svg
[dependencies-url]: https://david-dm.org/validate-io/typed-array

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/typed-array.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/typed-array

[github-issues-image]: http://img.shields.io/github/issues/validate-io/typed-array.svg
[github-issues-url]: https://github.com/validate-io/typed-array/issues
