'use strict';

var integerIndexor = require('../indexors/integerIndexor');
var genericIterator = require('../iterator');

// all collections must have:
// an indexor
// getMap()

function buildArrayCollection(array){
  // this is minimum requirement to be a collection.
  var collection = {
    getMap: function(){ return array; },
    indexor: integerIndexor.build()
  };

  collection.iterator = genericIterator.build(collection);

  return collection;
}

module.exports = {
  build: buildArrayCollection
};
