/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var person1 = {name : '소녀시대', age:20};
var person2 = {name: '걸스데이', age: 21};

function Person(name, age){
	this.name = name;
	this.age = age;
}//프로토타입, 붕어빵 틀

Person.prototype.walk = function(speed){
	console.log(speed+'km 속도로 걸어갑니다.');
}

var person3 = new Person('소녀시대', 20);
var person4 = new Person('걸스데이', 22);

person3.walk(10);

