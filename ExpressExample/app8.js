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

app.set('port',process.env.PORT||3000);
app.use('/public',static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


express.Router();




app.use(function(req,res,next){
	console.log('첫번째 미들웨어 호출됨. ');
	var userAgent = req.header('User-Agent');
	var parmId = req.body.id || req.query.id;
	
	res.send('<h3>서버에서 응답. User-Agent ->'+userAgent+'<h3>Param Id -> '+ paramId + '</h3>');
});

var server = http.createServer(app).listen(app.get('port'), function(){
	console.log('익스프레스로 웹 서버를 실행함: '+app.get('port'));
});

