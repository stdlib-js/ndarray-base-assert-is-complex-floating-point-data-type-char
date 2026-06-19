/** @license Apache-2.0 */

'use strict';

/**
* Test whether an input value is a supported ndarray complex-valued floating-point data type single letter character abbreviation.
*
* @module @stdlib/ndarray-base-assert-is-complex-floating-point-data-type-char
*
* @example
* var isComplexFloatingPointDataTypeChar = require( '@stdlib/ndarray-base-assert-is-complex-floating-point-data-type-char' );
*
* var bool = isComplexFloatingPointDataTypeChar( 'r' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'c' );
* // returns true
*
* bool = isComplexFloatingPointDataTypeChar( 'z' );
* // returns true
*
* bool = isComplexFloatingPointDataTypeChar( 'f' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'd' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'o' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'k' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'i' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 's' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 't' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'u' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'b' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'a' );
* // returns false
*
* bool = isComplexFloatingPointDataTypeChar( 'foo' );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
