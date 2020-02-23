/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var fs = require('fs');
fs.open('./output.txt','r',function(err,fd){
	if(err){
		console.log('에러발생');
		console.dir(err);
		return;
	}
	console.log('파일 오픈 완료');
	var buf = new Buffer(10);
	fs.read(fd,buf,0,buf.length,null,function(err,bytesread,buffer){
		if(err){
			console.log('에러발생');
			console.dir(err);
			return;
		}
		console.log(buffer.toString('utf8',0,bytesread));
		fs.close(fd,function(){
			console.log('파일 클로즈');
		})
	})

});

