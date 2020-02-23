/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 

var Calc = require('./calc3');

var calc1 = new Calc();
console.log('Calc 에 stop 이벤트 전달함.');
calc1.emit('stop');

