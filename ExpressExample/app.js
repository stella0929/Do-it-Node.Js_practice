/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ //console 입력 오류 해결
var express = require('express');
var http = require('http');

var app = express();//express 서버 객체

app.set('port',process.env.PORT || 3000);//port 속성설정

var server = http.createServer(app).listen(app.get('port'),function(){
	console.log('익스프레스로 웹서버를 실행함 : '+ app.get('port'));
}); //express이용해 웹서버 만듬. 
//express를 이용하면 더 많은 기능 사용가능. 
