/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var calc = require('./calc');
console.log('모듈로 분리한 후 - calc.add: '+calc.add(20,20));
