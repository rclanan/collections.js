'use strict';

var Promise = require('promise');

function buildGetValueFromObject(map) {
  return function(){
    var index = this.index.value;
    return new Promise(function(fufill){
      fufill(map[index]);
    });
  };
}

function buildGetValueFromFunction(getValue) {
  return function(){
    var index = this.index.value;
    return new Promise(function(fufill, reject){
      getValue(index, function(value, err){
        if(err) {
          reject(err);
        } else {
          fufill(value);
        }
      });
    });
  };
}

function buildPrototype(collection) {
  var first, collectionMap;

  collectionMap = collection.getMap();



  function Iterator(index) {
    this.index = index;

  }

  //Iterator.prototype.collectionMap = collectionMap;
  // this does block. not good for node. come up with a better way? defer execution of all things until it needs to be done.
  // We should define a path of execution, but not the execution itself.
  Iterator.prototype.next = function() { return new Iterator(this.index.increment()); }

  Iterator.prototype.first = function(){ return this.first; };

    if(typeof collectionMap === 'function') {
        Iterator.prototype.value = buildGetValueFromFunction(collectionMap);
    } else {
        Iterator.prototype.value = buildGetValueFromObject(collectionMap);
    }

  first = new Iterator(collection.indexor.first);
  Iterator.prototype.first = first;
  return first;
}

module.exports = {
  build: buildPrototype
};
