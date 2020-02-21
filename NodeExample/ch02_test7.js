/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 

var os = require('os');//내장 모듈

console.log('hostname: ' + os.hostname());
console.log('memory : '+ os.freemem());
