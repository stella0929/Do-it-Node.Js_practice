/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var http =require('http');
var fs = require('fs');

var server = http.createServer();

//var host = '192.168.200.169';
var port = 3000;
server.listen(port,function(){
	console.log('웹서버 실행됨. ');
});

server.on('connection',function(socket){
 console.log('클라이언트가 접속했습니다.');
});//server 객체 eventEmitter상속.
//socket을 이용하여 클라이언트 정보 확인 가능. 


server.on('request',function(req/*요청객체*/, res/*응답객체*/){
	console.log('클라이언트 요청이 들어왔습니다. ');
	//console.dir(req);
	var filename = 'house.png';

	fs.readFile(filename,function(err, data){
		res.writeHead(200/*정상*/, {"Content-type"/*표준 헤더*/:"image/png"});//header정보 전송
res.write(data);//제목
res.end();//전송
		
	});
	

});

