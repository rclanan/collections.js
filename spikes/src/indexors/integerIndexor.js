'use strict';

// simple indexor that uses integers

function Index(indexNumber){
  this.value = indexNumber;
}

Index.prototype.increment = function(){
  return new Index(this.value + 1);
};

function buildIndexor(){
  // indexor needs "getFirst"
  return {
    first: new Index(0)
  };
}

module.exports = {
  build: buildIndexor
};
