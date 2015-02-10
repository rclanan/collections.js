'use strict';

var iterator = require('./iterator.js');

var iter = iterator.build(['foo','bar','other','stuff','things']);

do{
	console.log(iter.value);
	iter = iter.next;
} while(iter.value);