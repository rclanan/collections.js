'use strict';

function hasFunction(functionName, parentObject) {
	return typeof parentObject[functionName] === 'function';
}

function hasFunctions(parentObject, names) {
	return names.reduce(function(containsFunctions, currentFunctionName){
		return containsFunctions && hasFunction(currentFunctionName);
	});
}

module.exports = {
	hasFunction: hasFunction,
	hasFunctions: hasFunctions
}