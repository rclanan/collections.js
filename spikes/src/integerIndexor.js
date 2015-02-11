'use strict';
// this may need to get modified.
// simple indexor that uses integers. This is expensive though, what's a cheaper way?
function Index(indexNumber){
  this.value = indexNumber;
}

Index.prototype.increment = function(value){
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
