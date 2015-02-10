'use strict';

var profiler,iterator,iter, iteratorBuildProfile, iteratorLoopProfile;

profiler = require('cpu-profiler');
iterator = require('./iterator.js');

profiler.startProfiling("iteratorBuild", true);

iter = iterator.build(['foo','bar','other','stuff','things']);

iteratorBuildProfile = profiler.stopProfiling("iteratorBuild");

profiler.startProfiling("iteratorLoop", true);
do{
	console.log(iter.value);
	iter = iter.next;
} while(iter.value);
iteratorLoopProfile = profiler.stopProfiling("iteratorLoop");

console.log(iteratorBuildProfile);
console.log(iteratorLoopProfile);
