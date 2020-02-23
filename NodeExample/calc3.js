/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var EventEmitter = require('events').EventEmitter;
var util = require('util');//프로토타입객체 쉽게 상속하도록 만들어줌

var Calc = function(){
	this.on('stop',function(){
		console.log('Calc에 stop 이벤트 전달됨.');
	});
};

util.inherits(Calc,EventEmitter);

Calc.prototype.add = function(a,b){
	return a+b;
};

module.exports = Calc;