/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
/*emit으로 보내고 on으로 받는다.
이벤트->프로그램안에서 데이터 전달
*/
process.on('exit',function(){
	console.log('exit 이벤트 발생함.');
});//process는 eventemmiter을 상속하고 있음.
//exit이라는 이벤트 발생했을때 자동으로 호출되는 함수
//exit이벤트는 프로세스 종료하는 순간 이벤트 발생.

setTimeout(function(){
	console.log('2초 후에 실행되었음.');
	process.exit();//내부적으로 emit을 보냄.
},2000); //일정시간 후에 실행


console.log('2초 후에 실행될 것임.')