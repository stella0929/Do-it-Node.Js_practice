/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var names = ['소녀시대', '걸스데이', '원더걸스'];

var users = [{name: '소녀시대', age:20}, {name: '걸스데이',age: 22}];

users.push({name:'원더걸스', age:21});//원소 추가
console.log('사용자 수: '+users.length);

console.log('첫번째 사용자 이름: '+users[0].name);