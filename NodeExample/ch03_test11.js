/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var users = [{name: '소녀시대',age: 20}, {name:'걸스데이',age:22}];
console.log('배열원소의 개수: '+users.length);

users.push({name: '원더걸스',age: 21});
console.log('배열원소의 개수: '+users.length);

var elem = users.pop();
console.log('배열 원소의 개수: '+users.length);

console.log('pop으로 꺼낸 세번째 요소');
console.dir(elem);