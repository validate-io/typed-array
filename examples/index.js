'use strict';

var isTypedArray = require( './../lib' );

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
