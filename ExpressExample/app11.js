/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 

var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser'); //쿠키 처리가능

var app = express();

app.set('port',process.env.PORT||3000);
app.use('/public',static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

var router = express.Router();



router.route('/process/setUserCookie').get(function(req,res){
	console.log('/process/setUserCookie 라우팅 함수 호출됨');
	res.cookie('user', {
		id:'mike',
		name:'소녀시대',
		authorized:true
	}); //웹브라우저에 이걸 저장해주세요 브라우저에 쿠키저장됨 
	res.redirect('/process/showcookie');//다른 패스로 옮겨줌
	
});
router.route('/process/showcookie').get(function(req, res){
	console.log('/process/showcookie 라우팅 함수 호출됨');
	res.send(req.cookies);
	
});
router.route('/process/login').post(function(req,res){
	console.log('/process/login 라우팅 함수에서 받음.');


	var paramId = req.body.id || req.query.id;
	var paramPassword = req.body.password || req.query.password;
	
	res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
	res.write("<h1>서버에서 로그인 응답</h1>");
	res.write("<div><p>"+paramId+"</p><div>");
	res.write("<div><p>"+paramPassword+"</p><div>");	
	res.end();
});



app.use('/',router);

app.all('*',function(req,res){ 

res.status(404).send('<h1>요청하신 페이지는 없어요.</h1>');
		});
//all-모든 요청에 대해 처리하겠다

var server = http.createServer(app).listen(app.get('port'), function(){
	console.log('익스프레스로 웹 서버를 실행함: '+app.get('port'));
});

