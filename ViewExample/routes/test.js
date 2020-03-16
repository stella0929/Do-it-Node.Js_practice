/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 

var test1 = function(req, res){
	console.log('test 모듈 안에 있는 test1 호출됨.');
	var context = {};
	req.app.render('test1_success',context,function(err,html){
		if(err){console.dir(err)}
		console.log('Html ->'+html);
		res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
		res.end(html);
	});
	

};


module.exports.test1 =test1;