/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var calc2 =require('./calc2');
 
console.log('모듈로 분리한 후 - calc2.add: '+calc2.add(30,30)); 

var nconf = require('nconf');//제공 모듈의 경우 상대경로 아닌 이름만
nconf.env();
var value = nconf.get('OS');
console.log('OS 환경변수의 값: '+value);
