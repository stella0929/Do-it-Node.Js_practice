/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var express = require('express');
var http = require('http');

var app = express();

app.set('port',process.env.PORT || 3000);

app.use(function(req, res, next){
	console.log('첫번째 미들웨어 호출됨');
	

	var userAgent = req.header('User-Agent');
	//모바일 단말에서 보냈는지 pc에서 보냈는지등 알 수 있음.
	var paramName = req.query.name; //요청파라미터 name값
	
	res.send('<h3>서버에서 응답. User-Agent-> ' +userAgent+'</h3><h3>Param Name->'+paramName+'</h3>');
	
	//query :요청파라미터 정보 들어있는 객체
	// 그러나 클라이언트에서 Get 방식으로만 전송한 요청 파라미터 확인(주소표시줄에 요청하는 방식이 get방식)
	//header(name): 헤더 정보확인가능
	
});

var server = http.createServer( app).listen(app.get('port'), function(){
	console.log('익스프레스로 웹 서버를 실행함 : '+app.get('port'));
});