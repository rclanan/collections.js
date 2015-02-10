function hasFunction(functionName, parentObject) {
	'use strict';

	return typeof parentObject[functionName] === 'function';
}

function hasFunctions(parentObject, names) {
	'use strict';

	return names.reduce(function(containsFunctions, currentFunctionName){
		return containsFunctions && hasFunction(currentFunctionName);
	});
}

module.exports = {
	hasFunction: hasFunction,
	hasFunctions: hasFunctions
};
