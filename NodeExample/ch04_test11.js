/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var fs = require('fs');

var infile = fs.createReadStream('./output.txt',{flag:'r'});
infile.on('data',function(data){
	console.log('읽어드린 데이터:'+data);
});
infile.on('end',function(){
	console.log('읽기종료');
});