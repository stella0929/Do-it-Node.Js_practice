/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var http = require('http');

var server = http.createServer();
//클라이언트 요청을 대기하고 있다가 요청 받아서 필요한 응답

var host = 'localhost';

var port = 3000;
server.listen(port, function(){
	//웹서버 정상적으로 실행되었을때 호출
	console.log('웹서버가 실행되었습니다.'+port);
});// 서버를 실행하여 대기시킵니다. 


