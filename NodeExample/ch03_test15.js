/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 

function add(a, b, callback){
    var result = a + b;
    callback(result);
}

add(10,10,function(result){
    console.log('더하기 결과(콜백함수 안에서): '+result);
});
//파라미터로 전달되서 그 함수안에서 다시 파라미터로 전달된 함수를 호출하는 것--> callback 함수
