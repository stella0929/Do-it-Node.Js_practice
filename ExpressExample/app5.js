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
	

	res.redirect('http://google.co.kr');
	//구글 페이지 이동, 자동 이동 기능
	
});

var server = http.createServer( app).listen(app.get('port'), function(){
	console.log('익스프레스로 웹 서버를 실행함 : '+app.get('port'));
});