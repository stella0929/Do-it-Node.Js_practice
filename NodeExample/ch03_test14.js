/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 

var users = [{name: '소녀시대',age:20},{name:'걸스데이',age: 22}, {name:'원더걸스', age:21}];

var users2 = users.slice(1,2);//걸스데이만
//slice는 복제의 의미.
console.log('users 객체');
console.dir(users);

console.log('users2 객체');
console.dir(users2);
