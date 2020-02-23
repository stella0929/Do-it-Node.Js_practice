/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var fs = require('fs');//file system

var data = fs.readFileSync('./package.json','utf8');
//파일을 다 읽을때까지 대기함
console.log(data);
