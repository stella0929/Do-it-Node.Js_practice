/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 

var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

//에러 헨들러 모듈 사용
var expressErrorHandler = require('express-error-handler');


var mysql = require('mysql');

//데이타베이스 연결 sql문실행가능
var pool=mysql.createPool({
	connectionLimit:10
	,host:'localhost'
	,user:'root'
	,password:'sm060788'
	,database:'test'
	,debug:false
});



var app = express();
const fs = require('fs');
app.set('port', process.env.PORT || 3000);
app.use('/public',static(path.join(__dirname,'/public')));
app.use('/',static(path.join(__dirname,'/public/login.html')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
	secret: 'my key',
	resave: true, 
	saveuninstalized: true
}));


app.get('/',function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'}); // header 설정
      fs.readFile(__dirname+ '/public/adduser.html', function(err, data){ // 파일 읽는 메소드
        if (err) {
          return console.error(err); // 에러 발생시 에러 기록하고 종료
        }
        res.end(data, 'utf-8'); // 브라우저로 전송
      });
});



var router = express.Router();

router.route('/process/adduser').post(function(req,res){
	console.log('/process/adduser 라우팅 함수 호출됨');
	var parmId = req.body.id || req.query.id;
	var paramPassword = req.body.password || req.query.password;
	var paramName = req.body.name || req.query.name;
	var paramAge = req.body.age || req.query.age;
	
	console.log('요청 파라미터 :'+parmId+', '+paramPassword+', '+paramName+', '+paramAge);


	addUser(parmId,paramPassword, paramName,Number(paramAge),function(err, addedUser){
		if(err){
			console.log('에러 발생');
			    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
				res.write('<h1>에러 발생</h1>');
				res.end();
				return;
		}
		
		if(addedUser){
			console.dir(addedUser);
			 res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
				res.write('<h1>사용자 추가 성공</h1>');
				res.end();
		}else{
			console.log('에러 발생');
			    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
				res.write('<h1>사용자 추가 실패</h1>');
				res.end();
		
			
		}
		
	});
});
router.route('/process/login').post(function(req,res){
	console.log('/process/login 라우팅 함수 호출됨');
	
	var paramId = req.body.id ||req.query.id;
	var paramPassword = req.body.password ||req.query.password;
	console.log('요청 파라미터 :'+paramId+','+paramPassword);
	if(pool){
		authUser( paramId, paramPassword, function(err, rows){
			if(err){
				console.log('에러 발생');
			    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
				res.write('<h1>에러 발생</h1>');
				res.end();
				return;
			}
			if (rows){
				console.dir(rows);
					    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
				res.write('<h1>사용자 로그인 성공</h1>');
				res.write('<div><p>사용자: '+rows[0].name+'</p></div>');
				res.write('<br><br><a href="/public/login.html>다시 로그인하기</a>');
				
				res.end();
			
			}
			else{
				console.log('에러 발생');
			    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
				res.write('<h1>사용자 데이터 조회 안됨.</h1>');
				res.end();
		
			}
		});
	}
	else{
	console.log('에러 발생');
		res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
		res.write('<h1>데이터베이스 연결 안됨.</h1>');
		res.end();
			
	}
})

app.use('/',router);

var addUser = function(id,password,name,age, callback){
	console.log('addUser 호출됨');
	//풀에서 하나 연결을 달라 명령
	pool.getConnection(function(err,conn){
		if(err){
			console.dir(err);
			if(conn){
				conn.release();
			}
			callback(err,null);
			return;
		}
		console.log('데이터베이스 연결의 스레드 아이디:'+conn.threadId);
		var data = {id:id, name:name, age:age, password:password};
		
		var exec = conn.query('insert into users set ?',data,function(err, result){
			conn.release();
			console.log('실행된 SQL :'+exec.sql);
			if(err){
				console.log('SQL 실행시 에러발생');
				console.dir(err);
				callback(err,null);
				return;
			}
			callback(null,result);
		});
	});
}
var authUser = function(id, password, callback){
	console.log('authUser 호출됨'+id+','+password);
	
	pool.getConnection(function(err,conn){
		if(err){
			if(conn){
				conn.release();
			}
			callback(err, null);
			return;
		}
		console.log('데이터베이스 연결 스레드 아이디: '+conn.threadId);
		var tablename = 'users';
		var columns = ['id','name','age']
		var exec = conn.query("select ?? from ?? where id = ? and password = ?",[columns, tablename, id, password], function(err, rows){
			conn.release();
			console.log('실행된 SQL: '+exec.sql);
			if(err){
				console.log('SQL 실행시 에러발생');
				console.dir(err);
				callback(err,null);
				return;
			}
			if(rows.length>0){
				console.log('사용자 찾음');
				callback(null,rows);
			}else{
				console.log('사용자 찾지 못함');
				callback(null,null);
			}
		});
		
	});

};




var errorHandler = expressErrorHandler({
	static: {
		'404': './public/404.html'
	}
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

http.createServer(app).listen(app.get('port'),function(){
	console.log('익스프레스로 웹 서버를 실행함: '+app.get('port'));
	
});