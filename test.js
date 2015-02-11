'use strict';

var arrayCollection = require('./spikes/src/collections/arrayCollection');

console.log('start');


var countValue = 100000;

var count = function (countValue) {
    var i = 0;
    while(i < countValue){
        i++;
    }
};


function getTimeToRun(testFn) {
    var time;
    time = process.hrtime();
    testFn();
    time = process.hrtime(time);
    return time;
}

function getTimeToRunDoneCall(testFn, whenDone) {
  var time = process.hrtime();
  function done() {
    whenDone(process.hrtime(time));
  }
  testFn(done);
}

function logTheTime(name, time) {
    console.log(name + ': ' + time[0] + 'seconds, ' + time[1] + ' ns');
}

var countTime, arrayBuildTime, iteratorBuildTime, forEachIterateTime, iterated;

var collection, buildArray;

iterated = 0;

countTime = getTimeToRun(function(){ count(countValue); });
logTheTime('count', countTime);

arrayBuildTime = getTimeToRun(function(){
    buildArray = [];
    for(var i = 0; i < countValue; i += 1) {
        buildArray.push('foo' + i);
    }
});
logTheTime('arrayBuild', arrayBuildTime);

iteratorBuildTime = getTimeToRun(function(){ collection = arrayCollection.build(buildArray); });
logTheTime('iteratorBuild', iteratorBuildTime);


forEachIterateTime = getTimeToRun(function(){
    var otherVar;
    buildArray.forEach(function(item){
        otherVar = item;
    });
});
logTheTime('forEach', forEachIterateTime);


getTimeToRunDoneCall(function(done){
  var otherVar;
  function iterateAll(collectionItem) {
    collectionItem.value().then(function(value) {
      if(value) {
        otherVar = value;
        iterateAll(collectionItem.next());
      } else {
        done();
        console.log(otherVar);
      }
    });
  }
  iterateAll(collection.iterator);

}, function(time){
  logTheTime('iterate', time);
});