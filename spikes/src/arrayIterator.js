

function buildPrototype(options) {
  'use strict';
  var first;

  function Iterator(index) {
    this.index = index;
  }

  Iterator.prototype.next = function() { return new Iterator(this.index+1);};
  Iterator.prototype.first = function(){ return this.first; };

  if(typeof options.valueFunction === 'function') {
    Iterator.prototype.value = function() { return options.valueFunction(this.backingArray[this.index]); };
  } else {
    Iterator.prototype.value = function() { return this.backingArray[this.index]; };
  }

  Iterator.prototype.backingArray = options.array;

  first = new Iterator(0);
  Iterator.prototype.first = first;
  return first;
}


function build(options) {
	'use strict';

	var item, valueFunction;



	if(options.index >= options.array.length) {
		valueFunction = function() { return undefined; };
	} else {
		valueFunction = options.valueFunction;
	}

  item = buildPrototype({
    array: options.array,
    valueFunction: valueFunction
  });

  return item;
}


module.exports = {
	build: build
};
