/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
//exports라는 객체가 리턴된다.
var user1 = require('./user1');

function showUser(){
 return user1.getUser().name+','+user1.group.name;	
}

console.log('사용자 정보->'+showUser());

