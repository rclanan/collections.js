'use strict';

// we should use promises and general ES 6 stuff.


// Lists, Arrays: order, value
// Linked list: Previous, value, next
// Sets: Only have value
// Dictionaries/Maps have Key/Value
// tree nodes have Value, children, maybe parent

//[value,value,...]

// to convert: define what I need for automapping
//as: two things, symbol/name, map function which needs to be flexable- example: convert tree to array, one node may be multiple items?

//all iterators must have first, next, hasNext(??), reset(), as() - maybe collections use the iterator, and the 'getValue' function is how you map?

var typeCheck, arrayIterator;

typeCheck = require("./typeCheck.js");
arrayIterator = require("./arrayIterator.js");

function hasRequirements(value) {
	'use strict';
	
	return typeCheck.hasFunctions(value, ['first','next', 'reset', 'as', 'getValue'] );
}

function build(value, getValueFunction) {
	// force it to only expose this. we can find a way to better define this though.

	if(Array.isArray(value)) {
		getValueFunction = getValueFunction ? getValueFunction : function(given) { return given; };
		return arrayIterator.build({
			array: value,
			getValueFunction: getValueFunction
		});
	} else if(hasRequirements(value)) {
		return value;
	} else {
		throw new Error('value cannot be iterated');
	}

}

module.exports = {
	build: build
};
