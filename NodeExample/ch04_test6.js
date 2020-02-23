/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var fs = require('fs');

fs.readFile('./package.json', 'utf8',function(err, data){
	console.log(data);
});//비동기 방식, 콜백함수, return 값 없음. 
//파일을 읽을때까지 대기 하지 않음. 그냥 읽고 난후 함수 실행함
//대부분 비동기 방식처리

