'use strict';

// MODULES //

var typeName = require( 'type-name' );


// VARIABLES //

var NAMES = [
	'Int8Array',
	'Uint8Array',
	'Uint8ClampedArray',
	'Int16Array',
	'Uint16Array',
	'Int32Array',
	'Uint32Array',
	'Float32Array',
	'Float64Array'
];


// IS TYPED ARRAY //

/**
* FUNCTION: isTypedArray( value )
*	Validates if a value is a typed array.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is a typed array
*/
function isTypedArray( v ) {
	var i;
	v = typeName( v );
	for ( i = 0; i < NAMES.length; i++ ) {
		if ( NAMES[ i ] === v ) {
			return true;
		}
	}
	return false;
} // end FUNCTION isTypedArray()


// EXPORTS //

module.exports = isTypedArray;
