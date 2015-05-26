/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isTypedArray = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-typed-array', function tests() {

	it( 'should export a function', function test() {
		expect( isTypedArray ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var values = [
			new Int8Array( 10 ),
			new Uint8Array( 10 ),
			new Uint8ClampedArray( 10 ),
			new Int16Array( 10 ),
			new Uint16Array( 10 ),
			new Int32Array( 10 ),
			new Uint32Array( 10 ),
			new Float32Array( 10 ),
			new Float64Array( 10 )
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( isTypedArray( values[i] ), values[ i ] );
		}
	});

	it( 'should negatively validate', function test() {
		var values = [
			'5',
			5,
			NaN,
			null,
			undefined,
			true,
			[],
			{},
			function(){},
			new Buffer( 10 )
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( isTypedArray( values[ i ] ), values[ i ] );
		}
	});

});
