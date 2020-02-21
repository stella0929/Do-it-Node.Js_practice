/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ //console 입력 오류 해결
console.log('안녕하세요.');

console.log("숫자입니다 %d", 10);
/*js는 '' "" 구분 안함*/

console.log('문자열입니다. %s', "안녕");

//js 객체 생성
var person = {
    //속성
    name: '소녀시대', 
    age: 20
};

console.log("JSON객체입니다(js 객체). %j", person);
//console은 전역객체 코드에서 언제어디서나 사용가능
//console객체가 가지고 있는 log함수 이용법

console. dir(person);
//js객체 그대로 출력해줌. 라이브러리 사용할때 객체가 어떤
//속성가지고 있는지 확인 위해 사용

console.time('duration_time'/*키값*/);
var result= 0;
 for (var i=0; i<10000;i++){
     result +=i;
 }

console.timeEnd('duration_time');
//걸린시간 체크

console.log("파일 이름: %s", __filename);//파일
console.log("패스: %s", __dirname);//파일이 어떤 폴더위치

