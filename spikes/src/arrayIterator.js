
function buildIncrementedIterator(options, incrementValue) {
    'use strict';
	return baseBuild({
		first: options.first,
		array: options.array,
		valueFunction: options.valueFunction,
		index: options.index + incrementValue
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
		valueFunction = function(value) { return options.getValueFunction(value);}
	}

    var itemBase = {
        first: function() { return options.first || item; }
    };

	item = baseBuild({
        first: function() { return options.first || item; },
        index: options.index,
        array: options.array,
        valueFunction: valueFunction
    });

    return item;
}


function baseBuild(options) {
    var item;
    function setLocation(location){
        options.index = location;
        return item;
    }

    function value() {
        return options.valueFunction(options.array[options.index]);
    }
    item = {
        next: function(){ return setLocation(options.index + 1); },
        value: value,
        first: function(){ return setLocation(0);}
    };
    return item;
}

module.exports = {
	build: build
};
