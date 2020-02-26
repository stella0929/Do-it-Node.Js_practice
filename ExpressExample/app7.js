/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');


var bodyParser = require('body-parser');


var app = express();

app.set('port',process.env.PORT || 3000);
//static은 특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 열어주는 역할을 한다. ex)http://localhost:3000/images/house.png
app.use('/public',static(path.join(__dirname,'public')));
//현재 디렉토리에 public붙여서 주소 만듬
//http://localhost:3000/public/images/house.png
//public폴더를 주소로 접근 가능하게 해줌. 

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//get방식이 아닌 post방식일 경우
//데이타 주고받을 때 헤더가 아니라 바디 영역 안(post방식)



app.use(function(req, res, next){
	console.log('첫번째 미들웨어 호출됨');
	

	var userAgent = req.header('User-Agent');
	var paramId = req.body.id || req.query.id; //요청파라미터 name값
	
	res.send('<h3>서버에서 응답. User-Agent-> ' +userAgent+'</h3><h3>Param Name->'+paramId+'</h3>');
	
	//query :요청파라미터 정보 들어있는 객체
	// 그러나 클라이언트에서 Get 방식으로만 전송한 요청 파라미터 확인(주소표시줄에 요청하는 방식이 get방식)
	//header(name): 헤더 정보확인가능
	
});

var server = http.createServer( app).listen(app.get('port'), function(){
	console.log('익스프레스로 웹 서버를 실행함 : '+app.get('port'));
});