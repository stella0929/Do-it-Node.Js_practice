/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 

function add(a, b, callback){
    var result = a+b;
    callback(result);
    
	var count = 0; 
	//내부함수가 자기를 만들어준 외부함수안에 있는 변수의 값을 그대로 유지하면서 참조할 수 있다.
	//그렇게 만들어주는게 closer
	
    var history = function(){
		count+=1;
        return count +':'+a + '+' + b + '='+ result;
    }; //내부함수
    return history;
}

var add_history = add(20,20,function(result){
    console.log('더하기 결과: '+result);
    });
    
console.log('add_history의 자료형: '+typeof(add_history));
console.log('결과 값으로 받은 함수 실행: '+add_history());
console.log('결과 값으로 받은 함수 실행: '+add_history());
console.log('결과 값으로 받은 함수 실행: '+add_history());
    