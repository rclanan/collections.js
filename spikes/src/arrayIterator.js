function buildIncrementedIterator(options, incrementValue) {
	'use strict';

	return build({
		first: options.first,
		array: options.array,
		getValueFunction: options.getValueFunction,
		index: options.index + incrementValue
	});
}

function buildProperties(options) {
	'use strict';

	var buildOptions = options.buildOptions;

	Object.defineProperty(options.item, 'first', {
        get: function() {return buildOptions.first;}
    });

	Object.defineProperty(options.item, 'next', {
		get: function(){ return buildIncrementedIterator(buildOptions, 1); }
	});

	Object.defineProperty(options.item, 'hasNext', {
		get: function(){ return buildOptions.index >= buildOptions.array.length; }
	});

	Object.defineProperty(options.item, 'value', {
		get: options.valueFunction
	});
}

function build(options) {
	'use strict';

	var item, valueFunction;

	item = {};

	options.index = options.index === undefined ? 0 : options.index;
    options.value = options.array[options.index];

	if(options.index >= options.array.length) {
		valueFunction = function() { return undefined; };
	} else {
		valueFunction = function() { return options.getValueFunction(options.value); };
	}

	if(options.index === 0) {
		options.first = item;
	}

	buildProperties({
		buildOptions: options,
		item: item,
		valueFunction: valueFunction
	});

	return item;
}

module.exports = {
	build: build
};
