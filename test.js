'use strict';

var iterator = require('./spikes/src/iterator.js');





console.log('start');


var time;
var countValue = 10000000;

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

function logTheTime(name, time) {
    console.log(name + ': ' + time[0] + 'seconds, ' + time[1] + ' ms');
}

function timeThis(iter) {
    var otherValue;

    do{
        otherValue = iter.next;
    } while(iter.value);
}

var countTime, arrayBuildTime, iteratorBuildTime, iterateTime, forEachIterateTime, iterated;

var iter, buildArray;

iterated = 0;

countTime = getTimeToRun(function(){ count(countValue) });
logTheTime('count', countTime);

arrayBuildTime = getTimeToRun(function(){
    buildArray = [];
    for(var i = 0; i < countValue; i += 1) {
        buildArray.push('foo' + i);
    }
});
logTheTime('arrayBuild', arrayBuildTime);

iteratorBuildTime = getTimeToRun(function(){ iter = iterator.build(buildArray); });
logTheTime('iteratorBuild', iteratorBuildTime);


forEachIterateTime = getTimeToRun(function(){
    var otherVar;
    buildArray.forEach(function(item){
        otherVar = item;
    });
});
logTheTime('forEach', forEachIterateTime);

iterateTime = getTimeToRun(function(){
    var other;
    do{
        other = iter.value();
        iter = iter.next();
    } while(iter.value() !== undefined)
    iterated = other;
});
logTheTime('iterate', iterateTime);
console.log(iterated);



