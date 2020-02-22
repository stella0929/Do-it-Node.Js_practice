/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 

var person = {};//객체 중괄호로 만들고 속성 추가

person['name'] = '소녀시대' //name 속성 추가
person['age'] = 20;

console.log('이름 : '+person.name);
console.log('나이 : '+person['age']);