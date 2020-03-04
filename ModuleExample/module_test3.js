/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var user = require('./user3');

function showUser(){
	return user.getUser().name+','+user.group.name;
}

console.log('사용자 정보: '+showUser());