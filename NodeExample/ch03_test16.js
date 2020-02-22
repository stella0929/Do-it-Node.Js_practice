/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 

function add(a, b, callback){
    var result = a+b;
    callback(result);
    
    var history = function(){
        return a + '+' + b + '='+ result;
    }; //내부함수
    return history;
}

var add_history = add(20,20,function(result){
    console.log('더하기 결과: '+result);
    });
    
console.log('add_history의 자료형: '+typeof(add_history));
console.log('결과 값으로 받은 함수 실행: '+add_history());

    