/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var add2 = function (a, b){
  return a + b;    
}
//함수를 매개변수로 받을수도, 함수를 리턴할 수도 있음.
var result = add2(10,10);
console.log('더하기 결과: '+ result);
