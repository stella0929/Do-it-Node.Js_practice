/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ //console 입력 오류 해결
console.log('argv 속성의 파라미터 수 :' +process.argv.length);
console.dir(process.argv);
//process.argv-> 배열로 이루어져있음. cmd에서 실행할때
//node ch02.js -> 두개 파라미터 위치 들어있음.
//process도 전역객체
process.argv.forEach(function(item, index){
    console.log(index + ':' +item);
})
//argv각각 함수에 들어가면서 출력됨 item은 그 내용, index는 번호
 